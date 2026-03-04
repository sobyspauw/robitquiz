// AI in gaming - level8
// Total questions: 100
// Expert level - Multi-agent and AlphaGo techniques

module.exports = {
    questions: [
        {
            question: {
                en: "What is multi-agent RL?",
                es: "¿Qué es RL multiagente?",
                de: "Was ist Multi-Agenten-RL?",
                nl: "Wat is multi-agent RL?"
            },
            options: [
                { en: "Multiple AI agents learning together", es: "Múltiples agentes de IA aprendiendo juntos", de: "Mehrere KI-Agenten lernen zusammen", nl: "Meerdere AI-agenten leren samen" },
                { en: "Single player AI", es: "IA de un jugador", de: "Einzelspieler-KI", nl: "Single player AI" },
                { en: "Network multiplayer", es: "Multijugador en red", de: "Netzwerk-Mehrspieler", nl: "Netwerk multiplayer" },
                { en: "Team management", es: "Gestión de equipo", de: "Team-Management", nl: "Team management" }
            ],
            correct: 0,
            explanation: {
                en: "Multi-agent RL involves multiple AI agents learning simultaneously, creating complex interactions and emergent strategies in games.",
                es: "RL multiagente involucra múltiples agentes de IA aprendiendo simultáneamente, creando interacciones complejas y estrategias emergentes en juegos.",
                de: "Multi-Agenten-RL umfasst mehrere KI-Agenten, die gleichzeitig lernen und komplexe Interaktionen und emergente Strategien in Spielen erzeugen.",
                nl: "Multi-agent RL betreft meerdere AI-agenten die tegelijk leren, wat complexe interacties en emergente strategieën in games creëert."
            }
        },
        {
            question: {
                en: "What is AlphaGo's key innovation?",
                es: "¿Cuál es la innovación clave de AlphaGo?",
                de: "Was ist AlphaGos Schlüsselinnovation?",
                nl: "Wat is AlphaGo's belangrijkste innovatie?"
            },
            options: [
                { en: "Combining MCTS with deep learning", es: "Combinar MCTS con aprendizaje profundo", de: "Kombination von MCTS mit Deep Learning", nl: "MCTS combineren met deep learning" },
                { en: "Faster processors", es: "Procesadores más rápidos", de: "Schnellere Prozessoren", nl: "Snellere processors" },
                { en: "Bigger database", es: "Base de datos más grande", de: "Größere Datenbank", nl: "Grotere database" },
                { en: "More memory", es: "Más memoria", de: "Mehr Speicher", nl: "Meer geheugen" }
            ],
            correct: 0,
            explanation: {
                en: "AlphaGo revolutionized game AI by combining Monte Carlo Tree Search with deep neural networks for value and policy estimation.",
                es: "AlphaGo revolucionó la IA de juegos combinando Búsqueda de Árbol Monte Carlo con redes neuronales profundas para estimación de valor y política.",
                de: "AlphaGo revolutionierte Spiel-KI durch Kombination von Monte-Carlo-Baumsuche mit tiefen neuronalen Netzen für Wert- und Policy-Schätzung.",
                nl: "AlphaGo revolutioneerde game AI door Monte Carlo Tree Search te combineren met diepe neurale netwerken voor waarde- en beleidsschatting."
            }
        },
        {
            question: {
                en: "What is AlphaZero?",
                es: "¿Qué es AlphaZero?",
                de: "Was ist AlphaZero?",
                nl: "Wat is AlphaZero?"
            },
            options: [
                { en: "Generalized game-playing AI", es: "IA generalizada para jugar", de: "Verallgemeinerte spielende KI", nl: "Gegeneraliseerde game-spelende AI" },
                { en: "Chess-only AI", es: "IA solo para ajedrez", de: "Nur-Schach-KI", nl: "Alleen-schaak AI" },
                { en: "Go-specific system", es: "Sistema específico de Go", de: "Go-spezifisches System", nl: "Go-specifiek systeem" },
                { en: "Database engine", es: "Motor de base de datos", de: "Datenbank-Engine", nl: "Database engine" }
            ],
            correct: 0,
            explanation: {
                en: "AlphaZero learns chess, shogi, and Go from scratch through self-play, without human knowledge, achieving superhuman performance.",
                es: "AlphaZero aprende ajedrez, shogi y Go desde cero a través del auto-juego, sin conocimiento humano, logrando rendimiento sobrehumano.",
                de: "AlphaZero lernt Schach, Shogi und Go von Grund auf durch Selbstspiel, ohne menschliches Wissen, und erreicht übermenschliche Leistung.",
                nl: "AlphaZero leert schaken, shogi en Go vanaf nul door self-play, zonder menselijke kennis, en bereikt bovenmenselijke prestaties."
            }
        },
        {
            question: {
                en: "What is population-based training?",
                es: "¿Qué es el entrenamiento basado en población?",
                de: "Was ist populationsbasiertes Training?",
                nl: "Wat is populatie-gebaseerde training?"
            },
            options: [
                { en: "Training multiple agents in parallel", es: "Entrenar múltiples agentes en paralelo", de: "Mehrere Agenten parallel trainieren", nl: "Meerdere agenten parallel trainen" },
                { en: "Census data analysis", es: "Análisis de datos del censo", de: "Zensusdatenanalyse", nl: "Census data analyse" },
                { en: "Player statistics", es: "Estadísticas de jugadores", de: "Spielerstatistiken", nl: "Speler statistieken" },
                { en: "Server management", es: "Gestión de servidores", de: "Server-Verwaltung", nl: "Server beheer" }
            ],
            correct: 0,
            explanation: {
                en: "Population-based training evolves hyperparameters and neural architectures across a population of agents, finding optimal configurations.",
                es: "El entrenamiento basado en población evoluciona hiperparámetros y arquitecturas neuronales a través de una población de agentes, encontrando configuraciones óptimas.",
                de: "Populationsbasiertes Training entwickelt Hyperparameter und neuronale Architekturen über eine Population von Agenten und findet optimale Konfigurationen.",
                nl: "Populatie-gebaseerde training evolueert hyperparameters en neurale architecturen over een populatie van agenten, waarbij optimale configuraties worden gevonden."
            }
        },
        {
            question: {
                en: "What is OpenAI Five?",
                es: "¿Qué es OpenAI Five?",
                de: "Was ist OpenAI Five?",
                nl: "Wat is OpenAI Five?"
            },
            options: [
                { en: "Dota 2 playing AI team", es: "Equipo de IA que juega Dota 2", de: "Dota 2 spielendes KI-Team", nl: "Dota 2 spelend AI-team" },
                { en: "Five AI models", es: "Cinco modelos de IA", de: "Fünf KI-Modelle", nl: "Vijf AI-modellen" },
                { en: "Version 5 of OpenAI", es: "Versión 5 de OpenAI", de: "Version 5 von OpenAI", nl: "Versie 5 van OpenAI" },
                { en: "Five player game", es: "Juego de cinco jugadores", de: "Fünf-Spieler-Spiel", nl: "Vijf speler game" }
            ],
            correct: 0,
            explanation: {
                en: "OpenAI Five is a team of five neural networks that learned to play Dota 2 at professional level through massive-scale self-play.",
                es: "OpenAI Five es un equipo de cinco redes neuronales que aprendieron a jugar Dota 2 a nivel profesional a través de auto-juego a escala masiva.",
                de: "OpenAI Five ist ein Team aus fünf neuronalen Netzwerken, die durch massives Selbstspiel gelernt haben, Dota 2 auf professionellem Niveau zu spielen.",
                nl: "OpenAI Five is een team van vijf neurale netwerken die Dota 2 op professioneel niveau leerden spelen door grootschalige self-play."
            }
        },
        {
            question: {
                en: "What is StarCraft II AI challenge?",
                es: "¿Qué es el desafío de IA de StarCraft II?",
                de: "Was ist die StarCraft II KI-Herausforderung?",
                nl: "Wat is de StarCraft II AI uitdaging?"
            },
            options: [
                { en: "Complex real-time strategy AI", es: "IA de estrategia compleja en tiempo real", de: "Komplexe Echtzeit-Strategie-KI", nl: "Complexe real-time strategie AI" },
                { en: "Graphics benchmark", es: "Punto de referencia gráfico", de: "Grafik-Benchmark", nl: "Graphics benchmark" },
                { en: "Network test", es: "Prueba de red", de: "Netzwerktest", nl: "Netwerk test" },
                { en: "Tournament mode", es: "Modo torneo", de: "Turniermodus", nl: "Toernooi modus" }
            ],
            correct: 0,
            explanation: {
                en: "StarCraft II presents unique challenges with partial observability, long-term planning, and real-time decision making for AI agents.",
                es: "StarCraft II presenta desafíos únicos con observabilidad parcial, planificación a largo plazo y toma de decisiones en tiempo real para agentes de IA.",
                de: "StarCraft II stellt einzigartige Herausforderungen mit partieller Beobachtbarkeit, Langzeitplanung und Echtzeit-Entscheidungsfindung für KI-Agenten.",
                nl: "StarCraft II presenteert unieke uitdagingen met gedeeltelijke waarneembaarheid, langetermijnplanning en real-time besluitvorming voor AI-agenten."
            }
        },
        {
            question: {
                en: "What is AlphaStar?",
                es: "¿Qué es AlphaStar?",
                de: "Was ist AlphaStar?",
                nl: "Wat is AlphaStar?"
            },
            options: [
                { en: "DeepMind's StarCraft II AI", es: "IA de StarCraft II de DeepMind", de: "DeepMinds StarCraft II KI", nl: "DeepMind's StarCraft II AI" },
                { en: "Star rating system", es: "Sistema de clasificación por estrellas", de: "Sternebewertungssystem", nl: "Sterren beoordelingssysteem" },
                { en: "Space game", es: "Juego espacial", de: "Weltraumspiel", nl: "Ruimte game" },
                { en: "Navigation AI", es: "IA de navegación", de: "Navigations-KI", nl: "Navigatie AI" }
            ],
            correct: 0,
            explanation: {
                en: "AlphaStar mastered StarCraft II using deep learning, reaching Grandmaster level through multi-agent reinforcement learning.",
                es: "AlphaStar dominó StarCraft II usando aprendizaje profundo, alcanzando nivel Gran Maestro a través de aprendizaje por refuerzo multiagente.",
                de: "AlphaStar meisterte StarCraft II mit Deep Learning und erreichte Großmeister-Niveau durch Multi-Agenten-Verstärkungslernen.",
                nl: "AlphaStar beheerste StarCraft II met deep learning, bereikte Grandmaster niveau door multi-agent reinforcement learning."
            }
        },
        {
            question: {
                en: "What is league play in AI training?",
                es: "¿Qué es el juego de liga en entrenamiento de IA?",
                de: "Was ist Liga-Spiel im KI-Training?",
                nl: "Wat is league play in AI-training?"
            },
            options: [
                { en: "Training against diverse opponents", es: "Entrenamiento contra oponentes diversos", de: "Training gegen vielfältige Gegner", nl: "Training tegen diverse tegenstanders" },
                { en: "Sports simulation", es: "Simulación deportiva", de: "Sportsimulation", nl: "Sport simulatie" },
                { en: "Tournament bracket", es: "Cuadro de torneo", de: "Turnierklammer", nl: "Toernooi bracket" },
                { en: "Ranking system", es: "Sistema de clasificación", de: "Ranglistensystem", nl: "Ranking systeem" }
            ],
            correct: 0,
            explanation: {
                en: "League play maintains a diverse population of AI agents with different strategies, preventing overfitting to single opponents.",
                es: "El juego de liga mantiene una población diversa de agentes de IA con diferentes estrategias, previniendo el sobreajuste a oponentes únicos.",
                de: "Liga-Spiel erhält eine vielfältige Population von KI-Agenten mit unterschiedlichen Strategien und verhindert Überanpassung an einzelne Gegner.",
                nl: "League play onderhoudt een diverse populatie van AI-agenten met verschillende strategieën, wat overfitting op enkele tegenstanders voorkomt."
            }
        },
        {
            question: {
                en: "What is fictitious self-play?",
                es: "¿Qué es el auto-juego ficticio?",
                de: "Was ist fiktives Selbstspiel?",
                nl: "Wat is fictitious self-play?"
            },
            options: [
                { en: "Playing against past versions", es: "Jugar contra versiones pasadas", de: "Gegen vergangene Versionen spielen", nl: "Spelen tegen eerdere versies" },
                { en: "Imaginary games", es: "Juegos imaginarios", de: "Imaginäre Spiele", nl: "Denkbeeldige games" },
                { en: "Fantasy mode", es: "Modo fantasía", de: "Fantasy-Modus", nl: "Fantasy modus" },
                { en: "Story generation", es: "Generación de historias", de: "Geschichtengenerierung", nl: "Verhaal generatie" }
            ],
            correct: 0,
            explanation: {
                en: "Fictitious self-play trains AI against a mixture of past versions of itself, creating robust strategies against various play styles.",
                es: "El auto-juego ficticio entrena IA contra una mezcla de versiones pasadas de sí misma, creando estrategias robustas contra varios estilos de juego.",
                de: "Fiktives Selbstspiel trainiert KI gegen eine Mischung vergangener Versionen ihrer selbst und schafft robuste Strategien gegen verschiedene Spielstile.",
                nl: "Fictitious self-play traint AI tegen een mix van eerdere versies van zichzelf, wat robuuste strategieën creëert tegen verschillende speelstijlen."
            }
        },
        {
            question: {
                en: "What is Nash equilibrium in games?",
                es: "¿Qué es el equilibrio de Nash en juegos?",
                de: "Was ist Nash-Gleichgewicht in Spielen?",
                nl: "Wat is Nash-evenwicht in games?"
            },
            options: [
                { en: "Optimal strategy balance", es: "Balance óptimo de estrategia", de: "Optimale Strategiebalance", nl: "Optimale strategie balans" },
                { en: "Physics simulation", es: "Simulación de física", de: "Physiksimulation", nl: "Fysica simulatie" },
                { en: "Character balance", es: "Balance de personajes", de: "Charakterbalance", nl: "Karakter balans" },
                { en: "Load balancing", es: "Equilibrio de carga", de: "Lastausgleich", nl: "Load balancing" }
            ],
            correct: 0,
            explanation: {
                en: "Nash equilibrium is a state where no player can improve by changing strategy alone, crucial for multi-agent game AI.",
                es: "El equilibrio de Nash es un estado donde ningún jugador puede mejorar cambiando solo su estrategia, crucial para IA de juegos multiagente.",
                de: "Nash-Gleichgewicht ist ein Zustand, in dem kein Spieler durch alleinige Strategieänderung verbessern kann, entscheidend für Multi-Agenten-Spiel-KI.",
                nl: "Nash-evenwicht is een toestand waarin geen speler kan verbeteren door alleen zijn strategie te veranderen, cruciaal voor multi-agent game AI."
            }
        },
        ...Array.from({ length: 90 }, (_, i) => {
            const topics = [
                { en: "PSRO algorithm", es: "algoritmo PSRO", de: "PSRO-Algorithmus", nl: "PSRO algoritme" },
                { en: "Neural Fictitious Self-Play", es: "Auto-juego Ficticio Neural", de: "Neurales Fiktives Selbstspiel", nl: "Neuraal Fictitious Self-Play" },
                { en: "counterfactual regret", es: "arrepentimiento contrafactual", de: "kontrafaktisches Bedauern", nl: "counterfactual regret" },
                { en: "extensive form games", es: "juegos de forma extensiva", de: "Spiele in extensiver Form", nl: "extensive form games" },
                { en: "imperfect information", es: "información imperfecta", de: "unvollständige Information", nl: "imperfecte informatie" },
                { en: "Hanabi challenge", es: "desafío Hanabi", de: "Hanabi-Herausforderung", nl: "Hanabi uitdaging" },
                { en: "Diplomacy AI", es: "IA de Diplomacy", de: "Diplomacy-KI", nl: "Diplomacy AI" },
                { en: "hide and seek", es: "escondidas", de: "Verstecken spielen", nl: "verstoppertje" },
                { en: "emergent tool use", es: "uso emergente de herramientas", de: "emergente Werkzeugnutzung", nl: "emergent gereedschapsgebruik" },
                { en: "communication protocols", es: "protocolos de comunicación", de: "Kommunikationsprotokolle", nl: "communicatieprotocollen" },
                { en: "opponent modeling", es: "modelado de oponentes", de: "Gegnermodellierung", nl: "tegenstander modellering" },
                { en: "meta-learning", es: "meta-aprendizaje", de: "Meta-Lernen", nl: "meta-leren" },
                { en: "few-shot learning", es: "aprendizaje de pocos ejemplos", de: "Few-Shot-Lernen", nl: "few-shot leren" },
                { en: "curriculum learning", es: "aprendizaje curricular", de: "Curriculum-Lernen", nl: "curriculum leren" },
                { en: "asymmetric games", es: "juegos asimétricos", de: "asymmetrische Spiele", nl: "asymmetrische games" },
                { en: "mixed strategies", es: "estrategias mixtas", de: "gemischte Strategien", nl: "gemengde strategieën" },
                { en: "exploitability", es: "explotabilidad", de: "Ausnutzbarkeit", nl: "exploiteerbaarheid" },
                { en: "best response", es: "mejor respuesta", de: "beste Antwort", nl: "beste antwoord" },
                { en: "evolutionary game theory", es: "teoría evolutiva de juegos", de: "evolutionäre Spieltheorie", nl: "evolutionaire speltheorie" },
                { en: "mean field games", es: "juegos de campo medio", de: "Mean-Field-Spiele", nl: "mean field games" }
            ];
            const topic = topics[i % topics.length];
            const questionTypes = [
                {
                    en: `What role does ${topic.en} play?`,
                    es: `¿Qué papel juega ${topic.es}?`,
                    de: `Welche Rolle spielt ${topic.de}?`,
                    nl: `Welke rol speelt ${topic.nl}?`
                },
                {
                    en: `How is ${topic.en} implemented?`,
                    es: `¿Cómo se implementa ${topic.es}?`,
                    de: `Wie wird ${topic.de} implementiert?`,
                    nl: `Hoe wordt ${topic.nl} geïmplementeerd?`
                },
                {
                    en: `What challenge does ${topic.en} address?`,
                    es: `¿Qué desafío aborda ${topic.es}?`,
                    de: `Welche Herausforderung adressiert ${topic.de}?`,
                    nl: `Welke uitdaging pakt ${topic.nl} aan?`
                },
                {
                    en: `Why is ${topic.en} important?`,
                    es: `¿Por qué es importante ${topic.es}?`,
                    de: `Warum ist ${topic.de} wichtig?`,
                    nl: `Waarom is ${topic.nl} belangrijk?`
                }
            ];
            const qType = questionTypes[Math.floor(i / topics.length) % questionTypes.length];
            return {
                question: qType,
                options: [
                    {
                        en: `Multi-agent technique using ${topic.en}`,
                        es: `Técnica multiagente usando ${topic.es}`,
                        de: `Multi-Agenten-Technik mit ${topic.de}`,
                        nl: `Multi-agent techniek met ${topic.nl}`
                    },
                    { en: "Single agent method", es: "Método de agente único", de: "Einzelagenten-Methode", nl: "Enkele agent methode" },
                    { en: "Basic algorithm", es: "Algoritmo básico", de: "Grundlegender Algorithmus", nl: "Basis algoritme" },
                    { en: "Simple strategy", es: "Estrategia simple", de: "Einfache Strategie", nl: "Simpele strategie" }
                ],
                correct: 0,
                explanation: {
                    en: `${topic.en.charAt(0).toUpperCase() + topic.en.slice(1)} is an advanced multi-agent learning technique that enables complex strategic gameplay in modern AI systems.`,
                    es: `${topic.es.charAt(0).toUpperCase() + topic.es.slice(1)} es una técnica avanzada de aprendizaje multiagente que permite juego estratégico complejo en sistemas modernos de IA.`,
                    de: `${topic.de.charAt(0).toUpperCase() + topic.de.slice(1)} ist eine fortgeschrittene Multi-Agenten-Lerntechnik, die komplexes strategisches Gameplay in modernen KI-Systemen ermöglicht.`,
                    nl: `${topic.nl.charAt(0).toUpperCase() + topic.nl.slice(1)} is een geavanceerde multi-agent leertechniek die complexe strategische gameplay mogelijk maakt in moderne AI-systemen.`
                }
            };
        })
    ]
};