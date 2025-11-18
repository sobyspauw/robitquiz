// Quiz Level 2: Bord spelletjes - Stratego
(function() {
  const level2 = {
    name: {
      en: "Stratego - Basic Rules",
      es: "Stratego - Reglas Básicas",
      de: "Stratego - Grundregeln",
      nl: "Stratego - Basisregels"
    },
    questions: [
      {
        question: {
          en: "How many Scouts does each player have?",
          es: "¿Cuántos Exploradores tiene cada jugador?",
          de: "Wie viele Späher hat jeder Spieler?",
          nl: "Hoeveel Verkenners heeft elke speler?"
        },
        options: [
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "8", es: "8", de: "8", nl: "8" },
          { en: "10", es: "10", de: "10", nl: "10" },
          { en: "12", es: "12", de: "12", nl: "12" }
        ],
        correct: 1,
        explanation: {
          en: "Each player has 8 Scouts (rank 9), the most numerous mobile piece. Their ability to move multiple spaces makes them crucial for reconnaissance despite being weak in combat.",
          es: "Cada jugador tiene 8 Exploradores (rango 9), la pieza móvil más numerosa. Su capacidad de moverse múltiples espacios los hace cruciales para reconocimiento a pesar de ser débiles en combate.",
          de: "Jeder Spieler hat 8 Späher (Rang 9), die zahlreichste bewegliche Figur. Ihre Fähigkeit, sich über mehrere Felder zu bewegen, macht sie trotz ihrer Kampfschwäche entscheidend für die Aufklärung.",
          nl: "Elke speler heeft 8 Verkenners (rang 9), het meest voorkomende beweegbare stuk. Hun vermogen om meerdere vakken te bewegen maakt ze cruciaal voor verkenning ondanks zwak te zijn in gevecht."
        }
      },
      {
        question: {
          en: "What is the rank of a Captain in Stratego?",
          es: "¿Cuál es el rango de un Capitán en Stratego?",
          de: "Welchen Rang hat ein Hauptmann in Stratego?",
          nl: "Wat is de rang van een Kapitein in Stratego?"
        },
        options: [
          { en: "Rank 3", es: "Rango 3", de: "Rang 3", nl: "Rang 3" },
          { en: "Rank 4", es: "Rango 4", de: "Rang 4", nl: "Rang 4" },
          { en: "Rank 5", es: "Rango 5", de: "Rang 5", nl: "Rang 5" },
          { en: "Rank 6", es: "Rango 6", de: "Rang 6", nl: "Rang 6" }
        ],
        correct: 2,
        explanation: {
          en: "The Captain has rank 5 in Stratego. With 4 Captains per player, they are valuable mid-level pieces that balance offensive strength with reasonable expendability.",
          es: "El Capitán tiene rango 5 en Stratego. Con 4 Capitanes por jugador, son piezas valiosas de nivel medio que equilibran fuerza ofensiva con razonable prescindibilidad.",
          de: "Der Hauptmann hat Rang 5 in Stratego. Mit 4 Hauptmännern pro Spieler sind sie wertvolle mittlere Figuren, die offensive Stärke mit angemessener Entbehrlichkeit ausbalancieren.",
          nl: "De Kapitein heeft rang 5 in Stratego. Met 4 Kapiteins per speler zijn ze waardevolle mid-level stukken die aanvalskracht balanceren met redelijke inzetbaarheid."
        }
      },
      {
        question: {
          en: "Can Scouts attack after moving multiple spaces?",
          es: "¿Pueden los Exploradores atacar después de moverse múltiples espacios?",
          de: "Können Späher nach mehreren Feldern Bewegung angreifen?",
          nl: "Kunnen Verkenners aanvallen na meerdere vakken te bewegen?"
        },
        options: [
          { en: "Yes, they can attack", es: "Sí, pueden atacar", de: "Ja, sie können angreifen", nl: "Ja, ze kunnen aanvallen" },
          { en: "No, only after one space", es: "No, solo después de un espacio", de: "Nein, nur nach einem Feld", nl: "Nee, alleen na één vak" },
          { en: "Only on the first move", es: "Solo en el primer movimiento", de: "Nur beim ersten Zug", nl: "Alleen bij de eerste zet" },
          { en: "Only with permission", es: "Solo con permiso", de: "Nur mit Erlaubnis", nl: "Alleen met toestemming" }
        ],
        correct: 0,
        explanation: {
          en: "Yes, Scouts can attack after moving any number of spaces in a straight line. This makes them excellent for quick strikes, though they are easily defeated by almost any piece.",
          es: "Sí, los Exploradores pueden atacar después de moverse cualquier número de espacios en línea recta. Esto los hace excelentes para ataques rápidos, aunque son fácilmente derrotados por casi cualquier pieza.",
          de: "Ja, Späher können nach Bewegung über beliebig viele Felder in gerader Linie angreifen. Das macht sie hervorragend für schnelle Angriffe, obwohl sie von fast jeder Figur leicht besiegt werden.",
          nl: "Ja, Verkenners kunnen aanvallen na het bewegen van elk aantal vakken in een rechte lijn. Dit maakt ze uitstekend voor snelle aanvallen, hoewel ze gemakkelijk verslagen worden door bijna elk stuk."
        }
      },
      {
        question: {
          en: "What is the rank of a Major in Stratego?",
          es: "¿Cuál es el rango de un Mayor en Stratego?",
          de: "Welchen Rang hat ein Major in Stratego?",
          nl: "Wat is de rang van een Majoor in Stratego?"
        },
        options: [
          { en: "Rank 2", es: "Rango 2", de: "Rang 2", nl: "Rang 2" },
          { en: "Rank 3", es: "Rango 3", de: "Rang 3", nl: "Rang 3" },
          { en: "Rank 4", es: "Rango 4", de: "Rang 4", nl: "Rang 4" },
          { en: "Rank 5", es: "Rango 5", de: "Rang 5", nl: "Rang 5" }
        ],
        correct: 2,
        explanation: {
          en: "The Major has rank 4 in Stratego. There are 3 Majors per player, making them moderately strong pieces suitable for both offense and defense.",
          es: "El Mayor tiene rango 4 en Stratego. Hay 3 Mayores por jugador, haciéndolos piezas moderadamente fuertes adecuadas tanto para ofensiva como para defensa.",
          de: "Der Major hat Rang 4 in Stratego. Es gibt 3 Majore pro Spieler, was sie zu mäßig starken Figuren macht, die sowohl für Angriff als auch Verteidigung geeignet sind.",
          nl: "De Majoor heeft rang 4 in Stratego. Er zijn 3 Majoors per speler, waardoor ze matig sterke stukken zijn geschikt voor zowel aanval als verdediging."
        }
      },
      {
        question: {
          en: "How many Colonels does each player have?",
          es: "¿Cuántos Coroneles tiene cada jugador?",
          de: "Wie viele Obersten hat jeder Spieler?",
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
          en: "Each player has 2 Colonels (rank 3). As the third-highest ranking pieces, they are powerful but should be used carefully to avoid unnecessary losses.",
          es: "Cada jugador tiene 2 Coroneles (rango 3). Como las terceras piezas de mayor rango, son poderosas pero deben usarse cuidadosamente para evitar pérdidas innecesarias.",
          de: "Jeder Spieler hat 2 Obersten (Rang 3). Als dritthöchste Figuren sind sie mächtig, sollten aber vorsichtig eingesetzt werden, um unnötige Verluste zu vermeiden.",
          nl: "Elke speler heeft 2 Kolonels (rang 3). Als de op twee na hoogste gerangschikte stukken zijn ze krachtig maar moeten zorgvuldig gebruikt worden om onnodige verliezen te voorkomen."
        }
      },
      {
        question: {
          en: "Can the Spy defeat the Marshal if the Marshal attacks first?",
          es: "¿Puede el Espía derrotar al Mariscal si el Mariscal ataca primero?",
          de: "Kann der Spion den Marschall besiegen, wenn der Marschall zuerst angreift?",
          nl: "Kan de Spion de Maarschalk verslaan als de Maarschalk als eerste aanvalt?"
        },
        options: [
          { en: "Yes, always", es: "Sí, siempre", de: "Ja, immer", nl: "Ja, altijd" },
          { en: "No, Spy is defeated", es: "No, el Espía es derrotado", de: "Nein, der Spion wird besiegt", nl: "Nee, de Spion wordt verslagen" },
          { en: "Both are removed", es: "Ambos son removidos", de: "Beide werden entfernt", nl: "Beide worden verwijderd" },
          { en: "Depends on setup", es: "Depende de la configuración", de: "Hängt von der Aufstellung ab", nl: "Hangt af van opstelling" }
        ],
        correct: 1,
        explanation: {
          en: "No, the Spy can only defeat the Marshal when the Spy attacks first. If the Marshal attacks the Spy, the Spy is defeated like any other lower-ranked piece.",
          es: "No, el Espía solo puede derrotar al Mariscal cuando el Espía ataca primero. Si el Mariscal ataca al Espía, el Espía es derrotado como cualquier otra pieza de menor rango.",
          de: "Nein, der Spion kann den Marschall nur besiegen, wenn der Spion zuerst angreift. Wenn der Marschall den Spion angreift, wird der Spion wie jede andere niederrangige Figur besiegt.",
          nl: "Nee, de Spion kan de Maarschalk alleen verslaan wanneer de Spion als eerste aanvalt. Als de Maarschalk de Spion aanvalt, wordt de Spion verslagen zoals elk ander lagergerangschikt stuk."
        }
      },
      {
        question: {
          en: "Can Scouts jump over other pieces?",
          es: "¿Pueden los Exploradores saltar sobre otras piezas?",
          de: "Können Späher über andere Figuren springen?",
          nl: "Kunnen Verkenners over andere stukken springen?"
        },
        options: [
          { en: "Yes, always", es: "Sí, siempre", de: "Ja, immer", nl: "Ja, altijd" },
          { en: "No, never", es: "No, nunca", de: "Nein, niemals", nl: "Nee, nooit" },
          { en: "Only over bombs", es: "Solo sobre bombas", de: "Nur über Bomben", nl: "Alleen over bommen" },
          { en: "Only over friendly pieces", es: "Solo sobre piezas amigas", de: "Nur über eigene Figuren", nl: "Alleen over eigen stukken" }
        ],
        correct: 1,
        explanation: {
          en: "Scouts cannot jump over any pieces. They can only move multiple spaces in a straight line through empty squares, stopping when they reach a piece or the board edge.",
          es: "Los Exploradores no pueden saltar sobre ninguna pieza. Solo pueden moverse múltiples espacios en línea recta a través de cuadrados vacíos, deteniéndose cuando alcanzan una pieza o el borde del tablero.",
          de: "Späher können nicht über Figuren springen. Sie können sich nur über mehrere leere Felder in gerader Linie bewegen und stoppen, wenn sie eine Figur oder den Brettrand erreichen.",
          nl: "Verkenners kunnen niet over stukken springen. Ze kunnen alleen meerdere vakken in een rechte lijn door lege vakken bewegen, stoppend wanneer ze een stuk of de rand van het bord bereiken."
        }
      },
      {
        question: {
          en: "What happens if both players lose all movable pieces?",
          es: "¿Qué sucede si ambos jugadores pierden todas las piezas móviles?",
          de: "Was passiert, wenn beide Spieler alle beweglichen Figuren verlieren?",
          nl: "Wat gebeurt er als beide spelers alle beweegbare stukken verliezen?"
        },
        options: [
          { en: "The game is a draw", es: "El juego es un empate", de: "Das Spiel ist unentschieden", nl: "Het spel is gelijkspel" },
          { en: "Red wins", es: "Rojo gana", de: "Rot gewinnt", nl: "Rood wint" },
          { en: "Blue wins", es: "Azul gana", de: "Blau gewinnt", nl: "Blauw wint" },
          { en: "Game continues", es: "El juego continúa", de: "Spiel geht weiter", nl: "Spel gaat door" }
        ],
        correct: 0,
        explanation: {
          en: "If both players lose all movable pieces and only have immovable pieces (bombs and flag) remaining, the game ends in a draw since neither player can capture the opponent's flag.",
          es: "Si ambos jugadores pierden todas las piezas móviles y solo tienen piezas inmóviles (bombas y bandera) restantes, el juego termina en empate ya que ningún jugador puede capturar la bandera del oponente.",
          de: "Wenn beide Spieler alle beweglichen Figuren verlieren und nur noch unbewegliche Figuren (Bomben und Flagge) übrig haben, endet das Spiel unentschieden, da keiner die gegnerische Flagge erobern kann.",
          nl: "Als beide spelers alle beweegbare stukken verliezen en alleen onbeweegbare stukken (bommen en vlag) over hebben, eindigt het spel in gelijkspel omdat geen enkele speler de vlag van de tegenstander kan veroveren."
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
          en: "Each player has 4 Captains (rank 5). They are the most numerous of the higher-ranking pieces, making them versatile for both attacking and defending.",
          es: "Cada jugador tiene 4 Capitanes (rango 5). Son las más numerosas de las piezas de mayor rango, haciéndolas versátiles tanto para atacar como para defender.",
          de: "Jeder Spieler hat 4 Hauptmänner (Rang 5). Sie sind die zahlreichsten der höherrangigen Figuren, was sie vielseitig für Angriff und Verteidigung macht.",
          nl: "Elke speler heeft 4 Kapiteins (rang 5). Ze zijn de meest voorkomende van de hogergerangschikte stukken, waardoor ze veelzijdig zijn voor zowel aanvallen als verdedigen."
        }
      },
      {
        question: {
          en: "Can bombs be placed in the front row during setup?",
          es: "¿Se pueden colocar bombas en la primera fila durante la configuración?",
          de: "Können Bomben während der Aufstellung in der ersten Reihe platziert werden?",
          nl: "Kunnen bommen in de voorste rij geplaatst worden tijdens de opstelling?"
        },
        options: [
          { en: "Yes, anywhere in setup area", es: "Sí, en cualquier lugar del área de configuración", de: "Ja, überall im Aufstellungsbereich", nl: "Ja, overal in het opstellingsgebied" },
          { en: "No, only in back row", es: "No, solo en la última fila", de: "Nein, nur in der hinteren Reihe", nl: "Nee, alleen in de achterste rij" },
          { en: "No, only in middle rows", es: "No, solo en las filas del medio", de: "Nein, nur in mittleren Reihen", nl: "Nee, alleen in de middelste rijen" },
          { en: "Only one bomb allowed", es: "Solo se permite una bomba", de: "Nur eine Bombe erlaubt", nl: "Slechts één bom toegestaan" }
        ],
        correct: 0,
        explanation: {
          en: "Yes, bombs can be placed anywhere within your 4-row setup area. Strategic placement of bombs in various rows is crucial for protecting your flag and creating defensive traps.",
          es: "Sí, las bombas se pueden colocar en cualquier lugar dentro de tu área de configuración de 4 filas. La colocación estratégica de bombas en varias filas es crucial para proteger tu bandera y crear trampas defensivas.",
          de: "Ja, Bomben können überall innerhalb Ihres 4-Reihen-Aufstellungsbereichs platziert werden. Die strategische Platzierung von Bomben in verschiedenen Reihen ist entscheidend für den Schutz Ihrer Flagge und das Erstellen von Verteidigungsfallen.",
          nl: "Ja, bommen kunnen overal binnen je 4-rijen opstellingsgebied geplaatst worden. Strategische plaatsing van bommen in verschillende rijen is cruciaal voor het beschermen van je vlag en het creëren van verdedigingsvallen."
        }
      },
      {
        question: {
          en: "What happens when you attack an opponent's flag?",
          es: "¿Qué sucede cuando atacas la bandera de un oponente?",
          de: "Was passiert, wenn du die gegnerische Flagge angreifst?",
          nl: "Wat gebeurt er wanneer je de vlag van een tegenstander aanvalt?"
        },
        options: [
          { en: "You win the game", es: "Ganas el juego", de: "Du gewinnst das Spiel", nl: "Je wint het spel" },
          { en: "Flag is destroyed", es: "La bandera es destruida", de: "Flagge wird zerstört", nl: "Vlag wordt vernietigd" },
          { en: "Both pieces removed", es: "Ambas piezas removidas", de: "Beide Figuren entfernt", nl: "Beide stukken verwijderd" },
          { en: "Nothing happens", es: "No pasa nada", de: "Nichts passiert", nl: "Er gebeurt niets" }
        ],
        correct: 0,
        explanation: {
          en: "When any of your movable pieces attacks and captures the opponent's flag, you immediately win the game. This is the primary objective and only way to win.",
          es: "Cuando cualquiera de tus piezas móviles ataca y captura la bandera del oponente, ganas el juego inmediatamente. Este es el objetivo principal y la única forma de ganar.",
          de: "Wenn eine Ihrer beweglichen Figuren die gegnerische Flagge angreift und erobert, gewinnen Sie sofort das Spiel. Dies ist das Hauptziel und die einzige Möglichkeit zu gewinnen.",
          nl: "Wanneer een van je beweegbare stukken de vlag van de tegenstander aanvalt en verovert, win je onmiddellijk het spel. Dit is het primaire doel en de enige manier om te winnen."
        }
      },
      {
        question: {
          en: "Can you move backwards in Stratego?",
          es: "¿Puedes moverte hacia atrás en Stratego?",
          de: "Kannst du dich rückwärts in Stratego bewegen?",
          nl: "Kun je achteruit bewegen in Stratego?"
        },
        options: [
          { en: "Yes, all directions allowed", es: "Sí, todas las direcciones permitidas", de: "Ja, alle Richtungen erlaubt", nl: "Ja, alle richtingen toegestaan" },
          { en: "No, only forward", es: "No, solo hacia adelante", de: "Nein, nur vorwärts", nl: "Nee, alleen vooruit" },
          { en: "Only Scouts can", es: "Solo los Exploradores pueden", de: "Nur Späher können", nl: "Alleen Verkenners kunnen" },
          { en: "Only high ranks can", es: "Solo rangos altos pueden", de: "Nur hohe Ränge können", nl: "Alleen hoge rangen kunnen" }
        ],
        correct: 0,
        explanation: {
          en: "Yes, all movable pieces can move in any orthogonal direction (forward, backward, left, or right). This freedom of movement is crucial for tactical repositioning and retreating.",
          es: "Sí, todas las piezas móviles pueden moverse en cualquier dirección ortogonal (adelante, atrás, izquierda o derecha). Esta libertad de movimiento es crucial para el reposicionamiento táctico y la retirada.",
          de: "Ja, alle beweglichen Figuren können sich in jede orthogonale Richtung bewegen (vorwärts, rückwärts, links oder rechts). Diese Bewegungsfreiheit ist entscheidend für taktische Neupositionierung und Rückzug.",
          nl: "Ja, alle beweegbare stukken kunnen in elke orthogonale richting bewegen (vooruit, achteruit, links of rechts). Deze bewegingsvrijheid is cruciaal voor tactische herpositionering en terugtrekking."
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
          en: "Each player has 5 Miners (rank 8). Despite their low rank, Miners are critical pieces because they are the only ones that can safely defuse the 6 bombs protecting the opponent's flag.",
          es: "Cada jugador tiene 5 Mineros (rango 8). A pesar de su bajo rango, los Mineros son piezas críticas porque son los únicos que pueden desactivar de manera segura las 6 bombas que protegen la bandera del oponente.",
          de: "Jeder Spieler hat 5 Mineure (Rang 8). Trotz ihres niedrigen Ranges sind Mineure kritische Figuren, weil sie die einzigen sind, die die 6 Bomben, die die gegnerische Flagge schützen, sicher entschärfen können.",
          nl: "Elke speler heeft 5 Mijnwerkers (rang 8). Ondanks hun lage rang zijn Mijnwerkers kritieke stukken omdat ze de enigen zijn die de 6 bommen die de vlag van de tegenstander beschermen veilig kunnen ontmantelen."
        }
      },
      {
        question: {
          en: "In combat, what determines the winner when ranks are different?",
          es: "En combate, ¿qué determina el ganador cuando los rangos son diferentes?",
          de: "Was bestimmt im Kampf den Gewinner, wenn die Ränge unterschiedlich sind?",
          nl: "Wat bepaalt de winnaar in gevecht wanneer de rangen verschillend zijn?"
        },
        options: [
          { en: "Higher rank always wins", es: "El rango más alto siempre gana", de: "Höherer Rang gewinnt immer", nl: "Hogere rang wint altijd" },
          { en: "Attacker always wins", es: "El atacante siempre gana", de: "Angreifer gewinnt immer", nl: "Aanvaller wint altijd" },
          { en: "Defender always wins", es: "El defensor siempre gana", de: "Verteidiger gewinnt immer", nl: "Verdediger wint altijd" },
          { en: "Random chance", es: "Al azar", de: "Zufällig", nl: "Willekeurig" }
        ],
        correct: 0,
        explanation: {
          en: "The higher-ranked piece always wins in combat (with the Spy vs. Marshal and Miner vs. Bomb being the only exceptions). The lower-ranked piece is removed from the board.",
          es: "La pieza de rango más alto siempre gana en combate (siendo Espía vs. Mariscal y Minero vs. Bomba las únicas excepciones). La pieza de menor rango es removida del tablero.",
          de: "Die höherrangige Figur gewinnt immer im Kampf (mit Spion vs. Marschall und Mineur vs. Bombe als einzige Ausnahmen). Die niederrangige Figur wird vom Brett entfernt.",
          nl: "Het hogergerangschikte stuk wint altijd in gevecht (met Spion vs. Maarschalk en Mijnwerker vs. Bom als enige uitzonderingen). Het lagergerangschikte stuk wordt van het bord verwijderd."
        }
      },
      {
        question: {
          en: "Can you move a piece and not attack on the same turn?",
          es: "¿Puedes mover una pieza y no atacar en el mismo turno?",
          de: "Kannst du eine Figur bewegen und nicht im selben Zug angreifen?",
          nl: "Kun je een stuk bewegen en niet aanvallen in dezelfde beurt?"
        },
        options: [
          { en: "Yes, movement is optional combat", es: "Sí, el movimiento es combate opcional", de: "Ja, Bewegung ist optionaler Kampf", nl: "Ja, beweging is optioneel gevecht" },
          { en: "No, must attack if moving", es: "No, debes atacar si te mueves", de: "Nein, muss angreifen bei Bewegung", nl: "Nee, moet aanvallen bij beweging" },
          { en: "Only Scouts can", es: "Solo los Exploradores pueden", de: "Nur Späher können", nl: "Alleen Verkenners kunnen" },
          { en: "Depends on the piece", es: "Depende de la pieza", de: "Hängt von der Figur ab", nl: "Hangt af van het stuk" }
        ],
        correct: 0,
        explanation: {
          en: "Yes, you can move a piece to any empty adjacent square without attacking. Combat only occurs when you move your piece onto a square occupied by an opponent's piece.",
          es: "Sí, puedes mover una pieza a cualquier cuadrado adyacente vacío sin atacar. El combate solo ocurre cuando mueves tu pieza a un cuadrado ocupado por una pieza del oponente.",
          de: "Ja, du kannst eine Figur auf jedes leere benachbarte Feld bewegen, ohne anzugreifen. Kampf findet nur statt, wenn du deine Figur auf ein vom Gegner besetztes Feld bewegst.",
          nl: "Ja, je kunt een stuk naar elk leeg aangrenzend vak bewegen zonder aan te vallen. Gevecht vindt alleen plaats wanneer je je stuk naar een vak beweegt dat bezet is door een stuk van de tegenstander."
        }
      },
      {
        question: {
          en: "What is the maximum number of spaces a Scout can move in one turn?",
          es: "¿Cuál es el número máximo de espacios que puede mover un Explorador en un turno?",
          de: "Was ist die maximale Anzahl von Feldern, die ein Späher in einem Zug bewegen kann?",
          nl: "Wat is het maximale aantal vakken dat een Verkenner in één beurt kan bewegen?"
        },
        options: [
          { en: "5 spaces", es: "5 espacios", de: "5 Felder", nl: "5 vakken" },
          { en: "7 spaces", es: "7 espacios", de: "7 Felder", nl: "7 vakken" },
          { en: "9 spaces", es: "9 espacios", de: "9 Felder", nl: "9 vakken" },
          { en: "Until obstacle", es: "Hasta un obstáculo", de: "Bis zum Hindernis", nl: "Tot obstakel" }
        ],
        correct: 2,
        explanation: {
          en: "A Scout can move up to 9 spaces in a straight line (the full length of the board in one direction), stopping when it reaches a piece, lake, or board edge.",
          es: "Un Explorador puede moverse hasta 9 espacios en línea recta (la longitud completa del tablero en una dirección), deteniéndose cuando alcanza una pieza, lago o borde del tablero.",
          de: "Ein Späher kann sich bis zu 9 Felder in gerader Linie bewegen (die volle Länge des Brettes in eine Richtung), und stoppt, wenn er eine Figur, einen See oder den Brettrand erreicht.",
          nl: "Een Verkenner kan tot 9 vakken in een rechte lijn bewegen (de volledige lengte van het bord in één richting), stoppend wanneer het een stuk, meer of bordrand bereikt."
        }
      },
      {
        question: {
          en: "Can the flag be placed next to a lake?",
          es: "¿Se puede colocar la bandera junto a un lago?",
          de: "Kann die Flagge neben einem See platziert werden?",
          nl: "Kan de vlag naast een meer geplaatst worden?"
        },
        options: [
          { en: "Yes, any position in setup area", es: "Sí, cualquier posición en el área de configuración", de: "Ja, jede Position im Aufstellungsbereich", nl: "Ja, elke positie in opstellingsgebied" },
          { en: "No, must be in back row", es: "No, debe estar en la última fila", de: "Nein, muss in hinterer Reihe sein", nl: "Nee, moet in achterste rij zijn" },
          { en: "No, must be in center", es: "No, debe estar en el centro", de: "Nein, muss in der Mitte sein", nl: "Nee, moet in het midden zijn" },
          { en: "No, must be surrounded by bombs", es: "No, debe estar rodeada de bombas", de: "Nein, muss von Bomben umgeben sein", nl: "Nee, moet omringd zijn door bommen" }
        ],
        correct: 0,
        explanation: {
          en: "Yes, the flag can be placed anywhere within your 4-row setup area. Placing it near a lake can create natural chokepoints that limit the opponent's approach routes.",
          es: "Sí, la bandera se puede colocar en cualquier lugar dentro de tu área de configuración de 4 filas. Colocarla cerca de un lago puede crear puntos de estrangulamiento naturales que limitan las rutas de aproximación del oponente.",
          de: "Ja, die Flagge kann überall innerhalb Ihres 4-Reihen-Aufstellungsbereichs platziert werden. Die Platzierung neben einem See kann natürliche Engpässe schaffen, die die Annäherungswege des Gegners begrenzen.",
          nl: "Ja, de vlag kan overal binnen je 4-rijen opstellingsgebied geplaatst worden. Het plaatsen bij een meer kan natuurlijke knelpunten creëren die de naderingsroutes van de tegenstander beperken."
        }
      },
      {
        question: {
          en: "Which piece has the lowest combat rank (weakest in battle)?",
          es: "¿Qué pieza tiene el rango de combate más bajo (más débil en batalla)?",
          de: "Welche Figur hat den niedrigsten Kampfrang (schwächste im Kampf)?",
          nl: "Welk stuk heeft de laagste gevechtsrang (zwakste in gevecht)?"
        },
        options: [
          { en: "Miner", es: "Minero", de: "Mineur", nl: "Mijnwerker" },
          { en: "Scout", es: "Explorador", de: "Späher", nl: "Verkenner" },
          { en: "Spy", es: "Espía", de: "Spion", nl: "Spion" },
          { en: "Sergeant", es: "Sargento", de: "Sergeant", nl: "Sergeant" }
        ],
        correct: 2,
        explanation: {
          en: "The Spy has the lowest combat rank and will lose to any other piece in normal combat, except when the Spy attacks the Marshal. This makes the Spy extremely vulnerable yet potentially game-winning.",
          es: "El Espía tiene el rango de combate más bajo y perderá contra cualquier otra pieza en combate normal, excepto cuando el Espía ataca al Mariscal. Esto hace que el Espía sea extremadamente vulnerable pero potencialmente decisivo.",
          de: "Der Spion hat den niedrigsten Kampfrang und verliert gegen jede andere Figur im normalen Kampf, außer wenn der Spion den Marschall angreift. Dies macht den Spion extrem verwundbar, aber potenziell spielentscheidend.",
          nl: "De Spion heeft de laagste gevechtsrang en verliest tegen elk ander stuk in normaal gevecht, behalve wanneer de Spion de Maarschalk aanvalt. Dit maakt de Spion extreem kwetsbaar maar potentieel spelbepalend."
        }
      },
      {
        question: {
          en: "How many pieces can you move per turn in Stratego?",
          es: "¿Cuántas piezas puedes mover por turno en Stratego?",
          de: "Wie viele Figuren kannst du pro Zug in Stratego bewegen?",
          nl: "Hoeveel stukken kun je per beurt bewegen in Stratego?"
        },
        options: [
          { en: "1 piece", es: "1 pieza", de: "1 Figur", nl: "1 stuk" },
          { en: "2 pieces", es: "2 piezas", de: "2 Figuren", nl: "2 stukken" },
          { en: "3 pieces", es: "3 piezas", de: "3 Figuren", nl: "3 stukken" },
          { en: "As many as you want", es: "Tantas como quieras", de: "So viele wie du willst", nl: "Zoveel als je wilt" }
        ],
        correct: 0,
        explanation: {
          en: "You can only move one piece per turn in Stratego. This limitation makes each move critical and requires careful planning to coordinate your pieces effectively.",
          es: "Solo puedes mover una pieza por turno en Stratego. Esta limitación hace que cada movimiento sea crítico y requiere una planificación cuidadosa para coordinar tus piezas efectivamente.",
          de: "Du kannst nur eine Figur pro Zug in Stratego bewegen. Diese Einschränkung macht jeden Zug kritisch und erfordert sorgfältige Planung, um deine Figuren effektiv zu koordinieren.",
          nl: "Je kunt slechts één stuk per beurt bewegen in Stratego. Deze beperking maakt elke zet kritiek en vereist zorgvuldige planning om je stukken effectief te coördineren."
        }
      },
      {
        question: {
          en: "What is revealed when two pieces battle?",
          es: "¿Qué se revela cuando dos piezas batallan?",
          de: "Was wird enthüllt, wenn zwei Figuren kämpfen?",
          nl: "Wat wordt onthuld wanneer twee stukken vechten?"
        },
        options: [
          { en: "Only the winner's rank", es: "Solo el rango del ganador", de: "Nur der Rang des Gewinners", nl: "Alleen de rang van de winnaar" },
          { en: "Both pieces' ranks", es: "Los rangos de ambas piezas", de: "Die Ränge beider Figuren", nl: "De rangen van beide stukken" },
          { en: "Nothing is revealed", es: "Nada se revela", de: "Nichts wird enthüllt", nl: "Niets wordt onthuld" },
          { en: "All nearby pieces", es: "Todas las piezas cercanas", de: "Alle nahen Figuren", nl: "Alle nabije stukken" }
        ],
        correct: 1,
        explanation: {
          en: "When two pieces battle, both of their ranks are revealed to both players. This information is crucial for deducing the location and strength of other pieces.",
          es: "Cuando dos piezas batallan, los rangos de ambas se revelan a ambos jugadores. Esta información es crucial para deducir la ubicación y fuerza de otras piezas.",
          de: "Wenn zwei Figuren kämpfen, werden beide Ränge beiden Spielern offenbart. Diese Information ist entscheidend, um die Position und Stärke anderer Figuren zu deduzieren.",
          nl: "Wanneer twee stukken vechten, worden beide rangen aan beide spelers onthuld. Deze informatie is cruciaal voor het afleiden van de locatie en sterkte van andere stukken."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  } else if (typeof window !== 'undefined') {
    window.level2 = level2;
  }
})();
