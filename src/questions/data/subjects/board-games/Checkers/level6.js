// Quiz Template - Level 6: Bord spelletjes - Checkers
(function() {
  const level6 = {
    name: {
      en: "Checkers/Draughts - Complex Combinations",
      es: "Damas - Combinaciones Complejas",
      de: "Dame - Komplexe Kombinationen",
      nl: "Dammen - Complexe Combinaties"
    },
    questions: [
      {
        question: {
          en: "What is 'zugzwang' in checkers?",
          es: "¿Qué es 'zugzwang' en damas?",
          de: "Was ist 'Zugzwang' beim Dame?",
          nl: "Wat is 'zugzwang' in dammen?"
        },
        options: [
          {
            en: "A position where any move worsens your position",
            es: "Una posición donde cualquier movimiento empeora tu posición",
            de: "Eine Position, bei der jeder Zug die eigene Stellung verschlechtert",
            nl: "Een positie waarbij elke zet je positie verslechtert"
          },
          {
            en: "A forced capture sequence",
            es: "Una secuencia de captura forzada",
            de: "Eine erzwungene Schlagsequenz",
            nl: "Een gedwongen slagreeks"
          },
          {
            en: "Running out of time",
            es: "Quedarse sin tiempo",
            de: "Zeitnot",
            nl: "Zonder tijd komen te zitten"
          },
          {
            en: "A double threat",
            es: "Una amenaza doble",
            de: "Eine Doppeldrohung",
            nl: "Een dubbele dreiging"
          }
        ],
        correct: 0,
        explanation: {
          en: "Zugzwang is a German term meaning 'compulsion to move,' describing a position where you would prefer to pass but must move, and any available move worsens your position. Creating zugzwang is a powerful endgame technique in checkers.",
          es: "Zugzwang es un término alemán que significa 'compulsión de mover,' describiendo una posición donde preferirías pasar pero debes mover, y cualquier movimiento disponible empeora tu posición. Crear zugzwang es una técnica de final poderosa en damas.",
          de: "Zugzwang ist ein deutscher Begriff, der 'Zwang zu ziehen' bedeutet und eine Position beschreibt, in der man lieber passen würde, aber ziehen muss, und jeder verfügbare Zug die eigene Position verschlechtert. Zugzwang zu schaffen ist eine mächtige Endspieltechnik beim Dame.",
          nl: "Zugzwang is een Duitse term die 'dwang om te zetten' betekent, waarbij een positie wordt beschreven waarin je liever zou passen maar moet zetten, en elke beschikbare zet je positie verslechtert. Zugzwang creëren is een krachtige eindspel techniek in dammen."
        }
      },
      {
        question: {
          en: "What is the '11-15 ballot' in competitive checkers?",
          es: "¿Qué es el 'ballot 11-15' en damas competitivas?",
          de: "Was ist die '11-15-Ballot' im Wettkampf-Dame?",
          nl: "Wat is de '11-15 ballot' in competitief dammen?"
        },
        options: [
          {
            en: "An opening move sequence drawn randomly to ensure variety",
            es: "Una secuencia de movimiento de apertura sorteada aleatoriamente para asegurar variedad",
            de: "Eine zufällig gezogene Eröffnungszugfolge zur Sicherstellung von Vielfalt",
            nl: "Een willekeurig getrokken opening zet sequentie om variëteit te garanderen"
          },
          {
            en: "A scoring system",
            es: "Un sistema de puntuación",
            de: "Ein Punktesystem",
            nl: "Een scoresysteem"
          },
          {
            en: "A time control format",
            es: "Un formato de control de tiempo",
            de: "Ein Zeitkontrollformat",
            nl: "Een tijdcontrole formaat"
          },
          {
            en: "A tournament structure",
            es: "Una estructura de torneo",
            de: "Eine Turnierstruktur",
            nl: "Een toernooi structuur"
          }
        ],
        correct: 0,
        explanation: {
          en: "The ballot system in competitive checkers uses randomly selected opening sequences (like 11-15, indicating specific first moves) to prevent draws from over-analyzed positions and ensure varied, interesting games. This prevents top players from simply memorizing draws.",
          es: "El sistema de ballot en damas competitivas usa secuencias de apertura seleccionadas aleatoriamente (como 11-15, indicando primeros movimientos específicos) para prevenir tablas de posiciones sobre-analizadas y asegurar juegos variados e interesantes. Esto previene que jugadores top simplemente memoricen tablas.",
          de: "Das Ballot-System im Wettkampf-Dame verwendet zufällig ausgewählte Eröffnungssequenzen (wie 11-15, die spezifische erste Züge angeben), um Remis aus überanalysierten Positionen zu verhindern und abwechslungsreiche, interessante Spiele zu gewährleisten. Dies verhindert, dass Top-Spieler einfach Remis auswendig lernen.",
          nl: "Het ballot systeem in competitief dammen gebruikt willekeurig geselecteerde opening sequenties (zoals 11-15, wat specifieke eerste zetten aangeeft) om remises van overgeanalyseerde posities te voorkomen en gevarieerde, interessante games te garanderen. Dit voorkomt dat topspelers simpelweg remises uit het hoofd leren."
        }
      },
      {
        question: {
          en: "What is a 'mill' in checkers tactics?",
          es: "¿Qué es un 'molino' en tácticas de damas?",
          de: "Was ist eine 'Mühle' in der Dame-Taktik?",
          nl: "Wat is een 'molen' in dammen tactieken?"
        },
        options: [
          {
            en: "A repetitive tactical pattern grinding down opponent's position",
            es: "Un patrón táctico repetitivo que desgasta la posición del oponente",
            de: "Ein wiederholendes taktisches Muster, das die gegnerische Position zermürbt",
            nl: "Een repetitief tactisch patroon dat de tegenstander positie slijt"
          },
          {
            en: "A circular piece movement",
            es: "Un movimiento circular de piezas",
            de: "Eine kreisförmige Steinbewegung",
            nl: "Een cirkelvormige stuk beweging"
          },
          {
            en: "A trapped piece",
            es: "Una pieza atrapada",
            de: "Ein gefangener Stein",
            nl: "Een gevangen stuk"
          },
          {
            en: "A defensive formation",
            es: "Una formación defensiva",
            de: "Eine Verteidigungsformation",
            nl: "Een defensieve formatie"
          }
        ],
        correct: 0,
        explanation: {
          en: "A mill is a tactical pattern where a player can repeatedly threaten the same structural weakness through a series of forcing moves, gradually grinding down the opponent's position like a mill grinding grain, until a decisive advantage is achieved.",
          es: "Un molino es un patrón táctico donde un jugador puede amenazar repetidamente la misma debilidad estructural a través de una serie de movimientos forzantes, desgastando gradualmente la posición del oponente como un molino muele grano, hasta que se logra una ventaja decisiva.",
          de: "Eine Mühle ist ein taktisches Muster, bei dem ein Spieler durch eine Reihe erzwingender Züge wiederholt dieselbe strukturelle Schwäche bedrohen kann, wodurch die Position des Gegners allmählich wie eine Mühle Getreide mahlt, bis ein entscheidender Vorteil erreicht ist.",
          nl: "Een molen is een tactisch patroon waarbij een speler herhaaldelijk dezelfde structurele zwakte kan bedreigen door een reeks dwingende zetten, waarbij geleidelijk de positie van de tegenstander wordt gesleten zoals een molen graan maalt, totdat een beslissend voordeel is bereikt."
        }
      },
      {
        question: {
          en: "What characterizes the 'Pioneer' endgame formation?",
          es: "¿Qué caracteriza la formación de final 'Pionero'?",
          de: "Was charakterisiert die 'Pionier'-Endspielformation?",
          nl: "Wat kenmerkt de 'Pionier' eindspel formatie?"
        },
        options: [
          {
            en: "An advanced piece sacrificing itself to create winning breakthrough",
            es: "Una pieza avanzada sacrificándose para crear avance ganador",
            de: "Ein fortgeschrittener Stein, der sich opfert, um einen gewinnenden Durchbruch zu schaffen",
            nl: "Een gevorderd stuk dat zichzelf opoffert om winnende doorbraak te creëren"
          },
          {
            en: "The first piece to reach king row",
            es: "La primera pieza en alcanzar la fila de damas",
            de: "Der erste Stein, der die Damenreihe erreicht",
            nl: "Het eerste stuk dat de damrij bereikt"
          },
          {
            en: "A historical opening variation",
            es: "Una variación de apertura histórica",
            de: "Eine historische Eröffnungsvariante",
            nl: "Een historische opening variatie"
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
          en: "The Pioneer formation involves an advanced piece that pushes deep into enemy territory, often accepting sacrifice to clear the path for following pieces to achieve breakthrough and promotion. Like a pioneer clearing the way, this piece enables others' advancement.",
          es: "La formación Pionero involucra una pieza avanzada que penetra profundamente en territorio enemigo, a menudo aceptando sacrificio para despejar el camino para que las piezas siguientes logren avance y promoción. Como un pionero despejando el camino, esta pieza permite el avance de otras.",
          de: "Die Pionier-Formation beinhaltet einen fortgeschrittenen Stein, der tief in feindliches Territorium vordringt und oft ein Opfer akzeptiert, um den Weg für nachfolgende Steine zum Durchbruch und zur Beförderung freizumachen. Wie ein Pionier, der den Weg ebnet, ermöglicht dieser Stein den Fortschritt anderer.",
          nl: "De Pionier formatie omvat een gevorderd stuk dat diep in vijandelijk territorium doordringt, waarbij vaak een offer wordt geaccepteerd om de weg vrij te maken voor volgende stukken om doorbraak en promotie te bereiken. Zoals een pionier die de weg effent, maakt dit stuk de vooruitgang van anderen mogelijk."
        }
      },
      {
        question: {
          en: "What is the 'Petterson Problem' famous for in checkers composition?",
          es: "¿Por qué es famoso el 'Problema de Petterson' en la composición de damas?",
          de: "Wofür ist das 'Petterson-Problem' in der Dame-Komposition berühmt?",
          nl: "Waar is het 'Petterson Probleem' beroemd om in dammen compositie?"
        },
        options: [
          {
            en: "A complex 4-move combination with multiple sacrifices",
            es: "Una combinación compleja de 4 movimientos con múltiples sacrificios",
            de: "Eine komplexe 4-Züge-Kombination mit mehreren Opfern",
            nl: "Een complexe 4-zetten combinatie met meerdere offers"
          },
          {
            en: "The longest endgame ever composed",
            es: "El final más largo jamás compuesto",
            de: "Das längste jemals komponierte Endspiel",
            nl: "Het langste ooit gecomponeerde eindspel"
          },
          {
            en: "An unsolvable position",
            es: "Una posición irresoluble",
            de: "Eine unlösbare Position",
            nl: "Een onoplosbare positie"
          },
          {
            en: "A draw by repetition",
            es: "Tablas por repetición",
            de: "Remis durch Wiederholung",
            nl: "Remise door herhaling"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Petterson Problem is a celebrated composition requiring a brilliant 4-move combination involving multiple piece sacrifices to achieve victory from a seemingly lost position. It demonstrates the depth and beauty possible in checkers tactics, inspiring generations of problem composers.",
          es: "El Problema de Petterson es una composición célebre que requiere una brillante combinación de 4 movimientos involucrando múltiples sacrificios de piezas para lograr victoria desde una posición aparentemente perdida. Demuestra la profundidad y belleza posible en tácticas de damas, inspirando generaciones de compositores de problemas.",
          de: "Das Petterson-Problem ist eine gefeierte Komposition, die eine brillante 4-Züge-Kombination mit mehreren Steinopfern erfordert, um aus einer scheinbar verlorenen Position zu siegen. Es demonstriert die Tiefe und Schönheit, die in der Dame-Taktik möglich ist, und inspiriert Generationen von Problem-Komponisten.",
          nl: "Het Petterson Probleem is een gevierde compositie die een briljante 4-zetten combinatie vereist met meerdere stuk offers om overwinning te behalen vanuit een ogenschijnlijk verloren positie. Het demonstreert de diepte en schoonheid mogelijk in dammen tactieken, wat generaties probleem componisten inspireert."
        }
      },
      {
        question: {
          en: "What is a 'swindle' in competitive checkers?",
          es: "¿Qué es un 'engaño' en damas competitivas?",
          de: "Was ist ein 'Schwindel' im Wettkampf-Dame?",
          nl: "Wat is een 'zwendel' in competitief dammen?"
        },
        options: [
          {
            en: "Setting a trap in a losing position hoping opponent makes an error",
            es: "Tender una trampa en una posición perdedora esperando que el oponente cometa un error",
            de: "Eine Falle in verlorener Position stellen in der Hoffnung auf einen Gegnerfehler",
            nl: "Een val zetten in een verliezende positie hopend dat de tegenstander een fout maakt"
          },
          {
            en: "An illegal move",
            es: "Un movimiento ilegal",
            de: "Ein illegaler Zug",
            nl: "Een illegale zet"
          },
          {
            en: "Rapid piece exchanges",
            es: "Intercambios rápidos de piezas",
            de: "Schnelle Steintausche",
            nl: "Snelle stukruilen"
          },
          {
            en: "Time pressure tactics",
            es: "Tácticas de presión de tiempo",
            de: "Zeitdruck-Taktiken",
            nl: "Tijdsdruk tactieken"
          }
        ],
        correct: 0,
        explanation: {
          en: "A swindle is a deceptive trap set in an objectively losing position, hoping to lure the opponent into an error through complications or subtle tactical tricks. While theoretically losing, swindles can salvage draws or even wins from skilled execution and opponent mistakes.",
          es: "Un engaño es una trampa engañosa tendida en una posición objetivamente perdedora, esperando atraer al oponente a un error a través de complicaciones o trucos tácticos sutiles. Aunque teóricamente perdedoras, los engaños pueden salvar tablas o incluso victorias de ejecución hábil y errores del oponente.",
          de: "Ein Schwindel ist eine täuschende Falle, die in einer objektiv verlorenen Position gestellt wird, in der Hoffnung, den Gegner durch Komplikationen oder subtile taktische Tricks zu einem Fehler zu verleiten. Obwohl theoretisch verlierend, können Schwindel durch geschickte Ausführung und Gegnerfehler Remis oder sogar Siege retten.",
          nl: "Een zwendel is een misleidende val gezet in een objectief verliezende positie, hopend de tegenstander tot een fout te verleiden door complicaties of subtiele tactische trucs. Hoewel theoretisch verliezend, kunnen zwendels remises of zelfs winsten redden door bekwame uitvoering en tegenstander fouten."
        }
      },
      {
        question: {
          en: "What is the 'double corner' endgame principle?",
          es: "¿Qué es el principio de final de 'esquina doble'?",
          de: "Was ist das 'Doppelecken'-Endspiel-Prinzip?",
          nl: "Wat is het 'dubbele hoek' eindspel principe?"
        },
        options: [
          {
            en: "Controlling both corner diagonals to dominate the board",
            es: "Controlar ambas diagonales de esquina para dominar el tablero",
            de: "Beide Eckdiagonalen kontrollieren, um das Brett zu dominieren",
            nl: "Beide hoek diagonalen controleren om het bord te domineren"
          },
          {
            en: "Having two pieces in corner squares",
            es: "Tener dos piezas en casillas de esquina",
            de: "Zwei Steine in Eckfeldern haben",
            nl: "Twee stukken in hoekvelden hebben"
          },
          {
            en: "Trapping opponent in a corner",
            es: "Atrapar al oponente en una esquina",
            de: "Den Gegner in einer Ecke fangen",
            nl: "Tegenstander in een hoek vangen"
          },
          {
            en: "A specific two-king endgame",
            es: "Un final específico de dos damas",
            de: "Ein spezifisches Zwei-Damen-Endspiel",
            nl: "Een specifiek twee-dam eindspel"
          }
        ],
        correct: 0,
        explanation: {
          en: "The double corner principle involves controlling the two main corner diagonals, which provide the longest paths across the board. This control maximizes king mobility, restricts opponent movement, and creates winning opportunities by dominating the board's key arteries.",
          es: "El principio de esquina doble involucra controlar las dos diagonales de esquina principales, que proporcionan los caminos más largos a través del tablero. Este control maximiza la movilidad de damas, restringe el movimiento del oponente y crea oportunidades ganadoras dominando las arterias clave del tablero.",
          de: "Das Doppelecken-Prinzip beinhaltet die Kontrolle der beiden Haupteckdiagonalen, die die längsten Wege über das Brett bieten. Diese Kontrolle maximiert die Damenmobilität, schränkt Gegnerbewegungen ein und schafft Gewinnchancen durch Dominanz über die Schlüsseladern des Bretts.",
          nl: "Het dubbele hoek principe omvat het controleren van de twee hoofd hoek diagonalen, die de langste paden over het bord bieden. Deze controle maximaliseert dam mobiliteit, beperkt tegenstander beweging en creëert winnende kansen door de sleutel slagaders van het bord te domineren."
        }
      },
      {
        question: {
          en: "What is a 'phantom piece' in advanced calculation?",
          es: "¿Qué es una 'pieza fantasma' en cálculo avanzado?",
          de: "Was ist ein 'Phantomstein' in fortgeschrittener Berechnung?",
          nl: "Wat is een 'fantoom stuk' in geavanceerde berekening?"
        },
        options: [
          {
            en: "Visualizing future piece positions during calculation",
            es: "Visualizar posiciones futuras de piezas durante el cálculo",
            de: "Zukünftige Steinpositionen während der Berechnung visualisieren",
            nl: "Toekomstige stuk posities visualiseren tijdens berekening"
          },
          {
            en: "A captured piece",
            es: "Una pieza capturada",
            de: "Ein geschlagener Stein",
            nl: "Een geslagen stuk"
          },
          {
            en: "An invisible move",
            es: "Un movimiento invisible",
            de: "Ein unsichtbarer Zug",
            nl: "Een onzichtbare zet"
          },
          {
            en: "A hypothetical opponent piece",
            es: "Una pieza hipotética del oponente",
            de: "Ein hypothetischer Gegnerstein",
            nl: "Een hypothetisch tegenstander stuk"
          }
        ],
        correct: 0,
        explanation: {
          en: "Phantom pieces are mental visualizations of where pieces will be positioned after a calculated sequence of moves. Advanced players use this technique to 'see' several moves ahead, calculating complex variations by mentally placing phantom pieces on future squares without moving physical pieces.",
          es: "Las piezas fantasma son visualizaciones mentales de dónde estarán posicionadas las piezas después de una secuencia calculada de movimientos. Jugadores avanzados usan esta técnica para 'ver' varios movimientos adelante, calculando variaciones complejas colocando mentalmente piezas fantasma en casillas futuras sin mover piezas físicas.",
          de: "Phantomsteine sind mentale Visualisierungen davon, wo Steine nach einer berechneten Zugfolge positioniert sein werden. Fortgeschrittene Spieler nutzen diese Technik, um mehrere Züge voraus zu 'sehen', indem sie komplexe Varianten berechnen, indem sie mental Phantomsteine auf zukünftige Felder setzen, ohne physische Steine zu bewegen.",
          nl: "Fantoom stukken zijn mentale visualisaties van waar stukken gepositioneerd zullen zijn na een berekende reeks zetten. Geavanceerde spelers gebruiken deze techniek om meerdere zetten vooruit te 'zien', waarbij complexe variaties worden berekend door mentaal fantoom stukken op toekomstige velden te plaatsen zonder fysieke stukken te verplaatsen."
        }
      },
      {
        question: {
          en: "What is the 'breakthrough sacrifice' tactical motif?",
          es: "¿Qué es el motivo táctico del 'sacrificio de avance'?",
          de: "Was ist das 'Durchbruchopfer'-Taktik-Motiv?",
          nl: "Wat is het 'doorbraak offer' tactisch motief?"
        },
        options: [
          {
            en: "Sacrificing material to create unstoppable promotion threat",
            es: "Sacrificar material para crear amenaza de promoción imparable",
            de: "Material opfern, um unstoppbare Beförderungsdrohung zu schaffen",
            nl: "Materiaal opofferen om onstuitbare promotie dreiging te creëren"
          },
          {
            en: "Breaking through a defensive wall",
            es: "Atravesar un muro defensivo",
            de: "Durch eine Verteidigungsmauer brechen",
            nl: "Door een verdedigingsmuur breken"
          },
          {
            en: "A sudden king dash",
            es: "Un dash repentino de dama",
            de: "Ein plötzlicher Damen-Sprint",
            nl: "Een plotselinge dam sprint"
          },
          {
            en: "Attacking the center",
            es: "Atacar el centro",
            de: "Das Zentrum angreifen",
            nl: "Het centrum aanvallen"
          }
        ],
        correct: 0,
        explanation: {
          en: "A breakthrough sacrifice involves giving up one or more pieces to clear the path for another piece to reach the king row unstoppably. This tactical motif often transforms material disadvantage into victory through the power of an unpreventable promotion creating decisive king advantage.",
          es: "Un sacrificio de avance implica entregar una o más piezas para despejar el camino para que otra pieza alcance la fila de damas de manera imparable. Este motivo táctico a menudo transforma desventaja material en victoria a través del poder de una promoción inevitable creando ventaja decisiva de dama.",
          de: "Ein Durchbruchopfer beinhaltet die Aufgabe eines oder mehrerer Steine, um den Weg für einen anderen Stein freizumachen, um unstoppbar die Damenreihe zu erreichen. Dieses Taktik-Motiv verwandelt oft materiellen Nachteil in Sieg durch die Kraft einer unaufhaltsamen Beförderung, die entscheidenden Damenvorteil schafft.",
          nl: "Een doorbraak offer houdt in dat één of meer stukken worden opgegeven om de weg vrij te maken voor een ander stuk om onstuitbaar de damrij te bereiken. Dit tactisch motief transformeert vaak materiaal nadeel in overwinning door de kracht van een onvermijdelijke promotie die beslissend dam voordeel creëert."
        }
      },
      {
        question: {
          en: "What is 'retrograde analysis' in checkers endgame databases?",
          es: "¿Qué es el 'análisis retrógrado' en bases de datos de finales de damas?",
          de: "Was ist 'Retrograde Analyse' in Dame-Endspiel-Datenbanken?",
          nl: "Wat is 'retrograde analyse' in dammen eindspel databases?"
        },
        options: [
          {
            en: "Working backward from winning positions to find optimal moves",
            es: "Trabajar hacia atrás desde posiciones ganadoras para encontrar movimientos óptimos",
            de: "Von Gewinnpositionen rückwärts arbeiten, um optimale Züge zu finden",
            nl: "Achteruit werken vanuit winnende posities om optimale zetten te vinden"
          },
          {
            en: "Analyzing past games",
            es: "Analizar juegos pasados",
            de: "Vergangene Spiele analysieren",
            nl: "Eerdere games analyseren"
          },
          {
            en: "Studying old opening theory",
            es: "Estudiar teoría de apertura antigua",
            de: "Alte Eröffnungstheorie studieren",
            nl: "Oude openingstheorie bestuderen"
          },
          {
            en: "Reversing moves in a game",
            es: "Revertir movimientos en un juego",
            de: "Züge in einem Spiel umkehren",
            nl: "Zetten in een game omkeren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Retrograde analysis is a computer technique that works backward from known winning positions (like one king versus none) to systematically prove all positions leading to those wins. This method built comprehensive endgame databases showing perfect play for complex positions, revolutionizing checkers theory.",
          es: "El análisis retrógrado es una técnica de computadora que trabaja hacia atrás desde posiciones ganadoras conocidas (como una dama contra ninguna) para probar sistemáticamente todas las posiciones que conducen a esas victorias. Este método construyó bases de datos de finales exhaustivas mostrando juego perfecto para posiciones complejas, revolucionando la teoría de damas.",
          de: "Retrograde Analyse ist eine Computertechnik, die von bekannten Gewinnpositionen (wie eine Dame gegen keine) rückwärts arbeitet, um systematisch alle zu diesen Siegen führenden Positionen zu beweisen. Diese Methode baute umfassende Endspiel-Datenbanken auf, die perfektes Spiel für komplexe Positionen zeigen, und revolutionierte die Dame-Theorie.",
          nl: "Retrograde analyse is een computer techniek die achteruit werkt vanuit bekende winnende posities (zoals één dam tegen geen) om systematisch alle posities te bewijzen die naar die winsten leiden. Deze methode bouwde uitgebreide eindspel databases die perfect spel tonen voor complexe posities, wat dammen theorie revolutioneerde."
        }
      },
      {
        question: {
          en: "What is the 'clearance sacrifice' in combination play?",
          es: "¿Qué es el 'sacrificio de despeje' en juego de combinación?",
          de: "Was ist das 'Räumungsopfer' im Kombinationsspiel?",
          nl: "Wat is het 'opruim offer' in combinatie spel?"
        },
        options: [
          {
            en: "Sacrificing a piece to clear a square for another piece's use",
            es: "Sacrificar una pieza para despejar una casilla para uso de otra pieza",
            de: "Einen Stein opfern, um ein Feld für die Nutzung eines anderen Steins freizumachen",
            nl: "Een stuk opofferen om een veld vrij te maken voor gebruik van een ander stuk"
          },
          {
            en: "Trading all pieces to simplify",
            es: "Intercambiar todas las piezas para simplificar",
            de: "Alle Steine tauschen zur Vereinfachung",
            nl: "Alle stukken ruilen om te vereenvoudigen"
          },
          {
            en: "Removing opponent's pieces",
            es: "Eliminar piezas del oponente",
            de: "Gegnersteine entfernen",
            nl: "Tegenstander stukken verwijderen"
          },
          {
            en: "Clearing the king row",
            es: "Despejar la fila de damas",
            de: "Die Damenreihe räumen",
            nl: "De damrij opruimen"
          }
        ],
        correct: 0,
        explanation: {
          en: "A clearance sacrifice gives up a piece specifically to vacate a critical square, allowing another piece to occupy that square with decisive effect. This sophisticated tactical motif often appears in complex combinations where precise square control determines the outcome.",
          es: "Un sacrificio de despeje entrega una pieza específicamente para vaciar una casilla crítica, permitiendo que otra pieza ocupe esa casilla con efecto decisivo. Este motivo táctico sofisticado a menudo aparece en combinaciones complejas donde el control preciso de casillas determina el resultado.",
          de: "Ein Räumungsopfer gibt einen Stein spezifisch auf, um ein kritisches Feld zu räumen, wodurch ein anderer Stein dieses Feld mit entscheidender Wirkung besetzen kann. Dieses ausgefeilte Taktik-Motiv erscheint oft in komplexen Kombinationen, bei denen präzise Feldkontrolle das Ergebnis bestimmt.",
          nl: "Een opruim offer geeft een stuk op specifiek om een kritiek veld te ontruimen, waardoor een ander stuk dat veld kan bezetten met beslissend effect. Dit verfijnde tactisch motief verschijnt vaak in complexe combinaties waarbij nauwkeurige veldcontrole de uitkomst bepaalt."
        }
      },
      {
        question: {
          en: "What is the significance of '6-piece endgame tablebases' in checkers?",
          es: "¿Cuál es la importancia de las 'tablebases de finales de 6 piezas' en damas?",
          de: "Was ist die Bedeutung von '6-Stein-Endspiel-Tablebases' beim Dame?",
          nl: "Wat is de betekenis van '6-stuk eindspel tablebases' in dammen?"
        },
        options: [
          {
            en: "Perfect play solutions for all positions with 6 or fewer pieces",
            es: "Soluciones de juego perfecto para todas las posiciones con 6 o menos piezas",
            de: "Perfekte Spiel-Lösungen für alle Positionen mit 6 oder weniger Steinen",
            nl: "Perfecte spel oplossingen voor alle posities met 6 of minder stukken"
          },
          {
            en: "A collection of 6 important endgames",
            es: "Una colección de 6 finales importantes",
            de: "Eine Sammlung von 6 wichtigen Endspielen",
            nl: "Een verzameling van 6 belangrijke eindspelen"
          },
          {
            en: "Endgames lasting 6 moves",
            es: "Finales que duran 6 movimientos",
            de: "Endspiele, die 6 Züge dauern",
            nl: "Eindspelen die 6 zetten duren"
          },
          {
            en: "6 master-level endgame studies",
            es: "6 estudios de final de nivel maestro",
            de: "6 Meisterniveau-Endspielstudien",
            nl: "6 meester-niveau eindspel studies"
          }
        ],
        correct: 0,
        explanation: {
          en: "6-piece endgame tablebases contain computer-calculated perfect play for every possible position with 6 or fewer total pieces on the board, definitively solving these endgames. This represents billions of positions analyzed with absolute precision, providing players with perfect theoretical knowledge for these endings.",
          es: "Las tablebases de finales de 6 piezas contienen juego perfecto calculado por computadora para cada posición posible con 6 o menos piezas totales en el tablero, resolviendo definitivamente estos finales. Esto representa miles de millones de posiciones analizadas con precisión absoluta, proporcionando a los jugadores conocimiento teórico perfecto para estos finales.",
          de: "6-Stein-Endspiel-Tablebases enthalten computerberechnetes perfektes Spiel für jede mögliche Position mit 6 oder weniger Gesamtsteinen auf dem Brett, wodurch diese Endspiele definitiv gelöst werden. Dies repräsentiert Milliarden von Positionen, die mit absoluter Präzision analysiert wurden, und bietet Spielern perfektes theoretisches Wissen für diese Endspiele.",
          nl: "6-stuk eindspel tablebases bevatten computer berekend perfect spel voor elke mogelijke positie met 6 of minder totale stukken op het bord, waarbij deze eindspelen definitief worden opgelost. Dit vertegenwoordigt miljarden posities geanalyseerd met absolute precisie, waarbij spelers perfect theoretisch kennis krijgen voor deze eindspelen."
        }
      },
      {
        question: {
          en: "What is a 'deflection sacrifice' in checkers tactics?",
          es: "¿Qué es un 'sacrificio de desviación' en tácticas de damas?",
          de: "Was ist ein 'Ablenkungsopfer' in der Dame-Taktik?",
          nl: "Wat is een 'afleiding offer' in dammen tactieken?"
        },
        options: [
          {
            en: "Forcing an opponent piece away from defending a critical square",
            es: "Forzar una pieza del oponente lejos de defender una casilla crítica",
            de: "Einen Gegnerstein von der Verteidigung eines kritischen Feldes wegzwingen",
            nl: "Een tegenstander stuk dwingen weg van het verdedigen van een kritiek veld"
          },
          {
            en: "Distracting the opponent's attention",
            es: "Distraer la atención del oponente",
            de: "Die Aufmerksamkeit des Gegners ablenken",
            nl: "De aandacht van de tegenstander afleiden"
          },
          {
            en: "Creating a false threat",
            es: "Crear una amenaza falsa",
            de: "Eine falsche Drohung schaffen",
            nl: "Een valse dreiging creëren"
          },
          {
            en: "Trading pieces to deflect pressure",
            es: "Intercambiar piezas para desviar presión",
            de: "Steine tauschen, um Druck abzulenken",
            nl: "Stukken ruilen om druk af te leiden"
          }
        ],
        correct: 0,
        explanation: {
          en: "A deflection sacrifice forces an opponent's defending piece to leave its critical defensive post by offering material that must be captured. Once the defender is deflected from its position, a previously protected square or piece becomes vulnerable to a decisive tactical blow.",
          es: "Un sacrificio de desviación fuerza que una pieza defensora del oponente abandone su puesto defensivo crítico ofreciendo material que debe ser capturado. Una vez que el defensor es desviado de su posición, una casilla o pieza previamente protegida se vuelve vulnerable a un golpe táctico decisivo.",
          de: "Ein Ablenkungsopfer zwingt einen verteidigenden Gegnerstein, seinen kritischen Verteidigungsposten zu verlassen, indem Material angeboten wird, das geschlagen werden muss. Sobald der Verteidiger von seiner Position abgelenkt ist, wird ein zuvor geschütztes Feld oder Stein verwundbar für einen entscheidenden taktischen Schlag.",
          nl: "Een afleiding offer dwingt een verdedigend tegenstander stuk om zijn kritieke verdedigingspost te verlaten door materiaal aan te bieden dat geslagen moet worden. Zodra de verdediger van zijn positie is afgeleid, wordt een eerder beschermd veld of stuk kwetsbaar voor een beslissende tactische slag."
        }
      },
      {
        question: {
          en: "What characterizes 'windmill tactics' in checkers?",
          es: "¿Qué caracteriza las 'tácticas de molino de viento' en damas?",
          de: "Was charakterisiert 'Windmühlen-Taktiken' beim Dame?",
          nl: "Wat kenmerkt 'windmolen tactieken' in dammen?"
        },
        options: [
          {
            en: "Alternating checks and captures in a repeating pattern",
            es: "Alternar jaques y capturas en un patrón repetitivo",
            de: "Abwechselnde Schachs und Schläge in einem sich wiederholenden Muster",
            nl: "Afwisselende schaaks en slagen in een herhalend patroon"
          },
          {
            en: "Circular piece movement",
            es: "Movimiento circular de piezas",
            de: "Kreisförmige Steinbewegung",
            nl: "Cirkelvormige stuk beweging"
          },
          {
            en: "Four pieces in a square formation",
            es: "Cuatro piezas en formación cuadrada",
            de: "Vier Steine in quadratischer Formation",
            nl: "Vier stukken in vierkante formatie"
          },
          {
            en: "Rapid exchanges",
            es: "Intercambios rápidos",
            de: "Schnelle Tausche",
            nl: "Snelle ruilen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Windmill tactics involve a repeating pattern where a piece alternates between giving check (forcing response) and capturing material, like the rotating blades of a windmill. Each rotation of the pattern wins material while maintaining the initiative, devastating the opponent's position systematically.",
          es: "Las tácticas de molino de viento involucran un patrón repetitivo donde una pieza alterna entre dar jaque (forzar respuesta) y capturar material, como las aspas giratorias de un molino de viento. Cada rotación del patrón gana material mientras mantiene la iniciativa, devastando la posición del oponente sistemáticamente.",
          de: "Windmühlen-Taktiken beinhalten ein sich wiederholendes Muster, bei dem ein Stein zwischen Schach geben (Antwort erzwingen) und Materialschlag abwechselt, wie die rotierenden Flügel einer Windmühle. Jede Rotation des Musters gewinnt Material bei Beibehaltung der Initiative und devastiert die gegnerische Position systematisch.",
          nl: "Windmolen tactieken omvatten een herhalend patroon waarbij een stuk afwisselt tussen schaak geven (reactie dwingen) en materiaal slaan, zoals de roterende bladen van een windmolen. Elke rotatie van het patroon wint materiaal terwijl het initiatief behouden blijft, waarbij de tegenstander positie systematisch verwoest wordt."
        }
      },
      {
        question: {
          en: "What is 'prophylaxis' in advanced checkers strategy?",
          es: "¿Qué es la 'profilaxis' en estrategia avanzada de damas?",
          de: "Was ist 'Prophylaxe' in der fortgeschrittenen Dame-Strategie?",
          nl: "Wat is 'profylaxe' in geavanceerde dammen strategie?"
        },
        options: [
          {
            en: "Preventing opponent's threats before they materialize",
            es: "Prevenir amenazas del oponente antes de que se materialicen",
            de: "Gegndrohungen verhindern, bevor sie sich materialisieren",
            nl: "Tegenstander dreigingen voorkomen voordat ze zich materialiseren"
          },
          {
            en: "A defensive opening system",
            es: "Un sistema de apertura defensivo",
            de: "Ein defensives Eröffnungssystem",
            nl: "Een defensief openingssysteem"
          },
          {
            en: "Analyzing opponent's previous games",
            es: "Analizar juegos previos del oponente",
            de: "Frühere Spiele des Gegners analysieren",
            nl: "Eerdere games van tegenstander analyseren"
          },
          {
            en: "Preparing for tournaments",
            es: "Prepararse para torneos",
            de: "Sich auf Turniere vorbereiten",
            nl: "Voorbereiden op toernooien"
          }
        ],
        correct: 0,
        explanation: {
          en: "Prophylaxis is the strategic principle of anticipating and preventing opponent's threats before they become dangerous, rather than waiting to react. This proactive approach involves making moves that restrict opponent's options, eliminate their tactical possibilities, and maintain control by denying counterplay.",
          es: "La profilaxis es el principio estratégico de anticipar y prevenir amenazas del oponente antes de que se vuelvan peligrosas, en lugar de esperar a reaccionar. Este enfoque proactivo involucra hacer movimientos que restringen las opciones del oponente, eliminan sus posibilidades tácticas y mantienen control negando contrajuego.",
          de: "Prophylaxe ist das strategische Prinzip, Gegndrohungen zu antizipieren und zu verhindern, bevor sie gefährlich werden, anstatt zu warten und zu reagieren. Dieser proaktive Ansatz beinhaltet Züge, die die Optionen des Gegners einschränken, seine taktischen Möglichkeiten eliminieren und die Kontrolle durch Verweigerung von Gegenspiel aufrechterhalten.",
          nl: "Profylaxe is het strategisch principe van anticiperen en voorkomen van tegenstander dreigingen voordat ze gevaarlijk worden, in plaats van wachten om te reageren. Deze proactieve benadering omvat het maken van zetten die de opties van de tegenstander beperken, hun tactische mogelijkheden elimineren en controle behouden door tegenspel te weigeren."
        }
      },
      {
        question: {
          en: "What is a 'desperado move' in checkers?",
          es: "¿Qué es un 'movimiento desesperado' en damas?",
          de: "Was ist ein 'Desperado-Zug' beim Dame?",
          nl: "Wat is een 'desperado zet' in dammen?"
        },
        options: [
          {
            en: "A piece captures as much as possible before being captured itself",
            es: "Una pieza captura tanto como sea posible antes de ser capturada",
            de: "Ein Stein schlägt so viel wie möglich, bevor er selbst geschlagen wird",
            nl: "Een stuk slaat zoveel mogelijk voordat het zelf geslagen wordt"
          },
          {
            en: "A risky opening gambit",
            es: "Un gambito de apertura arriesgado",
            de: "Ein riskantes Eröffnungsgambit",
            nl: "Een riskant openingsgambiet"
          },
          {
            en: "A last-ditch defensive move",
            es: "Un movimiento defensivo de último recurso",
            de: "Ein letzter verzweifelter Verteidigungszug",
            nl: "Een laatste defensieve poging zet"
          },
          {
            en: "Playing while losing on time",
            es: "Jugar mientras se pierde por tiempo",
            de: "Spielen während Zeitverlust",
            nl: "Spelen terwijl je op tijd verliest"
          }
        ],
        correct: 0,
        explanation: {
          en: "A desperado move occurs when a piece that's about to be captured inflicts maximum damage before its inevitable demise. Like a desperado making a last stand, the piece captures as many enemy pieces or delivers as much positional damage as possible, potentially turning a losing position into equality.",
          es: "Un movimiento desesperado ocurre cuando una pieza que está por ser capturada inflige daño máximo antes de su desaparición inevitable. Como un desesperado haciendo una última resistencia, la pieza captura tantas piezas enemigas o entrega tanto daño posicional como sea posible, potencialmente convirtiendo una posición perdedora en igualdad.",
          de: "Ein Desperado-Zug tritt auf, wenn ein Stein, der kurz vor dem Geschlagenwerden steht, maximalen Schaden anrichtet vor seinem unvermeidlichen Ende. Wie ein Desperado, der einen letzten Stand macht, schlägt der Stein so viele feindliche Steine oder richtet so viel positionellen Schaden wie möglich an, wodurch möglicherweise eine verlierende Position in Gleichstand verwandelt wird.",
          nl: "Een desperado zet vindt plaats wanneer een stuk dat op het punt staat geslagen te worden maximale schade toebrengt voor zijn onvermijdelijke ondergang. Zoals een desperado die een laatste standpunt inneemt, slaat het stuk zoveel mogelijk vijandelijke stukken of brengt zoveel mogelijk positionele schade toe, waarbij mogelijk een verliezende positie in gelijkheid wordt omgezet."
        }
      },
      {
        question: {
          en: "What is the 'triangulation' technique in king endgames?",
          es: "¿Qué es la técnica de 'triangulación' en finales de damas?",
          de: "Was ist die 'Triangulations'-Technik in Damen-Endspielen?",
          nl: "Wat is de 'triangulatie' techniek in dam eindspelen?"
        },
        options: [
          {
            en: "Maneuvering a king in a triangle to lose tempo and gain opposition",
            es: "Maniobrar una dama en triángulo para perder tempo y ganar oposición",
            de: "Eine Dame im Dreieck manövrieren, um Tempo zu verlieren und Opposition zu gewinnen",
            nl: "Een dam manoeuvreren in een driehoek om tempo te verliezen en oppositie te winnen"
          },
          {
            en: "Controlling three key squares",
            es: "Controlar tres casillas clave",
            de: "Drei Schlüsselfelder kontrollieren",
            nl: "Drie sleutelvelden controleren"
          },
          {
            en: "A three-king endgame position",
            es: "Una posición de final de tres damas",
            de: "Eine Drei-Damen-Endspielposition",
            nl: "Een drie-dam eindspel positie"
          },
          {
            en: "Moving along three diagonals",
            es: "Moverse a lo largo de tres diagonales",
            de: "Entlang drei Diagonalen bewegen",
            nl: "Langs drie diagonalen bewegen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Triangulation is a refined endgame technique where a king moves in a triangular pattern to arrive at the same position but with the opponent to move, thereby gaining the opposition. This tempo manipulation is crucial for converting theoretical advantages into wins in precise endgame positions.",
          es: "La triangulación es una técnica de final refinada donde una dama se mueve en un patrón triangular para llegar a la misma posición pero con el oponente a mover, ganando así la oposición. Esta manipulación de tempo es crucial para convertir ventajas teóricas en victorias en posiciones de final precisas.",
          de: "Triangulation ist eine raffinierte Endspieltechnik, bei der eine Dame in einem dreieckigen Muster bewegt wird, um zur gleichen Position zu gelangen, aber mit dem Gegner am Zug, wodurch die Opposition gewonnen wird. Diese Tempo-Manipulation ist entscheidend für die Umwandlung theoretischer Vorteile in Siege in präzisen Endspiel-Positionen.",
          nl: "Triangulatie is een verfijnde eindspel techniek waarbij een dam in een driehoekig patroon beweegt om bij dezelfde positie te komen maar met de tegenstander aan zet, waarbij oppositie wordt gewonnen. Deze tempo manipulatie is cruciaal voor het omzetten van theoretische voordelen in winsten in precieze eindspel posities."
        }
      },
      {
        question: {
          en: "What is a 'zwischenzug' (in-between move) in checkers?",
          es: "¿Qué es un 'zwischenzug' (movimiento intermedio) en damas?",
          de: "Was ist ein 'Zwischenzug' beim Dame?",
          nl: "Wat is een 'zwischenzug' (tussen-zet) in dammen?"
        },
        options: [
          {
            en: "An unexpected intermediate move before an expected capture or response",
            es: "Un movimiento intermedio inesperado antes de una captura o respuesta esperada",
            de: "Ein unerwarteter Zwischenzug vor einem erwarteten Schlag oder Antwort",
            nl: "Een onverwachte tussen-zet voor een verwachte slag of reactie"
          },
          {
            en: "A move between two game phases",
            es: "Un movimiento entre dos fases del juego",
            de: "Ein Zug zwischen zwei Spielphasen",
            nl: "Een zet tussen twee spel fasen"
          },
          {
            en: "Switching between strategies",
            es: "Cambiar entre estrategias",
            de: "Zwischen Strategien wechseln",
            nl: "Wisselen tussen strategieën"
          },
          {
            en: "A neutral developing move",
            es: "Un movimiento de desarrollo neutral",
            de: "Ein neutraler Entwicklungszug",
            nl: "Een neutrale ontwikkeling zet"
          }
        ],
        correct: 0,
        explanation: {
          en: "A zwischenzug is a tactical surprise where, instead of making the expected capture or response, a player inserts an unexpected intermediate move first—often a check or threat—that changes the position's dynamics before completing the anticipated sequence. This can transform a seemingly routine exchange into a winning combination.",
          es: "Un zwischenzug es una sorpresa táctica donde, en lugar de hacer la captura o respuesta esperada, un jugador inserta un movimiento intermedio inesperado primero—a menudo un jaque o amenaza—que cambia la dinámica de la posición antes de completar la secuencia anticipada. Esto puede transformar un intercambio aparentemente rutinario en una combinación ganadora.",
          de: "Ein Zwischenzug ist eine taktische Überraschung, bei der ein Spieler, anstatt den erwarteten Schlag oder Antwort zu machen, zuerst einen unerwarteten Zwischenzug einfügt—oft ein Schach oder eine Drohung—der die Dynamik der Position verändert, bevor die erwartete Sequenz abgeschlossen wird. Dies kann einen scheinbar routinemäßigen Tausch in eine gewinnende Kombination verwandeln.",
          nl: "Een zwischenzug is een tactische verrassing waarbij, in plaats van de verwachte slag of reactie te maken, een speler eerst een onverwachte tussen-zet invoegt—vaak een schaak of dreiging—die de dynamiek van de positie verandert voordat de geanticipeerde sequentie wordt voltooid. Dit kan een ogenschijnlijk routinematige ruil transformeren in een winnende combinatie."
        }
      },
      {
        question: {
          en: "What is 'piece domination' in checkers endgames?",
          es: "¿Qué es la 'dominación de piezas' en finales de damas?",
          de: "Was ist 'Steindominanz' in Dame-Endspielen?",
          nl: "Wat is 'stuk dominantie' in dammen eindspelen?"
        },
        options: [
          {
            en: "Restricting an opponent's piece to only bad squares",
            es: "Restringir una pieza del oponente a solo casillas malas",
            de: "Einen Gegnerstein auf nur schlechte Felder beschränken",
            nl: "Een tegenstander stuk beperken tot alleen slechte velden"
          },
          {
            en: "Having more pieces than opponent",
            es: "Tener más piezas que el oponente",
            de: "Mehr Steine als der Gegner haben",
            nl: "Meer stukken hebben dan tegenstander"
          },
          {
            en: "Controlling the center",
            es: "Controlar el centro",
            de: "Das Zentrum kontrollieren",
            nl: "Het centrum controleren"
          },
          {
            en: "Superior king activity",
            es: "Actividad superior de damas",
            de: "Überlegene Damenaktivität",
            nl: "Superieure dam activiteit"
          }
        ],
        correct: 0,
        explanation: {
          en: "Piece domination occurs when one piece completely restricts an enemy piece's mobility, forcing it to occupy only inferior squares where it has minimal influence. This positional advantage can be as decisive as material advantage, effectively removing the dominated piece from active play.",
          es: "La dominación de piezas ocurre cuando una pieza restringe completamente la movilidad de una pieza enemiga, forzándola a ocupar solo casillas inferiores donde tiene influencia mínima. Esta ventaja posicional puede ser tan decisiva como la ventaja material, eliminando efectivamente la pieza dominada del juego activo.",
          de: "Steindominanz tritt auf, wenn ein Stein die Mobilität eines feindlichen Steins vollständig einschränkt und ihn zwingt, nur minderwertige Felder zu besetzen, wo er minimalen Einfluss hat. Dieser positionelle Vorteil kann so entscheidend sein wie materieller Vorteil, wodurch der dominierte Stein effektiv aus dem aktiven Spiel entfernt wird.",
          nl: "Stuk dominantie vindt plaats wanneer één stuk de mobiliteit van een vijandelijk stuk volledig beperkt, waarbij het gedwongen wordt alleen inferieure velden te bezetten waar het minimale invloed heeft. Dit positioneel voordeel kan net zo beslissend zijn als materiaal voordeel, waarbij het gedomineerde stuk effectief uit actief spel wordt verwijderd."
        }
      },
      {
        question: {
          en: "What is 'the fortress' in defensive endgame strategy?",
          es: "¿Qué es 'la fortaleza' en estrategia de final defensiva?",
          de: "Was ist 'die Festung' in der defensiven Endspiel-Strategie?",
          nl: "Wat is 'het fort' in defensieve eindspel strategie?"
        },
        options: [
          {
            en: "An impregnable defensive structure holding a draw despite material deficit",
            es: "Una estructura defensiva inexpugnable manteniendo tablas a pesar del déficit material",
            de: "Eine uneinnehmbare Verteidigungsstruktur, die ein Remis hält trotz materiellem Defizit",
            nl: "Een oninneembare verdedigingsstructuur die remise houdt ondanks materiaal tekort"
          },
          {
            en: "Four pieces in the corners",
            es: "Cuatro piezas en las esquinas",
            de: "Vier Steine in den Ecken",
            nl: "Vier stukken in de hoeken"
          },
          {
            en: "A back rank defense",
            es: "Una defensa de fila trasera",
            de: "Eine Grundreihenverteidigung",
            nl: "Een achterste rij verdediging"
          },
          {
            en: "Defending with all pieces",
            es: "Defender con todas las piezas",
            de: "Mit allen Steinen verteidigen",
            nl: "Verdedigen met alle stukken"
          }
        ],
        correct: 0,
        explanation: {
          en: "A fortress is a defensive formation so solid that even with material disadvantage, the opponent cannot break through to achieve victory. The defending pieces create an impregnable structure where all penetration attempts fail, securing a draw through perfect defensive geometry despite being down material.",
          es: "Una fortaleza es una formación defensiva tan sólida que incluso con desventaja material, el oponente no puede atravesarla para lograr victoria. Las piezas defensoras crean una estructura inexpugnable donde todos los intentos de penetración fallan, asegurando tablas a través de geometría defensiva perfecta a pesar de estar abajo en material.",
          de: "Eine Festung ist eine so solide Verteidigungsformation, dass selbst bei materiellem Nachteil der Gegner nicht durchbrechen kann, um den Sieg zu erzielen. Die verteidigenden Steine schaffen eine uneinnehmbare Struktur, bei der alle Penetrationsversuche scheitern und durch perfekte Verteidigungsgeometrie ein Remis sichern, trotz materiellem Rückstand.",
          nl: "Een fort is een verdedigingsformatie zo solide dat zelfs met materiaal nadeel de tegenstander niet kan doorbreken om overwinning te behalen. De verdedigende stukken creëren een oninneembare structuur waarbij alle penetratie pogingen falen, waarbij remise wordt veiliggesteld door perfecte verdedigingsgeometrie ondanks materiaal tekort."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level6;
  } else if (typeof window !== 'undefined') {
    window.level6 = level6;
  }
})();
