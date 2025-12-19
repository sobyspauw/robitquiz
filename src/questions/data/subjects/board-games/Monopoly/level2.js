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
    },
    {
      question: {
        en: "What is the rent on Park Place with no houses?",
        es: "¿Cuál es el alquiler de Park Place sin casas?",
        de: "Wie hoch ist die Miete auf Park Place ohne Häuser?",
        nl: "Wat is de huur op Park Place zonder huizen?"
      },
      options: [
        {
          en: "$25",
          es: "$25",
          de: "$25",
          nl: "$25"
        },
        {
          en: "$35",
          es: "$35",
          de: "$35",
          nl: "$35"
        },
        {
          en: "$50",
          es: "$50",
          de: "$50",
          nl: "$50"
        },
        {
          en: "$70",
          es: "$70",
          de: "$70",
          nl: "$70"
        }
      ],
      correct: 1,
      explanation: {
        en: "Park Place charges $35 rent with no houses. With a monopoly (both dark blue properties), rent doubles to $70.",
        es: "Park Place cobra $35 de alquiler sin casas. Con un monopolio (ambas propiedades azul oscuro), el alquiler se duplica a $70.",
        de: "Park Place verlangt 35 $ Miete ohne Häuser. Mit einem Monopol (beide dunkelblauen Grundstücke) verdoppelt sich die Miete auf 70 $.",
        nl: "Park Place vraagt $35 huur zonder huizen. Met een monopolie (beide donkerblauwe eigendommen) verdubbelt de huur naar $70."
      }
    },
    {
      question: {
        en: "How much does it cost to buy Baltic Avenue?",
        es: "¿Cuánto cuesta comprar Baltic Avenue?",
        de: "Wie viel kostet es, Baltic Avenue zu kaufen?",
        nl: "Hoeveel kost het om Baltic Avenue te kopen?"
      },
      options: [
        {
          en: "$50",
          es: "$50",
          de: "$50",
          nl: "$50"
        },
        {
          en: "$60",
          es: "$60",
          de: "$60",
          nl: "$60"
        },
        {
          en: "$80",
          es: "$80",
          de: "$80",
          nl: "$80"
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
        en: "Baltic Avenue costs $60 to purchase, making it one of the cheapest properties along with Mediterranean Avenue.",
        es: "Baltic Avenue cuesta $60 comprar, lo que la convierte en una de las propiedades más baratas junto con Mediterranean Avenue.",
        de: "Baltic Avenue kostet 60 $ zum Kauf, was sie zusammen mit Mediterranean Avenue zu einem der billigsten Grundstücke macht.",
        nl: "Baltic Avenue kost $60 om te kopen, waardoor het een van de goedkoopste eigendommen is samen met Mediterranean Avenue."
      }
    },
    {
      question: {
        en: "What color group is St. Charles Place in?",
        es: "¿En qué grupo de color está St. Charles Place?",
        de: "Zu welcher Farbgruppe gehört St. Charles Place?",
        nl: "In welke kleurgroep zit St. Charles Place?"
      },
      options: [
        {
          en: "Orange",
          es: "Naranja",
          de: "Orange",
          nl: "Oranje"
        },
        {
          en: "Pink",
          es: "Rosa",
          de: "Rosa",
          nl: "Roze"
        },
        {
          en: "Purple",
          es: "Morado",
          de: "Lila",
          nl: "Paars"
        },
        {
          en: "Red",
          es: "Rojo",
          de: "Rot",
          nl: "Rood"
        }
      ],
      correct: 1,
      explanation: {
        en: "St. Charles Place is part of the pink (magenta) property group, along with States Avenue and Virginia Avenue.",
        es: "St. Charles Place es parte del grupo de propiedades rosa (magenta), junto con States Avenue y Virginia Avenue.",
        de: "St. Charles Place gehört zur rosa (magenta) Grundstücksgruppe, zusammen mit States Avenue und Virginia Avenue.",
        nl: "St. Charles Place maakt deel uit van de roze (magenta) eigendomsgroep, samen met States Avenue en Virginia Avenue."
      }
    },
    {
      question: {
        en: "Which railroad comes first after GO?",
        es: "¿Qué ferrocarril viene primero después de SALIDA?",
        de: "Welche Eisenbahn kommt zuerst nach LOS?",
        nl: "Welke spoorweg komt als eerste na START?"
      },
      options: [
        {
          en: "Pennsylvania Railroad",
          es: "Pennsylvania Railroad",
          de: "Pennsylvania Railroad",
          nl: "Pennsylvania Railroad"
        },
        {
          en: "Reading Railroad",
          es: "Reading Railroad",
          de: "Reading Railroad",
          nl: "Reading Railroad"
        },
        {
          en: "B&O Railroad",
          es: "B&O Railroad",
          de: "B&O Railroad",
          nl: "B&O Railroad"
        },
        {
          en: "Short Line",
          es: "Short Line",
          de: "Short Line",
          nl: "Short Line"
        }
      ],
      correct: 1,
      explanation: {
        en: "Reading Railroad is the first railroad on the board, located between the light blue and orange property groups.",
        es: "Reading Railroad es el primer ferrocarril en el tablero, ubicado entre los grupos de propiedades azul claro y naranja.",
        de: "Reading Railroad ist die erste Eisenbahn auf dem Brett, zwischen den hellblauen und orangenen Grundstücksgruppen.",
        nl: "Reading Railroad is de eerste spoorweg op het bord, gelegen tussen de lichtblauwe en oranje eigendomsgroepen."
      }
    },
    {
      question: {
        en: "How much is the Luxury Tax?",
        es: "¿Cuánto es el Impuesto de Lujo?",
        de: "Wie hoch ist die Luxussteuer?",
        nl: "Hoeveel is de Luxebelasting?"
      },
      options: [
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
        },
        {
          en: "$150",
          es: "$150",
          de: "$150",
          nl: "$150"
        }
      ],
      correct: 2,
      explanation: {
        en: "Luxury Tax costs $100 when you land on it. It's located between Park Place and Boardwalk.",
        es: "El Impuesto de Lujo cuesta $100 cuando caes en él. Está ubicado entre Park Place y Boardwalk.",
        de: "Die Luxussteuer kostet 100 $, wenn man darauf landet. Sie befindet sich zwischen Park Place und Boardwalk.",
        nl: "Luxebelasting kost $100 wanneer je erop landt. Het bevindt zich tussen Park Place en Boardwalk."
      }
    },
    {
      question: {
        en: "What happens if you land on an unowned property and choose not to buy it?",
        es: "¿Qué sucede si caes en una propiedad sin dueño y decides no comprarla?",
        de: "Was passiert, wenn Sie auf einem unbewohnten Grundstück landen und es nicht kaufen möchten?",
        nl: "Wat gebeurt er als je op een onbezet eigendom landt en ervoor kiest het niet te kopen?"
      },
      options: [
        {
          en: "Nothing, it stays unowned",
          es: "Nada, sigue sin dueño",
          de: "Nichts, es bleibt unbewohnt",
          nl: "Niets, het blijft onbezet"
        },
        {
          en: "It goes to auction",
          es: "Va a subasta",
          de: "Es wird versteigert",
          nl: "Het gaat naar veiling"
        },
        {
          en: "The next player gets it free",
          es: "El siguiente jugador lo obtiene gratis",
          de: "Der nächste Spieler bekommt es kostenlos",
          nl: "De volgende speler krijgt het gratis"
        },
        {
          en: "The bank keeps it",
          es: "El banco se lo queda",
          de: "Die Bank behält es",
          nl: "De bank houdt het"
        }
      ],
      correct: 1,
      explanation: {
        en: "According to official rules, if you don't buy an unowned property, it must be auctioned to all players, starting at any price.",
        es: "Según las reglas oficiales, si no compras una propiedad sin dueño, debe subastarse a todos los jugadores, comenzando en cualquier precio.",
        de: "Nach offiziellen Regeln muss ein unbewohntes Grundstück, das nicht gekauft wird, an alle Spieler versteigert werden, beginnend bei jedem Preis.",
        nl: "Volgens de officiële regels moet een onbezet eigendom dat je niet koopt, worden geveild aan alle spelers, beginnend bij elke prijs."
      }
    },
    {
      question: {
        en: "How many turns can you stay in jail before you must pay or use a card?",
        es: "¿Cuántos turnos puedes permanecer en la cárcel antes de tener que pagar o usar una tarjeta?",
        de: "Wie viele Runden können Sie im Gefängnis bleiben, bevor Sie zahlen oder eine Karte verwenden müssen?",
        nl: "Hoeveel beurten kun je in de gevangenis blijven voordat je moet betalen of een kaart moet gebruiken?"
      },
      options: [
        {
          en: "1 turn",
          es: "1 turno",
          de: "1 Runde",
          nl: "1 beurt"
        },
        {
          en: "2 turns",
          es: "2 turnos",
          de: "2 Runden",
          nl: "2 beurten"
        },
        {
          en: "3 turns",
          es: "3 turnos",
          de: "3 Runden",
          nl: "3 beurten"
        },
        {
          en: "4 turns",
          es: "4 turnos",
          de: "4 Runden",
          nl: "4 beurten"
        }
      ],
      correct: 2,
      explanation: {
        en: "You can try to roll doubles for up to 3 turns. If you don't roll doubles by the third turn, you must pay $50 or use a Get Out of Jail Free card.",
        es: "Puedes intentar sacar dobles hasta 3 turnos. Si no sacas dobles en el tercer turno, debes pagar $50 o usar una tarjeta de Salir de la Cárcel Gratis.",
        de: "Sie können bis zu 3 Runden versuchen, einen Pasch zu würfeln. Wenn Sie bis zur dritten Runde keinen Pasch würfeln, müssen Sie 50 $ zahlen oder eine Frei-aus-dem-Gefängnis-Karte verwenden.",
        nl: "Je kunt tot 3 beurten proberen dubbel te gooien. Als je niet dubbel gooit tegen de derde beurt, moet je $50 betalen of een Uit de Gevangenis Vrij-kaart gebruiken."
      }
    },
    {
      question: {
        en: "What is the base rent for owning all four railroads?",
        es: "¿Cuál es el alquiler base por poseer los cuatro ferrocarriles?",
        de: "Wie hoch ist die Grundmiete für den Besitz aller vier Eisenbahnen?",
        nl: "Wat is de basishuur voor het bezitten van alle vier spoorwegen?"
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
        en: "If you own all four railroads, the rent is $200 per railroad. Rent is $25 for one, $50 for two, $100 for three, and $200 for all four.",
        es: "Si posees los cuatro ferrocarriles, el alquiler es de $200 por ferrocarril. El alquiler es $25 por uno, $50 por dos, $100 por tres y $200 por los cuatro.",
        de: "Wenn Sie alle vier Eisenbahnen besitzen, beträgt die Miete 200 $ pro Eisenbahn. Die Miete beträgt 25 $ für eine, 50 $ für zwei, 100 $ für drei und 200 $ für alle vier.",
        nl: "Als je alle vier spoorwegen bezit, is de huur $200 per spoorweg. Huur is $25 voor één, $50 voor twee, $100 voor drie en $200 voor alle vier."
      }
    },
    {
      question: {
        en: "Which property is directly before GO on the board?",
        es: "¿Qué propiedad está directamente antes de SALIDA en el tablero?",
        de: "Welches Grundstück befindet sich direkt vor LOS auf dem Brett?",
        nl: "Welk eigendom ligt direct voor START op het bord?"
      },
      options: [
        {
          en: "Boardwalk",
          es: "Boardwalk",
          de: "Boardwalk",
          nl: "Boardwalk"
        },
        {
          en: "Park Place",
          es: "Park Place",
          de: "Park Place",
          nl: "Park Place"
        },
        {
          en: "Short Line",
          es: "Short Line",
          de: "Short Line",
          nl: "Short Line"
        },
        {
          en: "Luxury Tax",
          es: "Impuesto de Lujo",
          de: "Luxussteuer",
          nl: "Luxebelasting"
        }
      ],
      correct: 0,
      explanation: {
        en: "Boardwalk is the last property before GO. Going clockwise: Boardwalk, then GO, then Community Chest, then Mediterranean Avenue.",
        es: "Boardwalk es la última propiedad antes de SALIDA. En sentido horario: Boardwalk, luego SALIDA, luego Arca Comunal, luego Mediterranean Avenue.",
        de: "Boardwalk ist das letzte Grundstück vor LOS. Im Uhrzeigersinn: Boardwalk, dann LOS, dann Gemeinschaftskasse, dann Mediterranean Avenue.",
        nl: "Boardwalk is het laatste eigendom voor START. Met de klok mee: Boardwalk, dan START, dan Algemeen Fonds, dan Mediterranean Avenue."
      }
    },
    {
      question: {
        en: "What must you own before you can build houses?",
        es: "¿Qué debes poseer antes de poder construir casas?",
        de: "Was müssen Sie besitzen, bevor Sie Häuser bauen können?",
        nl: "Wat moet je bezitten voordat je huizen kunt bouwen?"
      },
      options: [
        {
          en: "At least two properties",
          es: "Al menos dos propiedades",
          de: "Mindestens zwei Grundstücke",
          nl: "Minstens twee eigendommen"
        },
        {
          en: "All properties of one color group",
          es: "Todas las propiedades de un grupo de color",
          de: "Alle Grundstücke einer Farbgruppe",
          nl: "Alle eigendommen van één kleurgroep"
        },
        {
          en: "A railroad",
          es: "Un ferrocarril",
          de: "Eine Eisenbahn",
          nl: "Een spoorweg"
        },
        {
          en: "Both utilities",
          es: "Ambos servicios públicos",
          de: "Beide Versorgungsunternehmen",
          nl: "Beide nutsbedrijven"
        }
      ],
      correct: 1,
      explanation: {
        en: "You must own all properties of one complete color group (a monopoly) before you can build houses on any of them.",
        es: "Debes poseer todas las propiedades de un grupo de color completo (un monopolio) antes de poder construir casas en cualquiera de ellas.",
        de: "Sie müssen alle Grundstücke einer vollständigen Farbgruppe (ein Monopol) besitzen, bevor Sie auf einem von ihnen Häuser bauen können.",
        nl: "Je moet alle eigendommen van één complete kleurgroep (een monopolie) bezitten voordat je huizen kunt bouwen op een ervan."
      }
    },
    {
      question: {
        en: "How many houses are in a standard Monopoly set?",
        es: "¿Cuántas casas hay en un set estándar de Monopoly?",
        de: "Wie viele Häuser gibt es in einem Standard-Monopoly-Set?",
        nl: "Hoeveel huizen zitten er in een standaard Monopoly-set?"
      },
      options: [
        {
          en: "24",
          es: "24",
          de: "24",
          nl: "24"
        },
        {
          en: "28",
          es: "28",
          de: "28",
          nl: "28"
        },
        {
          en: "32",
          es: "32",
          de: "32",
          nl: "32"
        },
        {
          en: "36",
          es: "36",
          de: "36",
          nl: "36"
        }
      ],
      correct: 2,
      explanation: {
        en: "A standard Monopoly set contains 32 houses (green plastic buildings). When they run out, no more can be built until some are sold back.",
        es: "Un set estándar de Monopoly contiene 32 casas (edificios de plástico verde). Cuando se agotan, no se pueden construir más hasta que algunas se vendan de vuelta.",
        de: "Ein Standard-Monopoly-Set enthält 32 Häuser (grüne Plastikgebäude). Wenn sie ausgehen, können keine weiteren gebaut werden, bis einige zurückverkauft werden.",
        nl: "Een standaard Monopoly-set bevat 32 huizen (groene plastic gebouwen). Als ze op zijn, kunnen er geen meer worden gebouwd totdat er een aantal worden terugverkocht."
      }
    },
    {
      question: {
        en: "How many hotels are in a standard Monopoly set?",
        es: "¿Cuántos hoteles hay en un set estándar de Monopoly?",
        de: "Wie viele Hotels gibt es in einem Standard-Monopoly-Set?",
        nl: "Hoeveel hotels zitten er in een standaard Monopoly-set?"
      },
      options: [
        {
          en: "8",
          es: "8",
          de: "8",
          nl: "8"
        },
        {
          en: "10",
          es: "10",
          de: "10",
          nl: "10"
        },
        {
          en: "12",
          es: "12",
          de: "12",
          nl: "12"
        },
        {
          en: "16",
          es: "16",
          de: "16",
          nl: "16"
        }
      ],
      correct: 2,
      explanation: {
        en: "There are 12 hotels (red plastic buildings) in a standard Monopoly set. Like houses, when they run out, no more can be built.",
        es: "Hay 12 hoteles (edificios de plástico rojo) en un set estándar de Monopoly. Como las casas, cuando se agotan, no se pueden construir más.",
        de: "Es gibt 12 Hotels (rote Plastikgebäude) in einem Standard-Monopoly-Set. Wie bei Häusern können keine weiteren gebaut werden, wenn sie ausgehen.",
        nl: "Er zijn 12 hotels (rode plastic gebouwen) in een standaard Monopoly-set. Net als huizen, als ze op zijn, kunnen er geen meer worden gebouwd."
      }
    },
    {
      question: {
        en: "What color is Pennsylvania Avenue?",
        es: "¿De qué color es Pennsylvania Avenue?",
        de: "Welche Farbe hat Pennsylvania Avenue?",
        nl: "Welke kleur is Pennsylvania Avenue?"
      },
      options: [
        {
          en: "Yellow",
          es: "Amarillo",
          de: "Gelb",
          nl: "Geel"
        },
        {
          en: "Red",
          es: "Rojo",
          de: "Rot",
          nl: "Rood"
        },
        {
          en: "Green",
          es: "Verde",
          de: "Grün",
          nl: "Groen"
        },
        {
          en: "Orange",
          es: "Naranja",
          de: "Orange",
          nl: "Oranje"
        }
      ],
      correct: 2,
      explanation: {
        en: "Pennsylvania Avenue is part of the green property group, along with Pacific Avenue and North Carolina Avenue.",
        es: "Pennsylvania Avenue es parte del grupo de propiedades verdes, junto con Pacific Avenue y North Carolina Avenue.",
        de: "Pennsylvania Avenue gehört zur grünen Grundstücksgruppe, zusammen mit Pacific Avenue und North Carolina Avenue.",
        nl: "Pennsylvania Avenue maakt deel uit van de groene eigendomsgroep, samen met Pacific Avenue en North Carolina Avenue."
      }
    },
    {
      question: {
        en: "If you mortgage a property, how much do you receive?",
        es: "Si hipotecas una propiedad, ¿cuánto recibes?",
        de: "Wenn Sie ein Grundstück beleihen, wie viel erhalten Sie?",
        nl: "Als je een eigendom hypothekeert, hoeveel ontvang je dan?"
      },
      options: [
        {
          en: "Full purchase price",
          es: "Precio de compra completo",
          de: "Voller Kaufpreis",
          nl: "Volledige aankoopprijs"
        },
        {
          en: "Half the purchase price",
          es: "La mitad del precio de compra",
          de: "Halber Kaufpreis",
          nl: "Helft van de aankoopprijs"
        },
        {
          en: "Quarter of the purchase price",
          es: "Un cuarto del precio de compra",
          de: "Viertel des Kaufpreises",
          nl: "Kwart van de aankoopprijs"
        },
        {
          en: "Double the purchase price",
          es: "El doble del precio de compra",
          de: "Doppelter Kaufpreis",
          nl: "Dubbele aankoopprijs"
        }
      ],
      correct: 1,
      explanation: {
        en: "When you mortgage a property, you receive half of its purchase price from the bank. To unmortgage it, you pay back the mortgage plus 10% interest.",
        es: "Cuando hipotecas una propiedad, recibes la mitad de su precio de compra del banco. Para deshipotecarla, pagas la hipoteca más un 10% de interés.",
        de: "Wenn Sie ein Grundstück beleihen, erhalten Sie die Hälfte des Kaufpreises von der Bank. Um es zu entpfänden, zahlen Sie die Hypothek plus 10% Zinsen zurück.",
        nl: "Wanneer je een eigendom hypothekeert, ontvang je de helft van de aankoopprijs van de bank. Om het te onthypothekeren, betaal je de hypotheek plus 10% rente terug."
      }
    },
    {
      question: {
        en: "What is the second-most expensive property after Boardwalk?",
        es: "¿Cuál es la segunda propiedad más cara después de Boardwalk?",
        de: "Was ist das zweitteuerste Grundstück nach Boardwalk?",
        nl: "Wat is het op één na duurste eigendom na Boardwalk?"
      },
      options: [
        {
          en: "Park Place",
          es: "Park Place",
          de: "Park Place",
          nl: "Park Place"
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
        },
        {
          en: "North Carolina Avenue",
          es: "North Carolina Avenue",
          de: "North Carolina Avenue",
          nl: "North Carolina Avenue"
        }
      ],
      correct: 0,
      explanation: {
        en: "Park Place is the second-most expensive property at $350, just behind Boardwalk at $400. Both are in the dark blue group.",
        es: "Park Place es la segunda propiedad más cara a $350, justo detrás de Boardwalk a $400. Ambas están en el grupo azul oscuro.",
        de: "Park Place ist das zweitteuerste Grundstück mit 350 $, knapp hinter Boardwalk mit 400 $. Beide sind in der dunkelblauen Gruppe.",
        nl: "Park Place is het op één na duurste eigendom voor $350, net achter Boardwalk voor $400. Beide zijn in de donkerblauwe groep."
      }
    },
    {
      question: {
        en: "How much does a house cost on the orange properties?",
        es: "¿Cuánto cuesta una casa en las propiedades naranjas?",
        de: "Wie viel kostet ein Haus auf den orangenen Grundstücken?",
        nl: "Hoeveel kost een huis op de oranje eigendommen?"
      },
      options: [
        {
          en: "$50",
          es: "$50",
          de: "$50",
          nl: "$50"
        },
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
        }
      ],
      correct: 1,
      explanation: {
        en: "Houses on the orange properties (St. James Place, Tennessee Avenue, New York Avenue) cost $100 each. The orange group is considered very valuable strategically.",
        es: "Las casas en las propiedades naranjas (St. James Place, Tennessee Avenue, New York Avenue) cuestan $100 cada una. El grupo naranja se considera muy valioso estratégicamente.",
        de: "Häuser auf den orangenen Grundstücken (St. James Place, Tennessee Avenue, New York Avenue) kosten jeweils 100 $. Die orangene Gruppe gilt als strategisch sehr wertvoll.",
        nl: "Huizen op de oranje eigendommen (St. James Place, Tennessee Avenue, New York Avenue) kosten elk $100. De oranje groep wordt als zeer waardevol beschouwd strategisch."
      }
    },
    {
      question: {
        en: "Can you collect rent while in jail?",
        es: "¿Puedes cobrar alquiler mientras estás en la cárcel?",
        de: "Können Sie Miete einziehen, während Sie im Gefängnis sind?",
        nl: "Kun je huur innen terwijl je in de gevangenis zit?"
      },
      options: [
        {
          en: "No, you cannot collect any money",
          es: "No, no puedes cobrar ningún dinero",
          de: "Nein, Sie können kein Geld einziehen",
          nl: "Nee, je kunt geen geld innen"
        },
        {
          en: "Yes, you can still collect rent",
          es: "Sí, aún puedes cobrar alquiler",
          de: "Ja, Sie können weiterhin Miete einziehen",
          nl: "Ja, je kunt nog steeds huur innen"
        },
        {
          en: "Only if you own a monopoly",
          es: "Solo si tienes un monopolio",
          de: "Nur wenn Sie ein Monopol besitzen",
          nl: "Alleen als je een monopolie bezit"
        },
        {
          en: "Only on railroads and utilities",
          es: "Solo en ferrocarriles y servicios públicos",
          de: "Nur auf Eisenbahnen und Versorgungsunternehmen",
          nl: "Alleen op spoorwegen en nutsbedrijven"
        }
      ],
      correct: 1,
      explanation: {
        en: "Yes, you can still collect rent, buy and sell properties, and build houses while in jail. Being in jail only restricts your movement.",
        es: "Sí, aún puedes cobrar alquiler, comprar y vender propiedades, y construir casas mientras estás en la cárcel. Estar en la cárcel solo restringe tu movimiento.",
        de: "Ja, Sie können weiterhin Miete einziehen, Grundstücke kaufen und verkaufen und Häuser bauen, während Sie im Gefängnis sind. Im Gefängnis zu sein beschränkt nur Ihre Bewegung.",
        nl: "Ja, je kunt nog steeds huur innen, eigendommen kopen en verkopen, en huizen bouwen terwijl je in de gevangenis zit. In de gevangenis zitten beperkt alleen je beweging."
      }
    },
    {
      question: {
        en: "How many Chance spaces are on the board?",
        es: "¿Cuántos espacios de Suerte hay en el tablero?",
        de: "Wie viele Ereignisfelder gibt es auf dem Brett?",
        nl: "Hoeveel Kans-vakken zijn er op het bord?"
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
      correct: 1,
      explanation: {
        en: "There are 3 Chance spaces on a standard Monopoly board, just like Community Chest spaces.",
        es: "Hay 3 espacios de Suerte en un tablero estándar de Monopoly, al igual que los espacios de Arca Comunal.",
        de: "Es gibt 3 Ereignisfelder auf einem Standard-Monopoly-Brett, genau wie Gemeinschaftsfelder.",
        nl: "Er zijn 3 Kans-vakken op een standaard Monopoly-bord, net als Algemeen Fonds-vakken."
      }
    },
    {
      question: {
        en: "What is the cheapest property in the game?",
        es: "¿Cuál es la propiedad más barata del juego?",
        de: "Was ist das billigste Grundstück im Spiel?",
        nl: "Wat is het goedkoopste eigendom in het spel?"
      },
      options: [
        {
          en: "Baltic Avenue",
          es: "Baltic Avenue",
          de: "Baltic Avenue",
          nl: "Baltic Avenue"
        },
        {
          en: "Mediterranean Avenue",
          es: "Mediterranean Avenue",
          de: "Mediterranean Avenue",
          nl: "Mediterranean Avenue"
        },
        {
          en: "Oriental Avenue",
          es: "Oriental Avenue",
          de: "Oriental Avenue",
          nl: "Oriental Avenue"
        },
        {
          en: "Connecticut Avenue",
          es: "Connecticut Avenue",
          de: "Connecticut Avenue",
          nl: "Connecticut Avenue"
        }
      ],
      correct: 1,
      explanation: {
        en: "Mediterranean Avenue and Baltic Avenue both cost $60, making them tied as the cheapest properties. Mediterranean comes first on the board.",
        es: "Mediterranean Avenue y Baltic Avenue cuestan $60, lo que las convierte en las propiedades más baratas empatadas. Mediterranean viene primero en el tablero.",
        de: "Mediterranean Avenue und Baltic Avenue kosten beide 60 $ und sind damit die billigsten Grundstücke. Mediterranean kommt zuerst auf dem Brett.",
        nl: "Mediterranean Avenue en Baltic Avenue kosten beide $60, waardoor ze gelijk staan als de goedkoopste eigendommen. Mediterranean komt eerst op het bord."
      }
    },
    {
      question: {
        en: "How much money do you collect for passing GO?",
        es: "¿Cuánto dinero cobras por pasar SALIDA?",
        de: "Wie viel Geld sammeln Sie für das Passieren von LOS?",
        nl: "Hoeveel geld ontvang je voor het passeren van START?"
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
        en: "Players collect $200 each time they pass or land on GO. This is one of the main sources of income in the game.",
        es: "Los jugadores cobran $200 cada vez que pasan o caen en SALIDA. Esta es una de las principales fuentes de ingresos en el juego.",
        de: "Spieler sammeln 200 $ jedes Mal, wenn sie LOS passieren oder darauf landen. Dies ist eine der Haupteinnahmequellen im Spiel.",
        nl: "Spelers ontvangen $200 elke keer dat ze START passeren of erop landen. Dit is een van de belangrijkste inkomensbronnen in het spel."
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
