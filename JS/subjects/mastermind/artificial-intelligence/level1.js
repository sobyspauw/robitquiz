// Artificial Intelligence - Level 1: Foundations of AI
(function() {
  const level1 = {
    name: {
      en: "Foundations of AI",
      es: "Fundamentos de IA",
      de: "Grundlagen der KI",
      nl: "Grondslagen van AI"
    },
    questions: [
      {
        question: {
          en: "Who is considered the father of artificial intelligence?",
          es: "¿Quién es considerado el padre de la inteligencia artificial?",
          de: "Wer gilt als Vater der künstlichen Intelligenz?",
          nl: "Wie wordt beschouwd als de vader van kunstmatige intelligentie?"
        },
        options: [
          { en: "Alan Turing", es: "Alan Turing", de: "Alan Turing", nl: "Alan Turing" },
          { en: "John von Neumann", es: "John von Neumann", de: "John von Neumann", nl: "John von Neumann" },
          { en: "Charles Darwin", es: "Charles Darwin", de: "Charles Darwin", nl: "Charles Darwin" },
          { en: "Albert Einstein", es: "Albert Einstein", de: "Albert Einstein", nl: "Albert Einstein" }
        ],
        correct: 0,
        explanation: {
          en: "Alan Turing is widely considered the father of AI for his groundbreaking work on computation, the Turing Test, and his theoretical contributions to machine intelligence.",
          es: "Alan Turing es ampliamente considerado el padre de la IA por su trabajo pionero en computación, la Prueba de Turing y sus contribuciones teóricas a la inteligencia artificial.",
          de: "Alan Turing gilt weithin als Vater der KI für seine bahnbrechende Arbeit in der Informatik, den Turing-Test und seine theoretischen Beiträge zur maschinellen Intelligenz.",
          nl: "Alan Turing wordt algemeen beschouwd als de vader van AI vanwege zijn baanbrekende werk op het gebied van berekening, de Turing Test en zijn theoretische bijdragen aan machine-intelligentie."
        }
      },
      {
        question: {
          en: "What does the Turing Test evaluate?",
          es: "¿Qué evalúa la Prueba de Turing?",
          de: "Was bewertet der Turing-Test?",
          nl: "Wat evalueert de Turing Test?"
        },
        options: [
          { en: "Machine's ability to exhibit intelligent behavior", es: "Capacidad de la máquina para exhibir comportamiento inteligente", de: "Fähigkeit der Maschine, intelligentes Verhalten zu zeigen", nl: "Het vermogen van een machine om intelligent gedrag te vertonen" },
          { en: "Computer processing speed", es: "Velocidad de procesamiento de la computadora", de: "Computer-Verarbeitungsgeschwindigkeit", nl: "Computerverwerkingssnelheid" },
          { en: "Memory capacity", es: "Capacidad de memoria", de: "Speicherkapazität", nl: "Geheugencapaciteit" },
          { en: "Network connectivity", es: "Conectividad de red", de: "Netzwerk-Konnektivität", nl: "Netwerkconnectiviteit" }
        ],
        correct: 0,
        explanation: {
          en: "The Turing Test assesses whether a machine can engage in conversations that are indistinguishable from those of a human, thus demonstrating intelligent behavior.",
          es: "La Prueba de Turing evalúa si una máquina puede participar en conversaciones que son indistinguibles de las de un humano, demostrando así un comportamiento inteligente.",
          de: "Der Turing-Test bewertet, ob eine Maschine Gespräche führen kann, die von denen eines Menschen nicht zu unterscheiden sind und damit intelligentes Verhalten demonstriert.",
          nl: "De Turing Test beoordeelt of een machine gesprekken kan voeren die niet te onderscheiden zijn van die van een mens, en daarmee intelligent gedrag demonstreert."
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
          { en: "AI systems that learn from data without explicit programming", es: "Sistemas de IA que aprenden de datos sin programación explícita", de: "KI-Systeme, die aus Daten ohne explizite Programmierung lernen", nl: "AI-systemen die leren van data zonder expliciete programmering" },
          { en: "Manual programming of computers", es: "Programación manual de computadoras", de: "Manuelle Programmierung von Computern", nl: "Handmatige programmering van computers" },
          { en: "Physical robot manufacturing", es: "Fabricación física de robots", de: "Physische Roboterherstellung", nl: "Fysieke robotproductie" },
          { en: "Internet browsing algorithms", es: "Algoritmos de navegación por Internet", de: "Internet-Browsing-Algorithmen", nl: "Internetbrowse-algoritmen" }
        ],
        correct: 0,
        explanation: {
          en: "Machine learning is a subset of AI where systems automatically improve their performance on a specific task through experience and data analysis, without being explicitly programmed for every scenario.",
          es: "El aprendizaje automático es un subconjunto de la IA donde los sistemas mejoran automáticamente su rendimiento en una tarea específica a través de la experiencia y el análisis de datos, sin ser programados explícitamente para cada escenario.",
          de: "Maschinelles Lernen ist ein Teilbereich der KI, in dem Systeme automatisch ihre Leistung bei einer bestimmten Aufgabe durch Erfahrung und Datenanalyse verbessern, ohne für jedes Szenario explizit programmiert zu werden.",
          nl: "Machine learning is een subset van AI waarbij systemen automatisch hun prestaties op een specifieke taak verbeteren door ervaring en data-analyse, zonder expliciet geprogrammeerd te worden voor elk scenario."
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
          { en: "Human brain structure", es: "Estructura del cerebro humano", de: "Struktur des menschlichen Gehirns", nl: "Menselijke hersenstructuur" },
          { en: "Computer circuits", es: "Circuitos de computadora", de: "Computer-Schaltkreise", nl: "Computercircuits" },
          { en: "Telephone networks", es: "Redes telefónicas", de: "Telefonnetzwerke", nl: "Telefoonnetwerken" },
          { en: "Road systems", es: "Sistemas de carreteras", de: "Straßensysteme", nl: "Wegsystemen" }
        ],
        correct: 0,
        explanation: {
          en: "Neural networks are computational models inspired by the biological neural networks in animal brains, with interconnected nodes (neurons) that process and transmit information.",
          es: "Las redes neuronales son modelos computacionales inspirados en las redes neuronales biológicas en cerebros animales, con nodos interconectados (neuronas) que procesan y transmiten información.",
          de: "Neuronale Netzwerke sind Rechenmodelle, die von den biologischen neuronalen Netzwerken in Tiergehirnen inspiriert sind, mit miteinander verbundenen Knoten (Neuronen), die Informationen verarbeiten und übertragen.",
          nl: "Neurale netwerken zijn computationele modellen geïnspireerd door de biologische neurale netwerken in dierenbreinen, met onderling verbonden knooppunten (neuronen) die informatie verwerken en doorgeven."
        }
      },
      {
        question: {
          en: "What is deep learning?",
          es: "¿Qué es el aprendizaje profundo?",
          de: "Was ist Deep Learning?",
          nl: "Wat is deep learning?"
        },
        options: [
          { en: "Machine learning with multiple layers of neural networks", es: "Aprendizaje automático con múltiples capas de redes neuronales", de: "Maschinelles Lernen mit mehreren Schichten neuronaler Netzwerke", nl: "Machine learning met meerdere lagen van neurale netwerken" },
          { en: "Learning underwater", es: "Aprender bajo el agua", de: "Lernen unter Wasser", nl: "Leren onder water" },
          { en: "Very slow learning", es: "Aprendizaje muy lento", de: "Sehr langsames Lernen", nl: "Heel langzaam leren" },
          { en: "Learning in caves", es: "Aprender en cuevas", de: "Lernen in Höhlen", nl: "Leren in grotten" }
        ],
        correct: 0,
        explanation: {
          en: "Deep learning uses neural networks with many hidden layers (typically 3+ layers) to model and understand complex patterns in data, enabling advanced AI capabilities like image recognition and natural language processing.",
          es: "El aprendizaje profundo utiliza redes neuronales con muchas capas ocultas (típicamente 3+ capas) para modelar y entender patrones complejos en los datos, habilitando capacidades avanzadas de IA como reconocimiento de imágenes y procesamiento de lenguaje natural.",
          de: "Deep Learning verwendet neuronale Netzwerke mit vielen versteckten Schichten (typischerweise 3+ Schichten), um komplexe Muster in Daten zu modellieren und zu verstehen, was fortgeschrittene KI-Fähigkeiten wie Bilderkennung und natürliche Sprachverarbeitung ermöglicht.",
          nl: "Deep learning gebruikt neurale netwerken met veel verborgen lagen (typisch 3+ lagen) om complexe patronen in data te modelleren en begrijpen, waardoor geavanceerde AI-capaciteiten zoals beeldherkenning en natuurlijke taalverwerking mogelijk worden."
        }
      },
      {
        question: {
          en: "What is natural language processing (NLP)?",
          es: "¿Qué es el procesamiento de lenguaje natural (PLN)?",
          de: "Was ist natürliche Sprachverarbeitung (NLP)?",
          nl: "Wat is natuurlijke taalverwerking (NLP)?"
        },
        options: [
          { en: "AI field focused on enabling computers to understand human language", es: "Campo de IA enfocado en permitir que las computadoras entiendan el lenguaje humano", de: "KI-Bereich, der darauf fokussiert ist, Computern das Verstehen menschlicher Sprache zu ermöglichen", nl: "AI-veld gericht op het in staat stellen van computers om menselijke taal te begrijpen" },
          { en: "Creating new programming languages", es: "Crear nuevos lenguajes de programación", de: "Neue Programmiersprachen erstellen", nl: "Nieuwe programmeertalen creëren" },
          { en: "Teaching humans to speak to computers", es: "Enseñar a los humanos a hablar con las computadoras", de: "Menschen beibringen, mit Computern zu sprechen", nl: "Mensen leren praten met computers" },
          { en: "Translating binary code", es: "Traducir código binario", de: "Binärcode übersetzen", nl: "Binaire code vertalen" }
        ],
        correct: 0,
        explanation: {
          en: "NLP is a branch of AI that helps computers understand, interpret, and generate human language in a way that is both meaningful and useful, enabling applications like chatbots, translation, and sentiment analysis.",
          es: "PLN es una rama de la IA que ayuda a las computadoras a entender, interpretar y generar lenguaje humano de una manera que sea significativa y útil, habilitando aplicaciones como chatbots, traducción y análisis de sentimientos.",
          de: "NLP ist ein Zweig der KI, der Computern hilft, menschliche Sprache auf eine sinnvolle und nützliche Weise zu verstehen, zu interpretieren und zu generieren, wodurch Anwendungen wie Chatbots, Übersetzung und Sentimentanalyse ermöglicht werden.",
          nl: "NLP is een tak van AI die computers helpt menselijke taal te begrijpen, interpreteren en genereren op een manier die zowel zinvol als nuttig is, waardoor toepassingen zoals chatbots, vertaling en sentimentanalyse mogelijk worden."
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
          { en: "AI field that enables machines to interpret visual information", es: "Campo de IA que permite a las máquinas interpretar información visual", de: "KI-Bereich, der Maschinen ermöglicht, visuelle Informationen zu interpretieren", nl: "AI-veld dat machines in staat stelt visuele informatie te interpreteren" },
          { en: "Designing computer monitors", es: "Diseñar monitores de computadora", de: "Computer-Monitore entwerfen", nl: "Computermonitoren ontwerpen" },
          { en: "Eye tracking technology", es: "Tecnología de seguimiento ocular", de: "Eye-Tracking-Technologie", nl: "Oogvolgingstechnologie" },
          { en: "Virtual reality headsets", es: "Cascos de realidad virtual", de: "Virtual-Reality-Headsets", nl: "Virtual reality headsets" }
        ],
        correct: 0,
        explanation: {
          en: "Computer vision is a field of AI that trains computers to identify and understand visual content from images and videos, enabling applications like facial recognition, medical imaging, and autonomous vehicles.",
          es: "La visión por computadora es un campo de la IA que entrena a las computadoras para identificar y entender contenido visual de imágenes y videos, habilitando aplicaciones como reconocimiento facial, imágenes médicas y vehículos autónomos.",
          de: "Computer Vision ist ein Bereich der KI, der Computer darauf trainiert, visuelle Inhalte aus Bildern und Videos zu identifizieren und zu verstehen, wodurch Anwendungen wie Gesichtserkennung, medizinische Bildgebung und autonome Fahrzeuge ermöglicht werden.",
          nl: "Computer vision is een veld van AI dat computers traint om visuele inhoud uit afbeeldingen en video's te identificeren en begrijpen, waardoor toepassingen zoals gezichtsherkenning, medische beeldvorming en autonome voertuigen mogelijk worden."
        }
      },
      {
        question: {
          en: "What is robotics in the context of AI?",
          es: "¿Qué es la robótica en el contexto de la IA?",
          de: "Was ist Robotik im Kontext der KI?",
          nl: "Wat is robotica in de context van AI?"
        },
        options: [
          { en: "Integration of AI with physical machines to perform tasks autonomously", es: "Integración de IA con máquinas físicas para realizar tareas autónomamente", de: "Integration von KI mit physischen Maschinen zur autonomen Aufgabenerfüllung", nl: "Integratie van AI met fysieke machines om taken autonoom uit te voeren" },
          { en: "Building mechanical toys", es: "Construir juguetes mecánicos", de: "Mechanisches Spielzeug bauen", nl: "Mechanisch speelgoed bouwen" },
          { en: "Programming video games", es: "Programar videojuegos", de: "Videospiele programmieren", nl: "Videogames programmeren" },
          { en: "Designing user interfaces", es: "Diseñar interfaces de usuario", de: "Benutzeroberflächen entwerfen", nl: "Gebruikersinterfaces ontwerpen" }
        ],
        correct: 0,
        explanation: {
          en: "AI robotics combines artificial intelligence with mechanical engineering to create robots that can perceive their environment, make decisions, and perform complex tasks with minimal human intervention.",
          es: "La robótica de IA combina la inteligencia artificial con la ingeniería mecánica para crear robots que pueden percibir su entorno, tomar decisiones y realizar tareas complejas con mínima intervención humana.",
          de: "KI-Robotik kombiniert künstliche Intelligenz mit Maschinenbau, um Roboter zu schaffen, die ihre Umgebung wahrnehmen, Entscheidungen treffen und komplexe Aufgaben mit minimaler menschlicher Intervention ausführen können.",
          nl: "AI-robotica combineert kunstmatige intelligentie met werktuigbouwkunde om robots te creëren die hun omgeving kunnen waarnemen, beslissingen kunnen nemen en complexe taken kunnen uitvoeren met minimale menselijke interventie."
        }
      },
      {
        question: {
          en: "What is a major ethical concern in AI development?",
          es: "¿Cuál es una preocupación ética importante en el desarrollo de IA?",
          de: "Was ist ein wichtiges ethisches Anliegen in der KI-Entwicklung?",
          nl: "Wat is een belangrijke ethische zorg bij AI-ontwikkeling?"
        },
        options: [
          { en: "Bias and fairness in AI decision-making", es: "Sesgo y equidad en la toma de decisiones de IA", de: "Voreingenommenheit und Fairness bei KI-Entscheidungen", nl: "Vooringenomenheid en eerlijkheid in AI-besluitvorming" },
          { en: "Cost of computer hardware", es: "Costo del hardware de computadora", de: "Kosten der Computer-Hardware", nl: "Kosten van computerhardware" },
          { en: "Internet connection speed", es: "Velocidad de conexión a Internet", de: "Internet-Verbindungsgeschwindigkeit", nl: "Internetverbindingssnelheid" },
          { en: "Programming language choice", es: "Elección del lenguaje de programación", de: "Wahl der Programmiersprache", nl: "Keuze van programmeertaal" }
        ],
        correct: 0,
        explanation: {
          en: "AI bias and fairness is a critical ethical concern, as AI systems can perpetuate or amplify human biases present in training data, leading to unfair treatment of certain groups in hiring, lending, criminal justice, and other important decisions.",
          es: "El sesgo y la equidad de la IA es una preocupación ética crítica, ya que los sistemas de IA pueden perpetuar o amplificar los sesgos humanos presentes en los datos de entrenamiento, llevando a un trato injusto de ciertos grupos en contratación, préstamos, justicia penal y otras decisiones importantes.",
          de: "KI-Voreingenommenheit und Fairness ist ein kritisches ethisches Anliegen, da KI-Systeme menschliche Vorurteile, die in Trainingsdaten vorhanden sind, perpetuieren oder verstärken können, was zu unfairer Behandlung bestimmter Gruppen bei Einstellungen, Kreditvergabe, Strafjustiz und anderen wichtigen Entscheidungen führt.",
          nl: "AI-vooringenomenheid en eerlijkheid is een kritieke ethische zorg, omdat AI-systemen menselijke vooroordelen die aanwezig zijn in trainingsdata kunnen bestendigen of versterken, wat leidt tot oneerlijke behandeling van bepaalde groepen bij aanwerving, kredietverlening, strafrecht en andere belangrijke beslissingen."
        }
      },
      {
        question: {
          en: "What is supervised learning in machine learning?",
          es: "¿Qué es el aprendizaje supervisado en aprendizaje automático?",
          de: "Was ist überwachtes Lernen im maschinellen Lernen?",
          nl: "Wat is supervised learning in machine learning?"
        },
        options: [
          { en: "Learning from labeled training data with known correct answers", es: "Aprender de datos de entrenamiento etiquetados con respuestas correctas conocidas", de: "Lernen aus beschrifteten Trainingsdaten mit bekannten korrekten Antworten", nl: "Leren van gelabelde trainingsdata met bekende juiste antwoorden" },
          { en: "Learning without any human supervision", es: "Aprender sin supervisión humana", de: "Lernen ohne menschliche Aufsicht", nl: "Leren zonder menselijke supervisie" },
          { en: "Learning only at night", es: "Aprender solo de noche", de: "Nur nachts lernen", nl: "Alleen 's nachts leren" },
          { en: "Learning with a teacher present", es: "Aprender con un maestro presente", de: "Lernen mit einem anwesenden Lehrer", nl: "Leren met een aanwezige leraar" }
        ],
        correct: 0,
        explanation: {
          en: "Supervised learning uses labeled datasets where the correct output is known for each input, allowing the algorithm to learn patterns and make predictions on new, unseen data. Examples include spam detection and image classification.",
          es: "El aprendizaje supervisado utiliza conjuntos de datos etiquetados donde la salida correcta es conocida para cada entrada, permitiendo al algoritmo aprender patrones y hacer predicciones en datos nuevos, no vistos. Ejemplos incluyen detección de spam y clasificación de imágenes.",
          de: "Überwachtes Lernen verwendet beschriftete Datensätze, bei denen die korrekte Ausgabe für jede Eingabe bekannt ist, wodurch der Algorithmus Muster lernen und Vorhersagen für neue, ungesehene Daten treffen kann. Beispiele sind Spam-Erkennung und Bildklassifizierung.",
          nl: "Supervised learning gebruikt gelabelde datasets waarbij de juiste uitvoer bekend is voor elke invoer, waardoor het algoritme patronen kan leren en voorspellingen kan maken op nieuwe, ongeziene data. Voorbeelden zijn spam-detectie en beeldclassificatie."
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
          { en: "Learning to find patterns in data without labeled examples", es: "Aprender a encontrar patrones en datos sin ejemplos etiquetados", de: "Lernen, Muster in Daten ohne beschriftete Beispiele zu finden", nl: "Leren om patronen te vinden in data zonder gelabelde voorbeelden" },
          { en: "Learning without electricity", es: "Aprender sin electricidad", de: "Lernen ohne Elektrizität", nl: "Leren zonder elektriciteit" },
          { en: "Learning during weekends only", es: "Aprender solo durante los fines de semana", de: "Nur an Wochenenden lernen", nl: "Alleen in weekends leren" },
          { en: "Learning forbidden topics", es: "Aprender temas prohibidos", de: "Verbotene Themen lernen", nl: "Verboden onderwerpen leren" }
        ],
        correct: 0,
        explanation: {
          en: "Unsupervised learning discovers hidden patterns, structures, or relationships in data without having labeled examples or correct answers, using techniques like clustering, dimensionality reduction, and anomaly detection.",
          es: "El aprendizaje no supervisado descubre patrones ocultos, estructuras o relaciones en los datos sin tener ejemplos etiquetados o respuestas correctas, utilizando técnicas como agrupación, reducción de dimensionalidad y detección de anomalías.",
          de: "Unüberwachtes Lernen entdeckt versteckte Muster, Strukturen oder Beziehungen in Daten, ohne beschriftete Beispiele oder korrekte Antworten zu haben, unter Verwendung von Techniken wie Clustering, Dimensionalitätsreduktion und Anomalieerkennung.",
          nl: "Unsupervised learning ontdekt verborgen patronen, structuren of relaties in data zonder gelabelde voorbeelden of juiste antwoorden te hebben, met behulp van technieken zoals clustering, dimensionaliteitsreductie en anomaliedetectie."
        }
      },
      {
        question: {
          en: "Who organized the famous Dartmouth Conference that coined the term 'Artificial Intelligence'?",
          es: "¿Quién organizó la famosa Conferencia de Dartmouth que acuñó el término 'Inteligencia Artificial'?",
          de: "Wer organisierte die berühmte Dartmouth-Konferenz, die den Begriff 'Künstliche Intelligenz' prägte?",
          nl: "Wie organiseerde de beroemde Dartmouth Conferentie die de term 'Kunstmatige Intelligentie' bedacht?"
        },
        options: [
          { en: "John McCarthy", es: "John McCarthy", de: "John McCarthy", nl: "John McCarthy" },
          { en: "Alan Turing", es: "Alan Turing", de: "Alan Turing", nl: "Alan Turing" },
          { en: "Marvin Minsky", es: "Marvin Minsky", de: "Marvin Minsky", nl: "Marvin Minsky" },
          { en: "Claude Shannon", es: "Claude Shannon", de: "Claude Shannon", nl: "Claude Shannon" }
        ],
        correct: 0,
        explanation: {
          en: "John McCarthy organized the 1956 Dartmouth Conference, where he first coined the term 'Artificial Intelligence' and brought together leading researchers to discuss the possibility of creating intelligent machines.",
          es: "John McCarthy organizó la Conferencia de Dartmouth de 1956, donde acuñó por primera vez el término 'Inteligencia Artificial' y reunió a investigadores líderes para discutir la posibilidad de crear máquinas inteligentes.",
          de: "John McCarthy organisierte die Dartmouth-Konferenz von 1956, wo er erstmals den Begriff 'Künstliche Intelligenz' prägte und führende Forscher zusammenbrachte, um die Möglichkeit der Schaffung intelligenter Maschinen zu diskutieren.",
          nl: "John McCarthy organiseerde de Dartmouth Conferentie van 1956, waar hij voor het eerst de term 'Kunstmatige Intelligentie' bedacht en toonaangevende onderzoekers samenbracht om de mogelijkheid van het creëren van intelligente machines te bespreken."
        }
      },
      {
        question: {
          en: "What is an expert system?",
          es: "¿Qué es un sistema experto?",
          de: "Was ist ein Expertensystem?",
          nl: "Wat is een expertsysteem?"
        },
        options: [
          { en: "AI program that mimics human expert decision-making in specific domains", es: "Programa de IA que imita la toma de decisiones de expertos humanos en dominios específicos", de: "KI-Programm, das die Entscheidungsfindung menschlicher Experten in spezifischen Domänen nachahmt", nl: "AI-programma dat menselijke expert besluitvorming in specifieke domeinen nabootst" },
          { en: "A computer for professionals only", es: "Una computadora solo para profesionales", de: "Ein Computer nur für Fachleute", nl: "Een computer alleen voor professionals" },
          { en: "Software that teaches expertise", es: "Software que enseña experiencia", de: "Software, das Expertise lehrt", nl: "Software die expertise onderwijst" },
          { en: "High-performance gaming system", es: "Sistema de juegos de alto rendimiento", de: "Hochleistungs-Gaming-System", nl: "Krachtig gaming systeem" }
        ],
        correct: 0,
        explanation: {
          en: "Expert systems are AI programs designed to solve complex problems by reasoning through bodies of knowledge, represented mainly as if-then rules, to emulate the decision-making ability of human experts in specific fields like medicine or engineering.",
          es: "Los sistemas expertos son programas de IA diseñados para resolver problemas complejos razonando a través de cuerpos de conocimiento, representados principalmente como reglas si-entonces, para emular la capacidad de toma de decisiones de expertos humanos en campos específicos como medicina o ingeniería.",
          de: "Expertensysteme sind KI-Programme, die entwickelt wurden, um komplexe Probleme zu lösen, indem sie durch Wissensbereiche argumentieren, die hauptsächlich als Wenn-Dann-Regeln dargestellt werden, um die Entscheidungsfähigkeit menschlicher Experten in spezifischen Bereichen wie Medizin oder Ingenieurwesen zu emulieren.",
          nl: "Expertsystemen zijn AI-programma's ontworpen om complexe problemen op te lossen door redeneren door kennisbases, voornamelijk weergegeven als als-dan regels, om de besluitvormingscapaciteit van menselijke experts in specifieke velden zoals geneeskunde of engineering na te bootsen."
        }
      },
      {
        question: {
          en: "What is knowledge representation in AI?",
          es: "¿Qué es la representación del conocimiento en IA?",
          de: "Was ist Wissensrepräsentation in der KI?",
          nl: "Wat is kennisrepresentatie in AI?"
        },
        options: [
          { en: "Methods of structuring information so AI systems can reason with it", es: "Métodos de estructurar información para que los sistemas de IA puedan razonar con ella", de: "Methoden zur Strukturierung von Informationen, damit KI-Systeme damit argumentieren können", nl: "Methoden om informatie te structureren zodat AI-systemen ermee kunnen redeneren" },
          { en: "Storing data in databases", es: "Almacenar datos en bases de datos", de: "Daten in Datenbanken speichern", nl: "Data opslaan in databases" },
          { en: "Creating user manuals", es: "Crear manuales de usuario", de: "Benutzerhandbücher erstellen", nl: "Gebruikershandleidingen maken" },
          { en: "Drawing knowledge graphs on paper", es: "Dibujar gráficos de conocimiento en papel", de: "Wissensgraphen auf Papier zeichnen", nl: "Kennisgrafieken op papier tekenen" }
        ],
        correct: 0,
        explanation: {
          en: "Knowledge representation involves encoding information about the world in a form that AI systems can utilize to solve complex tasks, using structures like semantic networks, frames, ontologies, and logic-based representations.",
          es: "La representación del conocimiento implica codificar información sobre el mundo en una forma que los sistemas de IA puedan utilizar para resolver tareas complejas, usando estructuras como redes semánticas, marcos, ontologías y representaciones basadas en lógica.",
          de: "Wissensrepräsentation beinhaltet die Kodierung von Informationen über die Welt in einer Form, die KI-Systeme nutzen können, um komplexe Aufgaben zu lösen, unter Verwendung von Strukturen wie semantischen Netzwerken, Rahmen, Ontologien und logikbasierten Repräsentationen.",
          nl: "Kennisrepresentatie houdt in dat informatie over de wereld wordt gecodeerd in een vorm die AI-systemen kunnen gebruiken om complexe taken op te lossen, met behulp van structuren zoals semantische netwerken, frames, ontologieën en logica-gebaseerde representaties."
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
          { en: "Learning through trial and error with rewards and penalties", es: "Aprender a través de ensayo y error con recompensas y penalizaciones", de: "Lernen durch Versuch und Irrtum mit Belohnungen und Strafen", nl: "Leren door vallen en opstaan met beloningen en straffen" },
          { en: "Strengthening computer hardware", es: "Fortalecer el hardware de la computadora", de: "Computer-Hardware verstärken", nl: "Computerhardware versterken" },
          { en: "Learning the same thing repeatedly", es: "Aprender la misma cosa repetidamente", de: "Dasselbe wiederholt lernen", nl: "Hetzelfde herhaaldelijk leren" },
          { en: "Using steel frames in AI", es: "Usar marcos de acero en IA", de: "Stahlrahmen in der KI verwenden", nl: "Stalen frames gebruiken in AI" }
        ],
        correct: 0,
        explanation: {
          en: "Reinforcement learning is a type of machine learning where an agent learns to make decisions by performing actions in an environment and receiving rewards or penalties, gradually improving its strategy to maximize cumulative rewards.",
          es: "El aprendizaje por refuerzo es un tipo de aprendizaje automático donde un agente aprende a tomar decisiones realizando acciones en un entorno y recibiendo recompensas o penalizaciones, mejorando gradualmente su estrategia para maximizar las recompensas acumulativas.",
          de: "Verstärkungslernen ist eine Art des maschinellen Lernens, bei der ein Agent lernt, Entscheidungen zu treffen, indem er Aktionen in einer Umgebung ausführt und Belohnungen oder Strafen erhält, wobei er seine Strategie allmählich verbessert, um kumulative Belohnungen zu maximieren.",
          nl: "Reinforcement learning is een type machine learning waarbij een agent leert beslissingen te nemen door acties uit te voeren in een omgeving en beloningen of straffen te ontvangen, waarbij het geleidelijk zijn strategie verbetert om cumulatieve beloningen te maximaliseren."
        }
      },
      {
        question: {
          en: "What is a convolutional neural network (CNN) primarily used for?",
          es: "¿Para qué se utiliza principalmente una red neuronal convolucional (CNN)?",
          de: "Wofür wird ein Convolutional Neural Network (CNN) hauptsächlich verwendet?",
          nl: "Waarvoor wordt een convolutioneel neuraal netwerk (CNN) voornamelijk gebruikt?"
        },
        options: [
          { en: "Image recognition and computer vision tasks", es: "Reconocimiento de imágenes y tareas de visión por computadora", de: "Bilderkennung und Computer-Vision-Aufgaben", nl: "Beeldherkenning en computer vision taken" },
          { en: "Text translation", es: "Traducción de texto", de: "Textübersetzung", nl: "Tekstvertaling" },
          { en: "Audio processing", es: "Procesamiento de audio", de: "Audioverarbeitung", nl: "Audioverwerking" },
          { en: "Database management", es: "Gestión de bases de datos", de: "Datenbankmanagement", nl: "Databasebeheer" }
        ],
        correct: 0,
        explanation: {
          en: "CNNs are specifically designed for processing grid-like data such as images, using convolutional layers that can detect features like edges, textures, and patterns, making them highly effective for image classification, object detection, and other computer vision tasks.",
          es: "Las CNN están específicamente diseñadas para procesar datos similares a cuadrículas como imágenes, usando capas convolucionales que pueden detectar características como bordes, texturas y patrones, haciéndolas altamente efectivas para clasificación de imágenes, detección de objetos y otras tareas de visión por computadora.",
          de: "CNNs sind speziell für die Verarbeitung gitterartiger Daten wie Bilder konzipiert, unter Verwendung von Faltungsschichten, die Merkmale wie Kanten, Texturen und Muster erkennen können, wodurch sie hocheffektiv für Bildklassifizierung, Objekterkennung und andere Computer-Vision-Aufgaben werden.",
          nl: "CNN's zijn specifiek ontworpen voor het verwerken van rasterachtige data zoals afbeeldingen, met behulp van convolutielagen die kenmerken zoals randen, texturen en patronen kunnen detecteren, waardoor ze zeer effectief zijn voor beeldclassificatie, objectdetectie en andere computer vision taken."
        }
      },
      {
        question: {
          en: "What is artificial general intelligence (AGI)?",
          es: "¿Qué es la inteligencia artificial general (IAG)?",
          de: "Was ist Allgemeine Künstliche Intelligenz (AKI)?",
          nl: "Wat is algemene kunstmatige intelligentie (AGI)?"
        },
        options: [
          { en: "AI that matches human intelligence across all cognitive tasks", es: "IA que iguala la inteligencia humana en todas las tareas cognitivas", de: "KI, die menschliche Intelligenz in allen kognitiven Aufgaben erreicht", nl: "AI die menselijke intelligentie evenaart in alle cognitieve taken" },
          { en: "AI for military generals", es: "IA para generales militares", de: "KI für Militärgeneräle", nl: "AI voor militaire generaals" },
          { en: "Basic AI programs", es: "Programas básicos de IA", de: "Grundlegende KI-Programme", nl: "Basis AI-programma's" },
          { en: "AI that works generally well", es: "IA que funciona generalmente bien", de: "KI, die allgemein gut funktioniert", nl: "AI die over het algemeen goed werkt" }
        ],
        correct: 0,
        explanation: {
          en: "AGI refers to hypothetical AI that possesses the ability to understand, learn, and apply intelligence across a wide range of tasks at a level comparable to human cognitive abilities, unlike current narrow AI that excels in specific domains.",
          es: "IAG se refiere a IA hipotética que posee la capacidad de entender, aprender y aplicar inteligencia a través de una amplia gama de tareas a un nivel comparable a las habilidades cognitivas humanas, a diferencia de la IA estrecha actual que sobresale en dominios específicos.",
          de: "AKI bezieht sich auf hypothetische KI, die die Fähigkeit besitzt, Intelligenz über eine breite Palette von Aufgaben auf einem Niveau zu verstehen, zu lernen und anzuwenden, das mit menschlichen kognitiven Fähigkeiten vergleichbar ist, im Gegensatz zur aktuellen engen KI, die in spezifischen Bereichen hervorragend ist.",
          nl: "AGI verwijst naar hypothetische AI die het vermogen bezit om intelligentie te begrijpen, leren en toepassen over een breed scala van taken op een niveau vergelijkbaar met menselijke cognitieve vaardigheden, in tegenstelling tot huidige smalle AI die uitblinkt in specifieke domeinen."
        }
      },
      {
        question: {
          en: "What is the Chinese Room argument about?",
          es: "¿De qué trata el argumento de la Habitación China?",
          de: "Worum geht es beim Chinesischen Zimmer-Argument?",
          nl: "Waar gaat het Chinese Kamer argument over?"
        },
        options: [
          { en: "Whether machines can truly understand or just simulate understanding", es: "Si las máquinas pueden realmente entender o solo simular la comprensión", de: "Ob Maschinen wirklich verstehen können oder nur Verstehen simulieren", nl: "Of machines werkelijk kunnen begrijpen of alleen begrip simuleren" },
          { en: "Chinese restaurant management", es: "Gestión de restaurantes chinos", de: "Chinesisches Restaurant-Management", nl: "Chinees restaurant management" },
          { en: "Room decoration in China", es: "Decoración de habitaciones en China", de: "Raumgestaltung in China", nl: "Kamerindeling in China" },
          { en: "Language learning methods", es: "Métodos de aprendizaje de idiomas", de: "Sprachlernmethoden", nl: "Taalleer methoden" }
        ],
        correct: 0,
        explanation: {
          en: "Philosopher John Searle's Chinese Room argument challenges the idea that computers can truly 'understand' language, arguing that a person following rules to respond to Chinese characters without understanding Chinese demonstrates that syntax (symbol manipulation) is not sufficient for semantics (meaning).",
          es: "El argumento de la Habitación China del filósofo John Searle desafía la idea de que las computadoras pueden realmente 'entender' el lenguaje, argumentando que una persona siguiendo reglas para responder a caracteres chinos sin entender chino demuestra que la sintaxis (manipulación de símbolos) no es suficiente para la semántica (significado).",
          de: "Das Chinesische Zimmer-Argument des Philosophen John Searle stellt die Idee in Frage, dass Computer Sprache wirklich 'verstehen' können, und argumentiert, dass eine Person, die Regeln befolgt, um auf chinesische Zeichen zu antworten, ohne Chinesisch zu verstehen, zeigt, dass Syntax (Symbolmanipulation) nicht ausreichend für Semantik (Bedeutung) ist.",
          nl: "Filosoof John Searle's Chinese Kamer argument betwist het idee dat computers taal werkelijk kunnen 'begrijpen', bewerende dat een persoon die regels volgt om te reageren op Chinese karakters zonder Chinees te begrijpen, toont dat syntaxis (symboolmanipulatie) niet voldoende is voor semantiek (betekenis)."
        }
      },
      {
        question: {
          en: "What is a recurrent neural network (RNN) best suited for?",
          es: "¿Para qué es más adecuada una red neuronal recurrente (RNN)?",
          de: "Wofür eignet sich ein Recurrent Neural Network (RNN) am besten?",
          nl: "Waarvoor is een recurrent neuraal netwerk (RNN) het meest geschikt?"
        },
        options: [
          { en: "Sequential data like text and time series", es: "Datos secuenciales como texto y series temporales", de: "Sequenzielle Daten wie Text und Zeitreihen", nl: "Sequentiële data zoals tekst en tijdreeksen" },
          { en: "Static image classification", es: "Clasificación de imágenes estáticas", de: "Statische Bildklassifizierung", nl: "Statische beeldclassificatie" },
          { en: "Database queries", es: "Consultas de bases de datos", de: "Datenbankabfragen", nl: "Database queries" },
          { en: "Hardware optimization", es: "Optimización de hardware", de: "Hardware-Optimierung", nl: "Hardware optimalisatie" }
        ],
        correct: 0,
        explanation: {
          en: "RNNs are designed to handle sequential data by maintaining internal memory states that allow them to process information with temporal dependencies, making them ideal for tasks like language modeling, machine translation, and time series prediction.",
          es: "Las RNN están diseñadas para manejar datos secuenciales manteniendo estados de memoria interna que les permiten procesar información con dependencias temporales, haciéndolas ideales para tareas como modelado de lenguaje, traducción automática y predicción de series temporales.",
          de: "RNNs sind darauf ausgelegt, sequenzielle Daten zu verarbeiten, indem sie interne Speicherzustände aufrechterhalten, die es ihnen ermöglichen, Informationen mit zeitlichen Abhängigkeiten zu verarbeiten, wodurch sie ideal für Aufgaben wie Sprachmodellierung, maschinelle Übersetzung und Zeitreihenvorhersage werden.",
          nl: "RNN's zijn ontworpen om sequentiële data te verwerken door interne geheugentoestanden aan te houden die hen in staat stellen informatie met temporele afhankelijkheden te verwerken, waardoor ze ideaal zijn voor taken zoals taalmodellering, machinevertaling en tijdreeksvoorspelling."
        }
      },
      {
        question: {
          en: "What is the singularity in AI context?",
          es: "¿Qué es la singularidad en el contexto de la IA?",
          de: "Was ist die Singularität im KI-Kontext?",
          nl: "Wat is de singulariteit in AI-context?"
        },
        options: [
          { en: "Hypothetical point where AI surpasses human intelligence", es: "Punto hipotético donde la IA supera la inteligencia humana", de: "Hypothetischer Punkt, an dem KI die menschliche Intelligenz übertrifft", nl: "Hypothetisch punt waar AI menselijke intelligentie overtreft" },
          { en: "AI systems becoming unique", es: "Sistemas de IA volviéndose únicos", de: "KI-Systeme werden einzigartig", nl: "AI-systemen worden uniek" },
          { en: "Single-core processors", es: "Procesadores de un solo núcleo", de: "Einkern-Prozessoren", nl: "Single-core processors" },
          { en: "One AI controlling everything", es: "Una IA controlando todo", de: "Eine KI kontrolliert alles", nl: "Eén AI die alles controleert" }
        ],
        correct: 0,
        explanation: {
          en: "The technological singularity refers to a hypothetical future point where artificial intelligence becomes capable of recursive self-improvement, leading to rapid technological growth beyond human comprehension and potentially transforming civilization.",
          es: "La singularidad tecnológica se refiere a un punto futuro hipotético donde la inteligencia artificial se vuelve capaz de auto-mejora recursiva, llevando a un crecimiento tecnológico rápido más allá de la comprensión humana y potencialmente transformando la civilización.",
          de: "Die technologische Singularität bezieht sich auf einen hypothetischen zukünftigen Punkt, an dem künstliche Intelligenz zur rekursiven Selbstverbesserung fähig wird, was zu schnellem technologischem Wachstum jenseits menschlicher Verständnisfähigkeit führt und möglicherweise die Zivilisation transformiert.",
          nl: "De technologische singulariteit verwijst naar een hypothetisch toekomstig punt waar kunstmatige intelligentie in staat wordt tot recursieve zelfverbetering, wat leidt tot snelle technologische groei voorbij menselijk begrip en mogelijk de beschaving transformeert."
        }
      },
      {
        question: {
          en: "What is transfer learning in AI?",
          es: "¿Qué es el aprendizaje de transferencia en IA?",
          de: "Was ist Transfer Learning in der KI?",
          nl: "Wat is transfer learning in AI?"
        },
        options: [
          { en: "Using knowledge from one task to improve performance on a related task", es: "Usar conocimiento de una tarea para mejorar el rendimiento en una tarea relacionada", de: "Wissen aus einer Aufgabe nutzen, um die Leistung bei einer verwandten Aufgabe zu verbessern", nl: "Kennis van één taak gebruiken om prestaties op een gerelateerde taak te verbeteren" },
          { en: "Moving AI between computers", es: "Mover IA entre computadoras", de: "KI zwischen Computern verschieben", nl: "AI verplaatsen tussen computers" },
          { en: "Teaching AI to students", es: "Enseñar IA a estudiantes", de: "KI an Studenten unterrichten", nl: "AI onderwijzen aan studenten" },
          { en: "Copying files from one location to another", es: "Copiar archivos de una ubicación a otra", de: "Dateien von einem Ort zum anderen kopieren", nl: "Bestanden kopiëren van de ene naar de andere locatie" }
        ],
        correct: 0,
        explanation: {
          en: "Transfer learning leverages knowledge gained from training on one task or dataset to improve learning efficiency and performance on a different but related task, reducing the need for large amounts of training data and computational resources.",
          es: "El aprendizaje de transferencia aprovecha el conocimiento obtenido del entrenamiento en una tarea o conjunto de datos para mejorar la eficiencia de aprendizaje y el rendimiento en una tarea diferente pero relacionada, reduciendo la necesidad de grandes cantidades de datos de entrenamiento y recursos computacionales.",
          de: "Transfer Learning nutzt das Wissen, das durch Training an einer Aufgabe oder einem Datensatz gewonnen wurde, um die Lerneffizienz und Leistung bei einer anderen, aber verwandten Aufgabe zu verbessern, wodurch der Bedarf an großen Mengen von Trainingsdaten und Rechenressourcen reduziert wird.",
          nl: "Transfer learning maakt gebruik van kennis verkregen door training op één taak of dataset om leerefficiëntie en prestaties op een andere maar gerelateerde taak te verbeteren, waardoor de behoefte aan grote hoeveelheden trainingsdata en computationele bronnen wordt verminderd."
        }
      },
      {
        question: {
          en: "What is overfitting in machine learning?",
          es: "¿Qué es el sobreajuste en aprendizaje automático?",
          de: "Was ist Overfitting im maschinellen Lernen?",
          nl: "Wat is overfitting in machine learning?"
        },
        options: [
          { en: "When a model learns training data too well and fails to generalize", es: "Cuando un modelo aprende demasiado bien los datos de entrenamiento y falla en generalizar", de: "Wenn ein Modell Trainingsdaten zu gut lernt und bei der Generalisierung versagt", nl: "Wanneer een model trainingsdata te goed leert en faalt in generalisatie" },
          { en: "Making AI models too large", es: "Hacer modelos de IA demasiado grandes", de: "KI-Modelle zu groß machen", nl: "AI-modellen te groot maken" },
          { en: "Using too much computer memory", es: "Usar demasiada memoria de computadora", de: "Zu viel Computerspeicher verwenden", nl: "Te veel computergeheugen gebruiken" },
          { en: "Training for too many hours", es: "Entrenar por demasiadas horas", de: "Zu viele Stunden trainieren", nl: "Te veel uren trainen" }
        ],
        correct: 0,
        explanation: {
          en: "Overfitting occurs when a machine learning model learns the training data so specifically that it captures noise and peculiarities rather than general patterns, resulting in poor performance on new, unseen data despite high accuracy on training data.",
          es: "El sobreajuste ocurre cuando un modelo de aprendizaje automático aprende los datos de entrenamiento tan específicamente que captura ruido y peculiaridades en lugar de patrones generales, resultando en un rendimiento pobre en datos nuevos, no vistos, a pesar de alta precisión en datos de entrenamiento.",
          de: "Overfitting tritt auf, wenn ein maschinelles Lernmodell die Trainingsdaten so spezifisch lernt, dass es Rauschen und Eigenarten erfasst anstatt allgemeine Muster, was zu schlechter Leistung bei neuen, ungesehenen Daten führt, trotz hoher Genauigkeit bei Trainingsdaten.",
          nl: "Overfitting treedt op wanneer een machine learning model de trainingsdata zo specifiek leert dat het ruis en eigenaardigheden vastlegt in plaats van algemene patronen, wat resulteert in slechte prestaties op nieuwe, ongeziene data ondanks hoge nauwkeurigheid op trainingsdata."
        }
      },
      {
        question: {
          en: "What is gradient descent?",
          es: "¿Qué es el descenso de gradiente?",
          de: "Was ist Gradientenabstieg?",
          nl: "Wat is gradient descent?"
        },
        options: [
          { en: "Optimization algorithm to minimize error in neural networks", es: "Algoritmo de optimización para minimizar errores en redes neuronales", de: "Optimierungsalgorithmus zur Minimierung von Fehlern in neuronalen Netzwerken", nl: "Optimalisatie-algoritme om fouten in neurale netwerken te minimaliseren" },
          { en: "Going downhill physically", es: "Bajar físicamente por una colina", de: "Physisch bergab gehen", nl: "Fysiek bergafwaarts gaan" },
          { en: "Decreasing computer performance", es: "Disminuir el rendimiento de la computadora", de: "Computer-Leistung verringern", nl: "Computerprestaties verminderen" },
          { en: "Reducing network bandwidth", es: "Reducir el ancho de banda de la red", de: "Netzwerk-Bandbreite reduzieren", nl: "Netwerkbandbreedte verminderen" }
        ],
        correct: 0,
        explanation: {
          en: "Gradient descent is an iterative optimization algorithm used to find the minimum of a function by repeatedly moving in the direction of the steepest descent (negative gradient), commonly used to minimize loss functions in training neural networks.",
          es: "El descenso de gradiente es un algoritmo de optimización iterativo usado para encontrar el mínimo de una función moviéndose repetidamente en la dirección del descenso más pronunciado (gradiente negativo), comúnmente usado para minimizar funciones de pérdida en el entrenamiento de redes neuronales.",
          de: "Gradientenabstieg ist ein iterativer Optimierungsalgorithmus, der verwendet wird, um das Minimum einer Funktion zu finden, indem er sich wiederholt in Richtung des steilsten Abstiegs (negativer Gradient) bewegt, häufig verwendet zur Minimierung von Verlustfunktionen beim Training neuronaler Netzwerke.",
          nl: "Gradient descent is een iteratief optimalisatie-algoritme dat wordt gebruikt om het minimum van een functie te vinden door herhaaldelijk te bewegen in de richting van de steilste afdaling (negatieve gradiënt), vaak gebruikt om verliesfuncties te minimaliseren bij het trainen van neurale netwerken."
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
          { en: "AI program designed to simulate conversation with humans", es: "Programa de IA diseñado para simular conversación con humanos", de: "KI-Programm zur Simulation von Gesprächen mit Menschen", nl: "AI-programma ontworpen om gesprekken met mensen te simuleren" },
          { en: "Robot that only chats", es: "Robot que solo conversa", de: "Roboter, der nur chattet", nl: "Robot die alleen chat" },
          { en: "Chat room moderator", es: "Moderador de sala de chat", de: "Chatroom-Moderator", nl: "Chatroom moderator" },
          { en: "Instant messaging app", es: "Aplicación de mensajería instantánea", de: "Instant-Messaging-App", nl: "Instant messaging app" }
        ],
        correct: 0,
        explanation: {
          en: "A chatbot is an AI application that uses natural language processing to understand and respond to user inputs in conversational format, enabling automated customer service, virtual assistance, and interactive communication through text or voice interfaces.",
          es: "Un chatbot es una aplicación de IA que usa procesamiento de lenguaje natural para entender y responder a entradas de usuario en formato conversacional, habilitando servicio al cliente automatizado, asistencia virtual y comunicación interactiva a través de interfaces de texto o voz.",
          de: "Ein Chatbot ist eine KI-Anwendung, die natürliche Sprachverarbeitung verwendet, um Benutzereingaben im Gesprächsformat zu verstehen und darauf zu antworten, wodurch automatisierter Kundenservice, virtuelle Assistenz und interaktive Kommunikation durch Text- oder Sprachschnittstellen ermöglicht werden.",
          nl: "Een chatbot is een AI-applicatie die natuurlijke taalverwerking gebruikt om gebruikersinput in gespreksformaat te begrijpen en erop te reageren, waardoor geautomatiseerde klantenservice, virtuele assistentie en interactieve communicatie via tekst- of spraakinterfaces mogelijk wordt."
        }
      },
      {
        question: {
          en: "What does AI bias refer to?",
          es: "¿A qué se refiere el sesgo de IA?",
          de: "Worauf bezieht sich KI-Voreingenommenheit?",
          nl: "Waar verwijst AI-vooringenomenheid naar?"
        },
        options: [
          { en: "Unfair preferences in AI decision-making reflecting training data biases", es: "Preferencias injustas en la toma de decisiones de IA que reflejan sesgos de datos de entrenamiento", de: "Unfaire Präferenzen bei KI-Entscheidungen, die Voreingenommenheiten der Trainingsdaten widerspiegeln", nl: "Oneerlijke voorkeuren in AI-besluitvorming die vooroordelen in trainingsdata weerspiegelen" },
          { en: "AI systems favoring certain brands", es: "Sistemas de IA favoreciendo ciertas marcas", de: "KI-Systeme, die bestimmte Marken bevorzugen", nl: "AI-systemen die bepaalde merken bevoordelen" },
          { en: "AI preferring specific colors", es: "IA prefiriendo colores específicos", de: "KI bevorzugt bestimmte Farben", nl: "AI die specifieke kleuren verkiest" },
          { en: "Computers having personal opinions", es: "Computadoras teniendo opiniones personales", de: "Computer haben persönliche Meinungen", nl: "Computers die persoonlijke meningen hebben" }
        ],
        correct: 0,
        explanation: {
          en: "AI bias occurs when machine learning algorithms produce systematically prejudiced results due to biased training data or flawed assumptions, leading to unfair treatment of certain groups in applications like hiring, lending, or criminal justice.",
          es: "El sesgo de IA ocurre cuando los algoritmos de aprendizaje automático producen resultados sistemáticamente prejuiciosos debido a datos de entrenamiento sesgados o suposiciones defectuosas, llevando a un trato injusto de ciertos grupos en aplicaciones como contratación, préstamos o justicia penal.",
          de: "KI-Voreingenommenheit tritt auf, wenn maschinelle Lernalgorithmen systematisch voreingenommene Ergebnisse aufgrund voreingenommener Trainingsdaten oder fehlerhafter Annahmen produzieren, was zu unfairer Behandlung bestimmter Gruppen in Anwendungen wie Einstellung, Kreditvergabe oder Strafjustiz führt.",
          nl: "AI-vooringenomenheid treedt op wanneer machine learning algoritmen systematisch bevooroordeelde resultaten produceren vanwege bevooroordeelde trainingsdata of gebrekkige aannames, wat leidt tot oneerlijke behandeling van bepaalde groepen in toepassingen zoals aanwerving, kredietverlening of strafrecht."
        }
      },
      {
        question: {
          en: "What is the Turing Award often called?",
          es: "¿Cómo se llama a menudo el Premio Turing?",
          de: "Wie wird der Turing Award oft genannt?",
          nl: "Hoe wordt de Turing Award vaak genoemd?"
        },
        options: [
          { en: "Nobel Prize of Computer Science", es: "Premio Nobel de Ciencias de la Computación", de: "Nobelpreis der Informatik", nl: "Nobelprijs van de Informatica" },
          { en: "Oscar of Technology", es: "Oscar de la Tecnología", de: "Oscar der Technologie", nl: "Oscar van de Technologie" },
          { en: "Emmy of Computing", es: "Emmy de la Computación", de: "Emmy des Computing", nl: "Emmy van het Computing" },
          { en: "Grammy of Programming", es: "Grammy de la Programación", de: "Grammy der Programmierung", nl: "Grammy van het Programmeren" }
        ],
        correct: 0,
        explanation: {
          en: "The Turing Award, named after Alan Turing, is the most prestigious award in computer science and is often referred to as the 'Nobel Prize of Computer Science' for recognizing individuals for their lasting contributions to computing.",
          es: "El Premio Turing, nombrado en honor a Alan Turing, es el premio más prestigioso en ciencias de la computación y a menudo se le llama el 'Premio Nobel de Ciencias de la Computación' por reconocer a individuos por sus contribuciones duraderas a la computación.",
          de: "Der Turing Award, benannt nach Alan Turing, ist die prestigeträchtigste Auszeichnung in der Informatik und wird oft als 'Nobelpreis der Informatik' bezeichnet, um Personen für ihre dauerhaften Beiträge zur Informatik zu würdigen.",
          nl: "De Turing Award, vernoemd naar Alan Turing, is de meest prestigieuze prijs in de informatica en wordt vaak de 'Nobelprijs van de Informatica' genoemd voor het erkennen van individuen voor hun blijvende bijdragen aan de informatica."
        }
      },
      {
        question: {
          en: "What is federated learning?",
          es: "¿Qué es el aprendizaje federado?",
          de: "Was ist Federated Learning?",
          nl: "Wat is federated learning?"
        },
        options: [
          { en: "Training AI models across decentralized devices without sharing raw data", es: "Entrenar modelos de IA a través de dispositivos descentralizados sin compartir datos en bruto", de: "Trainieren von KI-Modellen über dezentrale Geräte ohne Austausch von Rohdaten", nl: "AI-modellen trainen over gedecentraliseerde apparaten zonder ruwe data te delen" },
          { en: "Government-controlled AI", es: "IA controlada por el gobierno", de: "Regierungskontrollierte KI", nl: "Door de overheid gecontroleerde AI" },
          { en: "Learning about federal laws", es: "Aprender sobre leyes federales", de: "Über Bundesgesetze lernen", nl: "Leren over federale wetten" },
          { en: "Combining multiple AI companies", es: "Combinar múltiples compañías de IA", de: "Mehrere KI-Unternehmen kombinieren", nl: "Meerdere AI-bedrijven combineren" }
        ],
        correct: 0,
        explanation: {
          en: "Federated learning is a machine learning approach where models are trained across multiple decentralized devices or servers holding local data samples, without exchanging raw data, thus preserving privacy while enabling collaborative learning.",
          es: "El aprendizaje federado es un enfoque de aprendizaje automático donde los modelos se entrenan a través de múltiples dispositivos o servidores descentralizados que contienen muestras de datos locales, sin intercambiar datos en bruto, preservando así la privacidad mientras permite el aprendizaje colaborativo.",
          de: "Federated Learning ist ein maschineller Lernansatz, bei dem Modelle über mehrere dezentrale Geräte oder Server trainiert werden, die lokale Datenproben enthalten, ohne Rohdaten auszutauschen, wodurch die Privatsphäre gewahrt und gleichzeitig kollaboratives Lernen ermöglicht wird.",
          nl: "Federated learning is een machine learning benadering waarbij modellen worden getraind over meerdere gedecentraliseerde apparaten of servers die lokale datasamples bevatten, zonder ruwe data uit te wisselen, waardoor privacy wordt behouden terwijl collaboratief leren mogelijk wordt."
        }
      },
      {
        question: {
          en: "What is adversarial AI?",
          es: "¿Qué es la IA adversarial?",
          de: "Was ist adversariale KI?",
          nl: "Wat is adversariële AI?"
        },
        options: [
          { en: "AI systems designed to compete against each other to improve performance", es: "Sistemas de IA diseñados para competir entre sí para mejorar el rendimiento", de: "KI-Systeme, die darauf ausgelegt sind, gegeneinander zu konkurrieren, um die Leistung zu verbessern", nl: "AI-systemen ontworpen om tegen elkaar te concurreren om prestaties te verbeteren" },
          { en: "AI that hates humans", es: "IA que odia a los humanos", de: "KI, die Menschen hasst", nl: "AI die mensen haat" },
          { en: "Hostile computer viruses", es: "Virus informáticos hostiles", de: "Feindselige Computerviren", nl: "Vijandige computervirussen" },
          { en: "AI used in warfare only", es: "IA usada solo en guerra", de: "KI nur im Krieg verwendet", nl: "AI alleen gebruikt in oorlogvoering" }
        ],
        correct: 0,
        explanation: {
          en: "Adversarial AI involves training systems where two neural networks compete against each other - one generates fake data while the other tries to detect it, leading to improvements in both systems. Generative Adversarial Networks (GANs) are a famous example.",
          es: "La IA adversarial involucra entrenar sistemas donde dos redes neuronales compiten entre sí - una genera datos falsos mientras la otra trata de detectarlos, llevando a mejoras en ambos sistemas. Las Redes Generativas Adversarias (GAN) son un ejemplo famoso.",
          de: "Adversariale KI beinhaltet das Training von Systemen, bei denen zwei neuronale Netzwerke gegeneinander konkurrieren - eines generiert gefälschte Daten, während das andere versucht, sie zu erkennen, was zu Verbesserungen in beiden Systemen führt. Generative Adversarial Networks (GANs) sind ein bekanntes Beispiel.",
          nl: "Adversariële AI houdt in dat systemen worden getraind waarbij twee neurale netwerken tegen elkaar concurreren - één genereert nep-data terwijl de andere probeert het te detecteren, wat leidt tot verbeteringen in beide systemen. Generative Adversarial Networks (GANs) zijn een beroemd voorbeeld."
        }
      },
      {
        question: {
          en: "What is the main goal of explainable AI (XAI)?",
          es: "¿Cuál es el objetivo principal de la IA explicable (XAI)?",
          de: "Was ist das Hauptziel von erklärbarer KI (XAI)?",
          nl: "Wat is het hoofddoel van verklaarbare AI (XAI)?"
        },
        options: [
          { en: "Making AI decision-making processes transparent and understandable", es: "Hacer transparentes y comprensibles los procesos de toma de decisiones de IA", de: "KI-Entscheidungsprozesse transparent und verständlich machen", nl: "AI-besluitvormingsprocessen transparant en begrijpelijk maken" },
          { en: "Making AI systems explain themselves verbally", es: "Hacer que los sistemas de IA se expliquen verbalmente", de: "KI-Systeme dazu bringen, sich verbal zu erklären", nl: "AI-systemen laten zichzelf verbaal uitleggen" },
          { en: "Creating AI for teachers", es: "Crear IA para maestros", de: "KI für Lehrer erstellen", nl: "AI creëren voor leraren" },
          { en: "Developing AI instruction manuals", es: "Desarrollar manuales de instrucciones de IA", de: "KI-Bedienungsanleitungen entwickeln", nl: "AI-handleidingen ontwikkelen" }
        ],
        correct: 0,
        explanation: {
          en: "Explainable AI aims to create AI systems whose decisions and reasoning processes can be understood and interpreted by humans, increasing trust, accountability, and enabling better debugging and improvement of AI systems, especially in critical applications.",
          es: "La IA explicable busca crear sistemas de IA cuyas decisiones y procesos de razonamiento puedan ser entendidos e interpretados por humanos, aumentando la confianza, responsabilidad y permitiendo mejor depuración y mejora de los sistemas de IA, especialmente en aplicaciones críticas.",
          de: "Erklärbare KI zielt darauf ab, KI-Systeme zu schaffen, deren Entscheidungen und Denkprozesse von Menschen verstanden und interpretiert werden können, wodurch Vertrauen und Verantwortlichkeit erhöht und bessere Fehlerbehebung und Verbesserung von KI-Systemen ermöglicht wird, insbesondere in kritischen Anwendungen.",
          nl: "Verklaarbare AI heeft als doel AI-systemen te creëren waarvan de beslissingen en redeneringsprocessen door mensen kunnen worden begrepen en geïnterpreteerd, waardoor vertrouwen en verantwoordelijkheid worden vergroot en betere debugging en verbetering van AI-systemen mogelijk wordt, vooral in kritieke toepassingen."
        }
      },
      {
        question: {
          en: "What is edge AI?",
          es: "¿Qué es la IA en el borde?",
          de: "Was ist Edge AI?",
          nl: "Wat is edge AI?"
        },
        options: [
          { en: "AI processing performed locally on devices rather than in the cloud", es: "Procesamiento de IA realizado localmente en dispositivos en lugar de en la nube", de: "KI-Verarbeitung, die lokal auf Geräten statt in der Cloud durchgeführt wird", nl: "AI-verwerking uitgevoerd lokaal op apparaten in plaats van in de cloud" },
          { en: "AI that works on cliff edges", es: "IA que funciona en bordes de acantilados", de: "KI, die an Klippenrändern funktioniert", nl: "AI die werkt op klifranden" },
          { en: "Cutting-edge AI technology", es: "Tecnología de IA de vanguardia", de: "Hochmoderne KI-Technologie", nl: "Geavanceerde AI-technologie" },
          { en: "AI for sharpening images", es: "IA para enfocar imágenes", de: "KI zum Schärfen von Bildern", nl: "AI voor het scherpen van afbeeldingen" }
        ],
        correct: 0,
        explanation: {
          en: "Edge AI refers to running artificial intelligence algorithms locally on devices (like smartphones, IoT devices, autonomous vehicles) rather than sending data to cloud servers, enabling faster response times, reduced bandwidth usage, and improved privacy.",
          es: "La IA en el borde se refiere a ejecutar algoritmos de inteligencia artificial localmente en dispositivos (como teléfonos inteligentes, dispositivos IoT, vehículos autónomos) en lugar de enviar datos a servidores en la nube, habilitando tiempos de respuesta más rápidos, uso reducido de ancho de banda y privacidad mejorada.",
          de: "Edge AI bezieht sich auf das lokale Ausführen von KI-Algorithmen auf Geräten (wie Smartphones, IoT-Geräte, autonome Fahrzeuge) anstatt Daten an Cloud-Server zu senden, wodurch schnellere Antwortzeiten, reduzierte Bandbreitennutzung und verbesserte Privatsphäre ermöglicht werden.",
          nl: "Edge AI verwijst naar het lokaal uitvoeren van kunstmatige intelligentie algoritmen op apparaten (zoals smartphones, IoT-apparaten, autonome voertuigen) in plaats van data naar cloud servers te sturen, waardoor snellere responstijden, verminderd bandbreedtegebruik en verbeterde privacy mogelijk wordt."
        }
      },
      {
        question: {
          en: "What is the goal of artificial life (ALife)?",
          es: "¿Cuál es el objetivo de la vida artificial (VidaA)?",
          de: "Was ist das Ziel des künstlichen Lebens (ALife)?",
          nl: "Wat is het doel van kunstmatig leven (ALife)?"
        },
        options: [
          { en: "Simulating and understanding living systems through computational models", es: "Simular y entender sistemas vivos a través de modelos computacionales", de: "Lebende Systeme durch Rechenmodelle simulieren und verstehen", nl: "Levende systemen simuleren en begrijpen door computationele modellen" },
          { en: "Creating robot pets", es: "Crear mascotas robot", de: "Roboterhaustiere erstellen", nl: "Robothuisdieren creëren" },
          { en: "Extending human lifespan", es: "Extender la vida humana", de: "Menschliche Lebensspanne verlängern", nl: "Menselijke levensduur verlengen" },
          { en: "Building artificial organs", es: "Construir órganos artificiales", de: "Künstliche Organe bauen", nl: "Kunstmatige organen bouwen" }
        ],
        correct: 0,
        explanation: {
          en: "Artificial life is an interdisciplinary field that studies life-like phenomena in artificial systems, using computer simulations and models to understand evolution, emergence, complexity, and self-organization in biological and life-like systems.",
          es: "La vida artificial es un campo interdisciplinario que estudia fenómenos similares a la vida en sistemas artificiales, usando simulaciones computacionales y modelos para entender evolución, emergencia, complejidad y auto-organización en sistemas biológicos y similares a la vida.",
          de: "Künstliches Leben ist ein interdisziplinäres Feld, das lebensähnliche Phänomene in künstlichen Systemen untersucht und Computersimulationen und Modelle verwendet, um Evolution, Emergenz, Komplexität und Selbstorganisation in biologischen und lebensähnlichen Systemen zu verstehen.",
          nl: "Kunstmatig leven is een interdisciplinair veld dat levensachtige fenomenen in kunstmatige systemen bestudeert, met behulp van computersimulaties en modellen om evolutie, emergentie, complexiteit en zelforganisatie in biologische en levensachtige systemen te begrijpen."
        }
      },
      {
        question: {
          en: "What is quantum machine learning?",
          es: "¿Qué es el aprendizaje automático cuántico?",
          de: "Was ist Quanten-Maschinelles Lernen?",
          nl: "Wat is quantum machine learning?"
        },
        options: [
          { en: "Using quantum computing principles to enhance machine learning algorithms", es: "Usar principios de computación cuántica para mejorar algoritmos de aprendizaje automático", de: "Quantencomputing-Prinzipien zur Verbesserung von maschinellen Lernalgorithmen verwenden", nl: "Quantumcomputing principes gebruiken om machine learning algoritmen te verbeteren" },
          { en: "Learning about quantum physics", es: "Aprender sobre física cuántica", de: "Über Quantenphysik lernen", nl: "Leren over quantumfysica" },
          { en: "Very small machine learning", es: "Aprendizaje automático muy pequeño", de: "Sehr kleines maschinelles Lernen", nl: "Heel kleine machine learning" },
          { en: "Uncertain machine learning", es: "Aprendizaje automático incierto", de: "Unsicheres maschinelles Lernen", nl: "Onzekere machine learning" }
        ],
        correct: 0,
        explanation: {
          en: "Quantum machine learning combines quantum computing with machine learning algorithms, potentially offering exponential speedups for certain computational tasks and enabling new approaches to pattern recognition, optimization, and data analysis.",
          es: "El aprendizaje automático cuántico combina la computación cuántica con algoritmos de aprendizaje automático, ofreciendo potencialmente aceleraciones exponenciales para ciertas tareas computacionales y habilitando nuevos enfoques para reconocimiento de patrones, optimización y análisis de datos.",
          de: "Quanten-Maschinelles Lernen kombiniert Quantencomputing mit maschinellen Lernalgorithmen, bietet möglicherweise exponentielle Beschleunigungen für bestimmte Rechenaufgaben und ermöglicht neue Ansätze für Mustererkennung, Optimierung und Datenanalyse.",
          nl: "Quantum machine learning combineert quantumcomputing met machine learning algoritmen, wat mogelijk exponentiële versnellingen biedt voor bepaalde computationele taken en nieuwe benaderingen mogelijk maakt voor patroonherkenning, optimalisatie en data-analyse."
        }
      },
      {
        question: {
          en: "What is AutoML (Automated Machine Learning)?",
          es: "¿Qué es AutoML (Aprendizaje Automático Automatizado)?",
          de: "Was ist AutoML (Automatisiertes Maschinelles Lernen)?",
          nl: "Wat is AutoML (Geautomatiseerde Machine Learning)?"
        },
        options: [
          { en: "Automating the process of building and deploying machine learning models", es: "Automatizar el proceso de construcción e implementación de modelos de aprendizaje automático", de: "Automatisierung des Prozesses zur Erstellung und Bereitstellung von maschinellen Lernmodellen", nl: "Automatiseren van het proces van bouwen en implementeren van machine learning modellen" },
          { en: "Self-driving cars only", es: "Solo automóviles autónomos", de: "Nur selbstfahrende Autos", nl: "Alleen zelfrijdende auto's" },
          { en: "Automatic car manufacturing", es: "Fabricación automática de automóviles", de: "Automatische Automobilherstellung", nl: "Automatische autoproductie" },
          { en: "Machine learning for automotive industry", es: "Aprendizaje automático para la industria automotriz", de: "Maschinelles Lernen für die Automobilindustrie", nl: "Machine learning voor de auto-industrie" }
        ],
        correct: 0,
        explanation: {
          en: "AutoML automates the time-consuming, iterative tasks of machine learning model development, including feature selection, algorithm selection, hyperparameter tuning, and model evaluation, making machine learning more accessible to non-experts.",
          es: "AutoML automatiza las tareas iterativas y que consumen tiempo del desarrollo de modelos de aprendizaje automático, incluyendo selección de características, selección de algoritmos, ajuste de hiperparámetros y evaluación de modelos, haciendo el aprendizaje automático más accesible para no expertos.",
          de: "AutoML automatisiert die zeitaufwändigen, iterativen Aufgaben der Entwicklung maschineller Lernmodelle, einschließlich Merkmalsauswahl, Algorithmusauswahl, Hyperparameter-Tuning und Modellbewertung, wodurch maschinelles Lernen für Nicht-Experten zugänglicher wird.",
          nl: "AutoML automatiseert de tijdrovende, iteratieve taken van machine learning modelontwikkeling, inclusief feature selectie, algoritme selectie, hyperparameter tuning en modelevaluatie, waardoor machine learning toegankelijker wordt voor niet-experts."
        }
      },
      {
        question: {
          en: "What is the primary concern of AI safety research?",
          es: "¿Cuál es la preocupación principal de la investigación en seguridad de IA?",
          de: "Was ist das Hauptanliegen der KI-Sicherheitsforschung?",
          nl: "Wat is de primaire zorg van AI-veiligheidsonderzoek?"
        },
        options: [
          { en: "Ensuring AI systems behave safely and align with human values", es: "Asegurar que los sistemas de IA se comporten de manera segura y se alineen con los valores humanos", de: "Sicherstellen, dass KI-Systeme sicher handeln und mit menschlichen Werten übereinstimmen", nl: "Ervoor zorgen dat AI-systemen veilig gedragen en overeenkomen met menselijke waarden" },
          { en: "Physical safety of computers", es: "Seguridad física de las computadoras", de: "Physische Sicherheit von Computern", nl: "Fysieke veiligheid van computers" },
          { en: "Antivirus software", es: "Software antivirus", de: "Antivirensoftware", nl: "Antivirussoftware" },
          { en: "Password protection", es: "Protección con contraseña", de: "Passwort-Schutz", nl: "Wachtwoordbeveiliging" }
        ],
        correct: 0,
        explanation: {
          en: "AI safety research focuses on developing methods to ensure that AI systems operate safely, reliably, and in alignment with human intentions and values, addressing risks of unintended harmful behaviors, especially as AI becomes more powerful and autonomous.",
          es: "La investigación en seguridad de IA se enfoca en desarrollar métodos para asegurar que los sistemas de IA operen de manera segura, confiable y en alineación con las intenciones y valores humanos, abordando riesgos de comportamientos dañinos no intencionados, especialmente a medida que la IA se vuelve más poderosa y autónoma.",
          de: "KI-Sicherheitsforschung konzentriert sich auf die Entwicklung von Methoden, um sicherzustellen, dass KI-Systeme sicher, zuverlässig und in Übereinstimmung mit menschlichen Absichten und Werten operieren, wobei Risiken unbeabsichtigter schädlicher Verhaltensweisen angegangen werden, insbesondere da KI mächtiger und autonomer wird.",
          nl: "AI-veiligheidsonderzoek richt zich op het ontwikkelen van methoden om ervoor te zorgen dat AI-systemen veilig, betrouwbaar en in overeenstemming met menselijke intenties en waarden opereren, waarbij risico's van onbedoelde schadelijke gedragingen worden aangepakt, vooral naarmate AI krachtiger en autonomer wordt."
        }
      },
      {
        question: {
          en: "What milestone achievement made AlphaGo famous?",
          es: "¿Qué logro hito hizo famoso a AlphaGo?",
          de: "Welche Meilenstein-Leistung machte AlphaGo berühmt?",
          nl: "Welke mijlpaal prestatie maakte AlphaGo beroemd?"
        },
        options: [
          { en: "Defeating world champion Lee Sedol at the game of Go", es: "Derrotar al campeón mundial Lee Sedol en el juego de Go", de: "Weltmeister Lee Sedol im Go-Spiel besiegen", nl: "Wereldkampioen Lee Sedol verslaan in het spel Go" },
          { en: "Winning at chess", es: "Ganar en ajedrez", de: "Beim Schach gewinnen", nl: "Winnen bij schaken" },
          { en: "Solving mathematical theorems", es: "Resolver teoremas matemáticos", de: "Mathematische Theoreme lösen", nl: "Wiskundige stellingen oplossen" },
          { en: "Passing the Turing Test", es: "Pasar la Prueba de Turing", de: "Den Turing-Test bestehen", nl: "De Turing Test doorstaan" }
        ],
        correct: 0,
        explanation: {
          en: "AlphaGo, developed by DeepMind, made headlines in 2016 when it defeated world champion Lee Sedol 4-1 in the ancient game of Go, previously thought to be too complex for computers due to its vast number of possible moves and strategic depth.",
          es: "AlphaGo, desarrollado por DeepMind, hizo titulares en 2016 cuando derrotó al campeón mundial Lee Sedol 4-1 en el antiguo juego de Go, previamente pensado como demasiado complejo para las computadoras debido a su vasto número de movimientos posibles y profundidad estratégica.",
          de: "AlphaGo, entwickelt von DeepMind, machte 2016 Schlagzeilen, als es Weltmeister Lee Sedol 4-1 im alten Spiel Go besiegte, das zuvor als zu komplex für Computer galt aufgrund seiner riesigen Anzahl möglicher Züge und strategischen Tiefe.",
          nl: "AlphaGo, ontwikkeld door DeepMind, maakte krantenkoppen in 2016 toen het wereldkampioen Lee Sedol 4-1 versloeg in het oude spel Go, voorheen beschouwd als te complex voor computers vanwege het enorme aantal mogelijke zetten en strategische diepte."
        }
      },
      {
        question: {
          en: "What does 'hallucination' mean in the context of AI language models?",
          es: "¿Qué significa 'alucinación' en el contexto de modelos de lenguaje de IA?",
          de: "Was bedeutet 'Halluzination' im Kontext von KI-Sprachmodellen?",
          nl: "Wat betekent 'hallucinatie' in de context van AI-taalmodellen?"
        },
        options: [
          { en: "Generating false or nonsensical information that seems plausible", es: "Generar información falsa o sin sentido que parece plausible", de: "Falsche oder unsinnige Informationen generieren, die plausibel erscheinen", nl: "Het genereren van valse of zinloze informatie die plausibel lijkt" },
          { en: "AI systems seeing visual illusions", es: "Sistemas de IA viendo ilusiones visuales", de: "KI-Systeme sehen visuelle Illusionen", nl: "AI-systemen die visuele illusies zien" },
          { en: "AI becoming creative", es: "IA volviéndose creativa", de: "KI wird kreativ", nl: "AI wordt creatief" },
          { en: "Computer screens displaying errors", es: "Pantallas de computadora mostrando errores", de: "Computerbildschirme zeigen Fehler", nl: "Computerschermen tonen fouten" }
        ],
        correct: 0,
        explanation: {
          en: "AI hallucination refers to when language models generate information that is factually incorrect, nonsensical, or fabricated, but is presented in a confident and seemingly authoritative manner, making it appear credible despite being false.",
          es: "La alucinación de IA se refiere a cuando los modelos de lenguaje generan información que es factualmente incorrecta, sin sentido o fabricada, pero se presenta de manera confiada y aparentemente autoritaria, haciéndola parecer creíble a pesar de ser falsa.",
          de: "KI-Halluzination bezieht sich darauf, wenn Sprachmodelle Informationen generieren, die faktisch falsch, unsinnig oder erfunden sind, aber auf eine selbstbewusste und scheinbar autoritative Weise präsentiert werden, wodurch sie glaubwürdig erscheinen, obwohl sie falsch sind.",
          nl: "AI-hallucinatie verwijst naar wanneer taalmodellen informatie genereren die feitelijk onjuist, zinloos of verzonnen is, maar wordt gepresenteerd op een zelfverzekerde en schijnbaar gezaghebbende manier, waardoor het geloofwaardig lijkt ondanks dat het vals is."
        }
      },
      {
        question: {
          en: "What is Natural Language Processing (NLP)?",
          es: "¿Qué es el Procesamiento de Lenguaje Natural (PLN)?",
          de: "Was ist Natural Language Processing (NLP)?",
          nl: "Wat is Natural Language Processing (NLP)?"
        },
        options: [
          { en: "AI that understands and generates human language", es: "IA que entiende y genera lenguaje humano", de: "KI, die menschliche Sprache versteht und generiert", nl: "AI die menselijke taal begrijpt en genereert" },
          { en: "Processing natural resources", es: "Procesamiento de recursos naturales", de: "Verarbeitung natürlicher Ressourcen", nl: "Verwerking van natuurlijke hulpbronnen" },
          { en: "Language translation software", es: "Software de traducción de idiomas", de: "Sprachübersetzungssoftware", nl: "Taalvertaalsoftware" },
          { en: "Voice recording technology", es: "Tecnología de grabación de voz", de: "Sprachaufnahmetechnologie", nl: "Spraakopnametechnologie" }
        ],
        correct: 0,
        explanation: {
          en: "NLP enables computers to understand, interpret, and generate human language in a valuable way, powering applications like chatbots, translation services, and sentiment analysis.",
          es: "PLN permite a las computadoras entender, interpretar y generar lenguaje humano de manera valiosa, impulsando aplicaciones como chatbots, servicios de traducción y análisis de sentimientos.",
          de: "NLP ermöglicht es Computern, menschliche Sprache auf wertvolle Weise zu verstehen, zu interpretieren und zu generieren, und treibt Anwendungen wie Chatbots, Übersetzungsdienste und Stimmungsanalyse an.",
          nl: "NLP stelt computers in staat om menselijke taal op waardevolle wijze te begrijpen, interpreteren en genereren, en drijft toepassingen aan zoals chatbots, vertaaldiensten en sentimentanalyse."
        }
      },
      {
        question: {
          en: "What is Computer Vision in AI?",
          es: "¿Qué es la Visión por Computadora en IA?",
          de: "Was ist Computer Vision in der KI?",
          nl: "Wat is Computer Vision in AI?"
        },
        options: [
          { en: "AI that can interpret and analyze visual information", es: "IA que puede interpretar y analizar información visual", de: "KI, die visuelle Informationen interpretieren und analysieren kann", nl: "AI die visuele informatie kan interpreteren en analyseren" },
          { en: "Computer screen technology", es: "Tecnología de pantalla de computadora", de: "Computer-Bildschirmtechnologie", nl: "Computerschermtechnologie" },
          { en: "Digital camera software", es: "Software de cámara digital", de: "Digitalkamera-Software", nl: "Digitale camerasoftware" },
          { en: "Virtual reality systems", es: "Sistemas de realidad virtual", de: "Virtual-Reality-Systeme", nl: "Virtual reality systemen" }
        ],
        correct: 0,
        explanation: {
          en: "Computer Vision enables machines to identify, process, and analyze visual content from the real world, including object recognition, facial recognition, and medical imaging analysis.",
          es: "La Visión por Computadora permite a las máquinas identificar, procesar y analizar contenido visual del mundo real, incluyendo reconocimiento de objetos, reconocimiento facial y análisis de imágenes médicas.",
          de: "Computer Vision ermöglicht es Maschinen, visuelle Inhalte aus der realen Welt zu identifizieren, zu verarbeiten und zu analysieren, einschließlich Objekterkennung, Gesichtserkennung und medizinischer Bildanalyse.",
          nl: "Computer Vision stelt machines in staat om visuele inhoud uit de echte wereld te identificeren, verwerken en analyseren, inclusief objectherkenning, gezichtsherkenning en medische beeldanalyse."
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
          { en: "Learning through trial and error with rewards and penalties", es: "Aprender a través de ensayo y error con recompensas y penalizaciones", de: "Lernen durch Versuch und Irrtum mit Belohnungen und Strafen", nl: "Leren door vallen en opstaan met beloningen en straffen" },
          { en: "Strengthening computer hardware", es: "Fortalecimiento de hardware de computadora", de: "Stärkung von Computer-Hardware", nl: "Versterking van computerhardware" },
          { en: "Learning with supervision", es: "Aprender con supervisión", de: "Lernen mit Überwachung", nl: "Leren met supervisie" },
          { en: "Memorizing large datasets", es: "Memorizar grandes conjuntos de datos", de: "Auswendiglernen großer Datensätze", nl: "Memoriseren van grote datasets" }
        ],
        correct: 0,
        explanation: {
          en: "Reinforcement learning trains agents to make decisions by learning from the consequences of their actions, receiving rewards for good choices and penalties for bad ones, similar to how humans learn.",
          es: "El aprendizaje por refuerzo entrena agentes para tomar decisiones aprendiendo de las consecuencias de sus acciones, recibiendo recompensas por buenas elecciones y penalizaciones por malas, similar a como aprenden los humanos.",
          de: "Verstärkungslernen trainiert Agenten, Entscheidungen zu treffen, indem sie aus den Konsequenzen ihrer Handlungen lernen und Belohnungen für gute Entscheidungen und Strafen für schlechte erhalten, ähnlich wie Menschen lernen.",
          nl: "Reinforcement learning traint agenten om beslissingen te nemen door te leren van de gevolgen van hun acties, waarbij ze beloningen krijgen voor goede keuzes en straffen voor slechte, vergelijkbaar met hoe mensen leren."
        }
      },
      {
        question: {
          en: "What is an expert system in AI?",
          es: "¿Qué es un sistema experto en IA?",
          de: "Was ist ein Expertensystem in der KI?",
          nl: "Wat is een expertsysteem in AI?"
        },
        options: [
          { en: "AI system that emulates human expert decision-making", es: "Sistema de IA que emula la toma de decisiones de expertos humanos", de: "KI-System, das menschliche Expertenentscheidungen nachahmt", nl: "AI-systeem dat menselijke expertbesluitvorming nabootst" },
          { en: "Database management system", es: "Sistema de gestión de bases de datos", de: "Datenbankmanagementsystem", nl: "Database managementsysteem" },
          { en: "Computer security software", es: "Software de seguridad informática", de: "Computer-Sicherheitssoftware", nl: "Computerbeveiliging software" },
          { en: "Professional training program", es: "Programa de entrenamiento profesional", de: "Professionelles Trainingsprogramm", nl: "Professioneel trainingsprogramma" }
        ],
        correct: 0,
        explanation: {
          en: "Expert systems capture the knowledge and decision-making processes of human experts in specific domains, using rules and inference engines to provide expert-level advice and solutions.",
          es: "Los sistemas expertos capturan el conocimiento y los procesos de toma de decisiones de expertos humanos en dominios específicos, usando reglas y motores de inferencia para proporcionar consejos y soluciones de nivel experto.",
          de: "Expertensysteme erfassen das Wissen und die Entscheidungsprozesse menschlicher Experten in spezifischen Bereichen und verwenden Regeln und Inferenz-Engines, um Beratung und Lösungen auf Expertenniveau zu bieten.",
          nl: "Expertsystemen leggen de kennis en besluitvormingsprocessen van menselijke experts in specifieke domeinen vast, waarbij regels en inferentie-engines worden gebruikt om advies en oplossingen op expertniveau te bieden."
        }
      },
      {
        question: {
          en: "What is the main concern of AI ethics?",
          es: "¿Cuál es la principal preocupación de la ética de la IA?",
          de: "Was ist das Hauptanliegen der KI-Ethik?",
          nl: "Wat is de hoofdzorg van AI-ethiek?"
        },
        options: [
          { en: "Ensuring AI systems are fair, safe, and beneficial", es: "Asegurar que los sistemas de IA sean justos, seguros y beneficiosos", de: "Sicherstellen, dass KI-Systeme fair, sicher und nützlich sind", nl: "Zorgen dat AI-systemen eerlijk, veilig en voordelig zijn" },
          { en: "Maximizing computational speed", es: "Maximizar la velocidad computacional", de: "Maximierung der Rechengeschwindigkeit", nl: "Maximaliseren van rekenkracht" },
          { en: "Reducing hardware costs", es: "Reducir costos de hardware", de: "Reduzierung der Hardware-Kosten", nl: "Verlagen van hardwarekosten" },
          { en: "Improving internet connectivity", es: "Mejorar la conectividad a internet", de: "Verbesserung der Internetkonnektivität", nl: "Verbeteren van internetconnectiviteit" }
        ],
        correct: 0,
        explanation: {
          en: "AI ethics addresses critical issues like algorithmic bias, privacy protection, transparency, accountability, and ensuring AI systems benefit humanity while minimizing potential harms and risks.",
          es: "La ética de la IA aborda cuestiones críticas como el sesgo algorítmico, protección de privacidad, transparencia, responsabilidad y asegurar que los sistemas de IA beneficien a la humanidad mientras minimizan daños y riesgos potenciales.",
          de: "KI-Ethik behandelt kritische Themen wie algorithmische Verzerrung, Datenschutz, Transparenz, Verantwortlichkeit und stellt sicher, dass KI-Systeme der Menschheit nutzen, während potenzielle Schäden und Risiken minimiert werden.",
          nl: "AI-ethiek behandelt kritische kwesties zoals algoritmische vooringenomenheid, privacybescherming, transparantie, verantwoordelijkheid en zorgt ervoor dat AI-systemen de mensheid ten goede komen terwijl potentiële schade en risico's worden geminimaliseerd."
        }
      },
      {
        question: {
          en: "What is a transformer model in deep learning?",
          es: "¿Qué es un modelo transformer en aprendizaje profundo?",
          de: "Was ist ein Transformer-Modell im Deep Learning?",
          nl: "Wat is een transformer model in deep learning?"
        },
        options: [
          { en: "Architecture using attention mechanisms for sequence processing", es: "Arquitectura que usa mecanismos de atención para procesamiento de secuencias", de: "Architektur mit Aufmerksamkeitsmechanismen für Sequenzverarbeitung", nl: "Architectuur die aandachtsmechanismen gebruikt voor sequentieverwerking" },
          { en: "Robot that changes shape", es: "Robot que cambia de forma", de: "Roboter, der seine Form ändert", nl: "Robot die van vorm verandert" },
          { en: "Electrical voltage converter", es: "Convertidor de voltaje eléctrico", de: "Elektrischer Spannungswandler", nl: "Elektrische spanningsomzetter" },
          { en: "Data format converter", es: "Convertidor de formato de datos", de: "Datenformat-Konverter", nl: "Dataformaat converter" }
        ],
        correct: 0,
        explanation: {
          en: "Transformer models revolutionized NLP by using self-attention mechanisms to process sequences in parallel, enabling breakthroughs like GPT and BERT that can understand context and generate human-like text.",
          es: "Los modelos transformer revolucionaron PLN usando mecanismos de auto-atención para procesar secuencias en paralelo, habilitando avances como GPT y BERT que pueden entender contexto y generar texto similar al humano.",
          de: "Transformer-Modelle revolutionierten NLP durch Selbstaufmerksamkeitsmechanismen zur parallelen Sequenzverarbeitung, was Durchbrüche wie GPT und BERT ermöglichte, die Kontext verstehen und menschenähnlichen Text generieren können.",
          nl: "Transformer modellen revolutioneerden NLP door zelf-aandachtsmechanismen te gebruiken om sequenties parallel te verwerken, wat doorbraken mogelijk maakte zoals GPT en BERT die context kunnen begrijpen en mensachtige tekst kunnen genereren."
        }
      },
      {
        question: {
          en: "What is computer vision's role in autonomous vehicles?",
          es: "¿Cuál es el papel de la visión por computadora en vehículos autónomos?",
          de: "Welche Rolle spielt Computer Vision bei autonomen Fahrzeugen?",
          nl: "Wat is de rol van computer vision in autonome voertuigen?"
        },
        options: [
          { en: "Interpreting visual data from cameras and sensors for navigation", es: "Interpretar datos visuales de cámaras y sensores para navegación", de: "Interpretation visueller Daten von Kameras und Sensoren für Navigation", nl: "Interpreteren van visuele data van camera's en sensoren voor navigatie" },
          { en: "Managing fuel consumption", es: "Gestionar consumo de combustible", de: "Kraftstoffverbrauch verwalten", nl: "Brandstofverbruik beheren" },
          { en: "Playing entertainment content", es: "Reproducir contenido de entretenimiento", de: "Unterhaltungsinhalte abspielen", nl: "Entertainment content afspelen" },
          { en: "Controlling air conditioning", es: "Controlar aire acondicionado", de: "Klimaanlage steuern", nl: "Airconditioning bedienen" }
        ],
        correct: 0,
        explanation: {
          en: "Computer vision in autonomous vehicles processes real-time visual input from multiple cameras to detect objects, recognize traffic signs, identify lanes, assess distances, and make split-second navigation decisions for safe driving.",
          es: "La visión por computadora en vehículos autónomos procesa entrada visual en tiempo real de múltiples cámaras para detectar objetos, reconocer señales de tráfico, identificar carriles, evaluar distancias y tomar decisiones de navegación instantáneas para conducción segura.",
          de: "Computer Vision in autonomen Fahrzeugen verarbeitet Echtzeit-Bilddaten von mehreren Kameras, um Objekte zu erkennen, Verkehrszeichen zu identifizieren, Fahrspuren zu erkennen, Entfernungen zu bewerten und sofortige Navigationsentscheidungen für sicheres Fahren zu treffen.",
          nl: "Computer vision in autonome voertuigen verwerkt real-time visuele input van meerdere camera's om objecten te detecteren, verkeersborden te herkennen, rijstroken te identificeren, afstanden in te schatten en directe navigatiebeslissingen te maken voor veilig rijden."
        }
      },
      {
        question: {
          en: "What is the difference between narrow AI and general AI?",
          es: "¿Cuál es la diferencia entre IA estrecha e IA general?",
          de: "Was ist der Unterschied zwischen enger KI und allgemeiner KI?",
          nl: "Wat is het verschil tussen smalle AI en algemene AI?"
        },
        options: [
          { en: "Narrow AI excels in specific tasks, while general AI matches human intelligence across all domains", es: "IA estrecha sobresale en tareas específicas, mientras IA general iguala inteligencia humana en todos los dominios", de: "Enge KI übertrifft in spezifischen Aufgaben, während allgemeine KI menschliche Intelligenz in allen Bereichen erreicht", nl: "Smalle AI blinkt uit in specifieke taken, terwijl algemene AI menselijke intelligentie evenaart in alle domeinen" },
          { en: "Narrow AI is cheaper than general AI", es: "IA estrecha es más barata que IA general", de: "Enge KI ist billiger als allgemeine KI", nl: "Smalle AI is goedkoper dan algemene AI" },
          { en: "Narrow AI uses less memory", es: "IA estrecha usa menos memoria", de: "Enge KI verwendet weniger Speicher", nl: "Smalle AI gebruikt minder geheugen" },
          { en: "There is no difference", es: "No hay diferencia", de: "Es gibt keinen Unterschied", nl: "Er is geen verschil" }
        ],
        correct: 0,
        explanation: {
          en: "Current AI systems are 'narrow' - they excel at specific tasks like chess, image recognition, or language translation but cannot transfer knowledge between domains. General AI (AGI) would match human cognitive flexibility across all intellectual tasks, but doesn't exist yet.",
          es: "Los sistemas de IA actuales son 'estrechos' - sobresalen en tareas específicas como ajedrez, reconocimiento de imágenes o traducción de idiomas pero no pueden transferir conocimiento entre dominios. IA general (IAG) igualaría flexibilidad cognitiva humana en todas las tareas intelectuales, pero aún no existe.",
          de: "Aktuelle KI-Systeme sind 'eng' - sie übertreffen bei spezifischen Aufgaben wie Schach, Bilderkennung oder Sprachübersetzung, können aber kein Wissen zwischen Bereichen übertragen. Allgemeine KI (AKI) würde menschliche kognitive Flexibilität in allen intellektuellen Aufgaben erreichen, existiert aber noch nicht.",
          nl: "Huidige AI-systemen zijn 'smal' - ze blinken uit in specifieke taken zoals schaken, beeldherkenning of taalvertaling, maar kunnen geen kennis overdragen tussen domeinen. Algemene AI (AGI) zou menselijke cognitieve flexibiliteit evenaren in alle intellectuele taken, maar bestaat nog niet."
        }
      },
      {
        question: {
          en: "What is adversarial machine learning?",
          es: "¿Qué es el aprendizaje automático adversarial?",
          de: "Was ist adversariales maschinelles Lernen?",
          nl: "Wat is adversariaal machine learning?"
        },
        options: [
          { en: "Study of vulnerabilities where attackers fool AI systems with crafted inputs", es: "Estudio de vulnerabilidades donde atacantes engañan sistemas IA con entradas diseñadas", de: "Studie von Schwachstellen, bei denen Angreifer KI-Systeme mit manipulierten Eingaben täuschen", nl: "Studie van kwetsbaarheden waar aanvallers AI-systemen misleiden met bewerkte invoer" },
          { en: "AI systems competing against each other", es: "Sistemas IA compitiendo entre sí", de: "KI-Systeme, die gegeneinander konkurrieren", nl: "AI-systemen die tegen elkaar concurreren" },
          { en: "Training AI to be hostile", es: "Entrenar IA para ser hostil", de: "KI darauf trainieren, feindselig zu sein", nl: "AI trainen om vijandig te zijn" },
          { en: "Using AI for cyber warfare", es: "Usar IA para guerra cibernética", de: "KI für Cyberkrieg verwenden", nl: "AI gebruiken voor cyberoorlog" }
        ],
        correct: 0,
        explanation: {
          en: "Adversarial machine learning studies how small, carefully designed changes to inputs can cause AI systems to make wrong predictions, exposing security vulnerabilities and the need for robust AI systems resistant to such attacks.",
          es: "El aprendizaje automático adversarial estudia cómo cambios pequeños y cuidadosamente diseñados en las entradas pueden hacer que sistemas IA hagan predicciones incorrectas, exponiendo vulnerabilidades de seguridad y la necesidad de sistemas IA robustos resistentes a tales ataques.",
          de: "Adversariales maschinelles Lernen untersucht, wie kleine, sorgfältig entworfene Änderungen an Eingaben KI-Systeme dazu bringen können, falsche Vorhersagen zu treffen, was Sicherheitsschwachstellen aufdeckt und den Bedarf an robusten KI-Systemen zeigt, die gegen solche Angriffe resistent sind.",
          nl: "Adversariaal machine learning bestudeert hoe kleine, zorgvuldig ontworpen veranderingen aan invoer AI-systemen ertoe kunnen brengen verkeerde voorspellingen te maken, wat beveiligingskwetsbaarheden blootlegt en de behoefte aan robuuste AI-systemen die bestand zijn tegen dergelijke aanvallen."
        }
      },
      {
        question: {
          en: "What role does AI play in robotics?",
          es: "¿Qué papel juega la IA en robótica?",
          de: "Welche Rolle spielt KI in der Robotik?",
          nl: "Welke rol speelt AI in robotica?"
        },
        options: [
          { en: "Enables robots to perceive, learn, and make autonomous decisions", es: "Permite a robots percibir, aprender y tomar decisiones autónomas", de: "Ermöglicht Robotern wahrzunehmen, zu lernen und autonome Entscheidungen zu treffen", nl: "Stelt robots in staat om waar te nemen, te leren en autonome beslissingen te nemen" },
          { en: "Only controls robot movement", es: "Solo controla movimiento de robot", de: "Steuert nur Roboterbewegung", nl: "Controleert alleen robotbeweging" },
          { en: "Provides power to robots", es: "Proporciona energía a robots", de: "Versorgt Roboter mit Energie", nl: "Levert stroom aan robots" },
          { en: "Designs robot hardware", es: "Diseña hardware de robot", de: "Entwirft Roboter-Hardware", nl: "Ontwerpt robothardware" }
        ],
        correct: 0,
        explanation: {
          en: "AI in robotics combines computer vision, natural language processing, machine learning, and decision-making algorithms to create robots that can understand their environment, interact naturally with humans, and adapt to new situations.",
          es: "IA en robótica combina visión por computadora, procesamiento de lenguaje natural, aprendizaje automático y algoritmos de toma de decisiones para crear robots que pueden entender su entorno, interactuar naturalmente con humanos y adaptarse a nuevas situaciones.",
          de: "KI in der Robotik kombiniert Computer Vision, natürliche Sprachverarbeitung, maschinelles Lernen und Entscheidungsalgorithmen, um Roboter zu schaffen, die ihre Umgebung verstehen, natürlich mit Menschen interagieren und sich an neue Situationen anpassen können.",
          nl: "AI in robotica combineert computer vision, natuurlijke taalverwerking, machine learning en besluitvormingsalgoritmen om robots te creëren die hun omgeving kunnen begrijpen, natuurlijk kunnen interacteren met mensen en zich kunnen aanpassen aan nieuwe situaties."
        }
      },
      {
        question: {
          en: "What is federated learning in AI?",
          es: "¿Qué es el aprendizaje federado en IA?",
          de: "Was ist föderiertes Lernen in der KI?",
          nl: "Wat is federated learning in AI?"
        },
        options: [
          { en: "Training AI models across multiple devices while keeping data local", es: "Entrenar modelos IA a través de múltiples dispositivos manteniendo datos locales", de: "Training von KI-Modellen über mehrere Geräte hinweg, während Daten lokal bleiben", nl: "Trainen van AI-modellen op meerdere apparaten terwijl data lokaal blijft" },
          { en: "Government-controlled AI research", es: "Investigación IA controlada por gobierno", de: "Regierungskontrollierte KI-Forschung", nl: "Door overheid gecontroleerd AI-onderzoek" },
          { en: "AI systems working only in federal buildings", es: "Sistemas IA trabajando solo en edificios federales", de: "KI-Systeme, die nur in Bundesgebäuden arbeiten", nl: "AI-systemen die alleen in federale gebouwen werken" },
          { en: "International AI cooperation treaties", es: "Tratados de cooperación IA internacional", de: "Internationale KI-Kooperationsverträge", nl: "Internationale AI-samenwerkingsverdragen" }
        ],
        correct: 0,
        explanation: {
          en: "Federated learning allows multiple devices or organizations to collaboratively train AI models without sharing their raw data, preserving privacy while benefiting from collective learning across distributed datasets.",
          es: "El aprendizaje federado permite a múltiples dispositivos u organizaciones entrenar colaborativamente modelos IA sin compartir sus datos brutos, preservando privacidad mientras se benefician del aprendizaje colectivo a través de conjuntos de datos distribuidos.",
          de: "Föderiertes Lernen ermöglicht es mehreren Geräten oder Organisationen, KI-Modelle gemeinsam zu trainieren, ohne ihre Rohdaten zu teilen, wodurch die Privatsphäre gewahrt bleibt und gleichzeitig vom kollektiven Lernen über verteilte Datensätze profitiert wird.",
          nl: "Federated learning stelt meerdere apparaten of organisaties in staat om gezamenlijk AI-modellen te trainen zonder hun ruwe data te delen, waardoor privacy wordt bewaard terwijl ze profiteren van collectief leren over gedistribueerde datasets."
        }
      },
      {
        question: {
          en: "What is the alignment problem in AI safety?",
          es: "¿Qué es el problema de alineación en seguridad IA?",
          de: "Was ist das Alignment-Problem in der KI-Sicherheit?",
          nl: "Wat is het alignment probleem in AI-veiligheid?"
        },
        options: [
          { en: "Ensuring AI systems pursue goals that align with human values and intentions", es: "Asegurar que sistemas IA persigan objetivos que se alineen con valores e intenciones humanas", de: "Sicherstellen, dass KI-Systeme Ziele verfolgen, die mit menschlichen Werten und Absichten übereinstimmen", nl: "Zorgen dat AI-systemen doelen nastreven die overeenstemmen met menselijke waarden en intenties" },
          { en: "Organizing AI hardware components", es: "Organizar componentes hardware IA", de: "Organisation von KI-Hardware-Komponenten", nl: "Organiseren van AI-hardware componenten" },
          { en: "Aligning computer screens properly", es: "Alinear pantallas de computadora apropiadamente", de: "Computerbildschirme richtig ausrichten", nl: "Computerschermen goed uitlijnen" },
          { en: "Coordinating AI research timelines", es: "Coordinar cronogramas de investigación IA", de: "Koordination von KI-Forschungszeitplänen", nl: "Coördineren van AI-onderzoek tijdlijnen" }
        ],
        correct: 0,
        explanation: {
          en: "The alignment problem addresses the critical challenge of ensuring that powerful AI systems understand and pursue human-intended goals rather than optimizing for unintended consequences that could be harmful despite appearing to satisfy their programmed objectives.",
          es: "El problema de alineación aborda el desafío crítico de asegurar que sistemas IA poderosos entiendan y persigan objetivos humanos pretendidos en lugar de optimizar para consecuencias no intencionales que podrían ser dañinas a pesar de parecer satisfacer sus objetivos programados.",
          de: "Das Alignment-Problem behandelt die kritische Herausforderung sicherzustellen, dass mächtige KI-Systeme menschlich beabsichtigte Ziele verstehen und verfolgen, anstatt für unbeabsichtigte Konsequenzen zu optimieren, die schädlich sein könnten, obwohl sie ihre programmierten Ziele zu erfüllen scheinen.",
          nl: "Het alignment probleem behandelt de kritieke uitdaging van ervoor zorgen dat krachtige AI-systemen menselijk bedoelde doelen begrijpen en nastreven in plaats van optimaliseren voor onbedoelde gevolgen die schadelijk kunnen zijn ondanks dat ze lijken te voldoen aan hun geprogrammeerde doelstellingen."
        }
      },
      {
        question: {
          en: "What is explainable AI (XAI)?",
          es: "¿Qué es IA explicable (XAI)?",
          de: "Was ist erklärbare KI (XAI)?",
          nl: "Wat is verklaarbare AI (XAI)?"
        },
        options: [
          { en: "AI systems that can provide understandable explanations for their decisions", es: "Sistemas IA que pueden proporcionar explicaciones comprensibles para sus decisiones", de: "KI-Systeme, die verständliche Erklärungen für ihre Entscheidungen liefern können", nl: "AI-systemen die begrijpelijke uitleg kunnen geven voor hun beslissingen" },
          { en: "AI that only uses simple algorithms", es: "IA que solo usa algoritmos simples", de: "KI, die nur einfache Algorithmen verwendet", nl: "AI die alleen eenvoudige algoritmen gebruikt" },
          { en: "AI designed for teaching purposes", es: "IA diseñada para propósitos educativos", de: "KI, die für Bildungszwecke entwickelt wurde", nl: "AI ontworpen voor educatieve doeleinden" },
          { en: "AI systems with transparent code", es: "Sistemas IA con código transparente", de: "KI-Systeme mit transparentem Code", nl: "AI-systemen met transparante code" }
        ],
        correct: 0,
        explanation: {
          en: "Explainable AI addresses the 'black box' problem by developing methods that allow AI systems to provide clear, understandable explanations for their decisions, which is crucial for trust, accountability, and regulatory compliance in critical applications.",
          es: "IA explicable aborda el problema de 'caja negra' desarrollando métodos que permiten a sistemas IA proporcionar explicaciones claras y comprensibles para sus decisiones, lo cual es crucial para confianza, responsabilidad y cumplimiento regulatorio en aplicaciones críticas.",
          de: "Erklärbare KI behandelt das 'Black Box'-Problem durch die Entwicklung von Methoden, die es KI-Systemen ermöglichen, klare, verständliche Erklärungen für ihre Entscheidungen zu liefern, was für Vertrauen, Verantwortlichkeit und regulatorische Compliance in kritischen Anwendungen entscheidend ist.",
          nl: "Verklaarbare AI pakt het 'black box' probleem aan door methoden te ontwikkelen die AI-systemen in staat stellen duidelijke, begrijpelijke uitleg te geven voor hun beslissingen, wat cruciaal is voor vertrouwen, verantwoordelijkheid en regelgeving compliance in kritieke toepassingen."
        }
      },
      {
        question: {
          en: "What is the role of AI in healthcare?",
          es: "¿Cuál es el papel de la IA en atención médica?",
          de: "Welche Rolle spielt KI im Gesundheitswesen?",
          nl: "Wat is de rol van AI in de gezondheidszorg?"
        },
        options: [
          { en: "Assists in diagnosis, drug discovery, personalized treatment, and medical imaging", es: "Asiste en diagnóstico, descubrimiento de medicamentos, tratamiento personalizado e imágenes médicas", de: "Unterstützt bei Diagnose, Arzneimittelentdeckung, personalisierter Behandlung und medizinischer Bildgebung", nl: "Helpt bij diagnose, medicijnontwikkeling, gepersonaliseerde behandeling en medische beeldvorming" },
          { en: "Only manages hospital appointments", es: "Solo gestiona citas hospitalarias", de: "Verwaltet nur Krankenhaustermine", nl: "Beheert alleen ziekenhuis afspraken" },
          { en: "Replaces all human doctors", es: "Reemplaza todos doctores humanos", de: "Ersetzt alle menschlichen Ärzte", nl: "Vervangt alle menselijke artsen" },
          { en: "Only processes medical bills", es: "Solo procesa facturas médicas", de: "Verarbeitet nur medizinische Rechnungen", nl: "Verwerkt alleen medische rekeningen" }
        ],
        correct: 0,
        explanation: {
          en: "AI in healthcare revolutionizes patient care through advanced medical imaging analysis, early disease detection, drug discovery acceleration, personalized treatment recommendations, and predictive analytics for better health outcomes.",
          es: "IA en atención médica revoluciona el cuidado del paciente a través de análisis avanzado de imágenes médicas, detección temprana de enfermedades, aceleración del descubrimiento de medicamentos, recomendaciones de tratamiento personalizado y análisis predictivo para mejores resultados de salud.",
          de: "KI im Gesundheitswesen revolutioniert die Patientenversorgung durch fortgeschrittene medizinische Bildanalyse, Früherkennung von Krankheiten, Beschleunigung der Arzneimittelentdeckung, personalisierte Behandlungsempfehlungen und prädiktive Analysen für bessere Gesundheitsergebnisse.",
          nl: "AI in de gezondheidszorg revolutioneert patiëntenzorg door geavanceerde medische beeldanalyse, vroege ziektedetectie, versnelling van medicijnontwikkeling, gepersonaliseerde behandelingsaanbevelingen en voorspellende analyses voor betere gezondheidsuitkomsten."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('mastermind/artificial-intelligence', level1);
  }
})();
