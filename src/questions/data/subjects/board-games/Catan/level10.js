// Quiz Template - Level 10: Bord spelletjes - Catan
(function() {
  const level10 = {
    name: {
      en: "Catan - Ultimate",
      es: "Catan - Definitivo",
      de: "Catan - Ultimativ",
      nl: "Catan - Ultiem"
    },
    questions: [
      {
        question: {
          en: "In computational Catan analysis, what does the minimax algorithm with alpha-beta pruning primarily optimize for?",
          es: "En el análisis computacional de Catan, ¿para qué optimiza principalmente el algoritmo minimax con poda alfa-beta?",
          de: "Wofür optimiert der Minimax-Algorithmus mit Alpha-Beta-Pruning in der computergestützten Catan-Analyse hauptsächlich?",
          nl: "Waarvoor optimaliseert het minimax-algoritme met alfa-bèta-snoeiing voornamelijk in computationele Catan-analyse?"
        },
        options: [
          {
            en: "Minimizing opponent's maximum gain while maximizing own position",
            es: "Minimizar la ganancia máxima del oponente mientras maximiza la propia posición",
            de: "Minimierung des maximalen Gewinns des Gegners bei gleichzeitiger Maximierung der eigenen Position",
            nl: "Het minimaliseren van de maximale winst van tegenstanders terwijl de eigen positie wordt gemaximaliseerd"
          },
          {
            en: "Maximizing resource production only",
            es: "Maximizar solo la producción de recursos",
            de: "Maximierung nur der Ressourcenproduktion",
            nl: "Alleen het maximaliseren van grondstofproductie"
          },
          {
            en: "Prioritizing longest road above all",
            es: "Priorizar el camino más largo por encima de todo",
            de: "Priorisierung der längsten Straße über alles",
            nl: "De langste handelsroute boven alles prioriteren"
          },
          {
            en: "Random move selection with heuristics",
            es: "Selección aleatoria de movimientos con heurísticas",
            de: "Zufällige Zugauswahl mit Heuristiken",
            nl: "Willekeurige zetselectie met heuristieken"
          }
        ],
        correct: 0,
        explanation: {
          en: "The minimax algorithm with alpha-beta pruning is a game-theoretical approach that evaluates decision trees to minimize the maximum possible loss (or maximize the minimum gain). In Catan, this means making moves that reduce opponents' best possible outcomes while improving your own position, pruning unnecessary branches for computational efficiency.",
          es: "El algoritmo minimax con poda alfa-beta es un enfoque de teoría de juegos que evalúa árboles de decisión para minimizar la pérdida máxima posible (o maximizar la ganancia mínima). En Catan, esto significa hacer movimientos que reducen los mejores resultados posibles de los oponentes mientras mejora tu propia posición, podando ramas innecesarias para eficiencia computacional.",
          de: "Der Minimax-Algorithmus mit Alpha-Beta-Pruning ist ein spieltheoretischer Ansatz, der Entscheidungsbäume bewertet, um den maximal möglichen Verlust zu minimieren (oder den minimalen Gewinn zu maximieren). In Catan bedeutet dies, Züge zu machen, die die bestmöglichen Ergebnisse der Gegner reduzieren und gleichzeitig die eigene Position verbessern, wobei unnötige Zweige für Recheneffizienz beschnitten werden.",
          nl: "Het minimax-algoritme met alfa-bèta-snoeiing is een speltheoretische benadering die beslissingsbomen evalueert om het maximaal mogelijke verlies te minimaliseren (of de minimale winst te maximaliseren). In Catan betekent dit zetten doen die de best mogelijke uitkomsten van tegenstanders verminderen terwijl je eigen positie verbetert, waarbij onnodige takken worden gesnoeid voor computationele efficiëntie."
        }
      },
      {
        question: {
          en: "According to Monte Carlo Tree Search (MCTS) simulations, what is the approximate win-rate increase from optimal initial placement versus average placement?",
          es: "Según las simulaciones de búsqueda de árbol de Monte Carlo (MCTS), ¿cuál es el aumento aproximado de tasa de victoria de una colocación inicial óptima versus colocación promedio?",
          de: "Laut Monte-Carlo-Baumsuche (MCTS)-Simulationen, wie hoch ist die ungefähre Gewinnraten-Steigerung bei optimaler Anfangsplatzierung gegenüber durchschnittlicher Platzierung?",
          nl: "Volgens Monte Carlo Tree Search (MCTS) simulaties, wat is de geschatte winst-ratio toename van optimale initiële plaatsing versus gemiddelde plaatsing?"
        },
        options: [
          {
            en: "12-18% higher win rate",
            es: "12-18% mayor tasa de victoria",
            de: "12-18% höhere Gewinnrate",
            nl: "12-18% hogere winstratio"
          },
          {
            en: "25-35% higher win rate",
            es: "25-35% mayor tasa de victoria",
            de: "25-35% höhere Gewinnrate",
            nl: "25-35% hogere winstratio"
          },
          {
            en: "3-5% higher win rate",
            es: "3-5% mayor tasa de victoria",
            de: "3-5% höhere Gewinnrate",
            nl: "3-5% hogere winstratio"
          },
          {
            en: "45-55% higher win rate",
            es: "45-55% mayor tasa de victoria",
            de: "45-55% höhere Gewinnrate",
            nl: "45-55% hogere winstratio"
          }
        ],
        correct: 1,
        explanation: {
          en: "Extensive MCTS simulations demonstrate that optimal initial placement (considering pip count, resource diversity, and expansion potential) yields approximately 25-35% higher win rates compared to average placements. This massive advantage stems from exponential compound effects throughout the game, making initial placement the single most critical decision in Catan.",
          es: "Las simulaciones extensivas de MCTS demuestran que la colocación inicial óptima (considerando el recuento de puntos, diversidad de recursos y potencial de expansión) produce aproximadamente 25-35% más tasas de victoria en comparación con colocaciones promedio. Esta enorme ventaja proviene de efectos compuestos exponenciales a lo largo del juego, haciendo de la colocación inicial la decisión más crítica en Catan.",
          de: "Umfangreiche MCTS-Simulationen zeigen, dass eine optimale Anfangsplatzierung (unter Berücksichtigung von Pip-Anzahl, Ressourcenvielfalt und Expansionspotenzial) etwa 25-35% höhere Gewinnraten im Vergleich zu durchschnittlichen Platzierungen ergibt. Dieser massive Vorteil ergibt sich aus exponentiellen Verbundeffekten während des gesamten Spiels, wodurch die Anfangsplatzierung die wichtigste Entscheidung in Catan ist.",
          nl: "Uitgebreide MCTS-simulaties tonen aan dat optimale initiële plaatsing (rekening houdend met pip-telling, grondstofdiversiteit en expansiepotentieel) ongeveer 25-35% hogere winstratios oplevert vergeleken met gemiddelde plaatsingen. Dit enorme voordeel komt voort uit exponentiële samengestelde effecten gedurende het spel, waardoor initiële plaatsing de belangrijkste beslissing in Catan is."
        }
      },
      {
        question: {
          en: "In Nash equilibrium analysis of Catan trading, what strategy dominates in a 4-player zero-sum approximation?",
          es: "En el análisis de equilibrio de Nash del comercio en Catan, ¿qué estrategia domina en una aproximación de suma cero de 4 jugadores?",
          de: "In der Nash-Gleichgewichtsanalyse des Catan-Handels, welche Strategie dominiert bei einer 4-Spieler-Nullsummen-Annäherung?",
          nl: "In Nash-evenwichtsanalyse van Catan-handel, welke strategie domineert in een 4-spelers nulsombenadering?"
        },
        options: [
          {
            en: "Always accepting 1:1 trades",
            es: "Aceptar siempre intercambios 1:1",
            de: "Immer 1:1 Handel akzeptieren",
            nl: "Altijd 1:1 ruilen accepteren"
          },
          {
            en: "Never trading with the leader",
            es: "Nunca comerciar con el líder",
            de: "Niemals mit dem Führenden handeln",
            nl: "Nooit handelen met de leider"
          },
          {
            en: "Conditional cooperation with leader-blocking coalitions",
            es: "Cooperación condicional con coaliciones que bloquean al líder",
            de: "Bedingte Kooperation mit führungsblockierenden Koalitionen",
            nl: "Voorwaardelijke samenwerking met leider-blokkerende coalities"
          },
          {
            en: "Maximizing personal trades regardless of game state",
            es: "Maximizar intercambios personales independientemente del estado del juego",
            de: "Persönliche Geschäfte maximieren unabhängig vom Spielzustand",
            nl: "Persoonlijke ruilen maximaliseren ongeacht spelstatus"
          }
        ],
        correct: 2,
        explanation: {
          en: "Nash equilibrium analysis reveals that the optimal strategy involves conditional cooperation where players form dynamic coalitions to prevent the leader from winning, while simultaneously maximizing individual positioning. This creates a balanced approach where trading with the leader is acceptable only when it doesn't push them closer to victory, and cooperation with other trailing players is prioritized when mutually beneficial.",
          es: "El análisis de equilibrio de Nash revela que la estrategia óptima involucra cooperación condicional donde los jugadores forman coaliciones dinámicas para evitar que el líder gane, mientras simultáneamente maximizan su posicionamiento individual. Esto crea un enfoque equilibrado donde comerciar con el líder es aceptable solo cuando no los acerca a la victoria, y la cooperación con otros jugadores rezagados se prioriza cuando es mutuamente beneficioso.",
          de: "Die Nash-Gleichgewichtsanalyse zeigt, dass die optimale Strategie bedingte Kooperation beinhaltet, bei der Spieler dynamische Koalitionen bilden, um den Führenden am Gewinnen zu hindern, während sie gleichzeitig ihre individuelle Position maximieren. Dies schafft einen ausgewogenen Ansatz, bei dem der Handel mit dem Führenden nur dann akzeptabel ist, wenn er ihn nicht näher an den Sieg bringt, und die Zusammenarbeit mit anderen zurückliegenden Spielern priorisiert wird, wenn sie gegenseitig vorteilhaft ist.",
          nl: "Nash-evenwichtsanalyse onthult dat de optimale strategie voorwaardelijke samenwerking omvat waarbij spelers dynamische coalities vormen om te voorkomen dat de leider wint, terwijl ze tegelijkertijd hun individuele positie maximaliseren. Dit creëert een evenwichtige benadering waarbij handelen met de leider alleen acceptabel is wanneer dit hen niet dichter bij de overwinning brengt, en samenwerking met andere achterblijvende spelers prioriteit krijgt wanneer dit wederzijds voordelig is."
        }
      },
      {
        question: {
          en: "What is the optimal Bayesian strategy for robber placement when you lack perfect information about opponents' hidden resources?",
          es: "¿Cuál es la estrategia bayesiana óptima para colocar el ladrón cuando careces de información perfecta sobre los recursos ocultos de los oponentes?",
          de: "Was ist die optimale Bayessche Strategie für die Räuberplatzierung, wenn keine perfekte Information über versteckte Ressourcen der Gegner vorliegt?",
          nl: "Wat is de optimale Bayesiaanse strategie voor rover-plaatsing wanneer je geen perfecte informatie hebt over verborgen grondstoffen van tegenstanders?"
        },
        options: [
          {
            en: "Always target the highest pip-count hex",
            es: "Siempre apuntar al hexágono con mayor recuento de puntos",
            de: "Immer das Feld mit der höchsten Pip-Anzahl anvisieren",
            nl: "Altijd richten op de hex met het hoogste pip-aantal"
          },
          {
            en: "Target based on opponent's recent trades and visible buildings",
            es: "Apuntar basándose en intercambios recientes y edificios visibles del oponente",
            de: "Zielen basierend auf kürzlichen Geschäften und sichtbaren Gebäuden des Gegners",
            nl: "Richten op basis van recente ruilen en zichtbare gebouwen van tegenstander"
          },
          {
            en: "Use maximum entropy probability model weighted by game state",
            es: "Usar modelo de probabilidad de máxima entropía ponderado por estado del juego",
            de: "Maximales Entropie-Wahrscheinlichkeitsmodell gewichtet nach Spielzustand verwenden",
            nl: "Maximale entropie-waarschijnlijkheidsmodel gebruiken, gewogen naar spelstatus"
          },
          {
            en: "Random placement to avoid predictability",
            es: "Colocación aleatoria para evitar previsibilidad",
            de: "Zufällige Platzierung zur Vermeidung von Vorhersehbarkeit",
            nl: "Willekeurige plaatsing om voorspelbaarheid te vermijden"
          }
        ],
        correct: 2,
        explanation: {
          en: "The Bayesian optimal approach uses maximum entropy modeling, which integrates observed data (trades, purchases, port usage) with prior probability distributions of resource holdings. This is weighted by current game state factors including victory point differential, turn order, and development card counts. This probabilistic model outperforms simple heuristics by 15-20% in simulation studies.",
          es: "El enfoque óptimo bayesiano usa modelado de máxima entropía, que integra datos observados (intercambios, compras, uso de puertos) con distribuciones de probabilidad previas de tenencias de recursos. Esto se pondera por factores de estado de juego actuales incluyendo diferencial de puntos de victoria, orden de turno y recuentos de cartas de desarrollo. Este modelo probabilístico supera heurísticas simples por 15-20% en estudios de simulación.",
          de: "Der Bayes-optimale Ansatz verwendet maximale Entropiemodellierung, die beobachtete Daten (Geschäfte, Käufe, Hafennutzung) mit vorherigen Wahrscheinlichkeitsverteilungen von Ressourcenbeständen integriert. Dies wird nach aktuellen Spielzustandsfaktoren gewichtet, einschließlich Siegpunktdifferenz, Zugreihenfolge und Entwicklungskartenanzahl. Dieses probabilistische Modell übertrifft einfache Heuristiken in Simulationsstudien um 15-20%.",
          nl: "De Bayesiaans optimale benadering gebruikt maximale entropie-modellering, die waargenomen gegevens (ruilen, aankopen, havengebruik) integreert met eerdere waarschijnlijkheidsverdelingen van grondstofbezit. Dit wordt gewogen naar huidige spelstatusfactoren inclusief overwinningspuntendifferentieel, beurtvolgorde en ontwikkelingskaartaantallen. Dit probabilistische model presteert 15-20% beter dan eenvoudige heuristieken in simulatiestudies."
        }
      },
      {
        question: {
          en: "In tournament metagame analysis, what opening strategy has the highest ELO correlation in competitive play?",
          es: "En el análisis de metagame de torneos, ¿qué estrategia de apertura tiene la correlación ELO más alta en juego competitivo?",
          de: "In der Turnier-Metagame-Analyse, welche Eröffnungsstrategie hat die höchste ELO-Korrelation im Wettkampfspiel?",
          nl: "In toernooi-metagame-analyse, welke openingsstrategie heeft de hoogste ELO-correlatie in competitief spel?"
        },
        options: [
          {
            en: "Wheat-ore focus with early city upgrades",
            es: "Enfoque en trigo-mineral con mejoras tempranas de ciudad",
            de: "Weizen-Erz-Fokus mit frühen Stadt-Upgrades",
            nl: "Tarwe-erts focus met vroege stadsupgrades"
          },
          {
            en: "Balanced resource distribution with port access",
            es: "Distribución equilibrada de recursos con acceso a puertos",
            de: "Ausgewogene Ressourcenverteilung mit Hafenzugang",
            nl: "Evenwichtige grondstoffenverdeling met haventoegang"
          },
          {
            en: "Aggressive expansion maximizing settlement spots",
            es: "Expansión agresiva maximizando lugares de asentamiento",
            de: "Aggressive Expansion mit Maximierung von Siedlungsplätzen",
            nl: "Agressieve expansie met maximalisatie van nederzettingsplaatsen"
          },
          {
            en: "Adaptive hybrid strategy based on board topology",
            es: "Estrategia híbrida adaptativa basada en topología del tablero",
            de: "Adaptive Hybridstrategie basierend auf Board-Topologie",
            nl: "Adaptieve hybride strategie gebaseerd op bordtopologie"
          }
        ],
        correct: 3,
        explanation: {
          en: "Tournament data analysis shows that top-ranked players (ELO 1800+) employ adaptive hybrid strategies that shift based on board topology, resource cluster distribution, and number placement. This flexibility outperforms rigid strategies by allowing players to exploit board-specific advantages. The correlation coefficient between adaptive play and ELO rating is approximately 0.72, significantly higher than fixed strategies (0.45-0.55).",
          es: "El análisis de datos de torneos muestra que los jugadores de mayor rango (ELO 1800+) emplean estrategias híbridas adaptativas que cambian según la topología del tablero, distribución de clusters de recursos y colocación de números. Esta flexibilidad supera estrategias rígidas al permitir a los jugadores explotar ventajas específicas del tablero. El coeficiente de correlación entre juego adaptativo y calificación ELO es aproximadamente 0.72, significativamente más alto que estrategias fijas (0.45-0.55).",
          de: "Turnierdatenanalyse zeigt, dass Spitzenspieler (ELO 1800+) adaptive Hybridstrategien einsetzen, die sich je nach Board-Topologie, Ressourcencluster-Verteilung und Zahlenplatzierung ändern. Diese Flexibilität übertrifft starre Strategien, indem sie es Spielern ermöglicht, board-spezifische Vorteile auszunutzen. Der Korrelationskoeffizient zwischen adaptivem Spiel und ELO-Rating beträgt etwa 0.72, deutlich höher als bei festen Strategien (0.45-0.55).",
          nl: "Toernooigegevensanalyse toont aan dat topspelers (ELO 1800+) adaptieve hybride strategieën gebruiken die verschuiven op basis van bordtopologie, grondstoffenclusterverdeling en nummerplaatsing. Deze flexibiliteit overtreft rigide strategieën door spelers in staat te stellen bordspecifieke voordelen te benutten. De correlatiecoëfficiënt tussen adaptief spel en ELO-rating is ongeveer 0.72, aanzienlijk hoger dan vaste strategieën (0.45-0.55)."
        }
      },
      {
        question: {
          en: "What is the theoretical maximum expected value (victory points per turn) from perfect probability-weighted settlement placement?",
          es: "¿Cuál es el valor esperado teórico máximo (puntos victoria por turno) de colocación asentamiento ponderada por probabilidad perfecta?",
          de: "Was ist der theoretische maximale Erwartungswert (in Siegpunkten pro Runde) erreichbar durch perfekte wahrscheinlichkeitsgewichtete Siedlungsplatzierung?",
          nl: "Wat is de theoretische maximale verwachte waarde (in overwinningspunten per beurt) bereikbaar vanuit perfecte waarschijnlijkheidsgewogen nederzettingsplaatsing?"
        },
        options: [
          {
            en: "0.42-0.48 VP/turn",
            es: "0.42-0.48 PV/turno",
            de: "0.42-0.48 SP/Runde",
            nl: "0.42-0.48 OP/beurt"
          },
          {
            en: "0.65-0.72 VP/turn",
            es: "0.65-0.72 PV/turno",
            de: "0.65-0.72 SP/Runde",
            nl: "0.65-0.72 OP/beurt"
          },
          {
            en: "0.25-0.30 VP/turn",
            es: "0.25-0.30 PV/turno",
            de: "0.25-0.30 SP/Runde",
            nl: "0.25-0.30 OP/beurt"
          },
          {
            en: "0.88-0.95 VP/turn",
            es: "0.88-0.95 PV/turno",
            de: "0.88-0.95 SP/Runde",
            nl: "0.88-0.95 OP/beurt"
          }
        ],
        correct: 0,
        explanation: {
          en: "Mathematical analysis shows that optimal probability-weighted placement (maximizing pip count × resource synergy × expansion potential) yields approximately 0.42-0.48 victory points per turn when accounting for resource-to-VP conversion efficiency. This includes weighted probabilities for cities (0.28 VP/turn), settlements (0.14 VP/turn), and development cards (0.06 VP/turn), representing the theoretical ceiling for production efficiency.",
          es: "El análisis matemático muestra que la colocación óptima ponderada por probabilidad (maximizando recuento de puntos × sinergia de recursos × potencial de expansión) produce aproximadamente 0.42-0.48 puntos de victoria por turno al tener en cuenta la eficiencia de conversión de recursos a PV. Esto incluye probabilidades ponderadas para ciudades (0.28 PV/turno), asentamientos (0.14 PV/turno) y cartas de desarrollo (0.06 PV/turno), representando el techo teórico para eficiencia de producción.",
          de: "Mathematische Analyse zeigt, dass optimale wahrscheinlichkeitsgewichtete Platzierung (Maximierung von Pip-Anzahl × Ressourcensynergie × Expansionspotenzial) etwa 0.42-0.48 Siegpunkte pro Runde ergibt, wenn die Ressourcen-zu-SP-Konvertierungseffizienz berücksichtigt wird. Dies umfasst gewichtete Wahrscheinlichkeiten für Städte (0.28 SP/Runde), Siedlungen (0.14 SP/Runde) und Entwicklungskarten (0.06 SP/Runde), was die theoretische Obergrenze für Produktionseffizienz darstellt.",
          nl: "Wiskundige analyse toont aan dat optimale waarschijnlijkheidsgewogen plaatsing (maximaliseren van pip-telling × grondstoffensynergie × expansiepotentieel) ongeveer 0.42-0.48 overwinningspunten per beurt oplevert bij het meenemen van grondstof-naar-OP conversie-efficiëntie. Dit omvat gewogen waarschijnlijkheden voor steden (0.28 OP/beurt), nederzettingen (0.14 OP/beurt) en ontwikkelingskaarten (0.06 OP/beurt), wat het theoretische plafond voor productie-efficiëntie vertegenwoordigt."
        }
      },
      {
        question: {
          en: "In computational game theory, what is the branching factor complexity of Catan's decision tree per turn?",
          es: "En teoría de juegos computacional, ¿cuál es la complejidad del factor de ramificación del árbol de decisión de Catan por turno?",
          de: "In der rechnerischen Spieltheorie, was ist die Verzweigungsfaktor-Komplexität des Catan-Entscheidungsbaums pro Runde?",
          nl: "In computationele speltheorie, wat is de vertakkingsfactor-complexiteit van Catan's beslissingsboom per beurt?"
        },
        options: [
          {
            en: "Approximately 50-100 possible moves",
            es: "Aproximadamente 50-100 movimientos posibles",
            de: "Ungefähr 50-100 mögliche Züge",
            nl: "Ongeveer 50-100 mogelijke zetten"
          },
          {
            en: "Approximately 200-500 possible moves",
            es: "Aproximadamente 200-500 movimientos posibles",
            de: "Ungefähr 200-500 mögliche Züge",
            nl: "Ongeveer 200-500 mogelijke zetten"
          },
          {
            en: "Approximately 800-2000 possible moves",
            es: "Aproximadamente 800-2000 movimientos posibles",
            de: "Ungefähr 800-2000 mögliche Züge",
            nl: "Ongeveer 800-2000 mogelijke zetten"
          },
          {
            en: "Approximately 3000-5000 possible moves",
            es: "Aproximadamente 3000-5000 movimientos posibles",
            de: "Ungefähr 3000-5000 mögliche Züge",
            nl: "Ongeveer 3000-5000 mogelijke zetten"
          }
        ],
        correct: 2,
        explanation: {
          en: "The branching factor in Catan is extremely high, typically 800-2000 possible moves per turn when accounting for: trade combinations (up to 1000+), building placements (20-50), development card plays (3-10), robber placements (19 hexes × 1-3 players), and maritime trade options (50-200). This enormous state space makes Catan computationally harder than chess in terms of pure branching complexity, requiring advanced pruning techniques.",
          es: "El factor de ramificación en Catan es extremadamente alto, típicamente 800-2000 movimientos posibles por turno al considerar: combinaciones de comercio (hasta 1000+), colocaciones de edificios (20-50), jugadas de cartas de desarrollo (3-10), colocaciones de ladrón (19 hexágonos × 1-3 jugadores) y opciones de comercio marítimo (50-200). Este enorme espacio de estados hace que Catan sea computacionalmente más difícil que el ajedrez en términos de complejidad de ramificación pura, requiriendo técnicas avanzadas de poda.",
          de: "Der Verzweigungsfaktor in Catan ist extrem hoch, typischerweise 800-2000 mögliche Züge pro Runde, wenn man berücksichtigt: Handelskombinationen (bis zu 1000+), Gebäudeplatzierungen (20-50), Entwicklungskartenspiele (3-10), Räuberplatzierungen (19 Felder × 1-3 Spieler) und Seehandelsoptionen (50-200). Dieser enorme Zustandsraum macht Catan rechnerisch schwieriger als Schach in Bezug auf reine Verzweigungskomplexität und erfordert fortgeschrittene Pruning-Techniken.",
          nl: "De vertakkingsfactor in Catan is extreem hoog, typisch 800-2000 mogelijke zetten per beurt bij het meenemen van: handelscombinaties (tot 1000+), gebouwplaatsingen (20-50), ontwikkelingskaart-spelen (3-10), roverplaatsingen (19 hexen × 1-3 spelers) en maritieme handelsopties (50-200). Deze enorme toestandsruimte maakt Catan computationeel moeilijker dan schaak in termen van pure vertakkingscomplexiteit, wat geavanceerde snoeitechnieken vereist."
        }
      },
      {
        question: {
          en: "What psychological principle is most exploitable in high-level Catan tournament play?",
          es: "¿Qué principio psicológico es más explotable en el juego de torneo de alto nivel de Catan?",
          de: "Welches psychologische Prinzip ist im hochrangigen Catan-Turnierspiel am meisten ausbeutbar?",
          nl: "Welk psychologisch principe is het meest exploiteerbaar in hoog-niveau Catan-toernooispel?"
        },
        options: [
          {
            en: "Anchoring bias in trade negotiations",
            es: "Sesgo de anclaje en negociaciones comerciales",
            de: "Anker-Bias in Handelsverhandlungen",
            nl: "Ankervooroordeel in handelsonderhandelingen"
          },
          {
            en: "Loss aversion triggering sub-optimal defensive plays",
            es: "Aversión a pérdidas desencadenando jugadas defensivas subóptimas",
            de: "Verlustaversion, die suboptimale Defensivspiele auslöst",
            nl: "Verliesaversie die sub-optimale defensieve spelen triggert"
          },
          {
            en: "Recency bias in robber targeting",
            es: "Sesgo de recencia en la orientación del ladrón",
            de: "Recency-Bias bei Räuber-Targeting",
            nl: "Recentheidsvooroordeel in rover-targeting"
          },
          {
            en: "All of the above in integrated psychological warfare",
            es: "Todos los anteriores en guerra psicológica integrada",
            de: "Alle oben genannten in integrierter psychologischer Kriegsführung",
            nl: "Alle bovenstaande in geïntegreerde psychologische oorlogsvoering"
          }
        ],
        correct: 3,
        explanation: {
          en: "Elite tournament players exploit all three psychological biases systematically: (1) Anchoring bias by proposing extreme trade ratios first, (2) Loss aversion by threatening actions that trigger defensive overreactions, and (3) Recency bias by manipulating perceived threat levels. Studies show that integrated psychological tactics can improve win rates by 8-12% against equally skilled but psychologically naive opponents.",
          es: "Los jugadores de élite de torneos explotan sistemáticamente los tres sesgos psicológicos: (1) Sesgo de anclaje proponiendo ratios de intercambio extremos primero, (2) Aversión a pérdidas amenazando acciones que desencadenan sobrerreacciones defensivas, y (3) Sesgo de recencia manipulando niveles de amenaza percibidos. Los estudios muestran que las tácticas psicológicas integradas pueden mejorar las tasas de victoria en 8-12% contra oponentes igualmente hábiles pero psicológicamente ingenuos.",
          de: "Elite-Turnierspieler nutzen alle drei psychologischen Vorurteile systematisch aus: (1) Anker-Bias durch zuerst extreme Handelsquoten vorzuschlagen, (2) Verlustaversion durch Androhung von Aktionen, die defensive Überreaktionen auslösen, und (3) Recency-Bias durch Manipulation wahrgenommener Bedrohungsstufen. Studien zeigen, dass integrierte psychologische Taktiken die Gewinnraten um 8-12% gegen gleich fähige, aber psychologisch naive Gegner verbessern können.",
          nl: "Elite toernooispelers exploiteren systematisch alle drie psychologische vooroordelen: (1) Ankervooroordeel door eerst extreme ruilverhoudingen voor te stellen, (2) Verliesaversie door acties te dreigen die defensieve overreacties veroorzaken, en (3) Recentheidsvooroordeel door gepercipieerde dreigingsniveaus te manipuleren. Studies tonen aan dat geïntegreerde psychologische tactieken winstratios kunnen verhogen met 8-12% tegen even vaardige maar psychologisch naïeve tegenstanders."
        }
      },
      {
        question: {
          en: "In AI development for Catan, what technique has shown the most promise for handling imperfect information?",
          es: "En el desarrollo de IA para Catan, ¿qué técnica ha mostrado más promesa para manejar información imperfecta?",
          de: "In der KI-Entwicklung für Catan, welche Technik hat das meiste Versprechen für den Umgang mit unvollständigen Informationen gezeigt?",
          nl: "In AI-ontwikkeling voor Catan, welke techniek heeft de meeste belofte getoond voor het omgaan met imperfecte informatie?"
        },
        options: [
          {
            en: "Deep neural networks with supervised learning",
            es: "Redes neuronales profundas con aprendizaje supervisado",
            de: "Tiefe neuronale Netzwerke mit überwachtem Lernen",
            nl: "Diepe neurale netwerken met gesuperviseerd leren"
          },
          {
            en: "Genetic algorithms with evolutionary strategies",
            es: "Algoritmos genéticos con estrategias evolutivas",
            de: "Genetische Algorithmen mit evolutionären Strategien",
            nl: "Genetische algoritmen met evolutionaire strategieën"
          },
          {
            en: "Counterfactual regret minimization (CFR)",
            es: "Minimización de arrepentimiento contrafactual (CFR)",
            de: "Kontrafaktische Bedauernminimierung (CFR)",
            nl: "Contrafeitelijke spijt-minimalisatie (CFR)"
          },
          {
            en: "Rule-based expert systems",
            es: "Sistemas expertos basados en reglas",
            de: "Regelbasierte Expertensysteme",
            nl: "Op regels gebaseerde expertsystemen"
          }
        ],
        correct: 2,
        explanation: {
          en: "Counterfactual Regret Minimization (CFR) has proven most effective for Catan AI because it excels at imperfect information games. CFR builds strategies by iteratively computing regret for not taking alternative actions across all possible information states, eventually converging to Nash equilibrium approximations. This outperforms deep learning in games with hidden information and complex trading dynamics, achieving superhuman performance in controlled experiments.",
          es: "La Minimización de Arrepentimiento Contrafactual (CFR) ha demostrado ser más efectiva para IA de Catan porque sobresale en juegos de información imperfecta. CFR construye estrategias calculando iterativamente el arrepentimiento por no tomar acciones alternativas en todos los estados de información posibles, eventualmente convergiendo a aproximaciones de equilibrio de Nash. Esto supera al aprendizaje profundo en juegos con información oculta y dinámicas de comercio complejas, logrando rendimiento sobrehumano en experimentos controlados.",
          de: "Kontrafaktische Bedauernminimierung (CFR) hat sich als am effektivsten für Catan-KI erwiesen, da sie bei Spielen mit unvollständigen Informationen hervorragend ist. CFR baut Strategien auf, indem sie iterativ Bedauern für das Nicht-Ergreifen alternativer Aktionen über alle möglichen Informationszustände berechnet und schließlich zu Nash-Gleichgewichtsannäherungen konvergiert. Dies übertrifft Deep Learning bei Spielen mit versteckten Informationen und komplexen Handelsdynamiken und erreicht übermenschliche Leistung in kontrollierten Experimenten.",
          nl: "Contrafeitelijke Spijt-Minimalisatie (CFR) is het meest effectief gebleken voor Catan AI omdat het uitblinkt in imperfecte informatiespellen. CFR bouwt strategieën op door iteratief spijt te berekenen voor het niet nemen van alternatieve acties over alle mogelijke informatietoestanden, uiteindelijk convergerend naar Nash-evenwichtsbenaderingen. Dit overtreft deep learning in spellen met verborgen informatie en complexe handelsdynamiek, waarbij bovenmenselijke prestaties worden bereikt in gecontroleerde experimenten."
        }
      },
      {
        question: {
          en: "What is the probability that a player holding 7 cards discards at least one specific resource type when forced to discard on a 7 roll, assuming uniform distribution?",
          es: "¿Cuál es la probabilidad de que un jugador con 7 cartas descarte al menos un tipo de recurso específico cuando se le obliga a descartar en una tirada de 7, asumiendo distribución uniforme?",
          de: "Wie hoch ist die Wahrscheinlichkeit, dass ein Spieler mit 7 Karten mindestens einen bestimmten Ressourcentyp abwirft, wenn er bei einem Wurf von 7 zum Abwerfen gezwungen wird, bei gleichmäßiger Verteilung?",
          nl: "Wat is de waarschijnlijkheid dat een speler met 7 kaarten ten minste één specifiek grondstoftype weglegt wanneer gedwongen om weg te leggen bij een 7-worp, uitgaande van uniforme verdeling?"
        },
        options: [
          {
            en: "Approximately 67%",
            es: "Aproximadamente 67%",
            de: "Ungefähr 67%",
            nl: "Ongeveer 67%"
          },
          {
            en: "Approximately 83%",
            es: "Aproximadamente 83%",
            de: "Ungefähr 83%",
            nl: "Ongeveer 83%"
          },
          {
            en: "Approximately 52%",
            es: "Aproximadamente 52%",
            de: "Ungefähr 52%",
            nl: "Ongeveer 52%"
          },
          {
            en: "Approximately 91%",
            es: "Aproximadamente 91%",
            de: "Ungefähr 91%",
            nl: "Ongeveer 91%"
          }
        ],
        correct: 1,
        explanation: {
          en: "Using combinatorial probability with 7 cards discarding 3 (rounded from 3.5), the probability of discarding at least one of a specific resource is 1 - P(discarding 0 of that type). With uniform distribution assumption (7 cards across 5 types ≈ 1.4 per type), this calculates to approximately 83%. This probability increases significantly with non-uniform distributions common in actual play.",
          es: "Usando probabilidad combinatoria con 7 cartas descartando 3 (redondeado de 3.5), la probabilidad de descartar al menos uno de un recurso específico es 1 - P(descartar 0 de ese tipo). Con suposición de distribución uniforme (7 cartas en 5 tipos ≈ 1.4 por tipo), esto se calcula en aproximadamente 83%. Esta probabilidad aumenta significativamente con distribuciones no uniformes comunes en el juego real.",
          de: "Mit kombinatorischer Wahrscheinlichkeit bei 7 Karten, die 3 abwerfen (gerundet von 3.5), ist die Wahrscheinlichkeit, mindestens eine bestimmte Ressource abzuwerfen, 1 - P(0 von diesem Typ abwerfen). Bei gleichmäßiger Verteilungsannahme (7 Karten über 5 Typen ≈ 1.4 pro Typ) ergibt sich etwa 83%. Diese Wahrscheinlichkeit steigt deutlich bei ungleichmäßigen Verteilungen, die im tatsächlichen Spiel üblich sind.",
          nl: "Gebruikmakend van combinatorische waarschijnlijkheid met 7 kaarten die 3 wegleggen (afgerond van 3.5), is de waarschijnlijkheid van het wegleggen van ten minste één van een specifieke grondstof 1 - P(0 van dat type wegleggen). Met uniforme verdelingsaanname (7 kaarten over 5 types ≈ 1.4 per type) berekent dit ongeveer 83%. Deze waarschijnlijkheid neemt aanzienlijk toe bij niet-uniforme verdelingen die gebruikelijk zijn in werkelijk spel."
        }
      },
      {
        question: {
          en: "In endgame analysis (8-9 VP), what is the optimal development card purchase threshold based on expected value?",
          es: "En análisis de final de juego (8-9 PV), ¿cuál es el umbral óptimo de compra de cartas de desarrollo basado en valor esperado?",
          de: "In der Endspiel-Analyse (8-9 SP), was ist die optimale Entwicklungskarten-Kaufschwelle basierend auf Erwartungswert?",
          nl: "In eindspel-analyse (8-9 OP), wat is de optimale ontwikkelingskaart aankoopdrempel gebaseerd op verwachte waarde?"
        },
        options: [
          {
            en: "Buy when you have 3+ victory points from cards remaining",
            es: "Comprar cuando tienes 3+ puntos de victoria de cartas restantes",
            de: "Kaufen, wenn 3+ Siegpunkte aus verbleibenden Karten vorhanden sind",
            nl: "Kopen wanneer je 3+ overwinningspunten van resterende kaarten hebt"
          },
          {
            en: "Buy only if leader is 1 turn from winning",
            es: "Comprar solo si el líder está a 1 turno de ganar",
            de: "Nur kaufen, wenn der Führende 1 Runde vom Gewinn entfernt ist",
            nl: "Alleen kopen als leider 1 beurt van winnen verwijderd is"
          },
          {
            en: "Buy when expected VP gain exceeds 0.6 per card",
            es: "Comprar cuando la ganancia de PV esperada exceda 0.6 por carta",
            de: "Kaufen, wenn erwarteter SP-Gewinn 0.6 pro Karte übersteigt",
            nl: "Kopen wanneer verwachte OP-winst 0.6 per kaart overschrijdt"
          },
          {
            en: "Never buy - always expand settlements",
            es: "Nunca comprar - siempre expandir asentamientos",
            de: "Niemals kaufen - immer Siedlungen erweitern",
            nl: "Nooit kopen - altijd nederzettingen uitbreiden"
          }
        ],
        correct: 2,
        explanation: {
          en: "Expected value analysis shows that development cards should be purchased when the expected VP gain exceeds 0.6 per card. This accounts for: VP cards (20% × 1 VP = 0.20), Knights enabling Largest Army (15% × 2 VP = 0.30), and utility cards preventing opponent wins (10% × varies). At 8-9 VP, the opportunity cost of not building is lower, and the variance benefits of dev cards outweigh deterministic building strategies.",
          es: "El análisis de valor esperado muestra que las cartas de desarrollo deben comprarse cuando la ganancia de PV esperada excede 0.6 por carta. Esto tiene en cuenta: cartas de PV (20% × 1 PV = 0.20), Caballeros habilitando Mayor Ejército (15% × 2 PV = 0.30), y cartas de utilidad evitando victorias de oponentes (10% × varía). A 8-9 PV, el costo de oportunidad de no construir es menor, y los beneficios de varianza de las cartas de desarrollo superan las estrategias de construcción deterministas.",
          de: "Erwartungswertanalyse zeigt, dass Entwicklungskarten gekauft werden sollten, wenn der erwartete SP-Gewinn 0.6 pro Karte übersteigt. Dies berücksichtigt: SP-Karten (20% × 1 SP = 0.20), Ritter, die Größte Rittermacht ermöglichen (15% × 2 SP = 0.30), und Nutzungskarten, die Gegnersiege verhindern (10% × variiert). Bei 8-9 SP sind die Opportunitätskosten des Nicht-Bauens geringer, und die Varianzvorteile von Entwicklungskarten überwiegen deterministische Baustrategien.",
          nl: "Verwachte waarde-analyse toont aan dat ontwikkelingskaarten gekocht moeten worden wanneer de verwachte OP-winst 0.6 per kaart overschrijdt. Dit houdt rekening met: OP-kaarten (20% × 1 OP = 0.20), Ridders die Grootste Riddermacht mogelijk maken (15% × 2 OP = 0.30), en hulpkaarten die tegenstander-overwinningen voorkomen (10% × varieert). Bij 8-9 OP zijn de opportuniteitskosten van niet bouwen lager, en de variantie-voordelen van ontwikkelingskaarten wegen zwaarder dan deterministische bouwstrategieën."
        }
      },
      {
        question: {
          en: "What advanced metric best predicts long-term winning potential in Catan?",
          es: "¿Qué métrica avanzada predice mejor el potencial de victoria a largo plazo en Catan?",
          de: "Welche fortgeschrittene Metrik sagt das langfristige Gewinnpotenzial in Catan am besten voraus?",
          nl: "Welke geavanceerde metriek voorspelt langetermijn-winpotentieel in Catan het beste?"
        },
        options: [
          {
            en: "Total pip count on all settlements and cities",
            es: "Recuento total de puntos en todos los asentamientos y ciudades",
            de: "Gesamte Pip-Anzahl auf allen Siedlungen und Städten",
            nl: "Totale pip-telling op alle nederzettingen en steden"
          },
          {
            en: "Resource diversity index weighted by scarcity",
            es: "Índice de diversidad de recursos ponderado por escasez",
            de: "Ressourcenvielfalt-Index gewichtet nach Knappheit",
            nl: "Grondstoffendiversiteitsindex gewogen naar schaarste"
          },
          {
            en: "Effective pip count adjusted for resource synergy and conversion efficiency",
            es: "Recuento de puntos efectivo ajustado por sinergia de recursos y eficiencia de conversión",
            de: "Effektive Pip-Anzahl angepasst für Ressourcensynergie und Konvertierungseffizienz",
            nl: "Effectieve pip-telling aangepast voor grondstoffensynergie en conversie-efficiëntie"
          },
          {
            en: "Number of expansion spots controlled",
            es: "Número de lugares de expansión controlados",
            de: "Anzahl der kontrollierten Expansionsplätze",
            nl: "Aantal gecontroleerde expansieplaatsen"
          }
        ],
        correct: 2,
        explanation: {
          en: "Effective pip count (EPC) is the strongest predictor with correlation coefficient r=0.81 to final victory. EPC adjusts raw pip count by: (1) Resource synergy multipliers (1.15x for balanced, 0.85x for mono-resource), (2) Conversion efficiency via ports and trades (1.1-1.3x), (3) Robber vulnerability penalty (-0.05x per high-pip hex), and (4) Expansion potential bonus (+0.1x per available spot). This holistic metric outperforms simple pip counting by 23%.",
          es: "El recuento de puntos efectivo (EPC) es el predictor más fuerte con coeficiente de correlación r=0.81 a la victoria final. EPC ajusta el recuento de puntos bruto por: (1) Multiplicadores de sinergia de recursos (1.15x para equilibrado, 0.85x para mono-recurso), (2) Eficiencia de conversión vía puertos e intercambios (1.1-1.3x), (3) Penalización de vulnerabilidad al ladrón (-0.05x por hexágono de alto-pip), y (4) Bonificación de potencial de expansión (+0.1x por lugar disponible). Esta métrica holística supera el conteo simple de puntos en 23%.",
          de: "Effektive Pip-Anzahl (EPC) ist der stärkste Prädiktor mit Korrelationskoeffizient r=0.81 zum endgültigen Sieg. EPC passt die rohe Pip-Anzahl an durch: (1) Ressourcensynergie-Multiplikatoren (1.15x für ausgewogen, 0.85x für Mono-Ressource), (2) Konvertierungseffizienz über Häfen und Handel (1.1-1.3x), (3) Räuber-Verwundbarkeitsstrafe (-0.05x pro High-Pip-Feld), und (4) Expansionspotenzial-Bonus (+0.1x pro verfügbarem Platz). Diese ganzheitliche Metrik übertrifft einfaches Pip-Zählen um 23%.",
          nl: "Effectieve pip-telling (EPC) is de sterkste voorspeller met correlatiecoëfficiënt r=0.81 tot uiteindelijke overwinning. EPC past ruwe pip-telling aan door: (1) Grondstoffensynergie-vermenigvuldigers (1.15x voor evenwichtig, 0.85x voor mono-grondstof), (2) Conversie-efficiëntie via havens en ruilen (1.1-1.3x), (3) Rover-kwetsbaarheidsboete (-0.05x per hoge-pip hex), en (4) Expansiepotentieel-bonus (+0.1x per beschikbare plek). Deze holistische metriek overtreft eenvoudig pip-tellen met 23%."
        }
      },
      {
        question: {
          en: "In multi-agent reinforcement learning for Catan, what reward shaping strategy produces the most robust policies?",
          es: "En aprendizaje por refuerzo multiagente para Catan, ¿qué estrategia de modelado de recompensas produce las políticas más robustas?",
          de: "Im Multi-Agenten-Reinforcement-Learning für Catan, welche Reward-Shaping-Strategie produziert die robustesten Richtlinien?",
          nl: "In multi-agent reinforcement learning voor Catan, welke beloningsvorming-strategie produceert de meest robuuste beleidslijnen?"
        },
        options: [
          {
            en: "Sparse rewards only on victory/defeat",
            es: "Recompensas escasas solo en victoria/derrota",
            de: "Spärliche Belohnungen nur bei Sieg/Niederlage",
            nl: "Schaarse beloningen alleen bij overwinning/nederlaag"
          },
          {
            en: "Dense rewards for every action taken",
            es: "Recompensas densas por cada acción tomada",
            de: "Dichte Belohnungen für jede durchgeführte Aktion",
            nl: "Dichte beloningen voor elke ondernomen actie"
          },
          {
            en: "Hierarchical rewards combining milestone achievement with opponent suppression",
            es: "Recompensas jerárquicas combinando logros de hitos con supresión de oponentes",
            de: "Hierarchische Belohnungen, die Meilenstein-Erreichung mit Gegner-Unterdrückung kombinieren",
            nl: "Hiërarchische beloningen die mijlpaal-bereiking combineren met tegenstander-onderdrukking"
          },
          {
            en: "Inverse rewards penalizing sub-optimal moves",
            es: "Recompensas inversas penalizando movimientos subóptimos",
            de: "Inverse Belohnungen, die suboptimale Züge bestrafen",
            nl: "Inverse beloningen die sub-optimale zetten bestraffen"
          }
        ],
        correct: 2,
        explanation: {
          en: "Hierarchical reward shaping combining positive rewards for milestone achievements (settlements, cities, VP cards) with negative rewards for enabling opponent progress produces the most robust multi-agent policies. This approach balances exploration-exploitation better than sparse or dense rewards alone, achieving 15-20% higher win rates against diverse opponents. The dual objective prevents both overly aggressive and overly passive strategies.",
          es: "El modelado de recompensas jerárquicas que combina recompensas positivas por logros de hitos (asentamientos, ciudades, cartas de PV) con recompensas negativas por permitir el progreso del oponente produce las políticas multiagente más robustas. Este enfoque equilibra exploración-explotación mejor que recompensas escasas o densas solas, logrando 15-20% más tasas de victoria contra diversos oponentes. El doble objetivo previene estrategias tanto excesivamente agresivas como excesivamente pasivas.",
          de: "Hierarchisches Reward-Shaping, das positive Belohnungen für Meilenstein-Errungenschaften (Siedlungen, Städte, SP-Karten) mit negativen Belohnungen für die Ermöglichung von Gegnerfortschritt kombiniert, produziert die robustesten Multi-Agenten-Richtlinien. Dieser Ansatz balanciert Exploration-Exploitation besser als spärliche oder dichte Belohnungen allein und erreicht 15-20% höhere Gewinnraten gegen diverse Gegner. Das duale Ziel verhindert sowohl übermäßig aggressive als auch übermäßig passive Strategien.",
          nl: "Hiërarchische beloningsvorming die positieve beloningen voor mijlpaal-prestaties (nederzettingen, steden, OP-kaarten) combineert met negatieve beloningen voor het mogelijk maken van tegenstander-vooruitgang produceert de meest robuuste multi-agent beleidslijnen. Deze benadering balanceert exploratie-exploitatie beter dan schaarse of dichte beloningen alleen, waarbij 15-20% hogere winstratios worden behaald tegen diverse tegenstanders. De dubbele doelstelling voorkomt zowel overdreven agressieve als overdreven passieve strategieën."
        }
      },
      {
        question: {
          en: "What is the optimal port-value multiplier in resource-to-VP conversion efficiency calculations?",
          es: "¿Cuál es el multiplicador óptimo de valor de puerto en cálculos de eficiencia de conversión de recursos a PV?",
          de: "Was ist der optimale Hafen-Wert-Multiplikator in Ressourcen-zu-SP-Konvertierungseffizienz-Berechnungen?",
          nl: "Wat is de optimale haven-waarde-vermenigvuldiger in grondstof-naar-OP conversie-efficiëntie berekeningen?"
        },
        options: [
          {
            en: "1.5x for 2:1 ports, 1.2x for 3:1 ports",
            es: "1.5x para puertos 2:1, 1.2x para puertos 3:1",
            de: "1.5x für 2:1 Häfen, 1.2x für 3:1 Häfen",
            nl: "1.5x voor 2:1 havens, 1.2x voor 3:1 havens"
          },
          {
            en: "2.0x for 2:1 ports, 1.5x for 3:1 ports",
            es: "2.0x para puertos 2:1, 1.5x para puertos 3:1",
            de: "2.0x für 2:1 Häfen, 1.5x für 3:1 Häfen",
            nl: "2.0x voor 2:1 havens, 1.5x voor 3:1 havens"
          },
          {
            en: "1.3x for 2:1 ports, 1.1x for 3:1 ports",
            es: "1.3x para puertos 2:1, 1.1x para puertos 3:1",
            de: "1.3x für 2:1 Häfen, 1.1x für 3:1 Häfen",
            nl: "1.3x voor 2:1 havens, 1.1x voor 3:1 havens"
          },
          {
            en: "1.8x for 2:1 ports, 1.3x for 3:1 ports",
            es: "1.8x para puertos 2:1, 1.3x para puertos 3:1",
            de: "1.8x für 2:1 Häfen, 1.3x für 3:1 Häfen",
            nl: "1.8x voor 2:1 havens, 1.3x voor 3:1 havens"
          }
        ],
        correct: 0,
        explanation: {
          en: "Mathematical modeling shows that 2:1 specialized ports provide approximately 1.5x conversion efficiency (effectively doubling the value of that resource), while 3:1 generic ports provide 1.2x efficiency (25% improvement over 4:1 trading). These multipliers are derived from optimization equations that account for resource scarcity, hand size constraints, and opportunity costs. Overvaluing ports leads to sub-optimal initial placement strategies.",
          es: "El modelado matemático muestra que los puertos especializados 2:1 proporcionan aproximadamente 1.5x de eficiencia de conversión (efectivamente duplicando el valor de ese recurso), mientras que los puertos genéricos 3:1 proporcionan 1.2x de eficiencia (25% de mejora sobre el comercio 4:1). Estos multiplicadores se derivan de ecuaciones de optimización que tienen en cuenta la escasez de recursos, restricciones de tamaño de mano y costos de oportunidad. Sobrevalurar los puertos conduce a estrategias de colocación inicial subóptimas.",
          de: "Mathematische Modellierung zeigt, dass 2:1 spezialisierte Häfen etwa 1.5x Konvertierungseffizienz bieten (effektiv den Wert dieser Ressource verdoppelnd), während 3:1 generische Häfen 1.2x Effizienz bieten (25% Verbesserung gegenüber 4:1 Handel). Diese Multiplikatoren werden aus Optimierungsgleichungen abgeleitet, die Ressourcenknappheit, Handgrößenbeschränkungen und Opportunitätskosten berücksichtigen. Häfen zu überbewerten führt zu suboptimalen Anfangsplatzierungsstrategien.",
          nl: "Wiskundige modellering toont aan dat 2:1 gespecialiseerde havens ongeveer 1.5x conversie-efficiëntie bieden (effectief de waarde van die grondstof verdubbelen), terwijl 3:1 generieke havens 1.2x efficiëntie bieden (25% verbetering ten opzichte van 4:1 handelen). Deze vermenigvuldigers zijn afgeleid van optimalisatievergelijkingen die grondstoffenschaarste, handgrootte-beperkingen en opportuniteitskosten meenemen. Havens te hoog waarderen leidt tot sub-optimale initiële plaatsingsstrategieën."
        }
      },
      {
        question: {
          en: "According to game-theoretic analysis, what is the optimal response to being in second place at 7 VP when the leader has 9 VP?",
          es: "Según el análisis de teoría de juegos, ¿cuál es la respuesta óptima a estar en segundo lugar con 7 PV cuando el líder tiene 9 PV?",
          de: "Laut spieltheoretischer Analyse, was ist die optimale Antwort darauf, mit 7 SP auf dem zweiten Platz zu sein, wenn der Führende 9 SP hat?",
          nl: "Volgens speltheoretische analyse, wat is de optimale reactie op het zijn van tweede plaats met 7 OP wanneer de leider 9 OP heeft?"
        },
        options: [
          {
            en: "Maximize personal VP generation rate",
            es: "Maximizar la tasa personal de generación de PV",
            de: "Persönliche SP-Generierungsrate maximieren",
            nl: "Persoonlijke OP-generatiesnelheid maximaliseren"
          },
          {
            en: "Focus entirely on blocking the leader",
            es: "Enfocarse completamente en bloquear al líder",
            de: "Sich vollständig auf das Blockieren des Führenden konzentrieren",
            nl: "Volledig focussen op het blokkeren van de leider"
          },
          {
            en: "Balanced strategy: 60% blocking leader, 40% personal growth",
            es: "Estrategia equilibrada: 60% bloquear líder, 40% crecimiento personal",
            de: "Ausgewogene Strategie: 60% Führenden blockieren, 40% persönliches Wachstum",
            nl: "Evenwichtige strategie: 60% leider blokkeren, 40% persoonlijke groei"
          },
          {
            en: "Form coalition with third/fourth place to block leader",
            es: "Formar coalición con tercer/cuarto lugar para bloquear al líder",
            de: "Koalition mit Dritt-/Viertplatziertem bilden, um Führenden zu blockieren",
            nl: "Coalitie vormen met derde/vierde plaats om leider te blokkeren"
          }
        ],
        correct: 2,
        explanation: {
          en: "Game-theoretic optimization shows that the second-place player should allocate approximately 60% of resources to blocking the leader (robber placement, trade denial, road blocking) while maintaining 40% focus on personal VP generation. This balanced approach maximizes the probability of either: (1) successfully preventing leader victory while catching up, or (2) capitalizing if the leader is blocked by others. Pure blocking (100%) or pure growth (0% blocking) both reduce win probability by 18-25%.",
          es: "La optimización de teoría de juegos muestra que el jugador en segundo lugar debe asignar aproximadamente 60% de recursos a bloquear al líder (colocación de ladrón, negación de intercambio, bloqueo de camino) mientras mantiene 40% de enfoque en generación personal de PV. Este enfoque equilibrado maximiza la probabilidad de: (1) prevenir exitosamente la victoria del líder mientras se alcanza, o (2) capitalizar si el líder es bloqueado por otros. El bloqueo puro (100%) o el crecimiento puro (0% bloqueo) reducen la probabilidad de victoria en 18-25%.",
          de: "Spieltheoretische Optimierung zeigt, dass der Zweitplatzierte etwa 60% der Ressourcen dem Blockieren des Führenden widmen sollte (Räuberplatzierung, Handelsverweigerung, Straßenblockierung), während er 40% Fokus auf persönliche SP-Generierung beibehält. Dieser ausgewogene Ansatz maximiert die Wahrscheinlichkeit von entweder: (1) erfolgreich den Sieg des Führenden verhindern, während man aufholt, oder (2) profitieren, wenn der Führende von anderen blockiert wird. Reines Blockieren (100%) oder reines Wachstum (0% Blockieren) reduzieren beide die Gewinnwahrscheinlichkeit um 18-25%.",
          nl: "Speltheoretische optimalisatie toont aan dat de tweede-plaatsspeler ongeveer 60% van middelen moet toewijzen aan het blokkeren van de leider (rover-plaatsing, ruilweigering, weg-blokkering) terwijl 40% focus op persoonlijke OP-generatie wordt behouden. Deze evenwichtige benadering maximaliseert de waarschijnlijkheid van ofwel: (1) succesvol de overwinning van de leider voorkomen terwijl je inhaalt, of (2) profiteren als de leider door anderen wordt geblokkeerd. Puur blokkeren (100%) of pure groei (0% blokkeren) verminderen beide de winstwaarschijnlijkheid met 18-25%."
        }
      },
      {
        question: {
          en: "What is the complexity class of computing optimal Catan strategy?",
          es: "¿Cuál es la clase de complejidad de calcular la estrategia óptima de Catan?",
          de: "Was ist die Komplexitätsklasse zur Berechnung der optimalen Catan-Strategie?",
          nl: "Wat is de complexiteitsklasse van het berekenen van optimale Catan-strategie?"
        },
        options: [
          {
            en: "P (Polynomial time)",
            es: "P (Tiempo polinomial)",
            de: "P (Polynomielle Zeit)",
            nl: "P (Polynomiale tijd)"
          },
          {
            en: "NP-Complete",
            es: "NP-Completo",
            de: "NP-Vollständig",
            nl: "NP-Compleet"
          },
          {
            en: "PSPACE-Complete",
            es: "PSPACE-Completo",
            de: "PSPACE-Vollständig",
            nl: "PSPACE-Compleet"
          },
          {
            en: "EXPTIME-Complete",
            es: "EXPTIME-Completo",
            de: "EXPTIME-Vollständig",
            nl: "EXPTIME-Compleet"
          }
        ],
        correct: 2,
        explanation: {
          en: "Catan belongs to PSPACE-Complete complexity class, the same as chess and go. This is because: (1) the game tree depth can be polynomial in board size, (2) it involves imperfect information requiring reasoning about opponent knowledge states, (3) trading introduces multi-agent negotiation complexity, and (4) the state space is exponential but verifiable in polynomial space. This makes exact solution computation intractable for practical purposes, requiring approximation algorithms.",
          es: "Catan pertenece a la clase de complejidad PSPACE-Completo, igual que el ajedrez y el go. Esto es porque: (1) la profundidad del árbol de juego puede ser polinomial en el tamaño del tablero, (2) involucra información imperfecta requiriendo razonamiento sobre estados de conocimiento del oponente, (3) el comercio introduce complejidad de negociación multiagente, y (4) el espacio de estados es exponencial pero verificable en espacio polinomial. Esto hace que el cálculo de solución exacta sea intratable para propósitos prácticos, requiriendo algoritmos de aproximación.",
          de: "Catan gehört zur PSPACE-Vollständigen Komplexitätsklasse, genauso wie Schach und Go. Dies liegt daran: (1) die Spielbaumtiefe kann polynomial in der Boardgröße sein, (2) es beinhaltet unvollständige Informationen, die Überlegungen über Gegnerwissenszustände erfordern, (3) Handel führt Multi-Agenten-Verhandlungskomplexität ein, und (4) der Zustandsraum ist exponentiell, aber in polynomialem Raum verifizierbar. Dies macht die exakte Lösungsberechnung für praktische Zwecke unlösbar und erfordert Approximationsalgorithmen.",
          nl: "Catan behoort tot PSPACE-Complete complexiteitsklasse, hetzelfde als schaak en go. Dit komt doordat: (1) de spelboomdiepte polynomiaal kan zijn in bordgrootte, (2) het imperfecte informatie omvat die redenering over tegenstander-kennistoestanden vereist, (3) handelen multi-agent onderhandelingscomplexiteit introduceert, en (4) de toestandsruimte exponentieel is maar verifieerbaar in polynomiale ruimte. Dit maakt exacte oplossingsberekening onhaalbaar voor praktische doeleinden, wat benaderingsalgoritmen vereist."
        }
      },
      {
        question: {
          en: "In variance reduction techniques for Catan AI training, what method shows the highest sample efficiency?",
          es: "En técnicas de reducción de varianza para entrenamiento de IA de Catan, ¿qué método muestra la mayor eficiencia de muestras?",
          de: "In Varianzreduktionstechniken für Catan-KI-Training, welche Methode zeigt die höchste Stichprobeneffizienz?",
          nl: "In variantiereductie-technieken voor Catan AI-training, welke methode toont de hoogste steekproef-efficiëntie?"
        },
        options: [
          {
            en: "Importance sampling with fixed baseline",
            es: "Muestreo de importancia con línea base fija",
            de: "Importance Sampling mit fester Baseline",
            nl: "Importance sampling met vaste basislijn"
          },
          {
            en: "Generalized Advantage Estimation (GAE)",
            es: "Estimación de ventaja generalizada (GAE)",
            de: "Generalisierte Vorteilsschätzung (GAE)",
            nl: "Gegeneraliseerde Voordeel Schatting (GAE)"
          },
          {
            en: "Control variates with opponent modeling",
            es: "Variables de control con modelado de oponentes",
            de: "Kontrollvariablen mit Gegnermodellierung",
            nl: "Controle-variabelen met tegenstander-modellering"
          },
          {
            en: "Simple Monte Carlo with large sample size",
            es: "Monte Carlo simple con gran tamaño de muestra",
            de: "Einfaches Monte Carlo mit großer Stichprobengröße",
            nl: "Eenvoudige Monte Carlo met grote steekproefgrootte"
          }
        ],
        correct: 2,
        explanation: {
          en: "Control variates with opponent modeling achieves the highest sample efficiency by using correlated random variables (opponent action predictions) to reduce variance. This technique exploits the fact that opponent behavior can be modeled with reasonable accuracy, allowing for variance reduction of 40-60% compared to standard methods. GAE is effective but doesn't leverage game-specific structure as well. Studies show control variates require 2-3x fewer samples to reach equivalent performance.",
          es: "Las variables de control con modelado de oponentes logran la mayor eficiencia de muestras usando variables aleatorias correlacionadas (predicciones de acción del oponente) para reducir la varianza. Esta técnica explota el hecho de que el comportamiento del oponente puede modelarse con precisión razonable, permitiendo una reducción de varianza de 40-60% en comparación con métodos estándar. GAE es efectivo pero no aprovecha la estructura específica del juego tan bien. Los estudios muestran que las variables de control requieren 2-3x menos muestras para alcanzar el rendimiento equivalente.",
          de: "Kontrollvariablen mit Gegnermodellierung erreichen die höchste Stichprobeneffizienz, indem sie korrelierte Zufallsvariablen (Gegnneraktionsvorhersagen) verwenden, um Varianz zu reduzieren. Diese Technik nutzt die Tatsache aus, dass Gegnerverhalten mit vernünftiger Genauigkeit modelliert werden kann, was eine Varianzreduktion von 40-60% im Vergleich zu Standardmethoden ermöglicht. GAE ist effektiv, nutzt aber die spielspezifische Struktur nicht so gut. Studien zeigen, dass Kontrollvariablen 2-3x weniger Samples benötigen, um äquivalente Leistung zu erreichen.",
          nl: "Controle-variabelen met tegenstander-modellering bereiken de hoogste steekproef-efficiëntie door gecorreleerde willekeurige variabelen (tegenstander-actievoorspellingen) te gebruiken om variantie te verminderen. Deze techniek maakt gebruik van het feit dat tegenstander-gedrag met redelijke nauwkeurigheid kan worden gemodelleerd, wat een variantiereductie van 40-60% mogelijk maakt vergeleken met standaardmethoden. GAE is effectief maar benut game-specifieke structuur niet zo goed. Studies tonen aan dat controle-variabelen 2-3x minder steekproeven nodig hebben om gelijkwaardige prestaties te bereiken."
        }
      },
      {
        question: {
          en: "What is the expected number of turns for a skilled player to win Catan from optimal starting positions in a 4-player game?",
          es: "¿Cuál es el número esperado de turnos para que un jugador hábil gane Catan desde posiciones iniciales óptimas en un juego de 4 jugadores?",
          de: "Was ist die erwartete Anzahl von Runden für einen erfahrenen Spieler, um Catan von optimalen Startpositionen in einem 4-Spieler-Spiel zu gewinnen?",
          nl: "Wat is het verwachte aantal beurten voor een vaardige speler om Catan te winnen vanuit optimale startposities in een 4-spelers spel?"
        },
        options: [
          {
            en: "18-22 turns",
            es: "18-22 turnos",
            de: "18-22 Runden",
            nl: "18-22 beurten"
          },
          {
            en: "25-30 turns",
            es: "25-30 turnos",
            de: "25-30 Runden",
            nl: "25-30 beurten"
          },
          {
            en: "35-42 turns",
            es: "35-42 turnos",
            de: "35-42 Runden",
            nl: "35-42 beurten"
          },
          {
            en: "45-55 turns",
            es: "45-55 turnos",
            de: "45-55 Runden",
            nl: "45-55 beurten"
          }
        ],
        correct: 1,
        explanation: {
          en: "Statistical analysis of tournament games shows that skilled players (ELO 1600+) win in approximately 25-30 turns from optimal starting positions. This accounts for: initial 2 settlements (2 VP), 2 cities (4 VP), 2 additional settlements (2 VP), Largest Army (2 VP), and VP cards/achievements (2 VP). The range reflects variance from dice rolls, opponent interference, and development card luck. Games finishing in under 22 turns typically involve exceptional luck or weak opposition.",
          es: "El análisis estadístico de juegos de torneo muestra que los jugadores hábiles (ELO 1600+) ganan en aproximadamente 25-30 turnos desde posiciones iniciales óptimas. Esto tiene en cuenta: 2 asentamientos iniciales (2 PV), 2 ciudades (4 PV), 2 asentamientos adicionales (2 PV), Mayor Ejército (2 PV) y cartas/logros de PV (2 PV). El rango refleja varianza de tiradas de dados, interferencia de oponentes y suerte de cartas de desarrollo. Los juegos que terminan en menos de 22 turnos típicamente involucran suerte excepcional u oposición débil.",
          de: "Statistische Analyse von Turnierspielen zeigt, dass erfahrene Spieler (ELO 1600+) in etwa 25-30 Runden von optimalen Startpositionen gewinnen. Dies berücksichtigt: anfängliche 2 Siedlungen (2 SP), 2 Städte (4 SP), 2 zusätzliche Siedlungen (2 SP), Größte Rittermacht (2 SP) und SP-Karten/Errungenschaften (2 SP). Der Bereich spiegelt Varianz von Würfelwürfen, Gegnerstörungen und Entwicklungskarten-Glück wider. Spiele, die in unter 22 Runden enden, beinhalten typischerweise außergewöhnliches Glück oder schwache Opposition.",
          nl: "Statistische analyse van toernooispellen toont aan dat vaardige spelers (ELO 1600+) winnen in ongeveer 25-30 beurten vanuit optimale startposities. Dit houdt rekening met: initiële 2 nederzettingen (2 OP), 2 steden (4 OP), 2 extra nederzettingen (2 OP), Grootste Riddermacht (2 OP) en OP-kaarten/prestaties (2 OP). Het bereik weerspiegelt variantie van dobbelsteenworpen, tegenstander-interferentie en ontwikkelingskaart-geluk. Spellen die eindigen in minder dan 22 beurten omvatten typisch uitzonderlijk geluk of zwakke oppositie."
        }
      },
      {
        question: {
          en: "In information-theoretic analysis, what is the optimal information revelation strategy during trading negotiations?",
          es: "En análisis de teoría de la información, ¿cuál es la estrategia óptima de revelación de información durante negociaciones comerciales?",
          de: "In informationstheoretischer Analyse, was ist die optimale Informationsenthüllungsstrategie während Handelsverhandlungen?",
          nl: "In informatie-theoretische analyse, wat is de optimale informatie-onthullingsstrategie tijdens handelsonderhandelingen?"
        },
        options: [
          {
            en: "Never reveal true resource holdings",
            es: "Nunca revelar las tenencias de recursos reales",
            de: "Niemals wahre Ressourcenbestände offenbaren",
            nl: "Nooit echte grondstoffenbezit onthullen"
          },
          {
            en: "Always reveal to build trust and reciprocity",
            es: "Siempre revelar para construir confianza y reciprocidad",
            de: "Immer offenbaren, um Vertrauen und Gegenseitigkeit aufzubauen",
            nl: "Altijd onthullen om vertrouwen en wederkerigheid op te bouwen"
          },
          {
            en: "Selectively reveal low-value information to gain high-value information",
            es: "Revelar selectivamente información de bajo valor para ganar información de alto valor",
            de: "Selektiv niedrigwertige Informationen offenbaren, um hochwertige Informationen zu gewinnen",
            nl: "Selectief lage-waarde informatie onthullen om hoge-waarde informatie te verkrijgen"
          },
          {
            en: "Random revelation to maintain unpredictability",
            es: "Revelación aleatoria para mantener impredecibilidad",
            de: "Zufällige Offenbarung zur Aufrechterhaltung der Unvorhersehbarkeit",
            nl: "Willekeurige onthulling om onvoorspelbaarheid te behouden"
          }
        ],
        correct: 2,
        explanation: {
          en: "Information-theoretic optimization shows that selective revelation of low-value information (e.g., 'I have some sheep') in exchange for high-value information (e.g., opponent's development card count, resource distribution) maximizes expected utility. This asymmetric information exchange exploits human reciprocity bias while minimizing strategic disadvantage. The key is revealing information that opponents could likely infer anyway while extracting non-obvious strategic intelligence. This approach increases trade success rates by 25-35% while improving strategic positioning.",
          es: "La optimización de teoría de la información muestra que la revelación selectiva de información de bajo valor (p. ej., 'Tengo algunas ovejas') a cambio de información de alto valor (p. ej., recuento de cartas de desarrollo del oponente, distribución de recursos) maximiza la utilidad esperada. Este intercambio de información asimétrica explota el sesgo de reciprocidad humana mientras minimiza la desventaja estratégica. La clave es revelar información que los oponentes probablemente podrían inferir de todos modos mientras se extrae inteligencia estratégica no obvia. Este enfoque aumenta las tasas de éxito comercial en 25-35% mientras mejora el posicionamiento estratégico.",
          de: "Informationstheoretische Optimierung zeigt, dass selektive Offenbarung niedrigwertiger Informationen (z.B. 'Ich habe einige Schafe') im Austausch für hochwertige Informationen (z.B. Entwicklungskartenanzahl des Gegners, Ressourcenverteilung) den erwarteten Nutzen maximiert. Dieser asymmetrische Informationsaustausch nutzt menschlichen Reziprozitätsbias aus, während strategischer Nachteil minimiert wird. Der Schlüssel ist, Informationen zu offenbaren, die Gegner wahrscheinlich sowieso ableiten könnten, während nicht-offensichtliche strategische Intelligenz extrahiert wird. Dieser Ansatz erhöht Handelserfolgsraten um 25-35%, während die strategische Positionierung verbessert wird.",
          nl: "Informatie-theoretische optimalisatie toont aan dat selectieve onthulling van lage-waarde informatie (bijv. 'Ik heb wat schapen') in ruil voor hoge-waarde informatie (bijv. tegenstander's ontwikkelingskaartaantal, grondstoffenverdeling) verwacht nut maximaliseert. Deze asymmetrische informatie-uitwisseling maakt gebruik van menselijk wederkerigheidsvooroordeel terwijl strategisch nadeel wordt geminimaliseerd. De sleutel is het onthullen van informatie die tegenstanders waarschijnlijk toch al konden afleiden terwijl niet-voor-de-hand-liggende strategische intelligentie wordt geëxtraheerd. Deze benadering verhoogt handelssuccesratio's met 25-35% terwijl strategische positionering wordt verbeterd."
        }
      },
      {
        question: {
          en: "What statistical distribution best models resource production variance in Catan?",
          es: "¿Qué distribución estadística modela mejor la varianza de producción de recursos en Catan?",
          de: "Welche statistische Verteilung modelliert die Ressourcenproduktionsvarianz in Catan am besten?",
          nl: "Welke statistische verdeling modelleert grondstofproductie-variantie in Catan het beste?"
        },
        options: [
          {
            en: "Normal distribution",
            es: "Distribución normal",
            de: "Normalverteilung",
            nl: "Normale verdeling"
          },
          {
            en: "Poisson distribution",
            es: "Distribución de Poisson",
            de: "Poisson-Verteilung",
            nl: "Poisson-verdeling"
          },
          {
            en: "Negative binomial distribution",
            es: "Distribución binomial negativa",
            de: "Negative Binomialverteilung",
            nl: "Negatieve binomiale verdeling"
          },
          {
            en: "Multinomial distribution with correlated outcomes",
            es: "Distribución multinomial con resultados correlacionados",
            de: "Multinomialverteilung mit korrelierten Ergebnissen",
            nl: "Multinomiale verdeling met gecorreleerde uitkomsten"
          }
        ],
        correct: 3,
        explanation: {
          en: "Resource production is best modeled by a multinomial distribution with correlated outcomes because: (1) each dice roll produces a discrete outcome with fixed probabilities, (2) multiple resources can be generated simultaneously from a single roll (correlation), (3) the probabilities remain constant across rolls, and (4) the number of trials (turns) is variable. This model accurately captures the covariance structure between different resource productions, essential for portfolio optimization strategies.",
          es: "La producción de recursos se modela mejor por una distribución multinomial con resultados correlacionados porque: (1) cada tirada de dados produce un resultado discreto con probabilidades fijas, (2) múltiples recursos pueden generarse simultáneamente desde una sola tirada (correlación), (3) las probabilidades permanecen constantes entre tiradas, y (4) el número de ensayos (turnos) es variable. Este modelo captura con precisión la estructura de covarianza entre diferentes producciones de recursos, esencial para estrategias de optimización de cartera.",
          de: "Ressourcenproduktion wird am besten durch eine Multinomialverteilung mit korrelierten Ergebnissen modelliert, weil: (1) jeder Würfelwurf ein diskretes Ergebnis mit festen Wahrscheinlichkeiten produziert, (2) mehrere Ressourcen gleichzeitig aus einem einzigen Wurf generiert werden können (Korrelation), (3) die Wahrscheinlichkeiten über Würfe konstant bleiben, und (4) die Anzahl der Versuche (Runden) variabel ist. Dieses Modell erfasst genau die Kovarianzstruktur zwischen verschiedenen Ressourcenproduktionen, wesentlich für Portfolio-Optimierungsstrategien.",
          nl: "Grondstofproductie wordt het beste gemodelleerd door een multinomiale verdeling met gecorreleerde uitkomsten omdat: (1) elke dobbelsteenworp een discreet resultaat produceert met vaste waarschijnlijkheden, (2) meerdere grondstoffen tegelijkertijd kunnen worden gegenereerd vanuit een enkele worp (correlatie), (3) de waarschijnlijkheden constant blijven over worpen, en (4) het aantal pogingen (beurten) variabel is. Dit model legt nauwkeurig de covariantiestructuur vast tussen verschillende grondstofproducties, essentieel voor portefeuille-optimalisatiestrategieën."
        }
      },
      {
        question: {
          en: "What is the 'Kelly Criterion' application in development card purchase optimization?",
          es: "¿Qué es la aplicación del 'Criterio de Kelly' en la optimización de compra de cartas de desarrollo?",
          de: "Was ist die 'Kelly-Kriterium'-Anwendung in der Entwicklungskarten-Kaufoptimierung?",
          nl: "Wat is de 'Kelly Criterium' toepassing in ontwikkelingskaart aankoop optimalisatie?"
        },
        options: [
          { en: "Optimal fraction of resources to allocate to dev cards = (expected value - 1) / variance", es: "Fracción óptima de recursos para asignar a cartas de desarrollo = (valor esperado - 1) / varianza", de: "Optimaler Ressourcenanteil für Dev-Karten = (Erwartungswert - 1) / Varianz", nl: "Optimale fractie van bronnen te alloceren aan dev kaarten = (verwachte waarde - 1) / variantie" },
          { en: "Always spend 100% on development cards", es: "Siempre gastar 100% en cartas de desarrollo", de: "Immer 100% für Entwicklungskarten ausgeben", nl: "Altijd 100% uitgeven aan ontwikkelingskaarten" },
          { en: "Never allocate more than 10% to cards", es: "Nunca asignar más del 10% a cartas", de: "Nie mehr als 10% für Karten zuweisen", nl: "Nooit meer dan 10% toewijzen aan kaarten" },
          { en: "Kelly Criterion doesn't apply to board games", es: "El Criterio de Kelly no se aplica a juegos de mesa", de: "Kelly-Kriterium gilt nicht für Brettspiele", nl: "Kelly Criterium geldt niet voor bordspellen" }
        ],
        correct: 0,
        explanation: {
          en: "The Kelly Criterion from probability theory determines optimal bet sizing to maximize long-term growth. Applied to Catan dev cards: if expected value per card is 0.7 VPs with variance σ², the optimal resource allocation fraction = (EV - cost) / σ². This prevents over-investment (buying too many cards with diminishing returns) while maximizing growth rate. Elite players intuitively implement this by buying 5-7 cards (the Kelly-optimal range for typical deck compositions).",
          es: "El Criterio de Kelly de la teoría de probabilidad determina el tamaño óptimo de apuesta para maximizar el crecimiento a largo plazo. Aplicado a cartas de desarrollo de Catan: si el valor esperado por carta es 0.7 PVs con varianza σ², la fracción óptima de asignación de recursos = (VE - costo) / σ². Esto previene sobre-inversión (comprar demasiadas cartas con rendimientos decrecientes) mientras maximiza tasa de crecimiento. Los jugadores de élite implementan esto intuitivamente comprando 5-7 cartas (el rango óptimo de Kelly para composiciones típicas de mazo).",
          de: "Das Kelly-Kriterium aus der Wahrscheinlichkeitstheorie bestimmt optimale Wettgröße zur Maximierung langfristigen Wachstums. Angewandt auf Catan-Dev-Karten: wenn Erwartungswert pro Karte 0,7 SPs mit Varianz σ² ist, optimaler Ressourcenzuteilungsanteil = (EW - Kosten) / σ². Dies verhindert Überinvestition (zu viele Karten mit abnehmenden Erträgen kaufen) während Wachstumsrate maximiert wird. Elite-Spieler implementieren dies intuitiv durch Kauf von 5-7 Karten (der Kelly-optimale Bereich für typische Deck-Zusammensetzungen).",
          nl: "Het Kelly Criterium uit waarschijnlijkheidstheorie bepaalt optimale inzet grootte om lange-termijn groei te maximaliseren. Toegepast op Catan dev kaarten: als verwachte waarde per kaart 0,7 OPs is met variantie σ², de optimale bron allocatie fractie = (VW - kosten) / σ². Dit voorkomt over-investering (te veel kaarten kopen met afnemende opbrengsten) terwijl groeisnelheid gemaximaliseerd wordt. Elite spelers implementeren dit intuïtief door 5-7 kaarten te kopen (het Kelly-optimale bereik voor typische deck composities)."
        }
      },
      {
        question: {
          en: "In game-tree complexity analysis, what is Catan's approximate game-tree size?",
          es: "En el análisis de complejidad del árbol de juego, ¿cuál es el tamaño aproximado del árbol de juego de Catan?",
          de: "Was ist in der Spielbaum-Komplexitätsanalyse die ungefähre Spielbaumgröße von Catan?",
          nl: "Wat is in spelboom complexiteitsanalyse de geschatte spelboom grootte van Catan?"
        },
        options: [
          { en: "~10^15 to 10^18 unique game states (larger than chess 10^120 positions but prunable)", es: "~10^15 a 10^18 estados de juego únicos (más grande que posiciones de ajedrez 10^120 pero podable)", de: "~10^15 bis 10^18 einzigartige Spielzustände (größer als Schach 10^120 Positionen aber beschneidbar)", nl: "~10^15 tot 10^18 unieke speltoestanden (groter dan schaak 10^120 posities maar snoeibaar)" },
          { en: "Exactly 10^6 possible games", es: "Exactamente 10^6 juegos posibles", de: "Genau 10^6 mögliche Spiele", nl: "Precies 10^6 mogelijke spellen" },
          { en: "Infinite game states", es: "Estados de juego infinitos", de: "Unendliche Spielzustände", nl: "Oneindige speltoestanden" },
          { en: "Smaller than tic-tac-toe", es: "Más pequeño que tres en raya", de: "Kleiner als Tic-Tac-Toe", nl: "Kleiner dan boter-kaas-eieren" }
        ],
        correct: 0,
        explanation: {
          en: "Computational complexity research estimates Catan's game tree at 10^15-10^18 states, accounting for: board configurations, settlement placements, resource distributions, development cards, and trade sequences. While massive, it's computationally tractable with modern AI techniques (unlike Go's 10^170). The stochastic elements (dice) and hidden information (dev cards) add complexity but also enable Monte Carlo sampling for approximate solutions, making Catan AI-solvable within reasonable compute budgets.",
          es: "La investigación de complejidad computacional estima el árbol de juego de Catan en 10^15-10^18 estados, considerando: configuraciones de tablero, colocaciones de asentamientos, distribuciones de recursos, cartas de desarrollo y secuencias de comercio. Aunque masivo, es computacionalmente manejable con técnicas modernas de IA (a diferencia de Go's 10^170). Los elementos estocásticos (dados) e información oculta (cartas de desarrollo) añaden complejidad pero también permiten muestreo Monte Carlo para soluciones aproximadas, haciendo que la IA de Catan sea resoluble dentro de presupuestos de cómputo razonables.",
          de: "Forschung zur Berechnungskomplexität schätzt Catans Spielbaum auf 10^15-10^18 Zustände unter Berücksichtigung von: Brettkonfigurationen, Siedlungsplatzierungen, Ressourcenverteilungen, Entwicklungskarten und Handelssequenzen. Obwohl massiv, ist es mit modernen KI-Techniken rechnerisch handhabbar (im Gegensatz zu Gos 10^170). Die stochastischen Elemente (Würfel) und versteckte Information (Dev-Karten) fügen Komplexität hinzu, ermöglichen aber auch Monte-Carlo-Sampling für Näherungslösungen, macht Catan-KI lösbar innerhalb vernünftiger Rechenbudgets.",
          nl: "Computationele complexiteitsonderzoek schat Catan's spelboom op 10^15-10^18 toestanden, rekening houdend met: bordconfiguraties, nederzettingsplaatsingen, bron distributies, ontwikkelingskaarten en handelssequenties. Hoewel massief, is het computationeel hanteerbaar met moderne AI technieken (in tegenstelling tot Go's 10^170). De stochastische elementen (dobbelstenen) en verborgen informatie (dev kaarten) voegen complexiteit toe maar maken ook Monte Carlo sampling mogelijk voor benaderende oplossingen, maakt Catan AI-oplosbaar binnen redelijke compute budgetten."
        }
      },
      {
        question: {
          en: "What is the 'Shapley value' in coalition payoff distribution?",
          es: "¿Qué es el 'valor de Shapley' en la distribución de pagos de coalición?",
          de: "Was ist der 'Shapley-Wert' in Koalitionsauszahlungsverteilung?",
          nl: "Wat is de 'Shapley waarde' in coalitie uitbetaling distributie?"
        },
        options: [
          { en: "Fair distribution of coalition gains based on marginal contribution of each player", es: "Distribución justa de ganancias de coalición basada en contribución marginal de cada jugador", de: "Faire Verteilung von Koalitionsgewinnen basierend auf Marginalbeitrag jedes Spielers", nl: "Eerlijke distributie van coalitie winsten gebaseerd op marginale bijdrage van elke speler" },
          { en: "Equal split of all resources always", es: "División igual de todos los recursos siempre", de: "Gleichmäßige Aufteilung aller Ressourcen immer", nl: "Gelijke verdeling van alle bronnen altijd" },
          { en: "Winner takes all rewards", es: "El ganador se lleva todas las recompensas", de: "Gewinner nimmt alle Belohnungen", nl: "Winnaar neemt alle beloningen" },
          { en: "Random distribution of benefits", es: "Distribución aleatoria de beneficios", de: "Zufällige Verteilung von Vorteilen", nl: "Willekeurige distributie van voordelen" }
        ],
        correct: 0,
        explanation: {
          en: "The Shapley value (from cooperative game theory) calculates each player's fair share of coalition gains by averaging their marginal contribution across all possible orderings. In Catan anti-leader coalitions: if blocking leader provides 3 points value total, and Player A's robber placement contributed 60% of blocking effectiveness while Player B's trade embargo contributed 40%, Shapley values are 1.8 and 1.2 points respectively. This quantifies 'fairness' in coalition participation, helping elite players negotiate implicit cooperation.",
          es: "El valor de Shapley (de la teoría de juegos cooperativos) calcula la parte justa de ganancias de coalición de cada jugador promediando su contribución marginal a través de todos los ordenamientos posibles. En coaliciones anti-líder de Catan: si bloquear al líder proporciona valor de 3 puntos totales, y la colocación del ladrón del Jugador A contribuyó con 60% de efectividad de bloqueo mientras que el embargo comercial del Jugador B contribuyó con 40%, los valores de Shapley son 1.8 y 1.2 puntos respectivamente. Esto cuantifica 'equidad' en participación de coalición, ayudando a jugadores de élite a negociar cooperación implícita.",
          de: "Der Shapley-Wert (aus kooperativer Spieltheorie) berechnet den fairen Anteil jedes Spielers an Koalitionsgewinnen durch Durchschnittsbildung ihres Marginalbeitrags über alle möglichen Anordnungen. In Catan-Anti-Anführer-Koalitionen: wenn Anführer blockieren 3 Punkte Gesamtwert liefert, und Spieler A's Räuberplatzierung 60% Blockierungseffektivität beitrug während Spieler B's Handelsembargo 40% beitrug, sind Shapley-Werte 1,8 und 1,2 Punkte respektive. Dies quantifiziert 'Fairness' in Koalitionsteilnahme, hilft Elite-Spielern implizite Kooperation zu verhandeln.",
          nl: "De Shapley waarde (uit coöperatieve speltheorie) berekent het eerlijke aandeel van elke speler in coalitie winsten door hun marginale bijdrage te middelen over alle mogelijke volgordes. In Catan anti-leider coalities: als leider blokkeren 3 punten totale waarde biedt, en Speler A's rover plaatsing 60% blokkerings effectiviteit bijdroeg terwijl Speler B's handelsembargo 40% bijdroeg, zijn Shapley waarden respectievelijk 1,8 en 1,2 punten. Dit kwantificeert 'eerlijkheid' in coalitie deelname, helpt elite spelers impliciete samenwerking te onderhandelen."
        }
      },
      {
        question: {
          en: "What is 'mean-variance portfolio optimization' in settlement placement?",
          es: "¿Qué es la 'optimización de cartera de media-varianza' en la colocación de asentamientos?",
          de: "Was ist 'Mittelwert-Varianz-Portfolio-Optimierung' in Siedlungsplatzierung?",
          nl: "Wat is 'gemiddelde-variantie portefeuille optimalisatie' in nederzettingsplaatsing?"
        },
        options: [
          { en: "Select hex portfolio maximizing E(production) / σ(production) ratio (Sharpe-like metric)", es: "Seleccionar cartera de hexágonos maximizando ratio E(producción) / σ(producción) (métrica tipo Sharpe)", de: "Hex-Portfolio wählen maximiert E(Produktion) / σ(Produktion) Verhältnis (Sharpe-ähnliche Metrik)", nl: "Selecteer hex portefeuille maximaliseren E(productie) / σ(productie) ratio (Sharpe-achtig metriek)" },
          { en: "Always choose maximum variance hexes", es: "Siempre elegir hexágonos de máxima varianza", de: "Immer maximale Varianz-Hexe wählen", nl: "Altijd maximum variantie hexen kiezen" },
          { en: "Ignore variance completely", es: "Ignorar varianza completamente", de: "Varianz vollständig ignorieren", nl: "Negeer variantie volledig" },
          { en: "Only consider mean production", es: "Solo considerar producción media", de: "Nur mittlere Produktion berücksichtigen", nl: "Alleen gemiddelde productie overwegen" }
        ],
        correct: 0,
        explanation: {
          en: "Borrowed from Modern Portfolio Theory (Markowitz), optimal settlement placement treats hexes as 'assets' in a portfolio. Goal: maximize expected production while minimizing variance (risk). The efficient frontier is found by solving: max[E(R) - λσ²(R)] where λ = risk aversion parameter. Example: 6-8-5 (14 pips, high variance) vs 4-5-9-10 spread (13 pips, low variance). Risk-averse players choose the latter for consistent income despite slightly lower mean. This Sharpe ratio thinking optimizes risk-adjusted returns.",
          es: "Tomado de la Teoría Moderna de Carteras (Markowitz), la colocación óptima de asentamientos trata hexágonos como 'activos' en una cartera. Objetivo: maximizar producción esperada mientras minimiza varianza (riesgo). La frontera eficiente se encuentra resolviendo: max[E(R) - λσ²(R)] donde λ = parámetro de aversión al riesgo. Ejemplo: 6-8-5 (14 pips, alta varianza) vs dispersión 4-5-9-10 (13 pips, baja varianza). Los jugadores aversos al riesgo eligen el último para ingreso consistente a pesar de media ligeramente menor. Este pensamiento de ratio de Sharpe optimiza rendimientos ajustados al riesgo.",
          de: "Entlehnt aus Moderner Portfolio-Theorie (Markowitz), behandelt optimale Siedlungsplatzierung Hexe als 'Vermögenswerte' in einem Portfolio. Ziel: erwartete Produktion maximieren während Varianz (Risiko) minimiert wird. Die effiziente Grenze wird gefunden durch Lösen: max[E(R) - λσ²(R)] wo λ = Risikoaversionsparameter. Beispiel: 6-8-5 (14 Pips, hohe Varianz) vs 4-5-9-10 Streuung (13 Pips, niedrige Varianz). Risikoaverse Spieler wählen letzteres für konsistentes Einkommen trotz leicht niedrigerem Mittelwert. Dieses Sharpe-Ratio-Denken optimiert risikoadjustierte Erträge.",
          nl: "Ontleend aan Moderne Portefeuille Theorie (Markowitz), behandelt optimale nederzettingsplaatsing hexen als 'activa' in een portefeuille. Doel: maximaliseer verwachte productie terwijl variantie (risico) geminimaliseerd wordt. De efficiënte grens wordt gevonden door op te lossen: max[E(R) - λσ²(R)] waar λ = risico afkeer parameter. Voorbeeld: 6-8-5 (14 pips, hoge variantie) vs 4-5-9-10 spreiding (13 pips, lage variantie). Risico-afkerige spelers kiezen laatstgenoemde voor consistent inkomen ondanks iets lager gemiddelde. Dit Sharpe ratio denken optimaliseert risico-aangepaste opbrengsten."
        }
      },
      {
        question: {
          en: "What is the 'Gini coefficient' interpretation for resource inequality in Catan?",
          es: "¿Qué es la interpretación del 'coeficiente de Gini' para la desigualdad de recursos en Catan?",
          de: "Was ist die 'Gini-Koeffizient'-Interpretation für Ressourcenungleichheit in Catan?",
          nl: "Wat is de 'Gini coëfficiënt' interpretatie voor bron ongelijkheid in Catan?"
        },
        options: [
          { en: "Gini near 1.0 indicates extreme resource concentration; optimal strategy depends on position (leaders want low Gini, trailers want high)", es: "Gini cerca de 1.0 indica concentración extrema de recursos; estrategia óptima depende de posición (líderes quieren Gini bajo, rezagados quieren alto)", de: "Gini nahe 1,0 zeigt extreme Ressourcenkonzentration an; optimale Strategie hängt von Position ab (Anführer wollen niedrigen Gini, Zurückliegende wollen hohen)", nl: "Gini nabij 1,0 duidt op extreme bron concentratie; optimale strategie hangt af van positie (leiders willen lage Gini, achterblijvers willen hoge)" },
          { en: "All players should always maximize Gini coefficient", es: "Todos los jugadores siempre deben maximizar coeficiente de Gini", de: "Alle Spieler sollten immer Gini-Koeffizient maximieren", nl: "Alle spelers moeten altijd Gini coëfficiënt maximaliseren" },
          { en: "Gini coefficient irrelevant to Catan", es: "Coeficiente de Gini irrelevante para Catan", de: "Gini-Koeffizient irrelevant für Catan", nl: "Gini coëfficiënt irrelevant voor Catan" },
          { en: "Lower Gini always better for everyone", es: "Gini más bajo siempre mejor para todos", de: "Niedrigerer Gini immer besser für alle", nl: "Lagere Gini altijd beter voor iedereen" }
        ],
        correct: 0,
        explanation: {
          en: "The Gini coefficient (0-1 scale) measures resource distribution inequality across players. High Gini (0.7-0.9) = one player dominates resources; low Gini (0.2-0.4) = balanced distribution. Strategic insight: leaders prefer low Gini (prevent others from catching up via resource windfalls); trailing players prefer high Gini (create volatility for comeback opportunities). This explains why leaders block trades to maintain balance, while trailers encourage asymmetric deals to create Gini spikes that might benefit them.",
          es: "El coeficiente de Gini (escala 0-1) mide desigualdad de distribución de recursos entre jugadores. Alto Gini (0.7-0.9) = un jugador domina recursos; bajo Gini (0.2-0.4) = distribución equilibrada. Perspicacia estratégica: líderes prefieren Gini bajo (prevenir que otros alcancen vía ganancias inesperadas de recursos); jugadores rezagados prefieren Gini alto (crear volatilidad para oportunidades de regreso). Esto explica por qué líderes bloquean intercambios para mantener equilibrio, mientras rezagados fomentan tratos asimétricos para crear picos de Gini que puedan beneficiarlos.",
          de: "Der Gini-Koeffizient (0-1-Skala) misst Ressourcenverteilungsungleichheit über Spieler. Hoher Gini (0,7-0,9) = ein Spieler dominiert Ressourcen; niedriger Gini (0,2-0,4) = ausgewogene Verteilung. Strategische Einsicht: Anführer bevorzugen niedrigen Gini (verhindern dass andere aufholen via Ressourcen-Glücksfälle); zurückliegende Spieler bevorzugen hohen Gini (Volatilität schaffen für Comeback-Möglichkeiten). Dies erklärt warum Anführer Geschäfte blockieren um Balance zu halten, während Zurückliegende asymmetrische Deals fördern um Gini-Spitzen zu schaffen die ihnen nützen könnten.",
          nl: "De Gini coëfficiënt (0-1 schaal) meet bron distributie ongelijkheid over spelers. Hoge Gini (0,7-0,9) = één speler domineert bronnen; lage Gini (0,2-0,4) = gebalanceerde distributie. Strategisch inzicht: leiders prefereren lage Gini (voorkom dat anderen inhalen via bron meevaller); achterop rakende spelers prefereren hoge Gini (creëer volatiliteit voor comeback kansen). Dit verklaart waarom leiders ruilen blokkeren om balans te behouden, terwijl achterblijvers asymmetrische deals aanmoedigen om Gini pieken te creëren die hen kunnen bevoordelen."
        }
      },
      {
        question: {
          en: "What is 'subgame perfect equilibrium' in Catan's sequential decision-making?",
          es: "¿Qué es el 'equilibrio perfecto de subjuego' en la toma de decisiones secuenciales de Catan?",
          de: "Was ist 'teilspielperfektes Gleichgewicht' in Catans sequentieller Entscheidungsfindung?",
          nl: "Wat is 'subspel perfect evenwicht' in Catan's sequentiële besluitvorming?"
        },
        options: [
          { en: "Nash equilibrium that remains optimal in every subgame (prevents non-credible threats)", es: "Equilibrio de Nash que permanece óptimo en cada subjuego (previene amenazas no creíbles)", de: "Nash-Gleichgewicht das in jedem Teilspiel optimal bleibt (verhindert nicht glaubwürdige Drohungen)", nl: "Nash evenwicht dat optimaal blijft in elk subspel (voorkomt niet-geloofwaardige dreigingen)" },
          { en: "Any equilibrium in opening moves only", es: "Cualquier equilibrio solo en movimientos de apertura", de: "Jedes Gleichgewicht nur in Eröffnungszügen", nl: "Elk evenwicht alleen in openingszetten" },
          { en: "Perfect information game solution", es: "Solución de juego de información perfecta", de: "Perfekte Informations-Spiel-Lösung", nl: "Perfecte informatie spel oplossing" },
          { en: "Subgame equilibrium doesn't exist in Catan", es: "Equilibrio de subjuego no existe en Catan", de: "Teilspiel-Gleichgewicht existiert nicht in Catan", nl: "Subspel evenwicht bestaat niet in Catan" }
        ],
        correct: 0,
        explanation: {
          en: "Subgame perfect equilibrium (SPE) refines Nash equilibrium by requiring optimality in every subgame (every decision point). In Catan: Player A threatens 'If you trade with B, I'll embargo you forever.' This is only SPE if the threat is credible (embargo actually benefits A). If embargo hurts A more than helping, it's not SPE—just a bluff. Elite players use backward induction to identify credible vs non-credible threats, ignoring the latter while respecting former. SPE enforces strategic rationality throughout the game tree.",
          es: "El equilibrio perfecto de subjuego (SPE) refina equilibrio de Nash requiriendo optimalidad en cada subjuego (cada punto de decisión). En Catan: Jugador A amenaza 'Si comercias con B, te embargaré para siempre.' Esto es solo SPE si la amenaza es creíble (embargo realmente beneficia a A). Si embargo daña a A más que ayudar, no es SPE—solo un farol. Los jugadores de élite usan inducción hacia atrás para identificar amenazas creíbles vs no creíbles, ignorando las últimas mientras respetan las primeras. SPE hace cumplir racionalidad estratégica a lo largo del árbol de juego.",
          de: "Teilspielperfektes Gleichgewicht (SPE) verfeinert Nash-Gleichgewicht durch Erfordernis von Optimalität in jedem Teilspiel (jedem Entscheidungspunkt). In Catan: Spieler A droht 'Wenn du mit B handelst, werde ich dich für immer embargieren.' Dies ist nur SPE wenn Drohung glaubwürdig ist (Embargo nützt A tatsächlich). Wenn Embargo A mehr schadet als hilft, ist es kein SPE—nur ein Bluff. Elite-Spieler nutzen Rückwärtsinduktion um glaubwürdige vs nicht-glaubwürdige Drohungen zu identifizieren, ignorieren letztere während erstere respektiert werden. SPE erzwingt strategische Rationalität durch den Spielbaum.",
          nl: "Subspel perfect evenwicht (SPE) verfijnt Nash evenwicht door optimaliteit te vereisen in elk subspel (elk besluitpunt). In Catan: Speler A dreigt 'Als je ruilt met B, zal ik je voor altijd embargo opleggen.' Dit is alleen SPE als de dreiging geloofwaardig is (embargo komt A werkelijk ten goede). Als embargo A meer schaadt dan helpt, is het geen SPE—slechts een bluf. Elite spelers gebruiken achterwaartse inductie om geloofwaardige vs niet-geloofwaardige dreigingen te identificeren, negeren laatstgenoemde terwijl eerstgenoemde respecteren. SPE dwingt strategische rationaliteit af door de spelboom."
        }
      },
      {
        question: {
          en: "What is the 'trembling hand perfect equilibrium' application in Catan mistakes?",
          es: "¿Qué es la aplicación del 'equilibrio perfecto de mano temblorosa' en errores de Catan?",
          de: "Was ist die 'zitternde-Hand-perfektes-Gleichgewicht'-Anwendung in Catan-Fehlern?",
          nl: "Wat is de 'trillende hand perfect evenwicht' toepassing in Catan fouten?"
        },
        options: [
          { en: "Optimal strategy accounts for small probability opponent mistakes (ε-errors)", es: "Estrategia óptima considera pequeña probabilidad de errores del oponente (errores ε)", de: "Optimale Strategie berücksichtigt kleine Wahrscheinlichkeit Gegnerfehler (ε-Fehler)", nl: "Optimale strategie houdt rekening met kleine waarschijnlijkheid tegenstander fouten (ε-fouten)" },
          { en: "Ignore all opponent mistakes completely", es: "Ignorar todos los errores del oponente completamente", de: "Alle Gegnerfehler vollständig ignorieren", nl: "Negeer alle tegenstander fouten volledig" },
          { en: "Only applies to perfect play games", es: "Solo se aplica a juegos de juego perfecto", de: "Gilt nur für perfekte Spiel-Spiele", nl: "Geldt alleen voor perfecte spel spellen" },
          { en: "Assumes opponents always blunder", es: "Asume que los oponentes siempre cometen errores", de: "Nimmt an Gegner machen immer Fehler", nl: "Neemt aan tegenstanders altijd blunderen" }
        ],
        correct: 0,
        explanation: {
          en: "Trembling hand equilibrium assumes all players have small probability ε of making mistakes. This refines strategy: even if 'never trade with leader' is optimal, accounting for trembles means occasionally offering trades (exploiting their potential errors). In Catan: placing robber on leader is dominant strategy, but trembling hand analysis suggests occasionally placing elsewhere (ε = 5%) to exploit potential miscalculations when leader incorrectly assumes you'll always block them. This introduces strategic unpredictability that's Nash-optimal when opponents are fallible humans.",
          es: "El equilibrio de mano temblorosa asume que todos los jugadores tienen pequeña probabilidad ε de cometer errores. Esto refina estrategia: incluso si 'nunca comerciar con líder' es óptimo, considerar temblores significa ocasionalmente ofrecer intercambios (explotando sus errores potenciales). En Catan: colocar ladrón en líder es estrategia dominante, pero análisis de mano temblorosa sugiere ocasionalmente colocar en otro lugar (ε = 5%) para explotar errores de cálculo potenciales cuando líder asume incorrectamente que siempre los bloquearás. Esto introduce imprevisibilidad estratégica que es Nash-óptima cuando oponentes son humanos falibles.",
          de: "Zitterndes-Hand-Gleichgewicht nimmt an alle Spieler haben kleine Wahrscheinlichkeit ε Fehler zu machen. Dies verfeinert Strategie: selbst wenn 'nie mit Anführer handeln' optimal ist, bedeutet Berücksichtigung von Zittern gelegentlich Geschäfte anzubieten (Ausbeutung ihrer potentiellen Fehler). In Catan: Räuber auf Anführer platzieren ist dominante Strategie, aber zitternde-Hand-Analyse schlägt gelegentlich anderswo platzieren vor (ε = 5%) um potentielle Fehlberechnungen auszunutzen wenn Anführer fälschlicherweise annimmt Sie werden sie immer blockieren. Dies führt strategische Unvorhersehbarkeit ein die Nash-optimal ist wenn Gegner fehlbare Menschen sind.",
          nl: "Trillend hand evenwicht neemt aan alle spelers hebben kleine waarschijnlijkheid ε fouten te maken. Dit verfijnt strategie: zelfs als 'nooit ruilen met leider' optimaal is, betekent rekening houden met trillingen occasioneel ruilen aanbieden (exploiteren hun potentiële fouten). In Catan: rover plaatsen op leider is dominante strategie, maar trillende hand analyse suggereert occasioneel elders plaatsen (ε = 5%) om potentiële misrekeningen te exploiteren wanneer leider incorrect aanneemt je zult hen altijd blokkeren. Dit introduceert strategische onvoorspelbaarheid die Nash-optimaal is wanneer tegenstanders feilbare mensen zijn."
        }
      },
      {
        question: {
          en: "What is 'Bayesian Nash equilibrium' in incomplete information Catan scenarios?",
          es: "¿Qué es el 'equilibrio de Nash bayesiano' en escenarios de Catan de información incompleta?",
          de: "Was ist 'Bayesianisches Nash-Gleichgewicht' in Catan-Szenarien unvollständiger Information?",
          nl: "Wat is 'Bayesiaans Nash evenwicht' in onvolledige informatie Catan scenario's?"
        },
        options: [
          { en: "Nash equilibrium where players hold beliefs about hidden information (dev cards) and update via Bayes' rule", es: "Equilibrio de Nash donde jugadores tienen creencias sobre información oculta (cartas de desarrollo) y actualizan vía regla de Bayes", de: "Nash-Gleichgewicht wo Spieler Überzeugungen über versteckte Information (Dev-Karten) halten und via Bayes-Regel aktualisieren", nl: "Nash evenwicht waar spelers overtuigingen hebben over verborgen informatie (dev kaarten) en bijwerken via Bayes' regel" },
          { en: "Only applies to complete information games", es: "Solo se aplica a juegos de información completa", de: "Gilt nur für Spiele vollständiger Information", nl: "Geldt alleen voor complete informatie spellen" },
          { en: "Requires revealing all hidden cards", es: "Requiere revelar todas las cartas ocultas", de: "Erfordert Offenbaren aller versteckten Karten", nl: "Vereist onthullen alle verborgen kaarten" },
          { en: "Bayesian methods don't apply to board games", es: "Los métodos bayesianos no se aplican a juegos de mesa", de: "Bayesianische Methoden gelten nicht für Brettspiele", nl: "Bayesiaanse methoden gelden niet voor bordspellen" }
        ],
        correct: 0,
        explanation: {
          en: "Bayesian Nash equilibrium extends Nash to games with incomplete information by modeling players' beliefs as probability distributions. In Catan: you don't know opponents' dev cards, so you maintain belief distributions (e.g., 'P(opponent has VP card) = 0.3') and update them Bayesian-style when observing actions. Equilibrium requires: each player's strategy is optimal given their beliefs AND beliefs are consistent with observed behavior. This explains why signaling (buying many dev cards) changes opponents' beliefs, altering their equilibrium strategies toward you.",
          es: "El equilibrio de Nash bayesiano extiende Nash a juegos con información incompleta modelando creencias de jugadores como distribuciones de probabilidad. En Catan: no conoces las cartas de desarrollo de oponentes, así que mantienes distribuciones de creencias (ej., 'P(oponente tiene carta VP) = 0.3') y las actualizas estilo bayesiano al observar acciones. El equilibrio requiere: estrategia de cada jugador es óptima dadas sus creencias Y creencias son consistentes con comportamiento observado. Esto explica por qué señalización (comprar muchas cartas de desarrollo) cambia creencias de oponentes, alterando sus estrategias de equilibrio hacia ti.",
          de: "Bayesianisches Nash-Gleichgewicht erweitert Nash auf Spiele mit unvollständiger Information durch Modellierung von Spielerüberzeugungen als Wahrscheinlichkeitsverteilungen. In Catan: man kennt Gegner-Dev-Karten nicht, also hält man Glaubensverteilungen (z.B. 'P(Gegner hat VP-Karte) = 0,3') und aktualisiert sie Bayesianisch beim Beobachten von Aktionen. Gleichgewicht erfordert: Strategie jedes Spielers ist optimal gegeben ihre Überzeugungen UND Überzeugungen sind konsistent mit beobachtetem Verhalten. Dies erklärt warum Signalisierung (viele Dev-Karten kaufen) Gegnerüberzeugungen ändert, ihre Gleichgewichtsstrategien Ihnen gegenüber alterierend.",
          nl: "Bayesiaans Nash evenwicht breidt Nash uit naar spellen met onvolledige informatie door speler overtuigingen te modelleren als waarschijnlijkheidsverdelingen. In Catan: je kent tegenstander dev kaarten niet, dus onderhoud je overtuigingsverdelingen (bijv. 'P(tegenstander heeft VP kaart) = 0,3') en werk ze Bayesiaans bij bij het observeren van acties. Evenwicht vereist: strategie van elke speler is optimaal gegeven hun overtuigingen EN overtuigingen zijn consistent met geobserveerd gedrag. Dit verklaart waarom signalering (veel dev kaarten kopen) tegenstander overtuigingen verandert, hun evenwicht strategieën tegenover jou wijzigend."
        }
      },
      {
        question: {
          en: "What is the 'Folk Theorem' implication for repeated Catan tournament play?",
          es: "¿Qué es la implicación del 'Teorema Folk' para juego de torneo de Catan repetido?",
          de: "Was ist die 'Folk-Theorem'-Implikation für wiederholtes Catan-Turnierspiel?",
          nl: "Wat is de 'Folk Theorema' implicatie voor herhaald Catan toernooispel?"
        },
        options: [
          { en: "Cooperation sustainable via trigger strategies when players value future reputation (infinite horizon)", es: "Cooperación sostenible vía estrategias de gatillo cuando jugadores valoran reputación futura (horizonte infinito)", de: "Kooperation nachhaltig via Trigger-Strategien wenn Spieler zukünftige Reputation schätzen (unendlicher Horizont)", nl: "Samenwerking duurzaam via trigger strategieën wanneer spelers toekomstige reputatie waarderen (oneindige horizon)" },
          { en: "Cooperation impossible in all repeated games", es: "Cooperación imposible en todos los juegos repetidos", de: "Kooperation unmöglich in allen wiederholten Spielen", nl: "Samenwerking onmogelijk in alle herhaalde spellen" },
          { en: "Only one equilibrium exists in repeated play", es: "Solo existe un equilibrio en juego repetido", de: "Nur ein Gleichgewicht existiert in wiederholtem Spiel", nl: "Slechts één evenwicht bestaat in herhaald spel" },
          { en: "Folk Theorem only applies to zero-sum games", es: "Teorema Folk solo se aplica a juegos de suma cero", de: "Folk-Theorem gilt nur für Nullsummenspiele", nl: "Folk Theorema geldt alleen voor nul-som spellen" }
        ],
        correct: 0,
        explanation: {
          en: "The Folk Theorem states that in infinitely repeated games, many equilibria exist beyond one-shot Nash, including cooperative outcomes, sustained by punishment threats. In Catan tournaments (repeated matches): refusing to trade with someone who 'backstabbed' you previously is rational via 'grim trigger' strategy—cooperation is equilibrium if players sufficiently value future games. This explains tournament meta-dynamics: reputation matters, cooperation emerges even in competitive contexts, and betrayal has long-term costs. δ (discount factor) must be high enough for cooperation to dominate.",
          es: "El Teorema Folk establece que en juegos infinitamente repetidos, existen muchos equilibrios más allá de Nash de una sola vez, incluyendo resultados cooperativos, sostenidos por amenazas de castigo. En torneos de Catan (partidas repetidas): rechazar comerciar con alguien que te 'traicionó' previamente es racional vía estrategia de 'gatillo sombrío'—cooperación es equilibrio si jugadores valoran suficientemente juegos futuros. Esto explica meta-dinámicas de torneo: reputación importa, cooperación emerge incluso en contextos competitivos, y traición tiene costos a largo plazo. δ (factor de descuento) debe ser suficientemente alto para que cooperación domine.",
          de: "Das Folk-Theorem besagt dass in unendlich wiederholten Spielen viele Gleichgewichte über einmaliges Nash hinaus existieren, einschließlich kooperativer Ergebnisse, aufrechterhalten durch Bestrafungsdrohungen. In Catan-Turnieren (wiederholte Matches): Ablehnung mit jemandem zu handeln der Sie zuvor 'verraten' hat ist rational via 'Grim-Trigger'-Strategie—Kooperation ist Gleichgewicht wenn Spieler zukünftige Spiele ausreichend schätzen. Dies erklärt Turnier-Meta-Dynamiken: Reputation zählt, Kooperation entsteht selbst in kompetitiven Kontexten, und Verrat hat langfristige Kosten. δ (Diskontfaktor) muss hoch genug sein damit Kooperation dominiert.",
          nl: "Het Folk Theorema stelt dat in oneindig herhaalde spellen veel evenwichten bestaan voorbij eenmalige Nash, inclusief coöperatieve uitkomsten, ondersteund door straf dreigingen. In Catan toernooien (herhaalde wedstrijden): weigeren te ruilen met iemand die je eerder 'verraden' heeft is rationeel via 'grimmige trigger' strategie—samenwerking is evenwicht als spelers toekomstige spellen voldoende waarderen. Dit verklaart toernooi meta-dynamica: reputatie telt, samenwerking ontstaat zelfs in competitieve contexten, en verraad heeft lange-termijn kosten. δ (disconteringsfactor) moet hoog genoeg zijn opdat samenwerking domineert."
        }
      },
      {
        question: {
          en: "What is the 'correlated equilibrium' concept in Catan coordinated play?",
          es: "¿Qué es el concepto de 'equilibrio correlacionado' en juego coordinado de Catan?",
          de: "Was ist das 'korrelierte Gleichgewichts'-Konzept in koordiniertem Catan-Spiel?",
          nl: "Wat is het 'gecorreleerd evenwicht' concept in gecoördineerd Catan spel?"
        },
        options: [
          { en: "Players coordinate via public signal (e.g., dice roll) to select joint strategies yielding better outcomes than Nash", es: "Jugadores coordinan vía señal pública (ej., tirada de dados) para seleccionar estrategias conjuntas produciendo mejores resultados que Nash", de: "Spieler koordinieren via öffentliches Signal (z.B. Würfelwurf) um gemeinsame Strategien zu wählen die bessere Ergebnisse als Nash bringen", nl: "Spelers coördineren via publiek signaal (bijv. dobbelsteenworp) om gezamenlijke strategieën te selecteren die betere uitkomsten opleveren dan Nash" },
          { en: "All players always defect independently", es: "Todos los jugadores siempre desertan independientemente", de: "Alle Spieler desertieren immer unabhängig", nl: "Alle spelers altijd deserteren onafhankelijk" },
          { en: "Requires private communication only", es: "Requiere solo comunicación privada", de: "Erfordert nur private Kommunikation", nl: "Vereist alleen privé communicatie" },
          { en: "Correlation forbidden in game theory", es: "Correlación prohibida en teoría de juegos", de: "Korrelation in Spieltheorie verboten", nl: "Correlatie verboden in speltheorie" }
        ],
        correct: 0,
        explanation: {
          en: "Correlated equilibrium allows players to coordinate using publicly observable signals without explicit communication. In Catan: 'If dice sum is even, Player A blocks leader; if odd, Player B blocks' achieves better anti-leader coordination than independent Nash strategies. The public randomness (dice) serves as correlation device, enabling implicit cooperation that's self-enforcing (no one benefits from deviating given others follow). This explains emergent coordination patterns in expert games without collusion—the game's randomness itself facilitates superior equilibria.",
          es: "El equilibrio correlacionado permite a jugadores coordinar usando señales públicamente observables sin comunicación explícita. En Catan: 'Si suma de dados es par, Jugador A bloquea líder; si impar, Jugador B bloquea' logra mejor coordinación anti-líder que estrategias Nash independientes. La aleatoriedad pública (dados) sirve como dispositivo de correlación, permitiendo cooperación implícita que es auto-reforzante (nadie beneficia de desviarse dado que otros siguen). Esto explica patrones de coordinación emergentes en juegos expertos sin colusión—la aleatoriedad del juego misma facilita equilibrios superiores.",
          de: "Korreliertes Gleichgewicht erlaubt Spielern Koordination mit öffentlich beobachtbaren Signalen ohne explizite Kommunikation. In Catan: 'Wenn Würfelsumme gerade ist, blockiert Spieler A Anführer; wenn ungerade, blockiert Spieler B' erreicht bessere Anti-Anführer-Koordination als unabhängige Nash-Strategien. Die öffentliche Zufälligkeit (Würfel) dient als Korrelationsgerät, ermöglicht implizite Kooperation die selbstdurchsetzend ist (niemand profitiert von Abweichung gegeben andere folgen). Dies erklärt aufkommende Koordinationsmuster in Expertenspielen ohne Absprache—die Zufälligkeit des Spiels selbst ermöglicht überlegene Gleichgewichte.",
          nl: "Gecorreleerd evenwicht maakt spelers coördineren mogelijk met publiek waarneembare signalen zonder expliciete communicatie. In Catan: 'Als dobbelsom even is, blokkeert Speler A leider; als oneven, blokkeert Speler B' bereikt betere anti-leider coördinatie dan onafhankelijke Nash strategieën. De publieke willekeur (dobbelstenen) dient als correlatie apparaat, maakt impliciete samenwerking mogelijk die zelf-afdwingend is (niemand profiteert van afwijken gegeven anderen volgen). Dit verklaart opkomende coördinatie patronen in expert spellen zonder collusie—de willekeur van het spel zelf faciliteert superieure evenwichten."
        }
      },
      {
        question: {
          en: "What is 'evolutionary stable strategy' (ESS) in Catan population dynamics?",
          es: "¿Qué es la 'estrategia evolutivamente estable' (ESS) en dinámica de población de Catan?",
          de: "Was ist 'evolutionär stabile Strategie' (ESS) in Catan-Populationsdynamik?",
          nl: "Wat is 'evolutionair stabiele strategie' (ESS) in Catan populatie dynamica?"
        },
        options: [
          { en: "Strategy that resists invasion by mutant strategies in tournament meta-game evolution", es: "Estrategia que resiste invasión por estrategias mutantes en evolución de meta-juego de torneo", de: "Strategie die Invasion durch Mutantenstrategien in Turnier-Meta-Spiel-Evolution widersteht", nl: "Strategie die invasie weerstaat door mutant strategieën in toernooi meta-spel evolutie" },
          { en: "Strategies that always dominate regardless of population", es: "Estrategias que siempre dominan independientemente de población", de: "Strategien die immer unabhängig von Population dominieren", nl: "Strategieën die altijd domineren ongeacht populatie" },
          { en: "Random strategy selection over time", es: "Selección de estrategia aleatoria con el tiempo", de: "Zufällige Strategieauswahl über Zeit", nl: "Willekeurige strategie selectie over tijd" },
          { en: "ESS doesn't apply to discrete games", es: "ESS no se aplica a juegos discretos", de: "ESS gilt nicht für diskrete Spiele", nl: "ESS geldt niet voor discrete spellen" }
        ],
        correct: 0,
        explanation: {
          en: "Evolutionary Stable Strategy (from evolutionary game theory) is a strategy that, if adopted by a population, cannot be invaded by any alternative mutant strategy. In Catan tournament metas: if everyone plays 'aggressive city-rush', a mutant 'defensive settlement-spread' strategy must not be able to exploit this and take over. ESS requires: strategy does well against itself AND beats any mutant. This explains why certain Catan strategies persist in competitive communities while others fade—only ESS strategies survive long-term evolutionary pressure of the meta-game.",
          es: "La Estrategia Evolutivamente Estable (de teoría de juegos evolutiva) es una estrategia que, si es adoptada por una población, no puede ser invadida por ninguna estrategia mutante alternativa. En metas de torneo de Catan: si todos juegan 'empuje agresivo de ciudad', una estrategia mutante 'dispersión defensiva de asentamiento' no debe poder explotar esto y tomar el control. ESS requiere: estrategia funciona bien contra sí misma Y vence a cualquier mutante. Esto explica por qué ciertas estrategias de Catan persisten en comunidades competitivas mientras otras se desvanecen—solo estrategias ESS sobreviven presión evolutiva a largo plazo del meta-juego.",
          de: "Evolutionär Stabile Strategie (aus evolutionärer Spieltheorie) ist eine Strategie die, wenn von einer Population angenommen, nicht von irgendeiner alternativen Mutantenstrategie invadiert werden kann. In Catan-Turnier-Metas: wenn alle 'aggressiven Stadt-Rush' spielen, darf eine mutante 'defensive Siedlungs-Ausbreitung'-Strategie dies nicht ausnutzen und übernehmen können. ESS erfordert: Strategie funktioniert gut gegen sich selbst UND schlägt jeden Mutanten. Dies erklärt warum bestimmte Catan-Strategien in kompetitiven Gemeinschaften persistieren während andere verblassen—nur ESS-Strategien überleben langfristigen evolutionären Druck des Meta-Spiels.",
          nl: "Evolutionair Stabiele Strategie (uit evolutionaire speltheorie) is een strategie die, als aangenomen door een populatie, niet ingevallen kan worden door enige alternatieve mutant strategie. In Catan toernooi meta's: als iedereen 'agressieve stad-rush' speelt, mag een mutant 'defensieve nederzetting-spreiding' strategie dit niet kunnen exploiteren en overnemen. ESS vereist: strategie presteert goed tegen zichzelf EN verslaat elke mutant. Dit verklaart waarom bepaalde Catan strategieën persisteren in competitieve gemeenschappen terwijl anderen vervagen—alleen ESS strategieën overleven lange-termijn evolutionaire druk van het meta-spel."
        }
      },
      {
        question: {
          en: "What is the 'maximum entropy principle' in mixed strategy selection?",
          es: "¿Qué es el 'principio de máxima entropía' en selección de estrategia mixta?",
          de: "Was ist das 'Maximum-Entropie-Prinzip' in gemischter Strategieauswahl?",
          nl: "Wat is het 'maximum entropie principe' in gemengde strategie selectie?"
        },
        options: [
          { en: "Choose strategy distribution maximizing unpredictability (entropy) subject to equilibrium constraints", es: "Elegir distribución de estrategia maximizando imprevisibilidad (entropía) sujeto a restricciones de equilibrio", de: "Strategieverteilung wählen maximiert Unvorhersehbarkeit (Entropie) unter Gleichgewichtsbeschränkungen", nl: "Kies strategie distributie maximaliseren onvoorspelbaarheid (entropie) onderworpen aan evenwichtsbeperkingen" },
          { en: "Always use deterministic pure strategies", es: "Siempre usar estrategias puras determinísticas", de: "Immer deterministische reine Strategien verwenden", nl: "Altijd deterministische pure strategieën gebruiken" },
          { en: "Minimize entropy in all cases", es: "Minimizar entropía en todos los casos", de: "Entropie in allen Fällen minimieren", nl: "Minimaliseer entropie in alle gevallen" },
          { en: "Entropy irrelevant to game theory", es: "Entropía irrelevante para teoría de juegos", de: "Entropie irrelevant für Spieltheorie", nl: "Entropie irrelevant voor speltheorie" }
        ],
        correct: 0,
        explanation: {
          en: "Maximum entropy principle (from information theory) selects the probability distribution that is maximally unpredictable while satisfying known constraints. In Catan mixed strategies: given equilibrium requires robber placement distribution P(leader)=0.7, P(2nd)=0.2, P(others)=0.1, max-entropy refines this to prevent exploitable patterns. Instead of rigid 70-20-10 sequence, use randomization matching these probabilities—maximizes opponent uncertainty. Entropy H = -Σ p(i)log(p(i)) guides optimal mixing, preventing opponents from detecting patterns even when they know your average frequencies.",
          es: "El principio de máxima entropía (de teoría de información) selecciona la distribución de probabilidad que es máximamente impredecible mientras satisface restricciones conocidas. En estrategias mixtas de Catan: dado que equilibrio requiere distribución de colocación de ladrón P(líder)=0.7, P(2°)=0.2, P(otros)=0.1, max-entropía refina esto para prevenir patrones explotables. En lugar de secuencia rígida 70-20-10, usa aleatorización coincidiendo estas probabilidades—maximiza incertidumbre del oponente. Entropía H = -Σ p(i)log(p(i)) guía mezcla óptima, previniendo que oponentes detecten patrones incluso cuando conocen tus frecuencias promedio.",
          de: "Maximum-Entropie-Prinzip (aus Informationstheorie) wählt die Wahrscheinlichkeitsverteilung die maximal unvorhersehbar ist während bekannte Beschränkungen erfüllt werden. In Catan-gemischten Strategien: gegeben Gleichgewicht erfordert Räuberplatzierungsverteilung P(Anführer)=0,7, P(2.)=0,2, P(andere)=0,1, Max-Entropie verfeinert dies um ausbeutbare Muster zu verhindern. Statt rigider 70-20-10-Sequenz, Randomisierung verwenden die diese Wahrscheinlichkeiten matcht—maximiert Gegnerunsicherheit. Entropie H = -Σ p(i)log(p(i)) leitet optimale Mischung, verhindert dass Gegner Muster erkennen selbst wenn sie Ihre Durchschnittsfrequenzen kennen.",
          nl: "Maximum entropie principe (uit informatie theorie) selecteert de waarschijnlijkheidsverdeling die maximaal onvoorspelbaar is terwijl bekende beperkingen voldaan worden. In Catan gemengde strategieën: gegeven evenwicht vereist rover plaatsing distributie P(leider)=0,7, P(2e)=0,2, P(anderen)=0,1, max-entropie verfijnt dit om exploiteerbare patronen te voorkomen. In plaats van rigide 70-20-10 sequentie, gebruik randomisatie matchend deze waarschijnlijkheden—maximaliseert tegenstander onzekerheid. Entropie H = -Σ p(i)log(p(i)) gidst optimale menging, voorkomt tegenstanders patronen detecteren zelfs wanneer ze je gemiddelde frequenties kennen."
        }
      },
      {
        question: {
          en: "What is the 'mechanism design' principle for Catan house rules?",
          es: "¿Qué es el principio de 'diseño de mecanismos' para reglas caseras de Catan?",
          de: "Was ist das 'Mechanismus-Design'-Prinzip für Catan-Hausregeln?",
          nl: "Wat is het 'mechanisme ontwerp' principe voor Catan huisregels?"
        },
        options: [
          { en: "Design rules such that self-interested play yields desired outcomes (incentive compatibility)", es: "Diseñar reglas de modo que juego de interés propio produzca resultados deseados (compatibilidad de incentivos)", de: "Regeln so entwerfen dass eigennütziges Spiel gewünschte Ergebnisse bringt (Anreizkompatibilität)", nl: "Ontwerp regels zodat eigenbelang spel gewenste uitkomsten oplevert (incentive compatibiliteit)" },
          { en: "Random rule generation", es: "Generación aleatoria de reglas", de: "Zufällige Regelerzeugung", nl: "Willekeurige regel generatie" },
          { en: "Copy rules from other games directly", es: "Copiar reglas de otros juegos directamente", de: "Regeln aus anderen Spielen direkt kopieren", nl: "Kopieer regels uit andere spellen direct" },
          { en: "Mechanism design doesn't apply to games", es: "Diseño de mecanismos no se aplica a juegos", de: "Mechanismus-Design gilt nicht für Spiele", nl: "Mechanisme ontwerp geldt niet voor spellen" }
        ],
        correct: 0,
        explanation: {
          en: "Mechanism design (reverse game theory) asks: 'Given desired outcome X, what rules achieve it when players act selfishly?' Example Catan house rule goal: 'prevent runaway leader.' Mechanism design solution: 'Allow trailing players to trade with bank at 2:1 ratio' creates incentive compatibility—leaders can't exploit this (already strong), trailers use it to catch up, achieving desired competitive balance via self-interested optimization. This explains why tournament organizers add balancing mechanics that work via individual incentives rather than forcing cooperation.",
          es: "El diseño de mecanismos (teoría de juegos inversa) pregunta: 'Dado resultado deseado X, ¿qué reglas lo logran cuando jugadores actúan egoístamente?' Ejemplo de objetivo de regla casera de Catan: 'prevenir líder desbocado.' Solución de diseño de mecanismos: 'Permitir que jugadores rezagados comercien con banco a ratio 2:1' crea compatibilidad de incentivos—líderes no pueden explotar esto (ya fuertes), rezagados lo usan para alcanzar, logrando equilibrio competitivo deseado vía optimización de interés propio. Esto explica por qué organizadores de torneos añaden mecánicas de equilibrio que funcionan vía incentivos individuales en lugar de forzar cooperación.",
          de: "Mechanismus-Design (umgekehrte Spieltheorie) fragt: 'Gegeben gewünschtes Ergebnis X, welche Regeln erreichen es wenn Spieler selbstsüchtig handeln?' Beispiel Catan-Hausregel-Ziel: 'durchgehenden Anführer verhindern.' Mechanismus-Design-Lösung: 'Zurückliegenden Spielern erlauben mit Bank zu 2:1-Verhältnis zu handeln' schafft Anreizkompatibilität—Anführer können dies nicht ausnutzen (bereits stark), Zurückliegende nutzen es zum Aufholen, erreichen gewünschte kompetitive Balance via eigennützige Optimierung. Dies erklärt warum Turnierorganisatoren Ausgleichsmechaniken hinzufügen die via individuelle Anreize funktionieren statt Kooperation zu erzwingen.",
          nl: "Mechanisme ontwerp (omgekeerde speltheorie) vraagt: 'Gegeven gewenste uitkomst X, welke regels bereiken het wanneer spelers egoïstisch handelen?' Voorbeeld Catan huisregel doel: 'voorkom weglopende leider.' Mechanisme ontwerp oplossing: 'Sta achterblijvende spelers toe te ruilen met bank op 2:1 ratio' creëert incentive compatibiliteit—leiders kunnen dit niet exploiteren (al sterk), achterblijvers gebruiken het om in te halen, bereiken gewenste competitieve balans via eigenbelang optimalisatie. Dit verklaart waarom toernooi organisatoren balancerende mechanica's toevoegen die werken via individuele incentives in plaats van samenwerking forceren."
        }
      },
      {
        question: {
          en: "What is the 'no-arbitrage principle' in resource market efficiency?",
          es: "¿Qué es el 'principio de no arbitraje' en eficiencia del mercado de recursos?",
          de: "Was ist das 'No-Arbitrage-Prinzip' in Ressourcenmarkt-Effizienz?",
          nl: "Wat is het 'geen-arbitrage principe' in bron markt efficiëntie?"
        },
        options: [
          { en: "In equilibrium, no profitable trading cycles exist (prevents 'money pump' exploitation)", es: "En equilibrio, no existen ciclos de comercio rentables (previene explotación de 'bomba de dinero')", de: "Im Gleichgewicht existieren keine profitablen Handelszyklen (verhindert 'Geldpumpen'-Ausbeutung)", nl: "In evenwicht bestaan geen winstgevende handels cycli (voorkomt 'geldpomp' exploitatie)" },
          { en: "Arbitrage opportunities should always exist", es: "Oportunidades de arbitraje siempre deben existir", de: "Arbitrage-Möglichkeiten sollten immer existieren", nl: "Arbitrage mogelijkheden moeten altijd bestaan" },
          { en: "No trading allowed in equilibrium", es: "No se permite comercio en equilibrio", de: "Kein Handel im Gleichgewicht erlaubt", nl: "Geen handel toegestaan in evenwicht" },
          { en: "Arbitrage principle doesn't apply to Catan", es: "Principio de arbitraje no se aplica a Catan", de: "Arbitrage-Prinzip gilt nicht für Catan", nl: "Arbitrage principe geldt niet voor Catan" }
        ],
        correct: 0,
        explanation: {
          en: "No-arbitrage (from financial economics) means market prices prevent profitable cycles. In Catan: if Player A trades 1 wheat for 2 sheep with Player B, and Player B trades 2 sheep for 3 ore with Player C, and Player C trades 2 ore for 1 wheat with Player A, a profitable cycle exists (A gets 1 ore free). Efficient markets eliminate these. Smart players identify arbitrage opportunities before others and exploit them, or prevent opponents from executing profitable cycles by refusing key trades. Market efficiency emerges when players are rational arbitrage-seekers.",
          es: "No arbitraje (de economía financiera) significa que precios de mercado previenen ciclos rentables. En Catan: si Jugador A intercambia 1 trigo por 2 ovejas con Jugador B, y Jugador B intercambia 2 ovejas por 3 minerales con Jugador C, y Jugador C intercambia 2 minerales por 1 trigo con Jugador A, existe ciclo rentable (A obtiene 1 mineral gratis). Mercados eficientes eliminan estos. Jugadores inteligentes identifican oportunidades de arbitraje antes que otros y las explotan, o previenen que oponentes ejecuten ciclos rentables rechazando intercambios clave. Eficiencia de mercado emerge cuando jugadores son buscadores racionales de arbitraje.",
          de: "No-Arbitrage (aus Finanzökonomie) bedeutet Marktpreise verhindern profitable Zyklen. In Catan: wenn Spieler A 1 Weizen für 2 Schafe mit Spieler B tauscht, und Spieler B 2 Schafe für 3 Erz mit Spieler C tauscht, und Spieler C 2 Erz für 1 Weizen mit Spieler A tauscht, existiert profitabler Zyklus (A bekommt 1 Erz gratis). Effiziente Märkte eliminieren diese. Kluge Spieler identifizieren Arbitrage-Möglichkeiten vor anderen und nutzen sie aus, oder verhindern dass Gegner profitable Zyklen ausführen durch Ablehnung Schlüsselgeschäfte. Markteffizienz entsteht wenn Spieler rationale Arbitrage-Sucher sind.",
          nl: "Geen-arbitrage (uit financiële economie) betekent marktprijzen voorkomen winstgevende cycli. In Catan: als Speler A 1 tarwe ruilt voor 2 schapen met Speler B, en Speler B 2 schapen ruilt voor 3 erts met Speler C, en Speler C 2 erts ruilt voor 1 tarwe met Speler A, bestaat winstgevende cyclus (A krijgt 1 erts gratis). Efficiënte markten elimineren deze. Slimme spelers identificeren arbitrage mogelijkheden voor anderen en exploiteren ze, of voorkomen tegenstanders winstgevende cycli uitvoeren door sleutel ruilen te weigeren. Markt efficiëntie ontstaat wanneer spelers rationele arbitrage-zoekers zijn."
        }
      },
      {
        question: {
          en: "What is the 'curse of dimensionality' challenge in Catan AI development?",
          es: "¿Qué es el desafío de la 'maldición de dimensionalidad' en desarrollo de IA de Catan?",
          de: "Was ist die 'Fluch der Dimensionalität'-Herausforderung in Catan-KI-Entwicklung?",
          nl: "Wat is de 'vloek van dimensionaliteit' uitdaging in Catan AI ontwikkeling?"
        },
        options: [
          { en: "State space grows exponentially with features (board positions × resources × cards × trade history)", es: "Espacio de estado crece exponencialmente con características (posiciones de tablero × recursos × cartas × historial de comercio)", de: "Zustandsraum wächst exponentiell mit Merkmalen (Brettpositionen × Ressourcen × Karten × Handelshistorie)", nl: "Toestandsruimte groeit exponentieel met kenmerken (bordposities × bronnen × kaarten × handelsgeschiedenis)" },
          { en: "State space remains constant always", es: "Espacio de estado permanece constante siempre", de: "Zustandsraum bleibt immer konstant", nl: "Toestandsruimte blijft altijd constant" },
          { en: "Only 2-3 dimensions matter in Catan", es: "Solo 2-3 dimensiones importan en Catan", de: "Nur 2-3 Dimensionen zählen in Catan", nl: "Slechts 2-3 dimensies tellen in Catan" },
          { en: "Dimensionality doesn't affect AI performance", es: "La dimensionalidad no afecta rendimiento de IA", de: "Dimensionalität beeinflusst KI-Leistung nicht", nl: "Dimensionaliteit beïnvloedt AI prestatie niet" }
        ],
        correct: 0,
        explanation: {
          en: "Curse of dimensionality: as state features increase, the number of unique states grows exponentially, making exhaustive search infeasible. Catan's state includes: board layout (10^15 configs), player resources (5^20 combinations), development cards (25!), trade history, robber position, etc. This creates ~10^50 states. Solutions: (1) feature reduction via domain knowledge (ignore irrelevant states), (2) function approximation (neural networks learn state values without enumerating all), (3) Monte Carlo sampling (simulate random subset). Modern Catan AI uses deep learning to compress high-dimensional states into manageable representations.",
          es: "Maldición de dimensionalidad: a medida que características de estado aumentan, el número de estados únicos crece exponencialmente, haciendo búsqueda exhaustiva inviable. Estado de Catan incluye: diseño de tablero (10^15 configs), recursos de jugadores (5^20 combinaciones), cartas de desarrollo (25!), historial de comercio, posición de ladrón, etc. Esto crea ~10^50 estados. Soluciones: (1) reducción de características vía conocimiento de dominio (ignorar estados irrelevantes), (2) aproximación de función (redes neuronales aprenden valores de estado sin enumerar todos), (3) muestreo Monte Carlo (simular subconjunto aleatorio). IA moderna de Catan usa aprendizaje profundo para comprimir estados de alta dimensión en representaciones manejables.",
          de: "Fluch der Dimensionalität: wenn Zustandsmerkmale zunehmen, wächst Anzahl einzigartiger Zustände exponentiell, macht erschöpfende Suche unpraktikabel. Catans Zustand umfasst: Brettlayout (10^15 Configs), Spielerressourcen (5^20 Kombinationen), Entwicklungskarten (25!), Handelshistorie, Räuberposition, etc. Dies schafft ~10^50 Zustände. Lösungen: (1) Merkmalsreduktion via Domänenwissen (irrelevante Zustände ignorieren), (2) Funktionsapproximation (neuronale Netze lernen Zustandswerte ohne alle aufzuzählen), (3) Monte-Carlo-Sampling (zufällige Teilmenge simulieren). Moderne Catan-KI nutzt Deep Learning um hochdimensionale Zustände in handhabbare Darstellungen zu komprimieren.",
          nl: "Vloek van dimensionaliteit: naarmate toestandskenmerken toenemen, groeit aantal unieke toestanden exponentieel, maakt exhaustieve zoektocht onhaalbaar. Catan's toestand omvat: bordlay-out (10^15 configs), speler bronnen (5^20 combinaties), ontwikkelingskaarten (25!), handelsgeschiedenis, rover positie, etc. Dit creëert ~10^50 toestanden. Oplossingen: (1) kenmerk reductie via domein kennis (negeer irrelevante toestanden), (2) functie approximatie (neurale netwerken leren toestandswaarden zonder alle op te sommen), (3) Monte Carlo sampling (simuleer willekeurige subset). Moderne Catan AI gebruikt deep learning om hoog-dimensionale toestanden te comprimeren in hanteerbare representaties."
        }
      },
      {
        question: {
          en: "What is the 'multi-armed bandit problem' analogy in development card purchasing?",
          es: "¿Qué es la analogía del 'problema del bandido multibrazo' en compra de cartas de desarrollo?",
          de: "Was ist die 'Mehrarmbanditen-Problem'-Analogie beim Entwicklungskartenkauf?",
          nl: "Wat is de 'multi-armed bandit probleem' analogie in ontwikkelingskaart aankoop?"
        },
        options: [
          { en: "Explore-exploit tradeoff: buy cards to learn deck composition vs exploit known information", es: "Compromiso explorar-explotar: comprar cartas para aprender composición del mazo vs explotar información conocida", de: "Erkunden-Ausbeuten-Kompromiss: Karten kaufen um Deck-Zusammensetzung zu lernen vs bekannte Information ausbeuten", nl: "Verkennen-exploiteren afweging: kaarten kopen om deck compositie te leren vs bekende informatie exploiteren" },
          { en: "Always exploit without exploration", es: "Siempre explotar sin exploración", de: "Immer ausbeuten ohne Erkundung", nl: "Altijd exploiteren zonder verkenning" },
          { en: "Only explore, never exploit knowledge", es: "Solo explorar, nunca explotar conocimiento", de: "Nur erkunden, nie Wissen ausbeuten", nl: "Alleen verkennen, nooit kennis exploiteren" },
          { en: "Bandit problem doesn't apply to card games", es: "Problema de bandido no se aplica a juegos de cartas", de: "Banditenproblem gilt nicht für Kartenspiele", nl: "Bandit probleem geldt niet voor kaartspellen" }
        ],
        correct: 0,
        explanation: {
          en: "Multi-armed bandit problem: choosing between actions with uncertain rewards to maximize long-term gain, balancing exploration (gather information) vs exploitation (use current knowledge). In Catan dev cards: early purchases 'explore' the deck (revealing what cards remain), while late purchases 'exploit' (buying when you know high VP concentration). Optimal policy uses Upper Confidence Bound (UCB) algorithm: buy card when UCB value = expected VP + √(2ln(N)/n_i) is highest, naturally shifting from exploration to exploitation as information accumulates.",
          es: "Problema del bandido multibrazo: elegir entre acciones con recompensas inciertas para maximizar ganancia a largo plazo, equilibrando exploración (recopilar información) vs explotación (usar conocimiento actual). En cartas de desarrollo de Catan: compras tempranas 'exploran' el mazo (revelando qué cartas quedan), mientras compras tardías 'explotan' (comprando cuando sabes alta concentración de PV). Política óptima usa algoritmo Upper Confidence Bound (UCB): comprar carta cuando valor UCB = PV esperado + √(2ln(N)/n_i) es más alto, cambiando naturalmente de exploración a explotación a medida que información se acumula.",
          de: "Mehrarmbanditen-Problem: Wahl zwischen Aktionen mit unsicheren Belohnungen um langfristigen Gewinn zu maximieren, Balance zwischen Erkundung (Information sammeln) vs Ausbeutung (aktuelles Wissen nutzen). In Catan-Dev-Karten: frühe Käufe 'erkunden' das Deck (enthüllen welche Karten übrig bleiben), während späte Käufe 'ausbeuten' (kaufen wenn man hohe VP-Konzentration kennt). Optimale Politik nutzt Upper-Confidence-Bound-(UCB)-Algorithmus: Karte kaufen wenn UCB-Wert = erwartete VP + √(2ln(N)/n_i) am höchsten ist, wechselt natürlich von Erkundung zu Ausbeutung wenn Information sich ansammelt.",
          nl: "Multi-armed bandit probleem: kiezen tussen acties met onzekere beloningen om lange-termijn winst te maximaliseren, balanceren verkenning (informatie verzamelen) vs exploitatie (gebruik huidige kennis). In Catan dev kaarten: vroege aankopen 'verkennen' het deck (onthullen welke kaarten overblijven), terwijl late aankopen 'exploiteren' (kopen wanneer je hoge OP concentratie kent). Optimaal beleid gebruikt Upper Confidence Bound (UCB) algoritme: koop kaart wanneer UCB waarde = verwachte OP + √(2ln(N)/n_i) hoogst is, verschuift natuurlijk van verkenning naar exploitatie naarmate informatie accumuleert."
        }
      },
      {
        question: {
          en: "What is the 'winner's curse' phenomenon in competitive Catan auctions/trades?",
          es: "¿Qué es el fenómeno de 'maldición del ganador' en subastas/intercambios competitivos de Catan?",
          de: "Was ist das 'Gewinner-Fluch'-Phänomen in kompetitiven Catan-Auktionen/Geschäften?",
          nl: "Wat is het 'winnaar's vloek' fenomeen in competitieve Catan veilingen/ruilen?"
        },
        options: [
          { en: "Winner likely overpaid because winning signals you valued resource more than all others (adverse selection)", es: "Ganador probablemente pagó de más porque ganar señala que valoraste recurso más que todos los demás (selección adversa)", de: "Gewinner hat wahrscheinlich zu viel bezahlt weil Gewinnen signalisiert man schätzte Ressource mehr als alle anderen (adverse Selektion)", nl: "Winnaar heeft waarschijnlijk teveel betaald omdat winnen signaleert je waardeerde bron meer dan alle anderen (adverse selectie)" },
          { en: "Winners always get optimal value", es: "Ganadores siempre obtienen valor óptimo", de: "Gewinner bekommen immer optimalen Wert", nl: "Winnaars krijgen altijd optimale waarde" },
          { en: "No curse exists in trading games", es: "No existe maldición en juegos de comercio", de: "Kein Fluch existiert in Handelsspielen", nl: "Geen vloek bestaat in handelsspellen" },
          { en: "Losers are always worse off", es: "Perdedores siempre están peor", de: "Verlierer sind immer schlechter dran", nl: "Verliezers zijn altijd slechter af" }
        ],
        correct: 0,
        explanation: {
          en: "Winner's curse (from auction theory): winning a competitive bidding process often means you overpaid, because winning reveals your valuation exceeded all others—suggesting you may have overestimated the good's value. In Catan: if you 'win' a trade negotiation by offering best terms, this signals desperate need, inviting future exploitation. Rational players adjust bids downward to account for curse. Example: if you trade 3:1 when others refused 2:1, you revealed weakness. Sophisticated players avoid 'winning' trades too obviously to maintain information advantage.",
          es: "Maldición del ganador (de teoría de subastas): ganar proceso de licitación competitiva a menudo significa que pagaste de más, porque ganar revela que tu valoración excedió a todos los demás—sugiriendo que puedes haber sobreestimado el valor del bien. En Catan: si 'ganas' una negociación comercial ofreciendo mejores términos, esto señala necesidad desesperada, invitando explotación futura. Jugadores racionales ajustan ofertas hacia abajo para considerar maldición. Ejemplo: si intercambias 3:1 cuando otros rechazaron 2:1, revelaste debilidad. Jugadores sofisticados evitan 'ganar' intercambios demasiado obviamente para mantener ventaja de información.",
          de: "Gewinner-Fluch (aus Auktionstheorie): Gewinn eines kompetitiven Bietprozesses bedeutet oft man hat zu viel bezahlt, weil Gewinnen enthüllt Ihre Bewertung überstieg alle anderen—deutet an man hat Wert des Gutes möglicherweise überschätzt. In Catan: wenn man Handelsverhandlung 'gewinnt' durch Anbieten bester Bedingungen, signalisiert dies verzweifelte Not, lädt zukünftige Ausbeutung ein. Rationale Spieler passen Gebote nach unten an um Fluch zu berücksichtigen. Beispiel: wenn man 3:1 tauscht während andere 2:1 ablehnten, enthüllte man Schwäche. Raffinierte Spieler vermeiden Geschäfte zu offensichtlich zu 'gewinnen' um Informationsvorteil zu behalten.",
          nl: "Winnaar's vloek (uit veilingtheorie): winnen van competitief biedproces betekent vaak je hebt teveel betaald, omdat winnen onthult je waardering alle anderen overtrof—suggereert je hebt mogelijk de waarde van het goed overschat. In Catan: als je een handels onderhandeling 'wint' door beste voorwaarden te bieden, signaleert dit wanhopige behoefte, nodigt toekomstige exploitatie uit. Rationele spelers passen biedingen naar beneden aan om vloek te verrekenen. Voorbeeld: als je 3:1 ruilt terwijl anderen 2:1 weigerden, onthulde je zwakte. Gesofisticeerde spelers vermijden ruilen te duidelijk te 'winnen' om informatievoordeel te behouden."
        }
      },
      {
        question: {
          en: "What is the 'Condorcet paradox' possibility in 4-player Catan voting/coalitions?",
          es: "¿Qué es la posibilidad de 'paradoja de Condorcet' en votación/coaliciones de Catan de 4 jugadores?",
          de: "Was ist die 'Condorcet-Paradoxon'-Möglichkeit in 4-Spieler-Catan-Abstimmungen/Koalitionen?",
          nl: "Wat is de 'Condorcet paradox' mogelijkheid in 4-speler Catan stemmen/coalities?"
        },
        options: [
          { en: "Cyclic preferences: majority prefers A>B, B>C, C>A (no consistent group preference)", es: "Preferencias cíclicas: mayoría prefiere A>B, B>C, C>A (sin preferencia grupal consistente)", de: "Zyklische Präferenzen: Mehrheit bevorzugt A>B, B>C, C>A (keine konsistente Gruppenpräferenz)", nl: "Cyclische voorkeuren: meerderheid verkiest A>B, B>C, C>A (geen consistente groepsvoorkeur)" },
          { en: "All players always agree on preferences", es: "Todos los jugadores siempre están de acuerdo en preferencias", de: "Alle Spieler stimmen immer bei Präferenzen überein", nl: "Alle spelers zijn het altijd eens over voorkeuren" },
          { en: "Voting impossible in Catan", es: "Votación imposible en Catan", de: "Abstimmung unmöglich in Catan", nl: "Stemmen onmogelijk in Catan" },
          { en: "Condorcet paradox only applies to elections", es: "Paradoja de Condorcet solo se aplica a elecciones", de: "Condorcet-Paradoxon gilt nur für Wahlen", nl: "Condorcet paradox geldt alleen voor verkiezingen" }
        ],
        correct: 0,
        explanation: {
          en: "Condorcet paradox: even when individual preferences are transitive, group preferences can be cyclic, creating voting instability. In Catan implicit 'voting' via coalition formation: 3 players might prefer blocking Player A over B (A>B), blocking B over C (B>C), yet prefer blocking C over A (C>A) due to different strategic reasons. This creates unstable coalitions—no robust anti-leader consensus forms. Savvy leaders exploit this by ensuring their opponents' preferences remain cyclic (sowing disagreement), preventing stable coalitions from forming against them.",
          es: "Paradoja de Condorcet: incluso cuando preferencias individuales son transitivas, preferencias grupales pueden ser cíclicas, creando inestabilidad de votación. En 'votación' implícita de Catan vía formación de coalición: 3 jugadores podrían preferir bloquear Jugador A sobre B (A>B), bloquear B sobre C (B>C), sin embargo preferir bloquear C sobre A (C>A) debido a diferentes razones estratégicas. Esto crea coaliciones inestables—ningún consenso anti-líder robusto se forma. Líderes astutos explotan esto asegurando que preferencias de sus oponentes permanezcan cíclicas (sembrando desacuerdo), previniendo que coaliciones estables se formen contra ellos.",
          de: "Condorcet-Paradoxon: selbst wenn individuelle Präferenzen transitiv sind, können Gruppenpräferenzen zyklisch sein und Abstimmungsinstabilität schaffen. In Catans impliziter 'Abstimmung' via Koalitionsbildung: 3 Spieler könnten bevorzugen Spieler A über B zu blockieren (A>B), B über C zu blockieren (B>C), jedoch bevorzugen C über A zu blockieren (C>A) aufgrund verschiedener strategischer Gründe. Dies schafft instabile Koalitionen—kein robuster Anti-Anführer-Konsens bildet sich. Schlaue Anführer nutzen dies aus indem sie sicherstellen dass Gegnerpräferenzen zyklisch bleiben (Uneinigkeit säen), verhindert dass stabile Koalitionen gegen sie sich bilden.",
          nl: "Condorcet paradox: zelfs wanneer individuele voorkeuren transitief zijn, kunnen groepsvoorkeuren cyclisch zijn, creërend stem instabiliteit. In Catan impliciete 'stemmen' via coalitie vorming: 3 spelers zouden kunnen verkiezen Speler A blokkeren boven B (A>B), B blokkeren boven C (B>C), echter verkiezen C blokkeren boven A (C>A) vanwege verschillende strategische redenen. Dit creëert instabiele coalities—geen robuuste anti-leider consensus vormt. Slimme leiders exploiteren dit door te verzekeren dat tegenstander voorkeuren cyclisch blijven (onenigheid zaaien), voorkomt stabiele coalities zich tegen hen vormen."
        }
      },
      {
        question: {
          en: "What is the 'principal-agent problem' in Catan coalition partnerships?",
          es: "¿Qué es el 'problema de principal-agente' en asociaciones de coalición de Catan?",
          de: "Was ist das 'Prinzipal-Agent-Problem' in Catan-Koalitionspartnerschaften?",
          nl: "Wat is het 'principaal-agent probleem' in Catan coalitie partnerschappen?"
        },
        options: [
          { en: "Misaligned incentives: coalition partner may pursue own victory instead of blocking leader", es: "Incentivos desalineados: socio de coalición puede perseguir propia victoria en lugar de bloquear líder", de: "Fehlausgerichtete Anreize: Koalitionspartner kann eigenen Sieg verfolgen statt Anführer zu blockieren", nl: "Verkeerd uitgelijnde incentives: coalitie partner kan eigen overwinning nastreven in plaats van leider blokkeren" },
          { en: "All coalition members always cooperate perfectly", es: "Todos los miembros de coalición siempre cooperan perfectamente", de: "Alle Koalitionsmitglieder kooperieren immer perfekt", nl: "Alle coalitie leden werken altijd perfect samen" },
          { en: "Principal-agent problem doesn't exist in games", es: "Problema de principal-agente no existe en juegos", de: "Prinzipal-Agent-Problem existiert nicht in Spielen", nl: "Principaal-agent probleem bestaat niet in spellen" },
          { en: "Incentives always perfectly aligned", es: "Incentivos siempre perfectamente alineados", de: "Anreize immer perfekt ausgerichtet", nl: "Incentives altijd perfect uitgelijnd" }
        ],
        correct: 0,
        explanation: {
          en: "Principal-agent problem: when one party (agent) acts on behalf of another (principal), misaligned incentives cause agent to pursue own interests over principal's. In Catan coalitions: Player A (principal) wants Player B (agent) to block leader. But B's incentive is winning themselves, not helping A. B might 'shirk' (pretend to block while actually positioning for own victory). Solution: credible monitoring and incentive alignment. Sophisticated players only form coalitions with verifiable actions and shared victory conditions, using game structure to align incentives rather than trusting altruism.",
          es: "Problema de principal-agente: cuando una parte (agente) actúa en nombre de otra (principal), incentivos desalineados causan que agente persiga intereses propios sobre los del principal. En coaliciones de Catan: Jugador A (principal) quiere que Jugador B (agente) bloquee líder. Pero incentivo de B es ganar ellos mismos, no ayudar a A. B podría 'eludir' (pretender bloquear mientras en realidad se posiciona para propia victoria). Solución: monitoreo creíble y alineación de incentivos. Jugadores sofisticados solo forman coaliciones con acciones verificables y condiciones de victoria compartidas, usando estructura de juego para alinear incentivos en lugar de confiar en altruismo.",
          de: "Prinzipal-Agent-Problem: wenn eine Partei (Agent) im Namen einer anderen (Prinzipal) handelt, verursachen fehlausgerichtete Anreize dass Agent eigene Interessen über die des Prinzipals verfolgt. In Catan-Koalitionen: Spieler A (Prinzipal) will dass Spieler B (Agent) Anführer blockiert. Aber B's Anreiz ist selbst zu gewinnen, nicht A zu helfen. B könnte 'shirken' (vorgeben zu blockieren während tatsächlich für eigenen Sieg positionierend). Lösung: glaubwürdige Überwachung und Anreizausrichtung. Raffinierte Spieler bilden nur Koalitionen mit verifizierbaren Aktionen und gemeinsamen Siegbedingungen, nutzen Spielstruktur um Anreize auszurichten statt Altruismus zu vertrauen.",
          nl: "Principaal-agent probleem: wanneer één partij (agent) handelt namens een ander (principaal), veroorzaken verkeerd uitgelijnde incentives dat agent eigen belangen nastreeft boven principaal's. In Catan coalities: Speler A (principaal) wil dat Speler B (agent) leider blokkeert. Maar B's incentive is zelf winnen, niet A helpen. B zou kunnen 'verzaken' (doen alsof blokkeren terwijl eigenlijk positioneren voor eigen overwinning). Oplossing: geloofwaardige monitoring en incentive uitlijning. Gesofisticeerde spelers vormen alleen coalities met verifieerbare acties en gedeelde overwinningsvoorwaarden, gebruiken spelstructuur om incentives uit te lijnen in plaats van altruïsme te vertrouwen."
        }
      },
      {
        question: {
          en: "What is the 'screening vs signaling' dynamic in Catan information revelation?",
          es: "¿Qué es la dinámica de 'cribado vs señalización' en revelación de información de Catan?",
          de: "Was ist die 'Screening vs Signalisierung'-Dynamik in Catan-Informationsoffenbarung?",
          nl: "Wat is de 'screening vs signalering' dynamica in Catan informatie onthulling?"
        },
        options: [
          { en: "Screening: offer trades to elicit opponent information; Signaling: opponent reveals info through actions", es: "Cribado: ofrecer intercambios para obtener información del oponente; Señalización: oponente revela info a través de acciones", de: "Screening: Geschäfte anbieten um Gegnerinformation zu ermitteln; Signalisierung: Gegner offenbart Info durch Aktionen", nl: "Screening: ruilen aanbieden om tegenstander informatie te verkrijgen; Signalering: tegenstander onthult info door acties" },
          { en: "All information always hidden perfectly", es: "Toda información siempre oculta perfectamente", de: "Alle Information immer perfekt versteckt", nl: "Alle informatie altijd perfect verborgen" },
          { en: "No information exchange possible in Catan", es: "No es posible intercambio de información en Catan", de: "Kein Informationsaustausch in Catan möglich", nl: "Geen informatie uitwisseling mogelijk in Catan" },
          { en: "Screening and signaling are identical concepts", es: "Cribado y señalización son conceptos idénticos", de: "Screening und Signalisierung sind identische Konzepte", nl: "Screening en signalering zijn identieke concepten" }
        ],
        correct: 0,
        explanation: {
          en: "Information economics distinguishes: Screening = uninformed party designs mechanism to extract information from informed party. Signaling = informed party voluntarily reveals information. In Catan screening: propose '1 wheat for 1 ore?' to test if opponent has ore (refusal signals scarcity). In signaling: opponent buys many dev cards (signals either desperation or hidden VPs—you must infer). Elite players use screening to force information revelation cost-effectively, while managing their own signals to avoid leaking valuable information. This information warfare determines trading dynamics.",
          es: "Economía de información distingue: Cribado = parte no informada diseña mecanismo para extraer información de parte informada. Señalización = parte informada voluntariamente revela información. En cribado de Catan: proponer '1 trigo por 1 mineral?' para probar si oponente tiene mineral (rechazo señala escasez). En señalización: oponente compra muchas cartas de desarrollo (señala desesperación o PVs ocultos—debes inferir). Jugadores de élite usan cribado para forzar revelación de información rentablemente, mientras gestionan sus propias señales para evitar filtrar información valiosa. Esta guerra de información determina dinámicas comerciales.",
          de: "Informationsökonomie unterscheidet: Screening = uninformierte Partei entwirft Mechanismus um Information von informierter Partei zu extrahieren. Signalisierung = informierte Partei offenbart freiwillig Information. In Catan-Screening: '1 Weizen für 1 Erz?' vorschlagen um zu testen ob Gegner Erz hat (Ablehnung signalisiert Knappheit). In Signalisierung: Gegner kauft viele Dev-Karten (signalisiert entweder Verzweiflung oder versteckte VPs—man muss folgern). Elite-Spieler nutzen Screening um Informationsoffenbarung kostengünstig zu erzwingen, während sie eigene Signale verwalten um wertvolle Information zu vermeiden zu lecken. Diese Informationskriegsführung bestimmt Handelsdynamiken.",
          nl: "Informatie economie onderscheidt: Screening = ongeïnformeerde partij ontwerpt mechanisme om informatie te extraheren van geïnformeerde partij. Signalering = geïnformeerde partij onthult vrijwillig informatie. In Catan screening: stel voor '1 tarwe voor 1 erts?' om te testen of tegenstander erts heeft (weigering signaleert schaarste). In signalering: tegenstander koopt veel dev kaarten (signaleert ofwel wanhoop of verborgen OPs—je moet afleiden). Elite spelers gebruiken screening om informatie onthulling kosteneffectief te forceren, terwijl ze hun eigen signalen beheren om waardevolle informatie lekken te vermijden. Deze informatie oorlogsvoering bepaalt handels dynamica."
        }
      },
      {
        question: {
          en: "What is the 'auction theory revenue equivalence theorem' implication for Catan trading formats?",
          es: "¿Qué es la implicación del 'teorema de equivalencia de ingresos de teoría de subastas' para formatos de comercio de Catan?",
          de: "Was ist die 'Auktionstheorie-Erlösäquivalenz-Theorem'-Implikation für Catan-Handelsformate?",
          nl: "Wat is de 'veilingtheorie inkomsten equivalentie stelling' implicatie voor Catan handels formaten?"
        },
        options: [
          { en: "Different trade mechanisms (sequential vs simultaneous offers) yield same expected outcomes under certain conditions", es: "Diferentes mecanismos de comercio (ofertas secuenciales vs simultáneas) producen mismos resultados esperados bajo ciertas condiciones", de: "Verschiedene Handelsmechanismen (sequentielle vs simultane Angebote) bringen gleiche erwartete Ergebnisse unter bestimmten Bedingungen", nl: "Verschillende handelsmechanismen (sequentiële vs simultane aanbiedingen) leveren zelfde verwachte uitkomsten onder bepaalde voorwaarden" },
          { en: "All auction formats always yield different outcomes", es: "Todos los formatos de subasta siempre producen resultados diferentes", de: "Alle Auktionsformate bringen immer verschiedene Ergebnisse", nl: "Alle veiling formaten leveren altijd verschillende uitkomsten" },
          { en: "Only one trading format exists in Catan", es: "Solo existe un formato de comercio en Catan", de: "Nur ein Handelsformat existiert in Catan", nl: "Slechts één handelsformaat bestaat in Catan" },
          { en: "Revenue equivalence doesn't apply to games", es: "Equivalencia de ingresos no se aplica a juegos", de: "Erlösäquivalenz gilt nicht für Spiele", nl: "Inkomsten equivalentie geldt niet voor spellen" }
        ],
        correct: 0,
        explanation: {
          en: "Revenue Equivalence Theorem: under certain assumptions (risk neutrality, independent private values), all efficient auction formats yield same expected revenue to seller. Applied to Catan: whether you trade via (A) simultaneous offers from all players, (B) sequential negotiation, or (C) sealed bid auction, expected resource value obtained is equivalent when players are rational and valuations independent. This explains why Catan's flexible trading doesn't systematically disadvantage any format—market efficiency emerges regardless of mechanism. However, when assumptions break (risk aversion, correlated values), formats diverge and mechanism choice matters strategically.",
          es: "Teorema de Equivalencia de Ingresos: bajo ciertos supuestos (neutralidad de riesgo, valores privados independientes), todos los formatos de subasta eficientes producen mismo ingreso esperado al vendedor. Aplicado a Catan: ya sea que comercies vía (A) ofertas simultáneas de todos los jugadores, (B) negociación secuencial, o (C) subasta de oferta sellada, valor de recurso esperado obtenido es equivalente cuando jugadores son racionales y valoraciones independientes. Esto explica por qué el comercio flexible de Catan no desventaja sistemáticamente ningún formato—eficiencia de mercado emerge independientemente del mecanismo. Sin embargo, cuando supuestos se rompen (aversión al riesgo, valores correlacionados), formatos divergen y elección de mecanismo importa estratégicamente.",
          de: "Erlösäquivalenz-Theorem: unter bestimmten Annahmen (Risikoneutralität, unabhängige private Werte) bringen alle effizienten Auktionsformate gleichen erwarteten Erlös für Verkäufer. Angewandt auf Catan: ob man via (A) simultane Angebote von allen Spielern, (B) sequentielle Verhandlung, oder (C) versiegelte Gebotsauktion handelt, erwarteter Ressourcenwert erhalten ist äquivalent wenn Spieler rational sind und Bewertungen unabhängig. Dies erklärt warum Catans flexibler Handel kein Format systematisch benachteiligt—Markteffizienz entsteht unabhängig von Mechanismus. Jedoch wenn Annahmen brechen (Risikoaversion, korrelierte Werte), divergieren Formate und Mechanismuswahl zählt strategisch.",
          nl: "Inkomsten Equivalentie Stelling: onder bepaalde aannames (risico neutraliteit, onafhankelijke private waarden) leveren alle efficiënte veiling formaten zelfde verwachte inkomsten aan verkoper. Toegepast op Catan: of je ruilt via (A) simultane aanbiedingen van alle spelers, (B) sequentiële onderhandeling, of (C) verzegelde bod veiling, verwachte bron waarde verkregen is equivalent wanneer spelers rationeel zijn en waarderingen onafhankelijk. Dit verklaart waarom Catan's flexibele handel geen formaat systematisch benadeelt—markt efficiëntie ontstaat ongeacht mechanisme. Echter wanneer aannames breken (risico afkeer, gecorreleerde waarden), divergeren formaten en mechanisme keuze telt strategisch."
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
