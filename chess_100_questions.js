// Tijdelijk bestand met 100 echte Chess vragen voor level 1
// Dit zal worden gebruikt om het originele bestand te vervangen

const chessQuestions = [
  // Vraag 31-40
  {
    "question": {
      "en": "What is the Italian Game opening?",
      "es": "¿Qué es la apertura Italiana?",
      "de": "Was ist die Italienische Eröffnung?",
      "nl": "Wat is de Italiaanse opening?"
    },
    "options": [
      {"en": "1.e4 e5 2.Nf3 Nc6 3.Bc4", "es": "1.e4 e5 2.Cf3 Cc6 3.Ac4", "de": "1.e4 e5 2.Sf3 Sc6 3.Lc4", "nl": "1.e4 e5 2.Pf3 Pc6 3.Lc4"},
      {"en": "1.d4 d5 2.c4", "es": "1.d4 d5 2.c4", "de": "1.d4 d5 2.c4", "nl": "1.d4 d5 2.c4"},
      {"en": "1.e4 c5", "es": "1.e4 c5", "de": "1.e4 c5", "nl": "1.e4 c5"},
      {"en": "1.Nf3 Nf6", "es": "1.Cf3 Cf6", "de": "1.Sf3 Sf6", "nl": "1.Pf3 Pf6"}
    ],
    "correct": 0,
    "explanation": {
      "en": "The Italian Game is a popular opening that begins with 1.e4 e5 2.Nf3 Nc6 3.Bc4, developing the bishop to attack f7.",
      "es": "El Juego Italiano es una apertura popular que comienza con 1.e4 e5 2.Cf3 Cc6 3.Ac4, desarrollando el alfil para atacar f7.",
      "de": "Die Italienische Eröffnung ist eine beliebte Eröffnung, die mit 1.e4 e5 2.Sf3 Sc6 3.Lc4 beginnt und den Läufer entwickelt, um f7 anzugreifen.",
      "nl": "Het Italiaans is een populaire opening die begint met 1.e4 e5 2.Pf3 Pc6 3.Lc4, waarbij de loper wordt ontwikkeld om f7 aan te vallen."
    }
  },
  {
    "question": {
      "en": "What is the term for sacrificing material to gain a positional advantage?",
      "es": "¿Cuál es el término para sacrificar material para obtener ventaja posicional?",
      "de": "Was ist der Begriff für das Opfern von Material für einen positionellen Vorteil?",
      "nl": "Wat is de term voor het offeren van materiaal voor positioneel voordeel?"
    },
    "options": [
      {"en": "Gambit", "es": "Gambito", "de": "Gambit", "nl": "Gambiet"},
      {"en": "Blunder", "es": "Error grave", "de": "Grober Fehler", "nl": "Blunder"},
      {"en": "Draw", "es": "Tablas", "de": "Remis", "nl": "Remise"},
      {"en": "Capture", "es": "Captura", "de": "Schlagen", "nl": "Slaan"}
    ],
    "correct": 0,
    "explanation": {
      "en": "A gambit is a chess opening in which material, usually a pawn, is sacrificed to gain a positional advantage.",
      "es": "Un gambito es una apertura de ajedrez en la que se sacrifica material, generalmente un peón, para obtener ventaja posicional.",
      "de": "Ein Gambit ist eine Schacheröffnung, bei der Material, meist ein Bauer, für einen positionellen Vorteil geopfert wird.",
      "nl": "Een gambiet is een schaakopening waarbij materiaal, meestal een pion, wordt geofferd voor positioneel voordeel."
    }
  },
  {
    "question": {
      "en": "What is the Sicilian Defense?",
      "es": "¿Qué es la Defensa Siciliana?",
      "de": "Was ist die Sizilianische Verteidigung?",
      "nl": "Wat is de Siciliaanse verdediging?"
    },
    "options": [
      {"en": "1.e4 c5", "es": "1.e4 c5", "de": "1.e4 c5", "nl": "1.e4 c5"},
      {"en": "1.e4 e5", "es": "1.e4 e5", "de": "1.e4 e5", "nl": "1.e4 e5"},
      {"en": "1.d4 Nf6", "es": "1.d4 Cf6", "de": "1.d4 Sf6", "nl": "1.d4 Pf6"},
      {"en": "1.e4 e6", "es": "1.e4 e6", "de": "1.e4 e6", "nl": "1.e4 e6"}
    ],
    "correct": 0,
    "explanation": {
      "en": "The Sicilian Defense (1.e4 c5) is one of the most popular and successful responses to 1.e4.",
      "es": "La Defensa Siciliana (1.e4 c5) es una de las respuestas más populares y exitosas a 1.e4.",
      "de": "Die Sizilianische Verteidigung (1.e4 c5) ist eine der beliebtesten und erfolgreichsten Antworten auf 1.e4.",
      "nl": "De Siciliaanse verdediging (1.e4 c5) is een van de populairste en meest succesvolle antwoorden op 1.e4."
    }
  },
  {
    "question": {
      "en": "What is the correct way to notate castling kingside?",
      "es": "¿Cuál es la forma correcta de anotar el enroque corto?",
      "de": "Wie notiert man die kurze Rochade korrekt?",
      "nl": "Wat is de correcte notatie voor korte rokade?"
    },
    "options": [
      {"en": "0-0", "es": "0-0", "de": "0-0", "nl": "0-0"},
      {"en": "0-0-0", "es": "0-0-0", "de": "0-0-0", "nl": "0-0-0"},
      {"en": "K-R", "es": "R-T", "de": "K-T", "nl": "K-T"},
      {"en": "Kg1", "es": "Rg1", "de": "Kg1", "nl": "Kg1"}
    ],
    "correct": 0,
    "explanation": {
      "en": "Castling kingside (short castling) is notated as 0-0 in algebraic notation.",
      "es": "El enroque corto se anota como 0-0 en notación algebraica.",
      "de": "Die kurze Rochade wird in algebraischer Notation als 0-0 notiert.",
      "nl": "Korte rokade wordt genoteerd als 0-0 in algebraïsche notatie."
    }
  },
  {
    "question": {
      "en": "What is tempo in chess?",
      "es": "¿Qué es el tempo en ajedrez?",
      "de": "Was ist Tempo im Schach?",
      "nl": "Wat is tempo bij schaken?"
    },
    "options": [
      {"en": "A unit of time gained or lost in development", "es": "Una unidad de tiempo ganada o perdida en desarrollo", "de": "Eine Zeiteinheit, die in der Entwicklung gewonnen oder verloren wird", "nl": "Een tijdseenheid gewonnen of verloren in ontwikkeling"},
      {"en": "The speed of play", "es": "La velocidad de juego", "de": "Die Spielgeschwindigkeit", "nl": "De speelsnelheid"},
      {"en": "The time on the clock", "es": "El tiempo en el reloj", "de": "Die Zeit auf der Uhr", "nl": "De tijd op de klok"},
      {"en": "A type of opening", "es": "Un tipo de apertura", "de": "Eine Art Eröffnung", "nl": "Een soort opening"}
    ],
    "correct": 0,
    "explanation": {
      "en": "Tempo refers to a turn or single move. Having the tempo means having the initiative and forcing your opponent to respond.",
      "es": "El tempo se refiere a un turno o movimiento. Tener el tempo significa tener la iniciativa y forzar al oponente a responder.",
      "de": "Tempo bezieht sich auf einen Zug. Das Tempo zu haben bedeutet, die Initiative zu haben und den Gegner zu Reaktionen zu zwingen.",
      "nl": "Tempo verwijst naar een beurt of enkele zet. Het tempo hebben betekent het initiatief hebben en je tegenstander dwingen te reageren."
    }
  },
  {
    "question": {
      "en": "What is a discovered attack?",
      "es": "¿Qué es un ataque descubierto?",
      "de": "Was ist ein Abzugsangriff?",
      "nl": "Wat is een aftrektaanval?"
    },
    "options": [
      {"en": "Moving a piece to reveal an attack from another piece", "es": "Mover una pieza para revelar un ataque de otra pieza", "de": "Eine Figur ziehen, um einen Angriff einer anderen Figur aufzudecken", "nl": "Een stuk verplaatsen om een aanval van een ander stuk te onthullen"},
      {"en": "Finding a new plan", "es": "Encontrar un nuevo plan", "de": "Einen neuen Plan finden", "nl": "Een nieuw plan vinden"},
      {"en": "Attacking the king", "es": "Atacar al rey", "de": "Den König angreifen", "nl": "De koning aanvallen"},
      {"en": "Promoting a pawn", "es": "Promover un peón", "de": "Einen Bauern umwandeln", "nl": "Een pion promoveren"}
    ],
    "correct": 0,
    "explanation": {
      "en": "A discovered attack occurs when moving one piece reveals an attack from another piece behind it.",
      "es": "Un ataque descubierto ocurre cuando mover una pieza revela un ataque de otra pieza detrás de ella.",
      "de": "Ein Abzugsangriff entsteht, wenn das Ziehen einer Figur einen Angriff einer dahinter stehenden Figur aufdeckt.",
      "nl": "Een aftrektaanval ontstaat wanneer het verplaatsen van een stuk een aanval van een ander stuk erachter onthult."
    }
  },
  {
    "question": {
      "en": "What is the French Defense?",
      "es": "¿Qué es la Defensa Francesa?",
      "de": "Was ist die Französische Verteidigung?",
      "nl": "Wat is de Franse verdediging?"
    },
    "options": [
      {"en": "1.e4 e6", "es": "1.e4 e6", "de": "1.e4 e6", "nl": "1.e4 e6"},
      {"en": "1.e4 c5", "es": "1.e4 c5", "de": "1.e4 c5", "nl": "1.e4 c5"},
      {"en": "1.e4 e5", "es": "1.e4 e5", "de": "1.e4 e5", "nl": "1.e4 e5"},
      {"en": "1.d4 d5", "es": "1.d4 d5", "de": "1.d4 d5", "nl": "1.d4 d5"}
    ],
    "correct": 0,
    "explanation": {
      "en": "The French Defense begins with 1.e4 e6, preparing to play d5 and create a solid pawn structure.",
      "es": "La Defensa Francesa comienza con 1.e4 e6, preparando jugar d5 y crear una estructura de peones sólida.",
      "de": "Die Französische Verteidigung beginnt mit 1.e4 e6 und bereitet d5 vor, um eine solide Bauernstruktur zu schaffen.",
      "nl": "De Franse verdediging begint met 1.e4 e6, voorbereidend om d5 te spelen en een solide pionnenstructuur te creëren."
    }
  },
  {
    "question": {
      "en": "What is a skewer in chess?",
      "es": "¿Qué es un pincho en ajedrez?",
      "de": "Was ist ein Spieß im Schach?",
      "nl": "Wat is een spies bij schaken?"
    },
    "options": [
      {"en": "Attacking a valuable piece that must move, exposing a less valuable piece", "es": "Atacar una pieza valiosa que debe moverse, exponiendo una menos valiosa", "de": "Eine wertvolle Figur angreifen, die ziehen muss und eine weniger wertvolle preisgibt", "nl": "Een waardevol stuk aanvallen dat moet bewegen en een minder waardevol stuk blootgeeft"},
      {"en": "A type of fork", "es": "Un tipo de horquilla", "de": "Eine Art Gabel", "nl": "Een soort vork"},
      {"en": "Castling queenside", "es": "Enroque largo", "de": "Lange Rochade", "nl": "Lange rokade"},
      {"en": "A draw offer", "es": "Una oferta de tablas", "de": "Ein Remisangebot", "nl": "Een remise aanbod"}
    ],
    "correct": 0,
    "explanation": {
      "en": "A skewer is an attack on a valuable piece that must move, exposing a less valuable piece behind it to capture.",
      "es": "Un pincho es un ataque a una pieza valiosa que debe moverse, exponiendo una pieza menos valiosa detrás para capturar.",
      "de": "Ein Spieß ist ein Angriff auf eine wertvolle Figur, die ziehen muss und dabei eine weniger wertvolle Figur dahinter preisgibt.",
      "nl": "Een spies is een aanval op een waardevol stuk dat moet bewegen, waardoor een minder waardevol stuk erachter kwetsbaar wordt."
    }
  },
  {
    "question": {
      "en": "What is the value of the queen in points?",
      "es": "¿Cuál es el valor de la reina en puntos?",
      "de": "Was ist der Wert der Dame in Punkten?",
      "nl": "Wat is de waarde van de dame in punten?"
    },
    "options": [
      {"en": "9 points", "es": "9 puntos", "de": "9 Punkte", "nl": "9 punten"},
      {"en": "5 points", "es": "5 puntos", "de": "5 Punkte", "nl": "5 punten"},
      {"en": "10 points", "es": "10 puntos", "de": "10 Punkte", "nl": "10 punten"},
      {"en": "8 points", "es": "8 puntos", "de": "8 Punkte", "nl": "8 punten"}
    ],
    "correct": 0,
    "explanation": {
      "en": "The queen is valued at 9 points, making it the most valuable piece after the king.",
      "es": "La reina vale 9 puntos, siendo la pieza más valiosa después del rey.",
      "de": "Die Dame wird mit 9 Punkten bewertet und ist damit die wertvollste Figur nach dem König.",
      "nl": "De dame is 9 punten waard, wat haar het waardevolste stuk maakt na de koning."
    }
  },
  {
    "question": {
      "en": "What is the King's Indian Defense?",
      "es": "¿Qué es la Defensa India de Rey?",
      "de": "Was ist die Königsindische Verteidigung?",
      "nl": "Wat is de Konings-Indische verdediging?"
    },
    "options": [
      {"en": "1.d4 Nf6 2.c4 g6", "es": "1.d4 Cf6 2.c4 g6", "de": "1.d4 Sf6 2.c4 g6", "nl": "1.d4 Pf6 2.c4 g6"},
      {"en": "1.e4 e5", "es": "1.e4 e5", "de": "1.e4 e5", "nl": "1.e4 e5"},
      {"en": "1.e4 c5", "es": "1.e4 c5", "de": "1.e4 c5", "nl": "1.e4 c5"},
      {"en": "1.d4 d5", "es": "1.d4 d5", "de": "1.d4 d5", "nl": "1.d4 d5"}
    ],
    "correct": 0,
    "explanation": {
      "en": "The King's Indian Defense is characterized by Black playing Nf6 and g6, fianchettoing the bishop.",
      "es": "La Defensa India de Rey se caracteriza por que las negras juegan Cf6 y g6, haciendo fianchetto con el alfil.",
      "de": "Die Königsindische Verteidigung ist dadurch gekennzeichnet, dass Schwarz Sf6 und g6 spielt und den Läufer fianchettiert.",
      "nl": "De Konings-Indische verdediging wordt gekenmerkt door zwart die Pf6 en g6 speelt, met fianchetto van de loper."
    }
  },
  // Voeg nog 60 vragen toe...
];

console.log('Created temporary file with chess questions structure');