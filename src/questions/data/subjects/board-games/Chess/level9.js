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
      },
      {
        question: {
          en: "What is the 'Marshall Attack' in the Ruy Lopez?",
          es: "¿Qué es el 'Ataque Marshall' en la Ruy López?",
          de: "Was ist der 'Marshall-Angriff' in der Spanischen Partie?",
          nl: "Wat is de 'Marshall Aanval' in de Ruy Lopez?"
        },
        options: [
          { en: "8...d5, sacrificing a pawn for initiative", es: "8...d5, sacrificando un peón por iniciativa", de: "8...d5, Opfern eines Bauern für Initiative", nl: "8...d5, een pion offeren voor initiatief" },
          { en: "A queenside attack", es: "Un ataque en el flanco de dama", de: "Ein Damenflügel-Angriff", nl: "Een damezijde aanval" },
          { en: "A king's gambit variation", es: "Una variación del gambito de rey", de: "Eine Königsgambit-Variante", nl: "Een koningsgambiet variatie" },
          { en: "An endgame technique", es: "Una técnica de final", de: "Eine Endspiel-Technik", nl: "Een eindspel techniek" }
        ],
        correct: 0,
        explanation: {
          en: "The Marshall Attack (8...d5 in the Ruy Lopez) is a sharp gambit where Black sacrifices a pawn for rapid development and attacking chances. Discovered by Frank Marshall in 1918, it remains popular at all levels.",
          es: "El Ataque Marshall (8...d5 en la Ruy López) es un gambito agudo donde las negras sacrifican un peón por desarrollo rápido y chances de ataque. Descubierto por Frank Marshall en 1918, sigue siendo popular en todos los niveles.",
          de: "Der Marshall-Angriff (8...d5 in der Spanischen Partie) ist ein scharfes Gambit, bei dem Schwarz einen Bauern für schnelle Entwicklung und Angriffschancen opfert. Von Frank Marshall 1918 entdeckt, bleibt es auf allen Ebenen beliebt.",
          nl: "De Marshall Aanval (8...d5 in de Ruy Lopez) is een scherp gambiet waarbij zwart een pion offert voor snelle ontwikkeling en aanvalskansen. Ontdekt door Frank Marshall in 1918, blijft het populair op alle niveaus."
        }
      },
      {
        question: {
          en: "What is 'minority attack'?",
          es: "¿Qué es el 'ataque de minoría'?",
          de: "Was ist ein 'Minoritätsangriff'?",
          nl: "Wat is een 'minderheidsaanval'?"
        },
        options: [
          { en: "Advancing fewer pawns against opponent's pawn chain to create weaknesses", es: "Avanzar menos peones contra la cadena de peones del oponente para crear debilidades", de: "Vorrücken weniger Bauern gegen die gegnerische Bauernkette um Schwächen zu schaffen", nl: "Minder pionnen vooruitschuiven tegen pioncadeau van tegenstander om zwakheden te creëren" },
          { en: "Attacking with fewer pieces", es: "Atacar con menos piezas", de: "Mit weniger Figuren angreifen", nl: "Aanvallen met minder stukken" },
          { en: "A tactical trick", es: "Un truco táctico", de: "Ein taktischer Trick", nl: "Een tactische truc" },
          { en: "Defending a weak position", es: "Defender una posición débil", de: "Eine schwache Stellung verteidigen", nl: "Een zwakke positie verdedigen" }
        ],
        correct: 0,
        explanation: {
          en: "A minority attack uses fewer pawns (usually 2 vs 3) on a flank to undermine the opponent's pawn majority, creating weaknesses. Common in the Queen's Gambit Declined where White plays b4-b5 on the queenside.",
          es: "Un ataque de minoría usa menos peones (usualmente 2 vs 3) en un flanco para socavar la mayoría de peones del oponente, creando debilidades. Común en el Gambito de Dama Rehusado donde las blancas juegan b4-b5 en el flanco de dama.",
          de: "Ein Minoritätsangriff verwendet weniger Bauern (normalerweise 2 vs 3) auf einem Flügel, um die Bauernmehrheit des Gegners zu untergraben und Schwächen zu schaffen. Üblich im Abgelehnten Damengambit, wo Weiß b4-b5 am Damenflügel spielt.",
          nl: "Een minderheidsaanval gebruikt minder pionnen (meestal 2 vs 3) op een vleugel om de pionmeerderheid van de tegenstander te ondermijnen en zwakheden te creëren. Gebruikelijk in het Afgewezen Damegambiet waar wit b4-b5 speelt op de damezijde."
        }
      },
      {
        question: {
          en: "What is the 'Maroczy Bind'?",
          es: "¿Qué es el 'Atadura Maróczy'?",
          de: "Was ist die 'Maróczy-Bindung'?",
          nl: "Wat is de 'Maroczy Bind'?"
        },
        options: [
          { en: "A pawn structure with pawns on c4 and e4 controlling d5", es: "Una estructura de peones con peones en c4 y e4 controlando d5", de: "Eine Bauernstruktur mit Bauern auf c4 und e4, die d5 kontrollieren", nl: "Een pionstructuur met pionnen op c4 en e4 die d5 controleren" },
          { en: "A tactical trap", es: "Una trampa táctica", de: "Eine taktische Falle", nl: "Een tactische val" },
          { en: "An endgame position", es: "Una posición de final", de: "Eine Endspiel-Stellung", nl: "Een eindspel positie" },
          { en: "A piece maneuver", es: "Una maniobra de piezas", de: "Ein Figurenmanöver", nl: "Een stukmanoeuvre" }
        ],
        correct: 0,
        explanation: {
          en: "The Maroczy Bind is a pawn formation with pawns on c4 and e4, restricting Black's central break ...d5. It arises mainly in the Sicilian Defense and gives White spatial advantage but potentially weak d4/d3 squares.",
          es: "El Atadura Maróczy es una formación de peones con peones en c4 y e4, restringiendo la ruptura central de las negras ...d5. Surge principalmente en la Defensa Siciliana y da a las blancas ventaja espacial pero potencialmente casillas débiles d4/d3.",
          de: "Die Maróczy-Bindung ist eine Bauernformation mit Bauern auf c4 und e4, die Schwarz' zentralen Durchbruch ...d5 einschränkt. Sie entsteht hauptsächlich in der Sizilianischen Verteidigung und gibt Weiß Raumvorteil aber potenziell schwache d4/d3-Felder.",
          nl: "De Maroczy Bind is een pionformatie met pionnen op c4 en e4, die zwart's centrale doorbraak ...d5 beperkt. Het ontstaat voornamelijk in de Siciliaanse Verdediging en geeft wit ruimtevoordeel maar mogelijk zwakke d4/d3 velden."
        }
      },
      {
        question: {
          en: "What is 'tempo' in chess?",
          es: "¿Qué es el 'tiempo' en ajedrez?",
          de: "Was ist 'Tempo' im Schach?",
          nl: "Wat is 'tempo' in schaken?"
        },
        options: [
          { en: "A unit of time representing one move in development or initiative", es: "Una unidad de tiempo que representa un movimiento en desarrollo o iniciativa", de: "Eine Zeiteinheit, die einen Zug in Entwicklung oder Initiative darstellt", nl: "Een tijdseenheid die één zet in ontwikkeling of initiatief vertegenwoordigt" },
          { en: "The clock time remaining", es: "El tiempo restante en el reloj", de: "Die verbleibende Bedenkzeit", nl: "De resterende kloktijd" },
          { en: "Speed of play", es: "Velocidad de juego", de: "Spielgeschwindigkeit", nl: "Speelsnelheid" },
          { en: "Moving quickly", es: "Moverse rápidamente", de: "Schnell bewegen", nl: "Snel bewegen" }
        ],
        correct: 0,
        explanation: {
          en: "A tempo in chess is a unit measuring time advantage in development. Gaining a tempo means achieving a goal in fewer moves. Losing a tempo means wasting a move. Example: forcing opponent to move the same piece twice gains tempo.",
          es: "Un tiempo en ajedrez es una unidad que mide la ventaja de tiempo en desarrollo. Ganar un tiempo significa lograr un objetivo en menos movimientos. Perder un tiempo significa desperdiciar un movimiento. Ejemplo: forzar al oponente a mover la misma pieza dos veces gana tiempo.",
          de: "Ein Tempo im Schach ist eine Einheit, die Zeitvorteil in der Entwicklung misst. Tempo gewinnen bedeutet, ein Ziel in weniger Zügen zu erreichen. Tempo verlieren bedeutet, einen Zug zu verschwenden. Beispiel: Den Gegner zu zwingen, dieselbe Figur zweimal zu bewegen, gewinnt Tempo.",
          nl: "Een tempo in schaken is een eenheid die tijdvoordeel in ontwikkeling meet. Tempo winnen betekent een doel in minder zetten bereiken. Tempo verliezen betekent een zet verspillen. Voorbeeld: de tegenstander dwingen hetzelfde stuk tweemaal te bewegen wint tempo."
        }
      },
      {
        question: {
          en: "What is the 'English Opening'?",
          es: "¿Qué es la 'Apertura Inglesa'?",
          de: "Was ist die 'Englische Eröffnung'?",
          nl: "Wat is de 'Engelse Opening'?"
        },
        options: [
          { en: "1.c4, a flexible hypermodern opening", es: "1.c4, una apertura hipermoderna flexible", de: "1.c4, eine flexible hypermoderne Eröffnung", nl: "1.c4, een flexibele hypermoderne opening" },
          { en: "1.e4 e5 2.Nf3", es: "1.e4 e5 2.Cf3", de: "1.e4 e5 2.Sf3", nl: "1.e4 e5 2.Pf3" },
          { en: "A queenside gambit", es: "Un gambito de flanco de dama", de: "Ein Damenflügel-Gambit", nl: "Een damezijde gambiet" },
          { en: "A classical opening", es: "Una apertura clásica", de: "Eine klassische Eröffnung", nl: "Een klassieke opening" }
        ],
        correct: 0,
        explanation: {
          en: "The English Opening (1.c4) is a hypermodern opening controlling d5 from the side. It's extremely flexible, transposing to many systems. Popular at top level, used extensively by players like Botvinnik and Kasparov.",
          es: "La Apertura Inglesa (1.c4) es una apertura hipermoderna que controla d5 desde el lado. Es extremadamente flexible, transpone a muchos sistemas. Popular al más alto nivel, usada extensivamente por jugadores como Botvinnik y Kasparov.",
          de: "Die Englische Eröffnung (1.c4) ist eine hypermoderne Eröffnung, die d5 von der Seite kontrolliert. Sie ist äußerst flexibel und transponiert in viele Systeme. Auf höchstem Niveau beliebt, von Spielern wie Botvinnik und Kasparov ausgiebig verwendet.",
          nl: "De Engelse Opening (1.c4) is een hypermoderne opening die d5 van de zijkant controleert. Het is extreem flexibel en transponeert naar vele systemen. Populair op topniveau, uitgebreid gebruikt door spelers als Botvinnik en Kasparov."
        }
      },
      {
        question: {
          en: "What is 'piece coordination'?",
          es: "¿Qué es la 'coordinación de piezas'?",
          de: "Was ist 'Figurenkoordination'?",
          nl: "Wat is 'stukcoördinatie'?"
        },
        options: [
          { en: "Pieces working together harmoniously toward common goals", es: "Piezas trabajando juntas armoniosamente hacia objetivos comunes", de: "Figuren, die harmonisch auf gemeinsame Ziele hinarbeiten", nl: "Stukken die harmonieus samenwerken naar gemeenschappelijke doelen" },
          { en: "Moving pieces in sequence", es: "Mover piezas en secuencia", de: "Figuren nacheinander bewegen", nl: "Stukken in volgorde verplaatsen" },
          { en: "Developing all pieces", es: "Desarrollar todas las piezas", de: "Alle Figuren entwickeln", nl: "Alle stukken ontwikkelen" },
          { en: "Placing pieces on good squares", es: "Colocar piezas en buenas casillas", de: "Figuren auf gute Felder stellen", nl: "Stukken op goede velden plaatsen" }
        ],
        correct: 0,
        explanation: {
          en: "Piece coordination means pieces working together effectively, protecting each other and controlling important squares or files. Well-coordinated pieces multiply their effectiveness, while uncoordinated pieces are vulnerable and ineffective.",
          es: "La coordinación de piezas significa que las piezas trabajan juntas efectivamente, protegiéndose mutuamente y controlando casillas o columnas importantes. Las piezas bien coordinadas multiplican su efectividad, mientras que las piezas no coordinadas son vulnerables e ineficaces.",
          de: "Figurenkoordination bedeutet, dass Figuren effektiv zusammenarbeiten, sich gegenseitig schützen und wichtige Felder oder Linien kontrollieren. Gut koordinierte Figuren vervielfachen ihre Wirksamkeit, während unkoordinierte Figuren verwundbar und ineffektiv sind.",
          nl: "Stukcoördinatie betekent dat stukken effectief samenwerken, elkaar beschermen en belangrijke velden of lijnen controleren. Goed gecoördineerde stukken vermenigvuldigen hun effectiviteit, terwijl ongecoördineerde stukken kwetsbaar en ineffectief zijn."
        }
      },
      {
        question: {
          en: "What is the 'Grunfeld Defense'?",
          es: "¿Qué es la 'Defensa Grünfeld'?",
          de: "Was ist die 'Grünfeld-Verteidigung'?",
          nl: "Wat is de 'Grunfeld Verdediging'?"
        },
        options: [
          { en: "1.d4 Nf6 2.c4 g6 3.Nc3 d5, attacking White's center", es: "1.d4 Cf6 2.c4 g6 3.Cc3 d5, atacando el centro de las blancas", de: "1.d4 Sf6 2.c4 g6 3.Sc3 d5, greift Weiß' Zentrum an", nl: "1.d4 Pf6 2.c4 g6 3.Pc3 d5, aanvallend wit's centrum" },
          { en: "A king's gambit variation", es: "Una variación del gambito de rey", de: "Eine Königsgambit-Variante", nl: "Een koningsgambiet variatie" },
          { en: "A passive defensive system", es: "Un sistema defensivo pasivo", de: "Ein passives Verteidigungssystem", nl: "Een passief verdedigingssysteem" },
          { en: "A queenside counterattack", es: "Un contraataque en el flanco de dama", de: "Ein Damenflügel-Gegenangriff", nl: "Een damezijde tegenaanval" }
        ],
        correct: 0,
        explanation: {
          en: "The Grunfeld Defense is a hypermodern opening where Black allows White a big center then attacks it with ...d5. Named after Ernst Grünfeld (1920s), it's favored by aggressive players and leads to sharp, tactical positions.",
          es: "La Defensa Grünfeld es una apertura hipermoderna donde las negras permiten a las blancas un gran centro y luego lo atacan con ...d5. Nombrada en honor a Ernst Grünfeld (años 1920), es favorecida por jugadores agresivos y conduce a posiciones agudas y tácticas.",
          de: "Die Grünfeld-Verteidigung ist eine hypermoderne Eröffnung, bei der Schwarz Weiß ein großes Zentrum erlaubt und es dann mit ...d5 angreift. Benannt nach Ernst Grünfeld (1920er), wird sie von aggressiven Spielern bevorzugt und führt zu scharfen, taktischen Stellungen.",
          nl: "De Grunfeld Verdediging is een hypermoderne opening waarbij zwart wit een groot centrum toestaat en het dan aanvalt met ...d5. Vernoemd naar Ernst Grünfeld (jaren 1920), wordt het geprefereerd door agressieve spelers en leidt tot scherpe, tactische posities."
        }
      },
      {
        question: {
          en: "What is 'static vs dynamic advantage'?",
          es: "¿Qué es 'ventaja estática vs dinámica'?",
          de: "Was ist 'statischer vs dynamischer Vorteil'?",
          nl: "Wat is 'statisch vs dynamisch voordeel'?"
        },
        options: [
          { en: "Permanent structural features vs temporary initiative-based advantages", es: "Características estructurales permanentes vs ventajas temporales basadas en iniciativa", de: "Permanente strukturelle Merkmale vs temporäre initiativbasierte Vorteile", nl: "Permanente structurele kenmerken vs tijdelijke initiatief-gebaseerde voordelen" },
          { en: "Material vs positional advantage", es: "Ventaja material vs posicional", de: "Materieller vs positioneller Vorteil", nl: "Materieel vs positioneel voordeel" },
          { en: "Opening vs endgame advantage", es: "Ventaja de apertura vs final", de: "Eröffnungs- vs Endspiel-Vorteil", nl: "Opening vs eindspel voordeel" },
          { en: "Attack vs defense", es: "Ataque vs defensa", de: "Angriff vs Verteidigung", nl: "Aanval vs verdediging" }
        ],
        correct: 0,
        explanation: {
          en: "Static advantages are permanent (better pawn structure, material, space) and remain unless exchanged. Dynamic advantages are temporary (initiative, attack, tactics) and must be used quickly or they fade. Balancing both is key to strong play.",
          es: "Las ventajas estáticas son permanentes (mejor estructura de peones, material, espacio) y permanecen a menos que se intercambien. Las ventajas dinámicas son temporales (iniciativa, ataque, tácticas) y deben usarse rápidamente o se desvanecen. Equilibrar ambas es clave para un juego fuerte.",
          de: "Statische Vorteile sind permanent (bessere Bauernstruktur, Material, Raum) und bleiben, sofern nicht getauscht. Dynamische Vorteile sind temporär (Initiative, Angriff, Taktiken) und müssen schnell genutzt werden oder sie verschwinden. Beide zu balancieren ist der Schlüssel zu starkem Spiel.",
          nl: "Statische voordelen zijn permanent (betere pionstructuur, materiaal, ruimte) en blijven tenzij geruild. Dynamische voordelen zijn tijdelijk (initiatief, aanval, tactieken) en moeten snel gebruikt worden of ze verdwijnen. Beide balanceren is de sleutel tot sterk spel."
        }
      },
      {
        question: {
          en: "What is the 'Najdorf Variation' of the Sicilian Defense?",
          es: "¿Qué es la 'Variante Najdorf' de la Defensa Siciliana?",
          de: "Was ist die 'Najdorf-Variante' der Sizilianischen Verteidigung?",
          nl: "Wat is de 'Najdorf Variatie' van de Siciliaanse Verdediging?"
        },
        options: [
          { en: "5...a6, creating flexibility and preventing Nb5", es: "5...a6, creando flexibilidad y previniendo Cb5", de: "5...a6, schafft Flexibilität und verhindert Sb5", nl: "5...a6, creërend flexibiliteit en voorkomend Pb5" },
          { en: "5...e6, the Scheveningen variation", es: "5...e6, la variación Scheveningen", de: "5...e6, die Scheveningen-Variante", nl: "5...e6, de Scheveningen variatie" },
          { en: "5...Nc6, the classical variation", es: "5...Cc6, la variación clásica", de: "5...Sc6, die klassische Variante", nl: "5...Pc6, de klassieke variatie" },
          { en: "5...g6, the Dragon variation", es: "5...g6, la variación del Dragón", de: "5...g6, die Drachen-Variante", nl: "5...g6, de Dragon variatie" }
        ],
        correct: 0,
        explanation: {
          en: "The Najdorf (5...a6) is the most popular Sicilian variation. Named after Miguel Najdorf, it prevents Nb5, prepares ...e5, and keeps maximum flexibility. Used by Fischer, Kasparov, and countless top players.",
          es: "El Najdorf (5...a6) es la variación siciliana más popular. Nombrada en honor a Miguel Najdorf, previene Cb5, prepara ...e5 y mantiene máxima flexibilidad. Usada por Fischer, Kasparov y innumerables jugadores de alto nivel.",
          de: "Das Najdorf (5...a6) ist die beliebteste sizilianische Variante. Benannt nach Miguel Najdorf, verhindert es Sb5, bereitet ...e5 vor und hält maximale Flexibilität. Von Fischer, Kasparov und zahllosen Spitzenspielern verwendet.",
          nl: "De Najdorf (5...a6) is de populairste Siciliaanse variatie. Vernoemd naar Miguel Najdorf, voorkomt het Pb5, bereidt ...e5 voor en houdt maximale flexibiliteit. Gebruikt door Fischer, Kasparov en talloze topspelers."
        }
      },
      {
        question: {
          en: "What is 'triangulation' in endgames?",
          es: "¿Qué es la 'triangulación' en finales?",
          de: "Was ist 'Triangulation' in Endspielen?",
          nl: "Wat is 'triangulatie' in eindspelen?"
        },
        options: [
          { en: "King maneuver losing a tempo to put opponent in zugzwang", es: "Maniobra del rey perdiendo un tiempo para poner al oponente en zugzwang", de: "König-Manöver, das ein Tempo verliert um den Gegner in Zugzwang zu bringen", nl: "Koningsmanoeuvre waarbij een tempo verloren gaat om tegenstander in zugzwang te brengen" },
          { en: "Moving in a triangle pattern", es: "Moverse en un patrón triangular", de: "In einem dreieckigen Muster bewegen", nl: "Bewegen in een driehoekspatroon" },
          { en: "Three-piece coordination", es: "Coordinación de tres piezas", de: "Drei-Figuren-Koordination", nl: "Drie-stukken coördinatie" },
          { en: "A tactical pattern", es: "Un patrón táctico", de: "Ein taktisches Muster", nl: "Een tactisch patroon" }
        ],
        correct: 0,
        explanation: {
          en: "Triangulation is an endgame technique where one king moves in a triangle (e.g. Kf1-Ke1-Kd1-Kf1) while the opponent's king can only move back and forth, losing a tempo to create zugzwang. Critical in king and pawn endgames.",
          es: "La triangulación es una técnica de final donde un rey se mueve en un triángulo (ej. Rf1-Re1-Rd1-Rf1) mientras el rey del oponente solo puede moverse de un lado a otro, perdiendo un tiempo para crear zugzwang. Crítico en finales de rey y peón.",
          de: "Triangulation ist eine Endspiel-Technik, bei der ein König in einem Dreieck zieht (z.B. Kf1-Ke1-Kd1-Kf1), während der gegnerische König nur hin und her ziehen kann, ein Tempo verliert um Zugzwang zu schaffen. Entscheidend in König-und-Bauern-Endspielen.",
          nl: "Triangulatie is een eindspel techniek waarbij één koning in een driehoek beweegt (bijv. Kf1-Ke1-Kd1-Kf1) terwijl de koning van de tegenstander alleen heen en weer kan bewegen, een tempo verliezend om zugzwang te creëren. Cruciaal in koning-en-pion eindspelen."
        }
      },
      {
        question: {
          en: "What is the 'Sveshnikov Variation' in the Sicilian?",
          es: "¿Qué es la 'Variante Sveshnikov' en la Siciliana?",
          de: "Was ist die 'Sweschnikow-Variante' in der Sizilianischen?",
          nl: "Wat is de 'Sveshnikov Variatie' in de Siciliaanse?"
        },
        options: [
          { en: "5...e5, accepting a backward d6 pawn for active play", es: "5...e5, aceptando un peón atrasado d6 por juego activo", de: "5...e5, akzeptiert einen rückständigen d6-Bauern für aktives Spiel", nl: "5...e5, accepterend een achtergebleven d6 pion voor actief spel" },
          { en: "5...a6, the Najdorf", es: "5...a6, el Najdorf", de: "5...a6, das Najdorf", nl: "5...a6, de Najdorf" },
          { en: "5...g6, the Dragon", es: "5...g6, el Dragón", de: "5...g6, der Drache", nl: "5...g6, de Dragon" },
          { en: "5...Nc6, classical Sicilian", es: "5...Cc6, Siciliana clásica", de: "5...Sc6, klassisches Sizilianisch", nl: "5...Pc6, klassieke Siciliaanse" }
        ],
        correct: 0,
        explanation: {
          en: "The Sveshnikov (5...e5 after 1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3) accepts a weak d6 pawn for active pieces and attacking chances. Pioneered by Evgeny Sveshnikov, it's popular at all levels today.",
          es: "El Sveshnikov (5...e5 después de 1.e4 c5 2.Cf3 Cc6 3.d4 cxd4 4.Cxd4 Cf6 5.Cc3) acepta un peón d6 débil por piezas activas y chances de ataque. Pionero de Evgeny Sveshnikov, es popular en todos los niveles hoy.",
          de: "Das Sweschnikow (5...e5 nach 1.e4 c5 2.Sf3 Sc6 3.d4 cxd4 4.Sxd4 Sf6 5.Sc3) akzeptiert einen schwachen d6-Bauern für aktive Figuren und Angriffschancen. Von Evgeny Sweschnikow entwickelt, ist es heute auf allen Ebenen beliebt.",
          nl: "De Sveshnikov (5...e5 na 1.e4 c5 2.Pf3 Pc6 3.d4 cxd4 4.Pxd4 Pf6 5.Pc3) accepteert een zwakke d6 pion voor actieve stukken en aanvalskansen. Gepioniert door Evgeny Sveshnikov, is het vandaag populair op alle niveaus."
        }
      },
      {
        question: {
          en: "What is 'compensation' in chess?",
          es: "¿Qué es la 'compensación' en ajedrez?",
          de: "Was ist 'Kompensation' im Schach?",
          nl: "Wat is 'compensatie' in schaken?"
        },
        options: [
          { en: "Advantages offsetting a disadvantage, like activity for material", es: "Ventajas que compensan una desventaja, como actividad por material", de: "Vorteile, die einen Nachteil ausgleichen, wie Aktivität für Material", nl: "Voordelen die een nadeel compenseren, zoals activiteit voor materiaal" },
          { en: "Equal material trade", es: "Intercambio de material igual", de: "Gleichwertiger Materialtausch", nl: "Gelijke materiaalruil" },
          { en: "Time on the clock", es: "Tiempo en el reloj", de: "Zeit auf der Uhr", nl: "Tijd op de klok" },
          { en: "Pawn promotion", es: "Promoción de peón", de: "Bauernumwandlung", nl: "Pionpromotie" }
        ],
        correct: 0,
        explanation: {
          en: "Compensation means having advantages that offset a disadvantage. For example, being down material but having better piece activity, initiative, or attacking chances. Strong players often sacrifice material for compensation.",
          es: "La compensación significa tener ventajas que compensan una desventaja. Por ejemplo, estar abajo en material pero tener mejor actividad de piezas, iniciativa o chances de ataque. Los jugadores fuertes a menudo sacrifican material por compensación.",
          de: "Kompensation bedeutet, Vorteile zu haben, die einen Nachteil ausgleichen. Zum Beispiel materiell im Nachteil zu sein, aber bessere Figurenaktivität, Initiative oder Angriffschancen zu haben. Starke Spieler opfern oft Material für Kompensation.",
          nl: "Compensatie betekent voordelen hebben die een nadeel compenseren. Bijvoorbeeld materieel achter zijn maar betere stukactiviteit, initiatief of aanvalskansen hebben. Sterke spelers offeren vaak materiaal voor compensatie."
        }
      },
      {
        question: {
          en: "What is the 'Benko Gambit'?",
          es: "¿Qué es el 'Gambito Benko'?",
          de: "Was ist das 'Benko-Gambit'?",
          nl: "Wat is het 'Benko Gambiet'?"
        },
        options: [
          { en: "1.d4 Nf6 2.c4 c5 3.d5 b5, sacrificing a pawn for queenside pressure", es: "1.d4 Cf6 2.c4 c5 3.d5 b5, sacrificando un peón por presión en el flanco de dama", de: "1.d4 Sf6 2.c4 c5 3.d5 b5, opfert einen Bauern für Damenflügel-Druck", nl: "1.d4 Pf6 2.c4 c5 3.d5 b5, een pion offerend voor damezijde druk" },
          { en: "A king's gambit variation", es: "Una variación del gambito de rey", de: "Eine Königsgambit-Variante", nl: "Een koningsgambiet variatie" },
          { en: "A tactical trap", es: "Una trampa táctica", de: "Eine taktische Falle", nl: "Een tactische val" },
          { en: "An endgame sacrifice", es: "Un sacrificio de final", de: "Ein Endspiel-Opfer", nl: "Een eindspel offer" }
        ],
        correct: 0,
        explanation: {
          en: "The Benko Gambit sacrifices the b5 pawn for long-term queenside pressure on the a- and b-files. Black gets excellent piece play and compensation. Named after Pal Benko, it's popular among aggressive positional players.",
          es: "El Gambito Benko sacrifica el peón b5 por presión a largo plazo en el flanco de dama en las columnas a y b. Las negras obtienen excelente juego de piezas y compensación. Nombrado en honor a Pal Benko, es popular entre jugadores posicionales agresivos.",
          de: "Das Benko-Gambit opfert den b5-Bauern für langfristigen Damenflügel-Druck auf der a- und b-Linie. Schwarz erhält ausgezeichnetes Figurenspiel und Kompensation. Benannt nach Pal Benko, ist es bei aggressiven Positionsspielern beliebt.",
          nl: "Het Benko Gambiet offert de b5 pion voor langdurige damezijde druk op de a- en b-lijnen. Zwart krijgt uitstekend stukspel en compensatie. Vernoemd naar Pal Benko, is het populair onder agressieve positionele spelers."
        }
      },
      {
        question: {
          en: "What is 'opposite-colored bishops' in endgames?",
          es: "¿Qué es 'alfiles de colores opuestos' en finales?",
          de: "Was sind 'ungleichfarbige Läufer' in Endspielen?",
          nl: "Wat zijn 'tegengestelde kleurlopers' in eindspelen?"
        },
        options: [
          { en: "Each side has a bishop on different colored squares, often leading to draws", es: "Cada lado tiene un alfil en casillas de diferente color, a menudo llevando a tablas", de: "Jede Seite hat einen Läufer auf andersfarbigen Feldern, führt oft zu Remis", nl: "Elke kant heeft een loper op anders gekleurde velden, vaak leidend tot remise" },
          { en: "Bishops attacking each other", es: "Alfiles atacándose mutuamente", de: "Läufer greifen sich gegenseitig an", nl: "Lopers die elkaar aanvallen" },
          { en: "Having two bishops vs one", es: "Tener dos alfiles contra uno", de: "Zwei Läufer gegen einen haben", nl: "Twee lopers tegen één hebben" },
          { en: "Bishops on opposite sides of the board", es: "Alfiles en lados opuestos del tablero", de: "Läufer auf gegenüberliegenden Seiten des Bretts", nl: "Lopers aan tegenovergestelde kanten van het bord" }
        ],
        correct: 0,
        explanation: {
          en: "Opposite-colored bishops occur when one player has a light-squared bishop and the other a dark-squared bishop. In endgames, this often leads to draws even with material advantage, as bishops can't attack each other's colored squares.",
          es: "Los alfiles de colores opuestos ocurren cuando un jugador tiene un alfil de casillas claras y el otro un alfil de casillas oscuras. En finales, esto a menudo lleva a tablas incluso con ventaja material, ya que los alfiles no pueden atacar las casillas del color del otro.",
          de: "Ungleichfarbige Läufer treten auf, wenn ein Spieler einen Weißfeld-Läufer und der andere einen Schwarzfeld-Läufer hat. In Endspielen führt dies oft zu Remis, selbst bei materiellem Vorteil, da Läufer nicht die Felder der anderen Farbe angreifen können.",
          nl: "Tegengestelde kleurlopers komen voor wanneer één speler een witvelderloper heeft en de ander een zwartvelderloper. In eindspelen leidt dit vaak tot remise, zelfs met materieel voordeel, omdat lopers elkaars gekleurde velden niet kunnen aanvallen."
        }
      },
      {
        question: {
          en: "What is the 'Dragon Variation' of the Sicilian Defense?",
          es: "¿Qué es la 'Variante del Dragón' de la Defensa Siciliana?",
          de: "Was ist die 'Drachen-Variante' der Sizilianischen Verteidigung?",
          nl: "Wat is de 'Dragon Variatie' van de Siciliaanse Verdediging?"
        },
        options: [
          { en: "5...g6, fianchettoing the bishop and creating sharp play", es: "5...g6, fianchetto del alfil y creando juego agudo", de: "5...g6, Fianchetto des Läufers und scharfes Spiel", nl: "5...g6, fianchetto van de loper en scherp spel creërend" },
          { en: "5...a6, the Najdorf", es: "5...a6, el Najdorf", de: "5...a6, das Najdorf", nl: "5...a6, de Najdorf" },
          { en: "5...e6, the Scheveningen", es: "5...e6, el Scheveningen", de: "5...e6, das Scheveningen", nl: "5...e6, de Scheveningen" },
          { en: "5...Nc6, the classical", es: "5...Cc6, la clásica", de: "5...Sc6, die klassische", nl: "5...Pc6, de klassieke" }
        ],
        correct: 0,
        explanation: {
          en: "The Dragon Variation (5...g6 followed by ...Bg7) creates a powerful fianchettoed bishop on g7. It often leads to opposite-side castling and sharp mutual attacks. The pawn structure resembles a dragon, hence the name.",
          es: "La Variante del Dragón (5...g6 seguido de ...Ag7) crea un poderoso alfil en fianchetto en g7. A menudo lleva a enroques en lados opuestos y ataques mutuos agudos. La estructura de peones se asemeja a un dragón, de ahí el nombre.",
          de: "Die Drachen-Variante (5...g6 gefolgt von ...Lg7) schafft einen mächtigen fiankettierten Läufer auf g7. Sie führt oft zu gegenüberliegenden Rochaden und scharfen gegenseitigen Angriffen. Die Bauernstruktur ähnelt einem Drachen, daher der Name.",
          nl: "De Dragon Variatie (5...g6 gevolgd door ...Lg7) creëert een krachtige gefianchetteerde loper op g7. Het leidt vaak tot tegenovergestelde rokades en scherpe wederzijdse aanvallen. De pionstructuur lijkt op een draak, vandaar de naam."
        }
      },
      {
        question: {
          en: "What is a 'pawn break'?",
          es: "¿Qué es una 'ruptura de peones'?",
          de: "Was ist ein 'Bauerndurchbruch'?",
          nl: "Wat is een 'piondoorbraak'?"
        },
        options: [
          { en: "Advancing a pawn to challenge opponent's pawn chain and open lines", es: "Avanzar un peón para desafiar la cadena de peones del oponente y abrir líneas", de: "Einen Bauern vorschieben um die gegnerische Bauernkette herauszufordern und Linien zu öffnen", nl: "Een pion vooruitschuiven om de pioncadeau van de tegenstander uit te dagen en lijnen te openen" },
          { en: "Promoting a pawn", es: "Promocionar un peón", de: "Einen Bauern umwandeln", nl: "Een pion promoveren" },
          { en: "Capturing with a pawn", es: "Capturar con un peón", de: "Mit einem Bauern schlagen", nl: "Slaan met een pion" },
          { en: "Sacrificing a pawn", es: "Sacrificar un peón", de: "Einen Bauern opfern", nl: "Een pion offeren" }
        ],
        correct: 0,
        explanation: {
          en: "A pawn break is a pawn advance that challenges the opponent's pawn structure, aiming to open lines, create weaknesses, or gain space. Examples: ...d5 break in the Sicilian, or e4-e5 break in many positions. Timing is crucial.",
          es: "Una ruptura de peones es un avance de peón que desafía la estructura de peones del oponente, con el objetivo de abrir líneas, crear debilidades o ganar espacio. Ejemplos: ruptura ...d5 en la Siciliana, o ruptura e4-e5 en muchas posiciones. El momento es crucial.",
          de: "Ein Bauerndurchbruch ist ein Bauernvorstoß, der die gegnerische Bauernstruktur herausfordert, mit dem Ziel, Linien zu öffnen, Schwächen zu schaffen oder Raum zu gewinnen. Beispiele: ...d5-Durchbruch in der Sizilianischen, oder e4-e5-Durchbruch in vielen Stellungen. Das Timing ist entscheidend.",
          nl: "Een piondoorbraak is een pionvooruitgang die de pionstructuur van de tegenstander uitdaagt, met als doel lijnen te openen, zwakheden te creëren of ruimte te winnen. Voorbeelden: ...d5 doorbraak in de Siciliaanse, of e4-e5 doorbraak in veel posities. Timing is cruciaal."
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
          { en: "1.e4 c6, preparing ...d5 without blocking the light-squared bishop", es: "1.e4 c6, preparando ...d5 sin bloquear el alfil de casillas claras", de: "1.e4 c6, bereitet ...d5 vor ohne den Weißfeld-Läufer zu blockieren", nl: "1.e4 c6, voorbereidend ...d5 zonder de witvelderloper te blokkeren" },
          { en: "1.e4 e5, the open game", es: "1.e4 e5, el juego abierto", de: "1.e4 e5, das offene Spiel", nl: "1.e4 e5, het open spel" },
          { en: "1.e4 c5, the Sicilian", es: "1.e4 c5, la Siciliana", de: "1.e4 c5, die Sizilianische", nl: "1.e4 c5, de Siciliaanse" },
          { en: "1.e4 e6, the French", es: "1.e4 e6, la Francesa", de: "1.e4 e6, die Französische", nl: "1.e4 e6, de Franse" }
        ],
        correct: 0,
        explanation: {
          en: "The Caro-Kann (1.e4 c6 2.d4 d5) is a solid defense that doesn't trap the light-squared bishop like the French Defense does. It's known for leading to safe, slightly passive but very sound positions. Popular at all levels.",
          es: "La Caro-Kann (1.e4 c6 2.d4 d5) es una defensa sólida que no atrapa al alfil de casillas claras como lo hace la Defensa Francesa. Es conocida por llevar a posiciones seguras, ligeramente pasivas pero muy sólidas. Popular en todos los niveles.",
          de: "Die Caro-Kann (1.e4 c6 2.d4 d5) ist eine solide Verteidigung, die den Weißfeld-Läufer nicht einsperrt wie die Französische Verteidigung. Sie ist bekannt dafür, zu sicheren, etwas passiven aber sehr gesunden Stellungen zu führen. Auf allen Ebenen beliebt.",
          nl: "De Caro-Kann (1.e4 c6 2.d4 d5) is een solide verdediging die de witvelderloper niet vasthoudt zoals de Franse Verdediging doet. Het staat bekend om het leiden naar veilige, licht passieve maar zeer gezonde posities. Populair op alle niveaus."
        }
      },
      {
        question: {
          en: "What is 'space advantage' in chess?",
          es: "¿Qué es la 'ventaja de espacio' en ajedrez?",
          de: "Was ist 'Raumvorteil' im Schach?",
          nl: "Wat is 'ruimtevoordeel' in schaken?"
        },
        options: [
          { en: "Controlling more of the board, giving pieces greater mobility", es: "Controlar más del tablero, dando a las piezas mayor movilidad", de: "Mehr vom Brett kontrollieren, was den Figuren größere Mobilität gibt", nl: "Meer van het bord controleren, wat stukken grotere mobiliteit geeft" },
          { en: "Having more pieces on the board", es: "Tener más piezas en el tablero", de: "Mehr Figuren auf dem Brett haben", nl: "Meer stukken op het bord hebben" },
          { en: "Controlling the center only", es: "Controlar solo el centro", de: "Nur das Zentrum kontrollieren", nl: "Alleen het centrum controleren" },
          { en: "Having advanced pawns", es: "Tener peones avanzados", de: "Fortgeschrittene Bauern haben", nl: "Vergevorderde pionnen hebben" }
        ],
        correct: 0,
        explanation: {
          en: "Space advantage means controlling more squares on the board, usually indicated by advanced pawns. It gives your pieces more room to maneuver while restricting opponent's pieces. However, too much space can become difficult to defend.",
          es: "La ventaja de espacio significa controlar más casillas en el tablero, usualmente indicado por peones avanzados. Da a tus piezas más espacio para maniobrar mientras restringe las piezas del oponente. Sin embargo, demasiado espacio puede volverse difícil de defender.",
          de: "Raumvorteil bedeutet, mehr Felder auf dem Brett zu kontrollieren, normalerweise durch vorgerückte Bauern angezeigt. Es gibt Ihren Figuren mehr Raum zum Manövrieren, während es gegnerische Figuren einschränkt. Zu viel Raum kann jedoch schwer zu verteidigen sein.",
          nl: "Ruimtevoordeel betekent meer velden op het bord controleren, meestal aangegeven door vergevorderde pionnen. Het geeft je stukken meer ruimte om te manoeuvreren terwijl het de stukken van de tegenstander beperkt. Te veel ruimte kan echter moeilijk te verdedigen worden."
        }
      },
      {
        question: {
          en: "What is the 'Slav Defense'?",
          es: "¿Qué es la 'Defensa Eslava'?",
          de: "Was ist die 'Slawische Verteidigung'?",
          nl: "Wat is de 'Slavische Verdediging'?"
        },
        options: [
          { en: "1.d4 d5 2.c4 c6, supporting d5 while keeping bishop options open", es: "1.d4 d5 2.c4 c6, apoyando d5 mientras mantiene abiertas las opciones del alfil", de: "1.d4 d5 2.c4 c6, unterstützt d5 während Läufer-Optionen offen bleiben", nl: "1.d4 d5 2.c4 c6, ondersteunend d5 terwijl loperopties open blijven" },
          { en: "A variation of the Sicilian", es: "Una variación de la Siciliana", de: "Eine Variante der Sizilianischen", nl: "Een variatie van de Siciliaanse" },
          { en: "An aggressive gambit", es: "Un gambito agresivo", de: "Ein aggressives Gambit", nl: "Een agressief gambiet" },
          { en: "A king's pawn opening", es: "Una apertura de peón de rey", de: "Eine Königsbauern-Eröffnung", nl: "Een koningspion opening" }
        ],
        correct: 0,
        explanation: {
          en: "The Slav Defense (1.d4 d5 2.c4 c6) is a solid Queen's Gambit defense that supports the d5 pawn with ...c6 instead of ...e6. This avoids blocking the light-squared bishop. Popular at all levels including world championship matches.",
          es: "La Defensa Eslava (1.d4 d5 2.c4 c6) es una sólida defensa del Gambito de Dama que apoya el peón d5 con ...c6 en lugar de ...e6. Esto evita bloquear el alfil de casillas claras. Popular en todos los niveles incluyendo partidas del campeonato mundial.",
          de: "Die Slawische Verteidigung (1.d4 d5 2.c4 c6) ist eine solide Damengambit-Verteidigung, die den d5-Bauern mit ...c6 statt ...e6 unterstützt. Dies vermeidet das Blockieren des Weißfeld-Läufers. Auf allen Ebenen einschließlich Weltmeisterschaftspartien beliebt.",
          nl: "De Slavische Verdediging (1.d4 d5 2.c4 c6) is een solide Damegambiet verdediging die de d5 pion ondersteunt met ...c6 in plaats van ...e6. Dit vermijdt het blokkeren van de witvelderloper. Populair op alle niveaus inclusief wereldkampioenschapswedstrijden."
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
