// Quiz Template - Level 4: Bord spelletjes - Catan
(function() {
  const level4 = {
    name: {
      en: "Catan - Advanced",
      es: "Catan - Avanzado",
      de: "Catan - Erfahren",
      nl: "Catan - Gevorderd"
    },
    questions: [
      {
        question: {
          en: "What is the 'seafarers' expansion's main new mechanic?",
          es: "¿Cuál es la nueva mecánica principal de la expansión 'Navegantes'?",
          de: "Was ist die neue Hauptmechanik der 'Seefahrer'-Erweiterung?",
          nl: "Wat is de belangrijkste nieuwe mechaniek van de 'Zeevaarders'-uitbreiding?"
        },
        options: [
          { en: "Building ships to explore islands", es: "Construir barcos para explorar islas", de: "Schiffe bauen um Inseln zu erkunden", nl: "Schepen bouwen om eilanden te verkennen" },
          { en: "Trading with foreign ports", es: "Comerciar con puertos extranjeros", de: "Handel mit ausländischen Häfen", nl: "Handelen met buitenlandse havens" },
          { en: "Building underwater settlements", es: "Construir asentamientos submarinos", de: "Unterwassersiedlungen bauen", nl: "Onderwaternederzettingen bouwen" },
          { en: "Flying over the board", es: "Volar sobre el tablero", de: "Über das Brett fliegen", nl: "Over het bord vliegen" }
        ],
        correct: 0,
        explanation: {
          en: "The Seafarers expansion introduces ships that can be built along sea routes to reach new islands and resource hexes. Ships cost 1 wood and 1 sheep, similar to roads but for water.",
          es: "La expansión Navegantes introduce barcos que se pueden construir a lo largo de rutas marítimas para llegar a nuevas islas y hexágonos de recursos. Los barcos cuestan 1 madera y 1 oveja, similar a los caminos pero para el agua.",
          de: "Die Seefahrer-Erweiterung führt Schiffe ein, die entlang von Seewegen gebaut werden können, um neue Inseln und Ressourcenfelder zu erreichen. Schiffe kosten 1 Holz und 1 Wolle, ähnlich wie Straßen, aber für Wasser.",
          nl: "De Zeevaarders-uitbreiding introduceert schepen die kunnen worden gebouwd langs zeeroutes om nieuwe eilanden en hulpbronhexen te bereiken. Schepen kosten 1 hout en 1 schaap, vergelijkbaar met wegen maar voor water."
        }
      },
      {
        question: {
          en: "In 5-6 player Catan, how many total victory points are needed to win?",
          es: "En Catan de 5-6 jugadores, ¿cuántos puntos de victoria totales se necesitan para ganar?",
          de: "Wie viele Siegpunkte werden beim 5-6-Spieler-Catan benötigt, um zu gewinnen?",
          nl: "In 5-6 spelers Catan, hoeveel totale overwinningspunten zijn nodig om te winnen?"
        },
        options: [
          { en: "10", es: "10", de: "10", nl: "10" },
          { en: "12", es: "12", de: "12", nl: "12" },
          { en: "13", es: "13", de: "13", nl: "13" },
          { en: "15", es: "15", de: "15", nl: "15" }
        ],
        correct: 2,
        explanation: {
          en: "In the 5-6 player extension, the victory point requirement increases to 13 points instead of 10. This accounts for the larger board and more players competing for victory.",
          es: "En la extensión de 5-6 jugadores, el requisito de puntos de victoria aumenta a 13 puntos en lugar de 10. Esto tiene en cuenta el tablero más grande y más jugadores compitiendo por la victoria.",
          de: "In der 5-6-Spieler-Erweiterung erhöht sich die Siegpunktanforderung auf 13 Punkte anstelle von 10. Dies berücksichtigt das größere Brett und mehr Spieler, die um den Sieg kämpfen.",
          nl: "In de 5-6 spelers uitbreiding verhoogt de overwinningspuntenvereiste naar 13 punten in plaats van 10. Dit houdt rekening met het grotere bord en meer spelers die strijden om de overwinning."
        }
      },
      {
        question: {
          en: "What is 'blocking' strategy in Catan?",
          es: "¿Qué es la estrategia de 'bloqueo' en Catan?",
          de: "Was ist die 'Blockier'-Strategie in Catan?",
          nl: "Wat is de 'blokkeer'-strategie in Catan?"
        },
        options: [
          { en: "Building settlements to limit opponent expansion", es: "Construir asentamientos para limitar la expansión del oponente", de: "Siedlungen bauen um die Expansion des Gegners zu begrenzen", nl: "Nederzettingen bouwen om uitbreiding van tegenstanders te beperken" },
          { en: "Refusing all trades", es: "Rechazar todos los intercambios", de: "Alle Tauschgeschäfte ablehnen", nl: "Alle ruilen weigeren" },
          { en: "Using only knight cards", es: "Usar solo cartas de caballero", de: "Nur Ritterkarten verwenden", nl: "Alleen ridderskaarten gebruiken" },
          { en: "Building only roads", es: "Construir solo caminos", de: "Nur Straßen bauen", nl: "Alleen wegen bouwen" }
        ],
        correct: 0,
        explanation: {
          en: "Blocking is a defensive strategy where you build settlements or roads to limit your opponents' expansion options. This can prevent them from accessing valuable resources or reaching the longest road.",
          es: "El bloqueo es una estrategia defensiva donde construyes asentamientos o caminos para limitar las opciones de expansión de tus oponentes. Esto puede evitar que accedan a recursos valiosos o alcancen el camino más largo.",
          de: "Blockieren ist eine defensive Strategie, bei der du Siedlungen oder Straßen baust, um die Expansionsmöglichkeiten deiner Gegner zu begrenzen. Dies kann verhindern, dass sie Zugang zu wertvollen Ressourcen erhalten oder die längste Straße erreichen.",
          nl: "Blokkeren is een defensieve strategie waarbij je nederzettingen of wegen bouwt om de uitbreidingsopties van je tegenstanders te beperken. Dit kan voorkomen dat ze toegang krijgen tot waardevolle hulpbronnen of de langste weg bereiken."
        }
      },
      {
        question: {
          en: "What happens if you roll a 7 with exactly 8 resource cards?",
          es: "¿Qué sucede si sacas un 7 con exactamente 8 cartas de recursos?",
          de: "Was passiert, wenn du eine 7 würfelst mit genau 8 Ressourcenkarten?",
          nl: "Wat gebeurt er als je een 7 gooit met precies 8 hulpbronkaarten?"
        },
        options: [
          { en: "You must discard 4 cards", es: "Debes descartar 4 cartas", de: "Du musst 4 Karten abwerfen", nl: "Je moet 4 kaarten weggooien" },
          { en: "You must discard half (4 cards)", es: "Debes descartar la mitad (4 cartas)", de: "Du musst die Hälfte abwerfen (4 Karten)", nl: "Je moet de helft weggooien (4 kaarten)" },
          { en: "Nothing happens to you", es: "No te pasa nada", de: "Dir passiert nichts", nl: "Er gebeurt niets met jou" },
          { en: "You must discard all 8 cards", es: "Debes descartar todas las 8 cartas", de: "Du musst alle 8 Karten abwerfen", nl: "Je moet alle 8 kaarten weggooien" }
        ],
        correct: 1,
        explanation: {
          en: "When a 7 is rolled, players with more than 7 cards must discard half their cards (rounded down). With 8 cards, you discard 4. With 7 or fewer cards, you don't discard any.",
          es: "Cuando se tira un 7, los jugadores con más de 7 cartas deben descartar la mitad de sus cartas (redondeado hacia abajo). Con 8 cartas, descartas 4. Con 7 o menos cartas, no descartas ninguna.",
          de: "Wenn eine 7 gewürfelt wird, müssen Spieler mit mehr als 7 Karten die Hälfte ihrer Karten abwerfen (abgerundet). Mit 8 Karten wirfst du 4 ab. Mit 7 oder weniger Karten wirfst du keine ab.",
          nl: "Wanneer een 7 wordt gegooid, moeten spelers met meer dan 7 kaarten de helft van hun kaarten weggooien (naar beneden afgerond). Met 8 kaarten gooi je 4 weg. Met 7 of minder kaarten gooi je geen enkele weg."
        }
      },
      {
        question: {
          en: "What is the optimal early game strategy?",
          es: "¿Cuál es la estrategia óptima al principio del juego?",
          de: "Was ist die optimale Frühspielstrategie?",
          nl: "Wat is de optimale vroege spelstrategie?"
        },
        options: [
          { en: "Diversify resources and secure high-probability numbers", es: "Diversificar recursos y asegurar números de alta probabilidad", de: "Ressourcen diversifizieren und Zahlen mit hoher Wahrscheinlichkeit sichern", nl: "Diversifieer hulpbronnen en zeker hoge waarschijnlijkheidsnummers" },
          { en: "Focus on one resource type only", es: "Enfocarse solo en un tipo de recurso", de: "Sich nur auf einen Ressourcentyp konzentrieren", nl: "Focus op slechts één hulpbrontype" },
          { en: "Build cities immediately", es: "Construir ciudades inmediatamente", de: "Sofort Städte bauen", nl: "Onmiddellijk steden bouwen" },
          { en: "Buy development cards exclusively", es: "Comprar cartas de desarrollo exclusivamente", de: "Ausschließlich Entwicklungskarten kaufen", nl: "Uitsluitend ontwikkelingskaarten kopen" }
        ],
        correct: 0,
        explanation: {
          en: "The best early strategy is to place settlements on intersections that provide diverse resources (all 5 types if possible) with high-probability numbers (6, 8, 5, 9). This ensures consistent resource production.",
          es: "La mejor estrategia temprana es colocar asentamientos en intersecciones que proporcionen recursos diversos (los 5 tipos si es posible) con números de alta probabilidad (6, 8, 5, 9). Esto asegura una producción constante de recursos.",
          de: "Die beste Frühstrategie ist es, Siedlungen an Kreuzungen zu platzieren, die vielfältige Ressourcen (alle 5 Typen wenn möglich) mit hohen Wahrscheinlichkeitszahlen (6, 8, 5, 9) bieten. Dies gewährleistet eine konsistente Ressourcenproduktion.",
          nl: "De beste vroege strategie is nederzettingen plaatsen op kruispunten die diverse hulpbronnen bieden (alle 5 types indien mogelijk) met hoge waarschijnlijkheidsnummers (6, 8, 5, 9). Dit zorgt voor consistente hulpbronnenproductie."
        }
      },
      {
        question: {
          en: "How does the 'Cities & Knights' expansion change gameplay?",
          es: "¿Cómo cambia la expansión 'Ciudades y Caballeros' el juego?",
          de: "Wie verändert die 'Städte & Ritter'-Erweiterung das Gameplay?",
          nl: "Hoe verandert de 'Steden & Ridders'-uitbreiding het spel?"
        },
        options: [
          { en: "Adds commodities, knights, and barbarian invasions", es: "Añade mercancías, caballeros e invasiones bárbaras", de: "Fügt Waren, Ritter und Barbareneinfälle hinzu", nl: "Voegt goederen, ridders en barbaarse invasies toe" },
          { en: "Removes the robber permanently", es: "Elimina al ladrón permanentemente", de: "Entfernt den Räuber dauerhaft", nl: "Verwijdert de rover permanent" },
          { en: "Doubles all resources produced", es: "Duplica todos los recursos producidos", de: "Verdoppelt alle produzierten Ressourcen", nl: "Verdubbelt alle geproduceerde hulpbronnen" },
          { en: "Adds flying settlements", es: "Añade asentamientos voladores", de: "Fügt fliegende Siedlungen hinzu", nl: "Voegt vliegende nederzettingen toe" }
        ],
        correct: 0,
        explanation: {
          en: "Cities & Knights is a complex expansion that adds commodities (cloth, coin, paper), active knights that can be upgraded, city improvements, and periodic barbarian attacks that players must defend against cooperatively.",
          es: "Ciudades y Caballeros es una expansión compleja que añade mercancías (tela, moneda, papel), caballeros activos que se pueden mejorar, mejoras de ciudad y ataques bárbaros periódicos contra los que los jugadores deben defenderse cooperativamente.",
          de: "Städte & Ritter ist eine komplexe Erweiterung, die Waren (Tuch, Münze, Papier), aktive Ritter die aufgerüstet werden können, Stadtverbesserungen und periodische Barbarenüberfälle hinzufügt, gegen die Spieler kooperativ verteidigen müssen.",
          nl: "Steden & Ridders is een complexe uitbreiding die goederen (stof, munt, papier), actieve ridders die kunnen worden geüpgraded, stadsverbeteringen en periodieke barbaarse aanvallen toevoegt waartegen spelers gezamenlijk moeten verdedigen."
        }
      },
      {
        question: {
          en: "What is the 'pip count' or 'probability value' of a settlement?",
          es: "¿Qué es el 'conteo de puntos' o 'valor de probabilidad' de un asentamiento?",
          de: "Was ist die 'Punktzahl' oder der 'Wahrscheinlichkeitswert' einer Siedlung?",
          nl: "Wat is de 'puntentelling' of 'waarschijnlijkheidswaarde' van een nederzetting?"
        },
        options: [
          { en: "Sum of the probability dots on adjacent number tokens", es: "Suma de los puntos de probabilidad en las fichas numéricas adyacentes", de: "Summe der Wahrscheinlichkeitspunkte auf angrenzenden Zahlenplättchen", nl: "Som van de waarschijnlijkheidsstippen op aangrenzende getalstokens" },
          { en: "Number of resources it produces", es: "Número de recursos que produce", de: "Anzahl der produzierten Ressourcen", nl: "Aantal hulpbronnen dat het produceert" },
          { en: "Distance from the center of the board", es: "Distancia del centro del tablero", de: "Entfernung von der Mitte des Bretts", nl: "Afstand vanaf het midden van het bord" },
          { en: "Total victory points earned", es: "Puntos de victoria totales ganados", de: "Insgesamt verdiente Siegpunkte", nl: "Totaal verdiende overwinningspunten" }
        ],
        correct: 0,
        explanation: {
          en: "The pip count is the sum of probability dots on the three adjacent number tokens. Higher pip counts (10-11) indicate better settlement locations with more frequent resource production. A settlement on 6-8-5 would have a pip count of 5+5+4=14.",
          es: "El conteo de puntos es la suma de los puntos de probabilidad en las tres fichas numéricas adyacentes. Los conteos de puntos más altos (10-11) indican mejores ubicaciones de asentamientos con producción de recursos más frecuente. Un asentamiento en 6-8-5 tendría un conteo de puntos de 5+5+4=14.",
          de: "Die Punktzahl ist die Summe der Wahrscheinlichkeitspunkte auf den drei angrenzenden Zahlenplättchen. Höhere Punktzahlen (10-11) zeigen bessere Siedlungsstandorte mit häufigerer Ressourcenproduktion an. Eine Siedlung auf 6-8-5 hätte eine Punktzahl von 5+5+4=14.",
          nl: "De puntentelling is de som van waarschijnlijkheidsstippen op de drie aangrenzende getalstokens. Hogere puntentellingen (10-11) duiden op betere nederzettingslocaties met frequentere hulpbronnenproductie. Een nederzetting op 6-8-5 zou een puntentelling hebben van 5+5+4=14."
        }
      },
      {
        question: {
          en: "When is the best time to upgrade to cities?",
          es: "¿Cuándo es el mejor momento para mejorar a ciudades?",
          de: "Wann ist der beste Zeitpunkt zum Upgrade auf Städte?",
          nl: "Wanneer is het beste moment om te upgraden naar steden?"
        },
        options: [
          { en: "After establishing 3-4 settlements with diverse resources", es: "Después de establecer 3-4 asentamientos con recursos diversos", de: "Nach dem Aufbau von 3-4 Siedlungen mit vielfältigen Ressourcen", nl: "Na het vestigen van 3-4 nederzettingen met diverse hulpbronnen" },
          { en: "Immediately at game start", es: "Inmediatamente al inicio del juego", de: "Sofort zu Spielbeginn", nl: "Onmiddellijk bij spelstart" },
          { en: "Only in the final turn", es: "Solo en el turno final", de: "Nur in der letzten Runde", nl: "Alleen in de laatste beurt" },
          { en: "Never upgrade to cities", es: "Nunca mejorar a ciudades", de: "Niemals auf Städte upgraden", nl: "Nooit upgraden naar steden" }
        ],
        correct: 0,
        explanation: {
          en: "The optimal strategy is to build 3-4 settlements first to secure resource diversity and production, then upgrade high-production settlements to cities. Cities double resource output, making them essential for the mid-to-late game.",
          es: "La estrategia óptima es construir primero 3-4 asentamientos para asegurar la diversidad y producción de recursos, luego mejorar los asentamientos de alta producción a ciudades. Las ciudades duplican la producción de recursos, haciéndolas esenciales para el juego medio-tardío.",
          de: "Die optimale Strategie ist es, zuerst 3-4 Siedlungen zu bauen, um Ressourcenvielfalt und -produktion zu sichern, dann hochproduktive Siedlungen zu Städten aufzuwerten. Städte verdoppeln den Ressourcenausstoß und sind für das Mittel- bis Spätspiel unerlässlich.",
          nl: "De optimale strategie is eerst 3-4 nederzettingen bouwen om hulpbrondiversiteit en -productie te garanderen, dan hoge productie nederzettingen upgraden naar steden. Steden verdubbelen de hulpbronnenoutput, waardoor ze essentieel zijn voor het midden-tot-late spel."
        }
      },
      {
        question: {
          en: "What is a 'sheep port' settlement worth strategically?",
          es: "¿Qué vale estratégicamente un asentamiento en 'puerto de ovejas'?",
          de: "Was ist eine 'Schafhafen'-Siedlung strategisch wert?",
          nl: "Wat is een 'schaaphaven'-nederzetting strategisch waard?"
        },
        options: [
          { en: "Allows 2:1 sheep trades, useful for development cards", es: "Permite intercambios 2:1 de ovejas, útil para cartas de desarrollo", de: "Ermöglicht 2:1-Schafhandel, nützlich für Entwicklungskarten", nl: "Maakt 2:1 schaapruilen mogelijk, nuttig voor ontwikkelingskaarten" },
          { en: "Produces extra sheep automatically", es: "Produce ovejas extra automáticamente", de: "Produziert automatisch zusätzliche Schafe", nl: "Produceert automatisch extra schapen" },
          { en: "Protects against robber on sheep hexes", es: "Protege contra el ladrón en hexágonos de ovejas", de: "Schützt vor Räuber auf Schaffeldern", nl: "Beschermt tegen rover op schaaphexen" },
          { en: "Worth 2 victory points instead of 1", es: "Vale 2 puntos de victoria en lugar de 1", de: "Wert 2 Siegpunkte statt 1", nl: "Waard 2 overwinningspunten in plaats van 1" }
        ],
        correct: 0,
        explanation: {
          en: "A 2:1 sheep port is valuable because sheep (along with ore and wheat) are needed for development cards. This allows you to convert excess sheep efficiently into needed resources or buy more development cards to compete for Largest Army.",
          es: "Un puerto de ovejas 2:1 es valioso porque las ovejas (junto con el mineral y el trigo) se necesitan para las cartas de desarrollo. Esto te permite convertir el exceso de ovejas eficientemente en recursos necesarios o comprar más cartas de desarrollo para competir por el Ejército Más Grande.",
          de: "Ein 2:1-Schafhafen ist wertvoll, weil Schafe (zusammen mit Erz und Getreide) für Entwicklungskarten benötigt werden. Dies ermöglicht es dir, überschüssige Schafe effizient in benötigte Ressourcen umzuwandeln oder mehr Entwicklungskarten zu kaufen, um um das größte Ritterheer zu konkurrieren.",
          nl: "Een 2:1 schaaphaven is waardevol omdat schapen (samen met erts en tarwe) nodig zijn voor ontwikkelingskaarten. Dit stelt je in staat om overtollige schapen efficiënt om te zetten in benodigde hulpbronnen of meer ontwikkelingskaarten te kopen om te strijden voor het Grootste Leger."
        }
      },
      {
        question: {
          en: "What is the 'robber dancing' strategy?",
          es: "¿Qué es la estrategia de 'baile del ladrón'?",
          de: "Was ist die 'Räubertanz'-Strategie?",
          nl: "Wat is de 'roverdans'-strategie?"
        },
        options: [
          { en: "Moving the robber to hex that blocks the leader while minimizing self-harm", es: "Mover al ladrón a un hexágono que bloquea al líder mientras se minimiza el daño propio", de: "Den Räuber auf ein Feld bewegen das den Anführer blockiert während Selbstschaden minimiert wird", nl: "De rover verplaatsen naar hex die de leider blokkeert terwijl zelfschade wordt geminimaliseerd" },
          { en: "Never moving the robber at all", es: "Nunca mover al ladrón en absoluto", de: "Den Räuber überhaupt nie bewegen", nl: "De rover helemaal nooit verplaatsen" },
          { en: "Moving the robber every turn", es: "Mover al ladrón cada turno", de: "Den Räuber jede Runde bewegen", nl: "De rover elke beurt verplaatsen" },
          { en: "Placing the robber only on desert", es: "Colocar al ladrón solo en el desierto", de: "Den Räuber nur auf die Wüste platzieren", nl: "De rover alleen op woestijn plaatsen" }
        ],
        correct: 0,
        explanation: {
          en: "Robber dancing means strategically placing the robber to slow down the leading player while avoiding hexes where you have settlements. This prevents the leader from gaining more advantage while not hurting your own production.",
          es: "El baile del ladrón significa colocar estratégicamente al ladrón para ralentizar al jugador líder mientras se evitan hexágonos donde tienes asentamientos. Esto evita que el líder gane más ventaja mientras no perjudica tu propia producción.",
          de: "Räubertanz bedeutet, den Räuber strategisch zu platzieren, um den führenden Spieler zu verlangsamen, während Felder vermieden werden, auf denen du Siedlungen hast. Dies verhindert, dass der Anführer mehr Vorteile erlangt, ohne deine eigene Produktion zu schädigen.",
          nl: "Roverdans betekent de rover strategisch plaatsen om de leidende speler te vertragen terwijl hexen worden vermeden waar je nederzettingen hebt. Dit voorkomt dat de leider meer voordeel krijgt terwijl je eigen productie niet wordt geschaad."
        }
      },
      {
        question: {
          en: "How many total development cards exist in standard Catan?",
          es: "¿Cuántas cartas de desarrollo totales existen en Catan estándar?",
          de: "Wie viele Entwicklungskarten gibt es insgesamt im Standard-Catan?",
          nl: "Hoeveel totale ontwikkelingskaarten bestaan er in standaard Catan?"
        },
        options: [
          { en: "20", es: "20", de: "20", nl: "20" },
          { en: "25", es: "25", de: "25", nl: "25" },
          { en: "30", es: "30", de: "30", nl: "30" },
          { en: "35", es: "35", de: "35", nl: "35" }
        ],
        correct: 1,
        explanation: {
          en: "There are exactly 25 development cards: 14 Knights, 5 Victory Points, 2 Road Building, 2 Year of Plenty, and 2 Monopoly. Once all are purchased, no more can be bought that game.",
          es: "Hay exactamente 25 cartas de desarrollo: 14 Caballeros, 5 Puntos de Victoria, 2 Construcción de Caminos, 2 Año de Abundancia y 2 Monopolio. Una vez que todas se compran, no se pueden comprar más en ese juego.",
          de: "Es gibt genau 25 Entwicklungskarten: 14 Ritter, 5 Siegpunkte, 2 Straßenbau, 2 Erfindung und 2 Monopol. Sobald alle gekauft sind, können in diesem Spiel keine weiteren gekauft werden.",
          nl: "Er zijn precies 25 ontwikkelingskaarten: 14 Ridders, 5 Overwinningspunten, 2 Wegenbouw, 2 Jaar van Overvloed en 2 Monopolie. Zodra alle zijn gekocht, kunnen er geen meer worden gekocht in dat spel."
        }
      },
      {
        question: {
          en: "What is the 'wheat monopoly' strategy?",
          es: "¿Qué es la estrategia del 'monopolio del trigo'?",
          de: "Was ist die 'Getreidemonopol'-Strategie?",
          nl: "Wat is de 'tarwemonopolie'-strategie?"
        },
        options: [
          { en: "Controlling most wheat hexes to dominate settlement/city building", es: "Controlar la mayoría de hexágonos de trigo para dominar la construcción de asentamientos/ciudades", de: "Die meisten Getreidefelder kontrollieren um Siedlungs-/Stadtbau zu dominieren", nl: "De meeste tarwehexen beheersen om nederzetting/stadbouw te domineren" },
          { en: "Trading only wheat and nothing else", es: "Comerciar solo trigo y nada más", de: "Nur Getreide handeln und nichts anderes", nl: "Alleen tarwe ruilen en niets anders" },
          { en: "Using the Monopoly card to take all wheat", es: "Usar la carta Monopolio para tomar todo el trigo", de: "Die Monopolkarte verwenden um alles Getreide zu nehmen", nl: "De Monopoliekaart gebruiken om alle tarwe te nemen" },
          { en: "Building only on wheat hexes", es: "Construir solo en hexágonos de trigo", de: "Nur auf Getreidefeldern bauen", nl: "Alleen op tarwehexen bouwen" }
        ],
        correct: 0,
        explanation: {
          en: "Wheat monopoly involves controlling multiple wheat-producing hexes. Since wheat is needed for both settlements (1) and cities (2), controlling wheat production forces opponents to trade with you at unfavorable rates.",
          es: "El monopolio del trigo implica controlar múltiples hexágonos productores de trigo. Dado que el trigo se necesita tanto para asentamientos (1) como para ciudades (2), controlar la producción de trigo obliga a los oponentes a comerciar contigo a tasas desfavorables.",
          de: "Getreidemonopol bedeutet, mehrere getreideproduzierende Felder zu kontrollieren. Da Getreide sowohl für Siedlungen (1) als auch für Städte (2) benötigt wird, zwingt die Kontrolle der Getreideproduktion Gegner, mit dir zu ungünstigen Konditionen zu handeln.",
          nl: "Tarwemonopolie houdt in dat je meerdere tarweproducerende hexen beheerst. Aangezien tarwe nodig is voor zowel nederzettingen (1) als steden (2), dwingt het beheersen van tarweproductie tegenstanders om met je te ruilen tegen ongunstige tarieven."
        }
      },
      {
        question: {
          en: "What is the ideal number of roads for Longest Road?",
          es: "¿Cuál es el número ideal de caminos para el Camino Más Largo?",
          de: "Was ist die ideale Anzahl von Straßen für die längste Straße?",
          nl: "Wat is het ideale aantal wegen voor de Langste Weg?"
        },
        options: [
          { en: "Minimum 5, but build more to defend the title", es: "Mínimo 5, pero construye más para defender el título", de: "Mindestens 5, aber baue mehr um den Titel zu verteidigen", nl: "Minimaal 5, maar bouw meer om de titel te verdedigen" },
          { en: "Exactly 10 roads always", es: "Exactamente 10 caminos siempre", de: "Genau 10 Straßen immer", nl: "Precies 10 wegen altijd" },
          { en: "3 roads is enough", es: "3 caminos es suficiente", de: "3 Straßen reichen", nl: "3 wegen is genoeg" },
          { en: "Roads don't matter for victory", es: "Los caminos no importan para la victoria", de: "Straßen sind für den Sieg unwichtig", nl: "Wegen zijn niet belangrijk voor overwinning" }
        ],
        correct: 0,
        explanation: {
          en: "You need at least 5 connected roads to claim Longest Road (worth 2 victory points). However, opponents can steal it with a longer road, so building 7-8 roads makes it harder to lose this advantage.",
          es: "Necesitas al menos 5 caminos conectados para reclamar el Camino Más Largo (vale 2 puntos de victoria). Sin embargo, los oponentes pueden robarlo con un camino más largo, así que construir 7-8 caminos hace más difícil perder esta ventaja.",
          de: "Du benötigst mindestens 5 verbundene Straßen, um die längste Straße zu beanspruchen (wert 2 Siegpunkte). Gegner können sie jedoch mit einer längeren Straße stehlen, daher macht der Bau von 7-8 Straßen es schwieriger, diesen Vorteil zu verlieren.",
          nl: "Je hebt minstens 5 verbonden wegen nodig om de Langste Weg te claimen (waard 2 overwinningspunten). Tegenstanders kunnen het echter stelen met een langere weg, dus het bouwen van 7-8 wegen maakt het moeilijker om dit voordeel te verliezen."
        }
      },
      {
        question: {
          en: "What is the 'ore-wheat' strategy and why is it effective?",
          es: "¿Qué es la estrategia 'mineral-trigo' y por qué es efectiva?",
          de: "Was ist die 'Erz-Getreide'-Strategie und warum ist sie effektiv?",
          nl: "Wat is de 'erts-tarwe'-strategie en waarom is het effectief?"
        },
        options: [
          { en: "Focus on ore/wheat to build cities and development cards quickly", es: "Enfocarse en mineral/trigo para construir ciudades y cartas de desarrollo rápidamente", de: "Auf Erz/Getreide fokussieren um schnell Städte und Entwicklungskarten zu bauen", nl: "Focus op erts/tarwe om snel steden en ontwikkelingskaarten te bouwen" },
          { en: "Trade only ore for wheat", es: "Comerciar solo mineral por trigo", de: "Nur Erz gegen Getreide tauschen", nl: "Alleen erts voor tarwe ruilen" },
          { en: "Avoid ore and wheat completely", es: "Evitar mineral y trigo completamente", de: "Erz und Getreide vollständig vermeiden", nl: "Erts en tarwe volledig vermijden" },
          { en: "Build only on ore and wheat hexes", es: "Construir solo en hexágonos de mineral y trigo", de: "Nur auf Erz- und Getreidefeldern bauen", nl: "Alleen op erts- en tarwehexen bouwen" }
        ],
        correct: 0,
        explanation: {
          en: "The ore-wheat strategy prioritizes these two resources because they're needed for both cities (3 ore, 2 wheat) and development cards (1 each). This enables rapid point gain through city upgrades and potentially winning Largest Army.",
          es: "La estrategia mineral-trigo prioriza estos dos recursos porque se necesitan tanto para ciudades (3 mineral, 2 trigo) como para cartas de desarrollo (1 cada uno). Esto permite una ganancia rápida de puntos a través de mejoras de ciudad y potencialmente ganar el Ejército Más Grande.",
          de: "Die Erz-Getreide-Strategie priorisiert diese beiden Ressourcen, weil sie sowohl für Städte (3 Erz, 2 Getreide) als auch für Entwicklungskarten (je 1) benötigt werden. Dies ermöglicht schnellen Punktgewinn durch Stadt-Upgrades und möglicherweise das größte Ritterheer zu gewinnen.",
          nl: "De erts-tarwe-strategie geeft prioriteit aan deze twee hulpbronnen omdat ze nodig zijn voor zowel steden (3 erts, 2 tarwe) als ontwikkelingskaarten (elk 1). Dit maakt snelle puntwinst mogelijk door stad-upgrades en mogelijk het Grootste Leger winnen."
        }
      },
      {
        question: {
          en: "How do you counter a player who has Largest Army?",
          es: "¿Cómo contrarrestas a un jugador que tiene el Ejército Más Grande?",
          de: "Wie bekämpfst du einen Spieler der das größte Ritterheer hat?",
          nl: "Hoe counter je een speler die het Grootste Leger heeft?"
        },
        options: [
          { en: "Buy more knights to steal it, or block their expansion with settlements", es: "Comprar más caballeros para robarlo, o bloquear su expansión con asentamientos", de: "Mehr Ritter kaufen um es zu stehlen, oder ihre Expansion mit Siedlungen blockieren", nl: "Meer ridders kopen om het te stelen, of hun uitbreiding blokkeren met nederzettingen" },
          { en: "Trade with them exclusively", es: "Comerciar con ellos exclusivamente", de: "Ausschließlich mit ihnen handeln", nl: "Exclusief met hen handelen" },
          { en: "Give up and restart the game", es: "Rendirse y reiniciar el juego", de: "Aufgeben und das Spiel neu starten", nl: "Opgeven en het spel opnieuw starten" },
          { en: "Steal their knight cards directly", es: "Robar sus cartas de caballero directamente", de: "Ihre Ritterkarten direkt stehlen", nl: "Hun ridderskaarten direct stelen" }
        ],
        correct: 0,
        explanation: {
          en: "To counter Largest Army (minimum 3 knights, worth 2 victory points), you can either buy development cards to get more knights and steal it (need 4+ to take it from someone with 3), or prevent their other scoring by blocking expansion routes.",
          es: "Para contrarrestar el Ejército Más Grande (mínimo 3 caballeros, vale 2 puntos de victoria), puedes comprar cartas de desarrollo para obtener más caballeros y robarlo (necesitas 4+ para quitárselo a alguien con 3), o prevenir su otra puntuación bloqueando rutas de expansión.",
          de: "Um das größte Ritterheer zu bekämpfen (mindestens 3 Ritter, wert 2 Siegpunkte), kannst du entweder Entwicklungskarten kaufen um mehr Ritter zu bekommen und es zu stehlen (benötigst 4+, um es von jemandem mit 3 zu nehmen), oder ihre anderen Punkte verhindern, indem du Expansionsrouten blockierst.",
          nl: "Om het Grootste Leger te counteren (minimaal 3 ridders, waard 2 overwinningspunten), kun je ofwel ontwikkelingskaarten kopen om meer ridders te krijgen en het te stelen (heb 4+ nodig om het van iemand met 3 te nemen), of hun andere scores voorkomen door uitbreidingsroutes te blokkeren."
        }
      },
      {
        question: {
          en: "What is the statistical best initial settlement placement?",
          es: "¿Cuál es estadísticamente la mejor colocación inicial de asentamiento?",
          de: "Was ist statistisch die beste anfängliche Siedlungsplatzierung?",
          nl: "Wat is statistisch de beste initiële nederzettingsplaatsing?"
        },
        options: [
          { en: "Intersection touching 6, 8, and a third resource with high pip count", es: "Intersección que toca 6, 8 y un tercer recurso con alto conteo de puntos", de: "Kreuzung die 6, 8 und eine dritte Ressource mit hoher Punktzahl berührt", nl: "Kruispunt dat 6, 8 en een derde hulpbron met hoge puntentelling raakt" },
          { en: "Any corner of the board", es: "Cualquier esquina del tablero", de: "Jede Ecke des Bretts", nl: "Elke hoek van het bord" },
          { en: "Only on port locations", es: "Solo en ubicaciones de puerto", de: "Nur an Hafenstandorten", nl: "Alleen op havenlocaties" },
          { en: "Next to the desert", es: "Junto al desierto", de: "Neben der Wüste", nl: "Naast de woestijn" }
        ],
        correct: 0,
        explanation: {
          en: "Statistically, the best first settlement touches 6 and 8 (the two highest probability numbers at 5 pips each) plus a third productive hex. This gives you a pip count of 10-14, ensuring frequent resource production from turn one.",
          es: "Estadísticamente, el mejor primer asentamiento toca 6 y 8 (los dos números de mayor probabilidad con 5 puntos cada uno) más un tercer hexágono productivo. Esto te da un conteo de puntos de 10-14, asegurando una producción frecuente de recursos desde el turno uno.",
          de: "Statistisch gesehen berührt die beste erste Siedlung 6 und 8 (die zwei höchsten Wahrscheinlichkeitszahlen mit je 5 Punkten) plus ein drittes produktives Feld. Dies gibt dir eine Punktzahl von 10-14, die häufige Ressourcenproduktion ab Runde eins gewährleistet.",
          nl: "Statistisch gezien raakt de beste eerste nederzetting 6 en 8 (de twee hoogste waarschijnlijkheidsnummers met elk 5 stippen) plus een derde productieve hex. Dit geeft je een puntentelling van 10-14, wat frequente hulpbronnenproductie vanaf beurt één garandeert."
        }
      },
      {
        question: {
          en: "When should you prioritize buying development cards over building?",
          es: "¿Cuándo debes priorizar comprar cartas de desarrollo sobre construir?",
          de: "Wann solltest du den Kauf von Entwicklungskarten dem Bauen vorziehen?",
          nl: "Wanneer moet je prioriteit geven aan het kopen van ontwikkelingskaarten boven bouwen?"
        },
        options: [
          { en: "When you have limited expansion options and need Largest Army or hidden victory points", es: "Cuando tienes opciones de expansión limitadas y necesitas el Ejército Más Grande o puntos de victoria ocultos", de: "Wenn du begrenzte Expansionsmöglichkeiten hast und das größte Ritterheer oder versteckte Siegpunkte benötigst", nl: "Wanneer je beperkte uitbreidingsopties hebt en het Grootste Leger of verborgen overwinningspunten nodig hebt" },
          { en: "Always buy development cards first", es: "Siempre comprar cartas de desarrollo primero", de: "Immer zuerst Entwicklungskarten kaufen", nl: "Altijd eerst ontwikkelingskaarten kopen" },
          { en: "Never buy development cards", es: "Nunca comprar cartas de desarrollo", de: "Niemals Entwicklungskarten kaufen", nl: "Nooit ontwikkelingskaarten kopen" },
          { en: "Only on the final turn", es: "Solo en el turno final", de: "Nur in der letzten Runde", nl: "Alleen in de laatste beurt" }
        ],
        correct: 0,
        explanation: {
          en: "Buy development cards when you're blocked from good building spots, competing for Largest Army, or close to winning (7-9 points) and need hidden victory point cards to surprise opponents. Each dev card costs ore+sheep+wheat.",
          es: "Compra cartas de desarrollo cuando estás bloqueado de buenos lugares de construcción, compitiendo por el Ejército Más Grande, o cerca de ganar (7-9 puntos) y necesitas cartas de puntos de victoria ocultos para sorprender a los oponentes. Cada carta de desarrollo cuesta mineral+oveja+trigo.",
          de: "Kaufe Entwicklungskarten, wenn du von guten Bauplätzen blockiert bist, um das größte Ritterheer konkurrierst oder kurz vor dem Sieg stehst (7-9 Punkte) und versteckte Siegpunktkarten brauchst, um Gegner zu überraschen. Jede Entwicklungskarte kostet Erz+Schaf+Getreide.",
          nl: "Koop ontwikkelingskaarten wanneer je wordt geblokkeerd van goede bouwplekken, strijdt voor het Grootste Leger, of dicht bij winnen bent (7-9 punten) en verborgen overwinningspuntkaarten nodig hebt om tegenstanders te verrassen. Elke ontwikkelingskaart kost erts+schaap+tarwe."
        }
      },
      {
        question: {
          en: "What is the 'port rush' strategy?",
          es: "¿Qué es la estrategia de 'prisa del puerto'?",
          de: "Was ist die 'Hafen-Rush'-Strategie?",
          nl: "Wat is de 'haven-rush'-strategie?"
        },
        options: [
          { en: "Securing 2-3 ports early for trading dominance", es: "Asegurar 2-3 puertos temprano para dominio comercial", de: "2-3 Häfen früh sichern für Handelsdominanz", nl: "2-3 havens vroeg veiligstellen voor handelsdominantie" },
          { en: "Running to the nearest port", es: "Correr al puerto más cercano", de: "Zum nächsten Hafen laufen", nl: "Naar de dichtstbijzijnde haven rennen" },
          { en: "Building only cities on ports", es: "Construir solo ciudades en puertos", de: "Nur Städte an Häfen bauen", nl: "Alleen steden op havens bouwen" },
          { en: "Trading with ports only", es: "Comerciar solo con puertos", de: "Nur mit Häfen handeln", nl: "Alleen met havens handelen" }
        ],
        correct: 0,
        explanation: {
          en: "Port rush means prioritizing 2-3 port settlements in your first 3-4 settlements. This sacrifices initial resource diversity for long-term trading flexibility, allowing you to convert any abundant resource efficiently. Works best with complementary 2:1 ports.",
          es: "La prisa del puerto significa priorizar 2-3 asentamientos portuarios en tus primeros 3-4 asentamientos. Esto sacrifica la diversidad inicial de recursos por flexibilidad comercial a largo plazo, permitiéndote convertir cualquier recurso abundante eficientemente. Funciona mejor con puertos 2:1 complementarios.",
          de: "Hafen-Rush bedeutet, 2-3 Hafensiedlungen in deinen ersten 3-4 Siedlungen zu priorisieren. Dies opfert anfängliche Ressourcenvielfalt für langfristige Handelsflexibilität und ermöglicht es dir, jede reichlich vorhandene Ressource effizient umzuwandeln. Funktioniert am besten mit komplementären 2:1-Häfen.",
          nl: "Haven-rush betekent prioriteit geven aan 2-3 havennederzettingen in je eerste 3-4 nederzettingen. Dit offert initiële hulpbrondiversiteit op voor langetermijnhandelsflexibiliteit, waardoor je elke overvloedige hulpbron efficiënt kunt omzetten. Werkt het beste met complementaire 2:1-havens."
        }
      },
      {
        question: {
          en: "How many resource cards total are in the game?",
          es: "¿Cuántas cartas de recursos totales hay en el juego?",
          de: "Wie viele Ressourcenkarten gibt es insgesamt im Spiel?",
          nl: "Hoeveel hulpbronkaarten zijn er in totaal in het spel?"
        },
        options: [
          { en: "95 (19 of each type)", es: "95 (19 de cada tipo)", de: "95 (19 von jedem Typ)", nl: "95 (19 van elk type)" },
          { en: "100 (20 of each type)", es: "100 (20 de cada tipo)", de: "100 (20 von jedem Typ)", nl: "100 (20 van elk type)" },
          { en: "75 (15 of each type)", es: "75 (15 de cada tipo)", de: "75 (15 von jedem Typ)", nl: "75 (15 van elk type)" },
          { en: "90 (18 of each type)", es: "90 (18 de cada tipo)", de: "90 (18 von jedem Typ)", nl: "90 (18 van elk type)" }
        ],
        correct: 0,
        explanation: {
          en: "There are exactly 95 resource cards: 19 of each type (wood, brick, sheep, wheat, ore). The bank can run out of specific resources, preventing production even when the number is rolled. This is called 'bank limitation.'",
          es: "Hay exactamente 95 cartas de recursos: 19 de cada tipo (madera, ladrillo, oveja, trigo, mineral). El banco puede quedarse sin recursos específicos, impidiendo la producción incluso cuando se tira el número. Esto se llama 'limitación del banco'.",
          de: "Es gibt genau 95 Ressourcenkarten: 19 von jedem Typ (Holz, Lehm, Wolle, Getreide, Erz). Die Bank kann bestimmte Ressourcen ausgehen, wodurch die Produktion verhindert wird, selbst wenn die Zahl gewürfelt wird. Dies wird 'Banklimitierung' genannt.",
          nl: "Er zijn precies 95 hulpbronkaarten: 19 van elk type (hout, baksteen, schaap, tarwe, erts). De bank kan opraken met specifieke hulpbronnen, waardoor productie wordt voorkomen, zelfs wanneer het nummer wordt gegooid. Dit wordt 'bankbeperking' genoemd."
        }
      },
      {
        question: {
          en: "What is a 'kingmaker' situation and how do you avoid it?",
          es: "¿Qué es una situación de 'hacedor de reyes' y cómo la evitas?",
          de: "Was ist eine 'Königsmacher'-Situation und wie vermeidest du sie?",
          nl: "Wat is een 'koningmaker'-situatie en hoe vermijd je het?"
        },
        options: [
          { en: "When a losing player's trades determine the winner; avoid by playing to maximize your own score", es: "Cuando los intercambios de un jugador perdedor determinan al ganador; evitar jugando para maximizar tu propia puntuación", de: "Wenn die Tauschgeschäfte eines verlierenden Spielers den Gewinner bestimmen; vermeiden indem du spielst um deine eigene Punktzahl zu maximieren", nl: "Wanneer de ruilen van een verliezende speler de winnaar bepaalt; vermijd door te spelen om je eigen score te maximaliseren" },
          { en: "When you become king of the board", es: "Cuando te conviertes en rey del tablero", de: "Wenn du König des Bretts wirst", nl: "Wanneer je koning van het bord wordt" },
          { en: "When you must choose a winner", es: "Cuando debes elegir un ganador", de: "Wenn du einen Gewinner wählen musst", nl: "Wanneer je een winnaar moet kiezen" },
          { en: "A special victory condition", es: "Una condición especial de victoria", de: "Eine spezielle Siegbedingung", nl: "Een speciale overwinningsvoorwaarde" }
        ],
        correct: 0,
        explanation: {
          en: "A kingmaker is a player who can't win but whose trading decisions determine which other player wins. Good sportsmanship means always playing to maximize your own score, trading fairly, and not playing favorites even when you can't win.",
          es: "Un hacedor de reyes es un jugador que no puede ganar pero cuyas decisiones comerciales determinan qué otro jugador gana. El buen espíritu deportivo significa jugar siempre para maximizar tu propia puntuación, comerciar justamente y no jugar favoritos incluso cuando no puedes ganar.",
          de: "Ein Königsmacher ist ein Spieler, der nicht gewinnen kann, dessen Handelsentscheidungen aber bestimmen, welcher andere Spieler gewinnt. Gute Sportlichkeit bedeutet, immer zu spielen, um deine eigene Punktzahl zu maximieren, fair zu handeln und keine Favoriten zu spielen, selbst wenn du nicht gewinnen kannst.",
          nl: "Een koningmaker is een speler die niet kan winnen maar wiens handelsbeslissingen bepalen welke andere speler wint. Goed spelersschap betekent altijd spelen om je eigen score te maximaliseren, eerlijk ruilen en geen favorieten spelen, zelfs wanneer je niet kunt winnen."
        }
      },
      {
        question: {
          en: "What is the probability of rolling exactly a 7?",
          es: "¿Cuál es la probabilidad de sacar exactamente un 7?",
          de: "Was ist die Wahrscheinlichkeit, genau eine 7 zu würfeln?",
          nl: "Wat is de waarschijnlijkheid om precies een 7 te gooien?"
        },
        options: [
          { en: "16.67% (6 out of 36 combinations)", es: "16.67% (6 de 36 combinaciones)", de: "16.67% (6 von 36 Kombinationen)", nl: "16.67% (6 van 36 combinaties)" },
          { en: "10% (1 in 10 rolls)", es: "10% (1 de cada 10 tiradas)", de: "10% (1 von 10 Würfen)", nl: "10% (1 op 10 worpen)" },
          { en: "20% (1 in 5 rolls)", es: "20% (1 de cada 5 tiradas)", de: "20% (1 von 5 Würfen)", nl: "20% (1 op 5 worpen)" },
          { en: "50% (half the time)", es: "50% (la mitad del tiempo)", de: "50% (die Hälfte der Zeit)", nl: "50% (de helft van de tijd)" }
        ],
        correct: 0,
        explanation: {
          en: "There are 6 ways to roll a 7 with two dice (1+6, 2+5, 3+4, 4+3, 5+2, 6+1) out of 36 total combinations, making it the most probable roll at 6/36 or 16.67%. This is why the robber activates relatively frequently.",
          es: "Hay 6 formas de sacar un 7 con dos dados (1+6, 2+5, 3+4, 4+3, 5+2, 6+1) de 36 combinaciones totales, convirtiéndolo en la tirada más probable con 6/36 o 16.67%. Por eso el ladrón se activa relativamente con frecuencia.",
          de: "Es gibt 6 Möglichkeiten, mit zwei Würfeln eine 7 zu würfeln (1+6, 2+5, 3+4, 4+3, 5+2, 6+1) von insgesamt 36 Kombinationen, was es zum wahrscheinlichsten Wurf mit 6/36 oder 16.67% macht. Deshalb wird der Räuber relativ häufig aktiviert.",
          nl: "Er zijn 6 manieren om een 7 te gooien met twee dobbelstenen (1+6, 2+5, 3+4, 4+3, 5+2, 6+1) van 36 totale combinaties, waardoor het de meest waarschijnlijke worp is met 6/36 of 16.67%. Daarom wordt de rover relatief vaak geactiveerd."
        }
      },
      {
        question: {
          en: "What is 'resource denial' strategy?",
          es: "¿Qué es la estrategia de 'negación de recursos'?",
          de: "Was ist die 'Ressourcenverweigerungs'-Strategie?",
          nl: "Wat is de 'hulpbronweigerings'-strategie?"
        },
        options: [
          { en: "Using the robber to block high-production hexes of opponents", es: "Usar al ladrón para bloquear hexágonos de alta producción de oponentes", de: "Den Räuber verwenden um hochproduktive Felder der Gegner zu blockieren", nl: "De rover gebruiken om hoge productie hexen van tegenstanders te blokkeren" },
          { en: "Refusing all trade offers", es: "Rechazar todas las ofertas comerciales", de: "Alle Handelsangebote ablehnen", nl: "Alle handelsaanbiedingen weigeren" },
          { en: "Not collecting resources", es: "No recoger recursos", de: "Keine Ressourcen sammeln", nl: "Geen hulpbronnen verzamelen" },
          { en: "Giving resources to opponents", es: "Dar recursos a los oponentes", de: "Gegnern Ressourcen geben", nl: "Hulpbronnen aan tegenstanders geven" }
        ],
        correct: 0,
        explanation: {
          en: "Resource denial involves strategically placing the robber on high-value hexes (especially 6s and 8s) that opponents rely on, particularly targeting the leading player. This slows their production while you catch up or maintain your lead.",
          es: "La negación de recursos implica colocar estratégicamente al ladrón en hexágonos de alto valor (especialmente 6 y 8) de los que dependen los oponentes, especialmente dirigiéndose al jugador líder. Esto ralentiza su producción mientras te pones al día o mantienes tu ventaja.",
          de: "Ressourcenverweigerung beinhaltet das strategische Platzieren des Räubers auf hochwertigen Feldern (besonders 6en und 8en), auf die Gegner angewiesen sind, insbesondere den führenden Spieler. Dies verlangsamt deren Produktion, während du aufholst oder deinen Vorsprung behältst.",
          nl: "Hulpbronweigering houdt in dat je de rover strategisch plaatst op hoogwaardige hexen (vooral 6'en en 8'en) waar tegenstanders op vertrouwen, vooral gericht op de leidende speler. Dit vertraagt hun productie terwijl jij inhaalt of je voorsprong behoudt."
        }
      },
      {
        question: {
          en: "How many roads can each player build maximum?",
          es: "¿Cuántos caminos puede construir cada jugador como máximo?",
          de: "Wie viele Straßen kann jeder Spieler maximal bauen?",
          nl: "Hoeveel wegen kan elke speler maximaal bouwen?"
        },
        options: [
          { en: "15", es: "15", de: "15", nl: "15" },
          { en: "20", es: "20", de: "20", nl: "20" },
          { en: "12", es: "12", de: "12", nl: "12" },
          { en: "Unlimited", es: "Ilimitado", de: "Unbegrenzt", nl: "Onbeperkt" }
        ],
        correct: 0,
        explanation: {
          en: "Each player has exactly 15 road pieces in their supply. Once you've placed all 15, you cannot build more roads unless you remove one (which is not allowed by the rules). This creates interesting strategic decisions about road placement.",
          es: "Cada jugador tiene exactamente 15 piezas de camino en su suministro. Una vez que hayas colocado las 15, no puedes construir más caminos a menos que quites uno (lo cual no está permitido por las reglas). Esto crea decisiones estratégicas interesantes sobre la colocación de caminos.",
          de: "Jeder Spieler hat genau 15 Straßenstücke in seinem Vorrat. Sobald du alle 15 platziert hast, kannst du keine weiteren Straßen bauen, es sei denn, du entfernst eine (was von den Regeln nicht erlaubt ist). Dies schafft interessante strategische Entscheidungen über die Straßenplatzierung.",
          nl: "Elke speler heeft precies 15 wegstukken in zijn voorraad. Zodra je alle 15 hebt geplaatst, kun je geen wegen meer bouwen tenzij je er een verwijdert (wat niet is toegestaan door de regels). Dit creëert interessante strategische beslissingen over wegplaatsing."
        }
      },
      {
        question: {
          en: "What is the 'desert adjacent' settlement strategy?",
          es: "¿Qué es la estrategia de asentamiento 'adyacente al desierto'?",
          de: "Was ist die 'wüstennachbarliche' Siedlungsstrategie?",
          nl: "Wat is de 'woestijn-aangrenzende' nederzettingsstrategie?"
        },
        options: [
          { en: "Avoiding desert edges since they produce nothing, unless other hexes compensate", es: "Evitar los bordes del desierto ya que no producen nada, a menos que otros hexágonos compensen", de: "Wüstenränder vermeiden da sie nichts produzieren, es sei denn andere Felder kompensieren", nl: "Woestijnranden vermijden omdat ze niets produceren, tenzij andere hexen compenseren" },
          { en: "Always settle next to desert", es: "Siempre asentarse junto al desierto", de: "Immer neben der Wüste siedeln", nl: "Altijd naast de woestijn vestigen" },
          { en: "Desert produces extra resources", es: "El desierto produce recursos extra", de: "Wüste produziert zusätzliche Ressourcen", nl: "Woestijn produceert extra hulpbronnen" },
          { en: "Desert hexes count as two hexes", es: "Los hexágonos de desierto cuentan como dos hexágonos", de: "Wüstenfelder zählen als zwei Felder", nl: "Woestijnhexen tellen als twee hexen" }
        ],
        correct: 0,
        explanation: {
          en: "Desert-adjacent settlements are generally weaker since one of your three hexes produces nothing. However, if the other two hexes are excellent (like 6 and 8), the settlement can still be valuable. Desert placement also starts with the robber, adding slight early-game advantage.",
          es: "Los asentamientos adyacentes al desierto son generalmente más débiles ya que uno de tus tres hexágonos no produce nada. Sin embargo, si los otros dos hexágonos son excelentes (como 6 y 8), el asentamiento aún puede ser valioso. La colocación del desierto también comienza con el ladrón, agregando una ligera ventaja al inicio del juego.",
          de: "Wüstennachbarliche Siedlungen sind im Allgemeinen schwächer, da eines deiner drei Felder nichts produziert. Wenn jedoch die anderen beiden Felder ausgezeichnet sind (wie 6 und 8), kann die Siedlung dennoch wertvoll sein. Die Wüstenplatzierung beginnt auch mit dem Räuber, was einen leichten Frühspiel-Vorteil hinzufügt.",
          nl: "Woestijn-aangrenzende nederzettingen zijn over het algemeen zwakker omdat een van je drie hexen niets produceert. Als de andere twee hexen echter uitstekend zijn (zoals 6 en 8), kan de nederzetting nog steeds waardevol zijn. Woestijnplaatsing begint ook met de rover, wat een licht vroegspelvoordeel toevoegt."
        }
      },
      {
        question: {
          en: "What is the significance of the '3:1 harbor' vs '2:1 harbor'?",
          es: "¿Cuál es la importancia del 'puerto 3:1' vs 'puerto 2:1'?",
          de: "Was ist die Bedeutung des '3:1-Hafens' vs '2:1-Hafen'?",
          nl: "Wat is de betekenis van de '3:1-haven' vs '2:1-haven'?"
        },
        options: [
          { en: "3:1 trades any resource, 2:1 trades specific resource; 2:1 is more valuable if you produce that resource", es: "3:1 intercambia cualquier recurso, 2:1 intercambia recurso específico; 2:1 es más valioso si produces ese recurso", de: "3:1 tauscht jede Ressource, 2:1 tauscht spezifische Ressource; 2:1 ist wertvoller wenn du diese Ressource produzierst", nl: "3:1 ruilt elke hulpbron, 2:1 ruilt specifieke hulpbron; 2:1 is waardevoller als je die hulpbron produceert" },
          { en: "3:1 is always better than 2:1", es: "3:1 es siempre mejor que 2:1", de: "3:1 ist immer besser als 2:1", nl: "3:1 is altijd beter dan 2:1" },
          { en: "They function identically", es: "Funcionan idénticamente", de: "Sie funktionieren identisch", nl: "Ze functioneren identiek" },
          { en: "2:1 requires two different resources", es: "2:1 requiere dos recursos diferentes", de: "2:1 erfordert zwei verschiedene Ressourcen", nl: "2:1 vereist twee verschillende hulpbronnen" }
        ],
        correct: 0,
        explanation: {
          en: "A 3:1 harbor lets you trade any 3 identical resources for 1 of any type (better than bank's 4:1). A 2:1 harbor lets you trade 2 of a specific resource for 1 of any type. If you consistently produce that specific resource, the 2:1 is much more valuable.",
          es: "Un puerto 3:1 te permite intercambiar cualquier 3 recursos idénticos por 1 de cualquier tipo (mejor que el 4:1 del banco). Un puerto 2:1 te permite intercambiar 2 de un recurso específico por 1 de cualquier tipo. Si produces consistentemente ese recurso específico, el 2:1 es mucho más valioso.",
          de: "Ein 3:1-Hafen lässt dich beliebige 3 identische Ressourcen gegen 1 von beliebigem Typ tauschen (besser als die 4:1 der Bank). Ein 2:1-Hafen lässt dich 2 einer bestimmten Ressource gegen 1 von beliebigem Typ tauschen. Wenn du diese spezifische Ressource konsistent produzierst, ist der 2:1 viel wertvoller.",
          nl: "Een 3:1-haven laat je elke 3 identieke hulpbronnen ruilen voor 1 van elk type (beter dan 4:1 van de bank). Een 2:1-haven laat je 2 van een specifieke hulpbron ruilen voor 1 van elk type. Als je die specifieke hulpbron consistent produceert, is de 2:1 veel waardevoller."
        }
      },
      {
        question: {
          en: "When should you 'road block' an opponent?",
          es: "¿Cuándo debes 'bloquear con camino' a un oponente?",
          de: "Wann solltest du einen Gegner 'straßenblockieren'?",
          nl: "Wanneer moet je een tegenstander 'wegblokkeren'?"
        },
        options: [
          { en: "When they're threatening Longest Road or expanding toward valuable spots", es: "Cuando están amenazando el Camino Más Largo o expandiéndose hacia lugares valiosos", de: "Wenn sie die längste Straße bedrohen oder sich zu wertvollen Orten ausdehnen", nl: "Wanneer ze de Langste Weg bedreigen of uitbreiden naar waardevolle plekken" },
          { en: "Every turn without exception", es: "Cada turno sin excepción", de: "Jede Runde ohne Ausnahme", nl: "Elke beurt zonder uitzondering" },
          { en: "Never block opponents", es: "Nunca bloquear a los oponentes", de: "Gegner niemals blockieren", nl: "Nooit tegenstanders blokkeren" },
          { en: "Only in the first round", es: "Solo en la primera ronda", de: "Nur in der ersten Runde", nl: "Alleen in de eerste ronde" }
        ],
        correct: 0,
        explanation: {
          en: "Road blocking is a defensive tactic where you build a settlement in the path of an opponent's road network to prevent them from expanding further, especially useful when they're close to getting Longest Road or reaching a prime settlement location you want.",
          es: "El bloqueo con camino es una táctica defensiva donde construyes un asentamiento en el camino de la red de caminos de un oponente para evitar que se expandan más, especialmente útil cuando están cerca de obtener el Camino Más Largo o alcanzar una ubicación de asentamiento principal que quieres.",
          de: "Straßenblockieren ist eine defensive Taktik, bei der du eine Siedlung im Pfad des Straßennetzes eines Gegners baust, um zu verhindern, dass sie sich weiter ausdehnen, besonders nützlich, wenn sie kurz davor sind, die längste Straße zu bekommen oder einen erstklassigen Siedlungsstandort zu erreichen, den du willst.",
          nl: "Wegblokkeren is een defensieve tactiek waarbij je een nederzetting bouwt in het pad van het wegennetwerk van een tegenstander om te voorkomen dat ze verder uitbreiden, vooral nuttig wanneer ze dicht bij het krijgen van de Langste Weg zijn of een prima nederzettingslocatie bereiken die jij wilt."
        }
      },
      {
        question: {
          en: "How does the special 'special build phase' rule work in tournaments?",
          es: "¿Cómo funciona la regla de 'fase de construcción especial' en torneos?",
          de: "Wie funktioniert die 'spezielle Bauphase'-Regel in Turnieren?",
          nl: "Hoe werkt de 'speciale bouwfase'-regel in toernooien?"
        },
        options: [
          { en: "Between turns, players can build but not trade or use dev cards", es: "Entre turnos, los jugadores pueden construir pero no comerciar o usar cartas de desarrollo", de: "Zwischen den Zügen können Spieler bauen aber nicht handeln oder Entwicklungskarten verwenden", nl: "Tussen beurten kunnen spelers bouwen maar niet handelen of ontwikkelingskaarten gebruiken" },
          { en: "Players get an extra turn", es: "Los jugadores obtienen un turno extra", de: "Spieler bekommen einen Extra-Zug", nl: "Spelers krijgen een extra beurt" },
          { en: "Build two structures per turn", es: "Construye dos estructuras por turno", de: "Baue zwei Strukturen pro Zug", nl: "Bouw twee structuren per beurt" },
          { en: "No building allowed", es: "No se permite construir", de: "Bauen nicht erlaubt", nl: "Bouwen niet toegestaan" }
        ],
        correct: 0,
        explanation: {
          en: "The Special Build Phase (optional tournament rule) occurs between each player's regular turns. Players can use resources to build settlements, cities, or roads, but cannot trade, buy development cards, or play development cards. This speeds up gameplay and reduces waiting time.",
          es: "La Fase de Construcción Especial (regla de torneo opcional) ocurre entre los turnos regulares de cada jugador. Los jugadores pueden usar recursos para construir asentamientos, ciudades o caminos, pero no pueden comerciar, comprar cartas de desarrollo o jugar cartas de desarrollo. Esto acelera el juego y reduce el tiempo de espera.",
          de: "Die Spezielle Bauphase (optionale Turnierregel) erfolgt zwischen den regulären Zügen jedes Spielers. Spieler können Ressourcen verwenden, um Siedlungen, Städte oder Straßen zu bauen, können aber nicht handeln, Entwicklungskarten kaufen oder Entwicklungskarten spielen. Dies beschleunigt das Gameplay und reduziert die Wartezeit.",
          nl: "De Speciale Bouwfase (optionele toernooiregel) vindt plaats tussen de reguliere beurten van elke speler. Spelers kunnen hulpbronnen gebruiken om nederzettingen, steden of wegen te bouwen, maar kunnen niet handelen, ontwikkelingskaarten kopen of ontwikkelingskaarten spelen. Dit versnelt gameplay en vermindert wachttijd."
        }
      },
      {
        question: {
          en: "What is a 'balanced board' setup?",
          es: "¿Qué es una configuración de tablero 'equilibrado'?",
          de: "Was ist ein 'ausgeglichenes Brett'-Setup?",
          nl: "Wat is een 'gebalanceerd bord'-opzet?"
        },
        options: [
          { en: "Arranging numbers so no player has clear advantage; high-value numbers spread evenly", es: "Organizar números para que ningún jugador tenga ventaja clara; números de alto valor distribuidos uniformemente", de: "Zahlen so anordnen dass kein Spieler einen klaren Vorteil hat; hochwertige Zahlen gleichmäßig verteilt", nl: "Nummers zo rangschikken dat geen speler duidelijk voordeel heeft; hoogwaardige nummers gelijkmatig verspreid" },
          { en: "All hexes have number 7", es: "Todos los hexágonos tienen el número 7", de: "Alle Felder haben Nummer 7", nl: "Alle hexen hebben nummer 7" },
          { en: "Same resources in every position", es: "Mismos recursos en cada posición", de: "Gleiche Ressourcen an jeder Position", nl: "Dezelfde hulpbronnen op elke positie" },
          { en: "Random placement regardless of fairness", es: "Colocación aleatoria sin importar la equidad", de: "Zufällige Platzierung unabhängig von Fairness", nl: "Willekeurige plaatsing ongeacht eerlijkheid" }
        ],
        correct: 0,
        explanation: {
          en: "A balanced board ensures fair starting positions by avoiding adjacent 6s and 8s, distributing high-probability numbers evenly across the board, and ensuring each starting position has roughly equal pip count potential. Many tournaments use standardized balanced setups.",
          es: "Un tablero equilibrado asegura posiciones iniciales justas evitando 6 y 8 adyacentes, distribuyendo números de alta probabilidad uniformemente por el tablero, y asegurando que cada posición inicial tenga aproximadamente el mismo potencial de conteo de puntos. Muchos torneos usan configuraciones equilibradas estandarizadas.",
          de: "Ein ausgeglichenes Brett gewährleistet faire Startpositionen, indem benachbarte 6en und 8en vermieden werden, Zahlen mit hoher Wahrscheinlichkeit gleichmäßig über das Brett verteilt werden und sichergestellt wird, dass jede Startposition ungefähr gleiches Punktzahlpotenzial hat. Viele Turniere verwenden standardisierte ausgeglichene Setups.",
          nl: "Een gebalanceerd bord zorgt voor eerlijke startposities door aangrenzende 6'en en 8'en te vermijden, hoge-waarschijnlijkheidsnummers gelijkmatig over het bord te verdelen, en ervoor te zorgen dat elke startpositie ongeveer gelijk puntentellingspotentieel heeft. Veel toernooien gebruiken gestandaardiseerde gebalanceerde opstellingen."
        }
      },
      {
        question: {
          en: "What is the 'settlement spacing rule' exactly?",
          es: "¿Qué es exactamente la 'regla de espaciado de asentamientos'?",
          de: "Was ist genau die 'Siedlungsabstandsregel'?",
          nl: "Wat is precies de 'nederzettingsafstandsregel'?"
        },
        options: [
          { en: "No settlements on adjacent vertices; must have at least 2 edges between settlements", es: "No hay asentamientos en vértices adyacentes; debe haber al menos 2 bordes entre asentamientos", de: "Keine Siedlungen auf angrenzenden Ecken; es müssen mindestens 2 Kanten zwischen Siedlungen liegen", nl: "Geen nederzettingen op aangrenzende hoekpunten; moet minstens 2 randen tussen nederzettingen hebben" },
          { en: "All settlements must be 3 hexes apart", es: "Todos los asentamientos deben estar a 3 hexágonos de distancia", de: "Alle Siedlungen müssen 3 Felder voneinander entfernt sein", nl: "Alle nederzettingen moeten 3 hexen uit elkaar zijn" },
          { en: "Only one settlement per hex", es: "Solo un asentamiento por hexágono", de: "Nur eine Siedlung pro Feld", nl: "Slechts één nederzetting per hex" },
          { en: "Settlements can be placed anywhere", es: "Los asentamientos se pueden colocar en cualquier lugar", de: "Siedlungen können überall platziert werden", nl: "Nederzettingen kunnen overal worden geplaatst" }
        ],
        correct: 0,
        explanation: {
          en: "The distance rule states you cannot build a settlement on a vertex adjacent to any other settlement (yours or opponents'). There must be at least one empty vertex (2 road lengths) between any two settlements. This prevents clustering and ensures fair resource distribution.",
          es: "La regla de distancia establece que no puedes construir un asentamiento en un vértice adyacente a cualquier otro asentamiento (tuyo o de oponentes). Debe haber al menos un vértice vacío (2 longitudes de camino) entre cualquier dos asentamientos. Esto previene la agrupación y asegura una distribución justa de recursos.",
          de: "Die Distanzregel besagt, dass du keine Siedlung auf einer Ecke bauen kannst, die an eine andere Siedlung angrenzt (deine oder die der Gegner). Es muss mindestens eine leere Ecke (2 Straßenlängen) zwischen zwei Siedlungen liegen. Dies verhindert Clustering und gewährleistet eine faire Ressourcenverteilung.",
          nl: "De afstandsregel stelt dat je geen nederzetting kunt bouwen op een hoekpunt dat grenst aan een andere nederzetting (van jou of tegenstanders). Er moet minstens één leeg hoekpunt (2 weglengte) tussen twee nederzettingen zijn. Dit voorkomt clustering en zorgt voor eerlijke hulpbronnenverdeling."
        }
      },
      {
        question: {
          en: "What strategy should you employ when falling behind?",
          es: "¿Qué estrategia debes emplear cuando estás quedando atrás?",
          de: "Welche Strategie solltest du anwenden, wenn du zurückfällst?",
          nl: "Welke strategie moet je toepassen wanneer je achterblijft?"
        },
        options: [
          { en: "Focus on development cards for Largest Army or hidden VP, and block leader's expansion", es: "Enfocarse en cartas de desarrollo para Ejército Más Grande o VP ocultos, y bloquear la expansión del líder", de: "Auf Entwicklungskarten für größtes Ritterheer oder versteckte SP fokussieren, und Expansion des Anführers blockieren", nl: "Focus op ontwikkelingskaarten voor Grootste Leger of verborgen VP, en blokkeer expansie van de leider" },
          { en: "Trade exclusively with the leader", es: "Comerciar exclusivamente con el líder", de: "Ausschließlich mit dem Anführer handeln", nl: "Exclusief handelen met de leider" },
          { en: "Give up and help others win", es: "Rendirse y ayudar a otros a ganar", de: "Aufgeben und anderen beim Gewinnen helfen", nl: "Opgeven en anderen helpen winnen" },
          { en: "Build only roads", es: "Construir solo caminos", de: "Nur Straßen bauen", nl: "Alleen wegen bouwen" }
        ],
        correct: 0,
        explanation: {
          en: "When behind, shift strategy to development cards (which can provide hidden victory points and knights for Largest Army), place the robber on the leader's best hexes, refuse trades that help the leader, and build settlements that block their expansion paths. Catch-up mechanics rely on tactical disruption.",
          es: "Cuando estás atrás, cambia la estrategia a cartas de desarrollo (que pueden proporcionar puntos de victoria ocultos y caballeros para el Ejército Más Grande), coloca al ladrón en los mejores hexágonos del líder, rechaza intercambios que ayuden al líder y construye asentamientos que bloqueen sus rutas de expansión. Los mecanismos de recuperación dependen de la interrupción táctica.",
          de: "Wenn du zurückliegst, wechsle die Strategie zu Entwicklungskarten (die versteckte Siegpunkte und Ritter für das größte Ritterheer bieten können), platziere den Räuber auf den besten Feldern des Anführers, lehne Tauschgeschäfte ab, die dem Anführer helfen, und baue Siedlungen, die ihre Expansionswege blockieren. Aufhol-Mechaniken basieren auf taktischer Störung.",
          nl: "Wanneer je achterblijft, verander strategie naar ontwikkelingskaarten (die verborgen overwinningspunten en ridders voor het Grootste Leger kunnen bieden), plaats de rover op de beste hexen van de leider, weiger ruilen die de leider helpen, en bouw nederzettingen die hun uitbreidingspaden blokkeren. Inhaal-mechanismen vertrouwen op tactische verstoring."
        }
      },
      {
        question: {
          en: "What is the strategic value of the 'Year of Plenty' development card?",
          es: "¿Cuál es el valor estratégico de la carta de desarrollo 'Año de Abundancia'?",
          de: "Was ist der strategische Wert der 'Erfindung'-Entwicklungskarte?",
          nl: "Wat is de strategische waarde van de 'Jaar van Overvloed'-ontwikkelingskaart?"
        },
        options: [
          { en: "Provides exactly the 2 resources needed to complete a build on your turn", es: "Proporciona exactamente los 2 recursos necesarios para completar una construcción en tu turno", de: "Liefert genau die 2 Ressourcen, die benötigt werden, um einen Bau in deinem Zug abzuschließen", nl: "Levert precies de 2 hulpbronnen die nodig zijn om een bouw op je beurt te voltooien" },
          { en: "Doubles all resource production", es: "Duplica toda la producción de recursos", de: "Verdoppelt alle Ressourcenproduktion", nl: "Verdubbelt alle hulpbronnenproductie" },
          { en: "Gives you 10 resources", es: "Te da 10 recursos", de: "Gibt dir 10 Ressourcen", nl: "Geeft je 10 hulpbronnen" },
          { en: "Steals resources from opponents", es: "Roba recursos de los oponentes", de: "Stiehlt Ressourcen von Gegnern", nl: "Steelt hulpbronnen van tegenstanders" }
        ],
        correct: 0,
        explanation: {
          en: "Year of Plenty lets you take any 2 resource cards from the bank. Its main value is enabling surprise builds (getting exactly what you need to build a city or settlement immediately) or securing resources when you're close to winning and don't want to trade with opponents.",
          es: "Año de Abundancia te permite tomar cualquier 2 cartas de recursos del banco. Su principal valor es permitir construcciones sorpresa (obtener exactamente lo que necesitas para construir una ciudad o asentamiento inmediatamente) o asegurar recursos cuando estás cerca de ganar y no quieres comerciar con oponentes.",
          de: "Erfindung lässt dich beliebige 2 Ressourcenkarten von der Bank nehmen. Ihr Hauptwert liegt darin, Überraschungsbauten zu ermöglichen (genau das zu bekommen, was du brauchst, um sofort eine Stadt oder Siedlung zu bauen) oder Ressourcen zu sichern, wenn du kurz vor dem Sieg stehst und nicht mit Gegnern handeln möchtest.",
          nl: "Jaar van Overvloed laat je elke 2 hulpbronkaarten van de bank nemen. De hoofdwaarde is het mogelijk maken van verrassende bouwwerken (precies krijgen wat je nodig hebt om onmiddellijk een stad of nederzetting te bouwen) of hulpbronnen veiligstellen wanneer je dicht bij winnen bent en niet wilt ruilen met tegenstanders."
        }
      },
      {
        question: {
          en: "What is the 'monopoly card timing' strategy?",
          es: "¿Qué es la estrategia de 'sincronización de carta monopolio'?",
          de: "Was ist die 'Monopolkarten-Timing'-Strategie?",
          nl: "Wat is de 'monopoliekaart-timing'-strategie?"
        },
        options: [
          { en: "Play it when opponents have many cards and you need a specific resource to win", es: "Jugarla cuando los oponentes tienen muchas cartas y necesitas un recurso específico para ganar", de: "Spiele sie wenn Gegner viele Karten haben und du eine bestimmte Ressource zum Gewinnen brauchst", nl: "Speel het wanneer tegenstanders veel kaarten hebben en je een specifieke hulpbron nodig hebt om te winnen" },
          { en: "Play it immediately when drawn", es: "Jugarla inmediatamente al robarla", de: "Spiele sie sofort beim Ziehen", nl: "Speel het onmiddellijk wanneer getrokken" },
          { en: "Never play monopoly cards", es: "Nunca jugar cartas de monopolio", de: "Spiele niemals Monopolkarten", nl: "Speel nooit monopoliekaarten" },
          { en: "Only play it on the first turn", es: "Solo jugarla en el primer turno", de: "Spiele sie nur im ersten Zug", nl: "Speel het alleen in de eerste beurt" }
        ],
        correct: 0,
        explanation: {
          en: "The Monopoly card takes all cards of one resource type from all opponents. Best timing is when: (1) you've seen opponents receive/trade for that resource, (2) you need it to complete a winning move, (3) late game when players hold more cards. Calling wheat or ore often yields 4-8 cards.",
          es: "La carta Monopolio toma todas las cartas de un tipo de recurso de todos los oponentes. El mejor momento es cuando: (1) has visto a oponentes recibir/intercambiar ese recurso, (2) lo necesitas para completar un movimiento ganador, (3) juego tardío cuando los jugadores tienen más cartas. Pedir trigo o mineral a menudo produce 4-8 cartas.",
          de: "Die Monopolkarte nimmt alle Karten eines Ressourcentyps von allen Gegnern. Das beste Timing ist, wenn: (1) du gesehen hast, dass Gegner diese Ressource erhalten/tauschen, (2) du sie brauchst, um einen Gewinnzug abzuschließen, (3) Spätspiel, wenn Spieler mehr Karten halten. Getreide oder Erz anzufordern bringt oft 4-8 Karten.",
          nl: "De Monopoliekaart neemt alle kaarten van één hulpbrontype van alle tegenstanders. Beste timing is wanneer: (1) je hebt gezien dat tegenstanders die hulpbron ontvangen/ruilen, (2) je het nodig hebt om een winnende zet te voltooien, (3) laat spel wanneer spelers meer kaarten hebben. Tarwe of erts vragen levert vaak 4-8 kaarten op."
        }
      },
      {
        question: {
          en: "How many total settlements and cities can each player build?",
          es: "¿Cuántos asentamientos y ciudades totales puede construir cada jugador?",
          de: "Wie viele Siedlungen und Städte insgesamt kann jeder Spieler bauen?",
          nl: "Hoeveel totale nederzettingen en steden kan elke speler bouwen?"
        },
        options: [
          { en: "5 settlements + 4 cities (settlements can be upgraded)", es: "5 asentamientos + 4 ciudades (los asentamientos se pueden mejorar)", de: "5 Siedlungen + 4 Städte (Siedlungen können aufgewertet werden)", nl: "5 nederzettingen + 4 steden (nederzettingen kunnen worden geüpgraded)" },
          { en: "10 settlements, no cities", es: "10 asentamientos, no ciudades", de: "10 Siedlungen, keine Städte", nl: "10 nederzettingen, geen steden" },
          { en: "5 of each independently", es: "5 de cada uno independientemente", de: "5 von jedem unabhängig", nl: "5 van elk onafhankelijk" },
          { en: "Unlimited of both", es: "Ilimitado de ambos", de: "Unbegrenzt von beiden", nl: "Onbeperkt van beide" }
        ],
        correct: 0,
        explanation: {
          en: "Each player starts with 5 settlement pieces and 4 city pieces. You can build up to 5 settlements. When you upgrade a settlement to a city, the settlement returns to your supply and can be built again elsewhere. Maximum configuration is 5 settlements OR 4 cities + 1 settlement.",
          es: "Cada jugador comienza con 5 piezas de asentamiento y 4 piezas de ciudad. Puedes construir hasta 5 asentamientos. Cuando mejoras un asentamiento a una ciudad, el asentamiento regresa a tu suministro y puede construirse nuevamente en otro lugar. La configuración máxima es 5 asentamientos O 4 ciudades + 1 asentamiento.",
          de: "Jeder Spieler beginnt mit 5 Siedlungsstücken und 4 Stadtstücken. Du kannst bis zu 5 Siedlungen bauen. Wenn du eine Siedlung zu einer Stadt aufrüstest, kehrt die Siedlung zu deinem Vorrat zurück und kann woanders wieder gebaut werden. Maximalkonfiguration ist 5 Siedlungen ODER 4 Städte + 1 Siedlung.",
          nl: "Elke speler begint met 5 nederzettingsstukken en 4 stadsstukken. Je kunt tot 5 nederzettingen bouwen. Wanneer je een nederzetting upgradet naar een stad, keert de nederzetting terug naar je voorraad en kan elders opnieuw worden gebouwd. Maximale configuratie is 5 nederzettingen OF 4 steden + 1 nederzetting."
        }
      },
      {
        question: {
          en: "What is the 'diversification vs specialization' strategic debate?",
          es: "¿Qué es el debate estratégico de 'diversificación vs especialización'?",
          de: "Was ist die strategische Debatte 'Diversifikation vs Spezialisierung'?",
          nl: "Wat is het 'diversificatie vs specialisatie' strategische debat?"
        },
        options: [
          { en: "Diversification provides stable income; specialization + ports enables trading dominance", es: "La diversificación proporciona ingresos estables; la especialización + puertos permite dominio comercial", de: "Diversifikation bietet stabiles Einkommen; Spezialisierung + Häfen ermöglicht Handelsdominanz", nl: "Diversificatie biedt stabiel inkomen; specialisatie + havens maakt handelsdominantie mogelijk" },
          { en: "Always diversify, never specialize", es: "Siempre diversificar, nunca especializarse", de: "Immer diversifizieren, niemals spezialisieren", nl: "Altijd diversifiëren, nooit specialiseren" },
          { en: "Always specialize in one resource", es: "Siempre especializarse en un recurso", de: "Immer auf eine Ressource spezialisieren", nl: "Altijd specialiseren in één hulpbron" },
          { en: "This debate doesn't exist in Catan", es: "Este debate no existe en Catan", de: "Diese Debatte existiert in Catan nicht", nl: "Dit debat bestaat niet in Catan" }
        ],
        correct: 0,
        explanation: {
          en: "Diversification (touching all 5 resources) ensures you can build anything without trading. Specialization (heavy on 2-3 resources with ports) creates trade surpluses you can convert efficiently. Best strategy often combines both: early diversification, then specialized expansion with ports.",
          es: "La diversificación (tocar los 5 recursos) asegura que puedas construir cualquier cosa sin comerciar. La especialización (fuerte en 2-3 recursos con puertos) crea excedentes comerciales que puedes convertir eficientemente. La mejor estrategia a menudo combina ambos: diversificación temprana, luego expansión especializada con puertos.",
          de: "Diversifikation (alle 5 Ressourcen berühren) stellt sicher, dass du alles bauen kannst ohne zu handeln. Spezialisierung (stark in 2-3 Ressourcen mit Häfen) schafft Handelsüberschüsse, die du effizient umwandeln kannst. Die beste Strategie kombiniert oft beides: frühe Diversifikation, dann spezialisierte Expansion mit Häfen.",
          nl: "Diversificatie (alle 5 hulpbronnen aanraken) zorgt ervoor dat je alles kunt bouwen zonder te ruilen. Specialisatie (zwaar in 2-3 hulpbronnen met havens) creëert handelsoverschotten die je efficiënt kunt omzetten. Beste strategie combineert vaak beide: vroege diversificatie, dan gespecialiseerde uitbreiding met havens."
        }
      },
      {
        question: {
          en: "What does 'tempo' mean in Catan strategy?",
          es: "¿Qué significa 'tempo' en la estrategia de Catan?",
          de: "Was bedeutet 'Tempo' in der Catan-Strategie?",
          nl: "Wat betekent 'tempo' in Catan-strategie?"
        },
        options: [
          { en: "Speed of development; building quickly to gain early advantage", es: "Velocidad de desarrollo; construir rápidamente para obtener ventaja temprana", de: "Entwicklungsgeschwindigkeit; schnell bauen um frühen Vorteil zu erlangen", nl: "Ontwikkelingssnelheid; snel bouwen om vroeg voordeel te krijgen" },
          { en: "How fast you roll the dice", es: "Qué tan rápido tiras los dados", de: "Wie schnell du würfelst", nl: "Hoe snel je de dobbelstenen gooit" },
          { en: "Trading speed with other players", es: "Velocidad de intercambio con otros jugadores", de: "Handelsgeschwindigkeit mit anderen Spielern", nl: "Ruilsnelheid met andere spelers" },
          { en: "Time limit for each turn", es: "Límite de tiempo para cada turno", de: "Zeitlimit für jeden Zug", nl: "Tijdslimiet voor elke beurt" }
        ],
        correct: 0,
        explanation: {
          en: "Tempo refers to the pace of your development relative to opponents. High tempo means building settlements/cities quickly to generate more resources and points before others catch up. Losing tempo (e.g., by buying dev cards that don't immediately help) can put you behind.",
          es: "Tempo se refiere al ritmo de tu desarrollo en relación con los oponentes. Alto tempo significa construir asentamientos/ciudades rápidamente para generar más recursos y puntos antes de que otros se pongan al día. Perder tempo (por ejemplo, al comprar cartas de desarrollo que no ayudan inmediatamente) puede dejarte atrás.",
          de: "Tempo bezieht sich auf das Tempo deiner Entwicklung im Vergleich zu Gegnern. Hohes Tempo bedeutet, Siedlungen/Städte schnell zu bauen, um mehr Ressourcen und Punkte zu generieren, bevor andere aufholen. Tempo zu verlieren (z.B. durch Kauf von Entwicklungskarten, die nicht sofort helfen) kann dich zurückwerfen.",
          nl: "Tempo verwijst naar het tempo van je ontwikkeling ten opzichte van tegenstanders. Hoog tempo betekent snel nederzettingen/steden bouwen om meer hulpbronnen en punten te genereren voordat anderen bijkomen. Tempo verliezen (bijv. door ontwikkelingskaarten kopen die niet onmiddellijk helpen) kan je achterop zetten."
        }
      },
      {
        question: {
          en: "Why is controlling the '6-8-5' intersection considered ideal?",
          es: "¿Por qué controlar la intersección '6-8-5' se considera ideal?",
          de: "Warum wird die Kontrolle der '6-8-5'-Kreuzung als ideal angesehen?",
          nl: "Waarom wordt het beheersen van het '6-8-5'-kruispunt als ideaal beschouwd?"
        },
        options: [
          { en: "These three numbers have the highest combined pip value (14 pips) and best production frequency", es: "Estos tres números tienen el valor de puntos combinado más alto (14 puntos) y mejor frecuencia de producción", de: "Diese drei Zahlen haben den höchsten kombinierten Punktwert (14 Punkte) und beste Produktionsfrequenz", nl: "Deze drie nummers hebben de hoogste gecombineerde stipwaarde (14 stippen) en beste productiefrequentie" },
          { en: "They sum to 19", es: "Suman 19", de: "Sie summieren sich zu 19", nl: "Ze tellen op tot 19" },
          { en: "They're the rarest numbers", es: "Son los números más raros", de: "Sie sind die seltensten Zahlen", nl: "Het zijn de zeldzaamste nummers" },
          { en: "They produce special resources", es: "Producen recursos especiales", de: "Sie produzieren spezielle Ressourcen", nl: "Ze produceren speciale hulpbronnen" }
        ],
        correct: 0,
        explanation: {
          en: "6 and 8 each have 5 pips (highest probability), and 5 has 4 pips, totaling 14 pips—the maximum possible for any settlement. This intersection will produce resources on approximately 39% of all rolls (14/36), making it the most productive settlement location possible.",
          es: "6 y 8 tienen cada uno 5 puntos (probabilidad más alta), y 5 tiene 4 puntos, totalizando 14 puntos, el máximo posible para cualquier asentamiento. Esta intersección producirá recursos en aproximadamente el 39% de todas las tiradas (14/36), convirtiéndola en la ubicación de asentamiento más productiva posible.",
          de: "6 und 8 haben jeweils 5 Punkte (höchste Wahrscheinlichkeit), und 5 hat 4 Punkte, insgesamt 14 Punkte—das Maximum für jede Siedlung. Diese Kreuzung wird bei etwa 39% aller Würfe Ressourcen produzieren (14/36), was sie zum produktivsten Siedlungsstandort macht.",
          nl: "6 en 8 hebben elk 5 stippen (hoogste waarschijnlijkheid), en 5 heeft 4 stippen, in totaal 14 stippen—het maximum mogelijk voor elke nederzetting. Dit kruispunt zal bij ongeveer 39% van alle worpen hulpbronnen produceren (14/36), waardoor het de meest productieve nederzettingslocatie mogelijk is."
        }
      },
      {
        question: {
          en: "What is the 'robber-proof' settlement strategy?",
          es: "¿Qué es la estrategia de asentamiento 'a prueba de ladrones'?",
          de: "Was ist die 'räubersichere' Siedlungsstrategie?",
          nl: "Wat is de 'rover-veilige' nederzettingsstrategie?"
        },
        options: [
          { en: "Spreading settlements across many hexes so robber only blocks one source at a time", es: "Distribuir asentamientos en muchos hexágonos para que el ladrón solo bloquee una fuente a la vez", de: "Siedlungen über viele Felder verteilen damit der Räuber nur eine Quelle gleichzeitig blockiert", nl: "Nederzettingen over veel hexen verspreiden zodat rover slechts één bron tegelijk blokkeert" },
          { en: "Building settlements that robber can never reach", es: "Construir asentamientos que el ladrón nunca puede alcanzar", de: "Siedlungen bauen die der Räuber nie erreichen kann", nl: "Nederzettingen bouwen die de rover nooit kan bereiken" },
          { en: "All settlements on the same hex", es: "Todos los asentamientos en el mismo hexágono", de: "Alle Siedlungen auf demselben Feld", nl: "Alle nederzettingen op dezelfde hex" },
          { en: "Building only on ports", es: "Construir solo en puertos", de: "Nur an Häfen bauen", nl: "Alleen op havens bouwen" }
        ],
        correct: 0,
        explanation: {
          en: "A robber-proof strategy diversifies your settlements across multiple different hexes. If you have 3 settlements each touching different resource hexes, the robber can only block 1 out of 9 of your resource sources at a time, minimizing its impact on your overall production.",
          es: "Una estrategia a prueba de ladrones diversifica tus asentamientos en múltiples hexágonos diferentes. Si tienes 3 asentamientos que tocan hexágonos de recursos diferentes, el ladrón solo puede bloquear 1 de 9 de tus fuentes de recursos a la vez, minimizando su impacto en tu producción general.",
          de: "Eine räubersichere Strategie diversifiziert deine Siedlungen über mehrere verschiedene Felder. Wenn du 3 Siedlungen hast, die jeweils verschiedene Ressourcenfelder berühren, kann der Räuber nur 1 von 9 deiner Ressourcenquellen gleichzeitig blockieren, was seinen Einfluss auf deine Gesamtproduktion minimiert.",
          nl: "Een rover-veilige strategie diversifieert je nederzettingen over meerdere verschillende hexen. Als je 3 nederzettingen hebt die elk verschillende hulpbronhexen raken, kan de rover slechts 1 van 9 van je hulpbronnenbronnen tegelijk blokkeren, waardoor de impact op je totale productie wordt geminimaliseerd."
        }
      },
      {
        question: {
          en: "What is 'trading politics' and why is it important?",
          es: "¿Qué es la 'política de intercambio' y por qué es importante?",
          de: "Was ist 'Handelspolitik' und warum ist sie wichtig?",
          nl: "Wat is 'handelspolitiek' en waarom is het belangrijk?"
        },
        options: [
          { en: "Managing who you trade with to avoid helping the leader while maintaining good relationships", es: "Gestionar con quién comercias para evitar ayudar al líder mientras mantienes buenas relaciones", de: "Verwalten mit wem du handelst um zu vermeiden dem Anführer zu helfen während du gute Beziehungen pflegst", nl: "Beheren met wie je handelt om te voorkomen dat je de leider helpt terwijl je goede relaties onderhoudt" },
          { en: "Government regulations on trading", es: "Regulaciones gubernamentales sobre comercio", de: "Regierungsvorschriften zum Handel", nl: "Overheidsregulering van handel" },
          { en: "Trading only on even turns", es: "Comerciar solo en turnos pares", de: "Nur in geraden Zügen handeln", nl: "Alleen op even beurten handelen" },
          { en: "Voting on trades", es: "Votar sobre intercambios", de: "Über Tauschgeschäfte abstimmen", nl: "Stemmen over ruilen" }
        ],
        correct: 0,
        explanation: {
          en: "Trading politics involves strategic decisions about who to trade with. Refusing trades with the leader can slow them down, but being too aggressive can make others refuse to trade with you. Successful players balance competitive trading restrictions with maintaining enough goodwill to get needed resources.",
          es: "La política de intercambio implica decisiones estratégicas sobre con quién comerciar. Rechazar intercambios con el líder puede ralentizarlo, pero ser demasiado agresivo puede hacer que otros se nieguen a comerciar contigo. Los jugadores exitosos equilibran las restricciones comerciales competitivas con mantener suficiente buena voluntad para obtener recursos necesarios.",
          de: "Handelspolitik beinhaltet strategische Entscheidungen darüber, mit wem man handelt. Tauschgeschäfte mit dem Anführer abzulehnen kann ihn verlangsamen, aber zu aggressiv zu sein kann dazu führen, dass andere sich weigern, mit dir zu handeln. Erfolgreiche Spieler balancieren wettbewerbsfähige Handelsbeschränkungen mit der Aufrechterhaltung von genügend Wohlwollen, um benötigte Ressourcen zu erhalten.",
          nl: "Handelspolitiek omvat strategische beslissingen over met wie je handelt. Ruilen met de leider weigeren kan hem vertragen, maar te agressief zijn kan ertoe leiden dat anderen weigeren met je te handelen. Succesvolle spelers balanceren competitieve handelsbeperkingen met het behouden van voldoende goodwill om benodigde hulpbronnen te krijgen."
        }
      },
      {
        question: {
          en: "What is a 'hidden victory point rush'?",
          es: "¿Qué es una 'prisa de puntos de victoria ocultos'?",
          de: "Was ist ein 'versteckter Siegpunkt-Rush'?",
          nl: "Wat is een 'verborgen overwinningspunt-rush'?"
        },
        options: [
          { en: "Buying many dev cards to secretly accumulate VP cards and win unexpectedly", es: "Comprar muchas cartas de desarrollo para acumular secretamente cartas VP y ganar inesperadamente", de: "Viele Entwicklungskarten kaufen um heimlich SP-Karten zu sammeln und unerwartet zu gewinnen", nl: "Veel ontwikkelingskaarten kopen om stiekem VP-kaarten te verzamelen en onverwacht te winnen" },
          { en: "Running across the board quickly", es: "Correr por el tablero rápidamente", de: "Schnell über das Brett laufen", nl: "Snel over het bord rennen" },
          { en: "Hiding your score from opponents", es: "Ocultar tu puntuación de los oponentes", de: "Deine Punktzahl vor Gegnern verbergen", nl: "Je score verbergen voor tegenstanders" },
          { en: "Stealing victory points directly", es: "Robar puntos de victoria directamente", de: "Siegpunkte direkt stehlen", nl: "Overwinningspunten direct stelen" }
        ],
        correct: 0,
        explanation: {
          en: "A hidden VP rush strategy involves buying numerous development cards (ore+sheep+wheat each) hoping to draw the 5 Victory Point cards in the deck. Since VP cards don't need to be revealed until you win, you can surprise opponents by suddenly declaring victory when they thought you were behind.",
          es: "Una estrategia de prisa de VP ocultos implica comprar numerosas cartas de desarrollo (mineral+oveja+trigo cada una) esperando sacar las 5 cartas de Puntos de Victoria en el mazo. Dado que las cartas VP no necesitan revelarse hasta que ganes, puedes sorprender a los oponentes declarando repentinamente la victoria cuando pensaban que estabas atrás.",
          de: "Eine versteckte SP-Rush-Strategie beinhaltet den Kauf zahlreicher Entwicklungskarten (je Erz+Schaf+Getreide) in der Hoffnung, die 5 Siegpunktkarten im Deck zu ziehen. Da SP-Karten nicht offenbart werden müssen, bis du gewinnst, kannst du Gegner überraschen, indem du plötzlich den Sieg erklärst, wenn sie dachten, du wärst zurück.",
          nl: "Een verborgen VP-rush-strategie houdt in dat je talrijke ontwikkelingskaarten koopt (elk erts+schaap+tarwe) in de hoop de 5 Overwinningspuntkaarten in het deck te trekken. Aangezien VP-kaarten niet hoeven te worden onthuld totdat je wint, kun je tegenstanders verrassen door plotseling de overwinning te verklaren wanneer ze dachten dat je achterliep."
        }
      },
      {
        question: {
          en: "What is the 'Road Building' development card best used for?",
          es: "¿Para qué se usa mejor la carta de desarrollo 'Construcción de Caminos'?",
          de: "Wofür wird die 'Straßenbau'-Entwicklungskarte am besten verwendet?",
          nl: "Waarvoor wordt de 'Wegenbouw'-ontwikkelingskaart het beste gebruikt?"
        },
        options: [
          { en: "Claiming Longest Road or reaching a critical settlement spot before opponents", es: "Reclamar el Camino Más Largo o alcanzar un lugar de asentamiento crítico antes que los oponentes", de: "Längste Straße beanspruchen oder einen kritischen Siedlungsplatz vor Gegnern erreichen", nl: "Langste Weg claimen of een kritieke nederzettingsplek bereiken vóór tegenstanders" },
          { en: "Building cities faster", es: "Construir ciudades más rápido", de: "Städte schneller bauen", nl: "Steden sneller bouwen" },
          { en: "Getting extra resources", es: "Obtener recursos extra", de: "Extra Ressourcen bekommen", nl: "Extra hulpbronnen krijgen" },
          { en: "Blocking opponents permanently", es: "Bloquear a los oponentes permanentemente", de: "Gegner dauerhaft blockieren", nl: "Tegenstanders permanent blokkeren" }
        ],
        correct: 0,
        explanation: {
          en: "Road Building lets you place 2 free roads immediately. Its best strategic uses are: (1) securing Longest Road by jumping from 3 to 5 roads instantly, or (2) racing to reach a valuable settlement location before an opponent can block you. Saves 2 wood + 2 brick.",
          es: "Construcción de Caminos te permite colocar 2 caminos gratis inmediatamente. Sus mejores usos estratégicos son: (1) asegurar el Camino Más Largo saltando de 3 a 5 caminos instantáneamente, o (2) competir para alcanzar una ubicación de asentamiento valiosa antes de que un oponente pueda bloquearte. Ahorra 2 maderas + 2 ladrillos.",
          de: "Straßenbau lässt dich sofort 2 kostenlose Straßen platzieren. Seine besten strategischen Verwendungen sind: (1) die längste Straße zu sichern, indem du sofort von 3 auf 5 Straßen springst, oder (2) zu einem wertvollen Siedlungsstandort zu eilen, bevor ein Gegner dich blockieren kann. Spart 2 Holz + 2 Lehm.",
          nl: "Wegenbouw laat je onmiddellijk 2 gratis wegen plaatsen. De beste strategische toepassingen zijn: (1) Langste Weg veiligstellen door instant van 3 naar 5 wegen te springen, of (2) racen om een waardevolle nederzettingslocatie te bereiken voordat een tegenstander je kan blokkeren. Bespaart 2 hout + 2 baksteen."
        }
      },
      {
        question: {
          en: "Why is the second settlement placement (in reverse order) strategically important?",
          es: "¿Por qué es estratégicamente importante la colocación del segundo asentamiento (en orden inverso)?",
          de: "Warum ist die zweite Siedlungsplatzierung (in umgekehrter Reihenfolge) strategisch wichtig?",
          nl: "Waarom is de tweede nederzettingsplaatsing (in omgekeerde volgorde) strategisch belangrijk?"
        },
        options: [
          { en: "You get starting resources from it, and last player picks twice consecutively", es: "Obtienes recursos iniciales de ella, y el último jugador elige dos veces consecutivamente", de: "Du erhältst Startressourcen davon, und der letzte Spieler wählt zweimal hintereinander", nl: "Je krijgt starthulpbronnen ervan, en laatste speler kiest tweemaal achtereenvolgens" },
          { en: "It's worth double victory points", es: "Vale el doble de puntos de victoria", de: "Sie ist doppelte Siegpunkte wert", nl: "Het is dubbele overwinningspunten waard" },
          { en: "It can be placed anywhere without restrictions", es: "Se puede colocar en cualquier lugar sin restricciones", de: "Sie kann überall ohne Einschränkungen platziert werden", nl: "Het kan overal zonder beperkingen worden geplaatst" },
          { en: "It always produces more resources", es: "Siempre produce más recursos", de: "Sie produziert immer mehr Ressourcen", nl: "Het produceert altijd meer hulpbronnen" }
        ],
        correct: 0,
        explanation: {
          en: "The second settlement gives you starting resources (one of each adjacent hex type), helping you build on turn 1. Additionally, going last in turn order means you place both your second and first settlement back-to-back, allowing you to secure two complementary locations without interference.",
          es: "El segundo asentamiento te da recursos iniciales (uno de cada tipo de hexágono adyacente), ayudándote a construir en el turno 1. Además, ir último en el orden de turnos significa que colocas tu segundo y primer asentamiento consecutivamente, permitiéndote asegurar dos ubicaciones complementarias sin interferencia.",
          de: "Die zweite Siedlung gibt dir Startressourcen (eine von jedem angrenzenden Feldtyp), was dir hilft, in Runde 1 zu bauen. Außerdem bedeutet das Gehen als Letzter in der Zugreihenfolge, dass du deine zweite und erste Siedlung hintereinander platzierst, was es dir ermöglicht, zwei komplementäre Standorte ohne Störung zu sichern.",
          nl: "De tweede nederzetting geeft je starthulpbronnen (één van elk aangrenzend hextype), wat je helpt om in beurt 1 te bouwen. Bovendien betekent als laatste in beurtvolgorde gaan dat je zowel je tweede als eerste nederzetting achter elkaar plaatst, waardoor je twee complementaire locaties kunt beveiligen zonder storing."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level4;
  } else if (typeof window !== 'undefined') {
    window.level4 = level4;
  }
})();
