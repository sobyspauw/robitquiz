// Quiz Template - Level 8: Bord spelletjes - Schaken
(function() {
  const level8 = {
    name: {
      en: "Chess",
      es: "Ajedrez",
      de: "Schach",
      nl: "Schaken"
    },
    questions: [
      {
        question: {
          en: "What is the Maroczy Bind pawn structure?",
          es: "¿Qué es la estructura de peones del Bind de Maroczy?",
          de: "Was ist die Maroczy-Bindung Bauernstruktur?",
          nl: "Wat is de Maroczy Bind pionstructuur?"
        },
        options: [
          { en: "White pawns on c4 and e4 controlling d5 square", es: "Peones blancos en c4 y e4 controlando la casilla d5", de: "Weiße Bauern auf c4 und e4 kontrollieren das d5-Feld", nl: "Witte pionnen op c4 en e4 die het d5-veld controleren" },
          { en: "Doubled pawns on the c-file", es: "Peones doblados en la columna c", de: "Doppelbauern auf der c-Linie", nl: "Verdubbelde pionnen op de c-rij" },
          { en: "Central pawn chain", es: "Cadena de peones centrales", de: "Zentrale Bauernkette", nl: "Centrale pionketen" },
          { en: "Isolated queen pawn", es: "Peón de dama aislado", de: "Isolierter Damenbauer", nl: "Geïsoleerde damepion" }
        ],
        correct: 0,
        explanation: {
          en: "The Maroczy Bind features White's pawns on c4 and e4, controlling the crucial d5 square and restricting Black's piece mobility. It often arises against the Sicilian Defense and gives White a lasting space advantage while limiting Black's counterplay.",
          es: "El Bind de Maroczy presenta los peones blancos en c4 y e4, controlando la crucial casilla d5 y restringiendo la movilidad de piezas de las negras. A menudo surge contra la Defensa Siciliana y le da a las blancas una ventaja de espacio duradera mientras limita el contrajuego de las negras.",
          de: "Die Maroczy-Bindung zeigt Weiß' Bauern auf c4 und e4, die das entscheidende d5-Feld kontrollieren und Schwarz' Figurenmobilität einschränken. Sie entsteht oft gegen die Sizilianische Verteidigung und gibt Weiß einen dauerhaften Raumvorteil, während sie Schwarz' Gegenspiel begrenzt.",
          nl: "De Maroczy Bind heeft wit's pionnen op c4 en e4, die het cruciale d5-veld controleren en zwart's stukmobiliteit beperken. Het ontstaat vaak tegen de Siciliaanse Verdediging en geeft wit een blijvend ruimtevoordeel terwijl het zwart's tegenspel beperkt."
        }
      },
      {
        question: {
          en: "What is a 'bad bishop' in positional chess?",
          es: "¿Qué es un 'alfil malo' en ajedrez posicional?",
          de: "Was ist ein 'schlechter Läufer' im positionellen Schach?",
          nl: "Wat is een 'slechte loper' in positioneel schaken?"
        },
        options: [
          { en: "A bishop blocked by its own pawns fixed on the same color", es: "Un alfil bloqueado por sus propios peones fijados en el mismo color", de: "Ein Läufer blockiert von eigenen Bauern auf derselben Farbe", nl: "Een loper geblokkeerd door zijn eigen pionnen op dezelfde kleur" },
          { en: "A bishop on the edge of the board", es: "Un alfil en el borde del tablero", de: "Ein Läufer am Brettrand", nl: "Een loper aan de rand van het bord" },
          { en: "A bishop that hasn't moved", es: "Un alfil que no se ha movido", de: "Ein Läufer der sich nicht bewegt hat", nl: "Een loper die niet heeft bewogen" },
          { en: "A bishop worth less than a knight", es: "Un alfil que vale menos que un caballo", de: "Ein Läufer weniger wert als ein Springer", nl: "Een loper minder waard dan een paard" }
        ],
        correct: 0,
        explanation: {
          en: "A bad bishop is one blocked by its own pawns that are fixed on the same color squares as the bishop moves on. This severely limits the bishop's mobility and effectiveness. The French Defense often gives Black a bad light-squared bishop.",
          es: "Un alfil malo es uno bloqueado por sus propios peones que están fijados en las casillas del mismo color en las que se mueve el alfil. Esto limita severamente la movilidad y efectividad del alfil. La Defensa Francesa a menudo le da a las negras un alfil malo de casillas claras.",
          de: "Ein schlechter Läufer ist einer, der von eigenen Bauern blockiert wird, die auf denselben Farbfeldern fixiert sind, auf denen sich der Läufer bewegt. Dies begrenzt die Mobilität und Effektivität des Läufers stark. Die Französische Verteidigung gibt Schwarz oft einen schlechten Weißfeldläufer.",
          nl: "Een slechte loper is er een die geblokkeerd wordt door zijn eigen pionnen die gefixeerd zijn op dezelfde kleurvelden waarop de loper beweegt. Dit beperkt de mobiliteit en effectiviteit van de loper sterk. De Franse Verdediging geeft zwart vaak een slechte lichtvelderen loper."
        }
      },
      {
        question: {
          en: "What is the Sveshnikov Variation strategic concept?",
          es: "¿Cuál es el concepto estratégico de la Variación Sveshnikov?",
          de: "Was ist das strategische Konzept der Sweschnikow-Variante?",
          nl: "Wat is het strategische concept van de Sveshnikov Variant?"
        },
        options: [
          { en: "Accept structural weaknesses for dynamic piece play", es: "Aceptar debilidades estructurales por juego de piezas dinámico", de: "Strukturelle Schwächen für dynamisches Figurenspiel akzeptieren", nl: "Structurele zwaktes accepteren voor dynamisch stukspel" },
          { en: "Build a perfect pawn structure", es: "Construir una estructura de peones perfecta", de: "Eine perfekte Bauernstruktur aufbauen", nl: "Een perfecte pionstructuur bouwen" },
          { en: "Trade all minor pieces", es: "Intercambiar todas las piezas menores", de: "Alle Leichtfiguren tauschen", nl: "Alle lichte stukken ruilen" },
          { en: "Castle queenside immediately", es: "Enrocar largo inmediatamente", de: "Sofort lang rochieren", nl: "Onmiddellijk lang rokeren" }
        ],
        correct: 0,
        explanation: {
          en: "The Sveshnikov accepts permanent structural weaknesses (backward d6 pawn, hole on d5) in exchange for active piece play, especially the strong knight on e5 and potential for counterattacks. It represents modern dynamic chess thinking where piece activity compensates for structural defects.",
          es: "La Sveshnikov acepta debilidades estructurales permanentes (peón d6 retrasado, agujero en d5) a cambio de juego de piezas activo, especialmente el caballo fuerte en e5 y potencial para contrataques. Representa el pensamiento del ajedrez dinámico moderno donde la actividad de piezas compensa los defectos estructurales.",
          de: "Die Sweschnikow akzeptiert permanente strukturelle Schwächen (zurückgebliebener d6-Bauer, Loch auf d5) im Austausch für aktives Figurenspiel, besonders den starken Springer auf e5 und Potenzial für Gegenangriffe. Sie repräsentiert modernes dynamisches Schachdenken, wo Figurenaktivität strukturelle Mängel kompensiert.",
          nl: "De Sveshnikov accepteert permanente structurele zwaktes (achtergebleven d6-pion, gat op d5) in ruil voor actief stukspel, vooral het sterke paard op e5 en potentieel voor tegenaanvallen. Het vertegenwoordigt modern dynamisch schaakdenken waarbij stukactiviteit structurele gebreken compenseert."
        }
      },
      {
        question: {
          en: "What is a 'prophylactic move' in advanced strategy?",
          es: "¿Qué es un 'movimiento profiláctico' en estrategia avanzada?",
          de: "Was ist ein 'prophylaktischer Zug' in fortgeschrittener Strategie?",
          nl: "Wat is een 'profylactische zet' in geavanceerde strategie?"
        },
        options: [
          { en: "A move that prevents opponent's plans before they execute them", es: "Un movimiento que previene los planes del oponente antes de que los ejecute", de: "Ein Zug, der die Pläne des Gegners verhindert bevor sie ausgeführt werden", nl: "Een zet die de plannen van de tegenstander voorkomt voordat ze worden uitgevoerd" },
          { en: "Protecting the king early", es: "Proteger al rey temprano", de: "Den König früh schützen", nl: "De koning vroeg beschermen" },
          { en: "Preventing checkmate", es: "Prevenir el jaque mate", de: "Matt verhindern", nl: "Schaakmat voorkomen" },
          { en: "Trading pieces for safety", es: "Intercambiar piezas por seguridad", de: "Figuren für Sicherheit tauschen", nl: "Stukken ruilen voor veiligheid" }
        ],
        correct: 0,
        explanation: {
          en: "Prophylaxis, introduced by Nimzowitsch and perfected by Karpov and Petrosian, involves anticipating and preventing opponent's threats before they materialize. Rather than pursuing your own plans, you restrict what your opponent can do, limiting their options and controlling the game's flow.",
          es: "La profilaxis, introducida por Nimzowitsch y perfeccionada por Karpov y Petrosian, implica anticipar y prevenir las amenazas del oponente antes de que se materialicen. En lugar de perseguir tus propios planes, restringes lo que tu oponente puede hacer, limitando sus opciones y controlando el flujo del juego.",
          de: "Prophylaxe, eingeführt von Nimzowitsch und perfektioniert von Karpow und Petrosjan, beinhaltet das Antizipieren und Verhindern gegnerischer Bedrohungen, bevor sie sich materialisieren. Anstatt eigene Pläne zu verfolgen, beschränken Sie, was Ihr Gegner tun kann, begrenzen seine Optionen und kontrollieren den Spielfluss.",
          nl: "Profylaxe, geïntroduceerd door Nimzowitsch en geperfectioneerd door Karpov en Petrosian, houdt in dat bedreigingen van de tegenstander worden geanticipeerd en voorkomen voordat ze zich materialiseren. In plaats van je eigen plannen na te streven, beperk je wat je tegenstander kan doen, beperk je hun opties en controleer je het verloop van het spel."
        }
      },
      {
        question: {
          en: "What is 'dynamic imbalance' in modern chess?",
          es: "¿Qué es el 'desequilibrio dinámico' en ajedrez moderno?",
          de: "Was ist 'dynamisches Ungleichgewicht' im modernen Schach?",
          nl: "Wat is 'dynamische onbalans' in modern schaken?"
        },
        options: [
          { en: "Different types of advantages that don't directly compare", es: "Diferentes tipos de ventajas que no se comparan directamente", de: "Verschiedene Arten von Vorteilen die sich nicht direkt vergleichen lassen", nl: "Verschillende soorten voordelen die niet direct vergelijken" },
          { en: "Material imbalance only", es: "Solo desequilibrio de material", de: "Nur materielles Ungleichgewicht", nl: "Alleen materiële onbalans" },
          { en: "Time pressure situations", es: "Situaciones de presión de tiempo", de: "Zeitdruck-Situationen", nl: "Tijddruksituaties" },
          { en: "Unstable pawn structures", es: "Estructuras de peones inestables", de: "Instabile Bauernstrukturen", nl: "Instabiele pionstructuren" }
        ],
        correct: 0,
        explanation: {
          en: "Dynamic imbalance refers to positions where each side has different types of advantages that can't be directly compared - for example, one side has material while the other has initiative, or one has better structure while the other has active pieces. These complex positions require deep understanding of compensation.",
          es: "El desequilibrio dinámico se refiere a posiciones donde cada bando tiene diferentes tipos de ventajas que no se pueden comparar directamente - por ejemplo, un bando tiene material mientras el otro tiene iniciativa, o uno tiene mejor estructura mientras el otro tiene piezas activas. Estas posiciones complejas requieren una comprensión profunda de la compensación.",
          de: "Dynamisches Ungleichgewicht bezieht sich auf Stellungen, wo jede Seite verschiedene Arten von Vorteilen hat, die sich nicht direkt vergleichen lassen - zum Beispiel eine Seite hat Material während die andere Initiative hat, oder eine hat bessere Struktur während die andere aktive Figuren hat. Diese komplexen Stellungen erfordern tiefes Verständnis von Kompensation.",
          nl: "Dynamische onbalans verwijst naar posities waarbij elke kant verschillende soorten voordelen heeft die niet direct kunnen worden vergeleken - bijvoorbeeld één kant heeft materiaal terwijl de ander initiatief heeft, of één heeft betere structuur terwijl de ander actieve stukken heeft. Deze complexe posities vereisen een diep begrip van compensatie."
        }
      },
      {
        question: {
          en: "What is the 'Dragon Variation' in the Sicilian Defense?",
          es: "¿Qué es la 'Variación del Dragón' en la Defensa Siciliana?",
          de: "Was ist die 'Drachen-Variante' in der Sizilianischen Verteidigung?",
          nl: "Wat is de 'Draak Variant' in de Siciliaanse Verdediging?"
        },
        options: [
          { en: "Black fianchettoes the kingside bishop creating a dragon-shaped pawn structure", es: "Las negras hacen fianchetto del alfil de rey creando una estructura de peones en forma de dragón", de: "Schwarz fianchettiert den Königsläufer und schafft eine drachenförmige Bauernstruktur", nl: "Zwart fianchetto's de koningsloper waardoor een draak-vormige pionstructuur ontstaat" },
          { en: "An aggressive queen sortie", es: "Una salida agresiva de la dama", de: "Ein aggressiver Damenausfall", nl: "Een aggressieve dame-uitval" },
          { en: "A central pawn break", es: "Una ruptura de peón central", de: "Ein zentraler Bauerndurchbruch", nl: "Een centrale piondoorbraak" },
          { en: "Castling long", es: "Enroque largo", de: "Lange Rochade", nl: "Lang rokeren" }
        ],
        correct: 0,
        explanation: {
          en: "The Dragon Variation features ...g6 and ...Bg7, with the fianchettoed bishop resembling a dragon's eye watching the long diagonal. It leads to sharp, tactical positions with opposite-side castling attacks.",
          es: "La Variación del Dragón presenta ...g6 y ...Ag7, con el alfil en fianchetto que se asemeja al ojo de un dragón vigilando la diagonal larga. Conduce a posiciones agudas y tácticas con ataques de enroque en lados opuestos.",
          de: "Die Drachen-Variante zeigt ...g6 und ...Lg7, wobei der fianchettierte Läufer einem Drachenauge ähnelt, das die lange Diagonale bewacht. Sie führt zu scharfen, taktischen Stellungen mit Angriffen bei gegenüberliegenden Rochaden.",
          nl: "De Draak Variant heeft ...g6 en ...Lg7, waarbij de gefianchetteerde loper lijkt op een drakenoog dat de lange diagonaal bewaakt. Het leidt tot scherpe, tactische posities met aanvallen aan tegenovergestelde kanten na rokeren."
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
          { en: "Alternative advantages that balance material disadvantage", es: "Ventajas alternativas que equilibran la desventaja material", de: "Alternative Vorteile, die den materiellen Nachteil ausgleichen", nl: "Alternatieve voordelen die materieel nadeel compenseren" },
          { en: "Trading pieces equally", es: "Intercambiar piezas por igual", de: "Figuren gleichwertig tauschen", nl: "Stukken gelijkwaardig ruilen" },
          { en: "Gaining material back", es: "Recuperar material", de: "Material zurückgewinnen", nl: "Materiaal terugwinnen" },
          { en: "Offering a draw", es: "Ofrecer tablas", de: "Remis anbieten", nl: "Remise aanbieden" }
        ],
        correct: 0,
        explanation: {
          en: "Compensation refers to positional or tactical advantages (like initiative, piece activity, attack, or pawn structure) that offset a material deficit. It's common in gambits and sacrifices.",
          es: "La compensación se refiere a ventajas posicionales o tácticas (como iniciativa, actividad de piezas, ataque o estructura de peones) que compensan un déficit material. Es común en gambitos y sacrificios.",
          de: "Kompensation bezieht sich auf positionelle oder taktische Vorteile (wie Initiative, Figurenaktivität, Angriff oder Bauernstruktur), die ein materielles Defizit ausgleichen. Es ist üblich bei Gambits und Opfern.",
          nl: "Compensatie verwijst naar positionele of tactische voordelen (zoals initiatief, stukactiviteit, aanval of pionstructuur) die een materieel tekort compenseren. Het is gebruikelijk bij gambieten en offers."
        }
      },
      {
        question: {
          en: "What is the 'poisoned pawn' in the Najdorf?",
          es: "¿Qué es el 'peón envenenado' en la Najdorf?",
          de: "Was ist der 'vergiftete Bauer' in der Najdorf?",
          nl: "Wat is de 'vergiftigde pion' in de Najdorf?"
        },
        options: [
          { en: "Black captures the b2 pawn with the queen, risking a dangerous attack", es: "Las negras capturan el peón b2 con la dama, arriesgándose a un ataque peligroso", de: "Schwarz schlägt den b2-Bauern mit der Dame, riskiert einen gefährlichen Angriff", nl: "Zwart slaat de b2-pion met de dame, met het risico op een gevaarlijke aanval" },
          { en: "A trapped pawn", es: "Un peón atrapado", de: "Ein gefangener Bauer", nl: "Een gevangen pion" },
          { en: "A pawn sacrifice", es: "Un sacrificio de peón", de: "Ein Bauernopfer", nl: "Een pionoffer" },
          { en: "A defensive pawn", es: "Un peón defensivo", de: "Ein defensiver Bauer", nl: "Een defensieve pion" }
        ],
        correct: 0,
        explanation: {
          en: "In the Najdorf Variation, Black can capture White's b2 pawn with ...Qxb2. It's called 'poisoned' because accepting it risks a ferocious attack, though modern theory shows Black can survive with precise play.",
          es: "En la Variación Najdorf, las negras pueden capturar el peón b2 de las blancas con ...Dxb2. Se llama 'envenenado' porque aceptarlo arriesga un ataque feroz, aunque la teoría moderna muestra que las negras pueden sobrevivir con juego preciso.",
          de: "In der Najdorf-Variante kann Schwarz den b2-Bauern von Weiß mit ...Dxb2 schlagen. Er wird 'vergiftet' genannt, weil die Annahme einen heftigen Angriff riskiert, obwohl die moderne Theorie zeigt, dass Schwarz mit präzisem Spiel überleben kann.",
          nl: "In de Najdorf Variant kan zwart de b2-pion van wit slaan met ...Dxb2. Het wordt 'vergiftigd' genoemd omdat accepteren een felle aanval riskeert, hoewel moderne theorie toont dat zwart kan overleven met nauwkeurig spel."
        }
      },
      {
        question: {
          en: "What is the 'Berlin Defense'?",
          es: "¿Qué es la 'Defensa Berlinesa'?",
          de: "Was ist die 'Berliner Verteidigung'?",
          nl: "Wat is de 'Berlijnse Verdediging'?"
        },
        options: [
          { en: "A solid Ruy Lopez variation with ...Nf6 leading to early queen trades", es: "Una variación sólida del Ruy López con ...Cf6 que conduce a cambios tempranos de damas", de: "Eine solide Spanische-Partie-Variante mit ...Sf6, die zu frühen Damentauschen führt", nl: "Een solide Spaanse Partij variant met ...Pf6 die leidt tot vroege dameruilen" },
          { en: "An aggressive opening", es: "Una apertura agresiva", de: "Eine aggressive Eröffnung", nl: "Een aggressieve opening" },
          { en: "A gambit variation", es: "Una variación de gambito", de: "Eine Gambit-Variante", nl: "Een gambietvariant" },
          { en: "A closed defense", es: "Una defensa cerrada", de: "Eine geschlossene Verteidigung", nl: "Een gesloten verdediging" }
        ],
        correct: 0,
        explanation: {
          en: "The Berlin Defense (3...Nf6 in the Ruy Lopez) became popular after Kramnik used it successfully against Kasparov in 2000. It often leads to an endgame after 4.O-O Nxe4 5.d4 Nd6 6.Bxc6 dxc6 7.dxe5 Nf5 8.Qxd8+ Kxd8.",
          es: "La Defensa Berlinesa (3...Cf6 en el Ruy López) se popularizó después de que Kramnik la usara con éxito contra Kasparov en 2000. A menudo conduce a un final después de 4.O-O Cxe4 5.d4 Cd6 6.Axc6 dxc6 7.dxe5 Cf5 8.Dxd8+ Rxd8.",
          de: "Die Berliner Verteidigung (3...Sf6 in der Spanischen Partie) wurde populär, nachdem Kramnik sie 2000 erfolgreich gegen Kasparov einsetzte. Sie führt oft zu einem Endspiel nach 4.O-O Sxe4 5.d4 Sd6 6.Lxc6 dxc6 7.dxe5 Sf5 8.Dxd8+ Kxd8.",
          nl: "De Berlijnse Verdediging (3...Pf6 in de Spaanse Partij) werd populair nadat Kramnik het in 2000 succesvol gebruikte tegen Kasparov. Het leidt vaak tot een eindspel na 4.O-O Pxe4 5.d4 Pd6 6.Lxc6 dxc6 7.dxe5 Pf5 8.Dxd8+ Kxd8."
        }
      },
      {
        question: {
          en: "What is 'tempo' in chess?",
          es: "¿Qué es 'tempo' en ajedrez?",
          de: "Was ist 'Tempo' im Schach?",
          nl: "Wat is 'tempo' in schaken?"
        },
        options: [
          { en: "A unit of time measured in moves, gaining or losing development", es: "Una unidad de tiempo medida en movimientos, ganando o perdiendo desarrollo", de: "Eine in Zügen gemessene Zeiteinheit, Entwicklungsvorsprung gewinnen oder verlieren", nl: "Een tijdseenheid gemeten in zetten, ontwikkeling winnen of verliezen" },
          { en: "The speed of play", es: "La velocidad de juego", de: "Die Spielgeschwindigkeit", nl: "De speelsnelheid" },
          { en: "Time on the clock", es: "Tiempo en el reloj", de: "Zeit auf der Uhr", nl: "Tijd op de klok" },
          { en: "A quick checkmate", es: "Un jaque mate rápido", de: "Ein schnelles Matt", nl: "Een snel schaakmat" }
        ],
        correct: 0,
        explanation: {
          en: "Tempo refers to the advantage of making useful developing moves while the opponent makes less useful or repetitive moves. Gaining a tempo means developing more efficiently, while losing a tempo means wasting moves.",
          es: "Tempo se refiere a la ventaja de hacer movimientos de desarrollo útiles mientras el oponente hace movimientos menos útiles o repetitivos. Ganar un tempo significa desarrollarse más eficientemente, mientras que perder un tempo significa desperdiciar movimientos.",
          de: "Tempo bezieht sich auf den Vorteil, nützliche Entwicklungszüge zu machen, während der Gegner weniger nützliche oder wiederholte Züge macht. Ein Tempo gewinnen bedeutet effizienter zu entwickeln, während ein Tempo verlieren bedeutet, Züge zu verschwenden.",
          nl: "Tempo verwijst naar het voordeel van het maken van nuttige ontwikkelingszetten terwijl de tegenstander minder nuttige of herhalende zetten doet. Een tempo winnen betekent efficiënter ontwikkelen, terwijl een tempo verliezen betekent zetten verspillen."
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
          { en: "Black sacrifices a pawn with ...d5 for active piece play and attack", es: "Las negras sacrifican un peón con ...d5 para juego de piezas activo y ataque", de: "Schwarz opfert einen Bauern mit ...d5 für aktives Figurenspiel und Angriff", nl: "Zwart offert een pion met ...d5 voor actief stukspel en aanval" },
          { en: "White attacks the kingside", es: "Las blancas atacan el flanco de rey", de: "Weiß greift den Königsflügel an", nl: "Wit valt de koningsvleugel aan" },
          { en: "A defensive setup", es: "Una configuración defensiva", de: "Eine defensive Aufstellung", nl: "Een defensieve opstelling" },
          { en: "Trading all pieces", es: "Cambiar todas las piezas", de: "Alle Figuren tauschen", nl: "Alle stukken ruilen" }
        ],
        correct: 0,
        explanation: {
          en: "The Marshall Attack (8...d5) is a famous gambit where Black sacrifices a central pawn for long-lasting initiative and attacking chances. Frank Marshall first used it against Capablanca in 1918.",
          es: "El Ataque Marshall (8...d5) es un famoso gambito donde las negras sacrifican un peón central por iniciativa duradera y oportunidades de ataque. Frank Marshall lo usó por primera vez contra Capablanca en 1918.",
          de: "Der Marshall-Angriff (8...d5) ist ein berühmtes Gambit, bei dem Schwarz einen zentralen Bauern für langanhaltende Initiative und Angriffschancen opfert. Frank Marshall verwendete ihn erstmals 1918 gegen Capablanca.",
          nl: "De Marshall Aanval (8...d5) is een beroemd gambiet waarbij zwart een centrale pion offert voor langdurig initiatief en aanvalskansen. Frank Marshall gebruikte het voor het eerst in 1918 tegen Capablanca."
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
          { en: "Giving up a rook for a minor piece (bishop or knight)", es: "Entregar una torre por una pieza menor (alfil o caballo)", de: "Einen Turm für eine Leichtfigur (Läufer oder Springer) opfern", nl: "Een toren opgeven voor een licht stuk (loper of paard)" },
          { en: "Trading queens", es: "Cambiar damas", de: "Damen tauschen", nl: "Dames ruilen" },
          { en: "Sacrificing a pawn", es: "Sacrificar un peón", de: "Einen Bauern opfern", nl: "Een pion offeren" },
          { en: "Giving up the queen", es: "Entregar la dama", de: "Die Dame opfern", nl: "De dame opgeven" }
        ],
        correct: 0,
        explanation: {
          en: "An exchange sacrifice involves giving up a rook (worth about 5 points) for a bishop or knight (worth about 3 points) to gain positional compensation, disrupt the opponent's structure, or create tactical opportunities.",
          es: "Un sacrificio de calidad implica entregar una torre (vale unos 5 puntos) por un alfil o caballo (vale unos 3 puntos) para ganar compensación posicional, interrumpir la estructura del oponente o crear oportunidades tácticas.",
          de: "Ein Qualitätsopfer beinhaltet das Opfern eines Turms (etwa 5 Punkte wert) für einen Läufer oder Springer (etwa 3 Punkte wert), um positionelle Kompensation zu erlangen, die gegnerische Struktur zu stören oder taktische Möglichkeiten zu schaffen.",
          nl: "Een kwaliteitsoffer houdt in dat een toren (ongeveer 5 punten waard) wordt opgegeven voor een loper of paard (ongeveer 3 punten waard) om positionele compensatie te krijgen, de structuur van de tegenstander te verstoren of tactische kansen te creëren."
        }
      },
      {
        question: {
          en: "What is the 'Botvinnik System'?",
          es: "¿Qué es el 'Sistema Botvinnik'?",
          de: "Was ist das 'Botvinnik-System'?",
          nl: "Wat is het 'Botvinnik Systeem'?"
        },
        options: [
          { en: "A setup in the Semi-Slav with early queenside castling", es: "Una configuración en la Semi-Eslava con enroque largo temprano", de: "Eine Aufstellung in der Halbslawischen mit früher langer Rochade", nl: "Een opstelling in het Semi-Slavisch met vroeg lang rokeren" },
          { en: "A type of endgame", es: "Un tipo de final", de: "Eine Art Endspiel", nl: "Een soort eindspel" },
          { en: "A training method", es: "Un método de entrenamiento", de: "Eine Trainingsmethode", nl: "Een trainingsmethode" },
          { en: "An opening for White only", es: "Una apertura solo para blancas", de: "Eine Eröffnung nur für Weiß", nl: "Een opening alleen voor wit" }
        ],
        correct: 0,
        explanation: {
          en: "The Botvinnik System in the Semi-Slav Defense features aggressive development with ...Bd6, ...O-O-O, and typically ...e5, leading to sharp tactical battles. Named after World Champion Mikhail Botvinnik.",
          es: "El Sistema Botvinnik en la Defensa Semi-Eslava presenta un desarrollo agresivo con ...Ad6, ...O-O-O, y típicamente ...e5, llevando a batallas tácticas agudas. Nombrado en honor al Campeón Mundial Mikhail Botvinnik.",
          de: "Das Botvinnik-System in der Halbslawischen Verteidigung zeigt aggressive Entwicklung mit ...Ld6, ...O-O-O, und typischerweise ...e5, was zu scharfen taktischen Kämpfen führt. Benannt nach Weltmeister Michail Botwinnik.",
          nl: "Het Botvinnik Systeem in de Semi-Slavische Verdediging heeft een aggressieve ontwikkeling met ...Ld6, ...O-O-O, en meestal ...e5, wat leidt tot scherpe tactische gevechten. Vernoemd naar Wereldkampioen Michail Botvinnik."
        }
      },
      {
        question: {
          en: "What is a 'fortress' in chess endgames?",
          es: "¿Qué es una 'fortaleza' en los finales de ajedrez?",
          de: "Was ist eine 'Festung' in Schachendspielen?",
          nl: "Wat is een 'fort' in schaakeindspelen?"
        },
        options: [
          { en: "A defensive setup that prevents the stronger side from winning", es: "Una configuración defensiva que impide que el bando más fuerte gane", de: "Eine defensive Aufstellung, die die stärkere Seite am Gewinnen hindert", nl: "Een defensieve opstelling die voorkomt dat de sterkere partij wint" },
          { en: "A pawn chain", es: "Una cadena de peones", de: "Eine Bauernkette", nl: "Een pionketen" },
          { en: "King safety in the opening", es: "Seguridad del rey en la apertura", de: "Königssicherheit in der Eröffnung", nl: "Koningsveiligheid in de opening" },
          { en: "A winning position", es: "Una posición ganadora", de: "Eine Gewinnstellung", nl: "Een winnende positie" }
        ],
        correct: 0,
        explanation: {
          en: "A fortress is an endgame position where the defending side, though materially behind, can construct an impregnable defensive setup that prevents the opponent from making progress, resulting in a draw.",
          es: "Una fortaleza es una posición de final donde el bando defensor, aunque materialmente detrás, puede construir una configuración defensiva inexpugnable que impide que el oponente progrese, resultando en tablas.",
          de: "Eine Festung ist eine Endspielstellung, in der die verteidigende Seite, obwohl materiell im Rückstand, eine uneinnehmbare defensive Aufstellung errichten kann, die den Gegner am Fortschritt hindert und zu einem Remis führt.",
          nl: "Een fort is een eindspelpositie waarbij de verdedigende partij, hoewel materieel achter, een oninneembare defensieve opstelling kan bouwen die voorkomt dat de tegenstander vooruitgang boekt, wat resulteert in remise."
        }
      },
      {
        question: {
          en: "What is the 'Tarrasch Defense'?",
          es: "¿Qué es la 'Defensa Tarrasch'?",
          de: "Was ist die 'Tarrasch-Verteidigung'?",
          nl: "Wat is de 'Tarrasch Verdediging'?"
        },
        options: [
          { en: "A Queen's Gambit Declined variation with ...c5", es: "Una variación del Gambito de Dama Rehusado con ...c5", de: "Eine Variante des abgelehnten Damengambits mit ...c5", nl: "Een Geweigerd Damegambiet variant met ...c5" },
          { en: "An aggressive kingside attack", es: "Un ataque agresivo en el flanco de rey", de: "Ein aggressiver Königsflügelangriff", nl: "Een aggressieve koningsvleugel aanval" },
          { en: "A French Defense variation", es: "Una variación de la Defensa Francesa", de: "Eine Variante der Französischen Verteidigung", nl: "Een variant van de Franse Verdediging" },
          { en: "An endgame technique", es: "Una técnica de final", de: "Eine Endspiel-Technik", nl: "Een eindspeltechniek" }
        ],
        correct: 0,
        explanation: {
          en: "The Tarrasch Defense (1.d4 d5 2.c4 e6 3.Nc3 c5) challenges White's center immediately. Black accepts an isolated queen's pawn in return for active piece play. Named after Siegbert Tarrasch.",
          es: "La Defensa Tarrasch (1.d4 d5 2.c4 e6 3.Cc3 c5) desafía el centro de las blancas inmediatamente. Las negras aceptan un peón de dama aislado a cambio de juego de piezas activo. Nombrada en honor a Siegbert Tarrasch.",
          de: "Die Tarrasch-Verteidigung (1.d4 d5 2.c4 e6 3.Sc3 c5) fordert Weiß' Zentrum sofort heraus. Schwarz akzeptiert einen isolierten Damenbauern im Gegenzug für aktives Figurenspiel. Benannt nach Siegbert Tarrasch.",
          nl: "De Tarrasch Verdediging (1.d4 d5 2.c4 e6 3.Pc3 c5) daagt het centrum van wit onmiddellijk uit. Zwart accepteert een geïsoleerde damepion in ruil voor actief stukspel. Vernoemd naar Siegbert Tarrasch."
        }
      },
      {
        question: {
          en: "What is 'overloading' as a tactical motif?",
          es: "¿Qué es 'sobrecargar' como motivo táctico?",
          de: "Was ist 'Überlastung' als taktisches Motiv?",
          nl: "Wat is 'overbelasten' als tactisch motief?"
        },
        options: [
          { en: "A piece has too many defensive duties and cannot fulfill them all", es: "Una pieza tiene demasiados deberes defensivos y no puede cumplirlos todos", de: "Eine Figur hat zu viele defensive Aufgaben und kann sie nicht alle erfüllen", nl: "Een stuk heeft te veel verdedigende taken en kan ze niet allemaal vervullen" },
          { en: "Having too many pieces", es: "Tener demasiadas piezas", de: "Zu viele Figuren haben", nl: "Te veel stukken hebben" },
          { en: "Playing too aggressively", es: "Jugar demasiado agresivamente", de: "Zu aggressiv spielen", nl: "Te aggressief spelen" },
          { en: "Making too many moves with one piece", es: "Hacer demasiados movimientos con una pieza", de: "Zu viele Züge mit einer Figur machen", nl: "Te veel zetten doen met één stuk" }
        ],
        correct: 0,
        explanation: {
          en: "Overloading occurs when a piece is assigned multiple defensive tasks but cannot adequately perform all of them simultaneously. An opponent can exploit this by creating threats that overwhelm the overloaded piece.",
          es: "La sobrecarga ocurre cuando una pieza tiene múltiples tareas defensivas asignadas pero no puede realizar todas adecuadamente simultáneamente. Un oponente puede explotar esto creando amenazas que abruman la pieza sobrecargada.",
          de: "Überlastung tritt auf, wenn einer Figur mehrere defensive Aufgaben zugewiesen sind, sie aber nicht alle gleichzeitig angemessen erfüllen kann. Ein Gegner kann dies ausnutzen, indem er Drohungen schafft, die die überladene Figur überfordern.",
          nl: "Overbelasten vindt plaats wanneer een stuk meerdere verdedigende taken krijgt maar ze niet allemaal tegelijkertijd adequaat kan uitvoeren. Een tegenstander kan dit uitbuiten door bedreigingen te creëren die het overbelaste stuk overweldigen."
        }
      },
      {
        question: {
          en: "What is the 'Alekhine Defense'?",
          es: "¿Qué es la 'Defensa Alekhine'?",
          de: "Was ist die 'Aljechin-Verteidigung'?",
          nl: "Wat is de 'Aljechin Verdediging'?"
        },
        options: [
          { en: "Black's knight moves to f6 provoking White's center pawns forward", es: "El caballo de las negras se mueve a f6 provocando que los peones centrales de las blancas avancen", de: "Schwarzs Springer zieht nach f6 und provoziert Weiß' Zentrumsbauern nach vorne", nl: "Zwarts paard gaat naar f6 om de centrale pionnen van wit naar voren uit te lokken" },
          { en: "A closed defense", es: "Una defensa cerrada", de: "Eine geschlossene Verteidigung", nl: "Een gesloten verdediging" },
          { en: "A queen's pawn defense", es: "Una defensa de peón de dama", de: "Eine Damenbauer-Verteidigung", nl: "Een damepionverdediging" },
          { en: "A passive defense", es: "Una defensa pasiva", de: "Eine passive Verteidigung", nl: "Een passieve verdediging" }
        ],
        correct: 0,
        explanation: {
          en: "The Alekhine Defense (1.e4 Nf6) invites White to chase the knight with pawns, building a large center that Black then aims to undermine. Named after Alexander Alekhine, it's a hypermodern opening.",
          es: "La Defensa Alekhine (1.e4 Cf6) invita a las blancas a perseguir el caballo con peones, construyendo un gran centro que las negras luego buscan socavar. Nombrada en honor a Alexander Alekhine, es una apertura hipermoderna.",
          de: "Die Aljechin-Verteidigung (1.e4 Sf6) lädt Weiß ein, den Springer mit Bauern zu jagen und ein großes Zentrum aufzubauen, das Schwarz dann zu untergraben versucht. Benannt nach Alexander Aljechin, ist es eine hypermoderne Eröffnung.",
          nl: "De Aljechin Verdediging (1.e4 Pf6) nodigt wit uit om het paard met pionnen te achtervolgen, waarbij een groot centrum wordt gebouwd dat zwart vervolgens probeert te ondermijnen. Vernoemd naar Alexander Aljechin, is het een hypermoderne opening."
        }
      },
      {
        question: {
          en: "What is a 'deflection' tactic?",
          es: "¿Qué es una táctica de 'desviación'?",
          de: "Was ist eine 'Ablenkung'-Taktik?",
          nl: "Wat is een 'afleiding' tactiek?"
        },
        options: [
          { en: "Forcing a piece away from an important square or defensive duty", es: "Forzar una pieza a alejarse de una casilla importante o deber defensivo", de: "Eine Figur von einem wichtigen Feld oder einer defensiven Aufgabe wegzwingen", nl: "Een stuk dwingen weg te gaan van een belangrijk veld of verdedigende taak" },
          { en: "Distracting the opponent", es: "Distraer al oponente", de: "Den Gegner ablenken", nl: "De tegenstander afleiden" },
          { en: "Moving pieces to different files", es: "Mover piezas a diferentes columnas", de: "Figuren auf verschiedene Linien ziehen", nl: "Stukken naar verschillende rijen verplaatsen" },
          { en: "Creating multiple threats", es: "Crear múltiples amenazas", de: "Mehrere Drohungen schaffen", nl: "Meerdere bedreigingen creëren" }
        ],
        correct: 0,
        explanation: {
          en: "Deflection is a tactic where you force an opponent's piece to leave its current square, abandoning a key defensive role or important square, often through a sacrifice or forcing move.",
          es: "La desviación es una táctica donde fuerzas a una pieza del oponente a dejar su casilla actual, abandonando un papel defensivo clave o casilla importante, a menudo mediante un sacrificio o movimiento forzado.",
          de: "Ablenkung ist eine Taktik, bei der Sie die Figur des Gegners zwingen, ihr aktuelles Feld zu verlassen und eine wichtige defensive Rolle oder ein wichtiges Feld aufzugeben, oft durch ein Opfer oder einen erzwingenden Zug.",
          nl: "Afleiding is een tactiek waarbij je een stuk van de tegenstander dwingt zijn huidige veld te verlaten, waarbij het een belangrijke verdedigende rol of belangrijk veld verlaat, vaak door een offer of forcerende zet."
        }
      },
      {
        question: {
          en: "What is the 'Grunfeld Defense'?",
          es: "¿Qué es la 'Defensa Grunfeld'?",
          de: "Was ist die 'Grünfeld-Verteidigung'?",
          nl: "Wat is de 'Grunfeld Verdediging'?"
        },
        options: [
          { en: "Black fianchettoes and then strikes at White's center with ...d5", es: "Las negras hacen fianchetto y luego atacan el centro de las blancas con ...d5", de: "Schwarz fianchettiert und schlägt dann mit ...d5 gegen Weiß' Zentrum", nl: "Zwart fianchetto's en valt dan het centrum van wit aan met ...d5" },
          { en: "An aggressive queenside expansion", es: "Una expansión agresiva en el flanco de dama", de: "Eine aggressive Damenflügel-Expansion", nl: "Een aggressieve damezijde-expansie" },
          { en: "Early queen development", es: "Desarrollo temprano de la dama", de: "Frühe Damenentwicklung", nl: "Vroege dame-ontwikkeling" },
          { en: "A closed system", es: "Un sistema cerrado", de: "Ein geschlossenes System", nl: "Een gesloten systeem" }
        ],
        correct: 0,
        explanation: {
          en: "The Grunfeld Defense (1.d4 Nf6 2.c4 g6 3.Nc3 d5) is a hypermodern opening where Black allows White to build a strong center, then attacks it with pieces and the ...d5 pawn break. Named after Ernst Grunfeld.",
          es: "La Defensa Grunfeld (1.d4 Cf6 2.c4 g6 3.Cc3 d5) es una apertura hipermoderna donde las negras permiten que las blancas construyan un centro fuerte, luego lo atacan con piezas y la ruptura de peón ...d5. Nombrada en honor a Ernst Grunfeld.",
          de: "Die Grünfeld-Verteidigung (1.d4 Sf6 2.c4 g6 3.Sc3 d5) ist eine hypermoderne Eröffnung, bei der Schwarz Weiß ein starkes Zentrum aufbauen lässt und es dann mit Figuren und dem ...d5-Bauerndurchbruch angreift. Benannt nach Ernst Grünfeld.",
          nl: "De Grunfeld Verdediging (1.d4 Pf6 2.c4 g6 3.Pc3 d5) is een hypermoderne opening waarbij zwart wit een sterk centrum laat bouwen en het vervolgens aanvalt met stukken en de ...d5 piondoorbraak. Vernoemd naar Ernst Grunfeld."
        }
      },
      {
        question: {
          en: "What is 'initiative' in chess?",
          es: "¿Qué es la 'iniciativa' en ajedrez?",
          de: "Was ist 'Initiative' im Schach?",
          nl: "Wat is 'initiatief' in schaken?"
        },
        options: [
          { en: "The advantage of making threats that dictate the opponent's responses", es: "La ventaja de hacer amenazas que dictan las respuestas del oponente", de: "Der Vorteil, Drohungen zu machen, die die Reaktionen des Gegners bestimmen", nl: "Het voordeel van het maken van bedreigingen die de reacties van de tegenstander dicteren" },
          { en: "Moving first", es: "Mover primero", de: "Zuerst ziehen", nl: "Eerst bewegen" },
          { en: "Having more pieces", es: "Tener más piezas", de: "Mehr Figuren haben", nl: "Meer stukken hebben" },
          { en: "Attacking the king", es: "Atacar al rey", de: "Den König angreifen", nl: "De koning aanvallen" }
        ],
        correct: 0,
        explanation: {
          en: "Initiative is the ability to make threats and force the opponent into a defensive posture, dictating the flow of the game. The side with initiative controls the tempo and direction of play.",
          es: "La iniciativa es la capacidad de hacer amenazas y forzar al oponente a una postura defensiva, dictando el flujo del juego. El bando con iniciativa controla el tempo y la dirección del juego.",
          de: "Initiative ist die Fähigkeit, Drohungen zu machen und den Gegner in eine defensive Haltung zu zwingen, wodurch der Spielfluss diktiert wird. Die Seite mit Initiative kontrolliert das Tempo und die Richtung des Spiels.",
          nl: "Initiatief is het vermogen om bedreigingen te maken en de tegenstander in een defensieve houding te dwingen, waarbij het verloop van het spel wordt gedicteerd. De partij met initiatief controleert het tempo en de richting van het spel."
        }
      },
      {
        question: {
          en: "What is the 'Nimzo-Indian Defense'?",
          es: "¿Qué es la 'Defensa Nimzo-India'?",
          de: "Was ist die 'Nimzo-Indische Verteidigung'?",
          nl: "Wat is de 'Nimzo-Indische Verdediging'?"
        },
        options: [
          { en: "3...Bb4 pinning knight, controlling e4 square", es: "3...Ab4 clavando caballo, controlando casilla e4", de: "3...Lb4 fesselt Springer, kontrolliert e4-Feld", nl: "3...Lb4 penning paard, controlerend e4 veld" },
          { en: "Fianchetto opening system", es: "Sistema de apertura de fianchetto", de: "Fianchetto-Eröffnungssystem", nl: "Fianchetto openingssysteem" },
          { en: "Early d5 pawn push", es: "Empuje temprano de peón d5", de: "Früher d5-Bauernstoß", nl: "Vroege d5 pionstoot" },
          { en: "Queenside castle defense", es: "Defensa de enroque largo", de: "Damenflügel-Rochade-Verteidigung", nl: "Damevleugel rokade verdediging" }
        ],
        correct: 0,
        explanation: {
          en: "The Nimzo-Indian Defense (1.d4 Nf6 2.c4 e6 3.Nc3 Bb4) pins the knight and controls e4, aiming for a flexible, solid position. Named after Aron Nimzowitsch, it's a staple at all levels of chess.",
          es: "La Defensa Nimzo-India (1.d4 Cf6 2.c4 e6 3.Cc3 Ab4) clava el caballo y controla e4, buscando una posición flexible y sólida. Nombrada en honor a Aron Nimzowitsch, es un elemento básico en todos los niveles de ajedrez.",
          de: "Die Nimzo-Indische Verteidigung (1.d4 Sf6 2.c4 e6 3.Sc3 Lb4) fesselt den Springer und kontrolliert e4, mit dem Ziel einer flexiblen, soliden Stellung. Benannt nach Aron Nimzowitsch, ist sie auf allen Schachniveaus ein Grundpfeiler.",
          nl: "De Nimzo-Indische Verdediging (1.d4 Pf6 2.c4 e6 3.Pc3 Lb4) pent het paard en controleert e4, strevend naar een flexibele, solide positie. Vernoemd naar Aron Nimzowitsch, is het een standaard op alle niveaus van schaak."
        }
      },
      {
        question: {
          en: "What is 'compensation' for sacrificed material?",
          es: "¿Qué es la 'compensación' por material sacrificado?",
          de: "Was ist 'Kompensation' für geopfertes Material?",
          nl: "Wat is 'compensatie' voor geofferd materiaal?"
        },
        options: [
          { en: "Positional advantages offsetting material deficit", es: "Ventajas posicionales que compensan déficit material", de: "Positionelle Vorteile, die Materialnachteil ausgleichen", nl: "Positionele voordelen die materieel nadeel compenseren" },
          { en: "Equal material trade", es: "Intercambio de material igual", de: "Gleichwertiger Materialtausch", nl: "Gelijke materiaalruil" },
          { en: "Regaining sacrificed pieces", es: "Recuperar piezas sacrificadas", de: "Geopferte Figuren zurückgewinnen", nl: "Geofferde stukken terugwinnen" },
          { en: "Pawn promotion", es: "Promoción de peón", de: "Bauernumwandlung", nl: "Pion promotie" }
        ],
        correct: 0,
        explanation: {
          en: "Compensation refers to positional advantages like piece activity, king safety weaknesses, control of key squares, or attacking chances that justify a material sacrifice. Good compensation can make a position fully playable or even winning despite being down material.",
          es: "La compensación se refiere a ventajas posicionales como actividad de piezas, debilidades en la seguridad del rey, control de casillas clave o posibilidades de ataque que justifican un sacrificio material. Una buena compensación puede hacer que una posición sea totalmente jugable o incluso ganadora a pesar de tener menos material.",
          de: "Kompensation bezieht sich auf positionelle Vorteile wie Figurenaktivität, Schwächen der Königssicherheit, Kontrolle wichtiger Felder oder Angriffschancen, die ein Materialopfer rechtfertigen. Gute Kompensation kann eine Stellung trotz Materialnachteils vollständig spielbar oder sogar gewinnend machen.",
          nl: "Compensatie verwijst naar positionele voordelen zoals stukactiviteit, zwaktes in koningveiligheid, controle van belangrijke velden of aanvalskansen die een materiaal offer rechtvaardigen. Goede compensatie kan een positie volledig speelbaar of zelfs winnend maken ondanks materieel achter te staan."
        }
      },
      {
        question: {
          en: "What is the 'Benoni Defense'?",
          es: "¿Qué es la 'Defensa Benoni'?",
          de: "Was ist die 'Benoni-Verteidigung'?",
          nl: "Wat is de 'Benoni Verdediging'?"
        },
        options: [
          { en: "1...c5 against d4, creating asymmetric pawn structure", es: "1...c5 contra d4, creando estructura de peones asimétrica", de: "1...c5 gegen d4, schafft asymmetrische Bauernstruktur", nl: "1...c5 tegen d4, creërend asymmetrische pionstructuur" },
          { en: "Symmetrical central setup", es: "Configuración central simétrica", de: "Symmetrische zentrale Aufstellung", nl: "Symmetrische centrale opstelling" },
          { en: "King's Indian structure", es: "Estructura India de Rey", de: "Königsindische Struktur", nl: "Koningsindische structuur" },
          { en: "Early queen trade system", es: "Sistema de cambio temprano de damas", de: "Frühes Damentausch-System", nl: "Vroeg dameruil systeem" }
        ],
        correct: 0,
        explanation: {
          en: "The Benoni Defense (1.d4 c5 or 1.d4 Nf6 2.c4 c5 3.d5) creates an asymmetric pawn structure with Black playing for counterplay on the queenside and center while White has more space. It leads to sharp, imbalanced positions.",
          es: "La Defensa Benoni (1.d4 c5 o 1.d4 Cf6 2.c4 c5 3.d5) crea una estructura de peones asimétrica con las negras jugando para contrajuego en el flanco de dama y centro mientras las blancas tienen más espacio. Conduce a posiciones agudas y desequilibradas.",
          de: "Die Benoni-Verteidigung (1.d4 c5 oder 1.d4 Sf6 2.c4 c5 3.d5) schafft eine asymmetrische Bauernstruktur, bei der Schwarz auf Gegenspiel am Damenflügel und im Zentrum spielt, während Weiß mehr Raum hat. Sie führt zu scharfen, unausgeglichenen Stellungen.",
          nl: "De Benoni Verdediging (1.d4 c5 of 1.d4 Pf6 2.c4 c5 3.d5) creëert een asymmetrische pionstructuur waarbij zwart speelt voor tegenaanval op de damevleugel en centrum terwijl wit meer ruimte heeft. Het leidt tot scherpe, onevenwichtige posities."
        }
      },
      {
        question: {
          en: "What is 'zugzwang'?",
          es: "¿Qué es 'zugzwang'?",
          de: "Was ist 'Zugzwang'?",
          nl: "Wat is 'zugzwang'?"
        },
        options: [
          { en: "Position where any move worsens your situation", es: "Posición donde cualquier movimiento empeora tu situación", de: "Stellung, in der jeder Zug die Situation verschlechtert", nl: "Positie waar elke zet je situatie verslechtert" },
          { en: "Forced checkmate sequence", es: "Secuencia de jaque mate forzada", de: "Erzwungene Matt-Sequenz", nl: "Geforceerde schaakmatreeks" },
          { en: "Stalemate position", es: "Posición de ahogado", de: "Patt-Stellung", nl: "Patpositie" },
          { en: "Time pressure situation", es: "Situación de presión de tiempo", de: "Zeitdruck-Situation", nl: "Tijddruk situatie" }
        ],
        correct: 0,
        explanation: {
          en: "Zugzwang (German for 'compulsion to move') is a situation where a player would prefer not to move but must, as any move worsens their position. It's most common in endgames and is a powerful winning technique.",
          es: "Zugzwang (alemán para 'obligación de mover') es una situación donde un jugador preferiría no mover pero debe hacerlo, ya que cualquier movimiento empeora su posición. Es más común en finales y es una técnica de ganar poderosa.",
          de: "Zugzwang ist eine Situation, in der ein Spieler lieber nicht ziehen würde, aber muss, da jeder Zug seine Stellung verschlechtert. Es ist am häufigsten in Endspielen und ist eine mächtige Gewinntechnik.",
          nl: "Zugzwang (Duits voor 'dwang om te bewegen') is een situatie waarbij een speler liever niet zou bewegen maar moet, aangezien elke zet hun positie verslechtert. Het komt het meest voor in eindspelen en is een krachtige wintechniek."
        }
      },
      {
        question: {
          en: "What is the 'Catalan Opening'?",
          es: "¿Qué es la 'Apertura Catalana'?",
          de: "Was ist die 'Katalanische Eröffnung'?",
          nl: "Wat is de 'Catalaanse Opening'?"
        },
        options: [
          { en: "d4, c4, g3 system combining Queen's Gambit and fianchetto", es: "Sistema d4, c4, g3 combinando Gambito de Dama y fianchetto", de: "d4, c4, g3 System kombiniert Damengambit und Fianchetto", nl: "d4, c4, g3 systeem combinerend Damegambiet en fianchetto" },
          { en: "Spanish opening variation", es: "Variación de apertura española", de: "Spanische Eröffnungsvariante", nl: "Spaanse opening variant" },
          { en: "Aggressive e4 opening", es: "Apertura agresiva e4", de: "Aggressive e4-Eröffnung", nl: "Agressieve e4 opening" },
          { en: "Closed Sicilian system", es: "Sistema siciliano cerrado", de: "Geschlossenes sizilianisches System", nl: "Gesloten Siciliaans systeem" }
        ],
        correct: 0,
        explanation: {
          en: "The Catalan Opening (1.d4 Nf6 2.c4 e6 3.g3) combines elements of the Queen's Gambit and the fianchettoed kingside bishop, creating long-term pressure on the queenside and center. It's named after the Catalonia region of Spain.",
          es: "La Apertura Catalana (1.d4 Cf6 2.c4 e6 3.g3) combina elementos del Gambito de Dama y el alfil en fianchetto del flanco de rey, creando presión a largo plazo en el flanco de dama y centro. Lleva el nombre de la región de Cataluña en España.",
          de: "Die Katalanische Eröffnung (1.d4 Sf6 2.c4 e6 3.g3) kombiniert Elemente des Damengambits und des fianschettierten Königsflügel-Läufers und schafft langfristigen Druck am Damenflügel und im Zentrum. Sie ist nach der Region Katalonien in Spanien benannt.",
          nl: "De Catalaanse Opening (1.d4 Pf6 2.c4 e6 3.g3) combineert elementen van het Damegambiet en de gefianchetteerde koningsvleugelloper, creërend langetermijndruk op de damevleugel en centrum. Het is vernoemd naar de regio Catalonië in Spanje."
        }
      },
      {
        question: {
          en: "What is an 'outpost' for a piece?",
          es: "¿Qué es un 'puesto avanzado' para una pieza?",
          de: "Was ist ein 'Vorposten' für eine Figur?",
          nl: "Wat is een 'voorpost' voor een stuk?"
        },
        options: [
          { en: "Strong square protected by pawn, safe from enemy pawns", es: "Casilla fuerte protegida por peón, segura de peones enemigos", de: "Starkes Feld geschützt von Bauer, sicher vor gegnerischen Bauern", nl: "Sterk veld beschermd door pion, veilig van vijandelijke pionnen" },
          { en: "Advanced pawn position", es: "Posición de peón avanzado", de: "Fortgeschrittene Bauernposition", nl: "Geavanceerde pionpositie" },
          { en: "King's defensive square", es: "Casilla defensiva del rey", de: "Defensives Feld des Königs", nl: "Defensief veld van koning" },
          { en: "Center control point", es: "Punto de control central", de: "Zentrumskontrollpunkt", nl: "Centrum controlepunt" }
        ],
        correct: 0,
        explanation: {
          en: "An outpost is a square, typically in the opponent's half, where a piece (especially a knight) can be placed and supported by a pawn while being immune to attack by enemy pawns. Outposts are strategically valuable positions.",
          es: "Un puesto avanzado es una casilla, típicamente en la mitad del oponente, donde una pieza (especialmente un caballo) puede colocarse y ser apoyada por un peón mientras es inmune al ataque de peones enemigos. Los puestos avanzados son posiciones estratégicamente valiosas.",
          de: "Ein Vorposten ist ein Feld, typischerweise in der gegnerischen Hälfte, wo eine Figur (besonders ein Springer) platziert werden und von einem Bauern unterstützt werden kann, während sie immun gegen Angriffe gegnerischer Bauern ist. Vorposten sind strategisch wertvolle Positionen.",
          nl: "Een voorpost is een veld, meestal in de helft van de tegenstander, waar een stuk (vooral een paard) kan worden geplaatst en ondersteund door een pion terwijl het immuun is voor aanvallen van vijandelijke pionnen. Voorposten zijn strategisch waardevolle posities."
        }
      },
      {
        question: {
          en: "What is the 'Queen's Indian Defense'?",
          es: "¿Qué es la 'Defensa India de Dama'?",
          de: "Was ist die 'Damenindische Verteidigung'?",
          nl: "Wat is de 'Dame-Indische Verdediging'?"
        },
        options: [
          { en: "3...b6, fianchettoing queenside bishop against d4", es: "3...b6, fianchetto del alfil de dama contra d4", de: "3...b6, Damenflügel-Läufer-Fianchetto gegen d4", nl: "3...b6, fianchetto damevleugelloper tegen d4" },
          { en: "Early queen development to a5", es: "Desarrollo temprano de dama a a5", de: "Frühe Damenentwicklung nach a5", nl: "Vroege dame-ontwikkeling naar a5" },
          { en: "Kingside fianchetto system", es: "Sistema de fianchetto de rey", de: "Königsflügel-Fianchetto-System", nl: "Koningsvleugel fianchetto systeem" },
          { en: "Central pawn advance d5", es: "Avance de peón central d5", de: "Zentraler Bauernstoß d5", nl: "Centrale pionstoot d5" }
        ],
        correct: 0,
        explanation: {
          en: "The Queen's Indian Defense (1.d4 Nf6 2.c4 e6 3.Nf3 b6) fianchettoes the queenside bishop to control the important e4 and d5 squares. It's a solid, flexible system that avoids the sharp theoretical lines of the Nimzo-Indian.",
          es: "La Defensa India de Dama (1.d4 Cf6 2.c4 e6 3.Cf3 b6) desarrolla en fianchetto el alfil de dama para controlar las importantes casillas e4 y d5. Es un sistema sólido y flexible que evita las líneas teóricas agudas de la Nimzo-India.",
          de: "Die Damenindische Verteidigung (1.d4 Sf6 2.c4 e6 3.Sf3 b6) fianchettiert den Damenflügel-Läufer, um die wichtigen Felder e4 und d5 zu kontrollieren. Es ist ein solides, flexibles System, das die scharfen theoretischen Linien der Nimzo-Indischen vermeidet.",
          nl: "De Dame-Indische Verdediging (1.d4 Pf6 2.c4 e6 3.Pf3 b6) fianchetto't de damevleugelloper om de belangrijke velden e4 en d5 te controleren. Het is een solide, flexibel systeem dat de scherpe theoretische lijnen van de Nimzo-Indische vermijdt."
        }
      },
      {
        question: {
          en: "What is a 'battery' in chess?",
          es: "¿Qué es una 'batería' en ajedrez?",
          de: "Was ist eine 'Batterie' im Schach?",
          nl: "Wat is een 'batterij' in schaak?"
        },
        options: [
          { en: "Two pieces on same line targeting same point", es: "Dos piezas en la misma línea apuntando al mismo punto", de: "Zwei Figuren auf derselben Linie zielen auf denselben Punkt", nl: "Twee stukken op dezelfde lijn gericht op hetzelfde punt" },
          { en: "Multiple pawn attacks", es: "Múltiples ataques de peones", de: "Mehrere Bauernangriffe", nl: "Meerdere pionaanvallen" },
          { en: "Doubled rooks", es: "Torres dobladas", de: "Doppelte Türme", nl: "Dubbele torens" },
          { en: "King and queen coordination", es: "Coordinación de rey y dama", de: "König-Dame-Koordination", nl: "Koning en dame coördinatie" }
        ],
        correct: 0,
        explanation: {
          en: "A battery is formed when two pieces of the same type (like two rooks or queen and rook/bishop) are placed on the same file, rank, or diagonal, creating combined attacking power. Famous examples include the queen-bishop battery on long diagonals.",
          es: "Una batería se forma cuando dos piezas del mismo tipo (como dos torres o dama y torre/alfil) se colocan en la misma columna, fila o diagonal, creando poder de ataque combinado. Ejemplos famosos incluyen la batería dama-alfil en diagonales largas.",
          de: "Eine Batterie wird gebildet, wenn zwei Figuren derselben Art (wie zwei Türme oder Dame und Turm/Läufer) auf derselben Linie, Reihe oder Diagonale platziert werden und kombinierte Angriffskraft schaffen. Berühmte Beispiele sind die Dame-Läufer-Batterie auf langen Diagonalen.",
          nl: "Een batterij wordt gevormd wanneer twee stukken van hetzelfde type (zoals twee torens of dame en toren/loper) op dezelfde lijn, rij of diagonaal worden geplaatst, waardoor gecombineerde aanvalskracht wordt gecreëerd. Beroemde voorbeelden zijn de dame-loper batterij op lange diagonalen."
        }
      },
      {
        question: {
          en: "What is the 'Bogo-Indian Defense'?",
          es: "¿Qué es la 'Defensa Bogo-India'?",
          de: "Was ist die 'Bogo-Indische Verteidigung'?",
          nl: "Wat is de 'Bogo-Indische Verdediging'?"
        },
        options: [
          { en: "3...Bb4+ when White plays Nf3 instead of Nc3", es: "3...Ab4+ cuando blancas juega Cf3 en lugar de Cc3", de: "3...Lb4+ wenn Weiß Sf3 statt Sc3 spielt", nl: "3...Lb4+ wanneer wit Pf3 speelt in plaats van Pc3" },
          { en: "Kingside fianchetto defense", es: "Defensa de fianchetto de rey", de: "Königsflügel-Fianchetto-Verteidigung", nl: "Koningsvleugel fianchetto verdediging" },
          { en: "Early d5 pawn break", es: "Ruptura temprana de peón d5", de: "Früher d5-Bauerndurchbruch", nl: "Vroege d5 piondoorbraak" },
          { en: "Symmetrical pawn structure", es: "Estructura de peones simétrica", de: "Symmetrische Bauernstruktur", nl: "Symmetrische pionstructuur" }
        ],
        correct: 0,
        explanation: {
          en: "The Bogo-Indian Defense (1.d4 Nf6 2.c4 e6 3.Nf3 Bb4+) is similar to the Nimzo-Indian but arises when White plays Nf3 instead of Nc3. It's a solid, flexible defense named after Efim Bogoljubov.",
          es: "La Defensa Bogo-India (1.d4 Cf6 2.c4 e6 3.Cf3 Ab4+) es similar a la Nimzo-India pero surge cuando las blancas juegan Cf3 en lugar de Cc3. Es una defensa sólida y flexible nombrada en honor a Efim Bogoljubov.",
          de: "Die Bogo-Indische Verteidigung (1.d4 Sf6 2.c4 e6 3.Sf3 Lb4+) ähnelt der Nimzo-Indischen, entsteht aber, wenn Weiß Sf3 statt Sc3 spielt. Es ist eine solide, flexible Verteidigung, benannt nach Efim Bogoljubow.",
          nl: "De Bogo-Indische Verdediging (1.d4 Pf6 2.c4 e6 3.Pf3 Lb4+) is vergelijkbaar met de Nimzo-Indische maar ontstaat wanneer wit Pf3 speelt in plaats van Pc3. Het is een solide, flexibele verdediging vernoemd naar Efim Bogoljubov."
        }
      },
      {
        question: {
          en: "What is 'overloading' as a tactical motif?",
          es: "¿Qué es 'sobrecargar' como motivo táctico?",
          de: "Was ist 'Überlastung' als taktisches Motiv?",
          nl: "Wat is 'overbelasten' als tactisch motief?"
        },
        options: [
          { en: "Piece defending too many things simultaneously", es: "Pieza defendiendo demasiadas cosas simultáneamente", de: "Figur verteidigt zu viele Dinge gleichzeitig", nl: "Stuk verdedigt te veel dingen tegelijkertijd" },
          { en: "Too many pieces in one area", es: "Demasiadas piezas en un área", de: "Zu viele Figuren in einem Bereich", nl: "Te veel stukken in één gebied" },
          { en: "Excessive pawn advances", es: "Avances excesivos de peones", de: "Übermäßige Bauernvorstöße", nl: "Overmatige pionopmars" },
          { en: "Multiple attacking pieces", es: "Múltiples piezas atacantes", de: "Mehrere angreifende Figuren", nl: "Meerdere aanvallende stukken" }
        ],
        correct: 0,
        explanation: {
          en: "Overloading occurs when a piece has too many defensive duties and cannot fulfill all of them. By attacking multiple targets that the same piece defends, you force it to abandon one, allowing you to capture the undefended piece or square.",
          es: "La sobrecarga ocurre cuando una pieza tiene demasiados deberes defensivos y no puede cumplirlos todos. Al atacar múltiples objetivos que la misma pieza defiende, la fuerzas a abandonar uno, permitiéndote capturar la pieza o casilla no defendida.",
          de: "Überlastung tritt auf, wenn eine Figur zu viele defensive Aufgaben hat und nicht alle erfüllen kann. Indem Sie mehrere Ziele angreifen, die dieselbe Figur verteidigt, zwingen Sie sie, eines aufzugeben, wodurch Sie die unverteidigte Figur oder das Feld schlagen können.",
          nl: "Overbelasten treedt op wanneer een stuk te veel verdedigende taken heeft en niet alle kan vervullen. Door meerdere doelen aan te vallen die hetzelfde stuk verdedigt, dwing je het er een te verlaten, waardoor je het onverdedigde stuk of veld kunt slaan."
        }
      },
      {
        question: {
          en: "What is the 'Dutch Defense'?",
          es: "¿Qué es la 'Defensa Holandesa'?",
          de: "Was ist die 'Holländische Verteidigung'?",
          nl: "Wat is de 'Hollandse Verdediging'?"
        },
        options: [
          { en: "1...f5 against d4, aggressive kingside play", es: "1...f5 contra d4, juego agresivo en flanco de rey", de: "1...f5 gegen d4, aggressives Königsflügelspiel", nl: "1...f5 tegen d4, agressief koningsvleugelspel" },
          { en: "Solid e6-d5 structure", es: "Estructura sólida e6-d5", de: "Solide e6-d5 Struktur", nl: "Solide e6-d5 structuur" },
          { en: "Early queen development", es: "Desarrollo temprano de dama", de: "Frühe Damenentwicklung", nl: "Vroege dame-ontwikkeling" },
          { en: "Queenside fianchetto", es: "Fianchetto de dama", de: "Damenflügel-Fianchetto", nl: "Damevleugel fianchetto" }
        ],
        correct: 0,
        explanation: {
          en: "The Dutch Defense (1.d4 f5) is an aggressive opening where Black immediately stakes a claim on the e4 square and prepares kingside expansion. It's sharp and double-edged, potentially weakening Black's king position.",
          es: "La Defensa Holandesa (1.d4 f5) es una apertura agresiva donde las negras inmediatamente reclaman la casilla e4 y preparan expansión en el flanco de rey. Es aguda y de doble filo, potencialmente debilitando la posición del rey negro.",
          de: "Die Holländische Verteidigung (1.d4 f5) ist eine aggressive Eröffnung, bei der Schwarz sofort Anspruch auf das e4-Feld erhebt und Königsflügel-Expansion vorbereitet. Sie ist scharf und zweischneidig und schwächt möglicherweise Schwarz' Königsstellung.",
          nl: "De Hollandse Verdediging (1.d4 f5) is een agressieve opening waarbij zwart onmiddellijk aanspraak maakt op het e4 veld en koningsvleugel-expansie voorbereidt. Het is scherp en tweesnijdend, mogelijk verzwakkend zwarts koningpositie."
        }
      },
      {
        question: {
          en: "What is 'centralization' of pieces?",
          es: "¿Qué es la 'centralización' de piezas?",
          de: "Was ist 'Zentralisierung' von Figuren?",
          nl: "Wat is 'centralisatie' van stukken?"
        },
        options: [
          { en: "Placing pieces toward center for maximum influence", es: "Colocar piezas hacia el centro para máxima influencia", de: "Figuren in Richtung Zentrum platzieren für maximalen Einfluss", nl: "Stukken naar centrum plaatsen voor maximale invloed" },
          { en: "King positioning strategy", es: "Estrategia de posicionamiento del rey", de: "König-Positionierungsstrategie", nl: "Koning positioneringsstrategie" },
          { en: "Pawn chain formation", es: "Formación de cadena de peones", de: "Bauernkettenformation", nl: "Pionketen formatie" },
          { en: "Equal material distribution", es: "Distribución igual de material", de: "Gleichmäßige Materialverteilung", nl: "Gelijke materiaaldistributie" }
        ],
        correct: 0,
        explanation: {
          en: "Centralization means placing pieces, especially knights and the king (in endgames), toward the center where they have maximum scope and influence over the board. Centralized pieces control more squares and are more effective.",
          es: "La centralización significa colocar piezas, especialmente caballos y el rey (en finales), hacia el centro donde tienen máximo alcance e influencia sobre el tablero. Las piezas centralizadas controlan más casillas y son más efectivas.",
          de: "Zentralisierung bedeutet, Figuren, besonders Springer und den König (in Endspielen), in Richtung Zentrum zu platzieren, wo sie maximalen Wirkungsbereich und Einfluss auf das Brett haben. Zentralisierte Figuren kontrollieren mehr Felder und sind effektiver.",
          nl: "Centralisatie betekent stukken, vooral paarden en de koning (in eindspelen), naar het centrum plaatsen waar ze maximaal bereik en invloed over het bord hebben. Gecentraliseerde stukken controleren meer velden en zijn effectiever."
        }
      },
      {
        question: {
          en: "What is the 'Pirc Defense'?",
          es: "¿Qué es la 'Defensa Pirc'?",
          de: "Was ist die 'Pirc-Verteidigung'?",
          nl: "Wat is de 'Pirc Verdediging'?"
        },
        options: [
          { en: "1...d6, 2...Nf6, 3...g6, flexible hypermodern system", es: "1...d6, 2...Cf6, 3...g6, sistema hipermoderno flexible", de: "1...d6, 2...Sf6, 3...g6, flexibles hypermodernes System", nl: "1...d6, 2...Pf6, 3...g6, flexibel hypermodern systeem" },
          { en: "Immediate central occupation", es: "Ocupación central inmediata", de: "Sofortige Zentrumsbsetzung", nl: "Onmiddellijke centrumbezetting" },
          { en: "Early queen sortie", es: "Salida temprana de dama", de: "Früher Damenausfall", nl: "Vroege dame-uitval" },
          { en: "Queenside pawn storm", es: "Tormenta de peones en flanco de dama", de: "Damenflügel-Bauernsturm", nl: "Damevleugel pionstorm" }
        ],
        correct: 0,
        explanation: {
          en: "The Pirc Defense (1.e4 d6 2.d4 Nf6 3.Nc3 g6) is a hypermodern opening where Black allows White to build a strong center, then fianchettoes the kingside bishop and prepares to strike back. Named after Vasja Pirc.",
          es: "La Defensa Pirc (1.e4 d6 2.d4 Cf6 3.Cc3 g6) es una apertura hipermoderna donde las negras permiten que las blancas construyan un centro fuerte, luego desarrollan en fianchetto el alfil de rey y preparan contraatacar. Nombrada en honor a Vasja Pirc.",
          de: "Die Pirc-Verteidigung (1.e4 d6 2.d4 Sf6 3.Sc3 g6) ist eine hypermoderne Eröffnung, bei der Schwarz Weiß ein starkes Zentrum aufbauen lässt, dann den Königsflügel-Läufer fianchettiert und sich auf Gegenschlag vorbereitet. Benannt nach Vasja Pirc.",
          nl: "De Pirc Verdediging (1.e4 d6 2.d4 Pf6 3.Pc3 g6) is een hypermoderne opening waarbij zwart wit een sterk centrum laat bouwen, vervolgens de koningsvleugelloper fianchetto't en zich voorbereidt om terug te slaan. Vernoemd naar Vasja Pirc."
        }
      },
      {
        question: {
          en: "What is 'prophylactic thinking'?",
          es: "¿Qué es el 'pensamiento profiláctico'?",
          de: "Was ist 'prophylaktisches Denken'?",
          nl: "Wat is 'profylactisch denken'?"
        },
        options: [
          { en: "Anticipating and preventing opponent's threats before they materialize", es: "Anticipar y prevenir amenazas del oponente antes de que se materialicen", de: "Gegnerische Drohungen antizipieren und verhindern bevor sie entstehen", nl: "Anticiperen en voorkomen van bedreigingen van tegenstander voordat ze ontstaan" },
          { en: "Planning multiple moves ahead", es: "Planificar múltiples movimientos por adelantado", de: "Mehrere Züge im Voraus planen", nl: "Meerdere zetten vooruit plannen" },
          { en: "Defensive piece placement", es: "Colocación defensiva de piezas", de: "Defensive Figurenplatzierung", nl: "Defensieve stukplaatsing" },
          { en: "Opening preparation", es: "Preparación de apertura", de: "Eröffnungsvorbereitung", nl: "Openingsvoorbereiding" }
        },
        correct: 0,
        explanation: {
          en: "Prophylactic thinking, a concept emphasized by Nimzowitsch and modern players, involves identifying and preventing your opponent's plans before executing your own. It's about asking 'What does my opponent want to do?' and stopping it.",
          es: "El pensamiento profiláctico, un concepto enfatizado por Nimzowitsch y jugadores modernos, implica identificar y prevenir los planes de tu oponente antes de ejecutar los tuyos. Se trata de preguntar '¿Qué quiere hacer mi oponente?' y detenerlo.",
          de: "Prophylaktisches Denken, ein von Nimzowitsch und modernen Spielern betontes Konzept, beinhaltet das Erkennen und Verhindern der Pläne des Gegners, bevor man eigene ausführt. Es geht darum zu fragen 'Was will mein Gegner tun?' und es zu stoppen.",
          nl: "Profylactisch denken, een concept benadrukt door Nimzowitsch en moderne spelers, houdt in het identificeren en voorkomen van de plannen van je tegenstander voordat je je eigen uitvoert. Het gaat om de vraag 'Wat wil mijn tegenstander doen?' en het stoppen."
        }
      },
      {
        question: {
          en: "What is the 'Modern Defense'?",
          es: "¿Qué es la 'Defensa Moderna'?",
          de: "Was ist die 'Moderne Verteidigung'?",
          nl: "Wat is de 'Moderne Verdediging'?"
        },
        options: [
          { en: "1...g6 without immediate ...Nf6, ultra-flexible setup", es: "1...g6 sin inmediato ...Cf6, configuración ultra flexible", de: "1...g6 ohne sofortiges ...Sf6, ultra-flexible Aufstellung", nl: "1...g6 zonder onmiddellijke ...Pf6, ultra-flexibele opstelling" },
          { en: "Contemporary opening theory", es: "Teoría de apertura contemporánea", de: "Zeitgenössische Eröffnungstheorie", nl: "Hedendaagse openingstheorie" },
          { en: "Central pawn advance system", es: "Sistema de avance de peón central", de: "Zentraler Bauernvorstoß-System", nl: "Centraal pionopmars systeem" },
          { en: "Early piece development", es: "Desarrollo temprano de piezas", de: "Frühe Figurenentwicklung", nl: "Vroege stukkenontwikkeling" }
        ],
        correct: 0,
        explanation: {
          en: "The Modern Defense (1.e4 g6 or 1.d4 g6) delays ...Nf6, maintaining maximum flexibility. It's even more hypermodern than the Pirc, allowing Black to adapt based on White's setup. Also called the Robatsch Defense.",
          es: "La Defensa Moderna (1.e4 g6 o 1.d4 g6) retrasa ...Cf6, manteniendo máxima flexibilidad. Es aún más hipermoderna que la Pirc, permitiendo a las negras adaptarse según la configuración de las blancas. También llamada Defensa Robatsch.",
          de: "Die Moderne Verteidigung (1.e4 g6 oder 1.d4 g6) verzögert ...Sf6 und behält maximale Flexibilität. Sie ist noch hypermoderner als die Pirc und erlaubt Schwarz, sich je nach Weiß' Aufstellung anzupassen. Auch Robatsch-Verteidigung genannt.",
          nl: "De Moderne Verdediging (1.e4 g6 of 1.d4 g6) stelt ...Pf6 uit, waardoor maximale flexibiliteit behouden blijft. Het is nog hypermoderner dan de Pirc, waardoor zwart zich kan aanpassen op basis van wits opstelling. Ook wel de Robatsch Verdediging genoemd."
        }
      },
      {
        question: {
          en: "What is an 'intermediate move' or 'in-between move'?",
          es: "¿Qué es un 'movimiento intermedio'?",
          de: "Was ist ein 'Zwischenzug'?",
          nl: "Wat is een 'tussenliggende zet'?"
        },
        options: [
          { en: "Unexpected move inserted before expected continuation", es: "Movimiento inesperado insertado antes de continuación esperada", de: "Unerwarteter Zug vor erwarteter Fortsetzung eingefügt", nl: "Onverwachte zet ingevoegd voor verwachte voortzetting" },
          { en: "Middle game strategy", es: "Estrategia de medio juego", de: "Mittelspiel-Strategie", nl: "Middenspel strategie" },
          { en: "Average strength move", es: "Movimiento de fuerza promedio", de: "Durchschnittlich starker Zug", nl: "Gemiddeld sterke zet" },
          { en: "Transition to endgame", es: "Transición al final", de: "Übergang zum Endspiel", nl: "Overgang naar eindspel" }
        ],
        correct: 0,
        explanation: {
          en: "An intermediate move (zwischenzug in German) is an unexpected move inserted into what appears to be a forced sequence. Instead of the expected recapture or continuation, a player makes a forcing move (check, capture, threat) that changes the position's evaluation.",
          es: "Un movimiento intermedio (zwischenzug en alemán) es un movimiento inesperado insertado en lo que parece ser una secuencia forzada. En lugar de la recaptura o continuación esperada, un jugador hace un movimiento forzado (jaque, captura, amenaza) que cambia la evaluación de la posición.",
          de: "Ein Zwischenzug ist ein unerwarteter Zug, der in eine scheinbar erzwungene Zugfolge eingefügt wird. Anstelle des erwarteten Rückschlags oder der Fortsetzung macht ein Spieler einen erzwingenden Zug (Schach, Schlagzug, Drohung), der die Stellungsbewertung ändert.",
          nl: "Een tussenliggende zet (zwischenzug in het Duits) is een onverwachte zet die wordt ingevoegd in wat een geforceerde reeks lijkt. In plaats van het verwachte terugslaan of voortzetting, doet een speler een forcerende zet (schaak, slag, bedreiging) die de evaluatie van de positie verandert."
        }
      },
      {
        question: {
          en: "What is the 'Nimzowitsch Defense'?",
          es: "¿Qué es la 'Defensa Nimzowitsch'?",
          de: "Was ist die 'Nimzowitsch-Verteidigung'?",
          nl: "Wat is de 'Nimzowitsch Verdediging'?"
        },
        options: [
          { en: "1.e4 Nc6, provocative knight development", es: "1.e4 Cc6, desarrollo provocativo del caballo", de: "1.e4 Sc6, provokative Springer-Entwicklung", nl: "1.e4 Pc6, provocatieve paard-ontwikkeling" },
          { en: "Complex Queen's Gambit variation", es: "Variación compleja del Gambito de Dama", de: "Komplexe Damengambit-Variante", nl: "Complexe Damegambiet variant" },
          { en: "Hypermodern fianchetto system", es: "Sistema de fianchetto hipermoderno", de: "Hypermodernes Fianchetto-System", nl: "Hypermodern fianchetto systeem" },
          { en: "Defensive pawn chain", es: "Cadena de peones defensiva", de: "Defensive Bauernkette", nl: "Defensieve pionketen" }
        ],
        correct: 0,
        explanation: {
          en: "The Nimzowitsch Defense (1.e4 Nc6) develops the knight before the kingside knight, inviting White to play d4 and build a strong center. It's provocative and flexible, named after Aron Nimzowitsch who analyzed it extensively.",
          es: "La Defensa Nimzowitsch (1.e4 Cc6) desarrolla el caballo antes del caballo de rey, invitando a las blancas a jugar d4 y construir un centro fuerte. Es provocativa y flexible, nombrada en honor a Aron Nimzowitsch quien la analizó extensamente.",
          de: "Die Nimzowitsch-Verteidigung (1.e4 Sc6) entwickelt den Springer vor dem Königsflügel-Springer und lädt Weiß ein, d4 zu spielen und ein starkes Zentrum aufzubauen. Sie ist provokativ und flexibel, benannt nach Aron Nimzowitsch, der sie ausführlich analysierte.",
          nl: "De Nimzowitsch Verdediging (1.e4 Pc6) ontwikkelt het paard voor het koningsvleugelpaard, wit uitnodigend om d4 te spelen en een sterk centrum te bouwen. Het is provocatief en flexibel, vernoemd naar Aron Nimzowitsch die het uitgebreid analyseerde."
        }
      },
      {
        question: {
          en: "What is 'piece sacrifice for attack'?",
          es: "¿Qué es el 'sacrificio de pieza para ataque'?",
          de: "Was ist 'Figurenopfer für Angriff'?",
          nl: "Wat is 'stukoffer voor aanval'?"
        },
        options: [
          { en: "Giving up material to expose enemy king or gain decisive attack", es: "Entregar material para exponer rey enemigo o ganar ataque decisivo", de: "Material aufgeben um gegnerischen König bloßzustellen oder entscheidenden Angriff zu gewinnen", nl: "Materiaal opgeven om vijandelijke koning bloot te stellen of beslissende aanval te krijgen" },
          { en: "Trading equal pieces", es: "Intercambiar piezas iguales", de: "Gleichwertige Figuren tauschen", nl: "Gelijke stukken ruilen" },
          { en: "Pawn promotion strategy", es: "Estrategia de promoción de peón", de: "Bauernumwandlungsstrategie", nl: "Pion promotie strategie" },
          { en: "Defensive piece placement", es: "Colocación defensiva de piezas", de: "Defensive Figurenplatzierung", nl: "Defensieve stukplaatsing" }
        ],
        correct: 0,
        explanation: {
          en: "A piece sacrifice for attack involves giving up significant material (knight, bishop, rook, or even queen) to open lines, expose the enemy king, or create overwhelming attacking threats. Success depends on accurate calculation and achieving mate or winning back material with advantage.",
          es: "Un sacrificio de pieza para ataque implica entregar material significativo (caballo, alfil, torre o incluso dama) para abrir líneas, exponer al rey enemigo o crear amenazas de ataque abrumadoras. El éxito depende del cálculo preciso y lograr mate o recuperar material con ventaja.",
          de: "Ein Figurenopfer für Angriff beinhaltet das Aufgeben bedeutenden Materials (Springer, Läufer, Turm oder sogar Dame), um Linien zu öffnen, den gegnerischen König bloßzustellen oder überwältigende Angriffsdrohungen zu schaffen. Erfolg hängt von präziser Berechnung und dem Erreichen von Matt oder Zurückgewinnen von Material mit Vorteil ab.",
          nl: "Een stukoffer voor aanval houdt in dat significant materiaal (paard, loper, toren of zelfs dame) wordt opgegeven om lijnen te openen, de vijandelijke koning bloot te stellen of overweldigende aanvalsbedreigingen te creëren. Succes hangt af van nauwkeurige berekening en het bereiken van mat of het terugwinnen van materiaal met voordeel."
        }
      },
      {
        question: {
          en: "What is the 'Budapest Gambit'?",
          es: "¿Qué es el 'Gambito Budapest'?",
          de: "Was ist das 'Budapester Gambit'?",
          nl: "Wat is het 'Boedapest Gambiet'?"
        },
        options: [
          { en: "1.d4 Nf6 2.c4 e5, sacrificing pawn for rapid development", es: "1.d4 Cf6 2.c4 e5, sacrificando peón para desarrollo rápido", de: "1.d4 Sf6 2.c4 e5, opfert Bauer für schnelle Entwicklung", nl: "1.d4 Pf6 2.c4 e5, offert pion voor snelle ontwikkeling" },
          { en: "Queen sacrifice opening", es: "Apertura con sacrificio de dama", de: "Damenopfer-Eröffnung", nl: "Dameoffer opening" },
          { en: "Solid positional setup", es: "Configuración posicional sólida", de: "Solide Positionsaufstellung", nl: "Solide positionele opstelling" },
          { en: "Closed Slav system", es: "Sistema eslavo cerrado", de: "Geschlossenes slawisches System", nl: "Gesloten Slavisch systeem" }
        ],
        correct: 0,
        explanation: {
          en: "The Budapest Gambit (1.d4 Nf6 2.c4 e5) is an aggressive gambit where Black sacrifices the e5 pawn for rapid piece development and active play. It's sharp and tactical, seeking to punish unprepared opponents.",
          es: "El Gambito Budapest (1.d4 Cf6 2.c4 e5) es un gambito agresivo donde las negras sacrifican el peón e5 para desarrollo rápido de piezas y juego activo. Es agudo y táctico, buscando castigar a oponentes no preparados.",
          de: "Das Budapester Gambit (1.d4 Sf6 2.c4 e5) ist ein aggressives Gambit, bei dem Schwarz den e5-Bauern für schnelle Figurenentwicklung und aktives Spiel opfert. Es ist scharf und taktisch und sucht unvorbereitete Gegner zu bestrafen.",
          nl: "Het Boedapest Gambiet (1.d4 Pf6 2.c4 e5) is een agressief gambiet waarbij zwart de e5 pion offert voor snelle stukkenontwikkeling en actief spel. Het is scherp en tactisch, zoekend om onvoorbereide tegenstanders te straffen."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level8;
  } else if (typeof window !== 'undefined') {
    window.level8 = level8;
  }
})();
