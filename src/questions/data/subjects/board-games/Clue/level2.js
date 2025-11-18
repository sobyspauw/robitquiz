// Quiz Template - Level 2: Board Games - Cluedo
(function() {
  const level2 = {
    name: {
      en: "Cluedo - Intermediate",
      es: "Cluedo - Intermedio",
      de: "Cluedo - Fortgeschritten",
      nl: "Cluedo - Gevorderd"
    },
    questions: [
      {
        question: {
          en: "What is the strategic advantage of using secret passages?",
          es: "¿Cuál es la ventaja estratégica de usar pasajes secretos?",
          de: "Was ist der strategische Vorteil der Nutzung von Geheimgängen?",
          nl: "Wat is het strategische voordeel van het gebruik van geheime gangen?"
        },
        options: [
          { en: "Moving without rolling dice", es: "Moverse sin tirar dados", de: "Bewegen ohne Würfeln", nl: "Bewegen zonder dobbelstenen" },
          { en: "Gaining extra cards", es: "Obtener cartas extra", de: "Zusätzliche Karten erhalten", nl: "Extra kaarten krijgen" },
          { en: "Blocking other players", es: "Bloquear a otros jugadores", de: "Andere Spieler blockieren", nl: "Andere spelers blokkeren" },
          { en: "Making two suggestions", es: "Hacer dos sugerencias", de: "Zwei Vorschläge machen", nl: "Twee suggesties doen" }
        ],
        correct: 0,
        explanation: {
          en: "Secret passages allow you to move between opposite corner rooms without using dice, saving movement and allowing you to make suggestions more quickly.",
          es: "Los pasajes secretos te permiten moverte entre habitaciones de esquinas opuestas sin usar dados, ahorrando movimiento y permitiéndote hacer sugerencias más rápidamente.",
          de: "Geheimgänge ermöglichen es dir, dich zwischen gegenüberliegenden Eckräumen zu bewegen, ohne Würfel zu verwenden, was Bewegung spart und schnellere Vorschläge ermöglicht.",
          nl: "Geheime gangen stellen je in staat om tussen tegenovergestelde hoekkamers te bewegen zonder dobbelstenen, wat beweging bespaart en sneller suggesties mogelijk maakt."
        }
      },
      {
        question: {
          en: "Which player must show a card when a suggestion is made?",
          es: "¿Qué jugador debe mostrar una carta cuando se hace una sugerencia?",
          de: "Welcher Spieler muss eine Karte zeigen, wenn ein Vorschlag gemacht wird?",
          nl: "Welke speler moet een kaart tonen wanneer een suggestie wordt gedaan?"
        },
        options: [
          { en: "The player to the right", es: "El jugador a la derecha", de: "Der Spieler rechts", nl: "De speler rechts" },
          { en: "The player to the left", es: "El jugador a la izquierda", de: "Der Spieler links", nl: "De speler links" },
          { en: "Any player with a card", es: "Cualquier jugador con una carta", de: "Jeder Spieler mit einer Karte", nl: "Elke speler met een kaart" },
          { en: "The player who rolled highest", es: "El jugador que tiró más alto", de: "Der Spieler mit dem höchsten Wurf", nl: "De speler die het hoogst gooide" }
        ],
        correct: 1,
        explanation: {
          en: "The player to the left of the person making the suggestion must show a card if they have one matching the suggestion. If not, it passes clockwise around the table.",
          es: "El jugador a la izquierda de quien hace la sugerencia debe mostrar una carta si tiene una que coincida. Si no, pasa en sentido horario alrededor de la mesa.",
          de: "Der Spieler links von der Person, die den Vorschlag macht, muss eine Karte zeigen, wenn er eine passende hat. Wenn nicht, geht es im Uhrzeigersinn weiter.",
          nl: "De speler links van degene die de suggestie doet, moet een kaart tonen als ze er een hebben die overeenkomt. Zo niet, dan gaat het met de klok mee verder."
        }
      },
      {
        question: {
          en: "What is the best initial strategy for taking notes in Cluedo?",
          es: "¿Cuál es la mejor estrategia inicial para tomar notas en Cluedo?",
          de: "Was ist die beste anfängliche Strategie für Notizen in Cluedo?",
          nl: "Wat is de beste beginstrategie voor het maken van notities in Cluedo?"
        },
        options: [
          { en: "List only your own cards", es: "Listar solo tus propias cartas", de: "Nur die eigenen Karten auflisten", nl: "Alleen je eigen kaarten noteren" },
          { en: "Mark off cards shown to you", es: "Marcar las cartas mostradas", de: "Gezeigte Karten markieren", nl: "Getoonde kaarten afvinken" },
          { en: "Create a grid for all players and cards", es: "Crear una cuadrícula para jugadores y cartas", de: "Ein Raster für alle Spieler und Karten erstellen", nl: "Een raster maken voor spelers en kaarten" },
          { en: "Only track weapon cards", es: "Solo rastrear cartas de armas", de: "Nur Waffenkarten verfolgen", nl: "Alleen wapenkaarten bijhouden" }
        ],
        correct: 2,
        explanation: {
          en: "Creating a grid with all players and cards lets you track who has which cards, who showed what, and deduce information from suggestions where no cards were shown.",
          es: "Crear una cuadrícula con todos los jugadores y cartas te permite rastrear quién tiene qué cartas, quién mostró qué, y deducir información de sugerencias donde no se mostraron cartas.",
          de: "Ein Raster mit allen Spielern und Karten zu erstellen, ermöglicht es dir zu verfolgen, wer welche Karten hat, wer was gezeigt hat, und Informationen aus Vorschlägen ohne gezeigte Karten abzuleiten.",
          nl: "Een raster maken met alle spelers en kaarten stelt je in staat bij te houden wie welke kaarten heeft, wie wat toonde, en informatie af te leiden uit suggesties zonder getoonde kaarten."
        }
      },
      {
        question: {
          en: "If a player shows you the Rope when you suggest 'Colonel Mustard, Rope, Library', what can you conclude?",
          es: "Si un jugador te muestra la Cuerda cuando sugieres 'Coronel Mustard, Cuerda, Biblioteca', ¿qué puedes concluir?",
          de: "Wenn ein Spieler dir das Seil zeigt, wenn du 'Colonel Mustard, Seil, Bibliothek' vorschlägst, was kannst du daraus schließen?",
          nl: "Als een speler je het Touw toont wanneer je 'Colonel Mustard, Touw, Bibliotheek' suggereert, wat kun je dan concluderen?"
        },
        options: [
          { en: "They definitely have Mustard and Library too", es: "Definitivamente tienen también Mustard y Biblioteca", de: "Sie haben definitiv auch Mustard und Bibliothek", nl: "Ze hebben zeker ook Mustard en Bibliotheek" },
          { en: "They might have Mustard or Library", es: "Podrían tener Mustard o Biblioteca", de: "Sie könnten Mustard oder Bibliothek haben", nl: "Ze hebben mogelijk Mustard of Bibliotheek" },
          { en: "They only have the Rope", es: "Solo tienen la Cuerda", de: "Sie haben nur das Seil", nl: "Ze hebben alleen het Touw" },
          { en: "The Rope is in the solution", es: "La Cuerda está en la solución", de: "Das Seil ist in der Lösung", nl: "Het Touw zit in de oplossing" }
        ],
        correct: 1,
        explanation: {
          en: "When shown only one card, you know they have at least that card, but they might also have one or both of the other cards in your suggestion. Players only show one card even if they have multiple matches.",
          es: "Cuando se muestra solo una carta, sabes que tienen al menos esa carta, pero también podrían tener una o ambas de las otras cartas. Los jugadores solo muestran una carta incluso con múltiples coincidencias.",
          de: "Wenn nur eine Karte gezeigt wird, weißt du, dass sie mindestens diese Karte haben, aber sie könnten auch eine oder beide der anderen Karten haben. Spieler zeigen nur eine Karte, auch bei mehreren Übereinstimmungen.",
          nl: "Wanneer slechts één kaart wordt getoond, weet je dat ze tenminste die kaart hebben, maar ze kunnen ook één of beide andere kaarten hebben. Spelers tonen slechts één kaart, zelfs bij meerdere overeenkomsten."
        }
      },
      {
        question: {
          en: "What rooms are connected by the diagonal secret passages?",
          es: "¿Qué habitaciones están conectadas por los pasajes secretos diagonales?",
          de: "Welche Räume sind durch die diagonalen Geheimgänge verbunden?",
          nl: "Welke kamers zijn verbonden door de diagonale geheime gangen?"
        },
        options: [
          { en: "Study-Kitchen and Lounge-Conservatory", es: "Estudio-Cocina y Salón-Invernadero", de: "Arbeitszimmer-Küche und Salon-Wintergarten", nl: "Studeerkamer-Keuken en Salon-Serre" },
          { en: "Library-Ballroom and Hall-Dining Room", es: "Biblioteca-Salón de baile y Vestíbulo-Comedor", de: "Bibliothek-Ballsaal und Halle-Esszimmer", nl: "Bibliotheek-Balzaal en Hal-Eetkamer" },
          { en: "Conservatory-Hall and Kitchen-Lounge", es: "Invernadero-Vestíbulo y Cocina-Salón", de: "Wintergarten-Halle und Küche-Salon", nl: "Serre-Hal en Keuken-Salon" },
          { en: "Billiard Room-Kitchen and Study-Ballroom", es: "Sala de billar-Cocina y Estudio-Salón de baile", de: "Billardzimmer-Küche und Arbeitszimmer-Ballsaal", nl: "Biljarttkamer-Keuken en Studeerkamer-Balzaal" }
        ],
        correct: 0,
        explanation: {
          en: "The two secret passages connect opposite corners of the board: Study to Kitchen (top-left to bottom-left) and Lounge to Conservatory (top-right to bottom-right).",
          es: "Los dos pasajes secretos conectan esquinas opuestas del tablero: Estudio a Cocina (arriba-izquierda a abajo-izquierda) y Salón a Invernadero (arriba-derecha a abajo-derecha).",
          de: "Die beiden Geheimgänge verbinden gegenüberliegende Ecken: Arbeitszimmer zur Küche (oben-links zu unten-links) und Salon zum Wintergarten (oben-rechts zu unten-rechts).",
          nl: "De twee geheime gangen verbinden tegenovergestelde hoeken: Studeerkamer naar Keuken (linksboven naar linksonder) en Salon naar Serre (rechtsboven naar rechtsonder)."
        }
      },
      {
        question: {
          en: "Why is it strategic to suggest cards you already hold?",
          es: "¿Por qué es estratégico sugerir cartas que ya tienes?",
          de: "Warum ist es strategisch, Karten vorzuschlagen, die du bereits hast?",
          nl: "Waarom is het strategisch om kaarten te suggereren die je al hebt?"
        },
        options: [
          { en: "To confuse other players about what you have", es: "Para confundir a otros jugadores sobre lo que tienes", de: "Um andere Spieler zu verwirren, was du hast", nl: "Om andere spelers te verwarren over wat je hebt" },
          { en: "To get extra cards from other players", es: "Para obtener cartas extra de otros jugadores", de: "Um zusätzliche Karten von anderen Spielern zu bekommen", nl: "Om extra kaarten van andere spelers te krijgen" },
          { en: "To learn about the other two cards", es: "Para aprender sobre las otras dos cartas", de: "Um über die anderen zwei Karten zu lernen", nl: "Om over de andere twee kaarten te leren" },
          { en: "It's never strategic to do this", es: "Nunca es estratégico hacer esto", de: "Es ist nie strategisch, dies zu tun", nl: "Het is nooit strategisch om dit te doen" }
        ],
        correct: 2,
        explanation: {
          en: "Suggesting a card you hold guarantees that if someone shows you a card, it must be one of the other two cards in your suggestion, giving you more certain information.",
          es: "Sugerir una carta que tienes garantiza que si alguien te muestra una carta, debe ser una de las otras dos cartas de tu sugerencia, dándote información más segura.",
          de: "Eine Karte vorzuschlagen, die du hast, garantiert, dass wenn jemand dir eine Karte zeigt, es eine der beiden anderen Karten sein muss, was dir sicherere Informationen gibt.",
          nl: "Een kaart suggereren die je hebt, garandeert dat als iemand je een kaart toont, het één van de andere twee kaarten moet zijn, waardoor je zekerder informatie krijgt."
        }
      },
      {
        question: {
          en: "How many cards does each player receive in a 3-player game?",
          es: "¿Cuántas cartas recibe cada jugador en un juego de 3 jugadores?",
          de: "Wie viele Karten erhält jeder Spieler in einem 3-Spieler-Spiel?",
          nl: "Hoeveel kaarten krijgt elke speler in een spel met 3 spelers?"
        },
        options: [
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "7", es: "7", de: "7", nl: "7" },
          { en: "It varies", es: "Varía", de: "Es variiert", nl: "Het varieert" }
        ],
        correct: 1,
        explanation: {
          en: "In a 3-player game, after removing 3 cards for the solution, 18 cards remain. Each player receives 6 cards. In games with uneven distribution, some players may get one extra card.",
          es: "En un juego de 3 jugadores, después de quitar 3 cartas para la solución, quedan 18 cartas. Cada jugador recibe 6 cartas. En distribución desigual, algunos pueden recibir una carta extra.",
          de: "In einem 3-Spieler-Spiel bleiben nach Entfernung von 3 Karten für die Lösung 18 Karten übrig. Jeder Spieler erhält 6 Karten. Bei ungleicher Verteilung können einige eine zusätzliche Karte erhalten.",
          nl: "In een spel met 3 spelers blijven er na het verwijderen van 3 kaarten voor de oplossing 18 kaarten over. Elke speler krijgt 6 kaarten. Bij ongelijke verdeling kunnen sommigen een extra kaart krijgen."
        }
      },
      {
        question: {
          en: "What is the purpose of moving suspect tokens to rooms during suggestions?",
          es: "¿Cuál es el propósito de mover fichas de sospechosos a habitaciones durante las sugerencias?",
          de: "Was ist der Zweck, Verdächtigenfiguren während Vorschlägen in Räume zu bewegen?",
          nl: "Wat is het doel van het verplaatsen van verdachtenfiguren naar kamers tijdens suggesties?"
        },
        options: [
          { en: "To confuse other players", es: "Para confundir a otros jugadores", de: "Um andere Spieler zu verwirren", nl: "Om andere spelers te verwarren" },
          { en: "To visualize the suggestion", es: "Para visualizar la sugerencia", de: "Um den Vorschlag zu visualisieren", nl: "Om de suggestie te visualiseren" },
          { en: "To eliminate suspects", es: "Para eliminar sospechosos", de: "Um Verdächtige zu eliminieren", nl: "Om verdachten te elimineren" },
          { en: "To gain bonus moves", es: "Para obtener movimientos bonus", de: "Um Bonusbewegungen zu erhalten", nl: "Om bonuszetten te krijgen" }
        ],
        correct: 1,
        explanation: {
          en: "Moving suspect tokens to the suggested room helps all players visualize the suggestion being made and ensures everyone knows which room, character, and weapon are being proposed.",
          es: "Mover fichas de sospechosos a la habitación sugerida ayuda a todos los jugadores a visualizar la sugerencia y asegura que todos sepan qué habitación, personaje y arma se proponen.",
          de: "Das Bewegen von Verdächtigenfiguren in den vorgeschlagenen Raum hilft allen Spielern, den Vorschlag zu visualisieren und stellt sicher, dass jeder weiß, welcher Raum, Charakter und Waffe vorgeschlagen werden.",
          nl: "Het verplaatsen van verdachtenfiguren naar de gesuggereerde kamer helpt alle spelers de suggestie te visualiseren en zorgt ervoor dat iedereen weet welke kamer, personage en wapen worden voorgesteld."
        }
      },
      {
        question: {
          en: "What happens if you roll doubles in Cluedo?",
          es: "¿Qué pasa si sacas dobles en Cluedo?",
          de: "Was passiert, wenn du einen Pasch in Cluedo würfelst?",
          nl: "Wat gebeurt er als je een dubbel gooit in Cluedo?"
        },
        options: [
          { en: "You get an extra turn", es: "Obtienes un turno extra", de: "Du bekommst einen zusätzlichen Zug", nl: "Je krijgt een extra beurt" },
          { en: "You roll again", es: "Tiras de nuevo", de: "Du würfelst erneut", nl: "Je gooit opnieuw" },
          { en: "Nothing special happens", es: "No pasa nada especial", de: "Nichts Besonderes passiert", nl: "Er gebeurt niets speciaals" },
          { en: "You make two suggestions", es: "Haces dos sugerencias", de: "Du machst zwei Vorschläge", nl: "Je doet twee suggesties" }
        ],
        correct: 2,
        explanation: {
          en: "In standard Cluedo rules, rolling doubles has no special effect. You simply move the total number of spaces shown on both dice.",
          es: "En las reglas estándar de Cluedo, sacar dobles no tiene ningún efecto especial. Simplemente mueves el número total de espacios mostrados en ambos dados.",
          de: "In den Standard-Cluedo-Regeln hat das Würfeln eines Paschs keine besondere Wirkung. Du bewegst dich einfach um die Gesamtzahl der auf beiden Würfeln angezeigten Felder.",
          nl: "In de standaard Cluedo-regels heeft het gooien van een dubbel geen speciaal effect. Je beweegt gewoon het totale aantal vakjes dat op beide dobbelstenen wordt getoond."
        }
      },
      {
        question: {
          en: "Which room has the most doorways in classic Cluedo?",
          es: "¿Qué habitación tiene más puertas en el Cluedo clásico?",
          de: "Welcher Raum hat die meisten Türen im klassischen Cluedo?",
          nl: "Welke kamer heeft de meeste deuren in klassiek Cluedo?"
        },
        options: [
          { en: "Hall", es: "Vestíbulo", de: "Halle", nl: "Hal" },
          { en: "Conservatory", es: "Invernadero", de: "Wintergarten", nl: "Serre" },
          { en: "Dining Room", es: "Comedor", de: "Esszimmer", nl: "Eetkamer" },
          { en: "Ballroom", es: "Salón de baile", de: "Ballsaal", nl: "Balzaal" }
        ],
        correct: 0,
        explanation: {
          en: "The Hall has the most doorways with three entrances, making it easily accessible from multiple corridors. The Conservatory and Lounge each have only one entrance.",
          es: "El Vestíbulo tiene más puertas con tres entradas, haciéndolo fácilmente accesible desde múltiples corredores. El Invernadero y el Salón tienen solo una entrada cada uno.",
          de: "Die Halle hat mit drei Eingängen die meisten Türen, was sie von mehreren Korridoren aus leicht zugänglich macht. Der Wintergarten und der Salon haben jeweils nur einen Eingang.",
          nl: "De Hal heeft de meeste deuren met drie ingangen, waardoor het gemakkelijk toegankelijk is vanuit meerdere gangen. De Serre en de Salon hebben elk slechts één ingang."
        }
      },
      {
        question: {
          en: "How should you respond when someone makes a suggestion and you have multiple matching cards?",
          es: "¿Cómo debes responder cuando alguien hace una sugerencia y tienes múltiples cartas coincidentes?",
          de: "Wie solltest du reagieren, wenn jemand einen Vorschlag macht und du mehrere passende Karten hast?",
          nl: "Hoe moet je reageren wanneer iemand een suggestie doet en je meerdere overeenkomende kaarten hebt?"
        },
        options: [
          { en: "Show all matching cards", es: "Mostrar todas las cartas coincidentes", de: "Alle passenden Karten zeigen", nl: "Alle overeenkomende kaarten tonen" },
          { en: "Show only one card of your choice", es: "Mostrar solo una carta de tu elección", de: "Nur eine Karte deiner Wahl zeigen", nl: "Slechts één kaart naar keuze tonen" },
          { en: "Show the highest value card", es: "Mostrar la carta de mayor valor", de: "Die Karte mit dem höchsten Wert zeigen", nl: "De hoogste waardekaart tonen" },
          { en: "Let the player choose which to see", es: "Dejar que el jugador elija cuál ver", de: "Den Spieler wählen lassen, welche er sehen will", nl: "De speler laten kiezen welke te zien" }
        ],
        correct: 1,
        explanation: {
          en: "When you have multiple matching cards, you must show exactly one card, but you choose which one to reveal. Strategic players often show cards that give away less information.",
          es: "Cuando tienes múltiples cartas coincidentes, debes mostrar exactamente una carta, pero tú eliges cuál revelar. Los jugadores estratégicos a menudo muestran cartas que revelan menos información.",
          de: "Wenn du mehrere passende Karten hast, musst du genau eine Karte zeigen, aber du wählst, welche du zeigst. Strategische Spieler zeigen oft Karten, die weniger Informationen preisgeben.",
          nl: "Wanneer je meerdere overeenkomende kaarten hebt, moet je precies één kaart tonen, maar je kiest welke je onthult. Strategische spelers tonen vaak kaarten die minder informatie prijsgeven."
        }
      },
      {
        question: {
          en: "What information can you gain when a suggestion passes around the table with no one showing a card?",
          es: "¿Qué información puedes obtener cuando una sugerencia pasa alrededor de la mesa sin que nadie muestre una carta?",
          de: "Welche Informationen kannst du erhalten, wenn ein Vorschlag um den Tisch geht, ohne dass jemand eine Karte zeigt?",
          nl: "Welke informatie kun je krijgen wanneer een suggestie rond de tafel gaat zonder dat iemand een kaart toont?"
        },
        options: [
          { en: "That suggestion is likely the solution", es: "Esa sugerencia es probablemente la solución", de: "Dieser Vorschlag ist wahrscheinlich die Lösung", nl: "Die suggestie is waarschijnlijk de oplossing" },
          { en: "All players are eliminated", es: "Todos los jugadores están eliminados", de: "Alle Spieler sind eliminiert", nl: "Alle spelers zijn geëlimineerd" },
          { en: "The cards are in the envelope", es: "Las cartas están en el sobre", de: "Die Karten sind im Umschlag", nl: "De kaarten zitten in de envelop" },
          { en: "Nothing useful", es: "Nada útil", de: "Nichts Nützliches", nl: "Niets nuttigs" }
        ],
        correct: 0,
        explanation: {
          en: "When no one can show any of the three cards you suggested, those three cards are very likely the solution in the envelope. You should strongly consider making that accusation.",
          es: "Cuando nadie puede mostrar ninguna de las tres cartas que sugeriste, esas tres cartas son muy probablemente la solución en el sobre. Deberías considerar seriamente hacer esa acusación.",
          de: "Wenn niemand eine der drei Karten zeigen kann, die du vorgeschlagen hast, sind diese drei Karten sehr wahrscheinlich die Lösung im Umschlag. Du solltest ernsthaft in Betracht ziehen, diese Anschuldigung zu machen.",
          nl: "Wanneer niemand een van de drie kaarten kan tonen die je suggereerde, zijn die drie kaarten zeer waarschijnlijk de oplossing in de envelop. Je zou serieus moeten overwegen die beschuldiging te maken."
        }
      },
      {
        question: {
          en: "Why is the Conservatory considered a strategic room?",
          es: "¿Por qué se considera el Invernadero una habitación estratégica?",
          de: "Warum wird der Wintergarten als strategischer Raum angesehen?",
          nl: "Waarom wordt de Serre beschouwd als een strategische kamer?"
        },
        options: [
          { en: "It has the most doorways", es: "Tiene la mayoría de las puertas", de: "Er hat die meisten Türen", nl: "Het heeft de meeste deuren" },
          { en: "It connects to the center", es: "Conecta con el centro", de: "Er verbindet sich mit der Mitte", nl: "Het verbindt met het centrum" },
          { en: "It has a secret passage", es: "Tiene un pasaje secreto", de: "Er hat einen Geheimgang", nl: "Het heeft een geheime gang" },
          { en: "It's closest to the start", es: "Está más cerca del inicio", de: "Er ist am nächsten zum Start", nl: "Het ligt het dichtst bij de start" }
        ],
        correct: 2,
        explanation: {
          en: "The Conservatory is strategic because it has a secret passage to the Lounge, allowing quick movement across the board despite having only one regular doorway.",
          es: "El Invernadero es estratégico porque tiene un pasaje secreto al Salón, permitiendo movimiento rápido a través del tablero a pesar de tener solo una puerta regular.",
          de: "Der Wintergarten ist strategisch, weil er einen Geheimgang zum Salon hat, der trotz nur einer regulären Tür schnelle Bewegung über das Brett ermöglicht.",
          nl: "De Serre is strategisch omdat het een geheime gang naar de Salon heeft, waardoor snelle beweging over het bord mogelijk is ondanks slechts één gewone deur."
        }
      },
      {
        question: {
          en: "What is the difference between a suggestion and an accusation?",
          es: "¿Cuál es la diferencia entre una sugerencia y una acusación?",
          de: "Was ist der Unterschied zwischen einem Vorschlag und einer Anschuldigung?",
          nl: "Wat is het verschil tussen een suggestie en een beschuldiging?"
        },
        options: [
          { en: "Suggestions are made in rooms, accusations anywhere", es: "Sugerencias en habitaciones, acusaciones en cualquier lugar", de: "Vorschläge in Räumen, Anschuldigungen überall", nl: "Suggesties in kamers, beschuldigingen overal" },
          { en: "Only suggestions can win the game", es: "Solo las sugerencias pueden ganar el juego", de: "Nur Vorschläge können das Spiel gewinnen", nl: "Alleen suggesties kunnen het spel winnen" },
          { en: "Accusations require two cards", es: "Las acusaciones requieren dos cartas", de: "Anschuldigungen erfordern zwei Karten", nl: "Beschuldigingen vereisen twee kaarten" },
          { en: "There is no difference", es: "No hay diferencia", de: "Es gibt keinen Unterschied", nl: "Er is geen verschil" }
        ],
        correct: 0,
        explanation: {
          en: "Suggestions can only be made when you're in a room and can be disproven by other players. Accusations can be made anywhere, but if wrong, you're eliminated from the game.",
          es: "Las sugerencias solo pueden hacerse cuando estás en una habitación y pueden ser refutadas por otros jugadores. Las acusaciones pueden hacerse en cualquier lugar, pero si estás equivocado, eres eliminado.",
          de: "Vorschläge können nur gemacht werden, wenn du in einem Raum bist und können von anderen Spielern widerlegt werden. Anschuldigungen können überall gemacht werden, aber wenn falsch, wirst du eliminiert.",
          nl: "Suggesties kunnen alleen worden gedaan wanneer je in een kamer bent en kunnen door andere spelers worden weerlegd. Beschuldigingen kunnen overal worden gemaakt, maar als je ongelijk hebt, word je geëlimineerd."
        }
      },
      {
        question: {
          en: "Which character starts closest to the Study?",
          es: "¿Qué personaje comienza más cerca del Estudio?",
          de: "Welcher Charakter startet am nächsten zum Arbeitszimmer?",
          nl: "Welk personage begint het dichtst bij de Studeerkamer?"
        },
        options: [
          { en: "Professor Plum", es: "Profesor Plum", de: "Professor Plum", nl: "Professor Plum" },
          { en: "Miss Scarlett", es: "Miss Scarlett", de: "Miss Scarlett", nl: "Miss Scarlett" },
          { en: "Colonel Mustard", es: "Coronel Mustard", de: "Colonel Mustard", nl: "Colonel Mustard" },
          { en: "Mrs. White", es: "Mrs. White", de: "Mrs. White", nl: "Mrs. White" }
        ],
        correct: 0,
        explanation: {
          en: "Professor Plum starts in the position closest to the Study in the upper-left corner of the board, giving him quick access to one of the corner rooms with a secret passage.",
          es: "El Profesor Plum comienza en la posición más cercana al Estudio en la esquina superior izquierda del tablero, dándole acceso rápido a una habitación de esquina con pasaje secreto.",
          de: "Professor Plum startet in der Position, die dem Arbeitszimmer in der oberen linken Ecke des Bretts am nächsten ist, was ihm schnellen Zugang zu einem der Eckräume mit Geheimgang gibt.",
          nl: "Professor Plum begint in de positie het dichtst bij de Studeerkamer in de linkerbovenhoek van het bord, wat hem snelle toegang geeft tot een van de hoekkamers met een geheime gang."
        }
      },
      {
        question: {
          en: "What is a common mistake beginners make in Cluedo?",
          es: "¿Cuál es un error común que cometen los principiantes en Cluedo?",
          de: "Was ist ein häufiger Fehler, den Anfänger in Cluedo machen?",
          nl: "Wat is een veelgemaakte fout die beginners maken in Cluedo?"
        },
        options: [
          { en: "Making accusations too early", es: "Hacer acusaciones demasiado pronto", de: "Zu früh Anschuldigungen machen", nl: "Te vroeg beschuldigingen maken" },
          { en: "Rolling the dice incorrectly", es: "Tirar los dados incorrectamente", de: "Die Würfel falsch werfen", nl: "De dobbelstenen verkeerd gooien" },
          { en: "Moving too many spaces", es: "Moverse demasiados espacios", de: "Zu viele Felder bewegen", nl: "Te veel vakjes bewegen" },
          { en: "Forgetting to use weapons", es: "Olvidar usar armas", de: "Vergessen, Waffen zu verwenden", nl: "Vergeten wapens te gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "Beginners often make accusations before gathering enough information, resulting in elimination. It's crucial to use suggestions to narrow down possibilities before making your final accusation.",
          es: "Los principiantes a menudo hacen acusaciones antes de recopilar suficiente información, resultando en eliminación. Es crucial usar sugerencias para reducir las posibilidades antes de la acusación final.",
          de: "Anfänger machen oft Anschuldigungen, bevor sie genug Informationen gesammelt haben, was zur Eliminierung führt. Es ist wichtig, Vorschläge zu verwenden, um die Möglichkeiten einzugrenzen, bevor man die endgültige Anschuldigung macht.",
          nl: "Beginners maken vaak beschuldigingen voordat ze genoeg informatie hebben verzameld, wat resulteert in eliminatie. Het is cruciaal om suggesties te gebruiken om mogelijkheden te beperken voor je definitieve beschuldiging."
        }
      },
      {
        question: {
          en: "How many total doorways are there on the classic Cluedo board?",
          es: "¿Cuántas puertas hay en total en el tablero clásico de Cluedo?",
          de: "Wie viele Türen gibt es insgesamt auf dem klassischen Cluedo-Brett?",
          nl: "Hoeveel deuren zijn er in totaal op het klassieke Cluedo-bord?"
        },
        options: [
          { en: "12", es: "12", de: "12", nl: "12" },
          { en: "15", es: "15", de: "15", nl: "15" },
          { en: "18", es: "18", de: "18", nl: "18" },
          { en: "21", es: "21", de: "21", nl: "21" }
        ],
        correct: 1,
        explanation: {
          en: "There are 15 doorways total on the classic Cluedo board, distributed unevenly among the nine rooms, with some rooms having multiple entrances and others having only one.",
          es: "Hay 15 puertas en total en el tablero clásico de Cluedo, distribuidas de manera desigual entre las nueve habitaciones, con algunas habitaciones teniendo múltiples entradas y otras solo una.",
          de: "Es gibt insgesamt 15 Türen auf dem klassischen Cluedo-Brett, die ungleichmäßig auf die neun Räume verteilt sind, wobei einige Räume mehrere Eingänge und andere nur einen haben.",
          nl: "Er zijn in totaal 15 deuren op het klassieke Cluedo-bord, ongelijk verdeeld over de negen kamers, waarbij sommige kamers meerdere ingangen hebben en andere slechts één."
        }
      },
      {
        question: {
          en: "What should you do if you're moved to a room by another player's suggestion?",
          es: "¿Qué debes hacer si eres movido a una habitación por la sugerencia de otro jugador?",
          de: "Was solltest du tun, wenn du durch den Vorschlag eines anderen Spielers in einen Raum bewegt wirst?",
          nl: "Wat moet je doen als je naar een kamer wordt verplaatst door de suggestie van een andere speler?"
        },
        options: [
          { en: "Skip your next turn", es: "Saltar tu siguiente turno", de: "Deinen nächsten Zug überspringen", nl: "Je volgende beurt overslaan" },
          { en: "Take advantage by making a suggestion there", es: "Aprovechar haciendo una sugerencia allí", de: "Nutzen, indem du dort einen Vorschlag machst", nl: "Hiervan profiteren door daar een suggestie te doen" },
          { en: "Move back to your original position", es: "Volver a tu posición original", de: "Zurück zu deiner ursprünglichen Position bewegen", nl: "Terug naar je oorspronkelijke positie gaan" },
          { en: "Show all your cards", es: "Mostrar todas tus cartas", de: "Alle deine Karten zeigen", nl: "Al je kaarten tonen" }
        ],
        correct: 1,
        explanation: {
          en: "Being moved to a room by another player's suggestion is actually advantageous. On your turn, you can immediately make a suggestion in that room without spending moves.",
          es: "Ser movido a una habitación por la sugerencia de otro jugador es en realidad ventajoso. En tu turno, puedes hacer inmediatamente una sugerencia en esa habitación sin gastar movimientos.",
          de: "Durch den Vorschlag eines anderen Spielers in einen Raum bewegt zu werden, ist tatsächlich vorteilhaft. In deinem Zug kannst du sofort einen Vorschlag in diesem Raum machen, ohne Bewegungen zu verbrauchen.",
          nl: "Door de suggestie van een andere speler naar een kamer worden verplaatst is eigenlijk voordelig. In jouw beurt kun je onmiddellijk een suggestie doen in die kamer zonder zetten te verbruiken."
        }
      },
      {
        question: {
          en: "Which weapon card is alphabetically first in English?",
          es: "¿Qué carta de arma es alfabéticamente la primera en inglés?",
          de: "Welche Waffenkarte ist im Englischen alphabetisch die erste?",
          nl: "Welke wapenkaart komt alfabetisch als eerste in het Engels?"
        },
        options: [
          { en: "Candlestick", es: "Candelabro", de: "Kerzenständer", nl: "Kandelaar" },
          { en: "Dagger/Knife", es: "Daga/Cuchillo", de: "Dolch/Messer", nl: "Dolk/Mes" },
          { en: "Lead Pipe", es: "Tubería de plomo", de: "Bleiröhre", nl: "Loden pijp" },
          { en: "Revolver", es: "Revólver", de: "Revolver", nl: "Revolver" }
        ],
        correct: 0,
        explanation: {
          en: "The Candlestick is the first weapon alphabetically in English among the six classic weapons: Candlestick, Dagger/Knife, Lead Pipe, Revolver, Rope, and Wrench/Spanner.",
          es: "El Candelabro es la primera arma alfabéticamente en inglés entre las seis armas clásicas: Candlestick, Dagger/Knife, Lead Pipe, Revolver, Rope y Wrench/Spanner.",
          de: "Der Kerzenständer ist alphabetisch die erste Waffe im Englischen unter den sechs klassischen Waffen: Candlestick, Dagger/Knife, Lead Pipe, Revolver, Rope und Wrench/Spanner.",
          nl: "De Kandelaar is alfabetisch het eerste wapen in het Engels onder de zes klassieke wapens: Candlestick, Dagger/Knife, Lead Pipe, Revolver, Rope en Wrench/Spanner."
        }
      },
      {
        question: {
          en: "What happens to weapon tokens during the game?",
          es: "¿Qué pasa con las fichas de armas durante el juego?",
          de: "Was passiert mit den Waffen-Tokens während des Spiels?",
          nl: "Wat gebeurt er met de wapenfiguren tijdens het spel?"
        },
        options: [
          { en: "They move with suggestions", es: "Se mueven con las sugerencias", de: "Sie bewegen sich mit Vorschlägen", nl: "Ze bewegen met suggesties" },
          { en: "They stay in starting positions", es: "Permanecen en posiciones iniciales", de: "Sie bleiben in Startpositionen", nl: "Ze blijven op startposities" },
          { en: "Players collect them", es: "Los jugadores los recogen", de: "Spieler sammeln sie", nl: "Spelers verzamelen ze" },
          { en: "They are not used", es: "No se usan", de: "Sie werden nicht verwendet", nl: "Ze worden niet gebruikt" }
        ],
        correct: 0,
        explanation: {
          en: "Weapon tokens are moved to rooms during suggestions to visualize which weapon is being suggested, just like character tokens. They accumulate in rooms throughout the game.",
          es: "Las fichas de armas se mueven a las habitaciones durante las sugerencias para visualizar qué arma se está sugiriendo, al igual que las fichas de personajes. Se acumulan en habitaciones durante el juego.",
          de: "Waffen-Tokens werden während Vorschlägen in Räume bewegt, um zu visualisieren, welche Waffe vorgeschlagen wird, genau wie Charakterfiguren. Sie sammeln sich im Laufe des Spiels in Räumen an.",
          nl: "Wapenfiguren worden tijdens suggesties naar kamers verplaatst om te visualiseren welk wapen wordt gesuggereerd, net zoals personagefiguren. Ze verzamelen zich gedurende het spel in kamers."
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
