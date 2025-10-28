// AI Machine Learning Quiz - Level 2: Basic Concepts
(function() {
  const level2 = {
    name: {
      en: "Machine Learning Concepts",
      es: "Conceptos de Aprendizaje AutomÃ¡tico",
      de: "Maschinelles Lernen Konzepte",
      nl: "Machine Learning Concepten"
    },
    questions: [
      {
        question: {
          en: "What are the three main types of machine learning?",
          es: "Â¿CuÃ¡les son los tres tipos principales de aprendizaje automÃ¡tico?",
          de: "Was sind die drei Haupttypen des maschinellen Lernens?",
          nl: "Wat zijn de drie hoofdtypen van machine learning?"
        },
        options: [
          { en: "Supervised, Unsupervised, Reinforcement", es: "Supervisado, No supervisado, Refuerzo", de: "Ãœberwacht, UnÃ¼berwacht, VerstÃ¤rkung", nl: "Supervised, Unsupervised, Reinforcement" },
          { en: "Fast, Medium, Slow", es: "RÃ¡pido, Medio, Lento", de: "Schnell, Mittel, Langsam", nl: "Snel, Medium, Langzaam" },
          { en: "Easy, Normal, Hard", es: "FÃ¡cil, Normal, DifÃ­cil", de: "Einfach, Normal, Schwer", nl: "Makkelijk, Normaal, Moeilijk" },
          { en: "Big, Small, Medium", es: "Grande, PequeÃ±o, Mediano", de: "GroÃŸ, Klein, Mittel", nl: "Groot, Klein, Medium" }
        ],
        correct: 0,
        explanation: {
          en: "These three categories represent different learning approaches: supervised learning uses labeled data, unsupervised finds patterns in unlabeled data, and reinforcement learning learns through trial and reward.",
          es: "Estas tres categorÃ­as representan diferentes enfoques de aprendizaje: el aprendizaje supervisado usa datos etiquetados, el no supervisado encuentra patrones en datos no etiquetados, y el aprendizaje por refuerzo aprende a travÃ©s de prueba y recompensa.",
          de: "Diese drei Kategorien reprÃ¤sentieren verschiedene LernansÃ¤tze: Ã¼berwachtes Lernen verwendet beschriftete Daten, unÃ¼berwachtes findet Muster in unbeschrifteten Daten, und VerstÃ¤rkungslernen lernt durch Versuch und Belohnung.",
          nl: "Deze drie categorieÃ«n vertegenwoordigen verschillende leerbenaderingen: supervised learning gebruikt gelabelde data, unsupervised vindt patronen in ongelabelde data, en reinforcement learning leert door trial en beloning."
        }
      },
      {
        question: {
          en: "What is an algorithm in machine learning?",
          es: "Â¿QuÃ© es un algoritmo en aprendizaje automÃ¡tico?",
          de: "Was ist ein Algorithmus im maschinellen Lernen?",
          nl: "Wat is een algoritme in machine learning?"
        },
        options: [
          { en: "A computer program", es: "Un programa de computadora", de: "Ein Computerprogramm", nl: "Een computerprogramma" },
          { en: "A set of rules for solving problems", es: "Un conjunto de reglas para resolver problemas", de: "Ein Regelwerk zur ProblemlÃ¶sung", nl: "Een set regels voor het oplossen van problemen" },
          { en: "A type of robot", es: "Un tipo de robot", de: "Eine Art von Roboter", nl: "Een type robot" },
          { en: "A social media platform", es: "Una plataforma de redes sociales", de: "Eine Social-Media-Plattform", nl: "Een social media platform" }
        ],
        correct: 1,
        explanation: {
          en: "An algorithm is a step-by-step set of instructions or rules that tells the computer how to solve a specific problem or complete a task.",
          es: "Un algoritmo es un conjunto paso a paso de instrucciones o reglas que le dice a la computadora cÃ³mo resolver un problema especÃ­fico o completar una tarea.",
          de: "Ein Algorithmus ist eine schrittweise Anleitung oder Regelwerk, das dem Computer sagt, wie er ein spezifisches Problem lÃ¶sen oder eine Aufgabe erfÃ¼llen kann.",
          nl: "Een algoritme is een stapsgewijze set instructies of regels die de computer vertelt hoe een specifiek probleem op te lossen of een taak te voltooien."
        }
      },
      {
        question: {
          en: "What is the 'Netflix recommendation system' an example of?",
          es: "Â¿De quÃ© es un ejemplo el 'sistema de recomendaciones de Netflix'?",
          de: "WofÃ¼r ist das 'Netflix-Empfehlungssystem' ein Beispiel?",
          nl: "Waar is het 'Netflix aanbevelingssysteem' een voorbeeld van?"
        },
        options: [
          { en: "Machine learning in action", es: "Aprendizaje automÃ¡tico en acciÃ³n", de: "Maschinelles Lernen in Aktion", nl: "Machine learning in actie" },
          { en: "A manual process", es: "Un proceso manual", de: "Ein manueller Prozess", nl: "Een handmatig proces" },
          { en: "Random selection", es: "SelecciÃ³n aleatoria", de: "ZufÃ¤llige Auswahl", nl: "Willekeurige selectie" },
          { en: "Human decision making", es: "Toma de decisiones humanas", de: "Menschliche Entscheidungsfindung", nl: "Menselijke besluitvorming" }
        ],
        correct: 0,
        explanation: {
          en: "Netflix uses machine learning algorithms to analyze your viewing history and preferences to automatically suggest movies and shows you might enjoy.",
          es: "Netflix utiliza algoritmos de aprendizaje automÃ¡tico para analizar tu historial de visualizaciÃ³n y preferencias para sugerir automÃ¡ticamente pelÃ­culas y programas que podrÃ­an gustarte.",
          de: "Netflix verwendet maschinelle Lernalgorithmen, um Ihre Sehgewohnheiten und Vorlieben zu analysieren und automatisch Filme und Serien vorzuschlagen, die Ihnen gefallen kÃ¶nnten.",
          nl: "Netflix gebruikt machine learning algoritmes om je kijkgeschiedenis en voorkeuren te analyseren om automatisch films en shows voor te stellen die je misschien leuk vindt."
        }
      },
      {
        question: {
          en: "What does 'Big Data' mean in the context of AI?",
          es: "Â¿QuÃ© significa 'Big Data' en el contexto de IA?",
          de: "Was bedeutet 'Big Data' im Kontext von KI?",
          nl: "Wat betekent 'Big Data' in de context van AI?"
        },
        options: [
          { en: "Data stored on large computers", es: "Datos almacenados en computadoras grandes", de: "Daten auf groÃŸen Computern gespeichert", nl: "Data opgeslagen op grote computers" },
          { en: "Very large amounts of information", es: "Cantidades muy grandes de informaciÃ³n", de: "Sehr groÃŸe Mengen an Informationen", nl: "Zeer grote hoeveelheden informatie" },
          { en: "Important business data", es: "Datos comerciales importantes", de: "Wichtige GeschÃ¤ftsdaten", nl: "Belangrijke bedrijfsdata" },
          { en: "Data about big companies", es: "Datos sobre grandes empresas", de: "Daten Ã¼ber groÃŸe Unternehmen", nl: "Data over grote bedrijven" }
        ],
        correct: 1,
        explanation: {
          en: "Big Data refers to datasets that are so large and complex that traditional data processing applications cannot handle them effectively, often requiring specialized AI tools.",
          es: "Big Data se refiere a conjuntos de datos que son tan grandes y complejos que las aplicaciones tradicionales de procesamiento de datos no pueden manejarlos efectivamente, a menudo requiriendo herramientas especializadas de IA.",
          de: "Big Data bezieht sich auf DatensÃ¤tze, die so groÃŸ und komplex sind, dass herkÃ¶mmliche Datenverarbeitungsanwendungen sie nicht effektiv handhaben kÃ¶nnen, oft spezialisierte KI-Tools erfordern.",
          nl: "Big Data verwijst naar datasets die zo groot en complex zijn dat traditionele gegevensverwerkingsapplicaties ze niet effectief kunnen verwerken, vaak gespecialiseerde AI-tools vereisen."
        }
      },
      {
        question: {
          en: "What is a neural network inspired by?",
          es: "Â¿En quÃ© estÃ¡ inspirada una red neuronal?",
          de: "Wovon ist ein neuronales Netzwerk inspiriert?",
          nl: "Waar is een neuraal netwerk op geÃ¯nspireerd?"
        },
        options: [
          { en: "Computer circuits", es: "Circuitos de computadora", de: "Computerschaltkreise", nl: "Computer circuits" },
          { en: "The human brain", es: "El cerebro humano", de: "Das menschliche Gehirn", nl: "Het menselijk brein" },
          { en: "Road networks", es: "Redes de carreteras", de: "StraÃŸennetze", nl: "Wegennetwerken" },
          { en: "Social networks", es: "Redes sociales", de: "Soziale Netzwerke", nl: "Sociale netwerken" }
        ],
        correct: 1,
        explanation: {
          en: "Neural networks are designed to mimic how neurons in the human brain connect and process information, though in a much simplified way.",
          es: "Las redes neuronales estÃ¡n diseÃ±adas para imitar cÃ³mo las neuronas en el cerebro humano se conectan y procesan informaciÃ³n, aunque de una manera muy simplificada.",
          de: "Neuronale Netzwerke sind darauf ausgelegt, nachzuahmen, wie Neuronen im menschlichen Gehirn sich verbinden und Informationen verarbeiten, allerdings in sehr vereinfachter Weise.",
          nl: "Neurale netwerken zijn ontworpen om na te bootsen hoe neuronen in het menselijk brein verbinden en informatie verwerken, hoewel op een veel vereenvoudigde manier."
        }
      },
      {
        question: {
          en: "What is the difference between classification and regression?",
          es: "¿Cuál es la diferencia entre clasificación y regresión?",
          de: "Was ist der Unterschied zwischen Klassifikation und Regression?",
          nl: "Wat is het verschil tussen classificatie en regressie?"
        },
        options: [
          { en: "Classification predicts categories, regression predicts numbers", es: "Clasificación predice categorías, regresión predice números", de: "Klassifikation sagt Kategorien vorher, Regression sagt Zahlen vorher", nl: "Classificatie voorspelt categorieën, regressie voorspelt getallen" },
          { en: "Classification is faster than regression", es: "Clasificación es más rápida que regresión", de: "Klassifikation ist schneller als Regression", nl: "Classificatie is sneller dan regressie" },
          { en: "Regression only works with images", es: "Regresión solo funciona con imágenes", de: "Regression funktioniert nur mit Bildern", nl: "Regressie werkt alleen met afbeeldingen" },
          { en: "They are exactly the same", es: "Son exactamente iguales", de: "Sie sind genau gleich", nl: "Ze zijn precies hetzelfde" }
        ],
        correct: 0,
        explanation: {
          en: "Classification predicts discrete categories or classes (like spam/not spam), while regression predicts continuous numerical values (like house prices or temperature).",
          es: "Clasificación predice categorías o clases discretas (como spam/no spam), mientras regresión predice valores numéricos continuos (como precios de casas o temperatura).",
          de: "Klassifikation sagt diskrete Kategorien oder Klassen vorher (wie Spam/kein Spam), während Regression kontinuierliche numerische Werte vorhersagt (wie Hauspreise oder Temperatur).",
          nl: "Classificatie voorspelt discrete categorieën of klassen (zoals spam/geen spam), terwijl regressie continue numerieke waarden voorspelt (zoals huisprijzen of temperatuur)."
        }
      },
      {
        question: {
          en: "What is 'training data' in machine learning?",
          es: "¿Qué son los 'datos de entrenamiento' en machine learning?",
          de: "Was sind 'Trainingsdaten' im maschinellen Lernen?",
          nl: "Wat zijn 'trainingsdata' in machine learning?"
        },
        options: [
          { en: "Examples used to teach the algorithm", es: "Ejemplos usados para enseñar al algoritmo", de: "Beispiele zum Lehren des Algorithmus", nl: "Voorbeelden gebruikt om het algoritme te leren" },
          { en: "Data for testing computers", es: "Datos para probar computadoras", de: "Daten zum Testen von Computern", nl: "Data voor het testen van computers" },
          { en: "Information about trains", es: "Información sobre trenes", de: "Informationen über Züge", nl: "Informatie over treinen" },
          { en: "Data that moves very fast", es: "Datos que se mueven muy rápido", de: "Daten die sich sehr schnell bewegen", nl: "Data die heel snel beweegt" }
        ],
        correct: 0,
        explanation: {
          en: "Training data is the dataset used to teach a machine learning algorithm. It contains input examples and their correct outputs, helping the algorithm learn patterns.",
          es: "Los datos de entrenamiento son el conjunto de datos usado para enseñar un algoritmo de machine learning. Contiene ejemplos de entrada y sus salidas correctas, ayudando al algoritmo a aprender patrones.",
          de: "Trainingsdaten sind der Datensatz, der verwendet wird, um einem maschinellen Lernalgorithmus zu lehren. Sie enthalten Eingabebeispiele und ihre korrekten Ausgaben und helfen dem Algorithmus, Muster zu lernen.",
          nl: "Trainingsdata is de dataset gebruikt om een machine learning algoritme te leren. Het bevat invoervoorbeelden en hun correcte uitvoer, wat het algoritme helpt patronen te leren."
        }
      },
      {
        question: {
          en: "What is 'testing data' used for?",
          es: "¿Para qué se usan los 'datos de prueba'?",
          de: "Wofür werden 'Testdaten' verwendet?",
          nl: "Waarvoor worden 'testdata' gebruikt?"
        },
        options: [
          { en: "To check how well the trained model works on new data", es: "Para verificar qué tan bien funciona el modelo entrenado en datos nuevos", de: "Um zu prüfen, wie gut das trainierte Modell bei neuen Daten funktioniert", nl: "Om te controleren hoe goed het getrainde model werkt op nieuwe data" },
          { en: "To train the algorithm faster", es: "Para entrenar el algoritmo más rápido", de: "Um den Algorithmus schneller zu trainieren", nl: "Om het algoritme sneller te trainen" },
          { en: "To store extra information", es: "Para almacenar información extra", de: "Um zusätzliche Informationen zu speichern", nl: "Om extra informatie op te slaan" },
          { en: "To make the computer run tests", es: "Para hacer que la computadora ejecute pruebas", de: "Damit der Computer Tests ausführt", nl: "Om de computer tests te laten uitvoeren" }
        ],
        correct: 0,
        explanation: {
          en: "Testing data is used to evaluate how well a trained model performs on data it hasn't seen before, helping measure if the model can generalize to new situations.",
          es: "Los datos de prueba se usan para evaluar qué tan bien funciona un modelo entrenado en datos que no ha visto antes, ayudando a medir si el modelo puede generalizar a nuevas situaciones.",
          de: "Testdaten werden verwendet, um zu bewerten, wie gut ein trainiertes Modell bei Daten funktioniert, die es zuvor nicht gesehen hat, und helfen zu messen, ob das Modell auf neue Situationen verallgemeinern kann.",
          nl: "Testdata worden gebruikt om te evalueren hoe goed een getraind model presteert op data die het nog niet eerder heeft gezien, wat helpt om te meten of het model kan generaliseren naar nieuwe situaties."
        }
      },
      {
        question: {
          en: "What does 'machine learning model' mean?",
          es: "¿Qué significa 'modelo de machine learning'?",
          de: "Was bedeutet 'maschinelles Lernmodell'?",
          nl: "Wat betekent 'machine learning model'?"
        },
        options: [
          { en: "A trained algorithm that can make predictions", es: "Un algoritmo entrenado que puede hacer predicciones", de: "Ein trainierter Algorithmus, der Vorhersagen treffen kann", nl: "Een getraind algoritme dat voorspellingen kan maken" },
          { en: "A small toy computer", es: "Una computadora de juguete pequeña", de: "Ein kleiner Spielzeugcomputer", nl: "Een kleine speelgoedcomputer" },
          { en: "A 3D printed robot", es: "Un robot impreso en 3D", de: "Ein 3D-gedruckter Roboter", nl: "Een 3D geprinte robot" },
          { en: "A picture of a machine", es: "Una imagen de una máquina", de: "Ein Bild einer Maschine", nl: "Een afbeelding van een machine" }
        ],
        correct: 0,
        explanation: {
          en: "A machine learning model is the result of training an algorithm on data. It represents the patterns learned and can make predictions on new, unseen data.",
          es: "Un modelo de machine learning es el resultado de entrenar un algoritmo con datos. Representa los patrones aprendidos y puede hacer predicciones en datos nuevos y no vistos.",
          de: "Ein maschinelles Lernmodell ist das Ergebnis des Trainings eines Algorithmus mit Daten. Es repräsentiert die gelernten Muster und kann Vorhersagen für neue, ungesehene Daten treffen.",
          nl: "Een machine learning model is het resultaat van het trainen van een algoritme op data. Het vertegenwoordigt de geleerde patronen en kan voorspellingen maken op nieuwe, ongeziene data."
        }
      },
      {
        question: {
          en: "What is a 'feature' in machine learning?",
          es: "¿Qué es una 'característica' en machine learning?",
          de: "Was ist ein 'Merkmal' im maschinellen Lernen?",
          nl: "Wat is een 'feature' in machine learning?"
        },
        options: [
          { en: "An individual measurable property of something being observed", es: "Una propiedad medible individual de algo que se está observando", de: "Eine einzelne messbare Eigenschaft von etwas, das beobachtet wird", nl: "Een individuele meetbare eigenschap van iets dat wordt waargenomen" },
          { en: "A special function of the computer", es: "Una función especial de la computadora", de: "Eine spezielle Funktion des Computers", nl: "Een speciale functie van de computer" },
          { en: "A movie about machines", es: "Una película sobre máquinas", de: "Ein Film über Maschinen", nl: "Een film over machines" },
          { en: "A broken part of the algorithm", es: "Una parte rota del algoritmo", de: "Ein defekter Teil des Algorithmus", nl: "Een kapot onderdeel van het algoritme" }
        ],
        correct: 0,
        explanation: {
          en: "A feature is an individual measurable property or characteristic of something being observed, like height, weight, or color. Features are the input variables used to make predictions.",
          es: "Una característica es una propiedad o característica medible individual de algo que se está observando, como altura, peso o color. Las características son las variables de entrada usadas para hacer predicciones.",
          de: "Ein Merkmal ist eine einzelne messbare Eigenschaft oder Charakteristikum von etwas, das beobachtet wird, wie Größe, Gewicht oder Farbe. Merkmale sind die Eingabevariablen, die für Vorhersagen verwendet werden.",
          nl: "Een feature is een individuele meetbare eigenschap of karakteristiek van iets dat wordt waargenomen, zoals lengte, gewicht of kleur. Features zijn de inputvariabelen die gebruikt worden om voorspellingen te maken."
        }
      },
      {
        question: {
          en: "What is 'artificial intelligence' (AI)?",
          es: "¿Qué es la 'inteligencia artificial' (IA)?",
          de: "Was ist 'künstliche Intelligenz' (KI)?",
          nl: "Wat is 'kunstmatige intelligentie' (AI)?"
        },
        options: [
          { en: "Technology that enables machines to think and learn like humans", es: "Tecnología que permite a las máquinas pensar y aprender como humanos", de: "Technologie, die Maschinen ermöglicht, wie Menschen zu denken und zu lernen", nl: "Technologie die machines in staat stelt om te denken en leren zoals mensen" },
          { en: "Fake intelligence that doesn't work", es: "Inteligencia falsa que no funciona", de: "Falsche Intelligenz, die nicht funktioniert", nl: "Neppe intelligentie die niet werkt" },
          { en: "Only intelligence found in robots", es: "Solo inteligencia encontrada en robots", de: "Nur Intelligenz, die in Robotern gefunden wird", nl: "Alleen intelligentie gevonden in robots" },
          { en: "Intelligence that costs a lot of money", es: "Inteligencia que cuesta mucho dinero", de: "Intelligenz, die viel Geld kostet", nl: "Intelligentie die veel geld kost" }
        ],
        correct: 0,
        explanation: {
          en: "Artificial Intelligence (AI) is technology that enables machines to simulate human intelligence - learning, reasoning, perceiving, and making decisions. Machine learning is a subset of AI.",
          es: "Inteligencia Artificial (IA) es tecnología que permite a las máquinas simular inteligencia humana - aprender, razonar, percibir y tomar decisiones. Machine learning es un subconjunto de IA.",
          de: "Künstliche Intelligenz (KI) ist Technologie, die Maschinen ermöglicht, menschliche Intelligenz zu simulieren - Lernen, Schließen, Wahrnehmen und Entscheidungen treffen. Maschinelles Lernen ist eine Teilmenge von KI.",
          nl: "Kunstmatige Intelligentie (AI) is technologie die machines in staat stelt menselijke intelligentie te simuleren - leren, redeneren, waarnemen en beslissingen nemen. Machine learning is een onderdeel van AI."
        }
      },
      {
        question: {
          en: "What is a 'dataset' in machine learning?",
          es: "¿Qué es un 'conjunto de datos' en machine learning?",
          de: "Was ist ein 'Datensatz' im maschinellen Lernen?",
          nl: "Wat is een 'dataset' in machine learning?"
        },
        options: [
          { en: "A collection of data used for training and testing", es: "Una colección de datos usada para entrenamiento y pruebas", de: "Eine Sammlung von Daten für Training und Tests", nl: "Een verzameling data gebruikt voor training en testen" },
          { en: "A single piece of information", es: "Una sola pieza de información", de: "Ein einzelnes Stück Information", nl: "Een enkel stuk informatie" },
          { en: "A computer's memory", es: "La memoria de una computadora", de: "Der Speicher eines Computers", nl: "Het geheugen van een computer" },
          { en: "A set of dates on a calendar", es: "Un conjunto de fechas en un calendario", de: "Eine Reihe von Daten in einem Kalender", nl: "Een set datums op een kalender" }
        ],
        correct: 0,
        explanation: {
          en: "A dataset is a collection of related data points or examples that machines use to learn patterns. It typically includes many examples with features and target values for training algorithms.",
          es: "Un conjunto de datos es una colección de puntos de datos o ejemplos relacionados que las máquinas usan para aprender patrones. Típicamente incluye muchos ejemplos con características y valores objetivo para entrenar algoritmos.",
          de: "Ein Datensatz ist eine Sammlung verwandter Datenpunkte oder Beispiele, die Maschinen verwenden, um Muster zu lernen. Er enthält typischerweise viele Beispiele mit Merkmalen und Zielwerten für das Training von Algorithmen.",
          nl: "Een dataset is een verzameling van gerelateerde datapunten of voorbeelden die machines gebruiken om patronen te leren. Het bevat meestal vele voorbeelden met features en doelwaarden voor het trainen van algoritmes."
        }
      },
      {
        question: {
          en: "What does 'pattern recognition' mean in AI?",
          es: "¿Qué significa 'reconocimiento de patrones' en IA?",
          de: "Was bedeutet 'Mustererkennung' in der KI?",
          nl: "Wat betekent 'patroonherkenning' in AI?"
        },
        options: [
          { en: "Finding repeating structures or regularities in data", es: "Encontrar estructuras repetitivas o regularidades en datos", de: "Wiederkehrende Strukturen oder Regelmäßigkeiten in Daten finden", nl: "Het vinden van herhalende structuren of regelmatigheden in data" },
          { en: "Making patterns on fabric", es: "Hacer patrones en tela", de: "Muster auf Stoff erstellen", nl: "Patronen maken op stof" },
          { en: "Recognizing famous people", es: "Reconocer personas famosas", de: "Berühmte Personen erkennen", nl: "Beroemde mensen herkennen" },
          { en: "Drawing geometric shapes", es: "Dibujar formas geométricas", de: "Geometrische Formen zeichnen", nl: "Geometrische vormen tekenen" }
        ],
        correct: 0,
        explanation: {
          en: "Pattern recognition is the ability to identify regularities, trends, or repeating structures in data. This is fundamental to how machine learning algorithms work - they find patterns to make predictions.",
          es: "Reconocimiento de patrones es la habilidad de identificar regularidades, tendencias o estructuras repetitivas en datos. Esto es fundamental para cómo funcionan los algoritmos de machine learning - encuentran patrones para hacer predicciones.",
          de: "Mustererkennung ist die Fähigkeit, Regelmäßigkeiten, Trends oder wiederkehrende Strukturen in Daten zu identifizieren. Dies ist grundlegend dafür, wie maschinelle Lernalgorithmen funktionieren - sie finden Muster, um Vorhersagen zu treffen.",
          nl: "Patroonherkenning is het vermogen om regelmatigheden, trends of herhalende structuren in data te identificeren. Dit is fundamenteel voor hoe machine learning algoritmes werken - ze vinden patronen om voorspellingen te maken."
        }
      },
      {
        question: {
          en: "What is 'data' in the context of machine learning?",
          es: "¿Qué es 'data' en el contexto de machine learning?",
          de: "Was sind 'Daten' im Kontext des maschinellen Lernens?",
          nl: "Wat is 'data' in de context van machine learning?"
        },
        options: [
          { en: "Information that can be processed by computers to learn patterns", es: "Información que puede ser procesada por computadoras para aprender patrones", de: "Informationen, die von Computern verarbeitet werden können, um Muster zu lernen", nl: "Informatie die door computers kan worden verwerkt om patronen te leren" },
          { en: "Only numbers and calculations", es: "Solo números y cálculos", de: "Nur Zahlen und Berechnungen", nl: "Alleen getallen en berekeningen" },
          { en: "Pictures and videos only", es: "Solo imágenes y videos", de: "Nur Bilder und Videos", nl: "Alleen afbeeldingen en video's" },
          { en: "Information stored on phones", es: "Información almacenada en teléfonos", de: "Informationen auf Telefonen gespeichert", nl: "Informatie opgeslagen op telefoons" }
        ],
        correct: 0,
        explanation: {
          en: "Data in machine learning can be any information - numbers, text, images, sounds, or measurements - that computers can process to identify patterns and make predictions.",
          es: "Los datos en machine learning pueden ser cualquier información - números, texto, imágenes, sonidos o mediciones - que las computadoras pueden procesar para identificar patrones y hacer predicciones.",
          de: "Daten im maschinellen Lernen können jede Information sein - Zahlen, Text, Bilder, Töne oder Messungen - die Computer verarbeiten können, um Muster zu identifizieren und Vorhersagen zu treffen.",
          nl: "Data in machine learning kan elke informatie zijn - getallen, tekst, afbeeldingen, geluiden of metingen - die computers kunnen verwerken om patronen te identificeren en voorspellingen te maken."
        }
      },
      {
        question: {
          en: "What does 'learning' mean when we talk about machine learning?",
          es: "¿Qué significa 'aprender' cuando hablamos de machine learning?",
          de: "Was bedeutet 'Lernen' wenn wir über maschinelles Lernen sprechen?",
          nl: "Wat betekent 'leren' als we het hebben over machine learning?"
        },
        options: [
          { en: "Improving performance by finding patterns in data", es: "Mejorar el rendimiento encontrando patrones en datos", de: "Leistung verbessern durch das Finden von Mustern in Daten", nl: "Prestaties verbeteren door patronen in data te vinden" },
          { en: "Memorizing everything perfectly", es: "Memorizar todo perfectamente", de: "Alles perfekt auswendig lernen", nl: "Alles perfect onthouden" },
          { en: "Reading books and studying", es: "Leer libros y estudiar", de: "Bücher lesen und studieren", nl: "Boeken lezen en studeren" },
          { en: "Going to school like humans", es: "Ir a la escuela como humanos", de: "Zur Schule gehen wie Menschen", nl: "Naar school gaan zoals mensen" }
        ],
        correct: 0,
        explanation: {
          en: "In machine learning, 'learning' means the algorithm gets better at making predictions by analyzing data and finding patterns, similar to how humans learn from experience.",
          es: "En machine learning, 'aprender' significa que el algoritmo mejora haciendo predicciones analizando datos y encontrando patrones, similar a cómo los humanos aprenden de la experiencia.",
          de: "Im maschinellen Lernen bedeutet 'Lernen', dass der Algorithmus besser darin wird, Vorhersagen zu treffen, indem er Daten analysiert und Muster findet, ähnlich wie Menschen aus Erfahrung lernen.",
          nl: "In machine learning betekent 'leren' dat het algoritme beter wordt in het maken van voorspellingen door data te analyseren en patronen te vinden, vergelijkbaar met hoe mensen leren van ervaring."
        }
      },
      {
        question: {
          en: "What is the main goal of machine learning?",
          es: "¿Cuál es el objetivo principal de machine learning?",
          de: "Was ist das Hauptziel des maschinellen Lernens?",
          nl: "Wat is het hoofddoel van machine learning?"
        },
        options: [
          { en: "To make accurate predictions on new, unseen data", es: "Hacer predicciones precisas en datos nuevos y no vistos", de: "Genaue Vorhersagen für neue, ungesehene Daten zu treffen", nl: "Nauwkeurige voorspellingen maken op nieuwe, ongeziene data" },
          { en: "To replace all human workers", es: "Reemplazar a todos los trabajadores humanos", de: "Alle menschlichen Arbeiter zu ersetzen", nl: "Alle menselijke werknemers vervangen" },
          { en: "To make computers think like humans", es: "Hacer que las computadoras piensen como humanos", de: "Computer dazu zu bringen, wie Menschen zu denken", nl: "Computers laten denken zoals mensen" },
          { en: "To store large amounts of data", es: "Almacenar grandes cantidades de datos", de: "Große Datenmengen zu speichern", nl: "Grote hoeveelheden data opslaan" }
        ],
        correct: 0,
        explanation: {
          en: "The main goal of machine learning is to create models that can generalize from training data to make accurate predictions or decisions on new, previously unseen data.",
          es: "El objetivo principal de machine learning es crear modelos que puedan generalizar de datos de entrenamiento para hacer predicciones o decisiones precisas en datos nuevos y previamente no vistos.",
          de: "Das Hauptziel des maschinellen Lernens ist es, Modelle zu erstellen, die von Trainingsdaten verallgemeinern können, um genaue Vorhersagen oder Entscheidungen für neue, zuvor ungesehene Daten zu treffen.",
          nl: "Het hoofddoel van machine learning is om modellen te creëren die kunnen generaliseren van trainingsdata om nauwkeurige voorspellingen of beslissingen te maken op nieuwe, eerder ongeziene data."
        }
      },
      {
        question: {
          en: "What is an example of unsupervised learning?",
          es: "¿Qué es un ejemplo de aprendizaje no supervisado?",
          de: "Was ist ein Beispiel für unüberwachtes Lernen?",
          nl: "Wat is een voorbeeld van unsupervised learning?"
        },
        options: [
          { en: "Finding groups of similar customers without knowing the groups beforehand", es: "Encontrar grupos de clientes similares sin conocer los grupos de antemano", de: "Gruppen ähnlicher Kunden finden ohne die Gruppen vorher zu kennen", nl: "Groepen van vergelijkbare klanten vinden zonder de groepen van tevoren te kennen" },
          { en: "Teaching computers to recognize cats with labeled pictures", es: "Enseñar a computadoras a reconocer gatos con imágenes etiquetadas", de: "Computer lehren, Katzen mit beschrifteten Bildern zu erkennen", nl: "Computers leren katten te herkennen met gelabelde afbeeldingen" },
          { en: "Predicting house prices with known examples", es: "Predecir precios de casas con ejemplos conocidos", de: "Hauspreise mit bekannten Beispielen vorhersagen", nl: "Huisprijzen voorspellen met bekende voorbeelden" },
          { en: "Learning without any computer", es: "Aprender sin ninguna computadora", de: "Lernen ohne Computer", nl: "Leren zonder computer" }
        ],
        correct: 0,
        explanation: {
          en: "Unsupervised learning finds hidden patterns in data without being told what to look for. Clustering customers by shopping behavior is a common example - the algorithm discovers groups on its own.",
          es: "El aprendizaje no supervisado encuentra patrones ocultos en datos sin que se le diga qué buscar. Agrupar clientes por comportamiento de compra es un ejemplo común - el algoritmo descubre grupos por sí solo.",
          de: "Unüberwachtes Lernen findet versteckte Muster in Daten, ohne gesagt zu bekommen, wonach zu suchen ist. Das Gruppieren von Kunden nach Einkaufsverhalten ist ein häufiges Beispiel - der Algorithmus entdeckt Gruppen selbständig.",
          nl: "Unsupervised learning vindt verborgen patronen in data zonder te worden verteld waarnaar te zoeken. Het groeperen van klanten op winkelgedrag is een veelvoorkomend voorbeeld - het algoritme ontdekt groepen zelfstandig."
        }
      },
      {
        question: {
          en: "What is an example of reinforcement learning?",
          es: "¿Qué es un ejemplo de aprendizaje por refuerzo?",
          de: "Was ist ein Beispiel für Verstärkungslernen?",
          nl: "Wat is een voorbeeld van reinforcement learning?"
        },
        options: [
          { en: "A computer learning to play chess by playing many games and getting rewards for wins", es: "Una computadora aprendiendo a jugar ajedrez jugando muchos juegos y recibiendo recompensas por victorias", de: "Ein Computer lernt Schach zu spielen, indem er viele Spiele spielt und Belohnungen für Siege erhält", nl: "Een computer die leert schaken door veel spellen te spelen en beloningen te krijgen voor overwinningen" },
          { en: "Teaching with many examples and correct answers", es: "Enseñar con muchos ejemplos y respuestas correctas", de: "Lehren mit vielen Beispielen und richtigen Antworten", nl: "Leren met veel voorbeelden en juiste antwoorden" },
          { en: "Finding patterns without any guidance", es: "Encontrar patrones sin ninguna orientación", de: "Muster finden ohne jede Anleitung", nl: "Patronen vinden zonder enige begeleiding" },
          { en: "Learning only from textbooks", es: "Aprender solo de libros de texto", de: "Nur aus Lehrbüchern lernen", nl: "Alleen leren uit tekstboeken" }
        ],
        correct: 0,
        explanation: {
          en: "Reinforcement learning learns through trial and error with rewards and penalties. Like training a pet with treats, the algorithm learns what actions lead to good outcomes through experience.",
          es: "El aprendizaje por refuerzo aprende a través de prueba y error con recompensas y penalidades. Como entrenar una mascota con premios, el algoritmo aprende qué acciones llevan a buenos resultados a través de la experiencia.",
          de: "Verstärkungslernen lernt durch Versuch und Irrtum mit Belohnungen und Strafen. Wie das Training eines Haustiers mit Leckerlis lernt der Algorithmus durch Erfahrung, welche Aktionen zu guten Ergebnissen führen.",
          nl: "Reinforcement learning leert door trial en error met beloningen en straffen. Zoals het trainen van een huisdier met traktaties, leert het algoritme door ervaring welke acties tot goede resultaten leiden."
        }
      },
      {
        question: {
          en: "What is feature selection in machine learning?",
          es: "¿Qué es la selección de características en aprendizaje automático?",
          de: "Was ist Feature-Auswahl im maschinellen Lernen?",
          nl: "Wat is feature selectie in machine learning?"
        },
        options: [
          { en: "Choosing the most important input variables for training the model", es: "Elegir las variables de entrada más importantes para entrenar el modelo", de: "Die wichtigsten Eingabevariablen für das Training des Modells auswählen", nl: "De belangrijkste invoervariabelen kiezen voor het trainen van het model" },
          { en: "Selecting which machine learning algorithm to use", es: "Seleccionar qué algoritmo de aprendizaje automático usar", de: "Auswählen welcher maschinelle Lernalgorithmus zu verwenden ist", nl: "Selecteren welk machine learning algoritme te gebruiken" },
          { en: "Choosing the best computer hardware for training", es: "Elegir el mejor hardware de computadora para entrenamiento", de: "Die beste Computer-Hardware für das Training auswählen", nl: "De beste computerhardware kiezen voor training" },
          { en: "Picking features for the user interface", es: "Elegir características para la interfaz de usuario", de: "Features für die Benutzeroberfläche auswählen", nl: "Features kiezen voor de gebruikersinterface" }
        ],
        correct: 0,
        explanation: {
          en: "Feature selection helps improve model performance by removing irrelevant or redundant input variables, reducing complexity and potentially improving accuracy.",
          es: "La selección de características ayuda a mejorar el rendimiento del modelo eliminando variables de entrada irrelevantes o redundantes, reduciendo complejidad y potencialmente mejorando la precisión.",
          de: "Feature-Auswahl hilft die Modellleistung zu verbessern durch Entfernung irrelevanter oder redundanter Eingabevariablen, reduziert Komplexität und verbessert potenziell die Genauigkeit.",
          nl: "Feature selectie helpt modelprestaties te verbeteren door irrelevante of redundante invoervariabelen te verwijderen, vermindert complexiteit en verbetert mogelijk de nauwkeurigheid."
        }
      },
      {
        question: {
          en: "What is cross-validation in machine learning?",
          es: "¿Qué es la validación cruzada en aprendizaje automático?",
          de: "Was ist Kreuzvalidierung im maschinellen Lernen?",
          nl: "Wat is cross-validatie in machine learning?"
        },
        options: [
          { en: "A technique to test model performance by splitting data into multiple folds for training and testing", es: "Una técnica para probar el rendimiento del modelo dividiendo datos en múltiples partes para entrenamiento y prueba", de: "Eine Technik um Modellleistung zu testen durch Aufteilen von Daten in mehrere Abschnitte für Training und Testen", nl: "Een techniek om modelprestaties te testen door data op te splitsen in meerdere delen voor training en testen" },
          { en: "Validating that different algorithms give the same results", es: "Validar que diferentes algoritmos den los mismos resultados", de: "Validieren dass verschiedene Algorithmen dieselben Ergebnisse geben", nl: "Valideren dat verschillende algoritmes dezelfde resultaten geven" },
          { en: "Checking if the data is correct by asking multiple people", es: "Verificar si los datos son correctos preguntando a múltiples personas", de: "Prüfen ob die Daten korrekt sind durch Befragung mehrerer Personen", nl: "Controleren of de data correct is door meerdere mensen te vragen" },
          { en: "Training models on different types of computers", es: "Entrenar modelos en diferentes tipos de computadoras", de: "Modelle auf verschiedenen Computertypen trainieren", nl: "Modellen trainen op verschillende soorten computers" }
        ],
        correct: 0,
        explanation: {
          en: "Cross-validation provides a more reliable estimate of model performance by training and testing on different portions of the data multiple times, helping detect overfitting.",
          es: "La validación cruzada proporciona una estimación más confiable del rendimiento del modelo entrenando y probando en diferentes porciones de los datos múltiples veces, ayudando a detectar sobreajuste.",
          de: "Kreuzvalidierung bietet eine zuverlässigere Schätzung der Modellleistung durch Training und Testen auf verschiedenen Datenteilen mehrfach, hilft Overfitting zu erkennen.",
          nl: "Cross-validatie biedt een betrouwbaardere schatting van modelprestaties door meerdere keren te trainen en testen op verschillende delen van de data, helpt overfitting te detecteren."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  } else if (typeof window !== 'undefined') {
    window.level2 = level2;
  }
})();
