// Quiz Template - Level 1: Bord spelletjes - Cluedo
(function() {
  const level1 = {
    name: {
      en: "Cluedo - Beginner",
      es: "Cluedo - Principiante",
      de: "Cluedo - Anfänger",
      nl: "Cluedo - Beginner"
    },
    questions: [
      {
        question: {
          en: "How many suspect characters are there in classic Cluedo?",
          es: "¿Cuántos personajes sospechosos hay en el Cluedo clásico?",
          de: "Wie viele verdächtige Charaktere gibt es im klassischen Cluedo?",
          nl: "Hoeveel verdachte personages zijn er in klassiek Cluedo?"
        },
        options: [
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "7", es: "7", de: "7", nl: "7" },
          { en: "8", es: "8", de: "8", nl: "8" }
        ],
        correct: 1,
        explanation: {
          en: "Classic Cluedo has 6 suspect characters: Miss Scarlett, Colonel Mustard, Mrs. White, Mr. Green, Mrs. Peacock, and Professor Plum.",
          es: "El Cluedo clásico tiene 6 personajes sospechosos: Miss Scarlett, Coronel Mustard, Mrs. White, Mr. Green, Mrs. Peacock y Profesor Plum.",
          de: "Das klassische Cluedo hat 6 verdächtige Charaktere: Miss Scarlett, Colonel Mustard, Mrs. White, Mr. Green, Mrs. Peacock und Professor Plum.",
          nl: "Klassiek Cluedo heeft 6 verdachte personages: Miss Scarlett, Colonel Mustard, Mrs. White, Mr. Green, Mrs. Peacock en Professor Plum."
        }
      },
      {
        question: {
          en: "Which weapon is NOT in the classic Cluedo game?",
          es: "¿Qué arma NO está en el juego clásico de Cluedo?",
          de: "Welche Waffe ist NICHT im klassischen Cluedo-Spiel?",
          nl: "Welk wapen zit er NIET in het klassieke Cluedo-spel?"
        },
        options: [
          { en: "Candlestick", es: "Candelabro", de: "Kerzenständer", nl: "Kandelaar" },
          { en: "Revolver", es: "Revólver", de: "Revolver", nl: "Revolver" },
          { en: "Poison", es: "Veneno", de: "Gift", nl: "Vergif" },
          { en: "Lead Pipe", es: "Tubería de plomo", de: "Bleiröhre", nl: "Loden pijp" }
        ],
        correct: 2,
        explanation: {
          en: "Poison is not one of the 6 classic weapons. The weapons are: Candlestick, Dagger, Lead Pipe, Revolver, Rope, and Spanner/Wrench.",
          es: "El veneno no es una de las 6 armas clásicas. Las armas son: Candelabro, Daga, Tubería de plomo, Revólver, Cuerda y Llave inglesa.",
          de: "Gift ist nicht eine der 6 klassischen Waffen. Die Waffen sind: Kerzenständer, Dolch, Bleiröhre, Revolver, Seil und Schraubenschlüssel.",
          nl: "Vergif is niet een van de 6 klassieke wapens. De wapens zijn: Kandelaar, Dolk, Loden pijp, Revolver, Touw en Moersleutel."
        }
      },
      {
        question: {
          en: "How many rooms are there on the classic Cluedo board?",
          es: "¿Cuántas habitaciones hay en el tablero clásico de Cluedo?",
          de: "Wie viele Räume gibt es auf dem klassischen Cluedo-Brett?",
          nl: "Hoeveel kamers zijn er op het klassieke Cluedo-bord?"
        },
        options: [
          { en: "7", es: "7", de: "7", nl: "7" },
          { en: "8", es: "8", de: "8", nl: "8" },
          { en: "9", es: "9", de: "9", nl: "9" },
          { en: "10", es: "10", de: "10", nl: "10" }
        ],
        correct: 2,
        explanation: {
          en: "There are 9 rooms in classic Cluedo: Kitchen, Ballroom, Conservatory, Dining Room, Billiard Room, Library, Lounge, Hall, and Study.",
          es: "Hay 9 habitaciones en el Cluedo clásico: Cocina, Salón de baile, Invernadero, Comedor, Sala de billar, Biblioteca, Salón, Vestíbulo y Estudio.",
          de: "Es gibt 9 Räume im klassischen Cluedo: Küche, Ballsaal, Wintergarten, Esszimmer, Billardzimmer, Bibliothek, Salon, Halle und Arbeitszimmer.",
          nl: "Er zijn 9 kamers in klassiek Cluedo: Keuken, Balzaal, Serre, Eetkamer, Biljarttkamer, Bibliotheek, Salon, Hal en Studeerkamer."
        }
      },
      {
        question: {
          en: "What is the objective of Cluedo?",
          es: "¿Cuál es el objetivo del Cluedo?",
          de: "Was ist das Ziel von Cluedo?",
          nl: "Wat is het doel van Cluedo?"
        },
        options: [
          { en: "Collect the most cards", es: "Recoger la mayoría de cartas", de: "Die meisten Karten sammeln", nl: "De meeste kaarten verzamelen" },
          { en: "Solve the murder mystery", es: "Resolver el misterio del asesinato", de: "Das Mordmysterium lösen", nl: "Het moordmysterie oplossen" },
          { en: "Reach the center first", es: "Llegar al centro primero", de: "Zuerst das Zentrum erreichen", nl: "Eerst het centrum bereiken" },
          { en: "Eliminate other players", es: "Eliminar a otros jugadores", de: "Andere Spieler eliminieren", nl: "Andere spelers elimineren" }
        ],
        correct: 1,
        explanation: {
          en: "The objective is to solve the murder mystery by determining who committed the murder, with which weapon, and in which room.",
          es: "El objetivo es resolver el misterio del asesinato determinando quién cometió el asesinato, con qué arma y en qué habitación.",
          de: "Das Ziel ist es, das Mordmysterium zu lösen, indem man bestimmt, wer den Mord begangen hat, mit welcher Waffe und in welchem Raum.",
          nl: "Het doel is het moordmysterie op te lossen door te bepalen wie de moord heeft gepleegd, met welk wapen en in welke kamer."
        }
      },
      {
        question: {
          en: "Which character traditionally starts first in Cluedo?",
          es: "¿Qué personaje tradicionalmente comienza primero en Cluedo?",
          de: "Welcher Charakter beginnt traditionell zuerst in Cluedo?",
          nl: "Welk personage begint traditioneel als eerste in Cluedo?"
        },
        options: [
          { en: "Miss Scarlett", es: "Miss Scarlett", de: "Miss Scarlett", nl: "Miss Scarlett" },
          { en: "Colonel Mustard", es: "Coronel Mustard", de: "Colonel Mustard", nl: "Colonel Mustard" },
          { en: "Mrs. White", es: "Mrs. White", de: "Mrs. White", nl: "Mrs. White" },
          { en: "Professor Plum", es: "Profesor Plum", de: "Professor Plum", nl: "Professor Plum" }
        ],
        correct: 0,
        explanation: {
          en: "Miss Scarlett traditionally goes first in Cluedo, as she is positioned nearest to the starting square on the board.",
          es: "Miss Scarlett tradicionalmente va primera en Cluedo, ya que está posicionada más cerca de la casilla de inicio en el tablero.",
          de: "Miss Scarlett geht traditionell zuerst in Cluedo, da sie am nächsten zum Startfeld auf dem Brett positioniert ist.",
          nl: "Miss Scarlett gaat traditioneel als eerste in Cluedo, omdat zij het dichtst bij het startveld op het bord staat."
        }
      },
      {
        question: {
          en: "What happens when you make an incorrect accusation in Cluedo?",
          es: "¿Qué pasa cuando haces una acusación incorrecta en Cluedo?",
          de: "Was passiert, wenn man eine falsche Anschuldigung in Cluedo macht?",
          nl: "Wat gebeurt er als je een onjuiste beschuldiging maakt in Cluedo?"
        },
        options: [
          { en: "You lose a turn", es: "Pierdes un turno", de: "Du verlierst eine Runde", nl: "Je verliest een beurt" },
          { en: "You are eliminated", es: "Eres eliminado del juego", de: "Du wirst aus dem Spiel eliminiert", nl: "Je wordt uit het spel geëlimineerd" },
          { en: "You must show a card", es: "Debes mostrar una carta", de: "Du musst eine Karte zeigen", nl: "Je moet een kaart tonen" },
          { en: "Nothing happens", es: "No pasa nada", de: "Nichts passiert", nl: "Er gebeurt niets" }
        ],
        correct: 1,
        explanation: {
          en: "If you make an incorrect accusation, you are eliminated from the game and cannot win, though you still participate by showing cards to other players.",
          es: "Si haces una acusación incorrecta, eres eliminado del juego y no puedes ganar, aunque aún participas mostrando cartas a otros jugadores.",
          de: "Wenn du eine falsche Anschuldigung machst, wirst du aus dem Spiel eliminiert und kannst nicht gewinnen, obwohl du noch teilnimmst, indem du anderen Spielern Karten zeigst.",
          nl: "Als je een onjuiste beschuldiging maakt, word je uit het spel geëlimineerd en kun je niet winnen, hoewel je nog steeds deelneemt door kaarten aan andere spelers te tonen."
        }
      },
      {
        question: {
          en: "How many cards are in a standard Cluedo deck?",
          es: "¿Cuántas cartas hay en una baraja estándar de Cluedo?",
          de: "Wie viele Karten gibt es in einem Standard-Cluedo-Deck?",
          nl: "Hoeveel kaarten zitten er in een standaard Cluedo-deck?"
        },
        options: [
          { en: "18", es: "18", de: "18", nl: "18" },
          { en: "21", es: "21", de: "21", nl: "21" },
          { en: "24", es: "24", de: "24", nl: "24" },
          { en: "27", es: "27", de: "27", nl: "27" }
        ],
        correct: 1,
        explanation: {
          en: "There are 21 cards total: 6 character cards, 6 weapon cards, and 9 room cards.",
          es: "Hay 21 cartas en total: 6 cartas de personajes, 6 cartas de armas y 9 cartas de habitaciones.",
          de: "Es gibt insgesamt 21 Karten: 6 Charakterkarten, 6 Waffenkarten und 9 Raumkarten.",
          nl: "Er zijn in totaal 21 kaarten: 6 personagekaarten, 6 wapenkaarten en 9 kamerkaarten."
        }
      },
      {
        question: {
          en: "What are the secret passages in classic Cluedo?",
          es: "¿Cuáles son los pasajes secretos en el Cluedo clásico?",
          de: "Was sind die Geheimgänge im klassischen Cluedo?",
          nl: "Wat zijn de geheime gangen in klassiek Cluedo?"
        },
        options: [
          { en: "Kitchen to Study, Conservatory to Lounge", es: "Cocina a Estudio, Invernadero a Salón", de: "Küche zum Arbeitszimmer, Wintergarten zum Salon", nl: "Keuken naar Studeerkamer, Serre naar Salon" },
          { en: "Library to Ballroom, Hall to Dining Room", es: "Biblioteca a Salón de baile, Vestíbulo a Comedor", de: "Bibliothek zum Ballsaal, Halle zum Esszimmer", nl: "Bibliotheek naar Balzaal, Hal naar Eetkamer" },
          { en: "Study to Billiard Room, Kitchen to Hall", es: "Estudio a Sala de billar, Cocina a Vestíbulo", de: "Arbeitszimmer zum Billardzimmer, Küche zur Halle", nl: "Studeerkamer naar Biljarttkamer, Keuken naar Hal" },
          { en: "There are no secret passages", es: "No hay pasajes secretos", de: "Es gibt keine Geheimgänge", nl: "Er zijn geen geheime gangen" }
        ],
        correct: 0,
        explanation: {
          en: "There are two secret passages: one connecting the Kitchen to the Study, and another connecting the Conservatory to the Lounge.",
          es: "Hay dos pasajes secretos: uno que conecta la Cocina con el Estudio, y otro que conecta el Invernadero con el Salón.",
          de: "Es gibt zwei Geheimgänge: einer verbindet die Küche mit dem Arbeitszimmer, und ein anderer verbindet den Wintergarten mit dem Salon.",
          nl: "Er zijn twee geheime gangen: een die de Keuken met de Studeerkamer verbindt, en een andere die de Serre met de Salon verbindt."
        }
      },
      {
        question: {
          en: "What is a 'suggestion' in Cluedo?",
          es: "¿Qué es una 'sugerencia' en Cluedo?",
          de: "Was ist ein 'Vorschlag' in Cluedo?",
          nl: "Wat is een 'suggestie' in Cluedo?"
        },
        options: [
          { en: "A final answer to solve the mystery", es: "Una respuesta final para resolver el misterio", de: "Eine endgültige Antwort zur Lösung des Mysteriums", nl: "Een eindantwoord om het mysterie op te lossen" },
          { en: "A guess about the murder details", es: "Una suposición sobre los detalles del asesinato", de: "Eine Vermutung über die Morddetails", nl: "Een gok over de moorddetails" },
          { en: "A hint given to other players", es: "Una pista dada a otros jugadores", de: "Ein Hinweis an andere Spieler", nl: "Een hint gegeven aan andere spelers" },
          { en: "A request to see someone's cards", es: "Una solicitud para ver las cartas de alguien", de: "Eine Bitte, jemandes Karten zu sehen", nl: "Een verzoek om iemands kaarten te zien" }
        ],
        correct: 1,
        explanation: {
          en: "A suggestion is a guess about who, what weapon, and which room, made when you're in a room. Other players must show you cards if they have them.",
          es: "Una sugerencia es una suposición sobre quién, qué arma y qué habitación, hecha cuando estás en una habitación. Otros jugadores deben mostrarte cartas si las tienen.",
          de: "Ein Vorschlag ist eine Vermutung über wer, welche Waffe und welcher Raum, gemacht wenn du in einem Raum bist. Andere Spieler müssen dir Karten zeigen, wenn sie welche haben.",
          nl: "Een suggestie is een gok over wie, welk wapen en welke kamer, gemaakt wanneer je in een kamer bent. Andere spelers moeten je kaarten tonen als ze die hebben."
        }
      },
      {
        question: {
          en: "Which room is in the center of the classic Cluedo board?",
          es: "¿Qué habitación está en el centro del tablero clásico de Cluedo?",
          de: "Welcher Raum ist in der Mitte des klassischen Cluedo-Bretts?",
          nl: "Welke kamer bevindt zich in het centrum van het klassieke Cluedo-bord?"
        },
        options: [
          { en: "Hall", es: "Vestíbulo", de: "Halle", nl: "Hal" },
          { en: "Dining Room", es: "Comedor", de: "Esszimmer", nl: "Eetkamer" },
          { en: "No room in center", es: "No hay habitación en el centro", de: "Es gibt keinen Raum in der Mitte", nl: "Er is geen kamer in het centrum" },
          { en: "Library", es: "Biblioteca", de: "Bibliothek", nl: "Bibliotheek" }
        ],
        correct: 2,
        explanation: {
          en: "No room in center of the board. The center consists of empty spaces that players move through.",
          es: "No hay habitación en el centro del tablero. El centro consiste en espacios vacíos por los que se mueven los jugadores.",
          de: "Es gibt keinen Raum in der Mitte des Bretts. Das Zentrum besteht aus leeren Feldern, durch die sich die Spieler bewegen.",
          nl: "Er is geen kamer in het centrum van het bord. Het centrum bestaat uit lege vakjes waar spelers doorheen bewegen."
        }
      },
      {
        question: {
          en: "What happens if no one can show you a card during a suggestion?",
          es: "¿Qué pasa si nadie puede mostrarte una carta durante una sugerencia?",
          de: "Was passiert, wenn niemand dir eine Karte während eines Vorschlags zeigen kann?",
          nl: "Wat gebeurt er als niemand je een kaart kan tonen tijdens een suggestie?"
        },
        options: [
          { en: "You win the game", es: "Ganas el juego", de: "Du gewinnst das Spiel", nl: "Je wint het spel" },
          { en: "Your turn ends", es: "Tu turno termina", de: "Dein Zug endet", nl: "Je beurt eindigt" },
          { en: "Get valuable information", es: "Obtienes información valiosa", de: "Du erhältst wertvolle Informationen", nl: "Je krijgt waardevolle informatie" },
          { en: "You must make an accusation", es: "Debes hacer una acusación", de: "Du musst eine Anschuldigung machen", nl: "Je moet een beschuldiging maken" }
        ],
        correct: 2,
        explanation: {
          en: "If no one can show you a card, you gain valuable information - those three cards might be the solution to the mystery!",
          es: "Si nadie puede mostrarte una carta, obtienes información valiosa: ¡esas tres cartas podrían ser la solución del misterio!",
          de: "Wenn niemand dir eine Karte zeigen kann, erhältst du wertvolle Informationen - diese drei Karten könnten die Lösung des Mysteriums sein!",
          nl: "Als niemand je een kaart kan tonen, krijg je waardevolle informatie - die drie kaarten zouden de oplossing van het mysterie kunnen zijn!"
        }
      },
      {
        question: {
          en: "How do you move between rooms in Cluedo?",
          es: "¿Cómo te mueves entre habitaciones en Cluedo?",
          de: "Wie bewegst du dich zwischen Räumen in Cluedo?",
          nl: "Hoe beweeg je tussen kamers in Cluedo?"
        },
        options: [
          { en: "Roll dice and move that many spaces", es: "Tira dados y muévete esa cantidad de espacios", de: "Würfle und bewege dich so viele Felder", nl: "Gooi dobbelstenen en beweeg zoveel vakjes" },
          { en: "Move directly from room to room", es: "Muévete directamente de habitación a habitación", de: "Bewege dich direkt von Raum zu Raum", nl: "Beweeg direct van kamer naar kamer" },
          { en: "Use secret passages only", es: "Usa solo pasajes secretos", de: "Verwende nur Geheimgänge", nl: "Gebruik alleen geheime gangen" },
          { en: "Ask other players for permission", es: "Pide permiso a otros jugadores", de: "Bitte andere Spieler um Erlaubnis", nl: "Vraag andere spelers om toestemming" }
        ],
        correct: 0,
        explanation: {
          en: "You roll dice and move that many spaces through corridors and doorways to enter rooms, or you can use secret passages without rolling.",
          es: "Tiras dados y te mueves esa cantidad de espacios a través de corredores y puertas para entrar a las habitaciones, o puedes usar pasajes secretos sin tirar.",
          de: "Du würfelst und bewegst dich so viele Felder durch Korridore und Türen, um Räume zu betreten, oder du kannst Geheimgänge ohne Würfeln verwenden.",
          nl: "Je gooit dobbelstenen en beweegt zoveel vakjes door gangen en deuren om kamers binnen te gaan, of je kunt geheime gangen gebruiken zonder te gooien."
        }
      },
      {
        question: {
          en: "What is the minimum number of players needed for Cluedo?",
          es: "¿Cuál es el número mínimo de jugadores necesarios para Cluedo?",
          de: "Wie viele Spieler werden mindestens für Cluedo benötigt?",
          nl: "Wat is het minimum aantal spelers dat nodig is voor Cluedo?"
        },
        options: [
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "6", es: "6", de: "6", nl: "6" }
        ],
        correct: 1,
        explanation: {
          en: "Cluedo requires a minimum of 3 players to function properly, though it's more enjoyable with 4-6 players.",
          es: "Cluedo requiere un mínimo de 3 jugadores para funcionar correctamente, aunque es más divertido con 4-6 jugadores.",
          de: "Cluedo benötigt mindestens 3 Spieler, um richtig zu funktionieren, obwohl es mit 4-6 Spielern mehr Spaß macht.",
          nl: "Cluedo vereist minimaal 3 spelers om goed te functioneren, hoewel het leuker is met 4-6 spelers."
        }
      },
      {
        question: {
          en: "Which of these is NOT a classic Cluedo character?",
          es: "¿Cuál de estos NO es un personaje clásico de Cluedo?",
          de: "Welcher dieser ist KEIN klassischer Cluedo-Charakter?",
          nl: "Welke van deze is GEEN klassiek Cluedo-personage?"
        },
        options: [
          { en: "Mrs. Peacock", es: "Mrs. Peacock", de: "Mrs. Peacock", nl: "Mrs. Peacock" },
          { en: "Dr. Black", es: "Dr. Black", de: "Dr. Black", nl: "Dr. Black" },
          { en: "Mr. Green", es: "Mr. Green", de: "Mr. Green", nl: "Mr. Green" },
          { en: "Professor Plum", es: "Profesor Plum", de: "Professor Plum", nl: "Professor Plum" }
        ],
        correct: 1,
        explanation: {
          en: "Dr. Black (or Mr. Boddy) is the murder victim, not a playable character. The 6 suspects are the playable characters.",
          es: "Dr. Black (o Mr. Boddy) es la víctima del asesinato, no un personaje jugable. Los 6 sospechosos son los personajes jugables.",
          de: "Dr. Black (oder Mr. Boddy) ist das Mordopfer, kein spielbarer Charakter. Die 6 Verdächtigen sind die spielbaren Charaktere.",
          nl: "Dr. Black (of Mr. Boddy) is het moordslachtoffer, geen speelbaar personage. De 6 verdachten zijn de speelbare personages."
        }
      },
      {
        question: {
          en: "What happens when you suggest a character that another player is using?",
          es: "¿Qué pasa cuando sugieres un personaje que otro jugador está usando?",
          de: "Was passiert, wenn du einen Charakter vorschlägst, den ein anderer Spieler verwendet?",
          nl: "Wat gebeurt er als je een personage suggereert dat een andere speler gebruikt?"
        },
        options: [
          { en: "The suggestion is invalid", es: "La sugerencia es inválida", de: "Der Vorschlag ist ungültig", nl: "De suggestie is ongeldig" },
          { en: "That player moves to the room", es: "Ese jugador se mueve a la habitación", de: "Dieser Spieler bewegt sich in den Raum", nl: "Die speler beweegt naar de kamer" },
          { en: "You switch characters", es: "Cambias de personajes", de: "Du wechselst die Charaktere", nl: "Je wisselt van personages" },
          { en: "The player is eliminated", es: "El jugador es eliminado", de: "Der Spieler wird eliminiert", nl: "De speler wordt geëlimineerd" }
        ],
        correct: 1,
        explanation: {
          en: "When you suggest a character that another player is using, that player must immediately move their piece to the room you suggested.",
          es: "Cuando sugieres un personaje que otro jugador está usando, ese jugador debe mover inmediatamente su pieza a la habitación que sugeriste.",
          de: "Wenn du einen Charakter vorschlägst, den ein anderer Spieler verwendet, muss dieser Spieler sofort seine Figur in den Raum bewegen, den du vorgeschlagen hast.",
          nl: "Wanneer je een personage suggereert dat een andere speler gebruikt, moet die speler onmiddellijk hun pion naar de kamer verplaatsen die je suggereerde."
        }
      },
      {
        question: {
          en: "How many dice do you typically roll in Cluedo?",
          es: "¿Cuántos dados tiras típicamente en Cluedo?",
          de: "Wie viele Würfel würfelst du normalerweise in Cluedo?",
          nl: "Hoeveel dobbelstenen gooi je normaal gesproken in Cluedo?"
        },
        options: [
          { en: "1", es: "1", de: "1", nl: "1" },
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "It varies", es: "Varía", de: "Es variiert", nl: "Het varieert" }
        ],
        correct: 1,
        explanation: {
          en: "In classic Cluedo, you roll 2 dice to determine how many spaces you can move on your turn.",
          es: "En el Cluedo clásico, tiras 2 dados para determinar cuántos espacios puedes moverte en tu turno.",
          de: "Im klassischen Cluedo würfelst du 2 Würfel, um zu bestimmen, wie viele Felder du in deinem Zug bewegen kannst.",
          nl: "In klassiek Cluedo gooi je 2 dobbelstenen om te bepalen hoeveel vakjes je kunt bewegen in je beurt."
        }
      },
      {
        question: {
          en: "What information is contained in the 'case file' envelope?",
          es: "¿Qué información contiene el sobre del 'expediente del caso'?",
          de: "Welche Informationen enthält der 'Fallakten'-Umschlag?",
          nl: "Welke informatie bevat de 'dossier'-envelop?"
        },
        options: [
          { en: "Extra weapons and rooms", es: "Armas y habitaciones extra", de: "Zusätzliche Waffen und Räume", nl: "Extra wapens en kamers" },
          { en: "The solution to the mystery", es: "La solución del misterio", de: "Die Lösung des Mysteriums", nl: "De oplossing van het mysterie" },
          { en: "Bonus point cards", es: "Cartas de puntos bonus", de: "Bonuspunktkarten", nl: "Bonuspuntenkaarten" },
          { en: "Instructions for gameplay", es: "Instrucciones para el juego", de: "Spielanweisungen", nl: "Spelregels" }
        ],
        correct: 1,
        explanation: {
          en: "The case file envelope contains one card from each category (character, weapon, room) - these represent the solution to the murder mystery.",
          es: "El sobre del expediente contiene una carta de cada categoría (personaje, arma, habitación) - estas representan la solución del misterio del asesinato.",
          de: "Der Fallakten-Umschlag enthält eine Karte aus jeder Kategorie (Charakter, Waffe, Raum) - diese stellen die Lösung des Mordmysteriums dar.",
          nl: "De dossier-envelop bevat één kaart uit elke categorie (personage, wapen, kamer) - deze vertegenwoordigen de oplossing van het moordmysterie."
        }
      },
      {
        question: {
          en: "Can you make suggestions when you're not in a room?",
          es: "¿Puedes hacer sugerencias cuando no estás en una habitación?",
          de: "Kannst du Vorschläge machen, wenn du nicht in einem Raum bist?",
          nl: "Kun je suggesties doen als je niet in een kamer bent?"
        },
        options: [
          { en: "Yes, anytime", es: "Sí, en cualquier momento", de: "Ja, jederzeit", nl: "Ja, altijd" },
          { en: "No, only in rooms", es: "No, solo en habitaciones", de: "Nein, nur in Räumen", nl: "Nee, alleen in kamers" },
          { en: "Only in corridors", es: "Solo en corredores", de: "Nur in Korridoren", nl: "Alleen in gangen" },
          { en: "Only with special cards", es: "Solo con cartas especiales", de: "Nur mit speziellen Karten", nl: "Alleen met speciale kaarten" }
        ],
        correct: 1,
        explanation: {
          en: "You can only make suggestions when you are inside a room. The room you're in must be the room you suggest in your hypothesis.",
          es: "Solo puedes hacer sugerencias cuando estás dentro de una habitación. La habitación en la que estás debe ser la habitación que sugieres en tu hipótesis.",
          de: "Du kannst nur Vorschläge machen, wenn du in einem Raum bist. Der Raum, in dem du dich befindest, muss der Raum sein, den du in deiner Hypothese vorschlägst.",
          nl: "Je kunt alleen suggesties doen wanneer je in een kamer bent. De kamer waarin je bent moet de kamer zijn die je in je hypothese suggereert."
        }
      },
      {
        question: {
          en: "What is the original name of the game known as Cluedo?",
          es: "¿Cuál es el nombre original del juego conocido como Cluedo?",
          de: "Wie heißt das ursprünglich als Cluedo bekannte Spiel?",
          nl: "Wat is de oorspronkelijke naam van het spel dat bekend staat als Cluedo?"
        },
        options: [
          { en: "Murder Mystery", es: "Misterio de asesinato", de: "Mordmysterium", nl: "Moordmysterie" },
          { en: "Clue", es: "Pista", de: "Hinweis", nl: "Aanwijzing" },
          { en: "Detective", es: "Detective", de: "Detektiv", nl: "Detective" },
          { en: "Clue and Cluedo", es: "Tanto Clue como Cluedo", de: "Sowohl Clue als auch Cluedo", nl: "Zowel Clue als Cluedo" }
        ],
        correct: 3,
        explanation: {
          en: "The game is called 'Clue' in North America and 'Cluedo' in most other countries. Both names are official versions of the same game.",
          es: "El juego se llama 'Clue' en América del Norte y 'Cluedo' en la mayoría de otros países. Ambos nombres son versiones oficiales del mismo juego.",
          de: "Das Spiel heißt 'Clue' in Nordamerika und 'Cluedo' in den meisten anderen Ländern. Beide Namen sind offizielle Versionen desselben Spiels.",
          nl: "Het spel heet 'Clue' in Noord-Amerika en 'Cluedo' in de meeste andere landen. Beide namen zijn officiële versies van hetzelfde spel."
        }
      },
      {
        question: {
          en: "How many different combinations of suspect, weapon, and room are possible in Cluedo?",
          es: "¿Cuántas combinaciones diferentes de sospechoso, arma y habitación son posibles en Cluedo?",
          de: "Wie viele verschiedene Kombinationen von Verdächtigen, Waffe und Raum sind in Cluedo möglich?",
          nl: "Hoeveel verschillende combinaties van verdachte, wapen en kamer zijn mogelijk in Cluedo?"
        },
        options: [
          { en: "216", es: "216", de: "216", nl: "216" },
          { en: "324", es: "324", de: "324", nl: "324" },
          { en: "432", es: "432", de: "432", nl: "432" },
          { en: "546", es: "546", de: "546", nl: "546" }
        ],
        correct: 1,
        explanation: {
          en: "With 6 suspects, 6 weapons, and 9 rooms, there are 6 × 6 × 9 = 324 possible combinations for the solution in Cluedo, making each game unique and challenging.",
          es: "Con 6 sospechosos, 6 armas y 9 habitaciones, hay 6 × 6 × 9 = 324 combinaciones posibles para la solución en Cluedo, haciendo cada juego único y desafiante.",
          de: "Mit 6 Verdächtigen, 6 Waffen und 9 Räumen gibt es 6 × 6 × 9 = 324 mögliche Kombinationen für die Lösung in Cluedo, was jedes Spiel einzigartig und herausfordernd macht.",
          nl: "Met 6 verdachten, 6 wapens en 9 kamers zijn er 6 × 6 × 9 = 324 mogelijke combinaties voor de oplossing in Cluedo, waardoor elk spel uniek en uitdagend is."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  } else if (typeof window !== 'undefined') {
    window.level1 = level1;
  }
})();