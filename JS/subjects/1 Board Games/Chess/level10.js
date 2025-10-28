// Quiz Template - Level 10: Bord spelletjes - Schaken
(function() {
  const level10 = {
    name: {
      en: "Chess",
      es: "Ajedrez",
      de: "Schach",
      nl: "Schaken"
    },
    questions: [
      {
        question: {
          en: "What is the Botvinnik System in the Semi-Slav?",
          es: "¿Qué es el Sistema Botvinnik en la Semi-Eslava?",
          de: "Was ist das Botwinnik-System in der Halbslawischen?",
          nl: "Wat is het Botvinnik Systeem in de Semi-Slavische?"
        },
        options: [
          { en: "A sharp system with f7-f5 and central tension", es: "Un sistema agudo con f7-f5 y tensión central", de: "Ein scharfes System mit f7-f5 und zentraler Spannung", nl: "Een scherp systeem met f7-f5 en centrale spanning" },
          { en: "A quiet positional setup", es: "Una configuración posicional tranquila", de: "Eine ruhige positionelle Aufstellung", nl: "Een rustige positionele opstelling" },
          { en: "An endgame technique", es: "Una técnica de final", de: "Eine Endspiel-Technik", nl: "Een eindspeltechniek" },
          { en: "A gambit with early pawn sacrifice", es: "Un gambito con sacrificio de peón temprano", de: "Ein Gambit mit frühem Bauernopfer", nl: "Een gambiet met vroeg pionoffer" }
        ],
        correct: 0,
        explanation: {
          en: "The Botvinnik System in the Semi-Slav Defense features the aggressive f7-f5 pawn break, creating sharp complications and dynamic imbalances. Named after World Champion Mikhail Botvinnik, this system demonstrates deep understanding of pawn tension and piece coordination in complex middlegame positions.",
          es: "El Sistema Botvinnik en la Defensa Semi-Eslava presenta la ruptura agresiva de peón f7-f5, creando complicaciones agudas y desequilibrios dinámicos. Nombrado en honor al Campeón Mundial Mikhail Botvinnik, este sistema demuestra comprensión profunda de tensión de peones y coordinación de piezas en posiciones complejas de medio juego.",
          de: "Das Botwinnik-System in der Halbslawischen Verteidigung zeigt den aggressiven f7-f5 Bauerndurchbruch, der scharfe Komplikationen und dynamische Ungleichgewichte schafft. Benannt nach Weltmeister Michail Botwinnik, demonstriert dieses System tiefes Verständnis von Bauernspannung und Figurenkoordination in komplexen Mittelspielstellungen.",
          nl: "Het Botvinnik Systeem in de Semi-Slavische Verdediging heeft de agressieve f7-f5 piondoorbraak, die scherpe complicaties en dynamische onbalans creëert. Vernoemd naar Wereldkampioen Mikhail Botvinnik, demonstreert dit systeem diep begrip van pionspanning en stukcoördinatie in complexe middenspelposities."
        }
      },
      {
        question: {
          en: "What is Tal's 'intuitive sacrifice' philosophy?",
          es: "¿Qué es la filosofía del 'sacrificio intuitivo' de Tal?",
          de: "Was ist Tals Philosophie des 'intuitiven Opfers'?",
          nl: "Wat is Tal's 'intuïtieve offer' filosofie?"
        },
        options: [
          { en: "Sacrificing material based on practical complications rather than concrete calculation", es: "Sacrificar material basado en complicaciones prácticas en lugar de cálculo concreto", de: "Material opfern basierend auf praktischen Komplikationen statt konkreter Berechnung", nl: "Materiaal offeren gebaseerd op praktische complicaties in plaats van concrete berekening" },
          { en: "Only sacrificing with guaranteed compensation", es: "Solo sacrificar con compensación garantizada", de: "Nur mit garantierter Kompensation opfern", nl: "Alleen offeren met gegarandeerde compensatie" },
          { en: "Never sacrificing without calculation", es: "Nunca sacrificar sin cálculo", de: "Niemals ohne Berechnung opfern", nl: "Nooit offeren zonder berekening" },
          { en: "Sacrificing for positional gains only", es: "Sacrificar solo por ganancias posicionales", de: "Nur für positionelle Gewinne opfern", nl: "Alleen offeren voor positionele winst" }
        ],
        correct: 0,
        explanation: {
          en: "Mikhail Tal, the 8th World Champion known as the 'Magician from Riga,' pioneered an approach where sacrifices were based on creating practical complications and psychological pressure rather than concrete calculation to the end. His philosophy was that in the resulting chaos, the attacker often has better practical chances even if the position might be objectively defensible.",
          es: "Mikhail Tal, el 8º Campeón Mundial conocido como el 'Mago de Riga,' fue pionero en un enfoque donde los sacrificios se basaban en crear complicaciones prácticas y presión psicológica en lugar de cálculo concreto hasta el final. Su filosofía era que en el caos resultante, el atacante a menudo tiene mejores posibilidades prácticas incluso si la posición podría ser objetivamente defendible.",
          de: "Michail Tal, der 8. Weltmeister bekannt als der 'Zauberer aus Riga,' war Pionier eines Ansatzes, bei dem Opfer auf der Schaffung praktischer Komplikationen und psychologischem Druck basierten statt auf konkreter Berechnung bis zum Ende. Seine Philosophie war, dass im resultierenden Chaos der Angreifer oft bessere praktische Chancen hat, selbst wenn die Stellung objektiv verteidigbar sein könnte.",
          nl: "Mikhail Tal, de 8e Wereldkampioen bekend als de 'Tovenaar uit Riga,' was pionier in een benadering waarbij offers gebaseerd waren op het creëren van praktische complicaties en psychologische druk in plaats van concrete berekening tot het einde. Zijn filosofie was dat in de resulterende chaos de aanvaller vaak betere praktische kansen heeft, zelfs als de positie objectief verdedigbaar zou kunnen zijn."
        }
      },
      {
        question: {
          en: "What is the Grunfeld Defense's counter-attacking philosophy?",
          es: "¿Cuál es la filosofía de contraataque de la Defensa Grünfeld?",
          de: "Was ist die Gegenangriffs-Philosophie der Grünfeld-Verteidigung?",
          nl: "Wat is de tegenaanval filosofie van de Grünfeld Verdediging?"
        },
        options: [
          { en: "Allow White's pawn center to attack it with pieces", es: "Permitir el centro de peones de las blancas para atacarlo con piezas", de: "Weiß' Bauernzentrum zulassen um es mit Figuren anzugreifen", nl: "Wit's pioncentrum toestaan om het met stukken aan te vallen" },
          { en: "Build a solid pawn chain", es: "Construir una cadena de peones sólida", de: "Eine solide Bauernkette aufbauen", nl: "Een solide pionketen bouwen" },
          { en: "Control the center with pawns", es: "Controlar el centro con peones", de: "Das Zentrum mit Bauern kontrollieren", nl: "Het centrum met pionnen controleren" },
          { en: "Trade all pieces quickly", es: "Intercambiar todas las piezas rápidamente", de: "Alle Figuren schnell tauschen", nl: "Alle stukken snel ruilen" }
        ],
        correct: 0,
        explanation: {
          en: "The Grünfeld Defense embodies hypermodern counter-attacking principles. Black deliberately allows White to establish a large pawn center (d4-e4), then systematically attacks it with pieces (Bg7, Nc6/a6, c5). This creates dynamic tension where White's space advantage is balanced by Black's piece activity and central pressure.",
          es: "La Defensa Grünfeld encarna principios hipermodernos de contraataque. Las negras permiten deliberadamente que las blancas establezcan un gran centro de peones (d4-e4), luego lo atacan sistemáticamente con piezas (Ag7, Cc6/a6, c5). Esto crea tensión dinámica donde la ventaja de espacio de las blancas se equilibra con la actividad de piezas de las negras y presión central.",
          de: "Die Grünfeld-Verteidigung verkörpert hypermoderne Gegenangriffs-Prinzipien. Schwarz erlaubt Weiß bewusst, ein großes Bauernzentrum (d4-e4) aufzubauen, greift es dann systematisch mit Figuren an (Lg7, Sc6/a6, c5). Dies schafft dynamische Spannung, wo Weiß' Raumvorteil durch Schwarz' Figurenaktivität und Zentraldruck ausgeglichen wird.",
          nl: "De Grünfeld Verdediging belichaamt hypermoderne tegenaanval principes. Zwart staat wit bewust toe een groot pioncentrum (d4-e4) op te bouwen, valt het dan systematisch aan met stukken (Lg7, Pc6/a6, c5). Dit creëert dynamische spanning waar wit's ruimtevoordeel wordt gebalanceerd door zwart's stukactiviteit en centrale druk."
        }
      },
      {
        question: {
          en: "What is the theoretical concept of 'minority attack'?",
          es: "¿Cuál es el concepto teórico del 'ataque de minoría'?",
          de: "Was ist das theoretische Konzept des 'Minderheitsangriffs'?",
          nl: "Wat is het theoretische concept van 'minderheidsaanval'?"
        },
        options: [
          { en: "Using fewer pawns to attack more pawns creating weaknesses", es: "Usar menos peones para atacar más peones creando debilidades", de: "Weniger Bauern verwenden um mehr Bauern anzugreifen und Schwächen zu schaffen", nl: "Minder pionnen gebruiken om meer pionnen aan te vallen en zwaktes te creëren" },
          { en: "Attacking with fewer pieces", es: "Atacar con menos piezas", de: "Mit weniger Figuren angreifen", nl: "Aanvallen met minder stukken" },
          { en: "A defensive strategy", es: "Una estrategia defensiva", de: "Eine defensive Strategie", nl: "Een defensieve strategie" },
          { en: "Trading pieces when behind in material", es: "Intercambiar piezas cuando se está atrás en material", de: "Figuren tauschen wenn materiell hinten", nl: "Stukken ruilen bij materieel achterstand" }
        ],
        correct: 0,
        explanation: {
          en: "The minority attack is a strategic plan where one side uses their pawn minority (fewer pawns) on a wing to attack the opponent's pawn majority. The classic example is in the Queen's Gambit Exchange where White advances b2-b4-b5 against Black's queenside, aiming to create weaknesses. This demonstrates how fewer but mobile pawns can create more problems than a static majority.",
          es: "El ataque de minoría es un plan estratégico donde un bando usa su minoría de peones (menos peones) en un flanco para atacar la mayoría de peones del oponente. El ejemplo clásico es en el Cambio del Gambito de Dama donde las blancas avanzan b2-b4-b5 contra el flanco de dama de las negras, buscando crear debilidades. Esto demuestra cómo menos peones pero móviles pueden crear más problemas que una mayoría estática.",
          de: "Der Minderheitsangriff ist ein strategischer Plan, bei dem eine Seite ihre Bauernminderheit (weniger Bauern) auf einem Flügel verwendet, um die Bauernmehrheit des Gegners anzugreifen. Das klassische Beispiel ist im Damengambit-Abtausch, wo Weiß b2-b4-b5 gegen Schwarz' Damenflügel vorstößt und Schwächen schaffen will. Dies zeigt, wie weniger aber mobile Bauern mehr Probleme schaffen können als eine statische Mehrheit.",
          nl: "De minderheidsaanval is een strategisch plan waarbij één kant hun pionminderheid (minder pionnen) op een vleugel gebruikt om de pionmeerderheid van de tegenstander aan te vallen. Het klassieke voorbeeld is in de Damegambiet Ruil waar wit b2-b4-b5 oprukt tegen zwart's damevleugel, met als doel zwaktes te creëren. Dit toont aan hoe minder maar mobiele pionnen meer problemen kunnen creëren dan een statische meerderheid."
        }
      },
      {
        question: {
          en: "What is Steinitz's concept of 'accumulation of small advantages'?",
          es: "¿Cuál es el concepto de Steinitz de 'acumulación de pequeñas ventajas'?",
          de: "Was ist Steinitz' Konzept der 'Anhäufung kleiner Vorteile'?",
          nl: "Wat is Steinitz' concept van 'opeenstapeling van kleine voordelen'?"
        },
        options: [
          { en: "Build multiple small positional advantages before attacking", es: "Construir múltiples ventajas posicionales pequeñas antes de atacar", de: "Mehrere kleine positionelle Vorteile aufbauen vor dem Angriff", nl: "Meerdere kleine positionele voordelen opbouwen voor aanvallen" },
          { en: "Win small amounts of material", es: "Ganar pequeñas cantidades de material", de: "Kleine Materialmengen gewinnen", nl: "Kleine hoeveelheden materiaal winnen" },
          { en: "Make small moves only", es: "Hacer solo movimientos pequeños", de: "Nur kleine Züge machen", nl: "Alleen kleine zetten maken" },
          { en: "Attack immediately with any advantage", es: "Atacar inmediatamente con cualquier ventaja", de: "Sofort mit jedem Vorteil angreifen", nl: "Onmiddellijk aanvallen met elk voordeel" }
        ],
        correct: 0,
        explanation: {
          en: "Wilhelm Steinitz, the first World Chess Champion, revolutionized chess by introducing the concept that you must accumulate small advantages (better pawn structure, superior minor piece, control of an open file, etc.) before launching an attack. This 'accumulation principle' states that premature attacks without sufficient advantages will fail, while properly accumulated advantages eventually lead to a winning position.",
          es: "Wilhelm Steinitz, el primer Campeón Mundial de Ajedrez, revolucionó el ajedrez al introducir el concepto de que debes acumular pequeñas ventajas (mejor estructura de peones, pieza menor superior, control de columna abierta, etc.) antes de lanzar un ataque. Este 'principio de acumulación' establece que ataques prematuros sin ventajas suficientes fallarán, mientras que ventajas adecuadamente acumuladas eventualmente llevan a una posición ganadora.",
          de: "Wilhelm Steinitz, der erste Schachweltmeister, revolutionierte Schach, indem er das Konzept einführte, dass man kleine Vorteile (bessere Bauernstruktur, überlegene Leichtfigur, Kontrolle einer offenen Linie usw.) ansammeln muss, bevor man angreift. Dieses 'Anhäufungsprinzip' besagt, dass verfrühte Angriffe ohne ausreichende Vorteile scheitern werden, während richtig angesammelte Vorteile schließlich zu einer Gewinnstellung führen.",
          nl: "Wilhelm Steinitz, de eerste Wereldschaakkampioen, revolutioneerde schaken door het concept te introduceren dat je kleine voordelen (betere pionstructuur, superieur licht stuk, controle van open rij, enz.) moet accumuleren voordat je een aanval lanceert. Dit 'accumulatieprincipe' stelt dat voortijdige aanvallen zonder voldoende voordelen zullen falen, terwijl goed geaccumuleerde voordelen uiteindelijk leiden tot een winnende positie."
        }
      },
      {
        question: {
          en: "What is the 'Yugoslav Attack'?",
          es: "¿Qué es el 'Ataque Yugoslavo'?",
          de: "Was ist der 'Jugoslawische Angriff'?",
          nl: "Wat is de 'Joegoslavische Aanval'?"
        },
        options: [
          { en: "White's aggressive setup against the Dragon with opposite-side castling", es: "Configuración agresiva de las blancas contra el Dragón con enroques en lados opuestos", de: "Weiß' aggressive Aufstellung gegen den Drachen mit gegenüberliegenden Rochaden", nl: "Wit's agressieve opstelling tegen de Draak met tegenovergestelde rokades" },
          { en: "A kingside fianchetto", es: "Un fianchetto de rey", de: "Ein Königsseiten-Fianchetto", nl: "Een koningszijde fianchetto" },
          { en: "A central pawn break", es: "Una ruptura de peón central", de: "Ein zentraler Bauerndurchbruch", nl: "Een centrale piondoorbraak" },
          { en: "A defensive system", es: "Un sistema defensivo", de: "Ein defensives System", nl: "Een defensief systeem" }
        ],
        correct: 0,
        explanation: {
          en: "The Yugoslav Attack is White's most aggressive response to the Dragon Variation, featuring Be3, Qd2, O-O-O, and a kingside pawn storm with h4-h5. Both sides race to attack opposite kings.",
          es: "El Ataque Yugoslavo es la respuesta más agresiva de las blancas a la Variación del Dragón, con Ae3, Dd2, O-O-O y una avalancha de peones en el flanco de rey con h4-h5. Ambos bandos corren para atacar a reyes opuestos.",
          de: "Der Jugoslawische Angriff ist Weiß' aggressivste Antwort auf die Drachen-Variante, mit Le3, Dd2, O-O-O und einem Königsflügel-Bauernsturm mit h4-h5. Beide Seiten rennen, um gegenüberliegende Könige anzugreifen.",
          nl: "De Joegoslavische Aanval is wit's meest agressieve reactie op de Draak Variant, met Le3, Dd2, O-O-O en een koningsvleugel pionstorm met h4-h5. Beide kanten racen om tegenovergestelde koningen aan te vallen."
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
          { en: "Controlling more territory, restricting opponent's piece mobility", es: "Controlar más territorio, restringiendo la movilidad de las piezas del oponente", de: "Mehr Territorium kontrollieren, die Beweglichkeit der gegnerischen Figuren einschränken", nl: "Meer territorium controleren, mobiliteit van stukken van de tegenstander beperken" },
          { en: "Having more pieces on the board", es: "Tener más piezas en el tablero", de: "Mehr Figuren auf dem Brett haben", nl: "Meer stukken op het bord hebben" },
          { en: "Controlling the center only", es: "Controlar solo el centro", de: "Nur das Zentrum kontrollieren", nl: "Alleen het centrum controleren" },
          { en: "Playing faster moves", es: "Jugar movimientos más rápidos", de: "Schnellere Züge spielen", nl: "Snellere zetten spelen" }
        ],
        correct: 0,
        explanation: {
          en: "Space advantage means controlling more squares on the board, particularly in the center and on your side. It restricts opponent's pieces, provides room for maneuvering, and often leads to a positional advantage.",
          es: "La ventaja de espacio significa controlar más casillas en el tablero, particularmente en el centro y en tu lado. Restringe las piezas del oponente, proporciona espacio para maniobrar y a menudo conduce a una ventaja posicional.",
          de: "Raumvorteil bedeutet, mehr Felder auf dem Brett zu kontrollieren, besonders im Zentrum und auf Ihrer Seite. Er schränkt die gegnerischen Figuren ein, bietet Raum für Manöver und führt oft zu einem positionellen Vorteil.",
          nl: "Ruimtevoordeel betekent meer velden op het bord controleren, met name in het centrum en aan jouw kant. Het beperkt de stukken van de tegenstander, biedt ruimte voor manoeuvreren en leidt vaak tot een positioneel voordeel."
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
          { en: "1.e4 Nc6, developing the knight before pawns", es: "1.e4 Cc6, desarrollando el caballo antes que los peones", de: "1.e4 Sc6, Entwicklung des Springers vor den Bauern", nl: "1.e4 Pc6, het paard ontwikkelen vóór de pionnen" },
          { en: "A queen's pawn opening", es: "Una apertura de peón de dama", de: "Eine Damenbauer-Eröffnung", nl: "Een damepionopening" },
          { en: "A fianchetto system", es: "Un sistema de fianchetto", de: "Ein Fianchetto-System", nl: "Een fianchettosysteem" },
          { en: "A gambit", es: "Un gambito", de: "Ein Gambit", nl: "Een gambiet" }
        ],
        correct: 0,
        explanation: {
          en: "The Nimzowitsch Defense (1.e4 Nc6) is an unusual opening that develops the knight first, preparing to challenge White's center. Named after Aron Nimzowitsch, who advocated hypermodern principles.",
          es: "La Defensa Nimzowitsch (1.e4 Cc6) es una apertura inusual que desarrolla el caballo primero, preparándose para desafiar el centro de las blancas. Nombrada en honor a Aron Nimzowitsch, quien defendió principios hipermodernos.",
          de: "Die Nimzowitsch-Verteidigung (1.e4 Sc6) ist eine ungewöhnliche Eröffnung, die zuerst den Springer entwickelt und sich darauf vorbereitet, Weiß' Zentrum herauszufordern. Benannt nach Aron Nimzowitsch, der hypermoderne Prinzipien vertrat.",
          nl: "De Nimzowitsch Verdediging (1.e4 Pc6) is een ongebruikelijke opening die eerst het paard ontwikkelt, voorbereidend om het centrum van wit uit te dagen. Vernoemd naar Aron Nimzowitsch, die hypermoderne principes voorstond."
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
          { en: "Repeating checks forcing a draw by threefold repetition", es: "Repetir jaques forzando tablas por repetición triple", de: "Wiederholte Schachs, die ein Remis durch dreifache Stellungswiederholung erzwingen", nl: "Herhaalde schaken die remise forceren door drievoudige herhaling" },
          { en: "Checking the king permanently", es: "Dar jaque al rey permanentemente", de: "Den König permanent schachbieten", nl: "De koning permanent schaak geven" },
          { en: "A checkmate pattern", es: "Un patrón de jaque mate", de: "Ein Mattmuster", nl: "Een schaakmatpatroon" },
          { en: "Multiple checks in succession", es: "Múltiples jaques en sucesión", de: "Mehrere Schachs hintereinander", nl: "Meerdere schaken achter elkaar" }
        ],
        correct: 0,
        explanation: {
          en: "Perpetual check is a drawing technique where one side continuously checks the opponent's king, forcing the same position to repeat. After the third repetition, the game is drawn by the threefold repetition rule.",
          es: "El jaque perpetuo es una técnica de empate donde un bando da jaque continuamente al rey del oponente, forzando que se repita la misma posición. Después de la tercera repetición, el juego es tablas por la regla de repetición triple.",
          de: "Dauerschach ist eine Remistechnik, bei der eine Seite kontinuierlich den gegnerischen König schachbietet und dieselbe Stellung wiederholt. Nach der dritten Wiederholung ist die Partie durch die Dreifache-Stellungswiederholungs-Regel remis.",
          nl: "Eeuwig schaak is een remisetechniek waarbij één kant voortdurend de koning van de tegenstander schaak geeft, waardoor dezelfde positie herhaald wordt. Na de derde herhaling is de partij remise door de drievoudige herhalingsregel."
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
          { en: "An asymmetrical defense with ...c5 against d4, creating imbalanced positions", es: "Una defensa asimétrica con ...c5 contra d4, creando posiciones desequilibradas", de: "Eine asymmetrische Verteidigung mit ...c5 gegen d4, die unausgeglichene Stellungen schafft", nl: "Een asymmetrische verdediging met ...c5 tegen d4, waardoor ongebalanceerde posities ontstaan" },
          { en: "A closed defense", es: "Una defensa cerrada", de: "Eine geschlossene Verteidigung", nl: "Een gesloten verdediging" },
          { en: "A gambit line", es: "Una línea de gambito", de: "Eine Gambit-Linie", nl: "Een gambietlijn" },
          { en: "A symmetrical defense", es: "Una defensa simétrica", de: "Eine symmetrische Verteidigung", nl: "Een symmetrische verdediging" }
        ],
        correct: 0,
        explanation: {
          en: "The Benoni Defense (typically 1.d4 Nf6 2.c4 c5) creates an asymmetrical pawn structure. Black gets queenside play and central tension, while White typically has more space. Named from Hebrew meaning 'son of sorrow'.",
          es: "La Defensa Benoni (típicamente 1.d4 Cf6 2.c4 c5) crea una estructura de peones asimétrica. Las negras obtienen juego en el flanco de dama y tensión central, mientras que las blancas típicamente tienen más espacio. Nombrada del hebreo que significa 'hijo del dolor'.",
          de: "Die Benoni-Verteidigung (typischerweise 1.d4 Sf6 2.c4 c5) schafft eine asymmetrische Bauernstruktur. Schwarz erhält Damenflügelspiel und zentrale Spannung, während Weiß typischerweise mehr Raum hat. Benannt vom Hebräischen und bedeutet 'Sohn des Leids'.",
          nl: "De Benoni Verdediging (meestal 1.d4 Pf6 2.c4 c5) creëert een asymmetrische pionstructuur. Zwart krijgt damezijdespel en centrale spanning, terwijl wit meestal meer ruimte heeft. Vernoemd naar het Hebreeuws dat 'zoon van verdriet' betekent."
        }
      },
      {
        question: {
          en: "What is 'clearance' as a tactical motif?",
          es: "¿Qué es el 'despeje' como motivo táctico?",
          de: "Was ist 'Räumung' als taktisches Motiv?",
          nl: "Wat is 'opruiming' als tactisch motief?"
        },
        options: [
          { en: "Moving a piece away to clear a square or line for another piece", es: "Mover una pieza para despejar una casilla o línea para otra pieza", de: "Eine Figur wegbewegen, um ein Feld oder eine Linie für eine andere Figur freizumachen", nl: "Een stuk wegbewegen om een veld of rij vrij te maken voor een ander stuk" },
          { en: "Capturing all opponent's pieces", es: "Capturar todas las piezas del oponente", de: "Alle gegnerischen Figuren schlagen", nl: "Alle stukken van de tegenstander slaan" },
          { en: "Opening up the center", es: "Abrir el centro", de: "Das Zentrum öffnen", nl: "Het centrum openen" },
          { en: "Trading pieces", es: "Intercambiar piezas", de: "Figuren tauschen", nl: "Stukken ruilen" }
        ],
        correct: 0,
        explanation: {
          en: "Clearance is a tactic where a piece moves away (often with tempo via a check or capture) to clear a square, file, rank, or diagonal for another piece to occupy or use effectively.",
          es: "El despeje es una táctica donde una pieza se mueve (a menudo con tiempo mediante un jaque o captura) para despejar una casilla, columna, fila o diagonal para que otra pieza ocupe o use efectivamente.",
          de: "Räumung ist eine Taktik, bei der eine Figur wegzieht (oft mit Tempo durch Schach oder Schlagzug), um ein Feld, eine Linie, Reihe oder Diagonale für eine andere Figur freizumachen, die es effektiv besetzen oder nutzen kann.",
          nl: "Opruiming is een tactiek waarbij een stuk wegbeweegt (vaak met tempo via een schaak of slag) om een veld, rij, rang of diagonaal vrij te maken voor een ander stuk om effectief te bezetten of gebruiken."
        }
      },
      {
        question: {
          en: "What is the 'French Defense'?",
          es: "¿Qué es la 'Defensa Francesa'?",
          de: "Was ist die 'Französische Verteidigung'?",
          nl: "Wat is de 'Franse Verdediging'?"
        },
        options: [
          { en: "1.e4 e6, preparing ...d5 while accepting a potentially bad bishop", es: "1.e4 e6, preparando ...d5 mientras acepta un alfil potencialmente malo", de: "1.e4 e6, bereitet ...d5 vor, während ein potenziell schlechter Läufer akzeptiert wird", nl: "1.e4 e6, voorbereidend ...d5 terwijl een mogelijk slechte loper wordt geaccepteerd" },
          { en: "A gambit opening", es: "Una apertura de gambito", de: "Eine Gambit-Eröffnung", nl: "Een gambiet opening" },
          { en: "A hypermodern defense", es: "Una defensa hipermoderna", de: "Eine hypermoderne Verteidigung", nl: "Een hypermoderne verdediging" },
          { en: "An open game", es: "Un juego abierto", de: "Ein offenes Spiel", nl: "Een open spel" }
        ],
        correct: 0,
        explanation: {
          en: "The French Defense (1.e4 e6) prepares ...d5, challenging White's center. Black's c8-bishop often becomes passive ('bad bishop'), but Black gets a solid pawn structure and counterplay. Popular among world champions.",
          es: "La Defensa Francesa (1.e4 e6) prepara ...d5, desafiando el centro de las blancas. El alfil c8 de las negras a menudo se vuelve pasivo ('alfil malo'), pero las negras obtienen una estructura de peones sólida y contrajuego. Popular entre campeones mundiales.",
          de: "Die Französische Verteidigung (1.e4 e6) bereitet ...d5 vor und fordert Weiß' Zentrum heraus. Schwarz' c8-Läufer wird oft passiv ('schlechter Läufer'), aber Schwarz erhält eine solide Bauernstruktur und Gegenspiel. Beliebt bei Weltmeistern.",
          nl: "De Franse Verdediging (1.e4 e6) bereidt ...d5 voor, wat het centrum van wit uitdaagt. Zwart's c8-loper wordt vaak passief ('slechte loper'), maar zwart krijgt een solide pionstructuur en tegenspel. Populair onder wereldkampioenen."
        }
      },
      {
        question: {
          en: "What is 'pawn majority' in chess?",
          es: "¿Qué es la 'mayoría de peones' en ajedrez?",
          de: "Was ist 'Bauernmehrheit' im Schach?",
          nl: "Wat is 'pionmeerderheid' in schaken?"
        },
        options: [
          { en: "Having more pawns on one side of the board than the opponent", es: "Tener más peones en un lado del tablero que el oponente", de: "Mehr Bauern auf einer Seite des Bretts haben als der Gegner", nl: "Meer pionnen aan één kant van het bord hebben dan de tegenstander" },
          { en: "Having most pawns in the center", es: "Tener la mayoría de peones en el centro", de: "Die meisten Bauern im Zentrum haben", nl: "De meeste pionnen in het centrum hebben" },
          { en: "Having seven or more pawns", es: "Tener siete o más peones", de: "Sieben oder mehr Bauern haben", nl: "Zeven of meer pionnen hebben" },
          { en: "Advancing all pawns", es: "Avanzar todos los peones", de: "Alle Bauern vorschieben", nl: "Alle pionnen opschuiven" }
        ],
        correct: 0,
        explanation: {
          en: "Pawn majority means having more pawns on one wing (queenside or kingside) than your opponent on that same wing. It can create a passed pawn and is often a winning advantage in endgames.",
          es: "La mayoría de peones significa tener más peones en un flanco (dama o rey) que tu oponente en ese mismo flanco. Puede crear un peón pasado y a menudo es una ventaja ganadora en finales.",
          de: "Bauernmehrheit bedeutet, mehr Bauern auf einem Flügel (Damen- oder Königsflügel) zu haben als der Gegner auf demselben Flügel. Sie kann einen Freibauern schaffen und ist oft ein gewinnbringender Vorteil in Endspielen.",
          nl: "Pionmeerderheid betekent meer pionnen op één vleugel (dame- of koningsvleugel) hebben dan je tegenstander op diezelfde vleugel. Het kan een vrijpion creëren en is vaak een winnend voordeel in eindspelen."
        }
      },
      {
        question: {
          en: "What is the 'Colle System'?",
          es: "¿Qué es el 'Sistema Colle'?",
          de: "Was ist das 'Colle-System'?",
          nl: "Wat is het 'Colle Systeem'?"
        },
        options: [
          { en: "A solid d4 system with e3, Bd3, and Nbd2", es: "Un sistema sólido d4 con e3, Ad3 y Cbd2", de: "Ein solides d4-System mit e3, Ld3 und Sbd2", nl: "Een solide d4-systeem met e3, Ld3 en Pbd2" },
          { en: "An aggressive gambit", es: "Un gambito agresivo", de: "Ein aggressives Gambit", nl: "Een agressief gambiet" },
          { en: "A hypermodern opening", es: "Una apertura hipermoderna", de: "Eine hypermoderne Eröffnung", nl: "Een hypermoderne opening" },
          { en: "A king's pawn opening", es: "Una apertura de peón de rey", de: "Eine Königsbauer-Eröffnung", nl: "Een koningspionopening" }
        ],
        correct: 0,
        explanation: {
          en: "The Colle System (1.d4, 2.Nf3, 3.e3, 4.Bd3, 5.Nbd2) is a reliable opening system for White that avoids main theoretical lines. It often leads to a central pawn break with e4. Named after Edgar Colle.",
          es: "El Sistema Colle (1.d4, 2.Cf3, 3.e3, 4.Ad3, 5.Cbd2) es un sistema de apertura confiable para las blancas que evita las líneas teóricas principales. A menudo conduce a una ruptura de peón central con e4. Nombrado en honor a Edgar Colle.",
          de: "Das Colle-System (1.d4, 2.Sf3, 3.e3, 4.Ld3, 5.Sbd2) ist ein zuverlässiges Eröffnungssystem für Weiß, das Haupttheoretische Linien vermeidet. Es führt oft zu einem zentralen Bauerndurchbruch mit e4. Benannt nach Edgar Colle.",
          nl: "Het Colle Systeem (1.d4, 2.Pf3, 3.e3, 4.Ld3, 5.Pbd2) is een betrouwbaar openingssysteem voor wit dat belangrijke theoretische lijnen vermijdt. Het leidt vaak tot een centrale piondoorbraak met e4. Vernoemd naar Edgar Colle."
        }
      },
      {
        question: {
          en: "What is 'underpromotion'?",
          es: "¿Qué es la 'subpromoción'?",
          de: "Was ist 'Unterverwandlung'?",
          nl: "Wat is 'onderpromotie'?"
        },
        options: [
          { en: "Promoting a pawn to a piece other than a queen", es: "Promocionar un peón a una pieza que no sea dama", de: "Einen Bauern in eine andere Figur als die Dame umwandeln", nl: "Een pion promoveren tot een ander stuk dan een dame" },
          { en: "Not promoting a pawn", es: "No promocionar un peón", de: "Einen Bauern nicht umwandeln", nl: "Een pion niet promoveren" },
          { en: "Promoting too early", es: "Promocionar demasiado temprano", de: "Zu früh umwandeln", nl: "Te vroeg promoveren" },
          { en: "Failing to promote", es: "No lograr promocionar", de: "Nicht umwandeln können", nl: "Niet kunnen promoveren" }
        ],
        correct: 0,
        explanation: {
          en: "Underpromotion is promoting a pawn to a knight, bishop, or rook instead of a queen. Knights are most common for underpromotion due to their unique movement (fork, smothered mate, etc.).",
          es: "La subpromoción es promocionar un peón a caballo, alfil o torre en lugar de a dama. Los caballos son más comunes para la subpromoción debido a su movimiento único (horquilla, mate ahogado, etc.).",
          de: "Unterverwandlung ist das Umwandeln eines Bauern in einen Springer, Läufer oder Turm anstatt in eine Dame. Springer sind am häufigsten für Unterverwandlung aufgrund ihrer einzigartigen Bewegung (Gabel, ersticktes Matt usw.).",
          nl: "Onderpromotie is een pion promoveren tot paard, loper of toren in plaats van tot dame. Paarden zijn het meest gebruikelijk voor onderpromotie vanwege hun unieke beweging (vork, verstikt mat, enz.)."
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
          { en: "1.d4 Nf6 2.Bg5, challenging Black's knight early", es: "1.d4 Cf6 2.Ag5, desafiando el caballo de las negras temprano", de: "1.d4 Sf6 2.Lg5, frühes Herausfordern von Schwarz' Springer", nl: "1.d4 Pf6 2.Lg5, vroeg zwart's paard uitdagen" },
          { en: "A queen's gambit line", es: "Una línea del gambito de dama", de: "Eine Damengambit-Linie", nl: "Een damegambiet lijn" },
          { en: "A fianchetto system", es: "Un sistema de fianchetto", de: "Ein Fianchetto-System", nl: "Een fianchettosysteem" },
          { en: "An endgame technique", es: "Una técnica de final", de: "Eine Endspiel-Technik", nl: "Een eindspeltechniek" }
        ],
        correct: 0,
        explanation: {
          en: "The Trompowsky Attack (1.d4 Nf6 2.Bg5) immediately pins or trades Black's knight, avoiding theoretical lines. It's a flexible system that can lead to various pawn structures. Named after Octavio Trompowsky.",
          es: "El Ataque Trompowsky (1.d4 Cf6 2.Ag5) inmediatamente clava o intercambia el caballo de las negras, evitando líneas teóricas. Es un sistema flexible que puede llevar a varias estructuras de peones. Nombrado en honor a Octavio Trompowsky.",
          de: "Der Trompowsky-Angriff (1.d4 Sf6 2.Lg5) fesselt oder tauscht sofort Schwarz' Springer und vermeidet theoretische Linien. Es ist ein flexibles System, das zu verschiedenen Bauernstrukturen führen kann. Benannt nach Octavio Trompowsky.",
          nl: "De Trompowsky Aanval (1.d4 Pf6 2.Lg5) spijkert of ruilt onmiddellijk zwart's paard, waarbij theoretische lijnen worden vermeden. Het is een flexibel systeem dat kan leiden tot verschillende pionstructuren. Vernoemd naar Octavio Trompowsky."
        }
      },
      {
        question: {
          en: "What is 'candidate move' in chess calculation?",
          es: "¿Qué es un 'movimiento candidato' en el cálculo de ajedrez?",
          de: "Was ist ein 'Kandidatenzug' in der Schachberechnung?",
          nl: "Wat is een 'kandidaatzet' in schaakberekening?"
        },
        options: [
          { en: "Promising moves worth considering and calculating in a position", es: "Movimientos prometedores que vale la pena considerar y calcular en una posición", de: "Vielversprechende Züge, die es wert sind, in einer Stellung in Betracht gezogen und berechnet zu werden", nl: "Veelbelovende zetten die het waard zijn om te overwegen en te berekenen in een positie" },
          { en: "The best move in the position", es: "El mejor movimiento en la posición", de: "Der beste Zug in der Stellung", nl: "De beste zet in de positie" },
          { en: "A move leading to promotion", es: "Un movimiento que lleva a la promoción", de: "Ein Zug, der zur Umwandlung führt", nl: "Een zet die leidt tot promotie" },
          { en: "Any legal move", es: "Cualquier movimiento legal", de: "Jeder legale Zug", nl: "Elke legale zet" }
        ],
        correct: 0,
        explanation: {
          en: "Candidate moves are the moves that initially look promising and deserve detailed calculation. The concept, introduced by Soviet chess school, helps organize thinking by focusing on the most relevant options rather than all legal moves.",
          es: "Los movimientos candidatos son los movimientos que inicialmente parecen prometedores y merecen cálculo detallado. El concepto, introducido por la escuela soviética de ajedrez, ayuda a organizar el pensamiento al enfocarse en las opciones más relevantes en lugar de todos los movimientos legales.",
          de: "Kandidatenzüge sind Züge, die zunächst vielversprechend aussehen und eine detaillierte Berechnung verdienen. Das von der sowjetischen Schachschule eingeführte Konzept hilft, das Denken zu organisieren, indem man sich auf die relevantesten Optionen konzentriert, anstatt auf alle legalen Züge.",
          nl: "Kandidaatzetten zijn zetten die in eerste instantie veelbelovend lijken en gedetailleerde berekening verdienen. Het concept, geïntroduceerd door de Sovjet schaakschool, helpt bij het organiseren van denken door te focussen op de meest relevante opties in plaats van alle legale zetten."
        }
      },
      {
        question: {
          en: "What is the 'Budapest Gambit'?",
          es: "¿Qué es el 'Gambito de Budapest'?",
          de: "Was ist das 'Budapester Gambit'?",
          nl: "Wat is het 'Boedapest Gambiet'?"
        },
        options: [
          { en: "1.d4 Nf6 2.c4 e5, sacrificing a pawn for quick development", es: "1.d4 Cf6 2.c4 e5, sacrificando un peón por desarrollo rápido", de: "1.d4 Sf6 2.c4 e5, Opfern eines Bauern für schnelle Entwicklung", nl: "1.d4 Pf6 2.c4 e5, een pion offeren voor snelle ontwikkeling" },
          { en: "A closed defense", es: "Una defensa cerrada", de: "Eine geschlossene Verteidigung", nl: "Een gesloten verdediging" },
          { en: "A queen's pawn opening", es: "Una apertura de peón de dama", de: "Eine Damenbauer-Eröffnung", nl: "Een damepionopening" },
          { en: "A solid positional setup", es: "Una configuración posicional sólida", de: "Eine solide positionelle Aufstellung", nl: "Een solide positionele opstelling" }
        ],
        correct: 0,
        explanation: {
          en: "The Budapest Gambit (1.d4 Nf6 2.c4 e5) is an aggressive counter-gambit where Black sacrifices a pawn for rapid piece development and attacking chances. It's named after Budapest and is considered somewhat dubious but tricky.",
          es: "El Gambito de Budapest (1.d4 Cf6 2.c4 e5) es un contra-gambito agresivo donde las negras sacrifican un peón por desarrollo rápido de piezas y oportunidades de ataque. Lleva el nombre de Budapest y se considera algo dudoso pero complicado.",
          de: "Das Budapester Gambit (1.d4 Sf6 2.c4 e5) ist ein aggressives Gegengambit, bei dem Schwarz einen Bauern für schnelle Figurenentwicklung und Angriffschancen opfert. Es ist nach Budapest benannt und gilt als etwas zweifelhaft, aber trickreich.",
          nl: "Het Boedapest Gambiet (1.d4 Pf6 2.c4 e5) is een agressief tegengambiet waarbij zwart een pion offert voor snelle stukontwikkeling en aanvalskansen. Het is vernoemd naar Boedapest en wordt beschouwd als enigszins twijfelachtig maar lastig."
        }
      },
      {
        question: {
          en: "What is a 'quiet move' in chess?",
          es: "¿Qué es un 'movimiento silencioso' en ajedrez?",
          de: "Was ist ein 'ruhiger Zug' im Schach?",
          nl: "Wat is een 'stille zet' in schaken?"
        },
        options: [
          { en: "A non-forcing move that doesn't check, capture, or threaten", es: "Un movimiento no forzado que no da jaque, captura o amenaza", de: "Ein nicht erzwingender Zug, der nicht schach bietet, schlägt oder droht", nl: "Een niet-forcerende zet die niet schaak geeft, slaat of dreigt" },
          { en: "A silent chess tournament", es: "Un torneo de ajedrez silencioso", de: "Ein stilles Schachturnier", nl: "Een stil schaaktoernooi" },
          { en: "Moving without sound", es: "Moverse sin sonido", de: "Sich ohne Geräusch bewegen", nl: "Bewegen zonder geluid" },
          { en: "A defensive move", es: "Un movimiento defensivo", de: "Ein defensiver Zug", nl: "Een defensieve zet" }
        ],
        correct: 0,
        explanation: {
          en: "A quiet move is a non-forcing move that improves position without checking, capturing, or making an immediate threat. Quiet moves in tactics are often the hardest to see and can be the most powerful.",
          es: "Un movimiento silencioso es un movimiento no forzado que mejora la posición sin dar jaque, capturar o hacer una amenaza inmediata. Los movimientos silenciosos en táctica son a menudo los más difíciles de ver y pueden ser los más poderosos.",
          de: "Ein ruhiger Zug ist ein nicht erzwingender Zug, der die Stellung verbessert, ohne schach zu bieten, zu schlagen oder eine unmittelbare Drohung zu machen. Ruhige Züge in der Taktik sind oft am schwersten zu sehen und können am mächtigsten sein.",
          nl: "Een stille zet is een niet-forcerende zet die de positie verbetert zonder schaak te geven, te slaan of een onmiddellijke dreiging te maken. Stille zetten in tactiek zijn vaak het moeilijkst te zien en kunnen het krachtigst zijn."
        }
      },
      {
        question: {
          en: "What is the 'Ruy Lopez Exchange Variation'?",
          es: "¿Qué es la 'Variación de Cambio del Ruy López'?",
          de: "Was ist die 'Abtausch-Variante der Spanischen Partie'?",
          nl: "Wat is de 'Ruil Variant van de Spaanse Partij'?"
        },
        options: [
          { en: "White trades bishop for knight with Bxc6, doubling Black's pawns", es: "Las blancas intercambian alfil por caballo con Axc6, doblando los peones de las negras", de: "Weiß tauscht Läufer gegen Springer mit Lxc6 und verdoppelt Schwarz' Bauern", nl: "Wit ruilt loper voor paard met Lxc6, waardoor zwart's pionnen worden verdubbeld" },
          { en: "Trading queens early", es: "Intercambiar damas temprano", de: "Früher Damentausch", nl: "Vroeg dames ruilen" },
          { en: "An open variation", es: "Una variación abierta", de: "Eine offene Variante", nl: "Een open variant" },
          { en: "A gambit line", es: "Una línea de gambito", de: "Eine Gambit-Linie", nl: "Een gambietlijn" }
        ],
        correct: 0,
        explanation: {
          en: "The Exchange Variation (4.Bxc6) gives Black doubled c-pawns and the bishop pair, while White gets a slight space advantage and potentially better pawn structure. It often leads to long, strategic battles.",
          es: "La Variación de Cambio (4.Axc6) da a las negras peones c doblados y la pareja de alfiles, mientras que las blancas obtienen una ligera ventaja de espacio y potencialmente mejor estructura de peones. A menudo conduce a batallas estratégicas largas.",
          de: "Die Abtausch-Variante (4.Lxc6) gibt Schwarz verdoppelte c-Bauern und das Läuferpaar, während Weiß einen leichten Raumvorteil und potenziell bessere Bauernstruktur erhält. Sie führt oft zu langen, strategischen Kämpfen.",
          nl: "De Ruil Variant (4.Lxc6) geeft zwart verdubbelde c-pionnen en het loperpaar, terwijl wit een licht ruimtevoordeel krijgt en mogelijk betere pionstructuur. Het leidt vaak tot lange, strategische gevechten."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level10;
  } else if (typeof window !== 'undefined') {
    window.level10 = level10;
  }
})();
