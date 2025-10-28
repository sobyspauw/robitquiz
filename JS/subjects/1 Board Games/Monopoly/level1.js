// Quiz Template - Level 1: Bord spelletjes - Monopoly
(function() {
  const level1 = {
    name: {
      en: "Monopoly - Beginner",
      es: "Monopoly - Principiante",
      de: "Monopoly - Anfänger",
      nl: "Monopoly - Beginner"
    },
    questions: [
      {
        question: {
          en: "How much money does each player start with in classic Monopoly?",
          es: "¿Con cuánto dinero comienza cada jugador en el Monopoly clásico?",
          de: "Mit wie viel Geld beginnt jeder Spieler beim klassischen Monopoly?",
          nl: "Met hoeveel geld begint elke speler bij klassiek Monopoly?"
        },
        options: [
          { en: "$1,000", es: "$1,000", de: "$1,000", nl: "$1,000" },
          { en: "$1,500", es: "$1,500", de: "$1,500", nl: "$1,500" },
          { en: "$2,000", es: "$2,000", de: "$2,000", nl: "$2,000" },
          { en: "$2,500", es: "$2,500", de: "$2,500", nl: "$2,500" }
        ],
        correct: 1,
        explanation: {
          en: "Each player starts with $1,500 in classic Monopoly, distributed in specific denominations of bills.",
          es: "Cada jugador comienza con $1,500 en el Monopoly clásico, distribuidos en denominaciones específicas de billetes.",
          de: "Jeder Spieler beginnt mit $1,500 beim klassischen Monopoly, verteilt in spezifischen Stückelungen von Scheinen.",
          nl: "Elke speler begint met $1,500 bij klassiek Monopoly, verdeeld in specifieke coupures van bankbiljetten."
        }
      },
      {
        question: {
          en: "What happens when you land on 'Go to Jail'?",
          es: "¿Qué pasa cuando caes en 'Ve a la Cárcel'?",
          de: "Was passiert, wenn du auf 'Gehe ins Gefängnis' landest?",
          nl: "Wat gebeurt er als je op 'Ga naar de gevangenis' landt?"
        },
        options: [
          { en: "You pay a fine and continue", es: "Pagas una multa y continúas", de: "Du zahlst eine Geldstrafe und spielst weiter", nl: "Je betaalt een boete en gaat verder" },
          { en: "You move directly to Jail", es: "Te mueves directamente a la Cárcel", de: "Du gehst direkt ins Gefängnis", nl: "Je gaat direct naar de gevangenis" },
          { en: "You lose a turn", es: "Pierdes un turno", de: "Du verlierst eine Runde", nl: "Je verliest een beurt" },
          { en: "You collect $200", es: "Recoges $200", de: "Du bekommst $200", nl: "Je krijgt $200" }
        ],
        correct: 1,
        explanation: {
          en: "When you land on 'Go to Jail', you move directly to the Jail square without passing GO or collecting $200.",
          es: "Cuando caes en 'Ve a la Cárcel', te mueves directamente a la casilla de la Cárcel sin pasar por SALIDA o recoger $200.",
          de: "Wenn du auf 'Gehe ins Gefängnis' landest, gehst du direkt zum Gefängnis-Feld, ohne über LOS zu gehen oder $200 zu bekommen.",
          nl: "Wanneer je op 'Ga naar de gevangenis' landt, ga je direct naar het gevangenisvakje zonder START te passeren of $200 te verzamelen."
        }
      },
      {
        question: {
          en: "How much do you collect for passing GO?",
          es: "¿Cuánto recoges por pasar por SALIDA?",
          de: "Wie viel bekommst du für das Passieren von LOS?",
          nl: "Hoeveel krijg je voor het passeren van START?"
        },
        options: [
          { en: "$100", es: "$100", de: "$100", nl: "$100" },
          { en: "$150", es: "$150", de: "$150", nl: "$150" },
          { en: "$200", es: "$200", de: "$200", nl: "$200" },
          { en: "$250", es: "$250", de: "$250", nl: "$250" }
        ],
        correct: 2,
        explanation: {
          en: "Players collect $200 every time they pass or land on the GO square, providing a steady income throughout the game.",
          es: "Los jugadores recolectan $200 cada vez que pasan o caen en la casilla SALIDA, proporcionando un ingreso constante durante el juego.",
          de: "Spieler bekommen $200 jedes Mal, wenn sie das LOS-Feld passieren oder darauf landen, was ein stetiges Einkommen während des Spiels bietet.",
          nl: "Spelers verzamelen $200 elke keer dat ze het START-vakje passeren of erop landen, wat een constant inkomen gedurende het spel biedt."
        }
      },
      {
        question: {
          en: "Which property group is the most expensive in classic Monopoly?",
          es: "¿Qué grupo de propiedades es el más caro en el Monopoly clásico?",
          de: "Welche Eigenschaftsgruppe ist die teuerste beim klassischen Monopoly?",
          nl: "Welke eigendomsgroep is de duurste bij klassiek Monopoly?"
        },
        options: [
          { en: "Green (Pacific Avenue, North Carolina, Pennsylvania)", es: "Verde (Pacific Avenue, Carolina del Norte, Pensilvania)", de: "Grün (Pacific Avenue, North Carolina, Pennsylvania)", nl: "Groen (Pacific Avenue, North Carolina, Pennsylvania)" },
          { en: "Dark Blue", es: "Azul Oscuro", de: "Dunkelblau", nl: "Donkerblauw" },
          { en: "Red properties (Kentucky Avenue, Indiana, Illinois)", es: "Propiedades rojas (Kentucky Avenue, Indiana, Illinois)", de: "Rote Eigenschaften (Kentucky Avenue, Indiana, Illinois)", nl: "Rode eigendommen (Kentucky Avenue, Indiana, Illinois)" },
          { en: "Yellow (Atlantic Avenue, Ventnor Avenue, Marvin Gardens)", es: "Amarillo (Atlantic Avenue, Ventnor Avenue, Marvin Gardens)", de: "Gelb (Atlantic Avenue, Ventnor Avenue, Marvin Gardens)", nl: "Geel (Atlantic Avenue, Ventnor Avenue, Marvin Gardens)" }
        ],
        correct: 1,
        explanation: {
          en: "The dark blue properties (Park Place and Boardwalk) are the most expensive, with Boardwalk costing $400 to purchase.",
          es: "Las propiedades azul oscuro (Park Place y Boardwalk) son las más caras, con Boardwalk costando $400 para comprar.",
          de: "Die dunkelblauen Eigenschaften (Park Place und Boardwalk) sind die teuersten, wobei Boardwalk $400 zum Kauf kostet.",
          nl: "De donkerblauwe eigendommen (Park Place en Boardwalk) zijn de duurste, waarbij Boardwalk $400 kost om te kopen."
        }
      },
      {
        question: {
          en: "How many dice do you roll in Monopoly?",
          es: "¿Cuántos dados tiras en Monopoly?",
          de: "Wie viele Würfel würfelst du beim Monopoly?",
          nl: "Hoeveel dobbelstenen gooi je bij Monopoly?"
        },
        options: [
          { en: "1", es: "1", de: "1", nl: "1" },
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "4", es: "4", de: "4", nl: "4" }
        ],
        correct: 1,
        explanation: {
          en: "Players roll 2 dice in Monopoly to determine how many spaces to move around the board.",
          es: "Los jugadores tiran 2 dados en Monopoly para determinar cuántas casillas moverse alrededor del tablero.",
          de: "Spieler würfeln 2 Würfel beim Monopoly, um zu bestimmen, wie viele Felder sie um das Brett bewegen.",
          nl: "Spelers gooien 2 dobbelstenen bij Monopoly om te bepalen hoeveel vakjes ze rond het bord bewegen."
        }
      },
      {
        question: {
          en: "What happens when you roll doubles in Monopoly?",
          es: "¿Qué pasa cuando sacas dobles en Monopoly?",
          de: "Was passiert, wenn du einen Pasch würfelst beim Monopoly?",
          nl: "Wat gebeurt er als je een dubbel gooit bij Monopoly?"
        },
        options: [
          { en: "You move twice the amount", es: "Te mueves el doble de la cantidad", de: "Du bewegst dich doppelt so weit", nl: "Je beweegt dubbel zoveel" },
          { en: "You get another turn", es: "Obtienes otro turno", de: "Du bekommst einen weiteren Zug", nl: "Je krijgt nog een beurt" },
          { en: "You go to jail", es: "Vas a la cárcel", de: "Du gehst ins Gefängnis", nl: "Je gaat naar de gevangenis" },
          { en: "You collect $200", es: "Recoges $200", de: "Du bekommst $200", nl: "Je krijgt $200" }
        ],
        correct: 1,
        explanation: {
          en: "Rolling doubles gives you another turn immediately after completing your current turn. However, rolling three doubles in a row sends you to jail.",
          es: "Sacar dobles te da otro turno inmediatamente después de completar tu turno actual. Sin embargo, sacar tres dobles seguidos te envía a la cárcel.",
          de: "Ein Pasch gibt dir sofort einen weiteren Zug nach Abschluss deines aktuellen Zugs. Jedoch schickt dich drei Pasch hintereinander ins Gefängnis.",
          nl: "Een dubbel gooien geeft je onmiddellijk nog een beurt na het voltooien van je huidige beurt. Echter, drie dubbels op rij sturen je naar de gevangenis."
        }
      },
      {
        question: {
          en: "What are the four railroad properties in classic Monopoly?",
          es: "¿Cuáles son las cuatro propiedades de ferrocarril en el Monopoly clásico?",
          de: "Was sind die vier Eisenbahn-Eigenschaften beim klassischen Monopoly?",
          nl: "Wat zijn de vier spoorwegeigendommen bij klassiek Monopoly?"
        },
        options: [
          { en: "Reading, Pennsylvania, B&O, Short Line", es: "Reading, Pennsylvania, B&O, Short Line", de: "Reading, Pennsylvania, B&O, Short Line", nl: "Reading, Pennsylvania, B&O, Short Line" },
          { en: "Union, Central, Southern, Northern", es: "Union, Central, Southern, Northern", de: "Union, Central, Southern, Northern", nl: "Union, Central, Southern, Northern" },
          { en: "Atlantic, Pacific, Continental, Express", es: "Atlantic, Pacific, Continental, Express", de: "Atlantic, Pacific, Continental, Express", nl: "Atlantic, Pacific, Continental, Express" },
          { en: "Eastern, Western, Metro, Local", es: "Eastern, Western, Metro, Local", de: "Eastern, Western, Metro, Local", nl: "Eastern, Western, Metro, Local" }
        ],
        correct: 0,
        explanation: {
          en: "The four railroads are Reading Railroad, Pennsylvania Railroad, B&O Railroad, and Short Line Railroad, each costing $200.",
          es: "Los cuatro ferrocarriles son Reading Railroad, Pennsylvania Railroad, B&O Railroad y Short Line Railroad, cada uno costando $200.",
          de: "Die vier Eisenbahnen sind Reading Railroad, Pennsylvania Railroad, B&O Railroad und Short Line Railroad, jede kostet $200.",
          nl: "De vier spoorwegen zijn Reading Railroad, Pennsylvania Railroad, B&O Railroad en Short Line Railroad, elk kost $200."
        }
      },
      {
        question: {
          en: "How much does it cost to get out of jail?",
          es: "¿Cuánto cuesta salir de la cárcel?",
          de: "Wie viel kostet es, aus dem Gefängnis herauszukommen?",
          nl: "Hoeveel kost het om uit de gevangenis te komen?"
        },
        options: [
          { en: "$25", es: "$25", de: "$25", nl: "$25" },
          { en: "$50", es: "$50", de: "$50", nl: "$50" },
          { en: "$75", es: "$75", de: "$75", nl: "$75" },
          { en: "$100", es: "$100", de: "$100", nl: "$100" }
        ],
        correct: 1,
        explanation: {
          en: "You can pay $50 to get out of jail immediately, or try to roll doubles, or use a 'Get Out of Jail Free' card.",
          es: "Puedes pagar $50 para salir de la cárcel inmediatamente, o tratar de sacar dobles, o usar una carta de 'Sal de la Cárcel Gratis'.",
          de: "Du kannst $50 zahlen, um sofort aus dem Gefängnis herauszukommen, oder versuchen einen Pasch zu würfeln, oder eine 'Frei aus dem Gefängnis'-Karte verwenden.",
          nl: "Je kunt $50 betalen om onmiddellijk uit de gevangenis te komen, of proberen een dubbel te gooien, of een 'Verlaat de gevangenis gratis'-kaart gebruiken."
        }
      },
      {
        question: {
          en: "What are the two utility companies in Monopoly?",
          es: "¿Cuáles son las dos compañías de servicios públicos en Monopoly?",
          de: "Was sind die zwei Versorgungsunternehmen beim Monopoly?",
          nl: "Wat zijn de twee nutsbedrijven bij Monopoly?"
        },
        options: [
          { en: "Electric Company and Water Works", es: "Compañía Eléctrica y Obras de Agua", de: "Elektrizitätswerk und Wasserwerk", nl: "Elektriciteitsbedrijf en Waterleiding" },
          { en: "Gas Company and Phone Company", es: "Compañía de Gas y Compañía Telefónica", de: "Gaswerk und Telefongesellschaft", nl: "Gasbedrijf en Telefoonmaatschappij" },
          { en: "Power Plant and Sewage Works", es: "Planta de Energía y Obras de Alcantarillado", de: "Kraftwerk und Klärwerk", nl: "Elektriciteitscentrale en Rioolwerken" },
          { en: "Light Company and Heat Company", es: "Compañía de Luz y Compañía de Calefacción", de: "Lichtwerk und Heizwerk", nl: "Lichtbedrijf en Verwarmingsbedrijf" }
        ],
        correct: 0,
        explanation: {
          en: "The two utilities are Electric Company and Water Works. Rent is determined by rolling dice and multiplying by 4 or 10 depending on ownership.",
          es: "Los dos servicios públicos son Compañía Eléctrica y Obras de Agua. El alquiler se determina tirando dados y multiplicando por 4 o 10 dependiendo de la propiedad.",
          de: "Die zwei Versorgungsunternehmen sind Elektrizitätswerk und Wasserwerk. Die Miete wird durch Würfeln bestimmt und mit 4 oder 10 multipliziert, je nach Besitz.",
          nl: "De twee nutsbedrijven zijn Elektriciteitsbedrijf en Waterleiding. Huur wordt bepaald door dobbelstenen te gooien en te vermenigvuldigen met 4 of 10 afhankelijk van eigendom."
        }
      },
      {
        question: {
          en: "What is the objective of Monopoly?",
          es: "¿Cuál es el objetivo de Monopoly?",
          de: "Was ist das Ziel von Monopoly?",
          nl: "Wat is het doel van Monopoly?"
        },
        options: [
          { en: "Be the first to buy 5 properties", es: "Ser el primero en comprar 5 propiedades", de: "Der erste sein, der 5 Eigenschaften kauft", nl: "De eerste zijn die 5 eigendommen koopt" },
          { en: "Be the last player remaining with money", es: "Ser el último jugador que quede con dinero", de: "Der letzte Spieler mit Geld sein", nl: "De laatste speler zijn die geld heeft" },
          { en: "Collect the most rent in one turn", es: "Recoger la mayor renta en un turno", de: "Die meiste Miete in einem Zug sammeln", nl: "De meeste huur in één beurt verzamelen" },
          { en: "Own all the railroads", es: "Poseer todos los ferrocarriles", de: "Alle Eisenbahnen besitzen", nl: "Alle spoorwegen bezitten" }
        ],
        correct: 1,
        explanation: {
          en: "The objective is to bankrupt all other players and be the last player remaining with money and properties.",
          es: "El objetivo es arruinar a todos los otros jugadores y ser el último jugador que quede con dinero y propiedades.",
          de: "Das Ziel ist es, alle anderen Spieler bankrott zu machen und der letzte Spieler mit Geld und Eigenschaften zu sein.",
          nl: "Het doel is alle andere spelers bankroet te maken en de laatste speler te zijn die geld en eigendommen heeft."
        }
      },
      {
        question: {
          en: "How many houses must you have before you can buy a hotel?",
          es: "¿Cuántas casas debes tener antes de poder comprar un hotel?",
          de: "Wie viele Häuser musst du haben, bevor du ein Hotel kaufen kannst?",
          nl: "Hoeveel huizen moet je hebben voordat je een hotel kunt kopen?"
        },
        options: [
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "5", es: "5", de: "5", nl: "5" }
        ],
        correct: 2,
        explanation: {
          en: "You must have 4 houses on a property before you can buy a hotel. The hotel replaces the 4 houses.",
          es: "Debes tener 4 casas en una propiedad antes de poder comprar un hotel. El hotel reemplaza las 4 casas.",
          de: "Du musst 4 Häuser auf einer Eigenschaft haben, bevor du ein Hotel kaufen kannst. Das Hotel ersetzt die 4 Häuser.",
          nl: "Je moet 4 huizen op een eigendom hebben voordat je een hotel kunt kopen. Het hotel vervangt de 4 huizen."
        }
      },
      {
        question: {
          en: "What happens when you land on Free Parking?",
          es: "¿Qué pasa cuando caes en Estacionamiento Gratuito?",
          de: "Was passiert, wenn du auf Frei Parken landest?",
          nl: "Wat gebeurt er als je op Vrij Parkeren landt?"
        },
        options: [
          { en: "You collect all tax money", es: "Recoges todo el dinero de impuestos", de: "Du bekommst alles Steuergeld", nl: "Je krijgt al het belastinggeld" },
          { en: "You get a free turn", es: "Obtienes un turno gratis", de: "Du bekommst einen kostenlosen Zug", nl: "Je krijgt een gratis beurt" },
          { en: "Nothing happens", es: "No pasa nada", de: "Nichts passiert", nl: "Er gebeurt niets" },
          { en: "You go to jail", es: "Vas a la cárcel", de: "Du gehst ins Gefängnis", nl: "Je gaat naar de gevangenis" }
        ],
        correct: 2,
        explanation: {
          en: "According to official rules, nothing happens when you land on Free Parking - it's just a rest space. House rules often add money collection.",
          es: "Según las reglas oficiales, no pasa nada cuando caes en Estacionamiento Gratuito - es solo un espacio de descanso. Las reglas caseras a menudo agregan recolección de dinero.",
          de: "Nach offiziellen Regeln passiert nichts, wenn du auf Frei Parken landest - es ist nur ein Rastplatz. Hausregeln fügen oft Geldsammlung hinzu.",
          nl: "Volgens officiële regels gebeurt er niets wanneer je op Vrij Parkeren landt - het is gewoon een rustplaats. Huisregels voegen vaak geld verzamelen toe."
        }
      },
      {
        question: {
          en: "How many spaces are there on a Monopoly board?",
          es: "¿Cuántas casillas hay en un tablero de Monopoly?",
          de: "Wie viele Felder gibt es auf einem Monopoly-Brett?",
          nl: "Hoeveel vakjes zijn er op een Monopoly-bord?"
        },
        options: [
          { en: "36", es: "36", de: "36", nl: "36" },
          { en: "40", es: "40", de: "40", nl: "40" },
          { en: "44", es: "44", de: "44", nl: "44" },
          { en: "48", es: "48", de: "48", nl: "48" }
        ],
        correct: 1,
        explanation: {
          en: "A standard Monopoly board has 40 spaces, including 28 properties, 4 corner squares, 4 railroads, 2 utilities, and 2 tax squares.",
          es: "Un tablero estándar de Monopoly tiene 40 casillas, incluyendo 28 propiedades, 4 esquinas, 4 ferrocarriles, 2 servicios públicos y 2 casillas de impuestos.",
          de: "Ein Standard-Monopoly-Brett hat 40 Felder, einschließlich 28 Eigenschaften, 4 Eckfelder, 4 Eisenbahnen, 2 Versorgungsunternehmen und 2 Steuerfelder.",
          nl: "Een standaard Monopoly-bord heeft 40 vakjes, inclusief 28 eigendommen, 4 hoekvakjes, 4 spoorwegen, 2 nutsbedrijven en 2 belastingvakjes."
        }
      },
      {
        question: {
          en: "What are Chance and Community Chest cards?",
          es: "¿Qué son las cartas de Suerte y Arca Comunal?",
          de: "Was sind Ereignis- und Gemeinschaftskarten?",
          nl: "Wat zijn Kans- en Algemeen Fonds-kaarten?"
        },
        options: [
          { en: "Property ownership deeds for streets", es: "Escrituras de propiedad para calles", de: "Eigentumsurkunden für Straßen", nl: "Eigendomsaktes voor straten" },
          { en: "Special action cards", es: "Cartas de acción especial", de: "Spezielle Aktionskarten", nl: "Speciale actiekaarten" },
          { en: "Money denominations for the bank", es: "Denominaciones de dinero para el banco", de: "Geldscheine für die Bank", nl: "Geldcoupures voor de bank" },
          { en: "Player tokens to move on the board", es: "Fichas de jugador para moverse", de: "Spielfiguren zum Bewegen", nl: "Spelersstukken om te verplaatsen" }
        ],
        correct: 1,
        explanation: {
          en: "Chance and Community Chest are special cards that players draw when landing on those spaces, containing various instructions like paying fines, collecting money, or moving to different spaces.",
          es: "Suerte y Arca Comunal son cartas especiales que los jugadores roban cuando caen en esos espacios, conteniendo varias instrucciones como pagar multas, recoger dinero, o moverse a diferentes espacios.",
          de: "Ereignis- und Gemeinschaftskarten sind spezielle Karten, die Spieler ziehen, wenn sie auf diese Felder landen, mit verschiedenen Anweisungen wie Geldstrafen zahlen, Geld sammeln oder zu verschiedenen Feldern bewegen.",
          nl: "Kans en Algemeen Fonds zijn speciale kaarten die spelers trekken wanneer ze op die vakjes landen, met verschillende instructies zoals boetes betalen, geld verzamelen, of naar verschillende vakjes verplaatsen."
        }
      },
      {
        question: {
          en: "What is a monopoly in the game?",
          es: "¿Qué es un monopolio en el juego?",
          de: "Was ist ein Monopol im Spiel?",
          nl: "Wat is een monopolie in het spel?"
        },
        options: [
          { en: "Owning the most expensive property", es: "Poseer la propiedad más cara", de: "Die teuerste Eigenschaft besitzen", nl: "De duurste eigendom bezitten" },
          { en: "Owning all properties of the same color group", es: "Poseer todas las propiedades del mismo grupo de color", de: "Alle Eigenschaften derselben Farbgruppe besitzen", nl: "Alle eigendommen van dezelfde kleurgroep bezitten" },
          { en: "Having the most money", es: "Tener la mayor cantidad de dinero", de: "Das meiste Geld haben", nl: "Het meeste geld hebben" },
          { en: "Owning all four railroads", es: "Poseer los cuatro ferrocarriles", de: "Alle vier Eisenbahnen besitzen", nl: "Alle vier spoorwegen bezitten" }
        ],
        correct: 1,
        explanation: {
          en: "A monopoly is achieved by owning all properties of the same color group, which allows you to build houses and hotels and charge higher rents.",
          es: "Un monopolio se logra poseyendo todas las propiedades del mismo grupo de color, lo que te permite construir casas y hoteles y cobrar alquileres más altos.",
          de: "Ein Monopol wird erreicht, indem man alle Eigenschaften derselben Farbgruppe besitzt, was es ermöglicht, Häuser und Hotels zu bauen und höhere Mieten zu verlangen.",
          nl: "Een monopolie wordt bereikt door alle eigendommen van dezelfde kleurgroep te bezitten, waardoor je huizen en hotels kunt bouwen en hogere huren kunt vragen."
        }
      },
      {
        question: {
          en: "Which corner square sends you to jail?",
          es: "¿Qué esquina te envía a la cárcel?",
          de: "Welches Eckfeld schickt dich ins Gefängnis?",
          nl: "Welk hoekvakje stuurt je naar de gevangenis?"
        },
        options: [
          { en: "GO", es: "SALIDA", de: "LOS", nl: "START" },
          { en: "Jail/Just Visiting", es: "Cárcel/Solo de Visita", de: "Gefängnis/Nur zu Besuch", nl: "Gevangenis/Alleen op bezoek" },
          { en: "Free Parking", es: "Estacionamiento Gratuito", de: "Frei Parken", nl: "Vrij Parkeren" },
          { en: "Go to Jail", es: "Ve a la Cárcel", de: "Gehe ins Gefängnis", nl: "Ga naar de gevangenis" }
        ],
        correct: 3,
        explanation: {
          en: "'Go to Jail' is the corner square that sends you directly to jail when you land on it, unlike the Jail square itself which is just for visiting.",
          es: "'Ve a la Cárcel' es la esquina que te envía directamente a la cárcel cuando caes en ella, a diferencia de la casilla de la Cárcel misma que es solo para visitar.",
          de: "'Gehe ins Gefängnis' ist das Eckfeld, das dich direkt ins Gefängnis schickt, wenn du darauf landest, im Gegensatz zum Gefängnis-Feld selbst, das nur zum Besuch da ist.",
          nl: "'Ga naar de gevangenis' is het hoekvakje dat je direct naar de gevangenis stuurt wanneer je erop landt, in tegenstelling tot het gevangenisvakje zelf dat alleen voor bezoek is."
        }
      },
      {
        question: {
          en: "How much is the Income Tax?",
          es: "¿Cuánto es el Impuesto sobre la Renta?",
          de: "Wie hoch ist die Einkommensteuer?",
          nl: "Hoeveel is de Inkomstenbelasting?"
        },
        options: [
          { en: "$100", es: "$100", de: "$100", nl: "$100" },
          { en: "$150", es: "$150", de: "$150", nl: "$150" },
          { en: "$200", es: "$200", de: "$200", nl: "$200" },
          { en: "$250", es: "$250", de: "$250", nl: "$250" }
        ],
        correct: 2,
        explanation: {
          en: "Income Tax costs $200 when you land on it. In older versions, players could choose between $200 or 10% of their total wealth.",
          es: "El Impuesto sobre la Renta cuesta $200 cuando caes en él. En versiones más antiguas, los jugadores podían elegir entre $200 o el 10% de su riqueza total.",
          de: "Die Einkommensteuer kostet $200, wenn du darauf landest. In älteren Versionen konnten Spieler zwischen $200 oder 10% ihres Gesamtvermögens wählen.",
          nl: "Inkomstenbelasting kost $200 wanneer je erop landt. In oudere versies konden spelers kiezen tussen $200 of 10% van hun totale vermogen."
        }
      },
      {
        question: {
          en: "What happens when the bank runs out of houses or hotels?",
          es: "¿Qué pasa cuando el banco se queda sin casas u hoteles?",
          de: "Was passiert, wenn der Bank die Häuser oder Hotels ausgehen?",
          nl: "Wat gebeurt er als de bank geen huizen of hotels meer heeft?"
        },
        options: [
          { en: "Players can substitute with other objects", es: "Los jugadores pueden sustituir con otros objetos", de: "Spieler können mit anderen Objekten ersetzen", nl: "Spelers kunnen vervangen met andere objecten" },
          { en: "No more can be built", es: "No se pueden construir más", de: "Keine weiteren können gebaut werden", nl: "Er kunnen geen meer worden gebouwd" },
          { en: "Players must wait for others to sell", es: "Los jugadores deben esperar a que otros vendan", de: "Spieler müssen warten, bis andere verkaufen", nl: "Spelers moeten wachten tot anderen verkopen" },
          { en: "The game ends", es: "El juego termina", de: "Das Spiel endet", nl: "Het spel eindigt" }
        ],
        correct: 1,
        explanation: {
          en: "When the bank runs out of houses or hotels, no more can be built until some are returned to the bank through sales or trades.",
          es: "Cuando el banco se queda sin casas u hoteles, no se pueden construir más hasta que algunos sean devueltos al banco a través de ventas o intercambios.",
          de: "Wenn der Bank die Häuser oder Hotels ausgehen, können keine weiteren gebaut werden, bis einige durch Verkäufe oder Tausch an die Bank zurückgegeben werden.",
          nl: "Wanneer de bank geen huizen of hotels meer heeft, kunnen er geen meer worden gebouwd totdat er een aantal worden teruggebracht naar de bank door verkoop of ruil."
        }
      },
      {
        question: {
          en: "Who created the original version of Monopoly?",
          es: "¿Quién creó la versión original de Monopoly?",
          de: "Wer hat die ursprüngliche Version von Monopoly erstellt?",
          nl: "Wie creëerde de oorspronkelijke versie van Monopoly?"
        },
        options: [
          { en: "Charles Darrow", es: "Charles Darrow", de: "Charles Darrow", nl: "Charles Darrow" },
          { en: "Elizabeth Magie", es: "Elizabeth Magie", de: "Elizabeth Magie", nl: "Elizabeth Magie" },
          { en: "Parker Brothers", es: "Parker Brothers", de: "Parker Brothers", nl: "Parker Brothers" },
          { en: "Hasbro", es: "Hasbro", de: "Hasbro", nl: "Hasbro" }
        ],
        correct: 1,
        explanation: {
          en: "Elizabeth Magie created 'The Landlord's Game' in 1903, which was the precursor to Monopoly. Charles Darrow later popularized a version that became modern Monopoly.",
          es: "Elizabeth Magie creó 'The Landlord's Game' en 1903, que fue el precursor de Monopoly. Charles Darrow luego popularizó una versión que se convirtió en el Monopoly moderno.",
          de: "Elizabeth Magie schuf 1903 'The Landlord's Game', das der Vorläufer von Monopoly war. Charles Darrow popularisierte später eine Version, die zum modernen Monopoly wurde.",
          nl: "Elizabeth Magie creëerde 'The Landlord's Game' in 1903, wat de voorloper was van Monopoly. Charles Darrow populariseerde later een versie die het moderne Monopoly werd."
        }
      },
      {
        question: {
          en: "What is the name of the Monopoly piece that looks like a top hat?",
          es: "¿Cuál es el nombre de la pieza de Monopoly que parece un sombrero de copa?",
          de: "Wie heißt die Monopoly-Figur, die wie ein Zylinderhut aussieht?",
          nl: "Wat is de naam van het Monopoly-stuk dat eruitziet als een hoge hoed?"
        },
        options: [
          { en: "The Gentleman", es: "El Caballero", de: "Der Gentleman", nl: "De Heer" },
          { en: "Top Hat", es: "Sombrero de Copa", de: "Zylinderhut", nl: "Hoge Hoed" },
          { en: "The Hat", es: "El Sombrero", de: "Der Hut", nl: "De Hoed" },
          { en: "Mr. Monopoly", es: "Sr. Monopoly", de: "Herr Monopoly", nl: "Meneer Monopoly" }
        ],
        correct: 1,
        explanation: {
          en: "The piece is simply called 'Top Hat' and has been one of the classic Monopoly game pieces since the original version. It's one of the most recognizable tokens in the game.",
          es: "La pieza se llama simplemente 'Sombrero de Copa' y ha sido una de las piezas clásicas del juego Monopoly desde la versión original. Es una de las fichas más reconocibles del juego.",
          de: "Die Figur heißt einfach 'Zylinderhut' und ist seit der ursprünglichen Version eine der klassischen Monopoly-Spielfiguren. Sie ist eine der erkennbarsten Spielsteine im Spiel.",
          nl: "Het stuk heet gewoon 'Hoge Hoed' en is sinds de originele versie een van de klassieke Monopoly-speelstukken. Het is een van de meest herkenbare fiches in het spel."
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