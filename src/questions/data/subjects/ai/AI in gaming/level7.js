// AI in gaming - level7
// Total questions: 100
// Advanced level - Deep reinforcement learning

module.exports = {
    questions: [
        {
            question: {
                en: "What is Deep Q-Network (DQN)?",
                es: "¿Qué es Deep Q-Network (DQN)?",
                de: "Was ist Deep Q-Network (DQN)?",
                nl: "Wat is Deep Q-Network (DQN)?"
            },
            options: [
                { en: "Deep learning for Q-learning", es: "Aprendizaje profundo para Q-learning", de: "Deep Learning für Q-Learning", nl: "Deep learning voor Q-learning" },
                { en: "Database query network", es: "Red de consulta de base de datos", de: "Datenbank-Abfragenetzwerk", nl: "Database query netwerk" },
                { en: "Digital quality network", es: "Red de calidad digital", de: "Digitales Qualitätsnetzwerk", nl: "Digitaal kwaliteitsnetwerk" },
                { en: "Direct question node", es: "Nodo de pregunta directa", de: "Direkter Frageknoten", nl: "Directe vraag node" }
            ],
            correct: 0,
            explanation: {
                en: "DQN combines deep neural networks with Q-learning, enabling AI to learn complex games directly from raw pixels, like Atari games.",
                es: "DQN combina redes neuronales profundas con Q-learning, permitiendo a la IA aprender juegos complejos directamente desde píxeles crudos, como juegos de Atari.",
                de: "DQN kombiniert tiefe neuronale Netze mit Q-Learning und ermöglicht KI, komplexe Spiele direkt aus rohen Pixeln zu lernen, wie Atari-Spiele.",
                nl: "DQN combineert diepe neurale netwerken met Q-learning, waardoor AI complexe games direct van ruwe pixels kan leren, zoals Atari-games."
            }
        },
        {
            question: {
                en: "What is A3C algorithm?",
                es: "¿Qué es el algoritmo A3C?",
                de: "Was ist der A3C-Algorithmus?",
                nl: "Wat is het A3C algoritme?"
            },
            options: [
                { en: "Asynchronous Advantage Actor-Critic", es: "Actor-Crítico de Ventaja Asíncrono", de: "Asynchroner Advantage Actor-Critic", nl: "Asynchrone Advantage Actor-Critic" },
                { en: "Advanced 3D Computing", es: "Computación 3D Avanzada", de: "Erweiterte 3D-Berechnung", nl: "Geavanceerde 3D Computing" },
                { en: "Automatic Code Compiler", es: "Compilador de Código Automático", de: "Automatischer Code-Compiler", nl: "Automatische Code Compiler" },
                { en: "Audio Channel Controller", es: "Controlador de Canal de Audio", de: "Audiokanal-Controller", nl: "Audio Kanaal Controller" }
            ],
            correct: 0,
            explanation: {
                en: "A3C uses multiple parallel actors to explore different parts of the game simultaneously, speeding up learning and improving stability.",
                es: "A3C usa múltiples actores paralelos para explorar diferentes partes del juego simultáneamente, acelerando el aprendizaje y mejorando la estabilidad.",
                de: "A3C nutzt mehrere parallele Akteure zur gleichzeitigen Erkundung verschiedener Spielbereiche, beschleunigt das Lernen und verbessert die Stabilität.",
                nl: "A3C gebruikt meerdere parallelle actoren om verschillende delen van het spel tegelijk te verkennen, wat het leren versnelt en stabiliteit verbetert."
            }
        },
        {
            question: {
                en: "What is PPO in game AI?",
                es: "¿Qué es PPO en IA de juegos?",
                de: "Was ist PPO in Spiel-KI?",
                nl: "Wat is PPO in game AI?"
            },
            options: [
                { en: "Proximal Policy Optimization", es: "Optimización de Política Proximal", de: "Proximale Policy-Optimierung", nl: "Proximale Beleidsoptimalisatie" },
                { en: "Player Performance Optimizer", es: "Optimizador de Rendimiento del Jugador", de: "Spielerleistungsoptimierer", nl: "Speler Prestatie Optimizer" },
                { en: "Parallel Processing Operation", es: "Operación de Procesamiento Paralelo", de: "Parallelverarbeitungsoperation", nl: "Parallelle Verwerkingsoperatie" },
                { en: "Power Performance Output", es: "Salida de Rendimiento de Potencia", de: "Leistungsausgabe", nl: "Kracht Prestatie Output" }
            ],
            correct: 0,
            explanation: {
                en: "PPO is a robust reinforcement learning algorithm that prevents large policy updates, making training more stable for complex games.",
                es: "PPO es un algoritmo robusto de aprendizaje por refuerzo que previene grandes actualizaciones de política, haciendo el entrenamiento más estable para juegos complejos.",
                de: "PPO ist ein robuster Reinforcement-Learning-Algorithmus, der große Policy-Updates verhindert und das Training für komplexe Spiele stabiler macht.",
                nl: "PPO is een robuust reinforcement learning algoritme dat grote beleidswijzigingen voorkomt, wat training stabieler maakt voor complexe games."
            }
        },
        {
            question: {
                en: "What is DDPG algorithm?",
                es: "¿Qué es el algoritmo DDPG?",
                de: "Was ist der DDPG-Algorithmus?",
                nl: "Wat is het DDPG algoritme?"
            },
            options: [
                { en: "Deep Deterministic Policy Gradient", es: "Gradiente de Política Determinista Profundo", de: "Deep Deterministic Policy Gradient", nl: "Deep Deterministic Policy Gradient" },
                { en: "Dynamic Data Processing Graph", es: "Gráfico de Procesamiento de Datos Dinámico", de: "Dynamischer Datenverarbeitungsgraph", nl: "Dynamische Dataverwerkingsgrafiek" },
                { en: "Direct Digital Programming Guide", es: "Guía de Programación Digital Directa", de: "Direkter digitaler Programmführer", nl: "Directe Digitale Programmagids" },
                { en: "Distributed Database Protocol Gateway", es: "Puerta de Enlace de Protocolo de Base de Datos Distribuida", de: "Verteiltes Datenbankprotokoll-Gateway", nl: "Gedistribueerde Database Protocol Gateway" }
            ],
            correct: 0,
            explanation: {
                en: "DDPG combines DQN with actor-critic methods for continuous action spaces, ideal for games with analog controls.",
                es: "DDPG combina DQN con métodos actor-crítico para espacios de acción continuos, ideal para juegos con controles analógicos.",
                de: "DDPG kombiniert DQN mit Actor-Critic-Methoden für kontinuierliche Aktionsräume, ideal für Spiele mit analogen Steuerungen.",
                nl: "DDPG combineert DQN met actor-critic methoden voor continue actieruimtes, ideaal voor games met analoge besturing."
            }
        },
        {
            question: {
                en: "What is experience replay?",
                es: "¿Qué es la repetición de experiencia?",
                de: "Was ist Experience Replay?",
                nl: "Wat is experience replay?"
            },
            options: [
                { en: "Storing and reusing past experiences", es: "Almacenar y reutilizar experiencias pasadas", de: "Speichern und Wiederverwenden vergangener Erfahrungen", nl: "Opslaan en hergebruiken van eerdere ervaringen" },
                { en: "Replaying game footage", es: "Reproducir imágenes del juego", de: "Spielaufnahmen wiedergeben", nl: "Game beelden afspelen" },
                { en: "Player history tracking", es: "Seguimiento del historial del jugador", de: "Spielerverlauf verfolgen", nl: "Speler geschiedenis bijhouden" },
                { en: "Tutorial repetition", es: "Repetición del tutorial", de: "Tutorial-Wiederholung", nl: "Tutorial herhaling" }
            ],
            correct: 0,
            explanation: {
                en: "Experience replay stores past game interactions in a buffer, allowing AI to learn from diverse experiences and break correlation between samples.",
                es: "La repetición de experiencia almacena interacciones pasadas del juego en un búfer, permitiendo a la IA aprender de experiencias diversas y romper la correlación entre muestras.",
                de: "Experience Replay speichert vergangene Spielinteraktionen in einem Puffer, wodurch KI aus vielfältigen Erfahrungen lernen und Korrelationen zwischen Samples brechen kann.",
                nl: "Experience replay slaat eerdere game-interacties op in een buffer, waardoor AI kan leren van diverse ervaringen en correlatie tussen samples kan doorbreken."
            }
        },
        {
            question: {
                en: "What is reward shaping?",
                es: "¿Qué es el modelado de recompensas?",
                de: "Was ist Reward Shaping?",
                nl: "Wat is reward shaping?"
            },
            options: [
                { en: "Designing intermediate rewards", es: "Diseñar recompensas intermedias", de: "Gestaltung von Zwischenbelohnungen", nl: "Ontwerpen van tussentijdse beloningen" },
                { en: "Trophy design", es: "Diseño de trofeos", de: "Trophäendesign", nl: "Trofee ontwerp" },
                { en: "Point calculation", es: "Cálculo de puntos", de: "Punkteberechnung", nl: "Punten berekening" },
                { en: "Score display", es: "Visualización de puntaje", de: "Punkteanzeige", nl: "Score weergave" }
            ],
            correct: 0,
            explanation: {
                en: "Reward shaping adds intermediate rewards to guide AI learning, helping it discover good strategies faster in complex games.",
                es: "El modelado de recompensas agrega recompensas intermedias para guiar el aprendizaje de la IA, ayudándola a descubrir buenas estrategias más rápido en juegos complejos.",
                de: "Reward Shaping fügt Zwischenbelohnungen hinzu, um das KI-Lernen zu lenken und hilft, schneller gute Strategien in komplexen Spielen zu entdecken.",
                nl: "Reward shaping voegt tussentijdse beloningen toe om AI-leren te sturen, wat helpt om sneller goede strategieën te ontdekken in complexe games."
            }
        },
        {
            question: {
                en: "What is curiosity-driven learning?",
                es: "¿Qué es el aprendizaje impulsado por curiosidad?",
                de: "Was ist neugiergetriebenes Lernen?",
                nl: "Wat is nieuwsgierigheidsgedreven leren?"
            },
            options: [
                { en: "Intrinsic motivation for exploration", es: "Motivación intrínseca para exploración", de: "Intrinsische Motivation zur Erkundung", nl: "Intrinsieke motivatie voor verkenning" },
                { en: "Random searching", es: "Búsqueda aleatoria", de: "Zufällige Suche", nl: "Willekeurig zoeken" },
                { en: "Question answering", es: "Responder preguntas", de: "Fragen beantworten", nl: "Vragen beantwoorden" },
                { en: "Tutorial system", es: "Sistema de tutorial", de: "Tutorial-System", nl: "Tutorial systeem" }
            ],
            correct: 0,
            explanation: {
                en: "Curiosity-driven learning rewards AI for discovering novel states, encouraging exploration even without external rewards.",
                es: "El aprendizaje impulsado por curiosidad recompensa a la IA por descubrir estados novedosos, fomentando la exploración incluso sin recompensas externas.",
                de: "Neugiergetriebenes Lernen belohnt KI für die Entdeckung neuartiger Zustände und fördert Erkundung auch ohne externe Belohnungen.",
                nl: "Nieuwsgierigheidsgedreven leren beloont AI voor het ontdekken van nieuwe toestanden, wat verkenning aanmoedigt zelfs zonder externe beloningen."
            }
        },
        {
            question: {
                en: "What is self-play in AI?",
                es: "¿Qué es el auto-juego en IA?",
                de: "Was ist Selbstspiel in KI?",
                nl: "Wat is self-play in AI?"
            },
            options: [
                { en: "AI training against itself", es: "IA entrenando contra sí misma", de: "KI trainiert gegen sich selbst", nl: "AI traint tegen zichzelf" },
                { en: "Single player mode", es: "Modo de un jugador", de: "Einzelspieler-Modus", nl: "Single player modus" },
                { en: "Automated testing", es: "Pruebas automatizadas", de: "Automatisierte Tests", nl: "Geautomatiseerd testen" },
                { en: "Solo practice", es: "Práctica en solitario", de: "Solo-Übung", nl: "Solo oefening" }
            ],
            correct: 0,
            explanation: {
                en: "Self-play trains AI by playing against copies of itself, continuously improving as both player and opponent get stronger.",
                es: "El auto-juego entrena a la IA jugando contra copias de sí misma, mejorando continuamente mientras jugador y oponente se vuelven más fuertes.",
                de: "Selbstspiel trainiert KI durch Spielen gegen Kopien ihrer selbst, kontinuierliche Verbesserung während Spieler und Gegner stärker werden.",
                nl: "Self-play traint AI door tegen kopieën van zichzelf te spelen, continu verbeterend terwijl zowel speler als tegenstander sterker worden."
            }
        },
        {
            question: {
                en: "What is TD3 algorithm?",
                es: "¿Qué es el algoritmo TD3?",
                de: "Was ist der TD3-Algorithmus?",
                nl: "Wat is het TD3 algoritme?"
            },
            options: [
                { en: "Twin Delayed Deep Deterministic", es: "Determinístico Profundo Retardado Gemelo", de: "Twin Delayed Deep Deterministic", nl: "Twin Delayed Deep Deterministic" },
                { en: "Three Dimensional Design", es: "Diseño Tridimensional", de: "Dreidimensionales Design", nl: "Driedimensionaal Ontwerp" },
                { en: "Time Division Data", es: "Datos de División de Tiempo", de: "Zeitteilungsdaten", nl: "Tijdverdeling Data" },
                { en: "Technical Development Document", es: "Documento de Desarrollo Técnico", de: "Technisches Entwicklungsdokument", nl: "Technisch Ontwikkelingsdocument" }
            ],
            correct: 0,
            explanation: {
                en: "TD3 improves DDPG by using twin Q-networks and delayed policy updates to reduce overestimation bias in continuous control games.",
                es: "TD3 mejora DDPG usando redes Q gemelas y actualizaciones de política retardadas para reducir el sesgo de sobreestimación en juegos de control continuo.",
                de: "TD3 verbessert DDPG durch Twin-Q-Netzwerke und verzögerte Policy-Updates zur Reduzierung von Überschätzungsverzerrung in kontinuierlichen Kontrollspielen.",
                nl: "TD3 verbetert DDPG door twin Q-netwerken en vertraagde beleidsupdate

s te gebruiken om overschattingsbias te verminderen in continue controle games."
            }
        },
        {
            question: {
                en: "What is SAC algorithm?",
                es: "¿Qué es el algoritmo SAC?",
                de: "Was ist der SAC-Algorithmus?",
                nl: "Wat is het SAC algoritme?"
            },
            options: [
                { en: "Soft Actor-Critic", es: "Actor-Crítico Suave", de: "Soft Actor-Critic", nl: "Soft Actor-Critic" },
                { en: "System Access Control", es: "Control de Acceso al Sistema", de: "Systemzugriffskontrolle", nl: "Systeem Toegangscontrole" },
                { en: "Simple AI Compiler", es: "Compilador de IA Simple", de: "Einfacher KI-Compiler", nl: "Simpele AI Compiler" },
                { en: "Standard Algorithm Collection", es: "Colección de Algoritmos Estándar", de: "Standard-Algorithmensammlung", nl: "Standaard Algoritme Collectie" }
            ],
            correct: 0,
            explanation: {
                en: "SAC maximizes both reward and entropy, encouraging exploration while learning robust policies for complex game environments.",
                es: "SAC maximiza tanto recompensa como entropía, fomentando exploración mientras aprende políticas robustas para entornos de juego complejos.",
                de: "SAC maximiert sowohl Belohnung als auch Entropie, fördert Erkundung während des Lernens robuster Policies für komplexe Spielumgebungen.",
                nl: "SAC maximaliseert zowel beloning als entropie, moedigt verkenning aan terwijl het robuust beleid leert voor complexe gameomgevingen."
            }
        },
        ...Array.from({ length: 90 }, (_, i) => {
            const topics = [
                { en: "Rainbow DQN", es: "Rainbow DQN", de: "Rainbow DQN", nl: "Rainbow DQN" },
                { en: "C51 algorithm", es: "algoritmo C51", de: "C51-Algorithmus", nl: "C51 algoritme" },
                { en: "IQN networks", es: "redes IQN", de: "IQN-Netzwerke", nl: "IQN netwerken" },
                { en: "Noisy Networks", es: "Redes Ruidosas", de: "Noisy Networks", nl: "Noisy Networks" },
                { en: "prioritized replay", es: "repetición priorizada", de: "priorisiertes Replay", nl: "geprioriteerde replay" },
                { en: "dueling networks", es: "redes duelo", de: "Duelling-Netzwerke", nl: "duellerende netwerken" },
                { en: "n-step returns", es: "retornos de n pasos", de: "n-Schritt-Renditen", nl: "n-stap returns" },
                { en: "distributional RL", es: "RL distribucional", de: "distributionales RL", nl: "distributionele RL" },
                { en: "model-based RL", es: "RL basado en modelos", de: "modellbasiertes RL", nl: "model-gebaseerde RL" },
                { en: "world models", es: "modelos del mundo", de: "Weltmodelle", nl: "wereldmodellen" },
                { en: "MuZero", es: "MuZero", de: "MuZero", nl: "MuZero" },
                { en: "AlphaZero", es: "AlphaZero", de: "AlphaZero", nl: "AlphaZero" },
                { en: "MCTS in RL", es: "MCTS en RL", de: "MCTS in RL", nl: "MCTS in RL" },
                { en: "IMPALA", es: "IMPALA", de: "IMPALA", nl: "IMPALA" },
                { en: "APEX", es: "APEX", de: "APEX", nl: "APEX" },
                { en: "R2D2", es: "R2D2", de: "R2D2", nl: "R2D2" },
                { en: "Never Give Up", es: "Never Give Up", de: "Never Give Up", nl: "Never Give Up" },
                { en: "Agent57", es: "Agent57", de: "Agent57", nl: "Agent57" },
                { en: "Dreamer", es: "Dreamer", de: "Dreamer", nl: "Dreamer" },
                { en: "PlaNet", es: "PlaNet", de: "PlaNet", nl: "PlaNet" }
            ];
            const topic = topics[i % topics.length];
            const questionTypes = [
                {
                    en: `What innovation does ${topic.en} bring?`,
                    es: `¿Qué innovación trae ${topic.es}?`,
                    de: `Welche Innovation bringt ${topic.de}?`,
                    nl: `Welke innovatie brengt ${topic.nl}?`
                },
                {
                    en: `How does ${topic.en} improve game AI?`,
                    es: `¿Cómo mejora ${topic.es} la IA del juego?`,
                    de: `Wie verbessert ${topic.de} die Spiel-KI?`,
                    nl: `Hoe verbetert ${topic.nl} game AI?`
                },
                {
                    en: `What games benefit from ${topic.en}?`,
                    es: `¿Qué juegos se benefician de ${topic.es}?`,
                    de: `Welche Spiele profitieren von ${topic.de}?`,
                    nl: `Welke games profiteren van ${topic.nl}?`
                },
                {
                    en: `When is ${topic.en} most effective?`,
                    es: `¿Cuándo es más efectivo ${topic.es}?`,
                    de: `Wann ist ${topic.de} am effektivsten?`,
                    nl: `Wanneer is ${topic.nl} het meest effectief?`
                }
            ];
            const qType = questionTypes[Math.floor(i / topics.length) % questionTypes.length];
            return {
                question: qType,
                options: [
                    {
                        en: `Deep RL technique using ${topic.en}`,
                        es: `Técnica de RL profundo usando ${topic.es}`,
                        de: `Deep-RL-Technik mit ${topic.de}`,
                        nl: `Deep RL techniek met ${topic.nl}`
                    },
                    { en: "Basic scripting", es: "Scripting básico", de: "Einfaches Scripting", nl: "Basis scripting" },
                    { en: "Simple heuristics", es: "Heurísticas simples", de: "Einfache Heuristiken", nl: "Simpele heuristieken" },
                    { en: "Rule-based system", es: "Sistema basado en reglas", de: "Regelbasiertes System", nl: "Op regels gebaseerd systeem" }
                ],
                correct: 0,
                explanation: {
                    en: `${topic.en} is an advanced deep reinforcement learning technique that enables sophisticated game-playing AI through neural network learning.`,
                    es: `${topic.es} es una técnica avanzada de aprendizaje por refuerzo profundo que permite IA sofisticada para juegos a través del aprendizaje de redes neuronales.`,
                    de: `${topic.de} ist eine fortgeschrittene Deep-Reinforcement-Learning-Technik, die anspruchsvolle spielende KI durch neuronales Netzwerklernen ermöglicht.`,
                    nl: `${topic.nl} is een geavanceerde deep reinforcement learning techniek die geavanceerde game-spelende AI mogelijk maakt door neuraal netwerk leren.`
                }
            };
        })
    ]
};