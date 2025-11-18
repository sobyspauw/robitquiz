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
