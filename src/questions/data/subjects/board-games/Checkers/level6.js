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
      },
      {
        question: {
          en: "What is the 'Stroke' in checkers tactics?",
          es: "¿Qué es el 'Golpe' en tácticas de damas?",
          de: "Was ist der 'Streich' in der Dame-Taktik?",
          nl: "Wat is de 'Slag' in dammen tactieken?"
        },
        options: [
          {
            en: "A sudden tactical blow that captures multiple pieces in one sequence",
            es: "Un golpe táctico repentino que captura múltiples piezas en una secuencia",
            de: "Ein plötzlicher taktischer Schlag, der mehrere Steine in einer Sequenz schlägt",
            nl: "Een plotselinge tactische slag die meerdere stukken in één sequentie slaat"
          },
          {
            en: "The first move of the game",
            es: "El primer movimiento del juego",
            de: "Der erste Zug des Spiels",
            nl: "De eerste zet van het spel"
          },
          {
            en: "A defensive maneuver",
            es: "Una maniobra defensiva",
            de: "Ein Verteidigungsmanöver",
            nl: "Een defensieve manoeuvre"
          },
          {
            en: "Moving with perfect timing",
            es: "Mover con tiempo perfecto",
            de: "Bewegen mit perfektem Timing",
            nl: "Bewegen met perfecte timing"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Stroke is a powerful tactical concept where a player delivers a sudden, decisive combination that captures multiple opponent pieces in a forced sequence, often turning the game's momentum completely. Like a master stroke in art, it represents brilliant tactical execution that changes the position dramatically.",
          es: "El Golpe es un concepto táctico poderoso donde un jugador entrega una combinación repentina y decisiva que captura múltiples piezas del oponente en una secuencia forzada, a menudo cambiando completamente el impulso del juego. Como un golpe maestro en el arte, representa ejecución táctica brillante que cambia la posición dramáticamente.",
          de: "Der Streich ist ein mächtiges taktisches Konzept, bei dem ein Spieler eine plötzliche, entscheidende Kombination liefert, die mehrere Gegnersteine in einer erzwungenen Sequenz schlägt und oft die Dynamik des Spiels völlig umkehrt. Wie ein Meisterstreich in der Kunst repräsentiert es brillante taktische Ausführung, die die Position dramatisch verändert.",
          nl: "De Slag is een krachtig tactisch concept waarbij een speler een plotselinge, beslissende combinatie levert die meerdere tegenstander stukken slaat in een gedwongen sequentie, waarbij vaak het momentum van het spel volledig verandert. Zoals een meesterslag in kunst, vertegenwoordigt het briljante tactische uitvoering die de positie dramatisch verandert."
        }
      },
      {
        question: {
          en: "What is 'overloading' in checkers tactics?",
          es: "¿Qué es la 'sobrecarga' en tácticas de damas?",
          de: "Was ist 'Überlastung' in der Dame-Taktik?",
          nl: "Wat is 'overbelasting' in dammen tactieken?"
        },
        options: [
          {
            en: "Forcing a piece to defend multiple threats simultaneously beyond its capacity",
            es: "Forzar una pieza a defender múltiples amenazas simultáneamente más allá de su capacidad",
            de: "Einen Stein zwingen, mehrere Drohungen gleichzeitig über seine Kapazität hinaus zu verteidigen",
            nl: "Een stuk dwingen meerdere dreigingen tegelijkertijd te verdedigen boven zijn capaciteit"
          },
          {
            en: "Having too many pieces on the board",
            es: "Tener demasiadas piezas en el tablero",
            de: "Zu viele Steine auf dem Brett haben",
            nl: "Te veel stukken op het bord hebben"
          },
          {
            en: "Calculating too many variations",
            es: "Calcular demasiadas variaciones",
            de: "Zu viele Varianten berechnen",
            nl: "Te veel variaties berekenen"
          },
          {
            en: "Playing too aggressively",
            es: "Jugar demasiado agresivamente",
            de: "Zu aggressiv spielen",
            nl: "Te agressief spelen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Overloading occurs when a defending piece is burdened with protecting multiple critical squares or pieces simultaneously, exceeding its defensive capacity. By creating multiple threats, the attacker exploits the fact that one piece cannot adequately defend everything, allowing breakthrough on the undefended front.",
          es: "La sobrecarga ocurre cuando una pieza defensora está cargada con proteger múltiples casillas o piezas críticas simultáneamente, excediendo su capacidad defensiva. Al crear múltiples amenazas, el atacante explota el hecho de que una pieza no puede defender adecuadamente todo, permitiendo avance en el frente no defendido.",
          de: "Überlastung tritt auf, wenn ein verteidigender Stein mit dem Schutz mehrerer kritischer Felder oder Steine gleichzeitig belastet wird und seine Verteidigungskapazität übersteigt. Durch Schaffen mehrerer Drohungen nutzt der Angreifer aus, dass ein Stein nicht alles angemessen verteidigen kann, wodurch Durchbruch an der unverteidigten Front ermöglicht wird.",
          nl: "Overbelasting vindt plaats wanneer een verdedigend stuk belast is met het beschermen van meerdere kritieke velden of stukken tegelijkertijd, waarbij zijn verdedigingscapaciteit wordt overschreden. Door meerdere dreigingen te creëren, exploiteert de aanvaller het feit dat één stuk niet alles adequaat kan verdedigen, waardoor doorbraak mogelijk wordt op het onverdedigde front."
        }
      },
      {
        question: {
          en: "What is the 'opposition square rule' in king endgames?",
          es: "¿Qué es la 'regla del cuadrado de oposición' en finales de damas?",
          de: "Was ist die 'Oppositionsquadrat-Regel' in Damen-Endspielen?",
          nl: "Wat is de 'oppositie veld regel' in dam eindspelen?"
        },
        options: [
          {
            en: "Identifying critical squares where gaining opposition ensures victory",
            es: "Identificar casillas críticas donde ganar oposición asegura victoria",
            de: "Kritische Felder identifizieren, wo das Gewinnen der Opposition den Sieg sichert",
            nl: "Kritieke velden identificeren waar oppositie winnen overwinning garandeert"
          },
          {
            en: "Keeping kings on opposite sides",
            es: "Mantener damas en lados opuestos",
            de: "Damen auf gegenüberliegenden Seiten halten",
            nl: "Dammen op tegenovergestelde kanten houden"
          },
          {
            en: "Moving to square positions",
            es: "Mover a posiciones cuadradas",
            de: "Zu quadratischen Positionen bewegen",
            nl: "Naar vierkante posities bewegen"
          },
          {
            en: "Controlling four-square formations",
            es: "Controlar formaciones de cuatro casillas",
            de: "Vier-Feld-Formationen kontrollieren",
            nl: "Vier-veld formaties controleren"
          }
        ],
        correct: 0,
        explanation: {
          en: "The opposition square rule helps identify key squares in king endgames where, if the stronger side's king reaches these squares with opposition, victory becomes forced. Understanding these critical squares allows precise navigation through complex endgames, transforming theoretical knowledge into practical winning technique.",
          es: "La regla del cuadrado de oposición ayuda a identificar casillas clave en finales de damas donde, si el rey del lado más fuerte alcanza estas casillas con oposición, la victoria se vuelve forzada. Entender estas casillas críticas permite navegación precisa a través de finales complejos, transformando conocimiento teórico en técnica ganadora práctica.",
          de: "Die Oppositionsquadrat-Regel hilft, Schlüsselfelder in Damen-Endspielen zu identifizieren, wo, wenn die Dame der stärkeren Seite diese Felder mit Opposition erreicht, der Sieg erzwungen wird. Das Verständnis dieser kritischen Felder ermöglicht präzise Navigation durch komplexe Endspiele und transformiert theoretisches Wissen in praktische Siegtechnik.",
          nl: "De oppositie veld regel helpt sleutelvelden te identificeren in dam eindspelen waar, als de dam van de sterkere kant deze velden met oppositie bereikt, overwinning wordt afgedwongen. Het begrijpen van deze kritieke velden maakt precieze navigatie door complexe eindspelen mogelijk, waarbij theoretische kennis wordt getransformeerd in praktische winnende techniek."
        }
      },
      {
        question: {
          en: "What is a 'stalemate trap' in checkers?",
          es: "¿Qué es una 'trampa de ahogado' en damas?",
          de: "Was ist eine 'Patt-Falle' beim Dame?",
          nl: "Wat is een 'pat val' in dammen?"
        },
        options: [
          {
            en: "Engineering a position where opponent has no legal moves, forcing a draw",
            es: "Diseñar una posición donde el oponente no tenga movimientos legales, forzando tablas",
            de: "Eine Position konstruieren, wo der Gegner keine legalen Züge hat, was ein Remis erzwingt",
            nl: "Een positie engineeren waar tegenstander geen legale zetten heeft, waarbij remise wordt afgedwongen"
          },
          {
            en: "A position that never changes",
            es: "Una posición que nunca cambia",
            de: "Eine Position, die sich nie ändert",
            nl: "Een positie die nooit verandert"
          },
          {
            en: "Running out of time",
            es: "Quedarse sin tiempo",
            de: "Keine Zeit mehr haben",
            nl: "Zonder tijd komen"
          },
          {
            en: "A stuck piece",
            es: "Una pieza atascada",
            de: "Ein festsitzender Stein",
            nl: "Een vastgelopen stuk"
          }
        ],
        correct: 0,
        explanation: {
          en: "A stalemate trap is a defensive resource where the losing side maneuvers into a position where they have no legal moves available. In standard checkers rules, this results in a draw rather than a loss, providing a last-ditch salvation from otherwise hopeless positions through clever piece positioning.",
          es: "Una trampa de ahogado es un recurso defensivo donde el lado perdedor maniobra hacia una posición donde no tiene movimientos legales disponibles. En las reglas estándar de damas, esto resulta en tablas en lugar de una pérdida, proporcionando salvación de último recurso de posiciones de otra manera sin esperanza a través de posicionamiento astuto de piezas.",
          de: "Eine Patt-Falle ist eine Verteidigungsressource, bei der die verlierende Seite in eine Position manövriert, wo sie keine legalen Züge verfügbar hat. In den Standard-Dame-Regeln resultiert dies in einem Remis anstatt einer Niederlage und bietet eine letzte Rettung aus sonst hoffnungslosen Positionen durch clevere Steinpositionierung.",
          nl: "Een pat val is een defensieve hulpbron waarbij de verliezende kant manoeuvreert naar een positie waar geen legale zetten beschikbaar zijn. In standaard dammen regels resulteert dit in remise in plaats van verlies, waarbij een laatste redding wordt geboden uit anders hopeloze posities door slimme stuk positionering."
        }
      },
      {
        question: {
          en: "What is 'king leverage' in advanced endgames?",
          es: "¿Qué es el 'apalancamiento de dama' en finales avanzados?",
          de: "Was ist 'Damen-Hebelwirkung' in fortgeschrittenen Endspielen?",
          nl: "Wat is 'dam hefboomwerking' in geavanceerde eindspelen?"
        },
        options: [
          {
            en: "Using king's superior mobility to create multiple simultaneous threats",
            es: "Usar movilidad superior de dama para crear múltiples amenazas simultáneas",
            de: "Überlegene Damenmobilität nutzen, um mehrere gleichzeitige Drohungen zu schaffen",
            nl: "Superieure dam mobiliteit gebruiken om meerdere gelijktijdige dreigingen te creëren"
          },
          {
            en: "Promoting pieces to kings",
            es: "Promover piezas a damas",
            de: "Steine zu Damen befördern",
            nl: "Stukken tot dammen promoveren"
          },
          {
            en: "Trading regular pieces for kings",
            es: "Intercambiar piezas regulares por damas",
            de: "Normale Steine gegen Damen tauschen",
            nl: "Normale stukken ruilen voor dammen"
          },
          {
            en: "Pushing kings forward aggressively",
            es: "Empujar damas hacia adelante agresivamente",
            de: "Damen aggressiv nach vorne drücken",
            nl: "Dammen agressief vooruit duwen"
          }
        ],
        correct: 0,
        explanation: {
          en: "King leverage exploits a king's ability to move both forward and backward, creating multiple threats across different board areas simultaneously. This superior mobility allows the king to pressure multiple weaknesses at once, forcing the opponent into impossible defensive choices where defending one threat exposes another.",
          es: "El apalancamiento de dama explota la capacidad de una dama de moverse tanto hacia adelante como hacia atrás, creando múltiples amenazas en diferentes áreas del tablero simultáneamente. Esta movilidad superior permite que la dama presione múltiples debilidades a la vez, forzando al oponente a elecciones defensivas imposibles donde defender una amenaza expone otra.",
          de: "Damen-Hebelwirkung nutzt die Fähigkeit einer Dame, sich sowohl vorwärts als auch rückwärts zu bewegen, um mehrere Drohungen über verschiedene Brettbereiche gleichzeitig zu schaffen. Diese überlegene Mobilität ermöglicht es der Dame, mehrere Schwächen gleichzeitig unter Druck zu setzen und den Gegner in unmögliche Verteidigungsentscheidungen zu zwingen, bei denen die Verteidigung einer Drohung eine andere freilegt.",
          nl: "Dam hefboomwerking exploiteert het vermogen van een dam om zowel vooruit als achteruit te bewegen, waarbij meerdere dreigingen over verschillende bordgebieden tegelijkertijd worden gecreëerd. Deze superieure mobiliteit stelt de dam in staat meerdere zwaktes tegelijk onder druk te zetten, waarbij de tegenstander gedwongen wordt tot onmogelijke defensieve keuzes waar het verdedigen van één dreiging een andere blootlegt."
        }
      },
      {
        question: {
          en: "What is the 'exchange sacrifice' positional concept?",
          es: "¿Qué es el concepto posicional del 'sacrificio de intercambio'?",
          de: "Was ist das 'Tauschopfer'-Positionskonzept?",
          nl: "Wat is het 'ruil offer' positioneel concept?"
        },
        options: [
          {
            en: "Trading material for superior positional compensation like better structure or initiative",
            es: "Intercambiar material por compensación posicional superior como mejor estructura o iniciativa",
            de: "Material gegen überlegene positionelle Kompensation wie bessere Struktur oder Initiative tauschen",
            nl: "Materiaal ruilen voor superieure positionele compensatie zoals betere structuur of initiatief"
          },
          {
            en: "Trading pieces of equal value",
            es: "Intercambiar piezas de igual valor",
            de: "Steine gleichen Werts tauschen",
            nl: "Stukken van gelijke waarde ruilen"
          },
          {
            en: "Sacrificing for immediate checkmate",
            es: "Sacrificar por jaque mate inmediato",
            de: "Opfern für sofortiges Schachmatt",
            nl: "Offeren voor onmiddellijke schaakmat"
          },
          {
            en: "Exchanging all pieces to reach endgame",
            es: "Intercambiar todas las piezas para alcanzar el final",
            de: "Alle Steine tauschen, um das Endspiel zu erreichen",
            nl: "Alle stukken ruilen om eindspel te bereiken"
          }
        ],
        correct: 0,
        explanation: {
          en: "An exchange sacrifice willingly gives up material for intangible positional advantages such as superior piece placement, better pawn structure, or sustained initiative. Unlike tactical sacrifices seeking immediate concrete gain, exchange sacrifices invest in long-term positional superiority that gradually converts into winning advantages.",
          es: "Un sacrificio de intercambio entrega voluntariamente material por ventajas posicionales intangibles como mejor colocación de piezas, mejor estructura de peones, o iniciativa sostenida. A diferencia de sacrificios tácticos que buscan ganancia concreta inmediata, los sacrificios de intercambio invierten en superioridad posicional a largo plazo que gradualmente se convierte en ventajas ganadoras.",
          de: "Ein Tauschopfer gibt bereitwillig Material für immaterielle positionelle Vorteile wie überlegene Steinplatzierung, bessere Bauernstruktur oder anhaltende Initiative auf. Anders als taktische Opfer, die sofortigen konkreten Gewinn suchen, investieren Tauschopfer in langfristige positionelle Überlegenheit, die sich allmählich in gewinnende Vorteile verwandelt.",
          nl: "Een ruil offer geeft vrijwillig materiaal op voor ontastbare positionele voordelen zoals superieure stuk plaatsing, betere pionstructuur, of aanhoudend initiatief. Anders dan tactische offers die onmiddellijke concrete winst zoeken, investeren ruil offers in langdurige positionele superioriteit die geleidelijk wordt omgezet in winnende voordelen."
        }
      },
      {
        question: {
          en: "What is 'tempo play' in middlegame strategy?",
          es: "¿Qué es el 'juego de tempo' en estrategia de medio juego?",
          de: "Was ist 'Tempospiel' in der Mittelspielstrategie?",
          nl: "Wat is 'tempo spel' in middenspel strategie?"
        },
        options: [
          {
            en: "Gaining time by forcing opponent responses while improving position",
            es: "Ganar tiempo forzando respuestas del oponente mientras se mejora la posición",
            de: "Zeit gewinnen, indem man Gegnerantworten erzwingt während man die Position verbessert",
            nl: "Tijd winnen door tegenstander reacties te dwingen terwijl positie wordt verbeterd"
          },
          {
            en: "Playing very quickly",
            es: "Jugar muy rápidamente",
            de: "Sehr schnell spielen",
            nl: "Heel snel spelen"
          },
          {
            en: "Managing the game clock",
            es: "Gestionar el reloj del juego",
            de: "Die Spieluhr verwalten",
            nl: "De spelklok beheren"
          },
          {
            en: "Maintaining a steady rhythm",
            es: "Mantener un ritmo constante",
            de: "Einen stetigen Rhythmus beibehalten",
            nl: "Een stabiel ritme handhaven"
          }
        ],
        correct: 0,
        explanation: {
          en: "Tempo play involves making moves that force opponent responses (like threats or checks) while simultaneously improving your own position. Each move gains time because the opponent must respond to threats rather than pursuing their own plans, allowing you to build overwhelming positional advantages through accumulated tempo gains.",
          es: "El juego de tempo implica hacer movimientos que fuerzan respuestas del oponente (como amenazas o jaques) mientras simultáneamente se mejora la propia posición. Cada movimiento gana tiempo porque el oponente debe responder a amenazas en lugar de perseguir sus propios planes, permitiéndote construir ventajas posicionales abrumadoras a través de ganancias de tempo acumuladas.",
          de: "Tempospiel beinhaltet Züge, die Gegnerantworten erzwingen (wie Drohungen oder Schachs) während gleichzeitig die eigene Position verbessert wird. Jeder Zug gewinnt Zeit, weil der Gegner auf Drohungen reagieren muss, anstatt eigene Pläne zu verfolgen, wodurch überwältigende positionelle Vorteile durch akkumulierte Tempogewinne aufgebaut werden können.",
          nl: "Tempo spel houdt in dat zetten worden gemaakt die tegenstander reacties dwingen (zoals dreigingen of schaaks) terwijl tegelijkertijd de eigen positie wordt verbeterd. Elke zet wint tijd omdat de tegenstander moet reageren op dreigingen in plaats van eigen plannen te volgen, waardoor overweldigende positionele voordelen kunnen worden opgebouwd door geaccumuleerde tempo winsten."
        }
      },
      {
        question: {
          en: "What is the 'minority attack' positional strategy?",
          es: "¿Qué es la estrategia posicional del 'ataque minoritario'?",
          de: "Was ist die 'Minderheitsangriff'-Positionsstrategie?",
          nl: "Wat is de 'minderheidsaanval' positionele strategie?"
        },
        options: [
          {
            en: "Using fewer pieces to attack opponent's larger pawn group, creating weaknesses",
            es: "Usar menos piezas para atacar grupo de peones más grande del oponente, creando debilidades",
            de: "Weniger Steine nutzen, um die größere Bauerngruppe des Gegners anzugreifen und Schwächen zu schaffen",
            nl: "Minder stukken gebruiken om de grotere piongroep van de tegenstander aan te vallen, waarbij zwaktes worden gecreëerd"
          },
          {
            en: "Attacking with a material disadvantage",
            es: "Atacar con desventaja material",
            de: "Mit materiellem Nachteil angreifen",
            nl: "Aanvallen met materiaal nadeel"
          },
          {
            en: "A small tactical threat",
            es: "Una pequeña amenaza táctica",
            de: "Eine kleine taktische Drohung",
            nl: "Een kleine tactische dreiging"
          },
          {
            en: "Defending with fewer pieces",
            es: "Defender con menos piezas",
            de: "Mit weniger Steinen verteidigen",
            nl: "Verdedigen met minder stukken"
          }
        ],
        correct: 0,
        explanation: {
          en: "A minority attack uses a smaller group of pawns to attack the opponent's larger pawn chain, aiming to create permanent structural weaknesses. Though you have fewer attacking pieces in that sector, exchanges often leave the opponent with isolated or backward pawns that become long-term liabilities in the endgame.",
          es: "Un ataque minoritario usa un grupo más pequeño de peones para atacar la cadena de peones más grande del oponente, apuntando a crear debilidades estructurales permanentes. Aunque tienes menos piezas atacantes en ese sector, los intercambios a menudo dejan al oponente con peones aislados o retrasados que se convierten en pasivos a largo plazo en el final.",
          de: "Ein Minderheitsangriff nutzt eine kleinere Bauerngruppe, um die größere Bauernkette des Gegners anzugreifen, mit dem Ziel, permanente strukturelle Schwächen zu schaffen. Obwohl man in diesem Sektor weniger angreifende Steine hat, hinterlassen Tausche oft beim Gegner isolierte oder rückständige Bauern, die zu langfristigen Belastungen im Endspiel werden.",
          nl: "Een minderheidsaanval gebruikt een kleinere piongroep om de grotere pionketen van de tegenstander aan te vallen, met als doel permanente structurele zwaktes te creëren. Hoewel je minder aanvallende stukken in die sector hebt, laten ruilen vaak de tegenstander achter met geïsoleerde of achtergebleven pionnen die langdurige lasten worden in het eindspel."
        }
      },
      {
        question: {
          en: "What is 'zugzwang reciprocal' in theoretical endgames?",
          es: "¿Qué es el 'zugzwang recíproco' en finales teóricos?",
          de: "Was ist 'reziproker Zugzwang' in theoretischen Endspielen?",
          nl: "Wat is 'wederzijdse zugzwang' in theoretische eindspelen?"
        },
        options: [
          {
            en: "A position where whoever moves first loses, creating mutual zugzwang",
            es: "Una posición donde quien mueve primero pierde, creando zugzwang mutuo",
            de: "Eine Position, wo derjenige, der zuerst zieht, verliert und gegenseitigen Zugzwang schafft",
            nl: "Een positie waar wie eerst zet verliest, waarbij wederzijdse zugzwang wordt gecreëerd"
          },
          {
            en: "Two zugzwangs in one game",
            es: "Dos zugzwangs en un juego",
            de: "Zwei Zugzwänge in einem Spiel",
            nl: "Twee zugzwangs in één game"
          },
          {
            en: "Exchanging zugzwang positions",
            es: "Intercambiar posiciones de zugzwang",
            de: "Zugzwang-Positionen tauschen",
            nl: "Zugzwang posities ruilen"
          },
          {
            en: "Creating zugzwang for opponent",
            es: "Crear zugzwang para el oponente",
            de: "Zugzwang für Gegner schaffen",
            nl: "Zugzwang creëren voor tegenstander"
          }
        ],
        correct: 0,
        explanation: {
          en: "Reciprocal zugzwang is a rare theoretical position where both sides would prefer not to move—whoever's turn it is to move will worsen their position and lose. These positions are critically important in endgame theory, as they often determine whether positions are theoretical wins or draws based solely on who moves first.",
          es: "El zugzwang recíproco es una posición teórica rara donde ambos lados preferirían no mover—quien sea que le toque mover empeorará su posición y perderá. Estas posiciones son críticamente importantes en teoría de finales, ya que a menudo determinan si las posiciones son victorias teóricas o tablas basándose únicamente en quién mueve primero.",
          de: "Reziproker Zugzwang ist eine seltene theoretische Position, bei der beide Seiten lieber nicht ziehen würden—wer auch immer am Zug ist, wird seine Position verschlechtern und verlieren. Diese Positionen sind in der Endspieltheorie kritisch wichtig, da sie oft bestimmen, ob Positionen theoretische Siege oder Remis sind, basierend allein darauf, wer zuerst zieht.",
          nl: "Wederzijdse zugzwang is een zeldzame theoretische positie waar beide kanten liever niet zouden zetten—wie er ook aan zet is zal zijn positie verslechteren en verliezen. Deze posities zijn kritiek belangrijk in eindspel theorie, omdat ze vaak bepalen of posities theoretische winsten of remises zijn gebaseerd alleen op wie eerst zet."
        }
      },
      {
        question: {
          en: "What is 'key square theory' in pawn endgames?",
          es: "¿Qué es la 'teoría de casillas clave' en finales de peones?",
          de: "Was ist 'Schlüsselfeldtheorie' in Bauern-Endspielen?",
          nl: "Wat is 'sleutelveld theorie' in pion eindspelen?"
        },
        options: [
          {
            en: "Identifying critical squares whose occupation by the king guarantees promotion",
            es: "Identificar casillas críticas cuya ocupación por el rey garantiza promoción",
            de: "Kritische Felder identifizieren, deren Besetzung durch den König Beförderung garantiert",
            nl: "Kritieke velden identificeren waarvan bezetting door de koning promotie garandeert"
          },
          {
            en: "The most important square on the board",
            es: "La casilla más importante del tablero",
            de: "Das wichtigste Feld auf dem Brett",
            nl: "Het belangrijkste veld op het bord"
          },
          {
            en: "Controlling the center squares",
            es: "Controlar las casillas centrales",
            de: "Die Zentralfelder kontrollieren",
            nl: "De centrale velden controleren"
          },
          {
            en: "The square where promotion occurs",
            es: "La casilla donde ocurre la promoción",
            de: "Das Feld, wo Beförderung stattfindet",
            nl: "Het veld waar promotie plaatsvindt"
          }
        ],
        correct: 0,
        explanation: {
          en: "Key square theory identifies specific critical squares in pawn endgames where, if the attacking king can occupy them, the pawn's promotion becomes unstoppable. These squares form a pattern related to the pawn's position, and understanding them allows precise calculation of whether pawn endgames are winning or drawn without complex analysis.",
          es: "La teoría de casillas clave identifica casillas críticas específicas en finales de peones donde, si el rey atacante puede ocuparlas, la promoción del peón se vuelve imparable. Estas casillas forman un patrón relacionado con la posición del peón, y entenderlas permite cálculo preciso de si los finales de peones son ganadores o tablas sin análisis complejo.",
          de: "Die Schlüsselfeldtheorie identifiziert spezifische kritische Felder in Bauern-Endspielen, wo, wenn der angreifende König sie besetzen kann, die Bauernbeförderung unstoppbar wird. Diese Felder bilden ein Muster in Bezug auf die Bauernposition, und ihr Verständnis ermöglicht präzise Berechnung, ob Bauern-Endspiele gewinnend oder remis sind ohne komplexe Analyse.",
          nl: "Sleutelveld theorie identificeert specifieke kritieke velden in pion eindspelen waar, als de aanvallende koning ze kan bezetten, de pion promotie onstuitbaar wordt. Deze velden vormen een patroon gerelateerd aan de pion positie, en het begrijpen ervan maakt precieze berekening mogelijk of pion eindspelen winnend of remise zijn zonder complexe analyse."
        }
      },
      {
        question: {
          en: "What is the 'rule of the square' in race endgames?",
          es: "¿Qué es la 'regla del cuadrado' en finales de carrera?",
          de: "Was ist die 'Quadratregel' in Wettlauf-Endspielen?",
          nl: "Wat is de 'vierkant regel' in race eindspelen?"
        },
        options: [
          {
            en: "Determining if a king can catch a passed pawn by visualizing a square",
            es: "Determinar si un rey puede alcanzar un peón pasado visualizando un cuadrado",
            de: "Bestimmen, ob ein König einen Freibauern fangen kann, indem man ein Quadrat visualisiert",
            nl: "Bepalen of een koning een doorgebroken pion kan inhalen door een vierkant te visualiseren"
          },
          {
            en: "Moving in a square pattern",
            es: "Mover en un patrón cuadrado",
            de: "In einem quadratischen Muster bewegen",
            nl: "Bewegen in een vierkant patroon"
          },
          {
            en: "Controlling four squares",
            es: "Controlar cuatro casillas",
            de: "Vier Felder kontrollieren",
            nl: "Vier velden controleren"
          },
          {
            en: "Racing along a square diagonal",
            es: "Correr a lo largo de una diagonal cuadrada",
            de: "Entlang einer quadratischen Diagonale rasen",
            nl: "Racen langs een vierkante diagonaal"
          }
        ],
        correct: 0,
        explanation: {
          en: "The rule of the square is a visual shortcut for calculating whether a king can catch a passed pawn. Draw an imaginary square from the pawn to the promotion square; if the defending king is inside or can enter this square on its move, it catches the pawn. This eliminates complex move-counting in race positions.",
          es: "La regla del cuadrado es un atajo visual para calcular si un rey puede alcanzar un peón pasado. Dibuja un cuadrado imaginario desde el peón hasta la casilla de promoción; si el rey defensor está dentro o puede entrar a este cuadrado en su movimiento, alcanza el peón. Esto elimina conteo de movimientos complejo en posiciones de carrera.",
          de: "Die Quadratregel ist eine visuelle Abkürzung zur Berechnung, ob ein König einen Freibauern fangen kann. Zeichne ein imaginäres Quadrat vom Bauern zum Beförderungsfeld; wenn der verteidigende König innerhalb ist oder bei seinem Zug in dieses Quadrat eintreten kann, fängt er den Bauern. Dies eliminiert komplexes Zug-Zählen in Wettlaufpositionen.",
          nl: "De vierkant regel is een visuele snelkoppeling voor het berekenen of een koning een doorgebroken pion kan inhalen. Teken een denkbeeldig vierkant van de pion naar het promotieveld; als de verdedigende koning binnen is of bij zijn zet dit vierkant kan betreden, haalt hij de pion in. Dit elimineert complex zetten-tellen in race posities."
        }
      },
      {
        question: {
          en: "What is 'distant opposition' in king endgames?",
          es: "¿Qué es la 'oposición distante' en finales de rey?",
          de: "Was ist 'entfernte Opposition' in König-Endspielen?",
          nl: "Wat is 'verre oppositie' in koning eindspelen?"
        },
        options: [
          {
            en: "Kings facing each other with multiple squares between them, maintaining strategic tension",
            es: "Reyes enfrentándose con múltiples casillas entre ellos, manteniendo tensión estratégica",
            de: "Könige, die sich mit mehreren Feldern zwischen ihnen gegenüberstehen und strategische Spannung aufrechterhalten",
            nl: "Koningen die elkaar met meerdere velden tussen hen onder ogen zien, waarbij strategische spanning wordt gehandhaafd"
          },
          {
            en: "Kings on opposite sides of the board",
            es: "Reyes en lados opuestos del tablero",
            de: "Könige auf gegenüberliegenden Seiten des Bretts",
            nl: "Koningen op tegenovergestelde kanten van het bord"
          },
          {
            en: "A far-away defensive position",
            es: "Una posición defensiva lejana",
            de: "Eine weit entfernte Verteidigungsposition",
            nl: "Een verre defensieve positie"
          },
          {
            en: "Opposition in the endgame only",
            es: "Oposición solo en el final",
            de: "Opposition nur im Endspiel",
            nl: "Oppositie alleen in eindspel"
          }
        ],
        correct: 0,
        explanation: {
          en: "Distant opposition occurs when kings face each other along a file, rank, or diagonal with three or five squares between them (odd number). Like close opposition, the player not to move holds the advantage. Understanding distant opposition allows precise maneuvering to convert it into close opposition and win endgames.",
          es: "La oposición distante ocurre cuando los reyes se enfrentan a lo largo de una fila, columna o diagonal con tres o cinco casillas entre ellos (número impar). Como la oposición cercana, el jugador que no mueve tiene la ventaja. Entender la oposición distante permite maniobrar con precisión para convertirla en oposición cercana y ganar finales.",
          de: "Entfernte Opposition tritt auf, wenn Könige sich entlang einer Linie, Reihe oder Diagonale mit drei oder fünf Feldern zwischen ihnen (ungerade Zahl) gegenüberstehen. Wie bei naher Opposition hat der Spieler, der nicht am Zug ist, den Vorteil. Das Verständnis entfernter Opposition ermöglicht präzises Manövrieren, um sie in nahe Opposition umzuwandeln und Endspiele zu gewinnen.",
          nl: "Verre oppositie vindt plaats wanneer koningen elkaar onder ogen zien langs een rij, kolom of diagonaal met drie of vijf velden tussen hen (oneven aantal). Zoals bij nabije oppositie heeft de speler die niet aan zet is het voordeel. Het begrijpen van verre oppositie maakt precieze manoeuvres mogelijk om het om te zetten in nabije oppositie en eindspelen te winnen."
        }
      },
      {
        question: {
          en: "What is a 'corresponding squares' endgame technique?",
          es: "¿Qué es una técnica de final de 'casillas correspondientes'?",
          de: "Was ist eine 'Korrespondierende Felder'-Endspieltechnik?",
          nl: "Wat is een 'corresponderende velden' eindspel techniek?"
        },
        options: [
          {
            en: "Pairs of squares where if one king occupies one, the other must occupy its pair",
            es: "Pares de casillas donde si un rey ocupa una, el otro debe ocupar su par",
            de: "Feldpaare, bei denen, wenn ein König eines besetzt, der andere sein Paar besetzen muss",
            nl: "Veldparen waarbij als één koning er één bezet, de ander zijn paar moet bezetten"
          },
          {
            en: "Matching piece positions",
            es: "Coincidencia de posiciones de piezas",
            de: "Übereinstimmende Steinpositionen",
            nl: "Matchende stuk posities"
          },
          {
            en: "Symmetrical pawn structures",
            es: "Estructuras de peones simétricas",
            de: "Symmetrische Bauernstrukturen",
            nl: "Symmetrische pionstructuren"
          },
          {
            en: "Adjacent squares for both kings",
            es: "Casillas adyacentes para ambos reyes",
            de: "Angrenzende Felder für beide Könige",
            nl: "Aangrenzende velden voor beide koningen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Corresponding squares are pairs of squares in complex endgames where maintaining the correct relationship between kings is crucial. If your king reaches square A, the opponent must reach square B (its corresponding square) to maintain the position. This sophisticated concept helps navigate intricate endgames where simple opposition doesn't apply.",
          es: "Las casillas correspondientes son pares de casillas en finales complejos donde mantener la relación correcta entre reyes es crucial. Si tu rey alcanza la casilla A, el oponente debe alcanzar la casilla B (su casilla correspondiente) para mantener la posición. Este concepto sofisticado ayuda a navegar finales intrincados donde la oposición simple no aplica.",
          de: "Korrespondierende Felder sind Feldpaare in komplexen Endspielen, bei denen die Aufrechterhaltung der korrekten Beziehung zwischen Königen entscheidend ist. Wenn Ihr König Feld A erreicht, muss der Gegner Feld B (sein korrespondierendes Feld) erreichen, um die Position zu halten. Dieses ausgefeilte Konzept hilft bei der Navigation durch komplizierte Endspiele, bei denen einfache Opposition nicht anwendbar ist.",
          nl: "Corresponderende velden zijn veldparen in complexe eindspelen waarbij het handhaven van de correcte relatie tussen koningen cruciaal is. Als jouw koning veld A bereikt, moet de tegenstander veld B (zijn corresponderende veld) bereiken om de positie te behouden. Dit verfijnde concept helpt bij het navigeren door ingewikkelde eindspelen waar simpele oppositie niet van toepassing is."
        }
      },
      {
        question: {
          en: "What is 'outflanking' in king and pawn endgames?",
          es: "¿Qué es 'flanquear' en finales de rey y peón?",
          de: "Was ist 'Umgehen' in König-und-Bauern-Endspielen?",
          nl: "Wat is 'omtrekken' in koning en pion eindspelen?"
        },
        options: [
          {
            en: "Maneuvering the king around opponent's king to gain access to critical squares",
            es: "Maniobrar el rey alrededor del rey oponente para ganar acceso a casillas críticas",
            de: "Den König um den gegnerischen König manövrieren, um Zugang zu kritischen Feldern zu erhalten",
            nl: "De koning manoeuvreren rond de tegenstander koning om toegang te krijgen tot kritieke velden"
          },
          {
            en: "Attacking from the side",
            es: "Atacar desde el lado",
            de: "Von der Seite angreifen",
            nl: "Van de zijkant aanvallen"
          },
          {
            en: "Moving pawns to the flanks",
            es: "Mover peones a los flancos",
            de: "Bauern zu den Flanken bewegen",
            nl: "Pionnen naar de flanken bewegen"
          },
          {
            en: "King and pawns on opposite wings",
            es: "Rey y peones en alas opuestas",
            de: "König und Bauern auf gegenüberliegenden Flügeln",
            nl: "Koning en pionnen op tegenovergestelde vleugels"
          }
        ],
        correct: 0,
        explanation: {
          en: "Outflanking is a winning technique where the attacking king maneuvers around the defending king's position to gain access to key squares behind enemy lines. Like a military flanking maneuver, this sidesteps direct opposition, allowing the king to penetrate the position and support pawn advancement to promotion.",
          es: "Flanquear es una técnica ganadora donde el rey atacante maniobra alrededor de la posición del rey defensor para ganar acceso a casillas clave detrás de las líneas enemigas. Como una maniobra de flanqueo militar, esto evita la oposición directa, permitiendo que el rey penetre la posición y apoye el avance del peón hacia la promoción.",
          de: "Umgehen ist eine Siegtechnik, bei der der angreifende König um die Position des verteidigenden Königs manövriert, um Zugang zu Schlüsselfeldern hinter feindlichen Linien zu erhalten. Wie ein militärisches Umgehungsmanöver umgeht dies direkte Opposition und ermöglicht es dem König, in die Position einzudringen und die Bauernförderung zur Beförderung zu unterstützen.",
          nl: "Omtrekken is een winnende techniek waarbij de aanvallende koning manoeuvreert rond de positie van de verdedigende koning om toegang te krijgen tot sleutelvelden achter vijandelijke linies. Zoals een militaire omtrekkende manoeuvre omzeilt dit directe oppositie, waardoor de koning de positie kan penetreren en pion vooruitgang naar promotie kan ondersteunen."
        }
      },
      {
        question: {
          en: "What is 'underpromotion' strategy in checkers?",
          es: "¿Qué es la estrategia de 'subpromoción' en damas?",
          de: "Was ist 'Unterverwandlung'-Strategie beim Dame?",
          nl: "Wat is 'onderpromotie' strategie in dammen?"
        },
        options: [
          {
            en: "Deliberately delaying promotion to maintain tactical threats or positioning",
            es: "Retrasar deliberadamente la promoción para mantener amenazas tácticas o posicionamiento",
            de: "Beförderung absichtlich verzögern, um taktische Drohungen oder Positionierung aufrechtzuerhalten",
            nl: "Promotie opzettelijk vertragen om tactische dreigingen of positionering te behouden"
          },
          {
            en: "Promoting to a piece other than a queen",
            es: "Promover a una pieza que no sea dama",
            de: "Zu einem anderen Stein als einer Dame befördern",
            nl: "Promoveren naar een ander stuk dan een dame"
          },
          {
            en: "Promoting on a lower rank",
            es: "Promover en una fila inferior",
            de: "Auf einer niedrigeren Reihe befördern",
            nl: "Promoveren op een lagere rij"
          },
          {
            en: "Not promoting at all",
            es: "No promover en absoluto",
            de: "Überhaupt nicht befördern",
            nl: "Helemaal niet promoveren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Underpromotion strategy involves deliberately keeping a piece from crowning when it could, because the uncrowned piece maintains better tactical positioning or threats. Sometimes an uncrowned piece on the seventh row controls critical squares or maintains forcing threats that would be lost upon promotion to a less mobile king.",
          es: "La estrategia de subpromoción implica deliberadamente mantener una pieza sin coronar cuando podría, porque la pieza sin coronar mantiene mejor posicionamiento táctico o amenazas. A veces una pieza sin coronar en la séptima fila controla casillas críticas o mantiene amenazas forzantes que se perderían al promover a un rey menos móvil.",
          de: "Die Unterverwandlung-Strategie beinhaltet, absichtlich einen Stein vom Krönen abzuhalten, obwohl es möglich wäre, weil der ungekrönte Stein bessere taktische Positionierung oder Drohungen beibehält. Manchmal kontrolliert ein ungekrönter Stein auf der siebten Reihe kritische Felder oder behält erzwingende Drohungen bei, die bei Beförderung zu einem weniger mobilen König verloren gehen würden.",
          nl: "Onderpromotie strategie houdt in dat opzettelijk een stuk wordt weerhouden van kronen terwijl het zou kunnen, omdat het ongekroonde stuk betere tactische positionering of dreigingen behoudt. Soms controleert een ongekroond stuk op de zevende rij kritieke velden of behoudt dwingende dreigingen die verloren zouden gaan bij promotie naar een minder mobiele koning."
        }
      },
      {
        question: {
          en: "What is 'backward tempo' in advanced tactical play?",
          es: "¿Qué es el 'tempo hacia atrás' en juego táctico avanzado?",
          de: "Was ist 'Rückwärts-Tempo' im fortgeschrittenen taktischen Spiel?",
          nl: "Wat is 'achterwaarts tempo' in geavanceerd tactisch spel?"
        },
        options: [
          {
            en: "King retreating to gain tempo and force opponent into zugzwang",
            es: "Rey retirándose para ganar tempo y forzar al oponente en zugzwang",
            de: "König zieht sich zurück, um Tempo zu gewinnen und Gegner in Zugzwang zu zwingen",
            nl: "Koning die zich terugtrekt om tempo te winnen en tegenstander in zugzwang te dwingen"
          },
          {
            en: "Losing time deliberately",
            es: "Perder tiempo deliberadamente",
            de: "Absichtlich Zeit verlieren",
            nl: "Opzettelijk tijd verliezen"
          },
          {
            en: "Moving pieces backward only",
            es: "Mover piezas solo hacia atrás",
            de: "Steine nur rückwärts bewegen",
            nl: "Stukken alleen achteruit bewegen"
          },
          {
            en: "Retreating when losing",
            es: "Retirarse cuando se pierde",
            de: "Sich zurückziehen beim Verlieren",
            nl: "Terugtrekken bij verliezen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Backward tempo is a sophisticated technique where a king deliberately retreats (moves backward) to manipulate the move count, ultimately forcing the opponent into zugzwang. This paradoxical concept shows that moving away from the goal can sometimes be the fastest path to victory, as the retreat changes whose turn it is at critical moments.",
          es: "El tempo hacia atrás es una técnica sofisticada donde un rey deliberadamente retrocede (se mueve hacia atrás) para manipular el conteo de movimientos, finalmente forzando al oponente en zugzwang. Este concepto paradójico muestra que alejarse del objetivo a veces puede ser el camino más rápido hacia la victoria, ya que el retroceso cambia de quién es el turno en momentos críticos.",
          de: "Rückwärts-Tempo ist eine ausgefeilte Technik, bei der ein König sich absichtlich zurückzieht (rückwärts bewegt), um die Zuganzahl zu manipulieren und den Gegner letztendlich in Zugzwang zu zwingen. Dieses paradoxe Konzept zeigt, dass das Wegbewegen vom Ziel manchmal der schnellste Weg zum Sieg sein kann, da der Rückzug ändert, wer in kritischen Momenten am Zug ist.",
          nl: "Achterwaarts tempo is een verfijnde techniek waarbij een koning opzettelijk terugtrekt (achteruit beweegt) om het zettenaantal te manipuleren, waarbij uiteindelijk de tegenstander in zugzwang wordt gedwongen. Dit paradoxale concept toont dat van het doel wegbewegen soms het snelste pad naar overwinning kan zijn, omdat de terugtrekking verandert wiens beurt het is op kritieke momenten."
        }
      },
      {
        question: {
          en: "What is 'tempo sacrifice' for strategic gain?",
          es: "¿Qué es el 'sacrificio de tempo' para ganancia estratégica?",
          de: "Was ist 'Tempoopfer' für strategischen Gewinn?",
          nl: "Wat is 'tempo offer' voor strategische winst?"
        },
        options: [
          {
            en: "Deliberately losing a move to improve position or create better piece coordination",
            es: "Perder deliberadamente un movimiento para mejorar la posición o crear mejor coordinación de piezas",
            de: "Absichtlich einen Zug verlieren, um die Position zu verbessern oder bessere Steinkoordination zu schaffen",
            nl: "Opzettelijk een zet verliezen om positie te verbeteren of betere stuk coördinatie te creëren"
          },
          {
            en: "Trading time for material",
            es: "Intercambiar tiempo por material",
            de: "Zeit gegen Material tauschen",
            nl: "Tijd ruilen voor materiaal"
          },
          {
            en: "Playing slowly to think",
            es: "Jugar lentamente para pensar",
            de: "Langsam spielen zum Nachdenken",
            nl: "Langzaam spelen om na te denken"
          },
          {
            en: "Wasting opponent's time",
            es: "Desperdiciar el tiempo del oponente",
            de: "Zeit des Gegners verschwenden",
            nl: "Tijd van tegenstander verspillen"
          }
        ],
        correct: 0,
        explanation: {
          en: "A tempo sacrifice intentionally wastes a move to reach the same position but with the opponent to move, often creating zugzwang or improving piece coordination. While losing time seems counterintuitive, the improved positioning or forcing the opponent to move first can provide advantages worth more than the tempo lost.",
          es: "Un sacrificio de tempo intencionalmente desperdicia un movimiento para alcanzar la misma posición pero con el oponente a mover, a menudo creando zugzwang o mejorando la coordinación de piezas. Aunque perder tiempo parece contraintuitivo, la posición mejorada o forzar al oponente a mover primero puede proporcionar ventajas que valen más que el tempo perdido.",
          de: "Ein Tempoopfer verschwendet absichtlich einen Zug, um dieselbe Position zu erreichen, aber mit dem Gegner am Zug, was oft Zugzwang schafft oder die Steinkoordination verbessert. Während Zeit zu verlieren kontraintuitiv erscheint, kann die verbesserte Positionierung oder das Zwingen des Gegners, zuerst zu ziehen, Vorteile bieten, die mehr wert sind als das verlorene Tempo.",
          nl: "Een tempo offer verspilt opzettelijk een zet om dezelfde positie te bereiken maar met de tegenstander aan zet, waarbij vaak zugzwang wordt gecreëerd of stuk coördinatie wordt verbeterd. Hoewel tijd verliezen contra-intuïtief lijkt, kan de verbeterde positionering of het dwingen van de tegenstander om eerst te zetten voordelen bieden die meer waard zijn dan het verloren tempo."
        }
      },
      {
        question: {
          en: "What is 'diagonal control domination' in king endgames?",
          es: "¿Qué es la 'dominación de control diagonal' en finales de rey?",
          de: "Was ist 'Diagonalkontroll-Dominanz' in König-Endspielen?",
          nl: "Wat is 'diagonale controle dominantie' in koning eindspelen?"
        },
        options: [
          {
            en: "Establishing king control over main diagonals to restrict opponent mobility",
            es: "Establecer control de rey sobre diagonales principales para restringir movilidad del oponente",
            de: "Königskontrolle über Hauptdiagonalen etablieren, um Gegnermobilität einzuschränken",
            nl: "Koning controle vestigen over hoofd diagonalen om tegenstander mobiliteit te beperken"
          },
          {
            en: "Controlling all diagonal moves",
            es: "Controlar todos los movimientos diagonales",
            de: "Alle Diagonalzüge kontrollieren",
            nl: "Alle diagonale zetten controleren"
          },
          {
            en: "Having more pieces on diagonals",
            es: "Tener más piezas en diagonales",
            de: "Mehr Steine auf Diagonalen haben",
            nl: "Meer stukken op diagonalen hebben"
          },
          {
            en: "Moving only diagonally",
            es: "Mover solo diagonalmente",
            de: "Nur diagonal bewegen",
            nl: "Alleen diagonaal bewegen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Diagonal control domination involves positioning your king to control the board's main diagonals, which are the longest paths and provide maximum mobility. By dominating these key diagonals, you restrict the opponent king's movement options, control critical squares, and create winning opportunities through superior piece activity and board control.",
          es: "La dominación de control diagonal implica posicionar tu rey para controlar las diagonales principales del tablero, que son los caminos más largos y proporcionan máxima movilidad. Al dominar estas diagonales clave, restringes las opciones de movimiento del rey oponente, controlas casillas críticas y creas oportunidades ganadoras a través de actividad de pieza superior y control del tablero.",
          de: "Diagonalkontroll-Dominanz beinhaltet die Positionierung Ihres Königs zur Kontrolle der Hauptdiagonalen des Bretts, die die längsten Wege sind und maximale Mobilität bieten. Durch Dominanz über diese Schlüsseldiagonalen schränken Sie die Bewegungsoptionen des gegnerischen Königs ein, kontrollieren kritische Felder und schaffen Gewinnchancen durch überlegene Steinaktivität und Brettkontrolle.",
          nl: "Diagonale controle dominantie houdt in dat je koning wordt gepositioneerd om de hoofd diagonalen van het bord te controleren, die de langste paden zijn en maximale mobiliteit bieden. Door deze sleutel diagonalen te domineren, beperk je de bewegingsopties van de tegenstander koning, controleer je kritieke velden en creëer je winnende kansen door superieure stuk activiteit en bord controle."
        }
      },
      {
        question: {
          en: "What is 'perfect information endgame solving' in computer analysis?",
          es: "¿Qué es la 'resolución de final de información perfecta' en análisis de computadora?",
          de: "Was ist 'Perfekte-Information-Endspiel-Lösung' in Computeranalyse?",
          nl: "Wat is 'perfecte informatie eindspel oplossen' in computer analyse?"
        },
        options: [
          {
            en: "Computer databases with mathematically proven optimal play for every position",
            es: "Bases de datos de computadora con juego óptimo matemáticamente probado para cada posición",
            de: "Computerdatenbanken mit mathematisch bewiesenem optimalem Spiel für jede Position",
            nl: "Computer databases met wiskundig bewezen optimaal spel voor elke positie"
          },
          {
            en: "Computers knowing all past games",
            es: "Computadoras conociendo todos los juegos pasados",
            de: "Computer kennen alle vergangenen Spiele",
            nl: "Computers die alle eerdere games kennen"
          },
          {
            en: "Analyzing only simple positions",
            es: "Analizar solo posiciones simples",
            de: "Nur einfache Positionen analysieren",
            nl: "Alleen simpele posities analyseren"
          },
          {
            en: "Perfect move calculation speed",
            es: "Velocidad de cálculo de movimiento perfecta",
            de: "Perfekte Zugberechnungsgeschwindigkeit",
            nl: "Perfecte zet berekeningssnelheid"
          }
        ],
        correct: 0,
        explanation: {
          en: "Perfect information endgame solving uses computers to exhaustively calculate every possible position in specific endgames (like all 6-piece positions), proving mathematically whether each position is won, lost, or drawn with perfect play. These solved databases revolutionized checkers theory by providing absolute truth about complex endgames previously understood only through human intuition and experience.",
          es: "La resolución de final de información perfecta usa computadoras para calcular exhaustivamente cada posición posible en finales específicos (como todas las posiciones de 6 piezas), probando matemáticamente si cada posición es ganada, perdida o tablas con juego perfecto. Estas bases de datos resueltas revolucionaron la teoría de damas proporcionando verdad absoluta sobre finales complejos previamente entendidos solo a través de intuición y experiencia humana.",
          de: "Perfekte-Information-Endspiel-Lösung nutzt Computer, um jede mögliche Position in spezifischen Endspielen (wie alle 6-Stein-Positionen) erschöpfend zu berechnen und mathematisch zu beweisen, ob jede Position mit perfektem Spiel gewonnen, verloren oder remis ist. Diese gelösten Datenbanken revolutionierten die Dame-Theorie, indem sie absolute Wahrheit über komplexe Endspiele lieferten, die zuvor nur durch menschliche Intuition und Erfahrung verstanden wurden.",
          nl: "Perfecte informatie eindspel oplossen gebruikt computers om uitputtend elke mogelijke positie in specifieke eindspelen (zoals alle 6-stuk posities) te berekenen, waarbij wiskundig wordt bewezen of elke positie gewonnen, verloren of remise is met perfect spel. Deze opgeloste databases revolutioneerden dammen theorie door absolute waarheid te bieden over complexe eindspelen die eerder alleen werden begrepen door menselijke intuïtie en ervaring."
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
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level6;
  } else if (typeof window !== 'undefined') {
    window.level6 = level6;
  }
})();
