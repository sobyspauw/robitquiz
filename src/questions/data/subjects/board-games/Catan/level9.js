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
      },
      {
        question: {
          en: "What is the 'resource arbitrage window' in harbor-based strategies?",
          es: "¿Qué es la 'ventana de arbitraje de recursos' en estrategias basadas en puertos?",
          de: "Was ist das 'Ressourcenarbitrage-Fenster' in hafenbasierten Strategien?",
          nl: "Wat is het 'bron arbitrage venster' in haven-gebaseerde strategieën?"
        },
        options: [
          { en: "Brief periods when harbor trades yield more value than 4:1 bank due to scarcity", es: "Períodos breves cuando los intercambios de puerto producen más valor que el banco 4:1 debido a la escasez", de: "Kurze Perioden wenn Hafengeschäfte mehr Wert als 4:1-Bank aufgrund von Knappheit bringen", nl: "Korte periodes wanneer haven ruilen meer waarde opleveren dan 4:1 bank door schaarste" },
          { en: "Harbors always inferior to bank trading", es: "Los puertos siempre inferiores al comercio bancario", de: "Häfen immer unterlegen gegenüber Bankhandel", nl: "Havens altijd inferieur aan bank handel" },
          { en: "Only exists in 6-player games", es: "Solo existe en juegos de 6 jugadores", de: "Existiert nur in 6-Spieler-Spielen", nl: "Bestaat alleen in 6-speler spellen" },
          { en: "Arbitrage prohibited by tournament rules", es: "Arbitraje prohibido por reglas de torneo", de: "Arbitrage durch Turnierregeln verboten", nl: "Arbitrage verboden door toernooi regels" }
        ],
        correct: 0,
        explanation: {
          en: "Economic theory application: When specific resources become scarce (e.g., ore shortage), 2:1 harbor value temporarily exceeds 4:1 bank. If opponents need ore desperately, your 2:1 ore harbor converts 2 sheep → 1 ore, then you can trade that ore for 3-4 other resources (effective 2:3 or 2:4 ratio). This arbitrage window closes when scarcity resolves. Elite players exploit these temporal inefficiencies for resource multiplication.",
          es: "Aplicación de teoría económica: Cuando recursos específicos se vuelven escasos (ej., escasez de mineral), el valor del puerto 2:1 excede temporalmente al banco 4:1. Si los oponentes necesitan mineral desesperadamente, tu puerto de mineral 2:1 convierte 2 ovejas → 1 mineral, luego puedes intercambiar ese mineral por 3-4 otros recursos (ratio efectivo 2:3 o 2:4). Esta ventana de arbitraje se cierra cuando la escasez se resuelve. Los jugadores de élite explotan estas ineficiencias temporales para multiplicación de recursos.",
          de: "Wirtschaftstheorie-Anwendung: Wenn spezifische Ressourcen knapp werden (z.B. Erzknappheit), übersteigt 2:1-Hafenwert vorübergehend 4:1-Bank. Wenn Gegner Erz dringend brauchen, wandelt Ihr 2:1-Erzhafen 2 Schafe → 1 Erz um, dann können Sie dieses Erz für 3-4 andere Ressourcen tauschen (effektives 2:3- oder 2:4-Verhältnis). Dieses Arbitragefenster schließt sich, wenn Knappheit sich auflöst. Elite-Spieler nutzen diese zeitlichen Ineffizienzen für Ressourcenvervielfachung.",
          nl: "Economische theorie toepassing: Wanneer specifieke bronnen schaars worden (bijv. erts schaarste), overschrijdt 2:1 haven waarde tijdelijk 4:1 bank. Als tegenstanders erts dringend nodig hebben, converteert je 2:1 erts haven 2 schapen → 1 erts, dan kun je dat erts ruilen voor 3-4 andere bronnen (effectieve 2:3 of 2:4 ratio). Dit arbitrage venster sluit wanneer schaarste oplost. Elite spelers exploiteren deze tijdelijke inefficiënties voor bron vermenigvuldiging."
        }
      },
      {
        question: {
          en: "Calculate expected value difference between 3:1 harbor and no harbor over 30-turn game.",
          es: "Calcula la diferencia de valor esperado entre puerto 3:1 y sin puerto durante un juego de 30 turnos.",
          de: "Berechnen Sie Erwartungswert-Differenz zwischen 3:1-Hafen und ohne Hafen über 30-Züge-Spiel.",
          nl: "Bereken verwachte waarde verschil tussen 3:1 haven en geen haven over 30-beurt spel."
        },
        options: [
          { en: "~8-12 effective resource advantage (each 3:1 trade saves 1 resource vs 4:1)", es: "~8-12 ventaja de recursos efectiva (cada intercambio 3:1 ahorra 1 recurso vs 4:1)", de: "~8-12 effektiver Ressourcenvorteil (jeder 3:1-Tausch spart 1 Ressource vs 4:1)", nl: "~8-12 effectief bron voordeel (elke 3:1 ruil bespaart 1 bron vs 4:1)" },
          { en: "No measurable advantage exists", es: "No existe ventaja medible", de: "Kein messbarer Vorteil existiert", nl: "Geen meetbaar voordeel bestaat" },
          { en: "Exactly 30 resource advantage", es: "Exactamente 30 recursos de ventaja", de: "Genau 30 Ressourcenvorteil", nl: "Precies 30 bron voordeel" },
          { en: "3:1 harbor disadvantage vs bank", es: "Desventaja de puerto 3:1 vs banco", de: "3:1-Hafen-Nachteil vs Bank", nl: "3:1 haven nadeel vs bank" }
        ],
        correct: 0,
        explanation: {
          en: "Mathematical modeling: Average player makes 10-15 bank trades per 30-turn game. With 3:1 harbor, each trade costs 3 instead of 4 (1 resource saved). Over 10-15 trades, this accumulates to 10-15 resources saved. However, not all trades use harbor (some use player trades), reducing actual benefit to 8-12 resources. This 20-25% efficiency gain significantly impacts resource availability for final victory push.",
          es: "Modelado matemático: El jugador promedio hace 10-15 intercambios bancarios por juego de 30 turnos. Con puerto 3:1, cada intercambio cuesta 3 en lugar de 4 (1 recurso ahorrado). Durante 10-15 intercambios, esto se acumula a 10-15 recursos ahorrados. Sin embargo, no todos los intercambios usan puerto (algunos usan intercambios de jugadores), reduciendo el beneficio real a 8-12 recursos. Esta ganancia de eficiencia del 20-25% impacta significativamente la disponibilidad de recursos para el empujón final de victoria.",
          de: "Mathematische Modellierung: Durchschnittlicher Spieler macht 10-15 Bankgeschäfte pro 30-Züge-Spiel. Mit 3:1-Hafen kostet jeder Tausch 3 statt 4 (1 Ressource gespart). Über 10-15 Tausche akkumuliert dies zu 10-15 gesparten Ressourcen. Jedoch nutzen nicht alle Tausche Hafen (einige nutzen Spielertausche), reduziert tatsächlichen Nutzen auf 8-12 Ressourcen. Dieser 20-25% Effizienzgewinn beeinflusst Ressourcenverfügbarkeit für finalen Siegesstoß signifikant.",
          nl: "Wiskundige modellering: Gemiddelde speler maakt 10-15 bank ruilen per 30-beurt spel. Met 3:1 haven kost elke ruil 3 in plaats van 4 (1 bron bespaard). Over 10-15 ruilen accumuleert dit tot 10-15 bronnen bespaard. Echter, niet alle ruilen gebruiken haven (sommige gebruiken speler ruilen), vermindert werkelijk voordeel naar 8-12 bronnen. Deze 20-25% efficiëntie winst beïnvloedt significant bron beschikbaarheid voor finale overwinning push."
        }
      },
      {
        question: {
          en: "What is the 'tempo sacrifice' principle in strategic positioning?",
          es: "¿Qué es el principio de 'sacrificio de tempo' en posicionamiento estratégico?",
          de: "Was ist das 'Tempo-Opfer'-Prinzip in strategischer Positionierung?",
          nl: "Wat is het 'tempo offer' principe in strategische positionering?"
        },
        options: [
          { en: "Accepting 1-2 turn delay to secure superior board position worth 3+ turns advantage", es: "Aceptar retraso de 1-2 turnos para asegurar posición de tablero superior que vale 3+ turnos de ventaja", de: "1-2 Züge Verzögerung akzeptieren um überlegene Brettposition zu sichern die 3+ Züge Vorteil wert ist", nl: "Accepteren 1-2 beurt vertraging om superieure bordpositie te beveiligen waard 3+ beurten voordeel" },
          { en: "Always maximize tempo at any cost", es: "Siempre maximizar tempo a cualquier costo", de: "Tempo immer um jeden Preis maximieren", nl: "Altijd tempo maximaliseren tegen elke prijs" },
          { en: "Tempo cannot be traded for position", es: "El tempo no puede intercambiarse por posición", de: "Tempo kann nicht gegen Position getauscht werden", nl: "Tempo kan niet geruild worden voor positie" },
          { en: "Only applies to opening moves", es: "Solo se aplica a movimientos de apertura", de: "Gilt nur für Eröffnungszüge", nl: "Geldt alleen voor openingszetten" }
        ],
        correct: 0,
        explanation: {
          en: "Strategic trade-off analysis: Sometimes spending extra turns to secure critical positions (2:1 harbors, high-pip intersections) yields net positive despite tempo loss. Example: Taking 2 extra turns to reach wheat/ore 2:1 harbor instead of building settlement immediately appears slow, but the harbor's long-term efficiency (20+ turns remaining) provides 3-4 turns of equivalent resource value. Net benefit: -2 turns + 3-4 turns = +1-2 turn advantage overall.",
          es: "Análisis de compensación estratégica: A veces gastar turnos extra para asegurar posiciones críticas (puertos 2:1, intersecciones de alto pip) produce neto positivo a pesar de pérdida de tempo. Ejemplo: Tomar 2 turnos extra para alcanzar puerto 2:1 de trigo/mineral en lugar de construir asentamiento inmediatamente parece lento, pero la eficiencia a largo plazo del puerto (20+ turnos restantes) proporciona 3-4 turnos de valor de recurso equivalente. Beneficio neto: -2 turnos + 3-4 turnos = +1-2 turnos de ventaja general.",
          de: "Strategische Kompromissanalyse: Manchmal bringt Extra-Züge ausgeben um kritische Positionen zu sichern (2:1-Häfen, hohe-Pip-Schnittpunkte) trotz Tempoverlust Nettogewinn. Beispiel: 2 Extra-Züge nehmen um Weizen/Erz-2:1-Hafen zu erreichen statt sofort Siedlung zu bauen erscheint langsam, aber Hafen-Langzeiteffizienz (20+ Züge verbleibend) liefert 3-4 Züge äquivalenten Ressourcenwert. Nettonutzen: -2 Züge + 3-4 Züge = +1-2 Züge Vorteil insgesamt.",
          nl: "Strategische afweging analyse: Soms levert extra beurten besteden om kritieke posities te beveiligen (2:1 havens, hoge-pip kruispunten) netto positief op ondanks tempo verlies. Voorbeeld: 2 extra beurten nemen om tarwe/erts 2:1 haven te bereiken in plaats van direct nederzetting bouwen lijkt langzaam, maar de haven's lange-termijn efficiëntie (20+ beurten resterend) biedt 3-4 beurten equivalente bron waarde. Netto voordeel: -2 beurten + 3-4 beurten = +1-2 beurt voordeel totaal."
        }
      },
      {
        question: {
          en: "What is the 'compounding growth differential' in city-vs-settlement strategies?",
          es: "¿Qué es el 'diferencial de crecimiento compuesto' en estrategias de ciudad vs asentamiento?",
          de: "Was ist das 'zusammengesetzte Wachstumsdifferential' in Stadt-vs-Siedlungs-Strategien?",
          nl: "Wat is het 'samengesteld groei verschil' in stad-vs-nederzetting strategieën?"
        },
        options: [
          { en: "Cities create exponential resource growth (2^n) while settlements remain linear (n)", es: "Las ciudades crean crecimiento exponencial de recursos (2^n) mientras los asentamientos permanecen lineales (n)", de: "Städte schaffen exponentielles Ressourcenwachstum (2^n) während Siedlungen linear bleiben (n)", nl: "Steden creëren exponentiële bron groei (2^n) terwijl nederzettingen lineair blijven (n)" },
          { en: "No mathematical difference exists", es: "No existe diferencia matemática", de: "Kein mathematischer Unterschied existiert", nl: "Geen wiskundig verschil bestaat" },
          { en: "Settlements grow faster than cities", es: "Los asentamientos crecen más rápido que las ciudades", de: "Siedlungen wachsen schneller als Städte", nl: "Nederzettingen groeien sneller dan steden" },
          { en: "Both follow identical growth curves", es: "Ambos siguen curvas de crecimiento idénticas", de: "Beide folgen identischen Wachstumskurven", nl: "Beide volgen identieke groei curves" }
        ],
        correct: 0,
        explanation: {
          en: "Mathematical growth theory: Settlement strategy produces linear growth: 3 settlements = 3 points, resource rate constant. City strategy produces compound growth: 1 city doubles production → enables faster 2nd city → exponentially faster 3rd city. After 15 turns, settlement path yields ~4-5 points linear; city path yields ~6-8 points exponential. The growth differential widens each turn: cities enable cities faster while settlements just add constant increments.",
          es: "Teoría de crecimiento matemático: La estrategia de asentamiento produce crecimiento lineal: 3 asentamientos = 3 puntos, tasa de recursos constante. La estrategia de ciudad produce crecimiento compuesto: 1 ciudad duplica producción → permite 2ª ciudad más rápida → 3ª ciudad exponencialmente más rápida. Después de 15 turnos, el camino de asentamiento produce ~4-5 puntos lineales; el camino de ciudad produce ~6-8 puntos exponenciales. El diferencial de crecimiento se amplía cada turno: las ciudades permiten ciudades más rápido mientras los asentamientos solo agregan incrementos constantes.",
          de: "Mathematische Wachstumstheorie: Siedlungsstrategie produziert lineares Wachstum: 3 Siedlungen = 3 Punkte, Ressourcenrate konstant. Stadtstrategie produziert zusammengesetztes Wachstum: 1 Stadt verdoppelt Produktion → ermöglicht schnellere 2. Stadt → exponentiell schnellere 3. Stadt. Nach 15 Zügen bringt Siedlungspfad ~4-5 Punkte linear; Stadtpfad bringt ~6-8 Punkte exponentiell. Das Wachstumsdifferential weitet sich jeden Zug: Städte ermöglichen Städte schneller während Siedlungen nur konstante Inkremente addieren.",
          nl: "Wiskundige groei theorie: Nederzetting strategie produceert lineaire groei: 3 nederzettingen = 3 punten, bron snelheid constant. Stad strategie produceert samengestelde groei: 1 stad verdubbelt productie → maakt snellere 2e stad mogelijk → exponentieel snellere 3e stad. Na 15 beurten levert nederzetting pad ~4-5 punten lineair op; stad pad levert ~6-8 punten exponentieel op. Het groei verschil verbreed elke beurt: steden maken steden sneller mogelijk terwijl nederzettingen alleen constante stappen toevoegen."
        }
      },
      {
        question: {
          en: "What is the 'Pareto efficiency frontier' in resource trading?",
          es: "¿Qué es la 'frontera de eficiencia de Pareto' en el comercio de recursos?",
          de: "Was ist die 'Pareto-Effizienz-Grenze' im Ressourcenhandel?",
          nl: "Wat is de 'Pareto efficiëntie grens' in bron handel?"
        },
        options: [
          { en: "Trade ratios where both players gain value but further improvement helps one while harming other", es: "Ratios de comercio donde ambos jugadores ganan valor pero mejora adicional ayuda a uno mientras daña al otro", de: "Handelsverhältnisse wo beide Spieler Wert gewinnen aber weitere Verbesserung einem hilft während anderen schadet", nl: "Ruil ratio's waar beide spelers waarde winnen maar verdere verbetering één helpt terwijl ander schaadt" },
          { en: "All trades must be exactly 1:1", es: "Todos los intercambios deben ser exactamente 1:1", de: "Alle Geschäfte müssen genau 1:1 sein", nl: "Alle ruilen moeten precies 1:1 zijn" },
          { en: "Pareto efficiency doesn't apply to games", es: "La eficiencia de Pareto no se aplica a juegos", de: "Pareto-Effizienz gilt nicht für Spiele", nl: "Pareto efficiëntie geldt niet voor spellen" },
          { en: "Only leader can achieve efficiency", es: "Solo el líder puede lograr eficiencia", de: "Nur Anführer kann Effizienz erreichen", nl: "Alleen leider kan efficiëntie bereiken" }
        ],
        correct: 0,
        explanation: {
          en: "Game theory economics: A trade is Pareto efficient when both players gain and no alternative trade improves one without worsening the other. Example: 1 wheat for 1 ore (both need what they get) is efficient. Changing to 1 wheat for 2 ore helps receiver but harms giver, moving off the frontier. Elite players seek Pareto-efficient trades when cooperating (mutual benefit) but demand off-frontier trades when targeting opponents (extracting asymmetric value), especially from desperate players near victory.",
          es: "Economía de teoría de juegos: Un intercambio es eficiente de Pareto cuando ambos jugadores ganan y ningún intercambio alternativo mejora a uno sin empeorar al otro. Ejemplo: 1 trigo por 1 mineral (ambos necesitan lo que obtienen) es eficiente. Cambiar a 1 trigo por 2 minerales ayuda al receptor pero daña al donante, moviéndose fuera de la frontera. Los jugadores de élite buscan intercambios eficientes de Pareto al cooperar (beneficio mutuo) pero exigen intercambios fuera de la frontera al apuntar a oponentes (extrayendo valor asimétrico), especialmente de jugadores desesperados cerca de la victoria.",
          de: "Spieltheorie-Ökonomie: Ein Geschäft ist Pareto-effizient wenn beide Spieler gewinnen und kein alternatives Geschäft einem verbessert ohne anderen zu verschlechtern. Beispiel: 1 Weizen für 1 Erz (beide brauchen was sie bekommen) ist effizient. Änderung zu 1 Weizen für 2 Erz hilft Empfänger aber schadet Geber, bewegt von Grenze weg. Elite-Spieler suchen Pareto-effiziente Geschäfte beim Kooperieren (gegenseitiger Nutzen) aber fordern außerhalb-Grenze-Geschäfte beim Anvisieren von Gegnern (asymmetrischen Wert extrahieren), besonders von verzweifelten Spielern nahe Sieg.",
          nl: "Speltheorie economie: Een ruil is Pareto efficiënt wanneer beide spelers winnen en geen alternatieve ruil één verbetert zonder ander te verslechteren. Voorbeeld: 1 tarwe voor 1 erts (beide hebben nodig wat ze krijgen) is efficiënt. Veranderen naar 1 tarwe voor 2 erts helpt ontvanger maar schaadt gever, beweegt van grens af. Elite spelers zoeken Pareto-efficiënte ruilen bij samenwerken (wederzijds voordeel) maar eisen buiten-grens ruilen bij targeten tegenstanders (asymmetrische waarde extraheren), vooral van wanhopige spelers dichtbij overwinning."
        }
      },
      {
        question: {
          en: "What is the 'stochastic dominance' principle in settlement location evaluation?",
          es: "¿Qué es el principio de 'dominancia estocástica' en evaluación de ubicación de asentamientos?",
          de: "Was ist das 'stochastische Dominanz'-Prinzip in Siedlungsstandort-Bewertung?",
          nl: "Wat is het 'stochastische dominantie' principe in nederzetting locatie evaluatie?"
        },
        options: [
          { en: "Location A stochastically dominates B if A yields better outcomes across all probability scenarios", es: "Ubicación A domina estocásticamente a B si A produce mejores resultados en todos los escenarios de probabilidad", de: "Standort A dominiert B stochastisch wenn A bessere Ergebnisse über alle Wahrscheinlichkeitsszenarien liefert", nl: "Locatie A domineert B stochastisch als A betere uitkomsten levert over alle waarschijnlijkheidsscenario's" },
          { en: "All locations equally valuable statistically", es: "Todas las ubicaciones igualmente valiosas estadísticamente", de: "Alle Standorte statistisch gleichwertig", nl: "Alle locaties statistisch even waardevol" },
          { en: "Only applies to city placements", es: "Solo se aplica a colocaciones de ciudad", de: "Gilt nur für Stadtplatzierungen", nl: "Geldt alleen voor stadsplaatsingen" },
          { en: "Dominance requires identical pip values", es: "La dominancia requiere valores de pip idénticos", de: "Dominanz erfordert identische Pip-Werte", nl: "Dominantie vereist identieke pip waarden" }
        ],
        correct: 0,
        explanation: {
          en: "Advanced probability theory: Location A (6-8-5, 14 pips) stochastically dominates Location B (4-9-10, 12 pips) because: (1) same expected value OR higher, AND (2) better outcomes in worst-case scenarios. Even if both average 1.2 resources/turn, A's distribution has higher probability of productive turns (less variance). This cumulative distribution function dominance guides elite settlement choices: prefer locations that win across all dice scenarios, not just average cases.",
          es: "Teoría de probabilidad avanzada: Ubicación A (6-8-5, 14 pips) domina estocásticamente Ubicación B (4-9-10, 12 pips) porque: (1) valor esperado igual O mayor, Y (2) mejores resultados en escenarios de peor caso. Incluso si ambos promedian 1.2 recursos/turno, la distribución de A tiene mayor probabilidad de turnos productivos (menos varianza). Esta dominancia de función de distribución acumulativa guía elecciones de asentamiento de élite: prefiere ubicaciones que ganan en todos los escenarios de dados, no solo casos promedio.",
          de: "Fortgeschrittene Wahrscheinlichkeitstheorie: Standort A (6-8-5, 14 Pips) dominiert B (4-9-10, 12 Pips) stochastisch weil: (1) gleicher Erwartungswert ODER höher, UND (2) bessere Ergebnisse in Worst-Case-Szenarien. Selbst wenn beide 1,2 Ressourcen/Zug durchschnittlich, hat A's Verteilung höhere Wahrscheinlichkeit produktiver Züge (weniger Varianz). Diese kumulative Verteilungsfunktions-Dominanz leitet Elite-Siedlungswahlen: bevorzuge Standorte die über alle Würfelszenarien gewinnen, nicht nur Durchschnittsfälle.",
          nl: "Geavanceerde waarschijnlijkheidstheorie: Locatie A (6-8-5, 14 pips) domineert B (4-9-10, 12 pips) stochastisch omdat: (1) zelfde verwachte waarde OF hoger, EN (2) betere uitkomsten in slechtste-geval scenario's. Zelfs als beide gemiddeld 1,2 bronnen/beurt, heeft A's verdeling hogere waarschijnlijkheid van productieve beurten (minder variantie). Deze cumulatieve verdelingsfunctie dominantie leidt elite nederzetting keuzes: geef voorkeur aan locaties die winnen over alle dobbelsteen scenario's, niet alleen gemiddelde gevallen."
        }
      },
      {
        question: {
          en: "What is the 'coalition instability threshold' in 4-player endgames?",
          es: "¿Qué es el 'umbral de inestabilidad de coalición' en finales de juego de 4 jugadores?",
          de: "Was ist die 'Koalitionsinstabilitätsschwelle' in 4-Spieler-Endspielen?",
          nl: "Wat is de 'coalitie instabiliteits drempel' in 4-speler eindspellen?"
        },
        options: [
          { en: "When 2nd place reaches within 1 point of leader, coalition fractures as 2nd pursues solo win", es: "Cuando el 2° lugar alcanza dentro de 1 punto del líder, la coalición se fractura ya que el 2° persigue victoria solo", de: "Wenn Zweitplatzierter innerhalb 1 Punkt von Anführer kommt, bricht Koalition da Zweiter Solo-Sieg verfolgt", nl: "Wanneer 2e plaats binnen 1 punt van leider komt, breekt coalitie omdat 2e solo winst nastreeft" },
          { en: "Coalitions never fracture in Catan", es: "Las coaliciones nunca se fracturan en Catan", de: "Koalitionen brechen nie in Catan", nl: "Coalities breken nooit in Catan" },
          { en: "Only at exactly 9 points", es: "Solo en exactamente 9 puntos", de: "Nur bei genau 9 Punkten", nl: "Alleen bij precies 9 punten" },
          { en: "Threshold exists only in 6-player games", es: "El umbral existe solo en juegos de 6 jugadores", de: "Schwelle existiert nur in 6-Spieler-Spielen", nl: "Drempel bestaat alleen in 6-speler spellen" }
        ],
        correct: 0,
        explanation: {
          en: "Game theory dynamics: Anti-leader coalitions remain stable while participants believe blocking the leader maximizes their win probability. But when 2nd place closes gap to 1 point, their calculation shifts: probability of winning themselves (if they race) exceeds probability of long-term coalition success. This triggers coalition breakdown. Leader at 8, 2nd at 7, 3rd/4th at 5 = stable coalition. Leader at 8, 2nd at 7, gap closes = instability. Elite players exploit this by either maintaining 2-point gaps (stability) or deliberately creating 1-point scenarios (chaos).",
          es: "Dinámica de teoría de juegos: Las coaliciones anti-líder permanecen estables mientras los participantes creen que bloquear al líder maximiza su probabilidad de victoria. Pero cuando el 2° lugar cierra brecha a 1 punto, su cálculo cambia: probabilidad de ganar ellos mismos (si corren) excede probabilidad de éxito de coalición a largo plazo. Esto desencadena colapso de coalición. Líder en 8, 2° en 7, 3°/4° en 5 = coalición estable. Líder en 8, 2° en 7, brecha se cierra = inestabilidad. Los jugadores de élite explotan esto manteniendo brechas de 2 puntos (estabilidad) o creando deliberadamente escenarios de 1 punto (caos).",
          de: "Spieltheorie-Dynamik: Anti-Anführer-Koalitionen bleiben stabil während Teilnehmer glauben, Anführer zu blockieren maximiert ihre Gewinnwahrscheinlichkeit. Aber wenn Zweitplatzierter Lücke auf 1 Punkt schließt, wechselt ihre Berechnung: Wahrscheinlichkeit selbst zu gewinnen (wenn sie rennen) übersteigt Wahrscheinlichkeit langfristigen Koalitionserfolgs. Dies löst Koalitionszerfall aus. Anführer bei 8, Zweiter bei 7, Dritter/Vierter bei 5 = stabile Koalition. Anführer bei 8, Zweiter bei 7, Lücke schließt = Instabilität. Elite-Spieler nutzen dies durch Aufrechterhalten 2-Punkt-Lücken (Stabilität) oder absichtliches Schaffen 1-Punkt-Szenarien (Chaos).",
          nl: "Speltheorie dynamica: Anti-leider coalities blijven stabiel terwijl deelnemers geloven dat leider blokkeren hun winkans maximaliseert. Maar wanneer 2e plaats kloof sluit naar 1 punt, verschuift hun berekening: waarschijnlijkheid om zelf te winnen (als ze racen) overschrijdt waarschijnlijkheid van lange-termijn coalitie succes. Dit triggert coalitie afbraak. Leider op 8, 2e op 7, 3e/4e op 5 = stabiele coalitie. Leider op 8, 2e op 7, kloof sluit = instabiliteit. Elite spelers exploiteren dit door ofwel 2-punt kloven te behouden (stabiliteit) of opzettelijk 1-punt scenario's te creëren (chaos)."
        }
      },
      {
        question: {
          en: "What is the 'risk-neutral vs risk-averse' decision framework in Catan strategy?",
          es: "¿Qué es el marco de decisión 'neutral al riesgo vs adverso al riesgo' en la estrategia de Catan?",
          de: "Was ist der 'risikoneutrale vs risikoaverse' Entscheidungsrahmen in Catan-Strategie?",
          nl: "Wat is het 'risico-neutraal vs risico-afkerig' beslissings raamwerk in Catan strategie?"
        },
        options: [
          { en: "Risk-neutral maximizes expected value; risk-averse minimizes variance even at EV cost", es: "Neutral al riesgo maximiza valor esperado; adverso al riesgo minimiza varianza incluso a costo de VE", de: "Risikoneutral maximiert Erwartungswert; risikoavers minimiert Varianz selbst zu EV-Kosten", nl: "Risico-neutraal maximaliseert verwachte waarde; risico-afkerig minimaliseert variantie zelfs tegen EV kosten" },
          { en: "All players should be purely risk-neutral", es: "Todos los jugadores deben ser puramente neutrales al riesgo", de: "Alle Spieler sollten rein risikoneutral sein", nl: "Alle spelers moeten puur risico-neutraal zijn" },
          { en: "Risk preference doesn't affect Catan", es: "La preferencia de riesgo no afecta a Catan", de: "Risikopräferenz beeinflusst Catan nicht", nl: "Risico voorkeur beïnvloedt Catan niet" },
          { en: "Only applies to development card purchases", es: "Solo se aplica a compras de cartas de desarrollo", de: "Gilt nur für Entwicklungskartenkäufe", nl: "Geldt alleen voor ontwikkelingskaart aankopen" }
        ],
        correct: 0,
        explanation: {
          en: "Decision theory application: Risk-neutral players choose high-variance strategies (all 6s and 8s) maximizing expected value regardless of outcome distribution. Risk-averse players accept slightly lower expected value (spreading across 4-5-6-8-9-10) to ensure consistent production and reduce bankruptcy risk from unlucky dice sequences. Optimal strategy depends on position: leaders should be risk-averse (protect advantage), trailing players should be risk-neutral or risk-seeking (need variance to catch up). Context determines risk preference.",
          es: "Aplicación de teoría de decisión: Los jugadores neutrales al riesgo eligen estrategias de alta varianza (todos 6s y 8s) maximizando valor esperado independientemente de la distribución de resultados. Los jugadores adversos al riesgo aceptan valor esperado ligeramente menor (distribuyendo en 4-5-6-8-9-10) para asegurar producción consistente y reducir riesgo de quiebra por secuencias de dados desafortunadas. La estrategia óptima depende de posición: los líderes deben ser adversos al riesgo (proteger ventaja), los jugadores rezagados deben ser neutrales o buscadores de riesgo (necesitan varianza para alcanzar). El contexto determina preferencia de riesgo.",
          de: "Entscheidungstheorieanwendung: Risikoneutrale Spieler wählen Hochvarianz-Strategien (alle 6en und 8en) maximierend Erwartungswert unabhängig von Ergebnisverteilung. Risikoaverse Spieler akzeptieren leicht niedrigeren Erwartungswert (Verteilung über 4-5-6-8-9-10) um konsistente Produktion sicherzustellen und Insolvenzrisiko von unglücklichen Würfelsequenzen zu reduzieren. Optimale Strategie hängt von Position ab: Anführer sollten risikoavers sein (Vorteil schützen), zurückliegende Spieler sollten risikoneutral oder risikosuchend sein (brauchen Varianz zum Aufholen). Kontext bestimmt Risikopräferenz.",
          nl: "Beslissingstheorie toepassing: Risico-neutrale spelers kiezen hoge-variantie strategieën (alle 6'en en 8'en) maximaliseren verwachte waarde ongeacht uitkomstverdeling. Risico-afkerige spelers accepteren iets lagere verwachte waarde (spreiden over 4-5-6-8-9-10) om consistente productie te verzekeren en faillissementsrisico van ongelukkige dobbelsteen sequenties te verminderen. Optimale strategie hangt af van positie: leiders moeten risico-afkerig zijn (voordeel beschermen), achterop rakende spelers moeten risico-neutraal of risico-zoekend zijn (hebben variantie nodig om in te halen). Context bepaalt risico voorkeur."
        }
      },
      {
        question: {
          en: "What is the 'information asymmetry exploitation' in hidden VP card strategies?",
          es: "¿Qué es la 'explotación de asimetría de información' en estrategias de cartas VP ocultas?",
          de: "Was ist die 'Informationsasymmetrie-Ausbeutung' in versteckten VP-Kartenstrategien?",
          nl: "Wat is de 'informatie asymmetrie exploitatie' in verborgen VP kaart strategieën?"
        },
        options: [
          { en: "Deliberately maintain 7 visible points while holding 2-3 VP cards to exploit opponent miscalculation", es: "Mantener deliberadamente 7 puntos visibles mientras se sostienen 2-3 cartas VP para explotar error de cálculo del oponente", de: "Absichtlich 7 sichtbare Punkte halten während 2-3 VP-Karten gehalten werden um Gegner-Fehlberechnung auszunutzen", nl: "Opzettelijk 7 zichtbare punten behouden terwijl 2-3 VP kaarten vasthouden om tegenstander misrekening te exploiteren" },
          { en: "Always reveal all information immediately", es: "Siempre revelar toda la información inmediatamente", de: "Immer alle Informationen sofort offenbaren", nl: "Altijd alle informatie direct onthullen" },
          { en: "VP cards should never be held", es: "Las cartas VP nunca deben mantenerse", de: "VP-Karten sollten nie gehalten werden", nl: "VP kaarten moeten nooit vastgehouden worden" },
          { en: "Information asymmetry illegal in tournaments", es: "Asimetría de información ilegal en torneos", de: "Informationsasymmetrie illegal in Turnieren", nl: "Informatie asymmetrie illegaal in toernooien" }
        ],
        correct: 0,
        explanation: {
          en: "Strategic deception theory: Opponents make decisions based on visible scores. By displaying 7 visible points while holding 2 VP cards (actual: 9), you create information asymmetry: opponents underestimate your threat level, avoiding coalition formation. This window (1-3 turns) allows accumulating final resources for 10-point victory before opponents recognize the threat. The deception succeeds because Catan's hidden information (dev cards) creates legitimate uncertainty that expert players weaponize through strategic non-disclosure.",
          es: "Teoría de engaño estratégico: Los oponentes toman decisiones basadas en puntuaciones visibles. Al mostrar 7 puntos visibles mientras se sostienen 2 cartas VP (real: 9), creas asimetría de información: los oponentes subestiman tu nivel de amenaza, evitando formación de coalición. Esta ventana (1-3 turnos) permite acumular recursos finales para victoria de 10 puntos antes de que los oponentes reconozcan la amenaza. El engaño tiene éxito porque la información oculta de Catan (cartas de desarrollo) crea incertidumbre legítima que los jugadores expertos armonizan mediante no divulgación estratégica.",
          de: "Strategische Täuschungstheorie: Gegner treffen Entscheidungen basierend auf sichtbaren Punkten. Durch Anzeigen 7 sichtbarer Punkte während 2 VP-Karten gehalten werden (tatsächlich: 9), schafft man Informationsasymmetrie: Gegner unterschätzen Ihr Bedrohungsniveau, vermeiden Koalitionsbildung. Dieses Fenster (1-3 Züge) erlaubt Ansammeln finaler Ressourcen für 10-Punkt-Sieg bevor Gegner Bedrohung erkennen. Die Täuschung gelingt weil Catans versteckte Information (Dev-Karten) legitime Unsicherheit schafft die Experten durch strategische Nichtoffenlegung bewaffnen.",
          nl: "Strategische misleiding theorie: Tegenstanders maken beslissingen gebaseerd op zichtbare scores. Door 7 zichtbare punten te tonen terwijl 2 VP kaarten vasthouden (werkelijk: 9), creëer je informatie asymmetrie: tegenstanders onderschatten je dreigingsniveau, vermijden coalitie vorming. Dit venster (1-3 beurten) maakt accumuleren finale bronnen mogelijk voor 10-punt overwinning voordat tegenstanders de dreiging herkennen. De misleiding slaagt omdat Catan's verborgen informatie (dev kaarten) legitieme onzekerheid creëert die expert spelers bewapenen door strategische niet-openbaarmaking."
        }
      },
      {
        question: {
          en: "What is the 'dynamic programming path' to victory in tournament analysis?",
          es: "¿Qué es el 'camino de programación dinámica' a la victoria en análisis de torneo?",
          de: "Was ist der 'dynamische Programmierungs-Pfad' zum Sieg in Turnieranalyse?",
          nl: "Wat is het 'dynamische programmering pad' naar overwinning in toernooi analyse?"
        },
        options: [
          { en: "Work backward from 10 points calculating optimal move sequences at each state", es: "Trabajar hacia atrás desde 10 puntos calculando secuencias de movimiento óptimas en cada estado", de: "Von 10 Punkten rückwärts arbeiten und optimale Zugsequenzen in jedem Zustand berechnen", nl: "Werk achterwaarts vanaf 10 punten bereken optimale zet sequenties bij elke staat" },
          { en: "Random moves without planning", es: "Movimientos aleatorios sin planificación", de: "Zufällige Züge ohne Planung", nl: "Willekeurige zetten zonder planning" },
          { en: "Always build settlements first", es: "Siempre construir asentamientos primero", de: "Immer zuerst Siedlungen bauen", nl: "Altijd eerst nederzettingen bouwen" },
          { en: "Dynamic programming doesn't apply to Catan", es: "La programación dinámica no se aplica a Catan", de: "Dynamische Programmierung gilt nicht für Catan", nl: "Dynamische programmering geldt niet voor Catan" }
        ],
        correct: 0,
        explanation: {
          en: "Computational optimization: Dynamic programming solves Catan by working backward from victory (10 points) to current state, calculating optimal actions at each point level. Example: At 8 points, DP evaluates all paths (settlement+city=10, dev cards+city=10, longest road+settlement=10) and selects minimum expected turns. This backward induction reveals non-obvious strategies like 'skip settlement 4, rush cities instead' that forward planning misses. Elite players intuitively apply this backward-thinking framework.",
          es: "Optimización computacional: La programación dinámica resuelve Catan trabajando hacia atrás desde la victoria (10 puntos) hasta el estado actual, calculando acciones óptimas en cada nivel de puntos. Ejemplo: En 8 puntos, PD evalúa todos los caminos (asentamiento+ciudad=10, cartas de desarrollo+ciudad=10, camino más largo+asentamiento=10) y selecciona turnos esperados mínimos. Esta inducción hacia atrás revela estrategias no obvias como 'omitir asentamiento 4, apresurarse a ciudades en su lugar' que la planificación hacia adelante pierde. Los jugadores de élite aplican intuitivamente este marco de pensamiento hacia atrás.",
          de: "Computationale Optimierung: Dynamische Programmierung löst Catan durch Rückwärtsarbeiten vom Sieg (10 Punkte) zum aktuellen Zustand, berechnet optimale Aktionen auf jedem Punktelevel. Beispiel: Bei 8 Punkten evaluiert DP alle Pfade (Siedlung+Stadt=10, Dev-Karten+Stadt=10, längste Straße+Siedlung=10) und wählt minimale erwartete Züge. Diese Rückwärtsinduktion offenbart nicht-offensichtliche Strategien wie 'Siedlung 4 überspringen, stattdessen Städte eilen' die Vorwärtsplanung verfehlt. Elite-Spieler wenden dieses Rückwärtsdenk-Framework intuitiv an.",
          nl: "Computationele optimalisatie: Dynamische programmering lost Catan op door achterwaarts te werken vanaf overwinning (10 punten) naar huidige staat, bereken optimale acties op elk puntenniveau. Voorbeeld: Bij 8 punten evalueert DP alle paden (nederzetting+stad=10, dev kaarten+stad=10, langste weg+nederzetting=10) en selecteert minimum verwachte beurten. Deze achterwaartse inductie onthult niet-voor-de-hand-liggende strategieën zoals 'sla nederzetting 4 over, haast steden in plaats daarvan' die voorwaartse planning mist. Elite spelers passen dit achterwaarts-denk raamwerk intuïtief toe."
        }
      },
      {
        question: {
          en: "What is the 'expected regret minimization' principle in robber placement decisions?",
          es: "¿Qué es el principio de 'minimización de arrepentimiento esperado' en decisiones de colocación del ladrón?",
          de: "Was ist das 'erwartetes Bedauern Minimierungs'-Prinzip in Räuberplatzierungsentscheidungen?",
          nl: "Wat is het 'verwachte spijt minimalisatie' principe in rover plaatsings beslissingen?"
        },
        options: [
          { en: "Place robber to minimize maximum potential regret if opponent wins next turn", es: "Colocar ladrón para minimizar el arrepentimiento potencial máximo si el oponente gana el próximo turno", de: "Räuber platzieren um maximales potentielles Bedauern zu minimieren wenn Gegner nächsten Zug gewinnt", nl: "Plaats rover om maximum potentiële spijt te minimaliseren als tegenstander volgende beurt wint" },
          { en: "Ignore regret, always maximize personal gain", es: "Ignorar arrepentimiento, siempre maximizar ganancia personal", de: "Bedauern ignorieren, immer persönlichen Gewinn maximieren", nl: "Negeer spijt, altijd persoonlijke winst maximaliseren" },
          { en: "Random robber placement to avoid patterns", es: "Colocación aleatoria del ladrón para evitar patrones", de: "Zufällige Räuberplatzierung um Muster zu vermeiden", nl: "Willekeurige rover plaatsing om patronen te vermijden" },
          { en: "Regret minimization doesn't apply to Catan", es: "La minimización de arrepentimiento no se aplica a Catan", de: "Bedauernminimierung gilt nicht für Catan", nl: "Spijt minimalisatie geldt niet voor Catan" }
        ],
        correct: 0,
        explanation: {
          en: "Decision theory under uncertainty: When placing robber, evaluate potential regret: 'If I block Player A but Player B wins next turn, how much will I regret not blocking B?' Expected regret = P(opponent wins) × (your position loss if they win). By minimizing maximum regret (minimax regret), you make decisions robust to uncertainty. Example: Leader at 9 points generates high regret if not blocked; 2nd place at 7 points generates low regret. Block the 9-point player to minimize catastrophic regret, even if 7-point player offers better immediate resource steal.",
          es: "Teoría de decisión bajo incertidumbre: Al colocar ladrón, evalúa arrepentimiento potencial: 'Si bloqueo Jugador A pero Jugador B gana próximo turno, ¿cuánto me arrepentiré de no haber bloqueado B?' Arrepentimiento esperado = P(oponente gana) × (tu pérdida de posición si ganan). Al minimizar arrepentimiento máximo (minimax arrepentimiento), tomas decisiones robustas a incertidumbre. Ejemplo: Líder en 9 puntos genera alto arrepentimiento si no se bloquea; 2° lugar en 7 puntos genera bajo arrepentimiento. Bloquea al jugador de 9 puntos para minimizar arrepentimiento catastrófico, incluso si jugador de 7 puntos ofrece mejor robo inmediato de recursos.",
          de: "Entscheidungstheorie unter Unsicherheit: Beim Platzieren des Räubers potentielles Bedauern evaluieren: 'Wenn ich Spieler A blockiere aber Spieler B nächsten Zug gewinnt, wie sehr werde ich bedauern B nicht blockiert zu haben?' Erwartetes Bedauern = P(Gegner gewinnt) × (Ihr Positionsverlust wenn sie gewinnen). Durch Minimieren maximalen Bedauerns (Minimax-Bedauern) trifft man Entscheidungen robust gegen Unsicherheit. Beispiel: Anführer bei 9 Punkten generiert hohes Bedauern wenn nicht blockiert; Zweitplatzierter bei 7 Punkten generiert niedriges Bedauern. Blockiere 9-Punkte-Spieler um katastrophales Bedauern zu minimieren, selbst wenn 7-Punkte-Spieler besseren sofortigen Ressourcendiebstahl bietet.",
          nl: "Beslissingstheorie onder onzekerheid: Bij plaatsen rover, evalueer potentiële spijt: 'Als ik Speler A blokkeer maar Speler B wint volgende beurt, hoeveel zal ik spijt hebben B niet geblokkeerd te hebben?' Verwachte spijt = P(tegenstander wint) × (jouw positie verlies als ze winnen). Door maximum spijt te minimaliseren (minimax spijt), maak je beslissingen robuust tegen onzekerheid. Voorbeeld: Leider bij 9 punten genereert hoge spijt als niet geblokkeerd; 2e plaats bij 7 punten genereert lage spijt. Blokkeer de 9-punten speler om catastrofale spijt te minimaliseren, zelfs als 7-punten speler betere directe bron diefstal biedt."
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
