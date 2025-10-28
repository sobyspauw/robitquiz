// AI Machine Learning Quiz - Level 1: Beginner
(function() {
  const level1 = {
    name: {
      en: "Machine Learning Basics",
      es: "Fundamentos de Aprendizaje Automático",
      de: "Grundlagen des maschinellen Lernens",
      nl: "Machine Learning Basics"
    },
    questions: [
      {
        question: {
          en: "What does AI stand for?",
          es: "¿Qué significa IA?",
          de: "Wofür steht KI?",
          nl: "Waar staat AI voor?"
        },
        options: [
          { en: "Artificial Intelligence", es: "Inteligencia Artificial", de: "Künstliche Intelligenz", nl: "Artificial Intelligence" },
          { en: "Automatic Information", es: "Información Automática", de: "Automatische Information", nl: "Automatische Informatie" },
          { en: "Advanced Internet", es: "Internet Avanzado", de: "Erweiterte Internet", nl: "Geavanceerd Internet" },
          { en: "Application Interface", es: "Interfaz de Aplicación", de: "Anwendungsschnittstelle", nl: "Applicatie Interface" }
        ],
        correct: 0,
        explanation: {
          en: "AI stands for Artificial Intelligence, which refers to computer systems that can perform tasks typically requiring human intelligence.",
          es: "IA significa Inteligencia Artificial, que se refiere a sistemas informáticos que pueden realizar tareas que normalmente requieren inteligencia humana.",
          de: "KI steht für Künstliche Intelligenz, die sich auf Computersysteme bezieht, die Aufgaben ausführen können, die normalerweise menschliche Intelligenz erfordern.",
          nl: "AI staat voor Artificial Intelligence, wat verwijst naar computersystemen die taken kunnen uitvoeren die normaal menselijke intelligentie vereisen."
        }
      },
      {
        question: {
          en: "Which company developed the voice assistant Siri?",
          es: "¿Qué empresa desarrolló el asistente de voz Siri?",
          de: "Welches Unternehmen hat den Sprachassistenten Siri entwickelt?",
          nl: "Welk bedrijf ontwikkelde de spraakassistent Siri?"
        },
        options: [
          { en: "Google", es: "Google", de: "Google", nl: "Google" },
          { en: "Apple", es: "Apple", de: "Apple", nl: "Apple" },
          { en: "Microsoft", es: "Microsoft", de: "Microsoft", nl: "Microsoft" },
          { en: "Amazon", es: "Amazon", de: "Amazon", nl: "Amazon" }
        ],
        correct: 1,
        explanation: {
          en: "Apple developed Siri, which was first introduced in 2011 as one of the first mainstream voice assistants for smartphones.",
          es: "Apple desarrolló Siri, que se introdujo por primera vez en 2011 como uno de los primeros asistentes de voz convencionales para teléfonos inteligentes.",
          de: "Apple entwickelte Siri, das 2011 als einer der ersten Mainstream-Sprachassistenten für Smartphones eingeführt wurde.",
          nl: "Apple ontwikkelde Siri, dat in 2011 werd geïntroduceerd als een van de eerste mainstream spraakassistenten voor smartphones."
        }
      },
      {
        question: {
          en: "What is machine learning?",
          es: "¿Qué es el aprendizaje automático?",
          de: "Was ist maschinelles Lernen?",
          nl: "Wat is machine learning?"
        },
        options: [
          { en: "Teaching computers to think like humans", es: "Enseñar a las computadoras a pensar como humanos", de: "Computern beibringen, wie Menschen zu denken", nl: "Computers leren denken zoals mensen" },
          { en: "Programming computers with fixed rules", es: "Programar computadoras con reglas fijas", de: "Computer mit festen Regeln programmieren", nl: "Computers programmeren met vaste regels" },
          { en: "Learning from data without programming", es: "Computadoras que aprenden de datos sin programación explícita", de: "Computer lernen aus Daten ohne explizite Programmierung", nl: "Computers die leren van data zonder expliciete programmering" },
          { en: "Building robot bodies", es: "Construir cuerpos de robots", de: "Roboterkörper bauen", nl: "Robotlichamen bouwen" }
        ],
        correct: 2,
        explanation: {
          en: "Machine learning enables computers to learn and improve from data automatically, without being explicitly programmed for every task.",
          es: "El aprendizaje automático permite a las computadoras aprender y mejorar automáticamente a partir de datos, sin ser programadas explícitamente para cada tarea.",
          de: "Maschinelles Lernen ermöglicht es Computern, automatisch aus Daten zu lernen und sich zu verbessern, ohne für jede Aufgabe explizit programmiert zu werden.",
          nl: "Machine learning stelt computers in staat om automatisch te leren en te verbeteren op basis van data, zonder expliciet geprogrammeerd te worden voor elke taak."
        }
      },
      {
        question: {
          en: "Which of these is a popular application of AI?",
          es: "¿Cuál de estas es una aplicación popular de IA?",
          de: "Welche davon ist eine beliebte Anwendung von KI?",
          nl: "Welke hiervan is een populaire toepassing van AI?"
        },
        options: [
          { en: "Spam filtering", es: "Filtrado de spam en email", de: "E-Mail-Spam-Filterung", nl: "Spam filtering" },
          { en: "Calculator apps", es: "Aplicaciones de calculadora", de: "Rechner-Apps", nl: "Rekenmachine apps" },
          { en: "Digital clocks", es: "Relojes digitales", de: "Digitaluhren", nl: "Digitale klokken" },
          { en: "Text editors", es: "Editores de texto", de: "Text-Editoren", nl: "Teksteditors" }
        ],
        correct: 0,
        explanation: {
          en: "Email spam filtering uses machine learning algorithms to automatically detect and filter unwanted emails based on patterns in the content.",
          es: "El filtrado de spam de correo electrónico utiliza algoritmos de aprendizaje automático para detectar y filtrar automáticamente correos electrónicos no deseados basándose en patrones en el contenido.",
          de: "E-Mail-Spam-Filterung verwendet maschinelle Lernalgorithmen, um unerwünschte E-Mails basierend auf Mustern im Inhalt automatisch zu erkennen und zu filtern.",
          nl: "Email spam filtering gebruikt machine learning algoritmes om automatisch ongewenste emails te detecteren en filteren op basis van patronen in de inhoud."
        }
      },
      {
        question: {
          en: "What does 'training data' mean in machine learning?",
          es: "¿Qué significa 'datos de entrenamiento' en aprendizaje automático?",
          de: "Was bedeutet 'Trainingsdaten' im maschinellen Lernen?",
          nl: "Wat betekent 'trainingsdata' in machine learning?"
        },
        options: [
          { en: "Data used to test if the AI works", es: "Datos utilizados para probar si la IA funciona", de: "Daten zum Testen, ob die KI funktioniert", nl: "Data gebruikt om te testen of de AI werkt" },
          { en: "Examples used to teach the AI system", es: "Ejemplos utilizados para enseñar al sistema de IA", de: "Beispiele zum Lehren des KI-Systems", nl: "Voorbeelden gebruikt om het AI systeem te leren" },
          { en: "Data about gym workouts", es: "Datos sobre entrenamientos de gimnasio", de: "Daten über Gym-Workouts", nl: "Data over sportschool trainingen" },
          { en: "Information about train schedules", es: "Información sobre horarios de trenes", de: "Informationen über Zugfahrpläne", nl: "Informatie over treinschema's" }
        ],
        correct: 1,
        explanation: {
          en: "Training data consists of examples that are fed to machine learning algorithms so they can learn patterns and make predictions on new, unseen data.",
          es: "Los datos de entrenamiento consisten en ejemplos que se alimentan a los algoritmos de aprendizaje automático para que puedan aprender patrones y hacer predicciones sobre datos nuevos y no vistos.",
          de: "Trainingsdaten bestehen aus Beispielen, die an maschinelle Lernalgorithmen gefüttert werden, damit sie Muster lernen und Vorhersagen über neue, ungesehene Daten treffen können.",
          nl: "Trainingsdata bestaat uit voorbeelden die aan machine learning algoritmes worden gegeven zodat ze patronen kunnen leren en voorspellingen kunnen maken over nieuwe, ongeziene data."
        }
      },
      {
        question: {
          en: "What is the main goal of artificial intelligence?",
          es: "¿Cuál es el objetivo principal de la inteligencia artificial?",
          de: "Was ist das Hauptziel der künstlichen Intelligenz?",
          nl: "Wat is het hoofddoel van kunstmatige intelligentie?"
        },
        options: [
          { en: "Make computers intelligent", es: "Hacer que las computadoras actúen inteligentemente como los humanos", de: "Computer dazu zu bringen, intelligent wie Menschen zu handeln", nl: "Computers intelligent laten handelen zoals mensen" },
          { en: "To replace all human workers", es: "Reemplazar a todos los trabajadores humanos", de: "Alle menschlichen Arbeiter zu ersetzen", nl: "Alle menselijke werknemers vervangen" },
          { en: "To make computers faster", es: "Hacer las computadoras más rápidas", de: "Computer schneller zu machen", nl: "Computers sneller maken" },
          { en: "To create smaller devices", es: "Crear dispositivos más pequeños", de: "Kleinere Geräte zu schaffen", nl: "Kleinere apparaten maken" }
        ],
        correct: 0,
        explanation: {
          en: "AI aims to create systems that can perform tasks requiring human-like intelligence, such as reasoning, learning, and problem-solving.",
          es: "La IA busca crear sistemas que puedan realizar tareas que requieren inteligencia similar a la humana, como razonamiento, aprendizaje y resolución de problemas.",
          de: "KI zielt darauf ab, Systeme zu schaffen, die Aufgaben ausführen können, die menschliche Intelligenz erfordern, wie Denken, Lernen und Problemlösung.",
          nl: "AI streeft ernaar systemen te creëren die taken kunnen uitvoeren die menselijke intelligentie vereisen, zoals redeneren, leren en probleemoplossing."
        }
      },
      {
        question: {
          en: "What is the difference between AI and machine learning?",
          es: "¿Cuál es la diferencia entre IA y aprendizaje automático?",
          de: "Was ist der Unterschied zwischen KI und maschinellem Lernen?",
          nl: "Wat is het verschil tussen AI en machine learning?"
        },
        options: [
          { en: "Machine learning is a subset of AI focused on learning from data", es: "El aprendizaje automático es un subconjunto de IA enfocado en aprender de los datos", de: "Maschinelles Lernen ist eine Teilmenge der KI, die sich auf das Lernen aus Daten konzentriert", nl: "Machine learning is een subset van AI gericht op leren van data" },
          { en: "AI and machine learning are exactly the same thing", es: "IA y aprendizaje automático son exactamente lo mismo", de: "KI und maschinelles Lernen sind genau dasselbe", nl: "AI en machine learning zijn precies hetzelfde" },
          { en: "AI is older than machine learning", es: "La IA es más antigua que el aprendizaje automático", de: "KI ist älter als maschinelles Lernen", nl: "AI is ouder dan machine learning" },
          { en: "Machine learning is more advanced than AI", es: "El aprendizaje automático es más avanzado que la IA", de: "Maschinelles Lernen ist fortschrittlicher als KI", nl: "Machine learning is geavanceerder dan AI" }
        ],
        correct: 0,
        explanation: {
          en: "AI is the broader concept of machines being able to carry out tasks in a smart way, while machine learning is a specific approach to achieve AI through learning from data.",
          es: "La IA es el concepto más amplio de máquinas capaces de realizar tareas de manera inteligente, mientras que el aprendizaje automático es un enfoque específico para lograr IA mediante el aprendizaje de datos.",
          de: "KI ist das breitere Konzept von Maschinen, die Aufgaben intelligent ausführen können, während maschinelles Lernen ein spezifischer Ansatz ist, um KI durch Lernen aus Daten zu erreichen.",
          nl: "AI is het bredere concept van machines die taken op een slimme manier kunnen uitvoeren, terwijl machine learning een specifieke benadering is om AI te bereiken door van data te leren."
        }
      },
      {
        question: {
          en: "Which of these is an example of supervised learning?",
          es: "¿Cuál de estos es un ejemplo de aprendizaje supervisado?",
          de: "Welches ist ein Beispiel für überwachtes Lernen?",
          nl: "Welke hiervan is een voorbeeld van supervised learning?"
        },
        options: [
          { en: "Email spam detection using labeled examples", es: "Detección de spam en email usando ejemplos etiquetados", de: "E-Mail-Spam-Erkennung mit beschrifteten Beispielen", nl: "Email spam detectie met gelabelde voorbeelden" },
          { en: "Discovering hidden patterns in data", es: "Descubrir patrones ocultos en los datos", de: "Versteckte Muster in Daten entdecken", nl: "Verborgen patronen in data ontdekken" },
          { en: "Playing games without instructions", es: "Jugar juegos sin instrucciones", de: "Spiele ohne Anweisungen spielen", nl: "Spellen spelen zonder instructies" },
          { en: "Exploring data without any guidance", es: "Explorar datos sin ninguna guía", de: "Daten ohne Anleitung erkunden", nl: "Data verkennen zonder begeleiding" }
        ],
        correct: 0,
        explanation: {
          en: "Supervised learning uses labeled training data where the correct answers are provided, like training a spam filter with emails already marked as spam or not spam.",
          es: "El aprendizaje supervisado utiliza datos de entrenamiento etiquetados donde se proporcionan las respuestas correctas, como entrenar un filtro de spam con correos ya marcados como spam o no spam.",
          de: "Überwachtes Lernen verwendet beschriftete Trainingsdaten, bei denen die korrekten Antworten bereitgestellt werden, wie das Training eines Spam-Filters mit E-Mails, die bereits als Spam oder nicht-Spam markiert sind.",
          nl: "Supervised learning gebruikt gelabelde trainingsdata waar de juiste antwoorden worden gegeven, zoals het trainen van een spamfilter met emails die al gemarkeerd zijn als spam of niet-spam."
        }
      },
      {
        question: {
          en: "What is unsupervised learning?",
          es: "¿Qué es el aprendizaje no supervisado?",
          de: "Was ist unüberwachtes Lernen?",
          nl: "Wat is unsupervised learning?"
        },
        options: [
          { en: "Learning patterns from data without correct answers provided", es: "Aprender patrones de datos sin respuestas correctas proporcionadas", de: "Muster aus Daten lernen ohne bereitgestellte korrekte Antworten", nl: "Patronen leren uit data zonder juiste antwoorden gegeven" },
          { en: "Learning only when a teacher is not watching", es: "Aprender solo cuando un maestro no está mirando", de: "Nur lernen, wenn ein Lehrer nicht zuschaut", nl: "Alleen leren wanneer een leraar niet kijkt" },
          { en: "Learning without using a computer", es: "Aprender sin usar una computadora", de: "Lernen ohne Computer zu verwenden", nl: "Leren zonder een computer te gebruiken" },
          { en: "Learning only basic concepts", es: "Aprender solo conceptos básicos", de: "Nur grundlegende Konzepte lernen", nl: "Alleen basisbegrippen leren" }
        ],
        correct: 0,
        explanation: {
          en: "Unsupervised learning finds hidden patterns in data without being given examples of correct answers, like grouping customers with similar buying habits.",
          es: "El aprendizaje no supervisado encuentra patrones ocultos en los datos sin recibir ejemplos de respuestas correctas, como agrupar clientes con hábitos de compra similares.",
          de: "Unüberwachtes Lernen findet versteckte Muster in Daten, ohne Beispiele korrekter Antworten zu erhalten, wie das Gruppieren von Kunden mit ähnlichen Kaufgewohnheiten.",
          nl: "Unsupervised learning vindt verborgen patronen in data zonder voorbeelden van juiste antwoorden te krijgen, zoals het groeperen van klanten met vergelijkbare koopgewoonten."
        }
      },
      {
        question: {
          en: "What is an algorithm in the context of machine learning?",
          es: "¿Qué es un algoritmo en el contexto del aprendizaje automático?",
          de: "Was ist ein Algorithmus im Kontext des maschinellen Lernens?",
          nl: "Wat is een algoritme in de context van machine learning?"
        },
        options: [
          { en: "A set of rules and instructions for solving problems", es: "Un conjunto de reglas e instrucciones para resolver problemas", de: "Ein Satz von Regeln und Anweisungen zur Problemlösung", nl: "Een set regels en instructies voor het oplossen van problemen" },
          { en: "A type of computer hardware", es: "Un tipo de hardware de computadora", de: "Eine Art Computerhardware", nl: "Een type computerhardware" },
          { en: "A programming language", es: "Un lenguaje de programación", de: "Eine Programmiersprache", nl: "Een programmeertaal" },
          { en: "A storage device", es: "Un dispositivo de almacenamiento", de: "Ein Speichergerät", nl: "Een opslagapparaat" }
        ],
        correct: 0,
        explanation: {
          en: "In machine learning, an algorithm is a mathematical procedure that tells the computer how to find patterns in data and make predictions.",
          es: "En aprendizaje automático, un algoritmo es un procedimiento matemático que le dice a la computadora cómo encontrar patrones en los datos y hacer predicciones.",
          de: "Im maschinellen Lernen ist ein Algorithmus ein mathematisches Verfahren, das dem Computer sagt, wie er Muster in Daten finden und Vorhersagen treffen kann.",
          nl: "In machine learning is een algoritme een wiskundige procedure die de computer vertelt hoe patronen in data te vinden en voorspellingen te maken."
        }
      },
      {
        question: {
          en: "What does 'big data' refer to?",
          es: "¿A qué se refiere 'big data'?",
          de: "Worauf bezieht sich 'Big Data'?",
          nl: "Waar verwijst 'big data' naar?"
        },
        options: [
          { en: "Extremely large datasets that require special tools to process", es: "Conjuntos de datos extremadamente grandes que requieren herramientas especiales para procesar", de: "Extrem große Datensätze, die spezielle Werkzeuge zur Verarbeitung benötigen", nl: "Extreem grote datasets die speciale tools nodig hebben om te verwerken" },
          { en: "Data files that are bigger than 1 GB", es: "Archivos de datos que son mayores a 1 GB", de: "Datendateien, die größer als 1 GB sind", nl: "Databestanden die groter zijn dan 1 GB" },
          { en: "Important business information", es: "Información comercial importante", de: "Wichtige Geschäftsinformationen", nl: "Belangrijke bedrijfsinformatie" },
          { en: "Data stored on large hard drives", es: "Datos almacenados en discos duros grandes", de: "Daten, die auf großen Festplatten gespeichert sind", nl: "Data opgeslagen op grote harde schijven" }
        ],
        correct: 0,
        explanation: {
          en: "Big data refers to datasets so large and complex that traditional data processing software cannot handle them efficiently.",
          es: "Big data se refiere a conjuntos de datos tan grandes y complejos que el software tradicional de procesamiento de datos no puede manejarlos eficientemente.",
          de: "Big Data bezieht sich auf Datensätze, die so groß und komplex sind, dass traditionelle Datenverarbeitungssoftware sie nicht effizient handhaben kann.",
          nl: "Big data verwijst naar datasets die zo groot en complex zijn dat traditionele dataverwerkingssoftware ze niet efficiënt kan verwerken."
        }
      },
      {
        question: {
          en: "What is a chatbot?",
          es: "¿Qué es un chatbot?",
          de: "Was ist ein Chatbot?",
          nl: "Wat is een chatbot?"
        },
        options: [
          { en: "A computer program that can have conversations with humans", es: "Un programa de computadora que puede tener conversaciones con humanos", de: "Ein Computerprogramm, das Gespräche mit Menschen führen kann", nl: "Een computerprogramma dat gesprekken kan voeren met mensen" },
          { en: "A robot that cleans your house", es: "Un robot que limpia tu casa", de: "Ein Roboter, der dein Haus putzt", nl: "Een robot die je huis schoonmaakt" },
          { en: "A video game character", es: "Un personaje de videojuego", de: "Eine Videospiel-Figur", nl: "Een videospel personage" },
          { en: "A type of social media app", es: "Un tipo de aplicación de redes sociales", de: "Eine Art Social-Media-App", nl: "Een type sociale media app" }
        ],
        correct: 0,
        explanation: {
          en: "A chatbot is an AI program designed to simulate conversation with human users, often used for customer service or information assistance.",
          es: "Un chatbot es un programa de IA diseñado para simular conversaciones con usuarios humanos, a menudo utilizado para servicio al cliente o asistencia de información.",
          de: "Ein Chatbot ist ein KI-Programm, das entwickelt wurde, um Gespräche mit menschlichen Benutzern zu simulieren, oft für Kundenservice oder Informationshilfe verwendet.",
          nl: "Een chatbot is een AI-programma ontworpen om gesprekken met menselijke gebruikers te simuleren, vaak gebruikt voor klantenservice of informatie-assistentie."
        }
      },
      {
        question: {
          en: "What does it mean when we say an AI system 'learns'?",
          es: "¿Qué significa cuando decimos que un sistema de IA 'aprende'?",
          de: "Was bedeutet es, wenn wir sagen, dass ein KI-System 'lernt'?",
          nl: "Wat betekent het wanneer we zeggen dat een AI-systeem 'leert'?"
        },
        options: [
          { en: "It improves its performance based on experience with data", es: "Mejora su rendimiento basado en la experiencia con los datos", de: "Es verbessert seine Leistung basierend auf Erfahrung mit Daten", nl: "Het verbetert zijn prestaties gebaseerd op ervaring met data" },
          { en: "It reads textbooks like humans do", es: "Lee libros de texto como lo hacen los humanos", de: "Es liest Lehrbücher wie Menschen", nl: "Het leest tekstboeken zoals mensen doen" },
          { en: "It downloads new software updates", es: "Descarga nuevas actualizaciones de software", de: "Es lädt neue Software-Updates herunter", nl: "Het downloadt nieuwe software-updates" },
          { en: "It gets taught by human teachers", es: "Es enseñado por maestros humanos", de: "Es wird von menschlichen Lehrern unterrichtet", nl: "Het wordt onderwezen door menselijke leraren" }
        ],
        correct: 0,
        explanation: {
          en: "AI learning means the system automatically adjusts and improves its performance by finding patterns in data and updating its internal parameters.",
          es: "El aprendizaje de IA significa que el sistema ajusta automáticamente y mejora su rendimiento encontrando patrones en los datos y actualizando sus parámetros internos.",
          de: "KI-Lernen bedeutet, dass das System automatisch seine Leistung anpasst und verbessert, indem es Muster in Daten findet und seine internen Parameter aktualisiert.",
          nl: "AI-leren betekent dat het systeem automatisch zijn prestaties aanpast en verbetert door patronen in data te vinden en zijn interne parameters bij te werken."
        }
      },
      {
        question: {
          en: "What is the purpose of testing data in machine learning?",
          es: "¿Cuál es el propósito de los datos de prueba en aprendizaje automático?",
          de: "Was ist der Zweck von Testdaten im maschinellen Lernen?",
          nl: "Wat is het doel van testdata in machine learning?"
        },
        options: [
          { en: "To evaluate how well the AI performs on new, unseen data", es: "Evaluar qué tan bien funciona la IA en datos nuevos y no vistos", de: "Zu bewerten, wie gut die KI bei neuen, ungesehenen Daten funktioniert", nl: "Om te evalueren hoe goed de AI presteert op nieuwe, ongeziene data" },
          { en: "To train the AI system", es: "Para entrenar el sistema de IA", de: "Um das KI-System zu trainieren", nl: "Om het AI-systeem te trainen" },
          { en: "To fix bugs in the software", es: "Para corregir errores en el software", de: "Um Fehler in der Software zu beheben", nl: "Om bugs in de software te repareren" },
          { en: "To make the AI run faster", es: "Para hacer que la IA funcione más rápido", de: "Um die KI schneller laufen zu lassen", nl: "Om de AI sneller te laten werken" }
        ],
        correct: 0,
        explanation: {
          en: "Testing data is kept separate during training and used to measure how well the trained model generalizes to new examples it hasn't seen before.",
          es: "Los datos de prueba se mantienen separados durante el entrenamiento y se usan para medir qué tan bien el modelo entrenado generaliza a nuevos ejemplos que no ha visto antes.",
          de: "Testdaten werden während des Trainings getrennt gehalten und verwendet, um zu messen, wie gut das trainierte Modell auf neue Beispiele generalisiert, die es zuvor nicht gesehen hat.",
          nl: "Testdata wordt gescheiden gehouden tijdens training en gebruikt om te meten hoe goed het getrainde model generaliseert naar nieuwe voorbeelden die het nog niet eerder heeft gezien."
        }
      },
      {
        question: {
          en: "What is a neural network inspired by?",
          es: "¿En qué se inspira una red neuronal?",
          de: "Wovon ist ein neuronales Netzwerk inspiriert?",
          nl: "Waarop is een neuraal netwerk geïnspireerd?"
        },
        options: [
          { en: "The human brain and its neurons", es: "El cerebro humano y sus neuronas", de: "Das menschliche Gehirn und seine Neuronen", nl: "Het menselijke brein en zijn neuronen" },
          { en: "Computer networks and the internet", es: "Redes informáticas e internet", de: "Computernetzwerke und das Internet", nl: "Computernetwerken en het internet" },
          { en: "Telephone systems", es: "Sistemas telefónicos", de: "Telefonsysteme", nl: "Telefoonsystemen" },
          { en: "Road and highway systems", es: "Sistemas de carreteras y autopistas", de: "Straßen- und Autobahnsysteme", nl: "Weg- en snelwegsystemen" }
        ],
        correct: 0,
        explanation: {
          en: "Neural networks are modeled after the human brain, with artificial neurons that process and pass information similar to biological neurons.",
          es: "Las redes neuronales están modeladas según el cerebro humano, con neuronas artificiales que procesan y pasan información similar a las neuronas biológicas.",
          de: "Neuronale Netzwerke sind nach dem menschlichen Gehirn modelliert, mit künstlichen Neuronen, die Informationen verarbeiten und weiterleiten, ähnlich biologischen Neuronen.",
          nl: "Neurale netwerken zijn gemodelleerd naar het menselijke brein, met kunstmatige neuronen die informatie verwerken en doorgeven vergelijkbaar met biologische neuronen."
        }
      },
      {
        question: {
          en: "What is pattern recognition in AI?",
          es: "¿Qué es el reconocimiento de patrones en IA?",
          de: "Was ist Mustererkennung in der KI?",
          nl: "Wat is patroonherkenning in AI?"
        },
        options: [
          { en: "The ability to identify recurring structures or trends in data", es: "La capacidad de identificar estructuras o tendencias recurrentes en los datos", de: "Die Fähigkeit, wiederkehrende Strukturen oder Trends in Daten zu identifizieren", nl: "Het vermogen om terugkerende structuren of trends in data te identificeren" },
          { en: "Drawing geometric patterns", es: "Dibujar patrones geométricos", de: "Geometrische Muster zeichnen", nl: "Geometrische patronen tekenen" },
          { en: "Recognizing clothing patterns", es: "Reconocer patrones de ropa", de: "Kleidungsmuster erkennen", nl: "Kledingpatronen herkennen" },
          { en: "Creating art with patterns", es: "Crear arte con patrones", de: "Kunst mit Mustern schaffen", nl: "Kunst maken met patronen" }
        ],
        correct: 0,
        explanation: {
          en: "Pattern recognition is a fundamental AI capability that allows systems to identify regularities, similarities, and meaningful structures in data.",
          es: "El reconocimiento de patrones es una capacidad fundamental de IA que permite a los sistemas identificar regularidades, similitudes y estructuras significativas en los datos.",
          de: "Mustererkennung ist eine grundlegende KI-Fähigkeit, die es Systemen ermöglicht, Regelmäßigkeiten, Ähnlichkeiten und bedeutungsvolle Strukturen in Daten zu identifizieren.",
          nl: "Patroonherkenning is een fundamentele AI-capaciteit die systemen in staat stelt regelmatigheden, overeenkomsten en betekenisvolle structuren in data te identificeren."
        }
      },
      {
        question: {
          en: "What is a simple example of machine learning in everyday life?",
          es: "¿Cuál es un ejemplo simple de aprendizaje automático en la vida cotidiana?",
          de: "Was ist ein einfaches Beispiel für maschinelles Lernen im Alltag?",
          nl: "Wat is een eenvoudig voorbeeld van machine learning in het dagelijks leven?"
        },
        options: [
          { en: "Music streaming services recommending songs you might like", es: "Servicios de streaming de música recomendando canciones que podrían gustarte", de: "Musik-Streaming-Dienste empfehlen Lieder, die dir gefallen könnten", nl: "Muziekstreaming diensten die liedjes aanbevelen die je misschien leuk vindt" },
          { en: "Using a calculator to do math", es: "Usar una calculadora para hacer matemáticas", de: "Einen Rechner für Mathematik verwenden", nl: "Een rekenmachine gebruiken voor wiskunde" },
          { en: "Turning on a light switch", es: "Encender un interruptor de luz", de: "Einen Lichtschalter anschalten", nl: "Een lichtschakelaar aanzetten" },
          { en: "Reading a digital clock", es: "Leer un reloj digital", de: "Eine Digitaluhr ablesen", nl: "Een digitale klok lezen" }
        ],
        correct: 0,
        explanation: {
          en: "Music recommendation systems use machine learning to analyze your listening history and preferences to suggest new songs you might enjoy.",
          es: "Los sistemas de recomendación de música usan aprendizaje automático para analizar tu historial de escucha y preferencias para sugerir nuevas canciones que podrías disfrutar.",
          de: "Musikempfehlungssysteme verwenden maschinelles Lernen, um deine Hörgewohnheiten und Vorlieben zu analysieren, um neue Lieder vorzuschlagen, die dir gefallen könnten.",
          nl: "Muziekaanbevelingssystemen gebruiken machine learning om je luistergeschiedenis en voorkeuren te analyseren om nieuwe liedjes voor te stellen die je misschien leuk vindt."
        }
      },
      {
        question: {
          en: "What does 'prediction' mean in machine learning?",
          es: "¿Qué significa 'predicción' en aprendizaje automático?",
          de: "Was bedeutet 'Vorhersage' im maschinellen Lernen?",
          nl: "Wat betekent 'voorspelling' in machine learning?"
        },
        options: [
          { en: "Making educated guesses about future or unknown outcomes based on data", es: "Hacer conjeturas educadas sobre resultados futuros o desconocidos basados en datos", de: "Fundierte Vermutungen über zukünftige oder unbekannte Ergebnisse basierend auf Daten machen", nl: "Goed onderbouwde gissingen maken over toekomstige of onbekende uitkomsten gebaseerd op data" },
          { en: "Reading fortune cookies", es: "Leer galletas de la fortuna", de: "Glückskekse lesen", nl: "Gelukskoekjes lezen" },
          { en: "Guessing random numbers", es: "Adivinar números aleatorios", de: "Zufallszahlen raten", nl: "Willekeurige nummers raden" },
          { en: "Looking into crystal balls", es: "Mirar en bolas de cristal", de: "In Kristallkugeln schauen", nl: "In kristallen bollen kijken" }
        ],
        correct: 0,
        explanation: {
          en: "In machine learning, prediction means using learned patterns from historical data to estimate what might happen with new, unseen data.",
          es: "En aprendizaje automático, predicción significa usar patrones aprendidos de datos históricos para estimar qué podría pasar con datos nuevos y no vistos.",
          de: "Im maschinellen Lernen bedeutet Vorhersage, gelernte Muster aus historischen Daten zu verwenden, um zu schätzen, was mit neuen, ungesehenen Daten passieren könnte.",
          nl: "In machine learning betekent voorspelling het gebruik van geleerde patronen uit historische data om te schatten wat er zou kunnen gebeuren met nieuwe, ongeziene data."
        }
      },
      {
        question: {
          en: "Why is data important for machine learning?",
          es: "¿Por qué son importantes los datos para el aprendizaje automático?",
          de: "Warum sind Daten für maschinelles Lernen wichtig?",
          nl: "Waarom is data belangrijk voor machine learning?"
        },
        options: [
          { en: "Data provides the examples and patterns that algorithms learn from", es: "Los datos proporcionan los ejemplos y patrones de los que aprenden los algoritmos", de: "Daten liefern die Beispiele und Muster, aus denen Algorithmen lernen", nl: "Data biedt de voorbeelden en patronen waarvan algoritmes leren" },
          { en: "Data makes computers run faster", es: "Los datos hacen que las computadoras funcionen más rápido", de: "Daten lassen Computer schneller laufen", nl: "Data laat computers sneller werken" },
          { en: "Data is only needed for storage", es: "Los datos solo se necesitan para almacenamiento", de: "Daten werden nur für die Speicherung benötigt", nl: "Data is alleen nodig voor opslag" },
          { en: "Data helps reduce electricity costs", es: "Los datos ayudan a reducir los costos de electricidad", de: "Daten helfen, Stromkosten zu reduzieren", nl: "Data helpt elektriciteitskosten te verlagen" }
        ],
        correct: 0,
        explanation: {
          en: "Machine learning algorithms need data to find patterns, learn relationships, and make accurate predictions - data is the fuel that powers AI systems.",
          es: "Los algoritmos de aprendizaje automático necesitan datos para encontrar patrones, aprender relaciones y hacer predicciones precisas - los datos son el combustible que impulsa los sistemas de IA.",
          de: "Maschinelle Lernalgorithmen benötigen Daten, um Muster zu finden, Beziehungen zu lernen und genaue Vorhersagen zu treffen - Daten sind der Treibstoff, der KI-Systeme antreibt.",
          nl: "Machine learning algoritmes hebben data nodig om patronen te vinden, relaties te leren en nauwkeurige voorspellingen te maken - data is de brandstof die AI-systemen aandrijft."
        }
      },
      {
        question: {
          en: "What is the main difference between traditional programming and machine learning?",
          es: "¿Cuál es la principal diferencia entre programación tradicional y aprendizaje automático?",
          de: "Was ist der Hauptunterschied zwischen traditioneller Programmierung und maschinellem Lernen?",
          nl: "Wat is het hoofdverschil tussen traditionele programmering en machine learning?"
        },
        options: [
          { en: "Traditional programming uses explicit rules, machine learning learns rules from data", es: "La programación tradicional usa reglas explícitas, el aprendizaje automático aprende reglas de los datos", de: "Traditionelle Programmierung verwendet explizite Regeln, maschinelles Lernen lernt Regeln aus Daten", nl: "Traditionele programmering gebruikt expliciete regels, machine learning leert regels uit data" },
          { en: "Machine learning is always faster than traditional programming", es: "El aprendizaje automático siempre es más rápido que la programación tradicional", de: "Maschinelles Lernen ist immer schneller als traditionelle Programmierung", nl: "Machine learning is altijd sneller dan traditionele programmering" },
          { en: "Traditional programming only works on old computers", es: "La programación tradicional solo funciona en computadoras viejas", de: "Traditionelle Programmierung funktioniert nur auf alten Computern", nl: "Traditionele programmering werkt alleen op oude computers" },
          { en: "Machine learning doesn't use any programming", es: "El aprendizaje automático no usa ninguna programación", de: "Maschinelles Lernen verwendet keine Programmierung", nl: "Machine learning gebruikt geen programmering" }
        ],
        correct: 0,
        explanation: {
          en: "In traditional programming, developers write specific rules and instructions. In machine learning, the system discovers rules and patterns automatically from data examples.",
          es: "En programación tradicional, los desarrolladores escriben reglas e instrucciones específicas. En aprendizaje automático, el sistema descubre reglas y patrones automáticamente a partir de ejemplos de datos.",
          de: "In der traditionellen Programmierung schreiben Entwickler spezifische Regeln und Anweisungen. Im maschinellen Lernen entdeckt das System automatisch Regeln und Muster aus Datenbeispielen.",
          nl: "In traditionele programmering schrijven ontwikkelaars specifieke regels en instructies. In machine learning ontdekt het systeem automatisch regels en patronen uit data voorbeelden."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  } else if (typeof window !== 'undefined') {
    window.level1 = level1;
  }
})();
