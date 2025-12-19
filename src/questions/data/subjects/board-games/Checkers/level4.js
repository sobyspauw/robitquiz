// Quiz Template - Level 4: Bord spelletjes - Checkers
(function() {
  const level4 = {
    name: {
      en: "Checkers/Draughts - Expert",
      es: "Damas - Experto",
      de: "Dame - Experte",
      nl: "Dammen - Expert"
    },
    questions: [
      {
        question: {
          en: "What characterizes the 'Third Position' in checkers endgame theory?",
          es: "¿Qué caracteriza la 'Tercera Posición' en la teoría del final de damas?",
          de: "Was charakterisiert die 'Dritte Position' in der Dame-Endspieltheorie?",
          nl: "Wat kenmerkt de 'Derde Positie' in de dammen eindspeltheorie?"
        },
        options: [
          {
            en: "A losing position despite numerical equality",
            es: "Una posición perdedora a pesar de la igualdad numérica",
            de: "Eine verlierende Position trotz numerischer Gleichheit",
            nl: "Een verliezende positie ondanks numerieke gelijkheid"
          },
          {
            en: "Having three kings versus two",
            es: "Tener tres damas contra dos",
            de: "Drei Damen gegen zwei haben",
            nl: "Drie dammen tegen twee hebben"
          },
          {
            en: "A winning position with three men",
            es: "Una posición ganadora con tres piezas",
            de: "Eine gewinnende Position mit drei Steinen",
            nl: "Een winnende positie met drie stukken"
          },
          {
            en: "Controlling three key squares",
            es: "Controlar tres casillas clave",
            de: "Drei Schlüsselfelder kontrollieren",
            nl: "Drie sleutelposities controleren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Third Position is an endgame concept where one side has a theoretically losing position even with equal material, typically due to inferior piece placement and lack of winning tempo moves.",
          es: "La Tercera Posición es un concepto de final donde un bando tiene una posición teóricamente perdedora incluso con material igual, típicamente debido a una colocación inferior de piezas y falta de movimientos de tempo ganadores.",
          de: "Die Dritte Position ist ein Endspielkonzept, bei dem eine Seite eine theoretisch verlierende Position hat, selbst bei gleichem Material, typischerweise aufgrund schlechterer Steinplatzierung und fehlender gewinnender Tempo-Züge.",
          nl: "Derde Positie is een eindspelconcept waarbij één kant een theoretisch verliezende positie heeft zelfs met gelijk materiaal, typisch door inferieure stukplaatsing en gebrek aan winnende tempo-zetten."
        }
      },
      {
        question: {
          en: "In the 'Old Fourteenth' opening, what is Black's main strategic goal?",
          es: "En la apertura 'Viejo Decimocuarto', ¿cuál es el objetivo estratégico principal de las negras?",
          de: "Was ist das strategische Hauptziel von Schwarz in der 'Alt-Vierzehner'-Eröffnung?",
          nl: "Wat is het strategische hoofddoel van zwart in de 'Old Fourteenth' opening?"
        },
        options: [
          {
            en: "Control square 14 and develop kingside pressure",
            es: "Controlar la casilla 14 y desarrollar presión en el flanco del rey",
            de: "Feld 14 kontrollieren und Druck auf dem Königsflügel entwickeln",
            nl: "Veld 14 controleren en koningszijde druk ontwikkelen"
          },
          {
            en: "Sacrifice material for initiative",
            es: "Sacrificar material por la iniciativa",
            de: "Material für die Initiative opfern",
            nl: "Materiaal opofferen voor initiatief"
          },
          {
            en: "Build a defensive fortress",
            es: "Construir una fortaleza defensiva",
            de: "Eine Verteidigungsfestung bauen",
            nl: "Een verdedigingsvesting bouwen"
          },
          {
            en: "Trade pieces quickly",
            es: "Intercambiar piezas rápidamente",
            de: "Schnell Steine tauschen",
            nl: "Snel stukken ruilen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Old Fourteenth is a classical opening where Black aims to control the critical square 14, creating central dominance and potential for kingside attacks while maintaining solid structure.",
          es: "El Viejo Decimocuarto es una apertura clásica donde las negras apuntan a controlar la casilla crítica 14, creando dominio central y potencial para ataques en el flanco del rey mientras mantienen una estructura sólida.",
          de: "Der Alt-Vierzehner ist eine klassische Eröffnung, bei der Schwarz darauf abzielt, das kritische Feld 14 zu kontrollieren, um zentrale Dominanz und Potenzial für Königsflügelangriffe zu schaffen, während eine solide Struktur beibehalten wird.",
          nl: "De Old Fourteenth is een klassieke opening waarbij zwart ernaar streeft het kritieke veld 14 te controleren, waarbij centrale dominantie en potentieel voor koningszijde aanvallen gecreëerd wordt terwijl een solide structuur behouden blijft."
        }
      },
      {
        question: {
          en: "What does it mean to 'cook' a checkers problem?",
          es: "¿Qué significa 'cocinar' un problema de damas?",
          de: "Was bedeutet es, ein Dame-Problem zu 'kochen'?",
          nl: "Wat betekent het om een damprobleem te 'koken'?"
        },
        options: [
          {
            en: "Solve the problem using an unintended method",
            es: "Resolver el problema usando un método no intencionado",
            de: "Das Problem mit einer unbeabsichtigten Methode lösen",
            nl: "Het probleem oplossen met een onbedoelde methode"
          },
          {
            en: "Make the problem more difficult",
            es: "Hacer el problema más difícil",
            de: "Das Problem schwieriger machen",
            nl: "Het probleem moeilijker maken"
          },
          {
            en: "Analyze the problem with a computer",
            es: "Analizar el problema con una computadora",
            de: "Das Problem mit einem Computer analysieren",
            nl: "Het probleem met een computer analyseren"
          },
          {
            en: "Create a variation of the problem",
            es: "Crear una variación del problema",
            de: "Eine Variation des Problems erstellen",
            nl: "Een variatie van het probleem creëren"
          }
        ],
        correct: 0,
        explanation: {
          en: "A 'cook' in checkers problem composition is an unintended solution to a problem that differs from the composer's intended solution, typically revealing a flaw in the problem's construction.",
          es: "Un 'cocinado' en la composición de problemas de damas es una solución no intencionada a un problema que difiere de la solución prevista del compositor, típicamente revelando un defecto en la construcción del problema.",
          de: "Ein 'Kochen' in der Dame-Problemkomposition ist eine unbeabsichtigte Lösung eines Problems, die von der beabsichtigten Lösung des Komponisten abweicht und typischerweise einen Fehler in der Konstruktion des Problems aufdeckt.",
          nl: "Een 'kook' in damprobleemcompositie is een onbedoelde oplossing voor een probleem die verschilt van de bedoelde oplossing van de componist, waarbij typisch een fout in de constructie van het probleem wordt onthuld."
        }
      },
      {
        question: {
          en: "What characterizes a 'running game' in checkers?",
          es: "¿Qué caracteriza un 'juego de carrera' en damas?",
          de: "Was charakterisiert ein 'Rennspiel' beim Dame?",
          nl: "Wat kenmerkt een 'race spel' in dammen?"
        },
        options: [
          {
            en: "Both players racing to promote men to kings first",
            es: "Ambos jugadores compitiendo por promover piezas a damas primero",
            de: "Beide Spieler wetteifern darum, zuerst Steine zu Damen zu befördern",
            nl: "Beide spelers racen om eerst stukken tot dammen te promoveren"
          },
          {
            en: "Quick piece exchanges in the opening",
            es: "Intercambios rápidos de piezas en la apertura",
            de: "Schnelle Steintausche in der Eröffnung",
            nl: "Snelle stukruilen in de opening"
          },
          {
            en: "Playing moves very quickly",
            es: "Jugar movimientos muy rápidamente",
            de: "Züge sehr schnell spielen",
            nl: "Zeer snel zetten spelen"
          },
          {
            en: "Using only running captures",
            es: "Usar solo capturas corridas",
            de: "Nur laufende Schläge verwenden",
            nl: "Alleen lopende slagen gebruiken"
          }
        ],
        correct: 0,
        explanation: {
          en: "A running game occurs when both sides have advanced men racing toward opposite king rows, with the outcome often determined by who can promote first and gain tempo advantage in the resulting king endgame.",
          es: "Un juego de carrera ocurre cuando ambos bandos tienen piezas avanzadas compitiendo hacia filas de dama opuestas, con el resultado a menudo determinado por quién puede promover primero y ganar ventaja de tempo en el final de damas resultante.",
          de: "Ein Rennspiel tritt auf, wenn beide Seiten fortgeschrittene Steine haben, die zu gegenüberliegenden Damenreihen rennen, wobei das Ergebnis oft davon bestimmt wird, wer zuerst befördern und einen Tempo-Vorteil im resultierenden Damen-Endspiel gewinnen kann.",
          nl: "Een race spel vindt plaats wanneer beide kanten gevorderde stukken hebben die naar tegenovergestelde damrijen racen, waarbij de uitkomst vaak wordt bepaald door wie eerst kan promoveren en tempo-voordeel kan verkrijgen in het resulterende dammen eindspel."
        }
      },
      {
        question: {
          en: "In the 'Laird and Lady' opening, what tactical theme is most prominent?",
          es: "En la apertura 'Señor y Señora', ¿qué tema táctico es más prominente?",
          de: "Welches taktische Thema ist in der 'Laird and Lady'-Eröffnung am prominentesten?",
          nl: "Welk tactisch thema is het meest prominent in de 'Laird and Lady' opening?"
        },
        options: [
          {
            en: "Dual king sacrifice possibilities",
            es: "Posibilidades de sacrificio dual de damas",
            de: "Doppelte Damenopfer-Möglichkeiten",
            nl: "Dubbele damoffers mogelijkheden"
          },
          {
            en: "Central pawn breakthrough",
            es: "Ruptura central de peones",
            de: "Zentraler Bauern-Durchbruch",
            nl: "Centrale pionnen doorbraak"
          },
          {
            en: "Wing formation attacks",
            es: "Ataques de formación de ala",
            de: "Flügelformationsangriffe",
            nl: "Vleugel formatie aanvallen"
          },
          {
            en: "Back rank weaknesses",
            es: "Debilidades de la fila trasera",
            de: "Schwächen der Grundreihe",
            nl: "Achterste rij zwaktes"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Laird and Lady opening is known for complex tactical situations where both players may have opportunities to sacrifice kings for winning combinations, requiring precise calculation and understanding of resulting positions.",
          es: "La apertura Señor y Señora es conocida por situaciones tácticas complejas donde ambos jugadores pueden tener oportunidades de sacrificar damas para combinaciones ganadoras, requiriendo cálculo preciso y comprensión de las posiciones resultantes.",
          de: "Die Laird and Lady-Eröffnung ist bekannt für komplexe taktische Situationen, in denen beide Spieler Möglichkeiten haben können, Damen für gewinnende Kombinationen zu opfern, was präzise Berechnung und Verständnis der resultierenden Stellungen erfordert.",
          nl: "De Laird and Lady opening staat bekend om complexe tactische situaties waarbij beide spelers mogelijkheden kunnen hebben om dammen op te offeren voor winnende combinaties, wat nauwkeurige berekening en begrip van de resulterende posities vereist."
        }
      },
      {
        question: {
          en: "What is a 'parachute checker' position?",
          es: "¿Qué es una posición de 'dama paracaídas'?",
          de: "Was ist eine 'Fallschirm-Dame'-Position?",
          nl: "Wat is een 'parachute dam' positie?"
        },
        options: [
          {
            en: "A piece dropped behind enemy lines that controls key squares",
            es: "Una pieza colocada detrás de líneas enemigas que controla casillas clave",
            de: "Ein Stein, der hinter feindlichen Linien platziert wird und Schlüsselfelder kontrolliert",
            nl: "Een stuk gedropt achter vijandelijke linies dat sleutelvelden controleert"
          },
          {
            en: "A jumping checker making multiple captures",
            es: "Una dama saltando haciendo múltiples capturas",
            de: "Ein springender Stein, der mehrere Schläge macht",
            nl: "Een springend stuk dat meerdere slagen maakt"
          },
          {
            en: "A king descending from the king row",
            es: "Una dama descendiendo de la fila de damas",
            de: "Eine Dame, die von der Damenreihe herabsteigt",
            nl: "Een dam die afdaalt van de damrij"
          },
          {
            en: "A defensive checker near the back rank",
            es: "Una dama defensiva cerca de la fila trasera",
            de: "Ein defensiver Stein nahe der Grundreihe",
            nl: "Een defensief stuk nabij de achterste rij"
          }
        ],
        correct: 0,
        explanation: {
          en: "A parachute checker is an advanced piece that has penetrated deep into enemy territory, typically controlling critical squares and limiting opponent mobility, similar to a paratrooper dropped behind enemy lines.",
          es: "Una dama paracaídas es una pieza avanzada que ha penetrado profundamente en territorio enemigo, típicamente controlando casillas críticas y limitando la movilidad del oponente, similar a un paracaidista lanzado detrás de líneas enemigas.",
          de: "Ein Fallschirm-Stein ist ein fortgeschrittener Stein, der tief in feindliches Territorium eingedrungen ist, typischerweise kritische Felder kontrolliert und die Mobilität des Gegners einschränkt, ähnlich einem Fallschirmjäger, der hinter feindlichen Linien abgesetzt wurde.",
          nl: "Een parachute stuk is een gevorderd stuk dat diep in vijandelijk territorium is doorgedrongen, typisch kritieke velden controlerend en de mobiliteit van de tegenstander beperkend, vergelijkbaar met een paratrooper gedropt achter vijandelijke linies."
        }
      },
      {
        question: {
          en: "What is the critical weakness in the 'Denny' opening variation?",
          es: "¿Cuál es la debilidad crítica en la variación de apertura 'Denny'?",
          de: "Was ist die kritische Schwäche in der 'Denny'-Eröffnungsvariante?",
          nl: "Wat is de kritieke zwakte in de 'Denny' opening variatie?"
        },
        options: [
          {
            en: "Exposed square 19 creating tactical vulnerabilities",
            es: "Casilla 19 expuesta creando vulnerabilidades tácticas",
            de: "Freiliegendes Feld 19, das taktische Schwächen schafft",
            nl: "Blootgesteld veld 19 dat tactische kwetsbaarheden creëert"
          },
          {
            en: "Lack of center control",
            es: "Falta de control del centro",
            de: "Mangelnde Zentrumskontrolle",
            nl: "Gebrek aan centrum controle"
          },
          {
            en: "Slow king development",
            es: "Desarrollo lento de damas",
            de: "Langsame Damenentwicklung",
            nl: "Trage dam ontwikkeling"
          },
          {
            en: "Weak queenside structure",
            es: "Estructura débil en el flanco de dama",
            de: "Schwache Damenflügelstruktur",
            nl: "Zwakke damezijde structuur"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Denny opening's main weakness is the exposure of square 19, which can be exploited by tactical shots and combinations, requiring White to play with extreme accuracy to avoid falling into prepared traps.",
          es: "La principal debilidad de la apertura Denny es la exposición de la casilla 19, que puede ser explotada por golpes tácticos y combinaciones, requiriendo que las blancas jueguen con extrema precisión para evitar caer en trampas preparadas.",
          de: "Die Hauptschwäche der Denny-Eröffnung ist die Exposition von Feld 19, das durch taktische Schläge und Kombinationen ausgenutzt werden kann, was von Weiß äußerste Genauigkeit erfordert, um vorbereiteten Fallen zu entgehen.",
          nl: "De belangrijkste zwakte van de Denny opening is de blootstelling van veld 19, dat kan worden uitgebuit door tactische slagen en combinaties, wat vereist dat wit met extreme nauwkeurigheid speelt om voorbereide vallen te vermijden."
        }
      },
      {
        question: {
          en: "What defines a 'trunk position' in checkers endgames?",
          es: "¿Qué define una 'posición tronco' en finales de damas?",
          de: "Was definiert eine 'Stamm-Position' in Dame-Endspielen?",
          nl: "Wat definieert een 'stam positie' in dammen eindspelen?"
        },
        options: [
          {
            en: "A main theoretical position from which many variations branch",
            es: "Una posición teórica principal de la cual se ramifican muchas variaciones",
            de: "Eine theoretische Hauptposition, von der viele Varianten abzweigen",
            nl: "Een theoretische hoofdpositie waaruit veel variaties vertakken"
          },
          {
            en: "A position with pieces aligned vertically",
            es: "Una posición con piezas alineadas verticalmente",
            de: "Eine Position mit vertikal ausgerichteten Steinen",
            nl: "Een positie met stukken verticaal uitgelijnd"
          },
          {
            en: "The starting position of an endgame",
            es: "La posición inicial de un final",
            de: "Die Ausgangsposition eines Endspiels",
            nl: "De startpositie van een eindspel"
          },
          {
            en: "A symmetrical endgame formation",
            es: "Una formación de final simétrica",
            de: "Eine symmetrische Endspielformation",
            nl: "Een symmetrische eindspel formatie"
          }
        ],
        correct: 0,
        explanation: {
          en: "A trunk position is a fundamental endgame configuration that serves as a critical reference point, with numerous variations and transpositions stemming from it, much like branches from a tree trunk.",
          es: "Una posición tronco es una configuración de final fundamental que sirve como punto de referencia crítico, con numerosas variaciones y transposiciones derivadas de ella, como ramas de un tronco de árbol.",
          de: "Eine Stamm-Position ist eine fundamentale Endspielkonfiguration, die als kritischer Referenzpunkt dient, mit zahlreichen Varianten und Transpositionen, die daraus hervorgehen, ähnlich wie Äste von einem Baumstamm.",
          nl: "Een stam positie is een fundamentele eindspel configuratie die dient als kritisch referentiepunt, met talrijke variaties en transposities die eruit voortkomen, net zoals takken van een boomstam."
        }
      },
      {
        question: {
          en: "What is a 'building move' in positional play?",
          es: "¿Qué es un 'movimiento de construcción' en el juego posicional?",
          de: "Was ist ein 'Aufbau-Zug' im Positionsspiel?",
          nl: "Wat is een 'opbouwzet' in positioneel spel?"
        },
        options: [
          {
            en: "A move that improves position without immediate tactical gain",
            es: "Un movimiento que mejora la posición sin ganancia táctica inmediata",
            de: "Ein Zug, der die Position verbessert, ohne sofortigen taktischen Gewinn",
            nl: "Een zet die de positie verbetert zonder directe tactische winst"
          },
          {
            en: "Creating a defensive wall",
            es: "Crear un muro defensivo",
            de: "Eine Verteidigungsmauer errichten",
            nl: "Een verdedigingsmuur creëren"
          },
          {
            en: "Advancing toward king row",
            es: "Avanzar hacia la fila de damas",
            de: "Zur Damenreihe vorrücken",
            nl: "Naar de damrij opschuiven"
          },
          {
            en: "Setting up a forced capture",
            es: "Preparar una captura forzada",
            de: "Einen erzwungenen Schlag vorbereiten",
            nl: "Een gedwongen slag opzetten"
          }
        ],
        correct: 0,
        explanation: {
          en: "A building move is a subtle positional improvement that gradually strengthens piece coordination, square control, or structural advantages, laying groundwork for future tactical opportunities without forcing immediate confrontation.",
          es: "Un movimiento de construcción es una mejora posicional sutil que gradualmente fortalece la coordinación de piezas, control de casillas o ventajas estructurales, sentando las bases para futuras oportunidades tácticas sin forzar una confrontación inmediata.",
          de: "Ein Aufbau-Zug ist eine subtile positionelle Verbesserung, die allmählich die Steinkoordination, Feldkontrolle oder strukturelle Vorteile stärkt und den Grundstein für zukünftige taktische Möglichkeiten legt, ohne sofortige Konfrontation zu erzwingen.",
          nl: "Een opbouwzet is een subtiele positionele verbetering die geleidelijk de stukcoördinatie, veldcontrole of structurele voordelen versterkt, waarbij de basis wordt gelegd voor toekomstige tactische mogelijkheden zonder directe confrontatie af te dwingen."
        }
      },
      {
        question: {
          en: "What is the theoretical outcome of the 'Kelso Cross' opening with perfect play?",
          es: "¿Cuál es el resultado teórico de la apertura 'Cruz de Kelso' con juego perfecto?",
          de: "Was ist das theoretische Ergebnis der 'Kelso-Kreuz'-Eröffnung bei perfektem Spiel?",
          nl: "Wat is het theoretische resultaat van de 'Kelso Cross' opening met perfect spel?"
        },
        options: [
          {
            en: "A draw with precise defensive play by both sides",
            es: "Tablas con juego defensivo preciso por ambos bandos",
            de: "Ein Remis bei präzisem Verteidigungsspiel beider Seiten",
            nl: "Remise met nauwkeurig defensief spel door beide kanten"
          },
          {
            en: "A forced win for White",
            es: "Victoria forzada para las blancas",
            de: "Ein erzwungener Gewinn für Weiß",
            nl: "Een gedwongen winst voor wit"
          },
          {
            en: "A forced win for Black",
            es: "Victoria forzada para las negras",
            de: "Ein erzwungener Gewinn für Schwarz",
            nl: "Een gedwongen winst voor zwart"
          },
          {
            en: "An unclear position",
            es: "Una posición poco clara",
            de: "Eine unklare Stellung",
            nl: "Een onduidelijke positie"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Kelso Cross, like most sound openings in checkers, leads to a theoretical draw with best play from both sides, though it creates rich tactical and strategic complexity requiring deep understanding.",
          es: "La Cruz de Kelso, como la mayoría de las aperturas sólidas en damas, conduce a unas tablas teóricas con el mejor juego de ambos bandos, aunque crea una rica complejidad táctica y estratégica que requiere una comprensión profunda.",
          de: "Das Kelso-Kreuz führt, wie die meisten soliden Dame-Eröffnungen, zu einem theoretischen Remis bei bestem Spiel beider Seiten, schafft jedoch reiche taktische und strategische Komplexität, die tiefes Verständnis erfordert.",
          nl: "De Kelso Cross leidt, zoals de meeste solide damopeningen, tot een theoretische remise met het beste spel van beide kanten, hoewel het rijke tactische en strategische complexiteit creëert die diep begrip vereist."
        }
      },
      {
        question: {
          en: "Why is developing the back rank considered crucial in advanced play?",
          es: "¿Por qué se considera crucial desarrollar la fila trasera en el juego avanzado?",
          de: "Warum gilt die Entwicklung der Grundreihe im fortgeschrittenen Spiel als entscheidend?",
          nl: "Waarom wordt het ontwikkelen van de achterste rij als cruciaal beschouwd in gevorderd spel?"
        },
        options: [
          {
            en: "It prevents back rank weaknesses and enables king mobility",
            es: "Previene debilidades en la fila trasera y permite movilidad de damas",
            de: "Es verhindert Grundreihenschwächen und ermöglicht Damenmobilität",
            nl: "Het voorkomt achterste rij zwaktes en maakt dam mobiliteit mogelijk"
          },
          {
            en: "It creates immediate attacking chances",
            es: "Crea oportunidades de ataque inmediatas",
            de: "Es schafft sofortige Angriffschancen",
            nl: "Het creëert onmiddellijke aanvalskansen"
          },
          {
            en: "It forces opponent trades",
            es: "Fuerza intercambios del oponente",
            de: "Es erzwingt Tausche des Gegners",
            nl: "Het dwingt tegenstander ruilen af"
          },
          {
            en: "It secures material advantage",
            es: "Asegura ventaja material",
            de: "Es sichert materiellen Vorteil",
            nl: "Het zorgt voor materiaal voordeel"
          }
        ],
        correct: 0,
        explanation: {
          en: "Back rank development is critical because it eliminates potential tactical vulnerabilities while ensuring that promoted kings have freedom to maneuver effectively, a key principle in transitioning from middlegame to endgame.",
          es: "El desarrollo de la fila trasera es crítico porque elimina vulnerabilidades tácticas potenciales mientras asegura que las damas promovidas tengan libertad para maniobrar efectivamente, un principio clave en la transición del medio juego al final.",
          de: "Die Grundreihenentwicklung ist kritisch, weil sie potenzielle taktische Schwächen eliminiert und gleichzeitig sicherstellt, dass beförderte Damen Freiheit haben, effektiv zu manövrieren, ein Schlüsselprinzip beim Übergang vom Mittelspiel zum Endspiel.",
          nl: "Achterste rij ontwikkeling is kritisch omdat het potentiële tactische kwetsbaarheden elimineert terwijl het ervoor zorgt dat gepromoveerde dammen vrijheid hebben om effectief te manoeuvreren, een sleutelprincipe in de overgang van middenspel naar eindspel."
        }
      },
      {
        question: {
          en: "What characterizes the 'Whilter' position in endgame theory?",
          es: "¿Qué caracteriza la posición 'Whilter' en la teoría del final?",
          de: "Was charakterisiert die 'Whilter'-Position in der Endspieltheorie?",
          nl: "Wat kenmerkt de 'Whilter' positie in de eindspeltheorie?"
        },
        options: [
          {
            en: "A complex king versus men endgame with winning chances",
            es: "Un final complejo de dama contra piezas con oportunidades de victoria",
            de: "Ein komplexes Dame-gegen-Steine-Endspiel mit Gewinnchancen",
            nl: "Een complex dam tegen stukken eindspel met winstkansen"
          },
          {
            en: "A drawn king and pawn endgame",
            es: "Un final de dama y peón en tablas",
            de: "Ein remises Damen- und Bauern-Endspiel",
            nl: "Een remise dam en pion eindspel"
          },
          {
            en: "A theoretical losing endgame",
            es: "Un final teóricamente perdedor",
            de: "Ein theoretisch verlierendes Endspiel",
            nl: "Een theoretisch verliezend eindspel"
          },
          {
            en: "A symmetrical endgame structure",
            es: "Una estructura de final simétrica",
            de: "Eine symmetrische Endspielstruktur",
            nl: "Een symmetrische eindspel structuur"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Whilter position is a celebrated endgame study featuring a king against multiple men, where the king can achieve a win through precise maneuvering despite being materially behind, demonstrating the power of king activity.",
          es: "La posición Whilter es un estudio de final célebre que presenta una dama contra múltiples piezas, donde la dama puede lograr la victoria mediante maniobras precisas a pesar de estar en desventaja material, demostrando el poder de la actividad de dama.",
          de: "Die Whilter-Position ist eine gefeierte Endspielstudie mit einer Dame gegen mehrere Steine, bei der die Dame durch präzises Manövrieren einen Gewinn erzielen kann, obwohl sie materiell zurückliegt, was die Kraft der Damenaktivität demonstriert.",
          nl: "De Whilter positie is een gevierde eindspelstudie met een dam tegen meerdere stukken, waarbij de dam een winst kan bereiken door nauwkeurig manoeuvreren ondanks materieel achterstand, wat de kracht van dam activiteit demonstreert."
        }
      },
      {
        question: {
          en: "What is a 'positional sacrifice' in checkers?",
          es: "¿Qué es un 'sacrificio posicional' en damas?",
          de: "Was ist ein 'positionelles Opfer' beim Dame?",
          nl: "Wat is een 'positioneel offer' in dammen?"
        },
        options: [
          {
            en: "Giving material for long-term structural or strategic advantage",
            es: "Dar material por ventaja estructural o estratégica a largo plazo",
            de: "Material für langfristigen strukturellen oder strategischen Vorteil geben",
            nl: "Materiaal geven voor langetermijn structureel of strategisch voordeel"
          },
          {
            en: "Trading pieces to simplify the position",
            es: "Intercambiar piezas para simplificar la posición",
            de: "Steine tauschen, um die Position zu vereinfachen",
            nl: "Stukken ruilen om de positie te vereenvoudigen"
          },
          {
            en: "Sacrificing a piece for immediate checkmate",
            es: "Sacrificar una pieza para jaque mate inmediato",
            de: "Einen Stein für sofortiges Matt opfern",
            nl: "Een stuk opofferen voor onmiddellijke schaakmat"
          },
          {
            en: "Moving a piece to a worse square",
            es: "Mover una pieza a una casilla peor",
            de: "Einen Stein auf ein schlechteres Feld ziehen",
            nl: "Een stuk naar een slechter veld verplaatsen"
          }
        ],
        correct: 0,
        explanation: {
          en: "A positional sacrifice involves giving up material not for immediate tactical gain but to achieve superior piece placement, better king activity, or favorable structural advantages that provide long-term compensation.",
          es: "Un sacrificio posicional implica dar material no por ganancia táctica inmediata sino para lograr una mejor colocación de piezas, mejor actividad de damas o ventajas estructurales favorables que proporcionan compensación a largo plazo.",
          de: "Ein positionelles Opfer beinhaltet die Aufgabe von Material nicht für sofortigen taktischen Gewinn, sondern um bessere Steinplatzierung, bessere Damenaktivität oder günstige strukturelle Vorteile zu erzielen, die langfristige Kompensation bieten.",
          nl: "Een positioneel offer houdt in dat materiaal wordt opgegeven niet voor directe tactische winst maar om superieure stukplaatsing, betere dam activiteit of gunstige structurele voordelen te bereiken die langetermijn compensatie bieden."
        }
      },
      {
        question: {
          en: "What is meant by 'the move' in king endgames?",
          es: "¿Qué se entiende por 'la jugada' en finales de damas?",
          de: "Was bedeutet 'der Zug' in Damen-Endspielen?",
          nl: "Wat wordt bedoeld met 'de zet' in dam eindspelen?"
        },
        options: [
          {
            en: "The tempo advantage determining who reaches a key square first",
            es: "La ventaja de tempo que determina quién alcanza una casilla clave primero",
            de: "Der Tempo-Vorteil, der bestimmt, wer ein Schlüsselfeld zuerst erreicht",
            nl: "Het tempo voordeel dat bepaalt wie eerst een sleutelveld bereikt"
          },
          {
            en: "The optimal move in any position",
            es: "La jugada óptima en cualquier posición",
            de: "Der optimale Zug in jeder Position",
            nl: "De optimale zet in elke positie"
          },
          {
            en: "A forced capture sequence",
            es: "Una secuencia de captura forzada",
            de: "Eine erzwungene Schlagsequenz",
            nl: "Een gedwongen slagreeks"
          },
          {
            en: "The final winning move",
            es: "La jugada ganadora final",
            de: "Der letzte gewinnende Zug",
            nl: "De laatste winnende zet"
          }
        ],
        correct: 0,
        explanation: {
          en: "In king endgames, 'the move' refers to the critical tempo advantage where having the right to move (or forcing the opponent to move) determines who controls key squares and achieves a winning or drawing position.",
          es: "En finales de damas, 'la jugada' se refiere a la ventaja de tempo crítica donde tener el derecho a mover (o forzar al oponente a mover) determina quién controla casillas clave y logra una posición ganadora o de tablas.",
          de: "In Damen-Endspielen bezieht sich 'der Zug' auf den kritischen Tempo-Vorteil, bei dem das Zugrecht (oder das Zwingen des Gegners zu ziehen) bestimmt, wer Schlüsselfelder kontrolliert und eine gewinnende oder remise Position erreicht.",
          nl: "In dam eindspelen verwijst 'de zet' naar het kritieke tempo voordeel waarbij het recht om te zetten (of de tegenstander dwingen te zetten) bepaalt wie sleutelvelden controleert en een winnende of remise positie bereikt."
        }
      },
      {
        question: {
          en: "What strategic principle defines the 'Fife' opening?",
          es: "¿Qué principio estratégico define la apertura 'Fife'?",
          de: "Welches strategische Prinzip definiert die 'Fife'-Eröffnung?",
          nl: "Welk strategisch principe definieert de 'Fife' opening?"
        },
        options: [
          {
            en: "Early side development with delayed center confrontation",
            es: "Desarrollo lateral temprano con confrontación central retrasada",
            de: "Frühe Seitenentwicklung mit verzögerter Zentrumskonfrontation",
            nl: "Vroege zijde ontwikkeling met vertraagde centrum confrontatie"
          },
          {
            en: "Rapid piece exchanges",
            es: "Intercambios rápidos de piezas",
            de: "Schnelle Steintausche",
            nl: "Snelle stukruilen"
          },
          {
            en: "Immediate central control",
            es: "Control central inmediato",
            de: "Sofortige Zentrumskontrolle",
            nl: "Onmiddellijke centrum controle"
          },
          {
            en: "Defensive pawn structure",
            es: "Estructura de peones defensiva",
            de: "Defensive Bauernstruktur",
            nl: "Defensieve pion structuur"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Fife opening is characterized by developing pieces along the flanks before engaging in central battles, creating flexible positions where players can choose when and how to contest the center based on opponent responses.",
          es: "La apertura Fife se caracteriza por desarrollar piezas a lo largo de los flancos antes de entrar en batallas centrales, creando posiciones flexibles donde los jugadores pueden elegir cuándo y cómo disputar el centro basándose en las respuestas del oponente.",
          de: "Die Fife-Eröffnung ist durch die Entwicklung von Steinen entlang der Flanken vor der Teilnahme an Zentrumskämpfen gekennzeichnet, wodurch flexible Positionen entstehen, in denen Spieler basierend auf Gegnerreaktionen wählen können, wann und wie sie das Zentrum bestreiten.",
          nl: "De Fife opening wordt gekenmerkt door het ontwikkelen van stukken langs de flanken voordat ze deelnemen aan centrale gevechten, waarbij flexibele posities worden gecreëerd waar spelers kunnen kiezen wanneer en hoe ze het centrum betwisten op basis van tegenstander reacties."
        }
      },
      {
        question: {
          en: "What is 'formation play' in advanced checkers strategy?",
          es: "¿Qué es el 'juego de formación' en la estrategia avanzada de damas?",
          de: "Was ist 'Formationsspiel' in der fortgeschrittenen Dame-Strategie?",
          nl: "Wat is 'formatie spel' in geavanceerde dammen strategie?"
        },
        options: [
          {
            en: "Coordinating pieces in specific patterns for strategic control",
            es: "Coordinar piezas en patrones específicos para control estratégico",
            de: "Steine in bestimmten Mustern koordinieren für strategische Kontrolle",
            nl: "Stukken coördineren in specifieke patronen voor strategische controle"
          },
          {
            en: "Following memorized opening sequences",
            es: "Seguir secuencias de apertura memorizadas",
            de: "Auswendig gelernte Eröffnungssequenzen folgen",
            nl: "Uit het hoofd geleerde opening sequenties volgen"
          },
          {
            en: "Playing in a single file",
            es: "Jugar en una sola fila",
            de: "In einer einzigen Reihe spielen",
            nl: "In een enkele rij spelen"
          },
          {
            en: "Creating symmetrical positions",
            es: "Crear posiciones simétricas",
            de: "Symmetrische Positionen schaffen",
            nl: "Symmetrische posities creëren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Formation play involves arranging pieces in coordinated patterns that work together to control key diagonals, restrict opponent mobility, and create tactical opportunities, representing a higher level of strategic understanding beyond individual piece moves.",
          es: "El juego de formación implica organizar piezas en patrones coordinados que trabajan juntos para controlar diagonales clave, restringir la movilidad del oponente y crear oportunidades tácticas, representando un nivel superior de comprensión estratégica más allá de movimientos individuales de piezas.",
          de: "Formationsspiel beinhaltet die Anordnung von Steinen in koordinierten Mustern, die zusammenarbeiten, um Schlüsseldiagonalen zu kontrollieren, die Gegnermobilität einzuschränken und taktische Möglichkeiten zu schaffen, was ein höheres Niveau strategischen Verständnisses über einzelne Steinzüge hinaus darstellt.",
          nl: "Formatie spel houdt in dat stukken worden gerangschikt in gecoördineerde patronen die samenwerken om sleutel diagonalen te controleren, tegenstander mobiliteit te beperken en tactische mogelijkheden te creëren, wat een hoger niveau van strategisch begrip vertegenwoordigt dan individuele stukzetten."
        }
      },
      {
        question: {
          en: "What makes the 'Will-o'-the-Wisp' opening particularly challenging?",
          es: "¿Qué hace que la apertura 'Fuego Fatuo' sea particularmente desafiante?",
          de: "Was macht die 'Irrlicht'-Eröffnung besonders herausfordernd?",
          nl: "Wat maakt de 'Will-o'-the-Wisp' opening bijzonder uitdagend?"
        },
        options: [
          {
            en: "Subtle positional nuances requiring deep calculation",
            es: "Matices posicionales sutiles que requieren cálculo profundo",
            de: "Subtile positionelle Nuancen, die tiefe Berechnung erfordern",
            nl: "Subtiele positionele nuances die diepe berekening vereisen"
          },
          {
            en: "Immediate tactical complications",
            es: "Complicaciones tácticas inmediatas",
            de: "Sofortige taktische Komplikationen",
            nl: "Onmiddellijke tactische complicaties"
          },
          {
            en: "Forced draw variations",
            es: "Variaciones de tablas forzadas",
            de: "Erzwungene Remis-Varianten",
            nl: "Gedwongen remise variaties"
          },
          {
            en: "Rapid piece exchanges",
            es: "Intercambios rápidos de piezas",
            de: "Schnelle Steintausche",
            nl: "Snelle stukruilen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Will-o'-the-Wisp is known for its deceptive simplicity, hiding complex positional subtleties that require extensive calculation and understanding of minute differences in piece placement that can determine the outcome.",
          es: "El Fuego Fatuo es conocido por su simplicidad engañosa, ocultando sutilezas posicionales complejas que requieren cálculo extensivo y comprensión de diferencias minuciosas en la colocación de piezas que pueden determinar el resultado.",
          de: "Das Irrlicht ist bekannt für seine täuschende Einfachheit und verbirgt komplexe positionelle Feinheiten, die umfangreiche Berechnung und Verständnis winziger Unterschiede in der Steinplatzierung erfordern, die das Ergebnis bestimmen können.",
          nl: "De Will-o'-the-Wisp staat bekend om zijn misleidende eenvoud, waarbij complexe positionele subtiliteiten verborgen zijn die uitgebreide berekening en begrip van kleine verschillen in stukplaatsing vereisen die de uitkomst kunnen bepalen."
        }
      },
      {
        question: {
          en: "What is 'reorganization' in checkers middlegame play?",
          es: "¿Qué es la 'reorganización' en el juego de medio de damas?",
          de: "Was ist 'Reorganisation' im Dame-Mittelspiel?",
          nl: "Wat is 'reorganisatie' in dammen middenspel?"
        },
        options: [
          {
            en: "Repositioning pieces to improve coordination after exchanges",
            es: "Reposicionar piezas para mejorar la coordinación después de intercambios",
            de: "Steine neu positionieren, um die Koordination nach Tauschen zu verbessern",
            nl: "Stukken herpositioneren om coördinatie te verbeteren na ruilen"
          },
          {
            en: "Starting the game over with new pieces",
            es: "Comenzar el juego de nuevo con nuevas piezas",
            de: "Das Spiel mit neuen Steinen neu beginnen",
            nl: "Het spel opnieuw beginnen met nieuwe stukken"
          },
          {
            en: "Changing your opening strategy",
            es: "Cambiar tu estrategia de apertura",
            de: "Die Eröffnungsstrategie ändern",
            nl: "Je opening strategie veranderen"
          },
          {
            en: "Defensive regrouping after an attack",
            es: "Reagrupación defensiva después de un ataque",
            de: "Defensive Neugruppierung nach einem Angriff",
            nl: "Defensieve hergroepering na een aanval"
          }
        ],
        correct: 0,
        explanation: {
          en: "Reorganization is the strategic process of redistributing and repositioning pieces after a series of exchanges to optimize their coordination, improve square control, and prepare for the next phase of the game with enhanced piece harmony.",
          es: "La reorganización es el proceso estratégico de redistribuir y reposicionar piezas después de una serie de intercambios para optimizar su coordinación, mejorar el control de casillas y prepararse para la siguiente fase del juego con armonía de piezas mejorada.",
          de: "Reorganisation ist der strategische Prozess der Umverteilung und Neupositionierung von Steinen nach einer Reihe von Tauschen, um ihre Koordination zu optimieren, die Feldkontrolle zu verbessern und sich mit verbesserter Steinharmonie auf die nächste Spielphase vorzubereiten.",
          nl: "Reorganisatie is het strategische proces van herverdelen en herpositioneren van stukken na een reeks ruilen om hun coördinatie te optimaliseren, veldcontrole te verbeteren en voor te bereiden op de volgende fase van het spel met verbeterde stuk harmonie."
        }
      },
      {
        question: {
          en: "What tactical concept underlies the 'Switcher' opening variation?",
          es: "¿Qué concepto táctico subyace en la variación de apertura 'Switcher'?",
          de: "Welches taktische Konzept liegt der 'Switcher'-Eröffnungsvariante zugrunde?",
          nl: "Welk tactisch concept ligt ten grondslag aan de 'Switcher' opening variatie?"
        },
        options: [
          {
            en: "Rapid diagonal switching to create threats on both flanks",
            es: "Cambio diagonal rápido para crear amenazas en ambos flancos",
            de: "Schneller Diagonalwechsel, um Drohungen auf beiden Flügeln zu schaffen",
            nl: "Snelle diagonaal wisseling om dreigingen op beide flanken te creëren"
          },
          {
            en: "Exchanging pieces to simplify",
            es: "Intercambiar piezas para simplificar",
            de: "Steine tauschen zur Vereinfachung",
            nl: "Stukken ruilen om te vereenvoudigen"
          },
          {
            en: "Switching from attack to defense",
            es: "Cambiar de ataque a defensa",
            de: "Von Angriff auf Verteidigung wechseln",
            nl: "Wisselen van aanval naar verdediging"
          },
          {
            en: "Alternating king and pawn moves",
            es: "Alternar movimientos de dama y peón",
            de: "Damen- und Bauernzüge abwechseln",
            nl: "Afwisselende dam en pion zetten"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Switcher opening is characterized by the ability to quickly shift attacking focus between different diagonals and flanks, keeping the opponent off-balance and unable to consolidate defensive resources effectively.",
          es: "La apertura Switcher se caracteriza por la capacidad de cambiar rápidamente el foco de ataque entre diferentes diagonales y flancos, manteniendo al oponente desequilibrado e incapaz de consolidar recursos defensivos efectivamente.",
          de: "Die Switcher-Eröffnung ist durch die Fähigkeit gekennzeichnet, den Angriffsfokus schnell zwischen verschiedenen Diagonalen und Flügeln zu verschieben, wodurch der Gegner aus dem Gleichgewicht gehalten wird und defensive Ressourcen nicht effektiv konsolidieren kann.",
          nl: "De Switcher opening wordt gekenmerkt door het vermogen om snel de aanvalsfocus te verschuiven tussen verschillende diagonalen en flanken, waarbij de tegenstander uit balans wordt gehouden en niet in staat is defensieve middelen effectief te consolideren."
        }
      },
      {
        question: {
          en: "What defines superior 'piece coordination' in expert-level play?",
          es: "¿Qué define una 'coordinación de piezas' superior en el juego de nivel experto?",
          de: "Was definiert überlegene 'Steinkoordination' im Expertenlevel-Spiel?",
          nl: "Wat definieert superieure 'stuk coördinatie' in expert niveau spel?"
        },
        options: [
          {
            en: "Pieces working together to control key squares and support tactics",
            es: "Piezas trabajando juntas para controlar casillas clave y apoyar tácticas",
            de: "Steine arbeiten zusammen, um Schlüsselfelder zu kontrollieren und Taktiken zu unterstützen",
            nl: "Stukken werken samen om sleutelvelden te controleren en tactieken te ondersteunen"
          },
          {
            en: "Having all pieces on the same diagonal",
            es: "Tener todas las piezas en la misma diagonal",
            de: "Alle Steine auf der gleichen Diagonalen haben",
            nl: "Alle stukken op dezelfde diagonaal hebben"
          },
          {
            en: "Moving pieces in sequential order",
            es: "Mover piezas en orden secuencial",
            de: "Steine in sequenzieller Reihenfolge bewegen",
            nl: "Stukken in volgordelijke volgorde verplaatsen"
          },
          {
            en: "Keeping pieces close together",
            es: "Mantener las piezas juntas",
            de: "Steine zusammenhalten",
            nl: "Stukken bij elkaar houden"
          }
        ],
        correct: 0,
        explanation: {
          en: "Superior piece coordination means pieces are positioned to mutually support each other, control critical squares collectively, enable tactical combinations, and create multiple threats simultaneously while maintaining defensive solidity.",
          es: "La coordinación superior de piezas significa que las piezas están posicionadas para apoyarse mutuamente, controlar casillas críticas colectivamente, permitir combinaciones tácticas y crear múltiples amenazas simultáneamente mientras mantienen solidez defensiva.",
          de: "Überlegene Steinkoordination bedeutet, dass Steine so positioniert sind, dass sie sich gegenseitig unterstützen, kritische Felder gemeinsam kontrollieren, taktische Kombinationen ermöglichen und mehrere Drohungen gleichzeitig schaffen, während defensive Solidität erhalten bleibt.",
          nl: "Superieure stuk coördinatie betekent dat stukken zo gepositioneerd zijn dat ze elkaar wederzijds ondersteunen, kritieke velden collectief controleren, tactische combinaties mogelijk maken en meerdere dreigingen tegelijkertijd creëren terwijl defensieve soliditeit behouden blijft."
        }
      },
      {
        question: {
          en: "What is the 'Dyke' formation in checkers defense?",
          es: "¿Qué es la formación 'Dique' en la defensa de damas?",
          de: "Was ist die 'Deich'-Formation in der Dame-Verteidigung?",
          nl: "Wat is de 'Dijk' formatie in dammen verdediging?"
        },
        options: [
          {
            en: "A defensive wall of pieces blocking opponent's advance",
            es: "Un muro defensivo de piezas bloqueando el avance del oponente",
            de: "Eine Verteidigungsmauer aus Steinen, die den Vormarsch des Gegners blockiert",
            nl: "Een verdedigingsmuur van stukken die de opmars van de tegenstander blokkeert"
          },
          {
            en: "Pieces arranged in a line on the edge",
            es: "Piezas dispuestas en línea en el borde",
            de: "Steine in einer Linie am Rand angeordnet",
            nl: "Stukken gerangschikt in een lijn aan de rand"
          },
          {
            en: "A single king defending multiple squares",
            es: "Una sola dama defendiendo múltiples casillas",
            de: "Eine einzelne Dame, die mehrere Felder verteidigt",
            nl: "Een enkele dam die meerdere velden verdedigt"
          },
          {
            en: "Two kings working together",
            es: "Dos damas trabajando juntas",
            de: "Zwei Damen arbeiten zusammen",
            nl: "Twee dammen die samenwerken"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Dyke formation is a defensive structure where pieces are arranged to create a barrier that prevents opponent pieces from advancing, similar to a levee holding back water, often used to consolidate a defensive position.",
          es: "La formación Dique es una estructura defensiva donde las piezas están dispuestas para crear una barrera que evita que las piezas del oponente avancen, similar a un dique conteniendo agua, a menudo usada para consolidar una posición defensiva.",
          de: "Die Deich-Formation ist eine Defensivstruktur, bei der Steine so angeordnet sind, dass sie eine Barriere bilden, die den Vormarsch gegnerischer Steine verhindert, ähnlich einem Deich, der Wasser zurückhält, oft verwendet, um eine Defensivposition zu konsolidieren.",
          nl: "De Dijk formatie is een defensieve structuur waarbij stukken zijn gerangschikt om een barrière te creëren die voorkomt dat stukken van de tegenstander oprukken, vergelijkbaar met een dijk die water tegenhoudt, vaak gebruikt om een defensieve positie te consolideren."
        }
      },
      {
        question: {
          en: "What characterizes 'squeeze play' in advanced tactics?",
          es: "¿Qué caracteriza el 'juego de presión' en tácticas avanzadas?",
          de: "Was charakterisiert 'Druckspiel' in fortgeschrittenen Taktiken?",
          nl: "Wat kenmerkt 'drukspel' in geavanceerde tactieken?"
        },
        options: [
          {
            en: "Gradually restricting opponent's options until forced into losing moves",
            es: "Restringir gradualmente las opciones del oponente hasta forzarlo a movimientos perdedores",
            de: "Die Optionen des Gegners allmählich einschränken, bis er zu verlierenden Zügen gezwungen wird",
            nl: "Geleidelijk de opties van de tegenstander beperken tot gedwongen verliezende zetten"
          },
          {
            en: "Applying time pressure on the clock",
            es: "Aplicar presión de tiempo en el reloj",
            de: "Zeitdruck auf die Uhr ausüben",
            nl: "Tijdsdruk op de klok uitoefenen"
          },
          {
            en: "Compressing pieces into a small area",
            es: "Comprimir piezas en un área pequeña",
            de: "Steine in einen kleinen Bereich komprimieren",
            nl: "Stukken samenpersen in een klein gebied"
          },
          {
            en: "Quick successive captures",
            es: "Capturas sucesivas rápidas",
            de: "Schnelle aufeinanderfolgende Schläge",
            nl: "Snelle opeenvolgende slagen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Squeeze play involves systematically limiting the opponent's mobility and options through superior positioning, eventually forcing them into zugzwang where any move worsens their position, leading to material loss or positional collapse.",
          es: "El juego de presión implica limitar sistemáticamente la movilidad y opciones del oponente mediante posicionamiento superior, eventualmente forzándolo a zugzwang donde cualquier movimiento empeora su posición, llevando a pérdida material o colapso posicional.",
          de: "Druckspiel beinhaltet die systematische Begrenzung der Mobilität und Optionen des Gegners durch überlegene Positionierung, was ihn schließlich in Zugzwang zwingt, wo jeder Zug seine Position verschlechtert und zu Materialverlust oder positionellem Zusammenbruch führt.",
          nl: "Drukspel houdt in dat de mobiliteit en opties van de tegenstander systematisch worden beperkt door superieure positionering, waardoor ze uiteindelijk gedwongen worden in zugzwang waarbij elke zet hun positie verslechtert, leidend tot materiaalverlies of positionele ineenstorting."
        }
      },
      {
        question: {
          en: "What is a 'tempo sacrifice' in checkers?",
          es: "¿Qué es un 'sacrificio de tempo' en damas?",
          de: "Was ist ein 'Tempo-Opfer' beim Dame?",
          nl: "Wat is een 'tempo offer' bij dammen?"
        },
        options: [
          {
            en: "Losing a move to gain positional advantage",
            es: "Perder un movimiento para ganar ventaja posicional",
            de: "Einen Zug verlieren, um Positionsvorteil zu erlangen",
            nl: "Een zet verliezen om positioneel voordeel te verkrijgen"
          },
          {
            en: "Playing quickly without thinking",
            es: "Jugar rápidamente sin pensar",
            de: "Schnell spielen ohne zu denken",
            nl: "Snel spelen zonder te denken"
          },
          {
            en: "Sacrificing material for time on the clock",
            es: "Sacrificar material por tiempo en el reloj",
            de: "Material für Zeit auf der Uhr opfern",
            nl: "Materiaal opofferen voor tijd op de klok"
          },
          {
            en: "Missing a forced capture deliberately",
            es: "Perder una captura forzada deliberadamente",
            de: "Einen erzwungenen Schlag absichtlich verpassen",
            nl: "Een gedwongen slag opzettelijk missen"
          }
        ],
        correct: 0,
        explanation: {
          en: "A tempo sacrifice involves making a move that appears to waste time or initiative but actually achieves superior piece placement or forces the opponent into an unfavorable position, exchanging tempo for positional gain.",
          es: "Un sacrificio de tempo implica hacer un movimiento que parece desperdiciar tiempo o iniciativa pero que en realidad logra una mejor colocación de piezas o fuerza al oponente a una posición desfavorable, intercambiando tempo por ganancia posicional.",
          de: "Ein Tempo-Opfer beinhaltet einen Zug, der Zeit oder Initiative zu verschwenden scheint, aber tatsächlich bessere Steinplatzierung erreicht oder den Gegner in eine ungünstige Position zwingt, wobei Tempo gegen positionellen Gewinn getauscht wird.",
          nl: "Een tempo offer houdt in dat een zet wordt gedaan die tijd of initiatief lijkt te verspillen maar eigenlijk superieure stukplaatsing bereikt of de tegenstander dwingt in een ongunstige positie, waarbij tempo wordt geruild voor positionele winst."
        }
      },
      {
        question: {
          en: "What is the 'bridge' position in endgame theory?",
          es: "¿Qué es la posición de 'puente' en la teoría del final?",
          de: "Was ist die 'Brücken'-Position in der Endspieltheorie?",
          nl: "Wat is de 'brug' positie in eindspeltheorie?"
        },
        options: [
          {
            en: "A configuration where one king can trap an opponent's piece",
            es: "Una configuración donde una dama puede atrapar una pieza del oponente",
            de: "Eine Konfiguration, bei der eine Dame einen gegnerischen Stein einfangen kann",
            nl: "Een configuratie waarbij één dam een stuk van de tegenstander kan vangen"
          },
          {
            en: "Two pieces connecting opposite sides",
            es: "Dos piezas conectando lados opuestos",
            de: "Zwei Steine verbinden gegenüberliegende Seiten",
            nl: "Twee stukken die tegenovergestelde kanten verbinden"
          },
          {
            en: "A crossover point for piece exchanges",
            es: "Un punto de cruce para intercambios de piezas",
            de: "Ein Kreuzungspunkt für Steintausche",
            nl: "Een kruispunt voor stukruilen"
          },
          {
            en: "A formation spanning both flanks",
            es: "Una formación que abarca ambos flancos",
            de: "Eine Formation, die beide Flügel überspannt",
            nl: "Een formatie die beide flanken overspant"
          }
        ],
        correct: 0,
        explanation: {
          en: "The bridge position is a classic endgame configuration where a single king can prevent an opponent's piece from advancing by maintaining control of critical diagonal squares, effectively creating a 'bridge' the opponent cannot cross.",
          es: "La posición de puente es una configuración de final clásica donde una sola dama puede evitar que una pieza del oponente avance manteniendo control de casillas diagonales críticas, efectivamente creando un 'puente' que el oponente no puede cruzar.",
          de: "Die Brücken-Position ist eine klassische Endspielkonfiguration, bei der eine einzelne Dame das Vorrücken eines gegnerischen Steins verhindern kann, indem sie die Kontrolle über kritische Diagonalfelder behält und effektiv eine 'Brücke' schafft, die der Gegner nicht überqueren kann.",
          nl: "De brug positie is een klassieke eindspel configuratie waarbij een enkele dam kan voorkomen dat een stuk van de tegenstander oprukt door controle te behouden over kritieke diagonale velden, effectief een 'brug' creërend die de tegenstander niet kan oversteken."
        }
      },
      {
        question: {
          en: "What is 'diagonal dominance' in expert play?",
          es: "¿Qué es el 'dominio diagonal' en el juego experto?",
          de: "Was ist 'Diagonal-Dominanz' im Expertenspiel?",
          nl: "Wat is 'diagonale dominantie' in expert spel?"
        },
        options: [
          {
            en: "Controlling the long diagonals with superior piece placement",
            es: "Controlar las diagonales largas con colocación superior de piezas",
            de: "Die langen Diagonalen mit überlegener Steinplatzierung kontrollieren",
            nl: "De lange diagonalen controleren met superieure stukplaatsing"
          },
          {
            en: "Having more pieces on dark squares",
            es: "Tener más piezas en casillas oscuras",
            de: "Mehr Steine auf dunklen Feldern haben",
            nl: "Meer stukken op donkere velden hebben"
          },
          {
            en: "Moving only diagonally",
            es: "Moverse solo diagonalmente",
            de: "Sich nur diagonal bewegen",
            nl: "Alleen diagonaal bewegen"
          },
          {
            en: "Pieces arranged in diagonal lines",
            es: "Piezas dispuestas en líneas diagonales",
            de: "Steine in diagonalen Linien angeordnet",
            nl: "Stukken gerangschikt in diagonale lijnen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Diagonal dominance means controlling the critical long diagonals of the board with well-placed pieces, restricting opponent mobility and creating opportunities for breakthrough combinations while maintaining structural integrity.",
          es: "El dominio diagonal significa controlar las diagonales largas críticas del tablero con piezas bien colocadas, restringiendo la movilidad del oponente y creando oportunidades para combinaciones de ruptura mientras se mantiene la integridad estructural.",
          de: "Diagonal-Dominanz bedeutet, die kritischen langen Diagonalen des Bretts mit gut platzierten Steinen zu kontrollieren, die Gegnermobilität einzuschränken und Möglichkeiten für Durchbruchkombinationen zu schaffen, während strukturelle Integrität erhalten bleibt.",
          nl: "Diagonale dominantie betekent het controleren van de kritieke lange diagonalen van het bord met goed geplaatste stukken, het beperken van tegenstander mobiliteit en het creëren van mogelijkheden voor doorbraak combinaties terwijl structurele integriteit behouden blijft."
        }
      },
      {
        question: {
          en: "What is the 'petite combination' in checkers tactics?",
          es: "¿Qué es la 'pequeña combinación' en tácticas de damas?",
          de: "Was ist die 'kleine Kombination' in Dame-Taktiken?",
          nl: "Wat is de 'kleine combinatie' in dammen tactieken?"
        },
        options: [
          {
            en: "A short 2-3 move tactical sequence winning material",
            es: "Una secuencia táctica corta de 2-3 movimientos ganando material",
            de: "Eine kurze 2-3-Zug taktische Sequenz, die Material gewinnt",
            nl: "Een korte 2-3 zetten tactische reeks die materiaal wint"
          },
          {
            en: "A combination using only regular pieces",
            es: "Una combinación usando solo piezas regulares",
            de: "Eine Kombination nur mit normalen Steinen",
            nl: "Een combinatie met alleen gewone stukken"
          },
          {
            en: "A beginner-level tactic",
            es: "Una táctica de nivel principiante",
            de: "Eine Taktik für Anfänger",
            nl: "Een beginnerstactiek"
          },
          {
            en: "Capturing a single piece",
            es: "Capturar una sola pieza",
            de: "Einen einzelnen Stein schlagen",
            nl: "Een enkel stuk slaan"
          }
        ],
        correct: 0,
        explanation: {
          en: "A petite combination is a concise tactical sequence typically lasting 2-3 moves that achieves a concrete advantage such as winning material or gaining positional superiority, requiring less calculation than deeper combinations but precise execution.",
          es: "Una pequeña combinación es una secuencia táctica concisa que típicamente dura 2-3 movimientos que logra una ventaja concreta como ganar material o obtener superioridad posicional, requiriendo menos cálculo que combinaciones más profundas pero ejecución precisa.",
          de: "Eine kleine Kombination ist eine prägnante taktische Sequenz, die typischerweise 2-3 Züge dauert und einen konkreten Vorteil wie Materialgewinn oder positionelle Überlegenheit erreicht, weniger Berechnung als tiefere Kombinationen erfordert, aber präzise Ausführung.",
          nl: "Een kleine combinatie is een beknopte tactische reeks die typisch 2-3 zetten duurt en een concreet voordeel bereikt zoals materiaalwinst of positionele superioriteit, waarbij minder berekening nodig is dan diepere combinaties maar precieze uitvoering."
        }
      },
      {
        question: {
          en: "What is 'wing compression' in positional strategy?",
          es: "¿Qué es la 'compresión de ala' en estrategia posicional?",
          de: "Was ist 'Flügelkompression' in positioneller Strategie?",
          nl: "Wat is 'vleugel compressie' in positionele strategie?"
        },
        options: [
          {
            en: "Forcing opponent's pieces into cramped positions on one flank",
            es: "Forzar las piezas del oponente a posiciones apretadas en un flanco",
            de: "Gegnerische Steine in enge Positionen auf einem Flügel zwingen",
            nl: "Stukken van de tegenstander dwingen in krappe posities aan één flank"
          },
          {
            en: "Removing pieces from the wings",
            es: "Quitar piezas de las alas",
            de: "Steine von den Flügeln entfernen",
            nl: "Stukken van de vleugels verwijderen"
          },
          {
            en: "Consolidating all pieces on one side",
            es: "Consolidar todas las piezas en un lado",
            de: "Alle Steine auf einer Seite konsolidieren",
            nl: "Alle stukken aan één kant consolideren"
          },
          {
            en: "Expanding on both flanks simultaneously",
            es: "Expandir en ambos flancos simultáneamente",
            de: "Gleichzeitig auf beiden Flügeln expandieren",
            nl: "Gelijktijdig uitbreiden op beide flanken"
          }
        ],
        correct: 0,
        explanation: {
          en: "Wing compression is a strategic technique where you systematically restrict opponent pieces on one flank, limiting their mobility and creating vulnerabilities that can be exploited tactically while maintaining control of the center.",
          es: "La compresión de ala es una técnica estratégica donde restringes sistemáticamente las piezas del oponente en un flanco, limitando su movilidad y creando vulnerabilidades que pueden ser explotadas tácticamente mientras mantienes control del centro.",
          de: "Flügelkompression ist eine strategische Technik, bei der Sie gegnerische Steine auf einem Flügel systematisch einschränken, ihre Mobilität begrenzen und Schwächen schaffen, die taktisch ausgenutzt werden können, während die Kontrolle über das Zentrum erhalten bleibt.",
          nl: "Vleugel compressie is een strategische techniek waarbij je systematisch stukken van de tegenstander aan één flank beperkt, hun mobiliteit limiteert en kwetsbaarheden creëert die tactisch kunnen worden uitgebuit terwijl controle over het centrum behouden blijft."
        }
      },
      {
        question: {
          en: "What is the 'Tinsley Position' named after?",
          es: "¿En honor a quién se nombra la 'Posición Tinsley'?",
          de: "Nach wem ist die 'Tinsley-Position' benannt?",
          nl: "Naar wie is de 'Tinsley Positie' genoemd?"
        },
        options: [
          {
            en: "Champion Marion Tinsley who analyzed it deeply",
            es: "El campeón Marion Tinsley quien la analizó profundamente",
            de: "Champion Marion Tinsley, der sie tiefgehend analysierte",
            nl: "Kampioen Marion Tinsley die het diepgaand analyseerde"
          },
          {
            en: "A town where it was first played",
            es: "Un pueblo donde se jugó por primera vez",
            de: "Eine Stadt, wo es zuerst gespielt wurde",
            nl: "Een stad waar het voor het eerst werd gespeeld"
          },
          {
            en: "The inventor of the position",
            es: "El inventor de la posición",
            de: "Der Erfinder der Position",
            nl: "De uitvinder van de positie"
          },
          {
            en: "A specific tournament",
            es: "Un torneo específico",
            de: "Ein bestimmtes Turnier",
            nl: "Een specifiek toernooi"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Tinsley Position is named after Marion Tinsley, considered the greatest checkers player of all time, who deeply analyzed this complex endgame configuration and demonstrated winning techniques that revolutionized endgame theory.",
          es: "La Posición Tinsley lleva el nombre de Marion Tinsley, considerado el mejor jugador de damas de todos los tiempos, quien analizó profundamente esta compleja configuración de final y demostró técnicas ganadoras que revolucionaron la teoría del final.",
          de: "Die Tinsley-Position ist nach Marion Tinsley benannt, der als größter Dame-Spieler aller Zeiten gilt, der diese komplexe Endspielkonfiguration tiefgehend analysierte und Gewinnstechniken demonstrierte, die die Endspieltheorie revolutionierten.",
          nl: "De Tinsley Positie is genoemd naar Marion Tinsley, beschouwd als de grootste damspeler aller tijden, die deze complexe eindspel configuratie diepgaand analyseerde en winnende technieken demonstreerde die de eindspeltheorie revolutioneerden."
        }
      },
      {
        question: {
          en: "What is 'structural weakness' in checkers?",
          es: "¿Qué es una 'debilidad estructural' en damas?",
          de: "Was ist eine 'strukturelle Schwäche' beim Dame?",
          nl: "Wat is een 'structurele zwakte' bij dammen?"
        },
        options: [
          {
            en: "Long-term positional flaws that can be exploited",
            es: "Defectos posicionales a largo plazo que pueden ser explotados",
            de: "Langfristige positionelle Mängel, die ausgenutzt werden können",
            nl: "Langetermijn positionele gebreken die kunnen worden uitgebuit"
          },
          {
            en: "A physically damaged board",
            es: "Un tablero físicamente dañado",
            de: "Ein physisch beschädigtes Brett",
            nl: "Een fysiek beschadigd bord"
          },
          {
            en: "Pieces that are easily captured",
            es: "Piezas que son fácilmente capturadas",
            de: "Steine, die leicht geschlagen werden",
            nl: "Stukken die gemakkelijk worden geslagen"
          },
          {
            en: "Missing pieces from the set",
            es: "Piezas faltantes del juego",
            de: "Fehlende Steine vom Set",
            nl: "Ontbrekende stukken uit de set"
          }
        ],
        correct: 0,
        explanation: {
          en: "Structural weakness refers to inherent positional flaws in piece arrangement, such as isolated pieces, weak squares, or poor piece coordination, that persist over multiple moves and can be systematically exploited for long-term advantage.",
          es: "La debilidad estructural se refiere a defectos posicionales inherentes en la disposición de piezas, como piezas aisladas, casillas débiles o mala coordinación de piezas, que persisten durante múltiples movimientos y pueden ser sistemáticamente explotados para ventaja a largo plazo.",
          de: "Strukturelle Schwäche bezieht sich auf inhärente positionelle Mängel in der Steinanordnung, wie isolierte Steine, schwache Felder oder schlechte Steinkoordination, die über mehrere Züge bestehen bleiben und systematisch für langfristigen Vorteil ausgenutzt werden können.",
          nl: "Structurele zwakte verwijst naar inherente positionele gebreken in stukrangschikking, zoals geïsoleerde stukken, zwakke velden of slechte stukcoördinatie, die over meerdere zetten blijven bestaan en systematisch kunnen worden uitgebuit voor langetermijnvoordeel."
        }
      },
      {
        question: {
          en: "What is a 'clearance sacrifice' in checkers?",
          es: "¿Qué es un 'sacrificio de despeje' en damas?",
          de: "Was ist ein 'Räumungsopfer' beim Dame?",
          nl: "Wat is een 'ontruimingsoffer' bij dammen?"
        },
        options: [
          {
            en: "Sacrificing a piece to open lines for tactical strikes",
            es: "Sacrificar una pieza para abrir líneas para golpes tácticos",
            de: "Einen Stein opfern, um Linien für taktische Schläge zu öffnen",
            nl: "Een stuk opofferen om lijnen te openen voor tactische slagen"
          },
          {
            en: "Clearing the board of all pieces",
            es: "Limpiar el tablero de todas las piezas",
            de: "Das Brett von allen Steinen räumen",
            nl: "Het bord van alle stukken ontruimen"
          },
          {
            en: "Removing captured pieces from the board",
            es: "Quitar piezas capturadas del tablero",
            de: "Geschlagene Steine vom Brett entfernen",
            nl: "Geslagen stukken van het bord verwijderen"
          },
          {
            en: "Simplifying to an endgame",
            es: "Simplificar a un final",
            de: "Zu einem Endspiel vereinfachen",
            nl: "Vereenvoudigen naar een eindspel"
          }
        },
        correct: 0,
        explanation: {
          en: "A clearance sacrifice involves deliberately giving up material to remove blocking pieces and open critical diagonals or squares, enabling a subsequent tactical blow that more than compensates for the sacrificed material.",
          es: "Un sacrificio de despeje implica deliberadamente dar material para remover piezas bloqueadoras y abrir diagonales o casillas críticas, permitiendo un golpe táctico subsiguiente que más que compensa por el material sacrificado.",
          de: "Ein Räumungsopfer beinhaltet das absichtliche Aufgeben von Material, um blockierende Steine zu entfernen und kritische Diagonalen oder Felder zu öffnen, was einen nachfolgenden taktischen Schlag ermöglicht, der das geopferte Material mehr als kompensiert.",
          nl: "Een ontruimingsoffer houdt in dat opzettelijk materiaal wordt opgegeven om blokkerende stukken te verwijderen en kritieke diagonalen of velden te openen, waardoor een daaropvolgende tactische slag mogelijk wordt die het geofferde materiaal meer dan compenseert."
        }
      },
      {
        question: {
          en: "What is the 'Wyllie' opening variation known for?",
          es: "¿Por qué es conocida la variación de apertura 'Wyllie'?",
          de: "Wofür ist die 'Wyllie'-Eröffnungsvariante bekannt?",
          nl: "Waar staat de 'Wyllie' opening variatie om bekend?"
        },
        options: [
          {
            en: "Complex middlegame plans with delayed tactics",
            es: "Planes complejos de medio juego con tácticas retrasadas",
            de: "Komplexe Mittelspiel-Pläne mit verzögerten Taktiken",
            nl: "Complexe middenspel plannen met vertraagde tactieken"
          },
          {
            en: "Quick piece exchanges",
            es: "Intercambios rápidos de piezas",
            de: "Schnelle Steintausche",
            nl: "Snelle stukruilen"
          },
          {
            en: "Defensive solidity only",
            es: "Solo solidez defensiva",
            de: "Nur defensive Solidität",
            nl: "Alleen defensieve soliditeit"
          },
          {
            en: "Immediate king promotion",
            es: "Promoción inmediata de damas",
            de: "Sofortige Damenbeförderung",
            nl: "Onmiddellijke dam promotie"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Wyllie variation is characterized by building a solid position with latent tactical possibilities that emerge in the middlegame, requiring deep strategic understanding and patience to navigate the complex plans properly.",
          es: "La variación Wyllie se caracteriza por construir una posición sólida con posibilidades tácticas latentes que emergen en el medio juego, requiriendo comprensión estratégica profunda y paciencia para navegar los planes complejos apropiadamente.",
          de: "Die Wyllie-Variante ist durch den Aufbau einer soliden Position mit latenten taktischen Möglichkeiten gekennzeichnet, die im Mittelspiel entstehen und tiefes strategisches Verständnis und Geduld erfordern, um die komplexen Pläne richtig zu navigieren.",
          nl: "De Wyllie variatie wordt gekenmerkt door het bouwen van een solide positie met latente tactische mogelijkheden die in het middenspel naar voren komen, wat diep strategisch begrip en geduld vereist om de complexe plannen goed te navigeren."
        }
      },
      {
        question: {
          en: "What is 'opposition loss' in king endgames?",
          es: "¿Qué es la 'pérdida de oposición' en finales de damas?",
          de: "Was ist 'Oppositionsverlust' in Damen-Endspielen?",
          nl: "Wat is 'oppositie verlies' in dam eindspelen?"
        },
        options: [
          {
            en: "Being forced to move when you'd prefer opponent moves first",
            es: "Verse forzado a mover cuando preferirías que el oponente mueva primero",
            de: "Gezwungen sein zu ziehen, wenn man lieber hätte, dass der Gegner zuerst zieht",
            nl: "Gedwongen zijn te zetten wanneer je liever hebt dat tegenstander eerst zet"
          },
          {
            en: "Losing the right to castle",
            es: "Perder el derecho a enrocar",
            de: "Das Recht zu rochieren verlieren",
            nl: "Het recht om te rokeren verliezen"
          },
          {
            en: "Having fewer kings than opponent",
            es: "Tener menos damas que el oponente",
            de: "Weniger Damen als der Gegner haben",
            nl: "Minder dammen hebben dan tegenstander"
          },
          {
            en: "Being on the defensive",
            es: "Estar a la defensiva",
            de: "In der Defensive sein",
            nl: "In de verdediging zijn"
          }
        ],
        correct: 0,
        explanation: {
          en: "Opposition loss occurs in king endgames when you're forced to move in a position where moving first puts you at a disadvantage, often resulting in the opponent gaining control of key squares or achieving a winning tempo advantage.",
          es: "La pérdida de oposición ocurre en finales de damas cuando te ves forzado a mover en una posición donde mover primero te pone en desventaja, a menudo resultando en que el oponente gana control de casillas clave o logra una ventaja de tempo ganadora.",
          de: "Oppositionsverlust tritt in Damen-Endspielen auf, wenn man gezwungen ist, in einer Position zu ziehen, in der das Ziehen als Erster einen Nachteil bringt, was oft dazu führt, dass der Gegner die Kontrolle über Schlüsselfelder gewinnt oder einen gewinnenden Tempo-Vorteil erreicht.",
          nl: "Oppositie verlies treedt op in dam eindspelen wanneer je gedwongen bent te zetten in een positie waar eerst zetten je in het nadeel brengt, vaak resulterend in de tegenstander die controle krijgt over sleutelvelden of een winnend tempo voordeel bereikt."
        }
      },
      {
        question: {
          en: "What is the 'Fourth Position' in endgame theory?",
          es: "¿Qué es la 'Cuarta Posición' en la teoría del final?",
          de: "Was ist die 'Vierte Position' in der Endspieltheorie?",
          nl: "Wat is de 'Vierde Positie' in eindspeltheorie?"
        },
        options: [
          {
            en: "A complex king versus men position with drawing techniques",
            es: "Una posición compleja de dama contra piezas con técnicas de tablas",
            de: "Eine komplexe Dame-gegen-Steine-Position mit Remistechniken",
            nl: "Een complexe dam tegen stukken positie met remise technieken"
          },
          {
            en: "Having four pieces remaining",
            es: "Tener cuatro piezas restantes",
            de: "Vier verbleibende Steine haben",
            nl: "Vier resterende stukken hebben"
          },
          {
            en: "Controlling four key squares",
            es: "Controlar cuatro casillas clave",
            de: "Vier Schlüsselfelder kontrollieren",
            nl: "Vier sleutelvelden controleren"
          },
          {
            en: "The fourth most common endgame",
            es: "El cuarto final más común",
            de: "Das vierthäufigste Endspiel",
            nl: "Het vierde meest voorkomende eindspel"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Fourth Position is a theoretical endgame where one king faces multiple men, and despite material disadvantage, the defending side can achieve a draw through precise defensive technique and understanding of critical defensive squares.",
          es: "La Cuarta Posición es un final teórico donde una dama enfrenta múltiples piezas, y a pesar de la desventaja material, el bando defensor puede lograr tablas mediante técnica defensiva precisa y comprensión de casillas defensivas críticas.",
          de: "Die Vierte Position ist ein theoretisches Endspiel, bei dem eine Dame mehreren Steinen gegenübersteht und trotz materiellen Nachteils die verteidigende Seite durch präzise Verteidigungstechnik und Verständnis kritischer Verteidigungsfelder ein Remis erzielen kann.",
          nl: "De Vierde Positie is een theoretisch eindspel waarbij één dam meerdere stukken tegenover zich heeft, en ondanks materieel nadeel kan de verdedigende kant remise bereiken door precieze verdedigingstechniek en begrip van kritieke defensieve velden."
        }
      },
      {
        question: {
          en: "What is 'piece strangulation' in expert tactics?",
          es: "¿Qué es la 'estrangulación de piezas' en tácticas expertas?",
          de: "Was ist 'Stein-Erstickung' in Experten-Taktiken?",
          nl: "Wat is 'stuk verstikking' in expert tactieken?"
        },
        options: [
          {
            en: "Systematically cutting off piece mobility until helpless",
            es: "Cortar sistemáticamente la movilidad de piezas hasta dejarlas indefensas",
            de: "Systematisches Abschneiden der Steinmobilität bis zur Hilflosigkeit",
            nl: "Systematisch stuk mobiliteit afsnijden tot hulpeloos"
          },
          {
            en: "Capturing all opponent pieces",
            es: "Capturar todas las piezas del oponente",
            de: "Alle gegnerischen Steine schlagen",
            nl: "Alle stukken van tegenstander slaan"
          },
          {
            en: "Blocking pieces with your own",
            es: "Bloquear piezas con las tuyas",
            de: "Steine mit eigenen blockieren",
            nl: "Stukken blokkeren met je eigen"
          },
          {
            en: "Preventing any piece movement",
            es: "Prevenir cualquier movimiento de pieza",
            de: "Jede Steinbewegung verhindern",
            nl: "Elke stukbeweging voorkomen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Piece strangulation is a sophisticated tactical technique where you systematically restrict opponent pieces' mobility through superior positioning, gradually eliminating their options until they become essentially useless and vulnerable to capture or zugzwang.",
          es: "La estrangulación de piezas es una técnica táctica sofisticada donde restringes sistemáticamente la movilidad de las piezas del oponente mediante posicionamiento superior, gradualmente eliminando sus opciones hasta que se vuelven esencialmente inútiles y vulnerables a captura o zugzwang.",
          de: "Stein-Erstickung ist eine ausgefeilte taktische Technik, bei der man die Mobilität gegnerischer Steine durch überlegene Positionierung systematisch einschränkt und ihre Optionen allmählich eliminiert, bis sie im Wesentlichen nutzlos und anfällig für Schläge oder Zugzwang werden.",
          nl: "Stuk verstikking is een geavanceerde tactische techniek waarbij je systematisch de mobiliteit van stukken van de tegenstander beperkt door superieure positionering, geleidelijk hun opties eliminerend tot ze in wezen nutteloos en kwetsbaar worden voor slaan of zugzwang."
        }
      },
      {
        question: {
          en: "What is the 'Nailer' position in checkers problems?",
          es: "¿Qué es la posición 'Clavador' en problemas de damas?",
          de: "Was ist die 'Nagler'-Position in Dame-Problemen?",
          nl: "Wat is de 'Spijker' positie in dam problemen?"
        },
        options: [
          {
            en: "A tactical motif where a piece pins opponent's options",
            es: "Un motivo táctico donde una pieza clava las opciones del oponente",
            de: "Ein taktisches Motiv, bei dem ein Stein die Optionen des Gegners fesselt",
            nl: "Een tactisch motief waarbij een stuk de opties van de tegenstander vastpint"
          },
          {
            en: "A piece stuck in the corner",
            es: "Una pieza atascada en la esquina",
            de: "Ein Stein, der in der Ecke feststeckt",
            nl: "Een stuk vastgezet in de hoek"
          },
          {
            en: "Hammering pieces repeatedly",
            es: "Golpear piezas repetidamente",
            de: "Steine wiederholt hämmern",
            nl: "Stukken herhaaldelijk hameren"
          },
          {
            en: "A forced capture sequence",
            es: "Una secuencia de captura forzada",
            de: "Eine erzwungene Schlagsequenz",
            nl: "Een gedwongen slagreeks"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Nailer is a tactical pattern where a piece is positioned so that it severely restricts or 'nails down' the opponent's piece mobility, often forcing them into positions where they become vulnerable to combinations or material loss.",
          es: "El Clavador es un patrón táctico donde una pieza está posicionada de modo que restringe severamente o 'clava' la movilidad de las piezas del oponente, a menudo forzándolas a posiciones donde se vuelven vulnerables a combinaciones o pérdida material.",
          de: "Der Nagler ist ein taktisches Muster, bei dem ein Stein so positioniert ist, dass er die Mobilität gegnerischer Steine stark einschränkt oder 'festnagelt', was sie oft in Positionen zwingt, wo sie anfällig für Kombinationen oder Materialverlust werden.",
          nl: "De Spijker is een tactisch patroon waarbij een stuk zo gepositioneerd is dat het de mobiliteit van de stukken van de tegenstander ernstig beperkt of 'vastspijkert', vaak hen dwingend in posities waar ze kwetsbaar worden voor combinaties of materiaalverlies."
        }
      },
      {
        question: {
          en: "What characterizes 'long-range planning' in expert checkers?",
          es: "¿Qué caracteriza la 'planificación a largo plazo' en damas expertas?",
          de: "Was charakterisiert 'Langfristplanung' im Experten-Dame?",
          nl: "Wat kenmerkt 'lange termijn planning' in expert dammen?"
        },
        options: [
          {
            en: "Formulating strategies spanning multiple phases of the game",
            es: "Formular estrategias que abarcan múltiples fases del juego",
            de: "Strategien formulieren, die mehrere Spielphasen umfassen",
            nl: "Strategieën formuleren die meerdere spelfasen omvatten"
          },
          {
            en: "Planning many moves ahead",
            es: "Planificar muchos movimientos por adelantado",
            de: "Viele Züge im Voraus planen",
            nl: "Veel zetten vooruit plannen"
          },
          {
            en: "Thinking about future tournaments",
            es: "Pensar en futuros torneos",
            de: "An zukünftige Turniere denken",
            nl: "Denken aan toekomstige toernooien"
          },
          {
            en: "Memorizing opening sequences",
            es: "Memorizar secuencias de apertura",
            de: "Eröffnungssequenzen auswendig lernen",
            nl: "Opening sequenties memoriseren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Long-range planning involves developing strategic concepts that guide play through opening, middlegame, and endgame transitions, considering how current moves affect future possibilities and preparing for multiple contingencies rather than just calculating immediate tactics.",
          es: "La planificación a largo plazo implica desarrollar conceptos estratégicos que guían el juego a través de transiciones de apertura, medio juego y final, considerando cómo los movimientos actuales afectan las posibilidades futuras y preparándose para múltiples contingencias en lugar de solo calcular tácticas inmediatas.",
          de: "Langfristplanung beinhaltet die Entwicklung strategischer Konzepte, die das Spiel durch Eröffnungs-, Mittelspiel- und Endspielübergänge leiten, wobei berücksichtigt wird, wie aktuelle Züge zukünftige Möglichkeiten beeinflussen und sich auf mehrere Eventualitäten vorbereitet wird, anstatt nur unmittelbare Taktiken zu berechnen.",
          nl: "Lange termijn planning houdt in dat strategische concepten worden ontwikkeld die het spel leiden door opening, middenspel en eindspel transities, overwegend hoe huidige zetten toekomstige mogelijkheden beïnvloeden en voorbereidend op meerdere eventualiteiten in plaats van alleen onmiddellijke tactieken te berekenen."
        }
      },
      {
        question: {
          en: "What is the 'crossboard strike' in tactical play?",
          es: "¿Qué es el 'golpe transversal' en el juego táctico?",
          de: "Was ist der 'Brett-übergreifende Schlag' im taktischen Spiel?",
          nl: "Wat is de 'kruisbord slag' in tactisch spel?"
        },
        options: [
          {
            en: "A diagonal attack spanning the entire board width",
            es: "Un ataque diagonal que abarca todo el ancho del tablero",
            de: "Ein diagonaler Angriff, der die gesamte Brettbreite umfasst",
            nl: "Een diagonale aanval die de hele bordbreedte beslaat"
          },
          {
            en: "Moving pieces horizontally",
            es: "Mover piezas horizontalmente",
            de: "Steine horizontal bewegen",
            nl: "Stukken horizontaal verplaatsen"
          },
          {
            en: "Attacking from opposite corners",
            es: "Atacar desde esquinas opuestas",
            de: "Von gegenüberliegenden Ecken angreifen",
            nl: "Aanvallen vanuit tegenovergestelde hoeken"
          },
          {
            en: "Multiple simultaneous captures",
            es: "Múltiples capturas simultáneas",
            de: "Mehrere gleichzeitige Schläge",
            nl: "Meerdere gelijktijdige slagen"
          }
        ],
        correct: 0,
        explanation: {
          en: "A crossboard strike utilizes the long diagonal spanning the board's width to launch a penetrating attack, often involving sacrifices or piece maneuvers that exploit the diagonal's full range to create unstoppable threats.",
          es: "Un golpe transversal utiliza la diagonal larga que abarca el ancho del tablero para lanzar un ataque penetrante, a menudo involucrando sacrificios o maniobras de piezas que explotan el rango completo de la diagonal para crear amenazas imparables.",
          de: "Ein Brett-übergreifender Schlag nutzt die lange Diagonale, die die Brettbreite umfasst, um einen durchdringenden Angriff zu starten, oft mit Opfern oder Steinmanövern, die die volle Reichweite der Diagonale ausnutzen, um unaufhaltsame Drohungen zu schaffen.",
          nl: "Een kruisbord slag gebruikt de lange diagonaal die de bordbreedte beslaat om een doordringende aanval te lanceren, vaak met offers of stuk manoeuvres die het volledige bereik van de diagonaal benutten om onstuitbare dreigingen te creëren."
        }
      },
      {
        question: {
          en: "What is the 'Dyson Draw' in checkers endgames?",
          es: "¿Qué son las 'Tablas de Dyson' en finales de damas?",
          de: "Was ist das 'Dyson-Remis' in Dame-Endspielen?",
          nl: "Wat is de 'Dyson Remise' in dam eindspelen?"
        },
        options: [
          {
            en: "A specific defensive technique achieving draws in losing positions",
            es: "Una técnica defensiva específica logrando tablas en posiciones perdedoras",
            de: "Eine spezifische Verteidigungstechnik, die in verlierenden Positionen Remis erreicht",
            nl: "Een specifieke verdedigingstechniek die remise bereikt in verliezende posities"
          },
          {
            en: "Drawing the game on paper",
            es: "Dibujar el juego en papel",
            de: "Das Spiel auf Papier zeichnen",
            nl: "Het spel op papier tekenen"
          },
          {
            en: "A lottery for starting positions",
            es: "Una lotería para posiciones iniciales",
            de: "Eine Lotterie für Startpositionen",
            nl: "Een loterij voor startposities"
          },
          {
            en: "Offering a draw to opponent",
            es: "Ofrecer tablas al oponente",
            de: "Dem Gegner ein Remis anbieten",
            nl: "Een remise aanbieden aan tegenstander"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Dyson Draw refers to defensive methods discovered by analyst Dyson that allow the inferior side to achieve draws in theoretically losing endgame positions through precise defensive play and exploitation of opponent errors.",
          es: "Las Tablas de Dyson se refieren a métodos defensivos descubiertos por el analista Dyson que permiten al bando inferior lograr tablas en posiciones de final teóricamente perdedoras mediante juego defensivo preciso y explotación de errores del oponente.",
          de: "Das Dyson-Remis bezieht sich auf Verteidigungsmethoden, die vom Analytiker Dyson entdeckt wurden und es der unterlegenen Seite ermöglichen, in theoretisch verlierenden Endspiel-Positionen durch präzises Verteidigungsspiel und Ausnutzung von Gegnerfehlern Remis zu erreichen.",
          nl: "De Dyson Remise verwijst naar verdedigingsmethoden ontdekt door analist Dyson die de inferieure kant toestaan remise te bereiken in theoretisch verliezende eindspel posities door nauwkeurig verdedigend spel en exploitatie van tegenstander fouten."
        }
      },
      {
        question: {
          en: "What is 'zugzwang exploitation' in advanced play?",
          es: "¿Qué es la 'explotación de zugzwang' en el juego avanzado?",
          de: "Was ist 'Zugzwang-Ausnutzung' im fortgeschrittenen Spiel?",
          nl: "Wat is 'zugzwang exploitatie' in gevorderd spel?"
        },
        options: [
          {
            en: "Maneuvering to force opponent into positions where any move loses",
            es: "Maniobrar para forzar al oponente a posiciones donde cualquier movimiento pierde",
            de: "Manövrieren, um den Gegner in Positionen zu zwingen, wo jeder Zug verliert",
            nl: "Manoeuvreren om tegenstander te dwingen in posities waar elke zet verliest"
          },
          {
            en: "Using zugzwang as an opening strategy",
            es: "Usar zugzwang como estrategia de apertura",
            de: "Zugzwang als Eröffnungsstrategie verwenden",
            nl: "Zugzwang gebruiken als openingsstrategie"
          },
          {
            en: "Avoiding all zugzwang positions",
            es: "Evitar todas las posiciones de zugzwang",
            de: "Alle Zugzwang-Positionen vermeiden",
            nl: "Alle zugzwang posities vermijden"
          },
          {
            en: "Creating mutual zugzwang",
            es: "Crear zugzwang mutuo",
            de: "Gegenseitigen Zugzwang schaffen",
            nl: "Wederzijdse zugzwang creëren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Zugzwang exploitation is the art of systematically maneuvering pieces to create positions where the opponent must move but any legal move worsens their position, effectively using the compulsion to move as a tactical weapon.",
          es: "La explotación de zugzwang es el arte de maniobrar sistemáticamente piezas para crear posiciones donde el oponente debe mover pero cualquier movimiento legal empeora su posición, efectivamente usando la compulsión a mover como un arma táctica.",
          de: "Zugzwang-Ausnutzung ist die Kunst, Steine systematisch zu manövrieren, um Positionen zu schaffen, in denen der Gegner ziehen muss, aber jeder legale Zug seine Position verschlechtert, wobei der Zwang zu ziehen effektiv als taktische Waffe eingesetzt wird.",
          nl: "Zugzwang exploitatie is de kunst van systematisch stukken manoeuvreren om posities te creëren waar de tegenstander moet zetten maar elke legale zet hun positie verslechtert, effectief de dwang om te zetten gebruikend als tactisch wapen."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level4;
  } else if (typeof window !== 'undefined') {
    window.level4 = level4;
  }
})();
