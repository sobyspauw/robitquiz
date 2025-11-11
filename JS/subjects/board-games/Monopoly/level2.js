// Quiz Template - Level 2: Bord spelletjes - Monopoly
(function() {
  const level2 = {
  name: {
    en: "Monopoly",
    es: "Monopoly",
    de: "Monopoly",
    nl: "Monopoly"
  },
  questions: [
    {
      question: {
        en: "In what year was Monopoly first published?",
        es: "¿En qué año se publicó Monopoly por primera vez?",
        de: "In welchem Jahr wurde Monopoly erstmals veröffentlicht?",
        nl: "In welk jaar werd Monopoly voor het eerst gepubliceerd?"
      },
      options: [
        {
          en: "1935",
          es: "1935",
          de: "1935",
          nl: "1935"
        },
        {
          en: "1920",
          es: "1920",
          de: "1920",
          nl: "1920"
        },
        {
          en: "1945",
          es: "1945",
          de: "1945",
          nl: "1945"
        },
        {
          en: "1950",
          es: "1950",
          de: "1950",
          nl: "1950"
        }
      ],
      correct: 0,
      explanation: {
        en: "Monopoly was first published by Parker Brothers in 1935.",
        es: "Monopoly fue publicado por primera vez por Parker Brothers en 1935.",
        de: "Monopoly wurde erstmals 1935 von Parker Brothers veröffentlicht.",
        nl: "Monopoly werd voor het eerst gepubliceerd door Parker Brothers in 1935."
      }
    },
    {
      question: {
        en: "What is the rent for Boardwalk with a hotel?",
        es: "¿Cuál es el alquiler de Boardwalk con un hotel?",
        de: "Wie hoch ist die Miete für Boardwalk mit einem Hotel?",
        nl: "Wat is de huur voor Boardwalk met een hotel?"
      },
      options: [
        {
          en: "$1000",
          es: "$1000",
          de: "$1000",
          nl: "$1000"
        },
        {
          en: "$1500",
          es: "$1500",
          de: "$1500",
          nl: "$1500"
        },
        {
          en: "$2000",
          es: "$2000",
          de: "$2000",
          nl: "$2000"
        },
        {
          en: "$2500",
          es: "$2500",
          de: "$2500",
          nl: "$2500"
        }
      ],
      correct: 2,
      explanation: {
        en: "Boardwalk with a hotel charges $2000 in rent, the highest in the game.",
        es: "Boardwalk con un hotel cobra $2000 de alquiler, lo más alto del juego.",
        de: "Boardwalk mit einem Hotel verlangt 2000 $ Miete, die höchste im Spiel.",
        nl: "Boardwalk met een hotel vraagt $2000 huur, de hoogste in het spel."
      }
    },
    {
      question: {
        en: "Which property group is orange in color?",
        es: "¿Qué grupo de propiedades es de color naranja?",
        de: "Welche Grundstücksgruppe ist orange?",
        nl: "Welke eigendomsgroep is oranje van kleur?"
      },
      options: [
        {
          en: "St. James Place, Tennessee Ave, New York Ave",
          es: "St. James Place, Tennessee Ave, New York Ave",
          de: "St. James Place, Tennessee Ave, New York Ave",
          nl: "St. James Place, Tennessee Ave, New York Ave"
        },
        {
          en: "Virginia Ave, States Ave, St. Charles Place",
          es: "Virginia Ave, States Ave, St. Charles Place",
          de: "Virginia Ave, States Ave, St. Charles Place",
          nl: "Virginia Ave, States Ave, St. Charles Place"
        },
        {
          en: "Kentucky Ave, Indiana Ave, Illinois Ave",
          es: "Kentucky Ave, Indiana Ave, Illinois Ave",
          de: "Kentucky Ave, Indiana Ave, Illinois Ave",
          nl: "Kentucky Ave, Indiana Ave, Illinois Ave"
        },
        {
          en: "Atlantic Ave, Ventnor Ave, Marvin Gardens",
          es: "Atlantic Ave, Ventnor Ave, Marvin Gardens",
          de: "Atlantic Ave, Ventnor Ave, Marvin Gardens",
          nl: "Atlantic Ave, Ventnor Ave, Marvin Gardens"
        }
      ],
      correct: 0,
      explanation: {
        en: "St. James Place, Tennessee Avenue, and New York Avenue form the orange property group.",
        es: "St. James Place, Tennessee Avenue y New York Avenue forman el grupo de propiedades naranja.",
        de: "St. James Place, Tennessee Avenue und New York Avenue bilden die orange Grundstücksgruppe.",
        nl: "St. James Place, Tennessee Avenue en New York Avenue vormen de oranje eigendomsgroep."
      }
    },
    {
      question: {
        en: "Which corner space has you pay $75?",
        es: "¿Qué espacio de esquina te hace pagar $75?",
        de: "Auf welchem Eckfeld zahlen Sie 75 $?",
        nl: "Op welk hoekvak betaal je $75?"
      },
      options: [
        {
          en: "Go",
          es: "Salida",
          de: "Los",
          nl: "Start"
        },
        {
          en: "Jail/Just Visiting",
          es: "Cárcel/Solo de Visita",
          de: "Gefängnis/Nur zu Besuch",
          nl: "Gevangenis/Op Bezoek"
        },
        {
          en: "Free Parking",
          es: "Estacionamiento Gratuito",
          de: "Freies Parken",
          nl: "Gratis Parkeren"
        },
        {
          en: "Luxury Tax",
          es: "Impuesto de Lujo",
          de: "Luxussteuer",
          nl: "Luxebelasting"
        }
      ],
      correct: 3,
      explanation: {
        en: "Luxury Tax requires you to pay $75, though it's not technically a corner space (it's near one).",
        es: "El Impuesto de Lujo requiere que pagues $75, aunque técnicamente no es un espacio de esquina (está cerca de uno).",
        de: "Die Luxussteuer erfordert eine Zahlung von 75 $, obwohl sie technisch kein Eckfeld ist (sie ist in der Nähe).",
        nl: "Luxebelasting vereist dat je $75 betaalt, hoewel het technisch geen hoekvak is (het is er dichtbij)."
      }
    },
    {
      question: {
        en: "How much do you collect when passing GO?",
        es: "¿Cuánto cobras al pasar por GO?",
        de: "Wie viel sammeln Sie beim Passieren von LOS?",
        nl: "Hoeveel krijg je als je START passeert?"
      },
      options: [
        {
          en: "$100",
          es: "$100",
          de: "$100",
          nl: "$100"
        },
        {
          en: "$150",
          es: "$150",
          de: "$150",
          nl: "$150"
        },
        {
          en: "$200",
          es: "$200",
          de: "$200",
          nl: "$200"
        },
        {
          en: "$250",
          es: "$250",
          de: "$250",
          nl: "$250"
        }
      ],
      correct: 2,
      explanation: {
        en: "Players collect $200 each time they pass or land on GO.",
        es: "Los jugadores cobran $200 cada vez que pasan o caen en GO.",
        de: "Spieler sammeln 200 $, jedes Mal wenn sie LOS passieren oder darauf landen.",
        nl: "Spelers krijgen $200 elke keer dat ze START passeren of erop landen."
      }
    },
    {
      question: {
        en: "What company currently owns the Monopoly brand?",
        es: "¿Qué compañía posee actualmente la marca Monopoly?",
        de: "Welches Unternehmen besitzt derzeit die Monopoly-Marke?",
        nl: "Welk bedrijf bezit momenteel het Monopoly-merk?"
      },
      options: [
        {
          en: "Mattel",
          es: "Mattel",
          de: "Mattel",
          nl: "Mattel"
        },
        {
          en: "Hasbro",
          es: "Hasbro",
          de: "Hasbro",
          nl: "Hasbro"
        },
        {
          en: "Parker Brothers",
          es: "Parker Brothers",
          de: "Parker Brothers",
          nl: "Parker Brothers"
        },
        {
          en: "Milton Bradley",
          es: "Milton Bradley",
          de: "Milton Bradley",
          nl: "Milton Bradley"
        }
      ],
      correct: 1,
      explanation: {
        en: "Hasbro currently owns Monopoly, having acquired Parker Brothers in 1991.",
        es: "Hasbro posee actualmente Monopoly, habiendo adquirido Parker Brothers en 1991.",
        de: "Hasbro besitzt derzeit Monopoly, nachdem es Parker Brothers 1991 erworben hat.",
        nl: "Hasbro bezit momenteel Monopoly, nadat het Parker Brothers in 1991 heeft overgenomen."
      }
    },
    {
      question: {
        en: "How many Chance cards are in a standard Monopoly game?",
        es: "¿Cuántas cartas de Suerte hay en un juego estándar de Monopoly?",
        de: "Wie viele Ereigniskarten gibt es in einem Standard-Monopoly-Spiel?",
        nl: "Hoeveel Kanskaarten zijn er in een standaard Monopoly-spel?"
      },
      options: [
        {
          en: "12",
          es: "12",
          de: "12",
          nl: "12"
        },
        {
          en: "14",
          es: "14",
          de: "14",
          nl: "14"
        },
        {
          en: "16",
          es: "16",
          de: "16",
          nl: "16"
        },
        {
          en: "18",
          es: "18",
          de: "18",
          nl: "18"
        }
      ],
      correct: 2,
      explanation: {
        en: "There are 16 Chance cards in a standard Monopoly game.",
        es: "Hay 16 cartas de Suerte en un juego estándar de Monopoly.",
        de: "Es gibt 16 Ereigniskarten in einem Standard-Monopoly-Spiel.",
        nl: "Er zijn 16 Kanskaarten in een standaard Monopoly-spel."
      }
    },
    {
      question: {
        en: "How many properties are there in total on a standard board?",
        es: "¿Cuántas propiedades hay en total en un tablero estándar?",
        de: "Wie viele Grundstücke gibt es insgesamt auf einem Standardbrett?",
        nl: "Hoeveel eigendommen zijn er in totaal op een standaardbord?"
      },
      options: [
        {
          en: "22",
          es: "22",
          de: "22",
          nl: "22"
        },
        {
          en: "26",
          es: "26",
          de: "26",
          nl: "26"
        },
        {
          en: "28",
          es: "28",
          de: "28",
          nl: "28"
        },
        {
          en: "30",
          es: "30",
          de: "30",
          nl: "30"
        }
      ],
      correct: 2,
      explanation: {
        en: "There are 28 properties total: 22 colored properties, 4 railroads, and 2 utilities.",
        es: "Hay 28 propiedades en total: 22 propiedades de colores, 4 ferrocarriles y 2 servicios públicos.",
        de: "Es gibt insgesamt 28 Grundstücke: 22 farbige Grundstücke, 4 Eisenbahnen und 2 Versorgungsunternehmen.",
        nl: "Er zijn in totaal 28 eigendommen: 22 gekleurde eigendommen, 4 spoorwegen en 2 nutsbedrijven."
      }
    },
    {
      question: {
        en: "How many Community Chest spaces are on the board?",
        es: "¿Cuántos espacios de Caja de Comunidad hay en el tablero?",
        de: "Wie viele Gemeinschaftsfelder gibt es auf dem Brett?",
        nl: "Hoeveel Algemeen Fonds-vakken zijn er op het bord?"
      },
      options: [
        {
          en: "1",
          es: "1",
          de: "1",
          nl: "1"
        },
        {
          en: "2",
          es: "2",
          de: "2",
          nl: "2"
        },
        {
          en: "3",
          es: "3",
          de: "3",
          nl: "3"
        },
        {
          en: "4",
          es: "4",
          de: "4",
          nl: "4"
        }
      ],
      correct: 2,
      explanation: {
        en: "There are 3 Community Chest spaces on a standard Monopoly board.",
        es: "Hay 3 espacios de Caja de Comunidad en un tablero estándar de Monopoly.",
        de: "Es gibt 3 Gemeinschaftsfelder auf einem Standard-Monopoly-Brett.",
        nl: "Er zijn 3 Algemeen Fonds-vakken op een standaard Monopoly-bord."
      }
    },
    {
      question: {
        en: "How much does it cost to get out of jail?",
        es: "¿Cuánto cuesta salir de la cárcel?",
        de: "Wie viel kostet es, aus dem Gefängnis zu kommen?",
        nl: "Hoeveel kost het om uit de gevangenis te komen?"
      },
      options: [
        {
          en: "$25",
          es: "$25",
          de: "$25",
          nl: "$25"
        },
        {
          en: "$50",
          es: "$50",
          de: "$50",
          nl: "$50"
        },
        {
          en: "$75",
          es: "$75",
          de: "$75",
          nl: "$75"
        },
        {
          en: "$100",
          es: "$100",
          de: "$100",
          nl: "$100"
        }
      ],
      correct: 1,
      explanation: {
        en: "Players can pay $50 to get out of jail immediately.",
        es: "Los jugadores pueden pagar $50 para salir de la cárcel inmediatamente.",
        de: "Spieler können 50 $ zahlen, um sofort aus dem Gefängnis zu kommen.",
        nl: "Spelers kunnen $50 betalen om onmiddellijk uit de gevangenis te komen."
      }
    },
    {
      question: {
        en: "What is the most expensive property on a standard Monopoly board?",
        es: "¿Cuál es la propiedad más cara en un tablero estándar de Monopoly?",
        de: "Was ist das teuerste Grundstück auf einem Standard-Monopoly-Brett?",
        nl: "Wat is het duurste eigendom op een standaard Monopoly-bord?"
      },
      options: [
        {
          en: "Park Place",
          es: "Park Place",
          de: "Park Place",
          nl: "Park Place"
        },
        {
          en: "Boardwalk",
          es: "Boardwalk",
          de: "Boardwalk",
          nl: "Boardwalk"
        },
        {
          en: "Pennsylvania Avenue",
          es: "Pennsylvania Avenue",
          de: "Pennsylvania Avenue",
          nl: "Pennsylvania Avenue"
        },
        {
          en: "Pacific Avenue",
          es: "Pacific Avenue",
          de: "Pacific Avenue",
          nl: "Pacific Avenue"
        }
      ],
      correct: 1,
      explanation: {
        en: "Boardwalk is the most expensive property in the U.S. version, costing $400.",
        es: "Boardwalk es la propiedad más cara en la versión estadounidense, con un costo de $400.",
        de: "Boardwalk ist das teuerste Grundstück in der US-Version und kostet 400 $.",
        nl: "Boardwalk is het duurste eigendom in de Amerikaanse versie en kost $400."
      }
    },
    {
      question: {
        en: "What game piece is NOT traditionally included in Monopoly?",
        es: "¿Qué pieza del juego NO está tradicionalmente incluida en Monopoly?",
        de: "Welche Spielfigur ist traditionell NICHT im Monopoly enthalten?",
        nl: "Welk spelpion is NIET traditioneel inbegrepen in Monopoly?"
      },
      options: [
        {
          en: "Top hat",
          es: "Sombrero de copa",
          de: "Zylinder",
          nl: "Hoge hoed"
        },
        {
          en: "Race car",
          es: "Coche de carreras",
          de: "Rennwagen",
          nl: "Raceauto"
        },
        {
          en: "Airplane",
          es: "Avión",
          de: "Flugzeug",
          nl: "Vliegtuig"
        },
        {
          en: "Crown",
          es: "Corona",
          de: "Krone",
          nl: "Kroon"
        }
      ],
      correct: 3,
      explanation: {
        en: "A crown is not a traditional Monopoly game piece. Classic pieces include the top hat, race car, thimble, and ship.",
        es: "Una corona no es una pieza tradicional de Monopoly. Las piezas clásicas incluyen el sombrero de copa, el coche de carreras, el dedal y el barco.",
        de: "Eine Krone ist keine traditionelle Monopoly-Spielfigur. Zu den klassischen Figuren gehören Zylinder, Rennwagen, Fingerhut und Schiff.",
        nl: "Een kroon is geen traditioneel Monopoly-spelpion. Klassieke pionnen zijn onder andere de hoge hoed, raceauto, vingerhoed en schip."
      }
    },
    {
      question: {
        en: "What are the two utility properties in Monopoly?",
        es: "¿Cuáles son las dos propiedades de servicios públicos en Monopoly?",
        de: "Was sind die beiden Versorgungsunternehmen im Monopoly?",
        nl: "Wat zijn de twee nutsbedrijven in Monopoly?"
      },
      options: [
        {
          en: "Electric Company and Gas Station",
          es: "Compañía Eléctrica y Gasolinera",
          de: "Elektrizitätswerk und Tankstelle",
          nl: "Elektriciteitsbedrijf en Tankstation"
        },
        {
          en: "Water Works and Electric Company",
          es: "Water Works y Compañía Eléctrica",
          de: "Wasserwerk und Elektrizitätswerk",
          nl: "Waterleiding en Elektriciteitsbedrijf"
        },
        {
          en: "Gas Company and Water Works",
          es: "Compañía de Gas y Water Works",
          de: "Gasgesellschaft und Wasserwerk",
          nl: "Gasbedrijf en Waterleiding"
        },
        {
          en: "Phone Company and Electric Company",
          es: "Compañía Telefónica y Compañía Eléctrica",
          de: "Telefongesellschaft und Elektrizitätswerk",
          nl: "Telefoonmaatschappij en Elektriciteitsbedrijf"
        }
      ],
      correct: 1,
      explanation: {
        en: "The two utilities are Water Works and Electric Company.",
        es: "Los dos servicios públicos son Water Works y Compañía Eléctrica.",
        de: "Die beiden Versorgungsunternehmen sind Wasserwerk und Elektrizitätswerk.",
        nl: "De twee nutsbedrijven zijn Waterleiding en Elektriciteitsbedrijf."
      }
    },
    {
      question: {
        en: "What color is Boardwalk in the U.S. version?",
        es: "¿De qué color es Boardwalk en la versión estadounidense?",
        de: "Welche Farbe hat Boardwalk in der US-Version?",
        nl: "Welke kleur is Boardwalk in de Amerikaanse versie?"
      },
      options: [
        {
          en: "Blue",
          es: "Azul",
          de: "Blau",
          nl: "Blauw"
        },
        {
          en: "Green",
          es: "Verde",
          de: "Grün",
          nl: "Groen"
        },
        {
          en: "D. Blue",
          es: "Azul Oscuro",
          de: "Dunkelblau",
          nl: "Donkerblauw"
        },
        {
          en: "Red set",
          es: "Rojo",
          de: "Rot",
          nl: "Rood"
        }
      ],
      correct: 2,
      explanation: {
        en: "Boardwalk and Park Place form the dark blue property group.",
        es: "Boardwalk y Park Place forman el grupo de propiedades azul oscuro.",
        de: "Boardwalk und Park Place bilden die dunkelblaue Grundstücksgruppe.",
        nl: "Boardwalk en Park Place vormen de donkerblauwe eigendomsgroep."
      }
    },
    {
      question: {
        en: "What happens if you roll doubles three times in a row?",
        es: "¿Qué sucede si sacas dobles tres veces seguidas?",
        de: "Was passiert, wenn Sie dreimal hintereinander einen Pasch würfeln?",
        nl: "Wat gebeurt er als je drie keer achter elkaar dubbel gooit?"
      },
      options: [
        {
          en: "You get extra money",
          es: "Obtienes dinero extra",
          de: "Sie bekommen extra Geld",
          nl: "Je krijgt extra geld"
        },
        {
          en: "You go to jail",
          es: "Vas a la cárcel",
          de: "Sie gehen ins Gefängnis",
          nl: "Je gaat naar de gevangenis"
        },
        {
          en: "You lose a turn",
          es: "Pierdes un turno",
          de: "Sie verlieren eine Runde",
          nl: "Je verliest een beurt"
        },
        {
          en: "You win the game",
          es: "Ganas el juego",
          de: "Sie gewinnen das Spiel",
          nl: "Je wint het spel"
        }
      ],
      correct: 1,
      explanation: {
        en: "Rolling doubles three times in a row sends you directly to jail.",
        es: "Sacar dobles tres veces seguidas te envía directamente a la cárcel.",
        de: "Wenn Sie dreimal hintereinander einen Pasch würfeln, gehen Sie direkt ins Gefängnis.",
        nl: "Als je drie keer achter elkaar dubbel gooit, ga je direct naar de gevangenis."
      }
    },
    {
      question: {
        en: "How much money does each player start with in standard Monopoly?",
        es: "¿Con cuánto dinero comienza cada jugador en Monopoly estándar?",
        de: "Mit wie viel Geld beginnt jeder Spieler im Standard-Monopoly?",
        nl: "Met hoeveel geld begint elke speler in standaard Monopoly?"
      },
      options: [
        {
          en: "$1000",
          es: "$1000",
          de: "$1000",
          nl: "$1000"
        },
        {
          en: "$1500",
          es: "$1500",
          de: "$1500",
          nl: "$1500"
        },
        {
          en: "$2000",
          es: "$2000",
          de: "$2000",
          nl: "$2000"
        },
        {
          en: "$2500",
          es: "$2500",
          de: "$2500",
          nl: "$2500"
        }
      ],
      correct: 1,
      explanation: {
        en: "Each player begins with $1500 in standard Monopoly rules.",
        es: "Cada jugador comienza con $1500 en las reglas estándar de Monopoly.",
        de: "Jeder Spieler beginnt mit 1500 $ nach den Standard-Monopoly-Regeln.",
        nl: "Elke speler begint met $1500 in de standaard Monopoly-regels."
      }
    },
    {
      question: {
        en: "How many houses can you build on a single property?",
        es: "¿Cuántas casas puedes construir en una sola propiedad?",
        de: "Wie viele Häuser können Sie auf einem einzelnen Grundstück bauen?",
        nl: "Hoeveel huizen kun je op een enkel eigendom bouwen?"
      },
      options: [
        {
          en: "3",
          es: "3",
          de: "3",
          nl: "3"
        },
        {
          en: "4",
          es: "4",
          de: "4",
          nl: "4"
        },
        {
          en: "5",
          es: "5",
          de: "5",
          nl: "5"
        },
        {
          en: "6",
          es: "6",
          de: "6",
          nl: "6"
        }
      ],
      correct: 1,
      explanation: {
        en: "You can build up to 4 houses on a property before upgrading to a hotel.",
        es: "Puedes construir hasta 4 casas en una propiedad antes de mejorar a un hotel.",
        de: "Sie können bis zu 4 Häuser auf einem Grundstück bauen, bevor Sie zu einem Hotel aufsteigen.",
        nl: "Je kunt tot 4 huizen op een eigendom bouwen voordat je upgradet naar een hotel."
      }
    },
    {
      question: {
        en: "What is Income Tax set at in classic Monopoly?",
        es: "¿A cuánto se establece el Impuesto sobre la Renta en el Monopoly clásico?",
        de: "Auf wie viel ist die Einkommensteuer im klassischen Monopoly festgelegt?",
        nl: "Op hoeveel is de Inkomstenbelasting ingesteld in klassiek Monopoly?"
      },
      options: [
        {
          en: "$100",
          es: "$100",
          de: "$100",
          nl: "$100"
        },
        {
          en: "$150",
          es: "$150",
          de: "$150",
          nl: "$150"
        },
        {
          en: "$200",
          es: "$200",
          de: "$200",
          nl: "$200"
        },
        {
          en: "$250",
          es: "$250",
          de: "$250",
          nl: "$250"
        }
      ],
      correct: 2,
      explanation: {
        en: "Income Tax is $200 in modern versions (it was previously $200 or 10% of total worth).",
        es: "El Impuesto sobre la Renta es de $200 en las versiones modernas (anteriormente era $200 o el 10% del valor total).",
        de: "Die Einkommensteuer beträgt in modernen Versionen 200 $ (früher waren es 200 $ oder 10 % des Gesamtvermögens).",
        nl: "Inkomstenbelasting is $200 in moderne versies (het was eerder $200 of 10% van de totale waarde)."
      }
    },
    {
      question: {
        en: "How many railroads are on a standard Monopoly board?",
        es: "¿Cuántos ferrocarriles hay en un tablero estándar de Monopoly?",
        de: "Wie viele Eisenbahnen gibt es auf einem Standard-Monopoly-Brett?",
        nl: "Hoeveel spoorwegen zijn er op een standaard Monopoly-bord?"
      },
      options: [
        {
          en: "2",
          es: "2",
          de: "2",
          nl: "2"
        },
        {
          en: "3",
          es: "3",
          de: "3",
          nl: "3"
        },
        {
          en: "4",
          es: "4",
          de: "4",
          nl: "4"
        },
        {
          en: "5",
          es: "5",
          de: "5",
          nl: "5"
        }
      ],
      correct: 2,
      explanation: {
        en: "There are 4 railroads: Reading, Pennsylvania, B&O, and Short Line.",
        es: "Hay 4 ferrocarriles: Reading, Pennsylvania, B&O y Short Line.",
        de: "Es gibt 4 Eisenbahnen: Reading, Pennsylvania, B&O und Short Line.",
        nl: "Er zijn 4 spoorwegen: Reading, Pennsylvania, B&O en Short Line."
      }
    },
    {
      question: {
        en: "What happens when you land on 'Free Parking' in official rules?",
        es: "¿Qué sucede cuando caes en 'Estacionamiento Gratuito' en las reglas oficiales?",
        de: "Was passiert, wenn man nach offiziellen Regeln auf 'Freies Parken' landet?",
        nl: "Wat gebeurt er wanneer je op 'Gratis Parkeren' landt volgens de officiële regels?"
      },
      options: [
        {
          en: "You collect all taxes and fees",
          es: "Cobras todos los impuestos y tarifas",
          de: "Sie sammeln alle Steuern und Gebühren",
          nl: "Je verzamelt alle belastingen en kosten"
        },
        {
          en: "Nothing happens",
          es: "No pasa nada",
          de: "Es passiert nichts",
          nl: "Er gebeurt niets"
        },
        {
          en: "You get $500",
          es: "Obtienes $500",
          de: "Sie erhalten 500 $",
          nl: "Je krijgt $500"
        },
        {
          en: "You roll again",
          es: "Tiras de nuevo",
          de: "Sie würfeln erneut",
          nl: "Je gooit opnieuw"
        }
      ],
      correct: 1,
      explanation: {
        en: "In official Monopoly rules, landing on Free Parking does nothing - it's just a rest space.",
        es: "En las reglas oficiales de Monopoly, caer en Estacionamiento Gratuito no hace nada, es solo un espacio de descanso.",
        de: "Nach offiziellen Monopoly-Regeln passiert beim Landen auf Freies Parken nichts - es ist nur ein Ruheplatz.",
        nl: "Volgens de officiële Monopoly-regels gebeurt er niets als je op Gratis Parkeren landt - het is gewoon een rustplek."
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
