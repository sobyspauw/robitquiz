// Quiz Template - Level 7: Board Games - Checkers
(function() {
  const level7 = {
    name: {
      en: "Checkers/Draughts - Legend",
      es: "Damas - Leyenda",
      de: "Dame - Legende",
      nl: "Dammen - Legende"
    },
    questions: [
      {
        question: {
          en: "What is a 'three-move restriction' opening in competitive checkers?",
          es: "¿Qué es una apertura de 'restricción de tres movimientos' en damas competitivas?",
          de: "Was ist eine 'Drei-Züge-Beschränkungs'-Eröffnung im Wettkampf-Dame?",
          nl: "Wat is een 'drie-zetten beperking' opening in competitief dammen?"
        },
        options: [
          {
            en: "A game format where first three moves are predetermined",
            es: "Un formato de juego donde los primeros tres movimientos están predeterminados",
            de: "Ein Spielformat, bei dem die ersten drei Züge vorbestimmt sind",
            nl: "Een spelformaat waarbij de eerste drie zetten vooraf bepaald zijn"
          },
          {
            en: "Limiting each player to three moves total",
            es: "Limitar cada jugador a tres movimientos totales",
            de: "Jeden Spieler auf insgesamt drei Züge begrenzen",
            nl: "Elke speler beperken tot drie zetten totaal"
          },
          {
            en: "Only three opening variations allowed",
            es: "Solo tres variaciones de apertura permitidas",
            de: "Nur drei Eröffnungsvarianten erlaubt",
            nl: "Slechts drie opening variaties toegestaan"
          },
          {
            en: "A time control of three minutes",
            es: "Un control de tiempo de tres minutos",
            de: "Eine Zeitkontrolle von drei Minuten",
            nl: "Een tijdcontrole van drie minuten"
          }
        ],
        correct: 0,
        explanation: {
          en: "The three-move restriction (also called '3-move ballot') is a tournament format where the first three moves (two for one player, one for the other) are randomly selected from approved opening sequences. This ensures variety and prevents excessive draw rates from over-analyzed positions, while still allowing skilled play to determine outcomes.",
          es: "La restricción de tres movimientos (también llamada 'ballot de 3 movimientos') es un formato de torneo donde los primeros tres movimientos (dos para un jugador, uno para el otro) se seleccionan aleatoriamente de secuencias de apertura aprobadas. Esto asegura variedad y previene tasas de tablas excesivas de posiciones sobre-analizadas, permitiendo que el juego habilidoso determine los resultados.",
          de: "Die Drei-Züge-Beschränkung (auch '3-Züge-Ballot' genannt) ist ein Turnierformat, bei dem die ersten drei Züge (zwei für einen Spieler, einer für den anderen) zufällig aus genehmigten Eröffnungssequenzen ausgewählt werden. Dies gewährleistet Vielfalt und verhindert übermäßige Remisraten durch überanalysierte Positionen, während geschicktes Spiel die Ergebnisse bestimmen kann.",
          nl: "De drie-zetten beperking (ook wel '3-zetten ballot' genoemd) is een toernooi formaat waarbij de eerste drie zetten (twee voor één speler, één voor de ander) willekeurig worden gekozen uit goedgekeurde opening sequenties. Dit zorgt voor variëteit en voorkomt buitensporige remise percentages van overgeanalyseerde posities, terwijl bekwaam spel nog steeds de uitkomsten bepaalt."
        }
      },
      {
        question: {
          en: "In master-level play, what is the typical depth of calculation required for complex tactical sequences?",
          es: "En juego de nivel maestro, ¿cuál es la profundidad típica de cálculo requerida para secuencias tácticas complejas?",
          de: "Was ist beim Meisterschaftsspiel die typische Berechnungstiefe für komplexe taktische Sequenzen?",
          nl: "Wat is in meester-niveau spel de typische diepte van berekening vereist voor complexe tactische sequenties?"
        },
        options: [
          {
            en: "5-8 moves ahead",
            es: "5-8 movimientos adelante",
            de: "5-8 Züge voraus",
            nl: "5-8 zetten vooruit"
          },
          {
            en: "10-12 moves ahead",
            es: "10-12 movimientos adelante",
            de: "10-12 Züge voraus",
            nl: "10-12 zetten vooruit"
          },
          {
            en: "15-20 moves ahead or more",
            es: "15-20 movimientos adelante o más",
            de: "15-20 Züge voraus oder mehr",
            nl: "15-20 zetten vooruit of meer"
          },
          {
            en: "3-4 moves ahead",
            es: "3-4 movimientos adelante",
            de: "3-4 Züge voraus",
            nl: "3-4 zetten vooruit"
          }
        ],
        correct: 2,
        explanation: {
          en: "Master-level checkers players regularly calculate forced tactical sequences 15-20 moves or even deeper when evaluating critical positions. Due to the forcing nature of captures and the relatively constrained movement options, expert players can visualize extremely long tactical chains, especially in combination-heavy positions where multiple captures create clear paths.",
          es: "Los jugadores de damas de nivel maestro calculan regularmente secuencias tácticas forzadas de 15-20 movimientos o incluso más profundas al evaluar posiciones críticas. Debido a la naturaleza forzosa de las capturas y las opciones de movimiento relativamente limitadas, los jugadores expertos pueden visualizar cadenas tácticas extremadamente largas, especialmente en posiciones con muchas combinaciones donde múltiples capturas crean caminos claros.",
          de: "Meisterschafts-Dame-Spieler berechnen regelmäßig erzwungene taktische Sequenzen von 15-20 Zügen oder sogar tiefer bei der Bewertung kritischer Positionen. Aufgrund der zwingenden Natur von Schlägen und der relativ eingeschränkten Bewegungsoptionen können Expertenspieler extrem lange taktische Ketten visualisieren, besonders in kombinationsreichen Positionen, wo mehrfache Schläge klare Pfade schaffen.",
          nl: "Meester-niveau damspelers berekenen regelmatig gedwongen tactische sequenties van 15-20 zetten of zelfs dieper bij het evalueren van kritieke posities. Door de dwingende aard van slagen en de relatief beperkte bewegingsopties kunnen expert spelers extreem lange tactische ketens visualiseren, vooral in combinatie-rijke posities waar meerdere slagen duidelijke paden creëren."
        }
      },
      {
        question: {
          en: "What is the 'Payne's draw' endgame position?",
          es: "¿Qué es la posición de final 'Tablas de Payne'?",
          de: "Was ist die 'Payne-Remis'-Endspielposition?",
          nl: "Wat is de 'Payne remise' eindspel positie?"
        },
        options: [
          {
            en: "Two kings versus one king on the long diagonal",
            es: "Dos damas contra una dama en la diagonal larga",
            de: "Zwei Damen gegen eine Dame auf der langen Diagonale",
            nl: "Twee dammen tegen één dam op de lange diagonaal"
          },
          {
            en: "A specific drawn position with one piece versus two",
            es: "Una posición específica de tablas con una pieza contra dos",
            de: "Eine spezifische Remisposition mit einem Stein gegen zwei",
            nl: "Een specifieke remise positie met één stuk tegen twee"
          },
          {
            en: "A fortress formation preventing breakthrough",
            es: "Una formación de fortaleza previniendo avance",
            de: "Eine Festungsformation, die Durchbruch verhindert",
            nl: "Een fort formatie die doorbraak voorkomt"
          },
          {
            en: "Any position where both sides repeat moves",
            es: "Cualquier posición donde ambos lados repiten movimientos",
            de: "Jede Position, bei der beide Seiten Züge wiederholen",
            nl: "Elke positie waar beide zijden zetten herhalen"
          }
        ],
        correct: 1,
        explanation: {
          en: "The Payne's draw is a theoretical drawn endgame discovered by Benjamin Payne where one piece can hold against two pieces in a specific configuration. This demonstrates that material advantage doesn't always guarantee victory—precise defensive technique can secure draws in seemingly lost positions. Understanding such theoretical draws is crucial for master-level endgame play.",
          es: "Las Tablas de Payne son un final teóricamente tablas descubierto por Benjamin Payne donde una pieza puede sostener contra dos piezas en una configuración específica. Esto demuestra que la ventaja material no siempre garantiza victoria—la técnica defensiva precisa puede asegurar tablas en posiciones aparentemente perdidas. Entender tales tablas teóricas es crucial para el juego de final de nivel maestro.",
          de: "Das Payne-Remis ist ein theoretisches Remis-Endspiel, das von Benjamin Payne entdeckt wurde, bei dem ein Stein gegen zwei Steine in einer spezifischen Konfiguration halten kann. Dies zeigt, dass materieller Vorteil nicht immer den Sieg garantiert—präzise Verteidigungstechnik kann Remis in scheinbar verlorenen Positionen sichern. Das Verständnis solcher theoretischer Remis ist entscheidend für Meisterschafts-Endspiel.",
          nl: "De Payne remise is een theoretisch remise eindspel ontdekt door Benjamin Payne waarbij één stuk kan standhouden tegen twee stukken in een specifieke configuratie. Dit toont aan dat materiaal voordeel niet altijd overwinning garandeert—precieze defensieve techniek kan remises veiligstellen in ogenschijnlijk verloren posities. Begrip van dergelijke theoretische remises is cruciaal voor meester-niveau eindspel."
        }
      },
      {
        question: {
          en: "What is a 'stroke' in advanced checkers tactics?",
          es: "¿Qué es un 'golpe' en tácticas avanzadas de damas?",
          de: "Was ist ein 'Schlag' in fortgeschrittener Dame-Taktik?",
          nl: "Wat is een 'slag' in geavanceerde dammen tactieken?"
        },
        options: [
          {
            en: "Any single capture move",
            es: "Cualquier movimiento de captura simple",
            de: "Jeder einzelne Schlagzug",
            nl: "Elke enkele slag zet"
          },
          {
            en: "A brilliant multi-piece sacrificial combination",
            es: "Una brillante combinación de sacrificio de múltiples piezas",
            de: "Eine brillante Mehrstück-Opferkombination",
            nl: "Een briljante meerdere-stuk offer combinatie"
          },
          {
            en: "A king's diagonal movement",
            es: "Un movimiento diagonal de dama",
            de: "Eine diagonale Damenbewegung",
            nl: "Een diagonale dam beweging"
          },
          {
            en: "Capturing all remaining opponent pieces",
            es: "Capturar todas las piezas restantes del oponente",
            de: "Alle verbleibenden Gegnersteine schlagen",
            nl: "Alle resterende tegenstander stukken slaan"
          }
        ],
        correct: 1,
        explanation: {
          en: "In advanced checkers terminology, a 'stroke' refers to a spectacular tactical combination involving multiple piece sacrifices that lead to a winning position. These brilliant sequences often sacrifice two or more pieces to set up a devastating counter-stroke that captures numerous enemy pieces or achieves a winning material or positional advantage. Strokes represent the highest level of tactical artistry in checkers.",
          es: "En terminología avanzada de damas, un 'golpe' se refiere a una combinación táctica espectacular involucrando sacrificios de múltiples piezas que llevan a una posición ganadora. Estas secuencias brillantes a menudo sacrifican dos o más piezas para preparar un contra-golpe devastador que captura numerosas piezas enemigas o logra una ventaja material o posicional ganadora. Los golpes representan el nivel más alto de arte táctico en damas.",
          de: "In fortgeschrittener Dame-Terminologie bezieht sich ein 'Schlag' auf eine spektakuläre taktische Kombination mit mehreren Steinopfern, die zu einer gewinnenden Position führen. Diese brillanten Sequenzen opfern oft zwei oder mehr Steine, um einen verheerenden Gegenschlag aufzubauen, der zahlreiche feindliche Steine schlägt oder einen gewinnenden materiellen oder positionellen Vorteil erzielt. Schläge repräsentieren die höchste Stufe taktischer Kunstfertigkeit beim Dame.",
          nl: "In geavanceerde dammen terminologie verwijst een 'slag' naar een spectaculaire tactische combinatie met meerdere stuk offers die leiden tot een winnende positie. Deze briljante sequenties offeren vaak twee of meer stukken op om een verwoestende tegenslag op te zetten die talrijke vijandelijke stukken slaat of een winnend materiaal of positioneel voordeel behaalt. Slagen vertegenwoordigen het hoogste niveau van tactisch kunstenaarschap in dammen."
        }
      },
      {
        question: {
          en: "What characterizes the 'Second Double Corner' opening system?",
          es: "¿Qué caracteriza el sistema de apertura 'Segunda Esquina Doble'?",
          de: "Was charakterisiert das 'Zweite Doppelecken'-Eröffnungssystem?",
          nl: "Wat kenmerkt het 'Tweede Dubbele Hoek' opening systeem?"
        },
        options: [
          {
            en: "Controlling both corner squares early",
            es: "Controlar ambas casillas de esquina temprano",
            de: "Beide Eckfelder früh kontrollieren",
            nl: "Beide hoekvelden vroeg controleren"
          },
          {
            en: "An opening strategy focusing on piece 10 and square 6 control",
            es: "Una estrategia de apertura enfocándose en el control de pieza 10 y casilla 6",
            de: "Eine Eröffnungsstrategie mit Fokus auf Stein 10 und Feld 6-Kontrolle",
            nl: "Een opening strategie gericht op stuk 10 en veld 6 controle"
          },
          {
            en: "Playing two games simultaneously",
            es: "Jugar dos juegos simultáneamente",
            de: "Zwei Spiele gleichzeitig spielen",
            nl: "Twee spellen tegelijkertijd spelen"
          },
          {
            en: "Sacrificing corner pieces for center control",
            es: "Sacrificar piezas de esquina por control del centro",
            de: "Ecksteine für Zentrumskontrolle opfern",
            nl: "Hoek stukken opofferen voor centrum controle"
          }
        ],
        correct: 1,
        explanation: {
          en: "The Second Double Corner is a classical opening system in American checkers that emphasizes early control of key central squares, particularly the square numbered 6 and piece placement on 10. This opening creates a solid positional foundation while maintaining flexibility for both tactical and strategic play. Master players extensively study this and other named opening systems to understand the resulting middlegame positions.",
          es: "La Segunda Esquina Doble es un sistema de apertura clásico en damas americanas que enfatiza el control temprano de casillas centrales clave, particularmente la casilla numerada 6 y la colocación de pieza en 10. Esta apertura crea una base posicional sólida mientras mantiene flexibilidad para juego tanto táctico como estratégico. Los jugadores maestros estudian extensamente este y otros sistemas de apertura nombrados para entender las posiciones de medio juego resultantes.",
          de: "Die Zweite Doppelecke ist ein klassisches Eröffnungssystem im amerikanischen Dame, das die frühe Kontrolle wichtiger zentraler Felder betont, insbesondere das Feld Nummer 6 und die Steinplatzierung auf 10. Diese Eröffnung schafft eine solide positionelle Grundlage bei Beibehaltung der Flexibilität für taktisches und strategisches Spiel. Meisterspieler studieren dieses und andere benannte Eröffnungssysteme ausführlich, um die resultierenden Mittelspiel-Positionen zu verstehen.",
          nl: "De Tweede Dubbele Hoek is een klassiek opening systeem in Amerikaans dammen dat de nadruk legt op vroege controle van sleutel centrale velden, met name veld nummer 6 en stuk plaatsing op 10. Deze opening creëert een solide positionele basis terwijl flexibiliteit behouden blijft voor zowel tactisch als strategisch spel. Meester spelers bestuderen dit en andere genoemde opening systemen uitgebreid om de resulterende middenspel posities te begrijpen."
        }
      },
      {
        question: {
          en: "What is the principle of 'opposition' in king endgames?",
          es: "¿Qué es el principio de 'oposición' en finales de damas?",
          de: "Was ist das Prinzip der 'Opposition' in Damen-Endspielen?",
          nl: "Wat is het principe van 'oppositie' in dam eindspelen?"
        },
        options: [
          {
            en: "Keeping your king directly opposite the enemy king",
            es: "Mantener tu dama directamente opuesta a la dama enemiga",
            de: "Deine Dame direkt gegenüber der feindlichen Dame halten",
            nl: "Je dam direct tegenover de vijandelijke dam houden"
          },
          {
            en: "Positioning to control key squares and limit opponent's options",
            es: "Posicionarse para controlar casillas clave y limitar opciones del oponente",
            de: "Positionierung zur Kontrolle von Schlüsselfeldern und Begrenzung der Gegneroptionen",
            nl: "Positioneren om sleutelvelden te controleren en tegenstander opties te beperken"
          },
          {
            en: "Always moving in opposite directions",
            es: "Siempre moverse en direcciones opuestas",
            de: "Immer in entgegengesetzte Richtungen bewegen",
            nl: "Altijd in tegengestelde richtingen bewegen"
          },
          {
            en: "Refusing to trade pieces",
            es: "Negarse a intercambiar piezas",
            de: "Sich weigern, Steine zu tauschen",
            nl: "Weigeren stukken te ruilen"
          }
        ],
        correct: 1,
        explanation: {
          en: "In checkers endgames, opposition refers to the strategic positioning of kings relative to each other to control critical squares and restrict the opponent's mobility. Having the opposition means your king is positioned such that you can maintain control of key diagonal squares, forcing your opponent into less favorable positions. This concept is crucial in king-versus-king or king-and-piece endgames where precise positioning determines the outcome.",
          es: "En finales de damas, la oposición se refiere al posicionamiento estratégico de damas relativas entre sí para controlar casillas críticas y restringir la movilidad del oponente. Tener la oposición significa que tu dama está posicionada de tal manera que puedes mantener control de casillas diagonales clave, forzando a tu oponente a posiciones menos favorables. Este concepto es crucial en finales de dama contra dama o dama-y-pieza donde el posicionamiento preciso determina el resultado.",
          de: "In Dame-Endspielen bezieht sich Opposition auf die strategische Positionierung von Damen relativ zueinander, um kritische Felder zu kontrollieren und die Mobilität des Gegners einzuschränken. Die Opposition zu haben bedeutet, dass deine Dame so positioniert ist, dass du die Kontrolle über wichtige diagonale Felder aufrechterhalten kannst und den Gegner in weniger günstige Positionen zwingst. Dieses Konzept ist entscheidend in Dame-gegen-Dame oder Dame-und-Stein-Endspielen, wo präzise Positionierung das Ergebnis bestimmt.",
          nl: "In dammen eindspelen verwijst oppositie naar de strategische positionering van dammen ten opzichte van elkaar om kritieke velden te controleren en de mobiliteit van de tegenstander te beperken. De oppositie hebben betekent dat je dam zo gepositioneerd is dat je controle kunt behouden over sleutel diagonale velden, waarbij je tegenstander wordt gedwongen tot minder gunstige posities. Dit concept is cruciaal in dam-tegen-dam of dam-en-stuk eindspelen waar precieze positionering de uitkomst bepaalt."
        }
      },
      {
        question: {
          en: "What is a 'quiet move' in tactical play?",
          es: "¿Qué es un 'movimiento silencioso' en juego táctico?",
          de: "Was ist ein 'stiller Zug' im taktischen Spiel?",
          nl: "Wat is een 'stille zet' in tactisch spel?"
        },
        options: [
          {
            en: "A non-capturing move that sets up an unstoppable threat",
            es: "Un movimiento sin captura que prepara una amenaza imparable",
            de: "Ein nicht-schlagender Zug, der eine unstoppbare Drohung aufbaut",
            nl: "Een niet-slaande zet die een onstuitbare dreiging opzet"
          },
          {
            en: "A move made without announcing it",
            es: "Un movimiento hecho sin anunciarlo",
            de: "Ein Zug, der ohne Ankündigung gemacht wird",
            nl: "Een zet gemaakt zonder het aan te kondigen"
          },
          {
            en: "Moving a piece to the edge silently",
            es: "Mover una pieza al borde silenciosamente",
            de: "Einen Stein still zum Rand bewegen",
            nl: "Een stuk stilletjes naar de rand bewegen"
          },
          {
            en: "Any defensive repositioning move",
            es: "Cualquier movimiento de reposicionamiento defensivo",
            de: "Jeder defensive Neupositionierungszug",
            nl: "Elke defensieve herpositionering zet"
          }
        ],
        correct: 0,
        explanation: {
          en: "A quiet move is a subtle, non-forcing positional move (typically not a capture) that prepares an unstoppable tactical blow or improves the position decisively. Unlike flashy captures, quiet moves require deep calculation to see their purpose. They're often the key to brilliant combinations, setting up the position so that the opponent's responses all lead to loss. Recognizing and executing quiet moves separates masters from advanced players.",
          es: "Un movimiento silencioso es un movimiento posicional sutil y no forzoso (típicamente no una captura) que prepara un golpe táctico imparable o mejora la posición decisivamente. A diferencia de capturas llamativas, los movimientos silenciosos requieren cálculo profundo para ver su propósito. A menudo son la clave de combinaciones brillantes, preparando la posición para que las respuestas del oponente lleven a pérdida. Reconocer y ejecutar movimientos silenciosos separa a los maestros de los jugadores avanzados.",
          de: "Ein stiller Zug ist ein subtiler, nicht-zwingender Positionszug (typischerweise kein Schlag), der einen unstoppbaren taktischen Schlag vorbereitet oder die Position entscheidend verbessert. Im Gegensatz zu auffälligen Schlägen erfordern stille Züge tiefe Berechnung, um ihren Zweck zu sehen. Sie sind oft der Schlüssel zu brillanten Kombinationen und bereiten die Position so vor, dass alle Antworten des Gegners zum Verlust führen. Das Erkennen und Ausführen stiller Züge trennt Meister von fortgeschrittenen Spielern.",
          nl: "Een stille zet is een subtiele, niet-dwingende positionele zet (typisch geen slag) die een onstuitbare tactische slag voorbereidt of de positie beslissend verbetert. In tegenstelling tot opzichtige slagen vereisen stille zetten diepe berekening om hun doel te zien. Ze zijn vaak de sleutel tot briljante combinaties, waarbij de positie zo wordt opgezet dat alle reacties van de tegenstander tot verlies leiden. Het herkennen en uitvoeren van stille zetten scheidt meesters van gevorderde spelers."
        }
      },
      {
        question: {
          en: "What is the 'First Position' in opening theory?",
          es: "¿Qué es la 'Primera Posición' en teoría de apertura?",
          de: "Was ist die 'Erste Position' in der Eröffnungstheorie?",
          nl: "Wat is de 'Eerste Positie' in opening theorie?"
        },
        options: [
          {
            en: "The starting position of the game",
            es: "La posición inicial del juego",
            de: "Die Startposition des Spiels",
            nl: "De startpositie van het spel"
          },
          {
            en: "The position after 1.11-15",
            es: "La posición después de 1.11-15",
            de: "Die Position nach 1.11-15",
            nl: "De positie na 1.11-15"
          },
          {
            en: "A key central control position after specific opening moves",
            es: "Una posición clave de control central después de movimientos de apertura específicos",
            de: "Eine wichtige zentrale Kontrollposition nach spezifischen Eröffnungszügen",
            nl: "Een sleutel centrale controle positie na specifieke opening zetten"
          },
          {
            en: "Having the first move advantage",
            es: "Tener la ventaja del primer movimiento",
            de: "Den Vorteil des ersten Zuges haben",
            nl: "Het voordeel van de eerste zet hebben"
          }
        ],
        correct: 2,
        explanation: {
          en: "The First Position in checkers opening theory refers to a strategically important position arising from specific opening sequences where both players have developed pieces to control central squares. This position is fundamental to understanding checkers strategy as it represents ideal piece placement and central control. Players who achieve better versions of the First Position typically gain advantages in the resulting middlegame.",
          es: "La Primera Posición en teoría de apertura de damas se refiere a una posición estratégicamente importante que surge de secuencias de apertura específicas donde ambos jugadores han desarrollado piezas para controlar casillas centrales. Esta posición es fundamental para entender la estrategia de damas ya que representa la colocación ideal de piezas y control central. Los jugadores que logran mejores versiones de la Primera Posición típicamente ganan ventajas en el medio juego resultante.",
          de: "Die Erste Position in der Dame-Eröffnungstheorie bezieht sich auf eine strategisch wichtige Position, die sich aus spezifischen Eröffnungssequenzen ergibt, bei denen beide Spieler Steine entwickelt haben, um zentrale Felder zu kontrollieren. Diese Position ist grundlegend für das Verständnis der Dame-Strategie, da sie ideale Steinplatzierung und zentrale Kontrolle darstellt. Spieler, die bessere Versionen der Ersten Position erreichen, erlangen typischerweise Vorteile im resultierenden Mittelspiel.",
          nl: "De Eerste Positie in dammen opening theorie verwijst naar een strategisch belangrijke positie die voorkomt uit specifieke opening sequenties waarbij beide spelers stukken hebben ontwikkeld om centrale velden te controleren. Deze positie is fundamenteel voor het begrijpen van dammen strategie omdat het ideale stuk plaatsing en centrale controle vertegenwoordigt. Spelers die betere versies van de Eerste Positie bereiken krijgen typisch voordelen in het resulterende middenspel."
        }
      },
      {
        question: {
          en: "What is a 'pitch' in checkers tactics?",
          es: "¿Qué es un 'lanzamiento' en tácticas de damas?",
          de: "Was ist ein 'Wurf' in der Dame-Taktik?",
          nl: "Wat is een 'worp' in dammen tactieken?"
        },
        options: [
          {
            en: "A deliberate sacrifice of a piece to gain tempo or position",
            es: "Un sacrificio deliberado de una pieza para ganar tempo o posición",
            de: "Ein absichtliches Opfer eines Steins für Tempo oder Position",
            nl: "Een opzettelijk offer van een stuk om tempo of positie te winnen"
          },
          {
            en: "Throwing a captured piece off the board",
            es: "Lanzar una pieza capturada fuera del tablero",
            de: "Einen geschlagenen Stein vom Brett werfen",
            nl: "Een geslagen stuk van het bord gooien"
          },
          {
            en: "A long-distance king move",
            es: "Un movimiento de dama a larga distancia",
            de: "Ein Langstrecken-Damenzug",
            nl: "Een lange-afstands dam zet"
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
          en: "A pitch is a tactical sacrifice where a piece is deliberately offered to the opponent, forcing them to capture it in a way that grants you tempo, positional advantage, or sets up a winning combination. Pitches are subtle weapons in the tactical arsenal—by forcing the opponent to take material in an unfavorable manner, you gain initiative or create weaknesses to exploit. Mastering the pitch distinguishes tactical experts.",
          es: "Un lanzamiento es un sacrificio táctico donde una pieza se ofrece deliberadamente al oponente, forzándolo a capturarla de manera que te otorga tempo, ventaja posicional o prepara una combinación ganadora. Los lanzamientos son armas sutiles en el arsenal táctico—al forzar al oponente a tomar material de manera desfavorable, ganas iniciativa o creas debilidades para explotar. Dominar el lanzamiento distingue a expertos tácticos.",
          de: "Ein Wurf ist ein taktisches Opfer, bei dem ein Stein absichtlich dem Gegner angeboten wird und ihn zwingt, ihn so zu schlagen, dass dir Tempo, positioneller Vorteil gewährt oder eine gewinnende Kombination aufgebaut wird. Würfe sind subtile Waffen im taktischen Arsenal—indem der Gegner gezwungen wird, Material ungünstig zu nehmen, gewinnst du Initiative oder schaffst Schwächen zum Ausnutzen. Die Beherrschung des Wurfs unterscheidet taktische Experten.",
          nl: "Een worp is een tactisch offer waarbij een stuk opzettelijk aan de tegenstander wordt aangeboden, waarbij hij gedwongen wordt het te slaan op een manier die jou tempo, positioneel voordeel geeft of een winnende combinatie opzet. Worpen zijn subtiele wapens in het tactisch arsenaal—door de tegenstander te dwingen materiaal op ongunstige wijze te nemen, win je initiatief of creëer je zwakheden om te exploiteren. Het beheersen van de worp onderscheidt tactische experts."
        }
      },
      {
        question: {
          en: "What is the strategic significance of the 'bridge' squares (5-14 in standard notation)?",
          es: "¿Cuál es la importancia estratégica de las casillas 'puente' (5-14 en notación estándar)?",
          de: "Was ist die strategische Bedeutung der 'Brücken'-Felder (5-14 in Standardnotation)?",
          nl: "Wat is de strategische betekenis van de 'brug' velden (5-14 in standaard notatie)?"
        },
        options: [
          {
            en: "They connect the two sides of the board for piece mobility",
            es: "Conectan los dos lados del tablero para movilidad de piezas",
            de: "Sie verbinden die beiden Seiten des Bretts für Steinmobilität",
            nl: "Ze verbinden de twee zijden van het bord voor stuk mobiliteit"
          },
          {
            en: "They are always safe from capture",
            es: "Siempre están a salvo de captura",
            de: "Sie sind immer vor Schlägen sicher",
            nl: "Ze zijn altijd veilig voor slaan"
          },
          {
            en: "They guarantee king promotion",
            es: "Garantizan promoción de dama",
            de: "Sie garantieren Damenbeförderung",
            nl: "Ze garanderen dam promotie"
          },
          {
            en: "Controlling them prevents all exchanges",
            es: "Controlarlas previene todos los intercambios",
            de: "Ihre Kontrolle verhindert alle Tausche",
            nl: "Ze controleren voorkomt alle ruilen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The bridge squares (5 and 14 in standard American notation) are strategically critical because they serve as key connection points between the two wings of the board. Controlling these squares allows pieces to flow smoothly from one side to the other, maintaining flexibility and coordination. Loss of bridge square control can lead to split forces and tactical vulnerabilities. Master players carefully contest these squares throughout the opening and middlegame.",
          es: "Las casillas puente (5 y 14 en notación americana estándar) son estratégicamente críticas porque sirven como puntos de conexión clave entre las dos alas del tablero. Controlar estas casillas permite que las piezas fluyan suavemente de un lado al otro, manteniendo flexibilidad y coordinación. La pérdida de control de casillas puente puede llevar a fuerzas divididas y vulnerabilidades tácticas. Los jugadores maestros contestan cuidadosamente estas casillas durante la apertura y medio juego.",
          de: "Die Brückenfelder (5 und 14 in amerikanischer Standardnotation) sind strategisch kritisch, weil sie als wichtige Verbindungspunkte zwischen den beiden Flügeln des Bretts dienen. Die Kontrolle dieser Felder ermöglicht es Steinen, reibungslos von einer Seite zur anderen zu fließen und Flexibilität und Koordination aufrechtzuerhalten. Der Verlust der Brückenfeldkontrolle kann zu geteilten Kräften und taktischen Schwachstellen führen. Meisterspieler kämpfen während der Eröffnung und des Mittelspiels sorgfältig um diese Felder.",
          nl: "De brugvelden (5 en 14 in standaard Amerikaanse notatie) zijn strategisch kritiek omdat ze dienen als sleutel verbindingspunten tussen de twee vleugels van het bord. Het controleren van deze velden stelt stukken in staat soepel van de ene kant naar de andere te bewegen, waarbij flexibiliteit en coördinatie behouden blijven. Verlies van brugveld controle kan leiden tot gesplitste krachten en tactische kwetsbaarheden. Meester spelers strijden zorgvuldig om deze velden gedurende de opening en het middenspel."
        }
      },
      {
        question: {
          en: "What is a 'Greek gift' sacrifice in checkers?",
          es: "¿Qué es un sacrificio de 'regalo griego' en damas?",
          de: "Was ist ein 'Griechisches Geschenk'-Opfer beim Dame?",
          nl: "Wat is een 'Grieks geschenk' offer in dammen?"
        },
        options: [
          {
            en: "A sacrifice that appears generous but leads to opponent's downfall",
            es: "Un sacrificio que parece generoso pero lleva a la caída del oponente",
            de: "Ein Opfer, das großzügig erscheint, aber zum Untergang des Gegners führt",
            nl: "Een offer dat genereus lijkt maar leidt tot de ondergang van de tegenstander"
          },
          {
            en: "A traditional Greek opening variation",
            es: "Una variación de apertura griega tradicional",
            de: "Eine traditionelle griechische Eröffnungsvariante",
            nl: "Een traditionele Griekse opening variatie"
          },
          {
            en: "Trading three pieces for two",
            es: "Intercambiar tres piezas por dos",
            de: "Drei Steine gegen zwei tauschen",
            nl: "Drie stukken ruilen voor twee"
          },
          {
            en: "Offering a draw from a winning position",
            es: "Ofrecer tablas desde una posición ganadora",
            de: "Ein Remis aus gewinnender Position anbieten",
            nl: "Een remise aanbieden vanuit winnende positie"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Greek gift sacrifice (named after the Trojan Horse) is a deceptive tactical motif where material is offered in a way that appears favorable for the opponent to accept, but contains a hidden trap. Once the 'gift' is accepted, a devastating counter-combination unfolds. This requires precise calculation to ensure the opponent's acceptance leads to forced tactical sequences that win material or the game. It's a sophisticated psychological and tactical weapon.",
          es: "El sacrificio de regalo griego (nombrado por el Caballo de Troya) es un motivo táctico engañoso donde se ofrece material de manera que parece favorable para que el oponente acepte, pero contiene una trampa oculta. Una vez que el 'regalo' es aceptado, se despliega una contra-combinación devastadora. Esto requiere cálculo preciso para asegurar que la aceptación del oponente lleve a secuencias tácticas forzadas que ganan material o el juego. Es un arma psicológica y táctica sofisticada.",
          de: "Das Griechische Geschenk-Opfer (benannt nach dem Trojanischen Pferd) ist ein täuschendes taktisches Motiv, bei dem Material so angeboten wird, dass es für den Gegner vorteilhaft erscheint zu akzeptieren, aber eine versteckte Falle enthält. Sobald das 'Geschenk' akzeptiert wird, entfaltet sich eine verheerende Gegen-Kombination. Dies erfordert präzise Berechnung, um sicherzustellen, dass die Annahme des Gegners zu erzwungenen taktischen Sequenzen führt, die Material oder das Spiel gewinnen. Es ist eine ausgefeilte psychologische und taktische Waffe.",
          nl: "Het Griekse geschenk offer (vernoemd naar het Paard van Troje) is een misleidend tactisch motief waarbij materiaal wordt aangeboden op een manier die gunstig lijkt voor de tegenstander om te accepteren, maar een verborgen val bevat. Zodra het 'geschenk' wordt geaccepteerd, ontvouwt zich een verwoestende tegen-combinatie. Dit vereist precieze berekening om te verzekeren dat de acceptatie van de tegenstander leidt tot gedwongen tactische sequenties die materiaal of het spel winnen. Het is een verfijnd psychologisch en tactisch wapen."
        }
      },
      {
        question: {
          en: "What is 'maintaining the tension' in positional play?",
          es: "¿Qué es 'mantener la tensión' en juego posicional?",
          de: "Was ist 'die Spannung aufrechterhalten' im Positionsspiel?",
          nl: "Wat is 'de spanning behouden' in positioneel spel?"
        },
        options: [
          {
            en: "Delaying exchanges to preserve options and keep opponent guessing",
            es: "Retrasar intercambios para preservar opciones y mantener al oponente adivinando",
            de: "Tausche verzögern, um Optionen zu bewahren und den Gegner im Unklaren zu lassen",
            nl: "Ruilen uitstellen om opties te behouden en tegenstander te laten raden"
          },
          {
            en: "Playing under time pressure",
            es: "Jugar bajo presión de tiempo",
            de: "Unter Zeitdruck spielen",
            nl: "Spelen onder tijdsdruk"
          },
          {
            en: "Creating multiple immediate threats",
            es: "Crear múltiples amenazas inmediatas",
            de: "Mehrere sofortige Drohungen schaffen",
            nl: "Meerdere onmiddellijke bedreigingen creëren"
          },
          {
            en: "Keeping pieces tightly clustered",
            es: "Mantener piezas estrechamente agrupadas",
            de: "Steine eng gruppiert halten",
            nl: "Stukken strak gegroepeerd houden"
          }
        ],
        correct: 0,
        explanation: {
          en: "Maintaining tension means preserving a position where pieces are in opposition or potential exchanges exist, but neither player commits to resolving them immediately. This keeps maximum flexibility—you retain multiple strategic options while forcing your opponent to make difficult decisions. Premature resolution often benefits one side, so master players carefully choose when to release tension. This demonstrates deep positional understanding and patience.",
          es: "Mantener la tensión significa preservar una posición donde las piezas están en oposición o existen intercambios potenciales, pero ningún jugador se compromete a resolverlos inmediatamente. Esto mantiene máxima flexibilidad—retienes múltiples opciones estratégicas mientras fuerzas a tu oponente a tomar decisiones difíciles. La resolución prematura a menudo beneficia a un lado, así que los jugadores maestros eligen cuidadosamente cuándo liberar la tensión. Esto demuestra comprensión posicional profunda y paciencia.",
          de: "Spannung aufrechterhalten bedeutet, eine Position zu bewahren, in der Steine in Opposition sind oder potenzielle Tausche existieren, aber kein Spieler sich verpflichtet, sie sofort zu lösen. Dies bewahrt maximale Flexibilität—du behältst mehrere strategische Optionen bei und zwingst deinen Gegner zu schwierigen Entscheidungen. Vorzeitige Auflösung begünstigt oft eine Seite, daher wählen Meisterspieler sorgfältig, wann sie Spannung lösen. Dies demonstriert tiefes Positionsverständnis und Geduld.",
          nl: "Spanning behouden betekent een positie bewaren waarbij stukken in oppositie zijn of potentiële ruilen bestaan, maar geen speler zich committeert om ze onmiddellijk op te lossen. Dit behoudt maximale flexibiliteit—je behoudt meerdere strategische opties terwijl je je tegenstander dwingt moeilijke beslissingen te nemen. Voortijdige oplossing bevordert vaak één kant, dus meester spelers kiezen zorgvuldig wanneer spanning wordt losgelaten. Dit toont diep positioneel begrip en geduld."
        }
      },
      {
        question: {
          en: "What is the 'Tinsley Trap' named after champion Marion Tinsley?",
          es: "¿Qué es la 'Trampa de Tinsley' nombrada por el campeón Marion Tinsley?",
          de: "Was ist die 'Tinsley-Falle', benannt nach Champion Marion Tinsley?",
          nl: "Wat is de 'Tinsley Val' vernoemd naar kampioen Marion Tinsley?"
        },
        options: [
          {
            en: "A specific tactical trap in the 11-15 opening",
            es: "Una trampa táctica específica en la apertura 11-15",
            de: "Eine spezifische taktische Falle in der 11-15 Eröffnung",
            nl: "Een specifieke tactische val in de 11-15 opening"
          },
          {
            en: "Any endgame Tinsley won brilliantly",
            es: "Cualquier final que Tinsley ganó brillantemente",
            de: "Jedes Endspiel, das Tinsley brillant gewann",
            nl: "Elk eindspel dat Tinsley briljant won"
          },
          {
            en: "A defensive system Tinsley developed",
            es: "Un sistema defensivo que Tinsley desarrolló",
            de: "Ein defensives System, das Tinsley entwickelte",
            nl: "Een defensief systeem dat Tinsley ontwikkelde"
          },
          {
            en: "A computer analysis technique",
            es: "Una técnica de análisis por computadora",
            de: "Eine Computer-Analysetechnik",
            nl: "Een computer analyse techniek"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Tinsley Trap refers to a brilliant tactical sequence in certain 11-15 opening variations discovered and perfected by Marion Tinsley, widely considered the greatest checkers player ever. This trap involves a deep sacrificial combination that appears to lose material but leads to a forced win. Tinsley used his phenomenal calculation ability to find such hidden resources, and this trap exemplifies his genius. Studying Tinsley's games is essential for aspiring masters.",
          es: "La Trampa de Tinsley se refiere a una secuencia táctica brillante en ciertas variaciones de apertura 11-15 descubiertas y perfeccionadas por Marion Tinsley, ampliamente considerado el mejor jugador de damas de todos los tiempos. Esta trampa involucra una combinación de sacrificio profunda que parece perder material pero lleva a una victoria forzada. Tinsley usó su fenomenal habilidad de cálculo para encontrar tales recursos ocultos, y esta trampa ejemplifica su genio. Estudiar los juegos de Tinsley es esencial para aspirantes a maestros.",
          de: "Die Tinsley-Falle bezieht sich auf eine brillante taktische Sequenz in bestimmten 11-15 Eröffnungsvarianten, die von Marion Tinsley entdeckt und perfektioniert wurden, der weithin als der größte Dame-Spieler aller Zeiten gilt. Diese Falle beinhaltet eine tiefe Opfer-Kombination, die scheinbar Material verliert, aber zu einem erzwungenen Sieg führt. Tinsley nutzte seine phänomenale Berechnungsfähigkeit, um solche verborgenen Ressourcen zu finden, und diese Falle exemplifiziert sein Genie. Das Studium von Tinsleys Spielen ist für angehende Meister unerlässlich.",
          nl: "De Tinsley Val verwijst naar een briljante tactische sequentie in bepaalde 11-15 opening variaties ontdekt en geperfectioneerd door Marion Tinsley, algemeen beschouwd als de grootste damspeler ooit. Deze val omvat een diepe offer combinatie die lijkt materiaal te verliezen maar leidt tot een gedwongen winst. Tinsley gebruikte zijn fenomenale berekeningsvermogen om dergelijke verborgen middelen te vinden, en deze val belichaamt zijn genialiteit. Het bestuderen van Tinsley's spellen is essentieel voor aspirant meesters."
        }
      },
      {
        question: {
          en: "What is a 'tempo move' in checkers?",
          es: "¿Qué es un 'movimiento de tempo' en damas?",
          de: "Was ist ein 'Tempo-Zug' beim Dame?",
          nl: "Wat is een 'tempo zet' in dammen?"
        },
        options: [
          {
            en: "A move that gains time or initiative in the position",
            es: "Un movimiento que gana tiempo o iniciativa en la posición",
            de: "Ein Zug, der Zeit oder Initiative in der Position gewinnt",
            nl: "Een zet die tijd of initiatief wint in de positie"
          },
          {
            en: "A move made within time control",
            es: "Un movimiento hecho dentro del control de tiempo",
            de: "Ein Zug innerhalb der Zeitkontrolle",
            nl: "Een zet gemaakt binnen tijdcontrole"
          },
          {
            en: "The speed of piece movement",
            es: "La velocidad de movimiento de piezas",
            de: "Die Geschwindigkeit der Steinbewegung",
            nl: "De snelheid van stuk beweging"
          },
          {
            en: "Any forcing move",
            es: "Cualquier movimiento forzoso",
            de: "Jeder zwingende Zug",
            nl: "Elke dwingende zet"
          }
        ],
        correct: 0,
        explanation: {
          en: "A tempo move is one that accomplishes your goal while forcing your opponent to spend time responding, effectively gaining you a free move's worth of advantage. In checkers, tempo is crucial—forcing your opponent into passive responses while you improve your position or execute your plan is a key strategic principle. Tempo advantage often accumulates into decisive positional or tactical superiority. Master players constantly seek tempo-gaining moves.",
          es: "Un movimiento de tempo es uno que logra tu objetivo mientras fuerza a tu oponente a gastar tiempo respondiendo, efectivamente ganándote el valor de un movimiento gratis de ventaja. En damas, el tempo es crucial—forzar a tu oponente a respuestas pasivas mientras mejoras tu posición o ejecutas tu plan es un principio estratégico clave. La ventaja de tempo a menudo se acumula en superioridad posicional o táctica decisiva. Los jugadores maestros buscan constantemente movimientos que ganen tempo.",
          de: "Ein Tempo-Zug ist einer, der dein Ziel erreicht und gleichzeitig deinen Gegner zwingt, Zeit mit Antworten zu verbringen, wodurch du effektiv einen kostenlosen Zug an Vorteil gewinnst. Beim Dame ist Tempo entscheidend—den Gegner zu passiven Antworten zu zwingen, während du deine Position verbesserst oder deinen Plan ausführst, ist ein wichtiges strategisches Prinzip. Tempo-Vorteil akkumuliert sich oft zu entscheidender positioneller oder taktischer Überlegenheit. Meisterspieler suchen ständig nach tempo-gewinnenden Zügen.",
          nl: "Een tempo zet is er één die je doel bereikt terwijl je tegenstander wordt gedwongen tijd te besteden aan reageren, waardoor je effectief een gratis zet aan voordeel wint. In dammen is tempo cruciaal—je tegenstander dwingen tot passieve reacties terwijl je je positie verbetert of je plan uitvoert is een sleutel strategisch principe. Tempo voordeel accumuleert vaak tot beslissende positionele of tactische superioriteit. Meester spelers zoeken constant naar tempo-winnende zetten."
        }
      },
      {
        question: {
          en: "What is the 'exchange sacrifice' in advanced checkers?",
          es: "¿Qué es el 'sacrificio de intercambio' en damas avanzadas?",
          de: "Was ist das 'Tausch-Opfer' im fortgeschrittenen Dame?",
          nl: "Wat is het 'ruil offer' in geavanceerd dammen?"
        },
        options: [
          {
            en: "Giving up material to gain positional compensation",
            es: "Renunciar a material para ganar compensación posicional",
            de: "Material aufgeben, um positionelle Kompensation zu erhalten",
            nl: "Materiaal opgeven om positionele compensatie te krijgen"
          },
          {
            en: "Trading pieces of equal value",
            es: "Intercambiar piezas de igual valor",
            de: "Steine gleichen Werts tauschen",
            nl: "Stukken van gelijke waarde ruilen"
          },
          {
            en: "Exchanging positions with opponent",
            es: "Intercambiar posiciones con el oponente",
            de: "Positionen mit dem Gegner tauschen",
            nl: "Posities ruilen met tegenstander"
          },
          {
            en: "Swapping opening strategies mid-game",
            es: "Cambiar estrategias de apertura a mitad del juego",
            de: "Eröffnungsstrategien mitten im Spiel tauschen",
            nl: "Opening strategieën midden in het spel wisselen"
          }
        ],
        correct: 0,
        explanation: {
          en: "An exchange sacrifice involves deliberately giving up material (usually accepting an unfavorable piece trade) in return for significant positional advantages such as superior piece placement, control of key squares, or initiative. Unlike tactical sacrifices that lead to forced wins, exchange sacrifices offer long-term compensation. Evaluating whether positional factors justify material loss requires deep strategic understanding—a hallmark of master-level play.",
          es: "Un sacrificio de intercambio implica renunciar deliberadamente a material (usualmente aceptando un intercambio de piezas desfavorable) a cambio de ventajas posicionales significativas como colocación superior de piezas, control de casillas clave o iniciativa. A diferencia de sacrificios tácticos que llevan a victorias forzadas, los sacrificios de intercambio ofrecen compensación a largo plazo. Evaluar si los factores posicionales justifican la pérdida de material requiere comprensión estratégica profunda—una marca distintiva del juego de nivel maestro.",
          de: "Ein Tausch-Opfer beinhaltet das absichtliche Aufgeben von Material (normalerweise das Akzeptieren eines ungünstigen Steintauschs) im Austausch für bedeutende positionelle Vorteile wie überlegene Steinplatzierung, Kontrolle wichtiger Felder oder Initiative. Im Gegensatz zu taktischen Opfern, die zu erzwungenen Siegen führen, bieten Tausch-Opfer langfristige Kompensation. Die Bewertung, ob positionelle Faktoren Materialverlust rechtfertigen, erfordert tiefes strategisches Verständnis—ein Kennzeichen des Meisterschaftsspiels.",
          nl: "Een ruil offer omvat opzettelijk materiaal opgeven (meestal het accepteren van een ongunstige stuk ruil) in ruil voor significante positionele voordelen zoals superieure stuk plaatsing, controle van sleutelvelden of initiatief. In tegenstelling tot tactische offers die leiden tot gedwongen winsten, bieden ruil offers langdurige compensatie. Evalueren of positionele factoren materiaal verlies rechtvaardigen vereist diep strategisch begrip—een kenmerk van meester-niveau spel."
        }
      },
      {
        question: {
          en: "What is 'critical square theory' in king endgames?",
          es: "¿Qué es la 'teoría de casillas críticas' en finales de damas?",
          de: "Was ist die 'Theorie kritischer Felder' in Damen-Endspielen?",
          nl: "Wat is 'kritieke velden theorie' in dam eindspelen?"
        },
        options: [
          {
            en: "Identifying key squares whose control determines the endgame outcome",
            es: "Identificar casillas clave cuyo control determina el resultado del final",
            de: "Identifizierung wichtiger Felder, deren Kontrolle das Endspiel-Ergebnis bestimmt",
            nl: "Het identificeren van sleutelvelden waarvan de controle de eindspel uitkomst bepaalt"
          },
          {
            en: "The most dangerous squares on the board",
            es: "Las casillas más peligrosas del tablero",
            de: "Die gefährlichsten Felder auf dem Brett",
            nl: "De gevaarlijkste velden op het bord"
          },
          {
            en: "Squares that are under attack",
            es: "Casillas que están bajo ataque",
            de: "Felder, die unter Angriff stehen",
            nl: "Velden die onder aanval zijn"
          },
          {
            en: "The center four squares only",
            es: "Solo las cuatro casillas centrales",
            de: "Nur die vier zentralen Felder",
            nl: "Alleen de vier centrale velden"
          }
        ],
        correct: 0,
        explanation: {
          en: "Critical square theory identifies specific squares in king endgames that, if controlled by the stronger side's king, guarantee victory regardless of optimal defense. These squares form geometric patterns related to piece positions and promotion squares. Understanding which squares are critical allows precise calculation—if you can reach them with your king while preventing opponent access, you win. This theoretical knowledge is essential for converting advantages in complex king endgames.",
          es: "La teoría de casillas críticas identifica casillas específicas en finales de damas que, si son controladas por la dama del lado más fuerte, garantizan victoria independientemente de la defensa óptima. Estas casillas forman patrones geométricos relacionados con posiciones de piezas y casillas de promoción. Entender qué casillas son críticas permite cálculo preciso—si puedes alcanzarlas con tu dama mientras previenes acceso del oponente, ganas. Este conocimiento teórico es esencial para convertir ventajas en finales de damas complejos.",
          de: "Die Theorie kritischer Felder identifiziert spezifische Felder in Damen-Endspielen, die, wenn sie von der Dame der stärkeren Seite kontrolliert werden, unabhängig von optimaler Verteidigung den Sieg garantieren. Diese Felder bilden geometrische Muster in Bezug auf Steinpositionen und Beförderungsfelder. Das Verständnis, welche Felder kritisch sind, ermöglicht präzise Berechnung—wenn du sie mit deiner Dame erreichen kannst und gleichzeitig den Gegnerzugang verhinderst, gewinnst du. Dieses theoretische Wissen ist wesentlich für die Umwandlung von Vorteilen in komplexen Damen-Endspielen.",
          nl: "Kritieke velden theorie identificeert specifieke velden in dam eindspelen die, als gecontroleerd door de dam van de sterkere kant, overwinning garanderen ongeacht optimale verdediging. Deze velden vormen geometrische patronen gerelateerd aan stuk posities en promotie velden. Begrijpen welke velden kritiek zijn stelt precieze berekening mogelijk—als je ze kunt bereiken met je dam terwijl je tegenstander toegang voorkomt, win je. Deze theoretische kennis is essentieel voor het omzetten van voordelen in complexe dam eindspelen."
        }
      },
      {
        question: {
          en: "What is 'piece coordination' in checkers strategy?",
          es: "¿Qué es la 'coordinación de piezas' en estrategia de damas?",
          de: "Was ist 'Steinkoordination' in der Dame-Strategie?",
          nl: "Wat is 'stuk coördinatie' in dammen strategie?"
        },
        options: [
          {
            en: "Arranging pieces to work together effectively",
            es: "Organizar piezas para trabajar juntas efectivamente",
            de: "Steine so anordnen, dass sie effektiv zusammenarbeiten",
            nl: "Stukken rangschikken om effectief samen te werken"
          },
          {
            en: "Keeping all pieces on the same diagonal",
            es: "Mantener todas las piezas en la misma diagonal",
            de: "Alle Steine auf der gleichen Diagonale halten",
            nl: "Alle stukken op dezelfde diagonaal houden"
          },
          {
            en: "Moving pieces in numerical order",
            es: "Mover piezas en orden numérico",
            de: "Steine in numerischer Reihenfolge bewegen",
            nl: "Stukken in numerieke volgorde bewegen"
          },
          {
            en: "Matching piece movements to opponent's",
            es: "Igualar movimientos de piezas a los del oponente",
            de: "Steinbewegungen an die des Gegners anpassen",
            nl: "Stuk bewegingen afstemmen op die van tegenstander"
          }
        ],
        correct: 0,
        explanation: {
          en: "Piece coordination refers to positioning your pieces so they support each other, control key diagonals together, and can execute tactical and strategic plans cohesively. Well-coordinated pieces multiply their effectiveness—they can create multiple threats simultaneously, defend each other, and control more board territory. Poor coordination leaves pieces isolated and vulnerable. Master players constantly improve piece coordination, ensuring their forces work as a unified whole rather than disconnected individuals.",
          es: "La coordinación de piezas se refiere a posicionar tus piezas para que se apoyen entre sí, controlen diagonales clave juntas y puedan ejecutar planes tácticos y estratégicos cohesivamente. Piezas bien coordinadas multiplican su efectividad—pueden crear múltiples amenazas simultáneamente, defenderse entre sí y controlar más territorio del tablero. Mala coordinación deja piezas aisladas y vulnerables. Los jugadores maestros mejoran constantemente la coordinación de piezas, asegurando que sus fuerzas trabajen como un todo unificado en lugar de individuos desconectados.",
          de: "Steinkoordination bezieht sich darauf, deine Steine so zu positionieren, dass sie sich gegenseitig unterstützen, wichtige Diagonalen zusammen kontrollieren und taktische und strategische Pläne kohäsiv ausführen können. Gut koordinierte Steine multiplizieren ihre Effektivität—sie können mehrere Bedrohungen gleichzeitig schaffen, sich gegenseitig verteidigen und mehr Brettterritorium kontrollieren. Schlechte Koordination lässt Steine isoliert und verwundbar. Meisterspieler verbessern ständig die Steinkoordination und stellen sicher, dass ihre Kräfte als einheitliches Ganzes arbeiten statt als getrennte Individuen.",
          nl: "Stuk coördinatie verwijst naar het positioneren van je stukken zodat ze elkaar ondersteunen, samen sleutel diagonalen controleren en tactische en strategische plannen cohesief kunnen uitvoeren. Goed gecoördineerde stukken vermenigvuldigen hun effectiviteit—ze kunnen meerdere bedreigingen tegelijkertijd creëren, elkaar verdedigen en meer bord territorium controleren. Slechte coördinatie laat stukken geïsoleerd en kwetsbaar. Meester spelers verbeteren constant stuk coördinatie, waarbij ervoor wordt gezorgd dat hun krachten werken als een verenigd geheel in plaats van losstaande individuen."
        }
      },
      {
        question: {
          en: "What is a 'thematic maneuver' in checkers?",
          es: "¿Qué es una 'maniobra temática' en damas?",
          de: "Was ist ein 'thematisches Manöver' beim Dame?",
          nl: "Wat is een 'thematisch manoeuvre' in dammen?"
        },
        options: [
          {
            en: "A recurring tactical or strategic pattern in certain positions",
            es: "Un patrón táctico o estratégico recurrente en ciertas posiciones",
            de: "Ein wiederkehrendes taktisches oder strategisches Muster in bestimmten Positionen",
            nl: "Een terugkerend tactisch of strategisch patroon in bepaalde posities"
          },
          {
            en: "A move based on the game's opening theme",
            es: "Un movimiento basado en el tema de apertura del juego",
            de: "Ein Zug basierend auf dem Eröffnungsthema des Spiels",
            nl: "Een zet gebaseerd op het openingsthema van het spel"
          },
          {
            en: "Following a pre-planned sequence",
            es: "Seguir una secuencia pre-planificada",
            de: "Einer vorgeplanten Sequenz folgen",
            nl: "Een vooraf gepland sequentie volgen"
          },
          {
            en: "Any famous historical move",
            es: "Cualquier movimiento histórico famoso",
            de: "Jeder berühmte historische Zug",
            nl: "Elke beroemde historische zet"
          }
        ],
        correct: 0,
        explanation: {
          en: "A thematic maneuver is a characteristic tactical or strategic idea that repeatedly appears in specific pawn structures or position types. Recognizing these themes allows players to quickly identify the correct plan without calculating from scratch. For example, certain openings feature thematic piece sacrifices or typical breakthrough patterns. Master players build a library of thematic maneuvers, enabling pattern recognition that speeds up decision-making and reveals hidden opportunities.",
          es: "Una maniobra temática es una idea táctica o estratégica característica que aparece repetidamente en estructuras de peones específicas o tipos de posición. Reconocer estos temas permite a los jugadores identificar rápidamente el plan correcto sin calcular desde cero. Por ejemplo, ciertas aperturas presentan sacrificios de piezas temáticos o patrones de avance típicos. Los jugadores maestros construyen una biblioteca de maniobras temáticas, permitiendo reconocimiento de patrones que acelera la toma de decisiones y revela oportunidades ocultas.",
          de: "Ein thematisches Manöver ist eine charakteristische taktische oder strategische Idee, die wiederholt in bestimmten Bauernstrukturen oder Positionstypen erscheint. Das Erkennen dieser Themen ermöglicht es Spielern, schnell den richtigen Plan zu identifizieren, ohne von Grund auf zu berechnen. Zum Beispiel weisen bestimmte Eröffnungen thematische Steinopfer oder typische Durchbruchmuster auf. Meisterspieler bauen eine Bibliothek thematischer Manöver auf, die Mustererkennung ermöglicht, die Entscheidungsfindung beschleunigt und verborgene Möglichkeiten offenbart.",
          nl: "Een thematisch manoeuvre is een karakteristiek tactisch of strategisch idee dat herhaaldelijk verschijnt in specifieke pion structuren of positie types. Het herkennen van deze thema's stelt spelers in staat snel het juiste plan te identificeren zonder vanaf nul te berekenen. Bijvoorbeeld, bepaalde openingen kenmerken thematische stuk offers of typische doorbraak patronen. Meester spelers bouwen een bibliotheek van thematische manoeuvres, wat patroonherkenning mogelijk maakt die besluitvorming versnelt en verborgen kansen onthult."
        }
      },
      {
        question: {
          en: "What is the 'minority attack' concept in checkers?",
          es: "¿Qué es el concepto de 'ataque minoritario' en damas?",
          de: "Was ist das Konzept des 'Minderheitsangriffs' beim Dame?",
          nl: "Wat is het 'minderheids aanval' concept in dammen?"
        },
        options: [
          {
            en: "Using fewer pieces to attack a larger enemy formation",
            es: "Usar menos piezas para atacar una formación enemiga más grande",
            de: "Weniger Steine verwenden, um eine größere feindliche Formation anzugreifen",
            nl: "Minder stukken gebruiken om een grotere vijandelijke formatie aan te vallen"
          },
          {
            en: "Attacking with only one piece",
            es: "Atacar con solo una pieza",
            de: "Mit nur einem Stein angreifen",
            nl: "Aanvallen met slechts één stuk"
          },
          {
            en: "A defensive strategy for the losing side",
            es: "Una estrategia defensiva para el lado perdedor",
            de: "Eine defensive Strategie für die verlierende Seite",
            nl: "Een defensieve strategie voor de verliezende kant"
          },
          {
            en: "Attacking only when outnumbered",
            es: "Atacar solo cuando estás superado en número",
            de: "Nur angreifen, wenn in der Unterzahl",
            nl: "Alleen aanvallen wanneer in de minderheid"
          }
        ],
        correct: 0,
        explanation: {
          en: "The minority attack is a paradoxical strategic concept where you use a smaller number of pieces on one flank to undermine and weaken a larger enemy pawn formation. By forcing favorable exchanges or creating weaknesses, the minority of pieces can disrupt the enemy structure despite numerical inferiority. This sophisticated strategy requires precise execution and deep understanding of pawn dynamics. It demonstrates how quality of position can overcome quantity of material.",
          es: "El ataque minoritario es un concepto estratégico paradójico donde usas un número menor de piezas en un flanco para socavar y debilitar una formación de peones enemiga más grande. Al forzar intercambios favorables o crear debilidades, la minoría de piezas puede interrumpir la estructura enemiga a pesar de inferioridad numérica. Esta estrategia sofisticada requiere ejecución precisa y comprensión profunda de dinámicas de peones. Demuestra cómo la calidad de posición puede superar la cantidad de material.",
          de: "Der Minderheitsangriff ist ein paradoxes strategisches Konzept, bei dem man eine kleinere Anzahl von Steinen auf einem Flügel verwendet, um eine größere feindliche Bauernformation zu untergraben und zu schwächen. Durch das Erzwingen günstiger Tausche oder das Schaffen von Schwächen kann die Minderheit von Steinen die feindliche Struktur trotz numerischer Unterlegenheit stören. Diese ausgefeilte Strategie erfordert präzise Ausführung und tiefes Verständnis der Bauerndynamik. Sie demonstriert, wie Positionsqualität Materialquantität überwinden kann.",
          nl: "De minderheids aanval is een paradoxaal strategisch concept waarbij je een kleiner aantal stukken op één vleugel gebruikt om een grotere vijandelijke pion formatie te ondermijnen en verzwakken. Door gunstige ruilen te forceren of zwakheden te creëren, kan de minderheid van stukken de vijandelijke structuur verstoren ondanks numerieke inferioriteit. Deze verfijnde strategie vereist precieze uitvoering en diep begrip van pion dynamiek. Het toont aan hoe kwaliteit van positie kwantiteit van materiaal kan overwinnen."
        }
      },
      {
        question: {
          en: "What is the importance of 'square counting' in checkers endgames?",
          es: "¿Cuál es la importancia del 'conteo de casillas' en finales de damas?",
          de: "Was ist die Bedeutung des 'Feldzählens' in Dame-Endspielen?",
          nl: "Wat is het belang van 'velden tellen' in dammen eindspelen?"
        },
        options: [
          {
            en: "Calculating if a piece can reach a critical square before the opponent",
            es: "Calcular si una pieza puede alcanzar una casilla crítica antes que el oponente",
            de: "Berechnen, ob ein Stein ein kritisches Feld vor dem Gegner erreichen kann",
            nl: "Berekenen of een stuk een kritiek veld eerder kan bereiken dan de tegenstander"
          },
          {
            en: "Counting how many squares are on the board",
            es: "Contar cuántas casillas hay en el tablero",
            de: "Zählen, wie viele Felder auf dem Brett sind",
            nl: "Tellen hoeveel velden er op het bord zijn"
          },
          {
            en: "Tracking the number of moves made",
            es: "Rastrear el número de movimientos hechos",
            de: "Die Anzahl der gemachten Züge verfolgen",
            nl: "Het aantal gemaakte zetten bijhouden"
          },
          {
            en: "Ensuring equal piece distribution",
            es: "Asegurar distribución igual de piezas",
            de: "Gleichmäßige Steinverteilung sicherstellen",
            nl: "Gelijke stuk distributie garanderen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Square counting is a critical endgame technique where you calculate the number of moves required for each side's pieces to reach key squares (like promotion squares or defensive positions). By counting, you can determine if your piece arrives first or if the opponent can intercept. This precise calculation is essential in race positions and breakthrough scenarios—being off by even one move changes the outcome from win to loss. Mastering square counting is fundamental to endgame expertise.",
          es: "El conteo de casillas es una técnica de final crítica donde calculas el número de movimientos requeridos para que las piezas de cada lado alcancen casillas clave (como casillas de promoción o posiciones defensivas). Contando, puedes determinar si tu pieza llega primero o si el oponente puede interceptar. Este cálculo preciso es esencial en posiciones de carrera y escenarios de avance—estar equivocado por incluso un movimiento cambia el resultado de victoria a derrota. Dominar el conteo de casillas es fundamental para la experiencia en finales.",
          de: "Feldzählen ist eine kritische Endspieltechnik, bei der man die Anzahl der Züge berechnet, die für die Steine jeder Seite erforderlich sind, um Schlüsselfelder zu erreichen (wie Beförderungsfelder oder Verteidigungspositionen). Durch Zählen kann man bestimmen, ob der eigene Stein zuerst ankommt oder ob der Gegner abfangen kann. Diese präzise Berechnung ist in Rennpositionen und Durchbruchszenarien wesentlich—ein Fehler von nur einem Zug ändert das Ergebnis von Sieg zu Niederlage. Das Beherrschen des Feldzählens ist grundlegend für Endspielexpertise.",
          nl: "Velden tellen is een kritieke eindspel techniek waarbij je het aantal zetten berekent dat nodig is voor de stukken van elke kant om sleutelvelden te bereiken (zoals promotie velden of defensieve posities). Door te tellen kun je bepalen of je stuk als eerste aankomt of dat de tegenstander kan onderscheppen. Deze precieze berekening is essentieel in race posities en doorbraak scenario's—zelfs één zet ernaast zitten verandert de uitkomst van winst naar verlies. Het beheersen van velden tellen is fundamenteel voor eindspel expertise."
        }
      },
      {
        question: {
          en: "What is 'outflanking' in king endgames?",
          es: "¿Qué es 'flanquear' en finales de damas?",
          de: "Was ist 'Umfassen' in Damen-Endspielen?",
          nl: "Wat is 'omsingelen' in dam eindspelen?"
        },
        options: [
          {
            en: "Maneuvering your king around the enemy king to access key squares",
            es: "Maniobrar tu dama alrededor de la dama enemiga para acceder a casillas clave",
            de: "Deine Dame um die feindliche Dame manövrieren, um Zugang zu Schlüsselfeldern zu erhalten",
            nl: "Je dam manoeuvreren rond de vijandelijke dam om toegang te krijgen tot sleutelvelden"
          },
          {
            en: "Attacking from the side of the board",
            es: "Atacar desde el lado del tablero",
            de: "Von der Seite des Bretts angreifen",
            nl: "Aanvallen vanaf de zijkant van het bord"
          },
          {
            en: "Surrounding opponent pieces completely",
            es: "Rodear completamente las piezas del oponente",
            de: "Gegnersteine vollständig umzingeln",
            nl: "Tegenstander stukken volledig omsingelen"
          },
          {
            en: "Moving to the flanks of the board",
            es: "Moverse a los flancos del tablero",
            de: "Zu den Flügeln des Bretts bewegen",
            nl: "Naar de vleugels van het bord bewegen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Outflanking is a crucial king endgame technique where you maneuver your king to bypass the enemy king's defensive position, gaining access to critical squares behind or beside it. This often involves triangulation or tempo moves to circumvent opposition. Successful outflanking allows penetration into enemy territory, support of your own pieces, or prevention of enemy piece advancement. It's a fundamental skill for converting small advantages into wins in king endgames.",
          es: "Flanquear es una técnica crucial de final de damas donde maniobras tu dama para eludir la posición defensiva de la dama enemiga, ganando acceso a casillas críticas detrás o al lado de ella. Esto a menudo involucra triangulación o movimientos de tempo para eludir la oposición. Un flanqueo exitoso permite penetración en territorio enemigo, apoyo de tus propias piezas o prevención de avance de piezas enemigas. Es una habilidad fundamental para convertir pequeñas ventajas en victorias en finales de damas.",
          de: "Umfassen ist eine entscheidende Damen-Endspieltechnik, bei der man seine Dame manövriert, um die Verteidigungsposition der feindlichen Dame zu umgehen und Zugang zu kritischen Feldern dahinter oder daneben zu erhalten. Dies beinhaltet oft Triangulation oder Tempo-Züge, um die Opposition zu umgehen. Erfolgreiches Umfassen ermöglicht Penetration in feindliches Territorium, Unterstützung eigener Steine oder Verhinderung feindlichen Steinfortschritts. Es ist eine grundlegende Fähigkeit zum Umwandeln kleiner Vorteile in Siege in Damen-Endspielen.",
          nl: "Omsingelen is een cruciale dam eindspel techniek waarbij je je dam manoeuvreert om de defensieve positie van de vijandelijke dam te omzeilen, waarbij toegang wordt verkregen tot kritieke velden erachter of ernaast. Dit omvat vaak triangulatie of tempo zetten om oppositie te omzeilen. Succesvol omsingelen maakt penetratie in vijandelijk territorium mogelijk, ondersteuning van je eigen stukken of preventie van vijandelijke stuk vooruitgang. Het is een fundamentele vaardigheid voor het omzetten van kleine voordelen in winsten in dam eindspelen."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level7;
  } else if (typeof window !== 'undefined') {
    window.level7 = level7;
  }
})();
