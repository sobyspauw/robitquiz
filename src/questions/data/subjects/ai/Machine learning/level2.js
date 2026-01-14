// Machine learning Quiz - Level 2
(function() {
  const level2 = {
    name: {
          "en": "Machine Learning Concepts",
          "es": "Conceptos de Aprendizaje AutomÃ¡tico",
          "de": "Maschinelles Lernen Konzepte",
          "nl": "Machine Learning Concepten"
    },
    questions: [
      {
        question: {
                  "en": "What are the three main types of machine learning?",
                  "es": "Â¿CuÃ¡les son los tres tipos principales de aprendizaje automÃ¡tico?",
                  "de": "Was sind die drei Haupttypen des maschinellen Lernens?",
                  "nl": "Wat zijn de drie hoofdtypen van machine learning?"
        },
        options: [
        {
                  "en": "Fast, Medium, Slow",
                  "es": "RÃ¡pido, Medio, Lento",
                  "de": "Schnell, Mittel, Langsam",
                  "nl": "Snel, Medium, Langzaam"
        },
        {
                  "en": "Supervised, Unsupervised, Reinforcement",
                  "es": "Supervisado, No supervisado, Refuerzo",
                  "de": "Ãœberwacht, UnÃ¼berwacht, VerstÃ¤rkung",
                  "nl": "Supervised, Unsupervised, Reinforcement"
        },
        {
                  "en": "Easy, Normal, Hard",
                  "es": "FÃ¡cil, Normal, DifÃ­cil",
                  "de": "Einfach, Normal, Schwer",
                  "nl": "Makkelijk, Normaal, Moeilijk"
        },
        {
                  "en": "Big, Small, Medium",
                  "es": "Grande, PequeÃ±o, Mediano",
                  "de": "GroÃŸ, Klein, Mittel",
                  "nl": "Groot, Klein, Medium"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "These three categories represent different learning approaches: supervised learning uses labeled data, unsupervised finds patterns in unlabeled data, and reinforcement learning learns through trial and reward.",
                  "es": "Estas tres categorÃ­as representan diferentes enfoques de aprendizaje: el aprendizaje supervisado usa datos etiquetados, el no supervisado encuentra patrones en datos no etiquetados, y el aprendizaje por refuerzo aprende a travÃ©s de prueba y recompensa.",
                  "de": "Diese drei Kategorien reprÃ¤sentieren verschiedene LernansÃ¤tze: Ã¼berwachtes Lernen verwendet beschriftete Daten, unÃ¼berwachtes findet Muster in unbeschrifteten Daten, und VerstÃ¤rkungslernen lernt durch Versuch und Belohnung.",
                  "nl": "Deze drie categorieÃ«n vertegenwoordigen verschillende leerbenaderingen: supervised learning gebruikt gelabelde data, unsupervised vindt patronen in ongelabelde data, en reinforcement learning leert door trial en beloning."
        }
      },
      {
        question: {
                  "en": "What is an algorithm in machine learning?",
                  "es": "Â¿QuÃ© es un algoritmo en aprendizaje automÃ¡tico?",
                  "de": "Was ist ein Algorithmus im maschinellen Lernen?",
                  "nl": "Wat is een algoritme in machine learning?"
        },
        options: [
        {
                  "en": "A set of rules for solving problems",
                  "es": "Un conjunto de reglas para resolver problemas",
                  "de": "Ein Regelwerk zur ProblemlÃ¶sung",
                  "nl": "Een set regels voor het oplossen van problemen"
        },
        {
                  "en": "A computer program",
                  "es": "Un programa de computadora",
                  "de": "Ein Computerprogramm",
                  "nl": "Een computerprogramma"
        },
        {
                  "en": "A type of robot",
                  "es": "Un tipo de robot",
                  "de": "Eine Art von Roboter",
                  "nl": "Een type robot"
        },
        {
                  "en": "A social media platform",
                  "es": "Una plataforma de redes sociales",
                  "de": "Eine Social-Media-Plattform",
                  "nl": "Een social media platform"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "An algorithm is a step-by-step set of instructions or rules that tells the computer how to solve a specific problem or complete a task.",
                  "es": "Un algoritmo es un conjunto paso a paso de instrucciones o reglas que le dice a la computadora cÃ³mo resolver un problema especÃ­fico o completar una tarea.",
                  "de": "Ein Algorithmus ist eine schrittweise Anleitung oder Regelwerk, das dem Computer sagt, wie er ein spezifisches Problem lÃ¶sen oder eine Aufgabe erfÃ¼llen kann.",
                  "nl": "Een algoritme is een stapsgewijze set instructies of regels die de computer vertelt hoe een specifiek probleem op te lossen of een taak te voltooien."
        }
      },
      {
        question: {
                  "en": "What is the 'Netflix recommendation system' an example of?",
                  "es": "Â¿De quÃ© es un ejemplo el 'sistema de recomendaciones de Netflix'?",
                  "de": "WofÃ¼r ist das 'Netflix-Empfehlungssystem' ein Beispiel?",
                  "nl": "Waar is het 'Netflix aanbevelingssysteem' een voorbeeld van?"
        },
        options: [
        {
                  "en": "Human decision making",
                  "es": "Toma de decisiones humanas",
                  "de": "Menschliche Entscheidungsfindung",
                  "nl": "Menselijke besluitvorming"
        },
        {
                  "en": "A manual process",
                  "es": "Un proceso manual",
                  "de": "Ein manueller Prozess",
                  "nl": "Een handmatig proces"
        },
        {
                  "en": "Machine learning in action",
                  "es": "Aprendizaje automÃ¡tico en acciÃ³n",
                  "de": "Maschinelles Lernen in Aktion",
                  "nl": "Machine learning in actie"
        },
        {
                  "en": "Random selection",
                  "es": "SelecciÃ³n aleatoria",
                  "de": "ZufÃ¤llige Auswahl",
                  "nl": "Willekeurige selectie"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Netflix uses machine learning algorithms to analyze your viewing history and preferences to automatically suggest movies and shows you might enjoy.",
                  "es": "Netflix utiliza algoritmos de aprendizaje automÃ¡tico para analizar tu historial de visualizaciÃ³n y preferencias para sugerir automÃ¡ticamente pelÃ­culas y programas que podrÃ­an gustarte.",
                  "de": "Netflix verwendet maschinelle Lernalgorithmen, um Ihre Sehgewohnheiten und Vorlieben zu analysieren und automatisch Filme und Serien vorzuschlagen, die Ihnen gefallen kÃ¶nnten.",
                  "nl": "Netflix gebruikt machine learning algoritmes om je kijkgeschiedenis en voorkeuren te analyseren om automatisch films en shows voor te stellen die je misschien leuk vindt."
        }
      },
      {
        question: {
                  "en": "What does 'Big Data' mean in the context of AI?",
                  "es": "Â¿QuÃ© significa 'Big Data' en el contexto de IA?",
                  "de": "Was bedeutet 'Big Data' im Kontext von KI?",
                  "nl": "Wat betekent 'Big Data' in de context van AI?"
        },
        options: [
        {
                  "en": "Data stored on large computers",
                  "es": "Datos almacenados en computadoras grandes",
                  "de": "Daten auf groÃŸen Computern gespeichert",
                  "nl": "Data opgeslagen op grote computers"
        },
        {
                  "en": "Important business data",
                  "es": "Datos comerciales importantes",
                  "de": "Wichtige GeschÃ¤ftsdaten",
                  "nl": "Belangrijke bedrijfsdata"
        },
        {
                  "en": "Data about big companies",
                  "es": "Datos sobre grandes empresas",
                  "de": "Daten Ã¼ber groÃŸe Unternehmen",
                  "nl": "Data over grote bedrijven"
        },
        {
                  "en": "Very large amounts of information",
                  "es": "Cantidades muy grandes de informaciÃ³n",
                  "de": "Sehr groÃŸe Mengen an Informationen",
                  "nl": "Zeer grote hoeveelheden informatie"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Big Data refers to datasets that are so large and complex that traditional data processing applications cannot handle them effectively, often requiring specialized AI tools.",
                  "es": "Big Data se refiere a conjuntos de datos que son tan grandes y complejos que las aplicaciones tradicionales de procesamiento de datos no pueden manejarlos efectivamente, a menudo requiriendo herramientas especializadas de IA.",
                  "de": "Big Data bezieht sich auf DatensÃ¤tze, die so groÃŸ und komplex sind, dass herkÃ¶mmliche Datenverarbeitungsanwendungen sie nicht effektiv handhaben kÃ¶nnen, oft spezialisierte KI-Tools erfordern.",
                  "nl": "Big Data verwijst naar datasets die zo groot en complex zijn dat traditionele gegevensverwerkingsapplicaties ze niet effectief kunnen verwerken, vaak gespecialiseerde AI-tools vereisen."
        }
      },
      {
        question: {
                  "en": "What is a neural network inspired by?",
                  "es": "Â¿En quÃ© estÃ¡ inspirada una red neuronal?",
                  "de": "Wovon ist ein neuronales Netzwerk inspiriert?",
                  "nl": "Waar is een neuraal netwerk op geÃ¯nspireerd?"
        },
        options: [
        {
                  "en": "Road networks",
                  "es": "Redes de carreteras",
                  "de": "StraÃŸennetze",
                  "nl": "Wegennetwerken"
        },
        {
                  "en": "Computer circuits",
                  "es": "Circuitos de computadora",
                  "de": "Computerschaltkreise",
                  "nl": "Computer circuits"
        },
        {
                  "en": "Social networks",
                  "es": "Redes sociales",
                  "de": "Soziale Netzwerke",
                  "nl": "Sociale netwerken"
        },
        {
                  "en": "The human brain",
                  "es": "El cerebro humano",
                  "de": "Das menschliche Gehirn",
                  "nl": "Het menselijk brein"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Neural networks are designed to mimic how neurons in the human brain connect and process information, though in a much simplified way.",
                  "es": "Las redes neuronales estÃ¡n diseÃ±adas para imitar cÃ³mo las neuronas en el cerebro humano se conectan y procesan informaciÃ³n, aunque de una manera muy simplificada.",
                  "de": "Neuronale Netzwerke sind darauf ausgelegt, nachzuahmen, wie Neuronen im menschlichen Gehirn sich verbinden und Informationen verarbeiten, allerdings in sehr vereinfachter Weise.",
                  "nl": "Neurale netwerken zijn ontworpen om na te bootsen hoe neuronen in het menselijk brein verbinden en informatie verwerken, hoewel op een veel vereenvoudigde manier."
        }
      },
      {
        question: {
                  "en": "What is the difference between classification and regression?",
                  "es": "¿Cuál es la diferencia entre clasificación y regresión?",
                  "de": "Was ist der Unterschied zwischen Klassifikation und Regression?",
                  "nl": "Wat is het verschil tussen classificatie en regressie?"
        },
        options: [
        {
                  "en": "Classification predicts categories, regression predicts numbers",
                  "es": "Clasificación predice categorías, regresión predice números",
                  "de": "Klassifikation sagt Kategorien vorher, Regression sagt Zahlen vorher",
                  "nl": "Classificatie voorspelt categorieën, regressie voorspelt getallen"
        },
        {
                  "en": "Regression only works with images",
                  "es": "Regresión solo funciona con imágenes",
                  "de": "Regression funktioniert nur mit Bildern",
                  "nl": "Regressie werkt alleen met afbeeldingen"
        },
        {
                  "en": "They are exactly the same",
                  "es": "Son exactamente iguales",
                  "de": "Sie sind genau gleich",
                  "nl": "Ze zijn precies hetzelfde"
        },
        {
                  "en": "Classification is faster than regression",
                  "es": "Clasificación es más rápida que regresión",
                  "de": "Klassifikation ist schneller als Regression",
                  "nl": "Classificatie is sneller dan regressie"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Classification predicts discrete categories or classes (like spam/not spam), while regression predicts continuous numerical values (like house prices or temperature).",
                  "es": "Clasificación predice categorías o clases discretas (como spam/no spam), mientras regresión predice valores numéricos continuos (como precios de casas o temperatura).",
                  "de": "Klassifikation sagt diskrete Kategorien oder Klassen vorher (wie Spam/kein Spam), während Regression kontinuierliche numerische Werte vorhersagt (wie Hauspreise oder Temperatur).",
                  "nl": "Classificatie voorspelt discrete categorieën of klassen (zoals spam/geen spam), terwijl regressie continue numerieke waarden voorspelt (zoals huisprijzen of temperatuur)."
        }
      },
      {
        question: {
                  "en": "What is 'training data' in machine learning?",
                  "es": "¿Qué son los 'datos de entrenamiento' en machine learning?",
                  "de": "Was sind 'Trainingsdaten' im maschinellen Lernen?",
                  "nl": "Wat zijn 'trainingsdata' in machine learning?"
        },
        options: [
        {
                  "en": "Data for testing computers",
                  "es": "Datos para probar computadoras",
                  "de": "Daten zum Testen von Computern",
                  "nl": "Data voor het testen van computers"
        },
        {
                  "en": "Examples used to teach the algorithm",
                  "es": "Ejemplos usados para enseñar al algoritmo",
                  "de": "Beispiele zum Lehren des Algorithmus",
                  "nl": "Voorbeelden gebruikt om het algoritme te leren"
        },
        {
                  "en": "Information about trains",
                  "es": "Información sobre trenes",
                  "de": "Informationen über Züge",
                  "nl": "Informatie over treinen"
        },
        {
                  "en": "Data that moves very fast",
                  "es": "Datos que se mueven muy rápido",
                  "de": "Daten die sich sehr schnell bewegen",
                  "nl": "Data die heel snel beweegt"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Training data is the dataset used to teach a machine learning algorithm. It contains input examples and their correct outputs, helping the algorithm learn patterns.",
                  "es": "Los datos de entrenamiento son el conjunto de datos usado para enseñar un algoritmo de machine learning. Contiene ejemplos de entrada y sus salidas correctas, ayudando al algoritmo a aprender patrones.",
                  "de": "Trainingsdaten sind der Datensatz, der verwendet wird, um einem maschinellen Lernalgorithmus zu lehren. Sie enthalten Eingabebeispiele und ihre korrekten Ausgaben und helfen dem Algorithmus, Muster zu lernen.",
                  "nl": "Trainingsdata is de dataset gebruikt om een machine learning algoritme te leren. Het bevat invoervoorbeelden en hun correcte uitvoer, wat het algoritme helpt patronen te leren."
        }
      },
      {
        question: {
                  "en": "What is 'testing data' used for?",
                  "es": "¿Para qué se usan los 'datos de prueba'?",
                  "de": "Wofür werden 'Testdaten' verwendet?",
                  "nl": "Waarvoor worden 'testdata' gebruikt?"
        },
        options: [
        {
                  "en": "To check how well the trained model works on new data",
                  "es": "Para verificar qué tan bien funciona el modelo entrenado en datos nuevos",
                  "de": "Um zu prüfen, wie gut das trainierte Modell bei neuen Daten funktioniert",
                  "nl": "Om te controleren hoe goed het getrainde model werkt op nieuwe data"
        },
        {
                  "en": "To train the algorithm faster",
                  "es": "Para entrenar el algoritmo más rápido",
                  "de": "Um den Algorithmus schneller zu trainieren",
                  "nl": "Om het algoritme sneller te trainen"
        },
        {
                  "en": "To store extra information",
                  "es": "Para almacenar información extra",
                  "de": "Um zusätzliche Informationen zu speichern",
                  "nl": "Om extra informatie op te slaan"
        },
        {
                  "en": "To make the computer run tests",
                  "es": "Para hacer que la computadora ejecute pruebas",
                  "de": "Damit der Computer Tests ausführt",
                  "nl": "Om de computer tests te laten uitvoeren"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Testing data is used to evaluate how well a trained model performs on data it hasn't seen before, helping measure if the model can generalize to new situations.",
                  "es": "Los datos de prueba se usan para evaluar qué tan bien funciona un modelo entrenado en datos que no ha visto antes, ayudando a medir si el modelo puede generalizar a nuevas situaciones.",
                  "de": "Testdaten werden verwendet, um zu bewerten, wie gut ein trainiertes Modell bei Daten funktioniert, die es zuvor nicht gesehen hat, und helfen zu messen, ob das Modell auf neue Situationen verallgemeinern kann.",
                  "nl": "Testdata worden gebruikt om te evalueren hoe goed een getraind model presteert op data die het nog niet eerder heeft gezien, wat helpt om te meten of het model kan generaliseren naar nieuwe situaties."
        }
      },
      {
        question: {
                  "en": "What does 'machine learning model' mean?",
                  "es": "¿Qué significa 'modelo de machine learning'?",
                  "de": "Was bedeutet 'maschinelles Lernmodell'?",
                  "nl": "Wat betekent 'machine learning model'?"
        },
        options: [
        {
                  "en": "A small toy computer",
                  "es": "Una computadora de juguete pequeña",
                  "de": "Ein kleiner Spielzeugcomputer",
                  "nl": "Een kleine speelgoedcomputer"
        },
        {
                  "en": "A 3D printed robot",
                  "es": "Un robot impreso en 3D",
                  "de": "Ein 3D-gedruckter Roboter",
                  "nl": "Een 3D geprinte robot"
        },
        {
                  "en": "A picture of a machine",
                  "es": "Una imagen de una máquina",
                  "de": "Ein Bild einer Maschine",
                  "nl": "Een afbeelding van een machine"
        },
        {
                  "en": "A trained algorithm that can make predictions",
                  "es": "Un algoritmo entrenado que puede hacer predicciones",
                  "de": "Ein trainierter Algorithmus, der Vorhersagen treffen kann",
                  "nl": "Een getraind algoritme dat voorspellingen kan maken"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "A machine learning model is the result of training an algorithm on data. It represents the patterns learned and can make predictions on new, unseen data.",
                  "es": "Un modelo de machine learning es el resultado de entrenar un algoritmo con datos. Representa los patrones aprendidos y puede hacer predicciones en datos nuevos y no vistos.",
                  "de": "Ein maschinelles Lernmodell ist das Ergebnis des Trainings eines Algorithmus mit Daten. Es repräsentiert die gelernten Muster und kann Vorhersagen für neue, ungesehene Daten treffen.",
                  "nl": "Een machine learning model is het resultaat van het trainen van een algoritme op data. Het vertegenwoordigt de geleerde patronen en kan voorspellingen maken op nieuwe, ongeziene data."
        }
      },
      {
        question: {
                  "en": "What is a 'feature' in machine learning?",
                  "es": "¿Qué es una 'característica' en machine learning?",
                  "de": "Was ist ein 'Merkmal' im maschinellen Lernen?",
                  "nl": "Wat is een 'feature' in machine learning?"
        },
        options: [
        {
                  "en": "An individual measurable property of something being observed",
                  "es": "Una propiedad medible individual de algo que se está observando",
                  "de": "Eine einzelne messbare Eigenschaft von etwas, das beobachtet wird",
                  "nl": "Een individuele meetbare eigenschap van iets dat wordt waargenomen"
        },
        {
                  "en": "A special function of the computer",
                  "es": "Una función especial de la computadora",
                  "de": "Eine spezielle Funktion des Computers",
                  "nl": "Een speciale functie van de computer"
        },
        {
                  "en": "A broken part of the algorithm",
                  "es": "Una parte rota del algoritmo",
                  "de": "Ein defekter Teil des Algorithmus",
                  "nl": "Een kapot onderdeel van het algoritme"
        },
        {
                  "en": "A movie about machines",
                  "es": "Una película sobre máquinas",
                  "de": "Ein Film über Maschinen",
                  "nl": "Een film over machines"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "A feature is an individual measurable property or characteristic of something being observed, like height, weight, or color. Features are the input variables used to make predictions.",
                  "es": "Una característica es una propiedad o característica medible individual de algo que se está observando, como altura, peso o color. Las características son las variables de entrada usadas para hacer predicciones.",
                  "de": "Ein Merkmal ist eine einzelne messbare Eigenschaft oder Charakteristikum von etwas, das beobachtet wird, wie Größe, Gewicht oder Farbe. Merkmale sind die Eingabevariablen, die für Vorhersagen verwendet werden.",
                  "nl": "Een feature is een individuele meetbare eigenschap of karakteristiek van iets dat wordt waargenomen, zoals lengte, gewicht of kleur. Features zijn de inputvariabelen die gebruikt worden om voorspellingen te maken."
        }
      },
      {
        question: {
                  "en": "What is 'artificial intelligence' (AI)?",
                  "es": "¿Qué es la 'inteligencia artificial' (IA)?",
                  "de": "Was ist 'künstliche Intelligenz' (KI)?",
                  "nl": "Wat is 'kunstmatige intelligentie' (AI)?"
        },
        options: [
        {
                  "en": "Fake intelligence that doesn't work",
                  "es": "Inteligencia falsa que no funciona",
                  "de": "Falsche Intelligenz, die nicht funktioniert",
                  "nl": "Neppe intelligentie die niet werkt"
        },
        {
                  "en": "Intelligence that costs a lot of money",
                  "es": "Inteligencia que cuesta mucho dinero",
                  "de": "Intelligenz, die viel Geld kostet",
                  "nl": "Intelligentie die veel geld kost"
        },
        {
                  "en": "Technology that enables machines to think and learn like humans",
                  "es": "Tecnología que permite a las máquinas pensar y aprender como humanos",
                  "de": "Technologie, die Maschinen ermöglicht, wie Menschen zu denken und zu lernen",
                  "nl": "Technologie die machines in staat stelt om te denken en leren zoals mensen"
        },
        {
                  "en": "Only intelligence found in robots",
                  "es": "Solo inteligencia encontrada en robots",
                  "de": "Nur Intelligenz, die in Robotern gefunden wird",
                  "nl": "Alleen intelligentie gevonden in robots"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Artificial Intelligence (AI) is technology that enables machines to simulate human intelligence - learning, reasoning, perceiving, and making decisions. Machine learning is a subset of AI.",
                  "es": "Inteligencia Artificial (IA) es tecnología que permite a las máquinas simular inteligencia humana - aprender, razonar, percibir y tomar decisiones. Machine learning es un subconjunto de IA.",
                  "de": "Künstliche Intelligenz (KI) ist Technologie, die Maschinen ermöglicht, menschliche Intelligenz zu simulieren - Lernen, Schließen, Wahrnehmen und Entscheidungen treffen. Maschinelles Lernen ist eine Teilmenge von KI.",
                  "nl": "Kunstmatige Intelligentie (AI) is technologie die machines in staat stelt menselijke intelligentie te simuleren - leren, redeneren, waarnemen en beslissingen nemen. Machine learning is een onderdeel van AI."
        }
      },
      {
        question: {
                  "en": "What is a 'dataset' in machine learning?",
                  "es": "¿Qué es un 'conjunto de datos' en machine learning?",
                  "de": "Was ist ein 'Datensatz' im maschinellen Lernen?",
                  "nl": "Wat is een 'dataset' in machine learning?"
        },
        options: [
        {
                  "en": "A computer's memory",
                  "es": "La memoria de una computadora",
                  "de": "Der Speicher eines Computers",
                  "nl": "Het geheugen van een computer"
        },
        {
                  "en": "A set of dates on a calendar",
                  "es": "Un conjunto de fechas en un calendario",
                  "de": "Eine Reihe von Daten in einem Kalender",
                  "nl": "Een set datums op een kalender"
        },
        {
                  "en": "A collection of data used for training and testing",
                  "es": "Una colección de datos usada para entrenamiento y pruebas",
                  "de": "Eine Sammlung von Daten für Training und Tests",
                  "nl": "Een verzameling data gebruikt voor training en testen"
        },
        {
                  "en": "A single piece of information",
                  "es": "Una sola pieza de información",
                  "de": "Ein einzelnes Stück Information",
                  "nl": "Een enkel stuk informatie"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "A dataset is a collection of related data points or examples that machines use to learn patterns. It typically includes many examples with features and target values for training algorithms.",
                  "es": "Un conjunto de datos es una colección de puntos de datos o ejemplos relacionados que las máquinas usan para aprender patrones. Típicamente incluye muchos ejemplos con características y valores objetivo para entrenar algoritmos.",
                  "de": "Ein Datensatz ist eine Sammlung verwandter Datenpunkte oder Beispiele, die Maschinen verwenden, um Muster zu lernen. Er enthält typischerweise viele Beispiele mit Merkmalen und Zielwerten für das Training von Algorithmen.",
                  "nl": "Een dataset is een verzameling van gerelateerde datapunten of voorbeelden die machines gebruiken om patronen te leren. Het bevat meestal vele voorbeelden met features en doelwaarden voor het trainen van algoritmes."
        }
      },
      {
        question: {
                  "en": "What does 'pattern recognition' mean in AI?",
                  "es": "¿Qué significa 'reconocimiento de patrones' en IA?",
                  "de": "Was bedeutet 'Mustererkennung' in der KI?",
                  "nl": "Wat betekent 'patroonherkenning' in AI?"
        },
        options: [
        {
                  "en": "Drawing geometric shapes",
                  "es": "Dibujar formas geométricas",
                  "de": "Geometrische Formen zeichnen",
                  "nl": "Geometrische vormen tekenen"
        },
        {
                  "en": "Finding repeating structures or regularities in data",
                  "es": "Encontrar estructuras repetitivas o regularidades en datos",
                  "de": "Wiederkehrende Strukturen oder Regelmäßigkeiten in Daten finden",
                  "nl": "Het vinden van herhalende structuren of regelmatigheden in data"
        },
        {
                  "en": "Recognizing famous people",
                  "es": "Reconocer personas famosas",
                  "de": "Berühmte Personen erkennen",
                  "nl": "Beroemde mensen herkennen"
        },
        {
                  "en": "Making patterns on fabric",
                  "es": "Hacer patrones en tela",
                  "de": "Muster auf Stoff erstellen",
                  "nl": "Patronen maken op stof"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Pattern recognition is the ability to identify regularities, trends, or repeating structures in data. This is fundamental to how machine learning algorithms work - they find patterns to make predictions.",
                  "es": "Reconocimiento de patrones es la habilidad de identificar regularidades, tendencias o estructuras repetitivas en datos. Esto es fundamental para cómo funcionan los algoritmos de machine learning - encuentran patrones para hacer predicciones.",
                  "de": "Mustererkennung ist die Fähigkeit, Regelmäßigkeiten, Trends oder wiederkehrende Strukturen in Daten zu identifizieren. Dies ist grundlegend dafür, wie maschinelle Lernalgorithmen funktionieren - sie finden Muster, um Vorhersagen zu treffen.",
                  "nl": "Patroonherkenning is het vermogen om regelmatigheden, trends of herhalende structuren in data te identificeren. Dit is fundamenteel voor hoe machine learning algoritmes werken - ze vinden patronen om voorspellingen te maken."
        }
      },
      {
        question: {
                  "en": "What is 'data' in the context of machine learning?",
                  "es": "¿Qué es 'data' en el contexto de machine learning?",
                  "de": "Was sind 'Daten' im Kontext des maschinellen Lernens?",
                  "nl": "Wat is 'data' in de context van machine learning?"
        },
        options: [
        {
                  "en": "Information stored on phones",
                  "es": "Información almacenada en teléfonos",
                  "de": "Informationen auf Telefonen gespeichert",
                  "nl": "Informatie opgeslagen op telefoons"
        },
        {
                  "en": "Only numbers and calculations",
                  "es": "Solo números y cálculos",
                  "de": "Nur Zahlen und Berechnungen",
                  "nl": "Alleen getallen en berekeningen"
        },
        {
                  "en": "Information that can be processed by computers to learn patterns",
                  "es": "Información que puede ser procesada por computadoras para aprender patrones",
                  "de": "Informationen, die von Computern verarbeitet werden können, um Muster zu lernen",
                  "nl": "Informatie die door computers kan worden verwerkt om patronen te leren"
        },
        {
                  "en": "Pictures and videos only",
                  "es": "Solo imágenes y videos",
                  "de": "Nur Bilder und Videos",
                  "nl": "Alleen afbeeldingen en video's"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Data in machine learning can be any information - numbers, text, images, sounds, or measurements - that computers can process to identify patterns and make predictions.",
                  "es": "Los datos en machine learning pueden ser cualquier información - números, texto, imágenes, sonidos o mediciones - que las computadoras pueden procesar para identificar patrones y hacer predicciones.",
                  "de": "Daten im maschinellen Lernen können jede Information sein - Zahlen, Text, Bilder, Töne oder Messungen - die Computer verarbeiten können, um Muster zu identifizieren und Vorhersagen zu treffen.",
                  "nl": "Data in machine learning kan elke informatie zijn - getallen, tekst, afbeeldingen, geluiden of metingen - die computers kunnen verwerken om patronen te identificeren en voorspellingen te maken."
        }
      },
      {
        question: {
                  "en": "What does 'learning' mean when we talk about machine learning?",
                  "es": "¿Qué significa 'aprender' cuando hablamos de machine learning?",
                  "de": "Was bedeutet 'Lernen' wenn wir über maschinelles Lernen sprechen?",
                  "nl": "Wat betekent 'leren' als we het hebben over machine learning?"
        },
        options: [
        {
                  "en": "Improving performance by finding patterns in data",
                  "es": "Mejorar el rendimiento encontrando patrones en datos",
                  "de": "Leistung verbessern durch das Finden von Mustern in Daten",
                  "nl": "Prestaties verbeteren door patronen in data te vinden"
        },
        {
                  "en": "Reading books and studying",
                  "es": "Leer libros y estudiar",
                  "de": "Bücher lesen und studieren",
                  "nl": "Boeken lezen en studeren"
        },
        {
                  "en": "Memorizing everything perfectly",
                  "es": "Memorizar todo perfectamente",
                  "de": "Alles perfekt auswendig lernen",
                  "nl": "Alles perfect onthouden"
        },
        {
                  "en": "Going to school like humans",
                  "es": "Ir a la escuela como humanos",
                  "de": "Zur Schule gehen wie Menschen",
                  "nl": "Naar school gaan zoals mensen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "In machine learning, 'learning' means the algorithm gets better at making predictions by analyzing data and finding patterns, similar to how humans learn from experience.",
                  "es": "En machine learning, 'aprender' significa que el algoritmo mejora haciendo predicciones analizando datos y encontrando patrones, similar a cómo los humanos aprenden de la experiencia.",
                  "de": "Im maschinellen Lernen bedeutet 'Lernen', dass der Algorithmus besser darin wird, Vorhersagen zu treffen, indem er Daten analysiert und Muster findet, ähnlich wie Menschen aus Erfahrung lernen.",
                  "nl": "In machine learning betekent 'leren' dat het algoritme beter wordt in het maken van voorspellingen door data te analyseren en patronen te vinden, vergelijkbaar met hoe mensen leren van ervaring."
        }
      },
      {
        question: {
                  "en": "What is the main goal of machine learning?",
                  "es": "¿Cuál es el objetivo principal de machine learning?",
                  "de": "Was ist das Hauptziel des maschinellen Lernens?",
                  "nl": "Wat is het hoofddoel van machine learning?"
        },
        options: [
        {
                  "en": "To replace all human workers",
                  "es": "Reemplazar a todos los trabajadores humanos",
                  "de": "Alle menschlichen Arbeiter zu ersetzen",
                  "nl": "Alle menselijke werknemers vervangen"
        },
        {
                  "en": "To make computers think like humans",
                  "es": "Hacer que las computadoras piensen como humanos",
                  "de": "Computer dazu zu bringen, wie Menschen zu denken",
                  "nl": "Computers laten denken zoals mensen"
        },
        {
                  "en": "To store large amounts of data",
                  "es": "Almacenar grandes cantidades de datos",
                  "de": "Große Datenmengen zu speichern",
                  "nl": "Grote hoeveelheden data opslaan"
        },
        {
                  "en": "To make accurate predictions on new, unseen data",
                  "es": "Hacer predicciones precisas en datos nuevos y no vistos",
                  "de": "Genaue Vorhersagen für neue, ungesehene Daten zu treffen",
                  "nl": "Nauwkeurige voorspellingen maken op nieuwe, ongeziene data"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The main goal of machine learning is to create models that can generalize from training data to make accurate predictions or decisions on new, previously unseen data.",
                  "es": "El objetivo principal de machine learning es crear modelos que puedan generalizar de datos de entrenamiento para hacer predicciones o decisiones precisas en datos nuevos y previamente no vistos.",
                  "de": "Das Hauptziel des maschinellen Lernens ist es, Modelle zu erstellen, die von Trainingsdaten verallgemeinern können, um genaue Vorhersagen oder Entscheidungen für neue, zuvor ungesehene Daten zu treffen.",
                  "nl": "Het hoofddoel van machine learning is om modellen te creëren die kunnen generaliseren van trainingsdata om nauwkeurige voorspellingen of beslissingen te maken op nieuwe, eerder ongeziene data."
        }
      },
      {
        question: {
                  "en": "What is an example of unsupervised learning?",
                  "es": "¿Qué es un ejemplo de aprendizaje no supervisado?",
                  "de": "Was ist ein Beispiel für unüberwachtes Lernen?",
                  "nl": "Wat is een voorbeeld van unsupervised learning?"
        },
        options: [
        {
                  "en": "Finding groups of similar customers without knowing the groups beforehand",
                  "es": "Encontrar grupos de clientes similares sin conocer los grupos de antemano",
                  "de": "Gruppen ähnlicher Kunden finden ohne die Gruppen vorher zu kennen",
                  "nl": "Groepen van vergelijkbare klanten vinden zonder de groepen van tevoren te kennen"
        },
        {
                  "en": "Learning without any computer",
                  "es": "Aprender sin ninguna computadora",
                  "de": "Lernen ohne Computer",
                  "nl": "Leren zonder computer"
        },
        {
                  "en": "Predicting house prices with known examples",
                  "es": "Predecir precios de casas con ejemplos conocidos",
                  "de": "Hauspreise mit bekannten Beispielen vorhersagen",
                  "nl": "Huisprijzen voorspellen met bekende voorbeelden"
        },
        {
                  "en": "Teaching computers to recognize cats with labeled pictures",
                  "es": "Enseñar a computadoras a reconocer gatos con imágenes etiquetadas",
                  "de": "Computer lehren, Katzen mit beschrifteten Bildern zu erkennen",
                  "nl": "Computers leren katten te herkennen met gelabelde afbeeldingen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Unsupervised learning finds hidden patterns in data without being told what to look for. Clustering customers by shopping behavior is a common example - the algorithm discovers groups on its own.",
                  "es": "El aprendizaje no supervisado encuentra patrones ocultos en datos sin que se le diga qué buscar. Agrupar clientes por comportamiento de compra es un ejemplo común - el algoritmo descubre grupos por sí solo.",
                  "de": "Unüberwachtes Lernen findet versteckte Muster in Daten, ohne gesagt zu bekommen, wonach zu suchen ist. Das Gruppieren von Kunden nach Einkaufsverhalten ist ein häufiges Beispiel - der Algorithmus entdeckt Gruppen selbständig.",
                  "nl": "Unsupervised learning vindt verborgen patronen in data zonder te worden verteld waarnaar te zoeken. Het groeperen van klanten op winkelgedrag is een veelvoorkomend voorbeeld - het algoritme ontdekt groepen zelfstandig."
        }
      },
      {
        question: {
                  "en": "What is an example of reinforcement learning?",
                  "es": "¿Qué es un ejemplo de aprendizaje por refuerzo?",
                  "de": "Was ist ein Beispiel für Verstärkungslernen?",
                  "nl": "Wat is een voorbeeld van reinforcement learning?"
        },
        options: [
        {
                  "en": "A computer learning to play chess by playing many games and getting rewards for wins",
                  "es": "Una computadora aprendiendo a jugar ajedrez jugando muchos juegos y recibiendo recompensas por victorias",
                  "de": "Ein Computer lernt Schach zu spielen, indem er viele Spiele spielt und Belohnungen für Siege erhält",
                  "nl": "Een computer die leert schaken door veel spellen te spelen en beloningen te krijgen voor overwinningen"
        },
        {
                  "en": "Teaching with many examples and correct answers",
                  "es": "Enseñar con muchos ejemplos y respuestas correctas",
                  "de": "Lehren mit vielen Beispielen und richtigen Antworten",
                  "nl": "Leren met veel voorbeelden en juiste antwoorden"
        },
        {
                  "en": "Finding patterns without any guidance",
                  "es": "Encontrar patrones sin ninguna orientación",
                  "de": "Muster finden ohne jede Anleitung",
                  "nl": "Patronen vinden zonder enige begeleiding"
        },
        {
                  "en": "Learning only from textbooks",
                  "es": "Aprender solo de libros de texto",
                  "de": "Nur aus Lehrbüchern lernen",
                  "nl": "Alleen leren uit tekstboeken"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Reinforcement learning learns through trial and error with rewards and penalties. Like training a pet with treats, the algorithm learns what actions lead to good outcomes through experience.",
                  "es": "El aprendizaje por refuerzo aprende a través de prueba y error con recompensas y penalidades. Como entrenar una mascota con premios, el algoritmo aprende qué acciones llevan a buenos resultados a través de la experiencia.",
                  "de": "Verstärkungslernen lernt durch Versuch und Irrtum mit Belohnungen und Strafen. Wie das Training eines Haustiers mit Leckerlis lernt der Algorithmus durch Erfahrung, welche Aktionen zu guten Ergebnissen führen.",
                  "nl": "Reinforcement learning leert door trial en error met beloningen en straffen. Zoals het trainen van een huisdier met traktaties, leert het algoritme door ervaring welke acties tot goede resultaten leiden."
        }
      },
      {
        question: {
                  "en": "What is feature selection in machine learning?",
                  "es": "¿Qué es la selección de características en aprendizaje automático?",
                  "de": "Was ist Feature-Auswahl im maschinellen Lernen?",
                  "nl": "Wat is feature selectie in machine learning?"
        },
        options: [
        {
                  "en": "Choosing the best computer hardware for training",
                  "es": "Elegir el mejor hardware de computadora para entrenamiento",
                  "de": "Die beste Computer-Hardware für das Training auswählen",
                  "nl": "De beste computerhardware kiezen voor training"
        },
        {
                  "en": "Choosing the most important input variables for training the model",
                  "es": "Elegir las variables de entrada más importantes para entrenar el modelo",
                  "de": "Die wichtigsten Eingabevariablen für das Training des Modells auswählen",
                  "nl": "De belangrijkste invoervariabelen kiezen voor het trainen van het model"
        },
        {
                  "en": "Selecting which machine learning algorithm to use",
                  "es": "Seleccionar qué algoritmo de aprendizaje automático usar",
                  "de": "Auswählen welcher maschinelle Lernalgorithmus zu verwenden ist",
                  "nl": "Selecteren welk machine learning algoritme te gebruiken"
        },
        {
                  "en": "Picking features for the user interface",
                  "es": "Elegir características para la interfaz de usuario",
                  "de": "Features für die Benutzeroberfläche auswählen",
                  "nl": "Features kiezen voor de gebruikersinterface"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Feature selection helps improve model performance by removing irrelevant or redundant input variables, reducing complexity and potentially improving accuracy.",
                  "es": "La selección de características ayuda a mejorar el rendimiento del modelo eliminando variables de entrada irrelevantes o redundantes, reduciendo complejidad y potencialmente mejorando la precisión.",
                  "de": "Feature-Auswahl hilft die Modellleistung zu verbessern durch Entfernung irrelevanter oder redundanter Eingabevariablen, reduziert Komplexität und verbessert potenziell die Genauigkeit.",
                  "nl": "Feature selectie helpt modelprestaties te verbeteren door irrelevante of redundante invoervariabelen te verwijderen, vermindert complexiteit en verbetert mogelijk de nauwkeurigheid."
        }
      },
      {
        question: {
                  "en": "What is cross-validation in machine learning?",
                  "es": "¿Qué es la validación cruzada en aprendizaje automático?",
                  "de": "Was ist Kreuzvalidierung im maschinellen Lernen?",
                  "nl": "Wat is cross-validatie in machine learning?"
        },
        options: [
        {
                  "en": "Checking if the data is correct by asking multiple people",
                  "es": "Verificar si los datos son correctos preguntando a múltiples personas",
                  "de": "Prüfen ob die Daten korrekt sind durch Befragung mehrerer Personen",
                  "nl": "Controleren of de data correct is door meerdere mensen te vragen"
        },
        {
                  "en": "A technique to test model performance by splitting data into multiple folds for training and testing",
                  "es": "Una técnica para probar el rendimiento del modelo dividiendo datos en múltiples partes para entrenamiento y prueba",
                  "de": "Eine Technik um Modellleistung zu testen durch Aufteilen von Daten in mehrere Abschnitte für Training und Testen",
                  "nl": "Een techniek om modelprestaties te testen door data op te splitsen in meerdere delen voor training en testen"
        },
        {
                  "en": "Training models on different types of computers",
                  "es": "Entrenar modelos en diferentes tipos de computadoras",
                  "de": "Modelle auf verschiedenen Computertypen trainieren",
                  "nl": "Modellen trainen op verschillende soorten computers"
        },
        {
                  "en": "Validating that different algorithms give the same results",
                  "es": "Validar que diferentes algoritmos den los mismos resultados",
                  "de": "Validieren dass verschiedene Algorithmen dieselben Ergebnisse geben",
                  "nl": "Valideren dat verschillende algoritmes dezelfde resultaten geven"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Cross-validation provides a more reliable estimate of model performance by training and testing on different portions of the data multiple times, helping detect overfitting.",
                  "es": "La validación cruzada proporciona una estimación más confiable del rendimiento del modelo entrenando y probando en diferentes porciones de los datos múltiples veces, ayudando a detectar sobreajuste.",
                  "de": "Kreuzvalidierung bietet eine zuverlässigere Schätzung der Modellleistung durch Training und Testen auf verschiedenen Datenteilen mehrfach, hilft Overfitting zu erkennen.",
                  "nl": "Cross-validatie biedt een betrouwbaardere schatting van modelprestaties door meerdere keren te trainen en testen op verschillende delen van de data, helpt overfitting te detecteren."
        }
      },
      {
        question: {
                  "en": "What is the difference between a model and an algorithm?",
                  "es": "¿Cuál es la diferencia entre un modelo y un algoritmo?",
                  "de": "Was ist der Unterschied zwischen einem Modell und einem Algorithmus?",
                  "nl": "Wat is het verschil tussen een model en een algoritme?"
        },
        options: [
        {
                  "en": "A model is always faster than an algorithm",
                  "es": "Un modelo es siempre más rápido que un algoritmo",
                  "de": "Ein Modell ist immer schneller als ein Algorithmus",
                  "nl": "Een model is altijd sneller dan een algoritme"
        },
        {
                  "en": "An algorithm is the process, a model is the result of training",
                  "es": "Un algoritmo es el proceso, un modelo es el resultado del entrenamiento",
                  "de": "Ein Algorithmus ist der Prozess, ein Modell ist das Ergebnis des Trainings",
                  "nl": "Een algoritme is het proces, een model is het resultaat van training"
        },
        {
                  "en": "They are exactly the same thing",
                  "es": "Son exactamente lo mismo",
                  "de": "Sie sind genau dasselbe",
                  "nl": "Ze zijn precies hetzelfde"
        },
        {
                  "en": "An algorithm is for math, a model is for images",
                  "es": "Un algoritmo es para matemáticas, un modelo es para imágenes",
                  "de": "Ein Algorithmus ist für Mathematik, ein Modell ist für Bilder",
                  "nl": "Een algoritme is voor wiskunde, een model is voor afbeeldingen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "An algorithm is the learning method or procedure, while a model is the trained structure that results from applying the algorithm to data.",
                  "es": "Un algoritmo es el método o procedimiento de aprendizaje, mientras que un modelo es la estructura entrenada que resulta de aplicar el algoritmo a los datos.",
                  "de": "Ein Algorithmus ist die Lernmethode oder das Verfahren, während ein Modell die trainierte Struktur ist die aus der Anwendung des Algorithmus auf Daten resultiert.",
                  "nl": "Een algoritme is de leermethode of procedure, terwijl een model de getrainde structuur is die resulteert uit het toepassen van het algoritme op data."
        }
      },
      {
        question: {
                  "en": "What does 'underfitting' mean?",
                  "es": "¿Qué significa 'subajuste'?",
                  "de": "Was bedeutet 'Unteranpassung'?",
                  "nl": "Wat betekent 'underfitting'?"
        },
        options: [
        {
                  "en": "Model doesn't fit in computer memory",
                  "es": "El modelo no cabe en la memoria de la computadora",
                  "de": "Modell passt nicht in den Computerspeicher",
                  "nl": "Model past niet in het computergeheugen"
        },
        {
                  "en": "Model is too simple and performs poorly on both training and new data",
                  "es": "El modelo es demasiado simple y funciona mal tanto en datos de entrenamiento como en datos nuevos",
                  "de": "Modell ist zu einfach und funktioniert schlecht sowohl bei Trainings- als auch neuen Daten",
                  "nl": "Model is te simpel en presteert slecht op zowel trainings- als nieuwe data"
        },
        {
                  "en": "Training data is too small",
                  "es": "Los datos de entrenamiento son demasiado pequeños",
                  "de": "Trainingsdaten sind zu klein",
                  "nl": "Trainingsdata is te klein"
        },
        {
                  "en": "Model trains too quickly",
                  "es": "El modelo entrena demasiado rápido",
                  "de": "Modell trainiert zu schnell",
                  "nl": "Model traint te snel"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Underfitting occurs when a model is too simple to capture the underlying patterns in data, resulting in poor performance on both training and test data.",
                  "es": "El subajuste ocurre cuando un modelo es demasiado simple para capturar los patrones subyacentes en los datos, resultando en un rendimiento pobre tanto en datos de entrenamiento como de prueba.",
                  "de": "Unteranpassung tritt auf wenn ein Modell zu einfach ist um die zugrunde liegenden Muster in Daten zu erfassen, resultiert in schlechter Leistung sowohl bei Trainings- als auch Testdaten.",
                  "nl": "Underfitting treedt op wanneer een model te simpel is om de onderliggende patronen in data vast te leggen, resulteert in slechte prestaties op zowel trainings- als testdata."
        }
      },
      {
        question: {
                  "en": "What is a confusion matrix?",
                  "es": "¿Qué es una matriz de confusión?",
                  "de": "Was ist eine Konfusionsmatrix?",
                  "nl": "Wat is een confusion matrix?"
        },
        options: [
        {
                  "en": "A table showing correct vs incorrect predictions for each class",
                  "es": "Una tabla que muestra predicciones correctas vs incorrectas para cada clase",
                  "de": "Eine Tabelle die korrekte vs inkorrekte Vorhersagen für jede Klasse zeigt",
                  "nl": "Een tabel die correcte vs incorrecte voorspellingen toont voor elke klasse"
        },
        {
                  "en": "A list of errors in the code",
                  "es": "Una lista de errores en el código",
                  "de": "Eine Liste von Fehlern im Code",
                  "nl": "Een lijst van fouten in de code"
        },
        {
                  "en": "A confusing type of neural network",
                  "es": "Un tipo confuso de red neuronal",
                  "de": "Eine verwirrende Art von neuronalem Netzwerk",
                  "nl": "Een verwarrend type neuraal netwerk"
        },
        {
                  "en": "A matrix that causes confusion in calculations",
                  "es": "Una matriz que causa confusión en los cálculos",
                  "de": "Eine Matrix die Verwirrung in Berechnungen verursacht",
                  "nl": "Een matrix die verwarring veroorzaakt in berekeningen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "A confusion matrix displays the performance of a classification model by showing true positives, true negatives, false positives, and false negatives for each class.",
                  "es": "Una matriz de confusión muestra el rendimiento de un modelo de clasificación mostrando verdaderos positivos, verdaderos negativos, falsos positivos y falsos negativos para cada clase.",
                  "de": "Eine Konfusionsmatrix zeigt die Leistung eines Klassifikationsmodells durch Anzeige von echten Positiven, echten Negativen, falschen Positiven und falschen Negativen für jede Klasse.",
                  "nl": "Een confusion matrix toont de prestaties van een classificatiemodel door true positives, true negatives, false positives en false negatives te tonen voor elke klasse."
        }
      },
      {
        question: {
                  "en": "What is precision in classification?",
                  "es": "¿Qué es la precisión en clasificación?",
                  "de": "Was ist Präzision in der Klassifikation?",
                  "nl": "Wat is precisie in classificatie?"
        },
        options: [
        {
                  "en": "How precise the measurements are",
                  "es": "Qué tan precisas son las mediciones",
                  "de": "Wie präzise die Messungen sind",
                  "nl": "Hoe precies de metingen zijn"
        },
        {
                  "en": "The total number of correct predictions",
                  "es": "El número total de predicciones correctas",
                  "de": "Die Gesamtzahl korrekter Vorhersagen",
                  "nl": "Het totaal aantal correcte voorspellingen"
        },
        {
                  "en": "How fast the model makes predictions",
                  "es": "Qué tan rápido el modelo hace predicciones",
                  "de": "Wie schnell das Modell Vorhersagen macht",
                  "nl": "Hoe snel het model voorspellingen maakt"
        },
        {
                  "en": "The ratio of correct positive predictions to all positive predictions",
                  "es": "La proporción de predicciones positivas correctas sobre todas las predicciones positivas",
                  "de": "Das Verhältnis korrekter positiver Vorhersagen zu allen positiven Vorhersagen",
                  "nl": "De verhouding van correcte positieve voorspellingen tot alle positieve voorspellingen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Precision measures how many of the items identified as positive are actually positive, calculated as true positives divided by (true positives + false positives).",
                  "es": "La precisión mide cuántos de los elementos identificados como positivos son realmente positivos, calculado como verdaderos positivos dividido por (verdaderos positivos + falsos positivos).",
                  "de": "Präzision misst wie viele der als positiv identifizierten Elemente tatsächlich positiv sind, berechnet als echte Positive geteilt durch (echte Positive + falsche Positive).",
                  "nl": "Precisie meet hoeveel van de items geïdentificeerd als positief daadwerkelijk positief zijn, berekend als true positives gedeeld door (true positives + false positives)."
        }
      },
      {
        question: {
                  "en": "What is recall in classification?",
                  "es": "¿Qué es el recall en clasificación?",
                  "de": "Was ist Recall in der Klassifikation?",
                  "nl": "Wat is recall in classificatie?"
        },
        options: [
        {
                  "en": "Recalling previously made predictions",
                  "es": "Recordar predicciones hechas anteriormente",
                  "de": "Zuvor gemachte Vorhersagen abrufen",
                  "nl": "Eerder gemaakte voorspellingen herinneren"
        },
        {
                  "en": "The speed of retrieving predictions",
                  "es": "La velocidad de recuperar predicciones",
                  "de": "Die Geschwindigkeit des Abrufens von Vorhersagen",
                  "nl": "De snelheid van het ophalen van voorspellingen"
        },
        {
                  "en": "The ratio of correct positive predictions to all actual positives",
                  "es": "La proporción de predicciones positivas correctas sobre todos los positivos reales",
                  "de": "Das Verhältnis korrekter positiver Vorhersagen zu allen tatsächlichen Positiven",
                  "nl": "De verhouding van correcte positieve voorspellingen tot alle daadwerkelijke positieven"
        },
        {
                  "en": "How well the model remembers training data",
                  "es": "Qué tan bien el modelo recuerda los datos de entrenamiento",
                  "de": "Wie gut das Modell sich an Trainingsdaten erinnert",
                  "nl": "Hoe goed het model trainingsdata onthoudt"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Recall measures how many of the actual positive cases were correctly identified, calculated as true positives divided by (true positives + false negatives).",
                  "es": "El recall mide cuántos de los casos positivos reales fueron identificados correctamente, calculado como verdaderos positivos dividido por (verdaderos positivos + falsos negativos).",
                  "de": "Recall misst wie viele der tatsächlichen positiven Fälle korrekt identifiziert wurden, berechnet als echte Positive geteilt durch (echte Positive + falsche Negative).",
                  "nl": "Recall meet hoeveel van de daadwerkelijke positieve gevallen correct geïdentificeerd werden, berekend als true positives gedeeld door (true positives + false negatives)."
        }
      },
      {
        question: {
                  "en": "What is the bias-variance tradeoff?",
                  "es": "¿Qué es el equilibrio sesgo-varianza?",
                  "de": "Was ist der Bias-Varianz-Tradeoff?",
                  "nl": "Wat is de bias-variance tradeoff?"
        },
        options: [
        {
                  "en": "Choosing between different algorithms",
                  "es": "Elegir entre diferentes algoritmos",
                  "de": "Wählen zwischen verschiedenen Algorithmen",
                  "nl": "Kiezen tussen verschillende algoritmes"
        },
        {
                  "en": "Trading computational resources for accuracy",
                  "es": "Intercambiar recursos computacionales por precisión",
                  "de": "Rechenressourcen gegen Genauigkeit tauschen",
                  "nl": "Computationele middelen ruilen voor nauwkeurigheid"
        },
        {
                  "en": "The cost of training vs testing",
                  "es": "El costo de entrenamiento vs prueba",
                  "de": "Die Kosten von Training vs Testen",
                  "nl": "De kosten van training vs testen"
        },
        {
                  "en": "Balancing model simplicity (bias) against flexibility (variance)",
                  "es": "Equilibrar simplicidad del modelo (sesgo) contra flexibilidad (varianza)",
                  "de": "Balance zwischen Modell-Einfachheit (Bias) und Flexibilität (Varianz)",
                  "nl": "Balanceren van model-eenvoud (bias) tegen flexibiliteit (variance)"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The bias-variance tradeoff is the balance between a model's ability to minimize bias (error from wrong assumptions) and variance (error from sensitivity to training data fluctuations).",
                  "es": "El equilibrio sesgo-varianza es el balance entre la capacidad del modelo de minimizar sesgo (error de suposiciones incorrectas) y varianza (error de sensibilidad a fluctuaciones de datos de entrenamiento).",
                  "de": "Der Bias-Varianz-Tradeoff ist das Gleichgewicht zwischen der Fähigkeit eines Modells Bias (Fehler aus falschen Annahmen) und Varianz (Fehler aus Empfindlichkeit gegenüber Trainingsdaten-Schwankungen) zu minimieren.",
                  "nl": "De bias-variance tradeoff is de balans tussen het vermogen van een model om bias (fout van verkeerde aannames) en variance (fout van gevoeligheid voor trainingsdata fluctuaties) te minimaliseren."
        }
      },
      {
        question: {
                  "en": "What is a hyperparameter?",
                  "es": "¿Qué es un hiperparámetro?",
                  "de": "Was ist ein Hyperparameter?",
                  "nl": "Wat is een hyperparameter?"
        },
        options: [
        {
                  "en": "A parameter set before training that controls the learning process",
                  "es": "Un parámetro establecido antes del entrenamiento que controla el proceso de aprendizaje",
                  "de": "Ein Parameter der vor dem Training festgelegt wird und den Lernprozess steuert",
                  "nl": "Een parameter ingesteld voor training die het leerproces bestuurt"
        },
        {
                  "en": "A parameter that changes during training",
                  "es": "Un parámetro que cambia durante el entrenamiento",
                  "de": "Ein Parameter der sich während des Trainings ändert",
                  "nl": "Een parameter die verandert tijdens training"
        },
        {
                  "en": "The highest value in the dataset",
                  "es": "El valor más alto en el conjunto de datos",
                  "de": "Der höchste Wert im Datensatz",
                  "nl": "De hoogste waarde in de dataset"
        },
        {
                  "en": "An extremely important parameter",
                  "es": "Un parámetro extremadamente importante",
                  "de": "Ein extrem wichtiger Parameter",
                  "nl": "Een extreem belangrijke parameter"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Hyperparameters are configuration settings chosen before training begins, like learning rate or number of layers, that control how the model learns but aren't learned from data.",
                  "es": "Los hiperparámetros son configuraciones elegidas antes de comenzar el entrenamiento, como la tasa de aprendizaje o número de capas, que controlan cómo aprende el modelo pero no se aprenden de los datos.",
                  "de": "Hyperparameter sind Konfigurationseinstellungen die vor dem Trainingsbeginn gewählt werden, wie Lernrate oder Anzahl der Schichten, die steuern wie das Modell lernt aber nicht aus Daten gelernt werden.",
                  "nl": "Hyperparameters zijn configuratie-instellingen gekozen voor de training begint, zoals leersnelheid of aantal lagen, die controleren hoe het model leert maar niet geleerd worden van data."
        }
      },
      {
        question: {
                  "en": "What is gradient descent?",
                  "es": "¿Qué es el descenso de gradiente?",
                  "de": "Was ist Gradientenabstieg?",
                  "nl": "Wat is gradient descent?"
        },
        options: [
        {
                  "en": "Going downhill in mountainous terrain",
                  "es": "Descender por terreno montañoso",
                  "de": "Bergab gehen in bergigem Gelände",
                  "nl": "Naar beneden gaan in bergachtig terrein"
        },
        {
                  "en": "Reducing model complexity over time",
                  "es": "Reducir la complejidad del modelo con el tiempo",
                  "de": "Modellkomplexität im Laufe der Zeit reduzieren",
                  "nl": "Modelcomplexiteit verminderen over tijd"
        },
        {
                  "en": "Decreasing the dataset size gradually",
                  "es": "Disminuir el tamaño del conjunto de datos gradualmente",
                  "de": "Datensatzgröße schrittweise verringern",
                  "nl": "Geleidelijk de dataset-grootte verkleinen"
        },
        {
                  "en": "An optimization algorithm to minimize errors by adjusting parameters",
                  "es": "Un algoritmo de optimización para minimizar errores ajustando parámetros",
                  "de": "Ein Optimierungsalgorithmus um Fehler durch Anpassung von Parametern zu minimieren",
                  "nl": "Een optimalisatie-algoritme om fouten te minimaliseren door parameters aan te passen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Gradient descent iteratively adjusts model parameters in the direction that reduces error, like finding the lowest point in a valley by following the steepest downward slope.",
                  "es": "El descenso de gradiente ajusta iterativamente los parámetros del modelo en la dirección que reduce el error, como encontrar el punto más bajo en un valle siguiendo la pendiente descendente más pronunciada.",
                  "de": "Gradientenabstieg passt iterativ Modellparameter in die Richtung an die den Fehler reduziert, wie den niedrigsten Punkt in einem Tal zu finden indem man der steilsten Abwärtsneigung folgt.",
                  "nl": "Gradient descent past iteratief modelparameters aan in de richting die de fout vermindert, zoals het vinden van het laagste punt in een vallei door de steilste helling naar beneden te volgen."
        }
      },
      {
        question: {
                  "en": "What is a loss function?",
                  "es": "¿Qué es una función de pérdida?",
                  "de": "Was ist eine Verlustfunktion?",
                  "nl": "Wat is een loss function?"
        },
        options: [
        {
                  "en": "A function that removes bad data",
                  "es": "Una función que elimina datos malos",
                  "de": "Eine Funktion die schlechte Daten entfernt",
                  "nl": "Een functie die slechte data verwijdert"
        },
        {
                  "en": "The cost of running the algorithm",
                  "es": "El costo de ejecutar el algoritmo",
                  "de": "Die Kosten des Algorithmus-Ausführens",
                  "nl": "De kosten van het draaien van het algoritme"
        },
        {
                  "en": "A function that calculates data loss during storage",
                  "es": "Una función que calcula pérdida de datos durante el almacenamiento",
                  "de": "Eine Funktion die Datenverlust während der Speicherung berechnet",
                  "nl": "Een functie die dataverlies tijdens opslag berekent"
        },
        {
                  "en": "A function that measures how wrong the model's predictions are",
                  "es": "Una función que mide qué tan incorrectas son las predicciones del modelo",
                  "de": "Eine Funktion die misst wie falsch die Vorhersagen des Modells sind",
                  "nl": "Een functie die meet hoe fout de voorspellingen van het model zijn"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "A loss function quantifies the difference between predicted and actual values, providing a metric that the model tries to minimize during training.",
                  "es": "Una función de pérdida cuantifica la diferencia entre valores predichos y reales, proporcionando una métrica que el modelo intenta minimizar durante el entrenamiento.",
                  "de": "Eine Verlustfunktion quantifiziert die Differenz zwischen vorhergesagten und tatsächlichen Werten, bietet eine Metrik die das Modell während des Trainings zu minimieren versucht.",
                  "nl": "Een loss function kwantificeert het verschil tussen voorspelde en werkelijke waarden, biedt een metriek die het model probeert te minimaliseren tijdens training."
        }
      },
      {
        question: {
                  "en": "What is the purpose of normalization in ML?",
                  "es": "¿Cuál es el propósito de la normalización en ML?",
                  "de": "Was ist der Zweck der Normalisierung in ML?",
                  "nl": "Wat is het doel van normalisatie in ML?"
        },
        options: [
        {
                  "en": "Converting all text to lowercase",
                  "es": "Convertir todo el texto a minúsculas",
                  "de": "Allen Text in Kleinbuchstaben umwandeln",
                  "nl": "Alle tekst naar kleine letters converteren"
        },
        {
                  "en": "Scaling features to a similar range for better training",
                  "es": "Escalar características a un rango similar para mejor entrenamiento",
                  "de": "Features auf einen ähnlichen Bereich skalieren für besseres Training",
                  "nl": "Features schalen naar een vergelijkbaar bereik voor betere training"
        },
        {
                  "en": "Making all data values equal to 1",
                  "es": "Hacer que todos los valores de datos sean iguales a 1",
                  "de": "Alle Datenwerte gleich 1 machen",
                  "nl": "Alle datawaarden gelijk maken aan 1"
        },
        {
                  "en": "Removing outliers from the dataset",
                  "es": "Eliminar valores atípicos del conjunto de datos",
                  "de": "Ausreißer aus dem Datensatz entfernen",
                  "nl": "Uitschieters uit de dataset verwijderen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Normalization scales numeric features to a standard range (often 0-1), preventing features with larger values from dominating the learning process.",
                  "es": "La normalización escala características numéricas a un rango estándar (a menudo 0-1), evitando que características con valores más grandes dominen el proceso de aprendizaje.",
                  "de": "Normalisierung skaliert numerische Features auf einen Standardbereich (oft 0-1), verhindert dass Features mit größeren Werten den Lernprozess dominieren.",
                  "nl": "Normalisatie schaalt numerieke features naar een standaardbereik (vaak 0-1), voorkomt dat features met grotere waarden het leerproces domineren."
        }
      },
      {
        question: {
                  "en": "What is batch size in training?",
                  "es": "¿Qué es el tamaño de lote en entrenamiento?",
                  "de": "Was ist Batch-Größe im Training?",
                  "nl": "Wat is batch size in training?"
        },
        options: [
        {
                  "en": "How many models to train at once",
                  "es": "Cuántos modelos entrenar a la vez",
                  "de": "Wie viele Modelle gleichzeitig trainiert werden",
                  "nl": "Hoeveel modellen tegelijk te trainen"
        },
        {
                  "en": "The total size of the dataset",
                  "es": "El tamaño total del conjunto de datos",
                  "de": "Die Gesamtgröße des Datensatzes",
                  "nl": "De totale grootte van de dataset"
        },
        {
                  "en": "Number of training examples used in one iteration",
                  "es": "Número de ejemplos de entrenamiento usados en una iteración",
                  "de": "Anzahl der Trainingsbeispiele in einer Iteration",
                  "nl": "Aantal trainingsvoorbeelden gebruikt in één iteratie"
        },
        {
                  "en": "The number of layers in the network",
                  "es": "El número de capas en la red",
                  "de": "Die Anzahl der Schichten im Netzwerk",
                  "nl": "Het aantal lagen in het netwerk"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Batch size determines how many training samples are processed before updating the model's parameters, affecting training speed and memory usage.",
                  "es": "El tamaño de lote determina cuántas muestras de entrenamiento se procesan antes de actualizar los parámetros del modelo, afectando la velocidad de entrenamiento y el uso de memoria.",
                  "de": "Batch-Größe bestimmt wie viele Trainingsproben verarbeitet werden bevor die Parameter des Modells aktualisiert werden, beeinflusst Trainingsgeschwindigkeit und Speichernutzung.",
                  "nl": "Batch size bepaalt hoeveel trainingssamples verwerkt worden voordat de parameters van het model bijgewerkt worden, beïnvloedt trainingssnelheid en geheugengebruik."
        }
      },
      {
        question: {
                  "en": "What is an epoch in machine learning?",
                  "es": "¿Qué es una época en aprendizaje automático?",
                  "de": "Was ist eine Epoche im maschinellen Lernen?",
                  "nl": "Wat is een epoch in machine learning?"
        },
        options: [
        {
                  "en": "The time it takes to train a model",
                  "es": "El tiempo que tarda en entrenar un modelo",
                  "de": "Die Zeit die es braucht ein Modell zu trainieren",
                  "nl": "De tijd die het kost om een model te trainen"
        },
        {
                  "en": "One complete pass through the entire training dataset",
                  "es": "Un pase completo a través de todo el conjunto de datos de entrenamiento",
                  "de": "Ein vollständiger Durchlauf durch den gesamten Trainingsdatensatz",
                  "nl": "Eén complete doorgang door de hele trainingsdataset"
        },
        {
                  "en": "A historical period in AI development",
                  "es": "Un período histórico en el desarrollo de IA",
                  "de": "Eine historische Periode in der KI-Entwicklung",
                  "nl": "Een historische periode in AI ontwikkeling"
        },
        {
                  "en": "A single training example",
                  "es": "Un solo ejemplo de entrenamiento",
                  "de": "Ein einzelnes Trainingsbeispiel",
                  "nl": "Een enkel trainingsvoorbeeld"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "An epoch represents one full cycle where the model has seen and learned from every example in the training dataset once.",
                  "es": "Una época representa un ciclo completo donde el modelo ha visto y aprendido de cada ejemplo en el conjunto de datos de entrenamiento una vez.",
                  "de": "Eine Epoche repräsentiert einen vollständigen Zyklus wo das Modell jedes Beispiel im Trainingsdatensatz einmal gesehen und daraus gelernt hat.",
                  "nl": "Een epoch vertegenwoordigt één volledige cyclus waarin het model elk voorbeeld in de trainingsdataset één keer heeft gezien en ervan heeft geleerd."
        }
      },
      {
        question: {
                  "en": "What is data augmentation?",
                  "es": "¿Qué es el aumento de datos?",
                  "de": "Was ist Datenaugmentation?",
                  "nl": "Wat is data augmentation?"
        },
        options: [
        {
                  "en": "Increasing the quality of images",
                  "es": "Aumentar la calidad de las imágenes",
                  "de": "Bildqualität erhöhen",
                  "nl": "Kwaliteit van afbeeldingen verhogen"
        },
        {
                  "en": "Creating modified versions of data to expand training set",
                  "es": "Crear versiones modificadas de datos para expandir el conjunto de entrenamiento",
                  "de": "Modifizierte Versionen von Daten erstellen um Trainingsset zu erweitern",
                  "nl": "Gemodificeerde versies van data maken om trainingsset uit te breiden"
        },
        {
                  "en": "Adding more storage to hold data",
                  "es": "Agregar más almacenamiento para contener datos",
                  "de": "Mehr Speicher hinzufügen um Daten zu halten",
                  "nl": "Meer opslag toevoegen om data vast te houden"
        },
        {
                  "en": "Collecting more real-world data",
                  "es": "Recolectar más datos del mundo real",
                  "de": "Mehr reale Daten sammeln",
                  "nl": "Meer real-world data verzamelen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Data augmentation artificially increases training data by applying transformations like rotation, flipping, or cropping to existing examples, helping prevent overfitting.",
                  "es": "El aumento de datos aumenta artificialmente los datos de entrenamiento aplicando transformaciones como rotación, volteo o recorte a ejemplos existentes, ayudando a prevenir sobreajuste.",
                  "de": "Datenaugmentation erhöht künstlich Trainingsdaten durch Anwendung von Transformationen wie Rotation, Spiegelung oder Zuschneiden auf bestehende Beispiele, hilft Overfitting zu verhindern.",
                  "nl": "Data augmentation vergroot kunstmatig trainingsdata door transformaties toe te passen zoals rotatie, spiegelen of bijsnijden op bestaande voorbeelden, helpt overfitting te voorkomen."
        }
      },
      {
        question: {
                  "en": "What is transfer learning?",
                  "es": "¿Qué es el aprendizaje por transferencia?",
                  "de": "Was ist Transfer Learning?",
                  "nl": "Wat is transfer learning?"
        },
        options: [
        {
                  "en": "Using a pre-trained model as starting point for a new task",
                  "es": "Usar un modelo pre-entrenado como punto de partida para una nueva tarea",
                  "de": "Ein vortrainiertes Modell als Ausgangspunkt für eine neue Aufgabe verwenden",
                  "nl": "Een voorgetraind model gebruiken als startpunt voor een nieuwe taak"
        },
        {
                  "en": "Moving a model from training to production",
                  "es": "Mover un modelo de entrenamiento a producción",
                  "de": "Ein Modell vom Training zur Produktion verschieben",
                  "nl": "Een model verplaatsen van training naar productie"
        },
        {
                  "en": "Transferring data between computers",
                  "es": "Transferir datos entre computadoras",
                  "de": "Daten zwischen Computern übertragen",
                  "nl": "Data overdragen tussen computers"
        },
        {
                  "en": "Teaching AI to learn faster",
                  "es": "Enseñar a IA a aprender más rápido",
                  "de": "KI beibringen schneller zu lernen",
                  "nl": "AI leren om sneller te leren"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Transfer learning leverages knowledge from a model trained on one task to improve learning on a related but different task, saving time and data requirements.",
                  "es": "El aprendizaje por transferencia aprovecha el conocimiento de un modelo entrenado en una tarea para mejorar el aprendizaje en una tarea relacionada pero diferente, ahorrando tiempo y requisitos de datos.",
                  "de": "Transfer Learning nutzt Wissen von einem auf einer Aufgabe trainierten Modell um das Lernen bei einer verwandten aber anderen Aufgabe zu verbessern, spart Zeit und Datenanforderungen.",
                  "nl": "Transfer learning maakt gebruik van kennis van een model getraind op één taak om het leren op een gerelateerde maar verschillende taak te verbeteren, bespaart tijd en datavereisten."
        }
      },
      {
        question: {
                  "en": "What is dimensionality reduction?",
                  "es": "¿Qué es la reducción de dimensionalidad?",
                  "de": "Was ist Dimensionsreduktion?",
                  "nl": "Wat is dimensionaliteitsreductie?"
        },
        options: [
        {
                  "en": "Simplifying the model architecture",
                  "es": "Simplificar la arquitectura del modelo",
                  "de": "Modellarchitektur vereinfachen",
                  "nl": "Modelarchitectuur vereenvoudigen"
        },
        {
                  "en": "Making images smaller in size",
                  "es": "Hacer imágenes más pequeñas en tamaño",
                  "de": "Bilder in der Größe verkleinern",
                  "nl": "Afbeeldingen kleiner maken in grootte"
        },
        {
                  "en": "Removing data from the dataset",
                  "es": "Eliminar datos del conjunto de datos",
                  "de": "Daten aus dem Datensatz entfernen",
                  "nl": "Data uit de dataset verwijderen"
        },
        {
                  "en": "Reducing the number of input features while preserving important information",
                  "es": "Reducir el número de características de entrada mientras se preserva información importante",
                  "de": "Anzahl der Eingabefeatures reduzieren während wichtige Informationen erhalten bleiben",
                  "nl": "Aantal invoerfeatures verminderen terwijl belangrijke informatie behouden blijft"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Dimensionality reduction techniques like PCA reduce the number of variables in data while retaining most important patterns, helping with visualization and reducing computational cost.",
                  "es": "Las técnicas de reducción de dimensionalidad como PCA reducen el número de variables en datos mientras retienen los patrones más importantes, ayudando con visualización y reduciendo costo computacional.",
                  "de": "Dimensionsreduktionstechniken wie PCA reduzieren die Anzahl der Variablen in Daten während die wichtigsten Muster erhalten bleiben, hilft bei Visualisierung und reduziert Rechenkosten.",
                  "nl": "Dimensionaliteitsreductie technieken zoals PCA verminderen het aantal variabelen in data terwijl de belangrijkste patronen behouden blijven, helpt bij visualisatie en vermindert rekenkosten."
        }
      },
      {
        question: {
                  "en": "What is the F1 score?",
                  "es": "¿Qué es el puntaje F1?",
                  "de": "Was ist der F1-Score?",
                  "nl": "Wat is de F1 score?"
        },
        options: [
        {
                  "en": "A score from 1 to 10 for model quality",
                  "es": "Una puntuación de 1 a 10 para calidad del modelo",
                  "de": "Eine Punktzahl von 1 bis 10 für Modellqualität",
                  "nl": "Een score van 1 tot 10 voor modelkwaliteit"
        },
        {
                  "en": "The harmonic mean of precision and recall",
                  "es": "La media armónica de precisión y recall",
                  "de": "Das harmonische Mittel von Präzision und Recall",
                  "nl": "Het harmonisch gemiddelde van precisie en recall"
        },
        {
                  "en": "The first formula used in machine learning",
                  "es": "La primera fórmula usada en aprendizaje automático",
                  "de": "Die erste Formel im maschinellen Lernen",
                  "nl": "De eerste formule gebruikt in machine learning"
        },
        {
                  "en": "The final score after all testing",
                  "es": "La puntuación final después de todas las pruebas",
                  "de": "Die endgültige Punktzahl nach allen Tests",
                  "nl": "De uiteindelijke score na alle testen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "F1 score combines precision and recall into a single metric, useful when you need a balance between identifying all positive cases and ensuring predictions are accurate.",
                  "es": "El puntaje F1 combina precisión y recall en una sola métrica, útil cuando necesitas un balance entre identificar todos los casos positivos y asegurar que las predicciones sean precisas.",
                  "de": "F1-Score kombiniert Präzision und Recall in eine einzelne Metrik, nützlich wenn man ein Gleichgewicht zwischen Identifizierung aller positiven Fälle und Sicherstellung genauer Vorhersagen benötigt.",
                  "nl": "F1 score combineert precisie en recall in een enkele metriek, nuttig wanneer je een balans nodig hebt tussen het identificeren van alle positieve gevallen en zorgen dat voorspellingen nauwkeurig zijn."
        }
      },
      {
        question: {
                  "en": "What is ensemble learning?",
                  "es": "¿Qué es el aprendizaje en conjunto?",
                  "de": "Was ist Ensemble Learning?",
                  "nl": "Wat is ensemble learning?"
        },
        options: [
        {
                  "en": "Combining multiple models to improve predictions",
                  "es": "Combinar múltiples modelos para mejorar predicciones",
                  "de": "Mehrere Modelle kombinieren um Vorhersagen zu verbessern",
                  "nl": "Meerdere modellen combineren om voorspellingen te verbeteren"
        },
        {
                  "en": "Using music ensembles to teach AI",
                  "es": "Usar conjuntos musicales para enseñar IA",
                  "de": "Musik-Ensembles verwenden um KI zu lehren",
                  "nl": "Muziekensembles gebruiken om AI te leren"
        },
        {
                  "en": "Learning from multiple datasets simultaneously",
                  "es": "Aprender de múltiples conjuntos de datos simultáneamente",
                  "de": "Von mehreren Datensätzen gleichzeitig lernen",
                  "nl": "Leren van meerdere datasets tegelijkertijd"
        },
        {
                  "en": "Training models in groups",
                  "es": "Entrenar modelos en grupos",
                  "de": "Modelle in Gruppen trainieren",
                  "nl": "Modellen in groepen trainen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Ensemble learning combines predictions from multiple models (like decision trees in random forests) to achieve better accuracy than any single model alone.",
                  "es": "El aprendizaje en conjunto combina predicciones de múltiples modelos (como árboles de decisión en bosques aleatorios) para lograr mejor precisión que cualquier modelo individual solo.",
                  "de": "Ensemble Learning kombiniert Vorhersagen von mehreren Modellen (wie Entscheidungsbäume in Random Forests) um bessere Genauigkeit als jedes einzelne Modell allein zu erreichen.",
                  "nl": "Ensemble learning combineert voorspellingen van meerdere modellen (zoals decision trees in random forests) om betere nauwkeurigheid te bereiken dan elk afzonderlijk model alleen."
        }
      },
      {
        question: {
                  "en": "What is a decision tree?",
                  "es": "¿Qué es un árbol de decisión?",
                  "de": "Was ist ein Entscheidungsbaum?",
                  "nl": "Wat is een decision tree?"
        },
        options: [
        {
                  "en": "A tree structure for storing data",
                  "es": "Una estructura de árbol para almacenar datos",
                  "de": "Eine Baumstruktur zum Speichern von Daten",
                  "nl": "Een boomstructuur voor het opslaan van data"
        },
        {
                  "en": "A tree-like model that makes decisions through branching questions",
                  "es": "Un modelo en forma de árbol que toma decisiones a través de preguntas ramificadas",
                  "de": "Ein baumartiges Modell das Entscheidungen durch verzweigende Fragen trifft",
                  "nl": "Een boomachtig model dat beslissingen neemt via vertakkende vragen"
        },
        {
                  "en": "A forest of neural networks",
                  "es": "Un bosque de redes neuronales",
                  "de": "Ein Wald von neuronalen Netzwerken",
                  "nl": "Een bos van neurale netwerken"
        },
        {
                  "en": "A diagram of all possible decisions",
                  "es": "Un diagrama de todas las decisiones posibles",
                  "de": "Ein Diagramm aller möglichen Entscheidungen",
                  "nl": "Een diagram van alle mogelijke beslissingen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Decision trees split data into branches based on feature values, creating a flowchart-like structure where each internal node represents a test and each leaf represents a decision or prediction.",
                  "es": "Los árboles de decisión dividen datos en ramas basándose en valores de características, creando una estructura tipo diagrama de flujo donde cada nodo interno representa una prueba y cada hoja representa una decisión o predicción.",
                  "de": "Entscheidungsbäume teilen Daten in Zweige basierend auf Feature-Werten auf, erstellen eine flussdiagrammartige Struktur wo jeder interne Knoten einen Test repräsentiert und jedes Blatt eine Entscheidung oder Vorhersage.",
                  "nl": "Decision trees splitsen data in takken gebaseerd op feature waarden, creëren een stroomdiagram-achtige structuur waar elke interne node een test vertegenwoordigt en elk blad een beslissing of voorspelling."
        }
      },
      {
        question: {
                  "en": "What is random forest?",
                  "es": "¿Qué es un bosque aleatorio?",
                  "de": "Was ist ein Random Forest?",
                  "nl": "Wat is random forest?"
        },
        options: [
        {
                  "en": "A type of neural network architecture",
                  "es": "Un tipo de arquitectura de red neuronal",
                  "de": "Eine Art neuronaler Netzwerkarchitektur",
                  "nl": "Een type neuraal netwerkarchitectuur"
        },
        {
                  "en": "An ensemble of decision trees that vote on predictions",
                  "es": "Un conjunto de árboles de decisión que votan sobre predicciones",
                  "de": "Ein Ensemble von Entscheidungsbäumen die über Vorhersagen abstimmen",
                  "nl": "Een ensemble van decision trees die stemmen op voorspellingen"
        },
        {
                  "en": "Random selection of training data",
                  "es": "Selección aleatoria de datos de entrenamiento",
                  "de": "Zufällige Auswahl von Trainingsdaten",
                  "nl": "Willekeurige selectie van trainingsdata"
        },
        {
                  "en": "A forest where trees are placed randomly",
                  "es": "Un bosque donde los árboles se colocan aleatoriamente",
                  "de": "Ein Wald wo Bäume zufällig platziert werden",
                  "nl": "Een bos waar bomen willekeurig geplaatst worden"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Random forest builds multiple decision trees on random subsets of data and features, then combines their predictions through voting, reducing overfitting and improving accuracy.",
                  "es": "El bosque aleatorio construye múltiples árboles de decisión en subconjuntos aleatorios de datos y características, luego combina sus predicciones a través de votación, reduciendo sobreajuste y mejorando precisión.",
                  "de": "Random Forest baut mehrere Entscheidungsbäume auf zufälligen Teilmengen von Daten und Features, kombiniert dann ihre Vorhersagen durch Abstimmung, reduziert Overfitting und verbessert Genauigkeit.",
                  "nl": "Random forest bouwt meerdere decision trees op willekeurige subsets van data en features, combineert dan hun voorspellingen door stemming, vermindert overfitting en verbetert nauwkeurigheid."
        }
      },
      {
        question: {
                  "en": "What is k-fold cross-validation?",
                  "es": "¿Qué es la validación cruzada de k iteraciones?",
                  "de": "Was ist k-fache Kreuzvalidierung?",
                  "nl": "Wat is k-fold cross-validatie?"
        },
        options: [
        {
                  "en": "Splitting data into k parts, training k times using different parts for testing",
                  "es": "Dividir datos en k partes, entrenar k veces usando diferentes partes para prueba",
                  "de": "Daten in k Teile aufteilen, k-mal trainieren mit verschiedenen Teilen zum Testen",
                  "nl": "Data splitsen in k delen, k keer trainen met verschillende delen voor testen"
        },
        {
                  "en": "Using k different algorithms",
                  "es": "Usar k algoritmos diferentes",
                  "de": "k verschiedene Algorithmen verwenden",
                  "nl": "k verschillende algoritmes gebruiken"
        },
        {
                  "en": "Validating the model k times with same data",
                  "es": "Validar el modelo k veces con los mismos datos",
                  "de": "Modell k-mal mit denselben Daten validieren",
                  "nl": "Model k keer valideren met dezelfde data"
        },
        {
                  "en": "Folding the paper k times for organization",
                  "es": "Doblar el papel k veces para organización",
                  "de": "Papier k-mal falten zur Organisation",
                  "nl": "Papier k keer vouwen voor organisatie"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "K-fold cross-validation divides data into k equal parts, trains the model k times using k-1 parts for training and 1 for validation each time, giving a more robust performance estimate.",
                  "es": "La validación cruzada de k iteraciones divide datos en k partes iguales, entrena el modelo k veces usando k-1 partes para entrenamiento y 1 para validación cada vez, dando una estimación de rendimiento más robusta.",
                  "de": "K-fache Kreuzvalidierung teilt Daten in k gleiche Teile, trainiert das Modell k-mal mit k-1 Teilen zum Training und 1 zur Validierung jedes Mal, gibt eine robustere Leistungsschätzung.",
                  "nl": "K-fold cross-validatie verdeelt data in k gelijke delen, traint het model k keer met k-1 delen voor training en 1 voor validatie elke keer, geeft een robuustere prestatie-schatting."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  }
})();