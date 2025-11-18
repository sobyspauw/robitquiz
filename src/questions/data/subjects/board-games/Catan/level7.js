// Quiz Template - Level 7: Bord spelletjes - Catan
(function() {
  const level7 = {
    name: {
      en: "Catan - Legend",
      es: "Catan - Leyenda",
      de: "Catan - Legende",
      nl: "Catan - Legende"
    },
    questions: [
      {
        question: {
          en: "In Traders & Barbarians 'Trade & Progress' variant, what is the optimal commodity conversion strategy?",
          es: "En la variante 'Comercio y Progreso' de Comerciantes & Bárbaros, ¿cuál es la estrategia óptima de conversión de productos?",
          de: "Was ist in der 'Handel & Fortschritt'-Variante von Händler & Barbaren die optimale Rohstoffkonversionsstrategie?",
          nl: "Wat is in de 'Handel & Vooruitgang' variant van Handelaren & Barbaren de optimale grondstof conversie strategie?"
        },
        options: [
          { en: "Convert 2:1 before opponents reach metropolis thresholds", es: "Convertir 2:1 antes de que los oponentes alcancen umbrales de metrópolis", de: "2:1 konvertieren bevor Gegner Metropolen-Schwellen erreichen", nl: "2:1 converteren voordat tegenstanders metropool drempels bereiken" },
          { en: "Never convert commodities", es: "Nunca convertir productos", de: "Rohstoffe nie konvertieren", nl: "Nooit grondstoffen converteren" },
          { en: "Only convert in final turn", es: "Solo convertir en turno final", de: "Nur im Endzug konvertieren", nl: "Alleen converteren in laatste beurt" },
          { en: "Convert all commodities immediately", es: "Convertir todos los productos inmediatamente", de: "Alle Rohstoffe sofort konvertieren", nl: "Alle grondstoffen direct converteren" }
        ],
        correct: 0,
        explanation: {
          en: "In Trade & Progress, timing commodity conversion is crucial. Converting at 2:1 ratios to race for specific improvement levels before opponents can contest metropolis positions provides maximum strategic value. Waiting too long allows opponents to lock you out of metropolises.",
          es: "En Comercio y Progreso, cronometrar la conversión de productos es crucial. Convertir en proporciones 2:1 para competir por niveles de mejora específicos antes de que los oponentes puedan disputar posiciones de metrópolis proporciona el máximo valor estratégico. Esperar demasiado permite que los oponentes te excluyan de las metrópolis.",
          de: "In Handel & Fortschritt ist das Timing der Rohstoffkonversion entscheidend. Die Konversion im 2:1-Verhältnis, um für spezifische Verbesserungsstufen zu konkurrieren, bevor Gegner Metropolenpositionen anfechten können, bietet maximalen strategischen Wert. Zu langes Warten ermöglicht es Gegnern, Sie von Metropolen auszuschließen.",
          nl: "In Handel & Vooruitgang is timing van grondstofconversie cruciaal. Converteren op 2:1 ratio's om te racen voor specifieke verbeteringsniveaus voordat tegenstanders metropool posities kunnen betwisten, biedt maximale strategische waarde. Te lang wachten stelt tegenstanders in staat je uit te sluiten van metropolen."
        }
      },
      {
        question: {
          en: "What is the 'algorithmic placement theorem' for initial settlement optimization?",
          es: "¿Qué es el 'teorema de colocación algorítmica' para la optimización de asentamiento inicial?",
          de: "Was ist das 'algorithmische Platzierungstheorem' für die Optimierung der anfänglichen Siedlung?",
          nl: "Wat is het 'algoritmische plaatsingstheorema' voor initiële nederzettingsoptimalisatie?"
        },
        options: [
          { en: "Maximize pip-diversity product: (total pips) × (number of unique resources)", es: "Maximizar el producto pip-diversidad: (pips totales) × (número de recursos únicos)", de: "Pip-Diversitäts-Produkt maximieren: (Gesamt-Pips) × (Anzahl einzigartiger Ressourcen)", nl: "Maximaliseer pip-diversiteit product: (totale pips) × (aantal unieke bronnen)" },
          { en: "Only count 6s and 8s", es: "Solo contar 6s y 8s", de: "Nur 6en und 8en zählen", nl: "Alleen 6'en en 8'en tellen" },
          { en: "Place randomly for fairness", es: "Colocar aleatoriamente para justicia", de: "Zufällig für Fairness platzieren", nl: "Willekeurig plaatsen voor eerlijkheid" },
          { en: "Always choose harbor locations", es: "Siempre elegir ubicaciones de puerto", de: "Immer Hafenstandorte wählen", nl: "Altijd havenlocaties kiezen" }
        ],
        correct: 0,
        explanation: {
          en: "Advanced computational analysis shows optimal placement maximizes the product of probability (pips) and resource diversity. A 10-pip location with 4 resources (product: 40) typically outperforms a 12-pip location with 2 resources (product: 24) because trading efficiency scales with diversity.",
          es: "El análisis computacional avanzado muestra que la colocación óptima maximiza el producto de probabilidad (pips) y diversidad de recursos. Una ubicación de 10 pips con 4 recursos (producto: 40) típicamente supera a una ubicación de 12 pips con 2 recursos (producto: 24) porque la eficiencia comercial escala con la diversidad.",
          de: "Fortgeschrittene Computeranalyse zeigt, dass optimale Platzierung das Produkt aus Wahrscheinlichkeit (Pips) und Ressourcenvielfalt maximiert. Ein 10-Pip-Standort mit 4 Ressourcen (Produkt: 40) übertrifft typischerweise einen 12-Pip-Standort mit 2 Ressourcen (Produkt: 24), weil Handelseffizienz mit Vielfalt skaliert.",
          nl: "Geavanceerde computationele analyse toont dat optimale plaatsing het product van waarschijnlijkheid (pips) en brondiversiteit maximaliseert. Een 10-pip locatie met 4 bronnen (product: 40) presteert doorgaans beter dan een 12-pip locatie met 2 bronnen (product: 24) omdat handelsefficiëntie schaalt met diversiteit."
        }
      },
      {
        question: {
          en: "When should you execute the 'monopoly into road building' combo in competitive play?",
          es: "¿Cuándo debes ejecutar el combo 'monopolio en construcción de carreteras' en juego competitivo?",
          de: "Wann sollte man die 'Monopol-in-Straßenbau'-Kombination im Wettkampfspiel ausführen?",
          nl: "Wanneer moet je de 'monopolie naar wegbouw' combo uitvoeren in competitief spel?"
        },
        options: [
          { en: "When you can claim longest road and last settlement in one turn", es: "Cuando puedes reclamar el camino más largo y el último asentamiento en un turno", de: "Wenn man längste Straße und letzte Siedlung in einem Zug beanspruchen kann", nl: "Wanneer je langste weg en laatste nederzetting in één beurt kunt claimen" },
          { en: "Use cards separately over multiple turns", es: "Usar cartas por separado en múltiples turnos", de: "Karten über mehrere Züge getrennt verwenden", nl: "Kaarten afzonderlijk gebruiken over meerdere beurten" },
          { en: "Only when losing badly", es: "Solo cuando se está perdiendo mucho", de: "Nur wenn man stark verliert", nl: "Alleen wanneer je flink aan het verliezen bent" },
          { en: "Never combine development cards", es: "Nunca combinar cartas de desarrollo", de: "Entwicklungskarten nie kombinieren", nl: "Ontwikkelingskaarten nooit combineren" }
        ],
        correct: 0,
        explanation: {
          en: "The monopoly-road building combo is most powerful when executed as a surprise win: monopoly lumber/brick to collect 6-8 resources, then road building to simultaneously claim longest road (2 points) and reach the final contested settlement spot. This can swing 4+ points in a single turn.",
          es: "El combo monopolio-construcción de carreteras es más poderoso cuando se ejecuta como victoria sorpresa: monopolio de madera/ladrillo para recolectar 6-8 recursos, luego construcción de carreteras para reclamar simultáneamente el camino más largo (2 puntos) y alcanzar el último lugar de asentamiento disputado. Esto puede cambiar 4+ puntos en un solo turno.",
          de: "Die Monopol-Straßenbau-Kombination ist am mächtigsten, wenn sie als Überraschungssieg ausgeführt wird: Monopol auf Holz/Ziegel, um 6-8 Ressourcen zu sammeln, dann Straßenbau, um gleichzeitig die längste Straße (2 Punkte) zu beanspruchen und den letzten umkämpften Siedlungsplatz zu erreichen. Dies kann 4+ Punkte in einem Zug schwingen.",
          nl: "De monopolie-wegbouw combo is het krachtigst wanneer uitgevoerd als verrassingswinst: monopolie hout/baksteen om 6-8 bronnen te verzamelen, dan wegbouw om tegelijkertijd langste weg (2 punten) te claimen en de laatste betwiste nederzettingsplek te bereiken. Dit kan 4+ punten in één beurt verschuiven."
        }
      },
      {
        question: {
          en: "What is the 'expected value calculation' for trading 3 sheep for 1 ore at a 3:1 harbor?",
          es: "¿Cuál es el 'cálculo del valor esperado' para intercambiar 3 ovejas por 1 mineral en un puerto 3:1?",
          de: "Was ist die 'Erwartungswertberechnung' für den Tausch von 3 Schafen gegen 1 Erz an einem 3:1-Hafen?",
          nl: "Wat is de 'verwachte waarde berekening' voor het ruilen van 3 schapen voor 1 erts bij een 3:1 haven?"
        },
        options: [
          { en: "Positive if sheep hexes are 6+ combined pips and you need cities", es: "Positivo si los hexágonos de ovejas tienen 6+ pips combinados y necesitas ciudades", de: "Positiv wenn Schafhexe 6+ kombinierte Pips haben und man Städte braucht", nl: "Positief als schapen hexen 6+ gecombineerde pips hebben en je steden nodig hebt" },
          { en: "Always negative trade value", es: "Siempre valor de intercambio negativo", de: "Immer negativer Tauschwert", nl: "Altijd negatieve ruilwaarde" },
          { en: "Only valuable in first 3 turns", es: "Solo valioso en los primeros 3 turnos", de: "Nur in ersten 3 Zügen wertvoll", nl: "Alleen waardevol in eerste 3 beurten" },
          { en: "Never use harbors for trading", es: "Nunca usar puertos para comerciar", de: "Häfen nie zum Handeln verwenden", nl: "Nooit havens gebruiken voor handelen" }
        ],
        correct: 0,
        explanation: {
          en: "The trade is positive-value when: (1) your sheep production exceeds consumption needs, AND (2) the ore enables city building which provides 2-point advantage plus doubled production. With 6+ sheep pips, you'll regenerate the 3 sheep within 2-3 turns while the city provides permanent benefits.",
          es: "El intercambio tiene valor positivo cuando: (1) tu producción de ovejas excede las necesidades de consumo, Y (2) el mineral permite la construcción de ciudades que proporciona ventaja de 2 puntos más producción duplicada. Con 6+ pips de ovejas, regenerarás las 3 ovejas dentro de 2-3 turnos mientras la ciudad proporciona beneficios permanentes.",
          de: "Der Tausch ist wertvoll, wenn: (1) Ihre Schafproduktion den Verbrauchsbedarf übersteigt, UND (2) das Erz den Stadtbau ermöglicht, der 2-Punkte-Vorteil plus verdoppelte Produktion bietet. Mit 6+ Schaf-Pips regenerieren Sie die 3 Schafe innerhalb von 2-3 Zügen, während die Stadt dauerhafte Vorteile bietet.",
          nl: "De ruil heeft positieve waarde wanneer: (1) je schapenproductie de verbruiksbehoeften overschrijdt, EN (2) het erts stadenbouw mogelijk maakt die 2-punten voordeel plus verdubbelde productie biedt. Met 6+ schapen pips regenereer je de 3 schapen binnen 2-3 beurten terwijl de stad permanente voordelen biedt."
        }
      },
      {
        question: {
          en: "What defines the 'anti-leader coalition breakdown point' in tournament play?",
          es: "¿Qué define el 'punto de ruptura de la coalición anti-líder' en el juego de torneo?",
          de: "Was definiert den 'Anti-Führenden-Koalitions-Zusammenbruchspunkt' im Turnierspiel?",
          nl: "Wat definieert het 'anti-leider coalitie breekpunt' in toernooispel?"
        },
        options: [
          { en: "When 2nd place is within 2 points of leader - cooperation shifts to competition", es: "Cuando el 2do lugar está a 2 puntos del líder - la cooperación cambia a competencia", de: "Wenn 2. Platz innerhalb von 2 Punkten vom Führenden ist - Kooperation wird zu Konkurrenz", nl: "Wanneer 2e plaats binnen 2 punten van leider is - samenwerking verschuift naar competitie" },
          { en: "Always maintain coalition until game ends", es: "Siempre mantener coalición hasta que termine el juego", de: "Koalition immer bis Spielende aufrechterhalten", nl: "Altijd coalitie handhaven tot spel eindigt" },
          { en: "Break coalition randomly", es: "Romper coalición aleatoriamente", de: "Koalition zufällig brechen", nl: "Coalitie willekeurig verbreken" },
          { en: "Never form coalitions in tournaments", es: "Nunca formar coaliciones en torneos", de: "Nie Koalitionen in Turnieren bilden", nl: "Nooit coalities vormen in toernooien" }
        ],
        correct: 0,
        explanation: {
          en: "Game theory analysis shows anti-leader coalitions collapse when the second-place player gets within 2 points of the leader. At this threshold, the optimal strategy shifts from 'block the leader' to 'maximize own victory chance,' causing the coalition to fracture as players pursue individual wins.",
          es: "El análisis de teoría de juegos muestra que las coaliciones anti-líder colapsan cuando el jugador de segundo lugar se acerca a 2 puntos del líder. En este umbral, la estrategia óptima cambia de 'bloquear al líder' a 'maximizar la propia posibilidad de victoria', causando que la coalición se fracture mientras los jugadores persiguen victorias individuales.",
          de: "Spieltheorieanalyse zeigt, dass Anti-Führenden-Koalitionen zusammenbrechen, wenn der Zweitplatzierte auf 2 Punkte zum Führenden kommt. An dieser Schwelle verschiebt sich die optimale Strategie von 'den Führenden blockieren' zu 'eigene Siegchance maximieren', wodurch die Koalition zerbricht, während Spieler individuelle Siege verfolgen.",
          nl: "Speltheorie analyse toont dat anti-leider coalities instorten wanneer de tweede plaats speler binnen 2 punten van de leider komt. Bij deze drempel verschuift de optimale strategie van 'blokkeer de leider' naar 'maximaliseer eigen overwinnningskans', waardoor de coalitie breekt terwijl spelers individuele overwinningen nastreven."
        }
      },
      {
        question: {
          en: "In expert play, when is the 'wheat embargo' strategy most effective?",
          es: "En juego experto, ¿cuándo es más efectiva la estrategia de 'embargo de trigo'?",
          de: "Wann ist die 'Weizen-Embargo'-Strategie im Expertenspiel am effektivsten?",
          nl: "Wanneer is de 'tarwe embargo' strategie het meest effectief in expert spel?"
        },
        options: [
          { en: "When opponent needs 1 wheat for city and you control 70%+ wheat production", es: "Cuando el oponente necesita 1 trigo para ciudad y controlas 70%+ de producción de trigo", de: "Wenn Gegner 1 Weizen für Stadt braucht und man 70%+ Weizenproduktion kontrolliert", nl: "Wanneer tegenstander 1 tarwe nodig heeft voor stad en je 70%+ tarweproductie controleert" },
          { en: "Always trade wheat freely", es: "Siempre comerciar trigo libremente", de: "Weizen immer frei handeln", nl: "Altijd tarwe vrij ruilen" },
          { en: "Only embargo in first 5 turns", es: "Solo embargo en los primeros 5 turnos", de: "Nur in ersten 5 Zügen Embargo", nl: "Alleen embargo in eerste 5 beurten" },
          { en: "Never refuse trades", es: "Nunca rechazar intercambios", de: "Handel nie ablehnen", nl: "Nooit handel weigeren" }
        ],
        correct: 0,
        explanation: {
          en: "The wheat embargo becomes dominant when you control 70%+ of wheat production and can observe opponents accumulating ore (visible through card counts and trades). By refusing all wheat trades, you force them to either: (a) waste 4:1 bank trades, or (b) delay cities entirely, maintaining your competitive advantage for 3-5 critical turns.",
          es: "El embargo de trigo se vuelve dominante cuando controlas 70%+ de la producción de trigo y puedes observar a los oponentes acumulando mineral (visible a través de conteos de cartas e intercambios). Al rechazar todos los intercambios de trigo, los obligas a: (a) desperdiciar intercambios bancarios 4:1, o (b) retrasar ciudades completamente, manteniendo tu ventaja competitiva por 3-5 turnos críticos.",
          de: "Das Weizen-Embargo wird dominant, wenn man 70%+ der Weizenproduktion kontrolliert und beobachten kann, wie Gegner Erz sammeln (sichtbar durch Kartenzählungen und Handel). Durch Ablehnung aller Weizengeschäfte zwingt man sie entweder: (a) 4:1-Bankgeschäfte zu verschwenden, oder (b) Städte vollständig zu verzögern, wodurch man seinen Wettbewerbsvorteil für 3-5 kritische Züge aufrechterhält.",
          nl: "Het tarwe embargo wordt dominant wanneer je 70%+ van tarweproductie controleert en kunt observeren dat tegenstanders erts verzamelen (zichtbaar door kaarttellingen en handel). Door alle tarwehandel te weigeren, dwing je hen om ofwel: (a) 4:1 bankruil te verspillen, of (b) steden volledig uit te stellen, waarbij je competitief voordeel voor 3-5 kritieke beurten behoudt."
        }
      },
      {
        question: {
          en: "What is the 'variance reduction principle' in settlement placement?",
          es: "¿Qué es el 'principio de reducción de varianza' en la colocación de asentamientos?",
          de: "Was ist das 'Varianzvreduktionsprinzip' bei der Siedlungsplatzierung?",
          nl: "Wat is het 'variantie reductie principe' in nederzettingsplaatsing?"
        },
        options: [
          { en: "Spreading settlements across multiple dice numbers reduces roll-to-roll volatility", es: "Distribuir asentamientos en múltiples números de dados reduce la volatilidad de tirada a tirada", de: "Siedlungen über mehrere Würfelzahlen verteilen reduziert Wurf-zu-Wurf-Volatilität", nl: "Nederzettingen spreiden over meerdere dobbelsteennummers vermindert worp-tot-worp volatiliteit" },
          { en: "Place all settlements on same number", es: "Colocar todos los asentamientos en el mismo número", de: "Alle Siedlungen auf gleiche Zahl setzen", nl: "Alle nederzettingen op hetzelfde nummer plaatsen" },
          { en: "Always maximize variance for excitement", es: "Siempre maximizar varianza para emoción", de: "Varianz immer für Spannung maximieren", nl: "Altijd variantie maximaliseren voor spanning" },
          { en: "Variance is irrelevant in Catan", es: "La varianza es irrelevante en Catan", de: "Varianz ist irrelevant in Catan", nl: "Variantie is irrelevant in Catan" }
        ],
        correct: 0,
        explanation: {
          en: "Statistical analysis shows that spreading settlements across diverse numbers (like 4-5-6-8-9-10) creates more consistent resource income than clustering (like three settlements all touching 6s). While peak-turn production may be lower, consistent production across most rolls enables more reliable building plans and reduces dependency on lucky streaks.",
          es: "El análisis estadístico muestra que distribuir asentamientos en números diversos (como 4-5-6-8-9-10) crea ingresos de recursos más consistentes que agrupar (como tres asentamientos todos tocando 6s). Aunque la producción de turno pico puede ser menor, la producción consistente en la mayoría de las tiradas permite planes de construcción más confiables y reduce la dependencia de rachas de suerte.",
          de: "Statistische Analyse zeigt, dass das Verteilen von Siedlungen über verschiedene Zahlen (wie 4-5-6-8-9-10) konsistenteres Ressourceneinkommen schafft als Clustering (wie drei Siedlungen alle auf 6en). Während die Spitzenproduktion pro Zug niedriger sein kann, ermöglicht konsistente Produktion über die meisten Würfe zuverlässigere Baupläne und reduziert Abhängigkeit von Glückssträhnen.",
          nl: "Statistische analyse toont dat het spreiden van nederzettingen over diverse nummers (zoals 4-5-6-8-9-10) consistenter broninkomen creëert dan clusteren (zoals drie nederzettingen allemaal 6'en rakend). Hoewel piek-beurt productie lager kan zijn, maakt consistente productie over de meeste worpen betrouwbaardere bouwplannen mogelijk en vermindert afhankelijkheid van geluksstreaks."
        }
      },
      {
        question: {
          en: "When executing the 'double monopoly' endgame, what is the optimal target sequence?",
          es: "Al ejecutar el 'doble monopolio' de final de juego, ¿cuál es la secuencia objetivo óptima?",
          de: "Was ist die optimale Zielsequenz beim Ausführen des 'Doppelmonopols' im Endspiel?",
          nl: "Wat is de optimale doelvolgorde bij het uitvoeren van het 'dubbel monopolie' eindspel?"
        },
        options: [
          { en: "Monopoly resource needed for building, then monopoly resource for final city/settlement", es: "Monopolio del recurso necesario para construir, luego monopolio del recurso para ciudad/asentamiento final", de: "Monopol auf benötigte Ressource zum Bauen, dann Monopol auf Ressource für finale Stadt/Siedlung", nl: "Monopolie bron nodig voor bouwen, dan monopolie bron voor finale stad/nederzetting" },
          { en: "Use both monopoly cards on same resource", es: "Usar ambas cartas de monopolio en el mismo recurso", de: "Beide Monopolkarten auf gleiche Ressource verwenden", nl: "Beide monopoliekaarten op dezelfde bron gebruiken" },
          { en: "Save both cards indefinitely", es: "Guardar ambas cartas indefinidamente", de: "Beide Karten unbegrenzt aufheben", nl: "Beide kaarten onbepaald bewaren" },
          { en: "Play monopoly cards randomly", es: "Jugar cartas de monopolio aleatoriamente", de: "Monopolkarten zufällig spielen", nl: "Monopoliekaarten willekeurig spelen" }
        ],
        correct: 0,
        explanation: {
          en: "With two monopoly cards, the optimal sequence is: (1st monopoly) collect the abundant resource opponents are producing (often lumber/brick), allowing you to build roads/settlements, then (2nd monopoly) collect the scarce resource (wheat/ore) needed to convert that settlement to a city or buy the winning development card. This two-stage approach can generate 12+ resources.",
          es: "Con dos cartas de monopolio, la secuencia óptima es: (1er monopolio) recolectar el recurso abundante que los oponentes están produciendo (a menudo madera/ladrillo), permitiéndote construir carreteras/asentamientos, luego (2do monopolio) recolectar el recurso escaso (trigo/mineral) necesario para convertir ese asentamiento en ciudad o comprar la carta de desarrollo ganadora. Este enfoque de dos etapas puede generar 12+ recursos.",
          de: "Mit zwei Monopolkarten ist die optimale Sequenz: (1. Monopol) die reichliche Ressource sammeln, die Gegner produzieren (oft Holz/Ziegel), um Straßen/Siedlungen zu bauen, dann (2. Monopol) die knappe Ressource (Weizen/Erz) sammeln, die benötigt wird, um diese Siedlung in eine Stadt umzuwandeln oder die siegende Entwicklungskarte zu kaufen. Dieser zweistufige Ansatz kann 12+ Ressourcen generieren.",
          nl: "Met twee monopoliekaarten is de optimale volgorde: (1e monopolie) verzamel de overvloedige bron die tegenstanders produceren (vaak hout/baksteen), waardoor je wegen/nederzettingen kunt bouwen, dan (2e monopolie) verzamel de schaarse bron (tarwe/erts) nodig om die nederzetting om te zetten naar een stad of de winnende ontwikkelingskaart te kopen. Deze tweefasenaanpak kan 12+ bronnen genereren."
        }
      },
      {
        question: {
          en: "What is the 'information asymmetry advantage' in hand tracking?",
          es: "¿Qué es la 'ventaja de asimetría de información' en el seguimiento de manos?",
          de: "Was ist der 'Informationsasymmetrievorteil' beim Hand-Tracking?",
          nl: "Wat is het 'informatie asymmetrie voordeel' in hand volgen?"
        },
        options: [
          { en: "You know opponents' exact hands while they only estimate yours", es: "Conoces las manos exactas de los oponentes mientras ellos solo estiman la tuya", de: "Man kennt exakte Hände der Gegner während sie nur schätzen", nl: "Je kent exacte handen van tegenstanders terwijl zij alleen schatten" },
          { en: "Ignore all opponent information", es: "Ignorar toda información del oponente", de: "Alle Gegnerinformationen ignorieren", nl: "Alle tegenstander informatie negeren" },
          { en: "Share all card information openly", es: "Compartir toda información de cartas abiertamente", de: "Alle Karteninformationen offen teilen", nl: "Alle kaartinformatie openlijk delen" },
          { en: "Hand tracking provides no advantage", es: "El seguimiento de manos no proporciona ventaja", de: "Hand-Tracking bietet keinen Vorteil", nl: "Hand volgen biedt geen voordeel" }
        ],
        correct: 0,
        explanation: {
          en: "By meticulously tracking production, trades, and builds, you can deduce opponents' exact holdings while they can only guess yours based on your visible actions. This information asymmetry allows perfect monopoly targeting, optimal robber placement, and strategic trade timing that opponents cannot match without similar tracking discipline.",
          es: "Al rastrear meticulosamente la producción, intercambios y construcciones, puedes deducir las tenencias exactas de los oponentes mientras ellos solo pueden adivinar las tuyas basándose en tus acciones visibles. Esta asimetría de información permite una selección de monopolio perfecta, colocación óptima de ladrones y tiempo de intercambio estratégico que los oponentes no pueden igualar sin disciplina de rastreo similar.",
          de: "Durch sorgfältiges Verfolgen von Produktion, Handel und Bauten kann man exakte Bestände der Gegner deduzieren, während sie nur raten können basierend auf sichtbaren Aktionen. Diese Informationsasymmetrie ermöglicht perfekte Monopol-Zielauswahl, optimale Räuberplatzierung und strategisches Handelstiming, das Gegner ohne ähnliche Tracking-Disziplin nicht erreichen können.",
          nl: "Door nauwgezet productie, handel en bouwsels te volgen, kun je exacte bezittingen van tegenstanders deduceren terwijl zij alleen kunnen raden gebaseerd op je zichtbare acties. Deze informatie asymmetrie maakt perfecte monopolie targeting, optimale roverplaatsing en strategische handelstiming mogelijk die tegenstanders niet kunnen evenaren zonder vergelijkbare volgdiscipline."
        }
      },
      {
        question: {
          en: "In Cities & Knights, what is the 'barbarian timing manipulation' strategy?",
          es: "En Ciudades & Caballeros, ¿qué es la estrategia de 'manipulación del tiempo de los bárbaros'?",
          de: "Was ist in Städte & Ritter die 'Barbaren-Timing-Manipulations'-Strategie?",
          nl: "Wat is in Steden & Ridders de 'barbaren timing manipulatie' strategie?"
        },
        options: [
          { en: "Delay knight activation until barbarians are 1 turn away to deny opponents response time", es: "Retrasar activación de caballeros hasta que los bárbaros estén a 1 turno para negar tiempo de respuesta a oponentes", de: "Ritter-Aktivierung verzögern bis Barbaren 1 Zug entfernt sind um Gegnern Reaktionszeit zu nehmen", nl: "Ridder activering uitstellen tot barbaren 1 beurt weg zijn om tegenstanders reactietijd te ontzeggen" },
          { en: "Activate all knights immediately", es: "Activar todos los caballeros inmediatamente", de: "Alle Ritter sofort aktivieren", nl: "Alle ridders direct activeren" },
          { en: "Never build knights in C&K", es: "Nunca construir caballeros en C&K", de: "Nie Ritter in S&R bauen", nl: "Nooit ridders bouwen in S&R" },
          { en: "Ignore barbarian ship position", es: "Ignorar posición del barco bárbaro", de: "Barbarenschiffposition ignorieren", nl: "Barbaren schippositie negeren" }
        ],
        correct: 0,
        explanation: {
          en: "Expert C&K players track the barbarian ship and deliberately delay knight activation until the ship is 1-2 spaces from Catan. This denies opponents time to respond with their own knight activations, potentially causing them to lose a city. The strategy works best when you have stronger knight strength (level 2-3 knights) ready to activate last-minute.",
          es: "Los jugadores expertos de C&K rastrean el barco bárbaro y deliberadamente retrasan la activación de caballeros hasta que el barco está a 1-2 espacios de Catan. Esto niega a los oponentes tiempo para responder con sus propias activaciones de caballeros, potencialmente causando que pierdan una ciudad. La estrategia funciona mejor cuando tienes mayor fuerza de caballeros (caballeros de nivel 2-3) listos para activar en el último minuto.",
          de: "Experten-S&R-Spieler verfolgen das Barbarenschiff und verzögern absichtlich die Ritteraktivierung, bis das Schiff 1-2 Felder von Catan entfernt ist. Dies nimmt Gegnern Zeit, mit eigenen Ritteraktivierungen zu reagieren, wodurch sie möglicherweise eine Stadt verlieren. Die Strategie funktioniert am besten, wenn man stärkere Ritterstärke (Level-2-3-Ritter) bereit hat, um in letzter Minute zu aktivieren.",
          nl: "Expert S&R spelers volgen het barbarenschip en stellen opzettelijk ridder activering uit tot het schip 1-2 vakjes van Catan is. Dit ontzegt tegenstanders tijd om te reageren met hun eigen ridder activeringen, waardoor ze mogelijk een stad verliezen. De strategie werkt het best wanneer je sterkere ridder kracht (niveau 2-3 ridders) klaar hebt om op het laatste moment te activeren."
        }
      },
      {
        question: {
          en: "What is the 'marginal utility decline point' for development cards?",
          es: "¿Qué es el 'punto de declive de utilidad marginal' para las cartas de desarrollo?",
          de: "Was ist der 'Grenznutzenrückgangspunkt' für Entwicklungskarten?",
          nl: "Wat is het 'marginale nut afname punt' voor ontwikkelingskaarten?"
        },
        options: [
          { en: "After buying 8-10 cards, probability of useful cards drops below settlement value", es: "Después de comprar 8-10 cartas, la probabilidad de cartas útiles cae por debajo del valor de asentamiento", de: "Nach Kauf von 8-10 Karten sinkt Wahrscheinlichkeit nützlicher Karten unter Siedlungswert", nl: "Na aankoop van 8-10 kaarten daalt waarschijnlijkheid van nuttige kaarten onder nederzettingswaarde" },
          { en: "Buy unlimited development cards always", es: "Comprar cartas de desarrollo ilimitadas siempre", de: "Unbegrenzt Entwicklungskarten immer kaufen", nl: "Onbeperkt ontwikkelingskaarten altijd kopen" },
          { en: "Never buy more than 2 cards total", es: "Nunca comprar más de 2 cartas en total", de: "Nie mehr als 2 Karten insgesamt kaufen", nl: "Nooit meer dan 2 kaarten totaal kopen" },
          { en: "Development card value never declines", es: "El valor de la carta de desarrollo nunca declina", de: "Entwicklungskartenwert sinkt nie", nl: "Ontwikkelingskaart waarde daalt nooit" }
        ],
        correct: 0,
        explanation: {
          en: "Mathematical analysis of the 25-card development deck shows that after purchasing 8-10 cards, your probability of drawing useful cards (knights for army, VPs, monopoly/YOP for combo plays) drops significantly. At this point, the expected value of spending 3 resources on another card is lower than investing in a settlement (1 guaranteed point + production).",
          es: "El análisis matemático del mazo de 25 cartas de desarrollo muestra que después de comprar 8-10 cartas, tu probabilidad de robar cartas útiles (caballeros para ejército, PVs, monopolio/AP para jugadas combinadas) cae significativamente. En este punto, el valor esperado de gastar 3 recursos en otra carta es menor que invertir en un asentamiento (1 punto garantizado + producción).",
          de: "Mathematische Analyse des 25-Karten-Entwicklungsdecks zeigt, dass nach Kauf von 8-10 Karten die Wahrscheinlichkeit, nützliche Karten zu ziehen (Ritter für Armee, SP, Monopol/JdÜ für Kombospiele), signifikant sinkt. An diesem Punkt ist der Erwartungswert, 3 Ressourcen für eine weitere Karte auszugeben, niedriger als in eine Siedlung zu investieren (1 garantierter Punkt + Produktion).",
          nl: "Wiskundige analyse van het 25-kaarten ontwikkelingsdeck toont dat na aankoop van 8-10 kaarten je waarschijnlijkheid van het trekken van nuttige kaarten (ridders voor leger, OPs, monopolie/JvO voor combo's) significant daalt. Op dit punt is de verwachte waarde van 3 bronnen uitgeven aan een andere kaart lager dan investeren in een nederzetting (1 gegarandeerd punt + productie)."
        }
      },
      {
        question: {
          en: "What is the 'trade ratio optimization' for different game stages?",
          es: "¿Qué es la 'optimización de relación de intercambio' para diferentes etapas del juego?",
          de: "Was ist die 'Handelsverhältnis-Optimierung' für verschiedene Spielphasen?",
          nl: "Wat is de 'handelsratio optimalisatie' voor verschillende spelfasen?"
        },
        options: [
          { en: "Early: favor 2:1 harbors, Mid: balanced trades, Late: aggressive 3:1/4:1 for winning plays", es: "Temprano: favorecer puertos 2:1, Medio: intercambios equilibrados, Tardío: 3:1/4:1 agresivos para jugadas ganadoras", de: "Früh: 2:1-Häfen bevorzugen, Mitte: ausgewogene Geschäfte, Spät: aggressive 3:1/4:1 für Siegzüge", nl: "Vroeg: voorrang 2:1 havens, Midden: gebalanceerde handel, Laat: agressief 3:1/4:1 voor winnende zetten" },
          { en: "Always use 4:1 bank trades only", es: "Siempre usar solo intercambios bancarios 4:1", de: "Immer nur 4:1-Bankgeschäfte verwenden", nl: "Altijd alleen 4:1 bankruil gebruiken" },
          { en: "Never trade at any ratio", es: "Nunca comerciar en ninguna proporción", de: "Nie zu irgendeinem Verhältnis handeln", nl: "Nooit ruilen op enige ratio" },
          { en: "All trades should be 1:1 always", es: "Todos los intercambios deben ser 1:1 siempre", de: "Alle Geschäfte sollten immer 1:1 sein", nl: "Alle handel moet altijd 1:1 zijn" }
        ],
        correct: 0,
        explanation: {
          en: "Optimal trading strategy evolves with game phase: Early game (turns 1-15) prioritizes securing 2:1 harbor access for long-term efficiency. Mid-game (turns 16-30) uses balanced player trades to maintain relationships while building position. Late game (turns 31+), accept even unfavorable 3:1 or 4:1 trades if they enable immediate winning moves, since future efficiency is irrelevant.",
          es: "La estrategia de comercio óptima evoluciona con la fase del juego: Juego temprano (turnos 1-15) prioriza asegurar acceso a puertos 2:1 para eficiencia a largo plazo. Juego medio (turnos 16-30) usa intercambios equilibrados de jugadores para mantener relaciones mientras construye posición. Juego tardío (turnos 31+), acepta incluso intercambios desfavorables 3:1 o 4:1 si permiten movimientos ganadores inmediatos, ya que la eficiencia futura es irrelevante.",
          de: "Optimale Handelsstrategie entwickelt sich mit Spielphase: Frühes Spiel (Züge 1-15) priorisiert Sicherung von 2:1-Hafenzugang für langfristige Effizienz. Mittleres Spiel (Züge 16-30) nutzt ausgewogene Spielergeschäfte, um Beziehungen zu pflegen während Position aufgebaut wird. Spätes Spiel (Züge 31+), akzeptiert sogar ungünstige 3:1- oder 4:1-Geschäfte, wenn sie sofortige Siegzüge ermöglichen, da zukünftige Effizienz irrelevant ist.",
          nl: "Optimale handelsstrategie evolueert met spelfase: Vroeg spel (beurten 1-15) geeft prioriteit aan beveiligen van 2:1 haventoegang voor langetermijn efficiëntie. Middenspel (beurten 16-30) gebruikt gebalanceerde speler handel om relaties te behouden terwijl positie wordt opgebouwd. Laat spel (beurten 31+), accepteer zelfs ongunstige 3:1 of 4:1 handel als ze directe winnende zetten mogelijk maken, omdat toekomstige efficiëntie irrelevant is."
        }
      },
      {
        question: {
          en: "What is the 'knight card hoarding threshold' in competitive endgames?",
          es: "¿Qué es el 'umbral de acumulación de cartas de caballero' en finales competitivos?",
          de: "Was ist die 'Ritterkarten-Hortungsschwelle' in Wettkampf-Endspielen?",
          nl: "Wat is de 'ridderkaart opslag drempel' in competitieve eindspellen?"
        },
        options: [
          { en: "Hold 3-4 knights unplayed to threaten largest army steal on final turns", es: "Mantener 3-4 caballeros sin jugar para amenazar robo de ejército más grande en turnos finales", de: "3-4 Ritter unausgespielt halten um größte Armee-Diebstahl in Endzügen zu drohen", nl: "Houd 3-4 ridders onspeeld om grootste leger diefstal te dreigen in laatste beurten" },
          { en: "Play all knights immediately when drawn", es: "Jugar todos los caballeros inmediatamente cuando se roban", de: "Alle Ritter sofort nach Ziehen spielen", nl: "Speel alle ridders direct wanneer getrokken" },
          { en: "Never save more than 1 knight card", es: "Nunca guardar más de 1 carta de caballero", de: "Nie mehr als 1 Ritterkarte aufheben", nl: "Nooit meer dan 1 ridderkaart bewaren" },
          { en: "Discard all knight cards", es: "Descartar todas las cartas de caballero", de: "Alle Ritterkarten abwerfen", nl: "Gooi alle ridderkaarten weg" }
        ],
        correct: 0,
        explanation: {
          en: "In endgame scenarios (8-9 points), holding 3-4 unplayed knights creates psychological pressure and strategic optionality. If an opponent takes largest army at 3 knights, you can instantly counter-steal it with 4 consecutive knight plays in a single turn, swinging 4 points (they lose 2, you gain 2). This threat forces conservative play from opponents.",
          es: "En escenarios de final de juego (8-9 puntos), mantener 3-4 caballeros sin jugar crea presión psicológica y opcionalidad estratégica. Si un oponente toma el ejército más grande con 3 caballeros, puedes instantáneamente contra-robarlo con 4 jugadas consecutivas de caballeros en un solo turno, balanceando 4 puntos (pierden 2, ganas 2). Esta amenaza fuerza juego conservador de los oponentes.",
          de: "In Endspielszenarien (8-9 Punkte) erzeugt das Halten von 3-4 ungespielten Rittern psychologischen Druck und strategische Optionalität. Wenn ein Gegner die größte Armee mit 3 Rittern nimmt, kann man sie sofort mit 4 aufeinanderfolgenden Ritterzügen in einem Zug zurückstehlen, wodurch 4 Punkte geschwungen werden (sie verlieren 2, man gewinnt 2). Diese Drohung zwingt Gegner zu konservativem Spiel.",
          nl: "In eindspel scenario's (8-9 punten) creëert het vasthouden van 3-4 ongespeelde ridders psychologische druk en strategische optionaliteit. Als een tegenstander grootste leger neemt met 3 ridders, kun je het direct terugstelen met 4 opeenvolgende ridder spellen in één beurt, waardoor 4 punten verschuiven (zij verliezen 2, jij wint 2). Deze dreiging dwingt conservatief spel van tegenstanders."
        }
      },
      {
        question: {
          en: "In Seafarers scenarios, what is the 'island settlement efficiency formula'?",
          es: "En escenarios de Marineros, ¿qué es la 'fórmula de eficiencia de asentamiento de isla'?",
          de: "Was ist in Seefahrer-Szenarien die 'Insel-Siedlungs-Effizienzformel'?",
          nl: "Wat is in Zeevaarders scenario's de 'eiland nederzetting efficiëntie formule'?"
        },
        options: [
          { en: "(Island pip value) - (ship cost × 2) must exceed 8 to justify expansion", es: "(Valor pip de isla) - (costo de barco × 2) debe exceder 8 para justificar expansión", de: "(Insel-Pip-Wert) - (Schiffskosten × 2) muss 8 überschreiten um Expansion zu rechtfertigen", nl: "(Eiland pip waarde) - (schip kosten × 2) moet 8 overschrijden om expansie te rechtvaardigen" },
          { en: "Always expand to islands regardless of cost", es: "Siempre expandir a islas sin importar el costo", de: "Immer zu Inseln expandieren unabhängig von Kosten", nl: "Altijd uitbreiden naar eilanden ongeacht kosten" },
          { en: "Never build settlements on islands", es: "Nunca construir asentamientos en islas", de: "Nie Siedlungen auf Inseln bauen", nl: "Nooit nederzettingen op eilanden bouwen" },
          { en: "Island efficiency is unmeasurable", es: "La eficiencia de isla es inmensurable", de: "Insel-Effizienz ist unmessbar", nl: "Eiland efficiëntie is onmeetbaar" }
        ],
        correct: 0,
        explanation: {
          en: "Island settlements require ships to reach (each ship costs wood+sheep, same as a road). The efficiency calculation: take the settlement's pip value, subtract double the ship cost (since those resources could have built a road+settlement on mainland), and the result must exceed 8 pips to justify the investment. This accounts for opportunity cost and resource diversion.",
          es: "Los asentamientos de isla requieren barcos para alcanzar (cada barco cuesta madera+oveja, igual que una carretera). El cálculo de eficiencia: toma el valor pip del asentamiento, resta el doble del costo del barco (ya que esos recursos podrían haber construido una carretera+asentamiento en tierra firme), y el resultado debe exceder 8 pips para justificar la inversión. Esto considera el costo de oportunidad y la desviación de recursos.",
          de: "Inselsiedlungen erfordern Schiffe zum Erreichen (jedes Schiff kostet Holz+Schaf, wie eine Straße). Die Effizienzberechnung: nehmen Sie den Pip-Wert der Siedlung, subtrahieren Sie doppelte Schiffskosten (da diese Ressourcen eine Straße+Siedlung auf dem Festland hätten bauen können), und das Ergebnis muss 8 Pips überschreiten, um die Investition zu rechtfertigen. Dies berücksichtigt Opportunitätskosten und Ressourcenumleitung.",
          nl: "Eiland nederzettingen vereisen schepen om te bereiken (elk schip kost hout+schaap, hetzelfde als een weg). De efficiëntie berekening: neem de pip waarde van nederzetting, trek dubbele scheepskosten af (omdat die bronnen een weg+nederzetting op vasteland hadden kunnen bouwen), en het resultaat moet 8 pips overschrijden om investering te rechtvaardigen. Dit houdt rekening met opportunity cost en bron omleiding."
        }
      },
      {
        question: {
          en: "What is the 'settlement cascade timing' in 3-player Catan?",
          es: "¿Qué es el 'tiempo de cascada de asentamiento' en Catan de 3 jugadores?",
          de: "Was ist das 'Siedlungs-Kaskaden-Timing' in 3-Spieler-Catan?",
          nl: "Wat is de 'nederzetting cascade timing' in 3-speler Catan?"
        },
        options: [
          { en: "Build 3rd and 4th settlements on consecutive turns (around turn 12-16) before spots close", es: "Construir 3° y 4° asentamientos en turnos consecutivos (alrededor del turno 12-16) antes de que los lugares se cierren", de: "3. und 4. Siedlung in aufeinanderfolgenden Zügen bauen (um Zug 12-16) bevor Plätze schließen", nl: "Bouw 3e en 4e nederzettingen in opeenvolgende beurten (rond beurt 12-16) voordat plekken sluiten" },
          { en: "Wait until turn 30 for all settlements", es: "Esperar hasta el turno 30 para todos los asentamientos", de: "Bis Zug 30 für alle Siedlungen warten", nl: "Wacht tot beurt 30 voor alle nederzettingen" },
          { en: "Build all 5 settlements immediately", es: "Construir todas las 5 asentamientos inmediatamente", de: "Alle 5 Siedlungen sofort bauen", nl: "Bouw alle 5 nederzettingen direct" },
          { en: "Never build more than 2 settlements", es: "Nunca construir más de 2 asentamientos", de: "Nie mehr als 2 Siedlungen bauen", nl: "Nooit meer dan 2 nederzettingen bouwen" }
        ],
        correct: 0,
        explanation: {
          en: "In 3-player games with fewer initial settlements, viable spots disappear faster. The optimal timing is turns 12-16 when you've accumulated enough resources for 2 consecutive settlements but before the board fills (typically turn 18-20). This 'settlement cascade' secures your expansion before entering the city-building phase where opponents can lock you out.",
          es: "En juegos de 3 jugadores con menos asentamientos iniciales, los lugares viables desaparecen más rápido. El tiempo óptimo es turnos 12-16 cuando has acumulado suficientes recursos para 2 asentamientos consecutivos pero antes de que el tablero se llene (típicamente turno 18-20). Esta 'cascada de asentamientos' asegura tu expansión antes de entrar en la fase de construcción de ciudades donde los oponentes pueden excluirte.",
          de: "In 3-Spieler-Spielen mit weniger anfänglichen Siedlungen verschwinden lebensfähige Plätze schneller. Das optimale Timing ist Züge 12-16, wenn man genug Ressourcen für 2 aufeinanderfolgende Siedlungen gesammelt hat, aber bevor das Brett sich füllt (typisch Zug 18-20). Diese 'Siedlungs-Kaskade' sichert Ihre Expansion, bevor Sie in die Stadtbau-Phase eintreten, wo Gegner Sie aussperren können.",
          nl: "In 3-speler spellen met minder initiële nederzettingen verdwijnen levensvatbare plekken sneller. De optimale timing is beurten 12-16 wanneer je genoeg bronnen hebt verzameld voor 2 opeenvolgende nederzettingen maar voordat het bord vol raakt (typisch beurt 18-20). Deze 'nederzetting cascade' beveiligt je expansie voordat je de stadenbouw fase ingaat waar tegenstanders je kunnen uitsluiten."
        }
      },
      {
        question: {
          en: "What is the 'resource sink identification' defensive strategy?",
          es: "¿Qué es la estrategia defensiva de 'identificación de sumidero de recursos'?",
          de: "Was ist die 'Ressourcensenken-Identifikations'-Verteidigungsstrategie?",
          nl: "Wat is de 'bron afvoer identificatie' defensieve strategie?"
        },
        options: [
          { en: "Identify which opponent is accumulating resources without building and target with robber", es: "Identificar qué oponente está acumulando recursos sin construir y apuntar con ladrón", de: "Identifizieren welcher Gegner Ressourcen ohne Bauen sammelt und mit Räuber anvisieren", nl: "Identificeer welke tegenstander bronnen verzamelt zonder te bouwen en target met rover" },
          { en: "Place robber randomly always", es: "Colocar ladrón aleatoriamente siempre", de: "Räuber immer zufällig platzieren", nl: "Plaats rover altijd willekeurig" },
          { en: "Never move the robber", es: "Nunca mover el ladrón", de: "Räuber nie bewegen", nl: "Verplaats de rover nooit" },
          { en: "Only target lowest-scoring player", es: "Solo apuntar al jugador con menor puntuación", de: "Nur Spieler mit niedrigster Punktzahl anvisieren", nl: "Alleen target laagst scorende speler" }
        ],
        correct: 0,
        explanation: {
          en: "When opponents accumulate 7+ cards without building for 2-3 consecutive turns, they're either: (a) saving for a big combo play, or (b) resource-locked. Either way, they become the optimal robber target. By tracking production vs. building patterns, you can identify the 'resource sink' player and deny them the critical resources needed for their delayed strategy.",
          es: "Cuando los oponentes acumulan 7+ cartas sin construir durante 2-3 turnos consecutivos, están: (a) ahorrando para una gran jugada combinada, o (b) bloqueados por recursos. De cualquier manera, se convierten en el objetivo óptimo del ladrón. Al rastrear la producción vs. patrones de construcción, puedes identificar al jugador 'sumidero de recursos' y negarles los recursos críticos necesarios para su estrategia retrasada.",
          de: "Wenn Gegner 7+ Karten über 2-3 aufeinanderfolgende Züge ansammeln ohne zu bauen, sind sie entweder: (a) sparen für ein großes Kombospiel, oder (b) ressourcenblockiert. In jedem Fall werden sie zum optimalen Räuberziel. Durch Verfolgung von Produktion vs. Baumustern kann man den 'Ressourcensenken'-Spieler identifizieren und ihm die kritischen Ressourcen für seine verzögerte Strategie verweigern.",
          nl: "Wanneer tegenstanders 7+ kaarten verzamelen zonder te bouwen gedurende 2-3 opeenvolgende beurten, zijn ze ofwel: (a) aan het sparen voor een grote combo zet, of (b) bron-geblokkeerd. Hoe dan ook, ze worden het optimale rover doelwit. Door productie vs. bouwpatronen te volgen, kun je de 'bron afvoer' speler identificeren en hen de kritieke bronnen ontzeggen die nodig zijn voor hun uitgestelde strategie."
        }
      },
      {
        question: {
          en: "In competitive Catan, what is the 'probability compression effect'?",
          es: "En Catan competitivo, ¿qué es el 'efecto de compresión de probabilidad'?",
          de: "Was ist im Wettkampf-Catan der 'Wahrscheinlichkeits-Kompressionseffekt'?",
          nl: "Wat is in competitief Catan het 'waarschijnlijkheid compressie effect'?"
        },
        options: [
          { en: "As game progresses, actual dice distribution approaches theoretical probability (law of large numbers)", es: "A medida que el juego progresa, la distribución real de dados se acerca a la probabilidad teórica (ley de grandes números)", de: "Mit Spielfortschritt nähert sich tatsächliche Würfelverteilung theoretischer Wahrscheinlichkeit (Gesetz großer Zahlen)", nl: "Naarmate spel vordert, nadert werkelijke dobbelsteenverdeling theoretische waarschijnlijkheid (wet van grote getallen)" },
          { en: "Dice never follow probability patterns", es: "Los dados nunca siguen patrones de probabilidad", de: "Würfel folgen nie Wahrscheinlichkeitsmustern", nl: "Dobbelstenen volgen nooit waarschijnlijkheidspatronen" },
          { en: "All numbers hit equally often", es: "Todos los números salen igualmente a menudo", de: "Alle Zahlen treffen gleich oft", nl: "Alle nummers vallen even vaak" },
          { en: "Probability is irrelevant in Catan", es: "La probabilidad es irrelevante en Catan", de: "Wahrscheinlichkeit ist irrelevant in Catan", nl: "Waarschijnlijkheid is irrelevant in Catan" }
        ],
        correct: 0,
        explanation: {
          en: "Over a typical 60-90 roll game, the law of large numbers ensures dice results compress toward theoretical probabilities. This means early-game 'cold' numbers (6/8 that haven't hit) become increasingly likely to hit in late-game, while 'hot' numbers regress to mean. Sophisticated players adjust settlement valuations based on current roll deficits.",
          es: "Durante un juego típico de 60-90 tiradas, la ley de grandes números asegura que los resultados de dados se compriman hacia probabilidades teóricas. Esto significa que los números 'fríos' de juego temprano (6/8 que no han salido) se vuelven cada vez más probables de salir en el juego tardío, mientras que los números 'calientes' regresan a la media. Los jugadores sofisticados ajustan las valoraciones de asentamiento basándose en déficits de tiradas actuales.",
          de: "Über ein typisches 60-90-Wurf-Spiel stellt das Gesetz großer Zahlen sicher, dass Würfelergebnisse sich zu theoretischen Wahrscheinlichkeiten komprimieren. Dies bedeutet, dass frühspielige 'kalte' Zahlen (6/8, die nicht getroffen wurden) im Spätspiel zunehmend wahrscheinlich werden, während 'heiße' Zahlen zum Mittelwert zurückkehren. Fortgeschrittene Spieler passen Siedlungsbewertungen basierend auf aktuellen Wurf-Defiziten an.",
          nl: "Over een typisch 60-90 worp spel zorgt de wet van grote getallen ervoor dat dobbelsteenresultaten comprimeren naar theoretische waarschijnlijkheden. Dit betekent dat vroeg-spel 'koude' nummers (6/8 die niet gevallen zijn) steeds waarschijnlijker worden om in laat-spel te vallen, terwijl 'hete' nummers regresseren naar gemiddelde. Geavanceerde spelers passen nederzettingswaarderingen aan gebaseerd op huidige worp tekorten."
        }
      },
      {
        question: {
          en: "What is the 'settlement adjacency penalty' in optimal placement?",
          es: "¿Qué es la 'penalización de adyacencia de asentamiento' en la colocación óptima?",
          de: "Was ist die 'Siedlungs-Adjacenz-Strafe' bei optimaler Platzierung?",
          nl: "Wat is de 'nederzetting nabijheid boete' in optimale plaatsing?"
        },
        options: [
          { en: "Reduce settlement value by 20-30% if adjacent to your own settlements on same hex", es: "Reducir el valor del asentamiento en 20-30% si está adyacente a tus propios asentamientos en el mismo hexágono", de: "Siedlungswert um 20-30% reduzieren wenn benachbart zu eigenen Siedlungen auf gleichem Hex", nl: "Verminder nederzettingswaarde met 20-30% als aangrenzend aan je eigen nederzettingen op dezelfde hex" },
          { en: "Always place settlements adjacent for efficiency", es: "Siempre colocar asentamientos adyacentes para eficiencia", de: "Siedlungen immer benachbart für Effizienz platzieren", nl: "Altijd aangrenzende nederzettingen plaatsen voor efficiëntie" },
          { en: "Adjacency provides bonuses not penalties", es: "La adyacencia proporciona bonificaciones no penalizaciones", de: "Adjacenz bietet Boni nicht Strafen", nl: "Nabijheid biedt bonussen niet boetes" },
          { en: "Placement location is irrelevant", es: "La ubicación de colocación es irrelevante", de: "Platzierungsstandort ist irrelevant", nl: "Plaatsingslocatie is irrelevant" }
        ],
        correct: 0,
        explanation: {
          en: "When two of your settlements share the same hex, you're competing with yourself for that resource - when the number rolls, you get 2 of that resource but blocked from receiving others. This 'overlap penalty' reduces effective pip value by 20-30% compared to diverse placement where each settlement touches unique hexes, maximizing resource variety and production spread.",
          es: "Cuando dos de tus asentamientos comparten el mismo hexágono, estás compitiendo contigo mismo por ese recurso - cuando el número sale, obtienes 2 de ese recurso pero bloqueado de recibir otros. Esta 'penalización de superposición' reduce el valor pip efectivo en 20-30% en comparación con la colocación diversa donde cada asentamiento toca hexágonos únicos, maximizando la variedad de recursos y la distribución de producción.",
          de: "Wenn zwei Ihrer Siedlungen dasselbe Hex teilen, konkurrieren Sie mit sich selbst um diese Ressource - wenn die Zahl gewürfelt wird, erhalten Sie 2 dieser Ressource, sind aber blockiert, andere zu erhalten. Diese 'Überlappungsstrafe' reduziert den effektiven Pip-Wert um 20-30% im Vergleich zu diverser Platzierung, wo jede Siedlung einzigartige Hexe berührt, wodurch Ressourcenvielfalt und Produktionsverteilung maximiert werden.",
          nl: "Wanneer twee van je nederzettingen dezelfde hex delen, concurreer je met jezelf voor die bron - wanneer het nummer valt, krijg je 2 van die bron maar geblokkeerd van het ontvangen van anderen. Deze 'overlap boete' vermindert effectieve pip waarde met 20-30% vergeleken met diverse plaatsing waar elke nederzetting unieke hexen raakt, wat bronvariëteit en productieverspreiding maximaliseert."
        }
      },
      {
        question: {
          en: "What is the 'critical mass threshold' for city-first strategy?",
          es: "¿Qué es el 'umbral de masa crítica' para la estrategia de ciudad primero?",
          de: "Was ist die 'kritische Masse-Schwelle' für die Stadt-zuerst-Strategie?",
          nl: "Wat is de 'kritieke massa drempel' voor stad-eerst strategie?"
        },
        options: [
          { en: "Need 14+ wheat/ore combined pips across starting settlements", es: "Necesitar 14+ pips combinados de trigo/mineral en asentamientos iniciales", de: "14+ kombinierte Weizen/Erz-Pips über Startsiedlungen benötigen", nl: "Heb 14+ gecombineerde tarwe/erts pips nodig over start nederzettingen" },
          { en: "Always rush cities with any production", es: "Siempre apresurarse a ciudades con cualquier producción", de: "Immer mit jeder Produktion zu Städten eilen", nl: "Altijd haasten naar steden met elke productie" },
          { en: "Never build cities before turn 50", es: "Nunca construir ciudades antes del turno 50", de: "Nie Städte vor Zug 50 bauen", nl: "Nooit steden bouwen voor beurt 50" },
          { en: "City strategy requires no minimum production", es: "La estrategia de ciudad no requiere producción mínima", de: "Stadt-Strategie erfordert keine Mindestproduktion", nl: "Stadsstrategie vereist geen minimum productie" }
        ],
        correct: 0,
        explanation: {
          en: "Statistical analysis shows city-first strategy becomes viable only when your initial settlements total 14+ combined pips on wheat and ore. Below this threshold, you cannot reliably accumulate the 3 ore + 2 wheat needed for cities without excessive banking/trading, making settlement expansion more efficient. The 14-pip threshold ensures cities every 4-6 turns.",
          es: "El análisis estadístico muestra que la estrategia de ciudad primero se vuelve viable solo cuando tus asentamientos iniciales totalizan 14+ pips combinados en trigo y mineral. Por debajo de este umbral, no puedes acumular de manera confiable los 3 minerales + 2 trigos necesarios para ciudades sin excesivo intercambio/banco, haciendo que la expansión de asentamientos sea más eficiente. El umbral de 14 pips asegura ciudades cada 4-6 turnos.",
          de: "Statistische Analyse zeigt, dass die Stadt-zuerst-Strategie nur dann praktikabel wird, wenn Ihre anfänglichen Siedlungen insgesamt 14+ kombinierte Pips auf Weizen und Erz haben. Unter dieser Schwelle können Sie nicht zuverlässig die 3 Erz + 2 Weizen für Städte ohne übermäßiges Banking/Handeln ansammeln, wodurch Siedlungserweiterung effizienter wird. Die 14-Pip-Schwelle gewährleistet Städte alle 4-6 Züge.",
          nl: "Statistische analyse toont dat stad-eerst strategie alleen levensvatbaar wordt wanneer je initiële nederzettingen in totaal 14+ gecombineerde pips op tarwe en erts hebben. Onder deze drempel kun je niet betrouwbaar de 3 erts + 2 tarwe verzamelen die nodig zijn voor steden zonder overmatig bankieren/handelen, waardoor nederzettingsuitbreiding efficiënter wordt. De 14-pip drempel verzekert steden elke 4-6 beurten."
        }
      },
      {
        question: {
          en: "What is the 'trade negotiation leverage point' in multiplayer dynamics?",
          es: "¿Qué es el 'punto de apalancamiento de negociación comercial' en dinámicas multijugador?",
          de: "Was ist der 'Handelsverhandlungs-Hebelpunkt' in Mehrspieler-Dynamiken?",
          nl: "Wat is het 'handelsonderhandeling hefboom punt' in multiplayer dynamica?"
        },
        options: [
          { en: "Offer trades to 3rd/4th place players at favorable ratios to build coalition against leader", es: "Ofrecer intercambios a jugadores de 3°/4° lugar en proporciones favorables para construir coalición contra el líder", de: "Geschäfte zu 3./4.-Platz-Spielern zu günstigen Verhältnissen anbieten um Koalition gegen Führenden aufzubauen", nl: "Bied handel aan 3e/4e plaats spelers op gunstige ratio's om coalitie tegen leider op te bouwen" },
          { en: "Never trade with anyone ever", es: "Nunca comerciar con nadie jamás", de: "Niemals mit jemandem handeln", nl: "Nooit met iemand handelen" },
          { en: "Only trade with current leader", es: "Solo comerciar con el líder actual", de: "Nur mit aktuellem Führenden handeln", nl: "Alleen handelen met huidige leider" },
          { en: "Trade randomly without consideration", es: "Comerciar aleatoriamente sin consideración", de: "Zufällig ohne Überlegung handeln", nl: "Willekeurig handelen zonder overweging" }
        ],
        correct: 0,
        explanation: {
          en: "When you're in 2nd place within 2-3 points of the leader, offering slightly favorable trades (1.5:1 ratios) to 3rd and 4th place players creates a coalition. They benefit from better-than-bank trades, you gain resources to challenge the leader, and together you prevent the leader from trading at all. This social engineering aspect often matters more than pure resource optimization.",
          es: "Cuando estás en 2° lugar a 2-3 puntos del líder, ofrecer intercambios ligeramente favorables (proporciones 1.5:1) a jugadores de 3° y 4° lugar crea una coalición. Ellos se benefician de intercambios mejores que el banco, tú ganas recursos para desafiar al líder, y juntos impiden que el líder comercie en absoluto. Este aspecto de ingeniería social a menudo importa más que la pura optimización de recursos.",
          de: "Wenn Sie auf dem 2. Platz innerhalb von 2-3 Punkten zum Führenden sind, schafft das Anbieten leicht günstiger Geschäfte (1,5:1-Verhältnisse) an 3.- und 4.-Platz-Spieler eine Koalition. Sie profitieren von besseren als Bank-Geschäften, Sie gewinnen Ressourcen, um den Führenden herauszufordern, und gemeinsam verhindern Sie, dass der Führende überhaupt handelt. Dieser Social-Engineering-Aspekt ist oft wichtiger als reine Ressourcenoptimierung.",
          nl: "Wanneer je op 2e plaats binnen 2-3 punten van de leider bent, creëert het aanbieden van licht gunstige handel (1.5:1 ratio's) aan 3e en 4e plaats spelers een coalitie. Zij profiteren van beter-dan-bank handel, jij krijgt bronnen om de leider uit te dagen, en samen voorkom je dat de leider überhaupt handelt. Dit sociale engineering aspect is vaak belangrijker dan pure bronoptimalisatie."
        }
      },
      {
        question: {
          en: "In tournament finals, what defines a 'tempo sacrifice' move?",
          es: "En finales de torneo, ¿qué define un movimiento de 'sacrificio de tempo'?",
          de: "Was definiert einen 'Tempo-Opfer'-Zug in Turnierfinalen?",
          nl: "Wat definieert een 'tempo offer' zet in toernooi finales?"
        },
        options: [
          { en: "Trading 2 development cards worth of resources to block opponent's critical settlement", es: "Intercambiar recursos por valor de 2 cartas de desarrollo para bloquear asentamiento crítico del oponente", de: "Ressourcen im Wert von 2 Entwicklungskarten tauschen um kritische Siedlung des Gegners zu blockieren", nl: "Bronnen ter waarde van 2 ontwikkelingskaarten ruilen om kritieke nederzetting van tegenstander te blokkeren" },
          { en: "Always maximize your own points only", es: "Siempre maximizar solo tus propios puntos", de: "Immer nur eigene Punkte maximieren", nl: "Altijd alleen je eigen punten maximaliseren" },
          { en: "Never make sacrificial moves", es: "Nunca hacer movimientos de sacrificio", de: "Nie Opferzüge machen", nl: "Nooit offer zetten maken" },
          { en: "Tempo sacrifices are always bad", es: "Los sacrificios de tempo siempre son malos", de: "Tempo-Opfer sind immer schlecht", nl: "Tempo offers zijn altijd slecht" }
        ],
        correct: 0,
        explanation: {
          en: "A tempo sacrifice involves spending resources inefficiently (like building a suboptimal settlement) purely to deny an opponent a critical position. While you lose 1-2 points of value, if it prevents the opponent from claiming a high-value spot or completing a game-winning combo, the relative point swing (you: -1, opponent: -3) yields net +2 advantage in competitive positioning.",
          es: "Un sacrificio de tempo implica gastar recursos de manera ineficiente (como construir un asentamiento subóptimo) puramente para negar a un oponente una posición crítica. Aunque pierdes 1-2 puntos de valor, si evita que el oponente reclame un lugar de alto valor o complete una combinación ganadora del juego, el cambio relativo de puntos (tú: -1, oponente: -3) produce una ventaja neta de +2 en posicionamiento competitivo.",
          de: "Ein Tempo-Opfer beinhaltet ineffizientes Ausgeben von Ressourcen (wie den Bau einer suboptimalen Siedlung) nur um einem Gegner eine kritische Position zu verweigern. Während man 1-2 Punkte Wert verliert, wenn es verhindert, dass der Gegner einen hochwertigen Platz beansprucht oder eine spielgewinnende Kombination vervollständigt, ergibt die relative Punktverschiebung (Sie: -1, Gegner: -3) einen Nettovorteil von +2 in der Wettbewerbspositionierung.",
          nl: "Een tempo offer houdt in dat bronnen inefficiënt worden besteed (zoals het bouwen van een suboptimale nederzetting) puur om een tegenstander een kritieke positie te ontzeggen. Hoewel je 1-2 punten waarde verliest, als het voorkomt dat de tegenstander een hoogwaardige plek claimt of een spelwinnende combo voltooit, levert de relatieve punten verschuiving (jij: -1, tegenstander: -3) netto +2 voordeel op in competitieve positionering."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level7;
  } else if (typeof window !== 'undefined') {
    window.level7 = level7;
  }
})();
