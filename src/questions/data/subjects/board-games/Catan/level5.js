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
      },
      {
        question: {
          en: "What is the 'settlement priority calculation' formula?",
          es: "¿Cuál es la fórmula de 'cálculo de prioridad de asentamiento'?",
          de: "Was ist die 'Siedlungsprioritätsberechnungs'-Formel?",
          nl: "Wat is de 'nederzettingsprioriteitsberekenin'-formule?"
        },
        options: [
          { en: "(Pip value × Resource diversity) - Robber exposure", es: "(Valor de pip × Diversidad de recursos) - Exposición al ladrón", de: "(Pip-Wert × Ressourcenvielfalt) - Räuberexposition", nl: "(Pip-waarde × Brondiversiteit) - Rover blootstelling" },
          { en: "Number of hexes only", es: "Solo número de hexágonos", de: "Nur Anzahl der Hexe", nl: "Alleen aantal hexen" },
          { en: "Distance from center squared", es: "Distancia del centro al cuadrado", de: "Entfernung von der Mitte zum Quadrat", nl: "Afstand van centrum gekwadrateerd" },
          { en: "Total resource cards divided by turns", es: "Total de cartas de recursos dividido por turnos", de: "Gesamtressourcenkarten geteilt durch Züge", nl: "Totaal bron kaarten gedeeld door beurten" }
        ],
        correct: 0,
        explanation: {
          en: "Expert players evaluate settlement locations by combining pip value (production frequency) with resource diversity (flexibility), then reducing the score based on robber vulnerability (6s and 8s attract robbers). A settlement on 6-8-10 (high pips, low diversity) scores lower than 6-5-9 (high pips, better spread).",
          es: "Los jugadores expertos evalúan las ubicaciones de asentamiento combinando el valor de pip (frecuencia de producción) con la diversidad de recursos (flexibilidad), luego reduciendo la puntuación basándose en la vulnerabilidad al ladrón (6s y 8s atraen ladrones). Un asentamiento en 6-8-10 (pips altos, baja diversidad) puntúa más bajo que 6-5-9 (pips altos, mejor distribución).",
          de: "Experten bewerten Siedlungsstandorte durch Kombination von Pip-Wert (Produktionsfrequenz) mit Ressourcenvielfalt (Flexibilität), dann Reduzierung der Punktzahl basierend auf Räuberanfälligkeit (6en und 8en ziehen Räuber an). Eine Siedlung auf 6-8-10 (hohe Pips, geringe Vielfalt) erhält eine niedrigere Punktzahl als 6-5-9 (hohe Pips, bessere Verteilung).",
          nl: "Expertspelers evalueren nederzettingslocaties door pip-waarde (productiefrequentie) te combineren met brondiversiteit (flexibiliteit), dan de score te verlagen op basis van rover kwetsbaarheid (6'en en 8'en trekken rovers aan). Een nederzetting op 6-8-10 (hoge pips, lage diversiteit) scoort lager dan 6-5-9 (hoge pips, betere spreiding)."
        }
      },
      {
        question: {
          en: "What is 'harbor synergy' in settlement planning?",
          es: "¿Qué es la 'sinergia de puerto' en la planificación de asentamientos?",
          de: "Was ist 'Hafensynergie' bei der Siedlungsplanung?",
          nl: "Wat is 'haven synergie' in nederzettingsplanning?"
        },
        options: [
          { en: "Placing settlements to produce the exact resource a nearby harbor trades", es: "Colocar asentamientos para producir el recurso exacto que comercia un puerto cercano", de: "Siedlungen platzieren um genau die Ressource zu produzieren die ein naher Hafen handelt", nl: "Nederzettingen plaatsen om de exacte bron te produceren die een nabije haven handelt" },
          { en: "Building only on harbor locations", es: "Construir solo en ubicaciones de puerto", de: "Nur an Hafenstandorten bauen", nl: "Alleen op havenlocaties bouwen" },
          { en: "Avoiding all harbors completely", es: "Evitar todos los puertos completamente", de: "Alle Häfen vollständig vermeiden", nl: "Alle havens volledig vermijden" },
          { en: "Trading between two harbors simultaneously", es: "Comerciar entre dos puertos simultáneamente", de: "Gleichzeitig zwischen zwei Häfen handeln", nl: "Gelijktijdig tussen twee havens handelen" }
        ],
        correct: 0,
        explanation: {
          en: "Harbor synergy means settling near a 2:1 sheep harbor while also placing settlements on good sheep hexes. This creates abundant sheep production that you can convert at 2:1 into any needed resource, creating a powerful economic engine.",
          es: "La sinergia de puerto significa asentarse cerca de un puerto de ovejas 2:1 mientras también se colocan asentamientos en buenos hexágonos de ovejas. Esto crea una producción abundante de ovejas que puedes convertir a 2:1 en cualquier recurso necesario, creando un motor económico poderoso.",
          de: "Hafensynergie bedeutet, sich in der Nähe eines 2:1-Schafhafens niederzulassen und gleichzeitig Siedlungen auf guten Schaffeldern zu platzieren. Dies schafft eine reichliche Schafproduktion, die man zu 2:1 in jede benötigte Ressource umwandeln kann, wodurch eine leistungsstarke Wirtschaftsmaschine entsteht.",
          nl: "Haven synergie betekent nederzetten nabij een 2:1 schaaphaven terwijl ook nederzettingen worden geplaatst op goede schaaphexen. Dit creëert overvloedige schapenproductie die je kunt omzetten op 2:1 in elke benodigde bron, wat een krachtige economische motor creëert."
        }
      },
      {
        question: {
          en: "When should you intentionally avoid taking Largest Army?",
          es: "¿Cuándo debes intencionalmente evitar tomar el Ejército Más Grande?",
          de: "Wann sollte man absichtlich vermeiden, die größte Armee zu nehmen?",
          nl: "Wanneer moet je opzettelijk vermijden het Grootste Leger te nemen?"
        },
        options: [
          { en: "When 1-2 points from victory and it would signal your threat level", es: "Cuando estás a 1-2 puntos de la victoria y señalaría tu nivel de amenaza", de: "Wenn 1-2 Punkte vom Sieg entfernt und es Ihr Bedrohungsniveau signalisieren würde", nl: "Wanneer 1-2 punten van overwinning en het je bedreigingsniveau zou signaleren" },
          { en: "Always avoid Largest Army", es: "Siempre evitar el Ejército Más Grande", de: "Immer die größte Armee vermeiden", nl: "Altijd Grootste Leger vermijden" },
          { en: "Never avoid it if available", es: "Nunca evitarlo si está disponible", de: "Niemals vermeiden wenn verfügbar", nl: "Nooit vermijden als beschikbaar" },
          { en: "Only in 2-player games", es: "Solo en juegos de 2 jugadores", de: "Nur in 2-Spieler-Spielen", nl: "Alleen in 2-speler spellen" }
        ],
        correct: 0,
        explanation: {
          en: "When you're close to winning (8-9 points), claiming Largest Army can reveal your true score and make you the target of all robbers and trade embargoes. Sometimes it's better to hold knights unplayed, win with hidden VP cards or a surprise settlement, then play them if needed.",
          es: "Cuando estás cerca de ganar (8-9 puntos), reclamar el Ejército Más Grande puede revelar tu puntuación real y convertirte en el objetivo de todos los ladrones y embargos comerciales. A veces es mejor mantener los caballeros sin jugar, ganar con cartas VP ocultas o un asentamiento sorpresa, luego jugarlos si es necesario.",
          de: "Wenn man kurz vor dem Sieg steht (8-9 Punkte), kann das Beanspruchen der größten Armee Ihre wahre Punktzahl offenbaren und Sie zum Ziel aller Räuber und Handelsembargos machen. Manchmal ist es besser, Ritter ungespielt zu behalten, mit versteckten SP-Karten oder einer Überraschungssiedlung zu gewinnen und sie dann bei Bedarf zu spielen.",
          nl: "Wanneer je dicht bij winnen bent (8-9 punten), kan het claimen van het Grootste Leger je werkelijke score onthullen en je het doelwit maken van alle rovers en handelsembargo's. Soms is het beter om ridders ongespeld te houden, te winnen met verborgen VP-kaarten of een verrassende nederzetting, en ze dan te spelen als nodig."
        }
      },
      {
        question: {
          en: "What is the '9-10-11' hex grouping advantage?",
          es: "¿Cuál es la ventaja de la agrupación de hexágonos '9-10-11'?",
          de: "Was ist der Vorteil der '9-10-11'-Hex-Gruppierung?",
          nl: "Wat is het voordeel van de '9-10-11' hex groepering?"
        },
        options: [
          { en: "Provides 9 combined pips (3+3+3) with good frequency consistency", es: "Proporciona 9 pips combinados (3+3+3) con buena consistencia de frecuencia", de: "Bietet 9 kombinierte Pips (3+3+3) mit guter Frequenzkonsistenz", nl: "Biedt 9 gecombineerde pips (3+3+3) met goede frequentieconsistentie" },
          { en: "Guarantees victory automatically", es: "Garantiza victoria automáticamente", de: "Garantiert automatisch den Sieg", nl: "Garandeert overwinning automatisch" },
          { en: "Produces triple resources per roll", es: "Produce recursos triples por tirada", de: "Produziert dreifache Ressourcen pro Wurf", nl: "Produceert drievoudige bronnen per worp" },
          { en: "Blocks robber placement permanently", es: "Bloquea la colocación del ladrón permanentemente", de: "Blockiert Räuberplatzierung dauerhaft", nl: "Blokkeert rover plaatsing permanent" }
        ],
        correct: 0,
        explanation: {
          en: "Numbers 9, 10, and 11 each have 3 probability pips. A settlement on these three numbers gets 9 combined pips with excellent roll distribution—you produce on different numbers rather than clustering on 6-8. This reduces robber impact and provides steady income.",
          es: "Los números 9, 10 y 11 tienen cada uno 3 pips de probabilidad. Un asentamiento en estos tres números obtiene 9 pips combinados con excelente distribución de tiradas: produces en números diferentes en lugar de agruparse en 6-8. Esto reduce el impacto del ladrón y proporciona ingresos constantes.",
          de: "Die Zahlen 9, 10 und 11 haben jeweils 3 Wahrscheinlichkeits-Pips. Eine Siedlung auf diesen drei Zahlen erhält 9 kombinierte Pips mit ausgezeichneter Würfelverteilung—man produziert auf verschiedenen Zahlen statt auf 6-8 zu clustern. Dies reduziert den Räubereinfluss und bietet stetiges Einkommen.",
          nl: "Nummers 9, 10 en 11 hebben elk 3 waarschijnlijkheidspips. Een nederzetting op deze drie nummers krijgt 9 gecombineerde pips met uitstekende worpverdeling—je produceert op verschillende nummers in plaats van clustering op 6-8. Dit vermindert rover impact en biedt stabiel inkomen."
        }
      },
      {
        question: {
          en: "What is the trade embargo strategy in endgame?",
          es: "¿Cuál es la estrategia de embargo comercial en el final del juego?",
          de: "Was ist die Handelsembargo-Strategie im Endspiel?",
          nl: "Wat is de handelsembargo strategie in het eindspel?"
        },
        options: [
          { en: "Refusing all trades with the player closest to winning", es: "Rechazar todos los intercambios con el jugador más cercano a ganar", de: "Alle Geschäfte mit dem Spieler der dem Sieg am nächsten ist ablehnen", nl: "Alle ruilen met de speler die het dichtst bij winnen is weigeren" },
          { en: "Trading only with the leader", es: "Comerciar solo con el líder", de: "Nur mit dem Anführer handeln", nl: "Alleen met de leider handelen" },
          { en: "Never trading under any circumstances", es: "Nunca comerciar bajo ninguna circunstancia", de: "Niemals unter keinen Umständen handeln", nl: "Nooit handelen onder enige omstandigheid" },
          { en: "Giving resources to trailing players only", es: "Dar recursos solo a jugadores rezagados", de: "Ressourcen nur an zurückliegende Spieler geben", nl: "Bronnen alleen aan achterblijvende spelers geven" }
        ],
        correct: 0,
        explanation: {
          en: "In late game (when someone reaches 8+ points), coordinated trade embargoes against the leader can prevent them from building their final victory points. This collective defense forces them to rely on dice luck or inefficient 4:1 bank trades, buying time for others to catch up.",
          es: "En el final del juego (cuando alguien alcanza 8+ puntos), los embargos comerciales coordinados contra el líder pueden evitar que construyan sus puntos de victoria finales. Esta defensa colectiva los obliga a depender de la suerte de los dados o intercambios ineficientes 4:1 del banco, dando tiempo a otros para ponerse al día.",
          de: "Im Endspiel (wenn jemand 8+ Punkte erreicht), können koordinierte Handelsembargos gegen den Anführer verhindern, dass er seine letzten Siegpunkte baut. Diese kollektive Verteidigung zwingt ihn, sich auf Würfelglück oder ineffiziente 4:1-Bankgeschäfte zu verlassen, was anderen Zeit gibt aufzuholen.",
          nl: "In het late spel (wanneer iemand 8+ punten bereikt), kunnen gecoördineerde handelsembargo's tegen de leider voorkomen dat ze hun laatste overwinningspunten bouwen. Deze collectieve verdediging dwingt hen te vertrouwen op dobbelsteengeluk of inefficiënte 4:1 bankruilen, tijd kopend voor anderen om bij te komen."
        }
      },
      {
        question: {
          en: "How does the 'second settlement advantage' work in setup?",
          es: "¿Cómo funciona la 'ventaja del segundo asentamiento' en la configuración?",
          de: "Wie funktioniert der 'Zweitsiedlungsvorteil' beim Setup?",
          nl: "Hoe werkt het 'tweede nederzettingsvoordeel' in de opzet?"
        },
        options: [
          { en: "Last player places both settlements consecutively, adapting to all opponents", es: "El último jugador coloca ambos asentamientos consecutivamente, adaptándose a todos los oponentes", de: "Letzter Spieler platziert beide Siedlungen hintereinander und passt sich allen Gegnern an", nl: "Laatste speler plaatst beide nederzettingen achtereenvolgens, aanpassend aan alle tegenstanders" },
          { en: "Second settlement always produces more resources", es: "El segundo asentamiento siempre produce más recursos", de: "Zweite Siedlung produziert immer mehr Ressourcen", nl: "Tweede nederzetting produceert altijd meer bronnen" },
          { en: "First player gets two second settlements", es: "El primer jugador obtiene dos segundos asentamientos", de: "Erster Spieler bekommt zwei zweite Siedlungen", nl: "Eerste speler krijgt twee tweede nederzettingen" },
          { en: "All players place in same order twice", es: "Todos los jugadores colocan en el mismo orden dos veces", de: "Alle Spieler platzieren zweimal in gleicher Reihenfolge", nl: "Alle spelers plaatsen in dezelfde volgorde twee keer" }
        ],
        correct: 0,
        explanation: {
          en: "In reverse order setup, the last player places their second settlement, then immediately places their first settlement. This allows them to see all opponents' placements and create a perfectly complementary pair. First player compensates with earliest access to prime locations.",
          es: "En la configuración de orden inverso, el último jugador coloca su segundo asentamiento, luego inmediatamente coloca su primer asentamiento. Esto les permite ver todas las colocaciones de los oponentes y crear un par perfectamente complementario. El primer jugador compensa con acceso más temprano a ubicaciones principales.",
          de: "Beim Setup in umgekehrter Reihenfolge platziert der letzte Spieler seine zweite Siedlung, dann sofort seine erste Siedlung. Dies ermöglicht es ihm, alle Platzierungen der Gegner zu sehen und ein perfekt komplementäres Paar zu erstellen. Der erste Spieler kompensiert mit frühestem Zugang zu erstklassigen Standorten.",
          nl: "In omgekeerde volgorde opzet plaatst de laatste speler hun tweede nederzetting, dan direct hun eerste nederzetting. Dit stelt hen in staat alle plaatsingen van tegenstanders te zien en een perfect complementair paar te creëren. Eerste speler compenseert met vroegste toegang tot prime locaties."
        }
      },
      {
        question: {
          en: "What is 'card counting' in Catan strategy?",
          es: "¿Qué es el 'conteo de cartas' en la estrategia de Catan?",
          de: "Was ist 'Kartenzählen' in der Catan-Strategie?",
          nl: "Wat is 'kaarten tellen' in Catan strategie?"
        },
        options: [
          { en: "Tracking development cards played to estimate remaining VP and knight cards", es: "Rastrear cartas de desarrollo jugadas para estimar VP restantes y cartas de caballero", de: "Gespielte Entwicklungskarten verfolgen um verbleibende SP- und Ritterkarten zu schätzen", nl: "Gespeelde ontwikkelingskaarten volgen om resterende VP en ridderskaarten te schatten" },
          { en: "Counting to 10 during your turn", es: "Contar hasta 10 durante tu turno", de: "Bis 10 zählen während Ihres Zuges", nl: "Tot 10 tellen tijdens je beurt" },
          { en: "Memorizing all dice rolls", es: "Memorizar todas las tiradas de dados", de: "Alle Würfelwürfe auswendig lernen", nl: "Alle dobbelworpen onthouden" },
          { en: "Calculating total victory points publicly", es: "Calcular puntos de victoria totales públicamente", de: "Öffentlich Gesamtsiegpunkte berechnen", nl: "Publiekelijk totale overwinningspunten berekenen" }
        ],
        correct: 0,
        explanation: {
          en: "Advanced players track which development cards have been revealed. Since there are only 5 VP cards in the 25-card deck, once 3 VPs are shown, only 2 remain. This helps estimate if opponents have hidden points and whether buying more dev cards is worthwhile.",
          es: "Los jugadores avanzados rastrean qué cartas de desarrollo se han revelado. Dado que solo hay 5 cartas VP en el mazo de 25 cartas, una vez que se muestran 3 VPs, solo quedan 2. Esto ayuda a estimar si los oponentes tienen puntos ocultos y si vale la pena comprar más cartas de desarrollo.",
          de: "Fortgeschrittene Spieler verfolgen, welche Entwicklungskarten aufgedeckt wurden. Da es nur 5 SP-Karten im 25-Karten-Deck gibt, bleiben nach 3 aufgedeckten SPs nur noch 2 übrig. Dies hilft einzuschätzen, ob Gegner versteckte Punkte haben und ob der Kauf weiterer Entwicklungskarten sich lohnt.",
          nl: "Geavanceerde spelers volgen welke ontwikkelingskaarten zijn onthuld. Aangezien er slechts 5 VP-kaarten in het 25-kaarten deck zijn, blijven er na 3 getoonde VPs slechts 2 over. Dit helpt inschatten of tegenstanders verborgen punten hebben en of het kopen van meer ontwikkelingskaarten de moeite waard is."
        }
      },
      {
        question: {
          en: "What is the 'resource consolidation' mid-game tactic?",
          es: "¿Qué es la táctica de 'consolidación de recursos' a mitad de juego?",
          de: "Was ist die 'Ressourcenkonsolidierungs'-Taktik im Mittelspiel?",
          nl: "Wat is de 'bronconsolidatie' middenspel tactiek?"
        },
        options: [
          { en: "Converting diverse resources into focused wheat-ore or brick-lumber production", es: "Convertir recursos diversos en producción enfocada de trigo-mineral o ladrillo-madera", de: "Diverse Ressourcen in fokussierte Weizen-Erz- oder Ziegel-Holz-Produktion umwandeln", nl: "Diverse bronnen omzetten in gefocuste tarwe-erts of baksteen-hout productie" },
          { en: "Hoarding all resources without building", es: "Acumular todos los recursos sin construir", de: "Alle Ressourcen horten ohne zu bauen", nl: "Alle bronnen oppotten zonder te bouwen" },
          { en: "Trading all resources for single type", es: "Cambiar todos los recursos por un solo tipo", de: "Alle Ressourcen gegen einen einzigen Typ tauschen", nl: "Alle bronnen ruilen voor enkel type" },
          { en: "Discarding resources when rolling 7", es: "Descartar recursos al sacar 7", de: "Ressourcen beim Würfeln von 7 abwerfen", nl: "Bronnen weggooien bij gooien van 7" }
        ],
        correct: 0,
        explanation: {
          en: "After establishing 3-4 settlements, consolidation means building your next settlements to strengthen specific resource pairs (wheat-ore for cities, or brick-lumber for expansion). This creates efficient production chains rather than scattered weak production across all five resources.",
          es: "Después de establecer 3-4 asentamientos, la consolidación significa construir tus próximos asentamientos para fortalecer pares de recursos específicos (trigo-mineral para ciudades, o ladrillo-madera para expansión). Esto crea cadenas de producción eficientes en lugar de producción débil dispersa en los cinco recursos.",
          de: "Nach dem Aufbau von 3-4 Siedlungen bedeutet Konsolidierung, die nächsten Siedlungen zu bauen, um bestimmte Ressourcenpaare zu stärken (Weizen-Erz für Städte oder Ziegel-Holz für Expansion). Dies schafft effiziente Produktionsketten statt verstreuter schwacher Produktion über alle fünf Ressourcen.",
          nl: "Na het vestigen van 3-4 nederzettingen betekent consolidatie je volgende nederzettingen bouwen om specifieke bronparen te versterken (tarwe-erts voor steden, of baksteen-hout voor expansie). Dit creëert efficiënte productieketens in plaats van verspreide zwakke productie over alle vijf bronnen."
        }
      },
      {
        question: {
          en: "What percentage of rolls produce resources on a 6-8-5 settlement?",
          es: "¿Qué porcentaje de tiradas produce recursos en un asentamiento 6-8-5?",
          de: "Welcher Prozentsatz der Würfe produziert Ressourcen bei einer 6-8-5-Siedlung?",
          nl: "Welk percentage van worpen produceert bronnen op een 6-8-5 nederzetting?"
        },
        options: [
          { en: "38.9% (14 out of 36 possible rolls)", es: "38.9% (14 de 36 tiradas posibles)", de: "38.9% (14 von 36 möglichen Würfen)", nl: "38.9% (14 van 36 mogelijke worpen)" },
          { en: "50% (exactly half the time)", es: "50% (exactamente la mitad del tiempo)", de: "50% (genau die Hälfte der Zeit)", nl: "50% (precies de helft van de tijd)" },
          { en: "25% (one quarter of rolls)", es: "25% (un cuarto de las tiradas)", de: "25% (ein Viertel der Würfe)", nl: "25% (een kwart van worpen)" },
          { en: "75% (three quarters of rolls)", es: "75% (tres cuartos de las tiradas)", de: "75% (drei Viertel der Würfe)", nl: "75% (drie kwart van worpen)" }
        ],
        correct: 0,
        explanation: {
          en: "A 6-8-5 settlement has 14 total pips (5+5+4). Since there are 36 possible dice combinations, this settlement produces on 14/36 = 38.9% of all rolls (excluding 7s). This is the theoretical maximum production frequency for any settlement in standard Catan.",
          es: "Un asentamiento 6-8-5 tiene 14 pips totales (5+5+4). Dado que hay 36 combinaciones posibles de dados, este asentamiento produce en 14/36 = 38.9% de todas las tiradas (excluyendo 7s). Esta es la frecuencia de producción teórica máxima para cualquier asentamiento en Catan estándar.",
          de: "Eine 6-8-5-Siedlung hat insgesamt 14 Pips (5+5+4). Da es 36 mögliche Würfelkombinationen gibt, produziert diese Siedlung bei 14/36 = 38,9% aller Würfe (ohne 7en). Dies ist die theoretische maximale Produktionsfrequenz für jede Siedlung im Standard-Catan.",
          nl: "Een 6-8-5 nederzetting heeft 14 totale pips (5+5+4). Aangezien er 36 mogelijke dobbelsteencombinaties zijn, produceert deze nederzetting op 14/36 = 38,9% van alle worpen (exclusief 7'en). Dit is de theoretische maximale productiefrequentie voor elke nederzetting in standaard Catan."
        }
      },
      {
        question: {
          en: "What is the 'victory point race analysis' in competitive Catan?",
          es: "¿Qué es el 'análisis de carrera de puntos de victoria' en Catan competitivo?",
          de: "Was ist die 'Siegpunkt-Rennanalyse' im Wettkampf-Catan?",
          nl: "Wat is de 'overwinningspunt race analyse' in competitief Catan?"
        },
        options: [
          { en: "Continuously tracking all players' visible and potential hidden points", es: "Rastrear continuamente los puntos visibles y potenciales ocultos de todos los jugadores", de: "Kontinuierlich alle sichtbaren und potenziell versteckten Punkte aller Spieler verfolgen", nl: "Continu alle zichtbare en potentiële verborgen punten van alle spelers volgen" },
          { en: "Only counting your own victory points", es: "Solo contar tus propios puntos de victoria", de: "Nur eigene Siegpunkte zählen", nl: "Alleen je eigen overwinningspunten tellen" },
          { en: "Ignoring development cards completely", es: "Ignorar las cartas de desarrollo completamente", de: "Entwicklungskarten vollständig ignorieren", nl: "Ontwikkelingskaarten volledig negeren" },
          { en: "Assuming all players have equal scores", es: "Asumir que todos los jugadores tienen puntuaciones iguales", de: "Annehmen dass alle Spieler gleiche Punktzahlen haben", nl: "Aannemen dat alle spelers gelijke scores hebben" }
        ],
        correct: 0,
        explanation: {
          en: "Expert players constantly evaluate: visible points (settlements/cities/longest road/largest army) + potential hidden points (development cards bought but not revealed) + achievable points (settlements they could build next turn). This determines robber targeting and trade decisions.",
          es: "Los jugadores expertos evalúan constantemente: puntos visibles (asentamientos/ciudades/camino más largo/ejército más grande) + puntos ocultos potenciales (cartas de desarrollo compradas pero no reveladas) + puntos alcanzables (asentamientos que podrían construir en el siguiente turno). Esto determina la orientación del ladrón y las decisiones comerciales.",
          de: "Experten bewerten ständig: sichtbare Punkte (Siedlungen/Städte/längste Straße/größte Armee) + potenzielle versteckte Punkte (gekaufte aber nicht aufgedeckte Entwicklungskarten) + erreichbare Punkte (Siedlungen die im nächsten Zug gebaut werden könnten). Dies bestimmt Räuberzielausrichtung und Handelsentscheidungen.",
          nl: "Expertspelers evalueren constant: zichtbare punten (nederzettingen/steden/langste weg/grootste leger) + potentiële verborgen punten (gekochte maar niet onthulde ontwikkelingskaarten) + haalbare punten (nederzettingen die ze volgende beurt zouden kunnen bouwen). Dit bepaalt rover targeting en handelsbeslissingen."
        }
      },
      {
        question: {
          en: "How does the 'production variance' concept affect settlement choice?",
          es: "¿Cómo afecta el concepto de 'varianza de producción' a la elección de asentamiento?",
          de: "Wie beeinflusst das Konzept der 'Produktionsvarianz' die Siedlungswahl?",
          nl: "Hoe beïnvloedt het 'productie variantie' concept nederzettingskeuze?"
        },
        options: [
          { en: "6-8-8 has high variance (boom/bust); 5-6-9 has lower variance (steadier)", es: "6-8-8 tiene alta varianza (auge/caída); 5-6-9 tiene menor varianza (más estable)", de: "6-8-8 hat hohe Varianz (Boom/Bust); 5-6-9 hat niedrigere Varianz (stetiger)", nl: "6-8-8 heeft hoge variantie (boom/bust); 5-6-9 heeft lagere variantie (stabieler)" },
          { en: "All settlements produce identically over time", es: "Todos los asentamientos producen idénticamente con el tiempo", de: "Alle Siedlungen produzieren im Laufe der Zeit identisch", nl: "Alle nederzettingen produceren identiek over tijd" },
          { en: "Variance only affects cities not settlements", es: "La varianza solo afecta ciudades no asentamientos", de: "Varianz betrifft nur Städte nicht Siedlungen", nl: "Variantie beïnvloedt alleen steden niet nederzettingen" },
          { en: "Higher variance always means better settlements", es: "Mayor varianza siempre significa mejores asentamientos", de: "Höhere Varianz bedeutet immer bessere Siedlungen", nl: "Hogere variantie betekent altijd betere nederzettingen" }
        ],
        correct: 0,
        explanation: {
          en: "A 6-8-8 settlement (15 pips) has higher production potential but also higher variance—you feast when those hit but starve when they don't. A 5-6-9 settlement (14 pips) has slightly lower potential but more consistent production across different numbers, reducing streaky luck dependence.",
          es: "Un asentamiento 6-8-8 (15 pips) tiene mayor potencial de producción pero también mayor varianza: te das un festín cuando esos números salen pero pasas hambre cuando no. Un asentamiento 5-6-9 (14 pips) tiene un potencial ligeramente menor pero producción más consistente en diferentes números, reduciendo la dependencia de la suerte irregular.",
          de: "Eine 6-8-8-Siedlung (15 Pips) hat höheres Produktionspotenzial aber auch höhere Varianz—man schwelgt wenn diese getroffen werden, hungert aber wenn nicht. Eine 5-6-9-Siedlung (14 Pips) hat etwas geringeres Potenzial aber konsistentere Produktion über verschiedene Zahlen, wodurch die Abhängigkeit von Glückssträhnen reduziert wird.",
          nl: "Een 6-8-8 nederzetting (15 pips) heeft hoger productie potentieel maar ook hogere variantie—je feest wanneer die raken maar hongert wanneer niet. Een 5-6-9 nederzetting (14 pips) heeft iets lager potentieel maar consistentere productie over verschillende nummers, wat afhankelijkheid van geluksstrepen vermindert."
        }
      },
      {
        question: {
          en: "What is the 'adaptive strategy pivot' in mid-game?",
          es: "¿Qué es el 'pivote de estrategia adaptativa' a mitad de juego?",
          de: "Was ist der 'adaptive Strategiewechsel' im Mittelspiel?",
          nl: "Wat is de 'adaptieve strategie draai' in het middenspel?"
        },
        options: [
          { en: "Shifting from expansion to cities, or from cities to longest road based on game state", es: "Cambiar de expansión a ciudades, o de ciudades a camino más largo según el estado del juego", de: "Von Expansion zu Städten wechseln, oder von Städten zur längsten Straße basierend auf Spielzustand", nl: "Verschuiven van expansie naar steden, of van steden naar langste weg op basis van spelstaat" },
          { en: "Never changing your initial strategy", es: "Nunca cambiar tu estrategia inicial", de: "Niemals die anfängliche Strategie ändern", nl: "Nooit je initiële strategie veranderen" },
          { en: "Always building cities regardless of situation", es: "Siempre construir ciudades independientemente de la situación", de: "Immer Städte bauen unabhängig von der Situation", nl: "Altijd steden bouwen ongeacht de situatie" },
          { en: "Copying the leading player's strategy exactly", es: "Copiar exactamente la estrategia del jugador líder", de: "Die Strategie des führenden Spielers genau kopieren", nl: "De strategie van de leidende speler exact kopiëren" }
        ],
        correct: 0,
        explanation: {
          en: "Expert players reassess strategy around turn 15-20. If ore/wheat hexes are being heavily robbed, pivot to settlement expansion. If someone claims longest road early, pivot to cities and largest army. Adaptive pivoting responds to dynamic game conditions rather than following rigid plans.",
          es: "Los jugadores expertos reevalúan la estrategia alrededor del turno 15-20. Si los hexágonos de mineral/trigo están siendo fuertemente robados, pivota a la expansión de asentamientos. Si alguien reclama el camino más largo temprano, pivota a ciudades y ejército más grande. El pivote adaptativo responde a condiciones dinámicas del juego en lugar de seguir planes rígidos.",
          de: "Experten überprüfen die Strategie um Zug 15-20. Wenn Erz-/Weizenfelder stark beraubt werden, wechseln Sie zur Siedlungserweiterung. Wenn jemand früh die längste Straße beansprucht, wechseln Sie zu Städten und größter Armee. Adaptive Wendungen reagieren auf dynamische Spielbedingungen statt starren Plänen zu folgen.",
          nl: "Expertspelers herevalueren strategie rond beurt 15-20. Als erts/tarwe hexen zwaar worden beroofd, draai naar nederzettingsuitbreiding. Als iemand vroeg langste weg claimt, draai naar steden en grootste leger. Adaptief draaien reageert op dynamische spelcondities in plaats van rigide plannen te volgen."
        }
      },
      {
        question: {
          en: "What is the statistical expected value of a single development card purchase?",
          es: "¿Cuál es el valor esperado estadístico de una compra de carta de desarrollo individual?",
          de: "Was ist der statistische Erwartungswert eines einzelnen Entwicklungskartenkaufs?",
          nl: "Wat is de statistische verwachte waarde van een enkele ontwikkelingskaart aankoop?"
        },
        options: [
          { en: "~0.6 points (14 knights for army, 5 VP cards, utility cards)", es: "~0.6 puntos (14 caballeros para ejército, 5 cartas VP, cartas de utilidad)", de: "~0.6 Punkte (14 Ritter für Armee, 5 SP-Karten, Hilfskarten)", nl: "~0.6 punten (14 ridders voor leger, 5 VP kaarten, utility kaarten)" },
          { en: "Exactly 1 victory point guaranteed", es: "Exactamente 1 punto de victoria garantizado", de: "Genau 1 Siegpunkt garantiert", nl: "Precies 1 overwinningspunt gegarandeerd" },
          { en: "0 points (cards have no value)", es: "0 puntos (las cartas no tienen valor)", de: "0 Punkte (Karten haben keinen Wert)", nl: "0 punten (kaarten hebben geen waarde)" },
          { en: "2 points per card average", es: "2 puntos por carta en promedio", de: "2 Punkte pro Karte im Durchschnitt", nl: "2 punten per kaart gemiddeld" }
        ],
        correct: 0,
        explanation: {
          en: "Of 25 dev cards: 5 are VP cards (1 pt each), 14 are knights (contributing ~0.4-0.5 pts toward largest army collectively), and 6 are utility cards (0 pts but strategic value). Average expected value is approximately 0.6 victory points per purchase, making them cost-competitive with settlements.",
          es: "De 25 cartas de desarrollo: 5 son cartas VP (1 pt cada una), 14 son caballeros (contribuyendo ~0.4-0.5 pts hacia el ejército más grande colectivamente), y 6 son cartas de utilidad (0 pts pero valor estratégico). El valor esperado promedio es aproximadamente 0.6 puntos de victoria por compra, haciéndolas competitivas en costo con los asentamientos.",
          de: "Von 25 Entwicklungskarten: 5 sind SP-Karten (je 1 Pt), 14 sind Ritter (tragen kollektiv ~0,4-0,5 Pts zur größten Armee bei), und 6 sind Hilfskarten (0 Pts aber strategischer Wert). Der durchschnittliche Erwartungswert beträgt etwa 0,6 Siegpunkte pro Kauf, was sie kostenwettbewerbsfähig mit Siedlungen macht.",
          nl: "Van 25 ontwikkelingskaarten: 5 zijn VP-kaarten (1 pt elk), 14 zijn ridders (dragen ~0,4-0,5 pts bij aan grootste leger collectief), en 6 zijn utility kaarten (0 pts maar strategische waarde). Gemiddelde verwachte waarde is ongeveer 0,6 overwinningspunten per aankoop, waardoor ze kosten-competitief zijn met nederzettingen."
        }
      },
      {
        question: {
          en: "What is the 'pre-building announcement' psychological tactic?",
          es: "¿Qué es la táctica psicológica de 'anuncio previo a la construcción'?",
          de: "Was ist die psychologische Taktik der 'Vorbauankündigung'?",
          nl: "Wat is de psychologische tactiek van 'pre-bouwaankondiging'?"
        },
        options: [
          { en: "Stating build intentions to negotiate better trades before committing resources", es: "Declarar intenciones de construcción para negociar mejores intercambios antes de comprometer recursos", de: "Bauabsichten erklären um bessere Geschäfte auszuhandeln bevor Ressourcen eingesetzt werden", nl: "Bouwintensies verklaren om betere ruilen te onderhandelen voor het inzetten van bronnen" },
          { en: "Always building in secret without announcements", es: "Siempre construir en secreto sin anuncios", de: "Immer heimlich bauen ohne Ankündigungen", nl: "Altijd in het geheim bouwen zonder aankondigingen" },
          { en: "Announcing false builds to confuse opponents", es: "Anunciar construcciones falsas para confundir a los oponentes", de: "Falsche Bauten ankündigen um Gegner zu verwirren", nl: "Valse bouwwerken aankondigen om tegenstanders te verwarren" },
          { en: "Building immediately without trading", es: "Construir inmediatamente sin comerciar", de: "Sofort bauen ohne zu handeln", nl: "Direct bouwen zonder te handelen" }
        ],
        correct: 0,
        explanation: {
          en: "Announcing 'I need 1 ore to build a settlement' can motivate opponents to trade favorably with you to prevent you from getting what you need elsewhere. However, overuse makes you predictable. The inverse—building silently and surprisingly—can also be powerful.",
          es: "Anunciar 'Necesito 1 mineral para construir un asentamiento' puede motivar a los oponentes a comerciar favorablemente contigo para evitar que obtengas lo que necesitas en otro lugar. Sin embargo, el uso excesivo te hace predecible. Lo inverso—construir silenciosamente y sorprendentemente—también puede ser poderoso.",
          de: "Die Ankündigung 'Ich brauche 1 Erz um eine Siedlung zu bauen' kann Gegner motivieren, günstig mit Ihnen zu handeln, um zu verhindern, dass Sie anderswo bekommen, was Sie brauchen. Übermäßiger Gebrauch macht jedoch vorhersagbar. Das Gegenteil—still und überraschend bauen—kann auch mächtig sein.",
          nl: "Aankondigen 'Ik heb 1 erts nodig om een nederzetting te bouwen' kan tegenstanders motiveren om gunstig met je te handelen om te voorkomen dat je krijgt wat je elders nodig hebt. Overmatig gebruik maakt je echter voorspelbaar. Het omgekeerde—stil en verrassend bouwen—kan ook krachtig zijn."
        }
      },
      {
        question: {
          en: "How do expert players evaluate the true cost of longest road pursuit?",
          es: "¿Cómo evalúan los jugadores expertos el verdadero costo de la búsqueda del camino más largo?",
          de: "Wie bewerten Experten die wahren Kosten der Verfolgung der längsten Straße?",
          nl: "Hoe evalueren expertspelers de werkelijke kosten van langste weg achtervolging?"
        },
        options: [
          { en: "7-9 roads (7-9 wood + 7-9 brick) = 3.5-4.5 settlements worth of resources", es: "7-9 carreteras (7-9 madera + 7-9 ladrillo) = 3.5-4.5 asentamientos de valor de recursos", de: "7-9 Straßen (7-9 Holz + 7-9 Ziegel) = 3.5-4.5 Siedlungen Ressourcenwert", nl: "7-9 wegen (7-9 hout + 7-9 baksteen) = 3.5-4.5 nederzettingen aan bronnen waard" },
          { en: "Roads cost nothing to pursue", es: "Los caminos no cuestan nada para perseguir", de: "Straßen kosten nichts zu verfolgen", nl: "Wegen kosten niets om na te jagen" },
          { en: "Longest road always worth it regardless of cost", es: "El camino más largo siempre vale la pena independientemente del costo", de: "Längste Straße lohnt sich immer unabhängig von den Kosten", nl: "Langste weg altijd de moeite waard ongeacht de kosten" },
          { en: "5 roads is sufficient and final cost", es: "5 carreteras es suficiente y costo final", de: "5 Straßen sind ausreichend und Endkosten", nl: "5 wegen is voldoende en eindkosten" }
        ],
        correct: 0,
        explanation: {
          en: "Building 7-9 roads requires 14-18 resources (wood+brick). Since a settlement costs 4 resources, longest road costs roughly 3.5-4.5 settlement-equivalents. For 2 victory points, this is expensive unless roads also serve expansion purposes (reaching new settlement locations).",
          es: "Construir 7-9 carreteras requiere 14-18 recursos (madera+ladrillo). Dado que un asentamiento cuesta 4 recursos, el camino más largo cuesta aproximadamente 3.5-4.5 equivalentes de asentamiento. Por 2 puntos de victoria, esto es costoso a menos que las carreteras también sirvan propósitos de expansión (alcanzar nuevas ubicaciones de asentamiento).",
          de: "Der Bau von 7-9 Straßen erfordert 14-18 Ressourcen (Holz+Ziegel). Da eine Siedlung 4 Ressourcen kostet, kostet die längste Straße etwa 3,5-4,5 Siedlungs-Äquivalente. Für 2 Siegpunkte ist dies teuer, es sei denn, Straßen dienen auch Expansionszwecken (Erreichen neuer Siedlungsstandorte).",
          nl: "Het bouwen van 7-9 wegen vereist 14-18 bronnen (hout+baksteen). Aangezien een nederzetting 4 bronnen kost, kost langste weg ongeveer 3,5-4,5 nederzetting-equivalenten. Voor 2 overwinningspunten is dit duur tenzij wegen ook expansiedoeleinden dienen (nieuwe nederzettingslocaties bereiken)."
        }
      },
      {
        question: {
          en: "What makes the 'Cities & Knights' expansion fundamentally different strategically?",
          es: "¿Qué hace que la expansión 'Ciudades y Caballeros' sea fundamentalmente diferente estratégicamente?",
          de: "Was macht die 'Städte & Ritter'-Erweiterung strategisch grundlegend anders?",
          nl: "Wat maakt de 'Steden & Ridders'-uitbreiding fundamenteel anders strategisch?"
        },
        options: [
          { en: "Adds defensive cooperation against barbarians and commodity-based city improvements", es: "Añade cooperación defensiva contra bárbaros y mejoras de ciudad basadas en mercancías", de: "Fügt defensive Zusammenarbeit gegen Barbaren und warenbasierte Stadtverbesserungen hinzu", nl: "Voegt defensieve samenwerking tegen barbaren en op goederen gebaseerde stadsverbeteringen toe" },
          { en: "Just adds more victory point cards", es: "Solo añade más cartas de puntos de victoria", de: "Fügt nur mehr Siegpunktkarten hinzu", nl: "Voegt alleen meer overwinningspuntkaarten toe" },
          { en: "Removes all development cards entirely", es: "Elimina todas las cartas de desarrollo completamente", de: "Entfernt alle Entwicklungskarten vollständig", nl: "Verwijdert alle ontwikkelingskaarten volledig" },
          { en: "Makes the game identical to base Catan", es: "Hace que el juego sea idéntico al Catan base", de: "Macht das Spiel identisch mit Basis-Catan", nl: "Maakt het spel identiek aan basis Catan" }
        ],
        correct: 0,
        explanation: {
          en: "Cities & Knights transforms Catan by adding: (1) commodities (cloth/coin/paper) from cities for improvements, (2) active knights requiring activation/promotion, (3) cooperative barbarian defense where failure costs cities, and (4) progress cards replacing standard development cards. This creates deeper strategic complexity.",
          es: "Ciudades y Caballeros transforma Catan añadiendo: (1) mercancías (tela/moneda/papel) de ciudades para mejoras, (2) caballeros activos que requieren activación/promoción, (3) defensa cooperativa contra bárbaros donde el fracaso cuesta ciudades, y (4) cartas de progreso reemplazando cartas de desarrollo estándar. Esto crea una complejidad estratégica más profunda.",
          de: "Städte & Ritter transformiert Catan durch Hinzufügen von: (1) Waren (Tuch/Münze/Papier) aus Städten für Verbesserungen, (2) aktive Ritter die Aktivierung/Beförderung benötigen, (3) kooperative Barbarenverteidigung wo Versagen Städte kostet, und (4) Fortschrittskarten die Standard-Entwicklungskarten ersetzen. Dies schafft tiefere strategische Komplexität.",
          nl: "Steden & Ridders transformeert Catan door toe te voegen: (1) goederen (stof/munt/papier) van steden voor verbeteringen, (2) actieve ridders die activatie/promotie vereisen, (3) coöperatieve barbaarse verdediging waar falen steden kost, en (4) vooruitgangskaarten die standaard ontwikkelingskaarten vervangen. Dit creëert diepere strategische complexiteit."
        }
      },
      {
        question: {
          en: "What is the optimal number of settlements before upgrading to cities?",
          es: "¿Cuál es el número óptimo de asentamientos antes de mejorar a ciudades?",
          de: "Was ist die optimale Anzahl von Siedlungen vor dem Upgrade auf Städte?",
          nl: "Wat is het optimale aantal nederzettingen voor upgraden naar steden?"
        },
        options: [
          { en: "3-4 settlements to balance diversity and production multipliers", es: "3-4 asentamientos para equilibrar diversidad y multiplicadores de producción", de: "3-4 Siedlungen um Vielfalt und Produktionsmultiplikatoren auszugleichen", nl: "3-4 nederzettingen om diversiteit en productie vermenigvuldigers te balanceren" },
          { en: "0 settlements, rush cities immediately", es: "0 asentamientos, apresurarse a ciudades inmediatamente", de: "0 Siedlungen, sofort zu Städten eilen", nl: "0 nederzettingen, direct naar steden haasten" },
          { en: "Always build all 5 settlements before any cities", es: "Siempre construir los 5 asentamientos antes de cualquier ciudad", de: "Immer alle 5 Siedlungen vor jeder Stadt bauen", nl: "Altijd alle 5 nederzettingen bouwen voor steden" },
          { en: "Cities are never worth building", es: "Las ciudades nunca valen la pena construir", de: "Städte sind niemals den Bau wert", nl: "Steden zijn nooit de moeite waard om te bouwen" }
        ],
        correct: 0,
        explanation: {
          en: "Building 3-4 settlements first secures resource diversity (9-12 hexes) and territorial control before upgrading 1-2 to cities. This balances production volume (cities double output) with production variety (settlements access more hexes). Going to 5 settlements delays the powerful city upgrades too long.",
          es: "Construir primero 3-4 asentamientos asegura la diversidad de recursos (9-12 hexágonos) y el control territorial antes de mejorar 1-2 a ciudades. Esto equilibra el volumen de producción (las ciudades duplican la producción) con la variedad de producción (los asentamientos acceden a más hexágonos). Ir a 5 asentamientos retrasa demasiado las poderosas mejoras de ciudad.",
          de: "Der Bau von 3-4 Siedlungen zuerst sichert Ressourcenvielfalt (9-12 Hexe) und territoriale Kontrolle, bevor 1-2 auf Städte aufgerüstet werden. Dies gleicht Produktionsvolumen (Städte verdoppeln Ausgabe) mit Produktionsvielfalt (Siedlungen greifen auf mehr Hexe zu) aus. Auf 5 Siedlungen zu gehen verzögert die mächtigen Stadt-Upgrades zu lange.",
          nl: "Het eerst bouwen van 3-4 nederzettingen verzekert brondiversiteit (9-12 hexen) en territoriale controle voor het upgraden van 1-2 naar steden. Dit balanceert productie volume (steden verdubbelen output) met productie variëteit (nederzettingen hebben toegang tot meer hexen). Naar 5 nederzettingen gaan vertraagt de krachtige stadsupgrades te lang."
        }
      },
      {
        question: {
          en: "What is the 'resource scarcity' endgame manipulation?",
          es: "¿Qué es la manipulación de 'escasez de recursos' en el final del juego?",
          de: "Was ist die 'Ressourcenknappheits'-Endspielmanipulation?",
          nl: "Wat is de 'bronschaarste' eindspel manipulatie?"
        },
        options: [
          { en: "Hoarding specific resources to create artificial scarcity and trading leverage", es: "Acumular recursos específicos para crear escasez artificial y apalancamiento comercial", de: "Spezifische Ressourcen horten um künstliche Knappheit und Handelshebel zu schaffen", nl: "Specifieke bronnen oppotten om kunstmatige schaarste en handelsleverage te creëren" },
          { en: "Giving away all resources freely", es: "Regalar todos los recursos libremente", de: "Alle Ressourcen kostenlos verschenken", nl: "Alle bronnen gratis weggeven" },
          { en: "Never trading any resources at all", es: "Nunca comerciar ningún recurso en absoluto", de: "Niemals irgendwelche Ressourcen handeln", nl: "Nooit enige bronnen handelen" },
          { en: "Only trading with the bank at 4:1", es: "Solo comerciar con el banco a 4:1", de: "Nur mit der Bank zu 4:1 handeln", nl: "Alleen met de bank op 4:1 handelen" }
        ],
        correct: 0,
        explanation: {
          en: "When close to victory, accumulating a large supply of a critical resource (like ore or wheat) creates dependency. Opponents must trade unfavorably with you or use poor bank rates. However, this risks 7-rolls forcing discards and revealing your strategy to opponents.",
          es: "Cuando estás cerca de la victoria, acumular un gran suministro de un recurso crítico (como mineral o trigo) crea dependencia. Los oponentes deben comerciar desfavorablemente contigo o usar tasas bancarias pobres. Sin embargo, esto arriesga tiradas de 7 que fuerzan descartes y revelan tu estrategia a los oponentes.",
          de: "Wenn man kurz vor dem Sieg steht, schafft das Anhäufen eines großen Vorrats einer kritischen Ressource (wie Erz oder Weizen) Abhängigkeit. Gegner müssen ungünstig mit Ihnen handeln oder schlechte Bankkurse verwenden. Dies riskiert jedoch 7-Würfe, die Abwürfe erzwingen und Ihre Strategie den Gegnern offenbaren.",
          nl: "Wanneer dicht bij overwinning creëert het accumuleren van een grote voorraad van een kritieke bron (zoals erts of tarwe) afhankelijkheid. Tegenstanders moeten ongunstig met je handelen of slechte banktarieven gebruiken. Dit riskeert echter 7-worpen die weggooi dwingen en je strategie aan tegenstanders onthullen."
        }
      },
      {
        question: {
          en: "How do 'positional settlements' differ from 'production settlements'?",
          es: "¿En qué se diferencian los 'asentamientos posicionales' de los 'asentamientos de producción'?",
          de: "Wie unterscheiden sich 'Positionssiedlungen' von 'Produktionssiedlungen'?",
          nl: "Hoe verschillen 'positionele nederzettingen' van 'productienederzettingen'?"
        },
        options: [
          { en: "Positional block opponents or claim harbors; production maximize pip values", es: "Posicional bloquea oponentes o reclama puertos; producción maximiza valores de pip", de: "Positions-Siedlungen blockieren Gegner oder beanspruchen Häfen; Produktions-Siedlungen maximieren Pip-Werte", nl: "Positioneel blokkeren tegenstanders of claimen havens; productie maximaliseert pip waarden" },
          { en: "They are identical in all aspects", es: "Son idénticos en todos los aspectos", de: "Sie sind in allen Aspekten identisch", nl: "Ze zijn identiek in alle aspecten" },
          { en: "Positional settlements cost more resources", es: "Los asentamientos posicionales cuestan más recursos", de: "Positionssiedlungen kosten mehr Ressourcen", nl: "Positionele nederzettingen kosten meer bronnen" },
          { en: "Production settlements cannot be upgraded", es: "Los asentamientos de producción no se pueden mejorar", de: "Produktionssiedlungen können nicht aufgerüstet werden", nl: "Productie nederzettingen kunnen niet worden geüpgraded" }
        ],
        correct: 0,
        explanation: {
          en: "Production settlements prioritize high pip counts (10-14 pips) for maximum resource generation. Positional settlements sacrifice some production (6-8 pips) to: block opponent expansion, secure key harbors, or claim longest road routes. Both are necessary in balanced play.",
          es: "Los asentamientos de producción priorizan altos conteos de pip (10-14 pips) para máxima generación de recursos. Los asentamientos posicionales sacrifican algo de producción (6-8 pips) para: bloquear expansión de oponentes, asegurar puertos clave o reclamar rutas de camino más largo. Ambos son necesarios en el juego equilibrado.",
          de: "Produktionssiedlungen priorisieren hohe Pip-Zahlen (10-14 Pips) für maximale Ressourcengenerierung. Positionssiedlungen opfern etwas Produktion (6-8 Pips) um: Gegnerexpansion zu blockieren, wichtige Häfen zu sichern oder längste Straßenrouten zu beanspruchen. Beide sind im ausgewogenen Spiel notwendig.",
          nl: "Productie nederzettingen geven prioriteit aan hoge pip tellingen (10-14 pips) voor maximale bron generatie. Positionele nederzettingen offeren wat productie (6-8 pips) om: tegenstander expansie te blokkeren, sleutel havens te beveiligen of langste weg routes te claimen. Beide zijn noodzakelijk in gebalanceerd spel."
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
