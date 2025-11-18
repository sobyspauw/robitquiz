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
