// Game Theory - Level 1: Strategic Decision Making & Nash Equilibria
(function() {
  const level1 = {
    name: {
      en: "Strategic Decision Making & Nash Equilibria",
      es: "Toma de Decisiones Estratégicas y Equilibrios de Nash",
      de: "Strategische Entscheidungsfindung und Nash-Gleichgewichte",
      nl: "Strategische Besluitvorming en Nash Evenwichten"
    },
    questions: [
      {
        question: {
          en: "What defines a Nash equilibrium in game theory?",
          es: "¿Qué define un equilibrio de Nash en la teoría de juegos?",
          de: "Was definiert ein Nash-Gleichgewicht in der Spieltheorie?",
          nl: "Wat definieert een Nash evenwicht in speltheorie?"
        },
        options: [
          { en: "No player can unilaterally improve their payoff by changing strategy", es: "Ningún jugador puede mejorar unilateralmente su ganancia cambiando de estrategia", de: "Kein Spieler kann seine Auszahlung durch einseitige Strategieänderung verbessern", nl: "Geen speler kan eenzijdig hun uitbetaling verbeteren door strategie te veranderen" },
          { en: "All players receive equal payoffs", es: "Todos los jugadores reciben ganancias iguales", de: "Alle Spieler erhalten gleiche Auszahlungen", nl: "Alle spelers ontvangen gelijke uitbetalingen" },
          { en: "The game reaches maximum total utility", es: "El juego alcanza la máxima utilidad total", de: "Das Spiel erreicht maximale Gesamtnutzen", nl: "Het spel bereikt maximale totale nuttigheid" },
          { en: "Players cooperate to achieve optimal outcomes", es: "Los jugadores cooperan para lograr resultados óptimos", de: "Spieler kooperieren für optimale Ergebnisse", nl: "Spelers werken samen voor optimale uitkomsten" }
        ],
        correct: 0,
        explanation: {
          en: "A Nash equilibrium occurs when each player's strategy is optimal given the other players' strategies. No player has an incentive to deviate unilaterally because doing so would not improve their payoff.",
          es: "Un equilibrio de Nash ocurre cuando la estrategia de cada jugador es óptima dados las estrategias de los otros jugadores. Ningún jugador tiene incentivo para desviarse unilateralmente porque hacerlo no mejoraría su ganancia.",
          de: "Ein Nash-Gleichgewicht tritt auf, wenn die Strategie jedes Spielers optimal ist, gegeben die Strategien der anderen Spieler. Kein Spieler hat einen Anreiz, einseitig abzuweichen, da dies seine Auszahlung nicht verbessern würde.",
          nl: "Een Nash evenwicht treedt op wanneer elke speler's strategie optimaal is gegeven de strategieën van de andere spelers. Geen speler heeft een incentief om eenzijdig af te wijken omdat dit hun uitbetaling niet zou verbeteren."
        }
      },
      {
        question: {
          en: "In the Prisoner's Dilemma, what is the dominant strategy for rational players?",
          es: "En el Dilema del Prisionero, ¿cuál es la estrategia dominante para jugadores racionales?",
          de: "Was ist im Gefangenendilemma die dominante Strategie für rationale Spieler?",
          nl: "Wat is in het Gevangenendilemma de dominante strategie voor rationele spelers?"
        },
        options: [
          { en: "Defect (betray)", es: "Traicionar", de: "Verrat", nl: "Verraden" },
          { en: "Cooperate", es: "Cooperar", de: "Kooperieren", nl: "Samenwerken" },
          { en: "Randomize between strategies", es: "Aleatorizar entre estrategias", de: "Zwischen Strategien randomisieren", nl: "Willekeurig kiezen tussen strategieën" },
          { en: "Wait for the opponent's move", es: "Esperar el movimiento del oponente", de: "Auf den Zug des Gegners warten", nl: "Wachten op de zet van de tegenstander" }
        ],
        correct: 0,
        explanation: {
          en: "Defection is the dominant strategy because regardless of what the other player does, defecting always yields a higher payoff than cooperating. This leads to the paradox where both players defect despite mutual cooperation being better for both.",
          es: "La traición es la estrategia dominante porque independientemente de lo que haga el otro jugador, traicionar siempre produce una ganancia mayor que cooperar. Esto lleva a la paradoja donde ambos jugadores traicionan a pesar de que la cooperación mutua sería mejor para ambos.",
          de: "Verrat ist die dominante Strategie, weil unabhängig vom Verhalten des anderen Spielers der Verrat immer eine höhere Auszahlung als Kooperation bringt. Dies führt zum Paradox, dass beide Spieler verraten, obwohl gegenseitige Kooperation für beide besser wäre.",
          nl: "Verraad is de dominante strategie omdat ongeacht wat de andere speler doet, verraden altijd een hogere uitbetaling oplevert dan samenwerken. Dit leidt tot de paradox waarbij beide spelers verraden ondanks dat wederzijdse samenwerking beter zou zijn voor beiden."
        }
      },
      {
        question: {
          en: "What characterizes a zero-sum game?",
          es: "¿Qué caracteriza un juego de suma cero?",
          de: "Was charakterisiert ein Nullsummenspiel?",
          nl: "Wat kenmerkt een nulsomspel?"
        },
        options: [
          { en: "One player's gain equals another player's loss", es: "La ganancia de un jugador es igual a la pérdida de otro jugador", de: "Der Gewinn eines Spielers entspricht dem Verlust eines anderen", nl: "De winst van een speler is gelijk aan het verlies van een andere speler" },
          { en: "All players start with zero payoff", es: "Todos los jugadores comienzan con ganancia cero", de: "Alle Spieler beginnen mit null Auszahlung", nl: "Alle spelers beginnen met nul uitbetaling" },
          { en: "The game has no winners", es: "El juego no tiene ganadores", de: "Das Spiel hat keine Gewinner", nl: "Het spel heeft geen winnaars" },
          { en: "Total payoff increases over time", es: "La ganancia total aumenta con el tiempo", de: "Die Gesamtauszahlung steigt über die Zeit", nl: "Totale uitbetaling neemt toe over tijd" }
        ],
        correct: 0,
        explanation: {
          en: "In zero-sum games, the total payoff to all players sums to zero. What one player gains, another must lose by exactly the same amount, making these purely competitive situations with no mutual benefit possible.",
          es: "En los juegos de suma cero, la ganancia total de todos los jugadores suma cero. Lo que un jugador gana, otro debe perder exactamente la misma cantidad, haciendo estas situaciones puramente competitivas sin beneficio mutuo posible.",
          de: "In Nullsummenspielen summieren sich die Gesamtauszahlungen aller Spieler zu null. Was ein Spieler gewinnt, muss ein anderer um genau denselben Betrag verlieren, wodurch dies rein kompetitive Situationen ohne möglichen gegenseitigen Nutzen sind.",
          nl: "In nulsomspellen tellen de totale uitbetalingen aan alle spelers op tot nul. Wat een speler wint, moet een ander met precies hetzelfde bedrag verliezen, waardoor dit puur competitieve situaties zijn zonder mogelijke wederzijdse voordelen."
        }
      },
      {
        question: {
          en: "What is a mixed strategy in game theory?",
          es: "¿Qué es una estrategia mixta en la teoría de juegos?",
          de: "Was ist eine gemischte Strategie in der Spieltheorie?",
          nl: "Wat is een gemengde strategie in speltheorie?"
        },
        options: [
          { en: "Randomly choosing between pure strategies with specified probabilities", es: "Elegir aleatoriamente entre estrategias puras con probabilidades especificadas", de: "Zufällige Wahl zwischen reinen Strategien mit festgelegten Wahrscheinlichkeiten", nl: "Willekeurig kiezen tussen pure strategieën met gespecificeerde waarschijnlijkheden" },
          { en: "Combining elements from different games", es: "Combinar elementos de diferentes juegos", de: "Elemente verschiedener Spiele kombinieren", nl: "Elementen van verschillende spellen combineren" },
          { en: "Using multiple objectives simultaneously", es: "Usar múltiples objetivos simultáneamente", de: "Mehrere Ziele gleichzeitig verwenden", nl: "Meerdere doelstellingen tegelijkertijd gebruiken" },
          { en: "Adapting strategy based on opponent's history", es: "Adaptar la estrategia basándose en el historial del oponente", de: "Strategie basierend auf Gegnergeschichte anpassen", nl: "Strategie aanpassen gebaseerd op tegenstander's geschiedenis" }
        ],
        correct: 0,
        explanation: {
          en: "A mixed strategy involves randomly selecting among available pure strategies according to specific probability distributions. This randomization can be optimal when no pure strategy Nash equilibrium exists, keeping opponents uncertain about your choices.",
          es: "Una estrategia mixta involucra seleccionar aleatoriamente entre estrategias puras disponibles según distribuciones de probabilidad específicas. Esta aleatorización puede ser óptima cuando no existe un equilibrio de Nash de estrategia pura, manteniendo a los oponentes inciertos sobre tus elecciones.",
          de: "Eine gemischte Strategie beinhaltet die zufällige Auswahl unter verfügbaren reinen Strategien nach spezifischen Wahrscheinlichkeitsverteilungen. Diese Randomisierung kann optimal sein, wenn kein Nash-Gleichgewicht reiner Strategien existiert, wodurch Gegner über Ihre Wahl im Ungewissen bleiben.",
          nl: "Een gemengde strategie houdt in dat willekeurig wordt gekozen uit beschikbare pure strategieën volgens specifieke waarschijnlijkheidsverdelingen. Deze randomisatie kan optimaal zijn wanneer er geen pure strategie Nash evenwicht bestaat, waardoor tegenstanders onzeker blijven over uw keuzes."
        }
      },
      {
        question: {
          en: "What does the concept of Pareto efficiency mean in game theory?",
          es: "¿Qué significa el concepto de eficiencia de Pareto en la teoría de juegos?",
          de: "Was bedeutet das Konzept der Pareto-Effizienz in der Spieltheorie?",
          nl: "Wat betekent het concept van Pareto efficiëntie in speltheorie?"
        },
        options: [
          { en: "No player can improve without making another player worse off", es: "Ningún jugador puede mejorar sin empeorar a otro jugador", de: "Kein Spieler kann sich verbessern, ohne einen anderen schlechter zu stellen", nl: "Geen speler kan verbeteren zonder een andere speler slechter af te maken" },
          { en: "All players achieve their maximum possible payoff", es: "Todos los jugadores logran su máxima ganancia posible", de: "Alle Spieler erreichen ihre maximal mögliche Auszahlung", nl: "Alle spelers behalen hun maximaal mogelijke uitbetaling" },
          { en: "The game reaches Nash equilibrium", es: "El juego alcanza el equilibrio de Nash", de: "Das Spiel erreicht Nash-Gleichgewicht", nl: "Het spel bereikt Nash evenwicht" },
          { en: "Players use identical strategies", es: "Los jugadores usan estrategias idénticas", de: "Spieler verwenden identische Strategien", nl: "Spelers gebruiken identieke strategieën" }
        ],
        correct: 0,
        explanation: {
          en: "Pareto efficiency means no player can improve their outcome without making at least one other player worse off. A Pareto efficient outcome represents optimal resource allocation where further improvements require trade-offs between players.",
          es: "La eficiencia de Pareto significa que ningún jugador puede mejorar su resultado sin empeorar al menos a otro jugador. Un resultado eficiente de Pareto representa una asignación óptima de recursos donde mejoras adicionales requieren compensaciones entre jugadores.",
          de: "Pareto-Effizienz bedeutet, dass kein Spieler sein Ergebnis verbessern kann, ohne mindestens einen anderen Spieler schlechter zu stellen. Ein Pareto-effizientes Ergebnis stellt eine optimale Ressourcenverteilung dar, wo weitere Verbesserungen Abwägungen zwischen Spielern erfordern.",
          nl: "Pareto efficiëntie betekent dat geen speler hun uitkomst kan verbeteren zonder ten minste een andere speler slechter af te maken. Een Pareto efficiënte uitkomst vertegenwoordigt optimale hulpbronverdeling waar verdere verbeteringen afwegingen tussen spelers vereisen."
        }
      },
      {
        question: {
          en: "What is the Revenue Equivalence Theorem in auction theory?",
          es: "¿Qué es el Teorema de Equivalencia de Ingresos en la teoría de subastas?",
          de: "Was ist das Erlösäquivalenztheorem in der Auktionstheorie?",
          nl: "Wat is het Revenue Equivalentie Theorema in veilingtheorie?"
        },
        options: [
          { en: "All standard auction formats yield the same expected revenue under certain conditions", es: "Todos los formatos de subasta estándar generan los mismos ingresos esperados bajo ciertas condiciones", de: "Alle Standard-Auktionsformate erzielen unter bestimmten Bedingungen den gleichen erwarteten Erlös", nl: "Alle standaard veilingformaten leveren dezelfde verwachte inkomsten op onder bepaalde voorwaarden" },
          { en: "Revenues increase proportionally with the number of bidders", es: "Los ingresos aumentan proporcionalmente con el número de oferentes", de: "Erlöse steigen proportional zur Anzahl der Bieter", nl: "Inkomsten stijgen proportioneel met het aantal bieders" },
          { en: "All bidders pay the same amount regardless of their bids", es: "Todos los oferentes pagan la misma cantidad independientemente de sus ofertas", de: "Alle Bieter zahlen den gleichen Betrag unabhängig von ihren Geboten", nl: "Alle bieders betalen hetzelfde bedrag ongeacht hun biedingen" },
          { en: "Revenue is maximized when reserves prices are set to zero", es: "Los ingresos se maximizan cuando los precios de reserva se establecen en cero", de: "Erlöse werden maximiert, wenn Mindestpreise auf null gesetzt werden", nl: "Inkomsten worden gemaximaliseerd wanneer reserveprijzen op nul worden gezet" }
        ],
        correct: 0,
        explanation: {
          en: "The Revenue Equivalence Theorem states that under symmetric, independent private values with risk-neutral bidders, all standard auction mechanisms (first-price sealed-bid, second-price sealed-bid, English, Dutch) yield the same expected revenue to the seller.",
          es: "El Teorema de Equivalencia de Ingresos establece que bajo valores privados simétricos e independientes con oferentes neutrales al riesgo, todos los mecanismos de subasta estándar generan los mismos ingresos esperados para el vendedor.",
          de: "Das Erlösäquivalenztheorem besagt, dass unter symmetrischen, unabhängigen privaten Werten mit risikoneutralen Bietern alle Standard-Auktionsmechanismen den gleichen erwarteten Erlös für den Verkäufer erzielen.",
          nl: "Het Revenue Equivalentie Theorema stelt dat onder symmetrische, onafhankelijke private waarden met risiconeutrale bieders, alle standaard veilingmechanismen dezelfde verwachte inkomsten voor de verkoper opleveren."
        }
      },
      {
        question: {
          en: "In evolutionary game theory, what is an Evolutionarily Stable Strategy (ESS)?",
          es: "En la teoría de juegos evolutivos, ¿qué es una Estrategia Evolutivamente Estable (ESS)?",
          de: "Was ist in der evolutionären Spieltheorie eine Evolutionär Stabile Strategie (ESS)?",
          nl: "Wat is in evolutionaire speltheorie een Evolutionair Stabiele Strategie (ESS)?"
        },
        options: [
          { en: "A strategy that cannot be invaded by any alternative mutant strategy", es: "Una estrategia que no puede ser invadida por ninguna estrategia mutante alternativa", de: "Eine Strategie, die von keiner alternativen Mutantenstrategie überfallen werden kann", nl: "Een strategie die niet kan worden binnengevallen door een alternatieve mutante strategie" },
          { en: "The strategy that maximizes population fitness", es: "La estrategia que maximiza la aptitud poblacional", de: "Die Strategie, die die Populationsfitness maximiert", nl: "De strategie die populatiefitness maximaliseert" },
          { en: "A strategy that evolves fastest over time", es: "Una estrategia que evoluciona más rápido con el tiempo", de: "Eine Strategie, die sich am schnellsten über die Zeit entwickelt", nl: "Een strategie die het snelst evolueert over tijd" },
          { en: "The strategy used by the dominant species", es: "La estrategia utilizada por la especie dominante", de: "Die Strategie der dominanten Art", nl: "De strategie gebruikt door de dominante soort" }
        ],
        correct: 0,
        explanation: {
          en: "An ESS is a refinement of Nash equilibrium in evolutionary contexts. A strategy is evolutionarily stable if, when adopted by the population, it cannot be invaded by a small group using an alternative strategy. The ESS concept captures stability against mutations in evolutionary processes.",
          es: "Una ESS es un refinamiento del equilibrio de Nash en contextos evolutivos. Una estrategia es evolutivamente estable si, cuando es adoptada por la población, no puede ser invadida por un pequeño grupo que use una estrategia alternativa.",
          de: "Eine ESS ist eine Verfeinerung des Nash-Gleichgewichts in evolutionären Kontexten. Eine Strategie ist evolutionär stabil, wenn sie, wenn von der Population übernommen, nicht von einer kleinen Gruppe mit einer alternativen Strategie überfallen werden kann.",
          nl: "Een ESS is een verfijning van Nash evenwicht in evolutionaire contexten. Een strategie is evolutionair stabiel als deze, wanneer aangenomen door de populatie, niet kan worden binnengevallen door een kleine groep die een alternatieve strategie gebruikt."
        }
      },
      {
        question: {
          en: "What is the Shapley value in cooperative game theory?",
          es: "¿Qué es el valor de Shapley en la teoría de juegos cooperativos?",
          de: "Was ist der Shapley-Wert in der kooperativen Spieltheorie?",
          nl: "Wat is de Shapley waarde in coöperatieve speltheorie?"
        },
        options: [
          { en: "A unique solution concept that fairly distributes the total payoff among players based on their marginal contributions", es: "Un concepto de solución único que distribuye equitativamente la ganancia total entre jugadores basándose en sus contribuciones marginales", de: "Ein einzigartiges Lösungskonzept, das die Gesamtauszahlung fair auf Spieler basierend auf ihren Grenzbeiträgen verteilt", nl: "Een uniek oplossingsconcepten dat de totale uitbetaling eerlijk verdeelt onder spelers gebaseerd op hun marginale bijdragen" },
          { en: "The maximum payoff any single player can achieve", es: "La máxima ganancia que cualquier jugador individual puede lograr", de: "Die maximale Auszahlung, die ein einzelner Spieler erreichen kann", nl: "De maximale uitbetaling die een enkele speler kan behalen" },
          { en: "The optimal coalition structure for all players", es: "La estructura de coalición óptima para todos los jugadores", de: "Die optimale Koalitionsstruktur für alle Spieler", nl: "De optimale coalitiestructuur voor alle spelers" },
          { en: "The probability of forming successful coalitions", es: "La probabilidad de formar coaliciones exitosas", de: "Die Wahrscheinlichkeit erfolgreicher Koalitionsbildung", nl: "De waarschijnlijkheid van het vormen van succesvolle coalities" }
        ],
        correct: 0,
        explanation: {
          en: "The Shapley value is a solution concept that assigns a unique payoff to each player in a cooperative game, representing their expected marginal contribution across all possible orderings of players joining the grand coalition. It satisfies efficiency, symmetry, dummy, and additivity axioms.",
          es: "El valor de Shapley es un concepto de solución que asigna una ganancia única a cada jugador en un juego cooperativo, representando su contribución marginal esperada a través de todos los ordenamientos posibles de jugadores uniéndose a la gran coalición.",
          de: "Der Shapley-Wert ist ein Lösungskonzept, das jedem Spieler in einem kooperativen Spiel eine einzigartige Auszahlung zuweist, die seinen erwarteten Grenzbeitrag über alle möglichen Anordnungen von Spielern darstellt, die der großen Koalition beitreten.",
          nl: "De Shapley waarde is een oplossingsconcepten dat een unieke uitbetaling toewijst aan elke speler in een coöperatief spel, die hun verwachte marginale bijdrage vertegenwoordigt over alle mogelijke volgordes van spelers die zich bij de grote coalitie voegen."
        }
      },
      {
        question: {
          en: "What characterizes a Bayesian game?",
          es: "¿Qué caracteriza un juego bayesiano?",
          de: "Was charakterisiert ein bayesianisches Spiel?",
          nl: "Wat kenmerkt een Bayesiaans spel?"
        },
        options: [
          { en: "Players have incomplete information about other players' types or payoffs", es: "Los jugadores tienen información incompleta sobre los tipos o ganancias de otros jugadores", de: "Spieler haben unvollständige Informationen über andere Spielertypen oder Auszahlungen", nl: "Spelers hebben onvolledige informatie over andere spelers' types of uitbetalingen" },
          { en: "Players update strategies based on historical data", es: "Los jugadores actualizan estrategias basándose en datos históricos", de: "Spieler aktualisieren Strategien basierend auf historischen Daten", nl: "Spelers updaten strategieën gebaseerd op historische data" },
          { en: "The game involves statistical learning algorithms", es: "El juego involucra algoritmos de aprendizaje estadístico", de: "Das Spiel beinhaltet statistische Lernalgorithmen", nl: "Het spel behelst statistische leeralgoritmen" },
          { en: "Payoffs are determined by probability distributions", es: "Las ganancias se determinan por distribuciones de probabilidad", de: "Auszahlungen werden durch Wahrscheinlichkeitsverteilungen bestimmt", nl: "Uitbetalingen worden bepaald door waarschijnlijkheidsverdelingen" }
        ],
        correct: 0,
        explanation: {
          en: "Bayesian games model situations where players have private information about their own characteristics (types) and hold beliefs about other players' types. Players make decisions based on their beliefs and expected payoffs, leading to Bayesian Nash equilibria.",
          es: "Los juegos bayesianos modelan situaciones donde los jugadores tienen información privada sobre sus propias características (tipos) y mantienen creencias sobre los tipos de otros jugadores.",
          de: "Bayesianische Spiele modellieren Situationen, in denen Spieler private Informationen über ihre eigenen Eigenschaften (Typen) haben und Überzeugungen über andere Spielertypen hegen.",
          nl: "Bayesiaanse spellen modelleren situaties waar spelers private informatie hebben over hun eigen kenmerken (types) en overtuigingen hebben over andere spelers' types."
        }
      },
      {
        question: {
          en: "What is the Folk Theorem in repeated games?",
          es: "¿Qué es el Teorema Folk en juegos repetidos?",
          de: "Was ist das Volkssatz-Theorem in wiederholten Spielen?",
          nl: "Wat is het Folk Theorema in herhaalde spellen?"
        },
        options: [
          { en: "Any individually rational payoff can be sustained as a Nash equilibrium in infinitely repeated games", es: "Cualquier ganancia individualmente racional puede sostenerse como equilibrio de Nash en juegos repetidos infinitamente", de: "Jede individuell rationale Auszahlung kann als Nash-Gleichgewicht in unendlich wiederholten Spielen aufrechterhalten werden", nl: "Elke individueel rationele uitbetaling kan worden volgehouden als Nash evenwicht in oneindig herhaalde spellen" },
          { en: "Players always cooperate in repeated interactions", es: "Los jugadores siempre cooperan en interacciones repetidas", de: "Spieler kooperieren immer in wiederholten Interaktionen", nl: "Spelers werken altijd samen in herhaalde interacties" },
          { en: "Folk wisdom determines optimal strategies", es: "La sabiduría popular determina estrategias óptimas", de: "Volksweisheit bestimmt optimale Strategien", nl: "Volkswijsheid bepaalt optimale strategieën" },
          { en: "Repetition eliminates all Nash equilibria", es: "La repetición elimina todos los equilibrios de Nash", de: "Wiederholung eliminiert alle Nash-Gleichgewichte", nl: "Herhaling elimineert alle Nash evenwichten" }
        ],
        correct: 0,
        explanation: {
          en: "The Folk Theorem states that in infinitely repeated games with sufficiently patient players (low discount factors), any feasible and individually rational payoff profile can be supported as a Nash equilibrium outcome using appropriate trigger strategies and punishments.",
          es: "El Teorema Folk establece que en juegos repetidos infinitamente con jugadores suficientemente pacientes, cualquier perfil de ganancias factible e individualmente racional puede sostenerse como resultado de equilibrio de Nash.",
          de: "Das Volkssatz-Theorem besagt, dass in unendlich wiederholten Spielen mit ausreichend geduldigen Spielern jedes machbare und individuell rationale Auszahlungsprofil als Nash-Gleichgewichtsergebnis unterstützt werden kann.",
          nl: "Het Folk Theorema stelt dat in oneindig herhaalde spellen met voldoende geduldige spelers, elk haalbaar en individueel rationeel uitbetalingsprofiel kan worden ondersteund als Nash evenwichtuitkomst."
        }
      },
      {
        question: {
          en: "What is mechanism design often called?",
          es: "¿Cómo se llama a menudo el diseño de mecanismos?",
          de: "Wie wird Mechanismusdesign oft genannt?",
          nl: "Hoe wordt mechanismeontwerp vaak genoemd?"
        },
        options: [
          { en: "Reverse game theory", es: "Teoría de juegos inversa", de: "Umgekehrte Spieltheorie", nl: "Omgekeerde speltheorie" },
          { en: "Forward game theory", es: "Teoría de juegos hacia adelante", de: "Vorwärts-Spieltheorie", nl: "Voorwaartse speltheorie" },
          { en: "Applied game theory", es: "Teoría de juegos aplicada", de: "Angewandte Spieltheorie", nl: "Toegepaste speltheorie" },
          { en: "Theoretical game theory", es: "Teoría de juegos teórica", de: "Theoretische Spieltheorie", nl: "Theoretische speltheorie" }
        ],
        correct: 0,
        explanation: {
          en: "Mechanism design is called 'reverse game theory' because instead of analyzing behavior in a given game structure, it designs games/institutions to achieve desired outcomes. The mechanism designer specifies rules to induce rational agents to behave in socially optimal ways.",
          es: "El diseño de mecanismos se llama 'teoría de juegos inversa' porque en lugar de analizar el comportamiento en una estructura de juego dada, diseña juegos/instituciones para lograr resultados deseados.",
          de: "Mechanismusdesign wird 'umgekehrte Spieltheorie' genannt, weil es anstatt Verhalten in einer gegebenen Spielstruktur zu analysieren, Spiele/Institutionen entwirft, um gewünschte Ergebnisse zu erreichen.",
          nl: "Mechanismeontwerp wordt 'omgekeerde speltheorie' genoemd omdat het in plaats van gedrag in een gegeven spelstructuur te analyseren, spellen/instituties ontwerpt om gewenste uitkomsten te bereiken."
        }
      },
      {
        question: {
          en: "What is the core in cooperative game theory?",
          es: "¿Qué es el núcleo en la teoría de juegos cooperativos?",
          de: "Was ist der Kern in der kooperativen Spieltheorie?",
          nl: "Wat is de kern in coöperatieve speltheorie?"
        },
        options: [
          { en: "The set of undominated allocations where no coalition has incentive to deviate", es: "El conjunto de asignaciones no dominadas donde ninguna coalición tiene incentivo para desviarse", de: "Die Menge nicht dominierter Allokationen, wo keine Koalition einen Anreiz zur Abweichung hat", nl: "De verzameling van niet-gedomineerde toewijzingen waar geen coalitie een incentief heeft om af te wijken" },
          { en: "The most important players in the game", es: "Los jugadores más importantes del juego", de: "Die wichtigsten Spieler im Spiel", nl: "De belangrijkste spelers in het spel" },
          { en: "The minimum number of players needed for cooperation", es: "El número mínimo de jugadores necesarios para la cooperación", de: "Die Mindestanzahl von Spielern, die für Kooperation benötigt wird", nl: "Het minimum aantal spelers nodig voor samenwerking" },
          { en: "The central strategy all players should adopt", es: "La estrategia central que todos los jugadores deberían adoptar", de: "Die zentrale Strategie, die alle Spieler übernehmen sollten", nl: "De centrale strategie die alle spelers zouden moeten aannemen" }
        ],
        correct: 0,
        explanation: {
          en: "The core consists of feasible allocations that cannot be improved upon by any coalition. An allocation is in the core if no group of players can guarantee themselves a better outcome by forming their own coalition and ignoring the proposed allocation.",
          es: "El núcleo consiste en asignaciones factibles que no pueden ser mejoradas por ninguna coalición. Una asignación está en el núcleo si ningún grupo de jugadores puede garantizarse un mejor resultado formando su propia coalición.",
          de: "Der Kern besteht aus machbaren Allokationen, die von keiner Koalition verbessert werden können. Eine Allokation ist im Kern, wenn keine Gruppe von Spielern sich ein besseres Ergebnis garantieren kann.",
          nl: "De kern bestaat uit haalbare toewijzingen die door geen coalitie kunnen worden verbeterd. Een toewijzing is in de kern als geen groep spelers zichzelf een beter resultaat kan garanderen."
        }
      },
      {
        question: {
          en: "What is signaling in games with incomplete information?",
          es: "¿Qué es la señalización en juegos con información incompleta?",
          de: "Was ist Signalisierung in Spielen mit unvollständiger Information?",
          nl: "Wat is signalering in spellen met onvolledige informatie?"
        },
        options: [
          { en: "Actions taken by informed players to credibly communicate their private information", es: "Acciones tomadas por jugadores informados para comunicar creíblemente su información privada", de: "Handlungen informierter Spieler zur glaubwürdigen Kommunikation ihrer privaten Information", nl: "Acties ondernomen door geïnformeerde spelers om geloofwaardig hun private informatie te communiceren" },
          { en: "Random moves to confuse opponents", es: "Movimientos aleatorios para confundir a los oponentes", de: "Zufällige Züge zur Verwirrung der Gegner", nl: "Willekeurige zetten om tegenstanders te verwarren" },
          { en: "Direct communication between players", es: "Comunicación directa entre jugadores", de: "Direkte Kommunikation zwischen Spielern", nl: "Directe communicatie tussen spelers" },
          { en: "External announcements about game rules", es: "Anuncios externos sobre las reglas del juego", de: "Externe Ankündigungen über Spielregeln", nl: "Externe aankondigingen over spelregels" }
        ],
        correct: 0,
        explanation: {
          en: "Signaling occurs when informed players take costly actions that credibly reveal their private information to uninformed players. The key requirement is that the signal must be more costly for 'bad' types than 'good' types, creating a separating equilibrium.",
          es: "La señalización ocurre cuando jugadores informados toman acciones costosas que revelan creíblemente su información privada a jugadores no informados. El requisito clave es que la señal debe ser más costosa para tipos 'malos' que para tipos 'buenos'.",
          de: "Signalisierung tritt auf, wenn informierte Spieler kostspielige Handlungen unternehmen, die ihre private Information glaubwürdig an uninformierte Spieler weitergeben. Die Schlüsselanforderung ist, dass das Signal für 'schlechte' Typen kostspieliger sein muss als für 'gute'.",
          nl: "Signalering treedt op wanneer geïnformeerde spelers kostbare acties ondernemen die geloofwaardig hun private informatie onthullen aan ongeïnformeerde spelers. De belangrijkste vereiste is dat het signaal kostbaarder moet zijn voor 'slechte' types dan 'goede' types."
        }
      },
      {
        question: {
          en: "What is a Vickrey auction?",
          es: "¿Qué es una subasta Vickrey?",
          de: "Was ist eine Vickrey-Auktion?",
          nl: "Wat is een Vickrey veiling?"
        },
        options: [
          { en: "A second-price sealed-bid auction where the winner pays the second-highest bid", es: "Una subasta de sobre cerrado a segundo precio donde el ganador paga la segunda oferta más alta", de: "Eine zweitpreisige versiegelte Auktion, bei der der Gewinner das zweithöchste Gebot zahlt", nl: "Een tweede-prijs verzegelde veiling waar de winnaar het op één na hoogste bod betaalt" },
          { en: "An ascending price auction with open bidding", es: "Una subasta de precio ascendente con ofertas abiertas", de: "Eine aufsteigende Preisauktion mit offenen Geboten", nl: "Een stijgende prijs veiling met open biedingen" },
          { en: "A descending price auction where the first bidder wins", es: "Una subasta de precio descendente donde el primer oferente gana", de: "Eine absteigende Preisauktion, wo der erste Bieter gewinnt", nl: "Een dalende prijs veiling waar de eerste bieder wint" },
          { en: "A multi-unit auction for identical goods", es: "Una subasta de múltiples unidades para bienes idénticos", de: "Eine Mehreinheiten-Auktion für identische Güter", nl: "Een multi-unit veiling voor identieke goederen" }
        ],
        correct: 0,
        explanation: {
          en: "A Vickrey auction is a sealed-bid auction where bidders submit bids simultaneously, the highest bidder wins, but pays only the second-highest bid. This mechanism is strategy-proof: bidding one's true valuation is a dominant strategy.",
          es: "Una subasta Vickrey es una subasta de sobre cerrado donde los oferentes presentan ofertas simultáneamente, el oferente más alto gana, pero paga solo la segunda oferta más alta. Este mecanismo es a prueba de estrategia.",
          de: "Eine Vickrey-Auktion ist eine versiegelte Auktion, bei der Bieter gleichzeitig Gebote abgeben, der höchste Bieter gewinnt, aber nur das zweithöchste Gebot zahlt. Dieser Mechanismus ist strategiesicher.",
          nl: "Een Vickrey veiling is een verzegelde veiling waar bieders gelijktijdig biedingen indienen, de hoogste bieder wint, maar betaalt alleen het op één na hoogste bod. Dit mechanisme is strategieproof."
        }
      },
      {
        question: {
          en: "What is the difference between screening and signaling models?",
          es: "¿Cuál es la diferencia entre modelos de filtrado y señalización?",
          de: "Was ist der Unterschied zwischen Screening- und Signalisierungsmodellen?",
          nl: "Wat is het verschil tussen screening en signalering modellen?"
        },
        options: [
          { en: "In screening, uninformed players move first; in signaling, informed players move first", es: "En el filtrado, los jugadores no informados se mueven primero; en la señalización, los jugadores informados se mueven primero", de: "Beim Screening bewegen sich uninformierte Spieler zuerst; beim Signalisieren bewegen sich informierte Spieler zuerst", nl: "Bij screening bewegen ongeïnformeerde spelers eerst; bij signalering bewegen geïnformeerde spelers eerst" },
          { en: "Screening uses random selection, signaling uses deliberate choice", es: "El filtrado usa selección aleatoria, la señalización usa elección deliberada", de: "Screening verwendet zufällige Auswahl, Signalisierung verwendet bewusste Wahl", nl: "Screening gebruikt willekeurige selectie, signalering gebruikt bewuste keuze" },
          { en: "Screening reveals all information, signaling reveals partial information", es: "El filtrado revela toda la información, la señalización revela información parcial", de: "Screening enthüllt alle Informationen, Signalisierung enthüllt teilweise Informationen", nl: "Screening onthult alle informatie, signalering onthult gedeeltelijke informatie" },
          { en: "Screening is used in cooperative games, signaling in competitive games", es: "El filtrado se usa en juegos cooperativos, la señalización en juegos competitivos", de: "Screening wird in kooperativen Spielen verwendet, Signalisierung in kompetitiven Spielen", nl: "Screening wordt gebruikt in coöperatieve spellen, signalering in competitieve spellen" }
        ],
        correct: 0,
        explanation: {
          en: "In screening models, uninformed parties move first by offering contracts/mechanisms designed to induce informed parties to reveal their types. In signaling models, informed parties move first by taking actions that reveal their private information.",
          es: "En modelos de filtrado, las partes no informadas se mueven primero ofreciendo contratos/mecanismos diseñados para inducir a las partes informadas a revelar sus tipos. En modelos de señalización, las partes informadas se mueven primero.",
          de: "In Screening-Modellen bewegen sich uninformierte Parteien zuerst, indem sie Verträge/Mechanismen anbieten, die darauf ausgelegt sind, informierte Parteien zur Enthüllung ihrer Typen zu bewegen. In Signalisierungsmodellen bewegen sich informierte Parteien zuerst.",
          nl: "In screening modellen bewegen ongeïnformeerde partijen eerst door contracten/mechanismen aan te bieden die ontworpen zijn om geïnformeerde partijen hun types te laten onthullen. In signalering modellen bewegen geïnformeerde partijen eerst."
        }
      },
      {
        question: {
          en: "What is the Condorcet Paradox in voting theory?",
          es: "¿Qué es la Paradoja de Condorcet en la teoría de votación?",
          de: "Was ist das Condorcet-Paradox in der Wahltheorie?",
          nl: "Wat is de Condorcet Paradox in stemtheorie?"
        },
        options: [
          { en: "Majority preference can be intransitive: A beats B, B beats C, but C beats A", es: "La preferencia mayoritaria puede ser intransitiva: A vence a B, B vence a C, pero C vence a A", de: "Mehrheitspräferenz kann intransitiv sein: A schlägt B, B schlägt C, aber C schlägt A", nl: "Meerderheidsvoorkeur kan intransitief zijn: A verslaat B, B verslaat C, maar C verslaat A" },
          { en: "No voting system can satisfy all fairness criteria simultaneously", es: "Ningún sistema de votación puede satisfacer todos los criterios de equidad simultáneamente", de: "Kein Wahlsystem kann alle Fairnesskriterien gleichzeitig erfüllen", nl: "Geen stemsysteem kan alle eerlijkheidscriteria tegelijkertijd voldoen" },
          { en: "The candidate with most first-place votes doesn't always win", es: "El candidato con más votos de primer lugar no siempre gana", de: "Der Kandidat mit den meisten Erststimmen gewinnt nicht immer", nl: "De kandidaat met de meeste eerste plaats stemmen wint niet altijd" },
          { en: "Voters can manipulate outcomes by strategic voting", es: "Los votantes pueden manipular resultados mediante votación estratégica", de: "Wähler können Ergebnisse durch strategisches Wählen manipulieren", nl: "Stemers kunnen uitkomsten manipuleren door strategisch stemmen" }
        ],
        correct: 0,
        explanation: {
          en: "The Condorcet Paradox shows that collective preferences can be intransitive even when individual preferences are transitive. With three alternatives A, B, C and appropriate voter preferences, majority rule can produce A > B > C > A, creating a cycle with no clear winner.",
          es: "La Paradoja de Condorcet muestra que las preferencias colectivas pueden ser intransitivas incluso cuando las preferencias individuales son transitivas. Con tres alternativas y preferencias de votantes apropiadas, la regla mayoritaria puede producir un ciclo.",
          de: "Das Condorcet-Paradox zeigt, dass kollektive Präferenzen intransitiv sein können, selbst wenn individuelle Präferenzen transitiv sind. Mit drei Alternativen kann Mehrheitsregel einen Zyklus ohne klaren Gewinner produzieren.",
          nl: "De Condorcet Paradox toont dat collectieve voorkeuren intransitief kunnen zijn zelfs wanneer individuele voorkeuren transitief zijn. Met drie alternatieven kan meerderheidsregel een cyclus zonder duidelijke winnaar produceren."
        }
      },
      {
        question: {
          en: "What is Arrow's Impossibility Theorem?",
          es: "¿Qué es el Teorema de Imposibilidad de Arrow?",
          de: "Was ist Arrows Unmöglichkeitstheorem?",
          nl: "Wat is Arrow's Onmogelijkheidstheorema?"
        },
        options: [
          { en: "No voting system can simultaneously satisfy all reasonable democratic criteria", es: "Ningún sistema de votación puede satisfacer simultáneamente todos los criterios democráticos razonables", de: "Kein Wahlsystem kann gleichzeitig alle vernünftigen demokratischen Kriterien erfüllen", nl: "Geen stemsysteem kan tegelijkertijd alle redelijke democratische criteria vervullen" },
          { en: "Majority rule always leads to inconsistent outcomes", es: "La regla mayoritaria siempre lleva a resultados inconsistentes", de: "Mehrheitsregel führt immer zu inkonsistenten Ergebnissen", nl: "Meerderheidsregel leidt altijd tot inconsistente uitkomsten" },
          { en: "Democratic voting requires at least five participants", es: "La votación democrática requiere al menos cinco participantes", de: "Demokratisches Wählen erfordert mindestens fünf Teilnehmer", nl: "Democratisch stemmen vereist ten minste vijf deelnemers" },
          { en: "Strategic voting eliminates the possibility of fair elections", es: "La votación estratégica elimina la posibilidad de elecciones justas", de: "Strategisches Wählen eliminiert die Möglichkeit fairer Wahlen", nl: "Strategisch stemmen elimineert de mogelijkheid van eerlijke verkiezingen" }
        ],
        correct: 0,
        explanation: {
          en: "Arrow's Impossibility Theorem proves that no social choice function can simultaneously satisfy unrestricted domain, non-dictatorship, Pareto efficiency, and independence of irrelevant alternatives. This fundamental result shows inherent limitations in democratic aggregation of preferences.",
          es: "El Teorema de Imposibilidad de Arrow prueba que ninguna función de elección social puede satisfacer simultáneamente dominio irrestricto, no-dictadura, eficiencia de Pareto e independencia de alternativas irrelevantes.",
          de: "Arrows Unmöglichkeitstheorem beweist, dass keine soziale Wahlfunktion gleichzeitig uneingeschränkte Domäne, Nicht-Diktatur, Pareto-Effizienz und Unabhängigkeit irrelevanter Alternativen erfüllen kann.",
          nl: "Arrow's Onmogelijkheidstheorema bewijst dat geen sociale keuze functie tegelijkertijd onbeperkt domein, niet-dictatuur, Pareto efficiëntie, en onafhankelijkheid van irrelevante alternatieven kan vervullen."
        }
      },
      {
        question: {
          en: "What is a matching mechanism in market design?",
          es: "¿Qué es un mecanismo de emparejamiento en el diseño de mercados?",
          de: "Was ist ein Zuordnungsmechanismus im Marktdesign?",
          nl: "Wat is een matching mechanisme in marktontwerp?"
        },
        options: [
          { en: "An algorithm that pairs agents on both sides of a market based on preferences", es: "Un algoritmo que empareja agentes en ambos lados de un mercado basándose en preferencias", de: "Ein Algorithmus, der Agenten auf beiden Seiten eines Marktes basierend auf Präferenzen paart", nl: "Een algoritme dat agenten aan beide kanten van een markt paart gebaseerd op voorkeuren" },
          { en: "A price-setting mechanism for clearing markets", es: "Un mecanismo de fijación de precios para limpiar mercados", de: "Ein Preissetzungsmechanismus zur Marktbereinigung", nl: "Een prijszettingsmechanisme voor het opruimen van markten" },
          { en: "A system for equalizing supply and demand", es: "Un sistema para igualar oferta y demanda", de: "Ein System zur Angleichung von Angebot und Nachfrage", nl: "Een systeem voor het gelijkmaken van vraag en aanbod" },
          { en: "A regulatory framework for market competition", es: "Un marco regulatorio para la competencia del mercado", de: "Ein Regulierungsrahmen für Marktwettbewerb", nl: "Een regulatoir kader voor marktconcurrentie" }
        ],
        correct: 0,
        explanation: {
          en: "Matching mechanisms solve allocation problems in two-sided markets where money transfers may not be possible or desirable, such as medical residency matching, school choice, or kidney exchange. The goal is to find stable, strategy-proof, and efficient matchings.",
          es: "Los mecanismos de emparejamiento resuelven problemas de asignación en mercados de dos lados donde las transferencias de dinero pueden no ser posibles o deseables, como emparejamiento de residencias médicas o intercambio de riñones.",
          de: "Zuordnungsmechanismen lösen Allokationsprobleme in zweiseitigen Märkten, wo Geldtransfers möglicherweise nicht möglich oder erwünscht sind, wie medizinische Facharztausbildung oder Nierentausch.",
          nl: "Matching mechanismen lossen toewijzingsproblemen op in tweezijdige markten waar geldoverdrachten mogelijk niet mogelijk of wenselijk zijn, zoals medische residency matching of nieruitwisseling."
        }
      },
      {
        question: {
          en: "What is the stable marriage problem?",
          es: "¿Qué es el problema del matrimonio estable?",
          de: "Was ist das Problem der stabilen Ehe?",
          nl: "Wat is het stabiele huwelijksprobleem?"
        },
        options: [
          { en: "Finding a matching where no pair would prefer to be matched with each other over their current partners", es: "Encontrar un emparejamiento donde ninguna pareja preferiría estar emparejada entre sí sobre sus parejas actuales", de: "Ein Matching finden, wo kein Paar lieber miteinander als mit ihren aktuellen Partnern gepaart wäre", nl: "Het vinden van een matching waar geen paar liever met elkaar zou zijn gekoppeld dan met hun huidige partners" },
          { en: "Determining optimal marriage contracts in economic terms", es: "Determinar contratos matrimoniales óptimos en términos económicos", de: "Optimale Eheverträge in wirtschaftlichen Begriffen bestimmen", nl: "Het bepalen van optimale huwelijkscontracten in economische termen" },
          { en: "Analyzing divorce rates using game theory", es: "Analizar tasas de divorcio usando teoría de juegos", de: "Scheidungsraten mit Spieltheorie analysieren", nl: "Het analyseren van scheidingspercentages met behulp van speltheorie" },
          { en: "Calculating the probability of successful marriages", es: "Calcular la probabilidad de matrimonios exitosos", de: "Die Wahrscheinlichkeit erfolgreicher Ehen berechnen", nl: "Het berekenen van de waarschijnlijkheid van succesvolle huwelijken" }
        ],
        correct: 0,
        explanation: {
          en: "The stable marriage problem involves finding a complete matching between two equal-sized sets (traditionally men and women) such that no pair of agents would both prefer to be matched with each other rather than their assigned partners. The Gale-Shapley algorithm guarantees a stable solution.",
          es: "El problema del matrimonio estable involucra encontrar un emparejamiento completo entre dos conjuntos de igual tamaño tal que ningún par de agentes preferiría estar emparejado entre sí en lugar de con sus parejas asignadas.",
          de: "Das Problem der stabilen Ehe beinhaltet das Finden eines vollständigen Matchings zwischen zwei gleichgroßen Mengen, sodass kein Agentenpaar lieber miteinander als mit ihren zugewiesenen Partnern gepaart wäre.",
          nl: "Het stabiele huwelijksprobleem behelst het vinden van een complete matching tussen twee gelijk grote sets zodat geen paar agenten liever met elkaar zou zijn gekoppeld dan met hun toegewezen partners."
        }
      },
      {
        question: {
          en: "What is behavioral game theory?",
          es: "¿Qué es la teoría de juegos comportamental?",
          de: "Was ist Verhaltens-Spieltheorie?",
          nl: "Wat is gedragsspeltheorie?"
        },
        options: [
          { en: "The study of how actual human behavior deviates from game-theoretic predictions", es: "El estudio de cómo el comportamiento humano real se desvía de las predicciones de la teoría de juegos", de: "Das Studium davon, wie tatsächliches menschliches Verhalten von spieltheoretischen Vorhersagen abweicht", nl: "De studie van hoe daadwerkelijk menselijk gedrag afwijkt van speltheoretische voorspellingen" },
          { en: "Game theory applied to animal behavior", es: "Teoría de juegos aplicada al comportamiento animal", de: "Spieltheorie angewandt auf tierisches Verhalten", nl: "Speltheorie toegepast op dierlijk gedrag" },
          { en: "The mathematical modeling of strategic behavior", es: "El modelado matemático del comportamiento estratégico", de: "Die mathematische Modellierung strategischen Verhaltens", nl: "De wiskundige modellering van strategisch gedrag" },
          { en: "Game theory for psychological applications", es: "Teoría de juegos para aplicaciones psicológicas", de: "Spieltheorie für psychologische Anwendungen", nl: "Speltheorie voor psychologische toepassingen" }
        ],
        correct: 0,
        explanation: {
          en: "Behavioral game theory incorporates insights from psychology and experimental economics to understand how real people actually play games, accounting for bounded rationality, social preferences, learning, and cognitive limitations that cause deviations from traditional game theory predictions.",
          es: "La teoría de juegos comportamental incorpora perspectivas de la psicología y economía experimental para entender cómo las personas reales realmente juegan, considerando racionalidad limitada y preferencias sociales.",
          de: "Verhaltens-Spieltheorie inkorporiert Erkenntnisse aus Psychologie und experimenteller Ökonomie, um zu verstehen, wie echte Menschen tatsächlich spielen, unter Berücksichtigung begrenzter Rationalität und sozialer Präferenzen.",
          nl: "Gedragsspeltheorie incorporeert inzichten uit psychologie en experimentele economie om te begrijpen hoe echte mensen daadwerkelijk spellen spelen, rekening houdend met beperkte rationaliteit en sociale voorkeuren."
        }
      },
      {
        question: {
          en: "What is the ultimatum game and what does it reveal?",
          es: "¿Qué es el juego del ultimátum y qué revela?",
          de: "Was ist das Ultimatumspiel und was offenbart es?",
          nl: "Wat is het ultimatumspel en wat onthult het?"
        },
        options: [
          { en: "A game showing people care about fairness, not just monetary payoffs", es: "Un juego que muestra que las personas se preocupan por la equidad, no solo por las ganancias monetarias", de: "Ein Spiel, das zeigt, dass Menschen sich um Fairness kümmern, nicht nur um monetäre Auszahlungen", nl: "Een spel dat toont dat mensen geven om eerlijkheid, niet alleen om monetaire uitbetalingen" },
          { en: "A game that always results in equal splits", es: "Un juego que siempre resulta en divisiones iguales", de: "Ein Spiel, das immer zu gleichen Aufteilungen führt", nl: "Een spel dat altijd resulteert in gelijke verdelingen" },
          { en: "A game proving rational choice theory is correct", es: "Un juego que prueba que la teoría de elección racional es correcta", de: "Ein Spiel, das beweist, dass die rationale Wahltheorie korrekt ist", nl: "Een spel dat bewijst dat rationele keuzetheorie juist is" },
          { en: "A negotiation game with perfect information", es: "Un juego de negociación con información perfecta", de: "Ein Verhandlungsspiel mit perfekter Information", nl: "Een onderhandelingsspel met perfecte informatie" }
        ],
        correct: 0,
        explanation: {
          en: "In the ultimatum game, one player proposes how to split a sum of money, and the other can accept or reject (leaving both with nothing). Traditional theory predicts acceptance of any positive offer, but experiments show people often reject 'unfair' offers, revealing preferences for fairness over pure monetary gain.",
          es: "En el juego del ultimátum, un jugador propone cómo dividir una suma de dinero, y el otro puede aceptar o rechazar. La teoría tradicional predice aceptación de cualquier oferta positiva, pero los experimentos muestran que las personas a menudo rechazan ofertas 'injustas'.",
          de: "Im Ultimatumspiel schlägt ein Spieler vor, wie eine Geldsumme aufgeteilt werden soll, und der andere kann akzeptieren oder ablehnen. Die traditionelle Theorie sagt Akzeptanz jedes positiven Angebots voraus, aber Experimente zeigen, dass Menschen oft 'unfaire' Angebote ablehnen.",
          nl: "In het ultimatumspel stelt een speler voor hoe een geldbedrag te verdelen, en de ander kan accepteren of weigeren. Traditionele theorie voorspelt acceptatie van elk positief aanbod, maar experimenten tonen dat mensen vaak 'oneerlijke' aanbiedingen weigeren."
        }
      },
      {
        question: {
          en: "What is a coordination game?",
          es: "¿Qué es un juego de coordinación?",
          de: "Was ist ein Koordinationsspiel?",
          nl: "Wat is een coördinatiespel?"
        },
        options: [
          { en: "A game where players benefit from choosing the same strategy as others", es: "Un juego donde los jugadores se benefician al elegir la misma estrategia que otros", de: "Ein Spiel, wo Spieler davon profitieren, die gleiche Strategie wie andere zu wählen", nl: "Een spel waar spelers voordeel hebben van het kiezen van dezelfde strategie als anderen" },
          { en: "A game requiring external coordination mechanisms", es: "Un juego que requiere mecanismos de coordinación externos", de: "Ein Spiel, das externe Koordinationsmechanismen benötigt", nl: "Een spel dat externe coördinatiemechanismen vereist" },
          { en: "A game where players must communicate before moving", es: "Un juego donde los jugadores deben comunicarse antes de moverse", de: "Ein Spiel, wo Spieler vor dem Zug kommunizieren müssen", nl: "Een spel waar spelers moeten communiceren voor ze bewegen" },
          { en: "A game with a unique Nash equilibrium", es: "Un juego con un equilibrio de Nash único", de: "Ein Spiel mit einem eindeutigen Nash-Gleichgewicht", nl: "Een spel met een uniek Nash evenwicht" }
        ],
        correct: 0,
        explanation: {
          en: "Coordination games are characterized by multiple Nash equilibria where players want to match each other's choices. The challenge is coordinating on which equilibrium to play. Examples include choosing technology standards, meeting points, or driving on the same side of the road.",
          es: "Los juegos de coordinación se caracterizan por múltiples equilibrios de Nash donde los jugadores quieren coincidir con las elecciones de otros. El desafío es coordinar en qué equilibrio jugar.",
          de: "Koordinationsspiele sind durch mehrere Nash-Gleichgewichte charakterisiert, wo Spieler die Wahlen anderer treffen wollen. Die Herausforderung ist die Koordination darauf, welches Gleichgewicht zu spielen.",
          nl: "Coördinatiespellen worden gekenmerkt door meerdere Nash evenwichten waar spelers elkaars keuzes willen matchen. De uitdaging is coördineren op welk evenwicht te spelen."
        }
      },
      {
        question: {
          en: "What is the tragedy of the commons?",
          es: "¿Qué es la tragedia de los comunes?",
          de: "Was ist die Tragödie der Allmende?",
          nl: "Wat is de tragedie van de gemeenschappelijke gronden?"
        },
        options: [
          { en: "Individual rational behavior leads to collective irrationality and resource depletion", es: "El comportamiento racional individual lleva a la irracionalidad colectiva y agotamiento de recursos", de: "Individuell rationales Verhalten führt zu kollektiver Irrationalität und Ressourcenerschöpfung", nl: "Individueel rationeel gedrag leidt tot collectieve irrationaliteit en uitputting van hulpbronnen" },
          { en: "Common resources are always distributed equally", es: "Los recursos comunes siempre se distribuyen igualmente", de: "Gemeinsame Ressourcen werden immer gleich verteilt", nl: "Gemeenschappelijke hulpbronnen worden altijd gelijk verdeeld" },
          { en: "Public goods cannot be privately provided", es: "Los bienes públicos no pueden ser proporcionados privadamente", de: "Öffentliche Güter können nicht privat bereitgestellt werden", nl: "Publieke goederen kunnen niet privé worden verstrekt" },
          { en: "Government intervention always improves outcomes", es: "La intervención del gobierno siempre mejora los resultados", de: "Regierungseingriffe verbessern immer die Ergebnisse", nl: "Overheidsinterventie verbetert altijd de uitkomsten" }
        ],
        correct: 0,
        explanation: {
          en: "The tragedy of the commons occurs when individuals, acting rationally in their self-interest, collectively overuse and deplete shared resources. Each person has incentive to use more of the resource, but when everyone does this, the resource becomes exhausted, making everyone worse off.",
          es: "La tragedia de los comunes ocurre cuando los individuos, actuando racionalmente en su propio interés, colectivamente sobreusan y agotan recursos compartidos. Cada persona tiene incentivo para usar más del recurso.",
          de: "Die Tragödie der Allmende tritt auf, wenn Individuen, die rational in ihrem Eigeninteresse handeln, kollektiv geteilte Ressourcen übernutzen und erschöpfen. Jede Person hat einen Anreiz, mehr von der Ressource zu nutzen.",
          nl: "De tragedie van de gemeenschappelijke gronden treedt op wanneer individuen, rationeel handelend in hun eigenbelang, collectief gedeelde hulpbronnen overgebruiken en uitputten. Elke persoon heeft een incentief om meer van de hulpbron te gebruiken."
        }
      },
      {
        question: {
          en: "What is a public goods game?",
          es: "¿Qué es un juego de bienes públicos?",
          de: "Was ist ein öffentliches Güterspiel?",
          nl: "Wat is een publiek goederen spel?"
        },
        options: [
          { en: "A game modeling the provision of goods that benefit everyone regardless of contribution", es: "Un juego que modela la provisión de bienes que benefician a todos independientemente de la contribución", de: "Ein Spiel, das die Bereitstellung von Gütern modelliert, die jedem unabhängig vom Beitrag zugutekommen", nl: "Een spel dat de voorziening modelleert van goederen die iedereen ten goede komen ongeacht bijdrage" },
          { en: "A game where government provides all goods", es: "Un juego donde el gobierno proporciona todos los bienes", de: "Ein Spiel, wo die Regierung alle Güter bereitstellt", nl: "Een spel waar de overheid alle goederen verstrekt" },
          { en: "A game with only one public player", es: "Un juego con solo un jugador público", de: "Ein Spiel mit nur einem öffentlichen Spieler", nl: "Een spel met slechts één publieke speler" },
          { en: "A game played in public spaces", es: "Un juego jugado en espacios públicos", de: "Ein Spiel, das in öffentlichen Räumen gespielt wird", nl: "Een spel gespeeld in openbare ruimtes" }
        ],
        correct: 0,
        explanation: {
          en: "Public goods games model situations where individuals must decide how much to contribute to a public good that benefits everyone. The dilemma is that individuals have incentive to free-ride (contribute little while benefiting from others' contributions), leading to underprovision of the public good.",
          es: "Los juegos de bienes públicos modelan situaciones donde los individuos deben decidir cuánto contribuir a un bien público que beneficia a todos. El dilema es que los individuos tienen incentivo para aprovecharse gratuitamente.",
          de: "Öffentliche Güterspiele modellieren Situationen, wo Individuen entscheiden müssen, wie viel sie zu einem öffentlichen Gut beitragen, das jedem zugute kommt. Das Dilemma ist, dass Individuen einen Anreiz zum Trittbrettfahren haben.",
          nl: "Publiek goederen spellen modelleren situaties waar individuen moeten beslissen hoeveel bij te dragen aan een publiek goed dat iedereen ten goede komt. Het dilemma is dat individuen een incentief hebben om mee te liften."
        }
      },
      {
        question: {
          en: "What is a network game?",
          es: "¿Qué es un juego de red?",
          de: "Was ist ein Netzwerkspiel?",
          nl: "Wat is een netwerkspel?"
        },
        options: [
          { en: "A game where players' payoffs depend on their position in a network and their neighbors' actions", es: "Un juego donde las ganancias de los jugadores dependen de su posición en una red y las acciones de sus vecinos", de: "Ein Spiel, wo die Auszahlungen der Spieler von ihrer Position im Netzwerk und den Handlungen ihrer Nachbarn abhängen", nl: "Een spel waar spelers' uitbetalingen afhangen van hun positie in een netwerk en de acties van hun buren" },
          { en: "A game played over computer networks", es: "Un juego jugado a través de redes de computadoras", de: "Ein Spiel, das über Computernetzwerke gespielt wird", nl: "Een spel gespeeld over computernetwerken" },
          { en: "A game involving network infrastructure investments", es: "Un juego que involucra inversiones en infraestructura de red", de: "Ein Spiel mit Netzwerkinfrastruktur-Investitionen", nl: "Een spel met netwerk infrastructuur investeringen" },
          { en: "A game where players form networks for communication", es: "Un juego donde los jugadores forman redes para comunicación", de: "Ein Spiel, wo Spieler Netzwerke zur Kommunikation bilden", nl: "Een spel waar spelers netwerken vormen voor communicatie" }
        ],
        correct: 0,
        explanation: {
          en: "Network games study strategic interactions where players are connected in a network structure and their payoffs depend on both their own actions and the actions of their network neighbors. Examples include social learning, technology adoption, and peer effects in social networks.",
          es: "Los juegos de red estudian interacciones estratégicas donde los jugadores están conectados en una estructura de red y sus ganancias dependen tanto de sus propias acciones como de las acciones de sus vecinos de red.",
          de: "Netzwerkspiele untersuchen strategische Interaktionen, wo Spieler in einer Netzwerkstruktur verbunden sind und ihre Auszahlungen sowohl von ihren eigenen Handlungen als auch von den Handlungen ihrer Netzwerknachbarn abhängen.",
          nl: "Netwerkspellen bestuderen strategische interacties waar spelers verbonden zijn in een netwerkstructuur en hun uitbetalingen afhangen van zowel hun eigen acties als de acties van hun netwerkburen."
        }
      },
      {
        question: {
          en: "What is the concept of correlated equilibrium?",
          es: "¿Qué es el concepto de equilibrio correlacionado?",
          de: "Was ist das Konzept des korrelierten Gleichgewichts?",
          nl: "Wat is het concept van gecorreleerd evenwicht?"
        },
        options: [
          { en: "An equilibrium where players coordinate through a mediator who sends private signals", es: "Un equilibrio donde los jugadores se coordinan a través de un mediador que envía señales privadas", de: "Ein Gleichgewicht, wo Spieler sich durch einen Mediator koordinieren, der private Signale sendet", nl: "Een evenwicht waar spelers coördineren via een bemiddelaar die private signalen zendt" },
          { en: "An equilibrium where all players' strategies are perfectly correlated", es: "Un equilibrio donde las estrategias de todos los jugadores están perfectamente correlacionadas", de: "Ein Gleichgewicht, wo alle Spielerstrategien perfekt korreliert sind", nl: "Een evenwicht waar alle spelers' strategieën perfect gecorreleerd zijn" },
          { en: "A Nash equilibrium with correlated random variables", es: "Un equilibrio de Nash con variables aleatorias correlacionadas", de: "Ein Nash-Gleichgewicht mit korrelierten Zufallsvariablen", nl: "Een Nash evenwicht met gecorreleerde willekeurige variabelen" },
          { en: "An equilibrium that only exists in repeated games", es: "Un equilibrio que solo existe en juegos repetidos", de: "Ein Gleichgewicht, das nur in wiederholten Spielen existiert", nl: "Een evenwicht dat alleen bestaat in herhaalde spellen" }
        ],
        correct: 0,
        explanation: {
          en: "Correlated equilibrium generalizes Nash equilibrium by allowing players to condition their strategies on private signals from a correlating device (mediator). Players have no incentive to deviate from the recommended strategy given the signal they receive, and correlated equilibria always exist and form a convex set.",
          es: "El equilibrio correlacionado generaliza el equilibrio de Nash permitiendo a los jugadores condicionar sus estrategias en señales privadas de un dispositivo correlacionador. Los jugadores no tienen incentivo para desviarse de la estrategia recomendada.",
          de: "Korrelierte Gleichgewichte verallgemeinern Nash-Gleichgewichte, indem sie Spielern erlauben, ihre Strategien auf private Signale von einem korrelierenden Gerät zu konditionieren. Spieler haben keinen Anreiz, von der empfohlenen Strategie abzuweichen.",
          nl: "Gecorreleerd evenwicht generaliseert Nash evenwicht door spelers toe te staan hun strategieën te conditioneren op private signalen van een correlerende inrichting. Spelers hebben geen incentief om af te wijken van de aanbevolen strategie."
        }
      },
      {
        question: {
          en: "What is the trembling hand perfect equilibrium?",
          es: "¿Qué es el equilibrio perfecto de mano temblorosa?",
          de: "Was ist das zitternde Hand perfekte Gleichgewicht?",
          nl: "Wat is het trillende hand perfecte evenwicht?"
        },
        options: [
          { en: "A refinement of Nash equilibrium that remains stable even if players make small mistakes", es: "Un refinamiento del equilibrio de Nash que permanece estable incluso si los jugadores cometen pequeños errores", de: "Eine Verfeinerung des Nash-Gleichgewichts, die stabil bleibt, auch wenn Spieler kleine Fehler machen", nl: "Een verfijning van Nash evenwicht die stabiel blijft zelfs als spelers kleine fouten maken" },
          { en: "An equilibrium that accounts for players' physical limitations", es: "Un equilibrio que considera las limitaciones físicas de los jugadores", de: "Ein Gleichgewicht, das die körperlichen Grenzen der Spieler berücksichtigt", nl: "Een evenwicht dat rekening houdt met spelers' fysieke beperkingen" },
          { en: "A game theory concept for medical applications", es: "Un concepto de teoría de juegos para aplicaciones médicas", de: "Ein spieltheoretisches Konzept für medizinische Anwendungen", nl: "Een speltheorie concept voor medische toepassingen" },
          { en: "An equilibrium with imperfect information", es: "Un equilibrio con información imperfecta", de: "Ein Gleichgewicht mit unvollkommener Information", nl: "Een evenwicht met imperfecte informatie" }
        ],
        correct: 0,
        explanation: {
          en: "Trembling hand perfect equilibrium requires that strategies remain optimal even if opponents occasionally 'tremble' and choose non-optimal actions with small probability. This refinement eliminates Nash equilibria that depend on threats that would never be carried out, selecting more credible equilibria.",
          es: "El equilibrio perfecto de mano temblorosa requiere que las estrategias permanezcan óptimas incluso si los oponentes ocasionalmente 'tiemblan' y eligen acciones no óptimas con pequeña probabilidad.",
          de: "Zitternde Hand perfektes Gleichgewicht erfordert, dass Strategien optimal bleiben, auch wenn Gegner gelegentlich 'zittern' und nicht-optimale Handlungen mit kleiner Wahrscheinlichkeit wählen.",
          nl: "Trillende hand perfect evenwicht vereist dat strategieën optimaal blijven zelfs als tegenstanders af en toe 'trillen' en niet-optimale acties kiezen met kleine waarschijnlijkheid."
        }
      },
      {
        question: {
          en: "What is a proper equilibrium?",
          es: "¿Qué es un equilibrio propio?",
          de: "Was ist ein eigentliches Gleichgewicht?",
          nl: "Wat is een eigenlijk evenwicht?"
        },
        options: [
          { en: "An equilibrium where more costly mistakes are less likely than less costly ones", es: "Un equilibrio donde los errores más costosos son menos probables que los menos costosos", de: "Ein Gleichgewicht, wo kostspieligere Fehler weniger wahrscheinlich sind als weniger kostspielige", nl: "Een evenwicht waar kostbaardere fouten minder waarschijnlijk zijn dan minder kostbare" },
          { en: "An equilibrium that satisfies all solution requirements", es: "Un equilibrio que satisface todos los requisitos de solución", de: "Ein Gleichgewicht, das alle Lösungsanforderungen erfüllt", nl: "Een evenwicht dat voldoet aan alle oplossingsvoorwaarden" },
          { en: "The most appropriate equilibrium for each game", es: "El equilibrio más apropiado para cada juego", de: "Das angemessenste Gleichgewicht für jedes Spiel", nl: "Het meest passende evenwicht voor elk spel" },
          { en: "An equilibrium with proper strategy definitions", es: "Un equilibrio con definiciones de estrategia adecuadas", de: "Ein Gleichgewicht mit angemessenen Strategiedefinitionen", nl: "Een evenwicht met juiste strategiedefinities" }
        ],
        correct: 0,
        explanation: {
          en: "A proper equilibrium is a refinement where if a player trembles, the probability of more costly mistakes is smaller than less costly ones. This captures the intuition that players are more careful to avoid expensive errors, providing a more realistic model of strategic behavior under uncertainty.",
          es: "Un equilibrio propio es un refinamiento donde si un jugador tiembla, la probabilidad de errores más costosos es menor que la de errores menos costosos. Esto captura la intuición de que los jugadores son más cuidadosos para evitar errores costosos.",
          de: "Ein eigentliches Gleichgewicht ist eine Verfeinerung, wo wenn ein Spieler zittert, die Wahrscheinlichkeit kostspieligere Fehler kleiner ist als weniger kostspielige. Dies erfasst die Intuition, dass Spieler vorsichtiger sind, teure Fehler zu vermeiden.",
          nl: "Een eigenlijk evenwicht is een verfijning waar als een speler trilt, de waarschijnlijkheid van kostbaardere fouten kleiner is dan minder kostbare. Dit vangt de intuïtie dat spelers voorzichtiger zijn om dure fouten te vermijden."
        }
      },
      {
        question: {
          en: "What is the winner's curse in auction theory?",
          es: "¿Qué es la maldición del ganador en la teoría de subastas?",
          de: "Was ist der Gewinner-Fluch in der Auktionstheorie?",
          nl: "Wat is de vloek van de winnaar in veilingtheorie?"
        },
        options: [
          { en: "The highest bidder likely overestimated the item's value in common value auctions", es: "El oferente más alto probablemente sobrestimó el valor del artículo en subastas de valor común", de: "Der Höchstbieter überschätzte wahrscheinlich den Wert des Gegenstands in gemeinsamen Wertauktionen", nl: "De hoogste bieder heeft waarschijnlijk de waarde van het item overschat in gemeenschappelijke waarde veilingen" },
          { en: "Winners must pay more than the item is worth", es: "Los ganadores deben pagar más de lo que vale el artículo", de: "Gewinner müssen mehr zahlen als der Gegenstand wert ist", nl: "Winnaars moeten meer betalen dan het item waard is" },
          { en: "Auction winners always regret their decision", es: "Los ganadores de subastas siempre se arrepienten de su decisión", de: "Auktionsgewinner bereuen immer ihre Entscheidung", nl: "Veiling winnaars hebben altijd spijt van hun beslissing" },
          { en: "The winning bid is always the maximum possible", es: "La oferta ganadora siempre es la máxima posible", de: "Das Gewinnergebot ist immer das maximal mögliche", nl: "Het winnende bod is altijd het maximaal mogelijke" }
        ],
        correct: 0,
        explanation: {
          en: "The winner's curse occurs in common value auctions where the item has the same (unknown) value to all bidders. The winner is the bidder with the highest value estimate, but this suggests they may have been overly optimistic. Rational bidders should account for this by bidding below their estimate.",
          es: "La maldición del ganador ocurre en subastas de valor común donde el artículo tiene el mismo valor (desconocido) para todos los oferentes. El ganador es el oferente con la estimación de valor más alta, sugiriendo que pudo haber sido demasiado optimista.",
          de: "Der Gewinner-Fluch tritt in gemeinsamen Wertauktionen auf, wo der Gegenstand den gleichen (unbekannten) Wert für alle Bieter hat. Der Gewinner ist der Bieter mit der höchsten Wertschätzung, was darauf hindeutet, dass er zu optimistisch war.",
          nl: "De vloek van de winnaar treedt op in gemeenschappelijke waarde veilingen waar het item dezelfde (onbekende) waarde heeft voor alle bieders. De winnaar is de bieder met de hoogste waardeschatting, wat suggereert dat ze te optimistisch waren."
        }
      },
      {
        question: {
          en: "What is a mechanism design problem known as implementation theory concerned with?",
          es: "¿De qué se ocupa un problema de diseño de mecanismos conocido como teoría de implementación?",
          de: "Womit befasst sich ein Mechanismusdesign-Problem, das als Implementierungstheorie bekannt ist?",
          nl: "Waarmee houdt een mechanismeontwerp probleem bekend als implementatietheorie zich bezig?"
        },
        options: [
          { en: "Designing institutions so that rational agents achieve socially desirable outcomes", es: "Diseñar instituciones para que agentes racionales logren resultados socialmente deseables", de: "Institutionen so zu gestalten, dass rationale Agenten sozial wünschenswerte Ergebnisse erreichen", nl: "Het ontwerpen van instituties zodat rationele agenten sociaal wenselijke uitkomsten bereiken" },
          { en: "Implementing existing game solutions in practice", es: "Implementar soluciones de juegos existentes en la práctica", de: "Bestehende Spiellösungen in der Praxis umsetzen", nl: "Bestaande speloplossingen in de praktijk implementeren" },
          { en: "Converting theoretical models into computer algorithms", es: "Convertir modelos teóricos en algoritmos de computadora", de: "Theoretische Modelle in Computeralgorithmen umwandeln", nl: "Theoretische modellen omzetten in computeralgoritmen" },
          { en: "Testing game theory predictions experimentally", es: "Probar predicciones de teoría de juegos experimentalmente", de: "Spieltheoretische Vorhersagen experimentell testen", nl: "Speltheorie voorspellingen experimenteel testen" }
        ],
        correct: 0,
        explanation: {
          en: "Implementation theory asks whether there exists a mechanism (game form) that implements a desired social choice function in equilibrium. It determines when and how we can design institutions/rules so that rational, self-interested agents will behave in ways that achieve socially optimal outcomes.",
          es: "La teoría de implementación pregunta si existe un mecanismo que implemente una función de elección social deseada en equilibrio. Determina cuándo y cómo podemos diseñar instituciones para que agentes racionales logren resultados socialmente óptimos.",
          de: "Implementierungstheorie fragt, ob ein Mechanismus existiert, der eine gewünschte soziale Wahlfunktion im Gleichgewicht implementiert. Sie bestimmt, wann und wie wir Institutionen gestalten können, damit rationale Agenten sozial optimale Ergebnisse erreichen.",
          nl: "Implementatietheorie vraagt of er een mechanisme bestaat dat een gewenste sociale keuze functie implementeert in evenwicht. Het bepaalt wanneer en hoe we instituties kunnen ontwerpen zodat rationele agenten sociaal optimale uitkomsten bereiken."
        }
      },
      {
        question: {
          en: "What characterizes a congestion game?",
          es: "¿Qué caracteriza un juego de congestión?",
          de: "Was charakterisiert ein Stausspiel?",
          nl: "Wat kenmerkt een congestiespel?"
        },
        options: [
          { en: "Players' costs depend on how many others choose the same resource", es: "Los costos de los jugadores dependen de cuántos otros eligen el mismo recurso", de: "Die Kosten der Spieler hängen davon ab, wie viele andere dieselbe Ressource wählen", nl: "Spelers' kosten hangen af van hoeveel anderen dezelfde hulpbron kiezen" },
          { en: "Games with heavy traffic conditions", es: "Juegos con condiciones de tráfico pesado", de: "Spiele mit schweren Verkehrsbedingungen", nl: "Spellen met zware verkeersomstandigheden" },
          { en: "Games played during peak hours", es: "Juegos jugados durante horas pico", de: "Spiele, die während der Stoßzeiten gespielt werden", nl: "Spellen gespeeld tijdens piekuren" },
          { en: "Games with limited player capacity", es: "Juegos con capacidad limitada de jugadores", de: "Spiele mit begrenzter Spielerkapazität", nl: "Spellen met beperkte spelercapaciteit" }
        ],
        correct: 0,
        explanation: {
          en: "Congestion games model situations where players choose from a set of resources, and each player's cost depends on the congestion (number of players) using each resource. Classic examples include route choice in traffic networks, where travel time increases with the number of users on each road.",
          es: "Los juegos de congestión modelan situaciones donde los jugadores eligen de un conjunto de recursos, y el costo de cada jugador depende de la congestión (número de jugadores) usando cada recurso.",
          de: "Stausspiele modellieren Situationen, wo Spieler aus einer Menge von Ressourcen wählen, und die Kosten jedes Spielers hängen von der Überlastung (Anzahl der Spieler) ab, die jede Ressource nutzt.",
          nl: "Congestiespellen modelleren situaties waar spelers kiezen uit een set hulpbronnen, en elke speler's kosten hangen af van de congestie (aantal spelers) die elke hulpbron gebruikt."
        }
      },
      {
        question: {
          en: "What is the Price of Anarchy?",
          es: "¿Qué es el Precio de la Anarquía?",
          de: "Was ist der Preis der Anarchie?",
          nl: "Wat is de Prijs van Anarchie?"
        },
        options: [
          { en: "The ratio between the worst Nash equilibrium and the social optimum", es: "La razón entre el peor equilibrio de Nash y el óptimo social", de: "Das Verhältnis zwischen dem schlechtesten Nash-Gleichgewicht und dem sozialen Optimum", nl: "De verhouding tussen het slechtste Nash evenwicht en het sociale optimum" },
          { en: "The cost of having no government regulation", es: "El costo de no tener regulación gubernamental", de: "Die Kosten ohne staatliche Regulierung", nl: "De kosten van geen overheidsregulering" },
          { en: "The loss from random player behavior", es: "La pérdida del comportamiento aleatorio de los jugadores", de: "Der Verlust durch zufälliges Spielerverhalten", nl: "Het verlies van willekeurig spelersgedrag" },
          { en: "The maximum possible loss in any game", es: "La máxima pérdida posible en cualquier juego", de: "Der maximal mögliche Verlust in jedem Spiel", nl: "Het maximaal mogelijke verlies in elk spel" }
        ],
        correct: 0,
        explanation: {
          en: "The Price of Anarchy measures how much the efficiency degrades due to selfish behavior. It's defined as the ratio of the social cost of the worst Nash equilibrium to the social cost of the optimal solution, quantifying the inefficiency that results from lack of central coordination.",
          es: "El Precio de la Anarquía mide cuánto se degrada la eficiencia debido al comportamiento egoísta. Se define como la razón del costo social del peor equilibrio de Nash al costo social de la solución óptima.",
          de: "Der Preis der Anarchie misst, wie stark die Effizienz durch egoistisches Verhalten abnimmt. Er ist definiert als das Verhältnis der sozialen Kosten des schlechtesten Nash-Gleichgewichts zu den sozialen Kosten der optimalen Lösung.",
          nl: "De Prijs van Anarchie meet hoeveel de efficiëntie degradeert door egoïstisch gedrag. Het is gedefinieerd als de verhouding van de sociale kosten van het slechtste Nash evenwicht tot de sociale kosten van de optimale oplossing."
        }
      },
      {
        question: {
          en: "What is a Stackelberg game?",
          es: "¿Qué es un juego de Stackelberg?",
          de: "Was ist ein Stackelberg-Spiel?",
          nl: "Wat is een Stackelberg spel?"
        },
        options: [
          { en: "A sequential game where the leader moves first and the follower observes before moving", es: "Un juego secuencial donde el líder se mueve primero y el seguidor observa antes de moverse", de: "Ein sequenzielles Spiel, wo der Führer sich zuerst bewegt und der Folger beobachtet, bevor er sich bewegt", nl: "Een sequentieel spel waar de leider eerst beweegt en de volger observeert voor hij beweegt" },
          { en: "A game named after a German economist about market competition", es: "Un juego nombrado por un economista alemán sobre competencia de mercado", de: "Ein nach einem deutschen Ökonomen benanntes Spiel über Marktwettbewerb", nl: "Een spel vernoemd naar een Duitse econoom over marktconcurrentie" },
          { en: "A cooperative game for supply chain management", es: "Un juego cooperativo para gestión de cadena de suministro", de: "Ein kooperatives Spiel für Supply Chain Management", nl: "Een coöperatief spel voor supply chain management" },
          { en: "A game with stacked decision levels", es: "Un juego con niveles de decisión apilados", de: "Ein Spiel mit gestapelten Entscheidungsebenen", nl: "Een spel met gestapelde beslissingsniveaus" }
        ],
        correct: 0,
        explanation: {
          en: "A Stackelberg game is a strategic game with sequential moves where one player (leader) commits to a strategy first, and the other player (follower) observes this commitment and then chooses their strategy. This gives the leader a first-mover advantage but requires credible commitment.",
          es: "Un juego de Stackelberg es un juego estratégico con movimientos secuenciales donde un jugador (líder) se compromete a una estrategia primero, y el otro jugador (seguidor) observa este compromiso y luego elige su estrategia.",
          de: "Ein Stackelberg-Spiel ist ein strategisches Spiel mit sequenziellen Zügen, wo ein Spieler (Führer) sich zuerst zu einer Strategie verpflichtet, und der andere Spieler (Folger) diese Verpflichtung beobachtet und dann seine Strategie wählt.",
          nl: "Een Stackelberg spel is een strategisch spel met sequentiële zetten waar een speler (leider) zich eerst committeert aan een strategie, en de andere speler (volger) deze commitment observeert en dan hun strategie kiest."
        }
      },
      {
        question: {
          en: "What is the centipede game and what does it illustrate?",
          es: "¿Qué es el juego del ciempiés y qué ilustra?",
          de: "Was ist das Tausendfüßlerspiel und was illustriert es?",
          nl: "Wat is het duizendpootspel en wat illustreert het?"
        },
        options: [
          { en: "A sequential game showing tension between individual rationality and mutual cooperation", es: "Un juego secuencial que muestra tensión entre racionalidad individual y cooperación mutua", de: "Ein sequenzielles Spiel, das die Spannung zwischen individueller Rationalität und gegenseitiger Kooperation zeigt", nl: "Een sequentieel spel dat spanning toont tussen individuele rationaliteit en wederzijdse samenwerking" },
          { en: "A game about biological evolution and survival strategies", es: "Un juego sobre evolución biológica y estrategias de supervivencia", de: "Ein Spiel über biologische Evolution und Überlebensstrategien", nl: "Een spel over biologische evolutie en overlevingsstrategieën" },
          { en: "A coordination game with multiple equilibria", es: "Un juego de coordinación con múltiples equilibrios", de: "Ein Koordinationsspiel mit mehreren Gleichgewichten", nl: "Een coördinatiespel met meerdere evenwichten" },
          { en: "A game demonstrating network effects", es: "Un juego que demuestra efectos de red", de: "Ein Spiel, das Netzwerkeffekte demonstriert", nl: "Een spel dat netwerkeffecten demonstreert" }
        ],
        correct: 0,
        explanation: {
          en: "The centipede game is a sequential game where players alternate between 'taking' (ending the game) and 'passing' (continuing). Backward induction predicts immediate taking, but experiments show players often cooperate longer, illustrating the gap between theoretical predictions and actual behavior in sequential games.",
          es: "El juego del ciempiés es un juego secuencial donde los jugadores alternan entre 'tomar' (terminar el juego) y 'pasar' (continuar). La inducción hacia atrás predice tomar inmediatamente, pero los experimentos muestran que los jugadores a menudo cooperan más tiempo.",
          de: "Das Tausendfüßlerspiel ist ein sequenzielles Spiel, wo Spieler zwischen 'Nehmen' (Spiel beenden) und 'Weitergeben' (Fortsetzen) wechseln. Rückwärtsinduktion sagt sofortiges Nehmen voraus, aber Experimente zeigen, dass Spieler oft länger kooperieren.",
          nl: "Het duizendpootspel is een sequentieel spel waar spelers afwisselen tussen 'nemen' (spel beëindigen) en 'doorgeven' (voortzetten). Achterwaartse inductie voorspelt onmiddellijk nemen, maar experimenten tonen dat spelers vaak langer samenwerken."
        }
      },
      {
        question: {
          en: "What is a double auction?",
          es: "¿Qué es una subasta doble?",
          de: "Was ist eine Doppelauktion?",
          nl: "Wat is een dubbele veiling?"
        },
        options: [
          { en: "An auction where both buyers and sellers submit bids and asks simultaneously", es: "Una subasta donde tanto compradores como vendedores presentan ofertas y demandas simultáneamente", de: "Eine Auktion, wo sowohl Käufer als auch Verkäufer gleichzeitig Gebote und Angebote abgeben", nl: "Een veiling waar zowel kopers als verkopers gelijktijdig biedingen en vragen indienen" },
          { en: "Two separate auctions running in parallel", es: "Dos subastas separadas ejecutándose en paralelo", de: "Zwei separate Auktionen, die parallel laufen", nl: "Twee aparte veilingen die parallel lopen" },
          { en: "An auction with two rounds of bidding", es: "Una subasta con dos rondas de ofertas", de: "Eine Auktion mit zwei Bietrunden", nl: "Een veiling met twee rondes van biedingen" },
          { en: "An auction for pairs of identical items", es: "Una subasta para pares de artículos idénticos", de: "Eine Auktion für Paare identischer Gegenstände", nl: "Een veiling voor paren identieke items" }
        ],
        correct: 0,
        explanation: {
          en: "A double auction is a market mechanism where both buyers and sellers can submit orders (bids and asks) simultaneously. The market maker or exchange matches compatible orders, determining both price and quantity. This mechanism is used in many financial markets and electronic trading platforms.",
          es: "Una subasta doble es un mecanismo de mercado donde tanto compradores como vendedores pueden presentar órdenes simultáneamente. El creador de mercado o intercambio empareja órdenes compatibles, determinando precio y cantidad.",
          de: "Eine Doppelauktion ist ein Marktmechanismus, wo sowohl Käufer als auch Verkäufer gleichzeitig Aufträge abgeben können. Der Market Maker oder die Börse paart kompatible Aufträge und bestimmt Preis und Menge.",
          nl: "Een dubbele veiling is een marktmechanisme waar zowel kopers als verkopers gelijktijdig orders kunnen indienen. De market maker of beurs matcht compatibele orders en bepaalt zowel prijs als hoeveelheid."
        }
      },
      {
        question: {
          en: "What is the revelation principle in mechanism design?",
          es: "¿Qué es el principio de revelación en el diseño de mecanismos?",
          de: "Was ist das Offenbarungsprinzip im Mechanismusdesign?",
          nl: "Wat is het openbaringsprincipe in mechanismeontwerp?"
        },
        options: [
          { en: "Any mechanism can be replaced by an equivalent direct mechanism where truth-telling is optimal", es: "Cualquier mecanismo puede ser reemplazado por un mecanismo directo equivalente donde decir la verdad es óptimo", de: "Jeder Mechanismus kann durch einen äquivalenten direkten Mechanismus ersetzt werden, wo Wahrheit sagen optimal ist", nl: "Elk mechanisme kan worden vervangen door een equivalent direct mechanisme waar waarheid vertellen optimaal is" },
          { en: "All information must be revealed in mechanism design", es: "Toda la información debe ser revelada en el diseño de mecanismos", de: "Alle Informationen müssen im Mechanismusdesign offenbart werden", nl: "Alle informatie moet worden geopenbaard in mechanismeontwerp" },
          { en: "Players always reveal their true preferences", es: "Los jugadores siempre revelan sus verdaderas preferencias", de: "Spieler offenbaren immer ihre wahren Präferenzen", nl: "Spelers onthullen altijd hun ware voorkeuren" },
          { en: "Mechanism designers must reveal their objectives", es: "Los diseñadores de mecanismos deben revelar sus objetivos", de: "Mechanismusdesigner müssen ihre Ziele offenbaren", nl: "Mechanisme ontwerpers moeten hun doelstellingen onthullen" }
        ],
        correct: 0,
        explanation: {
          en: "The revelation principle states that any outcome achievable by an indirect mechanism can also be achieved by a direct mechanism where agents report their types truthfully and the mechanism uses these reports to determine outcomes. This allows mechanism designers to focus on direct, truth-telling mechanisms without loss of generality.",
          es: "El principio de revelación establece que cualquier resultado alcanzable por un mecanismo indirecto también puede lograrse por un mecanismo directo donde los agentes reportan sus tipos verdaderamente.",
          de: "Das Offenbarungsprinzip besagt, dass jedes durch einen indirekten Mechanismus erreichbare Ergebnis auch durch einen direkten Mechanismus erreicht werden kann, wo Agenten ihre Typen wahrheitsgemäß berichten.",
          nl: "Het openbaringsprincipe stelt dat elke uitkomst bereikbaar door een indirect mechanisme ook kan worden bereikt door een direct mechanisme waar agenten hun types waarheidsgetrouw rapporteren."
        }
      },
      {
        question: {
          en: "What is a Groves mechanism?",
          es: "¿Qué es un mecanismo de Groves?",
          de: "Was ist ein Groves-Mechanismus?",
          nl: "Wat is een Groves mechanisme?"
        },
        options: [
          { en: "A truthful mechanism where agents pay based on their externality on others", es: "Un mecanismo veraz donde los agentes pagan basándose en su externalidad sobre otros", de: "Ein wahrhaftiger Mechanismus, wo Agenten basierend auf ihrer Externalität auf andere zahlen", nl: "Een waarheidsgetrouw mechanisme waar agenten betalen gebaseerd op hun externaliteit op anderen" },
          { en: "A mechanism for forest management and environmental goods", es: "Un mecanismo para gestión forestal y bienes ambientales", de: "Ein Mechanismus für Forstwirtschaft und Umweltgüter", nl: "Een mechanisme voor bosbeheer en milieugoederen" },
          { en: "A voting mechanism for group decision making", es: "Un mecanismo de votación para toma de decisiones grupales", de: "Ein Abstimmungsmechanismus für Gruppenentscheidungen", nl: "Een stemmechanisme voor groepsbesluitvorming" },
          { en: "A bargaining mechanism for bilateral negotiations", es: "Un mecanismo de negociación para negociaciones bilaterales", de: "Ein Verhandlungsmechanismus für bilaterale Verhandlungen", nl: "Een onderhandelingsmechanisme voor bilaterale onderhandelingen" }
        ],
        correct: 0,
        explanation: {
          en: "Groves mechanisms are a class of truthful mechanisms where each agent pays an amount equal to the harm their presence causes to other agents. The VCG (Vickrey-Clarke-Groves) mechanism is the most famous example, ensuring dominant strategy incentive compatibility while achieving efficiency.",
          es: "Los mecanismos de Groves son una clase de mecanismos veraces donde cada agente paga una cantidad igual al daño que su presencia causa a otros agentes. El mecanismo VCG es el ejemplo más famoso.",
          de: "Groves-Mechanismen sind eine Klasse wahrhaftiger Mechanismen, wo jeder Agent einen Betrag zahlt, der dem Schaden entspricht, den seine Anwesenheit anderen Agenten verursacht. Der VCG-Mechanismus ist das berühmteste Beispiel.",
          nl: "Groves mechanismen zijn een klasse van waarheidsgetrouwe mechanismen waar elke agent een bedrag betaalt gelijk aan de schade die hun aanwezigheid aan andere agenten veroorzaakt. Het VCG mechanisme is het meest bekende voorbeeld."
        }
      },
      {
        question: {
          en: "What is the difference between cheap talk and costly signaling?",
          es: "¿Cuál es la diferencia entre hablar barato y señalización costosa?",
          de: "Was ist der Unterschied zwischen billigem Gerede und kostspieliger Signalisierung?",
          nl: "Wat is het verschil tussen goedkoop praten en kostbare signalering?"
        },
        options: [
          { en: "Cheap talk has no direct cost while costly signaling requires expenditure of resources", es: "Hablar barato no tiene costo directo mientras que la señalización costosa requiere gasto de recursos", de: "Billiges Gerede hat keine direkten Kosten, während kostspielige Signalisierung Ressourcenaufwand erfordert", nl: "Goedkoop praten heeft geen directe kosten terwijl kostbare signalering uitgaven van hulpbronnen vereist" },
          { en: "Cheap talk is informal communication, costly signaling is formal", es: "Hablar barato es comunicación informal, la señalización costosa es formal", de: "Billiges Gerede ist informelle Kommunikation, kostspielige Signalisierung ist formal", nl: "Goedkoop praten is informele communicatie, kostbare signalering is formeel" },
          { en: "Cheap talk is verbal, costly signaling is non-verbal", es: "Hablar barato es verbal, la señalización costosa es no verbal", de: "Billiges Gerede ist verbal, kostspielige Signalisierung ist non-verbal", nl: "Goedkoop praten is verbaal, kostbare signalering is non-verbaal" },
          { en: "Cheap talk is public, costly signaling is private", es: "Hablar barato es público, la señalización costosa es privada", de: "Billiges Gerede ist öffentlich, kostspielige Signalisierung ist privat", nl: "Goedkoop praten is openbaar, kostbare signalering is privé" }
        ],
        correct: 0,
        explanation: {
          en: "Cheap talk refers to costless communication that has no direct effect on players' payoffs, while costly signaling involves expenditure of resources to send credible signals. Costly signals can credibly convey information because they are expensive for 'bad' types to mimic, whereas cheap talk may lack credibility.",
          es: "Hablar barato se refiere a comunicación sin costo que no tiene efecto directo en las ganancias de los jugadores, mientras que la señalización costosa involucra gasto de recursos para enviar señales creíbles.",
          de: "Billiges Gerede bezieht sich auf kostenlose Kommunikation ohne direkten Effekt auf Spielerauszahlungen, während kostspielige Signalisierung Ressourcenaufwand zur Sendung glaubwürdiger Signale beinhaltet.",
          nl: "Goedkoop praten verwijst naar kostenloze communicatie die geen direct effect heeft op spelers' uitbetalingen, terwijl kostbare signalering uitgaven van hulpbronnen inhoudt om geloofwaardige signalen te sturen."
        }
      },
      {
        question: {
          en: "What is a subgame perfect Nash equilibrium?",
          es: "¿Qué es un equilibrio de Nash perfecto en subjuegos?",
          de: "Was ist ein teilspielperfektes Nash-Gleichgewicht?",
          nl: "Wat is een subgame perfect Nash evenwicht?"
        },
        options: [
          { en: "A Nash equilibrium that remains Nash in every subgame", es: "Un equilibrio de Nash que permanece Nash en cada subjuego", de: "Ein Nash-Gleichgewicht, das in jedem Teilspiel Nash bleibt", nl: "Een Nash evenwicht dat Nash blijft in elke subgame" },
          { en: "A Nash equilibrium with only pure strategies", es: "Un equilibrio de Nash solo con estrategias puras", de: "Ein Nash-Gleichgewicht nur mit reinen Strategien", nl: "Een Nash evenwicht met alleen pure strategieën" },
          { en: "A Nash equilibrium in zero-sum games", es: "Un equilibrio de Nash en juegos de suma cero", de: "Ein Nash-Gleichgewicht in Nullsummenspielen", nl: "Een Nash evenwicht in nulsomspellen" },
          { en: "A Nash equilibrium with perfect information", es: "Un equilibrio de Nash con información perfecta", de: "Ein Nash-Gleichgewicht mit vollständiger Information", nl: "Een Nash evenwicht met perfecte informatie" }
        ],
        correct: 0,
        explanation: {
          en: "A subgame perfect Nash equilibrium is a refinement of Nash equilibrium that eliminates non-credible threats. It requires that the strategy profile constitutes a Nash equilibrium in every subgame, ensuring that players' strategies are optimal at every decision point in the game tree.",
          es: "Un equilibrio de Nash perfecto en subjuegos es un refinamiento del equilibrio de Nash que elimina amenazas no creíbles. Requiere que el perfil de estrategia constituya un equilibrio de Nash en cada subjuego, asegurando que las estrategias de los jugadores sean óptimas en cada punto de decisión en el árbol del juego.",
          de: "Ein teilspielperfektes Nash-Gleichgewicht ist eine Verfeinerung des Nash-Gleichgewichts, die unglaubwürdige Drohungen eliminiert. Es erfordert, dass das Strategieprofil in jedem Teilspiel ein Nash-Gleichgewicht bildet und sicherstellt, dass Spielerstrategien an jedem Entscheidungspunkt im Spielbaum optimal sind.",
          nl: "Een subgame perfect Nash evenwicht is een verfijning van Nash evenwicht die ongeloofwaardige dreigingen elimineert. Het vereist dat het strategieprofiel een Nash evenwicht vormt in elke subgame, wat verzekert dat spelers' strategieën optimaal zijn op elk beslispunt in de spelenboom."
        }
      },
      {
        question: {
          en: "What characterizes a Stackelberg competition model?",
          es: "¿Qué caracteriza un modelo de competencia de Stackelberg?",
          de: "Was charakterisiert ein Stackelberg-Wettbewerbsmodell?",
          nl: "Wat kenmerkt een Stackelberg competitiemodel?"
        },
        options: [
          { en: "Sequential decision-making with a first-mover advantage", es: "Toma de decisiones secuencial con ventaja del primer movimiento", de: "Sequenzielle Entscheidungsfindung mit Erstbeweger-Vorteil", nl: "Sequentiële besluitvorming met first-mover voordeel" },
          { en: "Simultaneous decision-making by all players", es: "Toma de decisiones simultánea por todos los jugadores", de: "Simultane Entscheidungsfindung aller Spieler", nl: "Simultane besluitvorming door alle spelers" },
          { en: "Perfect competition with price-taking behavior", es: "Competencia perfecta con comportamiento tomador de precios", de: "Vollkommener Wettbewerb mit Preisnahme-Verhalten", nl: "Perfecte concurrentie met prijsnemend gedrag" },
          { en: "Monopolistic behavior with no competitors", es: "Comportamiento monopolístico sin competidores", de: "Monopolistisches Verhalten ohne Konkurrenten", nl: "Monopolistisch gedrag zonder concurrenten" }
        ],
        correct: 0,
        explanation: {
          en: "Stackelberg competition involves sequential decision-making where one firm (leader) chooses its strategy first, and other firms (followers) observe this choice before making their decisions. This gives the leader a first-mover advantage and typically results in higher profits compared to simultaneous competition.",
          es: "La competencia de Stackelberg involucra toma de decisiones secuencial donde una empresa (líder) elige su estrategia primero, y otras empresas (seguidores) observan esta elección antes de tomar sus decisiones. Esto le da al líder una ventaja del primer movimiento y típicamente resulta en mayores ganancias comparado con competencia simultánea.",
          de: "Stackelberg-Wettbewerb beinhaltet sequenzielle Entscheidungsfindung, bei der ein Unternehmen (Führer) seine Strategie zuerst wählt und andere Unternehmen (Folger) diese Wahl beobachten, bevor sie ihre Entscheidungen treffen. Dies gibt dem Führer einen Erstbeweger-Vorteil und führt typischerweise zu höheren Gewinnen im Vergleich zum simultanen Wettbewerb.",
          nl: "Stackelberg concurrentie houdt sequentiële besluitvorming in waarbij één bedrijf (leider) eerst zijn strategie kiest, en andere bedrijven (volgers) deze keuze observeren voordat ze hun beslissingen nemen. Dit geeft de leider een first-mover voordeel en resulteert typisch in hogere winsten vergeleken met simultane concurrentie."
        }
      },
      {
        question: {
          en: "What is the key insight of the Folk Theorem in repeated games?",
          es: "¿Cuál es la idea clave del Teorema Folk en juegos repetidos?",
          de: "Was ist die Schlüsselerkenntnis des Folk-Theorems in wiederholten Spielen?",
          nl: "Wat is het belangrijkste inzicht van het Folk Theorema in herhaalde spellen?"
        },
        options: [
          { en: "Cooperation can be sustained as equilibrium when players are patient enough", es: "La cooperación puede sostenerse como equilibrio cuando los jugadores son suficientemente pacientes", de: "Kooperation kann als Gleichgewicht aufrechterhalten werden, wenn Spieler geduldig genug sind", nl: "Samenwerking kan als evenwicht gehandhaafd worden als spelers geduldig genoeg zijn" },
          { en: "Only non-cooperative outcomes are possible in repeated games", es: "Solo resultados no cooperativos son posibles en juegos repetidos", de: "Nur nicht-kooperative Ergebnisse sind in wiederholten Spielen möglich", nl: "Alleen niet-coöperatieve uitkomsten zijn mogelijk in herhaalde spellen" },
          { en: "Nash equilibria don't exist in infinitely repeated games", es: "Los equilibrios de Nash no existen en juegos infinitamente repetidos", de: "Nash-Gleichgewichte existieren nicht in unendlich wiederholten Spielen", nl: "Nash evenwichten bestaan niet in oneindig herhaalde spellen" },
          { en: "Players must use mixed strategies in all periods", es: "Los jugadores deben usar estrategias mixtas en todos los períodos", de: "Spieler müssen gemischte Strategien in allen Perioden verwenden", nl: "Spelers moeten gemengde strategieën gebruiken in alle periodes" }
        ],
        correct: 0,
        explanation: {
          en: "The Folk Theorem states that in infinitely repeated games with patient players (high discount factor), any feasible and individually rational payoff can be supported as a Nash equilibrium outcome. This shows that cooperation can emerge naturally when players care sufficiently about future payoffs and can punish deviations.",
          es: "El Teorema Folk establece que en juegos infinitamente repetidos con jugadores pacientes (alto factor de descuento), cualquier pago factible e individualmente racional puede sostenerse como resultado de equilibrio de Nash. Esto muestra que la cooperación puede surgir naturalmente cuando los jugadores se preocupan suficientemente por pagos futuros y pueden castigar desviaciones.",
          de: "Das Folk-Theorem besagt, dass in unendlich wiederholten Spielen mit geduldigen Spielern (hoher Diskontfaktor) jede machbare und individuell rationale Auszahlung als Nash-Gleichgewichtsergebnis unterstützt werden kann. Dies zeigt, dass Kooperation natürlich entstehen kann, wenn Spieler sich ausreichend um zukünftige Auszahlungen kümmern und Abweichungen bestrafen können.",
          nl: "Het Folk Theorema stelt dat in oneindig herhaalde spellen met geduldige spelers (hoge discontofactor), elke haalbare en individueel rationele uitbetaling als Nash evenwicht uitkomst ondersteund kan worden. Dit toont dat samenwerking natuurlijk kan ontstaan wanneer spelers zich voldoende bekommeren om toekomstige uitbetalingen en afwijkingen kunnen straffen."
        }
      },
      {
        question: {
          en: "What defines a trembling hand perfect equilibrium?",
          es: "¿Qué define un equilibrio perfecto de mano temblorosa?",
          de: "Was definiert ein zitternde-Hand-perfektes Gleichgewicht?",
          nl: "Wat definieert een trembling hand perfect evenwicht?"
        },
        options: [
          { en: "An equilibrium that remains stable even when players make small mistakes", es: "Un equilibrio que permanece estable incluso cuando los jugadores cometen pequeños errores", de: "Ein Gleichgewicht, das stabil bleibt, auch wenn Spieler kleine Fehler machen", nl: "Een evenwicht dat stabiel blijft zelfs wanneer spelers kleine fouten maken" },
          { en: "An equilibrium where all players use pure strategies", es: "Un equilibrio donde todos los jugadores usan estrategias puras", de: "Ein Gleichgewicht, in dem alle Spieler reine Strategien verwenden", nl: "Een evenwicht waar alle spelers pure strategieën gebruiken" },
          { en: "An equilibrium in games with incomplete information", es: "Un equilibrio en juegos con información incompleta", de: "Ein Gleichgewicht in Spielen mit unvollständiger Information", nl: "Een evenwicht in spellen met incomplete informatie" },
          { en: "An equilibrium that maximizes social welfare", es: "Un equilibrio que maximiza el bienestar social", de: "Ein Gleichgewicht, das die soziale Wohlfahrt maximiert", nl: "Een evenwicht dat maatschappelijk welzijn maximaliseert" }
        ],
        correct: 0,
        explanation: {
          en: "A trembling hand perfect equilibrium is a refinement of Nash equilibrium that requires strategies to be optimal even when opponents might make small mistakes (trembles). This eliminates equilibria that depend on implausible threats or strategies that would not be optimal if opponents occasionally deviated from their intended actions.",
          es: "Un equilibrio perfecto de mano temblorosa es un refinamiento del equilibrio de Nash que requiere que las estrategias sean óptimas incluso cuando los oponentes puedan cometer pequeños errores (temblores). Esto elimina equilibrios que dependen de amenazas implausibles o estrategias que no serían óptimas si los oponentes ocasionalmente se desviaran de sus acciones previstas.",
          de: "Ein zitternde-Hand-perfektes Gleichgewicht ist eine Verfeinerung des Nash-Gleichgewichts, die erfordert, dass Strategien optimal sind, auch wenn Gegner kleine Fehler (Zittern) machen könnten. Dies eliminiert Gleichgewichte, die auf unplausiblen Drohungen oder Strategien beruhen, die nicht optimal wären, wenn Gegner gelegentlich von ihren beabsichtigten Aktionen abweichen würden.",
          nl: "Een trembling hand perfect evenwicht is een verfijning van Nash evenwicht die vereist dat strategieën optimaal zijn zelfs wanneer tegenstanders kleine fouten (trillingen) zouden kunnen maken. Dit elimineert evenwichten die afhangen van onwaarschijnlijke dreigingen of strategieën die niet optimaal zouden zijn als tegenstanders af en toe zouden afwijken van hun bedoelde acties."
        }
      },
      {
        question: {
          en: "What is the concept of correlated equilibrium?",
          es: "¿Qué es el concepto de equilibrio correlacionado?",
          de: "Was ist das Konzept des korrelierten Gleichgewichts?",
          nl: "Wat is het concept van gecorreleerd evenwicht?"
        },
        options: [
          { en: "Players coordinate their strategies based on a common random signal", es: "Los jugadores coordinan sus estrategias basándose en una señal aleatoria común", de: "Spieler koordinieren ihre Strategien basierend auf einem gemeinsamen Zufallssignal", nl: "Spelers coördineren hun strategieën gebaseerd op een gemeenschappelijk willekeurig signaal" },
          { en: "Players always choose the same strategy", es: "Los jugadores siempre eligen la misma estrategia", de: "Spieler wählen immer dieselbe Strategie", nl: "Spelers kiezen altijd dezelfde strategie" },
          { en: "Strategies are perfectly negatively correlated", es: "Las estrategias están perfectamente correlacionadas negativamente", de: "Strategien sind perfekt negativ korreliert", nl: "Strategieën zijn perfect negatief gecorreleerd" },
          { en: "Only mixed strategies can be used", es: "Solo se pueden usar estrategias mixtas", de: "Nur gemischte Strategien können verwendet werden", nl: "Alleen gemengde strategieën kunnen gebruikt worden" }
        ],
        correct: 0,
        explanation: {
          en: "A correlated equilibrium involves players receiving private recommendations from a mediator based on a joint probability distribution. Each player finds it optimal to follow their recommendation given that others follow theirs. This concept generalizes Nash equilibrium and can achieve better outcomes through coordination.",
          es: "Un equilibrio correlacionado involucra jugadores recibiendo recomendaciones privadas de un mediador basado en una distribución de probabilidad conjunta. Cada jugador encuentra óptimo seguir su recomendación dado que otros siguen las suyas. Este concepto generaliza el equilibrio de Nash y puede lograr mejores resultados a través de coordinación.",
          de: "Ein korreliertes Gleichgewicht beinhaltet Spieler, die private Empfehlungen von einem Vermittler basierend auf einer gemeinsamen Wahrscheinlichkeitsverteilung erhalten. Jeder Spieler findet es optimal, seiner Empfehlung zu folgen, vorausgesetzt, dass andere ihren folgen. Dieses Konzept verallgemeinert das Nash-Gleichgewicht und kann bessere Ergebnisse durch Koordination erreichen.",
          nl: "Een gecorreleerd evenwicht houdt in dat spelers private aanbevelingen ontvangen van een bemiddelaar gebaseerd op een gezamenlijke waarschijnlijkheidsverdeling. Elke speler vindt het optimaal om hun aanbeveling te volgen gegeven dat anderen hun aanbevelingen volgen. Dit concept generaliseert Nash evenwicht en kan betere uitkomsten bereiken door coördinatie."
        }
      },
      {
        question: {
          en: "What is the concept of evolutionary stable strategy (ESS)?",
          es: "¿Qué es el concepto de estrategia evolutivamente estable (ESS)?",
          de: "Was ist das Konzept der evolutionär stabilen Strategie (ESS)?",
          nl: "Wat is het concept van evolutionair stabiele strategie (ESS)?"
        },
        options: [
          { en: "A strategy that cannot be invaded by any alternative strategy in a population", es: "Una estrategia que no puede ser invadida por ninguna estrategia alternativa en una población", de: "Eine Strategie, die von keiner alternativen Strategie in einer Population eingedrungen werden kann", nl: "Een strategie die niet kan worden binnengedrongen door een alternatieve strategie in een populatie" },
          { en: "A strategy that always wins in head-to-head competition", es: "Una estrategia que siempre gana en competencia directa", de: "Eine Strategie, die in direkter Konkurrenz immer gewinnt", nl: "Een strategie die altijd wint in directe competitie" },
          { en: "A strategy that maximizes individual fitness", es: "Una estrategia que maximiza la aptitud individual", de: "Eine Strategie, die die individuelle Fitness maximiert", nl: "Een strategie die individuele fitness maximaliseert" },
          { en: "A strategy that leads to cooperative behavior", es: "Una estrategia que lleva a comportamiento cooperativo", de: "Eine Strategie, die zu kooperativem Verhalten führt", nl: "Een strategie die tot coöperatief gedrag leidt" }
        ],
        correct: 0,
        explanation: {
          en: "An evolutionarily stable strategy is a refinement of Nash equilibrium that is stable against invasion by small groups of mutants. If a population is playing an ESS and a small group tries a different strategy, the ESS players will do better, preventing the alternative strategy from spreading through the population.",
          es: "Una estrategia evolutivamente estable es un refinamiento del equilibrio de Nash que es estable contra invasión por pequeños grupos de mutantes. Si una población está jugando una ESS y un pequeño grupo prueba una estrategia diferente, los jugadores ESS lo harán mejor, previniendo que la estrategia alternativa se extienda a través de la población.",
          de: "Eine evolutionär stabile Strategie ist eine Verfeinerung des Nash-Gleichgewichts, die stabil gegen Invasion durch kleine Gruppen von Mutanten ist. Wenn eine Population eine ESS spielt und eine kleine Gruppe eine andere Strategie versucht, werden die ESS-Spieler besser abschneiden und verhindern, dass sich die alternative Strategie in der Population ausbreitet.",
          nl: "Een evolutionair stabiele strategie is een verfijning van Nash evenwicht die stabiel is tegen invasie door kleine groepen mutanten. Als een populatie een ESS speelt en een kleine groep probeert een andere strategie, zullen de ESS spelers beter presteren, wat voorkomt dat de alternatieve strategie zich door de populatie verspreidt."
        }
      },
      {
        question: {
          en: "What characterizes a zero-sum game?",
          es: "¿Qué caracteriza un juego de suma cero?",
          de: "Was charakterisiert ein Nullsummenspiel?",
          nl: "Wat kenmerkt een nulsomspel?"
        },
        options: [
          { en: "One player's gain equals another player's loss", es: "La ganancia de un jugador es igual a la pérdida de otro jugador", de: "Der Gewinn eines Spielers entspricht dem Verlust eines anderen Spielers", nl: "De winst van de ene speler is gelijk aan het verlies van de andere speler" },
          { en: "All players can win simultaneously", es: "Todos los jugadores pueden ganar simultáneamente", de: "Alle Spieler können gleichzeitig gewinnen", nl: "Alle spelers kunnen tegelijkertijd winnen" },
          { en: "The total payoff is always zero", es: "El pago total es siempre cero", de: "Die Gesamtauszahlung ist immer null", nl: "De totale uitbetaling is altijd nul" },
          { en: "No player can influence the outcome", es: "Ningún jugador puede influir en el resultado", de: "Kein Spieler kann das Ergebnis beeinflussen", nl: "Geen speler kan de uitkomst beïnvloeden" }
        ],
        correct: 0,
        explanation: {
          en: "A zero-sum game is one where the total gains of all players sum to zero, meaning one player's gain necessarily comes at the expense of others. This creates a purely competitive environment where players have directly conflicting interests, unlike games where mutual gains are possible.",
          es: "Un juego de suma cero es uno donde las ganancias totales de todos los jugadores suman cero, significando que la ganancia de un jugador necesariamente viene a expensas de otros. Esto crea un ambiente puramente competitivo donde los jugadores tienen intereses directamente conflictivos, a diferencia de juegos donde ganancias mutuas son posibles.",
          de: "Ein Nullsummenspiel ist eines, bei dem die Gesamtgewinne aller Spieler null ergeben, was bedeutet, dass der Gewinn eines Spielers notwendigerweise auf Kosten anderer geht. Dies schafft eine rein wettbewerbsorientierte Umgebung, in der Spieler direkt widersprüchliche Interessen haben, im Gegensatz zu Spielen, in denen gegenseitige Gewinne möglich sind.",
          nl: "Een nulsomspel is er een waarbij de totale winsten van alle spelers optellen tot nul, wat betekent dat de winst van één speler noodzakelijkerwijs ten koste gaat van anderen. Dit creëert een puur competitieve omgeving waar spelers direct conflicterende belangen hebben, in tegenstelling tot spellen waar wederzijdse winsten mogelijk zijn."
        }
      },
      {
        question: {
          en: "What is the minimax theorem in game theory?",
          es: "¿Qué es el teorema minimax en teoría de juegos?",
          de: "Was ist das Minimax-Theorem in der Spieltheorie?",
          nl: "Wat is het minimax theorema in speltheorie?"
        },
        options: [
          { en: "In zero-sum games, optimal mixed strategies guarantee the value of the game", es: "En juegos de suma cero, las estrategias mixtas óptimas garantizan el valor del juego", de: "In Nullsummenspielen garantieren optimale gemischte Strategien den Wert des Spiels", nl: "In nulsomspellen garanderen optimale gemengde strategieën de waarde van het spel" },
          { en: "Players should always choose the strategy that minimizes maximum loss", es: "Los jugadores siempre deben elegir la estrategia que minimiza la pérdida máxima", de: "Spieler sollten immer die Strategie wählen, die den maximalen Verlust minimiert", nl: "Spelers moeten altijd de strategie kiezen die het maximale verlies minimaliseert" },
          { en: "The minimum payoff equals the maximum payoff in equilibrium", es: "El pago mínimo es igual al pago máximo en equilibrio", de: "Die minimale Auszahlung entspricht der maximalen Auszahlung im Gleichgewicht", nl: "De minimale uitbetaling is gelijk aan de maximale uitbetaling in evenwicht" },
          { en: "Nash equilibria always exist in finite games", es: "Los equilibrios de Nash siempre existen en juegos finitos", de: "Nash-Gleichgewichte existieren immer in endlichen Spielen", nl: "Nash evenwichten bestaan altijd in eindige spellen" }
        ],
        correct: 0,
        explanation: {
          en: "The minimax theorem, proven by John von Neumann, states that in finite two-player zero-sum games, there exists a value v such that one player can guarantee at least v while the other can ensure they lose no more than v, achieved through optimal mixed strategies. This establishes the fundamental solution concept for zero-sum games.",
          es: "El teorema minimax, probado por John von Neumann, establece que en juegos finitos de suma cero de dos jugadores, existe un valor v tal que un jugador puede garantizar al menos v mientras el otro puede asegurar que no pierde más de v, logrado a través de estrategias mixtas óptimas. Esto establece el concepto de solución fundamental para juegos de suma cero.",
          de: "Das Minimax-Theorem, bewiesen von John von Neumann, besagt, dass in endlichen Zwei-Spieler-Nullsummenspielen ein Wert v existiert, so dass ein Spieler mindestens v garantieren kann, während der andere sicherstellen kann, nicht mehr als v zu verlieren, erreicht durch optimale gemischte Strategien. Dies etabliert das grundlegende Lösungskonzept für Nullsummenspiele.",
          nl: "Het minimax theorema, bewezen door John von Neumann, stelt dat in eindige twee-speler nulsomspellen een waarde v bestaat zodat één speler ten minste v kan garanderen terwijl de ander kan verzekeren niet meer dan v te verliezen, bereikt door optimale gemengde strategieën. Dit vestigt het fundamentele oplossingsconceptf voor nulsomspellen."
        }
      },
      {
        question: {
          en: "What is a Bayesian Nash equilibrium?",
          es: "¿Qué es un equilibrio de Nash Bayesiano?",
          de: "Was ist ein Bayesianisches Nash-Gleichgewicht?",
          nl: "Wat is een Bayesiaans Nash evenwicht?"
        },
        options: [
          { en: "An equilibrium concept for games with incomplete information where players have beliefs about types", es: "Un concepto de equilibrio para juegos con información incompleta donde los jugadores tienen creencias sobre tipos", de: "Ein Gleichgewichtskonzept für Spiele mit unvollständiger Information, bei dem Spieler Überzeugungen über Typen haben", nl: "Een evenwichtsconcept voor spellen met incomplete informatie waar spelers overtuigingen hebben over types" },
          { en: "An equilibrium where all players use Bayes' rule to update beliefs", es: "Un equilibrio donde todos los jugadores usan la regla de Bayes para actualizar creencias", de: "Ein Gleichgewicht, bei dem alle Spieler die Bayes-Regel zur Aktualisierung von Überzeugungen verwenden", nl: "Een evenwicht waar alle spelers Bayes' regel gebruiken om overtuigingen bij te werken" },
          { en: "An equilibrium in games with perfect information", es: "Un equilibrio en juegos con información perfecta", de: "Ein Gleichgewicht in Spielen mit vollständiger Information", nl: "Een evenwicht in spellen met perfecte informatie" },
          { en: "An equilibrium that maximizes expected social welfare", es: "Un equilibrio que maximiza el bienestar social esperado", de: "Ein Gleichgewicht, das die erwartete soziale Wohlfahrt maximiert", nl: "Een evenwicht dat verwacht maatschappelijk welzijn maximaliseert" }
        ],
        correct: 0,
        explanation: {
          en: "A Bayesian Nash equilibrium extends Nash equilibrium to games of incomplete information where players have private information about their 'types'. Each player chooses a strategy that maximizes expected utility given their beliefs about other players' types and the strategies those types will choose.",
          es: "Un equilibrio de Nash Bayesiano extiende el equilibrio de Nash a juegos de información incompleta donde los jugadores tienen información privada sobre sus 'tipos'. Cada jugador elige una estrategia que maximiza la utilidad esperada dadas sus creencias sobre los tipos de otros jugadores y las estrategias que esos tipos elegirán.",
          de: "Ein Bayesianisches Nash-Gleichgewicht erweitert das Nash-Gleichgewicht auf Spiele mit unvollständiger Information, bei denen Spieler private Informationen über ihre 'Typen' haben. Jeder Spieler wählt eine Strategie, die den erwarteten Nutzen maximiert, gegeben ihre Überzeugungen über die Typen anderer Spieler und die Strategien, die diese Typen wählen werden.",
          nl: "Een Bayesiaans Nash evenwicht breidt Nash evenwicht uit naar spellen met incomplete informatie waar spelers private informatie hebben over hun 'types'. Elke speler kiest een strategie die verwacht nut maximaliseert gegeven hun overtuigingen over andere spelers' types en de strategieën die die types zullen kiezen."
        }
      },
      {
        question: {
          en: "What is the key feature of a coordination game?",
          es: "¿Cuál es la característica clave de un juego de coordinación?",
          de: "Was ist das Schlüsselmerkmal eines Koordinationsspiels?",
          nl: "Wat is het belangrijkste kenmerk van een coördinatiespel?"
        },
        options: [
          { en: "Players benefit from choosing the same strategy or complementary strategies", es: "Los jugadores se benefician de elegir la misma estrategia o estrategias complementarias", de: "Spieler profitieren davon, dieselbe Strategie oder komplementäre Strategien zu wählen", nl: "Spelers profiteren van het kiezen van dezelfde strategie of complementaire strategieën" },
          { en: "Players always have conflicting interests", es: "Los jugadores siempre tienen intereses conflictivos", de: "Spieler haben immer widersprüchliche Interessen", nl: "Spelers hebben altijd conflicterende belangen" },
          { en: "Only one Nash equilibrium exists", es: "Solo existe un equilibrio de Nash", de: "Nur ein Nash-Gleichgewicht existiert", nl: "Slechts één Nash evenwicht bestaat" },
          { en: "Mixed strategies are never optimal", es: "Las estrategias mixtas nunca son óptimas", de: "Gemischte Strategien sind nie optimal", nl: "Gemengde strategieën zijn nooit optimaal" }
        ],
        correct: 0,
        explanation: {
          en: "Coordination games are characterized by the mutual benefit players receive from coordinating their actions. These games typically have multiple Nash equilibria where players coordinate on the same or complementary strategies, but they face the challenge of selecting which equilibrium to play, often requiring communication or focal points.",
          es: "Los juegos de coordinación se caracterizan por el beneficio mutuo que reciben los jugadores al coordinar sus acciones. Estos juegos típicamente tienen múltiples equilibrios de Nash donde los jugadores se coordinan en las mismas o estrategias complementarias, pero enfrentan el desafío de seleccionar qué equilibrio jugar, a menudo requiriendo comunicación o puntos focales.",
          de: "Koordinationsspiele sind durch den gegenseitigen Nutzen charakterisiert, den Spieler durch die Koordination ihrer Aktionen erhalten. Diese Spiele haben typischerweise mehrere Nash-Gleichgewichte, bei denen sich Spieler auf dieselben oder komplementäre Strategien koordinieren, aber sie stehen vor der Herausforderung zu wählen, welches Gleichgewicht sie spielen, was oft Kommunikation oder Brennpunkte erfordert.",
          nl: "Coördinatiespellen worden gekenmerkt door het wederzijdse voordeel dat spelers ontvangen van het coördineren van hun acties. Deze spellen hebben typisch meerdere Nash evenwichten waar spelers coördineren op dezelfde of complementaire strategieën, maar ze staan voor de uitdaging van het selecteren welk evenwicht te spelen, vaak vereisend communicatie of focale punten."
        }
      },
      {
        question: {
          en: "What is the concept of mechanism design?",
          es: "¿Qué es el concepto de diseño de mecanismos?",
          de: "Was ist das Konzept des Mechanismus-Designs?",
          nl: "Wat is het concept van mechanisme ontwerp?"
        },
        options: [
          { en: "Designing game rules to achieve desired outcomes despite players' private information", es: "Diseñar reglas de juego para lograr resultados deseados a pesar de la información privada de los jugadores", de: "Spielregeln entwerfen, um gewünschte Ergebnisse trotz privater Informationen der Spieler zu erreichen", nl: "Spelregels ontwerpen om gewenste uitkomsten te bereiken ondanks spelers' private informatie" },
          { en: "Analyzing existing games to find optimal strategies", es: "Analizar juegos existentes para encontrar estrategias óptimas", de: "Bestehende Spiele analysieren, um optimale Strategien zu finden", nl: "Bestaande spellen analyseren om optimale strategieën te vinden" },
          { en: "Creating new game formats for entertainment", es: "Crear nuevos formatos de juego para entretenimiento", de: "Neue Spielformate für Unterhaltung erstellen", nl: "Nieuwe spelformaten voor entertainment creëren" },
          { en: "Designing algorithms for game-playing computers", es: "Diseñar algoritmos para computadoras que juegan", de: "Algorithmen für spielende Computer entwerfen", nl: "Algoritmen ontwerpen voor spelende computers" }
        ],
        correct: 0,
        explanation: {
          en: "Mechanism design, also called 'reverse game theory', involves designing game rules, information structures, and incentive schemes to achieve desired social or economic outcomes when players have private information. The designer works backward from desired outcomes to create mechanisms that incentivize truth-telling and efficient behavior.",
          es: "El diseño de mecanismos, también llamado 'teoría de juegos inversa', involucra diseñar reglas de juego, estructuras de información y esquemas de incentivos para lograr resultados sociales o económicos deseados cuando los jugadores tienen información privada. El diseñador trabaja hacia atrás desde resultados deseados para crear mecanismos que incentiven decir la verdad y comportamiento eficiente.",
          de: "Mechanismus-Design, auch 'umgekehrte Spieltheorie' genannt, beinhaltet das Entwerfen von Spielregeln, Informationsstrukturen und Anreizschemata, um gewünschte soziale oder wirtschaftliche Ergebnisse zu erreichen, wenn Spieler private Informationen haben. Der Designer arbeitet rückwärts von gewünschten Ergebnissen, um Mechanismen zu schaffen, die Wahrheit-Sagen und effizientes Verhalten incentivieren.",
          nl: "Mechanisme ontwerp, ook wel 'omgekeerde speltheorie' genoemd, houdt het ontwerpen van spelregels, informatie structuren en incentive schema's in om gewenste sociale of economische uitkomsten te bereiken wanneer spelers private informatie hebben. De ontwerper werkt achterwaarts van gewenste uitkomsten om mechanismen te creëren die waarheid-vertellen en efficiënt gedrag stimuleren."
        }
      },
      {
        question: {
          en: "What is a perfect Bayesian equilibrium?",
          es: "¿Qué es un equilibrio Bayesiano perfecto?",
          de: "Was ist ein perfektes Bayesianisches Gleichgewicht?",
          nl: "Wat is een perfect Bayesiaans evenwicht?"
        },
        options: [
          { en: "An equilibrium where strategies are sequentially rational and beliefs are consistent with Bayes' rule", es: "Un equilibrio donde las estrategias son secuencialmente racionales y las creencias son consistentes con la regla de Bayes", de: "Ein Gleichgewicht, bei dem Strategien sequenziell rational sind und Überzeugungen mit der Bayes-Regel konsistent sind", nl: "Een evenwicht waar strategieën sequentieel rationeel zijn en overtuigingen consistent zijn met Bayes' regel" },
          { en: "An equilibrium with perfect information", es: "Un equilibrio con información perfecta", de: "Ein Gleichgewicht mit vollkommener Information", nl: "Een evenwicht met perfecte informatie" },
          { en: "An equilibrium that maximizes total welfare", es: "Un equilibrio que maximiza el bienestar total", de: "Ein Gleichgewicht, das die Gesamtwohlfahrt maximiert", nl: "Een evenwicht dat totaal welzijn maximaliseert" },
          { en: "An equilibrium where all players use the same strategy", es: "Un equilibrio donde todos los jugadores usan la misma estrategia", de: "Ein Gleichgewicht, bei dem alle Spieler dieselbe Strategie verwenden", nl: "Een evenwicht waar alle spelers dezelfde strategie gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "A perfect Bayesian equilibrium combines sequential rationality (optimal strategies at every information set) with consistency of beliefs (beliefs updated using Bayes' rule whenever possible). This solution concept is used for dynamic games with incomplete information, ensuring both optimal play and reasonable beliefs.",
          es: "Un equilibrio Bayesiano perfecto combina racionalidad secuencial (estrategias óptimas en cada conjunto de información) con consistencia de creencias (creencias actualizadas usando la regla de Bayes siempre que sea posible). Este concepto de solución se usa para juegos dinámicos con información incompleta, asegurando tanto juego óptimo como creencias razonables.",
          de: "Ein perfektes Bayesianisches Gleichgewicht kombiniert sequenzielle Rationalität (optimale Strategien bei jedem Informationsset) mit Konsistenz der Überzeugungen (Überzeugungen mit der Bayes-Regel aktualisiert, wann immer möglich). Dieses Lösungskonzept wird für dynamische Spiele mit unvollständiger Information verwendet und gewährleistet sowohl optimales Spiel als auch vernünftige Überzeugungen.",
          nl: "Een perfect Bayesiaans evenwicht combineert sequentiële rationaliteit (optimale strategieën bij elke informatieset) met consistentie van overtuigingen (overtuigingen bijgewerkt met Bayes' regel wanneer mogelijk). Dit oplossingsconcept wordt gebruikt voor dynamische spellen met incomplete informatie, wat zowel optimaal spel als redelijke overtuigingen verzekert."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('mastermind/game-theory', level1);
  }
})();
