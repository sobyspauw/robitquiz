// Quiz Template - Level 6: Bord spelletjes - Catan
(function() {
  const level6 = {
    name: {
      en: "Catan - Grandmaster",
      es: "Catan - Gran Maestro",
      de: "Catan - Großmeister",
      nl: "Catan - Grootmeester"
    },
    questions: [
      {
        question: {
          en: "In Seafarers expansion, what is the optimal ship-to-road ratio for island expansion?",
          es: "En la expansión Marineros, ¿cuál es la proporción óptima de barco a carretera para la expansión de islas?",
          de: "Welches ist in der Seefahrer-Erweiterung das optimale Schiff-zu-Straße-Verhältnis für Inselausbau?",
          nl: "Wat is in de Zeevaarders uitbreiding de optimale schip-naar-weg ratio voor eilandexpansie?"
        },
        options: [
          { en: "3-4 ships minimum to justify island resources", es: "Mínimo 3-4 barcos para justificar recursos de isla", de: "Mindestens 3-4 Schiffe um Inselressourcen zu rechtfertigen", nl: "Minimaal 3-4 schepen om eilandbronnen te rechtvaardigen" },
          { en: "Always equal ships and roads", es: "Siempre igualar barcos y carreteras", de: "Schiffe und Straßen immer gleichen", nl: "Altijd gelijke schepen en wegen" },
          { en: "Only 1 ship per island", es: "Solo 1 barco por isla", de: "Nur 1 Schiff pro Insel", nl: "Slechts 1 schip per eiland" },
          { en: "Never build ships, roads only", es: "Nunca construir barcos, solo carreteras", de: "Nie Schiffe bauen, nur Straßen", nl: "Nooit schepen bouwen, alleen wegen" }
        ],
        correct: 0,
        explanation: {
          en: "Island expansion in Seafarers requires at least 3-4 ships to reach worthwhile locations. Each ship costs the same as a road (wood + sheep), so the investment must be justified by accessing high-value hexes or strategic harbor positions.",
          es: "La expansión de islas en Marineros requiere al menos 3-4 barcos para alcanzar ubicaciones que valgan la pena. Cada barco cuesta lo mismo que una carretera (madera + oveja), por lo que la inversión debe justificarse al acceder a hexágonos de alto valor o posiciones de puerto estratégicas.",
          de: "Inselausbau in Seefahrer erfordert mindestens 3-4 Schiffe, um lohnende Standorte zu erreichen. Jedes Schiff kostet das gleiche wie eine Straße (Holz + Schaf), daher muss die Investition durch Zugang zu wertvollen Hexen oder strategischen Hafenpositionen gerechtfertigt sein.",
          nl: "Eilandexpansie in Zeevaarders vereist ten minste 3-4 schepen om waardevolle locaties te bereiken. Elk schip kost hetzelfde als een weg (hout + schaap), dus de investering moet gerechtvaardigd zijn door toegang tot hoogwaardige hexen of strategische havenposities."
        }
      },
      {
        question: {
          en: "In Cities & Knights, when should you upgrade to a strong knight?",
          es: "En Ciudades & Caballeros, ¿cuándo debes mejorar a un caballero fuerte?",
          de: "Wann sollte man in Städte & Ritter zu einem starken Ritter aufwerten?",
          nl: "Wanneer moet je upgraden naar een sterke ridder in Steden & Ridders?"
        },
        options: [
          { en: "When barbarians are 3-4 turns away and you need defense", es: "Cuando los bárbaros están a 3-4 turnos y necesitas defensa", de: "Wenn Barbaren 3-4 Züge entfernt sind und Verteidigung benötigt wird", nl: "Wanneer barbaren 3-4 beurten weg zijn en je verdediging nodig hebt" },
          { en: "Immediately in turn 1", es: "Inmediatamente en el turno 1", de: "Sofort in Zug 1", nl: "Direct in beurt 1" },
          { en: "Only after losing a city", es: "Solo después de perder una ciudad", de: "Nur nach Verlust einer Stadt", nl: "Alleen na verlies van een stad" },
          { en: "Never upgrade, keep basic knights", es: "Nunca mejorar, mantener caballeros básicos", de: "Nie aufwerten, Basis-Ritter behalten", nl: "Nooit upgraden, behoud basisridders" }
        ],
        correct: 0,
        explanation: {
          en: "Strong knights cost 2 ore + 1 sheep to upgrade but provide 2 strength against barbarians. Optimal timing is when barbarians approach (3-4 turns out) and you calculate your city is at risk without sufficient defensive strength.",
          es: "Los caballeros fuertes cuestan 2 minerales + 1 oveja para mejorar pero proporcionan 2 de fuerza contra los bárbaros. El tiempo óptimo es cuando los bárbaros se acercan (3-4 turnos) y calculas que tu ciudad está en riesgo sin suficiente fuerza defensiva.",
          de: "Starke Ritter kosten 2 Erz + 1 Schaf zum Aufwerten, bieten aber 2 Stärke gegen Barbaren. Optimales Timing ist, wenn Barbaren sich nähern (3-4 Züge) und Sie berechnen, dass Ihre Stadt ohne ausreichende Verteidigungsstärke gefährdet ist.",
          nl: "Sterke ridders kosten 2 erts + 1 schaap om te upgraden maar bieden 2 kracht tegen barbaren. Optimale timing is wanneer barbaren naderen (3-4 beurten) en je berekent dat je stad risico loopt zonder voldoende verdedigingskracht."
        }
      },
      {
        question: {
          en: "What is the 'commodity monopoly' strategy in Cities & Knights?",
          es: "¿Qué es la estrategia de 'monopolio de productos' en Ciudades & Caballeros?",
          de: "Was ist die 'Rohstoff-Monopol'-Strategie in Städte & Ritter?",
          nl: "Wat is de 'grondstof monopolie' strategie in Steden & Ridders?"
        },
        options: [
          { en: "Control cloth/coin/paper production to dominate metropolis race", es: "Controlar la producción de tela/moneda/papel para dominar la carrera de metrópolis", de: "Stoff-/Münz-/Papierproduktion kontrollieren um Metropolen-Rennen zu dominieren", nl: "Stof/munt/papier productie controleren om metropool race te domineren" },
          { en: "Only collect basic resources", es: "Solo recolectar recursos básicos", de: "Nur Grundressourcen sammeln", nl: "Alleen basisbronnen verzamelen" },
          { en: "Avoid building any cities", es: "Evitar construir ciudades", de: "Vermeiden, Städte zu bauen", nl: "Vermijd het bouwen van steden" },
          { en: "Trade all commodities immediately", es: "Comerciar todos los productos inmediatamente", de: "Alle Rohstoffe sofort handeln", nl: "Alle grondstoffen direct ruilen" }
        ],
        correct: 0,
        explanation: {
          en: "Cities & Knights introduces commodities (cloth, coin, paper) produced by cities. Controlling 2-3 cities on the same commodity type lets you race for that metropolis (2 bonus points) while denying opponents the ability to compete effectively.",
          es: "Ciudades & Caballeros introduce productos (tela, moneda, papel) producidos por ciudades. Controlar 2-3 ciudades en el mismo tipo de producto te permite competir por esa metrópolis (2 puntos de bonificación) mientras niegas a los oponentes la capacidad de competir efectivamente.",
          de: "Städte & Ritter führt Rohstoffe (Stoff, Münze, Papier) ein, die von Städten produziert werden. Die Kontrolle von 2-3 Städten desselben Rohstofftyps ermöglicht es Ihnen, um diese Metropole (2 Bonuspunkte) zu konkurrieren, während Sie Gegnern die Möglichkeit nehmen, effektiv zu konkurrieren.",
          nl: "Steden & Ridders introduceert grondstoffen (stof, munt, papier) geproduceerd door steden. Het controleren van 2-3 steden op hetzelfde grondstoftype laat je racen voor die metropool (2 bonuspunten) terwijl je tegenstanders de mogelijkheid ontzegt om effectief te concurreren."
        }
      },
      {
        question: {
          en: "How should you sequence development card plays in a single turn?",
          es: "¿Cómo debes secuenciar las jugadas de cartas de desarrollo en un solo turno?",
          de: "Wie sollte man Entwicklungskarten-Spielzüge in einem einzelnen Zug sequenzieren?",
          nl: "Hoe moet je ontwikkelingskaart spelen sequentieren in een enkele beurt?"
        },
        options: [
          { en: "Play Monopoly first, then Year of Plenty, then build with gained resources", es: "Jugar Monopolio primero, luego Año de Abundancia, luego construir con recursos ganados", de: "Monopol zuerst spielen, dann Jahr des Überflusses, dann mit gewonnenen Ressourcen bauen", nl: "Monopolie eerst spelen, dan Jaar van Overvloed, dan bouwen met verkregen bronnen" },
          { en: "Play all cards simultaneously", es: "Jugar todas las cartas simultáneamente", de: "Alle Karten gleichzeitig spielen", nl: "Alle kaarten tegelijk spelen" },
          { en: "Never play multiple cards in one turn", es: "Nunca jugar múltiples cartas en un turno", de: "Niemals mehrere Karten in einem Zug spielen", nl: "Nooit meerdere kaarten in één beurt spelen" },
          { en: "Build first, then play cards", es: "Construir primero, luego jugar cartas", de: "Erst bauen, dann Karten spielen", nl: "Eerst bouwen, dan kaarten spelen" }
        ],
        correct: 0,
        explanation: {
          en: "The optimal sequence is Monopoly (gain resources from all players), then Year of Plenty (add 2 more specific resources), then use all accumulated resources to build. This maximizes your resource pool before spending. Playing cards after building wastes the potential advantage.",
          es: "La secuencia óptima es Monopolio (ganar recursos de todos los jugadores), luego Año de Abundancia (agregar 2 recursos específicos más), luego usar todos los recursos acumulados para construir. Esto maximiza tu reserva de recursos antes de gastar. Jugar cartas después de construir desperdicia la ventaja potencial.",
          de: "Die optimale Reihenfolge ist Monopol (Ressourcen von allen Spielern gewinnen), dann Jahr des Überflusses (2 weitere spezifische Ressourcen hinzufügen), dann alle gesammelten Ressourcen zum Bauen verwenden. Dies maximiert Ihren Ressourcenpool vor dem Ausgeben. Karten nach dem Bauen zu spielen verschwendet den potenziellen Vorteil.",
          nl: "De optimale volgorde is Monopolie (bronnen van alle spelers verkrijgen), dan Jaar van Overvloed (2 meer specifieke bronnen toevoegen), dan alle verzamelde bronnen gebruiken om te bouwen. Dit maximaliseert je bronnenvoorraad voor het uitgeven. Kaarten spelen na bouwen verspilt het potentiële voordeel."
        }
      },
      {
        question: {
          en: "What is the 'progress card denial' strategy in Cities & Knights?",
          es: "¿Qué es la estrategia de 'negación de cartas de progreso' en Ciudades & Caballeros?",
          de: "Was ist die 'Fortschrittskarten-Verweigerungs'-Strategie in Städte & Ritter?",
          nl: "Wat is de 'vooruitgangskaart ontzegging' strategie in Steden & Ridders?"
        },
        options: [
          { en: "Advance in all three improvement tracks to block opponents from flipping", es: "Avanzar en las tres pistas de mejora para bloquear a los oponentes de voltear", de: "In allen drei Verbesserungsspuren voranschreiten um Gegner am Umdrehen zu hindern", nl: "Vooruitgaan in alle drie verbeteringssporen om tegenstanders te blokkeren van omdraaien" },
          { en: "Never use progress cards", es: "Nunca usar cartas de progreso", de: "Niemals Fortschrittskarten verwenden", nl: "Nooit vooruitgangskaarten gebruiken" },
          { en: "Only focus on one improvement track", es: "Solo enfocarse en una pista de mejora", de: "Nur auf eine Verbesserungsspur konzentrieren", nl: "Alleen focussen op één verbeteringsspoor" },
          { en: "Discard all commodity cards", es: "Descartar todas las cartas de productos", de: "Alle Rohstoffkarten abwerfen", nl: "Alle grondstofkaarten weggooien" }
        ],
        correct: 0,
        explanation: {
          en: "In Cities & Knights, when you reach level 5 on an improvement track, the deck is shuffled and no more progress cards can be drawn from that category. By advancing all three tracks simultaneously, you limit opponents' access to powerful progress cards.",
          es: "En Ciudades & Caballeros, cuando alcanzas el nivel 5 en una pista de mejora, la baraja se baraja y no se pueden robar más cartas de progreso de esa categoría. Al avanzar en las tres pistas simultáneamente, limitas el acceso de los oponentes a poderosas cartas de progreso.",
          de: "In Städte & Ritter wird bei Erreichen von Level 5 auf einer Verbesserungsspur das Deck gemischt und es können keine weiteren Fortschrittskarten aus dieser Kategorie gezogen werden. Durch gleichzeitiges Voranschreiten auf allen drei Spuren begrenzen Sie den Zugang der Gegner zu mächtigen Fortschrittskarten.",
          nl: "In Steden & Ridders wordt bij het bereiken van niveau 5 op een verbeteringsspoor het deck geschud en kunnen geen vooruitgangskaarten meer uit die categorie worden getrokken. Door alle drie sporen tegelijk te bevorderen, beperk je de toegang van tegenstanders tot krachtige vooruitgangskaarten."
        }
      },
      {
        question: {
          en: "In tournament play, what is the 'resource starvation' counter-strategy?",
          es: "En el juego de torneo, ¿cuál es la contra-estrategia de 'hambruna de recursos'?",
          de: "Was ist die 'Ressourcenhunger'-Gegenstrategie im Turnierspiel?",
          nl: "Wat is de 'bronuitputting' tegenstrategie in toernooispel?"
        },
        options: [
          { en: "Identify starved player's missing resource and refuse all trades involving it", es: "Identificar el recurso faltante del jugador hambriento y rechazar todos los intercambios que lo involucren", de: "Fehlende Ressource des ausgehungerten Spielers identifizieren und alle Geschäfte damit ablehnen", nl: "Identificeer ontbrekende bron van uitgehongerde speler en weiger alle handel ermee" },
          { en: "Trade equally with all players always", es: "Comerciar por igual con todos los jugadores siempre", de: "Immer gleichmäßig mit allen Spielern handeln", nl: "Altijd gelijk handelen met alle spelers" },
          { en: "Give free resources to losing players", es: "Dar recursos gratis a jugadores perdedores", de: "Verlierende Spieler kostenlose Ressourcen geben", nl: "Gratis bronnen geven aan verliezende spelers" },
          { en: "Focus only on your own production", es: "Enfocarse solo en tu propia producción", de: "Nur auf eigene Produktion konzentrieren", nl: "Alleen focussen op je eigen productie" }
        ],
        correct: 0,
        explanation: {
          en: "When a player lacks access to a critical resource (often ore or wheat), the optimal counter-play is to identify this dependency and collectively refuse trades that would provide it. This keeps them resource-starved and prevents their expansion, maintaining your competitive advantage.",
          es: "Cuando un jugador carece de acceso a un recurso crítico (a menudo mineral o trigo), el contrajuego óptimo es identificar esta dependencia y rechazar colectivamente los intercambios que lo proporcionarían. Esto los mantiene hambrientos de recursos y evita su expansión, manteniendo tu ventaja competitiva.",
          de: "Wenn ein Spieler keinen Zugang zu einer kritischen Ressource hat (oft Erz oder Weizen), ist die optimale Gegenspielweise, diese Abhängigkeit zu identifizieren und Geschäfte, die diese bereitstellen würden, kollektiv abzulehnen. Dies hält sie ressourcenhungrig und verhindert ihre Expansion, während Ihr Wettbewerbsvorteil erhalten bleibt.",
          nl: "Wanneer een speler geen toegang heeft tot een kritieke bron (vaak erts of tarwe), is de optimale tegenzet deze afhankelijkheid te identificeren en collectief handel te weigeren die deze zou leveren. Dit houdt hen bronuitgeput en voorkomt hun expansie, terwijl je competitief voordeel behouden blijft."
        }
      },
      {
        question: {
          en: "What is the mathematical probability that at least one 6 or 8 will be rolled in two consecutive turns?",
          es: "¿Cuál es la probabilidad matemática de que al menos un 6 u 8 sea sacado en dos turnos consecutivos?",
          de: "Wie hoch ist die mathematische Wahrscheinlichkeit, dass mindestens eine 6 oder 8 in zwei aufeinanderfolgenden Zügen gewürfelt wird?",
          nl: "Wat is de wiskundige waarschijnlijkheid dat ten minste één 6 of 8 wordt gegooid in twee opeenvolgende beurten?"
        },
        options: [
          { en: "Approximately 72% (10/36 + 10/36 - overlap)", es: "Aproximadamente 72% (10/36 + 10/36 - superposición)", de: "Ungefähr 72% (10/36 + 10/36 - Überschneidung)", nl: "Ongeveer 72% (10/36 + 10/36 - overlap)" },
          { en: "Exactly 50%", es: "Exactamente 50%", de: "Genau 50%", nl: "Precies 50%" },
          { en: "25% probability", es: "25% de probabilidad", de: "25% Wahrscheinlichkeit", nl: "25% waarschijnlijkheid" },
          { en: "100% guaranteed", es: "100% garantizado", de: "100% garantiert", nl: "100% gegarandeerd" }
        ],
        correct: 0,
        explanation: {
          en: "Each roll has 10/36 chance of producing 6 or 8 (5 combinations each). Over two rolls: 1 - (26/36 × 26/36) = 1 - 0.52 ≈ 0.72 or 72%. This high probability makes 6/8 hexes extremely valuable for consistent production.",
          es: "Cada tirada tiene 10/36 de posibilidad de producir 6 u 8 (5 combinaciones cada uno). En dos tiradas: 1 - (26/36 × 26/36) = 1 - 0.52 ≈ 0.72 o 72%. Esta alta probabilidad hace que los hexágonos 6/8 sean extremadamente valiosos para producción consistente.",
          de: "Jeder Wurf hat 10/36 Chance, 6 oder 8 zu produzieren (je 5 Kombinationen). Über zwei Würfe: 1 - (26/36 × 26/36) = 1 - 0.52 ≈ 0.72 oder 72%. Diese hohe Wahrscheinlichkeit macht 6/8-Hexe extrem wertvoll für konsistente Produktion.",
          nl: "Elke worp heeft 10/36 kans om 6 of 8 te produceren (elk 5 combinaties). Over twee worpen: 1 - (26/36 × 26/36) = 1 - 0.52 ≈ 0.72 of 72%. Deze hoge waarschijnlijkheid maakt 6/8 hexen extreem waardevol voor consistente productie."
        }
      },
      {
        question: {
          en: "What is the 'hidden victory point' endgame strategy?",
          es: "¿Qué es la estrategia de 'punto de victoria oculto' en el final del juego?",
          de: "Was ist die 'versteckte Siegpunkt'-Endspielstrategie?",
          nl: "Wat is de 'verborgen overwinningspunt' eindspelstrategie?"
        },
        options: [
          { en: "Hold victory point dev cards until you can win on your turn", es: "Mantener cartas de desarrollo de puntos de victoria hasta que puedas ganar en tu turno", de: "Siegpunkt-Entwicklungskarten halten bis man in seinem Zug gewinnen kann", nl: "Overwinningspunt ontwikkelingskaarten vasthouden tot je in je beurt kunt winnen" },
          { en: "Reveal all cards immediately when drawn", es: "Revelar todas las cartas inmediatamente cuando se roban", de: "Alle Karten sofort nach dem Ziehen aufdecken", nl: "Alle kaarten direct onthullen wanneer getrokken" },
          { en: "Trade victory point cards to opponents", es: "Comerciar cartas de puntos de victoria con oponentes", de: "Siegpunktkarten an Gegner handeln", nl: "Overwinningspuntkaarten ruilen met tegenstanders" },
          { en: "Discard victory point cards for resources", es: "Descartar cartas de puntos de victoria por recursos", de: "Siegpunktkarten für Ressourcen abwerfen", nl: "Overwinningspuntkaarten weggooien voor bronnen" }
        ],
        correct: 0,
        explanation: {
          en: "Victory point development cards don't need to be revealed until winning. Expert players hold them secret, appearing to be further from victory than they are. This prevents opponents from recognizing the threat and allows surprise wins, especially combined with longest road/largest army flips.",
          es: "Las cartas de desarrollo de puntos de victoria no necesitan ser reveladas hasta ganar. Los jugadores expertos las mantienen en secreto, pareciendo estar más lejos de la victoria de lo que están. Esto evita que los oponentes reconozcan la amenaza y permite victorias sorpresa, especialmente combinadas con cambios de camino más largo/ejército más grande.",
          de: "Siegpunkt-Entwicklungskarten müssen bis zum Sieg nicht aufgedeckt werden. Experten halten sie geheim und erscheinen weiter vom Sieg entfernt als sie sind. Dies verhindert, dass Gegner die Bedrohung erkennen und ermöglicht Überraschungssiege, besonders in Kombination mit längster Straße/größter Armee-Wechseln.",
          nl: "Overwinningspunt ontwikkelingskaarten hoeven pas bij winnen onthuld te worden. Expertspelers houden ze geheim, lijkend verder van overwinning te zijn dan ze zijn. Dit voorkomt dat tegenstanders de dreiging herkennen en maakt verrassingsoverwinningen mogelijk, vooral gecombineerd met langste weg/grootste leger wisselingen."
        }
      },
      {
        question: {
          en: "How many turns ahead should you plan resource accumulation for city building?",
          es: "¿Cuántos turnos adelante debes planificar la acumulación de recursos para construir ciudades?",
          de: "Wie viele Züge im Voraus sollte man Ressourcenanhäufung für Stadtbau planen?",
          nl: "Hoeveel beurten vooruit moet je bronverzameling plannen voor stadenbouw?"
        },
        options: [
          { en: "3-5 turns to accumulate 3 ore + 2 wheat safely", es: "3-5 turnos para acumular 3 minerales + 2 trigo de forma segura", de: "3-5 Züge um sicher 3 Erz + 2 Weizen zu sammeln", nl: "3-5 beurten om veilig 3 erts + 2 tarwe te verzamelen" },
          { en: "Build cities immediately when possible", es: "Construir ciudades inmediatamente cuando sea posible", de: "Städte sofort bauen wenn möglich", nl: "Steden direct bouwen wanneer mogelijk" },
          { en: "Never plan ahead, react each turn", es: "Nunca planificar con anticipación, reaccionar cada turno", de: "Nie vorausplanen, jeden Zug reagieren", nl: "Nooit vooruit plannen, elke beurt reageren" },
          { en: "Wait 10+ turns for perfect timing", es: "Esperar 10+ turnos para el momento perfecto", de: "10+ Züge auf perfektes Timing warten", nl: "10+ beurten wachten op perfecte timing" }
        ],
        correct: 0,
        explanation: {
          en: "Cities require 3 ore + 2 wheat. Without harbors, you need 3-5 turns of favorable rolls or successful trades to accumulate these resources while staying under the 7-card limit. Good players track production and plan trades 3-5 turns ahead to build cities efficiently.",
          es: "Las ciudades requieren 3 minerales + 2 trigo. Sin puertos, necesitas 3-5 turnos de tiradas favorables o intercambios exitosos para acumular estos recursos mientras te mantienes bajo el límite de 7 cartas. Los buenos jugadores rastrean la producción y planifican intercambios 3-5 turnos antes para construir ciudades eficientemente.",
          de: "Städte erfordern 3 Erz + 2 Weizen. Ohne Häfen benötigen Sie 3-5 Züge günstiger Würfe oder erfolgreicher Geschäfte, um diese Ressourcen zu sammeln und unter dem 7-Karten-Limit zu bleiben. Gute Spieler verfolgen die Produktion und planen Geschäfte 3-5 Züge im Voraus, um effizient Städte zu bauen.",
          nl: "Steden vereisen 3 erts + 2 tarwe. Zonder havens heb je 3-5 beurten gunstige worpen of succesvolle handel nodig om deze bronnen te verzamelen terwijl je onder de 7-kaarten limiet blijft. Goede spelers volgen productie en plannen handel 3-5 beurten vooruit om efficiënt steden te bouwen."
        }
      },
      {
        question: {
          en: "What is the 'port denial' settlement strategy?",
          es: "¿Qué es la estrategia de asentamiento de 'negación de puerto'?",
          de: "Was ist die 'Hafenverweigerungs'-Siedlungsstrategie?",
          nl: "Wat is de 'haven ontzegging' nederzettingsstrategie?"
        },
        options: [
          { en: "Build on valuable 2:1 harbors to prevent opponent access", es: "Construir en valiosos puertos 2:1 para evitar el acceso del oponente", de: "Auf wertvollen 2:1-Häfen bauen um Gegnerzugang zu verhindern", nl: "Bouwen op waardevolle 2:1 havens om tegenstander toegang te voorkomen" },
          { en: "Never build on any harbors", es: "Nunca construir en ningún puerto", de: "Nie auf Häfen bauen", nl: "Nooit op havens bouwen" },
          { en: "Only use 3:1 harbors", es: "Solo usar puertos 3:1", de: "Nur 3:1-Häfen verwenden", nl: "Alleen 3:1 havens gebruiken" },
          { en: "Build away from all coast", es: "Construir lejos de toda costa", de: "Fern von jeder Küste bauen", nl: "Weg van alle kust bouwen" }
        ],
        correct: 0,
        explanation: {
          en: "2:1 harbors provide enormous trading advantage. Even if the specific harbor doesn't perfectly match your strategy, building there can be worthwhile purely to deny opponents access to efficient trading, especially for high-demand resources like ore or wheat.",
          es: "Los puertos 2:1 proporcionan una enorme ventaja comercial. Incluso si el puerto específico no coincide perfectamente con tu estrategia, construir allí puede valer la pena puramente para negar a los oponentes el acceso a comercio eficiente, especialmente para recursos de alta demanda como mineral o trigo.",
          de: "2:1-Häfen bieten einen enormen Handelsvorteil. Selbst wenn der spezifische Hafen nicht perfekt zu Ihrer Strategie passt, kann es sich lohnen, dort zu bauen, nur um Gegnern den Zugang zu effizientem Handel zu verwehren, besonders für stark nachgefragte Ressourcen wie Erz oder Weizen.",
          nl: "2:1 havens bieden enorm handelsvoordeel. Zelfs als de specifieke haven niet perfect past bij je strategie, kan het de moeite waard zijn om daar te bouwen puur om tegenstanders toegang tot efficiënte handel te ontzeggen, vooral voor sterk gewilde bronnen zoals erts of tarwe."
        }
      },
      {
        question: {
          en: "In competitive Catan, what defines a 'tempo play'?",
          es: "En Catan competitivo, ¿qué define una 'jugada de tempo'?",
          de: "Was definiert einen 'Tempozug' im Wettkampf-Catan?",
          nl: "Wat definieert een 'tempo spel' in competitief Catan?"
        },
        options: [
          { en: "Sacrificing long-term value for immediate board position advantage", es: "Sacrificar valor a largo plazo por ventaja inmediata de posición en el tablero", de: "Langfristigen Wert für sofortigen Brettpositionsvorteil opfern", nl: "Langetermijnwaarde opofferen voor onmiddellijk bordpositievoordeel" },
          { en: "Playing as slowly as possible", es: "Jugar lo más lento posible", de: "So langsam wie möglich spielen", nl: "Zo langzaam mogelijk spelen" },
          { en: "Never making any trades", es: "Nunca hacer ningún intercambio", de: "Niemals Geschäfte machen", nl: "Nooit handel maken" },
          { en: "Waiting for perfect dice rolls", es: "Esperar tiradas de dados perfectas", de: "Auf perfekte Würfelwürfe warten", nl: "Wachten op perfecte dobbelsteenworpen" }
        ],
        correct: 0,
        explanation: {
          en: "A tempo play involves building a settlement quickly (even on suboptimal pips) to claim a strategic location before opponents, or using a development card early to disrupt an opponent's timing. The immediate positional advantage outweighs perfect long-term optimization.",
          es: "Una jugada de tempo implica construir un asentamiento rápidamente (incluso en pips subóptimos) para reclamar una ubicación estratégica antes que los oponentes, o usar una carta de desarrollo temprano para interrumpir el tiempo de un oponente. La ventaja posicional inmediata supera la optimización perfecta a largo plazo.",
          de: "Ein Tempozug beinhaltet den schnellen Bau einer Siedlung (sogar auf suboptimalen Pips), um einen strategischen Ort vor Gegnern zu beanspruchen, oder die frühzeitige Verwendung einer Entwicklungskarte, um das Timing eines Gegners zu stören. Der unmittelbare Positionsvorteil überwiegt die perfekte Langzeitoptimierung.",
          nl: "Een tempo spel houdt in dat je snel een nederzetting bouwt (zelfs op suboptimale pips) om een strategische locatie voor tegenstanders te claimen, of vroeg een ontwikkelingskaart gebruikt om de timing van een tegenstander te verstoren. Het onmiddellijke positionele voordeel weegt zwaarder dan perfecte langetermijnoptimalisatie."
        }
      },
      {
        question: {
          en: "What is the optimal timing for playing a knight card strategically (not for largest army)?",
          es: "¿Cuál es el momento óptimo para jugar una carta de caballero estratégicamente (no para el ejército más grande)?",
          de: "Was ist das optimale Timing für das strategische Spielen einer Ritterkarte (nicht für größte Armee)?",
          nl: "Wat is de optimale timing voor strategisch spelen van een ridderkaart (niet voor grootste leger)?"
        },
        options: [
          { en: "Right after opponent accumulates 5-6 cards, before their build phase", es: "Justo después de que el oponente acumula 5-6 cartas, antes de su fase de construcción", de: "Direkt nachdem Gegner 5-6 Karten gesammelt hat, vor seiner Bauphase", nl: "Direct nadat tegenstander 5-6 kaarten verzamelt, voor hun bouwfase" },
          { en: "Only when you roll a 7", es: "Solo cuando sacas un 7", de: "Nur wenn man eine 7 würfelt", nl: "Alleen wanneer je een 7 gooit" },
          { en: "Immediately when drawn", es: "Inmediatamente cuando se roba", de: "Sofort nach dem Ziehen", nl: "Direct wanneer getrokken" },
          { en: "Save all knights for last turn", es: "Guardar todos los caballeros para el último turno", de: "Alle Ritter für letzten Zug aufheben", nl: "Alle ridders bewaren voor laatste beurt" }
        ],
        correct: 0,
        explanation: {
          en: "The most disruptive knight timing is when opponents have accumulated resources (visible through their card count of 5-6+) but haven't built yet. Moving the robber to their production hex and potentially stealing a key resource can delay their strategy by multiple turns.",
          es: "El momento más disruptivo del caballero es cuando los oponentes han acumulado recursos (visible a través de su conteo de cartas de 5-6+) pero aún no han construido. Mover al ladrón a su hexágono de producción y potencialmente robar un recurso clave puede retrasar su estrategia múltiples turnos.",
          de: "Das störendste Ritter-Timing ist, wenn Gegner Ressourcen gesammelt haben (sichtbar durch ihre Kartenzahl von 5-6+), aber noch nicht gebaut haben. Den Räuber auf ihr Produktionshex zu bewegen und möglicherweise eine Schlüsselressource zu stehlen, kann ihre Strategie um mehrere Züge verzögern.",
          nl: "De meest verstorende ridder timing is wanneer tegenstanders bronnen hebben verzameld (zichtbaar door hun kaarttelling van 5-6+) maar nog niet hebben gebouwd. De rover naar hun productie hex verplaatsen en mogelijk een sleutelbron stelen kan hun strategie meerdere beurten vertragen."
        }
      },
      {
        question: {
          en: "What is the 'expansion pressure' tactic in 4-player games?",
          es: "¿Qué es la táctica de 'presión de expansión' en juegos de 4 jugadores?",
          de: "Was ist die 'Expansionsdruck'-Taktik in 4-Spieler-Spielen?",
          nl: "Wat is de 'expansiedruk' tactiek in 4-speler spellen?"
        },
        options: [
          { en: "Rush to build 3rd settlement before spots are blocked", es: "Apresurarse a construir el 3er asentamiento antes de que los lugares sean bloqueados", de: "Zum 3. Siedlung eilen bevor Plätze blockiert werden", nl: "Haasten om 3e nederzetting te bouwen voordat plekken geblokkeerd zijn" },
          { en: "Only build cities, never settlements", es: "Solo construir ciudades, nunca asentamientos", de: "Nur Städte bauen, nie Siedlungen", nl: "Alleen steden bouwen, nooit nederzettingen" },
          { en: "Wait until endgame for settlements", es: "Esperar hasta el final del juego para asentamientos", de: "Bis Endspiel auf Siedlungen warten", nl: "Wachten tot eindspel voor nederzettingen" },
          { en: "Build only on initial spots", es: "Construir solo en lugares iniciales", de: "Nur auf Anfangsplätzen bauen", nl: "Alleen op initiële plekken bouwen" }
        ],
        correct: 0,
        explanation: {
          en: "In 4-player Catan, settlement spots fill quickly. The pressure to build a third settlement by turn 8-12 is critical because after this, most viable locations are blocked. Delaying risks being locked out of expansion, forcing reliance on cities only.",
          es: "En Catan de 4 jugadores, los lugares de asentamiento se llenan rápidamente. La presión para construir un tercer asentamiento para el turno 8-12 es crítica porque después de esto, la mayoría de las ubicaciones viables están bloqueadas. Retrasar arriesga quedar fuera de la expansión, forzando dependencia solo en ciudades.",
          de: "In 4-Spieler-Catan füllen sich Siedlungsplätze schnell. Der Druck, bis Zug 8-12 eine dritte Siedlung zu bauen, ist kritisch, weil danach die meisten lebensfähigen Standorte blockiert sind. Verzögerung riskiert Ausschluss von Expansion und zwingt zur Abhängigkeit nur von Städten.",
          nl: "In 4-speler Catan vullen nederzettingsplekken snel. De druk om een derde nederzetting te bouwen tegen beurt 8-12 is kritiek omdat daarna de meeste levensvatbare locaties geblokkeerd zijn. Uitstel riskeert uitgesloten te worden van expansie, forceert afhankelijkheid alleen van steden."
        }
      },
      {
        question: {
          en: "How should you value the Alchemist progress card in Cities & Knights?",
          es: "¿Cómo debes valorar la carta de progreso Alquimista en Ciudades & Caballeros?",
          de: "Wie sollte man die Alchemisten-Fortschrittskarte in Städte & Ritter bewerten?",
          nl: "Hoe moet je de Alchemist vooruitgangskaart waarderen in Steden & Ridders?"
        },
        options: [
          { en: "Worth 2+ ore equivalent when timed with city builds or knight upgrades", es: "Vale 2+ equivalente de mineral cuando se cronometra con construcciones de ciudades o mejoras de caballeros", de: "Wert von 2+ Erz-Äquivalent bei Timing mit Stadtbauten oder Ritter-Upgrades", nl: "Waard 2+ erts equivalent wanneer getimed met stadenbouw of ridderupgrades" },
          { en: "Always use immediately when drawn", es: "Siempre usar inmediatamente cuando se roba", de: "Immer sofort nach Ziehen verwenden", nl: "Altijd direct gebruiken wanneer getrokken" },
          { en: "Discard for a different card", es: "Descartar por una carta diferente", de: "Für eine andere Karte abwerfen", nl: "Weggooien voor een andere kaart" },
          { en: "Only valuable in first 3 turns", es: "Solo valioso en los primeros 3 turnos", de: "Nur in ersten 3 Zügen wertvoll", nl: "Alleen waardevol in eerste 3 beurten" }
        ],
        correct: 0,
        explanation: {
          en: "The Alchemist allows converting two identical resources to one ore. It's most valuable when you're 1-2 ore short of a city or strong knight upgrade and have excess wheat or sheep. Strategic timing can provide 2-4 effective ore over the game.",
          es: "El Alquimista permite convertir dos recursos idénticos en un mineral. Es más valioso cuando te falta 1-2 minerales para una ciudad o mejora de caballero fuerte y tienes exceso de trigo u ovejas. El tiempo estratégico puede proporcionar 2-4 minerales efectivos durante el juego.",
          de: "Der Alchemist ermöglicht die Umwandlung von zwei identischen Ressourcen in ein Erz. Er ist am wertvollsten, wenn man 1-2 Erz für eine Stadt oder starke Ritter-Upgrade fehlt und überschüssigen Weizen oder Schafe hat. Strategisches Timing kann 2-4 effektives Erz über das Spiel liefern.",
          nl: "De Alchemist maakt het mogelijk twee identieke bronnen om te zetten naar één erts. Het is het meest waardevol wanneer je 1-2 erts tekort komt voor een stad of sterke ridder upgrade en overtollig tarwe of schapen hebt. Strategische timing kan 2-4 effectief erts gedurende het spel leveren."
        }
      },
      {
        question: {
          en: "What is the 'development card timing paradox'?",
          es: "¿Qué es la 'paradoja del tiempo de la carta de desarrollo'?",
          de: "Was ist das 'Entwicklungskarten-Timing-Paradoxon'?",
          nl: "Wat is de 'ontwikkelingskaart timing paradox'?"
        },
        options: [
          { en: "Can't play newly bought dev cards same turn, must wait until next turn", es: "No se pueden jugar cartas de desarrollo recién compradas en el mismo turno, debe esperar hasta el siguiente turno", de: "Neu gekaufte Entwicklungskarten können nicht im selben Zug gespielt werden, muss bis nächsten Zug warten", nl: "Nieuw gekochte ontwikkelingskaarten kunnen niet dezelfde beurt gespeeld worden, moet wachten tot volgende beurt" },
          { en: "All dev cards must be played immediately", es: "Todas las cartas de desarrollo deben jugarse inmediatamente", de: "Alle Entwicklungskarten müssen sofort gespielt werden", nl: "Alle ontwikkelingskaarten moeten direct gespeeld worden" },
          { en: "Victory point cards can be played anytime", es: "Las cartas de puntos de victoria se pueden jugar en cualquier momento", de: "Siegpunktkarten können jederzeit gespielt werden", nl: "Overwinningspuntkaarten kunnen altijd gespeeld worden" },
          { en: "You can play multiple knights per turn", es: "Puedes jugar múltiples caballeros por turno", de: "Man kann mehrere Ritter pro Zug spielen", nl: "Je kunt meerdere ridders per beurt spelen" }
        ],
        correct: 0,
        explanation: {
          en: "The timing rule states you cannot play a development card on the same turn you purchase it (except victory points which are revealed at win). This creates strategic tension: buying cards for immediate use versus holding them as future options.",
          es: "La regla de tiempo establece que no puedes jugar una carta de desarrollo en el mismo turno en que la compras (excepto puntos de victoria que se revelan al ganar). Esto crea tensión estratégica: comprar cartas para uso inmediato versus mantenerlas como opciones futuras.",
          de: "Die Timing-Regel besagt, dass Sie eine Entwicklungskarte nicht im selben Zug spielen können, in dem Sie sie kaufen (außer Siegpunkte, die beim Sieg aufgedeckt werden). Dies schafft strategische Spannung: Karten für sofortige Verwendung kaufen versus sie als zukünftige Optionen halten.",
          nl: "De timingregel stelt dat je een ontwikkelingskaart niet kunt spelen in dezelfde beurt dat je deze koopt (behalve overwinningspunten die bij winst onthuld worden). Dit creëert strategische spanning: kaarten kopen voor direct gebruik versus ze houden als toekomstige opties."
        }
      },
      {
        question: {
          en: "In Traders & Barbarians variant, what is the caravan strategy?",
          es: "En la variante Comerciantes & Bárbaros, ¿qué es la estrategia de caravana?",
          de: "Was ist die Karawanen-Strategie in der Händler & Barbaren-Variante?",
          nl: "Wat is de karavaan strategie in de Handelaren & Barbaren variant?"
        },
        options: [
          { en: "Move caravans to deliver commodities before opponents for bonus points", es: "Mover caravanas para entregar productos antes que los oponentes por puntos de bonificación", de: "Karawanen bewegen um Rohstoffe vor Gegnern zu liefern für Bonuspunkte", nl: "Karavanen verplaatsen om grondstoffen voor tegenstanders te leveren voor bonuspunten" },
          { en: "Never move caravans", es: "Nunca mover caravanas", de: "Karawanen nie bewegen", nl: "Nooit karavanen verplaatsen" },
          { en: "Only use roads, ignore caravans", es: "Solo usar carreteras, ignorar caravanas", de: "Nur Straßen verwenden, Karawanen ignorieren", nl: "Alleen wegen gebruiken, karavanen negeren" },
          { en: "Build cities on caravan routes", es: "Construir ciudades en rutas de caravanas", de: "Städte auf Karawanenrouten bauen", nl: "Steden bouwen op karavaan routes" }
        ],
        correct: 0,
        explanation: {
          en: "In Traders & Barbarians, caravans transport commodities across the board. The first player to deliver each commodity type to the target city earns bonus victory points. Strategic caravan positioning and timing becomes a race separate from normal Catan victory paths.",
          es: "En Comerciantes & Bárbaros, las caravanas transportan productos a través del tablero. El primer jugador en entregar cada tipo de producto a la ciudad objetivo gana puntos de victoria de bonificación. El posicionamiento y tiempo estratégico de caravanas se convierte en una carrera separada de las rutas de victoria normales de Catan.",
          de: "In Händler & Barbaren transportieren Karawanen Rohstoffe über das Brett. Der erste Spieler, der jeden Rohstofftyp zur Zielstadt liefert, verdient Bonus-Siegpunkte. Strategische Karawanenpositionierung und Timing wird zu einem separaten Rennen von normalen Catan-Siegpfaden.",
          nl: "In Handelaren & Barbaren transporteren karavanen grondstoffen over het bord. De eerste speler die elk grondstoftype naar de doelstad levert, verdient bonus overwinningspunten. Strategische karavaan positionering en timing wordt een race gescheiden van normale Catan overwinningspaden."
        }
      },
      {
        question: {
          en: "What is the 'robber rotation' meta-strategy in multiplayer?",
          es: "¿Qué es la meta-estrategia de 'rotación de ladrón' en multijugador?",
          de: "Was ist die 'Räuber-Rotations'-Meta-Strategie im Mehrspielermodus?",
          nl: "Wat is de 'rover rotatie' meta-strategie in multiplayer?"
        },
        options: [
          { en: "Coordinate to keep robber off leader's hexes, target 2nd/3rd place", es: "Coordinar para mantener al ladrón fuera de los hexágonos del líder, apuntar al 2º/3º lugar", de: "Koordinieren um Räuber von Führenden fernzuhalten, 2./3. Platz anvisieren", nl: "Coördineren om rover van leider's hexen te houden, 2e/3e plaats targeten" },
          { en: "Always target the leader only", es: "Siempre apuntar solo al líder", de: "Immer nur den Führenden anvisieren", nl: "Altijd alleen de leider targeten" },
          { en: "Random robber placement", es: "Colocación aleatoria del ladrón", de: "Zufällige Räuberplatzierung", nl: "Willekeurige roverplaatsing" },
          { en: "Keep robber in desert permanently", es: "Mantener al ladrón en el desierto permanentemente", de: "Räuber dauerhaft in Wüste halten", nl: "Rover permanent in woestijn houden" }
        ],
        correct: 0,
        explanation: {
          en: "Experienced players recognize that targeting the leader creates 'king-making' where 2nd/3rd place players determine the winner. The meta-strategy is to target each other (2nd vs 3rd) while leaving the leader relatively untouched until the final turns, keeping all players competitive longer.",
          es: "Los jugadores experimentados reconocen que apuntar al líder crea 'hacer rey' donde los jugadores de 2º/3º lugar determinan al ganador. La meta-estrategia es apuntarse mutuamente (2º vs 3º) mientras se deja al líder relativamente intacto hasta los turnos finales, manteniendo a todos los jugadores competitivos por más tiempo.",
          de: "Erfahrene Spieler erkennen, dass das Anvisieren des Führenden 'Königsmachen' schafft, wo 2./3.-Platz-Spieler den Gewinner bestimmen. Die Meta-Strategie ist, sich gegenseitig anzuvisieren (2. vs 3.), während der Führende bis zu den letzten Zügen relativ unberührt bleibt, um alle Spieler länger wettbewerbsfähig zu halten.",
          nl: "Ervaren spelers herkennen dat de leider targeten 'koning-maken' creëert waar 2e/3e plaats spelers de winnaar bepalen. De meta-strategie is elkaar targeten (2e vs 3e) terwijl de leider relatief onaangeroerd blijft tot de laatste beurten, alle spelers langer competitief houdend."
        }
      },
      {
        question: {
          en: "What is the mathematical expected value of a settlement on three 5-pip hexes?",
          es: "¿Cuál es el valor esperado matemático de un asentamiento en tres hexágonos de 5 pips?",
          de: "Was ist der mathematische Erwartungswert einer Siedlung auf drei 5-Pip-Hexen?",
          nl: "Wat is de wiskundige verwachte waarde van een nederzetting op drie 5-pip hexen?"
        },
        options: [
          { en: "1.67 resources per roll (15 pips × 1/36 per pip × 3 hexes)", es: "1.67 recursos por tirada (15 pips × 1/36 por pip × 3 hexágonos)", de: "1.67 Ressourcen pro Wurf (15 Pips × 1/36 pro Pip × 3 Hexe)", nl: "1.67 bronnen per worp (15 pips × 1/36 per pip × 3 hexen)" },
          { en: "0.5 resources per roll", es: "0.5 recursos por tirada", de: "0.5 Ressourcen pro Wurf", nl: "0.5 bronnen per worp" },
          { en: "3 resources guaranteed", es: "3 recursos garantizados", de: "3 Ressourcen garantiert", nl: "3 bronnen gegarandeerd" },
          { en: "5 resources per roll", es: "5 recursos por tirada", de: "5 Ressourcen pro Wurf", nl: "5 bronnen per worp" }
        ],
        correct: 0,
        explanation: {
          en: "Each pip represents 1/36 probability per roll. Three hexes with 5 pips each = 15 total pips = 15/36 = 0.417 resources per hex per roll × 3 hexes ≈ 1.25 total, but accounting for multiple resources: 15 pips means approximately 1.67 resource cards per roll across all three hexes combined.",
          es: "Cada pip representa 1/36 de probabilidad por tirada. Tres hexágonos con 5 pips cada uno = 15 pips totales = 15/36 = 0.417 recursos por hexágono por tirada × 3 hexágonos ≈ 1.25 total, pero teniendo en cuenta múltiples recursos: 15 pips significa aproximadamente 1.67 cartas de recursos por tirada en los tres hexágonos combinados.",
          de: "Jeder Pip repräsentiert 1/36 Wahrscheinlichkeit pro Wurf. Drei Hexe mit je 5 Pips = 15 Gesamt-Pips = 15/36 = 0.417 Ressourcen pro Hex pro Wurf × 3 Hexe ≈ 1.25 gesamt, aber unter Berücksichtigung mehrerer Ressourcen: 15 Pips bedeutet ungefähr 1.67 Ressourcenkarten pro Wurf über alle drei Hexe kombiniert.",
          nl: "Elke pip vertegenwoordigt 1/36 waarschijnlijkheid per worp. Drie hexen met elk 5 pips = 15 totale pips = 15/36 = 0.417 bronnen per hex per worp × 3 hexen ≈ 1.25 totaal, maar rekening houdend met meerdere bronnen: 15 pips betekent ongeveer 1.67 bronkaarten per worp over alle drie hexen gecombineerd."
        }
      },
      {
        question: {
          en: "What is the 'blocking settlement' value calculation?",
          es: "¿Cuál es el cálculo de valor del 'asentamiento de bloqueo'?",
          de: "Was ist die Werteberechnung der 'Blockierungs-Siedlung'?",
          nl: "Wat is de waarde berekening van de 'blokkerings nederzetting'?"
        },
        options: [
          { en: "Your production gain + opponent's production denial value", es: "Tu ganancia de producción + valor de negación de producción del oponente", de: "Eigener Produktionsgewinn + Produktionsverweigerungswert des Gegners", nl: "Je productiewinst + productie ontzegging waarde van tegenstander" },
          { en: "Only count your own pip value", es: "Solo contar tu propio valor de pip", de: "Nur eigenen Pip-Wert zählen", nl: "Alleen je eigen pip waarde tellen" },
          { en: "Ignore opponent positions completely", es: "Ignorar completamente las posiciones del oponente", de: "Gegnerpositionen vollständig ignorieren", nl: "Tegenstander posities volledig negeren" },
          { en: "Random placement without calculation", es: "Colocación aleatoria sin cálculo", de: "Zufällige Platzierung ohne Berechnung", nl: "Willekeurige plaatsing zonder berekening" }
        ],
        correct: 0,
        explanation: {
          en: "A blocking settlement's true value combines: (1) your production benefit from the hexes you touch, PLUS (2) the production you deny to opponents by blocking their expansion route. Sometimes a 7-pip settlement that blocks opponent's 11-pip location is worth more than your own 10-pip location.",
          es: "El valor real de un asentamiento de bloqueo combina: (1) tu beneficio de producción de los hexágonos que tocas, MÁS (2) la producción que niegas a los oponentes al bloquear su ruta de expansión. A veces un asentamiento de 7 pips que bloquea la ubicación de 11 pips del oponente vale más que tu propia ubicación de 10 pips.",
          de: "Der wahre Wert einer Blockierungs-Siedlung kombiniert: (1) Ihren Produktionsvorteil von den Hexen, die Sie berühren, PLUS (2) die Produktion, die Sie Gegnern verweigern, indem Sie ihre Expansionsroute blockieren. Manchmal ist eine 7-Pip-Siedlung, die die 11-Pip-Location des Gegners blockiert, mehr wert als Ihre eigene 10-Pip-Location.",
          nl: "De echte waarde van een blokkerings nederzetting combineert: (1) je productie voordeel van de hexen die je raakt, PLUS (2) de productie die je tegenstanders ontzegt door hun expansieroute te blokkeren. Soms is een 7-pip nederzetting die tegenstanders 11-pip locatie blokkeert meer waard dan je eigen 10-pip locatie."
        }
      },
      {
        question: {
          en: "In tournament finals, what is the 'resource reveal' tracking technique?",
          es: "En finales de torneo, ¿qué es la técnica de seguimiento de 'revelación de recursos'?",
          de: "Was ist die 'Ressourcen-Enthüllungs'-Verfolgungstechnik in Turnierfinalen?",
          nl: "Wat is de 'bron onthulling' volgtechniek in toernooi finales?"
        },
        options: [
          { en: "Track visible trades and rolls to deduce opponents' exact hand composition", es: "Rastrear intercambios y tiradas visibles para deducir la composición exacta de la mano de los oponentes", de: "Sichtbare Geschäfte und Würfe verfolgen um exakte Hand-Zusammensetzung der Gegner zu deduzieren", nl: "Zichtbare handel en worpen volgen om exacte handsamenstelling van tegenstanders te deduceren" },
          { en: "Never observe opponent cards", es: "Nunca observar las cartas del oponente", de: "Nie Gegnerkarten beobachten", nl: "Nooit tegenstander kaarten observeren" },
          { en: "Randomly guess opponent resources", es: "Adivinar aleatoriamente los recursos del oponente", de: "Ressourcen des Gegners zufällig raten", nl: "Willekeurig tegenstander bronnen raden" },
          { en: "Only count your own resources", es: "Solo contar tus propios recursos", de: "Nur eigene Ressourcen zählen", nl: "Alleen je eigen bronnen tellen" }
        ],
        correct: 0,
        explanation: {
          en: "Advanced players track every visible transaction: dice rolls (public production), trades (reveals what players have/need), and builds (consumes known resources). By deducing opponents' hands, you can predict their next moves, time robber placements, and negotiate trades with perfect information.",
          es: "Los jugadores avanzados rastrean cada transacción visible: tiradas de dados (producción pública), intercambios (revela lo que los jugadores tienen/necesitan), y construcciones (consume recursos conocidos). Al deducir las manos de los oponentes, puedes predecir sus próximos movimientos, cronometrar colocaciones de ladrones y negociar intercambios con información perfecta.",
          de: "Fortgeschrittene Spieler verfolgen jede sichtbare Transaktion: Würfelwürfe (öffentliche Produktion), Geschäfte (offenbart was Spieler haben/brauchen), und Bauten (verbraucht bekannte Ressourcen). Durch Deduzieren der Hände der Gegner können Sie deren nächste Züge vorhersagen, Räuberplatzierungen timen und Geschäfte mit perfekter Information verhandeln.",
          nl: "Geavanceerde spelers volgen elke zichtbare transactie: dobbelsteenworpen (publieke productie), handel (onthult wat spelers hebben/nodig hebben), en bouwsels (verbruikt bekende bronnen). Door tegenstanders' handen te deduceren, kun je hun volgende zetten voorspellen, roverplaatsingen timen en handel onderhandelen met perfecte informatie."
        }
      },
      {
        question: {
          en: "What is the 'knight activation timing' in Cities & Knights?",
          es: "¿Qué es el 'tiempo de activación de caballero' en Ciudades & Caballeros?",
          de: "Was ist das 'Ritter-Aktivierungs-Timing' in Städte & Ritter?",
          nl: "Wat is de 'ridder activatie timing' in Steden & Ridders?"
        },
        options: [
          { en: "Activate knights only when barbarians are 2-3 ships away or to displace opponent knight", es: "Activar caballeros solo cuando los bárbaros están a 2-3 barcos o para desplazar al caballero oponente", de: "Ritter nur aktivieren wenn Barbaren 2-3 Schiffe entfernt sind oder um Gegnerritter zu verdrängen", nl: "Ridders alleen activeren wanneer barbaren 2-3 schepen weg zijn of om tegenstander ridder te verdringen" },
          { en: "Activate all knights immediately when built", es: "Activar todos los caballeros inmediatamente cuando se construyen", de: "Alle Ritter sofort nach dem Bau aktivieren", nl: "Alle ridders direct activeren wanneer gebouwd" },
          { en: "Never activate knights to save grain", es: "Nunca activar caballeros para ahorrar grano", de: "Ritter nie aktivieren um Getreide zu sparen", nl: "Nooit ridders activeren om graan te sparen" },
          { en: "Only activate on the final turn", es: "Solo activar en el turno final", de: "Nur im letzten Zug aktivieren", nl: "Alleen in de laatste beurt activeren" }
        ],
        correct: 0,
        explanation: {
          en: "In Cities & Knights, knights cost 1 grain to activate. Optimal timing is waiting until barbarians are close (2-3 event cards from attack) to conserve grain, or when you need to displace an opponent's active knight from a strategic hex. Activating too early wastes resources.",
          es: "En Ciudades & Caballeros, los caballeros cuestan 1 grano para activar. El tiempo óptimo es esperar hasta que los bárbaros estén cerca (2-3 cartas de evento del ataque) para conservar grano, o cuando necesitas desplazar al caballero activo de un oponente de un hexágono estratégico. Activar demasiado temprano desperdicia recursos.",
          de: "In Städte & Ritter kosten Ritter 1 Getreide zur Aktivierung. Optimales Timing ist zu warten bis Barbaren nahe sind (2-3 Ereigniskarten vom Angriff) um Getreide zu sparen, oder wenn man den aktiven Ritter eines Gegners von einem strategischen Hex verdrängen muss. Zu frühes Aktivieren verschwendet Ressourcen.",
          nl: "In Steden & Ridders kosten ridders 1 graan om te activeren. Optimale timing is wachten tot barbaren dichtbij zijn (2-3 gebeurteniskaarten van aanval) om graan te besparen, of wanneer je de actieve ridder van een tegenstander van een strategische hex moet verdringen. Te vroeg activeren verspilt bronnen."
        }
      },
      {
        question: {
          en: "What is the 'reverse auction' trading psychology?",
          es: "¿Qué es la psicología de comercio de 'subasta inversa'?",
          de: "Was ist die 'umgekehrte Auktions'-Handelspsychologie?",
          nl: "Wat is de 'omgekeerde veiling' handelspsychologie?"
        },
        options: [
          { en: "Announce need, let opponents compete to offer best rate", es: "Anunciar necesidad, dejar que los oponentes compitan para ofrecer la mejor tarifa", de: "Bedarf ankündigen, Gegner um bestes Angebot konkurrieren lassen", nl: "Behoefte aankondigen, tegenstanders laten concurreren om beste tarief te bieden" },
          { en: "Accept only 1:1 trades always", es: "Aceptar solo intercambios 1:1 siempre", de: "Immer nur 1:1-Geschäfte akzeptieren", nl: "Alleen 1:1 handel accepteren altijd" },
          { en: "Never announce your needs publicly", es: "Nunca anunciar tus necesidades públicamente", de: "Bedürfnisse nie öffentlich ankündigen", nl: "Nooit je behoeften publiekelijk aankondigen" },
          { en: "Trade only with the bank at 4:1", es: "Comerciar solo con el banco a 4:1", de: "Nur mit der Bank zu 4:1 handeln", nl: "Alleen met de bank op 4:1 handelen" }
        ],
        correct: 0,
        explanation: {
          en: "Instead of making specific trade offers, announce 'I need 1 ore' and let multiple opponents bid against each other. This creates competition that can improve your trade ratio from 2:1 to 1:1 or even better, as players compete for your resources while you maintain negotiating power.",
          es: "En lugar de hacer ofertas comerciales específicas, anuncia 'Necesito 1 mineral' y deja que múltiples oponentes compitan entre sí. Esto crea competencia que puede mejorar tu relación comercial de 2:1 a 1:1 o incluso mejor, ya que los jugadores compiten por tus recursos mientras mantienes el poder de negociación.",
          de: "Anstatt spezifische Handelsangebote zu machen, kündigen Sie 'Ich brauche 1 Erz' an und lassen Sie mehrere Gegner gegeneinander bieten. Dies schafft Wettbewerb, der Ihr Handelsverhältnis von 2:1 auf 1:1 oder noch besser verbessern kann, da Spieler um Ihre Ressourcen konkurrieren, während Sie Verhandlungsmacht behalten.",
          nl: "In plaats van specifieke handelsaanbiedingen te doen, kondig aan 'Ik heb 1 erts nodig' en laat meerdere tegenstanders tegen elkaar bieden. Dit creëert competitie die je handelsratio kan verbeteren van 2:1 naar 1:1 of zelfs beter, terwijl spelers concurreren voor je bronnen terwijl jij onderhandelingsmacht behoudt."
        }
      },
      {
        question: {
          en: "How should you value metropolis control in Cities & Knights?",
          es: "¿Cómo debes valorar el control de metrópolis en Ciudades & Caballeros?",
          de: "Wie sollte man Metropolenkontrolle in Städte & Ritter bewerten?",
          nl: "Hoe moet je metropool controle waarderen in Steden & Ridders?"
        },
        options: [
          { en: "Worth 4 points total (2 base + potential 2-point swing from opponent)", es: "Vale 4 puntos totales (2 base + potencial cambio de 2 puntos del oponente)", de: "Wert von 4 Punkten insgesamt (2 Basis + potenzielle 2-Punkte-Schwankung vom Gegner)", nl: "Waard 4 punten totaal (2 basis + potentiële 2-punten swing van tegenstander)" },
          { en: "Only worth 1 victory point", es: "Solo vale 1 punto de victoria", de: "Nur 1 Siegpunkt wert", nl: "Slechts 1 overwinningspunt waard" },
          { en: "Worth 10 points automatically", es: "Vale 10 puntos automáticamente", de: "Automatisch 10 Punkte wert", nl: "Automatisch 10 punten waard" },
          { en: "Has no victory point value", es: "No tiene valor de puntos de victoria", de: "Hat keinen Siegpunktwert", nl: "Heeft geen overwinningspuntwaarde" }
        ],
        correct: 0,
        explanation: {
          en: "Each metropolis grants 2 victory points. However, taking a metropolis from an opponent creates a 4-point swing (you gain 2, they lose 2). This makes metropolis competition extremely valuable in late game, similar to longest road/largest army but requiring commodity production strategy.",
          es: "Cada metrópolis otorga 2 puntos de victoria. Sin embargo, tomar una metrópolis de un oponente crea un cambio de 4 puntos (ganas 2, ellos pierden 2). Esto hace que la competencia de metrópolis sea extremadamente valiosa en el final del juego, similar al camino más largo/ejército más grande pero requiriendo estrategia de producción de productos.",
          de: "Jede Metropole gewährt 2 Siegpunkte. Das Übernehmen einer Metropole von einem Gegner schafft jedoch eine 4-Punkte-Schwankung (Sie gewinnen 2, sie verlieren 2). Dies macht Metropolenwettbewerb im Endspiel extrem wertvoll, ähnlich wie längste Straße/größte Armee, aber mit erforderlicher Rohstoffproduktionsstrategie.",
          nl: "Elke metropool verleent 2 overwinningspunten. Het overnemen van een metropool van een tegenstander creëert echter een 4-punten swing (jij wint 2, zij verliezen 2). Dit maakt metropool competitie extreem waardevol in laat spel, vergelijkbaar met langste weg/grootste leger maar vereist grondstof productie strategie."
        }
      },
      {
        question: {
          en: "What is the 'settlement spacing offensive' in opening placement?",
          es: "¿Qué es la 'ofensiva de espaciado de asentamiento' en la colocación de apertura?",
          de: "Was ist die 'Siedlungsabstands-Offensive' bei der Eröffnungsplatzierung?",
          nl: "Wat is de 'nederzettingsafstand offensief' in openingsplaatsing?"
        },
        options: [
          { en: "Place settlements to block maximum opponent expansion routes early", es: "Colocar asentamientos para bloquear máximas rutas de expansión del oponente temprano", de: "Siedlungen platzieren um maximale Gegner-Expansionsrouten früh zu blockieren", nl: "Nederzettingen plaatsen om maximale tegenstander expansie routes vroeg te blokkeren" },
          { en: "Place both settlements adjacent to each other", es: "Colocar ambos asentamientos adyacentes entre sí", de: "Beide Siedlungen nebeneinander platzieren", nl: "Beide nederzettingen naast elkaar plaatsen" },
          { en: "Only focus on your own production, ignore opponents", es: "Solo enfocarse en tu propia producción, ignorar a los oponentes", de: "Nur auf eigene Produktion konzentrieren, Gegner ignorieren", nl: "Alleen focussen op je eigen productie, tegenstanders negeren" },
          { en: "Always place on corners of the board", es: "Siempre colocar en las esquinas del tablero", de: "Immer auf Ecken des Bretts platzieren", nl: "Altijd op hoeken van het bord plaatsen" }
        ],
        correct: 0,
        explanation: {
          en: "Strategic opening involves placing your second settlement to not only maximize your production but also block opponents' third settlement options. By controlling key intersections that limit opponent expansion paths, you force them into suboptimal locations while securing your territorial control.",
          es: "La apertura estratégica implica colocar tu segundo asentamiento no solo para maximizar tu producción sino también para bloquear las opciones del tercer asentamiento de los oponentes. Al controlar intersecciones clave que limitan las rutas de expansión del oponente, los fuerzas a ubicaciones subóptimas mientras aseguras tu control territorial.",
          de: "Strategische Eröffnung beinhaltet das Platzieren Ihrer zweiten Siedlung, um nicht nur Ihre Produktion zu maximieren, sondern auch die dritten Siedlungsoptionen der Gegner zu blockieren. Durch Kontrolle wichtiger Kreuzungen, die Gegner-Expansionspfade begrenzen, zwingen Sie sie in suboptimale Standorte, während Sie Ihre territoriale Kontrolle sichern.",
          nl: "Strategische opening houdt in dat je je tweede nederzetting plaatst om niet alleen je productie te maximaliseren maar ook tegenstanders' derde nederzettingsopties te blokkeren. Door controle over cruciale kruispunten die tegenstander expansiepaden beperken, dwing je hen in suboptimale locaties terwijl je territoriale controle veiligstelt."
        }
      },
      {
        question: {
          en: "What is the 'late-game dev card hoarding' strategy?",
          es: "¿Qué es la estrategia de 'acumulación de cartas de desarrollo de final de juego'?",
          de: "Was ist die 'Endspiel-Entwicklungskarten-Hortungs'-Strategie?",
          nl: "Wat is de 'laat-spel ontwikkelingskaart oppot' strategie?"
        },
        options: [
          { en: "Buy multiple dev cards when at 7-8 points to create unpredictable winning options", es: "Comprar múltiples cartas de desarrollo cuando estás en 7-8 puntos para crear opciones de victoria impredecibles", de: "Mehrere Entwicklungskarten bei 7-8 Punkten kaufen um unvorhersehbare Gewinnoptionen zu schaffen", nl: "Meerdere ontwikkelingskaarten kopen bij 7-8 punten om onvoorspelbare winopties te creëren" },
          { en: "Never buy development cards after turn 10", es: "Nunca comprar cartas de desarrollo después del turno 10", de: "Niemals Entwicklungskarten nach Zug 10 kaufen", nl: "Nooit ontwikkelingskaarten kopen na beurt 10" },
          { en: "Sell all development cards back to bank", es: "Vender todas las cartas de desarrollo de vuelta al banco", de: "Alle Entwicklungskarten zurück an die Bank verkaufen", nl: "Alle ontwikkelingskaarten terug aan bank verkopen" },
          { en: "Only buy cards in first 3 turns", es: "Solo comprar cartas en los primeros 3 turnos", de: "Nur in ersten 3 Zügen Karten kaufen", nl: "Alleen kaarten kopen in eerste 3 beurten" }
        ],
        correct: 0,
        explanation: {
          en: "At 7-8 visible points, buying 2-3 development cards creates multiple paths to 10 points: hidden VP cards, Monopoly/Year of Plenty enabling surprise builds, or knights for largest army. This unpredictability makes it harder for opponents to block your victory.",
          es: "En 7-8 puntos visibles, comprar 2-3 cartas de desarrollo crea múltiples caminos a 10 puntos: cartas VP ocultas, Monopolio/Año de Abundancia permitiendo construcciones sorpresa, o caballeros para el ejército más grande. Esta imprevisibilidad hace más difícil para los oponentes bloquear tu victoria.",
          de: "Bei 7-8 sichtbaren Punkten schafft der Kauf von 2-3 Entwicklungskarten mehrere Wege zu 10 Punkten: versteckte VP-Karten, Monopol/Jahr des Überflusses für Überraschungsbauten, oder Ritter für größte Armee. Diese Unvorhersehbarkeit macht es Gegnern schwerer, Ihren Sieg zu blockieren.",
          nl: "Bij 7-8 zichtbare punten creëert het kopen van 2-3 ontwikkelingskaarten meerdere paden naar 10 punten: verborgen VP-kaarten, Monopolie/Jaar van Overvloed die verrassing bouwwerken mogelijk maken, of ridders voor grootste leger. Deze onvoorspelbaarheid maakt het moeilijker voor tegenstanders om je overwinning te blokkeren."
        }
      },
      {
        question: {
          en: "How do you calculate 'effective pip value' with robber consideration?",
          es: "¿Cómo calculas el 'valor de pip efectivo' con consideración del ladrón?",
          de: "Wie berechnet man den 'effektiven Pip-Wert' unter Berücksichtigung des Räubers?",
          nl: "Hoe bereken je 'effectieve pip waarde' met rover overweging?"
        },
        options: [
          { en: "Reduce 6/8 pip value by 20-30% due to robber targeting probability", es: "Reducir valor de pip 6/8 en 20-30% debido a probabilidad de orientación del ladrón", de: "6/8-Pip-Wert um 20-30% reduzieren aufgrund Räuber-Zielwahrscheinlichkeit", nl: "6/8 pip waarde verlagen met 20-30% vanwege rover targeting waarschijnlijkheid" },
          { en: "All pips have identical value regardless of robber", es: "Todos los pips tienen valor idéntico independientemente del ladrón", de: "Alle Pips haben identischen Wert unabhängig vom Räuber", nl: "Alle pips hebben identieke waarde ongeacht rover" },
          { en: "Add 50% to 6/8 values for robber presence", es: "Agregar 50% a valores 6/8 por presencia del ladrón", de: "50% zu 6/8-Werten für Räuberpräsenz hinzufügen", nl: "50% toevoegen aan 6/8 waarden voor rover aanwezigheid" },
          { en: "Robber has no impact on pip calculations", es: "El ladrón no tiene impacto en los cálculos de pip", de: "Räuber hat keinen Einfluss auf Pip-Berechnungen", nl: "Rover heeft geen impact op pip berekeningen" }
        ],
        correct: 0,
        explanation: {
          en: "While 6 and 8 hexes have the highest raw probability (5 pips each), they attract the robber more frequently, especially in competitive play where opponents target high-production hexes. Adjusting their effective value down by 20-30% provides more realistic settlement evaluation.",
          es: "Mientras que los hexágonos 6 y 8 tienen la probabilidad bruta más alta (5 pips cada uno), atraen al ladrón con más frecuencia, especialmente en juego competitivo donde los oponentes apuntan a hexágonos de alta producción. Ajustar su valor efectivo hacia abajo en 20-30% proporciona una evaluación de asentamiento más realista.",
          de: "Während 6- und 8-Hexe die höchste Rohwahrscheinlichkeit haben (je 5 Pips), ziehen sie den Räuber häufiger an, besonders im Wettkampfspiel, wo Gegner hochproduktive Hexe anvisieren. Eine Anpassung ihres effektiven Werts um 20-30% nach unten bietet eine realistischere Siedlungsbewertung.",
          nl: "Hoewel 6 en 8 hexen de hoogste ruwe waarschijnlijkheid hebben (elk 5 pips), trekken ze de rover vaker aan, vooral in competitief spel waar tegenstanders hoge-productie hexen targeten. Hun effectieve waarde aanpassen met 20-30% naar beneden biedt realistischere nederzettingsevaluatie."
        }
      },
      {
        question: {
          en: "What is the 'initial placement asymmetry' advantage calculation?",
          es: "¿Qué es el cálculo de ventaja de 'asimetría de colocación inicial'?",
          de: "Was ist die Berechnung des 'anfänglichen Platzierungsasymmetrie'-Vorteils?",
          nl: "Wat is de 'initiële plaatsings asymmetrie' voordeel berekening?"
        },
        options: [
          { en: "First player gets best spot but last player gets consecutive picks and starting resources", es: "El primer jugador obtiene el mejor lugar pero el último jugador obtiene selecciones consecutivas y recursos iniciales", de: "Erster Spieler bekommt besten Platz aber letzter Spieler bekommt aufeinanderfolgende Picks und Startressourcen", nl: "Eerste speler krijgt beste plek maar laatste speler krijgt opeenvolgende keuzes en startbronnen" },
          { en: "All positions have identical advantage", es: "Todas las posiciones tienen ventaja idéntica", de: "Alle Positionen haben identischen Vorteil", nl: "Alle posities hebben identiek voordeel" },
          { en: "Last player always wins", es: "El último jugador siempre gana", de: "Letzter Spieler gewinnt immer", nl: "Laatste speler wint altijd" },
          { en: "First player has insurmountable advantage", es: "El primer jugador tiene ventaja insuperable", de: "Erster Spieler hat unüberwindbaren Vorteil", nl: "Eerste speler heeft onoverkomelijk voordeel" }
        ],
        correct: 0,
        explanation: {
          en: "Turn order creates strategic trade-offs: 1st player claims the single best location but 4th player places both settlements back-to-back (seeing all opponents' choices) AND receives starting resources from the second settlement. Studies show positions 2-3 often have slight statistical advantage.",
          es: "El orden de turno crea compensaciones estratégicas: el 1er jugador reclama la mejor ubicación única pero el 4º jugador coloca ambos asentamientos consecutivamente (viendo todas las elecciones de los oponentes) Y recibe recursos iniciales del segundo asentamiento. Los estudios muestran que las posiciones 2-3 a menudo tienen una ligera ventaja estadística.",
          de: "Zugreihenfolge schafft strategische Kompromisse: 1. Spieler beansprucht den einzelnen besten Standort, aber 4. Spieler platziert beide Siedlungen hintereinander (sieht alle Entscheidungen der Gegner) UND erhält Startressourcen von der zweiten Siedlung. Studien zeigen, dass Positionen 2-3 oft einen leichten statistischen Vorteil haben.",
          nl: "Beurtvolgorde creëert strategische afwegingen: 1e speler claimt de enkele beste locatie maar 4e speler plaatst beide nederzettingen achter elkaar (ziet alle keuzes van tegenstanders) EN ontvangt startbronnen van de tweede nederzetting. Studies tonen dat posities 2-3 vaak licht statistisch voordeel hebben."
        }
      },
      {
        question: {
          en: "What defines 'resource engine momentum' in mid-game?",
          es: "¿Qué define el 'impulso del motor de recursos' a mitad de juego?",
          de: "Was definiert 'Ressourcenmotor-Momentum' im Mittelspiel?",
          nl: "Wat definieert 'bronmotor momentum' in het middenspel?"
        },
        options: [
          { en: "When cities produce enough surplus to build every 2-3 turns without trading", es: "Cuando las ciudades producen suficiente excedente para construir cada 2-3 turnos sin comerciar", de: "Wenn Städte genug Überschuss produzieren um alle 2-3 Züge ohne Handel zu bauen", nl: "Wanneer steden genoeg surplus produceren om elke 2-3 beurten te bouwen zonder handelen" },
          { en: "Having exactly 7 cards always", es: "Tener exactamente 7 cartas siempre", de: "Immer genau 7 Karten haben", nl: "Altijd precies 7 kaarten hebben" },
          { en: "Never building anything to save resources", es: "Nunca construir nada para ahorrar recursos", de: "Nie etwas bauen um Ressourcen zu sparen", nl: "Nooit iets bouwen om bronnen te sparen" },
          { en: "Only trading with bank at 4:1", es: "Solo comerciar con el banco a 4:1", de: "Nur mit der Bank zu 4:1 handeln", nl: "Alleen met de bank op 4:1 handelen" }
        ],
        correct: 0,
        explanation: {
          en: "Resource engine momentum occurs when your production (typically from 2-3 cities + settlements) generates enough resources to build settlements, roads, or buy development cards every 2-3 turns. This self-sustaining growth creates exponential advantage and often signals the path to victory.",
          es: "El impulso del motor de recursos ocurre cuando tu producción (típicamente de 2-3 ciudades + asentamientos) genera suficientes recursos para construir asentamientos, caminos o comprar cartas de desarrollo cada 2-3 turnos. Este crecimiento autosostenible crea una ventaja exponencial y a menudo señala el camino hacia la victoria.",
          de: "Ressourcenmotor-Momentum tritt auf, wenn Ihre Produktion (typischerweise von 2-3 Städten + Siedlungen) genug Ressourcen generiert, um alle 2-3 Züge Siedlungen, Straßen zu bauen oder Entwicklungskarten zu kaufen. Dieses selbsttragende Wachstum schafft exponentiellen Vorteil und signalisiert oft den Weg zum Sieg.",
          nl: "Bronmotor momentum treedt op wanneer je productie (typisch van 2-3 steden + nederzettingen) genoeg bronnen genereert om elke 2-3 beurten nederzettingen, wegen te bouwen of ontwikkelingskaarten te kopen. Deze zelfonderhoudende groei creëert exponentieel voordeel en signaleert vaak het pad naar overwinning."
        }
      },
      {
        question: {
          en: "How should you value the 'Desert' hex strategically?",
          es: "¿Cómo debes valorar el hexágono 'Desierto' estratégicamente?",
          de: "Wie sollte man das 'Wüsten'-Hex strategisch bewerten?",
          nl: "Hoe moet je de 'Woestijn' hex strategisch waarderen?"
        },
        options: [
          { en: "Slight positive value: robber starts there, freeing other hexes early game", es: "Valor ligeramente positivo: el ladrón comienza ahí, liberando otros hexágonos al inicio del juego", de: "Leicht positiver Wert: Räuber startet dort, befreit andere Hexe im Frühspiel", nl: "Licht positieve waarde: rover begint daar, bevrijdt andere hexen vroeg spel" },
          { en: "Extremely valuable for production", es: "Extremadamente valioso para producción", de: "Extrem wertvoll für Produktion", nl: "Extreem waardevol voor productie" },
          { en: "Worth -5 victory points", es: "Vale -5 puntos de victoria", de: "Wert -5 Siegpunkte", nl: "Waard -5 overwinningspunten" },
          { en: "Must be avoided at all costs", es: "Debe evitarse a toda costa", de: "Muss um jeden Preis vermieden werden", nl: "Moet te allen tijde vermeden worden" }
        ],
        correct: 0,
        explanation: {
          en: "While desert produces no resources, it has minor strategic value: the robber begins there (affecting other players' hexes in early game), and desert-adjacent settlements can still be good if the other two hexes are excellent (like 6 and 8). It's not devastating to touch desert.",
          es: "Aunque el desierto no produce recursos, tiene un valor estratégico menor: el ladrón comienza ahí (afectando los hexágonos de otros jugadores al inicio del juego), y los asentamientos adyacentes al desierto aún pueden ser buenos si los otros dos hexágonos son excelentes (como 6 y 8). No es devastador tocar el desierto.",
          de: "Während die Wüste keine Ressourcen produziert, hat sie geringen strategischen Wert: Der Räuber beginnt dort (beeinflusst andere Spieler-Hexe im Frühspiel), und wüstennachbarliche Siedlungen können dennoch gut sein, wenn die anderen beiden Hexe ausgezeichnet sind (wie 6 und 8). Es ist nicht verheerend, die Wüste zu berühren.",
          nl: "Hoewel woestijn geen bronnen produceert, heeft het geringe strategische waarde: de rover begint daar (beïnvloedt andere spelers' hexen in vroeg spel), en woestijn-aangrenzende nederzettingen kunnen nog steeds goed zijn als de andere twee hexen uitstekend zijn (zoals 6 en 8). Het is niet verwoestend om woestijn te raken."
        }
      },
      {
        question: {
          en: "What is the 'three-city endgame threshold'?",
          es: "¿Qué es el 'umbral de final de juego de tres ciudades'?",
          de: "Was ist die 'Drei-Städte-Endspiel-Schwelle'?",
          nl: "Wat is de 'drie-steden eindspel drempel'?"
        },
        options: [
          { en: "With 3 cities producing double resources, you can outpace opponents' settlement builds", es: "Con 3 ciudades produciendo doble recursos, puedes superar las construcciones de asentamientos de los oponentes", de: "Mit 3 Städten die doppelte Ressourcen produzieren, kann man Gegner-Siedlungsbauten überholen", nl: "Met 3 steden die dubbele bronnen produceren, kun je tegenstanders' nederzettingsbouwsels voorbijstreven" },
          { en: "Exactly 3 cities guarantees victory", es: "Exactamente 3 ciudades garantiza victoria", de: "Genau 3 Städte garantieren Sieg", nl: "Precies 3 steden garandeert overwinning" },
          { en: "Never build more than 2 cities", es: "Nunca construir más de 2 ciudades", de: "Nie mehr als 2 Städte bauen", nl: "Nooit meer dan 2 steden bouwen" },
          { en: "Cities have no strategic value", es: "Las ciudades no tienen valor estratégico", de: "Städte haben keinen strategischen Wert", nl: "Steden hebben geen strategische waarde" }
        ],
        correct: 0,
        explanation: {
          en: "Three cities represent a critical mass where your production (3 cities × 2 resources each = 6 resource cards per matching roll) generates enough surplus to build faster than opponents. At this point, you typically have resource engine momentum and are positioned to win within 3-5 turns.",
          es: "Tres ciudades representan una masa crítica donde tu producción (3 ciudades × 2 recursos cada una = 6 cartas de recursos por tirada coincidente) genera suficiente excedente para construir más rápido que los oponentes. En este punto, típicamente tienes impulso del motor de recursos y estás posicionado para ganar dentro de 3-5 turnos.",
          de: "Drei Städte repräsentieren eine kritische Masse, wo Ihre Produktion (3 Städte × 2 Ressourcen je = 6 Ressourcenkarten pro passendem Wurf) genug Überschuss generiert, um schneller als Gegner zu bauen. Zu diesem Zeitpunkt haben Sie typischerweise Ressourcenmotor-Momentum und sind positioniert, um innerhalb von 3-5 Zügen zu gewinnen.",
          nl: "Drie steden vertegenwoordigen een kritieke massa waar je productie (3 steden × 2 bronnen elk = 6 bronkaarten per overeenkomende worp) genoeg surplus genereert om sneller te bouwen dan tegenstanders. Op dit punt heb je typisch bronmotor momentum en ben je gepositioneerd om binnen 3-5 beurten te winnen."
        }
      },
      {
        question: {
          en: "What is the optimal 'trade refusal threshold' in competitive play?",
          es: "¿Cuál es el 'umbral óptimo de rechazo de intercambio' en el juego competitivo?",
          de: "Was ist die optimale 'Handelsablehnungs-Schwelle' im Wettkampfspiel?",
          nl: "Wat is de optimale 'handelsweigerings drempel' in competitief spel?"
        },
        options: [
          { en: "Refuse trades that help players within 2 points of victory", es: "Rechazar intercambios que ayuden a jugadores a 2 puntos de la victoria", de: "Geschäfte ablehnen die Spielern innerhalb 2 Punkten vom Sieg helfen", nl: "Handel weigeren die spelers binnen 2 punten van overwinning helpt" },
          { en: "Accept all trades always", es: "Aceptar todos los intercambios siempre", de: "Alle Geschäfte immer akzeptieren", nl: "Alle handel altijd accepteren" },
          { en: "Never trade with anyone", es: "Nunca comerciar con nadie", de: "Niemals mit jemandem handeln", nl: "Nooit met iemand handelen" },
          { en: "Only trade on even-numbered turns", es: "Solo comerciar en turnos de números pares", de: "Nur in geraden Zügen handeln", nl: "Alleen op even-genummerde beurten handelen" }
        ],
        correct: 0,
        explanation: {
          en: "Once a player reaches 8 visible points (2 from victory), the game enters critical phase where trades become kingmaking decisions. The threshold is refusing trades that could enable their final builds, while still trading with players at 6-7 points to maintain your own competitive position.",
          es: "Una vez que un jugador alcanza 8 puntos visibles (2 de la victoria), el juego entra en fase crítica donde los intercambios se convierten en decisiones que hacen rey. El umbral es rechazar intercambios que podrían permitir sus construcciones finales, mientras aún comercias con jugadores en 6-7 puntos para mantener tu propia posición competitiva.",
          de: "Sobald ein Spieler 8 sichtbare Punkte erreicht (2 vom Sieg), tritt das Spiel in die kritische Phase ein, wo Geschäfte zu königsmachenden Entscheidungen werden. Die Schwelle ist die Ablehnung von Geschäften, die ihre finalen Bauten ermöglichen könnten, während man noch mit Spielern bei 6-7 Punkten handelt, um die eigene Wettbewerbsposition zu halten.",
          nl: "Zodra een speler 8 zichtbare punten bereikt (2 van overwinning), komt het spel in kritieke fase waar handel koning-makende beslissingen worden. De drempel is handel weigeren die hun laatste bouwwerken zou kunnen mogelijk maken, terwijl je nog handelt met spelers op 6-7 punten om je eigen competitieve positie te behouden."
        }
      },
      {
        question: {
          en: "How does the 'hex diversity multiplier' affect settlement value?",
          es: "¿Cómo afecta el 'multiplicador de diversidad de hexágonos' al valor del asentamiento?",
          de: "Wie beeinflusst der 'Hex-Diversitäts-Multiplikator' den Siedlungswert?",
          nl: "Hoe beïnvloedt de 'hex diversiteit vermenigvuldiger' nederzettingswaarde?"
        },
        options: [
          { en: "Touching 3 different resources worth +15-20% value vs touching duplicates", es: "Tocar 3 recursos diferentes vale +15-20% de valor vs tocar duplicados", de: "3 verschiedene Ressourcen berühren wert +15-20% Wert vs Duplikate berühren", nl: "3 verschillende bronnen raken waard +15-20% waarde vs duplicaten raken" },
          { en: "Diversity has no impact on value", es: "La diversidad no tiene impacto en el valor", de: "Diversität hat keinen Einfluss auf den Wert", nl: "Diversiteit heeft geen impact op waarde" },
          { en: "Duplicates are always better than diversity", es: "Los duplicados son siempre mejores que la diversidad", de: "Duplikate sind immer besser als Diversität", nl: "Duplicaten zijn altijd beter dan diversiteit" },
          { en: "Only single resource types matter", es: "Solo importan los tipos de recursos únicos", de: "Nur einzelne Ressourcentypen zählen", nl: "Alleen enkele brontypes tellen" }
        ],
        correct: 0,
        explanation: {
          en: "A settlement on brick-ore-wheat (3 different resources) provides trading flexibility and building options worth approximately 15-20% more than a settlement on brick-brick-wheat (duplicate resource). Diversity reduces trading dependency and enables multiple building strategies simultaneously.",
          es: "Un asentamiento en ladrillo-mineral-trigo (3 recursos diferentes) proporciona flexibilidad comercial y opciones de construcción que valen aproximadamente 15-20% más que un asentamiento en ladrillo-ladrillo-trigo (recurso duplicado). La diversidad reduce la dependencia comercial y permite múltiples estrategias de construcción simultáneamente.",
          de: "Eine Siedlung auf Ziegel-Erz-Weizen (3 verschiedene Ressourcen) bietet Handelsflexibilität und Bauoptionen im Wert von etwa 15-20% mehr als eine Siedlung auf Ziegel-Ziegel-Weizen (doppelte Ressource). Diversität reduziert Handelsabhängigkeit und ermöglicht mehrere Baustrategien gleichzeitig.",
          nl: "Een nederzetting op baksteen-erts-tarwe (3 verschillende bronnen) biedt handelsflexibiliteit en bouwopties ter waarde van ongeveer 15-20% meer dan een nederzetting op baksteen-baksteen-tarwe (dubbele bron). Diversiteit vermindert handelsafhankelijkheid en maakt meerdere bouwstrategieën tegelijk mogelijk."
        }
      },
      {
        question: {
          en: "What defines 'perfect information trading' at expert level?",
          es: "¿Qué define el 'comercio de información perfecta' a nivel experto?",
          de: "Was definiert 'perfekte Informations-Handel' auf Expertenniveau?",
          nl: "Wat definieert 'perfecte informatie handel' op expert niveau?"
        },
        options: [
          { en: "Tracking all visible cards to know exact opponent hands before proposing trades", es: "Rastrear todas las cartas visibles para conocer las manos exactas de los oponentes antes de proponer intercambios", de: "Alle sichtbaren Karten verfolgen um exakte Gegnerhände vor Handelsvorschlägen zu kennen", nl: "Alle zichtbare kaarten volgen om exacte tegenstander handen te kennen voor handelsvoorstellen" },
          { en: "Making random trade offers", es: "Hacer ofertas comerciales aleatorias", de: "Zufällige Handelsangebote machen", nl: "Willekeurige handelsaanbiedingen doen" },
          { en: "Never trading under any circumstances", es: "Nunca comerciar bajo ninguna circunstancia", de: "Niemals unter keinen Umständen handeln", nl: "Nooit handelen onder enige omstandigheid" },
          { en: "Only accepting 1:1 trades blindly", es: "Solo aceptar intercambios 1:1 a ciegas", de: "Nur blind 1:1-Geschäfte akzeptieren", nl: "Alleen blindelings 1:1 handel accepteren" }
        ],
        correct: 0,
        explanation: {
          en: "Expert players maintain mental models of opponent hands by tracking: production from rolls, resources spent on builds, cards traded, and cards lost to 7-rolls. With this information, they can propose trades knowing opponents have specific resources, maximizing favorable trade rates.",
          es: "Los jugadores expertos mantienen modelos mentales de las manos de los oponentes rastreando: producción de tiradas, recursos gastados en construcciones, cartas intercambiadas y cartas perdidas en tiradas de 7. Con esta información, pueden proponer intercambios sabiendo que los oponentes tienen recursos específicos, maximizando tasas comerciales favorables.",
          de: "Experten pflegen mentale Modelle von Gegnerhänden durch Verfolgung: Produktion aus Würfen, Ressourcen ausgegeben für Bauten, getauschte Karten und Karten verloren bei 7-Würfen. Mit dieser Information können sie Geschäfte vorschlagen im Wissen, dass Gegner spezifische Ressourcen haben, wodurch günstige Handelsraten maximiert werden.",
          nl: "Expertspelers onderhouden mentale modellen van tegenstander handen door te volgen: productie van worpen, bronnen uitgegeven aan bouwwerken, geruild kaarten en kaarten verloren bij 7-worpen. Met deze informatie kunnen ze handel voorstellen wetende dat tegenstanders specifieke bronnen hebben, waardoor gunstige handelsratio's gemaximaliseerd worden."
        }
      },
      {
        question: {
          en: "What is the strategic value of the 'Bishop' progress card in Cities & Knights?",
          es: "¿Cuál es el valor estratégico de la carta de progreso 'Obispo' en Ciudades & Caballeros?",
          de: "Was ist der strategische Wert der 'Bischof'-Fortschrittskarte in Städte & Ritter?",
          nl: "Wat is de strategische waarde van de 'Bisschop' vooruitgangskaart in Steden & Ridders?"
        },
        options: [
          { en: "Move robber and take 2 resource cards from any single player", es: "Mover al ladrón y tomar 2 cartas de recursos de cualquier jugador individual", de: "Räuber bewegen und 2 Ressourcenkarten von einem einzelnen Spieler nehmen", nl: "Rover verplaatsen en 2 bronkaarten van een enkele speler nemen" },
          { en: "Gain 5 victory points immediately", es: "Ganar 5 puntos de victoria inmediatamente", de: "Sofort 5 Siegpunkte gewinnen", nl: "Direct 5 overwinningspunten winnen" },
          { en: "Build a free city", es: "Construir una ciudad gratis", de: "Eine kostenlose Stadt bauen", nl: "Gratis stad bouwen" },
          { en: "Steal all opponent commodities", es: "Robar todas las mercancías del oponente", de: "Alle Gegner-Rohstoffe stehlen", nl: "Alle tegenstander grondstoffen stelen" }
        ],
        correct: 0,
        explanation: {
          en: "The Bishop (Politics progress card) is extremely powerful: you move the robber to any hex and take 2 resource cards from one player on that hex (instead of the normal 1). This is roughly equivalent to a super-charged knight card, worth 2-3 resources in value when timed correctly.",
          es: "El Obispo (carta de progreso Política) es extremadamente poderoso: mueves al ladrón a cualquier hexágono y tomas 2 cartas de recursos de un jugador en ese hexágono (en lugar del 1 normal). Esto es aproximadamente equivalente a una carta de caballero supercargada, con un valor de 2-3 recursos cuando se cronometra correctamente.",
          de: "Der Bischof (Politik-Fortschrittskarte) ist extrem mächtig: Sie bewegen den Räuber auf ein beliebiges Hex und nehmen 2 Ressourcenkarten von einem Spieler auf diesem Hex (statt der normalen 1). Dies entspricht ungefähr einer supergeladenen Ritterkarte, im Wert von 2-3 Ressourcen bei korrektem Timing.",
          nl: "De Bisschop (Politiek vooruitgangskaart) is extreem krachtig: je verplaatst de rover naar elke hex en neemt 2 bronkaarten van één speler op die hex (in plaats van de normale 1). Dit is ongeveer gelijk aan een super-opgeladen ridderkaart, 2-3 bronnen waard in waarde wanneer correct getimed."
        }
      },
      {
        question: {
          en: "How should you evaluate 'tempo loss' from robber blocking?",
          es: "¿Cómo debes evaluar la 'pérdida de tempo' por bloqueo del ladrón?",
          de: "Wie sollte man 'Tempoverlust' durch Räuberblockierung bewerten?",
          nl: "Hoe moet je 'tempo verlies' van rover blokkering evalueren?"
        },
        options: [
          { en: "Each turn blocked on high-pip hex = 1-2 turns delayed on your building timeline", es: "Cada turno bloqueado en hexágono de alto pip = 1-2 turnos retrasados en tu línea de tiempo de construcción", de: "Jeder blockierte Zug auf High-Pip-Hex = 1-2 Züge verzögert auf Ihrer Bauzeitlinie", nl: "Elke beurt geblokkeerd op hoge-pip hex = 1-2 beurten vertraagd op je bouwtijdlijn" },
          { en: "Robber blocking has zero impact", es: "El bloqueo del ladrón tiene cero impacto", de: "Räuberblockierung hat null Auswirkung", nl: "Rover blokkering heeft nul impact" },
          { en: "Every blocked turn adds 10 points", es: "Cada turno bloqueado agrega 10 puntos", de: "Jeder blockierte Zug fügt 10 Punkte hinzu", nl: "Elke geblokkeerde beurt voegt 10 punten toe" },
          { en: "Tempo loss only applies to first player", es: "La pérdida de tempo solo se aplica al primer jugador", de: "Tempoverlust gilt nur für ersten Spieler", nl: "Tempo verlies geldt alleen voor eerste speler" }
        ],
        correct: 0,
        explanation: {
          en: "When the robber blocks your 6 or 8 hex (especially one attached to a city producing 2 resources), you lose approximately 0.28-0.56 resources per turn. This compounds: 3 turns blocked ≈ 1-2 resources lost ≈ 1-2 turns delayed on building your next structure. Tempo loss multiplies over time.",
          es: "Cuando el ladrón bloquea tu hexágono 6 u 8 (especialmente uno adjunto a una ciudad que produce 2 recursos), pierdes aproximadamente 0.28-0.56 recursos por turno. Esto se agrava: 3 turnos bloqueados ≈ 1-2 recursos perdidos ≈ 1-2 turnos retrasados en construir tu próxima estructura. La pérdida de tempo se multiplica con el tiempo.",
          de: "Wenn der Räuber Ihr 6- oder 8-Hex blockiert (besonders eines an einer Stadt, die 2 Ressourcen produziert), verlieren Sie etwa 0,28-0,56 Ressourcen pro Zug. Dies kumuliert: 3 blockierte Züge ≈ 1-2 verlorene Ressourcen ≈ 1-2 Züge verzögert beim Bau Ihrer nächsten Struktur. Tempoverlust multipliziert sich über die Zeit.",
          nl: "Wanneer de rover je 6 of 8 hex blokkeert (vooral een aan een stad die 2 bronnen produceert), verlies je ongeveer 0,28-0,56 bronnen per beurt. Dit verergert: 3 beurten geblokkeerd ≈ 1-2 bronnen verloren ≈ 1-2 beurten vertraagd bij het bouwen van je volgende structuur. Tempo verlies vermenigvuldigt over tijd."
        }
      },
      {
        question: {
          en: "What is the 'mutual assured destruction' defensive pact strategy?",
          es: "¿Qué es la estrategia de pacto defensivo de 'destrucción mutua asegurada'?",
          de: "Was ist die 'gegenseitig gesicherte Zerstörungs'-Verteidigungspakt-Strategie?",
          nl: "Wat is de 'wederzijds verzekerde vernietiging' defensief pact strategie?"
        },
        options: [
          { en: "Informal alliance where 2nd/3rd place agree not to trade with or robber the leader", es: "Alianza informal donde 2º/3º lugar acuerdan no comerciar ni ladronear al líder", de: "Informelle Allianz wo 2./3. Platz vereinbaren nicht mit Anführer zu handeln oder zu räubern", nl: "Informele alliantie waar 2e/3e plaats afspreken niet te handelen met of rover op leider" },
          { en: "Everyone attacks everyone equally", es: "Todos atacan a todos por igual", de: "Alle greifen alle gleichmäßig an", nl: "Iedereen valt iedereen gelijk aan" },
          { en: "Always help the leader win", es: "Siempre ayudar al líder a ganar", de: "Immer dem Anführer zum Sieg helfen", nl: "Altijd de leider helpen winnen" },
          { en: "No player makes any moves", es: "Ningún jugador hace ningún movimiento", de: "Kein Spieler macht einen Zug", nl: "Geen speler maakt een zet" }
        ],
        correct: 0,
        explanation: {
          en: "When one player leads significantly (9+ points), the 2nd and 3rd place players sometimes form implicit cooperation: refusing leader's trades, targeting leader with robber, and trading between themselves. This 'ganging up' strategy prevents leader from closing out the game and keeps competition alive.",
          es: "Cuando un jugador lidera significativamente (9+ puntos), los jugadores de 2º y 3º lugar a veces forman cooperación implícita: rechazando intercambios del líder, apuntando al líder con el ladrón y comerciando entre ellos. Esta estrategia de 'agruparse' evita que el líder cierre el juego y mantiene viva la competencia.",
          de: "Wenn ein Spieler deutlich führt (9+ Punkte), bilden die 2.- und 3.-Platz-Spieler manchmal implizite Zusammenarbeit: Ablehnung der Geschäfte des Anführers, Anvisierung des Anführers mit Räuber und Handel untereinander. Diese 'Zusammenrottungs'-Strategie verhindert, dass der Anführer das Spiel abschließt und hält den Wettbewerb am Leben.",
          nl: "Wanneer één speler significant leidt (9+ punten), vormen de 2e en 3e plaats spelers soms impliciete samenwerking: weigering van leider's handel, leider targeten met rover, en onderling handelen. Deze 'samenscholings' strategie voorkomt dat leider het spel afsluit en houdt competitie levend."
        }
      },
      {
        question: {
          en: "What is the 'probability cliff' at 7 cards?",
          es: "¿Qué es el 'acantilado de probabilidad' en 7 cartas?",
          de: "Was ist die 'Wahrscheinlichkeitsklippe' bei 7 Karten?",
          nl: "Wat is de 'waarschijnlijkheidsklif' bij 7 kaarten?"
        },
        options: [
          { en: "16.67% chance per turn of losing half your cards creates high-risk situation", es: "16.67% de probabilidad por turno de perder la mitad de tus cartas crea situación de alto riesgo", de: "16,67% Chance pro Zug die Hälfte Ihrer Karten zu verlieren schafft Hochrisiko-Situation", nl: "16.67% kans per beurt om de helft van je kaarten te verliezen creëert hoog-risico situatie" },
          { en: "Having 7 cards guarantees victory", es: "Tener 7 cartas garantiza victoria", de: "7 Karten zu haben garantiert Sieg", nl: "7 kaarten hebben garandeert overwinning" },
          { en: "7 cards provides complete safety", es: "7 cartas proporciona seguridad completa", de: "7 Karten bieten vollständige Sicherheit", nl: "7 kaarten biedt complete veiligheid" },
          { en: "No risk exists at 7 cards", es: "No existe riesgo en 7 cartas", de: "Kein Risiko existiert bei 7 Karten", nl: "Geen risico bestaat bij 7 kaarten" }
        ],
        correct: 0,
        explanation: {
          en: "At exactly 7 cards, each roll has 1/6 probability of being a 7, forcing you to discard half (rounded down = 3 cards). With 4 players rolling, probability of at least one 7 before your next turn approaches ~50%. This makes hoarding 7+ cards extremely risky without immediate building plans.",
          es: "En exactamente 7 cartas, cada tirada tiene 1/6 de probabilidad de ser un 7, obligándote a descartar la mitad (redondeado hacia abajo = 3 cartas). Con 4 jugadores tirando, la probabilidad de al menos un 7 antes de tu próximo turno se acerca a ~50%. Esto hace que acumular 7+ cartas sea extremadamente arriesgado sin planes de construcción inmediatos.",
          de: "Bei genau 7 Karten hat jeder Wurf 1/6 Wahrscheinlichkeit eine 7 zu sein, was Sie zwingt die Hälfte abzuwerfen (abgerundet = 3 Karten). Mit 4 Spielern die würfeln, nähert sich die Wahrscheinlichkeit von mindestens einer 7 vor Ihrem nächsten Zug ~50%. Dies macht das Horten von 7+ Karten extrem riskant ohne sofortige Baupläne.",
          nl: "Bij precies 7 kaarten heeft elke worp 1/6 waarschijnlijkheid een 7 te zijn, wat je dwingt de helft weg te gooien (naar beneden afgerond = 3 kaarten). Met 4 spelers die gooien, nadert de waarschijnlijkheid van ten minste één 7 voor je volgende beurt ~50%. Dit maakt het oppotten van 7+ kaarten extreem riskant zonder onmiddellijke bouwplannen."
        }
      },
      {
        question: {
          en: "What defines mastery-level 'settlement efficiency ratio'?",
          es: "¿Qué define la 'relación de eficiencia de asentamiento' de nivel maestría?",
          de: "Was definiert das 'Siedlungseffizienz-Verhältnis' auf Meisterniveau?",
          nl: "Wat definieert meesterschap-niveau 'nederzettings efficiëntie ratio'?"
        },
        options: [
          { en: "Average 11+ pips per settlement with 4+ different resources across all settlements", es: "Promedio de 11+ pips por asentamiento con 4+ recursos diferentes en todos los asentamientos", de: "Durchschnitt 11+ Pips pro Siedlung mit 4+ verschiedenen Ressourcen über alle Siedlungen", nl: "Gemiddeld 11+ pips per nederzetting met 4+ verschillende bronnen over alle nederzettingen" },
          { en: "Any settlement placement is equally good", es: "Cualquier colocación de asentamiento es igualmente buena", de: "Jede Siedlungsplatzierung ist gleich gut", nl: "Elke nederzettingsplaatsing is even goed" },
          { en: "Only build on 2 and 12 hexes", es: "Solo construir en hexágonos 2 y 12", de: "Nur auf 2- und 12-Hexen bauen", nl: "Alleen bouwen op 2 en 12 hexen" },
          { en: "Build settlements randomly without calculation", es: "Construir asentamientos aleatoriamente sin cálculo", de: "Siedlungen zufällig ohne Berechnung bauen", nl: "Nederzettingen willekeurig bouwen zonder berekening" }
        ],
        correct: 0,
        explanation: {
          en: "Expert settlement placement averages 11+ pips per settlement (e.g., three settlements of 6-8-5, 6-9-4, 5-9-3 = 14+13+11 pips) while ensuring access to all 5 resource types. This maximizes production while maintaining strategic flexibility for any victory path.",
          es: "La colocación de asentamientos experta promedia 11+ pips por asentamiento (p. ej., tres asentamientos de 6-8-5, 6-9-4, 5-9-3 = 14+13+11 pips) mientras asegura acceso a los 5 tipos de recursos. Esto maximiza la producción mientras mantiene flexibilidad estratégica para cualquier camino de victoria.",
          de: "Experten-Siedlungsplatzierung mittelt 11+ Pips pro Siedlung (z.B. drei Siedlungen von 6-8-5, 6-9-4, 5-9-3 = 14+13+11 Pips) während Zugang zu allen 5 Ressourcentypen sichergestellt wird. Dies maximiert Produktion bei Beibehaltung strategischer Flexibilität für jeden Siegpfad.",
          nl: "Expert nederzettingsplaatsing gemiddeld 11+ pips per nederzetting (bijv. drie nederzettingen van 6-8-5, 6-9-4, 5-9-3 = 14+13+11 pips) terwijl toegang tot alle 5 brontypes gewaarborgd wordt. Dit maximaliseert productie terwijl strategische flexibiliteit voor elk overwinningspad behouden blijft."
        }
      },
      {
        question: {
          en: "How does the 'cascading advantage' phenomenon work?",
          es: "¿Cómo funciona el fenómeno de 'ventaja en cascada'?",
          de: "Wie funktioniert das 'kaskadierende Vorteils'-Phänomen?",
          nl: "Hoe werkt het 'cascaderende voordeel' fenomeen?"
        },
        options: [
          { en: "Early lead → more builds → better positions → faster growth → exponential advantage", es: "Ventaja temprana → más construcciones → mejores posiciones → crecimiento más rápido → ventaja exponencial", de: "Früher Vorsprung → mehr Bauten → bessere Positionen → schnelleres Wachstum → exponentieller Vorteil", nl: "Vroege voorsprong → meer bouwwerken → betere posities → snellere groei → exponentieel voordeel" },
          { en: "All players maintain perfect balance always", es: "Todos los jugadores mantienen equilibrio perfecto siempre", de: "Alle Spieler halten perfekte Balance immer", nl: "Alle spelers behouden perfecte balans altijd" },
          { en: "Late game players always catch up automatically", es: "Los jugadores de juego tardío siempre se ponen al día automáticamente", de: "Späte Spieler holen immer automatisch auf", nl: "Late game spelers halen altijd automatisch in" },
          { en: "No advantage compounds over time", es: "Ninguna ventaja se acumula con el tiempo", de: "Kein Vorteil kumuliert über die Zeit", nl: "Geen voordeel verergert over tijd" }
        ],
        correct: 0,
        explanation: {
          en: "Catan exhibits positive feedback loops: early settlements → more resources → faster city upgrades → doubled production → more frequent builds → territorial control → victory. This is why early tempo and settlement placement are critical—small advantages compound exponentially throughout the game.",
          es: "Catan exhibe bucles de retroalimentación positiva: asentamientos tempranos → más recursos → mejoras de ciudad más rápidas → producción duplicada → construcciones más frecuentes → control territorial → victoria. Por eso el tempo temprano y la colocación de asentamientos son críticos: las pequeñas ventajas se acumulan exponencialmente durante el juego.",
          de: "Catan zeigt positive Rückkopplungsschleifen: frühe Siedlungen → mehr Ressourcen → schnellere Stadt-Upgrades → verdoppelte Produktion → häufigere Bauten → territoriale Kontrolle → Sieg. Deshalb sind frühes Tempo und Siedlungsplatzierung kritisch—kleine Vorteile kumulieren exponentiell während des Spiels.",
          nl: "Catan vertoont positieve feedback loops: vroege nederzettingen → meer bronnen → snellere stadsupgrades → verdubbelde productie → frequentere bouwwerken → territoriale controle → overwinning. Daarom zijn vroeg tempo en nederzettingsplaatsing kritiek—kleine voordelen verergeren exponentieel gedurende het spel."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level6;
  } else if (typeof window !== 'undefined') {
    window.level6 = level6;
  }
})();
