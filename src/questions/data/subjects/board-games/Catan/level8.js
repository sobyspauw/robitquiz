// Quiz Template - Level 8: Bord spelletjes - Catan
(function() {
  const level8 = {
    name: {
      en: "Catan - Champion",
      es: "Catan - Campeón",
      de: "Catan - Champion",
      nl: "Catan - Kampioen"
    },
    questions: [
      {
        question: {
          en: "According to tournament rules, what happens if two players have equal largest army at exactly 3 knights?",
          es: "Según las reglas del torneo, ¿qué sucede si dos jugadores tienen igual ejército más grande con exactamente 3 caballeros?",
          de: "Was passiert laut Turnierregeln, wenn zwei Spieler mit genau 3 Rittern die gleich größte Armee haben?",
          nl: "Wat gebeurt er volgens toernooiregels als twee spelers precies 3 ridders hebben voor het grootste leger?"
        },
        options: [
          { en: "First player to reach 3 knights retains bonus until opponent plays 4th", es: "El primer jugador en alcanzar 3 caballeros mantiene el bono hasta que el oponente juegue el 4°", de: "Erster Spieler mit 3 Rittern behält Bonus bis Gegner 4. spielt", nl: "Eerste speler die 3 ridders bereikt behoudt bonus tot tegenstander 4e speelt" },
          { en: "Both players receive 2-point bonus", es: "Ambos jugadores reciben bonificación de 2 puntos", de: "Beide Spieler erhalten 2-Punkte-Bonus", nl: "Beide spelers ontvangen 2-punten bonus" },
          { en: "Neither player receives any bonus", es: "Ningún jugador recibe ningún bono", de: "Kein Spieler erhält einen Bonus", nl: "Geen speler ontvangt bonus" },
          { en: "Points split 1-1 between tied players", es: "Puntos divididos 1-1 entre jugadores empatados", de: "Punkte aufgeteilt 1-1 zwischen gebundenen Spielern", nl: "Punten verdeeld 1-1 tussen gelijke spelers" }
        ],
        correct: 0,
        explanation: {
          en: "In official tournament play, largest army follows 'first possession' rules. The first player to reach 3 knights claims the bonus and retains it until another player plays enough knights to strictly exceed their count, creating strategic timing decisions.",
          es: "En el juego oficial de torneo, el ejército más grande sigue las reglas de 'primera posesión'. El primer jugador en alcanzar 3 caballeros reclama el bono y lo retiene hasta que otro jugador juegue suficientes caballeros para exceder estrictamente su conteo, creando decisiones estratégicas de tiempo.",
          de: "Im offiziellen Turnierspiel folgt die größte Armee den 'Erstbesitz'-Regeln. Der erste Spieler, der 3 Ritter erreicht, beansprucht den Bonus und behält ihn, bis ein anderer Spieler genug Ritter spielt, um seine Anzahl strikt zu übertreffen, was strategische Timing-Entscheidungen schafft.",
          nl: "In officieel toernooispel volgt het grootste leger 'eerste bezit' regels. De eerste speler die 3 ridders bereikt claimt de bonus en behoudt deze totdat een andere speler genoeg ridders speelt om hun aantal strikt te overtreffen, wat strategische timing beslissingen creëert."
        }
      },
      {
        question: {
          en: "What is the 'robber denial' tactic in competitive play?",
          es: "¿Cuál es la táctica de 'negación del ladrón' en el juego competitivo?",
          de: "Was ist die 'Räuberverweigenungs'-Taktik im Wettkampfspiel?",
          nl: "Wat is de 'rover ontkenning' tactiek in competitief spel?"
        },
        options: [
          { en: "Placing robber on low-pip hexes to minimize your own losses while denying opponents", es: "Colocar al ladrón en hexágonos de bajo pip para minimizar tus propias pérdidas mientras niegas a los oponentes", de: "Räuber auf niedrige-Pip-Hexe setzen, um eigene Verluste zu minimieren und Gegner zu verweigern", nl: "Rover plaatsen op lage-pip hexen om eigen verliezen te minimaliseren terwijl je tegenstanders ontzegt" },
          { en: "Never moving robber from desert", es: "Nunca mover al ladrón del desierto", de: "Räuber nie aus der Wüste bewegen", nl: "Rover nooit uit woestijn verplaatsen" },
          { en: "Always targeting leader regardless of position", es: "Siempre apuntar al líder sin importar la posición", de: "Immer auf Anführer zielen unabhängig von Position", nl: "Altijd leider targeten ongeacht positie" },
          { en: "Refusing to steal cards when placing robber", es: "Rechazar robar cartas al colocar al ladrón", de: "Ablehnen Karten zu stehlen beim Platzieren des Räubers", nl: "Weigeren kaarten te stelen bij plaatsen rover" }
        ],
        correct: 0,
        explanation: {
          en: "Advanced players use 'robber denial' by placing the robber on hexes where they have no settlements but opponents do, preferring lower-pip numbers. This denies opponent production while minimizing their own vulnerability when opponents retaliate with the robber.",
          es: "Los jugadores avanzados usan 'negación del ladrón' colocando al ladrón en hexágonos donde no tienen asentamientos pero los oponentes sí, prefiriendo números de pip más bajos. Esto niega la producción del oponente mientras minimiza su propia vulnerabilidad cuando los oponentes toman represalias con el ladrón.",
          de: "Fortgeschrittene Spieler verwenden 'Räuberverweigenung', indem sie den Räuber auf Hexe setzen, wo sie keine Siedlungen haben, aber Gegner schon, wobei sie niedrigere Pip-Zahlen bevorzugen. Dies verweigert Gegner-Produktion und minimiert gleichzeitig die eigene Verwundbarkeit, wenn Gegner mit dem Räuber zurückschlagen.",
          nl: "Geavanceerde spelers gebruiken 'rover ontkenning' door de rover te plaatsen op hexen waar zij geen nederzettingen hebben maar tegenstanders wel, met voorkeur voor lagere pip-nummers. Dit ontzegt tegenstander productie terwijl het hun eigen kwetsbaarheid minimaliseert wanneer tegenstanders met de rover terugslaan."
        }
      },
      {
        question: {
          en: "What is the rare 'simultaneous 10-point' edge case ruling?",
          es: "¿Cuál es la rara regla de caso límite de '10 puntos simultáneos'?",
          de: "Was ist die seltene '10-Punkte-gleichzeitig'-Grenzfall-Regelung?",
          nl: "Wat is de zeldzame '10-punten simultaan' randgeval uitspraak?"
        },
        options: [
          { en: "Active player wins if multiple players reach 10 on same turn", es: "El jugador activo gana si múltiples jugadores alcanzan 10 en el mismo turno", de: "Aktiver Spieler gewinnt, wenn mehrere Spieler 10 im selben Zug erreichen", nl: "Actieve speler wint als meerdere spelers 10 bereiken in dezelfde beurt" },
          { en: "All tied players share victory equally", es: "Todos los jugadores empatados comparten la victoria por igual", de: "Alle gebundenen Spieler teilen den Sieg gleichermaßen", nl: "Alle gelijke spelers delen overwinning gelijk" },
          { en: "Game continues until clear winner emerges", es: "El juego continúa hasta que emerja un ganador claro", de: "Spiel setzt sich fort bis klarer Gewinner entsteht", nl: "Spel gaat door tot duidelijke winnaar ontstaat" },
          { en: "Player with highest pip total wins", es: "El jugador con el total de pip más alto gana", de: "Spieler mit höchster Pip-Summe gewinnt", nl: "Speler met hoogste pip totaal wint" }
        ],
        correct: 0,
        explanation: {
          en: "In the extremely rare case where multiple players reach 10 points simultaneously (e.g., through a robber swap of largest army during another player's turn), official rules state the active player whose turn it is wins. This prioritizes turn order in tie situations.",
          es: "En el caso extremadamente raro donde múltiples jugadores alcanzan 10 puntos simultáneamente (p. ej., a través de un intercambio de ladrón del ejército más grande durante el turno de otro jugador), las reglas oficiales establecen que el jugador activo cuyo turno es gana. Esto prioriza el orden de turno en situaciones de empate.",
          de: "In dem äußerst seltenen Fall, dass mehrere Spieler gleichzeitig 10 Punkte erreichen (z.B. durch einen Räubertausch der größten Armee während des Zuges eines anderen Spielers), besagen die offiziellen Regeln, dass der aktive Spieler, dessen Zug es ist, gewinnt. Dies priorisiert die Zugreihenfolge in Gleichstandssituationen.",
          nl: "In het extreem zeldzame geval dat meerdere spelers tegelijkertijd 10 punten bereiken (bijv. door een rover wissel van grootste leger tijdens een andere speler's beurt), stellen officiële regels dat de actieve speler wiens beurt het is wint. Dit geeft prioriteit aan beurtorder in gelijkspel situaties."
        }
      },
      {
        question: {
          en: "When should you employ the 'intentional 7-card' strategy?",
          es: "¿Cuándo debes emplear la estrategia de '7 cartas intencionales'?",
          de: "Wann sollte man die 'absichtliche 7-Karten'-Strategie anwenden?",
          nl: "Wanneer moet je de 'opzettelijke 7-kaarten' strategie toepassen?"
        },
        options: [
          { en: "When holding victory point cards and wanting to avoid revealing hand size", es: "Al sostener cartas de puntos de victoria y querer evitar revelar el tamaño de la mano", de: "Beim Halten von Siegpunktkarten und Vermeiden der Offenlegung der Handgröße", nl: "Bij vasthouden van overwinningspuntkaarten en vermijden handgrootte te onthullen" },
          { en: "Always maintain 7+ cards for trading power", es: "Siempre mantener 7+ cartas para poder comercial", de: "Immer 7+ Karten für Handelsmacht halten", nl: "Altijd 7+ kaarten behouden voor handelskracht" },
          { en: "Only in first 3 turns of game", es: "Solo en los primeros 3 turnos del juego", de: "Nur in den ersten 3 Zügen des Spiels", nl: "Alleen in eerste 3 beurten van spel" },
          { en: "Never advisable under any circumstances", es: "Nunca recomendable bajo ninguna circunstancia", de: "Niemals ratsam unter keinen Umständen", nl: "Nooit raadzaam onder enige omstandigheid" }
        ],
        correct: 0,
        explanation: {
          en: "Expert players sometimes hold 7+ cards intentionally when possessing hidden victory point cards and nearing 10 points. The risk of losing half on a 7-roll is offset by preventing opponents from accurately tracking how close you are to winning through hand-size observation.",
          es: "Los jugadores expertos a veces sostienen 7+ cartas intencionalmente cuando poseen cartas de puntos de victoria ocultas y se acercan a 10 puntos. El riesgo de perder la mitad en una tirada de 7 se compensa al evitar que los oponentes rastreen con precisión qué tan cerca estás de ganar mediante la observación del tamaño de la mano.",
          de: "Experten halten manchmal absichtlich 7+ Karten, wenn sie versteckte Siegpunktkarten besitzen und sich 10 Punkten nähern. Das Risiko, die Hälfte bei einem 7-Wurf zu verlieren, wird durch die Verhinderung ausgeglichen, dass Gegner genau verfolgen, wie nah man dem Sieg durch Handgrößenbeobachtung ist.",
          nl: "Expertspelers houden soms opzettelijk 7+ kaarten wanneer ze verborgen overwinningspuntkaarten bezitten en 10 punten naderen. Het risico om de helft te verliezen bij een 7-worp wordt gecompenseerd door te voorkomen dat tegenstanders nauwkeurig volgen hoe dichtbij je winnen bent via handgrootte observatie."
        }
      },
      {
        question: {
          en: "What defines the 'pip-weighted robber placement' calculation?",
          es: "¿Qué define el cálculo de 'colocación del ladrón ponderada por pip'?",
          de: "Was definiert die 'Pip-gewichtete Räuberplatzierungs'-Berechnung?",
          nl: "Wat definieert de 'pip-gewogen rover plaatsing' berekening?"
        },
        options: [
          { en: "Target hex with highest (opponent settlements × pip value) total", es: "Apuntar al hexágono con el total más alto de (asentamientos de oponentes × valor de pip)", de: "Zielen auf Hex mit höchstem (Gegnersiedlungen × Pip-Wert) Gesamt", nl: "Target hex met hoogste (tegenstander nederzettingen × pip waarde) totaal" },
          { en: "Always place on highest pip number available", es: "Siempre colocar en el número de pip más alto disponible", de: "Immer auf höchster verfügbarer Pip-Zahl platzieren", nl: "Altijd plaatsen op hoogste beschikbare pip nummer" },
          { en: "Count only your own settlement pips affected", es: "Contar solo los pips de tus propios asentamientos afectados", de: "Nur eigene betroffene Siedlungs-Pips zählen", nl: "Tel alleen eigen beïnvloede nederzettings pips" },
          { en: "Random placement to avoid pattern recognition", es: "Colocación aleatoria para evitar reconocimiento de patrones", de: "Zufällige Platzierung zur Vermeidung von Mustererkennung", nl: "Willekeurige plaatsing om patroonherkenning te vermijden" }
        ],
        correct: 0,
        explanation: {
          en: "Competitive players calculate robber impact by multiplying each opponent's settlement/city count on a hex by the hex's pip value. A 6-pip hex with 2 opponent settlements (12 points) causes more disruption than an 8-pip hex with 1 settlement (8 points), optimizing denial.",
          es: "Los jugadores competitivos calculan el impacto del ladrón multiplicando el conteo de asentamientos/ciudades de cada oponente en un hexágono por el valor de pip del hexágono. Un hexágono de 6 pip con 2 asentamientos de oponentes (12 puntos) causa más interrupción que un hexágono de 8 pip con 1 asentamiento (8 puntos), optimizando la negación.",
          de: "Wettkampfspieler berechnen den Räubereinfluss, indem sie die Siedlungs-/Stadtzahl jedes Gegners auf einem Hex mit dem Pip-Wert des Hex multiplizieren. Ein 6-Pip-Hex mit 2 Gegnersiedlungen (12 Punkte) verursacht mehr Störung als ein 8-Pip-Hex mit 1 Siedlung (8 Punkte), optimiert die Verweigerung.",
          nl: "Competitieve spelers berekenen rover impact door elke tegenstander's nederzetting/stad telling op een hex te vermenigvuldigen met de pip waarde van de hex. Een 6-pip hex met 2 tegenstander nederzettingen (12 punten) veroorzaakt meer verstoring dan een 8-pip hex met 1 nederzetting (8 punten), optimaliseert ontkenning."
        }
      },
      {
        question: {
          en: "What is the 'counter-intuitive harbor' principle?",
          es: "¿Cuál es el principio de 'puerto contraintuitivo'?",
          de: "Was ist das 'kontraintuitive Hafen'-Prinzip?",
          nl: "Wat is het 'contra-intuïtieve haven' principe?"
        },
        options: [
          { en: "Build toward 2:1 harbors for resources you lack, not resources you have", es: "Construir hacia puertos 2:1 para recursos que te faltan, no recursos que tienes", de: "Zu 2:1-Häfen für fehlende Ressourcen bauen, nicht für vorhandene", nl: "Bouwen naar 2:1 havens voor bronnen die je mist, niet bronnen die je hebt" },
          { en: "Avoid all harbor settlements completely", es: "Evitar completamente todos los asentamientos de puerto", de: "Alle Hafensiedlungen vollständig vermeiden", nl: "Vermijd alle havennederzettingen volledig" },
          { en: "Only use harbors you already produce from", es: "Solo usar puertos de los que ya produces", de: "Nur Häfen nutzen, von denen man bereits produziert", nl: "Alleen havens gebruiken waar je al van produceert" },
          { en: "Harbor value irrelevant in tournament play", es: "Valor del puerto irrelevante en juego de torneo", de: "Hafenwert irrelevant im Turnierspiel", nl: "Havenwaarde irrelevant in toernooispel" }
        ],
        correct: 0,
        explanation: {
          en: "Advanced strategy dictates building toward 2:1 specialty harbors for resources you don't produce well. A 2:1 wheat harbor is most valuable when you lack wheat production but have excess of other resources to convert, creating resource flexibility where you're weakest.",
          es: "La estrategia avanzada dicta construir hacia puertos especializados 2:1 para recursos que no produces bien. Un puerto de trigo 2:1 es más valioso cuando careces de producción de trigo pero tienes exceso de otros recursos para convertir, creando flexibilidad de recursos donde eres más débil.",
          de: "Fortgeschrittene Strategie diktiert den Bau zu 2:1-Spezialhäfen für Ressourcen, die man nicht gut produziert. Ein 2:1-Weizenhafen ist am wertvollsten, wenn man wenig Weizenproduktion hat, aber überschüssige andere Ressourcen zum Umwandeln hat, was Ressourcenflexibilität schafft, wo man am schwächsten ist.",
          nl: "Geavanceerde strategie dicteert bouwen naar 2:1 specialiteit havens voor bronnen die je niet goed produceert. Een 2:1 tarwe haven is meest waardevol wanneer je tarwe productie mist maar overschot van andere bronnen hebt om te converteren, wat bronflexibiliteit creëert waar je zwakst bent."
        }
      },
      {
        question: {
          en: "In tournament play, when can you retract a trade offer?",
          es: "En el juego de torneo, ¿cuándo puedes retractar una oferta de intercambio?",
          de: "Wann kann man im Turnierspiel ein Handelsangebot zurückziehen?",
          nl: "Wanneer kun je in toernooispel een handelsaanbod intrekken?"
        },
        options: [
          { en: "Before any player explicitly accepts the offer", es: "Antes de que cualquier jugador acepte explícitamente la oferta", de: "Bevor ein Spieler das Angebot ausdrücklich annimmt", nl: "Voordat enige speler het aanbod expliciet accepteert" },
          { en: "Never once announced publicly", es: "Nunca una vez anunciado públicamente", de: "Nie sobald öffentlich angekündigt", nl: "Nooit zodra publiekelijk aangekondigd" },
          { en: "Only if robber is rolled immediately after", es: "Solo si se saca el ladrón inmediatamente después", de: "Nur wenn Räuber sofort danach gewürfelt wird", nl: "Alleen als rover direct daarna wordt gegooid" },
          { en: "Anytime before your next turn", es: "En cualquier momento antes de tu próximo turno", de: "Jederzeit vor Ihrem nächsten Zug", nl: "Altijd voor je volgende beurt" }
        ],
        correct: 0,
        explanation: {
          en: "Official tournament rules state trade offers can be modified or retracted until a player explicitly accepts. Once acceptance occurs, the trade is binding. This allows tactical probing of what resources opponents need without commitment until acceptance.",
          es: "Las reglas oficiales del torneo establecen que las ofertas de intercambio pueden modificarse o retractarse hasta que un jugador las acepte explícitamente. Una vez que ocurre la aceptación, el intercambio es vinculante. Esto permite sondear tácticamente qué recursos necesitan los oponentes sin compromiso hasta la aceptación.",
          de: "Offizielle Turnierregeln besagen, dass Handelsangebote geändert oder zurückgezogen werden können, bis ein Spieler ausdrücklich annimmt. Sobald die Annahme erfolgt, ist der Handel bindend. Dies ermöglicht taktisches Sondieren, welche Ressourcen Gegner benötigen, ohne Verpflichtung bis zur Annahme.",
          nl: "Officiële toernooiregels stellen dat handelsaanbiedingen kunnen worden gewijzigd of ingetrokken totdat een speler expliciet accepteert. Zodra acceptatie plaatsvindt, is de handel bindend. Dit maakt tactisch peilen mogelijk welke bronnen tegenstanders nodig hebben zonder verplichting tot acceptatie."
        }
      },
      {
        question: {
          en: "What is the 'development card counting' technique?",
          es: "¿Cuál es la técnica de 'conteo de cartas de desarrollo'?",
          de: "Was ist die 'Entwicklungskartenzählungs'-Technik?",
          nl: "Wat is de 'ontwikkelingskaarten tellen' techniek?"
        },
        options: [
          { en: "Track played cards to estimate remaining victory points and knights in deck", es: "Rastrear cartas jugadas para estimar puntos de victoria y caballeros restantes en el mazo", de: "Gespielte Karten verfolgen, um verbleibende Siegpunkte und Ritter im Deck zu schätzen", nl: "Gespeelde kaarten volgen om resterende overwinningspunten en ridders in deck te schatten" },
          { en: "Count only your own development cards acquired", es: "Contar solo tus propias cartas de desarrollo adquiridas", de: "Nur eigene erworbene Entwicklungskarten zählen", nl: "Tel alleen eigen verkregen ontwikkelingskaarten" },
          { en: "Memorize exact order cards were drawn", es: "Memorizar el orden exacto en que se robaron las cartas", de: "Genaue Reihenfolge der gezogenen Karten merken", nl: "Exacte volgorde onthouden waarin kaarten werden getrokken" },
          { en: "Illegal in all competitive formats", es: "Ilegal en todos los formatos competitivos", de: "Illegal in allen Wettkampfformaten", nl: "Illegaal in alle competitieve formaten" }
        ],
        correct: 0,
        explanation: {
          en: "Tournament players track which development cards have been played (14 knights, 5 victory points, 2 monopoly, 2 road building, 2 year of plenty). As the deck depletes, probability calculations for drawing victory points or knights become increasingly accurate, informing purchase decisions.",
          es: "Los jugadores de torneo rastrean qué cartas de desarrollo se han jugado (14 caballeros, 5 puntos de victoria, 2 monopolio, 2 construcción de carreteras, 2 año de abundancia). A medida que el mazo se agota, los cálculos de probabilidad para robar puntos de victoria o caballeros se vuelven cada vez más precisos, informando las decisiones de compra.",
          de: "Turnierspieler verfolgen, welche Entwicklungskarten gespielt wurden (14 Ritter, 5 Siegpunkte, 2 Monopol, 2 Straßenbau, 2 Jahr des Überflusses). Wenn das Deck sich leert, werden Wahrscheinlichkeitsberechnungen für das Ziehen von Siegpunkten oder Rittern zunehmend genau und informieren Kaufentscheidungen.",
          nl: "Toernooispelers volgen welke ontwikkelingskaarten zijn gespeeld (14 ridders, 5 overwinningspunten, 2 monopolie, 2 wegbouw, 2 jaar van overvloed). Naarmate het deck uitput, worden waarschijnlijkheidsberekeningen voor trekken van overwinningspunten of ridders steeds nauwkeuriger, wat aankoopbeslissingen informeert."
        }
      },
      {
        question: {
          en: "What is the optimal response when an opponent plays Monopoly?",
          es: "¿Cuál es la respuesta óptima cuando un oponente juega Monopolio?",
          de: "Was ist die optimale Antwort, wenn ein Gegner Monopol spielt?",
          nl: "Wat is de optimale reactie wanneer een tegenstander Monopolie speelt?"
        },
        options: [
          { en: "Immediately reassess their likely build plan and adjust robber strategy", es: "Reevaluar inmediatamente su plan de construcción probable y ajustar la estrategia del ladrón", de: "Sofort ihren wahrscheinlichen Bauplan neu bewerten und Räuberstrategie anpassen", nl: "Direct hun waarschijnlijke bouwplan herbekijken en roverstrategie aanpassen" },
          { en: "Play your own Monopoly in retaliation", es: "Jugar tu propio Monopolio en represalia", de: "Eigenes Monopol als Vergeltung spielen", nl: "Je eigen Monopolie in vergelding spelen" },
          { en: "Request to see all cards taken", es: "Solicitar ver todas las cartas tomadas", de: "Verlangen alle genommenen Karten zu sehen", nl: "Verzoeken alle genomen kaarten te zien" },
          { en: "Forfeit the game immediately", es: "Renunciar al juego inmediatamente", de: "Spiel sofort aufgeben", nl: "Spel direct opgeven" }
        ],
        correct: 0,
        explanation: {
          en: "When an opponent plays Monopoly, expert players immediately infer what they're building (e.g., monopoly on ore suggests city upgrade). This intelligence should trigger defensive actions like robber placement on their key hexes or blocking settlement spots before they execute their plan.",
          es: "Cuando un oponente juega Monopolio, los jugadores expertos inmediatamente infieren lo que están construyendo (p. ej., monopolio en mineral sugiere mejora de ciudad). Esta inteligencia debe desencadenar acciones defensivas como la colocación del ladrón en sus hexágonos clave o bloqueando lugares de asentamiento antes de que ejecuten su plan.",
          de: "Wenn ein Gegner Monopol spielt, schließen Experten sofort, was sie bauen (z.B. Monopol auf Erz deutet auf Stadtaufwertung hin). Diese Information sollte Abwehrmaßnahmen auslösen wie Räuberplatzierung auf ihren Schlüsselhexen oder Blockieren von Siedlungsplätzen, bevor sie ihren Plan ausführen.",
          nl: "Wanneer een tegenstander Monopolie speelt, leiden expertspelers direct af wat ze bouwen (bijv. monopolie op erts suggereert stadsupgrade). Deze intelligentie moet defensieve acties activeren zoals roverplaatsing op hun sleutelhexen of blokkeren van nederzettingsplekken voordat ze hun plan uitvoeren."
        }
      },
      {
        question: {
          en: "What constitutes the 'settlement speed trap' scenario?",
          es: "¿Qué constituye el escenario de 'trampa de velocidad de asentamiento'?",
          de: "Was macht das 'Siedlungsgeschwindigkeitsfallen'-Szenario aus?",
          nl: "Wat vormt het 'nederzetting snelheidsval' scenario?"
        },
        options: [
          { en: "Building 4th settlement before opponents can block remaining legal spots", es: "Construir el 4° asentamiento antes de que los oponentes puedan bloquear los lugares legales restantes", de: "4. Siedlung bauen, bevor Gegner verbleibende legale Plätze blockieren können", nl: "4e nederzetting bouwen voordat tegenstanders resterende legale plekken kunnen blokkeren" },
          { en: "Placing all settlements in first 5 turns", es: "Colocar todos los asentamientos en los primeros 5 turnos", de: "Alle Siedlungen in den ersten 5 Zügen platzieren", nl: "Alle nederzettingen in eerste 5 beurten plaatsen" },
          { en: "Never building more than 3 settlements total", es: "Nunca construir más de 3 asentamientos en total", de: "Niemals mehr als 3 Siedlungen insgesamt bauen", nl: "Nooit meer dan 3 nederzettingen totaal bouwen" },
          { en: "Building settlements faster than cities always", es: "Construir asentamientos más rápido que ciudades siempre", de: "Siedlungen immer schneller als Städte bauen", nl: "Nederzettingen altijd sneller bouwen dan steden" }
        ],
        correct: 0,
        explanation: {
          en: "The settlement speed trap occurs when viable settlement spots become scarce. Players who race to claim their 4th settlement before opponents can place blocking settlements gain significant positional advantage, even if it delays city construction. Board geometry creates natural cutoff points.",
          es: "La trampa de velocidad de asentamiento ocurre cuando los lugares de asentamiento viables se vuelven escasos. Los jugadores que corren para reclamar su 4° asentamiento antes de que los oponentes puedan colocar asentamientos de bloqueo obtienen una ventaja posicional significativa, incluso si retrasa la construcción de ciudades. La geometría del tablero crea puntos de corte naturales.",
          de: "Die Siedlungsgeschwindigkeitsfalle tritt auf, wenn brauchbare Siedlungsplätze knapp werden. Spieler, die um ihre 4. Siedlung rennen, bevor Gegner blockierende Siedlungen platzieren können, gewinnen signifikanten Positionsvorteil, selbst wenn es den Stadtbau verzögert. Die Brettgeometrie schafft natürliche Grenzpunkte.",
          nl: "De nederzetting snelheidsval treedt op wanneer leefbare nederzettingsplekken schaars worden. Spelers die racen om hun 4e nederzetting te claimen voordat tegenstanders blokkerende nederzettingen kunnen plaatsen, winnen significant positioneel voordeel, zelfs als het stadsbouw vertraagt. Bordgeometrie creëert natuurlijke afkappunten."
        }
      },
      {
        question: {
          en: "What is the 'knight-hoarding' endgame technique?",
          es: "¿Cuál es la técnica de 'acumulación de caballeros' en el final del juego?",
          de: "Was ist die 'Ritter-Horten'-Endspiel-Technik?",
          nl: "Wat is de 'ridder-hamsteren' eindspel techniek?"
        },
        options: [
          { en: "Holding 2-3 unplayed knights to steal largest army on final turn", es: "Sostener 2-3 caballeros no jugados para robar el ejército más grande en el turno final", de: "2-3 ungespielte Ritter halten, um größte Armee im letzten Zug zu stehlen", nl: "2-3 niet-gespeelde ridders vasthouden om grootste leger in laatste beurt te stelen" },
          { en: "Playing all knights immediately when drawn", es: "Jugar todos los caballeros inmediatamente cuando se roban", de: "Alle Ritter sofort spielen wenn gezogen", nl: "Alle ridders direct spelen wanneer getrokken" },
          { en: "Never playing any knight cards ever", es: "Nunca jugar ninguna carta de caballero nunca", de: "Niemals Ritterkarten spielen", nl: "Nooit ridderkaarten spelen" },
          { en: "Collecting knights but not using robber function", es: "Coleccionar caballeros pero no usar la función de ladrón", de: "Ritter sammeln aber Räuberfunktion nicht nutzen", nl: "Ridders verzamelen maar rover functie niet gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "Advanced players sometimes hold 2-3 knights unplayed while at 6-7 points, planning to play them consecutively on their winning turn. This allows stealing largest army (2 points) plus using the robber moves strategically, potentially reaching 10 points in one explosive turn.",
          es: "Los jugadores avanzados a veces sostienen 2-3 caballeros sin jugar mientras están en 6-7 puntos, planeando jugarlos consecutivamente en su turno ganador. Esto permite robar el ejército más grande (2 puntos) más usar los movimientos del ladrón estratégicamente, potencialmente alcanzando 10 puntos en un turno explosivo.",
          de: "Fortgeschrittene Spieler halten manchmal 2-3 Ritter ungespielt bei 6-7 Punkten und planen, sie nacheinander in ihrem Gewinnzug zu spielen. Dies ermöglicht das Stehlen der größten Armee (2 Punkte) plus strategische Nutzung der Räuberzüge, möglicherweise 10 Punkte in einem explosiven Zug zu erreichen.",
          nl: "Geavanceerde spelers houden soms 2-3 ridders niet-gespeeld bij 6-7 punten, plannend om ze achtereenvolgens in hun winnende beurt te spelen. Dit maakt het stelen van grootste leger (2 punten) mogelijk plus strategisch gebruik van de roverzetten, mogelijk 10 punten bereikend in één explosieve beurt."
        }
      },
      {
        question: {
          en: "What is the 'false tempo' trading tactic?",
          es: "¿Cuál es la táctica de intercambio de 'falso tempo'?",
          de: "Was ist die 'Falsches-Tempo'-Handelstaktik?",
          nl: "Wat is de 'vals tempo' handel tactiek?"
        },
        options: [
          { en: "Making suboptimal trades early to disguise your true strategy and resource needs", es: "Hacer intercambios subóptimos temprano para disfrazar tu verdadera estrategia y necesidades de recursos", de: "Früh suboptimale Geschäfte machen, um wahre Strategie und Ressourcenbedarf zu verschleiern", nl: "Suboptimale ruilen vroeg maken om je echte strategie en bronbehoeften te verhullen" },
          { en: "Trading as fast as possible every turn", es: "Comerciar lo más rápido posible cada turno", de: "So schnell wie möglich jeden Zug handeln", nl: "Zo snel mogelijk elke beurt ruilen" },
          { en: "Never trading with any opponents", es: "Nunca comerciar con ningún oponente", de: "Niemals mit Gegnern handeln", nl: "Nooit ruilen met tegenstanders" },
          { en: "Only accepting trades that favor you 2:1", es: "Solo aceptar intercambios que te favorezcan 2:1", de: "Nur Geschäfte annehmen die 2:1 begünstigen", nl: "Alleen ruilen accepteren die jou 2:1 bevoordelen" }
        ],
        correct: 0,
        explanation: {
          en: "Expert players deliberately make seemingly inefficient trades early in the game to mislead opponents about their resource priorities and strategic direction. This misdirection prevents opponents from accurately blocking or countering your true path to victory until it's too late.",
          es: "Los jugadores expertos deliberadamente hacen intercambios aparentemente ineficientes al principio del juego para engañar a los oponentes sobre sus prioridades de recursos y dirección estratégica. Esta mala dirección evita que los oponentes bloqueen o contrarresten con precisión tu verdadero camino a la victoria hasta que sea demasiado tarde.",
          de: "Experten machen absichtlich scheinbar ineffiziente Geschäfte früh im Spiel, um Gegner über ihre Ressourcenprioritäten und strategische Richtung irrezuführen. Diese Fehllenkung verhindert, dass Gegner Ihren wahren Siegpfad genau blockieren oder kontern, bis es zu spät ist.",
          nl: "Expertspelers maken opzettelijk schijnbaar inefficiënte ruilen vroeg in het spel om tegenstanders te misleiden over hun bronprioriteiten en strategische richting. Deze misleiding voorkomt dat tegenstanders je echte pad naar overwinning nauwkeurig blokkeren of counteren tot het te laat is."
        }
      },
      {
        question: {
          en: "When should you deliberately avoid upgrading to cities?",
          es: "¿Cuándo debes deliberadamente evitar mejorar a ciudades?",
          de: "Wann sollte man absichtlich vermeiden, zu Städten aufzuwerten?",
          nl: "Wanneer moet je opzettelijk vermijden naar steden te upgraden?"
        },
        options: [
          { en: "When leading by 2+ points and wanting to appear less threatening", es: "Cuando lideras por 2+ puntos y quieres parecer menos amenazante", de: "Wenn 2+ Punkte führend und weniger bedrohlich erscheinen möchten", nl: "Wanneer 2+ punten voorligt en minder bedreigend wilt lijken" },
          { en: "Cities always superior to settlements in all situations", es: "Las ciudades siempre superiores a los asentamientos en todas las situaciones", de: "Städte immer überlegen gegenüber Siedlungen in allen Situationen", nl: "Steden altijd superieur aan nederzettingen in alle situaties" },
          { en: "Only when ore production is impossible", es: "Solo cuando la producción de mineral es imposible", de: "Nur wenn Erzproduktion unmöglich ist", nl: "Alleen wanneer ertsproductie onmogelijk is" },
          { en: "Never avoid city upgrades under any circumstance", es: "Nunca evitar mejoras de ciudad bajo ninguna circunstancia", de: "Niemals Stadtaufwertungen unter keinen Umständen vermeiden", nl: "Nooit stadsupgrades vermijden onder enige omstandigheid" }
        ],
        correct: 0,
        explanation: {
          en: "When significantly ahead, delaying city construction while expanding settlements can make you appear less threatening, reducing robber targeting frequency. The 4-5 settlement positions with solid production often yields more resources than 2-3 cities while drawing less attention.",
          es: "Cuando estás significativamente adelante, retrasar la construcción de ciudades mientras expandes asentamientos puede hacerte parecer menos amenazante, reduciendo la frecuencia de apuntado del ladrón. Las 4-5 posiciones de asentamiento con producción sólida a menudo producen más recursos que 2-3 ciudades mientras atraen menos atención.",
          de: "Wenn deutlich vorne, kann das Verzögern des Stadtbaus bei gleichzeitiger Siedlungserweiterung Sie weniger bedrohlich erscheinen lassen und die Räuber-Zielhäufigkeit reduzieren. Die 4-5 Siedlungspositionen mit solider Produktion bringen oft mehr Ressourcen als 2-3 Städte bei weniger Aufmerksamkeit.",
          nl: "Wanneer significant vooruit, kan het uitstellen van stadsbouw terwijl je nederzettingen uitbreidt je minder bedreigend laten lijken, wat rover targeting frequentie vermindert. De 4-5 nederzettingsposities met solide productie leveren vaak meer bronnen op dan 2-3 steden terwijl ze minder aandacht trekken."
        }
      },
      {
        question: {
          en: "What defines the 'resource cascade' victory condition?",
          es: "¿Qué define la condición de victoria de 'cascada de recursos'?",
          de: "Was definiert die 'Ressourcenkaskaden'-Siegbedingung?",
          nl: "Wat definieert de 'bron cascade' overwinningsvoorwaarde?"
        },
        options: [
          { en: "Building settlement that enables next settlement which enables third in rapid sequence", es: "Construir asentamiento que permite el siguiente asentamiento que permite el tercero en secuencia rápida", de: "Siedlung bauen die nächste Siedlung ermöglicht die dritte in schneller Sequenz ermöglicht", nl: "Nederzetting bouwen die volgende nederzetting mogelijk maakt die derde in snelle volgorde mogelijk maakt" },
          { en: "Collecting all five resource types simultaneously", es: "Recolectar todos los cinco tipos de recursos simultáneamente", de: "Alle fünf Ressourcentypen gleichzeitig sammeln", nl: "Alle vijf brontypes tegelijkertijd verzamelen" },
          { en: "Trading resources in descending order of value", es: "Comerciar recursos en orden descendente de valor", de: "Ressourcen in absteigender Reihenfolge des Wertes handeln", nl: "Bronnen ruilen in aflopende volgorde van waarde" },
          { en: "Winning through development cards only", es: "Ganar solo a través de cartas de desarrollo", de: "Nur durch Entwicklungskarten gewinnen", nl: "Winnen alleen door ontwikkelingskaarten" }
        ],
        correct: 0,
        explanation: {
          en: "Resource cascade victories occur when each new settlement's production immediately enables building the next one. For example, a brick/lumber settlement providing the exact resources needed for another settlement at a wheat/ore location, which then funds a city upgrade, creating exponential growth.",
          es: "Las victorias en cascada de recursos ocurren cuando la producción de cada nuevo asentamiento permite inmediatamente construir el siguiente. Por ejemplo, un asentamiento de ladrillo/madera que proporciona los recursos exactos necesarios para otro asentamiento en una ubicación de trigo/mineral, que luego financia una mejora de ciudad, creando crecimiento exponencial.",
          de: "Ressourcenkaskaden-Siege treten auf, wenn die Produktion jeder neuen Siedlung sofort den Bau der nächsten ermöglicht. Zum Beispiel eine Ziegel/Holz-Siedlung, die genau die Ressourcen für eine weitere Siedlung an einem Weizen/Erz-Standort liefert, die dann eine Stadtaufwertung finanziert und exponentielles Wachstum schafft.",
          nl: "Bron cascade overwinningen treden op wanneer de productie van elke nieuwe nederzetting direct de volgende mogelijk maakt. Bijvoorbeeld een baksteen/hout nederzetting die exact de bronnen levert die nodig zijn voor een andere nederzetting op een tarwe/erts locatie, die dan een stadsupgrade financiert, exponentiële groei creërend."
        }
      },
      {
        question: {
          en: "What is the 'hidden army' tournament tactic?",
          es: "¿Cuál es la táctica de torneo de 'ejército oculto'?",
          de: "Was ist die 'versteckte Armee'-Turniertaktik?",
          nl: "Wat is de 'verborgen leger' toernooi tactiek?"
        },
        options: [
          { en: "Playing knights only after opponent commits to their own army strategy", es: "Jugar caballeros solo después de que el oponente se comprometa con su propia estrategia de ejército", de: "Ritter nur spielen nachdem Gegner sich ihrer eigenen Armeestrategie verpflichtet", nl: "Ridders alleen spelen nadat tegenstander zich committeert aan hun eigen legerstrategie" },
          { en: "Never revealing knight cards to any player", es: "Nunca revelar cartas de caballero a ningún jugador", de: "Niemals Ritterkarten einem Spieler offenbaren", nl: "Nooit ridderkaarten aan enige speler onthullen" },
          { en: "Hiding knights under the board physically", es: "Esconder caballeros físicamente debajo del tablero", de: "Ritter physisch unter dem Brett verstecken", nl: "Ridders fysiek onder het bord verbergen" },
          { en: "Playing knights without moving robber", es: "Jugar caballeros sin mover al ladrón", de: "Ritter spielen ohne Räuber zu bewegen", nl: "Ridders spelen zonder rover te verplaatsen" }
        ],
        correct: 0,
        explanation: {
          en: "The hidden army tactic involves holding knights unplayed while observing opponents. If an opponent invests heavily in knights for largest army, you can suddenly play multiple knights to claim it. If they don't pursue army, you pivot to using knights for robber control instead.",
          es: "La táctica del ejército oculto implica sostener caballeros sin jugar mientras observas a los oponentes. Si un oponente invierte mucho en caballeros para el ejército más grande, puedes repentinamente jugar múltiples caballeros para reclamarlo. Si no persiguen el ejército, pivoteas para usar caballeros para el control del ladrón en su lugar.",
          de: "Die versteckte Armee-Taktik beinhaltet das Halten ungespielter Ritter während man Gegner beobachtet. Wenn ein Gegner stark in Ritter für die größte Armee investiert, können Sie plötzlich mehrere Ritter spielen, um sie zu beanspruchen. Wenn sie die Armee nicht verfolgen, schwenken Sie um, Ritter für Räuberkontrolle zu nutzen.",
          nl: "De verborgen leger tactiek houdt in dat ridders niet-gespeeld worden gehouden terwijl je tegenstanders observeert. Als een tegenstander zwaar investeert in ridders voor grootste leger, kun je plotseling meerdere ridders spelen om het te claimen. Als ze leger niet nastreven, pivot je naar ridders gebruiken voor rovercontrole in plaats daarvan."
        }
      },
      {
        question: {
          en: "What is the 'forced discard math' calculation?",
          es: "¿Cuál es el cálculo de 'matemáticas de descarte forzado'?",
          de: "Was ist die 'erzwungene Abwurf-Mathematik'-Berechnung?",
          nl: "Wat is de 'gedwongen weggooi wiskunde' berekening?"
        },
        options: [
          { en: "Calculating probability of 7-roll × half your hand size to value holding 8+ cards", es: "Calcular la probabilidad de tirada de 7 × la mitad del tamaño de tu mano para valorar sostener 8+ cartas", de: "Wahrscheinlichkeit eines 7-Wurfs × halbe Handgröße berechnen, um Wert von 8+ Karten zu bewerten", nl: "Waarschijnlijkheid van 7-worp × helft van je handgrootte berekenen om waarde van 8+ kaarten te waarderen" },
          { en: "Always discard lowest pip resources first", es: "Siempre descartar primeros los recursos de pip más bajo", de: "Immer zuerst niedrigste Pip-Ressourcen abwerfen", nl: "Altijd eerst laagste pip bronnen weggooien" },
          { en: "Counting cards discarded by opponents only", es: "Contar solo las cartas descartadas por los oponentes", de: "Nur von Gegnern abgeworfene Karten zählen", nl: "Alleen door tegenstanders weggegooide kaarten tellen" },
          { en: "Refusing to discard under any circumstances", es: "Rechazar descartar bajo cualquier circunstancia", de: "Ablehnen unter allen Umständen abzuwerfen", nl: "Weigeren weg te gooien onder enige omstandigheid" }
        ],
        correct: 0,
        explanation: {
          en: "Advanced players calculate expected loss from holding large hands: with 8 cards, there's ~17% chance per roll of losing 4 cards (6/36 probability of rolling 7). This expected value of 0.68 cards lost per opponent turn helps decide whether to hold resources or build immediately.",
          es: "Los jugadores avanzados calculan la pérdida esperada de sostener manos grandes: con 8 cartas, hay ~17% de probabilidad por tirada de perder 4 cartas (probabilidad 6/36 de sacar 7). Este valor esperado de 0.68 cartas perdidas por turno de oponente ayuda a decidir si sostener recursos o construir inmediatamente.",
          de: "Fortgeschrittene Spieler berechnen erwarteten Verlust beim Halten großer Hände: Mit 8 Karten gibt es ~17% Chance pro Wurf, 4 Karten zu verlieren (6/36 Wahrscheinlichkeit eine 7 zu würfeln). Dieser Erwartungswert von 0,68 verlorenen Karten pro Gegnerzug hilft zu entscheiden, ob Ressourcen gehalten oder sofort gebaut werden soll.",
          nl: "Geavanceerde spelers berekenen verwacht verlies van grote handen vasthouden: met 8 kaarten is er ~17% kans per worp om 4 kaarten te verliezen (6/36 waarschijnlijkheid van 7 gooien). Deze verwachte waarde van 0,68 verloren kaarten per tegenstander beurt helpt beslissen of bronnen vasthouden of direct bouwen."
        }
      },
      {
        question: {
          en: "What constitutes an 'illegal settlement' tournament challenge?",
          es: "¿Qué constituye un desafío de torneo de 'asentamiento ilegal'?",
          de: "Was macht eine 'illegale Siedlungs'-Turnierherausforderung aus?",
          nl: "Wat vormt een 'illegale nederzetting' toernooi uitdaging?"
        },
        options: [
          { en: "Settlement placed within 2 road segments of any existing settlement including your own", es: "Asentamiento colocado dentro de 2 segmentos de carretera de cualquier asentamiento existente incluyendo el tuyo", de: "Siedlung innerhalb 2 Straßensegmenten jeder bestehenden Siedlung einschließlich eigener platziert", nl: "Nederzetting geplaatst binnen 2 wegsegmenten van elke bestaande nederzetting inclusief je eigen" },
          { en: "Any settlement not on a harbor", es: "Cualquier asentamiento que no esté en un puerto", de: "Jede Siedlung nicht an einem Hafen", nl: "Elke nederzetting niet op een haven" },
          { en: "Building more than 5 settlements total", es: "Construir más de 5 asentamientos en total", de: "Mehr als 5 Siedlungen insgesamt bauen", nl: "Meer dan 5 nederzettingen totaal bouwen" },
          { en: "Settlement without connecting road", es: "Asentamiento sin carretera de conexión", de: "Siedlung ohne verbindende Straße", nl: "Nederzetting zonder verbindende weg" }
        ],
        correct: 0,
        explanation: {
          en: "The distance rule states settlements must be at least 2 road segments apart from ALL settlements, including your own. Tournament players sometimes challenge placements that appear legal but violate this when measured carefully. Judges will remove illegal settlements and penalize the player.",
          es: "La regla de distancia establece que los asentamientos deben estar al menos a 2 segmentos de carretera de TODOS los asentamientos, incluidos los tuyos. Los jugadores de torneo a veces desafían colocaciones que parecen legales pero violan esto cuando se mide cuidadosamente. Los jueces eliminarán asentamientos ilegales y penalizarán al jugador.",
          de: "Die Distanzregel besagt, dass Siedlungen mindestens 2 Straßensegmente von ALLEN Siedlungen entfernt sein müssen, einschließlich der eigenen. Turnierspieler fordern manchmal Platzierungen heraus, die legal erscheinen, aber dies bei sorgfältiger Messung verletzen. Schiedsrichter entfernen illegale Siedlungen und bestrafen den Spieler.",
          nl: "De afstandsregel stelt dat nederzettingen minstens 2 wegsegmenten verwijderd moeten zijn van ALLE nederzettingen, inclusief je eigen. Toernooispelers dagen soms plaatsingen uit die legaal lijken maar dit schenden wanneer zorgvuldig gemeten. Scheidsrechters zullen illegale nederzettingen verwijderen en de speler straffen."
        }
      },
      {
        question: {
          en: "What is the 'road divergence' advanced tactic?",
          es: "¿Cuál es la táctica avanzada de 'divergencia de carreteras'?",
          de: "Was ist die 'Straßendivergenz'-fortgeschrittene Taktik?",
          nl: "Wat is de 'weg divergentie' geavanceerde tactiek?"
        },
        options: [
          { en: "Building roads in multiple directions to keep opponents uncertain about your target settlement spot", es: "Construir carreteras en múltiples direcciones para mantener a los oponentes inseguros sobre tu lugar de asentamiento objetivo", de: "Straßen in mehrere Richtungen bauen, um Gegner unsicher über Ihren Zielsiedlungsplatz zu halten", nl: "Wegen bouwen in meerdere richtingen om tegenstanders onzeker te houden over je doelnederzettingsplek" },
          { en: "Building only straight roads never turning", es: "Construir solo carreteras rectas sin girar nunca", de: "Nur gerade Straßen bauen niemals abbiegen", nl: "Alleen rechte wegen bouwen nooit draaien" },
          { en: "Destroying roads to rebuild elsewhere", es: "Destruir carreteras para reconstruir en otro lugar", de: "Straßen zerstören um anderswo wieder aufzubauen", nl: "Wegen vernietigen om elders opnieuw te bouwen" },
          { en: "Building roads without intending settlements", es: "Construir carreteras sin intención de asentamientos", de: "Straßen bauen ohne Siedlungsabsicht", nl: "Wegen bouwen zonder nederzettingsbedoeling" }
        ],
        correct: 0,
        explanation: {
          en: "Expert players build roads branching in 2-3 different directions simultaneously, concealing their true settlement target. This forces opponents to either block multiple spots (resource-intensive) or guess wrong, giving you better odds of reaching your preferred location first.",
          es: "Los jugadores expertos construyen carreteras ramificándose en 2-3 direcciones diferentes simultáneamente, ocultando su verdadero objetivo de asentamiento. Esto obliga a los oponentes a bloquear múltiples lugares (intensivo en recursos) o adivinar mal, dándote mejores probabilidades de alcanzar tu ubicación preferida primero.",
          de: "Experten bauen Straßen, die sich gleichzeitig in 2-3 verschiedene Richtungen verzweigen und ihr wahres Siedlungsziel verbergen. Dies zwingt Gegner entweder mehrere Plätze zu blockieren (ressourcenintensiv) oder falsch zu raten, was Ihnen bessere Chancen gibt, Ihren bevorzugten Standort zuerst zu erreichen.",
          nl: "Expertspelers bouwen wegen die vertakken in 2-3 verschillende richtingen tegelijkertijd, hun echte nederzettingsdoel verhullend. Dit dwingt tegenstanders ofwel meerdere plekken te blokkeren (bronintensief) of verkeerd te gokken, wat jou betere kansen geeft om je voorkeurslocatie eerst te bereiken."
        }
      },
      {
        question: {
          en: "What is the 'pre-turn negotiation' tournament rule?",
          es: "¿Cuál es la regla de torneo de 'negociación previa al turno'?",
          de: "Was ist die 'Vor-Zug-Verhandlungs'-Turnierregels?",
          nl: "Wat is de 'voor-beurt onderhandeling' toernooi regel?"
        },
        options: [
          { en: "Trades can only be proposed and accepted during active player's turn", es: "Los intercambios solo se pueden proponer y aceptar durante el turno del jugador activo", de: "Geschäfte können nur während des Zuges des aktiven Spielers vorgeschlagen und angenommen werden", nl: "Ruilen kunnen alleen worden voorgesteld en geaccepteerd tijdens actieve speler's beurt" },
          { en: "All trades must be arranged before game starts", es: "Todos los intercambios deben organizarse antes de que comience el juego", de: "Alle Geschäfte müssen vor Spielbeginn arrangiert werden", nl: "Alle ruilen moeten worden geregeld voordat spel begint" },
          { en: "Players can trade during any player's turn freely", es: "Los jugadores pueden comerciar durante el turno de cualquier jugador libremente", de: "Spieler können während jedes Spielerzuges frei handeln", nl: "Spelers kunnen tijdens elke speler's beurt vrij ruilen" },
          { en: "Trading only allowed on turns divisible by 3", es: "Comerciar solo permitido en turnos divisibles por 3", de: "Handel nur erlaubt bei durch 3 teilbaren Zügen", nl: "Ruilen alleen toegestaan op beurten deelbaar door 3" }
        ],
        correct: 0,
        explanation: {
          en: "Tournament rules strictly prohibit trades except during the active player's turn. This prevents complex multi-party collusion and keeps game flow organized. Players cannot negotiate or commit to future trades outside their own turn, though they can discuss generally.",
          es: "Las reglas del torneo prohíben estrictamente los intercambios excepto durante el turno del jugador activo. Esto previene la colusión compleja de múltiples partes y mantiene el flujo del juego organizado. Los jugadores no pueden negociar o comprometerse con intercambios futuros fuera de su propio turno, aunque pueden discutir en general.",
          de: "Turnierregeln verbieten Geschäfte strikt außer während des Zuges des aktiven Spielers. Dies verhindert komplexe Mehrparteienabsprachen und hält den Spielfluss organisiert. Spieler können nicht verhandeln oder sich zu zukünftigen Geschäften außerhalb ihres eigenen Zuges verpflichten, obwohl sie allgemein diskutieren können.",
          nl: "Toernooiregels verbieden strikt ruilen behalve tijdens de actieve speler's beurt. Dit voorkomt complexe meerdere-partijen samenzwering en houdt spelverloop georganiseerd. Spelers kunnen niet onderhandelen of zich committeren aan toekomstige ruilen buiten hun eigen beurt, hoewel ze algemeen kunnen discussiëren."
        }
      },
      {
        question: {
          en: "What is the 'resource starvation' defensive strategy?",
          es: "¿Cuál es la estrategia defensiva de 'inanición de recursos'?",
          de: "Was ist die 'Ressourcenaushungerungs'-Verteidigungsstrategie?",
          nl: "Wat is de 'bron uitputting' defensieve strategie?"
        },
        options: [
          { en: "Refusing all trades with leading player while robbing their key hexes repeatedly", es: "Rechazar todos los intercambios con el jugador líder mientras robas sus hexágonos clave repetidamente", de: "Alle Geschäfte mit führendem Spieler ablehnen während wiederholt ihre Schlüsselhexe beraubt werden", nl: "Alle ruilen weigeren met leidende speler terwijl herhaaldelijk hun sleutelhexen beroven" },
          { en: "Trading only with the game leader exclusively", es: "Comerciar solo con el líder del juego exclusivamente", de: "Nur ausschließlich mit dem Spielführer handeln", nl: "Alleen exclusief ruilen met spelleider" },
          { en: "Giving free resources to losing players", es: "Dar recursos gratis a jugadores perdedores", de: "Kostenlose Ressourcen an verlierende Spieler geben", nl: "Gratis bronnen geven aan verliezende spelers" },
          { en: "Hoarding all resources without building", es: "Acumular todos los recursos sin construir", de: "Alle Ressourcen horten ohne zu bauen", nl: "Alle bronnen hamsteren zonder te bouwen" }
        ],
        correct: 0,
        explanation: {
          en: "When one player pulls ahead significantly, other players form tactical coalitions, refusing to trade with the leader and coordinating robber placements on their most productive hexes. This resource starvation can slow a runaway leader enough for others to catch up.",
          es: "Cuando un jugador se adelanta significativamente, otros jugadores forman coaliciones tácticas, rechazando comerciar con el líder y coordinando colocaciones del ladrón en sus hexágonos más productivos. Esta inanición de recursos puede ralentizar a un líder desbocado lo suficiente para que otros lo alcancen.",
          de: "Wenn ein Spieler deutlich vorzieht, bilden andere Spieler taktische Koalitionen, lehnen Geschäfte mit dem Anführer ab und koordinieren Räuberplatzierungen auf ihren produktivsten Hexen. Diese Ressourcenaushungerung kann einen davonlaufenden Anführer genug verlangsamen, damit andere aufholen.",
          nl: "Wanneer één speler significant vooruitloopt, vormen andere spelers tactische coalities, weigeren te ruilen met de leider en coördineren roverplaatsingen op hun meest productieve hexen. Deze bron uitputting kan een weglopende leider genoeg vertragen voor anderen om in te halen."
        }
      },
      {
        question: {
          en: "What is the 'development card bluff' psychological tactic?",
          es: "¿Cuál es la táctica psicológica de 'bluff de carta de desarrollo'?",
          de: "Was ist die 'Entwicklungskarten-Bluff'-psychologische Taktik?",
          nl: "Wat is de 'ontwikkelingskaart bluf' psychologische tactiek?"
        },
        options: [
          { en: "Buying development cards when at 8-9 points to suggest victory point cards even when holding knights", es: "Comprar cartas de desarrollo cuando estás en 8-9 puntos para sugerir cartas de puntos de victoria incluso cuando sostienes caballeros", de: "Entwicklungskarten bei 8-9 Punkten kaufen, um Siegpunktkarten zu suggerieren, selbst beim Halten von Rittern", nl: "Ontwikkelingskaarten kopen bij 8-9 punten om overwinningspuntkaarten te suggereren zelfs bij vasthouden van ridders" },
          { en: "Never buying development cards to avoid suspicion", es: "Nunca comprar cartas de desarrollo para evitar sospecha", de: "Niemals Entwicklungskarten kaufen um Verdacht zu vermeiden", nl: "Nooit ontwikkelingskaarten kopen om verdenking te vermijden" },
          { en: "Showing all development cards to opponents openly", es: "Mostrar todas las cartas de desarrollo a los oponentes abiertamente", de: "Alle Entwicklungskarten Gegnern offen zeigen", nl: "Alle ontwikkelingskaarten openlijk aan tegenstanders tonen" },
          { en: "Only buying development cards on first turn", es: "Solo comprar cartas de desarrollo en el primer turno", de: "Nur im ersten Zug Entwicklungskarten kaufen", nl: "Alleen ontwikkelingskaarten kopen in eerste beurt" }
        ],
        correct: 0,
        explanation: {
          en: "Expert players deliberately buy development cards when close to 10 points even if not holding victory points. This creates uncertainty, as opponents assume you might win next turn with hidden VPs, potentially causing them to make suboptimal defensive moves or trade decisions.",
          es: "Los jugadores expertos deliberadamente compran cartas de desarrollo cuando están cerca de 10 puntos incluso si no sostienen puntos de victoria. Esto crea incertidumbre, ya que los oponentes asumen que podrías ganar el próximo turno con VPs ocultos, potencialmente causando que hagan movimientos defensivos subóptimos o decisiones de intercambio.",
          de: "Experten kaufen absichtlich Entwicklungskarten, wenn sie nahe 10 Punkten sind, selbst wenn sie keine Siegpunkte halten. Dies schafft Unsicherheit, da Gegner annehmen, Sie könnten nächsten Zug mit versteckten VPs gewinnen, was sie möglicherweise zu suboptimalen Verteidigungszügen oder Handelsentscheidungen veranlasst.",
          nl: "Expertspelers kopen opzettelijk ontwikkelingskaarten wanneer ze dichtbij 10 punten zijn zelfs als ze geen overwinningspunten vasthouden. Dit creëert onzekerheid, omdat tegenstanders aannemen dat je volgende beurt zou kunnen winnen met verborgen VPs, mogelijk veroorzakend dat ze suboptimale defensieve zetten of ruilbeslissingen maken."
        }
      },
      {
        question: {
          en: "What is the 'pip deficit recovery' mid-game adjustment?",
          es: "¿Qué es el ajuste de 'recuperación de déficit de pip' en el juego medio?",
          de: "Was ist die 'Pip-Defizit-Wiederherstellungs'-Mittelspiel-Anpassung?",
          nl: "Wat is de 'pip tekort herstel' middenspel aanpassing?"
        },
        options: [
          { en: "Pivoting from settlement expansion to harbors+development cards when below 40 total pips", es: "Pivotear de expansión de asentamientos a puertos+cartas de desarrollo cuando está por debajo de 40 pips totales", de: "Von Siedlungserweiterung zu Häfen+Entwicklungskarten schwenken bei unter 40 Gesamt-Pips", nl: "Omschakelen van nederzettingsuitbreiding naar havens+ontwikkelingskaarten bij onder 40 totale pips" },
          { en: "Always expanding settlements regardless of pip count", es: "Siempre expandir asentamientos sin importar el conteo de pip", de: "Immer Siedlungen erweitern unabhängig von Pip-Zählung", nl: "Altijd nederzettingen uitbreiden ongeacht pip telling" },
          { en: "Immediately resigning when pip deficit detected", es: "Renunciar inmediatamente cuando se detecte déficit de pip", de: "Sofort aufgeben wenn Pip-Defizit erkannt", nl: "Direct opgeven wanneer pip tekort gedetecteerd" },
          { en: "Pip values irrelevant in competitive play", es: "Los valores de pip son irrelevantes en juego competitivo", de: "Pip-Werte irrelevant im Wettkampfspiel", nl: "Pip waarden irrelevant in competitief spel" }
        ],
        correct: 0,
        explanation: {
          en: "Players with low pip totals (<40 across all settlements) should pivot strategy away from settlement expansion toward harbor trading efficiency and development card victory points. Direct pip-to-pip competition becomes unwinnable; alternative scoring paths offer better chances.",
          es: "Los jugadores con totales de pip bajos (<40 en todos los asentamientos) deben cambiar la estrategia lejos de la expansión de asentamientos hacia la eficiencia de comercio en puertos y puntos de victoria de cartas de desarrollo. La competencia pip-a-pip directa se vuelve inganable; las rutas de puntuación alternativas ofrecen mejores posibilidades.",
          de: "Spieler mit niedrigen Pip-Summen (<40 über alle Siedlungen) sollten die Strategie von Siedlungserweiterung weg zu Hafen-Handelseffizienz und Entwicklungskarten-Siegpunkten schwenken. Direkter Pip-zu-Pip-Wettbewerb wird ungewinnbar; alternative Wertungspfade bieten bessere Chancen.",
          nl: "Spelers met lage pip totalen (<40 over alle nederzettingen) moeten strategie omschakelen weg van nederzettingsuitbreiding naar havenhandelsefficiëntie en ontwikkelingskaart overwinningspunten. Directe pip-tot-pip competitie wordt onwinbaar; alternatieve scorepaden bieden betere kansen."
        }
      },
      {
        question: {
          en: "What defines the 'trading embargo effectiveness threshold'?",
          es: "¿Qué define el 'umbral de efectividad del embargo comercial'?",
          de: "Was definiert die 'Handelsembargo-Effektivitätsschwelle'?",
          nl: "Wat definieert de 'handelsembargo effectiviteits drempel'?"
        },
        options: [
          { en: "Embargo impacts leader when they control <60% of targeted resource production", es: "El embargo impacta al líder cuando controlan <60% de la producción del recurso objetivo", de: "Embargo beeinflusst Anführer wenn sie <60% der Zielressourcenproduktion kontrollieren", nl: "Embargo beïnvloedt leider wanneer ze <60% van doelbron productie controleren" },
          { en: "Embargoes always effective regardless of production", es: "Los embargos siempre son efectivos sin importar la producción", de: "Embargos immer effektiv unabhängig von Produktion", nl: "Embargo's altijd effectief ongeacht productie" },
          { en: "Only embargo players with zero production", es: "Solo embargar jugadores con cero producción", de: "Nur Spieler mit Nullproduktion embargieren", nl: "Alleen spelers met nul productie embargo" },
          { en: "Embargoes prohibited in tournament play", es: "Los embargos están prohibidos en el juego de torneo", de: "Embargos im Turnierspiel verboten", nl: "Embargo's verboden in toernooispel" }
        ],
        correct: 0,
        explanation: {
          en: "Trade embargoes only effectively slow leaders if they produce less than 60% of the embargoed resource. Above this threshold, leaders are self-sufficient and embargoes merely incentivize them to use harbors/banks. The 60% threshold represents the point where 4:1 trading becomes preferable to negotiation.",
          es: "Los embargos comerciales solo ralentizan efectivamente a los líderes si producen menos del 60% del recurso embargado. Por encima de este umbral, los líderes son autosuficientes y los embargos simplemente los incentivan a usar puertos/bancos. El umbral del 60% representa el punto donde el comercio 4:1 se vuelve preferible a la negociación.",
          de: "Handelsembargos verlangsamen Anführer nur effektiv, wenn sie weniger als 60% der embargierten Ressource produzieren. Über dieser Schwelle sind Anführer selbstgenügsam und Embargos animieren sie lediglich, Häfen/Banken zu nutzen. Die 60%-Schwelle repräsentiert den Punkt, wo 4:1-Handel der Verhandlung vorzuziehen ist.",
          nl: "Handelsembargo's vertragen leiders alleen effectief als ze minder dan 60% van de geëmbargorde bron produceren. Boven deze drempel zijn leiders zelfvoorzienend en embargo's stimuleren hen slechts havens/banken te gebruiken. De 60% drempel vertegenwoordigt het punt waar 4:1 handel verkieslijker wordt dan onderhandeling."
        }
      },
      {
        question: {
          en: "What is the 'reverse psychology' settlement placement tactic?",
          es: "¿Cuál es la táctica de colocación de asentamientos de 'psicología inversa'?",
          de: "Was ist die 'Umkehrpsychologie'-Siedlungsplatzierungstaktik?",
          nl: "Wat is de 'omgekeerde psychologie' nederzettingsplaatsings tactiek?"
        },
        options: [
          { en: "Building toward obviously suboptimal spots to make opponents ignore your true target location", es: "Construir hacia lugares obviamente subóptimos para hacer que los oponentes ignoren tu ubicación objetivo real", de: "Zu offensichtlich suboptimalen Plätzen bauen um Gegner Ihren wahren Zielort ignorieren zu lassen", nl: "Bouwen naar duidelijk suboptimale plekken om tegenstanders je echte doellocatie te laten negeren" },
          { en: "Always announcing settlement intentions publicly", es: "Siempre anunciar intenciones de asentamiento públicamente", de: "Siedlungsabsichten immer öffentlich ankündigen", nl: "Altijd nederzettingsbedoelingen publiekelijk aankondigen" },
          { en: "Building settlements without any roads", es: "Construir asentamientos sin ninguna carretera", de: "Siedlungen ohne Straßen bauen", nl: "Nederzettingen bouwen zonder wegen" },
          { en: "Placing settlements on desert hexes only", es: "Colocar asentamientos solo en hexágonos del desierto", de: "Siedlungen nur auf Wüstenhexe platzieren", nl: "Nederzettingen alleen op woestijnhexen plaatsen" }
        ],
        correct: 0,
        explanation: {
          en: "Advanced players build initial roads toward low-value intersections, making opponents think that's their target. Once opponents relax or commit resources elsewhere, they rapidly shift roads to claim the actually-desired high-value spot, exploiting opponents' misplaced blocking attempts.",
          es: "Los jugadores avanzados construyen carreteras iniciales hacia intersecciones de bajo valor, haciendo que los oponentes piensen que ese es su objetivo. Una vez que los oponentes se relajan o comprometen recursos en otro lugar, cambian rápidamente las carreteras para reclamar el lugar de alto valor realmente deseado, explotando los intentos de bloqueo mal colocados de los oponentes.",
          de: "Fortgeschrittene Spieler bauen anfängliche Straßen zu niedrig-wertigen Schnittpunkten, sodass Gegner denken, das sei ihr Ziel. Sobald Gegner sich entspannen oder Ressourcen anderswo einsetzen, wechseln sie schnell Straßen, um den tatsächlich gewünschten hochwertigen Platz zu beanspruchen, indem sie fehlplatzierte Blockierungsversuche der Gegner ausnutzen.",
          nl: "Geavanceerde spelers bouwen initiële wegen naar lage-waarde kruispunten, waardoor tegenstanders denken dat dat hun doel is. Zodra tegenstanders ontspannen of bronnen elders committeren, verschuiven ze snel wegen om de werkelijk-gewenste hoge-waarde plek te claimen, uitbuitend tegenstanders' verkeerd geplaatste blokkeeraanvallen."
        }
      },
      {
        question: {
          en: "What is the 'exponential city advantage' mathematical principle?",
          es: "¿Qué es el principio matemático de 'ventaja de ciudad exponencial'?",
          de: "Was ist das mathematische Prinzip des 'exponentiellen Stadtvorteils'?",
          nl: "Wat is het wiskundige principe van 'exponentieel stadsvoordeel'?"
        },
        options: [
          { en: "Each city doubles affected hex output, creating 2^n growth where n = number of cities", es: "Cada ciudad duplica la salida del hexágono afectado, creando crecimiento 2^n donde n = número de ciudades", de: "Jede Stadt verdoppelt betroffene Hex-Ausgabe und schafft 2^n Wachstum wo n = Anzahl der Städte", nl: "Elke stad verdubbelt beïnvloede hex output, creërend 2^n groei waar n = aantal steden" },
          { en: "Cities provide linear +1 point advantage only", es: "Las ciudades proporcionan solo ventaja lineal de +1 punto", de: "Städte bieten nur linearen +1-Punkt-Vorteil", nl: "Steden bieden alleen lineair +1 punt voordeel" },
          { en: "City advantage decreases over time", es: "La ventaja de la ciudad disminuye con el tiempo", de: "Stadtvorteil nimmt mit der Zeit ab", nl: "Stadsvoordeel neemt af over tijd" },
          { en: "Cities and settlements equal in value mathematically", es: "Las ciudades y los asentamientos son iguales en valor matemáticamente", de: "Städte und Siedlungen mathematisch gleichwertig", nl: "Steden en nederzettingen gelijk in waarde wiskundig" }
        ],
        correct: 0,
        explanation: {
          en: "Cities don't just add 1 point—they double production on affected hexes. With 3 cities on 8-pip hexes (24 pips total production), you generate 2x resources compared to settlements, enabling 4th city faster, then 5th exponentially faster. This 2^n scaling explains why city-focused players often pull away dramatically mid-game.",
          es: "Las ciudades no solo agregan 1 punto, duplican la producción en los hexágonos afectados. Con 3 ciudades en hexágonos de 8 pip (24 pips de producción total), generas 2x recursos en comparación con los asentamientos, permitiendo la 4ª ciudad más rápido, luego la 5ª exponencialmente más rápido. Este escalamiento 2^n explica por qué los jugadores enfocados en ciudades a menudo se alejan dramáticamente en el juego medio.",
          de: "Städte fügen nicht nur 1 Punkt hinzu—sie verdoppeln die Produktion auf betroffenen Hexen. Mit 3 Städten auf 8-Pip-Hexen (24 Pips Gesamtproduktion) generiert man 2x Ressourcen verglichen mit Siedlungen, ermöglicht 4. Stadt schneller, dann 5. exponentiell schneller. Diese 2^n-Skalierung erklärt, warum Stadt-fokussierte Spieler sich im Mittelspiel oft dramatisch absetzen.",
          nl: "Steden voegen niet alleen 1 punt toe—ze verdubbelen productie op beïnvloede hexen. Met 3 steden op 8-pip hexen (24 pips totale productie), genereer je 2x bronnen vergeleken met nederzettingen, wat 4e stad sneller mogelijk maakt, dan 5e exponentieel sneller. Deze 2^n schaling verklaart waarom stad-gefocuste spelers vaak dramatisch weglopen mid-game."
        }
      },
      {
        question: {
          en: "What defines the 'knight timing paradox' in tournament play?",
          es: "¿Qué define la 'paradoja de tiempo del caballero' en el juego de torneo?",
          de: "Was definiert das 'Ritter-Timing-Paradoxon' im Turnierspiel?",
          nl: "Wat definieert de 'ridder timing paradox' in toernooispel?"
        },
        options: [
          { en: "Playing knights early secures army but playing late allows robber control when most needed", es: "Jugar caballeros temprano asegura el ejército pero jugar tarde permite el control del ladrón cuando más se necesita", de: "Ritter früh spielen sichert Armee aber spätes Spielen erlaubt Räuberkontrolle wenn am meisten gebraucht", nl: "Ridders vroeg spelen veiligstelt leger maar laat spelen maakt rovercontrole mogelijk wanneer meest nodig" },
          { en: "Knights should only be played on even-numbered turns", es: "Los caballeros solo deben jugarse en turnos pares", de: "Ritter sollten nur in geradzahligen Zügen gespielt werden", nl: "Ridders moeten alleen in even-genummerde beurten gespeeld worden" },
          { en: "All knights must be played within first 10 turns", es: "Todos los caballeros deben jugarse dentro de los primeros 10 turnos", de: "Alle Ritter müssen innerhalb der ersten 10 Züge gespielt werden", nl: "Alle ridders moeten binnen eerste 10 beurten gespeeld worden" },
          { en: "Knight timing has no strategic impact", es: "El tiempo del caballero no tiene impacto estratégico", de: "Ritter-Timing hat keinen strategischen Einfluss", nl: "Ridder timing heeft geen strategische impact" }
        ],
        correct: 0,
        explanation: {
          en: "The knight timing paradox: playing knights early (turns 8-15) maximizes largest army chances but 'wastes' robber moves on low-impact situations. Holding knights for late-game (turns 25+) preserves them for critical robber placements but risks opponents claiming army first. Expert players balance 3-4 early, 2-3 held back.",
          es: "La paradoja del tiempo del caballero: jugar caballeros temprano (turnos 8-15) maximiza las posibilidades del ejército más grande pero 'desperdicia' movimientos del ladrón en situaciones de bajo impacto. Sostener caballeros para el juego tardío (turnos 25+) los preserva para colocaciones críticas del ladrón pero arriesga que los oponentes reclamen el ejército primero. Los jugadores expertos equilibran 3-4 temprano, 2-3 retenidos.",
          de: "Das Ritter-Timing-Paradoxon: Ritter früh spielen (Züge 8-15) maximiert größte Armee-Chancen aber 'verschwendet' Räuberzüge auf geringwirkende Situationen. Ritter für Spätspiel (Züge 25+) aufheben bewahrt sie für kritische Räuberplatzierungen aber riskiert, dass Gegner Armee zuerst beanspruchen. Experten balancieren 3-4 früh, 2-3 zurückgehalten.",
          nl: "De ridder timing paradox: ridders vroeg spelen (beurten 8-15) maximaliseert grootste leger kansen maar 'verspilt' roverzetten op lage-impact situaties. Ridders vasthouden voor laat-spel (beurten 25+) bewaart ze voor kritieke roverplaatsingen maar riskeert tegenstanders leger eerst claimen. Expertspelers balanceren 3-4 vroeg, 2-3 achtergehouden."
        }
      },
      {
        question: {
          en: "What is the '7-roll insurance' hand management principle?",
          es: "¿Qué es el principio de gestión de mano de 'seguro de tirada de 7'?",
          de: "Was ist das 'Sieben-Wurf-Versicherungs'-Handmanagement-Prinzip?",
          nl: "Wat is het '7-worp verzekering' handbeheer principe?"
        },
        options: [
          { en: "Holding exactly 7 cards maximizes building capability while avoiding discard risk", es: "Sostener exactamente 7 cartas maximiza la capacidad de construcción mientras evita el riesgo de descarte", de: "Exakt 7 Karten halten maximiert Baufähigkeit während Abwurfrisiko vermieden wird", nl: "Precies 7 kaarten vasthouden maximaliseert bouwcapaciteit terwijl weggooi risico vermeden wordt" },
          { en: "Always maintain 10+ cards for maximum trading power", es: "Siempre mantener 10+ cartas para máximo poder comercial", de: "Immer 10+ Karten für maximale Handelsmacht halten", nl: "Altijd 10+ kaarten behouden voor maximum handelskracht" },
          { en: "Never hold more than 3 cards total", es: "Nunca sostener más de 3 cartas en total", de: "Niemals mehr als 3 Karten insgesamt halten", nl: "Nooit meer dan 3 kaarten totaal vasthouden" },
          { en: "Card count irrelevant for optimal play", es: "El conteo de cartas es irrelevante para el juego óptimo", de: "Kartenzählung irrelevant für optimales Spiel", nl: "Kaart telling irrelevant voor optimaal spel" }
        ],
        correct: 0,
        explanation: {
          en: "The '7-card sweet spot' balances opportunity vs risk. With 7 cards, you can build most structures (cities need 5, settlements need 4+trade) while avoiding 7-roll discard penalties. At 8+ cards, losing half on 7-roll (16.67% per turn) typically costs more than the extra flexibility gained.",
          es: "El 'punto ideal de 7 cartas' equilibra oportunidad vs riesgo. Con 7 cartas, puedes construir la mayoría de las estructuras (las ciudades necesitan 5, los asentamientos necesitan 4+intercambio) mientras evitas las penalizaciones de descarte de tirada de 7. Con 8+ cartas, perder la mitad en tirada de 7 (16.67% por turno) típicamente cuesta más que la flexibilidad extra ganada.",
          de: "Der '7-Karten-Sweet-Spot' balanciert Chance vs Risiko. Mit 7 Karten kann man die meisten Strukturen bauen (Städte brauchen 5, Siedlungen brauchen 4+Handel) während 7-Wurf-Abwurfstrafen vermieden werden. Bei 8+ Karten kostet der Verlust der Hälfte bei 7-Wurf (16,67% pro Zug) typischerweise mehr als die gewonnene Extra-Flexibilität.",
          nl: "De '7-kaarten sweet spot' balanceert kans vs risico. Met 7 kaarten kun je de meeste structuren bouwen (steden hebben 5 nodig, nederzettingen hebben 4+handel nodig) terwijl je 7-worp weggooi boetes vermijdt. Bij 8+ kaarten kost het verliezen van de helft bij 7-worp (16,67% per beurt) typisch meer dan de extra flexibiliteit verkregen."
        }
      },
      {
        question: {
          en: "What is the 'settlement efficiency ratio' calculation?",
          es: "¿Qué es el cálculo de 'relación de eficiencia de asentamiento'?",
          de: "Was ist die 'Siedlungseffizienz-Verhältnis'-Berechnung?",
          nl: "Wat is de 'nederzetting efficiëntie ratio' berekening?"
        },
        options: [
          { en: "Total pip value ÷ settlements built; optimal players maintain >10 pips per settlement", es: "Valor de pip total ÷ asentamientos construidos; los jugadores óptimos mantienen >10 pips por asentamiento", de: "Gesamt-Pip-Wert ÷ gebaute Siedlungen; optimale Spieler halten >10 Pips pro Siedlung", nl: "Totale pip waarde ÷ gebouwde nederzettingen; optimale spelers behouden >10 pips per nederzetting" },
          { en: "Number of settlements ÷ turns elapsed", es: "Número de asentamientos ÷ turnos transcurridos", de: "Anzahl Siedlungen ÷ verstrichene Züge", nl: "Aantal nederzettingen ÷ verstreken beurten" },
          { en: "Victory points ÷ cards in hand", es: "Puntos de victoria ÷ cartas en mano", de: "Siegpunkte ÷ Karten in Hand", nl: "Overwinningspunten ÷ kaarten in hand" },
          { en: "Efficiency ratios unmeasurable in Catan", es: "Las relaciones de eficiencia son inmensurables en Catan", de: "Effizienzverhältnisse in Catan unmessbar", nl: "Efficiëntie ratio's onmeetbaar in Catan" }
        ],
        correct: 0,
        explanation: {
          en: "Elite players track settlement efficiency: total pip value divided by settlement count. A player with 50 pips across 4 settlements (12.5 ratio) has more sustainable production than 60 pips across 6 settlements (10 ratio), despite higher total. The 10+ pip/settlement threshold indicates quality positioning.",
          es: "Los jugadores de élite rastrean la eficiencia de asentamiento: valor de pip total dividido por conteo de asentamientos. Un jugador con 50 pips en 4 asentamientos (relación 12.5) tiene producción más sostenible que 60 pips en 6 asentamientos (relación 10), a pesar del total más alto. El umbral de 10+ pip/asentamiento indica posicionamiento de calidad.",
          de: "Elite-Spieler verfolgen Siedlungseffizienz: Gesamt-Pip-Wert dividiert durch Siedlungsanzahl. Ein Spieler mit 50 Pips über 4 Siedlungen (12,5 Verhältnis) hat nachhaltigere Produktion als 60 Pips über 6 Siedlungen (10 Verhältnis), trotz höherer Summe. Die 10+ Pip/Siedlungs-Schwelle zeigt Qualitätspositionierung an.",
          nl: "Elite spelers volgen nederzetting efficiëntie: totale pip waarde gedeeld door nederzettingstelling. Een speler met 50 pips over 4 nederzettingen (12,5 ratio) heeft duurzamere productie dan 60 pips over 6 nederzettingen (10 ratio), ondanks hoger totaal. De 10+ pip/nederzetting drempel wijst op kwaliteit positionering."
        }
      },
      {
        question: {
          en: "What defines the 'zero-sum blocking' competitive principle?",
          es: "¿Qué define el principio competitivo de 'bloqueo de suma cero'?",
          de: "Was definiert das 'Null-Summen-Blockierungs'-Wettbewerbsprinzip?",
          nl: "Wat definieert het 'nul-som blokkering' competitief principe?"
        },
        options: [
          { en: "Spending resources to block opponents worth 3+ points even if your build scores 1 point", es: "Gastar recursos para bloquear oponentes que valen 3+ puntos incluso si tu construcción puntúa 1 punto", de: "Ressourcen ausgeben um Gegner zu blockieren die 3+ Punkte wert sind selbst wenn Ihr Bau 1 Punkt erzielt", nl: "Bronnen besteden om tegenstanders te blokkeren die 3+ punten waard zijn zelfs als je bouw 1 punt scoort" },
          { en: "All blocking moves waste resources inefficiently", es: "Todos los movimientos de bloqueo desperdician recursos de manera ineficiente", de: "Alle Blockierungszüge verschwenden Ressourcen ineffizient", nl: "Alle blokkeerzetten verspillen bronnen inefficiënt" },
          { en: "Only build structures that maximize your own points", es: "Solo construir estructuras que maximicen tus propios puntos", de: "Nur Strukturen bauen die eigene Punkte maximieren", nl: "Alleen structuren bouwen die je eigen punten maximaliseren" },
          { en: "Blocking prohibited in tournament play", es: "El bloqueo está prohibido en el juego de torneo", de: "Blockierung im Turnierspiel verboten", nl: "Blokkeren verboden in toernooispel" }
        ],
        correct: 0,
        explanation: {
          en: "In zero-sum games, relative scoring matters more than absolute. Building a 6-pip settlement (personal gain: 1 point + 6 pips) to block opponent's access to 12-pip spot with harbor (opponent loss: 3+ points) creates net advantage of 2+ points despite appearing suboptimal individually. Competitive Catan requires relative value calculations.",
          es: "En los juegos de suma cero, el puntaje relativo importa más que el absoluto. Construir un asentamiento de 6 pip (ganancia personal: 1 punto + 6 pips) para bloquear el acceso del oponente al lugar de 12 pip con puerto (pérdida del oponente: 3+ puntos) crea ventaja neta de 2+ puntos a pesar de parecer subóptimo individualmente. El Catan competitivo requiere cálculos de valor relativo.",
          de: "In Nullsummenspielen zählt relative Wertung mehr als absolute. Eine 6-Pip-Siedlung bauen (persönlicher Gewinn: 1 Punkt + 6 Pips) um Gegnerzugang zu 12-Pip-Platz mit Hafen zu blockieren (Gegnerverlust: 3+ Punkte) schafft Nettovorteil von 2+ Punkten trotz individuell suboptimal erscheinend. Wettkampf-Catan erfordert relative Wertberechnungen.",
          nl: "In nul-som spellen telt relatieve score meer dan absolute. Een 6-pip nederzetting bouwen (persoonlijke winst: 1 punt + 6 pips) om tegenstander toegang tot 12-pip plek met haven te blokkeren (tegenstander verlies: 3+ punten) creëert netto voordeel van 2+ punten ondanks individueel suboptimaal lijkend. Competitief Catan vereist relatieve waarde berekeningen."
        }
      },
      {
        question: {
          en: "What is the 'monopoly card expected value' formula?",
          es: "¿Qué es la fórmula de 'valor esperado de la carta de monopolio'?",
          de: "Was ist die 'Monopolkarten-Erwartungswert'-Formel?",
          nl: "Wat is de 'monopolie kaart verwachte waarde' formule?"
        },
        options: [
          { en: "Sum(opponent visible production - spending) for target resource across all players", es: "Suma(producción visible del oponente - gasto) para el recurso objetivo en todos los jugadores", de: "Summe(sichtbare Gegnerproduktion - Ausgaben) für Zielressource über alle Spieler", nl: "Som(tegenstander zichtbare productie - uitgaven) voor doelbron over alle spelers" },
          { en: "Monopoly cards always yield exactly 3 resources", es: "Las cartas de monopolio siempre producen exactamente 3 recursos", de: "Monopolkarten erbringen immer exakt 3 Ressourcen", nl: "Monopoliekaarten leveren altijd precies 3 bronnen op" },
          { en: "Random guess of opponent holdings", es: "Suposición aleatoria de las tenencias del oponente", de: "Zufällige Schätzung der Gegnerbestände", nl: "Willekeurige gok van tegenstander bezittingen" },
          { en: "Monopoly value cannot be calculated", es: "El valor del monopolio no puede calcularse", de: "Monopolwert kann nicht berechnet werden", nl: "Monopolie waarde kan niet berekend worden" }
        ],
        correct: 0,
        explanation: {
          en: "Expert monopoly timing requires calculating expected yield: for each opponent, track their production on target resource's hexes (visible settlements/cities × rolls since last 7) minus observed spending (buildings, trades). Summing across opponents gives expected monopoly haul. Play when expected yield exceeds 5-6 cards for maximum efficiency.",
          es: "El tiempo experto del monopolio requiere calcular el rendimiento esperado: para cada oponente, rastrear su producción en los hexágonos del recurso objetivo (asentamientos/ciudades visibles × tiradas desde el último 7) menos el gasto observado (edificios, intercambios). Sumar en todos los oponentes da la captura esperada del monopolio. Jugar cuando el rendimiento esperado excede 5-6 cartas para máxima eficiencia.",
          de: "Experten-Monopol-Timing erfordert Berechnung erwarteter Ausbeute: für jeden Gegner Produktion auf Zielressourcen-Hexen verfolgen (sichtbare Siedlungen/Städte × Würfe seit letzter 7) minus beobachtete Ausgaben (Gebäude, Handel). Summieren über Gegner gibt erwartete Monopol-Ausbeute. Spielen wenn erwartete Ausbeute 5-6 Karten überschreitet für maximale Effizienz.",
          nl: "Expert monopolie timing vereist berekening verwachte opbrengst: voor elke tegenstander productie volgen op doelbron hexen (zichtbare nederzettingen/steden × worpen sinds laatste 7) minus geobserveerde uitgaven (gebouwen, handel). Sommeren over tegenstanders geeft verwachte monopolie vangst. Speel wanneer verwachte opbrengst 5-6 kaarten overschrijdt voor maximale efficiëntie."
        }
      },
      {
        question: {
          en: "What is the 'settlement saturation point' in competitive games?",
          es: "¿Qué es el 'punto de saturación de asentamiento' en juegos competitivos?",
          de: "Was ist der 'Siedlungssättigungspunkt' in Wettkampfspielen?",
          nl: "Wat is het 'nederzetting verzadigingspunt' in competitieve spellen?"
        },
        options: [
          { en: "Around turn 18-22 when ~75% of viable settlement spots are claimed in 4-player", es: "Alrededor del turno 18-22 cuando ~75% de los lugares viables de asentamiento están reclamados en 4 jugadores", de: "Um Zug 18-22 wenn ~75% der brauchbaren Siedlungsplätze in 4-Spieler beansprucht sind", nl: "Rond beurt 18-22 wanneer ~75% van leefbare nederzettingsplekken geclaimd zijn in 4-speler" },
          { en: "Turn 5 when initial placements complete", es: "Turno 5 cuando se completan las colocaciones iniciales", de: "Zug 5 wenn Anfangsplatzierungen abgeschlossen", nl: "Beurt 5 wanneer initiële plaatsingen compleet" },
          { en: "Never reached in typical games", es: "Nunca alcanzado en juegos típicos", de: "In typischen Spielen nie erreicht", nl: "Nooit bereikt in typische spellen" },
          { en: "Turn 50+ only in extended games", es: "Solo turno 50+ en juegos extendidos", de: "Nur Zug 50+ in verlängerten Spielen", nl: "Alleen beurt 50+ in verlengde spellen" }
        ],
        correct: 0,
        explanation: {
          en: "Settlement saturation occurs around turn 18-22 in 4-player games when most high-value spots (8+ pips) are claimed and remaining locations are marginal. This creates strategic inflection point: players must shift from expansion focus to city upgrades and development cards, as further settlements yield diminishing returns. Recognizing saturation timing is critical.",
          es: "La saturación de asentamientos ocurre alrededor del turno 18-22 en juegos de 4 jugadores cuando la mayoría de los lugares de alto valor (8+ pips) están reclamados y las ubicaciones restantes son marginales. Esto crea punto de inflexión estratégico: los jugadores deben cambiar del enfoque de expansión a mejoras de ciudad y cartas de desarrollo, ya que los asentamientos adicionales producen rendimientos decrecientes. Reconocer el tiempo de saturación es crítico.",
          de: "Siedlungssättigung tritt um Zug 18-22 in 4-Spieler-Spielen auf, wenn die meisten hochwertigen Plätze (8+ Pips) beansprucht sind und verbleibende Standorte marginal sind. Dies schafft strategischen Wendepunkt: Spieler müssen von Expansionsfokus zu Stadtaufwertungen und Entwicklungskarten wechseln, da weitere Siedlungen abnehmende Erträge bringen. Erkennung des Sättigungstimings ist kritisch.",
          nl: "Nederzetting verzadiging treedt op rond beurt 18-22 in 4-speler spellen wanneer de meeste hoge-waarde plekken (8+ pips) geclaimd zijn en resterende locaties marginaal zijn. Dit creëert strategisch keerpunt: spelers moeten verschuiven van expansie focus naar stadsupgrades en ontwikkelingskaarten, omdat verdere nederzettingen afnemende opbrengsten opleveren. Herkenning van verzadigingstiming is kritiek."
        }
      },
      {
        question: {
          en: "What defines the 'anti-leader coalition timing' in multi-player dynamics?",
          es: "¿Qué define el 'tiempo de coalición anti-líder' en las dinámicas multijugador?",
          de: "Was definiert das 'Anti-Führer-Koalitions-Timing' in Mehrspieler-Dynamiken?",
          nl: "Wat definieert de 'anti-leider coalitie timing' in multiplayer dynamica?"
        },
        options: [
          { en: "Form when leader reaches 7 points and 2nd place within 2 points; dissolve at 2-point gap closure", es: "Formar cuando el líder alcanza 7 puntos y el 2° lugar está dentro de 2 puntos; disolver al cierre de brecha de 2 puntos", de: "Bilden wenn Führer 7 Punkte erreicht und 2. Platz innerhalb 2 Punkte; auflösen bei 2-Punkte-Lücke-Schließung", nl: "Vorm wanneer leider 7 punten bereikt en 2e plaats binnen 2 punten; ontbinden bij 2-punten kloof sluiting" },
          { en: "Always cooperate with leader throughout game", es: "Siempre cooperar con el líder durante todo el juego", de: "Immer mit Führer während des gesamten Spiels kooperieren", nl: "Altijd samenwerken met leider gedurende spel" },
          { en: "Form coalitions only in final turn", es: "Formar coaliciones solo en el turno final", de: "Koalitionen nur im letzten Zug bilden", nl: "Vorm coalities alleen in laatste beurt" },
          { en: "Coalitions prohibited in competitive play", es: "Las coaliciones están prohibidas en el juego competitivo", de: "Koalitionen im Wettkampfspiel verboten", nl: "Coalities verboden in competitief spel" }
        ],
        correct: 0,
        explanation: {
          en: "Anti-leader coalitions form optimally when: (1) leader reaches 7 points, making victory plausible, AND (2) second-place stays within 2 points, maintaining coalition incentive. When the gap closes to <2 points, second-place shifts from 'block leader' to 'win myself,' fracturing cooperation. This 7-point/2-point threshold defines coalition game theory.",
          es: "Las coaliciones anti-líder se forman óptimamente cuando: (1) el líder alcanza 7 puntos, haciendo la victoria plausible, Y (2) el segundo lugar se mantiene dentro de 2 puntos, manteniendo el incentivo de coalición. Cuando la brecha se cierra a <2 puntos, el segundo lugar cambia de 'bloquear líder' a 'ganar yo mismo', fracturando la cooperación. Este umbral de 7 puntos/2 puntos define la teoría de juegos de coalición.",
          de: "Anti-Führer-Koalitionen bilden sich optimal wenn: (1) Führer 7 Punkte erreicht, was Sieg plausibel macht, UND (2) Zweitplatzierter innerhalb 2 Punkte bleibt, was Koalitionsanreiz aufrechterhält. Wenn Lücke auf <2 Punkte schließt, wechselt Zweitplatzierter von 'Führer blockieren' zu 'selbst gewinnen', bricht Kooperation. Diese 7-Punkte/2-Punkte-Schwelle definiert Koalitions-Spieltheorie.",
          nl: "Anti-leider coalities vormen optimaal wanneer: (1) leider 7 punten bereikt, wat overwinning plausibel maakt, EN (2) tweede plaats binnen 2 punten blijft, coalitie incentive behoudend. Wanneer kloof sluit naar <2 punten, verschuift tweede plaats van 'blokkeer leider' naar 'win zelf', breekt samenwerking. Deze 7-punten/2-punten drempel definieert coalitie speltheorie."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level8;
  } else if (typeof window !== 'undefined') {
    window.level8 = level8;
  }
})();
