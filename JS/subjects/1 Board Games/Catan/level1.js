// Quiz Template - Level 1: Bord spelletjes - Catan
(function() {
  const level1 = {
    name: {
      en: "Catan - Beginner",
      es: "Catan - Principiante",
      de: "Catan - Anfänger",
      nl: "Catan - Beginner"
    },
    questions: [
      {
        question: {
          en: "How many victory points do you need to win in Catan?",
          es: "¿Cuántos puntos de victoria necesitas para ganar en Catan?",
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
          en: "In Catan, you need 10 victory points to win the game. Points come from settlements (1), cities (2), longest road (2), largest army (2), and development cards.",
          es: "En Catan, necesitas 10 puntos de victoria para ganar el juego. Los puntos provienen de asentamientos (1), ciudades (2), carretera más larga (2), ejército más grande (2) y cartas de desarrollo.",
          de: "In Catan brauchst du 10 Siegpunkte, um das Spiel zu gewinnen. Punkte kommen von Siedlungen (1), Städten (2), längster Straße (2), größter Armee (2) und Entwicklungskarten.",
          nl: "In Catan heb je 10 overwinningspunten nodig om het spel te winnen. Punten komen van nederzettingen (1), steden (2), langste weg (2), grootste leger (2) en ontwikkelingskaarten."
        }
      },
      {
        question: {
          en: "What are the five types of resources in Catan?",
          es: "¿Cuáles son los cinco tipos de recursos en Catan?",
          de: "Was sind die fünf Ressourcentypen in Catan?",
          nl: "Wat zijn de vijf soorten hulpbronnen in Catan?"
        },
        options: [
          { en: "Wood, Brick, Wheat, Ore, Sheep", es: "Madera, Ladrillo, Trigo, Mineral, Oveja", de: "Holz, Lehm, Getreide, Erz, Wolle", nl: "Hout, Steen, Graan, Erts, Wol" },
          { en: "Wood, Stone, Grain, Metal, Cloth", es: "Madera, Piedra, Grano, Metal, Tela", de: "Holz, Stein, Korn, Metall, Stoff", nl: "Hout, Steen, Koren, Metaal, Doek" },
          { en: "Lumber, Clay, Food, Iron, Wool", es: "Madera, Arcilla, Comida, Hierro, Lana", de: "Bauholz, Ton, Nahrung, Eisen, Wolle", nl: "Hout, Klei, Voedsel, IJzer, Wol" },
          { en: "Forest, Desert, Field, Mountain, Pasture", es: "Bosque, Desierto, Campo, Montaña, Pasto", de: "Wald, Wüste, Feld, Berg, Weide", nl: "Bos, Woestijn, Veld, Berg, Weide" }
        ],
        correct: 0,
        explanation: {
          en: "The five resources in Catan are Wood (from forests), Brick (from hills), Wheat (from fields), Ore (from mountains), and Sheep (from pastures).",
          es: "Los cinco recursos en Catan son Madera (de bosques), Ladrillo (de colinas), Trigo (de campos), Mineral (de montañas), y Oveja (de pastos).",
          de: "Die fünf Ressourcen in Catan sind Holz (aus Wäldern), Lehm (aus Hügeln), Getreide (aus Feldern), Erz (aus Bergen) und Wolle (aus Weiden).",
          nl: "De vijf hulpbronnen in Catan zijn Hout (uit bossen), Steen (uit heuvels), Graan (uit velden), Erts (uit bergen) en Wol (uit weiden)."
        }
      },
      {
        question: {
          en: "What happens when a 7 is rolled in Catan?",
          es: "¿Qué pasa cuando se tira un 7 en Catan?",
          de: "Was passiert, wenn eine 7 gewürfelt wird in Catan?",
          nl: "Wat gebeurt er als er een 7 wordt gegooid in Catan?"
        },
        options: [
          { en: "All players get resources", es: "Todos los jugadores obtienen recursos", de: "Alle Spieler erhalten Ressourcen", nl: "Alle spelers krijgen hulpbronnen" },
          { en: "Robber moves, 8+ cards discard half", es: "El ladrón se mueve y los jugadores con 8+ cartas descartan la mitad", de: "Der Räuber bewegt sich und Spieler mit 8+ Karten werfen die Hälfte ab", nl: "De rover verplaatst en spelers met 8+ kaarten gooien de helft weg" },
          { en: "Everyone draws a development card", es: "Todos roban una carta de desarrollo", de: "Jeder zieht eine Entwicklungskarte", nl: "Iedereen trekt een ontwikkelingskaart" },
          { en: "The game ends immediately", es: "El juego termina inmediatamente", de: "Das Spiel endet sofort", nl: "Het spel eindigt onmiddellijk" }
        ],
        correct: 1,
        explanation: {
          en: "When a 7 is rolled, the robber moves to a new hex (blocking production), and all players with 8 or more resource cards must discard half (rounded down).",
          es: "Cuando se tira un 7, el ladrón se mueve a un nuevo hexágono (bloqueando la producción), y todos los jugadores con 8 o más cartas de recursos deben descartar la mitad (redondeado hacia abajo).",
          de: "Wenn eine 7 gewürfelt wird, bewegt sich der Räuber zu einem neuen Feld (blockiert die Produktion), und alle Spieler mit 8 oder mehr Ressourcenkarten müssen die Hälfte abwerfen (abgerundet).",
          nl: "Wanneer een 7 wordt gegooid, verplaatst de rover naar een nieuw veld (blokkeert productie), en alle spelers met 8 of meer hulpbronkaarten moeten de helft weggooien (naar beneden afgerond)."
        }
      },
      {
        question: {
          en: "How many resource cards do you start with in Catan?",
          es: "¿Con cuántas cartas de recursos empiezas en Catan?",
          de: "Mit wie vielen Ressourcenkarten beginnst du in Catan?",
          nl: "Met hoeveel hulpbronkaarten begin je in Catan?"
        },
        options: [
          { en: "0", es: "0", de: "0", nl: "0" },
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "7", es: "7", de: "7", nl: "7" }
        ],
        correct: 2,
        explanation: {
          en: "You start with 4 resource cards in Catan, gained from the resources adjacent to your second settlement placed during setup.",
          es: "Empiezas con 4 cartas de recursos en Catan, obtenidas de los recursos adyacentes a tu segundo asentamiento colocado durante la preparación.",
          de: "Du beginnst mit 4 Ressourcenkarten in Catan, die du von den Ressourcen neben deiner zweiten Siedlung erhältst, die während der Vorbereitung platziert wird.",
          nl: "Je begint met 4 hulpbronkaarten in Catan, verkregen van de hulpbronnen naast je tweede nederzetting geplaatst tijdens de opzet."
        }
      },
      {
        question: {
          en: "What do you need to build a settlement in Catan?",
          es: "¿Qué necesitas para construir un asentamiento en Catan?",
          de: "Was brauchst du, um eine Siedlung in Catan zu bauen?",
          nl: "Wat heb je nodig om een nederzetting te bouwen in Catan?"
        },
        options: [
          { en: "1 Wood, 1 Brick, 1 Wheat, 1 Sheep", es: "1 Madera, 1 Ladrillo, 1 Trigo, 1 Oveja", de: "1 Holz, 1 Lehm, 1 Getreide, 1 Wolle", nl: "1 Hout, 1 Steen, 1 Graan, 1 Wol" },
          { en: "2 Wood, 2 Brick", es: "2 Madera, 2 Ladrillo", de: "2 Holz, 2 Lehm", nl: "2 Hout, 2 Steen" },
          { en: "1 Wood, 1 Brick, 1 Road", es: "1 Madera, 1 Ladrillo, 1 Carretera", de: "1 Holz, 1 Lehm, 1 Straße", nl: "1 Hout, 1 Steen, 1 Weg" },
          { en: "3 Ore, 2 Wheat", es: "3 Mineral, 2 Trigo", de: "3 Erz, 2 Getreide", nl: "3 Erts, 2 Graan" }
        ],
        correct: 0,
        explanation: {
          en: "To build a settlement, you need 1 Wood, 1 Brick, 1 Wheat, and 1 Sheep. Settlements are worth 1 victory point and allow you to collect resources.",
          es: "Para construir un asentamiento, necesitas 1 Madera, 1 Ladrillo, 1 Trigo y 1 Oveja. Los asentamientos valen 1 punto de victoria y te permiten recolectar recursos.",
          de: "Um eine Siedlung zu bauen, brauchst du 1 Holz, 1 Lehm, 1 Getreide und 1 Wolle. Siedlungen sind 1 Siegpunkt wert und erlauben es dir, Ressourcen zu sammeln.",
          nl: "Om een nederzetting te bouwen, heb je 1 Hout, 1 Steen, 1 Graan en 1 Wol nodig. Nederzettingen zijn 1 overwinningspunt waard en stellen je in staat hulpbronnen te verzamelen."
        }
      },
      {
        question: {
          en: "What is required to upgrade a settlement to a city in Catan?",
          es: "¿Qué se requiere para mejorar un asentamiento a una ciudad en Catan?",
          de: "Was ist erforderlich, um eine Siedlung zu einer Stadt in Catan aufzuwerten?",
          nl: "Wat is er nodig om een nederzetting naar een stad te upgraden in Catan?"
        },
        options: [
          { en: "2 Wood, 2 Brick", es: "2 Madera, 2 Ladrillo", de: "2 Holz, 2 Lehm", nl: "2 Hout, 2 Steen" },
          { en: "3 Ore, 2 Wheat", es: "3 Mineral, 2 Trigo", de: "3 Erz, 2 Getreide", nl: "3 Erts, 2 Graan" },
          { en: "1 of each resource", es: "1 de cada recurso", de: "1 von jeder Ressource", nl: "1 van elke hulpbron" },
          { en: "2 Ore, 3 Wheat", es: "2 Mineral, 3 Trigo", de: "2 Erz, 3 Getreide", nl: "2 Erts, 3 Graan" }
        ],
        correct: 1,
        explanation: {
          en: "To upgrade a settlement to a city, you need 3 Ore and 2 Wheat. Cities are worth 2 victory points and produce 2 resources when their number is rolled.",
          es: "Para mejorar un asentamiento a una ciudad, necesitas 3 Mineral y 2 Trigo. Las ciudades valen 2 puntos de victoria y producen 2 recursos cuando se tira su número.",
          de: "Um eine Siedlung zu einer Stadt aufzuwerten, brauchst du 3 Erz und 2 Getreide. Städte sind 2 Siegpunkte wert und produzieren 2 Ressourcen, wenn ihre Zahl gewürfelt wird.",
          nl: "Om een nederzetting naar een stad te upgraden, heb je 3 Erts en 2 Graan nodig. Steden zijn 2 overwinningspunten waard en produceren 2 hulpbronnen wanneer hun nummer wordt gegooid."
        }
      },
      {
        question: {
          en: "How many development cards can you play per turn in Catan?",
          es: "¿Cuántas cartas de desarrollo puedes jugar por turno en Catan?",
          de: "Wie viele Entwicklungskarten kannst du pro Zug in Catan spielen?",
          nl: "Hoeveel ontwikkelingskaarten kun je per beurt spelen in Catan?"
        },
        options: [
          { en: "1", es: "1", de: "1", nl: "1" },
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "As many as you want", es: "Tantas como quieras", de: "So viele du willst", nl: "Zoveel als je wilt" }
        ],
        correct: 0,
        explanation: {
          en: "You can only play 1 development card per turn in Catan, and you cannot play a development card on the same turn you bought it (except Victory Point cards).",
          es: "Solo puedes jugar 1 carta de desarrollo por turno en Catan, y no puedes jugar una carta de desarrollo en el mismo turno que la compraste (excepto cartas de Punto de Victoria).",
          de: "Du kannst nur 1 Entwicklungskarte pro Zug in Catan spielen, und du kannst keine Entwicklungskarte in demselben Zug spielen, in dem du sie gekauft hast (außer Siegpunkt-Karten).",
          nl: "Je kunt slechts 1 ontwikkelingskaart per beurt spelen in Catan, en je kunt geen ontwikkelingskaart spelen in dezelfde beurt waarin je hem kocht (behalve Overwinningspunt kaarten)."
        }
      },
      {
        question: {
          en: "What does the Knight card do in Catan?",
          es: "¿Qué hace la carta de Caballero en Catan?",
          de: "Was macht die Ritterkarte in Catan?",
          nl: "Wat doet de Ridderkaart in Catan?"
        },
        options: [
          { en: "Gives you 2 resources of your choice", es: "Te da 2 recursos de tu elección", de: "Gibt dir 2 Ressourcen deiner Wahl", nl: "Geeft je 2 hulpbronnen naar keuze" },
          { en: "Move robber and steal card", es: "Te permite mover el ladrón y robar una carta", de: "Erlaubt dir, den Räuber zu bewegen und eine Karte zu stehlen", nl: "Laat je de rover verplaatsen en een kaart stelen" },
          { en: "Builds a free road", es: "Construye una carretera gratis", de: "Baut eine kostenlose Straße", nl: "Bouwt een gratis weg" },
          { en: "Gives you a victory point", es: "Te da un punto de victoria", de: "Gibt dir einen Siegpunkt", nl: "Geeft je een overwinningspunt" }
        ],
        correct: 1,
        explanation: {
          en: "The Knight card allows you to move the robber to any hex and steal a random resource card from a player with a settlement/city adjacent to that hex.",
          es: "La carta de Caballero te permite mover el ladrón a cualquier hexágono y robar una carta de recurso aleatoria de un jugador con un asentamiento/ciudad adyacente a ese hexágono.",
          de: "Die Ritterkarte erlaubt es dir, den Räuber zu jedem Feld zu bewegen und eine zufällige Ressourcenkarte von einem Spieler mit einer Siedlung/Stadt neben diesem Feld zu stehlen.",
          nl: "De Ridderkaart stelt je in staat de rover naar elk veld te verplaatsen en een willekeurige hulpbronkaart te stelen van een speler met een nederzetting/stad naast dat veld."
        }
      },
      {
        question: {
          en: "How many Knight cards do you need to get the Largest Army card?",
          es: "¿Cuántas cartas de Caballero necesitas para obtener la carta de Ejército Más Grande?",
          de: "Wie viele Ritterkarten brauchst du, um die Größte Armee-Karte zu bekommen?",
          nl: "Hoeveel Ridderkaarten heb je nodig om de Grootste Leger kaart te krijgen?"
        },
        options: [
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "5", es: "5", de: "5", nl: "5" }
        ],
        correct: 1,
        explanation: {
          en: "You need to play at least 3 Knight cards to be eligible for the Largest Army card, which is worth 2 victory points and can be taken by another player with more knights.",
          es: "Necesitas jugar al menos 3 cartas de Caballero para ser elegible para la carta de Ejército Más Grande, que vale 2 puntos de victoria y puede ser tomada por otro jugador con más caballeros.",
          de: "Du musst mindestens 3 Ritterkarten spielen, um für die Größte Armee-Karte berechtigt zu sein, die 2 Siegpunkte wert ist und von einem anderen Spieler mit mehr Rittern übernommen werden kann.",
          nl: "Je moet minstens 3 Ridderkaarten spelen om in aanmerking te komen voor de Grootste Leger kaart, die 2 overwinningspunten waard is en kan worden overgenomen door een andere speler met meer ridders."
        }
      },
      {
        question: {
          en: "What do you need to build a road in Catan?",
          es: "¿Qué necesitas para construir una carretera en Catan?",
          de: "Was brauchst du, um eine Straße in Catan zu bauen?",
          nl: "Wat heb je nodig om een weg te bouwen in Catan?"
        },
        options: [
          { en: "1 Wood, 1 Brick", es: "1 Madera, 1 Ladrillo", de: "1 Holz, 1 Lehm", nl: "1 Hout, 1 Steen" },
          { en: "2 Wood", es: "2 Madera", de: "2 Holz", nl: "2 Hout" },
          { en: "1 Wood, 1 Sheep", es: "1 Madera, 1 Oveja", de: "1 Holz, 1 Wolle", nl: "1 Hout, 1 Wol" },
          { en: "1 Brick, 1 Ore", es: "1 Ladrillo, 1 Mineral", de: "1 Lehm, 1 Erz", nl: "1 Steen, 1 Erts" }
        ],
        correct: 0,
        explanation: {
          en: "To build a road, you need 1 Wood and 1 Brick. Roads connect your settlements and cities, and the longest continuous road of 5+ segments earns the Longest Road card (2 victory points).",
          es: "Para construir una carretera, necesitas 1 Madera y 1 Ladrillo. Las carreteras conectan tus asentamientos y ciudades, y la carretera continua más larga de 5+ segmentos gana la carta de Carretera Más Larga (2 puntos de victoria).",
          de: "Um eine Straße zu bauen, brauchst du 1 Holz und 1 Lehm. Straßen verbinden deine Siedlungen und Städte, und die längste durchgehende Straße von 5+ Segmenten gewinnt die Längste Straße-Karte (2 Siegpunkte).",
          nl: "Om een weg te bouwen, heb je 1 Hout en 1 Steen nodig. Wegen verbinden je nederzettingen en steden, en de langste aaneengesloten weg van 5+ segmenten verdient de Langste Weg kaart (2 overwinningspunten)."
        }
      },
      {
        question: {
          en: "What does the Monopoly development card do?",
          es: "¿Qué hace la carta de desarrollo Monopolio?",
          de: "Was macht die Monopol-Entwicklungskarte?",
          nl: "Wat doet de Monopolie ontwikkelingskaart?"
        },
        options: [
          { en: "Steals all cards from one player", es: "Roba todas las cartas de un jugador", de: "Stiehlt alle Karten von einem Spieler", nl: "Steelt alle kaarten van één speler" },
          { en: "Get all cards of one resource", es: "Obliga a todos los jugadores a darte todas las cartas de un tipo de recurso", de: "Zwingt alle Spieler, dir alle Karten eines Ressourcentyps zu geben", nl: "Dwingt alle spelers je alle kaarten van één hulpbrontype te geven" },
          { en: "Lets you trade at 2:1 for one turn", es: "Te permite comerciar 2:1 por un turno", de: "Erlaubt dir 2:1 Handel für einen Zug", nl: "Laat je 2:1 handelen voor één beurt" },
          { en: "Builds two free roads", es: "Construye dos carreteras gratis", de: "Baut zwei kostenlose Straßen", nl: "Bouwt twee gratis wegen" }
        ],
        correct: 1,
        explanation: {
          en: "The Monopoly card forces all other players to give you all their resource cards of one type that you choose when playing the card.",
          es: "La carta Monopolio obliga a todos los demás jugadores a darte todas sus cartas de recursos de un tipo que eliges al jugar la carta.",
          de: "Die Monopol-Karte zwingt alle anderen Spieler, dir alle ihre Ressourcenkarten eines Typs zu geben, den du beim Ausspielen der Karte wählst.",
          nl: "De Monopolie kaart dwingt alle andere spelers je alle hulpbronkaarten van één type te geven dat je kiest bij het spelen van de kaart."
        }
      },
      {
        question: {
          en: "How many resource cards can you hold without discarding when a 7 is rolled?",
          es: "¿Cuántas cartas de recursos puedes tener sin descartar cuando se tira un 7?",
          de: "Wie viele Ressourcenkarten kannst du halten, ohne abzuwerfen, wenn eine 7 gewürfelt wird?",
          nl: "Hoeveel hulpbronkaarten kun je houden zonder weg te gooien wanneer een 7 wordt gegooid?"
        },
        options: [
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "7", es: "7", de: "7", nl: "7" },
          { en: "8", es: "8", de: "8", nl: "8" },
          { en: "10", es: "10", de: "10", nl: "10" }
        ],
        correct: 1,
        explanation: {
          en: "You can hold up to 7 resource cards without discarding when a 7 is rolled. If you have 8 or more cards, you must discard half (rounded down).",
          es: "Puedes tener hasta 7 cartas de recursos sin descartar cuando se tira un 7. Si tienes 8 o más cartas, debes descartar la mitad (redondeado hacia abajo).",
          de: "Du kannst bis zu 7 Ressourcenkarten halten, ohne abzuwerfen, wenn eine 7 gewürfelt wird. Wenn du 8 oder mehr Karten hast, musst du die Hälfte abwerfen (abgerundet).",
          nl: "Je kunt tot 7 hulpbronkaarten houden zonder weg te gooien wanneer een 7 wordt gegooid. Als je 8 of meer kaarten hebt, moet je de helft weggooien (naar beneden afgerond)."
        }
      },
      {
        question: {
          en: "What does the Year of Plenty development card do?",
          es: "¿Qué hace la carta de desarrollo Año de Abundancia?",
          de: "Was macht die Entwicklungskarte Jahr des Überflusses?",
          nl: "Wat doet de Jaar van Overvloed ontwikkelingskaart?"
        },
        options: [
          { en: "Get 2 resources from bank", es: "Te da 2 cartas de recursos de tu elección del banco", de: "Gibt dir 2 Ressourcenkarten deiner Wahl von der Bank", nl: "Geeft je 2 hulpbronkaarten naar keuze van de bank" },
          { en: "Doubles all resource production for one turn", es: "Duplica toda la producción de recursos por un turno", de: "Verdoppelt alle Ressourcenproduktion für einen Zug", nl: "Verdubbelt alle hulpbronproductie voor één beurt" },
          { en: "Lets you roll twice", es: "Te permite tirar dos veces", de: "Erlaubt dir zweimal zu würfeln", nl: "Laat je twee keer gooien" },
          { en: "Forces a trade with another player", es: "Fuerza un intercambio con otro jugador", de: "Erzwingt einen Handel mit einem anderen Spieler", nl: "Dwingt een ruil met een andere speler" }
        ],
        correct: 0,
        explanation: {
          en: "Year of Plenty allows you to take any 2 resource cards of your choice from the bank's supply, which can be 2 of the same type or 2 different types.",
          es: "Año de Abundancia te permite tomar cualquier 2 cartas de recursos de tu elección del suministro del banco, que pueden ser 2 del mismo tipo o 2 tipos diferentes.",
          de: "Jahr des Überflusses erlaubt es dir, beliebige 2 Ressourcenkarten deiner Wahl aus dem Bankvorrat zu nehmen, die 2 vom gleichen Typ oder 2 verschiedene Typen sein können.",
          nl: "Jaar van Overvloed stelt je in staat om willekeurig 2 hulpbronkaarten naar keuze te nemen uit de voorraad van de bank, die 2 van hetzelfde type of 2 verschillende types kunnen zijn."
        }
      },
      {
        question: {
          en: "How many tiles make up the main island in base Catan?",
          es: "¿Cuántas fichas forman la isla principal en Catan básico?",
          de: "Wie viele Felder bilden die Hauptinsel im Basis-Catan?",
          nl: "Hoeveel tegels vormen het hoofdeiland in basis Catan?"
        },
        options: [
          { en: "17", es: "17", de: "17", nl: "17" },
          { en: "19", es: "19", de: "19", nl: "19" },
          { en: "21", es: "21", de: "21", nl: "21" },
          { en: "23", es: "23", de: "23", nl: "23" }
        ],
        correct: 1,
        explanation: {
          en: "The main island in base Catan consists of 19 hexagonal tiles: 18 resource-producing tiles (3 fields, 3 forests, 3 pastures, 3 hills, 3 mountains, 3 other) plus 1 desert tile.",
          es: "La isla principal en Catan básico consiste en 19 fichas hexagonales: 18 fichas productoras de recursos (3 campos, 3 bosques, 3 pastos, 3 colinas, 3 montañas, 3 otras) más 1 ficha de desierto.",
          de: "Die Hauptinsel im Basis-Catan besteht aus 19 sechseckigen Feldern: 18 ressourcenproduzierende Felder (3 Felder, 3 Wälder, 3 Weiden, 3 Hügel, 3 Berge, 3 andere) plus 1 Wüstenfeld.",
          nl: "Het hoofdeiland in basis Catan bestaat uit 19 zeshoekige tegels: 18 hulpbron-producerende tegels (3 velden, 3 bossen, 3 weiden, 3 heuvels, 3 bergen, 3 andere) plus 1 woestijntegel."
        }
      },
      {
        question: {
          en: "What happens to the desert tile in Catan?",
          es: "¿Qué pasa con la ficha del desierto en Catan?",
          de: "Was passiert mit dem Wüstenfeld in Catan?",
          nl: "Wat gebeurt er met de woestijntegel in Catan?"
        },
        options: [
          { en: "It produces ore when rolled", es: "Produce mineral cuando se tira", de: "Es produziert Erz, wenn gewürfelt wird", nl: "Het produceert erts wanneer gegooid" },
          { en: "No resources, robber starts here", es: "No produce recursos y comienza con el ladrón", de: "Es produziert keine Ressourcen und beginnt mit dem Räuber", nl: "Het produceert geen hulpbronnen en begint met de rover" },
          { en: "It changes to a random resource each turn", es: "Cambia a un recurso aleatorio cada turno", de: "Es ändert sich jeden Zug zu einer zufälligen Ressource", nl: "Het verandert elke beurt naar een willekeurige hulpbron" },
          { en: "Players can build on it for free", es: "Los jugadores pueden construir en él gratis", de: "Spieler können kostenlos darauf bauen", nl: "Spelers kunnen er gratis op bouwen" }
        ],
        correct: 1,
        explanation: {
          en: "The desert tile produces no resources when its number is rolled and is where the robber starts the game. Players can still build settlements and cities adjacent to it.",
          es: "La ficha del desierto no produce recursos cuando se tira su número y es donde el ladrón comienza el juego. Los jugadores aún pueden construir asentamientos y ciudades adyacentes a él.",
          de: "Das Wüstenfeld produziert keine Ressourcen, wenn seine Zahl gewürfelt wird, und ist der Ort, wo der Räuber das Spiel beginnt. Spieler können trotzdem Siedlungen und Städte daneben bauen.",
          nl: "De woestijntegel produceert geen hulpbronnen wanneer zijn nummer wordt gegooid en is waar de rover het spel begint. Spelers kunnen nog steeds nederzettingen en steden ernaast bouwen."
        }
      },
      {
        question: {
          en: "What is the trading ratio at generic ports in Catan?",
          es: "¿Cuál es la proporción de comercio en puertos genéricos en Catan?",
          de: "Wie ist das Handelsverhältnis an generischen Häfen in Catan?",
          nl: "Wat is de handelsverhouding bij generieke havens in Catan?"
        },
        options: [
          { en: "2:1", es: "2:1", de: "2:1", nl: "2:1" },
          { en: "3:1", es: "3:1", de: "3:1", nl: "3:1" },
          { en: "4:1", es: "4:1", de: "4:1", nl: "4:1" },
          { en: "5:1", es: "5:1", de: "5:1", nl: "5:1" }
        ],
        correct: 1,
        explanation: {
          en: "Generic ports allow you to trade any 3 resource cards of the same type for 1 resource card of any type, improving from the standard 4:1 bank trade.",
          es: "Los puertos genéricos te permiten intercambiar cualquier 3 cartas de recursos del mismo tipo por 1 carta de recurso de cualquier tipo, mejorando del comercio bancario estándar 4:1.",
          de: "Generische Häfen erlauben es dir, beliebige 3 Ressourcenkarten desselben Typs gegen 1 Ressourcenkarte beliebigen Typs zu tauschen, eine Verbesserung gegenüber dem Standard-Bankhandel 4:1.",
          nl: "Generieke havens stellen je in staat om willekeurig 3 hulpbronkaarten van hetzelfde type te ruilen voor 1 hulpbronkaart van elk type, een verbetering ten opzichte van de standaard 4:1 bankhandel."
        }
      },
      {
        question: {
          en: "How many roads must be in your longest road to claim the Longest Road card?",
          es: "¿Cuántas carreteras deben estar en tu carretera más larga para reclamar la carta de Carretera Más Larga?",
          de: "Wie viele Straßen müssen in deiner längsten Straße sein, um die Längste Straße-Karte zu beanspruchen?",
          nl: "Hoeveel wegen moeten in je langste weg zitten om de Langste Weg kaart op te eisen?"
        },
        options: [
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "7", es: "7", de: "7", nl: "7" }
        ],
        correct: 1,
        explanation: {
          en: "You need at least 5 connected road segments to be eligible for the Longest Road card, which is worth 2 victory points and can be taken by another player with a longer road.",
          es: "Necesitas al menos 5 segmentos de carretera conectados para ser elegible para la carta de Carretera Más Larga, que vale 2 puntos de victoria y puede ser tomada por otro jugador con una carretera más larga.",
          de: "Du brauchst mindestens 5 verbundene Straßensegmente, um für die Längste Straße-Karte berechtigt zu sein, die 2 Siegpunkte wert ist und von einem anderen Spieler mit einer längeren Straße übernommen werden kann.",
          nl: "Je hebt minstens 5 verbonden wegsegmenten nodig om in aanmerking te komen voor de Langste Weg kaart, die 2 overwinningspunten waard is en kan worden overgenomen door een andere speler met een langere weg."
        }
      },
      {
        question: {
          en: "What is the maximum number of players in base Catan?",
          es: "¿Cuál es el número máximo de jugadores en Catan básico?",
          de: "Wie ist die maximale Spielerzahl im Basis-Catan?",
          nl: "Wat is het maximale aantal spelers in basis Catan?"
        },
        options: [
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "6", es: "6", de: "6", nl: "6" }
        ],
        correct: 1,
        explanation: {
          en: "Base Catan supports 3-4 players. The 5-6 player extension requires an additional expansion pack that includes extra hexes, number tokens, and player pieces.",
          es: "Catan básico soporta 3-4 jugadores. La extensión de 5-6 jugadores requiere un paquete de expansión adicional que incluye hexágonos extra, fichas de números y piezas de jugadores.",
          de: "Basis-Catan unterstützt 3-4 Spieler. Die 5-6 Spieler-Erweiterung erfordert ein zusätzliches Erweiterungspaket mit extra Feldern, Zahlenplättchen und Spielerteilen.",
          nl: "Basis Catan ondersteunt 3-4 spelers. De 5-6 speler uitbreiding vereist een extra uitbreidingspakket dat extra zeshoeken, nummerfiches en spelerstukken bevat."
        }
      },
      {
        question: {
          en: "What happens when the robber is rolled?",
          es: "¿Qué pasa cuando se lanza el ladrón?",
          de: "Was passiert, wenn der Räuber gewürfelt wird?",
          nl: "Wat gebeurt er wanneer de rover wordt gegooid?"
        },
        options: [
          { en: "All players discard half their cards", es: "Todos los jugadores descartan la mitad de sus cartas", de: "Alle Spieler legen die Hälfte ihrer Karten ab", nl: "Alle spelers gooien de helft van hun kaarten weg" },
          { en: "Players with 8+ cards discard half", es: "Jugadores con 8+ cartas descartan la mitad", de: "Spieler mit 8+ Karten legen die Hälfte ab", nl: "Spelers met 8+ kaarten gooien de helft weg" },
          { en: "Everyone loses all resource cards", es: "Todos pierden todas las cartas de recursos", de: "Alle verlieren alle Rohstoffkarten", nl: "Iedereen verliest alle grondstofkaarten" },
          { en: "Only the current player discards", es: "Solo el jugador actual descarta", de: "Nur der aktuelle Spieler legt ab", nl: "Alleen de huidige speler gooit weg" }
        ],
        correct: 1,
        explanation: {
          en: "When a 7 is rolled, players with 8 or more resource cards must discard half (rounded down). The active player then moves the robber to block a hex and may steal a card from an adjacent settlement owner.",
          es: "Cuando se lanza un 7, los jugadores con 8 o más cartas de recursos deben descartar la mitad (redondeado hacia abajo). El jugador activo luego mueve el ladrón para bloquear un hexágono y puede robar una carta del propietario de un asentamiento adyacente.",
          de: "Wenn eine 7 gewürfelt wird, müssen Spieler mit 8 oder mehr Rohstoffkarten die Hälfte ablegen (abgerundet). Der aktive Spieler bewegt dann den Räuber, um ein Feld zu blockieren und kann eine Karte vom Besitzer einer angrenzenden Siedlung stehlen.",
          nl: "Wanneer een 7 wordt gegooid, moeten spelers met 8 of meer grondstofkaarten de helft weggooien (naar beneden afgerond). De actieve speler verplaatst dan de rover om een zeshoek te blokkeren en mag een kaart stelen van een eigenaar van een aangrenzende nederzetting."
        }
      },
      {
        question: {
          en: "How many knight cards are needed to claim the Largest Army?",
          es: "¿Cuántas cartas de caballero se necesitan para reclamar el Ejército Más Grande?",
          de: "Wie viele Ritterkarten werden benötigt, um die Größte Rittermacht zu beanspruchen?",
          nl: "Hoeveel ridderkaarten zijn nodig om het Grootste Leger op te eisen?"
        },
        options: [
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "5", es: "5", de: "5", nl: "5" }
        ],
        correct: 1,
        explanation: {
          en: "You need at least 3 knight cards played to be eligible for the Largest Army, which grants 2 victory points. This achievement can be taken away if another player plays more knights.",
          es: "Necesitas al menos 3 cartas de caballero jugadas para ser elegible para el Ejército Más Grande, que otorga 2 puntos de victoria. Este logro puede ser quitado si otro jugador juega más caballeros.",
          de: "Du brauchst mindestens 3 gespielte Ritterkarten, um für die Größte Rittermacht berechtigt zu sein, die 2 Siegpunkte gewährt. Diese Errungenschaft kann weggenommen werden, wenn ein anderer Spieler mehr Ritter spielt.",
          nl: "Je hebt minstens 3 gespeelde ridderkaarten nodig om in aanmerking te komen voor het Grootste Leger, wat 2 overwinningspunten geeft. Deze prestatie kan worden weggenomen als een andere speler meer ridders speelt."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  } else if (typeof window !== 'undefined') {
    window.level1 = level1;
  }
})();