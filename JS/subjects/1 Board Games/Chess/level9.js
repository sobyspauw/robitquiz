// Quiz Template - Level 9: Bord spelletjes - Schaken
(function() {
  const level9 = {
    name: {
      en: "Chess",
      es: "Ajedrez",
      de: "Schach",
      nl: "Schaken"
    },
    questions: [
      {
        question: {
          en: "What is the Lucena Position in endgame theory?",
          es: "¿Qué es la Posición de Lucena en teoría de finales?",
          de: "Was ist die Lucena-Stellung in der Endspieltheorie?",
          nl: "Wat is de Lucena Positie in eindspeltheorie?"
        },
        options: [
          { en: "A winning technique for rook and pawn vs rook endgames", es: "Una técnica ganadora para finales de torre y peón contra torre", de: "Eine Gewinntechnik für Turm-und-Bauer-gegen-Turm-Endspiele", nl: "Een winnende techniek voor toren-en-pion tegen toren eindspelen" },
          { en: "A queen endgame position", es: "Una posición de final de damas", de: "Eine Damen-Endspiel-Stellung", nl: "Een dame-eindspelpositie" },
          { en: "A fortress drawing technique", es: "Una técnica de empate con fortaleza", de: "Eine Festungs-Remistechnik", nl: "Een fort remisetechniek" },
          { en: "A bishop endgame", es: "Un final de alfiles", de: "Ein Läufer-Endspiel", nl: "Een loper-eindspel" }
        ],
        correct: 0,
        explanation: {
          en: "The Lucena Position is one of the most important theoretical positions in chess endgames. It demonstrates the winning technique for rook and pawn vs rook when the stronger side's king is in front of the pawn. The key maneuver is 'building a bridge' with the rook to shield the king from checks.",
          es: "La Posición de Lucena es una de las posiciones teóricas más importantes en finales de ajedrez. Demuestra la técnica ganadora para torre y peón contra torre cuando el rey del bando más fuerte está delante del peón. La maniobra clave es 'construir un puente' con la torre para proteger al rey de los jaques.",
          de: "Die Lucena-Stellung ist eine der wichtigsten theoretischen Stellungen in Schachendspielen. Sie demonstriert die Gewinntechnik für Turm und Bauer gegen Turm, wenn der König der stärkeren Seite vor dem Bauern steht. Das Schlüsselmanöver ist das 'Brückenbauen' mit dem Turm, um den König vor Schachs zu schützen.",
          nl: "De Lucena Positie is een van de belangrijkste theoretische posities in schaakeindspelen. Het demonstreert de winnende techniek voor toren en pion tegen toren wanneer de koning van de sterkere kant voor de pion staat. De sleutelmanoeuvre is 'een brug bouwen' met de toren om de koning te beschermen tegen schaken."
        }
      },
      {
        question: {
          en: "What is the 'Marshall Attack' in the Ruy Lopez?",
          es: "¿Qué es el 'Ataque Marshall' en el Ruy López?",
          de: "Was ist der 'Marshall-Angriff' in der Spanischen Partie?",
          nl: "Wat is de 'Marshall Aanval' in de Spaanse Partij?"
        },
        options: [
          { en: "A sharp gambit with ...d5 sacrificing a pawn for attack", es: "Un gambito agudo con ...d5 sacrificando un peón por ataque", de: "Ein scharfes Gambit mit ...d5, das einen Bauern für Angriff opfert", nl: "Een scherp gambiet met ...d5 dat een pion offert voor aanval" },
          { en: "A quiet positional system", es: "Un sistema posicional tranquilo", de: "Ein ruhiges positionelles System", nl: "Een rustig positioneel systeem" },
          { en: "An endgame technique", es: "Una técnica de final", de: "Eine Endspiel-Technik", nl: "Een eindspeltechniek" },
          { en: "A defensive setup", es: "Una configuración defensiva", de: "Eine defensive Aufstellung", nl: "Een defensieve opstelling" }
        ],
        correct: 0,
        explanation: {
          en: "The Marshall Attack (8...d5) is a sharp gambit in the Ruy Lopez where Black sacrifices a pawn for dangerous attacking chances. Named after Frank Marshall who unleashed it against Capablanca in 1918, it remains one of the most analyzed and respected gambits at all levels of play.",
          es: "El Ataque Marshall (8...d5) es un gambito agudo en el Ruy López donde las negras sacrifican un peón por peligrosas oportunidades de ataque. Nombrado en honor a Frank Marshall quien lo desató contra Capablanca en 1918, sigue siendo uno de los gambitos más analizados y respetados en todos los niveles de juego.",
          de: "Der Marshall-Angriff (8...d5) ist ein scharfes Gambit in der Spanischen Partie, bei dem Schwarz einen Bauern für gefährliche Angriffschancen opfert. Benannt nach Frank Marshall, der es 1918 gegen Capablanca entfesselte, bleibt es eines der am meisten analysierten und respektierten Gambits auf allen Spielstufen.",
          nl: "De Marshall Aanval (8...d5) is een scherp gambiet in de Spaanse Partij waarbij zwart een pion offert voor gevaarlijke aanvalskansen. Vernoemd naar Frank Marshall die het in 1918 tegen Capablanca ontketende, blijft het een van de meest geanalyseerde en gerespecteerde gambieten op alle speelniveaus."
        }
      },
      {
        question: {
          en: "What is triangulation in chess endgames?",
          es: "¿Qué es la triangulación en finales de ajedrez?",
          de: "Was ist Triangulation in Schachendspielen?",
          nl: "Wat is triangulatie in schaakeindspelen?"
        },
        options: [
          { en: "A king maneuver to lose a tempo and gain opposition", es: "Una maniobra de rey para perder un tiempo y ganar oposición", de: "Ein Königsmanöver um ein Tempo zu verlieren und Opposition zu gewinnen", nl: "Een koningsmanoeuvre om een tempo te verliezen en oppositie te winnen" },
          { en: "Moving three pieces in a triangle", es: "Mover tres piezas en triángulo", de: "Drei Figuren in einem Dreieck bewegen", nl: "Drie stukken in een driehoek bewegen" },
          { en: "A tactical combination", es: "Una combinación táctica", de: "Eine taktische Kombination", nl: "Een tactische combinatie" },
          { en: "A pawn structure formation", es: "Una formación de estructura de peones", de: "Eine Bauernstruktur-Formation", nl: "Een pionstructuurformatie" }
        ],
        correct: 0,
        explanation: {
          en: "Triangulation is a subtle endgame technique where a king makes a triangular path (three moves to return to the same or equivalent square) to lose a tempo while keeping the opponent in zugzwang. This allows the player to achieve the same position but with the opponent to move, often winning a critical square or pawn.",
          es: "La triangulación es una técnica sutil de final donde un rey hace un camino triangular (tres movimientos para volver a la misma casilla o equivalente) para perder un tiempo mientras mantiene al oponente en zugzwang. Esto permite al jugador alcanzar la misma posición pero con el oponente a mover, a menudo ganando una casilla o peón crítico.",
          de: "Triangulation ist eine subtile Endspiel-Technik, bei der ein König einen dreieckigen Weg macht (drei Züge um zum gleichen oder äquivalenten Feld zurückzukehren), um ein Tempo zu verlieren, während der Gegner im Zugzwang gehalten wird. Dies ermöglicht dem Spieler, dieselbe Stellung zu erreichen, aber mit dem Gegner am Zug, oft ein kritisches Feld oder Bauer gewinnend.",
          nl: "Triangulatie is een subtiele eindspeltechniek waarbij een koning een driehoekig pad maakt (drie zetten om terug te keren naar hetzelfde of gelijkwaardig veld) om een tempo te verliezen terwijl de tegenstander in zugzwang wordt gehouden. Dit stelt de speler in staat dezelfde positie te bereiken maar met de tegenstander aan zet, vaak winnend een cruciaal veld of pion."
        }
      },
      {
        question: {
          en: "What is the Philidor Position in rook endgames?",
          es: "¿Qué es la Posición de Philidor en finales de torres?",
          de: "Was ist die Philidor-Stellung in Turmendspielen?",
          nl: "Wat is de Philidor Positie in torenendspelen?"
        },
        options: [
          { en: "A drawing technique with rook on third rank preventing pawn advance", es: "Una técnica de empate con torre en tercera fila previniendo avance de peón", de: "Eine Remistechnik mit Turm auf dritter Reihe die Bauernvormarsch verhindert", nl: "Een remisetechniek met toren op derde rij die pionvooruitgang voorkomt" },
          { en: "A winning position", es: "Una posición ganadora", de: "Eine Gewinnstellung", nl: "Een winnende positie" },
          { en: "A queen endgame", es: "Un final de damas", de: "Ein Damen-Endspiel", nl: "Een dame-eindspel" },
          { en: "An opening system", es: "Un sistema de apertura", de: "Ein Eröffnungssystem", nl: "Een openingssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "The Philidor Position is a crucial defensive setup in rook and pawn endgames where the defending side places their rook on the third rank to prevent the opponent's pawn from advancing. Named after François-André Danican Philidor, it's one of the most important drawing techniques in chess endgames.",
          es: "La Posición de Philidor es una configuración defensiva crucial en finales de torre y peón donde el bando defensor coloca su torre en la tercera fila para prevenir que el peón del oponente avance. Nombrada en honor a François-André Danican Philidor, es una de las técnicas de empate más importantes en finales de ajedrez.",
          de: "Die Philidor-Stellung ist eine entscheidende defensive Aufstellung in Turm-und-Bauern-Endspielen, bei der die verteidigende Seite ihren Turm auf der dritten Reihe platziert, um den gegnerischen Bauern am Vorrücken zu hindern. Benannt nach François-André Danican Philidor, ist sie eine der wichtigsten Remistechniken in Schachendspielen.",
          nl: "De Philidor Positie is een cruciale defensieve opstelling in toren-en-pion eindspelen waarbij de verdedigende kant hun toren op de derde rij plaatst om te voorkomen dat de pion van de tegenstander oprukt. Vernoemd naar François-André Danican Philidor, is het een van de belangrijkste remisetechnieken in schaakeindspelen."
        }
      },
      {
        question: {
          en: "What is the Najdorf Variation's strategic flexibility?",
          es: "¿Cuál es la flexibilidad estratégica de la Variación Najdorf?",
          de: "Was ist die strategische Flexibilität der Najdorf-Variante?",
          nl: "Wat is de strategische flexibiliteit van de Najdorf Variant?"
        },
        options: [
          { en: "Delaying key decisions while keeping multiple plans available", es: "Retrasar decisiones clave mientras mantiene múltiples planes disponibles", de: "Wichtige Entscheidungen verzögern während mehrere Pläne verfügbar bleiben", nl: "Belangrijke beslissingen uitstellen terwijl meerdere plannen beschikbaar blijven" },
          { en: "Committing to queenside castling immediately", es: "Comprometerse a enrocar largo inmediatamente", de: "Sofort zur langen Rochade verpflichten", nl: "Onmiddellijk committeren aan lang rokeren" },
          { en: "Fixed pawn structure", es: "Estructura de peones fija", de: "Feste Bauernstruktur", nl: "Vaste pionstructuur" },
          { en: "Early piece trades", es: "Intercambios de piezas tempranos", de: "Frühe Figuren tausche", nl: "Vroege stukruilen" }
        ],
        correct: 0,
        explanation: {
          en: "The Najdorf Variation is renowned for its flexibility. Black delays committing the king and bishop while keeping options for ...e5, ...e6, ...b5, kingside or queenside castling, and various piece placements. This delayed commitment forces White to show their hand first, allowing Black to respond optimally to White's chosen setup.",
          es: "La Variación Najdorf es conocida por su flexibilidad. Las negras retrasan comprometer al rey y alfil mientras mantienen opciones para ...e5, ...e6, ...b5, enroque corto o largo, y varias colocaciones de piezas. Este compromiso retrasado fuerza a las blancas a mostrar su mano primero, permitiendo a las negras responder óptimamente a la configuración elegida por las blancas.",
          de: "Die Najdorf-Variante ist für ihre Flexibilität bekannt. Schwarz verzögert die Festlegung von König und Läufer, während Optionen für ...e5, ...e6, ...b5, kurze oder lange Rochade und verschiedene Figurenaufstellungen erhalten bleiben. Diese verzögerte Festlegung zwingt Weiß, zuerst die Karten zu zeigen, was Schwarz erlaubt, optimal auf Weiß' gewähltes Setup zu reagieren.",
          nl: "De Najdorf Variant staat bekend om zijn flexibiliteit. Zwart stelt het committeren van de koning en loper uit terwijl opties voor ...e5, ...e6, ...b5, kort of lang rokeren, en verschillende stukplaatsingen worden behouden. Deze uitgestelde toewijding dwingt wit om eerst zijn hand te laten zien, waardoor zwart optimaal kan reageren op wit's gekozen opstelling."
        }
      },
      {
        question: {
          en: "What is the 'Sveshnikov Variation' of the Sicilian?",
          es: "¿Qué es la 'Variación Sveshnikov' de la Siciliana?",
          de: "Was ist die 'Sweschnikow-Variante' der Sizilianischen?",
          nl: "Wat is de 'Sveshnikov Variant' van de Siciliaanse?"
        },
        options: [
          { en: "Black voluntarily accepts a backward d6 pawn and weak d5 square", es: "Las negras aceptan voluntariamente un peón d6 retrasado y casilla d5 débil", de: "Schwarz akzeptiert freiwillig einen zurückgebliebenen d6-Bauern und schwaches d5-Feld", nl: "Zwart accepteert vrijwillig een achtergebleven d6-pion en zwak d5-veld" },
          { en: "An early queen exchange", es: "Un cambio temprano de damas", de: "Ein früher Damentausch", nl: "Een vroege dameruil" },
          { en: "Queenside castling", es: "Enroque largo", de: "Lange Rochade", nl: "Lang rokeren" },
          { en: "Central pawn majority", es: "Mayoría de peones centrales", de: "Zentrale Bauernmehrheit", nl: "Centrale pionmeerderheid" }
        ],
        correct: 0,
        explanation: {
          en: "The Sveshnikov (1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 e5) accepts structural weaknesses for active piece play and dynamic counterplay. Named after Evgeny Sveshnikov.",
          es: "La Sveshnikov (1.e4 c5 2.Cf3 Cc6 3.d4 cxd4 4.Cxd4 Cf6 5.Cc3 e5) acepta debilidades estructurales por juego de piezas activo y contrajuego dinámico. Nombrada en honor a Evgeny Sveshnikov.",
          de: "Die Sweschnikow (1.e4 c5 2.Sf3 Sc6 3.d4 cxd4 4.Sxd4 Sf6 5.Sc3 e5) akzeptiert strukturelle Schwächen für aktives Figurenspiel und dynamisches Gegenspiel. Benannt nach Evgeny Sweschnikow.",
          nl: "De Sveshnikov (1.e4 c5 2.Pf3 Pc6 3.d4 cxd4 4.Pxd4 Pf6 5.Pc3 e5) accepteert structurele zwaktes voor actief stukspel en dynamisch tegenspel. Vernoemd naar Evgeny Sveshnikov."
        }
      },
      {
        question: {
          en: "What is the 'English Attack' in chess?",
          es: "¿Qué es el 'Ataque Inglés' en ajedrez?",
          de: "Was ist der 'Englische Angriff' im Schach?",
          nl: "Wat is de 'Engelse Aanval' in schaken?"
        },
        options: [
          { en: "White plays f3, Be3, Qd2, and O-O-O against the Sicilian", es: "Las blancas juegan f3, Ae3, Dd2 y O-O-O contra la Siciliana", de: "Weiß spielt f3, Le3, Dd2 und O-O-O gegen die Sizilianische", nl: "Wit speelt f3, Le3, Dd2 en O-O-O tegen de Siciliaanse" },
          { en: "1.c4 opening", es: "Apertura 1.c4", de: "1.c4 Eröffnung", nl: "1.c4 opening" },
          { en: "A kingside pawn storm", es: "Una avalancha de peones en el flanco de rey", de: "Ein Königsflügel-Bauernsturm", nl: "Een koningsvleugel pionstorm" },
          { en: "A sacrificial attack", es: "Un ataque con sacrificio", de: "Ein Opferangriff", nl: "Een offeraanval" }
        ],
        correct: 0,
        explanation: {
          en: "The English Attack is a setup against various Sicilian variations where White castles queenside and launches a kingside pawn storm with f3, Be3, Qd2, and later g4-h4-g5.",
          es: "El Ataque Inglés es una configuración contra varias variaciones de la Siciliana donde las blancas enrocan largo y lanzan una avalancha de peones en el flanco de rey con f3, Ae3, Dd2 y más tarde g4-h4-g5.",
          de: "Der Englische Angriff ist eine Aufstellung gegen verschiedene Sizilianische Varianten, bei der Weiß lang rochiert und mit f3, Le3, Dd2 und später g4-h4-g5 einen Königsflügel-Bauernsturm startet.",
          nl: "De Engelse Aanval is een opstelling tegen verschillende Siciliaanse varianten waarbij wit lang rokeert en een koningsvleugel pionstorm lanceert met f3, Le3, Dd2 en later g4-h4-g5."
        }
      },
      {
        question: {
          en: "What is 'corresponding squares' in endgames?",
          es: "¿Qué son las 'casillas correspondientes' en finales?",
          de: "Was sind 'korrespondierende Felder' in Endspielen?",
          nl: "Wat zijn 'corresponderende velden' in eindspelen?"
        },
        options: [
          { en: "Pairs of squares where king positions determine the outcome", es: "Pares de casillas donde las posiciones del rey determinan el resultado", de: "Feldpaare, bei denen die Königspositionen das Ergebnis bestimmen", nl: "Paren van velden waar koningsposities de uitkomst bepalen" },
          { en: "Symmetrical positions", es: "Posiciones simétricas", de: "Symmetrische Stellungen", nl: "Symmetrische posities" },
          { en: "Squares of the same color", es: "Casillas del mismo color", de: "Felder der gleichen Farbe", nl: "Velden van dezelfde kleur" },
          { en: "Diagonal squares", es: "Casillas diagonales", de: "Diagonale Felder", nl: "Diagonale velden" }
        ],
        correct: 0,
        explanation: {
          en: "Corresponding squares are pairs of squares in king and pawn endgames where if one king occupies a certain square, the opposing king must occupy the corresponding square to maintain the balance.",
          es: "Las casillas correspondientes son pares de casillas en finales de rey y peón donde si un rey ocupa cierta casilla, el rey opuesto debe ocupar la casilla correspondiente para mantener el equilibrio.",
          de: "Korrespondierende Felder sind Feldpaare in König-Bauern-Endspielen, bei denen, wenn ein König ein bestimmtes Feld besetzt, der gegnerische König das korrespondierende Feld besetzen muss, um das Gleichgewicht zu halten.",
          nl: "Corresponderende velden zijn paren van velden in koning-en-pion-eindspelen waarbij als één koning een bepaald veld bezet, de tegenovergestelde koning het corresponderende veld moet bezetten om de balans te behouden."
        }
      },
      {
        question: {
          en: "What is the 'Caro-Kann Defense'?",
          es: "¿Qué es la 'Defensa Caro-Kann'?",
          de: "Was ist die 'Caro-Kann-Verteidigung'?",
          nl: "Wat is de 'Caro-Kann Verdediging'?"
        },
        options: [
          { en: "1.e4 c6, a solid defense developing the bishop before blocking it", es: "1.e4 c6, una defensa sólida que desarrolla el alfil antes de bloquearlo", de: "1.e4 c6, eine solide Verteidigung, die den Läufer entwickelt, bevor er blockiert wird", nl: "1.e4 c6, een solide verdediging die de loper ontwikkelt voordat deze wordt geblokkeerd" },
          { en: "A gambit opening", es: "Una apertura de gambito", de: "Eine Gambit-Eröffnung", nl: "Een gambiet opening" },
          { en: "A hypermodern defense", es: "Una defensa hipermoderna", de: "Eine hypermoderne Verteidigung", nl: "Een hypermoderne verdediging" },
          { en: "An aggressive counterattack", es: "Un contraataque agresivo", de: "Ein aggressiver Gegenangriff", nl: "Een agressieve tegenaanval" }
        ],
        correct: 0,
        explanation: {
          en: "The Caro-Kann (1.e4 c6) prepares ...d5 while keeping the c8-bishop free to develop, unlike the French Defense. It's known for its solid, reliable structure and was favored by Capablanca and Petrosian.",
          es: "La Caro-Kann (1.e4 c6) prepara ...d5 mientras mantiene libre el alfil c8 para desarrollarse, a diferencia de la Defensa Francesa. Es conocida por su estructura sólida y confiable y fue favorecida por Capablanca y Petrosian.",
          de: "Die Caro-Kann (1.e4 c6) bereitet ...d5 vor, während der c8-Läufer frei bleibt für die Entwicklung, im Gegensatz zur Französischen Verteidigung. Sie ist bekannt für ihre solide, zuverlässige Struktur und wurde von Capablanca und Petrosjan bevorzugt.",
          nl: "De Caro-Kann (1.e4 c6) bereidt ...d5 voor terwijl de c8-loper vrij blijft om te ontwikkelen, in tegenstelling tot de Franse Verdediging. Het staat bekend om zijn solide, betrouwbare structuur en werd geprefereerd door Capablanca en Petrosian."
        }
      },
      {
        question: {
          en: "What is a 'skewer' in chess tactics?",
          es: "¿Qué es un 'ensartado' en tácticas de ajedrez?",
          de: "Was ist ein 'Spieß' in Schachtaktiken?",
          nl: "Wat is een 'spies' in schaaktactieken?"
        },
        options: [
          { en: "Attacking a valuable piece forcing it to move and exposing a less valuable piece behind", es: "Atacar una pieza valiosa forzándola a moverse y exponiendo una pieza menos valiosa detrás", de: "Eine wertvolle Figur angreifen, die sich bewegen muss und eine weniger wertvolle Figur dahinter freilegt", nl: "Een waardevol stuk aanvallen waardoor het moet bewegen en een minder waardevol stuk erachter blootstelt" },
          { en: "A double attack", es: "Un ataque doble", de: "Ein Doppelangriff", nl: "Een dubbele aanval" },
          { en: "Pinning a piece", es: "Clavar una pieza", de: "Eine Figur fesseln", nl: "Een stuk spijkeren" },
          { en: "Fork with a knight", es: "Horquilla con un caballo", de: "Gabel mit einem Springer", nl: "Vork met een paard" }
        ],
        correct: 0,
        explanation: {
          en: "A skewer is the reverse of a pin: an attack on a more valuable piece that must move, exposing a less valuable piece behind it. Often called a 'reverse pin'. Common with bishops, rooks, and queens.",
          es: "Un ensartado es lo contrario de una clavada: un ataque a una pieza más valiosa que debe moverse, exponiendo una pieza menos valiosa detrás. A menudo llamado 'clavada inversa'. Común con alfiles, torres y damas.",
          de: "Ein Spieß ist das Gegenteil einer Fesselung: ein Angriff auf eine wertvollere Figur, die sich bewegen muss, wodurch eine weniger wertvolle Figur dahinter freigelegt wird. Oft als 'umgekehrte Fesselung' bezeichnet. Häufig mit Läufern, Türmen und Damen.",
          nl: "Een spies is het omgekeerde van een pin: een aanval op een waardevoller stuk dat moet bewegen, waardoor een minder waardevol stuk erachter wordt blootgesteld. Vaak een 'omgekeerde pin' genoemd. Gebruikelijk met lopers, torens en dames."
        }
      },
      {
        question: {
          en: "What is the 'Hedgehog System'?",
          es: "¿Qué es el 'Sistema Erizo'?",
          de: "Was ist das 'Igel-System'?",
          nl: "Wat is het 'Egel Systeem'?"
        },
        options: [
          { en: "A flexible setup with pawns on a6, b6, d6, e6 waiting to counterattack", es: "Una configuración flexible con peones en a6, b6, d6, e6 esperando contraatacar", de: "Eine flexible Aufstellung mit Bauern auf a6, b6, d6, e6, die auf Gegenangriff wartet", nl: "Een flexibele opstelling met pionnen op a6, b6, d6, e6 die wacht om tegen te vallen" },
          { en: "A defensive pawn chain", es: "Una cadena de peones defensiva", de: "Eine defensive Bauernkette", nl: "Een defensieve pionketen" },
          { en: "An aggressive opening", es: "Una apertura agresiva", de: "Eine aggressive Eröffnung", nl: "Een aggressieve opening" },
          { en: "A closed position", es: "Una posición cerrada", de: "Eine geschlossene Stellung", nl: "Een gesloten positie" }
        ],
        correct: 0,
        explanation: {
          en: "The Hedgehog is a flexible system where Black sets up a compact formation with pawns on the third rank, particularly a6, b6, d6, e6. It's deceptively passive, waiting for the right moment to strike with ...b5 or ...d5.",
          es: "El Erizo es un sistema flexible donde las negras establecen una formación compacta con peones en la tercera fila, particularmente a6, b6, d6, e6. Es engañosamente pasivo, esperando el momento adecuado para atacar con ...b5 o ...d5.",
          de: "Der Igel ist ein flexibles System, bei dem Schwarz eine kompakte Formation mit Bauern auf der dritten Reihe aufbaut, besonders a6, b6, d6, e6. Es ist täuschend passiv und wartet auf den richtigen Moment zum Zuschlagen mit ...b5 oder ...d5.",
          nl: "De Egel is een flexibel systeem waarbij zwart een compacte formatie opzet met pionnen op de derde rij, met name a6, b6, d6, e6. Het is bedrieglijk passief en wacht op het juiste moment om toe te slaan met ...b5 of ...d5."
        }
      },
      {
        question: {
          en: "What is 'domination' in chess endgames?",
          es: "¿Qué es la 'dominación' en finales de ajedrez?",
          de: "Was ist 'Dominierung' in Schachendspielen?",
          nl: "Wat is 'dominantie' in schaakeindspelen?"
        },
        options: [
          { en: "A piece is trapped and will be captured without compensation", es: "Una pieza está atrapada y será capturada sin compensación", de: "Eine Figur ist gefangen und wird ohne Kompensation geschlagen", nl: "Een stuk is gevangen en zal worden geslagen zonder compensatie" },
          { en: "Controlling the center", es: "Controlar el centro", de: "Das Zentrum kontrollieren", nl: "Het centrum controleren" },
          { en: "Having more pieces", es: "Tener más piezas", de: "Mehr Figuren haben", nl: "Meer stukken hebben" },
          { en: "Attacking the king", es: "Atacar al rey", de: "Den König angreifen", nl: "De koning aanvallen" }
        ],
        correct: 0,
        explanation: {
          en: "Domination occurs when a piece completely controls another enemy piece, typically in the endgame. The dominated piece cannot move without being captured and has no useful function.",
          es: "La dominación ocurre cuando una pieza controla completamente otra pieza enemiga, típicamente en el final. La pieza dominada no puede moverse sin ser capturada y no tiene función útil.",
          de: "Dominierung tritt auf, wenn eine Figur eine andere gegnerische Figur vollständig kontrolliert, typischerweise im Endspiel. Die dominierte Figur kann sich nicht bewegen, ohne geschlagen zu werden, und hat keine nützliche Funktion.",
          nl: "Dominantie vindt plaats wanneer een stuk een ander vijandelijk stuk volledig controleert, meestal in het eindspel. Het gedomineerde stuk kan niet bewegen zonder geslagen te worden en heeft geen nuttige functie."
        }
      },
      {
        question: {
          en: "What is the 'Petroff Defense'?",
          es: "¿Qué es la 'Defensa Petroff'?",
          de: "Was ist die 'Petrow-Verteidigung'?",
          nl: "Wat is de 'Petroff Verdediging'?"
        },
        options: [
          { en: "1.e4 e5 2.Nf3 Nf6, counterattacking White's e4 pawn", es: "1.e4 e5 2.Cf3 Cf6, contraatacando el peón e4 de las blancas", de: "1.e4 e5 2.Sf3 Sf6, Gegenangriff auf Weiß' e4-Bauern", nl: "1.e4 e5 2.Pf3 Pf6, tegenaanval op wit's e4-pion" },
          { en: "A pawn gambit", es: "Un gambito de peón", de: "Ein Bauerngambit", nl: "Een piongambiet" },
          { en: "A closed defense", es: "Una defensa cerrada", de: "Eine geschlossene Verteidigung", nl: "Een gesloten verdediging" },
          { en: "A queenside defense", es: "Una defensa en el flanco de dama", de: "Eine Damenflügel-Verteidigung", nl: "Een damezijde verdediging" }
        ],
        correct: 0,
        explanation: {
          en: "The Petroff Defense (also called Russian Defense) with 2...Nf6 immediately counterattacks White's e4 pawn. It's a solid, symmetrical defense that often leads to simplified positions. Named after Alexander Petrov.",
          es: "La Defensa Petroff (también llamada Defensa Rusa) con 2...Cf6 contraataca inmediatamente el peón e4 de las blancas. Es una defensa sólida y simétrica que a menudo conduce a posiciones simplificadas. Nombrada en honor a Alexander Petrov.",
          de: "Die Petrow-Verteidigung (auch Russische Verteidigung genannt) mit 2...Sf6 greift sofort Weiß' e4-Bauern an. Es ist eine solide, symmetrische Verteidigung, die oft zu vereinfachten Stellungen führt. Benannt nach Alexander Petrow.",
          nl: "De Petroff Verdediging (ook wel Russische Verdediging genoemd) met 2...Pf6 valt onmiddellijk wit's e4-pion aan. Het is een solide, symmetrische verdediging die vaak leidt tot vereenvoudigde posities. Vernoemd naar Alexander Petrov."
        }
      },
      {
        question: {
          en: "What is 'piece activity' in positional chess?",
          es: "¿Qué es la 'actividad de piezas' en ajedrez posicional?",
          de: "Was ist 'Figurenaktivität' im positionellen Schach?",
          nl: "Wat is 'stukactiviteit' in positioneel schaken?"
        },
        options: [
          { en: "The mobility and effectiveness of pieces in influencing the game", es: "La movilidad y efectividad de las piezas para influir en el juego", de: "Die Beweglichkeit und Effektivität der Figuren bei der Beeinflussung des Spiels", nl: "De mobiliteit en effectiviteit van stukken bij het beïnvloeden van het spel" },
          { en: "Moving pieces frequently", es: "Mover piezas frecuentemente", de: "Figuren häufig bewegen", nl: "Stukken vaak verplaatsen" },
          { en: "Having all pieces developed", es: "Tener todas las piezas desarrolladas", de: "Alle Figuren entwickelt haben", nl: "Alle stukken ontwikkeld hebben" },
          { en: "Attacking with pieces", es: "Atacar con piezas", de: "Mit Figuren angreifen", nl: "Aanvallen met stukken" }
        ],
        correct: 0,
        explanation: {
          en: "Piece activity refers to how well-placed and mobile your pieces are. Active pieces control important squares, can quickly reach critical areas, and contribute meaningfully to your plans. It's often more important than material count.",
          es: "La actividad de piezas se refiere a qué tan bien colocadas y móviles están tus piezas. Las piezas activas controlan casillas importantes, pueden alcanzar rápidamente áreas críticas y contribuyen significativamente a tus planes. A menudo es más importante que el conteo de material.",
          de: "Figurenaktivität bezieht sich darauf, wie gut platziert und beweglich Ihre Figuren sind. Aktive Figuren kontrollieren wichtige Felder, können schnell kritische Bereiche erreichen und tragen sinnvoll zu Ihren Plänen bei. Sie ist oft wichtiger als die materielle Zählung.",
          nl: "Stukactiviteit verwijst naar hoe goed geplaatst en mobiel je stukken zijn. Actieve stukken controleren belangrijke velden, kunnen snel kritieke gebieden bereiken en dragen betekenisvol bij aan je plannen. Het is vaak belangrijker dan materieel voordeel."
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
          { en: "1.e4 e5 2.Nf3 Nc6 3.d4, opening the center early", es: "1.e4 e5 2.Cf3 Cc6 3.d4, abriendo el centro temprano", de: "1.e4 e5 2.Sf3 Sc6 3.d4, frühes Öffnen des Zentrums", nl: "1.e4 e5 2.Pf3 Pc6 3.d4, vroeg het centrum openen" },
          { en: "A gambit opening", es: "Una apertura de gambito", de: "Eine Gambit-Eröffnung", nl: "Een gambiet opening" },
          { en: "A closed position", es: "Una posición cerrada", de: "Eine geschlossene Stellung", nl: "Een gesloten positie" },
          { en: "A queenside attack", es: "Un ataque en el flanco de dama", de: "Ein Damenflügel-Angriff", nl: "Een damezijde aanval" }
        ],
        correct: 0,
        explanation: {
          en: "The Scotch Game features 3.d4, immediately challenging Black's center. After 3...exd4 4.Nxd4, White gets open lines and active piece play. It was revived at the top level by Kasparov in the 1990s.",
          es: "El Juego Escocés presenta 3.d4, desafiando inmediatamente el centro de las negras. Después de 3...exd4 4.Cxd4, las blancas obtienen líneas abiertas y juego de piezas activo. Fue revivido al más alto nivel por Kasparov en los años 90.",
          de: "Die Schottische Partie zeigt 3.d4, wodurch Schwarz' Zentrum sofort herausgefordert wird. Nach 3...exd4 4.Sxd4 erhält Weiß offene Linien und aktives Figurenspiel. Sie wurde in den 1990er Jahren von Kasparov auf höchstem Niveau wiederbelebt.",
          nl: "De Schotse Partij heeft 3.d4, wat onmiddellijk zwart's centrum uitdaagt. Na 3...exd4 4.Pxd4 krijgt wit open rijen en actief stukspel. Het werd in de jaren 90 op topniveau nieuw leven ingeblazen door Kasparov."
        }
      },
      {
        question: {
          en: "What is a 'positional sacrifice'?",
          es: "¿Qué es un 'sacrificio posicional'?",
          de: "Was ist ein 'positionelles Opfer'?",
          nl: "Wat is een 'positioneel offer'?"
        },
        options: [
          { en: "Giving up material for long-term positional advantages", es: "Entregar material por ventajas posicionales a largo plazo", de: "Material für langfristige positionelle Vorteile opfern", nl: "Materiaal opgeven voor langdurige positionele voordelen" },
          { en: "Sacrificing the queen", es: "Sacrificar la dama", de: "Die Dame opfern", nl: "De dame offeren" },
          { en: "Trading pieces equally", es: "Intercambiar piezas por igual", de: "Figuren gleichwertig tauschen", nl: "Stukken gelijkwaardig ruilen" },
          { en: "Giving up a pawn for attack", es: "Entregar un peón para atacar", de: "Einen Bauern für Angriff opfern", nl: "Een pion opgeven voor aanval" }
        ],
        correct: 0,
        explanation: {
          en: "A positional sacrifice involves giving up material not for immediate tactical gain, but for lasting positional factors like better piece placement, superior pawn structure, control of key squares, or restricting opponent's pieces.",
          es: "Un sacrificio posicional implica entregar material no para ganancia táctica inmediata, sino para factores posicionales duraderos como mejor colocación de piezas, estructura de peones superior, control de casillas clave o restricción de las piezas del oponente.",
          de: "Ein positionelles Opfer beinhaltet das Opfern von Material nicht für sofortigen taktischen Gewinn, sondern für dauerhafte positionelle Faktoren wie bessere Figurenplatzierung, überlegene Bauernstruktur, Kontrolle wichtiger Felder oder Einschränkung gegnerischer Figuren.",
          nl: "Een positioneel offer houdt in dat materiaal wordt opgegeven niet voor onmiddellijke tactische winst, maar voor blijvende positionele factoren zoals betere stukplaatsing, superieure pionstructuur, controle van sleutelvelden of beperking van stukken van de tegenstander."
        }
      },
      {
        question: {
          en: "What is the 'Reti Opening'?",
          es: "¿Qué es la 'Apertura Reti'?",
          de: "Was ist die 'Réti-Eröffnung'?",
          nl: "Wat is de 'Reti Opening'?"
        },
        options: [
          { en: "1.Nf3 with hypermodern approach to the center", es: "1.Cf3 con enfoque hipermoderno del centro", de: "1.Sf3 mit hypermodernem Ansatz zum Zentrum", nl: "1.Pf3 met hypermoderne benadering van het centrum" },
          { en: "1.e4 opening", es: "Apertura 1.e4", de: "1.e4 Eröffnung", nl: "1.e4 opening" },
          { en: "A pawn gambit", es: "Un gambito de peón", de: "Ein Bauerngambit", nl: "Een piongambiet" },
          { en: "A defensive system", es: "Un sistema defensivo", de: "Ein defensives System", nl: "Een defensief systeem" }
        ],
        correct: 0,
        explanation: {
          en: "The Reti Opening (1.Nf3) is a hypermodern opening that controls the center from afar rather than occupying it with pawns. Often followed by g3 and Bg2. Named after Richard Réti, a pioneer of hypermodern chess.",
          es: "La Apertura Reti (1.Cf3) es una apertura hipermoderna que controla el centro desde lejos en lugar de ocuparlo con peones. A menudo seguida por g3 y Ag2. Nombrada en honor a Richard Réti, un pionero del ajedrez hipermoderno.",
          de: "Die Réti-Eröffnung (1.Sf3) ist eine hypermoderne Eröffnung, die das Zentrum von fern kontrolliert, anstatt es mit Bauern zu besetzen. Oft gefolgt von g3 und Lg2. Benannt nach Richard Réti, einem Pionier des hypermodernen Schachs.",
          nl: "De Reti Opening (1.Pf3) is een hypermoderne opening die het centrum van veraf controleert in plaats van het met pionnen te bezetten. Vaak gevolgd door g3 en Lg2. Vernoemd naar Richard Réti, een pionier van hypermodern schaken."
        }
      },
      {
        question: {
          en: "What is 'dynamic play' in chess?",
          es: "¿Qué es el 'juego dinámico' en ajedrez?",
          de: "Was ist 'dynamisches Spiel' im Schach?",
          nl: "Wat is 'dynamisch spel' in schaken?"
        },
        options: [
          { en: "Play focusing on tactical complications and initiative rather than static advantages", es: "Juego enfocado en complicaciones tácticas e iniciativa en lugar de ventajas estáticas", de: "Spiel, das sich auf taktische Komplikationen und Initiative statt auf statische Vorteile konzentriert", nl: "Spel gericht op tactische complicaties en initiatief in plaats van statische voordelen" },
          { en: "Fast-paced games", es: "Juegos rápidos", de: "Schnelle Spiele", nl: "Snel gespeelde partijen" },
          { en: "Aggressive attacking", es: "Ataque agresivo", de: "Aggressives Angreifen", nl: "Agressief aanvallen" },
          { en: "Moving pieces frequently", es: "Mover piezas frecuentemente", de: "Figuren häufig bewegen", nl: "Stukken vaak verplaatsen" }
        ],
        correct: 0,
        explanation: {
          en: "Dynamic play emphasizes concrete calculations, tactics, initiative, and temporary advantages that can change quickly. It contrasts with static play which relies on permanent features like pawn structure or material advantage.",
          es: "El juego dinámico enfatiza cálculos concretos, tácticas, iniciativa y ventajas temporales que pueden cambiar rápidamente. Contrasta con el juego estático que se basa en características permanentes como la estructura de peones o ventaja material.",
          de: "Dynamisches Spiel betont konkrete Berechnungen, Taktiken, Initiative und vorübergehende Vorteile, die sich schnell ändern können. Es steht im Gegensatz zum statischen Spiel, das auf permanenten Merkmalen wie Bauernstruktur oder materiellem Vorteil basiert.",
          nl: "Dynamisch spel benadrukt concrete berekeningen, tactieken, initiatief en tijdelijke voordelen die snel kunnen veranderen. Het contrasteert met statisch spel dat gebaseerd is op permanente kenmerken zoals pionstructuur of materieel voordeel."
        }
      },
      {
        question: {
          en: "What is the 'London System'?",
          es: "¿Qué es el 'Sistema Londres'?",
          de: "Was ist das 'Londoner System'?",
          nl: "Wat is het 'Londen Systeem'?"
        },
        options: [
          { en: "A solid setup with d4, Bf4, e3, Nf3, and c3", es: "Una configuración sólida con d4, Af4, e3, Cf3 y c3", de: "Eine solide Aufstellung mit d4, Lf4, e3, Sf3 und c3", nl: "Een solide opstelling met d4, Lf4, e3, Pf3 en c3" },
          { en: "An aggressive gambit", es: "Un gambito agresivo", de: "Ein aggressives Gambit", nl: "Een agressief gambiet" },
          { en: "A hypermodern opening", es: "Una apertura hipermoderna", de: "Eine hypermoderne Eröffnung", nl: "Een hypermoderne opening" },
          { en: "A counterattacking defense", es: "Una defensa de contraataque", de: "Eine Gegenangriff-Verteidigung", nl: "Een tegenaanval verdediging" }
        ],
        correct: 0,
        explanation: {
          en: "The London System is a solid, reliable opening system for White featuring 1.d4 followed by Bf4, e3, Nf3, Nbd2, c3, and Bd3. It's flexible against various Black setups and avoids most sharp theoretical lines.",
          es: "El Sistema Londres es un sistema de apertura sólido y confiable para las blancas con 1.d4 seguido de Af4, e3, Cf3, Cbd2, c3 y Ad3. Es flexible contra varias configuraciones de las negras y evita la mayoría de las líneas teóricas agudas.",
          de: "Das Londoner System ist ein solides, zuverlässiges Eröffnungssystem für Weiß mit 1.d4 gefolgt von Lf4, e3, Sf3, Sbd2, c3 und Ld3. Es ist flexibel gegen verschiedene schwarze Aufstellungen und vermeidet die meisten scharfen theoretischen Linien.",
          nl: "Het Londen Systeem is een solide, betrouwbaar openingssysteem voor wit met 1.d4 gevolgd door Lf4, e3, Pf3, Pbd2, c3 en Ld3. Het is flexibel tegen verschillende zwarte opstellingen en vermijdt de meeste scherpe theoretische lijnen."
        }
      },
      {
        question: {
          en: "What is 'color complex weakness'?",
          es: "¿Qué es la 'debilidad del complejo de color'?",
          de: "Was ist 'Farbkomplex-Schwäche'?",
          nl: "Wat is 'kleurcomplexzwakte'?"
        },
        options: [
          { en: "Weak squares of one color that cannot be defended by pawns", es: "Casillas débiles de un color que no pueden ser defendidas por peones", de: "Schwache Felder einer Farbe, die nicht von Bauern verteidigt werden können", nl: "Zwakke velden van één kleur die niet door pionnen kunnen worden verdedigd" },
          { en: "Having only light-squared bishops", es: "Tener solo alfiles de casillas claras", de: "Nur Weißfeld-Läufer haben", nl: "Alleen witvelderlopers hebben" },
          { en: "Weak pawn structure", es: "Estructura de peones débil", de: "Schwache Bauernstruktur", nl: "Zwakke pionstructuur" },
          { en: "Bad bishop", es: "Alfil malo", de: "Schlechter Läufer", nl: "Slechte loper" }
        ],
        correct: 0,
        explanation: {
          en: "Color complex weakness occurs when squares of one color (light or dark) become chronically weak, often after pawns are fixed on the opposite color. The opponent can exploit this with a bishop controlling those squares.",
          es: "La debilidad del complejo de color ocurre cuando las casillas de un color (claras u oscuras) se vuelven crónicamente débiles, a menudo después de que los peones se fijan en el color opuesto. El oponente puede explotar esto con un alfil controlando esas casillas.",
          de: "Farbkomplex-Schwäche tritt auf, wenn Felder einer Farbe (hell oder dunkel) chronisch schwach werden, oft nachdem Bauern auf der entgegengesetzten Farbe fixiert sind. Der Gegner kann dies mit einem Läufer ausnutzen, der diese Felder kontrolliert.",
          nl: "Kleurcomplexzwakte treedt op wanneer velden van één kleur (licht of donker) chronisch zwak worden, vaak nadat pionnen op de tegenovergestelde kleur zijn gefixeerd. De tegenstander kan dit uitbuiten met een loper die die velden controleert."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level9;
  } else if (typeof window !== 'undefined') {
    window.level9 = level9;
  }
})();
