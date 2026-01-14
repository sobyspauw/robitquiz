// Quiz Template - Level 9: Bord spelletjes - Clue
(function() {
  const level9 = {
    name: {
      en: "Cluedo - Grandmaster",
      es: "Cluedo - Gran Maestro",
      de: "Cluedo - Großmeister",
      nl: "Cluedo - Grootmeester"
    },
    questions: [
      {
        question: {
          en: "What grandmaster Cluedo technique is essential?",
          es: "¿Qué técnica de Cluedo de gran maestro es esencial?",
          de: "Welche Großmeister-Cluedo-Technik ist wesentlich?",
          nl: "Welke grootmeester-Cluedo-techniek is essentieel?"
        },
        options: [
          {
            en: "Multi-level opponent modeling",
            es: "Modelado de oponentes multinivel",
            de: "Mehrstufige Gegnermodellierung",
            nl: "Multi-niveau tegenstandermodellering"
          },
          {
            en: "Simple card counting",
            es: "Conteo simple de cartas",
            de: "Einfaches Kartenzählen",
            nl: "Eenvoudig kaarten tellen"
          },
          {
            en: "Quick accusations",
            es: "Acusaciones rápidas",
            de: "Schnelle Anschuldigungen",
            nl: "Snelle beschuldigingen"
          },
          {
            en: "Minimal tracking",
            es: "Seguimiento mínimo",
            de: "Minimales Tracking",
            nl: "Minimale tracking"
          }
        ],
        correct: 0,
        explanation: {
          en: "Grandmasters model not just what cards exist, but what opponents know, what they think you know, and how they'll act based on their knowledge state.",
          es: "Los grandes maestros modelan no solo qué cartas existen, sino qué saben los oponentes, qué piensan que sabes y cómo actuarán basándose en su estado de conocimiento.",
          de: "Großmeister modellieren nicht nur, welche Karten existieren, sondern was Gegner wissen, was sie denken, dass Sie wissen, und wie sie basierend auf ihrem Wissensstand handeln werden.",
          nl: "Grootmeesters modelleren niet alleen welke kaarten bestaan, maar wat tegenstanders weten, wat ze denken dat jij weet, en hoe ze zullen handelen op basis van hun kennistoestand."
        }
      },
      {
        question: {
          en: "In advanced play, what is the optimal timing for making a false suggestion?",
          es: "En el juego avanzado, ¿cuál es el momento óptimo para hacer una sugerencia falsa?",
          de: "Im fortgeschrittenen Spiel, wann ist der optimale Zeitpunkt für einen falschen Vorschlag?",
          nl: "Wat is in gevorderd spel het optimale moment voor het doen van een valse suggestie?"
        },
        options: [
          {
            en: "When you have complete information about the envelope",
            es: "Cuando tienes información completa sobre el sobre",
            de: "Wenn Sie vollständige Informationen über den Umschlag haben",
            nl: "Wanneer je volledige informatie hebt over de envelop"
          },
          {
            en: "Early in the game randomly",
            es: "Al principio del juego al azar",
            de: "Früh im Spiel zufällig",
            nl: "Vroeg in het spel willekeurig"
          },
          {
            en: "Never, as it provides no benefit",
            es: "Nunca, ya que no proporciona beneficio",
            de: "Niemals, da es keinen Nutzen bringt",
            nl: "Nooit, want het levert geen voordeel op"
          },
          {
            en: "Only on your last turn",
            es: "Solo en tu último turno",
            de: "Nur in Ihrem letzten Zug",
            nl: "Alleen in je laatste beurt"
          }
        ],
        correct: 0,
        explanation: {
          en: "Making false suggestions when you know the solution can misdirect opponents and prevent them from narrowing down their deductions while you position for the winning accusation.",
          es: "Hacer sugerencias falsas cuando conoces la solución puede desorientar a los oponentes y evitar que reduzcan sus deducciones mientras te posicionas para la acusación ganadora.",
          de: "Falsche Vorschläge zu machen, wenn Sie die Lösung kennen, kann Gegner irreführen und verhindern, dass sie ihre Schlussfolgerungen eingrenzen, während Sie sich für die gewinnende Anschuldigung positionieren.",
          nl: "Het doen van valse suggesties wanneer je de oplossing kent kan tegenstanders misleiden en voorkomen dat ze hun deducties beperken terwijl jij je positioneert voor de winnende beschuldiging."
        }
      },
      {
        question: {
          en: "What is the information theory advantage of being shown a card by the player to your left versus to your right?",
          es: "¿Cuál es la ventaja de teoría de la información de que te muestre una carta el jugador a tu izquierda versus a tu derecha?",
          de: "Was ist der informationstheoretische Vorteil, wenn Ihnen der Spieler zu Ihrer Linken eine Karte zeigt gegenüber dem zu Ihrer Rechten?",
          nl: "Wat is het informatie-theoretische voordeel van een kaart getoond krijgen door de speler links van je versus rechts van je?"
        },
        options: [
          {
            en: "Left player reveals earlier, preventing information leak to fewer opponents",
            es: "El jugador izquierdo revela antes, evitando filtración de información a menos oponentes",
            de: "Linker Spieler offenbart früher, verhindert Informationsleck an weniger Gegner",
            nl: "Linker speler onthult eerder, waardoor informatielek naar minder tegenstanders wordt voorkomen"
          },
          {
            en: "No difference in information advantage",
            es: "No hay diferencia en ventaja de información",
            de: "Kein Unterschied im Informationsvorteil",
            nl: "Geen verschil in informatievoordeel"
          },
          {
            en: "Right player is always better",
            es: "El jugador derecho es siempre mejor",
            de: "Rechter Spieler ist immer besser",
            nl: "Rechter speler is altijd beter"
          },
          {
            en: "It only matters in 3-player games",
            es: "Solo importa en juegos de 3 jugadores",
            de: "Es ist nur in 3-Spieler-Spielen wichtig",
            nl: "Het is alleen belangrijk in 3-speler spellen"
          }
        ],
        correct: 0,
        explanation: {
          en: "When the player to your left shows you a card, fewer opponents observe the transaction, giving you a temporary information advantage over players who didn't witness the exchange.",
          es: "Cuando el jugador a tu izquierda te muestra una carta, menos oponentes observan la transacción, dándote una ventaja de información temporal sobre jugadores que no presenciaron el intercambio.",
          de: "Wenn der Spieler zu Ihrer Linken Ihnen eine Karte zeigt, beobachten weniger Gegner die Transaktion, was Ihnen einen vorübergehenden Informationsvorteil gegenüber Spielern verschafft, die den Austausch nicht miterlebt haben.",
          nl: "Wanneer de speler links van je een kaart toont, observeren minder tegenstanders de transactie, wat je een tijdelijk informatievoordeel geeft ten opzichte van spelers die de uitwisseling niet hebben waargenomen."
        }
      },
      {
        question: {
          en: "What is the optimal card-showing strategy when multiple cards match a suggestion?",
          es: "¿Cuál es la estrategia óptima de mostrar cartas cuando múltiples cartas coinciden con una sugerencia?",
          de: "Was ist die optimale Kartenzeigestrategie, wenn mehrere Karten zu einem Vorschlag passen?",
          nl: "Wat is de optimale kaart-toon strategie wanneer meerdere kaarten overeenkomen met een suggestie?"
        },
        options: [
          {
            en: "Show the card that gives the suggester the least new information",
            es: "Mostrar la carta que da al sugerente la menor información nueva",
            de: "Die Karte zeigen, die dem Vorschlagenden die wenigsten neuen Informationen gibt",
            nl: "Toon de kaart die de suggerende persoon de minste nieuwe informatie geeft"
          },
          {
            en: "Always show the same type (person, weapon, or room)",
            es: "Siempre mostrar el mismo tipo (persona, arma o habitación)",
            de: "Immer denselben Typ zeigen (Person, Waffe oder Raum)",
            nl: "Altijd hetzelfde type tonen (persoon, wapen of kamer)"
          },
          {
            en: "Show randomly to confuse opponents",
            es: "Mostrar al azar para confundir oponentes",
            de: "Zufällig zeigen, um Gegner zu verwirren",
            nl: "Willekeurig tonen om tegenstanders te verwarren"
          },
          {
            en: "Always show the weapon card",
            es: "Siempre mostrar la carta de arma",
            de: "Immer die Waffenkarte zeigen",
            nl: "Altijd de wapenkaart tonen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Grandmaster play involves showing the card that provides minimum information gain to the suggester - ideally a card they've already seen from you or one that confirms information they likely already deduced.",
          es: "El juego de gran maestro implica mostrar la carta que proporciona la mínima ganancia de información al sugerente, idealmente una carta que ya hayan visto de ti o una que confirme información que probablemente ya dedujeron.",
          de: "Großmeisterspiel beinhaltet das Zeigen der Karte, die dem Vorschlagenden minimale Informationsgewinnung bietet - idealerweise eine Karte, die sie bereits von Ihnen gesehen haben oder eine, die Informationen bestätigt, die sie wahrscheinlich bereits deduziert haben.",
          nl: "Grootmeester spel houdt in dat je de kaart toont die minimale informatie winst biedt aan de suggererende speler - bij voorkeur een kaart die ze al van jou hebben gezien of een die informatie bevestigt die ze waarschijnlijk al hebben afgeleid."
        }
      },
      {
        question: {
          en: "In probability theory, what is the expected number of suggestions needed to solve the game with optimal strategy in a 3-player game?",
          es: "En teoría de probabilidad, ¿cuál es el número esperado de sugerencias necesarias para resolver el juego con estrategia óptima en un juego de 3 jugadores?",
          de: "Was ist in der Wahrscheinlichkeitstheorie die erwartete Anzahl von Vorschlägen, die benötigt werden, um das Spiel mit optimaler Strategie in einem 3-Spieler-Spiel zu lösen?",
          nl: "Wat is in waarschijnlijkheidstheorie het verwachte aantal suggesties dat nodig is om het spel op te lossen met optimale strategie in een 3-speler spel?"
        },
        options: [
          {
            en: "5-7 suggestions depending on card distribution",
            es: "5-7 sugerencias dependiendo de la distribución de cartas",
            de: "5-7 Vorschläge abhängig von der Kartenverteilung",
            nl: "5-7 suggesties afhankelijk van de kaartverdeling"
          },
          {
            en: "Always exactly 3 suggestions",
            es: "Siempre exactamente 3 sugerencias",
            de: "Immer genau 3 Vorschläge",
            nl: "Altijd precies 3 suggesties"
          },
          {
            en: "10-15 suggestions minimum",
            es: "10-15 sugerencias mínimo",
            de: "10-15 Vorschläge mindestens",
            nl: "Minimaal 10-15 suggesties"
          },
          {
            en: "One suggestion per player",
            es: "Una sugerencia por jugador",
            de: "Ein Vorschlag pro Spieler",
            nl: "Een suggestie per speler"
          }
        ],
        correct: 0,
        explanation: {
          en: "With optimal information-theoretic play in a 3-player game, you can typically solve the mystery in 5-7 suggestions by maximizing information gain per query and using logical deduction.",
          es: "Con juego óptimo de teoría de información en un juego de 3 jugadores, típicamente puedes resolver el misterio en 5-7 sugerencias maximizando la ganancia de información por consulta y usando deducción lógica.",
          de: "Mit optimalem informationstheoretischem Spiel in einem 3-Spieler-Spiel können Sie das Rätsel typischerweise in 5-7 Vorschlägen lösen, indem Sie den Informationsgewinn pro Abfrage maximieren und logische Deduktion verwenden.",
          nl: "Met optimaal informatie-theoretisch spel in een 3-speler spel kun je het mysterie doorgaans oplossen in 5-7 suggesties door informatie winst per vraag te maximaliseren en logische deductie te gebruiken."
        }
      },
      {
        question: {
          en: "What advanced technique involves tracking which players have NOT refuted specific suggestions?",
          es: "¿Qué técnica avanzada implica rastrear qué jugadores NO han refutado sugerencias específicas?",
          de: "Welche fortgeschrittene Technik beinhaltet das Verfolgen, welche Spieler bestimmte Vorschläge NICHT widerlegt haben?",
          nl: "Welke geavanceerde techniek houdt in dat je bijhoudt welke spelers specifieke suggesties NIET hebben weerlegd?"
        },
        options: [
          {
            en: "Negative information tracking",
            es: "Seguimiento de información negativa",
            de: "Verfolgung negativer Informationen",
            nl: "Negatieve informatie tracking"
          },
          {
            en: "Positive card counting",
            es: "Conteo de cartas positivo",
            de: "Positives Kartenzählen",
            nl: "Positief kaarten tellen"
          },
          {
            en: "Random guessing",
            es: "Adivinanza aleatoria",
            de: "Zufälliges Raten",
            nl: "Willekeurig gokken"
          },
          {
            en: "Suggestion mirroring",
            es: "Reflejo de sugerencias",
            de: "Vorschlagsspiegelung",
            nl: "Suggestie spiegeling"
          }
        ],
        correct: 0,
        explanation: {
          en: "Negative information tracking is crucial at grandmaster level - knowing which cards players DON'T have is often as valuable as knowing which cards they DO have for elimination deduction.",
          es: "El seguimiento de información negativa es crucial en el nivel de gran maestro: saber qué cartas NO tienen los jugadores es a menudo tan valioso como saber qué cartas SÍ tienen para la deducción por eliminación.",
          de: "Die Verfolgung negativer Informationen ist auf Großmeisterniveau entscheidend - zu wissen, welche Karten Spieler NICHT haben, ist oft genauso wertvoll wie zu wissen, welche Karten sie HABEN für die Eliminationsdeduktion.",
          nl: "Negatieve informatie tracking is cruciaal op grootmeester niveau - weten welke kaarten spelers NIET hebben is vaak net zo waardevol als weten welke kaarten ze WEL hebben voor eliminatie deductie."
        }
      },
      {
        question: {
          en: "What is the mathematical concept behind optimizing suggestion sequences?",
          es: "¿Cuál es el concepto matemático detrás de optimizar secuencias de sugerencias?",
          de: "Was ist das mathematische Konzept hinter der Optimierung von Vorschlagssequenzen?",
          nl: "Wat is het wiskundige concept achter het optimaliseren van suggestie sequenties?"
        },
        options: [
          {
            en: "Information entropy and maximum information gain",
            es: "Entropía de información y máxima ganancia de información",
            de: "Informationsentropie und maximaler Informationsgewinn",
            nl: "Informatie entropie en maximale informatie winst"
          },
          {
            en: "Simple addition",
            es: "Suma simple",
            de: "Einfache Addition",
            nl: "Eenvoudige optelling"
          },
          {
            en: "Random probability",
            es: "Probabilidad aleatoria",
            de: "Zufällige Wahrscheinlichkeit",
            nl: "Willekeurige waarschijnlijkheid"
          },
          {
            en: "Linear progression",
            es: "Progresión lineal",
            de: "Lineare Progression",
            nl: "Lineaire progressie"
          }
        ],
        correct: 0,
        explanation: {
          en: "Expert players use information theory concepts like entropy to maximize the expected information gain from each suggestion, making each query count toward solving the mystery.",
          es: "Los jugadores expertos usan conceptos de teoría de información como entropía para maximizar la ganancia de información esperada de cada sugerencia, haciendo que cada consulta cuente para resolver el misterio.",
          de: "Expertspieler verwenden informationstheoretische Konzepte wie Entropie, um den erwarteten Informationsgewinn aus jedem Vorschlag zu maximieren und jede Abfrage zur Lösung des Rätsels zählen zu lassen.",
          nl: "Expert spelers gebruiken informatie theorie concepten zoals entropie om de verwachte informatie winst van elke suggestie te maximaliseren, waardoor elke vraag meetelt voor het oplossen van het mysterie."
        }
      },
      {
        question: {
          en: "In tournament play, what is the 'common knowledge paradox'?",
          es: "En el juego de torneo, ¿cuál es la 'paradoja del conocimiento común'?",
          de: "Was ist im Turnierspiel das 'Common Knowledge Paradox'?",
          nl: "Wat is in toernooispel de 'algemene kennis paradox'?"
        },
        options: [
          {
            en: "Information you reveal becomes common knowledge, but what opponents don't know you know is private advantage",
            es: "La información que revelas se convierte en conocimiento común, pero lo que los oponentes no saben que sabes es ventaja privada",
            de: "Informationen, die Sie offenbaren, werden zu allgemeinem Wissen, aber was Gegner nicht wissen, dass Sie wissen, ist privater Vorteil",
            nl: "Informatie die je onthult wordt algemene kennis, maar wat tegenstanders niet weten dat jij weet is privé voordeel"
          },
          {
            en: "Everyone knows everything equally",
            es: "Todos saben todo por igual",
            de: "Jeder weiß alles gleich",
            nl: "Iedereen weet alles gelijk"
          },
          {
            en: "No information should be shared",
            es: "No se debe compartir información",
            de: "Keine Informationen sollten geteilt werden",
            nl: "Geen informatie moet worden gedeeld"
          },
          {
            en: "Common cards are worthless",
            es: "Las cartas comunes no tienen valor",
            de: "Gewöhnliche Karten sind wertlos",
            nl: "Gewone kaarten zijn waardeloos"
          }
        ],
        correct: 0,
        explanation: {
          en: "The paradox is that while showing cards creates common knowledge among observers, your private deductions from what you haven't been shown remain your competitive edge.",
          es: "La paradoja es que mientras mostrar cartas crea conocimiento común entre observadores, tus deducciones privadas de lo que no te han mostrado permanecen como tu ventaja competitiva.",
          de: "Das Paradoxon ist, dass während das Zeigen von Karten gemeinsames Wissen unter Beobachtern schafft, Ihre privaten Schlussfolgerungen aus dem, was Ihnen nicht gezeigt wurde, Ihr Wettbewerbsvorteil bleiben.",
          nl: "De paradox is dat terwijl het tonen van kaarten algemene kennis creëert onder waarnemers, je privé deducties van wat je niet getoond is gekregen je competitieve voordeel blijven."
        }
      },
      {
        question: {
          en: "What is the Bayesian approach to updating card probabilities?",
          es: "¿Cuál es el enfoque bayesiano para actualizar probabilidades de cartas?",
          de: "Was ist der Bayes'sche Ansatz zur Aktualisierung von Kartenwahrscheinlichkeiten?",
          nl: "Wat is de Bayesiaanse benadering voor het bijwerken van kaart waarschijnlijkheden?"
        },
        options: [
          {
            en: "Update probabilities based on new evidence using conditional probability",
            es: "Actualizar probabilidades basándose en nueva evidencia usando probabilidad condicional",
            de: "Wahrscheinlichkeiten basierend auf neuen Beweisen unter Verwendung bedingter Wahrscheinlichkeit aktualisieren",
            nl: "Waarschijnlijkheden bijwerken op basis van nieuw bewijs met behulp van voorwaardelijke waarschijnlijkheid"
          },
          {
            en: "Keep all probabilities constant",
            es: "Mantener todas las probabilidades constantes",
            de: "Alle Wahrscheinlichkeiten konstant halten",
            nl: "Alle waarschijnlijkheden constant houden"
          },
          {
            en: "Only use initial probabilities",
            es: "Solo usar probabilidades iniciales",
            de: "Nur anfängliche Wahrscheinlichkeiten verwenden",
            nl: "Alleen initiële waarschijnlijkheden gebruiken"
          },
          {
            en: "Guess randomly each time",
            es: "Adivinar aleatoriamente cada vez",
            de: "Jedes Mal zufällig raten",
            nl: "Elke keer willekeurig gokken"
          }
        ],
        correct: 0,
        explanation: {
          en: "Grandmaster players apply Bayesian inference to continuously update the probability that each card is in the envelope based on observations, refutations, and non-refutations.",
          es: "Los jugadores de gran maestro aplican inferencia bayesiana para actualizar continuamente la probabilidad de que cada carta esté en el sobre basándose en observaciones, refutaciones y no refutaciones.",
          de: "Großmeisterspieler wenden Bayes'sche Inferenz an, um kontinuierlich die Wahrscheinlichkeit zu aktualisieren, dass jede Karte im Umschlag ist, basierend auf Beobachtungen, Widerlegungen und Nicht-Widerlegungen.",
          nl: "Grootmeester spelers passen Bayesiaanse inferentie toe om continu de waarschijnlijkheid bij te werken dat elke kaart in de envelop zit, gebaseerd op observaties, weerleggingen en niet-weerleggingen."
        }
      },
      {
        question: {
          en: "What is the 'suggestion targeting' strategy in multi-player games?",
          es: "¿Cuál es la estrategia de 'orientación de sugerencias' en juegos multijugador?",
          de: "Was ist die 'Vorschlagszielstrategie' in Mehrspieler-Spielen?",
          nl: "Wat is de 'suggestie targeting' strategie in multi-speler spellen?"
        },
        options: [
          {
            en: "Make suggestions that specific opponents are most likely to refute for maximum information",
            es: "Hacer sugerencias que oponentes específicos tienen más probabilidad de refutar para máxima información",
            de: "Vorschläge machen, die bestimmte Gegner am ehesten widerlegen werden für maximale Information",
            nl: "Suggesties doen die specifieke tegenstanders het meest waarschijnlijk zullen weerleggen voor maximale informatie"
          },
          {
            en: "Always make the same suggestion",
            es: "Siempre hacer la misma sugerencia",
            de: "Immer denselben Vorschlag machen",
            nl: "Altijd dezelfde suggestie doen"
          },
          {
            en: "Target only the player to your left",
            es: "Apuntar solo al jugador a tu izquierda",
            de: "Nur den Spieler zu Ihrer Linken ansprechen",
            nl: "Alleen de speler links van je targeten"
          },
          {
            en: "Avoid all other players",
            es: "Evitar a todos los demás jugadores",
            de: "Alle anderen Spieler vermeiden",
            nl: "Vermijd alle andere spelers"
          }
        ],
        correct: 0,
        explanation: {
          en: "Expert players craft suggestions based on what specific opponents are likely holding, ensuring each suggestion yields maximum information from the player most likely to refute it.",
          es: "Los jugadores expertos elaboran sugerencias basándose en lo que los oponentes específicos probablemente tienen, asegurando que cada sugerencia produzca máxima información del jugador con más probabilidad de refutarla.",
          de: "Expertspieler erstellen Vorschläge basierend darauf, was bestimmte Gegner wahrscheinlich halten, um sicherzustellen, dass jeder Vorschlag maximale Informationen vom Spieler liefert, der ihn am ehesten widerlegen wird.",
          nl: "Expert spelers maken suggesties gebaseerd op wat specifieke tegenstanders waarschijnlijk hebben, zodat elke suggestie maximale informatie oplevert van de speler die het het meest waarschijnlijk zal weerleggen."
        }
      },
      {
        question: {
          en: "What is the game-theoretic equilibrium in Cluedo regarding suggestion honesty?",
          es: "¿Cuál es el equilibrio de teoría de juegos en Cluedo respecto a la honestidad de sugerencias?",
          de: "Was ist das spieltheoretische Gleichgewicht in Cluedo bezüglich der Ehrlichkeit von Vorschlägen?",
          nl: "Wat is het speltheoretisch evenwicht in Cluedo met betrekking tot suggestie eerlijkheid?"
        },
        options: [
          {
            en: "Mixed strategy between information-gathering and deception",
            es: "Estrategia mixta entre recopilación de información y engaño",
            de: "Gemischte Strategie zwischen Informationsbeschaffung und Täuschung",
            nl: "Gemengde strategie tussen informatie verzamelen en misleiding"
          },
          {
            en: "Always be honest",
            es: "Siempre ser honesto",
            de: "Immer ehrlich sein",
            nl: "Altijd eerlijk zijn"
          },
          {
            en: "Always deceive",
            es: "Siempre engañar",
            de: "Immer täuschen",
            nl: "Altijd misleiden"
          },
          {
            en: "Pure randomness",
            es: "Aleatoriedad pura",
            de: "Reine Zufälligkeit",
            nl: "Zuivere willekeur"
          }
        ],
        correct: 0,
        explanation: {
          en: "In equilibrium play, optimal strategy involves mixing genuine information-gathering suggestions with occasional misdirection to prevent opponents from reading your knowledge state.",
          es: "En el juego de equilibrio, la estrategia óptima implica mezclar sugerencias genuinas de recopilación de información con engaño ocasional para evitar que los oponentes lean tu estado de conocimiento.",
          de: "Im Gleichgewichtsspiel beinhaltet die optimale Strategie die Mischung echter informationssammelnder Vorschläge mit gelegentlicher Irreführung, um zu verhindern, dass Gegner Ihren Wissensstand ablesen.",
          nl: "In evenwichtsspel omvat de optimale strategie het mengen van echte informatie verzamelende suggesties met af en toe misleiding om te voorkomen dat tegenstanders je kennistoestand kunnen lezen."
        }
      },
      {
        question: {
          en: "What is the 'card concentration' principle in competitive play?",
          es: "¿Cuál es el principio de 'concentración de cartas' en el juego competitivo?",
          de: "Was ist das 'Kartenkonzentrationsprinzip' im Wettkampfspiel?",
          nl: "Wat is het 'kaart concentratie' principe in competitief spel?"
        },
        options: [
          {
            en: "Focus suggestions on cards you don't hold to maximize elimination information",
            es: "Enfocar sugerencias en cartas que no tienes para maximizar información de eliminación",
            de: "Vorschläge auf Karten konzentrieren, die Sie nicht halten, um Eliminationsinformationen zu maximieren",
            nl: "Focus suggesties op kaarten die je niet hebt om eliminatie informatie te maximaliseren"
          },
          {
            en: "Only suggest cards you hold",
            es: "Solo sugerir cartas que tienes",
            de: "Nur Karten vorschlagen, die Sie halten",
            nl: "Alleen kaarten suggereren die je hebt"
          },
          {
            en: "Suggest all cards equally",
            es: "Sugerir todas las cartas por igual",
            de: "Alle Karten gleichmäßig vorschlagen",
            nl: "Alle kaarten gelijk suggereren"
          },
          {
            en: "Never repeat card types",
            es: "Nunca repetir tipos de cartas",
            de: "Kartentypen nie wiederholen",
            nl: "Nooit kaart typen herhalen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Since you already know your own cards can't be in the envelope, optimal play concentrates suggestions on cards you don't hold to efficiently eliminate possibilities.",
          es: "Como ya sabes que tus propias cartas no pueden estar en el sobre, el juego óptimo concentra sugerencias en cartas que no tienes para eliminar posibilidades eficientemente.",
          de: "Da Sie bereits wissen, dass Ihre eigenen Karten nicht im Umschlag sein können, konzentriert optimales Spiel Vorschläge auf Karten, die Sie nicht halten, um Möglichkeiten effizient zu eliminieren.",
          nl: "Aangezien je al weet dat je eigen kaarten niet in de envelop kunnen zitten, concentreert optimaal spel suggesties op kaarten die je niet hebt om mogelijkheden efficiënt te elimineren."
        }
      },
      {
        question: {
          en: "What is the 'deduction graph' technique?",
          es: "¿Qué es la técnica del 'gráfico de deducción'?",
          de: "Was ist die 'Deduktionsgraph'-Technik?",
          nl: "Wat is de 'deductie grafiek' techniek?"
        },
        options: [
          {
            en: "Mapping relationships between cards, players, and possibilities to identify logical contradictions",
            es: "Mapear relaciones entre cartas, jugadores y posibilidades para identificar contradicciones lógicas",
            de: "Beziehungen zwischen Karten, Spielern und Möglichkeiten abbilden, um logische Widersprüche zu identifizieren",
            nl: "Het in kaart brengen van relaties tussen kaarten, spelers en mogelijkheden om logische tegenstrijdigheden te identificeren"
          },
          {
            en: "Drawing pictures of the board",
            es: "Dibujar imágenes del tablero",
            de: "Bilder des Bretts zeichnen",
            nl: "Tekeningen maken van het bord"
          },
          {
            en: "Graphing dice rolls",
            es: "Graficar tiradas de dados",
            de: "Würfelwürfe grafisch darstellen",
            nl: "Dobbelsteen worpen grafieken maken"
          },
          {
            en: "Plotting movement paths",
            es: "Trazar rutas de movimiento",
            de: "Bewegungspfade plotten",
            nl: "Bewegingsroutes plotten"
          }
        ],
        correct: 0,
        explanation: {
          en: "Advanced players mentally construct a graph of card-player relationships, using logical constraints to identify which cards must or cannot be in specific locations.",
          es: "Los jugadores avanzados construyen mentalmente un gráfico de relaciones carta-jugador, usando restricciones lógicas para identificar qué cartas deben o no pueden estar en ubicaciones específicas.",
          de: "Fortgeschrittene Spieler konstruieren mental einen Graphen von Karte-Spieler-Beziehungen und verwenden logische Einschränkungen, um zu identifizieren, welche Karten an bestimmten Orten sein müssen oder nicht sein können.",
          nl: "Geavanceerde spelers construeren mentaal een grafiek van kaart-speler relaties, waarbij logische beperkingen worden gebruikt om te identificeren welke kaarten wel of niet op specifieke locaties kunnen zijn."
        }
      },
      {
        question: {
          en: "In what situation should you deliberately delay your accusation even when you know the solution?",
          es: "¿En qué situación deberías deliberadamente retrasar tu acusación incluso cuando conoces la solución?",
          de: "In welcher Situation sollten Sie Ihre Anschuldigung absichtlich verzögern, auch wenn Sie die Lösung kennen?",
          nl: "In welke situatie moet je opzettelijk je beschuldiging uitstellen, zelfs wanneer je de oplossing kent?"
        },
        options: [
          {
            en: "When you're not in the correct room and opponents are close to solving",
            es: "Cuando no estás en la habitación correcta y los oponentes están cerca de resolver",
            de: "Wenn Sie nicht im richtigen Raum sind und Gegner kurz vor der Lösung stehen",
            nl: "Wanneer je niet in de juiste kamer bent en tegenstanders dichtbij de oplossing zijn"
          },
          {
            en: "Never delay if you know the solution",
            es: "Nunca retrasar si conoces la solución",
            de: "Niemals verzögern, wenn Sie die Lösung kennen",
            nl: "Nooit uitstellen als je de oplossing kent"
          },
          {
            en: "Always wait until the last turn",
            es: "Siempre esperar hasta el último turno",
            de: "Immer bis zum letzten Zug warten",
            nl: "Altijd wachten tot de laatste beurt"
          },
          {
            en: "Only when you have all 21 cards identified",
            es: "Solo cuando tienes las 21 cartas identificadas",
            de: "Nur wenn Sie alle 21 Karten identifiziert haben",
            nl: "Alleen wanneer je alle 21 kaarten hebt geïdentificeerd"
          }
        ],
        correct: 0,
        explanation: {
          en: "Sometimes you must weigh the risk of losing position versus the risk of an opponent solving first - optimal play sometimes requires strategic patience even with the solution.",
          es: "A veces debes sopesar el riesgo de perder posición versus el riesgo de que un oponente resuelva primero: el juego óptimo a veces requiere paciencia estratégica incluso con la solución.",
          de: "Manchmal müssen Sie das Risiko eines Positionsverlustes gegen das Risiko abwägen, dass ein Gegner zuerst löst - optimales Spiel erfordert manchmal strategische Geduld, selbst mit der Lösung.",
          nl: "Soms moet je het risico van positieverlies afwegen tegen het risico dat een tegenstander eerst oplost - optimaal spel vereist soms strategisch geduld, zelfs met de oplossing."
        }
      },
      {
        question: {
          en: "What is the 'meta-deduction' in tournament play?",
          es: "¿Qué es la 'meta-deducción' en el juego de torneo?",
          de: "Was ist die 'Meta-Deduktion' im Turnierspiel?",
          nl: "Wat is de 'meta-deductie' in toernooispel?"
        },
        options: [
          {
            en: "Deducing information about what opponents have deduced based on their behavior",
            es: "Deducir información sobre lo que los oponentes han deducido basándose en su comportamiento",
            de: "Informationen darüber ableiten, was Gegner basierend auf ihrem Verhalten deduziert haben",
            nl: "Informatie afleiden over wat tegenstanders hebben afgeleid op basis van hun gedrag"
          },
          {
            en: "Deducing the game rules",
            es: "Deducir las reglas del juego",
            de: "Die Spielregeln deduzieren",
            nl: "De spelregels afleiden"
          },
          {
            en: "Making random deductions",
            es: "Hacer deducciones aleatorias",
            de: "Zufällige Deduktionen machen",
            nl: "Willekeurige deducties maken"
          },
          {
            en: "Copying other players' strategies",
            es: "Copiar estrategias de otros jugadores",
            de: "Strategien anderer Spieler kopieren",
            nl: "Strategieën van andere spelers kopiëren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Grandmaster play involves second-order thinking: analyzing opponents' suggestions and accusations to infer their knowledge state and predict their next moves.",
          es: "El juego de gran maestro implica pensamiento de segundo orden: analizar sugerencias y acusaciones de oponentes para inferir su estado de conocimiento y predecir sus próximos movimientos.",
          de: "Großmeisterspiel beinhaltet Denken zweiter Ordnung: Analysieren von Vorschlägen und Anschuldigungen der Gegner, um deren Wissensstand zu schließen und ihre nächsten Züge vorherzusagen.",
          nl: "Grootmeester spel omvat tweede-orde denken: het analyseren van suggesties en beschuldigingen van tegenstanders om hun kennistoestand af te leiden en hun volgende zetten te voorspellen."
        }
      },
      {
        question: {
          en: "What is the optimal number of rooms to cycle through in a typical 6-player game?",
          es: "¿Cuál es el número óptimo de habitaciones por las que circular en un juego típico de 6 jugadores?",
          de: "Was ist die optimale Anzahl von Räumen, durch die in einem typischen 6-Spieler-Spiel zu zyklieren ist?",
          nl: "Wat is het optimale aantal kamers om doorheen te gaan in een typisch 6-speler spel?"
        },
        options: [
          {
            en: "3-4 strategically chosen rooms for maximum coverage and suggestion efficiency",
            es: "3-4 habitaciones elegidas estratégicamente para máxima cobertura y eficiencia de sugerencias",
            de: "3-4 strategisch ausgewählte Räume für maximale Abdeckung und Vorschlagseffizienz",
            nl: "3-4 strategisch gekozen kamers voor maximale dekking en suggestie efficiëntie"
          },
          {
            en: "All 9 rooms equally",
            es: "Todas las 9 habitaciones por igual",
            de: "Alle 9 Räume gleichmäßig",
            nl: "Alle 9 kamers gelijkmatig"
          },
          {
            en: "Only one room repeatedly",
            es: "Solo una habitación repetidamente",
            de: "Nur ein Raum wiederholt",
            nl: "Slechts één kamer herhaaldelijk"
          },
          {
            en: "Two rooms maximum",
            es: "Dos habitaciones máximo",
            de: "Maximal zwei Räume",
            nl: "Twee kamers maximaal"
          }
        ],
        correct: 0,
        explanation: {
          en: "Expert players typically cycle through 3-4 centrally located rooms, balancing movement efficiency with the ability to make varied suggestions and reach the solution room quickly.",
          es: "Los jugadores expertos típicamente circulan por 3-4 habitaciones ubicadas centralmente, equilibrando eficiencia de movimiento con la capacidad de hacer sugerencias variadas y alcanzar la habitación de solución rápidamente.",
          de: "Expertspieler zyklieren typischerweise durch 3-4 zentral gelegene Räume und balancieren Bewegungseffizienz mit der Fähigkeit, abwechslungsreiche Vorschläge zu machen und den Lösungsraum schnell zu erreichen.",
          nl: "Expert spelers gaan typisch door 3-4 centraal gelegen kamers, waarbij bewegingsefficiëntie wordt gebalanceerd met het vermogen om gevarieerde suggesties te doen en snel de oplossings kamer te bereiken."
        }
      },
      {
        question: {
          en: "What is the 'card distribution asymmetry' in a 4-player game?",
          es: "¿Qué es la 'asimetría de distribución de cartas' en un juego de 4 jugadores?",
          de: "Was ist die 'Kartenverteilungsasymmetrie' in einem 4-Spieler-Spiel?",
          nl: "Wat is de 'kaart distributie asymmetrie' in een 4-speler spel?"
        },
        options: [
          {
            en: "Players receive either 4 or 5 cards, creating information imbalance",
            es: "Los jugadores reciben 4 o 5 cartas, creando desequilibrio de información",
            de: "Spieler erhalten entweder 4 oder 5 Karten, was Informationsungleichgewicht schafft",
            nl: "Spelers krijgen ofwel 4 of 5 kaarten, wat informatie onbalans creëert"
          },
          {
            en: "All players receive equal cards",
            es: "Todos los jugadores reciben cartas iguales",
            de: "Alle Spieler erhalten gleiche Karten",
            nl: "Alle spelers krijgen gelijke kaarten"
          },
          {
            en: "Card types are distributed unevenly",
            es: "Los tipos de cartas se distribuyen de manera desigual",
            de: "Kartentypen werden ungleichmäßig verteilt",
            nl: "Kaart typen worden ongelijk verdeeld"
          },
          {
            en: "Some players get no cards",
            es: "Algunos jugadores no reciben cartas",
            de: "Einige Spieler erhalten keine Karten",
            nl: "Sommige spelers krijgen geen kaarten"
          }
        ],
        correct: 0,
        explanation: {
          en: "With 18 cards distributed among 4 players (18÷4=4.5), some players get 5 cards while others get 4, giving players with more cards slightly more initial information.",
          es: "Con 18 cartas distribuidas entre 4 jugadores (18÷4=4.5), algunos jugadores reciben 5 cartas mientras otros reciben 4, dando a jugadores con más cartas ligeramente más información inicial.",
          de: "Mit 18 Karten verteilt auf 4 Spieler (18÷4=4,5) erhalten einige Spieler 5 Karten, während andere 4 erhalten, was Spielern mit mehr Karten etwas mehr anfängliche Informationen gibt.",
          nl: "Met 18 kaarten verdeeld over 4 spelers (18÷4=4.5) krijgen sommige spelers 5 kaarten terwijl anderen 4 krijgen, wat spelers met meer kaarten iets meer initiële informatie geeft."
        }
      },
      {
        question: {
          en: "What advanced tracking method uses a 'possibility matrix'?",
          es: "¿Qué método de seguimiento avanzado usa una 'matriz de posibilidades'?",
          de: "Welche fortgeschrittene Verfolgungsmethode verwendet eine 'Möglichkeitsmatrix'?",
          nl: "Welke geavanceerde tracking methode gebruikt een 'mogelijkheids matrix'?"
        },
        options: [
          {
            en: "Cross-referencing cards against players to track who could have which cards",
            es: "Referencias cruzadas de cartas contra jugadores para rastrear quién podría tener qué cartas",
            de: "Kreuzverweisen von Karten gegen Spieler, um zu verfolgen, wer welche Karten haben könnte",
            nl: "Kruisreferenties van kaarten tegen spelers om bij te houden wie welke kaarten zou kunnen hebben"
          },
          {
            en: "Drawing a grid of room layouts",
            es: "Dibujar una cuadrícula de diseños de habitaciones",
            de: "Zeichnen eines Gitters von Raumlayouts",
            nl: "Een raster tekenen van kamer indelingen"
          },
          {
            en: "Listing cards alphabetically",
            es: "Listar cartas alfabéticamente",
            de: "Karten alphabetisch auflisten",
            nl: "Kaarten alfabetisch opsommen"
          },
          {
            en: "Counting dice probabilities",
            es: "Contar probabilidades de dados",
            de: "Würfelwahrscheinlichkeiten zählen",
            nl: "Dobbelsteen waarschijnlijkheden tellen"
          }
        ],
        correct: 0,
        explanation: {
          en: "A possibility matrix is a grid showing which cards each player could potentially hold, updated after each suggestion to systematically narrow down possibilities.",
          es: "Una matriz de posibilidades es una cuadrícula que muestra qué cartas podría potencialmente tener cada jugador, actualizada después de cada sugerencia para reducir sistemáticamente las posibilidades.",
          de: "Eine Möglichkeitsmatrix ist ein Gitter, das zeigt, welche Karten jeder Spieler potenziell halten könnte, aktualisiert nach jedem Vorschlag, um Möglichkeiten systematisch einzugrenzen.",
          nl: "Een mogelijkheids matrix is een raster dat laat zien welke kaarten elke speler potentieel zou kunnen hebben, bijgewerkt na elke suggestie om mogelijkheden systematisch te beperken."
        }
      },
      {
        question: {
          en: "What is the 'tempo advantage' in Cluedo?",
          es: "¿Qué es la 'ventaja de tempo' en Cluedo?",
          de: "Was ist der 'Tempovorteil' in Cluedo?",
          nl: "Wat is het 'tempo voordeel' in Cluedo?"
        },
        options: [
          {
            en: "Making efficient suggestions per turn to solve faster than opponents",
            es: "Hacer sugerencias eficientes por turno para resolver más rápido que los oponentes",
            de: "Effiziente Vorschläge pro Zug machen, um schneller als Gegner zu lösen",
            nl: "Efficiënte suggesties per beurt doen om sneller op te lossen dan tegenstanders"
          },
          {
            en: "Rolling higher dice numbers",
            es: "Sacar números de dados más altos",
            de: "Höhere Würfelzahlen würfeln",
            nl: "Hogere dobbelsteen nummers gooien"
          },
          {
            en: "Moving faster around the board",
            es: "Moverse más rápido por el tablero",
            de: "Sich schneller auf dem Brett bewegen",
            nl: "Sneller bewegen over het bord"
          },
          {
            en: "Having more cards than others",
            es: "Tener más cartas que otros",
            de: "Mehr Karten als andere haben",
            nl: "Meer kaarten hebben dan anderen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Tempo advantage refers to maximizing information efficiency per turn - players who extract more information per suggestion cycle solve the game faster.",
          es: "La ventaja de tempo se refiere a maximizar la eficiencia de información por turno: los jugadores que extraen más información por ciclo de sugerencia resuelven el juego más rápido.",
          de: "Tempovorteil bezieht sich auf die Maximierung der Informationseffizienz pro Zug - Spieler, die mehr Informationen pro Vorschlagszyklus extrahieren, lösen das Spiel schneller.",
          nl: "Tempo voordeel verwijst naar het maximaliseren van informatie efficiëntie per beurt - spelers die meer informatie per suggestie cyclus extraheren lossen het spel sneller op."
        }
      },
      {
        question: {
          en: "What is the 'endgame precision' requirement in competitive play?",
          es: "¿Cuál es el requisito de 'precisión de final de juego' en el juego competitivo?",
          de: "Was ist die 'Endspiel-Präzisionsanforderung' im Wettkampfspiel?",
          nl: "Wat is de 'eindspel precisie' vereiste in competitief spel?"
        },
        options: [
          {
            en: "Being 100% certain of the solution before accusing to avoid elimination",
            es: "Estar 100% seguro de la solución antes de acusar para evitar eliminación",
            de: "Zu 100% sicher über die Lösung sein, bevor man anklagt, um Eliminierung zu vermeiden",
            nl: "100% zeker zijn van de oplossing voordat je beschuldigt om eliminatie te voorkomen"
          },
          {
            en: "Guessing with 50% confidence",
            es: "Adivinar con 50% de confianza",
            de: "Mit 50% Zuversicht raten",
            nl: "Gokken met 50% zekerheid"
          },
          {
            en: "Always accusing on first turn",
            es: "Siempre acusar en el primer turno",
            de: "Immer im ersten Zug anklagen",
            nl: "Altijd beschuldigen in de eerste beurt"
          },
          {
            en: "Never making an accusation",
            es: "Nunca hacer una acusación",
            de: "Nie eine Anschuldigung machen",
            nl: "Nooit een beschuldiging maken"
          }
        ],
        correct: 0,
        explanation: {
          en: "In competitive play, you must achieve complete logical certainty before accusing, as a wrong accusation eliminates you from winning - near-certainty is insufficient.",
          es: "En el juego competitivo, debes lograr certeza lógica completa antes de acusar, ya que una acusación incorrecta te elimina de ganar: la casi certeza es insuficiente.",
          de: "Im Wettkampfspiel müssen Sie vor der Anklage vollständige logische Gewissheit erreichen, da eine falsche Anschuldigung Sie vom Sieg ausschließt - Fast-Gewissheit ist unzureichend.",
          nl: "In competitief spel moet je volledige logische zekerheid bereiken voordat je beschuldigt, aangezien een verkeerde beschuldiging je elimineert van winnen - bijna-zekerheid is onvoldoende."
        }
      },
      {
        question: {
          en: "What is the 'information cascade' phenomenon?",
          es: "¿Qué es el fenómeno de 'cascada de información'?",
          de: "Was ist das 'Informationskaskaden'-Phänomen?",
          nl: "Wat is het 'informatie cascade' fenomeen?"
        },
        options: [
          {
            en: "When one deduction triggers multiple logical inferences about other cards",
            es: "Cuando una deducción desencadena múltiples inferencias lógicas sobre otras cartas",
            de: "Wenn eine Deduktion mehrere logische Schlussfolgerungen über andere Karten auslöst",
            nl: "Wanneer één deductie meerdere logische gevolgtrekkingen over andere kaarten activeert"
          },
          {
            en: "When cards fall off the table",
            es: "Cuando las cartas caen de la mesa",
            de: "Wenn Karten vom Tisch fallen",
            nl: "Wanneer kaarten van de tafel vallen"
          },
          {
            en: "When all players guess together",
            es: "Cuando todos los jugadores adivinan juntos",
            de: "Wenn alle Spieler zusammen raten",
            nl: "Wanneer alle spelers samen gokken"
          },
          {
            en: "Sequential room movement",
            es: "Movimiento de habitación secuencial",
            de: "Sequenzielle Raumbewegung",
            nl: "Opeenvolgende kamer beweging"
          }
        ],
        correct: 0,
        explanation: {
          en: "An information cascade occurs when determining one card's location allows you to deduce multiple other cards through logical elimination and constraint propagation.",
          es: "Una cascada de información ocurre cuando determinar la ubicación de una carta te permite deducir múltiples otras cartas a través de eliminación lógica y propagación de restricciones.",
          de: "Eine Informationskaskade tritt auf, wenn die Bestimmung des Standorts einer Karte es ermöglicht, mehrere andere Karten durch logische Eliminierung und Einschränkungspropagierung zu deduzieren.",
          nl: "Een informatie cascade treedt op wanneer het bepalen van de locatie van één kaart je in staat stelt meerdere andere kaarten af te leiden door logische eliminatie en beperking propagatie."
        }
      },
      {
        question: {
          en: "What is the 'position value' of different starting locations?",
          es: "¿Cuál es el 'valor de posición' de diferentes ubicaciones iniciales?",
          de: "Was ist der 'Positionswert' verschiedener Startpositionen?",
          nl: "Wat is de 'positie waarde' van verschillende start locaties?"
        },
        options: [
          {
            en: "Central starting positions provide better access to multiple rooms for suggestions",
            es: "Las posiciones iniciales centrales proporcionan mejor acceso a múltiples habitaciones para sugerencias",
            de: "Zentrale Startpositionen bieten besseren Zugang zu mehreren Räumen für Vorschläge",
            nl: "Centrale start posities bieden betere toegang tot meerdere kamers voor suggesties"
          },
          {
            en: "All starting positions are identical in value",
            es: "Todas las posiciones iniciales son idénticas en valor",
            de: "Alle Startpositionen sind im Wert identisch",
            nl: "Alle start posities zijn identiek in waarde"
          },
          {
            en: "Corner positions are always best",
            es: "Las posiciones de esquina son siempre las mejores",
            de: "Eckpositionen sind immer am besten",
            nl: "Hoek posities zijn altijd het beste"
          },
          {
            en: "Starting position doesn't affect gameplay",
            es: "La posición inicial no afecta el juego",
            de: "Startposition beeinflusst das Gameplay nicht",
            nl: "Start positie beïnvloedt gameplay niet"
          }
        ],
        correct: 0,
        explanation: {
          en: "Characters starting in more central positions (like Miss Scarlett or Colonel Mustard) can access more rooms efficiently, providing a slight advantage in suggestion frequency.",
          es: "Los personajes que comienzan en posiciones más centrales (como Miss Scarlett o Colonel Mustard) pueden acceder a más habitaciones eficientemente, proporcionando una ligera ventaja en frecuencia de sugerencias.",
          de: "Charaktere, die in zentraleren Positionen starten (wie Miss Scarlett oder Colonel Mustard), können effizienter auf mehr Räume zugreifen, was einen leichten Vorteil in der Vorschlagshäufigkeit bietet.",
          nl: "Karakters die in meer centrale posities starten (zoals Miss Scarlett of Colonel Mustard) kunnen efficiënter toegang krijgen tot meer kamers, wat een licht voordeel biedt in suggestie frequentie."
        }
      },
      {
        question: {
          en: "What is the 'refutation analysis' technique?",
          es: "¿Qué es la técnica de 'análisis de refutación'?",
          de: "Was ist die 'Widerlegungsanalyse'-Technik?",
          nl: "Wat is de 'weerlegging analyse' techniek?"
        },
        options: [
          {
            en: "Analyzing which specific card was shown based on player's card selection patterns",
            es: "Analizar qué carta específica se mostró basándose en patrones de selección de cartas del jugador",
            de: "Analysieren, welche spezifische Karte gezeigt wurde, basierend auf Kartenauswahlmustern des Spielers",
            nl: "Analyseren welke specifieke kaart werd getoond op basis van kaart selectie patronen van de speler"
          },
          {
            en: "Refusing to show cards",
            es: "Negarse a mostrar cartas",
            de: "Sich weigern, Karten zu zeigen",
            nl: "Weigeren om kaarten te tonen"
          },
          {
            en: "Only analyzing your own cards",
            es: "Solo analizar tus propias cartas",
            de: "Nur eigene Karten analysieren",
            nl: "Alleen je eigen kaarten analyseren"
          },
          {
            en: "Ignoring what cards are shown",
            es: "Ignorar qué cartas se muestran",
            de: "Ignorieren, welche Karten gezeigt werden",
            nl: "Negeren welke kaarten worden getoond"
          }
        ],
        correct: 0,
        explanation: {
          en: "Expert players track which cards each opponent tends to show when they have multiple options, revealing patterns that help deduce which specific card was shown in each refutation.",
          es: "Los jugadores expertos rastrean qué cartas tiende a mostrar cada oponente cuando tienen múltiples opciones, revelando patrones que ayudan a deducir qué carta específica se mostró en cada refutación.",
          de: "Expertspieler verfolgen, welche Karten jeder Gegner zeigt, wenn er mehrere Optionen hat, und enthüllen Muster, die helfen zu deduzieren, welche spezifische Karte in jeder Widerlegung gezeigt wurde.",
          nl: "Expert spelers houden bij welke kaarten elke tegenstander neigt te tonen wanneer ze meerdere opties hebben, waardoor patronen worden onthuld die helpen af te leiden welke specifieke kaart werd getoond in elke weerlegging."
        }
      },
      {
        question: {
          en: "What is the 'critical path' in solving sequence?",
          es: "¿Qué es el 'camino crítico' en la secuencia de resolución?",
          de: "Was ist der 'kritische Pfad' in der Lösungssequenz?",
          nl: "Wat is het 'kritieke pad' in de oplossings sequentie?"
        },
        options: [
          {
            en: "The minimum sequence of suggestions needed to logically eliminate all but one possibility",
            es: "La secuencia mínima de sugerencias necesarias para eliminar lógicamente todas menos una posibilidad",
            de: "Die minimale Sequenz von Vorschlägen, die benötigt wird, um logisch alle bis auf eine Möglichkeit zu eliminieren",
            nl: "De minimale sequentie van suggesties die nodig is om logisch alle behalve één mogelijkheid te elimineren"
          },
          {
            en: "The fastest route between rooms",
            es: "La ruta más rápida entre habitaciones",
            de: "Die schnellste Route zwischen Räumen",
            nl: "De snelste route tussen kamers"
          },
          {
            en: "The order of players in turns",
            es: "El orden de jugadores en turnos",
            de: "Die Reihenfolge der Spieler in Zügen",
            nl: "De volgorde van spelers in beurten"
          },
          {
            en: "The most common cards",
            es: "Las cartas más comunes",
            de: "Die häufigsten Karten",
            nl: "De meest voorkomende kaarten"
          }
        ],
        correct: 0,
        explanation: {
          en: "The critical path represents the optimal suggestion sequence that provides maximum information gain at each step, allowing you to solve in minimum turns.",
          es: "El camino crítico representa la secuencia de sugerencias óptima que proporciona máxima ganancia de información en cada paso, permitiéndote resolver en turnos mínimos.",
          de: "Der kritische Pfad repräsentiert die optimale Vorschlagssequenz, die bei jedem Schritt maximalen Informationsgewinn bietet und es ermöglicht, in minimalen Zügen zu lösen.",
          nl: "Het kritieke pad vertegenwoordigt de optimale suggestie sequentie die bij elke stap maximale informatie winst biedt, waardoor je in minimale beurten kunt oplossen."
        }
      },
      {
        question: {
          en: "What is the 'secret passage optimization' in advanced movement strategy?",
          es: "¿Qué es la 'optimización de pasaje secreto' en la estrategia de movimiento avanzada?",
          de: "Was ist die 'Geheimgang-Optimierung' in der fortgeschrittenen Bewegungsstrategie?",
          nl: "Wat is de 'geheime doorgang optimalisatie' in geavanceerde bewegings strategie?"
        },
        options: [
          {
            en: "Using secret passages to access opposite corners efficiently and diversify suggestion locations",
            es: "Usar pasajes secretos para acceder a esquinas opuestas eficientemente y diversificar ubicaciones de sugerencias",
            de: "Geheimgänge nutzen, um gegenüberliegende Ecken effizient zu erreichen und Vorschlagsorte zu diversifizieren",
            nl: "Geheime doorgangen gebruiken om tegenovergestelde hoeken efficiënt te bereiken en suggestie locaties te diversifiëren"
          },
          {
            en: "Never using secret passages",
            es: "Nunca usar pasajes secretos",
            de: "Niemals Geheimgänge benutzen",
            nl: "Nooit geheime doorgangen gebruiken"
          },
          {
            en: "Only using normal movement",
            es: "Solo usar movimiento normal",
            de: "Nur normale Bewegung verwenden",
            nl: "Alleen normale beweging gebruiken"
          },
          {
            en: "Secret passages provide no advantage",
            es: "Los pasajes secretos no proporcionan ventaja",
            de: "Geheimgänge bieten keinen Vorteil",
            nl: "Geheime doorgangen bieden geen voordeel"
          }
        ],
        correct: 0,
        explanation: {
          en: "Expert players strategically use secret passages to quickly alternate between corner rooms, maximizing room variety for suggestions while minimizing movement turns.",
          es: "Los jugadores expertos usan estratégicamente pasajes secretos para alternar rápidamente entre habitaciones de esquina, maximizando variedad de habitaciones para sugerencias mientras minimizan turnos de movimiento.",
          de: "Expertspieler nutzen strategisch Geheimgänge, um schnell zwischen Eckräumen zu wechseln, die Raumvielfalt für Vorschläge zu maximieren und gleichzeitig Bewegungszüge zu minimieren.",
          nl: "Expert spelers gebruiken strategisch geheime doorgangen om snel te wisselen tussen hoek kamers, waarbij kamer variëteit voor suggesties wordt gemaximaliseerd terwijl bewegings beurten worden geminimaliseerd."
        }
      },
      {
        question: {
          en: "What is the 'cross-player inference' technique?",
          es: "¿Qué es la técnica de 'inferencia entre jugadores'?",
          de: "Was ist die 'Spielerübergreifende Inferenz'-Technik?",
          nl: "Wat is de 'cross-speler inferentie' techniek?"
        },
        options: [
          {
            en: "Deducing Player A's cards by analyzing what Player B revealed to Player C",
            es: "Deducir cartas del Jugador A analizando lo que el Jugador B reveló al Jugador C",
            de: "Karten von Spieler A durch Analyse dessen deduzieren, was Spieler B Spieler C offenbarte",
            nl: "Kaarten van Speler A afleiden door te analyseren wat Speler B aan Speler C onthulde"
          },
          {
            en: "Only tracking your own cards",
            es: "Solo rastrear tus propias cartas",
            de: "Nur eigene Karten verfolgen",
            nl: "Alleen je eigen kaarten bijhouden"
          },
          {
            en: "Ignoring other players' interactions",
            es: "Ignorar interacciones de otros jugadores",
            de: "Interaktionen anderer Spieler ignorieren",
            nl: "Interacties van andere spelers negeren"
          },
          {
            en: "Never making suggestions",
            es: "Nunca hacer sugerencias",
            de: "Niemals Vorschläge machen",
            nl: "Nooit suggesties doen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Advanced players use transitive logic: if Player B shows Player C a card from a suggestion, you can infer information about what Player A doesn't have through elimination.",
          es: "Los jugadores avanzados usan lógica transitiva: si el Jugador B muestra al Jugador C una carta de una sugerencia, puedes inferir información sobre lo que el Jugador A no tiene a través de eliminación.",
          de: "Fortgeschrittene Spieler verwenden transitive Logik: Wenn Spieler B Spieler C eine Karte aus einem Vorschlag zeigt, können Sie durch Eliminierung Informationen darüber ableiten, was Spieler A nicht hat.",
          nl: "Geavanceerde spelers gebruiken transitieve logica: als Speler B aan Speler C een kaart toont van een suggestie, kun je informatie afleiden over wat Speler A niet heeft door eliminatie."
        }
      },
      {
        question: {
          en: "What is the 'solution verification paradox'?",
          es: "¿Qué es la 'paradoja de verificación de solución'?",
          de: "Was ist das 'Lösungsverifizierungsparadoxon'?",
          nl: "Wat is de 'oplossing verificatie paradox'?"
        },
        options: [
          {
            en: "You must verify the solution through elimination without ever suggesting the actual answer",
            es: "Debes verificar la solución a través de eliminación sin nunca sugerir la respuesta real",
            de: "Sie müssen die Lösung durch Eliminierung verifizieren, ohne jemals die tatsächliche Antwort vorzuschlagen",
            nl: "Je moet de oplossing verifiëren door eliminatie zonder ooit het werkelijke antwoord te suggereren"
          },
          {
            en: "Always suggest the solution first",
            es: "Siempre sugerir la solución primero",
            de: "Immer zuerst die Lösung vorschlagen",
            nl: "Altijd eerst de oplossing suggereren"
          },
          {
            en: "Verification is unnecessary",
            es: "La verificación es innecesaria",
            de: "Verifizierung ist unnötig",
            nl: "Verificatie is onnodig"
          },
          {
            en: "Only verify one card type",
            es: "Solo verificar un tipo de carta",
            de: "Nur einen Kartentyp verifizieren",
            nl: "Alleen één kaart type verifiëren"
          }
        ],
        correct: 0,
        explanation: {
          en: "The paradox is that you must determine the solution by elimination of all other possibilities without ever suggesting the actual solution combination, as that would reveal your knowledge.",
          es: "La paradoja es que debes determinar la solución por eliminación de todas las otras posibilidades sin nunca sugerir la combinación de solución real, ya que eso revelaría tu conocimiento.",
          de: "Das Paradoxon ist, dass Sie die Lösung durch Eliminierung aller anderen Möglichkeiten bestimmen müssen, ohne jemals die tatsächliche Lösungskombination vorzuschlagen, da dies Ihr Wissen offenbaren würde.",
          nl: "De paradox is dat je de oplossing moet bepalen door eliminatie van alle andere mogelijkheden zonder ooit de werkelijke oplossings combinatie te suggereren, aangezien dat je kennis zou onthullen."
        }
      },
      {
        question: {
          en: "What is the 'information bottleneck' in 6-player games?",
          es: "¿Qué es el 'cuello de botella de información' en juegos de 6 jugadores?",
          de: "Was ist der 'Informationsengpass' in 6-Spieler-Spielen?",
          nl: "Wat is het 'informatie knelpunt' in 6-speler spellen?"
        },
        options: [
          {
            en: "Each player has only 3 cards, making early deductions harder with less initial information",
            es: "Cada jugador tiene solo 3 cartas, haciendo deducciones tempranas más difíciles con menos información inicial",
            de: "Jeder Spieler hat nur 3 Karten, was frühe Deduktionen mit weniger anfänglichen Informationen schwieriger macht",
            nl: "Elke speler heeft slechts 3 kaarten, waardoor vroege deducties moeilijker zijn met minder initiële informatie"
          },
          {
            en: "Too many players slows down turns",
            es: "Demasiados jugadores ralentiza los turnos",
            de: "Zu viele Spieler verlangsamen die Züge",
            nl: "Te veel spelers vertraagt beurten"
          },
          {
            en: "The board becomes crowded",
            es: "El tablero se llena de gente",
            de: "Das Brett wird überfüllt",
            nl: "Het bord wordt druk"
          },
          {
            en: "Cards run out too quickly",
            es: "Las cartas se agotan demasiado rápido",
            de: "Karten gehen zu schnell aus",
            nl: "Kaarten raken te snel op"
          }
        ],
        correct: 0,
        explanation: {
          en: "With 18 cards split among 6 players, each has only 3 cards, providing minimal starting information compared to games with fewer players where each holds 4-6 cards.",
          es: "Con 18 cartas divididas entre 6 jugadores, cada uno tiene solo 3 cartas, proporcionando información inicial mínima en comparación con juegos con menos jugadores donde cada uno tiene 4-6 cartas.",
          de: "Mit 18 Karten aufgeteilt auf 6 Spieler hat jeder nur 3 Karten, was minimale Startinformationen im Vergleich zu Spielen mit weniger Spielern bietet, bei denen jeder 4-6 Karten hält.",
          nl: "Met 18 kaarten verdeeld over 6 spelers heeft elk slechts 3 kaarten, wat minimale start informatie biedt vergeleken met spellen met minder spelers waarbij elk 4-6 kaarten heeft."
        }
      },
      {
        question: {
          en: "What is the 'double elimination' logical technique?",
          es: "¿Qué es la técnica lógica de 'doble eliminación'?",
          de: "Was ist die logische Technik der 'Doppeleliminierung'?",
          nl: "Wat is de 'dubbele eliminatie' logische techniek?"
        },
        options: [
          {
            en: "When two players both pass on a suggestion containing a specific card, it must be in the envelope",
            es: "Cuando dos jugadores pasan en una sugerencia que contiene una carta específica, debe estar en el sobre",
            de: "Wenn zwei Spieler beide bei einem Vorschlag mit einer bestimmten Karte passen, muss sie im Umschlag sein",
            nl: "Wanneer twee spelers beide passen op een suggestie met een specifieke kaart, moet deze in de envelop zitten"
          },
          {
            en: "Eliminating two players from the game",
            es: "Eliminar dos jugadores del juego",
            de: "Zwei Spieler aus dem Spiel eliminieren",
            nl: "Twee spelers uit het spel elimineren"
          },
          {
            en: "Making two accusations in a row",
            es: "Hacer dos acusaciones seguidas",
            de: "Zwei Anschuldigungen hintereinander machen",
            nl: "Twee beschuldigingen achter elkaar maken"
          },
          {
            en: "Showing two cards simultaneously",
            es: "Mostrar dos cartas simultáneamente",
            de: "Zwei Karten gleichzeitig zeigen",
            nl: "Twee kaarten tegelijkertijd tonen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Double elimination occurs when analyzing suggestions where multiple players cannot refute - through logical analysis, you can definitively determine which card from the suggestion is in the envelope.",
          es: "La doble eliminación ocurre al analizar sugerencias donde múltiples jugadores no pueden refutar: a través de análisis lógico, puedes determinar definitivamente qué carta de la sugerencia está en el sobre.",
          de: "Doppeleliminierung tritt auf, wenn Vorschläge analysiert werden, bei denen mehrere Spieler nicht widerlegen können - durch logische Analyse können Sie definitiv bestimmen, welche Karte aus dem Vorschlag im Umschlag ist.",
          nl: "Dubbele eliminatie vindt plaats bij het analyseren van suggesties waarbij meerdere spelers niet kunnen weerleggen - door logische analyse kun je definitief bepalen welke kaart van de suggestie in de envelop zit."
        }
      },
      {
        question: {
          en: "What is the 'probabilistic accusation threshold' in competitive play?",
          es: "¿Cuál es el 'umbral de acusación probabilística' en el juego competitivo?",
          de: "Was ist die 'probabilistische Anschuldigungsschwelle' im Wettkampfspiel?",
          nl: "Wat is de 'probabilistische beschuldiging drempel' in competitief spel?"
        },
        options: [
          {
            en: "Never accuse based on probability alone; only with 100% logical certainty",
            es: "Nunca acusar basándose solo en probabilidad; solo con 100% certeza lógica",
            de: "Niemals nur aufgrund von Wahrscheinlichkeit anklagen; nur mit 100% logischer Gewissheit",
            nl: "Nooit beschuldigen alleen op basis van waarschijnlijkheid; alleen met 100% logische zekerheid"
          },
          {
            en: "Accuse when 50% confident",
            es: "Acusar cuando estés 50% confiado",
            de: "Anklagen bei 50% Zuversicht",
            nl: "Beschuldigen bij 50% zekerheid"
          },
          {
            en: "Accuse on the first turn always",
            es: "Acusar siempre en el primer turno",
            de: "Immer im ersten Zug anklagen",
            nl: "Altijd beschuldigen in de eerste beurt"
          },
          {
            en: "Probability is the only factor needed",
            es: "La probabilidad es el único factor necesario",
            de: "Wahrscheinlichkeit ist der einzige benötigte Faktor",
            nl: "Waarschijnlijkheid is de enige benodigde factor"
          }
        ],
        correct: 0,
        explanation: {
          en: "Grandmaster players never make probabilistic accusations - they continue gathering information until achieving complete logical certainty through elimination, as wrong accusations mean elimination.",
          es: "Los jugadores de gran maestro nunca hacen acusaciones probabilísticas: continúan recopilando información hasta lograr certeza lógica completa a través de eliminación, ya que acusaciones incorrectas significan eliminación.",
          de: "Großmeisterspieler machen niemals probabilistische Anschuldigungen - sie sammeln weiter Informationen, bis sie durch Eliminierung vollständige logische Gewissheit erreichen, da falsche Anschuldigungen Eliminierung bedeuten.",
          nl: "Grootmeester spelers maken nooit probabilistische beschuldigingen - ze blijven informatie verzamelen tot ze volledige logische zekerheid bereiken door eliminatie, aangezien verkeerde beschuldigingen eliminatie betekenen."
        }
      },
      {
        question: {
          en: "What is the 'late-game acceleration' phenomenon?",
          es: "¿Qué es el fenómeno de 'aceleración de final de juego'?",
          de: "Was ist das 'Endspiel-Beschleunigungs'-Phänomen?",
          nl: "Wat is het 'laat-spel versnelling' fenomeen?"
        },
        options: [
          {
            en: "As more information accumulates, each suggestion provides exponentially more deductive value",
            es: "A medida que se acumula más información, cada sugerencia proporciona exponencialmente más valor deductivo",
            de: "Wenn sich mehr Informationen ansammeln, liefert jeder Vorschlag exponentiell mehr deduktiven Wert",
            nl: "Naarmate meer informatie zich ophoopt, levert elke suggestie exponentieel meer deductieve waarde"
          },
          {
            en: "Players move faster in late game",
            es: "Los jugadores se mueven más rápido en el final del juego",
            de: "Spieler bewegen sich im Endspiel schneller",
            nl: "Spelers bewegen sneller in het laat spel"
          },
          {
            en: "Dice rolls increase in value",
            es: "Las tiradas de dados aumentan en valor",
            de: "Würfelwürfe steigen im Wert",
            nl: "Dobbelsteen worpen nemen toe in waarde"
          },
          {
            en: "More cards are dealt late game",
            es: "Se reparten más cartas al final del juego",
            de: "Im Endspiel werden mehr Karten ausgeteilt",
            nl: "Meer kaarten worden gedeeld in het laat spel"
          }
        ],
        correct: 0,
        explanation: {
          en: "Late-game acceleration occurs because accumulated information creates logical constraints that allow each new piece of information to eliminate multiple possibilities simultaneously.",
          es: "La aceleración del final del juego ocurre porque la información acumulada crea restricciones lógicas que permiten que cada nueva pieza de información elimine múltiples posibilidades simultáneamente.",
          de: "Endspiel-Beschleunigung tritt auf, weil angesammelte Informationen logische Einschränkungen schaffen, die es ermöglichen, dass jedes neue Informationsstück mehrere Möglichkeiten gleichzeitig eliminiert.",
          nl: "Laat-spel versnelling treedt op omdat opgehoopte informatie logische beperkingen creëert die het mogelijk maken dat elk nieuw stukje informatie meerdere mogelijkheden tegelijkertijd elimineert."
        }
      },
      {
        question: {
          en: "What is the 'strategic misdirection timing' in expert play?",
          es: "¿Cuál es el 'tiempo de misdirección estratégica' en el juego experto?",
          de: "Was ist das 'strategische Fehlleitungs-Timing' im Expertspiel?",
          nl: "Wat is de 'strategische misleiding timing' in expert spel?"
        },
        options: [
          {
            en: "Misdirect when you're ahead but before opponents realize you've solved it",
            es: "Misdireccionar cuando estás adelante pero antes de que los oponentes se den cuenta de que lo has resuelto",
            de: "Irreführen, wenn Sie vorne liegen, aber bevor Gegner merken, dass Sie es gelöst haben",
            nl: "Misleiden wanneer je voorloopt maar voordat tegenstanders beseffen dat je het hebt opgelost"
          },
          {
            en: "Never use misdirection",
            es: "Nunca usar misdirección",
            de: "Niemals Irreführung verwenden",
            nl: "Nooit misleiding gebruiken"
          },
          {
            en: "Only misdirect on the first turn",
            es: "Solo misdireccionar en el primer turno",
            de: "Nur im ersten Zug irreführen",
            nl: "Alleen misleiden in de eerste beurt"
          },
          {
            en: "Misdirect randomly throughout",
            es: "Misdireccionar aleatoriamente todo el tiempo",
            de: "Zufällig durchgehend irreführen",
            nl: "Willekeurig doorheen misleiden"
          }
        ],
        correct: 0,
        explanation: {
          en: "Expert timing for false suggestions is critical: misdirect after solving but before positioning for accusation, delaying opponents while you move to the solution room.",
          es: "El tiempo experto para sugerencias falsas es crítico: misdirecciona después de resolver pero antes de posicionarte para la acusación, retrasando a los oponentes mientras te mueves a la habitación de solución.",
          de: "Experten-Timing für falsche Vorschläge ist kritisch: Irreführen nach dem Lösen, aber vor der Positionierung für die Anschuldigung, Verzögerung der Gegner, während Sie sich zum Lösungsraum bewegen.",
          nl: "Expert timing voor valse suggesties is kritiek: misleid na het oplossen maar voor het positioneren voor beschuldiging, waarbij tegenstanders worden vertraagd terwijl je naar de oplossings kamer beweegt."
        }
      },
      {
        question: {
          en: "What is the 'constraint satisfaction' approach to solving?",
          es: "¿Cuál es el enfoque de 'satisfacción de restricciones' para resolver?",
          de: "Was ist der 'Constraint-Satisfaction'-Ansatz zum Lösen?",
          nl: "Wat is de 'beperking tevredenheid' benadering voor oplossen?"
        },
        options: [
          {
            en: "Treating the game as a logical constraint problem where each observation adds constraints",
            es: "Tratar el juego como un problema de restricción lógica donde cada observación añade restricciones",
            de: "Das Spiel als logisches Einschränkungsproblem behandeln, bei dem jede Beobachtung Einschränkungen hinzufügt",
            nl: "Het spel behandelen als een logisch beperkings probleem waarbij elke observatie beperkingen toevoegt"
          },
          {
            en: "Satisfying other players' requests",
            es: "Satisfacer solicitudes de otros jugadores",
            de: "Anfragen anderer Spieler erfüllen",
            nl: "Verzoeken van andere spelers tevreden stellen"
          },
          {
            en: "Being satisfied with partial solutions",
            es: "Estar satisfecho con soluciones parciales",
            de: "Mit Teillösungen zufrieden sein",
            nl: "Tevreden zijn met gedeeltelijke oplossingen"
          },
          {
            en: "Avoiding logical deduction",
            es: "Evitar deducción lógica",
            de: "Logische Deduktion vermeiden",
            nl: "Logische deductie vermijden"
          }
        ],
        correct: 0,
        explanation: {
          en: "Grandmaster players view Cluedo as a constraint satisfaction problem where each refutation, non-refutation, and card shown adds logical constraints that progressively narrow the solution space.",
          es: "Los jugadores de gran maestro ven Cluedo como un problema de satisfacción de restricciones donde cada refutación, no refutación y carta mostrada añade restricciones lógicas que progresivamente estrechan el espacio de solución.",
          de: "Großmeisterspieler betrachten Cluedo als Constraint-Satisfaction-Problem, bei dem jede Widerlegung, Nicht-Widerlegung und gezeigte Karte logische Einschränkungen hinzufügt, die den Lösungsraum progressiv eingrenzen.",
          nl: "Grootmeester spelers zien Cluedo als een beperking tevredenheids probleem waarbij elke weerlegging, niet-weerlegging en getoonde kaart logische beperkingen toevoegt die progressief de oplossings ruimte verkleinen."
        }
      },
      {
        question: {
          en: "What is the 'information asymmetry exploitation' strategy?",
          es: "¿Cuál es la estrategia de 'explotación de asimetría de información'?",
          de: "Was ist die 'Informationsasymmetrie-Ausbeutungsstrategie'?",
          nl: "Wat is de 'informatie asymmetrie exploitatie' strategie?"
        },
        options: [
          {
            en: "Leveraging what you know that opponents don't know you know",
            es: "Aprovechar lo que sabes que los oponentes no saben que sabes",
            de: "Nutzen dessen, was Sie wissen, von dem Gegner nicht wissen, dass Sie es wissen",
            nl: "Gebruikmaken van wat je weet dat tegenstanders niet weten dat je weet"
          },
          {
            en: "Sharing all information equally",
            es: "Compartir toda la información por igual",
            de: "Alle Informationen gleichmäßig teilen",
            nl: "Alle informatie gelijk delen"
          },
          {
            en: "Avoiding information gathering",
            es: "Evitar recopilación de información",
            de: "Informationsbeschaffung vermeiden",
            nl: "Informatie verzamelen vermijden"
          },
          {
            en: "Only using public information",
            es: "Solo usar información pública",
            de: "Nur öffentliche Informationen verwenden",
            nl: "Alleen publieke informatie gebruiken"
          }
        ],
        correct: 0,
        explanation: {
          en: "Advanced players exploit the gap between what they've deduced privately and what opponents think they know, using this information asymmetry to make unpredictable but optimal moves.",
          es: "Los jugadores avanzados explotan la brecha entre lo que han deducido privadamente y lo que los oponentes piensan que saben, usando esta asimetría de información para hacer movimientos impredecibles pero óptimos.",
          de: "Fortgeschrittene Spieler nutzen die Lücke zwischen dem, was sie privat deduziert haben, und dem, was Gegner denken, dass sie wissen, und verwenden diese Informationsasymmetrie für unvorhersehbare, aber optimale Züge.",
          nl: "Geavanceerde spelers exploiteren de kloof tussen wat ze privé hebben afgeleid en wat tegenstanders denken dat ze weten, waarbij deze informatie asymmetrie wordt gebruikt om onvoorspelbare maar optimale zetten te doen."
        }
      },
      {
        question: {
          en: "What is the theoretical minimum number of turns to solve with perfect information?",
          es: "¿Cuál es el número teórico mínimo de turnos para resolver con información perfecta?",
          de: "Was ist die theoretische Mindestanzahl von Zügen zum Lösen mit perfekter Information?",
          nl: "Wat is het theoretisch minimum aantal beurten om op te lossen met perfecte informatie?"
        },
        options: [
          {
            en: "3 turns with optimal questioning strategy (one per category)",
            es: "3 turnos con estrategia de cuestionamiento óptima (uno por categoría)",
            de: "3 Züge mit optimaler Fragestrategie (einer pro Kategorie)",
            nl: "3 beurten met optimale vraag strategie (één per categorie)"
          },
          {
            en: "Always 10 turns minimum",
            es: "Siempre 10 turnos mínimo",
            de: "Immer mindestens 10 Züge",
            nl: "Altijd minimaal 10 beurten"
          },
          {
            en: "One turn is sufficient",
            es: "Un turno es suficiente",
            de: "Ein Zug reicht aus",
            nl: "Eén beurt is voldoende"
          },
          {
            en: "Twenty turns required",
            es: "Se requieren veinte turnos",
            de: "Zwanzig Züge erforderlich",
            nl: "Twintig beurten vereist"
          }
        ],
        correct: 0,
        explanation: {
          en: "Theoretically, with perfect information distribution and responses, you could solve in 3 turns by definitively identifying one card from each category (person, weapon, room) through elimination.",
          es: "Teóricamente, con distribución y respuestas de información perfecta, podrías resolver en 3 turnos identificando definitivamente una carta de cada categoría (persona, arma, habitación) a través de eliminación.",
          de: "Theoretisch könnten Sie mit perfekter Informationsverteilung und Antworten in 3 Zügen lösen, indem Sie definitiv eine Karte aus jeder Kategorie (Person, Waffe, Raum) durch Eliminierung identifizieren.",
          nl: "Theoretisch zou je met perfecte informatie distributie en reacties in 3 beurten kunnen oplossen door definitief één kaart uit elke categorie (persoon, wapen, kamer) te identificeren door eliminatie."
        }
      },
      {
        question: {
          en: "What is the 'endgame positioning paradox'?",
          es: "¿Qué es la 'paradoja de posicionamiento de final de juego'?",
          de: "Was ist das 'Endspiel-Positionierungsparadoxon'?",
          nl: "Wat is de 'eindspel positionering paradox'?"
        },
        options: [
          {
            en: "Solving the mystery before reaching the solution room creates a timing dilemma",
            es: "Resolver el misterio antes de llegar a la habitación de solución crea un dilema de tiempo",
            de: "Das Rätsel zu lösen, bevor man den Lösungsraum erreicht, schafft ein Timing-Dilemma",
            nl: "Het mysterie oplossen voor het bereiken van de oplossings kamer creëert een timing dilemma"
          },
          {
            en: "Position on board doesn't matter",
            es: "La posición en el tablero no importa",
            de: "Position auf dem Brett spielt keine Rolle",
            nl: "Positie op het bord maakt niet uit"
          },
          {
            en: "Always stay in starting position",
            es: "Siempre permanecer en posición inicial",
            de: "Immer in Startposition bleiben",
            nl: "Altijd in start positie blijven"
          },
          {
            en: "Movement is irrelevant to solving",
            es: "El movimiento es irrelevante para resolver",
            de: "Bewegung ist irrelevant zum Lösen",
            nl: "Beweging is irrelevant voor oplossen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Expert players face the paradox of often deducing the solution while far from the correct room, requiring strategic movement planning and sometimes delaying the accusation for optimal positioning.",
          es: "Los jugadores expertos enfrentan la paradoja de a menudo deducir la solución mientras están lejos de la habitación correcta, requiriendo planificación estratégica de movimiento y a veces retrasando la acusación para posicionamiento óptimo.",
          de: "Expertspieler stehen vor dem Paradoxon, oft die Lösung zu deduzieren, während sie weit vom richtigen Raum entfernt sind, was strategische Bewegungsplanung erfordert und manchmal das Verzögern der Anschuldigung für optimale Positionierung.",
          nl: "Expert spelers worden geconfronteerd met de paradox van vaak de oplossing afleiden terwijl ze ver van de juiste kamer zijn, wat strategische bewegings planning vereist en soms het uitstellen van de beschuldiging voor optimale positionering."
        }
      },
      {
        question: {
          en: "What defines grandmaster-level Cluedo play?",
          es: "¿Qué define el juego de Cluedo de nivel gran maestro?",
          de: "Was definiert Cluedo-Spiel auf Großmeisterniveau?",
          nl: "Wat definieert grootmeester-niveau Cluedo spel?"
        },
        options: [
          {
            en: "Integrating mathematical optimization, game theory, opponent modeling, and perfect logical deduction",
            es: "Integrar optimización matemática, teoría de juegos, modelado de oponentes y deducción lógica perfecta",
            de: "Integration von mathematischer Optimierung, Spieltheorie, Gegnermodellierung und perfekter logischer Deduktion",
            nl: "Integratie van wiskundige optimalisatie, spel theorie, tegenstander modellering en perfecte logische deductie"
          },
          {
            en: "Making lucky guesses",
            es: "Hacer conjeturas afortunadas",
            de: "Glückliche Vermutungen machen",
            nl: "Gelukkige gokken maken"
          },
          {
            en: "Playing many games",
            es: "Jugar muchos juegos",
            de: "Viele Spiele spielen",
            nl: "Veel spellen spelen"
          },
          {
            en: "Memorizing all cards",
            es: "Memorizar todas las cartas",
            de: "Alle Karten auswendig lernen",
            nl: "Alle kaarten memoriseren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Grandmaster play synthesizes mathematical information theory, Bayesian probability, game-theoretic strategy, psychological opponent modeling, and flawless logical reasoning to achieve optimal performance.",
          es: "El juego de gran maestro sintetiza teoría matemática de información, probabilidad bayesiana, estrategia de teoría de juegos, modelado psicológico de oponentes y razonamiento lógico impecable para lograr rendimiento óptimo.",
          de: "Großmeisterspiel synthetisiert mathematische Informationstheorie, Bayes'sche Wahrscheinlichkeit, spieltheoretische Strategie, psychologische Gegnermodellierung und makelloses logisches Denken für optimale Leistung.",
          nl: "Grootmeester spel synthetiseert wiskundige informatie theorie, Bayesiaanse waarschijnlijkheid, speltheoretische strategie, psychologische tegenstander modellering en foutloze logische redenering om optimale prestaties te bereiken."
        }
      }
,
        {
          question: {
            en: "What is Bayesian card probability?",
            es: "What is Bayesian card probability?",
            de: "What is Bayesian card probability?",
            nl: "What is Bayesian card probability?"
          },
          options: [
            {
              en: "Updating probability of each card being in solution as information is revealed",
              es: "Updating probability of each card being in solution as information is revealed",
              de: "Updating probability of each card being in solution as information is revealed",
              nl: "Updating probability of each card being in solution as information is revealed"
            },
            {
              en: "Bayes theorem application",
              es: "Bayes theorem application",
              de: "Bayes theorem application",
              nl: "Bayes theorem application"
            },
            {
              en: "Random probability",
              es: "Random probability",
              de: "Random probability",
              nl: "Random probability"
            },
            {
              en: "Guessing odds",
              es: "Guessing odds",
              de: "Guessing odds",
              nl: "Guessing odds"
            }
          ],
          correct: 0,
          explanation: {
            en: "Expert players continuously calculate updated probabilities for each possible solution combination based on all revealed information.",
            es: "Expert players continuously calculate updated probabilities for each possible solution combination based on all revealed information.",
            de: "Expert players continuously calculate updated probabilities for each possible solution combination based on all revealed information.",
            nl: "Expert players continuously calculate updated probabilities for each possible solution combination based on all revealed information."
          }
        },
        {
          question: {
            en: "What is meta-game deduction?",
            es: "What is meta-game deduction?",
            de: "What is meta-game deduction?",
            nl: "What is meta-game deduction?"
          },
          options: [
            {
              en: "Using knowledge of opponent skill levels to predict their card holdings",
              es: "Using knowledge of opponent skill levels to predict their card holdings",
              de: "Using knowledge of opponent skill levels to predict their card holdings",
              nl: "Using knowledge of opponent skill levels to predict their card holdings"
            },
            {
              en: "Playing above the game",
              es: "Playing above the game",
              de: "Playing above the game",
              nl: "Playing above the game"
            },
            {
              en: "Game theory",
              es: "Game theory",
              de: "Game theory",
              nl: "Game theory"
            },
            {
              en: "Mind reading",
              es: "Mind reading",
              de: "Mind reading",
              nl: "Mind reading"
            }
          ],
          correct: 0,
          explanation: {
            en: "Experienced players adjust strategy based on whether opponents are likely to show optimal cards when they have choices.",
            es: "Experienced players adjust strategy based on whether opponents are likely to show optimal cards when they have choices.",
            de: "Experienced players adjust strategy based on whether opponents are likely to show optimal cards when they have choices.",
            nl: "Experienced players adjust strategy based on whether opponents are likely to show optimal cards when they have choices."
          }
        },
        {
          question: {
            en: "What is perfect information endgame?",
            es: "What is perfect information endgame?",
            de: "What is perfect information endgame?",
            nl: "What is perfect information endgame?"
          },
          options: [
            {
              en: "State where you have deduced entire solution through pure logic",
              es: "State where you have deduced entire solution through pure logic",
              de: "State where you have deduced entire solution through pure logic",
              nl: "State where you have deduced entire solution through pure logic"
            },
            {
              en: "Knowing everything",
              es: "Knowing everything",
              de: "Knowing everything",
              nl: "Knowing everything"
            },
            {
              en: "Seeing all cards",
              es: "Seeing all cards",
              de: "Seeing all cards",
              nl: "Seeing all cards"
            },
            {
              en: "Cheating",
              es: "Cheating",
              de: "Cheating",
              nl: "Cheating"
            }
          ],
          correct: 0,
          explanation: {
            en: "Perfect deduction means logically eliminating all but one possibility in each category without making accusations.",
            es: "Perfect deduction means logically eliminating all but one possibility in each category without making accusations.",
            de: "Perfect deduction means logically eliminating all but one possibility in each category without making accusations.",
            nl: "Perfect deduction means logically eliminating all but one possibility in each category without making accusations."
          }
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
