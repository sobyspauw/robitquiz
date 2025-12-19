// Quiz Template - Level 3: Board Games - Monopoly (Properties & Strategy)
(function() {
  const level3 = {
    name: {
      en: "Monopoly - Properties",
      es: "Monopoly - Propiedades",
      de: "Monopoly - Eigenschaften",
      nl: "Monopoly - Eigendommen"
    },
    questions: [
      {
        question: {
          en: "Which color property group has only 2 properties?",
          es: "¿Qué grupo de propiedades de color tiene solo 2 propiedades?",
          de: "Welche Farbgruppe hat nur 2 Eigenschaften?",
          nl: "Welke kleurgroep heeft slechts 2 eigendommen?"
        },
        options: [
          { en: "Brown", es: "Marrón", de: "Braun", nl: "Bruin" },
          { en: "Dark Blue", es: "Azul Oscuro", de: "Dunkelblau", nl: "Donkerblauw" },
          { en: "Light Blue", es: "Azul Claro", de: "Hellblau", nl: "Lichtblauw" },
          { en: "Orange", es: "Naranja", de: "Orange", nl: "Oranje" }
        ],
        correct: 1,
        explanation: {
          en: "Dark Blue (Boardwalk & Park Place) and Brown are the only groups with 2 properties instead of 3.",
          es: "Azul Oscuro (Boardwalk y Park Place) y Marrón son los únicos grupos con 2 propiedades en lugar de 3.",
          de: "Dunkelblau (Boardwalk & Park Place) und Braun sind die einzigen Gruppen mit 2 statt 3 Eigenschaften.",
          nl: "Donkerblauw (Boardwalk & Park Place) en Bruin zijn de enige groepen met 2 eigendommen in plaats van 3."
        }
      },
      {
        question: {
          en: "What are the brown properties?",
          es: "¿Cuáles son las propiedades marrones?",
          de: "Was sind die braunen Eigenschaften?",
          nl: "Wat zijn de bruine eigendommen?"
        },
        options: [
          { en: "Mediterranean Ave & Baltic Ave", es: "Mediterranean Ave y Baltic Ave", de: "Mediterranean Ave & Baltic Ave", nl: "Mediterranean Ave & Baltic Ave" },
          { en: "Oriental Ave & Vermont Ave", es: "Oriental Ave y Vermont Ave", de: "Oriental Ave & Vermont Ave", nl: "Oriental Ave & Vermont Ave" },
          { en: "Connecticut Ave & St. Charles Place", es: "Connecticut Ave y St. Charles Place", de: "Connecticut Ave & St. Charles Place", nl: "Connecticut Ave & St. Charles Place" },
          { en: "Virginia Ave & States Ave", es: "Virginia Ave y States Ave", de: "Virginia Ave & States Ave", nl: "Virginia Ave & States Ave" }
        ],
        correct: 0,
        explanation: {
          en: "Mediterranean Avenue and Baltic Avenue are the two brown properties, the cheapest on the board.",
          es: "Mediterranean Avenue y Baltic Avenue son las dos propiedades marrones, las más baratas del tablero.",
          de: "Mediterranean Avenue und Baltic Avenue sind die beiden braunen Eigenschaften, die billigsten auf dem Brett.",
          nl: "Mediterranean Avenue en Baltic Avenue zijn de twee bruine eigendommen, de goedkoopste op het bord."
        }
      },
      {
        question: {
          en: "Which property group is the most landed-on statistically?",
          es: "¿Qué grupo de propiedades es el más visitado estadísticamente?",
          de: "Welche Grundstücksgruppe wird statistisch am häufigsten besucht?",
          nl: "Welke eigendomsgroep wordt statistisch het meest bezocht?"
        },
        options: [
          { en: "Orange", es: "Naranja", de: "Orange", nl: "Oranje" },
          { en: "Red", es: "Rojo", de: "Rot", nl: "Rood" },
          { en: "Yellow", es: "Amarillo", de: "Gelb", nl: "Geel" },
          { en: "Green", es: "Verde", de: "Grün", nl: "Groen" }
        ],
        correct: 0,
        explanation: {
          en: "Orange properties are statistically landed on most often due to their position 6-9 spaces from Jail.",
          es: "Las propiedades naranjas son estadísticamente las más visitadas debido a su posición 6-9 espacios desde la Cárcel.",
          de: "Orange Eigenschaften werden statistisch am häufigsten besucht aufgrund ihrer Position 6-9 Felder vom Gefängnis.",
          nl: "Oranje eigendommen worden statistisch het vaakst bezocht vanwege hun positie 6-9 vakjes van de Gevangenis."
        }
      },
      {
        question: {
          en: "What are the light blue properties?",
          es: "¿Cuáles son las propiedades azul claro?",
          de: "Was sind die hellblauen Eigenschaften?",
          nl: "Wat zijn de lichtblauwe eigendommen?"
        },
        options: [
          { en: "Oriental, Vermont, Connecticut", es: "Oriental, Vermont, Connecticut", de: "Oriental, Vermont, Connecticut", nl: "Oriental, Vermont, Connecticut" },
          { en: "St. Charles, States, Virginia", es: "St. Charles, States, Virginia", de: "St. Charles, States, Virginia", nl: "St. Charles, States, Virginia" },
          { en: "Atlantic, Ventnor, Marvin Gardens", es: "Atlantic, Ventnor, Marvin Gardens", de: "Atlantic, Ventnor, Marvin Gardens", nl: "Atlantic, Ventnor, Marvin Gardens" },
          { en: "Park Place, Boardwalk", es: "Park Place, Boardwalk", de: "Park Place, Boardwalk", nl: "Park Place, Boardwalk" }
        ],
        correct: 0,
        explanation: {
          en: "Oriental Avenue, Vermont Avenue, and Connecticut Avenue make up the light blue property group.",
          es: "Oriental Avenue, Vermont Avenue y Connecticut Avenue forman el grupo de propiedades azul claro.",
          de: "Oriental Avenue, Vermont Avenue und Connecticut Avenue bilden die hellblaue Grundstücksgruppe.",
          nl: "Oriental Avenue, Vermont Avenue en Connecticut Avenue vormen de lichtblauwe eigendomsgroep."
        }
      },
      {
        question: {
          en: "What are the pink (magenta) properties?",
          es: "¿Cuáles son las propiedades rosas (magenta)?",
          de: "Was sind die rosa (magenta) Eigenschaften?",
          nl: "Wat zijn de roze (magenta) eigendommen?"
        },
        options: [
          { en: "St. Charles, States, Virginia", es: "St. Charles, States, Virginia", de: "St. Charles, States, Virginia", nl: "St. Charles, States, Virginia" },
          { en: "St. James, Tennessee, New York", es: "St. James, Tennessee, New York", de: "St. James, Tennessee, New York", nl: "St. James, Tennessee, New York" },
          { en: "Kentucky, Indiana, Illinois", es: "Kentucky, Indiana, Illinois", de: "Kentucky, Indiana, Illinois", nl: "Kentucky, Indiana, Illinois" },
          { en: "Pacific, North Carolina, Pennsylvania", es: "Pacific, North Carolina, Pennsylvania", de: "Pacific, North Carolina, Pennsylvania", nl: "Pacific, North Carolina, Pennsylvania" }
        ],
        correct: 0,
        explanation: {
          en: "St. Charles Place, States Avenue, and Virginia Avenue are the pink/magenta properties.",
          es: "St. Charles Place, States Avenue y Virginia Avenue son las propiedades rosa/magenta.",
          de: "St. Charles Place, States Avenue und Virginia Avenue sind die rosa/magenta Eigenschaften.",
          nl: "St. Charles Place, States Avenue en Virginia Avenue zijn de roze/magenta eigendommen."
        }
      },
      {
        question: {
          en: "What are the red properties?",
          es: "¿Cuáles son las propiedades rojas?",
          de: "Was sind die roten Eigenschaften?",
          nl: "Wat zijn de rode eigendommen?"
        },
        options: [
          { en: "Kentucky, Indiana, Illinois", es: "Kentucky, Indiana, Illinois", de: "Kentucky, Indiana, Illinois", nl: "Kentucky, Indiana, Illinois" },
          { en: "Atlantic, Ventnor, Marvin Gardens", es: "Atlantic, Ventnor, Marvin Gardens", de: "Atlantic, Ventnor, Marvin Gardens", nl: "Atlantic, Ventnor, Marvin Gardens" },
          { en: "St. James, Tennessee, New York", es: "St. James, Tennessee, New York", de: "St. James, Tennessee, New York", nl: "St. James, Tennessee, New York" },
          { en: "Pacific, North Carolina, Pennsylvania", es: "Pacific, North Carolina, Pennsylvania", de: "Pacific, North Carolina, Pennsylvania", nl: "Pacific, North Carolina, Pennsylvania" }
        ],
        correct: 0,
        explanation: {
          en: "Kentucky Avenue, Indiana Avenue, and Illinois Avenue form the red property group.",
          es: "Kentucky Avenue, Indiana Avenue e Illinois Avenue forman el grupo de propiedades rojas.",
          de: "Kentucky Avenue, Indiana Avenue und Illinois Avenue bilden die rote Grundstücksgruppe.",
          nl: "Kentucky Avenue, Indiana Avenue en Illinois Avenue vormen de rode eigendomsgroep."
        }
      },
      {
        question: {
          en: "What are the yellow properties?",
          es: "¿Cuáles son las propiedades amarillas?",
          de: "Was sind die gelben Eigenschaften?",
          nl: "Wat zijn de gele eigendommen?"
        },
        options: [
          { en: "Atlantic, Ventnor, Marvin Gardens", es: "Atlantic, Ventnor, Marvin Gardens", de: "Atlantic, Ventnor, Marvin Gardens", nl: "Atlantic, Ventnor, Marvin Gardens" },
          { en: "Kentucky, Indiana, Illinois", es: "Kentucky, Indiana, Illinois", de: "Kentucky, Indiana, Illinois", nl: "Kentucky, Indiana, Illinois" },
          { en: "Pacific, North Carolina, Pennsylvania", es: "Pacific, North Carolina, Pennsylvania", de: "Pacific, North Carolina, Pennsylvania", nl: "Pacific, North Carolina, Pennsylvania" },
          { en: "St. James, Tennessee, New York", es: "St. James, Tennessee, New York", de: "St. James, Tennessee, New York", nl: "St. James, Tennessee, New York" }
        ],
        correct: 0,
        explanation: {
          en: "Atlantic Avenue, Ventnor Avenue, and Marvin Gardens make up the yellow property group.",
          es: "Atlantic Avenue, Ventnor Avenue y Marvin Gardens forman el grupo de propiedades amarillas.",
          de: "Atlantic Avenue, Ventnor Avenue und Marvin Gardens bilden die gelbe Grundstücksgruppe.",
          nl: "Atlantic Avenue, Ventnor Avenue en Marvin Gardens vormen de gele eigendomsgroep."
        }
      },
      {
        question: {
          en: "What are the green properties?",
          es: "¿Cuáles son las propiedades verdes?",
          de: "Was sind die grünen Eigenschaften?",
          nl: "Wat zijn de groene eigendommen?"
        },
        options: [
          { en: "Pacific, North Carolina, Pennsylvania", es: "Pacific, North Carolina, Pennsylvania", de: "Pacific, North Carolina, Pennsylvania", nl: "Pacific, North Carolina, Pennsylvania" },
          { en: "Kentucky, Indiana, Illinois", es: "Kentucky, Indiana, Illinois", de: "Kentucky, Indiana, Illinois", nl: "Kentucky, Indiana, Illinois" },
          { en: "Atlantic, Ventnor, Marvin Gardens", es: "Atlantic, Ventnor, Marvin Gardens", de: "Atlantic, Ventnor, Marvin Gardens", nl: "Atlantic, Ventnor, Marvin Gardens" },
          { en: "St. Charles, States, Virginia", es: "St. Charles, States, Virginia", de: "St. Charles, States, Virginia", nl: "St. Charles, States, Virginia" }
        ],
        correct: 0,
        explanation: {
          en: "Pacific Avenue, North Carolina Avenue, and Pennsylvania Avenue are the green properties.",
          es: "Pacific Avenue, North Carolina Avenue y Pennsylvania Avenue son las propiedades verdes.",
          de: "Pacific Avenue, North Carolina Avenue und Pennsylvania Avenue sind die grünen Eigenschaften.",
          nl: "Pacific Avenue, North Carolina Avenue en Pennsylvania Avenue zijn de groene eigendommen."
        }
      },
      {
        question: {
          en: "How much does Mediterranean Avenue cost?",
          es: "¿Cuánto cuesta Mediterranean Avenue?",
          de: "Wie viel kostet die Mediterranean Avenue?",
          nl: "Hoeveel kost Mediterranean Avenue?"
        },
        options: [
          { en: "$60", es: "$60", de: "$60", nl: "$60" },
          { en: "$80", es: "$80", de: "$80", nl: "$80" },
          { en: "$100", es: "$100", de: "$100", nl: "$100" },
          { en: "$120", es: "$120", de: "$120", nl: "$120" }
        ],
        correct: 0,
        explanation: {
          en: "Mediterranean Avenue is the cheapest property on the board at $60.",
          es: "Mediterranean Avenue es la propiedad más barata del tablero a $60.",
          de: "Mediterranean Avenue ist die billigste Eigenschaft auf dem Brett für $60.",
          nl: "Mediterranean Avenue is het goedkoopste eigendom op het bord voor $60."
        }
      },
      {
        question: {
          en: "How much does Park Place cost?",
          es: "¿Cuánto cuesta Park Place?",
          de: "Wie viel kostet Park Place?",
          nl: "Hoeveel kost Park Place?"
        },
        options: [
          { en: "$300", es: "$300", de: "$300", nl: "$300" },
          { en: "$320", es: "$320", de: "$320", nl: "$320" },
          { en: "$350", es: "$350", de: "$350", nl: "$350" },
          { en: "$400", es: "$400", de: "$400", nl: "$400" }
        ],
        correct: 2,
        explanation: {
          en: "Park Place costs $350, making it the second most expensive property after Boardwalk ($400).",
          es: "Park Place cuesta $350, lo que lo convierte en la segunda propiedad más cara después de Boardwalk ($400).",
          de: "Park Place kostet $350 und ist damit die zweitteuerste Eigenschaft nach Boardwalk ($400).",
          nl: "Park Place kost $350, waarmee het het op één na duurste eigendom is na Boardwalk ($400)."
        }
      },
      {
        question: {
          en: "What is the mortgage value of Boardwalk?",
          es: "¿Cuál es el valor hipotecario de Boardwalk?",
          de: "Was ist der Hypothekenwert von Boardwalk?",
          nl: "Wat is de hypotheekwaarde van Boardwalk?"
        },
        options: [
          { en: "$150", es: "$150", de: "$150", nl: "$150" },
          { en: "$175", es: "$175", de: "$175", nl: "$175" },
          { en: "$200", es: "$200", de: "$200", nl: "$200" },
          { en: "$250", es: "$250", de: "$250", nl: "$250" }
        ],
        correct: 2,
        explanation: {
          en: "Boardwalk's mortgage value is $200, half of its $400 purchase price.",
          es: "El valor hipotecario de Boardwalk es $200, la mitad de su precio de compra de $400.",
          de: "Der Hypothekenwert von Boardwalk beträgt $200, die Hälfte des Kaufpreises von $400.",
          nl: "De hypotheekwaarde van Boardwalk is $200, de helft van de aankoopprijs van $400."
        }
      },
      {
        question: {
          en: "Which property is directly before GO?",
          es: "¿Qué propiedad está directamente antes de GO?",
          de: "Welche Eigenschaft kommt direkt vor LOS?",
          nl: "Welk eigendom is direct voor START?"
        },
        options: [
          { en: "Boardwalk", es: "Boardwalk", de: "Boardwalk", nl: "Boardwalk" },
          { en: "Park Place", es: "Park Place", de: "Park Place", nl: "Park Place" },
          { en: "Short Line Railroad", es: "Short Line Railroad", de: "Short Line Railroad", nl: "Short Line Railroad" },
          { en: "Luxury Tax", es: "Impuesto de Lujo", de: "Luxussteuer", nl: "Luxebelasting" }
        ],
        correct: 0,
        explanation: {
          en: "Boardwalk is the last property before GO, positioned at space 39.",
          es: "Boardwalk es la última propiedad antes de GO, posicionada en el espacio 39.",
          de: "Boardwalk ist die letzte Eigenschaft vor LOS, auf Feld 39 positioniert.",
          nl: "Boardwalk is het laatste eigendom voor START, gepositioneerd op vak 39."
        }
      },
      {
        question: {
          en: "How much does it cost to build a house?",
          es: "¿Cuánto cuesta construir una casa?",
          de: "Wie viel kostet es, ein Haus zu bauen?",
          nl: "Hoeveel kost het om een huis te bouwen?"
        },
        options: [
          { en: "Same for all properties", es: "Igual para todas las propiedades", de: "Gleich für alle Eigenschaften", nl: "Hetzelfde voor alle eigendommen" },
          { en: "Depends on the property group", es: "Depende del grupo de propiedades", de: "Hängt von der Grundstücksgruppe ab", nl: "Hangt af van de eigendomsgroep" },
          { en: "$100 for all", es: "$100 para todos", de: "$100 für alle", nl: "$100 voor allemaal" },
          { en: "$50 for all", es: "$50 para todos", de: "$50 für alle", nl: "$50 voor allemaal" }
        ],
        correct: 1,
        explanation: {
          en: "House costs vary by property group: $50 for brown/light blue, up to $200 for dark blue.",
          es: "Los costos de las casas varían según el grupo: $50 para marrón/azul claro, hasta $200 para azul oscuro.",
          de: "Hauskosten variieren nach Gruppe: $50 für braun/hellblau, bis zu $200 für dunkelblau.",
          nl: "Huiskosten variëren per groep: $50 voor bruin/lichtblauw, tot $200 voor donkerblauw."
        }
      },
      {
        question: {
          en: "How much does a house cost on the brown properties?",
          es: "¿Cuánto cuesta una casa en las propiedades marrones?",
          de: "Wie viel kostet ein Haus auf den braunen Eigenschaften?",
          nl: "Hoeveel kost een huis op de bruine eigendommen?"
        },
        options: [
          { en: "$25", es: "$25", de: "$25", nl: "$25" },
          { en: "$50", es: "$50", de: "$50", nl: "$50" },
          { en: "$100", es: "$100", de: "$100", nl: "$100" },
          { en: "$150", es: "$150", de: "$150", nl: "$150" }
        ],
        correct: 1,
        explanation: {
          en: "Houses on brown properties cost $50 each, the cheapest building cost in the game.",
          es: "Las casas en propiedades marrones cuestan $50 cada una, el costo de construcción más barato del juego.",
          de: "Häuser auf braunen Eigenschaften kosten jeweils $50, die billigsten Baukosten im Spiel.",
          nl: "Huizen op bruine eigendommen kosten elk $50, de goedkoopste bouwkosten in het spel."
        }
      },
      {
        question: {
          en: "How much does a house cost on the dark blue properties?",
          es: "¿Cuánto cuesta una casa en las propiedades azul oscuro?",
          de: "Wie viel kostet ein Haus auf den dunkelblauen Eigenschaften?",
          nl: "Hoeveel kost een huis op de donkerblauwe eigendommen?"
        },
        options: [
          { en: "$100", es: "$100", de: "$100", nl: "$100" },
          { en: "$150", es: "$150", de: "$150", nl: "$150" },
          { en: "$200", es: "$200", de: "$200", nl: "$200" },
          { en: "$250", es: "$250", de: "$250", nl: "$250" }
        ],
        correct: 2,
        explanation: {
          en: "Houses on dark blue properties (Park Place & Boardwalk) cost $200 each, the most expensive.",
          es: "Las casas en propiedades azul oscuro (Park Place y Boardwalk) cuestan $200 cada una, las más caras.",
          de: "Häuser auf dunkelblauen Eigenschaften (Park Place & Boardwalk) kosten jeweils $200, die teuersten.",
          nl: "Huizen op donkerblauwe eigendommen (Park Place & Boardwalk) kosten elk $200, de duurste."
        }
      },
      {
        question: {
          en: "Must you own ALL properties in a color group to build houses?",
          es: "¿Debes poseer TODAS las propiedades de un grupo de colores para construir casas?",
          de: "Müssen Sie ALLE Eigenschaften einer Farbgruppe besitzen, um Häuser zu bauen?",
          nl: "Moet je ALLE eigendommen in een kleurgroep bezitten om huizen te bouwen?"
        },
        options: [
          { en: "Yes, you need all properties", es: "Sí, necesitas todas las propiedades", de: "Ja, Sie brauchen alle Eigenschaften", nl: "Ja, je hebt alle eigendommen nodig" },
          { en: "No, just 2 properties", es: "No, solo 2 propiedades", de: "Nein, nur 2 Eigenschaften", nl: "Nee, slechts 2 eigendommen" },
          { en: "Only if you have a monopoly card", es: "Solo si tienes una carta de monopolio", de: "Nur mit einer Monopolkarte", nl: "Alleen met een monopoliekaart" },
          { en: "No, you can build on any property", es: "No, puedes construir en cualquier propiedad", de: "Nein, auf jeder Eigenschaft", nl: "Nee, op elk eigendom" }
        ],
        correct: 0,
        explanation: {
          en: "You must own all properties in a color group (a monopoly) before you can build houses or hotels.",
          es: "Debes poseer todas las propiedades de un grupo de colores (un monopolio) antes de poder construir casas u hoteles.",
          de: "Sie müssen alle Eigenschaften einer Farbgruppe (ein Monopol) besitzen, bevor Sie Häuser oder Hotels bauen können.",
          nl: "Je moet alle eigendommen in een kleurgroep bezitten (een monopolie) voordat je huizen of hotels kunt bouwen."
        }
      },
      {
        question: {
          en: "Can you build houses unevenly on your monopoly?",
          es: "¿Puedes construir casas de manera desigual en tu monopolio?",
          de: "Können Sie Häuser ungleichmäßig auf Ihrem Monopol bauen?",
          nl: "Kun je ongelijk huizen bouwen op je monopolie?"
        },
        options: [
          { en: "Yes, build wherever you want", es: "Sí, construye donde quieras", de: "Ja, bauen Sie wo Sie wollen", nl: "Ja, bouw waar je wilt" },
          { en: "No, must build evenly", es: "No, debes construir de manera uniforme", de: "Nein, muss gleichmäßig bauen", nl: "Nee, moet gelijkmatig bouwen" },
          { en: "Only on your most expensive property", es: "Solo en tu propiedad más cara", de: "Nur auf Ihrer teuersten Eigenschaft", nl: "Alleen op je duurste eigendom" },
          { en: "Only with permission from other players", es: "Solo con permiso de otros jugadores", de: "Nur mit Erlaubnis anderer Spieler", nl: "Alleen met toestemming van andere spelers" }
        ],
        correct: 1,
        explanation: {
          en: "You must build evenly - each property in the group must have the same number of houses before adding more.",
          es: "Debes construir uniformemente: cada propiedad del grupo debe tener el mismo número de casas antes de agregar más.",
          de: "Sie müssen gleichmäßig bauen - jede Eigenschaft in der Gruppe muss die gleiche Anzahl Häuser haben, bevor Sie mehr hinzufügen.",
          nl: "Je moet gelijkmatig bouwen - elk eigendom in de groep moet hetzelfde aantal huizen hebben voordat je er meer toevoegt."
        }
      },
      {
        question: {
          en: "What happens to houses when you mortgage a property?",
          es: "¿Qué sucede con las casas cuando hipotecas una propiedad?",
          de: "Was passiert mit Häusern, wenn Sie eine Eigenschaft beleihen?",
          nl: "Wat gebeurt er met huizen als je een eigendom hypothekeert?"
        },
        options: [
          { en: "Houses stay on the property", es: "Las casas permanecen en la propiedad", de: "Häuser bleiben auf der Eigenschaft", nl: "Huizen blijven op het eigendom" },
          { en: "Must sell houses back to bank first", es: "Primero debes vender las casas al banco", de: "Müssen Häuser zuerst an Bank verkaufen", nl: "Moet huizen eerst terugverkopen aan bank" },
          { en: "Houses transfer to the buyer", es: "Las casas se transfieren al comprador", de: "Häuser gehen an Käufer", nl: "Huizen gaan over naar koper" },
          { en: "Houses become hotels automatically", es: "Las casas se convierten automáticamente en hoteles", de: "Häuser werden automatisch Hotels", nl: "Huizen worden automatisch hotels" }
        ],
        correct: 1,
        explanation: {
          en: "You must sell all houses and hotels back to the bank before mortgaging a property, at half the building cost.",
          es: "Debes vender todas las casas y hoteles al banco antes de hipotecar una propiedad, a la mitad del costo de construcción.",
          de: "Sie müssen alle Häuser und Hotels an die Bank zurückverkaufen, bevor Sie eine Eigenschaft beleihen, zu halben Baukosten.",
          nl: "Je moet alle huizen en hotels terugverkopen aan de bank voordat je een eigendom hypothekeert, voor de helft van de bouwkosten."
        }
      },
      {
        question: {
          en: "Which railroad is closest to GO?",
          es: "¿Qué ferrocarril está más cerca de GO?",
          de: "Welche Eisenbahn ist am nächsten zu LOS?",
          nl: "Welke spoorweg is het dichtst bij START?"
        },
        options: [
          { en: "Reading Railroad", es: "Reading Railroad", de: "Reading Railroad", nl: "Reading Railroad" },
          { en: "Pennsylvania Railroad", es: "Pennsylvania Railroad", de: "Pennsylvania Railroad", nl: "Pennsylvania Railroad" },
          { en: "B&O Railroad", es: "B&O Railroad", de: "B&O Railroad", nl: "B&O Railroad" },
          { en: "Short Line", es: "Short Line", de: "Short Line", nl: "Short Line" }
        ],
        correct: 0,
        explanation: {
          en: "Reading Railroad is at space 5, making it the first railroad you encounter after GO.",
          es: "Reading Railroad está en el espacio 5, lo que lo convierte en el primer ferrocarril que encuentras después de GO.",
          de: "Reading Railroad ist auf Feld 5, was es zur ersten Eisenbahn nach LOS macht.",
          nl: "Reading Railroad is op vak 5, waarmee het de eerste spoorweg is die je tegenkomt na START."
        }
      },
      {
        question: {
          en: "What is the rent on a railroad if you own all 4?",
          es: "¿Cuál es el alquiler en un ferrocarril si posees los 4?",
          de: "Was ist die Miete für eine Eisenbahn, wenn Sie alle 4 besitzen?",
          nl: "Wat is de huur op een spoorweg als je alle 4 bezit?"
        },
        options: [
          { en: "$100", es: "$100", de: "$100", nl: "$100" },
          { en: "$150", es: "$150", de: "$150", nl: "$150" },
          { en: "$200", es: "$200", de: "$200", nl: "$200" },
          { en: "$250", es: "$250", de: "$250", nl: "$250" }
        ],
        correct: 2,
        explanation: {
          en: "If you own all 4 railroads, the rent is $200 per railroad landed on.",
          es: "Si posees los 4 ferrocarriles, el alquiler es de $200 por ferrocarril en el que se cae.",
          de: "Wenn Sie alle 4 Eisenbahnen besitzen, beträgt die Miete $200 pro Eisenbahn.",
          nl: "Als je alle 4 spoorwegen bezit, is de huur $200 per spoorweg waarop wordt geland."
        }
      },
      {
        question: {
          en: "How much do you receive for unmortgaging a property?",
          es: "¿Cuánto recibes por levantar la hipoteca de una propiedad?",
          de: "Wie viel zahlen Sie für die Entpfändung einer Eigenschaft?",
          nl: "Hoeveel betaal je om een hypotheek op te heffen?"
        },
        options: [
          { en: "The mortgage value", es: "El valor de la hipoteca", de: "Der Hypothekenwert", nl: "De hypotheekwaarde" },
          { en: "Mortgage value + 10% interest", es: "Valor hipoteca + 10% interés", de: "Hypothekenwert + 10% Zinsen", nl: "Hypotheekwaarde + 10% rente" },
          { en: "The original purchase price", es: "El precio de compra original", de: "Der ursprüngliche Kaufpreis", nl: "De oorspronkelijke aankoopprijs" },
          { en: "Double the mortgage value", es: "El doble del valor hipotecario", de: "Das Doppelte des Hypothekenwerts", nl: "Het dubbele van de hypotheekwaarde" }
        ],
        correct: 1,
        explanation: {
          en: "To unmortgage, you must pay back the mortgage value plus 10% interest to the bank.",
          es: "Para levantar la hipoteca, debes pagar el valor hipotecario más el 10% de interés al banco.",
          de: "Um zu entpfänden, müssen Sie den Hypothekenwert plus 10% Zinsen an die Bank zahlen.",
          nl: "Om de hypotheek op te heffen, moet je de hypotheekwaarde plus 10% rente aan de bank betalen."
        }
      },
      {
        question: {
          en: "What is the highest base rent on Boardwalk without houses?",
          es: "¿Cuál es el alquiler base más alto en Boardwalk sin casas?",
          de: "Was ist die höchste Grundmiete auf Boardwalk ohne Häuser?",
          nl: "Wat is de hoogste basishuur op Boardwalk zonder huizen?"
        },
        options: [
          { en: "$26", es: "$26", de: "$26", nl: "$26" },
          { en: "$35", es: "$35", de: "$35", nl: "$35" },
          { en: "$50", es: "$50", de: "$50", nl: "$50" },
          { en: "$100", es: "$100", de: "$100", nl: "$100" }
        ],
        correct: 2,
        explanation: {
          en: "Boardwalk has a base rent of $50, the highest of any property without buildings.",
          es: "Boardwalk tiene un alquiler base de $50, el más alto de cualquier propiedad sin edificios.",
          de: "Boardwalk hat eine Grundmiete von $50, die höchste aller Eigenschaften ohne Gebäude.",
          nl: "Boardwalk heeft een basishuur van $50, de hoogste van alle eigendommen zonder gebouwen."
        }
      },
      {
        question: {
          en: "How many houses must you have before building a hotel?",
          es: "¿Cuántas casas debes tener antes de construir un hotel?",
          de: "Wie viele Häuser müssen Sie haben, bevor Sie ein Hotel bauen?",
          nl: "Hoeveel huizen moet je hebben voordat je een hotel bouwt?"
        },
        options: [
          { en: "2 houses", es: "2 casas", de: "2 Häuser", nl: "2 huizen" },
          { en: "3 houses", es: "3 casas", de: "3 Häuser", nl: "3 huizen" },
          { en: "4 houses", es: "4 casas", de: "4 Häuser", nl: "4 huizen" },
          { en: "5 houses", es: "5 casas", de: "5 Häuser", nl: "5 huizen" }
        ],
        correct: 2,
        explanation: {
          en: "You must have 4 houses on a property before you can upgrade to a hotel.",
          es: "Debes tener 4 casas en una propiedad antes de poder mejorar a un hotel.",
          de: "Sie müssen 4 Häuser auf einer Eigenschaft haben, bevor Sie auf ein Hotel upgraden können.",
          nl: "Je moet 4 huizen op een eigendom hebben voordat je kunt upgraden naar een hotel."
        }
      },
      {
        question: {
          en: "Can you collect rent while in Jail?",
          es: "¿Puedes cobrar alquiler mientras estás en la cárcel?",
          de: "Können Sie Miete kassieren, während Sie im Gefängnis sind?",
          nl: "Kun je huur innen terwijl je in de gevangenis zit?"
        },
        options: [
          { en: "No, you can't collect", es: "No, no puedes cobrar", de: "Nein, Sie können nicht kassieren", nl: "Nee, je kunt niet innen" },
          { en: "Yes, you can still collect rent", es: "Sí, aún puedes cobrar alquiler", de: "Ja, Sie können weiterhin Miete kassieren", nl: "Ja, je kunt nog steeds huur innen" },
          { en: "Only from railroads", es: "Solo de ferrocarriles", de: "Nur von Eisenbahnen", nl: "Alleen van spoorwegen" },
          { en: "Only if you own hotels", es: "Solo si tienes hoteles", de: "Nur wenn Sie Hotels besitzen", nl: "Alleen als je hotels bezit" }
        ],
        correct: 1,
        explanation: {
          en: "Being in Jail doesn't prevent you from collecting rent, trading, or building houses.",
          es: "Estar en la cárcel no te impide cobrar alquiler, negociar o construir casas.",
          de: "Im Gefängnis zu sein hindert Sie nicht daran, Miete zu kassieren, zu handeln oder Häuser zu bauen.",
          nl: "In de gevangenis zitten verhindert je niet om huur te innen, te handelen of huizen te bouwen."
        }
      },
      {
        question: {
          en: "How do you get out of Jail without paying?",
          es: "¿Cómo sales de la cárcel sin pagar?",
          de: "Wie kommen Sie aus dem Gefängnis, ohne zu zahlen?",
          nl: "Hoe kom je uit de gevangenis zonder te betalen?"
        },
        options: [
          { en: "Roll doubles on any turn", es: "Sacar dobles en cualquier turno", de: "Pasch werfen in jedem Zug", nl: "Dubbel gooien in elke beurt" },
          { en: "Wait 5 turns", es: "Esperar 5 turnos", de: "5 Züge warten", nl: "5 beurten wachten" },
          { en: "Land on Free Parking", es: "Caer en Free Parking", de: "Auf Frei Parken landen", nl: "Op Vrij Parkeren landen" },
          { en: "Collect $200 from GO", es: "Cobrar $200 de GO", de: "$200 von LOS kassieren", nl: "$200 van START innen" }
        ],
        correct: 0,
        explanation: {
          en: "You can get out of Jail by rolling doubles on any of your next 3 turns, or use a Get Out of Jail Free card.",
          es: "Puedes salir de la cárcel sacando dobles en cualquiera de tus próximos 3 turnos, o usar una carta de Salir de la Cárcel Gratis.",
          de: "Sie kommen aus dem Gefängnis, indem Sie in einem Ihrer nächsten 3 Züge einen Pasch werfen oder eine Gefängnis-Frei-Karte verwenden.",
          nl: "Je kunt uit de gevangenis komen door dubbel te gooien in een van je volgende 3 beurten, of een Verlaat de Gevangenis Gratis kaart gebruiken."
        }
      },
      {
        question: {
          en: "What is the color group with 3 properties before GO?",
          es: "¿Cuál es el grupo de colores con 3 propiedades antes de GO?",
          de: "Was ist die Farbgruppe mit 3 Eigenschaften vor LOS?",
          nl: "Wat is de kleurgroep met 3 eigendommen voor START?"
        },
        options: [
          { en: "Dark Blue", es: "Azul Oscuro", de: "Dunkelblau", nl: "Donkerblauw" },
          { en: "Green", es: "Verde", de: "Grün", nl: "Groen" },
          { en: "Yellow", es: "Amarillo", de: "Gelb", nl: "Geel" },
          { en: "Red", es: "Rojo", de: "Rot", nl: "Rood" }
        ],
        correct: 0,
        explanation: {
          en: "The dark blue properties (Park Place & Boardwalk) are the last group before returning to GO.",
          es: "Las propiedades azul oscuro (Park Place y Boardwalk) son el último grupo antes de volver a GO.",
          de: "Die dunkelblauen Eigenschaften (Park Place & Boardwalk) sind die letzte Gruppe vor der Rückkehr zu LOS.",
          nl: "De donkerblauwe eigendommen (Park Place & Boardwalk) zijn de laatste groep voor je terugkeert naar START."
        }
      },
      {
        question: {
          en: "Which utility costs more to purchase?",
          es: "¿Qué servicio público cuesta más comprar?",
          de: "Welches Versorgungsunternehmen kostet mehr zu kaufen?",
          nl: "Welke nutsbedrijf kost meer om te kopen?"
        },
        options: [
          { en: "Electric Company", es: "Electric Company", de: "Electric Company", nl: "Electric Company" },
          { en: "Water Works", es: "Water Works", de: "Water Works", nl: "Water Works" },
          { en: "They cost the same", es: "Cuestan lo mismo", de: "Sie kosten dasselbe", nl: "Ze kosten hetzelfde" },
          { en: "Neither can be purchased", es: "Ninguno puede comprarse", de: "Keines kann gekauft werden", nl: "Geen van beide kan gekocht worden" }
        ],
        correct: 2,
        explanation: {
          en: "Both utilities (Electric Company and Water Works) cost $150 each to purchase.",
          es: "Ambos servicios públicos (Electric Company y Water Works) cuestan $150 cada uno para comprar.",
          de: "Beide Versorgungsunternehmen (Electric Company und Water Works) kosten jeweils $150.",
          nl: "Beide nutsbedrijven (Electric Company en Water Works) kosten elk $150 om te kopen."
        }
      },
      {
        question: {
          en: "What is the total number of properties on the board?",
          es: "¿Cuál es el número total de propiedades en el tablero?",
          de: "Wie viele Eigenschaften gibt es insgesamt auf dem Spielbrett?",
          nl: "Wat is het totale aantal eigendommen op het bord?"
        },
        options: [
          { en: "22", es: "22", de: "22", nl: "22" },
          { en: "26", es: "26", de: "26", nl: "26" },
          { en: "28", es: "28", de: "28", nl: "28" },
          { en: "32", es: "32", de: "32", nl: "32" }
        ],
        correct: 2,
        explanation: {
          en: "There are 28 total properties: 22 streets, 4 railroads, and 2 utilities.",
          es: "Hay 28 propiedades en total: 22 calles, 4 ferrocarriles y 2 servicios públicos.",
          de: "Es gibt insgesamt 28 Eigenschaften: 22 Straßen, 4 Eisenbahnen und 2 Versorgungsunternehmen.",
          nl: "Er zijn in totaal 28 eigendommen: 22 straten, 4 spoorwegen en 2 nutsbedrijven."
        }
      },
      {
        question: {
          en: "What happens if you land on an unowned property and don't buy it?",
          es: "¿Qué sucede si caes en una propiedad no poseída y no la compras?",
          de: "Was passiert, wenn Sie auf einer unbesessenen Eigenschaft landen und sie nicht kaufen?",
          nl: "Wat gebeurt er als je op een eigendom zonder eigenaar landt en het niet koopt?"
        },
        options: [
          { en: "Nothing, it stays unowned", es: "Nada, permanece sin dueño", de: "Nichts, sie bleibt unbesessen", nl: "Niets, het blijft zonder eigenaar" },
          { en: "It goes to auction", es: "Va a subasta", de: "Es wird versteigert", nl: "Het gaat naar veiling" },
          { en: "The bank takes it", es: "El banco se la queda", de: "Die Bank nimmt es", nl: "De bank neemt het" },
          { en: "Next player can claim it free", es: "El siguiente jugador puede reclamarlo gratis", de: "Nächster Spieler kann es kostenlos nehmen", nl: "Volgende speler kan het gratis claimen" }
        ],
        correct: 1,
        explanation: {
          en: "If you don't purchase an unowned property, it must be auctioned off to all players.",
          es: "Si no compras una propiedad sin dueño, debe ser subastada entre todos los jugadores.",
          de: "Wenn Sie eine unbesessene Eigenschaft nicht kaufen, muss sie an alle Spieler versteigert werden.",
          nl: "Als je een eigendom zonder eigenaar niet koopt, moet het worden geveild aan alle spelers."
        }
      },
      {
        question: {
          en: "Can you trade properties during another player's turn?",
          es: "¿Puedes intercambiar propiedades durante el turno de otro jugador?",
          de: "Können Sie während des Zuges eines anderen Spielers Eigenschaften tauschen?",
          nl: "Kun je eigendommen ruilen tijdens de beurt van een andere speler?"
        },
        options: [
          { en: "No, only on your turn", es: "No, solo en tu turno", de: "Nein, nur in Ihrem Zug", nl: "Nee, alleen in jouw beurt" },
          { en: "Yes, anytime during the game", es: "Sí, en cualquier momento del juego", de: "Ja, jederzeit während des Spiels", nl: "Ja, op elk moment in het spel" },
          { en: "Only if you're in Jail", es: "Solo si estás en la cárcel", de: "Nur wenn Sie im Gefängnis sind", nl: "Alleen als je in de gevangenis zit" },
          { en: "Only with the current player", es: "Solo con el jugador actual", de: "Nur mit dem aktuellen Spieler", nl: "Alleen met de huidige speler" }
        ],
        correct: 1,
        explanation: {
          en: "Players can negotiate and make deals at any time during the game, not just on their turns.",
          es: "Los jugadores pueden negociar y hacer tratos en cualquier momento del juego, no solo en sus turnos.",
          de: "Spieler können jederzeit während des Spiels verhandeln und Geschäfte abschließen, nicht nur in ihren Zügen.",
          nl: "Spelers kunnen op elk moment tijdens het spel onderhandelen en deals maken, niet alleen tijdens hun beurten."
        }
      },
      {
        question: {
          en: "What is the maximum number of houses you can build on one property?",
          es: "¿Cuál es el número máximo de casas que puedes construir en una propiedad?",
          de: "Was ist die maximale Anzahl von Häusern auf einer Eigenschaft?",
          nl: "Wat is het maximale aantal huizen dat je op één eigendom kunt bouwen?"
        },
        options: [
          { en: "3 houses", es: "3 casas", de: "3 Häuser", nl: "3 huizen" },
          { en: "4 houses", es: "4 casas", de: "4 Häuser", nl: "4 huizen" },
          { en: "5 houses", es: "5 casas", de: "5 Häuser", nl: "5 huizen" },
          { en: "Unlimited", es: "Ilimitado", de: "Unbegrenzt", nl: "Onbeperkt" }
        ],
        correct: 1,
        explanation: {
          en: "You can build up to 4 houses on a property before upgrading to a hotel.",
          es: "Puedes construir hasta 4 casas en una propiedad antes de mejorar a un hotel.",
          de: "Sie können bis zu 4 Häuser auf einer Eigenschaft bauen, bevor Sie auf ein Hotel upgraden.",
          nl: "Je kunt tot 4 huizen op een eigendom bouwen voordat je upgradet naar een hotel."
        }
      },
      {
        question: {
          en: "Which corner space gives you money?",
          es: "¿Qué espacio de esquina te da dinero?",
          de: "Welches Eckfeld gibt Ihnen Geld?",
          nl: "Welk hoekvak geeft je geld?"
        },
        options: [
          { en: "GO", es: "GO", de: "LOS", nl: "START" },
          { en: "Free Parking", es: "Free Parking", de: "Frei Parken", nl: "Vrij Parkeren" },
          { en: "Go to Jail", es: "Ve a la Cárcel", de: "Gehe ins Gefängnis", nl: "Ga naar de Gevangenis" },
          { en: "Just Visiting", es: "Solo de Visita", de: "Nur zu Besuch", nl: "Op Bezoek" }
        ],
        correct: 0,
        explanation: {
          en: "GO is the only corner that gives you money - $200 when you pass or land on it.",
          es: "GO es la única esquina que te da dinero - $200 cuando pasas o caes en ella.",
          de: "LOS ist das einzige Eckfeld, das Geld gibt - $200, wenn Sie vorbeikommen oder darauf landen.",
          nl: "START is de enige hoek die je geld geeft - $200 wanneer je passeert of erop landt."
        }
      },
      {
        question: {
          en: "How many Community Chest spaces are on the board?",
          es: "¿Cuántos espacios de Community Chest hay en el tablero?",
          de: "Wie viele Gemeinschaftsfeld-Felder gibt es auf dem Spielbrett?",
          nl: "Hoeveel Community Chest vakken zijn er op het bord?"
        },
        options: [
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "6", es: "6", de: "6", nl: "6" }
        ],
        correct: 1,
        explanation: {
          en: "There are 3 Community Chest spaces on the board, just like Chance spaces.",
          es: "Hay 3 espacios de Community Chest en el tablero, al igual que los espacios de Chance.",
          de: "Es gibt 3 Gemeinschaftsfeld-Felder auf dem Spielbrett, genau wie Ereignisfeld-Felder.",
          nl: "Er zijn 3 Community Chest vakken op het bord, net als Kans vakken."
        }
      },
      {
        question: {
          en: "What property is between New York Avenue and Kentucky Avenue?",
          es: "¿Qué propiedad está entre New York Avenue y Kentucky Avenue?",
          de: "Welche Eigenschaft liegt zwischen New York Avenue und Kentucky Avenue?",
          nl: "Welk eigendom ligt tussen New York Avenue en Kentucky Avenue?"
        },
        options: [
          { en: "Free Parking", es: "Free Parking", de: "Frei Parken", nl: "Vrij Parkeren" },
          { en: "Pennsylvania Railroad", es: "Pennsylvania Railroad", de: "Pennsylvania Railroad", nl: "Pennsylvania Railroad" },
          { en: "St. James Place", es: "St. James Place", de: "St. James Place", nl: "St. James Place" },
          { en: "Community Chest", es: "Community Chest", de: "Gemeinschaftsfeld", nl: "Community Chest" }
        ],
        correct: 0,
        explanation: {
          en: "Free Parking corner is located between New York Avenue and Kentucky Avenue.",
          es: "La esquina de Free Parking está ubicada entre New York Avenue y Kentucky Avenue.",
          de: "Die Frei Parken-Ecke befindet sich zwischen New York Avenue und Kentucky Avenue.",
          nl: "De hoek Vrij Parkeren bevindt zich tussen New York Avenue en Kentucky Avenue."
        }
      },
      {
        question: {
          en: "What color is Tennessee Avenue?",
          es: "¿De qué color es Tennessee Avenue?",
          de: "Welche Farbe hat Tennessee Avenue?",
          nl: "Welke kleur heeft Tennessee Avenue?"
        },
        options: [
          { en: "Red", es: "Rojo", de: "Rot", nl: "Rood" },
          { en: "Orange", es: "Naranja", de: "Orange", nl: "Oranje" },
          { en: "Yellow", es: "Amarillo", de: "Gelb", nl: "Geel" },
          { en: "Green", es: "Verde", de: "Grün", nl: "Groen" }
        ],
        correct: 1,
        explanation: {
          en: "Tennessee Avenue is part of the orange property group with St. James and New York Avenue.",
          es: "Tennessee Avenue es parte del grupo de propiedades naranjas con St. James y New York Avenue.",
          de: "Tennessee Avenue ist Teil der orangefarbenen Eigenschaftsgruppe mit St. James und New York Avenue.",
          nl: "Tennessee Avenue maakt deel uit van de oranje eigendomgroep met St. James en New York Avenue."
        }
      },
      {
        question: {
          en: "How much is Income Tax on the board?",
          es: "¿Cuánto es el Income Tax en el tablero?",
          de: "Wie hoch ist die Einkommenssteuer auf dem Spielbrett?",
          nl: "Hoeveel is de inkomstenbelasting op het bord?"
        },
        options: [
          { en: "$100", es: "$100", de: "$100", nl: "$100" },
          { en: "$150", es: "$150", de: "$150", nl: "$150" },
          { en: "$200", es: "$200", de: "$200", nl: "$200" },
          { en: "$250", es: "$250", de: "$250", nl: "$250" }
        ],
        correct: 2,
        explanation: {
          en: "Income Tax costs $200 when you land on it, located between GO and Baltic Avenue.",
          es: "El Income Tax cuesta $200 cuando caes en él, ubicado entre GO y Baltic Avenue.",
          de: "Die Einkommenssteuer kostet $200, wenn Sie darauf landen, zwischen LOS und Baltic Avenue.",
          nl: "De inkomstenbelasting kost $200 wanneer je erop landt, gelegen tussen START en Baltic Avenue."
        }
      },
      {
        question: {
          en: "Can you sell houses back to the bank at full price?",
          es: "¿Puedes vender casas al banco a precio completo?",
          de: "Können Sie Häuser zum vollen Preis an die Bank zurückverkaufen?",
          nl: "Kun je huizen tegen volle prijs terugverkopen aan de bank?"
        },
        options: [
          { en: "Yes, full price", es: "Sí, precio completo", de: "Ja, zum vollen Preis", nl: "Ja, volle prijs" },
          { en: "No, only half price", es: "No, solo mitad de precio", de: "Nein, nur halber Preis", nl: "Nee, alleen halve prijs" },
          { en: "No, 75% of price", es: "No, 75% del precio", de: "Nein, 75% des Preises", nl: "Nee, 75% van de prijs" },
          { en: "No, they can't be sold", es: "No, no se pueden vender", de: "Nein, sie können nicht verkauft werden", nl: "Nee, ze kunnen niet verkocht worden" }
        ],
        correct: 1,
        explanation: {
          en: "Houses can only be sold back to the bank at half their purchase price.",
          es: "Las casas solo pueden venderse al banco a la mitad de su precio de compra.",
          de: "Häuser können nur zum halben Kaufpreis an die Bank zurückverkauft werden.",
          nl: "Huizen kunnen alleen tegen de helft van hun aankoopprijs worden terugverkocht aan de bank."
        }
      },
      {
        question: {
          en: "How much does it cost to get out of Jail by paying?",
          es: "¿Cuánto cuesta salir de la cárcel pagando?",
          de: "Wie viel kostet es, durch Zahlung aus dem Gefängnis zu kommen?",
          nl: "Hoeveel kost het om uit de gevangenis te komen door te betalen?"
        },
        options: [
          { en: "$25", es: "$25", de: "$25", nl: "$25" },
          { en: "$50", es: "$50", de: "$50", nl: "$50" },
          { en: "$75", es: "$75", de: "$75", nl: "$75" },
          { en: "$100", es: "$100", de: "$100", nl: "$100" }
        ],
        correct: 1,
        explanation: {
          en: "You can pay $50 to get out of Jail before rolling the dice on any turn.",
          es: "Puedes pagar $50 para salir de la cárcel antes de tirar los dados en cualquier turno.",
          de: "Sie können $50 zahlen, um vor dem Würfeln in jedem Zug aus dem Gefängnis zu kommen.",
          nl: "Je kunt $50 betalen om uit de gevangenis te komen voordat je de dobbelstenen gooit in elke beurt."
        }
      },
      {
        question: {
          en: "What is the most common result from rolling two dice?",
          es: "¿Cuál es el resultado más común al lanzar dos dados?",
          de: "Was ist das häufigste Ergebnis beim Würfeln mit zwei Würfeln?",
          nl: "Wat is het meest voorkomende resultaat bij het gooien van twee dobbelstenen?"
        },
        options: [
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "7", es: "7", de: "7", nl: "7" },
          { en: "8", es: "8", de: "8", nl: "8" },
          { en: "12", es: "12", de: "12", nl: "12" }
        ],
        correct: 1,
        explanation: {
          en: "7 is the most common roll with two dice, having 6 different combinations (1+6, 2+5, 3+4, 4+3, 5+2, 6+1).",
          es: "7 es el resultado más común con dos dados, teniendo 6 combinaciones diferentes (1+6, 2+5, 3+4, 4+3, 5+2, 6+1).",
          de: "7 ist das häufigste Würfelergebnis mit zwei Würfeln, mit 6 verschiedenen Kombinationen (1+6, 2+5, 3+4, 4+3, 5+2, 6+1).",
          nl: "7 is de meest voorkomende worp met twee dobbelstenen, met 6 verschillende combinaties (1+6, 2+5, 3+4, 4+3, 5+2, 6+1)."
        }
      },
      {
        question: {
          en: "Which property is directly after GO?",
          es: "¿Qué propiedad está directamente después de GO?",
          de: "Welche Eigenschaft kommt direkt nach LOS?",
          nl: "Welk eigendom komt direct na START?"
        },
        options: [
          { en: "Mediterranean Avenue", es: "Mediterranean Avenue", de: "Mediterranean Avenue", nl: "Mediterranean Avenue" },
          { en: "Baltic Avenue", es: "Baltic Avenue", de: "Baltic Avenue", nl: "Baltic Avenue" },
          { en: "Oriental Avenue", es: "Oriental Avenue", de: "Oriental Avenue", nl: "Oriental Avenue" },
          { en: "Income Tax", es: "Income Tax", de: "Einkommenssteuer", nl: "Inkomstenbelasting" }
        ],
        correct: 0,
        explanation: {
          en: "Mediterranean Avenue is the first property space after GO, starting the brown property group.",
          es: "Mediterranean Avenue es el primer espacio de propiedad después de GO, comenzando el grupo de propiedades marrones.",
          de: "Mediterranean Avenue ist das erste Eigenschaftsfeld nach LOS, das die braune Eigenschaftsgruppe beginnt.",
          nl: "Mediterranean Avenue is het eerste eigendomvak na START, dat de bruine eigendomgroep begint."
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
