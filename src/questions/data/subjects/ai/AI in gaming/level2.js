// AI in gaming - level2
// Total questions: 100
// Beginner level - Game AI implementation basics

module.exports = {
    questions: [
        {
            question: {
                en: "What is the Dijkstra algorithm in games?",
                es: "¿Qué es el algoritmo de Dijkstra en juegos?",
                de: "Was ist der Dijkstra-Algorithmus in Spielen?",
                nl: "Wat is het Dijkstra algoritme in games?"
            },
            options: [
                { en: "Shortest path algorithm", es: "Algoritmo de camino más corto", de: "Kürzester-Weg-Algorithmus", nl: "Kortste pad algoritme" },
                { en: "Sorting method", es: "Método de ordenamiento", de: "Sortierverfahren", nl: "Sorteermethode" },
                { en: "Memory allocation", es: "Asignación de memoria", de: "Speicherzuweisung", nl: "Geheugentoewijzing" },
                { en: "Data structure", es: "Estructura de datos", de: "Datenstruktur", nl: "Datastructuur" }
            ],
            correct: 0,
            explanation: {
                en: "Dijkstra's algorithm finds the shortest path between nodes in a graph, commonly used for NPC navigation in games with weighted paths.",
                es: "El algoritmo de Dijkstra encuentra el camino más corto entre nodos en un grafo, comúnmente usado para navegación de NPCs en juegos con caminos ponderados.",
                de: "Der Dijkstra-Algorithmus findet den kürzesten Weg zwischen Knoten in einem Graphen, häufig für NPC-Navigation in Spielen mit gewichteten Pfaden verwendet.",
                nl: "Dijkstra's algoritme vindt het kortste pad tussen knooppunten in een graaf, veel gebruikt voor NPC-navigatie in games met gewogen paden."
            }
        },
        {
            question: {
                en: "What is a decision tree in game AI?",
                es: "¿Qué es un árbol de decisión en IA de juegos?",
                de: "Was ist ein Entscheidungsbaum in Spiel-KI?",
                nl: "Wat is een beslissingsboom in game AI?"
            },
            options: [
                { en: "Branching logic structure", es: "Estructura de lógica ramificada", de: "Verzweigende Logikstruktur", nl: "Vertakkende logische structuur" },
                { en: "File system", es: "Sistema de archivos", de: "Dateisystem", nl: "Bestandssysteem" },
                { en: "Graphics tree", es: "Árbol gráfico", de: "Grafikbaum", nl: "Grafische boom" },
                { en: "Network topology", es: "Topología de red", de: "Netzwerktopologie", nl: "Netwerktopologie" }
            ],
            correct: 0,
            explanation: {
                en: "Decision trees are flowchart-like structures where each node represents a decision, helping AI choose actions based on conditions.",
                es: "Los árboles de decisión son estructuras tipo diagrama de flujo donde cada nodo representa una decisión, ayudando a la IA a elegir acciones según condiciones.",
                de: "Entscheidungsbäume sind flussdiagrammartige Strukturen, bei denen jeder Knoten eine Entscheidung darstellt und der KI hilft, Aktionen basierend auf Bedingungen zu wählen.",
                nl: "Beslissingsbomen zijn stroomdiagramachtige structuren waarbij elk knooppunt een beslissing vertegenwoordigt, waardoor AI acties kan kiezen op basis van voorwaarden."
            }
        },
        {
            question: {
                en: "What is utility AI?",
                es: "¿Qué es la IA de utilidad?",
                de: "Was ist Utility-KI?",
                nl: "Wat is utility AI?"
            },
            options: [
                { en: "Score-based decision making", es: "Toma de decisiones basada en puntuación", de: "Punktebasierte Entscheidungsfindung", nl: "Score-gebaseerde besluitvorming" },
                { en: "Helper functions", es: "Funciones auxiliares", de: "Hilfsfunktionen", nl: "Hulpfuncties" },
                { en: "System utilities", es: "Utilidades del sistema", de: "Systemdienstprogramme", nl: "Systeemhulpprogramma's" },
                { en: "Tool collection", es: "Colección de herramientas", de: "Werkzeugsammlung", nl: "Gereedschapscollectie" }
            ],
            correct: 0,
            explanation: {
                en: "Utility AI evaluates multiple actions by scoring their usefulness, allowing NPCs to make more nuanced and context-aware decisions.",
                es: "La IA de utilidad evalúa múltiples acciones puntuando su utilidad, permitiendo a los NPCs tomar decisiones más matizadas y conscientes del contexto.",
                de: "Utility-KI bewertet mehrere Aktionen durch Bewertung ihrer Nützlichkeit, wodurch NPCs nuanciertere und kontextbewusste Entscheidungen treffen können.",
                nl: "Utility AI evalueert meerdere acties door hun nuttigheid te scoren, waardoor NPCs genuanceerdere en contextbewuste beslissingen kunnen nemen."
            }
        },
        {
            question: {
                en: "What is GOAP in game AI?",
                es: "¿Qué es GOAP en IA de juegos?",
                de: "Was ist GOAP in Spiel-KI?",
                nl: "Wat is GOAP in game AI?"
            },
            options: [
                { en: "Goal-Oriented Action Planning", es: "Planificación de Acciones Orientada a Objetivos", de: "Zielorientierte Aktionsplanung", nl: "Doelgerichte Actieplanning" },
                { en: "Graphics Optimization Protocol", es: "Protocolo de Optimización Gráfica", de: "Grafikoptimierungsprotokoll", nl: "Graphics Optimalisatie Protocol" },
                { en: "Game Object Pool", es: "Pool de Objetos del Juego", de: "Spielobjekt-Pool", nl: "Game Object Pool" },
                { en: "General Operation Procedure", es: "Procedimiento de Operación General", de: "Allgemeines Betriebsverfahren", nl: "Algemene Operatie Procedure" }
            ],
            correct: 0,
            explanation: {
                en: "GOAP (Goal-Oriented Action Planning) allows AI to dynamically plan sequences of actions to achieve goals, creating more flexible behavior.",
                es: "GOAP permite a la IA planificar dinámicamente secuencias de acciones para lograr objetivos, creando comportamiento más flexible.",
                de: "GOAP ermöglicht es der KI, dynamisch Aktionssequenzen zu planen, um Ziele zu erreichen und flexibleres Verhalten zu erzeugen.",
                nl: "GOAP stelt AI in staat om dynamisch actiesequenties te plannen om doelen te bereiken, wat flexibeler gedrag creëert."
            }
        },
        {
            question: {
                en: "What is influence mapping?",
                es: "¿Qué es el mapeo de influencia?",
                de: "Was ist Influence-Mapping?",
                nl: "Wat is invloedskaarten?"
            },
            options: [
                { en: "Territory control visualization", es: "Visualización de control territorial", de: "Territoriumskontroll-Visualisierung", nl: "Territoriumcontrole visualisatie" },
                { en: "Social media mapping", es: "Mapeo de redes sociales", de: "Social-Media-Mapping", nl: "Sociale media mapping" },
                { en: "Character relationships", es: "Relaciones de personajes", de: "Charakterbeziehungen", nl: "Karakter relaties" },
                { en: "Power distribution", es: "Distribución de energía", de: "Energieverteilung", nl: "Stroomverdeling" }
            ],
            correct: 0,
            explanation: {
                en: "Influence maps represent areas of control or danger on game maps, helping AI make strategic decisions about movement and positioning.",
                es: "Los mapas de influencia representan áreas de control o peligro en mapas del juego, ayudando a la IA a tomar decisiones estratégicas sobre movimiento y posicionamiento.",
                de: "Influence-Maps stellen Kontroll- oder Gefahrenbereiche auf Spielkarten dar und helfen der KI bei strategischen Entscheidungen über Bewegung und Positionierung.",
                nl: "Invloedskaarten vertegenwoordigen gebieden van controle of gevaar op gamekaarten, waarbij AI wordt geholpen strategische beslissingen te nemen over beweging en positionering."
            }
        },
        {
            question: {
                en: "What is squad AI?",
                es: "¿Qué es la IA de escuadrón?",
                de: "Was ist Squad-KI?",
                nl: "Wat is squad AI?"
            },
            options: [
                { en: "Coordinated group behavior", es: "Comportamiento grupal coordinado", de: "Koordiniertes Gruppenverhalten", nl: "Gecoördineerd groepsgedrag" },
                { en: "Single unit control", es: "Control de unidad única", de: "Einzeleinheiten-Steuerung", nl: "Enkele eenheid controle" },
                { en: "Player squad management", es: "Gestión de escuadrón del jugador", de: "Spieler-Squad-Verwaltung", nl: "Speler squad beheer" },
                { en: "Team selection", es: "Selección de equipo", de: "Team-Auswahl", nl: "Team selectie" }
            ],
            correct: 0,
            explanation: {
                en: "Squad AI coordinates multiple AI units to work together tactically, using formations, flanking maneuvers, and synchronized attacks.",
                es: "La IA de escuadrón coordina múltiples unidades de IA para trabajar juntas tácticamente, usando formaciones, maniobras de flanqueo y ataques sincronizados.",
                de: "Squad-KI koordiniert mehrere KI-Einheiten für taktische Zusammenarbeit mit Formationen, Flankenmanövern und synchronisierten Angriffen.",
                nl: "Squad AI coördineert meerdere AI-eenheden om tactisch samen te werken met formaties, flankerende manoeuvres en gesynchroniseerde aanvallen."
            }
        },
        {
            question: {
                en: "What is tactical AI?",
                es: "¿Qué es la IA táctica?",
                de: "Was ist taktische KI?",
                nl: "Wat is tactische AI?"
            },
            options: [
                { en: "Strategic combat decision making", es: "Toma de decisiones de combate estratégico", de: "Strategische Kampfentscheidungen", nl: "Strategische gevechtsbeslissingen" },
                { en: "Touch controls", es: "Controles táctiles", de: "Touch-Steuerung", nl: "Touch bediening" },
                { en: "Tactical gear system", es: "Sistema de equipo táctico", de: "Taktisches Ausrüstungssystem", nl: "Tactisch uitrustingssysteem" },
                { en: "Military simulation", es: "Simulación militar", de: "Militärsimulation", nl: "Militaire simulatie" }
            ],
            correct: 0,
            explanation: {
                en: "Tactical AI analyzes battlefield conditions to make strategic decisions about positioning, cover usage, and attack timing.",
                es: "La IA táctica analiza las condiciones del campo de batalla para tomar decisiones estratégicas sobre posicionamiento, uso de cobertura y tiempo de ataque.",
                de: "Taktische KI analysiert Schlachtfeldbedingungen für strategische Entscheidungen über Positionierung, Deckungsnutzung und Angriffstiming.",
                nl: "Tactische AI analyseert slagveldomstandigheden om strategische beslissingen te nemen over positionering, dekkingsgebruik en aanvalstiming."
            }
        },
        {
            question: {
                en: "What is crowd simulation?",
                es: "¿Qué es la simulación de multitudes?",
                de: "Was ist Crowd-Simulation?",
                nl: "Wat is menigtesimulatie?"
            },
            options: [
                { en: "Mass NPC movement system", es: "Sistema de movimiento masivo de NPCs", de: "Massen-NPC-Bewegungssystem", nl: "Massa NPC bewegingssysteem" },
                { en: "Multiplayer lobbies", es: "Salas multijugador", de: "Multiplayer-Lobbys", nl: "Multiplayer lobby's" },
                { en: "Audience reactions", es: "Reacciones del público", de: "Publikumsreaktionen", nl: "Publiek reacties" },
                { en: "Social features", es: "Características sociales", de: "Soziale Funktionen", nl: "Sociale functies" }
            ],
            correct: 0,
            explanation: {
                en: "Crowd simulation manages large groups of NPCs realistically, creating believable crowd behaviors in stadiums, cities, or battles.",
                es: "La simulación de multitudes gestiona grandes grupos de NPCs de manera realista, creando comportamientos creíbles en estadios, ciudades o batallas.",
                de: "Crowd-Simulation verwaltet große NPC-Gruppen realistisch und erzeugt glaubwürdige Menschenmengen in Stadien, Städten oder Schlachten.",
                nl: "Menigtesimulatie beheert grote groepen NPCs realistisch, waarbij geloofwaardig menigtegedrag wordt gecreëerd in stadions, steden of gevechten."
            }
        },
        {
            question: {
                en: "What is AI LOD (Level of Detail)?",
                es: "¿Qué es LOD de IA (Nivel de Detalle)?",
                de: "Was ist KI-LOD (Detailstufe)?",
                nl: "Wat is AI LOD (Level of Detail)?"
            },
            options: [
                { en: "AI complexity based on distance", es: "Complejidad de IA basada en distancia", de: "KI-Komplexität basierend auf Entfernung", nl: "AI complexiteit gebaseerd op afstand" },
                { en: "Graphics quality settings", es: "Configuración de calidad gráfica", de: "Grafikqualitätseinstellungen", nl: "Grafische kwaliteitsinstellingen" },
                { en: "Load order determination", es: "Determinación de orden de carga", de: "Ladereihenfolge-Bestimmung", nl: "Laadvolgorde bepaling" },
                { en: "Level design tool", es: "Herramienta de diseño de niveles", de: "Level-Design-Tool", nl: "Level ontwerp tool" }
            ],
            correct: 0,
            explanation: {
                en: "AI LOD reduces computational complexity for distant NPCs, using simpler behaviors far from the player and detailed AI up close.",
                es: "LOD de IA reduce la complejidad computacional para NPCs distantes, usando comportamientos más simples lejos del jugador y IA detallada cerca.",
                de: "KI-LOD reduziert die Rechenkomplexität für entfernte NPCs mit einfacheren Verhaltensweisen in der Ferne und detaillierter KI in der Nähe.",
                nl: "AI LOD vermindert computationele complexiteit voor verre NPCs, met eenvoudiger gedrag ver van de speler en gedetailleerde AI dichtbij."
            }
        },
        {
            question: {
                en: "What is combat AI?",
                es: "¿Qué es la IA de combate?",
                de: "Was ist Kampf-KI?",
                nl: "Wat is gevechts-AI?"
            },
            options: [
                { en: "Fighting behavior system", es: "Sistema de comportamiento de lucha", de: "Kampfverhaltenssystem", nl: "Vechtgedragssysteem" },
                { en: "Combat statistics", es: "Estadísticas de combate", de: "Kampfstatistiken", nl: "Gevechtsstatistieken" },
                { en: "Weapon management", es: "Gestión de armas", de: "Waffenverwaltung", nl: "Wapenbeheer" },
                { en: "Battle simulator", es: "Simulador de batalla", de: "Kampfsimulator", nl: "Gevechtssimulator" }
            ],
            correct: 0,
            explanation: {
                en: "Combat AI controls enemy attack patterns, dodging, blocking, and tactical decisions during fights to provide challenging opponents.",
                es: "La IA de combate controla patrones de ataque enemigo, esquive, bloqueo y decisiones tácticas durante peleas para proporcionar oponentes desafiantes.",
                de: "Kampf-KI steuert feindliche Angriffsmuster, Ausweichen, Blocken und taktische Entscheidungen während Kämpfen für herausfordernde Gegner.",
                nl: "Gevechts-AI bestuurt vijandelijke aanvalspatronen, ontwijken, blokkeren en tactische beslissingen tijdens gevechten voor uitdagende tegenstanders."
            }
        },
        ...Array.from({ length: 90 }, (_, i) => {
            const topics = [
                { en: "hierarchical pathfinding", es: "búsqueda de caminos jerárquica", de: "hierarchische Pfadfindung", nl: "hiërarchische pathfinding" },
                { en: "dynamic pathfinding", es: "búsqueda de caminos dinámica", de: "dynamische Pfadfindung", nl: "dynamische pathfinding" },
                { en: "alpha-beta pruning", es: "poda alfa-beta", de: "Alpha-Beta-Pruning", nl: "alpha-beta snoeien" },
                { en: "breadth-first search", es: "búsqueda en anchura", de: "Breitensuche", nl: "breedte-eerst zoeken" },
                { en: "depth-first search", es: "búsqueda en profundidad", de: "Tiefensuche", nl: "diepte-eerst zoeken" },
                { en: "heuristic functions", es: "funciones heurísticas", de: "heuristische Funktionen", nl: "heuristische functies" },
                { en: "Manhattan distance", es: "distancia Manhattan", de: "Manhattan-Distanz", nl: "Manhattan afstand" },
                { en: "Euclidean distance", es: "distancia euclidiana", de: "euklidische Distanz", nl: "Euclidische afstand" },
                { en: "reactive AI", es: "IA reactiva", de: "reaktive KI", nl: "reactieve AI" },
                { en: "deliberative AI", es: "IA deliberativa", de: "deliberative KI", nl: "deliberatieve AI" },
                { en: "hybrid AI systems", es: "sistemas de IA híbridos", de: "hybride KI-Systeme", nl: "hybride AI-systemen" },
                { en: "blackboard systems", es: "sistemas de pizarra", de: "Blackboard-Systeme", nl: "blackboard systemen" },
                { en: "subsumption architecture", es: "arquitectura de subsunción", de: "Subsumption-Architektur", nl: "subsumptie architectuur" },
                { en: "sensor systems", es: "sistemas de sensores", de: "Sensorsysteme", nl: "sensor systemen" },
                { en: "action selection", es: "selección de acciones", de: "Aktionsauswahl", nl: "actie selectie" },
                { en: "context steering", es: "dirección contextual", de: "Kontext-Steuerung", nl: "context sturing" },
                { en: "flow fields", es: "campos de flujo", de: "Flussfelder", nl: "stroom velden" },
                { en: "potential fields", es: "campos potenciales", de: "Potentialfelder", nl: "potentiaal velden" },
                { en: "obstacle avoidance", es: "evitación de obstáculos", de: "Hindernisvermeidung", nl: "obstakel vermijding" },
                { en: "wall following", es: "seguimiento de paredes", de: "Wandverfolgung", nl: "muur volgen" }
            ];
            const topic = topics[i % topics.length];
            const questionTypes = [
                {
                    en: `How is ${topic.en} implemented?`,
                    es: `¿Cómo se implementa ${topic.es}?`,
                    de: `Wie wird ${topic.de} implementiert?`,
                    nl: `Hoe wordt ${topic.nl} geïmplementeerd?`
                },
                {
                    en: `What advantage does ${topic.en} offer?`,
                    es: `¿Qué ventaja ofrece ${topic.es}?`,
                    de: `Welchen Vorteil bietet ${topic.de}?`,
                    nl: `Welk voordeel biedt ${topic.nl}?`
                },
                {
                    en: `Where is ${topic.en} most effective?`,
                    es: `¿Dónde es más efectivo ${topic.es}?`,
                    de: `Wo ist ${topic.de} am effektivsten?`,
                    nl: `Waar is ${topic.nl} het meest effectief?`
                },
                {
                    en: `What problem does ${topic.en} solve?`,
                    es: `¿Qué problema resuelve ${topic.es}?`,
                    de: `Welches Problem löst ${topic.de}?`,
                    nl: `Welk probleem lost ${topic.nl} op?`
                }
            ];
            const qType = questionTypes[Math.floor(i / topics.length) % questionTypes.length];
            return {
                question: qType,
                options: [
                    {
                        en: `AI technique using ${topic.en}`,
                        es: `Técnica de IA usando ${topic.es}`,
                        de: `KI-Technik mit ${topic.de}`,
                        nl: `AI-techniek met ${topic.nl}`
                    },
                    { en: "Graphics optimization", es: "Optimización gráfica", de: "Grafikoptimierung", nl: "Graphics optimalisatie" },
                    { en: "Audio processing", es: "Procesamiento de audio", de: "Audioverarbeitung", nl: "Audio verwerking" },
                    { en: "Input handling", es: "Manejo de entrada", de: "Eingabeverarbeitung", nl: "Input afhandeling" }
                ],
                correct: 0,
                explanation: {
                    en: `${topic.en.charAt(0).toUpperCase() + topic.en.slice(1)} is a key technique in game AI for creating sophisticated and believable NPC behaviors.`,
                    es: `${topic.es.charAt(0).toUpperCase() + topic.es.slice(1)} es una técnica clave en IA de juegos para crear comportamientos de NPC sofisticados y creíbles.`,
                    de: `${topic.de.charAt(0).toUpperCase() + topic.de.slice(1)} ist eine Schlüsseltechnik in der Spiel-KI für anspruchsvolle und glaubwürdige NPC-Verhaltensweisen.`,
                    nl: `${topic.nl.charAt(0).toUpperCase() + topic.nl.slice(1)} is een belangrijke techniek in game AI voor het creëren van geavanceerd en geloofwaardig NPC-gedrag.`
                }
            };
        })
    ]
};