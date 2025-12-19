// Quiz Template - Level 2: Bord spelletjes - Catan
(function() {
  const level2 = {
    name: {
      en: "Catan - Novice",
      es: "Catan - Novato",
      de: "Catan - Anfänger",
      nl: "Catan - Nieuweling"
    },
    questions: [
      {
        question: {
          en: "How many different resource types are there in Catan?",
          es: "¿Cuántos tipos diferentes de recursos hay en Catan?",
          de: "Wie viele verschiedene Ressourcentypen gibt es in Catan?",
          nl: "Hoeveel verschillende hulpbronnen zijn er in Catan?"
        },
        options: [
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "6", es: "6", de: "6", nl: "6" }
        ],
        correct: 2,
        explanation: {
          en: "Catan has 5 resource types: wood, brick, wheat, sheep, and ore. These resources are used to build roads, settlements, cities, and development cards.",
          es: "Catan tiene 5 tipos de recursos: madera, ladrillo, trigo, oveja y mineral. Estos recursos se utilizan para construir caminos, asentamientos, ciudades y cartas de desarrollo.",
          de: "Catan hat 5 Ressourcentypen: Holz, Lehm, Getreide, Wolle und Erz. Diese Ressourcen werden verwendet, um Straßen, Siedlungen, Städte und Entwicklungskarten zu bauen.",
          nl: "Catan heeft 5 hulpbrontypen: hout, baksteen, tarwe, schaap en erts. Deze hulpbronnen worden gebruikt om wegen, nederzettingen, steden en ontwikkelingskaarten te bouwen."
        }
      },
      {
        question: {
          en: "What do you need to build your first settlement?",
          es: "¿Qué necesitas para construir tu primer asentamiento?",
          de: "Was brauchst du, um deine erste Siedlung zu bauen?",
          nl: "Wat heb je nodig om je eerste nederzetting te bouwen?"
        },
        options: [
          { en: "1 wood, 1 brick, 1 wheat, 1 sheep", es: "1 madera, 1 ladrillo, 1 trigo, 1 oveja", de: "1 Holz, 1 Lehm, 1 Getreide, 1 Wolle", nl: "1 hout, 1 baksteen, 1 tarwe, 1 schaap" },
          { en: "2 wood, 2 brick", es: "2 madera, 2 ladrillo", de: "2 Holz, 2 Lehm", nl: "2 hout, 2 baksteen" },
          { en: "1 wood, 1 brick, 1 ore", es: "1 madera, 1 ladrillo, 1 mineral", de: "1 Holz, 1 Lehm, 1 Erz", nl: "1 hout, 1 baksteen, 1 erts" },
          { en: "1 of each resource", es: "1 de cada recurso", de: "1 von jeder Ressource", nl: "1 van elke hulpbron" }
        ],
        correct: 0,
        explanation: {
          en: "To build a settlement, you need 1 wood, 1 brick, 1 wheat, and 1 sheep. The first two settlements in the game are placed for free during the setup phase.",
          es: "Para construir un asentamiento, necesitas 1 madera, 1 ladrillo, 1 trigo y 1 oveja. Los primeros dos asentamientos del juego se colocan gratis durante la fase de preparación.",
          de: "Um eine Siedlung zu bauen, brauchst du 1 Holz, 1 Lehm, 1 Getreide und 1 Wolle. Die ersten beiden Siedlungen werden während der Aufbauphase kostenlos platziert.",
          nl: "Om een nederzetting te bouwen, heb je 1 hout, 1 baksteen, 1 tarwe en 1 schaap nodig. De eerste twee nederzettingen in het spel worden gratis geplaatst tijdens de opzetfase."
        }
      },
      {
        question: {
          en: "How many victory points do you need to win Catan?",
          es: "¿Cuántos puntos de victoria necesitas para ganar Catan?",
          de: "Wie viele Siegpunkte brauchst du, um Catan zu gewinnen?",
          nl: "Hoeveel overwinningspunten heb je nodig om Catan te winnen?"
        },
        options: [
          { en: "8", es: "8", de: "8", nl: "8" },
          { en: "10", es: "10", de: "10", nl: "10" },
          { en: "12", es: "12", de: "12", nl: "12" },
          { en: "15", es: "15", de: "15", nl: "15" }
        ],
        correct: 1,
        explanation: {
          en: "You need 10 victory points to win Catan. Points can be earned through settlements (1 point), cities (2 points), longest road (2 points), largest army (2 points), and victory point development cards (1 point each).",
          es: "Necesitas 10 puntos de victoria para ganar Catan. Los puntos se pueden ganar a través de asentamientos (1 punto), ciudades (2 puntos), camino más largo (2 puntos), ejército más grande (2 puntos) y cartas de desarrollo de punto de victoria (1 punto cada una).",
          de: "Du brauchst 10 Siegpunkte, um Catan zu gewinnen. Punkte können durch Siedlungen (1 Punkt), Städte (2 Punkte), längste Straße (2 Punkte), größtes Ritterheer (2 Punkte) und Siegpunkt-Entwicklungskarten (je 1 Punkt) verdient werden.",
          nl: "Je hebt 10 overwinningspunten nodig om Catan te winnen. Punten kunnen worden verdiend door nederzettingen (1 punt), steden (2 punten), langste weg (2 punten), grootste leger (2 punten) en overwinningspunt ontwikkelingskaarten (elk 1 punt)."
        }
      },
      {
        question: {
          en: "What number is NOT on any number token in standard Catan?",
          es: "¿Qué número NO está en ninguna ficha numérica en Catan estándar?",
          de: "Welche Zahl steht NICHT auf einem Zahlenplättchen im Standard-Catan?",
          nl: "Welk nummer staat NIET op enige getalsfiche in standaard Catan?"
        },
        options: [
          { en: "1", es: "1", de: "1", nl: "1" },
          { en: "7", es: "7", de: "7", nl: "7" },
          { en: "11", es: "11", de: "11", nl: "11" },
          { en: "Both 1 and 7", es: "Tanto 1 como 7", de: "Sowohl 1 als auch 7", nl: "Zowel 1 als 7" }
        ],
        correct: 3,
        explanation: {
          en: "Neither 1 nor 7 appear on number tokens in Catan. The numbers range from 2 to 12, with 7 being special - when a 7 is rolled, the robber is activated instead of resources being distributed.",
          es: "Ni el 1 ni el 7 aparecen en las fichas numéricas en Catan. Los números van del 2 al 12, siendo el 7 especial: cuando se tira un 7, se activa el ladrón en lugar de distribuir recursos.",
          de: "Weder 1 noch 7 erscheinen auf Zahlenplättchen in Catan. Die Zahlen reichen von 2 bis 12, wobei 7 besonders ist - wenn eine 7 gewürfelt wird, wird der Räuber aktiviert, anstatt Ressourcen zu verteilen.",
          nl: "Noch 1 noch 7 verschijnen op getalfiches in Catan. De nummers variëren van 2 tot 12, waarbij 7 speciaal is - wanneer een 7 wordt gegooid, wordt de rover geactiveerd in plaats van hulpbronnen te verdelen."
        }
      },
      {
        question: {
          en: "What happens when you roll a 7 in Catan?",
          es: "¿Qué sucede cuando tiras un 7 en Catan?",
          de: "Was passiert, wenn du eine 7 in Catan würfelst?",
          nl: "Wat gebeurt er als je een 7 gooit in Catan?"
        },
        options: [
          { en: "Everyone gets resources", es: "Todos obtienen recursos", de: "Alle bekommen Ressourcen", nl: "Iedereen krijgt hulpbronnen" },
          { en: "Move the robber and players with 8+ cards discard half", es: "Mueves el ladrón y jugadores con 8+ cartas descartan la mitad", de: "Bewege den Räuber und Spieler mit 8+ Karten werfen die Hälfte ab", nl: "Verplaats de rover en spelers met 8+ kaarten gooien de helft weg" },
          { en: "Trade with the bank at 2:1", es: "Comercia con el banco a 2:1", de: "Handel mit der Bank zu 2:1", nl: "Ruil met de bank tegen 2:1" },
          { en: "Draw a development card", es: "Roba una carta de desarrollo", de: "Ziehe eine Entwicklungskarte", nl: "Trek een ontwikkelingskaart" }
        ],
        correct: 1,
        explanation: {
          en: "When a 7 is rolled, no resources are produced. Instead, all players with 8 or more resource cards must discard half (rounded down), and the current player moves the robber to a new hex and steals a card from an adjacent player.",
          es: "Cuando se tira un 7, no se producen recursos. En cambio, todos los jugadores con 8 o más cartas de recursos deben descartar la mitad (redondeado hacia abajo), y el jugador actual mueve el ladrón a un nuevo hexágono y roba una carta de un jugador adyacente.",
          de: "Wenn eine 7 gewürfelt wird, werden keine Ressourcen produziert. Stattdessen müssen alle Spieler mit 8 oder mehr Ressourcenkarten die Hälfte (abgerundet) abwerfen, und der aktuelle Spieler bewegt den Räuber auf ein neues Feld und stiehlt eine Karte von einem angrenzenden Spieler.",
          nl: "Wanneer een 7 wordt gegooid, worden geen hulpbronnen geproduceerd. In plaats daarvan moeten alle spelers met 8 of meer hulpbronkaarten de helft (naar beneden afgerond) weggooien, en de huidige speler verplaatst de rover naar een nieuwe hex en steelt een kaart van een aangrenzende speler."
        }
      },
      {
        question: {
          en: "How many resource cards do you get for a city vs a settlement?",
          es: "¿Cuántas cartas de recursos obtienes por una ciudad vs un asentamiento?",
          de: "Wie viele Ressourcenkarten bekommst du für eine Stadt vs. eine Siedlung?",
          nl: "Hoeveel hulpbronkaarten krijg je voor een stad versus een nederzetting?"
        },
        options: [
          { en: "City: 1, Settlement: 1", es: "Ciudad: 1, Asentamiento: 1", de: "Stadt: 1, Siedlung: 1", nl: "Stad: 1, Nederzetting: 1" },
          { en: "City: 2, Settlement: 1", es: "Ciudad: 2, Asentamiento: 1", de: "Stadt: 2, Siedlung: 1", nl: "Stad: 2, Nederzetting: 1" },
          { en: "City: 3, Settlement: 1", es: "Ciudad: 3, Asentamiento: 1", de: "Stadt: 3, Siedlung: 1", nl: "Stad: 3, Nederzetting: 1" },
          { en: "City: 2, Settlement: 2", es: "Ciudad: 2, Asentamiento: 2", de: "Stadt: 2, Siedlung: 2", nl: "Stad: 2, Nederzetting: 2" }
        ],
        correct: 1,
        explanation: {
          en: "A settlement produces 1 resource card when its adjacent hex number is rolled, while a city produces 2 resource cards. This is why upgrading to cities is strategic for resource generation.",
          es: "Un asentamiento produce 1 carta de recurso cuando se tira el número de su hexágono adyacente, mientras que una ciudad produce 2 cartas de recursos. Por eso mejorar a ciudades es estratégico para la generación de recursos.",
          de: "Eine Siedlung produziert 1 Ressourcenkarte, wenn ihre angrenzende Hex-Zahl gewürfelt wird, während eine Stadt 2 Ressourcenkarten produziert. Deshalb ist das Aufwerten zu Städten strategisch für die Ressourcenproduktion.",
          nl: "Een nederzetting produceert 1 hulpbronkaart wanneer het aangrenzende hexnummer wordt gegooid, terwijl een stad 2 hulpbronkaarten produceert. Daarom is upgraden naar steden strategisch voor hulpbronnenproductie."
        }
      },
      {
        question: {
          en: "What resources do you need to build a road?",
          es: "¿Qué recursos necesitas para construir un camino?",
          de: "Welche Ressourcen brauchst du, um eine Straße zu bauen?",
          nl: "Welke hulpbronnen heb je nodig om een weg te bouwen?"
        },
        options: [
          { en: "1 wood, 1 brick", es: "1 madera, 1 ladrillo", de: "1 Holz, 1 Lehm", nl: "1 hout, 1 baksteen" },
          { en: "1 wood, 1 sheep", es: "1 madera, 1 oveja", de: "1 Holz, 1 Wolle", nl: "1 hout, 1 schaap" },
          { en: "2 wood", es: "2 madera", de: "2 Holz", nl: "2 hout" },
          { en: "2 brick", es: "2 ladrillo", de: "2 Lehm", nl: "2 baksteen" }
        ],
        correct: 0,
        explanation: {
          en: "Building a road requires 1 wood and 1 brick. Roads are essential for expanding your network, connecting settlements, and competing for the Longest Road achievement.",
          es: "Construir un camino requiere 1 madera y 1 ladrillo. Los caminos son esenciales para expandir tu red, conectar asentamientos y competir por el logro del Camino Más Largo.",
          de: "Der Bau einer Straße erfordert 1 Holz und 1 Lehm. Straßen sind wichtig, um dein Netzwerk zu erweitern, Siedlungen zu verbinden und um die längste Straße zu konkurrieren.",
          nl: "Het bouwen van een weg vereist 1 hout en 1 baksteen. Wegen zijn essentieel voor het uitbreiden van je netwerk, het verbinden van nederzettingen en het strijden om de Langste Weg prestatie."
        }
      },
      {
        question: {
          en: "What resources do you need to upgrade a settlement to a city?",
          es: "¿Qué recursos necesitas para mejorar un asentamiento a una ciudad?",
          de: "Welche Ressourcen brauchst du, um eine Siedlung zu einer Stadt aufzuwerten?",
          nl: "Welke hulpbronnen heb je nodig om een nederzetting naar een stad te upgraden?"
        },
        options: [
          { en: "2 wheat, 3 ore", es: "2 trigo, 3 mineral", de: "2 Getreide, 3 Erz", nl: "2 tarwe, 3 erts" },
          { en: "3 wheat, 2 ore", es: "3 trigo, 2 mineral", de: "3 Getreide, 2 Erz", nl: "3 tarwe, 2 erts" },
          { en: "1 wheat, 1 ore, 1 brick", es: "1 trigo, 1 mineral, 1 ladrillo", de: "1 Getreide, 1 Erz, 1 Lehm", nl: "1 tarwe, 1 erts, 1 baksteen" },
          { en: "2 ore, 2 brick", es: "2 mineral, 2 ladrillo", de: "2 Erz, 2 Lehm", nl: "2 erts, 2 baksteen" }
        ],
        correct: 0,
        explanation: {
          en: "Upgrading a settlement to a city requires 2 wheat and 3 ore. Cities are worth 2 victory points (instead of 1 for settlements) and produce 2 resources instead of 1 when their numbers are rolled.",
          es: "Mejorar un asentamiento a una ciudad requiere 2 trigo y 3 mineral. Las ciudades valen 2 puntos de victoria (en lugar de 1 para asentamientos) y producen 2 recursos en lugar de 1 cuando se tiran sus números.",
          de: "Das Aufwerten einer Siedlung zu einer Stadt erfordert 2 Getreide und 3 Erz. Städte sind 2 Siegpunkte wert (statt 1 für Siedlungen) und produzieren 2 Ressourcen statt 1, wenn ihre Zahlen gewürfelt werden.",
          nl: "Het upgraden van een nederzetting naar een stad vereist 2 tarwe en 3 erts. Steden zijn 2 overwinningspunten waard (in plaats van 1 voor nederzettingen) en produceren 2 hulpbronnen in plaats van 1 wanneer hun nummers worden gegooid."
        }
      },
      {
        question: {
          en: "How many roads do you need for the Longest Road achievement?",
          es: "¿Cuántos caminos necesitas para el logro del Camino Más Largo?",
          de: "Wie viele Straßen brauchst du für die längste Straße?",
          nl: "Hoeveel wegen heb je nodig voor de Langste Weg prestatie?"
        },
        options: [
          { en: "At least 3", es: "Al menos 3", de: "Mindestens 3", nl: "Minstens 3" },
          { en: "At least 5", es: "Al menos 5", de: "Mindestens 5", nl: "Minstens 5" },
          { en: "At least 7", es: "Al menos 7", de: "Mindestens 7", nl: "Minstens 7" },
          { en: "Exactly 10", es: "Exactamente 10", de: "Genau 10", nl: "Precies 10" }
        ],
        correct: 1,
        explanation: {
          en: "You need at least 5 continuous roads to claim the Longest Road, worth 2 victory points. If another player builds a longer road, they steal the achievement. Roads must be connected without breaks.",
          es: "Necesitas al menos 5 caminos continuos para reclamar el Camino Más Largo, que vale 2 puntos de victoria. Si otro jugador construye un camino más largo, roba el logro. Los caminos deben estar conectados sin interrupciones.",
          de: "Du brauchst mindestens 5 zusammenhängende Straßen, um die längste Straße zu beanspruchen, die 2 Siegpunkte wert ist. Wenn ein anderer Spieler eine längere Straße baut, stiehlt er die Errungenschaft. Straßen müssen ohne Unterbrechungen verbunden sein.",
          nl: "Je hebt minstens 5 doorlopende wegen nodig om de Langste Weg te claimen, ter waarde van 2 overwinningspunten. Als een andere speler een langere weg bouwt, stelen ze de prestatie. Wegen moeten zonder onderbrekingen verbonden zijn."
        }
      },
      {
        question: {
          en: "What resources do you need to buy a development card?",
          es: "¿Qué recursos necesitas para comprar una carta de desarrollo?",
          de: "Welche Ressourcen brauchst du, um eine Entwicklungskarte zu kaufen?",
          nl: "Welke hulpbronnen heb je nodig om een ontwikkelingskaart te kopen?"
        },
        options: [
          { en: "1 wheat, 1 sheep, 1 ore", es: "1 trigo, 1 oveja, 1 mineral", de: "1 Getreide, 1 Wolle, 1 Erz", nl: "1 tarwe, 1 schaap, 1 erts" },
          { en: "1 wood, 1 brick, 1 wheat", es: "1 madera, 1 ladrillo, 1 trigo", de: "1 Holz, 1 Lehm, 1 Getreide", nl: "1 hout, 1 baksteen, 1 tarwe" },
          { en: "2 ore, 1 wheat", es: "2 mineral, 1 trigo", de: "2 Erz, 1 Getreide", nl: "2 erts, 1 tarwe" },
          { en: "1 of each resource", es: "1 de cada recurso", de: "1 von jeder Ressource", nl: "1 van elke hulpbron" }
        ],
        correct: 0,
        explanation: {
          en: "Development cards cost 1 wheat, 1 sheep, and 1 ore. They include knight cards (for Largest Army), victory points, and special action cards like Road Building, Year of Plenty, and Monopoly.",
          es: "Las cartas de desarrollo cuestan 1 trigo, 1 oveja y 1 mineral. Incluyen cartas de caballero (para el Ejército Más Grande), puntos de victoria y cartas de acción especial como Construcción de Caminos, Año de Abundancia y Monopolio.",
          de: "Entwicklungskarten kosten 1 Getreide, 1 Wolle und 1 Erz. Sie umfassen Ritterkarten (für das größte Ritterheer), Siegpunkte und spezielle Aktionskarten wie Straßenbau, Erfindung und Monopol.",
          nl: "Ontwikkelingskaarten kosten 1 tarwe, 1 schaap en 1 erts. Ze omvatten ridderskaarten (voor Grootste Leger), overwinningspunten en speciale actiekaarten zoals Wegenbouw, Jaar van Overvloed en Monopolie."
        }
      },
      {
        question: {
          en: "How many knight cards must you play to get the Largest Army?",
          es: "¿Cuántas cartas de caballero debes jugar para obtener el Ejército Más Grande?",
          de: "Wie viele Ritterkarten musst du spielen, um das größte Ritterheer zu bekommen?",
          nl: "Hoeveel ridderskaarten moet je spelen om het Grootste Leger te krijgen?"
        },
        options: [
          { en: "At least 2", es: "Al menos 2", de: "Mindestens 2", nl: "Minstens 2" },
          { en: "At least 3", es: "Al menos 3", de: "Mindestens 3", nl: "Minstens 3" },
          { en: "At least 4", es: "Al menos 4", de: "Mindestens 4", nl: "Minstens 4" },
          { en: "At least 5", es: "Al menos 5", de: "Mindestens 5", nl: "Minstens 5" }
        ],
        correct: 1,
        explanation: {
          en: "You need to play at least 3 knight cards to claim the Largest Army, worth 2 victory points. If another player plays more knights, they steal the achievement. Knights also move the robber when played.",
          es: "Necesitas jugar al menos 3 cartas de caballero para reclamar el Ejército Más Grande, que vale 2 puntos de victoria. Si otro jugador juega más caballeros, roba el logro. Los caballeros también mueven al ladrón cuando se juegan.",
          de: "Du musst mindestens 3 Ritterkarten spielen, um das größte Ritterheer zu beanspruchen, das 2 Siegpunkte wert ist. Wenn ein anderer Spieler mehr Ritter spielt, stiehlt er die Errungenschaft. Ritter bewegen auch den Räuber, wenn sie gespielt werden.",
          nl: "Je moet minstens 3 ridderskaarten spelen om het Grootste Leger te claimen, ter waarde van 2 overwinningspunten. Als een andere speler meer ridders speelt, stelen ze de prestatie. Ridders verplaatsen ook de rover wanneer ze worden gespeeld."
        }
      },
      {
        question: {
          en: "What is the desert hex in Catan?",
          es: "¿Qué es el hexágono del desierto en Catan?",
          de: "Was ist das Wüstenfeld in Catan?",
          nl: "Wat is de woestijnhex in Catan?"
        },
        options: [
          { en: "Produces ore", es: "Produce mineral", de: "Produziert Erz", nl: "Produceert erts" },
          { en: "Produces no resources", es: "No produce recursos", de: "Produziert keine Ressourcen", nl: "Produceert geen hulpbronnen" },
          { en: "Produces all resources", es: "Produce todos los recursos", de: "Produziert alle Ressourcen", nl: "Produceert alle hulpbronnen" },
          { en: "Changes each turn", es: "Cambia cada turno", de: "Ändert sich jede Runde", nl: "Verandert elke beurt" }
        ],
        correct: 1,
        explanation: {
          en: "The desert hex produces no resources and has no number token. The robber starts on the desert at the beginning of the game. Building adjacent to the desert can be risky as it won't generate resources.",
          es: "El hexágono del desierto no produce recursos y no tiene ficha numérica. El ladrón comienza en el desierto al inicio del juego. Construir adyacente al desierto puede ser arriesgado ya que no generará recursos.",
          de: "Das Wüstenfeld produziert keine Ressourcen und hat kein Zahlenplättchen. Der Räuber beginnt zu Beginn des Spiels auf der Wüste. Das Bauen neben der Wüste kann riskant sein, da sie keine Ressourcen generiert.",
          nl: "De woestijnhex produceert geen hulpbronnen en heeft geen getalstoken. De rover begint op de woestijn aan het begin van het spel. Bouwen naast de woestijn kan riskant zijn omdat het geen hulpbronnen zal genereren."
        }
      },
      {
        question: {
          en: "What is the standard trade ratio with the bank in Catan?",
          es: "¿Cuál es la relación de intercambio estándar con el banco en Catan?",
          de: "Was ist das Standard-Handelsverhältnis mit der Bank in Catan?",
          nl: "Wat is de standaard ruilverhouding met de bank in Catan?"
        },
        options: [
          { en: "2:1", es: "2:1", de: "2:1", nl: "2:1" },
          { en: "3:1", es: "3:1", de: "3:1", nl: "3:1" },
          { en: "4:1", es: "4:1", de: "4:1", nl: "4:1" },
          { en: "5:1", es: "5:1", de: "5:1", nl: "5:1" }
        ],
        correct: 2,
        explanation: {
          en: "The standard bank trade ratio is 4:1 - you can trade 4 of any one resource for 1 of any other resource. This can be improved to 3:1 with a generic harbor or 2:1 with a specific resource harbor.",
          es: "La relación de intercambio estándar del banco es 4:1 - puedes intercambiar 4 de cualquier recurso por 1 de cualquier otro recurso. Esto se puede mejorar a 3:1 con un puerto genérico o 2:1 con un puerto de recursos específico.",
          de: "Das Standard-Handelsverhältnis der Bank ist 4:1 - du kannst 4 von einer beliebigen Ressource gegen 1 von einer anderen Ressource tauschen. Dies kann mit einem generischen Hafen auf 3:1 oder mit einem spezifischen Ressourcenhafen auf 2:1 verbessert werden.",
          nl: "De standaard bankruilverhouding is 4:1 - je kunt 4 van een willekeurige hulpbron ruilen voor 1 van een andere hulpbron. Dit kan worden verbeterd naar 3:1 met een generieke haven of 2:1 met een specifieke hulpbronhaven."
        }
      },
      {
        question: {
          en: "What does a 3:1 harbor allow you to do?",
          es: "¿Qué te permite hacer un puerto 3:1?",
          de: "Was ermöglicht dir ein 3:1-Hafen?",
          nl: "Wat stelt een 3:1 haven je in staat te doen?"
        },
        options: [
          { en: "Trade 3 of any resource for 1 of any other", es: "Intercambiar 3 de cualquier recurso por 1 de cualquier otro", de: "3 beliebige Ressourcen gegen 1 beliebige andere tauschen", nl: "3 van een willekeurige hulpbron ruilen voor 1 van een andere" },
          { en: "Trade 1 resource for 3 others", es: "Intercambiar 1 recurso por 3 otros", de: "1 Ressource gegen 3 andere tauschen", nl: "1 hulpbron ruilen voor 3 andere" },
          { en: "Get 3 victory points", es: "Obtener 3 puntos de victoria", de: "3 Siegpunkte erhalten", nl: "3 overwinningspunten krijgen" },
          { en: "Build 3 roads for free", es: "Construir 3 caminos gratis", de: "3 Straßen kostenlos bauen", nl: "3 wegen gratis bouwen" }
        ],
        correct: 0,
        explanation: {
          en: "A 3:1 harbor (also called a generic harbor) allows you to trade 3 of any single resource type for 1 of any other resource. This is better than the standard 4:1 bank rate but not as good as the 2:1 specific harbors.",
          es: "Un puerto 3:1 (también llamado puerto genérico) te permite intercambiar 3 de cualquier tipo de recurso único por 1 de cualquier otro recurso. Esto es mejor que la tasa bancaria estándar de 4:1 pero no tan bueno como los puertos específicos de 2:1.",
          de: "Ein 3:1-Hafen (auch generischer Hafen genannt) ermöglicht es dir, 3 von einem einzelnen Ressourcentyp gegen 1 von einer anderen Ressource zu tauschen. Dies ist besser als der Standard-4:1-Bankzins, aber nicht so gut wie die spezifischen 2:1-Häfen.",
          nl: "Een 3:1 haven (ook wel een generieke haven genoemd) stelt je in staat 3 van een enkel hulpbrontype te ruilen voor 1 van een andere hulpbron. Dit is beter dan de standaard 4:1 bankratio maar niet zo goed als de 2:1 specifieke havens."
        }
      },
      {
        question: {
          en: "Where does the robber start in Catan?",
          es: "¿Dónde comienza el ladrón en Catan?",
          de: "Wo beginnt der Räuber in Catan?",
          nl: "Waar begint de rover in Catan?"
        },
        options: [
          { en: "On a random hex", es: "En un hexágono aleatorio", de: "Auf einem zufälligen Feld", nl: "Op een willekeurige hex" },
          { en: "On the desert", es: "En el desierto", de: "Auf der Wüste", nl: "Op de woestijn" },
          { en: "Off the board", es: "Fuera del tablero", de: "Außerhalb des Bretts", nl: "Van het bord af" },
          { en: "On the highest number", es: "En el número más alto", de: "Auf der höchsten Zahl", nl: "Op het hoogste nummer" }
        ],
        correct: 1,
        explanation: {
          en: "The robber starts the game on the desert hex. When a 7 is rolled, the current player must move the robber to a different hex, blocking resource production there and allowing them to steal a card from an adjacent player.",
          es: "El ladrón comienza el juego en el hexágono del desierto. Cuando se tira un 7, el jugador actual debe mover al ladrón a un hexágono diferente, bloqueando la producción de recursos allí y permitiéndole robar una carta de un jugador adyacente.",
          de: "Der Räuber beginnt das Spiel auf dem Wüstenfeld. Wenn eine 7 gewürfelt wird, muss der aktuelle Spieler den Räuber auf ein anderes Feld bewegen, was die Ressourcenproduktion dort blockiert und es ihm erlaubt, eine Karte von einem angrenzenden Spieler zu stehlen.",
          nl: "De rover begint het spel op de woestijnhex. Wanneer een 7 wordt gegooid, moet de huidige speler de rover naar een andere hex verplaatsen, waardoor de hulpbronnenproductie daar wordt geblokkeerd en ze een kaart kunnen stelen van een aangrenzende speler."
        }
      },
      {
        question: {
          en: "How many settlements can each player build in total?",
          es: "¿Cuántos asentamientos puede construir cada jugador en total?",
          de: "Wie viele Siedlungen kann jeder Spieler insgesamt bauen?",
          nl: "Hoeveel nederzettingen kan elke speler in totaal bouwen?"
        },
        options: [
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "Unlimited", es: "Ilimitado", de: "Unbegrenzt", nl: "Onbeperkt" }
        ],
        correct: 2,
        explanation: {
          en: "Each player can build a maximum of 5 settlements. However, settlements can be upgraded to cities, which removes the settlement piece from the board but still counts toward your building total.",
          es: "Cada jugador puede construir un máximo de 5 asentamientos. Sin embargo, los asentamientos pueden mejorarse a ciudades, lo que elimina la pieza de asentamiento del tablero pero aún cuenta para tu total de construcción.",
          de: "Jeder Spieler kann maximal 5 Siedlungen bauen. Siedlungen können jedoch zu Städten aufgewertet werden, wodurch die Siedlungsfigur vom Brett entfernt wird, aber dennoch zu deiner Bausumme zählt.",
          nl: "Elke speler kan maximaal 5 nederzettingen bouwen. Nederzettingen kunnen echter worden geüpgraded naar steden, wat het nederzettingsstuk van het bord verwijdert maar nog steeds meetelt voor je bouwtotaal."
        }
      },
      {
        question: {
          en: "What is the minimum distance between settlements?",
          es: "¿Cuál es la distancia mínima entre asentamientos?",
          de: "Was ist der Mindestabstand zwischen Siedlungen?",
          nl: "Wat is de minimale afstand tussen nederzettingen?"
        },
        options: [
          { en: "Adjacent corners are allowed", es: "Se permiten esquinas adyacentes", de: "Angrenzende Ecken sind erlaubt", nl: "Aangrenzende hoeken zijn toegestaan" },
          { en: "1 road space apart", es: "1 espacio de camino de separación", de: "1 Straßenabstand", nl: "1 wegafstand uit elkaar" },
          { en: "2 road spaces apart", es: "2 espacios de camino de separación", de: "2 Straßenabstände", nl: "2 wegafstanden uit elkaar" },
          { en: "No minimum", es: "Sin mínimo", de: "Kein Minimum", nl: "Geen minimum" }
        ],
        correct: 1,
        explanation: {
          en: "Settlements must be at least 2 intersections apart - there must be at least 1 road space between any two settlements. This is called the 'distance rule' and prevents players from building too close together.",
          es: "Los asentamientos deben estar separados por al menos 2 intersecciones - debe haber al menos 1 espacio de camino entre dos asentamientos. Esto se llama la 'regla de distancia' y evita que los jugadores construyan demasiado cerca.",
          de: "Siedlungen müssen mindestens 2 Kreuzungen auseinander liegen - es muss mindestens 1 Straßenabstand zwischen zwei Siedlungen sein. Dies wird als 'Abstandsregel' bezeichnet und verhindert, dass Spieler zu nah beieinander bauen.",
          nl: "Nederzettingen moeten minstens 2 kruispunten uit elkaar liggen - er moet minstens 1 wegafstand tussen twee nederzettingen zijn. Dit wordt de 'afstandsregel' genoemd en voorkomt dat spelers te dicht bij elkaar bouwen."
        }
      },
      {
        question: {
          en: "How many players can play standard Catan?",
          es: "¿Cuántos jugadores pueden jugar Catan estándar?",
          de: "Wie viele Spieler können Standard-Catan spielen?",
          nl: "Hoeveel spelers kunnen standaard Catan spelen?"
        },
        options: [
          { en: "2-4 players", es: "2-4 jugadores", de: "2-4 Spieler", nl: "2-4 spelers" },
          { en: "3-4 players", es: "3-4 jugadores", de: "3-4 Spieler", nl: "3-4 spelers" },
          { en: "2-6 players", es: "2-6 jugadores", de: "2-6 Spieler", nl: "2-6 spelers" },
          { en: "4-6 players", es: "4-6 jugadores", de: "4-6 Spieler", nl: "4-6 spelers" }
        ],
        correct: 1,
        explanation: {
          en: "Standard Catan is designed for 3-4 players. There is a 5-6 player extension available that adds more hexes, number tokens, and player pieces to accommodate larger groups.",
          es: "El Catan estándar está diseñado para 3-4 jugadores. Hay una extensión para 5-6 jugadores disponible que agrega más hexágonos, fichas numéricas y piezas de jugador para acomodar grupos más grandes.",
          de: "Standard-Catan ist für 3-4 Spieler konzipiert. Es gibt eine Erweiterung für 5-6 Spieler, die mehr Felder, Zahlenplättchen und Spielfiguren hinzufügt, um größere Gruppen zu ermöglichen.",
          nl: "Standaard Catan is ontworpen voor 3-4 spelers. Er is een 5-6 speler uitbreiding beschikbaar die meer hexen, getalstokens en spelerstukken toevoegt om grotere groepen te accommoderen."
        }
      },
      {
        question: {
          en: "What happens if you have more than 7 cards when a 7 is rolled?",
          es: "¿Qué pasa si tienes más de 7 cartas cuando se tira un 7?",
          de: "Was passiert, wenn du mehr als 7 Karten hast, wenn eine 7 gewürfelt wird?",
          nl: "Wat gebeurt er als je meer dan 7 kaarten hebt wanneer een 7 wordt gegooid?"
        },
        options: [
          { en: "Nothing happens", es: "No pasa nada", de: "Nichts passiert", nl: "Er gebeurt niets" },
          { en: "You lose all your cards", es: "Pierdes todas tus cartas", de: "Du verlierst alle deine Karten", nl: "Je verliest al je kaarten" },
          { en: "You must discard half (rounded down)", es: "Debes descartar la mitad (redondeado hacia abajo)", de: "Du musst die Hälfte abwerfen (abgerundet)", nl: "Je moet de helft weggooien (naar beneden afgerond)" },
          { en: "You must give them to the robber player", es: "Debes dárselas al jugador ladrón", de: "Du musst sie dem Räuber-Spieler geben", nl: "Je moet ze aan de roverspeler geven" }
        ],
        correct: 2,
        explanation: {
          en: "If you have 8 or more resource cards when a 7 is rolled, you must discard half of them (rounded down). For example, with 9 cards you'd discard 4. This is why it's risky to hoard resources.",
          es: "Si tienes 8 o más cartas de recursos cuando se tira un 7, debes descartar la mitad de ellas (redondeado hacia abajo). Por ejemplo, con 9 cartas descartarías 4. Por eso es arriesgado acumular recursos.",
          de: "Wenn du 8 oder mehr Ressourcenkarten hast, wenn eine 7 gewürfelt wird, musst du die Hälfte davon abwerfen (abgerundet). Bei 9 Karten würdest du beispielsweise 4 abwerfen. Deshalb ist es riskant, Ressourcen zu horten.",
          nl: "Als je 8 of meer hulpbronkaarten hebt wanneer een 7 wordt gegooid, moet je de helft ervan weggooien (naar beneden afgerond). Bijvoorbeeld, met 9 kaarten zou je er 4 weggooien. Daarom is het riskant om hulpbronnen op te potten."
        }
      },
      {
        question: {
          en: "Which number has the highest probability of being rolled with two dice?",
          es: "¿Qué número tiene la mayor probabilidad de ser tirado con dos dados?",
          de: "Welche Zahl hat die höchste Wahrscheinlichkeit, mit zwei Würfeln gewürfelt zu werden?",
          nl: "Welk nummer heeft de hoogste waarschijnlijkheid om met twee dobbelstenen gegooid te worden?"
        },
        options: [
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "7", es: "7", de: "7", nl: "7" },
          { en: "8", es: "8", de: "8", nl: "8" },
          { en: "12", es: "12", de: "12", nl: "12" }
        ],
        correct: 1,
        explanation: {
          en: "The number 7 has the highest probability of being rolled with two dice (6 out of 36 combinations). This is why rolling a 7 activates the robber instead of producing resources - it would be too powerful otherwise. Numbers 6 and 8 have the second-highest probability.",
          es: "El número 7 tiene la mayor probabilidad de ser tirado con dos dados (6 de 36 combinaciones). Por eso tirar un 7 activa al ladrón en lugar de producir recursos - de lo contrario sería demasiado poderoso. Los números 6 y 8 tienen la segunda mayor probabilidad.",
          de: "Die Zahl 7 hat die höchste Wahrscheinlichkeit, mit zwei Würfeln gewürfelt zu werden (6 von 36 Kombinationen). Deshalb aktiviert das Würfeln einer 7 den Räuber, anstatt Ressourcen zu produzieren - sonst wäre es zu mächtig. Die Zahlen 6 und 8 haben die zweithöchste Wahrscheinlichkeit.",
          nl: "Het nummer 7 heeft de hoogste waarschijnlijkheid om met twee dobbelstenen gegooid te worden (6 van 36 combinaties). Daarom activeert het gooien van een 7 de rover in plaats van hulpbronnen te produceren - anders zou het te krachtig zijn. Nummers 6 en 8 hebben de op één na hoogste waarschijnlijkheid."
        }
      },
      {
        question: {
          en: "What is the total number of hexes in standard Catan?",
          es: "¿Cuál es el número total de hexágonos en Catan estándar?",
          de: "Wie viele Felder gibt es insgesamt im Standard-Catan?",
          nl: "Wat is het totale aantal hexen in standaard Catan?"
        },
        options: [
          { en: "17", es: "17", de: "17", nl: "17" },
          { en: "19", es: "19", de: "19", nl: "19" },
          { en: "21", es: "21", de: "21", nl: "21" },
          { en: "23", es: "23", de: "23", nl: "23" }
        ],
        correct: 1,
        explanation: {
          en: "Standard Catan has 19 hexagonal terrain tiles: 4 fields (wheat), 4 forests (wood), 4 pastures (sheep), 3 hills (brick), 3 mountains (ore), and 1 desert (no resource).",
          es: "El Catan estándar tiene 19 fichas de terreno hexagonales: 4 campos (trigo), 4 bosques (madera), 4 pastos (oveja), 3 colinas (ladrillo), 3 montañas (mineral) y 1 desierto (sin recurso).",
          de: "Standard-Catan hat 19 sechseckige Geländefelder: 4 Felder (Getreide), 4 Wälder (Holz), 4 Weiden (Wolle), 3 Hügel (Lehm), 3 Berge (Erz) und 1 Wüste (keine Ressource).",
          nl: "Standaard Catan heeft 19 hexagonale terreinvelden: 4 velden (tarwe), 4 bossen (hout), 4 weiden (schaap), 3 heuvels (baksteen), 3 bergen (erts) en 1 woestijn (geen hulpbron)."
        }
      },
      {
        question: {
          en: "Can you build a settlement on an intersection already occupied by another player?",
          es: "¿Puedes construir un asentamiento en una intersección ya ocupada por otro jugador?",
          de: "Kannst du eine Siedlung auf einer Kreuzung bauen, die bereits von einem anderen Spieler besetzt ist?",
          nl: "Kun je een nederzetting bouwen op een kruispunt dat al bezet is door een andere speler?"
        },
        options: [
          { en: "Yes, always", es: "Sí, siempre", de: "Ja, immer", nl: "Ja, altijd" },
          { en: "No, never", es: "No, nunca", de: "Nein, niemals", nl: "Nee, nooit" },
          { en: "Only during setup", es: "Solo durante la preparación", de: "Nur während der Vorbereitung", nl: "Alleen tijdens opzet" },
          { en: "Only with permission", es: "Solo con permiso", de: "Nur mit Erlaubnis", nl: "Alleen met toestemming" }
        ],
        correct: 1,
        explanation: {
          en: "No settlement or city can be built on an intersection already occupied by another player's settlement or city. Each intersection can only hold one settlement or city.",
          es: "Ningún asentamiento o ciudad puede construirse en una intersección ya ocupada por el asentamiento o ciudad de otro jugador. Cada intersección solo puede contener un asentamiento o ciudad.",
          de: "Keine Siedlung oder Stadt kann auf einer Kreuzung gebaut werden, die bereits von der Siedlung oder Stadt eines anderen Spielers besetzt ist. Jede Kreuzung kann nur eine Siedlung oder Stadt aufnehmen.",
          nl: "Geen nederzetting of stad kan worden gebouwd op een kruispunt dat al bezet is door de nederzetting of stad van een andere speler. Elk kruispunt kan maar één nederzetting of stad bevatten."
        }
      },
      {
        question: {
          en: "What is the effect of placing the robber on a hex?",
          es: "¿Cuál es el efecto de colocar al ladrón en un hexágono?",
          de: "Was ist der Effekt, wenn man den Räuber auf ein Feld setzt?",
          nl: "Wat is het effect van het plaatsen van de rover op een hex?"
        },
        options: [
          { en: "That hex produces double resources", es: "Ese hexágono produce el doble de recursos", de: "Dieses Feld produziert doppelte Ressourcen", nl: "Die hex produceert dubbele hulpbronnen" },
          { en: "That hex produces no resources when rolled", es: "Ese hexágono no produce recursos cuando se tira", de: "Dieses Feld produziert keine Ressourcen beim Würfeln", nl: "Die hex produceert geen hulpbronnen bij gooien" },
          { en: "Players must pay to build there", es: "Los jugadores deben pagar para construir allí", de: "Spieler müssen zahlen, um dort zu bauen", nl: "Spelers moeten betalen om daar te bouwen" },
          { en: "The hex is removed from play", es: "El hexágono se retira del juego", de: "Das Feld wird aus dem Spiel entfernt", nl: "De hex wordt uit het spel verwijderd" }
        ],
        correct: 1,
        explanation: {
          en: "When the robber is on a hex, that hex produces no resources when its number is rolled, blocking production for all adjacent settlements and cities until the robber is moved.",
          es: "Cuando el ladrón está en un hexágono, ese hexágono no produce recursos cuando se tira su número, bloqueando la producción para todos los asentamientos y ciudades adyacentes hasta que se mueva el ladrón.",
          de: "Wenn der Räuber auf einem Feld steht, produziert dieses Feld keine Ressourcen, wenn seine Zahl gewürfelt wird, und blockiert die Produktion für alle angrenzenden Siedlungen und Städte, bis der Räuber bewegt wird.",
          nl: "Wanneer de rover op een hex staat, produceert die hex geen hulpbronnen wanneer zijn nummer wordt gegooid, waardoor productie voor alle aangrenzende nederzettingen en steden wordt geblokkeerd totdat de rover wordt verplaatst."
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
          { en: "10", es: "10", de: "10", nl: "10" },
          { en: "12", es: "12", de: "12", nl: "12" },
          { en: "15", es: "15", de: "15", nl: "15" },
          { en: "Unlimited", es: "Ilimitado", de: "Unbegrenzt", nl: "Onbeperkt" }
        ],
        correct: 2,
        explanation: {
          en: "Each player has 15 road pieces in their color. Once all 15 are placed on the board, no more roads can be built unless you have spare pieces from roads being removed (which doesn't happen in standard rules).",
          es: "Cada jugador tiene 15 piezas de camino de su color. Una vez que las 15 están colocadas en el tablero, no se pueden construir más caminos a menos que tengas piezas de repuesto de caminos eliminados (lo que no sucede en las reglas estándar).",
          de: "Jeder Spieler hat 15 Straßenteile in seiner Farbe. Sobald alle 15 auf dem Brett platziert sind, können keine weiteren Straßen gebaut werden, es sei denn, du hast Ersatzteile von entfernten Straßen (was in den Standardregeln nicht vorkommt).",
          nl: "Elke speler heeft 15 wegstukken in hun kleur. Zodra alle 15 op het bord zijn geplaatst, kunnen er geen wegen meer worden gebouwd, tenzij je reservestukken hebt van verwijderde wegen (wat niet gebeurt in standaardregels)."
        }
      },
      {
        question: {
          en: "What happens when you steal a card from another player using the robber?",
          es: "¿Qué pasa cuando robas una carta de otro jugador usando el ladrón?",
          de: "Was passiert, wenn du mit dem Räuber eine Karte von einem anderen Spieler stiehlst?",
          nl: "Wat gebeurt er wanneer je een kaart steelt van een andere speler met de rover?"
        },
        options: [
          { en: "You see their hand and choose", es: "Ves su mano y eliges", de: "Du siehst ihre Hand und wählst", nl: "Je ziet hun hand en kiest" },
          { en: "You take a random card blindly", es: "Tomas una carta al azar a ciegas", de: "Du nimmst eine zufällige Karte blind", nl: "Je neemt willekeurig een kaart blind" },
          { en: "They choose which card to give", es: "Ellos eligen qué carta dar", de: "Sie wählen, welche Karte sie geben", nl: "Zij kiezen welke kaart te geven" },
          { en: "You get a card from the bank instead", es: "Obtienes una carta del banco en su lugar", de: "Du bekommst stattdessen eine Karte von der Bank", nl: "Je krijgt in plaats daarvan een kaart van de bank" }
        ],
        correct: 1,
        explanation: {
          en: "When you move the robber and steal from a player, you take one random card from their hand without looking. The victim does not choose which card you get - it's taken blindly.",
          es: "Cuando mueves al ladrón y robas de un jugador, tomas una carta al azar de su mano sin mirar. La víctima no elige qué carta obtienes: se toma a ciegas.",
          de: "Wenn du den Räuber bewegst und von einem Spieler stiehlst, nimmst du eine zufällige Karte aus seiner Hand, ohne hinzusehen. Das Opfer wählt nicht, welche Karte du bekommst - sie wird blind genommen.",
          nl: "Wanneer je de rover verplaatst en van een speler steelt, neem je een willekeurige kaart uit hun hand zonder te kijken. Het slachtoffer kiest niet welke kaart je krijgt - het wordt blind genomen."
        }
      },
      {
        question: {
          en: "How many Victory Point development cards are in the deck?",
          es: "¿Cuántas cartas de desarrollo de Punto de Victoria hay en el mazo?",
          de: "Wie viele Siegpunkt-Entwicklungskarten gibt es im Deck?",
          nl: "Hoeveel Overwinningspunt ontwikkelingskaarten zitten er in het deck?"
        },
        options: [
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "7", es: "7", de: "7", nl: "7" },
          { en: "10", es: "10", de: "10", nl: "10" }
        ],
        correct: 1,
        explanation: {
          en: "There are 5 Victory Point development cards in the deck. These are kept secret until you reveal them to win (or when the game ends). They cannot be stolen or discarded.",
          es: "Hay 5 cartas de desarrollo de Punto de Victoria en el mazo. Estas se mantienen en secreto hasta que las revelas para ganar (o cuando termina el juego). No pueden ser robadas ni descartadas.",
          de: "Es gibt 5 Siegpunkt-Entwicklungskarten im Deck. Diese werden geheim gehalten, bis du sie offenbarst, um zu gewinnen (oder wenn das Spiel endet). Sie können nicht gestohlen oder abgeworfen werden.",
          nl: "Er zijn 5 Overwinningspunt ontwikkelingskaarten in het deck. Deze worden geheim gehouden totdat je ze onthult om te winnen (of wanneer het spel eindigt). Ze kunnen niet worden gestolen of weggegooid."
        }
      },
      {
        question: {
          en: "Can you trade development cards with other players?",
          es: "¿Puedes intercambiar cartas de desarrollo con otros jugadores?",
          de: "Kannst du Entwicklungskarten mit anderen Spielern tauschen?",
          nl: "Kun je ontwikkelingskaarten ruilen met andere spelers?"
        },
        options: [
          { en: "Yes, always", es: "Sí, siempre", de: "Ja, immer", nl: "Ja, altijd" },
          { en: "No, never", es: "No, nunca", de: "Nein, niemals", nl: "Nee, nooit" },
          { en: "Only Victory Point cards", es: "Solo cartas de Punto de Victoria", de: "Nur Siegpunkt-Karten", nl: "Alleen Overwinningspunt kaarten" },
          { en: "Only Knight cards", es: "Solo cartas de Caballero", de: "Nur Ritterkarten", nl: "Alleen Ridderkaarten" }
        ],
        correct: 1,
        explanation: {
          en: "Development cards cannot be traded with other players or with the bank. Only resource cards can be traded. Development cards are personal and stay with the player who bought them.",
          es: "Las cartas de desarrollo no pueden intercambiarse con otros jugadores ni con el banco. Solo las cartas de recursos pueden intercambiarse. Las cartas de desarrollo son personales y permanecen con el jugador que las compró.",
          de: "Entwicklungskarten können nicht mit anderen Spielern oder der Bank getauscht werden. Nur Ressourcenkarten können getauscht werden. Entwicklungskarten sind persönlich und bleiben beim Spieler, der sie gekauft hat.",
          nl: "Ontwikkelingskaarten kunnen niet worden geruild met andere spelers of met de bank. Alleen hulpbronkaarten kunnen worden geruild. Ontwikkelingskaarten zijn persoonlijk en blijven bij de speler die ze heeft gekocht."
        }
      },
      {
        question: {
          en: "What is the probability of rolling a 6 or 8 in Catan?",
          es: "¿Cuál es la probabilidad de tirar un 6 u 8 en Catan?",
          de: "Wie hoch ist die Wahrscheinlichkeit, eine 6 oder 8 in Catan zu würfeln?",
          nl: "Wat is de waarschijnlijkheid om een 6 of 8 te gooien in Catan?"
        },
        options: [
          { en: "1 in 6 (about 17%)", es: "1 en 6 (aproximadamente 17%)", de: "1 von 6 (etwa 17%)", nl: "1 op 6 (ongeveer 17%)" },
          { en: "5 in 36 (about 14%)", es: "5 en 36 (aproximadamente 14%)", de: "5 von 36 (etwa 14%)", nl: "5 op 36 (ongeveer 14%)" },
          { en: "1 in 9 (about 11%)", es: "1 en 9 (aproximadamente 11%)", de: "1 von 9 (etwa 11%)", nl: "1 op 9 (ongeveer 11%)" },
          { en: "1 in 12 (about 8%)", es: "1 en 12 (aproximadamente 8%)", de: "1 von 12 (etwa 8%)", nl: "1 op 12 (ongeveer 8%)" }
        ],
        correct: 1,
        explanation: {
          en: "Both 6 and 8 have 5 ways to be rolled out of 36 possible combinations (5/36 ≈ 13.9% each). These are the most valuable numbers after 7 (which triggers the robber). That's why they have red numbers on the tokens.",
          es: "Tanto el 6 como el 8 tienen 5 formas de ser tirados de 36 combinaciones posibles (5/36 ≈ 13,9% cada uno). Estos son los números más valiosos después del 7 (que activa al ladrón). Por eso tienen números rojos en las fichas.",
          de: "Sowohl 6 als auch 8 haben 5 Möglichkeiten, von 36 möglichen Kombinationen gewürfelt zu werden (5/36 ≈ 13,9% jeweils). Dies sind die wertvollsten Zahlen nach 7 (die den Räuber auslöst). Deshalb haben sie rote Zahlen auf den Plättchen.",
          nl: "Zowel 6 als 8 hebben 5 manieren om gegooid te worden uit 36 mogelijke combinaties (5/36 ≈ 13,9% elk). Dit zijn de meest waardevolle nummers na 7 (die de rover triggert). Daarom hebben ze rode nummers op de tokens."
        }
      },
      {
        question: {
          en: "What happens if two players tie for Longest Road?",
          es: "¿Qué pasa si dos jugadores empatan en el Camino Más Largo?",
          de: "Was passiert, wenn zwei Spieler bei der längsten Straße gleichstehen?",
          nl: "Wat gebeurt er als twee spelers gelijk staan voor Langste Weg?"
        },
        options: [
          { en: "Both get 2 points", es: "Ambos obtienen 2 puntos", de: "Beide erhalten 2 Punkte", nl: "Beiden krijgen 2 punten" },
          { en: "Both get 1 point", es: "Ambos obtienen 1 punto", de: "Beide erhalten 1 Punkt", nl: "Beiden krijgen 1 punt" },
          { en: "Neither gets the card", es: "Ninguno obtiene la carta", de: "Keiner bekommt die Karte", nl: "Geen van beiden krijgt de kaart" },
          { en: "Current holder keeps it", es: "El poseedor actual la mantiene", de: "Aktueller Besitzer behält sie", nl: "Huidige houder behoudt het" }
        ],
        correct: 3,
        explanation: {
          en: "If players tie for Longest Road, the player who currently holds the card keeps it. To steal Longest Road, you must have a road strictly longer than the current holder's, not just equal.",
          es: "Si los jugadores empatan en el Camino Más Largo, el jugador que actualmente tiene la carta la mantiene. Para robar el Camino Más Largo, debes tener un camino estrictamente más largo que el del poseedor actual, no solo igual.",
          de: "Wenn Spieler bei der längsten Straße gleichstehen, behält der Spieler, der aktuell die Karte hält, sie. Um die längste Straße zu stehlen, musst du eine Straße haben, die streng länger ist als die des aktuellen Besitzers, nicht nur gleich.",
          nl: "Als spelers gelijk staan voor Langste Weg, behoudt de speler die momenteel de kaart heeft deze. Om de Langste Weg te stelen, moet je een weg hebben die strikt langer is dan die van de huidige houder, niet alleen gelijk."
        }
      },
      {
        question: {
          en: "Can you build a city without first having a settlement on that spot?",
          es: "¿Puedes construir una ciudad sin tener primero un asentamiento en ese lugar?",
          de: "Kannst du eine Stadt bauen, ohne zuerst eine Siedlung an dieser Stelle zu haben?",
          nl: "Kun je een stad bouwen zonder eerst een nederzetting op die plek te hebben?"
        },
        options: [
          { en: "Yes, cities can be built anywhere", es: "Sí, las ciudades pueden construirse en cualquier lugar", de: "Ja, Städte können überall gebaut werden", nl: "Ja, steden kunnen overal worden gebouwd" },
          { en: "No, must upgrade existing settlement", es: "No, debes mejorar un asentamiento existente", de: "Nein, muss vorhandene Siedlung aufwerten", nl: "Nee, moet bestaande nederzetting upgraden" },
          { en: "Only during setup", es: "Solo durante la preparación", de: "Nur während der Vorbereitung", nl: "Alleen tijdens opzet" },
          { en: "Only with development card", es: "Solo con carta de desarrollo", de: "Nur mit Entwicklungskarte", nl: "Alleen met ontwikkelingskaart" }
        ],
        correct: 1,
        explanation: {
          en: "Cities can only be built by upgrading an existing settlement. You cannot build a city directly on an empty intersection. When you upgrade, the settlement returns to your supply.",
          es: "Las ciudades solo pueden construirse mejorando un asentamiento existente. No puedes construir una ciudad directamente en una intersección vacía. Cuando mejoras, el asentamiento vuelve a tu suministro.",
          de: "Städte können nur durch Aufwerten einer vorhandenen Siedlung gebaut werden. Du kannst keine Stadt direkt auf einer leeren Kreuzung bauen. Beim Aufwerten kehrt die Siedlung in deinen Vorrat zurück.",
          nl: "Steden kunnen alleen worden gebouwd door een bestaande nederzetting te upgraden. Je kunt geen stad direct op een leeg kruispunt bouwen. Wanneer je upgradet, keert de nederzetting terug naar je voorraad."
        }
      },
      {
        question: {
          en: "How many Knight cards are in the development card deck?",
          es: "¿Cuántas cartas de Caballero hay en el mazo de cartas de desarrollo?",
          de: "Wie viele Ritterkarten gibt es im Entwicklungskarten-Deck?",
          nl: "Hoeveel Ridderkaarten zitten er in het ontwikkelingskaarten deck?"
        },
        options: [
          { en: "10", es: "10", de: "10", nl: "10" },
          { en: "12", es: "12", de: "12", nl: "12" },
          { en: "14", es: "14", de: "14", nl: "14" },
          { en: "16", es: "16", de: "16", nl: "16" }
        ],
        correct: 2,
        explanation: {
          en: "There are 14 Knight cards in the development deck, making them the most common type. Knights move the robber and count toward Largest Army (need 3+ to claim it).",
          es: "Hay 14 cartas de Caballero en el mazo de desarrollo, lo que las convierte en el tipo más común. Los caballeros mueven al ladrón y cuentan para el Ejército Más Grande (necesitas 3+ para reclamarlo).",
          de: "Es gibt 14 Ritterkarten im Entwicklungsdeck, was sie zum häufigsten Typ macht. Ritter bewegen den Räuber und zählen zur größten Ritterarmee (braucht 3+, um sie zu beanspruchen).",
          nl: "Er zijn 14 Ridderkaarten in het ontwikkelingsdeck, waardoor ze het meest voorkomende type zijn. Ridders verplaatsen de rover en tellen mee voor het Grootste Leger (heb 3+ nodig om het te claimen)."
        }
      },
      {
        question: {
          en: "What must you do before placing the robber on a new hex?",
          es: "¿Qué debes hacer antes de colocar al ladrón en un nuevo hexágono?",
          de: "Was musst du tun, bevor du den Räuber auf ein neues Feld setzt?",
          nl: "Wat moet je doen voordat je de rover op een nieuwe hex plaatst?"
        },
        options: [
          { en: "Roll the dice again", es: "Tirar los dados de nuevo", de: "Noch einmal würfeln", nl: "Gooi opnieuw de dobbelstenen" },
          { en: "Pay 1 resource", es: "Pagar 1 recurso", de: "1 Ressource bezahlen", nl: "Betaal 1 hulpbron" },
          { en: "Nothing special required", es: "No se requiere nada especial", de: "Nichts Besonderes erforderlich", nl: "Niets speciaals vereist" },
          { en: "Ask other players' permission", es: "Pedir permiso a otros jugadores", de: "Um Erlaubnis anderer Spieler bitten", nl: "Vraag toestemming aan andere spelers" }
        ],
        correct: 2,
        explanation: {
          en: "You can move the robber to any hex (except the desert in some variants) without any special requirement. After placing it, you may steal a random card from a player with a settlement/city adjacent to that hex.",
          es: "Puedes mover al ladrón a cualquier hexágono (excepto el desierto en algunas variantes) sin ningún requisito especial. Después de colocarlo, puedes robar una carta al azar de un jugador con un asentamiento/ciudad adyacente a ese hexágono.",
          de: "Du kannst den Räuber auf jedes Feld bewegen (außer der Wüste in einigen Varianten) ohne besondere Anforderung. Nach dem Platzieren kannst du eine zufällige Karte von einem Spieler mit einer Siedlung/Stadt neben diesem Feld stehlen.",
          nl: "Je kunt de rover naar elke hex verplaatsen (behalve de woestijn in sommige varianten) zonder speciale vereiste. Na plaatsing mag je een willekeurige kaart stelen van een speler met een nederzetting/stad naast die hex."
        }
      },
      {
        question: {
          en: "How many total development cards are in the deck?",
          es: "¿Cuántas cartas de desarrollo hay en total en el mazo?",
          de: "Wie viele Entwicklungskarten gibt es insgesamt im Deck?",
          nl: "Hoeveel ontwikkelingskaarten zitten er in totaal in het deck?"
        },
        options: [
          { en: "20", es: "20", de: "20", nl: "20" },
          { en: "22", es: "22", de: "22", nl: "22" },
          { en: "25", es: "25", de: "25", nl: "25" },
          { en: "30", es: "30", de: "30", nl: "30" }
        ],
        correct: 2,
        explanation: {
          en: "There are 25 development cards total: 14 Knights, 5 Victory Points, 2 Road Building, 2 Year of Plenty, and 2 Monopoly cards. The deck is shuffled at the start and drawn from during the game.",
          es: "Hay 25 cartas de desarrollo en total: 14 Caballeros, 5 Puntos de Victoria, 2 Construcción de Caminos, 2 Año de Abundancia y 2 Monopolio. El mazo se baraja al inicio y se roba durante el juego.",
          de: "Es gibt insgesamt 25 Entwicklungskarten: 14 Ritter, 5 Siegpunkte, 2 Straßenbau, 2 Erfindung und 2 Monopol. Das Deck wird zu Beginn gemischt und während des Spiels gezogen.",
          nl: "Er zijn in totaal 25 ontwikkelingskaarten: 14 Ridders, 5 Overwinningspunten, 2 Wegenbouw, 2 Jaar van Overvloed en 2 Monopolie. Het deck wordt aan het begin geschud en tijdens het spel getrokken."
        }
      },
      {
        question: {
          en: "Can settlements be placed on the coast (water edges)?",
          es: "¿Se pueden colocar asentamientos en la costa (bordes del agua)?",
          de: "Können Siedlungen an der Küste (Wasserkanten) platziert werden?",
          nl: "Kunnen nederzettingen op de kust (waterranden) worden geplaatst?"
        },
        options: [
          { en: "No, only on land hexes", es: "No, solo en hexágonos terrestres", de: "Nein, nur auf Landfeldern", nl: "Nee, alleen op landhexen" },
          { en: "Yes, coastal intersections are valid", es: "Sí, las intersecciones costeras son válidas", de: "Ja, Küstenkreuzungen sind gültig", nl: "Ja, kustkruispunten zijn geldig" },
          { en: "Only during setup", es: "Solo durante la preparación", de: "Nur während der Vorbereitung", nl: "Alleen tijdens opzet" },
          { en: "Only with harbors", es: "Solo con puertos", de: "Nur mit Häfen", nl: "Alleen met havens" }
        ],
        correct: 1,
        explanation: {
          en: "Settlements can be placed on coastal intersections (where land meets water). Building on harbor locations gives you special trading advantages (3:1 or 2:1 ratios) even though water hexes don't produce resources.",
          es: "Los asentamientos pueden colocarse en intersecciones costeras (donde la tierra se encuentra con el agua). Construir en ubicaciones de puerto te da ventajas comerciales especiales (proporciones 3:1 o 2:1) aunque los hexágonos de agua no producen recursos.",
          de: "Siedlungen können an Küstenkreuzungen (wo Land auf Wasser trifft) platziert werden. Das Bauen an Hafenstandorten gibt dir besondere Handelsvorteile (3:1 oder 2:1 Verhältnisse), obwohl Wasserfelder keine Ressourcen produzieren.",
          nl: "Nederzettingen kunnen op kustkruispunten worden geplaatst (waar land water ontmoet). Bouwen op havenlocaties geeft je speciale handelsvoordelen (3:1 of 2:1 verhoudingen) ook al produceren waterhexen geen hulpbronnen."
        }
      },
      {
        question: {
          en: "What happens if the development card deck runs out?",
          es: "¿Qué pasa si el mazo de cartas de desarrollo se agota?",
          de: "Was passiert, wenn das Entwicklungskarten-Deck leer ist?",
          nl: "Wat gebeurt er als het ontwikkelingskaarten deck op is?"
        },
        options: [
          { en: "Cards are reshuffled", es: "Las cartas se barajan de nuevo", de: "Karten werden neu gemischt", nl: "Kaarten worden opnieuw geschud" },
          { en: "No more can be bought", es: "No se pueden comprar más", de: "Keine weiteren können gekauft werden", nl: "Geen meer kunnen worden gekocht" },
          { en: "Game ends immediately", es: "El juego termina inmediatamente", de: "Spiel endet sofort", nl: "Spel eindigt onmiddellijk" },
          { en: "Players share remaining cards", es: "Los jugadores comparten las cartas restantes", de: "Spieler teilen verbleibende Karten", nl: "Spelers delen resterende kaarten" }
        ],
        correct: 1,
        explanation: {
          en: "Once all 25 development cards have been purchased, no more can be bought for the rest of the game. Players can still play cards they already own, but the deck is not reshuffled.",
          es: "Una vez que se han comprado todas las 25 cartas de desarrollo, no se pueden comprar más durante el resto del juego. Los jugadores aún pueden jugar las cartas que ya poseen, pero el mazo no se baraja de nuevo.",
          de: "Sobald alle 25 Entwicklungskarten gekauft wurden, können für den Rest des Spiels keine weiteren gekauft werden. Spieler können weiterhin Karten spielen, die sie bereits besitzen, aber das Deck wird nicht neu gemischt.",
          nl: "Zodra alle 25 ontwikkelingskaarten zijn gekocht, kunnen er geen meer worden gekocht voor de rest van het spel. Spelers kunnen nog steeds kaarten spelen die ze al bezitten, maar het deck wordt niet opnieuw geschud."
        }
      },
      {
        question: {
          en: "During setup, in what order do players place their second settlement?",
          es: "Durante la preparación, ¿en qué orden colocan los jugadores su segundo asentamiento?",
          de: "In welcher Reihenfolge platzieren die Spieler während der Vorbereitung ihre zweite Siedlung?",
          nl: "In welke volgorde plaatsen spelers tijdens opzet hun tweede nederzetting?"
        },
        options: [
          { en: "Same as first (1-2-3-4)", es: "Igual que la primera (1-2-3-4)", de: "Gleich wie die erste (1-2-3-4)", nl: "Hetzelfde als de eerste (1-2-3-4)" },
          { en: "Reverse order (4-3-2-1)", es: "Orden inverso (4-3-2-1)", de: "Umgekehrte Reihenfolge (4-3-2-1)", nl: "Omgekeerde volgorde (4-3-2-1)" },
          { en: "Random order", es: "Orden aleatorio", de: "Zufällige Reihenfolge", nl: "Willekeurige volgorde" },
          { en: "Highest roll goes first", es: "La tirada más alta va primero", de: "Höchster Wurf geht zuerst", nl: "Hoogste worp gaat eerst" }
        ],
        correct: 1,
        explanation: {
          en: "Setup uses a 'snake draft': players place their first settlement in order (1-2-3-4), then place their second in reverse order (4-3-2-1). This balances the advantage of picking first, as the last player gets two picks in a row.",
          es: "La preparación usa un 'draft de serpiente': los jugadores colocan su primer asentamiento en orden (1-2-3-4), luego colocan su segundo en orden inverso (4-3-2-1). Esto equilibra la ventaja de elegir primero, ya que el último jugador obtiene dos elecciones seguidas.",
          de: "Das Setup verwendet einen 'Schlangen-Draft': Spieler platzieren ihre erste Siedlung in Reihenfolge (1-2-3-4), dann ihre zweite in umgekehrter Reihenfolge (4-3-2-1). Dies gleicht den Vorteil aus, zuerst zu wählen, da der letzte Spieler zwei Auswahlen hintereinander erhält.",
          nl: "Opzet gebruikt een 'slang draft': spelers plaatsen hun eerste nederzetting op volgorde (1-2-3-4), dan plaatsen ze hun tweede in omgekeerde volgorde (4-3-2-1). Dit balanceert het voordeel van als eerste kiezen, omdat de laatste speler twee keuzes achter elkaar krijgt."
        }
      },
      {
        question: {
          en: "Can you move the robber back to the desert?",
          es: "¿Puedes mover al ladrón de vuelta al desierto?",
          de: "Kannst du den Räuber zurück zur Wüste bewegen?",
          nl: "Kun je de rover terug naar de woestijn verplaatsen?"
        },
        options: [
          { en: "Yes, always allowed", es: "Sí, siempre permitido", de: "Ja, immer erlaubt", nl: "Ja, altijd toegestaan" },
          { en: "No, never allowed", es: "No, nunca permitido", de: "Nein, niemals erlaubt", nl: "Nee, nooit toegestaan" },
          { en: "Only in 2-player games", es: "Solo en juegos de 2 jugadores", de: "Nur in 2-Spieler-Spielen", nl: "Alleen in 2-speler spellen" },
          { en: "Depends on house rules", es: "Depende de las reglas de la casa", de: "Hängt von Hausregeln ab", nl: "Hangt af van huisregels" }
        ],
        correct: 0,
        explanation: {
          en: "In standard rules, you can move the robber to any hex including the desert (though the desert produces nothing anyway). Some house rules forbid returning to the desert to keep the robber more impactful.",
          es: "En las reglas estándar, puedes mover al ladrón a cualquier hexágono, incluido el desierto (aunque el desierto no produce nada de todos modos). Algunas reglas caseras prohíben regresar al desierto para mantener al ladrón más impactante.",
          de: "In den Standardregeln kannst du den Räuber auf jedes Feld bewegen, einschließlich der Wüste (obwohl die Wüste sowieso nichts produziert). Einige Hausregeln verbieten die Rückkehr zur Wüste, um den Räuber wirkungsvoller zu halten.",
          nl: "In standaardregels kun je de rover naar elke hex verplaatsen, inclusief de woestijn (hoewel de woestijn toch niets produceert). Sommige huisregels verbieden terugkeer naar de woestijn om de rover impactvoller te houden."
        }
      },
      {
        question: {
          en: "What is the total number of resource cards in Catan?",
          es: "¿Cuál es el número total de cartas de recursos en Catan?",
          de: "Wie viele Ressourcenkarten gibt es insgesamt in Catan?",
          nl: "Wat is het totale aantal hulpbronkaarten in Catan?"
        },
        options: [
          { en: "75", es: "75", de: "75", nl: "75" },
          { en: "85", es: "85", de: "85", nl: "85" },
          { en: "95", es: "95", de: "95", nl: "95" },
          { en: "100", es: "100", de: "100", nl: "100" }
        ],
        correct: 2,
        explanation: {
          en: "There are 95 total resource cards in base Catan: 19 of each resource type (wood, brick, wheat, sheep, ore). When the bank runs out of a resource, no more can be produced until cards return to the bank.",
          es: "Hay 95 cartas de recursos en total en Catan básico: 19 de cada tipo de recurso (madera, ladrillo, trigo, oveja, mineral). Cuando el banco se queda sin un recurso, no se puede producir más hasta que las cartas regresen al banco.",
          de: "Es gibt insgesamt 95 Ressourcenkarten im Basis-Catan: 19 von jedem Ressourcentyp (Holz, Lehm, Getreide, Wolle, Erz). Wenn der Bank eine Ressource ausgeht, kann keine mehr produziert werden, bis Karten zur Bank zurückkehren.",
          nl: "Er zijn in totaal 95 hulpbronkaarten in basis Catan: 19 van elk hulpbrontype (hout, baksteen, tarwe, schaap, erts). Wanneer de bank zonder een hulpbron komt, kan er geen meer worden geproduceerd totdat kaarten terugkeren naar de bank."
        }
      },
      {
        question: {
          en: "How many hexes of each terrain type are there (except desert)?",
          es: "¿Cuántos hexágonos de cada tipo de terreno hay (excepto desierto)?",
          de: "Wie viele Felder jedes Geländetyps gibt es (außer Wüste)?",
          nl: "Hoeveel hexen van elk terreintype zijn er (behalve woestijn)?"
        },
        options: [
          { en: "3 of each", es: "3 de cada", de: "3 von jedem", nl: "3 van elk" },
          { en: "4 of each", es: "4 de cada", de: "4 von jedem", nl: "4 van elk" },
          { en: "Varies by type", es: "Varía según el tipo", de: "Variiert nach Typ", nl: "Varieert per type" },
          { en: "5 of each", es: "5 de cada", de: "5 von jedem", nl: "5 van elk" }
        ],
        correct: 2,
        explanation: {
          en: "The terrain distribution varies: 4 fields (wheat), 4 forests (wood), 4 pastures (sheep), 3 hills (brick), 3 mountains (ore), and 1 desert. Wheat, wood, and sheep are more common because they're needed for settlements.",
          es: "La distribución del terreno varía: 4 campos (trigo), 4 bosques (madera), 4 pastos (oveja), 3 colinas (ladrillo), 3 montañas (mineral) y 1 desierto. El trigo, la madera y la oveja son más comunes porque se necesitan para los asentamientos.",
          de: "Die Geländeverteilung variiert: 4 Felder (Getreide), 4 Wälder (Holz), 4 Weiden (Wolle), 3 Hügel (Lehm), 3 Berge (Erz) und 1 Wüste. Getreide, Holz und Wolle sind häufiger, weil sie für Siedlungen benötigt werden.",
          nl: "De terreindistributie varieert: 4 velden (tarwe), 4 bossen (hout), 4 weiden (schaap), 3 heuvels (baksteen), 3 bergen (erts) en 1 woestijn. Tarwe, hout en schaap zijn vaker omdat ze nodig zijn voor nederzettingen."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  } else if (typeof window !== 'undefined') {
    window.level2 = level2;
  }
})();
