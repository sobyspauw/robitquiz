// Quiz Template - Level 4: Board Games - Monopoly (Rent & Development)
(function() {
  const level4 = {
    name: {
      en: "Monopoly - Development",
      es: "Monopoly - Desarrollo",
      de: "Monopoly - Entwicklung",
      nl: "Monopoly - Ontwikkeling"
    },
    questions: [
      {
        question: {
          en: "What is the base rent (no houses) on Mediterranean Avenue?",
          es: "¿Cuál es el alquiler base (sin casas) en Mediterranean Avenue?",
          de: "Was ist die Grundmiete (keine Häuser) auf Mediterranean Avenue?",
          nl: "Wat is de basishuur (geen huizen) op Mediterranean Avenue?"
        },
        options: [
          { en: "$1", es: "$1", de: "$1", nl: "$1" },
          { en: "$2", es: "$2", de: "$2", nl: "$2" },
          { en: "$4", es: "$4", de: "$4", nl: "$4" },
          { en: "$6", es: "$6", de: "$6", nl: "$6" }
        ],
        correct: 1,
        explanation: {
          en: "Mediterranean Avenue has a base rent of $2, the lowest rent in the game.",
          es: "Mediterranean Avenue tiene un alquiler base de $2, el alquiler más bajo del juego.",
          de: "Mediterranean Avenue hat eine Grundmiete von $2, die niedrigste Miete im Spiel.",
          nl: "Mediterranean Avenue heeft een basishuur van $2, de laagste huur in het spel."
        }
      },
      {
        question: {
          en: "What is the base rent on Boardwalk (no hotel)?",
          es: "¿Cuál es el alquiler base en Boardwalk (sin hotel)?",
          de: "Was ist die Grundmiete auf Boardwalk (kein Hotel)?",
          nl: "Wat is de basishuur op Boardwalk (geen hotel)?"
        },
        options: [
          { en: "$25", es: "$25", de: "$25", nl: "$25" },
          { en: "$35", es: "$35", de: "$35", nl: "$35" },
          { en: "$50", es: "$50", de: "$50", nl: "$50" },
          { en: "$75", es: "$75", de: "$75", nl: "$75" }
        ],
        correct: 2,
        explanation: {
          en: "Boardwalk has a base rent of $50 without any houses, the highest base rent in the game.",
          es: "Boardwalk tiene un alquiler base de $50 sin casas, el alquiler base más alto del juego.",
          de: "Boardwalk hat eine Grundmiete von $50 ohne Häuser, die höchste Grundmiete im Spiel.",
          nl: "Boardwalk heeft een basishuur van $50 zonder huizen, de hoogste basishuur in het spel."
        }
      },
      {
        question: {
          en: "How much does a hotel cost to build?",
          es: "¿Cuánto cuesta construir un hotel?",
          de: "Wie viel kostet es, ein Hotel zu bauen?",
          nl: "Hoeveel kost het om een hotel te bouwen?"
        },
        options: [
          { en: "Same as 4 houses", es: "Lo mismo que 4 casas", de: "Gleich wie 4 Häuser", nl: "Hetzelfde als 4 huizen" },
          { en: "Price of 1 house", es: "Precio de 1 casa", de: "Preis eines Hauses", nl: "Prijs van 1 huis" },
          { en: "Price of 5 houses", es: "Precio de 5 casas", de: "Preis von 5 Häusern", nl: "Prijs van 5 huizen" },
          { en: "Free upgrade", es: "Mejora gratis", de: "Kostenlose Aufwertung", nl: "Gratis upgrade" }
        ],
        correct: 0,
        explanation: {
          en: "A hotel costs the same as 4 houses for that property. You exchange 4 houses for 1 hotel.",
          es: "Un hotel cuesta lo mismo que 4 casas para esa propiedad. Cambias 4 casas por 1 hotel.",
          de: "Ein Hotel kostet gleich viel wie 4 Häuser für diese Eigenschaft. Man tauscht 4 Häuser gegen 1 Hotel.",
          nl: "Een hotel kost hetzelfde als 4 huizen voor dat eigendom. Je ruilt 4 huizen voor 1 hotel."
        }
      },
      {
        question: {
          en: "What happens to rent when you own a complete color group but no houses?",
          es: "¿Qué pasa con el alquiler cuando posees un grupo completo de color pero sin casas?",
          de: "Was passiert mit der Miete, wenn Sie eine vollständige Farbgruppe aber keine Häuser besitzen?",
          nl: "Wat gebeurt er met de huur als je een complete kleurgroep bezit maar geen huizen?"
        },
        options: [
          { en: "Stays the same", es: "Se mantiene igual", de: "Bleibt gleich", nl: "Blijft hetzelfde" },
          { en: "Doubles", es: "Se duplica", de: "Verdoppelt sich", nl: "Verdubbelt" },
          { en: "Triples", es: "Se triplica", de: "Verdreifacht sich", nl: "Verdrievoudigt" },
          { en: "Quadruples", es: "Se cuadruplica", de: "Vervierfacht sich", nl: "Verviervoudigt" }
        ],
        correct: 1,
        explanation: {
          en: "Owning all properties in a color group doubles the rent, even without houses.",
          es: "Poseer todas las propiedades de un grupo de color duplica el alquiler, incluso sin casas.",
          de: "Der Besitz aller Eigenschaften einer Farbgruppe verdoppelt die Miete, auch ohne Häuser.",
          nl: "Het bezitten van alle eigendommen in een kleurgroep verdubbelt de huur, zelfs zonder huizen."
        }
      },
      {
        question: {
          en: "How much is the rent on a railroad if you own 1?",
          es: "¿Cuánto es el alquiler en un ferrocarril si posees 1?",
          de: "Wie viel ist die Miete auf einer Eisenbahn, wenn Sie 1 besitzen?",
          nl: "Hoeveel is de huur op een spoorweg als je er 1 bezit?"
        },
        options: [
          { en: "$25", es: "$25", de: "$25", nl: "$25" },
          { en: "$50", es: "$50", de: "$50", nl: "$50" },
          { en: "$100", es: "$100", de: "$100", nl: "$100" },
          { en: "$200", es: "$200", de: "$200", nl: "$200" }
        ],
        correct: 0,
        explanation: {
          en: "One railroad charges $25 rent. It doubles with each additional railroad owned.",
          es: "Un ferrocarril cobra $25 de alquiler. Se duplica con cada ferrocarril adicional poseído.",
          de: "Eine Eisenbahn verlangt $25 Miete. Sie verdoppelt sich mit jeder zusätzlichen besessenen Eisenbahn.",
          nl: "Eén spoorweg vraagt $25 huur. Het verdubbelt met elke extra spoorweg die je bezit."
        }
      },
      {
        question: {
          en: "How much is the rent on a railroad if you own 2?",
          es: "¿Cuánto es el alquiler en un ferrocarril si posees 2?",
          de: "Wie viel ist die Miete auf einer Eisenbahn, wenn Sie 2 besitzen?",
          nl: "Hoeveel is de huur op een spoorweg als je er 2 bezit?"
        },
        options: [
          { en: "$25", es: "$25", de: "$25", nl: "$25" },
          { en: "$50", es: "$50", de: "$50", nl: "$50" },
          { en: "$100", es: "$100", de: "$100", nl: "$100" },
          { en: "$200", es: "$200", de: "$200", nl: "$200" }
        ],
        correct: 1,
        explanation: {
          en: "Owning 2 railroads charges $50 rent per railroad.",
          es: "Poseer 2 ferrocarriles cobra $50 de alquiler por ferrocarril.",
          de: "Der Besitz von 2 Eisenbahnen verlangt $50 Miete pro Eisenbahn.",
          nl: "Het bezitten van 2 spoorwegen vraagt $50 huur per spoorweg."
        }
      },
      {
        question: {
          en: "How much is the rent on a railroad if you own 3?",
          es: "¿Cuánto es el alquiler en un ferrocarril si posees 3?",
          de: "Wie viel ist die Miete auf einer Eisenbahn, wenn Sie 3 besitzen?",
          nl: "Hoeveel is de huur op een spoorweg als je er 3 bezit?"
        },
        options: [
          { en: "$50", es: "$50", de: "$50", nl: "$50" },
          { en: "$75", es: "$75", de: "$75", nl: "$75" },
          { en: "$100", es: "$100", de: "$100", nl: "$100" },
          { en: "$150", es: "$150", de: "$150", nl: "$150" }
        ],
        correct: 2,
        explanation: {
          en: "Owning 3 railroads charges $100 rent per railroad.",
          es: "Poseer 3 ferrocarriles cobra $100 de alquiler por ferrocarril.",
          de: "Der Besitz von 3 Eisenbahnen verlangt $100 Miete pro Eisenbahn.",
          nl: "Het bezitten van 3 spoorwegen vraagt $100 huur per spoorweg."
        }
      },
      {
        question: {
          en: "How is utility rent calculated if you own 1 utility?",
          es: "¿Cómo se calcula el alquiler de servicios públicos si posees 1 servicio público?",
          de: "Wie wird die Versorgungsmiete berechnet, wenn Sie 1 Versorgungsunternehmen besitzen?",
          nl: "Hoe wordt de huur van nutsbedrijven berekend als je 1 nutsbedrijf bezit?"
        },
        options: [
          { en: "Dice roll × 2", es: "Tirada de dados × 2", de: "Würfelwurf × 2", nl: "Dobbelsteenworp × 2" },
          { en: "Dice roll × 4", es: "Tirada de dados × 4", de: "Würfelwurf × 4", nl: "Dobbelsteenworp × 4" },
          { en: "Dice roll × 6", es: "Tirada de dados × 6", de: "Würfelwurf × 6", nl: "Dobbelsteenworp × 6" },
          { en: "Dice roll × 10", es: "Tirada de dados × 10", de: "Würfelwurf × 10", nl: "Dobbelsteenworp × 10" }
        ],
        correct: 1,
        explanation: {
          en: "If you own 1 utility, rent is 4 times the amount shown on the dice.",
          es: "Si posees 1 servicio público, el alquiler es 4 veces la cantidad mostrada en los dados.",
          de: "Wenn Sie 1 Versorgungsunternehmen besitzen, ist die Miete 4-mal der auf den Würfeln gezeigte Betrag.",
          nl: "Als je 1 nutsbedrijf bezit, is de huur 4 keer het bedrag op de dobbelstenen."
        }
      },
      {
        question: {
          en: "How is utility rent calculated if you own both utilities?",
          es: "¿Cómo se calcula el alquiler de servicios públicos si posees ambos servicios?",
          de: "Wie wird die Versorgungsmiete berechnet, wenn Sie beide Versorgungsunternehmen besitzen?",
          nl: "Hoe wordt de huur van nutsbedrijven berekend als je beide nutsbedrijven bezit?"
        },
        options: [
          { en: "Dice roll × 4", es: "Tirada de dados × 4", de: "Würfelwurf × 4", nl: "Dobbelsteenworp × 4" },
          { en: "Dice roll × 8", es: "Tirada de dados × 8", de: "Würfelwurf × 8", nl: "Dobbelsteenworp × 8" },
          { en: "Dice roll × 10", es: "Tirada de dados × 10", de: "Würfelwurf × 10", nl: "Dobbelsteenworp × 10" },
          { en: "Dice roll × 12", es: "Tirada de dados × 12", de: "Würfelwurf × 12", nl: "Dobbelsteenworp × 12" }
        ],
        correct: 2,
        explanation: {
          en: "If you own both utilities, rent is 10 times the amount shown on the dice.",
          es: "Si posees ambos servicios públicos, el alquiler es 10 veces la cantidad mostrada en los dados.",
          de: "Wenn Sie beide Versorgungsunternehmen besitzen, ist die Miete 10-mal der auf den Würfeln gezeigte Betrag.",
          nl: "Als je beide nutsbedrijven bezit, is de huur 10 keer het bedrag op de dobbelstenen."
        }
      },
      {
        question: {
          en: "What is the maximum rent you can collect from a utility (owning both)?",
          es: "¿Cuál es el alquiler máximo que puedes cobrar de un servicio público (poseyendo ambos)?",
          de: "Was ist die maximale Miete, die Sie von einem Versorgungsunternehmen einziehen können (beide besitzend)?",
          nl: "Wat is de maximale huur die je kunt innen van een nutsbedrijf (beide bezittend)?"
        },
        options: [
          { en: "$60", es: "$60", de: "$60", nl: "$60" },
          { en: "$80", es: "$80", de: "$80", nl: "$80" },
          { en: "$100", es: "$100", de: "$100", nl: "$100" },
          { en: "$120", es: "$120", de: "$120", nl: "$120" }
        ],
        correct: 3,
        explanation: {
          en: "Maximum dice roll is 12 (double 6). With both utilities, rent is 12 × 10 = $120.",
          es: "La tirada máxima de dados es 12 (doble 6). Con ambos servicios, el alquiler es 12 × 10 = $120.",
          de: "Maximaler Würfelwurf ist 12 (Doppel-6). Mit beiden Versorgungsunternehmen ist die Miete 12 × 10 = $120.",
          nl: "Maximale dobbelsteenworp is 12 (dubbel 6). Met beide nutsbedrijven is de huur 12 × 10 = $120."
        }
      },
      {
        question: {
          en: "How much do you get when selling houses back to the bank?",
          es: "¿Cuánto obtienes al vender casas de vuelta al banco?",
          de: "Wie viel bekommen Sie beim Verkauf von Häusern zurück an die Bank?",
          nl: "Hoeveel krijg je bij het terugverkopen van huizen aan de bank?"
        },
        options: [
          { en: "Full price", es: "Precio completo", de: "Voller Preis", nl: "Volledige prijs" },
          { en: "Half price", es: "Mitad de precio", de: "Halber Preis", nl: "Halve prijs" },
          { en: "Quarter price", es: "Cuarto de precio", de: "Viertelpreis", nl: "Kwart prijs" },
          { en: "Nothing", es: "Nada", de: "Nichts", nl: "Niets" }
        ],
        correct: 1,
        explanation: {
          en: "Houses and hotels sell back to the bank at half their purchase price.",
          es: "Las casas y hoteles se venden al banco a la mitad de su precio de compra.",
          de: "Häuser und Hotels werden an die Bank zum halben Kaufpreis zurückverkauft.",
          nl: "Huizen en hotels worden terugverkocht aan de bank voor de helft van hun aankoopprijs."
        }
      },
      {
        question: {
          en: "How many houses are in a standard Monopoly set?",
          es: "¿Cuántas casas hay en un set estándar de Monopoly?",
          de: "Wie viele Häuser gibt es in einem Standard-Monopoly-Set?",
          nl: "Hoeveel huizen zijn er in een standaard Monopoly-set?"
        },
        options: [
          { en: "24", es: "24", de: "24", nl: "24" },
          { en: "28", es: "28", de: "28", nl: "28" },
          { en: "32", es: "32", de: "32", nl: "32" },
          { en: "36", es: "36", de: "36", nl: "36" }
        ],
        correct: 2,
        explanation: {
          en: "A standard Monopoly game includes 32 houses.",
          es: "Un juego estándar de Monopoly incluye 32 casas.",
          de: "Ein Standard-Monopoly-Spiel enthält 32 Häuser.",
          nl: "Een standaard Monopoly-spel bevat 32 huizen."
        }
      },
      {
        question: {
          en: "How many hotels are in a standard Monopoly set?",
          es: "¿Cuántos hoteles hay en un set estándar de Monopoly?",
          de: "Wie viele Hotels gibt es in einem Standard-Monopoly-Set?",
          nl: "Hoeveel hotels zijn er in een standaard Monopoly-set?"
        },
        options: [
          { en: "8", es: "8", de: "8", nl: "8" },
          { en: "10", es: "10", de: "10", nl: "10" },
          { en: "12", es: "12", de: "12", nl: "12" },
          { en: "16", es: "16", de: "16", nl: "16" }
        ],
        correct: 2,
        explanation: {
          en: "A standard Monopoly game includes 12 hotels.",
          es: "Un juego estándar de Monopoly incluye 12 hoteles.",
          de: "Ein Standard-Monopoly-Spiel enthält 12 Hotels.",
          nl: "Een standaard Monopoly-spel bevat 12 hotels."
        }
      },
      {
        question: {
          en: "Can you buy houses if there are none left in the bank?",
          es: "¿Puedes comprar casas si no quedan en el banco?",
          de: "Können Sie Häuser kaufen, wenn keine mehr in der Bank sind?",
          nl: "Kun je huizen kopen als er geen meer in de bank zijn?"
        },
        options: [
          { en: "Yes, use substitutes", es: "Sí, usa sustitutos", de: "Ja, Ersatz verwenden", nl: "Ja, gebruik vervangers" },
          { en: "No, must wait", es: "No, debes esperar", de: "Nein, muss warten", nl: "Nee, moet wachten" },
          { en: "Yes, but double price", es: "Sí, pero doble precio", de: "Ja, aber doppelter Preis", nl: "Ja, maar dubbele prijs" },
          { en: "Skip to hotels", es: "Saltar a hoteles", de: "Zu Hotels springen", nl: "Spring naar hotels" }
        ],
        correct: 1,
        explanation: {
          en: "Official rules state you cannot build if the bank is out of houses - you must wait.",
          es: "Las reglas oficiales establecen que no puedes construir si el banco no tiene casas - debes esperar.",
          de: "Offizielle Regeln besagen, dass Sie nicht bauen können, wenn die Bank keine Häuser hat - Sie müssen warten.",
          nl: "Officiële regels zeggen dat je niet kunt bouwen als de bank geen huizen heeft - je moet wachten."
        }
      },
      {
        question: {
          en: "What is a 'house shortage' strategy in Monopoly?",
          es: "¿Qué es una estrategia de 'escasez de casas' en Monopoly?",
          de: "Was ist eine 'Hausknappheits'-Strategie im Monopoly?",
          nl: "Wat is een 'huizenschaarste'-strategie in Monopoly?"
        },
        options: [
          { en: "Buying all available houses to prevent opponents from building", es: "Comprar todas las casas disponibles para evitar que los oponentes construyan", de: "Alle verfügbaren Häuser kaufen um Gegner am Bauen zu hindern", nl: "Alle beschikbare huizen kopen om tegenstanders te beletten te bouwen" },
          { en: "Selling all your houses", es: "Vender todas tus casas", de: "Alle Häuser verkaufen", nl: "Al je huizen verkopen" },
          { en: "Never buying houses", es: "Nunca comprar casas", de: "Niemals Häuser kaufen", nl: "Nooit huizen kopen" },
          { en: "Only buying hotels", es: "Solo comprar hoteles", de: "Nur Hotels kaufen", nl: "Alleen hotels kopen" }
        ],
        correct: 0,
        explanation: {
          en: "Building 3-4 houses per property (not hotels) can monopolize the house supply and prevent opponents from developing.",
          es: "Construir 3-4 casas por propiedad (no hoteles) puede monopolizar el suministro de casas y evitar que los oponentes desarrollen.",
          de: "3-4 Häuser pro Eigenschaft bauen (keine Hotels) kann das Hausangebot monopolisieren und Gegner am Entwickeln hindern.",
          nl: "3-4 huizen per eigendom bouwen (geen hotels) kan de huizenvoorraad monopoliseren en tegenstanders beletten te ontwikkelen."
        }
      },
      {
        question: {
          en: "Must you sell houses evenly across your monopoly?",
          es: "¿Debes vender casas de manera uniforme en tu monopolio?",
          de: "Müssen Sie Häuser gleichmäßig über Ihr Monopol verkaufen?",
          nl: "Moet je huizen gelijkmatig verkopen over je monopolie?"
        },
        options: [
          { en: "Yes, must sell evenly", es: "Sí, debes vender uniformemente", de: "Ja, muss gleichmäßig verkaufen", nl: "Ja, moet gelijkmatig verkopen" },
          { en: "No, sell any houses", es: "No, vende cualquier casa", de: "Nein, verkaufe beliebige Häuser", nl: "Nee, verkoop welke huizen dan ook" },
          { en: "Only from most expensive property", es: "Solo de la propiedad más cara", de: "Nur von teuerster Eigenschaft", nl: "Alleen van duurste eigendom" },
          { en: "Only hotels can be sold", es: "Solo se pueden vender hoteles", de: "Nur Hotels können verkauft werden", nl: "Alleen hotels kunnen verkocht worden" }
        ],
        correct: 0,
        explanation: {
          en: "You must sell houses evenly, just like building - the reverse order of how they were built.",
          es: "Debes vender casas uniformemente, al igual que construir - en orden inverso a cómo fueron construidas.",
          de: "Sie müssen Häuser gleichmäßig verkaufen, genau wie beim Bauen - in umgekehrter Reihenfolge wie sie gebaut wurden.",
          nl: "Je moet huizen gelijkmatig verkopen, net zoals bouwen - in omgekeerde volgorde van hoe ze gebouwd werden."
        }
      },
      {
        question: {
          en: "What happens if you can't pay rent?",
          es: "¿Qué pasa si no puedes pagar el alquiler?",
          de: "Was passiert, wenn Sie die Miete nicht zahlen können?",
          nl: "Wat gebeurt er als je de huur niet kunt betalen?"
        },
        options: [
          { en: "You go to jail", es: "Vas a la cárcel", de: "Sie gehen ins Gefängnis", nl: "Je gaat naar de gevangenis" },
          { en: "You must declare bankruptcy", es: "Debes declararte en bancarrota", de: "Sie müssen Konkurs anmelden", nl: "Je moet faillissement aanvragen" },
          { en: "You skip the payment", es: "Te saltas el pago", de: "Sie überspringen die Zahlung", nl: "Je slaat de betaling over" },
          { en: "Other players pay for you", es: "Otros jugadores pagan por ti", de: "Andere Spieler zahlen für Sie", nl: "Andere spelers betalen voor jou" }
        ],
        correct: 1,
        explanation: {
          en: "If you cannot pay rent, you must sell houses, mortgage properties, or declare bankruptcy.",
          es: "Si no puedes pagar el alquiler, debes vender casas, hipotecar propiedades o declararte en bancarrota.",
          de: "Wenn Sie die Miete nicht zahlen können, müssen Sie Häuser verkaufen, Eigenschaften beleihen oder Konkurs anmelden.",
          nl: "Als je de huur niet kunt betalen, moet je huizen verkopen, eigendommen hypothekeren of faillissement aanvragen."
        }
      },
      {
        question: {
          en: "How much does it cost to unmortgage a property?",
          es: "¿Cuánto cuesta deshipotecar una propiedad?",
          de: "Wie viel kostet es, eine Eigenschaft zu entbeleihen?",
          nl: "Hoeveel kost het om een eigendom te onthypothekeren?"
        },
        options: [
          { en: "Mortgage value", es: "Valor hipotecario", de: "Hypothekenwert", nl: "Hypotheekwaarde" },
          { en: "Mortgage value + 10%", es: "Valor hipotecario + 10%", de: "Hypothekenwert + 10%", nl: "Hypotheekwaarde + 10%" },
          { en: "Original property price", es: "Precio original de la propiedad", de: "Ursprünglicher Eigenschaftspreis", nl: "Originele eigendomsprijs" },
          { en: "Double mortgage value", es: "Doble valor hipotecario", de: "Doppelter Hypothekenwert", nl: "Dubbele hypotheekwaarde" }
        ],
        correct: 1,
        explanation: {
          en: "To unmortgage, you pay the mortgage value plus 10% interest.",
          es: "Para deshipotecar, pagas el valor hipotecario más un 10% de interés.",
          de: "Um zu entbeleihen, zahlen Sie den Hypothekenwert plus 10% Zinsen.",
          nl: "Om te onthypothekeren, betaal je de hypotheekwaarde plus 10% rente."
        }
      },
      {
        question: {
          en: "Can you collect rent on a mortgaged property?",
          es: "¿Puedes cobrar alquiler en una propiedad hipotecada?",
          de: "Können Sie Miete auf einer beliehenen Eigenschaft einziehen?",
          nl: "Kun je huur innen op een gehypothekeerd eigendom?"
        },
        options: [
          { en: "Yes, full rent", es: "Sí, alquiler completo", de: "Ja, volle Miete", nl: "Ja, volledige huur" },
          { en: "Yes, half rent", es: "Sí, mitad de alquiler", de: "Ja, halbe Miete", nl: "Ja, halve huur" },
          { en: "No rent at all", es: "Sin alquiler", de: "Keine Miete", nl: "Geen huur" },
          { en: "Yes, but pay bank 10%", es: "Sí, pero paga al banco 10%", de: "Ja, aber zahle Bank 10%", nl: "Ja, maar betaal bank 10%" }
        ],
        correct: 2,
        explanation: {
          en: "You cannot collect any rent on mortgaged properties - they are face-down and inactive.",
          es: "No puedes cobrar alquiler en propiedades hipotecadas - están boca abajo e inactivas.",
          de: "Sie können keine Miete auf beliehenen Eigenschaften einziehen - sie sind verdeckt und inaktiv.",
          nl: "Je kunt geen huur innen op gehypothekeerde eigendommen - ze liggen ondersteboven en zijn inactief."
        }
      },
      {
        question: {
          en: "What is the rent on Park Place with 1 house?",
          es: "¿Cuál es el alquiler en Park Place con 1 casa?",
          de: "Was ist die Miete auf Park Place mit 1 Haus?",
          nl: "Wat is de huur op Park Place met 1 huis?"
        },
        options: [
          { en: "$70", es: "$70", de: "$70", nl: "$70" },
          { en: "$100", es: "$100", de: "$100", nl: "$100" },
          { en: "$130", es: "$130", de: "$130", nl: "$130" },
          { en: "$175", es: "$175", de: "$175", nl: "$175" }
        ],
        correct: 3,
        explanation: {
          en: "Park Place with 1 house charges $175 rent.",
          es: "Park Place con 1 casa cobra $175 de alquiler.",
          de: "Park Place mit 1 Haus verlangt $175 Miete.",
          nl: "Park Place met 1 huis vraagt $175 huur."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level4;
  } else if (typeof window !== 'undefined') {
    window.level4 = level4;
  }
})();
