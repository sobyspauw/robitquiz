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
