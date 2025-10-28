// AI in Gaming Quiz - Level 2: Gaming AI Basics Plus
(function() {
  const level2 = {
    name: {
      en: "AI in Gaming Level 2",
      es: "IA en Juegos Nivel 2",
      de: "KI im Gaming Stufe 2",
      nl: "AI in Gaming Level 2"
    },
    questions: [
      {
        question: {
          en: "What is a 'state machine' in game AI?",
          es: "Â¿QuÃ© es una 'mÃ¡quina de estados' en la IA de juegos?",
          de: "Was ist eine 'Zustandsmaschine' in Spiele-KI?",
          nl: "Wat is een 'state machine' in game AI?"
        },
        options: [
          { en: "System that changes AI behavior based on situations", es: "Sistema que cambia el comportamiento IA segÃºn situaciones", de: "System das KI-Verhalten je nach Situation Ã¤ndert", nl: "Systeem dat AI-gedrag verandert op basis van situaties" },
          { en: "Machine that creates game states", es: "MÃ¡quina que crea estados de juego", de: "Maschine die SpielzustÃ¤nde erstellt", nl: "Machine die spelstaten creÃ«ert" },
          { en: "Computer that runs the game", es: "Computadora que ejecuta el juego", de: "Computer der das Spiel ausfÃ¼hrt", nl: "Computer die het spel draait" },
          { en: "Device for storing game saves", es: "Dispositivo para guardar partidas", de: "GerÃ¤t zum Speichern von SpielstÃ¤nden", nl: "Apparaat voor het opslaan van spelbestanden" }
        ],
        correct: 0,
        explanation: {
          en: "State machines allow AI characters to switch between different behaviors like 'patrol', 'chase', or 'attack' based on game conditions.",
          es: "Las mÃ¡quinas de estados permiten a los personajes IA cambiar entre comportamientos como 'patrullar', 'perseguir' o 'atacar' segÃºn las condiciones.",
          de: "Zustandsmaschinen ermÃ¶glichen KI-Charakteren zwischen Verhaltensweisen wie 'Patrouille', 'Verfolgung' oder 'Angriff' zu wechseln.",
          nl: "State machines stellen AI-karakters in staat om te wisselen tussen gedragingen zoals 'patrouilleren', 'achtervolgen' of 'aanvallen'."
        }
      },
      {
        question: {
          en: "What does 'rubber band AI' mean in racing games?",
          es: "Â¿QuÃ© significa 'IA de banda elÃ¡stica' en juegos de carreras?",
          de: "Was bedeutet 'Gummiband-KI' in Rennspielen?",
          nl: "Wat betekent 'rubber band AI' in racegames?"
        },
        options: [
          { en: "AI opponents get faster when behind, slower when ahead", es: "Oponentes IA van mÃ¡s rÃ¡pido cuando estÃ¡n atrÃ¡s, mÃ¡s lento cuando adelante", de: "KI-Gegner werden schneller wenn hinten, langsamer wenn vorne", nl: "AI-tegenstanders worden sneller als ze achter liggen, langzamer als ze voorliggen" },
          { en: "AI cars are made of rubber bands", es: "Los coches IA estÃ¡n hechos de bandas elÃ¡sticas", de: "KI-Autos bestehen aus GummibÃ¤ndern", nl: "AI-auto's zijn gemaakt van elastiekjes" },
          { en: "AI always wins the race", es: "IA siempre gana la carrera", de: "KI gewinnt immer das Rennen", nl: "AI wint altijd de race" },
          { en: "AI cars bounce off walls", es: "Los coches IA rebotan en las paredes", de: "KI-Autos prallen von WÃ¤nden ab", nl: "AI-auto's stuiteren van muren af" }
        ],
        correct: 0,
        explanation: {
          en: "This technique keeps races competitive by dynamically adjusting AI performance to match the player's skill level.",
          es: "Esta tÃ©cnica mantiene las carreras competitivas ajustando dinÃ¡micamente el rendimiento IA para igualar el nivel del jugador.",
          de: "Diese Technik hÃ¤lt Rennen wettbewerbsfÃ¤hig, indem sie die KI-Leistung dynamisch an das Spielerniveau anpasst.",
          nl: "Deze techniek houdt races competitief door AI-prestaties dynamisch aan te passen aan het niveau van de speler."
        }
      },
      {
        question: {
          en: "What is 'scripted AI' in video games?",
          es: "Â¿QuÃ© es 'IA programada' en los videojuegos?",
          de: "Was ist 'geskriptete KI' in Videospielen?",
          nl: "Wat is 'scripted AI' in videogames?"
        },
        options: [
          { en: "Pre-programmed behaviors that follow specific patterns", es: "Comportamientos preprogramados que siguen patrones especÃ­ficos", de: "Vorprogrammierte Verhaltensweisen die spezifischen Mustern folgen", nl: "Voorgeprogrammeerde gedragingen die specifieke patronen volgen" },
          { en: "AI that writes game scripts", es: "IA que escribe guiones de juegos", de: "KI die Spielskripte schreibt", nl: "AI die spelscripts schrijft" },
          { en: "AI controlled by voice commands", es: "IA controlada por comandos de voz", de: "KI gesteuert durch Sprachbefehle", nl: "AI bestuurd door spraakopdrachten" },
          { en: "AI that acts in movies", es: "IA que actÃºa en pelÃ­culas", de: "KI die in Filmen agiert", nl: "AI die in films acteert" }
        ],
        correct: 0,
        explanation: {
          en: "Scripted AI follows predetermined rules and responses, making behavior predictable but ensuring consistent gameplay experience.",
          es: "La IA programada sigue reglas y respuestas predeterminadas, haciendo el comportamiento predecible pero asegurando experiencia consistente.",
          de: "Geskriptete KI folgt vorbestimmten Regeln und Reaktionen, macht Verhalten vorhersagbar aber sorgt fÃ¼r konsistente Spielerfahrung.",
          nl: "Scripted AI volgt vooraf bepaalde regels en reacties, waardoor gedrag voorspelbaar wordt maar consistente gameplay wordt gegarandeerd."
        }
      },
      {
        question: {
          en: "Which AI technique helps enemies work together as a team?",
          es: "Â¿QuÃ© tÃ©cnica de IA ayuda a los enemigos a trabajar juntos como equipo?",
          de: "Welche KI-Technik hilft Feinden dabei, als Team zusammenzuarbeiten?",
          nl: "Welke AI-techniek helpt vijanden om samen te werken als een team?"
        },
        options: [
          { en: "Flocking algorithms", es: "Algoritmos de bandada", de: "Schwarmverhalten-Algorithmen", nl: "Zwermalgoritmes" },
          { en: "Single player mode", es: "Modo de un jugador", de: "Einzelspielermodus", nl: "Singleplayer modus" },
          { en: "Random number generation", es: "GeneraciÃ³n de nÃºmeros aleatorios", de: "Zufallszahlengenerierung", nl: "Willekeurige nummergeneratie" },
          { en: "Graphics rendering", es: "Renderizado de grÃ¡ficos", de: "Grafikdarstellung", nl: "Grafische weergave" }
        ],
        correct: 0,
        explanation: {
          en: "Flocking algorithms simulate group behavior, allowing AI enemies to coordinate attacks and maintain formations.",
          es: "Los algoritmos de bandada simulan comportamiento grupal, permitiendo a enemigos IA coordinar ataques y mantener formaciones.",
          de: "Schwarmverhalten-Algorithmen simulieren Gruppenverhalten und ermÃ¶glichen KI-Feinden koordinierte Angriffe und Formationen.",
          nl: "Zwermalgoritmes simuleren groepsgedrag, waardoor AI-vijanden aanvallen kunnen coÃ¶rdineren en formaties kunnen behouden."
        }
      },
      {
        question: {
          en: "What is 'adaptive AI' in modern games?",
          es: "Â¿QuÃ© es 'IA adaptativa' en juegos modernos?",
          de: "Was ist 'adaptive KI' in modernen Spielen?",
          nl: "Wat is 'adaptieve AI' in moderne games?"
        },
        options: [
          { en: "AI that learns and adjusts to player behavior", es: "IA que aprende y se ajusta al comportamiento del jugador", de: "KI die lernt und sich an Spielerverhalten anpasst", nl: "AI die leert en zich aanpast aan spelergedrag" },
          { en: "AI that adapts graphics settings", es: "IA que adapta configuraciones grÃ¡ficas", de: "KI die Grafikeinstellungen anpasst", nl: "AI die grafische instellingen aanpast" },
          { en: "AI that changes game language", es: "IA que cambia el idioma del juego", de: "KI die Spielsprache Ã¤ndert", nl: "AI die speltaal verandert" },
          { en: "AI that adapts to different devices", es: "IA que se adapta a diferentes dispositivos", de: "KI die sich an verschiedene GerÃ¤te anpasst", nl: "AI die zich aanpast aan verschillende apparaten" }
        ],
        correct: 0,
        explanation: {
          en: "Adaptive AI observes how players behave and modifies its strategies to provide appropriate challenge levels.",
          es: "La IA adaptativa observa cÃ³mo se comportan los jugadores y modifica sus estrategias para proporcionar niveles de desafÃ­o apropiados.",
          de: "Adaptive KI beobachtet Spielerverhalten und modifiziert ihre Strategien um angemessene Herausforderungsstufen zu bieten.",
          nl: "Adaptieve AI observeert hoe spelers zich gedragen en past zijn strategieÃ«n aan om geschikte uitdagingsniveaus te bieden."
        }
      },
      {
        question: {
          en: "What is 'behavioral AI' in game development?",
          es: "¿Qué es 'IA de comportamiento' en el desarrollo de juegos?",
          de: "Was ist 'Verhaltens-KI' in der Spieleentwicklung?",
          nl: "Wat is 'gedrag AI' in game ontwikkeling?"
        },
        options: [
          { en: "AI that simulates realistic character personalities and reactions", es: "IA que simula personalidades y reacciones realistas de personajes", de: "KI die realistische Charakterpersönlichkeiten und Reaktionen simuliert", nl: "AI die realistische karakterpersoonlijkheden en reacties simuleert" },
          { en: "AI that controls game physics", es: "IA que controla la física del juego", de: "KI die Spielphysik kontrolliert", nl: "AI die spelphysica controleert" },
          { en: "AI that manages game menus", es: "IA que gestiona menús del juego", de: "KI die Spielmenüs verwaltet", nl: "AI die gamemenu's beheert" },
          { en: "AI that optimizes graphics", es: "IA que optimiza gráficos", de: "KI die Grafiken optimiert", nl: "AI die graphics optimaliseert" }
        ],
        correct: 0,
        explanation: {
          en: "Behavioral AI focuses on creating believable character actions and emotional responses that make NPCs feel more human-like.",
          es: "La IA de comportamiento se enfoca en crear acciones de personajes creíbles y respuestas emocionales que hacen que los PNJ se sientan más humanos.",
          de: "Verhaltens-KI konzentriert sich darauf glaubwürdige Charakteraktionen und emotionale Reaktionen zu schaffen die NPCs menschlicher wirken lassen.",
          nl: "Gedrag AI richt zich op het creëren van geloofwaardige karakteracties en emotionele reacties die NPCs menselijker laten aanvoelen."
        }
      },
      {
        question: {
          en: "What is 'line of sight' AI?",
          es: "¿Qué es IA de 'línea de visión'?",
          de: "Was ist 'Sichtlinien'-KI?",
          nl: "Wat is 'line of sight' AI?"
        },
        options: [
          { en: "AI that can only detect players when they can 'see' them", es: "IA que solo puede detectar jugadores cuando puede 'verlos'", de: "KI die Spieler nur erkennen kann wenn sie sie 'sehen' kann", nl: "AI die spelers alleen kan detecteren wanneer ze ze kunnen 'zien'" },
          { en: "AI that draws straight lines", es: "IA que dibuja líneas rectas", de: "KI die gerade Linien zeichnet", nl: "AI die rechte lijnen tekent" },
          { en: "AI that improves graphics quality", es: "IA que mejora la calidad gráfica", de: "KI die Grafikqualität verbessert", nl: "AI die grafische kwaliteit verbetert" },
          { en: "AI that reads player messages", es: "IA que lee mensajes de jugador", de: "KI die Spielernachrichten liest", nl: "AI die spelerberichten leest" }
        ],
        correct: 0,
        explanation: {
          en: "Line of sight AI makes enemies more realistic by limiting their detection abilities to what they could actually see, not omniscient awareness.",
          es: "La IA de línea de visión hace a los enemigos más realistas limitando sus habilidades de detección a lo que realmente podrían ver, no consciencia omnisciente.",
          de: "Sichtlinien-KI macht Feinde realistischer indem sie ihre Erkennungsfähigkeiten auf das begrenzt was sie tatsächlich sehen können, nicht allwissende Wahrnehmung.",
          nl: "Line of sight AI maakt vijanden realistischer door hun detectievermogen te beperken tot wat ze daadwerkelijk zouden kunnen zien, niet alwetend bewustzijn."
        }
      },
      {
        question: {
          en: "What is 'goal-oriented AI' in games?",
          es: "¿Qué es 'IA orientada a objetivos' en juegos?",
          de: "Was ist 'zielorientierte KI' in Spielen?",
          nl: "Wat is 'doelgerichte AI' in games?"
        },
        options: [
          { en: "AI that plans actions to achieve specific objectives", es: "IA que planifica acciones para lograr objetivos específicos", de: "KI die Aktionen plant um spezifische Ziele zu erreichen", nl: "AI die acties plant om specifieke doelstellingen te bereiken" },
          { en: "AI that sets player goals", es: "IA que establece objetivos del jugador", de: "KI die Spielerziele festlegt", nl: "AI die spelerdoelen vaststelt" },
          { en: "AI that scores goals in sports games", es: "IA que anota goles en juegos deportivos", de: "KI die Tore in Sportspielen schießt", nl: "AI die doelpunten scoort in sportgames" },
          { en: "AI that counts achievements", es: "IA que cuenta logros", de: "KI die Erfolge zählt", nl: "AI die prestaties telt" }
        ],
        correct: 0,
        explanation: {
          en: "Goal-oriented AI uses planning algorithms to break down complex objectives into smaller achievable steps, creating intelligent behavior.",
          es: "La IA orientada a objetivos usa algoritmos de planificación para dividir objetivos complejos en pasos más pequeños alcanzables, creando comportamiento inteligente.",
          de: "Zielorientierte KI nutzt Planungsalgorithmen um komplexe Ziele in kleinere erreichbare Schritte aufzuteilen, schafft intelligentes Verhalten.",
          nl: "Doelgerichte AI gebruikt planningsalgoritmes om complexe doelstellingen op te delen in kleinere haalbare stappen, waardoor intelligent gedrag ontstaat."
        }
      },
      {
        question: {
          en: "What does 'aggro' system mean in gaming AI?",
          es: "¿Qué significa el sistema 'aggro' en IA de juegos?",
          de: "Was bedeutet 'Aggro'-System in Gaming-KI?",
          nl: "Wat betekent 'aggro' systeem in gaming AI?"
        },
        options: [
          { en: "System that determines which player enemies will target", es: "Sistema que determina a qué jugador atacarán los enemigos", de: "System das bestimmt welchen Spieler Feinde angreifen werden", nl: "Systeem dat bepaalt welke speler vijanden zullen aanvallen" },
          { en: "System that makes AI more aggressive", es: "Sistema que hace que la IA sea más agresiva", de: "System das KI aggressiver macht", nl: "Systeem dat AI agressiever maakt" },
          { en: "System for managing game anger", es: "Sistema para gestionar la ira del juego", de: "System zur Verwaltung von Spielwut", nl: "Systeem voor het beheren van spelwoede" },
          { en: "System that controls sound effects", es: "Sistema que controla efectos de sonido", de: "System das Soundeffekte kontrolliert", nl: "Systeem dat geluidseffecten controleert" }
        ],
        correct: 0,
        explanation: {
          en: "Aggro systems track threat levels from different players, helping AI enemies decide which target poses the greatest danger.",
          es: "Los sistemas aggro rastrean niveles de amenaza de diferentes jugadores, ayudando a enemigos IA a decidir qué objetivo representa el mayor peligro.",
          de: "Aggro-Systeme verfolgen Bedrohungsstufen verschiedener Spieler, helfen KI-Feinden zu entscheiden welches Ziel die größte Gefahr darstellt.",
          nl: "Aggro systemen volgen bedreigingsniveaus van verschillende spelers, helpen AI-vijanden beslissen welk doelwit het grootste gevaar vormt."
        }
      },
      {
        question: {
          en: "What is 'utility-based AI' in game development?",
          es: "¿Qué es 'IA basada en utilidad' en desarrollo de juegos?",
          de: "Was ist 'nutzenbasierte KI' in der Spieleentwicklung?",
          nl: "Wat is 'utility-based AI' in game ontwikkeling?"
        },
        options: [
          { en: "AI that chooses actions based on scoring different options", es: "IA que elige acciones basándose en puntuación de diferentes opciones", de: "KI die Aktionen basierend auf Bewertung verschiedener Optionen wählt", nl: "AI die acties kiest gebaseerd op het scoren van verschillende opties" },
          { en: "AI that manages game utilities", es: "IA que gestiona utilidades del juego", de: "KI die Spielwerkzeuge verwaltet", nl: "AI die game utilities beheert" },
          { en: "AI that controls power consumption", es: "IA que controla el consumo de energía", de: "KI die Stromverbrauch kontrolliert", nl: "AI die stroomverbruik controleert" },
          { en: "AI that organizes game files", es: "IA que organiza archivos de juego", de: "KI die Spieldateien organisiert", nl: "AI die gamebestanden organiseert" }
        ],
        correct: 0,
        explanation: {
          en: "Utility AI evaluates all possible actions and selects the one with the highest utility score, creating more nuanced decision-making.",
          es: "IA de utilidad evalúa todas las acciones posibles y selecciona la que tiene la puntuación de utilidad más alta, creando toma de decisiones más matizada.",
          de: "Nutzen-KI bewertet alle möglichen Aktionen und wählt die mit der höchsten Nutzenpunktzahl, schafft nuanciertere Entscheidungsfindung.",
          nl: "Utility AI evalueert alle mogelijke acties en selecteert degene met de hoogste utility score, waardoor meer genuanceerde besluitvorming ontstaat."
        }
      },
      {
        question: {
          en: "What is 'Monte Carlo Tree Search' used for in games?",
          es: "¿Para qué se usa 'Monte Carlo Tree Search' en juegos?",
          de: "Wofür wird 'Monte Carlo Tree Search' in Spielen verwendet?",
          nl: "Waarvoor wordt 'Monte Carlo Tree Search' gebruikt in games?"
        },
        options: [
          { en: "AI decision-making by simulating many possible outcomes", es: "Toma de decisiones IA simulando muchos resultados posibles", de: "KI-Entscheidungsfindung durch Simulation vieler möglicher Ergebnisse", nl: "AI besluitvorming door het simuleren van veel mogelijke uitkomsten" },
          { en: "Searching for treasure in games", es: "Buscar tesoros en juegos", de: "Schatzsuche in Spielen", nl: "Zoeken naar schatten in games" },
          { en: "Finding players in multiplayer games", es: "Encontrar jugadores en juegos multijugador", de: "Spieler in Mehrspieler-Spielen finden", nl: "Spelers vinden in multiplayer games" },
          { en: "Searching game databases", es: "Buscar en bases de datos de juegos", de: "Spieldatenbanken durchsuchen", nl: "Game databases doorzoeken" }
        ],
        correct: 0,
        explanation: {
          en: "MCTS is a powerful algorithm that explores game possibilities by running thousands of simulations to find the best move, used in games like Go AI.",
          es: "MCTS es un algoritmo poderoso que explora posibilidades del juego ejecutando miles de simulaciones para encontrar la mejor jugada, usado en juegos como IA de Go.",
          de: "MCTS ist ein mächtiger Algorithmus der Spielmöglichkeiten durch tausende Simulationen erkundet um den besten Zug zu finden, verwendet in Spielen wie Go-KI.",
          nl: "MCTS is een krachtig algoritme dat spelmogelijkheden verkent door duizenden simulaties uit te voeren om de beste zet te vinden, gebruikt in games zoals Go AI."
        }
      },
      {
        question: {
          en: "What is 'swarm intelligence' in gaming?",
          es: "¿Qué es 'inteligencia de enjambre' en juegos?",
          de: "Was ist 'Schwarm-Intelligenz' im Gaming?",
          nl: "Wat is 'swarm intelligence' in gaming?"
        },
        options: [
          { en: "Multiple simple AI agents working together to create complex behavior", es: "Múltiples agentes IA simples trabajando juntos para crear comportamiento complejo", de: "Mehrere einfache KI-Agenten arbeiten zusammen um komplexes Verhalten zu schaffen", nl: "Meerdere eenvoudige AI-agenten die samenwerken om complex gedrag te creëren" },
          { en: "AI that controls insect characters only", es: "IA que controla solo personajes insectos", de: "KI die nur Insektencharaktere kontrolliert", nl: "AI die alleen insectenkarakters controleert" },
          { en: "AI that makes buzzing sounds", es: "IA que hace sonidos de zumbido", de: "KI die summende Geräusche macht", nl: "AI die zoemende geluiden maakt" },
          { en: "AI that collects virtual honey", es: "IA que recolecta miel virtual", de: "KI die virtuellen Honig sammelt", nl: "AI die virtuele honing verzamelt" }
        ],
        correct: 0,
        explanation: {
          en: "Swarm intelligence emerges when many simple AI entities follow basic rules but collectively create sophisticated group behaviors, like flocking birds.",
          es: "La inteligencia de enjambre emerge cuando muchas entidades IA simples siguen reglas básicas pero colectivamente crean comportamientos grupales sofisticados, como bandadas de pájaros.",
          de: "Schwarm-Intelligenz entsteht wenn viele einfache KI-Entitäten grundlegende Regeln befolgen aber kollektiv ausgeklügelte Gruppenverhaltensweisen schaffen, wie schwärmende Vögel.",
          nl: "Swarm intelligence ontstaat wanneer veel eenvoudige AI-entiteiten basale regels volgen maar collectief geavanceerde groepsgedragingen creëren, zoals zwermende vogels."
        }
      },
      {
        question: {
          en: "What is 'procedural animation' in game AI?",
          es: "¿Qué es 'animación procedimental' en IA de juegos?",
          de: "Was ist 'prozedurale Animation' in Spiele-KI?",
          nl: "Wat is 'procedural animation' in game AI?"
        },
        options: [
          { en: "AI-generated character movements that adapt to situations", es: "Movimientos de personajes generados por IA que se adaptan a situaciones", de: "KI-generierte Charakterbewegungen die sich an Situationen anpassen", nl: "Door AI gegenereerde karakterbewegingen die zich aanpassen aan situaties" },
          { en: "Pre-made animation sequences", es: "Secuencias de animación predefinidas", de: "Vorgefertigte Animationssequenzen", nl: "Voorgemaakte animatiesequenties" },
          { en: "Animations created by artists only", es: "Animaciones creadas solo por artistas", de: "Animationen nur von Künstlern erstellt", nl: "Animaties alleen gemaakt door kunstenaars" },
          { en: "Static character poses", es: "Poses estáticas de personajes", de: "Statische Charakterposen", nl: "Statische karakterposes" }
        ],
        correct: 0,
        explanation: {
          en: "Procedural animation uses AI to generate realistic character movements on-the-fly, adapting to terrain, obstacles, and situations dynamically.",
          es: "La animación procedimental usa IA para generar movimientos realistas de personajes sobre la marcha, adaptándose dinámicamente al terreno, obstáculos y situaciones.",
          de: "Prozedurale Animation nutzt KI um realistische Charakterbewegungen spontan zu generieren, passt sich dynamisch an Terrain, Hindernisse und Situationen an.",
          nl: "Procedural animation gebruikt AI om realistische karakterbewegingen ter plekke te genereren, die zich dynamisch aanpassen aan terrein, obstakels en situaties."
        }
      },
      {
        question: {
          en: "What is 'fuzzy logic' in game AI?",
          es: "¿Qué es 'lógica difusa' en IA de juegos?",
          de: "Was ist 'Fuzzy Logic' in Spiele-KI?",
          nl: "Wat is 'fuzzy logic' in game AI?"
        },
        options: [
          { en: "Logic system that deals with degrees of truth rather than absolute true/false", es: "Sistema lógico que trata con grados de verdad en lugar de verdadero/falso absoluto", de: "Logiksystem das mit Wahrheitsgraden anstatt absolutem wahr/falsch arbeitet", nl: "Logisch systeem dat werkt met waarheidsgraden in plaats van absoluut waar/onwaar" },
          { en: "Logic that creates blurry graphics", es: "Lógica que crea gráficos borrosos", de: "Logik die unscharfe Grafiken erstellt", nl: "Logica die wazige graphics creëert" },
          { en: "Logic that makes AI confused", es: "Lógica que confunde a la IA", de: "Logik die KI verwirrt", nl: "Logica die AI verward maakt" },
          { en: "Logic with unclear instructions", es: "Lógica con instrucciones poco claras", de: "Logik mit unklaren Anweisungen", nl: "Logica met onduidelijke instructies" }
        ],
        correct: 0,
        explanation: {
          en: "Fuzzy logic allows AI to make decisions based on partial information and degrees of certainty, making behavior more human-like and flexible.",
          es: "La lógica difusa permite a la IA tomar decisiones basadas en información parcial y grados de certeza, haciendo el comportamiento más humano y flexible.",
          de: "Fuzzy Logic ermöglicht KI Entscheidungen basierend auf teilweisen Informationen und Gewissheitsgraden zu treffen, macht Verhalten menschlicher und flexibler.",
          nl: "Fuzzy logic stelt AI in staat om beslissingen te nemen gebaseerd op gedeeltelijke informatie en zekerheidsgraden, waardoor gedrag menselijker en flexibeler wordt."
        }
      },
      {
        question: {
          en: "What is 'blackboard architecture' in AI systems?",
          es: "¿Qué es 'arquitectura de pizarra' en sistemas IA?",
          de: "Was ist 'Blackboard-Architektur' in KI-Systemen?",
          nl: "Wat is 'blackboard architecture' in AI-systemen?"
        },
        options: [
          { en: "System where multiple AI components share information on a common data structure", es: "Sistema donde múltiples componentes IA comparten información en una estructura de datos común", de: "System wo mehrere KI-Komponenten Informationen in einer gemeinsamen Datenstruktur teilen", nl: "Systeem waarbij meerdere AI-componenten informatie delen op een gemeenschappelijke datastructuur" },
          { en: "System that uses black game boards", es: "Sistema que usa tableros de juego negros", de: "System das schwarze Spielbretter verwendet", nl: "Systeem dat zwarte spelborden gebruikt" },
          { en: "AI that writes on blackboards", es: "IA que escribe en pizarras", de: "KI die auf Tafeln schreibt", nl: "AI die op schoolborden schrijft" },
          { en: "Architecture for classroom games", es: "Arquitectura para juegos de aula", de: "Architektur für Klassenzimmerspiele", nl: "Architectuur voor klaslokaalspellen" }
        ],
        correct: 0,
        explanation: {
          en: "Blackboard systems allow different AI modules to collaborate by posting and reading information from a shared knowledge base, enabling complex problem-solving.",
          es: "Los sistemas de pizarra permiten a diferentes módulos IA colaborar publicando y leyendo información de una base de conocimientos compartida, habilitando resolución compleja de problemas.",
          de: "Blackboard-Systeme ermöglichen verschiedenen KI-Modulen zusammenzuarbeiten indem sie Informationen in einer geteilten Wissensbasis posten und lesen, ermöglicht komplexe Problemlösung.",
          nl: "Blackboard systemen stellen verschillende AI-modules in staat om samen te werken door informatie te posten en te lezen van een gedeelde kennisbank, wat complexe probleemoplossing mogelijk maakt."
        }
      },
      {
        question: {
          en: "What is 'reactive AI' in gaming?",
          es: "¿Qué es 'IA reactiva' en juegos?",
          de: "Was ist 'reaktive KI' im Gaming?",
          nl: "Wat is 'reactieve AI' in gaming?"
        },
        options: [
          { en: "AI that responds immediately to current situations without planning ahead", es: "IA que responde inmediatamente a situaciones actuales sin planificar adelante", de: "KI die sofort auf aktuelle Situationen reagiert ohne vorauszuplanen", nl: "AI die onmiddellijk reageert op huidige situaties zonder vooruit te plannen" },
          { en: "AI that creates chemical reactions", es: "IA que crea reacciones químicas", de: "KI die chemische Reaktionen erzeugt", nl: "AI die chemische reacties creëert" },
          { en: "AI that only reacts to player emotions", es: "IA que solo reacciona a emociones del jugador", de: "KI die nur auf Spieleremotionen reagiert", nl: "AI die alleen reageert op speleremotios" },
          { en: "AI that controls game reactions", es: "IA que controla reacciones del juego", de: "KI die Spielreaktionen kontrolliert", nl: "AI die spelreacties controleert" }
        ],
        correct: 0,
        explanation: {
          en: "Reactive AI operates on stimulus-response patterns, making quick decisions based on immediate environmental inputs rather than long-term strategies.",
          es: "La IA reactiva opera en patrones estímulo-respuesta, tomando decisiones rápidas basadas en entradas ambientales inmediatas en lugar de estrategias a largo plazo.",
          de: "Reaktive KI arbeitet mit Stimulus-Response-Mustern, trifft schnelle Entscheidungen basierend auf unmittelbaren Umwelteingaben anstatt langfristigen Strategien.",
          nl: "Reactieve AI werkt met stimulus-respons patronen, neemt snelle beslissingen gebaseerd op onmiddellijke omgevingsinput in plaats van langetermijnstrategieën."
        }
      },
      {
        question: {
          en: "What is 'deliberative AI' in game development?",
          es: "¿Qué es 'IA deliberativa' en desarrollo de juegos?",
          de: "Was ist 'deliberative KI' in der Spieleentwicklung?",
          nl: "Wat is 'deliberatieve AI' in game ontwikkeling?"
        },
        options: [
          { en: "AI that plans and reasons about future actions before acting", es: "IA que planifica y razona sobre acciones futuras antes de actuar", de: "KI die plant und über zukünftige Aktionen nachdenkt bevor sie handelt", nl: "AI die plant en redeneert over toekomstige acties voordat ze handelt" },
          { en: "AI that deliberates on graphics quality", es: "IA que delibera sobre calidad gráfica", de: "KI die über Grafikqualität berät", nl: "AI die beraadslaagt over grafische kwaliteit" },
          { en: "AI that makes slow decisions only", es: "IA que solo toma decisiones lentas", de: "KI die nur langsame Entscheidungen trifft", nl: "AI die alleen langzame beslissingen neemt" },
          { en: "AI that discusses game strategies with players", es: "IA que discute estrategias de juego con jugadores", de: "KI die Spielstrategien mit Spielern diskutiert", nl: "AI die spelstrategieën bespreekt met spelers" }
        ],
        correct: 0,
        explanation: {
          en: "Deliberative AI uses sophisticated planning algorithms to think ahead, consider consequences, and make strategic decisions rather than just reacting.",
          es: "La IA deliberativa usa algoritmos de planificación sofisticados para pensar adelante, considerar consecuencias y tomar decisiones estratégicas en lugar de solo reaccionar.",
          de: "Deliberative KI nutzt ausgeklügelte Planungsalgorithmen um vorauszudenken, Konsequenzen zu betrachten und strategische Entscheidungen zu treffen anstatt nur zu reagieren.",
          nl: "Deliberatieve AI gebruikt geavanceerde planningsalgoritmes om vooruit te denken, gevolgen te overwegen en strategische beslissingen te nemen in plaats van alleen te reageren."
        }
      },
      {
        question: {
          en: "What is 'hybrid AI architecture' in modern games?",
          es: "¿Qué es 'arquitectura IA híbrida' en juegos modernos?",
          de: "Was ist 'hybride KI-Architektur' in modernen Spielen?",
          nl: "Wat is 'hybride AI-architectuur' in moderne games?"
        },
        options: [
          { en: "Combination of reactive and deliberative AI systems working together", es: "Combinación de sistemas IA reactivos y deliberativos trabajando juntos", de: "Kombination von reaktiven und deliberativen KI-Systemen die zusammenarbeiten", nl: "Combinatie van reactieve en deliberatieve AI-systemen die samenwerken" },
          { en: "AI that works on hybrid vehicles only", es: "IA que funciona solo en vehículos híbridos", de: "KI die nur bei Hybridfahrzeugen funktioniert", nl: "AI die alleen werkt op hybride voertuigen" },
          { en: "AI powered by hybrid energy sources", es: "IA alimentada por fuentes de energía híbridas", de: "KI betrieben durch hybride Energiequellen", nl: "AI aangedreven door hybride energiebronnen" },
          { en: "Mixed reality AI systems", es: "Sistemas IA de realidad mixta", de: "Mixed Reality KI-Systeme", nl: "Mixed reality AI-systemen" }
        ],
        correct: 0,
        explanation: {
          en: "Hybrid AI combines the speed of reactive systems with the intelligence of deliberative planning, creating more versatile and capable game AI.",
          es: "La IA híbrida combina la velocidad de sistemas reactivos con la inteligencia de planificación deliberativa, creando IA de juegos más versátil y capaz.",
          de: "Hybride KI kombiniert die Geschwindigkeit reaktiver Systeme mit der Intelligenz deliberativer Planung, schafft vielseitigere und fähigere Spiele-KI.",
          nl: "Hybride AI combineert de snelheid van reactieve systemen met de intelligentie van deliberatieve planning, waardoor veelzijdigere en bekwamere game AI ontstaat."
        }
      },
      {
        question: {
          en: "What is 'machine learning' integration in modern game AI?",
          es: "¿Qué es la integración de 'aprendizaje automático' en IA de juegos modernos?",
          de: "Was ist 'Machine Learning'-Integration in moderner Spiele-KI?",
          nl: "Wat is 'machine learning' integratie in moderne game AI?"
        },
        options: [
          { en: "AI that improves its performance by learning from player behavior data", es: "IA que mejora su rendimiento aprendiendo de datos de comportamiento del jugador", de: "KI die ihre Leistung durch Lernen aus Spielerverhaltens-Daten verbessert", nl: "AI die haar prestaties verbetert door te leren van spelergedragdata" },
          { en: "AI that teaches players how to use machines", es: "IA que enseña a jugadores cómo usar máquinas", de: "KI die Spielern beibringt Maschinen zu benutzen", nl: "AI die spelers leert hoe ze machines moeten gebruiken" },
          { en: "AI that only works with learning games", es: "IA que solo funciona con juegos educativos", de: "KI die nur mit Lernspielen funktioniert", nl: "AI die alleen werkt met leerspellen" },
          { en: "AI that automates machine maintenance", es: "IA que automatiza mantenimiento de máquinas", de: "KI die Maschinenwartung automatisiert", nl: "AI die machineonderhoud automatiseert" }
        ],
        correct: 0,
        explanation: {
          en: "Machine learning allows game AI to adapt and improve over time by analyzing player patterns, creating more personalized and challenging experiences.",
          es: "El aprendizaje automático permite a la IA de juegos adaptarse y mejorar con el tiempo analizando patrones de jugadores, creando experiencias más personalizadas y desafiantes.",
          de: "Machine Learning ermöglicht Spiele-KI sich anzupassen und mit der Zeit zu verbessern durch Analyse von Spielermustern, schafft personalisiertere und herausforderndere Erfahrungen.",
          nl: "Machine learning stelt game AI in staat om zich aan te passen en te verbeteren door het analyseren van spelerpatronen, waardoor meer gepersonaliseerde en uitdagende ervaringen ontstaan."
        }
      },
      {
        question: {
          en: "What is the purpose of behavior trees in game AI?",
          es: "¿Cuál es el propósito de los árboles de comportamiento en la IA de juegos?",
          de: "Was ist der Zweck von Verhaltensbäumen in Spiele-KI?",
          nl: "Wat is het doel van gedragsbomen in game AI?"
        },
        options: [
          { en: "To organize and control AI decision-making", es: "Organizar y controlar la toma de decisiones de IA", de: "KI-Entscheidungsfindung zu organisieren und kontrollieren", nl: "AI-besluitvorming organiseren en controleren" },
          { en: "To render trees in the game", es: "Renderizar árboles en el juego", de: "Bäume im Spiel zu rendern", nl: "Bomen in het spel renderen" },
          { en: "To calculate tree growth", es: "Calcular el crecimiento de árboles", de: "Baumwachstum zu berechnen", nl: "Boomgroei berekenen" },
          { en: "To generate forest sounds", es: "Generar sonidos de bosque", de: "Waldgeräusche zu erzeugen", nl: "Bosgeluiden genereren" }
        ],
        correct: 0,
        explanation: {
          en: "Behavior trees are hierarchical structures used to organize and execute AI behaviors in games, providing a modular and scalable way to create complex decision-making systems.",
          es: "Los árboles de comportamiento son estructuras jerárquicas usadas para organizar y ejecutar comportamientos de IA en juegos, proporcionando una forma modular y escalable de crear sistemas complejos de toma de decisiones.",
          de: "Verhaltensbäume sind hierarchische Strukturen zur Organisation und Ausführung von KI-Verhaltensweisen in Spielen, die einen modularen und skalierbaren Weg zur Erstellung komplexer Entscheidungssysteme bieten.",
          nl: "Gedragsbomen zijn hiërarchische structuren die gebruikt worden om AI-gedrag in games te organiseren en uit te voeren, wat een modulaire en schaalbare manier biedt om complexe besluitvormingssystemen te creëren."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  } else if (typeof window !== 'undefined') {
    window.level2 = level2;
  }
})();
