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
      },
      {
        question: {
          en: "What is the 'Lucena position'?",
          es: "¿Qué es la 'posición de Lucena'?",
          de: "Was ist die 'Lucena-Stellung'?",
          nl: "Wat is de 'Lucena positie'?"
        },
        options: [
          { en: "A fundamental rook-pawn endgame winning technique", es: "Una técnica ganadora fundamental de final de torre y peón", de: "Eine fundamentale Gewinn-Technik im Turm-Bauern-Endspiel", nl: "Een fundamentele winnende techniek in toren-pion eindspel" },
          { en: "An opening trap", es: "Una trampa de apertura", de: "Eine Eröffnungsfalle", nl: "Een openingsval" },
          { en: "A tactical motif", es: "Un motivo táctico", de: "Ein taktisches Motiv", nl: "Een tactisch motief" },
          { en: "A pawn structure", es: "Una estructura de peones", de: "Eine Bauernstruktur", nl: "Een pionstructuur" }
        ],
        correct: 0,
        explanation: {
          en: "The Lucena position is one of the most important rook endgame positions. It's a winning technique where the stronger side builds a 'bridge' with the rook to shield the king from checks and promote the pawn.",
          es: "La posición de Lucena es una de las posiciones de final de torres más importantes. Es una técnica ganadora donde el lado más fuerte construye un 'puente' con la torre para proteger al rey de los jaques y promocionar el peón.",
          de: "Die Lucena-Stellung ist eine der wichtigsten Turm-Endspiel-Stellungen. Es ist eine Gewinn-Technik, bei der die stärkere Seite eine 'Brücke' mit dem Turm baut, um den König vor Schachs zu schützen und den Bauern umzuwandeln.",
          nl: "De Lucena positie is een van de belangrijkste toren eindspel posities. Het is een winnende techniek waarbij de sterkere kant een 'brug' bouwt met de toren om de koning te beschermen tegen schaaks en de pion te promoveren."
        }
      },
      {
        question: {
          en: "What is 'Philidor's position'?",
          es: "¿Qué es la 'posición de Philidor'?",
          de: "Was ist die 'Philidor-Stellung'?",
          nl: "Wat is de 'Philidor positie'?"
        },
        options: [
          { en: "A defensive rook endgame technique where the rook stays on the third rank", es: "Una técnica defensiva de final de torre donde la torre permanece en la tercera fila", de: "Eine defensive Turm-Endspiel-Technik, bei der der Turm auf der dritten Reihe bleibt", nl: "Een defensieve toren eindspel techniek waarbij de toren op de derde rij blijft" },
          { en: "An attacking setup", es: "Una configuración de ataque", de: "Eine Angriffs-Aufstellung", nl: "Een aanvalsopstelling" },
          { en: "A pawn breakthrough", es: "Una ruptura de peones", de: "Ein Bauerndurchbruch", nl: "Een piondoorbraak" },
          { en: "A king maneuver", es: "Una maniobra del rey", de: "Ein König-Manöver", nl: "Een koningsmanoeuvre" }
        ],
        correct: 0,
        explanation: {
          en: "Philidor's position is a key defensive technique in rook-pawn endgames. The defending rook stays on the third rank to cut off the enemy king, only dropping to the first rank when the pawn advances to the sixth rank.",
          es: "La posición de Philidor es una técnica defensiva clave en finales de torre y peón. La torre defensora permanece en la tercera fila para cortar al rey enemigo, solo bajando a la primera fila cuando el peón avanza a la sexta fila.",
          de: "Die Philidor-Stellung ist eine wichtige defensive Technik in Turm-Bauern-Endspielen. Der verteidigende Turm bleibt auf der dritten Reihe, um den gegnerischen König abzuschneiden, und fällt nur auf die erste Reihe zurück, wenn der Bauer zur sechsten Reihe vorrückt.",
          nl: "De Philidor positie is een belangrijke defensieve techniek in toren-pion eindspelen. De verdedigende toren blijft op de derde rij om de vijandelijke koning af te snijden, alleen naar de eerste rij vallend wanneer de pion naar de zesde rij oprukt."
        }
      },
      {
        question: {
          en: "What is the 'Berlin Defense' in the Ruy Lopez?",
          es: "¿Qué es la 'Defensa Berlinesa' en el Ruy López?",
          de: "Was ist die 'Berliner Verteidigung' in der Spanischen Partie?",
          nl: "Wat is de 'Berlijnse Verdediging' in de Ruy Lopez?"
        },
        options: [
          { en: "3...Nf6, a solid defense often leading to an endgame", es: "3...Cf6, una defensa sólida que a menudo lleva a un final", de: "3...Sf6, eine solide Verteidigung, die oft zu einem Endspiel führt", nl: "3...Pf6, een solide verdediging die vaak leidt tot een eindspel" },
          { en: "3...a6, the main line", es: "3...a6, la línea principal", de: "3...a6, die Hauptlinie", nl: "3...a6, de hoofdlijn" },
          { en: "3...d6, the Steinitz Defense", es: "3...d6, la Defensa Steinitz", de: "3...d6, die Steinitz-Verteidigung", nl: "3...d6, de Steinitz Verdediging" },
          { en: "3...Bc5, the classical line", es: "3...Ac5, la línea clásica", de: "3...Lc5, die klassische Linie", nl: "3...Lc5, de klassieke lijn" }
        ],
        correct: 0,
        explanation: {
          en: "The Berlin Defense (3...Nf6) became popular after Kramnik used it successfully against Kasparov in 2000. After 4.O-O Nxe4 5.d4 Nd6 6.Bxc6 dxc6 7.dxe5 Nf5 8.Qxd8+ Kxd8, Black gets a solid endgame position known as the 'Berlin Wall.'",
          es: "La Defensa Berlinesa (3...Cf6) se volvió popular después de que Kramnik la usara exitosamente contra Kasparov en 2000. Después de 4.O-O Cxe4 5.d4 Cd6 6.Axc6 dxc6 7.dxe5 Cf5 8.Dxd8+ Rxd8, las negras obtienen una posición de final sólida conocida como el 'Muro de Berlín'.",
          de: "Die Berliner Verteidigung (3...Sf6) wurde populär, nachdem Kramnik sie 2000 erfolgreich gegen Kasparov einsetzte. Nach 4.O-O Sxe4 5.d4 Sd6 6.Lxc6 dxc6 7.dxe5 Sf5 8.Dxd8+ Kxd8 erhält Schwarz eine solide Endspiel-Stellung, die als 'Berliner Mauer' bekannt ist.",
          nl: "De Berlijnse Verdediging (3...Pf6) werd populair nadat Kramnik het in 2000 succesvol tegen Kasparov gebruikte. Na 4.O-O Pxe4 5.d4 Pd6 6.Lxc6 dxc6 7.dxe5 Pf5 8.Dxd8+ Kxd8 krijgt zwart een solide eindspel positie bekend als de 'Berlijnse Muur'."
        }
      },
      {
        question: {
          en: "What is the 'Alekhine's Gun' formation?",
          es: "¿Qué es la formación 'Cañón de Alekhine'?",
          de: "Was ist die 'Aljechin-Kanone'-Formation?",
          nl: "Wat is de 'Alekhine's Kanon' formatie?"
        },
        options: [
          { en: "Queen and two rooks aligned on the same file or rank", es: "Dama y dos torres alineadas en la misma columna o fila", de: "Dame und zwei Türme auf derselben Linie oder Reihe ausgerichtet", nl: "Dame en twee torens uitgelijnd op dezelfde lijn of rij" },
          { en: "Three knights positioned together", es: "Tres caballos posicionados juntos", de: "Drei Springer zusammen positioniert", nl: "Drie paarden samen gepositioneerd" },
          { en: "Doubled bishops on a diagonal", es: "Alfiles doblados en una diagonal", de: "Verdoppelte Läufer auf einer Diagonale", nl: "Verdubbelde lopers op een diagonaal" },
          { en: "A pawn chain formation", es: "Una formación de cadena de peones", de: "Eine Bauernketten-Formation", nl: "Een pioncadeau formatie" }
        ],
        correct: 0,
        explanation: {
          en: "Alekhine's Gun is a powerful attacking formation where the queen is placed behind two rooks on an open file, creating tremendous pressure. Named after Alexander Alekhine, who used this setup in his famous game against Nimzowitsch in 1930.",
          es: "El Cañón de Alekhine es una poderosa formación de ataque donde la dama se coloca detrás de dos torres en una columna abierta, creando tremenda presión. Nombrado en honor a Alexander Alekhine, quien usó esta configuración en su famosa partida contra Nimzowitsch en 1930.",
          de: "Die Aljechin-Kanone ist eine mächtige Angriffs-Formation, bei der die Dame hinter zwei Türmen auf einer offenen Linie platziert wird, was enormen Druck erzeugt. Benannt nach Alexander Aljechin, der diese Aufstellung in seiner berühmten Partie gegen Nimzowitsch 1930 verwendete.",
          nl: "Alekhine's Kanon is een krachtige aanvalsformatie waarbij de dame achter twee torens op een open lijn wordt geplaatst, wat enorme druk creëert. Vernoemd naar Alexander Alekhine, die deze opstelling gebruikte in zijn beroemde partij tegen Nimzowitsch in 1930."
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
          { en: "1.d4 d5 2.c4 e6 3.Nc3 c5, fighting for central control", es: "1.d4 d5 2.c4 e6 3.Cc3 c5, luchando por control central", de: "1.d4 d5 2.c4 e6 3.Sc3 c5, kämpft um zentrale Kontrolle", nl: "1.d4 d5 2.c4 e6 3.Pc3 c5, vechtend voor centrale controle" },
          { en: "A Sicilian variation", es: "Una variación siciliana", de: "Eine sizilianische Variante", nl: "Een Siciliaanse variatie" },
          { en: "A king's gambit line", es: "Una línea del gambito de rey", de: "Eine Königsgambit-Linie", nl: "Een koningsgambiet lijn" },
          { en: "A fianchetto system", es: "Un sistema de fianchetto", de: "Ein Fianchetto-System", nl: "Een fianchettosysteem" }
        ],
        correct: 0,
        explanation: {
          en: "The Tarrasch Defense challenges White's center with ...c5, often accepting an isolated d5-pawn for active piece play. Named after Siegbert Tarrasch, it embodies classical principles of active play and central control.",
          es: "La Defensa Tarrasch desafía el centro de las blancas con ...c5, a menudo aceptando un peón d5 aislado por juego de piezas activo. Nombrada en honor a Siegbert Tarrasch, encarna los principios clásicos de juego activo y control central.",
          de: "Die Tarrasch-Verteidigung fordert Weiß' Zentrum mit ...c5 heraus und akzeptiert oft einen isolierten d5-Bauern für aktives Figurenspiel. Benannt nach Siegbert Tarrasch, verkörpert sie klassische Prinzipien von aktivem Spiel und zentraler Kontrolle.",
          nl: "De Tarrasch Verdediging daagt wit's centrum uit met ...c5, vaak accepterend een geïsoleerde d5-pion voor actief stukspel. Vernoemd naar Siegbert Tarrasch, belichaamt het klassieke principes van actief spel en centrale controle."
        }
      },
      {
        question: {
          en: "What is 'prophylaxis' in chess strategy?",
          es: "¿Qué es la 'profilaxis' en estrategia de ajedrez?",
          de: "Was ist 'Prophylaxe' in der Schachstrategie?",
          nl: "Wat is 'profylaxe' in schaakstrategie?"
        },
        options: [
          { en: "Preventing opponent's plans before they can be executed", es: "Prevenir los planes del oponente antes de que puedan ejecutarse", de: "Die Pläne des Gegners verhindern, bevor sie ausgeführt werden können", nl: "Plannen van tegenstander voorkomen voordat ze kunnen worden uitgevoerd" },
          { en: "Planning your own strategy", es: "Planificar tu propia estrategia", de: "Die eigene Strategie planen", nl: "Je eigen strategie plannen" },
          { en: "Defensive play only", es: "Solo juego defensivo", de: "Nur defensives Spiel", nl: "Alleen defensief spel" },
          { en: "Calculating variations", es: "Calcular variaciones", de: "Varianten berechnen", nl: "Variaties berekenen" }
        ],
        correct: 0,
        explanation: {
          en: "Prophylaxis, a concept developed by Aron Nimzowitsch, means preventing opponent's ideas before they materialize. Rather than just making your own plans, you identify and neutralize the opponent's threats and ideas first.",
          es: "La profilaxis, un concepto desarrollado por Aron Nimzowitsch, significa prevenir las ideas del oponente antes de que se materialicen. En lugar de solo hacer tus propios planes, identificas y neutralizas las amenazas e ideas del oponente primero.",
          de: "Prophylaxe, ein von Aron Nimzowitsch entwickeltes Konzept, bedeutet, die Ideen des Gegners zu verhindern, bevor sie sich materialisieren. Anstatt nur eigene Pläne zu machen, identifiziert und neutralisiert man zuerst die Drohungen und Ideen des Gegners.",
          nl: "Profylaxe, een concept ontwikkeld door Aron Nimzowitsch, betekent het voorkomen van ideeën van de tegenstander voordat ze zich materialiseren. In plaats van alleen je eigen plannen te maken, identificeer en neutraliseer je eerst de dreigingen en ideeën van de tegenstander."
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
          { en: "A flexible defensive setup with pawns on a6, b6, d6, e6", es: "Una configuración defensiva flexible con peones en a6, b6, d6, e6", de: "Eine flexible defensive Aufstellung mit Bauern auf a6, b6, d6, e6", nl: "Een flexibele defensieve opstelling met pionnen op a6, b6, d6, e6" },
          { en: "An aggressive pawn storm", es: "Una tormenta de peones agresiva", de: "Ein aggressiver Bauernsturm", nl: "Een agressieve pionstorm" },
          { en: "A king's gambit line", es: "Una línea del gambito de rey", de: "Eine Königsgambit-Linie", nl: "Een koningsgambiet lijn" },
          { en: "A rook endgame technique", es: "Una técnica de final de torre", de: "Eine Turm-Endspiel-Technik", nl: "Een toren eindspel techniek" }
        ],
        correct: 0,
        explanation: {
          en: "The Hedgehog is a flexible defensive formation where Black places pawns on the third rank (a6, b6, d6, e6). It resembles a hedgehog's spines. Black waits for White to overextend, then strikes back with breaks like ...b5, ...d5, or ...e5.",
          es: "El Erizo es una formación defensiva flexible donde las negras colocan peones en la tercera fila (a6, b6, d6, e6). Se asemeja a las espinas de un erizo. Las negras esperan a que las blancas se sobreextiendan, luego contraatacan con rupturas como ...b5, ...d5 o ...e5.",
          de: "Der Igel ist eine flexible defensive Formation, bei der Schwarz Bauern auf der dritten Reihe platziert (a6, b6, d6, e6). Es ähnelt den Stacheln eines Igels. Schwarz wartet, bis Weiß sich überdehnt, und schlägt dann mit Durchbrüchen wie ...b5, ...d5 oder ...e5 zurück.",
          nl: "De Egel is een flexibele defensieve formatie waarbij zwart pionnen op de derde rij plaatst (a6, b6, d6, e6). Het lijkt op de stekels van een egel. Zwart wacht tot wit zich overstrekt, en slaat dan terug met doorbraken zoals ...b5, ...d5 of ...e5."
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
          { en: "1.d4 Nf6 2.c4 e6 3.Nc3 Bb4, pinning the knight", es: "1.d4 Cf6 2.c4 e6 3.Cc3 Ab4, clavando el caballo", de: "1.d4 Sf6 2.c4 e6 3.Sc3 Lb4, fesselt den Springer", nl: "1.d4 Pf6 2.c4 e6 3.Pc3 Lb4, spijkerend het paard" },
          { en: "A king's gambit variation", es: "Una variación del gambito de rey", de: "Eine Königsgambit-Variante", nl: "Een koningsgambiet variatie" },
          { en: "A closed Sicilian line", es: "Una línea siciliana cerrada", de: "Eine geschlossene sizilianische Linie", nl: "Een gesloten Siciliaanse lijn" },
          { en: "A rook endgame setup", es: "Una configuración de final de torre", de: "Eine Turm-Endspiel-Aufstellung", nl: "Een toren eindspel opstelling" }
        ],
        correct: 0,
        explanation: {
          en: "The Nimzo-Indian Defense (3...Bb4) pins the c3-knight and fights for central control. Named after Aron Nimzowitsch, it's one of the most popular and solid defenses to 1.d4, used at all levels including world championships.",
          es: "La Defensa Nimzo-India (3...Ab4) clava el caballo de c3 y lucha por control central. Nombrada en honor a Aron Nimzowitsch, es una de las defensas más populares y sólidas contra 1.d4, usada en todos los niveles incluyendo campeonatos mundiales.",
          de: "Die Nimzo-Indische Verteidigung (3...Lb4) fesselt den c3-Springer und kämpft um zentrale Kontrolle. Benannt nach Aron Nimzowitsch, ist sie eine der beliebtesten und solidesten Verteidigungen gegen 1.d4, auf allen Ebenen einschließlich Weltmeisterschaften verwendet.",
          nl: "De Nimzo-Indische Verdediging (3...Lb4) spijkert het c3-paard en vecht voor centrale controle. Vernoemd naar Aron Nimzowitsch, is het een van de populairste en meest solide verdedigingen tegen 1.d4, gebruikt op alle niveaus inclusief wereldkampioenschappen."
        }
      },
      {
        question: {
          en: "What is a 'fortress' in chess endgames?",
          es: "¿Qué es una 'fortaleza' en finales de ajedrez?",
          de: "Was ist eine 'Festung' in Schach-Endspielen?",
          nl: "Wat is een 'vesting' in schaak eindspelen?"
        },
        options: [
          { en: "A defensive setup that prevents the opponent from winning despite material advantage", es: "Una configuración defensiva que impide que el oponente gane a pesar de ventaja material", de: "Eine defensive Aufstellung, die den Gegner trotz materiellem Vorteil am Gewinnen hindert", nl: "Een defensieve opstelling die voorkomt dat de tegenstander wint ondanks materieel voordeel" },
          { en: "A strong pawn chain", es: "Una cadena de peones fuerte", de: "Eine starke Bauernkette", nl: "Een sterke pioncadeau" },
          { en: "Castling kingside", es: "Enroque corto", de: "Kurze Rochade", nl: "Korte rokade" },
          { en: "Protected king position", es: "Posición de rey protegida", de: "Geschützte König-Position", nl: "Beschermde koningspositie" }
        ],
        correct: 0,
        explanation: {
          en: "A fortress is an endgame defensive structure where the weaker side can hold a draw despite being down material. The position is set up so the stronger side cannot break through. Classic examples include opposite-colored bishop endgames.",
          es: "Una fortaleza es una estructura defensiva de final donde el lado más débil puede mantener tablas a pesar de estar abajo en material. La posición se configura para que el lado más fuerte no pueda penetrar. Ejemplos clásicos incluyen finales de alfiles de colores opuestos.",
          de: "Eine Festung ist eine defensive Endspiel-Struktur, bei der die schwächere Seite ein Remis halten kann, obwohl sie materiell unterlegen ist. Die Stellung ist so aufgebaut, dass die stärkere Seite nicht durchbrechen kann. Klassische Beispiele sind ungleichfarbige Läufer-Endspiele.",
          nl: "Een vesting is een defensieve eindspelstructuur waarbij de zwakkere kant remise kan houden ondanks materieel achterstand. De positie is zo opgezet dat de sterkere kant niet kan doorbreken. Klassieke voorbeelden zijn tegengestelde kleuren loper eindspelen."
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
          { en: "1.d4 Nf6 2.c4 e6 3.Nf3 b6, fianchettoing the queenside bishop", es: "1.d4 Cf6 2.c4 e6 3.Cf3 b6, fianchetto del alfil del flanco de dama", de: "1.d4 Sf6 2.c4 e6 3.Sf3 b6, Fianchetto des Damenflügel-Läufers", nl: "1.d4 Pf6 2.c4 e6 3.Pf3 b6, fianchetto van de damezijde loper" },
          { en: "A Sicilian variation", es: "Una variación siciliana", de: "Eine sizilianische Variante", nl: "Een Siciliaanse variatie" },
          { en: "A king's gambit line", es: "Una línea del gambito de rey", de: "Eine Königsgambit-Linie", nl: "Een koningsgambiet lijn" },
          { en: "An aggressive pawn storm", es: "Una tormenta de peones agresiva", de: "Ein aggressiver Bauernsturm", nl: "Een agressieve pionstorm" }
        ],
        correct: 0,
        explanation: {
          en: "The Queen's Indian Defense (3...b6) is a solid hypermodern defense that fianchettos the c8-bishop to control the central light squares, particularly e4. It's a flexible system avoiding the theoretical complexities of the Nimzo-Indian.",
          es: "La Defensa India de Dama (3...b6) es una sólida defensa hipermoderna que hace fianchetto del alfil c8 para controlar las casillas centrales claras, particularmente e4. Es un sistema flexible que evita las complejidades teóricas de la Nimzo-India.",
          de: "Die Damenindische Verteidigung (3...b6) ist eine solide hypermoderne Verteidigung, die den c8-Läufer fianchettiert, um die zentralen hellen Felder zu kontrollieren, insbesondere e4. Es ist ein flexibles System, das die theoretischen Komplexitäten der Nimzo-Indischen vermeidet.",
          nl: "De Dame-Indische Verdediging (3...b6) is een solide hypermoderne verdediging die de c8-loper fianchetteert om de centrale lichte velden te controleren, met name e4. Het is een flexibel systeem dat de theoretische complexiteit van de Nimzo-Indische vermijdt."
        }
      },
      {
        question: {
          en: "What is 'king activity' in endgames?",
          es: "¿Qué es la 'actividad del rey' en finales?",
          de: "Was ist 'Königsaktivität' in Endspielen?",
          nl: "Wat is 'koningsactiviteit' in eindspelen?"
        },
        options: [
          { en: "The king's ability to participate actively in the endgame fight", es: "La capacidad del rey de participar activamente en la lucha del final", de: "Die Fähigkeit des Königs, aktiv am Endspielkampf teilzunehmen", nl: "Het vermogen van de koning om actief deel te nemen aan de eindspelstrijd" },
          { en: "Castling the king", es: "Enrocar el rey", de: "Den König rochieren", nl: "De koning rokeren" },
          { en: "Protecting the king", es: "Proteger al rey", de: "Den König schützen", nl: "De koning beschermen" },
          { en: "Moving the king frequently", es: "Mover el rey frecuentemente", de: "Den König häufig bewegen", nl: "De koning vaak bewegen" }
        ],
        correct: 0,
        explanation: {
          en: "In endgames, the king transforms from a piece to protect into a powerful fighting piece. Active king play—centralizing, attacking pawns, supporting your own—is often the decisive factor in endgames. The saying goes: 'In the endgame, the king is a strong piece.'",
          es: "En finales, el rey se transforma de una pieza a proteger en una pieza de combate poderosa. El juego activo del rey—centralizar, atacar peones, apoyar los propios—es a menudo el factor decisivo en finales. El dicho dice: 'En el final, el rey es una pieza fuerte'.",
          de: "In Endspielen verwandelt sich der König von einer zu schützenden Figur in eine mächtige Kampffigur. Aktives Königsspiel—Zentralisierung, Angriff auf Bauern, Unterstützung der eigenen—ist oft der entscheidende Faktor in Endspielen. Das Sprichwort lautet: 'Im Endspiel ist der König eine starke Figur'.",
          nl: "In eindspelen transformeert de koning van een te beschermen stuk naar een krachtig vechtend stuk. Actief koningspel—centraliseren, pionnen aanvallen, je eigen steunen—is vaak de beslissende factor in eindspelen. Het gezegde luidt: 'In het eindspel is de koning een sterk stuk'."
        }
      },
      {
        question: {
          en: "What is the 'French Defense Winawer Variation'?",
          es: "¿Qué es la 'Variación Winawer de la Defensa Francesa'?",
          de: "Was ist die 'Winawer-Variante der Französischen Verteidigung'?",
          nl: "Wat is de 'Winawer Variatie van de Franse Verdediging'?"
        },
        options: [
          { en: "3...Bb4, pinning the knight and creating sharp complications", es: "3...Ab4, clavando el caballo y creando complicaciones agudas", de: "3...Lb4, fesselt den Springer und schafft scharfe Komplikationen", nl: "3...Lb4, spijkerend het paard en creërend scherpe complicaties" },
          { en: "3...Nf6, the classical variation", es: "3...Cf6, la variación clásica", de: "3...Sf6, die klassische Variante", nl: "3...Pf6, de klassieke variatie" },
          { en: "3...dxe4, the Rubinstein", es: "3...dxe4, el Rubinstein", de: "3...dxe4, die Rubinstein", nl: "3...dxe4, de Rubinstein" },
          { en: "3...c5, the Tarrasch", es: "3...c5, el Tarrasch", de: "3...c5, die Tarrasch", nl: "3...c5, de Tarrasch" }
        ],
        correct: 0,
        explanation: {
          en: "The Winawer (3...Bb4 in the French Defense) is the sharpest variation. After 4.e5, Black gets a cramped but solid position with the bishop pair, while White gets central space. It leads to highly tactical, double-edged positions.",
          es: "El Winawer (3...Ab4 en la Defensa Francesa) es la variación más aguda. Después de 4.e5, las negras obtienen una posición estrecha pero sólida con la pareja de alfiles, mientras las blancas obtienen espacio central. Conduce a posiciones altamente tácticas y de doble filo.",
          de: "Das Winawer (3...Lb4 in der Französischen Verteidigung) ist die schärfste Variante. Nach 4.e5 erhält Schwarz eine beengte, aber solide Stellung mit dem Läuferpaar, während Weiß zentralen Raum bekommt. Es führt zu hochgradig taktischen, zweischneidigen Stellungen.",
          nl: "De Winawer (3...Lb4 in de Franse Verdediging) is de scherpste variatie. Na 4.e5 krijgt zwart een krappe maar solide positie met het loperpaar, terwijl wit centrale ruimte krijgt. Het leidt tot zeer tactische, tweesnijdende posities."
        }
      },
      {
        question: {
          en: "What is 'domination' in chess?",
          es: "¿Qué es la 'dominación' en ajedrez?",
          de: "Was ist 'Dominierung' im Schach?",
          nl: "Wat is 'dominantie' in schaken?"
        },
        options: [
          { en: "When a piece traps or severely restricts an opponent's piece", es: "Cuando una pieza atrapa o restringe severamente una pieza del oponente", de: "Wenn eine Figur eine gegnerische Figur einfängt oder stark einschränkt", nl: "Wanneer een stuk een stuk van de tegenstander vasthoudt of ernstig beperkt" },
          { en: "Having more pieces", es: "Tener más piezas", de: "Mehr Figuren haben", nl: "Meer stukken hebben" },
          { en: "Controlling the center", es: "Controlar el centro", de: "Das Zentrum kontrollieren", nl: "Het centrum controleren" },
          { en: "Winning the game", es: "Ganar la partida", de: "Das Spiel gewinnen", nl: "De partij winnen" }
        ],
        correct: 0,
        explanation: {
          en: "Domination occurs when one piece completely traps or severely restricts another, often of greater value. Classic examples include a knight dominating a rook in the corner, or a bishop trapping a knight. The dominated piece becomes virtually useless.",
          es: "La dominación ocurre cuando una pieza atrapa completamente o restringe severamente a otra, a menudo de mayor valor. Ejemplos clásicos incluyen un caballo dominando una torre en la esquina, o un alfil atrapando un caballo. La pieza dominada se vuelve virtualmente inútil.",
          de: "Dominierung tritt auf, wenn eine Figur eine andere, oft wertvollere Figur vollständig einfängt oder stark einschränkt. Klassische Beispiele sind ein Springer, der einen Turm in der Ecke dominiert, oder ein Läufer, der einen Springer einfängt. Die dominierte Figur wird praktisch nutzlos.",
          nl: "Dominantie treedt op wanneer één stuk een ander, vaak waardevoller stuk volledig vasthoudt of ernstig beperkt. Klassieke voorbeelden zijn een paard dat een toren in de hoek domineert, of een loper die een paard vasthoudt. Het gedomineerde stuk wordt praktisch nutteloos."
        }
      },
      {
        question: {
          en: "What is the 'Scandinavian Defense'?",
          es: "¿Qué es la 'Defensa Escandinava'?",
          de: "Was ist die 'Skandinavische Verteidigung'?",
          nl: "Wat is de 'Scandinavische Verdediging'?"
        },
        options: [
          { en: "1.e4 d5, immediately challenging White's center pawn", es: "1.e4 d5, desafiando inmediatamente el peón central de las blancas", de: "1.e4 d5, fordert sofort Weiß' Zentralbauern heraus", nl: "1.e4 d5, onmiddellijk wit's centrale pion uitdagen" },
          { en: "A queen's pawn opening", es: "Una apertura de peón de dama", de: "Eine Damenbauern-Eröffnung", nl: "Een damepionopening" },
          { en: "A gambit line", es: "Una línea de gambito", de: "Eine Gambit-Linie", nl: "Een gambietlijn" },
          { en: "A closed defense", es: "Una defensa cerrada", de: "Eine geschlossene Verteidigung", nl: "Een gesloten verdediging" }
        ],
        correct: 0,
        explanation: {
          en: "The Scandinavian Defense (1...d5) is one of the oldest chess openings, immediately striking at White's e4-pawn. After 2.exd5 Qxd5 (or 2...Nf6), Black develops the queen early but gets quick development. Popular at club level for its simplicity.",
          es: "La Defensa Escandinava (1...d5) es una de las aperturas de ajedrez más antiguas, atacando inmediatamente el peón e4 de las blancas. Después de 2.exd5 Dxd5 (o 2...Cf6), las negras desarrollan la dama temprano pero obtienen desarrollo rápido. Popular a nivel de club por su simplicidad.",
          de: "Die Skandinavische Verteidigung (1...d5) ist eine der ältesten Schacheröffnungen und greift sofort Weiß' e4-Bauern an. Nach 2.exd5 Dxd5 (oder 2...Sf6) entwickelt Schwarz die Dame früh, bekommt aber schnelle Entwicklung. Auf Vereinsebene wegen ihrer Einfachheit beliebt.",
          nl: "De Scandinavische Verdediging (1...d5) is een van de oudste schaakopeningen, die onmiddellijk wit's e4-pion aanvalt. Na 2.exd5 Dxd5 (of 2...Pf6) ontwikkelt zwart de dame vroeg maar krijgt snelle ontwikkeling. Populair op clubniveau vanwege de eenvoud."
        }
      },
      {
        question: {
          en: "What is 'zwischenzug' (intermediate move)?",
          es: "¿Qué es 'zwischenzug' (movimiento intermedio)?",
          de: "Was ist ein 'Zwischenzug'?",
          nl: "Wat is een 'tussenzet'?"
        },
        options: [
          { en: "An in-between move that creates a threat before the expected recapture", es: "Un movimiento intermedio que crea una amenaza antes de la recaptura esperada", de: "Ein Zwischenzug, der eine Drohung schafft vor der erwarteten Rückeroberung", nl: "Een tussenzet die een dreiging creëert voor de verwachte terugslag" },
          { en: "A forced move", es: "Un movimiento forzado", de: "Ein erzwungener Zug", nl: "Een geforceerde zet" },
          { en: "The best move", es: "El mejor movimiento", de: "Der beste Zug", nl: "De beste zet" },
          { en: "A quiet move", es: "Un movimiento silencioso", de: "Ein ruhiger Zug", nl: "Een stille zet" }
        ],
        correct: 0,
        explanation: {
          en: "Zwischenzug (German for 'in-between move') is an unexpected intermediate move inserted before an expected sequence, often a check or threat. It's a common tactical motif that disrupts the opponent's plans and can win material or improve position.",
          es: "Zwischenzug (alemán para 'movimiento intermedio') es un movimiento intermedio inesperado insertado antes de una secuencia esperada, a menudo un jaque o amenaza. Es un motivo táctico común que interrumpe los planes del oponente y puede ganar material o mejorar la posición.",
          de: "Zwischenzug ist ein unerwarteter Zwischenzug, der vor einer erwarteten Sequenz eingefügt wird, oft ein Schach oder eine Drohung. Es ist ein häufiges taktisches Motiv, das die Pläne des Gegners stört und Material gewinnen oder die Stellung verbessern kann.",
          nl: "Tussenzet is een onverwachte tussenzet ingevoegd voor een verwachte volgorde, vaak een schaak of dreiging. Het is een gebruikelijk tactisch motief dat de plannen van de tegenstander verstoort en materiaal kan winnen of de positie kan verbeteren."
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
          { en: "A setup with pawns on d4, e3, f4, c3 forming a solid structure", es: "Una configuración con peones en d4, e3, f4, c3 formando una estructura sólida", de: "Eine Aufstellung mit Bauern auf d4, e3, f4, c3, die eine solide Struktur bilden", nl: "Een opstelling met pionnen op d4, e3, f4, c3 die een solide structuur vormen" },
          { en: "A pawn sacrifice", es: "Un sacrificio de peón", de: "Ein Bauernopfer", nl: "Een pionoffer" },
          { en: "A tactical trap", es: "Una trampa táctica", de: "Eine taktische Falle", nl: "Een tactische val" },
          { en: "An endgame technique", es: "Una técnica de final", de: "Eine Endspiel-Technik", nl: "Een eindspeltechniek" }
        ],
        correct: 0,
        explanation: {
          en: "The Stonewall Attack features a pawn chain on d4-e3-f4-c3, creating a solid but slightly passive structure. White typically plays for a kingside attack with pieces like Bd3, Qe1-h4, and sometimes Rf3-h3. The weak e4-square is a drawback.",
          es: "El Ataque Stonewall presenta una cadena de peones en d4-e3-f4-c3, creando una estructura sólida pero ligeramente pasiva. Las blancas típicamente juegan para un ataque en el flanco de rey con piezas como Ad3, De1-h4 y a veces Tf3-h3. La casilla e4 débil es una desventaja.",
          de: "Der Stonewall-Angriff zeigt eine Bauernkette auf d4-e3-f4-c3, die eine solide, aber etwas passive Struktur schafft. Weiß spielt typischerweise auf einen Königsflügel-Angriff mit Figuren wie Ld3, De1-h4 und manchmal Tf3-h3. Das schwache e4-Feld ist ein Nachteil.",
          nl: "De Stonewall Aanval heeft een pioncadeau op d4-e3-f4-c3, wat een solide maar enigszins passieve structuur creëert. Wit speelt typisch voor een koningszijde aanval met stukken zoals Ld3, De1-h4 en soms Tf3-h3. Het zwakke e4-veld is een nadeel."
        }
      },
      {
        question: {
          en: "What is 'permanent weakness' vs 'temporary weakness'?",
          es: "¿Qué es 'debilidad permanente' vs 'debilidad temporal'?",
          de: "Was ist 'permanente Schwäche' vs 'temporäre Schwäche'?",
          nl: "Wat is 'permanente zwakte' vs 'tijdelijke zwakte'?"
        },
        options: [
          { en: "Permanent weaknesses can't be fixed (bad pawns), temporary ones can be remedied", es: "Las debilidades permanentes no se pueden arreglar (peones malos), las temporales pueden remediarse", de: "Permanente Schwächen können nicht behoben werden (schlechte Bauern), temporäre schon", nl: "Permanente zwakheden kunnen niet worden verholpen (slechte pionnen), tijdelijke wel" },
          { en: "All weaknesses are permanent", es: "Todas las debilidades son permanentes", de: "Alle Schwächen sind permanent", nl: "Alle zwakheden zijn permanent" },
          { en: "They are the same thing", es: "Son lo mismo", de: "Sie sind dasselbe", nl: "Ze zijn hetzelfde" },
          { en: "Temporary means one move, permanent means two", es: "Temporal significa un movimiento, permanente significa dos", de: "Temporär bedeutet ein Zug, permanent bedeutet zwei", nl: "Tijdelijk betekent één zet, permanent betekent twee" }
        ],
        correct: 0,
        explanation: {
          en: "Permanent weaknesses (like isolated pawns, backward pawns, weak squares) cannot be easily fixed and remain throughout the game. Temporary weaknesses (like undefended pieces, king exposure) can be remedied through accurate play. Recognizing the difference is crucial.",
          es: "Las debilidades permanentes (como peones aislados, peones atrasados, casillas débiles) no pueden arreglarse fácilmente y permanecen durante todo el juego. Las debilidades temporales (como piezas sin defender, exposición del rey) pueden remediarse con juego preciso. Reconocer la diferencia es crucial.",
          de: "Permanente Schwächen (wie isolierte Bauern, rückständige Bauern, schwache Felder) können nicht leicht behoben werden und bleiben das ganze Spiel über. Temporäre Schwächen (wie unverteidigte Figuren, Königsexposition) können durch genaues Spiel behoben werden. Den Unterschied zu erkennen ist entscheidend.",
          nl: "Permanente zwakheden (zoals geïsoleerde pionnen, achtergebleven pionnen, zwakke velden) kunnen niet gemakkelijk worden verholpen en blijven gedurende het hele spel. Tijdelijke zwakheden (zoals onverdedigde stukken, koningsblootstelling) kunnen worden verholpen door nauwkeurig spel. Het verschil herkennen is cruciaal."
        }
      },
      {
        question: {
          en: "What is the 'Petrov Defense' (Russian Game)?",
          es: "¿Qué es la 'Defensa Petrov' (Juego Ruso)?",
          de: "Was ist die 'Petrow-Verteidigung' (Russische Partie)?",
          nl: "Wat is de 'Petrov Verdediging' (Russische Partij)?"
        },
        options: [
          { en: "1.e4 e5 2.Nf3 Nf6, counterattacking the e4-pawn", es: "1.e4 e5 2.Cf3 Cf6, contraatacando el peón e4", de: "1.e4 e5 2.Sf3 Sf6, greift den e4-Bauern an", nl: "1.e4 e5 2.Pf3 Pf6, tegenaanval op de e4-pion" },
          { en: "A gambit opening", es: "Una apertura de gambito", de: "Eine Gambit-Eröffnung", nl: "Een gambietopening" },
          { en: "A closed defense", es: "Una defensa cerrada", de: "Eine geschlossene Verteidigung", nl: "Een gesloten verdediging" },
          { en: "A queen's pawn opening", es: "Una apertura de peón de dama", de: "Eine Damenbauern-Eröffnung", nl: "Een damepionopening" }
        ],
        correct: 0,
        explanation: {
          en: "The Petrov Defense (2...Nf6) is a solid, symmetrical opening where Black counterattacks e4 instead of defending e5. It leads to balanced, drawish positions and is popular at the highest level. Named after Alexander Petrov.",
          es: "La Defensa Petrov (2...Cf6) es una apertura sólida y simétrica donde las negras contraatacan e4 en lugar de defender e5. Conduce a posiciones equilibradas con tendencia a tablas y es popular al más alto nivel. Nombrada en honor a Alexander Petrov.",
          de: "Die Petrow-Verteidigung (2...Sf6) ist eine solide, symmetrische Eröffnung, bei der Schwarz e4 angreift, anstatt e5 zu verteidigen. Sie führt zu ausgeglichenen, remisträchtigen Stellungen und ist auf höchstem Niveau beliebt. Benannt nach Alexander Petrow.",
          nl: "De Petrov Verdediging (2...Pf6) is een solide, symmetrische opening waarbij zwart e4 tegenaanvalt in plaats van e5 te verdedigen. Het leidt tot gebalanceerde, remise-achtige posities en is populair op het hoogste niveau. Vernoemd naar Alexander Petrov."
        }
      },
      {
        question: {
          en: "What is 'passed pawn' evaluation in endgames?",
          es: "¿Qué es la evaluación de 'peón pasado' en finales?",
          de: "Was ist 'Freibauer'-Bewertung in Endspielen?",
          nl: "Wat is 'vrijpion' evaluatie in eindspelen?"
        },
        options: [
          { en: "Passed pawns increase in value as they advance and kings are removed", es: "Los peones pasados aumentan de valor a medida que avanzan y los reyes se alejan", de: "Freibauern steigen im Wert, je weiter sie vorrücken und Könige entfernt sind", nl: "Vrijpionnen stijgen in waarde naarmate ze oprukken en koningen verwijderd zijn" },
          { en: "All passed pawns have equal value", es: "Todos los peones pasados tienen igual valor", de: "Alle Freibauern haben gleichen Wert", nl: "Alle vrijpionnen hebben gelijke waarde" },
          { en: "Passed pawns only matter on the 7th rank", es: "Los peones pasados solo importan en la séptima fila", de: "Freibauern zählen nur auf der 7. Reihe", nl: "Vrijpionnen tellen alleen op de 7e rij" },
          { en: "Passed pawns are weak", es: "Los peones pasados son débiles", de: "Freibauern sind schwach", nl: "Vrijpionnen zijn zwak" }
        ],
        correct: 0,
        explanation: {
          en: "In endgames, passed pawns become increasingly powerful the further they advance. Their strength multiplies when: 1) they're far from enemy king, 2) supported by your king, 3) close to promotion, 4) there are fewer pieces to blockade them. A far-advanced passed pawn can be worth a piece.",
          es: "En finales, los peones pasados se vuelven cada vez más poderosos cuanto más avanzan. Su fuerza se multiplica cuando: 1) están lejos del rey enemigo, 2) son apoyados por tu rey, 3) cerca de la promoción, 4) hay menos piezas para bloquearlos. Un peón pasado muy avanzado puede valer una pieza.",
          de: "In Endspielen werden Freibauern umso mächtiger, je weiter sie vorrücken. Ihre Stärke vervielfacht sich, wenn: 1) sie weit vom gegnerischen König entfernt sind, 2) vom eigenen König unterstützt, 3) nahe der Umwandlung, 4) weniger Figuren zum Blockieren da sind. Ein weit vorgerückter Freibauer kann eine Figur wert sein.",
          nl: "In eindspelen worden vrijpionnen steeds krachtiger naarmate ze verder oprukken. Hun kracht vermenigvuldigt wanneer: 1) ze ver van vijandelijke koning zijn, 2) ondersteund door je koning, 3) dicht bij promotie, 4) er minder stukken zijn om ze te blokkeren. Een ver opgerukte vrijpion kan een stuk waard zijn."
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
