// AI in gaming - level4
// Total questions: 100

module.exports = {
    questions: [
        {
            "question": {
                "en": "What is Monte Carlo Tree Search (MCTS)?",
                "es": "¿Qué es la búsqueda en árbol de Monte Carlo (MCTS)?",
                "de": "Was ist Monte-Carlo-Baumsuche (MCTS)?",
                "nl": "Wat is Monte Carlo Tree Search (MCTS)?"
            },
            "options": [
                {
                    "en": "A decision-making algorithm using random sampling to explore possibilities",
                    "es": "Un algoritmo de toma de decisiones que usa muestreo aleatorio para explorar posibilidades",
                    "de": "Ein Entscheidungsalgorithmus, der zufällige Stichproben verwendet, um Möglichkeiten zu erkunden",
                    "nl": "Een besluitvormingsalgoritme dat willekeurige steekproeven gebruikt om mogelijkheden te verkennen"
                },
                {
                    "en": "A graphics rendering technique",
                    "es": "Una técnica de renderizado gráfico",
                    "de": "Eine Grafik-Rendering-Technik",
                    "nl": "Een grafische renderingtechniek"
                },
                {
                    "en": "A map generation algorithm",
                    "es": "Un algoritmo de generación de mapas",
                    "de": "Ein Kartengenerierungsalgorithmus",
                    "nl": "Een kaart-generatie-algoritme"
                },
                {
                    "en": "A network synchronization protocol",
                    "es": "Un protocolo de sincronización de red",
                    "de": "Ein Netzwerksynchronisationsprotokoll",
                    "nl": "Een netwerksynchronisatieprotocol"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "MCTS builds a game tree using random simulation. It selects promising branches, expands the tree, simulates random outcomes, and backpropagates results. Used by AlphaGo combined with neural networks for superhuman play.",
                "es": "MCTS construye un árbol de juego mediante simulación aleatoria: selecciona ramas prometedoras, las expande, simula resultados y retropropaga. AlphaGo lo combina con redes neuronales para juego sobrehumano.",
                "de": "MCTS baut einen Spielbaum durch zufällige Simulation: wählt vielversprechende Äste, expandiert, simuliert Zufallsergebnisse und propagiert zurück. AlphaGo nutzt MCTS mit neuronalen Netzen.",
                "nl": "MCTS bouwt een spelboomboom via willekeurige simulatie: selecteert veelbelovende takken, breidt uit, simuleert willekeurige uitkomsten en propageert resultaten terug. AlphaGo combineert MCTS met neurale netwerken."
            }
        },
        {
            "question": {
                "en": "What is the UCB1 formula used for in MCTS?",
                "es": "¿Para qué se utiliza la fórmula UCB1 en MCTS?",
                "de": "Wofür wird die UCB1-Formel in MCTS verwendet?",
                "nl": "Waarvoor wordt de UCB1-formule in MCTS gebruikt?"
            },
            "options": [
                {
                    "en": "Balancing exploration and exploitation in tree search",
                    "es": "Equilibrar la exploración y la explotación en la búsqueda de árboles",
                    "de": "Ausbalancieren von Erkundung und Ausnutzung bei der Baumsuche",
                    "nl": "Het balanceren van exploratie en exploitatie in boomzoeken"
                },
                {
                    "en": "Calculating combat damage",
                    "es": "Calcular daño de combate",
                    "de": "Kampfschaden berechnen",
                    "nl": "Het berekenen van gevechtsschade"
                },
                {
                    "en": "Measuring network bandwidth",
                    "es": "Medir el ancho de banda de red",
                    "de": "Netzwerkbandbreite messen",
                    "nl": "Het meten van netwerkbandbreedte"
                },
                {
                    "en": "Optimizing texture compression",
                    "es": "Optimizar la compresión de texturas",
                    "de": "Texturkompression optimieren",
                    "nl": "Het optimaliseren van texture-compressie"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "UCB1 adds an exploration bonus that decreases as a node is visited more often. This ensures nodes that haven't been tried much get a chance, while still favoring nodes with high win rates.",
                "es": "UCB1 añade un bono de exploración que decrece cuanto más se visita un nodo. Así los nodos poco visitados tienen oportunidad, favoreciendo a la vez los de alta tasa de victoria.",
                "de": "UCB1 fügt einen Erkundungsbonus hinzu, der mit häufigeren Besuchen sinkt. So erhalten wenig besuchte Knoten Chancen, während Knoten mit hoher Gewinnrate bevorzugt werden.",
                "nl": "UCB1 voegt een verkenningsbonus toe die afneemt naarmate een knoop vaker wordt bezocht. Dit geeft minder bezochte knopen een kans, terwijl knopen met hoge winstratio worden bevoordeeld."
            }
        },
        {
            "question": {
                "en": "What is a Hierarchical Task Network (HTN) in AI planning?",
                "es": "¿Qué es una Red de Tareas Jerárquica (HTN) en la planificación de IA?",
                "de": "Was ist ein Hierarchisches Aufgabennetzwerk (HTN) in der KI-Planung?",
                "nl": "Wat is een Hiërarchisch Takenetwerk (HTN) in AI-planning?"
            },
            "options": [
                {
                    "en": "A planning system that decomposes high-level tasks into subtasks",
                    "es": "Un sistema de planificación que descompone tareas de alto nivel en subtareas",
                    "de": "Ein Planungssystem, das hochrangige Aufgaben in Unteraufgaben zerlegt",
                    "nl": "Een planningssysteem dat high-level taken opsplitst in subtaken"
                },
                {
                    "en": "A network topology for multiplayer games",
                    "es": "Una topología de red para juegos multijugador",
                    "de": "Eine Netzwerktopologie für Multiplayer-Spiele",
                    "nl": "Een netwerktopologie voor multiplayer games"
                },
                {
                    "en": "A graphics layering system",
                    "es": "Un sistema de capas gráficas",
                    "de": "Ein Grafik-Schichtsystem",
                    "nl": "Een grafisch laagssysteem"
                },
                {
                    "en": "A file organization structure",
                    "es": "Una estructura de organización de archivos",
                    "de": "Eine Dateiorganisationsstruktur",
                    "nl": "Een bestandsorganisatiestructuur"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "HTN planning decomposes complex goals into manageable subtasks using a task network. Game AI uses HTN for NPC behavior: a 'patrol' task breaks into 'move-to-point', 'wait', and 'turn' subtasks.",
                "es": "HTN descompone objetivos complejos en subtareas usando una red de tareas. En IA de juegos: 'patrullar' se divide en 'mover-a-punto', 'esperar' y 'girar'. Facilita comportamientos NPC complejos.",
                "de": "HTN zerlegt komplexe Ziele mit einem Aufgabennetzwerk in Unteraufgaben. Spiele-KI nutzt HTN für NPC-Verhalten: 'Patrouille' wird in 'Bewegen', 'Warten' und 'Wenden' aufgeteilt.",
                "nl": "HTN-planning splitst complexe doelen op in subtaken via een takenetwerk. Game AI gebruikt HTN voor NPC-gedrag: 'patrouilleren' wordt opgesplitst in 'bewegen', 'wachten' en 'draaien'."
            }
        },
        {
            "question": {
                "en": "What is a PID controller in game AI movement?",
                "es": "¿Qué es un controlador PID en el movimiento de IA de juegos?",
                "de": "Was ist ein PID-Regler in der Spiele-KI-Bewegung?",
                "nl": "Wat is een PID-controller in game AI-beweging?"
            },
            "options": [
                {
                    "en": "A feedback control system using Proportional-Integral-Derivative calculations",
                    "es": "Un sistema de control de retroalimentación usando cálculos Proporcional-Integral-Derivativo",
                    "de": "Ein Rückkopplungskontrollsystem mit Proportional-Integral-Ableitungsberechnungen",
                    "nl": "Een feedbackcontrolesysteem met Proportioneel-Integraal-Afgeleide berekeningen"
                },
                {
                    "en": "A player identification system",
                    "es": "Un sistema de identificación de jugadores",
                    "de": "Ein Spieleridentifikationssystem",
                    "nl": "Een speler-identificatiesysteem"
                },
                {
                    "en": "A particle interaction detector",
                    "es": "Un detector de interacción de partículas",
                    "de": "Ein Partikel-Interaktionsdetektor",
                    "nl": "Een particle-interactie detector"
                },
                {
                    "en": "A physics integration method",
                    "es": "Un método de integración de física",
                    "de": "Eine Physik-Integrationsmethode",
                    "nl": "Een fysica-integratie methode"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A PID controller uses three components: Proportional (current error), Integral (accumulated errors), and Derivative (rate of change). In games it creates smooth, responsive movement like steering AI vehicles.",
                "es": "Un controlador PID usa tres componentes: Proporcional (error actual), Integral (errores acumulados) y Derivativo (tasa de cambio). En juegos crea movimientos suaves como el de vehículos IA.",
                "de": "Ein PID-Regler hat drei Komponenten: Proportional (aktueller Fehler), Integral (akkumulierte Fehler) und Derivativ (Änderungsrate). In Spielen erzeugt er flüssige Bewegungen wie bei KI-Fahrzeugen.",
                "nl": "Een PID-regelaar heeft drie componenten: Proportioneel (huidige fout), Integraal (gecumuleerde fouten) en Differentieel (veranderingssnelheid). In games creëert het vloeiende bewegingen voor AI-voertuigen."
            }
        },
        {
            "question": {
                "en": "What is velocity matching in steering behaviors?",
                "es": "¿Qué es la coincidencia de velocidad en los comportamientos de dirección?",
                "de": "Was ist Geschwindigkeitsanpassung bei Lenkverhalten?",
                "nl": "Wat is snelheidsaanpassing in stuurgedragingen?"
            },
            "options": [
                {
                    "en": "Adjusting an agent's velocity to match nearby agents",
                    "es": "Ajustar la velocidad de un agente para igualar la de agentes cercanos",
                    "de": "Anpassen der Geschwindigkeit eines Agenten an nahegelegene Agenten",
                    "nl": "Het aanpassen van de snelheid van een agent aan nabijgelegen agents"
                },
                {
                    "en": "Synchronizing network packet speeds",
                    "es": "Sincronizar velocidades de paquetes de red",
                    "de": "Synchronisieren von Netzwerkpaketgeschwindigkeiten",
                    "nl": "Het synchroniseren van netwerkpakket-snelheden"
                },
                {
                    "en": "Matching animation frame rates",
                    "es": "Igualar velocidades de fotogramas de animación",
                    "de": "Anpassen von Animationsbildraten",
                    "nl": "Het matchen van animatie-framerates"
                },
                {
                    "en": "Calibrating game speed settings",
                    "es": "Calibrar configuraciones de velocidad del juego",
                    "de": "Kalibrieren von Spielgeschwindigkeitseinstellungen",
                    "nl": "Het kalibreren van game-snelheidsinstellingen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Velocity matching is a flocking behavior where agents adjust speed and direction to match neighbors, creating natural group movement. It is one of Reynolds' three core flocking rules alongside cohesion and separation.",
                "es": "La coincidencia de velocidad es un comportamiento de bandada donde los agentes ajustan velocidad y dirección para coincidir con vecinos. Es una de las tres reglas de bandada de Reynolds.",
                "de": "Geschwindigkeitsanpassung ist ein Schwarmenverhalten, bei dem Agenten Geschwindigkeit und Richtung anpassen um Nachbarn zu entsprechen. Es ist eine der drei Reynolds-Schwarmenregeln.",
                "nl": "Snelheidsaanpassing is zwermgedrag waarbij agenten snelheid en richting aanpassen om bij buuragenten te passen. Het is een van Reynolds' drie kernsturegels naast samenhang en scheiding."
            }
        },
        {
            "question": {
                "en": "What is arrival behavior in steering?",
                "es": "¿Qué es el comportamiento de llegada en la dirección?",
                "de": "Was ist Ankunftsverhalten beim Lenken?",
                "nl": "Wat is aankomstgedrag in sturing?"
            },
            "options": [
                {
                    "en": "Slowing down smoothly when approaching a target",
                    "es": "Reducir la velocidad suavemente al acercarse a un objetivo",
                    "de": "Sanftes Abbremsen beim Annähern an ein Ziel",
                    "nl": "Soepel vertragen bij het naderen van een doel"
                },
                {
                    "en": "Detecting when players join the game",
                    "es": "Detectar cuándo los jugadores se unen al juego",
                    "de": "Erkennen, wann Spieler dem Spiel beitreten",
                    "nl": "Het detecteren wanneer spelers zich bij het spel voegen"
                },
                {
                    "en": "Loading game assets on demand",
                    "es": "Cargar recursos del juego bajo demanda",
                    "de": "Spiel-Assets bei Bedarf laden",
                    "nl": "Het laden van game-assets op aanvraag"
                },
                {
                    "en": "Triggering cutscenes at checkpoints",
                    "es": "Activar cinemáticas en puntos de control",
                    "de": "Auslösen von Zwischensequenzen an Checkpoints",
                    "nl": "Het activeren van cutscenes bij checkpoints"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Arrival extends seek behavior by adding a braking radius. When the agent enters this radius, it decelerates proportionally to remaining distance, stopping smoothly at the target instead of oscillating.",
                "es": "Arrival añade un radio de frenado al comportamiento seek. Al entrar en ese radio, el agente desacelera proporcionalmente a la distancia restante, deteniéndose suavemente en el objetivo.",
                "de": "Arrival erweitert Seek durch einen Bremsradius. Beim Eintreten bremst der Agent proportional zur Restdistanz ab und stoppt sanft am Ziel statt zu oszillieren.",
                "nl": "Arrival breidt seek-gedrag uit met een remstraal. Wanneer de agent deze betreedt, vertraagt hij proportioneel aan de resterende afstand en stopt soepel bij het doel in plaats van te oscilleren."
            }
        },
        {
            "question": {
                "en": "What is pursuit steering in game AI?",
                "es": "¿Qué es la dirección de persecución en la IA de juegos?",
                "de": "Was ist Verfolgungslenkung in der Spiele-KI?",
                "nl": "Wat is achtervolgingssturing in game AI?"
            },
            "options": [
                {
                    "en": "Predicting and moving toward where a target will be",
                    "es": "Predecir y moverse hacia donde estará un objetivo",
                    "de": "Vorhersagen und sich dorthin bewegen, wo ein Ziel sein wird",
                    "nl": "Het voorspellen en bewegen naar waar een doel zal zijn"
                },
                {
                    "en": "Following a predefined path",
                    "es": "Seguir un camino predefinido",
                    "de": "Einem vordefinierten Pfad folgen",
                    "nl": "Het volgen van een vooraf gedefinieerd pad"
                },
                {
                    "en": "Chasing achievements and collectibles",
                    "es": "Perseguir logros y coleccionables",
                    "de": "Errungenschaften und Sammelobjekte verfolgen",
                    "nl": "Het najagen van prestaties en verzamelobjecten"
                },
                {
                    "en": "Tracking player statistics",
                    "es": "Rastrear estadísticas del jugador",
                    "de": "Spielerstatistiken verfolgen",
                    "nl": "Het volgen van spelerstatistieken"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Pursuit predicts where a moving target will be in the future, then seeks toward that predicted position. This makes AI seem smarter than simple seek, as it intercepts rather than chases.",
                "es": "Pursuit predice dónde estará un objetivo en el futuro y se dirige allí. Hace que la IA parezca más inteligente al interceptar en lugar de simplemente seguir.",
                "de": "Pursuit sagt voraus wo ein bewegliches Ziel sein wird und steuert dorthin. Das lässt die KI intelligenter wirken, da sie abfängt statt nur verfolgt.",
                "nl": "Pursuit voorspelt waar een bewegend doel zal zijn en stuurt daarheen. Dit maakt AI slimmer dan eenvoudig seek, want het onderschept in plaats van te achtervolgen."
            }
        },
        {
            "question": {
                "en": "What is evade steering behavior?",
                "es": "¿Qué es el comportamiento de evasión en la dirección?",
                "de": "Was ist Ausweich-Lenkverhalten?",
                "nl": "Wat is ontwijkend stuurgedrag?"
            },
            "options": [
                {
                    "en": "Moving away from a predicted pursuer's future position",
                    "es": "Alejarse de la posición futura prevista de un perseguidor",
                    "de": "Sich von der vorhergesagten zukünftigen Position eines Verfolgers wegbewegen",
                    "nl": "Wegbewegen van de voorspelde toekomstige positie van een achtervolger"
                },
                {
                    "en": "Dodging projectiles in real-time",
                    "es": "Esquivar proyectiles en tiempo real",
                    "de": "Projektile in Echtzeit ausweichen",
                    "nl": "Het ontwijken van projectielen in real-time"
                },
                {
                    "en": "Avoiding game crashes",
                    "es": "Evitar bloqueos del juego",
                    "de": "Spielabstürze vermeiden",
                    "nl": "Het vermijden van game-crashes"
                },
                {
                    "en": "Bypassing tutorial sections",
                    "es": "Omitir secciones de tutorial",
                    "de": "Tutorial-Abschnitte überspringen",
                    "nl": "Het overslaan van tutorial-secties"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Evade is the inverse of pursuit: the agent predicts where a pursuer will be and moves away from that predicted future position. This creates more realistic fleeing behavior than simple flee-from-current-position.",
                "es": "Evade es el inverso de pursuit: el agente predice dónde estará el perseguidor y se aleja de esa posición futura. Crea huidas más realistas que alejarse de la posición actual.",
                "de": "Evade ist das Gegenteil von Pursuit: Der Agent sagt voraus wo der Verfolger sein wird und entfernt sich von dieser Position. Erzeugt realistischeres Fluchtverhalten.",
                "nl": "Evade is het omgekeerde van pursuit: de agent voorspelt waar een achtervolger zal zijn en beweegt weg van die positie. Dit geeft realistischer vluchtgedrag dan simpelweg vluchten."
            }
        },
        {
            "question": {
                "en": "What is wander steering behavior?",
                "es": "¿Qué es el comportamiento de deambulación en la dirección?",
                "de": "Was ist Umherwander-Lenkverhalten?",
                "nl": "Wat is dwalend stuurgedrag?"
            },
            "options": [
                {
                    "en": "Random, organic-looking movement with smooth direction changes",
                    "es": "Movimiento aleatorio de aspecto orgánico con cambios suaves de dirección",
                    "de": "Zufällige, organisch aussehende Bewegung mit sanften Richtungsänderungen",
                    "nl": "Willekeurige, organisch ogende beweging met soepele richtingsveranderingen"
                },
                {
                    "en": "Lost player detection system",
                    "es": "Sistema de detección de jugadores perdidos",
                    "de": "Verlorene Spieler Erkennungssystem",
                    "nl": "Verloren speler-detectiesysteem"
                },
                {
                    "en": "Map exploration tracking",
                    "es": "Seguimiento de exploración de mapas",
                    "de": "Kartenerkundungsverfolgung",
                    "nl": "Kaartexploratie-tracking"
                },
                {
                    "en": "Memory leak prevention",
                    "es": "Prevención de fugas de memoria",
                    "de": "Speicherleck-Prävention",
                    "nl": "Geheugenlek-preventie"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Wander generates smooth random movement by placing a circle ahead of the agent, then adding a small random displacement to the target point each update. This avoids sudden direction changes.",
                "es": "Wander genera movimiento aleatorio fluido colocando un círculo delante del agente y desplazando ligeramente el punto objetivo cada actualización. Evita cambios bruscos de dirección.",
                "de": "Wander erzeugt fließende Zufallsbewegung durch einen Kreis vor dem Agenten, auf dem das Ziel leicht verschoben wird. Vermeidet abrupte Richtungswechsel.",
                "nl": "Wander genereert vloeiende willekeurige beweging door een cirkel voor de agent te plaatsen en het doelpunt elke update licht te verschuiven. Dit vermijdt plotselinge richtingsveranderingen."
            }
        },
        {
            "question": {
                "en": "What is a potential field in game AI navigation?",
                "es": "¿Qué es un campo de potencial en la navegación de IA de juegos?",
                "de": "Was ist ein Potenzialfeld in der Spiele-KI-Navigation?",
                "nl": "Wat is een potentiaalveld in game AI-navigatie?"
            },
            "options": [
                {
                    "en": "A field where targets attract and obstacles repel",
                    "es": "Un campo donde los objetivos atraen y los obstáculos repelen",
                    "de": "Ein Feld, in dem Ziele anziehen und Hindernisse abstoßen",
                    "nl": "Een veld waar doelen aantrekken en obstakels afstoten"
                },
                {
                    "en": "Areas where power-ups can spawn",
                    "es": "Áreas donde pueden aparecer potenciadores",
                    "de": "Bereiche, in denen Power-Ups spawnen können",
                    "nl": "Gebieden waar power-ups kunnen spawnen"
                },
                {
                    "en": "Regions with special physics properties",
                    "es": "Regiones con propiedades de física especiales",
                    "de": "Regionen mit speziellen Physikeigenschaften",
                    "nl": "Regio's met speciale fysica-eigenschappen"
                },
                {
                    "en": "Magnetic fields affecting projectiles",
                    "es": "Campos magnéticos que afectan proyectiles",
                    "de": "Magnetfelder, die Projektile beeinflussen",
                    "nl": "Magnetische velden die projectielen beïnvloeden"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Potential fields assign attraction forces to goals and repulsion forces to obstacles. The agent follows the gradient downhill. Simple and fast, but can trap agents in local minima where forces cancel out.",
                "es": "Los campos potenciales asignan fuerzas de atracción a objetivos y repulsión a obstáculos. El agente sigue el gradiente. Simple y rápido, pero puede atrapar en mínimos locales.",
                "de": "Potenzialfelder weisen Zielen Anziehungskräfte und Hindernissen Abstoßungskräfte zu. Der Agent folgt dem Gradienten. Einfach und schnell, aber anfällig für lokale Minima.",
                "nl": "Potentiaolvelden kennen aantrekkingskrachten toe aan doelen en afstotingskrachten aan obstakels. De agent volgt het gradient. Eenvoudig en snel, maar kan vastlopen in lokale minima."
            }
        },
        {
            "question": {
                "en": "What is action queue management in AI?",
                "es": "¿Qué es la gestión de cola de acciones en IA?",
                "de": "Was ist Aktionswarteschlangenverwaltung in KI?",
                "nl": "Wat is actiereij-beheer in AI?"
            },
            "options": [
                {
                    "en": "Organizing and executing sequences of AI actions in order",
                    "es": "Organizar y ejecutar secuencias de acciones de IA en orden",
                    "de": "Organisieren und Ausführen von Sequenzen von KI-Aktionen in Reihenfolge",
                    "nl": "Het organiseren en uitvoeren van sequenties van AI-acties op volgorde"
                },
                {
                    "en": "Managing multiplayer matchmaking queues",
                    "es": "Gestionar colas de emparejamiento multijugador",
                    "de": "Multiplayer-Matchmaking-Warteschlangen verwalten",
                    "nl": "Het beheren van multiplayer matchmaking-wachtrijen"
                },
                {
                    "en": "Loading game assets sequentially",
                    "es": "Cargar recursos del juego secuencialmente",
                    "de": "Spiel-Assets sequenziell laden",
                    "nl": "Het sequentieel laden van game-assets"
                },
                {
                    "en": "Processing network packets in order",
                    "es": "Procesar paquetes de red en orden",
                    "de": "Netzwerkpakete in Reihenfolge verarbeiten",
                    "nl": "Het verwerken van netwerkpakketten op volgorde"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Action queues allow AI to plan ahead by scheduling multiple actions in sequence. An NPC might queue 'move-to-door', 'open-door', 'enter-room'. The system manages dependencies and interrupts between actions.",
                "es": "Las colas de acciones permiten planificar encolando acciones en secuencia. Un NPC puede encolar 'moverse', 'abrir-puerta', 'entrar'. El sistema gestiona dependencias e interrupciones.",
                "de": "Aktionswarteschlangen ermöglichen Vorausplanung durch sequentiell gereihte Aktionen. Ein NPC kann 'Gehen', 'Tür öffnen', 'Eintreten' einreihen. Das System verwaltet Abhängigkeiten.",
                "nl": "Actiewachtrijen laten AI vooruit plannen door acties op te stapelen. Een NPC kan 'loop-naar-deur', 'open-deur', 'betreedt-kamer' inplannen. Het systeem beheert afhankelijkheden en onderbrekingen."
            }
        },
        {
            "question": {
                "en": "What is the advantage of using behavior trees with decorators?",
                "es": "¿Cuál es la ventaja de usar árboles de comportamiento con decoradores?",
                "de": "Was ist der Vorteil der Verwendung von Verhaltensbäumen mit Dekoratoren?",
                "nl": "Wat is het voordeel van het gebruik van gedragsbomen met decorators?"
            },
            "options": [
                {
                    "en": "Adding conditions and modifications without changing core behaviors",
                    "es": "Agregar condiciones y modificaciones sin cambiar comportamientos centrales",
                    "de": "Hinzufügen von Bedingungen und Modifikationen ohne Änderung der Kernverhaltensweisen",
                    "nl": "Het toevoegen van voorwaarden en wijzigingen zonder kerngedragingen te veranderen"
                },
                {
                    "en": "Improving graphical appearance of characters",
                    "es": "Mejorar la apariencia gráfica de los personajes",
                    "de": "Verbesserung des grafischen Erscheinungsbilds von Charakteren",
                    "nl": "Het verbeteren van het grafische uiterlijk van personages"
                },
                {
                    "en": "Reducing memory consumption",
                    "es": "Reducir el consumo de memoria",
                    "de": "Speicherverbrauch reduzieren",
                    "nl": "Het verminderen van geheugenverbruik"
                },
                {
                    "en": "Speeding up pathfinding calculations",
                    "es": "Acelerar cálculos de búsqueda de rutas",
                    "de": "Beschleunigung von Pfadfindungsberechnungen",
                    "nl": "Het versnellen van pathfinding-berekeningen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Decorators wrap behavior tree nodes to modify their behavior without changing the core node. Common decorators: Inverter (flips success/failure), Repeater (loops execution), and Cooldown (rate-limits).",
                "es": "Los decoradores envuelven nodos del árbol de comportamiento para modificarlos sin cambiar el núcleo. Los comunes: Inversor (invierte éxito/fallo), Repetidor y Cooldown.",
                "de": "Dekoratoren umhüllen Verhaltensbaum-Knoten um ihr Verhalten zu modifizieren ohne den Kern zu ändern. Häufige Dekoratoren: Inverter, Wiederholer und Abklingzeit.",
                "nl": "Decorators wikkelen gedragsboom-knopen om hun gedrag te wijzigen zonder de kern te veranderen. Veelgebruikte decorators zijn Inverter, Repeater en Cooldown."
            }
        },
        {
            "question": {
                "en": "What is spatial reasoning in game AI?",
                "es": "¿Qué es el razonamiento espacial en la IA de juegos?",
                "de": "Was ist räumliches Denken in der Spiele-KI?",
                "nl": "Wat is ruimtelijk redeneren in game AI?"
            },
            "options": [
                {
                    "en": "Understanding and making decisions based on spatial relationships",
                    "es": "Comprender y tomar decisiones basadas en relaciones espaciales",
                    "de": "Verstehen und Entscheidungen basierend auf räumlichen Beziehungen treffen",
                    "nl": "Het begrijpen en nemen van beslissingen op basis van ruimtelijke relaties"
                },
                {
                    "en": "Calculating 3D graphics transformations",
                    "es": "Calcular transformaciones gráficas 3D",
                    "de": "3D-Grafiktransformationen berechnen",
                    "nl": "Het berekenen van 3D-grafische transformaties"
                },
                {
                    "en": "Managing virtual memory allocation",
                    "es": "Gestionar asignación de memoria virtual",
                    "de": "Virtuelle Speicherzuweisung verwalten",
                    "nl": "Het beheren van virtuele geheugentoewijzing"
                },
                {
                    "en": "Optimizing level streaming",
                    "es": "Optimizar transmisión de niveles",
                    "de": "Level-Streaming optimieren",
                    "nl": "Het optimaliseren van level-streaming"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Spatial reasoning allows AI to understand game geometry for tactical decisions: finding cover, flanking positions, chokepoints, or line-of-sight. It uses navigation meshes and spatial queries to evaluate locations.",
                "es": "El razonamiento espacial permite a la IA entender la geometría para decisiones tácticas: cobertura, flancos o líneas de visión usando mallas de navegación y consultas espaciales.",
                "de": "Räumliches Denken ermöglicht der KI geometrische Entscheidungen: Cover finden, Flankierungen, Engpässe oder Sichtlinien. Es nutzt Navigationsgitter und räumliche Abfragen.",
                "nl": "Ruimtelijk redeneren stelt AI in staat spelgeometrie te begrijpen voor tactische beslissingen: dekking, flankeerposities of zichtlijnen via navigatiemazen en ruimtelijke queries."
            }
        },
        {
            "question": {
                "en": "What is the role of timers in AI behavior systems?",
                "es": "¿Cuál es el papel de los temporizadores en los sistemas de comportamiento de IA?",
                "de": "Welche Rolle spielen Timer in KI-Verhaltenssystemen?",
                "nl": "Wat is de rol van timers in AI-gedragssystemen?"
            },
            "options": [
                {
                    "en": "Controlling duration and frequency of behaviors and transitions",
                    "es": "Controlar la duración y frecuencia de comportamientos y transiciones",
                    "de": "Kontrolle der Dauer und Häufigkeit von Verhaltensweisen und Übergängen",
                    "nl": "Het controleren van duur en frequentie van gedragingen en overgangen"
                },
                {
                    "en": "Measuring game performance metrics",
                    "es": "Medir métricas de rendimiento del juego",
                    "de": "Spieleleistungsmetriken messen",
                    "nl": "Het meten van game-prestatiemetrics"
                },
                {
                    "en": "Synchronizing animation frames",
                    "es": "Sincronizar fotogramas de animación",
                    "de": "Animationsframes synchronisieren",
                    "nl": "Het synchroniseren van animatie-frames"
                },
                {
                    "en": "Recording speedrun attempts",
                    "es": "Grabar intentos de speedrun",
                    "de": "Speedrun-Versuche aufzeichnen",
                    "nl": "Het opnemen van speedrun-pogingen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Timers control when AI transitions between states, how long behaviors last, and how often actions repeat. Without timers, AI would react instantly to everything, making it feel inhuman and overwhelming.",
                "es": "Los temporizadores controlan cuándo la IA cambia de estado, cuánto duran los comportamientos y con qué frecuencia se repiten las acciones, evitando reacciones instantáneas poco naturales.",
                "de": "Timer steuern wann KI zwischen Zuständen wechselt, wie lange Verhaltensweisen dauern und wie oft Aktionen wiederholt werden. Ohne Timer reagierte KI sofort auf alles.",
                "nl": "Timers bepalen wanneer AI van toestand wisselt, hoe lang gedrag duurt en hoe vaak acties worden herhaald. Zonder timers zou AI instant op alles reageren, wat onmenselijk aanvoelt."
            }
        },
        {
            "question": {
                "en": "What is probabilistic behavior selection?",
                "es": "¿Qué es la selección de comportamiento probabilística?",
                "de": "Was ist probabilistische Verhaltensauswahl?",
                "nl": "Wat is probabilistische gedragsselectie?"
            },
            "options": [
                {
                    "en": "Choosing actions based on weighted random probabilities",
                    "es": "Elegir acciones basadas en probabilidades aleatorias ponderadas",
                    "de": "Auswählen von Aktionen basierend auf gewichteten Zufallswahrscheinlichkeiten",
                    "nl": "Het kiezen van acties op basis van gewogen willekeurige kansen"
                },
                {
                    "en": "Predicting player behavior patterns",
                    "es": "Predecir patrones de comportamiento del jugador",
                    "de": "Spielerverhaltensmuster vorhersagen",
                    "nl": "Het voorspellen van spelergedragspatronen"
                },
                {
                    "en": "Calculating loot drop chances",
                    "es": "Calcular probabilidades de caída de botín",
                    "de": "Beutedrop-Chancen berechnen",
                    "nl": "Het berekenen van loot-drop kansen"
                },
                {
                    "en": "Determining critical hit rates",
                    "es": "Determinar tasas de golpe crítico",
                    "de": "Kritische Trefferraten bestimmen",
                    "nl": "Het bepalen van critical hit-percentages"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Probabilistic selection adds unpredictability by assigning weights to possible actions. Instead of always taking the optimal action, the AI occasionally picks sub-optimal choices, making it feel more human-like.",
                "es": "La selección probabilística añade imprevisibilidad asignando pesos a acciones posibles. En vez de ser siempre óptima, la IA elige acciones subóptimas ocasionalmente, haciéndola más humana.",
                "de": "Probabilistische Auswahl fügt Unvorhersehbarkeit durch Gewichtung möglicher Aktionen hinzu. Statt immer optimal zu handeln wählt die KI gelegentlich suboptimale Züge.",
                "nl": "Probabilistische selectie voegt onvoorspelbaarheid toe door gewichten aan acties toe te kennen. Zo kiest AI soms suboptimale acties in plaats van altijd optimaal te handelen."
            }
        },
        {
            "question": {
                "en": "What is an AI director in games?",
                "es": "¿Qué es un director de IA en los juegos?",
                "de": "Was ist ein KI-Regisseur in Spielen?",
                "nl": "Wat is een AI-director in games?"
            },
            "options": [
                {
                    "en": "A system that dynamically adjusts gameplay elements for pacing",
                    "es": "Un sistema que ajusta dinámicamente elementos del juego para el ritmo",
                    "de": "Ein System, das Gameplay-Elemente dynamisch für das Tempo anpasst",
                    "nl": "Een systeem dat dynamisch gameplay-elementen aanpast voor pacing"
                },
                {
                    "en": "The lead programmer for AI systems",
                    "es": "El programador principal de sistemas de IA",
                    "de": "Der leitende Programmierer für KI-Systeme",
                    "nl": "De hoofdprogrammeur voor AI-systemen"
                },
                {
                    "en": "A camera control algorithm",
                    "es": "Un algoritmo de control de cámara",
                    "de": "Ein Kamerasteuerungsalgorithmus",
                    "nl": "Een camera-besturingsalgoritme"
                },
                {
                    "en": "A file management system",
                    "es": "Un sistema de gestión de archivos",
                    "de": "Ein Dateiverwaltungssystem",
                    "nl": "Een bestandsbeheersysteem"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The AI director monitors player stress, skill, and resource state to spawn enemies and events at optimal times. Left 4 Dead's Director is the famous example, creating dynamic tension and relief.",
                "es": "El director de IA monitoriza el estrés, habilidad y recursos del jugador para generar enemigos y eventos en momentos óptimos. El Director de Left 4 Dead es el ejemplo más famoso.",
                "de": "Der KI-Direktor überwacht Spielerstress, Fähigkeit und Ressourcen um Feinde und Events optimal zu spawnen. Left 4 Deads Director ist das bekannteste Beispiel für dynamisches Pacing.",
                "nl": "De AI-director monitort spelerstress, vaardigheid en resources om vijanden en events optimaal te spawnen. Left 4 Dead's Director is het bekendste voorbeeld van dynamisch pacing."
            }
        },
        {
            "question": {
                "en": "What is rubber banding in racing game AI?",
                "es": "¿Qué es el rubber banding en la IA de juegos de carreras?",
                "de": "Was ist Rubber Banding in Rennspiel-KI?",
                "nl": "Wat is rubber banding in racespel-AI?"
            },
            "options": [
                {
                    "en": "Artificially adjusting AI speed to keep races competitive",
                    "es": "Ajustar artificialmente la velocidad de IA para mantener las carreras competitivas",
                    "de": "Künstliches Anpassen der KI-Geschwindigkeit, um Rennen wettbewerbsfähig zu halten",
                    "nl": "Het kunstmatig aanpassen van AI-snelheid om races competitief te houden"
                },
                {
                    "en": "Elastic collision physics",
                    "es": "Física de colisión elástica",
                    "de": "Elastische Kollisionsphysik",
                    "nl": "Elastische botsings-fysica"
                },
                {
                    "en": "Network lag compensation",
                    "es": "Compensación de retraso de red",
                    "de": "Netzwerk-Lag-Kompensation",
                    "nl": "Netwerkvertraging-compensatie"
                },
                {
                    "en": "Suspension system simulation",
                    "es": "Simulación de sistema de suspensión",
                    "de": "Federungssystem-Simulation",
                    "nl": "Vering-systeem simulatie"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Rubber banding keeps races exciting by dynamically adjusting AI speed: slower when leading, faster when behind. It ensures races stay competitive to the finish, though it can feel unfair if too aggressive.",
                "es": "El rubber banding mantiene las carreras emocionantes ajustando dinámicamente la velocidad de la IA: más lenta al ganar, más rápida al perder. Mantiene la competencia hasta el final.",
                "de": "Rubber Banding hält Rennen spannend durch dynamische KI-Geschwindigkeitsanpassung: langsamer bei Führung, schneller bei Rückstand. Sichert Spannung bis zum Ziel.",
                "nl": "Rubber banding houdt races spannend door AI-snelheid dynamisch aan te passen: langzamer bij voorsprong, sneller bij achterstand. Zorgt dat races competitief blijven tot het einde."
            }
        },
        {
            "question": {
                "en": "What is cheating AI in games?",
                "es": "¿Qué es hacer trampa la IA en los juegos?",
                "de": "Was ist betrügende KI in Spielen?",
                "nl": "Wat is vals spelende AI in games?"
            },
            "options": [
                {
                    "en": "AI that has access to information or abilities players don't have",
                    "es": "IA que tiene acceso a información o habilidades que los jugadores no tienen",
                    "de": "KI, die Zugriff auf Informationen oder Fähigkeiten hat, die Spieler nicht haben",
                    "nl": "AI die toegang heeft tot informatie of vaardigheden die spelers niet hebben"
                },
                {
                    "en": "AI that exploits game bugs",
                    "es": "IA que explota errores del juego",
                    "de": "KI, die Spielfehler ausnutzt",
                    "nl": "AI die game-bugs uitbuit"
                },
                {
                    "en": "Anti-cheat detection systems",
                    "es": "Sistemas de detección anti-trampas",
                    "de": "Anti-Cheat-Erkennungssysteme",
                    "nl": "Anti-cheat detectiesystemen"
                },
                {
                    "en": "AI that breaks game rules",
                    "es": "IA que rompe reglas del juego",
                    "de": "KI, die Spielregeln bricht",
                    "nl": "AI die gameregels breekt"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Cheating AI has unfair advantages like perfect information, extra resources, or faster reactions. It compensates for the difficulty of creating truly intelligent AI, but can frustrate players when obvious.",
                "es": "La IA tramposa tiene ventajas injustas: información perfecta, recursos extra o reacciones más rápidas. Compensa la dificultad de crear IA verdaderamente inteligente, pero puede frustrar.",
                "de": "Cheating-KI hat unfaire Vorteile wie perfekte Information, extra Ressourcen oder schnellere Reaktionen. Es kompensiert echte KI-Intelligenz, kann aber frustrierend wirken.",
                "nl": "Cheating AI heeft oneerlijke voordelen zoals perfecte informatie, extra resources of snellere reacties. Het compenseert de moeilijkheid van echte AI-intelligentie, maar kan frustrerend zijn."
            }
        },
        {
            "question": {
                "en": "What is dynamic difficulty adjustment (DDA)?",
                "es": "¿Qué es el ajuste dinámico de dificultad (DDA)?",
                "de": "Was ist dynamische Schwierigkeitsanpassung (DDA)?",
                "nl": "Wat is dynamische moeilijkheidsaanpassing (DDA)?"
            },
            "options": [
                {
                    "en": "Real-time adjustment of game difficulty based on player performance",
                    "es": "Ajuste en tiempo real de la dificultad del juego según el rendimiento del jugador",
                    "de": "Echtzeit-Anpassung der Spielschwierigkeit basierend auf Spielerleistung",
                    "nl": "Real-time aanpassing van game-moeilijkheid op basis van spelerprestaties"
                },
                {
                    "en": "Static difficulty level selection",
                    "es": "Selección de nivel de dificultad estático",
                    "de": "Statische Schwierigkeitsgradauswahl",
                    "nl": "Statische moeilijkheidsgraad-selectie"
                },
                {
                    "en": "Graphics quality scaling",
                    "es": "Escalado de calidad gráfica",
                    "de": "Grafikqualitätsskalierung",
                    "nl": "Grafische kwaliteitsschaling"
                },
                {
                    "en": "Download speed optimization",
                    "es": "Optimización de velocidad de descarga",
                    "de": "Download-Geschwindigkeitsoptimierung",
                    "nl": "Download-snelheid optimalisatie"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "DDA monitors player metrics like death rate, score, and reaction time to continuously tune difficulty parameters. Resident Evil 4 used DDA to keep players in a 'flow' state throughout the game.",
                "es": "DDA monitoriza métricas del jugador como tasa de muertes y tiempo de reacción para ajustar continuamente la dificultad. Resident Evil 4 usó DDA para mantener el flujo del jugador.",
                "de": "DDA überwacht Spielermetriken wie Todesrate und Reaktionszeit um Schwierigkeit anzupassen. Resident Evil 4 nutzte DDA um Spieler im Flow-Zustand zu halten.",
                "nl": "DDA monitort spelerstatistieken zoals sterftecijfer en reactietijd om moeilijkheid continu aan te passen. Resident Evil 4 gebruikte DDA om spelers in een 'flow'-toestand te houden."
            }
        },
        {
            "question": {
                "en": "What is a coordination system in multi-agent AI?",
                "es": "¿Qué es un sistema de coordinación en IA multi-agente?",
                "de": "Was ist ein Koordinationssystem in Multi-Agenten-KI?",
                "nl": "Wat is een coördinatiesysteem in multi-agent AI?"
            },
            "options": [
                {
                    "en": "A mechanism for multiple AI agents to work together effectively",
                    "es": "Un mecanismo para que múltiples agentes de IA trabajen juntos eficazmente",
                    "de": "Ein Mechanismus für mehrere KI-Agenten, um effektiv zusammenzuarbeiten",
                    "nl": "Een mechanisme voor meerdere AI-agenten om effectief samen te werken"
                },
                {
                    "en": "A network protocol for multiplayer games",
                    "es": "Un protocolo de red para juegos multijugador",
                    "de": "Ein Netzwerkprotokoll für Multiplayer-Spiele",
                    "nl": "Een netwerkprotocol voor multiplayer games"
                },
                {
                    "en": "A camera synchronization method",
                    "es": "Un método de sincronización de cámara",
                    "de": "Eine Kamerasynchronisationsmethode",
                    "nl": "Een camera-synchronisatie methode"
                },
                {
                    "en": "A graphics rendering pipeline",
                    "es": "Un pipeline de renderizado gráfico",
                    "de": "Eine Grafik-Rendering-Pipeline",
                    "nl": "Een grafische rendering-pipeline"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Multi-agent coordination systems allow AI characters to divide tasks, share information, and avoid conflicts. Common approaches include blackboard systems where agents post and read shared information.",
                "es": "Los sistemas de coordinación multi-agente permiten dividir tareas, compartir información y evitar conflictos. Los sistemas de pizarra compartida son un enfoque común.",
                "de": "Multi-Agenten-Koordinationssysteme ermöglichen Aufgabenteilung, Informationsaustausch und Konfliktvermeidung. Häufig genutzt: Blackboard-Systeme mit gemeinsam nutzbaren Informationen.",
                "nl": "Multi-agent coördinatiesystemen laten AI-karakters taken verdelen, informatie delen en conflicten vermijden. Gangbare aanpak: blackboard-systemen waar agenten gedeelde info schrijven en lezen."
            }
        },
        {
            "question": {
                "en": "What is emergent coordination in AI?",
                "es": "¿Qué es la coordinación emergente en IA?",
                "de": "Was ist emergente Koordination in KI?",
                "nl": "Wat is emergente coördinatie in AI?"
            },
            "options": [
                {
                    "en": "Complex group behaviors arising without explicit coordination rules",
                    "es": "Comportamientos de grupo complejos que surgen sin reglas explícitas de coordinación",
                    "de": "Komplexe Gruppenverhalten, die ohne explizite Koordinationsregeln entstehen",
                    "nl": "Complexe groepsgedragingen die ontstaan zonder expliciete coördinatieregels"
                },
                {
                    "en": "Planned team strategies",
                    "es": "Estrategias de equipo planificadas",
                    "de": "Geplante Teamstrategien",
                    "nl": "Geplande teamstrategieën"
                },
                {
                    "en": "Emergency response systems",
                    "es": "Sistemas de respuesta de emergencia",
                    "de": "Notfallreaktionssysteme",
                    "nl": "Noodrespons-systemen"
                },
                {
                    "en": "Newly discovered game features",
                    "es": "Características de juego recién descubiertas",
                    "de": "Neu entdeckte Spielfunktionen",
                    "nl": "Nieuw ontdekte game-functies"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Emergent coordination arises when simple individual rules produce complex group behavior. Bird flocking emerges from just three rules per bird: separation, alignment, and cohesion. No central control is needed.",
                "es": "La coordinación emergente surge cuando reglas simples producen comportamiento grupal complejo. El vuelo en bandada emerge de solo tres reglas por ave sin control central.",
                "de": "Emergente Koordination entsteht wenn einfache Regeln komplexes Gruppenverhalten erzeugen. Vogelflug entsteht aus nur drei Regeln pro Vogel ohne zentrale Steuerung.",
                "nl": "Emergente coördinatie ontstaat wanneer eenvoudige regels complex groepsgedrag produceren. Vogelzwermen ontstaan uit slechts drie regels per vogel zonder centrale controle."
            }
        },
        {
            "question": {
                "en": "What is a sensory system in game AI?",
                "es": "¿Qué es un sistema sensorial en la IA de juegos?",
                "de": "Was ist ein Sinnessystem in der Spiele-KI?",
                "nl": "Wat is een sensorisch systeem in game AI?"
            },
            "options": [
                {
                    "en": "Simulated senses like sight and hearing for AI agents",
                    "es": "Sentidos simulados como vista y oído para agentes de IA",
                    "de": "Simulierte Sinne wie Sehen und Hören für KI-Agenten",
                    "nl": "Gesimuleerde zintuigen zoals zicht en gehoor voor AI-agenten"
                },
                {
                    "en": "Controller vibration feedback",
                    "es": "Retroalimentación de vibración del controlador",
                    "de": "Controller-Vibrations-Feedback",
                    "nl": "Controller-trilling feedback"
                },
                {
                    "en": "Audio processing pipeline",
                    "es": "Pipeline de procesamiento de audio",
                    "de": "Audio-Verarbeitungspipeline",
                    "nl": "Audio-verwerkingspipeline"
                },
                {
                    "en": "VR motion tracking",
                    "es": "Seguimiento de movimiento VR",
                    "de": "VR-Bewegungsverfolgung",
                    "nl": "VR-bewegings tracking"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "AI sensory systems simulate perception to make agents feel alive. Sight uses raycasting and field-of-view checks, hearing detects sound events, and touch handles collision callbacks. Multiple senses combine for realism.",
                "es": "Los sistemas sensoriales simulan percepción: la vista usa rayos y ángulo de visión, el oído detecta eventos sonoros, el tacto gestiona colisiones. Múltiples sentidos se combinan.",
                "de": "KI-Sensorsysteme simulieren Wahrnehmung: Sicht nutzt Raycasting und Sichtfeldprüfungen, Gehör erkennt Schallquellen, Tastsinn verarbeitet Kollisionen. Mehrere Sinne kombiniert.",
                "nl": "AI-sensoriek simuleert waarneming: gezicht gebruikt raycasting en gezichtsveld-controles, gehoor detecteert geluidsgebeurtenissen, tastzin verwerkt botsingen. Meerdere zintuigen gecombineerd."
            }
        },
        {
            "question": {
                "en": "What is vision cone detection?",
                "es": "¿Qué es la detección de cono de visión?",
                "de": "Was ist Sichtkegelerfassung?",
                "nl": "Wat is gezichtskegel-detectie?"
            },
            "options": [
                {
                    "en": "Determining if objects are within an AI's field of view",
                    "es": "Determinar si los objetos están dentro del campo de visión de una IA",
                    "de": "Bestimmen, ob Objekte im Sichtfeld einer KI sind",
                    "nl": "Het bepalen of objecten binnen het gezichtsveld van een AI zijn"
                },
                {
                    "en": "3D graphics cone rendering",
                    "es": "Renderizado de conos gráficos 3D",
                    "de": "3D-Grafik-Kegel-Rendering",
                    "nl": "3D-grafische kegel-rendering"
                },
                {
                    "en": "Traffic cone placement algorithm",
                    "es": "Algoritmo de colocación de conos de tráfico",
                    "de": "Verkehrskegel-Platzierungsalgorithmus",
                    "nl": "Verkeerskap-plaatsingsalgoritme"
                },
                {
                    "en": "Camera lens distortion correction",
                    "es": "Corrección de distorsión de lente de cámara",
                    "de": "Kameralinseverzerrungskorrektur",
                    "nl": "Camera-lensvervorming correctie"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Vision cone detection checks if a target is within both the range and angular field of view. It also typically includes occlusion testing via raycasting to ensure line of sight isn't blocked.",
                "es": "La detección de cono de visión comprueba si un objetivo está dentro del rango y el ángulo visual. Incluye prueba de oclusión por raycast para verificar que la línea de visión no esté bloqueada.",
                "de": "Sichtkegelerkennung prüft ob ein Ziel in Reichweite und Sichtfeldwinkel liegt. Occlusion-Tests per Raycast stellen sicher dass Sichtlinien nicht durch Wände blockiert sind.",
                "nl": "Zichtkegel-detectie controleert of een doel binnen bereik en hoekbereik valt. Occlusietests via raycasting verifiëren dat de zichtlijn niet geblokkeerd wordt door muren of objecten."
            }
        },
        {
            "question": {
                "en": "What is sound propagation simulation in AI?",
                "es": "¿Qué es la simulación de propagación de sonido en IA?",
                "de": "Was ist Schallausbreitungssimulation in KI?",
                "nl": "Wat is geluidsverspreiding-simulatie in AI?"
            },
            "options": [
                {
                    "en": "Calculating how AI agents hear sounds through the environment",
                    "es": "Calcular cómo los agentes de IA escuchan sonidos a través del entorno",
                    "de": "Berechnen, wie KI-Agenten Geräusche durch die Umgebung hören",
                    "nl": "Het berekenen hoe AI-agenten geluiden door de omgeving horen"
                },
                {
                    "en": "3D audio rendering for players",
                    "es": "Renderizado de audio 3D para jugadores",
                    "de": "3D-Audio-Rendering für Spieler",
                    "nl": "3D-audio rendering voor spelers"
                },
                {
                    "en": "Network voice chat transmission",
                    "es": "Transmisión de chat de voz de red",
                    "de": "Netzwerk-Sprachchat-Übertragung",
                    "nl": "Netwerk spraakchat-overdracht"
                },
                {
                    "en": "Music streaming optimization",
                    "es": "Optimización de streaming de música",
                    "de": "Musik-Streaming-Optimierung",
                    "nl": "Muziek-streaming optimalisatie"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Sound propagation simulation calculates how audio travels through the game world, considering walls, distance falloff, and occlusion. AI agents can only react to sounds they 'hear' based on these calculations.",
                "es": "La propagación sonora calcula cómo viaja el audio, considerando paredes, atenuación por distancia y oclusión. Los agentes reaccionan solo a sonidos que 'escuchan' según estos cálculos.",
                "de": "Schallausbreitungssimulation berechnet wie Audio durch die Spielwelt reist, unter Berücksichtigung von Wänden, Entfernungsabnahme und Okklusion. Agenten reagieren nur auf gehörte Geräusche.",
                "nl": "Geluidsvoortplantingssimulatie berekent hoe geluid door de spelwereld reist, rekening houdend met muren, afstandsdemping en occlusie. AI-agenten reageren alleen op gehoorde geluiden."
            }
        },
        {
            "question": {
                "en": "What is memory in AI agents?",
                "es": "¿Qué es la memoria en los agentes de IA?",
                "de": "Was ist Gedächtnis in KI-Agenten?",
                "nl": "Wat is geheugen in AI-agenten?"
            },
            "options": [
                {
                    "en": "Storing and recalling past events and observations",
                    "es": "Almacenar y recordar eventos y observaciones pasadas",
                    "de": "Speichern und Erinnern vergangener Ereignisse und Beobachtungen",
                    "nl": "Het opslaan en herinneren van eerdere gebeurtenissen en waarnemingen"
                },
                {
                    "en": "RAM allocation for AI calculations",
                    "es": "Asignación de RAM para cálculos de IA",
                    "de": "RAM-Zuweisung für KI-Berechnungen",
                    "nl": "RAM-toewijzing voor AI-berekeningen"
                },
                {
                    "en": "Save file management",
                    "es": "Gestión de archivos de guardado",
                    "de": "Speicherdatei-Verwaltung",
                    "nl": "Opslagbestand-beheer"
                },
                {
                    "en": "Cache optimization",
                    "es": "Optimización de caché",
                    "de": "Cache-Optimierung",
                    "nl": "Cache-optimalisatie"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "AI memory allows agents to act on past information rather than only reacting to current stimuli. Without memory, an AI that loses sight of a player would instantly forget them, which feels unrealistic.",
                "es": "La memoria de IA permite actuar sobre información pasada en lugar de solo reaccionar a estímulos actuales. Sin ella, la IA olvidaría instantáneamente lo que pierde de vista.",
                "de": "KI-Gedächtnis ermöglicht Agenten auf vergangenen Informationen zu handeln statt nur auf aktuelle Stimuli. Ohne Gedächtnis würde KI Spieler sofort vergessen.",
                "nl": "AI-geheugen stelt agenten in staat op verleden informatie te handelen in plaats van alleen op actuele stimuli. Zonder geheugen zou AI een speler onmiddellijk vergeten."
            }
        },
        {
            "question": {
                "en": "What is working memory in AI?",
                "es": "¿Qué es la memoria de trabajo en IA?",
                "de": "Was ist Arbeitsgedächtnis in KI?",
                "nl": "Wat is werkgeheugen in AI?"
            },
            "options": [
                {
                    "en": "Short-term storage of currently relevant information",
                    "es": "Almacenamiento a corto plazo de información actualmente relevante",
                    "de": "Kurzzeitspeicherung aktuell relevanter Informationen",
                    "nl": "Kortetermijnopslag van momenteel relevante informatie"
                },
                {
                    "en": "Active RAM during runtime",
                    "es": "RAM activa durante la ejecución",
                    "de": "Aktiver RAM während der Laufzeit",
                    "nl": "Actief RAM tijdens runtime"
                },
                {
                    "en": "Temporary file storage",
                    "es": "Almacenamiento temporal de archivos",
                    "de": "Temporäre Dateispeicherung",
                    "nl": "Tijdelijke bestandsopslag"
                },
                {
                    "en": "Processing queue buffers",
                    "es": "Búferes de cola de procesamiento",
                    "de": "Verarbeitungswarteschlangenpuffer",
                    "nl": "Verwerkingswachtrij-buffers"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Working memory holds immediately relevant information like enemy positions and current goals. It has limited capacity and decays over time. When full, less important items are dropped to make room for new ones.",
                "es": "La memoria de trabajo almacena información inmediata como posiciones de enemigos y objetivos. Tiene capacidad limitada y decae, descartando lo menos relevante al llenarse.",
                "de": "Arbeitsgedächtnis speichert unmittelbar relevante Informationen wie Feindpositionen. Es hat begrenzte Kapazität und zerfällt über Zeit; weniger wichtige Elemente werden verworfen.",
                "nl": "Werkgeheugen bevat direct relevante informatie zoals vijandposities en huidige doelen. Het heeft beperkte capaciteit en vervalt met de tijd, waarbij minder belangrijke items worden verwijderd."
            }
        },
        {
            "question": {
                "en": "What is long-term memory in AI agents?",
                "es": "¿Qué es la memoria a largo plazo en los agentes de IA?",
                "de": "Was ist Langzeitgedächtnis in KI-Agenten?",
                "nl": "Wat is langetermijngeheugen in AI-agenten?"
            },
            "options": [
                {
                    "en": "Persistent storage of important past experiences and knowledge",
                    "es": "Almacenamiento persistente de experiencias y conocimientos pasados importantes",
                    "de": "Dauerhafte Speicherung wichtiger vergangener Erfahrungen und Kenntnisse",
                    "nl": "Permanente opslag van belangrijke eerdere ervaringen en kennis"
                },
                {
                    "en": "Hard drive storage for game data",
                    "es": "Almacenamiento en disco duro para datos del juego",
                    "de": "Festplattenspeicher für Spieldaten",
                    "nl": "Harde schijf-opslag voor game-data"
                },
                {
                    "en": "Cloud save synchronization",
                    "es": "Sincronización de guardado en la nube",
                    "de": "Cloud-Save-Synchronisierung",
                    "nl": "Cloud-save synchronisatie"
                },
                {
                    "en": "Achievement tracking database",
                    "es": "Base de datos de seguimiento de logros",
                    "de": "Erfolgs-Tracking-Datenbank",
                    "nl": "Prestatie-tracking database"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Long-term AI memory stores persistent knowledge like map layout, player behavior patterns, and spawn locations. Unlike working memory, it persists between encounters and informs strategic planning.",
                "es": "La memoria a largo plazo almacena conocimiento persistente como el mapa, patrones del jugador y spawns. A diferencia de la memoria de trabajo, persiste entre encuentros e informa estrategias.",
                "de": "Langzeitgedächtnis speichert dauerhaftes Wissen wie Kartenlayout, Spielerverhalten und Spawn-Orte. Anders als das Arbeitsgedächtnis bleibt es zwischen Begegnungen erhalten.",
                "nl": "Langetermijngeheugen bewaart blijvende kennis zoals kaartindeling, spelersgedragspatronen en spawnlocaties. In tegenstelling tot werkgeheugen blijft het behouden tussen ontmoetingen."
            }
        },
        {
            "question": {
                "en": "What is episodic memory in game AI?",
                "es": "¿Qué es la memoria episódica en la IA de juegos?",
                "de": "Was ist episodisches Gedächtnis in der Spiele-KI?",
                "nl": "Wat is episodisch geheugen in game AI?"
            },
            "options": [
                {
                    "en": "Memory of specific events and when/where they occurred",
                    "es": "Memoria de eventos específicos y cuándo/dónde ocurrieron",
                    "de": "Gedächtnis spezifischer Ereignisse und wann/wo sie auftraten",
                    "nl": "Geheugen van specifieke gebeurtenissen en wanneer/waar ze plaatsvonden"
                },
                {
                    "en": "Memory of TV show episodes watched",
                    "es": "Memoria de episodios de programas de TV vistos",
                    "de": "Gedächtnis gesehener TV-Episoden",
                    "nl": "Geheugen van bekeken TV-afleveringen"
                },
                {
                    "en": "Chapter-based game progress",
                    "es": "Progreso del juego basado en capítulos",
                    "de": "Kapitelbasierter Spielfortschritt",
                    "nl": "Hoofdstuk-gebaseerde game-voortgang"
                },
                {
                    "en": "Mission replay data",
                    "es": "Datos de repetición de misión",
                    "de": "Missions-Wiederholungsdaten",
                    "nl": "Missie-replay data"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Episodic memory stores specific events with their context: where they happened, when, and who was involved. An NPC with episodic memory might remember 'the player attacked me near the bridge 2 minutes ago'.",
                "es": "La memoria episódica almacena eventos con su contexto: dónde, cuándo y quién. Un NPC con ella podría recordar 'el jugador me atacó cerca del puente hace 2 minutos'.",
                "de": "Episodisches Gedächtnis speichert Ereignisse mit Kontext: wo, wann und wer beteiligt war. Ein NPC könnte sich erinnern: 'Spieler griff mich vor 2 Minuten nahe der Brücke an'.",
                "nl": "Episodisch geheugen slaat specifieke gebeurtenissen op met context: waar, wanneer en wie. Een NPC kan onthouden: 'de speler viel me 2 minuten geleden bij de brug aan'."
            }
        },
        {
            "question": {
                "en": "What is semantic memory in AI?",
                "es": "¿Qué es la memoria semántica en IA?",
                "de": "Was ist semantisches Gedächtnis in KI?",
                "nl": "Wat is semantisch geheugen in AI?"
            },
            "options": [
                {
                    "en": "General knowledge about the world and facts",
                    "es": "Conocimiento general sobre el mundo y hechos",
                    "de": "Allgemeines Wissen über die Welt und Fakten",
                    "nl": "Algemene kennis over de wereld en feiten"
                },
                {
                    "en": "Word meaning translation tables",
                    "es": "Tablas de traducción de significados de palabras",
                    "de": "Wortbedeutungs-Übersetzungstabellen",
                    "nl": "Woord-betekenis vertaaltabellen"
                },
                {
                    "en": "Natural language processing database",
                    "es": "Base de datos de procesamiento de lenguaje natural",
                    "de": "Natürliche Sprachverarbeitungsdatenbank",
                    "nl": "Natuurlijke taalverwerking-database"
                },
                {
                    "en": "Dialogue script storage",
                    "es": "Almacenamiento de scripts de diálogo",
                    "de": "Dialog-Skript-Speicherung",
                    "nl": "Dialoog-script opslag"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Semantic memory stores general facts and relationships: 'swords deal physical damage', 'fire beats ice'. Unlike episodic memory it lacks time context. AI uses it for background knowledge about the game world.",
                "es": "La memoria semántica almacena hechos generales: 'las espadas dañan físicamente', 'el fuego vence al hielo'. Sin contexto temporal, la IA la usa como conocimiento de fondo del mundo.",
                "de": "Semantisches Gedächtnis speichert allgemeine Fakten: 'Schwerter verursachen physischen Schaden', 'Feuer schlägt Eis'. Ohne Zeitkontext dient es als Hintergrundwissen.",
                "nl": "Semantisch geheugen bewaart algemene feiten: 'zwaarden doen fysieke schade', 'vuur verslaat ijs'. Zonder tijdscontext gebruikt AI het als achtergrondkennis over de spelwereld."
            }
        },
        {
            "question": {
                "en": "What is attention management in AI?",
                "es": "¿Qué es la gestión de atención en IA?",
                "de": "Was ist Aufmerksamkeitsverwaltung in KI?",
                "nl": "Wat is aandachtsbeheer in AI?"
            },
            "options": [
                {
                    "en": "Focusing AI processing on the most important stimuli",
                    "es": "Enfocar el procesamiento de IA en los estímulos más importantes",
                    "de": "Fokussierung der KI-Verarbeitung auf die wichtigsten Stimuli",
                    "nl": "Het focussen van AI-verwerking op de belangrijkste stimuli"
                },
                {
                    "en": "Managing player engagement metrics",
                    "es": "Gestionar métricas de participación del jugador",
                    "de": "Spieler-Engagement-Metriken verwalten",
                    "nl": "Het beheren van speler-betrokkenheidsmetrics"
                },
                {
                    "en": "Controlling camera focus",
                    "es": "Controlar el enfoque de la cámara",
                    "de": "Kamerafokus steuern",
                    "nl": "Het controleren van camera-focus"
                },
                {
                    "en": "Resource allocation optimization",
                    "es": "Optimización de asignación de recursos",
                    "de": "Ressourcenzuweisungsoptimierung",
                    "nl": "Resource-toewijzing optimalisatie"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Attention limits which stimuli the AI processes each frame, preventing overload. Priority queues rank events by urgency: gunshots trump footsteps. Unattended stimuli decay or are stored for later processing.",
                "es": "La atención limita qué estímulos procesa la IA cada frame. Las colas de prioridad clasifican por urgencia: disparos superan pasos. Los estímulos no atendidos decaen.",
                "de": "Aufmerksamkeit begrenzt welche Stimuli die KI pro Frame verarbeitet. Prioritätswarteschlangen ordnen nach Dringlichkeit: Schüsse überwiegen Schritte. Unbeachtete Stimuli zerfallen.",
                "nl": "Aandacht begrenst welke stimuli AI per frame verwerkt. Prioriteitswachtrijen rangschikken op urgentie: schoten overtreffen voetstappen. Onbehandelde stimuli vervallen of worden later verwerkt."
            }
        },
        {
            "question": {
                "en": "What is anticipation in AI behavior?",
                "es": "¿Qué es la anticipación en el comportamiento de IA?",
                "de": "Was ist Antizipation im KI-Verhalten?",
                "nl": "Wat is anticipatie in AI-gedrag?"
            },
            "options": [
                {
                    "en": "Predicting future events and acting proactively",
                    "es": "Predecir eventos futuros y actuar proactivamente",
                    "de": "Vorhersagen zukünftiger Ereignisse und proaktives Handeln",
                    "nl": "Het voorspellen van toekomstige gebeurtenissen en proactief handelen"
                },
                {
                    "en": "Animation preparation frames",
                    "es": "Fotogramas de preparación de animación",
                    "de": "Animationsvorbereitungs-Frames",
                    "nl": "Animatie-voorbereidingsframes"
                },
                {
                    "en": "Pre-loading game assets",
                    "es": "Pre-carga de recursos del juego",
                    "de": "Vorladen von Spiel-Assets",
                    "nl": "Het vooraf laden van game-assets"
                },
                {
                    "en": "Waiting for player input",
                    "es": "Esperar entrada del jugador",
                    "de": "Warten auf Spielereingabe",
                    "nl": "Het wachten op speler-input"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Anticipation allows AI to act proactively rather than reactively. By predicting player actions, AI can pre-position, prepare counters, or trigger events before the player reaches a location.",
                "es": "La anticipación permite a la IA actuar proactivamente. Prediciendo acciones del jugador, la IA puede reposicionarse, preparar respuestas o activar eventos antes de que el jugador llegue.",
                "de": "Antizipation ermöglicht proaktives KI-Handeln statt reaktivem. Durch Vorhersage von Spieleraktionen kann KI sich vorpositionieren, Gegenmaßnahmen vorbereiten oder Events auslösen.",
                "nl": "Anticipatie stelt AI in staat proactief te handelen. Door spelersacties te voorspellen kan AI zich herpositioneren, tegenmaatregelen voorbereiden of events triggeren voor de speler aankomt."
            }
        },
        {
            "question": {
                "en": "What is a belief system in AI agents?",
                "es": "¿Qué es un sistema de creencias en los agentes de IA?",
                "de": "Was ist ein Glaubenssystem in KI-Agenten?",
                "nl": "Wat is een overtuigingssysteem in AI-agenten?"
            },
            "options": [
                {
                    "en": "The AI's internal representation of what it thinks is true",
                    "es": "La representación interna de la IA de lo que cree que es verdad",
                    "de": "Die interne Darstellung der KI von dem, was sie für wahr hält",
                    "nl": "De interne weergave van de AI van wat het denkt dat waar is"
                },
                {
                    "en": "Religious character dialogue options",
                    "es": "Opciones de diálogo de personajes religiosos",
                    "de": "Religiöse Charakter-Dialogoptionen",
                    "nl": "Religieuze karakter-dialoogopties"
                },
                {
                    "en": "Faction alignment mechanics",
                    "es": "Mecánicas de alineación de facciones",
                    "de": "Faktions-Ausrichtungsmechaniken",
                    "nl": "Factie-alignering mechanismen"
                },
                {
                    "en": "Morality tracking system",
                    "es": "Sistema de seguimiento de moralidad",
                    "de": "Moralitätsverfolgungssystem",
                    "nl": "Moraliteits-tracking systeem"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "AI belief systems represent what the agent thinks is true, which may differ from reality. An NPC might believe the player is still in a room after they've moved, until new evidence updates the belief.",
                "es": "Los sistemas de creencias representan lo que el agente cree, que puede diferir de la realidad. Un NPC puede creer que el jugador sigue en un lugar aunque se haya movido.",
                "de": "KI-Glaubenssysteme repräsentieren was der Agent für wahr hält, was von der Realität abweichen kann. Ein NPC könnte glauben der Spieler ist noch im Raum, obwohl er weg ist.",
                "nl": "AI-geloofssystemen representeren wat de agent denkt dat waar is, wat van de realiteit kan afwijken. Een NPC kan geloven dat de speler nog in een kamer is nadat die al weg is gegaan."
            }
        },
        {
            "question": {
                "en": "What is uncertainty handling in AI decision-making?",
                "es": "¿Qué es el manejo de incertidumbre en la toma de decisiones de IA?",
                "de": "Was ist Unsicherheitsbehandlung in der KI-Entscheidungsfindung?",
                "nl": "Wat is onzekerheidsbeheer in AI-besluitvorming?"
            },
            "options": [
                {
                    "en": "Making decisions when information is incomplete or unreliable",
                    "es": "Tomar decisiones cuando la información está incompleta o no es confiable",
                    "de": "Entscheidungen treffen, wenn Informationen unvollständig oder unzuverlässig sind",
                    "nl": "Het nemen van beslissingen wanneer informatie onvolledig of onbetrouwbaar is"
                },
                {
                    "en": "Error handling in code execution",
                    "es": "Manejo de errores en la ejecución de código",
                    "de": "Fehlerbehandlung bei der Code-Ausführung",
                    "nl": "Foutafhandeling in code-uitvoering"
                },
                {
                    "en": "Network packet loss recovery",
                    "es": "Recuperación de pérdida de paquetes de red",
                    "de": "Netzwerkpaketverlusts-Wiederherstellung",
                    "nl": "Netwerkpakketverlies-herstel"
                },
                {
                    "en": "Random number generation",
                    "es": "Generación de números aleatorios",
                    "de": "Zufallszahlengenerierung",
                    "nl": "Willekeurige getalgeneratie"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "AI handles uncertainty through probabilistic reasoning and confidence thresholds. When information is unreliable, the AI falls back to conservative defaults like patrol behavior rather than making a bad decision.",
                "es": "La IA maneja la incertidumbre mediante razonamiento probabilístico y umbrales de confianza. Con información poco fiable vuelve al comportamiento de patrulla en vez de decidir mal.",
                "de": "KI bewältigt Unsicherheit durch probabilistisches Denken und Konfidenzschwellen. Bei unzuverlässigen Informationen fällt die KI auf konservative Verhaltensweisen wie Patrouille zurück.",
                "nl": "AI verwerkt onzekerheid via probabilistisch redeneren en betrouwbaarheidsdrempels. Bij onbetrouwbare informatie valt AI terug op conservatief gedrag zoals patrouilleren."
            }
        },
        {
            "question": {
                "en": "What is replanning in AI?",
                "es": "¿Qué es la replanificación en IA?",
                "de": "Was ist Neuplanung in KI?",
                "nl": "Wat is herplannen in AI?"
            },
            "options": [
                {
                    "en": "Creating new plans when circumstances change or plans fail",
                    "es": "Crear nuevos planes cuando las circunstancias cambian o los planes fallan",
                    "de": "Neue Pläne erstellen, wenn sich Umstände ändern oder Pläne scheitern",
                    "nl": "Het creëren van nieuwe plannen wanneer omstandigheden veranderen of plannen falen"
                },
                {
                    "en": "Reloading saved game states",
                    "es": "Recargar estados de juego guardados",
                    "de": "Gespeicherte Spielzustände neu laden",
                    "nl": "Het herladen van opgeslagen game-states"
                },
                {
                    "en": "Restarting failed missions",
                    "es": "Reiniciar misiones fallidas",
                    "de": "Gescheiterte Missionen neu starten",
                    "nl": "Het herstarten van mislukte missies"
                },
                {
                    "en": "Redesigning game levels",
                    "es": "Rediseñar niveles de juego",
                    "de": "Spiellevel neu gestalten",
                    "nl": "Het herontwerpen van game-levels"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Replanning triggers when an executing plan fails or conditions change significantly. The AI detects the discrepancy, abandons the failed plan, and invokes the planner to generate a new approach.",
                "es": "La replanificación se activa cuando un plan falla o las condiciones cambian. La IA detecta la discrepancia, abandona el plan fallido e invoca al planificador para generar uno nuevo.",
                "de": "Neuplanung wird ausgelöst wenn ein Plan scheitert oder sich Bedingungen ändern. Die KI erkennt die Diskrepanz, verwirft den fehlgeschlagenen Plan und erstellt einen neuen.",
                "nl": "Herplanning wordt geactiveerd wanneer een plan faalt of omstandigheden veranderen. De AI detecteert de discrepantie, verlaat het mislukte plan en genereert een nieuw plan voor de huidige situatie."
            }
        },
        {
            "question": {
                "en": "What is plan execution monitoring?",
                "es": "¿Qué es el monitoreo de ejecución de planes?",
                "de": "Was ist Planausführungsüberwachung?",
                "nl": "Wat is plan-uitvoering monitoring?"
            },
            "options": [
                {
                    "en": "Tracking progress and detecting failures during plan execution",
                    "es": "Rastrear el progreso y detectar fallas durante la ejecución del plan",
                    "de": "Fortschritt verfolgen und Fehler während der Planausführung erkennen",
                    "nl": "Het volgen van voortgang en detecteren van fouten tijdens plan-uitvoering"
                },
                {
                    "en": "Measuring game performance metrics",
                    "es": "Medir métricas de rendimiento del juego",
                    "de": "Spieleleistungsmetriken messen",
                    "nl": "Het meten van game-prestatiemetrics"
                },
                {
                    "en": "Observing player playstyles",
                    "es": "Observar estilos de juego del jugador",
                    "de": "Spielstile von Spielern beobachten",
                    "nl": "Het observeren van spelerstijlen"
                },
                {
                    "en": "Watching speedrun attempts",
                    "es": "Ver intentos de speedrun",
                    "de": "Speedrun-Versuche beobachten",
                    "nl": "Het bekijken van speedrun-pogingen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Execution monitoring watches for deviations between expected and actual outcomes. If an NPC expects to reach a door in 3 seconds but is still moving after 10, the monitor triggers replanning or a fallback.",
                "es": "El monitoreo de ejecución vigila desviaciones entre resultados esperados y reales. Si un NPC debería llegar en 3 segundos pero tarda 10, activa la replanificación.",
                "de": "Ausführungsüberwachung erkennt Abweichungen zwischen erwarteten und tatsächlichen Ergebnissen. Wenn ein NPC länger als erwartet braucht, löst der Monitor Neuplanung aus.",
                "nl": "Uitvoeringsmonitoring bewaakt afwijkingen tussen verwachte en werkelijke uitkomsten. Als een NPC langer dan verwacht doet, activeert de monitor herplanning of een terugvalgedrag."
            }
        },
        {
            "question": {
                "en": "What is intention recognition in game AI?",
                "es": "¿Qué es el reconocimiento de intención en la IA de juegos?",
                "de": "Was ist Absichtserkennung in der Spiele-KI?",
                "nl": "Wat is intentie-herkenning in game AI?"
            },
            "options": [
                {
                    "en": "Inferring what a player or opponent is trying to do",
                    "es": "Inferir lo que un jugador u oponente está tratando de hacer",
                    "de": "Ableiten, was ein Spieler oder Gegner zu tun versucht",
                    "nl": "Het afleiden wat een speler of tegenstander probeert te doen"
                },
                {
                    "en": "Reading player input commands",
                    "es": "Leer comandos de entrada del jugador",
                    "de": "Spielereingabebefehle lesen",
                    "nl": "Het lezen van speler-invoeropdrachten"
                },
                {
                    "en": "Parsing dialogue choices",
                    "es": "Analizar opciones de diálogo",
                    "de": "Dialogoptionen parsen",
                    "nl": "Het parsen van dialoogkeuzes"
                },
                {
                    "en": "Detecting button presses",
                    "es": "Detectar pulsaciones de botones",
                    "de": "Tastendrücke erkennen",
                    "nl": "Het detecteren van knopdrukken"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Intention recognition uses observed actions to infer underlying goals. If AI sees the player stockpiling resources near a chokepoint, it can infer defensive intent and plan accordingly.",
                "es": "El reconocimiento de intenciones usa acciones observadas para inferir objetivos. Si la IA ve al jugador acumular recursos en un choke point, puede inferir intención defensiva.",
                "de": "Absichtserkennung nutzt beobachtete Aktionen um Ziele zu schlussfolgern. Wenn KI den Spieler an einem Chokepoint Ressourcen sammeln sieht, kann sie defensive Absicht erkennen.",
                "nl": "Intentieherkenning gebruikt waargenomen acties om onderliggende doelen af te leiden. Als AI de speler resources ziet opslaan bij een chokepoint, kan het defensieve intentie afleiden."
            }
        },
        {
            "question": {
                "en": "What is goal formulation in AI planning?",
                "es": "¿Qué es la formulación de objetivos en la planificación de IA?",
                "de": "Was ist Zielformulierung in der KI-Planung?",
                "nl": "Wat is doelformulering in AI-planning?"
            },
            "options": [
                {
                    "en": "Determining what the AI should try to achieve",
                    "es": "Determinar lo que la IA debe intentar lograr",
                    "de": "Bestimmen, was die KI zu erreichen versuchen sollte",
                    "nl": "Het bepalen wat de AI zou moeten proberen te bereiken"
                },
                {
                    "en": "Calculating mathematical formulas",
                    "es": "Calcular fórmulas matemáticas",
                    "de": "Mathematische Formeln berechnen",
                    "nl": "Het berekenen van wiskundige formules"
                },
                {
                    "en": "Creating quest objectives for players",
                    "es": "Crear objetivos de misión para jugadores",
                    "de": "Quest-Ziele für Spieler erstellen",
                    "nl": "Het creëren van quest-doelen voor spelers"
                },
                {
                    "en": "Defining game win conditions",
                    "es": "Definir condiciones de victoria del juego",
                    "de": "Spiel-Gewinnbedingungen definieren",
                    "nl": "Het definiëren van game-wincondities"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Goal formulation decides what the AI should achieve given its current state, resources, and game situation. It prioritizes between survival, combat, exploration, or resource gathering based on context.",
                "es": "La formulación de objetivos decide qué debe lograr la IA dado su estado, recursos y situación. Prioriza entre supervivencia, combate, exploración y recolección según el contexto.",
                "de": "Zielformulierung entscheidet was die KI erreichen soll, gegeben Zustand, Ressourcen und Spielsituation. Es priorisiert zwischen Überleben, Kampf, Erkundung und Ressourcensammlung.",
                "nl": "Doelformulering bepaalt wat de AI moet bereiken gezien haar toestand, resources en spelsituatie. Het prioriteert overleven, gevecht, verkenning of resource-verzameling op basis van context."
            }
        },
        {
            "question": {
                "en": "What is partial observability in game AI?",
                "es": "¿Qué es la observabilidad parcial en la IA de juegos?",
                "de": "Was ist partielle Beobachtbarkeit in der Spiele-KI?",
                "nl": "Wat is gedeeltelijke observeerbaarheid in game AI?"
            },
            "options": [
                {
                    "en": "AI having incomplete information about the game state",
                    "es": "IA que tiene información incompleta sobre el estado del juego",
                    "de": "KI mit unvollständigen Informationen über den Spielzustand",
                    "nl": "AI met onvolledige informatie over de game-status"
                },
                {
                    "en": "Players seeing through fog of war",
                    "es": "Jugadores viendo a través de la niebla de guerra",
                    "de": "Spieler sehen durch Nebel des Krieges",
                    "nl": "Spelers die door fog of war kijken"
                },
                {
                    "en": "Transparent graphics rendering",
                    "es": "Renderizado de gráficos transparentes",
                    "de": "Transparentes Grafik-Rendering",
                    "nl": "Transparante grafische rendering"
                },
                {
                    "en": "Partial screen visibility",
                    "es": "Visibilidad parcial de pantalla",
                    "de": "Teilweise Bildschirmsichtbarkeit",
                    "nl": "Gedeeltelijke scherm-zichtbaarheid"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "In partial observability, AI cannot see the full game state. Chess AI sees all pieces, but RTS AI faces fog of war. This forces AI to maintain beliefs and estimate unknown states probabilistically.",
                "es": "Con observabilidad parcial, la IA no ve el estado completo. El ajedrez es totalmente observable, pero los RTS tienen niebla de guerra. La IA debe mantener creencias sobre lo desconocido.",
                "de": "Bei partieller Beobachtbarkeit kennt die KI nicht den vollen Spielzustand. Schach ist voll beobachtbar, RTS hat Kriegsnebel. Die KI muss Überzeugungen über unbekannte Zustände pflegen.",
                "nl": "Bij partiële observeerbaarheid kent AI niet de volledige speltoestand. Schaken is volledig observeerbaar, maar RTS heeft oorlogsmist. AI moet overtuigingen over onbekende toestand bijhouden."
            }
        },
        {
            "question": {
                "en": "What is stochastic behavior in game AI?",
                "es": "¿Qué es el comportamiento estocástico en la IA de juegos?",
                "de": "Was ist stochastisches Verhalten in der Spiele-KI?",
                "nl": "Wat is stochastisch gedrag in game AI?"
            },
            "options": [
                {
                    "en": "Incorporating randomness and probability into AI decisions",
                    "es": "Incorporar aleatoriedad y probabilidad en las decisiones de IA",
                    "de": "Einbeziehung von Zufälligkeit und Wahrscheinlichkeit in KI-Entscheidungen",
                    "nl": "Het integreren van willekeur en waarschijnlijkheid in AI-beslissingen"
                },
                {
                    "en": "Unpredictable game bugs",
                    "es": "Errores de juego impredecibles",
                    "de": "Unvorhersehbare Spielfehler",
                    "nl": "Onvoorspelbare game-bugs"
                },
                {
                    "en": "Network latency variations",
                    "es": "Variaciones de latencia de red",
                    "de": "Netzwerklatenz-Schwankungen",
                    "nl": "Netwerklatentie-variaties"
                },
                {
                    "en": "Random level generation",
                    "es": "Generación aleatoria de niveles",
                    "de": "Zufällige Level-Generierung",
                    "nl": "Willekeurige level-generatie"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Stochastic AI adds randomness to make behavior less predictable and more human-like. A guard might search for 3-7 seconds instead of exactly 5, preventing players from memorizing exact timing.",
                "es": "La IA estocástica añade aleatoriedad para ser menos predecible. Un guardia buscaría entre 3 y 7 segundos en vez de exactamente 5, evitando que se memoricen los tiempos exactos.",
                "de": "Stochastische KI fügt Zufälligkeit hinzu um weniger vorhersehbar zu sein. Ein Wächter sucht 3-7 Sekunden statt exakt 5, was das Auswendiglernen von Abläufen verhindert.",
                "nl": "Stochastische AI voegt willekeur toe om minder voorspelbaar en menselijker te zijn. Een bewaker zoekt 3-7 seconden (willekeurig) in plaats van exact 5, zodat spelers tijden niet onthouden."
            }
        },
        {
            "question": {
                "en": "What is deterministic AI behavior?",
                "es": "¿Qué es el comportamiento de IA determinista?",
                "de": "Was ist deterministisches KI-Verhalten?",
                "nl": "Wat is deterministisch AI-gedrag?"
            },
            "options": [
                {
                    "en": "AI that always behaves the same way in identical situations",
                    "es": "IA que siempre se comporta de la misma manera en situaciones idénticas",
                    "de": "KI, die sich in identischen Situationen immer gleich verhält",
                    "nl": "AI die zich altijd op dezelfde manier gedraagt in identieke situaties"
                },
                {
                    "en": "AI that decides player outcomes",
                    "es": "IA que decide los resultados del jugador",
                    "de": "KI, die Spielerergebnisse bestimmt",
                    "nl": "AI die speler-uitkomsten bepaalt"
                },
                {
                    "en": "Scripted cutscene sequences",
                    "es": "Secuencias de cinemáticas programadas",
                    "de": "Geskriptete Zwischensequenzen",
                    "nl": "Gescripte cutscene-sequenties"
                },
                {
                    "en": "Fixed animation playback",
                    "es": "Reproducción de animación fija",
                    "de": "Feste Animationswiedergabe",
                    "nl": "Vaste animatie-afspeling"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Deterministic AI always produces the same output for the same input. This makes it testable, debuggable, and allows replay systems. Chess engines often prioritize determinism over randomness.",
                "es": "La IA determinista siempre produce la misma salida para la misma entrada. Facilita pruebas, depuración y sistemas de repetición. Los motores de ajedrez priorizan el determinismo.",
                "de": "Deterministische KI erzeugt immer dieselbe Ausgabe für dieselbe Eingabe. Das erleichtert Tests, Debugging und Replay-Systeme. Schach-Engines priorisieren oft Determinismus.",
                "nl": "Deterministische AI produceert altijd dezelfde output voor dezelfde input. Dit vergemakkelijkt testen, debuggen en replay-systemen. Schaakengines prioriteren determinisme boven willekeur."
            }
        },
        {
            "question": {
                "en": "What is multi-objective optimization in AI?",
                "es": "¿Qué es la optimización multi-objetivo en IA?",
                "de": "Was ist Multi-Ziel-Optimierung in KI?",
                "nl": "Wat is multi-doeloptimalisatie in AI?"
            },
            "options": [
                {
                    "en": "Balancing multiple competing goals simultaneously",
                    "es": "Equilibrar múltiples objetivos competitivos simultáneamente",
                    "de": "Gleichzeitiges Ausbalancieren mehrerer konkurrierender Ziele",
                    "nl": "Het balanceren van meerdere concurrerende doelen tegelijkertijd"
                },
                {
                    "en": "Completing multiple quests at once",
                    "es": "Completar múltiples misiones a la vez",
                    "de": "Mehrere Quests gleichzeitig abschließen",
                    "nl": "Het voltooien van meerdere quests tegelijk"
                },
                {
                    "en": "Managing various graphics settings",
                    "es": "Gestionar varias configuraciones gráficas",
                    "de": "Verschiedene Grafikeinstellungen verwalten",
                    "nl": "Het beheren van verschillende grafische instellingen"
                },
                {
                    "en": "Rendering multiple cameras",
                    "es": "Renderizar múltiples cámaras",
                    "de": "Mehrere Kameras rendern",
                    "nl": "Het renderen van meerdere camera's"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "AI often pursues multiple goals simultaneously: survive, kill enemies, and gather resources. Multi-objective optimization finds Pareto-optimal solutions that balance trade-offs rather than optimizing a single goal.",
                "es": "La IA persigue múltiples objetivos: sobrevivir, eliminar enemigos y recolectar recursos. La optimización multiobjetivo encuentra soluciones de Pareto que equilibran los trade-offs.",
                "de": "KI verfolgt oft mehrere Ziele: überleben, Feinde bekämpfen und Ressourcen sammeln. Multi-Ziel-Optimierung findet Pareto-optimale Lösungen die Kompromisse ausbalancieren.",
                "nl": "AI streeft naar meerdere doelen tegelijk: overleven, vijanden doden en resources verzamelen. Multi-doel-optimalisatie vindt Pareto-optimale oplossingen die trade-offs balanceren."
            }
        },
        {
            "question": {
                "en": "What is constraint satisfaction in AI planning?",
                "es": "¿Qué es la satisfacción de restricciones en la planificación de IA?",
                "de": "Was ist Constraint-Erfüllung in der KI-Planung?",
                "nl": "Wat is constraint-tevredenheid in AI-planning?"
            },
            "options": [
                {
                    "en": "Finding solutions that meet all specified requirements",
                    "es": "Encontrar soluciones que cumplan con todos los requisitos especificados",
                    "de": "Lösungen finden, die alle spezifizierten Anforderungen erfüllen",
                    "nl": "Het vinden van oplossingen die aan alle gespecificeerde vereisten voldoen"
                },
                {
                    "en": "Meeting player expectations",
                    "es": "Cumplir con las expectativas del jugador",
                    "de": "Spielererwartungen erfüllen",
                    "nl": "Het voldoen aan spelersverwachtingen"
                },
                {
                    "en": "Satisfying performance requirements",
                    "es": "Satisfacer requisitos de rendimiento",
                    "de": "Leistungsanforderungen erfüllen",
                    "nl": "Het voldoen aan prestatie-eisen"
                },
                {
                    "en": "Limiting system resources",
                    "es": "Limitar recursos del sistema",
                    "de": "Systemressourcen begrenzen",
                    "nl": "Het beperken van systeembronnen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "CSPs require finding assignments that satisfy all constraints simultaneously. In games, AI uses CSP for scheduling (task A before B), resource limits, and spatial constraints like unit placement.",
                "es": "Los CSPs requieren asignaciones que cumplan todas las restricciones. En juegos, la IA los usa para planificación (tarea A antes B), límites de recursos y restricciones espaciales.",
                "de": "CSPs erfordern Zuweisungen die alle Einschränkungen erfüllen. Spiele-KI nutzt CSP für Planung (Aufgabe A vor B), Ressourcenlimits und räumliche Einschränkungen.",
                "nl": "CSP's vereisen toewijzingen die aan alle beperkingen voldoen. Game AI gebruikt CSP voor planning (taak A vóór B), resourcebeperkingen en ruimtelijke beperkingen zoals eenheidplaatsing."
            }
        },
        {
            "question": {
                "en": "What is heuristic evaluation in AI?",
                "es": "¿Qué es la evaluación heurística en IA?",
                "de": "Was ist heuristische Bewertung in KI?",
                "nl": "Wat is heuristische evaluatie in AI?"
            },
            "options": [
                {
                    "en": "Using rules of thumb to estimate solution quality",
                    "es": "Usar reglas empíricas para estimar la calidad de la solución",
                    "de": "Verwendung von Faustregeln zur Schätzung der Lösungsqualität",
                    "nl": "Het gebruik van vuistregels om oplossing-kwaliteit te schatten"
                },
                {
                    "en": "Evaluating user interface usability",
                    "es": "Evaluar la usabilidad de la interfaz de usuario",
                    "de": "Benutzeroberflächen-Usability bewerten",
                    "nl": "Het evalueren van gebruikersinterface-bruikbaarheid"
                },
                {
                    "en": "Testing game balance",
                    "es": "Probar el equilibrio del juego",
                    "de": "Spielbalance testen",
                    "nl": "Het testen van game-balans"
                },
                {
                    "en": "Assessing graphics quality",
                    "es": "Evaluar la calidad gráfica",
                    "de": "Grafikqualität bewerten",
                    "nl": "Het beoordelen van grafische kwaliteit"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Heuristics provide fast, approximate quality estimates without exhaustive search. In chess, material count is a simple heuristic. In pathfinding, Manhattan distance estimates remaining path cost.",
                "es": "Las heurísticas dan estimaciones de calidad rápidas sin búsqueda exhaustiva. En ajedrez, el conteo de material es una heurística simple. En rutas, la distancia Manhattan estima el coste.",
                "de": "Heuristiken liefern schnelle Qualitätsschätzungen ohne erschöpfende Suche. Im Schach ist Materialzahl eine einfache Heuristik. Beim Pfadfinden schätzt Manhattan-Distanz die Restkosten.",
                "nl": "Heuristieken geven snelle, benaderingswijze kwaliteitsschattingen. In schaken is materiaalcount een eenvoudige heuristiek. In pathfinding schat Manhattan-afstand de resterende padkosten."
            }
        },
        {
            "question": {
                "en": "What is backtracking in AI search?",
                "es": "¿Qué es el retroceso en la búsqueda de IA?",
                "de": "Was ist Backtracking in der KI-Suche?",
                "nl": "Wat is backtracking in AI-zoeken?"
            },
            "options": [
                {
                    "en": "Returning to previous states when current path fails",
                    "es": "Regresar a estados anteriores cuando falla el camino actual",
                    "de": "Zu vorherigen Zuständen zurückkehren, wenn der aktuelle Pfad fehlschlägt",
                    "nl": "Terugkeren naar eerdere toestanden wanneer het huidige pad faalt"
                },
                {
                    "en": "Replaying previous game states",
                    "es": "Reproducir estados de juego anteriores",
                    "de": "Vorherige Spielzustände wiedergeben",
                    "nl": "Het herspelen van eerdere game-states"
                },
                {
                    "en": "Reversing animations backwards",
                    "es": "Revertir animaciones hacia atrás",
                    "de": "Animationen rückwärts abspielen",
                    "nl": "Het achteruit afspelen van animaties"
                },
                {
                    "en": "Walking backwards in-game",
                    "es": "Caminar hacia atrás en el juego",
                    "de": "Rückwärtsgehen im Spiel",
                    "nl": "Achteruit lopen in-game"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Backtracking systematically tries choices and undoes them if they lead to dead ends. Used in constraint satisfaction, puzzle solving, and any search where early choices may conflict with later requirements.",
                "es": "El backtracking prueba opciones sistemáticamente y las deshace si llevan a callejones sin salida. Se usa en satisfacción de restricciones, resolución de puzzles y búsqueda de soluciones.",
                "de": "Backtracking probiert systematisch Optionen und macht sie bei Sackgassen rückgängig. Verwendet in Constraint-Satisfaction, Puzzle-Lösung und jeder Suche wo frühe Entscheidungen Konflikte erzeugen.",
                "nl": "Backtracking probeert systematisch keuzes en maakt ze ongedaan bij doodlopende wegen. Gebruikt bij constraint-voldoening, puzzeloplossing en zoeken waarbij vroege keuzes later conflicteren."
            }
        },
        {
            "question": {
                "en": "What is forward chaining in AI reasoning?",
                "es": "¿Qué es el encadenamiento hacia adelante en el razonamiento de IA?",
                "de": "Was ist Forward Chaining im KI-Reasoning?",
                "nl": "Wat is forward chaining in AI-redenering?"
            },
            "options": [
                {
                    "en": "Starting with known facts and deriving new conclusions",
                    "es": "Comenzar con hechos conocidos y derivar nuevas conclusiones",
                    "de": "Mit bekannten Fakten beginnen und neue Schlussfolgerungen ableiten",
                    "nl": "Beginnen met bekende feiten en nieuwe conclusies afleiden"
                },
                {
                    "en": "Connecting waypoints in sequence",
                    "es": "Conectar puntos de referencia en secuencia",
                    "de": "Wegpunkte nacheinander verbinden",
                    "nl": "Het verbinden van waypoints in volgorde"
                },
                {
                    "en": "Linking quest objectives",
                    "es": "Vincular objetivos de misión",
                    "de": "Quest-Ziele verknüpfen",
                    "nl": "Het koppelen van quest-doelen"
                },
                {
                    "en": "Creating animation transitions",
                    "es": "Crear transiciones de animación",
                    "de": "Animationsübergänge erstellen",
                    "nl": "Het creëren van animatie-overgangen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Forward chaining starts with known facts and repeatedly applies rules to derive new facts until a goal is reached. Used in expert systems and AI planning to derive consequences from known state.",
                "es": "El encadenamiento hacia adelante parte de hechos conocidos y aplica reglas para derivar nuevos hechos hasta alcanzar un objetivo. Se usa en sistemas expertos y planificación IA.",
                "de": "Vorwärtsverkettung startet mit bekannten Fakten und wendet Regeln an um neue Fakten abzuleiten bis ein Ziel erreicht ist. Genutzt in Expertensystemen und KI-Planung.",
                "nl": "Voorwaartse chaining begint met bekende feiten en past herhaaldelijk regels toe om nieuwe feiten af te leiden totdat een doel bereikt is. Gebruikt in expertsystemen en AI-planning."
            }
        },
        {
            "question": {
                "en": "What is backward chaining in AI reasoning?",
                "es": "¿Qué es el encadenamiento hacia atrás en el razonamiento de IA?",
                "de": "Was ist Backward Chaining im KI-Reasoning?",
                "nl": "Wat is backward chaining in AI-redenering?"
            },
            "options": [
                {
                    "en": "Starting with a goal and working backward to find supporting facts",
                    "es": "Comenzar con un objetivo y trabajar hacia atrás para encontrar hechos de apoyo",
                    "de": "Mit einem Ziel beginnen und rückwärts arbeiten, um unterstützende Fakten zu finden",
                    "nl": "Beginnen met een doel en achteruit werken om ondersteunende feiten te vinden"
                },
                {
                    "en": "Reversing pathfinding directions",
                    "es": "Invertir direcciones de búsqueda de rutas",
                    "de": "Pfadfindungsrichtungen umkehren",
                    "nl": "Het omkeren van pathfinding-richtingen"
                },
                {
                    "en": "Undoing player actions",
                    "es": "Deshacer acciones del jugador",
                    "de": "Spieleraktionen rückgängig machen",
                    "nl": "Het ongedaan maken van speleracties"
                },
                {
                    "en": "Rewinding game time",
                    "es": "Rebobinar el tiempo del juego",
                    "de": "Spielzeit zurückspulen",
                    "nl": "Het terugspoelen van game-tijd"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Backward chaining starts with a goal and works backward to find what facts are needed to prove it. More efficient than forward chaining when the goal is known, as it explores only relevant branches.",
                "es": "El encadenamiento hacia atrás parte del objetivo y trabaja hacia atrás para encontrar los hechos necesarios. Más eficiente cuando el objetivo es conocido, solo explorando ramas relevantes.",
                "de": "Rückwärtsverkettung startet mit einem Ziel und arbeitet rückwärts um benötigte Fakten zu finden. Effizienter wenn das Ziel bekannt ist, da nur relevante Äste erkundet werden.",
                "nl": "Achterwaartse chaining begint met een doel en werkt achterwaarts om benodigde feiten te vinden. Efficiënter dan voorwaartse chaining wanneer het doel bekend is, want alleen relevante takken."
            }
        },
        {
            "question": {
                "en": "What is a rule-based system in game AI?",
                "es": "¿Qué es un sistema basado en reglas en la IA de juegos?",
                "de": "Was ist ein regelbasiertes System in der Spiele-KI?",
                "nl": "Wat is een regel-gebaseerd systeem in game AI?"
            },
            "options": [
                {
                    "en": "AI that uses if-then rules to make decisions",
                    "es": "IA que usa reglas si-entonces para tomar decisiones",
                    "de": "KI, die Wenn-Dann-Regeln für Entscheidungen verwendet",
                    "nl": "AI die als-dan regels gebruikt om beslissingen te nemen"
                },
                {
                    "en": "Game mechanics enforcement system",
                    "es": "Sistema de aplicación de mecánicas de juego",
                    "de": "Spielmechanik-Durchsetzungssystem",
                    "nl": "Game-mechanica handhavingssysteem"
                },
                {
                    "en": "Player conduct monitoring",
                    "es": "Monitoreo de conducta del jugador",
                    "de": "Spielerverhaltensüberwachung",
                    "nl": "Spelergedrag-monitoring"
                },
                {
                    "en": "Server administration tools",
                    "es": "Herramientas de administración del servidor",
                    "de": "Server-Verwaltungstools",
                    "nl": "Server-beheertools"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Rule-based AI uses IF-THEN rules: IF player_health < 20% THEN retreat. Simple to author and debug, but can lead to rule conflicts and combinatorial explosion with many rules.",
                "es": "La IA basada en reglas usa reglas IF-THEN: SI salud < 20% ENTONCES huir. Simple de crear y depurar, pero puede generar conflictos y explosión combinatoria con muchas reglas.",
                "de": "Regelbasierte KI nutzt WENN-DANN-Regeln: WENN Spieler-HP < 20% DANN zurückziehen. Einfach zu erstellen und debuggen, aber anfällig für Regelkonflikte bei vielen Regeln.",
                "nl": "Regelgebaseerde AI gebruikt ALS-DAN-regels: ALS speler_hp < 20% DAN terugtrekken. Eenvoudig te maken en debuggen, maar kan leiden tot regelconflicten bij veel regels."
            }
        },
        {
            "question": {
                "en": "What is case-based reasoning in AI?",
                "es": "¿Qué es el razonamiento basado en casos en IA?",
                "de": "Was ist fallbasiertes Reasoning in KI?",
                "nl": "Wat is case-based redenering in AI?"
            },
            "options": [
                {
                    "en": "Solving new problems by adapting solutions from similar past cases",
                    "es": "Resolver nuevos problemas adaptando soluciones de casos pasados similares",
                    "de": "Neue Probleme lösen durch Anpassung von Lösungen aus ähnlichen vergangenen Fällen",
                    "nl": "Het oplossen van nieuwe problemen door oplossingen van vergelijkbare eerdere gevallen aan te passen"
                },
                {
                    "en": "Legal system simulation in games",
                    "es": "Simulación de sistema legal en juegos",
                    "de": "Rechtssystem-Simulation in Spielen",
                    "nl": "Rechtssysteem-simulatie in games"
                },
                {
                    "en": "Detective game mechanics",
                    "es": "Mecánicas de juegos de detectives",
                    "de": "Detektivspiel-Mechaniken",
                    "nl": "Detective-game mechanismen"
                },
                {
                    "en": "Mystery solving algorithms",
                    "es": "Algoritmos de resolución de misterios",
                    "de": "Mysterien-Lösungsalgorithmen",
                    "nl": "Mysterie-oplossingsalgoritmen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "CBR retrieves the most similar past case, adapts it to the current situation, and applies the solution. The new case is stored for future use, making the system learn from new experiences.",
                "es": "CBR recupera el caso pasado más similar, lo adapta y aplica la solución. El nuevo caso se almacena para uso futuro, haciendo que el sistema aprenda de nuevas experiencias.",
                "de": "CBR ruft den ähnlichsten vergangenen Fall ab, passt ihn an und wendet die Lösung an. Der neue Fall wird gespeichert, wodurch das System aus neuen Erfahrungen lernt.",
                "nl": "CBR haalt het meest vergelijkbare verleden geval op, past het aan en past de oplossing toe. Het nieuwe geval wordt opgeslagen, waardoor het systeem van nieuwe ervaringen leert."
            }
        },
        {
            "question": {
                "en": "What is the traveling salesman problem relevant to in game AI?",
                "es": "¿Para qué es relevante el problema del vendedor viajero en la IA de juegos?",
                "de": "Wofür ist das Problem des Handlungsreisenden in der Spiele-KI relevant?",
                "nl": "Waarvoor is het handelsreizigersprobleem relevant in game AI?"
            },
            "options": [
                {
                    "en": "Finding optimal routes visiting multiple locations",
                    "es": "Encontrar rutas óptimas visitando múltiples ubicaciones",
                    "de": "Optimale Routen finden, die mehrere Orte besuchen",
                    "nl": "Het vinden van optimale routes die meerdere locaties bezoeken"
                },
                {
                    "en": "NPC merchant behavior simulation",
                    "es": "Simulación de comportamiento de comerciante NPC",
                    "de": "NPC-Händler-Verhaltenssimulation",
                    "nl": "NPC-handelaar gedragssimulatie"
                },
                {
                    "en": "Economy system balancing",
                    "es": "Equilibrio del sistema económico",
                    "de": "Wirtschaftssystem-Ausbalancierung",
                    "nl": "Economie-systeem balancering"
                },
                {
                    "en": "Trade route generation",
                    "es": "Generación de rutas comerciales",
                    "de": "Handelsrouten-Generierung",
                    "nl": "Handelsroute-generatie"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The TSP finds the shortest route visiting all locations once. Game AI uses TSP-like algorithms for patrol route optimization, item collection in RPGs, and RTS unit movement planning.",
                "es": "El TSP encuentra la ruta más corta visitando todos los lugares una vez. La IA lo usa para rutas de patrulla, recolección de ítems en RPG y planificación de movimiento de unidades.",
                "de": "Das TSP findet die kürzeste Route die alle Orte einmal besucht. Spiele-KI nutzt TSP-ähnliche Algorithmen für Patrouillenrouten, Item-Sammlung in RPGs und Einheitenbewegung.",
                "nl": "TSP vindt de kortste route die alle locaties eenmaal bezoekt. Game AI gebruikt TSP-achtige algoritmen voor patrouilleroutes, itemverzameling in RPG's en eenheidsbewegingen."
            }
        },
        {
            "question": {
                "en": "What is swarm intelligence in game AI?",
                "es": "¿Qué es la inteligencia de enjambre en la IA de juegos?",
                "de": "Was ist Schwarmintelligenz in der Spiele-KI?",
                "nl": "Wat is zwermintelligentie in game AI?"
            },
            "options": [
                {
                    "en": "Collective behavior of decentralized, self-organized agents",
                    "es": "Comportamiento colectivo de agentes descentralizados y autoorganizados",
                    "de": "Kollektives Verhalten dezentralisierter, selbstorganisierter Agenten",
                    "nl": "Collectief gedrag van gedecentraliseerde, zelfgeorganiseerde agenten"
                },
                {
                    "en": "Insect enemy AI programming",
                    "es": "Programación de IA de enemigos insectos",
                    "de": "Insekten-Feind-KI-Programmierung",
                    "nl": "Insecten-vijand AI-programmering"
                },
                {
                    "en": "Multiplayer team matchmaking",
                    "es": "Emparejamiento de equipos multijugador",
                    "de": "Multiplayer-Team-Matchmaking",
                    "nl": "Multiplayer team-matchmaking"
                },
                {
                    "en": "Hive-mind boss mechanics",
                    "es": "Mecánicas de jefe de mente colmena",
                    "de": "Hive-Mind-Boss-Mechaniken",
                    "nl": "Hive-mind boss-mechanismen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Swarm intelligence produces complex collective behavior from simple local rules with no central control. Each agent only knows its neighbors, yet the group pathfinds, forages, and adapts intelligently.",
                "es": "La inteligencia de enjambre produce comportamiento colectivo complejo de reglas locales simples sin control central. Cada agente solo conoce a sus vecinos, pero el grupo actúa inteligentemente.",
                "de": "Schwarmintelligenz erzeugt komplexes Kollektivverhalten aus einfachen lokalen Regeln ohne zentrale Steuerung. Jeder Agent kennt nur seine Nachbarn, aber die Gruppe verhält sich intelligent.",
                "nl": "Zwerm-intelligentie produceert complex collectief gedrag uit eenvoudige lokale regels zonder centrale controle. Elke agent kent alleen zijn buren, maar de groep handelt toch intelligent."
            }
        },
        {
            "question": {
                "en": "What is ant colony optimization?",
                "es": "¿Qué es la optimización de colonia de hormigas?",
                "de": "Was ist Ameisenkolonie-Optimierung?",
                "nl": "Wat is mierenkolonie-optimalisatie?"
            },
            "options": [
                {
                    "en": "An algorithm inspired by ant foraging behavior for finding paths",
                    "es": "Un algoritmo inspirado en el comportamiento de hormigas para encontrar caminos",
                    "de": "Ein von Ameisen-Futtersuchverhalten inspirierter Algorithmus zum Finden von Pfaden",
                    "nl": "Een algoritme geïnspireerd door mieren-foerageergedrag voor het vinden van paden"
                },
                {
                    "en": "Managing insect enemies efficiently",
                    "es": "Gestionar enemigos insectos eficientemente",
                    "de": "Insekten-Feinde effizient verwalten",
                    "nl": "Het efficiënt beheren van insecten-vijanden"
                },
                {
                    "en": "Improving ant character animations",
                    "es": "Mejorar animaciones de personajes hormiga",
                    "de": "Ameisen-Charakter-Animationen verbessern",
                    "nl": "Het verbeteren van mieren-karakteranimaties"
                },
                {
                    "en": "Optimizing bug fixes in code",
                    "es": "Optimizar correcciones de errores en el código",
                    "de": "Bug-Fixes im Code optimieren",
                    "nl": "Het optimaliseren van bug-fixes in code"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "ACO mimics how ants deposit pheromones to mark good paths. Digital ants traverse a graph depositing 'pheromones' on edges. Shorter, better paths receive more pheromone reinforcement over iterations.",
                "es": "ACO imita cómo las hormigas depositan feromonas en buenos caminos. Las hormigas digitales recorren un grafo depositando 'feromonas'. Los caminos más cortos reciben más refuerzo.",
                "de": "ACO ahmt nach wie Ameisen Pheromone auf guten Wegen hinterlassen. Digitale Ameisen traversieren einen Graphen und hinterlassen 'Pheromone'. Kürzere Wege erhalten mehr Verstärkung.",
                "nl": "ACO imiteert hoe mieren feromonen achterlaten op goede paden. Digitale mieren doorlopen een graaf en deponeren 'feromonen'. Kortere, betere paden krijgen meer feromon-versterking over iteraties."
            }
        },
        {
            "question": {
                "en": "What is particle swarm optimization (PSO)?",
                "es": "¿Qué es la optimización por enjambre de partículas (PSO)?",
                "de": "Was ist Partikelschwarm-Optimierung (PSO)?",
                "nl": "Wat is particle swarm optimization (PSO)?"
            },
            "options": [
                {
                    "en": "An optimization technique based on social behavior of bird flocks",
                    "es": "Una técnica de optimización basada en el comportamiento social de bandadas de aves",
                    "de": "Eine Optimierungstechnik basierend auf dem Sozialverhalten von Vogelschwärmen",
                    "nl": "Een optimalisatietechniek gebaseerd op het sociale gedrag van vogelzwermen"
                },
                {
                    "en": "Particle effects optimization",
                    "es": "Optimización de efectos de partículas",
                    "de": "Partikeleffekt-Optimierung",
                    "nl": "Particle effect-optimalisatie"
                },
                {
                    "en": "Graphics particle system tuning",
                    "es": "Ajuste del sistema de partículas gráficas",
                    "de": "Grafik-Partikelsystem-Tuning",
                    "nl": "Grafische particle systeem-tuning"
                },
                {
                    "en": "Physics simulation improvement",
                    "es": "Mejora de simulación de física",
                    "de": "Physiksimulation-Verbesserung",
                    "nl": "Fysica-simulatie verbetering"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "PSO simulates social behavior where particles (candidate solutions) move through solution space. Each particle adjusts velocity based on its own best position and the swarm's best known position.",
                "es": "PSO simula comportamiento social donde partículas (soluciones candidatas) se mueven en el espacio de soluciones. Cada partícula ajusta velocidad según su mejor posición y la del enjambre.",
                "de": "PSO simuliert Sozialverhalten wo Partikel (Lösungskandidaten) sich im Lösungsraum bewegen. Jedes Partikel passt Geschwindigkeit basierend auf seiner besten Position und dem Schwarm an.",
                "nl": "PSO simuleert sociaal gedrag waarbij deeltjes (kandidaatoplossingen) door de oplossingsruimte bewegen. Elk deeltje past snelheid aan op basis van zijn beste positie en de beste van het zwerm."
            }
        },
        {
            "question": {
                "en": "What is action prediction in competitive AI?",
                "es": "¿Qué es la predicción de acción en IA competitiva?",
                "de": "Was ist Aktionsvorhersage in kompetitiver KI?",
                "nl": "Wat is actievoorspelling in competitieve AI?"
            },
            "options": [
                {
                    "en": "Forecasting what opponents will do based on patterns",
                    "es": "Pronosticar lo que harán los oponentes basándose en patrones",
                    "de": "Vorhersagen, was Gegner basierend auf Mustern tun werden",
                    "nl": "Het voorspellen wat tegenstanders zullen doen op basis van patronen"
                },
                {
                    "en": "Predicting frame times for animations",
                    "es": "Predecir tiempos de fotogramas para animaciones",
                    "de": "Frame-Zeiten für Animationen vorhersagen",
                    "nl": "Het voorspellen van frame-tijden voor animaties"
                },
                {
                    "en": "Anticipating server load",
                    "es": "Anticipar carga del servidor",
                    "de": "Serverlast vorhersagen",
                    "nl": "Het anticiperen op serverbelasting"
                },
                {
                    "en": "Forecasting player count",
                    "es": "Pronosticar recuento de jugadores",
                    "de": "Spielerzahl vorhersagen",
                    "nl": "Het voorspellen van spelaantal"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Action prediction identifies opponent patterns and tendencies to anticipate future moves. AI tracks which strategies the player uses, then adapts to counter predicted behavior rather than just reacting.",
                "es": "La predicción de acciones identifica patrones del oponente para anticipar movimientos futuros. La IA rastrea estrategias y se adapta para contrarrestar el comportamiento predicho.",
                "de": "Aktionsvorhersage erkennt Gegner-Muster um zukünftige Züge zu antizipieren. Die KI verfolgt Spielerstrategien und passt sich an um vorhergesagtes Verhalten zu kontern.",
                "nl": "Actievoorspelling identificeert tegenstander-patronen om toekomstige zetten te anticiperen. AI volgt welke strategieën de speler gebruikt en past zich aan om voorspeld gedrag te counteren."
            }
        },
        {
            "question": {
                "en": "What is build order optimization in strategy game AI?",
                "es": "¿Qué es la optimización del orden de construcción en la IA de juegos de estrategia?",
                "de": "Was ist Build-Order-Optimierung in Strategiespiel-KI?",
                "nl": "Wat is bouwvolgorde-optimalisatie in strategiespel-AI?"
            },
            "options": [
                {
                    "en": "Determining the most efficient sequence of constructing units and buildings",
                    "es": "Determinar la secuencia más eficiente de construcción de unidades y edificios",
                    "de": "Bestimmen der effizientesten Reihenfolge zum Bauen von Einheiten und Gebäuden",
                    "nl": "Het bepalen van de meest efficiënte volgorde voor het bouwen van eenheden en gebouwen"
                },
                {
                    "en": "Optimizing compile times for code",
                    "es": "Optimizar tiempos de compilación para código",
                    "de": "Kompilierzeiten für Code optimieren",
                    "nl": "Het optimaliseren van compileer-tijden voor code"
                },
                {
                    "en": "Sorting quest objectives by priority",
                    "es": "Ordenar objetivos de misión por prioridad",
                    "de": "Quest-Ziele nach Priorität sortieren",
                    "nl": "Het sorteren van quest-doelen op prioriteit"
                },
                {
                    "en": "Organizing asset loading sequences",
                    "es": "Organizar secuencias de carga de recursos",
                    "de": "Asset-Ladesequenzen organisieren",
                    "nl": "Het organiseren van asset-laadsequenties"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Build order determines construction and research sequences in RTS games. AI uses search algorithms or machine learning to find build orders that efficiently balance economy, military, and tech advancement.",
                "es": "El orden de construcción determina la secuencia en juegos RTS. La IA usa búsqueda o ML para encontrar órdenes que equilibren economía, militares y tecnología eficientemente.",
                "de": "Build-Order bestimmt Bau- und Forschungsreihenfolge in RTS. KI nutzt Such-Algorithmen oder ML um Build-Orders zu finden die Wirtschaft, Militär und Technologie balancieren.",
                "nl": "Bouwoordening bepaalt de constructie- en onderzoeksreeks in RTS-games. AI gebruikt zoekalgoritmen of ML om bouwords te vinden die economie, militaire kracht en technologie balanceren."
            }
        },
        {
            "question": {
                "en": "What is macromanagement in strategy game AI?",
                "es": "¿Qué es la macrogestión en la IA de juegos de estrategia?",
                "de": "Was ist Makromanagement in Strategiespiel-KI?",
                "nl": "Wat is macromanagement in strategiespel-AI?"
            },
            "options": [
                {
                    "en": "High-level strategic decision-making about economy and expansion",
                    "es": "Toma de decisiones estratégicas de alto nivel sobre economía y expansión",
                    "de": "Strategische Entscheidungsfindung auf hoher Ebene über Wirtschaft und Expansion",
                    "nl": "Strategische besluitvorming op hoog niveau over economie en expansie"
                },
                {
                    "en": "Managing large numbers of units",
                    "es": "Gestionar grandes cantidades de unidades",
                    "de": "Große Mengen von Einheiten verwalten",
                    "nl": "Het beheren van grote aantallen eenheden"
                },
                {
                    "en": "Controlling camera zoom levels",
                    "es": "Controlar niveles de zoom de cámara",
                    "de": "Kamera-Zoomstufen steuern",
                    "nl": "Het controleren van camera-zoomniveaus"
                },
                {
                    "en": "Managing multiple save files",
                    "es": "Gestionar múltiples archivos de guardado",
                    "de": "Mehrere Speicherdateien verwalten",
                    "nl": "Het beheren van meerdere opslagbestanden"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Macromanagement covers high-level strategic decisions: base expansion, economy scaling, technology paths, and army composition. Strong macro AI is often more important than micro in long-game outcomes.",
                "es": "La macroadministración cubre decisiones estratégicas: expansión de bases, economía, tecnología y composición del ejército. Una IA macro sólida suele ser más determinante que el micro.",
                "de": "Macromanagement umfasst strategische Entscheidungen: Basisausbau, Wirtschaft, Technologiepfade und Armeezusammensetzung. Starkes Makro ist oft wichtiger als Mikro für den Spielausgang.",
                "nl": "Macromanagement omvat strategische beslissingen: basis-uitbreiding, economie-schaalbaarheid, technologiepaden en legersamenstelling. Sterk macro is vaak belangrijker dan micro op lange termijn."
            }
        },
        {
            "question": {
                "en": "What is micromanagement in strategy game AI?",
                "es": "¿Qué es la microgestión en la IA de juegos de estrategia?",
                "de": "Was ist Mikromanagement in Strategiespiel-KI?",
                "nl": "Wat is micromanagement in strategiespel-AI?"
            },
            "options": [
                {
                    "en": "Detailed control of individual unit actions in combat",
                    "es": "Control detallado de acciones de unidades individuales en combate",
                    "de": "Detaillierte Kontrolle einzelner Einheitenaktionen im Kampf",
                    "nl": "Gedetailleerde controle van individuele eenheidsacties in gevechten"
                },
                {
                    "en": "Managing small game objects",
                    "es": "Gestionar objetos pequeños del juego",
                    "de": "Kleine Spielobjekte verwalten",
                    "nl": "Het beheren van kleine game-objecten"
                },
                {
                    "en": "Optimizing tiny performance details",
                    "es": "Optimizar pequeños detalles de rendimiento",
                    "de": "Winzige Leistungsdetails optimieren",
                    "nl": "Het optimaliseren van kleine prestatie-details"
                },
                {
                    "en": "Controlling UI element positioning",
                    "es": "Controlar el posicionamiento de elementos UI",
                    "de": "UI-Element-Positionierung steuern",
                    "nl": "Het controleren van UI-element positionering"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Micromanagement controls individual units in real-time: focus-firing targets, retreating damaged units, using unit abilities precisely. Human micro skill is hard to replicate but some AI excels at it.",
                "es": "La microadministración controla unidades individuales: concentrar fuego, retirar dañadas y usar habilidades precisamente. Es difícil de replicar en IA, aunque algunas lo dominan.",
                "de": "Micromanagement steuert einzelne Einheiten: Ziele fokussieren, beschädigte zurückziehen, Fähigkeiten präzise einsetzen. Menschliches Micro ist schwer zu replizieren, einige KI meistert es.",
                "nl": "Micromanagement bestuurt individuele eenheden: doelen aanvallen, beschadigde terugtrekken, vaardigheden precies gebruiken. Menselijke micro-vaardigheid is moeilijk te repliceren voor AI."
            }
        },
        {
            "question": {
                "en": "What is opening book knowledge in game AI?",
                "es": "¿Qué es el conocimiento de libro de aperturas en la IA de juegos?",
                "de": "Was ist Eröffnungsbuch-Wissen in der Spiele-KI?",
                "nl": "Wat is openingsboek-kennis in game AI?"
            },
            "options": [
                {
                    "en": "Pre-computed optimal moves for early game positions",
                    "es": "Movimientos óptimos precalculados para posiciones de juego temprano",
                    "de": "Vorberechnete optimale Züge für frühe Spielpositionen",
                    "nl": "Vooraf berekende optimale zetten voor vroege spel-posities"
                },
                {
                    "en": "Tutorial content for new players",
                    "es": "Contenido de tutorial para nuevos jugadores",
                    "de": "Tutorial-Inhalt für neue Spieler",
                    "nl": "Tutorial-inhoud voor nieuwe spelers"
                },
                {
                    "en": "Game manual information",
                    "es": "Información del manual del juego",
                    "de": "Spielanleitung-Informationen",
                    "nl": "Game-handleiding informatie"
                },
                {
                    "en": "Starting cutscene scripts",
                    "es": "Scripts de cinemática de inicio",
                    "de": "Start-Zwischensequenz-Skripte",
                    "nl": "Start-cutscene scripts"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Opening book databases store pre-computed optimal moves for early game positions. Instead of computing from scratch, AI instantly retrieves the best opening move. Book depth varies from a few moves to dozens.",
                "es": "Las bases de apertura almacenan movimientos óptimos precomputados para posiciones iniciales. En vez de calcular, la IA recupera el mejor movimiento de apertura al instante.",
                "de": "Eröffnungsdatenbanken speichern vorberechnete optimale Züge für frühe Stellungen. Statt neu zu berechnen ruft die KI den besten Eröffnungszug sofort ab. Tiefe variiert stark.",
                "nl": "Openingsboek-databases bewaren voorberekende optimale zetten voor vroege posities. In plaats van opnieuw te berekenen haalt AI onmiddellijk de beste openingszet op. Diepte varieert sterk."
            }
        },
        {
            "question": {
                "en": "What is endgame tablebase in AI?",
                "es": "¿Qué es la tabla de finales en IA?",
                "de": "Was ist Endspiel-Tablebase in KI?",
                "nl": "Wat is eindspel-tablebase in AI?"
            },
            "options": [
                {
                    "en": "Pre-computed perfect play for simplified late-game positions",
                    "es": "Juego perfecto precalculado para posiciones simplificadas de juego tardío",
                    "de": "Vorberechnetes perfektes Spiel für vereinfachte Endspiel-Positionen",
                    "nl": "Vooraf berekend perfect spel voor vereenvoudigde laat-spel posities"
                },
                {
                    "en": "Final boss AI patterns",
                    "es": "Patrones de IA del jefe final",
                    "de": "Endboss-KI-Muster",
                    "nl": "Eindbaas AI-patronen"
                },
                {
                    "en": "Ending credits database",
                    "es": "Base de datos de créditos finales",
                    "de": "Abspann-Datenbank",
                    "nl": "Eindcredits-database"
                },
                {
                    "en": "Leaderboard statistics",
                    "es": "Estadísticas de tabla de clasificación",
                    "de": "Bestenlisten-Statistiken",
                    "nl": "Leaderboard-statistieken"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Tablebases contain pre-computed perfect play for all positions with few pieces. With 7 or fewer pieces, engines like Stockfish look up the tablebase rather than searching, achieving perfect endgame play.",
                "es": "Las tablebases contienen juego perfecto para posiciones con pocas piezas. Con 7 o menos piezas, motores como Stockfish consultan la base en lugar de calcular, logrando finales perfectos.",
                "de": "Tablebases enthalten vorberechnetes perfektes Spiel für Stellungen mit wenigen Figuren. Mit 7 oder weniger Figuren schlagen Engines wie Stockfish nach statt zu suchen.",
                "nl": "Tablebases bevatten voorberekend perfect spel voor posities met weinig stukken. Met 7 of minder stukken zoeken engines zoals Stockfish in de tablebase in plaats van te zoeken."
            }
        },
        {
            "question": {
                "en": "What is tempo in strategic game AI?",
                "es": "¿Qué es el tempo en la IA de juegos estratégicos?",
                "de": "Was ist Tempo in strategischer Spiele-KI?",
                "nl": "Wat is tempo in strategisch spel-AI?"
            },
            "options": [
                {
                    "en": "The pace and timing of actions relative to opponents",
                    "es": "El ritmo y la sincronización de las acciones en relación con los oponentes",
                    "de": "Das Tempo und Timing von Aktionen relativ zu Gegnern",
                    "nl": "Het tempo en de timing van acties relatief tot tegenstanders"
                },
                {
                    "en": "Music beat synchronization",
                    "es": "Sincronización del ritmo musical",
                    "de": "Musikrhythmus-Synchronisierung",
                    "nl": "Muziek-beat synchronisatie"
                },
                {
                    "en": "Animation playback speed",
                    "es": "Velocidad de reproducción de animación",
                    "de": "Animationswiedergabe-Geschwindigkeit",
                    "nl": "Animatie-afspeelsnelheid"
                },
                {
                    "en": "Game clock timing",
                    "es": "Temporización del reloj del juego",
                    "de": "Spieluhr-Timing",
                    "nl": "Game-klok timing"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Tempo refers to the initiative and speed of play. Gaining tempo means forcing opponents to react to your moves rather than executing their own plans. AI evaluates tempo through threats created per move.",
                "es": "El tempo se refiere a la iniciativa y velocidad del juego. Ganar tempo significa forzar al oponente a reaccionar. La IA evalúa el tempo por amenazas creadas por movimiento.",
                "de": "Tempo bezeichnet Initiative und Spielgeschwindigkeit. Tempo gewinnen bedeutet den Gegner zum Reagieren zu zwingen. KI bewertet Tempo durch Bedrohungen pro Zug.",
                "nl": "Tempo verwijst naar initiatief en spelsnelheid. Tempo winnen betekent de tegenstander dwingen te reageren in plaats van eigen plannen uit te voeren. AI beoordeelt tempo via bedreigingen per zet."
            }
        },
        {
            "question": {
                "en": "What is initiative in turn-based game AI?",
                "es": "¿Qué es la iniciativa en la IA de juegos por turnos?",
                "de": "Was ist Initiative in rundenbasierter Spiele-KI?",
                "nl": "Wat is initiatief in turn-based game AI?"
            },
            "options": [
                {
                    "en": "Determining turn order and who acts first",
                    "es": "Determinar el orden de turnos y quién actúa primero",
                    "de": "Bestimmen der Zugreihenfolge und wer zuerst handelt",
                    "nl": "Het bepalen van beurtvolgorde en wie eerst handelt"
                },
                {
                    "en": "Starting new game features",
                    "es": "Iniciar nuevas características del juego",
                    "de": "Neue Spielfunktionen starten",
                    "nl": "Het starten van nieuwe game-functies"
                },
                {
                    "en": "Player's first action in a match",
                    "es": "Primera acción del jugador en una partida",
                    "de": "Erste Aktion des Spielers in einem Match",
                    "nl": "Eerste actie van de speler in een wedstrijd"
                },
                {
                    "en": "Beginning tutorial prompts",
                    "es": "Indicaciones de tutorial inicial",
                    "de": "Anfangs-Tutorial-Aufforderungen",
                    "nl": "Begin-tutorial aanwijzingen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Initiative determines who controls the flow of the game. In turn-based games, the player with initiative dictates the pace. AI measures initiative through threats, forcing moves, and opponent reactivity.",
                "es": "La iniciativa determina quién controla el flujo del juego. En juegos por turnos, quien tiene la iniciativa dicta el ritmo. La IA la mide por amenazas y movimientos forzados.",
                "de": "Initiative bestimmt wer den Spielfluss kontrolliert. Im Rundenspiel diktiert der Initiativhalter das Tempo. KI misst Initiative durch Bedrohungen, erzwungene Züge und Gegner-Reaktivität.",
                "nl": "Initiatief bepaalt wie de spelstroom controleert. In beurtgebaseerde games dicteert de speler met initiatief het tempo. AI meet initiatief via bedreigingen, forcerende zetten en reactiviteit."
            }
        },
        {
            "question": {
                "en": "What is value estimation in game AI?",
                "es": "¿Qué es la estimación de valor en la IA de juegos?",
                "de": "Was ist Wertschätzung in der Spiele-KI?",
                "nl": "Wat is waarde-inschatting in game AI?"
            },
            "options": [
                {
                    "en": "Assessing how favorable a game position is",
                    "es": "Evaluar cuán favorable es una posición del juego",
                    "de": "Bewerten, wie günstig eine Spielposition ist",
                    "nl": "Het beoordelen hoe gunstig een spelpositie is"
                },
                {
                    "en": "Calculating in-game item prices",
                    "es": "Calcular precios de objetos del juego",
                    "de": "Spielgegenstand-Preise berechnen",
                    "nl": "Het berekenen van in-game item-prijzen"
                },
                {
                    "en": "Estimating game worth for sales",
                    "es": "Estimar el valor del juego para ventas",
                    "de": "Spielwert für Verkäufe schätzen",
                    "nl": "Het schatten van game-waarde voor verkoop"
                },
                {
                    "en": "Determining loot rarity",
                    "es": "Determinar rareza del botín",
                    "de": "Beute-Seltenheit bestimmen",
                    "nl": "Het bepalen van loot-zeldzaamheid"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Value estimation assigns a numeric score to game states. AI uses evaluation functions combining multiple factors: material, position, mobility, and king safety. The score guides search toward better moves.",
                "es": "La estimación de valor asigna una puntuación a estados del juego. La IA combina factores: material, posición, movilidad y seguridad del rey. La puntuación guía la búsqueda.",
                "de": "Wertschätzung weist Spielzuständen numerische Werte zu. KI kombiniert Faktoren: Material, Position, Mobilität und König-Sicherheit. Der Wert leitet die Suche zu besseren Zügen.",
                "nl": "Waardeschatting kent numerieke scores toe aan speltoestanden. AI combineert factoren: materiaal, positie, mobiliteit en koningsveiligheid. De score stuurt de zoektocht naar betere zetten."
            }
        },
        {
            "question": {
                "en": "What is position evaluation in board game AI?",
                "es": "¿Qué es la evaluación de posición en la IA de juegos de mesa?",
                "de": "Was ist Positionsbewertung in Brettspiel-KI?",
                "nl": "Wat is positie-evaluatie in bordspel-AI?"
            },
            "options": [
                {
                    "en": "Scoring board states to determine advantageousness",
                    "es": "Puntuar estados del tablero para determinar ventaja",
                    "de": "Bewerten von Brettzuständen zur Bestimmung der Vorteilhaftigkeit",
                    "nl": "Het scoren van bordtoestanden om voordeligheid te bepalen"
                },
                {
                    "en": "Analyzing player physical positioning",
                    "es": "Analizar el posicionamiento físico del jugador",
                    "de": "Analyse der physischen Spielerpositionierung",
                    "nl": "Het analyseren van fysieke spelerpositionering"
                },
                {
                    "en": "Determining character locations on map",
                    "es": "Determinar ubicaciones de personajes en el mapa",
                    "de": "Charakterpositionen auf der Karte bestimmen",
                    "nl": "Het bepalen van karakterlocaties op de kaart"
                },
                {
                    "en": "Evaluating camera angles",
                    "es": "Evaluar ángulos de cámara",
                    "de": "Kamerawinkel bewerten",
                    "nl": "Het evalueren van camerahoeken"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Position evaluation scores board states beyond material count: pawn structure, piece mobility, center control, and king safety. Sophisticated evaluators use hundreds of features weighted by importance.",
                "es": "La evaluación posicional puntúa estados más allá del material: estructura de peones, movilidad, control del centro y seguridad del rey. Los evaluadores sofisticados usan cientos de características.",
                "de": "Positionsbewertung bewertet Stellungen über Material hinaus: Bauernstruktur, Mobilität, Zentrumskontrolle und Königssicherheit. Ausgefeilte Bewerter nutzen Hunderte gewichtete Merkmale.",
                "nl": "Positie-evaluatie scoort bordposities voorbij materiaal: pionstructuur, stukken-mobiliteit, centrumcontrole en koningsveiligheid. Geavanceerde beoordelaars gebruiken honderden gewogen kenmerken."
            }
        },
        {
            "question": {
                "en": "What is material advantage in chess-like game AI?",
                "es": "¿Qué es la ventaja material en la IA de juegos tipo ajedrez?",
                "de": "Was ist Materialvorteil in schachähnlicher Spiele-KI?",
                "nl": "Wat is materiaalvoordeel in schaakachtige game AI?"
            },
            "options": [
                {
                    "en": "Having more or more valuable pieces than the opponent",
                    "es": "Tener más o piezas más valiosas que el oponente",
                    "de": "Mehr oder wertvollere Figuren als der Gegner haben",
                    "nl": "Het hebben van meer of waardevoller stukken dan de tegenstander"
                },
                {
                    "en": "Resource gathering superiority",
                    "es": "Superioridad en recolección de recursos",
                    "de": "Ressourcensammlungs-Überlegenheit",
                    "nl": "Hulpbronnen-verzamel superioriteit"
                },
                {
                    "en": "Graphics texture quality",
                    "es": "Calidad de textura gráfica",
                    "de": "Grafiktextur-Qualität",
                    "nl": "Grafische texture-kwaliteit"
                },
                {
                    "en": "Physical item collection",
                    "es": "Recolección de objetos físicos",
                    "de": "Physische Gegenstandssammlung",
                    "nl": "Fysieke item-verzameling"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Material advantage is calculated by summing piece values (pawn=1, knight/bishop=3, rook=5, queen=9). Evaluation functions weight material heavily, though positional factors can outweigh material in some positions.",
                "es": "La ventaja material se calcula sumando valores de piezas (peón=1, caballo/alfil=3, torre=5, reina=9). Las funciones de evaluación la ponderan mucho, aunque la posición puede superarla.",
                "de": "Materialvorteil berechnet sich aus Figurenwerten (Bauer=1, Springer/Läufer=3, Turm=5, Dame=9). Bewertungsfunktionen gewichten Material stark, obwohl Positionsfaktoren es manchmal überwiegen.",
                "nl": "Materiaalvoordeel berekent stukwaarden op te tellen (pion=1, paard/loper=3, toren=5, dame=9). Evaluatiefuncties wegen materiaal zwaar, hoewel positionele factoren soms de doorslag geven."
            }
        },
        {
            "question": {
                "en": "What is positional advantage in strategic AI?",
                "es": "¿Qué es la ventaja posicional en IA estratégica?",
                "de": "Was ist Positionsvorteil in strategischer KI?",
                "nl": "Wat is positioneel voordeel in strategische AI?"
            },
            "options": [
                {
                    "en": "Having pieces or units in more favorable locations",
                    "es": "Tener piezas o unidades en ubicaciones más favorables",
                    "de": "Figuren oder Einheiten an günstigeren Orten haben",
                    "nl": "Het hebben van stukken of eenheden op gunstigere locaties"
                },
                {
                    "en": "Higher rank in leaderboards",
                    "es": "Rango más alto en tablas de clasificación",
                    "de": "Höherer Rang in Bestenlisten",
                    "nl": "Hogere rang in leaderboards"
                },
                {
                    "en": "Better spawn point locations",
                    "es": "Mejores ubicaciones de puntos de aparición",
                    "de": "Bessere Spawn-Point-Positionen",
                    "nl": "Betere spawn-punt locaties"
                },
                {
                    "en": "Camera angle benefits",
                    "es": "Beneficios del ángulo de cámara",
                    "de": "Kamerawinkel-Vorteile",
                    "nl": "Camerahoek-voordelen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Positional advantage includes piece centralization, outposts, open files for rooks, and space control. AI evaluates positional factors through piece-square tables that score each piece's board location.",
                "es": "La ventaja posicional incluye centralización, avanzadas, columnas abiertas para torres y control del espacio. La IA evalúa esto mediante tablas de pieza-cuadro.",
                "de": "Positionsvorteil umfasst Figurenzentralisierung, Außenposten, offene Linien für Türme und Raumkontrolle. KI bewertet Positionsfaktoren durch Figur-Feld-Tabellen.",
                "nl": "Positioneel voordeel omvat stuk-centralisatie, uitvalsbases, open lijnen voor torens en ruimtecontrole. AI evalueert positiefactoren via stuk-veld-tabellen die elke stuklocatie op het bord scoren."
            }
        },
        {
            "question": {
                "en": "What is zugzwang in game AI contexts?",
                "es": "¿Qué es zugzwang en contextos de IA de juegos?",
                "de": "Was ist Zugzwang in Spiele-KI-Kontexten?",
                "nl": "Wat is zugzwang in game AI-contexten?"
            },
            "options": [
                {
                    "en": "A situation where any move worsens one's position",
                    "es": "Una situación donde cualquier movimiento empeora la posición",
                    "de": "Eine Situation, in der jeder Zug die Position verschlechtert",
                    "nl": "Een situatie waarin elke zet de positie verslechtert"
                },
                {
                    "en": "Forced movement mechanics",
                    "es": "Mecánicas de movimiento forzado",
                    "de": "Erzwungene Bewegungsmechaniken",
                    "nl": "Gedwongen bewegings-mechanismen"
                },
                {
                    "en": "German language localization",
                    "es": "Localización al idioma alemán",
                    "de": "Deutsche Sprachlokalisierung",
                    "nl": "Duitse taal-lokalisatie"
                },
                {
                    "en": "Mandatory turn-taking rules",
                    "es": "Reglas de toma de turnos obligatorias",
                    "de": "Obligatorische Zugzwang-Regeln",
                    "nl": "Verplichte beurtwisselings-regels"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Zugzwang is a chess concept where any move a player makes worsens their position; AI game engines recognize this state through deep evaluation functions.",
                "es": "Zugzwang es un concepto de ajedrez donde cualquier movimiento empeora la posición; los motores de IA reconocen este estado mediante funciones de evaluación profunda.",
                "de": "Zugzwang ist ein Schachkonzept, bei dem jeder Zug die Position verschlechtert; KI-Engines erkennen diesen Zustand durch tiefe Bewertungsfunktionen.",
                "nl": "Zugzwang is een schaakconcept waarbij elke zet de positie verslechtert; AI-engines herkennen deze toestand via diepe evaluatiefuncties."
            }
        },
        {
            "question": {
                "en": "What is behavior cloning in game AI?",
                "es": "¿Qué es la clonación de comportamiento en IA de juegos?",
                "de": "Was ist Verhaltensklonierung in Spiele-KI?",
                "nl": "Wat is gedragskloning in game AI?"
            },
            "options": [
                {
                    "en": "Training AI to imitate recorded human gameplay",
                    "es": "Entrenar IA para imitar jugadas humanas grabadas",
                    "de": "KI trainieren um aufgezeichnetes menschliches Gameplay zu imitieren",
                    "nl": "AI trainen om opgenomen menselijk gameplay te imiteren"
                },
                {
                    "en": "Duplicating game characters",
                    "es": "Duplicar personajes del juego",
                    "de": "Spielcharaktere duplizieren",
                    "nl": "Spelkarakters dupliceren"
                },
                {
                    "en": "Copying enemy AI patterns",
                    "es": "Copiar patrones de IA enemiga",
                    "de": "Feind-KI-Muster kopieren",
                    "nl": "Vijandige AI-patronen kopiëren"
                },
                {
                    "en": "Generating identical levels",
                    "es": "Generando niveles idénticos",
                    "de": "Identische Level generieren",
                    "nl": "Identieke levels genereren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Behavior cloning uses supervised learning on recorded expert gameplay to train an AI agent that mimics human strategies.",
                "es": "La clonación de comportamiento usa aprendizaje supervisado sobre jugadas expertas grabadas para entrenar un agente de IA que imita estrategias humanas.",
                "de": "Verhaltensklonierung nutzt überwachtes Lernen auf aufgezeichnetem Experten-Gameplay um einen KI-Agenten zu trainieren der menschliche Strategien imitiert.",
                "nl": "Gedragskloning gebruikt gesuperviseerd leren op opgenomen expert-gameplay om een AI-agent te trainen die menselijke strategieën nabootst."
            }
        },
        {
            "question": {
                "en": "What is the role of a reward shaping in reinforcement learning for games?",
                "es": "¿Cuál es el papel del moldeado de recompensas en el aprendizaje por refuerzo para juegos?",
                "de": "Welche Rolle spielt die Belohnungsgestaltung beim Reinforcement Learning für Spiele?",
                "nl": "Wat is de rol van beloningsvormgeving in reinforcement learning voor games?"
            },
            "options": [
                {
                    "en": "Adding intermediate rewards to guide learning towards desired behavior",
                    "es": "Añadir recompensas intermedias para guiar el aprendizaje hacia el comportamiento deseado",
                    "de": "Hinzufügen von Zwischenbelohnungen um das Lernen auf gewünschtes Verhalten zu lenken",
                    "nl": "Tussenliggende beloningen toevoegen om leren te sturen naar gewenst gedrag"
                },
                {
                    "en": "Giving players more coins",
                    "es": "Dar más monedas a los jugadores",
                    "de": "Spielern mehr Münzen geben",
                    "nl": "Spelers meer munten geven"
                },
                {
                    "en": "Adjusting difficulty settings",
                    "es": "Ajustar configuraciones de dificultad",
                    "de": "Schwierigkeitseinstellungen anpassen",
                    "nl": "Moeilijkheidsgraadinstellingen aanpassen"
                },
                {
                    "en": "Designing visual reward animations",
                    "es": "Diseñar animaciones de recompensa visual",
                    "de": "Visuelle Belohnungsanimationen gestalten",
                    "nl": "Visuele beloningsanimaties ontwerpen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Reward shaping provides intermediate signals to help an RL agent learn faster, particularly in games with sparse natural rewards.",
                "es": "El moldeado de recompensas proporciona señales intermedias para ayudar a un agente RL a aprender más rápido, especialmente en juegos con recompensas naturales dispersas.",
                "de": "Belohnungsgestaltung liefert Zwischensignale um einen RL-Agenten schneller lernen zu lassen, besonders in Spielen mit seltenen natürlichen Belohnungen.",
                "nl": "Beloningsvormgeving biedt tussensignalen om een RL-agent sneller te laten leren, vooral in games met schaarse natuurlijke beloningen."
            }
        },
        {
            "question": {
                "en": "What is difficulty scaling in game AI?",
                "es": "¿Qué es la escalada de dificultad en IA de juegos?",
                "de": "Was ist Schwierigkeitsskalierung in Spiele-KI?",
                "nl": "Wat is moeilijkheidsschaling in game AI?"
            },
            "options": [
                {
                    "en": "Automatically adjusting AI challenge to match player skill",
                    "es": "Ajustar automáticamente el desafío de IA para igualar la habilidad del jugador",
                    "de": "Automatische Anpassung der KI-Herausforderung an die Spielerfähigkeit",
                    "nl": "De AI-uitdaging automatisch aanpassen aan de vaardigheid van de speler"
                },
                {
                    "en": "Making game graphics larger",
                    "es": "Agrandar gráficos del juego",
                    "de": "Spielgrafiken vergrößern",
                    "nl": "Spelgrafische elementen groter maken"
                },
                {
                    "en": "Increasing enemy health points",
                    "es": "Aumentar puntos de salud de enemigos",
                    "de": "Lebenspunkte von Feinden erhöhen",
                    "nl": "Gezondheidspoints van vijanden verhogen"
                },
                {
                    "en": "Adding more levels to a game",
                    "es": "Añadir más niveles a un juego",
                    "de": "Einem Spiel mehr Level hinzufügen",
                    "nl": "Meer niveaus aan een spel toevoegen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Difficulty scaling, or dynamic difficulty adjustment, uses AI to monitor player performance and adjust opponent strength to maintain an engaging challenge.",
                "es": "La escalada de dificultad, o ajuste dinámico de dificultad, usa IA para monitorear el rendimiento del jugador y ajustar la fortaleza del oponente.",
                "de": "Schwierigkeitsskalierung nutzt KI um die Spielerleistung zu überwachen und die Gegnerstärke anzupassen.",
                "nl": "Moeilijkheidsschaling gebruikt AI om spelersprestaties te monitoren en de sterkte van tegenstanders aan te passen."
            }
        },
        {
            "question": {
                "en": "What is a game tree in AI?",
                "es": "¿Qué es un árbol de juego en IA?",
                "de": "Was ist ein Spielbaum in KI?",
                "nl": "Wat is een spelentree in AI?"
            },
            "options": [
                {
                    "en": "A tree structure representing all possible game states and moves",
                    "es": "Una estructura de árbol que representa todos los estados y movimientos posibles del juego",
                    "de": "Eine Baumstruktur die alle möglichen Spielzustände und Züge darstellt",
                    "nl": "Een boomstructuur die alle mogelijke spelstaten en zetten vertegenwoordigt"
                },
                {
                    "en": "A decorative element in game environments",
                    "es": "Un elemento decorativo en entornos de juego",
                    "de": "Ein dekoratives Element in Spielumgebungen",
                    "nl": "Een decoratief element in spelomgevingen"
                },
                {
                    "en": "A hierarchy of game objects",
                    "es": "Una jerarquía de objetos del juego",
                    "de": "Eine Hierarchie von Spielobjekten",
                    "nl": "Een hiërarchie van spelobijecten"
                },
                {
                    "en": "A save file structure",
                    "es": "Una estructura de archivo de guardado",
                    "de": "Eine Speicherdateistruktur",
                    "nl": "Een opslagbestandsstructuur"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A game tree is a graph representing all possible game states branching from each position, used by AI algorithms like minimax to evaluate optimal moves.",
                "es": "Un árbol de juego es un grafo que representa todos los estados posibles del juego ramificados desde cada posición, usado por algoritmos de IA como minimax.",
                "de": "Ein Spielbaum ist ein Graph der alle möglichen Spielzustände von jeder Position aus darstellt, verwendet von KI-Algorithmen wie Minimax.",
                "nl": "Een spelentree is een graaf die alle mogelijke spelstaten vanuit elke positie vertegenwoordigt, gebruikt door AI-algoritmen zoals minimax."
            }
        },
        {
            "question": {
                "en": "What is the exploration-exploitation trade-off in game AI?",
                "es": "¿Cuál es el dilema exploración-explotación en IA de juegos?",
                "de": "Was ist der Explorations-Exploitations-Kompromiss in Spiele-KI?",
                "nl": "Wat is het exploratie-exploitatie dilemma in game AI?"
            },
            "options": [
                {
                    "en": "Balancing trying new strategies vs. using known winning strategies",
                    "es": "Equilibrar probar nuevas estrategias vs. usar estrategias ganadoras conocidas",
                    "de": "Balance zwischen Ausprobieren neuer Strategien und Verwenden bekannter Gewinnstrategien",
                    "nl": "Balans tussen het uitproberen van nieuwe strategieën en het benutten van bekende winnende"
                },
                {
                    "en": "Choosing between story modes and combat",
                    "es": "Elegir entre modos de historia y combate",
                    "de": "Wahl zwischen Story-Modus und Kampf",
                    "nl": "Kiezen tussen verhaalmodus en gevecht"
                },
                {
                    "en": "Mining resources in games",
                    "es": "Extraer recursos en juegos",
                    "de": "Ressourcen in Spielen abbauen",
                    "nl": "Middelen winnen in games"
                },
                {
                    "en": "Exploring map areas vs. fighting enemies",
                    "es": "Explorar áreas del mapa vs. luchar contra enemigos",
                    "de": "Kartengebiete erkunden vs. Feinde bekämpfen",
                    "nl": "Kaartgebieden verkennen vs. vijanden bestrijden"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The exploration-exploitation trade-off balances discovering new strategies versus using strategies known to work, a fundamental challenge in reinforcement learning for games.",
                "es": "El dilema exploración-explotación equilibra descubrir nuevas estrategias versus usar estrategias conocidas que funcionan, un desafío fundamental en RL para juegos.",
                "de": "Der Explorations-Exploitations-Kompromiss balanciert die Entdeckung neuer Strategien gegen die Verwendung bekannter funktionierender Strategien.",
                "nl": "Het exploratie-exploitatiedilemma balanceert het ontdekken van nieuwe strategieën versus het gebruiken van bekende werkende strategieën."
            }
        },
        {
            "question": {
                "en": "What is a heuristic evaluation function in game AI?",
                "es": "¿Qué es una función de evaluación heurística en IA de juegos?",
                "de": "Was ist eine heuristische Bewertungsfunktion in Spiele-KI?",
                "nl": "Wat is een heuristische evaluatiefunctie in game AI?"
            },
            "options": [
                {
                    "en": "A function that estimates the value of a game state without searching further",
                    "es": "Una función que estima el valor de un estado de juego sin buscar más",
                    "de": "Eine Funktion die den Wert eines Spielzustands schätzt ohne weiter zu suchen",
                    "nl": "Een functie die de waarde van een spelstaat schat zonder verder te zoeken"
                },
                {
                    "en": "A tutorial hint system",
                    "es": "Un sistema de pistas tutorial",
                    "de": "Ein Tutorial-Hinweissystem",
                    "nl": "Een tutorial hint systeem"
                },
                {
                    "en": "A random number generator",
                    "es": "Un generador de números aleatorios",
                    "de": "Ein Zufallszahlengenerator",
                    "nl": "Een willekeurige numbergenerator"
                },
                {
                    "en": "A scoring system for players",
                    "es": "Un sistema de puntuación para jugadores",
                    "de": "Ein Punktesystem für Spieler",
                    "nl": "Een scoresysteem voor spelers"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Heuristic evaluation functions approximate the value of non-terminal game states, allowing AI to make intelligent decisions without exhaustive search.",
                "es": "Las funciones de evaluación heurística aproximan el valor de estados de juego no terminales, permitiendo a la IA tomar decisiones inteligentes sin búsqueda exhaustiva.",
                "de": "Heuristische Bewertungsfunktionen approximieren den Wert nicht-terminaler Spielzustände und ermöglichen KI intelligente Entscheidungen ohne erschöpfende Suche.",
                "nl": "Heuristische evaluatiefuncties benaderen de waarde van niet-terminale spelstaten, waardoor AI intelligente beslissingen kan nemen zonder uitputtend zoeken."
            }
        },
        {
            "question": {
                "en": "What is iterative deepening in game tree search?",
                "es": "¿Qué es la profundización iterativa en la búsqueda de árbol de juego?",
                "de": "Was ist iterative Vertiefung bei der Spielbaumsuche?",
                "nl": "Wat is iteratieve verdieping in spelentree zoeken?"
            },
            "options": [
                {
                    "en": "Searching progressively deeper levels of the game tree until time runs out",
                    "es": "Buscar niveles progresivamente más profundos del árbol de juego hasta que se acabe el tiempo",
                    "de": "Progressiv tiefere Ebenen des Spielbaums durchsuchen bis die Zeit abläuft",
                    "nl": "Progressief diepere niveaus van de spelentree doorzoeken totdat de tijd op is"
                },
                {
                    "en": "Replaying matches at higher difficulty",
                    "es": "Repetir partidas en mayor dificultad",
                    "de": "Matches bei höherer Schwierigkeit wiederholen",
                    "nl": "Wedstrijden op hogere moeilijkheidsgraad herspelen"
                },
                {
                    "en": "Loading game levels one by one",
                    "es": "Cargar niveles del juego uno por uno",
                    "de": "Spiellevel nacheinander laden",
                    "nl": "Spellevels één voor één laden"
                },
                {
                    "en": "Incrementally unlocking game content",
                    "es": "Desbloquear contenido del juego gradualmente",
                    "de": "Spielinhalte schrittweise freischalten",
                    "nl": "Spelinhoud geleidelijk ontgrendelen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Iterative deepening depth-first search combines the space efficiency of DFS with BFS's ability to find the best move within a given time budget.",
                "es": "La búsqueda en profundidad con profundización iterativa combina la eficiencia espacial de DFS con la capacidad de BFS para encontrar el mejor movimiento en el tiempo disponible.",
                "de": "Iterative Tiefensuche kombiniert die Raumeffizienz von DFS mit BFS's Fähigkeit den besten Zug im gegebenen Zeitbudget zu finden.",
                "nl": "Iteratieve verdieping depth-first search combineert de ruimte-efficiëntie van DFS met de mogelijkheid van BFS om de beste zet binnen het tijdsbudget te vinden."
            }
        },
        {
            "question": {
                "en": "What is a finite state machine in game AI?",
                "es": "¿Qué es una máquina de estados finitos en IA de juegos?",
                "de": "Was ist ein endlicher Zustandsautomat in Spiele-KI?",
                "nl": "Wat is een eindige toestandsmachine in game AI?"
            },
            "options": [
                {
                    "en": "A model with predefined states and transitions controlling AI behavior",
                    "es": "Un modelo con estados y transiciones predefinidos que controlan el comportamiento de IA",
                    "de": "Ein Modell mit vordefinierten Zuständen und Übergängen das KI-Verhalten steuert",
                    "nl": "Een model met vooraf gedefinieerde toestanden en transities die AI-gedrag sturen"
                },
                {
                    "en": "A machine that runs forever without stopping",
                    "es": "Una máquina que funciona indefinidamente sin parar",
                    "de": "Eine Maschine die ewig ohne Stopp läuft",
                    "nl": "Een machine die eeuwig zonder stop draait"
                },
                {
                    "en": "A hardware component in gaming consoles",
                    "es": "Un componente de hardware en consolas de juegos",
                    "de": "Ein Hardwarekomponent in Spielkonsolen",
                    "nl": "Een hardwarecomponent in gameconsoles"
                },
                {
                    "en": "A game save state system",
                    "es": "Un sistema de estado de guardado de juego",
                    "de": "Ein Spielspeicherstandssystem",
                    "nl": "Een spel opslagstaatsysteem"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Finite state machines are widely used in game AI to control NPC behavior, with states like patrol, alert, and attack switching based on game events.",
                "es": "Las máquinas de estados finitos se usan ampliamente en IA de juegos para controlar el comportamiento de NPCs, con estados como patrullar, alerta y atacar.",
                "de": "Endliche Zustandsautomaten werden in Spiele-KI häufig zur Steuerung von NPC-Verhalten eingesetzt, mit Zuständen wie Patrouille, Alarm und Angriff.",
                "nl": "Eindige toestandsmachines worden breed gebruikt in game AI om NPC-gedrag te sturen, met toestanden als patrouilleren, alarmeren en aanvallen."
            }
        },
        {
            "question": {
                "en": "What is pathfinding in game AI?",
                "es": "¿Qué es la búsqueda de rutas en IA de juegos?",
                "de": "Was ist Pfadfindung in Spiele-KI?",
                "nl": "Wat is padzoeken in game AI?"
            },
            "options": [
                {
                    "en": "Algorithms that find the best route for a character to navigate",
                    "es": "Algoritmos que encuentran la mejor ruta para que un personaje navegue",
                    "de": "Algorithmen die den besten Weg für einen Charakter zur Navigation finden",
                    "nl": "Algoritmen die de beste route vinden voor een karakter om te navigeren"
                },
                {
                    "en": "Finding hidden game items",
                    "es": "Encontrar objetos ocultos en el juego",
                    "de": "Versteckte Spielgegenstände finden",
                    "nl": "Verborgen spelitems vinden"
                },
                {
                    "en": "Drawing roads in game worlds",
                    "es": "Dibujar caminos en mundos de juego",
                    "de": "Wege in Spielwelten zeichnen",
                    "nl": "Wegen tekenen in spelwerelden"
                },
                {
                    "en": "Navigating game menus",
                    "es": "Navegar menús del juego",
                    "de": "Durch Spielmenüs navigieren",
                    "nl": "Door spelmenus navigeren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Pathfinding algorithms like A* find optimal routes for game characters to move through environments while avoiding obstacles.",
                "es": "Los algoritmos de búsqueda de rutas como A* encuentran rutas óptimas para que los personajes del juego se muevan por entornos evitando obstáculos.",
                "de": "Pfadfindungsalgorithmen wie A* finden optimale Routen für Spielcharaktere um durch Umgebungen zu navigieren und Hindernisse zu vermeiden.",
                "nl": "Padzoekalgoritmen zoals A* vinden optimale routes voor spelkarakters om door omgevingen te navigeren terwijl obstakels worden vermeden."
            }
        },
        {
            "question": {
                "en": "What is the Elo rating system used for in competitive gaming AI?",
                "es": "¿Para qué se usa el sistema de clasificación Elo en IA de juegos competitivos?",
                "de": "Wofür wird das Elo-Bewertungssystem in kompetitiver Spiele-KI verwendet?",
                "nl": "Waarvoor wordt het Elo-beoordelingssysteem gebruikt in competitieve game AI?"
            },
            "options": [
                {
                    "en": "Measuring relative skill level of players or AI agents",
                    "es": "Medir el nivel de habilidad relativa de jugadores o agentes de IA",
                    "de": "Messen des relativen Skill-Levels von Spielern oder KI-Agenten",
                    "nl": "Het meten van het relatieve vaardigheidsniveau van spelers of AI-agenten"
                },
                {
                    "en": "Sorting game inventory items",
                    "es": "Ordenar objetos del inventario del juego",
                    "de": "Spielinventargegenstände sortieren",
                    "nl": "Spel inventaritems sorteren"
                },
                {
                    "en": "Calculating game graphics quality",
                    "es": "Calcular la calidad gráfica del juego",
                    "de": "Spielgrafikqualität berechnen",
                    "nl": "Spelgrafische kwaliteit berekenen"
                },
                {
                    "en": "Ranking game servers by speed",
                    "es": "Clasificar servidores de juego por velocidad",
                    "de": "Spielserver nach Geschwindigkeit einordnen",
                    "nl": "Spelservers rangschikken op snelheid"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The Elo rating system quantifies player or AI skill by predicting match outcomes; AI systems like AlphaGo achieved superhuman Elo ratings.",
                "es": "El sistema de clasificación Elo cuantifica la habilidad del jugador o IA prediciendo resultados de partidas; sistemas de IA como AlphaGo lograron clasificaciones Elo sobrehumanas.",
                "de": "Das Elo-System quantifiziert Spieler- oder KI-Fähigkeiten durch Vorhersage von Match-Ergebnissen; KI-Systeme wie AlphaGo erzielten übermenschliche Elo-Wertungen.",
                "nl": "Het Elo-beoordelingssysteem kwantificeert speler- of AI-vaardigheden door wedstrijdresultaten te voorspellen; AI-systemen zoals AlphaGo behaalden bovenmenselijke Elo-beoordelingen."
            }
        },
        {
            "question": {
                "en": "What is procedural content generation (PCG)?",
                "es": "¿Qué es la generación de contenido procedural (GCP)?",
                "de": "Was ist prozedurale Inhaltsgenerierung (PCG)?",
                "nl": "Wat is procedurele contentgeneratie (PCG)?"
            },
            "options": [
                {
                    "en": "Using algorithms to automatically create game content like levels and items",
                    "es": "Usar algoritmos para crear automáticamente contenido del juego como niveles y objetos",
                    "de": "Algorithmen verwenden um Spielinhalte wie Level und Gegenstände automatisch zu erstellen",
                    "nl": "Algoritmen gebruiken om spelinhoud zoals niveaus en items automatisch te creëren"
                },
                {
                    "en": "Writing game design documents",
                    "es": "Escribir documentos de diseño de juegos",
                    "de": "Spieldesigndokumente schreiben",
                    "nl": "Spelontwerpsdocumenten schrijven"
                },
                {
                    "en": "Hiring content creators",
                    "es": "Contratar creadores de contenido",
                    "de": "Content-Creator einstellen",
                    "nl": "Content creators inhuren"
                },
                {
                    "en": "Moderating user-generated content",
                    "es": "Moderar contenido generado por usuarios",
                    "de": "Nutzergenerierten Inhalt moderieren",
                    "nl": "Door gebruikers gegenereerde content modereren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "PCG uses algorithmic methods to generate game content dynamically, as seen in games like Minecraft and No Man's Sky, reducing manual design effort.",
                "es": "La GCP usa métodos algorítmicos para generar contenido del juego dinámicamente, como se ve en juegos como Minecraft y No Man's Sky.",
                "de": "PCG verwendet algorithmische Methoden um Spielinhalte dynamisch zu generieren, wie in Spielen wie Minecraft und No Man's Sky.",
                "nl": "PCG gebruikt algoritmische methoden om spelinhoud dynamisch te genereren, zoals te zien in games als Minecraft en No Man's Sky."
            }
        },
        {
            "question": {
                "en": "What is the purpose of a navigation mesh (navmesh) in game AI?",
                "es": "¿Cuál es el propósito de una malla de navegación (navmesh) en IA de juegos?",
                "de": "Welchen Zweck hat ein Navigationsgitter (Navmesh) in Spiele-KI?",
                "nl": "Wat is het doel van een navigatiemesh (navmesh) in game AI?"
            },
            "options": [
                {
                    "en": "Defining walkable areas for NPC pathfinding",
                    "es": "Definir áreas caminables para búsqueda de rutas de NPCs",
                    "de": "Begehbare Bereiche für NPC-Pfadfindung definieren",
                    "nl": "Begaanbare gebieden definiëren voor NPC padzoeken"
                },
                {
                    "en": "Rendering 3D game graphics",
                    "es": "Renderizar gráficos 3D del juego",
                    "de": "3D-Spielgrafiken rendern",
                    "nl": "3D spelgrafische elementen renderen"
                },
                {
                    "en": "Connecting game servers",
                    "es": "Conectar servidores de juego",
                    "de": "Spielserver verbinden",
                    "nl": "Spelservers verbinden"
                },
                {
                    "en": "Tracking player inventory",
                    "es": "Rastrear inventario del jugador",
                    "de": "Spielerinventar verfolgen",
                    "nl": "Spelerspersonage inventaris volgen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A navmesh is a polygon mesh that defines passable surfaces in a 3D game environment, enabling efficient pathfinding for NPCs.",
                "es": "Una navmesh es una malla de polígonos que define superficies transitables en un entorno de juego 3D, habilitando búsqueda de rutas eficiente para NPCs.",
                "de": "Ein Navmesh ist ein Polygongitter das passierbare Flächen in einer 3D-Spielumgebung definiert und effiziente Pfadfindung für NPCs ermöglicht.",
                "nl": "Een navmesh is een polygonennet dat begaanbare oppervlakken in een 3D-spelomgeving definieert en efficiënt padzoeken voor NPC's mogelijk maakt."
            }
        },
        {
            "question": {
                "en": "What is player modeling in game AI?",
                "es": "¿Qué es el modelado de jugadores en IA de juegos?",
                "de": "Was ist Spielermodellierung in Spiele-KI?",
                "nl": "Wat is spelersmodellering in game AI?"
            },
            "options": [
                {
                    "en": "Building a computational representation of individual player behavior and preferences",
                    "es": "Construir una representación computacional del comportamiento del jugador",
                    "de": "Aufbau einer computergestützten Darstellung des individuellen Spielerverhaltens und -präferenzen",
                    "nl": "Een computationele representatie bouwen van individueel spelersgedrag en -voorkeuren"
                },
                {
                    "en": "Creating 3D character models",
                    "es": "Crear modelos de personajes 3D",
                    "de": "3D-Charaktermodelle erstellen",
                    "nl": "3D karakter modellen maken"
                },
                {
                    "en": "Managing player accounts",
                    "es": "Gestionar cuentas de jugadores",
                    "de": "Spielerkonten verwalten",
                    "nl": "Spelersaccounts beheren"
                },
                {
                    "en": "Simulating physics for player movement",
                    "es": "Simular física para el movimiento del jugador",
                    "de": "Physik für Spielerbewegung simulieren",
                    "nl": "Fysica simuleren voor spelersbeweging"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Player modeling creates computational profiles of individual players to personalize game difficulty, pacing, and content recommendations.",
                "es": "El modelado de jugadores crea perfiles computacionales de jugadores individuales para personalizar la dificultad del juego, ritmo y recomendaciones de contenido.",
                "de": "Spielermodellierung erstellt computationale Profile einzelner Spieler zur Personalisierung von Spielschwierigkeit, Tempo und Inhaltsempfehlungen.",
                "nl": "Spelersmodellering maakt computationele profielen van individuele spelers voor het personaliseren van spelmoeilijkheid, tempo en contentaanbevelingen."
            }
        },
        {
            "question": {
                "en": "What is the minimax algorithm used for?",
                "es": "¿Para qué se usa el algoritmo minimax?",
                "de": "Wofür wird der Minimax-Algorithmus verwendet?",
                "nl": "Waarvoor wordt het minimax-algoritme gebruikt?"
            },
            "options": [
                {
                    "en": "Finding the best move by minimizing the opponent's maximum score",
                    "es": "Encontrar el mejor movimiento minimizando la puntuación máxima del oponente",
                    "de": "Den besten Zug finden indem die maximale Punktzahl des Gegners minimiert wird",
                    "nl": "De beste zet vinden door de maximale score van de tegenstander te minimaliseren"
                },
                {
                    "en": "Reducing game file sizes",
                    "es": "Reducir el tamaño de archivos del juego",
                    "de": "Spieldateigrößen reduzieren",
                    "nl": "Spelbestandsgroottes verminderen"
                },
                {
                    "en": "Balancing player statistics",
                    "es": "Equilibrar estadísticas del jugador",
                    "de": "Spielerstatistiken ausbalancieren",
                    "nl": "Spelersstatistieken in evenwicht brengen"
                },
                {
                    "en": "Compressing game audio",
                    "es": "Comprimir audio del juego",
                    "de": "Spielaudio komprimieren",
                    "nl": "Spelaudio comprimeren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Minimax assumes both players play optimally; the maximizing player maximizes their score while the minimizing player minimizes it, finding the game-theoretically optimal move.",
                "es": "Minimax asume que ambos jugadores juegan óptimamente; el jugador maximizador maximiza su puntuación mientras el minimizador la minimiza.",
                "de": "Minimax geht davon aus dass beide Spieler optimal spielen; der maximierende Spieler maximiert seine Punktzahl während der minimierende sie reduziert.",
                "nl": "Minimax gaat ervan uit dat beide spelers optimaal spelen; de maximaliserende speler maximaliseert zijn score terwijl de minimaliserende speler deze minimaliseert."
            }
        },
        {
            "question": {
                "en": "What is emergent behavior in game AI?",
                "es": "¿Qué es el comportamiento emergente en IA de juegos?",
                "de": "Was ist emergentes Verhalten in Spiele-KI?",
                "nl": "Wat is emergent gedrag in game AI?"
            },
            "options": [
                {
                    "en": "Complex behaviors arising from simple rules without explicit programming",
                    "es": "Comportamientos complejos que surgen de reglas simples sin programación explícita",
                    "de": "Komplexe Verhaltensweisen die aus einfachen Regeln ohne explizite Programmierung entstehen",
                    "nl": "Complexe gedragingen die voortkomen uit eenvoudige regels zonder expliciete programmering"
                },
                {
                    "en": "Bugs that appear unexpectedly",
                    "es": "Errores que aparecen inesperadamente",
                    "de": "Fehler die unerwartet auftreten",
                    "nl": "Bugs die onverwachts verschijnen"
                },
                {
                    "en": "New game updates and patches",
                    "es": "Nuevas actualizaciones y parches del juego",
                    "de": "Neue Spielupdates und Patches",
                    "nl": "Nieuwe spelupdates en patches"
                },
                {
                    "en": "Player-created content",
                    "es": "Contenido creado por jugadores",
                    "de": "Von Spielern erstellte Inhalte",
                    "nl": "Door spelers gecreëerde inhoud"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Emergent behavior in game AI occurs when complex interactions arise from simple individual rules, as seen in flocking simulations and open-world NPC ecosystems.",
                "es": "El comportamiento emergente en IA de juegos ocurre cuando interacciones complejas surgen de reglas individuales simples, como en simulaciones de bandadas y ecosistemas de NPC.",
                "de": "Emergentes Verhalten in Spiele-KI entsteht wenn komplexe Interaktionen aus einfachen individuellen Regeln entstehen, wie bei Schwarmsimulationen.",
                "nl": "Emergent gedrag in game AI treedt op wanneer complexe interacties voortkomen uit eenvoudige individuele regels, zoals bij zwermsimuaties en NPC-ecosystemen."
            }
        },
        {
            "question": {
                "en": "What is alpha-beta pruning in game AI?",
                "es": "¿Qué es la poda alfa-beta en IA de juegos?",
                "de": "Was ist Alpha-Beta-Beschneidung in Spiele-KI?",
                "nl": "Wat is alfa-beta snoeiing in game AI?"
            },
            "options": [
                {
                    "en": "An optimization that skips branches of the game tree that cannot affect the final decision",
                    "es": "Una optimización que omite ramas del árbol de juego que no pueden afectar la decisión final",
                    "de": "Eine Optimierung die Äste des Spielbaums überspringt die die Endentscheidung nicht beeinflussen",
                    "nl": "Een optimalisatie die branches van de spelentree overslaat die de uitkomst niet beïnvloeden"
                },
                {
                    "en": "Removing low-quality graphics from games",
                    "es": "Eliminar gráficos de baja calidad de juegos",
                    "de": "Grafiken niedriger Qualität aus Spielen entfernen",
                    "nl": "Grafische elementen van lage kwaliteit uit games verwijderen"
                },
                {
                    "en": "Filtering inappropriate game content",
                    "es": "Filtrar contenido inapropiado del juego",
                    "de": "Unangemessene Spielinhalte filtern",
                    "nl": "Ongepaste spelinhoud filteren"
                },
                {
                    "en": "Cutting game development costs",
                    "es": "Reducir costos de desarrollo del juego",
                    "de": "Spielentwicklungskosten senken",
                    "nl": "Spelontwikkelingskosten verlagen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Alpha-beta pruning reduces the number of nodes evaluated in a minimax search by eliminating branches that cannot improve the current best move.",
                "es": "La poda alfa-beta reduce el número de nodos evaluados en una búsqueda minimax eliminando ramas que no pueden mejorar el mejor movimiento actual.",
                "de": "Alpha-Beta-Beschneidung reduziert die Anzahl ausgewerteter Knoten in einer Minimax-Suche durch Eliminierung von Ästen die den aktuell besten Zug nicht verbessern können.",
                "nl": "Alfa-beta snoeiing vermindert het aantal geëvalueerde knooppunten in een minimax-zoekopdracht door branches te elimineren die de huidige beste zet niet kunnen verbeteren."
            }
        },
        {
            "question": {
                "en": "What is a utility function in game AI decision-making?",
                "es": "¿Qué es una función de utilidad en la toma de decisiones de IA de juegos?",
                "de": "Was ist eine Nutzenfunktion bei der KI-Entscheidungsfindung in Spielen?",
                "nl": "Wat is een nutsfunctie in game AI besluitvorming?"
            },
            "options": [
                {
                    "en": "A function that scores possible actions to help an AI choose the best one",
                    "es": "Una función que puntúa acciones posibles para ayudar a una IA a elegir la mejor",
                    "de": "Eine Funktion die mögliche Aktionen bewertet um einer KI zu helfen die beste zu wählen",
                    "nl": "Een functie die mogelijke acties beoordeelt om een AI te helpen de beste te kiezen"
                },
                {
                    "en": "A system for calculating game bonuses",
                    "es": "Un sistema para calcular bonos del juego",
                    "de": "Ein System zur Berechnung von Spielboni",
                    "nl": "Een systeem voor het berekenen van spelbonus"
                },
                {
                    "en": "An in-game currency calculator",
                    "es": "Una calculadora de moneda del juego",
                    "de": "Ein In-Game-Währungsrechner",
                    "nl": "Een in-game valutacalculator"
                },
                {
                    "en": "A server load balancing tool",
                    "es": "Una herramienta de balanceo de carga del servidor",
                    "de": "Ein Serverlastausgleichswerkzeug",
                    "nl": "Een serverlastverdelingstool"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Utility-based AI assigns numerical scores to possible actions based on multiple factors, selecting the action with the highest utility for more nuanced decision-making.",
                "es": "La IA basada en utilidad asigna puntuaciones numéricas a acciones posibles basándose en múltiples factores, seleccionando la acción de mayor utilidad.",
                "de": "Nutzenbasierte KI weist möglichen Aktionen basierend auf mehreren Faktoren numerische Werte zu und wählt die Aktion mit dem höchsten Nutzen.",
                "nl": "Op nut gebaseerde AI kent numerieke scores toe aan mogelijke acties op basis van meerdere factoren en selecteert de actie met het hoogste nut."
            }
        },
        {
            "question": {
                "en": "What is a behavior tree in game development?",
                "es": "¿Qué es un árbol de comportamiento en desarrollo de juegos?",
                "de": "Was ist ein Verhaltensbaum in der Spielentwicklung?",
                "nl": "Wat is een gedragsboom in spelontwikkeling?"
            },
            "options": [
                {
                    "en": "A hierarchical structure that controls complex AI agent decision-making",
                    "es": "Una estructura jerárquica que controla la toma de decisiones complejas de agentes IA",
                    "de": "Eine hierarchische Struktur die komplexe KI-Agenten-Entscheidungsfindung steuert",
                    "nl": "Een hiërarchische structuur die complexe AI-agent besluitvorming stuurt"
                },
                {
                    "en": "A tree-shaped level design element",
                    "es": "Un elemento de diseño de nivel en forma de árbol",
                    "de": "Ein baumförmiges Level-Designelement",
                    "nl": "Een boomvormig niveauontwerpelement"
                },
                {
                    "en": "A data structure for storing achievements",
                    "es": "Una estructura de datos para almacenar logros",
                    "de": "Eine Datenstruktur zum Speichern von Erfolgen",
                    "nl": "Een gegevensstructuur voor het opslaan van prestaties"
                },
                {
                    "en": "A diagram showing game progress",
                    "es": "Un diagrama que muestra el progreso del juego",
                    "de": "Ein Diagramm das Spielfortschritt zeigt",
                    "nl": "Een diagram dat spelvoortgang toont"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Behavior trees are a popular AI architecture in game development that modularly combine sequences, selectors, and leaf actions to control NPC behavior.",
                "es": "Los árboles de comportamiento son una arquitectura de IA popular en desarrollo de juegos que combina modularmente secuencias, selectores y acciones hoja.",
                "de": "Verhaltensbäume sind eine populäre KI-Architektur in der Spielentwicklung die modular Sequenzen, Selektoren und Blattaktionen kombiniert.",
                "nl": "Gedragsbomen zijn een populaire AI-architectuur in spelontwikkeling die sequenties, selectors en bladacties modulair combineert voor NPC-gedrag."
            }
        },
        {
            "question": {
                "en": "What is self-play in game AI training?",
                "es": "¿Qué es el auto-juego en entrenamiento de IA de juegos?",
                "de": "Was ist Selbstspiel beim Training von Spiele-KI?",
                "nl": "Wat is zelfspelen in game AI training?"
            },
            "options": [
                {
                    "en": "An AI training method where the agent plays against itself to improve",
                    "es": "Un método de entrenamiento de IA donde el agente juega contra sí mismo para mejorar",
                    "de": "Eine KI-Trainingsmethode bei der der Agent gegen sich selbst spielt um sich zu verbessern",
                    "nl": "Een AI-trainingsmethode waarbij de agent tegen zichzelf speelt om te verbeteren"
                },
                {
                    "en": "Playing games in single-player mode",
                    "es": "Jugar juegos en modo de un jugador",
                    "de": "Spiele im Einzelspielermodus spielen",
                    "nl": "Games spelen in eenspelersmodus"
                },
                {
                    "en": "Automatically starting a game",
                    "es": "Iniciar automáticamente un juego",
                    "de": "Ein Spiel automatisch starten",
                    "nl": "Een spel automatisch starten"
                },
                {
                    "en": "Game trailers that play automatically",
                    "es": "Tráilers del juego que se reproducen automáticamente",
                    "de": "Spieltrailer die automatisch abspielen",
                    "nl": "Speltrailers die automatisch afspelen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Self-play was key to AlphaGo and AlphaZero's success; by playing against itself, the AI generates training data and progressively improves beyond human expert level.",
                "es": "El auto-juego fue clave para el éxito de AlphaGo y AlphaZero; jugando contra sí mismo, la IA genera datos de entrenamiento y mejora progresivamente más allá del nivel experto humano.",
                "de": "Selbstspiel war entscheidend für den Erfolg von AlphaGo und AlphaZero; durch Spielen gegen sich selbst generiert die KI Trainingsdaten und verbessert sich über menschliches Expertenniveau hinaus.",
                "nl": "Zelfspelen was essentieel voor het succes van AlphaGo en AlphaZero; door tegen zichzelf te spelen genereert de AI trainingsdata en verbetert progressief boven menselijk expertniveau."
            }
        },
        {
            "question": {
                "en": "What is the purpose of opponent modeling in competitive game AI?",
                "es": "¿Cuál es el propósito del modelado del oponente en IA de juegos competitivos?",
                "de": "Welchen Zweck hat die Gegnermodellierung in kompetitiver Spiele-KI?",
                "nl": "Wat is het doel van tegenstander modellering in competitieve game AI?"
            },
            "options": [
                {
                    "en": "Predicting and countering the strategies of the opponent",
                    "es": "Predecir y contrarrestar las estrategias del oponente",
                    "de": "Strategien des Gegners vorhersagen und kontern",
                    "nl": "De strategieën van de tegenstander voorspellen en tegengaan"
                },
                {
                    "en": "Creating 3D enemy character models",
                    "es": "Crear modelos de personajes enemigos 3D",
                    "de": "3D-Feindcharaktere erstellen",
                    "nl": "3D vijandige karaktermodellen maken"
                },
                {
                    "en": "Designing enemy appearance",
                    "es": "Diseñar la apariencia del enemigo",
                    "de": "Feindaussehen gestalten",
                    "nl": "Vijandelijk uiterlijk ontwerpen"
                },
                {
                    "en": "Generating opponent dialogue",
                    "es": "Generar diálogo del oponente",
                    "de": "Gegnerdialog generieren",
                    "nl": "Tegenstander dialoog genereren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Opponent modeling builds a statistical model of an adversary's tendencies, allowing the AI to exploit weaknesses and adapt strategies accordingly.",
                "es": "El modelado del oponente construye un modelo estadístico de las tendencias del adversario, permitiendo a la IA explotar debilidades y adaptar estrategias.",
                "de": "Gegnermodellierung erstellt ein statistisches Modell der Tendenzen des Gegners um der KI zu ermöglichen Schwächen auszunutzen und Strategien anzupassen.",
                "nl": "Tegenstander modellering bouwt een statistisch model van de neigingen van een tegenstander, zodat de AI zwakheden kan uitbuiten en strategieën aanpassen."
            }
        },
        {
            "question": {
                "en": "What is Q-learning in the context of game AI?",
                "es": "¿Qué es el Q-learning en el contexto de la IA de juegos?",
                "de": "Was ist Q-Learning im Kontext von Spiele-KI?",
                "nl": "Wat is Q-learning in de context van game AI?"
            },
            "options": [
                {
                    "en": "A model-free RL algorithm that learns action values to maximize cumulative reward",
                    "es": "Un algoritmo RL sin modelo que aprende valores de acciones para maximizar la recompensa acumulada",
                    "de": "Ein modellfreier RL-Algorithmus der Aktionswerte lernt um kumulative Belohnung zu maximieren",
                    "nl": "Een modelvrij RL-algoritme dat actiewaarden leert om cumulatieve beloning te maximaliseren"
                },
                {
                    "en": "A quality testing method for games",
                    "es": "Un método de prueba de calidad para juegos",
                    "de": "Eine Qualitätstestmethode für Spiele",
                    "nl": "Een kwaliteitstestmethode voor games"
                },
                {
                    "en": "A question-answering system in RPGs",
                    "es": "Un sistema de preguntas y respuestas en RPGs",
                    "de": "Ein Frage-Antwort-System in RPGs",
                    "nl": "Een vraag-antwoord systeem in RPGs"
                },
                {
                    "en": "A queue management system for online games",
                    "es": "Un sistema de gestión de colas para juegos en línea",
                    "de": "Ein Warteschlangenverwaltungssystem für Online-Spiele",
                    "nl": "Een wachtrijbeheersysteem voor online games"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Q-learning learns a Q-table mapping (state, action) pairs to expected rewards, allowing game AI to find optimal policies without a model of the environment.",
                "es": "Q-learning aprende una tabla Q que mapea pares (estado, acción) a recompensas esperadas, permitiendo a la IA de juegos encontrar políticas óptimas sin un modelo del entorno.",
                "de": "Q-Learning lernt eine Q-Tabelle die (Zustand, Aktion)-Paare auf erwartete Belohnungen abbildet und KI ermöglicht optimale Richtlinien ohne Umgebungsmodell zu finden.",
                "nl": "Q-learning leert een Q-tabel die (toestand, actie)-paren koppelt aan verwachte beloningen, waardoor game AI optimale beleidsregels kan vinden zonder een omgevingsmodel."
            }
        },
        {
            "question": {
                "en": "What is stealth AI in game design?",
                "es": "¿Qué es la IA sigilosa en diseño de juegos?",
                "de": "Was ist Stealth-KI im Spieldesign?",
                "nl": "Wat is sluip-AI in spelontwerp?"
            },
            "options": [
                {
                    "en": "Enemy AI systems that detect and react to player visibility and sound",
                    "es": "Sistemas de IA enemiga que detectan y reaccionan a la visibilidad y sonido del jugador",
                    "de": "Feind-KI-Systeme die Spielersichtbarkeit und Geräusche erkennen und darauf reagieren",
                    "nl": "Vijandige AI-systemen die de zichtbaarheid en het geluid van de speler detecteren en hierop reageren"
                },
                {
                    "en": "AI that hides game data from players",
                    "es": "IA que oculta datos del juego a los jugadores",
                    "de": "KI die Spieldaten vor Spielern verbirgt",
                    "nl": "AI die spelgegevens voor spelers verbergt"
                },
                {
                    "en": "Background processes in game engines",
                    "es": "Procesos en segundo plano en motores de juego",
                    "de": "Hintergrundprozesse in Spiel-Engines",
                    "nl": "Achtergrondprocessen in game-engines"
                },
                {
                    "en": "AI that reduces game loading times",
                    "es": "IA que reduce los tiempos de carga del juego",
                    "de": "KI die Spielladezeiten reduziert",
                    "nl": "AI die spellaadtijden vermindert"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Stealth game AI combines vision cones, hearing radii, and alertness states to create believable guard behavior that reacts realistically to player actions.",
                "es": "La IA de juegos sigilosos combina conos de visión, radios de escucha y estados de alerta para crear comportamiento de guardia creíble.",
                "de": "Stealth-Spiele-KI kombiniert Sichtkegel, Hörradien und Alarmzustände um glaubwürdiges Wächterverhalten zu schaffen.",
                "nl": "Sluip-game AI combineert zichtkegelkegels, gehoorstralen en alertheidsstatussen om geloofwaardig bewakersgedrag te creëren."
            }
        },
        {
            "question": {
                "en": "What is a genetic algorithm and how is it used in game AI?",
                "es": "¿Qué es un algoritmo genético y cómo se usa en IA de juegos?",
                "de": "Was ist ein genetischer Algorithmus und wie wird er in Spiele-KI verwendet?",
                "nl": "Wat is een genetisch algoritme en hoe wordt het gebruikt in game AI?"
            },
            "options": [
                {
                    "en": "An evolutionary method that evolves AI strategies through selection, crossover, and mutation",
                    "es": "Un método evolutivo que evoluciona estrategias de IA mediante selección, cruce y mutación",
                    "de": "Eine evolutionäre Methode die KI-Strategien durch Selektion, Kreuzung und Mutation entwickelt",
                    "nl": "Een evolutionaire methode die AI-strategieën ontwikkelt via selectie, kruising en mutatie"
                },
                {
                    "en": "A method for generating character DNA in RPGs",
                    "es": "Un método para generar ADN de personajes en RPGs",
                    "de": "Eine Methode zur Generierung von Charakter-DNA in RPGs",
                    "nl": "Een methode voor het genereren van karakter-DNA in RPG's"
                },
                {
                    "en": "A system for managing family trees in simulation games",
                    "es": "Un sistema para gestionar árboles genealógicos en juegos de simulación",
                    "de": "Ein System zur Verwaltung von Stammbäumen in Simulationsspielen",
                    "nl": "Een systeem voor het beheren van stambomen in simulatiespelen"
                },
                {
                    "en": "A biometric identification system in games",
                    "es": "Un sistema de identificación biométrica en juegos",
                    "de": "Ein biometrisches Identifikationssystem in Spielen",
                    "nl": "Een biometrisch identificatiesysteem in games"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Genetic algorithms are used in game AI for evolving neural networks (neuroevolution), optimizing NPC behaviors, and generating game content through simulated natural selection.",
                "es": "Los algoritmos genéticos se usan en IA de juegos para evolucionar redes neuronales (neuroevolución), optimizar comportamientos de NPC y generar contenido del juego.",
                "de": "Genetische Algorithmen werden in Spiele-KI für die Evolution neuronaler Netze (Neuroevolution), Optimierung von NPC-Verhalten und Generierung von Spielinhalten eingesetzt.",
                "nl": "Genetische algoritmen worden gebruikt in game AI voor het evolueren van neurale netwerken (neuro-evolutie), optimaliseren van NPC-gedrag en genereren van spelinhoud."
            }
        },
        {
            "question": {
                "en": "What is cheating detection in online game AI?",
                "es": "¿Qué es la detección de trampas en IA de juegos en línea?",
                "de": "Was ist Cheat-Erkennung in Online-Spiele-KI?",
                "nl": "Wat is spiekdetectie in online game AI?"
            },
            "options": [
                {
                    "en": "Machine learning systems that identify abnormal player behavior patterns",
                    "es": "Sistemas de aprendizaje automático que identifican patrones de comportamiento anormales del jugador",
                    "de": "Machine-Learning-Systeme die abnormale Spielerverhaltenmuster identifizieren",
                    "nl": "Machine learning systemen die abnormale spelersgedragspatronen identificeren"
                },
                {
                    "en": "Systems that let players report each other",
                    "es": "Sistemas que permiten a los jugadores reportarse mutuamente",
                    "de": "Systeme die Spielern ermöglichen sich gegenseitig zu melden",
                    "nl": "Systemen waarmee spelers elkaar kunnen melden"
                },
                {
                    "en": "Code that prevents players from copying game files",
                    "es": "Código que impide a los jugadores copiar archivos del juego",
                    "de": "Code der Spieler daran hindert Spieldateien zu kopieren",
                    "nl": "Code die spelers verhindert spelbestanden te kopiëren"
                },
                {
                    "en": "Parental control systems",
                    "es": "Sistemas de control parental",
                    "de": "Kindersicherungssysteme",
                    "nl": "Ouderlijk controlesystemen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "AI-based anti-cheat systems analyze statistical anomalies in player data like aim accuracy, movement patterns, and reaction times to detect cheaters in competitive games.",
                "es": "Los sistemas anti-trampas basados en IA analizan anomalías estadísticas en datos del jugador como precisión de puntería, patrones de movimiento y tiempos de reacción.",
                "de": "KI-basierte Anti-Cheat-Systeme analysieren statistische Anomalien in Spielerdaten wie Zielgenauigkeit, Bewegungsmuster und Reaktionszeiten.",
                "nl": "Op AI gebaseerde anti-cheat systemen analyseren statistische anomalieën in spelersdata zoals trefnauwkeurigheid, bewegingspatronen en reactietijden."
            }
        },
        {
            "question": {
                "en": "What is the credit assignment problem in game AI?",
                "es": "¿Qué es el problema de asignación de crédito en IA de juegos?",
                "de": "Was ist das Kreditverteilungsproblem in Spiele-KI?",
                "nl": "Wat is het kredietoewijzingsprobleem in game AI?"
            },
            "options": [
                {
                    "en": "Determining which past actions led to a current reward or penalty",
                    "es": "Determinar qué acciones pasadas llevaron a una recompensa o penalización actual",
                    "de": "Bestimmen welche vergangenen Aktionen zu einer aktuellen Belohnung oder Strafe geführt haben",
                    "nl": "Bepalen welke vroegere acties tot een huidige beloning of straf hebben geleid"
                },
                {
                    "en": "Allocating development budget to game features",
                    "es": "Asignar presupuesto de desarrollo a características del juego",
                    "de": "Entwicklungsbudget für Spielfunktionen zuweisen",
                    "nl": "Ontwikkelingsbudget toewijzen aan spelfuncties"
                },
                {
                    "en": "Giving players credit for completing tasks",
                    "es": "Dar crédito a jugadores por completar tareas",
                    "de": "Spieler für abgeschlossene Aufgaben Kredite geben",
                    "nl": "Spelers krediet geven voor het voltooien van taken"
                },
                {
                    "en": "Managing intellectual property rights",
                    "es": "Gestionar derechos de propiedad intelectual",
                    "de": "Geistige Eigentumsrechte verwalten",
                    "nl": "Intellectuele eigendomsrechten beheren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The credit assignment problem in RL is determining which actions in a long sequence are responsible for a delayed reward, fundamental to training game-playing agents.",
                "es": "El problema de asignación de crédito en RL es determinar qué acciones en una secuencia larga son responsables de una recompensa diferida.",
                "de": "Das Kreditverteilungsproblem im RL ist die Bestimmung welche Aktionen in einer langen Sequenz für eine verzögerte Belohnung verantwortlich sind.",
                "nl": "Het kredietoewijzingsprobleem in RL is het bepalen welke acties in een lange reeks verantwoordelijk zijn voor een uitgestelde beloning."
            }
        },
        {
            "question": {
                "en": "What is a deep neural network's role in modern game AI?",
                "es": "¿Cuál es el papel de una red neuronal profunda en la IA de juegos moderna?",
                "de": "Welche Rolle spielt ein tiefes neuronales Netz in moderner Spiele-KI?",
                "nl": "Wat is de rol van een diep neuraal netwerk in moderne game AI?"
            },
            "options": [
                {
                    "en": "Learning complex patterns from raw input like pixels to make decisions",
                    "es": "Aprender patrones complejos de entrada en bruto como píxeles para tomar decisiones",
                    "de": "Komplexe Muster aus rohen Eingaben wie Pixeln lernen um Entscheidungen zu treffen",
                    "nl": "Complexe patronen leren van ruwe invoer zoals pixels om beslissingen te nemen"
                },
                {
                    "en": "Drawing game graphics",
                    "es": "Dibujar gráficos del juego",
                    "de": "Spielgrafiken zeichnen",
                    "nl": "Spelgrafische elementen tekenen"
                },
                {
                    "en": "Managing game server connections",
                    "es": "Gestionar conexiones del servidor del juego",
                    "de": "Spielserververbindungen verwalten",
                    "nl": "Spelserververbindingen beheren"
                },
                {
                    "en": "Translating game text",
                    "es": "Traducir texto del juego",
                    "de": "Spieltext übersetzen",
                    "nl": "Speltekst vertalen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Deep neural networks enable game AI like DQN to learn directly from raw game pixels, extracting features automatically and mapping them to actions.",
                "es": "Las redes neuronales profundas permiten a la IA de juegos como DQN aprender directamente de píxeles en bruto del juego, extrayendo características automáticamente.",
                "de": "Tiefe neuronale Netze ermöglichen Spiele-KI wie DQN direkt aus rohen Spielpixeln zu lernen und Merkmale automatisch zu extrahieren.",
                "nl": "Diepe neurale netwerken stellen game AI zoals DQN in staat direct van ruwe spelerpixels te leren, kenmerken automatisch te extraheren en te koppelen aan acties."
            }
        },
        {
            "question": {
                "en": "What is level of detail (LOD) AI optimization in games?",
                "es": "¿Qué es la optimización de IA por nivel de detalle (LOD) en juegos?",
                "de": "Was ist KI-Optimierung durch Level of Detail (LOD) in Spielen?",
                "nl": "Wat is level of detail (LOD) AI optimalisatie in games?"
            },
            "options": [
                {
                    "en": "Reducing AI computation for distant or off-screen entities",
                    "es": "Reducir el cómputo de IA para entidades lejanas o fuera de pantalla",
                    "de": "KI-Berechnung für entfernte oder bildschirmferne Entitäten reduzieren",
                    "nl": "AI-berekening verminderen voor verre of buiten scherm entiteiten"
                },
                {
                    "en": "Adjusting game graphics quality",
                    "es": "Ajustar la calidad gráfica del juego",
                    "de": "Spielgrafikqualität anpassen",
                    "nl": "Spelgrafische kwaliteit aanpassen"
                },
                {
                    "en": "Managing player skill progression",
                    "es": "Gestionar la progresión de habilidades del jugador",
                    "de": "Spieler-Skillprogression verwalten",
                    "nl": "Spelervaardigheidsprogressie beheren"
                },
                {
                    "en": "Setting game difficulty levels",
                    "es": "Establecer niveles de dificultad del juego",
                    "de": "Spielschwierigkeitsstufen festlegen",
                    "nl": "Spelmoeilijkheidsgraden instellen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "LOD AI optimization switches distant NPCs to simpler behavior models, reducing CPU overhead while maintaining believable game world simulation.",
                "es": "La optimización de IA por LOD cambia NPCs distantes a modelos de comportamiento más simples, reduciendo la carga de CPU manteniendo una simulación creíble.",
                "de": "LOD-KI-Optimierung wechselt entfernte NPCs zu einfacheren Verhaltensmodellen und reduziert CPU-Overhead bei glaubwürdiger Spielweltsimulation.",
                "nl": "LOD AI optimalisatie schakelt verre NPC's over naar eenvoudigere gedragsmodellen, wat CPU-overhead vermindert terwijl een geloofwaardige spelwereldimulatie behouden blijft."
            }
        },
        {
            "question": {
                "en": "What is a policy network in game AI?",
                "es": "¿Qué es una red de política en IA de juegos?",
                "de": "Was ist ein Richtliniennetzwerk in Spiele-KI?",
                "nl": "Wat is een beleidsnetwerk in game AI?"
            },
            "options": [
                {
                    "en": "A neural network that maps game states directly to action probabilities",
                    "es": "Una red neuronal que mapea estados del juego directamente a probabilidades de acción",
                    "de": "Ein neuronales Netz das Spielzustände direkt auf Aktionswahrscheinlichkeiten abbildet",
                    "nl": "Een neuraal netwerk dat spelstaten direct koppelt aan actiewaarschijnlijkheden"
                },
                {
                    "en": "A network of game servers with rules",
                    "es": "Una red de servidores de juego con reglas",
                    "de": "Ein Netzwerk von Spielservern mit Regeln",
                    "nl": "Een netwerk van spelservers met regels"
                },
                {
                    "en": "Terms of service for online games",
                    "es": "Términos de servicio para juegos en línea",
                    "de": "Nutzungsbedingungen für Online-Spiele",
                    "nl": "Servicevoorwaarden voor online games"
                },
                {
                    "en": "A player ban system",
                    "es": "Un sistema de prohibición de jugadores",
                    "de": "Ein Spieler-Bann-System",
                    "nl": "Een systeem voor het bannen van spelers"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Policy networks, used in systems like AlphaGo, directly output action probabilities for each game state, enabling efficient move selection without exhaustive search.",
                "es": "Las redes de política, usadas en sistemas como AlphaGo, producen directamente probabilidades de acción para cada estado del juego.",
                "de": "Richtliniennetzwerke, verwendet in Systemen wie AlphaGo, geben direkt Aktionswahrscheinlichkeiten für jeden Spielzustand aus.",
                "nl": "Beleidsnetwerken, gebruikt in systemen als AlphaGo, produceren direct actiewaarschijnlijkheden voor elke spelstaat, waardoor efficiënte zettselectie mogelijk is."
            }
        },
        {
            "question": {
                "en": "What is the difference between on-policy and off-policy RL in game training?",
                "es": "¿Cuál es la diferencia entre RL en política y fuera de política en entrenamiento de juegos?",
                "de": "Was ist der Unterschied zwischen On-Policy und Off-Policy RL im Spieltraining?",
                "nl": "Wat is het verschil tussen on-policy en off-policy RL in game training?"
            },
            "options": [
                {
                    "en": "On-policy learns from current policy actions; off-policy can learn from any stored experience",
                    "es": "On-policy aprende de acciones del política actual; off-policy de cualquier experiencia guardada",
                    "de": "On-Policy lernt aus aktuellen Richtlinienaktionen; Off-Policy lernt aus beliebiger Erfahrung",
                    "nl": "On-policy leert van huidige beleidsacties; off-policy kan leren van elke opgeslagen ervaring"
                },
                {
                    "en": "On-policy plays online; off-policy plays offline",
                    "es": "En política juega en línea; fuera de política juega fuera de línea",
                    "de": "On-Policy spielt online; Off-Policy spielt offline",
                    "nl": "On-policy speelt online; off-policy speelt offline"
                },
                {
                    "en": "On-policy follows rules; off-policy ignores them",
                    "es": "En política sigue reglas; fuera de política las ignora",
                    "de": "On-Policy folgt Regeln; Off-Policy ignoriert sie",
                    "nl": "On-policy volgt regels; off-policy negeert ze"
                },
                {
                    "en": "On-policy uses neural networks; off-policy does not",
                    "es": "En política usa redes neuronales; fuera de política no",
                    "de": "On-Policy verwendet neuronale Netze; Off-Policy nicht",
                    "nl": "On-policy gebruikt neurale netwerken; off-policy niet"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "On-policy algorithms like PPO learn from the policy being optimized; off-policy algorithms like DQN can reuse past experiences via replay buffers for greater sample efficiency.",
                "es": "Los algoritmos en política como PPO aprenden de la política que se optimiza; los fuera de política como DQN pueden reutilizar experiencias pasadas mediante buffers de repetición.",
                "de": "On-Policy-Algorithmen wie PPO lernen aus der optimierten Richtlinie; Off-Policy-Algorithmen wie DQN können vergangene Erfahrungen über Wiedergabepuffer wiederverwenden.",
                "nl": "On-policy algoritmen zoals PPO leren van het beleid dat wordt geoptimaliseerd; off-policy algoritmen zoals DQN kunnen vroegere ervaringen hergebruiken via replay buffers."
            }
        },
        {
            "question": {
                "en": "What is game balancing and how does AI assist it?",
                "es": "¿Qué es el equilibrio de juego y cómo lo asiste la IA?",
                "de": "Was ist Spielausbalancierung und wie unterstützt KI dabei?",
                "nl": "Wat is spelbalancering en hoe helpt AI daarbij?"
            },
            "options": [
                {
                    "en": "Adjusting game parameters so no strategy dominates; AI simulates many games to find imbalances",
                    "es": "Ajustar parámetros para que ninguna estrategia domine; IA simula partidas para hallar desequilibrios",
                    "de": "Spielparameter anpassen damit keine Strategie dominiert; KI findet Ungleichgewichte durch Simulation",
                    "nl": "Spelparameters aanpassen zodat geen strategie domineert; AI vindt onevenwichtigheden via simulatie"
                },
                {
                    "en": "Keeping game physics realistic",
                    "es": "Mantener la física del juego realista",
                    "de": "Spielphysik realistisch halten",
                    "nl": "Spelfysica realistisch houden"
                },
                {
                    "en": "Equalizing player scores",
                    "es": "Igualar puntajes de jugadores",
                    "de": "Spielerpunktzahlen angleichen",
                    "nl": "Spelerscores gelijkstellen"
                },
                {
                    "en": "Making all characters equal in strength",
                    "es": "Hacer que todos los personajes sean iguales en fuerza",
                    "de": "Alle Charaktere gleich stark machen",
                    "nl": "Alle karakters gelijk in sterkte maken"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "AI-assisted game balancing uses automated playtesting where AI agents play thousands of games with different parameter sets, identifying dominant strategies and feedback to designers.",
                "es": "El equilibrio de juego asistido por IA usa pruebas automatizadas donde agentes IA juegan miles de partidas con diferentes parámetros.",
                "de": "KI-gestützte Spielausbalancierung nutzt automatisiertes Playtesting wo KI-Agenten Tausende von Spielen mit verschiedenen Parametersätzen spielen.",
                "nl": "AI-ondersteunde spelbalancering gebruikt geautomatiseerd playtesting waarbij AI-agenten duizenden games spelen met verschillende parametersets."
            }
        },
        {
            "question": {
                "en": "What is Monte Carlo simulation in game AI?",
                "es": "¿Qué es la simulación de Monte Carlo en IA de juegos?",
                "de": "Was ist die Monte-Carlo-Simulation in Spiele-KI?",
                "nl": "Wat is Monte Carlo simulatie in game AI?"
            },
            "options": [
                {
                    "en": "Randomly sampling game outcomes to estimate probabilities and values",
                    "es": "Muestrear aleatoriamente resultados del juego para estimar probabilidades y valores",
                    "de": "Zufälliges Abtasten von Spielergebnissen zur Schätzung von Wahrscheinlichkeiten und Werten",
                    "nl": "Willekeurig steekproeven nemen van speluitkomsten om kansen en waarden te schatten"
                },
                {
                    "en": "A racing game set in Monaco",
                    "es": "Un juego de carreras ambientado en Mónaco",
                    "de": "Ein Rennspiel das in Monaco spielt",
                    "nl": "Een racegame die in Monaco is gezet"
                },
                {
                    "en": "A gambling system within RPG games",
                    "es": "Un sistema de apuestas dentro de juegos RPG",
                    "de": "Ein Glücksspielsystem in RPG-Spielen",
                    "nl": "Een goksysteem in RPG-games"
                },
                {
                    "en": "A random level generator",
                    "es": "Un generador de niveles aleatorio",
                    "de": "Ein zufälliger Levelgenerator",
                    "nl": "Een willekeurige levelgenerator"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Monte Carlo methods estimate the value of game states by simulating many random playouts, forming the backbone of Monte Carlo Tree Search used in Go and chess AI.",
                "es": "Los métodos de Monte Carlo estiman el valor de estados del juego simulando muchas jugadas aleatorias, formando la columna vertebral de MCTS usado en IA de Go y ajedrez.",
                "de": "Monte-Carlo-Methoden schätzen den Wert von Spielzuständen durch Simulation vieler zufälliger Zugfolgen, das Herzstück von MCTS in Go- und Schach-KI.",
                "nl": "Monte Carlo methoden schatten de waarde van spelstaten door veel willekeurige zetten te simuleren, de ruggengraat van MCTS gebruikt in Go- en schaak-AI."
            }
        },
        {
            "question": {
                "en": "What is curiosity-driven exploration in game AI?",
                "es": "¿Qué es la exploración impulsada por curiosidad en IA de juegos?",
                "de": "Was ist neugiergetriebene Exploration in Spiele-KI?",
                "nl": "Wat is nieuwsgierigheidsgedreven verkenning in game AI?"
            },
            "options": [
                {
                    "en": "Rewarding AI agents for discovering new game states to improve exploration",
                    "es": "Recompensar agentes IA por descubrir nuevos estados del juego para mejorar la exploración",
                    "de": "KI-Agenten für das Entdecken neuer Spielzustände belohnen um die Exploration zu verbessern",
                    "nl": "AI-agenten belonen voor het ontdekken van nieuwe spelstaten om verkenning te verbeteren"
                },
                {
                    "en": "Players exploring new game areas",
                    "es": "Jugadores explorando nuevas áreas del juego",
                    "de": "Spieler erkunden neue Spielbereiche",
                    "nl": "Spelers verkennen nieuwe spelgebieden"
                },
                {
                    "en": "AI that looks at players through the camera",
                    "es": "IA que observa a los jugadores a través de la cámara",
                    "de": "KI die Spieler durch die Kamera beobachtet",
                    "nl": "AI die spelers door de camera bekijkt"
                },
                {
                    "en": "A system for recommending new games",
                    "es": "Un sistema para recomendar nuevos juegos",
                    "de": "Ein System zur Empfehlung neuer Spiele",
                    "nl": "Een systeem voor het aanbevelen van nieuwe games"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Curiosity-driven exploration gives AI agents an intrinsic reward for visiting novel states, helping them navigate large game worlds with sparse extrinsic rewards.",
                "es": "La exploración impulsada por curiosidad da a los agentes IA una recompensa intrínseca por visitar estados nuevos, ayudándolos a navegar mundos grandes con recompensas externas escasas.",
                "de": "Neugiergetriebene Exploration gibt KI-Agenten eine intrinsische Belohnung für das Besuchen neuer Zustände und hilft ihnen in großen Spielwelten mit wenigen externen Belohnungen.",
                "nl": "Nieuwsgierigheidsgedreven verkenning geeft AI-agenten een intrinsieke beloning voor het bezoeken van nieuwe toestanden, wat hen helpt in grote spelwerelden met schaarse externe beloningen."
            }
        },
        {
            "question": {
                "en": "What is the role of a value network in game AI?",
                "es": "¿Cuál es el papel de una red de valor en IA de juegos?",
                "de": "Welche Rolle spielt ein Wertnetzwerk in Spiele-KI?",
                "nl": "Wat is de rol van een waardenetwerk in game AI?"
            },
            "options": [
                {
                    "en": "Estimating how good a game state is for the AI agent",
                    "es": "Estimar qué tan bueno es un estado del juego para el agente IA",
                    "de": "Schätzen wie gut ein Spielzustand für den KI-Agenten ist",
                    "nl": "Schatten hoe goed een spelstaat is voor de AI-agent"
                },
                {
                    "en": "Calculating in-game currency exchange rates",
                    "es": "Calcular tasas de cambio de moneda en el juego",
                    "de": "In-Game Währungskurse berechnen",
                    "nl": "In-game valutawisselkoersen berekenen"
                },
                {
                    "en": "Assigning monetary worth to game items",
                    "es": "Asignar valor monetario a objetos del juego",
                    "de": "Spielgegenständen monetären Wert zuweisen",
                    "nl": "Monetaire waarde toewijzen aan spelitems"
                },
                {
                    "en": "Managing player reputation systems",
                    "es": "Gestionar sistemas de reputación del jugador",
                    "de": "Spieler-Reputationssysteme verwalten",
                    "nl": "Spelersreputatiesystemen beheren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Value networks estimate the expected outcome from a given game state, used alongside policy networks in AlphaGo and similar systems to guide tree search.",
                "es": "Las redes de valor estiman el resultado esperado de un estado de juego dado, usadas junto con redes de política en AlphaGo y sistemas similares.",
                "de": "Wertnetzwerke schätzen das erwartete Ergebnis aus einem gegebenen Spielzustand und werden zusammen mit Richtliniennetzwerken in AlphaGo und ähnlichen Systemen verwendet.",
                "nl": "Waardenetwerken schatten het verwachte resultaat van een gegeven spelstaat en worden samen met beleidsnetwerken in AlphaGo en vergelijkbare systemen gebruikt."
            }
        },
        {
            "question": {
                "en": "What is symbolic AI and how was it used in early game development?",
                "es": "¿Qué es la IA simbólica y cómo se usó en el desarrollo temprano de juegos?",
                "de": "Was ist symbolische KI und wie wurde sie in der frühen Spielentwicklung eingesetzt?",
                "nl": "Wat is symbolische AI en hoe werd het gebruikt in vroege spelontwikkeling?"
            },
            "options": [
                {
                    "en": "Rule-based AI using explicit logic and conditions to control game character behavior",
                    "es": "IA basada en reglas que usa lógica explícita para controlar el comportamiento de personajes",
                    "de": "Regelbasierte KI die explizite Logik und Bedingungen nutzt um Spielcharakter-Verhalten zu steuern",
                    "nl": "Op regels gebaseerde AI die expliciete logica gebruikt om spelkarakter-gedrag aan te sturen"
                },
                {
                    "en": "AI that communicates through symbols and icons",
                    "es": "IA que se comunica a través de símbolos e iconos",
                    "de": "KI die durch Symbole und Icons kommuniziert",
                    "nl": "AI die communiceert via symbolen en iconen"
                },
                {
                    "en": "AI that plays games involving symbols like chess pieces",
                    "es": "IA que juega juegos que involucran símbolos como piezas de ajedrez",
                    "de": "KI die Spiele mit Symbolen wie Schachfiguren spielt",
                    "nl": "AI die games speelt met symbolen zoals schaakstukken"
                },
                {
                    "en": "A visual programming language for games",
                    "es": "Un lenguaje de programación visual para juegos",
                    "de": "Eine visuelle Programmiersprache für Spiele",
                    "nl": "Een visuele programmeertaal voor games"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Symbolic AI used rule-based systems like if-then logic in early games. It was transparent and predictable but struggled with complex, dynamic game environments.",
                "es": "La IA simbólica usaba sistemas basados en reglas como lógica si-entonces en juegos tempranos. Era transparente y predecible pero tenía dificultades en entornos complejos y dinámicos.",
                "de": "Symbolische KI verwendete regelbasierte Systeme wie Wenn-Dann-Logik in frühen Spielen. Sie war transparent und vorhersagbar hatte aber Schwierigkeiten in komplexen dynamischen Spielumgebungen.",
                "nl": "Symbolische AI gebruikte regelgebaseerde systemen zoals als-dan-logica in vroege games. Het was transparant en voorspelbaar maar had moeite met complexe, dynamische spelomgevingen."
            }
        },
        {
            "question": {
                "en": "What is avatar customization AI?",
                "es": "¿Qué es la IA de personalización de avatares?",
                "de": "Was ist Avatar-Anpassungs-KI?",
                "nl": "Wat is avatar aanpassings-AI?"
            },
            "options": [
                {
                    "en": "AI that generates or suggests personalized character appearances based on player preferences",
                    "es": "IA que genera o sugiere apariencias de personajes personalizadas basadas en preferencias del jugador",
                    "de": "KI die personalisierte Charakteraussehen basierend auf Spielerpräferenzen generiert oder vorschlägt",
                    "nl": "AI die gepersonaliseerde karakteruiterlĳken genereert of suggereert op basis van spelersvoorkeuren"
                },
                {
                    "en": "A tool for players to draw their own characters",
                    "es": "Una herramienta para que los jugadores dibujen sus propios personajes",
                    "de": "Ein Werkzeug für Spieler um eigene Charaktere zu zeichnen",
                    "nl": "Een tool voor spelers om hun eigen karakters te tekenen"
                },
                {
                    "en": "A system for purchasing in-game cosmetics",
                    "es": "Un sistema para comprar cosméticos en el juego",
                    "de": "Ein System zum Kauf von In-Game-Kosmetika",
                    "nl": "Een systeem voor het kopen van in-game cosmetica"
                },
                {
                    "en": "Automatic player profile creation",
                    "es": "Creación automática del perfil del jugador",
                    "de": "Automatische Spielerprofilanlegung",
                    "nl": "Automatische spelersprofielcreatie"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "AI-powered avatar customization uses machine learning to analyze player preferences and generate unique character looks, or to suggest combinations that match individual style.",
                "es": "La personalización de avatares con IA usa aprendizaje automático para analizar las preferencias del jugador y generar apariencias únicas de personajes.",
                "de": "KI-gestützte Avatar-Anpassung verwendet Machine Learning um Spielerpräferenzen zu analysieren und einzigartige Charakteraussehen zu generieren.",
                "nl": "AI-aangedreven avatar aanpassing gebruikt machine learning om spelersvoorkeuren te analyseren en unieke karakteruiterlĳken te genereren die individuele stijl weerspiegelen."
            }
        }
    ]
};
