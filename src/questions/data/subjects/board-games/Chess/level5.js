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
      },
      {
        question: {
          en: "What is the 'Hedgehog System'?",
          es: "¿Qué es el 'Sistema Erizo'?",
          de: "Was ist das 'Igelsystem'?",
          nl: "Wat is het 'Egelsysteem'?"
        },
        options: [
          { en: "Flexible defense with pawns on 6th rank", es: "Defensa flexible con peones en la sexta fila", de: "Flexible Verteidigung mit Bauern auf der sechsten Reihe", nl: "Flexibele verdediging met pionnen op de zesde rij" },
          { en: "Aggressive pawn storm", es: "Tormenta de peones agresiva", de: "Aggressiver Bauernsturm", nl: "Agressieve pionstorm" },
          { en: "Opening trap", es: "Trampa de apertura", de: "Eröffnungsfalle", nl: "Openingsval" },
          { en: "Endgame technique", es: "Técnica de final", de: "Endspiel-Technik", nl: "Eindspeltechniek" }
        ],
        correct: 0,
        explanation: {
          en: "The Hedgehog is a defensive setup with pawns on a6, b6, d6, e6 creating a flexible formation that can suddenly spring into counterattack.",
          es: "El Erizo es una configuración defensiva con peones en a6, b6, d6, e6 creando una formación flexible que puede saltar repentinamente al contraataque.",
          de: "Der Igel ist eine defensive Aufstellung mit Bauern auf a6, b6, d6, e6, die eine flexible Formation schafft, die plötzlich zum Gegenangriff übergehen kann.",
          nl: "De Egel is een defensieve opstelling met pionnen op a6, b6, d6, e6 die een flexibele formatie creëert die plotseling kan overgaan tot tegenaanval."
        }
      },
      {
        question: {
          en: "What is a 'desperado' piece?",
          es: "¿Qué es una pieza 'desesperada'?",
          de: "Was ist eine 'Desperado'-Figur?",
          nl: "Wat is een 'desperado'-stuk?"
        },
        options: [
          { en: "Doomed piece doing damage before capture", es: "Pieza condenada que hace daño antes de ser capturada", de: "Verlorene Figur die vor der Eroberung Schaden anrichtet", nl: "Gedoemd stuk dat schade doet voor het geslagen wordt" },
          { en: "Isolated knight", es: "Caballo aislado", de: "Isolierter Springer", nl: "Geïsoleerd paard" },
          { en: "Sacrificed queen", es: "Reina sacrificada", de: "Geopferte Dame", nl: "Geofferd dame" },
          { en: "Trapped rook", es: "Torre atrapada", de: "Gefangener Turm", nl: "Gevangen toren" }
        ],
        correct: 0,
        explanation: {
          en: "A desperado is a piece that is doomed to be captured but makes as many exchanges or captures as possible before being taken.",
          es: "Un desperado es una pieza condenada a ser capturada pero que hace tantos intercambios o capturas como sea posible antes de ser tomada.",
          de: "Ein Desperado ist eine Figur, die zur Eroberung verurteilt ist, aber so viele Abtausche oder Schlagzüge wie möglich macht, bevor sie genommen wird.",
          nl: "Een desperado is een stuk dat gedoemd is om geslagen te worden maar zoveel mogelijk ruilen of slaan doet voordat het genomen wordt."
        }
      },
      {
        question: {
          en: "What is the 'Advance Variation' in the French Defense?",
          es: "¿Qué es la 'Variante de Avance' en la Defensa Francesa?",
          de: "Was ist die 'Vorstoßvariante' in der Französischen Verteidigung?",
          nl: "Wat is de 'Vooruitvariant' in het Franse Verdediging?"
        },
        options: [
          { en: "White plays e5 after 1...e6", es: "Las blancas juegan e5 después de 1...e6", de: "Weiß spielt e5 nach 1...e6", nl: "Wit speelt e5 na 1...e6" },
          { en: "Early queen development", es: "Desarrollo temprano de la reina", de: "Frühe Damenentwicklung", nl: "Vroege dame-ontwikkeling" },
          { en: "Kingside castle first", es: "Enroque corto primero", de: "Kurze Rochade zuerst", nl: "Korte rokade eerst" },
          { en: "Pawn sacrifice on d4", es: "Sacrificio de peón en d4", de: "Bauernopfer auf d4", nl: "Pionoffer op d4" }
        ],
        correct: 0,
        explanation: {
          en: "The Advance Variation (1.e4 e6 2.d4 d5 3.e5) gives White space but creates a target for Black's pawn breaks with c5 and f6.",
          es: "La Variante de Avance (1.e4 e6 2.d4 d5 3.e5) le da espacio a las blancas pero crea un objetivo para las rupturas de peones de las negras con c5 y f6.",
          de: "Die Vorstoßvariante (1.e4 e6 2.d4 d5 3.e5) gibt Weiß Raum, aber schafft ein Ziel für Schwarz' Bauernbrüche mit c5 und f6.",
          nl: "De Vooruitvariant (1.e4 e6 2.d4 d5 3.e5) geeft wit ruimte maar creëert een doelwit voor zwarts piondoorbraken met c5 en f6."
        }
      },
      {
        question: {
          en: "What does 'pawn lever' mean?",
          es: "¿Qué significa 'palanca de peones'?",
          de: "Was bedeutet 'Bauernhebel'?",
          nl: "Wat betekent 'pionhefboom'?"
        },
        options: [
          { en: "Pawn attacking enemy pawn base-to-base", es: "Peón atacando base a base a peón enemigo", de: "Bauer greift gegnerischen Bauer von Basis zu Basis an", nl: "Pion valt vijandelijke pion van basis naar basis aan" },
          { en: "Passed pawn advancement", es: "Avance de peón pasado", de: "Freibauer-Vorstoß", nl: "Vrijpion vooruitgang" },
          { en: "Pawn sacrifice", es: "Sacrificio de peón", de: "Bauernopfer", nl: "Pionoffer" },
          { en: "Doubled pawns", es: "Peones doblados", de: "Doppelbauern", nl: "Dubbele pionnen" }
        ],
        correct: 0,
        explanation: {
          en: "A pawn lever occurs when a pawn attacks the base of an enemy pawn, creating tension and potentially opening lines or weakening the structure.",
          es: "Una palanca de peones ocurre cuando un peón ataca la base de un peón enemigo, creando tensión y potencialmente abriendo líneas o debilitando la estructura.",
          de: "Ein Bauernhebel entsteht, wenn ein Bauer die Basis eines gegnerischen Bauern angreift, Spannung erzeugt und möglicherweise Linien öffnet oder die Struktur schwächt.",
          nl: "Een pionhefboom ontstaat wanneer een pion de basis van een vijandelijke pion aanvalt, spanning creëert en mogelijk lijnen opent of de structuur verzwakt."
        }
      },
      {
        question: {
          en: "What is the 'Benko Gambit'?",
          es: "¿Qué es el 'Gambito Benko'?",
          de: "Was ist das 'Benkö-Gambit'?",
          nl: "Wat is het 'Benko Gambiet'?"
        },
        options: [
          { en: "Black sacrifices queenside pawns for pressure", es: "Las negras sacrifican peones de dama por presión", de: "Schwarz opfert Damenflügelbauern für Druck", nl: "Zwart offert damevleugelpionnen voor druk" },
          { en: "Early queen sacrifice", es: "Sacrificio temprano de reina", de: "Frühes Damenopfer", nl: "Vroeg dameoffer" },
          { en: "Knight sacrifice on f7", es: "Sacrificio de caballo en f7", de: "Springeropfer auf f7", nl: "Paardoffer op f7" },
          { en: "Center pawn push", es: "Empuje de peón central", de: "Bauernvorstoß im Zentrum", nl: "Centrale pionstoot" }
        ],
        correct: 0,
        explanation: {
          en: "The Benko Gambit (1.d4 Nf6 2.c4 c5 3.d5 b5) sacrifices pawns for long-term queenside pressure and active piece play.",
          es: "El Gambito Benko (1.d4 Cf6 2.c4 c5 3.d5 b5) sacrifica peones para presión a largo plazo en el flanco de dama y juego de piezas activo.",
          de: "Das Benkö-Gambit (1.d4 Sf6 2.c4 c5 3.d5 b5) opfert Bauern für langfristigen Damenflügeldruck und aktives Figurenspiel.",
          nl: "Het Benko Gambiet (1.d4 Pf6 2.c4 c5 3.d5 b5) offert pionnen voor langetermijndruk op de damevleugel en actief stukkenspel."
        }
      },
      {
        question: {
          en: "What is a 'swindle' in chess?",
          es: "¿Qué es un 'truco' en ajedrez?",
          de: "Was ist ein 'Swindle' im Schach?",
          nl: "Wat is een 'swindle' in schaak?"
        },
        options: [
          { en: "Trick to escape losing position", es: "Truco para escapar de una posición perdida", de: "Trick zum Entkommen aus verlorener Stellung", nl: "Truc om te ontsnappen uit verloren positie" },
          { en: "Opening preparation", es: "Preparación de apertura", de: "Eröffnungsvorbereitung", nl: "Openingsvoorbereiting" },
          { en: "Endgame tablebase", es: "Base de finales", de: "Endspiel-Tablebase", nl: "Eindspel-tablebase" },
          { en: "Time scramble", es: "Apuro de tiempo", de: "Zeitnot", nl: "Tijdnood" }
        ],
        correct: 0,
        explanation: {
          en: "A swindle is a clever tactical trick or trap that allows a player in a losing position to escape with a draw or even win through the opponent's mistake.",
          es: "Un truco es un ardid táctico inteligente que permite a un jugador en posición perdida escapar con tablas o incluso ganar por error del oponente.",
          de: "Ein Swindle ist ein cleverer taktischer Trick, der es einem Spieler in verlorener Stellung ermöglicht, durch einen Fehler des Gegners zu entkommen oder zu gewinnen.",
          nl: "Een swindle is een slimme tactische truc waarmee een speler in een verloren positie kan ontsnappen met remise of zelfs winnen door een fout van de tegenstander."
        }
      },
      {
        question: {
          en: "What is the 'Stonewall Attack'?",
          es: "¿Qué es el 'Ataque Stonewall'?",
          de: "Was ist der 'Stonewall-Angriff'?",
          nl: "Wat is de 'Stonewall Aanval'?"
        },
        options: [
          { en: "Pawns on d4, e3, f4 formation", es: "Formación de peones en d4, e3, f4", de: "Bauernformation auf d4, e3, f4", nl: "Pionformatie op d4, e3, f4" },
          { en: "Rook lift to third rank", es: "Elevación de torre a la tercera fila", de: "Turmlift zur dritten Reihe", nl: "Torenlift naar derde rij" },
          { en: "Queen sacrifice", es: "Sacrificio de reina", de: "Damenopfer", nl: "Dameoffer" },
          { en: "Pawn storm on kingside", es: "Tormenta de peones en flanco de rey", de: "Bauernsturm am Königsflügel", nl: "Pionstorm op koningsvleugel" }
        ],
        correct: 0,
        explanation: {
          en: "The Stonewall Attack features a pawn structure with d4, e3, f4, creating a solid formation aimed at kingside attack, though it weakens e4.",
          es: "El Ataque Stonewall presenta una estructura de peones con d4, e3, f4, creando una formación sólida dirigida al ataque en el flanco de rey, aunque debilita e4.",
          de: "Der Stonewall-Angriff hat eine Bauernstruktur mit d4, e3, f4, die eine solide Formation für einen Königsflügelangriff schafft, aber e4 schwächt.",
          nl: "De Stonewall Aanval heeft een pionstructuur met d4, e3, f4, die een solide formatie creëert gericht op aanval op de koningsvleugel, hoewel het e4 verzwakt."
        }
      },
      {
        question: {
          en: "What is 'anticomputer chess'?",
          es: "¿Qué es el 'ajedrez anticomputadora'?",
          de: "Was ist 'Anti-Computer-Schach'?",
          nl: "Wat is 'anticomputer schaak'?"
        },
        options: [
          { en: "Playing style to confuse engines", es: "Estilo de juego para confundir motores", de: "Spielstil zum Verwirren von Engines", nl: "Speelstijl om engines te verwarren" },
          { en: "Playing without computers", es: "Jugar sin computadoras", de: "Spielen ohne Computer", nl: "Spelen zonder computers" },
          { en: "Anti-cheating measures", es: "Medidas anti-trampa", de: "Anti-Betrugs-Maßnahmen", nl: "Anti-valsspelen maatregelen" },
          { en: "Classical chess only", es: "Solo ajedrez clásico", de: "Nur klassisches Schach", nl: "Alleen klassiek schaak" }
        ],
        correct: 0,
        explanation: {
          en: "Anticomputer chess involves creating closed, strategically complex positions that are difficult for engines to evaluate, avoiding tactical complications they excel at.",
          es: "El ajedrez anticomputadora implica crear posiciones cerradas y estratégicamente complejas que son difíciles de evaluar para los motores, evitando complicaciones tácticas en las que sobresalen.",
          de: "Anti-Computer-Schach beinhaltet das Schaffen geschlossener, strategisch komplexer Stellungen, die für Engines schwer zu bewerten sind, und vermeidet taktische Komplikationen, in denen sie brillieren.",
          nl: "Anticomputer schaak houdt in dat gesloten, strategisch complexe posities worden gecreëerd die moeilijk voor engines te evalueren zijn, waarbij tactische complicaties worden vermeden waarin ze uitblinken."
        }
      },
      {
        question: {
          en: "What is the 'Grob Attack'?",
          es: "¿Qué es el 'Ataque Grob'?",
          de: "Was ist der 'Grob-Angriff'?",
          nl: "Wat is de 'Grob Aanval'?"
        },
        options: [
          { en: "Opening with 1.g4", es: "Apertura con 1.g4", de: "Eröffnung mit 1.g4", nl: "Opening met 1.g4" },
          { en: "Rook sacrifice on g7", es: "Sacrificio de torre en g7", de: "Turmopfer auf g7", nl: "Torenoffer op g7" },
          { en: "Queen and bishop battery", es: "Batería de reina y alfil", de: "Damen-Läufer-Batterie", nl: "Dame-loper batterij" },
          { en: "Center pawn storm", es: "Tormenta de peones central", de: "Bauernsturm im Zentrum", nl: "Centrale pionstorm" }
        ],
        correct: 0,
        explanation: {
          en: "The Grob Attack (1.g4) is an aggressive but objectively dubious opening that sacrifices central control for a quick kingside attack.",
          es: "El Ataque Grob (1.g4) es una apertura agresiva pero objetivamente dudosa que sacrifica control central por un rápido ataque en el flanco de rey.",
          de: "Der Grob-Angriff (1.g4) ist eine aggressive, aber objektiv zweifelhafte Eröffnung, die Zentrumskontrolle für einen schnellen Königsflügelangriff opfert.",
          nl: "De Grob Aanval (1.g4) is een agressieve maar objectief twijfelachtige opening die centrumcontrole offert voor een snelle aanval op de koningsvleugel."
        }
      },
      {
        question: {
          en: "What is a 'pawn island'?",
          es: "¿Qué es una 'isla de peones'?",
          de: "Was ist eine 'Bauern-Insel'?",
          nl: "Wat is een 'pioneiland'?"
        },
        options: [
          { en: "Group of pawns isolated from others", es: "Grupo de peones aislado de otros", de: "Gruppe von Bauern, isoliert von anderen", nl: "Groep pionnen geïsoleerd van anderen" },
          { en: "Passed pawn", es: "Peón pasado", de: "Freibauer", nl: "Vrijpion" },
          { en: "Central pawn duo", es: "Dúo de peones centrales", de: "Zentrales Bauernpaar", nl: "Centraal pionduo" },
          { en: "Backward pawn", es: "Peón retrasado", de: "Rückständiger Bauer", nl: "Achtergebleven pion" }
        ],
        correct: 0,
        explanation: {
          en: "A pawn island is a group of pawns separated from other friendly pawns by files. More islands generally means weaker pawn structure.",
          es: "Una isla de peones es un grupo de peones separados de otros peones amigos por columnas. Más islas generalmente significa estructura de peones más débil.",
          de: "Eine Bauern-Insel ist eine Gruppe von Bauern, die durch Linien von anderen freundlichen Bauern getrennt ist. Mehr Inseln bedeuten generell eine schwächere Bauernstruktur.",
          nl: "Een pioneiland is een groep pionnen gescheiden van andere eigen pionnen door lijnen. Meer eilanden betekent over het algemeen een zwakkere pionstructuur."
        }
      },
      {
        question: {
          en: "What is the 'Caro-Kann Defense' main idea?",
          es: "¿Cuál es la idea principal de la 'Defensa Caro-Kann'?",
          de: "Was ist die Hauptidee der 'Caro-Kann-Verteidigung'?",
          nl: "Wat is het hoofdidee van de 'Caro-Kann Verdediging'?"
        },
        options: [
          { en: "Solid structure with 1...c6 supporting d5", es: "Estructura sólida con 1...c6 apoyando d5", de: "Solide Struktur mit 1...c6 zur Unterstützung von d5", nl: "Solide structuur met 1...c6 ondersteunend d5" },
          { en: "Quick kingside attack", es: "Ataque rápido en flanco de rey", de: "Schneller Königsflügelangriff", nl: "Snelle aanval op koningsvleugel" },
          { en: "Early queen development", es: "Desarrollo temprano de reina", de: "Frühe Damenentwicklung", nl: "Vroege dame-ontwikkeling" },
          { en: "Gambit pawn sacrifice", es: "Sacrificio de peón gambito", de: "Gambit-Bauernopfer", nl: "Gambiet pionoffer" }
        ],
        correct: 0,
        explanation: {
          en: "The Caro-Kann (1.e4 c6) prepares d5 while keeping the light-squared bishop free, leading to solid but somewhat passive positions.",
          es: "La Caro-Kann (1.e4 c6) prepara d5 mientras mantiene libre el alfil de casillas claras, llevando a posiciones sólidas pero algo pasivas.",
          de: "Die Caro-Kann (1.e4 c6) bereitet d5 vor, während der Läufer auf weißen Feldern frei bleibt, was zu soliden, aber etwas passiven Stellungen führt.",
          nl: "De Caro-Kann (1.e4 c6) bereidt d5 voor terwijl de lichtvellige loper vrij blijft, wat leidt tot solide maar enigszins passieve posities."
        }
      },
      {
        question: {
          en: "What does 'improving a piece' mean?",
          es: "¿Qué significa 'mejorar una pieza'?",
          de: "Was bedeutet 'eine Figur verbessern'?",
          nl: "Wat betekent 'een stuk verbeteren'?"
        },
        options: [
          { en: "Moving it to a better square", es: "Moverla a una casilla mejor", de: "Sie auf ein besseres Feld ziehen", nl: "Het naar een beter veld verplaatsen" },
          { en: "Promoting a pawn", es: "Promover un peón", de: "Einen Bauern umwandeln", nl: "Een pion promoveren" },
          { en: "Exchanging for better piece", es: "Cambiarla por mejor pieza", de: "Gegen bessere Figur tauschen", nl: "Ruilen voor beter stuk" },
          { en: "Defending it", es: "Defenderla", de: "Sie verteidigen", nl: "Het verdedigen" }
        ],
        correct: 0,
        explanation: {
          en: "Improving a piece means repositioning it to a more active, influential square where it has greater scope or control of key areas.",
          es: "Mejorar una pieza significa reposicionarla en una casilla más activa e influyente donde tenga mayor alcance o control de áreas clave.",
          de: "Eine Figur verbessern bedeutet, sie auf ein aktiveres, einflussreicheres Feld zu versetzen, wo sie größeren Wirkungsbereich oder Kontrolle über Schlüsselbereiche hat.",
          nl: "Een stuk verbeteren betekent het herpositioneren naar een actiever, invloedrijker veld waar het meer bereik of controle over belangrijke gebieden heeft."
        }
      },
      {
        question: {
          en: "What is 'prophylaxis' in chess?",
          es: "¿Qué es la 'profilaxis' en ajedrez?",
          de: "Was ist 'Prophylaxe' im Schach?",
          nl: "Wat is 'profylaxe' in schaak?"
        },
        options: [
          { en: "Preventing opponent's plans", es: "Prevenir los planes del oponente", de: "Verhindern der gegnerischen Pläne", nl: "Voorkomen van tegenstanders plannen" },
          { en: "Opening preparation", es: "Preparación de apertura", de: "Eröffnungsvorbereitung", nl: "Openingsvoorbereiding" },
          { en: "Time management", es: "Gestión del tiempo", de: "Zeitmanagement", nl: "Tijdmanagement" },
          { en: "Endgame study", es: "Estudio de finales", de: "Endspielstudium", nl: "Eindspeelstudie" }
        ],
        correct: 0,
        explanation: {
          en: "Prophylaxis, a concept developed by Nimzowitsch, means making moves that prevent or limit the opponent's plans before executing your own.",
          es: "La profilaxis, concepto desarrollado por Nimzowitsch, significa hacer movimientos que previenen o limitan los planes del oponente antes de ejecutar los propios.",
          de: "Prophylaxe, ein von Nimzowitsch entwickeltes Konzept, bedeutet Züge zu machen, die die Pläne des Gegners verhindern oder einschränken, bevor man eigene ausführt.",
          nl: "Profylaxe, een concept ontwikkeld door Nimzowitsch, betekent zetten doen die de plannen van de tegenstander voorkomen of beperken voordat je je eigen uitvoert."
        }
      },
      {
        question: {
          en: "What is the 'two bishops advantage'?",
          es: "¿Qué es la 'ventaja de los dos alfiles'?",
          de: "Was ist der 'Läuferpaar-Vorteil'?",
          nl: "Wat is het 'tweelopervoordeel'?"
        },
        options: [
          { en: "Having both bishops vs opponent lacking one", es: "Tener ambos alfiles vs oponente sin uno", de: "Beide Läufer haben vs. Gegner dem einer fehlt", nl: "Beide lopers hebben vs tegenstander die er één mist" },
          { en: "Bishops on same color", es: "Alfiles del mismo color", de: "Läufer auf derselben Farbe", nl: "Lopers op dezelfde kleur" },
          { en: "Two bishops attacking king", es: "Dos alfiles atacando rey", de: "Zwei Läufer greifen König an", nl: "Twee lopers vallen koning aan" },
          { en: "Bishop pair sacrifice", es: "Sacrificio de pareja de alfiles", de: "Läuferpaar-Opfer", nl: "Loperpaar offer" }
        ],
        correct: 0,
        explanation: {
          en: "The bishop pair advantage occurs when one side has both bishops while the opponent has a bishop and knight or two knights, especially strong in open positions.",
          es: "La ventaja de la pareja de alfiles ocurre cuando un lado tiene ambos alfiles mientras el oponente tiene alfil y caballo o dos caballos, especialmente fuerte en posiciones abiertas.",
          de: "Der Läuferpaar-Vorteil entsteht, wenn eine Seite beide Läufer hat, während der Gegner einen Läufer und Springer oder zwei Springer hat, besonders stark in offenen Stellungen.",
          nl: "Het loperpaarvoordeel ontstaat wanneer één kant beide lopers heeft terwijl de tegenstander een loper en paard of twee paarden heeft, vooral sterk in open posities."
        }
      },
      {
        question: {
          en: "What is a 'windmill' tactic?",
          es: "¿Qué es la táctica de 'molino'?",
          de: "Was ist eine 'Windmühlen'-Taktik?",
          nl: "Wat is een 'windmolen'-tactiek?"
        },
        options: [
          { en: "Repeated checks with captures in between", es: "Jaques repetidos con capturas entre ellos", de: "Wiederholte Schachs mit Schlagzügen dazwischen", nl: "Herhaalde schaken met slagen ertussen" },
          { en: "Circular pawn structure", es: "Estructura de peones circular", de: "Kreisförmige Bauernstruktur", nl: "Circulaire pionstructuur" },
          { en: "Rook rotation", es: "Rotación de torre", de: "Turmrotation", nl: "Torenrotatie" },
          { en: "Knight tour pattern", es: "Patrón de recorrido de caballo", de: "Springer-Rundreise-Muster", nl: "Paardentoer patroon" }
        ],
        correct: 0,
        explanation: {
          en: "A windmill is a devastating tactic where a piece gives repeated discovered checks, capturing material between each check while the king is forced to move.",
          es: "Un molino es una táctica devastadora donde una pieza da jaques descubiertos repetidos, capturando material entre cada jaque mientras el rey se ve obligado a moverse.",
          de: "Eine Windmühle ist eine verheerende Taktik, bei der eine Figur wiederholte Abzugsschachs gibt und zwischen jedem Schach Material schlägt, während der König ziehen muss.",
          nl: "Een windmolen is een verwoestende tactiek waarbij een stuk herhaalde ontdekte schaken geeft en materiaal slaat tussen elk schaak terwijl de koning gedwongen wordt te bewegen."
        }
      },
      {
        question: {
          en: "What is the 'Scotch Game'?",
          es: "¿Qué es el 'Juego Escocés'?",
          de: "Was ist die 'Schottische Partie'?",
          nl: "Wat is de 'Schotse Partij'?"
        },
        options: [
          { en: "Opening with 1.e4 e5 2.Nf3 Nc6 3.d4", es: "Apertura con 1.e4 e5 2.Cf3 Cc6 3.d4", de: "Eröffnung mit 1.e4 e5 2.Sf3 Sc6 3.d4", nl: "Opening met 1.e4 e5 2.Pf3 Pc6 3.d4" },
          { en: "Scottish chess variant", es: "Variante escocesa del ajedrez", de: "Schottische Schachvariante", nl: "Schotse schaakvariant" },
          { en: "Endgame technique", es: "Técnica de final", de: "Endspiel-Technik", nl: "Eindspeltechniek" },
          { en: "Tournament system", es: "Sistema de torneo", de: "Turniersystem", nl: "Toernooisy steem" }
        ],
        correct: 0,
        explanation: {
          en: "The Scotch Game challenges Black's center immediately with 3.d4, leading to open positions with early piece activity.",
          es: "El Juego Escocés desafía el centro de las negras inmediatamente con 3.d4, llevando a posiciones abiertas con actividad temprana de piezas.",
          de: "Die Schottische Partie fordert Schwarz' Zentrum sofort mit 3.d4 heraus und führt zu offenen Stellungen mit früher Figurenaktivität.",
          nl: "De Schotse Partij daagt zwarts centrum onmiddellijk uit met 3.d4, wat leidt tot open posities met vroege stukkenactiviteit."
        }
      },
      {
        question: {
          en: "What is 'hanging pawns' structure?",
          es: "¿Qué es la estructura de 'peones colgantes'?",
          de: "Was ist die 'hängende Bauern'-Struktur?",
          nl: "Wat is de 'hangende pionnen'-structuur?"
        },
        options: [
          { en: "Side-by-side pawns on c4/d4 or c5/d5", es: "Peones lado a lado en c4/d4 o c5/d5", de: "Nebeneinander stehende Bauern auf c4/d4 oder c5/d5", nl: "Naast elkaar staande pionnen op c4/d4 of c5/d5" },
          { en: "Undefended pawns", es: "Peones sin defensa", de: "Unverteidigte Bauern", nl: "Onverdedigde pionnen" },
          { en: "Passed pawns", es: "Peones pasados", de: "Freibauern", nl: "Vrijpionnen" },
          { en: "Isolated doubled pawns", es: "Peones doblados aislados", de: "Isolierte Doppelbauern", nl: "Geïsoleerde dubbele pionnen" }
        ],
        correct: 0,
        explanation: {
          en: "Hanging pawns are a pair of adjacent pawns (typically c4-d4 or c5-d5) with no pawns on adjacent files, creating both strength and weakness.",
          es: "Los peones colgantes son un par de peones adyacentes (típicamente c4-d4 o c5-d5) sin peones en columnas adyacentes, creando tanto fuerza como debilidad.",
          de: "Hängende Bauern sind ein Paar benachbarter Bauern (typisch c4-d4 oder c5-d5) ohne Bauern auf benachbarten Linien, die sowohl Stärke als auch Schwäche schaffen.",
          nl: "Hangende pionnen zijn een paar aangrenzende pionnen (typisch c4-d4 of c5-d5) zonder pionnen op aangrenzende lijnen, wat zowel sterkte als zwakte creëert."
        }
      },
      {
        question: {
          en: "What is the 'Evans Gambit'?",
          es: "¿Qué es el 'Gambito Evans'?",
          de: "Was ist das 'Evans-Gambit'?",
          nl: "Wat is het 'Evans Gambiet'?"
        },
        options: [
          { en: "Sacrificing b4 pawn in Italian Game", es: "Sacrificar peón b4 en Apertura Italiana", de: "b4-Bauernopfer in der Italienischen Partie", nl: "b4 pion offeren in Italiaanse Opening" },
          { en: "Queen sacrifice opening", es: "Apertura con sacrificio de reina", de: "Damenopfer-Eröffnung", nl: "Dameoffer opening" },
          { en: "Knight gambit", es: "Gambito de caballo", de: "Springer-Gambit", nl: "Paard gambiet" },
          { en: "Exchange sacrifice", es: "Sacrificio de calidad", de: "Qualitätsopfer", nl: "Kwaliteitsoffer" }
        ],
        correct: 0,
        explanation: {
          en: "The Evans Gambit (1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 4.b4) sacrifices the b-pawn for rapid development and central control.",
          es: "El Gambito Evans (1.e4 e5 2.Cf3 Cc6 3.Ac4 Ac5 4.b4) sacrifica el peón b para desarrollo rápido y control central.",
          de: "Das Evans-Gambit (1.e4 e5 2.Sf3 Sc6 3.Lc4 Lc5 4.b4) opfert den b-Bauern für schnelle Entwicklung und Zentrumskontrolle.",
          nl: "Het Evans Gambiet (1.e4 e5 2.Pf3 Pc6 3.Lc4 Lc5 4.b4) offert de b-pion voor snelle ontwikkeling en centrumcontrole."
        }
      },
      {
        question: {
          en: "What does 'consolidation' mean in chess?",
          es: "¿Qué significa 'consolidación' en ajedrez?",
          de: "Was bedeutet 'Konsolidierung' im Schach?",
          nl: "Wat betekent 'consolidatie' in schaak?"
        },
        options: [
          { en: "Securing advantage after complications", es: "Asegurar ventaja después de complicaciones", de: "Vorteil nach Komplikationen sichern", nl: "Voordeel veiligstellen na complicaties" },
          { en: "Combining pieces", es: "Combinar piezas", de: "Figuren kombinieren", nl: "Stukken combineren" },
          { en: "Trading material", es: "Intercambiar material", de: "Material tauschen", nl: "Materiaal ruilen" },
          { en: "Reorganizing pawns", es: "Reorganizar peones", de: "Bauern reorganisieren", nl: "Pionnen reorganiseren" }
        ],
        correct: 0,
        explanation: {
          en: "Consolidation means securing and maintaining an advantage by defending weaknesses, coordinating pieces, and preventing counterplay after gaining material or positional edge.",
          es: "La consolidación significa asegurar y mantener una ventaja defendiendo debilidades, coordinando piezas y previniendo contrajuego después de ganar material o ventaja posicional.",
          de: "Konsolidierung bedeutet, einen Vorteil zu sichern und zu erhalten, indem Schwächen verteidigt, Figuren koordiniert und Gegenspiel verhindert wird, nachdem Material oder positioneller Vorteil gewonnen wurde.",
          nl: "Consolidatie betekent een voordeel veiligstellen en behouden door zwaktes te verdedigen, stukken te coördineren en tegenaanvallen te voorkomen na het winnen van materiaal of positioneel voordeel."
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
