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
      },
      {
        question: {
          en: "What is a dataset in machine learning?",
          es: "¿Qué es un conjunto de datos en aprendizaje automático?",
          de: "Was ist ein Datensatz im maschinellen Lernen?",
          nl: "Wat is een dataset in machine learning?"
        },
        options: [
          { en: "A collection of data used to train or test AI models", es: "Una colección de datos utilizada para entrenar o probar modelos IA", de: "Eine Sammlung von Daten zum Trainieren oder Testen von KI-Modellen", nl: "Een verzameling data gebruikt om AI modellen te trainen of testen" },
          { en: "A specific date and time setting", es: "Una configuración específica de fecha y hora", de: "Eine spezifische Datums- und Zeiteinstellung", nl: "Een specifieke datum en tijd instelling" },
          { en: "A type of computer hardware", es: "Un tipo de hardware de computadora", de: "Eine Art Computerhardware", nl: "Een type computerhardware" },
          { en: "A website for storing files", es: "Un sitio web para almacenar archivos", de: "Eine Website zum Speichern von Dateien", nl: "Een website voor het opslaan van bestanden" }
        ],
        correct: 0,
        explanation: {
          en: "A dataset is a structured collection of data examples used to train, validate, or test machine learning models, like a collection of images for teaching an AI to recognize cats.",
          es: "Un conjunto de datos es una colección estructurada de ejemplos de datos utilizada para entrenar, validar o probar modelos de aprendizaje automático, como una colección de imágenes para enseñar a una IA a reconocer gatos.",
          de: "Ein Datensatz ist eine strukturierte Sammlung von Datenbeispielen, die zum Trainieren, Validieren oder Testen maschineller Lernmodelle verwendet wird, wie eine Sammlung von Bildern zum Lehren einer KI Katzen zu erkennen.",
          nl: "Een dataset is een gestructureerde verzameling van data voorbeelden gebruikt om machine learning modellen te trainen, valideren of testen, zoals een verzameling afbeeldingen om een AI te leren katten te herkennen."
        }
      },
      {
        question: {
          en: "Which company created Alexa?",
          es: "¿Qué empresa creó Alexa?",
          de: "Welches Unternehmen hat Alexa erschaffen?",
          nl: "Welk bedrijf creëerde Alexa?"
        },
        options: [
          { en: "Amazon", es: "Amazon", de: "Amazon", nl: "Amazon" },
          { en: "Google", es: "Google", de: "Google", nl: "Google" },
          { en: "Facebook", es: "Facebook", de: "Facebook", nl: "Facebook" },
          { en: "Microsoft", es: "Microsoft", de: "Microsoft", nl: "Microsoft" }
        ],
        correct: 0,
        explanation: {
          en: "Amazon created Alexa, a voice-controlled virtual assistant launched in 2014, now used in millions of Echo devices worldwide.",
          es: "Amazon creó Alexa, un asistente virtual controlado por voz lanzado en 2014, ahora utilizado en millones de dispositivos Echo en todo el mundo.",
          de: "Amazon schuf Alexa, einen sprachgesteuerten virtuellen Assistenten, der 2014 gestartet wurde und jetzt in Millionen von Echo-Geräten weltweit verwendet wird.",
          nl: "Amazon creëerde Alexa, een spraakgestuurde virtuele assistent gelanceerd in 2014, nu gebruikt in miljoenen Echo apparaten wereldwijd."
        }
      },
      {
        question: {
          en: "What does it mean for a model to 'overfit'?",
          es: "¿Qué significa que un modelo esté 'sobreajustado'?",
          de: "Was bedeutet es, wenn ein Modell 'überanpasst'?",
          nl: "Wat betekent het wanneer een model 'overfit'?"
        },
        options: [
          { en: "Learning training data too well, performing poorly on new data", es: "Aprender los datos de entrenamiento demasiado bien, funcionando mal con datos nuevos", de: "Trainingsdaten zu gut lernen, schlecht bei neuen Daten funktionieren", nl: "Trainingsdata te goed leren, slecht presteren op nieuwe data" },
          { en: "The model is too large to fit in memory", es: "El modelo es demasiado grande para caber en la memoria", de: "Das Modell ist zu groß um in den Speicher zu passen", nl: "Het model is te groot om in het geheugen te passen" },
          { en: "The model runs too fast", es: "El modelo funciona demasiado rápido", de: "Das Modell läuft zu schnell", nl: "Het model draait te snel" },
          { en: "The model is physically too big", es: "El modelo es físicamente demasiado grande", de: "Das Modell ist physisch zu groß", nl: "Het model is fysiek te groot" }
        ],
        correct: 0,
        explanation: {
          en: "Overfitting occurs when a model memorizes training data instead of learning general patterns, making it accurate on training data but poor at predicting new, unseen examples.",
          es: "El sobreajuste ocurre cuando un modelo memoriza datos de entrenamiento en lugar de aprender patrones generales, haciéndolo preciso en datos de entrenamiento pero pobre prediciendo ejemplos nuevos y no vistos.",
          de: "Überanpassung tritt auf wenn ein Modell Trainingsdaten auswendig lernt statt allgemeine Muster zu lernen, macht es genau bei Trainingsdaten aber schlecht beim Vorhersagen neuer, ungesehener Beispiele.",
          nl: "Overfitting treedt op wanneer een model trainingsdata uit het hoofd leert in plaats van algemene patronen te leren, maakt het nauwkeurig op trainingsdata maar slecht in het voorspellen van nieuwe, ongeziene voorbeelden."
        }
      },
      {
        question: {
          en: "What is a feature in machine learning?",
          es: "¿Qué es una característica en aprendizaje automático?",
          de: "Was ist ein Feature im maschinellen Lernen?",
          nl: "Wat is een feature in machine learning?"
        },
        options: [
          { en: "An individual measurable property used as input to a model", es: "Una propiedad medible individual usada como entrada a un modelo", de: "Eine einzelne messbare Eigenschaft als Eingabe für ein Modell", nl: "Een individuele meetbare eigenschap gebruikt als input voor een model" },
          { en: "A special function of the software", es: "Una función especial del software", de: "Eine spezielle Funktion der Software", nl: "Een speciale functie van de software" },
          { en: "The main selling point of AI", es: "El principal punto de venta de IA", de: "Das Hauptverkaufsargument von KI", nl: "Het belangrijkste verkooppunt van AI" },
          { en: "A bug in the algorithm", es: "Un error en el algoritmo", de: "Ein Fehler im Algorithmus", nl: "Een bug in het algoritme" }
        ],
        correct: 0,
        explanation: {
          en: "Features are measurable characteristics or attributes of data used as inputs for ML models, like 'color', 'size', or 'weight' when identifying objects.",
          es: "Las características son características o atributos medibles de datos utilizados como entradas para modelos ML, como 'color', 'tamaño' o 'peso' al identificar objetos.",
          de: "Features sind messbare Merkmale oder Attribute von Daten die als Eingaben für ML-Modelle verwendet werden, wie 'Farbe', 'Größe' oder 'Gewicht' beim Identifizieren von Objekten.",
          nl: "Features zijn meetbare kenmerken of attributen van data gebruikt als inputs voor ML modellen, zoals 'kleur', 'grootte' of 'gewicht' bij het identificeren van objecten."
        }
      },
      {
        question: {
          en: "What is image recognition?",
          es: "¿Qué es el reconocimiento de imágenes?",
          de: "Was ist Bilderkennung?",
          nl: "Wat is beeldherkenning?"
        },
        options: [
          { en: "AI identifying objects, people, or scenes in images", es: "IA identificando objetos, personas o escenas en imágenes", de: "KI identifiziert Objekte, Personen oder Szenen in Bildern", nl: "AI identificeert objecten, mensen of scènes in afbeeldingen" },
          { en: "Scanning images to reduce file size", es: "Escanear imágenes para reducir tamaño de archivo", de: "Bilder scannen um Dateigröße zu reduzieren", nl: "Afbeeldingen scannen om bestandsgrootte te verkleinen" },
          { en: "Taking photos with a camera", es: "Tomar fotos con una cámara", de: "Fotos mit einer Kamera machen", nl: "Foto's maken met een camera" },
          { en: "Editing images in software", es: "Editar imágenes en software", de: "Bilder in Software bearbeiten", nl: "Afbeeldingen bewerken in software" }
        ],
        correct: 0,
        explanation: {
          en: "Image recognition is a ML application that analyzes images to identify and classify objects, faces, text, or scenes, used in applications like facial recognition and self-driving cars.",
          es: "El reconocimiento de imágenes es una aplicación ML que analiza imágenes para identificar y clasificar objetos, rostros, texto o escenas, utilizada en aplicaciones como reconocimiento facial y coches autónomos.",
          de: "Bilderkennung ist eine ML-Anwendung die Bilder analysiert um Objekte, Gesichter, Text oder Szenen zu identifizieren und zu klassifizieren, verwendet in Anwendungen wie Gesichtserkennung und selbstfahrenden Autos.",
          nl: "Beeldherkenning is een ML applicatie die afbeeldingen analyseert om objecten, gezichten, tekst of scènes te identificeren en classificeren, gebruikt in applicaties zoals gezichtsherkenning en zelfrijdende auto's."
        }
      },
      {
        question: {
          en: "What is a label in supervised learning?",
          es: "¿Qué es una etiqueta en aprendizaje supervisado?",
          de: "Was ist ein Label im überwachten Lernen?",
          nl: "Wat is een label in supervised learning?"
        },
        options: [
          { en: "The correct answer associated with training data", es: "La respuesta correcta asociada con datos de entrenamiento", de: "Die korrekte Antwort verbunden mit Trainingsdaten", nl: "Het correcte antwoord geassocieerd met trainingsdata" },
          { en: "A sticker on computer hardware", es: "Una etiqueta en hardware de computadora", de: "Ein Aufkleber auf Computerhardware", nl: "Een sticker op computerhardware" },
          { en: "The name of the AI model", es: "El nombre del modelo IA", de: "Der Name des KI-Modells", nl: "De naam van het AI model" },
          { en: "A tag for organizing files", es: "Una etiqueta para organizar archivos", de: "Ein Tag zum Organisieren von Dateien", nl: "Een tag voor het organiseren van bestanden" }
        ],
        correct: 0,
        explanation: {
          en: "In supervised learning, labels are the correct answers or outcomes provided with training examples, like labeling images as 'cat' or 'dog' so the AI can learn to distinguish them.",
          es: "En aprendizaje supervisado, las etiquetas son las respuestas correctas o resultados proporcionados con ejemplos de entrenamiento, como etiquetar imágenes como 'gato' o 'perro' para que la IA pueda aprender a distinguirlos.",
          de: "Im überwachten Lernen sind Labels die korrekten Antworten oder Ergebnisse die mit Trainingsbeispielen bereitgestellt werden, wie Bilder als 'Katze' oder 'Hund' zu beschriften damit die KI lernen kann sie zu unterscheiden.",
          nl: "In supervised learning zijn labels de correcte antwoorden of uitkomsten die bij trainingsvoorbeelden worden gegeven, zoals afbeeldingen labelen als 'kat' of 'hond' zodat de AI kan leren ze te onderscheiden."
        }
      },
      {
        question: {
          en: "What is reinforcement learning?",
          es: "¿Qué es el aprendizaje por refuerzo?",
          de: "Was ist Verstärkungslernen?",
          nl: "Wat is reinforcement learning?"
        },
        options: [
          { en: "Learning through trial and error with rewards and penalties", es: "Aprender a través de prueba y error con recompensas y penalizaciones", de: "Lernen durch Versuch und Irrtum mit Belohnungen und Strafen", nl: "Leren door trial and error met beloningen en straffen" },
          { en: "Reinforcing computer hardware", es: "Reforzar hardware de computadora", de: "Computerhardware verstärken", nl: "Computerhardware versterken" },
          { en: "Learning only from correct examples", es: "Aprender solo de ejemplos correctos", de: "Nur von korrekten Beispielen lernen", nl: "Alleen leren van correcte voorbeelden" },
          { en: "Repeating the same training multiple times", es: "Repetir el mismo entrenamiento múltiples veces", de: "Dasselbe Training mehrmals wiederholen", nl: "Dezelfde training meerdere keren herhalen" }
        ],
        correct: 0,
        explanation: {
          en: "Reinforcement learning trains AI by letting it take actions and learn from feedback in the form of rewards (for good actions) or penalties (for bad ones), similar to training a pet.",
          es: "El aprendizaje por refuerzo entrena IA permitiéndole tomar acciones y aprender de retroalimentación en forma de recompensas (por acciones buenas) o penalizaciones (por malas), similar a entrenar una mascota.",
          de: "Verstärkungslernen trainiert KI indem es Aktionen ausführen lässt und aus Feedback in Form von Belohnungen (für gute Aktionen) oder Strafen (für schlechte) lernt, ähnlich wie ein Haustier zu trainieren.",
          nl: "Reinforcement learning traint AI door het acties te laten nemen en te leren van feedback in de vorm van beloningen (voor goede acties) of straffen (voor slechte), vergelijkbaar met het trainen van een huisdier."
        }
      },
      {
        question: {
          en: "What is classification in machine learning?",
          es: "¿Qué es la clasificación en aprendizaje automático?",
          de: "Was ist Klassifizierung im maschinellen Lernen?",
          nl: "Wat is classificatie in machine learning?"
        },
        options: [
          { en: "Categorizing data into predefined groups or classes", es: "Categorizar datos en grupos o clases predefinidos", de: "Daten in vordefinierte Gruppen oder Klassen kategorisieren", nl: "Data categoriseren in voorgedefinieerde groepen of klassen" },
          { en: "Organizing files in folders", es: "Organizar archivos en carpetas", de: "Dateien in Ordnern organisieren", nl: "Bestanden organiseren in mappen" },
          { en: "Ranking items by importance", es: "Clasificar elementos por importancia", de: "Elemente nach Wichtigkeit ordnen", nl: "Items rangschikken op belangrijkheid" },
          { en: "Giving secret clearance levels", es: "Dar niveles de autorización secreta", de: "Geheime Freigabestufen vergeben", nl: "Geheime machtigingsniveaus geven" }
        ],
        correct: 0,
        explanation: {
          en: "Classification is assigning input data to one of several predefined categories, like classifying emails as 'spam' or 'not spam', or identifying whether an image contains a cat or dog.",
          es: "La clasificación es asignar datos de entrada a una de varias categorías predefinidas, como clasificar correos como 'spam' o 'no spam', o identificar si una imagen contiene un gato o perro.",
          de: "Klassifizierung ist die Zuweisung von Eingabedaten zu einer von mehreren vordefinierten Kategorien, wie E-Mails als 'Spam' oder 'kein Spam' zu klassifizieren, oder zu identifizieren ob ein Bild eine Katze oder Hund enthält.",
          nl: "Classificatie is het toewijzen van invoerdata aan een van meerdere voorgedefinieerde categorieën, zoals emails classificeren als 'spam' of 'geen spam', of identificeren of een afbeelding een kat of hond bevat."
        }
      },
      {
        question: {
          en: "What is regression in machine learning?",
          es: "¿Qué es la regresión en aprendizaje automático?",
          de: "Was ist Regression im maschinellen Lernen?",
          nl: "Wat is regressie in machine learning?"
        },
        options: [
          { en: "Predicting continuous numerical values", es: "Predecir valores numéricos continuos", de: "Kontinuierliche numerische Werte vorhersagen", nl: "Continue numerieke waarden voorspellen" },
          { en: "Going backwards in training", es: "Retroceder en el entrenamiento", de: "Rückwärts im Training gehen", nl: "Achteruit gaan in training" },
          { en: "Removing errors from data", es: "Eliminar errores de los datos", de: "Fehler aus Daten entfernen", nl: "Fouten uit data verwijderen" },
          { en: "Testing old algorithms", es: "Probar algoritmos antiguos", de: "Alte Algorithmen testen", nl: "Oude algoritmes testen" }
        ],
        correct: 0,
        explanation: {
          en: "Regression predicts continuous numerical values based on input data, like estimating house prices based on size and location, or forecasting tomorrow's temperature.",
          es: "La regresión predice valores numéricos continuos basados en datos de entrada, como estimar precios de casas basados en tamaño y ubicación, o pronosticar la temperatura de mañana.",
          de: "Regression sagt kontinuierliche numerische Werte basierend auf Eingabedaten vorher, wie Hauspreise basierend auf Größe und Lage zu schätzen, oder die Temperatur von morgen vorherzusagen.",
          nl: "Regressie voorspelt continue numerieke waarden gebaseerd op invoerdata, zoals huisprijzen schatten gebaseerd op grootte en locatie, of de temperatuur van morgen voorspellen."
        }
      },
      {
        question: {
          en: "What is clustering in machine learning?",
          es: "¿Qué es el agrupamiento en aprendizaje automático?",
          de: "Was ist Clustering im maschinellen Lernen?",
          nl: "Wat is clustering in machine learning?"
        },
        options: [
          { en: "Grouping similar data points together without predefined labels", es: "Agrupar puntos de datos similares sin etiquetas predefinidas", de: "Ähnliche Datenpunkte ohne vordefinierte Labels gruppieren", nl: "Vergelijkbare datapunten groeperen zonder voorgedefinieerde labels" },
          { en: "Connecting multiple computers together", es: "Conectar múltiples computadoras juntas", de: "Mehrere Computer zusammenverbinden", nl: "Meerdere computers met elkaar verbinden" },
          { en: "Organizing files by date created", es: "Organizar archivos por fecha de creación", de: "Dateien nach Erstellungsdatum organisieren", nl: "Bestanden organiseren op aanmaakdatum" },
          { en: "Removing duplicate data", es: "Eliminar datos duplicados", de: "Doppelte Daten entfernen", nl: "Dubbele data verwijderen" }
        ],
        correct: 0,
        explanation: {
          en: "Clustering is an unsupervised learning technique that groups similar data points together based on their characteristics, like grouping customers with similar shopping habits for targeted marketing.",
          es: "El agrupamiento es una técnica de aprendizaje no supervisado que agrupa puntos de datos similares basados en sus características, como agrupar clientes con hábitos de compra similares para marketing dirigido.",
          de: "Clustering ist eine unüberwachte Lerntechnik die ähnliche Datenpunkte basierend auf ihren Merkmalen gruppiert, wie Kunden mit ähnlichen Einkaufsgewohnheiten für gezieltes Marketing zu gruppieren.",
          nl: "Clustering is een unsupervised learning techniek die vergelijkbare datapunten groepeert gebaseerd op hun kenmerken, zoals klanten groeperen met vergelijkbare koopgewoonten voor gerichte marketing."
        }
      },
      {
        question: {
          en: "Which of these is an example of AI in daily life?",
          es: "¿Cuál de estos es un ejemplo de IA en la vida diaria?",
          de: "Welches ist ein Beispiel für KI im Alltag?",
          nl: "Welke hiervan is een voorbeeld van AI in het dagelijks leven?"
        },
        options: [
          { en: "Netflix recommending movies based on viewing history", es: "Netflix recomendando películas basado en historial de visualización", de: "Netflix empfiehlt Filme basierend auf Sehgewohnheiten", nl: "Netflix die films aanbeveelt gebaseerd op kijkgeschiedenis" },
          { en: "Using a microwave to heat food", es: "Usar un microondas para calentar comida", de: "Eine Mikrowelle zum Erhitzen von Essen verwenden", nl: "Een magnetron gebruiken om eten op te warmen" },
          { en: "Writing with a pen and paper", es: "Escribir con pluma y papel", de: "Mit Stift und Papier schreiben", nl: "Schrijven met pen en papier" },
          { en: "Making a phone call", es: "Hacer una llamada telefónica", de: "Einen Telefonanruf tätigen", nl: "Een telefoontje plegen" }
        ],
        correct: 0,
        explanation: {
          en: "Netflix uses machine learning algorithms to analyze your viewing patterns and preferences to suggest shows and movies you might enjoy, making it a practical daily AI application.",
          es: "Netflix usa algoritmos de aprendizaje automático para analizar tus patrones de visualización y preferencias para sugerir programas y películas que podrías disfrutar, haciéndolo una aplicación práctica diaria de IA.",
          de: "Netflix verwendet maschinelle Lernalgorithmen um deine Sehgewohnheiten und Vorlieben zu analysieren um Shows und Filme vorzuschlagen die dir gefallen könnten, macht es zu einer praktischen täglichen KI-Anwendung.",
          nl: "Netflix gebruikt machine learning algoritmes om je kijkpatronen en voorkeuren te analyseren om shows en films voor te stellen die je misschien leuk vindt, maakt het een praktische dagelijkse AI applicatie."
        }
      },
      {
        question: {
          en: "What does 'accuracy' mean in machine learning?",
          es: "¿Qué significa 'precisión' en aprendizaje automático?",
          de: "Was bedeutet 'Genauigkeit' im maschinellen Lernen?",
          nl: "Wat betekent 'nauwkeurigheid' in machine learning?"
        },
        options: [
          { en: "The percentage of correct predictions made by a model", es: "El porcentaje de predicciones correctas hechas por un modelo", de: "Der Prozentsatz korrekter Vorhersagen eines Modells", nl: "Het percentage correcte voorspellingen gemaakt door een model" },
          { en: "How fast the model runs", es: "Qué tan rápido funciona el modelo", de: "Wie schnell das Modell läuft", nl: "Hoe snel het model draait" },
          { en: "The size of the training data", es: "El tamaño de los datos de entrenamiento", de: "Die Größe der Trainingsdaten", nl: "De grootte van de trainingsdata" },
          { en: "The complexity of the algorithm", es: "La complejidad del algoritmo", de: "Die Komplexität des Algorithmus", nl: "De complexiteit van het algoritme" }
        ],
        correct: 0,
        explanation: {
          en: "Accuracy measures how often the ML model makes correct predictions, calculated as the number of correct predictions divided by total predictions, typically expressed as a percentage.",
          es: "La precisión mide con qué frecuencia el modelo ML hace predicciones correctas, calculada como el número de predicciones correctas dividido por predicciones totales, típicamente expresado como porcentaje.",
          de: "Genauigkeit misst wie oft das ML-Modell korrekte Vorhersagen macht, berechnet als Anzahl korrekter Vorhersagen geteilt durch Gesamtvorhersagen, typischerweise als Prozentsatz ausgedrückt.",
          nl: "Nauwkeurigheid meet hoe vaak het ML model correcte voorspellingen maakt, berekend als het aantal correcte voorspellingen gedeeld door totale voorspellingen, typisch uitgedrukt als percentage."
        }
      },
      {
        question: {
          en: "What is natural language processing (NLP)?",
          es: "¿Qué es el procesamiento del lenguaje natural (PLN)?",
          de: "Was ist natürliche Sprachverarbeitung (NLP)?",
          nl: "Wat is natuurlijke taalverwerking (NLP)?"
        },
        options: [
          { en: "AI technology that helps computers understand human language", es: "Tecnología IA que ayuda a las computadoras a entender lenguaje humano", de: "KI-Technologie die Computern hilft menschliche Sprache zu verstehen", nl: "AI technologie die computers helpt menselijke taal te begrijpen" },
          { en: "Processing images naturally", es: "Procesar imágenes naturalmente", de: "Bilder natürlich verarbeiten", nl: "Afbeeldingen natuurlijk verwerken" },
          { en: "Learning programming languages", es: "Aprender lenguajes de programación", de: "Programmiersprachen lernen", nl: "Programmeertalen leren" },
          { en: "Processing data faster", es: "Procesar datos más rápido", de: "Daten schneller verarbeiten", nl: "Data sneller verwerken" }
        ],
        correct: 0,
        explanation: {
          en: "NLP enables computers to understand, interpret, and respond to human language in text or speech, powering applications like translation, chatbots, and voice assistants.",
          es: "PLN permite a las computadoras entender, interpretar y responder al lenguaje humano en texto o habla, impulsando aplicaciones como traducción, chatbots y asistentes de voz.",
          de: "NLP ermöglicht Computern menschliche Sprache in Text oder Sprache zu verstehen, interpretieren und darauf zu reagieren, treibt Anwendungen wie Übersetzung, Chatbots und Sprachassistenten an.",
          nl: "NLP stelt computers in staat om menselijke taal in tekst of spraak te begrijpen, interpreteren en erop te reageren, drijft applicaties aan zoals vertaling, chatbots en spraakassistenten."
        }
      },
      {
        question: {
          en: "What is a validation set used for?",
          es: "¿Para qué se usa un conjunto de validación?",
          de: "Wofür wird ein Validierungssatz verwendet?",
          nl: "Waarvoor wordt een validatieset gebruikt?"
        },
        options: [
          { en: "To tune model parameters during training", es: "Para ajustar parámetros del modelo durante el entrenamiento", de: "Zum Anpassen von Modellparametern während des Trainings", nl: "Om modelparameters aan te passen tijdens training" },
          { en: "To validate user passwords", es: "Para validar contraseñas de usuario", de: "Zum Validieren von Benutzerpasswörtern", nl: "Om gebruikerswachtwoorden te valideren" },
          { en: "To check if data is corrupted", es: "Para verificar si los datos están corruptos", de: "Zum Prüfen ob Daten beschädigt sind", nl: "Om te controleren of data beschadigd is" },
          { en: "To approve the final model", es: "Para aprobar el modelo final", de: "Zum Genehmigen des finalen Modells", nl: "Om het finale model goed te keuren" }
        ],
        correct: 0,
        explanation: {
          en: "The validation set is used during model development to tune hyperparameters and prevent overfitting, helping select the best model before final testing on the test set.",
          es: "El conjunto de validación se usa durante el desarrollo del modelo para ajustar hiperparámetros y prevenir sobreajuste, ayudando a seleccionar el mejor modelo antes de la prueba final en el conjunto de prueba.",
          de: "Der Validierungssatz wird während der Modellentwicklung verwendet um Hyperparameter anzupassen und Überanpassung zu verhindern, hilft das beste Modell vor dem finalen Testen auf dem Testsatz auszuwählen.",
          nl: "De validatieset wordt gebruikt tijdens modelontwikkeling om hyperparameters af te stellen en overfitting te voorkomen, helpt het beste model te selecteren voor finale testen op de testset."
        }
      },
      {
        question: {
          en: "What is computer vision?",
          es: "¿Qué es la visión por computadora?",
          de: "Was ist Computer Vision?",
          nl: "Wat is computer vision?"
        },
        options: [
          { en: "AI field enabling computers to interpret visual information", es: "Campo IA que permite a las computadoras interpretar información visual", de: "KI-Feld das Computern ermöglicht visuelle Informationen zu interpretieren", nl: "AI gebied dat computers in staat stelt visuele informatie te interpreteren" },
          { en: "Monitors and display screens", es: "Monitores y pantallas de visualización", de: "Monitore und Bildschirme", nl: "Monitors en beeldschermen" },
          { en: "Software for video editing", es: "Software para edición de video", de: "Software für Videobearbeitung", nl: "Software voor videobewerking" },
          { en: "Virtual reality headsets", es: "Cascos de realidad virtual", de: "Virtual-Reality-Headsets", nl: "Virtual reality headsets" }
        ],
        correct: 0,
        explanation: {
          en: "Computer vision teaches machines to 'see' and understand images and videos, enabling applications like facial recognition, autonomous vehicles, and medical image analysis.",
          es: "La visión por computadora enseña a las máquinas a 'ver' y entender imágenes y videos, habilitando aplicaciones como reconocimiento facial, vehículos autónomos y análisis de imágenes médicas.",
          de: "Computer Vision lehrt Maschinen zu 'sehen' und Bilder und Videos zu verstehen, ermöglicht Anwendungen wie Gesichtserkennung, autonome Fahrzeuge und medizinische Bildanalyse.",
          nl: "Computer vision leert machines te 'zien' en afbeeldingen en video's te begrijpen, maakt applicaties mogelijk zoals gezichtsherkenning, autonome voertuigen en medische beeldanalyse."
        }
      },
      {
        question: {
          en: "What is the purpose of data preprocessing?",
          es: "¿Cuál es el propósito del preprocesamiento de datos?",
          de: "Was ist der Zweck der Datenvorverarbeitung?",
          nl: "Wat is het doel van data preprocessing?"
        },
        options: [
          { en: "Cleaning and preparing data for better model performance", es: "Limpiar y preparar datos para mejor rendimiento del modelo", de: "Daten reinigen und vorbereiten für bessere Modellleistung", nl: "Data schoonmaken en voorbereiden voor betere modelprestaties" },
          { en: "Processing data before it's collected", es: "Procesar datos antes de que sean recolectados", de: "Daten verarbeiten bevor sie gesammelt werden", nl: "Data verwerken voordat het verzameld wordt" },
          { en: "Compressing data to save space", es: "Comprimir datos para ahorrar espacio", de: "Daten komprimieren um Platz zu sparen", nl: "Data comprimeren om ruimte te besparen" },
          { en: "Backing up data before use", es: "Respaldar datos antes de usar", de: "Daten vor Verwendung sichern", nl: "Data back-uppen voor gebruik" }
        ],
        correct: 0,
        explanation: {
          en: "Data preprocessing transforms raw data into a clean, consistent format by handling missing values, removing outliers, and normalizing features, improving model training quality and accuracy.",
          es: "El preprocesamiento de datos transforma datos brutos en un formato limpio y consistente manejando valores faltantes, eliminando valores atípicos y normalizando características, mejorando calidad y precisión del entrenamiento del modelo.",
          de: "Datenvorverarbeitung transformiert Rohdaten in ein sauberes, konsistentes Format durch Behandlung fehlender Werte, Entfernung von Ausreißern und Normalisierung von Features, verbessert Modelltrainingsqualität und Genauigkeit.",
          nl: "Data preprocessing transformeert ruwe data naar een schoon, consistent formaat door ontbrekende waarden te behandelen, uitschieters te verwijderen en features te normaliseren, verbetert modeltrainingskwaliteit en nauwkeurigheid."
        }
      },
      {
        question: {
          en: "What is a model in machine learning?",
          es: "¿Qué es un modelo en aprendizaje automático?",
          de: "Was ist ein Modell im maschinellen Lernen?",
          nl: "Wat is een model in machine learning?"
        },
        options: [
          { en: "A mathematical representation trained to make predictions", es: "Una representación matemática entrenada para hacer predicciones", de: "Eine mathematische Darstellung trainiert um Vorhersagen zu machen", nl: "Een wiskundige representatie getraind om voorspellingen te maken" },
          { en: "A physical replica of something", es: "Una réplica física de algo", de: "Eine physische Nachbildung von etwas", nl: "Een fysieke replica van iets" },
          { en: "A perfect example to follow", es: "Un ejemplo perfecto a seguir", de: "Ein perfektes Beispiel zum Folgen", nl: "Een perfect voorbeeld om te volgen" },
          { en: "A template for coding", es: "Una plantilla para codificar", de: "Eine Vorlage zum Codieren", nl: "Een sjabloon voor coderen" }
        ],
        correct: 0,
        explanation: {
          en: "An ML model is the mathematical structure created through training that captures patterns in data and can make predictions on new inputs, like a trained spam detector or image classifier.",
          es: "Un modelo ML es la estructura matemática creada a través del entrenamiento que captura patrones en datos y puede hacer predicciones en nuevas entradas, como un detector de spam entrenado o clasificador de imágenes.",
          de: "Ein ML-Modell ist die mathematische Struktur die durch Training erstellt wird die Muster in Daten erfasst und Vorhersagen für neue Eingaben machen kann, wie ein trainierter Spam-Detektor oder Bildklassifikator.",
          nl: "Een ML model is de wiskundige structuur gecreëerd door training die patronen in data vastlegt en voorspellingen kan maken op nieuwe inputs, zoals een getrainde spamdetector of beeldclassificator."
        }
      },
      {
        question: {
          en: "What does 'training' mean in machine learning?",
          es: "¿Qué significa 'entrenamiento' en aprendizaje automático?",
          de: "Was bedeutet 'Training' im maschinellen Lernen?",
          nl: "Wat betekent 'training' in machine learning?"
        },
        options: [
          { en: "The process of teaching a model by feeding it data", es: "El proceso de enseñar a un modelo alimentándolo con datos", de: "Der Prozess ein Modell durch Füttern mit Daten zu lehren", nl: "Het proces van een model leren door het data te voeden" },
          { en: "Physical exercise for programmers", es: "Ejercicio físico para programadores", de: "Körperliches Training für Programmierer", nl: "Fysieke training voor programmeurs" },
          { en: "Teaching users how to use AI", es: "Enseñar a usuarios cómo usar IA", de: "Benutzern beibringen wie man KI verwendet", nl: "Gebruikers leren hoe AI te gebruiken" },
          { en: "Installing software updates", es: "Instalar actualizaciones de software", de: "Software-Updates installieren", nl: "Software-updates installeren" }
        ],
        correct: 0,
        explanation: {
          en: "Training is the process where an ML algorithm learns from data by adjusting its internal parameters to minimize errors and improve its ability to make accurate predictions.",
          es: "El entrenamiento es el proceso donde un algoritmo ML aprende de datos ajustando sus parámetros internos para minimizar errores y mejorar su capacidad para hacer predicciones precisas.",
          de: "Training ist der Prozess bei dem ein ML-Algorithmus aus Daten lernt indem er seine internen Parameter anpasst um Fehler zu minimieren und seine Fähigkeit genaue Vorhersagen zu machen zu verbessern.",
          nl: "Training is het proces waarbij een ML algoritme leert van data door zijn interne parameters aan te passen om fouten te minimaliseren en zijn vermogen om nauwkeurige voorspellingen te maken te verbeteren."
        }
      },
      {
        question: {
          en: "What is Google Assistant?",
          es: "¿Qué es Google Assistant?",
          de: "Was ist Google Assistant?",
          nl: "Wat is Google Assistant?"
        },
        options: [
          { en: "An AI-powered virtual assistant by Google", es: "Un asistente virtual impulsado por IA de Google", de: "Ein KI-gestützter virtueller Assistent von Google", nl: "Een AI-aangedreven virtuele assistent van Google" },
          { en: "A search engine", es: "Un motor de búsqueda", de: "Eine Suchmaschine", nl: "Een zoekmachine" },
          { en: "A human employee at Google", es: "Un empleado humano en Google", de: "Ein menschlicher Mitarbeiter bei Google", nl: "Een menselijke medewerker bij Google" },
          { en: "A web browser", es: "Un navegador web", de: "Ein Webbrowser", nl: "Een webbrowser" }
        ],
        correct: 0,
        explanation: {
          en: "Google Assistant is a voice-activated AI assistant developed by Google that can answer questions, control smart devices, set reminders, and perform various tasks through natural language interaction.",
          es: "Google Assistant es un asistente IA activado por voz desarrollado por Google que puede responder preguntas, controlar dispositivos inteligentes, establecer recordatorios y realizar varias tareas a través de interacción en lenguaje natural.",
          de: "Google Assistant ist ein sprachaktivierter KI-Assistent entwickelt von Google der Fragen beantworten, Smart Devices steuern, Erinnerungen setzen und verschiedene Aufgaben durch natürliche Sprachinteraktion ausführen kann.",
          nl: "Google Assistant is een spraakgestuurde AI assistent ontwikkeld door Google die vragen kan beantwoorden, slimme apparaten kan besturen, herinneringen kan instellen en verschillende taken kan uitvoeren door natuurlijke taalinteractie."
        }
      },
      {
        question: {
          en: "What is an example of bias in AI?",
          es: "¿Qué es un ejemplo de sesgo en IA?",
          de: "Was ist ein Beispiel für Voreingenommenheit in KI?",
          nl: "Wat is een voorbeeld van bias in AI?"
        },
        options: [
          { en: "A facial recognition system working better for some groups than others", es: "Un sistema de reconocimiento facial que funciona mejor para algunos grupos que otros", de: "Ein Gesichtserkennungssystem das für manche Gruppen besser funktioniert als für andere", nl: "Een gezichtsherkennungssysteem dat beter werkt voor sommige groepen dan anderen" },
          { en: "A computer preferring one color over another", es: "Una computadora prefiriendo un color sobre otro", de: "Ein Computer der eine Farbe einer anderen vorzieht", nl: "Een computer die een kleur verkiest boven een andere" },
          { en: "AI running faster on newer hardware", es: "IA funcionando más rápido en hardware más nuevo", de: "KI läuft schneller auf neuerer Hardware", nl: "AI draait sneller op nieuwere hardware" },
          { en: "Different programming languages for AI", es: "Diferentes lenguajes de programación para IA", de: "Verschiedene Programmiersprachen für KI", nl: "Verschillende programmeertalen voor AI" }
        ],
        correct: 0,
        explanation: {
          en: "AI bias occurs when a model performs differently for different groups, often because the training data doesn't equally represent all groups or contains historical biases.",
          es: "El sesgo de IA ocurre cuando un modelo funciona de manera diferente para diferentes grupos, a menudo porque los datos de entrenamiento no representan igualmente a todos los grupos o contienen sesgos históricos.",
          de: "KI-Voreingenommenheit tritt auf wenn ein Modell für verschiedene Gruppen unterschiedlich funktioniert, oft weil die Trainingsdaten nicht alle Gruppen gleich repräsentieren oder historische Vorurteile enthalten.",
          nl: "AI bias treedt op wanneer een model anders presteert voor verschillende groepen, vaak omdat de trainingsdata niet alle groepen gelijk vertegenwoordigt of historische vooroordelen bevat."
        }
      },
      }
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  } else if (typeof window !== 'undefined') {
    window.level1 = level1;
  }
})();
