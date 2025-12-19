// Quiz Level 1: Bord spelletjes - Stratego
(function() {
  const level1 = {
    name: {
      en: "Stratego - Beginner",
      es: "Stratego - Principiante",
      de: "Stratego - Anfänger",
      nl: "Stratego - Beginner"
    },
    questions: [
      {
        question: {
          en: "What is the objective of Stratego?",
          es: "¿Cuál es el objetivo de Stratego?",
          de: "Was ist das Ziel von Stratego?",
          nl: "Wat is het doel van Stratego?"
        },
        options: [
          { en: "Capture the opponent's flag", es: "Capturar la bandera del oponente", de: "Die gegnerische Flagge erobern", nl: "De vlag van de tegenstander veroveren" },
          { en: "Eliminate all enemy pieces", es: "Eliminar todas las piezas enemigas", de: "Alle feindlichen Figuren eliminieren", nl: "Alle vijandelijke stukken elimineren" },
          { en: "Reach the opposite side", es: "Llegar al lado opuesto", de: "Die gegenüberliegende Seite erreichen", nl: "De andere kant bereiken" },
          { en: "Control the center", es: "Controlar el centro", de: "Das Zentrum kontrollieren", nl: "Het centrum controleren" }
        ],
        correct: 0,
        explanation: {
          en: "The primary objective in Stratego is to capture your opponent's flag. This is achieved by moving one of your pieces onto the square containing the enemy flag.",
          es: "El objetivo principal en Stratego es capturar la bandera de tu oponente. Esto se logra moviendo una de tus piezas al cuadrado que contiene la bandera enemiga.",
          de: "Das Hauptziel in Stratego ist es, die Flagge deines Gegners zu erobern. Dies wird erreicht, indem du eine deiner Figuren auf das Feld mit der feindlichen Flagge bewegst.",
          nl: "Het hoofddoel in Stratego is om de vlag van je tegenstander te veroveren. Dit bereik je door een van je stukken naar het veld met de vijandelijke vlag te verplaatsen."
        }
      },
      {
        question: {
          en: "How many pieces does each player start with in classic Stratego?",
          es: "¿Con cuántas piezas comienza cada jugador en Stratego clásico?",
          de: "Mit wie vielen Figuren beginnt jeder Spieler im klassischen Stratego?",
          nl: "Met hoeveel stukken begint elke speler in klassiek Stratego?"
        },
        options: [
          { en: "30", es: "30", de: "30", nl: "30" },
          { en: "35", es: "35", de: "35", nl: "35" },
          { en: "40", es: "40", de: "40", nl: "40" },
          { en: "45", es: "45", de: "45", nl: "45" }
        ],
        correct: 2,
        explanation: {
          en: "Each player starts with 40 pieces in classic Stratego. These include various military ranks from Marshal down to Spy, plus bombs and a flag.",
          es: "Cada jugador comienza con 40 piezas en Stratego clásico. Estas incluyen varios rangos militares desde Mariscal hasta Espía, más bombas y una bandera.",
          de: "Jeder Spieler beginnt mit 40 Figuren im klassischen Stratego. Diese umfassen verschiedene militärische Ränge vom Marschall bis zum Spion, plus Bomben und eine Flagge.",
          nl: "Elke speler begint met 40 stukken in klassiek Stratego. Deze bevatten verschillende militaire rangen van Maarschalk tot Spion, plus bommen en een vlag."
        }
      },
      {
        question: {
          en: "Which piece is the strongest in Stratego?",
          es: "¿Qué pieza es la más fuerte en Stratego?",
          de: "Welche Figur ist die stärkste in Stratego?",
          nl: "Welk stuk is het sterkste in Stratego?"
        },
        options: [
          { en: "General", es: "General", de: "General", nl: "Generaal" },
          { en: "Marshal", es: "Mariscal", de: "Marschall", nl: "Maarschalk" },
          { en: "Colonel", es: "Coronel", de: "Oberst", nl: "Kolonel" },
          { en: "Major", es: "Mayor", de: "Major", nl: "Majoor" }
        ],
        correct: 1,
        explanation: {
          en: "The Marshal (rank 1) is the highest-ranking and strongest piece in Stratego. It can defeat all other movable pieces except when attacked by the Spy.",
          es: "El Mariscal (rango 1) es la pieza de mayor rango y más fuerte en Stratego. Puede derrotar a todas las otras piezas móviles excepto cuando es atacado por el Espía.",
          de: "Der Marschall (Rang 1) ist die ranghöchste und stärkste Figur in Stratego. Er kann alle anderen beweglichen Figuren besiegen, außer wenn er vom Spion angegriffen wird.",
          nl: "De Maarschalk (rang 1) is het hoogste gerangschikte en sterkste stuk in Stratego. Het kan alle andere beweegbare stukken verslaan behalve wanneer het wordt aangevallen door de Spion."
        }
      },
      {
        question: {
          en: "What special ability does the Spy have in Stratego?",
          es: "¿Qué habilidad especial tiene el Espía en Stratego?",
          de: "Welche besondere Fähigkeit hat der Spion in Stratego?",
          nl: "Welke speciale vaardigheid heeft de Spion in Stratego?"
        },
        options: [
          { en: "Can move multiple spaces", es: "Puede moverse múltiples espacios", de: "Kann mehrere Felder bewegen", nl: "Kan meerdere vakken bewegen" },
          { en: "Can jump over pieces", es: "Puede saltar sobre piezas", de: "Kann über Figuren springen", nl: "Kan over stukken springen" },
          { en: "Can defeat the Marshal", es: "Puede derrotar al Mariscal", de: "Kann den Marschall besiegen", nl: "Kan de Maarschalk verslaan" },
          { en: "Is invisible to opponent", es: "Es invisible para el oponente", de: "Ist für den Gegner unsichtbar", nl: "Is onzichtbaar voor de tegenstander" }
        ],
        correct: 2,
        explanation: {
          en: "The Spy's special ability is that it can defeat the Marshal when the Spy attacks first. This makes the weakest piece capable of defeating the strongest one through surprise.",
          es: "La habilidad especial del Espía es que puede derrotar al Mariscal cuando el Espía ataca primero. Esto hace que la pieza más débil sea capaz de derrotar a la más fuerte por sorpresa.",
          de: "Die besondere Fähigkeit des Spions ist, dass er den Marschall besiegen kann, wenn der Spion zuerst angreift. Dies macht die schwächste Figur fähig, die stärkste durch Überraschung zu besiegen.",
          nl: "De speciale vaardigheid van de Spion is dat hij de Maarschalk kan verslaan wanneer de Spion als eerste aanvalt. Dit maakt het zwakste stuk in staat om het sterkste te verslaan door verrassing."
        }
      },
      {
        question: {
          en: "How many bombs does each player have in Stratego?",
          es: "¿Cuántas bombas tiene cada jugador en Stratego?",
          de: "Wie viele Bomben hat jeder Spieler in Stratego?",
          nl: "Hoeveel bommen heeft elke speler in Stratego?"
        },
        options: [
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "8", es: "8", de: "8", nl: "8" }
        ],
        correct: 2,
        explanation: {
          en: "Each player has 6 bombs in classic Stratego. Bombs are immovable defensive pieces that destroy any attacking piece except Miners, who can defuse them.",
          es: "Cada jugador tiene 6 bombas en Stratego clásico. Las bombas son piezas defensivas inmóviles que destruyen cualquier pieza atacante excepto los Mineros, que pueden desactivarlas.",
          de: "Jeder Spieler hat 6 Bomben im klassischen Stratego. Bomben sind unbewegliche Verteidigungsfiguren, die jede angreifende Figur zerstören, außer Mineure, die sie entschärfen können.",
          nl: "Elke speler heeft 6 bommen in klassiek Stratego. Bommen zijn onbeweegbare verdedigingsstukken die elk aanvallend stuk vernietigen behalve Mijnwerkers, die ze kunnen ontmantelen."
        }
      },
      {
        question: {
          en: "Which piece can defuse bombs in Stratego?",
          es: "¿Qué pieza puede desactivar bombas en Stratego?",
          de: "Welche Figur kann Bomben in Stratego entschärfen?",
          nl: "Welk stuk kan bommen ontmantelen in Stratego?"
        },
        options: [
          { en: "Engineer", es: "Ingeniero", de: "Ingenieur", nl: "Ingenieur" },
          { en: "Miner", es: "Minero", de: "Mineur", nl: "Mijnwerker" },
          { en: "Scout", es: "Explorador", de: "Späher", nl: "Verkenner" },
          { en: "Sergeant", es: "Sargento", de: "Sergeant", nl: "Sergeant" }
        ],
        correct: 1,
        explanation: {
          en: "The Miner (rank 8) is the only piece that can defuse bombs. There are 5 Miners per player, making them valuable for clearing defensive positions and protecting other pieces.",
          es: "El Minero (rango 8) es la única pieza que puede desactivar bombas. Hay 5 Mineros por jugador, haciéndolos valiosos para limpiar posiciones defensivas y proteger otras piezas.",
          de: "Der Mineur (Rang 8) ist die einzige Figur, die Bomben entschärfen kann. Es gibt 5 Mineure pro Spieler, was sie wertvoll macht für das Räumen von Verteidigungspositionen und den Schutz anderer Figuren.",
          nl: "De Mijnwerker (rang 8) is het enige stuk dat bommen kan ontmantelen. Er zijn 5 Mijnwerkers per speler, waardoor ze waardevol zijn voor het opruimen van verdedigingsposities en het beschermen van andere stukken."
        }
      },
      {
        question: {
          en: "What is special about Scouts in Stratego?",
          es: "¿Qué es especial sobre los Exploradores en Stratego?",
          de: "Was ist besonders an Spähern in Stratego?",
          nl: "Wat is speciaal aan Verkenners in Stratego?"
        },
        options: [
          { en: "They can attack multiple times", es: "Pueden atacar múltiples veces", de: "Sie können mehrfach angreifen", nl: "Ze kunnen meerdere keren aanvallen" },
          { en: "They can move multiple spaces", es: "Pueden moverse múltiples espacios", de: "Sie können mehrere Felder bewegen", nl: "Ze kunnen meerdere vakken bewegen" },
          { en: "They can see opponent's ranks", es: "Pueden ver los rangos del oponente", de: "Sie können die Ränge des Gegners sehen", nl: "Ze kunnen de rangen van de tegenstander zien" },
          { en: "They cannot be captured", es: "No pueden ser capturados", de: "Sie können nicht gefangen werden", nl: "Ze kunnen niet gevangen worden" }
        ],
        correct: 1,
        explanation: {
          en: "Scouts (rank 9) can move multiple spaces in a single turn along empty rows or columns, similar to a rook in chess. This mobility makes them excellent for reconnaissance and quick strikes.",
          es: "Los Exploradores (rango 9) pueden moverse múltiples espacios en un solo turno a lo largo de filas o columnas vacías, similar a una torre en ajedrez. Esta movilidad los hace excelentes para reconocimiento y ataques rápidos.",
          de: "Späher (Rang 9) können mehrere Felder in einem Zug entlang leerer Reihen oder Spalten bewegen, ähnlich einem Turm im Schach. Diese Mobilität macht sie ausgezeichnet für Aufklärung und schnelle Angriffe.",
          nl: "Verkenners (rang 9) kunnen meerdere vakken in één beurt bewegen langs lege rijen of kolommen, vergelijkbaar met een toren in schaak. Deze mobiliteit maakt ze uitstekend voor verkenning en snelle aanvallen."
        }
      },
      {
        question: {
          en: "How many lakes are on the Stratego board?",
          es: "¿Cuántos lagos hay en el tablero de Stratego?",
          de: "Wie viele Seen gibt es auf dem Stratego-Brett?",
          nl: "Hoeveel meren zijn er op het Stratego-bord?"
        },
        options: [
          { en: "1", es: "1", de: "1", nl: "1" },
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "4", es: "4", de: "4", nl: "4" }
        ],
        correct: 1,
        explanation: {
          en: "There are 2 lakes on the Stratego board, each consisting of 2x2 squares. These lakes are impassable obstacles that pieces must move around, creating strategic chokepoints.",
          es: "Hay 2 lagos en el tablero de Stratego, cada uno consistiendo en cuadrados de 2x2. Estos lagos son obstáculos infranqueables que las piezas deben rodear, creando puntos de estrangulamiento estratégicos.",
          de: "Es gibt 2 Seen auf dem Stratego-Brett, jeder besteht aus 2x2-Feldern. Diese Seen sind unpassierbare Hindernisse, die Figuren umgehen müssen, was strategische Engpässe schafft.",
          nl: "Er zijn 2 meren op het Stratego-bord, elk bestaande uit 2x2 vierkanten. Deze meren zijn onoverkomelijke obstakels die stukken moeten omzeilen, wat strategische knelpunten creëert."
        }
      },
      {
        question: {
          en: "What happens when two pieces of equal rank battle?",
          es: "¿Qué pasa cuando dos piezas de igual rango batallan?",
          de: "Was passiert, wenn zwei Figuren gleichen Ranges kämpfen?",
          nl: "Wat gebeurt er wanneer twee stukken van gelijke rang vechten?"
        },
        options: [
          { en: "Attacker wins", es: "El atacante gana", de: "Angreifer gewinnt", nl: "Aanvaller wint" },
          { en: "Defender wins", es: "El defensor gana", de: "Verteidiger gewinnt", nl: "Verdediger wint" },
          { en: "Both removed", es: "Ambas piezas son removidas", de: "Beide Figuren werden entfernt", nl: "Beide stukken worden weggenomen" },
          { en: "Battle is repeated", es: "La batalla se repite", de: "Schlacht wird wiederholt", nl: "Gevecht wordt herhaald" }
        ],
        correct: 2,
        explanation: {
          en: "When two pieces of equal rank battle, both pieces are removed from the board. This creates interesting strategic decisions about when to attack with equal-ranked pieces.",
          es: "Cuando dos piezas de igual rango batallan, ambas piezas son removidas del tablero. Esto crea decisiones estratégicas interesantes sobre cuándo atacar con piezas de igual rango.",
          de: "Wenn zwei Figuren gleichen Ranges kämpfen, werden beide Figuren vom Brett entfernt. Dies schafft interessante strategische Entscheidungen darüber, wann man mit gleichrangigen Figuren angreift.",
          nl: "Wanneer twee stukken van gelijke rang vechten, worden beide stukken van het bord weggenomen. Dit creëert interessante strategische beslissingen over wanneer aan te vallen met gelijkgerangschikte stukken."
        }
      },
      {
        question: {
          en: "In which rows must players place their initial setup?",
          es: "¿En qué filas deben los jugadores colocar su configuración inicial?",
          de: "In welchen Reihen müssen Spieler ihre Anfangsaufstellung platzieren?",
          nl: "In welke rijen moeten spelers hun initiële opstelling plaatsen?"
        },
        options: [
          { en: "First 3 rows", es: "Primeras 3 filas", de: "Erste 3 Reihen", nl: "Eerste 3 rijen" },
          { en: "First 4 rows", es: "Primeras 4 filas", de: "Erste 4 Reihen", nl: "Eerste 4 rijen" },
          { en: "First 5 rows", es: "Primeras 5 filas", de: "Erste 5 Reihen", nl: "Eerste 5 rijen" },
          { en: "First 6 rows", es: "Primeras 6 filas", de: "Erste 6 Reihen", nl: "Eerste 6 rijen" }
        ],
        correct: 1,
        explanation: {
          en: "Players must place their 40 pieces in the first 4 rows on their side of the board. This creates a clear battlefield with 2 neutral rows in the middle where combat takes place.",
          es: "Los jugadores deben colocar sus 40 piezas en las primeras 4 filas de su lado del tablero. Esto crea un campo de batalla claro con 2 filas neutrales en el medio donde tiene lugar el combate.",
          de: "Spieler müssen ihre 40 Figuren in den ersten 4 Reihen auf ihrer Seite des Brettes platzieren. Dies schafft ein klares Schlachtfeld mit 2 neutralen Reihen in der Mitte, wo der Kampf stattfindet.",
          nl: "Spelers moeten hun 40 stukken in de eerste 4 rijen aan hun kant van het bord plaatsen. Dit creëert een duidelijk slagveld met 2 neutrale rijen in het midden waar gevechten plaatsvinden."
        }
      },
      {
        question: {
          en: "Which pieces are immovable in Stratego?",
          es: "¿Qué piezas son inmóviles en Stratego?",
          de: "Welche Figuren sind unbeweglich in Stratego?",
          nl: "Welke stukken zijn onbeweegbaar in Stratego?"
        },
        options: [
          { en: "Flag only", es: "Solo la bandera", de: "Nur die Flagge", nl: "Alleen de vlag" },
          { en: "Bombs only", es: "Solo las bombas", de: "Nur die Bomben", nl: "Alleen de bommen" },
          { en: "Flag and bombs", es: "Bandera y bombas", de: "Flagge und Bomben", nl: "Vlag en bommen" },
          { en: "Marshal and flag", es: "Mariscal y bandera", de: "Marschall und Flagge", nl: "Maarschalk en vlag" }
        ],
        correct: 2,
        explanation: {
          en: "Both the flag and bombs are immovable pieces in Stratego. The flag must be protected as it represents victory, while bombs serve as stationary defensive obstacles.",
          es: "Tanto la bandera como las bombas son piezas inmóviles en Stratego. La bandera debe ser protegida ya que representa la victoria, mientras las bombas sirven como obstáculos defensivos estacionarios.",
          de: "Sowohl die Flagge als auch die Bomben sind unbewegliche Figuren in Stratego. Die Flagge muss geschützt werden, da sie den Sieg darstellt, während Bomben als stationäre Verteidigungshindernisse dienen.",
          nl: "Zowel de vlag als de bommen zijn onbeweegbare stukken in Stratego. De vlag moet beschermd worden omdat het de overwinning vertegenwoordigt, terwijl bommen dienen als stationaire verdedigingsobstakels."
        }
      },
      {
        question: {
          en: "How many Lieutenants does each player have?",
          es: "¿Cuántos Tenientes tiene cada jugador?",
          de: "Wie viele Leutnants hat jeder Spieler?",
          nl: "Hoeveel Luitenants heeft elke speler?"
        },
        options: [
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "5", es: "5", de: "5", nl: "5" }
        ],
        correct: 2,
        explanation: {
          en: "Each player has 4 Lieutenants (rank 5) in classic Stratego. Lieutenants are mid-level officers that provide good balance between offensive capability and preservation of stronger pieces.",
          es: "Cada jugador tiene 4 Tenientes (rango 5) en Stratego clásico. Los Tenientes son oficiales de nivel medio que proporcionan un buen equilibrio entre capacidad ofensiva y preservación de piezas más fuertes.",
          de: "Jeder Spieler hat 4 Leutnants (Rang 5) im klassischen Stratego. Leutnants sind mittlere Offiziere, die ein gutes Gleichgewicht zwischen Angriffsfähigkeit und Erhaltung stärkerer Figuren bieten.",
          nl: "Elke speler heeft 4 Luitenants (rang 5) in klassiek Stratego. Luitenants zijn mid-level officieren die een goede balans bieden tussen aanvalscapaciteit en behoud van sterkere stukken."
        }
      },
      {
        question: {
          en: "What is the rank number of the General?",
          es: "¿Cuál es el número de rango del General?",
          de: "Welche Rangnummer hat der General?",
          nl: "Wat is het rangnummer van de Generaal?"
        },
        options: [
          { en: "1", es: "1", de: "1", nl: "1" },
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "4", es: "4", de: "4", nl: "4" }
        ],
        correct: 1,
        explanation: {
          en: "The General has rank 2, making it the second-strongest piece after the Marshal (rank 1). There is only one General per player, making it a valuable and powerful piece.",
          es: "El General tiene rango 2, convirtiéndolo en la segunda pieza más fuerte después del Mariscal (rango 1). Hay solo un General por jugador, haciéndolo una pieza valiosa y poderosa.",
          de: "Der General hat Rang 2 und ist damit die zweitstärkste Figur nach dem Marschall (Rang 1). Es gibt nur einen General pro Spieler, was ihn zu einer wertvollen und mächtigen Figur macht.",
          nl: "De Generaal heeft rang 2, waardoor het het op één na sterkste stuk is na de Maarschalk (rang 1). Er is slechts één Generaal per speler, waardoor het een waardevol en krachtig stuk is."
        }
      },
      {
        question: {
          en: "Can you move diagonally in Stratego?",
          es: "¿Puedes moverte en diagonal en Stratego?",
          de: "Kannst du dich diagonal in Stratego bewegen?",
          nl: "Kun je diagonaal bewegen in Stratego?"
        },
        options: [
          { en: "Yes, always", es: "Sí, siempre", de: "Ja, immer", nl: "Ja, altijd" },
          { en: "No, never", es: "No, nunca", de: "Nein, niemals", nl: "Nee, nooit" },
          { en: "Only Scouts can", es: "Solo los Exploradores pueden", de: "Nur Späher können", nl: "Alleen Verkenners kunnen" },
          { en: "Only the Marshal can", es: "Solo el Mariscal puede", de: "Nur der Marschall kann", nl: "Alleen de Maarschalk kan" }
        ],
        correct: 1,
        explanation: {
          en: "No pieces can move diagonally in Stratego. All movement is restricted to horizontal and vertical directions only, one square at a time (except Scouts which can move multiple squares).",
          es: "Ninguna pieza puede moverse en diagonal en Stratego. Todo movimiento está restringido solo a direcciones horizontales y verticales, un cuadrado a la vez (excepto Exploradores que pueden moverse múltiples cuadrados).",
          de: "Keine Figuren können sich diagonal in Stratego bewegen. Alle Bewegungen sind nur auf horizontale und vertikale Richtungen beschränkt, ein Feld pro Zug (außer Späher, die mehrere Felder bewegen können).",
          nl: "Geen stukken kunnen diagonaal bewegen in Stratego. Alle beweging is beperkt tot alleen horizontale en verticale richtingen, één vierkant per keer (behalve Verkenners die meerdere vierkanten kunnen bewegen)."
        }
      },
      {
        question: {
          en: "What happens when a piece attacks a bomb?",
          es: "¿Qué pasa cuando una pieza ataca una bomba?",
          de: "Was passiert, wenn eine Figur eine Bombe angreift?",
          nl: "Wat gebeurt er wanneer een stuk een bom aanvalt?"
        },
        options: [
          { en: "The bomb is destroyed", es: "La bomba es destruida", de: "Die Bombe wird zerstört", nl: "De bom wordt vernietigd" },
          { en: "Attacker destroyed", es: "La pieza atacante es destruida", de: "Die angreifende Figur wird zerstört", nl: "Het aanvallende stuk wordt vernietigd" },
          { en: "Both are destroyed", es: "Ambas son destruidas", de: "Beide werden zerstört", nl: "Beide worden vernietigd" },
          { en: "Nothing happens", es: "No pasa nada", de: "Nichts passiert", nl: "Er gebeurt niets" }
        ],
        correct: 1,
        explanation: {
          en: "When any piece (except a Miner) attacks a bomb, the attacking piece is destroyed and the bomb remains. Only Miners can safely attack and defuse bombs.",
          es: "Cuando cualquier pieza (excepto un Minero) ataca una bomba, la pieza atacante es destruida y la bomba permanece. Solo los Mineros pueden atacar y desactivar bombas de manera segura.",
          de: "Wenn eine Figur (außer einem Mineur) eine Bombe angreift, wird die angreifende Figur zerstört und die Bombe bleibt. Nur Mineure können Bomben sicher angreifen und entschärfen.",
          nl: "Wanneer een stuk (behalve een Mijnwerker) een bom aanvalt, wordt het aanvallende stuk vernietigd en blijft de bom. Alleen Mijnwerkers kunnen veilig bommen aanvallen en ontmantelen."
        }
      },
      {
        question: {
          en: "How many different ranks of pieces are there in Stratego?",
          es: "¿Cuántos rangos diferentes de piezas hay en Stratego?",
          de: "Wie viele verschiedene Ränge von Figuren gibt es in Stratego?",
          nl: "Hoeveel verschillende rangen van stukken zijn er in Stratego?"
        },
        options: [
          { en: "10", es: "10", de: "10", nl: "10" },
          { en: "11", es: "11", de: "11", nl: "11" },
          { en: "12", es: "12", de: "12", nl: "12" },
          { en: "13", es: "13", de: "13", nl: "13" }
        ],
        correct: 2,
        explanation: {
          en: "There are 12 different types of pieces in Stratego: Marshal (1), General (2), Colonel (3), Major (4), Captain (5), Lieutenant (6), Sergeant (7), Miner (8), Scout (9), Spy (S), Bomb (B), and Flag (F).",
          es: "Hay 12 tipos diferentes de piezas en Stratego: Mariscal (1), General (2), Coronel (3), Mayor (4), Capitán (5), Teniente (6), Sargento (7), Minero (8), Explorador (9), Espía (S), Bomba (B), y Bandera (F).",
          de: "Es gibt 12 verschiedene Arten von Figuren in Stratego: Marschall (1), General (2), Oberst (3), Major (4), Hauptmann (5), Leutnant (6), Sergeant (7), Mineur (8), Späher (9), Spion (S), Bombe (B), und Flagge (F).",
          nl: "Er zijn 12 verschillende soorten stukken in Stratego: Maarschalk (1), Generaal (2), Kolonel (3), Majoor (4), Kapitein (5), Luitenant (6), Sergeant (7), Mijnwerker (8), Verkenner (9), Spion (S), Bom (B), en Vlag (F)."
        }
      },
      {
        question: {
          en: "What is the standard board size for Stratego?",
          es: "¿Cuál es el tamaño estándar del tablero para Stratego?",
          de: "Welche Standardbrettgröße hat Stratego?",
          nl: "Wat is de standaard bordgrootte voor Stratego?"
        },
        options: [
          { en: "8x8", es: "8x8", de: "8x8", nl: "8x8" },
          { en: "10x10", es: "10x10", de: "10x10", nl: "10x10" },
          { en: "12x12", es: "12x12", de: "12x12", nl: "12x12" },
          { en: "15x15", es: "15x15", de: "15x15", nl: "15x15" }
        ],
        correct: 1,
        explanation: {
          en: "The standard Stratego board is 10x10 squares, providing 100 total spaces. This includes the 8 lake squares (2 lakes of 4 squares each) and 92 playable squares for piece placement and movement.",
          es: "El tablero estándar de Stratego es de 10x10 cuadrados, proporcionando 100 espacios totales. Esto incluye los 8 cuadrados de lago (2 lagos de 4 cuadrados cada uno) y 92 cuadrados jugables para colocación y movimiento de piezas.",
          de: "Das Standard-Stratego-Brett ist 10x10 Felder groß und bietet 100 Gesamtfelder. Dies umfasst die 8 Seefelder (2 Seen mit je 4 Feldern) und 92 spielbare Felder für Figurenplatzierung und -bewegung.",
          nl: "Het standaard Stratego-bord is 10x10 vierkanten, wat 100 totale ruimtes biedt. Dit omvat de 8 meervakken (2 meren van 4 vakken elk) en 92 speelbare vakken voor stukplaatsing en beweging."
        }
      },
      {
        question: {
          en: "Can you see your opponent's piece ranks during the game?",
          es: "¿Puedes ver los rangos de las piezas de tu oponente durante el juego?",
          de: "Kannst du die Ränge der Figuren deines Gegners während des Spiels sehen?",
          nl: "Kun je de rangen van je tegenstanders stukken zien tijdens het spel?"
        },
        options: [
          { en: "Yes, always visible", es: "Sí, siempre visibles", de: "Ja, immer sichtbar", nl: "Ja, altijd zichtbaar" },
          { en: "No, hidden until combat", es: "No, ocultos hasta el combate", de: "Nein, verborgen bis zum Kampf", nl: "Nee, verborgen tot gevecht" },
          { en: "Only high-ranking pieces", es: "Solo piezas de alto rango", de: "Nur hochrangige Figuren", nl: "Alleen hooggerangschikte stukken" },
          { en: "Only your own pieces", es: "Solo tus propias piezas", de: "Nur deine eigenen Figuren", nl: "Alleen je eigen stukken" }
        ],
        correct: 1,
        explanation: {
          en: "Opponent's piece ranks are hidden throughout the game and only revealed when pieces engage in combat. This creates the fog of war that makes Stratego a game of deduction and bluffing.",
          es: "Los rangos de las piezas del oponente están ocultos durante todo el juego y solo se revelan cuando las piezas se involucran en combate. Esto crea la niebla de guerra que hace de Stratego un juego de deducción y farol.",
          de: "Die Ränge der gegnerischen Figuren sind während des gesamten Spiels verborgen und werden nur beim Kampf enthüllt. Dies schafft den Nebel des Krieges, der Stratego zu einem Spiel der Deduktion und des Bluffs macht.",
          nl: "De rangen van tegenstanders stukken zijn verborgen gedurende het hele spel en worden alleen onthuld wanneer stukken in gevecht raken. Dit creëert de mist van oorlog die Stratego een spel van deductie en bluffen maakt."
        }
      },
      {
        question: {
          en: "How many Sergeants does each player start with?",
          es: "¿Con cuántos Sargentos comienza cada jugador?",
          de: "Mit wie vielen Sergeanten beginnt jeder Spieler?",
          nl: "Met hoeveel Sergeants begint elke speler?"
        },
        options: [
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "6", es: "6", de: "6", nl: "6" }
        ],
        correct: 1,
        explanation: {
          en: "Each player starts with 4 Sergeants (rank 7) in classic Stratego. Sergeants are lower-ranking officers useful for probing enemy defenses and supporting stronger pieces in attacks.",
          es: "Cada jugador comienza con 4 Sargentos (rango 7) en Stratego clásico. Los Sargentos son oficiales de menor rango útiles para sondear las defensas enemigas y apoyar piezas más fuertes en ataques.",
          de: "Jeder Spieler beginnt mit 4 Sergeanten (Rang 7) im klassischen Stratego. Sergeanten sind niederrangige Offiziere, die nützlich sind, um feindliche Verteidigungen zu erkunden und stärkere Figuren bei Angriffen zu unterstützen.",
          nl: "Elke speler begint met 4 Sergeants (rang 7) in klassiek Stratego. Sergeants zijn lagergerangschikte officieren die nuttig zijn voor het verkennen van vijandelijke verdediging en het ondersteunen van sterkere stukken bij aanvallen."
        }
      },
      {
        question: {
          en: "What is the only piece that can capture the Spy?",
          es: "¿Cuál es la única pieza que puede capturar al Espía?",
          de: "Welche ist die einzige Figur, die den Spion gefangen nehmen kann?",
          nl: "Wat is het enige stuk dat de Spion kan veroveren?"
        },
        options: [
          { en: "Any piece captures Spy", es: "Cualquier pieza puede capturar al Espía", de: "Jede Figur kann den Spion gefangen nehmen", nl: "Elk stuk kan de Spion veroveren" },
          { en: "Only the Marshal", es: "Solo el Mariscal", de: "Nur der Marschall", nl: "Alleen de Maarschalk" },
          { en: "Only higher-ranked pieces", es: "Solo piezas de mayor rango", de: "Nur höherrangige Figuren", nl: "Alleen hogergerangschikte stukken" },
          { en: "Only another Spy", es: "Solo otro Espía", de: "Nur ein anderer Spion", nl: "Alleen een andere Spion" }
        ],
        correct: 0,
        explanation: {
          en: "Any piece captures Spy in normal combat. However, the Spy's special ability is that it can capture the Marshal (the highest-ranking piece) when the Spy attacks the Marshal.",
          es: "Cualquier pieza puede capturar al Espía en combate normal. Sin embargo, la habilidad especial del Espía es que puede capturar al Mariscal (la pieza de mayor rango) cuando el Espía ataca al Mariscal.",
          de: "Jede Figur kann den Spion im normalen Kampf gefangen nehmen. Die Spezialfähigkeit des Spions ist jedoch, dass er den Marschall (die höchstrangige Figur) gefangen nehmen kann, wenn der Spion den Marschall angreift.",
          nl: "Elk stuk kan de Spion veroveren in normaal gevecht. De speciale vaardigheid van de Spion is echter dat hij de Maarschalk (het hoogstgerangschikte stuk) kan veroveren wanneer de Spion de Maarschalk aanvalt."
        }
      },
      {
        question: {
          en: "How many Scouts does each player have?",
          es: "¿Cuántos Exploradores tiene cada jugador?",
          de: "Wie viele Späher hat jeder Spieler?",
          nl: "Hoeveel Verkenners heeft elke speler?"
        },
        options: [
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "7", es: "7", de: "7", nl: "7" },
          { en: "8", es: "8", de: "8", nl: "8" },
          { en: "9", es: "9", de: "9", nl: "9" }
        ],
        correct: 2,
        explanation: {
          en: "Each player has 8 Scouts (rank 9), making them the most numerous movable piece. Their ability to move multiple spaces makes them valuable for reconnaissance.",
          es: "Cada jugador tiene 8 Exploradores (rango 9), convirtiéndolos en la pieza móvil más numerosa. Su capacidad para moverse múltiples espacios los hace valiosos para reconocimiento.",
          de: "Jeder Spieler hat 8 Späher (Rang 9), was sie zur zahlreichsten beweglichen Figur macht. Ihre Fähigkeit, mehrere Felder zu bewegen, macht sie wertvoll für Aufklärung.",
          nl: "Elke speler heeft 8 Verkenners (rang 9), waardoor ze het meest voorkomende beweegbare stuk zijn. Hun vermogen om meerdere vakken te bewegen maakt ze waardevol voor verkenning."
        }
      },
      {
        question: {
          en: "What rank is the Captain?",
          es: "¿Qué rango es el Capitán?",
          de: "Welchen Rang hat der Hauptmann?",
          nl: "Wat is de rang van de Kapitein?"
        },
        options: [
          { en: "Rank 4", es: "Rango 4", de: "Rang 4", nl: "Rang 4" },
          { en: "Rank 5", es: "Rango 5", de: "Rang 5", nl: "Rang 5" },
          { en: "Rank 6", es: "Rango 6", de: "Rang 6", nl: "Rang 6" },
          { en: "Rank 7", es: "Rango 7", de: "Rang 7", nl: "Rang 7" }
        ],
        correct: 1,
        explanation: {
          en: "The Captain is rank 5 (note: in some versions it's rank 6). Each player has 4 Captains, making them important mid-strength attacking pieces.",
          es: "El Capitán es rango 5 (nota: en algunas versiones es rango 6). Cada jugador tiene 4 Capitanes, convirtiéndolos en piezas atacantes importantes de fuerza media.",
          de: "Der Hauptmann ist Rang 5 (Hinweis: in einigen Versionen ist er Rang 6). Jeder Spieler hat 4 Hauptmänner, was sie zu wichtigen mittleren Angriffsfiguren macht.",
          nl: "De Kapitein is rang 5 (opmerking: in sommige versies is het rang 6). Elke speler heeft 4 Kapiteins, waardoor ze belangrijke mid-strength aanvalsstukken zijn."
        }
      },
      {
        question: {
          en: "Can Scouts attack on the same turn they move multiple spaces?",
          es: "¿Pueden los Exploradores atacar en el mismo turno que se mueven múltiples espacios?",
          de: "Können Späher im selben Zug angreifen, in dem sie mehrere Felder bewegen?",
          nl: "Kunnen Verkenners aanvallen in dezelfde beurt dat ze meerdere vakken bewegen?"
        },
        options: [
          { en: "Yes, always", es: "Sí, siempre", de: "Ja, immer", nl: "Ja, altijd" },
          { en: "No, never", es: "No, nunca", de: "Nein, niemals", nl: "Nee, nooit" },
          { en: "Only if moving 2 spaces", es: "Solo si se mueven 2 espacios", de: "Nur wenn sie 2 Felder bewegen", nl: "Alleen bij 2 vakken bewegen" },
          { en: "Yes, attack ends movement", es: "Sí, el ataque termina el movimiento", de: "Ja, Angriff beendet Bewegung", nl: "Ja, aanval beëindigt beweging" }
        ],
        correct: 3,
        explanation: {
          en: "Scouts can attack while moving multiple spaces, but the attack ends their movement for that turn. They attack the first enemy piece encountered during their movement.",
          es: "Los Exploradores pueden atacar mientras se mueven múltiples espacios, pero el ataque termina su movimiento para ese turno. Atacan la primera pieza enemiga encontrada durante su movimiento.",
          de: "Späher können beim Bewegen mehrerer Felder angreifen, aber der Angriff beendet ihre Bewegung für diesen Zug. Sie greifen die erste feindliche Figur an, die während ihrer Bewegung angetroffen wird.",
          nl: "Verkenners kunnen aanvallen terwijl ze meerdere vakken bewegen, maar de aanval beëindigt hun beweging voor die beurt. Ze vallen het eerste vijandelijke stuk aan dat tijdens hun beweging wordt aangetroffen."
        }
      },
      {
        question: {
          en: "How many Colonels does each player have?",
          es: "¿Cuántos Coroneles tiene cada jugador?",
          de: "Wie viele Oberste hat jeder Spieler?",
          nl: "Hoeveel Kolonels heeft elke speler?"
        },
        options: [
          { en: "1", es: "1", de: "1", nl: "1" },
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "4", es: "4", de: "4", nl: "4" }
        ],
        correct: 1,
        explanation: {
          en: "Each player has 2 Colonels (rank 3). As the third-strongest pieces, Colonels are valuable for both offense and protecting higher-ranked pieces.",
          es: "Cada jugador tiene 2 Coroneles (rango 3). Como las terceras piezas más fuertes, los Coroneles son valiosos tanto para la ofensiva como para proteger piezas de mayor rango.",
          de: "Jeder Spieler hat 2 Oberste (Rang 3). Als drittstärkste Figuren sind Oberste wertvoll sowohl für Angriff als auch zum Schutz höherrangiger Figuren.",
          nl: "Elke speler heeft 2 Kolonels (rang 3). Als de op twee na sterkste stukken zijn Kolonels waardevol voor zowel aanval als bescherming van hogergerangschikte stukken."
        }
      },
      {
        question: {
          en: "What is the primary purpose of bombs in Stratego?",
          es: "¿Cuál es el propósito principal de las bombas en Stratego?",
          de: "Was ist der Hauptzweck von Bomben in Stratego?",
          nl: "Wat is het primaire doel van bommen in Stratego?"
        },
        options: [
          { en: "Attack enemy pieces", es: "Atacar piezas enemigas", de: "Feindliche Figuren angreifen", nl: "Vijandelijke stukken aanvallen" },
          { en: "Protect the flag", es: "Proteger la bandera", de: "Die Flagge schützen", nl: "De vlag beschermen" },
          { en: "Block movement paths", es: "Bloquear caminos de movimiento", de: "Bewegungswege blockieren", nl: "Bewegingspaden blokkeren" },
          { en: "Reveal enemy ranks", es: "Revelar rangos enemigos", de: "Feindliche Ränge aufdecken", nl: "Vijandelijke rangen onthullen" }
        ],
        correct: 1,
        explanation: {
          en: "The primary purpose of bombs is to protect the flag. Players typically surround their flag with bombs to create a defensive barrier that only Miners can safely penetrate.",
          es: "El propósito principal de las bombas es proteger la bandera. Los jugadores típicamente rodean su bandera con bombas para crear una barrera defensiva que solo los Mineros pueden penetrar de manera segura.",
          de: "Der Hauptzweck von Bomben ist es, die Flagge zu schützen. Spieler umgeben typischerweise ihre Flagge mit Bomben, um eine Verteidigungsbarriere zu schaffen, die nur Mineure sicher durchdringen können.",
          nl: "Het primaire doel van bommen is om de vlag te beschermen. Spelers omringen typisch hun vlag met bommen om een verdedigingsbarrière te creëren die alleen Mijnwerkers veilig kunnen doordringen."
        }
      },
      {
        question: {
          en: "Can you move a piece back and forth between the same two squares repeatedly?",
          es: "¿Puedes mover una pieza de un lado a otro entre los mismos dos cuadrados repetidamente?",
          de: "Kannst du eine Figur wiederholt zwischen denselben zwei Feldern hin und her bewegen?",
          nl: "Kun je een stuk herhaaldelijk heen en weer bewegen tussen dezelfde twee vakken?"
        },
        options: [
          { en: "Yes, unlimited", es: "Sí, ilimitadamente", de: "Ja, unbegrenzt", nl: "Ja, onbeperkt" },
          { en: "No, forbidden", es: "No, prohibido", de: "Nein, verboten", nl: "Nee, verboden" },
          { en: "Only twice", es: "Solo dos veces", de: "Nur zweimal", nl: "Slechts tweemaal" },
          { en: "Three-move rule applies", es: "Se aplica regla de tres movimientos", de: "Drei-Züge-Regel gilt", nl: "Drie-zetten regel geldt" }
        ],
        correct: 3,
        explanation: {
          en: "The three-move rule prevents endless repetition. If the same board position occurs three times with the same player to move, that player must make a different move.",
          es: "La regla de tres movimientos previene la repetición sin fin. Si la misma posición del tablero ocurre tres veces con el mismo jugador para mover, ese jugador debe hacer un movimiento diferente.",
          de: "Die Drei-Züge-Regel verhindert endlose Wiederholung. Wenn dieselbe Brettposition dreimal mit demselben Spieler am Zug auftritt, muss dieser Spieler einen anderen Zug machen.",
          nl: "De drie-zetten regel voorkomt eindeloze herhaling. Als dezelfde bordpositie drie keer voorkomt met dezelfde speler aan zet, moet die speler een andere zet maken."
        }
      },
      {
        question: {
          en: "How many Majors does each player have?",
          es: "¿Cuántos Mayores tiene cada jugador?",
          de: "Wie viele Majore hat jeder Spieler?",
          nl: "Hoeveel Majoors heeft elke speler?"
        },
        options: [
          { en: "1", es: "1", de: "1", nl: "1" },
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "4", es: "4", de: "4", nl: "4" }
        ],
        correct: 2,
        explanation: {
          en: "Each player has 3 Majors (rank 4). Majors are mid-to-high ranking officers that provide good offensive capability while being less valuable than Colonels, Generals, and Marshals.",
          es: "Cada jugador tiene 3 Mayores (rango 4). Los Mayores son oficiales de rango medio-alto que proporcionan buena capacidad ofensiva mientras son menos valiosos que Coroneles, Generales y Mariscales.",
          de: "Jeder Spieler hat 3 Majore (Rang 4). Majore sind mittel-hohe Offiziere, die gute Angriffsfähigkeit bieten, während sie weniger wertvoll sind als Oberste, Generäle und Marschälle.",
          nl: "Elke speler heeft 3 Majoors (rang 4). Majoors zijn mid-tot-hoog gerangschikte officieren die goede aanvalscapaciteit bieden terwijl ze minder waardevol zijn dan Kolonels, Generaals en Maarschalken."
        }
      },
      {
        question: {
          en: "Can Scouts jump over pieces when moving?",
          es: "¿Pueden los Exploradores saltar sobre piezas al moverse?",
          de: "Können Späher beim Bewegen über Figuren springen?",
          nl: "Kunnen Verkenners over stukken springen bij bewegen?"
        },
        options: [
          { en: "Yes, over any piece", es: "Sí, sobre cualquier pieza", de: "Ja, über jede Figur", nl: "Ja, over elk stuk" },
          { en: "Only over own pieces", es: "Solo sobre piezas propias", de: "Nur über eigene Figuren", nl: "Alleen over eigen stukken" },
          { en: "Only over enemy pieces", es: "Solo sobre piezas enemigas", de: "Nur über feindliche Figuren", nl: "Alleen over vijandelijke stukken" },
          { en: "No, cannot jump", es: "No, no pueden saltar", de: "Nein, können nicht springen", nl: "Nee, kunnen niet springen" }
        ],
        correct: 3,
        explanation: {
          en: "Scouts cannot jump over any pieces. They can only move through empty squares in a straight line. Their movement stops when they encounter any piece or choose to stop.",
          es: "Los Exploradores no pueden saltar sobre ninguna pieza. Solo pueden moverse a través de cuadrados vacíos en línea recta. Su movimiento se detiene cuando encuentran cualquier pieza o eligen detenerse.",
          de: "Späher können nicht über Figuren springen. Sie können sich nur durch leere Felder in gerader Linie bewegen. Ihre Bewegung stoppt, wenn sie auf eine Figur treffen oder sich entscheiden zu stoppen.",
          nl: "Verkenners kunnen niet over stukken springen. Ze kunnen alleen door lege vakken in een rechte lijn bewegen. Hun beweging stopt wanneer ze een stuk tegenkomen of ervoor kiezen te stoppen."
        }
      },
      {
        question: {
          en: "What happens to the flag if it's attacked?",
          es: "¿Qué pasa con la bandera si es atacada?",
          de: "Was passiert mit der Flagge, wenn sie angegriffen wird?",
          nl: "Wat gebeurt er met de vlag als deze wordt aangevallen?"
        },
        options: [
          { en: "Flag is destroyed", es: "La bandera es destruida", de: "Flagge wird zerstört", nl: "Vlag wordt vernietigd" },
          { en: "Attacker wins game", es: "El atacante gana el juego", de: "Angreifer gewinnt Spiel", nl: "Aanvaller wint spel" },
          { en: "Flag fights back", es: "La bandera contraataca", de: "Flagge kämpft zurück", nl: "Vlag vecht terug" },
          { en: "Nothing happens", es: "No pasa nada", de: "Nichts passiert", nl: "Er gebeurt niets" }
        ],
        correct: 1,
        explanation: {
          en: "When any piece attacks and captures the flag, the attacking player wins the game immediately. This is the primary victory condition in Stratego.",
          es: "Cuando cualquier pieza ataca y captura la bandera, el jugador atacante gana el juego inmediatamente. Esta es la condición de victoria principal en Stratego.",
          de: "Wenn eine Figur die Flagge angreift und erobert, gewinnt der angreifende Spieler sofort das Spiel. Dies ist die primäre Siegbedingung in Stratego.",
          nl: "Wanneer een stuk de vlag aanvalt en verovert, wint de aanvallende speler onmiddellijk het spel. Dit is de primaire overwinningsvoorwaarde in Stratego."
        }
      },
      {
        question: {
          en: "Can you place your flag in the front row during setup?",
          es: "¿Puedes colocar tu bandera en la fila delantera durante la configuración?",
          de: "Kannst du deine Flagge während der Aufstellung in der vorderen Reihe platzieren?",
          nl: "Kun je je vlag in de voorste rij plaatsen tijdens opstelling?"
        },
        options: [
          { en: "Yes, allowed", es: "Sí, permitido", de: "Ja, erlaubt", nl: "Ja, toegestaan" },
          { en: "No, must be in back row", es: "No, debe estar en la fila trasera", de: "Nein, muss in hinterer Reihe sein", nl: "Nee, moet in achterste rij zijn" },
          { en: "Only in corners", es: "Solo en esquinas", de: "Nur in Ecken", nl: "Alleen in hoeken" },
          { en: "Yes, but risky", es: "Sí, pero arriesgado", de: "Ja, aber riskant", nl: "Ja, maar riskant" }
        ],
        correct: 3,
        explanation: {
          en: "Yes, you can place the flag anywhere in your setup area (first 4 rows), including the front row. However, this is extremely risky as it's easily discovered and captured.",
          es: "Sí, puedes colocar la bandera en cualquier lugar de tu área de configuración (primeras 4 filas), incluyendo la fila delantera. Sin embargo, esto es extremadamente arriesgado ya que se descubre y captura fácilmente.",
          de: "Ja, du kannst die Flagge überall in deinem Aufstellungsbereich (erste 4 Reihen) platzieren, einschließlich der vorderen Reihe. Dies ist jedoch extrem riskant, da sie leicht entdeckt und erobert wird.",
          nl: "Ja, je kunt de vlag overal in je opstelling gebied (eerste 4 rijen) plaatsen, inclusief de voorste rij. Dit is echter extreem riskant omdat het gemakkelijk ontdekt en veroverd wordt."
        }
      },
      {
        question: {
          en: "How many Miners does each player have?",
          es: "¿Cuántos Mineros tiene cada jugador?",
          de: "Wie viele Mineure hat jeder Spieler?",
          nl: "Hoeveel Mijnwerkers heeft elke speler?"
        },
        options: [
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "6", es: "6", de: "6", nl: "6" }
        ],
        correct: 2,
        explanation: {
          en: "Each player has 5 Miners (rank 8). Since Miners are the only pieces that can defuse bombs, they're essential for attacking well-defended flag positions.",
          es: "Cada jugador tiene 5 Mineros (rango 8). Dado que los Mineros son las únicas piezas que pueden desactivar bombas, son esenciales para atacar posiciones de bandera bien defendidas.",
          de: "Jeder Spieler hat 5 Mineure (Rang 8). Da Mineure die einzigen Figuren sind, die Bomben entschärfen können, sind sie unerlässlich für den Angriff auf gut verteidigte Flaggenpositionen.",
          nl: "Elke speler heeft 5 Mijnwerkers (rang 8). Omdat Mijnwerkers de enige stukken zijn die bommen kunnen ontmantelen, zijn ze essentieel voor het aanvallen van goed verdedigde vlagposities."
        }
      },
      {
        question: {
          en: "Who moves first in Stratego?",
          es: "¿Quién se mueve primero en Stratego?",
          de: "Wer bewegt sich zuerst in Stratego?",
          nl: "Wie beweegt eerst in Stratego?"
        },
        options: [
          { en: "Red always", es: "Rojo siempre", de: "Rot immer", nl: "Rood altijd" },
          { en: "Blue always", es: "Azul siempre", de: "Blau immer", nl: "Blauw altijd" },
          { en: "Determined by die roll", es: "Determinado por tirada de dado", de: "Durch Würfelwurf bestimmt", nl: "Bepaald door dobbelsteenworp" },
          { en: "Players decide", es: "Los jugadores deciden", de: "Spieler entscheiden", nl: "Spelers beslissen" }
        ],
        correct: 0,
        explanation: {
          en: "Red always moves first in standard Stratego rules. This gives Red a slight first-move advantage, similar to White in chess.",
          es: "Rojo siempre se mueve primero en las reglas estándar de Stratego. Esto le da a Rojo una ligera ventaja de primer movimiento, similar al Blanco en ajedrez.",
          de: "Rot bewegt sich immer zuerst in den Standard-Stratego-Regeln. Dies gibt Rot einen leichten Ersteröffnungsvorteil, ähnlich wie Weiß im Schach.",
          nl: "Rood beweegt altijd eerst in standaard Stratego regels. Dit geeft Rood een klein eerste-zet voordeel, vergelijkbaar met Wit in schaak."
        }
      },
      {
        question: {
          en: "Can bombs be placed next to each other during setup?",
          es: "¿Pueden las bombas colocarse una al lado de la otra durante la configuración?",
          de: "Können Bomben während der Aufstellung nebeneinander platziert werden?",
          nl: "Kunnen bommen naast elkaar worden geplaatst tijdens opstelling?"
        },
        options: [
          { en: "Yes, no restrictions", es: "Sí, sin restricciones", de: "Ja, keine Einschränkungen", nl: "Ja, geen beperkingen" },
          { en: "No, must be separated", es: "No, deben estar separadas", de: "Nein, müssen getrennt sein", nl: "Nee, moeten gescheiden zijn" },
          { en: "Maximum 2 adjacent", es: "Máximo 2 adyacentes", de: "Maximal 2 benachbart", nl: "Maximaal 2 aangrenzend" },
          { en: "Only diagonally", es: "Solo en diagonal", de: "Nur diagonal", nl: "Alleen diagonaal" }
        ],
        correct: 0,
        explanation: {
          en: "Yes, bombs can be placed adjacent to each other with no restrictions. Many players create 'bomb clusters' around their flag for maximum protection.",
          es: "Sí, las bombas pueden colocarse adyacentes entre sí sin restricciones. Muchos jugadores crean 'grupos de bombas' alrededor de su bandera para máxima protección.",
          de: "Ja, Bomben können ohne Einschränkungen nebeneinander platziert werden. Viele Spieler erstellen 'Bomben-Cluster' um ihre Flagge für maximalen Schutz.",
          nl: "Ja, bommen kunnen naast elkaar worden geplaatst zonder beperkingen. Veel spelers creëren 'bom clusters' rond hun vlag voor maximale bescherming."
        }
      },
      {
        question: {
          en: "What rank defeats what rank in combat?",
          es: "¿Qué rango derrota a qué rango en combate?",
          de: "Welcher Rang besiegt welchen Rang im Kampf?",
          nl: "Welke rang verslaat welke rang in gevecht?"
        },
        options: [
          { en: "Higher number wins", es: "Número más alto gana", de: "Höhere Zahl gewinnt", nl: "Hoger nummer wint" },
          { en: "Lower number wins", es: "Número más bajo gana", de: "Niedrigere Zahl gewinnt", nl: "Lager nummer wint" },
          { en: "Attacker always wins", es: "Atacante siempre gana", de: "Angreifer gewinnt immer", nl: "Aanvaller wint altijd" },
          { en: "Random determination", es: "Determinación aleatoria", de: "Zufällige Bestimmung", nl: "Willekeurige bepaling" }
        ],
        correct: 1,
        explanation: {
          en: "Lower rank number wins in combat. Marshal (1) defeats General (2), General defeats Colonel (3), etc. The lower the number, the stronger the piece.",
          es: "El número de rango más bajo gana en combate. Mariscal (1) derrota a General (2), General derrota a Coronel (3), etc. Cuanto más bajo el número, más fuerte la pieza.",
          de: "Niedrigere Rangnummer gewinnt im Kampf. Marschall (1) besiegt General (2), General besiegt Oberst (3), usw. Je niedriger die Zahl, desto stärker die Figur.",
          nl: "Lager rangnummer wint in gevecht. Maarschalk (1) verslaat Generaal (2), Generaal verslaat Kolonel (3), enz. Hoe lager het nummer, hoe sterker het stuk."
        }
      },
      {
        question: {
          en: "Can you attack your own pieces?",
          es: "¿Puedes atacar tus propias piezas?",
          de: "Kannst du deine eigenen Figuren angreifen?",
          nl: "Kun je je eigen stukken aanvallen?"
        },
        options: [
          { en: "Yes, to change strategy", es: "Sí, para cambiar estrategia", de: "Ja, um Strategie zu ändern", nl: "Ja, om strategie te veranderen" },
          { en: "No, never allowed", es: "No, nunca permitido", de: "Nein, niemals erlaubt", nl: "Nee, nooit toegestaan" },
          { en: "Only with Miners", es: "Solo con Mineros", de: "Nur mit Mineuren", nl: "Alleen met Mijnwerkers" },
          { en: "Only in endgame", es: "Solo en final de juego", de: "Nur im Endspiel", nl: "Alleen in eindspel" }
        ],
        correct: 1,
        explanation: {
          en: "You cannot attack or capture your own pieces. All attacks must be directed at enemy pieces. Your pieces simply block movement for your other pieces.",
          es: "No puedes atacar o capturar tus propias piezas. Todos los ataques deben dirigirse a piezas enemigas. Tus piezas simplemente bloquean el movimiento de tus otras piezas.",
          de: "Du kannst deine eigenen Figuren nicht angreifen oder erobern. Alle Angriffe müssen auf feindliche Figuren gerichtet sein. Deine Figuren blockieren einfach die Bewegung deiner anderen Figuren.",
          nl: "Je kunt je eigen stukken niet aanvallen of veroveren. Alle aanvallen moeten gericht zijn op vijandelijke stukken. Je stukken blokkeren simpelweg beweging voor je andere stukken."
        }
      },
      {
        question: {
          en: "How many Captains does each player have?",
          es: "¿Cuántos Capitanes tiene cada jugador?",
          de: "Wie viele Hauptmänner hat jeder Spieler?",
          nl: "Hoeveel Kapiteins heeft elke speler?"
        },
        options: [
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "5", es: "5", de: "5", nl: "5" }
        ],
        correct: 2,
        explanation: {
          en: "Each player has 4 Captains (rank 5 or 6 depending on version). Captains are versatile mid-ranking pieces useful for both attack and defense.",
          es: "Cada jugador tiene 4 Capitanes (rango 5 o 6 dependiendo de la versión). Los Capitanes son piezas versátiles de rango medio útiles tanto para ataque como para defensa.",
          de: "Jeder Spieler hat 4 Hauptmänner (Rang 5 oder 6 je nach Version). Hauptmänner sind vielseitige mittlere Figuren, nützlich sowohl für Angriff als auch Verteidigung.",
          nl: "Elke speler heeft 4 Kapiteins (rang 5 of 6 afhankelijk van versie). Kapiteins zijn veelzijdige mid-rang stukken nuttig voor zowel aanval als verdediging."
        }
      },
      {
        question: {
          en: "What is the weakest movable piece in Stratego?",
          es: "¿Cuál es la pieza móvil más débil en Stratego?",
          de: "Welche ist die schwächste bewegliche Figur in Stratego?",
          nl: "Wat is het zwakste beweegbare stuk in Stratego?"
        },
        options: [
          { en: "Spy", es: "Espía", de: "Spion", nl: "Spion" },
          { en: "Scout", es: "Explorador", de: "Späher", nl: "Verkenner" },
          { en: "Miner", es: "Minero", de: "Mineur", nl: "Mijnwerker" },
          { en: "Sergeant", es: "Sargento", de: "Sergeant", nl: "Sergeant" }
        ],
        correct: 0,
        explanation: {
          en: "The Spy (rank S) is the weakest movable piece and loses to all other pieces in normal combat. However, it has the special ability to defeat the Marshal when attacking.",
          es: "El Espía (rango S) es la pieza móvil más débil y pierde contra todas las otras piezas en combate normal. Sin embargo, tiene la habilidad especial de derrotar al Mariscal cuando ataca.",
          de: "Der Spion (Rang S) ist die schwächste bewegliche Figur und verliert gegen alle anderen Figuren im normalen Kampf. Er hat jedoch die Spezialfähigkeit, den Marschall beim Angriff zu besiegen.",
          nl: "De Spion (rang S) is het zwakste beweegbare stuk en verliest van alle andere stukken in normaal gevecht. Het heeft echter de speciale vaardigheid om de Maarschalk te verslaan bij aanvallen."
        }
      },
      {
        question: {
          en: "Can you change your setup after seeing opponent's first move?",
          es: "¿Puedes cambiar tu configuración después de ver el primer movimiento del oponente?",
          de: "Kannst du deine Aufstellung ändern, nachdem du den ersten Zug des Gegners gesehen hast?",
          nl: "Kun je je opstelling veranderen na het zien van de eerste zet van de tegenstander?"
        },
        options: [
          { en: "Yes, one piece", es: "Sí, una pieza", de: "Ja, eine Figur", nl: "Ja, één stuk" },
          { en: "Yes, three pieces", es: "Sí, tres piezas", de: "Ja, drei Figuren", nl: "Ja, drie stukken" },
          { en: "No, setup is final", es: "No, configuración es final", de: "Nein, Aufstellung ist endgültig", nl: "Nee, opstelling is definitief" },
          { en: "Only in casual play", es: "Solo en juego casual", de: "Nur im Freizeitspiel", nl: "Alleen in casual spel" }
        ],
        correct: 2,
        explanation: {
          en: "No, once the game begins and pieces are set up, you cannot change your setup. All strategic decisions about piece placement must be made before the first move.",
          es: "No, una vez que el juego comienza y las piezas están configuradas, no puedes cambiar tu configuración. Todas las decisiones estratégicas sobre colocación de piezas deben hacerse antes del primer movimiento.",
          de: "Nein, sobald das Spiel beginnt und die Figuren aufgestellt sind, kannst du deine Aufstellung nicht ändern. Alle strategischen Entscheidungen über Figurenplatzierung müssen vor dem ersten Zug getroffen werden.",
          nl: "Nee, zodra het spel begint en stukken zijn opgesteld, kun je je opstelling niet veranderen. Alle strategische beslissingen over stukplaatsing moeten voor de eerste zet gemaakt worden."
        }
      },
      {
        question: {
          en: "How do you win if your opponent runs out of movable pieces?",
          es: "¿Cómo ganas si tu oponente se queda sin piezas móviles?",
          de: "Wie gewinnst du, wenn dein Gegner keine beweglichen Figuren mehr hat?",
          nl: "Hoe win je als je tegenstander geen beweegbare stukken meer heeft?"
        },
        options: [
          { en: "Game is a draw", es: "El juego es empate", de: "Spiel ist unentschieden", nl: "Spel is gelijkspel" },
          { en: "You win automatically", es: "Ganas automáticamente", de: "Du gewinnst automatisch", nl: "Je wint automatisch" },
          { en: "Continue until flag found", es: "Continuar hasta encontrar bandera", de: "Weitermachen bis Flagge gefunden", nl: "Doorgaan tot vlag gevonden" },
          { en: "Opponent gets reinforcements", es: "Oponente recibe refuerzos", de: "Gegner bekommt Verstärkung", nl: "Tegenstander krijgt versterkingen" }
        ],
        correct: 1,
        explanation: {
          en: "You win automatically if your opponent cannot make any legal moves (has no movable pieces left). This is an alternative victory condition besides capturing the flag.",
          es: "Ganas automáticamente si tu oponente no puede hacer ningún movimiento legal (no le quedan piezas móviles). Esta es una condición de victoria alternativa además de capturar la bandera.",
          de: "Du gewinnst automatisch, wenn dein Gegner keinen legalen Zug machen kann (keine beweglichen Figuren mehr hat). Dies ist eine alternative Siegbedingung neben dem Erobern der Flagge.",
          nl: "Je wint automatisch als je tegenstander geen legale zet kan maken (geen beweegbare stukken meer heeft). Dit is een alternatieve overwinningsvoorwaarde naast het veroveren van de vlag."
        }
      },
      {
        question: {
          en: "How many total squares are on a Stratego board (including lakes)?",
          es: "¿Cuántos cuadrados totales hay en un tablero de Stratego (incluyendo lagos)?",
          de: "Wie viele Gesamtfelder gibt es auf einem Stratego-Brett (einschließlich Seen)?",
          nl: "Hoeveel totale vakken zijn er op een Stratego-bord (inclusief meren)?"
        },
        options: [
          { en: "92", es: "92", de: "92", nl: "92" },
          { en: "96", es: "96", de: "96", nl: "96" },
          { en: "100", es: "100", de: "100", nl: "100" },
          { en: "104", es: "104", de: "104", nl: "104" }
        ],
        correct: 2,
        explanation: {
          en: "The Stratego board is 10x10 = 100 total squares. This includes 92 playable squares and 8 lake squares (two 2x2 lakes that cannot be entered).",
          es: "El tablero de Stratego es 10x10 = 100 cuadrados totales. Esto incluye 92 cuadrados jugables y 8 cuadrados de lago (dos lagos de 2x2 que no se pueden entrar).",
          de: "Das Stratego-Brett ist 10x10 = 100 Gesamtfelder. Dies umfasst 92 spielbare Felder und 8 Seefelder (zwei 2x2-Seen, die nicht betreten werden können).",
          nl: "Het Stratego-bord is 10x10 = 100 totale vakken. Dit omvat 92 speelbare vakken en 8 meervakken (twee 2x2 meren die niet betreden kunnen worden)."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  } else if (typeof window !== 'undefined') {
    window.level1 = level1;
  }
})();
