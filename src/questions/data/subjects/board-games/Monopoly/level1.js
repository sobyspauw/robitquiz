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
      },
      {
        question: {
          en: "How many tokens/pieces are traditionally in a Monopoly game?",
          es: "¿Cuántas fichas/piezas hay tradicionalmente en un juego de Monopoly?",
          de: "Wie viele Spielsteine gibt es traditionell in einem Monopoly-Spiel?",
          nl: "Hoeveel fiches/stukken zijn er traditioneel in een Monopoly-spel?"
        },
        options: [
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "8", es: "8", de: "8", nl: "8" },
          { en: "10", es: "10", de: "10", nl: "10" },
          { en: "12", es: "12", de: "12", nl: "12" }
        ],
        correct: 1,
        explanation: {
          en: "Traditional Monopoly sets came with 8 tokens: Top Hat, Thimble, Iron, Boot, Battleship, Car, Dog, and Wheelbarrow. Modern versions may have different tokens.",
          es: "Los sets tradicionales de Monopoly venían con 8 fichas: Sombrero de Copa, Dedal, Plancha, Bota, Acorazado, Automóvil, Perro y Carretilla. Las versiones modernas pueden tener diferentes fichas.",
          de: "Traditionelle Monopoly-Sets enthielten 8 Spielsteine: Zylinderhut, Fingerhut, Bügeleisen, Stiefel, Schlachtschiff, Auto, Hund und Schubkarre. Moderne Versionen können andere Spielsteine haben.",
          nl: "Traditionele Monopoly-sets kwamen met 8 fiches: Hoge Hoed, Vingerhoed, Strijkijzer, Laars, Slagschip, Auto, Hond en Kruiwagen. Moderne versies kunnen andere fiches hebben."
        }
      },
      {
        question: {
          en: "What color are the properties Boardwalk and Park Place?",
          es: "¿De qué color son las propiedades Boardwalk y Park Place?",
          de: "Welche Farbe haben die Eigenschaften Boardwalk und Park Place?",
          nl: "Welke kleur hebben de eigendommen Boardwalk en Park Place?"
        },
        options: [
          { en: "Green", es: "Verde", de: "Grün", nl: "Groen" },
          { en: "Blue", es: "Azul", de: "Blau", nl: "Blauw" },
          { en: "Dark Blue", es: "Azul Oscuro", de: "Dunkelblau", nl: "Donkerblauw" },
          { en: "Purple", es: "Morado", de: "Lila", nl: "Paars" }
        ],
        correct: 2,
        explanation: {
          en: "Boardwalk and Park Place are the two most expensive properties and are colored dark blue. They form the smallest color group with only two properties.",
          es: "Boardwalk y Park Place son las dos propiedades más caras y son de color azul oscuro. Forman el grupo de color más pequeño con solo dos propiedades.",
          de: "Boardwalk und Park Place sind die beiden teuersten Eigenschaften und sind dunkelblau gefärbt. Sie bilden die kleinste Farbgruppe mit nur zwei Eigenschaften.",
          nl: "Boardwalk en Park Place zijn de twee duurste eigendommen en zijn donkerblauw gekleurd. Ze vormen de kleinste kleurgroep met slechts twee eigendommen."
        }
      },
      {
        question: {
          en: "How many dice do you roll in Monopoly?",
          es: "¿Cuántos dados lanzas en Monopoly?",
          de: "Wie viele Würfel wirfst du in Monopoly?",
          nl: "Hoeveel dobbelstenen gooi je in Monopoly?"
        },
        options: [
          { en: "1", es: "1", de: "1", nl: "1" },
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "4", es: "4", de: "4", nl: "4" }
        ],
        correct: 1,
        explanation: {
          en: "Players roll two dice at the start of each turn to determine how many spaces they move. Rolling doubles (same number on both dice) allows another turn.",
          es: "Los jugadores lanzan dos dados al inicio de cada turno para determinar cuántos espacios se mueven. Sacar dobles (mismo número en ambos dados) permite otro turno.",
          de: "Spieler werfen zwei Würfel zu Beginn jedes Zuges, um zu bestimmen, wie viele Felder sie bewegen. Ein Pasch (gleiche Zahl auf beiden Würfeln) erlaubt einen weiteren Zug.",
          nl: "Spelers gooien twee dobbelstenen aan het begin van elke beurt om te bepalen hoeveel vakjes ze verplaatsen. Dubbel gooien (hetzelfde nummer op beide dobbelstenen) geeft nog een beurt."
        }
      },
      {
        question: {
          en: "What happens if you roll doubles three times in a row?",
          es: "¿Qué pasa si sacas dobles tres veces seguidas?",
          de: "Was passiert, wenn du dreimal hintereinander einen Pasch würfelst?",
          nl: "Wat gebeurt er als je drie keer achter elkaar dubbel gooit?"
        },
        options: [
          { en: "You win $500", es: "Ganas $500", de: "Du gewinnst $500", nl: "Je wint $500" },
          { en: "You go to Jail", es: "Vas a la Cárcel", de: "Du gehst ins Gefängnis", nl: "Je gaat naar de gevangenis" },
          { en: "You get an extra turn", es: "Obtienes un turno extra", de: "Du bekommst einen extra Zug", nl: "Je krijgt een extra beurt" },
          { en: "You lose a turn", es: "Pierdes un turno", de: "Du verlierst einen Zug", nl: "Je verliest een beurt" }
        ],
        correct: 1,
        explanation: {
          en: "Rolling doubles three consecutive times sends you directly to Jail. This prevents players from getting too many turns in a row.",
          es: "Sacar dobles tres veces consecutivas te envía directamente a la Cárcel. Esto evita que los jugadores obtengan demasiados turnos seguidos.",
          de: "Dreimal hintereinander einen Pasch zu würfeln schickt dich direkt ins Gefängnis. Dies verhindert, dass Spieler zu viele Züge hintereinander bekommen.",
          nl: "Drie keer achter elkaar dubbel gooien stuurt je direct naar de gevangenis. Dit voorkomt dat spelers te veel beurten achter elkaar krijgen."
        }
      },
      {
        question: {
          en: "How much money does each player start with in classic Monopoly?",
          es: "¿Con cuánto dinero empieza cada jugador en Monopoly clásico?",
          de: "Mit wie viel Geld startet jeder Spieler im klassischen Monopoly?",
          nl: "Met hoeveel geld begint elke speler in klassiek Monopoly?"
        },
        options: [
          { en: "$1,000", es: "$1,000", de: "$1,000", nl: "$1,000" },
          { en: "$1,500", es: "$1,500", de: "$1,500", nl: "$1,500" },
          { en: "$2,000", es: "$2,000", de: "$2,000", nl: "$2,000" },
          { en: "$2,500", es: "$2,500", de: "$2,500", nl: "$2,500" }
        ],
        correct: 1,
        explanation: {
          en: "Each player starts with $1,500 distributed as: two $500s, two $100s, two $50s, six $20s, five $10s, five $5s, and five $1s.",
          es: "Cada jugador comienza con $1,500 distribuidos así: dos de $500, dos de $100, dos de $50, seis de $20, cinco de $10, cinco de $5 y cinco de $1.",
          de: "Jeder Spieler startet mit $1,500 verteilt als: zwei $500, zwei $100, zwei $50, sechs $20, fünf $10, fünf $5 und fünf $1.",
          nl: "Elke speler begint met $1,500 verdeeld als: twee $500, twee $100, twee $50, zes $20, vijf $10, vijf $5 en vijf $1."
        }
      },
      {
        question: {
          en: "Which property is located between GO and Mediterranean Avenue?",
          es: "¿Qué propiedad está ubicada entre SALIDA y Mediterranean Avenue?",
          de: "Welche Eigenschaft befindet sich zwischen LOS und Mediterranean Avenue?",
          nl: "Welke eigendom bevindt zich tussen START en Mediterranean Avenue?"
        },
        options: [
          { en: "Community Chest", es: "Arca Comunal", de: "Gemeinschaftskasse", nl: "Algemeen Fonds" },
          { en: "Chance", es: "Suerte", de: "Ereignis", nl: "Kans" },
          { en: "Baltic Avenue", es: "Baltic Avenue", de: "Baltic Avenue", nl: "Baltic Avenue" },
          { en: "Reading Railroad", es: "Reading Railroad", de: "Reading Railroad", nl: "Reading Railroad" }
        ],
        correct: 0,
        explanation: {
          en: "Community Chest is the first square after GO, followed by Mediterranean Avenue (the cheapest property) and then Baltic Avenue.",
          es: "Arca Comunal es la primera casilla después de SALIDA, seguida de Mediterranean Avenue (la propiedad más barata) y luego Baltic Avenue.",
          de: "Gemeinschaftskasse ist das erste Feld nach LOS, gefolgt von Mediterranean Avenue (die billigste Eigenschaft) und dann Baltic Avenue.",
          nl: "Algemeen Fonds is het eerste vakje na START, gevolgd door Mediterranean Avenue (de goedkoopste eigendom) en dan Baltic Avenue."
        }
      },
      {
        question: {
          en: "What color are the cheapest properties on the board?",
          es: "¿De qué color son las propiedades más baratas del tablero?",
          de: "Welche Farbe haben die billigsten Eigenschaften auf dem Brett?",
          nl: "Welke kleur hebben de goedkoopste eigendommen op het bord?"
        },
        options: [
          { en: "Brown", es: "Marrón", de: "Braun", nl: "Bruin" },
          { en: "Light Blue", es: "Azul Claro", de: "Hellblau", nl: "Lichtblauw" },
          { en: "Pink", es: "Rosa", de: "Rosa", nl: "Roze" },
          { en: "Purple", es: "Morado", de: "Lila", nl: "Paars" }
        ],
        correct: 0,
        explanation: {
          en: "The brown (sometimes called dark purple) properties - Mediterranean Avenue and Baltic Avenue - are the cheapest, costing $60 and $60 respectively.",
          es: "Las propiedades marrones (a veces llamadas morado oscuro) - Mediterranean Avenue y Baltic Avenue - son las más baratas, costando $60 y $60 respectivamente.",
          de: "Die braunen (manchmal dunkel lila genannt) Eigenschaften - Mediterranean Avenue und Baltic Avenue - sind die billigsten und kosten jeweils $60 und $60.",
          nl: "De bruine (soms donkerpaars genoemd) eigendommen - Mediterranean Avenue en Baltic Avenue - zijn de goedkoopste en kosten $60 en $60 respectievelijk."
        }
      },
      {
        question: {
          en: "How many houses must you have before building a hotel?",
          es: "¿Cuántas casas debes tener antes de construir un hotel?",
          de: "Wie viele Häuser muss man haben, bevor man ein Hotel bauen kann?",
          nl: "Hoeveel huizen moet je hebben voordat je een hotel kunt bouwen?"
        },
        options: [
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "5", es: "5", de: "5", nl: "5" }
        ],
        correct: 2,
        explanation: {
          en: "You must have exactly 4 houses on each property of a color group before you can build a hotel. The hotel replaces the 4 houses.",
          es: "Debes tener exactamente 4 casas en cada propiedad de un grupo de color antes de poder construir un hotel. El hotel reemplaza las 4 casas.",
          de: "Du musst genau 4 Häuser auf jeder Eigenschaft einer Farbgruppe haben, bevor du ein Hotel bauen kannst. Das Hotel ersetzt die 4 Häuser.",
          nl: "Je moet precies 4 huizen op elke eigendom van een kleurgroep hebben voordat je een hotel kunt bouwen. Het hotel vervangt de 4 huizen."
        }
      },
      {
        question: {
          en: "How many railroads are there on the Monopoly board?",
          es: "¿Cuántos ferrocarriles hay en el tablero de Monopoly?",
          de: "Wie viele Eisenbahnen gibt es auf dem Monopoly-Brett?",
          nl: "Hoeveel spoorwegen zijn er op het Monopoly-bord?"
        },
        options: [
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "5", es: "5", de: "5", nl: "5" }
        ],
        correct: 2,
        explanation: {
          en: "There are 4 railroads: Reading Railroad, Pennsylvania Railroad, B&O Railroad, and Short Line. Each costs $200 and rent increases with how many you own.",
          es: "Hay 4 ferrocarriles: Reading Railroad, Pennsylvania Railroad, B&O Railroad y Short Line. Cada uno cuesta $200 y el alquiler aumenta con cuántos posees.",
          de: "Es gibt 4 Eisenbahnen: Reading Railroad, Pennsylvania Railroad, B&O Railroad und Short Line. Jede kostet $200 und die Miete steigt mit der Anzahl, die du besitzt.",
          nl: "Er zijn 4 spoorwegen: Reading Railroad, Pennsylvania Railroad, B&O Railroad en Short Line. Elk kost $200 en de huur stijgt met hoeveel je bezit."
        }
      },
      {
        question: {
          en: "How many utilities are there in Monopoly?",
          es: "¿Cuántas empresas de servicios públicos hay en Monopoly?",
          de: "Wie viele Versorgungsunternehmen gibt es in Monopoly?",
          nl: "Hoeveel nutsbedrijven zijn er in Monopoly?"
        },
        options: [
          { en: "1", es: "1", de: "1", nl: "1" },
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "4", es: "4", de: "4", nl: "4" }
        ],
        correct: 1,
        explanation: {
          en: "There are 2 utilities: Electric Company and Water Works. Each costs $150 and rent is determined by multiplying the dice roll by 4 (one utility) or 10 (both utilities).",
          es: "Hay 2 empresas de servicios públicos: Electric Company y Water Works. Cada una cuesta $150 y el alquiler se determina multiplicando la tirada de dados por 4 (una empresa) o 10 (ambas empresas).",
          de: "Es gibt 2 Versorgungsunternehmen: Electric Company und Water Works. Jedes kostet $150 und die Miete wird durch Multiplikation des Würfelwurfs mit 4 (ein Unternehmen) oder 10 (beide Unternehmen) bestimmt.",
          nl: "Er zijn 2 nutsbedrijven: Electric Company en Water Works. Elk kost $150 en de huur wordt bepaald door de dobbelsteenworp te vermenigvuldigen met 4 (één nutsbedrijf) of 10 (beide nutsbedrijven)."
        }
      },
      {
        question: {
          en: "What is the most landed-on property statistically?",
          es: "¿Cuál es la propiedad en la que más se cae estadísticamente?",
          de: "Welche Eigenschaft wird statistisch am häufigsten besucht?",
          nl: "Welke eigendom wordt statistisch het vaakst bezocht?"
        },
        options: [
          { en: "Boardwalk", es: "Boardwalk", de: "Boardwalk", nl: "Boardwalk" },
          { en: "Illinois Avenue", es: "Illinois Avenue", de: "Illinois Avenue", nl: "Illinois Avenue" },
          { en: "GO", es: "SALIDA", de: "LOS", nl: "START" },
          { en: "Free Parking", es: "Estacionamiento Gratuito", de: "Frei Parken", nl: "Vrij Parkeren" }
        ],
        correct: 1,
        explanation: {
          en: "Illinois Avenue is statistically the most landed-on property because of its position relative to Jail and various Chance/Community Chest cards that send players there.",
          es: "Illinois Avenue es estadísticamente la propiedad en la que más se cae debido a su posición relativa a la Cárcel y varias cartas de Suerte/Arca Comunal que envían a los jugadores allí.",
          de: "Illinois Avenue wird statistisch am häufigsten besucht aufgrund ihrer Position relativ zum Gefängnis und verschiedener Ereignis-/Gemeinschaftskarten, die Spieler dorthin schicken.",
          nl: "Illinois Avenue wordt statistisch het vaakst bezocht vanwege de positie ten opzichte van de gevangenis en verschillende Kans/Algemeen Fonds-kaarten die spelers daarheen sturen."
        }
      },
      {
        question: {
          en: "How much does a house cost on the most expensive properties (dark blue)?",
          es: "¿Cuánto cuesta una casa en las propiedades más caras (azul oscuro)?",
          de: "Wie viel kostet ein Haus auf den teuersten Eigenschaften (dunkelblau)?",
          nl: "Hoeveel kost een huis op de duurste eigendommen (donkerblauw)?"
        },
        options: [
          { en: "$100", es: "$100", de: "$100", nl: "$100" },
          { en: "$150", es: "$150", de: "$150", nl: "$150" },
          { en: "$200", es: "$200", de: "$200", nl: "$200" },
          { en: "$250", es: "$250", de: "$250", nl: "$250" }
        ],
        correct: 2,
        explanation: {
          en: "Houses on Boardwalk and Park Place (dark blue properties) cost $200 each. Hotels cost the same plus the 4 houses ($1,000 total).",
          es: "Las casas en Boardwalk y Park Place (propiedades azul oscuro) cuestan $200 cada una. Los hoteles cuestan lo mismo más las 4 casas ($1,000 en total).",
          de: "Häuser auf Boardwalk und Park Place (dunkelblaue Eigenschaften) kosten jeweils $200. Hotels kosten das gleiche plus die 4 Häuser ($1,000 insgesamt).",
          nl: "Huizen op Boardwalk en Park Place (donkerblauwe eigendommen) kosten elk $200. Hotels kosten hetzelfde plus de 4 huizen ($1,000 in totaal)."
        }
      },
      {
        question: {
          en: "What is the rent on Boardwalk with a hotel?",
          es: "¿Cuál es el alquiler de Boardwalk con un hotel?",
          de: "Wie hoch ist die Miete auf Boardwalk mit einem Hotel?",
          nl: "Wat is de huur op Boardwalk met een hotel?"
        },
        options: [
          { en: "$1,000", es: "$1,000", de: "$1,000", nl: "$1,000" },
          { en: "$1,500", es: "$1,500", de: "$1,500", nl: "$1,500" },
          { en: "$2,000", es: "$2,000", de: "$2,000", nl: "$2,000" },
          { en: "$2,500", es: "$2,500", de: "$2,500", nl: "$2,500" }
        ],
        correct: 2,
        explanation: {
          en: "Boardwalk with a hotel charges $2,000 in rent, the highest possible rent in the game. Park Place with a hotel charges $1,400.",
          es: "Boardwalk con un hotel cobra $2,000 de alquiler, el alquiler más alto posible en el juego. Park Place con un hotel cobra $1,400.",
          de: "Boardwalk mit einem Hotel verlangt $2,000 Miete, die höchstmögliche Miete im Spiel. Park Place mit einem Hotel verlangt $1,400.",
          nl: "Boardwalk met een hotel vraagt $2,000 huur, de hoogst mogelijke huur in het spel. Park Place met een hotel vraagt $1,400."
        }
      },
      {
        question: {
          en: "Which city's street names are used in the original American Monopoly?",
          es: "¿De qué ciudad se usan los nombres de calles en el Monopoly americano original?",
          de: "Welche Stadt lieferte die Straßennamen für das ursprüngliche amerikanische Monopoly?",
          nl: "Van welke stad worden de straatnamen gebruikt in het originele Amerikaanse Monopoly?"
        },
        options: [
          { en: "New York City", es: "Nueva York", de: "New York City", nl: "New York City" },
          { en: "Atlantic City", es: "Atlantic City", de: "Atlantic City", nl: "Atlantic City" },
          { en: "Philadelphia", es: "Filadelfia", de: "Philadelphia", nl: "Philadelphia" },
          { en: "Boston", es: "Boston", de: "Boston", nl: "Boston" }
        ],
        correct: 1,
        explanation: {
          en: "The original American Monopoly uses street names from Atlantic City, New Jersey. Boardwalk and Park Place are real locations in Atlantic City.",
          es: "El Monopoly americano original usa nombres de calles de Atlantic City, Nueva Jersey. Boardwalk y Park Place son ubicaciones reales en Atlantic City.",
          de: "Das ursprüngliche amerikanische Monopoly verwendet Straßennamen aus Atlantic City, New Jersey. Boardwalk und Park Place sind echte Orte in Atlantic City.",
          nl: "Het originele Amerikaanse Monopoly gebruikt straatnamen van Atlantic City, New Jersey. Boardwalk en Park Place zijn echte locaties in Atlantic City."
        }
      },
      {
        question: {
          en: "How many total properties can you build on (not including railroads and utilities)?",
          es: "¿En cuántas propiedades totales puedes construir (sin incluir ferrocarriles y empresas de servicios)?",
          de: "Auf wie vielen Eigenschaften insgesamt kann man bauen (ohne Eisenbahnen und Versorgungsunternehmen)?",
          nl: "Op hoeveel totale eigendommen kun je bouwen (zonder spoorwegen en nutsbedrijven)?"
        },
        options: [
          { en: "20", es: "20", de: "20", nl: "20" },
          { en: "22", es: "22", de: "22", nl: "22" },
          { en: "24", es: "24", de: "24", nl: "24" },
          { en: "28", es: "28", de: "28", nl: "28" }
        ],
        correct: 1,
        explanation: {
          en: "There are 22 color-coded properties on which you can build houses and hotels, divided into 8 color groups (brown, light blue, pink, orange, red, yellow, green, and dark blue).",
          es: "Hay 22 propiedades codificadas por color en las que puedes construir casas y hoteles, divididas en 8 grupos de color (marrón, azul claro, rosa, naranja, rojo, amarillo, verde y azul oscuro).",
          de: "Es gibt 22 farbcodierte Eigenschaften, auf denen man Häuser und Hotels bauen kann, aufgeteilt in 8 Farbgruppen (braun, hellblau, rosa, orange, rot, gelb, grün und dunkelblau).",
          nl: "Er zijn 22 kleurgecodeerde eigendommen waarop je huizen en hotels kunt bouwen, verdeeld in 8 kleurgroepen (bruin, lichtblauw, roze, oranje, rood, geel, groen en donkerblauw)."
        }
      },
      {
        question: {
          en: "What is the first property after GO?",
          es: "¿Cuál es la primera propiedad después de SALIDA?",
          de: "Was ist die erste Eigenschaft nach LOS?",
          nl: "Wat is de eerste eigendom na START?"
        },
        options: [
          { en: "Baltic Avenue", es: "Baltic Avenue", de: "Baltic Avenue", nl: "Baltic Avenue" },
          { en: "Mediterranean Avenue", es: "Mediterranean Avenue", de: "Mediterranean Avenue", nl: "Mediterranean Avenue" },
          { en: "Reading Railroad", es: "Reading Railroad", de: "Reading Railroad", nl: "Reading Railroad" },
          { en: "Oriental Avenue", es: "Oriental Avenue", de: "Oriental Avenue", nl: "Oriental Avenue" }
        ],
        correct: 1,
        explanation: {
          en: "Mediterranean Avenue is the first property on the board, located right after the Community Chest square following GO. It costs $60 to purchase.",
          es: "Mediterranean Avenue es la primera propiedad en el tablero, ubicada justo después de la casilla de Arca Comunal que sigue a SALIDA. Cuesta $60 comprarla.",
          de: "Mediterranean Avenue ist die erste Eigenschaft auf dem Brett, direkt nach dem Gemeinschaftskasse-Feld nach LOS. Sie kostet $60 zum Kauf.",
          nl: "Mediterranean Avenue is de eerste eigendom op het bord, gelegen direct na het Algemeen Fonds-vakje na START. Het kost $60 om te kopen."
        }
      },
      {
        question: {
          en: "How many color groups have three properties?",
          es: "¿Cuántos grupos de color tienen tres propiedades?",
          de: "Wie viele Farbgruppen haben drei Eigenschaften?",
          nl: "Hoeveel kleurgroepen hebben drie eigendommen?"
        },
        options: [
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "7", es: "7", de: "7", nl: "7" },
          { en: "8", es: "8", de: "8", nl: "8" }
        ],
        correct: 1,
        explanation: {
          en: "Six color groups have three properties each: light blue, pink, orange, red, yellow, and green. The brown and dark blue groups have only two properties each.",
          es: "Seis grupos de color tienen tres propiedades cada uno: azul claro, rosa, naranja, rojo, amarillo y verde. Los grupos marrón y azul oscuro tienen solo dos propiedades cada uno.",
          de: "Sechs Farbgruppen haben jeweils drei Eigenschaften: hellblau, rosa, orange, rot, gelb und grün. Die braune und dunkelblaue Gruppe haben jeweils nur zwei Eigenschaften.",
          nl: "Zes kleurgroepen hebben elk drie eigendommen: lichtblauw, roze, oranje, rood, geel en groen. De bruine en donkerblauwe groepen hebben elk slechts twee eigendommen."
        }
      },
      {
        question: {
          en: "What happens to properties when a player goes bankrupt?",
          es: "¿Qué pasa con las propiedades cuando un jugador quiebra?",
          de: "Was passiert mit Eigenschaften, wenn ein Spieler bankrott geht?",
          nl: "Wat gebeurt er met eigendommen wanneer een speler failliet gaat?"
        },
        options: [
          { en: "They return to the bank for auction", es: "Vuelven al banco para subasta", de: "Sie kehren zur Bank für Auktion zurück", nl: "Ze keren terug naar de bank voor veiling" },
          { en: "They go to the player who bankrupted them", es: "Van al jugador que los dejó en bancarrota", de: "Sie gehen an den Spieler, der sie bankrott gemacht hat", nl: "Ze gaan naar de speler die hen failliet maakte" },
          { en: "They are removed from the game", es: "Se eliminan del juego", de: "Sie werden aus dem Spiel entfernt", nl: "Ze worden uit het spel verwijderd" },
          { en: "They are distributed equally among remaining players", es: "Se distribuyen equitativamente entre los jugadores restantes", de: "Sie werden gleichmäßig unter den verbleibenden Spielern verteilt", nl: "Ze worden gelijk verdeeld onder de resterende spelers" }
        ],
        correct: 1,
        explanation: {
          en: "When a player goes bankrupt to another player (not the bank), all their properties, cash, and Get Out of Jail Free cards go to that player. If bankrupt to the bank, properties are auctioned.",
          es: "Cuando un jugador quiebra ante otro jugador (no el banco), todas sus propiedades, efectivo y tarjetas de Salir de la Cárcel Gratis van a ese jugador. Si quiebra ante el banco, las propiedades se subastan.",
          de: "Wenn ein Spieler gegenüber einem anderen Spieler (nicht der Bank) bankrott geht, gehen alle seine Eigenschaften, Bargeld und Frei-aus-dem-Gefängnis-Karten an diesen Spieler. Bei Bankrott gegenüber der Bank werden Eigenschaften versteigert.",
          nl: "Wanneer een speler failliet gaat bij een andere speler (niet de bank), gaan al hun eigendommen, contant geld en Uit de Gevangenis Vrij-kaarten naar die speler. Bij faillissement bij de bank worden eigendommen geveild."
        }
      },
      {
        question: {
          en: "How many total spaces are on the Monopoly board?",
          es: "¿Cuántos espacios totales hay en el tablero de Monopoly?",
          de: "Wie viele Felder gibt es insgesamt auf dem Monopoly-Brett?",
          nl: "Hoeveel vakjes zijn er in totaal op het Monopoly-bord?"
        },
        options: [
          { en: "36", es: "36", de: "36", nl: "36" },
          { en: "38", es: "38", de: "38", nl: "38" },
          { en: "40", es: "40", de: "40", nl: "40" },
          { en: "42", es: "42", de: "42", nl: "42" }
        ],
        correct: 2,
        explanation: {
          en: "There are 40 spaces on the Monopoly board: 22 properties, 4 railroads, 2 utilities, 3 Chance, 3 Community Chest, 2 tax spaces, and the 4 corner squares (GO, Jail, Free Parking, Go to Jail).",
          es: "Hay 40 espacios en el tablero de Monopoly: 22 propiedades, 4 ferrocarriles, 2 empresas de servicios, 3 Suerte, 3 Arca Comunal, 2 espacios de impuestos y las 4 esquinas (SALIDA, Cárcel, Estacionamiento Gratuito, Ve a la Cárcel).",
          de: "Es gibt 40 Felder auf dem Monopoly-Brett: 22 Eigenschaften, 4 Eisenbahnen, 2 Versorgungsunternehmen, 3 Ereignis, 3 Gemeinschaftskasse, 2 Steuerfelder und die 4 Eckfelder (LOS, Gefängnis, Frei Parken, Gehe ins Gefängnis).",
          nl: "Er zijn 40 vakjes op het Monopoly-bord: 22 eigendommen, 4 spoorwegen, 2 nutsbedrijven, 3 Kans, 3 Algemeen Fonds, 2 belastingvakjes en de 4 hoekvakjes (START, Gevangenis, Vrij Parkeren, Ga naar de gevangenis)."
        }
      },
      {
        question: {
          en: "What does Free Parking do in official Monopoly rules?",
          es: "¿Qué hace Estacionamiento Gratuito en las reglas oficiales de Monopoly?",
          de: "Was macht Frei Parken in den offiziellen Monopoly-Regeln?",
          nl: "Wat doet Vrij Parkeren in de officiële Monopoly-regels?"
        },
        options: [
          { en: "Collect all tax and fine money", es: "Recoger todo el dinero de impuestos y multas", de: "Alle Steuer- und Strafgelder einsammeln", nl: "Al het belasting- en boetegeld verzamelen" },
          { en: "Nothing - it's just a rest space", es: "Nada - es solo un espacio de descanso", de: "Nichts - es ist nur ein Ruhefeld", nl: "Niets - het is gewoon een rustplek" },
          { en: "Collect $500", es: "Recoger $500", de: "$500 sammeln", nl: "$500 verzamelen" },
          { en: "Get an extra turn", es: "Obtener un turno extra", de: "Einen extra Zug bekommen", nl: "Een extra beurt krijgen" }
        ],
        correct: 1,
        explanation: {
          en: "In official rules, Free Parking does nothing - it's just a safe space where nothing happens. The 'collect money' house rule is popular but not official.",
          es: "En las reglas oficiales, Estacionamiento Gratuito no hace nada - es solo un espacio seguro donde no pasa nada. La regla casera de 'recoger dinero' es popular pero no oficial.",
          de: "In den offiziellen Regeln macht Frei Parken nichts - es ist nur ein sicheres Feld, wo nichts passiert. Die 'Geld einsammeln' Hausregel ist beliebt, aber nicht offiziell.",
          nl: "In de officiële regels doet Vrij Parkeren niets - het is gewoon een veilige plek waar niets gebeurt. De 'geld verzamelen' huisregel is populair maar niet officieel."
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