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
    },
    {
      question: {
        en: "What is the theoretical 'halting problem analog' in Monopoly game termination?",
        es: "¿Qué es el 'análogo del problema de parada' teórico en la terminación del juego de Monopoly?",
        de: "Was ist das theoretische 'Halteproblem-Analog' in der Monopoly-Spielbeendigung?",
        nl: "Wat is het theoretische 'halting probleem analogon' in Monopoly spel terminatie?"
      },
      options: [
        { en: "With house rules, determining if game will ever end is undecidable", es: "Con reglas caseras, determinar si el juego terminará es indecidible", de: "Mit Hausregeln ist es unentscheidbar ob Spiel jemals endet", nl: "Met huisregels is het onbeslisbaar of spel ooit eindigt" },
        { en: "Optimal strategy computation cannot be proven to terminate", es: "El cálculo de estrategia óptima no puede probarse que termine", de: "Optimale Strategieberechnung kann nicht nachweislich beendet werden", nl: "Optimale strategie berekening kan niet bewezen worden te eindigen" },
        { en: "With circular trading, game can enter infinite loop", es: "Con comercio circular, el juego puede entrar en bucle infinito", de: "Mit zirkulärem Handel kann Spiel in Endlosschleife eintreten", nl: "Met circulaire handel kan spel in oneindige lus komen" },
        { en: "Certain property distributions guarantee stalemate", es: "Ciertas distribuciones de propiedades garantizan estancamiento", de: "Bestimmte Grundstücksverteilungen garantieren Patt", nl: "Bepaalde eigendomsverdelingen garanderen patstelling" }
      ],
      correct: 0,
      explanation: {
        en: "With certain house rules (like Free Parking money injection), proving game termination becomes equivalent to halting problem. Without such rules, Monopoly provably terminates due to economic contraction.",
        es: "Con ciertas reglas caseras (como inyección de dinero en Estacionamiento Gratuito), probar la terminación del juego se vuelve equivalente al problema de parada. Sin tales reglas, Monopoly termina provechamente debido a la contracción económica.",
        de: "Mit bestimmten Hausregeln (wie Free Parking Geld-Injektion) wird Beweis der Spielbeendigung äquivalent zum Halteproblem. Ohne solche Regeln endet Monopoly nachweislich aufgrund wirtschaftlicher Kontraktion.",
        nl: "Met bepaalde huisregels (zoals Free Parking geld injectie) wordt bewijs van spel terminatie equivalent aan halting probleem. Zonder zulke regels eindigt Monopoly aantoonbaar vanwege economische contractie."
      }
    },
    {
      question: {
        en: "What is the 'minimum regret strategy' in perfect information Monopoly?",
        es: "¿Qué es la 'estrategia de mínimo arrepentimiento' en Monopoly de información perfecta?",
        de: "Was ist die 'Minimalbedauern-Strategie' in Monopoly mit perfekter Information?",
        nl: "Wat is de 'minimum spijt strategie' in perfecte informatie Monopoly?"
      },
      options: [
        { en: "Minimize maximum possible loss across all dice outcomes", es: "Minimizar la pérdida máxima posible en todos los resultados de dados", de: "Maximalen möglichen Verlust über alle Würfelergebnisse minimieren", nl: "Minimaliseer maximaal mogelijk verlies over alle dobbelsteenuitkomsten" },
        { en: "Choose action with least regret if opponent plays optimally", es: "Elegir acción con menor arrepentimiento si oponente juega óptimamente", de: "Aktion wählen mit geringstem Bedauern wenn Gegner optimal spielt", nl: "Kies actie met minste spijt als tegenstander optimaal speelt" },
        { en: "Maximize expected value while limiting worst-case scenarios", es: "Maximizar valor esperado mientras se limitan escenarios en el peor de los casos", de: "Erwartungswert maximieren während Worst-Case-Szenarien begrenzt werden", nl: "Maximaliseer verwachte waarde terwijl worst-case scenario's beperkt worden" },
        { en: "Play to equalize probability of all outcomes", es: "Jugar para igualar probabilidad de todos los resultados", de: "Spielen um Wahrscheinlichkeit aller Ergebnisse auszugleichen", nl: "Spelen om waarschijnlijkheid van alle uitkomsten gelijk te maken" }
      ],
      correct: 0,
      explanation: {
        en: "Minimax regret in Monopoly minimizes maximum possible loss across dice variance. Different from expected value maximization - prioritizes avoiding catastrophic outcomes over optimizing average returns.",
        es: "El arrepentimiento minimax en Monopoly minimiza la pérdida máxima posible en la varianza de dados. Diferente de la maximización del valor esperado - prioriza evitar resultados catastróficos sobre optimizar retornos promedio.",
        de: "Minimax-Bedauern in Monopoly minimiert maximal möglichen Verlust über Würfelvarianz. Anders als Erwartungswertmaximierung - priorisiert Vermeidung katastrophaler Ergebnisse über Optimierung durchschnittlicher Renditen.",
        nl: "Minimax spijt in Monopoly minimaliseert maximaal mogelijk verlies over dobbelstenen variantie. Anders dan verwachte waarde maximalisatie - geeft prioriteit aan vermijden van catastrofale uitkomsten boven optimaliseren gemiddelde opbrengsten."
      }
    },
    {
      question: {
        en: "What is the 'credible commitment problem' in Monopoly negotiations?",
        es: "¿Qué es el 'problema de compromiso creíble' en negociaciones de Monopoly?",
        de: "Was ist das 'glaubwürdige Verpflichtungsproblem' in Monopoly-Verhandlungen?",
        nl: "Wat is het 'geloofwaardig toezegging probleem' in Monopoly onderhandelingen?"
      },
      options: [
        { en: "Cannot enforce future promises - only immediate trades valid", es: "No se pueden hacer cumplir promesas futuras - solo intercambios inmediatos válidos", de: "Zukünftige Versprechen nicht durchsetzbar - nur sofortige Handel gültig", nl: "Kan toekomstige beloftes niet afdwingen - alleen onmiddellijke ruilen geldig" },
        { en: "Players cannot credibly threaten to not trade later", es: "Los jugadores no pueden amenazar creíblemente con no negociar más tarde", de: "Spieler können nicht glaubhaft drohen später nicht zu handeln", nl: "Spelers kunnen niet geloofwaardig dreigen later niet te ruilen" },
        { en: "No mechanism to guarantee trade fairness", es: "Sin mecanismo para garantizar justicia comercial", de: "Kein Mechanismus um Handelsgerechtigkeit zu garantieren", nl: "Geen mechanisme om handelsfeerlijkheid te garanderen" },
        { en: "Reputational concerns irrelevant in one-shot games", es: "Preocupaciones reputacionales irrelevantes en juegos de una vez", de: "Reputationsbedenken irrelevant in einmaligen Spielen", nl: "Reputatie zorgen irrelevant in eenmalige spellen" }
      ],
      correct: 0,
      explanation: {
        en: "Official rules prohibit future commitments - cannot enforce 'immunity deals' or delayed payments. Creates credibility problem: players cannot bind future actions, reducing negotiation space compared to games allowing contracts.",
        es: "Las reglas oficiales prohíben compromisos futuros - no se pueden hacer cumplir 'acuerdos de inmunidad' o pagos retrasados. Crea problema de credibilidad: los jugadores no pueden vincular acciones futuras, reduciendo espacio de negociación comparado con juegos que permiten contratos.",
        de: "Offizielle Regeln verbieten zukünftige Verpflichtungen - können 'Immunitätsabkommen' oder verzögerte Zahlungen nicht durchsetzen. Schafft Glaubwürdigkeitsproblem: Spieler können zukünftige Aktionen nicht binden, reduziert Verhandlungsraum verglichen mit Spielen die Verträge erlauben.",
        nl: "Officiële regels verbieden toekomstige toezeggingen - kunnen 'immuniteitsdeals' of uitgestelde betalingen niet afdwingen. Creëert geloofwaardigheidsprobleem: spelers kunnen toekomstige acties niet binden, vermindert onderhandelingsruimte vergeleken met spellen die contracten toestaan."
      }
    },
    {
      question: {
        en: "What is the 'backward induction failure' in multi-player Monopoly?",
        es: "¿Qué es el 'fracaso de inducción hacia atrás' en Monopoly multijugador?",
        de: "Was ist das 'Rückwärtsinduktionsversagen' in Multi-Spieler-Monopoly?",
        nl: "Wat is het 'achterwaartse inductie falen' in multi-speler Monopoly?"
      },
      options: [
        { en: "Cannot solve for optimal play due to cyclic dependencies", es: "No se puede resolver para juego óptimo debido a dependencias cíclicas", de: "Kann nicht für optimales Spiel lösen aufgrund zyklischer Abhängigkeiten", nl: "Kan niet oplossen voor optimaal spel vanwege cyclische afhankelijkheden" },
        { en: "Endgame strategy different from subgame-perfect equilibrium", es: "Estrategia de final de juego diferente del equilibrio perfecto de subjuego", de: "Endspielstrategie anders als teilspielperfektes Gleichgewicht", nl: "Eindspel strategie anders dan subspel-perfect evenwicht" },
        { en: "Players eliminated before endgame - no backward path", es: "Jugadores eliminados antes del final del juego - sin camino hacia atrás", de: "Spieler vor Endspiel eliminiert - kein Rückwärtspfad", nl: "Spelers geëlimineerd voor eindspel - geen achterwaarts pad" },
        { en: "3+ players create coalition instability preventing backward solve", es: "3+ jugadores crean inestabilidad de coalición previniendo resolución hacia atrás", de: "3+ Spieler schaffen Koalitionsinstabilität die Rückwärtslösung verhindert", nl: "3+ spelers creëren coalitie instabiliteit die achterwaartse oplossing voorkomt" }
      ],
      correct: 3,
      explanation: {
        en: "In 3+ player games, coalition instability prevents backward induction: optimal move at decision node depends on future coalitions, but coalition formation depends on current moves. Circular dependency breaks standard game tree solution.",
        es: "En juegos de 3+ jugadores, la inestabilidad de coalición previene la inducción hacia atrás: el movimiento óptimo en el nodo de decisión depende de coaliciones futuras, pero la formación de coalición depende de movimientos actuales. La dependencia circular rompe la solución estándar del árbol de juego.",
        de: "In 3+ Spieler-Spielen verhindert Koalitionsinstabilität Rückwärtsinduktion: optimaler Zug am Entscheidungsknoten hängt von zukünftigen Koalitionen ab, aber Koalitionsbildung hängt von aktuellen Zügen ab. Zirkuläre Abhängigkeit bricht Standard-Spielbaumlösung.",
        nl: "In 3+ speler spellen voorkomt coalitie instabiliteit achterwaartse inductie: optimale zet bij beslissingsknoop hangt af van toekomstige coalities, maar coalitie vorming hangt af van huidige zetten. Circulaire afhankelijkheid breekt standaard spelboomoplossing."
      }
    },
    {
      question: {
        en: "What is the 'quantal response equilibrium' application to Monopoly?",
        es: "¿Qué es la aplicación del 'equilibrio de respuesta cuántica' a Monopoly?",
        de: "Was ist die 'Quanten-Antwort-Gleichgewichts'-Anwendung auf Monopoly?",
        nl: "Wat is de 'kwantale respons evenwicht' toepassing op Monopoly?"
      },
      options: [
        { en: "Models players making mistakes probabilistically based on decision difficulty", es: "Modela jugadores cometiendo errores probabilísticamente basados en dificultad de decisión", de: "Modelliert Spieler die Fehler probabilistisch basierend auf Entscheidungsschwierigkeit machen", nl: "Modelleert spelers die fouten probabilistisch maken gebaseerd op beslissingsmoeilijkheid" },
        { en: "Quantum mechanics applied to dice probability", es: "Mecánica cuántica aplicada a la probabilidad de dados", de: "Quantenmechanik angewendet auf Würfelwahrscheinlichkeit", nl: "Kwantummechanica toegepast op dobbelsteenwaarschijnlijkheid" },
        { en: "Equilibrium based on discrete quantity choices", es: "Equilibrio basado en elecciones de cantidad discreta", de: "Gleichgewicht basierend auf diskreten Mengenwahlen", nl: "Evenwicht gebaseerd op discrete hoeveelheid keuzes" },
        { en: "Response time quantization in tournament play", es: "Cuantización del tiempo de respuesta en juego de torneo", de: "Antwortzeit-Quantisierung im Turnierspiel", nl: "Reactietijd kwantisatie in toernooispel" }
      ],
      correct: 0,
      explanation: {
        en: "QRE models bounded rationality: players more likely to make mistakes on complex decisions (trading, auction bidding) than simple ones (buying unowned property). Predicts human play better than perfect rationality models.",
        es: "QRE modela racionalidad limitada: los jugadores tienen más probabilidades de cometer errores en decisiones complejas (negociar, ofertar en subasta) que en simples (comprar propiedad sin dueño). Predice el juego humano mejor que los modelos de racionalidad perfecta.",
        de: "QRE modelliert begrenzte Rationalität: Spieler machen eher Fehler bei komplexen Entscheidungen (Handel, Auktionsgebote) als bei einfachen (unbewohnte Grundstücke kaufen). Sagt menschliches Spiel besser vorher als perfekte Rationalitätsmodelle.",
        nl: "QRE modelleert begrensde rationaliteit: spelers maken waarschijnlijker fouten bij complexe beslissingen (handelen, veiling bieden) dan eenvoudige (onbezeten eigendom kopen). Voorspelt menselijk spel beter dan perfecte rationaliteit modellen."
      }
    },
    {
      question: {
        en: "What is the 'mechanism design' interpretation of Monopoly rule variations?",
        es: "¿Qué es la interpretación de 'diseño de mecanismo' de las variaciones de reglas de Monopoly?",
        de: "Was ist die 'Mechanismus-Design'-Interpretation von Monopoly-Regelvariationen?",
        nl: "Wat is de 'mechanisme ontwerp' interpretatie van Monopoly regel variaties?"
      },
      options: [
        { en: "Different rules create different strategic equilibria and outcomes", es: "Diferentes reglas crean diferentes equilibrios estratégicos y resultados", de: "Verschiedene Regeln schaffen unterschiedliche strategische Gleichgewichte und Ergebnisse", nl: "Verschillende regels creëren verschillende strategische evenwichten en uitkomsten" },
        { en: "Rule changes mechanically alter game length", es: "Los cambios de reglas alteran mecánicamente la duración del juego", de: "Regeländerungen ändern mechanisch Spiellänge", nl: "Regelwijzigingen veranderen mechanisch spellengte" },
        { en: "Optimal rules maximize player enjoyment", es: "Reglas óptimas maximizan el disfrute del jugador", de: "Optimale Regeln maximieren Spielerfreude", nl: "Optimale regels maximaliseren spelers plezier" },
        { en: "Tournament rules designed to minimize variance", es: "Reglas de torneo diseñadas para minimizar varianza", de: "Turnierregeln entworfen um Varianz zu minimieren", nl: "Toernooiregels ontworpen om variantie te minimaliseren" }
      },
      correct: 0,
      explanation: {
        en: "Mechanism design view: rules are 'mechanisms' shaping incentives. Auction rules incentivize efficiency; trading restrictions prevent collusion; building limits create scarcity. Each rule change alters strategic equilibrium.",
        es: "Vista de diseño de mecanismo: las reglas son 'mecanismos' que dan forma a incentivos. Las reglas de subasta incentivan la eficiencia; las restricciones comerciales previenen la colusión; los límites de construcción crean escasez. Cada cambio de regla altera el equilibrio estratégico.",
        de: "Mechanismus-Design-Sicht: Regeln sind 'Mechanismen' die Anreize formen. Auktionsregeln schaffen Effizienzanreize; Handelsbeschränkungen verhindern Kollusion; Baugrenzen schaffen Knappheit. Jede Regeländerung ändert strategisches Gleichgewicht.",
        nl: "Mechanisme ontwerp visie: regels zijn 'mechanismen' die prikkels vormgeven. Veilingregels stimuleren efficiëntie; handelsbeperkingen voorkomen samenzwering; bouwlimieten creëren schaarste. Elke regelwijziging verandert strategisch evenwicht."
      }
    },
    {
      question: {
        en: "What is the 'subgame imperfection' in Monopoly's trade negotiation phase?",
        es: "¿Qué es la 'imperfección de subjuego' en la fase de negociación comercial de Monopoly?",
        de: "Was ist die 'Teilspiel-Unvollkommenheit' in Monopolys Handelsverhandlungsphase?",
        nl: "Wat is de 'subspel imperfectie' in Monopoly's handelsonderhandelingsfase?"
      },
      options: [
        { en: "Optimal immediate trade may not be subgame-perfect due to signaling effects", es: "El comercio inmediato óptimo puede no ser perfecto en subjuego debido a efectos de señalización", de: "Optimaler sofortiger Handel mag nicht teilspielperfekt sein aufgrund von Signalisierungseffekten", nl: "Optimale onmiddellijke ruil mag niet subspel-perfect zijn vanwege signalerings effecten" },
        { en: "Players cannot identify Nash equilibrium trades", es: "Los jugadores no pueden identificar intercambios de equilibrio de Nash", de: "Spieler können Nash-Gleichgewichtshandel nicht identifizieren", nl: "Spelers kunnen Nash evenwicht ruilen niet identificeren" },
        { en: "Trading phase has no defined subgame structure", es: "La fase comercial no tiene estructura de subjuego definida", de: "Handelsphase hat keine definierte Teilspielstruktur", nl: "Handelsfase heeft geen gedefinieerde subspel structuur" },
        { en: "Incomplete information prevents subgame analysis", es: "Información incompleta previene análisis de subjuego", de: "Unvollständige Information verhindert Teilspielanalyse", nl: "Onvolledige informatie voorkomt subspel analyse" }
      ],
      correct: 0,
      explanation: {
        en: "Accepting seemingly beneficial immediate trade can signal weakness, affecting future negotiations. Subgame-perfect strategy may require rejecting positive-EV trades to maintain negotiating position - violates sequential rationality.",
        es: "Aceptar un intercambio inmediato aparentemente beneficioso puede señalar debilidad, afectando negociaciones futuras. La estrategia perfecta de subjuego puede requerir rechazar intercambios de EV positivo para mantener posición de negociación - viola racionalidad secuencial.",
        de: "Akzeptieren scheinbar vorteilhaften sofortigen Handels kann Schwäche signalisieren und zukünftige Verhandlungen beeinflussen. Teilspielperfekte Strategie kann Ablehnung positiv-EV-Handel erfordern um Verhandlungsposition zu halten - verletzt sequentielle Rationalität.",
        nl: "Accepteren van schijnbaar voordelige onmiddellijke ruil kan zwakte signaleren, toekomstige onderhandelingen beïnvloedend. Subspel-perfecte strategie kan vereisen positief-EV ruilen afwijzen om onderhandelingspositie te behouden - schendt sequentiële rationaliteit."
      }
    },
    {
      question: {
        en: "What is the 'trembling hand perfect' refinement in Monopoly auctions?",
        es: "¿Qué es el refinamiento 'perfecto de mano temblorosa' en subastas de Monopoly?",
        de: "Was ist die 'zitternde Hand perfekt'-Verfeinerung in Monopoly-Auktionen?",
        nl: "Wat is de 'trillende hand perfect' verfijning in Monopoly veilingen?"
      },
      options: [
        { en: "Optimal bid accounts for opponents potentially making bidding errors", es: "La oferta óptima tiene en cuenta que los oponentes potencialmente cometan errores de oferta", de: "Optimales Gebot berücksichtigt dass Gegner potenziell Bietfehler machen", nl: "Optimaal bod houdt rekening met tegenstanders die mogelijk bied fouten maken" },
        { en: "Bidding strategy resilient to accidental over-bids", es: "Estrategia de oferta resistente a sobre-ofertas accidentales", de: "Bietstrategie widerstandsfähig gegen versehentliche Übergebote", nl: "Bied strategie bestand tegen onbedoelde over-biedingen" },
        { en: "Physical dexterity required for fast auction bidding", es: "Destreza física requerida para ofertas rápidas en subasta", de: "Physische Geschicklichkeit erforderlich für schnelles Auktionsbieten", nl: "Fysieke behendigheid vereist voor snel veiling bieden" },
        { en: "Strategy remains optimal even if players occasionally deviate", es: "La estrategia permanece óptima incluso si los jugadores ocasionalmente se desvían", de: "Strategie bleibt optimal auch wenn Spieler gelegentlich abweichen", nl: "Strategie blijft optimaal zelfs als spelers af en toe afwijken" }
      ],
      correct: 3,
      explanation: {
        en: "Trembling hand perfect equilibrium requires strategy to be optimal even assuming infinitesimal probability of opponents making mistakes. In auctions, must bid as if opponents might accidentally bid irrationally, avoiding exploitable patterns.",
        es: "El equilibrio perfecto de mano temblorosa requiere que la estrategia sea óptima incluso asumiendo una probabilidad infinitesimal de que los oponentes cometan errores. En subastas, debe ofertar como si los oponentes pudieran ofertar accidentalmente de manera irracional, evitando patrones explotables.",
        de: "Zitternde Hand perfektes Gleichgewicht erfordert Strategie optimal zu sein auch unter Annahme infinitesimaler Wahrscheinlichkeit dass Gegner Fehler machen. In Auktionen muss geboten werden als ob Gegner versehentlich irrational bieten könnten, ausbeutbare Muster vermeidend.",
        nl: "Trillende hand perfect evenwicht vereist strategie optimaal te zijn zelfs aannemend infinitesimale waarschijnlijkheid van tegenstanders die fouten maken. In veilingen moet geboden worden alsof tegenstanders per ongeluk irrationeel kunnen bieden, exploiteerbare patronen vermijdend."
      }
    },
    {
      question: {
        en: "What is the 'epsilon-equilibrium' relevance to practical Monopoly play?",
        es: "¿Qué es la relevancia del 'equilibrio épsilon' para el juego práctico de Monopoly?",
        de: "Was ist die 'Epsilon-Gleichgewichts'-Relevanz für praktisches Monopoly-Spiel?",
        nl: "Wat is de 'epsilon-evenwicht' relevantie voor praktisch Monopoly spel?"
      },
      options: [
        { en: "Strategies within ε of optimal are computationally simpler and practically equivalent", es: "Estrategias dentro de ε de óptimo son computacionalmente más simples y prácticamente equivalentes", de: "Strategien innerhalb ε von optimal sind rechnerisch einfacher und praktisch äquivalent", nl: "Strategieën binnen ε van optimaal zijn computationeel eenvoudiger en praktisch equivalent" },
        { en: "Small position advantages compound over time", es: "Pequeñas ventajas de posición se acumulan con el tiempo", de: "Kleine Positionsvorteile verstärken sich mit der Zeit", nl: "Kleine positie voordelen versterken zich na verloop van tijd" },
        { en: "Dice variance creates ε uncertainty in outcomes", es: "La varianza de dados crea incertidumbre ε en resultados", de: "Würfelvarianz schafft ε Unsicherheit in Ergebnissen", nl: "Dobbelstenen variantie creëert ε onzekerheid in uitkomsten" },
        { en: "Tournament scoring allows ε-suboptimal play", es: "La puntuación de torneo permite juego ε-subóptimo", de: "Turnierwertung erlaubt ε-suboptimales Spiel", nl: "Toernooi scoring staat ε-suboptimaal spel toe" }
      ],
      correct: 0,
      explanation: {
        en: "Epsilon-equilibrium: strategies losing <ε expected value vs true optimal are 'close enough'. In Monopoly, heuristics like '3-house rule' or 'orange > dark blue' lose <2% EV but reduce computation 1000×, making them practical optima.",
        es: "Equilibrio épsilon: estrategias perdiendo <ε valor esperado vs óptimo verdadero son 'suficientemente cercanas'. En Monopoly, heurísticas como 'regla de 3 casas' o 'naranja > azul oscuro' pierden <2% EV pero reducen cálculo 1000×, haciéndolas óptimas prácticas.",
        de: "Epsilon-Gleichgewicht: Strategien die <ε Erwartungswert vs wahres Optimum verlieren sind 'nah genug'. In Monopoly verlieren Heuristiken wie '3-Häuser-Regel' oder 'Orange > Dunkelblau' <2% EV aber reduzieren Berechnung 1000×, was sie zu praktischen Optima macht.",
        nl: "Epsilon-evenwicht: strategieën die <ε verwachte waarde vs echt optimaal verliezen zijn 'dichtbij genoeg'. In Monopoly verliezen heuristieken zoals '3-huis regel' of 'oranje > donkerblauw' <2% EV maar verminderen berekening 1000×, wat ze praktisch optima maakt."
      }
    },
    {
      question: {
        en: "What is the 'correlated equilibrium' advantage in Monopoly coalition scenarios?",
        es: "¿Qué es la ventaja del 'equilibrio correlacionado' en escenarios de coalición de Monopoly?",
        de: "Was ist der 'korreliertes Gleichgewichts'-Vorteil in Monopoly-Koalitionsszenarien?",
        nl: "Wat is het 'gecorreleerd evenwicht' voordeel in Monopoly coalitie scenario's?"
      },
      options: [
        { en: "Public randomization device allows coordinated strategies exceeding Nash equilibrium payoffs", es: "Dispositivo de aleatorización público permite estrategias coordinadas que exceden pagos de equilibrio de Nash", de: "Öffentliches Randomisierungsgerät ermöglicht koordinierte Strategien die Nash-Gleichgewichtsauszahlungen übertreffen", nl: "Publiek randomisatie apparaat staat gecoördineerde strategieën toe die Nash evenwicht uitbetalingen overtreffen" },
        { en: "Correlation between property landings increases trade value", es: "Correlación entre caídas de propiedades aumenta valor comercial", de: "Korrelation zwischen Grundstückslandungen erhöht Handelswert", nl: "Correlatie tussen eigendom landingen verhoogt handelswaarde" },
        { en: "Equilibrium strategies correlate with dice outcomes", es: "Estrategias de equilibrio se correlacionan con resultados de dados", de: "Gleichgewichtsstrategien korrelieren mit Würfelergebnissen", nl: "Evenwicht strategieën correleren met dobbelsteenuitkomsten" },
        { en: "Coalition formation correlates with property ownership", es: "Formación de coalición se correlaciona con propiedad de propiedades", de: "Koalitionsbildung korreliert mit Grundstücksbesitz", nl: "Coalitie vorming correleert met eigendomsbezit" }
      ],
      correct: 0,
      explanation: {
        en: "Correlated equilibrium: coordinating via public signal (like card draws) can achieve better joint payoffs than Nash equilibrium. E.g., 'If Chance shows X, Player A gets monopoly; if Y, Player B gets it' outperforms independent negotiation.",
        es: "Equilibrio correlacionado: coordinar vía señal pública (como sacar cartas) puede lograr mejores pagos conjuntos que equilibrio de Nash. P.ej., 'Si Suerte muestra X, Jugador A obtiene monopolio; si Y, Jugador B lo obtiene' supera negociación independiente.",
        de: "Korreliertes Gleichgewicht: Koordinierung über öffentliches Signal (wie Kartenziehungen) kann bessere gemeinsame Auszahlungen als Nash-Gleichgewicht erreichen. Z.B. 'Wenn Ereignis X zeigt, Spieler A bekommt Monopol; wenn Y, Spieler B' übertrifft unabhängige Verhandlung.",
        nl: "Gecorreleerd evenwicht: coördineren via publiek signaal (zoals kaart trekken) kan betere gezamenlijke uitbetalingen bereiken dan Nash evenwicht. Bijv. 'Als Kans X toont, Speler A krijgt monopolie; als Y, Speler B krijgt het' overtreft onafhankelijke onderhandeling."
      }
    },
    {
      question: {
        en: "What is the 'regret matching' algorithm application to Monopoly learning?",
        es: "¿Qué es la aplicación del algoritmo de 'emparejamiento de arrepentimiento' al aprendizaje de Monopoly?",
        de: "Was ist die 'Bedauern-Matching'-Algorithmus-Anwendung auf Monopoly-Lernen?",
        nl: "Wat is de 'spijt matching' algoritme toepassing op Monopoly leren?"
      },
      options: [
        { en: "AI weights strategies proportional to accumulated regret from not using them", es: "IA pondera estrategias proporcionales al arrepentimiento acumulado de no usarlas", de: "KI gewichtet Strategien proportional zu akkumuliertem Bedauern sie nicht zu nutzen", nl: "AI weegt strategieën proportioneel aan geaccumuleerde spijt van ze niet gebruiken" },
        { en: "Players learn to avoid regrettable trades", es: "Jugadores aprenden a evitar intercambios lamentables", de: "Spieler lernen bedauerliche Handel zu vermeiden", nl: "Spelers leren spijtige ruilen te vermijden" },
        { en: "Matching players of similar skill levels", es: "Emparejar jugadores de niveles de habilidad similares", de: "Spieler ähnlicher Fähigkeitsniveaus zusammenbringen", nl: "Matchen van spelers met vergelijkbare vaardigheidsniveaus" },
        { en: "Retrospective analysis of optimal plays", es: "Análisis retrospectivo de jugadas óptimas", de: "Retrospektive Analyse optimaler Spielzüge", nl: "Retrospectieve analyse van optimale zetten" }
      ],
      correct: 0,
      explanation: {
        en: "Regret matching converges to Nash equilibrium by adjusting strategy probabilities based on 'regret' - how much better alternative strategies would have performed. Used in Pluribus poker AI, applicable to Monopoly's mixed-strategy scenarios.",
        es: "El emparejamiento de arrepentimiento converge al equilibrio de Nash ajustando probabilidades de estrategia basadas en 'arrepentimiento' - cuánto mejor habrían funcionado estrategias alternativas. Usado en IA de póker Pluribus, aplicable a escenarios de estrategia mixta de Monopoly.",
        de: "Bedauern-Matching konvergiert zu Nash-Gleichgewicht durch Anpassung von Strategiewahrscheinlichkeiten basierend auf 'Bedauern' - wie viel besser alternative Strategien abgeschnitten hätten. Verwendet in Pluribus Poker-KI, anwendbar auf Monopolys gemischte Strategie-Szenarien.",
        nl: "Spijt matching convergeert naar Nash evenwicht door strategie waarschijnlijkheden aan te passen gebaseerd op 'spijt' - hoeveel beter alternatieve strategieën gepresteerd zouden hebben. Gebruikt in Pluribus poker AI, toepasbaar op Monopoly's gemengde strategie scenario's."
      }
    },
    {
      question: {
        en: "What is the 'information set partitioning' complexity in Monopoly with hidden cash?",
        es: "¿Qué es la complejidad de 'partición de conjunto de información' en Monopoly con efectivo oculto?",
        de: "Was ist die 'Informationsmenge-Partitionierungs'-Komplexität in Monopoly mit verstecktem Bargeld?",
        nl: "Wat is de 'informatie set partitionering' complexiteit in Monopoly met verborgen cash?"
      },
      options: [
        { en: "Exponential growth in decision nodes due to uncertain opponent cash", es: "Crecimiento exponencial en nodos de decisión debido a efectivo del oponente incierto", de: "Exponentielles Wachstum in Entscheidungsknoten aufgrund unsicheren Gegner-Bargelds", nl: "Exponentiële groei in beslissingsknopen vanwege onzekere tegenstander cash" },
        { en: "Hidden information creates incomplete game tree", es: "Información oculta crea árbol de juego incompleto", de: "Versteckte Information schafft unvollständigen Spielbaum", nl: "Verborgen informatie creëert onvolledige spelboom" },
        { en: "Cash partitioning affects property valuation", es: "Partición de efectivo afecta valoración de propiedades", de: "Bargeldaufteilung beeinflusst Grundstücksbewertung", nl: "Cash partitionering beïnvloedt eigendomswaardering" },
        { en: "Information sets grow logarithmically with game length", es: "Conjuntos de información crecen logarítmicamente con duración del juego", de: "Informationsmengen wachsen logarithmisch mit Spiellänge", nl: "Informatie sets groeien logaritmisch met spellengte" }
      ],
      correct: 0,
      explanation: {
        en: "With imperfect cash information, each decision node splits into multiple information sets (one per possible opponent cash state). Causes exponential blowup in game tree complexity - 2-player Monopoly becomes computationally harder than perfect-info version.",
        es: "Con información de efectivo imperfecta, cada nodo de decisión se divide en múltiples conjuntos de información (uno por cada posible estado de efectivo del oponente). Causa explosión exponencial en complejidad del árbol de juego - Monopoly de 2 jugadores se vuelve computacionalmente más difícil que versión de información perfecta.",
        de: "Mit unvollständiger Bargeldinformation teilt sich jeder Entscheidungsknoten in mehrere Informationsmengen (eine pro möglichem Gegner-Bargeldzustand). Verursacht exponentielle Explosion in Spielbaum-Komplexität - 2-Spieler-Monopoly wird rechnerisch schwerer als perfekte Info-Version.",
        nl: "Met onvolmaakte cash informatie splitst elk beslissingsknoop in meerdere informatie sets (één per mogelijke tegenstander cash staat). Veroorzaakt exponentiële explosie in spelboom complexiteit - 2-speler Monopoly wordt computationeel moeilijker dan perfecte-info versie."
      }
    },
    {
      question: {
        en: "What is the 'pivotal voter theorem' manifestation in 3-player Monopoly kingmaking?",
        es: "¿Qué es la manifestación del 'teorema del votante pivote' en hacer rey de Monopoly de 3 jugadores?",
        de: "Was ist die 'Pivotal-Voter-Theorem'-Manifestation in 3-Spieler-Monopoly-Königsmacherei?",
        nl: "Wat is de 'pivotal kiezer theorema' manifestatie in 3-speler Monopoly kingmaking?"
      },
      options: [
        { en: "Trailing player determines winner by choosing trade partner", es: "Jugador rezagado determina ganador eligiendo socio comercial", de: "Zurückliegender Spieler bestimmt Gewinner durch Wahl des Handelspartners", nl: "Achterliggende speler bepaalt winnaar door handelspartner te kiezen" },
        { en: "Third player votes on disputes between other two", es: "Tercer jugador vota sobre disputas entre los otros dos", de: "Dritter Spieler stimmt über Streitigkeiten zwischen anderen beiden ab", nl: "Derde speler stemt over geschillen tussen andere twee" },
        { en: "Player with median property value becomes kingmaker", es: "Jugador con valor de propiedad mediano se convierte en hacedor de reyes", de: "Spieler mit medianem Grundstückswert wird Königsmacher", nl: "Speler met mediaan eigendomswaarde wordt kingmaker" },
        { en: "Pivotal property ownership determines coalition formation", es: "Propiedad pivote determina formación de coalición", de: "Pivotal-Grundstücksbesitz bestimmt Koalitionsbildung", nl: "Pivotale eigendomsbezit bepaalt coalitie vorming" }
      ],
      correct: 0,
      explanation: {
        en: "In 3-player scenarios where two players are ahead, third (trailing) player becomes 'pivotal voter' - their trading decision determines which leader wins. Creates strategic extortion opportunities: 'Make this deal or I trade with opponent instead.'",
        es: "En escenarios de 3 jugadores donde dos jugadores van adelante, el tercer jugador (rezagado) se convierte en 'votante pivote' - su decisión comercial determina qué líder gana. Crea oportunidades estratégicas de extorsión: 'Haz este trato o comercio con oponente en su lugar.'",
        de: "In 3-Spieler-Szenarien wo zwei Spieler vorne liegen, wird dritter (zurückliegender) Spieler 'Pivotal Voter' - ihre Handelsentscheidung bestimmt welcher Anführer gewinnt. Schafft strategische Erpressungsmöglichkeiten: 'Mach diesen Deal oder ich handle stattdessen mit Gegner.'",
        nl: "In 3-speler scenario's waar twee spelers voorlopen, wordt derde (achterliggende) speler 'pivotale kiezer' - hun handelsbeslissing bepaalt welke leider wint. Creëert strategische afpersing mogelijkheden: 'Doe deze deal of ik ruil met tegenstander in plaats daarvan.'"
      }
    },
    {
      question: {
        en: "What is the 'focal point' (Schelling point) role in Monopoly trade negotiations?",
        es: "¿Qué es el rol del 'punto focal' (punto de Schelling) en negociaciones comerciales de Monopoly?",
        de: "Was ist die 'Fokalpunkt'- (Schelling-Punkt) Rolle in Monopoly-Handelsverhandlungen?",
        nl: "Wat is de 'focal point' (Schelling punt) rol in Monopoly handelsonderhandelingen?"
      },
      options: [
        { en: "Face value serves as natural focal point for 'fair' trades lacking calculation", es: "Valor nominal sirve como punto focal natural para intercambios 'justos' sin cálculo", de: "Nennwert dient als natürlicher Fokalpunkt für 'faire' Handel ohne Berechnung", nl: "Nominale waarde dient als natuurlijk focal point voor 'eerlijke' ruilen zonder berekening" },
        { en: "Players focus on single most valuable property", es: "Jugadores se enfocan en una sola propiedad más valiosa", de: "Spieler konzentrieren sich auf einzelnes wertvollstes Grundstück", nl: "Spelers focussen op enkel meest waardevolle eigendom" },
        { en: "Schelling identified optimal Monopoly strategies", es: "Schelling identificó estrategias óptimas de Monopoly", de: "Schelling identifizierte optimale Monopoly-Strategien", nl: "Schelling identificeerde optimale Monopoly strategieën" },
        { en: "Geographic board position determines trade priority", es: "Posición geográfica del tablero determina prioridad comercial", de: "Geografische Brettposition bestimmt Handelspriorität", nl: "Geografische bordpositie bepaalt handels prioriteit" }
      ],
      correct: 0,
      explanation: {
        en: "Focal points emerge as coordination solutions: in complex trades, players default to 'property-for-property of equal face value' as fair baseline, even when strategic values differ drastically. Facilitates agreement despite imperfect calculation.",
        es: "Los puntos focales emergen como soluciones de coordinación: en intercambios complejos, los jugadores recurren por defecto a 'propiedad-por-propiedad de igual valor nominal' como línea de base justa, incluso cuando los valores estratégicos difieren drásticamente. Facilita acuerdo a pesar de cálculo imperfecto.",
        de: "Fokalpunkte entstehen als Koordinationslösungen: in komplexen Handel greifen Spieler standardmäßig auf 'Grundstück-für-Grundstück gleichen Nennwerts' als faire Basis zurück, auch wenn strategische Werte drastisch unterschiedlich sind. Erleichtert Einigung trotz unvollständiger Berechnung.",
        nl: "Focal points ontstaan als coördinatie oplossingen: in complexe ruilen grijpen spelers standaard naar 'eigendom-voor-eigendom van gelijke nominale waarde' als eerlijke baseline, zelfs wanneer strategische waarden drastisch verschillen. Vergemakkelijkt overeenstemming ondanks onvolmaakte berekening."
      }
    },
    {
      question: {
        en: "What is the 'ergodic hypothesis' violation in Monopoly bankroll dynamics?",
        es: "¿Qué es la violación de la 'hipótesis ergódica' en dinámicas de capital de Monopoly?",
        de: "Was ist die 'ergodische Hypothesen'-Verletzung in Monopoly-Kapital-Dynamik?",
        nl: "Wat is de 'ergodische hypothese' schending in Monopoly bankroll dynamiek?"
      },
      options: [
        { en: "Time-average returns ≠ ensemble-average returns due to bankruptcy absorption", es: "Retornos promedio de tiempo ≠ retornos promedio de conjunto debido a absorción de bancarrota", de: "Zeit-Durchschnittsrenditen ≠ Ensemble-Durchschnittsrenditen aufgrund Bankrott-Absorption", nl: "Tijd-gemiddelde rendementen ≠ ensemble-gemiddelde rendementen vanwege faillissements absorptie" },
        { en: "Expected value calculations don't account for game ending", es: "Cálculos de valor esperado no tienen en cuenta el final del juego", de: "Erwartungswertberechnungen berücksichtigen Spielende nicht", nl: "Verwachte waarde berekeningen houden geen rekening met spel eindigen" },
        { en: "Dice outcomes not independently distributed over time", es: "Resultados de dados no distribuidos independientemente con el tiempo", de: "Würfelergebnisse nicht unabhängig verteilt über Zeit", nl: "Dobbelsteenuitkomsten niet onafhankelijk verdeeld over tijd" },
        { en: "Individual game trajectory differs from population average", es: "Trayectoria de juego individual difiere del promedio de población", de: "Individuelle Spieltrajektorie unterscheidet sich von Bevölkerungsdurchschnitt", nl: "Individuele spel trajectorie verschilt van populatie gemiddelde" }
      ],
      correct: 0,
      explanation: {
        en: "Non-ergodic: averaging returns across parallel universes (ensemble average) differs from single player's time-average returns because bankruptcy is absorbing state. Can't 'average out' bad luck over time if one unlucky sequence bankrupts you.",
        es: "No ergódico: promediar retornos a través de universos paralelos (promedio de conjunto) difiere de retornos promedio de tiempo de un solo jugador porque la bancarrota es estado absorbente. No se puede 'promediar' la mala suerte con el tiempo si una secuencia desafortunada te arruina.",
        de: "Nicht-ergodisch: Durchschnittsrenditen über parallele Universen (Ensemble-Durchschnitt) unterscheiden sich von Zeit-Durchschnittsrenditen eines einzelnen Spielers weil Bankrott absorbierender Zustand ist. Kann 'Pech nicht im Durchschnitt ausgleichen' über Zeit wenn eine unglückliche Sequenz bankrott macht.",
        nl: "Niet-ergodisch: gemiddelde rendementen over parallelle universa (ensemble gemiddelde) verschilt van enkele speler tijd-gemiddelde rendementen omdat faillissement absorberende staat is. Kan 'pech niet uitgemiddeld' krijgen over tijd als één ongelukkige reeks failliet maakt."
      }
    },
    {
      question: {
        en: "What is the 'revelation principle' application to Monopoly auction mechanisms?",
        es: "¿Qué es la aplicación del 'principio de revelación' a mecanismos de subasta de Monopoly?",
        de: "Was ist die 'Offenbarungsprinzip'-Anwendung auf Monopoly-Auktionsmechanismen?",
        nl: "Wat is de 'openbarings principe' toepassing op Monopoly veiling mechanismen?"
      },
      options: [
        { en: "Optimal auction design makes truthful bidding a dominant strategy", es: "Diseño óptimo de subasta hace que ofertar verazmente sea una estrategia dominante", de: "Optimales Auktionsdesign macht wahrhaftiges Bieten zu dominanter Strategie", nl: "Optimaal veiling ontwerp maakt waarheidsgetrouw bieden tot dominante strategie" },
        { en: "Players must reveal their cash holdings before auctions", es: "Los jugadores deben revelar sus tenencias de efectivo antes de subastas", de: "Spieler müssen ihre Bargeldbestände vor Auktionen offenbaren", nl: "Spelers moeten hun cash bezit onthullen voor veilingen" },
        { en: "Auction winners reveal their maximum willingness to pay", es: "Ganadores de subasta revelan su máxima disposición a pagar", de: "Auktionsgewinner offenbaren ihre maximale Zahlungsbereitschaft", nl: "Veiling winnaars onthullen hun maximale bereidheid te betalen" },
        { en: "Mechanism reveals equilibrium strategies to all players", es: "Mecanismo revela estrategias de equilibrio a todos los jugadores", de: "Mechanismus offenbart Gleichgewichtsstrategien allen Spielern", nl: "Mechanisme onthult evenwicht strategieën aan alle spelers" }
      ],
      correct: 0,
      explanation: {
        en: "Revelation principle: any auction mechanism can be replaced by truth-revealing mechanism with same outcomes. Standard Monopoly auction isn't incentive-compatible (bluffing profitable). Vickrey auction would be, but isn't used.",
        es: "Principio de revelación: cualquier mecanismo de subasta puede ser reemplazado por mecanismo revelador de verdad con mismos resultados. La subasta estándar de Monopoly no es compatible con incentivos (el farol es rentable). La subasta Vickrey lo sería, pero no se usa.",
        de: "Offenbarungsprinzip: jeder Auktionsmechanismus kann durch wahrheitsoffenbarenden Mechanismus mit gleichen Ergebnissen ersetzt werden. Standard-Monopoly-Auktion ist nicht anreizkompatibel (Bluffen profitabel). Vickrey-Auktion wäre es, wird aber nicht verwendet.",
        nl: "Openbarings principe: elk veiling mechanisme kan vervangen worden door waarheids-onthullend mechanisme met zelfde uitkomsten. Standaard Monopoly veiling is niet incentive-compatible (bluffen winstgevend). Vickrey veiling zou het zijn, maar wordt niet gebruikt."
      }
    },
    {
      question: {
        en: "What is the 'mean-field approximation' utility in multi-player Monopoly analysis?",
        es: "¿Qué es la utilidad de 'aproximación de campo medio' en análisis de Monopoly multijugador?",
        de: "Was ist der 'Mittelfeld-Approximations'-Nutzen in Multi-Spieler-Monopoly-Analyse?",
        nl: "Wat is het 'gemiddeld veld benadering' nut in multi-speler Monopoly analyse?"
      },
      options: [
        { en: "Models individual player interacting with 'average opponent' instead of tracking all N opponents", es: "Modela jugador individual interactuando con 'oponente promedio' en lugar de rastrear todos los N oponentes", de: "Modelliert einzelnen Spieler der mit 'durchschnittlichem Gegner' interagiert statt alle N Gegner zu verfolgen", nl: "Modelleert individuele speler die interacteert met 'gemiddelde tegenstander' in plaats van alle N tegenstanders bij te houden" },
        { en: "Calculates average property values across board", es: "Calcula valores promedio de propiedades en todo el tablero", de: "Berechnet durchschnittliche Grundstückswerte über Brett", nl: "Berekent gemiddelde eigendomswaarden over bord" },
        { en: "Approximates optimal strategy for middle-skill players", es: "Aproxima estrategia óptima para jugadores de habilidad media", de: "Approximiert optimale Strategie für mittlere Fähigkeitsspieler", nl: "Benadert optimale strategie voor gemiddelde vaardigheid spelers" },
        { en: "Uses median game length for analysis", es: "Usa duración mediana del juego para análisis", de: "Verwendet mediane Spiellänge für Analyse", nl: "Gebruikt mediaan spellengte voor analyse" }
      ],
      correct: 0,
      explanation: {
        en: "Mean-field reduces N-player complexity: instead of modeling N opponents individually, model single player against 'average' opponent representing aggregate. Loses accuracy but enables tractable analysis for 4+ player games.",
        es: "El campo medio reduce complejidad de N jugadores: en lugar de modelar N oponentes individualmente, modela un solo jugador contra oponente 'promedio' representando agregado. Pierde precisión pero permite análisis tratable para juegos de 4+ jugadores.",
        de: "Mittelfeld reduziert N-Spieler-Komplexität: statt N Gegner individuell zu modellieren, modelliert einzelnen Spieler gegen 'durchschnittlichen' Gegner der Aggregat repräsentiert. Verliert Genauigkeit aber ermöglicht handhabbare Analyse für 4+ Spieler-Spiele.",
        nl: "Gemiddeld veld vermindert N-speler complexiteit: in plaats van N tegenstanders individueel te modelleren, modelleer enkele speler tegen 'gemiddelde' tegenstander die aggregaat vertegenwoordigt. Verliest nauwkeurigheid maar maakt haalbare analyse mogelijk voor 4+ speler spellen."
      }
    },
    {
      question: {
        en: "What is the 'price of anarchy' measurement in Monopoly coalition dynamics?",
        es: "¿Qué es la medición del 'precio de la anarquía' en dinámicas de coalición de Monopoly?",
        de: "Was ist die 'Preis der Anarchie'-Messung in Monopoly-Koalitionsdynamik?",
        nl: "Wat is de 'prijs van anarchie' meting in Monopoly coalitie dynamiek?"
      },
      options: [
        { en: "Ratio of social welfare in selfish equilibrium vs coordinated optimum", es: "Proporción de bienestar social en equilibrio egoísta vs óptimo coordinado", de: "Verhältnis sozialer Wohlfahrt in egoistischem Gleichgewicht vs koordiniertem Optimum", nl: "Ratio van sociaal welzijn in egoïstisch evenwicht vs gecoördineerd optimum" },
        { en: "Cost of preventing player collusion through rules", es: "Costo de prevenir colusión de jugadores a través de reglas", de: "Kosten der Verhinderung von Spielerkollusion durch Regeln", nl: "Kosten van voorkomen van speler samenzwering door regels" },
        { en: "Inefficiency from unregulated property trading", es: "Ineficiencia del comercio de propiedades no regulado", de: "Ineffizienz durch unregulierten Grundstückshandel", nl: "Inefficiëntie van ongereguleerde eigendomshandel" },
        { en: "Variance in game outcomes without coordination", es: "Varianza en resultados del juego sin coordinación", de: "Varianz in Spielergebnissen ohne Koordination", nl: "Variantie in speluitkomsten zonder coördinatie" }
      ],
      correct: 0,
      explanation: {
        en: "Price of anarchy quantifies inefficiency of decentralized decision-making. In Monopoly: ratio of total player welfare in Nash equilibrium (selfish play) vs cooperative optimum (collusive coordination). High PoA suggests rules successfully prevent collusion.",
        es: "El precio de la anarquía cuantifica la ineficiencia de la toma de decisiones descentralizada. En Monopoly: proporción de bienestar total del jugador en equilibrio de Nash (juego egoísta) vs óptimo cooperativo (coordinación colusiva). Alto PoA sugiere que las reglas previenen exitosamente la colusión.",
        de: "Preis der Anarchie quantifiziert Ineffizienz dezentraler Entscheidungsfindung. In Monopoly: Verhältnis gesamter Spielerwohlfahrt in Nash-Gleichgewicht (egoistisches Spiel) vs kooperativem Optimum (kollusive Koordination). Hoher PoA deutet an dass Regeln erfolgreich Kollusion verhindern.",
        nl: "Prijs van anarchie kwantificeert inefficiëntie van gedecentraliseerde besluitvorming. In Monopoly: ratio van totaal spelers welzijn in Nash evenwicht (egoïstisch spel) vs coöperatief optimum (samenzwerende coördinatie). Hoge PoA suggereert regels voorkomen succesvol samenzwering."
      }
    },
    {
      question: {
        en: "What is the 'common knowledge assumption' failure in Monopoly's incomplete information scenarios?",
        es: "¿Qué es el fracaso de la 'suposición de conocimiento común' en escenarios de información incompleta de Monopoly?",
        de: "Was ist das 'Common Knowledge Annahme'-Versagen in Monopolys unvollständigen Informationsszenarien?",
        nl: "Wat is het 'gemeenschappelijke kennis assumptie' falen in Monopoly's onvolledige informatie scenario's?"
      },
      options: [
        { en: "Players don't know that other players know their strategies, breaking common knowledge", es: "Jugadores no saben que otros jugadores conocen sus estrategias, rompiendo conocimiento común", de: "Spieler wissen nicht dass andere Spieler ihre Strategien kennen, bricht gemeinsames Wissen", nl: "Spelers weten niet dat andere spelers hun strategieën kennen, breekt gemeenschappelijke kennis" },
        { en: "Hidden cash violates common knowledge of game state", es: "Efectivo oculto viola conocimiento común del estado del juego", de: "Verstecktes Bargeld verletzt gemeinsames Wissen des Spielzustands", nl: "Verborgen cash schendt gemeenschappelijke kennis van spelstaat" },
        { en: "Players have different rule interpretations", es: "Jugadores tienen diferentes interpretaciones de reglas", de: "Spieler haben unterschiedliche Regelinterpretationen", nl: "Spelers hebben verschillende regel interpretaties" },
        { en: "Common knowledge requires perfect recall", es: "Conocimiento común requiere recuerdo perfecto", de: "Gemeinsames Wissen erfordert perfekte Erinnerung", nl: "Gemeenschappelijke kennis vereist perfecte herinnering" }
      ],
      correct: 1,
      explanation: {
        en: "Common knowledge requires everyone knows X, everyone knows everyone knows X, etc. Hidden cash breaks this: you know your cash, opponent doesn't; you know they don't know, but they know you know something they don't - infinite regress impossible.",
        es: "El conocimiento común requiere que todos sepan X, todos sepan que todos saben X, etc. El efectivo oculto rompe esto: conoces tu efectivo, el oponente no; sabes que no saben, pero saben que sabes algo que no saben - regresión infinita imposible.",
        de: "Gemeinsames Wissen erfordert jeder weiß X, jeder weiß dass jeder X weiß, usw. Verstecktes Bargeld bricht dies: Sie wissen Ihr Bargeld, Gegner nicht; Sie wissen sie wissen nicht, aber sie wissen Sie wissen etwas das sie nicht wissen - unendlicher Regress unmöglich.",
        nl: "Gemeenschappelijke kennis vereist iedereen weet X, iedereen weet dat iedereen X weet, etc. Verborgen cash breekt dit: jij weet je cash, tegenstander niet; jij weet dat ze het niet weten, maar ze weten dat jij iets weet dat ze niet weten - oneindige regressie onmogelijk."
      }
    }
  ];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = questions;
  } else {
    window.boardGamesMonopolyLevel10 = questions;
  }
})();
