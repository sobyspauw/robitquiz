// Quiz Template - Level 5: Bord spelletjes - Catan
(function() {
  const level5 = {
    name: {
      en: "Catan - Expert",
      es: "Catan - Experto",
      de: "Catan - Experte",
      nl: "Catan - Expert"
    },
    questions: [
      {
        question: {
          en: "What is the optimal 3:1 harbor trade ratio strategy in mid-game?",
          es: "¿Cuál es la estrategia óptima de ratio de comercio 3:1 en puerto a mitad de juego?",
          de: "Was ist die optimale 3:1-Hafenhandelsstrategie im Mittelspiel?",
          nl: "Wat is de optimale 3:1 havenhandelsstrategie in het middenspel?"
        },
        options: [
          { en: "Prioritize when lacking specific production", es: "Priorizar cuando falta producción específica", de: "Priorisieren bei fehlender spezifischer Produktion", nl: "Prioriteren bij gebrek aan specifieke productie" },
          { en: "Avoid all harbor trades", es: "Evitar todos los comercios de puerto", de: "Alle Hafengeschäfte vermeiden", nl: "Vermijd alle havenhandel" },
          { en: "Only use on your turn start", es: "Solo usar al inicio de tu turno", de: "Nur zu Beginn deines Zuges verwenden", nl: "Alleen gebruiken aan het begin van je beurt" },
          { en: "Trade exclusively with bank", es: "Comerciar exclusivamente con el banco", de: "Ausschließlich mit der Bank handeln", nl: "Uitsluitend met de bank handelen" }
        ],
        correct: 0,
        explanation: {
          en: "3:1 harbors become valuable when you have abundant production of one resource but lack access to another through normal dice rolls or trading.",
          es: "Los puertos 3:1 se vuelven valiosos cuando tienes abundante producción de un recurso pero careces de acceso a otro a través de tiradas de dados normales o comercio.",
          de: "3:1-Häfen werden wertvoll, wenn man eine reichliche Produktion einer Ressource hat, aber keinen Zugang zu einer anderen durch normale Würfelwürfe oder Handel.",
          nl: "3:1 havens worden waardevol wanneer je overvloedige productie van één bron hebt maar geen toegang tot een andere via normale dobbelstenen of handel."
        }
      },
      {
        question: {
          en: "When playing a knight card, what is the advanced strategic consideration?",
          es: "Al jugar una carta de caballero, ¿cuál es la consideración estratégica avanzada?",
          de: "Was ist die fortgeschrittene strategische Überlegung beim Spielen einer Ritterkarte?",
          nl: "Wat is de geavanceerde strategische overweging bij het spelen van een ridderkaart?"
        },
        options: [
          { en: "Blocking opponents' best hex while gaining largest army", es: "Bloquear el mejor hexágono de los oponentes mientras se gana el ejército más grande", de: "Bestes Hex der Gegner blockieren und größte Armee aufbauen", nl: "Beste hex van tegenstanders blokkeren terwijl je grootste leger krijgt" },
          { en: "Always move robber to desert", es: "Siempre mover el ladrón al desierto", de: "Räuber immer in die Wüste bewegen", nl: "Rover altijd naar woestijn verplaatsen" },
          { en: "Target random players equally", es: "Apuntar a jugadores aleatorios por igual", de: "Zufällige Spieler gleichmäßig anvisieren", nl: "Willekeurige spelers gelijk targeten" },
          { en: "Save all knights until endgame", es: "Guardar todos los caballeros hasta el final del juego", de: "Alle Ritter bis zum Endspiel aufheben", nl: "Alle ridders bewaren tot eindspel" }
        ],
        correct: 0,
        explanation: {
          en: "Expert players use knights both tactically (blocking opponents' production) and strategically (building toward largest army bonus). The robber placement should maximize disruption while the card count progresses toward the 3-card army threshold.",
          es: "Los jugadores expertos usan caballeros tanto tácticamente (bloqueando la producción de oponentes) como estratégicamente (construyendo hacia la bonificación del ejército más grande). La colocación del ladrón debe maximizar la interrupción mientras el conteo de cartas progresa hacia el umbral de 3 cartas del ejército.",
          de: "Experten nutzen Ritter sowohl taktisch (Blockieren der Produktion der Gegner) als auch strategisch (Aufbau zur größten Armee). Die Räuberplatzierung sollte maximale Störung bewirken, während die Kartenanzahl zur 3-Karten-Armeeschwelle fortschreitet.",
          nl: "Expertspelers gebruiken ridders zowel tactisch (productie van tegenstanders blokkeren) als strategisch (opbouwen naar grootste leger bonus). De roverplaatsing moet verstoring maximaliseren terwijl het aantal kaarten naar de 3-kaarten legergrens vordert."
        }
      },
      {
        question: {
          en: "What probability makes a hex placement superior to a 2:1 harbor access?",
          es: "¿Qué probabilidad hace que la colocación de un hexágono sea superior al acceso de puerto 2:1?",
          de: "Welche Wahrscheinlichkeit macht eine Hex-Platzierung einem 2:1-Hafenzugang überlegen?",
          nl: "Welke waarschijnlijkheid maakt een hex-plaatsing superieur aan 2:1 haventoegang?"
        },
        options: [
          { en: "Two 5/9 hexes (13 pips total)", es: "Dos hexágonos 5/9 (13 pips en total)", de: "Zwei 5/9-Hexe (13 Pips insgesamt)", nl: "Twee 5/9 hexen (13 pips totaal)" },
          { en: "Single 6/8 hex (5 pips)", es: "Un solo hexágono 6/8 (5 pips)", de: "Ein einzelnes 6/8-Hex (5 Pips)", nl: "Enkele 6/8 hex (5 pips)" },
          { en: "Three 4/10 hexes (9 pips)", es: "Tres hexágonos 4/10 (9 pips)", de: "Drei 4/10-Hexe (9 Pips)", nl: "Drie 4/10 hexen (9 pips)" },
          { en: "One 2/12 hex (1 pip)", es: "Un hexágono 2/12 (1 pip)", de: "Ein 2/12-Hex (1 Pip)", nl: "Eén 2/12 hex (1 pip)" }
        ],
        correct: 0,
        explanation: {
          en: "A 2:1 harbor effectively doubles production efficiency. Two 5 or 9 hexes (4 pips each = 8 total probability) plus any resource access equals approximately 13 pip-equivalents, surpassing most 2:1 harbor benefits unless you have exceptional base production.",
          es: "Un puerto 2:1 efectivamente duplica la eficiencia de producción. Dos hexágonos 5 o 9 (4 pips cada uno = 8 probabilidad total) más cualquier acceso a recursos equivale aproximadamente a 13 equivalentes de pip, superando la mayoría de los beneficios del puerto 2:1 a menos que tengas una producción base excepcional.",
          de: "Ein 2:1-Hafen verdoppelt effektiv die Produktionseffizienz. Zwei 5- oder 9-Hexe (je 4 Pips = 8 Gesamtwahrscheinlichkeit) plus jeder Ressourcenzugang entspricht ungefähr 13 Pip-Äquivalenten und übertrifft die meisten 2:1-Hafenvorteile, es sei denn, man hat eine außergewöhnliche Basisproduktion.",
          nl: "Een 2:1 haven verdubbelt effectief de productie-efficiëntie. Twee 5 of 9 hexen (4 pips elk = 8 totale waarschijnlijkheid) plus enige brontoegang is gelijk aan ongeveer 13 pip-equivalenten, wat de meeste 2:1 havenvoordelen overtreft tenzij je uitzonderlijke basisproductie hebt."
        }
      },
      {
        question: {
          en: "In longest road competition, when should you build defensively?",
          es: "En la competencia del camino más largo, ¿cuándo debes construir defensivamente?",
          de: "Wann sollte man im Wettbewerb um die längste Straße defensiv bauen?",
          nl: "Wanneer moet je defensief bouwen in de langste weg competitie?"
        },
        options: [
          { en: "When opponent is 1-2 roads from tying/breaking your lead", es: "Cuando el oponente está a 1-2 carreteras de empatar/romper tu ventaja", de: "Wenn Gegner 1-2 Straßen vom Gleichziehen/Überholen entfernt ist", nl: "Wanneer tegenstander 1-2 wegen verwijderd is van gelijkspel/doorbreken van je voorsprong" },
          { en: "At the start of every turn", es: "Al inicio de cada turno", de: "Zu Beginn jedes Zuges", nl: "Aan het begin van elke beurt" },
          { en: "Only after losing longest road", es: "Solo después de perder el camino más largo", de: "Nur nach Verlust der längsten Straße", nl: "Alleen na verlies van langste weg" },
          { en: "Never, always build offensively", es: "Nunca, siempre construir ofensivamente", de: "Nie, immer offensiv bauen", nl: "Nooit, altijd offensief bouwen" }
        ],
        correct: 0,
        explanation: {
          en: "Defensive road building (blocking opponent intersections) becomes critical when opponents approach within 1-2 roads of matching or exceeding your length. This prevents them from easily extending while you solidify your position.",
          es: "La construcción defensiva de carreteras (bloquear intersecciones de oponentes) se vuelve crítica cuando los oponentes se acercan a 1-2 carreteras de igualar o exceder tu longitud. Esto les impide extenderse fácilmente mientras solidificas tu posición.",
          de: "Defensiver Straßenbau (Blockieren von Kreuzungen der Gegner) wird kritisch, wenn Gegner sich auf 1-2 Straßen nähern, um Ihre Länge zu erreichen oder zu übertreffen. Dies verhindert eine einfache Erweiterung, während Sie Ihre Position festigen.",
          nl: "Defensieve wegenbouw (tegenstander kruisingen blokkeren) wordt kritiek wanneer tegenstanders binnen 1-2 wegen komen van het evenaren of overtreffen van je lengte. Dit voorkomt dat ze gemakkelijk uitbreiden terwijl jij je positie verstevigt."
        }
      },
      {
        question: {
          en: "What is the 'wheat-ore' opening strategy weakness?",
          es: "¿Cuál es la debilidad de la estrategia de apertura 'trigo-mineral'?",
          de: "Was ist die Schwäche der 'Weizen-Erz'-Eröffnungsstrategie?",
          nl: "Wat is de zwakte van de 'tarwe-erts' openingsstrategie?"
        },
        options: [
          { en: "Vulnerable to robber and slow initial expansion", es: "Vulnerable al ladrón y expansión inicial lenta", de: "Anfällig für Räuber und langsame anfängliche Expansion", nl: "Kwetsbaar voor rover en trage initiële expansie" },
          { en: "Too many victory points early", es: "Demasiados puntos de victoria temprano", de: "Zu viele Siegpunkte früh", nl: "Te veel overwinningspunten vroeg" },
          { en: "Guaranteed longest road advantage", es: "Ventaja garantizada del camino más largo", de: "Garantierter Vorteil der längsten Straße", nl: "Gegarandeerd langste weg voordeel" },
          { en: "Excessive brick production", es: "Producción excesiva de ladrillo", de: "Übermäßige Ziegelproduktion", nl: "Overmatige baksteen productie" }
        ],
        correct: 0,
        explanation: {
          en: "The wheat-ore strategy (focusing on cities and development cards) is powerful but has two key weaknesses: settlements on high-value wheat/ore hexes attract the robber, and lack of brick/lumber slows early road and settlement expansion, allowing opponents to claim key positions.",
          es: "La estrategia trigo-mineral (enfocándose en ciudades y cartas de desarrollo) es poderosa pero tiene dos debilidades clave: los asentamientos en hexágonos de trigo/mineral de alto valor atraen al ladrón, y la falta de ladrillo/madera ralentiza la expansión temprana de carreteras y asentamientos, permitiendo a los oponentes reclamar posiciones clave.",
          de: "Die Weizen-Erz-Strategie (Fokus auf Städte und Entwicklungskarten) ist mächtig, hat aber zwei Hauptschwächen: Siedlungen auf hochwertigen Weizen-/Erzhexen ziehen den Räuber an, und der Mangel an Ziegel/Holz verlangsamt die frühe Straßen- und Siedlungserweiterung, sodass Gegner Schlüsselpositionen beanspruchen können.",
          nl: "De tarwe-erts strategie (focus op steden en ontwikkelingskaarten) is krachtig maar heeft twee belangrijke zwaktes: nederzettingen op hoogwaardige tarwe/erts hexen trekken de rover aan, en gebrek aan baksteen/hout vertraagt vroege weg- en nederzettingsuitbreiding, waardoor tegenstanders sleutelposities kunnen claimen."
        }
      },
      {
        question: {
          en: "How many pips should an ideal starting settlement location total?",
          es: "¿Cuántos pips debe totalizar una ubicación ideal de asentamiento inicial?",
          de: "Wie viele Pips sollte ein idealer Startsiedlungsstandort insgesamt haben?",
          nl: "Hoeveel pips moet een ideale beginnederzettingslocatie in totaal hebben?"
        },
        options: [
          { en: "10-13 pips with resource diversity", es: "10-13 pips con diversidad de recursos", de: "10-13 Pips mit Ressourcenvielfalt", nl: "10-13 pips met brondiversiteit" },
          { en: "6-8 pips maximum", es: "6-8 pips máximo", de: "6-8 Pips maximal", nl: "6-8 pips maximum" },
          { en: "15+ pips regardless of resources", es: "15+ pips independientemente de los recursos", de: "15+ Pips unabhängig von Ressourcen", nl: "15+ pips ongeacht bronnen" },
          { en: "All resources on 6s and 8s only", es: "Todos los recursos solo en 6s y 8s", de: "Alle Ressourcen nur auf 6en und 8en", nl: "Alle bronnen alleen op 6'en en 8'en" }
        ],
        correct: 0,
        explanation: {
          en: "Expert players target 10-13 total pips (probability dots) for initial settlements while ensuring access to at least 4 different resources. This balances high production probability with strategic flexibility. Pure pip-chasing without diversity leads to trading inefficiency.",
          es: "Los jugadores expertos apuntan a 10-13 pips totales (puntos de probabilidad) para asentamientos iniciales mientras aseguran acceso a al menos 4 recursos diferentes. Esto equilibra alta probabilidad de producción con flexibilidad estratégica. Perseguir solo pips sin diversidad conduce a ineficiencia comercial.",
          de: "Experten zielen auf 10-13 Gesamt-Pips (Wahrscheinlichkeitspunkte) für anfängliche Siedlungen ab und stellen gleichzeitig den Zugang zu mindestens 4 verschiedenen Ressourcen sicher. Dies gleicht hohe Produktionswahrscheinlichkeit mit strategischer Flexibilität aus. Reines Pip-Jagen ohne Vielfalt führt zu Handelseffizienz.",
          nl: "Expertspelers richten zich op 10-13 totale pips (waarschijnlijkheidspunten) voor initiële nederzettingen terwijl ze toegang tot ten minste 4 verschillende bronnen verzekeren. Dit balanceert hoge productiewaarschijnlijkheid met strategische flexibiliteit. Puur pips najagen zonder diversiteit leidt tot handelsinefficiëntie."
        }
      },
      {
        question: {
          en: "When should you play a monopoly card for maximum value?",
          es: "¿Cuándo debes jugar una carta de monopolio para obtener el máximo valor?",
          de: "Wann sollte man eine Monopolkarte für maximalen Wert spielen?",
          nl: "Wanneer moet je een monopoliekaart spelen voor maximale waarde?"
        },
        options: [
          { en: "After observing trades and before building phase", es: "Después de observar intercambios y antes de la fase de construcción", de: "Nach Beobachtung von Geschäften und vor der Bauphase", nl: "Na observatie van handel en voor bouwfase" },
          { en: "Immediately when drawn", es: "Inmediatamente cuando se roba", de: "Sofort nach dem Ziehen", nl: "Direct wanneer getrokken" },
          { en: "Only on last turn before winning", es: "Solo en el último turno antes de ganar", de: "Nur im letzten Zug vor dem Sieg", nl: "Alleen in laatste beurt voor winnen" },
          { en: "When you have 7+ cards yourself", es: "Cuando tú mismo tienes 7+ cartas", de: "Wenn man selbst 7+ Karten hat", nl: "Wanneer je zelf 7+ kaarten hebt" }
        ],
        correct: 0,
        explanation: {
          en: "Monopoly cards are most effective when played after observing which resources opponents are collecting through trades, and just before your building phase. This maximizes cards gained and immediately converts them to victory points or strategic advantage.",
          es: "Las cartas de monopolio son más efectivas cuando se juegan después de observar qué recursos están recolectando los oponentes a través de intercambios, y justo antes de tu fase de construcción. Esto maximiza las cartas ganadas e inmediatamente las convierte en puntos de victoria o ventaja estratégica.",
          de: "Monopolkarten sind am effektivsten, wenn sie nach Beobachtung der Ressourcen, die Gegner durch Handel sammeln, und kurz vor der eigenen Bauphase gespielt werden. Dies maximiert gewonnene Karten und wandelt sie sofort in Siegpunkte oder strategische Vorteile um.",
          nl: "Monopoliekaarten zijn het meest effectief wanneer gespeeld na observatie van welke bronnen tegenstanders verzamelen door handel, en net voor je bouwfase. Dit maximaliseert verkregen kaarten en converteert ze direct naar overwinningspunten of strategisch voordeel."
        }
      },
      {
        question: {
          en: "What is the 'ore monopoly' endgame strategy?",
          es: "¿Cuál es la estrategia de 'monopolio de mineral' en el final del juego?",
          de: "Was ist die 'Erz-Monopol'-Endspielstrategie?",
          nl: "Wat is de 'erts monopolie' eindspelstrategie?"
        },
        options: [
          { en: "Control ore production and deny city upgrades to opponents", es: "Controlar la producción de mineral y negar mejoras de ciudad a los oponentes", de: "Erzproduktion kontrollieren und Stadtaufwertungen für Gegner verhindern", nl: "Ertsproductie controleren en stadsupgrades aan tegenstanders ontzeggen" },
          { en: "Trade all ore for sheep immediately", es: "Cambiar todo el mineral por ovejas inmediatamente", de: "Alles Erz sofort gegen Schafe tauschen", nl: "Al het erts direct voor schapen ruilen" },
          { en: "Build only roads with ore", es: "Construir solo carreteras con mineral", de: "Nur Straßen mit Erz bauen", nl: "Alleen wegen bouwen met erts" },
          { en: "Discard ore to stay under 7 cards", es: "Descartar mineral para quedarse por debajo de 7 cartas", de: "Erz abwerfen, um unter 7 Karten zu bleiben", nl: "Erts weggooien om onder 7 kaarten te blijven" }
        ],
        correct: 0,
        explanation: {
          en: "In late game, controlling ore production (and wheat) can create a chokehold where you can build cities while opponents are stuck with settlements. This 2-point-per-city advantage can be decisive, especially when combined with refusing to trade ore.",
          es: "En el final del juego, controlar la producción de mineral (y trigo) puede crear un estrangulamiento donde puedes construir ciudades mientras los oponentes están atascados con asentamientos. Esta ventaja de 2 puntos por ciudad puede ser decisiva, especialmente cuando se combina con rechazar intercambiar mineral.",
          de: "Im Endspiel kann die Kontrolle der Erzproduktion (und Weizen) eine Blockade schaffen, bei der man Städte bauen kann, während Gegner bei Siedlungen stecken bleiben. Dieser 2-Punkte-pro-Stadt-Vorteil kann entscheidend sein, besonders in Kombination mit der Weigerung, Erz zu handeln.",
          nl: "In het late spel kan het controleren van ertsproductie (en tarwe) een wurggreep creëren waarbij jij steden kunt bouwen terwijl tegenstanders vastzitten met nederzettingen. Dit 2-punten-per-stad voordeel kan beslissend zijn, vooral in combinatie met weigering om erts te ruilen."
        }
      },
      {
        question: {
          en: "How does the '5-4 split' settlement strategy work?",
          es: "¿Cómo funciona la estrategia de asentamiento 'división 5-4'?",
          de: "Wie funktioniert die '5-4-Split'-Siedlungsstrategie?",
          nl: "Hoe werkt de '5-4 split' nederzettingsstrategie?"
        },
        options: [
          { en: "Place on 5-4-X to get complementary high-frequency rolls", es: "Colocar en 5-4-X para obtener tiradas complementarias de alta frecuencia", de: "Auf 5-4-X platzieren, um komplementäre häufige Würfe zu erhalten", nl: "Plaatsen op 5-4-X om complementaire hoogfrequente worpen te krijgen" },
          { en: "Build 5 settlements and 4 cities", es: "Construir 5 asentamientos y 4 ciudades", de: "5 Siedlungen und 4 Städte bauen", nl: "5 nederzettingen en 4 steden bouwen" },
          { en: "Split resources 5 ways and harbor 4", es: "Dividir recursos en 5 formas y puerto 4", de: "Ressourcen 5-fach aufteilen und Hafen 4", nl: "Bronnen 5 manieren splitsen en haven 4" },
          { en: "Trade at 5:4 ratio only", es: "Comerciar solo en proporción 5:4", de: "Nur im Verhältnis 5:4 handeln", nl: "Alleen op 5:4 ratio ruilen" }
        ],
        correct: 0,
        explanation: {
          en: "The 5-4 split involves placing settlements on intersections with 5 and 4 number tokens, which appear with 8 combined probability (4+4 pips). This creates consistent production as these numbers hit frequently throughout the game.",
          es: "La división 5-4 implica colocar asentamientos en intersecciones con fichas de número 5 y 4, que aparecen con 8 de probabilidad combinada (4+4 pips). Esto crea una producción consistente ya que estos números aparecen frecuentemente durante el juego.",
          de: "Der 5-4-Split beinhaltet das Platzieren von Siedlungen an Kreuzungen mit 5- und 4-Zahlenplättchen, die mit 8 kombinierter Wahrscheinlichkeit (4+4 Pips) erscheinen. Dies schafft eine konsistente Produktion, da diese Zahlen während des Spiels häufig getroffen werden.",
          nl: "De 5-4 split houdt in dat nederzettingen worden geplaatst op kruispunten met 5 en 4 nummerfiches, die verschijnen met 8 gecombineerde waarschijnlijkheid (4+4 pips). Dit creëert consistente productie omdat deze nummers vaak voorkomen gedurende het spel."
        }
      },
      {
        question: {
          en: "What is the key advantage of building toward a 2:1 brick harbor?",
          es: "¿Cuál es la ventaja clave de construir hacia un puerto de ladrillo 2:1?",
          de: "Was ist der Hauptvorteil beim Bauen zu einem 2:1-Ziegelhafen?",
          nl: "Wat is het belangrijkste voordeel van bouwen richting een 2:1 baksteenhaven?"
        },
        options: [
          { en: "Enables rapid road expansion and longest road control", es: "Permite expansión rápida de carreteras y control del camino más largo", de: "Ermöglicht schnelle Straßenexpansion und Kontrolle der längsten Straße", nl: "Maakt snelle weguitbreiding en langste weg controle mogelijk" },
          { en: "Guarantees largest army victory", es: "Garantiza victoria del ejército más grande", de: "Garantiert Sieg der größten Armee", nl: "Garandeert grootste leger overwinning" },
          { en: "Prevents robber attacks completely", es: "Previene ataques de ladrón completamente", de: "Verhindert Räuberangriffe vollständig", nl: "Voorkomt roveraanvallen volledig" },
          { en: "Provides 3 victory points directly", es: "Proporciona 3 puntos de victoria directamente", de: "Liefert direkt 3 Siegpunkte", nl: "Geeft direct 3 overwinningspunten" }
        ],
        correct: 0,
        explanation: {
          en: "A 2:1 brick harbor combined with good brick production allows you to build roads at half the normal lumber cost. This enables aggressive expansion to claim new settlement spots and makes longest road achievement much easier.",
          es: "Un puerto de ladrillo 2:1 combinado con buena producción de ladrillo te permite construir carreteras a la mitad del costo normal de madera. Esto permite una expansión agresiva para reclamar nuevos lugares de asentamiento y hace que el logro del camino más largo sea mucho más fácil.",
          de: "Ein 2:1-Ziegelhafen in Kombination mit guter Ziegelproduktion ermöglicht den Bau von Straßen zu halben normalen Holzkosten. Dies ermöglicht aggressive Expansion, um neue Siedlungsplätze zu beanspruchen, und macht die Erreichung der längsten Straße viel einfacher.",
          nl: "Een 2:1 baksteenhaven gecombineerd met goede baksteen productie stelt je in staat wegen te bouwen voor de helft van de normale houtkosten. Dit maakt agressieve expansie mogelijk om nieuwe nederzettingsplekken te claimen en maakt langste weg prestatie veel gemakkelijker."
        }
      },
      {
        question: {
          en: "What is 'robber timing' in competitive play?",
          es: "¿Qué es el 'tiempo del ladrón' en el juego competitivo?",
          de: "Was ist 'Räuber-Timing' im Wettkampfspiel?",
          nl: "Wat is 'rover timing' in competitief spel?"
        },
        options: [
          { en: "Placing robber just before opponent's planned build turn", es: "Colocar al ladrón justo antes del turno de construcción planeado del oponente", de: "Räuber kurz vor dem geplanten Bauzug des Gegners platzieren", nl: "Rover plaatsen net voor geplande bouwbeurt van tegenstander" },
          { en: "Moving robber every turn automatically", es: "Mover al ladrón automáticamente cada turno", de: "Räuber jeden Zug automatisch bewegen", nl: "Rover elke beurt automatisch verplaatsen" },
          { en: "Keeping robber in desert always", es: "Mantener al ladrón en el desierto siempre", de: "Räuber immer in der Wüste halten", nl: "Rover altijd in woestijn houden" },
          { en: "Rolling 7 intentionally with dice control", es: "Sacar 7 intencionalmente con control de dados", de: "Absichtlich 7 würfeln mit Würfelkontrolle", nl: "Opzettelijk 7 gooien met dobbelsteencontrole" }
        ],
        correct: 0,
        explanation: {
          en: "Advanced players track opponents' resource accumulation and card counts. Placing the robber on a crucial hex just before an opponent planned to build (often visible when they have 7+ cards) denies them the resources needed and disrupts their strategy timing.",
          es: "Los jugadores avanzados rastrean la acumulación de recursos y conteo de cartas de los oponentes. Colocar al ladrón en un hexágono crucial justo antes de que un oponente planeara construir (a menudo visible cuando tienen 7+ cartas) les niega los recursos necesarios e interrumpe el tiempo de su estrategia.",
          de: "Fortgeschrittene Spieler verfolgen die Ressourcenanhäufung und Kartenzählungen der Gegner. Das Platzieren des Räubers auf einem entscheidenden Hex kurz bevor ein Gegner bauen wollte (oft sichtbar bei 7+ Karten) verweigert ihm die benötigten Ressourcen und stört sein strategisches Timing.",
          nl: "Geavanceerde spelers volgen de bronverzameling en kaartaantallen van tegenstanders. De rover plaatsen op een cruciale hex net voordat een tegenstander wilde bouwen (vaak zichtbaar wanneer ze 7+ kaarten hebben) ontzegt hen de benodigde bronnen en verstoort hun strategietiming."
        }
      },
      {
        question: {
          en: "How many development cards should you aim to buy in a city-focused strategy?",
          es: "¿Cuántas cartas de desarrollo debes intentar comprar en una estrategia centrada en ciudades?",
          de: "Wie viele Entwicklungskarten sollte man in einer stadtorientierten Strategie kaufen?",
          nl: "Hoeveel ontwikkelingskaarten moet je proberen te kopen in een stad-gefocuste strategie?"
        },
        options: [
          { en: "5-7 cards for largest army and victory points", es: "5-7 cartas para ejército más grande y puntos de victoria", de: "5-7 Karten für größte Armee und Siegpunkte", nl: "5-7 kaarten voor grootste leger en overwinningspunten" },
          { en: "1-2 cards maximum to avoid waste", es: "1-2 cartas máximo para evitar desperdicio", de: "1-2 Karten maximal um Verschwendung zu vermeiden", nl: "1-2 kaarten maximum om verspilling te voorkomen" },
          { en: "All 25 cards from the deck", es: "Las 25 cartas del mazo", de: "Alle 25 Karten aus dem Deck", nl: "Alle 25 kaarten uit het deck" },
          { en: "Never buy development cards with cities", es: "Nunca comprar cartas de desarrollo con ciudades", de: "Niemals Entwicklungskarten mit Städten kaufen", nl: "Nooit ontwikkelingskaarten kopen met steden" }
        ],
        correct: 0,
        explanation: {
          en: "In a city strategy, purchasing 5-7 development cards optimizes the chance of obtaining largest army (2 points) and 1-2 victory point cards while providing knights for robber defense. More than 7 risks resource inefficiency; fewer reduces your competitive edge.",
          es: "En una estrategia de ciudades, comprar 5-7 cartas de desarrollo optimiza la posibilidad de obtener el ejército más grande (2 puntos) y 1-2 cartas de puntos de victoria mientras proporciona caballeros para la defensa contra el ladrón. Más de 7 arriesga ineficiencia de recursos; menos reduce tu ventaja competitiva.",
          de: "In einer Stadtstrategie optimiert der Kauf von 5-7 Entwicklungskarten die Chance, die größte Armee (2 Punkte) und 1-2 Siegpunktkarten zu erhalten, während Ritter zur Räuberabwehr bereitgestellt werden. Mehr als 7 riskiert Ressourcenineffizienz; weniger reduziert Ihren Wettbewerbsvorteil.",
          nl: "In een stadsstrategie optimaliseert het kopen van 5-7 ontwikkelingskaarten de kans op het verkrijgen van grootste leger (2 punten) en 1-2 overwinningspuntkaarten terwijl ridders voor roververdediging worden verstrekt. Meer dan 7 riskeert broneninefficiëntie; minder vermindert je competitief voordeel."
        }
      },
      {
        question: {
          en: "What is the 'settlement blocking' tactic?",
          es: "¿Qué es la táctica de 'bloqueo de asentamiento'?",
          de: "Was ist die 'Siedlungsblockierungs'-Taktik?",
          nl: "Wat is de 'nederzettingsblokkering' tactiek?"
        },
        options: [
          { en: "Building settlements 2 spaces from opponents' strong positions", es: "Construir asentamientos a 2 espacios de las posiciones fuertes de los oponentes", de: "Siedlungen 2 Felder von starken Positionen der Gegner bauen", nl: "Nederzettingen bouwen op 2 vakjes van sterke posities van tegenstanders" },
          { en: "Never building any settlements", es: "Nunca construir ningún asentamiento", de: "Niemals Siedlungen bauen", nl: "Nooit nederzettingen bouwen" },
          { en: "Building only cities, no settlements", es: "Construir solo ciudades, sin asentamientos", de: "Nur Städte bauen, keine Siedlungen", nl: "Alleen steden bouwen, geen nederzettingen" },
          { en: "Placing robber on settlement hexes", es: "Colocar al ladrón en hexágonos de asentamiento", de: "Räuber auf Siedlungshexe platzieren", nl: "Rover op nederzettingshexen plaatsen" }
        ],
        correct: 0,
        explanation: {
          en: "Settlement blocking involves building settlements exactly 2 road segments away from an opponent's settlement or city. This prevents them from expanding in that direction due to the spacing rule, effectively 'closing off' their expansion options.",
          es: "El bloqueo de asentamiento implica construir asentamientos exactamente a 2 segmentos de carretera de distancia del asentamiento o ciudad de un oponente. Esto les impide expandirse en esa dirección debido a la regla de espaciado, efectivamente 'cerrando' sus opciones de expansión.",
          de: "Siedlungsblockierung beinhaltet den Bau von Siedlungen genau 2 Straßensegmente von einer gegnerischen Siedlung oder Stadt entfernt. Dies verhindert ihre Expansion in diese Richtung aufgrund der Abstandsregel und 'schließt' effektiv ihre Expansionsoptionen.",
          nl: "Nederzettingsblokkering houdt in het bouwen van nederzettingen precies 2 wegsegmenten verwijderd van een nederzetting of stad van een tegenstander. Dit voorkomt dat ze in die richting uitbreiden vanwege de afstandsregel, effectief hun uitbreidingsopties 'afsluitend'."
        }
      },
      {
        question: {
          en: "When is the Year of Plenty card most valuable?",
          es: "¿Cuándo es más valiosa la carta de Año de Abundancia?",
          de: "Wann ist die Karte 'Jahr des Überflusses' am wertvollsten?",
          nl: "Wanneer is de Jaar van Overvloed kaart het meest waardevol?"
        },
        options: [
          { en: "To complete exact resources for game-winning build", es: "Para completar recursos exactos para construcción ganadora del juego", de: "Um exakte Ressourcen für spielgewinnenden Bau zu vervollständigen", nl: "Om exacte bronnen voor spelwinnende bouw te voltooien" },
          { en: "On your first turn of the game", es: "En tu primer turno del juego", de: "In Ihrem ersten Spielzug", nl: "In je eerste beurt van het spel" },
          { en: "To gain any two random resources early", es: "Para ganar dos recursos aleatorios temprano", de: "Um früh zwei zufällige Ressourcen zu erhalten", nl: "Om vroeg twee willekeurige bronnen te krijgen" },
          { en: "When you have maximum hand size", es: "Cuando tienes el tamaño máximo de mano", de: "Wenn Sie maximale Handgröße haben", nl: "Wanneer je maximale handgrootte hebt" }
        ],
        correct: 0,
        explanation: {
          en: "Year of Plenty should be saved for the critical moment when you need exactly 2 specific resources to build the settlement, city, or development card that wins the game. Using it earlier for general resources wastes its strategic surprise value.",
          es: "El Año de Abundancia debe guardarse para el momento crítico cuando necesitas exactamente 2 recursos específicos para construir el asentamiento, ciudad o carta de desarrollo que gana el juego. Usarlo antes para recursos generales desperdicia su valor de sorpresa estratégica.",
          de: "Jahr des Überflusses sollte für den kritischen Moment aufgehoben werden, wenn man genau 2 spezifische Ressourcen benötigt, um die Siedlung, Stadt oder Entwicklungskarte zu bauen, die das Spiel gewinnt. Frühere Verwendung für allgemeine Ressourcen verschwendet seinen strategischen Überraschungswert.",
          nl: "Jaar van Overvloed moet worden bewaard voor het kritieke moment wanneer je precies 2 specifieke bronnen nodig hebt om de nederzetting, stad of ontwikkelingskaart te bouwen die het spel wint. Het eerder gebruiken voor algemene bronnen verspilt de strategische verrassingswaarde."
        }
      },
      {
        question: {
          en: "What defines a 'balanced' opening settlement placement?",
          es: "¿Qué define una colocación de asentamiento de apertura 'equilibrada'?",
          de: "Was definiert eine 'ausgewogene' Eröffnungs-Siedlungsplatzierung?",
          nl: "Wat definieert een 'gebalanceerde' opening nederzettingsplaatsing?"
        },
        options: [
          { en: "Access to 4-5 resource types with 10+ combined pips", es: "Acceso a 4-5 tipos de recursos con 10+ pips combinados", de: "Zugang zu 4-5 Ressourcentypen mit 10+ kombinierten Pips", nl: "Toegang tot 4-5 brontypes met 10+ gecombineerde pips" },
          { en: "All settlements on 6s and 8s only", es: "Todos los asentamientos solo en 6s y 8s", de: "Alle Siedlungen nur auf 6en und 8en", nl: "Alle nederzettingen alleen op 6'en en 8'en" },
          { en: "Maximum 2 resource types total", es: "Máximo 2 tipos de recursos totales", de: "Maximal 2 Ressourcentypen insgesamt", nl: "Maximum 2 brontypes totaal" },
          { en: "All placements on harbor spots", es: "Todas las colocaciones en lugares de puerto", de: "Alle Platzierungen auf Hafenplätzen", nl: "Alle plaatsingen op havenplekken" }
        ],
        correct: 0,
        explanation: {
          en: "A balanced opening provides access to 4-5 different resources (ensuring flexibility) with at least 10 combined probability pips (ensuring production). This prevents early trading dependency while maintaining enough productivity to expand quickly.",
          es: "Una apertura equilibrada proporciona acceso a 4-5 recursos diferentes (asegurando flexibilidad) con al menos 10 pips de probabilidad combinados (asegurando producción). Esto previene la dependencia temprana del comercio mientras mantiene suficiente productividad para expandirse rápidamente.",
          de: "Eine ausgewogene Eröffnung bietet Zugang zu 4-5 verschiedenen Ressourcen (Gewährleistung von Flexibilität) mit mindestens 10 kombinierten Wahrscheinlichkeits-Pips (Gewährleistung von Produktion). Dies verhindert frühe Handelsabhängigkeit bei gleichzeitiger ausreichender Produktivität für schnelle Expansion.",
          nl: "Een gebalanceerde opening biedt toegang tot 4-5 verschillende bronnen (flexibiliteit verzekeren) met ten minste 10 gecombineerde waarschijnlijkheidspips (productie verzekeren). Dit voorkomt vroege handelsafhankelijkheid terwijl voldoende productiviteit wordt gehandhaafd om snel uit te breiden."
        }
      },
      {
        question: {
          en: "How should you respond to an early largest army race?",
          es: "¿Cómo debes responder a una carrera temprana del ejército más grande?",
          de: "Wie sollte man auf ein frühes größtes-Armee-Rennen reagieren?",
          nl: "Hoe moet je reageren op een vroege grootste leger race?"
        },
        options: [
          { en: "Build settlements/cities instead if not leading the race", es: "Construir asentamientos/ciudades en su lugar si no lideras la carrera", de: "Stattdessen Siedlungen/Städte bauen, wenn nicht führend im Rennen", nl: "Nederzettingen/steden bouwen als je de race niet leidt" },
          { en: "Always match every knight played", es: "Siempre igualar cada caballero jugado", de: "Immer jeden gespielten Ritter angleichen", nl: "Altijd elke gespeelde ridder matchen" },
          { en: "Immediately buy 10 development cards", es: "Inmediatamente comprar 10 cartas de desarrollo", de: "Sofort 10 Entwicklungskarten kaufen", nl: "Direct 10 ontwikkelingskaarten kopen" },
          { en: "Stop all other building completely", es: "Detener toda otra construcción completamente", de: "Alle anderen Bauarbeiten vollständig stoppen", nl: "Stop alle andere bouw volledig" }
        ],
        correct: 0,
        explanation: {
          en: "If you're not leading the largest army race early on, it's often more efficient to focus on settlements and cities (guaranteed points) rather than competing for a bonus you might not win. The player leading the army race must invest heavily while you gain certain victory points.",
          es: "Si no estás liderando la carrera del ejército más grande temprano, a menudo es más eficiente concentrarse en asentamientos y ciudades (puntos garantizados) en lugar de competir por un bono que podrías no ganar. El jugador que lidera la carrera del ejército debe invertir mucho mientras tú ganas puntos de victoria seguros.",
          de: "Wenn man das größte-Armee-Rennen nicht früh anführt, ist es oft effizienter, sich auf Siedlungen und Städte (garantierte Punkte) zu konzentrieren, anstatt um einen Bonus zu konkurrieren, den man möglicherweise nicht gewinnt. Der Spieler, der das Armeerennen anführt, muss stark investieren, während man sichere Siegpunkte gewinnt.",
          nl: "Als je de grootste leger race niet vroeg leidt, is het vaak efficiënter om te focussen op nederzettingen en steden (gegarandeerde punten) in plaats van te concurreren voor een bonus die je misschien niet wint. De speler die de leger race leidt moet zwaar investeren terwijl jij zekere overwinningspunten behaalt."
        }
      },
      {
        question: {
          en: "What is the 'double city' opening weakness?",
          es: "¿Cuál es la debilidad de la apertura de 'doble ciudad'?",
          de: "Was ist die Schwäche der 'Doppelstadt'-Eröffnung?",
          nl: "Wat is de zwakte van de 'dubbele stad' opening?"
        },
        options: [
          { en: "Slow expansion and vulnerability to robber with fewer hexes controlled", es: "Expansión lenta y vulnerabilidad al ladrón con menos hexágonos controlados", de: "Langsame Expansion und Anfälligkeit für Räuber mit weniger kontrollierten Hexen", nl: "Trage expansie en kwetsbaarheid voor rover met minder gecontroleerde hexen" },
          { en: "Too many victory points too quickly", es: "Demasiados puntos de victoria demasiado rápido", de: "Zu viele Siegpunkte zu schnell", nl: "Te veel overwinningspunten te snel" },
          { en: "Requires too much lumber and brick", es: "Requiere demasiada madera y ladrillo", de: "Erfordert zu viel Holz und Ziegel", nl: "Vereist te veel hout en baksteen" },
          { en: "Guarantees longest road loss", es: "Garantiza pérdida del camino más largo", de: "Garantiert Verlust der längsten Straße", nl: "Garandeert verlies van langste weg" }
        ],
        correct: 0,
        explanation: {
          en: "Rushing to upgrade both initial settlements to cities quickly gives you 4 points but leaves you controlling only 6 hexes instead of 9-12. This makes you vulnerable to the robber and limits resource diversity, while opponents expand their presence.",
          es: "Apresurarse a mejorar ambos asentamientos iniciales a ciudades rápidamente te da 4 puntos pero te deja controlando solo 6 hexágonos en lugar de 9-12. Esto te hace vulnerable al ladrón y limita la diversidad de recursos, mientras los oponentes expanden su presencia.",
          de: "Das schnelle Aufwerten beider anfänglichen Siedlungen zu Städten gibt Ihnen 4 Punkte, lässt Sie aber nur 6 Hexe statt 9-12 kontrollieren. Dies macht Sie anfällig für den Räuber und begrenzt die Ressourcenvielfalt, während Gegner ihre Präsenz ausbauen.",
          nl: "Haasten om beide initiële nederzettingen snel naar steden te upgraden geeft je 4 punten maar laat je slechts 6 hexen controleren in plaats van 9-12. Dit maakt je kwetsbaar voor de rover en beperkt brondiversiteit, terwijl tegenstanders hun aanwezigheid uitbreiden."
        }
      },
      {
        question: {
          en: "What is optimal road building card timing?",
          es: "¿Cuál es el tiempo óptimo de la carta de construcción de carreteras?",
          de: "Was ist das optimale Timing der Straßenbaukarte?",
          nl: "Wat is de optimale weg bouw kaart timing?"
        },
        options: [
          { en: "To claim last settlement spot or secure longest road", es: "Para reclamar el último lugar de asentamiento o asegurar el camino más largo", de: "Um letzten Siedlungsplatz zu beanspruchen oder längste Straße zu sichern", nl: "Om laatste nederzettingsplek te claimen of langste weg te verzekeren" },
          { en: "Immediately when drawn to surprise opponents", es: "Inmediatamente cuando se roba para sorprender a los oponentes", de: "Sofort nach dem Ziehen um Gegner zu überraschen", nl: "Direct wanneer getrokken om tegenstanders te verrassen" },
          { en: "Only in the first 3 turns of the game", es: "Solo en los primeros 3 turnos del juego", de: "Nur in den ersten 3 Zügen des Spiels", nl: "Alleen in de eerste 3 beurten van het spel" },
          { en: "When you have no other cards to play", es: "Cuando no tienes otras cartas para jugar", de: "Wenn Sie keine anderen Karten zum Spielen haben", nl: "Wanneer je geen andere kaarten hebt om te spelen" }
        ],
        correct: 0,
        explanation: {
          en: "Road building cards are most valuable when used decisively: either to reach the final contested settlement location before opponents, or to instantly claim/extend longest road. Using them earlier for general expansion wastes their tactical surprise element.",
          es: "Las cartas de construcción de carreteras son más valiosas cuando se usan de manera decisiva: ya sea para alcanzar la ubicación final de asentamiento en disputa antes que los oponentes, o para reclamar/extender instantáneamente el camino más largo. Usarlas antes para expansión general desperdicia su elemento de sorpresa táctica.",
          de: "Straßenbaukarten sind am wertvollsten, wenn sie entscheidend eingesetzt werden: entweder um den letzten umkämpften Siedlungsort vor Gegnern zu erreichen, oder um sofort die längste Straße zu beanspruchen/verlängern. Ihre frühere Verwendung für allgemeine Expansion verschwendet ihr taktisches Überraschungselement.",
          nl: "Wegbouwkaarten zijn het meest waardevol wanneer beslissend gebruikt: ofwel om de laatste betwiste nederzettingslocatie voor tegenstanders te bereiken, of om direct langste weg te claimen/verlengen. Ze eerder gebruiken voor algemene expansie verspilt hun tactische verrassingselement."
        }
      },
      {
        question: {
          en: "How many total roads do you need to guarantee longest road in a 4-player game?",
          es: "¿Cuántos caminos totales necesitas para garantizar el camino más largo en un juego de 4 jugadores?",
          de: "Wie viele Gesamtstraßen benötigen Sie, um die längste Straße in einem 4-Spieler-Spiel zu garantieren?",
          nl: "Hoeveel totale wegen heb je nodig om langste weg te garanderen in een 4-speler spel?"
        },
        options: [
          { en: "7-9 roads depending on opponent builds", es: "7-9 carreteras dependiendo de las construcciones de los oponentes", de: "7-9 Straßen abhängig von Gegnerbauten", nl: "7-9 wegen afhankelijk van tegenstander builds" },
          { en: "Exactly 5 roads always", es: "Exactamente 5 carreteras siempre", de: "Genau 5 Straßen immer", nl: "Precies 5 wegen altijd" },
          { en: "15 roads to be completely safe", es: "15 carreteras para estar completamente seguro", de: "15 Straßen um völlig sicher zu sein", nl: "15 wegen om volledig veilig te zijn" },
          { en: "3 roads minimum requirement", es: "3 carreteras requisito mínimo", de: "3 Straßen Mindestanforderung", nl: "3 wegen minimum vereiste" }
        ],
        correct: 0,
        explanation: {
          en: "While 5 roads is the minimum for longest road, competitive games typically require 7-9 continuous roads to maintain the lead. This accounts for opponents' expansion and potential road building cards. The exact number depends on board layout and opponent strategies.",
          es: "Mientras que 5 carreteras es el mínimo para el camino más largo, los juegos competitivos típicamente requieren 7-9 carreteras continuas para mantener el liderazgo. Esto tiene en cuenta la expansión de los oponentes y las posibles cartas de construcción de carreteras. El número exacto depende del diseño del tablero y las estrategias de los oponentes.",
          de: "Während 5 Straßen das Minimum für die längste Straße sind, erfordern Wettkampfspiele typischerweise 7-9 durchgehende Straßen, um die Führung zu halten. Dies berücksichtigt die Expansion der Gegner und potenzielle Straßenbaukarten. Die genaue Anzahl hängt vom Spielplan und den Gegnerstrategien ab.",
          nl: "Hoewel 5 wegen het minimum is voor langste weg, vereisen competitieve spellen typisch 7-9 doorlopende wegen om de voorsprong te behouden. Dit houdt rekening met tegenstanders' expansie en potentiële wegbouwkaarten. Het exacte aantal hangt af van bordopstelling en tegenstander strategieën."
        }
      },
      {
        question: {
          en: "What makes sheep the 'least valuable' base resource strategically?",
          es: "¿Qué hace que las ovejas sean el recurso base 'menos valioso' estratégicamente?",
          de: "Was macht Schafe strategisch zur 'am wenigsten wertvollen' Basisressource?",
          nl: "Wat maakt schapen strategisch de 'minst waardevolle' basisbron?"
        },
        options: [
          { en: "Only required for development cards and initial settlements", es: "Solo requerido para cartas de desarrollo y asentamientos iniciales", de: "Nur für Entwicklungskarten und anfängliche Siedlungen erforderlich", nl: "Alleen vereist voor ontwikkelingskaarten en initiële nederzettingen" },
          { en: "Cannot be traded at all", es: "No se puede comerciar en absoluto", de: "Kann überhaupt nicht gehandelt werden", nl: "Kan helemaal niet geruild worden" },
          { en: "Worth negative victory points", es: "Vale puntos de victoria negativos", de: "Wert negative Siegpunkte", nl: "Waard negatieve overwinningspunten" },
          { en: "Causes robber to appear automatically", es: "Hace que el ladrón aparezca automáticamente", de: "Lässt Räuber automatisch erscheinen", nl: "Veroorzaakt dat rover automatisch verschijnt" }
        ],
        correct: 0,
        explanation: {
          en: "Sheep (wool) is needed only for development cards and settlements. Once you've built your settlements and don't need more dev cards, sheep becomes excess. In contrast, wheat/ore (cities), and brick/lumber (roads/settlements) maintain value throughout the game.",
          es: "Las ovejas (lana) solo se necesitan para cartas de desarrollo y asentamientos. Una vez que hayas construido tus asentamientos y no necesites más cartas de desarrollo, las ovejas se vuelven exceso. En contraste, trigo/mineral (ciudades) y ladrillo/madera (carreteras/asentamientos) mantienen valor durante todo el juego.",
          de: "Schafe (Wolle) werden nur für Entwicklungskarten und Siedlungen benötigt. Sobald Sie Ihre Siedlungen gebaut haben und keine weiteren Entwicklungskarten benötigen, wird Schaf überschüssig. Im Gegensatz dazu behalten Weizen/Erz (Städte) und Ziegel/Holz (Straßen/Siedlungen) den ganzen Spiel über ihren Wert.",
          nl: "Schapen (wol) zijn alleen nodig voor ontwikkelingskaarten en nederzettingen. Zodra je je nederzettingen hebt gebouwd en geen ontwikkelingskaarten meer nodig hebt, worden schapen overtollig. In contrast behouden tarwe/erts (steden) en baksteen/hout (wegen/nederzettingen) waarde gedurende het hele spel."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level5;
  } else if (typeof window !== 'undefined') {
    window.level5 = level5;
  }
})();
