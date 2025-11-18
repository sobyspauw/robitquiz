// Quiz Template - Level 6: Bord spelletjes - Schaken
(function() {
  const level6 = {
    name: {
      en: "Chess",
      es: "Ajedrez",
      de: "Schach",
      nl: "Schaken"
    },
    questions: [
      {
        question: {
          en: "What is a 'discovered check'?",
          es: "¿Qué es un 'jaque al descubierto'?",
          de: "Was ist ein 'Abzugsschach'?",
          nl: "Wat is een 'ontdekt schaak'?"
        },
        options: [
          { en: "Moving a piece reveals check from another piece behind it", es: "Mover una pieza revela jaque de otra pieza detrás", de: "Das Bewegen einer Figur enthüllt Schach von einer anderen Figur dahinter", nl: "Het bewegen van een stuk onthult schaak van een ander stuk erachter" },
          { en: "Finding the king is in check", es: "Descubrir que el rey está en jaque", de: "Entdecken, dass der König im Schach steht", nl: "Ontdekken dat de koning schaak staat" },
          { en: "Checking from a hidden position", es: "Dar jaque desde una posición oculta", de: "Schach aus versteckter Position bieten", nl: "Schaak geven vanuit verborgen positie" },
          { en: "A surprise checkmate", es: "Un jaque mate sorpresa", de: "Ein Überraschungs-Schachmatt", nl: "Een verrassend schaakmat" }
        ],
        correct: 0,
        explanation: {
          en: "A discovered check is a powerful tactic where moving one piece uncovers a check from another piece. The moving piece can capture material or create threats while the opponent must respond to the check.",
          es: "Un jaque al descubierto es una táctica poderosa donde mover una pieza descubre un jaque de otra pieza. La pieza que se mueve puede capturar material o crear amenazas mientras el oponente debe responder al jaque.",
          de: "Ein Abzugsschach ist eine mächtige Taktik, bei der das Bewegen einer Figur ein Schach von einer anderen Figur aufdeckt. Die sich bewegende Figur kann Material schlagen oder Drohungen schaffen, während der Gegner auf das Schach reagieren muss.",
          nl: "Een ontdekt schaak is een krachtige tactiek waarbij het bewegen van een stuk een schaak van een ander stuk onthult. Het bewegende stuk kan materiaal veroveren of bedreigingen creëren terwijl de tegenstander moet reageren op het schaak."
        }
      },
      {
        question: {
          en: "What is a 'double attack'?",
          es: "¿Qué es un 'ataque doble'?",
          de: "Was ist ein 'Doppelangriff'?",
          nl: "Wat is een 'dubbele aanval'?"
        },
        options: [
          { en: "Attacking two pieces or squares simultaneously with one move", es: "Atacar dos piezas o casillas simultáneamente con un movimiento", de: "Zwei Figuren oder Felder gleichzeitig mit einem Zug angreifen", nl: "Twee stukken of velden tegelijk aanvallen met één zet" },
          { en: "Attacking with two pieces", es: "Atacar con dos piezas", de: "Mit zwei Figuren angreifen", nl: "Aanvallen met twee stukken" },
          { en: "Attacking twice in a row", es: "Atacar dos veces seguidas", de: "Zweimal hintereinander angreifen", nl: "Twee keer achter elkaar aanvallen" },
          { en: "Double-checking the king", es: "Dar doble jaque al rey", de: "Doppelschach dem König bieten", nl: "De koning dubbel schaak geven" }
        ],
        correct: 0,
        explanation: {
          en: "A double attack is a tactic where one piece simultaneously attacks two or more enemy pieces or important squares. The opponent can usually only defend against one threat, allowing you to win material or gain an advantage.",
          es: "Un ataque doble es una táctica donde una pieza ataca simultáneamente dos o más piezas enemigas o casillas importantes. El oponente usualmente solo puede defenderse contra una amenaza, permitiéndote ganar material o obtener ventaja.",
          de: "Ein Doppelangriff ist eine Taktik, bei der eine Figur gleichzeitig zwei oder mehr gegnerische Figuren oder wichtige Felder angreift. Der Gegner kann sich normalerweise nur gegen eine Bedrohung verteidigen, was es Ihnen ermöglicht, Material zu gewinnen oder einen Vorteil zu erlangen.",
          nl: "Een dubbele aanval is een tactiek waarbij één stuk tegelijk twee of meer vijandelijke stukken of belangrijke velden aanvalt. De tegenstander kan meestal maar tegen één bedreiging verdedigen, waardoor je materiaal kunt winnen of een voordeel kunt behalen."
        }
      },
      {
        question: {
          en: "What is the 'two bishops' advantage?",
          es: "¿Qué es la ventaja de los 'dos alfiles'?",
          de: "Was ist der 'Zwei-Läufer'-Vorteil?",
          nl: "Wat is het 'twee lopers' voordeel?"
        },
        options: [
          { en: "Having both bishops while opponent has bishop and knight or two knights", es: "Tener ambos alfiles mientras el oponente tiene alfil y caballo o dos caballos", de: "Beide Läufer haben, während der Gegner Läufer und Springer oder zwei Springer hat", nl: "Beide lopers hebben terwijl de tegenstander loper en paard of twee paarden heeft" },
          { en: "Having two bishops on the same color", es: "Tener dos alfiles del mismo color", de: "Zwei Läufer auf derselben Farbe haben", nl: "Twee lopers op dezelfde kleur hebben" },
          { en: "Developing both bishops early", es: "Desarrollar ambos alfiles temprano", de: "Beide Läufer früh entwickeln", nl: "Beide lopers vroeg ontwikkelen" },
          { en: "Bishops being worth two pawns", es: "Los alfiles valen dos peones", de: "Läufer sind zwei Bauern wert", nl: "Lopers zijn twee pionnen waard" }
        ],
        correct: 0,
        explanation: {
          en: "The bishop pair (having both your bishops while your opponent lacks them) is generally considered a small but real advantage, especially in open positions. The two bishops complement each other, controlling both light and dark squares with long-range power.",
          es: "El par de alfiles (tener ambos alfiles mientras tu oponente no los tiene) se considera generalmente una ventaja pequeña pero real, especialmente en posiciones abiertas. Los dos alfiles se complementan, controlando casillas claras y oscuras con poder de largo alcance.",
          de: "Das Läuferpaar (beide Läufer zu haben, während der Gegner sie nicht hat) wird allgemein als kleiner, aber realer Vorteil betrachtet, besonders in offenen Stellungen. Die zwei Läufer ergänzen sich und kontrollieren sowohl helle als auch dunkle Felder mit Fernwirkung.",
          nl: "Het loperpaar (beide lopers hebben terwijl je tegenstander ze niet heeft) wordt over het algemeen beschouwd als een klein maar reëel voordeel, vooral in open posities. De twee lopers vullen elkaar aan en controleren zowel lichte als donkere velden met lange-afstandskracht."
        }
      },
      {
        question: {
          en: "What is a 'tactical shot'?",
          es: "¿Qué es un 'golpe táctico'?",
          de: "Was ist ein 'taktischer Schlag'?",
          nl: "Wat is een 'tactische slag'?"
        },
        options: [
          { en: "A surprising move that wins material or achieves an advantage through tactics", es: "Un movimiento sorprendente que gana material o logra ventaja mediante tácticas", de: "Ein überraschender Zug, der durch Taktiken Material gewinnt oder einen Vorteil erzielt", nl: "Een verrassende zet die materiaal wint of een voordeel behaalt door tactieken" },
          { en: "A long-range piece move", es: "Un movimiento de pieza de largo alcance", de: "Ein Fernzug einer Figur", nl: "Een lange-afstandszet van een stuk" },
          { en: "Capturing a piece", es: "Capturar una pieza", de: "Eine Figur schlagen", nl: "Een stuk slaan" },
          { en: "Any aggressive move", es: "Cualquier movimiento agresivo", de: "Jeder aggressive Zug", nl: "Elke agressieve zet" }
        ],
        correct: 0,
        explanation: {
          en: "A tactical shot is a surprising or brilliant move that uses tactical motifs (like forks, pins, or combinations) to gain a decisive advantage, win material, or deliver checkmate. These moves often require precise calculation.",
          es: "Un golpe táctico es un movimiento sorprendente o brillante que usa motivos tácticos (como horquillas, clavadas o combinaciones) para ganar una ventaja decisiva, ganar material o dar jaque mate. Estos movimientos a menudo requieren cálculo preciso.",
          de: "Ein taktischer Schlag ist ein überraschender oder brillanter Zug, der taktische Motive (wie Gabeln, Fesselungen oder Kombinationen) nutzt, um einen entscheidenden Vorteil zu erlangen, Material zu gewinnen oder Matt zu setzen. Diese Züge erfordern oft präzise Berechnung.",
          nl: "Een tactische slag is een verrassende of briljante zet die tactische motieven (zoals vorken, pins of combinaties) gebruikt om een beslissend voordeel te behalen, materiaal te winnen of schaakmat te geven. Deze zetten vereisen vaak nauwkeurige berekening."
        }
      },
      {
        question: {
          en: "What is a 'removing the defender' tactic?",
          es: "¿Qué es la táctica de 'eliminar el defensor'?",
          de: "Was ist die 'Verteidiger-entfernen'-Taktik?",
          nl: "Wat is de 'verdediger verwijderen' tactiek?"
        },
        options: [
          { en: "Capturing or deflecting a piece that defends something important", es: "Capturar o desviar una pieza que defiende algo importante", de: "Eine Figur schlagen oder ablenken, die etwas Wichtiges verteidigt", nl: "Een stuk slaan of afleiden dat iets belangrijks verdedigt" },
          { en: "Moving defenders away from the king", es: "Alejar defensores del rey", de: "Verteidiger vom König wegbewegen", nl: "Verdedigers van de koning wegbewegen" },
          { en: "Attacking the defending player", es: "Atacar al jugador defensor", de: "Den verteidigenden Spieler angreifen", nl: "De verdedigende speler aanvallen" },
          { en: "Removing pieces from the board", es: "Quitar piezas del tablero", de: "Figuren vom Brett entfernen", nl: "Stukken van het bord verwijderen" }
        ],
        correct: 0,
        explanation: {
          en: "Removing the defender is a tactic where you capture, chase away, or deflect a piece that is defending an important square, piece, or tactical idea. Once the defender is gone, you can execute your plan to win material or deliver mate.",
          es: "Eliminar el defensor es una táctica donde capturas, ahuyentas o desvías una pieza que está defendiendo una casilla importante, pieza o idea táctica. Una vez que el defensor se va, puedes ejecutar tu plan para ganar material o dar mate.",
          de: "Verteidiger entfernen ist eine Taktik, bei der Sie eine Figur schlagen, verjagen oder ablenken, die ein wichtiges Feld, eine Figur oder eine taktische Idee verteidigt. Sobald der Verteidiger weg ist, können Sie Ihren Plan ausführen, um Material zu gewinnen oder Matt zu setzen.",
          nl: "Verdediger verwijderen is een tactiek waarbij je een stuk slaat, wegjaagt of afleidt dat een belangrijk veld, stuk of tactisch idee verdedigt. Zodra de verdediger weg is, kun je je plan uitvoeren om materiaal te winnen of mat te geven."
        }
      },
      {
        question: {
          en: "What is the Sicilian Defense characterized by?",
          es: "¿Por qué se caracteriza la Defensa Siciliana?",
          de: "Was kennzeichnet die Sizilianische Verteidigung?",
          nl: "Waar wordt de Siciliaanse Verdediging door gekenmerkt?"
        },
        options: [
          { en: "1...c5 in response to 1.e4", es: "1...c5 en respuesta a 1.e4", de: "1...c5 als Antwort auf 1.e4", nl: "1...c5 als antwoord op 1.e4" },
          { en: "1...e5 in response to 1.e4", es: "1...e5 en respuesta a 1.e4", de: "1...e5 als Antwort auf 1.e4", nl: "1...e5 als antwoord op 1.e4" },
          { en: "1...d5 in response to 1.d4", es: "1...d5 en respuesta a 1.d4", de: "1...d5 als Antwort auf 1.d4", nl: "1...d5 als antwoord op 1.d4" },
          { en: "1...Nf6 in response to 1.d4", es: "1...Cf6 en respuesta a 1.d4", de: "1...Sf6 als Antwort auf 1.d4", nl: "1...Pf6 als antwoord op 1.d4" }
        ],
        correct: 0,
        explanation: {
          en: "The Sicilian Defense is characterized by 1...c5 in response to White's 1.e4, leading to asymmetrical positions and sharp play.",
          es: "La Defensa Siciliana se caracteriza por 1...c5 en respuesta a 1.e4 de las blancas, lo que conduce a posiciones asimétricas y juego agudo.",
          de: "Die Sizilianische Verteidigung ist gekennzeichnet durch 1...c5 als Antwort auf Weiß' 1.e4, was zu asymmetrischen Stellungen und scharfem Spiel führt.",
          nl: "De Siciliaanse Verdediging wordt gekenmerkt door 1...c5 als antwoord op wit's 1.e4, wat leidt tot asymmetrische posities en scherp spel."
        }
      },
      {
        question: {
          en: "What is a fianchetto in chess?",
          es: "¿Qué es un fianchetto en ajedrez?",
          de: "Was ist ein Fianchetto im Schach?",
          nl: "Wat is een fianchetto in schaken?"
        },
        options: [
          { en: "Developing a bishop to b2, g2, b7, or g7", es: "Desarrollar un alfil a b2, g2, b7 o g7", de: "Einen Läufer nach b2, g2, b7 oder g7 entwickeln", nl: "Een loper naar b2, g2, b7 of g7 ontwikkelen" },
          { en: "Castling queenside", es: "Enrocar largo", de: "Lange Rochade", nl: "Lang rokeren" },
          { en: "Moving a knight to the rim", es: "Mover un caballo al borde", de: "Einen Springer an den Rand ziehen", nl: "Een paard naar de rand verplaatsen" },
          { en: "Advancing pawns to the fifth rank", es: "Avanzar peones a la quinta fila", de: "Bauern zur fünften Reihe vorschieben", nl: "Pionnen naar de vijfde rij opschuiven" }
        ],
        correct: 0,
        explanation: {
          en: "A fianchetto is a chess development where a bishop is positioned on the long diagonal after moving the knight pawn one square (e.g., g3 followed by Bg2).",
          es: "Un fianchetto es un desarrollo en ajedrez donde un alfil se posiciona en la diagonal larga después de mover el peón de caballo una casilla (por ejemplo, g3 seguido de Ag2).",
          de: "Ein Fianchetto ist eine Schachentwicklung, bei der ein Läufer auf der langen Diagonale positioniert wird, nachdem der Springerbauer ein Feld gezogen wurde (z.B. g3 gefolgt von Lg2).",
          nl: "Een fianchetto is een schaakopstelling waarbij een loper op de lange diagonaal wordt geplaatst na het verplaatsen van de paardpion één veld (bijv. g3 gevolgd door Lg2)."
        }
      },
      {
        question: {
          en: "What is the 'Fried Liver Attack'?",
          es: "¿Qué es el 'Ataque del Hígado Frito'?",
          de: "Was ist der 'Fegatello-Angriff'?",
          nl: "Wat is de 'Gebakken Lever Aanval'?"
        },
        options: [
          { en: "A sharp attacking line in the Italian Game with Ng5 and Nxf7", es: "Una línea de ataque agudo en el Giuoco Italiano con Cg5 y Cxf7", de: "Eine scharfe Angriffslinie in der Italienischen Partie mit Sg5 und Sxf7", nl: "Een scherpe aanvalslijn in het Italiaans Spel met Pg5 en Pxf7" },
          { en: "A pawn sacrifice in the King's Gambit", es: "Un sacrificio de peón en el Gambito de Rey", de: "Ein Bauernopfer im Königsgambit", nl: "Een pionoffer in het Koningsgambiet" },
          { en: "A defensive setup against the Queen's Gambit", es: "Una configuración defensiva contra el Gambito de Dama", de: "Eine defensive Aufstellung gegen das Damengambit", nl: "Een defensieve opstelling tegen het Damegambiet" },
          { en: "An endgame technique", es: "Una técnica de final", de: "Eine Endspiel-Technik", nl: "Een eindspeltechniek" }
        ],
        correct: 0,
        explanation: {
          en: "The Fried Liver Attack is an aggressive line in the Two Knights Defense of the Italian Game, featuring Ng5 attacking f7, followed by Nxf7 sacrificing the knight.",
          es: "El Ataque del Hígado Frito es una línea agresiva en la Defensa de los Dos Caballos del Giuoco Italiano, con Cg5 atacando f7, seguido de Cxf7 sacrificando el caballo.",
          de: "Der Fegatello-Angriff ist eine aggressive Linie in der Zweispringerspiel-Verteidigung der Italienischen Partie, mit Sg5, das f7 angreift, gefolgt von Sxf7 als Springeropfer.",
          nl: "De Gebakken Lever Aanval is een agressieve lijn in de Twee Paarden Verdediging van het Italiaans Spel, met Pg5 dat f7 aanvalt, gevolgd door Pxf7 waarbij het paard wordt geofferd."
        }
      },
      {
        question: {
          en: "What is zugzwang?",
          es: "¿Qué es zugzwang?",
          de: "Was ist Zugzwang?",
          nl: "Wat is zugzwang?"
        },
        options: [
          { en: "A position where any move worsens your position", es: "Una posición donde cualquier movimiento empeora tu posición", de: "Eine Stellung, in der jeder Zug die eigene Position verschlechtert", nl: "Een positie waarin elke zet je positie verslechtert" },
          { en: "A forced checkmate sequence", es: "Una secuencia de jaque mate forzado", de: "Eine erzwungene Mattsequenz", nl: "Een geforceerde schaakmatsequentie" },
          { en: "A draw by repetition", es: "Un empate por repetición", de: "Ein Remis durch Stellungswiederholung", nl: "Een remise door herhaling" },
          { en: "An opening trap", es: "Una trampa de apertura", de: "Eine Eröffnungsfalle", nl: "Een openingsval" }
        ],
        correct: 0,
        explanation: {
          en: "Zugzwang is a situation where a player would prefer not to move at all because any legal move worsens their position. It's especially common in endgames.",
          es: "Zugzwang es una situación donde un jugador preferiría no moverse en absoluto porque cualquier movimiento legal empeora su posición. Es especialmente común en finales.",
          de: "Zugzwang ist eine Situation, in der ein Spieler lieber gar nicht ziehen würde, weil jeder legale Zug seine Position verschlechtert. Es kommt besonders häufig im Endspiel vor.",
          nl: "Zugzwang is een situatie waarin een speler liever helemaal niet zou bewegen omdat elke legale zet zijn positie verslechtert. Het komt vooral voor in eindspelen."
        }
      },
      {
        question: {
          en: "What is the Lucena position?",
          es: "¿Qué es la posición de Lucena?",
          de: "Was ist die Lucena-Stellung?",
          nl: "Wat is de Lucena-positie?"
        },
        options: [
          { en: "A winning rook and pawn endgame technique", es: "Una técnica ganadora de final de torre y peón", de: "Eine gewinnende Turm-Bauern-Endspiel-Technik", nl: "Een winnende toren-en-pion-eindspeltechniek" },
          { en: "An opening trap", es: "Una trampa de apertura", de: "Eine Eröffnungsfalle", nl: "Een openingsval" },
          { en: "A type of fork", es: "Un tipo de horquilla", de: "Eine Art Gabel", nl: "Een soort vork" },
          { en: "A checkmate pattern", es: "Un patrón de jaque mate", de: "Ein Mattmuster", nl: "Een schaakmatpatroon" }
        ],
        correct: 0,
        explanation: {
          en: "The Lucena position is one of the most important techniques in rook and pawn endgames, allowing the stronger side to win by building a bridge with the rook.",
          es: "La posición de Lucena es una de las técnicas más importantes en finales de torre y peón, que permite al bando más fuerte ganar construyendo un puente con la torre.",
          de: "Die Lucena-Stellung ist eine der wichtigsten Techniken in Turm-Bauern-Endspielen, die es der stärkeren Seite ermöglicht zu gewinnen, indem sie eine Brücke mit dem Turm baut.",
          nl: "De Lucena-positie is een van de belangrijkste technieken in toren-en-pion-eindspelen, waardoor de sterkere partij kan winnen door een brug te bouwen met de toren."
        }
      },
      {
        question: {
          en: "What is an isolated pawn?",
          es: "¿Qué es un peón aislado?",
          de: "Was ist ein isolierter Bauer?",
          nl: "Wat is een geïsoleerde pion?"
        },
        options: [
          { en: "A pawn with no friendly pawns on adjacent files", es: "Un peón sin peones amigos en columnas adyacentes", de: "Ein Bauer ohne befreundete Bauern auf benachbarten Linien", nl: "Een pion zonder vriendelijke pionnen op aangrenzende rijen" },
          { en: "A pawn on the seventh rank", es: "Un peón en la séptima fila", de: "Ein Bauer auf der siebten Reihe", nl: "Een pion op de zevende rij" },
          { en: "A pawn that cannot move", es: "Un peón que no puede moverse", de: "Ein Bauer, der sich nicht bewegen kann", nl: "Een pion die niet kan bewegen" },
          { en: "A pawn protected by a knight", es: "Un peón protegido por un caballo", de: "Ein vom Springer geschützter Bauer", nl: "Een pion beschermd door een paard" }
        ],
        correct: 0,
        explanation: {
          en: "An isolated pawn has no friendly pawns on adjacent files, making it both a potential weakness (hard to defend) and a strength (controls central squares).",
          es: "Un peón aislado no tiene peones amigos en columnas adyacentes, lo que lo convierte tanto en una debilidad potencial (difícil de defender) como en una fortaleza (controla casillas centrales).",
          de: "Ein isolierter Bauer hat keine befreundeten Bauern auf benachbarten Linien, was ihn sowohl zu einer potenziellen Schwäche (schwer zu verteidigen) als auch zu einer Stärke (kontrolliert zentrale Felder) macht.",
          nl: "Een geïsoleerde pion heeft geen vriendelijke pionnen op aangrenzende rijen, waardoor het zowel een potentiële zwakte is (moeilijk te verdedigen) als een sterkte (controleert centrale velden)."
        }
      },
      {
        question: {
          en: "What is the 'minority attack'?",
          es: "¿Qué es el 'ataque minoritario'?",
          de: "Was ist der 'Minoritätsangriff'?",
          nl: "Wat is de 'minderheidsaanval'?"
        },
        options: [
          { en: "Advancing fewer pawns to create weaknesses in opponent's pawn structure", es: "Avanzar menos peones para crear debilidades en la estructura de peones del oponente", de: "Vorrücken weniger Bauern, um Schwächen in der gegnerischen Bauernstruktur zu schaffen", nl: "Minder pionnen opschuiven om zwaktes te creëren in de pionnenstructuur van de tegenstander" },
          { en: "Attacking with minor pieces only", es: "Atacar solo con piezas menores", de: "Nur mit Leichtfiguren angreifen", nl: "Alleen aanvallen met lichte stukken" },
          { en: "Sacrificing material for attack", es: "Sacrificar material para atacar", de: "Material für Angriff opfern", nl: "Materiaal offeren voor een aanval" },
          { en: "Defending with fewer pieces", es: "Defender con menos piezas", de: "Mit weniger Figuren verteidigen", nl: "Verdedigen met minder stukken" }
        ],
        correct: 0,
        explanation: {
          en: "The minority attack involves advancing a smaller number of pawns against a larger number of opponent's pawns to create structural weaknesses, commonly seen in the Queen's Gambit Declined.",
          es: "El ataque minoritario implica avanzar un número menor de peones contra un número mayor de peones del oponente para crear debilidades estructurales, comúnmente visto en el Gambito de Dama Rehusado.",
          de: "Der Minoritätsangriff beinhaltet das Vorrücken einer kleineren Anzahl von Bauern gegen eine größere Anzahl gegnerischer Bauern, um strukturelle Schwächen zu schaffen, häufig im abgelehnten Damengambit zu sehen.",
          nl: "De minderheidsaanval houdt in dat een kleiner aantal pionnen wordt opgeschoven tegen een groter aantal pionnen van de tegenstander om structurele zwaktes te creëren, vaak gezien in het Geweigerd Damegambiet."
        }
      },
      {
        question: {
          en: "What is a passed pawn?",
          es: "¿Qué es un peón pasado?",
          de: "Was ist ein Freibauer?",
          nl: "Wat is een vrijpion?"
        },
        options: [
          { en: "A pawn with no enemy pawns blocking or attacking it on its file or adjacent files", es: "Un peón sin peones enemigos bloqueándolo o atacándolo en su columna o columnas adyacentes", de: "Ein Bauer ohne gegnerische Bauern, die ihn auf seiner oder benachbarten Linien blockieren oder angreifen", nl: "Een pion zonder vijandelijke pionnen die hem blokkeren of aanvallen op zijn rij of aangrenzende rijen" },
          { en: "A pawn that has moved past the center", es: "Un peón que ha pasado el centro", de: "Ein Bauer, der das Zentrum überschritten hat", nl: "Een pion die voorbij het centrum is verplaatst" },
          { en: "A pawn on the sixth rank", es: "Un peón en la sexta fila", de: "Ein Bauer auf der sechsten Reihe", nl: "Een pion op de zesde rij" },
          { en: "A pawn that has captured", es: "Un peón que ha capturado", de: "Ein Bauer, der geschlagen hat", nl: "Een pion die heeft geslagen" }
        ],
        correct: 0,
        explanation: {
          en: "A passed pawn has no opposing pawns that can stop it from advancing to promotion. It's a significant advantage, especially in endgames.",
          es: "Un peón pasado no tiene peones opuestos que puedan detenerlo de avanzar hacia la promoción. Es una ventaja significativa, especialmente en finales.",
          de: "Ein Freibauer hat keine gegnerischen Bauern, die ihn am Vorrücken zur Umwandlung hindern können. Es ist ein bedeutender Vorteil, besonders im Endspiel.",
          nl: "Een vrijpion heeft geen tegengestelde pionnen die hem kunnen tegenhouden om door te lopen naar promotie. Het is een significant voordeel, vooral in eindspelen."
        }
      },
      {
        question: {
          en: "What is the Philidor position in rook endgames?",
          es: "¿Qué es la posición de Philidor en finales de torre?",
          de: "Was ist die Philidor-Stellung in Turmendspielen?",
          nl: "Wat is de Philidor-positie in toreneindspelen?"
        },
        options: [
          { en: "A defensive drawing technique with the rook on the third rank", es: "Una técnica defensiva de empate con la torre en la tercera fila", de: "Eine defensive Remistechnik mit dem Turm auf der dritten Reihe", nl: "Een defensieve remisetechniek met de toren op de derde rij" },
          { en: "An attacking formation", es: "Una formación de ataque", de: "Eine Angriffsformation", nl: "Een aanvalsformatie" },
          { en: "A checkmate pattern", es: "Un patrón de jaque mate", de: "Ein Mattmuster", nl: "Een schaakmatpatroon" },
          { en: "A pawn breakthrough", es: "Una ruptura de peones", de: "Ein Bauerndurchbruch", nl: "Een piondoorbraak" }
        ],
        correct: 0,
        explanation: {
          en: "The Philidor position is a fundamental defensive technique in rook and pawn endgames where the defending side places their rook on the third rank to prevent the opponent's king from advancing.",
          es: "La posición de Philidor es una técnica defensiva fundamental en finales de torre y peón donde el bando defensor coloca su torre en la tercera fila para evitar que el rey del oponente avance.",
          de: "Die Philidor-Stellung ist eine grundlegende defensive Technik in Turm-Bauern-Endspielen, bei der die verteidigende Seite ihren Turm auf der dritten Reihe platziert, um das Vorrücken des gegnerischen Königs zu verhindern.",
          nl: "De Philidor-positie is een fundamentele defensieve techniek in toren-en-pion-eindspelen waarbij de verdedigende partij hun toren op de derde rij plaatst om te voorkomen dat de koning van de tegenstander oprukt."
        }
      },
      {
        question: {
          en: "What is a backward pawn?",
          es: "¿Qué es un peón retrasado?",
          de: "Was ist ein zurückgebliebener Bauer?",
          nl: "Wat is een achtergebleven pion?"
        },
        options: [
          { en: "A pawn that cannot advance safely due to lack of pawn support", es: "Un peón que no puede avanzar con seguridad debido a la falta de apoyo de peones", de: "Ein Bauer, der aufgrund fehlender Bauernunterstützung nicht sicher vorrücken kann", nl: "Een pion die niet veilig kan opschuiven door gebrek aan pionsteun" },
          { en: "A pawn on the first rank", es: "Un peón en la primera fila", de: "Ein Bauer auf der ersten Reihe", nl: "Een pion op de eerste rij" },
          { en: "A pawn moving backwards", es: "Un peón moviéndose hacia atrás", de: "Ein Bauer, der rückwärts zieht", nl: "Een pion die achteruit beweegt" },
          { en: "A pawn blocked by a piece", es: "Un peón bloqueado por una pieza", de: "Ein von einer Figur blockierter Bauer", nl: "Een pion geblokkeerd door een stuk" }
        ],
        correct: 0,
        explanation: {
          en: "A backward pawn is behind the pawns of the same color on adjacent files and cannot advance safely because it would be vulnerable to capture. It's typically considered a weakness.",
          es: "Un peón retrasado está detrás de los peones del mismo color en columnas adyacentes y no puede avanzar con seguridad porque sería vulnerable a la captura. Típicamente se considera una debilidad.",
          de: "Ein zurückgebliebener Bauer steht hinter den Bauern der gleichen Farbe auf benachbarten Linien und kann nicht sicher vorrücken, da er anfällig für Schlagzüge wäre. Er wird typischerweise als Schwäche betrachtet.",
          nl: "Een achtergebleven pion staat achter de pionnen van dezelfde kleur op aangrenzende rijen en kan niet veilig opschuiven omdat het kwetsbaar zou zijn voor verovering. Het wordt doorgaans beschouwd als een zwakte."
        }
      },
      {
        question: {
          en: "What is the King's Indian Defense known for?",
          es: "¿Por qué es conocida la Defensa India de Rey?",
          de: "Wofür ist die Königsindische Verteidigung bekannt?",
          nl: "Waarvoor staat de Konings-Indische Verdediging bekend?"
        },
        options: [
          { en: "Hypermodern strategy with fianchettoed kingside bishop", es: "Estrategia hipermoderna con alfil de rey en fianchetto", de: "Hypermoderne Strategie mit fianchettiertem Königsläufer", nl: "Hypermoderne strategie met gefianchetteerde koningsloper" },
          { en: "Aggressive pawn storms", es: "Avalanchas de peones agresivas", de: "Aggressive Bauernangriffe", nl: "Aggressieve pionstormen" },
          { en: "Quick development of queenside pieces", es: "Desarrollo rápido de piezas del flanco de dama", de: "Schnelle Entwicklung der Damenseite-Figuren", nl: "Snelle ontwikkeling van damezijde stukken" },
          { en: "Early queen activation", es: "Activación temprana de la dama", de: "Frühe Damenaktivierung", nl: "Vroege dame-activatie" }
        ],
        correct: 0,
        explanation: {
          en: "The King's Indian Defense is a hypermodern opening characterized by allowing White to occupy the center, while Black develops with a fianchettoed kingside bishop and plans a later pawn break.",
          es: "La Defensa India de Rey es una apertura hipermoderna caracterizada por permitir que las blancas ocupen el centro, mientras las negras se desarrollan con un alfil de rey en fianchetto y planean una ruptura de peones posterior.",
          de: "Die Königsindische Verteidigung ist eine hypermoderne Eröffnung, die dadurch gekennzeichnet ist, dass Weiß das Zentrum besetzen darf, während Schwarz sich mit einem fianschettierten Königsläufer entwickelt und einen späteren Bauerndurchbruch plant.",
          nl: "De Konings-Indische Verdediging is een hypermoderne opening die gekenmerkt wordt door wit het centrum te laten bezetten, terwijl zwart zich ontwikkelt met een gefianchetteerde koningsloper en een latere piondoorbraak plant."
        }
      },
      {
        question: {
          en: "What is a 'Greek Gift' sacrifice?",
          es: "¿Qué es un sacrificio de 'Regalo Griego'?",
          de: "Was ist ein 'Griechisches Geschenk'-Opfer?",
          nl: "Wat is een 'Grieks Geschenk' offer?"
        },
        options: [
          { en: "Bishop sacrifice on h7/h2 to expose the king", es: "Sacrificio de alfil en h7/h2 para exponer al rey", de: "Läuferopfer auf h7/h2 um den König bloßzustellen", nl: "Loperhoffer op h7/h2 om de koning bloot te stellen" },
          { en: "Queen sacrifice for checkmate", es: "Sacrificio de dama para dar jaque mate", de: "Damenopfer für Matt", nl: "Dame-offer voor schaakmat" },
          { en: "Rook sacrifice on the back rank", es: "Sacrificio de torre en la primera fila", de: "Turmopfer auf der Grundreihe", nl: "Torenoffer op de achterste rij" },
          { en: "Knight sacrifice on f7", es: "Sacrificio de caballo en f7", de: "Springeropfer auf f7", nl: "Paardoffer op f7" }
        ],
        correct: 0,
        explanation: {
          en: "The Greek Gift sacrifice (Bxh7+ or Bxh2+) is a classical attacking pattern where a bishop is sacrificed to expose the enemy king, often followed by a knight check and a devastating attack.",
          es: "El sacrificio del Regalo Griego (Axh7+ o Axh2+) es un patrón de ataque clásico donde se sacrifica un alfil para exponer al rey enemigo, a menudo seguido de un jaque de caballo y un ataque devastador.",
          de: "Das Griechische Geschenk-Opfer (Lxh7+ oder Lxh2+) ist ein klassisches Angriffsmuster, bei dem ein Läufer geopfert wird, um den gegnerischen König bloßzustellen, oft gefolgt von einem Springerschach und einem verheerenden Angriff.",
          nl: "Het Griekse Geschenk-offer (Lxh7+ of Lxh2+) is een klassiek aanvalspatroon waarbij een loper wordt geofferd om de vijandelijke koning bloot te stellen, vaak gevolgd door een paardschaak en een vernietigende aanval."
        }
      },
      {
        question: {
          en: "What is the 'opposition' in king and pawn endgames?",
          es: "¿Qué es la 'oposición' en finales de rey y peón?",
          de: "Was ist die 'Opposition' in König-Bauern-Endspielen?",
          nl: "Wat is de 'oppositie' in koning-en-pion-eindspelen?"
        },
        options: [
          { en: "Kings facing each other with an odd number of squares between them", es: "Reyes enfrentados con un número impar de casillas entre ellos", de: "Könige, die sich mit einer ungeraden Anzahl von Feldern zwischen ihnen gegenüberstehen", nl: "Koningen tegenover elkaar met een oneven aantal velden ertussen" },
          { en: "Kings on opposite sides of the board", es: "Reyes en lados opuestos del tablero", de: "Könige auf gegenüberliegenden Seiten des Bretts", nl: "Koningen aan tegenovergestelde kanten van het bord" },
          { en: "A tactical pattern", es: "Un patrón táctico", de: "Ein taktisches Muster", nl: "Een tactisch patroon" },
          { en: "A defensive formation", es: "Una formación defensiva", de: "Eine defensive Formation", nl: "Een defensieve formatie" }
        ],
        correct: 0,
        explanation: {
          en: "Opposition occurs when two kings face each other with an odd number of squares between them (usually one). The player not having the move has the opposition and gains a strategic advantage in pawn endgames.",
          es: "La oposición ocurre cuando dos reyes se enfrentan con un número impar de casillas entre ellos (usualmente una). El jugador que no tiene el turno tiene la oposición y obtiene una ventaja estratégica en finales de peones.",
          de: "Opposition tritt auf, wenn sich zwei Könige mit einer ungeraden Anzahl von Feldern zwischen ihnen gegenüberstehen (normalerweise eins). Der Spieler, der nicht am Zug ist, hat die Opposition und erhält einen strategischen Vorteil in Bauernendspielen.",
          nl: "Oppositie treedt op wanneer twee koningen tegenover elkaar staan met een oneven aantal velden ertussen (meestal één). De speler die niet aan zet is heeft de oppositie en krijgt een strategisch voordeel in pioneindspelen."
        }
      },
      {
        question: {
          en: "What is a 'desperado' move in chess?",
          es: "¿Qué es un movimiento 'desesperado' en ajedrez?",
          de: "Was ist ein 'Desperado'-Zug im Schach?",
          nl: "Wat is een 'desperado' zet in schaken?"
        },
        options: [
          { en: "A doomed piece capturing as much material as possible before being taken", es: "Una pieza condenada capturando tanto material como sea posible antes de ser tomada", de: "Eine verlorene Figur, die so viel Material wie möglich schlägt, bevor sie geschlagen wird", nl: "Een gedoemd stuk dat zoveel mogelijk materiaal verovert voordat het wordt geslagen" },
          { en: "A risky attack on the king", es: "Un ataque arriesgado al rey", de: "Ein riskanter Angriff auf den König", nl: "Een riskante aanval op de koning" },
          { en: "A last-minute defense", es: "Una defensa de último momento", de: "Eine Last-Minute-Verteidigung", nl: "Een laatste-moment verdediging" },
          { en: "A surprising checkmate", es: "Un jaque mate sorprendente", de: "Ein überraschendes Matt", nl: "Een verrassend schaakmat" }
        ],
        correct: 0,
        explanation: {
          en: "A desperado move involves a piece that is doomed to be captured making one or more forcing moves (captures, checks) to inflict maximum damage before its inevitable capture.",
          es: "Un movimiento desesperado involucra una pieza que está condenada a ser capturada haciendo uno o más movimientos forzados (capturas, jaques) para infligir el máximo daño antes de su inevitable captura.",
          de: "Ein Desperado-Zug beinhaltet eine Figur, die verloren ist und einen oder mehrere erzwingende Züge (Schlagzüge, Schachs) macht, um maximalen Schaden anzurichten, bevor sie unvermeidlich geschlagen wird.",
          nl: "Een desperado-zet houdt in dat een stuk dat gedoemd is om te worden geslagen één of meer forcerende zetten (slagen, schaken) doet om maximale schade toe te brengen vóór zijn onvermijdelijke verovering."
        }
      },
      {
        question: {
          en: "What is the Maroczy Bind?",
          es: "¿Qué es el Bind de Maroczy?",
          de: "Was ist die Maroczy-Bindung?",
          nl: "Wat is de Maroczy Bind?"
        },
        options: [
          { en: "A pawn formation with pawns on c4 and e4 controlling d5", es: "Una formación de peones con peones en c4 y e4 controlando d5", de: "Eine Bauernformation mit Bauern auf c4 und e4, die d5 kontrollieren", nl: "Een pionformatie met pionnen op c4 en e4 die d5 controleren" },
          { en: "A knight maneuver", es: "Una maniobra de caballo", de: "Ein Springermanöver", nl: "Een paardmanoeuvre" },
          { en: "An endgame technique", es: "Una técnica de final", de: "Eine Endspiel-Technik", nl: "Een eindspeltechniek" },
          { en: "A checkmate pattern", es: "Un patrón de jaque mate", de: "Ein Mattmuster", nl: "Een schaakmatpatroon" }
        ],
        correct: 0,
        explanation: {
          en: "The Maroczy Bind is a pawn formation where White controls the central d5 square with pawns on c4 and e4, typically arising against the Sicilian Defense. It restricts Black's piece mobility.",
          es: "El Bind de Maroczy es una formación de peones donde las blancas controlan la casilla central d5 con peones en c4 y e4, típicamente surgiendo contra la Defensa Siciliana. Restringe la movilidad de las piezas negras.",
          de: "Die Maroczy-Bindung ist eine Bauernformation, bei der Weiß das zentrale Feld d5 mit Bauern auf c4 und e4 kontrolliert, typischerweise gegen die Sizilianische Verteidigung entstehend. Sie schränkt die Figurenbeweglichkeit von Schwarz ein.",
          nl: "De Maroczy Bind is een pionformatie waarbij wit het centrale veld d5 controleert met pionnen op c4 en e4, typisch voorkomend tegen de Siciliaanse Verdediging. Het beperkt de stukbeweging van zwart."
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
