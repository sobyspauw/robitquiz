// Quiz Template - Level 3: Board Games - Cluedo
(function() {
  const level3 = {
    name: {
      en: "Cluedo - Advanced",
      es: "Cluedo - Avanzado",
      de: "Cluedo - Erweitert",
      nl: "Cluedo - Gevorderd"
    },
    questions: [
      {
        question: {
          en: "What is the most effective note-taking system for Cluedo?",
          es: "¿Cuál es el sistema más efectivo de toma de notas para Cluedo?",
          de: "Was ist das effektivste Notizsystem für Cluedo?",
          nl: "Wat is het meest effectieve systeem voor het maken van notities in Cluedo?"
        },
        options: [
          { en: "List of eliminated cards", es: "Lista de cartas eliminadas", de: "Liste eliminierter Karten", nl: "Lijst van geëlimineerde kaarten" },
          { en: "Player-card matrix with checkmarks and X's", es: "Matriz jugador-carta con marcas y X", de: "Spieler-Karten-Matrix mit Häkchen und X", nl: "Speler-kaart matrix met vinkjes en kruizen" },
          { en: "Memory only", es: "Solo memoria", de: "Nur Gedächtnis", nl: "Alleen geheugen" },
          { en: "Random notes", es: "Notas aleatorias", de: "Zufällige Notizen", nl: "Willekeurige notities" }
        ],
        correct: 1,
        explanation: {
          en: "A player-card matrix allows you to mark which cards each player has shown, track who can't have which cards, and use process of elimination to deduce card locations systematically.",
          es: "Una matriz jugador-carta te permite marcar qué cartas ha mostrado cada jugador, rastrear quién no puede tener qué cartas, y usar el proceso de eliminación para deducir sistemáticamente la ubicación de las cartas.",
          de: "Eine Spieler-Karten-Matrix ermöglicht es dir zu markieren, welche Karten jeder Spieler gezeigt hat, zu verfolgen, wer welche Karten nicht haben kann, und durch Eliminierung systematisch Kartenpositionen zu deduzieren.",
          nl: "Een speler-kaart matrix stelt je in staat te markeren welke kaarten elke speler heeft getoond, bij te houden wie welke kaarten niet kan hebben, en door eliminatie systematisch kaartlocaties te deduceren."
        }
      },
      {
        question: {
          en: "If Player A shows you a card when Player B makes a suggestion, what can you conclude about Player A?",
          es: "Si el Jugador A te muestra una carta cuando el Jugador B hace una sugerencia, ¿qué puedes concluir sobre el Jugador A?",
          de: "Wenn Spieler A dir eine Karte zeigt, wenn Spieler B einen Vorschlag macht, was kannst du über Spieler A schließen?",
          nl: "Als Speler A je een kaart toont wanneer Speler B een suggestie doet, wat kun je dan concluderen over Speler A?"
        },
        options: [
          { en: "Player A has at least one card from the suggestion", es: "Jugador A tiene al menos una carta de la sugerencia", de: "Spieler A hat mindestens eine Karte aus dem Vorschlag", nl: "Speler A heeft minstens één kaart uit de suggestie" },
          { en: "Player A has all cards from the suggestion", es: "Jugador A tiene todas las cartas de la sugerencia", de: "Spieler A hat alle Karten aus dem Vorschlag", nl: "Speler A heeft alle kaarten uit de suggestie" },
          { en: "Player A is the murderer", es: "Jugador A es el asesino", de: "Spieler A ist der Mörder", nl: "Speler A is de moordenaar" },
          { en: "Nothing useful", es: "Nada útil", de: "Nichts Nützliches", nl: "Niets nuttigs" }
        ],
        correct: 0,
        explanation: {
          en: "When a player shows a card in response to a suggestion, you only know they have at least one of the three suggested cards. They may have multiple cards from that suggestion.",
          es: "Cuando un jugador muestra una carta en respuesta a una sugerencia, solo sabes que tiene al menos una de las tres cartas sugeridas. Pueden tener múltiples cartas de esa sugerencia.",
          de: "Wenn ein Spieler eine Karte als Antwort auf einen Vorschlag zeigt, weißt du nur, dass er mindestens eine der drei vorgeschlagenen Karten hat. Er kann mehrere Karten aus diesem Vorschlag haben.",
          nl: "Wanneer een speler een kaart toont als reactie op een suggestie, weet je alleen dat ze ten minste één van de drie gesuggereerde kaarten hebben. Ze kunnen meerdere kaarten uit die suggestie hebben."
        }
      },
      {
        question: {
          en: "What is the probability that a specific card is in the envelope in a 3-player game if you don't hold it?",
          es: "¿Cuál es la probabilidad de que una carta específica esté en el sobre en un juego de 3 jugadores si no la tienes?",
          de: "Wie hoch ist die Wahrscheinlichkeit, dass eine bestimmte Karte im Umschlag ist in einem 3-Spieler-Spiel, wenn du sie nicht hast?",
          nl: "Wat is de kans dat een specifieke kaart in de envelop zit in een spel met 3 spelers als je hem niet hebt?"
        },
        options: [
          { en: "1/3", es: "1/3", de: "1/3", nl: "1/3" },
          { en: "1/6", es: "1/6", de: "1/6", nl: "1/6" },
          { en: "1/7", es: "1/7", de: "1/7", nl: "1/7" },
          { en: "1/18", es: "1/18", de: "1/18", nl: "1/18" }
        ],
        correct: 2,
        explanation: {
          en: "If you don't hold a card in a 3-player game, there are 18 cards dealt to players and 3 in the envelope (21 total minus your 6 cards minus the 3 solution cards). The probability it's in the envelope is 3/(18+3) = 3/21 = 1/7.",
          es: "Si no tienes una carta en un juego de 3 jugadores, hay 18 cartas repartidas a jugadores y 3 en el sobre (21 total menos tus 6 cartas menos las 3 cartas de solución). La probabilidad de que esté en el sobre es 3/(18+3) = 3/21 = 1/7.",
          de: "Wenn du eine Karte in einem 3-Spieler-Spiel nicht hast, gibt es 18 Karten, die an Spieler ausgeteilt wurden, und 3 im Umschlag (21 gesamt minus deine 6 Karten minus die 3 Lösungskarten). Die Wahrscheinlichkeit, dass sie im Umschlag ist, beträgt 3/(18+3) = 3/21 = 1/7.",
          nl: "Als je een kaart niet hebt in een spel met 3 spelers, zijn er 18 kaarten uitgedeeld aan spelers en 3 in de envelop (21 totaal minus jouw 6 kaarten minus de 3 oplossingskaarten). De kans dat het in de envelop zit is 3/(18+3) = 3/21 = 1/7."
        }
      },
      {
        question: {
          en: "When should you make your first suggestion in a game?",
          es: "¿Cuándo debes hacer tu primera sugerencia en un juego?",
          de: "Wann solltest du deinen ersten Vorschlag in einem Spiel machen?",
          nl: "Wanneer moet je je eerste suggestie in een spel doen?"
        },
        options: [
          { en: "As soon as you enter any room", es: "Tan pronto como entres a cualquier habitación", de: "Sobald du einen Raum betrittst", nl: "Zodra je een kamer binnenkomt" },
          { en: "After gathering more information", es: "Después de recopilar más información", de: "Nach dem Sammeln von mehr Informationen", nl: "Na het verzamelen van meer informatie" },
          { en: "Only when you're certain", es: "Solo cuando estés seguro", de: "Nur wenn du sicher bist", nl: "Alleen wanneer je zeker bent" },
          { en: "In the last turn", es: "En el último turno", de: "Im letzten Zug", nl: "In de laatste beurt" }
        ],
        correct: 0,
        explanation: {
          en: "You should make suggestions as frequently as possible to gather information quickly. Each suggestion gives you valuable data about which cards players hold, accelerating your deduction process.",
          es: "Debes hacer sugerencias con la mayor frecuencia posible para recopilar información rápidamente. Cada sugerencia te da datos valiosos sobre qué cartas tienen los jugadores, acelerando tu proceso de deducción.",
          de: "Du solltest so häufig wie möglich Vorschläge machen, um schnell Informationen zu sammeln. Jeder Vorschlag gibt dir wertvolle Daten darüber, welche Karten Spieler haben, und beschleunigt deinen Deduktionsprozess.",
          nl: "Je moet zo vaak mogelijk suggesties doen om snel informatie te verzamelen. Elke suggestie geeft je waardevolle gegevens over welke kaarten spelers hebben, wat je deductieproces versnelt."
        }
      },
      {
        question: {
          en: "What is 'card counting' in Cluedo?",
          es: "¿Qué es el 'conteo de cartas' en Cluedo?",
          de: "Was ist 'Kartenzählen' in Cluedo?",
          nl: "Wat is 'kaarten tellen' in Cluedo?"
        },
        options: [
          { en: "Counting your own cards", es: "Contar tus propias cartas", de: "Deine eigenen Karten zählen", nl: "Je eigen kaarten tellen" },
          { en: "Tracking how many cards each player has shown", es: "Rastrear cuántas cartas ha mostrado cada jugador", de: "Verfolgen, wie viele Karten jeder Spieler gezeigt hat", nl: "Bijhouden hoeveel kaarten elke speler heeft getoond" },
          { en: "Counting rooms on the board", es: "Contar habitaciones en el tablero", de: "Räume auf dem Brett zählen", nl: "Kamers op het bord tellen" },
          { en: "Adding up dice rolls", es: "Sumar tiradas de dados", de: "Würfelwürfe addieren", nl: "Dobbelsteenworp optellen" }
        ],
        correct: 1,
        explanation: {
          en: "Card counting means tracking which specific cards each player has revealed and using this information to narrow down possibilities. If a player shows different cards repeatedly, you gain more information about their hand.",
          es: "El conteo de cartas significa rastrear qué cartas específicas ha revelado cada jugador y usar esta información para reducir posibilidades. Si un jugador muestra diferentes cartas repetidamente, obtienes más información sobre su mano.",
          de: "Kartenzählen bedeutet, zu verfolgen, welche spezifischen Karten jeder Spieler gezeigt hat, und diese Informationen zu nutzen, um Möglichkeiten einzugrenzen. Wenn ein Spieler wiederholt verschiedene Karten zeigt, erhältst du mehr Informationen über seine Hand.",
          nl: "Kaarten tellen betekent bijhouden welke specifieke kaarten elke speler heeft onthuld en deze informatie gebruiken om mogelijkheden te beperken. Als een speler herhaaldelijk verschillende kaarten toont, krijg je meer informatie over hun hand."
        }
      },
      {
        question: {
          en: "Why is it advantageous to suggest the room you're currently in?",
          es: "¿Por qué es ventajoso sugerir la habitación en la que estás actualmente?",
          de: "Warum ist es vorteilhaft, den Raum vorzuschlagen, in dem du dich befindest?",
          nl: "Waarom is het voordelig om de kamer voor te stellen waarin je je momenteel bevindt?"
        },
        options: [
          { en: "It's required by the rules", es: "Es requerido por las reglas", de: "Es ist durch die Regeln erforderlich", nl: "Het is vereist door de regels" },
          { en: "You can make a suggestion without wasting movement", es: "Puedes hacer una sugerencia sin desperdiciar movimiento", de: "Du kannst einen Vorschlag machen, ohne Bewegung zu verschwenden", nl: "Je kunt een suggestie doen zonder beweging te verspillen" },
          { en: "You get bonus points", es: "Obtienes puntos bonus", de: "Du bekommst Bonuspunkte", nl: "Je krijgt bonuspunten" },
          { en: "Other players can't respond", es: "Otros jugadores no pueden responder", de: "Andere Spieler können nicht antworten", nl: "Andere spelers kunnen niet reageren" }
        ],
        correct: 1,
        explanation: {
          en: "Suggesting the room you're in is mandatory, but it's advantageous because you've already used movement to get there. This maximizes information gathering per turn without wasting moves.",
          es: "Sugerir la habitación en la que estás es obligatorio, pero es ventajoso porque ya has usado movimiento para llegar allí. Esto maximiza la recopilación de información por turno sin desperdiciar movimientos.",
          de: "Den Raum vorzuschlagen, in dem du dich befindest, ist obligatorisch, aber es ist vorteilhaft, weil du bereits Bewegung verwendet hast, um dorthin zu gelangen. Dies maximiert die Informationsgewinnung pro Zug, ohne Bewegungen zu verschwenden.",
          nl: "De kamer voorstellen waarin je bent is verplicht, maar het is voordelig omdat je al beweging hebt gebruikt om daar te komen. Dit maximaliseert het verzamelen van informatie per beurt zonder zetten te verspillen."
        }
      },
      {
        question: {
          en: "What does it mean when all players pass on your suggestion?",
          es: "¿Qué significa cuando todos los jugadores pasan tu sugerencia?",
          de: "Was bedeutet es, wenn alle Spieler bei deinem Vorschlag passen?",
          nl: "Wat betekent het wanneer alle spelers je suggestie doorgevent?"
        },
        options: [
          { en: "Your suggestion is likely incorrect", es: "Tu sugerencia probablemente es incorrecta", de: "Dein Vorschlag ist wahrscheinlich falsch", nl: "Je suggestie is waarschijnlijk onjuist" },
          { en: "Your suggestion is likely the solution", es: "Tu sugerencia probablemente es la solución", de: "Dein Vorschlag ist wahrscheinlich die Lösung", nl: "Je suggestie is waarschijnlijk de oplossing" },
          { en: "You must roll again", es: "Debes tirar de nuevo", de: "Du musst erneut würfeln", nl: "Je moet opnieuw gooien" },
          { en: "The game ends", es: "El juego termina", de: "Das Spiel endet", nl: "Het spel eindigt" }
        ],
        correct: 1,
        explanation: {
          en: "When all players pass without showing a card, it means none of them hold any of the three suggested cards. This strongly indicates those three cards are in the solution envelope.",
          es: "Cuando todos los jugadores pasan sin mostrar una carta, significa que ninguno tiene ninguna de las tres cartas sugeridas. Esto indica fuertemente que esas tres cartas están en el sobre de solución.",
          de: "Wenn alle Spieler passen, ohne eine Karte zu zeigen, bedeutet das, dass keiner von ihnen eine der drei vorgeschlagenen Karten hat. Dies deutet stark darauf hin, dass diese drei Karten im Lösungsumschlag sind.",
          nl: "Wanneer alle spelers doorgeven zonder een kaart te tonen, betekent dit dat geen van hen een van de drie gesuggereerde kaarten heeft. Dit wijst er sterk op dat die drie kaarten in de oplossings envelop zitten."
        }
      },
      {
        question: {
          en: "How many total suggestions occur in a typical 4-player game before someone solves it?",
          es: "¿Cuántas sugerencias totales ocurren en un juego típico de 4 jugadores antes de que alguien lo resuelva?",
          de: "Wie viele Vorschläge insgesamt gibt es in einem typischen 4-Spieler-Spiel, bevor jemand es löst?",
          nl: "Hoeveel totale suggesties komen er voor in een typisch spel met 4 spelers voordat iemand het oplost?"
        },
        options: [
          { en: "5-10", es: "5-10", de: "5-10", nl: "5-10" },
          { en: "15-25", es: "15-25", de: "15-25", nl: "15-25" },
          { en: "30-40", es: "30-40", de: "30-40", nl: "30-40" },
          { en: "50-60", es: "50-60", de: "50-60", nl: "50-60" }
        ],
        correct: 1,
        explanation: {
          en: "A typical 4-player game involves 15-25 total suggestions before someone has enough information to solve the mystery. This can vary based on player skill and luck with card distribution.",
          es: "Un juego típico de 4 jugadores involucra 15-25 sugerencias totales antes de que alguien tenga suficiente información para resolver el misterio. Esto puede variar según la habilidad del jugador y la suerte con la distribución de cartas.",
          de: "Ein typisches 4-Spieler-Spiel beinhaltet 15-25 Vorschläge insgesamt, bevor jemand genug Informationen hat, um das Mysterium zu lösen. Dies kann je nach Spielerfähigkeit und Glück bei der Kartenverteilung variieren.",
          nl: "Een typisch spel met 4 spelers omvat 15-25 totale suggesties voordat iemand genoeg informatie heeft om het mysterie op te lossen. Dit kan variëren op basis van spelersvaardigheden en geluk met kaartverdeling."
        }
      },
      {
        question: {
          en: "What is the strategic value of showing the same card repeatedly when you have multiple matching cards?",
          es: "¿Cuál es el valor estratégico de mostrar la misma carta repetidamente cuando tienes múltiples cartas coincidentes?",
          de: "Was ist der strategische Wert, dieselbe Karte wiederholt zu zeigen, wenn du mehrere passende Karten hast?",
          nl: "Wat is de strategische waarde van het herhaaldelijk tonen van dezelfde kaart wanneer je meerdere overeenkomende kaarten hebt?"
        },
        options: [
          { en: "It confuses opponents about your total hand", es: "Confunde a los oponentes sobre tu mano total", de: "Es verwirrt Gegner über deine gesamte Hand", nl: "Het verwart tegenstanders over je totale hand" },
          { en: "It's required by the rules", es: "Es requerido por las reglas", de: "Es ist durch die Regeln erforderlich", nl: "Het is vereist door de regels" },
          { en: "It gives you extra turns", es: "Te da turnos extra", de: "Es gibt dir zusätzliche Züge", nl: "Het geeft je extra beurten" },
          { en: "It has no strategic value", es: "No tiene valor estratégico", de: "Es hat keinen strategischen Wert", nl: "Het heeft geen strategische waarde" }
        ],
        correct: 0,
        explanation: {
          en: "By showing the same card repeatedly, you hide information about your other cards. Opponents won't know you have multiple cards from certain suggestions, giving you an informational advantage.",
          es: "Al mostrar la misma carta repetidamente, ocultas información sobre tus otras cartas. Los oponentes no sabrán que tienes múltiples cartas de ciertas sugerencias, dándote una ventaja informativa.",
          de: "Indem du dieselbe Karte wiederholt zeigst, verbirgst du Informationen über deine anderen Karten. Gegner werden nicht wissen, dass du mehrere Karten von bestimmten Vorschlägen hast, was dir einen Informationsvorteil verschafft.",
          nl: "Door dezelfde kaart herhaaldelijk te tonen, verberg je informatie over je andere kaarten. Tegenstanders zullen niet weten dat je meerdere kaarten hebt van bepaalde suggesties, waardoor je een informatievoordeel hebt."
        }
      },
      {
        question: {
          en: "Which category typically gets eliminated first in most games?",
          es: "¿Qué categoría típicamente se elimina primero en la mayoría de los juegos?",
          de: "Welche Kategorie wird in den meisten Spielen typischerweise zuerst eliminiert?",
          nl: "Welke categorie wordt meestal eerst geëlimineerd in de meeste spellen?"
        },
        options: [
          { en: "Characters (6 cards)", es: "Personajes (6 cartas)", de: "Charaktere (6 Karten)", nl: "Personages (6 kaarten)" },
          { en: "Weapons (6 cards)", es: "Armas (6 cartas)", de: "Waffen (6 Karten)", nl: "Wapens (6 kaarten)" },
          { en: "Rooms (9 cards)", es: "Habitaciones (9 cartas)", de: "Räume (9 Karten)", nl: "Kamers (9 kaarten)" },
          { en: "All at the same rate", es: "Todos a la misma velocidad", de: "Alle zur gleichen Rate", nl: "Allemaal even snel" }
        ],
        correct: 2,
        explanation: {
          en: "Rooms get eliminated fastest because there are more room cards (9) than character or weapon cards (6 each), and you must suggest the room you're in, providing more data about room cards.",
          es: "Las habitaciones se eliminan más rápido porque hay más cartas de habitaciones (9) que cartas de personajes o armas (6 cada una), y debes sugerir la habitación en la que estás, proporcionando más datos sobre cartas de habitaciones.",
          de: "Räume werden am schnellsten eliminiert, weil es mehr Raumkarten (9) gibt als Charakter- oder Waffenkarten (je 6), und du musst den Raum vorschlagen, in dem du dich befindest, was mehr Daten über Raumkarten liefert.",
          nl: "Kamers worden het snelst geëlimineerd omdat er meer kamerkaarten zijn (9) dan personage- of wapenkaarten (elk 6), en je moet de kamer voorstellen waarin je bent, wat meer gegevens over kamerkaarten oplevert."
        }
      },
      {
        question: {
          en: "What is a 'blocking suggestion'?",
          es: "¿Qué es una 'sugerencia de bloqueo'?",
          de: "Was ist ein 'Blockiervorschlag'?",
          nl: "Wat is een 'blokkeer suggestie'?"
        },
        options: [
          { en: "Suggesting cards you know others have", es: "Sugerir cartas que sabes que otros tienen", de: "Karten vorschlagen, von denen du weißt, dass andere sie haben", nl: "Kaarten suggereren waarvan je weet dat anderen ze hebben" },
          { en: "Preventing others from moving", es: "Impedir que otros se muevan", de: "Andere daran hindern, sich zu bewegen", nl: "Anderen verhinderen zich te bewegen" },
          { en: "Refusing to show cards", es: "Negarse a mostrar cartas", de: "Sich weigern, Karten zu zeigen", nl: "Weigeren kaarten te tonen" },
          { en: "Making suggestions out of turn", es: "Hacer sugerencias fuera de turno", de: "Vorschläge außerhalb der Reihe machen", nl: "Suggesties doen buiten de beurt" }
        ],
        correct: 0,
        explanation: {
          en: "A blocking suggestion intentionally includes cards you know opponents hold, preventing them from gaining new information while you learn from their responses. This is an advanced tactical move.",
          es: "Una sugerencia de bloqueo incluye intencionalmente cartas que sabes que tienen los oponentes, evitando que obtengan nueva información mientras aprendes de sus respuestas. Este es un movimiento táctico avanzado.",
          de: "Ein Blockiervorschlag enthält absichtlich Karten, von denen du weißt, dass Gegner sie haben, wodurch verhindert wird, dass sie neue Informationen erhalten, während du aus ihren Antworten lernst. Dies ist ein fortgeschrittener taktischer Zug.",
          nl: "Een blokkeer suggestie bevat opzettelijk kaarten waarvan je weet dat tegenstanders ze hebben, waardoor wordt voorkomen dat ze nieuwe informatie krijgen terwijl jij leert van hun reacties. Dit is een geavanceerde tactische zet."
        }
      },
      {
        question: {
          en: "When is the optimal time to make your accusation?",
          es: "¿Cuándo es el momento óptimo para hacer tu acusación?",
          de: "Wann ist der optimale Zeitpunkt für deine Anschuldigung?",
          nl: "Wanneer is het optimale moment om je beschuldiging te maken?"
        },
        options: [
          { en: "As soon as you think you know", es: "Tan pronto como creas que sabes", de: "Sobald du glaubst, es zu wissen", nl: "Zodra je denkt dat je het weet" },
          { en: "When you've eliminated all but 3 cards (one from each category)", es: "Cuando hayas eliminado todas menos 3 cartas (una de cada categoría)", de: "Wenn du alle außer 3 Karten eliminiert hast (eine aus jeder Kategorie)", nl: "Wanneer je alle behalve 3 kaarten hebt geëlimineerd (één uit elke categorie)" },
          { en: "On the last possible turn", es: "En el último turno posible", de: "Im letztmöglichen Zug", nl: "In de laatst mogelijke beurt" },
          { en: "After everyone else has been eliminated", es: "Después de que todos los demás hayan sido eliminados", de: "Nachdem alle anderen eliminiert wurden", nl: "Nadat alle anderen zijn geëlimineerd" }
        ],
        correct: 1,
        explanation: {
          en: "The optimal time is when you've definitively eliminated all cards except one from each category through logical deduction. Making an accusation earlier risks elimination on a guess.",
          es: "El momento óptimo es cuando has eliminado definitivamente todas las cartas excepto una de cada categoría mediante deducción lógica. Hacer una acusación antes arriesga eliminación por una suposición.",
          de: "Der optimale Zeitpunkt ist, wenn du alle Karten außer einer aus jeder Kategorie durch logische Deduktion definitiv eliminiert hast. Eine frühere Anschuldigung riskiert Eliminierung durch eine Vermutung.",
          nl: "Het optimale moment is wanneer je definitief alle kaarten hebt geëlimineerd behalve één uit elke categorie door logische deductie. Een eerdere beschuldiging riskeert eliminatie op een gok."
        }
      },
      {
        question: {
          en: "How should you prioritize which cards to investigate first?",
          es: "¿Cómo debes priorizar qué cartas investigar primero?",
          de: "Wie solltest du priorisieren, welche Karten zuerst zu untersuchen sind?",
          nl: "Hoe moet je prioriteren welke kaarten eerst te onderzoeken?"
        },
        options: [
          { en: "Focus on characters first", es: "Concéntrate primero en personajes", de: "Konzentriere dich zuerst auf Charaktere", nl: "Focus eerst op personages" },
          { en: "Focus on weapons first", es: "Concéntrate primero en armas", de: "Konzentriere dich zuerst auf Waffen", nl: "Focus eerst op wapens" },
          { en: "Focus on rooms first", es: "Concéntrate primero en habitaciones", de: "Konzentriere dich zuerst auf Räume", nl: "Focus eerst op kamers" },
          { en: "Gather information across all categories equally", es: "Recopila información en todas las categorías por igual", de: "Sammle Informationen gleichmäßig über alle Kategorien", nl: "Verzamel informatie gelijkmatig over alle categorieën" }
        ],
        correct: 3,
        explanation: {
          en: "The best strategy is to gather information across all categories simultaneously. This provides the most comprehensive deduction possibilities and prevents you from missing critical connections between categories.",
          es: "La mejor estrategia es recopilar información en todas las categorías simultáneamente. Esto proporciona las posibilidades de deducción más completas y evita que pierdas conexiones críticas entre categorías.",
          de: "Die beste Strategie ist, Informationen über alle Kategorien gleichzeitig zu sammeln. Dies bietet die umfassendsten Deduktionsmöglichkeiten und verhindert, dass du kritische Verbindungen zwischen Kategorien verpasst.",
          nl: "De beste strategie is om simultaan informatie te verzamelen over alle categorieën. Dit biedt de meest uitgebreide deductiemogelijkheden en voorkomt dat je kritieke verbindingen tussen categorieën mist."
        }
      },
      {
        question: {
          en: "What is the 'Sherlock Holmes' strategy in Cluedo?",
          es: "¿Qué es la estrategia de 'Sherlock Holmes' en Cluedo?",
          de: "Was ist die 'Sherlock Holmes'-Strategie in Cluedo?",
          nl: "Wat is de 'Sherlock Holmes'-strategie in Cluedo?"
        },
        options: [
          { en: "Making random guesses", es: "Hacer conjeturas aleatorias", de: "Zufällige Vermutungen machen", nl: "Willekeurige gissingen doen" },
          { en: "Eliminating the impossible to find the truth", es: "Eliminar lo imposible para encontrar la verdad", de: "Das Unmögliche eliminieren, um die Wahrheit zu finden", nl: "Het onmogelijke elimineren om de waarheid te vinden" },
          { en: "Always accusing Professor Plum", es: "Siempre acusar al Profesor Plum", de: "Immer Professor Plum anklagen", nl: "Altijd Professor Plum beschuldigen" },
          { en: "Never taking notes", es: "Nunca tomar notas", de: "Nie Notizen machen", nl: "Nooit notities maken" }
        ],
        correct: 1,
        explanation: {
          en: "The Sherlock Holmes strategy follows the famous quote: 'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.' You systematically eliminate cards until only the solution remains.",
          es: "La estrategia de Sherlock Holmes sigue la famosa cita: 'Cuando has eliminado lo imposible, lo que queda, por improbable que sea, debe ser la verdad.' Eliminas sistemáticamente cartas hasta que solo queda la solución.",
          de: "Die Sherlock Holmes-Strategie folgt dem berühmten Zitat: 'Wenn du das Unmögliche eliminiert hast, muss das, was übrig bleibt, wie unwahrscheinlich auch immer, die Wahrheit sein.' Du eliminierst systematisch Karten, bis nur die Lösung übrig bleibt.",
          nl: "De Sherlock Holmes-strategie volgt het beroemde citaat: 'Wanneer je het onmogelijke hebt geëlimineerd, moet wat overblijft, hoe onwaarschijnlijk ook, de waarheid zijn.' Je elimineert systematisch kaarten totdat alleen de oplossing overblijft."
        }
      },
      {
        question: {
          en: "Why is it useful to track which players pass on suggestions?",
          es: "¿Por qué es útil rastrear qué jugadores pasan en las sugerencias?",
          de: "Warum ist es nützlich zu verfolgen, welche Spieler bei Vorschlägen passen?",
          nl: "Waarom is het nuttig bij te houden welke spelers suggesties doorgeven?"
        },
        options: [
          { en: "It tells you which cards they don't have", es: "Te dice qué cartas no tienen", de: "Es sagt dir, welche Karten sie nicht haben", nl: "Het vertelt je welke kaarten ze niet hebben" },
          { en: "It tells you which cards they do have", es: "Te dice qué cartas sí tienen", de: "Es sagt dir, welche Karten sie haben", nl: "Het vertelt je welke kaarten ze wel hebben" },
          { en: "It's not useful", es: "No es útil", de: "Es ist nicht nützlich", nl: "Het is niet nuttig" },
          { en: "It counts toward your score", es: "Cuenta para tu puntuación", de: "Es zählt zu deiner Punktzahl", nl: "Het telt mee voor je score" }
        ],
        correct: 0,
        explanation: {
          en: "When a player passes on a suggestion, you know they don't have any of those three cards. This negative information is just as valuable as positive information for narrowing down the solution.",
          es: "Cuando un jugador pasa en una sugerencia, sabes que no tiene ninguna de esas tres cartas. Esta información negativa es tan valiosa como la información positiva para reducir la solución.",
          de: "Wenn ein Spieler bei einem Vorschlag passt, weißt du, dass er keine dieser drei Karten hat. Diese negative Information ist genauso wertvoll wie positive Information, um die Lösung einzugrenzen.",
          nl: "Wanneer een speler een suggestie doorgeeft, weet je dat ze geen van die drie kaarten hebben. Deze negatieve informatie is net zo waardevol als positieve informatie voor het beperken van de oplossing."
        }
      },
      {
        question: {
          en: "What is the minimum number of suggestions needed to theoretically solve the game?",
          es: "¿Cuál es el número mínimo de sugerencias necesarias para resolver teóricamente el juego?",
          de: "Wie viele Vorschläge sind mindestens erforderlich, um das Spiel theoretisch zu lösen?",
          nl: "Wat is het minimum aantal suggesties dat nodig is om het spel theoretisch op te lossen?"
        },
        options: [
          { en: "1", es: "1", de: "1", nl: "1" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "18", es: "18", de: "18", nl: "18" }
        ],
        correct: 0,
        explanation: {
          en: "Theoretically, you could solve the game with just one suggestion if all players pass (showing none of them have those cards), indicating those three cards are the solution. However, this is extremely rare in practice.",
          es: "Teóricamente, podrías resolver el juego con solo una sugerencia si todos los jugadores pasan (mostrando que ninguno tiene esas cartas), indicando que esas tres cartas son la solución. Sin embargo, esto es extremadamente raro en la práctica.",
          de: "Theoretisch könntest du das Spiel mit nur einem Vorschlag lösen, wenn alle Spieler passen (zeigen, dass keiner diese Karten hat), was darauf hinweist, dass diese drei Karten die Lösung sind. Dies ist jedoch in der Praxis äußerst selten.",
          nl: "Theoretisch zou je het spel kunnen oplossen met slechts één suggestie als alle spelers doorgeven (wat aantoont dat geen van hen die kaarten heeft), wat aangeeft dat die drie kaarten de oplossing zijn. Dit is echter in de praktijk extreem zeldzaam."
        }
      },
      {
        question: {
          en: "How does starting position affect your strategy?",
          es: "¿Cómo afecta la posición inicial a tu estrategia?",
          de: "Wie beeinflusst die Startposition deine Strategie?",
          nl: "Hoe beïnvloedt de startpositie je strategie?"
        },
        options: [
          { en: "Going first gives you more time to deduce", es: "Ir primero te da más tiempo para deducir", de: "Zuerst zu gehen gibt dir mehr Zeit zum Deduzieren", nl: "Als eerste gaan geeft je meer tijd om te deduceren" },
          { en: "Going last gives you more information from others' suggestions", es: "Ir último te da más información de las sugerencias de otros", de: "Zuletzt zu gehen gibt dir mehr Informationen aus Vorschlägen anderer", nl: "Als laatste gaan geeft je meer informatie uit suggesties van anderen" },
          { en: "Position doesn't matter", es: "La posición no importa", de: "Position spielt keine Rolle", nl: "Positie maakt niet uit" },
          { en: "Middle positions are always best", es: "Las posiciones medias son siempre las mejores", de: "Mittlere Positionen sind immer am besten", nl: "Middenpositities zijn altijd het beste" }
        ],
        correct: 1,
        explanation: {
          en: "Going last can be advantageous because you observe more suggestions and card reveals before your turn, giving you more initial information. However, skilled players can succeed from any position.",
          es: "Ir último puede ser ventajoso porque observas más sugerencias y revelaciones de cartas antes de tu turno, dándote más información inicial. Sin embargo, los jugadores hábiles pueden tener éxito desde cualquier posición.",
          de: "Zuletzt zu gehen kann vorteilhaft sein, weil du mehr Vorschläge und Kartenaufdeckungen vor deinem Zug beobachtest, was dir mehr anfängliche Informationen gibt. Erfahrene Spieler können jedoch von jeder Position aus erfolgreich sein.",
          nl: "Als laatste gaan kan voordelig zijn omdat je meer suggesties en kaartonthullingen observeert voor je beurt, wat je meer initiële informatie geeft. Ervaren spelers kunnen echter vanaf elke positie succesvol zijn."
        }
      },
      {
        question: {
          en: "What is 'deductive elimination'?",
          es: "¿Qué es la 'eliminación deductiva'?",
          de: "Was ist 'deduktive Eliminierung'?",
          nl: "Wat is 'deductieve eliminatie'?"
        },
        options: [
          { en: "Removing players from the game", es: "Eliminar jugadores del juego", de: "Spieler aus dem Spiel entfernen", nl: "Spelers uit het spel verwijderen" },
          { en: "Systematically ruling out cards that can't be in the solution", es: "Descartar sistemáticamente cartas que no pueden estar en la solución", de: "Systematisches Ausschließen von Karten, die nicht in der Lösung sein können", nl: "Systematisch kaarten uitsluiten die niet in de oplossing kunnen zitten" },
          { en: "Guessing randomly", es: "Adivinar aleatoriamente", de: "Zufällig raten", nl: "Willekeurig raden" },
          { en: "Eliminating rooms from the board", es: "Eliminar habitaciones del tablero", de: "Räume vom Brett entfernen", nl: "Kamers van het bord verwijderen" }
        ],
        correct: 1,
        explanation: {
          en: "Deductive elimination is the core logical process of Cluedo: systematically ruling out cards based on what's been revealed and what players have shown, until only the solution cards remain.",
          es: "La eliminación deductiva es el proceso lógico central de Cluedo: descartar sistemáticamente cartas basándose en lo que se ha revelado y lo que los jugadores han mostrado, hasta que solo quedan las cartas de solución.",
          de: "Deduktive Eliminierung ist der zentrale logische Prozess von Cluedo: systematisches Ausschließen von Karten basierend auf dem, was aufgedeckt wurde und was Spieler gezeigt haben, bis nur die Lösungskarten übrig bleiben.",
          nl: "Deductieve eliminatie is het centrale logische proces van Cluedo: systematisch kaarten uitsluiten op basis van wat is onthuld en wat spelers hebben getoond, totdat alleen de oplossingskaarten overblijven."
        }
      },
      {
        question: {
          en: "Which Cluedo variant introduces additional complexity?",
          es: "¿Qué variante de Cluedo introduce complejidad adicional?",
          de: "Welche Cluedo-Variante führt zusätzliche Komplexität ein?",
          nl: "Welke Cluedo-variant introduceert extra complexiteit?"
        },
        options: [
          { en: "Cluedo Master Detective with 10 suspects", es: "Cluedo Master Detective con 10 sospechosos", de: "Cluedo Master Detective mit 10 Verdächtigen", nl: "Cluedo Master Detective met 10 verdachten" },
          { en: "Speed Cluedo with faster gameplay", es: "Cluedo Rápido con juego más rápido", de: "Schnelles Cluedo mit schnellerem Gameplay", nl: "Snelle Cluedo met sneller gameplay" },
          { en: "Team Cluedo with partners", es: "Cluedo en Equipo con parejas", de: "Team Cluedo mit Partnern", nl: "Team Cluedo met partners" },
          { en: "All of these are variants", es: "Todas estas son variantes", de: "Alle diese sind Varianten", nl: "Al deze zijn varianten" }
        ],
        correct: 3,
        explanation: {
          en: "All of these are real Cluedo variants that add different types of complexity. Master Detective adds more cards, Speed Cluedo compresses the timeline, and Team Cluedo introduces partnership dynamics.",
          es: "Todas estas son variantes reales de Cluedo que agregan diferentes tipos de complejidad. Master Detective agrega más cartas, Cluedo Rápido comprime la línea de tiempo, y Cluedo en Equipo introduce dinámicas de asociación.",
          de: "All diese sind echte Cluedo-Varianten, die verschiedene Arten von Komplexität hinzufügen. Master Detective fügt mehr Karten hinzu, Schnelles Cluedo komprimiert die Zeitlinie, und Team Cluedo führt Partnerschaftsdynamiken ein.",
          nl: "Al deze zijn echte Cluedo-varianten die verschillende soorten complexiteit toevoegen. Master Detective voegt meer kaarten toe, Snelle Cluedo comprimeert de tijdlijn, en Team Cluedo introduceert partnerschapsdynamiek."
        }
      },
      {
        question: {
          en: "What is the 'information asymmetry' concept in Cluedo?",
          es: "¿Qué es el concepto de 'asimetría de información' en Cluedo?",
          de: "Was ist das Konzept der 'Informationsasymmetrie' in Cluedo?",
          nl: "Wat is het concept van 'informatieasymmetrie' in Cluedo?"
        },
        options: [
          { en: "Players have different amounts of information", es: "Los jugadores tienen diferentes cantidades de información", de: "Spieler haben unterschiedliche Mengen an Informationen", nl: "Spelers hebben verschillende hoeveelheden informatie" },
          { en: "The board is uneven", es: "El tablero es desigual", de: "Das Brett ist uneben", nl: "Het bord is ongelijk" },
          { en: "Some cards are worth more", es: "Algunas cartas valen más", de: "Einige Karten sind mehr wert", nl: "Sommige kaarten zijn meer waard" },
          { en: "Players move at different speeds", es: "Los jugadores se mueven a diferentes velocidades", de: "Spieler bewegen sich mit unterschiedlichen Geschwindigkeiten", nl: "Spelers bewegen met verschillende snelheden" }
        ],
        correct: 0,
        explanation: {
          en: "Information asymmetry means each player has unique knowledge: their own cards, cards shown to them, and observations of other players' interactions. Managing this asymmetric information is key to winning.",
          es: "La asimetría de información significa que cada jugador tiene conocimiento único: sus propias cartas, cartas mostradas a ellos, y observaciones de las interacciones de otros jugadores. Gestionar esta información asimétrica es clave para ganar.",
          de: "Informationsasymmetrie bedeutet, dass jeder Spieler einzigartiges Wissen hat: seine eigenen Karten, ihm gezeigte Karten und Beobachtungen der Interaktionen anderer Spieler. Das Management dieser asymmetrischen Information ist der Schlüssel zum Sieg.",
          nl: "Informatieasymmetrie betekent dat elke speler unieke kennis heeft: hun eigen kaarten, aan hen getoonde kaarten, en observaties van interacties van andere spelers. Het beheren van deze asymmetrische informatie is de sleutel tot winnen."
        }
      },
      {
        question: {
          en: "What advanced technique involves deliberately showing specific cards?",
          es: "¿Qué técnica avanzada implica mostrar deliberadamente cartas específicas?",
          de: "Welche fortgeschrittene Technik beinhaltet das absichtliche Zeigen bestimmter Karten?",
          nl: "Welke geavanceerde techniek houdt in dat je opzettelijk specifieke kaarten toont?"
        },
        options: [
          { en: "Card obscuring strategy", es: "Estrategia de oscurecimiento de cartas", de: "Kartenverschleierungsstrategie", nl: "Kaart verhullingstrategie" },
          { en: "Selective information revelation", es: "Revelación selectiva de información", de: "Selektive Informationsoffenbarung", nl: "Selectieve informatie onthulling" },
          { en: "Information control", es: "Control de información", de: "Informationskontrolle", nl: "Informatiecontrole" },
          { en: "All refer to the same concept", es: "Todos se refieren al mismo concepto", de: "Alle beziehen sich auf dasselbe Konzept", nl: "Allemaal verwijzen naar hetzelfde concept" }
        ],
        correct: 3,
        explanation: {
          en: "When you have multiple matching cards, strategically choosing which to show can control what information opponents gain. Showing commonly held cards reveals less than showing rare cards others might not have.",
          es: "Cuando tienes múltiples cartas coincidentes, elegir estratégicamente cuál mostrar puede controlar qué información obtienen los oponentes. Mostrar cartas comunes revela menos que mostrar cartas raras que otros podrían no tener.",
          de: "Wenn du mehrere passende Karten hast, kann die strategische Wahl, welche du zeigst, kontrollieren, welche Informationen Gegner erhalten. Häufig gehaltene Karten zu zeigen offenbart weniger als seltene Karten zu zeigen, die andere möglicherweise nicht haben.",
          nl: "Wanneer je meerdere overeenkomende kaarten hebt, kun je door strategisch te kiezen welke je toont controleren welke informatie tegenstanders krijgen. Veelvoorkomende kaarten tonen onthult minder dan zeldzame kaarten tonen die anderen mogelijk niet hebben."
        }
      },
      {
        question: {
          en: "How can tracking 'negative information' improve your game?",
          es: "¿Cómo puede mejorar tu juego el seguimiento de 'información negativa'?",
          de: "Wie kann das Verfolgen 'negativer Informationen' dein Spiel verbessern?",
          nl: "Hoe kan het bijhouden van 'negatieve informatie' je spel verbeteren?"
        },
        options: [
          { en: "Noting when players can't show cards", es: "Notar cuando los jugadores no pueden mostrar cartas", de: "Beachten, wenn Spieler keine Karten zeigen können", nl: "Opmerken wanneer spelers geen kaarten kunnen tonen" },
          { en: "Tracking bad dice rolls", es: "Rastrear malas tiradas de dados", de: "Schlechte Würfelwürfe verfolgen", nl: "Slechte dobbelsteenworpen bijhouden" },
          { en: "Recording failed suggestions", es: "Registrar sugerencias fallidas", de: "Gescheiterte Vorschläge aufzeichnen", nl: "Mislukte suggesties vastleggen" },
          { en: "Monitoring room access problems", es: "Monitorear problemas de acceso a habitaciones", de: "Probleme beim Raumzugang überwachen", nl: "Kamertoegang problemen monitoren" }
        ],
        correct: 0,
        explanation: {
          en: "Negative information - knowing what cards players DON'T have based on when they couldn't disprove suggestions - is as valuable as positive information about cards they showed.",
          es: "La información negativa - saber qué cartas NO tienen los jugadores basándose en cuándo no pudieron refutar sugerencias - es tan valiosa como la información positiva sobre las cartas que mostraron.",
          de: "Negative Informationen - zu wissen, welche Karten Spieler NICHT haben, basierend darauf, wann sie Vorschläge nicht widerlegen konnten - sind genauso wertvoll wie positive Informationen über gezeigte Karten.",
          nl: "Negatieve informatie - weten welke kaarten spelers NIET hebben op basis van wanneer ze suggesties niet konden weerleggen - is net zo waardevol als positieve informatie over kaarten die ze toonden."
        }
      },
      {
        question: {
          en: "What is 'card counting' in Cluedo context?",
          es: "¿Qué es 'contar cartas' en el contexto de Cluedo?",
          de: "Was ist 'Kartenzählen' im Cluedo-Kontext?",
          nl: "Wat is 'kaarten tellen' in Cluedo context?"
        },
        options: [
          { en: "Tracking how many cards each player has", es: "Rastrear cuántas cartas tiene cada jugador", de: "Verfolgen, wie viele Karten jeder Spieler hat", nl: "Bijhouden hoeveel kaarten elke speler heeft" },
          { en: "Counting eliminated cards per category", es: "Contar cartas eliminadas por categoría", de: "Eliminierte Karten pro Kategorie zählen", nl: "Geëlimineerde kaarten per categorie tellen" },
          { en: "Tallying total suggestions made", es: "Contar el total de sugerencias hechas", de: "Die Gesamtzahl der gemachten Vorschläge zählen", nl: "Totaal aantal gemaakte suggesties tellen" },
          { en: "Both A and B", es: "Tanto A como B", de: "Sowohl A als auch B", nl: "Zowel A als B" }
        ],
        correct: 3,
        explanation: {
          en: "Card counting in Cluedo involves both tracking how many cards each player holds AND how many cards have been eliminated in each category (suspects, weapons, rooms) to narrow down possibilities.",
          es: "Contar cartas en Cluedo implica tanto rastrear cuántas cartas tiene cada jugador COMO cuántas cartas han sido eliminadas en cada categoría (sospechosos, armas, habitaciones) para reducir posibilidades.",
          de: "Kartenzählen in Cluedo beinhaltet sowohl das Verfolgen, wie viele Karten jeder Spieler hält, ALS AUCH wie viele Karten in jeder Kategorie (Verdächtige, Waffen, Räume) eliminiert wurden, um Möglichkeiten einzugrenzen.",
          nl: "Kaarten tellen in Cluedo houdt in zowel bijhouden hoeveel kaarten elke speler heeft ALS hoeveel kaarten geëlimineerd zijn in elke categorie (verdachten, wapens, kamers) om mogelijkheden te beperken."
        }
      },
      {
        question: {
          en: "What is a 'cross-reference deduction'?",
          es: "¿Qué es una 'deducción por referencia cruzada'?",
          de: "Was ist eine 'Kreuzreferenz-Deduktion'?",
          nl: "Wat is een 'kruisverwijzing deductie'?"
        },
        options: [
          { en: "Comparing multiple players' responses to find patterns", es: "Comparar respuestas de múltiples jugadores para encontrar patrones", de: "Antworten mehrerer Spieler vergleichen, um Muster zu finden", nl: "Antwoorden van meerdere spelers vergelijken om patronen te vinden" },
          { en: "Checking your notes against the board", es: "Verificar tus notas contra el tablero", de: "Deine Notizen gegen das Brett prüfen", nl: "Je notities controleren tegen het bord" },
          { en: "Asking about cards in different rooms", es: "Preguntar sobre cartas en diferentes habitaciones", de: "Nach Karten in verschiedenen Räumen fragen", nl: "Vragen over kaarten in verschillende kamers" },
          { en: "Suggesting the same cards twice", es: "Sugerir las mismas cartas dos veces", de: "Die gleichen Karten zweimal vorschlagen", nl: "Dezelfde kaarten twee keer suggereren" }
        },
        correct: 0,
        explanation: {
          en: "Cross-reference deduction involves analyzing how different players responded to various suggestions to deduce who has which cards, even if you never saw those cards yourself.",
          es: "La deducción por referencia cruzada implica analizar cómo diferentes jugadores respondieron a varias sugerencias para deducir quién tiene qué cartas, incluso si nunca viste esas cartas tú mismo.",
          de: "Kreuzreferenz-Deduktion beinhaltet die Analyse, wie verschiedene Spieler auf verschiedene Vorschläge reagiert haben, um abzuleiten, wer welche Karten hat, selbst wenn du diese Karten nie selbst gesehen hast.",
          nl: "Kruisverwijzing deductie houdt in het analyseren hoe verschillende spelers op verschillende suggesties reageerden om af te leiden wie welke kaarten heeft, zelfs als je die kaarten zelf nooit zag."
        }
      },
      {
        question: {
          en: "Why might an advanced player sometimes bluff in Cluedo?",
          es: "¿Por qué un jugador avanzado podría a veces hacer un bluff en Cluedo?",
          de: "Warum könnte ein fortgeschrittener Spieler manchmal in Cluedo bluffen?",
          nl: "Waarom zou een gevorderde speler soms bluffen in Cluedo?"
        },
        options: [
          { en: "To confuse opponents about solution cards", es: "Para confundir a oponentes sobre cartas de solución", de: "Um Gegner über Lösungskarten zu verwirren", nl: "Om tegenstanders te verwarren over oplossingskaarten" },
          { en: "To misdirect attention from their deductions", es: "Para desviar la atención de sus deducciones", de: "Um die Aufmerksamkeit von ihren Deduktionen abzulenken", nl: "Om aandacht af te leiden van hun deducties" },
          { en: "Bluffing is not effective in Cluedo", es: "El bluff no es efectivo en Cluedo", de: "Bluffen ist in Cluedo nicht effektiv", nl: "Bluffen is niet effectief in Cluedo" },
          { en: "To make opponents doubt their notes", es: "Para hacer que los oponentes duden de sus notas", de: "Um Gegner an ihren Notizen zweifeln zu lassen", nl: "Om tegenstanders aan hun notities te laten twijfelen" }
        },
        correct: 2,
        explanation: {
          en: "Unlike poker, bluffing has limited use in Cluedo because the game is based on logical deduction from concrete information. Your suggestions and responses follow strict rules that can't be manipulated through bluffing.",
          es: "A diferencia del póker, el bluff tiene uso limitado en Cluedo porque el juego se basa en deducción lógica de información concreta. Tus sugerencias y respuestas siguen reglas estrictas que no pueden manipularse mediante bluff.",
          de: "Anders als beim Poker hat Bluffen in Cluedo begrenzten Nutzen, weil das Spiel auf logischer Deduktion aus konkreten Informationen basiert. Deine Vorschläge und Antworten folgen strengen Regeln, die nicht durch Bluffen manipuliert werden können.",
          nl: "In tegenstelling tot poker heeft bluffen beperkt nut in Cluedo omdat het spel gebaseerd is op logische deductie uit concrete informatie. Je suggesties en antwoorden volgen strikte regels die niet gemanipuleerd kunnen worden door bluffen."
        }
      },
      {
        question: {
          en: "What is 'suggestion timing' strategy?",
          es: "¿Qué es la estrategia de 'momento de sugerencia'?",
          de: "Was ist die 'Vorschlagszeitpunkt'-Strategie?",
          nl: "Wat is 'suggestie timing' strategie?"
        },
        options: [
          { en: "Making suggestions at optimal points in turn order", es: "Hacer sugerencias en puntos óptimos en orden de turno", de: "Vorschläge an optimalen Punkten in der Zugreihenfolge machen", nl: "Suggesties doen op optimale punten in beurtvolgorde" },
          { en: "Timing how long players take to respond", es: "Cronometrar cuánto tardan los jugadores en responder", de: "Messen, wie lange Spieler zum Antworten brauchen", nl: "Meten hoe lang spelers nodig hebben om te antwoorden" },
          { en: "Making suggestions quickly", es: "Hacer sugerencias rápidamente", de: "Vorschläge schnell machen", nl: "Snel suggesties doen" },
          { en: "Waiting until late game to suggest", es: "Esperar hasta el final del juego para sugerir", de: "Bis zum späten Spiel warten, um vorzuschlagen", nl: "Wachten tot laat in het spel om te suggereren" }
        },
        correct: 0,
        explanation: {
          en: "Suggestion timing involves considering turn order when making suggestions - suggesting earlier in the rotation means more players can potentially disprove it, gathering more information for everyone.",
          es: "El momento de sugerencia implica considerar el orden de turno al hacer sugerencias - sugerir más temprano en la rotación significa que más jugadores pueden potencialmente refutarla, recopilando más información para todos.",
          de: "Vorschlagszeitpunkt beinhaltet die Berücksichtigung der Zugreihenfolge beim Machen von Vorschlägen - früher in der Rotation vorzuschlagen bedeutet, dass mehr Spieler ihn möglicherweise widerlegen können, was mehr Informationen für alle sammelt.",
          nl: "Suggestie timing houdt in het overwegen van beurtvolgorde bij het doen van suggesties - eerder suggereren in de rotatie betekent dat meer spelers het mogelijk kunnen weerleggen, wat meer informatie verzamelt voor iedereen."
        }
      },
      {
        question: {
          en: "What is the 'process of elimination by category' technique?",
          es: "¿Qué es la técnica de 'proceso de eliminación por categoría'?",
          de: "Was ist die 'Eliminierung nach Kategorie'-Technik?",
          nl: "Wat is de 'eliminatie per categorie' techniek?"
        },
        options: [
          { en: "Focusing deduction on one category at a time", es: "Enfocar la deducción en una categoría a la vez", de: "Deduktion auf eine Kategorie nach der anderen konzentrieren", nl: "Deductie focussen op één categorie tegelijk" },
          { en: "Eliminating all suspects first", es: "Eliminar todos los sospechosos primero", de: "Alle Verdächtigen zuerst eliminieren", nl: "Alle verdachten eerst elimineren" },
          { en: "Tracking which categories opponents focus on", es: "Rastrear en qué categorías se enfocan los oponentes", de: "Verfolgen, auf welche Kategorien sich Gegner konzentrieren", nl: "Bijhouden op welke categorieën tegenstanders focussen" },
          { en: "Suggesting different categories each turn", es: "Sugerir diferentes categorías cada turno", de: "Jede Runde verschiedene Kategorien vorschlagen", nl: "Elke beurt verschillende categorieën suggereren" }
        },
        correct: 0,
        explanation: {
          en: "This technique involves systematically working to eliminate all but one card in a single category before moving to the next, which can be more efficient than trying to eliminate across all categories simultaneously.",
          es: "Esta técnica implica trabajar sistemáticamente para eliminar todas menos una carta en una sola categoría antes de pasar a la siguiente, lo cual puede ser más eficiente que intentar eliminar en todas las categorías simultáneamente.",
          de: "Diese Technik beinhaltet systematisches Arbeiten, um alle außer einer Karte in einer einzelnen Kategorie zu eliminieren, bevor zur nächsten übergegangen wird, was effizienter sein kann als der Versuch, über alle Kategorien gleichzeitig zu eliminieren.",
          nl: "Deze techniek houdt in systematisch werken om alle behalve één kaart in een enkele categorie te elimineren voordat je naar de volgende gaat, wat efficiënter kan zijn dan proberen te elimineren over alle categorieën tegelijk."
        }
      },
      {
        question: {
          en: "How can you use 'suggestion patterns' to gain advantage?",
          es: "¿Cómo puedes usar 'patrones de sugerencia' para obtener ventaja?",
          de: "Wie kannst du 'Vorschlagsmuster' nutzen, um einen Vorteil zu erlangen?",
          nl: "Hoe kun je 'suggestiepatronen' gebruiken om voordeel te behalen?"
        },
        options: [
          { en: "By analyzing which cards opponents repeatedly suggest", es: "Al analizar qué cartas sugieren repetidamente los oponentes", de: "Durch Analyse, welche Karten Gegner wiederholt vorschlagen", nl: "Door te analyseren welke kaarten tegenstanders herhaaldelijk suggereren" },
          { en: "By creating your own predictable pattern", es: "Al crear tu propio patrón predecible", de: "Durch Erstellen eines eigenen vorhersehbaren Musters", nl: "Door je eigen voorspelbaar patroon te creëren" },
          { en: "By randomizing all suggestions", es: "Al aleatorizar todas las sugerencias", de: "Durch Randomisierung aller Vorschläge", nl: "Door alle suggesties te randomiseren" },
          { en: "Patterns are not useful in Cluedo", es: "Los patrones no son útiles en Cluedo", de: "Muster sind in Cluedo nicht nützlich", nl: "Patronen zijn niet nuttig in Cluedo" }
        },
        correct: 0,
        explanation: {
          en: "Observing what cards opponents frequently suggest can reveal which cards they DON'T hold (since smart players often suggest their own cards to gain clearer information from responses).",
          es: "Observar qué cartas sugieren frecuentemente los oponentes puede revelar qué cartas NO tienen (ya que los jugadores inteligentes a menudo sugieren sus propias cartas para obtener información más clara de las respuestas).",
          de: "Das Beobachten, welche Karten Gegner häufig vorschlagen, kann offenbaren, welche Karten sie NICHT haben (da kluge Spieler oft ihre eigenen Karten vorschlagen, um klarere Informationen aus Antworten zu erhalten).",
          nl: "Observeren welke kaarten tegenstanders vaak suggereren kan onthullen welke kaarten ze NIET hebben (aangezien slimme spelers vaak hun eigen kaarten suggereren om duidelijkere informatie uit antwoorden te krijgen)."
        }
      },
      {
        question: {
          en: "What is 'positional awareness' in Cluedo?",
          es: "¿Qué es la 'conciencia posicional' en Cluedo?",
          de: "Was ist 'Positionsbewusstsein' in Cluedo?",
          nl: "Wat is 'positiebewustzijn' in Cluedo?"
        },
        options: [
          { en: "Knowing where all players are on the board", es: "Saber dónde están todos los jugadores en el tablero", de: "Wissen, wo sich alle Spieler auf dem Brett befinden", nl: "Weten waar alle spelers op het bord zijn" },
          { en: "Understanding your turn order position's advantages", es: "Entender las ventajas de tu posición en el orden de turno", de: "Die Vorteile deiner Position in der Zugreihenfolge verstehen", nl: "De voordelen van je positie in beurtvolgorde begrijpen" },
          { en: "Tracking weapon token locations", es: "Rastrear ubicaciones de fichas de armas", de: "Waffenfiguren-Standorte verfolgen", nl: "Wapenfiguur locaties bijhouden" },
          { en: "Remembering which rooms you've visited", es: "Recordar qué habitaciones has visitado", de: "Sich erinnern, welche Räume du besucht hast", nl: "Onthouden welke kamers je hebt bezocht" }
        },
        correct: 1,
        explanation: {
          en: "Positional awareness means understanding how your position in turn order affects information flow - going later means you see more player interactions before your turn, but opponents gather more information first.",
          es: "La conciencia posicional significa entender cómo tu posición en el orden de turno afecta el flujo de información - ir más tarde significa que ves más interacciones de jugadores antes de tu turno, pero los oponentes recopilan más información primero.",
          de: "Positionsbewusstsein bedeutet zu verstehen, wie deine Position in der Zugreihenfolge den Informationsfluss beeinflusst - später zu gehen bedeutet, mehr Spielerinteraktionen vor deinem Zug zu sehen, aber Gegner sammeln zuerst mehr Informationen.",
          nl: "Positiebewustzijn betekent begrijpen hoe je positie in beurtvolgorde de informatieflow beïnvloedt - later gaan betekent dat je meer spelerinteracties ziet voor je beurt, maar tegenstanders verzamelen eerst meer informatie."
        }
      },
      {
        question: {
          en: "What is the 'two-card inference' technique?",
          es: "¿Qué es la técnica de 'inferencia de dos cartas'?",
          de: "Was ist die 'Zwei-Karten-Inferenz'-Technik?",
          nl: "Wat is de 'twee-kaarten gevolgtrekking' techniek?"
        },
        options: [
          { en: "When someone shows a card, inferring they have at least one of two cards", es: "Cuando alguien muestra una carta, inferir que tienen al menos una de dos cartas", de: "Wenn jemand eine Karte zeigt, ableiten, dass er mindestens eine von zwei Karten hat", nl: "Wanneer iemand een kaart toont, afleiden dat ze minstens één van twee kaarten hebben" },
          { en: "Always suggesting exactly two cards you know", es: "Siempre sugerir exactamente dos cartas que conoces", de: "Immer genau zwei Karten vorschlagen, die du kennst", nl: "Altijd precies twee kaarten suggereren die je kent" },
          { en: "Tracking pairs of cards together", es: "Rastrear pares de cartas juntos", de: "Kartenpaare zusammen verfolgen", nl: "Paren kaarten samen bijhouden" },
          { en: "Making two suggestions per turn", es: "Hacer dos sugerencias por turno", de: "Zwei Vorschläge pro Zug machen", nl: "Twee suggesties per beurt doen" }
        },
        correct: 0,
        explanation: {
          en: "Two-card inference occurs when you suggest three cards and someone shows you one - you know they have that card, but they might also have one or both of the other two. Tracking these possibilities is crucial.",
          es: "La inferencia de dos cartas ocurre cuando sugieres tres cartas y alguien te muestra una - sabes que tienen esa carta, pero también podrían tener una o ambas de las otras dos. Rastrear estas posibilidades es crucial.",
          de: "Zwei-Karten-Inferenz tritt auf, wenn du drei Karten vorschlägst und jemand dir eine zeigt - du weißt, dass sie diese Karte haben, aber sie könnten auch eine oder beide der anderen zwei haben. Diese Möglichkeiten zu verfolgen ist entscheidend.",
          nl: "Twee-kaarten gevolgtrekking treedt op wanneer je drie kaarten suggereert en iemand je er één toont - je weet dat ze die kaart hebben, maar ze kunnen ook één of beide andere twee hebben. Deze mogelijkheden bijhouden is cruciaal."
        }
      },
      {
        question: {
          en: "How does 'probabilistic reasoning' apply to Cluedo?",
          es: "¿Cómo se aplica el 'razonamiento probabilístico' a Cluedo?",
          de: "Wie wird 'probabilistisches Denken' auf Cluedo angewendet?",
          nl: "Hoe is 'probabilistisch redeneren' van toepassing op Cluedo?"
        },
        options: [
          { en: "Calculating odds of dice rolls", es: "Calcular probabilidades de tiradas de dados", de: "Wahrscheinlichkeiten von Würfelwürfen berechnen", nl: "Kansen van dobbelsteenworpen berekenen" },
          { en: "Estimating likelihood of which cards are in solution based on partial info", es: "Estimar la probabilidad de qué cartas están en la solución basándose en información parcial", de: "Wahrscheinlichkeit schätzen, welche Karten in der Lösung sind, basierend auf Teilinformationen", nl: "Waarschijnlijkheid schatten van welke kaarten in oplossing zitten op basis van gedeeltelijke info" },
          { en: "Guessing randomly between options", es: "Adivinar aleatoriamente entre opciones", de: "Zufällig zwischen Optionen raten", nl: "Willekeurig raden tussen opties" },
          { en: "Probability doesn't apply to deduction games", es: "La probabilidad no se aplica a juegos de deducción", de: "Wahrscheinlichkeit gilt nicht für Deduktionsspiele", nl: "Waarschijnlijkheid is niet van toepassing op deductiespellen" }
        },
        correct: 1,
        explanation: {
          en: "While Cluedo is primarily deductive, probabilistic reasoning helps when you have incomplete information - estimating which cards are more likely to be in the solution based on what you've learned and what remains unknown.",
          es: "Aunque Cluedo es principalmente deductivo, el razonamiento probabilístico ayuda cuando tienes información incompleta - estimando qué cartas tienen más probabilidades de estar en la solución basándose en lo que has aprendido y lo que permanece desconocido.",
          de: "Während Cluedo hauptsächlich deduktiv ist, hilft probabilistisches Denken, wenn du unvollständige Informationen hast - zu schätzen, welche Karten eher in der Lösung sind, basierend darauf, was du gelernt hast und was unbekannt bleibt.",
          nl: "Hoewel Cluedo voornamelijk deductief is, helpt probabilistisch redeneren wanneer je onvolledige informatie hebt - schatten welke kaarten waarschijnlijk in de oplossing zitten op basis van wat je hebt geleerd en wat onbekend blijft."
        }
      },
      {
        question: {
          en: "What is 'information cascade' in Cluedo?",
          es: "¿Qué es la 'cascada de información' en Cluedo?",
          de: "Was ist 'Informationskaskade' in Cluedo?",
          nl: "Wat is 'informatie cascade' in Cluedo?"
        },
        options: [
          { en: "When one deduction leads to multiple other deductions", es: "Cuando una deducción lleva a múltiples otras deducciones", de: "Wenn eine Deduktion zu mehreren anderen Deduktionen führt", nl: "Wanneer één gevolgtrekking leidt tot meerdere andere gevolgtrekkingen" },
          { en: "When information flows from dealer to players", es: "Cuando la información fluye del repartidor a los jugadores", de: "Wenn Informationen vom Geber zu den Spielern fließen", nl: "Wanneer informatie van dealer naar spelers stroomt" },
          { en: "Sharing all your cards with another player", es: "Compartir todas tus cartas con otro jugador", de: "Alle deine Karten mit einem anderen Spieler teilen", nl: "Al je kaarten delen met een andere speler" },
          { en: "Revealing cards in sequence", es: "Revelar cartas en secuencia", de: "Karten nacheinander offenbaren", nl: "Kaarten in volgorde onthullen" }
        ],
        correct: 0,
        explanation: {
          en: "An information cascade occurs when discovering one piece of information allows you to deduce several other facts through logical chain reactions - for example, eliminating one suspect might reveal who holds certain weapon cards.",
          es: "Una cascada de información ocurre cuando descubrir una pieza de información te permite deducir varios otros hechos a través de reacciones en cadena lógicas - por ejemplo, eliminar un sospechoso podría revelar quién tiene ciertas cartas de armas.",
          de: "Eine Informationskaskade tritt auf, wenn das Entdecken einer Information es dir ermöglicht, mehrere andere Fakten durch logische Kettenreaktionen abzuleiten - zum Beispiel könnte das Eliminieren eines Verdächtigen offenbaren, wer bestimmte Waffenkarten hat.",
          nl: "Een informatie cascade treedt op wanneer het ontdekken van één stuk informatie je in staat stelt verschillende andere feiten af te leiden door logische kettingreacties - bijvoorbeeld, het elimineren van een verdachte kan onthullen wie bepaalde wapenkaarten heeft."
        }
      },
      {
        question: {
          en: "Why is early-game information gathering different from late-game?",
          es: "¿Por qué la recopilación de información del juego temprano es diferente del juego tardío?",
          de: "Warum unterscheidet sich das Sammeln von Informationen im frühen Spiel vom späten Spiel?",
          nl: "Waarom verschilt vroeg-spel informatieverzameling van laat-spel?"
        },
        options: [
          { en: "Early game should cast wide net, late game should target specific unknowns", es: "El juego temprano debe lanzar una red amplia, el juego tardío debe apuntar a desconocidos específicos", de: "Frühes Spiel sollte ein weites Netz auswerfen, spätes Spiel sollte auf spezifische Unbekannte zielen", nl: "Vroeg spel moet breed net uitwerpen, laat spel moet specifieke onbekenden targeten" },
          { en: "They're the same - always suggest randomly", es: "Son lo mismo - siempre sugerir aleatoriamente", de: "Sie sind gleich - immer zufällig vorschlagen", nl: "Ze zijn hetzelfde - altijd willekeurig suggereren" },
          { en: "Early game should be cautious, late game aggressive", es: "El juego temprano debe ser cauteloso, el juego tardío agresivo", de: "Frühes Spiel sollte vorsichtig sein, spätes Spiel aggressiv", nl: "Vroeg spel moet voorzichtig zijn, laat spel agressief" },
          { en: "Late game gathering is less important", es: "La recopilación del juego tardío es menos importante", de: "Das Sammeln im späten Spiel ist weniger wichtig", nl: "Laat spel verzameling is minder belangrijk" }
        },
        correct: 0,
        explanation: {
          en: "Early game benefits from broad suggestions to eliminate many possibilities quickly. Late game requires targeted suggestions focused on the few remaining unknowns to make your final deduction.",
          es: "El juego temprano se beneficia de sugerencias amplias para eliminar muchas posibilidades rápidamente. El juego tardío requiere sugerencias dirigidas enfocadas en los pocos desconocidos restantes para hacer tu deducción final.",
          de: "Das frühe Spiel profitiert von breiten Vorschlägen, um viele Möglichkeiten schnell zu eliminieren. Das späte Spiel erfordert gezielte Vorschläge, die sich auf die wenigen verbleibenden Unbekannten konzentrieren, um deine endgültige Deduktion zu machen.",
          nl: "Vroeg spel profiteert van brede suggesties om veel mogelijkheden snel te elimineren. Laat spel vereist gerichte suggesties gericht op de weinige resterende onbekenden om je definitieve deductie te maken."
        }
      },
      {
        question: {
          en: "What is 'optimal suggestion composition'?",
          es: "¿Qué es la 'composición óptima de sugerencias'?",
          de: "Was ist 'optimale Vorschlagszusammensetzung'?",
          nl: "Wat is 'optimale suggestie samenstelling'?"
        },
        options: [
          { en: "Mixing known and unknown cards for maximum information gain", es: "Mezclar cartas conocidas y desconocidas para máxima ganancia de información", de: "Bekannte und unbekannte Karten mischen für maximalen Informationsgewinn", nl: "Bekende en onbekende kaarten mengen voor maximale informatie winst" },
          { en: "Always suggesting three unknowns", es: "Siempre sugerir tres desconocidos", de: "Immer drei Unbekannte vorschlagen", nl: "Altijd drie onbekenden suggereren" },
          { en: "Suggesting cards in alphabetical order", es: "Sugerir cartas en orden alfabético", de: "Karten in alphabetischer Reihenfolge vorschlagen", nl: "Kaarten in alfabetische volgorde suggereren" },
          { en: "Composing suggestions based on room location", es: "Componer sugerencias basadas en ubicación de habitación", de: "Vorschläge basierend auf Raumposition komponieren", nl: "Suggesties samenstellen op basis van kamerlocatie" }
        },
        correct: 0,
        explanation: {
          en: "Optimal composition balances known cards (to guarantee useful information from any response) with strategic unknown cards (to eliminate key possibilities). The exact mix depends on your current knowledge state.",
          es: "La composición óptima equilibra cartas conocidas (para garantizar información útil de cualquier respuesta) con cartas desconocidas estratégicas (para eliminar posibilidades clave). La mezcla exacta depende de tu estado de conocimiento actual.",
          de: "Optimale Zusammensetzung balanciert bekannte Karten (um nützliche Informationen aus jeder Antwort zu garantieren) mit strategisch unbekannten Karten (um Schlüsselmöglichkeiten zu eliminieren). Die genaue Mischung hängt von deinem aktuellen Wissenszustand ab.",
          nl: "Optimale samenstelling balanceert bekende kaarten (om nuttige informatie uit elk antwoord te garanderen) met strategisch onbekende kaarten (om belangrijke mogelijkheden te elimineren). De exacte mix hangt af van je huidige kennistoestand."
        }
      },
      {
        question: {
          en: "How can you exploit 'information leakage' from opponents?",
          es: "¿Cómo puedes explotar la 'filtración de información' de los oponentes?",
          de: "Wie kannst du 'Informationsleckage' von Gegnern ausnutzen?",
          nl: "Hoe kun je 'informatie lekkage' van tegenstanders uitbuiten?"
        },
        options: [
          { en: "Observing their body language and reaction times", es: "Observar su lenguaje corporal y tiempos de reacción", de: "Ihre Körpersprache und Reaktionszeiten beobachten", nl: "Hun lichaamstaal en reactietijden observeren" },
          { en: "Listening for verbal hints", es: "Escuchar pistas verbales", de: "Auf verbale Hinweise hören", nl: "Luisteren naar verbale hints" },
          { en: "Analyzing patterns in their suggestions", es: "Analizar patrones en sus sugerencias", de: "Muster in ihren Vorschlägen analysieren", nl: "Patronen in hun suggesties analyseren" },
          { en: "All can provide useful information", es: "Todos pueden proporcionar información útil", de: "Alle können nützliche Informationen liefern", nl: "Allemaal kunnen nuttige informatie bieden" }
        },
        correct: 3,
        explanation: {
          en: "Information leakage occurs through multiple channels: hesitation when showing cards, patterns in suggestions, reaction to others' suggestions, and even physical tells. Advanced players watch for all these signals.",
          es: "La filtración de información ocurre a través de múltiples canales: vacilación al mostrar cartas, patrones en sugerencias, reacción a sugerencias de otros, e incluso señales físicas. Los jugadores avanzados observan todas estas señales.",
          de: "Informationsleckage tritt über mehrere Kanäle auf: Zögern beim Zeigen von Karten, Muster in Vorschlägen, Reaktion auf Vorschläge anderer und sogar physische Anzeichen. Fortgeschrittene Spieler achten auf all diese Signale.",
          nl: "Informatie lekkage treedt op via meerdere kanalen: aarzeling bij het tonen van kaarten, patronen in suggesties, reactie op suggesties van anderen, en zelfs fysieke signalen. Gevorderde spelers letten op al deze signalen."
        }
      },
      {
        question: {
          en: "What is the 'endgame convergence' phenomenon?",
          es: "¿Qué es el fenómeno de 'convergencia de final de juego'?",
          de: "Was ist das 'Endspiel-Konvergenz'-Phänomen?",
          nl: "Wat is het 'eindspel convergentie' fenomeen?"
        },
        options: [
          { en: "All players reaching similar conclusions simultaneously", es: "Todos los jugadores llegando a conclusiones similares simultáneamente", de: "Alle Spieler erreichen ähnliche Schlussfolgerungen gleichzeitig", nl: "Alle spelers bereiken gelijktijdig vergelijkbare conclusies" },
          { en: "Players moving toward the same room", es: "Jugadores moviéndose hacia la misma habitación", de: "Spieler bewegen sich zum selben Raum", nl: "Spelers bewegen naar dezelfde kamer" },
          { en: "The game ending in a tie", es: "El juego terminando en empate", de: "Das Spiel endet unentschieden", nl: "Het spel eindigt in een gelijkspel" },
          { en: "Multiple accusations being made", es: "Se hacen múltiples acusaciones", de: "Mehrere Anschuldigungen werden gemacht", nl: "Meerdere beschuldigingen worden gemaakt" }
        ],
        correct: 0,
        explanation: {
          en: "Endgame convergence occurs when all players have gathered similar information and begin reaching the same conclusions about the solution, creating a race to make the first correct accusation.",
          es: "La convergencia de final de juego ocurre cuando todos los jugadores han recopilado información similar y comienzan a llegar a las mismas conclusiones sobre la solución, creando una carrera para hacer la primera acusación correcta.",
          de: "Endspiel-Konvergenz tritt auf, wenn alle Spieler ähnliche Informationen gesammelt haben und beginnen, zu denselben Schlussfolgerungen über die Lösung zu gelangen, was ein Rennen um die erste richtige Anschuldigung schafft.",
          nl: "Eindspel convergentie treedt op wanneer alle spelers vergelijkbare informatie hebben verzameld en beginnen dezelfde conclusies over de oplossing te bereiken, wat een race creëert om de eerste juiste beschuldiging te maken."
        }
      },
      {
        question: {
          en: "How does 'Bayesian updating' apply to Cluedo strategy?",
          es: "¿Cómo se aplica la 'actualización bayesiana' a la estrategia de Cluedo?",
          de: "Wie wird 'Bayesianisches Updating' auf Cluedo-Strategie angewendet?",
          nl: "Hoe is 'Bayesiaanse actualisatie' van toepassing op Cluedo strategie?"
        },
        options: [
          { en: "Continuously updating probability estimates as new info arrives", es: "Actualizar continuamente estimaciones de probabilidad a medida que llega nueva información", de: "Wahrscheinlichkeitsschätzungen kontinuierlich aktualisieren, wenn neue Informationen eintreffen", nl: "Continu waarschijnlijkheidsschattingen bijwerken naarmate nieuwe info binnenkomt" },
          { en: "Using Bayes' theorem to calculate dice probabilities", es: "Usar el teorema de Bayes para calcular probabilidades de dados", de: "Bayes-Theorem verwenden, um Würfelwahrscheinlichkeiten zu berechnen", nl: "Bayes' theorema gebruiken om dobbelsteenkansen te berekenen" },
          { en: "It doesn't apply to Cluedo", es: "No se aplica a Cluedo", de: "Es gilt nicht für Cluedo", nl: "Het is niet van toepassing op Cluedo" },
          { en: "Predicting opponents' next moves", es: "Predecir los próximos movimientos de los oponentes", de: "Die nächsten Züge der Gegner vorhersagen", nl: "Volgende zetten van tegenstanders voorspellen" }
        },
        correct: 0,
        explanation: {
          en: "Bayesian updating means continuously revising your probability estimates about which cards are in the solution based on each new piece of evidence, rather than treating each clue in isolation.",
          es: "La actualización bayesiana significa revisar continuamente tus estimaciones de probabilidad sobre qué cartas están en la solución basándose en cada nueva pieza de evidencia, en lugar de tratar cada pista de forma aislada.",
          de: "Bayesianisches Updating bedeutet, deine Wahrscheinlichkeitsschätzungen darüber, welche Karten in der Lösung sind, kontinuierlich auf Basis jedes neuen Beweises zu revidieren, anstatt jeden Hinweis isoliert zu behandeln.",
          nl: "Bayesiaanse actualisatie betekent continu je waarschijnlijkheidsschattingen herzien over welke kaarten in de oplossing zitten op basis van elk nieuw bewijs, in plaats van elke aanwijzing geïsoleerd te behandelen."
        }
      },
      {
        question: {
          en: "What is the 'false accusation risk assessment'?",
          es: "¿Qué es la 'evaluación de riesgo de acusación falsa'?",
          de: "Was ist die 'Falsche-Anschuldigung-Risikobewertung'?",
          nl: "Wat is de 'valse beschuldiging risicobeoordeling'?"
        },
        options: [
          { en: "Calculating when to accuse based on confidence level vs opponent progress", es: "Calcular cuándo acusar basándose en nivel de confianza vs progreso del oponente", de: "Berechnen, wann man anklagen sollte basierend auf Vertrauensniveau vs. Gegnerprogress", nl: "Berekenen wanneer te beschuldigen op basis van vertrouwensniveau vs. tegenstander voortgang" },
          { en: "Assessing penalty for wrong accusations", es: "Evaluar penalización por acusaciones incorrectas", de: "Strafe für falsche Anschuldigungen bewerten", nl: "Straf voor foute beschuldigingen beoordelen" },
          { en: "Predicting opponents' likelihood to accuse", es: "Predecir la probabilidad de que los oponentes acusen", de: "Wahrscheinlichkeit vorhersagen, dass Gegner anklagen", nl: "Waarschijnlijkheid voorspellen dat tegenstanders beschuldigen" },
          { en: "Risk assessment doesn't matter in Cluedo", es: "La evaluación de riesgo no importa en Cluedo", de: "Risikobewertung spielt in Cluedo keine Rolle", nl: "Risicobeoordeling doet er niet toe in Cluedo" }
        },
        correct: 0,
        explanation: {
          en: "Advanced players weigh the risk of a wrong accusation (elimination) against the risk of waiting (opponent might solve first). This involves assessing both your confidence level and opponents' apparent progress.",
          es: "Los jugadores avanzados sopesan el riesgo de una acusación incorrecta (eliminación) contra el riesgo de esperar (el oponente podría resolver primero). Esto implica evaluar tanto tu nivel de confianza como el progreso aparente de los oponentes.",
          de: "Fortgeschrittene Spieler wägen das Risiko einer falschen Anschuldigung (Eliminierung) gegen das Risiko des Wartens (Gegner könnte zuerst lösen) ab. Dies beinhaltet die Bewertung sowohl deines Vertrauensniveaus als auch des scheinbaren Fortschritts der Gegner.",
          nl: "Gevorderde spelers wegen het risico van een foute beschuldiging (eliminatie) af tegen het risico van wachten (tegenstander lost mogelijk eerst op). Dit houdt in het beoordelen van zowel je vertrouwensniveau als de schijnbare voortgang van tegenstanders."
        }
      },
      {
        question: {
          en: "What advanced concept is 'constraint propagation' in Cluedo?",
          es: "¿Qué concepto avanzado es la 'propagación de restricciones' en Cluedo?",
          de: "Was ist das fortgeschrittene Konzept 'Constraint Propagation' in Cluedo?",
          nl: "Wat is het geavanceerde concept 'constraint propagatie' in Cluedo?"
        },
        options: [
          { en: "How one eliminated card constrains other possibilities throughout the game", es: "Cómo una carta eliminada restringe otras posibilidades en todo el juego", de: "Wie eine eliminierte Karte andere Möglichkeiten im gesamten Spiel einschränkt", nl: "Hoe één geëlimineerde kaart andere mogelijkheden door het hele spel beperkt" },
          { en: "Spreading your suggestions across all rooms", es: "Distribuir tus sugerencias por todas las habitaciones", de: "Deine Vorschläge über alle Räume verteilen", nl: "Je suggesties verspreiden over alle kamers" },
          { en: "Teaching other players strategy", es: "Enseñar estrategia a otros jugadores", de: "Anderen Spielern Strategie beibringen", nl: "Andere spelers strategie leren" },
          { en: "Moving pieces efficiently", es: "Mover piezas eficientemente", de: "Figuren effizient bewegen", nl: "Stukken efficiënt bewegen" }
        ],
        correct: 0,
        explanation: {
          en: "Constraint propagation is recognizing how eliminating one card creates a cascade of logical constraints - if Player A doesn't have weapon X and you know they showed someone a weapon card, it must be weapon Y or Z.",
          es: "La propagación de restricciones es reconocer cómo eliminar una carta crea una cascada de restricciones lógicas - si el Jugador A no tiene el arma X y sabes que mostró una carta de arma a alguien, debe ser el arma Y o Z.",
          de: "Constraint Propagation bedeutet zu erkennen, wie das Eliminieren einer Karte eine Kaskade logischer Einschränkungen schafft - wenn Spieler A Waffe X nicht hat und du weißt, dass er jemandem eine Waffenkarte gezeigt hat, muss es Waffe Y oder Z sein.",
          nl: "Constraint propagatie is herkennen hoe het elimineren van één kaart een cascade van logische beperkingen creëert - als Speler A wapen X niet heeft en je weet dat ze iemand een wapenkaart toonden, moet het wapen Y of Z zijn."
        }
      },
      {
        question: {
          en: "What is 'meta-game awareness' in competitive Cluedo?",
          es: "¿Qué es la 'conciencia de meta-juego' en Cluedo competitivo?",
          de: "Was ist 'Meta-Game-Bewusstsein' im kompetitiven Cluedo?",
          nl: "Wat is 'meta-spel bewustzijn' in competitief Cluedo?"
        },
        options: [
          { en: "Understanding opponents' skill levels and adapting strategy", es: "Entender los niveles de habilidad de los oponentes y adaptar la estrategia", de: "Fähigkeitsniveaus der Gegner verstehen und Strategie anpassen", nl: "Vaardigheidsniveaus van tegenstanders begrijpen en strategie aanpassen" },
          { en: "Knowing the rules variations", es: "Conocer las variaciones de reglas", de: "Regelvariationen kennen", nl: "Regel variaties kennen" },
          { en: "Understanding board layout", es: "Entender el diseño del tablero", de: "Brett-Layout verstehen", nl: "Bord layout begrijpen" },
          { en: "Tracking game statistics", es: "Rastrear estadísticas del juego", de: "Spielstatistiken verfolgen", nl: "Spel statistieken bijhouden" }
        },
        correct: 0,
        explanation: {
          en: "Meta-game awareness means understanding your opponents' skill levels, tendencies, and strategies, then adapting your play accordingly - aggressive against beginners, more defensive against advanced players.",
          es: "La conciencia de meta-juego significa entender los niveles de habilidad, tendencias y estrategias de tus oponentes, luego adaptar tu juego en consecuencia - agresivo contra principiantes, más defensivo contra jugadores avanzados.",
          de: "Meta-Game-Bewusstsein bedeutet, die Fähigkeitsniveaus, Tendenzen und Strategien deiner Gegner zu verstehen und dein Spiel entsprechend anzupassen - aggressiv gegen Anfänger, defensiver gegen fortgeschrittene Spieler.",
          nl: "Meta-spel bewustzijn betekent de vaardigheidsniveaus, tendensen en strategieën van je tegenstanders begrijpen, en dan je spel dienovereenkomstig aanpassen - agressief tegen beginners, meer defensief tegen gevorderde spelers."
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
