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
