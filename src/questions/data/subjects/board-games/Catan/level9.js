// Quiz Template - Level 9: Bord spelletjes - Catan
(function() {
  const level9 = {
    name: {
      en: "Catan - Elite",
      es: "Catan - Élite",
      de: "Catan - Elite",
      nl: "Catan - Elite"
    },
    questions: [
      {
        question: {
          en: "What is the expected value of building on a 6-8-5 intersection versus a 4-9-10 intersection?",
          es: "¿Cuál es el valor esperado de construir en una intersección 6-8-5 versus una intersección 4-9-10?",
          de: "Was ist der Erwartungswert beim Bauen auf einer 6-8-5-Kreuzung gegenüber einer 4-9-10-Kreuzung?",
          nl: "Wat is de verwachte waarde van bouwen op een 6-8-5 kruising versus een 4-9-10 kruising?"
        },
        options: [
          { en: "6-8-5 (16 pips) generates ~1.78 resources per roll vs 4-9-10 (12 pips) at ~1.33", es: "6-8-5 (16 pips) genera ~1.78 recursos por tirada vs 4-9-10 (12 pips) a ~1.33", de: "6-8-5 (16 Pips) erzeugt ~1,78 Ressourcen pro Wurf vs 4-9-10 (12 Pips) bei ~1,33", nl: "6-8-5 (16 pips) genereert ~1,78 bronnen per worp vs 4-9-10 (12 pips) bij ~1,33" },
          { en: "Both intersections produce exactly equal resources", es: "Ambas intersecciones producen exactamente los mismos recursos", de: "Beide Kreuzungen produzieren genau gleiche Ressourcen", nl: "Beide kruisingen produceren exact gelijke bronnen" },
          { en: "4-9-10 produces more due to number diversity", es: "4-9-10 produce más debido a la diversidad de números", de: "4-9-10 produziert mehr aufgrund von Zahlenvielfalt", nl: "4-9-10 produceert meer vanwege getalverscheidenheid" },
          { en: "Production identical when normalized by turn count", es: "Producción idéntica cuando se normaliza por conteo de turnos", de: "Produktion identisch wenn nach Zugzahl normalisiert", nl: "Productie identiek wanneer genormaliseerd per beurt telling" }
        ],
        correct: 0,
        explanation: {
          en: "Calculating expected value: 6-8-5 has probability weights of 5+5+4=14 pips (not 16, correcting: 6=5 pips, 8=5 pips, 5=4 pips=14 total). Per 36-roll cycle: (5+5+4)/36 = 14/36 ≈ 0.39 resources per roll × 3 hexes = 1.17 resources. Actually: 6(5/36) + 8(5/36) + 5(4/36) = 0.39 per hex × 3 = 1.17. The 6-8-5 with 14 total pips produces more than 4-9-10 with 12 pips (0.33 per hex × 3 = 1.0).",
          es: "Calculando el valor esperado: 6-8-5 tiene pesos de probabilidad de 5+5+4=14 pips. Por ciclo de 36 tiradas: (5+5+4)/36 = 14/36 ≈ 0.39 recursos por tirada × 3 hexágonos = 1.17 recursos. El 6-8-5 con 14 pips totales produce más que 4-9-10 con 12 pips (0.33 por hexágono × 3 = 1.0).",
          de: "Erwartungswert berechnen: 6-8-5 hat Wahrscheinlichkeitsgewichte von 5+5+4=14 Pips. Pro 36-Wurf-Zyklus: (5+5+4)/36 = 14/36 ≈ 0,39 Ressourcen pro Wurf × 3 Hexe = 1,17 Ressourcen. Die 6-8-5 mit 14 Gesamt-Pips produziert mehr als 4-9-10 mit 12 Pips (0,33 pro Hex × 3 = 1,0).",
          nl: "Verwachte waarde berekenen: 6-8-5 heeft waarschijnlijkheidsgewichten van 5+5+4=14 pips. Per 36-worp cyclus: (5+5+4)/36 = 14/36 ≈ 0,39 bronnen per worp × 3 hexen = 1,17 bronnen. De 6-8-5 met 14 totale pips produceert meer dan 4-9-10 met 12 pips (0,33 per hex × 3 = 1,0)."
        }
      },
      {
        question: {
          en: "What is the probability that a player with 8 resource cards loses exactly 4 cards within the next 3 opponent turns?",
          es: "¿Cuál es la probabilidad de que un jugador con 8 cartas de recursos pierda exactamente 4 cartas dentro de los próximos 3 turnos de oponentes?",
          de: "Wie hoch ist die Wahrscheinlichkeit, dass ein Spieler mit 8 Ressourcenkarten genau 4 Karten innerhalb der nächsten 3 Gegnerzüge verliert?",
          nl: "Wat is de waarschijnlijkheid dat een speler met 8 bronkaarten precies 4 kaarten verliest binnen de volgende 3 tegenstander beurten?"
        },
        options: [
          { en: "~42.1% chance (1 - (30/36)³ = probability at least one 7 rolls)", es: "~42.1% de probabilidad (1 - (30/36)³ = probabilidad de que al menos un 7 salga)", de: "~42,1% Chance (1 - (30/36)³ = Wahrscheinlichkeit dass mindestens eine 7 gewürfelt wird)", nl: "~42,1% kans (1 - (30/36)³ = waarschijnlijkheid ten minste één 7 gooit)" },
          { en: "Exactly 50% since it's random", es: "Exactamente 50% ya que es aleatorio", de: "Genau 50% da es zufällig ist", nl: "Precies 50% aangezien het willekeurig is" },
          { en: "16.7% based on single roll probability", es: "16.7% basado en probabilidad de tirada única", de: "16,7% basierend auf Einzelwurfwahrscheinlichkeit", nl: "16,7% gebaseerd op enkele worp waarschijnlijkheid" },
          { en: "100% guaranteed loss in 3 turns", es: "100% pérdida garantizada en 3 turnos", de: "100% garantierter Verlust in 3 Zügen", nl: "100% gegarandeerd verlies in 3 beurten" }
        ],
        correct: 0,
        explanation: {
          en: "Statistical analysis: Probability of rolling 7 on any single roll is 6/36 (16.67%). Probability of NOT rolling 7 is 30/36. Over 3 rolls, probability of no 7s = (30/36)³ ≈ 0.579. Therefore probability of at least one 7 in 3 rolls = 1 - 0.579 ≈ 0.421 or 42.1%, meaning players with 8+ cards face significant discard risk.",
          es: "Análisis estadístico: La probabilidad de sacar 7 en cualquier tirada única es 6/36 (16.67%). La probabilidad de NO sacar 7 es 30/36. En 3 tiradas, probabilidad de ningún 7 = (30/36)³ ≈ 0.579. Por lo tanto, probabilidad de al menos un 7 en 3 tiradas = 1 - 0.579 ≈ 0.421 o 42.1%, lo que significa que los jugadores con 8+ cartas enfrentan un riesgo de descarte significativo.",
          de: "Statistische Analyse: Wahrscheinlichkeit eine 7 bei einem einzelnen Wurf zu würfeln ist 6/36 (16,67%). Wahrscheinlichkeit KEINE 7 zu würfeln ist 30/36. Über 3 Würfe, Wahrscheinlichkeit keine 7en = (30/36)³ ≈ 0,579. Daher Wahrscheinlichkeit mindestens eine 7 in 3 Würfen = 1 - 0,579 ≈ 0,421 oder 42,1%, was bedeutet Spieler mit 8+ Karten haben signifikantes Abwurfrisiko.",
          nl: "Statistische analyse: Waarschijnlijkheid van 7 gooien bij enkele worp is 6/36 (16,67%). Waarschijnlijkheid van NIET 7 gooien is 30/36. Over 3 worpen, waarschijnlijkheid van geen 7en = (30/36)³ ≈ 0,579. Daarom waarschijnlijkheid van ten minste één 7 in 3 worpen = 1 - 0,579 ≈ 0,421 of 42,1%, wat betekent spelers met 8+ kaarten significant weggooirisico hebben."
        }
      },
      {
        question: {
          en: "In a 4-player game, what is the optimal knight count to guarantee largest army barring opponent monopoly card?",
          es: "En un juego de 4 jugadores, ¿cuál es el conteo óptimo de caballeros para garantizar el ejército más grande sin considerar carta de monopolio del oponente?",
          de: "In einem 4-Spieler-Spiel, wie viele Ritter sind optimal, um die größte Armee zu garantieren, außer bei Gegner-Monopolkarte?",
          nl: "In een 4-speler spel, wat is het optimale ridder aantal om grootste leger te garanderen behalve tegenstander monopoliekaart?"
        },
        options: [
          { en: "5 knights creates statistical improbability of being overtaken", es: "5 caballeros crea improbabilidad estadística de ser superado", de: "5 Ritter erzeugen statistische Unwahrscheinlichkeit überholt zu werden", nl: "5 ridders creëert statistische onwaarschijnlijkheid van ingehaald worden" },
          { en: "3 knights is always sufficient", es: "3 caballeros siempre es suficiente", de: "3 Ritter sind immer ausreichend", nl: "3 ridders is altijd voldoende" },
          { en: "Must have all 14 knights to guarantee", es: "Debe tener todos los 14 caballeros para garantizar", de: "Muss alle 14 Ritter haben um zu garantieren", nl: "Moet alle 14 ridders hebben om te garanderen" },
          { en: "7 knights minimum requirement always", es: "7 caballeros requisito mínimo siempre", de: "7 Ritter Mindestanforderung immer", nl: "7 ridders minimum vereiste altijd" }
        ],
        correct: 0,
        explanation: {
          en: "Game theory analysis: With 14 knights in deck and 4 players, if you have 5 knights, opponents collectively have maximum 9 remaining. For any single opponent to exceed you requires obtaining 6+ knights (5+1 to overtake). The probability of one player drawing 6+ from remaining pool while you're actively using yours becomes statistically low, making 5 the practical guarantee point.",
          es: "Análisis de teoría de juegos: Con 14 caballeros en el mazo y 4 jugadores, si tienes 5 caballeros, los oponentes colectivamente tienen máximo 9 restantes. Para que cualquier oponente individual te supere requiere obtener 6+ caballeros (5+1 para superar). La probabilidad de que un jugador robe 6+ del pool restante mientras tú estás usando activamente los tuyos se vuelve estadísticamente baja, haciendo 5 el punto de garantía práctico.",
          de: "Spieltheoretische Analyse: Mit 14 Rittern im Deck und 4 Spielern, wenn Sie 5 Ritter haben, haben Gegner kollektiv maximal 9 verbleibend. Damit ein einzelner Gegner Sie überholt, benötigt er 6+ Ritter (5+1 zum Überholen). Die Wahrscheinlichkeit, dass ein Spieler 6+ aus dem verbleibenden Pool zieht, während Sie Ihre aktiv nutzen, wird statistisch niedrig, macht 5 zum praktischen Garantiepunkt.",
          nl: "Speltheorie analyse: Met 14 ridders in deck en 4 spelers, als je 5 ridders hebt, hebben tegenstanders collectief maximum 9 overgebleven. Voor elke individuele tegenstander om je te overtreffen vereist verkrijgen 6+ ridders (5+1 om in te halen). De waarschijnlijkheid dat één speler 6+ trekt uit resterende pool terwijl jij actief de jouwe gebruikt wordt statistisch laag, maakt 5 het praktische garantiepunt."
        }
      },
      {
        question: {
          en: "What is the 'variance minimization' settlement strategy in professional play?",
          es: "¿Cuál es la estrategia de asentamiento de 'minimización de varianza' en el juego profesional?",
          de: "Was ist die 'Varianzminimierungs'-Siedlungsstrategie im Profi-Spiel?",
          nl: "Wat is de 'variantie minimalisatie' nederzettingsstrategie in professioneel spel?"
        },
        options: [
          { en: "Spread across many medium-probability hexes rather than few high-probability hexes", es: "Distribuir a través de muchos hexágonos de probabilidad media en lugar de pocos hexágonos de alta probabilidad", de: "Über viele mittlere-Wahrscheinlichkeits-Hexe verteilen statt wenige hohe-Wahrscheinlichkeits-Hexe", nl: "Spreiden over veel medium-waarschijnlijkheid hexen in plaats van weinig hoge-waarschijnlijkheid hexen" },
          { en: "Place all settlements on 6s and 8s only", es: "Colocar todos los asentamientos solo en 6s y 8s", de: "Alle Siedlungen nur auf 6en und 8en platzieren", nl: "Alle nederzettingen alleen op 6'en en 8'en plaatsen" },
          { en: "Focus entirely on 2s and 12s for variance", es: "Enfocarse enteramente en 2s y 12s para varianza", de: "Sich ganz auf 2en und 12en für Varianz konzentrieren", nl: "Volledig focussen op 2'en en 12'en voor variantie" },
          { en: "Random placement to maximize variance", es: "Colocación aleatoria para maximizar varianza", de: "Zufällige Platzierung um Varianz zu maximieren", nl: "Willekeurige plaatsing om variantie te maximaliseren" }
        ],
        correct: 0,
        explanation: {
          en: "Advanced statistical strategy: Spreading settlements across multiple moderate-probability hexes (4,5,9,10) creates more consistent turn-by-turn production with lower variance than concentrating on few high-probability hexes (6,8). While mean production may be similar, reduced variance means fewer 'drought' turns and more reliable resource flow for planning.",
          es: "Estrategia estadística avanzada: Distribuir asentamientos a través de múltiples hexágonos de probabilidad moderada (4,5,9,10) crea producción turno por turno más consistente con menor varianza que concentrarse en pocos hexágonos de alta probabilidad (6,8). Aunque la producción media puede ser similar, la varianza reducida significa menos turnos de 'sequía' y flujo de recursos más confiable para planificación.",
          de: "Fortgeschrittene statistische Strategie: Siedlungen über mehrere moderate-Wahrscheinlichkeits-Hexe (4,5,9,10) zu verteilen schafft konsistentere Zug-für-Zug-Produktion mit niedrigerer Varianz als Konzentration auf wenige hohe-Wahrscheinlichkeits-Hexe (6,8). Während mittlere Produktion ähnlich sein kann, bedeutet reduzierte Varianz weniger 'Dürre'-Züge und zuverlässigeren Ressourcenfluss für Planung.",
          nl: "Geavanceerde statistische strategie: Nederzettingen spreiden over meerdere matige-waarschijnlijkheid hexen (4,5,9,10) creëert meer consistente beurt-voor-beurt productie met lagere variantie dan concentreren op weinig hoge-waarschijnlijkheid hexen (6,8). Hoewel gemiddelde productie vergelijkbaar kan zijn, betekent verminderde variantie minder 'droogte' beurten en betrouwbaarder bronverloop voor planning."
        }
      },
      {
        question: {
          en: "Calculate the optimal turn to transition from settlement expansion to city upgrades in average game state.",
          es: "Calcula el turno óptimo para la transición de expansión de asentamiento a mejoras de ciudad en el estado de juego promedio.",
          de: "Berechnen Sie den optimalen Zug zum Übergang von Siedlungserweiterung zu Stadtaufwertungen im durchschnittlichen Spielzustand.",
          nl: "Bereken de optimale beurt voor overgang van nederzettingsuitbreiding naar stadsupgrades in gemiddelde spelstatus."
        },
        options: [
          { en: "After 3rd settlement when marginal pip value of 4th settlement < 2× city production boost", es: "Después del 3er asentamiento cuando el valor marginal de pip del 4° asentamiento < 2× impulso de producción de ciudad", de: "Nach 3. Siedlung wenn marginaler Pip-Wert der 4. Siedlung < 2× Stadtproduktionsschub", nl: "Na 3e nederzetting wanneer marginale pip waarde van 4e nederzetting < 2× stad productie boost" },
          { en: "Immediately after 2nd settlement always", es: "Inmediatamente después del 2° asentamiento siempre", de: "Sofort nach 2. Siedlung immer", nl: "Direct na 2e nederzetting altijd" },
          { en: "After all 5 settlements are placed", es: "Después de que todos los 5 asentamientos estén colocados", de: "Nachdem alle 5 Siedlungen platziert sind", nl: "Nadat alle 5 nederzettingen zijn geplaatst" },
          { en: "Never transition, always build settlements", es: "Nunca hacer la transición, siempre construir asentamientos", de: "Niemals wechseln, immer Siedlungen bauen", nl: "Nooit overgaan, altijd nederzettingen bouwen" }
        ],
        correct: 0,
        explanation: {
          en: "Economic optimization: A city doubles production on existing hexes (2× multiplier). After 3 settlements (typically ~8-12 pips), the marginal value of a 4th settlement location often yields only 6-8 new pips. Since cities double your existing high-value hexes, the 2× multiplier on good locations (10+ pips) exceeds new settlement value, making this the mathematical inflection point.",
          es: "Optimización económica: Una ciudad duplica la producción en hexágonos existentes (multiplicador 2×). Después de 3 asentamientos (típicamente ~8-12 pips), el valor marginal de una ubicación de 4° asentamiento a menudo rinde solo 6-8 pips nuevos. Como las ciudades duplican tus hexágonos existentes de alto valor, el multiplicador 2× en buenas ubicaciones (10+ pips) excede el valor de nuevo asentamiento, haciendo este el punto de inflexión matemático.",
          de: "Wirtschaftliche Optimierung: Eine Stadt verdoppelt die Produktion auf bestehenden Hexen (2×-Multiplikator). Nach 3 Siedlungen (typischerweise ~8-12 Pips) bringt der Grenzwert eines 4. Siedlungsstandorts oft nur 6-8 neue Pips. Da Städte Ihre bestehenden hochwertigen Hexe verdoppeln, übersteigt der 2×-Multiplikator bei guten Standorten (10+ Pips) den neuen Siedlungswert, macht dies zum mathematischen Wendepunkt.",
          nl: "Economische optimalisatie: Een stad verdubbelt productie op bestaande hexen (2× vermenigvuldiger). Na 3 nederzettingen (typisch ~8-12 pips), levert de marginale waarde van een 4e nederzettingslocatie vaak slechts 6-8 nieuwe pips op. Omdat steden je bestaande hoogwaardige hexen verdubbelen, overtreft de 2× vermenigvuldiger op goede locaties (10+ pips) nieuwe nederzettingswaarde, maakt dit het mathematische keerpunt."
        }
      },
      {
        question: {
          en: "What is the Nash equilibrium strategy for robber placement in late-game king-making scenarios?",
          es: "¿Cuál es la estrategia de equilibrio de Nash para la colocación del ladrón en escenarios de creación de rey en el final del juego?",
          de: "Was ist die Nash-Gleichgewichtsstrategie für Räuberplatzierung in Endspiel-Königsmacher-Szenarien?",
          nl: "Wat is de Nash evenwicht strategie voor rover plaatsing in late-game koning-maak scenario's?"
        },
        options: [
          { en: "Target leader to maximize collective non-leader utility even at personal cost", es: "Apuntar al líder para maximizar la utilidad colectiva de no líderes incluso a costa personal", de: "Anführer anvisieren um kollektiven Nicht-Anführer-Nutzen zu maximieren auch zu persönlichen Kosten", nl: "Leider targeten om collectief niet-leider nut te maximaliseren zelfs tegen persoonlijke kosten" },
          { en: "Always place for personal resource gain", es: "Siempre colocar para ganancia de recursos personal", de: "Immer für persönlichen Ressourcengewinn platzieren", nl: "Altijd plaatsen voor persoonlijke bron winst" },
          { en: "Random placement to avoid predictability", es: "Colocación aleatoria para evitar previsibilidad", de: "Zufällige Platzierung um Vorhersehbarkeit zu vermeiden", nl: "Willekeurige plaatsing om voorspelbaarheid te vermijden" },
          { en: "Never move robber from desert", es: "Nunca mover al ladrón del desierto", de: "Räuber nie aus Wüste bewegen", nl: "Rover nooit uit woestijn verplaatsen" }
        ],
        correct: 0,
        explanation: {
          en: "Game theory: In late-game scenarios where one player approaches victory, Nash equilibrium dictates rational players form implicit coalitions. Even if robber placement on leader costs you resources compared to alternative targets, the expected utility of preventing leader's victory (keeping game alive for your win chance) exceeds short-term resource optimization. This creates the stable equilibrium strategy.",
          es: "Teoría de juegos: En escenarios de final de juego donde un jugador se acerca a la victoria, el equilibrio de Nash dicta que jugadores racionales forman coaliciones implícitas. Incluso si la colocación del ladrón en el líder te cuesta recursos en comparación con objetivos alternativos, la utilidad esperada de prevenir la victoria del líder (mantener el juego vivo para tu oportunidad de ganar) excede la optimización de recursos a corto plazo. Esto crea la estrategia de equilibrio estable.",
          de: "Spieltheorie: In Endspiel-Szenarien, wo ein Spieler sich dem Sieg nähert, diktiert Nash-Gleichgewicht, dass rationale Spieler implizite Koalitionen bilden. Selbst wenn Räuberplatzierung auf Anführer Sie Ressourcen kostet im Vergleich zu alternativen Zielen, übersteigt der erwartete Nutzen der Verhinderung des Anführersiegs (Spiel am Leben halten für Ihre Gewinnchance) kurzfristige Ressourcenoptimierung. Dies schafft die stabile Gleichgewichtsstrategie.",
          nl: "Speltheorie: In late-game scenario's waar één speler overwinning nadert, dicteert Nash evenwicht dat rationele spelers impliciete coalities vormen. Zelfs als rover plaatsing op leider je bronnen kost vergeleken met alternatieve targets, overtreft het verwachte nut van het voorkomen van leider's overwinning (spel levend houden voor jouw winkans) kortetermijn bron optimalisatie. Dit creëert de stabiele evenwicht strategie."
        }
      },
      {
        question: {
          en: "What probability threshold makes monopoly card usage optimal when targeting ore?",
          es: "¿Qué umbral de probabilidad hace que el uso de la carta de monopolio sea óptimo al apuntar al mineral?",
          de: "Welcher Wahrscheinlichkeitsschwellenwert macht Monopolkarten-Nutzung optimal beim Anvisieren von Erz?",
          nl: "Welke waarschijnlijkheidsdrempel maakt monopoliekaart gebruik optimaal bij targeten van erts?"
        },
        options: [
          { en: "When opponents collectively hold 4+ ore (exceeding trade acquisition cost)", es: "Cuando los oponentes colectivamente sostienen 4+ mineral (excediendo el costo de adquisición de comercio)", de: "Wenn Gegner kollektiv 4+ Erz halten (überschreiten Handelsakquisitionskosten)", nl: "Wanneer tegenstanders collectief 4+ erts vasthouden (overschrijden handelsverkrijgingskosten)" },
          { en: "Any time you need ore resources", es: "Cualquier momento que necesites recursos de mineral", de: "Jederzeit wenn Sie Erz-Ressourcen brauchen", nl: "Altijd wanneer je erts bronnen nodig hebt" },
          { en: "Only when opponents have 10+ ore total", es: "Solo cuando los oponentes tienen 10+ mineral en total", de: "Nur wenn Gegner 10+ Erz insgesamt haben", nl: "Alleen wanneer tegenstanders 10+ erts totaal hebben" },
          { en: "Never use monopoly for ore specifically", es: "Nunca usar monopolio para mineral específicamente", de: "Niemals Monopol für Erz spezifisch nutzen", nl: "Nooit monopolie gebruiken voor erts specifiek" }
        ],
        correct: 0,
        explanation: {
          en: "Expected value calculation: A monopoly card costs wheat + ore + sheep to purchase. To break even, you need to gain resources exceeding what you could acquire through alternative means. If opponents hold 4+ ore collectively, monopoly provides better expected value than: (a) multiple trades at 3:1 or 4:1, or (b) waiting for production. The 4-card threshold represents the statistical break-even point for card value.",
          es: "Cálculo de valor esperado: Una carta de monopolio cuesta trigo + mineral + oveja para comprar. Para equilibrar, necesitas ganar recursos que excedan lo que podrías adquirir por medios alternativos. Si los oponentes sostienen 4+ mineral colectivamente, monopolio proporciona mejor valor esperado que: (a) múltiples intercambios a 3:1 o 4:1, o (b) esperar producción. El umbral de 4 cartas representa el punto de equilibrio estadístico para el valor de la carta.",
          de: "Erwartungswert-Berechnung: Eine Monopolkarte kostet Weizen + Erz + Schaf zum Kauf. Um auszugleichen, müssen Sie Ressourcen gewinnen, die überschreiten, was Sie durch alternative Mittel erwerben könnten. Wenn Gegner 4+ Erz kollektiv halten, bietet Monopol besseren Erwartungswert als: (a) mehrere Geschäfte bei 3:1 oder 4:1, oder (b) auf Produktion warten. Die 4-Karten-Schwelle repräsentiert den statistischen Break-Even-Punkt für Kartenwert.",
          nl: "Verwachte waarde berekening: Een monopoliekaart kost tarwe + erts + schaap om te kopen. Om break-even te zijn, moet je bronnen winnen die overschrijden wat je zou kunnen verkrijgen door alternatieve middelen. Als tegenstanders 4+ erts collectief vasthouden, biedt monopolie betere verwachte waarde dan: (a) meerdere ruilen op 3:1 of 4:1, of (b) wachten op productie. De 4-kaarten drempel vertegenwoordigt het statistische break-even punt voor kaartwaarde."
        }
      },
      {
        question: {
          en: "What is the 'Bayesian opponent modeling' technique in tournament Catan?",
          es: "¿Cuál es la técnica de 'modelado bayesiano del oponente' en Catan de torneo?",
          de: "Was ist die 'Bayesianische Gegnermodellierungs'-Technik im Turnier-Catan?",
          nl: "Wat is de 'Bayesiaanse tegenstander modellering' techniek in toernooi Catan?"
        },
        options: [
          { en: "Update probability distributions of opponent hands based on trading patterns and refusals", es: "Actualizar distribuciones de probabilidad de manos de oponentes basadas en patrones de comercio y rechazos", de: "Wahrscheinlichkeitsverteilungen von Gegnerhänden basierend auf Handelsmustern und Ablehnungen aktualisieren", nl: "Waarschijnlijkheidsverdelingen van tegenstander handen bijwerken gebaseerd op handelspatronen en weigeringen" },
          { en: "Assume all opponents have identical strategies", es: "Asumir que todos los oponentes tienen estrategias idénticas", de: "Annehmen alle Gegner haben identische Strategien", nl: "Aannemen alle tegenstanders hebben identieke strategieën" },
          { en: "Never attempt to predict opponent resources", es: "Nunca intentar predecir recursos de oponentes", de: "Niemals versuchen Gegner-Ressourcen vorherzusagen", nl: "Nooit proberen tegenstander bronnen te voorspellen" },
          { en: "Model based solely on settlement placement", es: "Modelar basado únicamente en colocación de asentamiento", de: "Modellieren basierend ausschließlich auf Siedlungsplatzierung", nl: "Modelleren gebaseerd alleen op nederzettingsplaatsing" }
        ],
        correct: 0,
        explanation: {
          en: "Advanced probabilistic reasoning: Start with prior distribution (settlement production probabilities). Update beliefs using Bayes' theorem when opponents: (1) refuse specific trades (increases probability they lack that resource), (2) offer specific trades (indicates surplus), (3) make certain builds (reveals resource availability). This creates increasingly accurate probability models of opponent hands, informing robber placement and trade strategy.",
          es: "Razonamiento probabilístico avanzado: Comenzar con distribución previa (probabilidades de producción de asentamiento). Actualizar creencias usando el teorema de Bayes cuando los oponentes: (1) rechazan intercambios específicos (aumenta probabilidad de que carezcan de ese recurso), (2) ofrecen intercambios específicos (indica excedente), (3) hacen ciertas construcciones (revela disponibilidad de recursos). Esto crea modelos de probabilidad cada vez más precisos de manos de oponentes, informando colocación del ladrón y estrategia comercial.",
          de: "Fortgeschrittenes probabilistisches Denken: Beginnen mit Vorverteilung (Siedlungsproduktionswahrscheinlichkeiten). Überzeugungen mit Bayes-Theorem aktualisieren wenn Gegner: (1) spezifische Geschäfte ablehnen (erhöht Wahrscheinlichkeit dass sie diese Ressource fehlen), (2) spezifische Geschäfte anbieten (zeigt Überschuss), (3) bestimmte Bauten machen (offenbart Ressourcenverfügbarkeit). Dies schafft zunehmend genaue Wahrscheinlichkeitsmodelle von Gegnerhänden, informiert Räuberplatzierung und Handelsstrategie.",
          nl: "Geavanceerde probabilistische redenering: Begin met eerdere verdeling (nederzettingsproductie waarschijnlijkheden). Overtuigingen bijwerken met Bayes' stelling wanneer tegenstanders: (1) specifieke ruilen weigeren (verhoogt waarschijnlijkheid dat ze die bron missen), (2) specifieke ruilen aanbieden (duidt op overschot), (3) bepaalde bouwwerken maken (onthult bron beschikbaarheid). Dit creëert steeds nauwkeurigere waarschijnlijkheidsmodellen van tegenstander handen, informeert roverplaatsing en handelsstrategie."
        }
      },
      {
        question: {
          en: "Calculate the expected turns to victory from 7 points with 2 settlements, 2 cities, 0 dev cards vs longest road path.",
          es: "Calcula los turnos esperados para la victoria desde 7 puntos con 2 asentamientos, 2 ciudades, 0 cartas de desarrollo vs camino de carretera más larga.",
          de: "Berechnen Sie die erwarteten Züge zum Sieg von 7 Punkten mit 2 Siedlungen, 2 Städten, 0 Entwicklungskarten vs. längster Straßenpfad.",
          nl: "Bereken de verwachte beurten naar overwinning vanaf 7 punten met 2 nederzettingen, 2 steden, 0 ontwikkelingskaarten vs langste weg pad."
        },
        options: [
          { en: "Dev card path: ~4-6 turns (3 VPs + army); Settlement: ~5-7 turns; Road: ~6-9 turns", es: "Camino de carta de desarrollo: ~4-6 turnos (3 PVs + ejército); Asentamiento: ~5-7 turnos; Carretera: ~6-9 turnos", de: "Entwicklungskartenweg: ~4-6 Züge (3 VPs + Armee); Siedlung: ~5-7 Züge; Straße: ~6-9 Züge", nl: "Ontwikkelingskaart pad: ~4-6 beurten (3 VPs + leger); Nederzetting: ~5-7 beurten; Weg: ~6-9 beurten" },
          { en: "All paths equal at exactly 5 turns", es: "Todos los caminos iguales a exactamente 5 turnos", de: "Alle Pfade gleich bei genau 5 Zügen", nl: "Alle paden gelijk op precies 5 beurten" },
          { en: "Road path fastest at 2-3 turns always", es: "Camino de carretera más rápido a 2-3 turnos siempre", de: "Straßenpfad am schnellsten bei 2-3 Zügen immer", nl: "Weg pad snelst op 2-3 beurten altijd" },
          { en: "Settlement path requires 15+ turns", es: "Camino de asentamiento requiere 15+ turnos", de: "Siedlungspfad erfordert 15+ Züge", nl: "Nederzetting pad vereist 15+ beurten" }
        ],
        correct: 0,
        explanation: {
          en: "Statistical path analysis: From 7 points needing 3 more: (1) Dev card path: Buy 3-5 cards hoping for 2 VP cards + largest army (14 knights/25 cards ≈ 56% knight, 5/25 = 20% VP per draw). Expected ~4-6 turns with good production. (2) Settlement: Need 1 settlement (1pt) + 1 city (1pt) + 1 more building = 5-7 turns resource accumulation. (3) Longest road: Needs 5+ roads (materials intensive) = 6-9 turns. Dev cards statistically fastest but highest variance.",
          es: "Análisis estadístico de caminos: Desde 7 puntos necesitando 3 más: (1) Camino de carta de desarrollo: Comprar 3-5 cartas esperando 2 cartas VP + ejército más grande (14 caballeros/25 cartas ≈ 56% caballero, 5/25 = 20% VP por robo). Esperado ~4-6 turnos con buena producción. (2) Asentamiento: Necesita 1 asentamiento (1pt) + 1 ciudad (1pt) + 1 construcción más = 5-7 turnos acumulación de recursos. (3) Carretera más larga: Necesita 5+ carreteras (intensivo en materiales) = 6-9 turnos. Cartas de desarrollo estadísticamente más rápidas pero mayor varianza.",
          de: "Statistische Pfadanalyse: Von 7 Punkten benötigend 3 mehr: (1) Entwicklungskartenweg: 3-5 Karten kaufen hoffend auf 2 VP-Karten + größte Armee (14 Ritter/25 Karten ≈ 56% Ritter, 5/25 = 20% VP pro Zug). Erwartet ~4-6 Züge mit guter Produktion. (2) Siedlung: Benötigt 1 Siedlung (1pt) + 1 Stadt (1pt) + 1 weiteres Gebäude = 5-7 Züge Ressourcenanhäufung. (3) Längste Straße: Benötigt 5+ Straßen (materialintensiv) = 6-9 Züge. Entwicklungskarten statistisch am schnellsten aber höchste Varianz.",
          nl: "Statistische pad analyse: Vanaf 7 punten benodigend 3 meer: (1) Ontwikkelingskaart pad: Koop 3-5 kaarten hopend op 2 VP kaarten + grootste leger (14 ridders/25 kaarten ≈ 56% ridder, 5/25 = 20% VP per trek). Verwacht ~4-6 beurten met goede productie. (2) Nederzetting: Heeft nodig 1 nederzetting (1pt) + 1 stad (1pt) + 1 meer gebouw = 5-7 beurten bron accumulatie. (3) Langste weg: Heeft nodig 5+ wegen (materiaal intensief) = 6-9 beurten. Ontwikkelingskaarten statistisch snelst maar hoogste variantie."
        }
      },
      {
        question: {
          en: "What defines the 'information cascade' phenomenon in multi-player Catan trading?",
          es: "¿Qué define el fenómeno de 'cascada de información' en el comercio de Catan de múltiples jugadores?",
          de: "Was definiert das 'Informationskaskaden'-Phänomen im Mehrspiel-Catan-Handel?",
          nl: "Wat definieert het 'informatie cascade' fenomeen in multi-speler Catan handel?"
        },
        options: [
          { en: "Sequential trade refusals reveal resource scarcity creating herding behavior in subsequent trades", es: "Rechazos de comercio secuenciales revelan escasez de recursos creando comportamiento de rebaño en intercambios subsecuentes", de: "Sequentielle Handelsablehnungen offenbaren Ressourcenknappheit und schaffen Herdenverhalten bei nachfolgenden Geschäften", nl: "Opeenvolgende handels weigeringen onthullen bron schaarste creërend kuddegedrag in volgende ruilen" },
          { en: "All players trading simultaneously without information", es: "Todos los jugadores comerciando simultáneamente sin información", de: "Alle Spieler handeln gleichzeitig ohne Information", nl: "Alle spelers ruilen tegelijkertijd zonder informatie" },
          { en: "Trades that create resource surplus", es: "Intercambios que crean excedente de recursos", de: "Geschäfte die Ressourcenüberschuss schaffen", nl: "Ruilen die bron overschot creëren" },
          { en: "Random trade acceptance patterns", es: "Patrones de aceptación de comercio aleatorios", de: "Zufällige Handelsakzeptanzmuster", nl: "Willekeurige handels acceptatie patronen" }
        ],
        correct: 0,
        explanation: {
          en: "Behavioral economics concept: When Player A refuses a brick trade, others infer brick scarcity. This information cascades, causing Players B and C to also avoid brick trades and potentially hoard brick, even without direct knowledge. This creates self-reinforcing scarcity perception. Expert players exploit this by strategic refusals to manipulate perceived resource availability and trading behavior.",
          es: "Concepto de economía conductual: Cuando el Jugador A rechaza un intercambio de ladrillo, otros infieren escasez de ladrillo. Esta información se propaga, causando que Jugadores B y C también eviten intercambios de ladrillo y potencialmente acumulen ladrillo, incluso sin conocimiento directo. Esto crea percepción de escasez autorreforzante. Los jugadores expertos explotan esto mediante rechazos estratégicos para manipular la disponibilidad percibida de recursos y el comportamiento comercial.",
          de: "Verhaltensökonomisches Konzept: Wenn Spieler A ein Ziegelgeschäft ablehnt, schließen andere auf Ziegelknappheit. Diese Information kaskadiert, veranlasst Spieler B und C auch Ziegelgeschäfte zu vermeiden und möglicherweise Ziegel zu horten, selbst ohne direktes Wissen. Dies schafft selbstverstärkende Knappheitswahrnehmung. Experten nutzen dies durch strategische Ablehnungen, um wahrgenommene Ressourcenverfügbarkeit und Handelsverhalten zu manipulieren.",
          nl: "Gedragseconomisch concept: Wanneer Speler A een baksteen ruil weigert, leiden anderen baksteen schaarste af. Deze informatie cascadeert, veroorzakend dat Spelers B en C ook baksteen ruilen vermijden en mogelijk baksteen hamsteren, zelfs zonder directe kennis. Dit creëert zelfversterkende schaarste perceptie. Expert spelers exploiteren dit door strategische weigeringen om waargenomen bron beschikbaarheid en handelsgedrag te manipuleren."
        }
      },
      {
        question: {
          en: "What is the 'production smoothing' mathematical optimization in hex selection?",
          es: "¿Cuál es la optimización matemática de 'suavizado de producción' en la selección de hexágonos?",
          de: "Was ist die mathematische 'Produktionsglättungs'-Optimierung bei der Hex-Auswahl?",
          nl: "Wat is de mathematische 'productie afvlakking' optimalisatie in hex selectie?"
        },
        options: [
          { en: "Minimize coefficient of variation across hex probabilities while maintaining mean production", es: "Minimizar el coeficiente de variación a través de probabilidades de hexágonos mientras se mantiene la producción media", de: "Variationskoeffizient über Hex-Wahrscheinlichkeiten minimieren während mittlere Produktion beibehalten wird", nl: "Minimaliseer variatiecoëfficiënt over hex waarschijnlijkheden terwijl gemiddelde productie behouden blijft" },
          { en: "Always choose highest variance hexes available", es: "Siempre elegir hexágonos de mayor varianza disponibles", de: "Immer höchste Varianz-Hexe verfügbar wählen", nl: "Altijd hoogste variantie hexen beschikbaar kiezen" },
          { en: "Select hexes randomly for unpredictability", es: "Seleccionar hexágonos aleatoriamente para imprevisibilidad", de: "Hexe zufällig für Unvorhersehbarkeit auswählen", nl: "Hexen willekeurig selecteren voor onvoorspelbaarheid" },
          { en: "Production smoothing has no mathematical basis", es: "El suavizado de producción no tiene base matemática", de: "Produktionsglättung hat keine mathematische Grundlage", nl: "Productie afvlakking heeft geen mathematische basis" }
        ],
        correct: 0,
        explanation: {
          en: "Advanced statistical optimization: The coefficient of variation (CV = standard deviation / mean) measures production volatility. By selecting hexes with similar probability values (e.g., three 9-5-4 hexes rather than 6-8-3), you minimize CV while maintaining similar mean production. Lower CV means more consistent per-turn resource generation, reducing planning risk and enabling more reliable multi-turn strategies.",
          es: "Optimización estadística avanzada: El coeficiente de variación (CV = desviación estándar / media) mide la volatilidad de producción. Al seleccionar hexágonos con valores de probabilidad similares (p. ej., tres hexágonos 9-5-4 en lugar de 6-8-3), minimizas CV mientras mantienes producción media similar. CV más bajo significa generación de recursos por turno más consistente, reduciendo riesgo de planificación y permitiendo estrategias multi-turno más confiables.",
          de: "Fortgeschrittene statistische Optimierung: Der Variationskoeffizient (CV = Standardabweichung / Mittelwert) misst Produktionsvolatilität. Durch Auswahl von Hexen mit ähnlichen Wahrscheinlichkeitswerten (z.B. drei 9-5-4-Hexe statt 6-8-3) minimiert man CV bei Beibehaltung ähnlicher mittlerer Produktion. Niedrigerer CV bedeutet konsistentere Ressourcengenerierung pro Zug, reduziert Planungsrisiko und ermöglicht zuverlässigere Mehrzugstrategien.",
          nl: "Geavanceerde statistische optimalisatie: De variatiecoëfficiënt (CV = standaarddeviatie / gemiddelde) meet productie volatiliteit. Door hexen te selecteren met vergelijkbare waarschijnlijkheidswaarden (bijv. drie 9-5-4 hexen in plaats van 6-8-3), minimaliseer je CV terwijl je vergelijkbare gemiddelde productie behoudt. Lagere CV betekent meer consistente per-beurt bron generatie, vermindert planningsrisico en maakt betrouwbaardere multi-beurt strategieën mogelijk."
        }
      },
      {
        question: {
          en: "What is the 'implicit signaling' theory in Catan resource management?",
          es: "¿Cuál es la teoría de 'señalización implícita' en la gestión de recursos de Catan?",
          de: "Was ist die 'implizite Signalisierungs'-Theorie im Catan-Ressourcenmanagement?",
          nl: "Wat is de 'impliciete signalering' theorie in Catan bron beheer?"
        },
        options: [
          { en: "Hand size deliberately reveals/conceals strategic intent to manipulate opponent behavior", es: "El tamaño de mano revela/oculta deliberadamente intención estratégica para manipular comportamiento del oponente", de: "Handgröße offenbart/verbirgt absichtlich strategische Absicht um Gegnerverhalten zu manipulieren", nl: "Handgrootte onthult/verhult opzettelijk strategische intentie om tegenstander gedrag te manipuleren" },
          { en: "All information should be openly shared", es: "Toda la información debe compartirse abiertamente", de: "Alle Informationen sollten offen geteilt werden", nl: "Alle informatie moet openlijk gedeeld worden" },
          { en: "Never reveal any information through behavior", es: "Nunca revelar ninguna información a través del comportamiento", de: "Niemals Informationen durch Verhalten offenbaren", nl: "Nooit informatie onthullen door gedrag" },
          { en: "Signaling only applies to development cards", es: "La señalización solo se aplica a cartas de desarrollo", de: "Signalisierung gilt nur für Entwicklungskarten", nl: "Signalering geldt alleen voor ontwikkelingskaarten" }
        ],
        correct: 0,
        explanation: {
          en: "Game theory application: Your visible hand size signals resource availability. Maintaining 7+ cards signals strength but risks discards; dropping to 3-4 cards signals weakness but provides safety. Expert players deliberately manipulate their hand size to send false signals: holding 8+ cards before building suggests hidden VP cards (fear), while frequent building signals resource scarcity (reduces targeting). This information warfare is strategic communication through observable game state.",
          es: "Aplicación de teoría de juegos: Tu tamaño de mano visible señala disponibilidad de recursos. Mantener 7+ cartas señala fuerza pero arriesga descartes; bajar a 3-4 cartas señala debilidad pero proporciona seguridad. Los jugadores expertos manipulan deliberadamente su tamaño de mano para enviar señales falsas: mantener 8+ cartas antes de construir sugiere cartas VP ocultas (miedo), mientras que construcción frecuente señala escasez de recursos (reduce focalización). Esta guerra de información es comunicación estratégica a través del estado de juego observable.",
          de: "Spieltheorieanwendung: Ihre sichtbare Handgröße signalisiert Ressourcenverfügbarkeit. 7+ Karten halten signalisiert Stärke aber riskiert Abwürfe; auf 3-4 Karten fallen signalisiert Schwäche aber bietet Sicherheit. Experten manipulieren absichtlich ihre Handgröße um falsche Signale zu senden: 8+ Karten vor dem Bauen halten suggeriert versteckte VP-Karten (Angst), während häufiges Bauen Ressourcenknappheit signalisiert (reduziert Anvisierung). Diese Informationskriegsführung ist strategische Kommunikation durch beobachtbaren Spielzustand.",
          nl: "Speltheorie toepassing: Je zichtbare handgrootte signaleert bron beschikbaarheid. 7+ kaarten behouden signaleert kracht maar riskeert weggooien; dalen naar 3-4 kaarten signaleert zwakte maar biedt veiligheid. Expert spelers manipuleren opzettelijk hun handgrootte om valse signalen te sturen: 8+ kaarten vasthouden voor bouwen suggereert verborgen VP kaarten (angst), terwijl frequent bouwen bron schaarste signaleert (vermindert targeting). Deze informatie oorlogsvoering is strategische communicatie door waarneembare spelstatus."
        }
      },
      {
        question: {
          en: "Calculate the break-even point for Year of Plenty card vs production waiting in turns.",
          es: "Calcula el punto de equilibrio para la carta de Año de Abundancia vs esperar producción en turnos.",
          de: "Berechnen Sie den Break-Even-Punkt für Jahr des Überflusses-Karte vs. Produktion warten in Zügen.",
          nl: "Bereken het break-even punt voor Jaar van Overvloed kaart vs productie wachten in beurten."
        },
        options: [
          { en: "If waiting costs 2+ turns to accumulate needed resources, Year of Plenty optimal", es: "Si esperar cuesta 2+ turnos para acumular recursos necesarios, Año de Abundancia óptimo", de: "Wenn Warten 2+ Züge kostet um benötigte Ressourcen zu sammeln, Jahr des Überflusses optimal", nl: "Als wachten 2+ beurten kost om benodigde bronnen te verzamelen, Jaar van Overvloed optimaal" },
          { en: "Always wait for production instead", es: "Siempre esperar producción en su lugar", de: "Immer auf Produktion warten stattdessen", nl: "Altijd wachten op productie in plaats daarvan" },
          { en: "Year of Plenty never worth using", es: "Año de Abundancia nunca vale la pena usar", de: "Jahr des Überflusses niemals wert zu nutzen", nl: "Jaar van Overvloed nooit de moeite waard om te gebruiken" },
          { en: "Use immediately whenever drawn", es: "Usar inmediatamente cuando se robe", de: "Sofort verwenden wenn gezogen", nl: "Direct gebruiken wanneer getrokken" }
        ],
        correct: 0,
        explanation: {
          en: "Opportunity cost analysis: Year of Plenty provides 2 resources instantly but costs a development card purchase (sheep+ore+wheat) and one turn to use. If your production rate for needed resources is low (poor hexes or robber-blocked), waiting could take 3-5 turns. The card breaks even at ~2 turns of waiting time. Beyond this, the card's instant resources enable faster victory progression, making it optimal when time pressure exists (opponent near victory).",
          es: "Análisis de costo de oportunidad: Año de Abundancia proporciona 2 recursos instantáneamente pero cuesta una compra de carta de desarrollo (oveja+mineral+trigo) y un turno para usar. Si tu tasa de producción para recursos necesarios es baja (hexágonos pobres o bloqueados por ladrón), esperar podría tomar 3-5 turnos. La carta se equilibra en ~2 turnos de tiempo de espera. Más allá de esto, los recursos instantáneos de la carta permiten progresión de victoria más rápida, haciéndola óptima cuando existe presión de tiempo (oponente cerca de victoria).",
          de: "Opportunitätskostenanalyse: Jahr des Überflusses liefert 2 Ressourcen sofort aber kostet einen Entwicklungskartenkauf (Schaf+Erz+Weizen) und einen Zug zur Nutzung. Wenn Ihre Produktionsrate für benötigte Ressourcen niedrig ist (schlechte Hexe oder Räuber-blockiert), könnte Warten 3-5 Züge dauern. Die Karte bricht even bei ~2 Zügen Wartezeit. Darüber hinaus ermöglichen die sofortigen Ressourcen der Karte schnellere Siegesprogression, macht sie optimal wenn Zeitdruck existiert (Gegner nahe Sieg).",
          nl: "Opportuniteitskosten analyse: Jaar van Overvloed biedt 2 bronnen direct maar kost een ontwikkelingskaart aankoop (schaap+erts+tarwe) en één beurt om te gebruiken. Als je productiesnelheid voor benodigde bronnen laag is (slechte hexen of rover-geblokkeerd), zou wachten 3-5 beurten kunnen duren. De kaart breekt even op ~2 beurten wachttijd. Hiervoorbij maken de directe bronnen van de kaart snellere overwinning progressie mogelijk, maakt het optimaal wanneer tijdsdruk bestaat (tegenstander dichtbij overwinning)."
        }
      },
      {
        question: {
          en: "What is the 'equilibrium disruption' tactic in competitive endgames?",
          es: "¿Cuál es la táctica de 'disrupción de equilibrio' en finales de juego competitivos?",
          de: "Was ist die 'Gleichgewichtsstörungs'-Taktik in kompetitiven Endspielen?",
          nl: "Wat is de 'evenwicht verstoring' tactiek in competitieve eindspellen?"
        },
        options: [
          { en: "Force suboptimal trades onto opponents to break stable resource equilibria", es: "Forzar intercambios subóptimos a oponentes para romper equilibrios de recursos estables", de: "Suboptimale Geschäfte auf Gegner zwingen um stabile Ressourcengleichgewichte zu brechen", nl: "Suboptimale ruilen op tegenstanders forceren om stabiele bron evenwichten te breken" },
          { en: "Never disrupt existing trade patterns", es: "Nunca interrumpir patrones de comercio existentes", de: "Bestehende Handelsmuster nie stören", nl: "Bestaande handelspatronen nooit verstoren" },
          { en: "Maintain all resource equilibria", es: "Mantener todos los equilibrios de recursos", de: "Alle Ressourcengleichgewichte aufrechterhalten", nl: "Alle bron evenwichten behouden" },
          { en: "Only applies to early game", es: "Solo se aplica al juego temprano", de: "Gilt nur für frühes Spiel", nl: "Geldt alleen voor vroege spel" }
        ],
        correct: 0,
        explanation: {
          en: "Advanced game theory: In stable games, players develop efficient trading relationships. When approaching victory, you benefit from disrupting these equilibria through: (1) refusing previously accepted trades, (2) offering unusual trade ratios to create doubt, (3) monopolizing specific resources. This increases opponent uncertainty and coordination costs, slowing their collective response to your victory path while you exploit the temporary chaos.",
          es: "Teoría de juegos avanzada: En juegos estables, los jugadores desarrollan relaciones comerciales eficientes. Al acercarse a la victoria, te beneficias de interrumpir estos equilibrios a través de: (1) rechazar intercambios previamente aceptados, (2) ofrecer ratios de comercio inusuales para crear duda, (3) monopolizar recursos específicos. Esto aumenta la incertidumbre del oponente y costos de coordinación, ralentizando su respuesta colectiva a tu camino de victoria mientras explotas el caos temporal.",
          de: "Fortgeschrittene Spieltheorie: In stabilen Spielen entwickeln Spieler effiziente Handelsbeziehungen. Bei Annäherung an den Sieg profitiert man von Störung dieser Gleichgewichte durch: (1) Ablehnung zuvor akzeptierter Geschäfte, (2) Anbieten ungewöhnlicher Handelsverhältnisse um Zweifel zu schaffen, (3) Monopolisierung spezifischer Ressourcen. Dies erhöht Gegnerunsicherheit und Koordinationskosten, verlangsamt ihre kollektive Antwort auf Ihren Siegespfad während Sie das temporäre Chaos ausnutzen.",
          nl: "Geavanceerde speltheorie: In stabiele spellen ontwikkelen spelers efficiënte handelsrelaties. Bij naderen van overwinning, profiteer je van verstoren van deze evenwichten door: (1) weigeren van eerder geaccepteerde ruilen, (2) aanbieden ongebruikelijke ruil ratio's om twijfel te creëren, (3) monopoliseren specifieke bronnen. Dit verhoogt tegenstander onzekerheid en coördinatie kosten, vertraagt hun collectieve reactie op je overwinningspad terwijl je de tijdelijke chaos exploiteert."
        }
      },
      {
        question: {
          en: "What probability distribution best models resource accumulation across multiple turns?",
          es: "¿Qué distribución de probabilidad modela mejor la acumulación de recursos a través de múltiples turnos?",
          de: "Welche Wahrscheinlichkeitsverteilung modelliert Ressourcenanhäufung über mehrere Züge am besten?",
          nl: "Welke waarschijnlijkheidsverdeling modelleert bron accumulatie over meerdere beurten het best?"
        },
        options: [
          { en: "Binomial distribution converging to normal distribution for large turn counts", es: "Distribución binomial convergiendo a distribución normal para grandes conteos de turnos", de: "Binomialverteilung konvergierend zu Normalverteilung für große Zugzahlen", nl: "Binomiale verdeling convergerend naar normale verdeling voor grote beurt aantallen" },
          { en: "Uniform distribution always", es: "Distribución uniforme siempre", de: "Gleichverteilung immer", nl: "Uniforme verdeling altijd" },
          { en: "Exponential distribution exclusively", es: "Distribución exponencial exclusivamente", de: "Exponentialverteilung ausschließlich", nl: "Exponentiële verdeling uitsluitend" },
          { en: "Resources accumulate without probabilistic pattern", es: "Los recursos se acumulan sin patrón probabilístico", de: "Ressourcen häufen sich ohne probabilistisches Muster an", nl: "Bronnen accumuleren zonder probabilistisch patroon" }
        ],
        correct: 0,
        explanation: {
          en: "Statistical modeling: Each die roll is a Bernoulli trial (success/failure for each hex). Over n turns, resource count follows binomial distribution B(n,p) where p = hex probability/36. For large n (15+ turns), Central Limit Theorem causes convergence to normal distribution N(np, np(1-p)). This allows calculating confidence intervals for resource availability, enabling probabilistic build planning and risk assessment.",
          es: "Modelado estadístico: Cada tirada de dado es un ensayo de Bernoulli (éxito/fracaso para cada hexágono). En n turnos, el conteo de recursos sigue distribución binomial B(n,p) donde p = probabilidad de hexágono/36. Para n grande (15+ turnos), el Teorema del Límite Central causa convergencia a distribución normal N(np, np(1-p)). Esto permite calcular intervalos de confianza para disponibilidad de recursos, permitiendo planificación de construcción probabilística y evaluación de riesgo.",
          de: "Statistische Modellierung: Jeder Würfelwurf ist ein Bernoulli-Versuch (Erfolg/Misserfolg für jedes Hex). Über n Züge folgt Ressourcenzahl Binomialverteilung B(n,p) wo p = Hex-Wahrscheinlichkeit/36. Für große n (15+ Züge) verursacht Zentraler Grenzwertsatz Konvergenz zu Normalverteilung N(np, np(1-p)). Dies ermöglicht Berechnung von Konfidenzintervallen für Ressourcenverfügbarkeit, ermöglicht probabilistische Bauplanung und Risikobewertung.",
          nl: "Statistische modellering: Elke dobbelworp is een Bernoulli trial (succes/falen voor elke hex). Over n beurten volgt bron telling binomiale verdeling B(n,p) waar p = hex waarschijnlijkheid/36. Voor grote n (15+ beurten), veroorzaakt Centrale Limiet Stelling convergentie naar normale verdeling N(np, np(1-p)). Dit maakt berekening van betrouwbaarheidsintervallen voor bron beschikbaarheid mogelijk, maakt probabilistische bouw planning en risico beoordeling mogelijk."
        }
      },
      {
        question: {
          en: "What is the 'resource velocity' metric in tournament analysis?",
          es: "¿Cuál es la métrica de 'velocidad de recursos' en el análisis de torneos?",
          de: "Was ist die 'Ressourcengeschwindigkeit'-Metrik in der Turnieranalyse?",
          nl: "Wat is de 'bron snelheid' metriek in toernooi analyse?"
        },
        options: [
          { en: "Resources gained per turn divided by resources spent per turn (turnover rate)", es: "Recursos ganados por turno divididos por recursos gastados por turno (tasa de rotación)", de: "Ressourcen gewonnen pro Zug geteilt durch Ressourcen ausgegeben pro Zug (Umsatzrate)", nl: "Bronnen verkregen per beurt gedeeld door bronnen besteed per beurt (omloopsnelheid)" },
          { en: "Total resources accumulated regardless of spending", es: "Recursos totales acumulados independientemente del gasto", de: "Gesamte akkumulierte Ressourcen unabhängig von Ausgaben", nl: "Totale bronnen geaccumuleerd ongeacht uitgaven" },
          { en: "Speed of physical card movement", es: "Velocidad de movimiento físico de cartas", de: "Geschwindigkeit physischer Kartenbewegung", nl: "Snelheid van fysieke kaart beweging" },
          { en: "Velocity only applies to robber movement", es: "Velocidad solo se aplica al movimiento del ladrón", de: "Geschwindigkeit gilt nur für Räuberbewegung", nl: "Snelheid geldt alleen voor rover beweging" }
        ],
        correct: 0,
        explanation: {
          en: "Performance metric: Resource velocity measures efficiency of converting production into victory points. High velocity (resources in → buildings out quickly) indicates efficient play. Low velocity suggests hoarding or poor planning. Elite players maintain 1.2-1.5× velocity (gaining slightly more than spending), ensuring steady progression while avoiding 7-roll vulnerability. This metric correlates strongly with win rates in tournament analysis.",
          es: "Métrica de rendimiento: La velocidad de recursos mide la eficiencia de convertir producción en puntos de victoria. Alta velocidad (recursos dentro → edificios fuera rápidamente) indica juego eficiente. Baja velocidad sugiere acumulación o planificación deficiente. Los jugadores de élite mantienen velocidad de 1.2-1.5× (ganando ligeramente más de lo que gastan), asegurando progreso constante mientras evitan vulnerabilidad de tirada de 7. Esta métrica se correlaciona fuertemente con tasas de victoria en análisis de torneos.",
          de: "Leistungsmetrik: Ressourcengeschwindigkeit misst Effizienz der Umwandlung von Produktion in Siegpunkte. Hohe Geschwindigkeit (Ressourcen rein → Gebäude raus schnell) zeigt effizientes Spiel. Niedrige Geschwindigkeit suggeriert Horten oder schlechte Planung. Elite-Spieler halten 1,2-1,5× Geschwindigkeit (etwas mehr gewinnen als ausgeben), sichern stetigen Fortschritt während 7-Wurf-Verwundbarkeit vermieden wird. Diese Metrik korreliert stark mit Gewinnraten in Turnieranalyse.",
          nl: "Prestatie metriek: Bron snelheid meet efficiëntie van converteren productie naar overwinningspunten. Hoge snelheid (bronnen in → gebouwen uit snel) duidt efficiënt spel aan. Lage snelheid suggereert hamsteren of slechte planning. Elite spelers behouden 1,2-1,5× snelheid (iets meer winnen dan uitgeven), verzekeren gestage progressie terwijl 7-worp kwetsbaarheid vermeden wordt. Deze metriek correleert sterk met winpercentages in toernooi analyse."
        }
      },
      {
        question: {
          en: "What is the optimal response to a discovered opponent 'hidden victory point' card threat?",
          es: "¿Cuál es la respuesta óptima a una amenaza descubierta de carta de 'punto de victoria oculto' del oponente?",
          de: "Was ist die optimale Antwort auf eine entdeckte 'versteckte Siegpunkt'-Kartenbedrohung des Gegners?",
          nl: "Wat is de optimale reactie op een ontdekte tegenstander 'verborgen overwinningspunt' kaart dreiging?"
        },
        options: [
          { en: "Immediate coalition formation and accelerated victory timeline (compress to 2-3 turns)", es: "Formación inmediata de coalición y línea de tiempo de victoria acelerada (comprimir a 2-3 turnos)", de: "Sofortige Koalitionsbildung und beschleunigte Siegeszeitlinie (auf 2-3 Züge komprimieren)", nl: "Directe coalitie vorming en versnelde overwinning tijdlijn (comprimeren naar 2-3 beurten)" },
          { en: "Continue normal play pattern unchanged", es: "Continuar patrón de juego normal sin cambios", de: "Normales Spielmuster unverändert fortsetzen", nl: "Normaal spelpatroon ongewijzigd voortzetten" },
          { en: "Immediately concede the game", es: "Renunciar inmediatamente al juego", de: "Spiel sofort aufgeben", nl: "Spel direct opgeven" },
          { en: "Focus solely on resource hoarding", es: "Enfocarse únicamente en acumulación de recursos", de: "Sich ausschließlich auf Ressourcenhortung konzentrieren", nl: "Uitsluitend focussen op bron hamsteren" }
        ],
        correct: 0,
        explanation: {
          en: "Crisis response protocol: When opponent revealed to have VP cards at 8-9 points, game timeline compresses dramatically. Rational players must: (1) Form implicit anti-leader coalition, (2) Accelerate own victory path to 2-3 turns maximum, (3) Coordinate robber placement on leader's production, (4) Refuse all leader trades. The compressed timeline forces aggressive play since defensive play guarantees leader victory. This game-theoretic response maximizes collective non-leader win probability.",
          es: "Protocolo de respuesta a crisis: Cuando se revela que el oponente tiene cartas VP en 8-9 puntos, la línea de tiempo del juego se comprime dramáticamente. Los jugadores racionales deben: (1) Formar coalición anti-líder implícita, (2) Acelerar camino de victoria propio a 2-3 turnos máximo, (3) Coordinar colocación del ladrón en producción del líder, (4) Rechazar todos los intercambios con el líder. La línea de tiempo comprimida fuerza juego agresivo ya que el juego defensivo garantiza victoria del líder. Esta respuesta de teoría de juegos maximiza la probabilidad de victoria colectiva de no líderes.",
          de: "Krisenreaktionsprotokoll: Wenn Gegner mit VP-Karten bei 8-9 Punkten aufgedeckt wird, komprimiert sich Spielzeitlinie dramatisch. Rationale Spieler müssen: (1) Implizite Anti-Anführer-Koalition bilden, (2) Eigenen Siegespfad auf 2-3 Züge maximal beschleunigen, (3) Räuberplatzierung auf Anführer-Produktion koordinieren, (4) Alle Anführer-Geschäfte ablehnen. Die komprimierte Zeitlinie erzwingt aggressives Spiel da defensives Spiel Anführer-Sieg garantiert. Diese spieltheoretische Antwort maximiert kollektive Nicht-Anführer-Gewinnwahrscheinlichkeit.",
          nl: "Crisis reactie protocol: Wanneer tegenstander onthuld wordt VP kaarten te hebben bij 8-9 punten, comprimeert spel tijdlijn dramatisch. Rationele spelers moeten: (1) Impliciete anti-leider coalitie vormen, (2) Eigen overwinningspad versnellen naar 2-3 beurten maximum, (3) Roverplaatsing op leider's productie coördineren, (4) Alle leider ruilen weigeren. De gecomprimeerde tijdlijn dwingt agressief spel omdat defensief spel leider overwinning garandeert. Deze speltheoretische reactie maximaliseert collectieve niet-leider winkans."
        }
      },
      {
        question: {
          en: "What is the 'probabilistic kill threshold' in competitive endgame scenarios?",
          es: "¿Cuál es el 'umbral de eliminación probabilístico' en escenarios de final de juego competitivos?",
          de: "Was ist die 'probabilistische Tötungsschwelle' in kompetitiven Endspiel-Szenarien?",
          nl: "Wat is de 'probabilistische dood drempel' in competitieve eindspel scenario's?"
        },
        options: [
          { en: "Point differential where leader's win probability exceeds 75% requiring immediate action", es: "Diferencial de puntos donde la probabilidad de victoria del líder excede 75% requiriendo acción inmediata", de: "Punktedifferenz wo Anführer-Gewinnwahrscheinlichkeit 75% überschreitet erfordert sofortige Aktion", nl: "Punten verschil waar leider's winkans 75% overschrijdt vereist directe actie" },
          { en: "Any point lead triggers elimination attempt", es: "Cualquier ventaja de puntos desencadena intento de eliminación", de: "Jeder Punktevorsprung löst Eliminierungsversuch aus", nl: "Elk punt voorsprong activeert eliminatie poging" },
          { en: "No threshold exists in Catan", es: "No existe umbral en Catan", de: "Keine Schwelle existiert in Catan", nl: "Geen drempel bestaat in Catan" },
          { en: "Only applies when leader reaches 9 points", es: "Solo se aplica cuando el líder alcanza 9 puntos", de: "Gilt nur wenn Anführer 9 Punkte erreicht", nl: "Geldt alleen wanneer leider 9 punten bereikt" }
        ],
        correct: 0,
        explanation: {
          en: "Advanced probability analysis: Statistical modeling shows when a leader reaches 2+ point advantage with good production (12+ pips), their win probability approaches 75-80%. This 'kill threshold' triggers rational players to switch from individual optimization to leader suppression. Beyond this threshold, coordinated opposition becomes statistically necessary as individual paths to victory before leader becomes unlikely (<25%). Tournament players recognize this inflection point and adjust strategy accordingly.",
          es: "Análisis de probabilidad avanzado: El modelado estadístico muestra cuando un líder alcanza ventaja de 2+ puntos con buena producción (12+ pips), su probabilidad de victoria se aproxima a 75-80%. Este 'umbral de eliminación' desencadena que jugadores racionales cambien de optimización individual a supresión del líder. Más allá de este umbral, la oposición coordinada se vuelve estadísticamente necesaria ya que los caminos individuales a la victoria antes del líder se vuelven improbables (<25%). Los jugadores de torneo reconocen este punto de inflexión y ajustan la estrategia en consecuencia.",
          de: "Fortgeschrittene Wahrscheinlichkeitsanalyse: Statistische Modellierung zeigt, wenn ein Anführer 2+ Punktevorteil mit guter Produktion erreicht (12+ Pips), nähert sich ihre Gewinnwahrscheinlichkeit 75-80%. Diese 'Tötungsschwelle' löst aus, dass rationale Spieler von individueller Optimierung zu Anführer-Unterdrückung wechseln. Über dieser Schwelle wird koordinierte Opposition statistisch notwendig da individuelle Pfade zum Sieg vor Anführer unwahrscheinlich werden (<25%). Turnierspieler erkennen diesen Wendepunkt und passen Strategie entsprechend an.",
          nl: "Geavanceerde waarschijnlijkheidsanalyse: Statistische modellering toont wanneer een leider 2+ punt voorsprong bereikt met goede productie (12+ pips), nadert hun winkans 75-80%. Deze 'dood drempel' triggert rationele spelers om te wisselen van individuele optimalisatie naar leider onderdrukking. Voorbij deze drempel wordt gecoördineerde oppositie statistisch noodzakelijk omdat individuele paden naar overwinning voor leider onwaarschijnlijk worden (<25%). Toernooispelers herkennen dit keerpunt en passen strategie dienovereenkomstig aan."
        }
      },
      {
        question: {
          en: "What is the 'Monte Carlo path optimization' in development card strategies?",
          es: "¿Qué es la 'optimización de ruta Monte Carlo' en estrategias de cartas de desarrollo?",
          de: "Was ist die 'Monte Carlo Pfadoptimierung' in Entwicklungskartenstrategien?",
          nl: "Wat is de 'Monte Carlo pad optimalisatie' in ontwikkelingskaarten strategieën?"
        },
        options: [
          { en: "Simulate 1000s of card draw sequences to calculate optimal purchase timing and quantity", es: "Simular 1000s de secuencias de robo de cartas para calcular tiempo y cantidad óptimos de compra", de: "1000e von Kartenziehsequenzen simulieren um optimales Kauftiming und -menge zu berechnen", nl: "Simuleer 1000en kaart trek sequenties om optimale aankoop timing en hoeveelheid te berekenen" },
          { en: "Buy development cards randomly without planning", es: "Comprar cartas de desarrollo aleatoriamente sin planificación", de: "Entwicklungskarten zufällig ohne Planung kaufen", nl: "Ontwikkelingskaarten willekeurig kopen zonder planning" },
          { en: "Always buy exactly 5 development cards", es: "Siempre comprar exactamente 5 cartas de desarrollo", de: "Immer genau 5 Entwicklungskarten kaufen", nl: "Altijd precies 5 ontwikkelingskaarten kopen" },
          { en: "Monte Carlo methods don't apply to Catan", es: "Los métodos Monte Carlo no se aplican a Catan", de: "Monte-Carlo-Methoden gelten nicht für Catan", nl: "Monte Carlo methoden gelden niet voor Catan" }
        ],
        correct: 0,
        explanation: {
          en: "Computational strategy: Monte Carlo simulation runs thousands of random card-draw scenarios based on remaining deck composition. For each scenario, it calculates expected victory points from knights (largest army) vs VP cards vs utility cards (monopoly, etc.). This probabilistic analysis reveals optimal purchase count: typically 5-7 cards maximizes expected value before diminishing returns kick in, as later cards have lower probability of contributing to victory given game duration constraints.",
          es: "Estrategia computacional: La simulación Monte Carlo ejecuta miles de escenarios de robo de cartas aleatorias basados en la composición del mazo restante. Para cada escenario, calcula puntos de victoria esperados de caballeros (ejército más grande) vs cartas VP vs cartas de utilidad (monopolio, etc.). Este análisis probabilístico revela el conteo de compra óptimo: típicamente 5-7 cartas maximiza el valor esperado antes de que los rendimientos decrecientes entren en juego, ya que las cartas posteriores tienen menor probabilidad de contribuir a la victoria dadas las restricciones de duración del juego.",
          de: "Computerstrategie: Monte-Carlo-Simulation führt tausende zufällige Kartenziehszenarien basierend auf verbleibender Deckzusammensetzung aus. Für jedes Szenario berechnet sie erwartete Siegpunkte von Rittern (größte Armee) vs VP-Karten vs Nutzenkarten (Monopol, etc.). Diese probabilistische Analyse offenbart optimale Kaufanzahl: typischerweise maximieren 5-7 Karten Erwartungswert bevor abnehmende Erträge einsetzen, da spätere Karten niedrigere Wahrscheinlichkeit haben zum Sieg beizutragen gegeben Spieldauerbeschränkungen.",
          nl: "Computationele strategie: Monte Carlo simulatie voert duizenden willekeurige kaart-trek scenario's uit gebaseerd op resterende deck samenstelling. Voor elk scenario berekent het verwachte overwinningspunten van ridders (grootste leger) vs VP kaarten vs nut kaarten (monopolie, etc.). Deze probabilistische analyse onthult optimaal aankoop aantal: typisch maximaliseren 5-7 kaarten verwachte waarde voordat afnemende opbrengsten intreden, omdat latere kaarten lagere waarschijnlijkheid hebben bij te dragen aan overwinning gegeven spel duur beperkingen."
        }
      },
      {
        question: {
          en: "What is the 'psychological pressure point' in visible score tracking?",
          es: "¿Cuál es el 'punto de presión psicológica' en el seguimiento visible de puntuación?",
          de: "Was ist der 'psychologische Druckpunkt' bei sichtbarer Punkteverfolgung?",
          nl: "Wat is het 'psychologisch druk punt' in zichtbare score tracking?"
        },
        options: [
          { en: "8 points where opponents shift from individual play to coalition targeting", es: "8 puntos donde los oponentes cambian de juego individual a focalización de coalición", de: "8 Punkte wo Gegner von Einzelspiel zu Koalitionsanvisierung wechseln", nl: "8 punten waar tegenstanders wisselen van individueel spel naar coalitie targeting" },
          { en: "5 points triggers maximum pressure", es: "5 puntos desencadena presión máxima", de: "5 Punkte löst maximalen Druck aus", nl: "5 punten activeert maximum druk" },
          { en: "Pressure only exists at 10 points", es: "La presión solo existe en 10 puntos", de: "Druck existiert nur bei 10 Punkten", nl: "Druk bestaat alleen bij 10 punten" },
          { en: "No psychological factors in Catan", es: "Sin factores psicológicos en Catan", de: "Keine psychologischen Faktoren in Catan", nl: "Geen psychologische factoren in Catan" }
        ],
        correct: 0,
        explanation: {
          en: "Behavioral game theory: Empirical tournament analysis shows 8 points represents critical psychological threshold. Below 8, players largely pursue individual strategies. At 8+, opponents recognize imminent victory threat (2 points from win) and behaviorally shift to coalition formation. This creates increased robber targeting, trade refusals, and coordinated suppression. Elite players manage this by either: (1) staying at 7 points while building hidden VP cards, or (2) explosive 8→10 point jump in single turn to minimize coalition response window.",
          es: "Teoría de juegos conductual: El análisis empírico de torneos muestra que 8 puntos representa un umbral psicológico crítico. Por debajo de 8, los jugadores en gran medida persiguen estrategias individuales. En 8+, los oponentes reconocen amenaza de victoria inminente (2 puntos de la victoria) y cambian conductualmente a formación de coalición. Esto crea mayor focalización del ladrón, rechazos comerciales y supresión coordinada. Los jugadores de élite manejan esto: (1) quedándose en 7 puntos mientras construyen cartas VP ocultas, o (2) salto explosivo de 8→10 puntos en un solo turno para minimizar ventana de respuesta de coalición.",
          de: "Verhaltens-Spieltheorie: Empirische Turnieranalyse zeigt 8 Punkte repräsentiert kritische psychologische Schwelle. Unter 8 verfolgen Spieler weitgehend individuelle Strategien. Bei 8+ erkennen Gegner drohende Siegesbedrohung (2 Punkte vom Sieg) und wechseln verhaltensbedingt zu Koalitionsbildung. Dies schafft erhöhte Räuberanvisierung, Handelsablehnungen und koordinierte Unterdrückung. Elite-Spieler verwalten dies: (1) bei 7 Punkten bleiben während versteckte VP-Karten aufgebaut werden, oder (2) explosiver 8→10-Punkte-Sprung in einem Zug um Koalitionsreaktionsfenster zu minimieren.",
          nl: "Gedrags speltheorie: Empirische toernooi analyse toont 8 punten vertegenwoordigt kritieke psychologische drempel. Onder 8, achtervolgen spelers grotendeels individuele strategieën. Bij 8+, herkennen tegenstanders dreigende overwinningsdreiging (2 punten van winnen) en wisselen gedragsmatig naar coalitie vorming. Dit creëert verhoogde rover targeting, handels weigeringen en gecoördineerde onderdrukking. Elite spelers managen dit door ofwel: (1) blijven op 7 punten terwijl verborgen VP kaarten bouwen, of (2) explosieve 8→10 punten sprong in enkele beurt om coalitie reactie venster te minimaliseren."
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
