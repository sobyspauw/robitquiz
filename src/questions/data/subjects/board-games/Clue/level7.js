// Quiz Template - Level 7: Bord spelletjes - Clue
(function() {
  const level7 = {
    name: {
      en: "Cluedo - Legend",
      es: "Cluedo - Leyenda",
      de: "Cluedo - Legende",
      nl: "Cluedo - Legende"
    },
    questions: [
      {
        question: {
          en: "In tournament-level Cluedo, what is 'Nash equilibrium card revelation'?",
          es: "En Cluedo de nivel de torneo, ¿qué es la 'revelación de cartas de equilibrio de Nash'?",
          de: "Was ist 'Nash-Gleichgewichts-Kartenoffenbarung' im Turnier-Cluedo?",
          nl: "Wat is 'Nash-evenwicht kaartopenbaring' in toernooi-Cluedo?"
        },
        options: [
          {
            en: "The optimal card-showing strategy where no player can improve by unilaterally changing their revelation pattern",
            es: "La estrategia óptima de mostrar cartas donde ningún jugador puede mejorar cambiando unilateralmente su patrón de revelación",
            de: "Die optimale Kartenzeigestrategie, bei der kein Spieler durch einseitige Änderung seines Offenbarungsmusters verbessern kann",
            nl: "De optimale kaartvertoningstrategie waarbij geen speler kan verbeteren door eenzijdig hun openbaringspatroon te wijzigen"
          },
          {
            en: "Showing cards in alphabetical order",
            es: "Mostrar cartas en orden alfabético",
            de: "Karten alphabetisch zeigen",
            nl: "Kaarten in alfabetische volgorde tonen"
          },
          {
            en: "Always showing the same card type",
            es: "Siempre mostrar el mismo tipo de carta",
            de: "Immer denselben Kartentyp zeigen",
            nl: "Altijd hetzelfde kaarttype tonen"
          },
          {
            en: "Never revealing suspect cards",
            es: "Nunca revelar cartas de sospechoso",
            de: "Nie Verdächtigenkarten offenbaren",
            nl: "Nooit verdachtenkaarten onthullen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Nash equilibrium card revelation represents the game-theoretic optimal strategy for choosing which card to show when you have multiple options. At equilibrium, your revelation pattern is unpredictable enough that opponents cannot exploit it, while still serving your deductive goals. This involves mixed strategies and randomization to prevent pattern exploitation.",
          es: "La revelación de cartas de equilibrio de Nash representa la estrategia óptima de teoría de juegos para elegir qué carta mostrar cuando tienes múltiples opciones. En equilibrio, tu patrón de revelación es lo suficientemente impredecible como para que los oponentes no puedan explotarlo.",
          de: "Nash-Gleichgewichts-Kartenoffenbarung repräsentiert die spieltheoretisch optimale Strategie zur Auswahl, welche Karte gezeigt wird, wenn Sie mehrere Optionen haben. Im Gleichgewicht ist Ihr Offenbarungsmuster unvorhersehbar genug, dass Gegner es nicht ausnutzen können.",
          nl: "Nash-evenwicht kaartopenbaring vertegenwoordigt de speltheoretisch optimale strategie voor het kiezen welke kaart te tonen wanneer je meerdere opties hebt. In evenwicht is je openbaringspatroon onvoorspelbaar genoeg dat tegenstanders het niet kunnen uitbuiten."
        }
      },
      {
        question: {
          en: "What is 'information-theoretic minimax' in championship Cluedo?",
          es: "¿Qué es el 'minimax teórico-informacional' en Cluedo de campeonato?",
          de: "Was ist 'informationstheoretisches Minimax' im Meisterschafts-Cluedo?",
          nl: "Wat is 'informatietheorетisch minimax' in kampioenschap-Cluedo?"
        },
        options: [
          {
            en: "Minimizing the maximum information opponents can gain from your suggestions while maximizing your own gain",
            es: "Minimizar la máxima información que los oponentes pueden obtener de tus sugerencias mientras maximizas tu propia ganancia",
            de: "Minimierung der maximalen Information, die Gegner aus Ihren Vorschlägen gewinnen können, während Sie Ihren eigenen Gewinn maximieren",
            nl: "Minimaliseren van de maximale informatie die tegenstanders kunnen krijgen uit je suggesties terwijl je je eigen winst maximaliseert"
          },
          {
            en: "Making the fewest suggestions possible",
            es: "Hacer la menor cantidad de sugerencias posible",
            de: "Die wenigsten Vorschläge machen",
            nl: "De minste suggesties doen"
          },
          {
            en: "Maximizing your score",
            es: "Maximizar tu puntuación",
            de: "Ihre Punktzahl maximieren",
            nl: "Je score maximaliseren"
          },
          {
            en: "Getting to rooms quickly",
            es: "Llegar a las habitaciones rápidamente",
            de: "Schnell zu Räumen gelangen",
            nl: "Snel naar kamers komen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Information-theoretic minimax involves constructing suggestions that maximize your information gain while minimizing the worst-case information leakage to opponents. This requires calculating expected information flows in both directions and optimizing the differential. Elite players balance aggressive information gathering with defensive information denial.",
          es: "El minimax teórico-informacional implica construir sugerencias que maximizan tu ganancia de información mientras minimizan la fuga de información en el peor caso hacia los oponentes. Esto requiere calcular flujos de información esperados en ambas direcciones y optimizar el diferencial.",
          de: "Informationstheoretisches Minimax beinhaltet das Konstruieren von Vorschlägen, die Ihren Informationsgewinn maximieren, während die Worst-Case-Informationsleckage an Gegner minimiert wird. Dies erfordert die Berechnung erwarteter Informationsflüsse in beide Richtungen.",
          nl: "Informatietheorетisch minimax houdt in dat je suggesties construeert die je informatiewinst maximaliseren terwijl je de worst-case informatielek naar tegenstanders minimaliseert. Dit vereist het berekenen van verwachte informatiestromen in beide richtingen."
        }
      },
      {
        question: {
          en: "What is 'combinatorial explosion management' in expert Cluedo?",
          es: "¿Qué es la 'gestión de explosión combinatoria' en Cluedo experto?",
          de: "Was ist 'kombinatorische Explosionsverwaltung' im Experten-Cluedo?",
          nl: "Wat is 'combinatorisch explosie-beheer' in expert-Cluedo?"
        },
        options: [
          {
            en: "Efficiently tracking and pruning the exponentially growing space of possible card distributions",
            es: "Rastrear y podar eficientemente el espacio exponencialmente creciente de distribuciones de cartas posibles",
            de: "Effizientes Verfolgen und Beschneiden des exponentiell wachsenden Raums möglicher Kartenverteilungen",
            nl: "Efficiënt bijhouden en snoeien van de exponentieel groeiende ruimte van mogelijke kaartverdelingen"
          },
          {
            en: "Making explosive accusations",
            es: "Hacer acusaciones explosivas",
            de: "Explosive Anschuldigungen machen",
            nl: "Explosieve beschuldigingen doen"
          },
          {
            en: "Counting all possible combinations",
            es: "Contar todas las combinaciones posibles",
            de: "Alle möglichen Kombinationen zählen",
            nl: "Alle mogelijke combinaties tellen"
          },
          {
            en: "Tracking only suspect cards",
            es: "Rastrear solo cartas de sospechoso",
            de: "Nur Verdächtigenkarten verfolgen",
            nl: "Alleen verdachtenkaarten bijhouden"
          }
        ],
        correct: 0,
        explanation: {
          en: "Combinatorial explosion management addresses the fact that with 21 cards and multiple players, billions of possible distributions exist. Expert players use constraint propagation, logical deduction, and probability bounds to aggressively prune impossible states, reducing the search space to a manageable subset while maintaining complete accuracy.",
          es: "La gestión de explosión combinatoria aborda el hecho de que con 21 cartas y múltiples jugadores, existen miles de millones de distribuciones posibles. Los jugadores expertos usan propagación de restricciones, deducción lógica y límites de probabilidad para podar agresivamente estados imposibles.",
          de: "Kombinatorische Explosionsverwaltung befasst sich damit, dass mit 21 Karten und mehreren Spielern Milliarden möglicher Verteilungen existieren. Expertenspieler verwenden Constraint-Propagation, logische Deduktion und Wahrscheinlichkeitsgrenzen, um unmögliche Zustände aggressiv zu beschneiden.",
          nl: "Combinatorisch explosie-beheer pakt aan dat met 21 kaarten en meerdere spelers miljarden mogelijke verdelingen bestaan. Expertspelers gebruiken constraint-propagatie, logische deductie en waarschijnlijkheidsgrenzen om onmogelijke toestanden agressief te snoeien."
        }
      },
      {
        question: {
          en: "What is 'recursive opponent modeling' at legendary level?",
          es: "¿Qué es el 'modelado recursivo de oponentes' a nivel legendario?",
          de: "Was ist 'rekursive Gegnermodellierung' auf legendärem Niveau?",
          nl: "Wat is 'recursieve tegenstandermodellering' op legendarisch niveau?"
        },
        options: [
          {
            en: "Modeling what opponents think you think they think you know, to arbitrary depth",
            es: "Modelar lo que los oponentes piensan que tú piensas que ellos piensan que sabes, a profundidad arbitraria",
            de: "Modellierung dessen, was Gegner denken, dass Sie denken, dass sie denken, dass Sie wissen, bis zu beliebiger Tiefe",
            nl: "Modelleren wat tegenstanders denken dat jij denkt dat zij denken dat je weet, tot willekeurige diepte"
          },
          {
            en: "Repeatedly asking opponents questions",
            es: "Preguntar repetidamente a los oponentes",
            de: "Gegner wiederholt fragen",
            nl: "Herhaaldelijk tegenstanders vragen stellen"
          },
          {
            en: "Memorizing opponent behavior",
            es: "Memorizar comportamiento del oponente",
            de: "Gegnerverhalten auswendig lernen",
            nl: "Tegenstandergedrag onthouden"
          },
          {
            en: "Copying opponent strategies",
            es: "Copiar estrategias de oponentes",
            de: "Gegnerstrategien kopieren",
            nl: "Tegenstanderstrategieën kopiëren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Recursive opponent modeling involves maintaining nested models of knowledge: 'I know X', 'They know I know X', 'I know they know I know X', and so on. At legendary level, players track 3-4 levels of recursion, enabling sophisticated psychological plays where you deliberately reveal information at one level to mislead opponents operating at another level.",
          es: "El modelado recursivo de oponentes implica mantener modelos anidados de conocimiento: 'Yo sé X', 'Ellos saben que yo sé X', 'Yo sé que ellos saben que yo sé X', y así sucesivamente. A nivel legendario, los jugadores rastrean 3-4 niveles de recursión.",
          de: "Rekursive Gegnermodellierung beinhaltet das Aufrechterhalten verschachtelter Wissensmodelle: 'Ich weiß X', 'Sie wissen, dass ich X weiß', 'Ich weiß, dass sie wissen, dass ich X weiß', und so weiter. Auf legendärem Niveau verfolgen Spieler 3-4 Rekursionsebenen.",
          nl: "Recursieve tegenstandermodellering houdt in dat je geneste modellen van kennis bijhoudt: 'Ik weet X', 'Zij weten dat ik X weet', 'Ik weet dat zij weten dat ik X weet', enzovoort. Op legendarisch niveau houden spelers 3-4 recursieniveaus bij."
        }
      },
      {
        question: {
          en: "What is 'temporal discounting optimization' in Cluedo mastery?",
          es: "¿Qué es la 'optimización de descuento temporal' en maestría de Cluedo?",
          de: "Was ist 'temporale Diskontierungsoptimierung' in Cluedo-Meisterschaft?",
          nl: "Wat is 'temporele disconteringsoptimalisatie' in Cluedo-meesterschap?"
        },
        options: [
          {
            en: "Calculating the declining value of future information vs immediate accusation based on opponent convergence rates",
            es: "Calcular el valor decreciente de la información futura vs acusación inmediata basándose en tasas de convergencia del oponente",
            de: "Berechnung des sinkenden Wertes zukünftiger Informationen vs. sofortige Anschuldigung basierend auf Gegnerkonvergenzraten",
            nl: "Berekenen van de afnemende waarde van toekomstige informatie vs onmiddellijke beschuldiging op basis van tegenstanderconvergentiesnelheden"
          },
          {
            en: "Giving discounts on cards shown",
            es: "Dar descuentos en cartas mostradas",
            de: "Rabatte auf gezeigte Karten geben",
            nl: "Kortingen geven op getoonde kaarten"
          },
          {
            en: "Reducing the time per turn",
            es: "Reducir el tiempo por turno",
            de: "Zeit pro Zug reduzieren",
            nl: "Tijd per beurt verminderen"
          },
          {
            en: "Valuing old information less",
            es: "Valorar menos la información antigua",
            de: "Alte Informationen weniger wertschätzen",
            nl: "Oude informatie minder waarderen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Temporal discounting optimization involves calculating the net present value of gathering more information versus accusing now. Each additional turn provides information but risks being preempted. Masters compute expected value curves that factor in: your convergence rate, opponents' apparent progress, turn order, and the probability that waiting provides decisive information versus just confirmatory data.",
          es: "La optimización de descuento temporal implica calcular el valor presente neto de recopilar más información versus acusar ahora. Cada turno adicional proporciona información pero arriesga ser prevenido. Los maestros calculan curvas de valor esperado que tienen en cuenta: tu tasa de convergencia, el progreso aparente de los oponentes.",
          de: "Temporale Diskontierungsoptimierung beinhaltet die Berechnung des Nettobarwerts der Beschaffung weiterer Informationen versus sofortiger Anschuldigung. Jeder zusätzliche Zug liefert Informationen, birgt aber das Risiko, vorzeitig beendet zu werden. Meister berechnen Erwartungswertkurven.",
          nl: "Temporele disconteringsoptimalisatie houdt in dat je de netto contante waarde berekent van het verzamelen van meer informatie versus nu beschuldigen. Elke extra beurt biedt informatie maar riskeert te worden voorkomen. Meesters berekenen verwachte waardecurves."
        }
      },
      {
        question: {
          en: "What is 'constraint satisfaction propagation' in tournament Cluedo?",
          es: "¿Qué es la 'propagación de satisfacción de restricciones' en Cluedo de torneo?",
          de: "Was ist 'Constraint-Satisfaction-Propagation' im Turnier-Cluedo?",
          nl: "Wat is 'constraint-voldoeningspropagatie' in toernooi-Cluedo?"
        },
        options: [
          {
            en: "Automatically deriving new deductions by propagating logical constraints through all known facts",
            es: "Derivar automáticamente nuevas deducciones propagando restricciones lógicas a través de todos los hechos conocidos",
            de: "Automatisches Ableiten neuer Deduktionen durch Propagierung logischer Einschränkungen durch alle bekannten Fakten",
            nl: "Automatisch nieuwe deducties afleiden door logische beperkingen door alle bekende feiten te propageren"
          },
          {
            en: "Being satisfied with current deductions",
            es: "Estar satisfecho con las deducciones actuales",
            de: "Mit aktuellen Deduktionen zufrieden sein",
            nl: "Tevreden zijn met huidige deducties"
          },
          {
            en: "Checking if constraints are met",
            es: "Verificar si se cumplen las restricciones",
            de: "Prüfen, ob Einschränkungen erfüllt sind",
            nl: "Controleren of beperkingen zijn voldaan"
          },
          {
            en: "Limiting the number of suggestions",
            es: "Limitar el número de sugerencias",
            de: "Anzahl der Vorschläge begrenzen",
            nl: "Aantal suggesties beperken"
          }
        ],
        correct: 0,
        explanation: {
          en: "Constraint satisfaction propagation treats Cluedo as a CSP where each piece of information creates constraints. When you learn 'Player A has no weapons', this propagates: weapons must be distributed among other players and envelope, which may force conclusions about suspects and rooms. Tournament players systematically propagate all constraints to extract maximal deductive value from each fact.",
          es: "La propagación de satisfacción de restricciones trata a Cluedo como un CSP donde cada pieza de información crea restricciones. Cuando aprendes 'Jugador A no tiene armas', esto se propaga: las armas deben distribuirse entre otros jugadores y el sobre, lo que puede forzar conclusiones.",
          de: "Constraint-Satisfaction-Propagation behandelt Cluedo als CSP, wobei jede Information Einschränkungen schafft. Wenn Sie lernen 'Spieler A hat keine Waffen', propagiert dies: Waffen müssen unter anderen Spielern und Umschlag verteilt sein, was Schlussfolgerungen erzwingen kann.",
          nl: "Constraint-voldoeningspropagatie behandelt Cluedo als een CSP waarbij elk stuk informatie beperkingen creëert. Wanneer je leert 'Speler A heeft geen wapens', propageert dit: wapens moeten verdeeld zijn onder andere spelers en envelop, wat conclusies kan forceren."
        }
      },
      {
        question: {
          en: "What is 'information entropy gradient descent' in Cluedo theory?",
          es: "¿Qué es el 'descenso de gradiente de entropía de información' en teoría de Cluedo?",
          de: "Was ist 'Informationsentropie-Gradientenabstieg' in der Cluedo-Theorie?",
          nl: "Wat is 'informatie-entropie gradiëntafdaling' in Cluedo-theorie?"
        },
        options: [
          {
            en: "Selecting each suggestion to move in the direction of steepest uncertainty reduction",
            es: "Seleccionar cada sugerencia para moverse en la dirección de la reducción de incertidumbre más pronunciada",
            de: "Jeder Vorschlag auswählen, um sich in Richtung steilster Unsicherheitsreduktion zu bewegen",
            nl: "Elke suggestie selecteren om in de richting van steilste onzekerheidsreductie te bewegen"
          },
          {
            en: "Making suggestions faster over time",
            es: "Hacer sugerencias más rápido con el tiempo",
            de: "Vorschläge im Laufe der Zeit schneller machen",
            nl: "Suggesties sneller doen in de loop van de tijd"
          },
          {
            en: "Gradually reducing uncertainty",
            es: "Reducir gradualmente la incertidumbre",
            de: "Unsicherheit allmählich reduzieren",
            nl: "Geleidelijk onzekerheid verminderen"
          },
          {
            en: "Following a predetermined path",
            es: "Seguir un camino predeterminado",
            de: "Einem vorbestimmten Pfad folgen",
            nl: "Een vooraf bepaald pad volgen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Information entropy gradient descent treats suggestion selection as an optimization problem in information space. At each turn, calculate the gradient of Shannon entropy across all possible suggestions, then select the suggestion that produces the steepest expected decrease in uncertainty. This greedy algorithm approximates optimal information gathering under certain assumptions.",
          es: "El descenso de gradiente de entropía de información trata la selección de sugerencias como un problema de optimización en el espacio de información. En cada turno, calcula el gradiente de entropía de Shannon en todas las sugerencias posibles, luego selecciona la sugerencia que produce la disminución esperada más pronunciada.",
          de: "Informationsentropie-Gradientenabstieg behandelt Vorschlagsauswahl als Optimierungsproblem im Informationsraum. Berechnen Sie bei jedem Zug den Gradienten der Shannon-Entropie über alle möglichen Vorschläge, wählen Sie dann den Vorschlag, der die steilste erwartete Unsicherheitsabnahme produziert.",
          nl: "Informatie-entropie gradiëntafdaling behandelt suggestieselectie als een optimalisatieprobleem in informatieruimte. Bereken bij elke beurt de gradiënt van Shannon-entropie over alle mogelijke suggesties, selecteer dan de suggestie die de steilste verwachte afname in onzekerheid produceert."
        }
      },
      {
        question: {
          en: "What is 'stochastic dominance analysis' in competitive Cluedo?",
          es: "¿Qué es el 'análisis de dominancia estocástica' en Cluedo competitivo?",
          de: "Was ist 'stochastische Dominanzanalyse' im kompetitiven Cluedo?",
          nl: "Wat is 'stochastische dominantie-analyse' in competitief Cluedo?"
        },
        options: [
          {
            en: "Comparing suggestion strategies by their complete probability distributions of outcomes, not just expected values",
            es: "Comparar estrategias de sugerencias por sus distribuciones de probabilidad completas de resultados, no solo valores esperados",
            de: "Vergleich von Vorschlagsstrategien durch ihre vollständigen Wahrscheinlichkeitsverteilungen von Ergebnissen, nicht nur Erwartungswerte",
            nl: "Vergelijken van suggestiestrategieën door hun complete waarschijnlijkheidsverdelingen van uitkomsten, niet alleen verwachte waarden"
          },
          {
            en: "Using random suggestions",
            es: "Usar sugerencias aleatorias",
            de: "Zufällige Vorschläge verwenden",
            nl: "Willekeurige suggesties gebruiken"
          },
          {
            en: "Dominating opponents verbally",
            es: "Dominar a los oponentes verbalmente",
            de: "Gegner verbal dominieren",
            nl: "Tegenstanders verbaal domineren"
          },
          {
            en: "Choosing the most likely solution",
            es: "Elegir la solución más probable",
            de: "Die wahrscheinlichste Lösung wählen",
            nl: "De meest waarschijnlijke oplossing kiezen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Stochastic dominance analysis recognizes that two suggestions might have the same expected information gain but wildly different risk profiles. One might guarantee moderate information (low variance), while another might provide huge information or none (high variance). Tournament players analyze the full distribution and select based on risk tolerance and game state, not just expected value.",
          es: "El análisis de dominancia estocástica reconoce que dos sugerencias pueden tener la misma ganancia de información esperada pero perfiles de riesgo muy diferentes. Una podría garantizar información moderada (baja varianza), mientras que otra podría proporcionar información enorme o ninguna (alta varianza).",
          de: "Stochastische Dominanzanalyse erkennt, dass zwei Vorschläge möglicherweise denselben erwarteten Informationsgewinn, aber völlig unterschiedliche Risikoprofile haben. Einer könnte moderate Informationen garantieren (niedrige Varianz), während ein anderer riesige Informationen oder keine bieten könnte (hohe Varianz).",
          nl: "Stochastische dominantie-analyse erkent dat twee suggesties mogelijk dezelfde verwachte informatiewinst hebben maar zeer verschillende risicoprofielen. Eén zou gematigde informatie kunnen garanderen (lage variantie), terwijl een andere enorme informatie of geen zou kunnen bieden (hoge variantie)."
        }
      },
      {
        question: {
          en: "What is 'computational complexity exploitation' in master Cluedo?",
          es: "¿Qué es la 'explotación de complejidad computacional' en Cluedo maestro?",
          de: "Was ist 'Rechenkomplexitätsausbeutung' im Meister-Cluedo?",
          nl: "Wat is 'computationele complexiteitsexploitatie' in meester-Cluedo?"
        },
        options: [
          {
            en: "Deliberately creating game states too complex for opponents to fully analyze in real-time",
            es: "Crear deliberadamente estados de juego demasiado complejos para que los oponentes los analicen completamente en tiempo real",
            de: "Absichtliches Schaffen von Spielzuständen, die zu komplex sind, damit Gegner sie in Echtzeit vollständig analysieren können",
            nl: "Opzettelijk speltoestanden creëren die te complex zijn voor tegenstanders om volledig in real-time te analyseren"
          },
          {
            en: "Using complex mathematical formulas",
            es: "Usar fórmulas matemáticas complejas",
            de: "Komplexe mathematische Formeln verwenden",
            nl: "Complexe wiskundige formules gebruiken"
          },
          {
            en: "Making calculations quickly",
            es: "Hacer cálculos rápidamente",
            de: "Berechnungen schnell machen",
            nl: "Berekeningen snel maken"
          },
          {
            en: "Confusing opponents with fast talk",
            es: "Confundir a los oponentes con charla rápida",
            de: "Gegner mit schnellem Reden verwirren",
            nl: "Tegenstanders verwarren met snel praten"
          }
        ],
        correct: 0,
        explanation: {
          en: "Computational complexity exploitation recognizes that while perfect information analysis might be theoretically possible, humans have limited processing power. Master players deliberately create high-complexity game states through suggestion patterns that maximize the computational burden on opponents while remaining tractable for themselves (often through pre-computed strategies or superior mental architecture).",
          es: "La explotación de complejidad computacional reconoce que mientras el análisis de información perfecta podría ser teóricamente posible, los humanos tienen poder de procesamiento limitado. Los jugadores maestros crean deliberadamente estados de juego de alta complejidad a través de patrones de sugerencias.",
          de: "Rechenkomplexitätsausbeutung erkennt, dass während perfekte Informationsanalyse theoretisch möglich sein könnte, Menschen begrenzte Verarbeitungsleistung haben. Meisterspieler schaffen absichtlich hochkomplexe Spielzustände durch Vorschlagsmuster, die die Rechenlast für Gegner maximieren.",
          nl: "Computationele complexiteitsexploitatie erkent dat hoewel perfecte informatieanalyse theoretisch mogelijk zou kunnen zijn, mensen beperkte verwerkingskracht hebben. Meesterspelers creëren opzettelijk hoog-complexe speltoestanden door suggestiepatronen die de computationele last op tegenstanders maximaliseren."
        }
      },
      {
        question: {
          en: "What is 'Bayesian network inference' in championship Cluedo?",
          es: "¿Qué es la 'inferencia de red bayesiana' en Cluedo de campeonato?",
          de: "Was ist 'Bayesianische Netzwerk-Inferenz' im Meisterschafts-Cluedo?",
          nl: "Wat is 'Bayesiaanse netwerkinferentie' in kampioenschap-Cluedo?"
        },
        options: [
          {
            en: "Maintaining a probabilistic graphical model of card dependencies and updating via Bayesian inference",
            es: "Mantener un modelo gráfico probabilístico de dependencias de cartas y actualizar mediante inferencia bayesiana",
            de: "Aufrechterhaltung eines probabilistischen grafischen Modells von Kartenabhängigkeiten und Aktualisierung via Bayesianische Inferenz",
            nl: "Onderhouden van een probabilistisch grafisch model van kaartafhankelijkheden en bijwerken via Bayesiaanse inferentie"
          },
          {
            en: "Creating a network of players",
            es: "Crear una red de jugadores",
            de: "Ein Netzwerk von Spielern erstellen",
            nl: "Een netwerk van spelers creëren"
          },
          {
            en: "Using Bayes' theorem once",
            es: "Usar el teorema de Bayes una vez",
            de: "Bayes' Theorem einmal verwenden",
            nl: "Bayes' theorema één keer gebruiken"
          },
          {
            en: "Connecting cards logically",
            es: "Conectar cartas lógicamente",
            de: "Karten logisch verbinden",
            nl: "Kaarten logisch verbinden"
          }
        ],
        correct: 0,
        explanation: {
          en: "Bayesian network inference involves representing the game state as a directed acyclic graph where nodes represent cards/players and edges represent dependencies. Each observation updates probability distributions throughout the network via belief propagation. This captures complex conditional dependencies (e.g., 'if Player A has the Candlestick, the probability Player B has Colonel Mustard changes') that simpler models miss.",
          es: "La inferencia de red bayesiana implica representar el estado del juego como un grafo acíclico dirigido donde los nodos representan cartas/jugadores y los bordes representan dependencias. Cada observación actualiza distribuciones de probabilidad a través de la red mediante propagación de creencias.",
          de: "Bayesianische Netzwerk-Inferenz beinhaltet die Darstellung des Spielzustands als gerichteter azyklischer Graph, wobei Knoten Karten/Spieler und Kanten Abhängigkeiten darstellen. Jede Beobachtung aktualisiert Wahrscheinlichkeitsverteilungen im gesamten Netzwerk via Glaubensausbreitung.",
          nl: "Bayesiaanse netwerkinferentie houdt in dat je de spelstatus vertegenwoordigt als een gerichte acyclische graaf waarbij knopen kaarten/spelers representeren en randen afhankelijkheden. Elke observatie werkt waarschijnlijkheidsverdelingen bij door het netwerk via belief-propagatie."
        }
      },
      {
        question: {
          en: "What is 'game tree pruning with alpha-beta bounds' applied to Cluedo?",
          es: "¿Qué es la 'poda de árbol de juego con límites alfa-beta' aplicada a Cluedo?",
          de: "Was ist 'Spielbaum-Pruning mit Alpha-Beta-Grenzen' angewendet auf Cluedo?",
          nl: "Wat is 'spelboom-pruning met alpha-beta-grenzen' toegepast op Cluedo?"
        },
        options: [
          {
            en: "Eliminating branches of the decision tree that cannot possibly lead to better outcomes than alternatives already found",
            es: "Eliminar ramas del árbol de decisión que no pueden llevar a mejores resultados que las alternativas ya encontradas",
            de: "Eliminierung von Zweigen des Entscheidungsbaums, die unmöglich zu besseren Ergebnissen führen können als bereits gefundene Alternativen",
            nl: "Elimineren van takken van de beslissingsboom die onmogelijk tot betere uitkomsten kunnen leiden dan reeds gevonden alternatieven"
          },
          {
            en: "Cutting down trees in the game",
            es: "Talar árboles en el juego",
            de: "Bäume im Spiel fällen",
            nl: "Bomen in het spel kappen"
          },
          {
            en: "Using Greek letter notation",
            es: "Usar notación de letras griegas",
            de: "Griechische Buchstabennotation verwenden",
            nl: "Griekse letternotatie gebruiken"
          },
          {
            en: "Limiting search depth to two levels",
            es: "Limitar la profundidad de búsqueda a dos niveles",
            de: "Suchtiefe auf zwei Ebenen begrenzen",
            nl: "Zoekdiepte beperken tot twee niveaus"
          }
        ],
        correct: 0,
        explanation: {
          en: "Game tree pruning with alpha-beta bounds adapts the classic chess algorithm to Cluedo. When evaluating suggestion sequences, you maintain upper and lower bounds on achievable information gain. Once a branch is proven inferior to a known alternative, you can prune it without full analysis. This dramatically reduces the computational cost of finding optimal multi-turn suggestion sequences.",
          es: "La poda de árbol de juego con límites alfa-beta adapta el algoritmo clásico de ajedrez a Cluedo. Al evaluar secuencias de sugerencias, mantienes límites superiores e inferiores en la ganancia de información alcanzable. Una vez que se prueba que una rama es inferior a una alternativa conocida, puedes podarla sin análisis completo.",
          de: "Spielbaum-Pruning mit Alpha-Beta-Grenzen passt den klassischen Schachalgorithmus an Cluedo an. Bei der Bewertung von Vorschlagssequenzen behalten Sie obere und untere Grenzen für erreichbaren Informationsgewinn bei. Sobald ein Zweig als schlechter als eine bekannte Alternative bewiesen ist, können Sie ihn ohne vollständige Analyse beschneiden.",
          nl: "Spelboom-pruning met alpha-beta-grenzen past het klassieke schaakalgoritme aan op Cluedo. Bij het evalueren van suggestiesequenties houd je boven- en ondergrenzen bij voor haalbare informatiewinst. Zodra een tak bewezen inferieur is aan een bekend alternatief, kun je deze snoeien zonder volledige analyse."
        }
      },
      {
        question: {
          en: "What is 'opponent skill profiling and exploitation' in elite Cluedo?",
          es: "¿Qué es el 'perfilado y explotación de habilidades del oponente' en Cluedo de élite?",
          de: "Was ist 'Gegner-Skill-Profiling und Ausbeutung' im Elite-Cluedo?",
          nl: "Wat is 'tegenstander-vaardigheids-profilering en exploitatie' in elite-Cluedo?"
        },
        options: [
          {
            en: "Identifying opponents' analytical capabilities and adjusting strategy to exploit their specific cognitive limitations",
            es: "Identificar capacidades analíticas de oponentes y ajustar estrategia para explotar sus limitaciones cognitivas específicas",
            de: "Identifizierung der analytischen Fähigkeiten der Gegner und Anpassung der Strategie zur Ausbeutung ihrer spezifischen kognitiven Einschränkungen",
            nl: "Identificeren van analytische capaciteiten van tegenstanders en aanpassen van strategie om hun specifieke cognitieve beperkingen te exploiteren"
          },
          {
            en: "Remembering opponent names",
            es: "Recordar nombres de oponentes",
            de: "Gegnernamen merken",
            nl: "Tegenstandernamen onthouden"
          },
          {
            en: "Playing the same strategy against everyone",
            es: "Jugar la misma estrategia contra todos",
            de: "Dieselbe Strategie gegen alle spielen",
            nl: "Dezelfde strategie tegen iedereen spelen"
          },
          {
            en: "Watching opponents' body language",
            es: "Observar el lenguaje corporal de los oponentes",
            de: "Körpersprache der Gegner beobachten",
            nl: "Lichaamstaal van tegenstanders observeren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Opponent skill profiling involves quickly assessing each opponent's deductive capabilities, pattern recognition skills, probabilistic reasoning ability, and information tracking capacity. Elite players tailor their strategy per opponent: against weak players, use complex information patterns they won't decode; against strong players, employ game-theoretic mixed strategies to prevent exploitation. This meta-game adaptation is crucial in tournaments.",
          es: "El perfilado de habilidades del oponente implica evaluar rápidamente las capacidades deductivas de cada oponente, habilidades de reconocimiento de patrones, capacidad de razonamiento probabilístico y capacidad de seguimiento de información. Los jugadores de élite adaptan su estrategia por oponente.",
          de: "Gegner-Skill-Profiling beinhaltet schnelle Bewertung der deduktiven Fähigkeiten jedes Gegners, Mustererkennung, probabilistisches Denken und Informationstracking-Kapazität. Elite-Spieler passen ihre Strategie pro Gegner an: gegen schwache Spieler komplexe Informationsmuster verwenden.",
          nl: "Tegenstander-vaardigheids-profilering houdt in dat je snel de deductieve capaciteiten van elke tegenstander beoordeelt, patroonherkenningsvaardigheden, probabilistisch redeneervermogen en informatietracking-capaciteit. Elite-spelers passen hun strategie per tegenstander aan."
        }
      },
      {
        question: {
          en: "What is 'information leakage minimization through randomization' in Cluedo?",
          es: "¿Qué es la 'minimización de fuga de información mediante aleatorización' en Cluedo?",
          de: "Was ist 'Informationsleck-Minimierung durch Randomisierung' in Cluedo?",
          nl: "Wat is 'informatielek-minimalisatie door randomisatie' in Cluedo?"
        },
        options: [
          {
            en: "Using mixed strategies with calculated randomization to prevent opponents from inferring patterns in your card holdings",
            es: "Usar estrategias mixtas con aleatorización calculada para evitar que los oponentes infieran patrones en tus tenencias de cartas",
            de: "Verwendung gemischter Strategien mit berechneter Randomisierung, um Gegner daran zu hindern, Muster in Ihren Kartenbeständen zu folgern",
            nl: "Gebruik van gemengde strategieën met berekende randomisatie om tegenstanders te verhinderen patronen in je kaartbezit af te leiden"
          },
          {
            en: "Making random guesses",
            es: "Hacer conjeturas aleatorias",
            de: "Zufällige Vermutungen machen",
            nl: "Willekeurige gissingen doen"
          },
          {
            en: "Shuffling cards randomly",
            es: "Barajar cartas al azar",
            de: "Karten zufällig mischen",
            nl: "Kaarten willekeurig schudden"
          },
          {
            en: "Choosing rooms randomly",
            es: "Elegir habitaciones al azar",
            de: "Räume zufällig wählen",
            nl: "Kamers willekeurig kiezen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Information leakage minimization recognizes that any deterministic pattern in card revelation can be exploited. When you must show a card and have multiple options, use a randomization strategy (weighted by game-theoretic considerations) rather than a fixed rule. This prevents sophisticated opponents from using your revelation patterns to deduce which cards you hold, maintaining uncertainty even as you disprove suggestions.",
          es: "La minimización de fuga de información reconoce que cualquier patrón determinista en la revelación de cartas puede ser explotado. Cuando debes mostrar una carta y tienes múltiples opciones, usa una estrategia de aleatorización (ponderada por consideraciones de teoría de juegos) en lugar de una regla fija.",
          de: "Informationsleck-Minimierung erkennt, dass jedes deterministische Muster in der Kartenoffenbarung ausgenutzt werden kann. Wenn Sie eine Karte zeigen müssen und mehrere Optionen haben, verwenden Sie eine Randomisierungsstrategie (gewichtet nach spieltheoretischen Überlegungen) statt einer festen Regel.",
          nl: "Informatielek-minimalisatie erkent dat elk deterministisch patroon in kaartopenbaring kan worden geëxploiteerd. Wanneer je een kaart moet tonen en meerdere opties hebt, gebruik een randomisatiestrategie (gewogen door speltheoretische overwegingen) in plaats van een vaste regel."
        }
      },
      {
        question: {
          en: "What is 'Monte Carlo tree search adaptation' for Cluedo suggestion planning?",
          es: "¿Qué es la 'adaptación de búsqueda de árbol de Monte Carlo' para planificación de sugerencias en Cluedo?",
          de: "Was ist 'Monte-Carlo-Baumsuche-Anpassung' für Cluedo-Vorschlagsplanung?",
          nl: "Wat is 'Monte Carlo boom-zoek-aanpassing' voor Cluedo-suggestieplanning?"
        },
        options: [
          {
            en: "Simulating thousands of possible game continuations to evaluate which suggestion sequence has highest win probability",
            es: "Simular miles de posibles continuaciones de juego para evaluar qué secuencia de sugerencias tiene la mayor probabilidad de ganar",
            de: "Simulation Tausender möglicher Spielfortsetzungen zur Bewertung, welche Vorschlagssequenz die höchste Gewinnwahrscheinlichkeit hat",
            nl: "Simuleren van duizenden mogelijke spelvoortzettingen om te evalueren welke suggestiesequentie de hoogste winkans heeft"
          },
          {
            en: "Playing in Monte Carlo casinos",
            es: "Jugar en casinos de Monte Carlo",
            de: "In Monte-Carlo-Casinos spielen",
            nl: "Spelen in Monte Carlo-casino's"
          },
          {
            en: "Using tree diagrams",
            es: "Usar diagramas de árbol",
            de: "Baumdiagramme verwenden",
            nl: "Boomdiagrammen gebruiken"
          },
          {
            en: "Searching randomly",
            es: "Buscar al azar",
            de: "Zufällig suchen",
            nl: "Willekeurig zoeken"
          }
        ],
        correct: 0,
        explanation: {
          en: "Monte Carlo tree search adaptation involves mentally simulating many possible game continuations from the current state. For each candidate suggestion, simulate plausible opponent responses and subsequent game trajectories, tracking which initial suggestion most frequently leads to victory. This computational approach finds near-optimal strategies even in complex, high-uncertainty game states where pure logical analysis struggles.",
          es: "La adaptación de búsqueda de árbol de Monte Carlo implica simular mentalmente muchas posibles continuaciones de juego desde el estado actual. Para cada sugerencia candidata, simula respuestas plausibles de oponentes y trayectorias de juego subsiguientes, rastreando qué sugerencia inicial lleva más frecuentemente a la victoria.",
          de: "Monte-Carlo-Baumsuche-Anpassung beinhaltet mentale Simulation vieler möglicher Spielfortsetzungen vom aktuellen Zustand. Für jeden Kandidatenvorschlag simulieren Sie plausible Gegnerantworten und nachfolgende Spielverläufe und verfolgen, welcher Anfangsvorschlag am häufigsten zum Sieg führt.",
          nl: "Monte Carlo boom-zoek-aanpassing houdt in dat je mentaal vele mogelijke spelvoortzettingen vanaf de huidige staat simuleert. Voor elke kandidaatsuggestie simuleer je plausibele tegenstanderreacties en daaropvolgende speltrajecten, waarbij je bijhoudt welke initiële suggestie het vaakst tot overwinning leidt."
        }
      },
      {
        question: {
          en: "What is 'perfect information approximation' in Cluedo mastery?",
          es: "¿Qué es la 'aproximación de información perfecta' en maestría de Cluedo?",
          de: "Was ist 'perfekte Informationsapproximation' in Cluedo-Meisterschaft?",
          nl: "Wat is 'perfecte informatiebenadering' in Cluedo-meesterschap?"
        },
        options: [
          {
            en: "Constructing the most likely complete game state and playing as if it were known with certainty",
            es: "Construir el estado de juego completo más probable y jugar como si se conociera con certeza",
            de: "Konstruktion des wahrscheinlichsten vollständigen Spielzustands und Spielen, als ob er mit Sicherheit bekannt wäre",
            nl: "Construeren van de meest waarschijnlijke complete spelstatus en spelen alsof deze met zekerheid bekend is"
          },
          {
            en: "Knowing all cards perfectly",
            es: "Conocer todas las cartas perfectamente",
            de: "Alle Karten perfekt kennen",
            nl: "Alle kaarten perfect kennen"
          },
          {
            en: "Having complete information",
            es: "Tener información completa",
            de: "Vollständige Information haben",
            nl: "Complete informatie hebben"
          },
          {
            en: "Cheating to see hidden cards",
            es: "Hacer trampa para ver cartas ocultas",
            de: "Betrügen, um versteckte Karten zu sehen",
            nl: "Vals spelen om verborgen kaarten te zien"
          }
        ],
        correct: 0,
        explanation: {
          en: "Perfect information approximation involves taking your probabilistic model of card distributions and collapsing it to the single most likely configuration. You then play as if this were certain truth, planning multi-turn sequences optimally for that assumed state. This simplifies computation dramatically while often yielding near-optimal play, especially when one configuration has substantially higher probability than alternatives.",
          es: "La aproximación de información perfecta implica tomar tu modelo probabilístico de distribuciones de cartas y colapsarlo a la configuración única más probable. Luego juegas como si esta fuera verdad cierta, planificando secuencias de múltiples turnos de manera óptima para ese estado asumido.",
          de: "Perfekte Informationsapproximation beinhaltet das Nehmen Ihres probabilistischen Modells von Kartenverteilungen und dessen Kollaps auf die einzelne wahrscheinlichste Konfiguration. Sie spielen dann, als ob dies sichere Wahrheit wäre, und planen Mehrfach-Zug-Sequenzen optimal für diesen angenommenen Zustand.",
          nl: "Perfecte informatiebenadering houdt in dat je je probabilistisch model van kaartverdelingen neemt en dit samenvouwt tot de enkele meest waarschijnlijke configuratie. Je speelt dan alsof dit zekere waarheid is, waarbij je multi-beurt sequenties optimaal plant voor die aangenomen staat."
        }
      },
      {
        question: {
          en: "What is 'expected value of information calculation' in tournament Cluedo?",
          es: "¿Qué es el 'cálculo del valor esperado de la información' en Cluedo de torneo?",
          de: "Was ist 'Erwartungswert-der-Information-Berechnung' im Turnier-Cluedo?",
          nl: "Wat is 'verwachte waarde van informatie-berekening' in toernooi-Cluedo?"
        },
        options: [
          {
            en: "Quantifying the expected utility gain from each possible piece of information before acquiring it",
            es: "Cuantificar la ganancia de utilidad esperada de cada pieza posible de información antes de adquirirla",
            de: "Quantifizierung des erwarteten Nutzensgewinns aus jedem möglichen Informationsstück vor dem Erwerb",
            nl: "Kwantificeren van de verwachte nutswinst van elk mogelijk stuk informatie voordat je het verkrijgt"
          },
          {
            en: "Calculating the number of information pieces",
            es: "Calcular el número de piezas de información",
            de: "Anzahl der Informationsstücke berechnen",
            nl: "Aantal stukken informatie berekenen"
          },
          {
            en: "Estimating turn value",
            es: "Estimar el valor del turno",
            de: "Zugwert schätzen",
            nl: "Beurtwaarde schatten"
          },
          {
            en: "Counting expected wins",
            es: "Contar victorias esperadas",
            de: "Erwartete Siege zählen",
            nl: "Verwachte overwinningen tellen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Expected value of information calculation involves computing, before making a suggestion, the anticipated improvement in win probability from each possible information outcome. This accounts for: probability of each response, how much each response reduces uncertainty, and how that uncertainty reduction translates to win probability. Suggestions are selected to maximize expected value, not just information quantity.",
          es: "El cálculo del valor esperado de la información implica calcular, antes de hacer una sugerencia, la mejora anticipada en la probabilidad de ganar de cada posible resultado de información. Esto tiene en cuenta: probabilidad de cada respuesta, cuánto reduce cada respuesta la incertidumbre, y cómo esa reducción se traduce en probabilidad de ganar.",
          de: "Erwartungswert-der-Information-Berechnung beinhaltet das Berechnen, vor dem Machen eines Vorschlags, der antizipierten Verbesserung der Gewinnwahrscheinlichkeit aus jedem möglichen Informationsergebnis. Dies berücksichtigt: Wahrscheinlichkeit jeder Antwort, wie viel jede Antwort Unsicherheit reduziert.",
          nl: "Verwachte waarde van informatie-berekening houdt in dat je, voordat je een suggestie doet, de verwachte verbetering in winkans berekent van elk mogelijk informatie-uitkomst. Dit houdt rekening met: waarschijnlijkheid van elke reactie, hoeveel elke reactie onzekerheid vermindert."
        }
      },
      {
        question: {
          en: "What is 'regret minimization in card revelation' at legendary level?",
          es: "¿Qué es la 'minimización de arrepentimiento en revelación de cartas' a nivel legendario?",
          de: "Was ist 'Bedauern-Minimierung in Kartenoffenbarung' auf legendärem Niveau?",
          nl: "Wat is 'spijt-minimalisatie in kaartopenbaring' op legendarisch niveau?"
        },
        options: [
          {
            en: "Choosing card revelations to minimize maximum possible regret across all future game scenarios",
            es: "Elegir revelaciones de cartas para minimizar el máximo arrepentimiento posible en todos los escenarios de juego futuros",
            de: "Wahl von Kartenoffenbarungen zur Minimierung des maximalen möglichen Bedauerns über alle zukünftigen Spielszenarien",
            nl: "Kiezen van kaartonthullingen om maximale mogelijke spijt over alle toekomstige spelscenario's te minimaliseren"
          },
          {
            en: "Never regretting card choices",
            es: "Nunca lamentar elecciones de cartas",
            de: "Niemals Kartenentscheidungen bereuen",
            nl: "Nooit kaartke uzes betreuren"
          },
          {
            en: "Feeling bad about showing cards",
            es: "Sentirse mal por mostrar cartas",
            de: "Sich schlecht fühlen beim Kartenzeigen",
            nl: "Je slecht voelen over kaarten tonen"
          },
          {
            en: "Minimizing total cards shown",
            es: "Minimizar el total de cartas mostradas",
            de: "Gesamtzahl gezeigter Karten minimieren",
            nl: "Totaal aantal getoonde kaarten minimaliseren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Regret minimization in card revelation involves evaluating each possible card you could show based on worst-case scenarios. For each option, imagine the future game state where showing that card proved maximally harmful. Select the card whose worst-case scenario is least bad. This minimax regret approach provides robustness against unforeseen game developments and opponent strategies.",
          es: "La minimización de arrepentimiento en revelación de cartas implica evaluar cada posible carta que podrías mostrar basándose en escenarios del peor caso. Para cada opción, imagina el estado de juego futuro donde mostrar esa carta resultó máximamente dañino. Selecciona la carta cuyo escenario del peor caso sea menos malo.",
          de: "Bedauern-Minimierung in Kartenoffenbarung beinhaltet die Bewertung jeder möglichen Karte, die Sie zeigen könnten, basierend auf Worst-Case-Szenarien. Für jede Option stellen Sie sich den zukünftigen Spielzustand vor, wo das Zeigen dieser Karte maximal schädlich war. Wählen Sie die Karte, deren Worst-Case-Szenario am wenigsten schlecht ist.",
          nl: "Spijt-minimalisatie in kaartopenbaring houdt in dat je elke mogelijke kaart die je zou kunnen tonen evalueert op basis van worst-case scenario's. Voor elke optie stel je je de toekomstige spelstatus voor waar het tonen van die kaart maximaal schadelijk bleek. Selecteer de kaart waarvan het worst-case scenario het minst erg is."
        }
      },
      {
        question: {
          en: "What is 'multi-objective optimization' in competitive Cluedo strategy?",
          es: "¿Qué es la 'optimización multiobjetivo' en estrategia competitiva de Cluedo?",
          de: "Was ist 'Mehrziel-Optimierung' in kompetitiver Cluedo-Strategie?",
          nl: "Wat is 'multi-doeloptimalisatie' in competitieve Cluedo-strategie?"
        },
        options: [
          {
            en: "Simultaneously optimizing information gain, information denial to opponents, and positional advantage",
            es: "Optimizar simultáneamente ganancia de información, negación de información a oponentes y ventaja posicional",
            de: "Gleichzeitige Optimierung von Informationsgewinn, Informationsverleugnung an Gegner und Positionsvorteil",
            nl: "Tegelijkertijd optimaliseren van informatiewinst, informatieweigering aan tegenstanders en positievoordeel"
          },
          {
            en: "Having multiple goals",
            es: "Tener múltiples objetivos",
            de: "Mehrere Ziele haben",
            nl: "Meerdere doelen hebben"
          },
          {
            en: "Trying to win in multiple ways",
            es: "Intentar ganar de múltiples maneras",
            de: "Versuchen, auf mehrere Arten zu gewinnen",
            nl: "Proberen op meerdere manieren te winnen"
          },
          {
            en: "Optimizing for speed and accuracy",
            es: "Optimizar para velocidad y precisión",
            de: "Für Geschwindigkeit und Genauigkeit optimieren",
            nl: "Optimaliseren voor snelheid en nauwkeurigheid"
          }
        ],
        correct: 0,
        explanation: {
          en: "Multi-objective optimization recognizes that winning Cluedo requires balancing competing goals: gathering information for yourself, denying information to opponents, maintaining positional flexibility, and managing accusation timing. Championship players use Pareto optimization to find suggestions that are not dominated on any dimension—those representing optimal trade-offs across all objectives simultaneously.",
          es: "La optimización multiobjetivo reconoce que ganar Cluedo requiere equilibrar objetivos competitivos: recopilar información para ti, negar información a oponentes, mantener flexibilidad posicional y gestionar el tiempo de acusación. Los jugadores de campeonato usan optimización de Pareto para encontrar sugerencias no dominadas en ninguna dimensión.",
          de: "Mehrziel-Optimierung erkennt, dass Cluedo zu gewinnen das Ausbalancieren konkurrierender Ziele erfordert: Informationen für sich selbst sammeln, Informationen an Gegner verweigern, Positionsflexibilität aufrechterhalten und Anschuldigungszeitpunkt verwalten. Meisterschaftsspieler verwenden Pareto-Optimierung.",
          nl: "Multi-doeloptimalisatie erkent dat Cluedo winnen vereist het balanceren van concurrerende doelen: informatie verzamelen voor jezelf, informatie weigeren aan tegenstanders, positieflexibiliteit behouden en beschuldigingstiming beheren. Kampioenschapspelers gebruiken Pareto-optimalisatie."
        }
      },
      {
        question: {
          en: "What is 'asymmetric information warfare' in elite Cluedo play?",
          es: "¿Qué es la 'guerra de información asimétrica' en juego de élite de Cluedo?",
          de: "Was ist 'asymmetrische Informationskriegsführung' im Elite-Cluedo-Spiel?",
          nl: "Wat is 'asymmetrische informatieoorlogsvoering' in elite-Cluedo-spel?"
        },
        options: [
          {
            en: "Exploiting differences in analytical capability between you and opponents to create advantageous information asymmetries",
            es: "Explotar diferencias en capacidad analítica entre tú y los oponentes para crear asimetrías de información ventajosas",
            de: "Ausnutzung von Unterschieden in analytischer Fähigkeit zwischen Ihnen und Gegnern zur Schaffung vorteilhafter Informationsasymmetrien",
            nl: "Exploiteren van verschillen in analytisch vermogen tussen jou en tegenstanders om voordelige informatie-asymmetrieën te creëren"
          },
          {
            en: "Using asymmetric game boards",
            es: "Usar tableros de juego asimétricos",
            de: "Asymmetrische Spielbretter verwenden",
            nl: "Asymmetrische spelborden gebruiken"
          },
          {
            en: "Having different information than opponents",
            es: "Tener información diferente a los oponentes",
            de: "Andere Informationen als Gegner haben",
            nl: "Andere informatie hebben dan tegenstanders"
          },
          {
            en: "Fighting opponents verbally",
            es: "Combatir a oponentes verbalmente",
            de: "Gegner verbal bekämpfen",
            nl: "Tegenstanders verbaal bestrijden"
          }
        ],
        correct: 0,
        explanation: {
          en: "Asymmetric information warfare involves deliberately creating game states where the information complexity exceeds opponents' analytical capacity but remains within yours. This might involve: creating multi-level deductive chains only you can track, using probability distributions opponents cannot compute, or establishing information patterns that require computational resources you possess but they don't. The goal is information superiority through superior processing.",
          es: "La guerra de información asimétrica implica crear deliberadamente estados de juego donde la complejidad de información excede la capacidad analítica de los oponentes pero permanece dentro de la tuya. Esto podría involucrar: crear cadenas deductivas multinivel que solo tú puedes rastrear, usar distribuciones de probabilidad que los oponentes no pueden calcular.",
          de: "Asymmetrische Informationskriegsführung beinhaltet absichtliches Schaffen von Spielzuständen, wo die Informationskomplexität die analytische Kapazität der Gegner übersteigt, aber innerhalb Ihrer bleibt. Dies könnte beinhalten: Erstellen mehrstufiger deduktiver Ketten, die nur Sie verfolgen können.",
          nl: "Asymmetrische informatieoorlogsvoering houdt in dat je opzettelijk speltoestanden creëert waar de informatiecomplexiteit het analytisch vermogen van tegenstanders overschrijdt maar binnen het jouwe blijft. Dit zou kunnen inhouden: creëren van multi-niveau deductieve ketens die alleen jij kunt bijhouden."
        }
      },
      {
        question: {
          en: "What is 'solution convergence rate optimization' in championship Cluedo?",
          es: "¿Qué es la 'optimización de tasa de convergencia de solución' en Cluedo de campeonato?",
          de: "Was ist 'Lösungskonvergenzraten-Optimierung' im Meisterschafts-Cluedo?",
          nl: "Wat is 'oplossingsconvergentiesnelheid-optimalisatie' in kampioenschap-Cluedo?"
        },
        options: [
          {
            en: "Maximizing the rate at which solution uncertainty decreases per turn while minimizing opponents' convergence rates",
            es: "Maximizar la tasa a la que la incertidumbre de solución disminuye por turno mientras se minimizan las tasas de convergencia de los oponentes",
            de: "Maximierung der Rate, mit der Lösungsunsicherheit pro Zug abnimmt, während die Konvergenzraten der Gegner minimiert werden",
            nl: "Maximaliseren van de snelheid waarmee oplossingsonzekerheid per beurt afneemt terwijl convergentiesnelheden van tegenstanders worden geminimaliseerd"
          },
          {
            en: "Solving as fast as possible",
            es: "Resolver lo más rápido posible",
            de: "So schnell wie möglich lösen",
            nl: "Zo snel mogelijk oplossen"
          },
          {
            en: "Converging with other players",
            es: "Converger con otros jugadores",
            de: "Mit anderen Spielern konvergieren",
            nl: "Convergeren met andere spelers"
          },
          {
            en: "Optimizing turn speed",
            es: "Optimizar velocidad de turno",
            de: "Zuggeschwindigkeit optimieren",
            nl: "Beurtsnelheid optimaliseren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Solution convergence rate optimization involves treating the game as a race where both you and opponents are narrowing solution spaces at measurable rates. The optimal strategy maximizes your convergence rate (via high-information suggestions) while minimizing opponents' rates (via strategic card revelations that provide minimal new information). Championship play requires constantly computing and optimizing this differential convergence velocity.",
          es: "La optimización de tasa de convergencia de solución implica tratar el juego como una carrera donde tanto tú como los oponentes están reduciendo espacios de solución a tasas medibles. La estrategia óptima maximiza tu tasa de convergencia (mediante sugerencias de alta información) mientras minimiza las tasas de los oponentes.",
          de: "Lösungskonvergenzraten-Optimierung beinhaltet die Behandlung des Spiels als Rennen, wo sowohl Sie als auch Gegner Lösungsräume mit messbaren Raten verengen. Die optimale Strategie maximiert Ihre Konvergenzrate (via hochinformative Vorschläge) während die Raten der Gegner minimiert werden.",
          nl: "Oplossingsconvergentiesnelheid-optimalisatie houdt in dat je het spel behandelt als een race waarbij zowel jij als tegenstanders oplossingsruimten verkleinen met meetbare snelheden. De optimale strategie maximaliseert je convergentiesnelheid (via hoog-informatie suggesties) terwijl snelheden van tegenstanders worden geminimaliseerd."
        }
      },
      {
        question: {
          en: "What is 'counterfactual reasoning' in legendary Cluedo mastery?",
          es: "¿Qué es el 'razonamiento contrafactual' en maestría legendaria de Cluedo?",
          de: "Was ist 'kontrafaktisches Denken' in legendärer Cluedo-Meisterschaft?",
          nl: "Wat is 'contrafactisch redeneren' in legendarisch Cluedo-meesterschap?"
        },
        options: [
          {
            en: "Analyzing what you would have learned if opponents had responded differently to past suggestions",
            es: "Analizar lo que habrías aprendido si los oponentes hubieran respondido de manera diferente a sugerencias pasadas",
            de: "Analyse, was Sie gelernt hätten, wenn Gegner anders auf vergangene Vorschläge reagiert hätten",
            nl: "Analyseren wat je geleerd zou hebben als tegenstanders anders hadden gereageerd op eerdere suggesties"
          },
          {
            en: "Reasoning about fictional scenarios",
            es: "Razonar sobre escenarios ficticios",
            de: "Über fiktive Szenarien nachdenken",
            nl: "Redeneren over fictieve scenario's"
          },
          {
            en: "Thinking about alternative facts",
            es: "Pensar en hechos alternativos",
            de: "Über alternative Fakten nachdenken",
            nl: "Nadenken over alternatieve feiten"
          },
          {
            en: "Imagining different game outcomes",
            es: "Imaginar diferentes resultados del juego",
            de: "Sich verschiedene Spielergebnisse vorstellen",
            nl: "Verschillende speluitkomsten voorstellen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Counterfactual reasoning involves extracting information not just from what happened, but from what didn't happen. When an opponent disproves your suggestion with card X, you learn: they have X, but you also learn they didn't have cards Y or Z (else they might have shown those). Advanced players maintain probability distributions over which card opponents would have shown in counterfactual scenarios, extracting additional bits of information from the path not taken.",
          es: "El razonamiento contrafactual implica extraer información no solo de lo que sucedió, sino de lo que no sucedió. Cuando un oponente refuta tu sugerencia con carta X, aprendes: tienen X, pero también aprendes que no tenían cartas Y o Z (de lo contrario podrían haberlas mostrado). Los jugadores avanzados mantienen distribuciones de probabilidad.",
          de: "Kontrafaktisches Denken beinhaltet das Extrahieren von Informationen nicht nur aus dem, was passiert ist, sondern aus dem, was nicht passiert ist. Wenn ein Gegner Ihren Vorschlag mit Karte X widerlegt, lernen Sie: sie haben X, aber Sie lernen auch, dass sie Karten Y oder Z nicht hatten (sonst hätten sie diese vielleicht gezeigt).",
          nl: "Contrafactisch redeneren houdt in dat je informatie extraheert niet alleen uit wat gebeurde, maar uit wat niet gebeurde. Wanneer een tegenstander je suggestie weerlegt met kaart X, leer je: ze hebben X, maar je leert ook dat ze kaarten Y of Z niet hadden (anders hadden ze die misschien getoond)."
        }
      }
    ]
]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level7;
  } else if (typeof window !== 'undefined') {
    window.level7 = level7;
  }
})();
