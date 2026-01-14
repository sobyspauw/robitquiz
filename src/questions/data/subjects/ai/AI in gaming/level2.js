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
      },
      {
        question: {
          en: "What is 'influence mapping' in strategy game AI?",
          es: "¿Qué es el 'mapeo de influencia' en IA de juegos de estrategia?",
          de: "Was ist 'Influence Mapping' in Strategie-Spiele-KI?",
          nl: "Wat is 'influence mapping' in strategie game AI?"
        },
        options: [
          { en: "Technique to visualize and analyze territorial control and strategic positioning", es: "Técnica para visualizar y analizar control territorial y posicionamiento estratégico", de: "Technik zur Visualisierung und Analyse territorialer Kontrolle und strategischer Positionierung", nl: "Techniek om territoriale controle en strategische positionering te visualiseren en analyseren" },
          { en: "Map showing player influence on social media", es: "Mapa que muestra influencia de jugador en redes sociales", de: "Karte die Spielereinfluss in sozialen Medien zeigt", nl: "Kaart die spelerinvloed op sociale media toont" },
          { en: "Technique for drawing game maps", es: "Técnica para dibujar mapas de juego", de: "Technik zum Zeichnen von Spielkarten", nl: "Techniek voor het tekenen van spelkaarten" },
          { en: "System for influencing player decisions", es: "Sistema para influenciar decisiones de jugador", de: "System zur Beeinflussung von Spielerentscheidungen", nl: "Systeem om spelerbeslissingen te beïnvloeden" }
        ],
        correct: 0,
        explanation: {
          en: "Influence maps help strategy game AI evaluate which areas of the map are controlled by which player, informing tactical decisions about expansion and defense.",
          es: "Los mapas de influencia ayudan a la IA de juegos de estrategia a evaluar qué áreas del mapa están controladas por qué jugador, informando decisiones tácticas sobre expansión y defensa.",
          de: "Influence Maps helfen Strategie-Spiele-KI zu bewerten welche Bereiche der Karte von welchem Spieler kontrolliert werden, informiert taktische Entscheidungen über Expansion und Verteidigung.",
          nl: "Influence maps helpen strategie game AI om te evalueren welke gebieden van de kaart door welke speler worden gecontroleerd, wat tactische beslissingen over expansie en verdediging informeert."
        }
      },
      {
        question: {
          en: "What is 'terrain analysis' in game AI?",
          es: "¿Qué es el 'análisis de terreno' en IA de juegos?",
          de: "Was ist 'Terrainanalyse' in Spiele-KI?",
          nl: "Wat is 'terreinanalyse' in game AI?"
        },
        options: [
          { en: "AI evaluating environmental features to make tactical decisions", es: "IA evaluando características ambientales para tomar decisiones tácticas", de: "KI bewertet Umgebungsmerkmale um taktische Entscheidungen zu treffen", nl: "AI evalueert omgevingskenmerken om tactische beslissingen te nemen" },
          { en: "System for creating realistic terrain graphics", es: "Sistema para crear gráficos de terreno realistas", de: "System zur Erstellung realistischer Terraingrafiken", nl: "Systeem voor het creëren van realistische terreingraphics" },
          { en: "AI that designs game levels", es: "IA que diseña niveles de juego", de: "KI die Spiel-Level entwirft", nl: "AI die game levels ontwerpt" },
          { en: "Analysis of player terrain preferences", es: "Análisis de preferencias de terreno de jugador", de: "Analyse von Spieler-Terrainpräferenzen", nl: "Analyse van speler terreinvoorkeuren" }
        ],
        correct: 0,
        explanation: {
          en: "Terrain analysis allows AI to understand advantages of high ground, cover positions, choke points, and other environmental factors when making strategic decisions.",
          es: "El análisis de terreno permite a la IA entender ventajas de terreno elevado, posiciones de cobertura, puntos de estrangulamiento y otros factores ambientales al tomar decisiones estratégicas.",
          de: "Terrainanalyse ermöglicht KI Vorteile von Höhenlagen, Deckungspositionen, Engpässen und anderen Umweltfaktoren bei strategischen Entscheidungen zu verstehen.",
          nl: "Terreinanalyse stelt AI in staat om voordelen van hoog terrein, dekkingsposities, knelpunten en andere omgevingsfactoren te begrijpen bij het nemen van strategische beslissingen."
        }
      },
      {
        question: {
          en: "What is 'predictive AI' in competitive games?",
          es: "¿Qué es 'IA predictiva' en juegos competitivos?",
          de: "Was ist 'vorausschauende KI' in kompetitiven Spielen?",
          nl: "Wat is 'predictieve AI' in competitieve games?"
        },
        options: [
          { en: "AI that anticipates player actions based on patterns", es: "IA que anticipa acciones del jugador basándose en patrones", de: "KI die Spieleraktionen basierend auf Mustern vorhersagt", nl: "AI die speleracties anticipeert op basis van patronen" },
          { en: "AI that predicts weather in games", es: "IA que predice el clima en juegos", de: "KI die Wetter in Spielen vorhersagt", nl: "AI die weer voorspelt in games" },
          { en: "AI that forecasts game sales", es: "IA que pronostica ventas de juegos", de: "KI die Spielverkäufe prognostiziert", nl: "AI die gameverkopen voorspelt" },
          { en: "AI that predicts player preferences", es: "IA que predice preferencias de jugador", de: "KI die Spielerpräferenzen vorhersagt", nl: "AI die spelervoorkeuren voorspelt" }
        ],
        correct: 0,
        explanation: {
          en: "Predictive AI analyzes player behavior patterns to anticipate likely next moves, allowing the AI to prepare counter-strategies and create more challenging gameplay.",
          es: "La IA predictiva analiza patrones de comportamiento del jugador para anticipar movimientos probables siguientes, permitiendo a la IA preparar contraestrategias y crear jugabilidad más desafiante.",
          de: "Vorausschauende KI analysiert Spielerverhaltensmuster um wahrscheinliche nächste Züge vorherzusagen, ermöglicht KI Gegenstrategien vorzubereiten und herausfordernderes Gameplay zu schaffen.",
          nl: "Predictieve AI analyseert spelergedragpatronen om waarschijnlijke volgende zetten te anticiperen, waardoor de AI tegenstrategieën kan voorbereiden en uitdagendere gameplay kan creëren."
        }
      },
      {
        question: {
          en: "What is 'coordination AI' in team-based games?",
          es: "¿Qué es 'IA de coordinación' en juegos basados en equipos?",
          de: "Was ist 'Koordinations-KI' in teambasierten Spielen?",
          nl: "Wat is 'coördinatie AI' in teamgebaseerde games?"
        },
        options: [
          { en: "Systems that enable multiple AI agents to work together effectively", es: "Sistemas que permiten a múltiples agentes IA trabajar juntos efectivamente", de: "Systeme die mehreren KI-Agenten ermöglichen effektiv zusammenzuarbeiten", nl: "Systemen die meerdere AI-agenten in staat stellen om effectief samen te werken" },
          { en: "AI that schedules multiplayer matches", es: "IA que programa partidas multijugador", de: "KI die Mehrspieler-Matches plant", nl: "AI die multiplayer matches plant" },
          { en: "System for coordinating game graphics", es: "Sistema para coordinar gráficos del juego", de: "System zur Koordinierung von Spielgrafiken", nl: "Systeem voor het coördineren van spelgraphics" },
          { en: "AI that manages player teams", es: "IA que gestiona equipos de jugador", de: "KI die Spielerteams verwaltet", nl: "AI die spelerteams beheert" }
        ],
        correct: 0,
        explanation: {
          en: "Coordination AI enables AI teammates to communicate, share information, execute combined tactics, and support each other like human team members would.",
          es: "La IA de coordinación permite a compañeros IA comunicarse, compartir información, ejecutar tácticas combinadas y apoyarse mutuamente como lo harían miembros humanos de equipo.",
          de: "Koordinations-KI ermöglicht KI-Teammitgliedern zu kommunizieren, Informationen zu teilen, kombinierte Taktiken auszuführen und sich gegenseitig zu unterstützen wie menschliche Teammitglieder.",
          nl: "Coördinatie AI stelt AI-teamgenoten in staat om te communiceren, informatie te delen, gecombineerde tactieken uit te voeren en elkaar te ondersteunen zoals menselijke teamleden zouden doen."
        }
      },
      {
        question: {
          en: "What is 'dynamic pathfinding' in open-world games?",
          es: "¿Qué es la 'búsqueda dinámica de caminos' en juegos de mundo abierto?",
          de: "Was ist 'dynamisches Pathfinding' in Open-World-Spielen?",
          nl: "Wat is 'dynamische pathfinding' in open-world games?"
        },
        options: [
          { en: "Pathfinding that adapts to changing environments and obstacles", es: "Búsqueda de caminos que se adapta a entornos y obstáculos cambiantes", de: "Pathfinding das sich an sich ändernde Umgebungen und Hindernisse anpasst", nl: "Pathfinding die zich aanpast aan veranderende omgevingen en obstakels" },
          { en: "Finding the fastest route only", es: "Encontrar solo la ruta más rápida", de: "Nur die schnellste Route finden", nl: "Alleen de snelste route vinden" },
          { en: "Static pre-calculated paths", es: "Caminos estáticos precalculados", de: "Statische vorberechnete Pfade", nl: "Statische vooraf berekende paden" },
          { en: "Pathfinding for dynamic lighting", es: "Búsqueda de caminos para iluminación dinámica", de: "Pathfinding für dynamische Beleuchtung", nl: "Pathfinding voor dynamische verlichting" }
        ],
        correct: 0,
        explanation: {
          en: "Dynamic pathfinding recalculates routes in real-time as obstacles appear/disappear, other characters move, or environmental conditions change, ensuring AI navigation remains effective.",
          es: "La búsqueda dinámica de caminos recalcula rutas en tiempo real mientras obstáculos aparecen/desaparecen, otros personajes se mueven o condiciones ambientales cambian, asegurando que la navegación IA permanezca efectiva.",
          de: "Dynamisches Pathfinding berechnet Routen in Echtzeit neu während Hindernisse erscheinen/verschwinden, andere Charaktere sich bewegen oder Umgebungsbedingungen sich ändern, stellt sicher dass KI-Navigation effektiv bleibt.",
          nl: "Dynamische pathfinding herberekent routes in real-time terwijl obstakels verschijnen/verdwijnen, andere karakters bewegen of omgevingsomstandigheden veranderen, waardoor AI-navigatie effectief blijft."
        }
      },
      {
        question: {
          en: "What is 'decision-making under uncertainty' in game AI?",
          es: "¿Qué es la 'toma de decisiones bajo incertidumbre' en IA de juegos?",
          de: "Was ist 'Entscheidungsfindung unter Unsicherheit' in Spiele-KI?",
          nl: "Wat is 'besluitvorming onder onzekerheid' in game AI?"
        },
        options: [
          { en: "AI making choices when lacking complete information about the game state", es: "IA tomando decisiones cuando carece de información completa sobre el estado del juego", de: "KI trifft Entscheidungen wenn vollständige Informationen über den Spielzustand fehlen", nl: "AI neemt beslissingen wanneer volledige informatie over de spelstatus ontbreekt" },
          { en: "AI that is uncertain about all decisions", es: "IA que está insegura sobre todas las decisiones", de: "KI die bei allen Entscheidungen unsicher ist", nl: "AI die onzeker is over alle beslissingen" },
          { en: "AI that only works in unpredictable games", es: "IA que solo funciona en juegos impredecibles", de: "KI die nur in unvorhersehbaren Spielen funktioniert", nl: "AI die alleen werkt in onvoorspelbare games" },
          { en: "Random AI behavior", es: "Comportamiento IA aleatorio", de: "Zufälliges KI-Verhalten", nl: "Willekeurig AI-gedrag" }
        ],
        correct: 0,
        explanation: {
          en: "AI must often make decisions with incomplete information about player positions, resources, or intentions, using probabilistic reasoning and risk assessment to choose optimal actions.",
          es: "La IA debe a menudo tomar decisiones con información incompleta sobre posiciones de jugador, recursos o intenciones, usando razonamiento probabilístico y evaluación de riesgo para elegir acciones óptimas.",
          de: "KI muss oft Entscheidungen mit unvollständigen Informationen über Spielerpositionen, Ressourcen oder Absichten treffen, nutzt probabilistisches Denken und Risikobewertung um optimale Aktionen zu wählen.",
          nl: "AI moet vaak beslissingen nemen met onvolledige informatie over spelerposities, resources of intenties, met gebruik van probabilistisch redeneren en risicobeoordeling om optimale acties te kiezen."
        }
      },
      {
        question: {
          en: "What is 'hierarchical task network planning' in game AI?",
          es: "¿Qué es la 'planificación de red de tareas jerárquicas' en IA de juegos?",
          de: "Was ist 'hierarchische Aufgabennetzwerkplanung' in Spiele-KI?",
          nl: "Wat is 'hiërarchische taaknetwerkplanning' in game AI?"
        },
        options: [
          { en: "Breaking complex goals into hierarchies of smaller tasks", es: "Dividir objetivos complejos en jerarquías de tareas más pequeñas", de: "Komplexe Ziele in Hierarchien kleinerer Aufgaben aufteilen", nl: "Complexe doelen opdelen in hiërarchieën van kleinere taken" },
          { en: "Organizing AI code in folders", es: "Organizar código IA en carpetas", de: "KI-Code in Ordnern organisieren", nl: "AI-code in mappen organiseren" },
          { en: "Planning multiplayer network tasks", es: "Planificar tareas de red multijugador", de: "Mehrspieler-Netzwerkaufgaben planen", nl: "Multiplayer netwerktaken plannen" },
          { en: "Task scheduling for game servers", es: "Programación de tareas para servidores de juego", de: "Aufgabenplanung für Spielserver", nl: "Taakplanning voor game servers" }
        ],
        correct: 0,
        explanation: {
          en: "HTN planning decomposes high-level objectives (like 'capture the base') into sequences of lower-level actions (move here, attack that, defend this), creating sophisticated AI behavior.",
          es: "La planificación HTN descompone objetivos de alto nivel (como 'capturar la base') en secuencias de acciones de nivel inferior (moverse aquí, atacar eso, defender esto), creando comportamiento IA sofisticado.",
          de: "HTN-Planung zerlegt hochrangige Ziele (wie 'Basis erobern') in Sequenzen niedrigerer Aktionen (hierhin bewegen, das angreifen, dies verteidigen), schafft ausgeklügeltes KI-Verhalten.",
          nl: "HTN planning ontleedt high-level doelstellingen (zoals 'vang de basis') in sequenties van lower-level acties (beweeg hier, val dat aan, verdedig dit), waardoor geavanceerd AI-gedrag ontstaat."
        }
      },
      {
        question: {
          en: "What is 'spatial reasoning' in game AI?",
          es: "¿Qué es el 'razonamiento espacial' en IA de juegos?",
          de: "Was ist 'räumliches Denken' in Spiele-KI?",
          nl: "Wat is 'ruimtelijk redeneren' in game AI?"
        },
        options: [
          { en: "AI understanding and using 3D space for positioning and tactics", es: "IA entendiendo y usando espacio 3D para posicionamiento y tácticas", de: "KI versteht und nutzt 3D-Raum für Positionierung und Taktik", nl: "AI begrijpt en gebruikt 3D-ruimte voor positionering en tactieken" },
          { en: "AI calculating storage space needed", es: "IA calculando espacio de almacenamiento necesario", de: "KI berechnet benötigten Speicherplatz", nl: "AI berekent benodigde opslagruimte" },
          { en: "AI designing game levels", es: "IA diseñando niveles de juego", de: "KI entwirft Spiel-Level", nl: "AI ontwerpt game levels" },
          { en: "AI managing screen space", es: "IA gestionando espacio de pantalla", de: "KI verwaltet Bildschirmbereich", nl: "AI beheert schermruimte" }
        ],
        correct: 0,
        explanation: {
          en: "Spatial reasoning allows AI to understand concepts like flanking, height advantage, cover angles, and optimal positioning based on 3D environmental geometry.",
          es: "El razonamiento espacial permite a la IA entender conceptos como flanqueo, ventaja de altura, ángulos de cobertura y posicionamiento óptimo basado en geometría ambiental 3D.",
          de: "Räumliches Denken ermöglicht KI Konzepte wie Flankenangriffe, Höhenvorteil, Deckungswinkel und optimale Positionierung basierend auf 3D-Umgebungsgeometrie zu verstehen.",
          nl: "Ruimtelijk redeneren stelt AI in staat om concepten zoals flanken, hoogtevoordeel, dekkingshoeken en optimale positionering te begrijpen op basis van 3D-omgevingsgeometrie."
        }
      },
      {
        question: {
          en: "What is 'emotion modeling' in NPC AI?",
          es: "¿Qué es el 'modelado de emociones' en IA de PNJ?",
          de: "Was ist 'Emotionsmodellierung' in NPC-KI?",
          nl: "Wat is 'emotiemodellering' in NPC AI?"
        },
        options: [
          { en: "Simulating emotional states that affect AI behavior and dialogue", es: "Simular estados emocionales que afectan comportamiento y diálogo IA", de: "Emotionale Zustände simulieren die KI-Verhalten und Dialog beeinflussen", nl: "Emotionele toestanden simuleren die AI-gedrag en dialoog beïnvloeden" },
          { en: "AI that detects player emotions", es: "IA que detecta emociones del jugador", de: "KI die Spieleremotionen erkennt", nl: "AI die speleremotios detecteert" },
          { en: "Creating emotional music", es: "Crear música emocional", de: "Emotionale Musik erstellen", nl: "Emotionele muziek creëren" },
          { en: "Modeling facial expressions only", es: "Modelar solo expresiones faciales", de: "Nur Gesichtsausdrücke modellieren", nl: "Alleen gezichtsuitdrukkingen modelleren" }
        ],
        correct: 0,
        explanation: {
          en: "Emotion modeling gives NPCs internal emotional states (happy, angry, fearful) that influence their reactions, creating more believable and dynamic character interactions.",
          es: "El modelado de emociones da a los PNJ estados emocionales internos (feliz, enojado, temeroso) que influyen en sus reacciones, creando interacciones de personajes más creíbles y dinámicas.",
          de: "Emotionsmodellierung gibt NPCs interne emotionale Zustände (glücklich, wütend, ängstlich) die ihre Reaktionen beeinflussen, schafft glaubwürdigere und dynamischere Charakterinteraktionen.",
          nl: "Emotiemodellering geeft NPCs interne emotionele toestanden (blij, boos, angstig) die hun reacties beïnvloeden, waardoor meer geloofwaardige en dynamische karakterinteracties ontstaan."
        }
      },
      {
        question: {
          en: "What is 'squad tactics AI' in military shooters?",
          es: "¿Qué es 'IA de tácticas de escuadrón' en juegos de disparos militares?",
          de: "Was ist 'Squad-Taktik-KI' in Militär-Shootern?",
          nl: "Wat is 'squad tactics AI' in militaire shooters?"
        },
        options: [
          { en: "AI systems enabling coordinated military unit behavior", es: "Sistemas IA que habilitan comportamiento coordinado de unidad militar", de: "KI-Systeme die koordiniertes militärisches Einheitsverhalten ermöglichen", nl: "AI-systemen die gecoördineerd militair eenheidsgedrag mogelijk maken" },
          { en: "AI controlling single soldiers only", es: "IA controlando solo soldados individuales", de: "KI steuert nur einzelne Soldaten", nl: "AI bestuurt alleen individuele soldaten" },
          { en: "Tactics for player squad management", es: "Tácticas para gestión de escuadrón de jugador", de: "Taktiken für Spieler-Squad-Management", nl: "Tactieken voor speler squad management" },
          { en: "AI that teaches military tactics", es: "IA que enseña tácticas militares", de: "KI die militärische Taktiken lehrt", nl: "AI die militaire tactieken onderwijst" }
        ],
        correct: 0,
        explanation: {
          en: "Squad tactics AI coordinates multiple AI soldiers to execute formations, covering fire, flanking maneuvers, and suppression tactics like real military units.",
          es: "La IA de tácticas de escuadrón coordina múltiples soldados IA para ejecutar formaciones, fuego de cobertura, maniobras de flanqueo y tácticas de supresión como unidades militares reales.",
          de: "Squad-Taktik-KI koordiniert mehrere KI-Soldaten um Formationen, Deckungsfeuer, Flankenmanöver und Unterdrückungstaktiken wie echte militärische Einheiten auszuführen.",
          nl: "Squad tactics AI coördineert meerdere AI-soldaten om formaties, dekkingsvuur, flankmanoeuvres en onderdrukkingstactieken uit te voeren zoals echte militaire eenheden."
        }
      },
      {
        question: {
          en: "What is 'combat simulation' in game AI testing?",
          es: "¿Qué es la 'simulación de combate' en pruebas de IA de juegos?",
          de: "Was ist 'Kampfsimulation' beim Testen von Spiele-KI?",
          nl: "Wat is 'gevechtssimulatie' in game AI-testen?"
        },
        options: [
          { en: "Running automated battles to test and balance AI behavior", es: "Ejecutar batallas automatizadas para probar y equilibrar comportamiento IA", de: "Automatisierte Kämpfe durchführen um KI-Verhalten zu testen und auszubalancieren", nl: "Geautomatiseerde gevechten uitvoeren om AI-gedrag te testen en te balanceren" },
          { en: "Creating realistic combat graphics", es: "Crear gráficos de combate realistas", de: "Realistische Kampfgrafiken erstellen", nl: "Realistische gevechtsgrafieken creëren" },
          { en: "Simulating player combat skills", es: "Simular habilidades de combate de jugador", de: "Spieler-Kampffähigkeiten simulieren", nl: "Speler gevechtsvaardigheden simuleren" },
          { en: "Training players in combat", es: "Entrenar jugadores en combate", de: "Spieler im Kampf trainieren", nl: "Spelers trainen in gevechten" }
        ],
        correct: 0,
        explanation: {
          en: "Combat simulation runs thousands of AI vs AI battles to identify balance issues, test strategies, and ensure AI provides appropriate challenge levels.",
          es: "La simulación de combate ejecuta miles de batallas IA vs IA para identificar problemas de equilibrio, probar estrategias y asegurar que IA proporcione niveles de desafío apropiados.",
          de: "Kampfsimulation führt tausende KI vs KI Kämpfe durch um Balanceprobleme zu identifizieren, Strategien zu testen und sicherzustellen dass KI angemessene Herausforderungsstufen bietet.",
          nl: "Gevechtssimulatie voert duizenden AI vs AI gevechten uit om balanceproblemen te identificeren, strategieën te testen en te zorgen dat AI passende uitdagingsniveaus biedt."
        }
      },
      {
        question: {
          en: "What is 'attention system' in game AI?",
          es: "¿Qué es el 'sistema de atención' en IA de juegos?",
          de: "Was ist 'Aufmerksamkeitssystem' in Spiele-KI?",
          nl: "Wat is 'aandachtsysteem' in game AI?"
        },
        options: [
          { en: "Mechanism determining what AI should focus on in complex environments", es: "Mecanismo que determina en qué debería enfocarse la IA en entornos complejos", de: "Mechanismus der bestimmt worauf KI sich in komplexen Umgebungen konzentrieren sollte", nl: "Mechanisme dat bepaalt waarop AI zich moet richten in complexe omgevingen" },
          { en: "System getting player attention", es: "Sistema que obtiene atención del jugador", de: "System das Spieleraufmerksamkeit erhält", nl: "Systeem dat speleraandacht krijgt" },
          { en: "AI monitoring player attention span", es: "IA monitoreando lapso de atención del jugador", de: "KI überwacht Spieler-Aufmerksamkeitsspanne", nl: "AI monitort speler aandachtsspanne" },
          { en: "Tutorial system for teaching players", es: "Sistema de tutorial para enseñar jugadores", de: "Tutorial-System zum Lehren von Spielern", nl: "Tutorialsysteem voor het onderwijzen van spelers" }
        ],
        correct: 0,
        explanation: {
          en: "Attention systems help AI prioritize threats, objectives, and stimuli in rich game worlds, preventing information overload and enabling focused decision-making.",
          es: "Los sistemas de atención ayudan a la IA a priorizar amenazas, objetivos y estímulos en mundos de juego ricos, previniendo sobrecarga de información y habilitando toma de decisiones enfocada.",
          de: "Aufmerksamkeitssysteme helfen KI Bedrohungen, Ziele und Reize in reichen Spielwelten zu priorisieren, verhindert Informationsüberlastung und ermöglicht fokussierte Entscheidungsfindung.",
          nl: "Aandachtsystemen helpen AI om bedreigingen, doelstellingen en stimuli te prioriteren in rijke gamewerelden, voorkomt informatieoverbelasting en maakt gefocuste besluitvorming mogelijk."
        }
      },
      {
        question: {
          en: "What is 'personality simulation' in game NPCs?",
          es: "¿Qué es la 'simulación de personalidad' en PNJ de juegos?",
          de: "Was ist 'Persönlichkeitssimulation' bei Spiel-NPCs?",
          nl: "Wat is 'persoonlijkheidssimulatie' in game NPCs?"
        },
        options: [
          { en: "Creating distinct character traits that influence AI decisions and interactions", es: "Crear rasgos de carácter distintos que influyen en decisiones e interacciones IA", de: "Unterschiedliche Charaktereigenschaften schaffen die KI-Entscheidungen und Interaktionen beeinflussen", nl: "Onderscheidende karaktertrekken creëren die AI-beslissingen en interacties beïnvloeden" },
          { en: "AI that mimics player personality", es: "IA que imita personalidad del jugador", de: "KI die Spielerpersönlichkeit nachahmt", nl: "AI die spelerpersoonlijkheid nabootst" },
          { en: "Personality tests for players", es: "Pruebas de personalidad para jugadores", de: "Persönlichkeitstests für Spieler", nl: "Persoonlijkheidstesten voor spelers" },
          { en: "Random character behavior", es: "Comportamiento aleatorio de personaje", de: "Zufälliges Charakterverhalten", nl: "Willekeurig karaktergedrag" }
        ],
        correct: 0,
        explanation: {
          en: "Personality simulation gives NPCs consistent behavioral patterns - aggressive, cautious, friendly, greedy - making characters feel more realistic and memorable to players.",
          es: "La simulación de personalidad da a los PNJ patrones de comportamiento consistentes - agresivo, cauteloso, amigable, codicioso - haciendo que los personajes se sientan más realistas y memorables para los jugadores.",
          de: "Persönlichkeitssimulation gibt NPCs konsistente Verhaltensmuster - aggressiv, vorsichtig, freundlich, gierig - macht Charaktere für Spieler realistischer und einprägsamer.",
          nl: "Persoonlijkheidssimulatie geeft NPCs consistente gedragspatronen - agressief, voorzichtig, vriendelijk, hebzuchtig - waardoor karakters realistischer en gedenkwaardiger aanvoelen voor spelers."
        }
      },
      {
        question: {
          en: "What is 'tactical positioning' in shooter AI?",
          es: "¿Qué es el 'posicionamiento táctico' en IA de juegos de disparos?",
          de: "Was ist 'taktische Positionierung' in Shooter-KI?",
          nl: "Wat is 'tactische positionering' in shooter AI?"
        },
        options: [
          { en: "AI selecting optimal combat positions based on cover, angles, and sightlines", es: "IA seleccionando posiciones de combate óptimas basadas en cobertura, ángulos y líneas de visión", de: "KI wählt optimale Kampfpositionen basierend auf Deckung, Winkeln und Sichtlinien", nl: "AI selecteert optimale gevechtsposities op basis van dekking, hoeken en zichtlijnen" },
          { en: "Positioning game UI elements", es: "Posicionar elementos de interfaz de juego", de: "Positionierung von Spiel-UI-Elementen", nl: "Positionering van game UI-elementen" },
          { en: "AI movement speed settings", es: "Configuraciones de velocidad de movimiento IA", de: "KI-Bewegungsgeschwindigkeitseinstellungen", nl: "AI bewegingssnelheidsinstellingen" },
          { en: "Random location selection", es: "Selección de ubicación aleatoria", de: "Zufällige Standortwahl", nl: "Willekeurige locatieselectie" }
        ],
        correct: 0,
        explanation: {
          en: "Tactical positioning AI evaluates the battlefield to find spots with good cover, clear firing lanes, and advantageous angles, mimicking skilled player behavior.",
          es: "La IA de posicionamiento táctico evalúa el campo de batalla para encontrar lugares con buena cobertura, carriles de disparo claros y ángulos ventajosos, imitando comportamiento de jugador hábil.",
          de: "Taktische Positionierungs-KI bewertet das Schlachtfeld um Spots mit guter Deckung, klaren Schusslinien und vorteilhaften Winkeln zu finden, ahmt geschicktes Spielerverhalten nach.",
          nl: "Tactische positionering AI evalueert het slagveld om plekken te vinden met goede dekking, duidelijke schootsbanen en voordelige hoeken, bootst vaardig spelergedrag na."
        }
      },
      {
        question: {
          en: "What is 'learning from death' in adaptive game AI?",
          es: "¿Qué es 'aprender de la muerte' en IA de juegos adaptativa?",
          de: "Was ist 'Lernen aus dem Tod' in adaptiver Spiele-KI?",
          nl: "Wat is 'leren van de dood' in adaptieve game AI?"
        },
        options: [
          { en: "AI analyzing why it failed and adjusting tactics accordingly", es: "IA analizando por qué falló y ajustando tácticas en consecuencia", de: "KI analysiert warum sie scheiterte und passt Taktiken entsprechend an", nl: "AI analyseert waarom het faalde en past tactieken dienovereenkomstig aan" },
          { en: "AI respawning after death", es: "IA reapareciendo después de morir", de: "KI respawnt nach dem Tod", nl: "AI respawnt na de dood" },
          { en: "Teaching players about death mechanics", es: "Enseñar jugadores sobre mecánicas de muerte", de: "Spielern über Todesmechaniken lehren", nl: "Spelers leren over doodsmechanismen" },
          { en: "Tracking player death statistics", es: "Rastrear estadísticas de muerte de jugador", de: "Spieler-Todesstatistiken verfolgen", nl: "Speler doodstatistieken bijhouden" }
        ],
        correct: 0,
        explanation: {
          en: "Some adaptive AI systems analyze their defeats to identify weaknesses in their strategy, then modify their approach to avoid repeating the same mistakes.",
          es: "Algunos sistemas IA adaptativos analizan sus derrotas para identificar debilidades en su estrategia, luego modifican su enfoque para evitar repetir los mismos errores.",
          de: "Einige adaptive KI-Systeme analysieren ihre Niederlagen um Schwächen in ihrer Strategie zu identifizieren, dann modifizieren ihren Ansatz um dieselben Fehler zu vermeiden.",
          nl: "Sommige adaptieve AI-systemen analyseren hun nederlagen om zwakke punten in hun strategie te identificeren, passen dan hun aanpak aan om dezelfde fouten te vermijden."
        }
      },
      {
        question: {
          en: "What is 'context-sensitive behavior' in NPC AI?",
          es: "¿Qué es el 'comportamiento sensible al contexto' en IA de PNJ?",
          de: "Was ist 'kontextsensitives Verhalten' in NPC-KI?",
          nl: "Wat is 'contextgevoelig gedrag' in NPC AI?"
        },
        options: [
          { en: "AI behavior that changes based on current situation and environment", es: "Comportamiento IA que cambia según situación actual y entorno", de: "KI-Verhalten das sich basierend auf aktueller Situation und Umgebung ändert", nl: "AI-gedrag dat verandert op basis van huidige situatie en omgeving" },
          { en: "AI that reads context menus", es: "IA que lee menús contextuales", de: "KI die Kontextmenüs liest", nl: "AI die contextmenu's leest" },
          { en: "Behavior based on text context only", es: "Comportamiento basado solo en contexto de texto", de: "Verhalten basiert nur auf Textkontext", nl: "Gedrag gebaseerd op alleen tekstcontext" },
          { en: "AI adjusting to hardware context", es: "IA ajustándose al contexto de hardware", de: "KI passt sich an Hardware-Kontext an", nl: "AI past zich aan hardwarecontext aan" }
        ],
        correct: 0,
        explanation: {
          en: "Context-sensitive AI behaves differently depending on factors like location (town vs wilderness), time of day, weather, nearby characters, or recent events.",
          es: "La IA sensible al contexto se comporta diferente dependiendo de factores como ubicación (ciudad vs naturaleza), hora del día, clima, personajes cercanos o eventos recientes.",
          de: "Kontextsensitive KI verhält sich unterschiedlich abhängig von Faktoren wie Ort (Stadt vs Wildnis), Tageszeit, Wetter, nahen Charakteren oder kürzlichen Ereignissen.",
          nl: "Contextgevoelige AI gedraagt zich anders afhankelijk van factoren zoals locatie (stad vs wildernis), tijd van de dag, weer, nabije karakters of recente gebeurtenissen."
        }
      },
      {
        question: {
          en: "What is 'level-of-detail AI' in large-scale games?",
          es: "¿Qué es 'IA de nivel de detalle' en juegos a gran escala?",
          de: "Was ist 'Level-of-Detail-KI' in großen Spielen?",
          nl: "Wat is 'level-of-detail AI' in grootschalige games?"
        },
        options: [
          { en: "Simplifying AI calculations for distant or non-critical characters", es: "Simplificar cálculos IA para personajes distantes o no críticos", de: "Vereinfachung von KI-Berechnungen für entfernte oder nicht kritische Charaktere", nl: "Vereenvoudigen van AI-berekeningen voor verre of niet-kritieke karakters" },
          { en: "Increasing graphics detail for AI", es: "Aumentar detalle gráfico para IA", de: "Grafikdetail für KI erhöhen", nl: "Grafisch detail voor AI verhogen" },
          { en: "AI that adjusts game difficulty levels", es: "IA que ajusta niveles de dificultad del juego", de: "KI die Spielschwierigkeitsstufen anpasst", nl: "AI die spelmoeilijkheidsniveaus aanpast" },
          { en: "Detailed AI personality systems", es: "Sistemas detallados de personalidad IA", de: "Detaillierte KI-Persönlichkeitssysteme", nl: "Gedetailleerde AI-persoonlijkheidssystemen" }
        ],
        correct: 0,
        explanation: {
          en: "Level-of-detail AI optimizes performance by running full AI only for nearby/important characters, while using simpler logic for distant NPCs the player won't closely interact with.",
          es: "La IA de nivel de detalle optimiza rendimiento ejecutando IA completa solo para personajes cercanos/importantes, mientras usa lógica más simple para PNJ distantes con los que el jugador no interactuará de cerca.",
          de: "Level-of-Detail-KI optimiert Leistung durch Ausführung vollständiger KI nur für nahe/wichtige Charaktere, während einfachere Logik für entfernte NPCs verwendet wird mit denen der Spieler nicht eng interagiert.",
          nl: "Level-of-detail AI optimaliseert prestaties door volledige AI alleen uit te voeren voor nabije/belangrijke karakters, terwijl eenvoudigere logica wordt gebruikt voor verre NPCs waarmee de speler niet nauw interacteert."
        }
      },
      {
        question: {
          en: "What is 'formation AI' in strategy and combat games?",
          es: "¿Qué es 'IA de formación' en juegos de estrategia y combate?",
          de: "Was ist 'Formations-KI' in Strategie- und Kampfspielen?",
          nl: "Wat is 'formatie AI' in strategie- en gevechts games?"
        },
        options: [
          { en: "AI maintaining tactical unit arrangements during movement and combat", es: "IA manteniendo arreglos tácticos de unidad durante movimiento y combate", de: "KI erhält taktische Einheitenanordnungen während Bewegung und Kampf aufrecht", nl: "AI handhaaft tactische eenheidsopstellingen tijdens beweging en gevecht" },
          { en: "AI creating game terrain formations", es: "IA creando formaciones de terreno del juego", de: "KI erstellt Spiel-Terrainformationen", nl: "AI creëert game terreinformaties" },
          { en: "Formation of AI code structures", es: "Formación de estructuras de código IA", de: "Bildung von KI-Codestrukturen", nl: "Formatie van AI-codestructuren" },
          { en: "AI organizing player teams", es: "IA organizando equipos de jugador", de: "KI organisiert Spielerteams", nl: "AI organiseert spelerteams" }
        ],
        correct: 0,
        explanation: {
          en: "Formation AI keeps military units or squad members in coordinated arrangements (line, wedge, column) for tactical advantages, automatically adjusting as units move.",
          es: "La IA de formación mantiene unidades militares o miembros de escuadrón en arreglos coordinados (línea, cuña, columna) para ventajas tácticas, ajustándose automáticamente mientras las unidades se mueven.",
          de: "Formations-KI hält militärische Einheiten oder Squad-Mitglieder in koordinierten Anordnungen (Linie, Keil, Spalte) für taktische Vorteile, passt sich automatisch an während Einheiten sich bewegen.",
          nl: "Formatie AI houdt militaire eenheden of squad-leden in gecoördineerde opstellingen (lijn, wig, kolom) voor tactische voordelen, past zich automatisch aan terwijl eenheden bewegen."
        }
      },
      {
        question: {
          en: "What is 'threat assessment' in combat AI?",
          es: "¿Qué es la 'evaluación de amenazas' en IA de combate?",
          de: "Was ist 'Bedrohungsbewertung' in Kampf-KI?",
          nl: "Wat is 'dreiging assessment' in gevechts AI?"
        },
        options: [
          { en: "AI evaluating which enemies pose the greatest danger", es: "IA evaluando qué enemigos representan el mayor peligro", de: "KI bewertet welche Feinde die größte Gefahr darstellen", nl: "AI evalueert welke vijanden het grootste gevaar vormen" },
          { en: "Assessing game performance threats", es: "Evaluar amenazas de rendimiento del juego", de: "Bewertung von Spiel-Leistungsbedrohungen", nl: "Beoordelen van game prestatiebedreigingen" },
          { en: "AI detecting cheating players", es: "IA detectando jugadores que hacen trampa", de: "KI erkennt betrügende Spieler", nl: "AI detecteert valsspelende spelers" },
          { en: "Security threat scanning", es: "Escaneo de amenazas de seguridad", de: "Sicherheitsbedrohungs-Scanning", nl: "Beveiligingsbedreigingen scannen" }
        ],
        correct: 0,
        explanation: {
          en: "Threat assessment algorithms help AI prioritize targets based on factors like proximity, damage potential, health level, and strategic importance.",
          es: "Los algoritmos de evaluación de amenazas ayudan a la IA a priorizar objetivos basándose en factores como proximidad, potencial de daño, nivel de salud e importancia estratégica.",
          de: "Bedrohungsbewertungs-Algorithmen helfen KI Ziele zu priorisieren basierend auf Faktoren wie Nähe, Schadenspotential, Gesundheitslevel und strategische Wichtigkeit.",
          nl: "Dreiging assessment algoritmes helpen AI doelwitten te prioriteren op basis van factoren zoals nabijheid, schadepotentieel, gezondheidsniveau en strategisch belang."
        }
      },
      {
        question: {
          en: "What is 'suppression behavior' in tactical shooter AI?",
          es: "¿Qué es el 'comportamiento de supresión' en IA de juegos de disparos tácticos?",
          de: "Was ist 'Unterdrückungsverhalten' in taktischer Shooter-KI?",
          nl: "Wat is 'onderdrukkingsgedrag' in tactische shooter AI?"
        },
        options: [
          { en: "AI using sustained fire to keep enemies pinned down", es: "IA usando fuego sostenido para mantener enemigos inmovilizados", de: "KI nutzt anhaltendes Feuer um Feinde festzunageln", nl: "AI gebruikt aanhoudend vuur om vijanden vastgepind te houden" },
          { en: "AI suppressing error messages", es: "IA suprimiendo mensajes de error", de: "KI unterdrückt Fehlermeldungen", nl: "AI onderdrukt foutmeldingen" },
          { en: "Suppressing player audio", es: "Suprimir audio del jugador", de: "Spieler-Audio unterdrücken", nl: "Speler audio onderdrukken" },
          { en: "AI reducing game difficulty", es: "IA reduciendo dificultad del juego", de: "KI reduziert Spielschwierigkeit", nl: "AI vermindert spelmoeilijkheid" }
        ],
        correct: 0,
        explanation: {
          en: "Suppression AI fires at enemy positions to force them into cover and limit their movement, coordinating with teammates who can then flank or advance.",
          es: "La IA de supresión dispara a posiciones enemigas para forzarlas a cubrirse y limitar su movimiento, coordinándose con compañeros que pueden entonces flanquear o avanzar.",
          de: "Unterdrückungs-KI feuert auf Feindesstellungen um sie in Deckung zu zwingen und ihre Bewegung zu begrenzen, koordiniert mit Teamkollegen die dann flankieren oder vorrücken können.",
          nl: "Onderdrukkings AI vuurt op vijandelijke posities om hen in dekking te dwingen en hun beweging te beperken, coördinerend met teamgenoten die dan kunnen flanken of oprukken."
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
