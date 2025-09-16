(function() {
    const level4 = {
        name: {
            en: "Artificial Intelligence and Machine Learning",
            es: "Inteligencia Artificial y Aprendizaje Automático",
            de: "Künstliche Intelligenz und Maschinelles Lernen",
            nl: "Kunstmatige Intelligentie en Machine Learning"
        },
        questions: [
            {
                question: {
                    en: "What is artificial intelligence (AI)?",
                    es: "¿Qué es la inteligencia artificial (IA)?",
                    de: "Was ist künstliche Intelligenz (KI)?",
                    nl: "Wat is kunstmatige intelligentie (AI)?"
                },
                options: [
                    { en: "Computer systems that can perform human-like tasks", es: "Sistemas informáticos que pueden realizar tareas similares a las humanas", de: "Computersysteme, die menschenähnliche Aufgaben ausführen können", nl: "Computersystemen die menselijke taken kunnen uitvoeren" },
                    { en: "Fake intelligence", es: "Inteligencia falsa", de: "Falsche Intelligenz", nl: "Neppe intelligentie" },
                    { en: "Robot intelligence only", es: "Solo inteligencia de robot", de: "Nur Roboter-Intelligenz", nl: "Alleen robotintelligentie" },
                    { en: "Human brain replacement", es: "Reemplazo del cerebro humano", de: "Menschlicher Gehirn-Ersatz", nl: "Menselijk brein vervanging" }
                ],
                correct: 0,
                explanation: {
                    en: "Artificial Intelligence is the simulation of human intelligence in machines, enabling them to think, learn, and make decisions like humans.",
                    es: "La Inteligencia Artificial es la simulación de la inteligencia humana en máquinas, permitiéndoles pensar, aprender y tomar decisiones como los humanos.",
                    de: "Künstliche Intelligenz ist die Simulation menschlicher Intelligenz in Maschinen, die es ihnen ermöglicht, wie Menschen zu denken, zu lernen und Entscheidungen zu treffen.",
                    nl: "Kunstmatige Intelligentie is de simulatie van menselijke intelligentie in machines, waardoor ze kunnen denken, leren en beslissingen nemen zoals mensen."
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
                    { en: "AI that learns and improves from data", es: "IA que aprende y mejora a partir de datos", de: "KI, die aus Daten lernt und sich verbessert", nl: "AI die leert en verbetert van data" },
                    { en: "Machines learning to move", es: "Máquinas aprendiendo a moverse", de: "Maschinen lernen sich zu bewegen", nl: "Machines leren bewegen" },
                    { en: "Teaching machines manually", es: "Enseñar máquinas manualmente", de: "Maschinen manuell unterrichten", nl: "Machines handmatig onderwijzen" },
                    { en: "Learning about machines", es: "Aprender sobre máquinas", de: "Über Maschinen lernen", nl: "Leren over machines" }
                ],
                correct: 0,
                explanation: {
                    en: "Machine learning is a subset of AI that enables computers to learn and improve automatically from experience without being explicitly programmed.",
                    es: "El aprendizaje automático es un subconjunto de IA que permite a las computadoras aprender y mejorar automáticamente de la experiencia sin ser programadas explícitamente.",
                    de: "Maschinelles Lernen ist ein Teilbereich der KI, der es Computern ermöglicht, automatisch aus Erfahrungen zu lernen und sich zu verbessern, ohne explizit programmiert zu werden.",
                    nl: "Machine learning is een subset van AI die computers in staat stelt automatisch te leren en te verbeteren van ervaring zonder expliciet geprogrammeerd te worden."
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
                    { en: "Machine learning using neural networks with many layers", es: "Aprendizaje automático usando redes neuronales con muchas capas", de: "Maschinelles Lernen mit neuronalen Netzwerken mit vielen Schichten", nl: "Machine learning met neurale netwerken met veel lagen" },
                    { en: "Learning very deeply", es: "Aprender muy profundamente", de: "Sehr tief lernen", nl: "Heel diep leren" },
                    { en: "Learning underwater", es: "Aprender bajo el agua", de: "Unter Wasser lernen", nl: "Leren onder water" },
                    { en: "Deep thoughts about learning", es: "Pensamientos profundos sobre el aprendizaje", de: "Tiefe Gedanken über das Lernen", nl: "Diepe gedachten over leren" }
                ],
                correct: 0,
                explanation: {
                    en: "Deep learning uses neural networks with multiple layers to automatically learn complex patterns from large amounts of data.",
                    es: "El aprendizaje profundo usa redes neuronales con múltiples capas para aprender automáticamente patrones complejos de grandes cantidades de datos.",
                    de: "Deep Learning verwendet neuronale Netzwerke mit mehreren Schichten, um automatisch komplexe Muster aus großen Datenmengen zu lernen.",
                    nl: "Deep learning gebruikt neurale netwerken met meerdere lagen om automatisch complexe patronen te leren uit grote hoeveelheden data."
                }
            },
            {
                question: {
                    en: "What is a neural network?",
                    es: "¿Qué es una red neuronal?",
                    de: "Was ist ein neuronales Netzwerk?",
                    nl: "Wat is een neuraal netwerk?"
                },
                options: [
                    { en: "AI model inspired by brain neurons", es: "Modelo de IA inspirado en las neuronas del cerebro", de: "KI-Modell inspiriert von Gehirnneuronen", nl: "AI-model geïnspireerd door herseneuronen" },
                    { en: "Network of doctors", es: "Red de médicos", de: "Netzwerk von Ärzten", nl: "Netwerk van artsen" },
                    { en: "Internet for brains", es: "Internet para cerebros", de: "Internet für Gehirne", nl: "Internet voor hersenen" },
                    { en: "Network cables in computers", es: "Cables de red en computadoras", de: "Netzwerkkabel in Computern", nl: "Netwerkkabels in computers" }
                ],
                correct: 0,
                explanation: {
                    en: "Neural networks are computational models inspired by the human brain, consisting of interconnected nodes that process information.",
                    es: "Las redes neuronales son modelos computacionales inspirados en el cerebro humano, que consisten en nodos interconectados que procesan información.",
                    de: "Neuronale Netzwerke sind Rechenmodelle, die vom menschlichen Gehirn inspiriert sind und aus miteinander verbundenen Knoten bestehen, die Informationen verarbeiten.",
                    nl: "Neurale netwerken zijn computationele modellen geïnspireerd door het menselijk brein, bestaande uit onderling verbonden knooppunten die informatie verwerken."
                }
            },
            {
                question: {
                    en: "What is natural language processing (NLP)?",
                    es: "¿Qué es el procesamiento de lenguaje natural (PLN)?",
                    de: "Was ist Natural Language Processing (NLP)?",
                    nl: "Wat is natuurlijke taalverwerking (NLP)?"
                },
                options: [
                    { en: "AI that understands and processes human language", es: "IA que entiende y procesa el lenguaje humano", de: "KI, die menschliche Sprache versteht und verarbeitet", nl: "AI die menselijke taal begrijpt en verwerkt" },
                    { en: "Processing natural resources", es: "Procesamiento de recursos naturales", de: "Verarbeitung natürlicher Ressourcen", nl: "Verwerking van natuurlijke bronnen" },
                    { en: "Language learning apps", es: "Aplicaciones de aprendizaje de idiomas", de: "Sprachlern-Apps", nl: "Taal leer apps" },
                    { en: "Natural way of talking", es: "Forma natural de hablar", de: "Natürliche Art zu sprechen", nl: "Natuurlijke manier van praten" }
                ],
                correct: 0,
                explanation: {
                    en: "Natural Language Processing enables computers to understand, interpret, and generate human language in a meaningful way.",
                    es: "El Procesamiento de Lenguaje Natural permite a las computadoras entender, interpretar y generar lenguaje humano de manera significativa.",
                    de: "Natural Language Processing ermöglicht es Computern, menschliche Sprache auf sinnvolle Weise zu verstehen, zu interpretieren und zu generieren.",
                    nl: "Natural Language Processing stelt computers in staat om menselijke taal op een zinvolle manier te begrijpen, interpreteren en genereren."
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
                    { en: "AI that interprets and analyzes visual information", es: "IA que interpreta y analiza información visual", de: "KI, die visuelle Informationen interpretiert und analysiert", nl: "AI die visuele informatie interpreteert en analyseert" },
                    { en: "Glasses for computers", es: "Gafas para computadoras", de: "Brillen für Computer", nl: "Brillen voor computers" },
                    { en: "Computer screens", es: "Pantallas de computadora", de: "Computerbildschirme", nl: "Computerschermen" },
                    { en: "Seeing computers", es: "Ver computadoras", de: "Computer sehen", nl: "Computers zien" }
                ],
                correct: 0,
                explanation: {
                    en: "Computer vision allows machines to interpret and understand visual information from the world, enabling them to identify objects, people, and scenes.",
                    es: "La visión por computadora permite a las máquinas interpretar y entender información visual del mundo, permitiéndoles identificar objetos, personas y escenas.",
                    de: "Computer Vision ermöglicht es Maschinen, visuelle Informationen aus der Welt zu interpretieren und zu verstehen, wodurch sie Objekte, Personen und Szenen identifizieren können.",
                    nl: "Computer vision stelt machines in staat om visuele informatie uit de wereld te interpreteren en begrijpen, waardoor ze objecten, mensen en scènes kunnen identificeren."
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
                    { en: "AI program that can have conversations with humans", es: "Programa de IA que puede tener conversaciones con humanos", de: "KI-Programm, das Gespräche mit Menschen führen kann", nl: "AI-programma dat gesprekken kan voeren met mensen" },
                    { en: "A chat room", es: "Una sala de chat", de: "Ein Chatraum", nl: "Een chatroom" },
                    { en: "A robot that chats", es: "Un robot que chatea", de: "Ein Roboter, der chattet", nl: "Een robot die chat" },
                    { en: "Chat software", es: "Software de chat", de: "Chat-Software", nl: "Chat software" }
                ],
                correct: 0,
                explanation: {
                    en: "Chatbots use natural language processing and AI to simulate human conversation, providing automated customer service and assistance.",
                    es: "Los chatbots usan procesamiento de lenguaje natural e IA para simular conversación humana, proporcionando servicio al cliente automatizado y asistencia.",
                    de: "Chatbots verwenden Natural Language Processing und KI, um menschliche Gespräche zu simulieren und automatisierten Kundendienst und Unterstützung zu bieten.",
                    nl: "Chatbots gebruiken natural language processing en AI om menselijke gesprekken te simuleren, en bieden geautomatiseerde klantenservice en assistentie."
                }
            },
            {
                question: {
                    en: "What is supervised learning?",
                    es: "¿Qué es el aprendizaje supervisado?",
                    de: "Was ist überwachtes Lernen?",
                    nl: "Wat is begeleid leren?"
                },
                options: [
                    { en: "Learning with labeled training data", es: "Aprender con datos de entrenamiento etiquetados", de: "Lernen mit beschrifteten Trainingsdaten", nl: "Leren met gelabelde trainingsdata" },
                    { en: "Learning with a supervisor", es: "Aprender con un supervisor", de: "Lernen mit einem Supervisor", nl: "Leren met een begeleider" },
                    { en: "Supervised by teachers", es: "Supervisado por maestros", de: "Von Lehrern betreut", nl: "Begeleid door leraren" },
                    { en: "Learning under supervision", es: "Aprender bajo supervisión", de: "Lernen unter Aufsicht", nl: "Leren onder toezicht" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is unsupervised learning?",
                    es: "¿Qué es el aprendizaje no supervisado?",
                    de: "Was ist unüberwachtes Lernen?",
                    nl: "Wat is onbegeleid leren?"
                },
                options: [
                    { en: "Learning patterns from unlabeled data", es: "Aprender patrones de datos sin etiquetar", de: "Muster aus unbeschrifteten Daten lernen", nl: "Patronen leren van ongelabelde data" },
                    { en: "Learning without teachers", es: "Aprender sin maestros", de: "Lernen ohne Lehrer", nl: "Leren zonder leraren" },
                    { en: "Self-study", es: "Autoestudio", de: "Selbststudium", nl: "Zelfstudie" },
                    { en: "Learning alone", es: "Aprender solo", de: "Alleine lernen", nl: "Alleen leren" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is reinforcement learning?",
                    es: "¿Qué es el aprendizaje por refuerzo?",
                    de: "Was ist Reinforcement Learning?",
                    nl: "Wat is versterkingsleren?"
                },
                options: [
                    { en: "Learning through trial, error, and rewards", es: "Aprender a través de prueba, error y recompensas", de: "Lernen durch Versuch, Irrtum und Belohnungen", nl: "Leren door trial, error en beloningen" },
                    { en: "Learning with reinforcement", es: "Aprender con refuerzo", de: "Lernen mit Verstärkung", nl: "Leren met versterking" },
                    { en: "Strong learning", es: "Aprendizaje fuerte", de: "Starkes Lernen", nl: "Sterk leren" },
                    { en: "Repeated learning", es: "Aprendizaje repetido", de: "Wiederholtes Lernen", nl: "Herhaald leren" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is big data in AI?",
                    es: "¿Qué son los macrodatos en IA?",
                    de: "Was ist Big Data in der KI?",
                    nl: "Wat is big data in AI?"
                },
                options: [
                    { en: "Large volumes of data used to train AI", es: "Grandes volúmenes de datos utilizados para entrenar IA", de: "Große Datenmengen zum Training von KI", nl: "Grote hoeveelheden data gebruikt om AI te trainen" },
                    { en: "Important data", es: "Datos importantes", de: "Wichtige Daten", nl: "Belangrijke data" },
                    { en: "Data about big things", es: "Datos sobre cosas grandes", de: "Daten über große Dinge", nl: "Data over grote dingen" },
                    { en: "Data storage systems", es: "Sistemas de almacenamiento de datos", de: "Datenspeichersysteme", nl: "Data opslagsystemen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is an algorithm in AI?",
                    es: "¿Qué es un algoritmo en IA?",
                    de: "Was ist ein Algorithmus in der KI?",
                    nl: "Wat is een algoritme in AI?"
                },
                options: [
                    { en: "Set of rules and instructions for AI to follow", es: "Conjunto de reglas e instrucciones para que la IA las siga", de: "Regeln und Anweisungen, denen KI folgen soll", nl: "Set van regels en instructies voor AI om te volgen" },
                    { en: "AI's brain", es: "Cerebro de la IA", de: "KI-Gehirn", nl: "AI's brein" },
                    { en: "Mathematical formula", es: "Fórmula matemática", de: "Mathematische Formel", nl: "Wiskundige formule" },
                    { en: "Computer program", es: "Programa de computadora", de: "Computerprogramm", nl: "Computerprogramma" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is training data?",
                    es: "¿Qué son los datos de entrenamiento?",
                    de: "Was sind Trainingsdaten?",
                    nl: "Wat zijn trainingsdata?"
                },
                options: [
                    { en: "Data used to teach AI systems", es: "Datos utilizados para enseñar a los sistemas de IA", de: "Daten zum Lehren von KI-Systemen", nl: "Data gebruikt om AI-systemen te leren" },
                    { en: "Data about training", es: "Datos sobre entrenamiento", de: "Daten über Training", nl: "Data over training" },
                    { en: "Exercise data", es: "Datos de ejercicio", de: "Übungsdaten", nl: "Oefendata" },
                    { en: "Sports statistics", es: "Estadísticas deportivas", de: "Sportstatistiken", nl: "Sportstatistieken" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What is pattern recognition?",
                    es: "¿Qué es el reconocimiento de patrones?",
                    de: "Was ist Mustererkennung?",
                    nl: "Wat is patroonherkenning?"
                },
                options: [
                    { en: "AI's ability to identify recurring patterns in data", es: "Capacidad de la IA para identificar patrones recurrentes en los datos", de: "KI-Fähigkeit, wiederkehrende Muster in Daten zu erkennen", nl: "AI's vermogen om terugkerende patronen in data te identificeren" },
                    { en: "Recognizing fabric patterns", es: "Reconocer patrones de tela", de: "Stoffmuster erkennen", nl: "Stofpatronen herkennen" },
                    { en: "Finding patterns in art", es: "Encontrar patrones en el arte", de: "Muster in der Kunst finden", nl: "Patronen vinden in kunst" },
                    { en: "Pattern matching games", es: "Juegos de coincidencia de patrones", de: "Musterabgleichspiele", nl: "Patroon matching games" }
                ],
                correct: 0,
                explanation: {
                    en: "Pattern recognition is fundamental to AI, allowing systems to identify regularities and make sense of complex data.",
                    es: "El reconocimiento de patrones es fundamental para la IA, permitiendo a los sistemas identificar regularidades y dar sentido a datos complejos.",
                    de: "Mustererkennung ist grundlegend für KI und ermöglicht es Systemen, Regelmäßigkeiten zu identifizieren und komplexe Daten zu verstehen.",
                    nl: "Patroonherkenning is fundamenteel voor AI, waardoor systemen regelmatigheden kunnen identificeren en complexe data kunnen begrijpen."
                }
            },
            {
                question: {
                    en: "What is facial recognition?",
                    es: "¿Qué es el reconocimiento facial?",
                    de: "Was ist Gesichtserkennung?",
                    nl: "Wat is gezichtsherkenning?"
                },
                options: [
                    { en: "AI technology that identifies people by their faces", es: "Tecnología de IA que identifica a las personas por sus rostros", de: "KI-Technologie, die Menschen an ihren Gesichtern erkennt", nl: "AI-technologie die mensen identificeert aan hun gezichten" },
                    { en: "Recognizing facial expressions", es: "Reconocer expresiones faciales", de: "Gesichtsausdrücke erkennen", nl: "Gezichtsuitdrukkingen herkennen" },
                    { en: "Face painting recognition", es: "Reconocimiento de pintura facial", de: "Gesichtsbemalung erkennen", nl: "Gezichtsschildering herkennen" },
                    { en: "Remembering faces", es: "Recordar caras", de: "Gesichter merken", nl: "Gezichten onthouden" }
                ],
                correct: 0,
                explanation: {
                    en: "Facial recognition technology uses computer vision and machine learning to identify and verify individuals based on their facial features.",
                    es: "La tecnología de reconocimiento facial usa visión por computadora y aprendizaje automático para identificar y verificar individuos basándose en sus características faciales.",
                    de: "Gesichtserkennungstechnologie verwendet Computer Vision und maschinelles Lernen, um Personen anhand ihrer Gesichtsmerkmale zu identifizieren und zu verifizieren.",
                    nl: "Gezichtsherkenningste technologie gebruikt computer vision en machine learning om individuen te identificeren en verifiëren op basis van hun gezichtskenmerken."
                }
            },
            {
                question: {
                    en: "What is speech recognition?",
                    es: "¿Qué es el reconocimiento de voz?",
                    de: "Was ist Spracherkennung?",
                    nl: "Wat is spraakherkenning?"
                },
                options: [
                    { en: "AI that converts spoken words to text", es: "IA que convierte palabras habladas a texto", de: "KI, die gesprochene Worte in Text umwandelt", nl: "AI die gesproken woorden omzet naar tekst" },
                    { en: "Recognizing different voices", es: "Reconocer diferentes voces", de: "Verschiedene Stimmen erkennen", nl: "Verschillende stemmen herkennen" },
                    { en: "Speech therapy", es: "Terapia del habla", de: "Sprachtherapie", nl: "Spraaktherapie" },
                    { en: "Voice training", es: "Entrenamiento de voz", de: "Stimmtraining", nl: "Stemtraining" }
                ],
                correct: 0,
                explanation: {
                    en: "Speech recognition technology enables hands-free interaction with devices and accessibility features for users with disabilities.",
                    es: "La tecnología de reconocimiento de voz permite interacción manos libres con dispositivos y características de accesibilidad para usuarios con discapacidades.",
                    de: "Spracherkennungstechnologie ermöglicht freihändige Interaktion mit Geräten und Barrierefreiheitsfunktionen für Benutzer mit Behinderungen.",
                    nl: "Spraakherkenningste technologie maakt handsfree interactie met apparaten mogelijk en toegankelijkheidsfuncties voor gebruikers met een handicap."
                }
            },
            {
                question: {
                    en: "What is predictive analytics?",
                    es: "¿Qué es el análisis predictivo?",
                    de: "Was ist prädiktive Analytik?",
                    nl: "Wat is voorspellende analyse?"
                },
                options: [
                    { en: "Using AI to predict future outcomes from data", es: "Usar IA para predecir resultados futuros a partir de datos", de: "KI nutzen, um zukünftige Ergebnisse aus Daten vorherzusagen", nl: "AI gebruiken om toekomstige uitkomsten te voorspellen uit data" },
                    { en: "Predicting the weather", es: "Predecir el clima", de: "Wetter vorhersagen", nl: "Het weer voorspellen" },
                    { en: "Fortune telling", es: "Adivinación", de: "Wahrsagerei", nl: "Waarzeggerij" },
                    { en: "Statistical analysis", es: "Análisis estadístico", de: "Statistische Analyse", nl: "Statistische analyse" }
                ],
                correct: 0,
                explanation: {
                    en: "Predictive analytics helps businesses and organizations make informed decisions by forecasting future trends and outcomes.",
                    es: "El análisis predictivo ayuda a empresas y organizaciones a tomar decisiones informadas al pronosticar tendencias y resultados futuros.",
                    de: "Prädiktive Analytik hilft Unternehmen und Organisationen, fundierte Entscheidungen zu treffen, indem sie zukünftige Trends und Ergebnisse vorhersagt.",
                    nl: "Voorspellende analyse helpt bedrijven en organisaties om geïnformeerde beslissingen te nemen door toekomstige trends en uitkomsten te voorspellen."
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
                    { en: "AI that identifies objects and scenes in images", es: "IA que identifica objetos y escenas en imágenes", de: "KI, die Objekte und Szenen in Bildern erkennt", nl: "AI die objecten en scènes in afbeeldingen identificeert" },
                    { en: "Recognizing image quality", es: "Reconocer la calidad de imagen", de: "Bildqualität erkennen", nl: "Beeldkwaliteit herkennen" },
                    { en: "Photo editing", es: "Edición de fotos", de: "Fotobearbeitung", nl: "Foto bewerking" },
                    { en: "Image storage", es: "Almacenamiento de imágenes", de: "Bildspeicherung", nl: "Beeldopslag" }
                ],
                correct: 0,
                explanation: {
                    en: "Image recognition technology has applications in security, healthcare, autonomous vehicles, and many other fields.",
                    es: "La tecnología de reconocimiento de imágenes tiene aplicaciones en seguridad, atención médica, vehículos autónomos y muchos otros campos.",
                    de: "Bilderkennungstechnologie hat Anwendungen in der Sicherheit, im Gesundheitswesen, bei autonomen Fahrzeugen und in vielen anderen Bereichen.",
                    nl: "Beeldherkenningste technologie heeft toepassingen in beveiliging, gezondheidszorg, autonome voertuigen en vele andere gebieden."
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
                    { en: "AI that translates text between languages", es: "IA que traduce texto entre idiomas", de: "KI, die Text zwischen Sprachen übersetzt", nl: "AI die tekst tussen talen vertaalt" },
                    { en: "Moving machines", es: "Mover máquinas", de: "Maschinen bewegen", nl: "Machines verplaatsen" },
                    { en: "Language learning", es: "Aprendizaje de idiomas", de: "Sprachenlernen", nl: "Taal leren" },
                    { en: "Translation services", es: "Servicios de traducción", de: "Übersetzungsdienstleistungen", nl: "Vertaaldiensten" }
                ],
                correct: 0,
                explanation: {
                    en: "Machine translation breaks down language barriers and enables global communication and information sharing.",
                    es: "La traducción automática rompe las barreras del idioma y permite la comunicación global y el intercambio de información.",
                    de: "Maschinelle Übersetzung überwindet Sprachbarrieren und ermöglicht globale Kommunikation und Informationsaustausch.",
                    nl: "Machinevertaling doorbreekt taalbarrières en maakt wereldwijde communicatie en informatie-uitwisseling mogelijk."
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
                    { en: "AI that determines emotions and opinions in text", es: "IA que determina emociones y opiniones en el texto", de: "KI, die Emotionen und Meinungen in Texten bestimmt", nl: "AI die emoties en meningen in tekst bepaalt" },
                    { en: "Analyzing feelings", es: "Analizar sentimientos", de: "Gefühle analysieren", nl: "Gevoelens analyseren" },
                    { en: "Emotional intelligence", es: "Inteligencia emocional", de: "Emotionale Intelligenz", nl: "Emotionele intelligentie" },
                    { en: "Psychology analysis", es: "Análisis psicológico", de: "Psychologische Analyse", nl: "Psychologische analyse" }
                ],
                correct: 0,
                explanation: {
                    en: "Sentiment analysis helps businesses understand customer feedback and public opinion about their products and services.",
                    es: "El análisis de sentimientos ayuda a las empresas a entender la retroalimentación del cliente y la opinión pública sobre sus productos y servicios.",
                    de: "Sentiment-Analyse hilft Unternehmen, Kundenfeedback und öffentliche Meinung über ihre Produkte und Dienstleistungen zu verstehen.",
                    nl: "Sentimentanalyse helpt bedrijven om klantenfeedback en publieke opinie over hun producten en diensten te begrijpen."
                }
            },
            {
                question: {
                    en: "What is recommendation system?",
                    es: "¿Qué es un sistema de recomendación?",
                    de: "Was ist ein Empfehlungssystem?",
                    nl: "Wat is een aanbevelingssysteem?"
                },
                options: [
                    { en: "AI that suggests items based on user preferences", es: "IA que sugiere elementos basados en las preferencias del usuario", de: "KI, die Artikel basierend auf Benutzerpräferenzen vorschlägt", nl: "AI die items voorstelt gebaseerd op gebruikersvoorkeuren" },
                    { en: "System for giving advice", es: "Sistema para dar consejos", de: "System zur Beratung", nl: "Systeem voor advies geven" },
                    { en: "Recommendation letters", es: "Cartas de recomendación", de: "Empfehlungsschreiben", nl: "Aanbevelingsbrieven" },
                    { en: "Suggested reading", es: "Lectura sugerida", de: "Empfohlene Lektüre", nl: "Aanbevolen lectuur" }
                ],
                correct: 0,
                explanation: {
                    en: "Recommendation systems personalize user experiences and help people discover new products, content, and services they might enjoy.",
                    es: "Los sistemas de recomendación personalizan las experiencias del usuario y ayudan a las personas a descubrir nuevos productos, contenido y servicios que podrían disfrutar.",
                    de: "Empfehlungssysteme personalisieren Benutzererfahrungen und helfen Menschen dabei, neue Produkte, Inhalte und Dienstleistungen zu entdecken, die ihnen gefallen könnten.",
                    nl: "Aanbevelingssystemen personaliseren gebruikerservaringen en helpen mensen nieuwe producten, content en diensten te ontdekken die ze leuk zouden kunnen vinden."
                }
            },
            {
                question: {
                    en: "What is autonomous vehicle AI?",
                    es: "¿Qué es la IA de vehículos autónomos?",
                    de: "Was ist autonome Fahrzeug-KI?",
                    nl: "Wat is autonome voertuig AI?"
                },
                options: [
                    { en: "AI that enables self-driving cars", es: "IA que permite autos que se conducen solos", de: "KI, die selbstfahrende Autos ermöglicht", nl: "AI die zelfrijdende auto's mogelijk maakt" },
                    { en: "AI for car repairs", es: "IA para reparaciones de automóviles", de: "KI für Autoreparaturen", nl: "AI voor autoreparaties" },
                    { en: "Vehicle navigation", es: "Navegación de vehículos", de: "Fahrzeugnavigation", nl: "Voertuignavigatie" },
                    { en: "Car manufacturing", es: "Fabricación de automóviles", de: "Automobilherstellung", nl: "Auto fabricage" }
                ],
                correct: 0,
                explanation: {
                    en: "Autonomous vehicle AI combines multiple technologies like computer vision, sensors, and machine learning to navigate safely without human drivers.",
                    es: "La IA de vehículos autónomos combina múltiples tecnologías como visión por computadora, sensores y aprendizaje automático para navegar de manera segura sin conductores humanos.",
                    de: "Autonome Fahrzeug-KI kombiniert mehrere Technologien wie Computer Vision, Sensoren und maschinelles Lernen, um sicher ohne menschliche Fahrer zu navigieren.",
                    nl: "Autonome voertuig AI combineert meerdere technologieën zoals computer vision, sensoren en machine learning om veilig te navigeren zonder menselijke bestuurders."
                }
            },
            {
                question: {
                    en: "What is the Turing Test?",
                    es: "¿Qué es la Prueba de Turing?",
                    de: "Was ist der Turing-Test?",
                    nl: "Wat is de Turing Test?"
                },
                options: [
                    { en: "Test to determine if AI can think like humans", es: "Prueba para determinar si la IA puede pensar como los humanos", de: "Test um zu bestimmen, ob KI wie Menschen denken kann", nl: "Test om te bepalen of AI kan denken zoals mensen" },
                    { en: "Computer performance test", es: "Prueba de rendimiento de computadora", de: "Computer-Leistungstest", nl: "Computer prestatie test" },
                    { en: "Internet speed test", es: "Prueba de velocidad de internet", de: "Internet-Geschwindigkeitstest", nl: "Internet snelheidstest" },
                    { en: "Programming skills test", es: "Prueba de habilidades de programación", de: "Programmierfähigkeitstest", nl: "Programmeervaardigheden test" }
                ],
                correct: 0,
                explanation: {
                    en: "The Turing Test, proposed by Alan Turing, is a benchmark for evaluating machine intelligence and human-like thinking capabilities.",
                    es: "La Prueba de Turing, propuesta por Alan Turing, es un punto de referencia para evaluar la inteligencia de máquina y las capacidades de pensamiento similares a las humanas.",
                    de: "Der Turing-Test, vorgeschlagen von Alan Turing, ist ein Benchmark zur Bewertung von Maschinenintelligenz und menschenähnlichen Denkfähigkeiten.",
                    nl: "De Turing Test, voorgesteld door Alan Turing, is een benchmark voor het evalueren van machine-intelligentie en menselijke denkcapaciteiten."
                }
            },
            {
                question: {
                    en: "What is artificial general intelligence (AGI)?",
                    es: "¿Qué es la inteligencia artificial general (IAG)?",
                    de: "Was ist allgemeine künstliche Intelligenz (AGI)?",
                    nl: "Wat is algemene kunstmatige intelligentie (AGI)?"
                },
                options: [
                    { en: "AI with human-level intelligence across all domains", es: "IA con inteligencia a nivel humano en todos los dominios", de: "KI mit menschlicher Intelligenz in allen Bereichen", nl: "AI met menselijk niveau intelligentie in alle domeinen" },
                    { en: "General-purpose AI", es: "IA de propósito general", de: "Allzweck-KI", nl: "Algemeen doel AI" },
                    { en: "AI for generals", es: "IA para generales", de: "KI für Generäle", nl: "AI voor generaals" },
                    { en: "Simple AI", es: "IA simple", de: "Einfache KI", nl: "Eenvoudige AI" }
                ],
                correct: 0,
                explanation: {
                    en: "AGI represents the theoretical goal of creating AI with human-level cognitive abilities across all domains, unlike current narrow AI systems.",
                    es: "La IAG representa el objetivo teórico de crear IA con habilidades cognitivas a nivel humano en todos los dominios, a diferencia de los sistemas actuales de IA estrecha.",
                    de: "AGI stellt das theoretische Ziel dar, KI mit kognitiven Fähigkeiten auf menschlichem Niveau in allen Bereichen zu schaffen, im Gegensatz zu aktuellen engen KI-Systemen.",
                    nl: "AGI vertegenwoordigt het theoretische doel om AI te creëren met cognitieve vaardigheden op menselijk niveau in alle domeinen, in tegenstelling tot huidige smalle AI-systemen."
                }
            },
            {
                question: {
                    en: "What is narrow AI?",
                    es: "¿Qué es la IA estrecha?",
                    de: "Was ist enge KI?",
                    nl: "Wat is smalle AI?"
                },
                options: [
                    { en: "AI designed for specific tasks only", es: "IA diseñada solo para tareas específicas", de: "KI, die nur für bestimmte Aufgaben entwickelt wurde", nl: "AI ontworpen voor alleen specifieke taken" },
                    { en: "Small AI systems", es: "Sistemas de IA pequeños", de: "Kleine KI-Systeme", nl: "Kleine AI-systemen" },
                    { en: "AI with limited memory", es: "IA con memoria limitada", de: "KI mit begrenztem Speicher", nl: "AI met beperkt geheugen" },
                    { en: "Thin AI robots", es: "Robots de IA delgados", de: "Dünne KI-Roboter", nl: "Dunne AI-robots" }
                ],
                correct: 0,
                explanation: {
                    en: "Narrow AI, also called weak AI, is designed for specific tasks and represents most current AI applications like voice assistants and recommendation systems.",
                    es: "La IA estrecha, también llamada IA débil, está diseñada para tareas específicas y representa la mayoría de las aplicaciones actuales de IA como asistentes de voz y sistemas de recomendación.",
                    de: "Enge KI, auch schwache KI genannt, ist für spezifische Aufgaben konzipiert und repräsentiert die meisten aktuellen KI-Anwendungen wie Sprachassistenten und Empfehlungssysteme.",
                    nl: "Smalle AI, ook wel zwakke AI genoemd, is ontworpen voor specifieke taken en vertegenwoordigt de meeste huidige AI-toepassingen zoals spraakassistenten en aanbevelingssystemen."
                }
            },
            {
                question: {
                    en: "What is overfitting in machine learning?",
                    es: "¿Qué es el sobreajuste en el aprendizaje automático?",
                    de: "Was ist Overfitting beim maschinellen Lernen?",
                    nl: "Wat is overfitting in machine learning?"
                },
                options: [
                    { en: "When AI learns training data too specifically", es: "Cuando la IA aprende los datos de entrenamiento demasiado específicamente", de: "Wenn KI Trainingsdaten zu spezifisch lernt", nl: "Wanneer AI trainingsdata te specifiek leert" },
                    { en: "AI that exercises too much", es: "IA que hace demasiado ejercicio", de: "KI, die zu viel trainiert", nl: "AI die te veel oefent" },
                    { en: "Fitting AI in small spaces", es: "Ajustar IA en espacios pequeños", de: "KI in kleine Räume einpassen", nl: "AI in kleine ruimtes passen" },
                    { en: "AI working overtime", es: "IA trabajando horas extras", de: "KI macht Überstunden", nl: "AI die overuren maakt" }
                ],
                correct: 0,
                explanation: {
                    en: "Overfitting occurs when an AI model memorizes training data too closely, making it perform poorly on new, unseen data.",
                    es: "El sobreajuste ocurre cuando un modelo de IA memoriza los datos de entrenamiento demasiado de cerca, haciendo que funcione mal en datos nuevos y no vistos.",
                    de: "Overfitting tritt auf, wenn ein KI-Modell Trainingsdaten zu genau auswendig lernt, wodurch es bei neuen, unbekannten Daten schlecht abschneidet.",
                    nl: "Overfitting treedt op wanneer een AI-model trainingsdata te nauw memoriseert, waardoor het slecht presteert op nieuwe, ongeziene data."
                }
            },
            {
                question: {
                    en: "What is bias in AI?",
                    es: "¿Qué es el sesgo en IA?",
                    de: "Was ist Bias in der KI?",
                    nl: "Wat is vooringenomenheid in AI?"
                },
                options: [
                    { en: "Unfair preferences in AI decision-making", es: "Preferencias injustas en la toma de decisiones de IA", de: "Unfaire Präferenzen bei KI-Entscheidungen", nl: "Oneerlijke voorkeuren in AI-besluitvorming" },
                    { en: "AI's political opinions", es: "Opiniones políticas de la IA", de: "Politische Meinungen der KI", nl: "Politieke meningen van AI" },
                    { en: "AI being biased towards humans", es: "IA siendo parcial hacia los humanos", de: "KI ist gegenüber Menschen voreingenommen", nl: "AI die bevooroordeeld is tegenover mensen" },
                    { en: "Personal preferences of AI", es: "Preferencias personales de la IA", de: "Persönliche Präferenzen der KI", nl: "Persoonlijke voorkeuren van AI" }
                ],
                correct: 0,
                explanation: {
                    en: "AI bias can lead to unfair treatment of certain groups and is a critical issue that requires careful data selection and algorithm design.",
                    es: "El sesgo de IA puede llevar a un trato injusto de ciertos grupos y es un problema crítico que requiere una selección cuidadosa de datos y diseño de algoritmos.",
                    de: "KI-Bias kann zu unfairer Behandlung bestimmter Gruppen führen und ist ein kritisches Problem, das sorgfältige Datenauswahl und Algorithmus-Design erfordert.",
                    nl: "AI-vooringenomenheid kan leiden tot oneerlijke behandeling van bepaalde groepen en is een kritiek probleem dat zorgvuldige dataselectie en algoritme-ontwerp vereist."
                }
            },
            {
                question: {
                    en: "What is explainable AI?",
                    es: "¿Qué es la IA explicable?",
                    de: "Was ist erklärbare KI?",
                    nl: "Wat is verklaarbare AI?"
                },
                options: [
                    { en: "AI systems that can explain their decisions", es: "Sistemas de IA que pueden explicar sus decisiones", de: "KI-Systeme, die ihre Entscheidungen erklären können", nl: "AI-systemen die hun beslissingen kunnen uitleggen" },
                    { en: "AI that talks to humans", es: "IA que habla con humanos", de: "KI, die mit Menschen spricht", nl: "AI die praat met mensen" },
                    { en: "Simple AI", es: "IA simple", de: "Einfache KI", nl: "Eenvoudige AI" },
                    { en: "Educational AI", es: "IA educativa", de: "Bildungs-KI", nl: "Educatieve AI" }
                ],
                correct: 0,
                explanation: {
                    en: "Explainable AI is crucial for building trust, ensuring accountability, and meeting regulatory requirements in critical applications.",
                    es: "La IA explicable es crucial para construir confianza, asegurar responsabilidad y cumplir requisitos regulatorios en aplicaciones críticas.",
                    de: "Erklärbare KI ist entscheidend für Vertrauensbildung, Gewährleistung der Verantwortlichkeit und Erfüllung regulatorischer Anforderungen in kritischen Anwendungen.",
                    nl: "Verklaarbare AI is cruciaal voor het opbouwen van vertrouwen, het waarborgen van verantwoordelijkheid en het voldoen aan regelgevingsvereisten in kritieke toepassingen."
                }
            },
            {
                question: {
                    en: "What is transfer learning?",
                    es: "¿Qué es el aprendizaje por transferencia?",
                    de: "Was ist Transfer Learning?",
                    nl: "Wat is transfer learning?"
                },
                options: [
                    { en: "Using knowledge from one task to help with another", es: "Usar conocimiento de una tarea para ayudar con otra", de: "Wissen von einer Aufgabe nutzen, um bei einer anderen zu helfen", nl: "Kennis van één taak gebruiken om te helpen bij een andere" },
                    { en: "Transferring AI between computers", es: "Transferir IA entre computadoras", de: "KI zwischen Computern übertragen", nl: "AI overbrengen tussen computers" },
                    { en: "Learning while traveling", es: "Aprender mientras viajas", de: "Lernen während des Reisens", nl: "Leren tijdens het reizen" },
                    { en: "Moving data between systems", es: "Mover datos entre sistemas", de: "Daten zwischen Systemen bewegen", nl: "Data verplaatsen tussen systemen" }
                ],
                correct: 0,
                explanation: {
                    en: "Transfer learning allows AI models to leverage existing knowledge, reducing training time and improving performance on related tasks.",
                    es: "El aprendizaje por transferencia permite a los modelos de IA aprovechar el conocimiento existente, reduciendo el tiempo de entrenamiento y mejorando el rendimiento en tareas relacionadas.",
                    de: "Transfer Learning ermöglicht es KI-Modellen, vorhandenes Wissen zu nutzen, wodurch Trainingszeit reduziert und Leistung bei verwandten Aufgaben verbessert wird.",
                    nl: "Transfer learning stelt AI-modellen in staat om bestaande kennis te benutten, waardoor trainingstijd wordt verminderd en prestaties bij gerelateerde taken worden verbeterd."
                }
            },
            {
                question: {
                    en: "What is generative AI?",
                    es: "¿Qué es la IA generativa?",
                    de: "Was ist generative KI?",
                    nl: "Wat is generatieve AI?"
                },
                options: [
                    { en: "AI that creates new content like text or images", es: "IA que crea contenido nuevo como texto o imágenes", de: "KI, die neue Inhalte wie Text oder Bilder erstellt", nl: "AI die nieuwe content creëert zoals tekst of afbeeldingen" },
                    { en: "AI for generators", es: "IA para generadores", de: "KI für Generatoren", nl: "AI voor generatoren" },
                    { en: "AI that generates electricity", es: "IA que genera electricidad", de: "KI, die Strom erzeugt", nl: "AI die elektriciteit opwekt" },
                    { en: "General purpose AI", es: "IA de propósito general", de: "Allzweck-KI", nl: "Algemeen doel AI" }
                ],
                correct: 0,
                explanation: {
                    en: "Generative AI has revolutionized creative industries and opened new possibilities for content creation, design, and artistic expression.",
                    es: "La IA generativa ha revolucionado las industrias creativas y abierto nuevas posibilidades para la creación de contenido, diseño y expresión artística.",
                    de: "Generative KI hat kreative Industrien revolutioniert und neue Möglichkeiten für Content-Erstellung, Design und künstlerischen Ausdruck eröffnet.",
                    nl: "Generatieve AI heeft creatieve industrieën gerevolutioneerd en nieuwe mogelijkheden geopend voor content creatie, design en artistieke expressie."
                }
            },
            {
                question: {
                    en: "What is GPT?",
                    es: "¿Qué es GPT?",
                    de: "Was ist GPT?",
                    nl: "Wat is GPT?"
                },
                options: [
                    { en: "Generative Pre-trained Transformer for language", es: "Transformador Generativo Pre-entrenado para lenguaje", de: "Generativer vortrainierter Transformer für Sprache", nl: "Generatieve voorgetrainde transformer voor taal" },
                    { en: "General Purpose Technology", es: "Tecnología de Propósito General", de: "Allzwecktechnologie", nl: "Algemene Doel Technologie" },
                    { en: "Global Positioning Technology", es: "Tecnología de Posicionamiento Global", de: "Globale Positionierungstechnologie", nl: "Globale Positioneringsteknologie" },
                    { en: "Graphics Processing Tool", es: "Herramienta de Procesamiento de Gráficos", de: "Grafikverarbeitungswerkzeug", nl: "Graphics Verwerkingstool" }
                ],
                correct: 0,
                explanation: {
                    en: "GPT models use transformer architecture to understand and generate human-like text, powering many modern AI applications.",
                    es: "Los modelos GPT usan arquitectura de transformador para entender y generar texto similar al humano, alimentando muchas aplicaciones modernas de IA.",
                    de: "GPT-Modelle verwenden Transformer-Architektur, um menschenähnlichen Text zu verstehen und zu generieren und viele moderne KI-Anwendungen anzutreiben.",
                    nl: "GPT-modellen gebruiken transformer-architectuur om menselijke tekst te begrijpen en genereren, waardoor veel moderne AI-toepassingen worden aangedreven."
                }
            },
            {
                question: {
                    en: "What are ethics in AI?",
                    es: "¿Qué son las éticas en IA?",
                    de: "Was ist Ethik in der KI?",
                    nl: "Wat zijn ethiek in AI?"
                },
                options: [
                    { en: "Moral principles guiding AI development and use", es: "Principios morales que guían el desarrollo y uso de IA", de: "Moralische Prinzipien, die KI-Entwicklung und -Nutzung leiten", nl: "Morele principes die AI-ontwikkeling en -gebruik begeleiden" },
                    { en: "Rules for AI behavior", es: "Reglas para el comportamiento de IA", de: "Regeln für KI-Verhalten", nl: "Regels voor AI-gedrag" },
                    { en: "AI's moral code", es: "Código moral de la IA", de: "Moralischer Code der KI", nl: "Morele code van AI" },
                    { en: "Laws about AI", es: "Leyes sobre IA", de: "Gesetze über KI", nl: "Wetten over AI" }
                ],
                correct: 0,
                explanation: {
                    en: "AI ethics ensure that artificial intelligence is developed and used in ways that benefit society while minimizing harm and respecting human rights.",
                    es: "La ética de IA asegura que la inteligencia artificial se desarrolle y use de maneras que beneficien a la sociedad mientras minimizan el daño y respetan los derechos humanos.",
                    de: "KI-Ethik stellt sicher, dass künstliche Intelligenz auf eine Weise entwickelt und eingesetzt wird, die der Gesellschaft nützt, während Schäden minimiert und Menschenrechte respektiert werden.",
                    nl: "AI-ethiek zorgt ervoor dat kunstmatige intelligentie wordt ontwikkeld en gebruikt op manieren die de maatschappij ten goede komen terwijl schade wordt geminimaliseerd en mensenrechten worden gerespecteerd."
                }
            },
            {
                question: {
                    en: "What is the role of data in AI?",
                    es: "¿Cuál es el papel de los datos en IA?",
                    de: "Welche Rolle spielen Daten in der KI?",
                    nl: "Wat is de rol van data in AI?"
                },
                options: [
                    { en: "Data is the fuel that powers AI learning", es: "Los datos son el combustible que alimenta el aprendizaje de IA", de: "Daten sind der Treibstoff, der KI-Lernen antreibt", nl: "Data is de brandstof die AI-leren aandrijft" },
                    { en: "Data stores AI programs", es: "Los datos almacenan programas de IA", de: "Daten speichern KI-Programme", nl: "Data slaat AI-programma's op" },
                    { en: "Data controls AI", es: "Los datos controlan la IA", de: "Daten kontrollieren KI", nl: "Data controleert AI" },
                    { en: "Data replaces AI", es: "Los datos reemplazan la IA", de: "Daten ersetzen KI", nl: "Data vervangt AI" }
                ],
                correct: 0,
                explanation: {
                    en: "Quality data is essential for AI success - the principle 'garbage in, garbage out' highlights the importance of good training data.",
                    es: "Los datos de calidad son esenciales para el éxito de la IA - el principio 'basura entra, basura sale' destaca la importancia de buenos datos de entrenamiento.",
                    de: "Qualitätsdaten sind für KI-Erfolg unerlässlich - das Prinzip 'Müll rein, Müll raus' betont die Wichtigkeit guter Trainingsdaten.",
                    nl: "Kwaliteitsdata is essentieel voor AI-succes - het principe 'rommel erin, rommel eruit' benadrukt het belang van goede trainingsdata."
                }
            },
            {
                question: {
                    en: "What is quantum AI?",
                    es: "¿Qué es la IA cuántica?",
                    de: "Was ist Quanten-KI?",
                    nl: "Wat is quantum AI?"
                },
                options: [
                    { en: "AI using quantum computing for enhanced processing", es: "IA usando computación cuántica para procesamiento mejorado", de: "KI mit Quantencomputing für verbesserte Verarbeitung", nl: "AI die quantumcomputing gebruikt voor verbeterde verwerking" },
                    { en: "Very small AI", es: "IA muy pequeña", de: "Sehr kleine KI", nl: "Heel kleine AI" },
                    { en: "AI for quantum physics", es: "IA para física cuántica", de: "KI für Quantenphysik", nl: "AI voor kwantumfysica" },
                    { en: "Futuristic AI", es: "IA futurista", de: "Futuristische KI", nl: "Futuristische AI" }
                ],
                correct: 0,
                explanation: {
                    en: "Quantum AI combines quantum computing's parallel processing capabilities with AI algorithms to potentially solve complex problems faster than classical computers.",
                    es: "La IA cuántica combina las capacidades de procesamiento paralelo de la computación cuántica con algoritmos de IA para potencialmente resolver problemas complejos más rápido que las computadoras clásicas.",
                    de: "Quanten-KI kombiniert die Parallelverarbeitungsfähigkeiten des Quantencomputings mit KI-Algorithmen, um komplexe Probleme potenziell schneller als klassische Computer zu lösen.",
                    nl: "Quantum AI combineert de parallelle verwerkingscapaciteiten van quantumcomputing met AI-algoritmen om complexe problemen potentieel sneller op te lossen dan klassieke computers."
                }
            },
            {
                question: {
                    en: "What is swarm intelligence?",
                    es: "¿Qué es la inteligencia de enjambre?",
                    de: "Was ist Schwarmintelligenz?",
                    nl: "Wat is zwerm intelligentie?"
                },
                options: [
                    { en: "AI inspired by collective behavior of groups", es: "IA inspirada en el comportamiento colectivo de grupos", de: "KI inspiriert vom kollektiven Verhalten von Gruppen", nl: "AI geïnspireerd door collectief gedrag van groepen" },
                    { en: "AI for bee colonies", es: "IA para colonias de abejas", de: "KI für Bienenvölker", nl: "AI voor bijenkolonies" },
                    { en: "Multiple AI systems", es: "Múltiples sistemas de IA", de: "Mehrere KI-Systeme", nl: "Meerdere AI-systemen" },
                    { en: "AI that moves in swarms", es: "IA que se mueve en enjambres", de: "KI, die sich in Schwärmen bewegt", nl: "AI die in zwermen beweegt" }
                ],
                correct: 0,
                explanation: {
                    en: "Swarm intelligence demonstrates how simple agents following basic rules can achieve complex collective behaviors, inspiring distributed AI systems.",
                    es: "La inteligencia de enjambre demuestra cómo agentes simples siguiendo reglas básicas pueden lograr comportamientos colectivos complejos, inspirando sistemas de IA distribuidos.",
                    de: "Schwarmintelligenz zeigt, wie einfache Agenten, die grundlegende Regeln befolgen, komplexe kollektive Verhaltensweisen erreichen können und verteilte KI-Systeme inspirieren.",
                    nl: "Zwerm intelligentie toont aan hoe eenvoudige agenten die basisregels volgen complexe collectieve gedragingen kunnen bereiken, wat gedistribueerde AI-systemen inspireert."
                }
            },
            {
                question: {
                    en: "What is edge AI?",
                    es: "¿Qué es la IA de borde?",
                    de: "Was ist Edge-KI?",
                    nl: "Wat is edge AI?"
                },
                options: [
                    { en: "AI processing on local devices instead of cloud", es: "Procesamiento de IA en dispositivos locales en lugar de la nube", de: "KI-Verarbeitung auf lokalen Geräten statt in der Cloud", nl: "AI-verwerking op lokale apparaten in plaats van cloud" },
                    { en: "AI at the edge of technology", es: "IA en el borde de la tecnología", de: "KI am Rand der Technologie", nl: "AI aan de rand van technologie" },
                    { en: "Cutting-edge AI", es: "IA de vanguardia", de: "Hochmoderne KI", nl: "Geavanceerde AI" },
                    { en: "AI for sharp edges", es: "IA para bordes afilados", de: "KI für scharfe Kanten", nl: "AI voor scherpe randen" }
                ],
                correct: 0,
                explanation: {
                    en: "Edge AI reduces latency, improves privacy, and enables real-time processing for applications like autonomous vehicles and smart devices.",
                    es: "La IA de borde reduce la latencia, mejora la privacidad y permite procesamiento en tiempo real para aplicaciones como vehículos autónomos y dispositivos inteligentes.",
                    de: "Edge-KI reduziert Latenz, verbessert Datenschutz und ermöglicht Echtzeit-Verarbeitung für Anwendungen wie autonome Fahrzeuge und intelligente Geräte.",
                    nl: "Edge AI vermindert latentie, verbetert privacy en maakt real-time verwerking mogelijk voor toepassingen zoals autonome voertuigen en slimme apparaten."
                }
            },
            {
                question: {
                    en: "What impact does AI have on jobs?",
                    es: "¿Qué impacto tiene la IA en los trabajos?",
                    de: "Welchen Einfluss hat KI auf Arbeitsplätze?",
                    nl: "Welke impact heeft AI op banen?"
                },
                options: [
                    { en: "AI can automate some jobs but also creates new ones", es: "La IA puede automatizar algunos trabajos pero también crea nuevos", de: "KI kann einige Jobs automatisieren, aber auch neue schaffen", nl: "AI kan sommige banen automatiseren maar creëert ook nieuwe" },
                    { en: "AI only destroys jobs", es: "La IA solo destruye trabajos", de: "KI zerstört nur Jobs", nl: "AI vernietigt alleen banen" },
                    { en: "AI has no effect on jobs", es: "La IA no tiene efecto en los trabajos", de: "KI hat keine Auswirkung auf Jobs", nl: "AI heeft geen effect op banen" },
                    { en: "AI only creates jobs", es: "La IA solo crea trabajos", de: "KI schafft nur Jobs", nl: "AI creëert alleen banen" }
                ],
                correct: 0,
                explanation: {
                    en: "The relationship between AI and employment is complex, requiring proactive policies for retraining and adapting to technological change.",
                    es: "La relación entre IA y empleo es compleja, requiriendo políticas proactivas para reentrenamiento y adaptación al cambio tecnológico.",
                    de: "Die Beziehung zwischen KI und Beschäftigung ist komplex und erfordert proaktive Richtlinien für Umschulung und Anpassung an technologischen Wandel.",
                    nl: "De relatie tussen AI en werkgelegenheid is complex en vereist proactief beleid voor omscholing en aanpassing aan technologische verandering."
                }
            },
            {
                question: {
                    en: "What is computer-aided design (CAD) in AI?",
                    es: "¿Qué es el diseño asistido por computadora (CAD) en IA?",
                    de: "Was ist computerunterstütztes Design (CAD) in der KI?",
                    nl: "Wat is computer-aided design (CAD) in AI?"
                },
                options: [
                    { en: "AI systems that assist in creating and optimizing designs", es: "Sistemas de IA que asisten en crear y optimizar diseños", de: "KI-Systeme, die beim Erstellen und Optimieren von Designs helfen", nl: "AI-systemen die helpen bij het creëren en optimaliseren van ontwerpen" },
                    { en: "Computer art drawing", es: "Dibujo de arte por computadora", de: "Computer-Kunstzeichnung", nl: "Computer kunst tekening" },
                    { en: "Automated drawing machines", es: "Máquinas de dibujo automatizadas", de: "Automatisierte Zeichenmaschinen", nl: "Geautomatiseerde tekenmachines" },
                    { en: "Design software only", es: "Solo software de diseño", de: "Nur Design-Software", nl: "Alleen design software" }
                ],
                correct: 0,
                explanation: {
                    en: "AI-powered CAD systems can generate multiple design alternatives, optimize for specific constraints, and accelerate the design process.",
                    es: "Los sistemas CAD potenciados por IA pueden generar múltiples alternativas de diseño, optimizar para restricciones específicas y acelerar el proceso de diseño.",
                    de: "KI-gestützte CAD-Systeme können mehrere Designalternativen generieren, für spezifische Einschränkungen optimieren und den Designprozess beschleunigen.",
                    nl: "AI-aangedreven CAD-systemen kunnen meerdere ontwerpalternatieven genereren, optimaliseren voor specifieke beperkingen en het ontwerpproces versnellen."
                }
            },
            {
                question: {
                    en: "What is AI in drug discovery?",
                    es: "¿Qué es la IA en el descubrimiento de fármacos?",
                    de: "Was ist KI in der Arzneimittelentdeckung?",
                    nl: "Wat is AI in medicijnontdekking?"
                },
                options: [
                    { en: "Using AI to accelerate pharmaceutical research and development", es: "Usar IA para acelerar la investigación y desarrollo farmacéutico", de: "KI zur Beschleunigung pharmazeutischer Forschung und Entwicklung", nl: "AI gebruiken om farmaceutisch onderzoek en ontwikkeling te versnellen" },
                    { en: "AI for drug manufacturing", es: "IA para fabricación de medicamentos", de: "KI für Arzneimittelherstellung", nl: "AI voor medicijnproductie" },
                    { en: "Robotic pharmacies", es: "Farmacias robóticas", de: "Roboter-Apotheken", nl: "Robotische apotheken" },
                    { en: "AI doctors prescribing medicine", es: "Médicos de IA recetando medicina", de: "KI-Ärzte verschreiben Medizin", nl: "AI-dokters die medicijnen voorschrijven" }
                ],
                correct: 0,
                explanation: {
                    en: "AI can analyze molecular structures, predict drug interactions, and identify promising compounds much faster than traditional methods.",
                    es: "La IA puede analizar estructuras moleculares, predecir interacciones de medicamentos e identificar compuestos prometedores mucho más rápido que los métodos tradicionales.",
                    de: "KI kann molekulare Struktururen analysieren, Arzneimittelinteraktionen vorhersagen und vielversprechende Verbindungen viel schneller als herkömmliche Methoden identifizieren.",
                    nl: "AI kan moleculaire structuren analyseren, medicijninteracties voorspellen en veelbelovende verbindingen veel sneller identificeren dan traditionele methoden."
                }
            },
            {
                question: {
                    en: "What is federated learning?",
                    es: "¿Qué es el aprendizaje federado?",
                    de: "Was ist föderiertes Lernen?",
                    nl: "Wat is federated learning?"
                },
                options: [
                    { en: "Training AI models across multiple devices without sharing raw data", es: "Entrenar modelos de IA en múltiples dispositivos sin compartir datos crudos", de: "KI-Modelle auf mehreren Geräten trainieren ohne Rohdaten zu teilen", nl: "AI-modellen trainen op meerdere apparaten zonder ruwe data te delen" },
                    { en: "Learning from government databases", es: "Aprender de bases de datos gubernamentales", de: "Lernen von Regierungsdatenbanken", nl: "Leren van overheidsdatabases" },
                    { en: "Federal AI regulations", es: "Regulaciones federales de IA", de: "Bundesweite KI-Vorschriften", nl: "Federale AI-regelgeving" },
                    { en: "Learning in groups", es: "Aprender en grupos", de: "Lernen in Gruppen", nl: "Leren in groepen" }
                ],
                correct: 0,
                explanation: {
                    en: "Federated learning enables collaborative AI training while preserving privacy by keeping data on local devices and only sharing model updates.",
                    es: "El aprendizaje federado permite el entrenamiento colaborativo de IA mientras preserva la privacidad manteniendo datos en dispositivos locales y solo compartiendo actualizaciones del modelo.",
                    de: "Föderiertes Lernen ermöglicht kollaboratives KI-Training unter Wahrung der Privatsphäre, indem Daten auf lokalen Geräten bleiben und nur Modell-Updates geteilt werden.",
                    nl: "Federated learning maakt collaboratieve AI-training mogelijk terwijl privacy wordt behouden door data op lokale apparaten te houden en alleen modelupdates te delen."
                }
            },
            {
                question: {
                    en: "What is AI governance?",
                    es: "¿Qué es la gobernanza de IA?",
                    de: "Was ist KI-Governance?",
                    nl: "Wat is AI-governance?"
                },
                options: [
                    { en: "Framework for responsible AI development and deployment", es: "Marco para el desarrollo y despliegue responsable de IA", de: "Rahmen für verantwortliche KI-Entwicklung und -Bereitstellung", nl: "Kader voor verantwoordelijke AI-ontwikkeling en -implementatie" },
                    { en: "Government control of AI", es: "Control gubernamental de IA", de: "Regierungskontrolle der KI", nl: "Overheidscontrole van AI" },
                    { en: "AI managing governments", es: "IA gestionando gobiernos", de: "KI verwaltet Regierungen", nl: "AI die regeringen beheert" },
                    { en: "Political AI systems", es: "Sistemas de IA políticos", de: "Politische KI-Systeme", nl: "Politieke AI-systemen" }
                ],
                correct: 0,
                explanation: {
                    en: "AI governance establishes policies, standards, and oversight mechanisms to ensure AI is developed and used ethically and responsibly.",
                    es: "La gobernanza de IA establece políticas, estándares y mecanismos de supervisión para asegurar que la IA se desarrolle y use éticamente y responsablemente.",
                    de: "KI-Governance etabliert Richtlinien, Standards und Überwachungsmechanismen, um sicherzustellen, dass KI ethisch und verantwortlich entwickelt und eingesetzt wird.",
                    nl: "AI-governance stelt beleid, standaarden en toezichtmechanismen vast om ervoor te zorgen dat AI ethisch en verantwoordelijk wordt ontwikkeld en gebruikt."
                }
            },
            {
                question: {
                    en: "What is multimodal AI?",
                    es: "¿Qué es la IA multimodal?",
                    de: "Was ist multimodale KI?",
                    nl: "Wat is multimodale AI?"
                },
                options: [
                    { en: "AI that processes multiple types of data like text, images, and audio", es: "IA que procesa múltiples tipos de datos como texto, imágenes y audio", de: "KI, die mehrere Datentypen wie Text, Bilder und Audio verarbeitet", nl: "AI die meerdere soorten data verwerkt zoals tekst, afbeeldingen en audio" },
                    { en: "AI with multiple personalities", es: "IA con múltiples personalidades", de: "KI mit mehreren Persönlichkeiten", nl: "AI met meerdere persoonlijkheden" },
                    { en: "AI for different modes of transport", es: "IA para diferentes modos de transporte", de: "KI für verschiedene Transportmittel", nl: "AI voor verschillende vervoerswijzen" },
                    { en: "Multiple AI systems working together", es: "Múltiples sistemas de IA trabajando juntos", de: "Mehrere KI-Systeme arbeiten zusammen", nl: "Meerdere AI-systemen die samenwerken" }
                ],
                correct: 0,
                explanation: {
                    en: "Multimodal AI can understand and generate content across different formats, enabling more sophisticated human-computer interactions.",
                    es: "La IA multimodal puede entender y generar contenido en diferentes formatos, permitiendo interacciones humano-computadora más sofisticadas.",
                    de: "Multimodale KI kann Inhalte in verschiedenen Formaten verstehen und generieren, wodurch anspruchsvollere Mensch-Computer-Interaktionen ermöglicht werden.",
                    nl: "Multimodale AI kan content begrijpen en genereren in verschillende formaten, wat meer geavanceerde mens-computer interacties mogelijk maakt."
                }
            },
            {
                question: {
                    en: "What is AI model deployment?",
                    es: "¿Qué es el despliegue de modelos de IA?",
                    de: "Was ist KI-Modell-Bereitstellung?",
                    nl: "Wat is AI-model deployment?"
                },
                options: [
                    { en: "Making trained AI models available for real-world use", es: "Hacer que los modelos de IA entrenados estén disponibles para uso en el mundo real", de: "Trainierte KI-Modelle für den realen Einsatz verfügbar machen", nl: "Getrainde AI-modellen beschikbaar maken voor gebruik in de echte wereld" },
                    { en: "Sending AI to different locations", es: "Enviar IA a diferentes ubicaciones", de: "KI an verschiedene Orte senden", nl: "AI naar verschillende locaties sturen" },
                    { en: "Military use of AI", es: "Uso militar de IA", de: "Militärischer Einsatz von KI", nl: "Militair gebruik van AI" },
                    { en: "Installing AI hardware", es: "Instalar hardware de IA", de: "KI-Hardware installieren", nl: "AI-hardware installeren" }
                ],
                correct: 0,
                explanation: {
                    en: "Model deployment involves integrating trained AI models into applications, systems, or services where they can process real data and provide value.",
                    es: "El despliegue de modelos implica integrar modelos de IA entrenados en aplicaciones, sistemas o servicios donde pueden procesar datos reales y proporcionar valor.",
                    de: "Modell-Bereitstellung beinhaltet die Integration trainierter KI-Modelle in Anwendungen, Systeme oder Services, wo sie echte Daten verarbeiten und Wert liefern können.",
                    nl: "Model deployment houdt in dat getrainde AI-modellen worden geïntegreerd in applicaties, systemen of services waar ze echte data kunnen verwerken en waarde kunnen leveren."
                }
            },
            {
                question: {
                    en: "What is AI model interpretability?",
                    es: "¿Qué es la interpretabilidad del modelo de IA?",
                    de: "Was ist KI-Modell-Interpretierbarkeit?",
                    nl: "Wat is AI-model interpreteerbaarheid?"
                },
                options: [
                    { en: "Understanding how AI models make their decisions", es: "Entender cómo los modelos de IA toman sus decisiones", de: "Verstehen, wie KI-Modelle ihre Entscheidungen treffen", nl: "Begrijpen hoe AI-modellen hun beslissingen nemen" },
                    { en: "Translating AI language", es: "Traducir el lenguaje de IA", de: "KI-Sprache übersetzen", nl: "AI-taal vertalen" },
                    { en: "Reading AI code", es: "Leer código de IA", de: "KI-Code lesen", nl: "AI-code lezen" },
                    { en: "AI explaining human behavior", es: "IA explicando comportamiento humano", de: "KI erklärt menschliches Verhalten", nl: "AI die menselijk gedrag verklaart" }
                ],
                correct: 0,
                explanation: {
                    en: "Model interpretability is crucial for trust, debugging, regulatory compliance, and ensuring AI decisions are fair and unbiased.",
                    es: "La interpretabilidad del modelo es crucial para la confianza, depuración, cumplimiento regulatorio y asegurar que las decisiones de IA sean justas e imparciales.",
                    de: "Modell-Interpretierbarkeit ist entscheidend für Vertrauen, Debugging, regulätorische Compliance und die Sicherstellung fairer und unvoreingenommener KI-Entscheidungen.",
                    nl: "Model interpreteerbaarheid is cruciaal voor vertrouwen, debugging, regulatoire naleving en het waarborgen dat AI-beslissingen eerlijk en onbevooroordeeld zijn."
                }
            },
            {
                question: {
                    en: "What is the importance of AI literacy?",
                    es: "¿Cuál es la importancia de la alfabetización en IA?",
                    de: "Was ist die Bedeutung der KI-Kompetenz?",
                    nl: "Wat is het belang van AI-geletterdheid?"
                },
                options: [
                    { en: "Understanding AI to make informed decisions in an AI-driven world", es: "Entender la IA para tomar decisiones informadas en un mundo impulsado por IA", de: "KI verstehen, um fundierte Entscheidungen in einer KI-getriebenen Welt zu treffen", nl: "AI begrijpen om geïnformeerde beslissingen te nemen in een AI-gedreven wereld" },
                    { en: "Learning to read AI books", es: "Aprender a leer libros de IA", de: "Lernen, KI-Bücher zu lesen", nl: "Leren om AI-boeken te lezen" },
                    { en: "Only for AI researchers", es: "Solo para investigadores de IA", de: "Nur für KI-Forscher", nl: "Alleen voor AI-onderzoekers" },
                    { en: "Teaching AI to read", es: "Enseñar a la IA a leer", de: "KI das Lesen beibringen", nl: "AI leren lezen" }
                ],
                correct: 0,
                explanation: {
                    en: "AI literacy empowers people to understand AI's capabilities, limitations, and implications, enabling them to use AI tools effectively and make informed decisions about AI in society.",
                    es: "La alfabetización en IA empodera a las personas para entender las capacidades, limitaciones e implicaciones de la IA, permitiéndoles usar herramientas de IA efectivamente y tomar decisiones informadas sobre la IA en la sociedad.",
                    de: "KI-Kompetenz befähigt Menschen, KI-Fähigkeiten, Grenzen und Auswirkungen zu verstehen, wodurch sie KI-Tools effektiv nutzen und fundierte Entscheidungen über KI in der Gesellschaft treffen können.",
                    nl: "AI-geletterdheid stelt mensen in staat om AI's mogelijkheden, beperkingen en implicaties te begrijpen, waardoor ze AI-tools effectief kunnen gebruiken en geïnformeerde beslissingen kunnen nemen over AI in de samenleving."
                }
            },
            {
                question: {
                    en: "What should people know about AI safety?",
                    es: "¿Qué deberían saber las personas sobre la seguridad de IA?",
                    de: "Was sollten Menschen über KI-Sicherheit wissen?",
                    nl: "Wat zouden mensen moeten weten over AI-veiligheid?"
                },
                options: [
                    { en: "AI should be developed responsibly with proper safeguards", es: "La IA debería desarrollarse responsablemente con salvaguardas apropiadas", de: "KI sollte verantwortungsvoll mit angemessenen Schutzmaßnahmen entwickelt werden", nl: "AI zou verantwoordelijk ontwikkeld moeten worden met juiste beveiligingen" },
                    { en: "AI is completely safe", es: "La IA es completamente segura", de: "KI ist vollkommen sicher", nl: "AI is volledig veilig" },
                    { en: "AI is always dangerous", es: "La IA siempre es peligrosa", de: "KI ist immer gefährlich", nl: "AI is altijd gevaarlijk" },
                    { en: "AI safety is not important", es: "La seguridad de IA no es importante", de: "KI-Sicherheit ist nicht wichtig", nl: "AI-veiligheid is niet belangrijk" }
                ],
                correct: 0,
                explanation: {
                    en: "AI safety involves ensuring AI systems are reliable, beneficial, and aligned with human values while minimizing potential risks and unintended consequences.",
                    es: "La seguridad de IA implica asegurar que los sistemas de IA sean confiables, beneficiosos y alineados con los valores humanos mientras minimizan riesgos potenciales y consecuencias no deseadas.",
                    de: "KI-Sicherheit beinhaltet sicherzustellen, dass KI-Systeme zuverlässig, vorteilhaft und mit menschlichen Werten ausgerichtet sind, während potenzielle Risiken und unbeabsichtigte Folgen minimiert werden.",
                    nl: "AI-veiligheid houdt in dat AI-systemen betrouwbaar, voordelig en afgestemd zijn op menselijke waarden terwijl potentiële risico's en onbedoelde gevolgen worden geminimaliseerd."
                }
            },
            {
                question: {
                    en: "What is the future potential of AI?",
                    es: "¿Cuál es el potencial futuro de la IA?",
                    de: "Was ist das zukünftige Potenzial der KI?",
                    nl: "Wat is het toekomstige potentieel van AI?"
                },
                options: [
                    { en: "Transforming every industry and aspect of human life", es: "Transformar cada industria y aspecto de la vida humana", de: "Jede Industrie und jeden Aspekt des menschlichen Lebens transformieren", nl: "Elke industrie en aspect van het menselijk leven transformeren" },
                    { en: "Replacing all humans", es: "Reemplazar a todos los humanos", de: "Alle Menschen ersetzen", nl: "Alle mensen vervangen" },
                    { en: "Only improving computers", es: "Solo mejorar computadoras", de: "Nur Computer verbessern", nl: "Alleen computers verbeteren" },
                    { en: "Limited to current applications", es: "Limitado a aplicaciones actuales", de: "Begrenzt auf aktuelle Anwendungen", nl: "Beperkt tot huidige toepassingen" }
                ],
                correct: 0,
                explanation: {
                    en: "AI's potential spans healthcare, education, climate change, space exploration, and countless other fields, promising to enhance human capabilities and solve complex global challenges.",
                    es: "El potencial de la IA abarca atención médica, educación, cambio climático, exploración espacial y muchos otros campos, prometiendo mejorar las capacidades humanas y resolver desafíos globales complejos.",
                    de: "Das Potenzial der KI erstreckt sich auf Gesundheitswesen, Bildung, Klimawandel, Weltraumforschung und unzählige andere Bereiche und verspricht, menschliche Fähigkeiten zu verbessern und komplexe globale Herausforderungen zu lösen.",
                    nl: "AI's potentieel beslaat gezondheidszorg, onderwijs, klimaatverandering, ruimteverkenning en talloze andere gebieden, met de belofte menselijke capaciteiten te verbeteren en complexe mondiale uitdagingen op te lossen."
                }
            },
            {
                question: {
                    en: "What is human-AI collaboration?",
                    es: "¿Qué es la colaboración humano-IA?",
                    de: "Was ist Mensch-KI-Zusammenarbeit?",
                    nl: "Wat is mens-AI samenwerking?"
                },
                options: [
                    { en: "Humans and AI working together to achieve better results", es: "Humanos e IA trabajando juntos para lograr mejores resultados", de: "Menschen und KI arbeiten zusammen, um bessere Ergebnisse zu erzielen", nl: "Mensen en AI die samenwerken om betere resultaten te behalen" },
                    { en: "AI replacing human workers", es: "IA reemplazando trabajadores humanos", de: "KI ersetzt menschliche Arbeiter", nl: "AI die menselijke werknemers vervangt" },
                    { en: "Humans teaching AI everything", es: "Humanos enseñando todo a la IA", de: "Menschen bringen KI alles bei", nl: "Mensen die AI alles leren" },
                    { en: "AI controlling human actions", es: "IA controlando acciones humanas", de: "KI kontrolliert menschliche Handlungen", nl: "AI die menselijke acties controleert" }
                ],
                correct: 0,
                explanation: {
                    en: "Human-AI collaboration leverages the unique strengths of both humans and AI, combining human creativity and judgment with AI's processing power and precision.",
                    es: "La colaboración humano-IA aprovecha las fortalezas únicas tanto de humanos como de IA, combinando la creatividad y el juicio humanos con el poder de procesamiento y precisión de la IA.",
                    de: "Mensch-KI-Zusammenarbeit nutzt die einzigartigen Stärken sowohl von Menschen als auch von KI und kombiniert menschliche Kreativität und Urteilsvermögen mit KI-Verarbeitungsleistung und Präzision.",
                    nl: "Mens-AI samenwerking benut de unieke sterke punten van zowel mensen als AI, door menselijke creativiteit en oordeel te combineren met AI's verwerkingskracht en precisie."
                }
            },
            {
                question: {
                    en: "What is AI transparency?",
                    es: "¿Qué es la transparencia de IA?",
                    de: "Was ist KI-Transparenz?",
                    nl: "Wat is AI-transparantie?"
                },
                options: [
                    { en: "Making AI systems open and understandable to users", es: "Hacer que los sistemas de IA sean abiertos y comprensibles para los usuarios", de: "KI-Systeme offen und verständlich für Benutzer machen", nl: "AI-systemen open en begrijpelijk maken voor gebruikers" },
                    { en: "Making AI invisible to users", es: "Hacer que la IA sea invisible para los usuarios", de: "KI für Benutzer unsichtbar machen", nl: "AI onzichtbaar maken voor gebruikers" },
                    { en: "Clear computer screens", es: "Pantallas de computadora claras", de: "Klare Computerbildschirme", nl: "Heldere computerschermen" },
                    { en: "Transparent AI hardware", es: "Hardware de IA transparente", de: "Transparente KI-Hardware", nl: "Transparante AI-hardware" }
                ],
                correct: 0,
                explanation: {
                    en: "AI transparency involves making AI decision processes, capabilities, and limitations clear to users, enabling better understanding and trust.",
                    es: "La transparencia de IA implica hacer claros los procesos de decisión, capacidades y limitaciones de la IA para los usuarios, permitiendo mejor comprensión y confianza.",
                    de: "KI-Transparenz beinhaltet, KI-Entscheidungsprozesse, Fähigkeiten und Grenzen für Benutzer klar zu machen und besseres Verständnis und Vertrauen zu ermöglichen.",
                    nl: "AI-transparantie houdt in dat AI-beslissingsprocessen, mogelijkheden en beperkingen duidelijk worden gemaakt voor gebruikers, waardoor beter begrip en vertrouwen mogelijk wordt."
                }
            },
            {
                question: {
                    en: "What is the ultimate goal of AI research?",
                    es: "¿Cuál es el objetivo final de la investigación en IA?",
                    de: "Was ist das ultimative Ziel der KI-Forschung?",
                    nl: "Wat is het uiteindelijke doel van AI-onderzoek?"
                },
                options: [
                    { en: "Creating beneficial AI that enhances human capabilities and well-being", es: "Crear IA benéfica que mejore las capacidades humanas y el bienestar", de: "Vorteilhafte KI schaffen, die menschliche Fähigkeiten und Wohlbefinden verbessert", nl: "Voordelige AI creëren die menselijke capaciteiten en welzijn verbetert" },
                    { en: "Replacing all human intelligence", es: "Reemplazar toda la inteligencia humana", de: "Alle menschliche Intelligenz ersetzen", nl: "Alle menselijke intelligentie vervangen" },
                    { en: "Building the most powerful computers", es: "Construir las computadoras más poderosas", de: "Die leistungsfähigsten Computer bauen", nl: "De krachtigste computers bouwen" },
                    { en: "Making money from AI products", es: "Ganar dinero con productos de IA", de: "Geld mit KI-Produkten verdienen", nl: "Geld verdienen met AI-producten" }
                ],
                correct: 0,
                explanation: {
                    en: "The ultimate goal of AI research is to create systems that augment human intelligence and capabilities while ensuring safety, fairness, and benefit to all humanity.",
                    es: "El objetivo final de la investigación en IA es crear sistemas que aumenten la inteligencia y capacidades humanas mientras aseguran seguridad, equidad y beneficio para toda la humanidad.",
                    de: "Das ultimative Ziel der KI-Forschung ist es, Systeme zu schaffen, die menschliche Intelligenz und Fähigkeiten erweitern, während Sicherheit, Fairness und Nutzen für die gesamte Menschheit gewährleistet werden.",
                    nl: "Het uiteindelijke doel van AI-onderzoek is het creëren van systemen die menselijke intelligentie en capaciteiten versterken terwijl veiligheid, eerlijkheid en voordeel voor de hele mensheid worden gewaarborgd."
                }
            }
        ]
    };

    if (typeof window.addLevel === 'function') {
        window.addLevel('warm-up/technology', level4);
    }
})();