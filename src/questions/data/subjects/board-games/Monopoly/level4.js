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
      },
      {
        question: {
          en: "What is the rent on Boardwalk with 2 houses?",
          es: "¿Cuál es el alquiler en Boardwalk con 2 casas?",
          de: "Was ist die Miete auf Boardwalk mit 2 Häusern?",
          nl: "Wat is de huur op Boardwalk met 2 huizen?"
        },
        options: [
          { en: "$200", es: "$200", de: "$200", nl: "$200" },
          { en: "$400", es: "$400", de: "$400", nl: "$400" },
          { en: "$600", es: "$600", de: "$600", nl: "$600" },
          { en: "$800", es: "$800", de: "$800", nl: "$800" }
        ],
        correct: 2,
        explanation: {
          en: "Boardwalk with 2 houses charges $600 in rent, making it one of the most expensive properties.",
          es: "Boardwalk con 2 casas cobra $600 de alquiler, convirtiéndola en una de las propiedades más caras.",
          de: "Boardwalk mit 2 Häusern verlangt $600 Miete, was es zu einer der teuersten Eigenschaften macht.",
          nl: "Boardwalk met 2 huizen vraagt $600 huur, waardoor het een van de duurste eigendommen is."
        }
      },
      {
        question: {
          en: "How much does a hotel cost on red properties?",
          es: "¿Cuánto cuesta un hotel en las propiedades rojas?",
          de: "Wie viel kostet ein Hotel auf roten Eigenschaften?",
          nl: "Hoeveel kost een hotel op rode eigendommen?"
        },
        options: [
          { en: "$150", es: "$150", de: "$150", nl: "$150" },
          { en: "$200", es: "$200", de: "$200", nl: "$200" },
          { en: "$250", es: "$250", de: "$250", nl: "$250" },
          { en: "$300", es: "$300", de: "$300", nl: "$300" }
        ],
        correct: 0,
        explanation: {
          en: "Hotels on red properties cost $150 (same as house cost). Total investment: 4 houses + hotel = $750.",
          es: "Los hoteles en propiedades rojas cuestan $150 (igual que el costo de una casa). Inversión total: 4 casas + hotel = $750.",
          de: "Hotels auf roten Eigenschaften kosten $150 (gleich wie Hauskosten). Gesamtinvestition: 4 Häuser + Hotel = $750.",
          nl: "Hotels op rode eigendommen kosten $150 (zelfde als huiskosten). Totale investering: 4 huizen + hotel = $750."
        }
      },
      {
        question: {
          en: "Which property group is landed on most frequently?",
          es: "¿En qué grupo de propiedades se cae con más frecuencia?",
          de: "Welche Eigenschaftsgruppe wird am häufigsten betreten?",
          nl: "Op welke eigendomsgroep wordt het vaakst geland?"
        },
        options: [
          { en: "Orange properties", es: "Propiedades naranjas", de: "Orange Eigenschaften", nl: "Oranje eigendommen" },
          { en: "Red properties", es: "Propiedades rojas", de: "Rote Eigenschaften", nl: "Rode eigendommen" },
          { en: "Dark blue properties", es: "Propiedades azul oscuro", de: "Dunkelblaue Eigenschaften", nl: "Donkerblauwe eigendommen" },
          { en: "Green properties", es: "Propiedades verdes", de: "Grüne Eigenschaften", nl: "Groene eigendommen" }
        ],
        correct: 0,
        explanation: {
          en: "Orange properties are statistically landed on most due to their position relative to Jail (6-9 spaces away).",
          es: "Las propiedades naranjas son estadísticamente las más visitadas debido a su posición relativa a la Cárcel (6-9 espacios de distancia).",
          de: "Orange Eigenschaften werden statistisch am häufigsten betreten aufgrund ihrer Position relativ zum Gefängnis (6-9 Felder entfernt).",
          nl: "Oranje eigendommen worden statistisch het vaakst bezocht vanwege hun positie ten opzichte van de Gevangenis (6-9 vakken afstand)."
        }
      },
      {
        question: {
          en: "What is the best return on investment property group?",
          es: "¿Cuál es el grupo de propiedades con mejor retorno de inversión?",
          de: "Welche Eigenschaftsgruppe hat den besten Return on Investment?",
          nl: "Wat is de eigendomsgroep met het beste rendement?"
        },
        options: [
          { en: "Orange", es: "Naranja", de: "Orange", nl: "Oranje" },
          { en: "Light blue", es: "Azul claro", de: "Hellblau", nl: "Lichtblauw" },
          { en: "Dark blue", es: "Azul oscuro", de: "Dunkelblau", nl: "Donkerblauw" },
          { en: "Railroad", es: "Ferrocarril", de: "Eisenbahn", nl: "Spoorweg" }
        ],
        correct: 0,
        explanation: {
          en: "Orange properties offer the best ROI - frequently landed on, moderate cost, and strong rent progression.",
          es: "Las propiedades naranjas ofrecen el mejor ROI - se visitan frecuentemente, costo moderado y fuerte progresión de alquiler.",
          de: "Orange Eigenschaften bieten den besten ROI - häufig betreten, moderate Kosten und starke Mietsteigerung.",
          nl: "Oranje eigendommen bieden het beste ROI - vaak bezocht, gematigde kosten en sterke huurstijging."
        }
      },
      {
        question: {
          en: "How many houses return to the bank when you upgrade to a hotel?",
          es: "¿Cuántas casas regresan al banco cuando mejoras a un hotel?",
          de: "Wie viele Häuser gehen zurück zur Bank, wenn Sie auf ein Hotel upgraden?",
          nl: "Hoeveel huizen gaan terug naar de bank als je upgradet naar een hotel?"
        },
        options: [
          { en: "3 houses", es: "3 casas", de: "3 Häuser", nl: "3 huizen" },
          { en: "4 houses", es: "4 casas", de: "4 Häuser", nl: "4 huizen" },
          { en: "5 houses", es: "5 casas", de: "5 Häuser", nl: "5 huizen" },
          { en: "No houses return", es: "Ninguna casa regresa", de: "Keine Häuser kehren zurück", nl: "Geen huizen gaan terug" }
        ],
        correct: 1,
        explanation: {
          en: "When upgrading to a hotel, all 4 houses from that property return to the bank and are replaced by 1 hotel.",
          es: "Al mejorar a un hotel, las 4 casas de esa propiedad regresan al banco y son reemplazadas por 1 hotel.",
          de: "Beim Upgrade auf ein Hotel gehen alle 4 Häuser von dieser Eigenschaft zurück zur Bank und werden durch 1 Hotel ersetzt.",
          nl: "Bij een upgrade naar een hotel gaan alle 4 huizen van dat eigendom terug naar de bank en worden vervangen door 1 hotel."
        }
      },
      {
        question: {
          en: "Can you build on a property if one in the group is mortgaged?",
          es: "¿Puedes construir en una propiedad si una del grupo está hipotecada?",
          de: "Können Sie auf einer Eigenschaft bauen, wenn eine in der Gruppe beliehen ist?",
          nl: "Kun je bouwen op een eigendom als er één in de groep gehypothekeerd is?"
        },
        options: [
          { en: "Yes, on unmortgaged properties", es: "Sí, en propiedades no hipotecadas", de: "Ja, auf nicht beliehenen Eigenschaften", nl: "Ja, op niet-gehypothekeerde eigendommen" },
          { en: "No, all must be unmortgaged", es: "No, todas deben estar sin hipotecar", de: "Nein, alle müssen entbeleiht sein", nl: "Nee, alle moeten onthypothekeerd zijn" },
          { en: "Yes, but costs double", es: "Sí, pero cuesta el doble", de: "Ja, aber kostet doppelt", nl: "Ja, maar kost dubbel" },
          { en: "Only with bank permission", es: "Solo con permiso del banco", de: "Nur mit Bankerlaubnis", nl: "Alleen met toestemming van de bank" }
        ],
        correct: 1,
        explanation: {
          en: "You cannot build on any property in a color group if any property in that group is mortgaged.",
          es: "No puedes construir en ninguna propiedad de un grupo de colores si alguna propiedad de ese grupo está hipotecada.",
          de: "Sie können auf keiner Eigenschaft einer Farbgruppe bauen, wenn eine Eigenschaft in dieser Gruppe beliehen ist.",
          nl: "Je kunt niet bouwen op enig eigendom in een kleurgroep als enig eigendom in die groep gehypothekeerd is."
        }
      },
      {
        question: {
          en: "What is the maximum rent on Boardwalk with a hotel?",
          es: "¿Cuál es el alquiler máximo en Boardwalk con un hotel?",
          de: "Was ist die maximale Miete auf Boardwalk mit einem Hotel?",
          nl: "Wat is de maximale huur op Boardwalk met een hotel?"
        },
        options: [
          { en: "$1,000", es: "$1,000", de: "$1,000", nl: "$1,000" },
          { en: "$1,500", es: "$1,500", de: "$1,500", nl: "$1,500" },
          { en: "$2,000", es: "$2,000", de: "$2,000", nl: "$2,000" },
          { en: "$2,500", es: "$2,500", de: "$2,500", nl: "$2,500" }
        ],
        correct: 2,
        explanation: {
          en: "Boardwalk with a hotel charges $2,000 rent - the highest rent in the game.",
          es: "Boardwalk con un hotel cobra $2,000 de alquiler - el alquiler más alto del juego.",
          de: "Boardwalk mit einem Hotel verlangt $2,000 Miete - die höchste Miete im Spiel.",
          nl: "Boardwalk met een hotel vraagt $2,000 huur - de hoogste huur in het spel."
        }
      },
      {
        question: {
          en: "How much is the rent on a utility with both owned?",
          es: "¿Cuánto es el alquiler en un servicio público si posees ambos?",
          de: "Wie viel ist die Miete für ein Versorgungsunternehmen, wenn beide besessen werden?",
          nl: "Hoeveel is de huur op een nutsbedrijf als je beide bezit?"
        },
        options: [
          { en: "4 times dice roll", es: "4 veces la tirada de dados", de: "4-facher Würfelwurf", nl: "4 keer dobbelsteenworp" },
          { en: "6 times dice roll", es: "6 veces la tirada de dados", de: "6-facher Würfelwurf", nl: "6 keer dobbelsteenworp" },
          { en: "8 times dice roll", es: "8 veces la tirada de dados", de: "8-facher Würfelwurf", nl: "8 keer dobbelsteenworp" },
          { en: "10 times dice roll", es: "10 veces la tirada de dados", de: "10-facher Würfelwurf", nl: "10 keer dobbelsteenworp" }
        ],
        correct: 3,
        explanation: {
          en: "If you own both utilities, rent is 10 times the dice roll amount (vs. 4 times for owning just one).",
          es: "Si posees ambos servicios públicos, el alquiler es 10 veces la tirada de dados (vs. 4 veces por poseer solo uno).",
          de: "Wenn Sie beide Versorgungsunternehmen besitzen, ist die Miete das 10-fache des Würfelwurfs (vs. 4-fach für nur eines).",
          nl: "Als je beide nutsbedrijven bezit, is de huur 10 keer de dobbelsteenworp (vs. 4 keer voor slechts één)."
        }
      },
      {
        question: {
          en: "What is the strategic value of owning all four railroads?",
          es: "¿Cuál es el valor estratégico de poseer los cuatro ferrocarriles?",
          de: "Was ist der strategische Wert, alle vier Eisenbahnen zu besitzen?",
          nl: "Wat is de strategische waarde van het bezitten van alle vier spoorwegen?"
        },
        options: [
          { en: "Guaranteed $200 per landing", es: "$200 garantizados por aterrizaje", de: "$200 garantiert pro Landung", nl: "$200 gegarandeerd per landing" },
          { en: "No houses needed for strong income", es: "No se necesitan casas para ingresos fuertes", de: "Keine Häuser für starkes Einkommen nötig", nl: "Geen huizen nodig voor sterk inkomen" },
          { en: "Can trade them for properties", es: "Puedes cambiarlos por propiedades", de: "Kann sie gegen Eigenschaften tauschen", nl: "Kunt ze ruilen voor eigendommen" },
          { en: "All of the above", es: "Todo lo anterior", de: "Alle oben genannten", nl: "Alle bovenstaande" }
        ],
        correct: 1,
        explanation: {
          en: "All 4 railroads provide steady $200 rent without requiring house investment, offering consistent cashflow.",
          es: "Los 4 ferrocarriles proporcionan un alquiler constante de $200 sin requerir inversión en casas, ofreciendo flujo de efectivo constante.",
          de: "Alle 4 Eisenbahnen bieten stetige $200 Miete ohne Hausinvestition und bieten konstanten Cashflow.",
          nl: "Alle 4 spoorwegen bieden stabiele $200 huur zonder huizeninvestering, wat consistente cashflow oplevert."
        }
      },
      {
        question: {
          en: "Which monopoly requires the least total investment to develop?",
          es: "¿Qué monopolio requiere la menor inversión total para desarrollar?",
          de: "Welches Monopol erfordert die geringste Gesamtinvestition zur Entwicklung?",
          nl: "Welk monopolie vereist de minste totale investering om te ontwikkelen?"
        },
        options: [
          { en: "Brown properties", es: "Propiedades marrones", de: "Braune Eigenschaften", nl: "Bruine eigendommen" },
          { en: "Light blue properties", es: "Propiedades azul claro", de: "Hellblaue Eigenschaften", nl: "Lichtblauwe eigendommen" },
          { en: "Orange properties", es: "Propiedades naranjas", de: "Orange Eigenschaften", nl: "Oranje eigendommen" },
          { en: "Railroads", es: "Ferrocarriles", de: "Eisenbahnen", nl: "Spoorwegen" }
        ],
        correct: 0,
        explanation: {
          en: "Brown properties cost only $110 to buy and $300 for hotels (3 houses × $50 + hotel $50), lowest in game.",
          es: "Las propiedades marrones cuestan solo $110 para comprar y $300 para hoteles (3 casas × $50 + hotel $50), lo más bajo del juego.",
          de: "Braune Eigenschaften kosten nur $110 zum Kauf und $300 für Hotels (3 Häuser × $50 + Hotel $50), am niedrigsten im Spiel.",
          nl: "Bruine eigendommen kosten slechts $110 om te kopen en $300 voor hotels (3 huizen × $50 + hotel $50), laagste in het spel."
        }
      },
      {
        question: {
          en: "What happens to mortgaged properties when you declare bankruptcy?",
          es: "¿Qué pasa con las propiedades hipotecadas cuando te declaras en bancarrota?",
          de: "Was passiert mit beliehenen Eigenschaften, wenn Sie Konkurs anmelden?",
          nl: "Wat gebeurt er met gehypothekeerde eigendommen als je failliet gaat?"
        },
        options: [
          { en: "They return to the bank", es: "Vuelven al banco", de: "Sie gehen zurück an die Bank", nl: "Ze gaan terug naar de bank" },
          { en: "The creditor receives them mortgaged", es: "El acreedor las recibe hipotecadas", de: "Gläubiger erhält sie beliehen", nl: "Schuldeiser ontvangt ze gehypothekeerd" },
          { en: "They are auctioned", es: "Se subastan", de: "Sie werden versteigert", nl: "Ze worden geveild" },
          { en: "They are lost forever", es: "Se pierden para siempre", de: "Sie sind für immer verloren", nl: "Ze zijn voor altijd verloren" }
        ],
        correct: 1,
        explanation: {
          en: "When you go bankrupt to a player, they receive all your properties including mortgaged ones (still mortgaged).",
          es: "Cuando te declaras en bancarrota a un jugador, recibe todas tus propiedades incluyendo las hipotecadas (aún hipotecadas).",
          de: "Wenn Sie gegenüber einem Spieler Konkurs anmelden, erhält dieser alle Ihre Eigenschaften einschließlich beliehener (noch beliehen).",
          nl: "Als je failliet gaat bij een speler, ontvangt deze al je eigendommen inclusief gehypothekeerde (nog steeds gehypothekeerd)."
        }
      },
      {
        question: {
          en: "Can you buy houses on your turn in Jail?",
          es: "¿Puedes comprar casas en tu turno en la cárcel?",
          de: "Können Sie in Ihrem Zug im Gefängnis Häuser kaufen?",
          nl: "Kun je huizen kopen tijdens je beurt in de gevangenis?"
        },
        options: [
          { en: "No, cannot build in Jail", es: "No, no puedes construir en la cárcel", de: "Nein, kann im Gefängnis nicht bauen", nl: "Nee, kan niet bouwen in gevangenis" },
          { en: "Yes, you can still build", es: "Sí, aún puedes construir", de: "Ja, Sie können weiterhin bauen", nl: "Ja, je kunt nog steeds bouwen" },
          { en: "Only if you pay $50 first", es: "Solo si pagas $50 primero", de: "Nur wenn Sie zuerst $50 zahlen", nl: "Alleen als je eerst $50 betaalt" },
          { en: "Only on railroads", es: "Solo en ferrocarriles", de: "Nur auf Eisenbahnen", nl: "Alleen op spoorwegen" }
        ],
        correct: 1,
        explanation: {
          en: "Being in Jail doesn't restrict building - you can buy/sell houses and trade normally.",
          es: "Estar en la cárcel no restringe la construcción - puedes comprar/vender casas y negociar normalmente.",
          de: "Im Gefängnis zu sein schränkt das Bauen nicht ein - Sie können Häuser kaufen/verkaufen und normal handeln.",
          nl: "In de gevangenis zijn beperkt bouwen niet - je kunt huizen kopen/verkopen en normaal handelen."
        }
      },
      {
        question: {
          en: "What is the total cost to fully develop all orange properties?",
          es: "¿Cuál es el costo total para desarrollar completamente todas las propiedades naranjas?",
          de: "Was sind die Gesamtkosten für die vollständige Entwicklung aller orangefarbenen Eigenschaften?",
          nl: "Wat zijn de totale kosten om alle oranje eigendommen volledig te ontwikkelen?"
        },
        options: [
          { en: "$1,500", es: "$1,500", de: "$1,500", nl: "$1,500" },
          { en: "$1,800", es: "$1,800", de: "$1,800", nl: "$1,800" },
          { en: "$2,000", es: "$2,000", de: "$2,000", nl: "$2,000" },
          { en: "$2,200", es: "$2,200", de: "$2,200", nl: "$2,200" }
        ],
        correct: 2,
        explanation: {
          en: "Orange properties cost $880 to buy + 3 hotels at $400 each ($1,200) = $2,080 total (houses: $100 each).",
          es: "Las propiedades naranjas cuestan $880 para comprar + 3 hoteles a $400 cada uno ($1,200) = $2,080 total (casas: $100 cada una).",
          de: "Orange Eigenschaften kosten $880 zum Kauf + 3 Hotels zu je $400 ($1,200) = $2,080 gesamt (Häuser: je $100).",
          nl: "Oranje eigendommen kosten $880 om te kopen + 3 hotels à $400 elk ($1,200) = $2,080 totaal (huizen: $100 elk)."
        }
      },
      {
        question: {
          en: "Which chance card sends you directly to Boardwalk?",
          es: "¿Qué carta de Chance te envía directamente a Boardwalk?",
          de: "Welche Ereigniskarte schickt Sie direkt zu Boardwalk?",
          nl: "Welke kanskaart stuurt je direct naar Boardwalk?"
        },
        options: [
          { en: "Advance to Boardwalk", es: "Avanza a Boardwalk", de: "Gehe zu Boardwalk", nl: "Ga naar Boardwalk" },
          { en: "Go to nearest utility", es: "Ve al servicio público más cercano", de: "Gehe zum nächsten Versorgungsunternehmen", nl: "Ga naar dichtstbijzijnde nutsbedrijf" },
          { en: "Take a walk on the Boardwalk", es: "Da un paseo por el Boardwalk", de: "Machen Sie einen Spaziergang auf dem Boardwalk", nl: "Maak een wandeling op de Boardwalk" },
          { en: "No such card exists", es: "No existe tal carta", de: "Keine solche Karte existiert", nl: "Zo'n kaart bestaat niet" }
        ],
        correct: 3,
        explanation: {
          en: "There is no Chance card that sends you to Boardwalk. Cards go to specific locations but not Boardwalk.",
          es: "No hay carta de Chance que te envíe a Boardwalk. Las cartas van a ubicaciones específicas pero no a Boardwalk.",
          de: "Es gibt keine Ereigniskarte, die Sie zu Boardwalk schickt. Karten gehen zu bestimmten Orten, aber nicht zu Boardwalk.",
          nl: "Er is geen kanskaart die je naar Boardwalk stuurt. Kaarten gaan naar specifieke locaties maar niet naar Boardwalk."
        }
      },
      {
        question: {
          en: "What is a key advantage of the light blue monopoly?",
          es: "¿Cuál es una ventaja clave del monopolio azul claro?",
          de: "Was ist ein wichtiger Vorteil des hellblauen Monopols?",
          nl: "Wat is een belangrijk voordeel van het lichtblauwe monopolie?"
        },
        options: [
          { en: "Cheap to develop with decent returns", es: "Barato de desarrollar con retornos decentes", de: "Günstig zu entwickeln mit ordentlichen Renditen", nl: "Goedkoop om te ontwikkelen met degelijke rendementen" },
          { en: "Highest rent in game", es: "Alquiler más alto del juego", de: "Höchste Miete im Spiel", nl: "Hoogste huur in het spel" },
          { en: "Most landed on properties", es: "Propiedades más visitadas", de: "Am häufigsten betreten", nl: "Meest bezochte eigendommen" },
          { en: "Cannot be mortgaged", es: "No se puede hipotecar", de: "Kann nicht beliehen werden", nl: "Kan niet gehypothekeerd worden" }
        ],
        correct: 0,
        explanation: {
          en: "Light blue properties are inexpensive to buy and develop, offering good early-game value with $50 houses.",
          es: "Las propiedades azul claro son baratas de comprar y desarrollar, ofreciendo buen valor inicial con casas de $50.",
          de: "Hellblaue Eigenschaften sind günstig zu kaufen und zu entwickeln und bieten mit $50-Häusern guten Frühspielwert.",
          nl: "Lichtblauwe eigendommen zijn goedkoop om te kopen en ontwikkelen, en bieden goede vroege spelwaarde met $50 huizen."
        }
      },
      {
        question: {
          en: "How much total money is in a standard Monopoly bank?",
          es: "¿Cuánto dinero total hay en un banco de Monopoly estándar?",
          de: "Wie viel Geld insgesamt ist in einer Standard-Monopoly-Bank?",
          nl: "Hoeveel geld in totaal zit er in een standaard Monopoly bank?"
        },
        options: [
          { en: "$15,140", es: "$15,140", de: "$15,140", nl: "$15,140" },
          { en: "$20,580", es: "$20,580", de: "$20,580", nl: "$20,580" },
          { en: "$25,000", es: "$25,000", de: "$25,000", nl: "$25,000" },
          { en: "Unlimited", es: "Ilimitado", de: "Unbegrenzt", nl: "Onbeperkt" }
        ],
        correct: 1,
        explanation: {
          en: "A standard Monopoly set has $20,580 total. If the bank runs out, use paper as substitutes.",
          es: "Un set estándar de Monopoly tiene $20,580 en total. Si el banco se queda sin dinero, usa papel como sustituto.",
          de: "Ein Standard-Monopoly-Set hat insgesamt $20,580. Wenn die Bank ausgeht, verwenden Sie Papier als Ersatz.",
          nl: "Een standaard Monopoly set heeft in totaal $20,580. Als de bank opraakt, gebruik papier als vervanging."
        }
      },
      {
        question: {
          en: "Which property has the highest rent with 4 houses?",
          es: "¿Qué propiedad tiene el alquiler más alto con 4 casas?",
          de: "Welche Eigenschaft hat die höchste Miete mit 4 Häusern?",
          nl: "Welk eigendom heeft de hoogste huur met 4 huizen?"
        },
        options: [
          { en: "Boardwalk - $1,400", es: "Boardwalk - $1,400", de: "Boardwalk - $1,400", nl: "Boardwalk - $1,400" },
          { en: "Park Place - $1,200", es: "Park Place - $1,200", de: "Park Place - $1,200", nl: "Park Place - $1,200" },
          { en: "Pennsylvania Avenue - $1,000", es: "Pennsylvania Avenue - $1,000", de: "Pennsylvania Avenue - $1,000", nl: "Pennsylvania Avenue - $1,000" },
          { en: "Illinois Avenue - $900", es: "Illinois Avenue - $900", de: "Illinois Avenue - $900", nl: "Illinois Avenue - $900" }
        ],
        correct: 0,
        explanation: {
          en: "Boardwalk with 4 houses charges $1,400 rent, the highest 4-house rent in the game.",
          es: "Boardwalk con 4 casas cobra $1,400 de alquiler, el alquiler de 4 casas más alto del juego.",
          de: "Boardwalk mit 4 Häusern verlangt $1,400 Miete, die höchste 4-Haus-Miete im Spiel.",
          nl: "Boardwalk met 4 huizen vraagt $1,400 huur, de hoogste 4-huizen huur in het spel."
        }
      },
      {
        question: {
          en: "What is the rent multiplier for owning a complete color group?",
          es: "¿Cuál es el multiplicador de alquiler por poseer un grupo de colores completo?",
          de: "Was ist der Mietmultiplikator für den Besitz einer vollständigen Farbgruppe?",
          nl: "Wat is de huurmultiplicator voor het bezitten van een complete kleurgroep?"
        },
        options: [
          { en: "Rent stays the same", es: "El alquiler permanece igual", de: "Miete bleibt gleich", nl: "Huur blijft hetzelfde" },
          { en: "Rent doubles", es: "El alquiler se duplica", de: "Miete verdoppelt sich", nl: "Huur verdubbelt" },
          { en: "Rent triples", es: "El alquiler se triplica", de: "Miete verdreifacht sich", nl: "Huur verdriedubbelt" },
          { en: "Rent quadruples", es: "El alquiler se cuadruplica", de: "Miete vervierfacht sich", nl: "Huur verviervoudigt" }
        ],
        correct: 1,
        explanation: {
          en: "When you own all properties in a color group (monopoly), rent doubles even without houses.",
          es: "Cuando posees todas las propiedades de un grupo de colores (monopolio), el alquiler se duplica incluso sin casas.",
          de: "Wenn Sie alle Eigenschaften einer Farbgruppe (Monopol) besitzen, verdoppelt sich die Miete auch ohne Häuser.",
          nl: "Als je alle eigendommen in een kleurgroep bezit (monopolie), verdubbelt de huur zelfs zonder huizen."
        }
      },
      {
        question: {
          en: "Can a player refuse to participate in an auction?",
          es: "¿Puede un jugador negarse a participar en una subasta?",
          de: "Kann ein Spieler die Teilnahme an einer Auktion ablehnen?",
          nl: "Kan een speler weigeren om deel te nemen aan een veiling?"
        },
        options: [
          { en: "No, must bid at least $1", es: "No, debe ofertar al menos $1", de: "Nein, muss mindestens $1 bieten", nl: "Nee, moet minstens $1 bieden" },
          { en: "Yes, can choose not to bid", es: "Sí, puede elegir no ofertar", de: "Ja, kann sich entscheiden nicht zu bieten", nl: "Ja, kan kiezen om niet te bieden" },
          { en: "Only if bankrupt", es: "Solo si está en bancarrota", de: "Nur bei Konkurs", nl: "Alleen bij faillissement" },
          { en: "Must pay $10 to opt out", es: "Debe pagar $10 para no participar", de: "Muss $10 zahlen zum Ausstieg", nl: "Moet $10 betalen om niet deel te nemen" }
        ],
        correct: 1,
        explanation: {
          en: "Any player can choose not to bid in an auction - participation is optional.",
          es: "Cualquier jugador puede elegir no ofertar en una subasta - la participación es opcional.",
          de: "Jeder Spieler kann sich entscheiden, nicht in einer Auktion zu bieten - Teilnahme ist optional.",
          nl: "Elke speler kan kiezen om niet te bieden in een veiling - deelname is optioneel."
        }
      },
      {
        question: {
          en: "What is the purchase price of Connecticut Avenue?",
          es: "¿Cuál es el precio de compra de Connecticut Avenue?",
          de: "Was ist der Kaufpreis von Connecticut Avenue?",
          nl: "Wat is de aankoopprijs van Connecticut Avenue?"
        },
        options: [
          { en: "$100", es: "$100", de: "$100", nl: "$100" },
          { en: "$120", es: "$120", de: "$120", nl: "$120" },
          { en: "$140", es: "$140", de: "$140", nl: "$140" },
          { en: "$160", es: "$160", de: "$160", nl: "$160" }
        ],
        correct: 1,
        explanation: {
          en: "Connecticut Avenue, the third light blue property, costs $120 to purchase.",
          es: "Connecticut Avenue, la tercera propiedad azul claro, cuesta $120 para comprar.",
          de: "Connecticut Avenue, die dritte hellblaue Eigenschaft, kostet $120 zum Kauf.",
          nl: "Connecticut Avenue, het derde lichtblauwe eigendom, kost $120 om te kopen."
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
