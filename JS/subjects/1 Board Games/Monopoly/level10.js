(function() {
  const questions = [
    {
      question: {
        en: "In optimal 2-player tournament strategy, what is the Nash equilibrium for initial property acquisition before trading begins?",
        es: "En estrategia óptima de torneo de 2 jugadores, ¿cuál es el equilibrio de Nash para la adquisición inicial de propiedades antes de que comiencen las negociaciones?",
        de: "In optimaler 2-Spieler-Turnierstrategie, was ist das Nash-Gleichgewicht für die anfängliche Grundstückserwerbung bevor der Handel beginnt?",
        nl: "In optimale 2-speler toernooi strategie, wat is het Nash evenwicht voor initiële eigendomsverwerving voordat het handelen begint?"
      },
      options: [
        { en: "Both players buy everything they land on", es: "Ambos jugadores compran todo en lo que caen", de: "Beide Spieler kaufen alles worauf sie landen", nl: "Beide spelers kopen alles waar ze op landen" },
        { en: "Both players selectively auction cheap properties", es: "Ambos jugadores subastan selectivamente propiedades baratas", de: "Beide Spieler versteigern selektiv billige Grundstücke", nl: "Beide spelers veilen selectief goedkope eigendommen" },
        { en: "Mixed strategy - randomize purchases to hide intentions", es: "Estrategia mixta - aleatorizar compras para ocultar intenciones", de: "Gemischte Strategie - Käufe randomisieren um Absichten zu verbergen", nl: "Gemengde strategie - aankopen randomiseren om intenties te verbergen" },
        { en: "No equilibrium exists - dominant strategy is contextual", es: "No existe equilibrio - la estrategia dominante es contextual", de: "Kein Gleichgewicht existiert - dominante Strategie ist kontextabhängig", nl: "Geen evenwicht bestaat - dominante strategie is contextueel" }
      ],
      correct: 0,
      explanation: {
        en: "Game theory analysis shows pure strategy Nash equilibrium: both players must buy all properties to prevent opponent advantage, as selective buying is exploitable through forced auctions.",
        es: "El análisis de teoría de juegos muestra un equilibrio de Nash de estrategia pura: ambos jugadores deben comprar todas las propiedades para evitar la ventaja del oponente, ya que la compra selectiva es explotable a través de subastas forzadas.",
        de: "Spieltheoretische Analyse zeigt reines Strategie-Nash-Gleichgewicht: beide Spieler müssen alle Grundstücke kaufen um Gegnervorteil zu verhindern, da selektives Kaufen durch erzwungene Auktionen ausnutzbar ist.",
        nl: "Speltheorie analyse toont pure strategie Nash evenwicht: beide spelers moeten alle eigendommen kopen om tegenstander voordeel te voorkomen, omdat selectief kopen uitgebuit kan worden door gedwongen veilingen."
      }
    },
    {
      question: {
        en: "According to computer simulation studies, what is the exact probability that Illinois Avenue gets landed on at least once in a 40-space circuit?",
        es: "Según estudios de simulación por computadora, ¿cuál es la probabilidad exacta de que Illinois Avenue sea visitado al menos una vez en un circuito de 40 espacios?",
        de: "Laut Computersimulationsstudien, wie hoch ist die genaue Wahrscheinlichkeit, dass Illinois Avenue mindestens einmal in einem 40-Feld-Rundgang besucht wird?",
        nl: "Volgens computersimulatiestudies, wat is de exacte waarschijnlijkheid dat Illinois Avenue minstens één keer wordt bezocht in een 40-vak circuit?"
      },
      options: [
        { en: "2.9% (highest single property)", es: "2.9% (propiedad individual más alta)", de: "2,9% (höchstes einzelnes Grundstück)", nl: "2,9% (hoogste individuele eigendom)" },
        { en: "3.18% (highest single property)", es: "3.18% (propiedad individual más alta)", de: "3,18% (höchstes einzelnes Grundstück)", nl: "3,18% (hoogste individuele eigendom)" },
        { en: "4.1% (tied with GO)", es: "4.1% (empatado con SALIDA)", de: "4,1% (gleichauf mit LOS)", nl: "4,1% (gelijk met START)" },
        { en: "5.8% (due to Chance card)", es: "5.8% (debido a carta de Suerte)", de: "5,8% (aufgrund von Ereigniskarte)", nl: "5,8% (door Kanskaart)" }
      ],
      correct: 1,
      explanation: {
        en: "Markov chain analysis shows Illinois Avenue has 3.18% landing frequency per space, highest of all properties due to optimal distance from Jail and 'Advance to Illinois Ave' Chance card.",
        es: "El análisis de cadena de Markov muestra que Illinois Avenue tiene una frecuencia de aterrizaje del 3.18% por espacio, la más alta de todas las propiedades debido a la distancia óptima de la Cárcel y la carta de Suerte 'Avanzar a Illinois Ave'.",
        de: "Markov-Ketten-Analyse zeigt, dass Illinois Avenue eine Landefrequenz von 3,18% pro Feld hat, höchste aller Grundstücke aufgrund optimaler Distanz vom Gefängnis und 'Gehen Sie zu Illinois Ave' Ereigniskarte.",
        nl: "Markov keten analyse toont dat Illinois Avenue een landingsfrequentie van 3,18% per vak heeft, hoogste van alle eigendommen door optimale afstand van Gevangenis en 'Ga naar Illinois Ave' Kanskaart."
      }
    },
    {
      question: {
        en: "What is the theoretical maximum number of consecutive turns a single player can take in official rules?",
        es: "¿Cuál es el número teórico máximo de turnos consecutivos que un solo jugador puede tomar en reglas oficiales?",
        de: "Was ist die theoretische Maximalanzahl aufeinanderfolgender Züge, die ein einzelner Spieler nach offiziellen Regeln machen kann?",
        nl: "Wat is het theoretische maximum aantal opeenvolgende beurten dat een enkele speler kan nemen in officiële regels?"
      },
      options: [
        { en: "2 turns (one set of doubles)", es: "2 turnos (un conjunto de dobles)", de: "2 Züge (ein Satz Pasche)", nl: "2 beurten (één set dubbels)" },
        { en: "3 turns (two sets of doubles)", es: "3 turnos (dos conjuntos de dobles)", de: "3 Züge (zwei Sätze Pasche)", nl: "3 beurten (twee sets dubbels)" },
        { en: "Infinite (with perfect rolls)", es: "Infinito (con tiradas perfectas)", de: "Unendlich (mit perfekten Würfen)", nl: "Oneindig (met perfecte worpen)" },
        { en: "No limit exists - house rule dependent", es: "No existe límite - dependiente de reglas caseras", de: "Kein Limit existiert - hausregelabhängig", nl: "Geen limiet bestaat - huisregel afhankelijk" }
      ],
      correct: 1,
      explanation: {
        en: "Maximum 3 turns: roll doubles twice for 2 extra turns, but a third double sends you to Jail ending your sequence. This is a hard limit in official rules.",
        es: "Máximo 3 turnos: sacar dobles dos veces para 2 turnos extra, pero un tercer doble te envía a la Cárcel terminando tu secuencia. Este es un límite estricto en reglas oficiales.",
        de: "Maximum 3 Züge: Pasch zweimal würfeln für 2 Extra-Züge, aber ein dritter Pasch schickt Sie ins Gefängnis und beendet Ihre Sequenz. Dies ist eine harte Grenze in offiziellen Regeln.",
        nl: "Maximum 3 beurten: twee keer dubbel gooien voor 2 extra beurten, maar een derde dubbel stuurt je naar Gevangenis en beëindigt je reeks. Dit is een harde limiet in officiële regels."
      }
    },
    {
      question: {
        en: "In the 1999 Monopoly Patent Infringement case (Hasbro v. Anti-Monopoly), what legal precedent was established?",
        es: "En el caso de infracción de patente de Monopoly de 1999 (Hasbro v. Anti-Monopoly), ¿qué precedente legal se estableció?",
        de: "Im Monopoly-Patentverletzungsfall von 1999 (Hasbro gegen Anti-Monopoly), welcher rechtliche Präzedenzfall wurde geschaffen?",
        nl: "In de Monopoly Patent Inbreuk zaak van 1999 (Hasbro v. Anti-Monopoly), welk juridisch precedent werd gevestigd?"
      },
      options: [
        { en: "Generic trademarks can be reclaimed through rebranding", es: "Las marcas genéricas pueden recuperarse mediante cambio de marca", de: "Generische Marken können durch Rebranding zurückgewonnen werden", nl: "Generieke handelsmerken kunnen worden teruggewonnen door rebranding" },
        { en: "Game mechanics cannot be patented, only names", es: "La mecánica del juego no puede patentarse, solo los nombres", de: "Spielmechaniken können nicht patentiert werden, nur Namen", nl: "Spelmechanismen kunnen niet gepatenteerd worden, alleen namen" },
        { en: "Parody games are protected under fair use", es: "Los juegos de parodia están protegidos bajo uso justo", de: "Parodie-Spiele sind durch Fair Use geschützt", nl: "Parodie spellen zijn beschermd onder fair use" },
        { en: "Original creator rights supersede commercial ownership", es: "Los derechos del creador original superan la propiedad comercial", de: "Originalschöpfer-Rechte überwiegen kommerzielle Eigentumsrechte", nl: "Oorspronkelijke maker rechten gaan boven commercieel eigendom" }
      ],
      correct: 2,
      explanation: {
        en: "U.S. Courts ruled that Anti-Monopoly, a game criticizing monopolies, constitutes protected parody/criticism, establishing that satirical board games can use similar mechanics under First Amendment.",
        es: "Los tribunales de EE.UU. dictaminaron que Anti-Monopoly, un juego que critica los monopolios, constituye parodia/crítica protegida, estableciendo que los juegos de mesa satíricos pueden usar mecánicas similares bajo la Primera Enmienda.",
        de: "US-Gerichte entschieden, dass Anti-Monopoly, ein Spiel das Monopole kritisiert, geschützte Parodie/Kritik darstellt, wodurch festgelegt wurde, dass satirische Brettspiele ähnliche Mechaniken unter dem First Amendment nutzen können.",
        nl: "Amerikaanse rechtbanken oordeelden dat Anti-Monopoly, een spel dat monopolies bekritiseert, beschermde parodie/kritiek vormt, wat vaststelde dat satirische bordspellen vergelijkbare mechanismen kunnen gebruiken onder het First Amendment."
      }
    },
    {
      question: {
        en: "What is the precise expected value difference between owning Pennsylvania Railroad vs. B&O Railroad in isolation?",
        es: "¿Cuál es la diferencia de valor esperado precisa entre poseer Pennsylvania Railroad vs. B&O Railroad de forma aislada?",
        de: "Was ist die genaue Erwartungswerfdifferenz zwischen Besitz von Pennsylvania Railroad vs. B&O Railroad isoliert?",
        nl: "Wat is het precieze verwachte waarde verschil tussen het bezitten van Pennsylvania Railroad vs. B&O Railroad geïsoleerd?"
      },
      options: [
        { en: "Identical - all railroads have equal expected value", es: "Idéntico - todos los ferrocarriles tienen igual valor esperado", de: "Identisch - alle Bahnhöfe haben gleichen Erwartungswert", nl: "Identiek - alle spoorwegen hebben gelijke verwachte waarde" },
        { en: "Pennsylvania ~8% higher due to position", es: "Pennsylvania ~8% más alto debido a la posición", de: "Pennsylvania ~8% höher aufgrund der Position", nl: "Pennsylvania ~8% hoger door positie" },
        { en: "B&O ~12% higher due to Chance card probability", es: "B&O ~12% más alto debido a probabilidad de carta de Suerte", de: "B&O ~12% höher aufgrund Ereigniskartenwahrscheinlichkeit", nl: "B&O ~12% hoger door Kanskaart waarschijnlijkheid" },
        { en: "Reading ~15% higher than all others", es: "Reading ~15% más alto que todos los demás", de: "Reading ~15% höher als alle anderen", nl: "Reading ~15% hoger dan alle anderen" }
      ],
      correct: 1,
      explanation: {
        en: "Pennsylvania Railroad (position 15) is landed on ~2.66% per turn vs B&O (position 25) at ~2.45%, making Pennsylvania approximately 8% more valuable in expected rent collection over time.",
        es: "Pennsylvania Railroad (posición 15) es visitado ~2.66% por turno vs B&O (posición 25) a ~2.45%, haciendo a Pennsylvania aproximadamente 8% más valioso en cobro de alquiler esperado con el tiempo.",
        de: "Pennsylvania Railroad (Position 15) wird mit ~2,66% pro Runde besucht vs B&O (Position 25) mit ~2,45%, was Pennsylvania etwa 8% wertvoller in erwarteter Mietsammlung über Zeit macht.",
        nl: "Pennsylvania Railroad (positie 15) wordt bezocht met ~2,66% per beurt vs B&O (positie 25) met ~2,45%, wat Pennsylvania ongeveer 8% waardevoller maakt in verwachte huurinning over tijd."
      }
    },
    {
      question: {
        en: "In the 1935 original patent, what was the stated educational purpose of Monopoly?",
        es: "En la patente original de 1935, ¿cuál fue el propósito educativo declarado de Monopoly?",
        de: "Im ursprünglichen Patent von 1935, was war der erklärte Bildungszweck von Monopoly?",
        nl: "In het originele patent van 1935, wat was het verklaarde educatieve doel van Monopoly?"
      },
      options: [
        { en: "To teach capitalism and free market economics", es: "Enseñar capitalismo y economía de libre mercado", de: "Kapitalismus und freie Marktwirtschaft zu lehren", nl: "Kapitalisme en vrije markt economie onderwijzen" },
        { en: "To demonstrate the evils of monopolistic practices", es: "Demostrar los males de las prácticas monopolísticas", de: "Die Übel monopolistischer Praktiken zu demonstrieren", nl: "De kwaden van monopolistische praktijken demonstreren" },
        { en: "Pure entertainment with no educational claim", es: "Entretenimiento puro sin reivindicación educativa", de: "Reine Unterhaltung ohne Bildungsanspruch", nl: "Puur entertainment zonder educatieve claim" },
        { en: "To teach real estate investment principles", es: "Enseñar principios de inversión inmobiliaria", de: "Immobilieninvestitionsprinzipien zu lehren", nl: "Vastgoed investering principes onderwijzen" }
      ],
      correct: 2,
      explanation: {
        en: "Parker Brothers' 1935 patent made no educational claims - it was marketed purely as entertainment. The original Landlord's Game had educational goals, but Darrow's commercialized version did not.",
        es: "La patente de Parker Brothers de 1935 no hizo reivindicaciones educativas - se comercializó puramente como entretenimiento. El juego original Landlord's Game tenía objetivos educativos, pero la versión comercializada de Darrow no.",
        de: "Parker Brothers' Patent von 1935 machte keine Bildungsansprüche - es wurde rein als Unterhaltung vermarktet. Das ursprüngliche Landlord's Game hatte Bildungsziele, aber Darrows kommerzialisierte Version nicht.",
        nl: "Parker Brothers' patent van 1935 maakte geen educatieve claims - het werd puur als entertainment op de markt gebracht. Het originele Landlord's Game had educatieve doelen, maar Darrow's gecommercialiseerde versie niet."
      }
    },
    {
      question: {
        en: "What is the optimal mixed-strategy trading ratio for light blue properties vs. orange properties in 2-player competitive analysis?",
        es: "¿Cuál es la proporción de negociación de estrategia mixta óptima para propiedades azul claro vs. propiedades naranjas en análisis competitivo de 2 jugadores?",
        de: "Was ist das optimale Mischstrategie-Handelsverhältnis für hellblaue Grundstücke vs. orange Grundstücke in 2-Spieler-Wettbewerbsanalyse?",
        nl: "Wat is de optimale gemengde-strategie ruilverhouding voor lichtblauwe eigendommen vs. oranje eigendommen in 2-speler competitieve analyse?"
      },
      options: [
        { en: "1:1 - equal monopoly value", es: "1:1 - valor de monopolio igual", de: "1:1 - gleicher Monopolwert", nl: "1:1 - gelijke monopolie waarde" },
        { en: "Light blue + $150-200 for single orange", es: "Azul claro + $150-200 por una naranja", de: "Hellblau + $150-200 für einzelnes Orange", nl: "Lichtblauw + $150-200 voor enkele oranje" },
        { en: "Complete light blue monopoly + $300 for orange monopoly", es: "Monopolio azul claro completo + $300 por monopolio naranja", de: "Komplettes hellblaues Monopol + $300 für orange Monopol", nl: "Compleet lichtblauw monopolie + $300 voor oranje monopolie" },
        { en: "Never trade - orange cannot be fairly compensated", es: "Nunca negociar - naranja no puede ser compensado justamente", de: "Niemals handeln - Orange kann nicht fair kompensiert werden", nl: "Nooit ruilen - oranje kan niet eerlijk gecompenseerd worden" }
      ],
      correct: 2,
      explanation: {
        en: "Simulation analysis shows orange monopoly is worth complete light blue monopoly plus approximately $300-350 due to superior landing probability (3x vs 2.2x frequency) and equivalent development costs.",
        es: "El análisis de simulación muestra que el monopolio naranja vale monopolio azul claro completo más aproximadamente $300-350 debido a probabilidad superior de caída (3x vs 2.2x frecuencia) y costos de desarrollo equivalentes.",
        de: "Simulationsanalyse zeigt, dass orange Monopol ein komplettes hellblaues Monopol plus etwa $300-350 wert ist aufgrund überlegener Landewahrscheinlichkeit (3x vs 2,2x Frequenz) und gleichwertiger Entwicklungskosten.",
        nl: "Simulatie analyse toont dat oranje monopolie een compleet lichtblauw monopolie plus ongeveer $300-350 waard is door superieure landingswaarschijnlijkheid (3x vs 2,2x frequentie) en equivalente ontwikkelingskosten."
      }
    },
    {
      question: {
        en: "In high-level play, what is the 'Slumlord Strategy' and when is it mathematically optimal?",
        es: "En juego de alto nivel, ¿qué es la 'Estrategia del Casero de Tugurios' y cuándo es matemáticamente óptima?",
        de: "Im hochrangigen Spiel, was ist die 'Slumvermieter-Strategie' und wann ist sie mathematisch optimal?",
        nl: "In hoog-niveau spel, wat is de 'Sloopheer Strategie' en wanneer is het mathematisch optimaal?"
      },
      options: [
        { en: "Develop only dark purple/brown to minimum cost", es: "Desarrollar solo morado oscuro/marrón a costo mínimo", de: "Nur dunkellila/braun zum Mindestpreis entwickeln", nl: "Alleen donkerpaars/bruin ontwikkelen tot minimum kosten" },
        { en: "Build 2 houses per property across multiple monopolies instead of 4", es: "Construir 2 casas por propiedad en múltiples monopolios en lugar de 4", de: "2 Häuser pro Grundstück über mehrere Monopole statt 4 bauen", nl: "2 huizen per eigendom bouwen over meerdere monopolies in plaats van 4" },
        { en: "Acquire utilities/railroads only, never property monopolies", es: "Adquirir solo servicios/ferrocarriles, nunca monopolios de propiedades", de: "Nur Versorger/Bahnhöfe erwerben, niemals Grundstücksmonopole", nl: "Alleen nutsbedrijven/spoorwegen verwerven, nooit eigendomsmonopolies" },
        { en: "Build exactly 1 house on each property to block opponent building", es: "Construir exactamente 1 casa en cada propiedad para bloquear construcción del oponente", de: "Genau 1 Haus auf jedem Grundstück bauen um Gegnerbau zu blockieren", nl: "Precies 1 huis bouwen op elk eigendom om tegenstander bouwen te blokkeren" }
      ],
      correct: 1,
      explanation: {
        en: "Slumlord Strategy: build 2 houses on each property across 2-3 monopolies instead of fully developing one. Optimal when you have capital advantage and want to diversify risk while maintaining cash flow.",
        es: "Estrategia del Casero de Tugurios: construir 2 casas en cada propiedad en 2-3 monopolios en lugar de desarrollar completamente uno. Óptimo cuando tienes ventaja de capital y quieres diversificar el riesgo manteniendo el flujo de efectivo.",
        de: "Slumvermieter-Strategie: 2 Häuser auf jedem Grundstück über 2-3 Monopole bauen statt ein Monopol voll zu entwickeln. Optimal wenn man Kapitalvorteil hat und Risiko diversifizieren will während Cashflow beibehalten wird.",
        nl: "Sloopheer Strategie: 2 huizen bouwen op elk eigendom over 2-3 monopolies in plaats van één volledig ontwikkelen. Optimaal wanneer je kapitaalvoordeel hebt en risico wilt diversifiëren terwijl cashflow behouden blijft."
      }
    },
    {
      question: {
        en: "What probability distribution best describes the time-until-bankruptcy in Monopoly?",
        es: "¿Qué distribución de probabilidad describe mejor el tiempo hasta la bancarrota en Monopoly?",
        de: "Welche Wahrscheinlichkeitsverteilung beschreibt die Zeit-bis-Bankrott in Monopoly am besten?",
        nl: "Welke waarschijnlijkheidsdistributie beschrijft de tijd-tot-faillissement in Monopoly het beste?"
      },
      options: [
        { en: "Normal distribution centered at 60 turns", es: "Distribución normal centrada en 60 turnos", de: "Normalverteilung zentriert bei 60 Runden", nl: "Normale distributie gecentreerd op 60 beurten" },
        { en: "Exponential distribution with rate parameter λ≈0.02", es: "Distribución exponencial con parámetro de tasa λ≈0.02", de: "Exponentialverteilung mit Ratenparameter λ≈0,02", nl: "Exponentiële distributie met ratio parameter λ≈0.02" },
        { en: "Weibull distribution with shape parameter k≈2.3", es: "Distribución de Weibull con parámetro de forma k≈2.3", de: "Weibull-Verteilung mit Formparameter k≈2,3", nl: "Weibull distributie met vorm parameter k≈2.3" },
        { en: "Bimodal distribution - early vs. late game bankruptcies", es: "Distribución bimodal - bancarrotas de juego temprano vs. tardío", de: "Bimodale Verteilung - Früh- vs. Spätspiel-Bankrotte", nl: "Bimodale distributie - vroeg vs. laat spel faillissementen" }
      ],
      correct: 2,
      explanation: {
        en: "Computer simulations show Weibull distribution (k≈2.3): initial period where bankruptcy is unlikely, then increasing hazard rate as properties develop, then plateau. Not exponential (memoryless) or normal (symmetric).",
        es: "Las simulaciones por computadora muestran distribución de Weibull (k≈2.3): período inicial donde la bancarrota es improbable, luego tasa de riesgo creciente a medida que se desarrollan las propiedades, luego meseta. No exponencial (sin memoria) ni normal (simétrica).",
        de: "Computersimulationen zeigen Weibull-Verteilung (k≈2,3): anfängliche Periode wo Bankrott unwahrscheinlich ist, dann steigende Gefährdungsrate wenn Grundstücke entwickelt werden, dann Plateau. Nicht exponential (gedächtnislos) oder normal (symmetrisch).",
        nl: "Computersimulaties tonen Weibull distributie (k≈2,3): initiële periode waar faillissement onwaarschijnlijk is, dan toenemende risico ratio naarmate eigendommen ontwikkelen, dan plateau. Niet exponentieel (geheugenloos) of normaal (symmetrisch)."
      }
    },
    {
      question: {
        en: "According to the 2004 World Championship analysis, what opening trade pattern has the highest win correlation?",
        es: "Según el análisis del Campeonato Mundial de 2004, ¿qué patrón de intercambio de apertura tiene la correlación de victoria más alta?",
        de: "Laut Weltmeisterschaftsanalyse 2004, welches Eröffnungshandelsmuster hat die höchste Siegkorrelation?",
        nl: "Volgens de Wereldkampioenschap analyse van 2004, welk openingsruilpatroon heeft de hoogste win correlatie?"
      },
      options: [
        { en: "First trade within 2 circuits - aggressive monopoly formation", es: "Primer intercambio dentro de 2 circuitos - formación de monopolio agresiva", de: "Erster Handel innerhalb von 2 Runden - aggressive Monopolbildung", nl: "Eerste ruil binnen 2 rondes - agressieve monopolievorming" },
        { en: "Delayed trading (circuits 3-4) - accumulate leverage", es: "Negociación retrasada (circuitos 3-4) - acumular influencia", de: "Verzögerter Handel (Runden 3-4) - Einfluss akkumulieren", nl: "Uitgestelde ruil (rondes 3-4) - invloed accumuleren" },
        { en: "No early trading - force opponents into suboptimal auctions", es: "Sin negociación temprana - forzar a oponentes a subastas subóptimas", de: "Kein früher Handel - Gegner zu suboptimalen Auktionen zwingen", nl: "Geen vroege ruil - tegenstanders dwingen tot suboptimale veilingen" },
        { en: "Immediate first-circuit trading for any monopoly", es: "Negociación inmediata en primer circuito por cualquier monopolio", de: "Sofortiger Erst-Runden-Handel für jedes Monopol", nl: "Onmiddellijke eerste-ronde ruil voor elk monopolie" }
      ],
      correct: 1,
      explanation: {
        en: "Statistical analysis showed 67% win rate for players who made first major trade in circuits 3-4 vs. 43% for circuit 1-2 traders. Waiting accumulates properties for better negotiating position.",
        es: "El análisis estadístico mostró una tasa de victoria del 67% para jugadores que hicieron el primer intercambio mayor en circuitos 3-4 vs. 43% para comerciantes de circuito 1-2. Esperar acumula propiedades para una mejor posición de negociación.",
        de: "Statistische Analyse zeigte 67% Siegrate für Spieler die ersten großen Handel in Runden 3-4 machten vs. 43% für Runden 1-2 Händler. Warten akkumuliert Grundstücke für bessere Verhandlungsposition.",
        nl: "Statistische analyse toonde 67% win ratio voor spelers die eerste grote ruil maakten in rondes 3-4 vs. 43% voor ronde 1-2 ruilaars. Wachten accumuleert eigendommen voor betere onderhandelingspositie."
      }
    },
    {
      question: {
        en: "In the rare 'perpetual game' scenario, what mathematical condition prevents natural termination?",
        es: "En el escenario raro de 'juego perpetuo', ¿qué condición matemática previene la terminación natural?",
        de: "Im seltenen 'ewiges Spiel'-Szenario, welche mathematische Bedingung verhindert natürliche Beendigung?",
        nl: "In het zeldzame 'eeuwig spel' scenario, welke mathematische conditie voorkomt natuurlijke beëindiging?"
      },
      options: [
        { en: "All players maintain exact cash equilibrium through trades", es: "Todos los jugadores mantienen equilibrio de efectivo exacto mediante intercambios", de: "Alle Spieler halten exaktes Geldgleichgewicht durch Handel", nl: "Alle spelers behouden exact cash evenwicht door ruilen" },
        { en: "Free Parking money injection exceeds average rent depletion", es: "La inyección de dinero de Estacionamiento Gratuito excede el agotamiento promedio de alquiler", de: "Freies Parken Geldinjektion übersteigt durchschnittliche Mieterschöpfung", nl: "Gratis Parkeren geld injectie overschrijdt gemiddelde huur uitputting" },
        { en: "No monopolies formed - players collect GO faster than expenses", es: "Sin monopolios formados - los jugadores cobran SALIDA más rápido que los gastos", de: "Keine Monopole gebildet - Spieler sammeln LOS schneller als Ausgaben", nl: "Geen monopolies gevormd - spelers verzamelen START sneller dan uitgaven" },
        { en: "Property ownership creates perfect Nash equilibrium stalemate", es: "La propiedad inmobiliaria crea un estancamiento de equilibrio de Nash perfecto", de: "Grundstücksbesitz schafft perfektes Nash-Gleichgewichts-Patt", nl: "Eigendomsbezit creëert perfecte Nash evenwicht impasse" }
      ],
      correct: 1,
      explanation: {
        en: "Perpetual games occur when Free Parking house rule accumulates money faster than rent/tax can deplete it, creating positive-sum economy. Without monopolies, income exceeds average expenses indefinitely.",
        es: "Los juegos perpetuos ocurren cuando la regla casera de Estacionamiento Gratuito acumula dinero más rápido de lo que el alquiler/impuesto puede agotarlo, creando economía de suma positiva. Sin monopolios, los ingresos exceden los gastos promedio indefinidamente.",
        de: "Ewige Spiele treten auf wenn Freies Parken-Hausregel Geld schneller akkumuliert als Miete/Steuer es erschöpfen kann, was eine Positivsummen-Ökonomie schafft. Ohne Monopole übersteigen Einnahmen durchschnittliche Ausgaben unbegrenzt.",
        nl: "Eeuwige spellen treden op wanneer Gratis Parkeren huisregel geld sneller accumuleert dan huur/belasting het kan uitputten, wat een positieve-som economie creëert. Zonder monopolies overschrijden inkomsten gemiddelde uitgaven onbeperkt."
      }
    },
    {
      question: {
        en: "What is the 'Kelly Criterion' application in Monopoly tournament bidding strategy?",
        es: "¿Cuál es la aplicación del 'Criterio de Kelly' en la estrategia de licitación de torneos de Monopoly?",
        de: "Was ist die 'Kelly-Kriterium'-Anwendung in der Monopoly-Turnier-Bietungsstrategie?",
        nl: "Wat is de 'Kelly Criterium' toepassing in Monopoly toernooi biedstrategie?"
      },
      options: [
        { en: "Bid maximum bankroll percentage: (edge/odds) of current capital", es: "Ofertar porcentaje máximo de banca: (ventaja/probabilidades) del capital actual", de: "Maximalen Bankroll-Prozentsatz bieten: (Vorteil/Quoten) des aktuellen Kapitals", nl: "Maximum bankroll percentage bieden: (voordeel/odds) van huidig kapitaal" },
        { en: "Never bid more than 50% of current cash on any auction", es: "Nunca ofertar más del 50% del efectivo actual en cualquier subasta", de: "Niemals mehr als 50% des aktuellen Geldes in einer Auktion bieten", nl: "Nooit meer dan 50% van huidige cash bieden op een veiling" },
        { en: "Bid property face value minus expected opponent counter-bid", es: "Ofertar valor nominal de propiedad menos contraoferta esperada del oponente", de: "Grundstücksnennwert minus erwartetes Gegen-Gebot des Gegners bieten", nl: "Eigendom nominale waarde min verwachte tegenbod van tegenstander bieden" },
        { en: "Fixed percentage bidding - always bid 70% of property value", es: "Licitación de porcentaje fijo - siempre ofertar 70% del valor de la propiedad", de: "Fester Prozentsatz-Bieten - immer 70% des Grundstückswerts bieten", nl: "Vast percentage bieden - altijd 70% van eigendomswaarde bieden" }
      ],
      correct: 0,
      explanation: {
        en: "Kelly Criterion: optimal auction bid = (winning_probability × expected_value - losing_probability) / odds. Maximizes long-run capital growth while preventing overbidding that risks bankruptcy.",
        es: "Criterio de Kelly: oferta óptima en subasta = (probabilidad_de_ganar × valor_esperado - probabilidad_de_perder) / probabilidades. Maximiza el crecimiento de capital a largo plazo evitando sobrepujar que arriesga la bancarrota.",
        de: "Kelly-Kriterium: optimales Auktionsgebot = (Gewinnwahrscheinlichkeit × Erwartungswert - Verlustwahrscheinlichkeit) / Quoten. Maximiert langfristiges Kapitalwachstum während Überbieten verhindert wird das Bankrott riskiert.",
        nl: "Kelly Criterium: optimaal veiling bod = (winst_waarschijnlijkheid × verwachte_waarde - verlies_waarschijnlijkheid) / odds. Maximaliseert lange termijn kapitaalgroei terwijl overbieden voorkomen wordt dat faillissement riskeert."
      }
    },
    {
      question: {
        en: "In the original 1903 Landlord's Game, what were the two alternate rule sets called?",
        es: "En el juego original Landlord's Game de 1903, ¿cómo se llamaban los dos conjuntos de reglas alternativas?",
        de: "Im ursprünglichen Landlord's Game von 1903, wie hießen die beiden alternativen Regelsätze?",
        nl: "In het originele Landlord's Game van 1903, hoe heetten de twee alternatieve regelsets?"
      },
      options: [
        { en: "Prosperity Rules vs. Monopoly Rules", es: "Reglas de Prosperidad vs. Reglas de Monopolio", de: "Wohlstandsregeln vs. Monopolregeln", nl: "Welvaart Regels vs. Monopolie Regels" },
        { en: "Fair Play vs. Capitalist Mode", es: "Juego Limpio vs. Modo Capitalista", de: "Fair Play vs. Kapitalistischer Modus", nl: "Fair Play vs. Kapitalistische Modus" },
        { en: "Anti-Trust vs. Pro-Business", es: "Antimonopolio vs. Pro-Negocios", de: "Kartellrecht vs. Geschäftsfreundlich", nl: "Anti-Trust vs. Pro-Business" },
        { en: "Socialist Game vs. Landlord Game", es: "Juego Socialista vs. Juego del Terrateniente", de: "Sozialistisches Spiel vs. Vermieter-Spiel", nl: "Socialistisch Spel vs. Landheer Spel" }
      ],
      correct: 0,
      explanation: {
        en: "Magie's original game had 'Prosperity Rules' where rent went to public treasury benefiting all, vs. 'Monopoly Rules' (current version) showing wealth concentration. This demonstrated anti-monopoly philosophy.",
        es: "El juego original de Magie tenía 'Reglas de Prosperidad' donde el alquiler iba al tesoro público beneficiando a todos, vs. 'Reglas de Monopolio' (versión actual) mostrando concentración de riqueza. Esto demostró filosofía antimonopolio.",
        de: "Magies Originalspiel hatte 'Wohlstandsregeln' wo Miete an öffentliche Kasse ging und allen zugute kam, vs. 'Monopolregeln' (aktuelle Version) die Vermögenskonzentration zeigen. Dies demonstrierte Anti-Monopol-Philosophie.",
        nl: "Magie's originele spel had 'Welvaart Regels' waar huur naar openbare schatkist ging ten behoeve van allen, vs. 'Monopolie Regels' (huidige versie) die vermogensconcentratie tonen. Dit demonstreerde anti-monopolie filosofie."
      }
    },
    {
      question: {
        en: "What is the theoretical 'Monopoly Singularity' in infinite-player game theory?",
        es: "¿Qué es la 'Singularidad de Monopoly' teórica en la teoría de juegos de infinitos jugadores?",
        de: "Was ist die theoretische 'Monopoly-Singularität' in der Spieltheorie mit unendlich vielen Spielern?",
        nl: "Wat is de theoretische 'Monopoly Singulariteit' in oneindige-speler speltheorie?"
      },
      options: [
        { en: "Point where all money concentrates in single player", es: "Punto donde todo el dinero se concentra en un solo jugador", de: "Punkt wo sich alles Geld bei einem Spieler konzentriert", nl: "Punt waar al het geld bij één speler concentreert" },
        { en: "Limit where optimal strategy converges to pure cooperation", es: "Límite donde la estrategia óptima converge hacia cooperación pura", de: "Grenze wo optimale Strategie zu reiner Kooperation konvergiert", nl: "Limiet waar optimale strategie convergeert naar pure samenwerking" },
        { en: "State where property values approach zero per player", es: "Estado donde los valores de propiedad se aproximan a cero por jugador", de: "Zustand wo Grundstückswerte gegen null pro Spieler gehen", nl: "Staat waar eigendomswaarden naar nul per speler naderen" },
        { en: "Nash equilibrium becomes undefined due to infinite complexity", es: "El equilibrio de Nash se vuelve indefinido debido a complejidad infinita", de: "Nash-Gleichgewicht wird aufgrund unendlicher Komplexität undefiniert", nl: "Nash evenwicht wordt ongedefinieerd door oneindige complexiteit" }
      ],
      correct: 2,
      explanation: {
        en: "As player count approaches infinity, each property's expected value per player approaches zero, creating a 'tragedy of the commons' where no monopoly has sufficient leverage. Game becomes effectively unplayable.",
        es: "A medida que el conteo de jugadores se aproxima al infinito, el valor esperado de cada propiedad por jugador se aproxima a cero, creando una 'tragedia de los comunes' donde ningún monopolio tiene apalancamiento suficiente. El juego se vuelve efectivamente injugable.",
        de: "Wenn die Spielerzahl gegen unendlich geht, nähert sich der Erwartungswert jedes Grundstücks pro Spieler null, was eine 'Tragödie der Allmende' schafft wo kein Monopol ausreichenden Einfluss hat. Spiel wird faktisch unspielbar.",
        nl: "Naarmate het aantal spelers naar oneindig gaat, nadert de verwachte waarde van elk eigendom per speler naar nul, wat een 'tragedy of the commons' creëert waar geen monopolie voldoende hefboomwerking heeft. Spel wordt effectief onspeelbaar."
      }
    },
    {
      question: {
        en: "According to the 2009 documentary 'Under the Boardwalk', what psychological factor most strongly predicts tournament success?",
        es: "Según el documental de 2009 'Under the Boardwalk', ¿qué factor psicológico predice más fuertemente el éxito en torneos?",
        de: "Laut der Dokumentation 'Under the Boardwalk' von 2009, welcher psychologische Faktor sagt Turniererfolg am stärksten voraus?",
        nl: "Volgens de documentaire 'Under the Boardwalk' van 2009, welke psychologische factor voorspelt toernooisucces het sterkst?"
      },
      options: [
        { en: "Risk tolerance - willingness to make aggressive trades", es: "Tolerancia al riesgo - disposición a hacer intercambios agresivos", de: "Risikobereitschaft - Bereitschaft zu aggressiven Handelsgeschäften", nl: "Risicotolerantie - bereidheid om agressieve ruilen te maken" },
        { en: "Emotional control - maintaining calm after bad rolls", es: "Control emocional - mantener la calma después de malas tiradas", de: "Emotionale Kontrolle - Ruhe nach schlechten Würfen bewahren", nl: "Emotionele controle - kalmte behouden na slechte worpen" },
        { en: "Mathematical calculation speed and accuracy", es: "Velocidad y precisión de cálculo matemático", de: "Mathematische Berechnungsgeschwindigkeit und Genauigkeit", nl: "Wiskundige berekeningssnelheid en nauwkeurigheid" },
        { en: "Social manipulation - reading opponent intentions", es: "Manipulación social - leer intenciones del oponente", de: "Soziale Manipulation - Absichten des Gegners lesen", nl: "Sociale manipulatie - bedoelingen van tegenstander lezen" }
      ],
      correct: 1,
      explanation: {
        en: "Documentary interviews with champions revealed emotional control as strongest predictor - ability to maintain optimal strategy despite variance. Top players show minimal tilt regardless of luck.",
        es: "Las entrevistas del documental con campeones revelaron el control emocional como el predictor más fuerte - capacidad de mantener estrategia óptima a pesar de la varianza. Los mejores jugadores muestran inclinación mínima independientemente de la suerte.",
        de: "Dokumentarinterviews mit Champions zeigten emotionale Kontrolle als stärksten Prädiktor - Fähigkeit optimale Strategie trotz Varianz beizubehalten. Top-Spieler zeigen minimale Neigung unabhängig vom Glück.",
        nl: "Documentaire interviews met kampioenen onthulden emotionele controle als sterkste voorspeller - vermogen om optimale strategie te behouden ondanks variantie. Top spelers tonen minimale tilt ongeacht geluk."
      }
    },
    {
      question: {
        en: "In the 1982 legal case establishing Monopoly trademark genericness, what was the court's economic reasoning?",
        es: "En el caso legal de 1982 que estableció la genericidad de la marca Monopoly, ¿cuál fue el razonamiento económico del tribunal?",
        de: "Im Rechtsfall von 1982 zur Feststellung der Monopoly-Marken-Gattungsbezeichnung, was war die wirtschaftliche Begründung des Gerichts?",
        nl: "In de juridische zaak van 1982 die Monopoly handelsmerk genericiteit vaststelde, wat was de economische redenering van de rechtbank?"
      },
      options: [
        { en: "Generic terms cannot be trademarked retroactively", es: "Los términos genéricos no pueden ser registrados retroactivamente", de: "Generische Begriffe können nicht rückwirkend markenrechtlich geschützt werden", nl: "Generieke termen kunnen niet retroactief gedeponeerd worden" },
        { en: "Public domain status from expired patent", es: "Estado de dominio público por patente vencida", de: "Gemeinfreier Status durch abgelaufenes Patent", nl: "Publiek domein status door verlopen patent" },
        { en: "Widespread public use made 'monopoly' a game category", es: "Uso público generalizado hizo de 'monopoly' una categoría de juego", de: "Weit verbreitete öffentliche Nutzung machte 'Monopoly' zu einer Spielkategorie", nl: "Wijdverbreid publiek gebruik maakte 'monopoly' tot een spelcategorie" },
        { en: "Anti-Monopoly had prior claim from Landlord's Game", es: "Anti-Monopoly tenía reclamo previo del Landlord's Game", de: "Anti-Monopoly hatte vorherigen Anspruch vom Landlord's Game", nl: "Anti-Monopoly had eerdere claim van Landlord's Game" }
      ],
      correct: 2,
      explanation: {
        en: "Court ruled 'monopoly' became generic through widespread use as synonym for property-trading board games, losing trademark protection. Similar to 'escalator' or 'aspirin' becoming generic terms.",
        es: "El tribunal dictaminó que 'monopoly' se volvió genérico a través del uso generalizado como sinónimo de juegos de mesa de comercio de propiedades, perdiendo protección de marca. Similar a 'escalator' o 'aspirin' volviéndose términos genéricos.",
        de: "Gericht entschied, dass 'Monopoly' durch weit verbreitete Nutzung als Synonym für Grundstückshandel-Brettspiele generisch wurde und Markenschutz verlor. Ähnlich wie 'Rolltreppe' oder 'Aspirin' zu Gattungsbegriffen wurden.",
        nl: "Rechtbank oordeelde dat 'monopoly' generiek werd door wijdverbreid gebruik als synoniem voor eigendomshandel bordspellen, waarbij merkenrechtsbescherming verloren ging. Vergelijkbaar met 'escalator' of 'aspirin' die generieke termen werden."
      }
    },
    {
      question: {
        en: "What is the 'Paradox of Thrift' demonstration in extended Monopoly play?",
        es: "¿Qué es la demostración de la 'Paradoja del Ahorro' en el juego extendido de Monopoly?",
        de: "Was ist die 'Sparparadoxon'-Demonstration im erweiterten Monopoly-Spiel?",
        nl: "Wat is de 'Paradox van de Spaarzaamheid' demonstratie in uitgebreid Monopoly spel?"
      },
      options: [
        { en: "Hoarding cash prevents development, extending game indefinitely", es: "Acumular efectivo previene desarrollo, extendiendo el juego indefinidamente", de: "Geld horten verhindert Entwicklung, verlängert Spiel unbegrenzt", nl: "Cash oppotten voorkomt ontwikkeling, verlengt spel onbeperkt" },
        { en: "Over-developing properties leads to cash shortage and bankruptcy", es: "Sobre-desarrollar propiedades lleva a escasez de efectivo y bancarrota", de: "Überentwicklung von Grundstücken führt zu Geldknappheit und Bankrott", nl: "Over-ontwikkelen van eigendommen leidt tot cash tekort en faillissement" },
        { en: "Conservative players win by letting aggressive players eliminate each other", es: "Jugadores conservadores ganan dejando que jugadores agresivos se eliminen entre sí", de: "Konservative Spieler gewinnen indem sie aggressive Spieler sich gegenseitig eliminieren lassen", nl: "Conservatieve spelers winnen door agressieve spelers elkaar te laten elimineren" },
        { en: "All players saving reduces circulation, preventing anyone from winning", es: "Todos los jugadores ahorrando reduce circulación, evitando que alguien gane", de: "Alle Spieler sparen reduziert Zirkulation, verhindert dass jemand gewinnt", nl: "Alle spelers sparen vermindert circulatie, voorkomt dat iemand wint" }
      ],
      correct: 3,
      explanation: {
        en: "Classic Keynesian paradox: if ALL players hoard cash refusing to develop, total economic activity stalls. Individually rational (avoid bankruptcy) but collectively irrational (no one can win). Demonstrates market failure.",
        es: "Paradoja keynesiana clásica: si TODOS los jugadores acumulan efectivo rechazando desarrollar, la actividad económica total se estanca. Individualmente racional (evitar bancarrota) pero colectivamente irracional (nadie puede ganar). Demuestra falla del mercado.",
        de: "Klassisches keynesianisches Paradoxon: wenn ALLE Spieler Geld horten und Entwicklung ablehnen, stockt gesamte wirtschaftliche Aktivität. Individuell rational (Bankrott vermeiden) aber kollektiv irrational (niemand kann gewinnen). Demonstriert Marktversagen.",
        nl: "Klassiek Keynesiaans paradox: als ALLE spelers cash oppotten en weigeren te ontwikkelen, stagneert totale economische activiteit. Individueel rationeel (faillissement vermijden) maar collectief irrationeel (niemand kan winnen). Demonstreert marktfalen."
      }
    },
    {
      question: {
        en: "What advanced technique is 'property value decomposition' in competitive analysis?",
        es: "¿Qué técnica avanzada es la 'descomposición del valor de la propiedad' en análisis competitivo?",
        de: "Was ist die fortgeschrittene Technik 'Grundstückswertzerlegung' in der Wettbewerbsanalyse?",
        nl: "Wat is de geavanceerde techniek 'eigendomswaarde decompositie' in competitieve analyse?"
      },
      options: [
        { en: "Separating face value from strategic monopoly completion value", es: "Separar valor nominal del valor estratégico de completar monopolio", de: "Nennwert von strategischem Monopol-Vervollständigungswert trennen", nl: "Nominale waarde scheiden van strategische monopolie voltooiingswaarde" },
        { en: "Calculating present value of future rent streams", es: "Calcular valor presente de flujos de alquiler futuros", de: "Barwert zukünftiger Mietströme berechnen", nl: "Huidige waarde van toekomstige huurstromen berekenen" },
        { en: "Assigning probability-weighted values to each property", es: "Asignar valores ponderados por probabilidad a cada propiedad", de: "Wahrscheinlichkeitsgewichtete Werte jedem Grundstück zuweisen", nl: "Waarschijnlijkheid-gewogen waarden toewijzen aan elk eigendom" },
        { en: "Breaking down property value into: rent potential + blocking value + trading leverage", es: "Desglosar valor de propiedad en: potencial de alquiler + valor de bloqueo + apalancamiento de negociación", de: "Grundstückswert aufteilen in: Mietpotenzial + Blockierwert + Handelseinfluss", nl: "Eigendomswaarde opsplitsen in: huurpotentieel + blokkeerwaarde + handelsinvloed" }
      ],
      correct: 3,
      explanation: {
        en: "Advanced players decompose property value into three components: (1) rent generation potential, (2) blocking value (prevents opponent monopoly), (3) trading leverage (completes your monopoly). Total value = weighted sum.",
        es: "Los jugadores avanzados descomponen el valor de la propiedad en tres componentes: (1) potencial de generación de alquiler, (2) valor de bloqueo (previene monopolio del oponente), (3) apalancamiento de negociación (completa tu monopolio). Valor total = suma ponderada.",
        de: "Fortgeschrittene Spieler zerlegen Grundstückswert in drei Komponenten: (1) Mietgenerierungspotenzial, (2) Blockierwert (verhindert Gegnermonopol), (3) Handelseinfluss (vervollständigt eigenes Monopol). Gesamtwert = gewichtete Summe.",
        nl: "Gevorderde spelers splitsen eigendomswaarde op in drie componenten: (1) huurgeneratiepotentieel, (2) blokkeerwaarde (voorkomt tegenstander monopolie), (3) handelsinvloed (voltooit jouw monopolie). Totale waarde = gewogen som."
      }
    },
    {
      question: {
        en: "In information-theoretic analysis, what is the 'entropy collapse' point in Monopoly?",
        es: "En análisis de teoría de la información, ¿cuál es el punto de 'colapso de entropía' en Monopoly?",
        de: "In informationstheoretischer Analyse, was ist der 'Entropiekollaps'-Punkt in Monopoly?",
        nl: "In informatie-theoretische analyse, wat is het 'entropie ineenstorting' punt in Monopoly?"
      },
      options: [
        { en: "When first monopoly is fully developed - outcome becomes predictable", es: "Cuando el primer monopolio está completamente desarrollado - el resultado se vuelve predecible", de: "Wenn erstes Monopol voll entwickelt ist - Ergebnis wird vorhersagbar", nl: "Wanneer eerste monopolie volledig ontwikkeld is - uitkomst wordt voorspelbaar" },
        { en: "When all properties are owned - no more acquisition uncertainty", es: "Cuando todas las propiedades son poseídas - no más incertidumbre de adquisición", de: "Wenn alle Grundstücke besessen sind - keine Erwerbsunsicherheit mehr", nl: "Wanneer alle eigendommen bezeten zijn - geen acquisitie onzekerheid meer" },
        { en: "When second player is eliminated in 3+ player game", es: "Cuando el segundo jugador es eliminado en juego de 3+ jugadores", de: "Wenn zweiter Spieler in 3+ Spieler-Spiel eliminiert wird", nl: "Wanneer tweede speler wordt geëlimineerd in 3+ speler spel" },
        { en: "Moment when trailing player's bankruptcy becomes mathematically certain", es: "Momento cuando la bancarrota del jugador rezagado se vuelve matemáticamente cierta", de: "Moment wenn Bankrott des zurückliegenden Spielers mathematisch sicher wird", nl: "Moment wanneer faillissement van achterliggende speler mathematisch zeker wordt" }
      ],
      correct: 3,
      explanation: {
        en: "Entropy (uncertainty) collapses when mathematical analysis shows a player CANNOT recover regardless of dice rolls - usually when net worth ratio exceeds ~4:1 with developed properties. Game outcome is determined but play continues.",
        es: "La entropía (incertidumbre) colapsa cuando el análisis matemático muestra que un jugador NO PUEDE recuperarse independientemente de las tiradas de dados - usualmente cuando la proporción de valor neto excede ~4:1 con propiedades desarrolladas. El resultado del juego está determinado pero el juego continúa.",
        de: "Entropie (Unsicherheit) kollabiert wenn mathematische Analyse zeigt dass ein Spieler sich NICHT erholen kann unabhängig von Würfelwürfen - üblicherweise wenn Nettovermögensverhältnis ~4:1 mit entwickelten Grundstücken überschreitet. Spielergebnis ist bestimmt aber Spiel geht weiter.",
        nl: "Entropie (onzekerheid) stort in wanneer mathematische analyse toont dat een speler NIET kan herstellen ongeacht dobbelsteenworpen - meestal wanneer netto waarde ratio ~4:1 overschrijdt met ontwikkelde eigendommen. Speluitkomst is bepaald maar spel gaat door."
      }
    },
    {
      question: {
        en: "What is the 'Monopoly Completeness Theorem' in computational game theory?",
        es: "¿Qué es el 'Teorema de Completitud de Monopoly' en teoría de juegos computacional?",
        de: "Was ist das 'Monopoly-Vollständigkeitstheorem' in der rechnerischen Spieltheorie?",
        nl: "Wat is het 'Monopoly Volledigheids Theorema' in computationele speltheorie?"
      },
      options: [
        { en: "Monopoly is NP-complete - optimal strategy is computationally intractable", es: "Monopoly es NP-completo - la estrategia óptima es computacionalmente intratable", de: "Monopoly ist NP-vollständig - optimale Strategie ist rechnerisch unlösbar", nl: "Monopoly is NP-compleet - optimale strategie is computationeel onhaalbaar" },
        { en: "Monopoly is PSPACE-complete - solving requires exponential space", es: "Monopoly es PSPACE-completo - resolver requiere espacio exponencial", de: "Monopoly ist PSPACE-vollständig - Lösen erfordert exponentiellen Raum", nl: "Monopoly is PSPACE-compleet - oplossen vereist exponentiële ruimte" },
        { en: "Monopoly is proven to be a complete information game", es: "Monopoly está probado ser un juego de información completa", de: "Monopoly ist nachweislich ein Spiel mit vollständiger Information", nl: "Monopoly is bewezen een compleet informatie spel te zijn" },
        { en: "All Monopoly games are guaranteed to terminate in finite time", es: "Todos los juegos de Monopoly están garantizados para terminar en tiempo finito", de: "Alle Monopoly-Spiele sind garantiert in endlicher Zeit zu beenden", nl: "Alle Monopoly spellen zijn gegarandeerd te eindigen in eindige tijd" }
      ],
      correct: 1,
      explanation: {
        en: "Research showed Monopoly is PSPACE-complete: determining forced win from position requires exponential memory. This makes perfect play computationally impossible even for computers, unlike Chess or Go.",
        es: "La investigación mostró que Monopoly es PSPACE-completo: determinar victoria forzada desde una posición requiere memoria exponencial. Esto hace que el juego perfecto sea computacionalmente imposible incluso para computadoras, a diferencia de Ajedrez o Go.",
        de: "Forschung zeigte, dass Monopoly PSPACE-vollständig ist: Bestimmung erzwungenen Siegs aus Position erfordert exponentiellen Speicher. Dies macht perfektes Spiel rechnerisch unmöglich selbst für Computer, anders als Schach oder Go.",
        nl: "Onderzoek toonde aan dat Monopoly PSPACE-compleet is: bepalen van gedwongen overwinning vanuit positie vereist exponentieel geheugen. Dit maakt perfect spel computationeel onmogelijk zelfs voor computers, in tegenstelling tot Schaak of Go."
      }
    }
  ];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = questions;
  } else {
    window.boardGamesMonopolyLevel10 = questions;
  }
})();
