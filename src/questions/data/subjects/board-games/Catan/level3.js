// Quiz Template - Level 3: Bord spelletjes - Catan
(function() {
  const level3 = {
    name: {
      en: "Catan - Intermediate",
      es: "Catan - Intermedio",
      de: "Catan - Fortgeschritten",
      nl: "Catan - Gemiddeld"
    },
    questions: [
      {
        question: {
          en: "What does the 'Year of Plenty' development card do?",
          es: "¿Qué hace la carta de desarrollo 'Año de Abundancia'?",
          de: "Was macht die Entwicklungskarte 'Erfindung'?",
          nl: "Wat doet de ontwikkelingskaart 'Jaar van Overvloed'?"
        },
        options: [
          { en: "Take 2 free resources from the bank", es: "Toma 2 recursos gratis del banco", de: "Nimm 2 kostenlose Ressourcen von der Bank", nl: "Neem 2 gratis hulpbronnen van de bank" },
          { en: "Take 3 free resources from the bank", es: "Toma 3 recursos gratis del banco", de: "Nimm 3 kostenlose Ressourcen von der Bank", nl: "Neem 3 gratis hulpbronnen van de bank" },
          { en: "Steal 2 resources from another player", es: "Roba 2 recursos de otro jugador", de: "Stehle 2 Ressourcen von einem anderen Spieler", nl: "Steel 2 hulpbronnen van een andere speler" },
          { en: "Double your next resource production", es: "Duplica tu próxima producción de recursos", de: "Verdopple deine nächste Ressourcenproduktion", nl: "Verdubbel je volgende hulpbronnenproductie" }
        ],
        correct: 0,
        explanation: {
          en: "Year of Plenty allows you to take any 2 resource cards of your choice from the bank. This is useful when you need specific resources to complete a building project.",
          es: "Año de Abundancia te permite tomar cualquier 2 cartas de recursos de tu elección del banco. Esto es útil cuando necesitas recursos específicos para completar un proyecto de construcción.",
          de: "Erfindung ermöglicht es dir, 2 beliebige Ressourcenkarten deiner Wahl von der Bank zu nehmen. Dies ist nützlich, wenn du bestimmte Ressourcen benötigst, um ein Bauprojekt abzuschließen.",
          nl: "Jaar van Overvloed stelt je in staat om 2 willekeurige hulpbronkaarten van je keuze van de bank te nemen. Dit is nuttig wanneer je specifieke hulpbronnen nodig hebt om een bouwproject te voltooien."
        }
      },
      {
        question: {
          en: "What does the 'Monopoly' development card allow you to do?",
          es: "¿Qué te permite hacer la carta de desarrollo 'Monopolio'?",
          de: "Was ermöglicht dir die Entwicklungskarte 'Monopol'?",
          nl: "Wat stelt de ontwikkelingskaart 'Monopolie' je in staat te doen?"
        },
        options: [
          { en: "Name a resource and take all of that type from other players", es: "Nombra un recurso y toma todo de ese tipo de otros jugadores", de: "Benenne eine Ressource und nimm alle von diesem Typ von anderen Spielern", nl: "Noem een hulpbron en neem alle van dat type van andere spelers" },
          { en: "Control all trading for one turn", es: "Controla todo el comercio durante un turno", de: "Kontrolliere den gesamten Handel für eine Runde", nl: "Beheer alle handel voor één beurt" },
          { en: "Place two settlements instead of one", es: "Coloca dos asentamientos en lugar de uno", de: "Platziere zwei Siedlungen statt einer", nl: "Plaats twee nederzettingen in plaats van één" },
          { en: "Build roads at half cost", es: "Construye caminos a mitad de precio", de: "Baue Straßen zum halben Preis", nl: "Bouw wegen voor de helft van de kosten" }
        ],
        correct: 0,
        explanation: {
          en: "Monopoly lets you declare a resource type, and all other players must give you all of their cards of that type. This can be very powerful if you know opponents have many of a resource you need.",
          es: "Monopolio te permite declarar un tipo de recurso, y todos los demás jugadores deben darte todas sus cartas de ese tipo. Esto puede ser muy poderoso si sabes que los oponentes tienen muchos de un recurso que necesitas.",
          de: "Monopol ermöglicht es dir, einen Ressourcentyp zu deklarieren, und alle anderen Spieler müssen dir alle ihre Karten dieses Typs geben. Dies kann sehr mächtig sein, wenn du weißt, dass Gegner viele von einer Ressource haben, die du brauchst.",
          nl: "Monopolie stelt je in staat een hulpbrontype te verklaren, en alle andere spelers moeten je al hun kaarten van dat type geven. Dit kan zeer krachtig zijn als je weet dat tegenstanders veel hebben van een hulpbron die je nodig hebt."
        }
      },
      {
        question: {
          en: "What does the 'Road Building' development card do?",
          es: "¿Qué hace la carta de desarrollo 'Construcción de Caminos'?",
          de: "Was macht die Entwicklungskarte 'Straßenbau'?",
          nl: "Wat doet de ontwikkelingskaart 'Wegenbouw'?"
        },
        options: [
          { en: "Build 2 roads for free", es: "Construye 2 caminos gratis", de: "Baue 2 Straßen kostenlos", nl: "Bouw 2 wegen gratis" },
          { en: "Build 3 roads for free", es: "Construye 3 caminos gratis", de: "Baue 3 Straßen kostenlos", nl: "Bouw 3 wegen gratis" },
          { en: "Roads cost half price for one turn", es: "Los caminos cuestan la mitad durante un turno", de: "Straßen kosten für eine Runde die Hälfte", nl: "Wegen kosten de helft voor één beurt" },
          { en: "Move one of your roads to a new location", es: "Mueve uno de tus caminos a una nueva ubicación", de: "Bewege eine deiner Straßen an einen neuen Ort", nl: "Verplaats één van je wegen naar een nieuwe locatie" }
        ],
        correct: 0,
        explanation: {
          en: "Road Building allows you to place 2 roads immediately without paying resources. This can help you extend toward new building spots or compete for Longest Road.",
          es: "Construcción de Caminos te permite colocar 2 caminos inmediatamente sin pagar recursos. Esto puede ayudarte a extenderte hacia nuevos lugares de construcción o competir por el Camino Más Largo.",
          de: "Straßenbau ermöglicht es dir, sofort 2 Straßen zu platzieren, ohne Ressourcen zu bezahlen. Dies kann dir helfen, dich zu neuen Bauplätzen auszudehnen oder um die längste Straße zu konkurrieren.",
          nl: "Wegenbouw stelt je in staat om onmiddellijk 2 wegen te plaatsen zonder hulpbronnen te betalen. Dit kan je helpen om uit te breiden naar nieuwe bouwplekken of te strijden om de Langste Weg."
        }
      },
      {
        question: {
          en: "How many different types of development cards are there?",
          es: "¿Cuántos tipos diferentes de cartas de desarrollo hay?",
          de: "Wie viele verschiedene Arten von Entwicklungskarten gibt es?",
          nl: "Hoeveel verschillende soorten ontwikkelingskaarten zijn er?"
        },
        options: [
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "6", es: "6", de: "6", nl: "6" }
        ],
        correct: 2,
        explanation: {
          en: "There are 5 types of development cards: Knight (14 cards), Victory Point (5 cards), Year of Plenty (2 cards), Monopoly (2 cards), and Road Building (2 cards).",
          es: "Hay 5 tipos de cartas de desarrollo: Caballero (14 cartas), Punto de Victoria (5 cartas), Año de Abundancia (2 cartas), Monopolio (2 cartas) y Construcción de Caminos (2 cartas).",
          de: "Es gibt 5 Arten von Entwicklungskarten: Ritter (14 Karten), Siegpunkt (5 Karten), Erfindung (2 Karten), Monopol (2 Karten) und Straßenbau (2 Karten).",
          nl: "Er zijn 5 soorten ontwikkelingskaarten: Ridder (14 kaarten), Overwinningspunt (5 kaarten), Jaar van Overvloed (2 kaarten), Monopolie (2 kaarten) en Wegenbouw (2 kaarten)."
        }
      },
      {
        question: {
          en: "Can you play a development card on the same turn you buy it?",
          es: "¿Puedes jugar una carta de desarrollo en el mismo turno que la compras?",
          de: "Kannst du eine Entwicklungskarte in derselben Runde spielen, in der du sie kaufst?",
          nl: "Kun je een ontwikkelingskaart spelen in dezelfde beurt waarin je hem koopt?"
        },
        options: [
          { en: "Yes, always", es: "Sí, siempre", de: "Ja, immer", nl: "Ja, altijd" },
          { en: "No, except for victory point cards", es: "No, excepto las cartas de punto de victoria", de: "Nein, außer Siegpunktkarten", nl: "Nee, behalve overwinningspuntkaarten" },
          { en: "Yes, but only knight cards", es: "Sí, pero solo cartas de caballero", de: "Ja, aber nur Ritterkarten", nl: "Ja, maar alleen ridderskaarten" },
          { en: "No, never", es: "No, nunca", de: "Nein, niemals", nl: "Nee, nooit" }
        ],
        correct: 1,
        explanation: {
          en: "You cannot play development cards on the same turn you buy them, with one exception: Victory Point cards are revealed immediately when you reach 10 points to win. All other cards must wait until your next turn.",
          es: "No puedes jugar cartas de desarrollo en el mismo turno que las compras, con una excepción: las cartas de Punto de Victoria se revelan inmediatamente cuando alcanzas 10 puntos para ganar. Todas las demás cartas deben esperar hasta tu próximo turno.",
          de: "Du kannst Entwicklungskarten nicht in derselben Runde spielen, in der du sie kaufst, mit einer Ausnahme: Siegpunktkarten werden sofort aufgedeckt, wenn du 10 Punkte zum Gewinnen erreichst. Alle anderen Karten müssen bis zu deiner nächsten Runde warten.",
          nl: "Je kunt ontwikkelingskaarten niet spelen in dezelfde beurt waarin je ze koopt, met één uitzondering: Overwinningspuntkaarten worden onmiddellijk onthuld wanneer je 10 punten bereikt om te winnen. Alle andere kaarten moeten wachten tot je volgende beurt."
        }
      },
      {
        question: {
          en: "What is the 'robber blocking' effect?",
          es: "¿Qué es el efecto de 'bloqueo del ladrón'?",
          de: "Was ist der 'Räuber-Blockierungs'-Effekt?",
          nl: "Wat is het 'rover blokkeer'-effect?"
        },
        options: [
          { en: "The hex with the robber produces no resources", es: "El hexágono con el ladrón no produce recursos", de: "Das Feld mit dem Räuber produziert keine Ressourcen", nl: "De hex met de rover produceert geen hulpbronnen" },
          { en: "Players cannot trade on that hex", es: "Los jugadores no pueden comerciar en ese hexágono", de: "Spieler können auf diesem Feld nicht handeln", nl: "Spelers kunnen niet handelen op die hex" },
          { en: "The robber steals one resource per turn", es: "El ladrón roba un recurso por turno", de: "Der Räuber stiehlt eine Ressource pro Runde", nl: "De rover steelt één hulpbron per beurt" },
          { en: "Roads cannot be built through that hex", es: "No se pueden construir caminos a través de ese hexágono", de: "Straßen können nicht durch dieses Feld gebaut werden", nl: "Wegen kunnen niet door die hex worden gebouwd" }
        ],
        correct: 0,
        explanation: {
          en: "When the robber is on a hex, that terrain type produces no resources when its number is rolled, even for players with settlements or cities adjacent to it. The robber stays until moved by another 7 or knight card.",
          es: "Cuando el ladrón está en un hexágono, ese tipo de terreno no produce recursos cuando se tira su número, incluso para jugadores con asentamientos o ciudades adyacentes. El ladrón permanece hasta que se mueve con otro 7 o carta de caballero.",
          de: "Wenn der Räuber auf einem Feld ist, produziert dieser Geländetyp keine Ressourcen, wenn seine Zahl gewürfelt wird, selbst für Spieler mit Siedlungen oder Städten daneben. Der Räuber bleibt, bis er durch eine weitere 7 oder Ritterkarte bewegt wird.",
          nl: "Wanneer de rover op een hex staat, produceert dat terreintype geen hulpbronnen wanneer zijn nummer wordt gegooid, zelfs voor spelers met nederzettingen of steden ernaast. De rover blijft totdat hij wordt verplaatst door een andere 7 of ridderskaart."
        }
      },
      {
        question: {
          en: "Which two resources are needed to build cities?",
          es: "¿Qué dos recursos se necesitan para construir ciudades?",
          de: "Welche zwei Ressourcen werden benötigt, um Städte zu bauen?",
          nl: "Welke twee hulpbronnen zijn nodig om steden te bouwen?"
        },
        options: [
          { en: "Wheat and ore", es: "Trigo y mineral", de: "Getreide und Erz", nl: "Tarwe en erts" },
          { en: "Wood and brick", es: "Madera y ladrillo", de: "Holz und Lehm", nl: "Hout en baksteen" },
          { en: "Sheep and wheat", es: "Oveja y trigo", de: "Wolle und Getreide", nl: "Schaap en tarwe" },
          { en: "Ore and brick", es: "Mineral y ladrillo", de: "Erz und Lehm", nl: "Erts en baksteen" }
        ],
        correct: 0,
        explanation: {
          en: "Cities require 2 wheat and 3 ore - no other resources. This makes wheat and ore particularly valuable in the mid to late game when players are upgrading settlements to cities.",
          es: "Las ciudades requieren 2 trigo y 3 mineral - ningún otro recurso. Esto hace que el trigo y el mineral sean particularmente valiosos en la mitad y el final del juego cuando los jugadores están mejorando asentamientos a ciudades.",
          de: "Städte erfordern 2 Getreide und 3 Erz - keine anderen Ressourcen. Dies macht Getreide und Erz besonders wertvoll im mittleren bis späten Spiel, wenn Spieler Siedlungen zu Städten aufwerten.",
          nl: "Steden vereisen 2 tarwe en 3 erts - geen andere hulpbronnen. Dit maakt tarwe en erts bijzonder waardevol in het midden tot het einde van het spel wanneer spelers nederzettingen upgraden naar steden."
        }
      },
      {
        question: {
          en: "How many cities can each player build maximum?",
          es: "¿Cuántas ciudades puede construir cada jugador como máximo?",
          de: "Wie viele Städte kann jeder Spieler maximal bauen?",
          nl: "Hoeveel steden kan elke speler maximaal bouwen?"
        },
        options: [
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "Unlimited", es: "Ilimitado", de: "Unbegrenzt", nl: "Onbeperkt" }
        ],
        correct: 1,
        explanation: {
          en: "Each player has 4 city pieces. Since cities are built by upgrading settlements, you can have a maximum of 4 cities. This means you could theoretically have 1 settlement and 4 cities, or any combination.",
          es: "Cada jugador tiene 4 piezas de ciudad. Dado que las ciudades se construyen mejorando asentamientos, puedes tener un máximo de 4 ciudades. Esto significa que teóricamente podrías tener 1 asentamiento y 4 ciudades, o cualquier combinación.",
          de: "Jeder Spieler hat 4 Stadtteile. Da Städte durch Aufwerten von Siedlungen gebaut werden, kannst du maximal 4 Städte haben. Das bedeutet, du könntest theoretisch 1 Siedlung und 4 Städte haben, oder jede Kombination.",
          nl: "Elke speler heeft 4 stadstukken. Aangezien steden worden gebouwd door nederzettingen te upgraden, kun je maximaal 4 steden hebben. Dit betekent dat je theoretisch 1 nederzetting en 4 steden zou kunnen hebben, of elke combinatie."
        }
      },
      {
        question: {
          en: "What is the strategic value of the numbers 6 and 8?",
          es: "¿Cuál es el valor estratégico de los números 6 y 8?",
          de: "Was ist der strategische Wert der Zahlen 6 und 8?",
          nl: "Wat is de strategische waarde van de nummers 6 en 8?"
        },
        options: [
          { en: "They are the most frequently rolled after 7", es: "Son los que se tiran con más frecuencia después del 7", de: "Sie werden am häufigsten nach 7 gewürfelt", nl: "Ze worden het vaakst gegooid na 7" },
          { en: "They produce double resources", es: "Producen recursos dobles", de: "Sie produzieren doppelte Ressourcen", nl: "Ze produceren dubbele hulpbronnen" },
          { en: "They activate special abilities", es: "Activan habilidades especiales", de: "Sie aktivieren spezielle Fähigkeiten", nl: "Ze activeren speciale vaardigheden" },
          { en: "They never trigger the robber", es: "Nunca activan al ladrón", de: "Sie lösen niemals den Räuber aus", nl: "Ze activeren nooit de rover" }
        ],
        correct: 0,
        explanation: {
          en: "Numbers 6 and 8 each have a 5/36 probability of being rolled (tied for second-highest after 7's 6/36). This is why they're marked with red dots on the number tokens and are highly desirable settlement locations.",
          es: "Los números 6 y 8 cada uno tienen una probabilidad de 5/36 de ser tirados (empatados en segundo lugar después del 6/36 del 7). Por eso están marcados con puntos rojos en las fichas numéricas y son ubicaciones de asentamientos muy deseables.",
          de: "Die Zahlen 6 und 8 haben jeweils eine Wahrscheinlichkeit von 5/36, gewürfelt zu werden (gleichauf auf Platz zwei nach 7's 6/36). Deshalb sind sie mit roten Punkten auf den Zahlenplättchen markiert und sind sehr begehrte Siedlungsstandorte.",
          nl: "Nummers 6 en 8 hebben elk een waarschijnlijkheid van 5/36 om gegooid te worden (gelijk op de tweede plaats na 7's 6/36). Daarom zijn ze gemarkeerd met rode stippen op de getalstokens en zijn zeer gewilde nederzettingslocaties."
        }
      },
      {
        question: {
          en: "What happens when you play a Knight card?",
          es: "¿Qué sucede cuando juegas una carta de Caballero?",
          de: "Was passiert, wenn du eine Ritterkarte spielst?",
          nl: "Wat gebeurt er als je een Ridderskaart speelt?"
        },
        options: [
          { en: "Move the robber and steal a card from an adjacent player", es: "Mueve al ladrón y roba una carta de un jugador adyacente", de: "Bewege den Räuber und stehle eine Karte von einem angrenzenden Spieler", nl: "Verplaats de rover en steel een kaart van een aangrenzende speler" },
          { en: "Take 2 resources from the bank", es: "Toma 2 recursos del banco", de: "Nimm 2 Ressourcen von der Bank", nl: "Neem 2 hulpbronnen van de bank" },
          { en: "Protect yourself from the robber for one turn", es: "Te proteges del ladrón durante un turno", de: "Schütze dich für eine Runde vor dem Räuber", nl: "Bescherm jezelf tegen de rover voor één beurt" },
          { en: "Gain an extra victory point", es: "Gana un punto de victoria extra", de: "Erhalte einen zusätzlichen Siegpunkt", nl: "Krijg een extra overwinningspunt" }
        ],
        correct: 0,
        explanation: {
          en: "Playing a Knight card has the same effect as rolling a 7: you move the robber to a new hex and steal a random resource from a player with a settlement or city adjacent to that hex. Knights also count toward Largest Army.",
          es: "Jugar una carta de Caballero tiene el mismo efecto que tirar un 7: mueves al ladrón a un nuevo hexágono y robas un recurso aleatorio de un jugador con un asentamiento o ciudad adyacente a ese hexágono. Los caballeros también cuentan para el Ejército Más Grande.",
          de: "Das Spielen einer Ritterkarte hat denselben Effekt wie das Würfeln einer 7: Du bewegst den Räuber auf ein neues Feld und stiehlst eine zufällige Ressource von einem Spieler mit einer Siedlung oder Stadt neben diesem Feld. Ritter zählen auch für das größte Ritterheer.",
          nl: "Het spelen van een Ridderskaart heeft hetzelfde effect als het gooien van een 7: je verplaatst de rover naar een nieuwe hex en steelt een willekeurige hulpbron van een speler met een nederzetting of stad naast die hex. Ridders tellen ook mee voor het Grootste Leger."
        }
      },
      {
        question: {
          en: "What is a 'port' in Catan?",
          es: "¿Qué es un 'puerto' en Catan?",
          de: "Was ist ein 'Hafen' in Catan?",
          nl: "Wat is een 'haven' in Catan?"
        },
        options: [
          { en: "A coastal location offering better trading ratios", es: "Una ubicación costera que ofrece mejores ratios de comercio", de: "Ein Küstenstandort, der bessere Handelsverhältnisse bietet", nl: "Een kustlocatie die betere ruilratio's biedt" },
          { en: "A special building that costs 3 ore", es: "Un edificio especial que cuesta 3 mineral", de: "Ein spezielles Gebäude, das 3 Erz kostet", nl: "Een speciaal gebouw dat 3 erts kost" },
          { en: "A development card that allows sea travel", es: "Una carta de desarrollo que permite viajar por mar", de: "Eine Entwicklungskarte, die Seereisen ermöglicht", nl: "Een ontwikkelingskaart die zeereizen mogelijk maakt" },
          { en: "A bonus hex that produces all resources", es: "Un hexágono de bonificación que produce todos los recursos", de: "Ein Bonusfeld, das alle Ressourcen produziert", nl: "Een bonushex die alle hulpbronnen produceert" }
        ],
        correct: 0,
        explanation: {
          en: "Ports are coastal intersections where you can build settlements to gain better trading ratios. Generic ports offer 3:1 trades (vs 4:1 standard), while specific resource ports offer 2:1 trades for their designated resource.",
          es: "Los puertos son intersecciones costeras donde puedes construir asentamientos para obtener mejores ratios de comercio. Los puertos genéricos ofrecen intercambios 3:1 (vs 4:1 estándar), mientras que los puertos de recursos específicos ofrecen intercambios 2:1 para su recurso designado.",
          de: "Häfen sind Küstenkreuzungen, an denen du Siedlungen bauen kannst, um bessere Handelsverhältnisse zu erhalten. Generische Häfen bieten 3:1-Tausch (vs. 4:1-Standard), während spezifische Ressourcenhäfen 2:1-Tausch für ihre bestimmte Ressource bieten.",
          nl: "Havens zijn kustkruispunten waar je nederzettingen kunt bouwen om betere ruilratio's te krijgen. Generieke havens bieden 3:1 ruilen (vs 4:1 standaard), terwijl specifieke hulpbronhavens 2:1 ruilen bieden voor hun aangewezen hulpbron."
        }
      },
      {
        question: {
          en: "How many 3:1 generic ports are on the standard Catan board?",
          es: "¿Cuántos puertos genéricos 3:1 hay en el tablero estándar de Catan?",
          de: "Wie viele generische 3:1-Häfen gibt es auf dem Standard-Catan-Brett?",
          nl: "Hoeveel 3:1 generieke havens zijn er op het standaard Catan-bord?"
        },
        options: [
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "5", es: "5", de: "5", nl: "5" }
        ],
        correct: 2,
        explanation: {
          en: "There are 4 generic 3:1 ports and 5 specific 2:1 resource ports (one for each resource type) on the standard Catan board, totaling 9 ports. Controlling ports significantly improves your trading flexibility.",
          es: "Hay 4 puertos genéricos 3:1 y 5 puertos de recursos específicos 2:1 (uno para cada tipo de recurso) en el tablero estándar de Catan, totalizando 9 puertos. Controlar puertos mejora significativamente tu flexibilidad de comercio.",
          de: "Es gibt 4 generische 3:1-Häfen und 5 spezifische 2:1-Ressourcenhäfen (einen für jeden Ressourcentyp) auf dem Standard-Catan-Brett, insgesamt 9 Häfen. Die Kontrolle von Häfen verbessert deine Handelsflexibilität erheblich.",
          nl: "Er zijn 4 generieke 3:1 havens en 5 specifieke 2:1 hulpbronhavens (één voor elk hulpbrontype) op het standaard Catan-bord, in totaal 9 havens. Het beheersen van havens verbetert je handelsflexibiliteit aanzienlijk."
        }
      },
      {
        question: {
          en: "What strategic advantage does building on a port give you?",
          es: "¿Qué ventaja estratégica te da construir en un puerto?",
          de: "Welchen strategischen Vorteil gibt dir das Bauen an einem Hafen?",
          nl: "Welk strategisch voordeel geeft bouwen op een haven je?"
        },
        options: [
          { en: "Better resource trading efficiency", es: "Mejor eficiencia de comercio de recursos", de: "Bessere Ressourcen-Handelseffizienz", nl: "Betere efficiëntie van hulpbronnenhandel" },
          { en: "Extra victory point", es: "Punto de victoria extra", de: "Zusätzlicher Siegpunkt", nl: "Extra overwinningspunt" },
          { en: "Protection from the robber", es: "Protección del ladrón", de: "Schutz vor dem Räuber", nl: "Bescherming tegen de rover" },
          { en: "Double resource production", es: "Producción de recursos doble", de: "Doppelte Ressourcenproduktion", nl: "Dubbele hulpbronnenproductie" }
        ],
        correct: 0,
        explanation: {
          en: "Ports improve your trading efficiency by offering better ratios (3:1 or 2:1 instead of 4:1). This allows you to convert abundant resources into needed ones more effectively, which is especially valuable when certain resources are scarce.",
          es: "Los puertos mejoran tu eficiencia comercial al ofrecer mejores ratios (3:1 o 2:1 en lugar de 4:1). Esto te permite convertir recursos abundantes en los necesarios de manera más efectiva, lo cual es especialmente valioso cuando ciertos recursos son escasos.",
          de: "Häfen verbessern deine Handelseffizienz, indem sie bessere Verhältnisse bieten (3:1 oder 2:1 statt 4:1). Dies ermöglicht es dir, reichlich vorhandene Ressourcen effektiver in benötigte umzuwandeln, was besonders wertvoll ist, wenn bestimmte Ressourcen knapp sind.",
          nl: "Havens verbeteren je handelsefficiëntie door betere ratio's te bieden (3:1 of 2:1 in plaats van 4:1). Dit stelt je in staat om overvloedige hulpbronnen effectiever om te zetten in benodigde, wat vooral waardevol is wanneer bepaalde hulpbronnen schaars zijn."
        }
      },
      {
        question: {
          en: "Can you trade resources with other players at any time?",
          es: "¿Puedes intercambiar recursos con otros jugadores en cualquier momento?",
          de: "Kannst du jederzeit Ressourcen mit anderen Spielern tauschen?",
          nl: "Kun je op elk moment hulpbronnen ruilen met andere spelers?"
        },
        options: [
          { en: "Yes, even during other players' turns", es: "Sí, incluso durante los turnos de otros jugadores", de: "Ja, sogar während der Züge anderer Spieler", nl: "Ja, zelfs tijdens de beurten van andere spelers" },
          { en: "Only during your own turn", es: "Solo durante tu propio turno", de: "Nur während deines eigenen Zuges", nl: "Alleen tijdens je eigen beurt" },
          { en: "Only after rolling the dice", es: "Solo después de tirar los dados", de: "Nur nach dem Würfeln", nl: "Alleen na het gooien van de dobbelstenen" },
          { en: "Only if you have a port", es: "Solo si tienes un puerto", de: "Nur wenn du einen Hafen hast", nl: "Alleen als je een haven hebt" }
        ],
        correct: 1,
        explanation: {
          en: "Player-to-player trading can only occur during your own turn, after you've rolled the dice. You can negotiate with any players and make multiple trades. Trading with the bank or ports is also limited to your turn.",
          es: "El intercambio entre jugadores solo puede ocurrir durante tu propio turno, después de haber tirado los dados. Puedes negociar con cualquier jugador y hacer múltiples intercambios. El comercio con el banco o puertos también está limitado a tu turno.",
          de: "Der Handel zwischen Spielern kann nur während deines eigenen Zuges stattfinden, nachdem du gewürfelt hast. Du kannst mit allen Spielern verhandeln und mehrere Tauschgeschäfte machen. Der Handel mit der Bank oder Häfen ist ebenfalls auf deinen Zug beschränkt.",
          nl: "Ruilen tussen spelers kan alleen plaatsvinden tijdens je eigen beurt, nadat je de dobbelstenen hebt gegooid. Je kunt onderhandelen met alle spelers en meerdere ruilen maken. Handelen met de bank of havens is ook beperkt tot je beurt."
        }
      },
      {
        question: {
          en: "What is the benefit of having settlements on three different numbers?",
          es: "¿Cuál es el beneficio de tener asentamientos en tres números diferentes?",
          de: "Was ist der Vorteil, Siedlungen auf drei verschiedenen Zahlen zu haben?",
          nl: "Wat is het voordeel van het hebben van nederzettingen op drie verschillende nummers?"
        },
        options: [
          { en: "More consistent resource production across different dice rolls", es: "Producción de recursos más consistente en diferentes tiradas de dados", de: "Konsistentere Ressourcenproduktion über verschiedene Würfelwürfe", nl: "Meer consistente hulpbronnenproductie over verschillende dobbelsteenworp" },
          { en: "Automatic victory point", es: "Punto de victoria automático", de: "Automatischer Siegpunkt", nl: "Automatisch overwinningspunt" },
          { en: "Better trading ratios", es: "Mejores ratios de comercio", de: "Bessere Handelsverhältnisse", nl: "Betere ruilratio's" },
          { en: "Protection from robber", es: "Protección del ladrón", de: "Schutz vor dem Räuber", nl: "Bescherming tegen rover" }
        ],
        correct: 0,
        explanation: {
          en: "Diversifying across different numbers ensures more reliable resource income. If you build on 4, 6, and 10, you'll produce resources on three different rolls instead of relying on just one or two numbers, reducing the impact of unlucky dice rolls.",
          es: "Diversificar en diferentes números asegura un ingreso de recursos más confiable. Si construyes en 4, 6 y 10, producirás recursos en tres tiradas diferentes en lugar de depender de solo uno o dos números, reduciendo el impacto de tiradas de dados desafortunadas.",
          de: "Die Diversifizierung über verschiedene Zahlen gewährleistet zuverlässigere Ressourceneinkommen. Wenn du auf 4, 6 und 10 baust, produzierst du Ressourcen bei drei verschiedenen Würfen, anstatt dich auf nur eine oder zwei Zahlen zu verlassen, was die Auswirkungen von Pech-Würfen reduziert.",
          nl: "Diversifiëren over verschillende nummers zorgt voor betrouwbaardere hulpbronneninkomsten. Als je bouwt op 4, 6 en 10, produceer je hulpbronnen bij drie verschillende worpen in plaats van te vertrouwen op slechts één of twee nummers, waardoor de impact van ongelukkige dobbelsteenworp wordt verminderd."
        }
      },
      {
        question: {
          en: "What happens if the development card deck runs out?",
          es: "¿Qué sucede si se acaba el mazo de cartas de desarrollo?",
          de: "Was passiert, wenn das Entwicklungskarten-Deck aufgebraucht ist?",
          nl: "Wat gebeurt er als het ontwikkelingskaartendeck opraakt?"
        },
        options: [
          { en: "No more development cards can be bought", es: "No se pueden comprar más cartas de desarrollo", de: "Keine weiteren Entwicklungskarten können gekauft werden", nl: "Er kunnen geen ontwikkelingskaarten meer worden gekocht" },
          { en: "The deck is reshuffled", es: "El mazo se baraja de nuevo", de: "Das Deck wird neu gemischt", nl: "Het deck wordt opnieuw geschud" },
          { en: "Game ends immediately", es: "El juego termina inmediatamente", de: "Das Spiel endet sofort", nl: "Het spel eindigt onmiddellijk" },
          { en: "Players must trade their cards", es: "Los jugadores deben intercambiar sus cartas", de: "Spieler müssen ihre Karten tauschen", nl: "Spelers moeten hun kaarten ruilen" }
        ],
        correct: 0,
        explanation: {
          en: "There are only 25 development cards in total. Once they're all purchased, no more can be bought for the rest of the game. This is rare but can happen in longer games with heavy development card buying.",
          es: "Solo hay 25 cartas de desarrollo en total. Una vez que todas se compran, no se pueden comprar más por el resto del juego. Esto es raro pero puede suceder en juegos más largos con mucha compra de cartas de desarrollo.",
          de: "Es gibt insgesamt nur 25 Entwicklungskarten. Sobald sie alle gekauft sind, können für den Rest des Spiels keine weiteren gekauft werden. Dies ist selten, kann aber in längeren Spielen mit starkem Entwicklungskartenkauf vorkommen.",
          nl: "Er zijn in totaal slechts 25 ontwikkelingskaarten. Zodra ze allemaal zijn gekocht, kunnen er voor de rest van het spel geen meer worden gekocht. Dit is zeldzaam maar kan gebeuren in langere spellen met veel ontwikkelingskaartenaankopen."
        }
      },
      {
        question: {
          en: "What is the minimum distance a settlement must be from another settlement?",
          es: "¿Cuál es la distancia mínima que debe haber entre un asentamiento y otro?",
          de: "Was ist der Mindestabstand, den eine Siedlung von einer anderen haben muss?",
          nl: "Wat is de minimale afstand die een nederzetting moet hebben van een andere nederzetting?"
        },
        options: [
          { en: "1 edge away (at least 1 road space between)", es: "1 borde de distancia (al menos 1 espacio de camino entre ellos)", de: "1 Kante entfernt (mindestens 1 Straßenabstand dazwischen)", nl: "1 rand verwijderd (minstens 1 wegafstand ertussen)" },
          { en: "2 edges away", es: "2 bordes de distancia", de: "2 Kanten entfernt", nl: "2 randen verwijderd" },
          { en: "3 edges away", es: "3 bordes de distancia", de: "3 Kanten entfernt", nl: "3 randen verwijderd" },
          { en: "No minimum distance", es: "Sin distancia mínima", de: "Kein Mindestabstand", nl: "Geen minimale afstand" }
        ],
        correct: 0,
        explanation: {
          en: "Settlements must be at least 2 intersections apart, meaning at least 1 road space (edge) must separate them. This prevents players from blocking each other completely and ensures strategic placement choices.",
          es: "Los asentamientos deben estar separados por al menos 2 intersecciones, lo que significa que al menos 1 espacio de camino (borde) debe separarlos. Esto evita que los jugadores se bloqueen completamente y asegura opciones de colocación estratégica.",
          de: "Siedlungen müssen mindestens 2 Kreuzungen auseinander liegen, was bedeutet, dass mindestens 1 Straßenabstand (Kante) sie trennen muss. Dies verhindert, dass Spieler sich gegenseitig vollständig blockieren, und gewährleistet strategische Platzierungsentscheidungen.",
          nl: "Nederzettingen moeten minstens 2 kruispunten uit elkaar liggen, wat betekent dat er minstens 1 wegafstand (rand) tussen moet zitten. Dit voorkomt dat spelers elkaar volledig blokkeren en zorgt voor strategische plaatsingskeuzes."
        }
      },
      {
        question: {
          en: "How many resource hexes (excluding desert) are on the standard board?",
          es: "¿Cuántos hexágonos de recursos (excluyendo el desierto) hay en el tablero estándar?",
          de: "Wie viele Ressourcenfelder (ohne Wüste) gibt es auf dem Standardbrett?",
          nl: "Hoeveel hulpbronhexen (exclusief woestijn) zijn er op het standaardbord?"
        },
        options: [
          { en: "16", es: "16", de: "16", nl: "16" },
          { en: "18", es: "18", de: "18", nl: "18" },
          { en: "19", es: "19", de: "19", nl: "19" },
          { en: "20", es: "20", de: "20", nl: "20" }
        ],
        correct: 1,
        explanation: {
          en: "The standard Catan board has 19 hexes total: 18 resource-producing hexes (4 forest, 4 pasture, 4 fields, 3 hills, 3 mountains) plus 1 desert. The distribution ensures balanced resource availability.",
          es: "El tablero estándar de Catan tiene 19 hexágonos en total: 18 hexágonos que producen recursos (4 bosques, 4 pastos, 4 campos, 3 colinas, 3 montañas) más 1 desierto. La distribución asegura una disponibilidad equilibrada de recursos.",
          de: "Das Standard-Catan-Brett hat insgesamt 19 Felder: 18 ressourcenproduzierende Felder (4 Wald, 4 Weide, 4 Felder, 3 Hügel, 3 Berge) plus 1 Wüste. Die Verteilung gewährleistet eine ausgewogene Ressourcenverfügbarkeit.",
          nl: "Het standaard Catan-bord heeft in totaal 19 hexen: 18 hulpbronproducerende hexen (4 bos, 4 weide, 4 velden, 3 heuvels, 3 bergen) plus 1 woestijn. De verdeling zorgt voor gebalanceerde hulpbronbeschikbaarheid."
        }
      },
      {
        question: {
          en: "What is the strategic importance of controlling ore hexes?",
          es: "¿Cuál es la importancia estratégica de controlar hexágonos de mineral?",
          de: "Was ist die strategische Bedeutung der Kontrolle von Erzfeldern?",
          nl: "Wat is de strategische belangrijkheid van het beheersen van ertshexen?"
        },
        options: [
          { en: "Ore is needed for both cities and development cards", es: "El mineral se necesita tanto para ciudades como para cartas de desarrollo", de: "Erz wird sowohl für Städte als auch für Entwicklungskarten benötigt", nl: "Erts is nodig voor zowel steden als ontwikkelingskaarten" },
          { en: "Ore produces double resources", es: "El mineral produce recursos dobles", de: "Erz produziert doppelte Ressourcen", nl: "Erts produceert dubbele hulpbronnen" },
          { en: "Ore hexes cannot have the robber placed on them", es: "Los hexágonos de mineral no pueden tener al ladrón colocado en ellos", de: "Auf Erzfeldern kann der Räuber nicht platziert werden", nl: "Ertshexen kunnen de rover niet op zich geplaatst krijgen" },
          { en: "Ore allows you to move settlements", es: "El mineral te permite mover asentamientos", de: "Erz ermöglicht es dir, Siedlungen zu bewegen", nl: "Erts stelt je in staat nederzettingen te verplaatsen" }
        ],
        correct: 0,
        explanation: {
          en: "Ore is essential for mid-to-late game strategy as it's required for cities (3 ore) and development cards (1 ore). Only 3 mountain hexes exist, making ore one of the scarcest resources. Controlling ore production gives significant strategic advantage.",
          es: "El mineral es esencial para la estrategia de mitad a final del juego ya que se requiere para ciudades (3 mineral) y cartas de desarrollo (1 mineral). Solo existen 3 hexágonos de montaña, haciendo del mineral uno de los recursos más escasos. Controlar la producción de mineral da una ventaja estratégica significativa.",
          de: "Erz ist für die Mittel- bis Spätspielstrategie unerlässlich, da es für Städte (3 Erz) und Entwicklungskarten (1 Erz) benötigt wird. Es gibt nur 3 Bergfelder, was Erz zu einer der knappsten Ressourcen macht. Die Kontrolle der Erzproduktion verschafft einen erheblichen strategischen Vorteil.",
          nl: "Erts is essentieel voor midden-tot-late spelstrategie omdat het nodig is voor steden (3 erts) en ontwikkelingskaarten (1 erts). Er bestaan slechts 3 berghexen, waardoor erts een van de schaarsste hulpbronnen is. Het beheersen van ertsproductie geeft een significant strategisch voordeel."
        }
      },
      {
        question: {
          en: "When placing your second settlement during setup, what do you receive?",
          es: "Al colocar tu segundo asentamiento durante la preparación, ¿qué recibes?",
          de: "Was erhältst du, wenn du während der Aufstellung deine zweite Siedlung platzierst?",
          nl: "Wanneer je je tweede nederzetting plaatst tijdens de opzet, wat ontvang je?"
        },
        options: [
          { en: "Resources from all adjacent hexes", es: "Recursos de todos los hexágonos adyacentes", de: "Ressourcen von allen angrenzenden Feldern", nl: "Hulpbronnen van alle aangrenzende hexen" },
          { en: "One resource of your choice", es: "Un recurso de tu elección", de: "Eine Ressource deiner Wahl", nl: "Een hulpbron naar keuze" },
          { en: "No resources, only placement", es: "Sin recursos, solo colocación", de: "Keine Ressourcen, nur Platzierung", nl: "Geen hulpbronnen, alleen plaatsing" },
          { en: "Two development cards", es: "Dos cartas de desarrollo", de: "Zwei Entwicklungskarten", nl: "Twee ontwikkelingskaarten" }
        ],
        correct: 0,
        explanation: {
          en: "When you place your second settlement during setup, you immediately receive one resource card for each terrain hex adjacent to that settlement. This helps players start with different resources based on their placement strategy.",
          es: "Cuando colocas tu segundo asentamiento durante la preparación, inmediatamente recibes una carta de recurso por cada hexágono de terreno adyacente a ese asentamiento. Esto ayuda a los jugadores a comenzar con diferentes recursos según su estrategia de colocación.",
          de: "Wenn du während der Aufstellung deine zweite Siedlung platzierst, erhältst du sofort eine Ressourcenkarte für jedes Geländefeld neben dieser Siedlung. Dies hilft Spielern, mit verschiedenen Ressourcen basierend auf ihrer Platzierungsstrategie zu beginnen.",
          nl: "Wanneer je je tweede nederzetting plaatst tijdens de opzet, ontvang je onmiddellijk één hulpbronkaart voor elke terreinhex naast die nederzetting. Dit helpt spelers om te beginnen met verschillende hulpbronnen op basis van hun plaatsingsstrategie."
        }
      },
      {
        question: {
          en: "What is the strategic value of controlling a 2:1 harbor?",
          es: "¿Cuál es el valor estratégico de controlar un puerto 2:1?",
          de: "Was ist der strategische Wert, einen 2:1-Hafen zu kontrollieren?",
          nl: "Wat is de strategische waarde van het beheersen van een 2:1 haven?"
        },
        options: [
          { en: "Trade that specific resource at 2:1 ratio", es: "Intercambiar ese recurso específico a razón 2:1", de: "Diesen spezifischen Ressourcentyp zu 2:1 tauschen", nl: "Ruil die specifieke hulpbron tegen 2:1 verhouding" },
          { en: "Get 2 victory points", es: "Obtener 2 puntos de victoria", de: "2 Siegpunkte erhalten", nl: "Krijg 2 overwinningspunten" },
          { en: "Build ships for free", es: "Construir barcos gratis", de: "Schiffe kostenlos bauen", nl: "Bouw schepen gratis" },
          { en: "Trade any resource at 2:1", es: "Intercambiar cualquier recurso a 2:1", de: "Jede Ressource zu 2:1 tauschen", nl: "Ruil elke hulpbron tegen 2:1" }
        ],
        correct: 0,
        explanation: {
          en: "A 2:1 specialized harbor allows you to trade 2 of the specific resource shown on the harbor for 1 of any other resource. This is very powerful if you have good production of that resource, effectively doubling its value. There's one 2:1 harbor for each of the 5 resource types.",
          es: "Un puerto especializado 2:1 te permite intercambiar 2 del recurso específico que se muestra en el puerto por 1 de cualquier otro recurso. Esto es muy poderoso si tienes buena producción de ese recurso, duplicando efectivamente su valor. Hay un puerto 2:1 para cada uno de los 5 tipos de recursos.",
          de: "Ein spezialisierter 2:1-Hafen ermöglicht es dir, 2 der spezifischen Ressource, die auf dem Hafen angezeigt wird, gegen 1 einer anderen Ressource zu tauschen. Dies ist sehr mächtig, wenn du eine gute Produktion dieser Ressource hast, und verdoppelt effektiv ihren Wert. Es gibt einen 2:1-Hafen für jeden der 5 Ressourcentypen.",
          nl: "Een gespecialiseerde 2:1 haven stelt je in staat om 2 van de specifieke hulpbron die op de haven wordt getoond te ruilen voor 1 van elke andere hulpbron. Dit is zeer krachtig als je goede productie van die hulpbron hebt, wat effectief de waarde verdubbelt. Er is één 2:1 haven voor elk van de 5 hulpbrontypes."
        }
      },
      {
        question: {
          en: "What happens if you play a Knight card?",
          es: "¿Qué pasa si juegas una carta de Caballero?",
          de: "Was passiert, wenn du eine Ritterkarte spielst?",
          nl: "Wat gebeurt er als je een Ridderkaart speelt?"
        },
        options: [
          { en: "Move robber, steal card, counts toward Largest Army", es: "Mueve al ladrón, roba carta, cuenta para Ejército Más Grande", de: "Räuber bewegen, Karte stehlen, zählt zur größten Armee", nl: "Verplaats rover, steel kaart, telt mee voor Grootste Leger" },
          { en: "Get 2 free resources", es: "Obtén 2 recursos gratis", de: "Erhalte 2 kostenlose Ressourcen", nl: "Krijg 2 gratis hulpbronnen" },
          { en: "Build 2 free roads", es: "Construye 2 caminos gratis", de: "Baue 2 kostenlose Straßen", nl: "Bouw 2 gratis wegen" },
          { en: "Block opponent's turn", es: "Bloquea el turno del oponente", de: "Blockiere den Zug des Gegners", nl: "Blokkeer beurt van tegenstander" }
        ],
        correct: 0,
        explanation: {
          en: "Playing a Knight card allows you to move the robber to any hex, then steal a random resource card from a player with a settlement/city adjacent to that hex. The played Knight also counts toward Largest Army (need 3+ knights to claim the 2 victory points).",
          es: "Jugar una carta de Caballero te permite mover al ladrón a cualquier hexágono, luego robar una carta de recurso aleatoria de un jugador con un asentamiento/ciudad adyacente a ese hexágono. El Caballero jugado también cuenta para el Ejército Más Grande (necesitas 3+ caballeros para reclamar los 2 puntos de victoria).",
          de: "Das Spielen einer Ritterkarte ermöglicht es dir, den Räuber auf ein beliebiges Feld zu bewegen und dann eine zufällige Ressourcenkarte von einem Spieler mit einer Siedlung/Stadt neben diesem Feld zu stehlen. Der gespielte Ritter zählt auch zur größten Armee (benötigt 3+ Ritter, um die 2 Siegpunkte zu beanspruchen).",
          nl: "Het spelen van een Ridderkaart stelt je in staat de rover naar elke hex te verplaatsen, dan een willekeurige hulpbronkaart te stelen van een speler met een nederzetting/stad naast die hex. De gespeelde Ridder telt ook mee voor het Grootste Leger (heb 3+ ridders nodig om de 2 overwinningspunten te claimen)."
        }
      },
      {
        question: {
          en: "Can you break another player's road to shorten their Longest Road?",
          es: "¿Puedes romper el camino de otro jugador para acortar su Camino Más Largo?",
          de: "Kannst du die Straße eines anderen Spielers unterbrechen, um seine längste Straße zu verkürzen?",
          nl: "Kun je de weg van een andere speler doorbreken om hun Langste Weg te verkorten?"
        },
        options: [
          { en: "No, roads are permanent", es: "No, los caminos son permanentes", de: "Nein, Straßen sind dauerhaft", nl: "Nee, wegen zijn permanent" },
          { en: "Yes, by building a settlement on their road", es: "Sí, construyendo un asentamiento en su camino", de: "Ja, indem du eine Siedlung auf ihrer Straße baust", nl: "Ja, door een nederzetting op hun weg te bouwen" },
          { en: "Only with development card", es: "Solo con carta de desarrollo", de: "Nur mit Entwicklungskarte", nl: "Alleen met ontwikkelingskaart" },
          { en: "Only during setup", es: "Solo durante la preparación", de: "Nur während der Aufstellung", nl: "Alleen tijdens opzet" }
        ],
        correct: 1,
        explanation: {
          en: "Yes! If you build a settlement on an intersection that's part of another player's road network, you break their road into two separate segments. This can make them lose Longest Road if it reduces their continuous road below the current longest. This is a key strategic move.",
          es: "¡Sí! Si construyes un asentamiento en una intersección que es parte de la red de caminos de otro jugador, rompes su camino en dos segmentos separados. Esto puede hacer que pierdan el Camino Más Largo si reduce su camino continuo por debajo del más largo actual. Este es un movimiento estratégico clave.",
          de: "Ja! Wenn du eine Siedlung auf einer Kreuzung baust, die Teil des Straßennetzwerks eines anderen Spielers ist, unterbrichst du seine Straße in zwei separate Segmente. Dies kann dazu führen, dass sie die längste Straße verlieren, wenn ihre durchgehende Straße unter die aktuell längste reduziert wird. Dies ist ein wichtiger strategischer Zug.",
          nl: "Ja! Als je een nederzetting bouwt op een kruispunt dat deel uitmaakt van het wegennetwerk van een andere speler, breek je hun weg in twee aparte segmenten. Dit kan ervoor zorgen dat ze de Langste Weg verliezen als het hun doorlopende weg verkort tot onder de huidige langste. Dit is een belangrijke strategische zet."
        }
      },
      {
        question: {
          en: "What is the probability of rolling a 2 or 12 in Catan?",
          es: "¿Cuál es la probabilidad de tirar un 2 o 12 en Catan?",
          de: "Wie hoch ist die Wahrscheinlichkeit, eine 2 oder 12 in Catan zu würfeln?",
          nl: "Wat is de waarschijnlijkheid om een 2 of 12 te gooien in Catan?"
        },
        options: [
          { en: "1 in 36 (about 2.8%) each", es: "1 en 36 (aproximadamente 2,8%) cada uno", de: "1 von 36 (etwa 2,8%) jeweils", nl: "1 op 36 (ongeveer 2,8%) elk" },
          { en: "2 in 36 (about 5.6%) each", es: "2 en 36 (aproximadamente 5,6%) cada uno", de: "2 von 36 (etwa 5,6%) jeweils", nl: "2 op 36 (ongeveer 5,6%) elk" },
          { en: "3 in 36 (about 8.3%) each", es: "3 en 36 (aproximadamente 8,3%) cada uno", de: "3 von 36 (etwa 8,3%) jeweils", nl: "3 op 36 (ongeveer 8,3%) elk" },
          { en: "5 in 36 (about 13.9%) each", es: "5 en 36 (aproximadamente 13,9%) cada uno", de: "5 von 36 (etwa 13,9%) jeweils", nl: "5 op 36 (ongeveer 13,9%) elk" }
        ],
        correct: 0,
        explanation: {
          en: "Both 2 and 12 have only 1 way to be rolled (1+1 and 6+6 respectively), making them the rarest numbers with 1/36 probability each (about 2.8%). These hexes are least productive but can still be valuable in certain strategies, especially if they have scarce resources.",
          es: "Tanto el 2 como el 12 tienen solo 1 forma de ser tirados (1+1 y 6+6 respectivamente), haciéndolos los números más raros con probabilidad de 1/36 cada uno (aproximadamente 2,8%). Estos hexágonos son los menos productivos pero aún pueden ser valiosos en ciertas estrategias, especialmente si tienen recursos escasos.",
          de: "Sowohl 2 als auch 12 haben nur 1 Möglichkeit, gewürfelt zu werden (1+1 bzw. 6+6), was sie zu den seltensten Zahlen mit jeweils 1/36 Wahrscheinlichkeit macht (etwa 2,8%). Diese Felder sind am wenigsten produktiv, können aber in bestimmten Strategien dennoch wertvoll sein, besonders wenn sie knappe Ressourcen haben.",
          nl: "Zowel 2 als 12 hebben slechts 1 manier om gegooid te worden (respectievelijk 1+1 en 6+6), waardoor ze de zeldzaamste nummers zijn met elk 1/36 waarschijnlijkheid (ongeveer 2,8%). Deze hexen zijn het minst productief maar kunnen nog steeds waardevol zijn in bepaalde strategieën, vooral als ze schaarse hulpbronnen hebben."
        }
      },
      {
        question: {
          en: "How many number tokens are in standard Catan?",
          es: "¿Cuántas fichas numéricas hay en Catan estándar?",
          de: "Wie viele Zahlenplättchen gibt es im Standard-Catan?",
          nl: "Hoeveel nummerfiches zijn er in standaard Catan?"
        },
        options: [
          { en: "17", es: "17", de: "17", nl: "17" },
          { en: "18", es: "18", de: "18", nl: "18" },
          { en: "19", es: "19", de: "19", nl: "19" },
          { en: "20", es: "20", de: "20", nl: "20" }
        ],
        correct: 1,
        explanation: {
          en: "There are 18 number tokens in standard Catan (one for each resource hex except the desert). The numbers are: two each of 3, 4, 5, 6, 8, 9, 10, 11, and one each of 2 and 12. No token for 7 since it activates the robber.",
          es: "Hay 18 fichas numéricas en Catan estándar (una para cada hexágono de recurso excepto el desierto). Los números son: dos de cada 3, 4, 5, 6, 8, 9, 10, 11, y uno de cada 2 y 12. No hay ficha para el 7 ya que activa al ladrón.",
          de: "Es gibt 18 Zahlenplättchen im Standard-Catan (eines für jedes Ressourcenfeld außer der Wüste). Die Zahlen sind: jeweils zwei von 3, 4, 5, 6, 8, 9, 10, 11 und jeweils eines von 2 und 12. Kein Plättchen für 7, da es den Räuber aktiviert.",
          nl: "Er zijn 18 nummerfiches in standaard Catan (één voor elke hulpbronhex behalve de woestijn). De nummers zijn: twee van elk 3, 4, 5, 6, 8, 9, 10, 11, en één van elk 2 en 12. Geen fiche voor 7 omdat het de rover activeert."
        }
      },
      {
        question: {
          en: "Can you play multiple development cards in one turn?",
          es: "¿Puedes jugar múltiples cartas de desarrollo en un turno?",
          de: "Kannst du mehrere Entwicklungskarten in einem Zug spielen?",
          nl: "Kun je meerdere ontwikkelingskaarten in één beurt spelen?"
        },
        options: [
          { en: "Yes, as many as you want", es: "Sí, tantas como quieras", de: "Ja, so viele du willst", nl: "Ja, zoveel als je wilt" },
          { en: "No, maximum one per turn", es: "No, máximo una por turno", de: "Nein, maximal eine pro Zug", nl: "Nee, maximaal één per beurt" },
          { en: "Only if they're different types", es: "Solo si son tipos diferentes", de: "Nur wenn sie verschiedene Typen sind", nl: "Alleen als het verschillende types zijn" },
          { en: "Yes, but only Knight cards", es: "Sí, pero solo cartas de Caballero", de: "Ja, aber nur Ritterkarten", nl: "Ja, maar alleen Ridderkaarten" }
        ],
        correct: 1,
        explanation: {
          en: "You can only play one development card per turn (except Victory Point cards which are played immediately when they give you the win). This limit prevents powerful combinations. However, you can buy multiple development cards in one turn if you have the resources.",
          es: "Solo puedes jugar una carta de desarrollo por turno (excepto las cartas de Punto de Victoria que se juegan inmediatamente cuando te dan la victoria). Este límite previene combinaciones poderosas. Sin embargo, puedes comprar múltiples cartas de desarrollo en un turno si tienes los recursos.",
          de: "Du kannst nur eine Entwicklungskarte pro Zug spielen (außer Siegpunkt-Karten, die sofort gespielt werden, wenn sie dir den Sieg geben). Diese Begrenzung verhindert mächtige Kombinationen. Du kannst jedoch mehrere Entwicklungskarten in einem Zug kaufen, wenn du die Ressourcen hast.",
          nl: "Je kunt slechts één ontwikkelingskaart per beurt spelen (behalve Overwinningspunt kaarten die onmiddellijk worden gespeeld wanneer ze je de overwinning geven). Deze limiet voorkomt krachtige combinaties. Je kunt echter meerdere ontwikkelingskaarten in één beurt kopen als je de hulpbronnen hebt."
        }
      },
      {
        question: {
          en: "What is the 'dot value' system on number tokens?",
          es: "¿Qué es el sistema de 'valor de puntos' en las fichas numéricas?",
          de: "Was ist das 'Punktwert'-System auf Zahlenplättchen?",
          nl: "Wat is het 'stippenwaardesysteem' op nummerfiches?"
        },
        options: [
          { en: "Dots show how many resources you get", es: "Los puntos muestran cuántos recursos obtienes", de: "Punkte zeigen, wie viele Ressourcen du bekommst", nl: "Stippen tonen hoeveel hulpbronnen je krijgt" },
          { en: "Dots indicate probability of rolling that number", es: "Los puntos indican la probabilidad de tirar ese número", de: "Punkte zeigen die Wahrscheinlichkeit, diese Zahl zu würfeln", nl: "Stippen geven waarschijnlijkheid aan om dat nummer te gooien" },
          { en: "Dots show victory points", es: "Los puntos muestran puntos de victoria", de: "Punkte zeigen Siegpunkte", nl: "Stippen tonen overwinningspunten" },
          { en: "Dots are just decorative", es: "Los puntos son solo decorativos", de: "Punkte sind nur dekorativ", nl: "Stippen zijn alleen decoratief" }
        ],
        correct: 1,
        explanation: {
          en: "The dots (or pips) on number tokens indicate the statistical probability of that number being rolled with two dice. More dots = more likely. 6 and 8 have 5 dots (most common after 7), while 2 and 12 have 1 dot (least common). This helps players quickly assess hex productivity during setup.",
          es: "Los puntos en las fichas numéricas indican la probabilidad estadística de que se tire ese número con dos dados. Más puntos = más probable. 6 y 8 tienen 5 puntos (más comunes después del 7), mientras que 2 y 12 tienen 1 punto (menos comunes). Esto ayuda a los jugadores a evaluar rápidamente la productividad del hexágono durante la preparación.",
          de: "Die Punkte auf den Zahlenplättchen zeigen die statistische Wahrscheinlichkeit an, dass diese Zahl mit zwei Würfeln gewürfelt wird. Mehr Punkte = wahrscheinlicher. 6 und 8 haben 5 Punkte (am häufigsten nach 7), während 2 und 12 1 Punkt haben (am seltensten). Dies hilft Spielern, die Feldproduktivität während der Aufstellung schnell einzuschätzen.",
          nl: "De stippen op nummerfiches geven de statistische waarschijnlijkheid aan dat dat nummer met twee dobbelstenen wordt gegooid. Meer stippen = waarschijnlijker. 6 en 8 hebben 5 stippen (meest voorkomend na 7), terwijl 2 en 12 1 stip hebben (minst voorkomend). Dit helpt spelers snel de hex-productiviteit tijdens opzet te beoordelen."
        }
      },
      {
        question: {
          en: "What happens if multiple players want to steal from the same victim when moving the robber?",
          es: "¿Qué pasa si múltiples jugadores quieren robar de la misma víctima al mover al ladrón?",
          de: "Was passiert, wenn mehrere Spieler vom selben Opfer stehlen wollen, wenn der Räuber bewegt wird?",
          nl: "Wat gebeurt er als meerdere spelers van hetzelfde slachtoffer willen stelen bij het verplaatsen van de rover?"
        },
        options: [
          { en: "All players steal one card each", es: "Todos los jugadores roban una carta cada uno", de: "Alle Spieler stehlen je eine Karte", nl: "Alle spelers stelen elk één kaart" },
          { en: "Only the active player steals", es: "Solo el jugador activo roba", de: "Nur der aktive Spieler stiehlt", nl: "Alleen de actieve speler steelt" },
          { en: "Players vote on who steals", es: "Los jugadores votan sobre quién roba", de: "Spieler stimmen ab, wer stiehlt", nl: "Spelers stemmen wie steelt" },
          { en: "Highest roll steals", es: "La tirada más alta roba", de: "Höchster Wurf stiehlt", nl: "Hoogste worp steelt" }
        ],
        correct: 1,
        explanation: {
          en: "Only the active player (the one whose turn it is and who moved the robber) can steal a card. Even if multiple players have settlements/cities adjacent to the robber's new location, only the player who moved the robber gets to steal from one victim of their choice.",
          es: "Solo el jugador activo (aquel cuyo turno es y quien movió al ladrón) puede robar una carta. Incluso si múltiples jugadores tienen asentamientos/ciudades adyacentes a la nueva ubicación del ladrón, solo el jugador que movió al ladrón puede robar de una víctima de su elección.",
          de: "Nur der aktive Spieler (derjenige, der am Zug ist und den Räuber bewegt hat) kann eine Karte stehlen. Selbst wenn mehrere Spieler Siedlungen/Städte neben dem neuen Standort des Räubers haben, kann nur der Spieler, der den Räuber bewegt hat, von einem Opfer seiner Wahl stehlen.",
          nl: "Alleen de actieve speler (degene wiens beurt het is en die de rover heeft verplaatst) kan een kaart stelen. Zelfs als meerdere spelers nederzettingen/steden hebben naast de nieuwe locatie van de rover, kan alleen de speler die de rover heeft verplaatst van één slachtoffer naar keuze stelen."
        }
      },
      {
        question: {
          en: "What is the total pip value considered 'good' for a starting settlement placement?",
          es: "¿Qué valor total de pips se considera 'bueno' para la colocación inicial de un asentamiento?",
          de: "Welcher Gesamt-Pip-Wert wird als 'gut' für eine anfängliche Siedlungsplatzierung angesehen?",
          nl: "Wat is de totale pip-waarde die als 'goed' wordt beschouwd voor een startende nederzettingsplaatsing?"
        },
        options: [
          { en: "5-7 pips", es: "5-7 pips", de: "5-7 Pips", nl: "5-7 pips" },
          { en: "8-10 pips", es: "8-10 pips", de: "8-10 Pips", nl: "8-10 pips" },
          { en: "11-13 pips", es: "11-13 pips", de: "11-13 Pips", nl: "11-13 pips" },
          { en: "14-15 pips", es: "14-15 pips", de: "14-15 Pips", nl: "14-15 pips" }
        ],
        correct: 1,
        explanation: {
          en: "A settlement placement with 8-10 total pips across its three adjacent hexes is generally considered good. Maximum possible is 15 (5+5+5 from three hexes with 6 or 8). However, resource diversity and harbor access are also important factors beyond just pip count.",
          es: "Una colocación de asentamiento con 8-10 pips totales en sus tres hexágonos adyacentes se considera generalmente buena. El máximo posible es 15 (5+5+5 de tres hexágonos con 6 u 8). Sin embargo, la diversidad de recursos y el acceso a puertos también son factores importantes más allá del simple conteo de pips.",
          de: "Eine Siedlungsplatzierung mit insgesamt 8-10 Pips über ihre drei angrenzenden Felder wird allgemein als gut angesehen. Das mögliche Maximum ist 15 (5+5+5 von drei Feldern mit 6 oder 8). Ressourcenvielfalt und Hafenzugang sind jedoch auch wichtige Faktoren jenseits der bloßen Pip-Anzahl.",
          nl: "Een nederzettingsplaatsing met 8-10 totale pips over zijn drie aangrenzende hexen wordt over het algemeen als goed beschouwd. Het maximaal mogelijke is 15 (5+5+5 van drie hexen met 6 of 8). Hulpbrondiversiteit en haventoegang zijn echter ook belangrijke factoren naast alleen pip-telling."
        }
      },
      {
        question: {
          en: "Can you trade resources during another player's turn?",
          es: "¿Puedes intercambiar recursos durante el turno de otro jugador?",
          de: "Kannst du während des Zugs eines anderen Spielers Ressourcen tauschen?",
          nl: "Kun je hulpbronnen ruilen tijdens de beurt van een andere speler?"
        },
        options: [
          { en: "Yes, with any player anytime", es: "Sí, con cualquier jugador en cualquier momento", de: "Ja, mit jedem Spieler jederzeit", nl: "Ja, met elke speler op elk moment" },
          { en: "Yes, but only with the active player", es: "Sí, pero solo con el jugador activo", de: "Ja, aber nur mit dem aktiven Spieler", nl: "Ja, maar alleen met de actieve speler" },
          { en: "No, never", es: "No, nunca", de: "Nein, niemals", nl: "Nee, nooit" },
          { en: "Only with bank, not players", es: "Solo con el banco, no con jugadores", de: "Nur mit der Bank, nicht mit Spielern", nl: "Alleen met bank, niet met spelers" }
        ],
        correct: 1,
        explanation: {
          en: "Non-active players can only trade with the active player (whose turn it is), not with each other or the bank. The active player can negotiate and complete multiple trades during their turn, creating opportunities for strategic bargaining and diplomacy.",
          es: "Los jugadores no activos solo pueden comerciar con el jugador activo (de quien es el turno), no entre ellos ni con el banco. El jugador activo puede negociar y completar múltiples intercambios durante su turno, creando oportunidades para negociación estratégica y diplomacia.",
          de: "Nicht-aktive Spieler können nur mit dem aktiven Spieler (der am Zug ist) handeln, nicht untereinander oder mit der Bank. Der aktive Spieler kann während seines Zugs mehrere Geschäfte verhandeln und abschließen, was Möglichkeiten für strategisches Verhandeln und Diplomatie schafft.",
          nl: "Niet-actieve spelers kunnen alleen handelen met de actieve speler (wiens beurt het is), niet met elkaar of met de bank. De actieve speler kan tijdens hun beurt meerdere handelingen onderhandelen en voltooien, wat kansen creëert voor strategisch onderhandelen en diplomatie."
        }
      },
      {
        question: {
          en: "How many harbors are there in standard Catan?",
          es: "¿Cuántos puertos hay en Catan estándar?",
          de: "Wie viele Häfen gibt es im Standard-Catan?",
          nl: "Hoeveel havens zijn er in standaard Catan?"
        },
        options: [
          { en: "7 (4 generic 3:1, 3 specialized 2:1)", es: "7 (4 genéricos 3:1, 3 especializados 2:1)", de: "7 (4 generisch 3:1, 3 spezialisiert 2:1)", nl: "7 (4 generiek 3:1, 3 gespecialiseerd 2:1)" },
          { en: "8 (3 generic 3:1, 5 specialized 2:1)", es: "8 (3 genéricos 3:1, 5 especializados 2:1)", de: "8 (3 generisch 3:1, 5 spezialisiert 2:1)", nl: "8 (3 generiek 3:1, 5 gespecialiseerd 2:1)" },
          { en: "9 (4 generic 3:1, 5 specialized 2:1)", es: "9 (4 genéricos 3:1, 5 especializados 2:1)", de: "9 (4 generisch 3:1, 5 spezialisiert 2:1)", nl: "9 (4 generiek 3:1, 5 gespecialiseerd 2:1)" },
          { en: "10 (5 generic 3:1, 5 specialized 2:1)", es: "10 (5 genéricos 3:1, 5 especializados 2:1)", de: "10 (5 generisch 3:1, 5 spezialisiert 2:1)", nl: "10 (5 generiek 3:1, 5 gespecialiseerd 2:1)" }
        ],
        correct: 2,
        explanation: {
          en: "There are 9 harbors total in standard Catan: 4 generic harbors (3:1 trade for any resource) and 5 specialized harbors (2:1 trade for specific resources - one for each resource type: wood, brick, wheat, sheep, ore).",
          es: "Hay 9 puertos en total en Catan estándar: 4 puertos genéricos (comercio 3:1 por cualquier recurso) y 5 puertos especializados (comercio 2:1 para recursos específicos - uno para cada tipo de recurso: madera, ladrillo, trigo, oveja, mineral).",
          de: "Es gibt insgesamt 9 Häfen im Standard-Catan: 4 generische Häfen (3:1-Handel für jede Ressource) und 5 spezialisierte Häfen (2:1-Handel für spezifische Ressourcen - einen für jeden Ressourcentyp: Holz, Lehm, Getreide, Wolle, Erz).",
          nl: "Er zijn in totaal 9 havens in standaard Catan: 4 generieke havens (3:1 ruil voor elke hulpbron) en 5 gespecialiseerde havens (2:1 ruil voor specifieke hulpbronnen - één voor elk hulpbrontype: hout, baksteen, tarwe, schaap, erts)."
        }
      },
      {
        question: {
          en: "What happens if a player has exactly 7 cards when a 7 is rolled?",
          es: "¿Qué pasa si un jugador tiene exactamente 7 cartas cuando se tira un 7?",
          de: "Was passiert, wenn ein Spieler genau 7 Karten hat, wenn eine 7 gewürfelt wird?",
          nl: "Wat gebeurt er als een speler precies 7 kaarten heeft wanneer een 7 wordt gegooid?"
        },
        options: [
          { en: "Must discard half (3 cards)", es: "Debe descartar la mitad (3 cartas)", de: "Muss die Hälfte abwerfen (3 Karten)", nl: "Moet de helft weggooien (3 kaarten)" },
          { en: "Nothing, keeps all cards", es: "Nada, mantiene todas las cartas", de: "Nichts, behält alle Karten", nl: "Niets, behoudt alle kaarten" },
          { en: "Must discard 1 card", es: "Debe descartar 1 carta", de: "Muss 1 Karte abwerfen", nl: "Moet 1 kaart weggooien" },
          { en: "Gets to steal from another player", es: "Puede robar de otro jugador", de: "Kann von einem anderen Spieler stehlen", nl: "Mag stelen van een andere speler" }
        ],
        correct: 1,
        explanation: {
          en: "If you have exactly 7 cards, you do NOT have to discard. The discard rule only applies to players with 8 or more resource cards. This makes 7 a 'safe' number to hold, though still risky if you're close to the limit.",
          es: "Si tienes exactamente 7 cartas, NO tienes que descartar. La regla de descarte solo se aplica a jugadores con 8 o más cartas de recursos. Esto hace que 7 sea un número 'seguro' para mantener, aunque sigue siendo arriesgado si estás cerca del límite.",
          de: "Wenn du genau 7 Karten hast, musst du NICHT abwerfen. Die Abwurfregel gilt nur für Spieler mit 8 oder mehr Ressourcenkarten. Dies macht 7 zu einer 'sicheren' Anzahl zum Halten, obwohl es immer noch riskant ist, wenn du nahe am Limit bist.",
          nl: "Als je precies 7 kaarten hebt, hoef je NIET weg te gooien. De weggooi regel geldt alleen voor spelers met 8 of meer hulpbronkaarten. Dit maakt 7 een 'veilig' aantal om te houden, hoewel nog steeds riskant als je dicht bij de limiet zit."
        }
      },
      {
        question: {
          en: "Can you win on another player's turn?",
          es: "¿Puedes ganar durante el turno de otro jugador?",
          de: "Kannst du während des Zugs eines anderen Spielers gewinnen?",
          nl: "Kun je winnen tijdens de beurt van een andere speler?"
        },
        options: [
          { en: "No, only on your own turn", es: "No, solo en tu propio turno", de: "Nein, nur in deinem eigenen Zug", nl: "Nee, alleen tijdens je eigen beurt" },
          { en: "Yes, if someone steals Longest Road/Largest Army from you", es: "Sí, si alguien te roba Camino Más Largo/Ejército Más Grande", de: "Ja, wenn jemand dir längste Straße/größte Armee stiehlt", nl: "Ja, als iemand Langste Weg/Grootste Leger van je steelt" },
          { en: "Yes, if you reach 10 points anytime", es: "Sí, si alcanzas 10 puntos en cualquier momento", de: "Ja, wenn du jederzeit 10 Punkte erreichst", nl: "Ja, als je op elk moment 10 punten bereikt" },
          { en: "Only in special game modes", es: "Solo en modos de juego especiales", de: "Nur in speziellen Spielmodi", nl: "Alleen in speciale spelmodi" }
        ],
        correct: 0,
        explanation: {
          en: "You can only win on your own turn. Even if you have 10+ victory points, you must wait until your turn to declare victory. This is why Victory Point development cards are often kept hidden until your winning turn to prevent opponents from blocking you.",
          es: "Solo puedes ganar en tu propio turno. Incluso si tienes 10+ puntos de victoria, debes esperar hasta tu turno para declarar la victoria. Por eso las cartas de desarrollo de Punto de Victoria a menudo se mantienen ocultas hasta tu turno de victoria para evitar que los oponentes te bloqueen.",
          de: "Du kannst nur in deinem eigenen Zug gewinnen. Selbst wenn du 10+ Siegpunkte hast, musst du bis zu deinem Zug warten, um den Sieg zu erklären. Deshalb werden Siegpunkt-Entwicklungskarten oft bis zu deinem Siegzug versteckt gehalten, um zu verhindern, dass Gegner dich blockieren.",
          nl: "Je kunt alleen winnen tijdens je eigen beurt. Zelfs als je 10+ overwinningspunten hebt, moet je wachten tot je beurt om de overwinning te verklaren. Daarom worden Overwinningspunt ontwikkelingskaarten vaak verborgen gehouden tot je winnende beurt om te voorkomen dat tegenstanders je blokkeren."
        }
      },
      {
        question: {
          en: "What is the maximum number of resources a single settlement can produce in one roll?",
          es: "¿Cuál es el número máximo de recursos que un solo asentamiento puede producir en una tirada?",
          de: "Was ist die maximale Anzahl von Ressourcen, die eine einzelne Siedlung in einem Wurf produzieren kann?",
          nl: "Wat is het maximale aantal hulpbronnen dat een enkele nederzetting in één worp kan produceren?"
        },
        options: [
          { en: "1 resource", es: "1 recurso", de: "1 Ressource", nl: "1 hulpbron" },
          { en: "2 resources", es: "2 recursos", de: "2 Ressourcen", nl: "2 hulpbronnen" },
          { en: "3 resources", es: "3 recursos", de: "3 Ressourcen", nl: "3 hulpbronnen" },
          { en: "4 resources", es: "4 recursos", de: "4 Ressourcen", nl: "4 hulpbronnen" }
        ],
        correct: 2,
        explanation: {
          en: "A settlement can produce a maximum of 3 resources in one roll if all three adjacent hexes have the same number token and that number is rolled. For example, if a settlement touches three hexes all showing '6', rolling a 6 would give 3 resources. This is very rare but possible.",
          es: "Un asentamiento puede producir un máximo de 3 recursos en una tirada si los tres hexágonos adyacentes tienen la misma ficha numérica y se tira ese número. Por ejemplo, si un asentamiento toca tres hexágonos que muestran '6', tirar un 6 daría 3 recursos. Esto es muy raro pero posible.",
          de: "Eine Siedlung kann maximal 3 Ressourcen in einem Wurf produzieren, wenn alle drei angrenzenden Felder das gleiche Zahlenplättchen haben und diese Zahl gewürfelt wird. Zum Beispiel würde eine Siedlung, die drei Felder mit '6' berührt, beim Würfeln einer 6 drei Ressourcen geben. Dies ist sehr selten, aber möglich.",
          nl: "Een nederzetting kan maximaal 3 hulpbronnen in één worp produceren als alle drie aangrenzende hexen hetzelfde nummerfiche hebben en dat nummer wordt gegooid. Bijvoorbeeld, als een nederzetting drie hexen raakt die allemaal '6' tonen, zou het gooien van een 6 drie hulpbronnen geven. Dit is zeer zeldzaam maar mogelijk."
        }
      },
      {
        question: {
          en: "How does the 'distance rule' work for settlement placement?",
          es: "¿Cómo funciona la 'regla de distancia' para la colocación de asentamientos?",
          de: "Wie funktioniert die 'Abstandsregel' für die Siedlungsplatzierung?",
          nl: "Hoe werkt de 'afstandsregel' voor nederzettingsplaatsing?"
        },
        options: [
          { en: "Settlements must be 3 hexes apart", es: "Los asentamientos deben estar separados por 3 hexágonos", de: "Siedlungen müssen 3 Felder auseinander liegen", nl: "Nederzettingen moeten 3 hexen uit elkaar liggen" },
          { en: "Settlements must be 2 edges apart", es: "Los asentamientos deben estar separados por 2 aristas", de: "Siedlungen müssen 2 Kanten auseinander liegen", nl: "Nederzettingen moeten 2 randen uit elkaar liggen" },
          { en: "Settlements must be on different hexes", es: "Los asentamientos deben estar en diferentes hexágonos", de: "Siedlungen müssen auf verschiedenen Feldern sein", nl: "Nederzettingen moeten op verschillende hexen zijn" },
          { en: "No distance requirement", es: "Sin requisito de distancia", de: "Keine Abstandsanforderung", nl: "Geen afstandsvereiste" }
        ],
        correct: 1,
        explanation: {
          en: "The distance rule states that settlements must be at least 2 edges apart. This means there must be at least one vacant intersection between any two settlements. No two settlements (from any players) can be on adjacent intersections. This prevents overcrowding and ensures fair resource distribution.",
          es: "La regla de distancia establece que los asentamientos deben estar separados por al menos 2 aristas. Esto significa que debe haber al menos una intersección vacante entre dos asentamientos. Ningún dos asentamientos (de cualquier jugador) pueden estar en intersecciones adyacentes. Esto previene el hacinamiento y asegura una distribución justa de recursos.",
          de: "Die Abstandsregel besagt, dass Siedlungen mindestens 2 Kanten auseinander liegen müssen. Das bedeutet, dass zwischen zwei Siedlungen mindestens eine freie Kreuzung liegen muss. Keine zwei Siedlungen (von beliebigen Spielern) können auf angrenzenden Kreuzungen sein. Dies verhindert Überfüllung und gewährleistet eine faire Ressourcenverteilung.",
          nl: "De afstandsregel stelt dat nederzettingen minstens 2 randen uit elkaar moeten liggen. Dit betekent dat er minstens één leeg kruispunt tussen twee nederzettingen moet zijn. Geen twee nederzettingen (van welke spelers dan ook) kunnen op aangrenzende kruispunten zijn. Dit voorkomt overbevolking en zorgt voor eerlijke hulpbrondistributie."
        }
      },
      {
        question: {
          en: "What advantage does going last in setup provide?",
          es: "¿Qué ventaja proporciona ir último en la preparación?",
          de: "Welchen Vorteil bietet es, bei der Aufstellung als Letzter zu gehen?",
          nl: "Welk voordeel biedt het om als laatste te gaan in de opzet?"
        },
        options: [
          { en: "Extra resources", es: "Recursos extra", de: "Extra Ressourcen", nl: "Extra hulpbronnen" },
          { en: "Two consecutive placements", es: "Dos colocaciones consecutivas", de: "Zwei aufeinanderfolgende Platzierungen", nl: "Twee opeenvolgende plaatsingen" },
          { en: "Free development card", es: "Carta de desarrollo gratis", de: "Kostenlose Entwicklungskarte", nl: "Gratis ontwikkelingskaart" },
          { en: "First turn advantage", es: "Ventaja del primer turno", de: "Erster-Zug-Vorteil", nl: "Eerste beurt voordeel" }
        ],
        correct: 1,
        explanation: {
          en: "Going last in setup means you place your first settlement last (4th), but then immediately place your second settlement first (reverse order). This gives you two back-to-back placements, allowing you to secure a strong position or grab complementary resources without opponents interfering between your picks.",
          es: "Ir último en la preparación significa que colocas tu primer asentamiento último (4°), pero luego inmediatamente colocas tu segundo asentamiento primero (orden inverso). Esto te da dos colocaciones consecutivas, permitiéndote asegurar una posición fuerte u obtener recursos complementarios sin que los oponentes interfieran entre tus elecciones.",
          de: "Als Letzter in der Aufstellung zu gehen bedeutet, dass du deine erste Siedlung als Letzter (4.) platzierst, aber dann sofort deine zweite Siedlung als Erster (umgekehrte Reihenfolge) platzierst. Dies gibt dir zwei aufeinanderfolgende Platzierungen, sodass du eine starke Position sichern oder komplementäre Ressourcen ergattern kannst, ohne dass Gegner zwischen deinen Auswahlen eingreifen.",
          nl: "Als laatste gaan in de opzet betekent dat je je eerste nederzetting als laatste (4e) plaatst, maar dan onmiddellijk je tweede nederzetting als eerste plaatst (omgekeerde volgorde). Dit geeft je twee achtereenvolgende plaatsingen, waardoor je een sterke positie kunt veiligstellen of complementaire hulpbronnen kunt pakken zonder dat tegenstanders tussen je keuzes ingrijpen."
        }
      },
      {
        question: {
          en: "Can you trade with the bank on another player's turn?",
          es: "¿Puedes comerciar con el banco durante el turno de otro jugador?",
          de: "Kannst du während des Zugs eines anderen Spielers mit der Bank handeln?",
          nl: "Kun je met de bank handelen tijdens de beurt van een andere speler?"
        },
        options: [
          { en: "Yes, anytime", es: "Sí, en cualquier momento", de: "Ja, jederzeit", nl: "Ja, op elk moment" },
          { en: "No, only on your turn", es: "No, solo en tu turno", de: "Nein, nur in deinem Zug", nl: "Nee, alleen tijdens je beurt" },
          { en: "Only with harbors", es: "Solo con puertos", de: "Nur mit Häfen", nl: "Alleen met havens" },
          { en: "Only after rolling", es: "Solo después de tirar", de: "Nur nach dem Würfeln", nl: "Alleen na het gooien" }
        ],
        correct: 1,
        explanation: {
          en: "You can only trade with the bank (maritime trade) during your own turn. This includes both standard 4:1 trades and improved harbor trades (3:1 or 2:1). All trading activities - with bank or other players - happen only during the active player's turn.",
          es: "Solo puedes comerciar con el banco (comercio marítimo) durante tu propio turno. Esto incluye tanto los intercambios estándar 4:1 como los intercambios mejorados de puerto (3:1 o 2:1). Todas las actividades comerciales, con el banco u otros jugadores, ocurren solo durante el turno del jugador activo.",
          de: "Du kannst nur während deines eigenen Zugs mit der Bank (maritimer Handel) handeln. Dies umfasst sowohl Standard-4:1-Geschäfte als auch verbesserte Hafengeschäfte (3:1 oder 2:1). Alle Handelsaktivitäten - mit der Bank oder anderen Spielern - finden nur während des Zugs des aktiven Spielers statt.",
          nl: "Je kunt alleen met de bank (maritieme handel) handelen tijdens je eigen beurt. Dit omvat zowel standaard 4:1 handelingen als verbeterde havenhandelingen (3:1 of 2:1). Alle handelsactiviteiten - met de bank of andere spelers - gebeuren alleen tijdens de beurt van de actieve speler."
        }
      },
      {
        question: {
          en: "What is the strategic importance of wheat in Catan?",
          es: "¿Cuál es la importancia estratégica del trigo en Catan?",
          de: "Was ist die strategische Bedeutung von Getreide in Catan?",
          nl: "Wat is het strategische belang van tarwe in Catan?"
        },
        options: [
          { en: "Most common resource", es: "Recurso más común", de: "Häufigste Ressource", nl: "Meest voorkomende hulpbron" },
          { en: "Required for all building types", es: "Requerido para todos los tipos de construcción", de: "Erforderlich für alle Bautypen", nl: "Vereist voor alle bouwtypes" },
          { en: "Needed for settlements, cities, and dev cards", es: "Necesario para asentamientos, ciudades y cartas de desarrollo", de: "Benötigt für Siedlungen, Städte und Entwicklungskarten", nl: "Nodig voor nederzettingen, steden en ontwikkelingskaarten" },
          { en: "Worth double victory points", es: "Vale el doble de puntos de victoria", de: "Doppelte Siegpunkte wert", nl: "Dubbele overwinningspunten waard" }
        ],
        correct: 2,
        explanation: {
          en: "Wheat is strategically crucial because it's required for settlements (1 wheat), cities (2 wheat), and development cards (1 wheat). This makes it needed throughout the entire game, from early expansion to late-game development. Players who secure good wheat production have more strategic flexibility.",
          es: "El trigo es estratégicamente crucial porque se requiere para asentamientos (1 trigo), ciudades (2 trigo) y cartas de desarrollo (1 trigo). Esto lo hace necesario durante todo el juego, desde la expansión temprana hasta el desarrollo de final del juego. Los jugadores que aseguran buena producción de trigo tienen más flexibilidad estratégica.",
          de: "Getreide ist strategisch entscheidend, weil es für Siedlungen (1 Getreide), Städte (2 Getreide) und Entwicklungskarten (1 Getreide) benötigt wird. Dies macht es während des gesamten Spiels erforderlich, von der frühen Expansion bis zur späten Entwicklung. Spieler, die gute Getreideproduktion sichern, haben mehr strategische Flexibilität.",
          nl: "Tarwe is strategisch cruciaal omdat het nodig is voor nederzettingen (1 tarwe), steden (2 tarwe) en ontwikkelingskaarten (1 tarwe). Dit maakt het nodig gedurende het hele spel, van vroege expansie tot late-game ontwikkeling. Spelers die goede tarweproductie veiligstellen hebben meer strategische flexibiliteit."
        }
      },
      {
        question: {
          en: "How many cities can a player have simultaneously?",
          es: "¿Cuántas ciudades puede tener un jugador simultáneamente?",
          de: "Wie viele Städte kann ein Spieler gleichzeitig haben?",
          nl: "Hoeveel steden kan een speler gelijktijdig hebben?"
        },
        options: [
          { en: "Maximum 3", es: "Máximo 3", de: "Maximal 3", nl: "Maximaal 3" },
          { en: "Maximum 4", es: "Máximo 4", de: "Maximal 4", nl: "Maximaal 4" },
          { en: "Maximum 5", es: "Máximo 5", de: "Maximal 5", nl: "Maximaal 5" },
          { en: "Unlimited", es: "Ilimitado", de: "Unbegrenzt", nl: "Onbeperkt" }
        ],
        correct: 1,
        explanation: {
          en: "Each player has exactly 4 city pieces, so you can have a maximum of 4 cities on the board simultaneously. Since cities are built by upgrading settlements, having 4 cities means you can have at most 1 settlement remaining (from your initial 5 settlement pieces).",
          es: "Cada jugador tiene exactamente 4 piezas de ciudad, por lo que puedes tener un máximo de 4 ciudades en el tablero simultáneamente. Dado que las ciudades se construyen mejorando asentamientos, tener 4 ciudades significa que puedes tener como máximo 1 asentamiento restante (de tus 5 piezas de asentamiento iniciales).",
          de: "Jeder Spieler hat genau 4 Stadtteile, sodass du maximal 4 Städte gleichzeitig auf dem Brett haben kannst. Da Städte durch Aufwerten von Siedlungen gebaut werden, bedeutet 4 Städte zu haben, dass du höchstens 1 Siedlung übrig haben kannst (von deinen anfänglichen 5 Siedlungsteilen).",
          nl: "Elke speler heeft precies 4 stadsstukken, dus je kunt maximaal 4 steden gelijktijdig op het bord hebben. Omdat steden worden gebouwd door nederzettingen te upgraden, betekent het hebben van 4 steden dat je hoogstens 1 nederzetting over kunt hebben (van je aanvankelijke 5 nederzettingsstukken)."
        }
      },
      {
        question: {
          en: "What happens when the bank runs out of a specific resource?",
          es: "¿Qué pasa cuando el banco se queda sin un recurso específico?",
          de: "Was passiert, wenn der Bank eine bestimmte Ressource ausgeht?",
          nl: "Wat gebeurt er wanneer de bank zonder een specifieke hulpbron komt?"
        },
        options: [
          { en: "Players can no longer produce that resource", es: "Los jugadores ya no pueden producir ese recurso", de: "Spieler können diese Ressource nicht mehr produzieren", nl: "Spelers kunnen die hulpbron niet meer produceren" },
          { en: "Use substitute tokens", es: "Usa fichas sustitutas", de: "Verwende Ersatzmarken", nl: "Gebruik vervangende tokens" },
          { en: "Game must end", es: "El juego debe terminar", de: "Spiel muss enden", nl: "Spel moet eindigen" },
          { en: "Players trade among themselves", es: "Los jugadores comercian entre ellos", de: "Spieler handeln untereinander", nl: "Spelers handelen onderling" }
        ],
        correct: 0,
        explanation: {
          en: "When the bank runs out of a specific resource, players can no longer receive that resource from production until some cards are returned to the bank (through trading, building, or discarding). This scarcity can significantly affect game strategy and makes resource management crucial.",
          es: "Cuando el banco se queda sin un recurso específico, los jugadores ya no pueden recibir ese recurso de la producción hasta que algunas cartas regresen al banco (a través del comercio, construcción o descarte). Esta escasez puede afectar significativamente la estrategia del juego y hace que la gestión de recursos sea crucial.",
          de: "Wenn der Bank eine bestimmte Ressource ausgeht, können Spieler diese Ressource nicht mehr aus der Produktion erhalten, bis einige Karten zur Bank zurückgegeben werden (durch Handel, Bauen oder Abwerfen). Diese Knappheit kann die Spielstrategie erheblich beeinflussen und macht Ressourcenmanagement entscheidend.",
          nl: "Wanneer de bank zonder een specifieke hulpbron komt, kunnen spelers die hulpbron niet meer ontvangen uit productie totdat sommige kaarten terugkeren naar de bank (door handel, bouwen of weggooien). Deze schaarste kan de spelstrategie aanzienlijk beïnvloeden en maakt hulpbronnenbeheer cruciaal."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  } else if (typeof window !== 'undefined') {
    window.level3 = level3;
  }
})();
