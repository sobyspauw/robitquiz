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
      },
      {
        question: {
          en: "What does 'AI aggro' mean in gaming?",
          es: "¿Qué significa 'aggro de IA' en los juegos?",
          de: "Was bedeutet 'KI-Aggro' im Gaming?",
          nl: "Wat betekent 'AI aggro' in gaming?"
        },
        options: [
          { en: "How likely an enemy is to attack a player", es: "Qué tan probable es que un enemigo ataque a un jugador", de: "Wie wahrscheinlich ein Feind einen Spieler angreift", nl: "Hoe waarschijnlijk een vijand een speler aanvalt" },
          { en: "Aggressive game graphics", es: "Gráficos agresivos del juego", de: "Aggressive Spielgrafiken", nl: "Agressieve game graphics" },
          { en: "AI that gets angry at players", es: "IA que se enoja con los jugadores", de: "KI die sich über Spieler ärgert", nl: "AI die boos wordt op spelers" },
          { en: "Agricultural AI in farming games", es: "IA agrícola en juegos de granja", de: "Landwirtschaftliche KI in Farming-Spielen", nl: "Landbouw AI in farming games" }
        ],
        correct: 0,
        explanation: {
          en: "'Aggro' refers to an enemy's threat level and targeting priority - when you have aggro, enemies will focus on attacking you.",
          es: "'Aggro' se refiere al nivel de amenaza de un enemigo y prioridad de objetivo - cuando tienes aggro, los enemigos se enfocarán en atacarte.",
          de: "'Aggro' bezieht sich auf das Bedrohungslevel eines Feindes und Ziel-Priorität - wenn Sie Aggro haben, konzentrieren sich Feinde darauf Sie anzugreifen.",
          nl: "'Aggro' verwijst naar het dreigingsniveau van een vijand en targeting prioriteit - wanneer je aggro hebt, zullen vijanden zich concentreren op jou aanvallen."
        }
      },
      {
        question: {
          en: "What is a 'finite state machine' in game AI?",
          es: "¿Qué es una 'máquina de estados finitos' en IA de juegos?",
          de: "Was ist ein 'endlicher Zustandsautomat' in Spiele-KI?",
          nl: "Wat is een 'finite state machine' in game AI?"
        },
        options: [
          { en: "A system where AI switches between different behavior states", es: "Un sistema donde la IA cambia entre diferentes estados de comportamiento", de: "Ein System bei dem KI zwischen verschiedenen Verhaltenszuständen wechselt", nl: "Een systeem waarbij AI schakelt tussen verschillende gedragsstaten" },
          { en: "A computer with limited memory", es: "Una computadora con memoria limitada", de: "Ein Computer mit begrenztem Speicher", nl: "Een computer met beperkt geheugen" },
          { en: "An AI that can only count to 10", es: "Una IA que solo puede contar hasta 10", de: "Eine KI die nur bis 10 zählen kann", nl: "Een AI die alleen tot 10 kan tellen" },
          { en: "A broken game machine", es: "Una máquina de juegos rota", de: "Eine kaputte Spielmaschine", nl: "Een kapotte game machine" }
        ],
        correct: 0,
        explanation: {
          en: "A finite state machine defines different states for AI (like patrol, chase, attack) and rules for switching between them based on conditions.",
          es: "Una máquina de estados finitos define diferentes estados para la IA (como patrullar, perseguir, atacar) y reglas para cambiar entre ellos según las condiciones.",
          de: "Ein endlicher Zustandsautomat definiert verschiedene Zustände für KI (wie patrouillieren, jagen, angreifen) und Regeln zum Wechseln zwischen ihnen basierend auf Bedingungen.",
          nl: "Een finite state machine definieert verschillende staten voor AI (zoals patrouilleren, achtervolgen, aanvallen) en regels om tussen hen te schakelen op basis van voorwaarden."
        }
      },
      {
        question: {
          en: "What is 'line of sight' checking in game AI?",
          es: "¿Qué es la verificación de 'línea de visión' en la IA de juegos?",
          de: "Was ist 'Sichtlinien'-Überprüfung in Spiele-KI?",
          nl: "Wat is 'line of sight' controle in game AI?"
        },
        options: [
          { en: "Determining if AI can see the player without obstacles blocking the view", es: "Determinar si la IA puede ver al jugador sin obstáculos bloqueando la vista", de: "Bestimmen ob KI den Spieler sehen kann ohne dass Hindernisse die Sicht blockieren", nl: "Bepalen of AI de speler kan zien zonder obstakels die het zicht blokkeren" },
          { en: "Checking if players have good eyesight", es: "Verificar si los jugadores tienen buena vista", de: "Überprüfen ob Spieler gutes Sehvermögen haben", nl: "Controleren of spelers goed zicht hebben" },
          { en: "Drawing straight lines on screen", es: "Dibujar líneas rectas en pantalla", de: "Gerade Linien auf dem Bildschirm zeichnen", nl: "Rechte lijnen op scherm tekenen" },
          { en: "Measuring screen brightness", es: "Medir el brillo de la pantalla", de: "Bildschirmhelligkeit messen", nl: "Schermhelderheid meten" }
        ],
        correct: 0,
        explanation: {
          en: "Line of sight checks ensure enemies only react to players they can actually see, making AI behavior more realistic by respecting walls and obstacles.",
          es: "Las verificaciones de línea de visión aseguran que los enemigos solo reaccionen a jugadores que realmente pueden ver, haciendo el comportamiento de IA más realista respetando paredes y obstáculos.",
          de: "Sichtlinien-Überprüfungen stellen sicher dass Feinde nur auf Spieler reagieren die sie tatsächlich sehen können, macht KI-Verhalten realistischer durch Respektieren von Wänden und Hindernissen.",
          nl: "Line of sight controles zorgen ervoor dat vijanden alleen reageren op spelers die ze daadwerkelijk kunnen zien, waardoor AI-gedrag realistischer wordt door muren en obstakels te respecteren."
        }
      },
      {
        question: {
          en: "What is a 'behavior tree' in game development?",
          es: "¿Qué es un 'árbol de comportamiento' en desarrollo de juegos?",
          de: "Was ist ein 'Verhaltensbaum' in der Spieleentwicklung?",
          nl: "Wat is een 'behavior tree' in game ontwikkeling?"
        },
        options: [
          { en: "A hierarchical structure for organizing AI decision-making", es: "Una estructura jerárquica para organizar la toma de decisiones de IA", de: "Eine hierarchische Struktur zur Organisation der KI-Entscheidungsfindung", nl: "Een hiërarchische structuur voor het organiseren van AI-besluitvorming" },
          { en: "A tree that grows in virtual worlds", es: "Un árbol que crece en mundos virtuales", de: "Ein Baum der in virtuellen Welten wächst", nl: "Een boom die groeit in virtuele werelden" },
          { en: "A decoration in forest games", es: "Una decoración en juegos de bosque", de: "Eine Dekoration in Waldspielen", nl: "Een decoratie in bos games" },
          { en: "A chart showing player statistics", es: "Un gráfico que muestra estadísticas del jugador", de: "Ein Diagramm das Spielerstatistiken zeigt", nl: "Een grafiek die speler statistieken toont" }
        ],
        correct: 0,
        explanation: {
          en: "Behavior trees organize AI logic into a tree structure with branches for different actions and decisions, making complex AI easier to create and modify.",
          es: "Los árboles de comportamiento organizan la lógica de IA en una estructura de árbol con ramas para diferentes acciones y decisiones, haciendo la IA compleja más fácil de crear y modificar.",
          de: "Verhaltensbäume organisieren KI-Logik in eine Baumstruktur mit Zweigen für verschiedene Aktionen und Entscheidungen, macht komplexe KI einfacher zu erstellen und zu ändern.",
          nl: "Behavior trees organiseren AI-logica in een boomstructuur met takken voor verschillende acties en beslissingen, waardoor complexe AI gemakkelijker te maken en te wijzigen is."
        }
      },
      {
        question: {
          en: "What does 'cooldown' mean for AI abilities in games?",
          es: "¿Qué significa 'tiempo de espera' para habilidades de IA en juegos?",
          de: "Was bedeutet 'Abklingzeit' für KI-Fähigkeiten in Spielen?",
          nl: "Wat betekent 'cooldown' voor AI-vaardigheden in games?"
        },
        options: [
          { en: "A waiting period before AI can use a special ability again", es: "Un período de espera antes de que la IA pueda usar una habilidad especial nuevamente", de: "Eine Wartezeit bevor KI eine spezielle Fähigkeit wieder verwenden kann", nl: "Een wachtperiode voordat AI een speciale vaardigheid opnieuw kan gebruiken" },
          { en: "Lowering the game temperature", es: "Bajar la temperatura del juego", de: "Spieltemperatur senken", nl: "Game temperatuur verlagen" },
          { en: "Making AI slower permanently", es: "Hacer que la IA sea más lenta permanentemente", de: "KI dauerhaft langsamer machen", nl: "AI permanent langzamer maken" },
          { en: "Turning off the computer", es: "Apagar la computadora", de: "Computer ausschalten", nl: "Computer uitschakelen" }
        ],
        correct: 0,
        explanation: {
          en: "Cooldowns prevent AI from spamming powerful abilities by requiring a waiting period between uses, making combat more balanced and strategic.",
          es: "Los tiempos de espera evitan que la IA abuse de habilidades poderosas al requerir un período de espera entre usos, haciendo el combate más equilibrado y estratégico.",
          de: "Abklingzeiten verhindern dass KI mächtige Fähigkeiten spammt durch Erfordern einer Wartezeit zwischen Verwendungen, macht Kampf ausgewogener und strategischer.",
          nl: "Cooldowns voorkomen dat AI krachtige vaardigheden spamt door een wachtperiode tussen gebruik te vereisen, waardoor gevechten evenwichtiger en strategischer worden."
        }
      },
      {
        question: {
          en: "What is 'sight range' for AI enemies?",
          es: "¿Qué es el 'rango de visión' para enemigos IA?",
          de: "Was ist 'Sichtreichweite' für KI-Feinde?",
          nl: "Wat is 'zichtbereik' voor AI-vijanden?"
        },
        options: [
          { en: "The distance at which enemies can detect and react to players", es: "La distancia a la que los enemigos pueden detectar y reaccionar a los jugadores", de: "Die Entfernung bei der Feinde Spieler erkennen und reagieren können", nl: "De afstand waarop vijanden spelers kunnen detecteren en erop reageren" },
          { en: "How far enemies can shoot", es: "Qué tan lejos pueden disparar los enemigos", de: "Wie weit Feinde schießen können", nl: "Hoe ver vijanden kunnen schieten" },
          { en: "The size of enemy eyes", es: "El tamaño de los ojos enemigos", de: "Die Größe der Feindaugen", nl: "De grootte van vijandelijke ogen" },
          { en: "How colorful enemies appear", es: "Qué tan coloridos aparecen los enemigos", de: "Wie farbenfroh Feinde erscheinen", nl: "Hoe kleurrijk vijanden verschijnen" }
        ],
        correct: 0,
        explanation: {
          en: "Sight range defines how close players must be before AI enemies notice them and begin to react, creating stealth opportunities in many games.",
          es: "El rango de visión define qué tan cerca deben estar los jugadores antes de que los enemigos IA los noten y comiencen a reaccionar, creando oportunidades de sigilo en muchos juegos.",
          de: "Sichtreichweite definiert wie nahe Spieler sein müssen bevor KI-Feinde sie bemerken und reagieren beginnen, schafft Stealth-Möglichkeiten in vielen Spielen.",
          nl: "Zichtbereik definieert hoe dichtbij spelers moeten zijn voordat AI-vijanden hen opmerken en beginnen te reageren, creëert stealth mogelijkheden in veel games."
        }
      },
      {
        question: {
          en: "What is 'patrol behavior' in game AI?",
          es: "¿Qué es el 'comportamiento de patrulla' en IA de juegos?",
          de: "Was ist 'Patrouilleverhalten' in Spiele-KI?",
          nl: "Wat is 'patrouille gedrag' in game AI?"
        },
        options: [
          { en: "AI following a set path repeatedly when not engaged with players", es: "IA siguiendo un camino establecido repetidamente cuando no está comprometida con jugadores", de: "KI folgt einem festgelegten Pfad wiederholt wenn nicht mit Spielern beschäftigt", nl: "AI volgt herhaaldelijk een vastgesteld pad wanneer niet betrokken bij spelers" },
          { en: "AI controlling police cars only", es: "IA controlando solo coches de policía", de: "KI steuert nur Polizeiautos", nl: "AI bestuurt alleen politieauto's" },
          { en: "Random wandering with no pattern", es: "Deambular aleatorio sin patrón", de: "Zufälliges Umherwandern ohne Muster", nl: "Willekeurig rondzwerven zonder patroon" },
          { en: "Standing completely still", es: "Quedarse completamente quieto", de: "Völlig still stehen", nl: "Volledig stilstaan" }
        ],
        correct: 0,
        explanation: {
          en: "Patrol behavior makes AI guards or enemies walk specific routes, creating predictable patterns players can observe and plan around.",
          es: "El comportamiento de patrulla hace que los guardias o enemigos IA caminen rutas específicas, creando patrones predecibles que los jugadores pueden observar y planificar.",
          de: "Patrouilleverhalten lässt KI-Wachen oder Feinde bestimmte Routen gehen, schafft vorhersehbare Muster die Spieler beobachten und umplanen können.",
          nl: "Patrouille gedrag zorgt ervoor dat AI-bewakers of vijanden specifieke routes lopen, creërend voorspelbare patronen die spelers kunnen observeren en eromheen plannen."
        }
      },
      {
        question: {
          en: "What is 'evasion behavior' in AI?",
          es: "¿Qué es el 'comportamiento de evasión' en IA?",
          de: "Was ist 'Ausweichverhalten' in KI?",
          nl: "Wat is 'ontwijkingsgedrag' in AI?"
        },
        options: [
          { en: "AI actively trying to avoid or run away from threats", es: "IA tratando activamente de evitar o huir de amenazas", de: "KI versucht aktiv Bedrohungen zu vermeiden oder wegzulaufen", nl: "AI probeert actief dreigingen te vermijden of weg te rennen" },
          { en: "AI that cheats at games", es: "IA que hace trampa en juegos", de: "KI die bei Spielen betrügt", nl: "AI die vals speelt in games" },
          { en: "AI that refuses to answer questions", es: "IA que se niega a responder preguntas", de: "KI die sich weigert Fragen zu beantworten", nl: "AI die weigert vragen te beantwoorden" },
          { en: "AI that hides loading screens", es: "IA que oculta pantallas de carga", de: "KI die Ladebildschirme versteckt", nl: "AI die laadschermen verbergt" }
        ],
        correct: 0,
        explanation: {
          en: "Evasion behavior makes weaker AI characters run, dodge, or hide when threatened, creating more dynamic and realistic encounters.",
          es: "El comportamiento de evasión hace que los personajes IA más débiles corran, esquiven u oculten cuando están amenazados, creando encuentros más dinámicos y realistas.",
          de: "Ausweichverhalten lässt schwächere KI-Charaktere laufen, ausweichen oder verstecken wenn bedroht, schafft dynamischere und realistischere Begegnungen.",
          nl: "Ontwijkingsgedrag zorgt ervoor dat zwakkere AI-karakters rennen, ontwijken of verbergen wanneer bedreigd, creërend meer dynamische en realistische ontmoetingen."
        }
      },
      {
        question: {
          en: "What is the purpose of 'randomness' in game AI?",
          es: "¿Cuál es el propósito de la 'aleatoriedad' en la IA de juegos?",
          de: "Was ist der Zweck von 'Zufälligkeit' in Spiele-KI?",
          nl: "Wat is het doel van 'willekeur' in game AI?"
        },
        options: [
          { en: "Making AI behavior less predictable and more human-like", es: "Hacer que el comportamiento de IA sea menos predecible y más humano", de: "KI-Verhalten weniger vorhersehbar und menschenähnlicher machen", nl: "AI-gedrag minder voorspelbaar en meer menselijk maken" },
          { en: "Breaking the game on purpose", es: "Romper el juego a propósito", de: "Das Spiel absichtlich kaputt machen", nl: "Het spel opzettelijk kapot maken" },
          { en: "Making games impossible to win", es: "Hacer que los juegos sean imposibles de ganar", de: "Spiele unmöglich zu gewinnen machen", nl: "Games onmogelijk om te winnen maken" },
          { en: "Reducing game quality", es: "Reducir la calidad del juego", de: "Spielqualität reduzieren", nl: "Game kwaliteit verminderen" }
        ],
        correct: 0,
        explanation: {
          en: "Adding controlled randomness to AI decisions prevents repetitive patterns and makes opponents feel more natural and unpredictable, like real players.",
          es: "Agregar aleatoriedad controlada a las decisiones de IA previene patrones repetitivos y hace que los oponentes se sientan más naturales e impredecibles, como jugadores reales.",
          de: "Kontrollierte Zufälligkeit zu KI-Entscheidungen hinzufügen verhindert repetitive Muster und lässt Gegner natürlicher und unvorhersehbarer wirken, wie echte Spieler.",
          nl: "Gecontroleerde willekeur toevoegen aan AI-beslissingen voorkomt repetitieve patronen en zorgt ervoor dat tegenstanders natuurlijker en onvoorspelbaarder aanvoelen, zoals echte spelers."
        }
      },
      {
        question: {
          en: "What does 'AI cheating' refer to in video games?",
          es: "¿A qué se refiere el 'trampeo de IA' en los videojuegos?",
          de: "Worauf bezieht sich 'KI-Schummeln' in Videospielen?",
          nl: "Waar verwijst 'AI valsspelen' naar in videogames?"
        },
        options: [
          { en: "When AI gets advantages players don't have to increase difficulty", es: "Cuando la IA obtiene ventajas que los jugadores no tienen para aumentar la dificultad", de: "Wenn KI Vorteile erhält die Spieler nicht haben um Schwierigkeit zu erhöhen", nl: "Wanneer AI voordelen krijgt die spelers niet hebben om moeilijkheid te verhogen" },
          { en: "AI that breaks game rules randomly", es: "IA que rompe reglas del juego aleatoriamente", de: "KI die Spielregeln zufällig bricht", nl: "AI die spelregels willekeurig breekt" },
          { en: "Players cheating against AI", es: "Jugadores haciendo trampa contra IA", de: "Spieler betrügen gegen KI", nl: "Spelers vals spelen tegen AI" },
          { en: "Using cheat codes in games", es: "Usar códigos de trampa en juegos", de: "Cheat-Codes in Spielen verwenden", nl: "Cheatcodes gebruiken in games" }
        ],
        correct: 0,
        explanation: {
          en: "AI cheating gives computer opponents unfair advantages like perfect aim, extra resources, or seeing through walls to compensate for limited decision-making abilities.",
          es: "El trampeo de IA da a los oponentes computarizados ventajas injustas como puntería perfecta, recursos extra o ver a través de paredes para compensar habilidades limitadas de toma de decisiones.",
          de: "KI-Schummeln gibt Computer-Gegnern unfaire Vorteile wie perfekte Zielgenauigkeit, Extra-Ressourcen oder Durchschauen von Wänden um begrenzte Entscheidungsfähigkeiten zu kompensieren.",
          nl: "AI valsspelen geeft computer-tegenstanders oneerlijke voordelen zoals perfect richten, extra resources of door muren kijken om beperkte besluitvormingsvaardigheden te compenseren."
        }
      },
      {
        question: {
          en: "What is a 'decision tree' in game AI?",
          es: "¿Qué es un 'árbol de decisión' en IA de juegos?",
          de: "Was ist ein 'Entscheidungsbaum' in Spiele-KI?",
          nl: "Wat is een 'decision tree' in game AI?"
        },
        options: [
          { en: "A branching structure where AI makes choices based on conditions", es: "Una estructura ramificada donde la IA toma decisiones basadas en condiciones", de: "Eine verzweigende Struktur bei der KI Entscheidungen basierend auf Bedingungen trifft", nl: "Een vertakkende structuur waarbij AI keuzes maakt op basis van voorwaarden" },
          { en: "A tree players must climb in adventure games", es: "Un árbol que los jugadores deben escalar en juegos de aventura", de: "Ein Baum den Spieler in Abenteuerspielen klettern müssen", nl: "Een boom die spelers moeten beklimmen in avontuurgames" },
          { en: "AI that only works in forest environments", es: "IA que solo funciona en entornos forestales", de: "KI die nur in Waldumgebungen funktioniert", nl: "AI die alleen werkt in bosomgevingen" },
          { en: "A voting system for game choices", es: "Un sistema de votación para elecciones del juego", de: "Ein Abstimmungssystem für Spielentscheidungen", nl: "Een stemsysteem voor game keuzes" }
        ],
        correct: 0,
        explanation: {
          en: "Decision trees help AI choose actions by following a series of if-then branches based on game state, like 'if health low then flee, else attack'.",
          es: "Los árboles de decisión ayudan a la IA a elegir acciones siguiendo una serie de ramas si-entonces basadas en el estado del juego, como 'si salud baja entonces huir, sino atacar'.",
          de: "Entscheidungsbäume helfen KI Aktionen zu wählen durch Folgen einer Reihe von wenn-dann-Zweigen basierend auf Spielzustand, wie 'wenn Gesundheit niedrig dann fliehen, sonst angreifen'.",
          nl: "Decision trees helpen AI acties te kiezen door een reeks als-dan takken te volgen op basis van game state, zoals 'als gezondheid laag dan vluchten, anders aanvallen'."
        }
      },
      {
        question: {
          en: "What is 'reaction time' for AI in games?",
          es: "¿Qué es el 'tiempo de reacción' para la IA en juegos?",
          de: "Was ist 'Reaktionszeit' für KI in Spielen?",
          nl: "Wat is 'reactietijd' voor AI in games?"
        },
        options: [
          { en: "The delay before AI responds to player actions", es: "El retraso antes de que la IA responda a las acciones del jugador", de: "Die Verzögerung bevor KI auf Spieleraktionen reagiert", nl: "De vertraging voordat AI reageert op speler acties" },
          { en: "How long it takes to load the game", es: "Cuánto tiempo toma cargar el juego", de: "Wie lange es dauert das Spiel zu laden", nl: "Hoe lang het duurt om de game te laden" },
          { en: "The speed of internet connection", es: "La velocidad de la conexión a internet", de: "Die Geschwindigkeit der Internetverbindung", nl: "De snelheid van internetverbinding" },
          { en: "How fast players can press buttons", es: "Qué tan rápido los jugadores pueden presionar botones", de: "Wie schnell Spieler Tasten drücken können", nl: "Hoe snel spelers knoppen kunnen indrukken" }
        ],
        correct: 0,
        explanation: {
          en: "AI reaction time is deliberately programmed to simulate human-like delays, preventing instant-perfect responses that would make enemies feel robotic or unfair.",
          es: "El tiempo de reacción de IA está programado deliberadamente para simular retrasos humanos, previniendo respuestas instantáneas perfectas que harían que los enemigos se sientan robóticos o injustos.",
          de: "KI-Reaktionszeit ist absichtlich programmiert um menschenähnliche Verzögerungen zu simulieren, verhindert sofortige-perfekte Antworten die Feinde robotisch oder unfair wirken lassen würden.",
          nl: "AI reactietijd is bewust geprogrammeerd om mensachtige vertragingen te simuleren, voorkomt instant-perfecte reacties die vijanden robotachtig of oneerlijk zouden laten aanvoelen."
        }
      },
      {
        question: {
          en: "What does 'cover system AI' do in shooter games?",
          es: "¿Qué hace la 'IA de sistema de cobertura' en juegos de disparos?",
          de: "Was macht 'Deckungssystem-KI' in Shooter-Spielen?",
          nl: "Wat doet 'cover system AI' in shooter games?"
        },
        options: [
          { en: "Makes AI hide behind objects for protection during combat", es: "Hace que la IA se esconda detrás de objetos para protección durante el combate", de: "Lässt KI sich hinter Objekten verstecken zum Schutz während des Kampfes", nl: "Zorgt ervoor dat AI zich verstopt achter objecten voor bescherming tijdens gevechten" },
          { en: "Covers the screen with graphics", es: "Cubre la pantalla con gráficos", de: "Bedeckt den Bildschirm mit Grafiken", nl: "Bedekt het scherm met graphics" },
          { en: "Hides game bugs from players", es: "Oculta errores del juego de los jugadores", de: "Versteckt Spielfehler vor Spielern", nl: "Verbergt game bugs voor spelers" },
          { en: "Creates background music", es: "Crea música de fondo", de: "Erstellt Hintergrundmusik", nl: "Creëert achtergrondmuziek" }
        ],
        correct: 0,
        explanation: {
          en: "Cover system AI intelligently uses environmental objects as shields, peeking out to shoot and ducking back for safety, creating tactical gameplay.",
          es: "La IA de sistema de cobertura usa inteligentemente objetos ambientales como escudos, asomándose para disparar y agachándose para seguridad, creando jugabilidad táctica.",
          de: "Deckungssystem-KI nutzt intelligent Umgebungsobjekte als Schilde, späht zum Schießen und duckt sich zurück für Sicherheit, schafft taktisches Gameplay.",
          nl: "Cover system AI gebruikt intelligent omgevingsobjecten als schilden, gluurt om te schieten en duikt terug voor veiligheid, creëert tactische gameplay."
        }
      },
      {
        question: {
          en: "What is 'navigation mesh' (navmesh) in game AI?",
          es: "¿Qué es 'malla de navegación' (navmesh) en IA de juegos?",
          de: "Was ist 'Navigationsnetz' (Navmesh) in Spiele-KI?",
          nl: "Wat is 'navigation mesh' (navmesh) in game AI?"
        },
        options: [
          { en: "A 3D map defining where AI characters can walk", es: "Un mapa 3D que define dónde los personajes IA pueden caminar", de: "Eine 3D-Karte die definiert wo KI-Charaktere laufen können", nl: "Een 3D-kaart die definieert waar AI-karakters kunnen lopen" },
          { en: "A fishing net used in water games", es: "Una red de pesca usada en juegos acuáticos", de: "Ein Fischernetz verwendet in Wasserspielen", nl: "Een visnet gebruikt in watergames" },
          { en: "A menu navigation system", es: "Un sistema de navegación de menú", de: "Ein Menü-Navigationssystem", nl: "Een menu navigatiesysteem" },
          { en: "Internet connection for multiplayer", es: "Conexión a internet para multijugador", de: "Internetverbindung für Mehrspieler", nl: "Internetverbinding voor multiplayer" }
        ],
        correct: 0,
        explanation: {
          en: "A navigation mesh is a 3D surface defining walkable areas in a game level, helping AI efficiently find paths without getting stuck on obstacles.",
          es: "Una malla de navegación es una superficie 3D que define áreas caminables en un nivel de juego, ayudando a la IA a encontrar eficientemente caminos sin quedarse atascados en obstáculos.",
          de: "Ein Navigationsnetz ist eine 3D-Oberfläche die begehbare Bereiche in einem Spiel-Level definiert, hilft KI effizient Pfade zu finden ohne an Hindernissen stecken zu bleiben.",
          nl: "Een navigation mesh is een 3D-oppervlak dat bewandelbare gebieden in een game level definieert, helpt AI efficiënt paden te vinden zonder vast te raken op obstakels."
        }
      },
      {
        question: {
          en: "What is 'AI perception' in game development?",
          es: "¿Qué es la 'percepción de IA' en desarrollo de juegos?",
          de: "Was ist 'KI-Wahrnehmung' in der Spieleentwicklung?",
          nl: "Wat is 'AI perceptie' in game ontwikkeling?"
        },
        options: [
          { en: "How AI gathers information about its environment and players", es: "Cómo la IA recopila información sobre su entorno y jugadores", de: "Wie KI Informationen über ihre Umgebung und Spieler sammelt", nl: "Hoe AI informatie verzamelt over haar omgeving en spelers" },
          { en: "How players perceive the game", es: "Cómo los jugadores perciben el juego", de: "Wie Spieler das Spiel wahrnehmen", nl: "Hoe spelers de game waarnemen" },
          { en: "Graphics quality settings", es: "Configuraciones de calidad gráfica", de: "Grafikqualitätseinstellungen", nl: "Grafische kwaliteit instellingen" },
          { en: "Sound volume controls", es: "Controles de volumen de sonido", de: "Lautstärkeregler", nl: "Geluid volume controles" }
        ],
        correct: 0,
        explanation: {
          en: "AI perception systems simulate senses like sight and hearing, determining what information AI has access to before making decisions, creating more immersive gameplay.",
          es: "Los sistemas de percepción de IA simulan sentidos como vista y oído, determinando qué información tiene acceso la IA antes de tomar decisiones, creando jugabilidad más inmersiva.",
          de: "KI-Wahrnehmungssysteme simulieren Sinne wie Sehen und Hören, bestimmen welche Informationen KI Zugang hat bevor Entscheidungen getroffen werden, schafft immersiveres Gameplay.",
          nl: "AI perceptie systemen simuleren zintuigen zoals zicht en gehoor, bepalen welke informatie AI toegang heeft voordat beslissingen worden genomen, creëert meer meeslepende gameplay."
        }
      },
      {
        question: {
          en: "What is 'AI spawning' in video games?",
          es: "¿Qué es el 'generación de IA' en videojuegos?",
          de: "Was ist 'KI-Spawning' in Videospielen?",
          nl: "Wat is 'AI spawning' in videogames?"
        },
        options: [
          { en: "Creating new AI enemies or characters during gameplay", es: "Crear nuevos enemigos o personajes IA durante el juego", de: "Neue KI-Feinde oder Charaktere während des Spiels erstellen", nl: "Nieuwe AI-vijanden of karakters creëren tijdens gameplay" },
          { en: "AI characters dying in games", es: "Personajes IA muriendo en juegos", de: "KI-Charaktere sterben in Spielen", nl: "AI-karakters sterven in games" },
          { en: "Fish AI in underwater games", es: "IA de peces en juegos submarinos", de: "Fisch-KI in Unterwasserspielen", nl: "Vis AI in onderwatergames" },
          { en: "Respawning player characters", es: "Reaparición de personajes de jugador", de: "Wiederbelebung von Spielercharakteren", nl: "Respawnen van speler karakters" }
        ],
        correct: 0,
        explanation: {
          en: "AI spawning refers to the system that generates new enemies or NPCs at specific locations or times, managing the flow and difficulty of encounters.",
          es: "La generación de IA se refiere al sistema que genera nuevos enemigos o NPCs en ubicaciones o momentos específicos, gestionando el flujo y dificultad de los encuentros.",
          de: "KI-Spawning bezieht sich auf das System das neue Feinde oder NPCs an bestimmten Orten oder Zeiten generiert, verwaltet den Fluss und Schwierigkeit von Begegnungen.",
          nl: "AI spawning verwijst naar het systeem dat nieuwe vijanden of NPCs genereert op specifieke locaties of tijden, beheert de flow en moeilijkheid van ontmoetingen."
        }
      },
      {
        question: {
          en: "What is 'friendly AI' in cooperative games?",
          es: "¿Qué es la 'IA amigable' en juegos cooperativos?",
          de: "Was ist 'freundliche KI' in kooperativen Spielen?",
          nl: "Wat is 'vriendelijke AI' in coöperatieve games?"
        },
        options: [
          { en: "AI-controlled allies that help players complete objectives", es: "Aliados controlados por IA que ayudan a los jugadores a completar objetivos", de: "KI-gesteuerte Verbündete die Spielern helfen Ziele zu erreichen", nl: "AI-gestuurde bondgenoten die spelers helpen doelstellingen te voltooien" },
          { en: "AI that is never aggressive", es: "IA que nunca es agresiva", de: "KI die niemals aggressiv ist", nl: "AI die nooit agressief is" },
          { en: "AI that always lets players win", es: "IA que siempre deja ganar a los jugadores", de: "KI die Spieler immer gewinnen lässt", nl: "AI die spelers altijd laat winnen" },
          { en: "AI that chats with players", es: "IA que charla con jugadores", de: "KI die mit Spielern chattet", nl: "AI die chat met spelers" }
        ],
        correct: 0,
        explanation: {
          en: "Friendly AI controls companion characters that fight alongside players, provide support, and assist with tasks, requiring AI to coordinate with human teammates.",
          es: "La IA amigable controla personajes compañeros que luchan junto a los jugadores, proporcionan apoyo y asisten con tareas, requiriendo que la IA se coordine con compañeros humanos.",
          de: "Freundliche KI steuert Begleitcharaktere die neben Spielern kämpfen, Unterstützung bieten und bei Aufgaben helfen, erfordert dass KI mit menschlichen Teamkollegen koordiniert.",
          nl: "Vriendelijke AI bestuurt metgezel karakters die naast spelers vechten, ondersteuning bieden en assisteren bij taken, vereist dat AI coördineert met menselijke teamgenoten."
        }
      },
      {
        question: {
          en: "What is 'waypoint navigation' in game AI?",
          es: "¿Qué es la 'navegación por puntos de referencia' en IA de juegos?",
          de: "Was ist 'Wegpunkt-Navigation' in Spiele-KI?",
          nl: "Wat is 'waypoint navigatie' in game AI?"
        },
        options: [
          { en: "AI moving between predefined points to navigate a level", es: "IA moviéndose entre puntos predefinidos para navegar un nivel", de: "KI bewegt sich zwischen vordefinierten Punkten um ein Level zu navigieren", nl: "AI beweegt tussen voorgedefinieerde punten om een level te navigeren" },
          { en: "Pointing directions with arrows on screen", es: "Señalar direcciones con flechas en pantalla", de: "Richtungen mit Pfeilen auf dem Bildschirm zeigen", nl: "Richtingen wijzen met pijlen op scherm" },
          { en: "GPS navigation in racing games", es: "Navegación GPS en juegos de carreras", de: "GPS-Navigation in Rennspielen", nl: "GPS navigatie in racegames" },
          { en: "Saving game checkpoints", es: "Guardar puntos de control del juego", de: "Spielkontrollpunkte speichern", nl: "Game checkpoints opslaan" }
        ],
        correct: 0,
        explanation: {
          en: "Waypoint navigation uses preset locations as guideposts for AI movement, creating patrol routes or helping AI navigate complex environments by connecting key points.",
          es: "La navegación por puntos de referencia usa ubicaciones preestablecidas como postes guía para el movimiento de IA, creando rutas de patrulla o ayudando a la IA a navegar entornos complejos conectando puntos clave.",
          de: "Wegpunkt-Navigation verwendet voreingestellte Orte als Wegweiser für KI-Bewegung, erstellt Patrouillenrouten oder hilft KI komplexe Umgebungen zu navigieren durch Verbinden von Schlüsselpunkten.",
          nl: "Waypoint navigatie gebruikt vooraf ingestelde locaties als gidspunten voor AI-beweging, creëert patrouilleroutes of helpt AI complexe omgevingen te navigeren door sleutelpunten te verbinden."
        }
      },
      {
        question: {
          en: "What is 'AI difficulty levels' in games?",
          es: "¿Qué son los 'niveles de dificultad de IA' en juegos?",
          de: "Was sind 'KI-Schwierigkeitsgrade' in Spielen?",
          nl: "Wat zijn 'AI moeilijkheidsniveaus' in games?"
        },
        options: [
          { en: "Settings that adjust how smart and capable AI opponents are", es: "Configuraciones que ajustan qué tan inteligentes y capaces son los oponentes IA", de: "Einstellungen die anpassen wie klug und fähig KI-Gegner sind", nl: "Instellingen die aanpassen hoe slim en capabel AI-tegenstanders zijn" },
          { en: "How hard the game is to install", es: "Qué tan difícil es instalar el juego", de: "Wie schwer das Spiel zu installieren ist", nl: "Hoe moeilijk de game te installeren is" },
          { en: "Number of levels in the game", es: "Número de niveles en el juego", de: "Anzahl der Level im Spiel", nl: "Aantal levels in de game" },
          { en: "Graphics quality options", es: "Opciones de calidad gráfica", de: "Grafikqualitätsoptionen", nl: "Grafische kwaliteit opties" }
        ],
        correct: 0,
        explanation: {
          en: "Difficulty levels (easy, medium, hard) change AI behavior - lower difficulties might reduce AI accuracy, reaction speed, or tactical intelligence to accommodate different player skill levels.",
          es: "Los niveles de dificultad (fácil, medio, difícil) cambian el comportamiento de IA - las dificultades más bajas pueden reducir la precisión de IA, velocidad de reacción o inteligencia táctica para acomodar diferentes niveles de habilidad del jugador.",
          de: "Schwierigkeitsgrade (leicht, mittel, schwer) ändern KI-Verhalten - niedrigere Schwierigkeiten können KI-Genauigkeit, Reaktionsgeschwindigkeit oder taktische Intelligenz reduzieren um verschiedene Spieler-Fähigkeitslevel zu berücksichtigen.",
          nl: "Moeilijkheidsniveaus (makkelijk, gemiddeld, moeilijk) veranderen AI-gedrag - lagere moeilijkheden kunnen AI-nauwkeurigheid, reactiesnelheid of tactische intelligentie verminderen om verschillende speler vaardigheidsniveaus te accommoderen."
        }
      },
      {
        question: {
          en: "What is the main goal when designing game AI?",
          es: "¿Cuál es el objetivo principal al diseñar IA de juegos?",
          de: "Was ist das Hauptziel beim Entwerfen von Spiele-KI?",
          nl: "Wat is het hoofddoel bij het ontwerpen van game AI?"
        },
        options: [
          { en: "Creating fun, challenging, and believable opponents", es: "Crear oponentes divertidos, desafiantes y creíbles", de: "Spaßige, herausfordernde und glaubwürdige Gegner erstellen", nl: "Leuke, uitdagende en geloofwaardige tegenstanders creëren" },
          { en: "Making AI as smart as possible at any cost", es: "Hacer que la IA sea lo más inteligente posible a cualquier costo", de: "KI so klug wie möglich machen um jeden Preis", nl: "AI zo slim mogelijk maken tegen elke prijs" },
          { en: "Reducing development time only", es: "Reducir solo el tiempo de desarrollo", de: "Nur Entwicklungszeit reduzieren", nl: "Alleen ontwikkelingstijd verminderen" },
          { en: "Creating the most complex code", es: "Crear el código más complejo", de: "Den komplexesten Code erstellen", nl: "De meest complexe code creëren" }
        ],
        correct: 0,
        explanation: {
          en: "Good game AI balances challenge with entertainment, creating opponents that feel intelligent and real without being unfairly difficult or obviously artificial.",
          es: "La buena IA de juegos equilibra desafío con entretenimiento, creando oponentes que se sienten inteligentes y reales sin ser injustamente difíciles u obviamente artificiales.",
          de: "Gute Spiele-KI balanciert Herausforderung mit Unterhaltung, erstellt Gegner die intelligent und real wirken ohne unfair schwierig oder offensichtlich künstlich zu sein.",
          nl: "Goede game AI balanceert uitdaging met entertainment, creërend tegenstanders die intelligent en echt aanvoelen zonder oneerlijk moeilijk of duidelijk kunstmatig te zijn."
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
