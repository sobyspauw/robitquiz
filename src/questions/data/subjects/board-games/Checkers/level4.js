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
