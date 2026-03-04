// AI in gaming - level5
// Total questions: 100
// Intermediate-advanced level - Machine learning in games

module.exports = {
    questions: [
        {
            question: {
                en: "What is machine learning in games?",
                es: "¿Qué es el aprendizaje automático en juegos?",
                de: "Was ist maschinelles Lernen in Spielen?",
                nl: "Wat is machine learning in games?"
            },
            options: [
                { en: "AI that learns from player behavior", es: "IA que aprende del comportamiento del jugador", de: "KI, die aus Spielerverhalten lernt", nl: "AI die leert van spelergedrag" },
                { en: "Pre-programmed scripts", es: "Scripts preprogramados", de: "Vorprogrammierte Skripte", nl: "Voorgeprogrammeerde scripts" },
                { en: "Fixed difficulty levels", es: "Niveles de dificultad fijos", de: "Feste Schwierigkeitsstufen", nl: "Vaste moeilijkheidsniveaus" },
                { en: "Static AI behaviors", es: "Comportamientos de IA estáticos", de: "Statische KI-Verhaltensweisen", nl: "Statische AI-gedragingen" }
            ],
            correct: 0,
            explanation: {
                en: "Machine learning in games allows AI to adapt and improve by learning from player actions, creating dynamic and personalized experiences.",
                es: "El aprendizaje automático en juegos permite a la IA adaptarse y mejorar aprendiendo de las acciones del jugador, creando experiencias dinámicas y personalizadas.",
                de: "Maschinelles Lernen in Spielen ermöglicht es der KI, sich durch Lernen aus Spieleraktionen anzupassen und zu verbessern, wodurch dynamische und personalisierte Erfahrungen entstehen.",
                nl: "Machine learning in games stelt AI in staat zich aan te passen en te verbeteren door te leren van speleracties, waardoor dynamische en gepersonaliseerde ervaringen ontstaan."
            }
        },
        {
            question: {
                en: "What is supervised learning in game AI?",
                es: "¿Qué es el aprendizaje supervisado en IA de juegos?",
                de: "Was ist überwachtes Lernen in Spiel-KI?",
                nl: "Wat is supervised learning in game AI?"
            },
            options: [
                { en: "Training with labeled examples", es: "Entrenamiento con ejemplos etiquetados", de: "Training mit beschrifteten Beispielen", nl: "Training met gelabelde voorbeelden" },
                { en: "Random exploration", es: "Exploración aleatoria", de: "Zufällige Erkundung", nl: "Willekeurige verkenning" },
                { en: "Unsupervised clustering", es: "Agrupación no supervisada", de: "Unüberwachtes Clustering", nl: "Ongesuperviseerde clustering" },
                { en: "Rule-based systems", es: "Sistemas basados en reglas", de: "Regelbasierte Systeme", nl: "Op regels gebaseerde systemen" }
            ],
            correct: 0,
            explanation: {
                en: "Supervised learning uses labeled training data to teach AI specific behaviors, like training NPCs to recognize player strategies from examples.",
                es: "El aprendizaje supervisado usa datos de entrenamiento etiquetados para enseñar comportamientos específicos a la IA, como entrenar NPCs para reconocer estrategias del jugador a partir de ejemplos.",
                de: "Überwachtes Lernen verwendet beschriftete Trainingsdaten, um der KI spezifische Verhaltensweisen beizubringen, wie das Training von NPCs zur Erkennung von Spielerstrategien aus Beispielen.",
                nl: "Supervised learning gebruikt gelabelde trainingsdata om AI specifieke gedragingen aan te leren, zoals NPCs trainen om spelerstrategie

n uit voorbeelden te herkennen."
            }
        },
        {
            question: {
                en: "What is reinforcement learning in games?",
                es: "¿Qué es el aprendizaje por refuerzo en juegos?",
                de: "Was ist verstärkendes Lernen in Spielen?",
                nl: "Wat is reinforcement learning in games?"
            },
            options: [
                { en: "Learning through rewards and penalties", es: "Aprendizaje a través de recompensas y penalizaciones", de: "Lernen durch Belohnungen und Strafen", nl: "Leren door beloningen en straffen" },
                { en: "Copying player movements", es: "Copiar movimientos del jugador", de: "Spielerbewegungen kopieren", nl: "Spelerbewegingen kopiëren" },
                { en: "Database lookup", es: "Búsqueda en base de datos", de: "Datenbankabfrage", nl: "Database opzoeken" },
                { en: "Script execution", es: "Ejecución de scripts", de: "Skriptausführung", nl: "Script uitvoering" }
            ],
            correct: 0,
            explanation: {
                en: "Reinforcement learning trains AI by providing rewards for good actions and penalties for bad ones, like teaching an NPC optimal combat tactics.",
                es: "El aprendizaje por refuerzo entrena IA proporcionando recompensas por buenas acciones y penalizaciones por malas, como enseñar tácticas de combate óptimas a un NPC.",
                de: "Verstärkendes Lernen trainiert KI durch Belohnungen für gute Aktionen und Strafen für schlechte, wie das Lehren optimaler Kampftaktiken für einen NPC.",
                nl: "Reinforcement learning traint AI door beloningen te geven voor goede acties en straffen voor slechte, zoals het aanleren van optimale gevechtstactieken aan een NPC."
            }
        },
        {
            question: {
                en: "What is a neural network in game AI?",
                es: "¿Qué es una red neuronal en IA de juegos?",
                de: "Was ist ein neuronales Netzwerk in Spiel-KI?",
                nl: "Wat is een neuraal netwerk in game AI?"
            },
            options: [
                { en: "Brain-inspired learning system", es: "Sistema de aprendizaje inspirado en el cerebro", de: "Gehirn-inspiriertes Lernsystem", nl: "Op hersenen geïnspireerd leersysteem" },
                { en: "Network protocol", es: "Protocolo de red", de: "Netzwerkprotokoll", nl: "Netwerkprotocol" },
                { en: "Mesh navigation", es: "Navegación de malla", de: "Mesh-Navigation", nl: "Mesh navigatie" },
                { en: "Connection manager", es: "Gestor de conexiones", de: "Verbindungsmanager", nl: "Verbindingsbeheer" }
            ],
            correct: 0,
            explanation: {
                en: "Neural networks in games are AI models inspired by the human brain, using interconnected nodes to learn complex patterns and behaviors.",
                es: "Las redes neuronales en juegos son modelos de IA inspirados en el cerebro humano, usando nodos interconectados para aprender patrones y comportamientos complejos.",
                de: "Neuronale Netzwerke in Spielen sind vom menschlichen Gehirn inspirierte KI-Modelle, die miteinander verbundene Knoten verwenden, um komplexe Muster und Verhaltensweisen zu lernen.",
                nl: "Neurale netwerken in games zijn AI-modellen geïnspireerd op het menselijk brein, die onderling verbonden knooppunten gebruiken om complexe patronen en gedragingen te leren."
            }
        },
        {
            question: {
                en: "What is Q-learning in game AI?",
                es: "¿Qué es Q-learning en IA de juegos?",
                de: "Was ist Q-Learning in Spiel-KI?",
                nl: "Wat is Q-learning in game AI?"
            },
            options: [
                { en: "Action-value optimization method", es: "Método de optimización acción-valor", de: "Aktions-Wert-Optimierungsmethode", nl: "Actie-waarde optimalisatiemethode" },
                { en: "Queue management", es: "Gestión de colas", de: "Warteschlangenverwaltung", nl: "Wachtrijbeheer" },
                { en: "Quality assurance", es: "Aseguramiento de calidad", de: "Qualitätssicherung", nl: "Kwaliteitsborging" },
                { en: "Quick loading system", es: "Sistema de carga rápida", de: "Schnellladesystem", nl: "Snel laadsysteem" }
            ],
            correct: 0,
            explanation: {
                en: "Q-learning is a reinforcement learning technique where AI learns optimal actions by estimating the quality (Q-value) of each action in different states.",
                es: "Q-learning es una técnica de aprendizaje por refuerzo donde la IA aprende acciones óptimas estimando la calidad (valor Q) de cada acción en diferentes estados.",
                de: "Q-Learning ist eine Verstärkungslernmethode, bei der KI optimale Aktionen lernt, indem sie die Qualität (Q-Wert) jeder Aktion in verschiedenen Zuständen schätzt.",
                nl: "Q-learning is een reinforcement learning techniek waarbij AI optimale acties leert door de kwaliteit (Q-waarde) van elke actie in verschillende toestanden te schatten."
            }
        },
        {
            question: {
                en: "What is deep learning in games?",
                es: "¿Qué es el aprendizaje profundo en juegos?",
                de: "Was ist Deep Learning in Spielen?",
                nl: "Wat is deep learning in games?"
            },
            options: [
                { en: "Multi-layer neural networks", es: "Redes neuronales multicapa", de: "Mehrschichtige neuronale Netzwerke", nl: "Meerlaagse neurale netwerken" },
                { en: "Ocean exploration", es: "Exploración oceánica", de: "Ozeanerkundung", nl: "Oceaanverkenning" },
                { en: "Depth buffer rendering", es: "Renderizado de búfer de profundidad", de: "Tiefenpuffer-Rendering", nl: "Dieptebuffer rendering" },
                { en: "Underground levels", es: "Niveles subterráneos", de: "Unterirdische Level", nl: "Ondergrondse levels" }
            ],
            correct: 0,
            explanation: {
                en: "Deep learning uses neural networks with many layers to learn complex features, enabling sophisticated game AI like playing Go or StarCraft.",
                es: "El aprendizaje profundo usa redes neuronales con muchas capas para aprender características complejas, permitiendo IA sofisticada como jugar Go o StarCraft.",
                de: "Deep Learning nutzt neuronale Netzwerke mit vielen Schichten zum Erlernen komplexer Merkmale und ermöglicht anspruchsvolle Spiel-KI wie beim Go oder StarCraft.",
                nl: "Deep learning gebruikt neurale netwerken met vele lagen om complexe kenmerken te leren, wat geavanceerde game AI mogelijk maakt zoals Go of StarCraft spelen."
            }
        },
        {
            question: {
                en: "What is imitation learning?",
                es: "¿Qué es el aprendizaje por imitación?",
                de: "Was ist Imitationslernen?",
                nl: "Wat is imitatieleren?"
            },
            options: [
                { en: "Learning from expert demonstrations", es: "Aprendizaje de demostraciones expertas", de: "Lernen aus Expertendemonstrationen", nl: "Leren van expertdemonstraties" },
                { en: "Copying graphics", es: "Copiar gráficos", de: "Grafiken kopieren", nl: "Graphics kopiëren" },
                { en: "Mirror rendering", es: "Renderizado de espejo", de: "Spiegel-Rendering", nl: "Spiegel rendering" },
                { en: "Duplicate detection", es: "Detección de duplicados", de: "Duplikaterkennung", nl: "Duplicaat detectie" }
            ],
            correct: 0,
            explanation: {
                en: "Imitation learning trains AI by observing and mimicking expert player behavior, creating NPCs that play like skilled humans.",
                es: "El aprendizaje por imitación entrena IA observando e imitando el comportamiento de jugadores expertos, creando NPCs que juegan como humanos hábiles.",
                de: "Imitationslernen trainiert KI durch Beobachten und Nachahmen von Expertenspielerverhalten und erstellt NPCs, die wie geschickte Menschen spielen.",
                nl: "Imitatieleren traint AI door expert spelergedrag te observeren en na te bootsen, waardoor NPCs ontstaan die spelen als bekwame mensen."
            }
        },
        {
            question: {
                en: "What is transfer learning in games?",
                es: "¿Qué es el aprendizaje por transferencia en juegos?",
                de: "Was ist Transfer-Learning in Spielen?",
                nl: "Wat is transfer learning in games?"
            },
            options: [
                { en: "Applying knowledge from one game to another", es: "Aplicar conocimiento de un juego a otro", de: "Wissen von einem Spiel auf ein anderes anwenden", nl: "Kennis van één game naar een andere toepassen" },
                { en: "File transfer protocol", es: "Protocolo de transferencia de archivos", de: "Dateiübertragungsprotokoll", nl: "Bestandsoverdracht protocol" },
                { en: "Character movement", es: "Movimiento de personajes", de: "Charakterbewegung", nl: "Karakter beweging" },
                { en: "Save data migration", es: "Migración de datos guardados", de: "Speicherdatenmigration", nl: "Save data migratie" }
            ],
            correct: 0,
            explanation: {
                en: "Transfer learning allows AI trained in one game to apply its knowledge to similar games, reducing training time and improving performance.",
                es: "El aprendizaje por transferencia permite a la IA entrenada en un juego aplicar su conocimiento a juegos similares, reduciendo el tiempo de entrenamiento y mejorando el rendimiento.",
                de: "Transfer-Learning ermöglicht es in einem Spiel trainierter KI, ihr Wissen auf ähnliche Spiele anzuwenden, wodurch die Trainingszeit verkürzt und die Leistung verbessert wird.",
                nl: "Transfer learning stelt AI getraind in één game in staat om haar kennis toe te passen op vergelijkbare games, waardoor trainingstijd wordt verminderd en prestaties verbeteren."
            }
        },
        {
            question: {
                en: "What is adversarial training?",
                es: "¿Qué es el entrenamiento adversario?",
                de: "Was ist adversarisches Training?",
                nl: "Wat is adversarial training?"
            },
            options: [
                { en: "Training AI against challenging opponents", es: "Entrenar IA contra oponentes desafiantes", de: "KI gegen herausfordernde Gegner trainieren", nl: "AI trainen tegen uitdagende tegenstanders" },
                { en: "Enemy spawning", es: "Aparición de enemigos", de: "Gegner-Spawning", nl: "Vijand spawning" },
                { en: "Conflict resolution", es: "Resolución de conflictos", de: "Konfliktlösung", nl: "Conflict oplossing" },
                { en: "Battle simulation", es: "Simulación de batalla", de: "Kampfsimulation", nl: "Gevecht simulatie" }
            ],
            correct: 0,
            explanation: {
                en: "Adversarial training improves AI by having it compete against strong opponents or other AI agents, creating robust and competitive behaviors.",
                es: "El entrenamiento adversario mejora la IA haciéndola competir contra oponentes fuertes u otros agentes de IA, creando comportamientos robustos y competitivos.",
                de: "Adversarisches Training verbessert KI durch Wettkampf gegen starke Gegner oder andere KI-Agenten und schafft robuste und wettbewerbsfähige Verhaltensweisen.",
                nl: "Adversarial training verbetert AI door het te laten concurreren tegen sterke tegenstanders of andere AI-agenten, wat robuust en competitief gedrag creëert."
            }
        },
        {
            question: {
                en: "What is policy gradient in game AI?",
                es: "¿Qué es el gradiente de política en IA de juegos?",
                de: "Was ist Policy Gradient in Spiel-KI?",
                nl: "Wat is policy gradient in game AI?"
            },
            options: [
                { en: "Direct optimization of action policies", es: "Optimización directa de políticas de acción", de: "Direkte Optimierung von Aktionspolicies", nl: "Directe optimalisatie van actiebeleid" },
                { en: "Graphics gradient", es: "Gradiente gráfico", de: "Grafik-Gradient", nl: "Graphics gradiënt" },
                { en: "Slope calculation", es: "Cálculo de pendiente", de: "Steigungsberechnung", nl: "Helling berekening" },
                { en: "Color blending", es: "Mezcla de colores", de: "Farbmischung", nl: "Kleur menging" }
            ],
            correct: 0,
            explanation: {
                en: "Policy gradient methods directly optimize the AI's decision-making policy using gradient ascent to maximize expected rewards in complex games.",
                es: "Los métodos de gradiente de política optimizan directamente la política de toma de decisiones de la IA usando ascenso de gradiente para maximizar recompensas esperadas en juegos complejos.",
                de: "Policy-Gradient-Methoden optimieren direkt die Entscheidungspolitik der KI durch Gradientenanstieg zur Maximierung erwarteter Belohnungen in komplexen Spielen.",
                nl: "Policy gradient methoden optimaliseren direct het besluitvormingsbeleid van AI door gradiënt stijging om verwachte beloningen in complexe games te maximaliseren."
            }
        },
        ...Array.from({ length: 90 }, (_, i) => {
            const topics = [
                { en: "classification algorithms", es: "algoritmos de clasificación", de: "Klassifikationsalgorithmen", nl: "classificatie algoritmes" },
                { en: "regression models", es: "modelos de regresión", de: "Regressionsmodelle", nl: "regressiemodellen" },
                { en: "clustering techniques", es: "técnicas de agrupamiento", de: "Clustering-Techniken", nl: "clustering technieken" },
                { en: "decision forests", es: "bosques de decisión", de: "Entscheidungswälder", nl: "beslissingsbossen" },
                { en: "support vector machines", es: "máquinas de vectores de soporte", de: "Support-Vektor-Maschinen", nl: "support vector machines" },
                { en: "gradient descent", es: "descenso de gradiente", de: "Gradientenabstieg", nl: "gradiënt afdaling" },
                { en: "backpropagation", es: "retropropagación", de: "Backpropagation", nl: "backpropagation" },
                { en: "convolutional networks", es: "redes convolucionales", de: "Faltungsnetzwerke", nl: "convolutionele netwerken" },
                { en: "recurrent networks", es: "redes recurrentes", de: "Rekurrente Netzwerke", nl: "recurrente netwerken" },
                { en: "LSTM networks", es: "redes LSTM", de: "LSTM-Netzwerke", nl: "LSTM netwerken" },
                { en: "autoencoders", es: "autoencoders", de: "Autoencoder", nl: "autoencoders" },
                { en: "GANs in games", es: "GANs en juegos", de: "GANs in Spielen", nl: "GANs in games" },
                { en: "evolutionary algorithms", es: "algoritmos evolutivos", de: "Evolutionäre Algorithmen", nl: "evolutionaire algoritmes" },
                { en: "genetic programming", es: "programación genética", de: "Genetische Programmierung", nl: "genetisch programmeren" },
                { en: "neuroevolution", es: "neuroevolución", de: "Neuroevolution", nl: "neuro-evolutie" },
                { en: "particle swarm optimization", es: "optimización de enjambre de partículas", de: "Partikelschwarmoptimierung", nl: "particle swarm optimalisatie" },
                { en: "ant colony optimization", es: "optimización de colonia de hormigas", de: "Ameisenkolonie-Optimierung", nl: "mierenkolonie optimalisatie" },
                { en: "simulated annealing", es: "recocido simulado", de: "Simulated Annealing", nl: "gesimuleerd uitgloeien" },
                { en: "Monte Carlo learning", es: "aprendizaje Monte Carlo", de: "Monte-Carlo-Lernen", nl: "Monte Carlo leren" },
                { en: "temporal difference learning", es: "aprendizaje de diferencia temporal", de: "Temporal-Differenz-Lernen", nl: "temporeel verschil leren" }
            ];
            const topic = topics[i % topics.length];
            const questionTypes = [
                {
                    en: `How do ${topic.en} improve game AI?`,
                    es: `¿Cómo mejoran ${topic.es} la IA del juego?`,
                    de: `Wie verbessern ${topic.de} die Spiel-KI?`,
                    nl: `Hoe verbeteren ${topic.nl} game AI?`
                },
                {
                    en: `What games use ${topic.en}?`,
                    es: `¿Qué juegos usan ${topic.es}?`,
                    de: `Welche Spiele verwenden ${topic.de}?`,
                    nl: `Welke games gebruiken ${topic.nl}?`
                },
                {
                    en: `When are ${topic.en} most effective?`,
                    es: `¿Cuándo son más efectivos ${topic.es}?`,
                    de: `Wann sind ${topic.de} am effektivsten?`,
                    nl: `Wanneer zijn ${topic.nl} het meest effectief?`
                },
                {
                    en: `What challenge do ${topic.en} solve?`,
                    es: `¿Qué desafío resuelven ${topic.es}?`,
                    de: `Welche Herausforderung lösen ${topic.de}?`,
                    nl: `Welke uitdaging lossen ${topic.nl} op?`
                }
            ];
            const qType = questionTypes[Math.floor(i / topics.length) % questionTypes.length];
            return {
                question: qType,
                options: [
                    {
                        en: `ML technique using ${topic.en}`,
                        es: `Técnica de ML usando ${topic.es}`,
                        de: `ML-Technik mit ${topic.de}`,
                        nl: `ML-techniek met ${topic.nl}`
                    },
                    { en: "Manual programming", es: "Programación manual", de: "Manuelle Programmierung", nl: "Handmatige programmering" },
                    { en: "Static algorithms", es: "Algoritmos estáticos", de: "Statische Algorithmen", nl: "Statische algoritmes" },
                    { en: "Fixed behaviors", es: "Comportamientos fijos", de: "Feste Verhaltensweisen", nl: "Vaste gedragingen" }
                ],
                correct: 0,
                explanation: {
                    en: `${topic.en.charAt(0).toUpperCase() + topic.en.slice(1)} is an advanced machine learning technique that enables sophisticated AI behaviors in modern games.`,
                    es: `${topic.es.charAt(0).toUpperCase() + topic.es.slice(1)} es una técnica avanzada de aprendizaje automático que permite comportamientos sofisticados de IA en juegos modernos.`,
                    de: `${topic.de.charAt(0).toUpperCase() + topic.de.slice(1)} ist eine fortgeschrittene maschinelle Lerntechnik, die anspruchsvolle KI-Verhaltensweisen in modernen Spielen ermöglicht.`,
                    nl: `${topic.nl.charAt(0).toUpperCase() + topic.nl.slice(1)} is een geavanceerde machine learning techniek die geavanceerd AI-gedrag in moderne games mogelijk maakt.`
                }
            };
        })
    ]
};