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
