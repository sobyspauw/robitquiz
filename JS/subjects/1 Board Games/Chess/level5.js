// Quiz Template - Level 5: Bord spelletjes - Schaken
(function() {
  const level5 = {
    name: {
      en: "Chess",
      es: "Ajedrez",
      de: "Schach",
      nl: "Schaken"
    },
    questions: [
      {
        question: {
          en: "What are the three main opening principles in chess?",
          es: "¿Cuáles son los tres principios principales de apertura en ajedrez?",
          de: "Was sind die drei Hauptprinzipien der Eröffnung im Schach?",
          nl: "Wat zijn de drie belangrijkste openingsprincipes in schaken?"
        },
        options: [
          { en: "Control the center, develop pieces, castle king to safety", es: "Controlar el centro, desarrollar piezas, enrocar el rey a seguridad", de: "Zentrum kontrollieren, Figuren entwickeln, König in Sicherheit rochieren", nl: "Controleer het centrum, ontwikkel stukken, rokeer de koning naar veiligheid" },
          { en: "Attack immediately, sacrifice pawns, move queen out early", es: "Atacar inmediatamente, sacrificar peones, sacar la dama temprano", de: "Sofort angreifen, Bauern opfern, Dame früh herausbringen", nl: "Onmiddellijk aanvallen, pionnen offeren, dame vroeg uitbrengen" },
          { en: "Protect all pawns, keep pieces on back rank, wait for opponent", es: "Proteger todos los peones, mantener piezas en fila trasera, esperar al oponente", de: "Alle Bauern schützen, Figuren auf Grundreihe halten, auf Gegner warten", nl: "Bescherm alle pionnen, houd stukken op achterste rij, wacht op tegenstander" },
          { en: "Move pawns only, ignore center, develop rooks first", es: "Mover solo peones, ignorar el centro, desarrollar torres primero", de: "Nur Bauern ziehen, Zentrum ignorieren, Türme zuerst entwickeln", nl: "Alleen pionnen bewegen, centrum negeren, torens eerst ontwikkelen" }
        ],
        correct: 0,
        explanation: {
          en: "The three fundamental opening principles are: 1) Control the center squares (e4, d4, e5, d5), 2) Develop your pieces (knights and bishops) efficiently, and 3) Castle your king to safety. These principles help you achieve a good position in the opening.",
          es: "Los tres principios fundamentales de apertura son: 1) Controlar las casillas centrales (e4, d4, e5, d5), 2) Desarrollar tus piezas (caballos y alfiles) eficientemente, y 3) Enrocar tu rey a seguridad. Estos principios te ayudan a lograr una buena posición en la apertura.",
          de: "Die drei grundlegenden Eröffnungsprinzipien sind: 1) Kontrolle der Zentralfelder (e4, d4, e5, d5), 2) Effiziente Entwicklung Ihrer Figuren (Springer und Läufer) und 3) Rochieren des Königs in Sicherheit. Diese Prinzipien helfen Ihnen, eine gute Position in der Eröffnung zu erreichen.",
          nl: "De drie fundamentele openingsprincipes zijn: 1) Controleer de centrale velden (e4, d4, e5, d5), 2) Ontwikkel je stukken (paarden en lopers) efficiënt, en 3) Rokeer je koning naar veiligheid. Deze principes helpen je een goede positie te bereiken in de opening."
        }
      },
      {
        question: {
          en: "What is the 'Italian Game' opening?",
          es: "¿Qué es la apertura 'Giuoco Italiano'?",
          de: "Was ist die 'Italienische Partie'?",
          nl: "Wat is de 'Italiaanse Partij' opening?"
        },
        options: [
          { en: "1.e4 e5 2.Nf3 Nc6 3.Bc4", es: "1.e4 e5 2.Cf3 Cc6 3.Ac4", de: "1.e4 e5 2.Sf3 Sc6 3.Lc4", nl: "1.e4 e5 2.Pf3 Pc6 3.Lc4" },
          { en: "1.d4 d5 2.c4", es: "1.d4 d5 2.c4", de: "1.d4 d5 2.c4", nl: "1.d4 d5 2.c4" },
          { en: "1.e4 c5", es: "1.e4 c5", de: "1.e4 c5", nl: "1.e4 c5" },
          { en: "1.c4", es: "1.c4", de: "1.c4", nl: "1.c4" }
        ],
        correct: 0,
        explanation: {
          en: "The Italian Game is one of the oldest chess openings, beginning with 1.e4 e5 2.Nf3 Nc6 3.Bc4. White develops the bishop to c4, attacking Black's f7 square and aiming for quick development and control of the center.",
          es: "El Giuoco Italiano es una de las aperturas de ajedrez más antiguas, comenzando con 1.e4 e5 2.Cf3 Cc6 3.Ac4. Las blancas desarrollan el alfil a c4, atacando la casilla f7 de las negras y apuntando a un desarrollo rápido y control del centro.",
          de: "Die Italienische Partie ist eine der ältesten Schacheröffnungen und beginnt mit 1.e4 e5 2.Sf3 Sc6 3.Lc4. Weiß entwickelt den Läufer nach c4, greift Schwarz' f7-Feld an und zielt auf schnelle Entwicklung und Zentrumskontrolle.",
          nl: "De Italiaanse Partij is een van de oudste schaakopeningen, beginnend met 1.e4 e5 2.Pf3 Pc6 3.Lc4. Wit ontwikkelt de loper naar c4, valt zwart's f7-veld aan en streeft naar snelle ontwikkeling en controle van het centrum."
        }
      },
      {
        question: {
          en: "What is a 'discovered attack' in chess?",
          es: "¿Qué es un 'ataque al descubierto' en ajedrez?",
          de: "Was ist ein 'Abzugsangriff' im Schach?",
          nl: "Wat is een 'ontdekte aanval' in schaken?"
        },
        options: [
          { en: "Moving a piece reveals an attack from another piece behind it", es: "Mover una pieza revela un ataque de otra pieza detrás de ella", de: "Das Bewegen einer Figur enthüllt einen Angriff von einer anderen Figur dahinter", nl: "Het bewegen van een stuk onthult een aanval van een ander stuk erachter" },
          { en: "Finding a hidden tactic", es: "Encontrar una táctica oculta", de: "Eine versteckte Taktik finden", nl: "Een verborgen tactiek vinden" },
          { en: "Attacking from a distance", es: "Atacar desde la distancia", de: "Aus der Entfernung angreifen", nl: "Van een afstand aanvallen" },
          { en: "Attacking with two pieces", es: "Atacar con dos piezas", de: "Mit zwei Figuren angreifen", nl: "Aanvallen met twee stukken" }
        ],
        correct: 0,
        explanation: {
          en: "A discovered attack occurs when moving one piece uncovers an attack from a piece behind it. This can be very powerful, especially when the moving piece also makes a threat, creating a 'double attack' situation.",
          es: "Un ataque al descubierto ocurre cuando mover una pieza descubre un ataque de una pieza detrás de ella. Esto puede ser muy poderoso, especialmente cuando la pieza que se mueve también hace una amenaza, creando una situación de 'ataque doble'.",
          de: "Ein Abzugsangriff tritt auf, wenn das Bewegen einer Figur einen Angriff von einer Figur dahinter aufdeckt. Dies kann sehr mächtig sein, besonders wenn die sich bewegende Figur auch eine Drohung macht und eine 'Doppelangriff'-Situation schafft.",
          nl: "Een ontdekte aanval vindt plaats wanneer het bewegen van een stuk een aanval van een stuk erachter onthult. Dit kan zeer krachtig zijn, vooral wanneer het bewegende stuk ook een bedreiging maakt, wat een 'dubbele aanval' situatie creëert."
        }
      },
      {
        question: {
          en: "What is the value of a knight compared to other pieces?",
          es: "¿Cuál es el valor de un caballo en comparación con otras piezas?",
          de: "Was ist der Wert eines Springers im Vergleich zu anderen Figuren?",
          nl: "Wat is de waarde van een paard vergeleken met andere stukken?"
        },
        options: [
          { en: "Approximately 3 points, equal to a bishop", es: "Aproximadamente 3 puntos, igual a un alfil", de: "Etwa 3 Punkte, gleich einem Läufer", nl: "Ongeveer 3 punten, gelijk aan een loper" },
          { en: "Approximately 5 points, equal to a rook", es: "Aproximadamente 5 puntos, igual a una torre", de: "Etwa 5 Punkte, gleich einem Turm", nl: "Ongeveer 5 punten, gelijk aan een toren" },
          { en: "Approximately 9 points, equal to a queen", es: "Aproximadamente 9 puntos, igual a una dama", de: "Etwa 9 Punkte, gleich einer Dame", nl: "Ongeveer 9 punten, gelijk aan een dame" },
          { en: "Approximately 1 point, equal to a pawn", es: "Aproximadamente 1 punto, igual a un peón", de: "Etwa 1 Punkt, gleich einem Bauern", nl: "Ongeveer 1 punt, gelijk aan een pion" }
        ],
        correct: 0,
        explanation: {
          en: "A knight is worth approximately 3 points in the standard piece value system. This is roughly equal to a bishop (also 3 points), less than a rook (5 points) and queen (9 points), but more than a pawn (1 point). Knights are unique because they can jump over other pieces.",
          es: "Un caballo vale aproximadamente 3 puntos en el sistema estándar de valor de piezas. Esto es aproximadamente igual a un alfil (también 3 puntos), menos que una torre (5 puntos) y dama (9 puntos), pero más que un peón (1 punto). Los caballos son únicos porque pueden saltar sobre otras piezas.",
          de: "Ein Springer ist im Standardsystem für Figurenwerte etwa 3 Punkte wert. Dies ist ungefähr gleich einem Läufer (auch 3 Punkte), weniger als ein Turm (5 Punkte) und Dame (9 Punkte), aber mehr als ein Bauer (1 Punkt). Springer sind einzigartig, weil sie über andere Figuren springen können.",
          nl: "Een paard is ongeveer 3 punten waard in het standaard stukwaarde systeem. Dit is ongeveer gelijk aan een loper (ook 3 punten), minder dan een toren (5 punten) en dame (9 punten), maar meer dan een pion (1 punt). Paarden zijn uniek omdat ze over andere stukken kunnen springen."
        }
      },
      {
        question: {
          en: "What is 'development' in the opening phase?",
          es: "¿Qué es el 'desarrollo' en la fase de apertura?",
          de: "Was ist 'Entwicklung' in der Eröffnungsphase?",
          nl: "Wat is 'ontwikkeling' in de openingsfase?"
        },
        options: [
          { en: "Moving pieces from their starting squares to more active positions", es: "Mover piezas desde sus casillas iniciales a posiciones más activas", de: "Figuren von ihren Startfeldern zu aktiveren Positionen bewegen", nl: "Stukken van hun startvelden naar actievere posities verplaatsen" },
          { en: "Advancing pawns to control space", es: "Avanzar peones para controlar espacio", de: "Bauern vorschieben um Raum zu kontrollieren", nl: "Pionnen opschuiven om ruimte te controleren" },
          { en: "Creating a plan for the middlegame", es: "Crear un plan para el medio juego", de: "Einen Plan für das Mittelspiel erstellen", nl: "Een plan maken voor het middenspel" },
          { en: "Moving the king to safety", es: "Mover el rey a seguridad", de: "Den König in Sicherheit bringen", nl: "De koning naar veiligheid verplaatsen" }
        ],
        correct: 0,
        explanation: {
          en: "Development refers to bringing your pieces (especially knights and bishops) from their starting positions to more active squares where they control important parts of the board. Good development is crucial for a strong opening and helps you transition smoothly into the middlegame.",
          es: "El desarrollo se refiere a llevar tus piezas (especialmente caballos y alfiles) desde sus posiciones iniciales a casillas más activas donde controlan partes importantes del tablero. Un buen desarrollo es crucial para una apertura fuerte y te ayuda a transitar suavemente al medio juego.",
          de: "Entwicklung bezieht sich auf das Bringen Ihrer Figuren (besonders Springer und Läufer) von ihren Startpositionen zu aktiveren Feldern, wo sie wichtige Teile des Bretts kontrollieren. Gute Entwicklung ist entscheidend für eine starke Eröffnung und hilft Ihnen, reibungslos ins Mittelspiel überzugehen.",
          nl: "Ontwikkeling verwijst naar het brengen van je stukken (vooral paarden en lopers) van hun startposities naar actievere velden waar ze belangrijke delen van het bord controleren. Goede ontwikkeling is cruciaal voor een sterke opening en helpt je soepel over te gaan naar het middenspel."
        }
      },
      {
        question: {
          en: "What famous chess match was called 'The Match of the Century'?",
          es: "¿Qué famoso partido de ajedrez se llamó 'El Partido del Siglo'?",
          de: "Welches berühmte Schachmatch wurde 'Das Match des Jahrhunderts' genannt?",
          nl: "Welke beroemde schaakwedstrijd werd 'De Wedstrijd van de Eeuw' genoemd?"
        },
        options: [
          { en: "Fischer vs Spassky 1972", es: "Fischer vs Spassky 1972", de: "Fischer vs Spasski 1972", nl: "Fischer vs Spassky 1972" },
          { en: "Kasparov vs Karpov 1985", es: "Kasparov vs Karpov 1985", de: "Kasparow vs Karpow 1985", nl: "Kasparov vs Karpov 1985" },
          { en: "Carlsen vs Anand 2013", es: "Carlsen vs Anand 2013", de: "Carlsen vs Anand 2013", nl: "Carlsen vs Anand 2013" },
          { en: "Alekhine vs Capablanca 1927", es: "Alekhine vs Capablanca 1927", de: "Aljechin vs Capablanca 1927", nl: "Alekhine vs Capablanca 1927" }
        ],
        correct: 0,
        explanation: {
          en: "The 1972 World Championship match between Bobby Fischer and Boris Spassky in Reykjavik was dubbed 'The Match of the Century' due to Cold War tensions.",
          es: "El partido del Campeonato Mundial de 1972 entre Bobby Fischer y Boris Spassky en Reikiavik fue apodado 'El Partido del Siglo' debido a las tensiones de la Guerra Fría.",
          de: "Das Weltmeisterschaftsmatch 1972 zwischen Bobby Fischer und Boris Spasski in Reykjavik wurde aufgrund der Spannungen des Kalten Krieges 'Das Match des Jahrhunderts' genannt.",
          nl: "De Wereldkampioenschapswedstrijd van 1972 tussen Bobby Fischer en Boris Spassky in Reykjavik werd 'De Wedstrijd van de Eeuw' genoemd vanwege de Koude Oorlog-spanningen."
        }
      },
      {
        question: {
          en: "What is the 'King's Indian Defense'?",
          es: "¿Qué es la 'Defensa India de Rey'?",
          de: "Was ist die 'Königsindische Verteidigung'?",
          nl: "Wat is de 'Konings-Indische Verdediging'?"
        },
        options: [
          { en: "1.d4 Nf6 2.c4 g6 with fianchetto", es: "1.d4 Cf6 2.c4 g6 con fianchetto", de: "1.d4 Sf6 2.c4 g6 mit Fianchetto", nl: "1.d4 Pf6 2.c4 g6 met fianchetto" },
          { en: "1.e4 d6", es: "1.e4 d6", de: "1.e4 d6", nl: "1.e4 d6" },
          { en: "1.d4 e6", es: "1.d4 e6", de: "1.d4 e6", nl: "1.d4 e6" },
          { en: "1.c4 Nf6", es: "1.c4 Cf6", de: "1.c4 Sf6", nl: "1.c4 Pf6" }
        ],
        correct: 0,
        explanation: {
          en: "The King's Indian Defense is a hypermodern opening where Black allows White to build a center, then attacks it with fianchettoed bishops.",
          es: "La Defensa India de Rey es una apertura hipermoderna donde las negras permiten que las blancas construyan un centro, luego lo atacan con alfiles en fianchetto.",
          de: "Die Königsindische Verteidigung ist eine hypermoderne Eröffnung, bei der Schwarz Weiß ein Zentrum aufbauen lässt und es dann mit fianch ettierten Läufern angreift.",
          nl: "De Konings-Indische Verdediging is een hypermoderne opening waarbij zwart wit een centrum laat opbouwen en het dan aanvalt met gefianchetteerde lopers."
        }
      },
      {
        question: {
          en: "Who holds the record for the youngest World Chess Champion?",
          es: "¿Quién tiene el récord del Campeón Mundial de Ajedrez más joven?",
          de: "Wer hält den Rekord als jüngster Schachweltmeister?",
          nl: "Wie heeft het record van jongste schaakwereldkampioen?"
        },
        options: [
          { en: "Garry Kasparov (22 years old)", es: "Garry Kasparov (22 años)", de: "Garry Kasparow (22 Jahre alt)", nl: "Garry Kasparov (22 jaar oud)" },
          { en: "Magnus Carlsen (22 years old)", es: "Magnus Carlsen (22 años)", de: "Magnus Carlsen (22 Jahre alt)", nl: "Magnus Carlsen (22 jaar oud)" },
          { en: "Bobby Fischer (20 years old)", es: "Bobby Fischer (20 años)", de: "Bobby Fischer (20 Jahre alt)", nl: "Bobby Fischer (20 jaar oud)" },
          { en: "Mikhail Tal (23 years old)", es: "Mikhail Tal (23 años)", de: "Michail Tal (23 Jahre alt)", nl: "Mikhail Tal (23 jaar oud)" }
        ],
        correct: 0,
        explanation: {
          en: "Garry Kasparov became World Champion at 22 years and 210 days in 1985, making him the youngest champion in history at that time.",
          es: "Garry Kasparov se convirtió en Campeón Mundial a los 22 años y 210 días en 1985, convirtiéndose en el campeón más joven de la historia en ese momento.",
          de: "Garry Kasparow wurde 1985 mit 22 Jahren und 210 Tagen Weltmeister und war damit zu dieser Zeit der jüngste Weltmeister der Geschichte.",
          nl: "Garry Kasparov werd in 1985 op 22 jaar en 210 dagen wereldkampioen, waarmee hij destijds de jongste kampioen in de geschiedenis werd."
        }
      },
      {
        question: {
          en: "What is a 'battery' in chess?",
          es: "¿Qué es una 'batería' en ajedrez?",
          de: "Was ist eine 'Batterie' im Schach?",
          nl: "Wat is een 'batterij' in schaken?"
        },
        options: [
          { en: "Two pieces aiming at target", es: "Dos piezas en la misma línea apuntando a un objetivo", de: "Zwei Figuren auf derselben Linie, die auf ein Ziel zielen", nl: "Twee stukken op dezelfde lijn gericht op een doel" },
          { en: "A powerful attack", es: "Un ataque poderoso", de: "Ein mächtiger Angriff", nl: "Een krachtige aanval" },
          { en: "Multiple threats", es: "Múltiples amenazas", de: "Mehrere Bedrohungen", nl: "Meerdere bedreigingen" },
          { en: "Energy in a position", es: "Energía en una posición", de: "Energie in einer Stellung", nl: "Energie in een positie" }
        ],
        correct: 0,
        explanation: {
          en: "A battery is formed when two pieces of the same color (typically queen and rook, or queen and bishop) are aligned on the same rank, file, or diagonal.",
          es: "Una batería se forma cuando dos piezas del mismo color (típicamente reina y torre, o reina y alfil) están alineadas en la misma fila, columna o diagonal.",
          de: "Eine Batterie wird gebildet, wenn zwei Figuren derselben Farbe (typischerweise Dame und Turm oder Dame und Läufer) auf derselben Reihe, Linie oder Diagonalen ausgerichtet sind.",
          nl: "Een batterij wordt gevormd wanneer twee stukken van dezelfde kleur (meestal koningin en toren, of koningin en loper) op dezelfde rij, lijn of diagonaal zijn uitgelijnd."
        }
      },
      {
        question: {
          en: "What is the 'Najdorf Variation' of the Sicilian Defense?",
          es: "¿Qué es la 'Variante Najdorf' de la Defensa Siciliana?",
          de: "Was ist die 'Najdorf-Variante' der Sizilianischen Verteidigung?",
          nl: "Wat is de 'Najdorf Variant' van de Siciliaanse Verdediging?"
        },
        options: [
          { en: "1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6", es: "1.e4 c5 2.Cf3 d6 3.d4 cxd4 4.Cxd4 Cf6 5.Cc3 a6", de: "1.e4 c5 2.Sf3 d6 3.d4 cxd4 4.Sxd4 Sf6 5.Sc3 a6", nl: "1.e4 c5 2.Pf3 d6 3.d4 cxd4 4.Pxd4 Pf6 5.Pc3 a6" },
          { en: "A queen sacrifice", es: "Un sacrificio de reina", de: "Ein Damenopfer", nl: "Een koninginnenoffer" },
          { en: "An endgame technique", es: "Una técnica de final", de: "Eine Endspiel-Technik", nl: "Een eindspeltechniek" },
          { en: "A pawn storm", es: "Una tormenta de peones", de: "Ein Bauernsturm", nl: "Een pionstorm" }
        ],
        correct: 0,
        explanation: {
          en: "The Najdorf Variation is one of the sharpest and most popular lines of the Sicilian Defense, named after Miguel Najdorf and featuring the move 5...a6.",
          es: "La Variante Najdorf es una de las líneas más agudas y populares de la Defensa Siciliana, nombrada en honor a Miguel Najdorf y presenta el movimiento 5...a6.",
          de: "Die Najdorf-Variante ist eine der schärfsten und beliebtesten Linien der Sizilianischen Verteidigung, benannt nach Miguel Najdorf und mit dem Zug 5...a6.",
          nl: "De Najdorf Variant is een van de scherpste en populairste lijnen van de Siciliaanse Verdediging, genoemd naar Miguel Najdorf en met de zet 5...a6."
        }
      },
      {
        question: {
          en: "What was Bobby Fischer's famous 'Game of the Century'?",
          es: "¿Cuál fue el famoso 'Juego del Siglo' de Bobby Fischer?",
          de: "Was war Bobby Fischers berühmte 'Partie des Jahrhunderts'?",
          nl: "Wat was Bobby Fischer's beroemde 'Partij van de Eeuw'?"
        },
        options: [
          { en: "His win against Donald Byrne at age 13", es: "Su victoria contra Donald Byrne a los 13 años", de: "Sein Sieg gegen Donald Byrne im Alter von 13 Jahren", nl: "Zijn overwinning tegen Donald Byrne op 13-jarige leeftijd" },
          { en: "His match against Spassky", es: "Su partido contra Spassky", de: "Sein Match gegen Spasski", nl: "Zijn wedstrijd tegen Spassky" },
          { en: "His perfect score at the US Championship", es: "Su puntuación perfecta en el Campeonato de EE.UU.", de: "Seine perfekte Punktzahl bei der US-Meisterschaft", nl: "Zijn perfecte score bij het US Kampioenschap" },
          { en: "His win against Petrosian", es: "Su victoria contra Petrosian", de: "Sein Sieg gegen Petrosjan", nl: "Zijn overwinning tegen Petrosian" }
        ],
        correct: 0,
        explanation: {
          en: "The 'Game of the Century' was Fischer's brilliant victory against Donald Byrne in 1956 when Fischer was only 13 years old, featuring a queen sacrifice.",
          es: "El 'Juego del Siglo' fue la brillante victoria de Fischer contra Donald Byrne en 1956 cuando Fischer tenía solo 13 años, con un sacrificio de reina.",
          de: "Die 'Partie des Jahrhunderts' war Fischers brillanter Sieg gegen Donald Byrne 1956, als Fischer erst 13 Jahre alt war, mit einem Damenopfer.",
          nl: "De 'Partij van de Eeuw' was Fischer's briljante overwinning tegen Donald Byrne in 1956 toen Fischer slechts 13 jaar oud was, met een koninginnenoffer."
        }
      },
      {
        question: {
          en: "What is 'Hypermodernism' in chess?",
          es: "¿Qué es el 'Hipermodernismo' en ajedrez?",
          de: "Was ist 'Hypermodernismus' im Schach?",
          nl: "Wat is 'Hypermodernisme' in schaken?"
        },
        options: [
          { en: "Control center from distance", es: "Controlar el centro desde la distancia con piezas", de: "Das Zentrum aus der Entfernung mit Figuren kontrollieren", nl: "Het centrum van een afstand met stukken controleren" },
          { en: "Ultra-aggressive play", es: "Juego ultra agresivo", de: "Ultraaggressives Spiel", nl: "Ultra-agressief spel" },
          { en: "Modern computer openings", es: "Aperturas modernas de computadora", de: "Moderne Computereröffnungen", nl: "Moderne computeropeningen" },
          { en: "Fast-paced chess", es: "Ajedrez rápido", de: "Schnelles Schach", nl: "Snel schaak" }
        ],
        correct: 0,
        explanation: {
          en: "Hypermodernism, developed by Nimzowitsch and Réti, advocates controlling the center with pieces from a distance rather than occupying it with pawns early.",
          es: "El Hipermodernismo, desarrollado por Nimzowitsch y Réti, aboga por controlar el centro con piezas desde la distancia en lugar de ocuparlo con peones temprano.",
          de: "Der Hypermodernismus, entwickelt von Nimzowitsch und Réti, befürwortet die Kontrolle des Zentrums mit Figuren aus der Entfernung, anstatt es früh mit Bauern zu besetzen.",
          nl: "Hypermodernisme, ontwikkeld door Nimzowitsch en Réti, pleit voor het controleren van het centrum met stukken van een afstand in plaats van het vroeg bezetten met pionnen."
        }
      },
      {
        question: {
          en: "What is a 'windmill' combination in chess?",
          es: "¿Qué es una combinación de 'molino de viento' en ajedrez?",
          de: "Was ist eine 'Windmühlen'-Kombination im Schach?",
          nl: "Wat is een 'windmolen' combinatie in schaken?"
        },
        options: [
          { en: "Repeated discovered checks", es: "Jaques descubiertos repetidos para ganar material", de: "Wiederholte Abzugsschachs zum Materialgewinn", nl: "Herhaalde ontdekte schaken om materiaal te winnen" },
          { en: "A rotating pawn structure", es: "Una estructura de peones giratoria", de: "Eine rotierende Bauernstruktur", nl: "Een roterende pionstructuur" },
          { en: "Circular piece movement", es: "Movimiento circular de piezas", de: "Kreisförmige Figurenbewegung", nl: "Cirkelvormige stukbeweging" },
          { en: "A perpetual check pattern", es: "Un patrón de jaque perpetuo", de: "Ein Dauerschach-Muster", nl: "Een eeuwig schaak patroon" }
        ],
        correct: 0,
        explanation: {
          en: "A windmill is a powerful tactical motif where one piece gives repeated discovered checks while the other piece captures material with each check.",
          es: "Un molino de viento es un motivo táctico poderoso donde una pieza da jaques descubiertos repetidos mientras la otra pieza captura material con cada jaque.",
          de: "Eine Windmühle ist ein mächtiges taktisches Motiv, bei dem eine Figur wiederholte Abzugsschachs gibt, während die andere Figur bei jedem Schach Material schlägt.",
          nl: "Een windmolen is een krachtig tactisch motief waarbij een stuk herhaalde ontdekte schaken geeft terwijl het andere stuk bij elke schaak materiaal slaat."
        }
      },
      {
        question: {
          en: "What does 'GM' stand for in chess?",
          es: "¿Qué significa 'GM' en ajedrez?",
          de: "Was bedeutet 'GM' im Schach?",
          nl: "Waar staat 'GM' voor in schaken?"
        },
        options: [
          { en: "Grandmaster", es: "Gran Maestro", de: "Großmeister", nl: "Grootmeester" },
          { en: "Game Master", es: "Maestro del Juego", de: "Spielmeister", nl: "Spelmeester" },
          { en: "Great Move", es: "Gran Movimiento", de: "Großer Zug", nl: "Geweldige Zet" },
          { en: "Global Master", es: "Maestro Global", de: "Globaler Meister", nl: "Wereldmeester" }
        ],
        correct: 0,
        explanation: {
          en: "GM stands for Grandmaster, the highest title a chess player can achieve (apart from World Champion), awarded by FIDE based on tournament performance.",
          es: "GM significa Gran Maestro, el título más alto que un jugador de ajedrez puede lograr (aparte de Campeón Mundial), otorgado por la FIDE según el rendimiento en torneos.",
          de: "GM steht für Großmeister, der höchste Titel, den ein Schachspieler erreichen kann (abgesehen vom Weltmeister), verliehen von der FIDE basierend auf Turnierleistung.",
          nl: "GM staat voor Grootmeester, de hoogste titel die een schaker kan behalen (behalve Wereldkampioen), toegekend door FIDE op basis van toernooiprestaties."
        }
      },
      {
        question: {
          en: "What is the 'Philidor Position' in rook endgames?",
          es: "¿Qué es la 'Posición de Philidor' en finales de torres?",
          de: "Was ist die 'Philidor-Stellung' in Turmendsp ielen?",
          nl: "Wat is de 'Philidor Positie' in toreneindspelen?"
        },
        options: [
          { en: "Drawing with rook on 3rd rank", es: "Una técnica de empate con torre en la tercera fila", de: "Eine Remistechnik mit Turm auf der dritten Reihe", nl: "Een remisetechniek met toren op de derde rij" },
          { en: "A winning position", es: "Una posición ganadora", de: "Eine Gewinnstellung", nl: "Een winnende positie" },
          { en: "A stalemate trap", es: "Una trampa de ahogado", de: "Eine Pattfalle", nl: "Een patval" },
          { en: "An attacking formation", es: "Una formación de ataque", de: "Eine Angriffsformation", nl: "Een aanvalsformatie" }
        ],
        correct: 0,
        explanation: {
          en: "The Philidor Position is a fundamental drawing technique in rook endgames where the defending side keeps their rook on the third rank to prevent the opponent's king from advancing.",
          es: "La Posición de Philidor es una técnica de empate fundamental en finales de torres donde el lado defensor mantiene su torre en la tercera fila para evitar que el rey oponente avance.",
          de: "Die Philidor-Stellung ist eine grundlegende Remistechnik in Turmendspiel en, bei der die verteidigende Seite ihren Turm auf der dritten Reihe hält, um das Vorrücken des gegnerischen Königs zu verhindern.",
          nl: "De Philidor Positie is een fundamentele remisetechniek in toreneindspelen waarbij de verdedigende partij hun toren op de derde rij houdt om te voorkomen dat de koning van de tegenstander oprukt."
        }
      },
      {
        question: {
          en: "Which player is known as 'The Magician from Riga'?",
          es: "¿Qué jugador es conocido como 'El Mago de Riga'?",
          de: "Welcher Spieler ist als 'Der Zauberer von Riga' bekannt?",
          nl: "Welke speler staat bekend als 'De Tovenaar van Riga'?"
        },
        options: [
          { en: "Mikhail Tal", es: "Mikhail Tal", de: "Michail Tal", nl: "Mikhail Tal" },
          { en: "Garry Kasparov", es: "Garry Kasparov", de: "Garry Kasparow", nl: "Garry Kasparov" },
          { en: "Anatoly Karpov", es: "Anatoly Karpov", de: "Anatoly Karpow", nl: "Anatoly Karpov" },
          { en: "Viktor Korchnoi", es: "Viktor Korchnoi", de: "Viktor Kortschnoi", nl: "Viktor Korchnoi" }
        ],
        correct: 0,
        explanation: {
          en: "Mikhail Tal, the 8th World Champion, was nicknamed 'The Magician from Riga' for his brilliant tactical play and sacrificial attacking style.",
          es: "Mikhail Tal, el 8º Campeón Mundial, fue apodado 'El Mago de Riga' por su brillante juego táctico y estilo de ataque con sacrificios.",
          de: "Michail Tal, der 8. Weltmeister, wurde wegen seines brillanten taktischen Spiels und opferreichen Angriffsstils 'Der Zauberer von Riga' genannt.",
          nl: "Mikhail Tal, de 8e Wereldkampioen, kreeg de bijnaam 'De Tovenaar van Riga' vanwege zijn briljante tactische spel en opofferende aanvalsstijl."
        }
      },
      {
        question: {
          en: "What is 'an initiative' in chess?",
          es: "¿Qué es 'la iniciativa' en ajedrez?",
          de: "Was ist 'Initiative' im Schach?",
          nl: "Wat is 'het initiatief' in schaken?"
        },
        options: [
          { en: "Advantage dictating game flow", es: "La ventaja de dictar el flujo del juego", de: "Der Vorteil, den Spielfluss zu diktieren", nl: "Het voordeel van het dicteren van de spelflow" },
          { en: "The first move advantage", es: "La ventaja del primer movimiento", de: "Der Vorteil des ersten Zuges", nl: "Het voordeel van de eerste zet" },
          { en: "Starting a tournament", es: "Comenzar un torneo", de: "Ein Turnier beginnen", nl: "Een toernooi beginnen" },
          { en: "Proposing a draw", es: "Proponer tablas", de: "Ein Remis vorschlagen", nl: "Remise voorstellen" }
        ],
        correct: 0,
        explanation: {
          en: "The initiative means controlling the game's tempo and forcing the opponent to respond to your threats rather than pursuing their own plans.",
          es: "La iniciativa significa controlar el tempo del juego y forzar al oponente a responder a tus amenazas en lugar de perseguir sus propios planes.",
          de: "Initiative bedeutet, das Tempo des Spiels zu kontrollieren und den Gegner zu zwingen, auf Ihre Bedrohungen zu reagieren, anstatt eigene Pläne zu verfolgen.",
          nl: "Het initiatief betekent het tempo van het spel controleren en de tegenstander dwingen te reageren op jouw bedreigingen in plaats van hun eigen plannen na te streven."
        }
      },
      {
        question: {
          en: "What is the 'London System'?",
          es: "¿Qué es el 'Sistema Londres'?",
          de: "Was ist das 'Londoner System'?",
          nl: "Wat is het 'Londense Systeem'?"
        },
        options: [
          { en: "Solid opening: 1.d4, Bf4", es: "Un sistema de apertura sólido con 1.d4 y Af4", de: "Ein solides Eröffnungssystem mit 1.d4 und Lf4", nl: "Een solide openingssysteem met 1.d4 en Lf4" },
          { en: "A tournament format", es: "Un formato de torneo", de: "Ein Turnierformat", nl: "Een toernooiformaat" },
          { en: "A time control method", es: "Un método de control de tiempo", de: "Eine Zeitkontrollmethode", nl: "Een tijdcontrolemethode" },
          { en: "A chess club", es: "Un club de ajedrez", de: "Ein Schachclub", nl: "Een schaakclub" }
        ],
        correct: 0,
        explanation: {
          en: "The London System is a solid opening where White develops with d4, Bf4, e3, Nf3, and creates a stable pawn structure with few tactical complications.",
          es: "El Sistema Londres es una apertura sólida donde las blancas desarrollan con d4, Af4, e3, Cf3 y crean una estructura de peones estable con pocas complicaciones tácticas.",
          de: "Das Londoner System ist eine solide Eröffnung, bei der Weiß mit d4, Lf4, e3, Sf3 entwickelt und eine stabile Bauernstruktur mit wenigen taktischen Komplikationen schafft.",
          nl: "Het Londense Systeem is een solide opening waarbij wit ontwikkelt met d4, Lf4, e3, Pf3 en een stabiele pionstructuur creëert met weinig tactische complicaties."
        }
      },
      {
        question: {
          en: "What does 'zwischenzug' mean?",
          es: "¿Qué significa 'zwischenzug'?",
          de: "Was bedeutet 'Zwischenzug'?",
          nl: "Wat betekent 'zwischenzug'?"
        },
        options: [
          { en: "In-between/intermediate move", es: "Un movimiento intermedio", de: "Ein Zwischenzug", nl: "Een tussenzet" },
          { en: "A German opening", es: "Una apertura alemana", de: "Eine deutsche Eröffnung", nl: "Een Duitse opening" },
          { en: "A double move", es: "Un movimiento doble", de: "Ein Doppelzug", nl: "Een dubbele zet" },
          { en: "A final move", es: "Un movimiento final", de: "Ein Endzug", nl: "Een laatste zet" }
        ],
        correct: 0,
        explanation: {
          en: "Zwischenzug is a German term meaning 'in-between move' - an unexpected intermediate move inserted before an expected sequence, often creating a tactical advantage.",
          es: "Zwischenzug es un término alemán que significa 'movimiento intermedio' - un movimiento intermedio inesperado insertado antes de una secuencia esperada, a menudo creando una ventaja táctica.",
          de: "Zwischenzug bedeutet ein unerwarteter Zwischenzug, der vor einer erwarteten Sequenz eingefügt wird und oft einen taktischen Vorteil schafft.",
          nl: "Zwischenzug is een Duitse term die 'tussenzet' betekent - een onverwachte tussenzet die voor een verwachte reeks wordt ingevoegd, vaak een tactisch voordeel creërend."
        }
      },
      {
        question: {
          en: "What is 'Chess960' or 'Fischer Random Chess'?",
          es: "¿Qué es 'Chess960' o 'Ajedrez Aleatorio de Fischer'?",
          de: "Was ist 'Chess960' oder 'Fischer-Random-Schach'?",
          nl: "Wat is 'Chess960' of 'Fischer Random Schaak'?"
        },
        options: [
          { en: "Chess with random positions", es: "Ajedrez con posiciones iniciales aleatorias", de: "Schach mit randomisierten Startstellungen", nl: "Schaak met willekeurige startposities" },
          { en: "Speed chess in 960 seconds", es: "Ajedrez rápido en 960 segundos", de: "Schnellschach in 960 Sekunden", nl: "Snel schaak in 960 seconden" },
          { en: "960 famous games", es: "960 juegos famosos", de: "960 berühmte Partien", nl: "960 beroemde partijen" },
          { en: "A tournament system", es: "Un sistema de torneo", de: "Ein Turniersystem", nl: "Een toernooisy steem" }
        ],
        correct: 0,
        explanation: {
          en: "Chess960, invented by Bobby Fischer, features 960 possible starting positions where pieces are randomly placed on the back rank, emphasizing creativity over memorization.",
          es: "Chess960, inventado por Bobby Fischer, presenta 960 posibles posiciones iniciales donde las piezas se colocan aleatoriamente en la fila posterior, enfatizando la creatividad sobre la memorización.",
          de: "Chess960, erfunden von Bobby Fischer, bietet 960 mögliche Startpositionen, bei denen Figuren zufällig auf der Grundreihe platziert werden, wobei Kreativität über Auswendiglernen betont wird.",
          nl: "Chess960, uitgevonden door Bobby Fischer, heeft 960 mogelijke startposities waarbij stukken willekeurig op de achterste rij worden geplaatst, met nadruk op creativiteit boven memorisatie."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level5;
  } else if (typeof window !== 'undefined') {
    window.level5 = level5;
  }
})();
