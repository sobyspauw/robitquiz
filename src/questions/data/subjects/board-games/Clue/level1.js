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
      },
      {
        question: {
          en: "What color is Miss Scarlett's playing piece?",
          es: "¿De qué color es la pieza de juego de Miss Scarlett?",
          de: "Welche Farbe hat die Spielfigur von Miss Scarlett?",
          nl: "Welke kleur heeft het speelstuk van Miss Scarlett?"
        },
        options: [
          { en: "Red", es: "Rojo", de: "Rot", nl: "Rood" },
          { en: "Pink", es: "Rosa", de: "Rosa", nl: "Roze" },
          { en: "Purple", es: "Morado", de: "Lila", nl: "Paars" },
          { en: "Yellow", es: "Amarillo", de: "Gelb", nl: "Geel" }
        ],
        correct: 0,
        explanation: {
          en: "Miss Scarlett's playing piece is red, matching her name which references the color scarlet (a bright red).",
          es: "La pieza de juego de Miss Scarlett es roja, coincidiendo con su nombre que hace referencia al color escarlata (un rojo brillante).",
          de: "Die Spielfigur von Miss Scarlett ist rot, passend zu ihrem Namen, der sich auf die Farbe Scharlachrot (ein leuchtendes Rot) bezieht.",
          nl: "Het speelstuk van Miss Scarlett is rood, passend bij haar naam die verwijst naar de kleur scharlaken (een helder rood)."
        }
      },
      {
        question: {
          en: "Which weapon in Cluedo is typically made of rope?",
          es: "¿Qué arma en Cluedo está típicamente hecha de cuerda?",
          de: "Welche Waffe in Cluedo besteht typischerweise aus Seil?",
          nl: "Welk wapen in Cluedo is meestal gemaakt van touw?"
        },
        options: [
          { en: "Lead Pipe", es: "Tubería de plomo", de: "Bleiröhre", nl: "Loden pijp" },
          { en: "Rope", es: "Cuerda", de: "Seil", nl: "Touw" },
          { en: "Candlestick", es: "Candelabro", de: "Kerzenständer", nl: "Kandelaar" },
          { en: "Spanner", es: "Llave inglesa", de: "Schraubenschlüssel", nl: "Moersleutel" }
        ],
        correct: 1,
        explanation: {
          en: "The Rope is one of the six classic weapons in Cluedo, and as its name suggests, it is made of rope.",
          es: "La Cuerda es una de las seis armas clásicas en Cluedo, y como su nombre sugiere, está hecha de cuerda.",
          de: "Das Seil ist eine der sechs klassischen Waffen in Cluedo, und wie der Name schon sagt, besteht es aus Seil.",
          nl: "Het Touw is een van de zes klassieke wapens in Cluedo, en zoals de naam al aangeeft, is het gemaakt van touw."
        }
      },
      {
        question: {
          en: "Can you enter a room if another player is already there?",
          es: "¿Puedes entrar a una habitación si otro jugador ya está allí?",
          de: "Kannst du einen Raum betreten, wenn ein anderer Spieler bereits dort ist?",
          nl: "Kun je een kamer binnengaan als een andere speler er al is?"
        },
        options: [
          { en: "No, rooms can only hold one player", es: "No, las habitaciones solo pueden albergar un jugador", de: "Nein, Räume können nur einen Spieler aufnehmen", nl: "Nee, kamers kunnen maar één speler bevatten" },
          { en: "Yes, multiple players can be in same room", es: "Sí, múltiples jugadores pueden estar en la misma habitación", de: "Ja, mehrere Spieler können im selben Raum sein", nl: "Ja, meerdere spelers kunnen in dezelfde kamer zijn" },
          { en: "Only if you have permission", es: "Solo si tienes permiso", de: "Nur mit Erlaubnis", nl: "Alleen met toestemming" },
          { en: "Only through secret passages", es: "Solo a través de pasajes secretos", de: "Nur durch Geheimgänge", nl: "Alleen via geheime gangen" }
        ],
        correct: 1,
        explanation: {
          en: "Yes, multiple players can be in the same room at the same time in Cluedo. There's no limit to how many players can occupy a room.",
          es: "Sí, múltiples jugadores pueden estar en la misma habitación al mismo tiempo en Cluedo. No hay límite de cuántos jugadores pueden ocupar una habitación.",
          de: "Ja, mehrere Spieler können gleichzeitig im selben Raum in Cluedo sein. Es gibt keine Begrenzung, wie viele Spieler einen Raum besetzen können.",
          nl: "Ja, meerdere spelers kunnen tegelijkertijd in dezelfde kamer zijn in Cluedo. Er is geen limiet aan hoeveel spelers een kamer kunnen bezetten."
        }
      },
      {
        question: {
          en: "What happens to the weapon piece when you make a suggestion?",
          es: "¿Qué pasa con la pieza de arma cuando haces una sugerencia?",
          de: "Was passiert mit der Waffenfigur, wenn du einen Vorschlag machst?",
          nl: "Wat gebeurt er met het wapenstuk als je een suggestie doet?"
        },
        options: [
          { en: "It stays where it was", es: "Se queda donde estaba", de: "Es bleibt, wo es war", nl: "Het blijft waar het was" },
          { en: "It moves to the room you're in", es: "Se mueve a la habitación en la que estás", de: "Es bewegt sich in den Raum, in dem du bist", nl: "Het verplaatst naar de kamer waarin je bent" },
          { en: "It's removed from the board", es: "Se quita del tablero", de: "Es wird vom Brett entfernt", nl: "Het wordt van het bord verwijderd" },
          { en: "It goes to the center", es: "Va al centro", de: "Es geht zur Mitte", nl: "Het gaat naar het centrum" }
        ],
        correct: 1,
        explanation: {
          en: "When you suggest a weapon, that weapon piece is moved into the room you're currently in, just like character pieces.",
          es: "Cuando sugieres un arma, esa pieza de arma se mueve a la habitación en la que estás actualmente, al igual que las piezas de personajes.",
          de: "Wenn du eine Waffe vorschlägst, wird diese Waffenfigur in den Raum bewegt, in dem du dich gerade befindest, genau wie Charakterfiguren.",
          nl: "Wanneer je een wapen suggereert, wordt dat wapenstuk verplaatst naar de kamer waarin je je momenteel bevindt, net als personagestukken."
        }
      },
      {
        question: {
          en: "Who was the original creator of Cluedo?",
          es: "¿Quién fue el creador original de Cluedo?",
          de: "Wer war der ursprüngliche Schöpfer von Cluedo?",
          nl: "Wie was de oorspronkelijke maker van Cluedo?"
        },
        options: [
          { en: "Anthony Pratt", es: "Anthony Pratt", de: "Anthony Pratt", nl: "Anthony Pratt" },
          { en: "Milton Bradley", es: "Milton Bradley", de: "Milton Bradley", nl: "Milton Bradley" },
          { en: "Parker Brothers", es: "Parker Brothers", de: "Parker Brothers", nl: "Parker Brothers" },
          { en: "Hasbro", es: "Hasbro", de: "Hasbro", nl: "Hasbro" }
        ],
        correct: 0,
        explanation: {
          en: "Anthony Pratt, a British musician, invented Cluedo in 1943. It was later published by Waddingtons in the UK and Parker Brothers in North America.",
          es: "Anthony Pratt, un músico británico, inventó Cluedo en 1943. Posteriormente fue publicado por Waddingtons en el Reino Unido y Parker Brothers en América del Norte.",
          de: "Anthony Pratt, ein britischer Musiker, erfand Cluedo im Jahr 1943. Es wurde später von Waddingtons in Großbritannien und Parker Brothers in Nordamerika veröffentlicht.",
          nl: "Anthony Pratt, een Britse muzikant, vond Cluedo uit in 1943. Het werd later uitgegeven door Waddingtons in het VK en Parker Brothers in Noord-Amerika."
        }
      },
      {
        question: {
          en: "What type of game is Cluedo classified as?",
          es: "¿Como qué tipo de juego se clasifica Cluedo?",
          de: "Als welche Art von Spiel wird Cluedo klassifiziert?",
          nl: "Als wat voor soort spel wordt Cluedo geclassificeerd?"
        },
        options: [
          { en: "Strategy game", es: "Juego de estrategia", de: "Strategiespiel", nl: "Strategiespel" },
          { en: "Deduction game", es: "Juego de deducción", de: "Deduktionsspiel", nl: "Deductiespel" },
          { en: "Racing game", es: "Juego de carreras", de: "Rennspiel", nl: "Race spel" },
          { en: "Party game", es: "Juego de fiesta", de: "Partyspiel", nl: "Partyspel" }
        ],
        correct: 1,
        explanation: {
          en: "Cluedo is classified as a deduction game because players must use logical reasoning to deduce the solution from the clues they gather.",
          es: "Cluedo se clasifica como un juego de deducción porque los jugadores deben usar el razonamiento lógico para deducir la solución de las pistas que recopilan.",
          de: "Cluedo wird als Deduktionsspiel klassifiziert, weil Spieler logisches Denken verwenden müssen, um die Lösung aus den gesammelten Hinweisen abzuleiten.",
          nl: "Cluedo wordt geclassificeerd als een deductiespel omdat spelers logisch redeneren moeten gebruiken om de oplossing af te leiden uit de aanwijzingen die ze verzamelen."
        }
      },
      {
        question: {
          en: "How do you win Cluedo?",
          es: "¿Cómo ganas en Cluedo?",
          de: "Wie gewinnst du Cluedo?",
          nl: "Hoe win je Cluedo?"
        },
        options: [
          { en: "Be first to collect all cards", es: "Ser el primero en recoger todas las cartas", de: "Als Erster alle Karten sammeln", nl: "Als eerste alle kaarten verzamelen" },
          { en: "Make correct accusation first", es: "Hacer la acusación correcta primero", de: "Zuerst die richtige Anschuldigung machen", nl: "Als eerste de juiste beschuldiging maken" },
          { en: "Visit all rooms first", es: "Visitar todas las habitaciones primero", de: "Zuerst alle Räume besuchen", nl: "Als eerste alle kamers bezoeken" },
          { en: "Eliminate all other players", es: "Eliminar a todos los demás jugadores", de: "Alle anderen Spieler eliminieren", nl: "Alle andere spelers elimineren" }
        ],
        correct: 1,
        explanation: {
          en: "You win Cluedo by being the first player to correctly identify the murderer, weapon, and room by making an accurate accusation.",
          es: "Ganas Cluedo siendo el primer jugador en identificar correctamente al asesino, el arma y la habitación haciendo una acusación precisa.",
          de: "Du gewinnst Cluedo, indem du der erste Spieler bist, der den Mörder, die Waffe und den Raum korrekt identifiziert, indem du eine genaue Anschuldigung machst.",
          nl: "Je wint Cluedo door de eerste speler te zijn die correct de moordenaar, het wapen en de kamer identificeert door een nauwkeurige beschuldiging te maken."
        }
      },
      {
        question: {
          en: "Which room has a secret passage to the Study?",
          es: "¿Qué habitación tiene un pasaje secreto al Estudio?",
          de: "Welcher Raum hat einen Geheimgang zum Arbeitszimmer?",
          nl: "Welke kamer heeft een geheime gang naar de Studeerkamer?"
        },
        options: [
          { en: "Lounge", es: "Salón", de: "Salon", nl: "Salon" },
          { en: "Kitchen", es: "Cocina", de: "Küche", nl: "Keuken" },
          { en: "Conservatory", es: "Invernadero", de: "Wintergarten", nl: "Serre" },
          { en: "Library", es: "Biblioteca", de: "Bibliothek", nl: "Bibliotheek" }
        ],
        correct: 1,
        explanation: {
          en: "The Kitchen has a secret passage connecting it diagonally across the board to the Study in the opposite corner.",
          es: "La Cocina tiene un pasaje secreto que la conecta diagonalmente a través del tablero con el Estudio en la esquina opuesta.",
          de: "Die Küche hat einen Geheimgang, der sie diagonal über das Brett mit dem Arbeitszimmer in der gegenüberliegenden Ecke verbindet.",
          nl: "De Keuken heeft een geheime gang die deze diagonaal over het bord verbindt met de Studeerkamer in de tegenoverliggende hoek."
        }
      },
      {
        question: {
          en: "What should you do if you cannot disprove a suggestion?",
          es: "¿Qué debes hacer si no puedes refutar una sugerencia?",
          de: "Was solltest du tun, wenn du einen Vorschlag nicht widerlegen kannst?",
          nl: "Wat moet je doen als je een suggestie niet kunt weerleggen?"
        },
        options: [
          { en: "Make an accusation immediately", es: "Hacer una acusación inmediatamente", de: "Sofort eine Anschuldigung machen", nl: "Onmiddellijk een beschuldiging maken" },
          { en: "Say nothing and pass to next player", es: "No decir nada y pasar al siguiente jugador", de: "Nichts sagen und zum nächsten Spieler weitergehen", nl: "Niets zeggen en doorgaan naar volgende speler" },
          { en: "Show a card anyway", es: "Mostrar una carta de todos modos", de: "Trotzdem eine Karte zeigen", nl: "Toch een kaart tonen" },
          { en: "Leave the game", es: "Abandonar el juego", de: "Das Spiel verlassen", nl: "Het spel verlaten" }
        ],
        correct: 1,
        explanation: {
          en: "If you cannot show any of the three cards mentioned in a suggestion, you simply say nothing and allow the next player to try to disprove it.",
          es: "Si no puedes mostrar ninguna de las tres cartas mencionadas en una sugerencia, simplemente no dices nada y permites que el siguiente jugador intente refutarla.",
          de: "Wenn du keine der drei in einem Vorschlag genannten Karten zeigen kannst, sagst du einfach nichts und erlaubst dem nächsten Spieler zu versuchen, ihn zu widerlegen.",
          nl: "Als je geen van de drie kaarten genoemd in een suggestie kunt tonen, zeg je simpelweg niets en laat je de volgende speler proberen het te weerleggen."
        }
      },
      {
        question: {
          en: "In which decade was Cluedo first released?",
          es: "¿En qué década se lanzó Cluedo por primera vez?",
          de: "In welchem Jahrzehnt wurde Cluedo zum ersten Mal veröffentlicht?",
          nl: "In welk decennium werd Cluedo voor het eerst uitgebracht?"
        },
        options: [
          { en: "1930s", es: "Años 30", de: "1930er", nl: "Jaren 30" },
          { en: "1940s", es: "Años 40", de: "1940er", nl: "Jaren 40" },
          { en: "1950s", es: "Años 50", de: "1950er", nl: "Jaren 50" },
          { en: "1960s", es: "Años 60", de: "1960er", nl: "Jaren 60" }
        ],
        correct: 1,
        explanation: {
          en: "Cluedo was first released in 1949 in the UK, though it was invented in 1943. The North American version 'Clue' was released in 1949 as well.",
          es: "Cluedo se lanzó por primera vez en 1949 en el Reino Unido, aunque se inventó en 1943. La versión norteamericana 'Clue' también se lanzó en 1949.",
          de: "Cluedo wurde 1949 erstmals in Großbritannien veröffentlicht, obwohl es 1943 erfunden wurde. Die nordamerikanische Version 'Clue' wurde ebenfalls 1949 veröffentlicht.",
          nl: "Cluedo werd voor het eerst uitgebracht in 1949 in het VK, hoewel het in 1943 werd uitgevonden. De Noord-Amerikaanse versie 'Clue' werd ook in 1949 uitgebracht."
        }
      },
      {
        question: {
          en: "What color is Professor Plum's playing piece?",
          es: "¿De qué color es la pieza de juego del Profesor Plum?",
          de: "Welche Farbe hat die Spielfigur von Professor Plum?",
          nl: "Welke kleur heeft het speelstuk van Professor Plum?"
        },
        options: [
          { en: "Blue", es: "Azul", de: "Blau", nl: "Blauw" },
          { en: "Purple", es: "Morado", de: "Lila", nl: "Paars" },
          { en: "Green", es: "Verde", de: "Grün", nl: "Groen" },
          { en: "Yellow", es: "Amarillo", de: "Gelb", nl: "Geel" }
        ],
        correct: 1,
        explanation: {
          en: "Professor Plum's playing piece is purple, matching his name which references the fruit plum (which is typically purple).",
          es: "La pieza de juego del Profesor Plum es morada, coincidiendo con su nombre que hace referencia a la fruta ciruela (que suele ser morada).",
          de: "Die Spielfigur von Professor Plum ist lila, passend zu seinem Namen, der sich auf die Frucht Pflaume bezieht (die typischerweise lila ist).",
          nl: "Het speelstuk van Professor Plum is paars, passend bij zijn naam die verwijst naar de vrucht pruim (die meestal paars is)."
        }
      },
      {
        question: {
          en: "Can you make an accusation from anywhere on the board?",
          es: "¿Puedes hacer una acusación desde cualquier lugar del tablero?",
          de: "Kannst du eine Anschuldigung von überall auf dem Brett machen?",
          nl: "Kun je een beschuldiging doen vanaf elke plaats op het bord?"
        },
        options: [
          { en: "No, only from rooms", es: "No, solo desde habitaciones", de: "Nein, nur von Räumen", nl: "Nee, alleen vanuit kamers" },
          { en: "Yes, from anywhere on your turn", es: "Sí, desde cualquier lugar en tu turno", de: "Ja, von überall in deinem Zug", nl: "Ja, vanaf elke plaats in je beurt" },
          { en: "Only from the center", es: "Solo desde el centro", de: "Nur vom Zentrum", nl: "Alleen vanuit het centrum" },
          { en: "Only after visiting all rooms", es: "Solo después de visitar todas las habitaciones", de: "Nur nach dem Besuch aller Räume", nl: "Alleen na het bezoeken van alle kamers" }
        ],
        correct: 1,
        explanation: {
          en: "Unlike suggestions which must be made from rooms, you can make an accusation from anywhere on the board during your turn.",
          es: "A diferencia de las sugerencias que deben hacerse desde habitaciones, puedes hacer una acusación desde cualquier lugar del tablero durante tu turno.",
          de: "Anders als Vorschläge, die von Räumen aus gemacht werden müssen, kannst du eine Anschuldigung von überall auf dem Brett während deines Zuges machen.",
          nl: "In tegenstelling tot suggesties die vanuit kamers gedaan moeten worden, kun je een beschuldiging doen vanaf elke plaats op het bord tijdens je beurt."
        }
      },
      {
        question: {
          en: "How many doorways does the Ballroom have?",
          es: "¿Cuántas puertas tiene el Salón de baile?",
          de: "Wie viele Türen hat der Ballsaal?",
          nl: "Hoeveel deuren heeft de Balzaal?"
        },
        options: [
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "5", es: "5", de: "5", nl: "5" }
        ],
        correct: 2,
        explanation: {
          en: "The Ballroom has 4 doorways, making it the most accessible room on the classic Cluedo board.",
          es: "El Salón de baile tiene 4 puertas, lo que lo convierte en la habitación más accesible del tablero clásico de Cluedo.",
          de: "Der Ballsaal hat 4 Türen, was ihn zum am besten zugänglichen Raum auf dem klassischen Cluedo-Brett macht.",
          nl: "De Balzaal heeft 4 deuren, waardoor het de meest toegankelijke kamer op het klassieke Cluedo-bord is."
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
          { en: "No difference, same thing", es: "Sin diferencia, lo mismo", de: "Kein Unterschied, dasselbe", nl: "Geen verschil, hetzelfde" },
          { en: "Accusation is final, suggestion gathers info", es: "Acusación es final, sugerencia recopila info", de: "Anschuldigung ist endgültig, Vorschlag sammelt Info", nl: "Beschuldiging is definitief, suggestie verzamelt info" },
          { en: "Suggestions are only for rooms", es: "Sugerencias son solo para habitaciones", de: "Vorschläge sind nur für Räume", nl: "Suggesties zijn alleen voor kamers" },
          { en: "Accusations require more cards", es: "Acusaciones requieren más cartas", de: "Anschuldigungen erfordern mehr Karten", nl: "Beschuldigingen vereisen meer kaarten" }
        ],
        correct: 1,
        explanation: {
          en: "A suggestion is used to gather information (others show cards), while an accusation is your final answer. Wrong accusations eliminate you from winning.",
          es: "Una sugerencia se usa para recopilar información (otros muestran cartas), mientras que una acusación es tu respuesta final. Las acusaciones incorrectas te eliminan de ganar.",
          de: "Ein Vorschlag wird verwendet, um Informationen zu sammeln (andere zeigen Karten), während eine Anschuldigung deine endgültige Antwort ist. Falsche Anschuldigungen eliminieren dich vom Gewinn.",
          nl: "Een suggestie wordt gebruikt om informatie te verzamelen (anderen tonen kaarten), terwijl een beschuldiging je eindantwoord is. Foute beschuldigingen elimineren je van het winnen."
        }
      },
      {
        question: {
          en: "Which weapon is also known as a 'wrench' in some versions?",
          es: "¿Qué arma también se conoce como 'llave' en algunas versiones?",
          de: "Welche Waffe ist in einigen Versionen auch als 'Schraubenschlüssel' bekannt?",
          nl: "Welk wapen staat ook bekend als 'moersleutel' in sommige versies?"
        },
        options: [
          { en: "Lead Pipe", es: "Tubería de plomo", de: "Bleiröhre", nl: "Loden pijp" },
          { en: "Spanner", es: "Llave inglesa", de: "Schraubenschlüssel", nl: "Moersleutel" },
          { en: "Candlestick", es: "Candelabro", de: "Kerzenständer", nl: "Kandelaar" },
          { en: "Dagger", es: "Daga", de: "Dolch", nl: "Dolk" }
        ],
        correct: 1,
        explanation: {
          en: "The Spanner (British English) is called a Wrench in American English versions of the game. Both refer to the same tool-weapon.",
          es: "La Llave inglesa (inglés británico) se llama Wrench en las versiones en inglés americano del juego. Ambos se refieren a la misma herramienta-arma.",
          de: "Der Schraubenschlüssel (britisches Englisch 'Spanner') wird in amerikanischen englischen Versionen des Spiels 'Wrench' genannt. Beide beziehen sich auf dasselbe Werkzeug-Waffe.",
          nl: "De Moersleutel (Brits Engels 'Spanner') wordt in Amerikaanse Engelse versies van het spel 'Wrench' genoemd. Beide verwijzen naar hetzelfde gereedschap-wapen."
        }
      },
      {
        question: {
          en: "What happens if multiple players can disprove your suggestion?",
          es: "¿Qué pasa si múltiples jugadores pueden refutar tu sugerencia?",
          de: "Was passiert, wenn mehrere Spieler deinen Vorschlag widerlegen können?",
          nl: "Wat gebeurt er als meerdere spelers je suggestie kunnen weerleggen?"
        },
        options: [
          { en: "All players show their cards", es: "Todos los jugadores muestran sus cartas", de: "Alle Spieler zeigen ihre Karten", nl: "Alle spelers tonen hun kaarten" },
          { en: "Only the next player in turn order shows one", es: "Solo el siguiente jugador en orden de turno muestra una", de: "Nur der nächste Spieler in Zugreihenfolge zeigt eine", nl: "Alleen de volgende speler in beurtvolgorde toont er één" },
          { en: "You choose who shows a card", es: "Tú eliges quién muestra una carta", de: "Du wählst, wer eine Karte zeigt", nl: "Je kiest wie een kaart toont" },
          { en: "The suggestion is cancelled", es: "La sugerencia es cancelada", de: "Der Vorschlag wird abgebrochen", nl: "De suggestie wordt geannuleerd" }
        ],
        correct: 1,
        explanation: {
          en: "Only the next player (to your left) who can disprove the suggestion shows you one card. Other players' cards remain secret even if they could disprove it.",
          es: "Solo el siguiente jugador (a tu izquierda) que puede refutar la sugerencia te muestra una carta. Las cartas de otros jugadores permanecen secretas incluso si pudieran refutarla.",
          de: "Nur der nächste Spieler (zu deiner Linken), der den Vorschlag widerlegen kann, zeigt dir eine Karte. Die Karten anderer Spieler bleiben geheim, auch wenn sie ihn widerlegen könnten.",
          nl: "Alleen de volgende speler (links van je) die de suggestie kan weerleggen toont je één kaart. Kaarten van andere spelers blijven geheim, zelfs als ze het konden weerleggen."
        }
      },
      {
        question: {
          en: "Which room is known for having billiards equipment?",
          es: "¿Qué habitación es conocida por tener equipo de billar?",
          de: "Welcher Raum ist für Billardausrüstung bekannt?",
          nl: "Welke kamer staat bekend om biljartuitrusting?"
        },
        options: [
          { en: "Library", es: "Biblioteca", de: "Bibliothek", nl: "Bibliotheek" },
          { en: "Billiard Room", es: "Sala de billar", de: "Billardzimmer", nl: "Biljartkamer" },
          { en: "Lounge", es: "Salón", de: "Salon", nl: "Salon" },
          { en: "Hall", es: "Vestíbulo", de: "Halle", nl: "Hal" }
        ],
        correct: 1,
        explanation: {
          en: "The Billiard Room, as its name suggests, is the room equipped with billiards (pool) equipment in the classic Cluedo mansion.",
          es: "La Sala de billar, como su nombre sugiere, es la habitación equipada con equipo de billar en la mansión clásica de Cluedo.",
          de: "Das Billardzimmer ist, wie der Name schon sagt, der Raum, der mit Billardausrüstung in der klassischen Cluedo-Villa ausgestattet ist.",
          nl: "De Biljartkamer is, zoals de naam al aangeeft, de kamer uitgerust met biljartuitrusting in het klassieke Cluedo-landhuis."
        }
      },
      {
        question: {
          en: "Can you stay in the same room for multiple turns?",
          es: "¿Puedes quedarte en la misma habitación durante múltiples turnos?",
          de: "Kannst du mehrere Runden im selben Raum bleiben?",
          nl: "Kun je meerdere beurten in dezelfde kamer blijven?"
        },
        options: [
          { en: "No, you must leave after one turn", es: "No, debes salir después de un turno", de: "Nein, du musst nach einer Runde gehen", nl: "Nee, je moet vertrekken na één beurt" },
          { en: "Yes, you can stay as long as you want", es: "Sí, puedes quedarte tanto como quieras", de: "Ja, du kannst so lange bleiben wie du willst", nl: "Ja, je kunt blijven zo lang je wilt" },
          { en: "Only if no one else wants to enter", es: "Solo si nadie más quiere entrar", de: "Nur wenn niemand anders eintreten will", nl: "Alleen als niemand anders wil binnenkomen" },
          { en: "Maximum of three turns", es: "Máximo de tres turnos", de: "Maximal drei Runden", nl: "Maximum drie beurten" }
        ],
        correct: 1,
        explanation: {
          en: "Yes, you can remain in the same room for as many turns as you like. There's no rule requiring you to leave a room.",
          es: "Sí, puedes permanecer en la misma habitación durante tantos turnos como desees. No hay regla que requiera que salgas de una habitación.",
          de: "Ja, du kannst so viele Runden im selben Raum bleiben, wie du möchtest. Es gibt keine Regel, die dich zwingt, einen Raum zu verlassen.",
          nl: "Ja, je kunt in dezelfde kamer blijven voor zoveel beurten als je wilt. Er is geen regel die vereist dat je een kamer verlaat."
        }
      },
      {
        question: {
          en: "What should you mark on your detective notepad?",
          es: "¿Qué debes marcar en tu bloc de notas de detective?",
          de: "Was solltest du auf deinem Detektiv-Notizblock markieren?",
          nl: "Wat moet je markeren op je detective-notitieblok?"
        },
        options: [
          { en: "Only the cards you hold", es: "Solo las cartas que tienes", de: "Nur die Karten, die du hast", nl: "Alleen de kaarten die je hebt" },
          { en: "Cards shown to you and cards you hold", es: "Cartas mostradas a ti y cartas que tienes", de: "Karten, die dir gezeigt wurden, und Karten, die du hast", nl: "Kaarten getoond aan jou en kaarten die je hebt" },
          { en: "Only your suggestions", es: "Solo tus sugerencias", de: "Nur deine Vorschläge", nl: "Alleen je suggesties" },
          { en: "The number of doorways", es: "El número de puertas", de: "Die Anzahl der Türen", nl: "Het aantal deuren" }
        ],
        correct: 1,
        explanation: {
          en: "You should mark all cards that have been eliminated from the mystery - cards you hold and cards shown to you by other players during suggestions.",
          es: "Debes marcar todas las cartas que han sido eliminadas del misterio - cartas que tienes y cartas mostradas por otros jugadores durante sugerencias.",
          de: "Du solltest alle Karten markieren, die vom Mysterium ausgeschlossen wurden - Karten, die du hast, und Karten, die dir von anderen Spielern während Vorschlägen gezeigt wurden.",
          nl: "Je moet alle kaarten markeren die zijn geëlimineerd van het mysterie - kaarten die je hebt en kaarten getoond door andere spelers tijdens suggesties."
        }
      },
      {
        question: {
          en: "What color is Colonel Mustard's playing piece?",
          es: "¿De qué color es la pieza de juego del Coronel Mustard?",
          de: "Welche Farbe hat die Spielfigur von Colonel Mustard?",
          nl: "Welke kleur heeft het speelstuk van Colonel Mustard?"
        },
        options: [
          { en: "Brown", es: "Marrón", de: "Braun", nl: "Bruin" },
          { en: "Yellow", es: "Amarillo", de: "Gelb", nl: "Geel" },
          { en: "Green", es: "Verde", de: "Grün", nl: "Groen" },
          { en: "White", es: "Blanco", de: "Weiß", nl: "Wit" }
        ],
        correct: 1,
        explanation: {
          en: "Colonel Mustard's playing piece is yellow, matching his name which references the condiment mustard (which is typically yellow).",
          es: "La pieza de juego del Coronel Mustard es amarilla, coincidiendo con su nombre que hace referencia al condimento mostaza (que suele ser amarillo).",
          de: "Die Spielfigur von Colonel Mustard ist gelb, passend zu seinem Namen, der sich auf das Gewürz Senf bezieht (das typischerweise gelb ist).",
          nl: "Het speelstuk van Colonel Mustard is geel, passend bij zijn naam die verwijst naar het kruidenierswaren mosterd (die meestal geel is)."
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