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
