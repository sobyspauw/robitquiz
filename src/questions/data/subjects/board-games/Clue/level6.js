// Quiz Template - Level 6: Bord spelletjes - Clue
(function() {
  const level6 = {
    name: {
      en: "Cluedo - Master",
      es: "Cluedo - Maestro",
      de: "Cluedo - Meister",
      nl: "Cluedo - Meester"
    },
    questions: [
      {
        question: {
          en: "In master-level Cluedo, what is 'Kolmogorov complexity' applied to suggestion sequences?",
          es: "En Cluedo de nivel maestro, ¿qué es la 'complejidad de Kolmogorov' aplicada a secuencias de sugerencias?",
          de: "Was ist 'Kolmogorov-Komplexität' auf Vorschlagssequenzen im Meister-Cluedo angewendet?",
          nl: "Wat is 'Kolmogorov-complexiteit' toegepast op suggestiesequenties in meester-niveau Cluedo?"
        },
        options: [
          {
            en: "The minimum pattern length needed to encode all information gained",
            es: "La longitud mínima del patrón necesaria para codificar toda la información obtenida",
            de: "Die minimale Musterlänge, die benötigt wird, um alle gewonnenen Informationen zu kodieren",
            nl: "De minimale patroonlengte die nodig is om alle verkregen informatie te coderen"
          },
          {
            en: "The total number of suggestions made",
            es: "El número total de sugerencias hechas",
            de: "Die Gesamtzahl der gemachten Vorschläge",
            nl: "Het totale aantal gemaakte suggesties"
          },
          {
            en: "The difficulty of remembering cards",
            es: "La dificultad de recordar cartas",
            de: "Die Schwierigkeit, sich an Karten zu erinnern",
            nl: "De moeilijkheid om kaarten te onthouden"
          },
          {
            en: "A scoring system for players",
            es: "Un sistema de puntuación para jugadores",
            de: "Ein Punktesystem für Spieler",
            nl: "Een puntensysteem voor spelers"
          }
        ],
        correct: 0,
        explanation: {
          en: "Kolmogorov complexity in Cluedo measures the information-theoretic efficiency of suggestion sequences—the shortest 'program' or pattern that captures all deductive information gained. Master players minimize redundancy by choosing maximally informative suggestions that compress knowledge efficiently.",
          es: "La complejidad de Kolmogorov en Cluedo mide la eficiencia teórica de la información de las secuencias de sugerencias: el 'programa' o patrón más corto que captura toda la información deductiva obtenida. Los jugadores maestros minimizan la redundancia eligiendo sugerencias máximamente informativas.",
          de: "Kolmogorov-Komplexität in Cluedo misst die informationstheoretische Effizienz von Vorschlagssequenzen—das kürzeste 'Programm' oder Muster, das alle gewonnenen deduktiven Informationen erfasst. Meisterspieler minimieren Redundanz durch maximal informative Vorschläge.",
          nl: "Kolmogorov-complexiteit in Cluedo meet de informatietheorische efficiëntie van suggestiesequenties—het kortste 'programma' of patroon dat alle verkregen deductieve informatie vastlegt. Meesterspelers minimaliseren redundantie door maximaal informatieve suggesties te kiezen."
        }
      },
      {
        question: {
          en: "What is 'strategic card revelation asymmetry' in competitive Cluedo?",
          es: "¿Qué es la 'asimetría estratégica de revelación de cartas' en Cluedo competitivo?",
          de: "Was ist 'strategische Kartenoffenbarungsasymmetrie' im kompetitiven Cluedo?",
          nl: "Wat is 'strategische kaartonthuллingsasymmetrie' in competitief Cluedo?"
        },
        options: [
          {
            en: "Deliberately showing cards to different opponents at different rates to control information flow",
            es: "Mostrar deliberadamente cartas a diferentes oponentes a diferentes tasas para controlar el flujo de información",
            de: "Absichtliches Zeigen von Karten an verschiedene Gegner in unterschiedlichen Raten zur Kontrolle des Informationsflusses",
            nl: "Opzettelijk kaarten aan verschillende tegenstanders tonen met verschillende snelheden om informatiestroom te controleren"
          },
          {
            en: "Having more cards than other players",
            es: "Tener más cartas que otros jugadores",
            de: "Mehr Karten als andere Spieler haben",
            nl: "Meer kaarten hebben dan andere spelers"
          },
          {
            en: "Showing cards randomly",
            es: "Mostrar cartas al azar",
            de: "Karten zufällig zeigen",
            nl: "Kaarten willekeurig tonen"
          },
          {
            en: "Always showing the same card",
            es: "Siempre mostrar la misma carta",
            de: "Immer dieselbe Karte zeigen",
            nl: "Altijd dezelfde kaart tonen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Strategic card revelation asymmetry involves consciously varying which cards you reveal to which opponents, creating differential knowledge states among your adversaries. This allows you to track who knows what while controlling competitive advantages between other players.",
          es: "La asimetría estratégica de revelación de cartas implica variar conscientemente qué cartas revelas a qué oponentes, creando estados de conocimiento diferencial entre tus adversarios. Esto te permite rastrear quién sabe qué mientras controlas ventajas competitivas.",
          de: "Strategische Kartenoffenbarungsasymmetrie beinhaltet bewusstes Variieren, welche Karten Sie welchen Gegnern zeigen, um differentielle Wissenszustände zu schaffen. Dies ermöglicht Ihnen zu verfolgen, wer was weiß, während Sie Wettbewerbsvorteile kontrollieren.",
          nl: "Strategische kaartonthuллingsasymmetrie houdt in dat je bewust varieert welke kaarten je aan welke tegenstanders toont, waardoor differentiële kennisstaten onder je tegenstanders ontstaan. Dit stelt je in staat om bij te houden wie wat weet terwijl je competitieve voordelen controleert."
        }
      },
      {
        question: {
          en: "What is 'temporal information decay analysis' in Cluedo?",
          es: "¿Qué es el 'análisis de decadencia temporal de información' en Cluedo?",
          de: "Was ist 'temporale Informationszerfallsanalyse' in Cluedo?",
          nl: "Wat is 'temporele informatievervalanalyse' in Cluedo?"
        },
        options: [
          {
            en: "Tracking how information value decreases over time as the game progresses",
            es: "Rastrear cómo el valor de la información disminuye con el tiempo a medida que avanza el juego",
            de: "Verfolgung, wie der Informationswert im Laufe des Spiels abnimmt",
            nl: "Bijhouden hoe informatiewaarde afneemt naarmate het spel vordert"
          },
          {
            en: "Forgetting cards shown earlier",
            es: "Olvidar cartas mostradas anteriormente",
            de: "Früher gezeigte Karten vergessen",
            nl: "Eerder getoonde kaarten vergeten"
          },
          {
            en: "Taking longer turns as the game goes on",
            es: "Tomar turnos más largos a medida que avanza el juego",
            de: "Längere Züge machen, wenn das Spiel fortschreitet",
            nl: "Langere beurten nemen naarmate het spel vordert"
          },
          {
            en: "Cards becoming less useful",
            es: "Las cartas se vuelven menos útiles",
            de: "Karten werden weniger nützlich",
            nl: "Kaarten worden minder nuttig"
          }
        ],
        correct: 0,
        explanation: {
          en: "Temporal information decay analysis recognizes that information gained early in the game loses relative value as more data accumulates and the solution space narrows. Master players weight recent information more heavily and adjust their strategies as information density changes over time.",
          es: "El análisis de decadencia temporal de información reconoce que la información obtenida temprano en el juego pierde valor relativo a medida que se acumulan más datos. Los jugadores maestros dan más peso a la información reciente y ajustan sus estrategias.",
          de: "Temporale Informationszerfallsanalyse erkennt, dass früh im Spiel gewonnene Informationen an relativem Wert verlieren, wenn mehr Daten akkumuliert werden. Meisterspieler gewichten neuere Informationen stärker und passen ihre Strategien an.",
          nl: "Temporele informatievervalanalyse erkent dat vroeg in het spel verkregen informatie relatieve waarde verliest naarmate meer gegevens zich opstapelen. Meesterspelers wegen recente informatie zwaarder en passen hun strategieën aan."
        }
      },
      {
        question: {
          en: "What is 'counter-deductive bluffing' at master level?",
          es: "¿Qué es el 'engaño contra-deductivo' a nivel maestro?",
          de: "Was ist 'gegen-deduktives Bluffen' auf Meisterniveau?",
          nl: "Wat is 'contra-deductief bluffen' op meesterniveau?"
        },
        options: [
          {
            en: "Making suggestions that logically appear to eliminate cards you hold, creating false deductions in opponents",
            es: "Hacer sugerencias que lógicamente parecen eliminar cartas que tienes, creando deducciones falsas en oponentes",
            de: "Vorschläge machen, die logisch erscheinen, Karten zu eliminieren, die Sie halten, und falsche Deduktionen bei Gegnern erzeugen",
            nl: "Suggesties doen die logisch lijken kaarten te elimineren die je houdt, waardoor valse deducties bij tegenstanders ontstaan"
          },
          {
            en: "Randomly guessing the solution",
            es: "Adivinar al azar la solución",
            de: "Zufällig die Lösung erraten",
            nl: "Willekeurig de oplossing raden"
          },
          {
            en: "Refusing to make suggestions",
            es: "Negarse a hacer sugerencias",
            de: "Sich weigern, Vorschläge zu machen",
            nl: "Weigeren suggesties te doen"
          },
          {
            en: "Only suggesting cards you don't have",
            es: "Solo sugerir cartas que no tienes",
            de: "Nur Karten vorschlagen, die Sie nicht haben",
            nl: "Alleen kaarten voorstellen die je niet hebt"
          }
        ],
        correct: 0,
        explanation: {
          en: "Counter-deductive bluffing involves making suggestions that include your own cards in ways that logically mislead opponents into thinking you don't have them. By crafting suggestion patterns that appear to eliminate certain cards from your hand, you create systematic false deductions in observant opponents.",
          es: "El engaño contra-deductivo implica hacer sugerencias que incluyen tus propias cartas de maneras que engañan lógicamente a los oponentes haciéndoles pensar que no las tienes. Al crear patrones de sugerencias que parecen eliminar ciertas cartas, creas deducciones falsas sistemáticas.",
          de: "Gegen-deduktives Bluffen beinhaltet Vorschläge, die Ihre eigenen Karten so einschließen, dass Gegner logisch in die Irre geführt werden zu denken, Sie hätten sie nicht. Durch das Erstellen von Vorschlagsmustern, die bestimmte Karten zu eliminieren scheinen, erzeugen Sie systematische Falschdeduktionen.",
          nl: "Contra-deductief bluffen houdt in dat je suggesties doet die je eigen kaarten bevatten op manieren die tegenstanders logisch misleiden te denken dat je ze niet hebt. Door suggestiepatronen te maken die lijken bepaalde kaarten te elimineren, creëer je systematische valse deducties."
        }
      },
      {
        question: {
          en: "What is 'Bayesian card location updating' in high-level play?",
          es: "¿Qué es la 'actualización bayesiana de ubicación de cartas' en juego de alto nivel?",
          de: "Was ist 'Bayesianische Kartenstandortaktualisierung' im hochrangigen Spiel?",
          nl: "Wat is 'Bayesiaanse kaartlocatie-update' in spel op hoog niveau?"
        },
        options: [
          {
            en: "Continuously updating probability distributions of card locations based on all new evidence",
            es: "Actualizar continuamente las distribuciones de probabilidad de las ubicaciones de las cartas basándose en toda nueva evidencia",
            de: "Kontinuierliches Aktualisieren von Wahrscheinlichkeitsverteilungen der Kartenstandorte basierend auf allen neuen Beweisen",
            nl: "Continu bijwerken van waarschijnlijkheidsverdelingen van kaartlocaties op basis van alle nieuwe bewijzen"
          },
          {
            en: "Guessing where cards are",
            es: "Adivinar dónde están las cartas",
            de: "Raten, wo die Karten sind",
            nl: "Raden waar kaarten zijn"
          },
          {
            en: "Memorizing card positions",
            es: "Memorizar posiciones de cartas",
            de: "Kartenpositionen auswendig lernen",
            nl: "Kaartposities onthouden"
          },
          {
            en: "Tracking only your own cards",
            es: "Rastrear solo tus propias cartas",
            de: "Nur Ihre eigenen Karten verfolgen",
            nl: "Alleen je eigen kaarten bijhouden"
          }
        ],
        correct: 0,
        explanation: {
          en: "Bayesian card location updating applies Bayes' theorem to continuously refine probability estimates of where each card is located as new information emerges. Each suggestion and disproof updates the entire probability distribution across all players and the envelope, creating a dynamic model of card locations.",
          es: "La actualización bayesiana de ubicación de cartas aplica el teorema de Bayes para refinar continuamente las estimaciones de probabilidad de dónde está ubicada cada carta a medida que surge nueva información. Cada sugerencia y refutación actualiza toda la distribución de probabilidad.",
          de: "Bayesianische Kartenstandortaktualisierung wendet Bayes' Theorem an, um Wahrscheinlichkeitsschätzungen kontinuierlich zu verfeinern, wo sich jede Karte befindet, wenn neue Informationen auftauchen. Jeder Vorschlag und Widerlegung aktualisiert die gesamte Wahrscheinlichkeitsverteilung.",
          nl: "Bayesiaanse kaartlocatie-update past Bayes' theorema toe om waarschijnlijkheidsschattingen continu te verfijnen van waar elke kaart zich bevindt naarmate nieuwe informatie ontstaat. Elke suggestie en weerlegging werkt de hele waarschijnlijkheidsverdeling bij."
        }
      },
      {
        question: {
          en: "What is 'optimal stopping theory' applied to Cluedo accusations?",
          es: "¿Qué es la 'teoría de parada óptima' aplicada a las acusaciones de Cluedo?",
          de: "Was ist die 'optimale Stopptheorie' angewendet auf Cluedo-Anschuldigungen?",
          nl: "Wat is 'optimale stoptheorie' toegepast op Cluedo-beschuldigingen?"
        },
        options: [
          {
            en: "Mathematically determining the exact moment to accuse based on probability thresholds and opponent positions",
            es: "Determinar matemáticamente el momento exacto para acusar basándose en umbrales de probabilidad y posiciones de oponentes",
            de: "Mathematisches Bestimmen des exakten Moments zur Anschuldigung basierend auf Wahrscheinlichkeitsschwellen und Gegnerpositionen",
            nl: "Wiskundig bepalen van het exacte moment om te beschuldigen op basis van waarschijnlijkheidsdrempels en tegenstanderposities"
          },
          {
            en: "Accusing when you're certain",
            es: "Acusar cuando estás seguro",
            de: "Anschuldigen, wenn Sie sicher sind",
            nl: "Beschuldigen wanneer je zeker bent"
          },
          {
            en: "Always accusing first",
            es: "Siempre acusar primero",
            de: "Immer zuerst anschuldigen",
            nl: "Altijd als eerste beschuldigen"
          },
          {
            en: "Never accusing until last turn",
            es: "Nunca acusar hasta el último turno",
            de: "Niemals anschuldigen bis zum letzten Zug",
            nl: "Nooit beschuldigen tot de laatste beurt"
          }
        ],
        correct: 0,
        explanation: {
          en: "Optimal stopping theory in Cluedo involves calculating the precise probability threshold at which making an accusation becomes mathematically optimal, considering your confidence level, opponents' apparent knowledge states, turn order, and the risk-reward of waiting for more information versus the risk of being preempted.",
          es: "La teoría de parada óptima en Cluedo implica calcular el umbral de probabilidad preciso en el que hacer una acusación se vuelve matemáticamente óptimo, considerando tu nivel de confianza, los estados de conocimiento aparentes de los oponentes, el orden de turno y el riesgo-recompensa.",
          de: "Optimale Stopptheorie in Cluedo beinhaltet die Berechnung der präzisen Wahrscheinlichkeitsschwelle, bei der eine Anschuldigung mathematisch optimal wird, unter Berücksichtigung Ihres Vertrauensniveaus, der scheinbaren Wissenszustände der Gegner, der Zugreihenfolge und des Risiko-Ertrags.",
          nl: "Optimale stoptheorie in Cluedo houdt in dat je de precieze waarschijnlijkheidsdrempel berekent waarop het doen van een beschuldiging wiskundig optimaal wordt, rekening houdend met je vertrouwensniveau, de schijnbare kennisstaten van tegenstanders, beurtorde en het risico-beloning."
        }
      },
      {
        question: {
          en: "What is 'information-theoretic suggestion diversity' in master Cluedo?",
          es: "¿Qué es la 'diversidad de sugerencias teórico-informacional' en Cluedo maestro?",
          de: "Was ist 'informationstheoretische Vorschlagsvielfalt' im Meister-Cluedo?",
          nl: "Wat is 'informatietheorетische suggestiediversiteit' in meester-Cluedo?"
        },
        options: [
          {
            en: "Maximizing the variety of card combinations tested to extract maximum information from each suggestion",
            es: "Maximizar la variedad de combinaciones de cartas probadas para extraer la máxima información de cada sugerencia",
            de: "Maximierung der Vielfalt der getesteten Kartenkombinationen, um maximale Informationen aus jedem Vorschlag zu extrahieren",
            nl: "Maximaliseren van de variëteit aan geteste kaartcombinaties om maximale informatie uit elke suggestie te halen"
          },
          {
            en: "Making different suggestions each turn",
            es: "Hacer diferentes sugerencias cada turno",
            de: "Verschiedene Vorschläge in jedem Zug machen",
            nl: "Verschillende suggesties elke beurt doen"
          },
          {
            en: "Suggesting all card types equally",
            es: "Sugerir todos los tipos de cartas por igual",
            de: "Alle Kartentypen gleichermaßen vorschlagen",
            nl: "Alle kaarttypes gelijk voorstellen"
          },
          {
            en: "Using random suggestions",
            es: "Usar sugerencias aleatorias",
            de: "Zufällige Vorschläge verwenden",
            nl: "Willekeurige suggesties gebruiken"
          }
        ],
        correct: 0,
        explanation: {
          en: "Information-theoretic suggestion diversity involves strategically varying your suggestions to maximize the expected information gain from each turn. This means choosing card combinations that test the widest possible range of hypotheses, avoiding redundant tests, and selecting suggestions that will provide maximum discrimination between remaining possibilities.",
          es: "La diversidad de sugerencias teórico-informacional implica variar estratégicamente tus sugerencias para maximizar la ganancia de información esperada de cada turno. Esto significa elegir combinaciones de cartas que prueben el rango más amplio posible de hipótesis.",
          de: "Informationstheoretische Vorschlagsvielfalt beinhaltet strategisches Variieren Ihrer Vorschläge, um den erwarteten Informationsgewinn aus jedem Zug zu maximieren. Dies bedeutet, Kartenkombinationen zu wählen, die die breitestmögliche Palette von Hypothesen testen.",
          nl: "Informatietheorетische suggestiediversiteit houdt in dat je strategisch je suggesties varieert om de verwachte informatiewinst van elke beurt te maximaliseren. Dit betekent kaartcombinaties kiezen die het breedst mogelijke bereik van hypothesen testen."
        }
      },
      {
        question: {
          en: "What is 'adversarial knowledge modeling' in competitive Cluedo?",
          es: "¿Qué es el 'modelado de conocimiento adversario' en Cluedo competitivo?",
          de: "Was ist 'adversariales Wissensmodellierung' im kompetitiven Cluedo?",
          nl: "Wat is 'adversariële kennismodellering' in competitief Cluedo?"
        },
        options: [
          {
            en: "Building mental models of what each opponent knows and tracking their deductive progress",
            es: "Construir modelos mentales de lo que cada oponente sabe y rastrear su progreso deductivo",
            de: "Mentale Modelle aufbauen, was jeder Gegner weiß, und deren deduktiven Fortschritt verfolgen",
            nl: "Mentale modellen bouwen van wat elke tegenstander weet en hun deductieve vooruitgang bijhouden"
          },
          {
            en: "Knowing your opponents' names",
            es: "Conocer los nombres de tus oponentes",
            de: "Die Namen Ihrer Gegner kennen",
            nl: "De namen van je tegenstanders kennen"
          },
          {
            en: "Tracking opponents' dice rolls",
            es: "Rastrear las tiradas de dados de los oponentes",
            de: "Würfelwürfe der Gegner verfolgen",
            nl: "Dobbelsteenworp van tegenstanders bijhouden"
          },
          {
            en: "Memorizing opponent strategies",
            es: "Memorizar estrategias de oponentes",
            de: "Gegnerstrategien auswendig lernen",
            nl: "Tegenstanderstrategieën onthouden"
          }
        ],
        correct: 0,
        explanation: {
          en: "Adversarial knowledge modeling means constructing detailed mental models of each opponent's knowledge state—tracking what cards they've seen, what deductions they've likely made, and how close they are to solving. This allows you to anticipate their accusations, adjust your information-revealing strategy, and time your own accusation optimally.",
          es: "El modelado de conocimiento adversario significa construir modelos mentales detallados del estado de conocimiento de cada oponente: rastrear qué cartas han visto, qué deducciones probablemente han hecho y qué tan cerca están de resolver. Esto te permite anticipar sus acusaciones.",
          de: "Adversariales Wissensmodellierung bedeutet, detaillierte mentale Modelle des Wissensstands jedes Gegners zu konstruieren—zu verfolgen, welche Karten sie gesehen haben, welche Deduktionen sie wahrscheinlich gemacht haben und wie nah sie am Lösen sind.",
          nl: "Adversariële kennismodellering betekent gedetailleerde mentale modellen construeren van de kennistoestand van elke tegenstander—bijhouden welke kaarten ze hebben gezien, welke deducties ze waarschijnlijk hebben gemaakt en hoe dicht ze bij oplossen zijn."
        }
      },
      {
        question: {
          en: "What is 'category partition optimization' in master Cluedo strategy?",
          es: "¿Qué es la 'optimización de partición de categorías' en estrategia maestra de Cluedo?",
          de: "Was ist 'Kategoriepartitionsoptimierung' in der Meister-Cluedo-Strategie?",
          nl: "Wat is 'categorieverdeling-optimalisatie' in meester-Cluedo-strategie?"
        },
        options: [
          {
            en: "Strategically balancing information gathering across suspect, weapon, and room categories",
            es: "Equilibrar estratégicamente la recopilación de información entre categorías de sospechoso, arma y habitación",
            de: "Strategisches Ausbalancieren der Informationsbeschaffung über Verdächtige-, Waffen- und Raumkategorien",
            nl: "Strategisch balanceren van informatieverzameling over verdachte-, wapen- en kamercategorieën"
          },
          {
            en: "Focusing only on suspects",
            es: "Enfocarse solo en sospechosos",
            de: "Nur auf Verdächtige fokussieren",
            nl: "Alleen op verdachten focussen"
          },
          {
            en: "Testing categories randomly",
            es: "Probar categorías al azar",
            de: "Kategorien zufällig testen",
            nl: "Categorieën willekeurig testen"
          },
          {
            en: "Always suggesting the same category",
            es: "Siempre sugerir la misma categoría",
            de: "Immer dieselbe Kategorie vorschlagen",
            nl: "Altijd dezelfde categorie voorstellen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Category partition optimization involves strategically distributing your information-gathering efforts across the three card categories (suspects, weapons, rooms) based on current uncertainty levels, remaining possibilities in each category, and the differential value of information in each domain. Master players dynamically reallocate focus as uncertainty resolves.",
          es: "La optimización de partición de categorías implica distribuir estratégicamente tus esfuerzos de recopilación de información entre las tres categorías de cartas basándose en niveles de incertidumbre actuales, posibilidades restantes en cada categoría y el valor diferencial de información.",
          de: "Kategoriepartitionsoptimierung beinhaltet strategisches Verteilen Ihrer Informationsbeschaffungsbemühungen über die drei Kartenkategorien basierend auf aktuellen Unsicherheitsniveaus, verbleibenden Möglichkeiten in jeder Kategorie und dem differentiellen Wert von Informationen.",
          nl: "Categorieverdeling-optimalisatie houdt in dat je strategisch je informatieverzamelingsinspanningen verdeelt over de drie kaartcategorieën op basis van huidige onzekerheidsniveaus, resterende mogelijkheden in elke categorie en de differentiële waarde van informatie."
        }
      },
      {
        question: {
          en: "What is 'suggestion sequence entropy maximization' in Cluedo?",
          es: "¿Qué es la 'maximización de entropía de secuencia de sugerencias' en Cluedo?",
          de: "Was ist 'Vorschlagssequenz-Entropiemaximierung' in Cluedo?",
          nl: "Wat is 'suggestiesequentie-entropiemaximalisatie' in Cluedo?"
        },
        options: [
          {
            en: "Choosing each suggestion to maximize expected information gain regardless of previous patterns",
            es: "Elegir cada sugerencia para maximizar la ganancia de información esperada independientemente de patrones previos",
            de: "Jeder Vorschlag wählen, um erwarteten Informationsgewinn zu maximieren, unabhängig von vorherigen Mustern",
            nl: "Elke suggestie kiezen om verwachte informatiewinst te maximaliseren ongeacht eerdere patronen"
          },
          {
            en: "Making random suggestions",
            es: "Hacer sugerencias aleatorias",
            de: "Zufällige Vorschläge machen",
            nl: "Willekeurige suggesties doen"
          },
          {
            en: "Following a fixed pattern",
            es: "Seguir un patrón fijo",
            de: "Einem festen Muster folgen",
            nl: "Een vast patroon volgen"
          },
          {
            en: "Repeating successful suggestions",
            es: "Repetir sugerencias exitosas",
            de: "Erfolgreiche Vorschläge wiederholen",
            nl: "Succesvolle suggesties herhalen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Suggestion sequence entropy maximization means selecting each suggestion to produce the highest expected information gain (Shannon entropy reduction) given current knowledge. Rather than following patterns, this approach treats each turn as an independent optimization problem, selecting the card combination most likely to resolve maximum uncertainty.",
          es: "La maximización de entropía de secuencia de sugerencias significa seleccionar cada sugerencia para producir la mayor ganancia de información esperada dada el conocimiento actual. En lugar de seguir patrones, este enfoque trata cada turno como un problema de optimización independiente.",
          de: "Vorschlagssequenz-Entropiemaximierung bedeutet, jeden Vorschlag auszuwählen, um den höchsten erwarteten Informationsgewinn zu erzielen. Anstatt Mustern zu folgen, behandelt dieser Ansatz jeden Zug als unabhängiges Optimierungsproblem.",
          nl: "Suggestiesequentie-entropiemaximalisatie betekent elke suggestie selecteren om de hoogste verwachte informatiewinst te produceren gegeven huidige kennis. In plaats van patronen te volgen, behandelt deze aanpak elke beurt als een onafhankelijk optimalisatieprobleem."
        }
      },
      {
        question: {
          en: "What is 'multi-agent game theory positioning' in Cluedo?",
          es: "¿Qué es el 'posicionamiento de teoría de juegos multi-agente' en Cluedo?",
          de: "Was ist 'Mehr-Agenten-Spieltheorie-Positionierung' in Cluedo?",
          nl: "Wat is 'multi-agent speltheorie-positionering' in Cluedo?"
        },
        options: [
          {
            en: "Strategically managing your relative knowledge advantage across all opponents simultaneously",
            es: "Gestionar estratégicamente tu ventaja de conocimiento relativo entre todos los oponentes simultáneamente",
            de: "Strategisches Verwalten Ihres relativen Wissensvorteils über alle Gegner gleichzeitig",
            nl: "Strategisch beheren van je relatieve kennisvoordeel over alle tegenstanders tegelijkertijd"
          },
          {
            en: "Playing against multiple opponents",
            es: "Jugar contra múltiples oponentes",
            de: "Gegen mehrere Gegner spielen",
            nl: "Tegen meerdere tegenstanders spelen"
          },
          {
            en: "Sitting in the best position",
            es: "Sentarse en la mejor posición",
            de: "In der besten Position sitzen",
            nl: "Op de beste positie zitten"
          },
          {
            en: "Cooperating with other players",
            es: "Cooperar con otros jugadores",
            de: "Mit anderen Spielern kooperieren",
            nl: "Samenwerken met andere spelers"
          }
        ],
        correct: 0,
        explanation: {
          en: "Multi-agent game theory positioning involves recognizing that in a 3+ player game, your strategy must account for the competitive dynamics between all opponents, not just your own progress. This includes manipulating information flow to keep opponents balanced, exploiting the leader, and positioning yourself to win regardless of which opponent might solve first.",
          es: "El posicionamiento de teoría de juegos multi-agente implica reconocer que en un juego de 3+ jugadores, tu estrategia debe tener en cuenta la dinámica competitiva entre todos los oponentes. Esto incluye manipular el flujo de información para mantener a los oponentes equilibrados.",
          de: "Mehr-Agenten-Spieltheorie-Positionierung beinhaltet die Erkenntnis, dass in einem 3+ Spieler-Spiel Ihre Strategie die Wettbewerbsdynamik zwischen allen Gegnern berücksichtigen muss. Dies umfasst die Manipulation des Informationsflusses, um Gegner im Gleichgewicht zu halten.",
          nl: "Multi-agent speltheorie-positionering houdt in dat je erkent dat in een spel met 3+ spelers je strategie rekening moet houden met de competitieve dynamiek tussen alle tegenstanders. Dit omvat het manipuleren van informatiestroom om tegenstanders in balans te houden."
        }
      },
      {
        question: {
          en: "What is 'probabilistic accusation thresholding' in competitive play?",
          es: "¿Qué es el 'umbral de acusación probabilística' en juego competitivo?",
          de: "Was ist 'probabilistische Anschuldigungsschwelle' im kompetitiven Spiel?",
          nl: "Wat is 'probabilistische beschuldigingsdrempeling' in competitief spel?"
        },
        options: [
          {
            en: "Setting dynamic confidence levels for accusations based on opponent progress and remaining turns",
            es: "Establecer niveles de confianza dinámicos para acusaciones basados en el progreso del oponente y turnos restantes",
            de: "Dynamische Vertrauensniveaus für Anschuldigungen festlegen basierend auf Gegnerfortschritt und verbleibenden Zügen",
            nl: "Dynamische vertrouwensniveaus instellen voor beschuldigingen op basis van tegenstandervooruitgang en resterende beurten"
          },
          {
            en: "Always waiting for 100% certainty",
            es: "Siempre esperar certeza del 100%",
            de: "Immer auf 100% Sicherheit warten",
            nl: "Altijd wachten op 100% zekerheid"
          },
          {
            en: "Guessing when probability is 50%",
            es: "Adivinar cuando la probabilidad es del 50%",
            de: "Raten, wenn die Wahrscheinlichkeit 50% ist",
            nl: "Raden wanneer waarschijnlijkheid 50% is"
          },
          {
            en: "Using a fixed threshold for all games",
            es: "Usar un umbral fijo para todos los juegos",
            de: "Eine feste Schwelle für alle Spiele verwenden",
            nl: "Een vaste drempel gebruiken voor alle spellen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Probabilistic accusation thresholding involves dynamically adjusting your required confidence level before accusing based on game state. If opponents appear close to solving, you may accuse at 85% confidence. If you have a substantial lead, you might wait for 95%+. The threshold shifts based on risk analysis.",
          es: "El umbral de acusación probabilística implica ajustar dinámicamente tu nivel de confianza requerido antes de acusar basándose en el estado del juego. Si los oponentes parecen cerca de resolver, puedes acusar con un 85% de confianza. Si tienes una ventaja sustancial, podrías esperar 95%+.",
          de: "Probabilistische Anschuldigungsschwelle beinhaltet dynamisches Anpassen Ihres erforderlichen Vertrauensniveaus vor der Anschuldigung basierend auf dem Spielstand. Wenn Gegner nah am Lösen erscheinen, können Sie bei 85% Vertrauen anschuldigen. Bei wesentlichem Vorsprung warten Sie möglicherweise auf 95%+.",
          nl: "Probabilistische beschuldigingsdrempeling houdt in dat je dynamisch je vereiste vertrouwensniveau aanpast voordat je beschuldigt op basis van spelstatus. Als tegenstanders dichtbij oplossen lijken, kun je beschuldigen bij 85% vertrouwen. Bij substantiële voorsprong wacht je mogelijk op 95%+."
        }
      },
      {
        question: {
          en: "What is 'disproof pattern analysis' in advanced Cluedo?",
          es: "¿Qué es el 'análisis de patrón de refutación' en Cluedo avanzado?",
          de: "Was ist 'Widerlegungsmusteranalyse' im fortgeschrittenen Cluedo?",
          nl: "Wat is 'weerleggingspatroonanalyse' in geavanceerd Cluedo?"
        },
        options: [
          {
            en: "Analyzing which cards opponents use to disprove suggestions to deduce their hand composition",
            es: "Analizar qué cartas usan los oponentes para refutar sugerencias para deducir la composición de su mano",
            de: "Analysieren, welche Karten Gegner verwenden, um Vorschläge zu widerlegen, um ihre Handzusammensetzung zu deduzieren",
            nl: "Analyseren welke kaarten tegenstanders gebruiken om suggesties te weerleggen om hun handsamenstelling te deduceren"
          },
          {
            en: "Counting how many times suggestions are disproved",
            es: "Contar cuántas veces se refutan las sugerencias",
            de: "Zählen, wie oft Vorschläge widerlegt werden",
            nl: "Tellen hoe vaak suggesties worden weerlegd"
          },
          {
            en: "Looking for patterns in room choices",
            es: "Buscar patrones en las elecciones de habitaciones",
            de: "Nach Mustern in Raumwahlen suchen",
            nl: "Zoeken naar patronen in kamerkeuzes"
          },
          {
            en: "Tracking failed accusations",
            es: "Rastrear acusaciones fallidas",
            de: "Gescheiterte Anschuldigungen verfolgen",
            nl: "Mislukte beschuldigingen bijhouden"
          }
        ],
        correct: 0,
        explanation: {
          en: "Disproof pattern analysis involves carefully observing which specific cards opponents reveal when disproving suggestions. By tracking patterns—such as an opponent consistently showing the same card when multiple cards could disprove, or varying their disproof cards strategically—you can make inferences about their complete hand and their strategic sophistication.",
          es: "El análisis de patrón de refutación implica observar cuidadosamente qué cartas específicas revelan los oponentes al refutar sugerencias. Al rastrear patrones, como un oponente que muestra consistentemente la misma carta cuando múltiples cartas podrían refutar, puedes hacer inferencias sobre su mano completa.",
          de: "Widerlegungsmusteranalyse beinhaltet sorgfältiges Beobachten, welche spezifischen Karten Gegner beim Widerlegen von Vorschlägen zeigen. Durch Verfolgung von Mustern—wie ein Gegner, der konsistent dieselbe Karte zeigt, wenn mehrere Karten widerlegen könnten—können Sie Rückschlüsse auf ihre vollständige Hand ziehen.",
          nl: "Weerleggingspatroonanalyse houdt in dat je zorgvuldig observeert welke specifieke kaarten tegenstanders onthullen bij het weerleggen van suggesties. Door patronen bij te houden—zoals een tegenstander die consistent dezelfde kaart toont wanneer meerdere kaarten zouden kunnen weerleggen—kun je inferenties maken over hun complete hand."
        }
      },
      {
        question: {
          en: "What is 'information cascade prevention' in Cluedo?",
          es: "¿Qué es la 'prevención de cascada de información' en Cluedo?",
          de: "Was ist 'Informationskaskaden-Prävention' in Cluedo?",
          nl: "Wat is 'informatiecascade-preventie' in Cluedo?"
        },
        options: [
          {
            en: "Controlling your card revelations to prevent opponents from making rapid sequential deductions",
            es: "Controlar tus revelaciones de cartas para evitar que los oponentes hagan deducciones secuenciales rápidas",
            de: "Kontrolle Ihrer Kartenoffenbarungen, um zu verhindern, dass Gegner schnelle sequentielle Deduktionen machen",
            nl: "Controleren van je kaartonthullingen om te voorkomen dat tegenstanders snelle sequentiële deducties maken"
          },
          {
            en: "Revealing cards quickly",
            es: "Revelar cartas rápidamente",
            de: "Karten schnell offenbaren",
            nl: "Kaarten snel onthullen"
          },
          {
            en: "Sharing information with all players",
            es: "Compartir información con todos los jugadores",
            de: "Informationen mit allen Spielern teilen",
            nl: "Informatie delen met alle spelers"
          },
          {
            en: "Making obvious suggestions",
            es: "Hacer sugerencias obvias",
            de: "Offensichtliche Vorschläge machen",
            nl: "Voor de hand liggende suggesties doen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Information cascade prevention involves strategically managing which cards you reveal and when, to prevent opponents from achieving breakthrough moments where one piece of information triggers a cascade of deductions. By carefully choosing which card to show among multiple options, you control the rate at which opponents solve.",
          es: "La prevención de cascada de información implica gestionar estratégicamente qué cartas revelas y cuándo, para evitar que los oponentes logren momentos de avance donde una pieza de información desencadena una cascada de deducciones. Al elegir cuidadosamente qué carta mostrar, controlas la velocidad.",
          de: "Informationskaskaden-Prävention beinhaltet strategisches Verwalten, welche Karten Sie wann offenbaren, um zu verhindern, dass Gegner Durchbruchsmomente erreichen, wo ein Informationsstück eine Kaskade von Deduktionen auslöst. Durch sorgfältiges Wählen der zu zeigenden Karte kontrollieren Sie die Lösungsgeschwindigkeit.",
          nl: "Informatiecascade-preventie houdt in dat je strategisch beheert welke kaarten je wanneer onthult, om te voorkomen dat tegenstanders doorbraakmomenten bereiken waar één stuk informatie een cascade van deducties activeert. Door zorgvuldig te kiezen welke kaart te tonen, controleer je de oplossnelheid."
        }
      },
      {
        question: {
          en: "What is 'solution space convergence analysis' in master Cluedo?",
          es: "¿Qué es el 'análisis de convergencia del espacio de solución' en Cluedo maestro?",
          de: "Was ist 'Lösungsraum-Konvergenzanalyse' im Meister-Cluedo?",
          nl: "Wat is 'oplossingsruimte-convergentieanalyse' in meester-Cluedo?"
        },
        options: [
          {
            en: "Tracking the rate at which possible solutions are eliminated to predict when you'll solve",
            es: "Rastrear la tasa a la que se eliminan posibles soluciones para predecir cuándo resolverás",
            de: "Verfolgung der Rate, mit der mögliche Lösungen eliminiert werden, um vorherzusagen, wann Sie lösen werden",
            nl: "Bijhouden van de snelheid waarmee mogelijke oplossingen worden geëlimineerd om te voorspellen wanneer je zult oplossen"
          },
          {
            en: "Finding the fastest route to rooms",
            es: "Encontrar la ruta más rápida a las habitaciones",
            de: "Den schnellsten Weg zu Räumen finden",
            nl: "De snelste route naar kamers vinden"
          },
          {
            en: "Counting remaining cards",
            es: "Contar cartas restantes",
            de: "Verbleibende Karten zählen",
            nl: "Resterende kaarten tellen"
          },
          {
            en: "Memorizing all possibilities",
            es: "Memorizar todas las posibilidades",
            de: "Alle Möglichkeiten auswendig lernen",
            nl: "Alle mogelijkheden onthouden"
          }
        ],
        correct: 0,
        explanation: {
          en: "Solution space convergence analysis involves mathematically tracking how rapidly the set of possible solutions is shrinking. By analyzing the rate of convergence—how many possibilities each piece of information eliminates—master players can predict how many more turns they need and whether they're on pace to win.",
          es: "El análisis de convergencia del espacio de solución implica rastrear matemáticamente qué tan rápido se está reduciendo el conjunto de soluciones posibles. Al analizar la tasa de convergencia, los jugadores maestros pueden predecir cuántos turnos más necesitan y si van a ritmo de ganar.",
          de: "Lösungsraum-Konvergenzanalyse beinhaltet mathematisches Verfolgen, wie schnell die Menge möglicher Lösungen schrumpft. Durch Analyse der Konvergenzrate können Meisterspieler vorhersagen, wie viele weitere Züge sie benötigen und ob sie auf Kurs zum Sieg sind.",
          nl: "Oplossingsruimte-convergentieanalyse houdt in dat je wiskundig bijhoudt hoe snel de verzameling mogelijke oplossingen krimpt. Door de convergentiesnelheid te analyseren, kunnen meesterspelers voorspellen hoeveel beurten ze nog nodig hebben en of ze op schema liggen om te winnen."
        }
      },
      {
        question: {
          en: "What is 'strategic suggestion timing variance' in Cluedo?",
          es: "¿Qué es la 'varianza de temporización estratégica de sugerencias' en Cluedo?",
          de: "Was ist 'strategische Vorschlagszeitpunkt-Varianz' in Cluedo?",
          nl: "Wat is 'strategische suggestietijdvariatie' in Cluedo?"
        },
        options: [
          {
            en: "Varying the pace of information-gathering based on opponents' progress to maintain competitive advantage",
            es: "Variar el ritmo de recopilación de información basándose en el progreso de los oponentes para mantener ventaja competitiva",
            de: "Variieren des Tempos der Informationsbeschaffung basierend auf dem Fortschritt der Gegner zur Aufrechterhaltung des Wettbewerbsvorteils",
            nl: "Variëren van het tempo van informatieverzameling op basis van vooruitgang van tegenstanders om competitief voordeel te behouden"
          },
          {
            en: "Taking random amounts of time per turn",
            es: "Tomar cantidades aleatorias de tiempo por turno",
            de: "Zufällige Zeitmengen pro Zug nehmen",
            nl: "Willekeurige hoeveelheden tijd per beurt nemen"
          },
          {
            en: "Always suggesting quickly",
            es: "Siempre sugerir rápidamente",
            de: "Immer schnell vorschlagen",
            nl: "Altijd snel voorstellen"
          },
          {
            en: "Skipping turns strategically",
            es: "Saltar turnos estratégicamente",
            de: "Züge strategisch überspringen",
            nl: "Beurten strategisch overslaan"
          }
        ],
        correct: 0,
        explanation: {
          en: "Strategic suggestion timing variance means deliberately varying how aggressively you pursue information based on the competitive situation. If ahead, you might slow down to minimize information leakage. If behind, you accelerate with high-risk, high-information suggestions. This dynamic pacing optimizes win probability across different game states.",
          es: "La varianza de temporización estratégica de sugerencias significa variar deliberadamente qué tan agresivamente persigues información según la situación competitiva. Si vas adelante, podrías frenar para minimizar la fuga de información. Si vas atrás, aceleras con sugerencias de alto riesgo y alta información.",
          de: "Strategische Vorschlagszeitpunkt-Varianz bedeutet bewusstes Variieren, wie aggressiv Sie Informationen verfolgen, basierend auf der Wettbewerbssituation. Wenn Sie führen, verlangsamen Sie möglicherweise, um Informationslecks zu minimieren. Wenn Sie zurückliegen, beschleunigen Sie mit hochriskanten, hochinformativen Vorschlägen.",
          nl: "Strategische suggestietijdvariatie betekent bewust variëren hoe agressief je informatie nastreeft op basis van de competitieve situatie. Als je voor ligt, kun je vertragen om informatielek te minimaliseren. Als je achterligt, versnel je met hoog-risico, hoog-informatie suggesties."
        }
      },
      {
        question: {
          en: "What is 'card distribution probability mapping' in expert Cluedo?",
          es: "¿Qué es el 'mapeo de probabilidad de distribución de cartas' en Cluedo experto?",
          de: "Was ist 'Kartenverteilungs-Wahrscheinlichkeitskartierung' im Experten-Cluedo?",
          nl: "Wat is 'kaartverdelingstaarschijnlijkheidsmapping' in expert-Cluedo?"
        },
        options: [
          {
            en: "Creating probability distributions for each card's location across all players and the envelope",
            es: "Crear distribuciones de probabilidad para la ubicación de cada carta entre todos los jugadores y el sobre",
            de: "Erstellen von Wahrscheinlichkeitsverteilungen für die Position jeder Karte über alle Spieler und den Umschlag",
            nl: "Creëren van waarschijnlijkheidsverdelingen voor de locatie van elke kaart over alle spelers en de envelop"
          },
          {
            en: "Counting cards in each category",
            es: "Contar cartas en cada categoría",
            de: "Karten in jeder Kategorie zählen",
            nl: "Kaarten in elke categorie tellen"
          },
          {
            en: "Guessing card locations",
            es: "Adivinar ubicaciones de cartas",
            de: "Kartenpositionen raten",
            nl: "Kaartlocaties raden"
          },
          {
            en: "Assuming equal distribution",
            es: "Asumir distribución igual",
            de: "Gleichverteilung annehmen",
            nl: "Gelijke verdeling aannemen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Card distribution probability mapping involves maintaining a complete probabilistic model of where each card is likely located. This goes beyond binary known/unknown tracking to assign percentage probabilities to each card being in each player's hand or the envelope, updating these probabilities with Bayesian inference as new information emerges.",
          es: "El mapeo de probabilidad de distribución de cartas implica mantener un modelo probabilístico completo de dónde es probable que esté ubicada cada carta. Esto va más allá del seguimiento binario conocido/desconocido para asignar probabilidades porcentuales a cada carta que está en la mano de cada jugador.",
          de: "Kartenverteilungs-Wahrscheinlichkeitskartierung beinhaltet die Aufrechterhaltung eines vollständigen probabilistischen Modells, wo sich jede Karte wahrscheinlich befindet. Dies geht über binäres bekannt/unbekannt-Tracking hinaus, um prozentuale Wahrscheinlichkeiten zuzuweisen.",
          nl: "Kaartverdelingstaarschijnlijkheidsmapping houdt in dat je een compleet probabilistisch model bijhoudt van waar elke kaart waarschijnlijk zich bevindt. Dit gaat verder dan binair bekend/onbekend bijhouden om percentagewaarschijnlijkheden toe te wijzen aan elke kaart in elke spelershand."
        }
      },
      {
        question: {
          en: "What is 'endgame precision maximization' in Cluedo mastery?",
          es: "¿Qué es la 'maximización de precisión en el final del juego' en maestría de Cluedo?",
          de: "Was ist 'Endspiel-Präzisionsmaximierung' in Cluedo-Meisterschaft?",
          nl: "Wat is 'eindspel-precisie-maximalisatie' in Cluedo-meesterschap?"
        },
        options: [
          {
            en: "Shifting from broad exploration to narrow confirmation as the solution converges",
            es: "Cambiar de exploración amplia a confirmación estrecha a medida que la solución converge",
            de: "Wechsel von breiter Erkundung zu enger Bestätigung, wenn sich die Lösung konvergiert",
            nl: "Verschuiven van brede verkenning naar nauwe bevestiging naarmate de oplossing convergeert"
          },
          {
            en: "Making wild guesses at the end",
            es: "Hacer conjeturas salvajes al final",
            de: "Am Ende wilde Vermutungen machen",
            nl: "Wilde gissingen doen aan het einde"
          },
          {
            en: "Accusing immediately when possible",
            es: "Acusar inmediatamente cuando sea posible",
            de: "Sofort anschuldigen, wenn möglich",
            nl: "Onmiddellijk beschuldigen wanneer mogelijk"
          },
          {
            en: "Continuing broad exploration throughout",
            es: "Continuar la exploración amplia en todo momento",
            de: "Weiterhin breite Erkundung durchführen",
            nl: "Brede verkenning blijven voortzetten"
          }
        ],
        correct: 0,
        explanation: {
          en: "Endgame precision maximization involves recognizing when to shift strategy from exploratory information-gathering to confirmatory precision. As your solution space narrows to a small set of possibilities, your suggestions should shift from broad exploratory moves to targeted confirmation of specific hypotheses, ensuring 100% certainty before accusation.",
          es: "La maximización de precisión en el final del juego implica reconocer cuándo cambiar la estrategia de recopilación de información exploratoria a precisión confirmatoria. A medida que tu espacio de solución se reduce a un pequeño conjunto de posibilidades, tus sugerencias deberían cambiar de movimientos exploratorios amplios a confirmación dirigida.",
          de: "Endspiel-Präzisionsmaximierung beinhaltet die Erkennung, wann die Strategie von explorativer Informationsbeschaffung zu bestätigender Präzision gewechselt werden sollte. Wenn sich Ihr Lösungsraum auf eine kleine Menge von Möglichkeiten verengt, sollten Ihre Vorschläge von breiten explorativen Zügen zu gezielter Bestätigung wechseln.",
          nl: "Eindspel-precisie-maximalisatie houdt in dat je erkent wanneer je strategie moet verschuiven van verkennende informatieverzameling naar bevestigende precisie. Naarmate je oplossingsruimte verkleint tot een kleine set mogelijkheden, moeten je suggesties verschuiven van brede verkennende zetten naar gerichte bevestiging."
        }
      },
      {
        question: {
          en: "What is 'meta-cognitive deduction tracking' in championship Cluedo?",
          es: "¿Qué es el 'seguimiento de deducción meta-cognitiva' en Cluedo de campeonato?",
          de: "Was ist 'meta-kognitives Deduktionstracking' im Meisterschafts-Cluedo?",
          nl: "Wat is 'meta-cognitieve deductie-tracking' in kampioenschap-Cluedo?"
        },
        options: [
          {
            en: "Tracking not just what you know, but what you know about what opponents know about what you know",
            es: "Rastrear no solo lo que sabes, sino lo que sabes sobre lo que los oponentes saben sobre lo que sabes",
            de: "Verfolgen nicht nur, was Sie wissen, sondern was Sie über das wissen, was Gegner über Ihr Wissen wissen",
            nl: "Bijhouden niet alleen wat je weet, maar wat je weet over wat tegenstanders weten over wat je weet"
          },
          {
            en: "Thinking about the game rules",
            es: "Pensar sobre las reglas del juego",
            de: "Über die Spielregeln nachdenken",
            nl: "Nadenken over de spelregels"
          },
          {
            en: "Analyzing your own mistakes",
            es: "Analizar tus propios errores",
            de: "Eigene Fehler analysieren",
            nl: "Je eigen fouten analyseren"
          },
          {
            en: "Remembering previous games",
            es: "Recordar juegos anteriores",
            de: "Sich an frühere Spiele erinnern",
            nl: "Eerdere spellen onthouden"
          }
        ],
        correct: 0,
        explanation: {
          en: "Meta-cognitive deduction tracking involves maintaining recursive models of knowledge states: you track what you know, what each opponent knows, what each opponent thinks you know, and what each opponent thinks other opponents know. This multi-level modeling allows for sophisticated information warfare and strategic card revelation.",
          es: "El seguimiento de deducción meta-cognitiva implica mantener modelos recursivos de estados de conocimiento: rastrear lo que sabes, lo que cada oponente sabe, lo que cada oponente piensa que sabes, y lo que cada oponente piensa que otros oponentes saben. Este modelado multinivel permite guerra de información sofisticada.",
          de: "Meta-kognitives Deduktionstracking beinhaltet die Aufrechterhaltung rekursiver Modelle von Wissenszuständen: Sie verfolgen, was Sie wissen, was jeder Gegner weiß, was jeder Gegner denkt, dass Sie wissen, und was jeder Gegner denkt, dass andere Gegner wissen. Diese Mehrebenen-Modellierung ermöglicht anspruchsvolle Informationskriegsführung.",
          nl: "Meta-cognitieve deductie-tracking houdt in dat je recursieve modellen van kennisstaten bijhoudt: je houdt bij wat je weet, wat elke tegenstander weet, wat elke tegenstander denkt dat je weet, en wat elke tegenstander denkt dat andere tegenstanders weten. Deze meerlagige modellering maakt geavanceerde informatieoorlogsvoering mogelijk."
        }
      },
      {
        question: {
          en: "What is 'information compression efficiency' in master Cluedo play?",
          es: "¿Qué es la 'eficiencia de compresión de información' en juego maestro de Cluedo?",
          de: "Was ist 'Informationskompressionseffizienz' im Meister-Cluedo-Spiel?",
          nl: "Wat is 'informatiecompressie-efficiëntie' in meester-Cluedo-spel?"
        },
        options: [
          {
            en: "Extracting maximum deductive value from minimum card revelations",
            es: "Extraer el máximo valor deductivo de las mínimas revelaciones de cartas",
            de: "Maximalen deduktiven Wert aus minimalen Kartenoffenbarungen extrahieren",
            nl: "Maximale deductieve waarde halen uit minimale kaartonthullingen"
          },
          {
            en: "Writing shorter notes",
            es: "Escribir notas más cortas",
            de: "Kürzere Notizen schreiben",
            nl: "Kortere notities schrijven"
          },
          {
            en: "Memorizing fewer cards",
            es: "Memorizar menos cartas",
            de: "Weniger Karten auswendig lernen",
            nl: "Minder kaarten onthouden"
          },
          {
            en: "Making faster decisions",
            es: "Tomar decisiones más rápidas",
            de: "Schnellere Entscheidungen treffen",
            nl: "Snellere beslissingen nemen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Information compression efficiency measures how much deductive knowledge you gain per card revelation. Master players maximize this by making suggestions that force revelations which eliminate multiple possibilities simultaneously, using transitive deduction, and extracting implicit information from null responses and pass patterns.",
          es: "La eficiencia de compresión de información mide cuánto conocimiento deductivo obtienes por revelación de carta. Los jugadores maestros maximizan esto haciendo sugerencias que fuerzan revelaciones que eliminan múltiples posibilidades simultáneamente, usando deducción transitiva y extrayendo información implícita.",
          de: "Informationskompressionseffizienz misst, wie viel deduktives Wissen Sie pro Kartenoffenbarung gewinnen. Meisterspieler maximieren dies durch Vorschläge, die Offenbarungen erzwingen, die mehrere Möglichkeiten gleichzeitig eliminieren, unter Verwendung transitiver Deduktion und Extraktion impliziter Informationen.",
          nl: "Informatiecompressie-efficiëntie meet hoeveel deductieve kennis je krijgt per kaartonthulling. Meesterspelers maximaliseren dit door suggesties te doen die onthullingen forceren die meerdere mogelijkheden tegelijkertijd elimineren, door transitieve deductie te gebruiken en impliciete informatie te extraheren."
        }
      },
      {
        question: {
          en: "What is 'dynamic hypothesis pruning' in competitive Cluedo theory?",
          es: "¿Qué es la 'poda de hipótesis dinámica' en teoría competitiva de Cluedo?",
          de: "Was ist 'dynamisches Hypothesen-Pruning' in der kompetitiven Cluedo-Theorie?",
          nl: "Wat is 'dynamische hypothese-pruning' in competitieve Cluedo-theorie?"
        },
        options: [
          {
            en: "Continuously eliminating solution hypotheses based on logical impossibility as new data arrives",
            es: "Eliminar continuamente hipótesis de solución basándose en imposibilidad lógica a medida que llegan nuevos datos",
            de: "Kontinuierliches Eliminieren von Lösungshypothesen basierend auf logischer Unmöglichkeit, wenn neue Daten ankommen",
            nl: "Continu elimineren van oplossingshypothesen op basis van logische onmogelijkheid naarmate nieuwe gegevens aankomen"
          },
          {
            en: "Removing cards from the game",
            es: "Eliminar cartas del juego",
            de: "Karten aus dem Spiel entfernen",
            nl: "Kaarten uit het spel verwijderen"
          },
          {
            en: "Simplifying your note-taking",
            es: "Simplificar tu toma de notas",
            de: "Vereinfachen Ihrer Notizen",
            nl: "Vereenvoudigen van je aantekeningen"
          },
          {
            en: "Forgetting old information",
            es: "Olvidar información antigua",
            de: "Alte Informationen vergessen",
            nl: "Oude informatie vergeten"
          }
        ],
        correct: 0,
        explanation: {
          en: "Dynamic hypothesis pruning involves actively maintaining and updating a set of possible solution hypotheses, eliminating entire branches of possibilities as soon as they become logically impossible. Rather than just tracking individual cards, this approach treats the solution space as a decision tree that gets pruned with each new piece of information.",
          es: "La poda de hipótesis dinámica implica mantener y actualizar activamente un conjunto de posibles hipótesis de solución, eliminando ramas enteras de posibilidades tan pronto como se vuelven lógicamente imposibles. En lugar de solo rastrear cartas individuales, este enfoque trata el espacio de solución como un árbol de decisión.",
          de: "Dynamisches Hypothesen-Pruning beinhaltet aktives Aufrechterhalten und Aktualisieren eines Satzes möglicher Lösungshypothesen, wobei ganze Zweige von Möglichkeiten eliminiert werden, sobald sie logisch unmöglich werden. Anstatt nur einzelne Karten zu verfolgen, behandelt dieser Ansatz den Lösungsraum als Entscheidungsbaum.",
          nl: "Dynamische hypothese-pruning houdt in dat je actief een set mogelijke oplossingshypothesen onderhoudt en bijwerkt, waarbij hele takken van mogelijkheden worden geëlimineerd zodra ze logisch onmogelijk worden. In plaats van alleen individuele kaarten bij te houden, behandelt deze aanpak de oplossingsruimte als een beslissingsboom."
        }
      }
]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level6;
  } else if (typeof window !== 'undefined') {
    window.level6 = level6;
  }
})();
