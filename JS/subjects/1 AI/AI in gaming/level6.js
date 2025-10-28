// AI in Gaming Quiz - Level 6: Expert Gaming AI Systems
(function() {
  const level6 = {
    name: {
      en: "AI in Gaming Level 6",
      es: "IA en Juegos Nivel 6",
      de: "KI im Gaming Stufe 6",
      nl: "AI in Gaming Level 6"
    },
    questions: [
      {
        question: {
          en: "What is 'genetic algorithms' used for in game AI development?",
          es: "¿Para qué se usan los 'algoritmos genéticos' en desarrollo de IA de juegos?",
          de: "Wofür werden 'genetische Algorithmen' in Spiele-KI-Entwicklung verwendet?",
          nl: "Waarvoor worden 'genetische algoritmes' gebruikt in game AI ontwikkeling?"
        },
        options: [
          { en: "Evolving and optimizing AI behaviors through simulated evolution", es: "Evolucionar y optimizar comportamientos IA a través de evolución simulada", de: "Entwicklung und Optimierung von KI-Verhaltensweisen durch simulierte Evolution", nl: "Evolueren en optimaliseren van AI-gedragingen door gesimuleerde evolutie" },
          { en: "Creating family trees for game characters", es: "Crear árboles genealógicos para personajes del juego", de: "Stammbäume für Spielcharaktere erstellen", nl: "Stambomen creëren voor spelkarakters" },
          { en: "Generating random genetic code", es: "Generar código genético aleatorio", de: "Zufälligen genetischen Code generieren", nl: "Willekeurige genetische code genereren" },
          { en: "Studying player genetics", es: "Estudiar genética de jugadores", de: "Spielergenetik studieren", nl: "Spelergenetica bestuderen" }
        ],
        correct: 0,
        explanation: {
          en: "Genetic algorithms use principles of natural selection to evolve AI solutions, breeding successful behaviors and mutating parameters to create increasingly effective game AI.",
          es: "Los algoritmos genéticos usan principios de selección natural para evolucionar soluciones IA, criando comportamientos exitosos y mutando parámetros para crear IA de juegos cada vez más efectiva.",
          de: "Genetische Algorithmen verwenden Prinzipien der natürlichen Selektion um KI-Lösungen zu entwickeln, erfolgreiche Verhaltensweisen zu züchten und Parameter zu mutieren um zunehmend effektivere Spiele-KI zu schaffen.",
          nl: "Genetische algoritmes gebruiken principes van natuurlijke selectie om AI-oplossingen te evolueren, succesvolle gedragingen te kweken en parameters te muteren om steeds effectievere game AI te creëren."
        }
      },
      {
        question: {
          en: "What is 'utility-based AI' in game decision systems?",
          es: "¿Qué es 'IA basada en utilidad' en sistemas de decisión de juegos?",
          de: "Was ist 'nutzenbasierte KI' in Spielentscheidungssystemen?",
          nl: "Wat is 'utility-based AI' in spelbesluitvormingssystemen?"
        },
        options: [
          { en: "AI that evaluates and chooses actions based on calculated utility values", es: "IA que evalúa y elige acciones basándose en valores de utilidad calculados", de: "KI die Aktionen basierend auf berechneten Nutzenwerten bewertet und wählt", nl: "AI die acties evalueert en kiest gebaseerd op berekende utility waarden" },
          { en: "AI that manages game utilities and resources", es: "IA que gestiona utilidades y recursos del juego", de: "KI die Spiel-Utilities und Ressourcen verwaltet", nl: "AI die spelunutiliteiten en bronnen beheert" },
          { en: "Useful AI tools for game development", es: "Herramientas IA útiles para desarrollo de juegos", de: "Nützliche KI-Tools für Spielentwicklung", nl: "Nuttige AI-tools voor spelontwikkeling" },
          { en: "AI optimized for utility computing", es: "IA optimizada para computación de utilidad", de: "KI optimiert für Utility Computing", nl: "AI geoptimaliseerd voor utility computing" }
        ],
        correct: 0,
        explanation: {
          en: "Utility-based AI assigns numerical values to different actions or states, allowing characters to make rational decisions by choosing options with highest utility scores.",
          es: "La IA basada en utilidad asigna valores numéricos a diferentes acciones o estados, permitiendo a personajes tomar decisiones racionales eligiendo opciones con puntuaciones de utilidad más altas.",
          de: "Nutzenbasierte KI weist verschiedenen Aktionen oder Zuständen numerische Werte zu und ermöglicht Charakteren rationale Entscheidungen durch Wahl der Optionen mit höchsten Nutzenwerten.",
          nl: "Utility-based AI wijst numerieke waarden toe aan verschillende acties of toestanden, waardoor karakters rationele beslissingen kunnen nemen door opties met hoogste utility scores te kiezen."
        }
      },
      {
        question: {
          en: "What is 'case-based reasoning' (CBR) in game AI?",
          es: "¿Qué es el 'razonamiento basado en casos' (CBR) en IA de juegos?",
          de: "Was ist 'fallbasierte Schlussfolgerung' (CBR) in Spiele-KI?",
          nl: "Wat is 'case-based reasoning' (CBR) in game AI?"
        },
        options: [
          { en: "AI that solves new problems by adapting solutions from similar past situations", es: "IA que resuelve problemas nuevos adaptando soluciones de situaciones pasadas similares", de: "KI die neue Probleme löst indem sie Lösungen aus ähnlichen vergangenen Situationen anpasst", nl: "AI die nieuwe problemen oplost door oplossingen aan te passen uit vergelijkbare situaties uit het verleden" },
          { en: "Legal reasoning system for game disputes", es: "Sistema de razonamiento legal para disputas de juegos", de: "Rechtliches Argumentationssystem für Spielstreitigkeiten", nl: "Juridisch redeneringssysteem voor spelgeschillen" },
          { en: "Reasoning about game cases and boxes", es: "Razonar sobre cajas y estuches de juegos", de: "Argumentation über Spielschachteln und -hüllen", nl: "Redeneren over speldozen en -hoezen" },
          { en: "Medical case analysis in health games", es: "Análisis de casos médicos en juegos de salud", de: "Medizinische Fallanalyse in Gesundheitsspielen", nl: "Medische case-analyse in gezondheidsgames" }
        ],
        correct: 0,
        explanation: {
          en: "CBR enables AI to learn from experience by storing successful strategies and adapting them to new but similar situations, creating more intelligent and adaptive gameplay.",
          es: "CBR permite a la IA aprender de la experiencia almacenando estrategias exitosas y adaptándolas a situaciones nuevas pero similares, creando jugabilidad más inteligente y adaptativa.",
          de: "CBR ermöglicht KI aus Erfahrung zu lernen indem erfolgreiche Strategien gespeichert und an neue aber ähnliche Situationen angepasst werden, was intelligenteres und adaptiveres Gameplay schafft.",
          nl: "CBR stelt AI in staat om te leren van ervaring door succesvolle strategieën op te slaan en aan te passen aan nieuwe maar vergelijkbare situaties, wat intelligentere en meer adaptieve gameplay creëert."
        }
      },
      {
        question: {
          en: "What is 'hierarchical task networks' (HTN) planning in game AI?",
          es: "¿Qué es la planificación de 'redes de tareas jerárquicas' (HTN) en IA de juegos?",
          de: "Was ist 'hierarchische Aufgabennetzwerke' (HTN) Planung in Spiele-KI?",
          nl: "Wat is 'hierarchical task networks' (HTN) planning in game AI?"
        },
        options: [
          { en: "Breaking complex goals into hierarchical sub-tasks for systematic execution", es: "Dividir objetivos complejos en subtareas jerárquicas para ejecución sistemática", de: "Aufbrechen komplexer Ziele in hierarchische Unteraufgaben für systematische Ausführung", nl: "Complexe doelen opdelen in hiërarchische subtaken voor systematische uitvoering" },
          { en: "Network topology for multiplayer games", es: "Topología de red para juegos multijugador", de: "Netzwerktopologie für Mehrspielerspiele", nl: "Netwerktopologie voor multiplayer games" },
          { en: "Task management for game development teams", es: "Gestión de tareas para equipos de desarrollo de juegos", de: "Aufgabenmanagement für Spielentwicklungsteams", nl: "Taakbeheer voor spelontwikkelingsteams" },
          { en: "Hierarchical player ranking system", es: "Sistema de clasificación jerárquica de jugadores", de: "Hierarchisches Spieler-Ranking-System", nl: "Hiërarchisch spelersrangsysteem" }
        ],
        correct: 0,
        explanation: {
          en: "HTN planning allows AI to decompose high-level objectives into manageable sub-goals, creating more organized and believable character behaviors in complex game scenarios.",
          es: "La planificación HTN permite a la IA descomponer objetivos de alto nivel en sub-objetivos manejables, creando comportamientos de personajes más organizados y creíbles en escenarios complejos de juego.",
          de: "HTN-Planung erlaubt KI hochrangige Ziele in handhabbare Unterziele zu zerlegen und schafft organisiertere und glaubwürdigere Charakterverhaltensweisen in komplexen Spielszenarien.",
          nl: "HTN planning stelt AI in staat om hoogwaardige doelstellingen te ontleden in beheersbare subdoelen, wat meer georganiseerde en geloofwaardige karaktergedragingen creëert in complexe spelscenario's."
        }
      },
      {
        question: {
          en: "What is 'multi-agent systems' (MAS) in game AI architecture?",
          es: "¿Qué son los 'sistemas multi-agente' (MAS) en arquitectura de IA de juegos?",
          de: "Was sind 'Multi-Agenten-Systeme' (MAS) in Spiele-KI-Architektur?",
          nl: "Wat zijn 'multi-agent systemen' (MAS) in game AI architectuur?"
        },
        options: [
          { en: "Multiple independent AI agents working together or competing in game environments", es: "Múltiples agentes IA independientes trabajando juntos o compitiendo en entornos de juego", de: "Mehrere unabhängige KI-Agenten die in Spielumgebungen zusammenarbeiten oder konkurrieren", nl: "Meerdere onafhankelijke AI-agenten die samenwerken of concurreren in spelomgevingen" },
          { en: "Multiple game clients connecting to servers", es: "Múltiples clientes de juego conectándose a servidores", de: "Mehrere Spielclients die sich mit Servern verbinden", nl: "Meerdere spelclients die verbinden met servers" },
          { en: "Real estate agents in property simulation games", es: "Agentes inmobiliarios en juegos de simulación de propiedades", de: "Immobilienmakler in Immobilien-Simulationsspielen", nl: "Makelaars in vastgoedsimulatiespellen" },
          { en: "Secret agents in espionage games", es: "Agentes secretos en juegos de espionaje", de: "Geheimagenten in Spionagespielen", nl: "Geheime agenten in spionagespellen" }
        ],
        correct: 0,
        explanation: {
          en: "MAS involves multiple autonomous AI entities that can cooperate, compete, or negotiate with each other, creating rich emergent behaviors and realistic social dynamics in games.",
          es: "MAS involucra múltiples entidades IA autónomas que pueden cooperar, competir o negociar entre sí, creando comportamientos emergentes ricos y dinámicas sociales realistas en juegos.",
          de: "MAS umfasst mehrere autonome KI-Entitäten die kooperieren, konkurrieren oder miteinander verhandeln können und reiche emergente Verhaltensweisen und realistische soziale Dynamiken in Spielen schaffen.",
          nl: "MAS omvat meerdere autonome AI-entiteiten die kunnen samenwerken, concurreren of onderhandelen met elkaar, wat rijke emergente gedragingen en realistische sociale dynamiek in games creëert."
        }
      },
      {
        question: {
          en: "What is 'Q-learning' in game AI reinforcement learning?",
          es: "¿Qué es 'Q-learning' en aprendizaje por refuerzo de IA de juegos?",
          de: "Was ist 'Q-Learning' in Spiele-KI-Verstärkungslernen?",
          nl: "Wat is 'Q-learning' in game AI reinforcement learning?"
        },
        options: [
          { en: "Algorithm that learns optimal actions by updating action-value estimates through trial and error", es: "Algoritmo que aprende acciones óptimas actualizando estimaciones de valor de acción a través de ensayo y error", de: "Algorithmus der optimale Aktionen lernt durch Aktualisierung von Action-Value-Schätzungen durch Versuch und Irrtum", nl: "Algoritme dat optimale acties leert door actiewaarde-schattingen bij te werken via vallen en opstaan" },
          { en: "Quick learning algorithm for fast games", es: "Algoritmo de aprendizaje rápido para juegos rápidos", de: "Schneller Lernalgorithmus für schnelle Spiele", nl: "Snel leeralgoritme voor snelle spellen" },
          { en: "Question-based learning system for NPCs", es: "Sistema de aprendizaje basado en preguntas para NPCs", de: "Fragenbasiertes Lernsystem für NPCs", nl: "Op vragen gebaseerd leersysteem voor NPCs" },
          { en: "Quality assessment learning for game testing", es: "Aprendizaje de evaluación de calidad para pruebas de juego", de: "Qualitätsbewertungs-Lernen für Spieltests", nl: "Kwaliteitsbeoordeling leren voor speltesten" }
        ],
        correct: 0,
        explanation: {
          en: "Q-learning learns the quality (Q-value) of taking specific actions in specific states, gradually building a policy that maximizes long-term rewards through exploration and exploitation.",
          es: "Q-learning aprende la calidad (valor Q) de tomar acciones específicas en estados específicos, construyendo gradualmente una política que maximiza recompensas a largo plazo a través de exploración y explotación.",
          de: "Q-Learning lernt die Qualität (Q-Wert) spezifischer Aktionen in spezifischen Zuständen, baut graduell eine Politik auf die langfristige Belohnungen durch Exploration und Exploitation maximiert.",
          nl: "Q-learning leert de kwaliteit (Q-waarde) van het nemen van specifieke acties in specifieke toestanden, waarbij geleidelijk een beleid wordt opgebouwd dat langetermijnbeloningen maximaliseert door verkenning en exploitatie."
        }
      },
      {
        question: {
          en: "What is 'deep Q-networks' (DQN) in modern game AI?",
          es: "¿Qué son las 'redes Q profundas' (DQN) en IA moderna de juegos?",
          de: "Was sind 'Deep Q-Networks' (DQN) in moderner Spiele-KI?",
          nl: "Wat zijn 'deep Q-networks' (DQN) in moderne game AI?"
        },
        options: [
          { en: "Neural networks that approximate Q-values for complex state spaces in reinforcement learning", es: "Redes neuronales que aproximan valores Q para espacios de estado complejos en aprendizaje por refuerzo", de: "Neuronale Netzwerke die Q-Werte für komplexe Zustandsräume in Verstärkungslernen approximieren", nl: "Neurale netwerken die Q-waarden benaderen voor complexe toestandsruimtes in reinforcement learning" },
          { en: "Deep neural networks for graphics quality", es: "Redes neuronales profundas para calidad gráfica", de: "Tiefe neuronale Netzwerke für Grafikqualität", nl: "Diepe neurale netwerken voor grafische kwaliteit" },
          { en: "Question-depth networks for game narratives", es: "Redes de profundidad de preguntas para narrativas de juego", de: "Fragentiefe-Netzwerke für Spielnarrative", nl: "Vraagdiepte netwerken voor spelverhalingen" },
          { en: "Quantum networks for advanced AI processing", es: "Redes cuánticas para procesamiento avanzado de IA", de: "Quantennetzwerke für fortgeschrittene KI-Verarbeitung", nl: "Quantum netwerken voor geavanceerde AI-verwerking" }
        ],
        correct: 0,
        explanation: {
          en: "DQN combines deep neural networks with Q-learning to handle high-dimensional state spaces like game screens, enabling AI to learn directly from visual input.",
          es: "DQN combina redes neuronales profundas con Q-learning para manejar espacios de estado de alta dimensión como pantallas de juego, permitiendo a la IA aprender directamente de entrada visual.",
          de: "DQN kombiniert tiefe neuronale Netzwerke mit Q-Learning um hochdimensionale Zustandsräume wie Spielbildschirme zu handhaben, ermöglicht KI direkt von visueller Eingabe zu lernen.",
          nl: "DQN combineert diepe neurale netwerken met Q-learning om hoogdimensionale toestandsruimtes zoals spelschermen te behandelen, waardoor AI direct kan leren van visuele input."
        }
      },
      {
        question: {
          en: "What is 'policy gradient methods' in game AI learning?",
          es: "¿Qué son los 'métodos de gradiente de política' en aprendizaje de IA de juegos?",
          de: "Was sind 'Policy Gradient Methoden' in Spiele-KI-Lernen?",
          nl: "Wat zijn 'policy gradient methoden' in game AI leren?"
        },
        options: [
          { en: "Directly optimizing the probability distribution over actions using gradient ascent", es: "Optimizar directamente la distribución de probabilidad sobre acciones usando ascenso de gradiente", de: "Direkte Optimierung der Wahrscheinlichkeitsverteilung über Aktionen mittels Gradientenanstieg", nl: "Direct optimaliseren van de kansverdeling over acties met behulp van gradiëntenstijging" },
          { en: "Gradual policy changes in game difficulty", es: "Cambios graduales de política en dificultad del juego", de: "Graduelle Politikänderungen in Spielschwierigkeit", nl: "Geleidelijke beleidsveranderingen in spelmoeilijkheid" },
          { en: "Policy documentation gradients for AI systems", es: "Gradientes de documentación de política para sistemas IA", de: "Politikdokumentations-Gradienten für KI-Systeme", nl: "Beleidsdocumentatie gradiënten voor AI-systemen" },
          { en: "Graph-based policy networks for game rules", es: "Redes de política basadas en grafos para reglas de juego", de: "Graphbasierte Politik-Netzwerke für Spielregeln", nl: "Op grafieken gebaseerde beleidsnetwerken voor spelregels" }
        ],
        correct: 0,
        explanation: {
          en: "Policy gradient methods learn by directly adjusting the action selection policy, making them suitable for continuous action spaces and stochastic policies in games.",
          es: "Los métodos de gradiente de política aprenden ajustando directamente la política de selección de acciones, haciéndolos adecuados para espacios de acción continua y políticas estocásticas en juegos.",
          de: "Policy Gradient Methoden lernen durch direkte Anpassung der Aktionsauswahlpolitik, macht sie geeignet für kontinuierliche Aktionsräume und stochastische Politiken in Spielen.",
          nl: "Policy gradient methoden leren door direct het actieselectiebeleid aan te passen, waardoor ze geschikt zijn voor continue actieruimtes en stochastische beleidsregels in games."
        }
      },
      {
        question: {
          en: "What is 'actor-critic methods' in reinforcement learning for games?",
          es: "¿Qué son los 'métodos actor-crítico' en aprendizaje por refuerzo para juegos?",
          de: "Was sind 'Actor-Critic-Methoden' in Verstärkungslernen für Spiele?",
          nl: "Wat zijn 'actor-critic methoden' in reinforcement learning voor games?"
        },
        options: [
          { en: "Combining policy-based and value-based learning with separate actor and critic networks", es: "Combinar aprendizaje basado en política y basado en valor con redes actor y crítico separadas", de: "Kombination von politikbasiertem und wertbasiertem Lernen mit separaten Actor- und Critic-Netzwerken", nl: "Combineren van beleidsgebaseerd en waardegebaseerd leren met aparte actor- en criticus-netwerken" },
          { en: "AI that acts as both player and critic of games", es: "IA que actúa como jugador y crítico de juegos", de: "KI die sowohl als Spieler als auch als Kritiker von Spielen agiert", nl: "AI die zowel als speler als criticus van games optreedt" },
          { en: "Acting and critique systems for character animations", es: "Sistemas de actuación y crítica para animaciones de personajes", de: "Schauspiel- und Kritiksysteme für Charakteranimationen", nl: "Acteren en kritiek systemen voor karakteranimaties" },
          { en: "Critics that review AI actor performances", es: "Críticos que revisan actuaciones de actores IA", de: "Kritiker die KI-Schauspielerleistungen bewerten", nl: "Critici die AI-acteursprestaties beoordelen" }
        ],
        correct: 0,
        explanation: {
          en: "Actor-critic methods use two neural networks: the actor learns the optimal policy while the critic evaluates actions, providing more stable and efficient learning than pure policy or value methods.",
          es: "Los métodos actor-crítico usan dos redes neuronales: el actor aprende la política óptima mientras el crítico evalúa acciones, proporcionando aprendizaje más estable y eficiente que métodos puramente de política o valor.",
          de: "Actor-Critic-Methoden verwenden zwei neuronale Netzwerke: der Actor lernt die optimale Politik während der Critic Aktionen bewertet, bietet stabileres und effizienteres Lernen als reine Politik- oder Wertmethoden.",
          nl: "Actor-critic methoden gebruiken twee neurale netwerken: de actor leert het optimale beleid terwijl de criticus acties evalueert, wat stabieler en efficiënter leren biedt dan zuivere beleids- of waardemethoden."
        }
      },
      {
        question: {
          en: "What is 'experience replay' in deep reinforcement learning?",
          es: "¿Qué es 'reproducción de experiencia' en aprendizaje profundo por refuerzo?",
          de: "Was ist 'Experience Replay' in Deep Reinforcement Learning?",
          nl: "Wat is 'experience replay' in deep reinforcement learning?"
        },
        options: [
          { en: "Storing and randomly sampling past experiences to improve learning stability", es: "Almacenar y muestrear aleatoriamente experiencias pasadas para mejorar estabilidad del aprendizaje", de: "Speichern und zufälliges Sampeln vergangener Erfahrungen zur Verbesserung der Lernstabilität", nl: "Opslaan en willekeurig bemonsteren van vorige ervaringen om leerstabiliteit te verbeteren" },
          { en: "Replaying game experiences for players to watch", es: "Reproducir experiencias de juego para que los jugadores vean", de: "Spielerfahrungen für Spieler zum Anschauen wiedergeben", nl: "Spelervaringen afspelen voor spelers om te bekijken" },
          { en: "Recording gameplay for AI training purposes", es: "Grabar jugabilidad para propósitos de entrenamiento IA", de: "Gameplay für KI-Trainingszwecke aufzeichnen", nl: "Gameplay opnemen voor AI-trainingsdoeleinden" },
          { en: "Experiencing the same game scenarios repeatedly", es: "Experimentar los mismos escenarios de juego repetidamente", de: "Dieselben Spielszenarien wiederholt erleben", nl: "Dezelfde spelscenario's herhaaldelijk ervaren" }
        ],
        correct: 0,
        explanation: {
          en: "Experience replay stores transitions in a buffer and samples random batches for training, breaking correlation between consecutive experiences and improving sample efficiency in neural network training.",
          es: "La reproducción de experiencia almacena transiciones en un buffer y muestrea lotes aleatorios para entrenamiento, rompiendo correlación entre experiencias consecutivas y mejorando eficiencia de muestra en entrenamiento de redes neuronales.",
          de: "Experience Replay speichert Übergänge in einem Puffer und sampelt zufällige Batches für Training, bricht Korrelation zwischen aufeinanderfolgenden Erfahrungen und verbessert Sample-Effizienz im neuronalen Netzwerk-Training.",
          nl: "Experience replay slaat overgangen op in een buffer en bemonstert willekeurige batches voor training, wat correlatie tussen opeenvolgende ervaringen doorbreekt en sample-efficiëntie in neurale netwerktraining verbetert."
        }
      },
      {
        question: {
          en: "What is 'temporal difference learning' in game AI?",
          es: "¿Qué es 'aprendizaje de diferencia temporal' en IA de juegos?",
          de: "Was ist 'Temporal Difference Learning' in Spiele-KI?",
          nl: "Wat is 'temporal difference learning' in game AI?"
        },
        options: [
          { en: "Learning from the difference between predicted and actual rewards over time", es: "Aprender de la diferencia entre recompensas predichas y reales a lo largo del tiempo", de: "Lernen aus der Differenz zwischen vorhergesagten und tatsächlichen Belohnungen über die Zeit", nl: "Leren van het verschil tussen voorspelde en werkelijke beloningen over tijd" },
          { en: "Learning temporal sequences in game events", es: "Aprender secuencias temporales en eventos de juego", de: "Zeitliche Sequenzen in Spielereignissen lernen", nl: "Temporele sequenties in spelevenementen leren" },
          { en: "Time-based difficulty learning systems", es: "Sistemas de aprendizaje de dificultad basados en tiempo", de: "Zeitbasierte Schwierigkeits-Lernsysteme", nl: "Op tijd gebaseerde moeilijkheidsleersystemen" },
          { en: "Learning differences between game time zones", es: "Aprender diferencias entre zonas horarias del juego", de: "Unterschiede zwischen Spiel-Zeitzonen lernen", nl: "Verschillen tussen speltijdzones leren" }
        ],
        correct: 0,
        explanation: {
          en: "Temporal difference learning updates value estimates based on the temporal difference error between current predictions and observed outcomes, enabling learning without complete episode information.",
          es: "El aprendizaje de diferencia temporal actualiza estimaciones de valor basándose en el error de diferencia temporal entre predicciones actuales y resultados observados, permitiendo aprendizaje sin información completa del episodio.",
          de: "Temporal Difference Learning aktualisiert Wertschätzungen basierend auf dem zeitlichen Differenzfehler zwischen aktuellen Vorhersagen und beobachteten Ergebnissen, ermöglicht Lernen ohne vollständige Episodeninformation.",
          nl: "Temporal difference learning werkt waardeschattingen bij op basis van de temporele verschil fout tussen huidige voorspellingen en waargenomen resultaten, wat leren mogelijk maakt zonder volledige episode-informatie."
        }
      },
      {
        question: {
          en: "What is 'multi-armed bandit' problems in game AI optimization?",
          es: "¿Qué son los problemas de 'bandido multibrazo' en optimización de IA de juegos?",
          de: "Was sind 'Multi-Armed Bandit' Probleme in Spiele-KI-Optimierung?",
          nl: "Wat zijn 'multi-armed bandit' problemen in game AI optimalisatie?"
        },
        options: [
          { en: "Balancing exploration and exploitation when choosing between multiple options with unknown rewards", es: "Equilibrar exploración y explotación al elegir entre múltiples opciones con recompensas desconocidas", de: "Ausbalancierung von Exploration und Exploitation bei der Wahl zwischen mehreren Optionen mit unbekannten Belohnungen", nl: "Balanceren van verkenning en exploitatie bij het kiezen tussen meerdere opties met onbekende beloningen" },
          { en: "AI bandits that steal from multiple players", es: "Bandidos IA que roban a múltiples jugadores", de: "KI-Banditen die von mehreren Spielern stehlen", nl: "AI-bandieten die van meerdere spelers stelen" },
          { en: "Multi-player bandit characters in games", es: "Personajes bandidos multijugador en juegos", de: "Mehrspielerbanditen-Charaktere in Spielen", nl: "Multiplayer bandiet karakters in games" },
          { en: "Problems with multiple AI arms in robotic games", es: "Problemas con múltiples brazos IA en juegos robóticos", de: "Probleme mit mehreren KI-Armen in Roboterspielen", nl: "Problemen met meerdere AI-armen in robotspellen" }
        ],
        correct: 0,
        explanation: {
          en: "Multi-armed bandit problems model scenarios where AI must choose between actions with uncertain payoffs, commonly used for content recommendation, A/B testing, and dynamic difficulty adjustment.",
          es: "Los problemas de bandido multibrazo modelan escenarios donde la IA debe elegir entre acciones con recompensas inciertas, comúnmente usado para recomendación de contenido, pruebas A/B y ajuste dinámico de dificultad.",
          de: "Multi-Armed Bandit Probleme modellieren Szenarien wo KI zwischen Aktionen mit ungewissen Auszahlungen wählen muss, häufig verwendet für Inhaltsempfehlung, A/B-Tests und dynamische Schwierigkeitsanpassung.",
          nl: "Multi-armed bandit problemen modelleren scenario's waarbij AI moet kiezen tussen acties met onzekere uitbetalingen, vaak gebruikt voor contentaanbevelingen, A/B-testen en dynamische moeilijkheidsaanpassing."
        }
      },
      {
        question: {
          en: "What is 'imitation learning' in game AI development?",
          es: "¿Qué es 'aprendizaje por imitación' en desarrollo de IA de juegos?",
          de: "Was ist 'Imitation Learning' in Spiele-KI-Entwicklung?",
          nl: "Wat is 'imitation learning' in game AI ontwikkeling?"
        },
        options: [
          { en: "Training AI by observing and copying expert human or AI demonstrations", es: "Entrenar IA observando y copiando demostraciones expertas humanas o de IA", de: "KI-Training durch Beobachtung und Nachahmung von Experten-Demonstrationen von Menschen oder KI", nl: "AI trainen door het observeren en kopiëren van expert menselijke of AI demonstraties" },
          { en: "AI that imitates player emotions only", es: "IA que imita solo emociones del jugador", de: "KI die nur Spieleremotionen nachahmt", nl: "AI die alleen speleremotionaties imiteert" },
          { en: "Creating AI that mimics visual styles", es: "Crear IA que imita estilos visuales", de: "KI erstellen die visuelle Stile nachahmt", nl: "AI creëren die visuele stijlen nabootst" },
          { en: "Learning to imitate game sound effects", es: "Aprender a imitar efectos de sonido del juego", de: "Lernen Spielsoundeffekte nachzuahmen", nl: "Leren om spelgeluidseffecten na te bootsen" }
        ],
        correct: 0,
        explanation: {
          en: "Imitation learning enables AI to acquire complex behaviors by learning from demonstrations, avoiding the need to define explicit reward functions while leveraging human expertise.",
          es: "El aprendizaje por imitación permite a la IA adquirir comportamientos complejos aprendiendo de demostraciones, evitando la necesidad de definir funciones de recompensa explícitas mientras aprovecha experiencia humana.",
          de: "Imitation Learning ermöglicht KI komplexe Verhaltensweisen durch Lernen von Demonstrationen zu erwerben, vermeidet die Notwendigkeit explizite Belohnungsfunktionen zu definieren während menschliche Expertise genutzt wird.",
          nl: "Imitation learning stelt AI in staat om complex gedrag te verwerven door te leren van demonstraties, waarbij de noodzaak om expliciete beloningsfuncties te definiëren wordt vermeden terwijl menselijke expertise wordt benut."
        }
      },
      {
        question: {
          en: "What is 'curiosity-driven learning' in game AI exploration?",
          es: "¿Qué es 'aprendizaje impulsado por curiosidad' en exploración de IA de juegos?",
          de: "Was ist 'neugiergetriebenes Lernen' in Spiele-KI-Exploration?",
          nl: "Wat is 'nieuwsgierigheid-gedreven leren' in game AI verkenning?"
        },
        options: [
          { en: "AI that explores environments by seeking novel or surprising experiences", es: "IA que explora entornos buscando experiencias novedosas o sorprendentes", de: "KI die Umgebungen durch Suche nach neuartigen oder überraschenden Erfahrungen erkundet", nl: "AI die omgevingen verkent door het zoeken naar nieuwe of verrassende ervaringen" },
          { en: "AI that asks questions to human players", es: "IA que hace preguntas a jugadores humanos", de: "KI die Fragen an menschliche Spieler stellt", nl: "AI die vragen stelt aan menselijke spelers" },
          { en: "Learning systems that are curious about game lore", es: "Sistemas de aprendizaje curiosos sobre la tradición del juego", de: "Lernsysteme die neugierig auf Spielhintergrund sind", nl: "Leersystemen die nieuwsgierig zijn naar spelgeschiedenis" },
          { en: "AI that explores only when prompted by curiosity mechanics", es: "IA que explora solo cuando es provocada por mecánicas de curiosidad", de: "KI die nur erkundet wenn von Neugier-Mechaniken angeregt", nl: "AI die alleen verkent wanneer aangezet door nieuwsgierigheidsmechanica" }
        ],
        correct: 0,
        explanation: {
          en: "Curiosity-driven learning motivates AI to explore by rewarding novel states or prediction errors, helping discover new strategies and overcome sparse reward environments.",
          es: "El aprendizaje impulsado por curiosidad motiva a la IA a explorar recompensando estados novedosos o errores de predicción, ayudando a descubrir nuevas estrategias y superar entornos de recompensa escasa.",
          de: "Neugiergetriebenes Lernen motiviert KI zu erkunden durch Belohnung neuartiger Zustände oder Vorhersagefehler, hilft neue Strategien zu entdecken und spärliche Belohnungsumgebungen zu überwinden.",
          nl: "Nieuwsgierigheid-gedreven leren motiveert AI om te verkennen door nieuwe toestanden of voorspellingsfouten te belonen, wat helpt bij het ontdekken van nieuwe strategieën en het overwinnen van schaarse beloningsomgevingen."
        }
      },
      {
        question: {
          en: "What is 'meta-reinforcement learning' in adaptive game AI?",
          es: "¿Qué es 'meta-aprendizaje por refuerzo' en IA adaptativa de juegos?",
          de: "Was ist 'Meta-Verstärkungslernen' in adaptiver Spiele-KI?",
          nl: "Wat is 'meta-reinforcement learning' in adaptieve game AI?"
        },
        options: [
          { en: "Learning to quickly adapt to new tasks by learning how to learn efficiently", es: "Aprender a adaptarse rápidamente a nuevas tareas aprendiendo cómo aprender eficientemente", de: "Lernen sich schnell an neue Aufgaben anzupassen durch Lernen wie man effizient lernt", nl: "Leren om snel aan te passen aan nieuwe taken door te leren hoe efficiënt te leren" },
          { en: "Learning about game metadata and statistics", es: "Aprender sobre metadatos y estadísticas del juego", de: "Über Spiel-Metadaten und Statistiken lernen", nl: "Leren over spelmetadata en statistieken" },
          { en: "Reinforcement learning for meta-gaming strategies", es: "Aprendizaje por refuerzo para estrategias meta-gaming", de: "Verstärkungslernen für Meta-Gaming-Strategien", nl: "Reinforcement learning voor meta-gaming strategieën" },
          { en: "Learning reinforcement schedules for different games", es: "Aprender horarios de refuerzo para diferentes juegos", de: "Verstärkungspläne für verschiedene Spiele lernen", nl: "Versterkingsschema's leren voor verschillende spellen" }
        ],
        correct: 0,
        explanation: {
          en: "Meta-reinforcement learning enables AI to acquire general learning strategies that can be quickly applied to new but related tasks, reducing training time for novel game scenarios.",
          es: "El meta-aprendizaje por refuerzo permite a la IA adquirir estrategias generales de aprendizaje que pueden aplicarse rápidamente a tareas nuevas pero relacionadas, reduciendo tiempo de entrenamiento para escenarios novedosos de juego.",
          de: "Meta-Verstärkungslernen ermöglicht KI allgemeine Lernstrategien zu erwerben die schnell auf neue aber verwandte Aufgaben angewendet werden können, reduziert Trainingszeit für neuartige Spielszenarien.",
          nl: "Meta-reinforcement learning stelt AI in staat om algemene leerstrategieën te verwerven die snel kunnen worden toegepast op nieuwe maar gerelateerde taken, wat trainingstijd vermindert voor nieuwe spelscenario's."
        }
      },
      {
        question: {
          en: "What is 'distributional reinforcement learning' in game AI?",
          es: "¿Qué es 'aprendizaje por refuerzo distribucional' en IA de juegos?",
          de: "Was ist 'distributionales Verstärkungslernen' in Spiele-KI?",
          nl: "Wat is 'distributional reinforcement learning' in game AI?"
        },
        options: [
          { en: "Learning the full distribution of rewards rather than just expected values", es: "Aprender la distribución completa de recompensas en lugar de solo valores esperados", de: "Lernen der vollständigen Verteilung von Belohnungen anstatt nur erwarteter Werte", nl: "Leren van de volledige verdeling van beloningen in plaats van alleen verwachte waarden" },
          { en: "Distributing learning across multiple AI agents", es: "Distribuir aprendizaje a través de múltiples agentes IA", de: "Lernen über mehrere KI-Agenten verteilen", nl: "Leren verdelen over meerdere AI-agenten" },
          { en: "Learning distributed gaming networks", es: "Aprender redes de juego distribuidas", de: "Verteilte Gaming-Netzwerke lernen", nl: "Gedistribueerde gaming netwerken leren" },
          { en: "Reinforcement learning for game distribution platforms", es: "Aprendizaje por refuerzo para plataformas de distribución de juegos", de: "Verstärkungslernen für Spiel-Distributionsplattformen", nl: "Reinforcement learning voor speldistributieplatforms" }
        ],
        correct: 0,
        explanation: {
          en: "Distributional RL models the uncertainty and variability in returns, providing richer information about potential outcomes and enabling better risk-aware decision making in games.",
          es: "El RL distribucional modela la incertidumbre y variabilidad en retornos, proporcionando información más rica sobre resultados potenciales y permitiendo mejor toma de decisiones consciente del riesgo en juegos.",
          de: "Distributionales RL modelliert Unsicherheit und Variabilität in Erträgen, bietet reichere Informationen über potentielle Ergebnisse und ermöglicht bessere risikobewusste Entscheidungsfindung in Spielen.",
          nl: "Distributional RL modelleert de onzekerheid en variabiliteit in opbrengsten, wat rijkere informatie biedt over potentiële resultaten en betere risicobewuste besluitvorming in games mogelijk maakt."
        }
      },
      {
        question: {
          en: "What is 'hierarchical reinforcement learning' application in complex games?",
          es: "¿Qué es la aplicación de 'aprendizaje por refuerzo jerárquico' en juegos complejos?",
          de: "Was ist 'hierarchisches Verstärkungslernen' Anwendung in komplexen Spielen?",
          nl: "Wat is de toepassing van 'hiërarchisch reinforcement learning' in complexe games?"
        },
        options: [
          { en: "Breaking complex tasks into hierarchical sub-goals and primitive actions", es: "Dividir tareas complejas en sub-objetivos jerárquicos y acciones primitivas", de: "Aufbrechen komplexer Aufgaben in hierarchische Unterziele und primitive Aktionen", nl: "Complexe taken opdelen in hiërarchische subdoelen en primitieve acties" },
          { en: "Creating hierarchical difficulty levels in games", es: "Crear niveles de dificultad jerárquicos en juegos", de: "Hierarchische Schwierigkeitsstufen in Spielen erstellen", nl: "Hiërarchische moeilijkheidsniveaus creëren in games" },
          { en: "Learning game hierarchies and ranking systems", es: "Aprender jerarquías de juego y sistemas de clasificación", de: "Spiel-Hierarchien und Ranking-Systeme lernen", nl: "Spelhiërarchieën en rangsystemen leren" },
          { en: "Hierarchical organization of game AI teams", es: "Organización jerárquica de equipos de IA de juego", de: "Hierarchische Organisation von Spiele-KI-Teams", nl: "Hiërarchische organisatie van game AI teams" }
        ],
        correct: 0,
        explanation: {
          en: "Hierarchical RL enables AI to master complex games by learning at multiple levels of abstraction, from high-level strategies down to specific actions, improving learning efficiency.",
          es: "El RL jerárquico permite a la IA dominar juegos complejos aprendiendo en múltiples niveles de abstracción, desde estrategias de alto nivel hasta acciones específicas, mejorando eficiencia del aprendizaje.",
          de: "Hierarchisches RL ermöglicht KI komplexe Spiele zu meistern durch Lernen auf mehreren Abstraktionsebenen, von High-Level-Strategien bis zu spezifischen Aktionen, verbessert Lerneffizienz.",
          nl: "Hiërarchisch RL stelt AI in staat om complexe games te beheersen door te leren op meerdere abstractieniveaus, van hoog-niveau strategieën tot specifieke acties, wat leerefficiëntie verbetert."
        }
      },
      {
        question: {
          en: "What is 'transfer learning' in game AI development?",
          es: "¿Qué es 'aprendizaje por transferencia' en desarrollo de IA de juegos?",
          de: "Was ist 'Transfer Learning' in Spiele-KI-Entwicklung?",
          nl: "Wat is 'transfer learning' in game AI ontwikkeling?"
        },
        options: [
          { en: "Applying knowledge learned in one game domain to improve performance in related games", es: "Aplicar conocimiento aprendido en un dominio de juego para mejorar rendimiento en juegos relacionados", de: "Anwendung von in einem Spielbereich gelerntem Wissen zur Leistungsverbesserung in verwandten Spielen", nl: "Kennis geleerd in één speldomein toepassen om prestaties in gerelateerde games te verbeteren" },
          { en: "Transferring game files between different platforms", es: "Transferir archivos de juego entre diferentes plataformas", de: "Übertragung von Spieldateien zwischen verschiedenen Plattformen", nl: "Spelbestanden overdragen tussen verschillende platforms" },
          { en: "Learning how to transfer items between players", es: "Aprender cómo transferir objetos entre jugadores", de: "Lernen wie man Gegenstände zwischen Spielern überträgt", nl: "Leren hoe items tussen spelers over te dragen" },
          { en: "Transferring AI models to different hardware", es: "Transferir modelos IA a diferente hardware", de: "KI-Modelle auf verschiedene Hardware übertragen", nl: "AI-modellen overdragen naar verschillende hardware" }
        ],
        correct: 0,
        explanation: {
          en: "Transfer learning leverages knowledge from previously mastered games to accelerate learning in new but similar games, reducing training time and data requirements significantly.",
          es: "El aprendizaje por transferencia aprovecha conocimiento de juegos previamente dominados para acelerar aprendizaje en juegos nuevos pero similares, reduciendo significativamente tiempo de entrenamiento y requisitos de datos.",
          de: "Transfer Learning nutzt Wissen aus zuvor gemeisterten Spielen um Lernen in neuen aber ähnlichen Spielen zu beschleunigen, reduziert Trainingszeit und Datenanforderungen erheblich.",
          nl: "Transfer learning benut kennis van eerder beheerste games om leren in nieuwe maar vergelijkbare games te versnellen, wat trainingstijd en datavereisten aanzienlijk vermindert."
        }
      },
      {
        question: {
          en: "What is 'self-play' in competitive game AI training?",
          es: "¿Qué es 'auto-juego' en entrenamiento de IA de juegos competitivos?",
          de: "Was ist 'Self-Play' im kompetitiven Spiele-KI-Training?",
          nl: "Wat is 'self-play' in competitieve game AI training?"
        },
        options: [
          { en: "AI training by playing against copies or versions of itself to improve performance", es: "Entrenamiento IA jugando contra copias o versiones de sí misma para mejorar rendimiento", de: "KI-Training durch Spielen gegen Kopien oder Versionen von sich selbst zur Leistungsverbesserung", nl: "AI-training door tegen kopieën of versies van zichzelf te spelen om prestaties te verbeteren" },
          { en: "AI that only plays single-player games", es: "IA que solo juega juegos de un jugador", de: "KI die nur Einzelspielerspiele spielt", nl: "AI die alleen single-player games speelt" },
          { en: "Self-directed learning for game mechanics", es: "Aprendizaje autodirigido para mecánicas de juego", de: "Selbstgesteuertes Lernen für Spielmechaniken", nl: "Zelfgestuurd leren voor spelmechanica" },
          { en: "Playing games alone without human interaction", es: "Jugar juegos solo sin interacción humana", de: "Spiele allein ohne menschliche Interaktion spielen", nl: "Games alleen spelen zonder menselijke interactie" }
        ],
        correct: 0,
        explanation: {
          en: "Self-play enables AI to continuously improve by competing against evolving versions of itself, creating increasingly challenging opponents and discovering novel strategies without human input.",
          es: "El auto-juego permite a la IA mejorar continuamente compitiendo contra versiones evolutivas de sí misma, creando oponentes cada vez más desafiantes y descubriendo estrategias novedosas sin entrada humana.",
          de: "Self-Play ermöglicht KI sich kontinuierlich zu verbessern durch Konkurrenz gegen sich entwickelnde Versionen von sich selbst, schafft zunehmend herausfordernde Gegner und entdeckt neuartige Strategien ohne menschliche Eingabe.",
          nl: "Self-play stelt AI in staat om continu te verbeteren door te concurreren tegen evoluerende versies van zichzelf, wat steeds uitdagendere tegenstanders creëert en nieuwe strategieën ontdekt zonder menselijke input."
        }
      },
      {
        question: {
          en: "What is 'population-based training' in game AI systems?",
          es: "¿Qué es 'entrenamiento basado en población' en sistemas de IA de juegos?",
          de: "Was ist 'populationsbasiertes Training' in Spiele-KI-Systemen?",
          nl: "Wat is 'populatie-gebaseerde training' in game AI systemen?"
        },
        options: [
          { en: "Training multiple AI agents simultaneously with different hyperparameters and strategies", es: "Entrenar múltiples agentes IA simultáneamente con diferentes hiperparámetros y estrategias", de: "Training mehrerer KI-Agenten gleichzeitig mit verschiedenen Hyperparametern und Strategien", nl: "Meerdere AI-agenten gelijktijdig trainen met verschillende hyperparameters en strategieën" },
          { en: "Training AI on population demographics data", es: "Entrenar IA en datos demográficos de población", de: "KI mit Bevölkerungsdemografiedaten trainieren", nl: "AI trainen op bevolkingsdemografische data" },
          { en: "Creating large populations of NPCs in games", es: "Crear grandes poblaciones de NPCs en juegos", de: "Große Populationen von NPCs in Spielen erstellen", nl: "Grote populaties van NPCs creëren in games" },
          { en: "Training based on player population sizes", es: "Entrenamiento basado en tamaños de población de jugadores", de: "Training basierend auf Spielerpopulationsgrößen", nl: "Training gebaseerd op spelerpopulatiegrootte" }
        ],
        correct: 0,
        explanation: {
          en: "Population-based training evolves a diverse set of AI agents with different configurations, allowing automatic hyperparameter optimization and discovery of varied successful strategies.",
          es: "El entrenamiento basado en población evoluciona un conjunto diverso de agentes IA con diferentes configuraciones, permitiendo optimización automática de hiperparámetros y descubrimiento de estrategias exitosas variadas.",
          de: "Populationsbasiertes Training entwickelt ein vielfältiges Set von KI-Agenten mit verschiedenen Konfigurationen, ermöglicht automatische Hyperparameter-Optimierung und Entdeckung verschiedener erfolgreicher Strategien.",
          nl: "Populatie-gebaseerde training evolueert een diverse set van AI-agenten met verschillende configuraties, wat automatische hyperparameter optimalisatie en ontdekking van gevarieerde succesvolle strategieën mogelijk maakt."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level6;
  } else if (typeof window !== 'undefined') {
    window.level6 = level6;
  }
})();