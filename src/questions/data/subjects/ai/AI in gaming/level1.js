// AI in Gaming Quiz - Level 1: Basic Gaming AI
(function() {
  const level1 = {
    name: {
      en: "AI in Gaming Level 1",
      es: "IA en Juegos Nivel 1",
      de: "KI im Gaming Stufe 1",
      nl: "AI in Gaming Level 1"
    },
    questions: [
      {
        question: {
          en: "What is the main purpose of AI in video games?",
          es: "Â¿CuÃ¡l es el propÃ³sito principal de la IA en los videojuegos?",
          de: "Was ist der Hauptzweck von KI in Videospielen?",
          nl: "Wat is het hoofddoel van AI in videogames?"
        },
        options: [
          { en: "Make enemies behave smartly", es: "Hacer que los enemigos se comporten inteligentemente", de: "Feinde intelligent verhalten lassen", nl: "Vijanden slim laten gedragen" },
          { en: "Make games more expensive", es: "Hacer los juegos mÃ¡s caros", de: "Spiele teurer machen", nl: "Games duurder maken" },
          { en: "Reduce graphics quality", es: "Reducir la calidad grÃ¡fica", de: "GrafikqualitÃ¤t reduzieren", nl: "Grafische kwaliteit verlagen" },
          { en: "Make controllers heavier", es: "Hacer los controladores mÃ¡s pesados", de: "Controller schwerer machen", nl: "Controllers zwaarder maken" }
        ],
        correct: 0,
        explanation: {
          en: "Game AI creates intelligent behavior for non-player characters, making games more challenging and realistic.",
          es: "La IA de juegos crea comportamiento inteligente para personajes no jugadores, haciendo los juegos mÃ¡s desafiantes y realistas.",
          de: "Spiele-KI schafft intelligentes Verhalten fÃ¼r Nicht-Spieler-Charaktere und macht Spiele herausfordernder und realistischer.",
          nl: "Game AI creÃ«ert intelligent gedrag voor niet-speler karakters, waardoor games uitdagender en realistischer worden."
        }
      },
      {
        question: {
          en: "Which famous game first used AI opponents in 1952?",
          es: "Â¿QuÃ© juego famoso usÃ³ por primera vez oponentes con IA en 1952?",
          de: "Welches berÃ¼hmte Spiel verwendete 1952 erstmals KI-Gegner?",
          nl: "Welke beroemde game gebruikte als eerste AI-tegenstanders in 1952?"
        },
        options: [
          { en: "Tic-Tac-Toe", es: "Tres en lÃ­nea", de: "Tic-Tac-Toe", nl: "Boter-kaas-en-eieren" },
          { en: "Chess", es: "Ajedrez", de: "Schach", nl: "Schaak" },
          { en: "Monopoly", es: "Monopoly", de: "Monopoly", nl: "Monopoly" },
          { en: "Mario Bros", es: "Mario Bros", de: "Mario Bros", nl: "Mario Bros" }
        ],
        correct: 0,
        explanation: {
          en: "OXO (Tic-Tac-Toe) was one of the first computer games with AI, created by Alexander Douglas at Cambridge University.",
          es: "OXO (Tres en lÃ­nea) fue uno de los primeros juegos de computadora con IA, creado por Alexander Douglas en la Universidad de Cambridge.",
          de: "OXO (Tic-Tac-Toe) war eines der ersten Computerspiele mit KI, erstellt von Alexander Douglas an der Cambridge University.",
          nl: "OXO (Boter-kaas-en-eieren) was een van de eerste computergames met AI, gemaakt door Alexander Douglas aan Cambridge University."
        }
      },
      {
        question: {
          en: "What do NPCs stand for in gaming?",
          es: "Â¿QuÃ© significa NPC en los juegos?",
          de: "WofÃ¼r steht NPC im Gaming?",
          nl: "Waar staat NPC voor in gaming?"
        },
        options: [
          { en: "Non-Player Characters", es: "Personajes No Jugadores", de: "Nicht-Spieler-Charaktere", nl: "Niet-Speler Karakters" },
          { en: "New Player Coins", es: "Monedas de Nuevo Jugador", de: "Neue Spieler MÃ¼nzen", nl: "Nieuwe Speler Munten" },
          { en: "Next Power Code", es: "CÃ³digo de Siguiente Poder", de: "NÃ¤chster Power-Code", nl: "Volgende Kracht Code" },
          { en: "Nice Pink Cars", es: "Bonitos Coches Rosas", de: "SchÃ¶ne Rosa Autos", nl: "Mooie Roze Auto's" }
        ],
        correct: 0,
        explanation: {
          en: "NPCs are characters controlled by the game's AI rather than human players, like shopkeepers or enemies.",
          es: "Los NPCs son personajes controlados por la IA del juego en lugar de jugadores humanos, como comerciantes o enemigos.",
          de: "NPCs sind Charaktere, die von der Spiele-KI und nicht von menschlichen Spielern gesteuert werden, wie HÃ¤ndler oder Feinde.",
          nl: "NPCs zijn karakters die door de game AI worden bestuurd in plaats van door menselijke spelers, zoals winkeliers of vijanden."
        }
      },
      {
        question: {
          en: "What is pathfinding in game AI?",
          es: "Â¿QuÃ© es la bÃºsqueda de caminos en la IA de juegos?",
          de: "Was ist Pfadfindung in Spiele-KI?",
          nl: "Wat is pathfinding in game AI?"
        },
        options: [
          { en: "Finding the best route to a destination", es: "Encontrar la mejor ruta a un destino", de: "Den besten Weg zu einem Ziel finden", nl: "De beste route naar een bestemming vinden" },
          { en: "Finding hidden treasure", es: "Encontrar tesoros ocultos", de: "Versteckte SchÃ¤tze finden", nl: "Verborgen schatten vinden" },
          { en: "Finding new players", es: "Encontrar nuevos jugadores", de: "Neue Spieler finden", nl: "Nieuwe spelers vinden" },
          { en: "Finding game bugs", es: "Encontrar errores del juego", de: "Spielfehler finden", nl: "Game bugs vinden" }
        ],
        correct: 0,
        explanation: {
          en: "Pathfinding algorithms help AI characters navigate around obstacles to reach their target efficiently.",
          es: "Los algoritmos de bÃºsqueda de caminos ayudan a los personajes IA a navegar alrededor de obstÃ¡culos para llegar a su objetivo eficientemente.",
          de: "Pfadfindungsalgorithmen helfen KI-Charakteren dabei, um Hindernisse zu navigieren, um ihr Ziel effizient zu erreichen.",
          nl: "Pathfinding algoritmes helpen AI-karakters om obstakels heen te navigeren om hun doel efficiÃ«nt te bereiken."
        }
      },
      {
        question: {
          en: "Which type of game commonly uses AI for difficulty adjustment?",
          es: "Â¿QuÃ© tipo de juego comÃºnmente usa IA para ajuste de dificultad?",
          de: "Welcher Spieltyp verwendet hÃ¤ufig KI zur Schwierigkeitsanpassung?",
          nl: "Welk type game gebruikt vaak AI voor moeilijkheidsaanpassing?"
        },
        options: [
          { en: "Racing games", es: "Juegos de carreras", de: "Rennspiele", nl: "Racegames" },
          { en: "Puzzle games only", es: "Solo juegos de rompecabezas", de: "Nur Puzzlespiele", nl: "Alleen puzzelgames" },
          { en: "Text-only games", es: "Juegos solo de texto", de: "Nur-Text-Spiele", nl: "Alleen tekst-games" },
          { en: "Board games only", es: "Solo juegos de mesa", de: "Nur Brettspiele", nl: "Alleen bordspellen" }
        ],
        correct: 0,
        explanation: {
          en: "Racing games use AI to adjust computer opponents' speed and behavior based on player performance for balanced gameplay.",
          es: "Los juegos de carreras usan IA para ajustar la velocidad y comportamiento de oponentes computarizados basÃ¡ndose en el rendimiento del jugador.",
          de: "Rennspiele nutzen KI, um Geschwindigkeit und Verhalten von Computer-Gegnern basierend auf Spielerleistung fÃ¼r ausgewogenes Gameplay anzupassen.",
          nl: "Racegames gebruiken AI om de snelheid en gedrag van computer-tegenstanders aan te passen op basis van speler prestaties voor gebalanceerde gameplay."
        }
      },
      {
        question: {
          en: "What type of AI behavior is used when game characters follow the player?",
          es: "¿Qué tipo de comportamiento de IA se usa cuando los personajes del juego siguen al jugador?",
          de: "Welcher Typ von KI-Verhalten wird verwendet wenn Spielcharaktere dem Spieler folgen?",
          nl: "Welk type AI-gedrag wordt gebruikt wanneer gamekarakters de speler volgen?"
        },
        options: [
          { en: "Pursuit behavior", es: "Comportamiento de persecución", de: "Verfolgungsverhalten", nl: "Achtervolg gedrag" },
          { en: "Random movement", es: "Movimiento aleatorio", de: "Zufällige Bewegung", nl: "Willekeurige beweging" },
          { en: "Static positioning", es: "Posicionamiento estático", de: "Statische Positionierung", nl: "Statische positionering" },
          { en: "Invisible mode", es: "Modo invisible", de: "Unsichtbarer Modus", nl: "Onzichtbare modus" }
        ],
        correct: 0,
        explanation: {
          en: "Pursuit behavior makes AI characters actively chase or follow the player, creating engaging gameplay dynamics.",
          es: "El comportamiento de persecución hace que los personajes IA persigan o sigan activamente al jugador, creando dinámicas de juego atractivas.",
          de: "Verfolgungsverhalten lässt KI-Charaktere den Spieler aktiv jagen oder verfolgen, wodurch ansprechende Gameplay-Dynamiken entstehen.",
          nl: "Achtervolg gedrag zorgt ervoor dat AI-karakters de speler actief achtervolgen of volgen, wat boeiende gameplay-dynamiek creëert."
        }
      },
      {
        question: {
          en: "What is 'AI scripting' in game development?",
          es: "¿Qué es el 'scripting de IA' en el desarrollo de juegos?",
          de: "Was ist 'KI-Scripting' in der Spieleentwicklung?",
          nl: "Wat is 'AI scripting' in game ontwikkeling?"
        },
        options: [
          { en: "Programming specific behaviors for game characters", es: "Programar comportamientos específicos para personajes del juego", de: "Spezifische Verhaltensweisen für Spielcharaktere programmieren", nl: "Specifieke gedragingen programmeren voor gamekarakters" },
          { en: "Writing game dialogue", es: "Escribir diálogos del juego", de: "Spieldialoge schreiben", nl: "Game dialogen schrijven" },
          { en: "Creating game graphics", es: "Crear gráficos del juego", de: "Spielgrafiken erstellen", nl: "Game graphics maken" },
          { en: "Recording game sounds", es: "Grabar sonidos del juego", de: "Spielgeräusche aufnehmen", nl: "Game geluiden opnemen" }
        ],
        correct: 0,
        explanation: {
          en: "AI scripting involves writing code that defines how computer-controlled characters behave in different game situations.",
          es: "El scripting de IA implica escribir código que define cómo se comportan los personajes controlados por computadora en diferentes situaciones del juego.",
          de: "KI-Scripting beinhaltet das Schreiben von Code der definiert wie computergesteuerte Charaktere sich in verschiedenen Spielsituationen verhalten.",
          nl: "AI scripting houdt in dat er code wordt geschreven die definieert hoe computer-gestuurde karakters zich gedragen in verschillende gamesituaties."
        }
      },
      {
        question: {
          en: "Which classic arcade game is famous for having ghosts with different AI personalities?",
          es: "¿Qué juego arcade clásico es famoso por tener fantasmas con diferentes personalidades de IA?",
          de: "Welches klassische Arcade-Spiel ist berühmt für Geister mit verschiedenen KI-Persönlichkeiten?",
          nl: "Welke klassieke arcade game is beroemd om geesten met verschillende AI-persoonlijkheden?"
        },
        options: [
          { en: "Pac-Man", es: "Pac-Man", de: "Pac-Man", nl: "Pac-Man" },
          { en: "Tetris", es: "Tetris", de: "Tetris", nl: "Tetris" },
          { en: "Pong", es: "Pong", de: "Pong", nl: "Pong" },
          { en: "Space Invaders", es: "Space Invaders", de: "Space Invaders", nl: "Space Invaders" }
        ],
        correct: 0,
        explanation: {
          en: "Pac-Man's four ghosts (Blinky, Pinky, Inky, and Sue) each have unique AI behaviors - some chase directly, others try to ambush.",
          es: "Los cuatro fantasmas de Pac-Man (Blinky, Pinky, Inky y Sue) cada uno tiene comportamientos únicos de IA - algunos persiguen directamente, otros tratan de emboscar.",
          de: "Pac-Mans vier Geister (Blinky, Pinky, Inky und Sue) haben jeweils einzigartige KI-Verhaltensweisen - einige jagen direkt, andere versuchen zu überfallen.",
          nl: "Pac-Man's vier geesten (Blinky, Pinky, Inky en Sue) hebben elk unieke AI-gedragingen - sommige achtervolgen direct, anderen proberen te overvallen."
        }
      },
      {
        question: {
          en: "What does 'mob AI' refer to in gaming?",
          es: "¿A qué se refiere 'mob AI' en los juegos?",
          de: "Worauf bezieht sich 'Mob-KI' im Gaming?",
          nl: "Waar verwijst 'mob AI' naar in gaming?"
        },
        options: [
          { en: "Artificial intelligence controlling enemy creatures or monsters", es: "Inteligencia artificial controlando criaturas enemigas o monstruos", de: "Künstliche Intelligenz die feindliche Kreaturen oder Monster steuert", nl: "Kunstmatige intelligentie die vijandelijke wezens of monsters bestuurt" },
          { en: "AI that controls crowd behavior", es: "IA que controla el comportamiento de multitudes", de: "KI die Menschenmassen-Verhalten steuert", nl: "AI die menigte gedrag controleert" },
          { en: "Mobile phone gaming AI", es: "IA de juegos para móviles", de: "Handy-Spiele-KI", nl: "Mobiele telefoon gaming AI" },
          { en: "Multiplayer online battle AI", es: "IA de batalla en línea multijugador", de: "Mehrspieler-Online-Schlacht-KI", nl: "Multiplayer online gevecht AI" }
        ],
        correct: 0,
        explanation: {
          en: "In gaming, 'mob' is short for 'mobile object' and refers to AI-controlled enemies, monsters, or creatures that players encounter.",
          es: "En los juegos, 'mob' es la abreviatura de 'objeto móvil' y se refiere a enemigos, monstruos o criaturas controlados por IA que los jugadores encuentran.",
          de: "Im Gaming ist 'Mob' die Abkürzung für 'mobiles Objekt' und bezieht sich auf KI-gesteuerte Feinde, Monster oder Kreaturen denen Spieler begegnen.",
          nl: "In gaming is 'mob' kort voor 'mobiel object' en verwijst naar AI-gestuurde vijanden, monsters of wezens die spelers tegenkomen."
        }
      },
      {
        question: {
          en: "What is the purpose of difficulty scaling in game AI?",
          es: "¿Cuál es el propósito del escalado de dificultad en la IA de juegos?",
          de: "Was ist der Zweck der Schwierigkeitsskalierung in Spiele-KI?",
          nl: "Wat is het doel van moeilijkheidsschaling in game AI?"
        },
        options: [
          { en: "To keep the game challenging but fair for different skill levels", es: "Mantener el juego desafiante pero justo para diferentes niveles de habilidad", de: "Das Spiel herausfordernd aber fair für verschiedene Fähigkeitsstufen zu halten", nl: "Het spel uitdagend maar eerlijk houden voor verschillende vaardigheidsniveaus" },
          { en: "To make games more expensive", es: "Hacer que los juegos sean más caros", de: "Spiele teurer zu machen", nl: "Games duurder maken" },
          { en: "To reduce computer processing power", es: "Reducir el poder de procesamiento de la computadora", de: "Computer-Rechenleistung zu reduzieren", nl: "Computer verwerkingskracht verminderen" },
          { en: "To limit game content", es: "Limitar el contenido del juego", de: "Spielinhalt zu begrenzen", nl: "Game inhoud beperken" }
        ],
        correct: 0,
        explanation: {
          en: "Difficulty scaling adjusts AI behavior based on player performance, making the game easier for struggling players and harder for skilled ones.",
          es: "El escalado de dificultad ajusta el comportamiento de la IA según el rendimiento del jugador, haciendo el juego más fácil para jugadores con dificultades y más difícil para los hábiles.",
          de: "Schwierigkeitsskalierung passt KI-Verhalten basierend auf Spielerleistung an, macht das Spiel einfacher für kämpfende Spieler und schwerer für geschickte.",
          nl: "Moeilijkheidsschaling past AI-gedrag aan op basis van speler prestaties, waardoor het spel makkelijker wordt voor worstelnede spelers en moeilijker voor vaardige."
        }
      },
      {
        question: {
          en: "What type of AI is used in chess games against computers?",
          es: "¿Qué tipo de IA se usa en juegos de ajedrez contra computadoras?",
          de: "Welcher Typ von KI wird in Schachspielen gegen Computer verwendet?",
          nl: "Welk type AI wordt gebruikt in schaakspellen tegen computers?"
        },
        options: [
          { en: "Game tree search algorithms", es: "Algoritmos de búsqueda en árbol de juego", de: "Spielbaum-Suchalgorithmen", nl: "Spelboom zoekalgoritmes" },
          { en: "Voice recognition", es: "Reconocimiento de voz", de: "Spracherkennung", nl: "Spraakherkenning" },
          { en: "Image processing", es: "Procesamiento de imágenes", de: "Bildverarbeitung", nl: "Beeldverwerking" },
          { en: "Weather prediction", es: "Predicción del tiempo", de: "Wettervorhersage", nl: "Weersvoorspelling" }
        ],
        correct: 0,
        explanation: {
          en: "Chess AI uses sophisticated algorithms to explore possible moves and outcomes, evaluating millions of positions to find the best move.",
          es: "La IA de ajedrez usa algoritmos sofisticados para explorar posibles movimientos y resultados, evaluando millones de posiciones para encontrar el mejor movimiento.",
          de: "Schach-KI verwendet ausgeklügelte Algorithmen um mögliche Züge und Ergebnisse zu erkunden, bewertet Millionen von Positionen um den besten Zug zu finden.",
          nl: "Schaak AI gebruikt geavanceerde algoritmes om mogelijke zetten en uitkomsten te verkennen, evalueert miljoenen posities om de beste zet te vinden."
        }
      },
      {
        question: {
          en: "What is 'emergent behavior' in game AI?",
          es: "¿Qué es el 'comportamiento emergente' en la IA de juegos?",
          de: "Was ist 'emergentes Verhalten' in Spiele-KI?",
          nl: "Wat is 'emergent gedrag' in game AI?"
        },
        options: [
          { en: "Complex behaviors that arise from simple AI rules", es: "Comportamientos complejos que surgen de reglas simples de IA", de: "Komplexe Verhaltensweisen die aus einfachen KI-Regeln entstehen", nl: "Complexe gedragingen die ontstaan uit eenvoudige AI-regels" },
          { en: "AI that only works in emergencies", es: "IA que solo funciona en emergencias", de: "KI die nur in Notfällen funktioniert", nl: "AI die alleen werkt in noodgevallen" },
          { en: "AI that appears suddenly in games", es: "IA que aparece repentinamente en juegos", de: "KI die plötzlich in Spielen erscheint", nl: "AI die plotseling verschijnt in games" },
          { en: "AI that controls game exits", es: "IA que controla las salidas del juego", de: "KI die Spielausgänge kontrolliert", nl: "AI die game uitgangen controleert" }
        ],
        correct: 0,
        explanation: {
          en: "Emergent behavior occurs when simple AI rules interact to create unexpected, complex behaviors that weren't directly programmed.",
          es: "El comportamiento emergente ocurre cuando reglas simples de IA interactúan para crear comportamientos complejos e inesperados que no fueron programados directamente.",
          de: "Emergentes Verhalten tritt auf wenn einfache KI-Regeln interagieren um unerwartete, komplexe Verhaltensweisen zu schaffen die nicht direkt programmiert wurden.",
          nl: "Emergent gedrag treedt op wanneer eenvoudige AI-regels interacteren om onverwachte, complexe gedragingen te creëren die niet direct geprogrammeerd waren."
        }
      },
      {
        question: {
          en: "What is the main challenge in creating realistic game AI?",
          es: "¿Cuál es el principal desafío en crear IA de juegos realista?",
          de: "Was ist die Hauptherausforderung beim Erstellen realistischer Spiele-KI?",
          nl: "Wat is de grootste uitdaging bij het creëren van realistische game AI?"
        },
        options: [
          { en: "Balancing intelligence with fun gameplay", es: "Equilibrar inteligencia con jugabilidad divertida", de: "Intelligenz mit spaßigem Gameplay ausbalancieren", nl: "Intelligentie balanceren met leuke gameplay" },
          { en: "Making AI too smart", es: "Hacer que la IA sea demasiado inteligente", de: "KI zu schlau machen", nl: "AI te slim maken" },
          { en: "Creating colorful graphics", es: "Crear gráficos coloridos", de: "Bunte Grafiken erstellen", nl: "Kleurrijke graphics maken" },
          { en: "Adding more sound effects", es: "Agregar más efectos de sonido", de: "Mehr Soundeffekte hinzufügen", nl: "Meer geluidseffecten toevoegen" }
        ],
        correct: 0,
        explanation: {
          en: "Game AI must be smart enough to be challenging but not so perfect that it becomes frustrating or unfair for players.",
          es: "La IA de juegos debe ser lo suficientemente inteligente para ser desafiante pero no tan perfecta que se vuelva frustrante o injusta para los jugadores.",
          de: "Spiele-KI muss klug genug sein um herausfordernd zu sein aber nicht so perfekt dass sie frustrierend oder unfair für Spieler wird.",
          nl: "Game AI moet slim genoeg zijn om uitdagend te zijn maar niet zo perfect dat het frustrerend of oneerlijk wordt voor spelers."
        }
      },
      {
        question: {
          en: "In which type of game would you find 'squad AI'?",
          es: "¿En qué tipo de juego encontrarías 'IA de escuadrón'?",
          de: "In welchem Spieltyp würde man 'Squad-KI' finden?",
          nl: "In welk type game zou je 'squad AI' vinden?"
        },
        options: [
          { en: "Military or tactical strategy games", es: "Juegos militares o de estrategia táctica", de: "Militär- oder taktische Strategiespiele", nl: "Militaire of tactische strategie games" },
          { en: "Puzzle games only", es: "Solo juegos de rompecabezas", de: "Nur Puzzlespiele", nl: "Alleen puzzelgames" },
          { en: "Racing games", es: "Juegos de carreras", de: "Rennspiele", nl: "Racegames" },
          { en: "Card games", es: "Juegos de cartas", de: "Kartenspiele", nl: "Kaartspellen" }
        ],
        correct: 0,
        explanation: {
          en: "Squad AI coordinates multiple AI characters to work together as a team, common in military shooters and strategy games.",
          es: "La IA de escuadrón coordina múltiples personajes IA para trabajar juntos como equipo, común en juegos de disparos militares y estrategia.",
          de: "Squad-KI koordiniert mehrere KI-Charaktere um als Team zusammenzuarbeiten, üblich in Militär-Shootern und Strategiespielen.",
          nl: "Squad AI coördineert meerdere AI-karakters om samen te werken als een team, gebruikelijk in militaire shooters en strategiegames."
        }
      },
      {
        question: {
          en: "What does 'rubber band AI' mean in racing games?",
          es: "¿Qué significa 'IA de banda elástica' en juegos de carreras?",
          de: "Was bedeutet 'Gummiband-KI' in Rennspielen?",
          nl: "Wat betekent 'rubber band AI' in racegames?"
        },
        options: [
          { en: "AI opponents slow down when ahead and speed up when behind", es: "Los oponentes IA se ralentizan cuando van adelante y aceleran cuando van atrás", de: "KI-Gegner verlangsamen wenn sie vorne sind und beschleunigen wenn sie hinten sind", nl: "AI-tegenstanders vertragen wanneer ze voorliggen en versnellen wanneer ze achterliggen" },
          { en: "AI cars that bounce like rubber", es: "Coches IA que rebotan como caucho", de: "KI-Autos die wie Gummi springen", nl: "AI-auto's die stuiten als rubber" },
          { en: "AI that uses elastic physics", es: "IA que usa física elástica", de: "KI die elastische Physik verwendet", nl: "AI die elastische fysica gebruikt" },
          { en: "AI that stretches the race track", es: "IA que estira la pista de carreras", de: "KI die die Rennstrecke dehnt", nl: "AI die het racecircuit uitrekt" }
        ],
        correct: 0,
        explanation: {
          en: "Rubber band AI keeps races close and exciting by artificially adjusting opponent speed based on player position, like a rubber band effect.",
          es: "La IA de banda elástica mantiene las carreras cerradas y emocionantes ajustando artificialmente la velocidad del oponente según la posición del jugador, como un efecto de banda elástica.",
          de: "Gummiband-KI hält Rennen eng und spannend durch künstliche Anpassung der Gegnergeschwindigkeit basierend auf Spielerposition, wie ein Gummiband-Effekt.",
          nl: "Rubber band AI houdt races spannend en dichtbij door kunstmatig de snelheid van tegenstanders aan te passen op basis van speler positie, zoals een rubberband effect."
        }
      },
      {
        question: {
          en: "What is the role of AI in procedural game content generation?",
          es: "¿Cuál es el papel de la IA en la generación de contenido de juego procedimental?",
          de: "Was ist die Rolle von KI bei der prozeduralen Spielinhaltsgenerierung?",
          nl: "Wat is de rol van AI in procedurele game content generatie?"
        },
        options: [
          { en: "Creating levels, maps, or quests automatically", es: "Crear niveles, mapas o misiones automáticamente", de: "Level, Karten oder Quests automatisch erstellen", nl: "Levels, kaarten of quests automatisch creëren" },
          { en: "Only controlling player characters", es: "Solo controlar personajes de jugador", de: "Nur Spielercharaktere steuern", nl: "Alleen spelerkarakters besturen" },
          { en: "Managing game sales", es: "Gestionar ventas de juegos", de: "Spielverkäufe verwalten", nl: "Game verkopen beheren" },
          { en: "Testing controller batteries", es: "Probar baterías de controladores", de: "Controller-Batterien testen", nl: "Controller batterijen testen" }
        ],
        correct: 0,
        explanation: {
          en: "Procedural generation uses AI algorithms to automatically create game content like levels, dungeons, or landscapes, providing endless variety.",
          es: "La generación procedimental usa algoritmos de IA para crear automáticamente contenido de juego como niveles, mazmorras o paisajes, proporcionando variedad infinita.",
          de: "Prozedurale Generierung nutzt KI-Algorithmen um automatisch Spielinhalt wie Level, Dungeons oder Landschaften zu erstellen, bietet endlose Vielfalt.",
          nl: "Procedurele generatie gebruikt AI-algoritmes om automatisch game content zoals levels, dungeons of landschappen te creëren, wat eindeloze variatie biedt."
        }
      },
      {
        question: {
          en: "What is 'flocking behavior' in game AI?",
          es: "¿Qué es el 'comportamiento de bandada' en la IA de juegos?",
          de: "Was ist 'Schwarmverhalten' in Spiele-KI?",
          nl: "Wat is 'flock gedrag' in game AI?"
        },
        options: [
          { en: "AI that makes groups move together like birds or fish", es: "IA que hace que los grupos se muevan juntos como pájaros o peces", de: "KI die Gruppen sich zusammen bewegen lässt wie Vögel oder Fische", nl: "AI die groepen samen laat bewegen zoals vogels of vissen" },
          { en: "AI that counts sheep", es: "IA que cuenta ovejas", de: "KI die Schafe zählt", nl: "AI die schapen telt" },
          { en: "AI that only works with farm animals", es: "IA que solo funciona con animales de granja", de: "KI die nur mit Nutztieren funktioniert", nl: "AI die alleen werkt met boerderijdieren" },
          { en: "AI that creates bird sounds", es: "IA que crea sonidos de pájaros", de: "KI die Vogelgeräusche erstellt", nl: "AI die vogelgeluiden maakt" }
        ],
        correct: 0,
        explanation: {
          en: "Flocking behavior simulates how groups of creatures naturally move together, following rules like staying close, avoiding collisions, and moving in the same direction.",
          es: "El comportamiento de bandada simula cómo los grupos de criaturas se mueven naturalmente juntos, siguiendo reglas como mantenerse cerca, evitar colisiones y moverse en la misma dirección.",
          de: "Schwarmverhalten simuliert wie Gruppen von Kreaturen natürlich zusammen bewegen, folgen Regeln wie nahe bleiben, Kollisionen vermeiden und in die gleiche Richtung bewegen.",
          nl: "Flock gedrag simuleert hoe groepen van wezens natuurlijk samen bewegen, volgen regels zoals dichtbij blijven, botsingen vermijden en in dezelfde richting bewegen."
        }
      },
      {
        question: {
          en: "What makes AI in real-time strategy (RTS) games challenging to program?",
          es: "¿Qué hace que la IA en juegos de estrategia en tiempo real (RTS) sea desafiante de programar?",
          de: "Was macht KI in Echtzeit-Strategiespielen (RTS) herausfordernd zu programmieren?",
          nl: "Wat maakt AI in real-time strategy (RTS) games uitdagend om te programmeren?"
        },
        options: [
          { en: "Managing multiple units and complex strategies simultaneously", es: "Gestionar múltiples unidades y estrategias complejas simultáneamente", de: "Mehrere Einheiten und komplexe Strategien gleichzeitig verwalten", nl: "Meerdere eenheden en complexe strategieën tegelijkertijd beheren" },
          { en: "Creating simple graphics", es: "Crear gráficos simples", de: "Einfache Grafiken erstellen", nl: "Eenvoudige graphics maken" },
          { en: "Playing background music", es: "Reproducir música de fondo", de: "Hintergrundmusik abspielen", nl: "Achtergrondmuziek afspelen" },
          { en: "Saving game progress", es: "Guardar progreso del juego", de: "Spielfortschritt speichern", nl: "Game voortgang opslaan" }
        ],
        correct: 0,
        explanation: {
          en: "RTS AI must coordinate dozens of units, manage resources, plan attacks, and adapt strategies in real-time, making it one of the most complex forms of game AI.",
          es: "La IA de RTS debe coordinar docenas de unidades, gestionar recursos, planificar ataques y adaptar estrategias en tiempo real, convirtiéndola en una de las formas más complejas de IA de juegos.",
          de: "RTS-KI muss Dutzende von Einheiten koordinieren, Ressourcen verwalten, Angriffe planen und Strategien in Echtzeit anpassen, was sie zu einer der komplexesten Formen von Spiele-KI macht.",
          nl: "RTS AI moet tientallen eenheden coördineren, resources beheren, aanvallen plannen en strategieën in real-time aanpassen, waardoor het een van de meest complexe vormen van game AI is."
        }
      },
      {
        question: {
          en: "What is 'dynamic difficulty adjustment' in gaming?",
          es: "¿Qué es el 'ajuste dinámico de dificultad' en los juegos?",
          de: "Was ist 'dynamische Schwierigkeitsanpassung' im Gaming?",
          nl: "Wat is 'dynamische moeilijkheidsaanpassing' in gaming?"
        },
        options: [
          { en: "AI automatically changing game difficulty based on player performance", es: "IA cambiando automáticamente la dificultad del juego según el rendimiento del jugador", de: "KI ändert automatisch Spielschwierigkeit basierend auf Spielerleistung", nl: "AI past automatisch game moeilijkheid aan op basis van speler prestaties" },
          { en: "Players manually selecting difficulty", es: "Jugadores seleccionando manualmente la dificultad", de: "Spieler wählen manuell Schwierigkeit", nl: "Spelers kiezen handmatig moeilijkheid" },
          { en: "Fixed difficulty throughout the game", es: "Dificultad fija durante todo el juego", de: "Feste Schwierigkeit während des gesamten Spiels", nl: "Vaste moeilijkheid gedurende het hele spel" },
          { en: "Random difficulty changes", es: "Cambios aleatorios de dificultad", de: "Zufällige Schwierigkeitsänderungen", nl: "Willekeurige moeilijkheidsveranderingen" }
        ],
        correct: 0,
        explanation: {
          en: "Dynamic difficulty adjustment monitors how well a player is doing and automatically makes the game easier or harder to maintain optimal challenge and engagement.",
          es: "El ajuste dinámico de dificultad monitorea qué tan bien lo está haciendo un jugador y automáticamente hace el juego más fácil o más difícil para mantener el desafío óptimo y el compromiso.",
          de: "Dynamische Schwierigkeitsanpassung überwacht wie gut ein Spieler abschneidet und macht das Spiel automatisch einfacher oder schwerer um optimale Herausforderung und Engagement zu erhalten.",
          nl: "Dynamische moeilijkheidsaanpassing monitort hoe goed een speler het doet en maakt het spel automatisch makkelijker of moeilijker om optimale uitdaging en betrokkenheid te behouden."
        }
      },
      {
        question: {
          en: "What type of AI is commonly used for enemy movement in maze-like games?",
          es: "¿Qué tipo de IA se usa comúnmente para el movimiento enemigo en juegos tipo laberinto?",
          de: "Welche Art von KI wird häufig für Feindbewegung in labyrinthartigen Spielen verwendet?",
          nl: "Welk type AI wordt vaak gebruikt voor vijandbeweging in doolhofachtige games?"
        },
        options: [
          { en: "Pathfinding algorithms", es: "Algoritmos de búsqueda de caminos", de: "Wegfindungsalgorithmen", nl: "Pathfinding algoritmes" },
          { en: "Weather prediction", es: "Predicción del clima", de: "Wettervorhersage", nl: "Weersvoorspelling" },
          { en: "Music generation", es: "Generación de música", de: "Musikgenerierung", nl: "Muziekgeneratie" },
          { en: "Text analysis", es: "Análisis de texto", de: "Textanalyse", nl: "Tekstanalyse" }
        ],
        correct: 0,
        explanation: {
          en: "Pathfinding algorithms like A* are used to help enemies navigate through game environments efficiently, finding the shortest or best path to reach their target.",
          es: "Los algoritmos de búsqueda de caminos como A* se usan para ayudar a los enemigos a navegar eficientemente por los entornos del juego, encontrando el camino más corto o mejor para alcanzar su objetivo.",
          de: "Wegfindungsalgorithmen wie A* werden verwendet, um Feinden zu helfen, effizient durch Spielumgebungen zu navigieren und den kürzesten oder besten Weg zu ihrem Ziel zu finden.",
          nl: "Pathfinding algoritmes zoals A* worden gebruikt om vijanden efficiënt door game-omgevingen te helpen navigeren, waarbij ze het kortste of beste pad naar hun doel vinden."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  } else if (typeof window !== 'undefined') {
    window.level1 = level1;
  }
})();
