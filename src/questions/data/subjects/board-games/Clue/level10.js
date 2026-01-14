// Quiz Template - Level 10: Bord spelletjes - Clue
(function() {
  const level10 = {
    name: {
      en: "Cluedo - Ultimate",
      es: "Cluedo - Definitivo",
      de: "Cluedo - Ultimativ",
      nl: "Cluedo - Ultiem"
    },
    questions: [
      {
        question: {
          en: "What defines ultimate mastery in Cluedo?",
          es: "¿Qué define la maestría definitiva en Cluedo?",
          de: "Was definiert ultimative Meisterschaft in Cluedo?",
          nl: "Wat definieert ultieme meesterschap in Cluedo?"
        },
        options: [
          {
            en: "Perfect integration of deduction, probability, psychology, and game theory",
            es: "Integración perfecta de deducción, probabilidad, psicología y teoría de juegos",
            de: "Perfekte Integration von Deduktion, Wahrscheinlichkeit, Psychologie und Spieltheorie",
            nl: "Perfecte integratie van deductie, waarschijnlijkheid, psychologie en speltheorie"
          },
          {
            en: "Winning most games",
            es: "Ganar la mayoría de juegos",
            de: "Die meisten Spiele gewinnen",
            nl: "De meeste spellen winnen"
          },
          {
            en: "Fast solving",
            es: "Resolución rápida",
            de: "Schnelles Lösen",
            nl: "Snel oplossen"
          },
          {
            en: "Memorizing all cards",
            es: "Memorizar todas las cartas",
            de: "Alle Karten auswendig lernen",
            nl: "Alle kaarten onthouden"
          }
        ],
        correct: 0,
        explanation: {
          en: "Ultimate Cluedo mastery combines logical deduction, Bayesian probability, opponent psychology, information theory, and game-theoretic optimization into a seamless strategic framework that adapts to any opponent and situation.",
          es: "La maestría definitiva de Cluedo combina deducción lógica, probabilidad bayesiana, psicología del oponente, teoría de la información y optimización de teoría de juegos en un marco estratégico perfecto que se adapta a cualquier oponente y situación.",
          de: "Ultimative Cluedo-Meisterschaft kombiniert logische Deduktion, Bayesianische Wahrscheinlichkeit, Gegnerpsychologie, Informationstheorie und spieltheoretische Optimierung zu einem nahtlosen strategischen Rahmen.",
          nl: "Ultieme Cluedo-meesterschap combineert logische deductie, Bayesiaanse waarschijnlijkheid, tegenstanderpsychologie, informatietheorie en speltheoretische optimalisatie tot een naadloos strategisch raamwerk."
        }
      },
      {
        question: {
          en: "In the original 1949 Cluedo patent, what mathematical principle did Anthony Pratt use to determine the optimal number of cards?",
          es: "En la patente original de Cluedo de 1949, ¿qué principio matemático usó Anthony Pratt para determinar el número óptimo de cartas?",
          de: "Welches mathematische Prinzip nutzte Anthony Pratt im ursprünglichen Cluedo-Patent von 1949 zur Bestimmung der optimalen Kartenzahl?",
          nl: "Welk wiskundig principe gebruikte Anthony Pratt in het oorspronkelijke Cluedo-patent van 1949 om het optimale aantal kaarten te bepalen?"
        },
        options: [
          {
            en: "Combinatorial game theory balancing deduction complexity with play time",
            es: "Teoría de juegos combinatoria equilibrando complejidad de deducción con tiempo de juego",
            de: "Kombinatorische Spieltheorie zur Balance von Deduktionskomplexität und Spielzeit",
            nl: "Combinatorische speltheorie die deductiecomplexiteit balanceert met speeltijd"
          },
          {
            en: "Random selection",
            es: "Selección aleatoria",
            de: "Zufällige Auswahl",
            nl: "Willekeurige selectie"
          },
          {
            en: "Market research surveys",
            es: "Encuestas de investigación de mercado",
            de: "Marktforschungsumfragen",
            nl: "Marktonderzoek enquêtes"
          },
          {
            en: "Standard deck of cards",
            es: "Baraja estándar de cartas",
            de: "Standardkartendeck",
            nl: "Standaard kaartspel"
          }
        ],
        correct: 0,
        explanation: {
          en: "Pratt carefully calculated that 21 cards (6 suspects, 6 weapons, 9 rooms) created the optimal balance between game complexity and solvability, ensuring enough information exchange while preventing games from being too short or impossibly long.",
          es: "Pratt calculó cuidadosamente que 21 cartas (6 sospechosos, 6 armas, 9 habitaciones) creaban el equilibrio óptimo entre complejidad del juego y resolubilidad, asegurando suficiente intercambio de información mientras evitaba juegos demasiado cortos o imposiblemente largos.",
          de: "Pratt berechnete sorgfältig, dass 21 Karten (6 Verdächtige, 6 Waffen, 9 Räume) die optimale Balance zwischen Spielkomplexität und Lösbarkeit schaffen und ausreichenden Informationsaustausch gewährleisten, während zu kurze oder unmöglich lange Spiele vermieden werden.",
          nl: "Pratt berekende zorgvuldig dat 21 kaarten (6 verdachten, 6 wapens, 9 kamers) de optimale balans creëerden tussen spelcomplexiteit en oplosbaarheid, waardoor voldoende informatie-uitwisseling werd gegarandeerd terwijl te korte of onmogelijk lange spellen werden voorkomen."
        }
      },
      {
        question: {
          en: "What advanced probability technique should expert players use when an opponent shows a card from a three-card suggestion?",
          es: "¿Qué técnica avanzada de probabilidad deben usar los jugadores expertos cuando un oponente muestra una carta de una sugerencia de tres cartas?",
          de: "Welche fortgeschrittene Wahrscheinlichkeitstechnik sollten Expertenspieler verwenden, wenn ein Gegner eine Karte aus einem Drei-Karten-Vorschlag zeigt?",
          nl: "Welke geavanceerde waarschijnlijkheidstechniek moeten expertspelers gebruiken wanneer een tegenstander een kaart toont uit een driekaarten-suggestie?"
        },
        options: [
          {
            en: "Bayesian updating to recalculate probabilities for all three suggested cards",
            es: "Actualización bayesiana para recalcular probabilidades de las tres cartas sugeridas",
            de: "Bayesianische Aktualisierung zur Neuberechnung der Wahrscheinlichkeiten aller drei vorgeschlagenen Karten",
            nl: "Bayesiaanse update om waarschijnlijkheden voor alle drie voorgestelde kaarten opnieuw te berekenen"
          },
          {
            en: "Ignore the information",
            es: "Ignorar la información",
            de: "Die Information ignorieren",
            nl: "De informatie negeren"
          },
          {
            en: "Mark only the shown card",
            es: "Marcar solo la carta mostrada",
            de: "Nur die gezeigte Karte markieren",
            nl: "Alleen de getoonde kaart markeren"
          },
          {
            en: "Eliminate all three cards",
            es: "Eliminar las tres cartas",
            de: "Alle drei Karten eliminieren",
            nl: "Alle drie kaarten elimineren"
          }
        ],
        correct: 0,
        explanation: {
          en: "When shown one card from a suggestion, expert players update their probability distributions for all three cards using Bayes' theorem, accounting for which cards the opponent could have shown and chose not to, dramatically improving deduction accuracy.",
          es: "Cuando se muestra una carta de una sugerencia, los jugadores expertos actualizan sus distribuciones de probabilidad para las tres cartas usando el teorema de Bayes, teniendo en cuenta qué cartas el oponente podría haber mostrado y eligió no hacerlo, mejorando dramáticamente la precisión de deducción.",
          de: "Wenn eine Karte aus einem Vorschlag gezeigt wird, aktualisieren Expertenspieler ihre Wahrscheinlichkeitsverteilungen für alle drei Karten mit dem Bayes-Theorem, berücksichtigen welche Karten der Gegner hätte zeigen können aber nicht tat, was die Deduktionsgenauigkeit dramatisch verbessert.",
          nl: "Wanneer één kaart uit een suggestie wordt getoond, updaten expertspelers hun waarschijnlijkheidsverdelingen voor alle drie kaarten met behulp van de stelling van Bayes, rekening houdend met welke kaarten de tegenstander had kunnen tonen maar niet deed, wat de deductie-nauwkeurigheid dramatisch verbetert."
        }
      },
      {
        question: {
          en: "What is the optimal strategy when you have narrowed down two categories to single cards but the third has three possibilities?",
          es: "¿Cuál es la estrategia óptima cuando has reducido dos categorías a cartas individuales pero la tercera tiene tres posibilidades?",
          de: "Was ist die optimale Strategie, wenn Sie zwei Kategorien auf einzelne Karten eingegrenzt haben, aber die dritte drei Möglichkeiten hat?",
          nl: "Wat is de optimale strategie wanneer je twee categorieën hebt teruggebracht tot enkele kaarten maar de derde drie mogelijkheden heeft?"
        },
        options: [
          {
            en: "Use information theory to maximize entropy reduction through strategic suggestions",
            es: "Usar teoría de la información para maximizar la reducción de entropía mediante sugerencias estratégicas",
            de: "Informationstheorie nutzen, um Entropiereduktion durch strategische Vorschläge zu maximieren",
            nl: "Informatietheorie gebruiken om entropievermindering te maximaliseren via strategische suggesties"
          },
          {
            en: "Make a final accusation immediately",
            es: "Hacer una acusación final inmediatamente",
            de: "Sofort eine endgültige Anklage erheben",
            nl: "Onmiddellijk een definitieve beschuldiging maken"
          },
          {
            en: "Test all three possibilities randomly",
            es: "Probar las tres posibilidades al azar",
            de: "Alle drei Möglichkeiten zufällig testen",
            nl: "Alle drie mogelijkheden willekeurig testen"
          },
          {
            en: "Wait for other players to reveal information",
            es: "Esperar que otros jugadores revelen información",
            de: "Warten, bis andere Spieler Informationen preisgeben",
            nl: "Wachten tot andere spelers informatie onthullen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Advanced players use information-theoretic principles to craft suggestions that maximize expected information gain, systematically testing combinations that will eliminate the most uncertainty regardless of which card is shown, while minimizing information leaked to opponents.",
          es: "Los jugadores avanzados usan principios de teoría de la información para elaborar sugerencias que maximicen la ganancia de información esperada, probando sistemáticamente combinaciones que eliminarán la mayor incertidumbre independientemente de qué carta se muestre, mientras minimizan la información filtrada a los oponentes.",
          de: "Fortgeschrittene Spieler nutzen informationstheoretische Prinzipien, um Vorschläge zu entwickeln, die den erwarteten Informationsgewinn maximieren, systematisch Kombinationen testen, die die meiste Unsicherheit eliminieren, unabhängig davon welche Karte gezeigt wird, während durchgesickerte Informationen an Gegner minimiert werden.",
          nl: "Geavanceerde spelers gebruiken informatietheorietische principes om suggesties te creëren die de verwachte informatiewinst maximaliseren, systematisch combinaties testen die de meeste onzekerheid elimineren ongeacht welke kaart wordt getoond, terwijl gelekte informatie naar tegenstanders wordt geminimaliseerd."
        }
      },
      {
        question: {
          en: "How should expert players exploit the psychological phenomenon of 'card showing bias'?",
          es: "¿Cómo deben los jugadores expertos explotar el fenómeno psicológico del 'sesgo de mostrar cartas'?",
          de: "Wie sollten Expertenspieler das psychologische Phänomen der 'Kartenzeigeneigung' ausnutzen?",
          nl: "Hoe moeten expertspelers het psychologische fenomeen van 'kaarttonersvooroordeel' exploiteren?"
        },
        options: [
          {
            en: "Track patterns in which cards opponents choose to show when they have multiple options",
            es: "Rastrear patrones en qué cartas eligen mostrar los oponentes cuando tienen múltiples opciones",
            de: "Muster verfolgen, welche Karten Gegner zeigen, wenn sie mehrere Optionen haben",
            nl: "Patronen volgen in welke kaarten tegenstanders tonen wanneer ze meerdere opties hebben"
          },
          {
            en: "Always show the first card in your hand",
            es: "Mostrar siempre la primera carta en tu mano",
            de: "Immer die erste Karte in der Hand zeigen",
            nl: "Altijd de eerste kaart in je hand tonen"
          },
          {
            en: "Show random cards",
            es: "Mostrar cartas al azar",
            de: "Zufällige Karten zeigen",
            nl: "Willekeurige kaarten tonen"
          },
          {
            en: "Never track opponent behavior",
            es: "Nunca rastrear el comportamiento del oponente",
            de: "Niemals Gegnerverhalt verfolgen",
            nl: "Nooit tegenstandersgedrag volgen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Most players unconsciously develop patterns when choosing which card to reveal from multiple options - some prefer suspects, others weapons, some show the same card repeatedly. Expert players track these tendencies to gain additional information about which cards opponents likely hold.",
          es: "La mayoría de jugadores desarrollan inconscientemente patrones al elegir qué carta revelar de múltiples opciones - algunos prefieren sospechosos, otros armas, algunos muestran la misma carta repetidamente. Los jugadores expertos rastrean estas tendencias para obtener información adicional sobre qué cartas probablemente tienen los oponentes.",
          de: "Die meisten Spieler entwickeln unbewusst Muster beim Wählen welche Karte aus mehreren Optionen offenbart wird - einige bevorzugen Verdächtige, andere Waffen, manche zeigen dieselbe Karte wiederholt. Expertenspieler verfolgen diese Tendenzen, um zusätzliche Informationen darüber zu erhalten, welche Karten Gegner wahrscheinlich halten.",
          nl: "De meeste spelers ontwikkelen onbewust patronen bij het kiezen welke kaart te onthullen uit meerdere opties - sommigen geven de voorkeur aan verdachten, anderen aan wapens, sommigen tonen herhaaldelijk dezelfde kaart. Expertspelers volgen deze tendensen om extra informatie te verkrijgen over welke kaarten tegenstanders waarschijnlijk hebben."
        }
      },
      {
        question: {
          en: "What is the 'Cluedo Dilemma' in tournament play?",
          es: "¿Qué es el 'Dilema de Cluedo' en el juego de torneo?",
          de: "Was ist das 'Cluedo-Dilemma' im Turnierspiel?",
          nl: "Wat is het 'Cluedo-dilemma' in toernooispel?"
        },
        options: [
          {
            en: "The game-theoretic tension between making accusations to win and avoiding elimination",
            es: "La tensión de teoría de juegos entre hacer acusaciones para ganar y evitar la eliminación",
            de: "Die spieltheoretische Spannung zwischen Anklagen zur Gewinn und Vermeidung von Eliminierung",
            nl: "De speltheoretische spanning tussen beschuldigingen maken om te winnen en eliminatie vermijden"
          },
          {
            en: "Choosing which suspect to play",
            es: "Elegir qué sospechoso jugar",
            de: "Wählen welchen Verdächtigen zu spielen",
            nl: "Kiezen welke verdachte te spelen"
          },
          {
            en: "Deciding room movement",
            es: "Decidir movimiento de habitación",
            de: "Raumbewegung entscheiden",
            nl: "Kamerbeweging bepalen"
          },
          {
            en: "Card distribution fairness",
            es: "Equidad de distribución de cartas",
            de: "Kartenausteilungsgerechtigkeit",
            nl: "Kaartdistributie eerlijkheid"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Cluedo Dilemma refers to the critical decision point where players must balance the probability they're correct against the risk of elimination. Making an accusation at 90% confidence might be optimal in some game states but disastrous in others, requiring sophisticated risk analysis.",
          es: "El Dilema de Cluedo se refiere al punto de decisión crítico donde los jugadores deben equilibrar la probabilidad de que estén correctos contra el riesgo de eliminación. Hacer una acusación con 90% de confianza podría ser óptimo en algunos estados de juego pero desastroso en otros, requiriendo análisis de riesgo sofisticado.",
          de: "Das Cluedo-Dilemma bezieht sich auf den kritischen Entscheidungspunkt, wo Spieler die Wahrscheinlichkeit ihrer Richtigkeit gegen das Eliminierungsrisiko abwägen müssen. Eine Anklage bei 90% Vertrauen könnte in manchen Spielzuständen optimal aber in anderen katastrophal sein, was anspruchsvolle Risikoanalyse erfordert.",
          nl: "Het Cluedo-dilemma verwijst naar het kritieke beslissingspunt waar spelers de waarschijnlijkheid dat ze correct zijn moeten afwegen tegen het eliminatierisico. Een beschuldiging maken bij 90% zekerheid kan in sommige spelstanden optimaal zijn maar in andere rampzalig, wat geavanceerde risicoanalyse vereist."
        }
      },
      {
        question: {
          en: "In competitive Cluedo, what does 'information asymmetry exploitation' mean?",
          es: "En Cluedo competitivo, ¿qué significa 'explotación de asimetría de información'?",
          de: "Was bedeutet 'Informationsasymmetrieausnutzung' im kompetitiven Cluedo?",
          nl: "Wat betekent 'informatieasymmetrie-exploitatie' in competitief Cluedo?"
        },
        options: [
          {
            en: "Leveraging the fact that you know exactly what you showed but opponents only know one card was shown",
            es: "Aprovechar el hecho de que sabes exactamente qué mostraste pero los oponentes solo saben que se mostró una carta",
            de: "Ausnutzen der Tatsache, dass Sie genau wissen was Sie zeigten, aber Gegner nur wissen dass eine Karte gezeigt wurde",
            nl: "Profiteren van het feit dat je precies weet wat je toonde maar tegenstanders alleen weten dat er één kaart werd getoond"
          },
          {
            en: "Having more cards than other players",
            es: "Tener más cartas que otros jugadores",
            de: "Mehr Karten als andere Spieler haben",
            nl: "Meer kaarten hebben dan andere spelers"
          },
          {
            en: "Moving faster on the board",
            es: "Moverse más rápido en el tablero",
            de: "Sich schneller auf dem Brett bewegen",
            nl: "Sneller bewegen op het bord"
          },
          {
            en: "Making more suggestions",
            es: "Hacer más sugerencias",
            de: "Mehr Vorschläge machen",
            nl: "Meer suggesties maken"
          }
        ],
        correct: 0,
        explanation: {
          en: "When you show a card, you have perfect information about what was revealed, but other players only observe that a card was shown. Expert players exploit this asymmetry by making suggestions designed to reveal maximum information to themselves while minimizing what opponents can deduce from the exchange.",
          es: "Cuando muestras una carta, tienes información perfecta sobre qué se reveló, pero otros jugadores solo observan que se mostró una carta. Los jugadores expertos explotan esta asimetría haciendo sugerencias diseñadas para revelar máxima información a sí mismos mientras minimizan lo que los oponentes pueden deducir del intercambio.",
          de: "Wenn Sie eine Karte zeigen, haben Sie perfekte Information über was offenbart wurde, aber andere Spieler beobachten nur dass eine Karte gezeigt wurde. Expertenspieler nutzen diese Asymmetrie aus, indem sie Vorschläge machen, die maximale Information für sich selbst offenbaren während minimiert wird, was Gegner aus dem Austausch deduzieren können.",
          nl: "Wanneer je een kaart toont, heb je perfecte informatie over wat werd onthuld, maar andere spelers zien alleen dat er een kaart werd getoond. Expertspelers exploiteren deze asymmetrie door suggesties te maken die ontworpen zijn om maximale informatie voor zichzelf te onthullen terwijl wordt geminimaliseerd wat tegenstanders kunnen afleiden uit de uitwisseling."
        }
      },
      {
        question: {
          en: "What advanced technique involves deliberately making suggestions you know will fail?",
          es: "¿Qué técnica avanzada implica hacer deliberadamente sugerencias que sabes que fallarán?",
          de: "Welche fortgeschrittene Technik beinhaltet absichtlich Vorschläge zu machen, von denen Sie wissen, dass sie scheitern werden?",
          nl: "Welke geavanceerde techniek houdt in dat je opzettelijk suggesties doet waarvan je weet dat ze zullen mislukken?"
        },
        options: [
          {
            en: "Controlled information revelation to mislead opponents about your knowledge state",
            es: "Revelación de información controlada para engañar a los oponentes sobre tu estado de conocimiento",
            de: "Kontrollierte Informationsoffenbarung, um Gegner über Ihren Wissenszustand zu täuschen",
            nl: "Gecontroleerde informatieonthulling om tegenstanders te misleiden over je kennisstaat"
          },
          {
            en: "Testing room connections",
            es: "Probar conexiones de habitaciones",
            de: "Raumverbindungen testen",
            nl: "Kamerverbindingen testen"
          },
          {
            en: "Wasting opponents' time",
            es: "Desperdiciar tiempo de los oponentes",
            de: "Zeit der Gegner verschwenden",
            nl: "Tijd van tegenstanders verspillen"
          },
          {
            en: "Random gameplay",
            es: "Juego aleatorio",
            de: "Zufälliges Spielen",
            nl: "Willekeurig spelen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Master players sometimes make suggestions containing cards they hold to create false impressions about their deduction progress. This misdirection can cause opponents to pursue incorrect theories while the expert player works toward the solution unimpeded.",
          es: "Los jugadores maestros a veces hacen sugerencias que contienen cartas que tienen para crear impresiones falsas sobre su progreso de deducción. Esta misdirección puede hacer que los oponentes persigan teorías incorrectas mientras el jugador experto trabaja hacia la solución sin impedimentos.",
          de: "Meisterspieler machen manchmal Vorschläge mit Karten, die sie halten, um falsche Eindrücke über ihren Deduktionsfortschritt zu erzeugen. Diese Ablenkung kann Gegner dazu bringen, falschen Theorien zu folgen, während der Expertenspieler ungehindert zur Lösung arbeitet.",
          nl: "Meesterspelers maken soms suggesties met kaarten die ze hebben om valse indrukken te creëren over hun deductievooruitgang. Deze misleiding kan tegenstanders ertoe brengen onjuiste theorieën na te jagen terwijl de expertspeler ongehinderd naar de oplossing toe werkt."
        }
      },
      {
        question: {
          en: "What is the 'Passage Advantage' in advanced Cluedo strategy?",
          es: "¿Qué es la 'Ventaja de Pasaje' en estrategia avanzada de Cluedo?",
          de: "Was ist der 'Durchgangsvorteil' in fortgeschrittener Cluedo-Strategie?",
          nl: "Wat is het 'Gangvoordeel' in geavanceerde Cluedo-strategie?"
        },
        options: [
          {
            en: "Strategic positioning near secret passages to maximize suggestion frequency and room access",
            es: "Posicionamiento estratégico cerca de pasajes secretos para maximizar frecuencia de sugerencias y acceso a habitaciones",
            de: "Strategische Positionierung nahe Geheimgängen zur Maximierung der Vorschlagsfrequenz und Raumzugang",
            nl: "Strategische positionering nabij geheime gangen om suggestiefrequentie en kamertoegang te maximaliseren"
          },
          {
            en: "Using passages to escape the game",
            es: "Usar pasajes para escapar del juego",
            de: "Durchgänge nutzen, um dem Spiel zu entkommen",
            nl: "Gangen gebruiken om aan het spel te ontsnappen"
          },
          {
            en: "Blocking other players in passages",
            es: "Bloquear otros jugadores en pasajes",
            de: "Andere Spieler in Durchgängen blockieren",
            nl: "Andere spelers blokkeren in gangen"
          },
          {
            en: "Avoiding passages entirely",
            es: "Evitar pasajes completamente",
            de: "Durchgänge vollständig vermeiden",
            nl: "Gangen volledig vermijden"
          }
        ],
        correct: 0,
        explanation: {
          en: "Expert players recognize that secret passages connecting Kitchen-Study and Lounge-Conservatory create powerful strategic positions. Controlling these rooms allows for rapid cross-board movement and increased suggestion opportunities, accelerating information gathering.",
          es: "Los jugadores expertos reconocen que los pasajes secretos que conectan Cocina-Estudio y Salón-Conservatorio crean posiciones estratégicas poderosas. Controlar estas habitaciones permite movimiento rápido a través del tablero y oportunidades aumentadas de sugerencias, acelerando la recopilación de información.",
          de: "Expertenspieler erkennen, dass Geheimgänge, die Küche-Arbeitszimmer und Salon-Wintergarten verbinden, mächtige strategische Positionen schaffen. Diese Räume zu kontrollieren ermöglicht schnelle Brett-übergreifende Bewegung und erhöhte Vorschlagsmöglichkeiten, was Informationssammlung beschleunigt.",
          nl: "Expertspelers herkennen dat geheime gangen die Keuken-Studeerkamer en Salon-Serre verbinden krachtige strategische posities creëren. Het controleren van deze kamers maakt snelle beweging over het bord mogelijk en verhoogde suggestiemogelijkheden, wat informatieverzameling versnelt."
        }
      },
      {
        question: {
          en: "How do tournament players use 'suggestion timing analysis'?",
          es: "¿Cómo usan los jugadores de torneo el 'análisis de tiempo de sugerencias'?",
          de: "Wie nutzen Turnierspieler die 'Vorschlagszeitanalyse'?",
          nl: "Hoe gebruiken toernooispelers 'suggestietijdanalyse'?"
        },
        options: [
          {
            en: "Inferring opponent card holdings by analyzing when they can and cannot disprove suggestions",
            es: "Inferir posesión de cartas del oponente analizando cuándo pueden y no pueden refutar sugerencias",
            de: "Ableiten der Kartenbestände von Gegnern durch Analyse wann sie Vorschläge widerlegen können und wann nicht",
            nl: "Afleiden van tegenstanderskaarten door te analyseren wanneer ze suggesties wel en niet kunnen weerleggen"
          },
          {
            en: "Playing faster than opponents",
            es: "Jugar más rápido que los oponentes",
            de: "Schneller spielen als Gegner",
            nl: "Sneller spelen dan tegenstanders"
          },
          {
            en: "Taking longer turns",
            es: "Tomar turnos más largos",
            de: "Längere Züge nehmen",
            nl: "Langere beurten nemen"
          },
          {
            en: "Random suggestion patterns",
            es: "Patrones de sugerencias aleatorias",
            de: "Zufällige Vorschlagsmuster",
            nl: "Willekeurige suggestiepatronen"
          }
        ],
        correct: 0,
        explanation: {
          en: "When multiple players pass on a suggestion before someone disproves it, expert players use this sequencing information to narrow down which players don't hold which cards, effectively gaining information even from negative responses through process of elimination.",
          es: "Cuando múltiples jugadores pasan en una sugerencia antes de que alguien la refute, los jugadores expertos usan esta información de secuencia para reducir qué jugadores no tienen qué cartas, ganando efectivamente información incluso de respuestas negativas mediante proceso de eliminación.",
          de: "Wenn mehrere Spieler bei einem Vorschlag passen, bevor jemand ihn widerlegt, nutzen Expertenspieler diese Sequenzinformation, um einzugrenzen welche Spieler welche Karten nicht halten, wodurch effektiv Information sogar aus negativen Antworten durch Ausschlussverfahren gewonnen wird.",
          nl: "Wanneer meerdere spelers passen bij een suggestie voordat iemand deze weerlegt, gebruiken expertspelers deze volgorde-informatie om af te bakenen welke spelers welke kaarten niet hebben, waardoor effectief informatie wordt verkregen zelfs uit negatieve reacties via eliminatieproces."
        }
      },
      {
        question: {
          en: "What is 'card distribution variance optimization' in competitive play?",
          es: "¿Qué es la 'optimización de varianza de distribución de cartas' en juego competitivo?",
          de: "Was ist 'Kartenverteilungsvarianzoptimierung' im Wettkampfspiel?",
          nl: "Wat is 'kaartdistributievariantie-optimalisatie' in competitief spel?"
        },
        options: [
          {
            en: "Adjusting strategy based on whether you receive more or fewer cards than average",
            es: "Ajustar estrategia basándose en si recibes más o menos cartas que el promedio",
            de: "Strategie anpassen basierend darauf, ob Sie mehr oder weniger Karten als durchschnittlich erhalten",
            nl: "Strategie aanpassen op basis van of je meer of minder kaarten ontvangt dan gemiddeld"
          },
          {
            en: "Always playing the same way",
            es: "Siempre jugar de la misma manera",
            de: "Immer gleich spielen",
            nl: "Altijd op dezelfde manier spelen"
          },
          {
            en: "Requesting specific cards",
            es: "Solicitar cartas específicas",
            de: "Bestimmte Karten anfordern",
            nl: "Specifieke kaarten aanvragen"
          },
          {
            en: "Trading cards with opponents",
            es: "Intercambiar cartas con oponentes",
            de: "Karten mit Gegnern tauschen",
            nl: "Kaarten ruilen met tegenstanders"
          }
        ],
        correct: 0,
        explanation: {
          en: "Players receiving more cards have more information but face smaller solution spaces. Expert players adapt their strategies - with many cards, they play more conservatively and focus on cross-referencing; with few cards, they must gather information more aggressively through strategic suggestions.",
          es: "Los jugadores que reciben más cartas tienen más información pero enfrentan espacios de solución más pequeños. Los jugadores expertos adaptan sus estrategias - con muchas cartas, juegan más conservadoramente y se enfocan en referencias cruzadas; con pocas cartas, deben recopilar información más agresivamente mediante sugerencias estratégicas.",
          de: "Spieler, die mehr Karten erhalten, haben mehr Information aber kleinere Lösungsräume. Expertenspieler passen ihre Strategien an - mit vielen Karten spielen sie konservativer und fokussieren auf Querverweise; mit wenigen Karten müssen sie Information aggressiver durch strategische Vorschläge sammeln.",
          nl: "Spelers die meer kaarten ontvangen hebben meer informatie maar kleinere oplossingsruimtes. Expertspelers passen hun strategieën aan - met veel kaarten spelen ze conservatiever en focussen op kruisverwijzingen; met weinig kaarten moeten ze agressiever informatie verzamelen via strategische suggesties."
        }
      },
      {
        question: {
          en: "What does 'deductive closure analysis' mean in expert Cluedo play?",
          es: "¿Qué significa 'análisis de cierre deductivo' en juego experto de Cluedo?",
          de: "Was bedeutet 'deduktive Abschlussanalyse' im Experten-Cluedo-Spiel?",
          nl: "Wat betekent 'deductieve sluitingsanalyse' in expert Cluedo-spel?"
        },
        options: [
          {
            en: "Recognizing when partial information combined with elimination creates definitive conclusions",
            es: "Reconocer cuándo la información parcial combinada con eliminación crea conclusiones definitivas",
            de: "Erkennen wann Teilinformation kombiniert mit Eliminierung definitive Schlussfolgerungen schafft",
            nl: "Herkennen wanneer gedeeltelijke informatie gecombineerd met eliminatie definitieve conclusies creëert"
          },
          {
            en: "Closing your detective notebook",
            es: "Cerrar tu cuaderno de detective",
            de: "Ihr Detektivnotizbuch schließen",
            nl: "Je detectivenotitieboek sluiten"
          },
          {
            en: "Ending the game early",
            es: "Terminar el juego temprano",
            de: "Das Spiel früh beenden",
            nl: "Het spel vroeg beëindigen"
          },
          {
            en: "Final accusation rules",
            es: "Reglas de acusación final",
            de: "Endgültige Anklageregelung",
            nl: "Definitieve beschuldigingsregels"
          }
        ],
        correct: 0,
        explanation: {
          en: "Expert players recognize logical chain reactions where eliminating one possibility forces other conclusions. For example, if Player A can't disprove a suggestion and you know they hold cards X and Y, you can definitively conclude they don't hold card Z from the suggestion, even without direct evidence.",
          es: "Los jugadores expertos reconocen reacciones en cadena lógicas donde eliminar una posibilidad fuerza otras conclusiones. Por ejemplo, si el Jugador A no puede refutar una sugerencia y sabes que tienen cartas X e Y, puedes concluir definitivamente que no tienen la carta Z de la sugerencia, incluso sin evidencia directa.",
          de: "Expertenspieler erkennen logische Kettenreaktionen, wo das Eliminieren einer Möglichkeit andere Schlussfolgerungen erzwingt. Zum Beispiel, wenn Spieler A einen Vorschlag nicht widerlegen kann und Sie wissen, dass er Karten X und Y hält, können Sie definitiv schließen, dass er Karte Z aus dem Vorschlag nicht hält, sogar ohne direkte Beweise.",
          nl: "Expertspelers herkennen logische kettingreacties waarbij het elimineren van één mogelijkheid andere conclusies afdwingt. Bijvoorbeeld, als Speler A een suggestie niet kan weerleggen en je weet dat ze kaarten X en Y hebben, kun je definitief concluderen dat ze kaart Z uit de suggestie niet hebben, zelfs zonder direct bewijs."
        }
      },
      {
        question: {
          en: "In a 6-player game, what is the theoretical minimum number of suggestions needed to guarantee solution?",
          es: "En un juego de 6 jugadores, ¿cuál es el número mínimo teórico de sugerencias necesarias para garantizar la solución?",
          de: "Was ist in einem 6-Spieler-Spiel die theoretische Mindestanzahl von Vorschlägen, die zur Garantie der Lösung benötigt wird?",
          de: "Wat is in een 6-spelersspel het theoretische minimum aantal suggesties nodig om de oplossing te garanderen?"
        },
        options: [
          {
            en: "It varies based on card distribution and information flow, typically 6-12 with optimal play",
            es: "Varía según la distribución de cartas y flujo de información, típicamente 6-12 con juego óptimo",
            de: "Es variiert basierend auf Kartenverteilung und Informationsfluss, typischerweise 6-12 bei optimalem Spiel",
            nl: "Het varieert op basis van kaartdistributie en informatiestroom, meestal 6-12 met optimaal spel"
          },
          {
            en: "Exactly 3 suggestions",
            es: "Exactamente 3 sugerencias",
            de: "Genau 3 Vorschläge",
            nl: "Precies 3 suggesties"
          },
          {
            en: "Always 21 suggestions",
            es: "Siempre 21 sugerencias",
            de: "Immer 21 Vorschläge",
            nl: "Altijd 21 suggesties"
          },
          {
            en: "One suggestion per player",
            es: "Una sugerencia por jugador",
            de: "Ein Vorschlag pro Spieler",
            nl: "Eén suggestie per speler"
          }
        ],
        correct: 0,
        explanation: {
          en: "There's no fixed minimum as it depends on card distribution and how information flows. With perfect information sharing and optimal suggestions, expert players can sometimes solve in 6-8 turns, but worst-case scenarios with unlucky distributions might require 12+ suggestions even with perfect play.",
          es: "No hay un mínimo fijo ya que depende de la distribución de cartas y cómo fluye la información. Con compartir información perfecta y sugerencias óptimas, los jugadores expertos a veces pueden resolver en 6-8 turnos, pero escenarios del peor caso con distribuciones desfavorables podrían requerir 12+ sugerencias incluso con juego perfecto.",
          de: "Es gibt kein festes Minimum, da es von Kartenverteilung und Informationsfluss abhängt. Mit perfektem Informationsaustausch und optimalen Vorschlägen können Expertenspieler manchmal in 6-8 Zügen lösen, aber Worst-Case-Szenarien mit unglücklichen Verteilungen könnten 12+ Vorschläge selbst bei perfektem Spiel erfordern.",
          nl: "Er is geen vast minimum omdat het afhangt van kaartdistributie en hoe informatie stroomt. Met perfecte informatie-uitwisseling en optimale suggesties kunnen expertspelers soms oplossen in 6-8 beurten, maar worst-case scenario's met ongelukkige distributies kunnen 12+ suggesties vereisen zelfs met perfect spel."
        }
      },
      {
        question: {
          en: "What advanced technique is 'suggestion cross-correlation'?",
          es: "¿Qué técnica avanzada es la 'correlación cruzada de sugerencias'?",
          de: "Was ist die fortgeschrittene Technik 'Vorschlagskreuzkorrelation'?",
          nl: "Wat is de geavanceerde techniek 'suggestiekruiscorrelatie'?"
        },
        options: [
          {
            en: "Analyzing multiple suggestions together to deduce information beyond individual responses",
            es: "Analizar múltiples sugerencias juntas para deducir información más allá de respuestas individuales",
            de: "Mehrere Vorschläge zusammen analysieren, um Information jenseits individueller Antworten abzuleiten",
            nl: "Meerdere suggesties samen analyseren om informatie af te leiden voorbij individuele reacties"
          },
          {
            en: "Making the same suggestion twice",
            es: "Hacer la misma sugerencia dos veces",
            de: "Denselben Vorschlag zweimal machen",
            nl: "Dezelfde suggestie twee keer maken"
          },
          {
            en: "Comparing dice rolls",
            es: "Comparar tiradas de dados",
            de: "Würfelwürfe vergleichen",
            nl: "Dobbelsteenworp vergelijken"
          },
          {
            en: "Working with other players",
            es: "Trabajar con otros jugadores",
            de: "Mit anderen Spielern zusammenarbeiten",
            nl: "Samenwerken met andere spelers"
          }
        ],
        correct: 0,
        explanation: {
          en: "When Player A disproves suggestion 1 (containing cards X, Y, Z) and Player B disproves suggestion 2 (containing cards Y, Z, W), expert players cross-correlate this information. If Player A later cannot disprove a suggestion with X, you know they showed Y or Z in suggestion 1.",
          es: "Cuando el Jugador A refuta la sugerencia 1 (conteniendo cartas X, Y, Z) y el Jugador B refuta la sugerencia 2 (conteniendo cartas Y, Z, W), los jugadores expertos correlacionan cruzadamente esta información. Si el Jugador A luego no puede refutar una sugerencia con X, sabes que mostraron Y o Z en la sugerencia 1.",
          de: "Wenn Spieler A Vorschlag 1 widerlegt (enthaltend Karten X, Y, Z) und Spieler B Vorschlag 2 widerlegt (enthaltend Karten Y, Z, W), korrelieren Expertenspieler diese Information kreuzweise. Wenn Spieler A später einen Vorschlag mit X nicht widerlegen kann, wissen Sie, dass er Y oder Z in Vorschlag 1 zeigte.",
          nl: "Wanneer Speler A suggestie 1 weerlegt (met kaarten X, Y, Z) en Speler B suggestie 2 weerlegt (met kaarten Y, Z, W), correleren expertspelers deze informatie kruislings. Als Speler A later een suggestie met X niet kan weerleggen, weet je dat ze Y of Z toonden in suggestie 1."
        }
      },
      {
        question: {
          en: "What is the 'End Game Paradox' in competitive Cluedo?",
          es: "¿Qué es la 'Paradoja de Fin de Juego' en Cluedo competitivo?",
          de: "Was ist das 'Endspiel-Paradox' im kompetitiven Cluedo?",
          nl: "Wat is de 'Eindspelparadox' in competitief Cluedo?"
        },
        options: [
          {
            en: "The dilemma where gathering more information increases opponent knowledge proportionally",
            es: "El dilema donde recopilar más información aumenta el conocimiento del oponente proporcionalmente",
            de: "Das Dilemma, wo mehr Information zu sammeln Gegnerwissen proportional erhöht",
            nl: "Het dilemma waarbij meer informatie verzamelen de kennis van tegenstanders proportioneel verhoogt"
          },
          {
            en: "Running out of time",
            es: "Quedarse sin tiempo",
            de: "Keine Zeit mehr haben",
            nl: "Geen tijd meer hebben"
          },
          {
            en: "Forgetting previous clues",
            es: "Olvidar pistas anteriores",
            de: "Vorherige Hinweise vergessen",
            nl: "Eerdere aanwijzingen vergeten"
          },
          {
            en: "Game ending in a draw",
            es: "Juego terminando en empate",
            de: "Spiel endet unentschieden",
            nl: "Spel eindigt in gelijkspel"
          }
        ],
        correct: 0,
        explanation: {
          en: "In the late game, every suggestion you make provides information to all players, not just yourself. Expert players must calculate whether the information they gain from a suggestion exceeds the advantage they give opponents, sometimes deliberately withholding suggestions when they have sufficient confidence.",
          es: "En el juego tardío, cada sugerencia que haces proporciona información a todos los jugadores, no solo a ti mismo. Los jugadores expertos deben calcular si la información que ganan de una sugerencia excede la ventaja que dan a los oponentes, a veces reteniendo deliberadamente sugerencias cuando tienen suficiente confianza.",
          de: "Im späten Spiel liefert jeder Vorschlag den Sie machen Information an alle Spieler, nicht nur an sich selbst. Expertenspieler müssen kalkulieren ob die Information die sie aus einem Vorschlag gewinnen den Vorteil übersteigt den sie Gegnern geben, manchmal absichtlich Vorschläge zurückhalten wenn sie ausreichend Vertrauen haben.",
          nl: "In het late spel verschaft elke suggestie die je maakt informatie aan alle spelers, niet alleen aan jezelf. Expertspelers moeten berekenen of de informatie die ze verkrijgen uit een suggestie het voordeel overtreft dat ze tegenstanders geven, soms opzettelijk suggesties achterhouden wanneer ze voldoende vertrouwen hebben."
        }
      },
      {
        question: {
          en: "How do expert players use 'probabilistic card tracking matrices'?",
          es: "¿Cómo usan los jugadores expertos las 'matrices de seguimiento de cartas probabilísticas'?",
          de: "Wie nutzen Expertenspieler 'probabilistische Kartenverfolgungsmatrizen'?",
          nl: "Hoe gebruiken expertspelers 'probabilistische kaartvolgende matrices'?"
        },
        options: [
          {
            en: "Maintaining probability distributions for each card being held by each player or in the envelope",
            es: "Mantener distribuciones de probabilidad para cada carta siendo sostenida por cada jugador o en el sobre",
            de: "Wahrscheinlichkeitsverteilungen für jede Karte pflegen die von jedem Spieler gehalten wird oder im Umschlag ist",
            nl: "Waarschijnlijkheidsverdelingen bijhouden voor elke kaart die door elke speler wordt gehouden of in de envelop zit"
          },
          {
            en: "Using physical tracking devices",
            es: "Usar dispositivos de seguimiento físicos",
            de: "Physische Verfolgungsgeräte verwenden",
            nl: "Fysieke volgapparaten gebruiken"
          },
          {
            en: "Memorizing card order",
            es: "Memorizar orden de cartas",
            de: "Kartenreihenfolge auswendig lernen",
            nl: "Kaartvolgorde onthouden"
          },
          {
            en: "Random guessing systems",
            es: "Sistemas de adivinanza aleatoria",
            de: "Zufällige Ratesysteme",
            nl: "Willekeurige raadsystemen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Instead of binary yes/no card tracking, tournament players maintain probability estimates for each card-player combination. When Player A shows a card from {X, Y, Z}, they update probabilities that A holds each card to approximately 33%, continuously refining these estimates with each new piece of information.",
          es: "En lugar de seguimiento binario sí/no de cartas, los jugadores de torneo mantienen estimaciones de probabilidad para cada combinación carta-jugador. Cuando el Jugador A muestra una carta de {X, Y, Z}, actualizan probabilidades de que A tenga cada carta a aproximadamente 33%, refinando continuamente estas estimaciones con cada nueva pieza de información.",
          de: "Statt binärer Ja/Nein-Kartenverfolgung pflegen Turnierspieler Wahrscheinlichkeitsschätzungen für jede Karten-Spieler-Kombination. Wenn Spieler A eine Karte aus {X, Y, Z} zeigt, aktualisieren sie Wahrscheinlichkeiten dass A jede Karte hält auf etwa 33%, verfeinern diese Schätzungen kontinuierlich mit jeder neuen Information.",
          nl: "In plaats van binair ja/nee kaartvolgen, onderhouden toernooispelers waarschijnlijkheidsschattingen voor elke kaart-speler combinatie. Wanneer Speler A een kaart toont uit {X, Y, Z}, updaten ze waarschijnlijkheden dat A elke kaart heeft naar ongeveer 33%, waarbij deze schattingen voortdurend worden verfijnd met elk nieuw stukje informatie."
        }
      },
      {
        question: {
          en: "What is 'counter-deduction defense' in advanced play?",
          es: "¿Qué es la 'defensa de contra-deducción' en juego avanzado?",
          de: "Was ist 'Gegen-Deduktions-Verteidigung' im fortgeschrittenen Spiel?",
          nl: "Wat is 'tegen-deductieverdediging' in geavanceerd spel?"
        },
        options: [
          {
            en: "Deliberately varying which card you show to prevent opponents from deducing your full hand",
            es: "Variar deliberadamente qué carta muestras para evitar que los oponentes deduzcan tu mano completa",
            de: "Absichtlich variieren welche Karte Sie zeigen, um Gegner daran zu hindern Ihre volle Hand abzuleiten",
            nl: "Opzettelijk variëren welke kaart je toont om te voorkomen dat tegenstanders je volledige hand afleiden"
          },
          {
            en: "Never showing any cards",
            es: "Nunca mostrar ninguna carta",
            de: "Niemals Karten zeigen",
            nl: "Nooit kaarten tonen"
          },
          {
            en: "Showing all cards at once",
            es: "Mostrar todas las cartas a la vez",
            de: "Alle Karten auf einmal zeigen",
            nl: "Alle kaarten tegelijk tonen"
          },
          {
            en: "Ignoring opponent strategies",
            es: "Ignorar estrategias del oponente",
            de: "Gegnerstrategien ignorieren",
            nl: "Tegenstandersstrategieën negeren"
          }
        ],
        correct: 0,
        explanation: {
          en: "When you hold multiple cards from a suggestion, expert players strategically vary which card to reveal. Always showing the same type (e.g., weapons) allows opponents to narrow down your holdings. Randomizing prevents this meta-level deduction while maintaining game integrity.",
          es: "Cuando tienes múltiples cartas de una sugerencia, los jugadores expertos varían estratégicamente qué carta revelar. Mostrar siempre el mismo tipo (ej., armas) permite a los oponentes reducir tus posesiones. Aleatorizar previene esta deducción de meta-nivel mientras mantiene la integridad del juego.",
          de: "Wenn Sie mehrere Karten aus einem Vorschlag halten, variieren Expertenspieler strategisch welche Karte offenbart wird. Immer denselben Typ zeigen (z.B. Waffen) ermöglicht Gegnern Ihre Bestände einzugrenzen. Randomisierung verhindert diese Meta-Ebenen-Deduktion bei Beibehaltung der Spielintegrität.",
          nl: "Wanneer je meerdere kaarten van een suggestie hebt, variëren expertspelers strategisch welke kaart te onthullen. Altijd hetzelfde type tonen (bijv. wapens) stelt tegenstanders in staat je bezit te vernauwen. Randomiseren voorkomt deze meta-niveau deductie terwijl spelintegriteit behouden blijft."
        }
      },
      {
        question: {
          en: "What does 'optimal accusation timing' depend on in tournament settings?",
          es: "¿De qué depende el 'momento óptimo de acusación' en entornos de torneo?",
          de: "Wovon hängt das 'optimale Anklagezeitpunkt' in Turnierumgebungen ab?",
          nl: "Waar hangt 'optimale beschuldigingstiming' van af in toernooiomgevingen?"
        },
        options: [
          {
            en: "Nash equilibrium analysis of opponent progress, solution confidence, and elimination risk",
            es: "Análisis de equilibrio de Nash del progreso del oponente, confianza de solución y riesgo de eliminación",
            de: "Nash-Gleichgewichtsanalyse von Gegnerfortschritt, Lösungsvertrauen und Eliminierungsrisiko",
            nl: "Nash-evenwichtsanalyse van tegenstandersvoortgang, oplossingsvertrouwen en eliminatierisico"
          },
          {
            en: "Time of day",
            es: "Hora del día",
            de: "Tageszeit",
            nl: "Tijd van de dag"
          },
          {
            en: "Number of players eliminated",
            es: "Número de jugadores eliminados",
            de: "Anzahl eliminierter Spieler",
            nl: "Aantal geëlimineerde spelers"
          },
          {
            en: "Dice roll results",
            es: "Resultados de tiradas de dados",
            de: "Würfelergebnisse",
            nl: "Dobbelsteenresultaten"
          }
        ],
        correct: 0,
        explanation: {
          en: "Expert players don't just consider their own confidence level - they model opponents' likely progress. If opponents appear close to solving, it may be rational to accuse at 85% confidence rather than risk being beaten. Conversely, with a significant lead, waiting for 95%+ confidence is optimal.",
          es: "Los jugadores expertos no solo consideran su propio nivel de confianza - modelan el progreso probable de los oponentes. Si los oponentes parecen cerca de resolver, puede ser racional acusar con 85% de confianza en lugar de arriesgarse a ser vencido. Por el contrario, con una ventaja significativa, esperar 95%+ de confianza es óptimo.",
          de: "Expertenspieler berücksichtigen nicht nur ihr eigenes Vertrauensniveau - sie modellieren den wahrscheinlichen Fortschritt der Gegner. Wenn Gegner nahe an der Lösung erscheinen, kann es rational sein bei 85% Vertrauen anzuklagen statt zu riskieren geschlagen zu werden. Umgekehrt ist bei signifikantem Vorsprung Warten auf 95%+ Vertrauen optimal.",
          nl: "Expertspelers overwegen niet alleen hun eigen vertrouwensniveau - ze modelleren de waarschijnlijke voortgang van tegenstanders. Als tegenstanders dichtbij de oplossing lijken, kan het rationeel zijn om te beschuldigen bij 85% vertrouwen in plaats van het risico te lopen verslagen te worden. Omgekeerd is bij een aanzienlijke voorsprong wachten op 95%+ vertrouwen optimaal."
        }
      },
      {
        question: {
          en: "How does 'move order theory' apply to Cluedo strategy?",
          es: "¿Cómo se aplica la 'teoría de orden de movimiento' a la estrategia de Cluedo?",
          de: "Wie gilt die 'Zugfolgentheorie' für die Cluedo-Strategie?",
          nl: "Hoe is 'bewegingsvolgordetheorie' van toepassing op Cluedo-strategie?"
        },
        options: [
          {
            en: "Sequencing room movements to maximize information gain while minimizing positional disadvantage",
            es: "Secuenciar movimientos de habitaciones para maximizar ganancia de información mientras minimiza desventaja posicional",
            de: "Raumbewegungen sequenzieren, um Informationsgewinn zu maximieren bei Minimierung positioneller Nachteile",
            nl: "Kamerbewegingen ordenen om informatiewinst te maximaliseren terwijl positioneel nadeel wordt geminimaliseerd"
          },
          {
            en: "Moving in alphabetical room order",
            es: "Moverse en orden alfabético de habitaciones",
            de: "In alphabetischer Raumreihenfolge bewegen",
            nl: "Bewegen in alfabetische kamervolgorde"
          },
          {
            en: "Always moving to nearest room",
            es: "Siempre moverse a la habitación más cercana",
            de: "Immer zum nächsten Raum bewegen",
            nl: "Altijd naar de dichtstbijzijnde kamer bewegen"
          },
          {
            en: "Random movement patterns",
            es: "Patrones de movimiento aleatorios",
            de: "Zufällige Bewegungsmuster",
            nl: "Willekeurige bewegingspatronen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Expert players plan movement sequences several turns ahead, considering which room combinations will yield maximum information through suggestions while maintaining flexibility for future moves. They balance information gathering needs against the risk of becoming positionally isolated.",
          es: "Los jugadores expertos planifican secuencias de movimiento varios turnos adelante, considerando qué combinaciones de habitaciones darán máxima información a través de sugerencias mientras mantienen flexibilidad para movimientos futuros. Equilibran necesidades de recopilación de información contra el riesgo de quedar posicionalmente aislado.",
          de: "Expertenspieler planen Bewegungssequenzen mehrere Züge im Voraus, berücksichtigen welche Raumkombinationen maximale Information durch Vorschläge liefern bei Beibehaltung von Flexibilität für zukünftige Züge. Sie balancieren Informationssammelbedürfnisse gegen das Risiko positionell isoliert zu werden.",
          nl: "Expertspelers plannen bewegingssequenties meerdere beurten vooruit, overwegen welke kamercombinaties maximale informatie opleveren via suggesties terwijl flexibiliteit voor toekomstige bewegingen behouden blijft. Ze balanceren informatieverzamelingsbehoeften tegen het risico positioneel geïsoleerd te raken."
        }
      },
      {
        question: {
          en: "What is 'information leakage minimization' in expert play?",
          es: "¿Qué es la 'minimización de fuga de información' en juego experto?",
          de: "Was ist 'Informationsleck-Minimierung' im Expertenspiel?",
          nl: "Wat is 'informatielekminimalisatie' in expertspel?"
        },
        options: [
          {
            en: "Structuring suggestions to gain maximum information while revealing minimum about your deductions",
            es: "Estructurar sugerencias para ganar máxima información mientras revela mínimo sobre tus deducciones",
            de: "Vorschläge strukturieren, um maximale Information zu gewinnen bei minimaler Offenbarung über Ihre Deduktionen",
            nl: "Suggesties structureren om maximale informatie te verkrijgen terwijl minimum wordt onthuld over je deducties"
          },
          {
            en: "Not making any suggestions",
            es: "No hacer ninguna sugerencia",
            de: "Keine Vorschläge machen",
            nl: "Geen suggesties maken"
          },
          {
            en: "Playing silently",
            es: "Jugar en silencio",
            de: "Still spielen",
            nl: "Stil spelen"
          },
          {
            en: "Hiding your cards physically",
            es: "Ocultar tus cartas físicamente",
            de: "Ihre Karten physisch verstecken",
            nl: "Je kaarten fysiek verbergen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Every suggestion reveals something about your knowledge state - what you're testing and what you've eliminated. Expert players craft suggestions that appear to test multiple hypotheses simultaneously, preventing opponents from reverse-engineering their deduction progress while still gaining critical information.",
          es: "Cada sugerencia revela algo sobre tu estado de conocimiento - qué estás probando y qué has eliminado. Los jugadores expertos elaboran sugerencias que parecen probar múltiples hipótesis simultáneamente, evitando que los oponentes ingenien inversamente su progreso de deducción mientras aún ganan información crítica.",
          de: "Jeder Vorschlag offenbart etwas über Ihren Wissenszustand - was Sie testen und was Sie eliminiert haben. Expertenspieler entwickeln Vorschläge die mehrere Hypothesen gleichzeitig zu testen scheinen, verhindern dass Gegner ihren Deduktionsfortschritt zurückentwickeln während noch kritische Information gewonnen wird.",
          nl: "Elke suggestie onthult iets over je kennisstaat - wat je test en wat je hebt geëlimineerd. Expertspelers creëren suggesties die lijken meerdere hypothesen tegelijk te testen, waardoor tegenstanders worden verhinderd hun deductievooruitgang reverse-engineeren terwijl nog steeds kritieke informatie wordt verkregen."
        }
      },
      {
        question: {
          en: "What advanced concept is 'partial information integration'?",
          es: "¿Qué concepto avanzado es la 'integración de información parcial'?",
          de: "Was ist das fortgeschrittene Konzept 'Teilinformationsintegration'?",
          nl: "Wat is het geavanceerde concept 'gedeeltelijke informatie-integratie'?"
        },
        options: [
          {
            en: "Combining incomplete deductions from multiple sources to reach definitive conclusions",
            es: "Combinar deducciones incompletas de múltiples fuentes para alcanzar conclusiones definitivas",
            de: "Unvollständige Deduktionen aus mehreren Quellen kombinieren, um definitive Schlüsse zu erreichen",
            nl: "Onvolledige deducties uit meerdere bronnen combineren om definitieve conclusies te bereiken"
          },
          {
            en: "Reading half the rules",
            es: "Leer la mitad de las reglas",
            de: "Die Hälfte der Regeln lesen",
            nl: "De helft van de regels lezen"
          },
          {
            en: "Incomplete note-taking",
            es: "Tomar notas incompletas",
            de: "Unvollständige Notizen machen",
            nl: "Onvolledige aantekeningen maken"
          },
          {
            en: "Guessing randomly",
            es: "Adivinar al azar",
            de: "Zufällig raten",
            nl: "Willekeurig raden"
          }
        ],
        correct: 0,
        explanation: {
          en: "Expert players excel at synthesizing partial information - knowing Player A has either Scarlet or Plum, Player B has either Rope or Wrench, and the murder weapon isn't in room X creates logical constraints that, combined with other partial knowledge, can definitively solve aspects of the mystery.",
          es: "Los jugadores expertos sobresalen en sintetizar información parcial - saber que el Jugador A tiene Escarlata o Ciruela, el Jugador B tiene Cuerda o Llave inglesa, y el arma del crimen no está en la habitación X crea restricciones lógicas que, combinadas con otro conocimiento parcial, pueden resolver definitivamente aspectos del misterio.",
          de: "Expertenspieler zeichnen sich aus in der Synthese von Teilinformation - zu wissen dass Spieler A entweder Fräulein Gloria oder Professor Bloom hat, Spieler B entweder Seil oder Schraubenschlüssel hat, und die Mordwaffe nicht in Raum X ist schafft logische Einschränkungen die, kombiniert mit anderem Teilwissen, definitiv Aspekte des Mysteriums lösen können.",
          nl: "Expertspelers excelleren in het synthetiseren van gedeeltelijke informatie - weten dat Speler A Rood of Paars heeft, Speler B Touw of Moersleutel heeft, en het moordwapen niet in kamer X is creëert logische beperkingen die, gecombineerd met andere gedeeltelijke kennis, definitief aspecten van het mysterie kunnen oplossen."
        }
      },
      {
        question: {
          en: "How do tournament players handle 'suggestion interference'?",
          es: "¿Cómo manejan los jugadores de torneo la 'interferencia de sugerencias'?",
          de: "Wie handhaben Turnierspieler 'Vorschlagsinterferenz'?",
          nl: "Hoe gaan toernooispelers om met 'suggestie-interferentie'?"
        },
        options: [
          {
            en: "Adapting strategy when opponents make suggestions that disrupt your planned information gathering",
            es: "Adaptar estrategia cuando los oponentes hacen sugerencias que interrumpen tu recopilación de información planificada",
            de: "Strategie anpassen, wenn Gegner Vorschläge machen, die Ihre geplante Informationssammlung stören",
            nl: "Strategie aanpassen wanneer tegenstanders suggesties maken die je geplande informatieverzameling verstoren"
          },
          {
            en: "Complaining about other players",
            es: "Quejarse de otros jugadores",
            de: "Sich über andere Spieler beschweren",
            nl: "Klagen over andere spelers"
          },
          {
            en: "Blocking opponent movements",
            es: "Bloquear movimientos de oponentes",
            de: "Gegnerbewegungen blockieren",
            nl: "Tegenstandersbewegingen blokkeren"
          },
          {
            en: "Making random accusations",
            es: "Hacer acusaciones aleatorias",
            de: "Zufällige Anklagen erheben",
            nl: "Willekeurige beschuldigingen maken"
          }
        ],
        correct: 0,
        explanation: {
          en: "When opponents move your pawn or make suggestions involving cards you're tracking, expert players dynamically recalculate their information-gathering strategy rather than rigidly following a predetermined plan. They view interference as additional data points rather than disruptions.",
          es: "Cuando los oponentes mueven tu peón o hacen sugerencias involucrando cartas que estás rastreando, los jugadores expertos recalculan dinámicamente su estrategia de recopilación de información en lugar de seguir rígidamente un plan predeterminado. Ven la interferencia como puntos de datos adicionales en lugar de interrupciones.",
          de: "Wenn Gegner Ihren Spielstein bewegen oder Vorschläge mit Karten machen die Sie verfolgen, berechnen Expertenspieler dynamisch ihre Informationssammelstrategie neu statt starr einem vorbestimmten Plan zu folgen. Sie betrachten Interferenz als zusätzliche Datenpunkte statt als Störungen.",
          nl: "Wanneer tegenstanders je pion verplaatsen of suggesties maken met kaarten die je volgt, herberekenen expertspelers dynamisch hun informatieverzamelingsstrategie in plaats van rigide een vooraf bepaald plan te volgen. Ze zien interferentie als aanvullende datapunten in plaats van verstoringen."
        }
      },
      {
        question: {
          en: "What is the 'Three-Category Convergence Theorem' in Cluedo theory?",
          es: "¿Qué es el 'Teorema de Convergencia de Tres Categorías' en teoría de Cluedo?",
          de: "Was ist das 'Drei-Kategorien-Konvergenz-Theorem' in der Cluedo-Theorie?",
          nl: "Wat is het 'Driecategorieën-convergentietheorema' in Cluedo-theorie?"
        },
        options: [
          {
            en: "The principle that optimal play narrows all three solution categories at equal rates",
            es: "El principio de que el juego óptimo reduce las tres categorías de solución a tasas iguales",
            de: "Das Prinzip dass optimales Spiel alle drei Lösungskategorien mit gleichen Raten eingrenzt",
            nl: "Het principe dat optimaal spel alle drie oplossingsscategorieën met gelijke snelheden vernauwd"
          },
          {
            en: "Always solving suspects first",
            es: "Siempre resolver sospechosos primero",
            de: "Immer zuerst Verdächtige lösen",
            nl: "Altijd eerst verdachten oplossen"
          },
          {
            en: "Weapons are easiest to identify",
            es: "Las armas son más fáciles de identificar",
            de: "Waffen sind am einfachsten zu identifizieren",
            nl: "Wapens zijn het gemakkelijkst te identificeren"
          },
          {
            en: "Rooms should be solved last",
            es: "Las habitaciones deben resolverse al final",
            de: "Räume sollten zuletzt gelöst werden",
            nl: "Kamers moeten als laatste worden opgelost"
          }
        ],
        correct: 0,
        explanation: {
          en: "Game theory analysis shows that focusing on one category (e.g., only testing weapons) is suboptimal because it allows opponents to solve other categories faster. Expert players balance their suggestions to eliminate uncertainty proportionally across suspects, weapons, and rooms simultaneously.",
          es: "El análisis de teoría de juegos muestra que enfocarse en una categoría (ej., solo probar armas) es subóptimo porque permite a los oponentes resolver otras categorías más rápido. Los jugadores expertos equilibran sus sugerencias para eliminar incertidumbre proporcionalmente a través de sospechosos, armas y habitaciones simultáneamente.",
          de: "Spieltheorieanalyse zeigt dass Fokus auf eine Kategorie (z.B. nur Waffen testen) suboptimal ist weil es Gegnern erlaubt andere Kategorien schneller zu lösen. Expertenspieler balancieren ihre Vorschläge, um Unsicherheit proportional über Verdächtige, Waffen und Räume gleichzeitig zu eliminieren.",
          nl: "Speltheorie-analyse toont dat focussen op één categorie (bijv. alleen wapens testen) suboptimaal is omdat het tegenstanders toelaat andere categorieën sneller op te lossen. Expertspelers balanceren hun suggesties om onzekerheid proportioneel te elimineren over verdachten, wapens en kamers tegelijkertijd."
        }
      },
      {
        question: {
          en: "What does 'opponent modeling' mean in competitive Cluedo?",
          es: "¿Qué significa 'modelado de oponentes' en Cluedo competitivo?",
          de: "Was bedeutet 'Gegnermodellierung' im kompetitiven Cluedo?",
          nl: "Wat betekent 'tegenstandersmodellering' in competitief Cluedo?"
        },
        options: [
          {
            en: "Tracking opponent skill levels and adapting strategy based on their likely deduction capabilities",
            es: "Rastrear niveles de habilidad de oponentes y adaptar estrategia basada en sus capacidades probables de deducción",
            de: "Gegnerfähigkeitsniveaus verfolgen und Strategie basierend auf ihren wahrscheinlichen Deduktionsfähigkeiten anpassen",
            nl: "Tegenstandersvaardigheidsniveaus volgen en strategie aanpassen op basis van hun waarschijnlijke deductiecapaciteiten"
          },
          {
            en: "Drawing pictures of opponents",
            es: "Dibujar imágenes de oponentes",
            de: "Bilder von Gegnern zeichnen",
            nl: "Tekeningen maken van tegenstanders"
          },
          {
            en: "Copying opponent strategies exactly",
            es: "Copiar estrategias de oponentes exactamente",
            de: "Gegnerstrategien exakt kopieren",
            nl: "Tegenstandersstrategieën exact kopiëren"
          },
          {
            en: "Physical player profiling",
            es: "Perfilado físico de jugadores",
            de: "Physische Spielerprofilierung",
            nl: "Fysieke spelersprofilering"
          }
        ],
        correct: 0,
        explanation: {
          en: "Against weaker opponents, expert players can take more risks and use advanced misdirection. Against equals, they play more conservatively and focus on fundamental information gathering. Top players continuously assess opponent capability and adjust their risk tolerance accordingly.",
          es: "Contra oponentes más débiles, los jugadores expertos pueden tomar más riesgos y usar misdirección avanzada. Contra iguales, juegan más conservadoramente y se enfocan en recopilación fundamental de información. Los mejores jugadores evalúan continuamente la capacidad del oponente y ajustan su tolerancia al riesgo en consecuencia.",
          de: "Gegen schwächere Gegner können Expertenspieler mehr Risiken eingehen und fortgeschrittene Ablenkung nutzen. Gegen Gleichrangige spielen sie konservativer und fokussieren auf grundlegende Informationssammlung. Top-Spieler bewerten kontinuierlich Gegnerfähigkeit und passen ihre Risikobereitschaft entsprechend an.",
          nl: "Tegen zwakkere tegenstanders kunnen expertspelers meer risico's nemen en geavanceerde misleiding gebruiken. Tegen gelijken spelen ze conservatiever en focussen op fundamentele informatieverzameling. Topspelers beoordelen voortdurend tegenstanderscapaciteit en passen hun risicotolerantie dienovereenkomstig aan."
        }
      },
      {
        question: {
          en: "What is 'the Suggestion Economy' principle?",
          es: "¿Qué es el principio de 'la Economía de Sugerencias'?",
          de: "Was ist das Prinzip der 'Vorschlagsökonomie'?",
          nl: "Wat is het principe van 'de Suggestie-economie'?"
        },
        options: [
          {
            en: "Maximizing information per suggestion while minimizing total suggestions needed to solve",
            es: "Maximizar información por sugerencia mientras minimiza las sugerencias totales necesarias para resolver",
            de: "Information pro Vorschlag maximieren bei Minimierung der Gesamtvorschläge zur Lösung",
            nl: "Informatie per suggestie maximaliseren terwijl totale suggesties nodig om op te lossen worden geminimaliseerd"
          },
          {
            en: "Making suggestions quickly to save time",
            es: "Hacer sugerencias rápidamente para ahorrar tiempo",
            de: "Schnell Vorschläge machen, um Zeit zu sparen",
            nl: "Snel suggesties maken om tijd te besparen"
          },
          {
            en: "Limiting suggestions to three per game",
            es: "Limitar sugerencias a tres por juego",
            de: "Vorschläge auf drei pro Spiel begrenzen",
            nl: "Suggesties beperken tot drie per spel"
          },
          {
            en: "Never repeating suggestions",
            es: "Nunca repetir sugerencias",
            de: "Niemals Vorschläge wiederholen",
            nl: "Nooit suggesties herhalen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Each suggestion has a cost - it provides information to opponents and consumes a turn. Expert players design each suggestion to extract maximum information value, often testing multiple hypotheses simultaneously rather than addressing single questions sequentially.",
          es: "Cada sugerencia tiene un costo - proporciona información a los oponentes y consume un turno. Los jugadores expertos diseñan cada sugerencia para extraer máximo valor de información, a menudo probando múltiples hipótesis simultáneamente en lugar de abordar preguntas únicas secuencialmente.",
          de: "Jeder Vorschlag hat Kosten - er liefert Information an Gegner und verbraucht einen Zug. Expertenspieler gestalten jeden Vorschlag, um maximalen Informationswert zu extrahieren, testen oft mehrere Hypothesen gleichzeitig statt einzelne Fragen sequenziell anzugehen.",
          nl: "Elke suggestie heeft kosten - het verschaft informatie aan tegenstanders en verbruikt een beurt. Expertspelers ontwerpen elke suggestie om maximale informatiewaarde te extraheren, vaak meerdere hypothesen tegelijk testen in plaats van enkele vragen achtereenvolgens aan te pakken."
        }
      },
      {
        question: {
          en: "How does 'card distribution analysis' help expert players?",
          es: "¿Cómo ayuda el 'análisis de distribución de cartas' a los jugadores expertos?",
          de: "Wie hilft 'Kartenverteilungsanalyse' Expertenspielern?",
          nl: "Hoe helpt 'kaartdistributieanalyse' expertspelers?"
        },
        options: [
          {
            en: "Understanding how many cards each player holds influences probability calculations for each category",
            es: "Entender cuántas cartas tiene cada jugador influye en cálculos de probabilidad para cada categoría",
            de: "Verstehen wie viele Karten jeder Spieler hält beeinflusst Wahrscheinlichkeitsberechnungen für jede Kategorie",
            nl: "Begrijpen hoeveel kaarten elke speler heeft beïnvloedt waarschijnlijkheidsberekeningen voor elke categorie"
          },
          {
            en: "Determining who goes first",
            es: "Determinar quién va primero",
            de: "Bestimmen wer zuerst geht",
            nl: "Bepalen wie eerst gaat"
          },
          {
            en: "Deciding which cards to discard",
            es: "Decidir qué cartas descartar",
            de: "Entscheiden welche Karten abzulegen",
            nl: "Beslissen welke kaarten af te leggen"
          },
          {
            en: "Counting total cards in play",
            es: "Contar cartas totales en juego",
            de: "Gesamte Karten im Spiel zählen",
            nl: "Totale kaarten in spel tellen"
          }
        ],
        correct: 0,
        explanation: {
          en: "In a 6-player game with 18 distributed cards, players receive 3 cards each. If Player A can't disprove a three-card suggestion, expert players know A holds none of those cards - representing 100% of their hand. This dramatically narrows the solution space more than with players holding more cards.",
          es: "En un juego de 6 jugadores con 18 cartas distribuidas, los jugadores reciben 3 cartas cada uno. Si el Jugador A no puede refutar una sugerencia de tres cartas, los jugadores expertos saben que A no tiene ninguna de esas cartas - representando 100% de su mano. Esto reduce dramáticamente el espacio de solución más que con jugadores que tienen más cartas.",
          de: "In einem 6-Spieler-Spiel mit 18 verteilten Karten erhalten Spieler jeweils 3 Karten. Wenn Spieler A einen Drei-Karten-Vorschlag nicht widerlegen kann, wissen Expertenspieler dass A keine dieser Karten hält - repräsentiert 100% ihrer Hand. Dies grenzt den Lösungsraum dramatischer ein als bei Spielern mit mehr Karten.",
          nl: "In een 6-spelersspel met 18 gedistribueerde kaarten ontvangen spelers elk 3 kaarten. Als Speler A een driekaarten-suggestie niet kan weerleggen, weten expertspelers dat A geen van die kaarten heeft - vertegenwoordigt 100% van hun hand. Dit vernauwd de oplossingsruimte dramatisch meer dan bij spelers met meer kaarten."
        }
      },
      {
        question: {
          en: "What is 'reverse suggestion analysis'?",
          es: "¿Qué es el 'análisis de sugerencia inversa'?",
          de: "Was ist 'umgekehrte Vorschlagsanalyse'?",
          nl: "Wat is 'omgekeerde suggestieanalyse'?"
        },
        options: [
          {
            en: "Deducing what opponents know by analyzing which suggestions they choose to make",
            es: "Deducir qué saben los oponentes analizando qué sugerencias eligen hacer",
            de: "Ableiten was Gegner wissen durch Analyse welche Vorschläge sie wählen zu machen",
            nl: "Afleiden wat tegenstanders weten door te analyseren welke suggesties ze kiezen te maken"
          },
          {
            en: "Making suggestions backwards",
            es: "Hacer sugerencias al revés",
            de: "Vorschläge rückwärts machen",
            nl: "Suggesties achterwaarts maken"
          },
          {
            en: "Undoing previous suggestions",
            es: "Deshacer sugerencias anteriores",
            de: "Vorherige Vorschläge rückgängig machen",
            nl: "Eerdere suggesties ongedaan maken"
          },
          {
            en: "Responding to suggestions with questions",
            es: "Responder a sugerencias con preguntas",
            de: "Auf Vorschläge mit Fragen antworten",
            nl: "Reageren op suggesties met vragen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Expert players watch what combinations opponents test. If an opponent repeatedly tests Professor Plum but never Colonel Mustard, it suggests they've eliminated Plum as a possibility. Advanced players use this meta-information to narrow their own solution space.",
          es: "Los jugadores expertos observan qué combinaciones prueban los oponentes. Si un oponente prueba repetidamente al Profesor Ciruela pero nunca al Coronel Mostaza, sugiere que han eliminado a Ciruela como posibilidad. Los jugadores avanzados usan esta meta-información para reducir su propio espacio de solución.",
          de: "Expertenspieler beobachten welche Kombinationen Gegner testen. Wenn ein Gegner wiederholt Professor Bloom testet aber niemals Oberst von Gatow, deutet es darauf hin dass sie Bloom als Möglichkeit eliminiert haben. Fortgeschrittene Spieler nutzen diese Meta-Information, um ihren eigenen Lösungsraum einzugrenzen.",
          nl: "Expertspelers observeren welke combinaties tegenstanders testen. Als een tegenstander herhaaldelijk Professor Paars test maar nooit Kolonel Mosterd, suggereert dit dat ze Paars als mogelijkheid hebben geëlimineerd. Geavanceerde spelers gebruiken deze meta-informatie om hun eigen oplossingsruimte te vernauwen."
        }
      },
      {
        question: {
          en: "What is the 'False Negative Problem' in Cluedo deduction?",
          es: "¿Qué es el 'Problema de Falso Negativo' en deducción de Cluedo?",
          de: "Was ist das 'Falsch-Negativ-Problem' in Cluedo-Deduktion?",
          nl: "Wat is het 'Vals-negatiefprobleem' in Cluedo-deductie?"
        },
        options: [
          {
            en: "The risk of concluding a player doesn't hold a card when they actually showed it to another player",
            es: "El riesgo de concluir que un jugador no tiene una carta cuando en realidad la mostró a otro jugador",
            de: "Das Risiko zu schließen dass ein Spieler eine Karte nicht hält, wenn er sie tatsächlich einem anderen Spieler zeigte",
            nl: "Het risico te concluderen dat een speler een kaart niet heeft terwijl ze deze eigenlijk aan een andere speler toonde"
          },
          {
            en: "Making incorrect accusations",
            es: "Hacer acusaciones incorrectas",
            de: "Falsche Anklagen erheben",
            nl: "Onjuiste beschuldigingen maken"
          },
          {
            en: "Forgetting to mark cards",
            es: "Olvidar marcar cartas",
            de: "Vergessen Karten zu markieren",
            nl: "Vergeten kaarten te markeren"
          },
          {
            en: "Losing your detective sheet",
            es: "Perder tu hoja de detective",
            de: "Ihr Detektivblatt verlieren",
            nl: "Je detectiveblad verliezen"
          }
        ],
        correct: 0,
        explanation: {
          en: "When Player A passes on a suggestion and Player B disproves it, novices might incorrectly assume A doesn't hold any of those cards. However, A might hold one or more but chose not to show it because B showed first. Expert players carefully track who can versus who did disprove suggestions.",
          es: "Cuando el Jugador A pasa en una sugerencia y el Jugador B la refuta, los novatos podrían asumir incorrectamente que A no tiene ninguna de esas cartas. Sin embargo, A podría tener una o más pero eligió no mostrarla porque B mostró primero. Los jugadores expertos rastrean cuidadosamente quién puede versus quién refutó sugerencias.",
          de: "Wenn Spieler A bei einem Vorschlag passt und Spieler B ihn widerlegt, könnten Anfänger fälschlicherweise annehmen A hält keine dieser Karten. Jedoch könnte A eine oder mehrere halten aber wählte sie nicht zu zeigen weil B zuerst zeigte. Expertenspieler verfolgen sorgfältig wer kann versus wer Vorschläge widerlegte.",
          nl: "Wanneer Speler A past bij een suggestie en Speler B deze weerlegt, zouden beginners ten onrechte kunnen aannemen dat A geen van die kaarten heeft. Echter, A zou er een of meer kunnen hebben maar koos ze niet te tonen omdat B eerst toonde. Expertspelers volgen zorgvuldig wie kan versus wie suggesties weerlegde."
        }
      },
      {
        question: {
          en: "How do expert players use 'constraint propagation'?",
          es: "¿Cómo usan los jugadores expertos la 'propagación de restricciones'?",
          de: "Wie nutzen Expertenspieler 'Constraint-Propagierung'?",
          nl: "Hoe gebruiken expertspelers 'beperkingspropagatie'?"
        },
        options: [
          {
            en: "Automatically deriving new conclusions when one deduction creates logical constraints on other possibilities",
            es: "Derivar automáticamente nuevas conclusiones cuando una deducción crea restricciones lógicas en otras posibilidades",
            de: "Automatisch neue Schlussfolgerungen ableiten wenn eine Deduktion logische Einschränkungen für andere Möglichkeiten schafft",
            nl: "Automatisch nieuwe conclusies afleiden wanneer één deductie logische beperkingen creëert op andere mogelijkheden"
          },
          {
            en: "Spreading cards across the table",
            es: "Esparcir cartas por la mesa",
            de: "Karten über den Tisch verteilen",
            nl: "Kaarten over de tafel verspreiden"
          },
          {
            en: "Sharing information with all players",
            es: "Compartir información con todos los jugadores",
            de: "Information mit allen Spielern teilen",
            nl: "Informatie delen met alle spelers"
          },
          {
            en: "Moving quickly between rooms",
            es: "Moverse rápidamente entre habitaciones",
            de: "Schnell zwischen Räumen bewegen",
            nl: "Snel bewegen tussen kamers"
          }
        ],
        correct: 0,
        explanation: {
          en: "When you determine the murder weapon is the Candlestick, this immediately tells you all players' Candlestick cards are known (none have it), which propagates to other deductions. Expert players mentally cascade these logical implications instantly, seeing second and third-order consequences of each new fact.",
          es: "Cuando determinas que el arma del crimen es el Candelabro, esto inmediatamente te dice que todas las cartas de Candelabro de los jugadores son conocidas (ninguno la tiene), lo que se propaga a otras deducciones. Los jugadores expertos en cascada mentalmente estas implicaciones lógicas instantáneamente, viendo consecuencias de segundo y tercer orden de cada nuevo hecho.",
          de: "Wenn Sie feststellen dass die Mordwaffe der Leuchter ist, sagt Ihnen dies sofort dass alle Leuchter-Karten der Spieler bekannt sind (keiner hat sie), was zu anderen Deduktionen propagiert. Expertenspieler kaskadieren diese logischen Implikationen mental sofort, sehen Konsequenzen zweiter und dritter Ordnung jeder neuen Tatsache.",
          nl: "Wanneer je bepaalt dat het moordwapen de Kandelaar is, vertelt dit je onmiddellijk dat alle Kandelaar-kaarten van spelers bekend zijn (niemand heeft deze), wat propageert naar andere deducties. Expertspelers cascaderen deze logische implicaties mentaal onmiddellijk, zien tweede en derde-orde consequenties van elk nieuw feit."
        }
      },
      {
        question: {
          en: "What is 'endgame acceleration' strategy?",
          es: "¿Qué es la estrategia de 'aceleración de final de juego'?",
          de: "Was ist 'Endspiel-Beschleunigung'-Strategie?",
          nl: "Wat is 'eindspelversnelling'-strategie?"
        },
        options: [
          {
            en: "Shifting from information gathering to solution confirmation once sufficient confidence is reached",
            es: "Cambiar de recopilación de información a confirmación de solución una vez que se alcanza confianza suficiente",
            de: "Von Informationssammlung zu Lösungsbestätigung wechseln sobald ausreichendes Vertrauen erreicht ist",
            nl: "Verschuiven van informatieverzameling naar oplossingsbevestiging zodra voldoende vertrouwen is bereikt"
          },
          {
            en: "Playing faster at the end",
            es: "Jugar más rápido al final",
            de: "Am Ende schneller spielen",
            nl: "Sneller spelen aan het einde"
          },
          {
            en: "Guessing randomly to end quickly",
            es: "Adivinar al azar para terminar rápido",
            de: "Zufällig raten, um schnell zu enden",
            nl: "Willekeurig raden om snel te eindigen"
          },
          {
            en: "Always making final accusation immediately",
            es: "Siempre hacer acusación final inmediatamente",
            de: "Immer sofort endgültige Anklage erheben",
            nl: "Altijd onmiddellijk definitieve beschuldiging maken"
          }
        ],
        correct: 0,
        explanation: {
          en: "Expert players recognize the transition point where additional information gathering provides diminishing returns. Once they've narrowed the solution to high probability, they stop making broad suggestions and instead make targeted confirmations of their hypothesis before making the final accusation.",
          es: "Los jugadores expertos reconocen el punto de transición donde la recopilación adicional de información proporciona rendimientos decrecientes. Una vez que han reducido la solución a alta probabilidad, dejan de hacer sugerencias amplias y en su lugar hacen confirmaciones dirigidas de su hipótesis antes de hacer la acusación final.",
          de: "Expertenspieler erkennen den Übergangspunkt wo zusätzliche Informationssammlung abnehmende Erträge liefert. Sobald sie die Lösung auf hohe Wahrscheinlichkeit eingegrenzt haben, hören sie auf breite Vorschläge zu machen und machen stattdessen gezielte Bestätigungen ihrer Hypothese vor der endgültigen Anklage.",
          nl: "Expertspelers herkennen het overgangspunt waar aanvullende informatieverzameling afnemende opbrengsten oplevert. Zodra ze de oplossing hebben vernauwd tot hoge waarschijnlijkheid, stoppen ze met brede suggesties maken en maken in plaats daarvan gerichte bevestigingen van hun hypothese voor de definitieve beschuldiging."
        }
      },
      {
        question: {
          en: "What is the 'Information Cascade Effect' in multiplayer Cluedo?",
          es: "¿Qué es el 'Efecto de Cascada de Información' en Cluedo multijugador?",
          de: "Was ist der 'Informationskaskaden-Effekt' im Mehrspieler-Cluedo?",
          nl: "Wat is het 'Informatiecascade-effect' in multiplayer Cluedo?"
        },
        options: [
          {
            en: "How one player's suggestion creates information for all players, with cascading deductive consequences",
            es: "Cómo la sugerencia de un jugador crea información para todos los jugadores, con consecuencias deductivas en cascada",
            de: "Wie der Vorschlag eines Spielers Information für alle Spieler schafft, mit kaskadierenden deduktiven Konsequenzen",
            nl: "Hoe de suggestie van één speler informatie creëert voor alle spelers, met cascaderende deductieve consequenties"
          },
          {
            en: "Water damage to game cards",
            es: "Daño por agua a las cartas del juego",
            de: "Wasserschaden an Spielkarten",
            nl: "Waterschade aan spelkaarten"
          },
          {
            en: "Players copying each other's suggestions",
            es: "Jugadores copiando sugerencias de otros",
            de: "Spieler kopieren Vorschläge anderer",
            nl: "Spelers kopiëren elkaars suggesties"
          },
          {
            en: "Falling domino effect on the board",
            es: "Efecto dominó cayendo en el tablero",
            de: "Fallender Domino-Effekt auf dem Brett",
            nl: "Vallend domino-effect op het bord"
          }
        ],
        correct: 0,
        explanation: {
          en: "When Player A suggests 'Scarlet, Rope, Library' and Player B shows a card, all players gain information - not just A. Expert C might deduce that since B showed but C's tracking indicates B doesn't have Rope or Library, B must have shown Scarlet, allowing C to eliminate Scarlet from the solution.",
          es: "Cuando el Jugador A sugiere 'Escarlata, Cuerda, Biblioteca' y el Jugador B muestra una carta, todos los jugadores ganan información - no solo A. El Experto C podría deducir que como B mostró pero el rastreo de C indica que B no tiene Cuerda o Biblioteca, B debe haber mostrado Escarlata, permitiendo a C eliminar Escarlata de la solución.",
          de: "Wenn Spieler A 'Fräulein Gloria, Seil, Bibliothek' vorschlägt und Spieler B eine Karte zeigt, gewinnen alle Spieler Information - nicht nur A. Experte C könnte deduzieren dass da B zeigte aber C's Verfolgung anzeigt dass B weder Seil noch Bibliothek hat, B Fräulein Gloria gezeigt haben muss, was C erlaubt Fräulein Gloria aus der Lösung zu eliminieren.",
          nl: "Wanneer Speler A suggereert 'Rood, Touw, Bibliotheek' en Speler B een kaart toont, verkrijgen alle spelers informatie - niet alleen A. Expert C zou kunnen afleiden dat omdat B toonde maar C's tracking aangeeft dat B geen Touw of Bibliotheek heeft, B Rood moet hebben getoond, waardoor C Rood kan elimineren uit de oplossing."
        }
      },
      {
        question: {
          en: "What does 'meta-game positioning' refer to in tournament Cluedo?",
          es: "¿A qué se refiere el 'posicionamiento meta-juego' en Cluedo de torneo?",
          de: "Worauf bezieht sich 'Meta-Spiel-Positionierung' im Turnier-Cluedo?",
          nl: "Waar verwijst 'meta-spelpositionering' naar in toernooi Cluedo?"
        },
        options: [
          {
            en: "Balancing win probability against expected finish position across multiple games",
            es: "Equilibrar probabilidad de ganar contra posición de finalización esperada en múltiples juegos",
            de: "Gewinnwahrscheinlichkeit gegen erwartete Endposition über mehrere Spiele balancieren",
            nl: "Winkans balanceren tegen verwachte eindpositie over meerdere spellen"
          },
          {
            en: "Physical seating arrangements",
            es: "Arreglos de asientos físicos",
            de: "Physische Sitzanordnungen",
            nl: "Fysieke zitarrangementen"
          },
          {
            en: "Discussion of game rules",
            es: "Discusión de reglas del juego",
            de: "Diskussion über Spielregeln",
            nl: "Discussie over spelregels"
          },
          {
            en: "Board position advantages",
            es: "Ventajas de posición del tablero",
            de: "Brettpositionsvorteile",
            nl: "Bordpositievoordelen"
          }
        ],
        correct: 0,
        explanation: {
          en: "In tournament formats with multiple games, expert players sometimes optimize for consistent placement rather than pure win rate. Taking a risky 60% win/40% elimination strategy might be worse than a conservative 30% win/70% second-place approach if tournament scoring rewards consistency.",
          es: "En formatos de torneo con múltiples juegos, los jugadores expertos a veces optimizan para colocación consistente en lugar de tasa de victoria pura. Tomar una estrategia arriesgada de 60% victoria/40% eliminación podría ser peor que un enfoque conservador de 30% victoria/70% segundo lugar si la puntuación del torneo recompensa la consistencia.",
          de: "In Turnierformaten mit mehreren Spielen optimieren Expertenspieler manchmal für konsistente Platzierung statt reiner Gewinnrate. Eine riskante 60% Gewinn/40% Eliminierung-Strategie könnte schlechter sein als ein konservativer 30% Gewinn/70% Zweiter-Platz-Ansatz wenn Turnierwertung Konsistenz belohnt.",
          nl: "In toernooiformaten met meerdere spellen optimaliseren expertspelers soms voor consistente plaatsing in plaats van pure winratio. Een risicovolle 60% win/40% eliminatie-strategie kan slechter zijn dan een conservatieve 30% win/70% tweede-plaats benadering als toernooiscore consistentie beloont."
        }
      },
      {
        question: {
          en: "What is the theoretical maximum information gain from a single suggestion?",
          es: "¿Cuál es la ganancia máxima teórica de información de una sola sugerencia?",
          de: "Was ist der theoretische maximale Informationsgewinn aus einem einzelnen Vorschlag?",
          nl: "Wat is de theoretische maximale informatiewinst uit een enkele suggestie?"
        },
        options: [
          {
            en: "Varies based on game state, but can eliminate multiple solution possibilities across all three categories simultaneously",
            es: "Varía según el estado del juego, pero puede eliminar múltiples posibilidades de solución en las tres categorías simultáneamente",
            de: "Variiert basierend auf Spielzustand, kann aber mehrere Lösungsmöglichkeiten über alle drei Kategorien gleichzeitig eliminieren",
            nl: "Varieert op basis van spelstaat, maar kan meerdere oplossingmogelijkheden over alle drie categorieën tegelijkertijd elimineren"
          },
          {
            en: "Always exactly three cards",
            es: "Siempre exactamente tres cartas",
            de: "Immer genau drei Karten",
            nl: "Altijd precies drie kaarten"
          },
          {
            en: "One bit of information",
            es: "Un bit de información",
            de: "Ein Bit Information",
            nl: "Eén bit informatie"
          },
          {
            en: "Zero if nobody disproves it",
            es: "Cero si nadie la refuta",
            de: "Null wenn niemand sie widerlegt",
            nl: "Nul als niemand het weerlegt"
          }
        ],
        correct: 0,
        explanation: {
          en: "A perfectly crafted suggestion can provide enormous information - if no one can disprove it, you've potentially identified all three solution elements. Even when disproved, knowing which players can't disprove it eliminates multiple cards from those players' possible holdings across all categories.",
          es: "Una sugerencia perfectamente elaborada puede proporcionar información enorme - si nadie puede refutarla, potencialmente has identificado los tres elementos de solución. Incluso cuando se refuta, saber qué jugadores no pueden refutarla elimina múltiples cartas de las posesiones posibles de esos jugadores en todas las categorías.",
          de: "Ein perfekt gestalteter Vorschlag kann enorme Information liefern - wenn niemand ihn widerlegen kann, haben Sie potenziell alle drei Lösungselemente identifiziert. Selbst wenn widerlegt, eliminiert das Wissen welche Spieler ihn nicht widerlegen können mehrere Karten aus den möglichen Beständen dieser Spieler über alle Kategorien.",
          nl: "Een perfect gecreëerde suggestie kan enorme informatie opleveren - als niemand het kan weerleggen, heb je potentieel alle drie oplossingselementen geïdentificeerd. Zelfs wanneer weerlegd, elimineert weten welke spelers het niet kunnen weerleggen meerdere kaarten uit de mogelijke bezittingen van die spelers over alle categorieën."
        }
      },
      {
        question: {
          en: "What advanced concept is 'probabilistic pruning'?",
          es: "¿Qué concepto avanzado es la 'poda probabilística'?",
          de: "Was ist das fortgeschrittene Konzept 'probabilistisches Beschneiden'?",
          nl: "Wat is het geavanceerde concept 'probabilistisch snoeien'?"
        },
        options: [
          {
            en: "Systematically testing high-probability hypotheses while deprioritizing low-probability scenarios",
            es: "Probar sistemáticamente hipótesis de alta probabilidad mientras se da menos prioridad a escenarios de baja probabilidad",
            de: "Systematisch hochwahrscheinliche Hypothesen testen bei Zurückstellung niedrigwahrscheinlicher Szenarien",
            nl: "Systematisch hoogwaarschijnlijke hypothesen testen terwijl laagwaarschijnlijke scenario's worden gedeprioriseerd"
          },
          {
            en: "Removing cards from the deck",
            es: "Eliminar cartas del mazo",
            de: "Karten aus dem Deck entfernen",
            nl: "Kaarten uit het deck verwijderen"
          },
          {
            en: "Cutting game time short",
            es: "Acortar el tiempo de juego",
            de: "Spielzeit verkürzen",
            nl: "Speeltijd verkorten"
          },
          {
            en: "Eliminating players from the game",
            es: "Eliminar jugadores del juego",
            de: "Spieler aus dem Spiel eliminieren",
            nl: "Spelers uit het spel elimineren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Rather than exhaustively testing all possibilities equally, expert players identify which solutions have become highly improbable based on accumulated evidence and focus testing on remaining likely scenarios. This accelerates solution convergence by avoiding wasted suggestions on near-impossible combinations.",
          es: "En lugar de probar exhaustivamente todas las posibilidades por igual, los jugadores expertos identifican qué soluciones se han vuelto altamente improbables basándose en evidencia acumulada y enfocan pruebas en escenarios probables restantes. Esto acelera la convergencia de solución evitando sugerencias desperdiciadas en combinaciones casi imposibles.",
          de: "Statt alle Möglichkeiten erschöpfend gleich zu testen, identifizieren Expertenspieler welche Lösungen basierend auf akkumulierten Beweisen hochgradig unwahrscheinlich geworden sind und fokussieren Tests auf verbleibende wahrscheinliche Szenarien. Dies beschleunigt Lösungskonvergenz durch Vermeidung verschwendeter Vorschläge auf nahezu unmögliche Kombinationen.",
          nl: "In plaats van exhaustief alle mogelijkheden gelijk te testen, identificeren expertspelers welke oplossingen hoogst onwaarschijnlijk zijn geworden op basis van geaccumuleerd bewijs en focussen testen op resterende waarschijnlijke scenario's. Dit versnelt oplossingsconvergentie door verspilde suggesties op bijna onmogelijke combinaties te vermijden."
        }
      },
      {
        question: {
          en: "How do champions handle 'incomplete information games' theory in Cluedo?",
          es: "¿Cómo manejan los campeones la teoría de 'juegos de información incompleta' en Cluedo?",
          de: "Wie handhaben Champions die Theorie 'Spiele mit unvollständiger Information' in Cluedo?",
          nl: "Hoe gaan kampioenen om met de theorie van 'onvolledige informatiegames' in Cluedo?"
        },
        options: [
          {
            en: "Applying game-theoretic principles to optimize decisions under uncertainty with hidden information",
            es: "Aplicar principios de teoría de juegos para optimizar decisiones bajo incertidumbre con información oculta",
            de: "Spieltheoretische Prinzipien anwenden, um Entscheidungen unter Unsicherheit mit versteckter Information zu optimieren",
            nl: "Speltheoretische principes toepassen om beslissingen te optimaliseren onder onzekerheid met verborgen informatie"
          },
          {
            en: "Refusing to play without complete information",
            es: "Negarse a jugar sin información completa",
            de: "Sich weigern zu spielen ohne vollständige Information",
            nl: "Weigeren te spelen zonder volledige informatie"
          },
          {
            en: "Asking other players for their cards",
            es: "Pedir a otros jugadores sus cartas",
            de: "Andere Spieler nach ihren Karten fragen",
            nl: "Andere spelers om hun kaarten vragen"
          },
          {
            en: "Making random guesses",
            es: "Hacer conjeturas aleatorias",
            de: "Zufällige Vermutungen anstellen",
            nl: "Willekeurige gissingen maken"
          }
        ],
        correct: 0,
        explanation: {
          en: "Cluedo is a classic incomplete information game where players make optimal decisions despite not knowing the solution or opponents' cards. Champions use expected value calculations, Bayesian inference, and information set analysis - the same techniques used in poker and other strategic games with hidden information.",
          es: "Cluedo es un juego clásico de información incompleta donde los jugadores toman decisiones óptimas a pesar de no conocer la solución o las cartas de los oponentes. Los campeones usan cálculos de valor esperado, inferencia bayesiana y análisis de conjunto de información - las mismas técnicas usadas en póker y otros juegos estratégicos con información oculta.",
          de: "Cluedo ist ein klassisches Spiel mit unvollständiger Information wo Spieler optimale Entscheidungen treffen trotz Nichtwissen der Lösung oder Gegnerkarten. Champions nutzen Erwartungswertberechnungen, Bayesianische Inferenz und Informationsmengenanalyse - dieselben Techniken die in Poker und anderen strategischen Spielen mit versteckter Information verwendet werden.",
          nl: "Cluedo is een klassiek onvolledig informatiegame waar spelers optimale beslissingen nemen ondanks het niet kennen van de oplossing of tegenstanderskaarten. Kampioenen gebruiken verwachte waarde berekeningen, Bayesiaanse inferentie en informatieset-analyse - dezelfde technieken gebruikt in poker en andere strategische games met verborgen informatie."
        }
      },
      {
        question: {
          en: "What is the 'Ultimate Cluedo Mastery Test' according to top theorists?",
          es: "¿Qué es la 'Prueba de Maestría Definitiva de Cluedo' según los principales teóricos?",
          de: "Was ist der 'Ultimative Cluedo-Meisterschaftstest' laut Top-Theoretikern?",
          nl: "Wat is de 'Ultieme Cluedo-meesterschapstest' volgens toptheoretici?"
        },
        options: [
          {
            en: "Consistently solving in minimum turns against expert opponents while maintaining optimal risk-reward balance",
            es: "Resolver consistentemente en turnos mínimos contra oponentes expertos mientras mantiene equilibrio óptimo riesgo-recompensa",
            de: "Konsistent in minimalen Zügen gegen Expertengegner lösen bei Aufrechterhaltung optimaler Risiko-Ertrags-Balance",
            nl: "Consistent oplossen in minimale beurten tegen experttegenstanders terwijl optimale risico-beloningsbalans wordt gehandhaafd"
          },
          {
            en: "Winning a single game",
            es: "Ganar un solo juego",
            de: "Ein einzelnes Spiel gewinnen",
            nl: "Een enkel spel winnen"
          },
          {
            en: "Memorizing all possible combinations",
            es: "Memorizar todas las combinaciones posibles",
            de: "Alle möglichen Kombinationen auswendig lernen",
            nl: "Alle mogelijke combinaties onthouden"
          },
          {
            en: "Playing the fastest game",
            es: "Jugar el juego más rápido",
            de: "Das schnellste Spiel spielen",
            nl: "Het snelste spel spelen"
          }
        ],
        correct: 0,
        explanation: {
          en: "True mastery isn't measured by single victories but by consistently optimal performance - solving efficiently without excessive risk, adapting to different opponents and game states, and maintaining high win rates across hundreds of games while demonstrating deep understanding of probability, psychology, and game theory.",
          es: "La verdadera maestría no se mide por victorias individuales sino por rendimiento consistentemente óptimo - resolver eficientemente sin riesgo excesivo, adaptarse a diferentes oponentes y estados de juego, y mantener altas tasas de victoria en cientos de juegos mientras demuestra comprensión profunda de probabilidad, psicología y teoría de juegos.",
          de: "Wahre Meisterschaft wird nicht durch einzelne Siege gemessen sondern durch konsistent optimale Leistung - effizient lösen ohne exzessives Risiko, Anpassung an verschiedene Gegner und Spielzustände, und Aufrechterhaltung hoher Gewinnraten über Hunderte von Spielen bei Demonstration tiefen Verständnisses von Wahrscheinlichkeit, Psychologie und Spieltheorie.",
          nl: "Ware meesterschap wordt niet gemeten door enkele overwinningen maar door consistent optimale prestaties - efficiënt oplossen zonder excessief risico, aanpassen aan verschillende tegenstanders en spelstanden, en hoge winratio's behouden over honderden spellen terwijl diep begrip van waarschijnlijkheid, psychologie en speltheorie wordt gedemonstreerd."
        }
,
    {
      question: {
        en: "What is the game tree minimax strategy?",
        es: "What is the game tree minimax strategy?",
        de: "What is the game tree minimax strategy?",
        nl: "What is the game tree minimax strategy?"
      },
      options: [
        {
          en: "Minimizing maximum possible moves for opponents to solve",
          es: "Minimizing maximum possible moves for opponents to solve",
          de: "Minimizing maximum possible moves for opponents to solve",
          nl: "Minimizing maximum possible moves for opponents to solve"
        },
        {
          en: "Tree climbing",
          es: "Tree climbing",
          de: "Tree climbing",
          nl: "Tree climbing"
        },
        {
          en: "Gardening strategy",
          es: "Gardening strategy",
          de: "Gardening strategy",
          nl: "Gardening strategy"
        },
        {
          en: "Branch selection",
          es: "Branch selection",
          de: "Branch selection",
          nl: "Branch selection"
        }
      ],
      correct: 0,
      explanation: {
        en: "Advanced strategy involves making suggestions that, regardless of what is shown, give opponents minimal useful information.",
        es: "Advanced strategy involves making suggestions that, regardless of what is shown, give opponents minimal useful information.",
        de: "Advanced strategy involves making suggestions that, regardless of what is shown, give opponents minimal useful information.",
        nl: "Advanced strategy involves making suggestions that, regardless of what is shown, give opponents minimal useful information."
      }
    }
,
    {
      question: {
        en: "What is exhaustive elimination theory?",
        es: "What is exhaustive elimination theory?",
        de: "What is exhaustive elimination theory?",
        nl: "What is exhaustive elimination theory?"
      },
      options: [
        {
          en: "Systematically testing all possibilities until only solution remains",
          es: "Systematically testing all possibilities until only solution remains",
          de: "Systematically testing all possibilities until only solution remains",
          nl: "Systematically testing all possibilities until only solution remains"
        },
        {
          en: "Being very thorough",
          es: "Being very thorough",
          de: "Being very thorough",
          nl: "Being very thorough"
        },
        {
          en: "Checking everything",
          es: "Checking everything",
          de: "Checking everything",
          nl: "Checking everything"
        },
        {
          en: "Complete search",
          es: "Complete search",
          de: "Complete search",
          nl: "Complete search"
        }
      ],
      correct: 0,
      explanation: {
        en: "Mathematical approach to Clue involves organized testing of hypotheses to guarantee solution through elimination.",
        es: "Mathematical approach to Clue involves organized testing of hypotheses to guarantee solution through elimination.",
        de: "Mathematical approach to Clue involves organized testing of hypotheses to guarantee solution through elimination.",
        nl: "Mathematical approach to Clue involves organized testing of hypotheses to guarantee solution through elimination."
      }
    }
,
    {
      question: {
        en: "What is optimal accusation threshold?",
        es: "What is optimal accusation threshold?",
        de: "What is optimal accusation threshold?",
        nl: "What is optimal accusation threshold?"
      },
      options: [
        {
          en: "Making accusation when probability of correctness exceeds expected value of waiting",
          es: "Making accusation when probability of correctness exceeds expected value of waiting",
          de: "Making accusation when probability of correctness exceeds expected value of waiting",
          nl: "Making accusation when probability of correctness exceeds expected value of waiting"
        },
        {
          en: "Knowing when to guess",
          es: "Knowing when to guess",
          de: "Knowing when to guess",
          nl: "Knowing when to guess"
        },
        {
          en: "Good timing",
          es: "Good timing",
          de: "Good timing",
          nl: "Good timing"
        },
        {
          en: "Lucky moment",
          es: "Lucky moment",
          de: "Lucky moment",
          nl: "Lucky moment"
        }
      ],
      correct: 0,
      explanation: {
        en: "Game theory dictates accusing when your confidence level and opponent proximity make waiting riskier than potential wrong accusation penalty.",
        es: "Game theory dictates accusing when your confidence level and opponent proximity make waiting riskier than potential wrong accusation penalty.",
        de: "Game theory dictates accusing when your confidence level and opponent proximity make waiting riskier than potential wrong accusation penalty.",
        nl: "Game theory dictates accusing when your confidence level and opponent proximity make waiting riskier than potential wrong accusation penalty."
      }
    }
,
    {
      question: {
        en: "What is information theory application?",
        es: "What is information theory application?",
        de: "What is information theory application?",
        nl: "What is information theory application?"
      },
      options: [
        {
          en: "Maximizing entropy reduction with each suggestion to gain maximum information",
          es: "Maximizing entropy reduction with each suggestion to gain maximum information",
          de: "Maximizing entropy reduction with each suggestion to gain maximum information",
          nl: "Maximizing entropy reduction with each suggestion to gain maximum information"
        },
        {
          en: "Using data science",
          es: "Using data science",
          de: "Using data science",
          nl: "Using data science"
        },
        {
          en: "Library research",
          es: "Library research",
          de: "Library research",
          nl: "Library research"
        },
        {
          en: "Information gathering",
          es: "Information gathering",
          de: "Information gathering",
          nl: "Information gathering"
        }
      ],
      correct: 0,
      explanation: {
        en: "Each suggestion should be chosen to maximally reduce uncertainty about the solution, measured by information entropy reduction.",
        es: "Each suggestion should be chosen to maximally reduce uncertainty about the solution, measured by information entropy reduction.",
        de: "Each suggestion should be chosen to maximally reduce uncertainty about the solution, measured by information entropy reduction.",
        nl: "Each suggestion should be chosen to maximally reduce uncertainty about the solution, measured by information entropy reduction."
      }
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
