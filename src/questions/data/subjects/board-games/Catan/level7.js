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
      },
      {
        question: {
          en: "What is the 'robber rotation meta-game' in 4-player expert matches?",
          es: "¿Qué es el 'meta-juego de rotación de ladrones' en partidas expertas de 4 jugadores?",
          de: "Was ist das 'Räuber-Rotations-Meta-Spiel' in 4-Spieler-Expertenmatches?",
          nl: "Wat is het 'rover rotatie meta-spel' in 4-speler expert wedstrijden?"
        },
        options: [
          { en: "Establish unspoken pattern: each player robs next player clockwise to distribute pain equally", es: "Establecer patrón tácito: cada jugador roba al siguiente jugador en sentido horario para distribuir dolor equitativamente", de: "Unausgesprochenes Muster etablieren: jeder Spieler beraubt nächsten Spieler im Uhrzeigersinn um Schmerz gleichmäßig zu verteilen", nl: "Vestig onuitgesproken patroon: elke speler berooft volgende speler met de klok mee om pijn gelijk te verdelen" },
          { en: "Always rob the same player repeatedly", es: "Siempre robar al mismo jugador repetidamente", de: "Immer denselben Spieler wiederholt berauben", nl: "Altijd dezelfde speler herhaaldelijk beroven" },
          { en: "Place robber on desert always", es: "Colocar ladrón en desierto siempre", de: "Räuber immer auf Wüste platzieren", nl: "Plaats rover altijd op woestijn" },
          { en: "Robber placement should be random", es: "La colocación del ladrón debe ser aleatoria", de: "Räuberplatzierung sollte zufällig sein", nl: "Roverplaatsing moet willekeurig zijn" }
        ],
        correct: 0,
        explanation: {
          en: "In high-level 4-player games, an informal 'robber rotation' protocol often emerges where each player targets the next player clockwise. This creates game stability: if everyone follows the pattern, no single player gets repeatedly crushed. Breaking this protocol (targeting the leader instead) signals coalition formation and often draws retaliation from multiple players.",
          es: "En juegos de 4 jugadores de alto nivel, a menudo emerge un protocolo informal de 'rotación de ladrones' donde cada jugador apunta al siguiente jugador en sentido horario. Esto crea estabilidad en el juego: si todos siguen el patrón, ningún jugador es aplastado repetidamente. Romper este protocolo (apuntar al líder en su lugar) señala formación de coalición y a menudo atrae represalias de múltiples jugadores.",
          de: "In hochrangigen 4-Spieler-Spielen entsteht oft ein informelles 'Räuber-Rotations'-Protokoll, bei dem jeder Spieler den nächsten Spieler im Uhrzeigersinn anvisiert. Dies schafft Spielstabilität: Wenn alle dem Muster folgen, wird kein einzelner Spieler wiederholt zerstört. Das Brechen dieses Protokolls (stattdessen den Führenden anvisieren) signalisiert Koalitionsbildung und zieht oft Vergeltung von mehreren Spielern nach sich.",
          nl: "In hoogwaardig 4-speler spellen ontstaat vaak een informeel 'rover rotatie' protocol waarbij elke speler de volgende speler met de klok mee target. Dit creëert spelstabiliteit: als iedereen het patroon volgt, wordt geen enkele speler herhaaldelijk verplettered. Het breken van dit protocol (in plaats daarvan de leider targeten) signaleert coalitievorming en trekt vaak vergelding van meerdere spelers."
        }
      },
      {
        question: {
          en: "What is the 'resource production variance' mathematical principle?",
          es: "¿Qué es el principio matemático de 'varianza de producción de recursos'?",
          de: "Was ist das mathematische Prinzip der 'Ressourcenproduktions-Varianz'?",
          nl: "Wat is het wiskundige principe van 'bron productie variantie'?"
        },
        options: [
          { en: "Standard deviation increases with pip concentration - spread placements reduce volatility", es: "La desviación estándar aumenta con la concentración de pips - las colocaciones dispersas reducen la volatilidad", de: "Standardabweichung steigt mit Pip-Konzentration - verteilte Platzierungen reduzieren Volatilität", nl: "Standaardafwijking neemt toe met pip concentratie - gespreide plaatsingen verminderen volatiliteit" },
          { en: "All placement patterns have identical variance", es: "Todos los patrones de colocación tienen varianza idéntica", de: "Alle Platzierungsmuster haben identische Varianz", nl: "Alle plaatsingspatronen hebben identieke variantie" },
          { en: "Concentration always improves consistency", es: "La concentración siempre mejora la consistencia", de: "Konzentration verbessert immer Konsistenz", nl: "Concentratie verbetert altijd consistentie" },
          { en: "Variance is unmeasurable in Catan", es: "La varianza es imposible de medir en Catan", de: "Varianz ist in Catan unmessbar", nl: "Variantie is onmeetbaar in Catan" }
        ],
        correct: 0,
        explanation: {
          en: "Mathematical modeling shows that placing all settlements on 6s and 8s (high pip concentration) creates high-variance production: huge turns when they hit, nothing when they don't. Spreading across 4-5-6-8-9-10 (low concentration) yields lower variance and more consistent income. The standard deviation formula: σ = √[Σ(xi - μ)²/n] quantifies this - concentrated placement has 40-60% higher σ.",
          es: "El modelado matemático muestra que colocar todos los asentamientos en 6s y 8s (alta concentración de pips) crea producción de alta varianza: turnos enormes cuando salen, nada cuando no salen. Distribuir en 4-5-6-8-9-10 (baja concentración) produce menor varianza e ingresos más consistentes. La fórmula de desviación estándar: σ = √[Σ(xi - μ)²/n] cuantifica esto - la colocación concentrada tiene 40-60% mayor σ.",
          de: "Mathematische Modellierung zeigt, dass das Platzieren aller Siedlungen auf 6en und 8en (hohe Pip-Konzentration) hochvariante Produktion schafft: riesige Züge wenn sie treffen, nichts wenn nicht. Verteilung über 4-5-6-8-9-10 (niedrige Konzentration) erzeugt niedrigere Varianz und konsistenteres Einkommen. Die Standardabweichungsformel: σ = √[Σ(xi - μ)²/n] quantifiziert dies - konzentrierte Platzierung hat 40-60% höheres σ.",
          nl: "Wiskundige modellering toont dat het plaatsen van alle nederzettingen op 6'en en 8'en (hoge pip concentratie) hoge-variantie productie creëert: enorme beurten wanneer ze vallen, niets wanneer niet. Spreiden over 4-5-6-8-9-10 (lage concentratie) levert lagere variantie en consistenter inkomen op. De standaardafwijking formule: σ = √[Σ(xi - μ)²/n] kwantificeert dit - geconcentreerde plaatsing heeft 40-60% hogere σ."
        }
      },
      {
        question: {
          en: "In endgame with 9 points, what is the 'victory point concealment strategy'?",
          es: "En el final del juego con 9 puntos, ¿qué es la 'estrategia de ocultación de puntos de victoria'?",
          de: "Was ist im Endspiel mit 9 Punkten die 'Siegpunkt-Verheimlichungs-Strategie'?",
          nl: "Wat is in eindspel met 9 punten de 'overwinningspunt verhulling strategie'?"
        },
        options: [
          { en: "Display 7-8 visible points while holding 2 hidden VP cards to win surprise next turn", es: "Mostrar 7-8 puntos visibles mientras se mantienen 2 cartas de PV ocultas para ganar por sorpresa el próximo turno", de: "7-8 sichtbare Punkte zeigen während 2 versteckte SP-Karten gehalten werden um nächsten Zug überraschend zu gewinnen", nl: "Toon 7-8 zichtbare punten terwijl je 2 verborgen OP kaarten vasthoudt om volgende beurt verrassend te winnen" },
          { en: "Always reveal all victory points immediately", es: "Siempre revelar todos los puntos de victoria inmediatamente", de: "Alle Siegpunkte immer sofort offenbaren", nl: "Toon altijd alle overwinningspunten direct" },
          { en: "Build only visible point structures", es: "Construir solo estructuras de puntos visibles", de: "Nur sichtbare Punktstrukturen bauen", nl: "Bouw alleen zichtbare punt structuren" },
          { en: "Never buy development cards in endgame", es: "Nunca comprar cartas de desarrollo en el final del juego", de: "Nie Entwicklungskarten im Endspiel kaufen", nl: "Koop nooit ontwikkelingskaarten in eindspel" }
        ],
        correct: 0,
        explanation: {
          en: "At 9 points (7-8 visible + 2 hidden VPs), opponents often assume you're at 7-8 and don't form anti-you coalitions. This creates 1-2 turns of 'free' building where you can accumulate the final resource combo (settlement, city, or Largest Army) for surprise victory. Revealing your true standing at 9 would trigger immediate universal blocking. The deception window is critical.",
          es: "Con 9 puntos (7-8 visibles + 2 PVs ocultos), los oponentes a menudo asumen que estás en 7-8 y no forman coaliciones anti-ti. Esto crea 1-2 turnos de construcción 'libre' donde puedes acumular la combinación de recursos final (asentamiento, ciudad, o Ejército Más Grande) para victoria sorpresa. Revelar tu posición real en 9 desencadenaría bloqueo universal inmediato. La ventana de engaño es crítica.",
          de: "Bei 9 Punkten (7-8 sichtbar + 2 versteckte SPs) nehmen Gegner oft an, Sie seien bei 7-8 und bilden keine Anti-Sie-Koalitionen. Dies schafft 1-2 Züge 'freien' Bauens, wo Sie die finale Ressourcen-Combo (Siedlung, Stadt oder Größte Armee) für Überraschungssieg ansammeln können. Das Offenbaren Ihrer wahren Stellung bei 9 würde sofortige universelle Blockierung auslösen. Das Täuschungsfenster ist kritisch.",
          nl: "Bij 9 punten (7-8 zichtbaar + 2 verborgen OPs) nemen tegenstanders vaak aan dat je op 7-8 staat en vormen geen anti-jou coalities. Dit creëert 1-2 beurten 'vrij' bouwen waar je de finale bron combo (nederzetting, stad, of Grootste Leger) kunt verzamelen voor verrassingsoverwinning. Je ware positie bij 9 onthullen zou directe universele blokkering triggeren. Het misleidingsvenster is kritiek."
        }
      },
      {
        question: {
          en: "What is the 'harbor control valuation' in competitive analysis?",
          es: "¿Qué es la 'valoración de control de puertos' en análisis competitivo?",
          de: "Was ist die 'Hafen-Kontroll-Bewertung' in Wettbewerbsanalyse?",
          nl: "Wat is de 'haven controle waardering' in competitieve analyse?"
        },
        options: [
          { en: "2:1 harbor worth 3-4 extra pips of production value over 60-turn game", es: "Puerto 2:1 vale 3-4 pips extra de valor de producción durante juego de 60 turnos", de: "2:1-Hafen wert 3-4 Extra-Pips Produktionswert über 60-Züge-Spiel", nl: "2:1 haven waard 3-4 extra pips productiewaarde over 60-beurten spel" },
          { en: "Harbors provide no measurable advantage", es: "Los puertos no proporcionan ventaja medible", de: "Häfen bieten keinen messbaren Vorteil", nl: "Havens bieden geen meetbaar voordeel" },
          { en: "All harbors worth exactly 1 pip", es: "Todos los puertos valen exactamente 1 pip", de: "Alle Häfen wert genau 1 Pip", nl: "Alle havens waard precies 1 pip" },
          { en: "Harbor value is infinite", es: "El valor del puerto es infinito", de: "Hafenwert ist unendlich", nl: "Haven waarde is oneindig" }
        ],
        correct: 0,
        explanation: {
          en: "Computational simulations show that over a typical 60-turn game, a 2:1 specialized harbor effectively adds 3-4 pips worth of production flexibility. This comes from: (a) converting excess resources at 2:1 vs 4:1 saves ~15 resources/game, and (b) consistent 2:1 access enables more complex building sequences. Thus a 9-pip settlement with 2:1 harbor performs like a 12-13 pip settlement without harbor.",
          es: "Las simulaciones computacionales muestran que durante un juego típico de 60 turnos, un puerto especializado 2:1 efectivamente agrega 3-4 pips de valor de flexibilidad de producción. Esto proviene de: (a) convertir recursos excedentes a 2:1 vs 4:1 ahorra ~15 recursos/juego, y (b) el acceso consistente 2:1 permite secuencias de construcción más complejas. Así, un asentamiento de 9 pips con puerto 2:1 funciona como un asentamiento de 12-13 pips sin puerto.",
          de: "Computersimulationen zeigen, dass über ein typisches 60-Züge-Spiel ein spezialisierter 2:1-Hafen effektiv 3-4 Pips Produktionsflexibilitätswert hinzufügt. Dies kommt von: (a) Konversion überschüssiger Ressourcen bei 2:1 vs 4:1 spart ~15 Ressourcen/Spiel, und (b) konsistenter 2:1-Zugang ermöglicht komplexere Bausequenzen. Somit funktioniert eine 9-Pip-Siedlung mit 2:1-Hafen wie eine 12-13-Pip-Siedlung ohne Hafen.",
          nl: "Computationele simulaties tonen dat over een typisch 60-beurten spel een gespecialiseerde 2:1 haven effectief 3-4 pips productie flexibiliteit waarde toevoegt. Dit komt van: (a) overtollige bronnen converteren op 2:1 vs 4:1 bespaart ~15 bronnen/spel, en (b) consistente 2:1 toegang maakt complexere bouwsequenties mogelijk. Dus een 9-pip nederzetting met 2:1 haven presteert als een 12-13 pip nederzetting zonder haven."
        }
      },
      {
        question: {
          en: "What is the 'development card timing paradox' in tournament play?",
          es: "¿Qué es la 'paradoja de tiempo de carta de desarrollo' en juego de torneo?",
          de: "Was ist das 'Entwicklungskarten-Timing-Paradoxon' im Turnierspiel?",
          nl: "Wat is de 'ontwikkelingskaart timing paradox' in toernooispel?"
        },
        options: [
          { en: "Buying cards early maximizes total cards but late buying maximizes card quality from depleted deck", es: "Comprar cartas temprano maximiza cartas totales pero comprar tarde maximiza calidad de cartas del mazo agotado", de: "Früher Kartenkauf maximiert Gesamtkarten aber später Kauf maximiert Kartenqualität aus erschöpftem Deck", nl: "Vroeg kaarten kopen maximaliseert totale kaarten maar laat kopen maximaliseert kaart kwaliteit uit uitgeput deck" },
          { en: "Always buy development cards turn 1", es: "Siempre comprar cartas de desarrollo en turno 1", de: "Immer Entwicklungskarten in Zug 1 kaufen", nl: "Altijd ontwikkelingskaarten kopen beurt 1" },
          { en: "Only buy cards in final 5 turns", es: "Solo comprar cartas en los últimos 5 turnos", de: "Nur Karten in letzten 5 Zügen kaufen", nl: "Alleen kaarten kopen in laatste 5 beurten" },
          { en: "Card timing makes no difference", es: "El tiempo de las cartas no hace diferencia", de: "Karten-Timing macht keinen Unterschied", nl: "Kaart timing maakt geen verschil" }
        ],
        correct: 0,
        explanation: {
          en: "Early card purchases (turns 5-15) maximize total cards drawn and Largest Army potential, but include road building/knight cards of declining value. Late purchases (turns 25-35) draw from depleted deck with higher VP concentration (14 knights already drawn = more VPs remaining). Expert players balance this: buy 3-5 cards early for army/combo potential, then switch to late buying for VP hunting when 12+ cards gone.",
          es: "Las compras de cartas tempranas (turnos 5-15) maximizan las cartas totales robadas y el potencial del Ejército Más Grande, pero incluyen cartas de construcción de carreteras/caballeros de valor decreciente. Las compras tardías (turnos 25-35) roban del mazo agotado con mayor concentración de PV (14 caballeros ya robados = más PVs restantes). Los jugadores expertos equilibran esto: compran 3-5 cartas temprano para potencial de ejército/combo, luego cambian a compras tardías para cazar PVs cuando se han ido 12+ cartas.",
          de: "Frühe Kartenkäufe (Züge 5-15) maximieren Gesamtkarten gezogen und Größtes-Armee-Potenzial, aber enthalten Straßenbau/Ritter-Karten von sinkendem Wert. Späte Käufe (Züge 25-35) ziehen aus erschöpftem Deck mit höherer SP-Konzentration (14 Ritter bereits gezogen = mehr SPs übrig). Experten balancieren dies: 3-5 Karten früh für Armee/Combo-Potenzial kaufen, dann zu spätem Kauf für SP-Jagd wechseln wenn 12+ Karten weg sind.",
          nl: "Vroege kaartaankopen (beurten 5-15) maximaliseren totale getrokken kaarten en Grootste Leger potentieel, maar bevatten wegbouw/ridder kaarten van afnemende waarde. Late aankopen (beurten 25-35) trekken uit uitgeput deck met hogere OP concentratie (14 ridders al getrokken = meer OPs over). Expert spelers balanceren dit: koop 3-5 kaarten vroeg voor leger/combo potentieel, schakel dan over naar laat kopen voor OP jacht wanneer 12+ kaarten weg zijn."
        }
      },
      {
        question: {
          en: "What is the 'resource accumulation signaling' in high-level play?",
          es: "¿Qué es la 'señalización de acumulación de recursos' en juego de alto nivel?",
          de: "Was ist die 'Ressourcen-Akkumulations-Signalisierung' im Hochleistungsspiel?",
          nl: "Wat is de 'bron verzameling signalering' in hoogwaardig spel?"
        },
        options: [
          { en: "Opponents tracking your 7+ cards reveals your intended building project and invites robber", es: "Oponentes rastreando tus 7+ cartas revela tu proyecto de construcción previsto e invita al ladrón", de: "Gegner die Ihre 7+ Karten verfolgen enthüllen Ihr beabsichtigtes Bauprojekt und laden Räuber ein", nl: "Tegenstanders die je 7+ kaarten volgen onthullen je voorgenomen bouwproject en nodigen rover uit" },
          { en: "Card count provides no information", es: "El conteo de cartas no proporciona información", de: "Kartenzählung liefert keine Information", nl: "Kaart telling biedt geen informatie" },
          { en: "Always accumulate 10+ cards safely", es: "Siempre acumular 10+ cartas de forma segura", de: "Immer 10+ Karten sicher ansammeln", nl: "Altijd 10+ kaarten veilig verzamelen" },
          { en: "Resource count should be random", es: "El conteo de recursos debe ser aleatorio", de: "Ressourcenzählung sollte zufällig sein", nl: "Bron telling moet willekeurig zijn" }
        ],
        correct: 0,
        explanation: {
          en: "When you hold 7+ cards for multiple turns, attentive opponents deduce your building target: accumulating wheat/ore signals city building, lumber/brick signals settlement expansion. This information makes you the prime robber target and invites strategic trade refusals. Expert players either: (a) build immediately at 5-6 cards to avoid signaling, or (b) deliberately signal false intentions while holding knight cards for protection.",
          es: "Cuando mantienes 7+ cartas durante múltiples turnos, los oponentes atentos deducen tu objetivo de construcción: acumular trigo/mineral señala construcción de ciudad, madera/ladrillo señala expansión de asentamiento. Esta información te convierte en el objetivo principal del ladrón e invita a rechazos comerciales estratégicos. Los jugadores expertos: (a) construyen inmediatamente con 5-6 cartas para evitar señalización, o (b) deliberadamente señalan intenciones falsas mientras mantienen cartas de caballero para protección.",
          de: "Wenn man 7+ Karten über mehrere Züge hält, schließen aufmerksame Gegner auf Ihr Bauziel: Ansammlung von Weizen/Erz signalisiert Stadtbau, Holz/Ziegel signalisiert Siedlungserweiterung. Diese Information macht Sie zum Haupträuberziel und lädt zu strategischen Handelsverweigerungen ein. Experten entweder: (a) bauen sofort bei 5-6 Karten um Signalisierung zu vermeiden, oder (b) signalisieren absichtlich falsche Absichten während Ritterkarten zum Schutz gehalten werden.",
          nl: "Wanneer je 7+ kaarten vasthoudt gedurende meerdere beurten, leiden oplettende tegenstanders je bouwdoel af: tarwe/erts verzamelen signaleert stadenbouw, hout/baksteen signaleert nederzetting expansie. Deze informatie maakt je het primaire rover doelwit en nodigt strategische handelsweigeringen uit. Expert spelers ofwel: (a) bouwen direct bij 5-6 kaarten om signalering te vermijden, of (b) signaleren opzettelijk valse intenties terwijl ridderkaarten voor bescherming worden vastgehouden."
        }
      },
      {
        question: {
          en: "In Cities & Knights, what is the 'commodity monopoly' endgame strategy?",
          es: "En Ciudades & Caballeros, ¿qué es la estrategia de final de juego de 'monopolio de productos'?",
          de: "Was ist in Städte & Ritter die 'Rohstoffmonopol'-Endspielstrategie?",
          nl: "Wat is in Steden & Ridders de 'grondstof monopolie' eindspel strategie?"
        },
        options: [
          { en: "Control 3+ cities producing same commodity to dominate metropolis and progress card access", es: "Controlar 3+ ciudades produciendo el mismo producto para dominar metrópolis y acceso a cartas de progreso", de: "3+ Städte kontrollieren die denselben Rohstoff produzieren um Metropole und Fortschrittskartenzugang zu dominieren", nl: "Controleer 3+ steden die dezelfde grondstof produceren om metropool en voortgangskaart toegang te domineren" },
          { en: "Build cities on random commodities", es: "Construir ciudades en productos aleatorios", de: "Städte auf zufällige Rohstoffe bauen", nl: "Bouw steden op willekeurige grondstoffen" },
          { en: "Never focus on single commodity type", es: "Nunca enfocarse en un solo tipo de producto", de: "Nie auf einzelnen Rohstofftyp fokussieren", nl: "Focus nooit op enkel grondstof type" },
          { en: "Commodities have no strategic value", es: "Los productos no tienen valor estratégico", de: "Rohstoffe haben keinen strategischen Wert", nl: "Grondstoffen hebben geen strategische waarde" }
        ],
        correct: 0,
        explanation: {
          en: "In C&K, building 3-4 cities that produce the same commodity (paper, cloth, or coin) creates a powerful flywheel: you generate that commodity 3x faster than opponents, enabling rapid city improvement levels, which secures the corresponding metropolis (2 points), while progress cards from that track (like Alchemist or Trade Monopoly) provide additional advantages. Opponents cannot compete in that track.",
          es: "En C&K, construir 3-4 ciudades que produzcan el mismo producto (papel, tela o moneda) crea un poderoso volante: generas ese producto 3 veces más rápido que los oponentes, permitiendo niveles rápidos de mejora de ciudad, lo que asegura la metrópolis correspondiente (2 puntos), mientras que las cartas de progreso de esa pista (como Alquimista o Monopolio Comercial) proporcionan ventajas adicionales. Los oponentes no pueden competir en esa pista.",
          de: "In S&R schafft der Bau von 3-4 Städten, die denselben Rohstoff produzieren (Papier, Tuch oder Münze), ein mächtiges Schwungrad: Sie generieren diesen Rohstoff 3x schneller als Gegner, was schnelle Stadt-Verbesserungsstufen ermöglicht, die die entsprechende Metropole (2 Punkte) sichern, während Fortschrittskarten von dieser Bahn (wie Alchemist oder Handelsmonopol) zusätzliche Vorteile bieten. Gegner können in dieser Bahn nicht konkurrieren.",
          nl: "In S&R creëert het bouwen van 3-4 steden die dezelfde grondstof produceren (papier, doek of munt) een krachtig vliegwiel: je genereert die grondstof 3x sneller dan tegenstanders, wat snelle stad verbeteringsniveaus mogelijk maakt, wat de overeenkomstige metropool (2 punten) veiligstelt, terwijl voortgangskaarten van die track (zoals Alchemist of Handelsmonopolie) extra voordelen bieden. Tegenstanders kunnen niet concurreren in die track."
        }
      },
      {
        question: {
          en: "What is the 'perfect information trading' technique in expert games?",
          es: "¿Qué es la técnica de 'comercio de información perfecta' en juegos expertos?",
          de: "Was ist die 'Perfekte-Informations-Handels'-Technik in Expertenspielen?",
          nl: "Wat is de 'perfecte informatie handel' techniek in expert spellen?"
        },
        options: [
          { en: "Announce exact cards when proposing trades to extract opponent hand information from responses", es: "Anunciar cartas exactas al proponer intercambios para extraer información de la mano del oponente de las respuestas", de: "Exakte Karten beim Vorschlagen von Geschäften ankündigen um Gegnerhand-Information aus Antworten zu extrahieren", nl: "Kondig exacte kaarten aan bij het voorstellen van handel om tegenstander hand informatie uit reacties te halen" },
          { en: "Never reveal specific card types in trades", es: "Nunca revelar tipos específicos de cartas en intercambios", de: "Nie spezifische Kartentypen in Geschäften offenbaren", nl: "Onthul nooit specifieke kaarttypen in handel" },
          { en: "Make all trades secretly", es: "Hacer todos los intercambios en secreto", de: "Alle Geschäfte heimlich machen", nl: "Maak alle handel in het geheim" },
          { en: "Trading provides no information advantage", es: "El comercio no proporciona ventaja de información", de: "Handel bietet keinen Informationsvorteil", nl: "Handel biedt geen informatievoordeel" }
        ],
        correct: 0,
        explanation: {
          en: "When proposing 'I'll trade 1 sheep for 1 ore' publicly, opponent responses reveal information: immediate acceptance suggests ore surplus, hesitation suggests scarcity, counter-offers reveal their priorities. By systematically proposing specific trades (even ones you don't ultimately need), you map opponent hands with high accuracy. This information asymmetry enables perfect monopoly targeting and robber placement in critical turns.",
          es: "Al proponer 'intercambiaré 1 oveja por 1 mineral' públicamente, las respuestas de los oponentes revelan información: la aceptación inmediata sugiere excedente de mineral, la vacilación sugiere escasez, las contraofertas revelan sus prioridades. Al proponer sistemáticamente intercambios específicos (incluso los que finalmente no necesitas), mapeas las manos de los oponentes con alta precisión. Esta asimetría de información permite la selección perfecta de monopolios y la colocación de ladrones en turnos críticos.",
          de: "Beim öffentlichen Vorschlagen von 'Ich tausche 1 Schaf gegen 1 Erz' enthüllen Gegnerantworten Information: sofortige Akzeptanz deutet auf Erzüberschuss hin, Zögern deutet auf Knappheit hin, Gegenangebote enthüllen ihre Prioritäten. Durch systematisches Vorschlagen spezifischer Geschäfte (auch solche, die man letztlich nicht braucht), kartiert man Gegnerhände mit hoher Genauigkeit. Diese Informationsasymmetrie ermöglicht perfekte Monopol-Zielauswahl und Räuberplatzierung in kritischen Zügen.",
          nl: "Bij het publiekelijk voorstellen van 'Ik ruil 1 schaap voor 1 erts' onthullen tegenstander reacties informatie: directe acceptatie suggereert erts surplus, aarzeling suggereert schaarste, tegenaanbiedingen onthullen hun prioriteiten. Door systematisch specifieke handel voor te stellen (zelfs die je uiteindelijk niet nodig hebt), breng je tegenstander handen in kaart met hoge nauwkeurigheid. Deze informatie asymmetrie maakt perfecte monopolie targeting en rover plaatsing mogelijk in kritieke beurten."
        }
      },
      {
        question: {
          en: "What is the 'city upgrade cascade' timing in mid-game?",
          es: "¿Qué es el tiempo de 'cascada de mejora de ciudad' en el juego medio?",
          de: "Was ist das 'Stadt-Upgrade-Kaskaden'-Timing im Mittelspiel?",
          nl: "Wat is de 'stadsupgrade cascade' timing in middenspel?"
        },
        options: [
          { en: "Convert all 4-5 settlements to cities in rapid succession (3-5 turns) before opponents respond", es: "Convertir todos los 4-5 asentamientos a ciudades en rápida sucesión (3-5 turnos) antes de que los oponentes respondan", de: "Alle 4-5 Siedlungen in schneller Folge (3-5 Züge) zu Städten konvertieren bevor Gegner reagieren", nl: "Converteer alle 4-5 nederzettingen naar steden in snelle opeenvolging (3-5 beurten) voordat tegenstanders reageren" },
          { en: "Build cities one at a time slowly over 20 turns", es: "Construir ciudades una a la vez lentamente durante 20 turnos", de: "Städte einzeln langsam über 20 Züge bauen", nl: "Bouw steden één tegelijk langzaam over 20 beurten" },
          { en: "Never convert more than 2 settlements to cities", es: "Nunca convertir más de 2 asentamientos a ciudades", de: "Nie mehr als 2 Siedlungen zu Städten konvertieren", nl: "Converteer nooit meer dan 2 nederzettingen naar steden" },
          { en: "Wait until turn 50 for city upgrades", es: "Esperar hasta el turno 50 para mejoras de ciudad", de: "Bis Zug 50 für Stadt-Upgrades warten", nl: "Wacht tot beurt 50 voor stadsupgrades" }
        ],
        correct: 0,
        explanation: {
          en: "Once you achieve consistent wheat/ore production (14+ combined pips), the optimal strategy is rapidly converting 4-5 settlements to cities in 3-5 consecutive turns. This 'city cascade' creates a compounding advantage: first city doubles production → faster second city → exponentially faster subsequent cities. Waiting creates vulnerability: opponents block wheat/ore access via robber or embargo, preventing the cascade entirely.",
          es: "Una vez que logras producción consistente de trigo/mineral (14+ pips combinados), la estrategia óptima es convertir rápidamente 4-5 asentamientos a ciudades en 3-5 turnos consecutivos. Esta 'cascada de ciudades' crea una ventaja acumulativa: la primera ciudad duplica la producción → segunda ciudad más rápida → ciudades subsiguientes exponencialmente más rápidas. Esperar crea vulnerabilidad: los oponentes bloquean el acceso a trigo/mineral mediante ladrón o embargo, previniendo la cascada por completo.",
          de: "Sobald man konsistente Weizen/Erz-Produktion erreicht (14+ kombinierte Pips), ist die optimale Strategie, schnell 4-5 Siedlungen in 3-5 aufeinanderfolgenden Zügen zu Städten zu konvertieren. Diese 'Stadt-Kaskade' schafft einen kumulierenden Vorteil: erste Stadt verdoppelt Produktion → schnellere zweite Stadt → exponentiell schnellere nachfolgende Städte. Warten schafft Verwundbarkeit: Gegner blockieren Weizen/Erz-Zugang via Räuber oder Embargo, wodurch die Kaskade vollständig verhindert wird.",
          nl: "Zodra je consistente tarwe/erts productie bereikt (14+ gecombineerde pips), is de optimale strategie snel 4-5 nederzettingen converteren naar steden in 3-5 opeenvolgende beurten. Deze 'steden cascade' creëert een samengesteld voordeel: eerste stad verdubbelt productie → snellere tweede stad → exponentieel snellere volgende steden. Wachten creëert kwetsbaarheid: tegenstanders blokkeren tarwe/erts toegang via rover of embargo, waardoor de cascade volledig wordt voorkomen."
        }
      },
      {
        question: {
          en: "What is the 'statistical arbitrage' principle in settlement valuation?",
          es: "¿Qué es el principio de 'arbitraje estadístico' en la valoración de asentamientos?",
          de: "Was ist das 'Statistische-Arbitrage'-Prinzip bei der Siedlungsbewertung?",
          nl: "Wat is het 'statistische arbitrage' principe in nederzetting waardering?"
        },
        options: [
          { en: "Exploit opponent miscalculations by claiming 'underrated' spots they ignore (e.g., 5-9-10 combos)", es: "Explotar errores de cálculo de oponentes reclamando lugares 'subvalorados' que ignoran (ej., combos 5-9-10)", de: "Gegner-Fehlberechnungen ausnutzen indem 'unterbewertete' Plätze beansprucht werden die sie ignorieren (z.B. 5-9-10-Kombos)", nl: "Exploiteer tegenstander misrekeningen door 'ondergewaardeerde' plekken te claimen die ze negeren (bijv. 5-9-10 combo's)" },
          { en: "All players value settlements identically", es: "Todos los jugadores valoran los asentamientos idénticamente", de: "Alle Spieler bewerten Siedlungen identisch", nl: "Alle spelers waarderen nederzettingen identiek" },
          { en: "Only claim obvious 6-8 spots", es: "Solo reclamar lugares obvios de 6-8", de: "Nur offensichtliche 6-8-Plätze beanspruchen", nl: "Claim alleen voor de hand liggende 6-8 plekken" },
          { en: "Settlement location is irrelevant", es: "La ubicación del asentamiento es irrelevante", de: "Siedlungsstandort ist irrelevant", nl: "Nederzettingslocatie is irrelevant" }
        ],
        correct: 0,
        explanation: {
          en: "Many players overvalue 6-8 intersections and undervalue mathematically equivalent alternatives. For example, a 5-9-10 intersection (11 pips total) is often ignored in favor of contested 6-8-3 spots (also 11 pips). The 5-9-10 provides similar expected production but without competition. Expert players identify these 'arbitrage opportunities' - mathematically strong positions that opponents systematically undervalue - gaining equivalent production without conflict.",
          es: "Muchos jugadores sobrevaloran las intersecciones 6-8 y subvaloran alternativas matemáticamente equivalentes. Por ejemplo, una intersección 5-9-10 (11 pips totales) a menudo se ignora en favor de lugares 6-8-3 disputados (también 11 pips). El 5-9-10 proporciona producción esperada similar pero sin competencia. Los jugadores expertos identifican estas 'oportunidades de arbitraje' - posiciones matemáticamente fuertes que los oponentes sistemáticamente subvaloran - obteniendo producción equivalente sin conflicto.",
          de: "Viele Spieler überbewerten 6-8-Schnittpunkte und unterbewerten mathematisch gleichwertige Alternativen. Zum Beispiel wird ein 5-9-10-Schnittpunkt (11 Pips gesamt) oft zugunsten umkämpfter 6-8-3-Plätze (auch 11 Pips) ignoriert. Der 5-9-10 bietet ähnliche erwartete Produktion aber ohne Wettbewerb. Experten identifizieren diese 'Arbitrage-Möglichkeiten' - mathematisch starke Positionen die Gegner systematisch unterbewerten - und gewinnen gleichwertige Produktion ohne Konflikt.",
          nl: "Veel spelers overwaarderen 6-8 kruispunten en onderwaarderen wiskundig equivalente alternatieven. Bijvoorbeeld, een 5-9-10 kruispunt (11 pips totaal) wordt vaak genegeerd ten gunste van betwiste 6-8-3 plekken (ook 11 pips). De 5-9-10 biedt vergelijkbare verwachte productie maar zonder competitie. Expert spelers identificeren deze 'arbitrage kansen' - wiskundig sterke posities die tegenstanders systematisch onderwaarderen - en verkrijgen equivalente productie zonder conflict."
        }
      },
      {
        question: {
          en: "In Seafarers expansion, what is the 'naval exploration commitment threshold'?",
          es: "En la expansión Marineros, ¿qué es el 'umbral de compromiso de exploración naval'?",
          de: "Was ist in der Seefahrer-Erweiterung die 'Marine-Erkundungs-Verpflichtungsschwelle'?",
          nl: "Wat is in de Zeevaarders uitbreiding de 'maritieme verkenning commitment drempel'?"
        },
        options: [
          { en: "Need 12+ lumber/sheep pips to justify ship-based expansion vs mainland settlement", es: "Necesitar 12+ pips de madera/oveja para justificar expansión basada en barcos vs asentamiento en tierra firme", de: "12+ Holz/Schaf-Pips benötigen um schiffbasierte Expansion vs Festland-Siedlung zu rechtfertigen", nl: "Heb 12+ hout/schaap pips nodig om schip-gebaseerde expansie te rechtvaardigen vs vasteland nederzetting" },
          { en: "Always prioritize ships over mainland", es: "Siempre priorizar barcos sobre tierra firme", de: "Schiffe immer über Festland priorisieren", nl: "Altijd schepen prioriteren boven vasteland" },
          { en: "Never build ships in Seafarers", es: "Nunca construir barcos en Marineros", de: "Nie Schiffe in Seefahrer bauen", nl: "Bouw nooit schepen in Zeevaarders" },
          { en: "Ship production requirements don't matter", es: "Los requisitos de producción de barcos no importan", de: "Schiffsproduktionsanforderungen sind egal", nl: "Scheepsproductie vereisten zijn niet belangrijk" }
        ],
        correct: 0,
        explanation: {
          en: "Ships require lumber+sheep (same as roads). In Seafarers scenarios, committing to island expansion requires sustained ship production. The threshold: you need 12+ combined lumber/sheep pips to reliably build 4-6 ships for reaching valuable islands. Below this threshold, you'll get stranded mid-ocean after 2-3 ships, wasting resources. The 12-pip minimum ensures 1 ship every 2-3 turns for successful naval campaigns.",
          es: "Los barcos requieren madera+oveja (igual que las carreteras). En escenarios de Marineros, comprometerse a la expansión de islas requiere producción sostenida de barcos. El umbral: necesitas 12+ pips combinados de madera/oveja para construir confiablemente 4-6 barcos para alcanzar islas valiosas. Por debajo de este umbral, quedarás varado en medio del océano después de 2-3 barcos, desperdiciando recursos. El mínimo de 12 pips asegura 1 barco cada 2-3 turnos para campañas navales exitosas.",
          de: "Schiffe erfordern Holz+Schaf (wie Straßen). In Seefahrer-Szenarien erfordert das Engagement für Inselerweiterung nachhaltige Schiffsproduktion. Die Schwelle: man benötigt 12+ kombinierte Holz/Schaf-Pips um zuverlässig 4-6 Schiffe zu bauen um wertvolle Inseln zu erreichen. Unter dieser Schwelle strandet man nach 2-3 Schiffen mitten im Ozean und verschwendet Ressourcen. Das 12-Pip-Minimum gewährleistet 1 Schiff alle 2-3 Züge für erfolgreiche Marine-Kampagnen.",
          nl: "Schepen vereisen hout+schaap (hetzelfde als wegen). In Zeevaarders scenario's vereist commitment aan eiland expansie aanhoudende schip productie. De drempel: je hebt 12+ gecombineerde hout/schaap pips nodig om betrouwbaar 4-6 schepen te bouwen voor het bereiken van waardevolle eilanden. Onder deze drempel raak je gestrand mid-oceaan na 2-3 schepen, waardoor bronnen verspild worden. Het 12-pip minimum verzekert 1 schip elke 2-3 beurten voor succesvolle maritieme campagnes."
        }
      },
      {
        question: {
          en: "What is the 'knight activation delay strategy' in Cities & Knights?",
          es: "¿Qué es la estrategia de 'retraso de activación de caballeros' en Ciudades & Caballeros?",
          de: "Was ist die 'Ritter-Aktivierungs-Verzögerungs-Strategie' in Städte & Ritter?",
          nl: "Wat is de 'ridder activering vertraging strategie' in Steden & Ridders?"
        },
        options: [
          { en: "Keep knights inactive until barbarian attack imminent, forcing opponents to activate first", es: "Mantener caballeros inactivos hasta que el ataque bárbaro sea inminente, forzando a los oponentes a activar primero", de: "Ritter inaktiv halten bis Barbarenangriff unmittelbar bevorsteht und Gegner zwingt zuerst zu aktivieren", nl: "Houd ridders inactief tot barbaren aanval dreigt, dwing tegenstanders als eerste te activeren" },
          { en: "Activate all knights immediately when built", es: "Activar todos los caballeros inmediatamente cuando se construyen", de: "Alle Ritter sofort nach Bau aktivieren", nl: "Activeer alle ridders direct wanneer gebouwd" },
          { en: "Never build knights in C&K", es: "Nunca construir caballeros en C&K", de: "Nie Ritter in S&R bauen", nl: "Bouw nooit ridders in S&R" },
          { en: "Knight timing is irrelevant", es: "El tiempo de los caballeros es irrelevante", de: "Ritter-Timing ist irrelevant", nl: "Ridder timing is irrelevant" }
        ],
        correct: 0,
        explanation: {
          en: "In C&K, inactive knights can be activated on the turn they're built. By delaying activation until the barbarian ship is 1 space away, you create a 'chicken game': opponents must activate their knights early (costing grain), or risk losing a city. If you have the strongest inactive knight force and activate last, you can secure Defender of Catan bonus while opponents waste resources on premature activations.",
          es: "En C&K, los caballeros inactivos pueden activarse en el turno en que se construyen. Al retrasar la activación hasta que el barco bárbaro esté a 1 espacio de distancia, creas un 'juego de gallinas': los oponentes deben activar sus caballeros temprano (costando grano), o arriesgarse a perder una ciudad. Si tienes la fuerza de caballeros inactivos más fuerte y activas último, puedes asegurar el bono de Defensor de Catan mientras los oponentes desperdician recursos en activaciones prematuras.",
          de: "In S&R können inaktive Ritter im Zug aktiviert werden, in dem sie gebaut werden. Durch Verzögerung der Aktivierung bis das Barbarenschiff 1 Feld entfernt ist, schafft man ein 'Feiglingsspiel': Gegner müssen ihre Ritter früh aktivieren (kostet Getreide), oder riskieren eine Stadt zu verlieren. Hat man die stärkste inaktive Rittermacht und aktiviert zuletzt, kann man Verteidiger-von-Catan-Bonus sichern während Gegner Ressourcen für vorzeitige Aktivierungen verschwenden.",
          nl: "In S&R kunnen inactieve ridders geactiveerd worden in de beurt waarin ze gebouwd worden. Door activering uit te stellen tot het barbarenschip 1 vak weg is, creëer je een 'lafaard spel': tegenstanders moeten hun ridders vroeg activeren (kost graan), of riskeren een stad te verliezen. Als je de sterkste inactieve riddermacht hebt en als laatste activeert, kun je Verdediger van Catan bonus veiligstellen terwijl tegenstanders bronnen verspillen aan voortijdige activeringen."
        }
      },
      {
        question: {
          en: "What defines the 'road network density optimization' in competitive Catan?",
          es: "¿Qué define la 'optimización de densidad de red de carreteras' en Catan competitivo?",
          de: "Was definiert die 'Straßennetzwerk-Dichte-Optimierung' im Wettkampf-Catan?",
          nl: "Wat definieert de 'wegnetwerk dichtheid optimalisatie' in competitief Catan?"
        },
        options: [
          { en: "Build minimum roads needed (efficiency) vs maximum roads possible (longest road contest)", es: "Construir carreteras mínimas necesarias (eficiencia) vs carreteras máximas posibles (concurso de camino más largo)", de: "Minimale benötigte Straßen bauen (Effizienz) vs maximale mögliche Straßen (längste Straße Wettbewerb)", nl: "Bouw minimum benodigde wegen (efficiëntie) vs maximum mogelijke wegen (langste weg wedstrijd)" },
          { en: "Always build maximum possible roads", es: "Siempre construir el máximo de carreteras posible", de: "Immer maximal mögliche Straßen bauen", nl: "Altijd maximum mogelijke wegen bouwen" },
          { en: "Never compete for longest road", es: "Nunca competir por el camino más largo", de: "Nie um längste Straße konkurrieren", nl: "Concurreer nooit voor langste weg" },
          { en: "Road strategy is irrelevant", es: "La estrategia de carreteras es irrelevante", de: "Straßenstrategie ist irrelevant", nl: "Wegstrategie is irrelevant" }
        ],
        correct: 0,
        explanation: {
          en: "Road strategy splits into two modes: (1) Efficiency mode: build exactly the roads needed to reach settlement spots (typically 3-5 roads total), saving lumber/brick for settlements/cities. (2) Longest Road mode: commit to 8-10+ roads for the 2-point bonus. The critical decision: once any player reaches 6-7 roads, you must either commit fully to road race (costly) or abandon it entirely. Half-measures (5-6 roads) waste resources without securing points.",
          es: "La estrategia de carreteras se divide en dos modos: (1) Modo de eficiencia: construir exactamente las carreteras necesarias para alcanzar lugares de asentamiento (típicamente 3-5 carreteras en total), ahorrando madera/ladrillo para asentamientos/ciudades. (2) Modo de Camino Más Largo: comprometerse a 8-10+ carreteras para el bono de 2 puntos. La decisión crítica: una vez que cualquier jugador alcanza 6-7 carreteras, debes comprometerte completamente a la carrera de carreteras (costoso) o abandonarla por completo. Las medias tintas (5-6 carreteras) desperdician recursos sin asegurar puntos.",
          de: "Straßenstrategie teilt sich in zwei Modi: (1) Effizienzmodus: exakt die benötigten Straßen zum Erreichen von Siedlungsplätzen bauen (typisch 3-5 Straßen gesamt), Holz/Ziegel für Siedlungen/Städte sparen. (2) Längste-Straße-Modus: zu 8-10+ Straßen für 2-Punkte-Bonus verpflichten. Die kritische Entscheidung: sobald ein Spieler 6-7 Straßen erreicht, muss man entweder voll zum Straßenrennen verpflichten (teuer) oder es vollständig aufgeben. Halbmaßnahmen (5-6 Straßen) verschwenden Ressourcen ohne Punkte zu sichern.",
          nl: "Wegstrategie splitst in twee modi: (1) Efficiëntie modus: bouw precies de wegen nodig om nederzettingsplekken te bereiken (typisch 3-5 wegen totaal), spaar hout/baksteen voor nederzettingen/steden. (2) Langste Weg modus: commit aan 8-10+ wegen voor 2-punten bonus. De kritieke beslissing: zodra een speler 6-7 wegen bereikt, moet je ofwel volledig committen aan wegrace (duur) of het volledig opgeven. Halve maatregelen (5-6 wegen) verspillen bronnen zonder punten te beveiligen."
        }
      },
      {
        question: {
          en: "What is the 'production multiplier effect' in city-heavy strategies?",
          es: "¿Qué es el 'efecto multiplicador de producción' en estrategias pesadas de ciudades?",
          de: "Was ist der 'Produktions-Multiplikator-Effekt' in Stadt-schweren Strategien?",
          nl: "Wat is het 'productie vermenigvuldigings effect' in stad-zware strategieën?"
        },
        options: [
          { en: "Each city doubles production which accelerates next city, creating exponential growth curve", es: "Cada ciudad duplica la producción lo que acelera la próxima ciudad, creando curva de crecimiento exponencial", de: "Jede Stadt verdoppelt Produktion was nächste Stadt beschleunigt und exponentielle Wachstumskurve schafft", nl: "Elke stad verdubbelt productie wat volgende stad versnelt, creërend exponentiële groeicurve" },
          { en: "Cities provide linear growth only", es: "Las ciudades proporcionan solo crecimiento lineal", de: "Städte bieten nur lineares Wachstum", nl: "Steden bieden alleen lineaire groei" },
          { en: "Multiple cities have no compounding effect", es: "Múltiples ciudades no tienen efecto de acumulación", de: "Mehrere Städte haben keinen kumulierenden Effekt", nl: "Meerdere steden hebben geen samenstelling effect" },
          { en: "City strategy is always inferior", es: "La estrategia de ciudad siempre es inferior", de: "Stadt-Strategie ist immer unterlegen", nl: "Stadsstrategie is altijd inferieur" }
        ],
        correct: 0,
        explanation: {
          en: "The city multiplier: First city (built turn 15) doubles wheat/ore income → Second city comes turn 18 (3 turns faster) → Third city turn 20 (2 turns faster) → Fourth city turn 21 (1 turn faster). This accelerating pattern creates an exponential growth curve. By turn 25, a city-focused player produces 8-12 resources/turn vs 3-4 for settlement-focused opponents, enabling 10+ point leads that become mathematically unbeatable.",
          es: "El multiplicador de ciudad: Primera ciudad (construida turno 15) duplica ingresos de trigo/mineral → Segunda ciudad viene turno 18 (3 turnos más rápido) → Tercera ciudad turno 20 (2 turnos más rápido) → Cuarta ciudad turno 21 (1 turno más rápido). Este patrón acelerado crea una curva de crecimiento exponencial. Para el turno 25, un jugador enfocado en ciudades produce 8-12 recursos/turno vs 3-4 para oponentes enfocados en asentamientos, permitiendo ventajas de 10+ puntos que se vuelven matemáticamente imbatibles.",
          de: "Der Stadt-Multiplikator: Erste Stadt (gebaut Zug 15) verdoppelt Weizen/Erz-Einkommen → Zweite Stadt kommt Zug 18 (3 Züge schneller) → Dritte Stadt Zug 20 (2 Züge schneller) → Vierte Stadt Zug 21 (1 Zug schneller). Dieses beschleunigende Muster schafft eine exponentielle Wachstumskurve. Bis Zug 25 produziert ein Stadt-fokussierter Spieler 8-12 Ressourcen/Zug vs 3-4 für Siedlungs-fokussierte Gegner, was 10+ Punkt-Vorsprünge ermöglicht die mathematisch unschlagbar werden.",
          nl: "De stad vermenigvuldiger: Eerste stad (gebouwd beurt 15) verdubbelt tarwe/erts inkomen → Tweede stad komt beurt 18 (3 beurten sneller) → Derde stad beurt 20 (2 beurten sneller) → Vierde stad beurt 21 (1 beurt sneller). Dit versnellend patroon creëert een exponentiële groeicurve. Bij beurt 25 produceert een stad-gefocuste speler 8-12 bronnen/beurt vs 3-4 voor nederzetting-gefocuste tegenstanders, wat 10+ punt voorsprong mogelijk maakt die wiskundig onverslaanbaar wordt."
        }
      },
      {
        question: {
          en: "In tournament-level play, what is the 'monopoly card probability calculation'?",
          es: "En el juego de nivel de torneo, ¿qué es el 'cálculo de probabilidad de carta de monopolio'?",
          de: "Was ist im Turnierspiel die 'Monopolkarten-Wahrscheinlichkeitsberechnung'?",
          nl: "Wat is in toernooi-niveau spel de 'monopolie kaart waarschijnlijkheid berekening'?"
        },
        options: [
          { en: "Estimate opponent holdings: (visible production - visible spending) × turns since last build", es: "Estimar tenencias del oponente: (producción visible - gasto visible) × turnos desde última construcción", de: "Gegnerbestände schätzen: (sichtbare Produktion - sichtbare Ausgaben) × Züge seit letztem Bau", nl: "Schat tegenstander bezittingen: (zichtbare productie - zichtbare uitgaven) × beurten sinds laatste bouw" },
          { en: "Monopoly targeting should be random", es: "La selección de monopolio debe ser aleatoria", de: "Monopol-Zielauswahl sollte zufällig sein", nl: "Monopolie targeting moet willekeurig zijn" },
          { en: "Never use monopoly cards", es: "Nunca usar cartas de monopolio", de: "Nie Monopolkarten verwenden", nl: "Gebruik nooit monopoliekaarten" },
          { en: "Opponent holdings cannot be calculated", es: "Las tenencias del oponente no pueden calcularse", de: "Gegnerbestände können nicht berechnet werden", nl: "Tegenstander bezittingen kunnen niet berekend worden" }
        ],
        correct: 0,
        explanation: {
          en: "Expert monopoly play requires calculating expected value per resource. For each opponent, estimate holdings using: (1) Track their production hexes that hit recently, (2) Count visible builds/trades that consumed resources, (3) Multiply net accumulation by turns since last spend. Example: Opponent has 4 wheat pips, 6 hit recently, spent 2 wheat on city 3 turns ago → estimated 4 wheat × 3 turns = ~6 wheat current. Sum across all opponents to find optimal monopoly target.",
          es: "El juego experto de monopolio requiere calcular el valor esperado por recurso. Para cada oponente, estima las tenencias usando: (1) Rastrea sus hexágonos de producción que salieron recientemente, (2) Cuenta construcciones/intercambios visibles que consumieron recursos, (3) Multiplica la acumulación neta por turnos desde el último gasto. Ejemplo: El oponente tiene 4 pips de trigo, 6 salieron recientemente, gastó 2 trigos en ciudad hace 3 turnos → estimado 4 trigo × 3 turnos = ~6 trigos actuales. Suma en todos los oponentes para encontrar el objetivo óptimo de monopolio.",
          de: "Experten-Monopolspiel erfordert Berechnung des Erwartungswerts pro Ressource. Für jeden Gegner Bestände schätzen mit: (1) Produktionshexe verfolgen die kürzlich getroffen wurden, (2) Sichtbare Bauten/Geschäfte zählen die Ressourcen verbrauchten, (3) Netto-Akkumulation mit Zügen seit letzter Ausgabe multiplizieren. Beispiel: Gegner hat 4 Weizen-Pips, 6 trafen kürzlich, gab 2 Weizen für Stadt vor 3 Zügen aus → geschätzt 4 Weizen × 3 Züge = ~6 Weizen aktuell. Über alle Gegner summieren um optimales Monopolziel zu finden.",
          nl: "Expert monopolie spel vereist berekening van verwachte waarde per bron. Voor elke tegenstander, schat bezittingen met: (1) Volg hun productie hexen die recent vielen, (2) Tel zichtbare bouwsels/handel die bronnen consumeerden, (3) Vermenigvuldig netto verzameling met beurten sinds laatste uitgave. Voorbeeld: Tegenstander heeft 4 tarwe pips, 6 vielen recent, besteedde 2 tarwe aan stad 3 beurten geleden → geschat 4 tarwe × 3 beurten = ~6 tarwe huidig. Som over alle tegenstanders om optimaal monopolie target te vinden."
        }
      },
      {
        question: {
          en: "What is the 'blocking settlement value proposition' in expert play?",
          es: "¿Qué es la 'propuesta de valor de asentamiento de bloqueo' en juego experto?",
          de: "Was ist die 'Blockierungs-Siedlungs-Wertproposition' im Expertenspiel?",
          nl: "Wat is de 'blokkerende nederzetting waarde propositie' in expert spel?"
        },
        options: [
          { en: "Spending 1 settlement to deny opponent 3-point gain (settlement + harbor/position) = net +2", es: "Gastar 1 asentamiento para negar ganancia de 3 puntos al oponente (asentamiento + puerto/posición) = neto +2", de: "1 Siedlung ausgeben um Gegner 3-Punkt-Gewinn zu verweigern (Siedlung + Hafen/Position) = netto +2", nl: "Besteed 1 nederzetting om tegenstander 3-punt winst te ontzeggen (nederzetting + haven/positie) = netto +2" },
          { en: "Blocking settlements are always wasteful", es: "Los asentamientos de bloqueo siempre son desperdiciadores", de: "Blockierungs-Siedlungen sind immer verschwenderisch", nl: "Blokkerende nederzettingen zijn altijd verspillend" },
          { en: "Never build defensively", es: "Nunca construir defensivamente", de: "Nie defensiv bauen", nl: "Bouw nooit defensief" },
          { en: "All settlements must maximize own production", es: "Todos los asentamientos deben maximizar la propia producción", de: "Alle Siedlungen müssen eigene Produktion maximieren", nl: "Alle nederzettingen moeten eigen productie maximaliseren" }
        ],
        correct: 0,
        explanation: {
          en: "In competitive scenarios, building a 6-pip 'blocking' settlement to prevent opponent from claiming a 12-pip spot with 2:1 harbor appears suboptimal for you (-4 pips vs alternative). However, the relative scoring: you gain 1 point + 6 pips, opponent loses 1 point + 12 pips + 2:1 harbor (total ~3 point swing). Net competitive advantage: +2 points. This 'relative gain' math explains why top players frequently build blocking settlements that seem individually weak.",
          es: "En escenarios competitivos, construir un asentamiento de 'bloqueo' de 6 pips para evitar que el oponente reclame un lugar de 12 pips con puerto 2:1 parece subóptimo para ti (-4 pips vs alternativa). Sin embargo, la puntuación relativa: ganas 1 punto + 6 pips, el oponente pierde 1 punto + 12 pips + puerto 2:1 (total ~3 puntos de cambio). Ventaja competitiva neta: +2 puntos. Esta matemática de 'ganancia relativa' explica por qué los mejores jugadores frecuentemente construyen asentamientos de bloqueo que parecen individualmente débiles.",
          de: "In Wettbewerbsszenarien erscheint der Bau einer 6-Pip-'Blockierungs'-Siedlung, um Gegner daran zu hindern, einen 12-Pip-Platz mit 2:1-Hafen zu beanspruchen, suboptimal für Sie (-4 Pips vs Alternative). Jedoch die relative Wertung: Sie gewinnen 1 Punkt + 6 Pips, Gegner verliert 1 Punkt + 12 Pips + 2:1-Hafen (gesamt ~3 Punkt-Schwung). Netto-Wettbewerbsvorteil: +2 Punkte. Diese 'relative Gewinn'-Mathematik erklärt, warum Top-Spieler häufig Blockierungs-Siedlungen bauen, die individuell schwach erscheinen.",
          nl: "In competitieve scenario's lijkt het bouwen van een 6-pip 'blokkerende' nederzetting om tegenstander te verhinderen een 12-pip plek met 2:1 haven te claimen suboptimaal voor jou (-4 pips vs alternatief). Echter, de relatieve scoring: je wint 1 punt + 6 pips, tegenstander verliest 1 punt + 12 pips + 2:1 haven (totaal ~3 punt verschuiving). Netto competitief voordeel: +2 punten. Deze 'relatieve winst' wiskunde verklaart waarom top spelers frequent blokkerende nederzettingen bouwen die individueel zwak lijken."
        }
      },
      {
        question: {
          en: "What is the 'endgame resource hoarding threshold' strategy?",
          es: "¿Qué es la estrategia de 'umbral de acumulación de recursos de final de juego'?",
          de: "Was ist die 'Endspiel-Ressourcen-Hortungs-Schwellen'-Strategie?",
          nl: "Wat is de 'eindspel bron opslag drempel' strategie?"
        },
        options: [
          { en: "At 8-9 points, accumulate exactly 7 cards (robber-proof) with winning combo ready", es: "A 8-9 puntos, acumular exactamente 7 cartas (a prueba de ladrones) con combo ganador listo", de: "Bei 8-9 Punkten exakt 7 Karten ansammeln (räubersicher) mit siegender Combo bereit", nl: "Bij 8-9 punten, verzamel precies 7 kaarten (rover-proof) met winnende combo klaar" },
          { en: "Always keep 0-3 cards to avoid robber", es: "Siempre mantener 0-3 cartas para evitar al ladrón", de: "Immer 0-3 Karten behalten um Räuber zu vermeiden", nl: "Houd altijd 0-3 kaarten om rover te vermijden" },
          { en: "Accumulate 15+ cards for flexibility", es: "Acumular 15+ cartas para flexibilidad", de: "15+ Karten für Flexibilität ansammeln", nl: "Verzamel 15+ kaarten voor flexibiliteit" },
          { en: "Card count doesn't matter in endgame", es: "El conteo de cartas no importa en el final del juego", de: "Kartenzählung ist im Endspiel egal", nl: "Kaart telling is niet belangrijk in eindspel" }
        ],
        correct: 0,
        explanation: {
          en: "At 8-9 points, the optimal strategy is accumulating exactly 7 cards: enough for your winning play (city, settlement, or dev card) but immune to 7-roll robber discard. With 8 cards you lose half on 7-roll; with 6 you lack resources for surprise win. The 7-card threshold provides maximum safety while maintaining win capability. This requires precise resource planning: know your winning combo and accumulate exactly those 7 cards.",
          es: "A 8-9 puntos, la estrategia óptima es acumular exactamente 7 cartas: suficiente para tu jugada ganadora (ciudad, asentamiento o carta de desarrollo) pero inmune al descarte del ladrón en 7. Con 8 cartas pierdes la mitad en tirada de 7; con 6 careces de recursos para victoria sorpresa. El umbral de 7 cartas proporciona máxima seguridad mientras mantiene capacidad de victoria. Esto requiere planificación precisa de recursos: conoce tu combo ganador y acumula exactamente esas 7 cartas.",
          de: "Bei 8-9 Punkten ist die optimale Strategie, exakt 7 Karten anzusammeln: genug für Ihren Siegzug (Stadt, Siedlung oder Dev-Karte) aber immun gegen 7-Wurf-Räuber-Abwurf. Mit 8 Karten verlieren Sie die Hälfte bei 7-Wurf; mit 6 fehlen Ressourcen für Überraschungssieg. Die 7-Karten-Schwelle bietet maximale Sicherheit bei Aufrechterhaltung der Siegfähigkeit. Dies erfordert präzise Ressourcenplanung: kennen Sie Ihre Siegkombo und sammeln Sie exakt diese 7 Karten an.",
          nl: "Bij 8-9 punten is de optimale strategie het verzamelen van precies 7 kaarten: genoeg voor je winnende zet (stad, nederzetting of dev kaart) maar immuun voor 7-worp rover weggooi. Met 8 kaarten verlies je de helft op 7-worp; met 6 mis je bronnen voor verrassingswinst. De 7-kaarten drempel biedt maximum veiligheid terwijl win capaciteit behouden blijft. Dit vereist precieze bron planning: ken je winnende combo en verzamel precies die 7 kaarten."
        }
      },
      {
        question: {
          en: "What is the 'longest road opportunity cost' in competitive analysis?",
          es: "¿Qué es el 'costo de oportunidad del camino más largo' en análisis competitivo?",
          de: "Was sind die 'Längste-Straße-Opportunitätskosten' in Wettbewerbsanalyse?",
          nl: "Wat is de 'langste weg opportunity cost' in competitieve analyse?"
        },
        options: [
          { en: "10 roads (10 lumber + 10 brick) = 2.5 settlements worth of resources for 2 points", es: "10 carreteras (10 madera + 10 ladrillo) = 2.5 asentamientos de valor de recursos para 2 puntos", de: "10 Straßen (10 Holz + 10 Ziegel) = 2,5 Siedlungen Ressourcenwert für 2 Punkte", nl: "10 wegen (10 hout + 10 baksteen) = 2,5 nederzettingen aan bronwaarde voor 2 punten" },
          { en: "Longest road is always optimal investment", es: "El camino más largo siempre es inversión óptima", de: "Längste Straße ist immer optimale Investition", nl: "Langste weg is altijd optimale investering" },
          { en: "Roads have no opportunity cost", es: "Las carreteras no tienen costo de oportunidad", de: "Straßen haben keine Opportunitätskosten", nl: "Wegen hebben geen opportunity cost" },
          { en: "Never consider resource alternatives", es: "Nunca considerar alternativas de recursos", de: "Ressourcenalternativen nie berücksichtigen", nl: "Overweeg nooit bron alternatieven" }
        ],
        correct: 0,
        explanation: {
          en: "Longest Road (2 points) requires ~10 roads: 10 lumber + 10 brick = 20 resources. Alternative investment: those 20 resources build 2.5 settlements (each needs 4 lumber/brick + 4 wheat/sheep/ore via trading). Since settlements give 1 point + production, the 2.5 settlements yield 2.5 points + ongoing resources vs Longest Road's flat 2 points. Road becomes viable only when: (a) you already have roads built, or (b) opponents cannot contest it, making it 'free' 2 points.",
          es: "El Camino Más Largo (2 puntos) requiere ~10 carreteras: 10 madera + 10 ladrillo = 20 recursos. Inversión alternativa: esos 20 recursos construyen 2.5 asentamientos (cada uno necesita 4 madera/ladrillo + 4 trigo/oveja/mineral vía intercambio). Dado que los asentamientos dan 1 punto + producción, los 2.5 asentamientos producen 2.5 puntos + recursos continuos vs los 2 puntos fijos del Camino Más Largo. La carretera se vuelve viable solo cuando: (a) ya tienes carreteras construidas, o (b) los oponentes no pueden disputarla, haciéndola 2 puntos 'gratis'.",
          de: "Längste Straße (2 Punkte) erfordert ~10 Straßen: 10 Holz + 10 Ziegel = 20 Ressourcen. Alternative Investition: diese 20 Ressourcen bauen 2,5 Siedlungen (jede braucht 4 Holz/Ziegel + 4 Weizen/Schaf/Erz via Handel). Da Siedlungen 1 Punkt + Produktion geben, erbringen 2,5 Siedlungen 2,5 Punkte + laufende Ressourcen vs flache 2 Punkte der Längsten Straße. Straße wird nur praktikabel wenn: (a) man bereits Straßen gebaut hat, oder (b) Gegner sie nicht anfechten können, wodurch sie 'kostenlose' 2 Punkte wird.",
          nl: "Langste Weg (2 punten) vereist ~10 wegen: 10 hout + 10 baksteen = 20 bronnen. Alternatieve investering: die 20 bronnen bouwen 2,5 nederzettingen (elk heeft 4 hout/baksteen + 4 tarwe/schaap/erts nodig via handel). Aangezien nederzettingen 1 punt + productie geven, leveren 2,5 nederzettingen 2,5 punten + doorlopende bronnen vs Langste Weg's platte 2 punten. Weg wordt alleen levensvatbaar wanneer: (a) je al wegen gebouwd hebt, of (b) tegenstanders het niet kunnen betwisten, waardoor het 'gratis' 2 punten wordt."
        }
      },
      {
        question: {
          en: "What is the 'robber-induced scarcity' manipulation in advanced play?",
          es: "¿Qué es la manipulación de 'escasez inducida por ladrones' en juego avanzado?",
          de: "Was ist die 'Räuber-induzierte-Knappheits'-Manipulation im fortgeschrittenen Spiel?",
          nl: "Wat is de 'rover-geïnduceerde schaarste' manipulatie in geavanceerd spel?"
        },
        options: [
          { en: "Place robber on abundant resource hexes to artificially inflate value of your stockpile", es: "Colocar ladrón en hexágonos de recursos abundantes para inflar artificialmente el valor de tu reserva", de: "Räuber auf reichliche Ressourcenhexe platzieren um Wert Ihres Vorrats künstlich aufzublähen", nl: "Plaats rover op overvloedige bron hexen om waarde van je voorraad kunstmatig op te blazen" },
          { en: "Only place robber on rare resources", es: "Solo colocar ladrón en recursos raros", de: "Räuber nur auf seltene Ressourcen platzieren", nl: "Plaats rover alleen op zeldzame bronnen" },
          { en: "Never use robber strategically", es: "Nunca usar ladrón estratégicamente", de: "Räuber nie strategisch verwenden", nl: "Gebruik rover nooit strategisch" },
          { en: "Robber placement should be random", es: "La colocación del ladrón debe ser aleatoria", de: "Räuberplatzierung sollte zufällig sein", nl: "Roverplaatsing moet willekeurig zijn" }
        ],
        correct: 0,
        explanation: {
          en: "When you hold a large brick stockpile (6+ cards), placing the robber on the most productive brick hex creates artificial scarcity: opponents desperately need brick but cannot produce it, making your brick extremely valuable in trades. You can then extract 1:2 or even 1:3 trade ratios ('I'll give 1 brick for 3 wheat') because opponents have no alternatives. This scarcity manipulation amplifies your resource advantage beyond mere robber blocking.",
          es: "Cuando tienes una gran reserva de ladrillo (6+ cartas), colocar el ladrón en el hexágono de ladrillo más productivo crea escasez artificial: los oponentes necesitan desesperadamente ladrillo pero no pueden producirlo, haciendo tu ladrillo extremadamente valioso en intercambios. Luego puedes extraer proporciones de intercambio 1:2 o incluso 1:3 ('daré 1 ladrillo por 3 trigos') porque los oponentes no tienen alternativas. Esta manipulación de escasez amplifica tu ventaja de recursos más allá del mero bloqueo del ladrón.",
          de: "Wenn man einen großen Ziegelvorrat hält (6+ Karten), schafft das Platzieren des Räubers auf dem produktivsten Ziegelhex künstliche Knappheit: Gegner brauchen dringend Ziegel können aber nicht produzieren, wodurch Ihr Ziegel extrem wertvoll in Geschäften wird. Man kann dann 1:2- oder sogar 1:3-Handelsverhältnisse extrahieren ('Ich gebe 1 Ziegel für 3 Weizen') weil Gegner keine Alternativen haben. Diese Knappheits-Manipulation verstärkt Ihren Ressourcenvorteil über bloße Räuberblockierung hinaus.",
          nl: "Wanneer je een grote baksteen voorraad hebt (6+ kaarten), creëert het plaatsen van de rover op de meest productieve baksteen hex kunstmatige schaarste: tegenstanders hebben dringend baksteen nodig maar kunnen het niet produceren, waardoor jouw baksteen extreem waardevol wordt in handel. Je kunt dan 1:2 of zelfs 1:3 handelsratio's extraheren ('Ik geef 1 baksteen voor 3 tarwe') omdat tegenstanders geen alternatieven hebben. Deze schaarste manipulatie vergroot je bron voordeel verder dan louter rover blokkering."
        }
      },
      {
        question: {
          en: "What is the 'settlement spacing offensive' in territorial control?",
          es: "¿Qué es la 'ofensiva de espaciado de asentamientos' en control territorial?",
          de: "Was ist die 'Siedlungs-Abstands-Offensive' in territorialer Kontrolle?",
          nl: "Wat is de 'nederzetting afstand offensief' in territoriale controle?"
        },
        options: [
          { en: "Build settlements 3-4 spaces apart (not minimum 2) to claim more territory and block opponents", es: "Construir asentamientos con 3-4 espacios de separación (no mínimo 2) para reclamar más territorio y bloquear oponentes", de: "Siedlungen 3-4 Felder auseinander bauen (nicht Minimum 2) um mehr Territorium zu beanspruchen und Gegner zu blockieren", nl: "Bouw nederzettingen 3-4 vakjes uit elkaar (niet minimum 2) om meer territorium te claimen en tegenstanders te blokkeren" },
          { en: "Always cluster settlements together", es: "Siempre agrupar asentamientos juntos", de: "Siedlungen immer zusammen gruppieren", nl: "Cluster altijd nederzettingen samen" },
          { en: "Settlement spacing is irrelevant", es: "El espaciado de asentamientos es irrelevante", de: "Siedlungs-Abstand ist irrelevant", nl: "Nederzetting afstand is irrelevant" },
          { en: "Only build settlements adjacent to existing ones", es: "Solo construir asentamientos adyacentes a los existentes", de: "Nur Siedlungen benachbart zu bestehenden bauen", nl: "Bouw alleen nederzettingen aangrenzend aan bestaande" }
        ],
        correct: 0,
        explanation: {
          en: "Strategic settlement spacing: the 2-space rule prevents adjacent enemy settlements, but building your own settlements 3-4 spaces apart creates 'dead zones' where opponents cannot build without being sandwiched between your positions. Example: placing settlements at intersections A and E (4 spaces) blocks intersections B, C, D for opponents while you could still build at C yourself. This territorial control limits opponent expansion paths.",
          es: "Espaciado estratégico de asentamientos: la regla de 2 espacios previene asentamientos enemigos adyacentes, pero construir tus propios asentamientos con 3-4 espacios de separación crea 'zonas muertas' donde los oponentes no pueden construir sin estar intercalados entre tus posiciones. Ejemplo: colocar asentamientos en intersecciones A y E (4 espacios) bloquea intersecciones B, C, D para oponentes mientras tú aún podrías construir en C. Este control territorial limita rutas de expansión de oponentes.",
          de: "Strategischer Siedlungs-Abstand: Die 2-Felder-Regel verhindert benachbarte feindliche Siedlungen, aber der Bau eigener Siedlungen 3-4 Felder auseinander schafft 'tote Zonen', wo Gegner nicht bauen können ohne zwischen Ihren Positionen eingeklemmt zu werden. Beispiel: Platzierung von Siedlungen an Schnittpunkten A und E (4 Felder) blockiert Schnittpunkte B, C, D für Gegner während Sie selbst noch bei C bauen könnten. Diese territoriale Kontrolle begrenzt Gegner-Expansionspfade.",
          nl: "Strategische nederzetting afstand: de 2-vakjes regel voorkomt aangrenzende vijandelijke nederzettingen, maar het bouwen van je eigen nederzettingen 3-4 vakjes uit elkaar creëert 'dode zones' waar tegenstanders niet kunnen bouwen zonder tussen jouw posities gekneld te zitten. Voorbeeld: nederzettingen plaatsen op kruispunten A en E (4 vakjes) blokkeert kruispunten B, C, D voor tegenstanders terwijl je zelf nog steeds op C zou kunnen bouwen. Deze territoriale controle beperkt tegenstander expansiepaden."
        }
      },
      {
        question: {
          en: "What is the 'development card deck probability tracking' technique?",
          es: "¿Qué es la técnica de 'seguimiento de probabilidad del mazo de cartas de desarrollo'?",
          de: "Was ist die 'Entwicklungskarten-Deck-Wahrscheinlichkeits-Verfolgungs'-Technik?",
          nl: "Wat is de 'ontwikkelingskaart deck waarschijnlijkheid volg' techniek?"
        },
        options: [
          { en: "Track visible cards played to calculate remaining deck composition and expected value", es: "Rastrear cartas visibles jugadas para calcular composición restante del mazo y valor esperado", de: "Sichtbare gespielte Karten verfolgen um verbleibende Deck-Zusammensetzung und Erwartungswert zu berechnen", nl: "Volg zichtbare gespeelde kaarten om resterende deck compositie en verwachte waarde te berekenen" },
          { en: "Development deck composition is unknowable", es: "La composición del mazo de desarrollo es incognoscible", de: "Entwicklungsdeck-Zusammensetzung ist unerkennbar", nl: "Ontwikkelingskaart deck compositie is onkenbaar" },
          { en: "Never track opponent development cards", es: "Nunca rastrear cartas de desarrollo de oponentes", de: "Gegner-Entwicklungskarten nie verfolgen", nl: "Volg nooit tegenstander ontwikkelingskaarten" },
          { en: "All development cards have equal probability always", es: "Todas las cartas de desarrollo tienen igual probabilidad siempre", de: "Alle Entwicklungskarten haben immer gleiche Wahrscheinlichkeit", nl: "Alle ontwikkelingskaarten hebben altijd gelijke waarschijnlijkheid" }
        ],
        correct: 0,
        explanation: {
          en: "The 25-card development deck is fixed: 14 knights, 5 VPs, 2 Road Building, 2 Year of Plenty, 2 Monopoly. By tracking visible plays ('12 knights played, 3 VPs revealed'), you calculate remaining deck: 2 knights, 2 VPs, 2 RB, 2 YOP, 2 Monopoly. This shifts expected value: early in game, E(card)=0.56 VP equivalent; late game with knights depleted, E(card)=0.9 VP. This informs optimal buying timing and whether to risk another card purchase.",
          es: "El mazo de 25 cartas de desarrollo es fijo: 14 caballeros, 5 PVs, 2 Construcción de Carreteras, 2 Año de la Abundancia, 2 Monopolio. Al rastrear jugadas visibles ('12 caballeros jugados, 3 PVs revelados'), calculas el mazo restante: 2 caballeros, 2 PVs, 2 CC, 2 AA, 2 Monopolio. Esto cambia el valor esperado: temprano en el juego, E(carta)=0.56 PV equivalente; tarde en el juego con caballeros agotados, E(carta)=0.9 PV. Esto informa el tiempo óptimo de compra y si arriesgar otra compra de carta.",
          de: "Das 25-Karten-Entwicklungsdeck ist fix: 14 Ritter, 5 SPs, 2 Straßenbau, 2 Jahr des Überflusses, 2 Monopol. Durch Verfolgung sichtbarer Spiele ('12 Ritter gespielt, 3 SPs enthüllt') berechnet man verbleibendes Deck: 2 Ritter, 2 SPs, 2 SB, 2 JdÜ, 2 Monopol. Dies verschiebt Erwartungswert: früh im Spiel E(Karte)=0,56 SP-Äquivalent; spät im Spiel mit erschöpften Rittern E(Karte)=0,9 SP. Dies informiert optimales Kauf-Timing und ob weiterer Kartenkauf riskiert werden soll.",
          nl: "Het 25-kaarten ontwikkelingsdeck is vast: 14 ridders, 5 OPs, 2 Wegbouw, 2 Jaar van Overvloed, 2 Monopolie. Door zichtbare spellen te volgen ('12 ridders gespeeld, 3 OPs onthuld'), bereken je resterende deck: 2 ridders, 2 OPs, 2 WB, 2 JvO, 2 Monopolie. Dit verschuift verwachte waarde: vroeg in spel E(kaart)=0,56 OP equivalent; laat in spel met ridders uitgeput E(kaart)=0,9 OP. Dit informeert optimale koop timing en of een andere kaartaankoop te riskeren."
        }
      },
      {
        question: {
          en: "What is the 'late-game desperation trade' leverage in competitive Catan?",
          es: "¿Qué es el apalancamiento de 'intercambio de desesperación de final de juego' en Catan competitivo?",
          de: "Was ist der 'Endspiel-Verzweiflungs-Handels'-Hebel im Wettkampf-Catan?",
          nl: "Wat is de 'laat-spel wanhoop handel' hefboom in competitief Catan?"
        },
        options: [
          { en: "Player at 9 points will accept terrible ratios (3:1 or 4:1) for winning resource, exploit this", es: "Jugador a 9 puntos aceptará proporciones terribles (3:1 o 4:1) para recurso ganador, explotar esto", de: "Spieler bei 9 Punkten akzeptiert schreckliche Verhältnisse (3:1 oder 4:1) für siegende Ressource, dies ausnutzen", nl: "Speler bij 9 punten accepteert verschrikkelijke ratio's (3:1 of 4:1) voor winnende bron, exploiteer dit" },
          { en: "Never offer unfavorable trades to anyone", es: "Nunca ofrecer intercambios desfavorables a nadie", de: "Nie ungünstige Geschäfte jemandem anbieten", nl: "Bied nooit ongunstige handel aan iemand" },
          { en: "All trades should be exactly 1:1", es: "Todos los intercambios deben ser exactamente 1:1", de: "Alle Geschäfte sollten genau 1:1 sein", nl: "Alle handel moet precies 1:1 zijn" },
          { en: "Trade ratios are irrelevant in endgame", es: "Las proporciones de intercambio son irrelevantes en el final del juego", de: "Handelsverhältnisse sind im Endspiel irrelevant", nl: "Handelsratio's zijn irrelevant in eindspel" }
        ],
        correct: 0,
        explanation: {
          en: "When a player reaches 9 points and needs 1 specific resource to win (e.g., 1 ore for city), they'll accept almost any ratio (3:1, 4:1, even 5:1) because winning immediately is worth infinite resources. If you're at 6-7 points, offering that 'desperation trade' at exploitative ratios (take 3-4 resources, give 1) massively swings resource advantage your way while preventing immediate leader victory—they win in 1 turn, but you gain resources for your own 2-turn win.",
          es: "Cuando un jugador alcanza 9 puntos y necesita 1 recurso específico para ganar (ej., 1 mineral para ciudad), aceptará casi cualquier proporción (3:1, 4:1, incluso 5:1) porque ganar inmediatamente vale recursos infinitos. Si estás a 6-7 puntos, ofrecer ese 'intercambio de desesperación' a proporciones explotadoras (tomar 3-4 recursos, dar 1) cambia masivamente la ventaja de recursos a tu favor mientras previene la victoria inmediata del líder—ellos ganan en 1 turno, pero tú ganas recursos para tu propia victoria en 2 turnos.",
          de: "Wenn ein Spieler 9 Punkte erreicht und 1 spezifische Ressource zum Gewinnen braucht (z.B. 1 Erz für Stadt), akzeptiert er fast jedes Verhältnis (3:1, 4:1, sogar 5:1) weil sofortiges Gewinnen unendliche Ressourcen wert ist. Wenn Sie bei 6-7 Punkten sind, verschiebt das Anbieten dieses 'Verzweiflungs-Handels' zu ausbeuterischen Verhältnissen (3-4 Ressourcen nehmen, 1 geben) massiv Ressourcenvorteil zu Ihren Gunsten während unmittelbarer Führenden-Sieg verhindert wird—sie gewinnen in 1 Zug, aber Sie gewinnen Ressourcen für Ihren eigenen 2-Zug-Sieg.",
          nl: "Wanneer een speler 9 punten bereikt en 1 specifieke bron nodig heeft om te winnen (bijv. 1 erts voor stad), accepteren ze bijna elke ratio (3:1, 4:1, zelfs 5:1) omdat direct winnen oneindige bronnen waard is. Als je op 6-7 punten staat, verschuift het aanbieden van die 'wanhoop handel' op uitbuitende ratio's (neem 3-4 bronnen, geef 1) massaal bron voordeel jouw kant op terwijl directe leider overwinning voorkomt—zij winnen in 1 beurt, maar jij krijgt bronnen voor je eigen 2-beurt winst."
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
