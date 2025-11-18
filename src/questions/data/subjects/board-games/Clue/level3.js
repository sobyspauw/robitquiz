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
