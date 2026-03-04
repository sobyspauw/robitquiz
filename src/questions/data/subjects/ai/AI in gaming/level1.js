// AI in gaming - level1
// Total questions: 100
// Beginner level - Basic game AI concepts

module.exports = {
    questions: [
        {
            question: {
                en: "What is game AI?",
                es: "¿Qué es la IA en juegos?",
                de: "Was ist Spiele-KI?",
                nl: "Wat is game AI?"
            },
            options: [
                { en: "Artificial intelligence for NPCs", es: "Inteligencia artificial para NPCs", de: "Künstliche Intelligenz für NPCs", nl: "Kunstmatige intelligentie voor NPCs" },
                { en: "Graphics engine", es: "Motor gráfico", de: "Grafik-Engine", nl: "Graphics engine" },
                { en: "Sound system", es: "Sistema de sonido", de: "Soundsystem", nl: "Geluidssysteem" },
                { en: "Network code", es: "Código de red", de: "Netzwerk-Code", nl: "Netwerkcode" }
            ],
            correct: 0,
            explanation: {
                en: "Game AI refers to artificial intelligence techniques used to create intelligent behaviors for non-player characters (NPCs) in video games.",
                es: "La IA en juegos se refiere a técnicas de inteligencia artificial usadas para crear comportamientos inteligentes para personajes no jugadores (NPCs) en videojuegos.",
                de: "Spiele-KI bezieht sich auf KI-Techniken zur Erstellung intelligenter Verhaltensweisen für Nicht-Spieler-Charaktere (NPCs) in Videospielen.",
                nl: "Game AI verwijst naar kunstmatige intelligentietechnieken gebruikt om intelligent gedrag te creëren voor niet-speler karakters (NPCs) in videogames."
            }
        },
        {
            question: {
                en: "What does NPC stand for?",
                es: "¿Qué significa NPC?",
                de: "Wofür steht NPC?",
                nl: "Waar staat NPC voor?"
            },
            options: [
                { en: "Non-Player Character", es: "Personaje No Jugador", de: "Nicht-Spieler-Charakter", nl: "Niet-Speler Karakter" },
                { en: "New Player Control", es: "Nuevo Control de Jugador", de: "Neue Spieler-Kontrolle", nl: "Nieuwe Speler Controle" },
                { en: "Network Protocol Cache", es: "Caché de Protocolo de Red", de: "Netzwerk-Protokoll-Cache", nl: "Netwerk Protocol Cache" },
                { en: "Next Program Counter", es: "Siguiente Contador de Programa", de: "Nächster Programmzähler", nl: "Volgende Programmateller" }
            ],
            correct: 0,
            explanation: {
                en: "NPC stands for Non-Player Character, referring to characters in games controlled by AI rather than human players.",
                es: "NPC significa Personaje No Jugador, refiriéndose a personajes en juegos controlados por IA en lugar de jugadores humanos.",
                de: "NPC steht für Nicht-Spieler-Charakter und bezieht sich auf Charaktere in Spielen, die von KI statt von menschlichen Spielern gesteuert werden.",
                nl: "NPC staat voor Niet-Speler Karakter, verwijzend naar karakters in games die door AI worden bestuurd in plaats van menselijke spelers."
            }
        },
        {
            question: {
                en: "What is pathfinding in games?",
                es: "¿Qué es la búsqueda de caminos en juegos?",
                de: "Was ist Pfadfindung in Spielen?",
                nl: "Wat is pathfinding in games?"
            },
            options: [
                { en: "Finding routes for characters", es: "Encontrar rutas para personajes", de: "Routen für Charaktere finden", nl: "Routes vinden voor karakters" },
                { en: "Loading game files", es: "Cargar archivos del juego", de: "Spieldateien laden", nl: "Gamebestanden laden" },
                { en: "Saving progress", es: "Guardar progreso", de: "Fortschritt speichern", nl: "Voortgang opslaan" },
                { en: "Drawing graphics", es: "Dibujar gráficos", de: "Grafiken zeichnen", nl: "Graphics tekenen" }
            ],
            correct: 0,
            explanation: {
                en: "Pathfinding is an AI technique that finds the optimal route for characters to move from one point to another while avoiding obstacles.",
                es: "La búsqueda de caminos es una técnica de IA que encuentra la ruta óptima para que los personajes se muevan de un punto a otro evitando obstáculos.",
                de: "Pfadfindung ist eine KI-Technik, die den optimalen Weg für Charaktere findet, um von einem Punkt zum anderen zu gelangen und dabei Hindernisse zu vermeiden.",
                nl: "Pathfinding is een AI-techniek die de optimale route vindt voor karakters om van het ene punt naar het andere te bewegen terwijl obstakels worden vermeden."
            }
        },
        {
            question: {
                en: "What is the A* algorithm used for?",
                es: "¿Para qué se usa el algoritmo A*?",
                de: "Wofür wird der A*-Algorithmus verwendet?",
                nl: "Waar wordt het A* algoritme voor gebruikt?"
            },
            options: [
                { en: "Pathfinding", es: "Búsqueda de caminos", de: "Pfadfindung", nl: "Pathfinding" },
                { en: "Graphics rendering", es: "Renderizado de gráficos", de: "Grafik-Rendering", nl: "Graphics rendering" },
                { en: "Sound mixing", es: "Mezcla de sonido", de: "Sound-Mixing", nl: "Geluidsmixing" },
                { en: "Data compression", es: "Compresión de datos", de: "Datenkompression", nl: "Datacompressie" }
            ],
            correct: 0,
            explanation: {
                en: "A* (A-star) is a popular pathfinding algorithm used in games to find the shortest path between two points efficiently.",
                es: "A* (A-estrella) es un algoritmo popular de búsqueda de caminos usado en juegos para encontrar eficientemente el camino más corto entre dos puntos.",
                de: "A* (A-Stern) ist ein beliebter Pfadfindungsalgorithmus, der in Spielen verwendet wird, um effizient den kürzesten Weg zwischen zwei Punkten zu finden.",
                nl: "A* (A-ster) is een populair pathfinding algoritme gebruikt in games om efficiënt het kortste pad tussen twee punten te vinden."
            }
        },
        {
            question: {
                en: "What is a finite state machine in games?",
                es: "¿Qué es una máquina de estados finitos en juegos?",
                de: "Was ist ein endlicher Automat in Spielen?",
                nl: "Wat is een eindige toestandsmachine in games?"
            },
            options: [
                { en: "AI behavior control system", es: "Sistema de control de comportamiento de IA", de: "KI-Verhaltenskontrollsystem", nl: "AI gedragscontrolesysteem" },
                { en: "Graphics processor", es: "Procesador gráfico", de: "Grafikprozessor", nl: "Grafische processor" },
                { en: "Memory manager", es: "Gestor de memoria", de: "Speicherverwaltung", nl: "Geheugenbeheer" },
                { en: "Network handler", es: "Manejador de red", de: "Netzwerk-Handler", nl: "Netwerkhandler" }
            ],
            correct: 0,
            explanation: {
                en: "A finite state machine (FSM) is a system that controls AI behavior by switching between different states like 'patrol', 'attack', or 'flee'.",
                es: "Una máquina de estados finitos (FSM) es un sistema que controla el comportamiento de la IA cambiando entre diferentes estados como 'patrullar', 'atacar' o 'huir'.",
                de: "Ein endlicher Automat (FSM) ist ein System, das KI-Verhalten steuert, indem es zwischen verschiedenen Zuständen wie 'Patrouillieren', 'Angreifen' oder 'Fliehen' wechselt.",
                nl: "Een eindige toestandsmachine (FSM) is een systeem dat AI-gedrag controleert door te schakelen tussen verschillende toestanden zoals 'patrouilleren', 'aanvallen' of 'vluchten'."
            }
        },
        {
            question: {
                en: "What is enemy AI?",
                es: "¿Qué es la IA enemiga?",
                de: "Was ist Gegner-KI?",
                nl: "Wat is vijand AI?"
            },
            options: [
                { en: "AI controlling opponents", es: "IA controlando oponentes", de: "KI, die Gegner steuert", nl: "AI die tegenstanders bestuurt" },
                { en: "Player assistance", es: "Asistencia al jugador", de: "Spieler-Unterstützung", nl: "Speler assistentie" },
                { en: "Tutorial system", es: "Sistema de tutorial", de: "Tutorial-System", nl: "Tutorial systeem" },
                { en: "Menu navigation", es: "Navegación de menú", de: "Menü-Navigation", nl: "Menu navigatie" }
            ],
            correct: 0,
            explanation: {
                en: "Enemy AI refers to artificial intelligence that controls enemy characters, making them react to player actions and provide challenging gameplay.",
                es: "La IA enemiga se refiere a la inteligencia artificial que controla personajes enemigos, haciéndolos reaccionar a las acciones del jugador y proporcionar juego desafiante.",
                de: "Gegner-KI bezieht sich auf künstliche Intelligenz, die feindliche Charaktere steuert, sie auf Spieleraktionen reagieren lässt und herausforderndes Gameplay bietet.",
                nl: "Vijand AI verwijst naar kunstmatige intelligentie die vijandelijke karakters bestuurt, ze laat reageren op speleracties en uitdagende gameplay biedt."
            }
        },
        {
            question: {
                en: "What is procedural generation?",
                es: "¿Qué es la generación procedural?",
                de: "Was ist prozedurale Generierung?",
                nl: "Wat is procedurele generatie?"
            },
            options: [
                { en: "Automatic content creation", es: "Creación automática de contenido", de: "Automatische Inhaltserstellung", nl: "Automatische content creatie" },
                { en: "Manual level design", es: "Diseño manual de niveles", de: "Manuelles Level-Design", nl: "Handmatig level ontwerp" },
                { en: "Save file system", es: "Sistema de archivos guardados", de: "Speicherdatei-System", nl: "Save bestand systeem" },
                { en: "Graphics settings", es: "Configuración gráfica", de: "Grafik-Einstellungen", nl: "Grafische instellingen" }
            ],
            correct: 0,
            explanation: {
                en: "Procedural generation uses algorithms to automatically create game content like levels, terrain, or items, providing unique experiences each playthrough.",
                es: "La generación procedural usa algoritmos para crear automáticamente contenido del juego como niveles, terreno o ítems, proporcionando experiencias únicas en cada partida.",
                de: "Prozedurale Generierung nutzt Algorithmen zur automatischen Erstellung von Spielinhalten wie Levels, Gelände oder Gegenstände für einzigartige Spielerfahrungen.",
                nl: "Procedurele generatie gebruikt algoritmes om automatisch game-content zoals levels, terrein of items te creëren voor unieke ervaringen bij elke playthrough."
            }
        },
        {
            question: {
                en: "What is adaptive difficulty?",
                es: "¿Qué es la dificultad adaptativa?",
                de: "Was ist adaptive Schwierigkeit?",
                nl: "Wat is adaptieve moeilijkheidsgraad?"
            },
            options: [
                { en: "AI adjusting challenge level", es: "IA ajustando nivel de desafío", de: "KI passt Herausforderungslevel an", nl: "AI past uitdagingsniveau aan" },
                { en: "Fixed difficulty settings", es: "Configuración fija de dificultad", de: "Feste Schwierigkeitseinstellungen", nl: "Vaste moeilijkheidsinstellingen" },
                { en: "Graphics quality", es: "Calidad gráfica", de: "Grafikqualität", nl: "Grafische kwaliteit" },
                { en: "Sound volume", es: "Volumen de sonido", de: "Lautstärke", nl: "Geluidsvolume" }
            ],
            correct: 0,
            explanation: {
                en: "Adaptive difficulty is when game AI automatically adjusts the challenge level based on player performance to maintain optimal engagement.",
                es: "La dificultad adaptativa es cuando la IA del juego ajusta automáticamente el nivel de desafío basándose en el rendimiento del jugador para mantener un compromiso óptimo.",
                de: "Adaptive Schwierigkeit ist, wenn die Spiel-KI automatisch den Herausforderungsgrad basierend auf der Spielerleistung anpasst, um optimales Engagement zu erhalten.",
                nl: "Adaptieve moeilijkheidsgraad is wanneer game AI automatisch het uitdagingsniveau aanpast op basis van spelerprestaties om optimale betrokkenheid te behouden."
            }
        },
        {
            question: {
                en: "What is behavior tree AI?",
                es: "¿Qué es el árbol de comportamiento en IA?",
                de: "Was ist Verhaltensbaum-KI?",
                nl: "Wat is gedragsboom AI?"
            },
            options: [
                { en: "Hierarchical decision system", es: "Sistema jerárquico de decisión", de: "Hierarchisches Entscheidungssystem", nl: "Hiërarchisch beslissingssysteem" },
                { en: "Graphics tree", es: "Árbol de gráficos", de: "Grafik-Baum", nl: "Graphics boom" },
                { en: "File structure", es: "Estructura de archivos", de: "Dateistruktur", nl: "Bestandsstructuur" },
                { en: "Network topology", es: "Topología de red", de: "Netzwerk-Topologie", nl: "Netwerktopologie" }
            ],
            correct: 0,
            explanation: {
                en: "Behavior trees are hierarchical structures used in game AI to organize and execute complex behaviors through modular, reusable nodes.",
                es: "Los árboles de comportamiento son estructuras jerárquicas usadas en IA de juegos para organizar y ejecutar comportamientos complejos a través de nodos modulares y reutilizables.",
                de: "Verhaltensbäume sind hierarchische Strukturen in der Spiel-KI zur Organisation und Ausführung komplexer Verhaltensweisen durch modulare, wiederverwendbare Knoten.",
                nl: "Gedragsbomen zijn hiërarchische structuren gebruikt in game AI om complexe gedragingen te organiseren en uit te voeren via modulaire, herbruikbare nodes."
            }
        },
        {
            question: {
                en: "What is game bot AI?",
                es: "¿Qué es un bot de juego con IA?",
                de: "Was ist Spielbot-KI?",
                nl: "Wat is gamebot AI?"
            },
            options: [
                { en: "Automated player character", es: "Personaje jugador automatizado", de: "Automatisierter Spielercharakter", nl: "Geautomatiseerd spelerkarakter" },
                { en: "Chat system", es: "Sistema de chat", de: "Chat-System", nl: "Chatsysteem" },
                { en: "Anti-cheat tool", es: "Herramienta anti-trampas", de: "Anti-Cheat-Tool", nl: "Anti-cheat tool" },
                { en: "Save manager", es: "Gestor de guardado", de: "Speicher-Manager", nl: "Save manager" }
            ],
            correct: 0,
            explanation: {
                en: "Game bot AI refers to artificial intelligence that controls automated player characters, often used to fill multiplayer matches or for testing.",
                es: "El bot de juego con IA se refiere a inteligencia artificial que controla personajes jugadores automatizados, usado para llenar partidas multijugador o pruebas.",
                de: "Spielbot-KI bezieht sich auf künstliche Intelligenz, die automatisierte Spielercharaktere steuert, oft verwendet um Multiplayer-Matches zu füllen oder zu testen.",
                nl: "Gamebot AI verwijst naar kunstmatige intelligentie die geautomatiseerde spelerkarakters bestuurt, vaak gebruikt om multiplayer wedstrijden te vullen of voor testen."
            }
        },
        ...Array.from({ length: 90 }, (_, i) => {
            const topics = [
                { en: "decision trees", es: "árboles de decisión", de: "Entscheidungsbäume", nl: "beslissingsbomen" },
                { en: "minimax algorithm", es: "algoritmo minimax", de: "Minimax-Algorithmus", nl: "minimax algoritme" },
                { en: "neural networks in games", es: "redes neuronales en juegos", de: "neuronale Netze in Spielen", nl: "neurale netwerken in games" },
                { en: "fuzzy logic", es: "lógica difusa", de: "Fuzzy-Logik", nl: "fuzzy logica" },
                { en: "steering behaviors", es: "comportamientos de dirección", de: "Lenkverhalten", nl: "stuurgedrag" },
                { en: "flocking algorithm", es: "algoritmo de bandada", de: "Schwarm-Algorithmus", nl: "zwerm algoritme" },
                { en: "navigation mesh", es: "malla de navegación", de: "Navigations-Mesh", nl: "navigatie mesh" },
                { en: "goal-oriented action planning", es: "planificación de acciones orientada a objetivos", de: "zielorientierte Aktionsplanung", nl: "doelgerichte actieplanning" },
                { en: "Monte Carlo tree search", es: "búsqueda de árbol Monte Carlo", de: "Monte-Carlo-Baumsuche", nl: "Monte Carlo boom zoeken" },
                { en: "machine learning in games", es: "aprendizaje automático en juegos", de: "maschinelles Lernen in Spielen", nl: "machine learning in games" },
                { en: "reinforcement learning", es: "aprendizaje por refuerzo", de: "bestärkendes Lernen", nl: "versterkend leren" },
                { en: "genetic algorithms", es: "algoritmos genéticos", de: "genetische Algorithmen", nl: "genetische algoritmes" },
                { en: "swarm intelligence", es: "inteligencia de enjambre", de: "Schwarmintelligenz", nl: "zwerm intelligentie" },
                { en: "AI difficulty scaling", es: "escalado de dificultad de IA", de: "KI-Schwierigkeitsskalierung", nl: "AI moeilijkheidsschaling" },
                { en: "predictive AI", es: "IA predictiva", de: "prädiktive KI", nl: "voorspellende AI" },
                { en: "emergent behavior", es: "comportamiento emergente", de: "emergentes Verhalten", nl: "emergent gedrag" },
                { en: "AI scripting", es: "scripting de IA", de: "KI-Scripting", nl: "AI scripting" },
                { en: "waypoint navigation", es: "navegación por puntos de ruta", de: "Wegpunkt-Navigation", nl: "waypoint navigatie" },
                { en: "line of sight", es: "línea de visión", de: "Sichtlinie", nl: "gezichtslijn" },
                { en: "AI perception", es: "percepción de IA", de: "KI-Wahrnehmung", nl: "AI perceptie" }
            ];
            const topic = topics[i % topics.length];
            const questionTypes = [
                {
                    en: `What is ${topic.en} in gaming?`,
                    es: `¿Qué es ${topic.es} en juegos?`,
                    de: `Was ist ${topic.de} in Spielen?`,
                    nl: `Wat is ${topic.nl} in gaming?`
                },
                {
                    en: `How does ${topic.en} work?`,
                    es: `¿Cómo funciona ${topic.es}?`,
                    de: `Wie funktioniert ${topic.de}?`,
                    nl: `Hoe werkt ${topic.nl}?`
                },
                {
                    en: `When is ${topic.en} used in games?`,
                    es: `¿Cuándo se usa ${topic.es} en juegos?`,
                    de: `Wann wird ${topic.de} in Spielen verwendet?`,
                    nl: `Wanneer wordt ${topic.nl} gebruikt in games?`
                },
                {
                    en: `What benefit does ${topic.en} provide?`,
                    es: `¿Qué beneficio proporciona ${topic.es}?`,
                    de: `Welchen Nutzen bietet ${topic.de}?`,
                    nl: `Welk voordeel biedt ${topic.nl}?`
                }
            ];
            const qType = questionTypes[Math.floor(i / topics.length) % questionTypes.length];
            return {
                question: qType,
                options: [
                    {
                        en: `Game AI technique for ${topic.en}`,
                        es: `Técnica de IA de juego para ${topic.es}`,
                        de: `Spiel-KI-Technik für ${topic.de}`,
                        nl: `Game AI-techniek voor ${topic.nl}`
                    },
                    { en: "Graphics rendering method", es: "Método de renderizado gráfico", de: "Grafik-Rendering-Methode", nl: "Graphics rendering methode" },
                    { en: "Sound processing system", es: "Sistema de procesamiento de sonido", de: "Soundverarbeitungssystem", nl: "Geluidsverwerkingssysteem" },
                    { en: "Network optimization", es: "Optimización de red", de: "Netzwerk-Optimierung", nl: "Netwerk optimalisatie" }
                ],
                correct: 0,
                explanation: {
                    en: `${topic.en.charAt(0).toUpperCase() + topic.en.slice(1)} is an important AI technique in game development for creating intelligent and engaging gameplay experiences.`,
                    es: `${topic.es.charAt(0).toUpperCase() + topic.es.slice(1)} es una técnica importante de IA en el desarrollo de juegos para crear experiencias de juego inteligentes y atractivas.`,
                    de: `${topic.de.charAt(0).toUpperCase() + topic.de.slice(1)} ist eine wichtige KI-Technik in der Spielentwicklung für intelligente und fesselnde Spielerfahrungen.`,
                    nl: `${topic.nl.charAt(0).toUpperCase() + topic.nl.slice(1)} is een belangrijke AI-techniek in game-ontwikkeling voor het creëren van intelligente en boeiende gameplay-ervaringen.`
                }
            };
        })
    ]
};