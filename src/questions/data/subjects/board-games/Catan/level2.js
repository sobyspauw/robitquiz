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
