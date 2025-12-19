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
      },
      {
        question: {
          en: "Why might you want to suggest the same room multiple times?",
          es: "¿Por qué podrías querer sugerir la misma habitación múltiples veces?",
          de: "Warum möchtest du möglicherweise denselben Raum mehrmals vorschlagen?",
          nl: "Waarom zou je mogelijk dezelfde kamer meerdere keren willen suggereren?"
        },
        options: [
          { en: "To eliminate different suspects and weapons", es: "Para eliminar diferentes sospechosos y armas", de: "Um verschiedene Verdächtige und Waffen zu eliminieren", nl: "Om verschillende verdachten en wapens te elimineren" },
          { en: "It's against the rules", es: "Está contra las reglas", de: "Es ist gegen die Regeln", nl: "Het is tegen de regels" },
          { en: "To confuse other players", es: "Para confundir a otros jugadores", de: "Um andere Spieler zu verwirren", nl: "Om andere spelers te verwarren" },
          { en: "To collect bonus points", es: "Para recoger puntos bonus", de: "Um Bonuspunkte zu sammeln", nl: "Om bonuspunten te verzamelen" }
        ],
        correct: 0,
        explanation: {
          en: "Suggesting the same room multiple times with different suspects and weapons helps you systematically eliminate possibilities for that room while gathering information about other cards.",
          es: "Sugerir la misma habitación múltiples veces con diferentes sospechosos y armas te ayuda a eliminar sistemáticamente posibilidades para esa habitación mientras recopila información sobre otras cartas.",
          de: "Denselben Raum mehrmals mit verschiedenen Verdächtigen und Waffen vorzuschlagen hilft dir, systematisch Möglichkeiten für diesen Raum zu eliminieren, während du Informationen über andere Karten sammelst.",
          nl: "Dezelfde kamer meerdere keren suggereren met verschillende verdachten en wapens helpt je systematisch mogelijkheden voor die kamer te elimineren terwijl je informatie verzamelt over andere kaarten."
        }
      },
      {
        question: {
          en: "What is the strategic value of staying in a room for multiple turns?",
          es: "¿Cuál es el valor estratégico de quedarse en una habitación durante múltiples turnos?",
          de: "Was ist der strategische Wert, mehrere Runden in einem Raum zu bleiben?",
          nl: "Wat is de strategische waarde van meerdere beurten in een kamer blijven?"
        },
        options: [
          { en: "Making multiple suggestions efficiently", es: "Hacer múltiples sugerencias eficientemente", de: "Mehrere Vorschläge effizient machen", nl: "Meerdere suggesties efficiënt doen" },
          { en: "Blocking other players' access", es: "Bloquear el acceso de otros jugadores", de: "Zugang anderer Spieler blockieren", nl: "Toegang van andere spelers blokkeren" },
          { en: "Earning extra cards", es: "Ganar cartas extra", de: "Zusätzliche Karten verdienen", nl: "Extra kaarten verdienen" },
          { en: "Getting extra dice rolls", es: "Obtener tiradas de dados extra", de: "Zusätzliche Würfelwürfe erhalten", nl: "Extra dobbelsteenworp krijgen" }
        ],
        correct: 0,
        explanation: {
          en: "Staying in a room allows you to make suggestions every turn without wasting movement, letting you test multiple combinations of suspects and weapons quickly.",
          es: "Quedarse en una habitación te permite hacer sugerencias cada turno sin desperdiciar movimiento, permitiéndote probar múltiples combinaciones de sospechosos y armas rápidamente.",
          de: "In einem Raum zu bleiben ermöglicht es dir, jeden Zug Vorschläge zu machen, ohne Bewegung zu verschwenden, was dir erlaubt, schnell mehrere Kombinationen von Verdächtigen und Waffen zu testen.",
          nl: "In een kamer blijven stelt je in staat elke beurt suggesties te doen zonder beweging te verspillen, waardoor je snel meerdere combinaties van verdachten en wapens kunt testen."
        }
      },
      {
        question: {
          en: "How can you deduce information from other players' suggestions?",
          es: "¿Cómo puedes deducir información de las sugerencias de otros jugadores?",
          de: "Wie kannst du Informationen aus den Vorschlägen anderer Spieler ableiten?",
          nl: "Hoe kun je informatie afleiden uit de suggesties van andere spelers?"
        },
        options: [
          { en: "Watch who shows cards and who doesn't", es: "Observar quién muestra cartas y quién no", de: "Beobachten, wer Karten zeigt und wer nicht", nl: "Kijken wie kaarten toont en wie niet" },
          { en: "Count the dice rolls", es: "Contar las tiradas de dados", de: "Die Würfelwürfe zählen", nl: "De dobbelsteenworpen tellen" },
          { en: "Track room movements", es: "Rastrear movimientos de habitaciones", de: "Raumbewegungen verfolgen", nl: "Kamerbewegingen volgen" },
          { en: "Memorize weapon positions", es: "Memorizar posiciones de armas", de: "Waffenpositionen merken", nl: "Wapenposities onthouden" }
        ],
        correct: 0,
        explanation: {
          en: "By tracking which players show cards in response to suggestions (and which don't), you can deduce which cards they hold or don't hold, even without seeing the cards yourself.",
          es: "Al rastrear qué jugadores muestran cartas en respuesta a sugerencias (y cuáles no), puedes deducir qué cartas tienen o no tienen, incluso sin ver las cartas tú mismo.",
          de: "Indem du verfolgst, welche Spieler Karten als Antwort auf Vorschläge zeigen (und welche nicht), kannst du ableiten, welche Karten sie haben oder nicht haben, auch ohne die Karten selbst zu sehen.",
          nl: "Door bij te houden welke spelers kaarten tonen als reactie op suggesties (en welke niet), kun je afleiden welke kaarten ze wel of niet hebben, zelfs zonder de kaarten zelf te zien."
        }
      },
      {
        question: {
          en: "What color is Mrs. White's playing piece?",
          es: "¿De qué color es la pieza de juego de Mrs. White?",
          de: "Welche Farbe hat die Spielfigur von Mrs. White?",
          nl: "Welke kleur heeft het speelstuk van Mrs. White?"
        },
        options: [
          { en: "White", es: "Blanco", de: "Weiß", nl: "Wit" },
          { en: "Gray", es: "Gris", de: "Grau", nl: "Grijs" },
          { en: "Black", es: "Negro", de: "Schwarz", nl: "Zwart" },
          { en: "Silver", es: "Plateado", de: "Silber", nl: "Zilver" }
        ],
        correct: 0,
        explanation: {
          en: "Mrs. White's playing piece is white, matching her name. In some newer versions, this character has been replaced by other characters.",
          es: "La pieza de juego de Mrs. White es blanca, coincidiendo con su nombre. En algunas versiones más nuevas, este personaje ha sido reemplazado por otros.",
          de: "Die Spielfigur von Mrs. White ist weiß, passend zu ihrem Namen. In einigen neueren Versionen wurde diese Figur durch andere Charaktere ersetzt.",
          nl: "Het speelstuk van Mrs. White is wit, passend bij haar naam. In sommige nieuwere versies is dit personage vervangen door andere personages."
        }
      },
      {
        question: {
          en: "Which two rooms are NOT connected by corridors to any other rooms?",
          es: "¿Qué dos habitaciones NO están conectadas por corredores a ninguna otra habitación?",
          de: "Welche zwei Räume sind NICHT durch Korridore mit anderen Räumen verbunden?",
          nl: "Welke twee kamers zijn NIET verbonden door gangen met andere kamers?"
        },
        options: [
          { en: "None - all rooms have corridor access", es: "Ninguna - todas las habitaciones tienen acceso por corredor", de: "Keine - alle Räume haben Korridor-Zugang", nl: "Geen - alle kamers hebben gang toegang" },
          { en: "Study and Kitchen", es: "Estudio y Cocina", de: "Arbeitszimmer und Küche", nl: "Studeerkamer en Keuken" },
          { en: "Lounge and Conservatory", es: "Salón e Invernadero", de: "Salon und Wintergarten", nl: "Salon en Serre" },
          { en: "All rooms connect via corridors", es: "Todas las habitaciones conectan vía corredores", de: "Alle Räume verbinden über Korridore", nl: "Alle kamers verbinden via gangen" }
        ],
        correct: 0,
        explanation: {
          en: "All nine rooms in Cluedo are accessible via corridor doorways. The secret passages provide additional connections between corner rooms but don't replace corridor access.",
          es: "Las nueve habitaciones en Cluedo son accesibles a través de puertas de corredor. Los pasajes secretos proporcionan conexiones adicionales entre habitaciones de esquina pero no reemplazan el acceso por corredor.",
          de: "Alle neun Räume in Cluedo sind über Korridor-Türen zugänglich. Die Geheimgänge bieten zusätzliche Verbindungen zwischen Eckräumen, ersetzen aber nicht den Korridor-Zugang.",
          nl: "Alle negen kamers in Cluedo zijn toegankelijk via gang deuren. De geheime gangen bieden extra verbindingen tussen hoekkamers maar vervangen geen gangtoegang."
        }
      },
      {
        question: {
          en: "What is the minimum number of suggestions needed to solve the game?",
          es: "¿Cuál es el número mínimo de sugerencias necesarias para resolver el juego?",
          de: "Was ist die Mindestanzahl an Vorschlägen, die zum Lösen des Spiels benötigt werden?",
          nl: "Wat is het minimum aantal suggesties dat nodig is om het spel op te lossen?"
        },
        options: [
          { en: "It varies depending on luck", es: "Varía dependiendo de la suerte", de: "Es variiert je nach Glück", nl: "Het varieert afhankelijk van geluk" },
          { en: "Exactly 18 (one for each card)", es: "Exactamente 18 (una por cada carta)", de: "Genau 18 (eine für jede Karte)", nl: "Precies 18 (één voor elke kaart)" },
          { en: "Always 3 (one per category)", es: "Siempre 3 (una por categoría)", de: "Immer 3 (eine pro Kategorie)", nl: "Altijd 3 (één per categorie)" },
          { en: "Zero with perfect deduction", es: "Cero con deducción perfecta", de: "Null mit perfekter Deduktion", nl: "Nul met perfecte deductie" }
        ],
        correct: 0,
        explanation: {
          en: "The number varies based on which cards you're dealt, what other players reveal, and your deduction skills. With good luck and tracking, you might solve it in just a few suggestions.",
          es: "El número varía según qué cartas recibes, qué revelan otros jugadores y tus habilidades de deducción. Con buena suerte y seguimiento, podrías resolverlo en solo unas pocas sugerencias.",
          de: "Die Anzahl variiert je nachdem, welche Karten du erhältst, was andere Spieler offenbaren und deine Deduktionsfähigkeiten. Mit Glück und Verfolgung könntest du es in nur wenigen Vorschlägen lösen.",
          nl: "Het aantal varieert op basis van welke kaarten je krijgt, wat andere spelers onthullen en je deductievaardigheden. Met geluk en tracking kun je het oplossen in slechts een paar suggesties."
        }
      },
      {
        question: {
          en: "When should you consider making an accusation?",
          es: "¿Cuándo debes considerar hacer una acusación?",
          de: "Wann solltest du eine Anschuldigung in Betracht ziehen?",
          nl: "Wanneer moet je overwegen een beschuldiging te maken?"
        },
        options: [
          { en: "After your first suggestion", es: "Después de tu primera sugerencia", de: "Nach deinem ersten Vorschlag", nl: "Na je eerste suggestie" },
          { en: "When you've eliminated all but 3 cards", es: "Cuando has eliminado todas menos 3 cartas", de: "Wenn du alle außer 3 Karten eliminiert hast", nl: "Wanneer je alle behalve 3 kaarten hebt geëlimineerd" },
          { en: "On your last turn", es: "En tu último turno", de: "In deinem letzten Zug", nl: "In je laatste beurt" },
          { en: "After visiting all rooms", es: "Después de visitar todas las habitaciones", de: "Nach dem Besuch aller Räume", nl: "Na het bezoeken van alle kamers" }
        ],
        correct: 1,
        explanation: {
          en: "You should make an accusation when you've logically eliminated all cards except one from each category (suspect, weapon, room), leaving only the solution remaining.",
          es: "Debes hacer una acusación cuando hayas eliminado lógicamente todas las cartas excepto una de cada categoría (sospechoso, arma, habitación), dejando solo la solución.",
          de: "Du solltest eine Anschuldigung machen, wenn du logisch alle Karten außer einer aus jeder Kategorie (Verdächtiger, Waffe, Raum) eliminiert hast, sodass nur die Lösung übrig bleibt.",
          nl: "Je moet een beschuldiging maken wanneer je logisch alle kaarten behalve één uit elke categorie (verdachte, wapen, kamer) hebt geëlimineerd, waardoor alleen de oplossing overblijft."
        }
      },
      {
        question: {
          en: "What color is Mr. Green's playing piece?",
          es: "¿De qué color es la pieza de juego de Mr. Green?",
          de: "Welche Farbe hat die Spielfigur von Mr. Green?",
          nl: "Welke kleur heeft het speelstuk van Mr. Green?"
        },
        options: [
          { en: "Green", es: "Verde", de: "Grün", nl: "Groen" },
          { en: "Blue", es: "Azul", de: "Blau", nl: "Blauw" },
          { en: "Brown", es: "Marrón", de: "Braun", nl: "Bruin" },
          { en: "Orange", es: "Naranja", de: "Orange", nl: "Oranje" }
        ],
        correct: 0,
        explanation: {
          en: "Mr. Green's playing piece is green, matching his name. He is one of the six original suspects in classic Cluedo.",
          es: "La pieza de juego de Mr. Green es verde, coincidiendo con su nombre. Es uno de los seis sospechosos originales en el Cluedo clásico.",
          de: "Die Spielfigur von Mr. Green ist grün, passend zu seinem Namen. Er ist einer der sechs ursprünglichen Verdächtigen im klassischen Cluedo.",
          nl: "Het speelstuk van Mr. Green is groen, passend bij zijn naam. Hij is een van de zes oorspronkelijke verdachten in klassiek Cluedo."
        }
      },
      {
        question: {
          en: "Why is it useful to track which player shows cards to other players?",
          es: "¿Por qué es útil rastrear qué jugador muestra cartas a otros jugadores?",
          de: "Warum ist es nützlich zu verfolgen, welcher Spieler anderen Spielern Karten zeigt?",
          nl: "Waarom is het nuttig om bij te houden welke speler kaarten toont aan andere spelers?"
        },
        options: [
          { en: "To know who's winning", es: "Para saber quién está ganando", de: "Um zu wissen, wer gewinnt", nl: "Om te weten wie aan het winnen is" },
          { en: "To deduce which cards they hold", es: "Para deducir qué cartas tienen", de: "Um abzuleiten, welche Karten sie haben", nl: "Om af te leiden welke kaarten ze hebben" },
          { en: "To calculate dice probabilities", es: "Para calcular probabilidades de dados", de: "Um Würfelwahrscheinlichkeiten zu berechnen", nl: "Om dobbelsteenkansen te berekenen" },
          { en: "It's not useful", es: "No es útil", de: "Es ist nicht nützlich", nl: "Het is niet nuttig" }
        ],
        correct: 1,
        explanation: {
          en: "Tracking who shows cards helps you deduce which cards each player holds, allowing you to eliminate possibilities even for suggestions you didn't make yourself.",
          es: "Rastrear quién muestra cartas te ayuda a deducir qué cartas tiene cada jugador, permitiéndote eliminar posibilidades incluso para sugerencias que no hiciste tú mismo.",
          de: "Das Verfolgen, wer Karten zeigt, hilft dir abzuleiten, welche Karten jeder Spieler hat, was dir erlaubt, Möglichkeiten zu eliminieren, selbst für Vorschläge, die du nicht selbst gemacht hast.",
          nl: "Bijhouden wie kaarten toont helpt je af te leiden welke kaarten elke speler heeft, waardoor je mogelijkheden kunt elimineren, zelfs voor suggesties die je zelf niet deed."
        }
      },
      {
        question: {
          en: "What is the typical time length of a Cluedo game?",
          es: "¿Cuál es la duración típica de un juego de Cluedo?",
          de: "Was ist die typische Spieldauer von Cluedo?",
          nl: "Wat is de typische speelduur van een Cluedo-spel?"
        },
        options: [
          { en: "15-30 minutes", es: "15-30 minutos", de: "15-30 Minuten", nl: "15-30 minuten" },
          { en: "30-60 minutes", es: "30-60 minutos", de: "30-60 Minuten", nl: "30-60 minuten" },
          { en: "1-2 hours", es: "1-2 horas", de: "1-2 Stunden", nl: "1-2 uur" },
          { en: "2-3 hours", es: "2-3 horas", de: "2-3 Stunden", nl: "2-3 uur" }
        ],
        correct: 1,
        explanation: {
          en: "A typical game of Cluedo lasts 30-60 minutes, though experienced players familiar with deduction strategies may finish faster, while beginners might take longer.",
          es: "Un juego típico de Cluedo dura 30-60 minutos, aunque jugadores experimentados familiarizados con estrategias de deducción pueden terminar más rápido, mientras que principiantes pueden tardar más.",
          de: "Ein typisches Cluedo-Spiel dauert 30-60 Minuten, obwohl erfahrene Spieler, die mit Deduktionsstrategien vertraut sind, schneller fertig werden können, während Anfänger länger brauchen könnten.",
          nl: "Een typisch Cluedo-spel duurt 30-60 minuten, hoewel ervaren spelers vertrouwd met deductiestrategieën sneller kunnen eindigen, terwijl beginners langer kunnen doen."
        }
      },
      {
        question: {
          en: "Which room is alphabetically last in English?",
          es: "¿Qué habitación es alfabéticamente la última en inglés?",
          de: "Welcher Raum ist im Englischen alphabetisch der letzte?",
          nl: "Welke kamer komt alfabetisch als laatste in het Engels?"
        },
        options: [
          { en: "Study", es: "Estudio", de: "Arbeitszimmer", nl: "Studeerkamer" },
          { en: "Library", es: "Biblioteca", de: "Bibliothek", nl: "Bibliotheek" },
          { en: "Lounge", es: "Salón", de: "Salon", nl: "Salon" },
          { en: "Kitchen", es: "Cocina", de: "Küche", nl: "Keuken" }
        ],
        correct: 0,
        explanation: {
          en: "The Study is alphabetically last among the nine rooms in English: Ballroom, Billiard Room, Conservatory, Dining Room, Hall, Kitchen, Library, Lounge, Study.",
          es: "El Estudio es alfabéticamente la última entre las nueve habitaciones en inglés: Ballroom, Billiard Room, Conservatory, Dining Room, Hall, Kitchen, Library, Lounge, Study.",
          de: "Das Arbeitszimmer (Study) ist alphabetisch der letzte unter den neun Räumen im Englischen: Ballroom, Billiard Room, Conservatory, Dining Room, Hall, Kitchen, Library, Lounge, Study.",
          nl: "De Studeerkamer (Study) komt alfabetisch als laatste onder de negen kamers in het Engels: Ballroom, Billiard Room, Conservatory, Dining Room, Hall, Kitchen, Library, Lounge, Study."
        }
      },
      {
        question: {
          en: "What advantage does the first player (Miss Scarlett) have?",
          es: "¿Qué ventaja tiene el primer jugador (Miss Scarlett)?",
          de: "Welchen Vorteil hat der erste Spieler (Miss Scarlett)?",
          nl: "Welk voordeel heeft de eerste speler (Miss Scarlett)?"
        },
        options: [
          { en: "Extra cards", es: "Cartas extra", de: "Zusätzliche Karten", nl: "Extra kaarten" },
          { en: "First chance to make suggestions", es: "Primera oportunidad de hacer sugerencias", de: "Erste Chance, Vorschläge zu machen", nl: "Eerste kans om suggesties te doen" },
          { en: "Starting in a room", es: "Comenzar en una habitación", de: "In einem Raum beginnen", nl: "Beginnen in een kamer" },
          { en: "Seeing solution cards first", es: "Ver cartas de solución primero", de: "Lösungskarten zuerst sehen", nl: "Oplossingskaarten eerst zien" }
        ],
        correct: 1,
        explanation: {
          en: "Miss Scarlett goes first, giving her the first opportunity to make suggestions and start gathering information before other players, which can be a slight strategic advantage.",
          es: "Miss Scarlett va primera, dándole la primera oportunidad de hacer sugerencias y comenzar a recopilar información antes que otros jugadores, lo cual puede ser una ligera ventaja estratégica.",
          de: "Miss Scarlett beginnt zuerst und hat somit die erste Gelegenheit, Vorschläge zu machen und Informationen zu sammeln, bevor es andere Spieler tun, was ein leichter strategischer Vorteil sein kann.",
          nl: "Miss Scarlett gaat als eerste, wat haar de eerste kans geeft om suggesties te doen en informatie te verzamelen voordat andere spelers dat doen, wat een klein strategisch voordeel kan zijn."
        }
      },
      {
        question: {
          en: "How many cards should be set aside face-down if the cards don't divide evenly?",
          es: "¿Cuántas cartas deben apartarse boca abajo si las cartas no se dividen equitativamente?",
          de: "Wie viele Karten sollten verdeckt beiseite gelegt werden, wenn sich die Karten nicht gleichmäßig aufteilen?",
          nl: "Hoeveel kaarten moeten gedekt worden opzij gelegd als de kaarten niet gelijk verdelen?"
        },
        options: [
          { en: "All extra cards", es: "Todas las cartas extra", de: "Alle zusätzlichen Karten", nl: "Alle extra kaarten" },
          { en: "None - deal unevenly", es: "Ninguna - repartir de forma desigual", de: "Keine - ungleich austeilen", nl: "Geen - ongelijk delen" },
          { en: "Half the extra cards", es: "La mitad de las cartas extra", de: "Die Hälfte der zusätzlichen Karten", nl: "De helft van de extra kaarten" },
          { en: "It varies by house rules", es: "Varía según reglas caseras", de: "Es variiert nach Hausregeln", nl: "Het varieert per huisregels" }
        },
        correct: 3,
        explanation: {
          en: "Different versions and house rules handle uneven distribution differently. Some deal all cards (some players get one extra), while others set extras aside face-down for all to see later.",
          es: "Diferentes versiones y reglas caseras manejan la distribución desigual de manera diferente. Algunas reparten todas las cartas (algunos jugadores obtienen una extra), mientras que otras apartan las extras boca abajo para que todos las vean después.",
          de: "Verschiedene Versionen und Hausregeln handhaben ungleiche Verteilung unterschiedlich. Einige verteilen alle Karten (einige Spieler bekommen eine zusätzliche), während andere zusätzliche verdeckt beiseite legen, damit alle sie später sehen.",
          nl: "Verschillende versies en huisregels behandelen ongelijke verdeling anders. Sommige delen alle kaarten (sommige spelers krijgen er één extra), terwijl anderen extra's gedekt opzij leggen zodat iedereen ze later kan zien."
        }
      },
      {
        question: {
          en: "What is a common intermediate strategy for suggestions?",
          es: "¿Cuál es una estrategia intermedia común para sugerencias?",
          de: "Was ist eine gängige mittlere Strategie für Vorschläge?",
          nl: "Wat is een veelvoorkomende gemiddelde strategie voor suggesties?"
        },
        options: [
          { en: "Always suggest your own cards", es: "Siempre sugerir tus propias cartas", de: "Immer die eigenen Karten vorschlagen", nl: "Altijd je eigen kaarten suggereren" },
          { en: "Suggest 1 known card + 2 unknowns", es: "Sugerir 1 carta conocida + 2 desconocidas", de: "1 bekannte Karte + 2 unbekannte vorschlagen", nl: "1 bekende kaart + 2 onbekenden suggereren" },
          { en: "Never repeat suggestions", es: "Nunca repetir sugerencias", de: "Vorschläge nie wiederholen", nl: "Nooit suggesties herhalen" },
          { en: "Only suggest in corner rooms", es: "Solo sugerir en habitaciones de esquina", de: "Nur in Eckräumen vorschlagen", nl: "Alleen suggereren in hoekkamers" }
        ],
        correct: 1,
        explanation: {
          en: "A good strategy is to suggest one card you know (either yours or eliminated) plus two unknowns. This ensures any card shown must be one of the two unknowns, giving you certain information.",
          es: "Una buena estrategia es sugerir una carta que conoces (tuya o eliminada) más dos desconocidas. Esto asegura que cualquier carta mostrada debe ser una de las dos desconocidas, dándote información segura.",
          de: "Eine gute Strategie ist, eine Karte vorzuschlagen, die du kennst (entweder deine oder eliminierte) plus zwei unbekannte. Dies stellt sicher, dass jede gezeigte Karte eine der beiden unbekannten sein muss, was dir sichere Informationen gibt.",
          nl: "Een goede strategie is één kaart suggereren die je kent (van jou of geëlimineerd) plus twee onbekenden. Dit zorgt ervoor dat elke getoonde kaart één van de twee onbekenden moet zijn, wat je zekere informatie geeft."
        }
      },
      {
        question: {
          en: "What color is Mrs. Peacock's playing piece?",
          es: "¿De qué color es la pieza de juego de Mrs. Peacock?",
          de: "Welche Farbe hat die Spielfigur von Mrs. Peacock?",
          nl: "Welke kleur heeft het speelstuk van Mrs. Peacock?"
        },
        options: [
          { en: "Green", es: "Verde", de: "Grün", nl: "Groen" },
          { en: "Blue", es: "Azul", de: "Blau", nl: "Blauw" },
          { en: "Teal/Peacock blue", es: "Azul verdoso/Azul pavo real", de: "Türkis/Pfaublau", nl: "Groenblauw/Pauwblauw" },
          { en: "Purple", es: "Morado", de: "Lila", nl: "Paars" }
        ],
        correct: 2,
        explanation: {
          en: "Mrs. Peacock's playing piece is typically teal or peacock blue, a blue-green color that references the colorful plumage of peacock birds.",
          es: "La pieza de juego de Mrs. Peacock es típicamente azul verdoso o azul pavo real, un color azul-verde que hace referencia al colorido plumaje de los pavos reales.",
          de: "Die Spielfigur von Mrs. Peacock ist typischerweise türkis oder pfaublau, eine blau-grüne Farbe, die auf das farbenfrohe Gefieder von Pfauen verweist.",
          nl: "Het speelstuk van Mrs. Peacock is meestal groenblauw of pauwblauw, een blauwgroene kleur die verwijst naar de kleurrijke verentooi van pauwen."
        }
      },
      {
        question: {
          en: "How should you prioritize which rooms to visit first?",
          es: "¿Cómo debes priorizar qué habitaciones visitar primero?",
          de: "Wie solltest du priorisieren, welche Räume du zuerst besuchst?",
          nl: "Hoe moet je prioriteren welke kamers je eerst bezoekt?"
        },
        options: [
          { en: "Rooms with most doorways", es: "Habitaciones con más puertas", de: "Räume mit den meisten Türen", nl: "Kamers met de meeste deuren" },
          { en: "Corner rooms with secret passages", es: "Habitaciones de esquina con pasajes secretos", de: "Eckräume mit Geheimgängen", nl: "Hoekkamers met geheime gangen" },
          { en: "Closest rooms to your starting position", es: "Habitaciones más cercanas a tu posición inicial", de: "Räume am nächsten zu deiner Startposition", nl: "Kamers het dichtst bij je startpositie" },
          { en: "All strategies are equally valid", es: "Todas las estrategias son igualmente válidas", de: "Alle Strategien sind gleich gültig", nl: "Alle strategieën zijn even geldig" }
        },
        correct: 3,
        explanation: {
          en: "Room priority depends on your strategy, starting position, and which cards you need to investigate. Corner rooms offer secret passages, but central rooms may be faster to reach initially.",
          es: "La prioridad de habitaciones depende de tu estrategia, posición inicial y qué cartas necesitas investigar. Las habitaciones de esquina ofrecen pasajes secretos, pero las habitaciones centrales pueden ser más rápidas de alcanzar inicialmente.",
          de: "Raumpriorität hängt von deiner Strategie, Startposition und welchen Karten du untersuchen musst, ab. Eckräume bieten Geheimgänge, aber zentrale Räume können anfangs schneller zu erreichen sein.",
          nl: "Kamerprioriteit hangt af van je strategie, startpositie en welke kaarten je moet onderzoeken. Hoekkamers bieden geheime gangen, maar centrale kamers kunnen aanvankelijk sneller te bereiken zijn."
        }
      },
      {
        question: {
          en: "What happens if you check the solution envelope during the game?",
          es: "¿Qué pasa si revisas el sobre de la solución durante el juego?",
          de: "Was passiert, wenn du den Lösungsumschlag während des Spiels überprüfst?",
          nl: "Wat gebeurt er als je de oplossing envelop controleert tijdens het spel?"
        },
        options: [
          { en: "It's allowed to verify your accusation", es: "Está permitido verificar tu acusación", de: "Es ist erlaubt, deine Anschuldigung zu verifizieren", nl: "Het is toegestaan om je beschuldiging te verifiëren" },
          { en: "You're immediately eliminated", es: "Eres inmediatamente eliminado", de: "Du wirst sofort eliminiert", nl: "Je wordt onmiddellijk geëlimineerd" },
          { en: "Only when making an accusation", es: "Solo al hacer una acusación", de: "Nur beim Machen einer Anschuldigung", nl: "Alleen bij het maken van een beschuldiging" },
          { en: "All players must agree first", es: "Todos los jugadores deben estar de acuerdo primero", de: "Alle Spieler müssen zuerst zustimmen", nl: "Alle spelers moeten eerst akkoord gaan" }
        ],
        correct: 2,
        explanation: {
          en: "You only check the solution envelope when making an official accusation. Looking at it at any other time is cheating and ruins the game for everyone.",
          es: "Solo revisas el sobre de la solución al hacer una acusación oficial. Mirarlo en cualquier otro momento es hacer trampa y arruina el juego para todos.",
          de: "Du überprüfst den Lösungsumschlag nur, wenn du eine offizielle Anschuldigung machst. Ihn zu einem anderen Zeitpunkt anzusehen ist Betrug und ruiniert das Spiel für alle.",
          nl: "Je controleert de oplossing envelop alleen bij het maken van een officiële beschuldiging. Ernaar kijken op een ander moment is vals spelen en verpest het spel voor iedereen."
        }
      },
      {
        question: {
          en: "Why is the Library considered a moderately accessible room?",
          es: "¿Por qué se considera la Biblioteca una habitación moderadamente accesible?",
          de: "Warum wird die Bibliothek als mäßig zugänglicher Raum angesehen?",
          nl: "Waarom wordt de Bibliotheek beschouwd als een redelijk toegankelijke kamer?"
        },
        options: [
          { en: "It has two doorways", es: "Tiene dos puertas", de: "Sie hat zwei Türen", nl: "Het heeft twee deuren" },
          { en: "It's in the center", es: "Está en el centro", de: "Sie ist in der Mitte", nl: "Het ligt in het centrum" },
          { en: "It has a secret passage", es: "Tiene un pasaje secreto", de: "Sie hat einen Geheimgang", nl: "Het heeft een geheime gang" },
          { en: "It connects to all rooms", es: "Conecta con todas las habitaciones", de: "Sie verbindet sich mit allen Räumen", nl: "Het verbindt met alle kamers" }
        ],
        correct: 0,
        explanation: {
          en: "The Library has two doorways, making it more accessible than single-doorway rooms like the Lounge or Conservatory, but less accessible than the Ballroom's four doorways.",
          es: "La Biblioteca tiene dos puertas, haciéndola más accesible que habitaciones de una puerta como el Salón o Invernadero, pero menos accesible que las cuatro puertas del Salón de baile.",
          de: "Die Bibliothek hat zwei Türen, was sie zugänglicher macht als Räume mit einer Tür wie der Salon oder Wintergarten, aber weniger zugänglich als die vier Türen des Ballsaals.",
          nl: "De Bibliotheek heeft twee deuren, waardoor het toegankelijker is dan kamers met één deur zoals de Salon of Serre, maar minder toegankelijk dan de vier deuren van de Balzaal."
        }
      },
      {
        question: {
          en: "What is the best response when another player makes a suggestion you know is impossible?",
          es: "¿Cuál es la mejor respuesta cuando otro jugador hace una sugerencia que sabes que es imposible?",
          de: "Was ist die beste Antwort, wenn ein anderer Spieler einen Vorschlag macht, von dem du weißt, dass er unmöglich ist?",
          nl: "Wat is de beste reactie wanneer een andere speler een suggestie doet waarvan je weet dat het onmogelijk is?"
        },
        options: [
          { en: "Immediately tell them it's wrong", es: "Inmediatamente decirles que está mal", de: "Ihnen sofort sagen, dass es falsch ist", nl: "Onmiddellijk zeggen dat het fout is" },
          { en: "Say nothing and let the game proceed", es: "No decir nada y dejar que el juego continúe", de: "Nichts sagen und das Spiel fortsetzen lassen", nl: "Niets zeggen en het spel laten doorgaan" },
          { en: "Show them the solution", es: "Mostrarles la solución", de: "Ihnen die Lösung zeigen", nl: "Ze de oplossing tonen" },
          { en: "Ask them to reconsider", es: "Pedirles que reconsideren", de: "Sie bitten, es zu überdenken", nl: "Ze vragen het te heroverwegen" }
        ],
        correct: 1,
        explanation: {
          en: "Even if you know a suggestion is impossible based on your cards, you should follow normal game rules. Only show a card if required, and let them discover the truth through gameplay.",
          es: "Incluso si sabes que una sugerencia es imposible basándote en tus cartas, debes seguir las reglas normales del juego. Solo muestra una carta si es requerido, y déjalos descubrir la verdad a través del juego.",
          de: "Selbst wenn du weißt, dass ein Vorschlag unmöglich ist basierend auf deinen Karten, solltest du den normalen Spielregeln folgen. Zeige nur eine Karte, wenn erforderlich, und lass sie die Wahrheit durch das Spiel entdecken.",
          nl: "Zelfs als je weet dat een suggestie onmogelijk is op basis van je kaarten, moet je de normale spelregels volgen. Toon alleen een kaart als vereist, en laat ze de waarheid door gameplay ontdekken."
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
