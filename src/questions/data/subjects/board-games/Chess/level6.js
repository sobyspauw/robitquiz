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
      },
      {
        question: {
          en: "What is the 'Philidor Position' in rook endgames?",
          es: "¿Qué es la 'Posición de Philidor' en finales de torre?",
          de: "Was ist die 'Philidor-Stellung' in Turmendspielen?",
          nl: "Wat is de 'Philidor Positie' in toreneindspelen?"
        },
        options: [
          { en: "Defensive setup with rook on 3rd rank and king blocking pawn", es: "Configuración defensiva con torre en 3ª fila y rey bloqueando peón", de: "Defensive Aufstellung mit Turm auf der 3. Reihe und König, der Bauer blockiert", nl: "Defensieve opstelling met toren op 3e rij en koning die pion blokkeert" },
          { en: "Rook and pawn vs rook", es: "Torre y peón contra torre", de: "Turm und Bauer gegen Turm", nl: "Toren en pion tegen toren" },
          { en: "Active rook on 7th rank", es: "Torre activa en 7ª fila", de: "Aktiver Turm auf der 7. Reihe", nl: "Actieve toren op 7e rij" },
          { en: "Rook endgame technique", es: "Técnica de final de torre", de: "Turmendspiel-Technik", nl: "Toreneindspeltechniek" }
        ],
        correct: 0,
        explanation: {
          en: "The Philidor Position is a defensive drawing technique where the defending side places their rook on the third rank and king in front of the pawn to prevent the attacking king from advancing.",
          es: "La Posición de Philidor es una técnica defensiva de tablas donde el bando defensor coloca su torre en la tercera fila y el rey frente al peón para evitar que el rey atacante avance.",
          de: "Die Philidor-Stellung ist eine defensive Remistechnik, bei der die verteidigende Seite ihren Turm auf der dritten Reihe und den König vor dem Bauern platziert, um das Vordringen des angreifenden Königs zu verhindern.",
          nl: "De Philidor Positie is een defensieve remisetechniek waarbij de verdedigende partij hun toren op de derde rij en koning voor de pion plaatst om te voorkomen dat de aanvallende koning vordert."
        }
      },
      {
        question: {
          en: "What is the 'Triangle Maneuver' in endgames?",
          es: "¿Qué es la 'Maniobra del Triángulo' en finales?",
          de: "Was ist das 'Dreieckmanöver' in Endspielen?",
          nl: "Wat is de 'Driehoekmanoeuvre' in eindspelen?"
        },
        options: [
          { en: "King moves forming triangle to lose tempo", es: "Movimientos del rey formando triángulo para perder tempo", de: "Königszüge, die ein Dreieck bilden, um Tempo zu verlieren", nl: "Koningzetten die driehoek vormen om tempo te verliezen" },
          { en: "Three pieces attacking", es: "Tres piezas atacando", de: "Drei Figuren greifen an", nl: "Drie stukken vallen aan" },
          { en: "Pawn formation", es: "Formación de peones", de: "Bauernformation", nl: "Pionformatie" },
          { en: "Knight pattern", es: "Patrón de caballo", de: "Springermuster", nl: "Paardpatroon" }
        ],
        correct: 0,
        explanation: {
          en: "The triangle maneuver is a technique where a king moves in a triangular pattern to lose a tempo and put the opponent in zugzwang, forcing them to move first and worsen their position.",
          es: "La maniobra del triángulo es una técnica donde un rey se mueve en un patrón triangular para perder un tempo y poner al oponente en zugzwang, forzándolo a mover primero y empeorar su posición.",
          de: "Das Dreieckmanöver ist eine Technik, bei der ein König sich in einem dreieckigen Muster bewegt, um ein Tempo zu verlieren und den Gegner in Zugzwang zu bringen, ihn zu zwingen, zuerst zu ziehen und seine Stellung zu verschlechtern.",
          nl: "De driehoekmanoeuvre is een techniek waarbij een koning in een driehoekig patroon beweegt om een tempo te verliezen en de tegenstander in zugzwang te brengen, hem dwingend eerst te bewegen en zijn positie te verslechteren."
        }
      },
      {
        question: {
          en: "What is a 'backward pawn'?",
          es: "¿Qué es un 'peón retrasado'?",
          de: "Was ist ein 'rückständiger Bauer'?",
          nl: "Wat is een 'achtergebleven pion'?"
        },
        options: [
          { en: "Pawn behind neighbors, can't advance safely", es: "Peón detrás de vecinos, no puede avanzar con seguridad", de: "Bauer hinter Nachbarn, kann nicht sicher vorrücken", nl: "Pion achter buren, kan niet veilig oprukken" },
          { en: "Pawn on first rank", es: "Peón en primera fila", de: "Bauer auf der ersten Reihe", nl: "Pion op eerste rij" },
          { en: "Doubled pawn", es: "Peón doblado", de: "Doppelbauer", nl: "Dubbele pion" },
          { en: "Isolated pawn", es: "Peón aislado", de: "Isolierter Bauer", nl: "Geïsoleerde pion" }
        ],
        correct: 0,
        explanation: {
          en: "A backward pawn is one that is behind its neighboring pawns and cannot safely advance because the square in front of it is controlled by enemy pieces or pawns.",
          es: "Un peón retrasado es uno que está detrás de sus peones vecinos y no puede avanzar con seguridad porque la casilla frente a él está controlada por piezas o peones enemigos.",
          de: "Ein rückständiger Bauer ist einer, der hinter seinen benachbarten Bauern liegt und nicht sicher vorrücken kann, weil das Feld vor ihm von gegnerischen Figuren oder Bauern kontrolliert wird.",
          nl: "Een achtergebleven pion is er een die achter zijn naburige pionnen ligt en niet veilig kan oprukken omdat het veld ervoor wordt gecontroleerd door vijandelijke stukken of pionnen."
        }
      },
      {
        question: {
          en: "What is the 'Berlin Defense' in the Ruy Lopez?",
          es: "¿Qué es la 'Defensa Berlinesa' en la Ruy Lopez?",
          de: "Was ist die 'Berliner Verteidigung' in der Spanischen Partie?",
          nl: "Wat is de 'Berlijnse Verdediging' in de Ruy Lopez?"
        },
        options: [
          { en: "3...Nf6 leading to endgame after early queen trade", es: "3...Cf6 llevando a final tras cambio temprano de reinas", de: "3...Sf6 führt zu Endspiel nach frühem Damentausch", nl: "3...Pf6 leidend tot eindspel na vroege dameruil" },
          { en: "German opening system", es: "Sistema de apertura alemán", de: "Deutsches Eröffnungssystem", nl: "Duits openingssysteem" },
          { en: "Defensive pawn wall", es: "Muro de peones defensivo", de: "Defensive Bauernmauer", nl: "Defensieve pionmuur" },
          { en: "Queenside castle strategy", es: "Estrategia de enroque largo", de: "Damenflügel-Rochade-Strategie", nl: "Damevleugel rokade strategie" }
        ],
        correct: 0,
        explanation: {
          en: "The Berlin Defense (1.e4 e5 2.Nf3 Nc6 3.Bb5 Nf6) often leads to a solid endgame after 4.O-O Nxe4 5.d4 Nd6 6.Bxc6 dxc6 7.dxe5 Nf5 8.Qxd8+ Kxd8, favored by top players for its resilience.",
          es: "La Defensa Berlinesa (1.e4 e5 2.Cf3 Cc6 3.Ab5 Cf6) a menudo lleva a un final sólido después de 4.O-O Cxe4 5.d4 Cd6 6.Axc6 dxc6 7.dxe5 Cf5 8.Dxd8+ Rxd8, favorecida por jugadores de élite por su resistencia.",
          de: "Die Berliner Verteidigung (1.e4 e5 2.Sf3 Sc6 3.Lb5 Sf6) führt oft zu einem soliden Endspiel nach 4.O-O Sxe4 5.d4 Sd6 6.Lxc6 dxc6 7.dxe5 Sf5 8.Dxd8+ Kxd8, von Spitzenspielern wegen ihrer Widerstandsfähigkeit bevorzugt.",
          nl: "De Berlijnse Verdediging (1.e4 e5 2.Pf3 Pc6 3.Lb5 Pf6) leidt vaak tot een solide eindspel na 4.O-O Pxe4 5.d4 Pd6 6.Lxc6 dxc6 7.dxe5 Pf5 8.Dxd8+ Kxd8, geprefereerd door topspelers vanwege zijn veerkracht."
        }
      },
      {
        question: {
          en: "What does 'time trouble' or 'zeitnot' mean?",
          es: "¿Qué significa 'apuro de tiempo' o 'zeitnot'?",
          de: "Was bedeutet 'Zeitnot'?",
          nl: "Wat betekent 'tijdnood' of 'zeitnot'?"
        },
        options: [
          { en: "Having very little time left on the clock", es: "Tener muy poco tiempo restante en el reloj", de: "Sehr wenig Zeit auf der Uhr haben", nl: "Zeer weinig tijd over hebben op de klok" },
          { en: "Slow play penalty", es: "Penalización por juego lento", de: "Strafe für langsames Spiel", nl: "Straf voor traag spel" },
          { en: "Tournament delay", es: "Retraso del torneo", de: "Turnierverzögerung", nl: "Toernooivertraging" },
          { en: "Opening preparation time", es: "Tiempo de preparación de apertura", de: "Eröffnungsvorbereitungszeit", nl: "Openingsvoorbereidingstijd" }
        ],
        correct: 0,
        explanation: {
          en: "Time trouble (German: Zeitnot) refers to a critical situation where a player has very little time remaining to make their moves, often leading to blunders and tactical oversights.",
          es: "El apuro de tiempo (alemán: Zeitnot) se refiere a una situación crítica donde un jugador tiene muy poco tiempo restante para hacer sus movimientos, a menudo llevando a errores y descuidos tácticos.",
          de: "Zeitnot bezieht sich auf eine kritische Situation, in der ein Spieler sehr wenig Zeit hat, um seine Züge zu machen, was oft zu Fehlern und taktischen Übersehen führt.",
          nl: "Tijdnood (Duits: Zeitnot) verwijst naar een kritieke situatie waarbij een speler zeer weinig tijd over heeft om hun zetten te doen, vaak leidend tot blunders en tactische fouten."
        }
      },
      {
        question: {
          en: "What is an 'exchange sacrifice'?",
          es: "¿Qué es un 'sacrificio de calidad'?",
          de: "Was ist ein 'Qualitätsopfer'?",
          nl: "Wat is een 'kwaliteitsoffer'?"
        },
        options: [
          { en: "Giving up rook for minor piece (bishop or knight)", es: "Entregar torre por pieza menor (alfil o caballo)", de: "Turm für Leichtfigur (Läufer oder Springer) opfern", nl: "Toren opgeven voor licht stuk (loper of paard)" },
          { en: "Trading queens", es: "Cambiar reinas", de: "Damen tauschen", nl: "Dames ruilen" },
          { en: "Pawn sacrifice", es: "Sacrificio de peón", de: "Bauernopfer", nl: "Pionoffer" },
          { en: "Piece trade", es: "Cambio de piezas", de: "Figurentausch", nl: "Stukkenruil" }
        ],
        correct: 0,
        explanation: {
          en: "An exchange sacrifice involves giving up a rook (worth about 5 points) for a bishop or knight (worth about 3 points) to gain positional compensation such as weakening the opponent's king position or dominating key squares.",
          es: "Un sacrificio de calidad implica entregar una torre (valor aproximado 5 puntos) por un alfil o caballo (valor aproximado 3 puntos) para obtener compensación posicional como debilitar la posición del rey oponente o dominar casillas clave.",
          de: "Ein Qualitätsopfer beinhaltet das Opfern eines Turms (etwa 5 Punkte wert) für einen Läufer oder Springer (etwa 3 Punkte wert), um positionelle Kompensation wie die Schwächung der gegnerischen Königsstellung oder die Beherrschung wichtiger Felder zu erlangen.",
          nl: "Een kwaliteitsoffer houdt in dat een toren (ongeveer 5 punten waard) wordt opgegeven voor een loper of paard (ongeveer 3 punten waard) om positionele compensatie te krijgen zoals het verzwakken van de koningspositie van de tegenstander of het domineren van belangrijke velden."
        }
      },
      {
        question: {
          en: "What is a 'fortress' in chess endgames?",
          es: "¿Qué es una 'fortaleza' en finales de ajedrez?",
          de: "Was ist eine 'Festung' in Schachendspielen?",
          nl: "Wat is een 'fort' in schakeindspelen?"
        },
        options: [
          { en: "Defensive position that can't be breached despite material deficit", es: "Posición defensiva que no puede ser penetrada a pesar del déficit material", de: "Defensive Stellung, die trotz Materialnachteil nicht durchbrochen werden kann", nl: "Defensieve positie die niet doorbroken kan worden ondanks materieel nadeel" },
          { en: "King in corner", es: "Rey en esquina", de: "König in der Ecke", nl: "Koning in hoek" },
          { en: "Pawn chain", es: "Cadena de peones", de: "Bauernkette", nl: "Pionketen" },
          { en: "Castled position", es: "Posición enrocada", de: "Rochierte Stellung", nl: "Gerokeerde positie" }
        ],
        correct: 0,
        explanation: {
          en: "A fortress is a defensive setup in the endgame where the side with less material can hold a draw because the opponent cannot break through despite having more pieces, often involving strategic piece placement and pawn blockades.",
          es: "Una fortaleza es una configuración defensiva en el final donde el bando con menos material puede mantener tablas porque el oponente no puede penetrar a pesar de tener más piezas, a menudo involucrando colocación estratégica de piezas y bloqueos de peones.",
          de: "Eine Festung ist eine defensive Aufstellung im Endspiel, bei der die Seite mit weniger Material ein Remis halten kann, weil der Gegner trotz mehrerer Figuren nicht durchbrechen kann, oft unter Einbeziehung strategischer Figurenplatzierung und Bauernblockaden.",
          nl: "Een fort is een defensieve opstelling in het eindspel waarbij de partij met minder materiaal remise kan houden omdat de tegenstander niet kan doorbreken ondanks meer stukken te hebben, vaak met strategische stukplaatsing en pionblokades."
        }
      },
      {
        question: {
          en: "What is the 'Trompowsky Attack'?",
          es: "¿Qué es el 'Ataque Trompowsky'?",
          de: "Was ist der 'Trompowsky-Angriff'?",
          nl: "Wat is de 'Trompowsky Aanval'?"
        },
        options: [
          { en: "1.d4 Nf6 2.Bg5, aggressive bishop development", es: "1.d4 Cf6 2.Ag5, desarrollo agresivo del alfil", de: "1.d4 Sf6 2.Lg5, aggressive Läuferentwicklung", nl: "1.d4 Pf6 2.Lg5, agressieve loperontwikkeling" },
          { en: "Queen sacrifice opening", es: "Apertura con sacrificio de reina", de: "Damenopfer-Eröffnung", nl: "Dameoffer opening" },
          { en: "Pawn storm on kingside", es: "Tormenta de peones en flanco de rey", de: "Bauernsturm am Königsflügel", nl: "Pionstorm op koningsvleugel" },
          { en: "Central pawn advance", es: "Avance de peones central", de: "Zentraler Bauernvorstoß", nl: "Centrale pionopmars" }
        ],
        correct: 0,
        explanation: {
          en: "The Trompowsky Attack (1.d4 Nf6 2.Bg5) is an aggressive opening where White develops the bishop to g5 immediately, often aiming to disrupt Black's development and create imbalances.",
          es: "El Ataque Trompowsky (1.d4 Cf6 2.Ag5) es una apertura agresiva donde las blancas desarrollan el alfil a g5 inmediatamente, a menudo con el objetivo de interrumpir el desarrollo de las negras y crear desequilibrios.",
          de: "Der Trompowsky-Angriff (1.d4 Sf6 2.Lg5) ist eine aggressive Eröffnung, bei der Weiß den Läufer sofort nach g5 entwickelt, oft mit dem Ziel, Schwarz' Entwicklung zu stören und Ungleichgewichte zu schaffen.",
          nl: "De Trompowsky Aanval (1.d4 Pf6 2.Lg5) is een agressieve opening waarbij wit de loper onmiddellijk naar g5 ontwikkelt, vaak met het doel de ontwikkeling van zwart te verstoren en onevenwichtigheden te creëren."
        }
      },
      {
        question: {
          en: "What is the 'Dragon Variation' in the Sicilian Defense?",
          es: "¿Qué es la 'Variante del Dragón' en la Defensa Siciliana?",
          de: "Was ist die 'Drachen-Variante' in der Sizilianischen Verteidigung?",
          nl: "Wat is de 'Drakenvariant' in de Siciliaanse Verdediging?"
        },
        options: [
          { en: "Fianchettoed bishop on g7 creating dragon shape", es: "Alfil en fianchetto en g7 creando forma de dragón", de: "Fianchettierter Läufer auf g7 mit Drachenform", nl: "Gefianchetteerde loper op g7 die drakenvorm creëert" },
          { en: "Queen and knight attack", es: "Ataque de reina y caballo", de: "Damen-Springer-Angriff", nl: "Dame en paard aanval" },
          { en: "Pawn storm tactic", es: "Táctica de tormenta de peones", de: "Bauernsturm-Taktik", nl: "Pionstorm tactiek" },
          { en: "Endgame strategy", es: "Estrategia de final", de: "Endspielstrategie", nl: "Eindspelstrategie" }
        ],
        correct: 0,
        explanation: {
          en: "The Dragon Variation (1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 g6) features Black's fianchettoed bishop on g7, creating a pawn structure resembling a dragon, leading to sharp tactical battles.",
          es: "La Variante del Dragón (1.e4 c5 2.Cf3 d6 3.d4 cxd4 4.Cxd4 Cf6 5.Cc3 g6) presenta el alfil en fianchetto de las negras en g7, creando una estructura de peones que se asemeja a un dragón, llevando a batallas tácticas agudas.",
          de: "Die Drachen-Variante (1.e4 c5 2.Sf3 d6 3.d4 cxd4 4.Sxd4 Sf6 5.Sc3 g6) zeigt Schwarz' fianschettierten Läufer auf g7, der eine Bauernstruktur in Drachenform schafft und zu scharfen taktischen Kämpfen führt.",
          nl: "De Drakenvariant (1.e4 c5 2.Pf3 d6 3.d4 cxd4 4.Pxd4 Pf6 5.Pc3 g6) toont zwarts gefianchetteerde loper op g7, die een pionstructuur creëert die lijkt op een draak, leidend tot scherpe tactische gevechten."
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
          { en: "Nxf7 knight sacrifice in Italian Game", es: "Sacrificio de caballo Cxf7 en Apertura Italiana", de: "Sxf7 Springeropfer in der Italienischen Partie", nl: "Pxf7 paardoffer in Italiaanse Opening" },
          { en: "Queen sacrifice pattern", es: "Patrón de sacrificio de reina", de: "Damenopfer-Muster", nl: "Dameoffer patroon" },
          { en: "Rook endgame tactic", es: "Táctica de final de torre", de: "Turmendspiel-Taktik", nl: "Toreneindspeltactiek" },
          { en: "Pawn breakthrough", es: "Ruptura de peones", de: "Bauerndurchbruch", nl: "Piondoorbraak" }
        ],
        correct: 0,
        explanation: {
          en: "The Fried Liver Attack (1.e4 e5 2.Nf3 Nc6 3.Bc4 Nf6 4.Ng5 d5 5.exd5 Nxd5 6.Nxf7) is an aggressive knight sacrifice aiming to expose Black's king and launch a fierce attack despite being down material.",
          es: "El Ataque del Hígado Frito (1.e4 e5 2.Cf3 Cc6 3.Ac4 Cf6 4.Cg5 d5 5.exd5 Cxd5 6.Cxf7) es un sacrificio agresivo de caballo con el objetivo de exponer al rey negro y lanzar un ataque feroz a pesar de estar en desventaja material.",
          de: "Der Fegatello-Angriff (1.e4 e5 2.Sf3 Sc6 3.Lc4 Sf6 4.Sg5 d5 5.exd5 Sxd5 6.Sxf7) ist ein aggressives Springeropfer, das darauf abzielt, Schwarz' König bloßzustellen und einen heftigen Angriff zu starten, obwohl Material fehlt.",
          nl: "De Gebakken Lever Aanval (1.e4 e5 2.Pf3 Pc6 3.Lc4 Pf6 4.Pg5 d5 5.exd5 Pxd5 6.Pxf7) is een agressief paardoffer dat erop gericht is zwarts koning bloot te stellen en een felle aanval te lanceren ondanks materieel achter te staan."
        }
      },
      {
        question: {
          en: "What is a 'perpetual check'?",
          es: "¿Qué es un 'jaque perpetuo'?",
          de: "Was ist ein 'Dauerschach'?",
          nl: "Wat is een 'eeuwig schaak'?"
        },
        options: [
          { en: "Continuous checks forcing a draw by repetition", es: "Jaques continuos forzando tablas por repetición", de: "Fortlaufende Schachs, die Remis durch Wiederholung erzwingen", nl: "Continue schaken die remise forceren door herhaling" },
          { en: "Checkmate pattern", es: "Patrón de jaque mate", de: "Mattmuster", nl: "Schaakmatpatroon" },
          { en: "King chase", es: "Persecución del rey", de: "Königsjagd", nl: "Koningjacht" },
          { en: "Opening trap", es: "Trampa de apertura", de: "Eröffnungsfalle", nl: "Openingsval" }
        ],
        correct: 0,
        explanation: {
          en: "A perpetual check occurs when one side can give an endless series of checks, forcing the opponent's king to move repeatedly without being able to escape, resulting in a draw by threefold repetition.",
          es: "Un jaque perpetuo ocurre cuando un bando puede dar una serie interminable de jaques, forzando al rey del oponente a moverse repetidamente sin poder escapar, resultando en tablas por triple repetición.",
          de: "Ein Dauerschach tritt auf, wenn eine Seite eine endlose Serie von Schachs geben kann, wodurch der gegnerische König gezwungen wird, sich wiederholt zu bewegen, ohne entkommen zu können, was zu Remis durch dreifache Stellungswiederholung führt.",
          nl: "Een eeuwig schaak treedt op wanneer één partij een eindeloze reeks schaken kan geven, waardoor de koning van de tegenstander herhaaldelijk moet bewegen zonder te kunnen ontsnappen, wat resulteert in remise door drievoudige herhaling."
        }
      },
      {
        question: {
          en: "What is the 'Najdorf Variation' of the Sicilian?",
          es: "¿Qué es la 'Variante Najdorf' de la Siciliana?",
          de: "Was ist die 'Najdorf-Variante' der Sizilianischen?",
          nl: "Wat is de 'Najdorf Variant' van de Siciliaanse?"
        },
        options: [
          { en: "5...a6, flexible and complex Black system", es: "5...a6, sistema negro flexible y complejo", de: "5...a6, flexibles und komplexes Schwarz-System", nl: "5...a6, flexibel en complex zwart systeem" },
          { en: "Early queen trade", es: "Cambio temprano de reinas", de: "Früher Damentausch", nl: "Vroege dameruil" },
          { en: "Kingside fianchetto", es: "Fianchetto de rey", de: "Königsflügel-Fianchetto", nl: "Koningsvleugel fianchetto" },
          { en: "Central pawn sacrifice", es: "Sacrificio de peón central", de: "Zentralbauernopfer", nl: "Centraal pionoffer" }
        ],
        correct: 0,
        explanation: {
          en: "The Najdorf Variation (1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6) is one of the most popular and complex variations of the Sicilian, offering Black maximum flexibility and rich tactical possibilities.",
          es: "La Variante Najdorf (1.e4 c5 2.Cf3 d6 3.d4 cxd4 4.Cxd4 Cf6 5.Cc3 a6) es una de las variantes más populares y complejas de la Siciliana, ofreciendo a las negras máxima flexibilidad y ricas posibilidades tácticas.",
          de: "Die Najdorf-Variante (1.e4 c5 2.Sf3 d6 3.d4 cxd4 4.Sxd4 Sf6 5.Sc3 a6) ist eine der beliebtesten und komplexesten Varianten der Sizilianischen Verteidigung und bietet Schwarz maximale Flexibilität und reiche taktische Möglichkeiten.",
          nl: "De Najdorf Variant (1.e4 c5 2.Pf3 d6 3.d4 cxd4 4.Pxd4 Pf6 5.Pc3 a6) is een van de meest populaire en complexe varianten van de Siciliaanse, die zwart maximale flexibiliteit en rijke tactische mogelijkheden biedt."
        }
      },
      {
        question: {
          en: "What is 'doubled rooks' strategy?",
          es: "¿Qué es la estrategia de 'torres dobladas'?",
          de: "Was ist die 'Doppelturm'-Strategie?",
          nl: "Wat is de 'dubbele torens' strategie?"
        },
        options: [
          { en: "Placing both rooks on same file or rank", es: "Colocar ambas torres en la misma columna o fila", de: "Beide Türme auf derselben Linie oder Reihe platzieren", nl: "Beide torens op dezelfde lijn of rij plaatsen" },
          { en: "Rook endgame technique", es: "Técnica de final de torre", de: "Turmendspiel-Technik", nl: "Toreneindspeltechniek" },
          { en: "Castle both sides", es: "Enrocar ambos lados", de: "Beide Seiten rochieren", nl: "Beide kanten rokeren" },
          { en: "Two rook sacrifice", es: "Sacrificio de dos torres", de: "Zwei-Turm-Opfer", nl: "Twee torens offer" }
        ],
        correct: 0,
        explanation: {
          en: "Doubled rooks refers to placing both rooks on the same file (vertical) or rank (horizontal) to maximize pressure along that line, often to attack weak pawns or control open files.",
          es: "Torres dobladas se refiere a colocar ambas torres en la misma columna (vertical) o fila (horizontal) para maximizar la presión a lo largo de esa línea, a menudo para atacar peones débiles o controlar columnas abiertas.",
          de: "Doppelte Türme bedeutet, beide Türme auf derselben Linie (vertikal) oder Reihe (horizontal) zu platzieren, um den Druck entlang dieser Linie zu maximieren, oft um schwache Bauern anzugreifen oder offene Linien zu kontrollieren.",
          nl: "Dubbele torens verwijst naar het plaatsen van beide torens op dezelfde lijn (verticaal) of rij (horizontaal) om de druk langs die lijn te maximaliseren, vaak om zwakke pionnen aan te vallen of open lijnen te controleren."
        }
      },
      {
        question: {
          en: "What is a 'Rook lift'?",
          es: "¿Qué es una 'elevación de torre'?",
          de: "Was ist ein 'Turmlift'?",
          nl: "Wat is een 'torenlift'?"
        },
        options: [
          { en: "Moving rook to 3rd/4th rank for horizontal attack", es: "Mover torre a 3ª/4ª fila para ataque horizontal", de: "Turm zur 3./4. Reihe für horizontalen Angriff bewegen", nl: "Toren naar 3e/4e rij verplaatsen voor horizontale aanval" },
          { en: "Rook to 8th rank", es: "Torre a la 8ª fila", de: "Turm zur 8. Reihe", nl: "Toren naar 8e rij" },
          { en: "Trading rooks", es: "Cambiar torres", de: "Türme tauschen", nl: "Torens ruilen" },
          { en: "Rook sacrifice", es: "Sacrificio de torre", de: "Turmopfer", nl: "Torenoffer" }
        ],
        correct: 0,
        explanation: {
          en: "A rook lift is a maneuver where a rook moves from its original file to the 3rd or 4th rank, then swings horizontally to join an attack on the kingside or queenside.",
          es: "Una elevación de torre es una maniobra donde una torre se mueve de su columna original a la 3ª o 4ª fila, luego se balancea horizontalmente para unirse a un ataque en el flanco de rey o de dama.",
          de: "Ein Turmlift ist ein Manöver, bei dem ein Turm von seiner ursprünglichen Linie zur 3. oder 4. Reihe zieht und dann horizontal schwenkt, um sich einem Angriff am Königs- oder Damenflügel anzuschließen.",
          nl: "Een torenlift is een manoeuvre waarbij een toren van zijn oorspronkelijke lijn naar de 3e of 4e rij beweegt en vervolgens horizontaal zwaait om zich aan te sluiten bij een aanval op de konings- of damevleugel."
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
          { en: "1.d4 d5 2.c4 c6, solid central defense", es: "1.d4 d5 2.c4 c6, defensa central sólida", de: "1.d4 d5 2.c4 c6, solide Zentralverteidigung", nl: "1.d4 d5 2.c4 c6, solide centrale verdediging" },
          { en: "Kingside attack system", es: "Sistema de ataque de rey", de: "Königsflügel-Angriffssystem", nl: "Koningsvleugel aanvalssysteem" },
          { en: "Early queen development", es: "Desarrollo temprano de reina", de: "Frühe Damenentwicklung", nl: "Vroege dame-ontwikkeling" },
          { en: "Gambit pawn sacrifice", es: "Sacrificio de peón gambito", de: "Gambit-Bauernopfer", nl: "Gambiet pionoffer" }
        ],
        correct: 0,
        explanation: {
          en: "The Slav Defense (1.d4 d5 2.c4 c6) is a solid opening where Black supports the d5 pawn with c6, keeping the light-squared bishop free unlike in the Queen's Gambit Declined.",
          es: "La Defensa Eslava (1.d4 d5 2.c4 c6) es una apertura sólida donde las negras apoyan el peón d5 con c6, manteniendo libre el alfil de casillas claras a diferencia del Gambito de Dama Rehusado.",
          de: "Die Slawische Verteidigung (1.d4 d5 2.c4 c6) ist eine solide Eröffnung, bei der Schwarz den d5-Bauern mit c6 unterstützt und den weißfeldrigen Läufer im Gegensatz zum abgelehnten Damengambit frei hält.",
          nl: "De Slavische Verdediging (1.d4 d5 2.c4 c6) is een solide opening waarbij zwart de d5 pion ondersteunt met c6, waarbij de lichtvellige loper vrij wordt gehouden in tegenstelling tot het Afgeslagen Damegambiet."
        }
      },
      {
        question: {
          en: "What is 'tempo' in chess?",
          es: "¿Qué es el 'tempo' en ajedrez?",
          de: "Was ist 'Tempo' im Schach?",
          nl: "Wat is 'tempo' in schaak?"
        },
        options: [
          { en: "Unit of time/move, gaining or losing initiative", es: "Unidad de tiempo/movimiento, ganar o perder iniciativa", de: "Zeit-/Zugeinheit, Initiative gewinnen oder verlieren", nl: "Tijds-/zeteenheid, initiatief winnen of verliezen" },
          { en: "Clock setting", es: "Configuración del reloj", de: "Uhreinstellung", nl: "Klokinstelling" },
          { en: "Game speed", es: "Velocidad de juego", de: "Spielgeschwindigkeit", nl: "Spelsnelheid" },
          { en: "Move time limit", es: "Límite de tiempo por movimiento", de: "Zugzeitlimit", nl: "Zettijdslimiet" }
        ],
        correct: 0,
        explanation: {
          en: "Tempo refers to a 'turn' or 'move' in chess. Gaining a tempo means accomplishing something in fewer moves than the opponent, while losing a tempo means making unnecessary moves that don't improve your position.",
          es: "Tempo se refiere a un 'turno' o 'movimiento' en ajedrez. Ganar un tempo significa lograr algo en menos movimientos que el oponente, mientras que perder un tempo significa hacer movimientos innecesarios que no mejoran tu posición.",
          de: "Tempo bezieht sich auf einen 'Zug' oder 'Zugfolge' im Schach. Ein Tempo gewinnen bedeutet, etwas in weniger Zügen als der Gegner zu erreichen, während ein Tempo verlieren bedeutet, unnötige Züge zu machen, die die Stellung nicht verbessern.",
          nl: "Tempo verwijst naar een 'beurt' of 'zet' in schaak. Een tempo winnen betekent iets bereiken in minder zetten dan de tegenstander, terwijl een tempo verliezen betekent onnodige zetten doen die je positie niet verbeteren."
        }
      },
      {
        question: {
          en: "What is the 'Lucena Position'?",
          es: "¿Qué es la 'Posición de Lucena'?",
          de: "Was ist die 'Lucena-Stellung'?",
          nl: "Wat is de 'Lucena Positie'?"
        },
        options: [
          { en: "Winning rook endgame technique with pawn on 7th", es: "Técnica ganadora de final de torre con peón en 7ª", de: "Gewinnende Turmendspiel-Technik mit Bauer auf der 7. Reihe", nl: "Winnende toreneindspeltechniek met pion op 7e" },
          { en: "Opening trap", es: "Trampa de apertura", de: "Eröffnungsfalle", nl: "Openingsval" },
          { en: "Middlegame tactic", es: "Táctica de medio juego", de: "Mittelspiel-Taktik", nl: "Middenspeltactiek" },
          { en: "Checkmate pattern", es: "Patrón de jaque mate", de: "Mattmuster", nl: "Schaakmatpatroon" }
        ],
        correct: 0,
        explanation: {
          en: "The Lucena Position is a fundamental winning technique in rook and pawn endgames where the stronger side uses the 'building a bridge' method to shield their king from checks and promote the pawn.",
          es: "La Posición de Lucena es una técnica ganadora fundamental en finales de torre y peón donde el bando más fuerte usa el método de 'construir un puente' para proteger a su rey de jaques y promover el peón.",
          de: "Die Lucena-Stellung ist eine grundlegende Gewinntechnik in Turm-Bauern-Endspielen, bei der die stärkere Seite die 'Brückenbau'-Methode verwendet, um ihren König vor Schachs zu schützen und den Bauern umzuwandeln.",
          nl: "De Lucena Positie is een fundamentele winnende techniek in toren-en-pion-eindspelen waarbij de sterkere partij de 'brug bouwen'-methode gebruikt om hun koning te beschermen tegen schaken en de pion te promoveren."
        }
      },
      {
        question: {
          en: "What is 'connected passed pawns'?",
          es: "¿Qué son 'peones pasados conectados'?",
          de: "Was sind 'verbundene Freibauern'?",
          nl: "Wat zijn 'verbonden vrijpionnen'?"
        },
        options: [
          { en: "Adjacent passed pawns supporting each other", es: "Peones pasados adyacentes apoyándose mutuamente", de: "Benachbarte Freibauern, die sich gegenseitig unterstützen", nl: "Aangrenzende vrijpionnen die elkaar ondersteunen" },
          { en: "Pawns on same file", es: "Peones en la misma columna", de: "Bauern auf derselben Linie", nl: "Pionnen op dezelfde lijn" },
          { en: "Isolated pawns", es: "Peones aislados", de: "Isolierte Bauern", nl: "Geïsoleerde pionnen" },
          { en: "Doubled pawns", es: "Peones doblados", de: "Doppelbauern", nl: "Dubbele pionnen" }
        ],
        correct: 0,
        explanation: {
          en: "Connected passed pawns are two or more passed pawns on adjacent files that can protect each other as they advance. They are very powerful in endgames and often unstoppable when far advanced.",
          es: "Los peones pasados conectados son dos o más peones pasados en columnas adyacentes que pueden protegerse mutuamente mientras avanzan. Son muy poderosos en finales y a menudo imparables cuando están muy avanzados.",
          de: "Verbundene Freibauern sind zwei oder mehr Freibauern auf benachbarten Linien, die sich beim Vorrücken gegenseitig schützen können. Sie sind sehr mächtig in Endspielen und oft nicht aufzuhalten, wenn sie weit vorgerückt sind.",
          nl: "Verbonden vrijpionnen zijn twee of meer vrijpionnen op aangrenzende lijnen die elkaar kunnen beschermen terwijl ze oprukken. Ze zijn zeer krachtig in eindspelen en vaak niet te stoppen wanneer ze ver zijn opgerukt."
        }
      },
      {
        question: {
          en: "What is an 'artificial castle'?",
          es: "¿Qué es un 'enroque artificial'?",
          de: "Was ist eine 'künstliche Rochade'?",
          nl: "Wat is een 'kunstmatige rokade'?"
        },
        options: [
          { en: "Manually moving king and rook to castled-like position", es: "Mover manualmente rey y torre a posición similar al enroque", de: "König und Turm manuell in rochadeähnliche Position bewegen", nl: "Handmatig koning en toren verplaatsen naar rokade-achtige positie" },
          { en: "Illegal castling move", es: "Movimiento de enroque ilegal", de: "Illegaler Rochade-Zug", nl: "Illegale rokadezet" },
          { en: "Queenside castle", es: "Enroque largo", de: "Lange Rochade", nl: "Lange rokade" },
          { en: "Castle after king moved", es: "Enrocar después de mover rey", de: "Rochieren nach Königszug", nl: "Rokeren na koningzet" }
        ],
        correct: 0,
        explanation: {
          en: "An artificial castle occurs when a player has lost the right to castle (by moving king or rook earlier) but manually repositions their pieces to achieve a similar king safety setup over several moves.",
          es: "Un enroque artificial ocurre cuando un jugador ha perdido el derecho a enrocar (por mover el rey o torre antes) pero reposiciona manualmente sus piezas para lograr una configuración similar de seguridad del rey en varios movimientos.",
          de: "Eine künstliche Rochade entsteht, wenn ein Spieler das Rochaderecht verloren hat (durch früheres Bewegen von König oder Turm), aber seine Figuren über mehrere Züge manuell in eine ähnliche Königssicherheitsaufstellung bringt.",
          nl: "Een kunstmatige rokade vindt plaats wanneer een speler het recht om te rokeren heeft verloren (door eerder de koning of toren te bewegen) maar handmatig hun stukken herpositioneert om een vergelijkbare koningsveiligheidsopstelling te bereiken over meerdere zetten."
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
          { en: "1.Nf3 d5 2.c4, hypermodern approach", es: "1.Cf3 d5 2.c4, enfoque hipermoderno", de: "1.Sf3 d5 2.c4, hypermoderner Ansatz", nl: "1.Pf3 d5 2.c4, hypermoderne benadering" },
          { en: "Aggressive pawn storm", es: "Tormenta de peones agresiva", de: "Aggressiver Bauernsturm", nl: "Agressieve pionstorm" },
          { en: "Early queen trade", es: "Cambio temprano de reinas", de: "Früher Damentausch", nl: "Vroege dameruil" },
          { en: "King's Indian setup", es: "Configuración india de rey", de: "Königsindische Aufstellung", nl: "Koningsindische opstelling" }
        ],
        correct: 0,
        explanation: {
          en: "The Reti Opening (1.Nf3 d5 2.c4) is a hypermodern opening that attacks Black's center from the sides rather than occupying it directly with pawns, offering flexible development options.",
          es: "La Apertura Reti (1.Cf3 d5 2.c4) es una apertura hipermoderna que ataca el centro de las negras desde los lados en lugar de ocuparlo directamente con peones, ofreciendo opciones de desarrollo flexibles.",
          de: "Die Réti-Eröffnung (1.Sf3 d5 2.c4) ist eine hypermoderne Eröffnung, die Schwarz' Zentrum von den Seiten angreift, anstatt es direkt mit Bauern zu besetzen, und flexible Entwicklungsoptionen bietet.",
          nl: "De Reti Opening (1.Pf3 d5 2.c4) is een hypermoderne opening die zwarts centrum vanuit de zijkanten aanvalt in plaats van het direct met pionnen te bezetten, wat flexibele ontwikkelingsopties biedt."
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
