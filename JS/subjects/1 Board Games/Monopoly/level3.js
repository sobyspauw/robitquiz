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
