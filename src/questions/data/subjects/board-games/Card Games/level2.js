// Quiz Template - Level 2: Bord spelletjes - Kaartspellen
(function() {
  const level2 = {
    name: {
      en: "Card Games - Intermediate",
      es: "Juegos de Cartas - Intermedio",
      de: "Kartenspiele - Mittelstufe",
      nl: "Kaartspellen - Gemiddeld"
    },
    questions: [
      {
        question: {
          en: "In Poker, what is a 'full house'?",
          es: "En Póker, ¿qué es un 'full house'?",
          de: "Was ist beim Poker ein 'Full House'?",
          nl: "Wat is een 'full house' bij Poker?"
        },
        options: [
          { en: "Three of a kind + a pair", es: "Tres de un tipo + una pareja", de: "Drilling + ein Paar", nl: "Drie van een soort + een paar" },
          { en: "Five cards of same suit", es: "Cinco cartas del mismo palo", de: "Fünf Karten der gleichen Farbe", nl: "Vijf kaarten van dezelfde kleur" },
          { en: "Four cards of same rank", es: "Cuatro cartas del mismo rango", de: "Vier Karten des gleichen Ranges", nl: "Vier kaarten van dezelfde rang" },
          { en: "Five consecutive cards", es: "Cinco cartas consecutivas", de: "Fünf aufeinanderfolgende Karten", nl: "Vijf opeenvolgende kaarten" }
        ],
        correct: 0,
        explanation: {
          en: "A full house consists of three cards of one rank and two cards of another rank, such as three 7s and two Kings.",
          es: "Un full house consiste en tres cartas de un rango y dos cartas de otro rango, como tres 7s y dos Reyes.",
          de: "Ein Full House besteht aus drei Karten eines Ranges und zwei Karten eines anderen Ranges, wie drei 7en und zwei Königen.",
          nl: "Een full house bestaat uit drie kaarten van één rang en twee kaarten van een andere rang, zoals drie 7's en twee Koningen."
        }
      },
      {
        question: {
          en: "In Bridge, how many cards does each player receive?",
          es: "En Bridge, ¿cuántas cartas recibe cada jugador?",
          de: "Wie viele Karten erhält jeder Spieler beim Bridge?",
          nl: "Hoeveel kaarten krijgt elke speler bij Bridge?"
        },
        options: [
          { en: "10", es: "10", de: "10", nl: "10" },
          { en: "11", es: "11", de: "11", nl: "11" },
          { en: "12", es: "12", de: "12", nl: "12" },
          { en: "13", es: "13", de: "13", nl: "13" }
        ],
        correct: 3,
        explanation: {
          en: "In Bridge, each of the four players receives 13 cards, using the entire standard 52-card deck.",
          es: "En Bridge, cada uno de los cuatro jugadores recibe 13 cartas, usando toda la baraja estándar de 52 cartas.",
          de: "Beim Bridge erhält jeder der vier Spieler 13 Karten aus dem gesamten Standard-52-Karten-Deck.",
          nl: "Bij Bridge krijgt elk van de vier spelers 13 kaarten, waarbij het volledige standaard 52-kaartenspel wordt gebruikt."
        }
      },
      {
        question: {
          en: "What is the objective in Rummy?",
          es: "¿Cuál es el objetivo en Rummy?",
          de: "Was ist das Ziel beim Rummy?",
          nl: "Wat is het doel bij Rummy?"
        },
        options: [
          { en: "Get highest card value", es: "Obtener el valor de carta más alto", de: "Den höchsten Kartenwert erhalten", nl: "De hoogste kaartwaarde krijgen" },
          { en: "Form sets and runs, reduce deadwood", es: "Formar escaleras y tríos, reducir cartas muertas", de: "Sets und Läufe bilden, Deadwood reduzieren", nl: "Sets en runs vormen, deadwood verminderen" },
          { en: "Collect all aces", es: "Recoger todos los ases", de: "Alle Asse sammeln", nl: "Alle azen verzamelen" },
          { en: "Match opponent's cards", es: "Igualar las cartas del oponente", de: "Die Karten des Gegners anpassen", nl: "Kaarten van tegenstander matchen" }
        ],
        correct: 1,
        explanation: {
          en: "In Rummy, players aim to form melds (sets of same rank or runs of consecutive cards) and minimize unmatched cards (deadwood) in their hand.",
          es: "En Rummy, los jugadores intentan formar combinaciones (conjuntos del mismo rango o escaleras de cartas consecutivas) y minimizar cartas no emparejadas (deadwood) en su mano.",
          de: "Beim Rummy versuchen Spieler, Kombinationen (Sets des gleichen Ranges oder Läufe aufeinanderfolgender Karten) zu bilden und nicht passende Karten (Deadwood) in ihrer Hand zu minimieren.",
          nl: "Bij Rummy proberen spelers melds te vormen (sets van dezelfde rang of runs van opeenvolgende kaarten) en niet-gepaarde kaarten (deadwood) in hun hand te minimaliseren."
        }
      },
      {
        question: {
          en: "In Hearts, which card is worth the most points?",
          es: "En Hearts, ¿qué carta vale más puntos?",
          de: "Welche Karte ist beim Hearts die meisten Punkte wert?",
          nl: "Welke kaart is bij Hearts de meeste punten waard?"
        },
        options: [
          { en: "Ace of Hearts (5 points)", es: "As de Corazones (5 puntos)", de: "Herz-As (5 Punkte)", nl: "Harten Aas (5 punten)" },
          { en: "Queen of Spades (13 points)", es: "Reina de Picas (13 puntos)", de: "Pik-Dame (13 Punkte)", nl: "Schoppen Vrouw (13 punten)" },
          { en: "King of Hearts (10 points)", es: "Rey de Corazones (10 puntos)", de: "Herz-König (10 Punkte)", nl: "Harten Koning (10 punten)" },
          { en: "Jack of Diamonds (10 points)", es: "Jota de Diamantes (10 puntos)", de: "Karo-Bube (10 Punkte)", nl: "Ruiten Boer (10 punten)" }
        ],
        correct: 1,
        explanation: {
          en: "The Queen of Spades is worth 13 points in Hearts, the most of any single card. Each heart is worth 1 point, making 'shooting the moon' (taking all penalty cards) a strategic option.",
          es: "La Reina de Picas vale 13 puntos en Hearts, lo más de cualquier carta individual. Cada corazón vale 1 punto, haciendo que 'disparar a la luna' (tomar todas las cartas de penalización) sea una opción estratégica.",
          de: "Die Pik-Dame ist beim Hearts 13 Punkte wert, die meisten von allen einzelnen Karten. Jedes Herz ist 1 Punkt wert, was 'Shoot the Moon' (alle Strafkarten nehmen) zu einer strategischen Option macht.",
          nl: "De Schoppen Vrouw is 13 punten waard bij Hearts, de meeste van elke enkele kaart. Elk hartje is 1 punt waard, waardoor 'shooting the moon' (alle strafkaarten nemen) een strategische optie is."
        }
      },
      {
        question: {
          en: "In Blackjack, what value do face cards have?",
          es: "En Blackjack, ¿qué valor tienen las cartas de figura?",
          de: "Welchen Wert haben Bildkarten beim Blackjack?",
          nl: "Welke waarde hebben plaatjes bij Blackjack?"
        },
        options: [
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "10", es: "10", de: "10", nl: "10" },
          { en: "11", es: "11", de: "11", nl: "11" },
          { en: "15", es: "15", de: "15", nl: "15" }
        ],
        correct: 1,
        explanation: {
          en: "In Blackjack, all face cards (Jack, Queen, King) are worth 10 points. Aces can be worth 1 or 11, and number cards are worth their face value.",
          es: "En Blackjack, todas las cartas de figura (Jota, Reina, Rey) valen 10 puntos. Los Ases pueden valer 1 u 11, y las cartas numeradas valen su valor nominal.",
          de: "Beim Blackjack sind alle Bildkarten (Bube, Dame, König) 10 Punkte wert. Asse können 1 oder 11 wert sein, und Zahlenkarten sind ihren Nennwert wert.",
          nl: "Bij Blackjack zijn alle plaatjes (Boer, Vrouw, Koning) 10 punten waard. Azen kunnen 1 of 11 waard zijn, en genummerde kaarten zijn hun nominale waarde waard."
        }
      },
      {
        question: {
          en: "What is 'trump' in card games?",
          es: "¿Qué es 'triunfo' en los juegos de cartas?",
          de: "Was ist 'Trumpf' bei Kartenspielen?",
          nl: "Wat is 'troef' bij kaartspellen?"
        },
        options: [
          { en: "The highest card in the deck", es: "La carta más alta del mazo", de: "Die höchste Karte im Deck", nl: "De hoogste kaart in het spel" },
          { en: "A suit that beats other suits", es: "Un palo que vence a otros palos", de: "Eine Farbe, die andere Farben schlägt", nl: "Een kleur die andere kleuren verslaat" },
          { en: "The first card played", es: "La primera carta jugada", de: "Die erste gespielte Karte", nl: "De eerste gespeelde kaart" },
          { en: "Any face card", es: "Cualquier carta de figura", de: "Jede Bildkarte", nl: "Elk plaatje" }
        ],
        correct: 1,
        explanation: {
          en: "A trump suit is a designated suit that ranks higher than other suits in trick-taking games. Even the lowest trump card can beat the highest card of a non-trump suit.",
          es: "Un palo de triunfo es un palo designado que se clasifica más alto que otros palos en juegos de bazas. Incluso la carta de triunfo más baja puede vencer a la carta más alta de un palo que no es triunfo.",
          de: "Eine Trumpffarbe ist eine festgelegte Farbe, die höher rangiert als andere Farben in Stichspielen. Selbst die niedrigste Trumpfkarte kann die höchste Karte einer Nicht-Trumpf-Farbe schlagen.",
          nl: "Een troefkleur is een aangewezen kleur die hoger rangschikt dan andere kleuren in troefspellen. Zelfs de laagste troefkaart kan de hoogste kaart van een niet-troefkleur verslaan."
        }
      },
      {
        question: {
          en: "In Uno, what does a 'Draw Two' card do?",
          es: "En Uno, ¿qué hace una carta 'Roba Dos'?",
          de: "Was macht eine 'Zwei Ziehen'-Karte beim Uno?",
          nl: "Wat doet een 'Trek Twee'-kaart bij Uno?"
        },
        options: [
          { en: "You draw two cards", es: "Tú robas dos cartas", de: "Du ziehst zwei Karten", nl: "Jij trekt twee kaarten" },
          { en: "Next player draws two and skips turn", es: "El siguiente jugador roba dos y pierde turno", de: "Nächster Spieler zieht zwei und überspringt den Zug", nl: "Volgende speler trekt twee en slaat beurt over" },
          { en: "All players draw two", es: "Todos los jugadores roban dos", de: "Alle Spieler ziehen zwei", nl: "Alle spelers trekken twee" },
          { en: "Doubles your next card play", es: "Duplica tu siguiente jugada de carta", de: "Verdoppelt dein nächstes Kartenspiel", nl: "Verdubbelt je volgende kaartspel" }
        ],
        correct: 1,
        explanation: {
          en: "When you play a Draw Two card, the next player must draw two cards from the deck and forfeit their turn unless they can play another Draw Two card.",
          es: "Cuando juegas una carta Roba Dos, el siguiente jugador debe robar dos cartas del mazo y perder su turno a menos que pueda jugar otra carta Roba Dos.",
          de: "Wenn du eine Zwei Ziehen-Karte spielst, muss der nächste Spieler zwei Karten vom Stapel ziehen und seinen Zug verfallen lassen, es sei denn, er kann eine weitere Zwei Ziehen-Karte spielen.",
          nl: "Wanneer je een Trek Twee-kaart speelt, moet de volgende speler twee kaarten van het deck trekken en hun beurt verliezen, tenzij ze een andere Trek Twee-kaart kunnen spelen."
        }
      },
      {
        question: {
          en: "What is a 'meld' in card games?",
          es: "¿Qué es una 'combinación' en los juegos de cartas?",
          de: "Was ist eine 'Meldung' bei Kartenspielen?",
          nl: "Wat is een 'meld' bij kaartspellen?"
        },
        options: [
          { en: "Shuffling the deck", es: "Barajar el mazo", de: "Das Deck mischen", nl: "Het deck schudden" },
          { en: "A matching set of cards laid down", es: "Un conjunto coincidente de cartas puestas", de: "Ein passendes Set von ausgelegten Karten", nl: "Een passende set van neergelegde kaarten" },
          { en: "Drawing a card", es: "Robar una carta", de: "Eine Karte ziehen", nl: "Een kaart trekken" },
          { en: "Discarding your last card", es: "Descartar tu última carta", de: "Deine letzte Karte abwerfen", nl: "Je laatste kaart weggooien" }
        ],
        correct: 1,
        explanation: {
          en: "A meld is a combination of matching cards that players lay down in games like Rummy, such as three of a kind or a sequence of consecutive cards.",
          es: "Una combinación es un conjunto de cartas coincidentes que los jugadores ponen en juegos como Rummy, como tres de un tipo o una secuencia de cartas consecutivas.",
          de: "Eine Meldung ist eine Kombination von passenden Karten, die Spieler in Spielen wie Rummy auslegen, wie ein Drilling oder eine Sequenz aufeinanderfolgender Karten.",
          nl: "Een meld is een combinatie van passende kaarten die spelers neerleggen in spellen zoals Rummy, zoals drie van een soort of een reeks opeenvolgende kaarten."
        }
      },
      {
        question: {
          en: "In Spades, what happens if you don't make your bid?",
          es: "En Spades, ¿qué pasa si no cumples tu apuesta?",
          de: "Was passiert beim Spades, wenn du dein Gebot nicht erfüllst?",
          nl: "Wat gebeurt er bij Spades als je je bod niet haalt?"
        },
        options: [
          { en: "You lose all your points", es: "Pierdes todos tus puntos", de: "Du verlierst alle deine Punkte", nl: "Je verliest al je punten" },
          { en: "You lose 10 times your bid", es: "Pierdes 10 veces tu apuesta", de: "Du verlierst das 10-fache deines Gebots", nl: "Je verliest 10 keer je bod" },
          { en: "Nothing happens", es: "No pasa nada", de: "Es passiert nichts", nl: "Er gebeurt niets" },
          { en: "Game ends immediately", es: "El juego termina inmediatamente", de: "Das Spiel endet sofort", nl: "Het spel eindigt onmiddellijk" }
        ],
        correct: 1,
        explanation: {
          en: "In Spades, if you fail to make your bid (don't win the number of tricks you predicted), you lose 10 points for each trick you bid. This is called being 'set' or going 'under'.",
          es: "En Spades, si no cumples tu apuesta (no ganas el número de bazas que predijiste), pierdes 10 puntos por cada baza que apostaste. Esto se llama ser 'fijado' o ir 'debajo'.",
          de: "Beim Spades verlierst du, wenn du dein Gebot nicht erfüllst (nicht die Anzahl der Stiche gewinnst, die du vorhergesagt hast), 10 Punkte für jeden Stich, den du geboten hast. Dies wird als 'set' oder 'under' bezeichnet.",
          nl: "Bij Spades verlies je, als je je bod niet haalt (niet het aantal slagen wint dat je voorspelde), 10 punten voor elke slag die je bood. Dit wordt 'set' of 'under' gaan genoemd."
        }
      },
      {
        question: {
          en: "What is 'going alone' in Euchre?",
          es: "¿Qué es 'ir solo' en Euchre?",
          de: "Was ist 'alleine gehen' beim Euchre?",
          nl: "Wat is 'alleen gaan' bij Euchre?"
        },
        options: [
          { en: "Playing without a partner", es: "Jugar sin compañero", de: "Ohne Partner spielen", nl: "Spelen zonder partner" },
          { en: "Leaving the game", es: "Dejar el juego", de: "Das Spiel verlassen", nl: "Het spel verlaten" },
          { en: "Bidding the maximum", es: "Apostar el máximo", de: "Das Maximum bieten", nl: "Het maximum bieden" },
          { en: "Drawing extra cards", es: "Robar cartas extra", de: "Extra Karten ziehen", nl: "Extra kaarten trekken" }
        ],
        correct: 0,
        explanation: {
          en: "Going alone in Euchre means playing a hand without your partner's help. If successful, your team scores 4 points instead of the usual 2, but you risk scoring nothing if you fail.",
          es: "Ir solo en Euchre significa jugar una mano sin la ayuda de tu compañero. Si tienes éxito, tu equipo anota 4 puntos en lugar de los 2 habituales, pero arriesgas no anotar nada si fallas.",
          de: "Alleine gehen beim Euchre bedeutet, eine Hand ohne die Hilfe deines Partners zu spielen. Bei Erfolg erzielt dein Team 4 Punkte statt der üblichen 2, aber du riskierst, nichts zu punkten, wenn du scheiterst.",
          nl: "Alleen gaan bij Euchre betekent een hand spelen zonder de hulp van je partner. Bij succes scoort je team 4 punten in plaats van de gebruikelijke 2, maar je riskeert niets te scoren als je faalt."
        }
      },
      {
        question: {
          en: "In Cribbage, what is the 'crib'?",
          es: "En Cribbage, ¿qué es la 'cuna'?",
          de: "Was ist beim Cribbage die 'Krippe'?",
          nl: "Wat is de 'crib' bij Cribbage?"
        },
        options: [
          { en: "A scoring track", es: "Una pista de puntuación", de: "Eine Punktezählspur", nl: "Een scoretrack" },
          { en: "Extra hand for dealer", es: "Mano extra para el repartidor", de: "Extra Hand für den Geber", nl: "Extra hand voor de deler" },
          { en: "The discard pile", es: "La pila de descarte", de: "Der Ablagestapel", nl: "De aflegstapel" },
          { en: "A special card", es: "Una carta especial", de: "Eine spezielle Karte", nl: "Een speciale kaart" }
        ],
        correct: 1,
        explanation: {
          en: "The crib is an extra hand in Cribbage formed by each player discarding cards. It belongs to the dealer and is scored after the regular hands are played.",
          es: "La cuna es una mano extra en Cribbage formada por cada jugador descartando cartas. Pertenece al repartidor y se puntúa después de que se juegan las manos regulares.",
          de: "Die Krippe ist eine Extra-Hand beim Cribbage, die durch das Abwerfen von Karten jedes Spielers gebildet wird. Sie gehört dem Geber und wird nach dem Spielen der regulären Hände gewertet.",
          nl: "De crib is een extra hand bij Cribbage gevormd door elke speler die kaarten weggooit. Het behoort toe aan de deler en wordt gescoord nadat de reguliere handen zijn gespeeld."
        }
      },
      {
        question: {
          en: "What is a 'flush' in Poker?",
          es: "¿Qué es una 'escalera de color' en Póker?",
          de: "Was ist ein 'Flush' beim Poker?",
          nl: "Wat is een 'flush' bij Poker?"
        },
        options: [
          { en: "Five cards in sequence", es: "Cinco cartas en secuencia", de: "Fünf Karten in Sequenz", nl: "Vijf kaarten op volgorde" },
          { en: "Five cards of the same suit", es: "Cinco cartas del mismo palo", de: "Fünf Karten der gleichen Farbe", nl: "Vijf kaarten van dezelfde kleur" },
          { en: "Four of a kind", es: "Cuatro de un tipo", de: "Vierling", nl: "Vier van een soort" },
          { en: "Two pairs", es: "Dos pares", de: "Zwei Paare", nl: "Twee paren" }
        ],
        correct: 1,
        explanation: {
          en: "A flush is five cards of the same suit, not in sequence. It ranks above a straight but below a full house in standard Poker hand rankings.",
          es: "Una escalera de color es cinco cartas del mismo palo, no en secuencia. Se clasifica por encima de una escalera pero por debajo de un full house en las clasificaciones estándar de manos de Póker.",
          de: "Ein Flush sind fünf Karten der gleichen Farbe, nicht in Sequenz. Er rangiert über einem Straight, aber unter einem Full House in der Standard-Poker-Handrangliste.",
          nl: "Een flush is vijf kaarten van dezelfde kleur, niet op volgorde. Het rangschikt boven een straight maar onder een full house in standaard Poker handranglijsten."
        }
      },
      {
        question: {
          en: "In Gin Rummy, what is 'knocking'?",
          es: "En Gin Rummy, ¿qué es 'tocar'?",
          de: "Was ist 'Klopfen' beim Gin Rummy?",
          nl: "Wat is 'kloppen' bij Gin Rummy?"
        },
        options: [
          { en: "Shuffling the cards loudly", es: "Barajar las cartas ruidosamente", de: "Die Karten laut mischen", nl: "De kaarten luid schudden" },
          { en: "Ending round with low deadwood", es: "Terminar la ronda con poco deadwood", de: "Runde mit wenig Deadwood beenden", nl: "Ronde beëindigen met weinig deadwood" },
          { en: "Challenging another player", es: "Desafiar a otro jugador", de: "Einen anderen Spieler herausfordern", nl: "Een andere speler uitdagen" },
          { en: "Discarding all cards at once", es: "Descartar todas las cartas a la vez", de: "Alle Karten auf einmal abwerfen", nl: "Alle kaarten tegelijk weggooien" }
        ],
        correct: 1,
        explanation: {
          en: "Knocking in Gin Rummy means ending the round when your deadwood (unmatched cards) totals 10 points or less. You then compare hands with your opponent to determine scoring.",
          es: "Tocar en Gin Rummy significa terminar la ronda cuando tu deadwood (cartas no emparejadas) suma 10 puntos o menos. Luego comparas manos con tu oponente para determinar la puntuación.",
          de: "Klopfen beim Gin Rummy bedeutet, die Runde zu beenden, wenn dein Deadwood (nicht passende Karten) 10 Punkte oder weniger beträgt. Du vergleichst dann Hände mit deinem Gegner, um die Punktzahl zu bestimmen.",
          nl: "Kloppen bij Gin Rummy betekent de ronde beëindigen wanneer je deadwood (niet-gepaarde kaarten) 10 punten of minder bedraagt. Je vergelijkt dan handen met je tegenstander om de score te bepalen."
        }
      },
      {
        question: {
          en: "What is a 'trick' in trick-taking card games?",
          es: "¿Qué es una 'baza' en los juegos de cartas de bazas?",
          de: "Was ist ein 'Stich' bei Stichspielen?",
          nl: "Wat is een 'slag' bij troefspellen?"
        },
        options: [
          { en: "A special card ability", es: "Una habilidad especial de carta", de: "Eine spezielle Kartenfähigkeit", nl: "Een speciale kaartbekwaamheid" },
          { en: "One round where each player plays a card", es: "Una ronda donde cada jugador juega una carta", de: "Eine Runde, in der jeder Spieler eine Karte spielt", nl: "Een ronde waarin elke speler een kaart speelt" },
          { en: "A way to shuffle cards", es: "Una forma de barajar cartas", de: "Eine Art, Karten zu mischen", nl: "Een manier om kaarten te schudden" },
          { en: "Winning the game", es: "Ganar el juego", de: "Das Spiel gewinnen", nl: "Het spel winnen" }
        ],
        correct: 1,
        explanation: {
          en: "A trick is one round of play in trick-taking games where each player plays one card, and the highest card (or highest trump) wins the trick and leads the next round.",
          es: "Una baza es una ronda de juego en juegos de bazas donde cada jugador juega una carta, y la carta más alta (o el triunfo más alto) gana la baza y lidera la siguiente ronda.",
          de: "Ein Stich ist eine Spielrunde in Stichspielen, bei der jeder Spieler eine Karte spielt, und die höchste Karte (oder der höchste Trumpf) gewinnt den Stich und führt die nächste Runde an.",
          nl: "Een slag is één speelronde in troefspellen waarbij elke speler één kaart speelt, en de hoogste kaart (of hoogste troef) de slag wint en de volgende ronde leidt."
        }
      },
      {
        question: {
          en: "In Solitaire (Klondike), what is the 'foundation'?",
          es: "En Solitario (Klondike), ¿qué es la 'fundación'?",
          de: "Was ist beim Solitär (Klondike) die 'Grundlage'?",
          nl: "Wat is de 'fundatie' bij Patience (Klondike)?"
        },
        options: [
          { en: "The bottom card in each column", es: "La carta inferior en cada columna", de: "Die unterste Karte in jeder Spalte", nl: "De onderste kaart in elke kolom" },
          { en: "Piles built from Ace to King by suit", es: "Pilas construidas de As a Rey por palo", de: "Stapel von Ass bis König nach Farbe aufgebaut", nl: "Stapels gebouwd van Aas tot Koning per kleur" },
          { en: "The deck you draw from", es: "El mazo del que robas", de: "Das Deck, von dem du ziehst", nl: "Het deck waaruit je trekt" },
          { en: "Cards face down on the tableau", es: "Cartas boca abajo en el tablero", de: "Karten verdeckt auf dem Tableau", nl: "Kaarten met de voorkant naar beneden op het tableau" }
        ],
        correct: 1,
        explanation: {
          en: "The foundation consists of four piles where you build cards from Ace to King in the same suit. The goal of Klondike Solitaire is to move all cards to the foundation piles.",
          es: "La fundación consiste en cuatro pilas donde construyes cartas de As a Rey en el mismo palo. El objetivo del Solitario Klondike es mover todas las cartas a las pilas de fundación.",
          de: "Die Grundlage besteht aus vier Stapeln, auf denen du Karten von Ass bis König in der gleichen Farbe aufbaust. Das Ziel von Klondike Solitär ist es, alle Karten auf die Grundlagenstapel zu verschieben.",
          nl: "De fundatie bestaat uit vier stapels waar je kaarten van Aas tot Koning in dezelfde kleur bouwt. Het doel van Klondike Patience is om alle kaarten naar de fundatiestapels te verplaatsen."
        }
      },
      {
        question: {
          en: "What is a 'straight' in Poker?",
          es: "¿Qué es una 'escalera' en Póker?",
          de: "Was ist eine 'Straße' beim Poker?",
          nl: "Wat is een 'straight' bij Poker?"
        },
        options: [
          { en: "Five cards of the same suit", es: "Cinco cartas del mismo palo", de: "Fünf Karten der gleichen Farbe", nl: "Vijf kaarten van dezelfde kleur" },
          { en: "Five consecutive cards", es: "Cinco cartas consecutivas", de: "Fünf aufeinanderfolgende Karten", nl: "Vijf opeenvolgende kaarten" },
          { en: "Three of a kind", es: "Tres de un tipo", de: "Drilling", nl: "Drie van een soort" },
          { en: "All face cards", es: "Todas las cartas de figura", de: "Alle Bildkarten", nl: "Alle plaatjes" }
        ],
        correct: 1,
        explanation: {
          en: "A straight is five consecutive cards of any suit, such as 5-6-7-8-9. It ranks above three of a kind but below a flush in Poker hand rankings.",
          es: "Una escalera es cinco cartas consecutivas de cualquier palo, como 5-6-7-8-9. Se clasifica por encima de tres de un tipo pero por debajo de una escalera de color en las clasificaciones de manos de Póker.",
          de: "Eine Straße sind fünf aufeinanderfolgende Karten beliebiger Farbe, wie 5-6-7-8-9. Sie rangiert über einem Drilling, aber unter einem Flush in der Poker-Handrangliste.",
          nl: "Een straight is vijf opeenvolgende kaarten van elke kleur, zoals 5-6-7-8-9. Het rangschikt boven drie van een soort maar onder een flush in Poker handranglijsten."
        }
      },
      {
        question: {
          en: "In Canasta, how many cards do you need for an initial meld?",
          es: "En Canasta, ¿cuántas cartas necesitas para una combinación inicial?",
          de: "Wie viele Karten brauchst du für eine Erstmeldung beim Canasta?",
          nl: "Hoeveel kaarten heb je nodig voor een eerste meld bij Canasta?"
        },
        options: [
          { en: "Depends on your team's score", es: "Depende de la puntuación de tu equipo", de: "Hängt von der Punktzahl deines Teams ab", nl: "Hangt af van de score van je team" },
          { en: "Always 3 cards", es: "Siempre 3 cartas", de: "Immer 3 Karten", nl: "Altijd 3 kaarten" },
          { en: "Always 7 cards", es: "Siempre 7 cartas", de: "Immer 7 Karten", nl: "Altijd 7 kaarten" },
          { en: "Any number", es: "Cualquier número", de: "Jede Anzahl", nl: "Elk aantal" }
        ],
        correct: 0,
        explanation: {
          en: "In Canasta, the minimum point value required for an initial meld depends on your team's current score: 0-1495 requires 50 points, 1500-2995 requires 90 points, and 3000+ requires 120 points.",
          es: "En Canasta, el valor de puntos mínimo requerido para una combinación inicial depende de la puntuación actual de tu equipo: 0-1495 requiere 50 puntos, 1500-2995 requiere 90 puntos, y 3000+ requiere 120 puntos.",
          de: "Beim Canasta hängt der minimale Punktwert für eine Erstmeldung von der aktuellen Punktzahl deines Teams ab: 0-1495 erfordert 50 Punkte, 1500-2995 erfordert 90 Punkte und 3000+ erfordert 120 Punkte.",
          nl: "Bij Canasta hangt de minimale puntwaarde vereist voor een eerste meld af van de huidige score van je team: 0-1495 vereist 50 punten, 1500-2995 vereist 90 punten, en 3000+ vereist 120 punten."
        }
      },
      {
        question: {
          en: "What does 'following suit' mean?",
          es: "¿Qué significa 'seguir el palo'?",
          de: "Was bedeutet 'Farbe bedienen'?",
          nl: "Wat betekent 'kleur volgen'?"
        },
        options: [
          { en: "Copying another player's strategy", es: "Copiar la estrategia de otro jugador", de: "Die Strategie eines anderen Spielers kopieren", nl: "De strategie van een andere speler kopiëren" },
          { en: "Playing a card of the same suit as led", es: "Jugar una carta del mismo palo que se lideró", de: "Eine Karte der gleichen Farbe wie angespielt spielen", nl: "Een kaart van dezelfde kleur spelen als geleid" },
          { en: "Wearing matching clothing", es: "Usar ropa a juego", de: "Passende Kleidung tragen", nl: "Bijpassende kleding dragen" },
          { en: "Playing in order", es: "Jugar en orden", de: "In Reihenfolge spielen", nl: "In volgorde spelen" }
        ],
        correct: 1,
        explanation: {
          en: "Following suit means playing a card of the same suit that was led in trick-taking games. Most games require you to follow suit if you have a card of that suit in your hand.",
          es: "Seguir el palo significa jugar una carta del mismo palo que se lideró en juegos de bazas. La mayoría de los juegos requieren que sigas el palo si tienes una carta de ese palo en tu mano.",
          de: "Farbe bedienen bedeutet, eine Karte der gleichen Farbe zu spielen, die in Stichspielen angespielt wurde. Die meisten Spiele erfordern, dass du Farbe bedienst, wenn du eine Karte dieser Farbe in deiner Hand hast.",
          nl: "Kleur volgen betekent een kaart van dezelfde kleur spelen die werd geleid in troefspellen. De meeste spellen vereisen dat je kleur volgt als je een kaart van die kleur in je hand hebt."
        }
      },
      {
        question: {
          en: "In Whist, how many cards does each player receive?",
          es: "En Whist, ¿cuántas cartas recibe cada jugador?",
          de: "Wie viele Karten erhält jeder Spieler beim Whist?",
          nl: "Hoeveel kaarten krijgt elke speler bij Whist?"
        },
        options: [
          { en: "10", es: "10", de: "10", nl: "10" },
          { en: "11", es: "11", de: "11", nl: "11" },
          { en: "12", es: "12", de: "12", nl: "12" },
          { en: "13", es: "13", de: "13", nl: "13" }
        ],
        correct: 3,
        explanation: {
          en: "In Whist, each of the four players receives 13 cards. The last card dealt to the dealer determines the trump suit for that hand.",
          es: "En Whist, cada uno de los cuatro jugadores recibe 13 cartas. La última carta repartida al repartidor determina el palo de triunfo para esa mano.",
          de: "Beim Whist erhält jeder der vier Spieler 13 Karten. Die letzte an den Geber ausgeteilte Karte bestimmt die Trumpffarbe für diese Hand.",
          nl: "Bij Whist krijgt elk van de vier spelers 13 kaarten. De laatste kaart die aan de deler wordt gedeeld, bepaalt de troefkleur voor die hand."
        }
      },
      {
        question: {
          en: "What is a 'wild card'?",
          es: "¿Qué es una 'carta comodín'?",
          de: "Was ist eine 'Wildcard'?",
          nl: "Wat is een 'wildcard'?"
        },
        options: [
          { en: "A card from a different deck", es: "Una carta de un mazo diferente", de: "Eine Karte von einem anderen Deck", nl: "Een kaart van een ander deck" },
          { en: "A card that can represent any other card", es: "Una carta que puede representar cualquier otra carta", de: "Eine Karte, die jede andere Karte darstellen kann", nl: "Een kaart die elke andere kaart kan vertegenwoordigen" },
          { en: "A randomly selected card", es: "Una carta seleccionada al azar", de: "Eine zufällig ausgewählte Karte", nl: "Een willekeurig geselecteerde kaart" },
          { en: "A damaged or marked card", es: "Una carta dañada o marcada", de: "Eine beschädigte oder markierte Karte", nl: "Een beschadigde of gemarkeerde kaart" }
        ],
        correct: 1,
        explanation: {
          en: "A wild card is a card designated to substitute for any other card, commonly used in games like Poker variations and Uno. Jokers are often used as wild cards.",
          es: "Una carta comodín es una carta designada para sustituir a cualquier otra carta, comúnmente usada en juegos como variaciones de Póker y Uno. Los Jokers se usan a menudo como cartas comodín.",
          de: "Eine Wildcard ist eine Karte, die als Ersatz für jede andere Karte dient und häufig in Spielen wie Poker-Varianten und Uno verwendet wird. Joker werden oft als Wildcards verwendet.",
          nl: "Een wildcard is een kaart die is aangewezen om elke andere kaart te vervangen, vaak gebruikt in spellen zoals Poker variaties en Uno. Jokers worden vaak als wildcards gebruikt."
        }
      },
      {
        question: {
          en: "In Texas Hold'em, what are the 'hole cards'?",
          es: "En Texas Hold'em, ¿qué son las 'cartas ocultas'?",
          de: "Was sind beim Texas Hold'em die 'Hole Cards'?",
          nl: "Wat zijn de 'hole cards' bij Texas Hold'em?"
        },
        options: [
          { en: "Cards dealt face-up to all players", es: "Cartas repartidas boca arriba a todos los jugadores", de: "Karten, die allen Spielern offen ausgeteilt werden", nl: "Kaarten open gedeeld aan alle spelers" },
          { en: "The two private cards dealt to each player", es: "Las dos cartas privadas repartidas a cada jugador", de: "Die zwei privaten Karten, die jedem Spieler ausgeteilt werden", nl: "De twee privé kaarten gedeeld aan elke speler" },
          { en: "The community cards on the table", es: "Las cartas comunitarias en la mesa", de: "Die Gemeinschaftskarten auf dem Tisch", nl: "De gemeenschapskaarten op tafel" },
          { en: "Cards discarded during play", es: "Cartas descartadas durante el juego", de: "Karten, die während des Spiels abgeworfen werden", nl: "Kaarten weggegooid tijdens het spel" }
        ],
        correct: 1,
        explanation: {
          en: "Hole cards are the two private cards dealt face-down to each player at the start of a Texas Hold'em hand. Players combine these with community cards to make their best hand.",
          es: "Las cartas ocultas son las dos cartas privadas repartidas boca abajo a cada jugador al inicio de una mano de Texas Hold'em. Los jugadores las combinan con cartas comunitarias para hacer su mejor mano.",
          de: "Hole Cards sind die zwei privaten Karten, die jedem Spieler zu Beginn einer Texas Hold'em Hand verdeckt ausgeteilt werden. Spieler kombinieren diese mit Gemeinschaftskarten, um ihre beste Hand zu bilden.",
          nl: "Hole cards zijn de twee privé kaarten gedekt gedeeld aan elke speler aan het begin van een Texas Hold'em hand. Spelers combineren deze met gemeenschapskaarten om hun beste hand te maken."
        }
      },
      {
        question: {
          en: "What is 'shooting the moon' in Hearts?",
          es: "¿Qué es 'disparar a la luna' en Hearts?",
          de: "Was ist 'Shoot the Moon' beim Hearts?",
          nl: "Wat is 'shooting the moon' bij Hearts?"
        },
        options: [
          { en: "Avoiding all Hearts cards", es: "Evitar todas las cartas de Corazones", de: "Alle Herz-Karten vermeiden", nl: "Alle Harten kaarten vermijden" },
          { en: "Taking all penalty cards (26 pts total)", es: "Tomar todas las cartas de penalización (26 pts total)", de: "Alle Strafkarten nehmen (26 Punkte gesamt)", nl: "Alle strafkaarten nemen (26 pts totaal)" },
          { en: "Winning without taking any tricks", es: "Ganar sin tomar ninguna baza", de: "Gewinnen ohne Stiche zu nehmen", nl: "Winnen zonder slagen te nemen" },
          { en: "Playing the Queen of Spades first", es: "Jugar la Reina de Picas primero", de: "Die Pik-Dame zuerst spielen", nl: "De Schoppen Vrouw eerst spelen" }
        ],
        correct: 1,
        explanation: {
          en: "Shooting the moon means taking all 26 penalty points (all Hearts plus the Queen of Spades). When successful, you score 0 and all opponents get 26 points instead.",
          es: "Disparar a la luna significa tomar todos los 26 puntos de penalización (todos los Corazones más la Reina de Picas). Cuando tienes éxito, anotas 0 y todos los oponentes obtienen 26 puntos en su lugar.",
          de: "Shoot the Moon bedeutet, alle 26 Strafpunkte zu nehmen (alle Herzen plus die Pik-Dame). Bei Erfolg erhältst du 0 Punkte und alle Gegner erhalten stattdessen 26 Punkte.",
          nl: "Shooting the moon betekent alle 26 strafpunten nemen (alle Harten plus de Schoppen Vrouw). Bij succes scoor je 0 en krijgen alle tegenstanders in plaats daarvan 26 punten."
        }
      },
      {
        question: {
          en: "In Blackjack, what is a 'natural' or 'blackjack'?",
          es: "En Blackjack, ¿qué es un 'natural' o 'blackjack'?",
          de: "Was ist beim Blackjack ein 'Natural' oder 'Blackjack'?",
          nl: "Wat is een 'natural' of 'blackjack' bij Blackjack?"
        },
        options: [
          { en: "Any hand totaling 21", es: "Cualquier mano que sume 21", de: "Jede Hand mit Summe 21", nl: "Elke hand met totaal 21" },
          { en: "Ace and 10-value card as first two cards", es: "As y carta de valor 10 como primeras dos cartas", de: "Ass und 10-wertige Karte als erste zwei Karten", nl: "Aas en 10-waarde kaart als eerste twee kaarten" },
          { en: "Three 7s of the same suit", es: "Tres 7s del mismo palo", de: "Drei 7er der gleichen Farbe", nl: "Drie 7's van dezelfde kleur" },
          { en: "Winning without drawing any cards", es: "Ganar sin robar ninguna carta", de: "Gewinnen ohne Karten zu ziehen", nl: "Winnen zonder kaarten te trekken" }
        ],
        correct: 1,
        explanation: {
          en: "A natural blackjack is an Ace combined with any 10-value card (10, Jack, Queen, or King) as your first two cards. It typically pays 3:2 and beats any other 21.",
          es: "Un blackjack natural es un As combinado con cualquier carta de valor 10 (10, Jota, Reina o Rey) como tus primeras dos cartas. Típicamente paga 3:2 y vence cualquier otro 21.",
          de: "Ein natürlicher Blackjack ist ein Ass kombiniert mit einer beliebigen 10-wertigen Karte (10, Bube, Dame oder König) als deine ersten zwei Karten. Er zahlt typischerweise 3:2 und schlägt jede andere 21.",
          nl: "Een natural blackjack is een Aas gecombineerd met elke 10-waarde kaart (10, Boer, Vrouw of Koning) als je eerste twee kaarten. Het betaalt meestal 3:2 en verslaat elke andere 21."
        }
      },
      {
        question: {
          en: "In Poker, what is a 'straight flush'?",
          es: "En Póker, ¿qué es una 'escalera de color'?",
          de: "Was ist beim Poker ein 'Straight Flush'?",
          nl: "Wat is een 'straight flush' bij Poker?"
        },
        options: [
          { en: "Five cards of the same suit in sequence", es: "Cinco cartas del mismo palo en secuencia", de: "Fünf Karten der gleichen Farbe in Sequenz", nl: "Vijf kaarten van dezelfde kleur op volgorde" },
          { en: "Four of a kind plus an ace", es: "Cuatro de un tipo más un as", de: "Vierling plus ein Ass", nl: "Vier van een soort plus een aas" },
          { en: "Three pairs", es: "Tres pares", de: "Drei Paare", nl: "Drie paren" },
          { en: "All face cards of one suit", es: "Todas las figuras de un palo", de: "Alle Bildkarten einer Farbe", nl: "Alle plaatjes van één kleur" }
        ],
        correct: 0,
        explanation: {
          en: "A straight flush is five consecutive cards all of the same suit, such as 7-8-9-10-J of hearts. It's the second-highest hand in poker, beaten only by a royal flush.",
          es: "Una escalera de color son cinco cartas consecutivas todas del mismo palo, como 7-8-9-10-J de corazones. Es la segunda mano más alta en póker, vencida solo por una escalera real.",
          de: "Ein Straight Flush sind fünf aufeinanderfolgende Karten alle der gleichen Farbe, wie 7-8-9-10-B Herz. Es ist die zweithöchste Hand beim Poker, geschlagen nur von einem Royal Flush.",
          nl: "Een straight flush is vijf opeenvolgende kaarten allemaal van dezelfde kleur, zoals 7-8-9-10-B van harten. Het is de op één na hoogste hand bij poker, alleen verslagen door een royal flush."
        }
      },
      {
        question: {
          en: "What is 'sandbagging' in Spades?",
          es: "¿Qué es 'sandbagging' en Spades?",
          de: "Was ist 'Sandbagging' beim Spades?",
          nl: "Wat is 'sandbagging' bij Spades?"
        },
        options: [
          { en: "Deliberately underbidding to collect overtricks", es: "Subapostar deliberadamente para recoger bazas extra", de: "Absichtlich unterbieten, um Überstiche zu sammeln", nl: "Opzettelijk te laag bieden om overslagen te verzamelen" },
          { en: "Blocking another player's moves", es: "Bloquear los movimientos de otro jugador", de: "Die Züge eines anderen Spielers blockieren", nl: "De zetten van een andere speler blokkeren" },
          { en: "Playing slowly to annoy opponents", es: "Jugar lentamente para molestar a los oponentes", de: "Langsam spielen, um Gegner zu ärgern", nl: "Langzaam spelen om tegenstanders te irriteren" },
          { en: "Hiding your best cards", es: "Ocultar tus mejores cartas", de: "Deine besten Karten verstecken", nl: "Je beste kaarten verbergen" }
        ],
        correct: 0,
        explanation: {
          en: "Sandbagging is bidding lower than you expect to win to accumulate overtricks (bags). However, accumulating 10 bags results in a 100-point penalty, making it a risky strategy.",
          es: "Sandbagging es apostar más bajo de lo que esperas ganar para acumular bazas extra (sacos). Sin embargo, acumular 10 sacos resulta en una penalización de 100 puntos, haciéndolo una estrategia arriesgada.",
          de: "Sandbagging bedeutet, niedriger zu bieten als du zu gewinnen erwartest, um Überstiche (Bags) zu sammeln. Allerdings führt das Sammeln von 10 Bags zu einer 100-Punkte-Strafe, was es zu einer riskanten Strategie macht.",
          nl: "Sandbagging is lager bieden dan je verwacht te winnen om overslagen (bags) te verzamelen. Echter, het verzamelen van 10 bags resulteert in een 100-punten straf, wat het een riskante strategie maakt."
        }
      },
      {
        question: {
          en: "In Bridge, what is a 'finesse'?",
          es: "En Bridge, ¿qué es un 'finesse'?",
          de: "Was ist beim Bridge ein 'Finesse'?",
          nl: "Wat is een 'finesse' bij Bridge?"
        },
        options: [
          { en: "A high bid that ends the auction", es: "Una puja alta que termina la subasta", de: "Ein hohes Gebot, das die Auktion beendet", nl: "Een hoog bod dat de veiling beëindigt" },
          { en: "A play attempting to win a trick with a lower card", es: "Una jugada que intenta ganar una baza con una carta más baja", de: "Ein Spiel, das versucht, einen Stich mit einer niedrigeren Karte zu gewinnen", nl: "Een spel dat probeert een slag te winnen met een lagere kaart" },
          { en: "Discarding all cards of one suit", es: "Descartar todas las cartas de un palo", de: "Alle Karten einer Farbe abwerfen", nl: "Alle kaarten van één kleur weggooien" },
          { en: "Winning all 13 tricks", es: "Ganar las 13 bazas", de: "Alle 13 Stiche gewinnen", nl: "Alle 13 slagen winnen" }
        ],
        correct: 1,
        explanation: {
          en: "A finesse is a technique where you attempt to win a trick with a card that isn't the highest, hoping an opponent's higher card is favorably positioned. It's a fundamental Bridge strategy.",
          es: "Un finesse es una técnica donde intentas ganar una baza con una carta que no es la más alta, esperando que una carta más alta del oponente esté favorablemente posicionada. Es una estrategia fundamental de Bridge.",
          de: "Ein Finesse ist eine Technik, bei der du versuchst, einen Stich mit einer Karte zu gewinnen, die nicht die höchste ist, in der Hoffnung, dass eine höhere Karte des Gegners günstig positioniert ist. Es ist eine grundlegende Bridge-Strategie.",
          nl: "Een finesse is een techniek waarbij je probeert een slag te winnen met een kaart die niet de hoogste is, hopend dat een hogere kaart van de tegenstander gunstig gepositioneerd is. Het is een fundamentele Bridge strategie."
        }
      },
      {
        question: {
          en: "What is 'bidding' in contract card games?",
          es: "¿Qué es 'pujar' en juegos de cartas de contrato?",
          de: "Was ist 'Bieten' bei Kontraktkartenspielen?",
          nl: "Wat is 'bieden' bij contract kaartspellen?"
        },
        options: [
          { en: "Offering money to buy cards", es: "Ofrecer dinero para comprar cartas", de: "Geld anbieten, um Karten zu kaufen", nl: "Geld aanbieden om kaarten te kopen" },
          { en: "Predicting how many tricks you'll win", es: "Predecir cuántas bazas ganarás", de: "Vorhersagen, wie viele Stiche du gewinnen wirst", nl: "Voorspellen hoeveel slagen je zult winnen" },
          { en: "Exchanging cards with opponents", es: "Intercambiar cartas con oponentes", de: "Karten mit Gegnern tauschen", nl: "Kaarten ruilen met tegenstanders" },
          { en: "Challenging the dealer", es: "Desafiar al repartidor", de: "Den Geber herausfordern", nl: "De deler uitdagen" }
        ],
        correct: 1,
        explanation: {
          en: "Bidding is the process of declaring how many tricks you expect to win in games like Bridge and Spades. Your bid determines your contract and scoring obligations for that hand.",
          es: "Pujar es el proceso de declarar cuántas bazas esperas ganar en juegos como Bridge y Spades. Tu puja determina tu contrato y obligaciones de puntuación para esa mano.",
          de: "Bieten ist der Prozess des Erklärens, wie viele Stiche du in Spielen wie Bridge und Spades zu gewinnen erwartest. Dein Gebot bestimmt deinen Kontrakt und deine Punkteverpflichtungen für diese Hand.",
          nl: "Bieden is het proces van verklaren hoeveel slagen je verwacht te winnen in spellen zoals Bridge en Spades. Je bod bepaalt je contract en score verplichtingen voor die hand."
        }
      },
      {
        question: {
          en: "In Rummy, what is 'deadwood'?",
          es: "En Rummy, ¿qué es 'deadwood'?",
          de: "Was ist beim Rummy 'Deadwood'?",
          nl: "Wat is 'deadwood' bij Rummy?"
        },
        options: [
          { en: "Cards that have been discarded", es: "Cartas que han sido descartadas", de: "Karten, die abgeworfen wurden", nl: "Kaarten die zijn weggegooid" },
          { en: "Unmatched cards remaining in your hand", es: "Cartas no emparejadas que quedan en tu mano", de: "Nicht passende Karten, die in deiner Hand verbleiben", nl: "Niet-gepaarde kaarten die in je hand overblijven" },
          { en: "Face cards only", es: "Solo cartas de figura", de: "Nur Bildkarten", nl: "Alleen plaatjes" },
          { en: "Cards dealt but not used", es: "Cartas repartidas pero no usadas", de: "Ausgeteilte, aber nicht verwendete Karten", nl: "Gedeelde maar niet gebruikte kaarten" }
        ],
        correct: 1,
        explanation: {
          en: "Deadwood refers to cards in your hand that are not part of any meld (set or run). In Gin Rummy, the goal is to minimize deadwood points when knocking or going gin.",
          es: "Deadwood se refiere a cartas en tu mano que no son parte de ninguna combinación (conjunto o escalera). En Gin Rummy, el objetivo es minimizar los puntos de deadwood al tocar o hacer gin.",
          de: "Deadwood bezieht sich auf Karten in deiner Hand, die nicht Teil einer Meldung (Set oder Lauf) sind. Beim Gin Rummy ist das Ziel, Deadwood-Punkte beim Klopfen oder Gin machen zu minimieren.",
          nl: "Deadwood verwijst naar kaarten in je hand die geen deel uitmaken van een meld (set of run). Bij Gin Rummy is het doel om deadwood punten te minimaliseren bij het kloppen of gin gaan."
        }
      },
      {
        question: {
          en: "What is 'pinochle' in the card game Pinochle?",
          es: "¿Qué es 'pinochle' en el juego de cartas Pinochle?",
          de: "Was ist 'Pinochle' im Kartenspiel Pinochle?",
          nl: "Wat is 'pinochle' in het kaartspel Pinochle?"
        },
        options: [
          { en: "Queen of Spades and Jack of Diamonds", es: "Reina de Picas y Jota de Diamantes", de: "Pik-Dame und Karo-Bube", nl: "Schoppen Vrouw en Ruiten Boer" },
          { en: "Two Aces of the same suit", es: "Dos Ases del mismo palo", de: "Zwei Asse der gleichen Farbe", nl: "Twee Azen van dezelfde kleur" },
          { en: "All four Kings", es: "Los cuatro Reyes", de: "Alle vier Könige", nl: "Alle vier Koningen" },
          { en: "Ace through 10 of trump suit", es: "As a 10 del palo de triunfo", de: "Ass bis 10 der Trumpffarbe", nl: "Aas tot 10 van troefkleur" }
        ],
        correct: 0,
        explanation: {
          en: "In Pinochle, a 'pinochle' is the meld of the Queen of Spades and Jack of Diamonds, worth 40 points. It's one of the most valuable common melds in the game.",
          es: "En Pinochle, un 'pinochle' es la combinación de la Reina de Picas y la Jota de Diamantes, vale 40 puntos. Es una de las combinaciones comunes más valiosas del juego.",
          de: "Beim Pinochle ist ein 'Pinochle' die Meldung von Pik-Dame und Karo-Bube, wert 40 Punkte. Es ist eine der wertvollsten gemeinsamen Meldungen im Spiel.",
          nl: "Bij Pinochle is een 'pinochle' de meld van de Schoppen Vrouw en Ruiten Boer, waard 40 punten. Het is een van de meest waardevolle gewone melds in het spel."
        }
      },
      {
        question: {
          en: "In Uno, what does a 'Reverse' card do?",
          es: "En Uno, ¿qué hace una carta 'Reversa'?",
          de: "Was macht eine 'Richtungswechsel'-Karte beim Uno?",
          nl: "Wat doet een 'Omdraaien'-kaart bij Uno?"
        },
        options: [
          { en: "Returns all cards to the deck", es: "Devuelve todas las cartas al mazo", de: "Gibt alle Karten zum Stapel zurück", nl: "Geeft alle kaarten terug aan het deck" },
          { en: "Changes the direction of play", es: "Cambia la dirección del juego", de: "Ändert die Spielrichtung", nl: "Verandert de speelrichting" },
          { en: "Reverses the card colors", es: "Invierte los colores de las cartas", de: "Kehrt die Kartenfarben um", nl: "Keert de kaart kleuren om" },
          { en: "Allows you to play out of turn", es: "Te permite jugar fuera de turno", de: "Erlaubt dir, außer der Reihe zu spielen", nl: "Staat je toe buiten de beurt te spelen" }
        ],
        correct: 1,
        explanation: {
          en: "A Reverse card changes the direction of play from clockwise to counterclockwise or vice versa. With only two players, it effectively acts like a Skip card.",
          es: "Una carta Reversa cambia la dirección del juego de sentido horario a antihorario o viceversa. Con solo dos jugadores, actúa efectivamente como una carta Saltar.",
          de: "Eine Richtungswechsel-Karte ändert die Spielrichtung von im Uhrzeigersinn zu gegen den Uhrzeigersinn oder umgekehrt. Mit nur zwei Spielern wirkt sie effektiv wie eine Aussetzen-Karte.",
          nl: "Een Omdraaien-kaart verandert de speelrichting van met de klok mee naar tegen de klok in of vice versa. Met slechts twee spelers werkt het effectief als een Sla Over-kaart."
        }
      },
      {
        question: {
          en: "What is a 'run' in Cribbage?",
          es: "¿Qué es una 'escalera' en Cribbage?",
          de: "Was ist ein 'Lauf' beim Cribbage?",
          nl: "Wat is een 'run' bij Cribbage?"
        },
        options: [
          { en: "Three or more consecutive cards", es: "Tres o más cartas consecutivas", de: "Drei oder mehr aufeinanderfolgende Karten", nl: "Drie of meer opeenvolgende kaarten" },
          { en: "Four cards of the same suit", es: "Cuatro cartas del mismo palo", de: "Vier Karten der gleichen Farbe", nl: "Vier kaarten van dezelfde kleur" },
          { en: "Getting to 121 points first", es: "Llegar primero a 121 puntos", de: "Zuerst 121 Punkte erreichen", nl: "Als eerste 121 punten behalen" },
          { en: "Playing all your cards", es: "Jugar todas tus cartas", de: "Alle deine Karten spielen", nl: "Al je kaarten spelen" }
        ],
        correct: 0,
        explanation: {
          en: "In Cribbage, a run is a sequence of three or more consecutive cards regardless of suit. A 3-card run scores 3 points, 4-card run scores 4 points, and so on.",
          es: "En Cribbage, una escalera es una secuencia de tres o más cartas consecutivas independientemente del palo. Una escalera de 3 cartas puntúa 3 puntos, una de 4 cartas puntúa 4 puntos, y así sucesivamente.",
          de: "Beim Cribbage ist ein Lauf eine Sequenz von drei oder mehr aufeinanderfolgenden Karten unabhängig von der Farbe. Ein 3-Karten-Lauf bringt 3 Punkte, ein 4-Karten-Lauf 4 Punkte, und so weiter.",
          nl: "Bij Cribbage is een run een reeks van drie of meer opeenvolgende kaarten ongeacht de kleur. Een 3-kaarten run scoort 3 punten, een 4-kaarten run scoort 4 punten, enzovoort."
        }
      },
      {
        question: {
          en: "In Poker, what does 'the river' refer to?",
          es: "En Póker, ¿a qué se refiere 'el river'?",
          de: "Worauf bezieht sich beim Poker 'der River'?",
          nl: "Waar verwijst 'de river' naar bij Poker?"
        },
        options: [
          { en: "The first three community cards", es: "Las primeras tres cartas comunitarias", de: "Die ersten drei Gemeinschaftskarten", nl: "De eerste drie gemeenschapskaarten" },
          { en: "The fourth community card", es: "La cuarta carta comunitaria", de: "Die vierte Gemeinschaftskarte", nl: "De vierde gemeenschapskaart" },
          { en: "The fifth and final community card", es: "La quinta y última carta comunitaria", de: "Die fünfte und letzte Gemeinschaftskarte", nl: "De vijfde en laatste gemeenschapskaart" },
          { en: "The dealer's position", es: "La posición del repartidor", de: "Die Position des Gebers", nl: "De positie van de deler" }
        ],
        correct: 2,
        explanation: {
          en: "The river is the fifth and final community card dealt in Texas Hold'em and Omaha poker. It's followed by the final betting round before the showdown.",
          es: "El river es la quinta y última carta comunitaria repartida en Texas Hold'em y Omaha póker. Es seguida por la ronda final de apuestas antes del showdown.",
          de: "Der River ist die fünfte und letzte Gemeinschaftskarte, die beim Texas Hold'em und Omaha Poker ausgeteilt wird. Es folgt die letzte Wettrunde vor dem Showdown.",
          nl: "De river is de vijfde en laatste gemeenschapskaart gedeeld bij Texas Hold'em en Omaha poker. Het wordt gevolgd door de laatste inzetronde voor de showdown."
        }
      },
      {
        question: {
          en: "What is 'undertrumping' in trick-taking games?",
          es: "¿Qué es 'undertrumping' en juegos de bazas?",
          de: "Was ist 'Untertrumpfen' bei Stichspielen?",
          nl: "Wat is 'undertrumping' bij troefspellen?"
        },
        options: [
          { en: "Playing a lower trump when you can't win the trick", es: "Jugar un triunfo más bajo cuando no puedes ganar la baza", de: "Einen niedrigeren Trumpf spielen, wenn du den Stich nicht gewinnen kannst", nl: "Een lagere troef spelen wanneer je de slag niet kunt winnen" },
          { en: "Not playing trump when required", es: "No jugar triunfo cuando se requiere", de: "Trumpf nicht spielen, wenn erforderlich", nl: "Troef niet spelen wanneer vereist" },
          { en: "Playing the lowest card possible", es: "Jugar la carta más baja posible", de: "Die niedrigste mögliche Karte spielen", nl: "De laagst mogelijke kaart spelen" },
          { en: "Bidding lower than expected", es: "Apostar más bajo de lo esperado", de: "Niedriger bieten als erwartet", nl: "Lager bieden dan verwacht" }
        ],
        correct: 0,
        explanation: {
          en: "Undertrumping is playing a trump card lower than one already played when you have no cards of the led suit. It's often done to avoid winning an unwanted trick or to signal to your partner.",
          es: "Undertrumping es jugar una carta de triunfo más baja que una ya jugada cuando no tienes cartas del palo liderado. A menudo se hace para evitar ganar una baza no deseada o señalar a tu compañero.",
          de: "Untertrumpfen bedeutet, eine Trumpfkarte niedriger als eine bereits gespielte zu spielen, wenn du keine Karten der angespielten Farbe hast. Es wird oft getan, um einen unerwünschten Stich zu vermeiden oder dem Partner zu signalisieren.",
          nl: "Undertrumping is het spelen van een troefkaart lager dan één die al gespeeld is wanneer je geen kaarten hebt van de geleide kleur. Het wordt vaak gedaan om een ongewenste slag te vermijden of te seinen naar je partner."
        }
      },
      {
        question: {
          en: "In Canasta, what is a 'canasta'?",
          es: "En Canasta, ¿qué es una 'canasta'?",
          de: "Was ist beim Canasta eine 'Canasta'?",
          nl: "Wat is een 'canasta' bij Canasta?"
        },
        options: [
          { en: "A meld of seven or more cards", es: "Una combinación de siete o más cartas", de: "Eine Meldung von sieben oder mehr Karten", nl: "Een meld van zeven of meer kaarten" },
          { en: "The discard pile", es: "La pila de descarte", de: "Der Ablagestapel", nl: "De aflegstapel" },
          { en: "A pair of jokers", es: "Un par de comodines", de: "Ein Paar Joker", nl: "Een paar jokers" },
          { en: "Going out with no deadwood", es: "Salir sin deadwood", de: "Ausgehen ohne Deadwood", nl: "Uitgaan zonder deadwood" }
        ],
        correct: 0,
        explanation: {
          en: "A canasta is a meld of seven or more cards of the same rank. Natural canastas (no wild cards) score 500 points, while mixed canastas score 300 points. You need at least one canasta to go out.",
          es: "Una canasta es una combinación de siete o más cartas del mismo rango. Las canastas naturales (sin comodines) puntúan 500 puntos, mientras que las canastas mixtas puntúan 300 puntos. Necesitas al menos una canasta para salir.",
          de: "Eine Canasta ist eine Meldung von sieben oder mehr Karten des gleichen Ranges. Natürliche Canastas (keine Wildcards) bringen 500 Punkte, während gemischte Canastas 300 Punkte bringen. Du brauchst mindestens eine Canasta, um auszugehen.",
          nl: "Een canasta is een meld van zeven of meer kaarten van dezelfde rang. Natuurlijke canasta's (geen wildcards) scoren 500 punten, terwijl gemengde canasta's 300 punten scoren. Je hebt minstens één canasta nodig om uit te gaan."
        }
      },
      {
        question: {
          en: "What is 'the flop' in Texas Hold'em?",
          es: "¿Qué es 'el flop' en Texas Hold'em?",
          de: "Was ist 'der Flop' beim Texas Hold'em?",
          nl: "Wat is 'de flop' bij Texas Hold'em?"
        },
        options: [
          { en: "The first three community cards dealt", es: "Las primeras tres cartas comunitarias repartidas", de: "Die ersten drei ausgeteilten Gemeinschaftskarten", nl: "De eerste drie gedeelde gemeenschapskaarten" },
          { en: "When all players fold", es: "Cuando todos los jugadores se retiran", de: "Wenn alle Spieler aussteigen", nl: "Wanneer alle spelers passen" },
          { en: "The worst possible hand", es: "La peor mano posible", de: "Die schlechteste mögliche Hand", nl: "De slechtst mogelijke hand" },
          { en: "The dealer button position", es: "La posición del botón del repartidor", de: "Die Dealer-Button-Position", nl: "De dealer button positie" }
        ],
        correct: 0,
        explanation: {
          en: "The flop is the first three community cards dealt face-up simultaneously in Texas Hold'em, followed by a round of betting. It comes after the pre-flop betting round.",
          es: "El flop son las primeras tres cartas comunitarias repartidas boca arriba simultáneamente en Texas Hold'em, seguidas de una ronda de apuestas. Viene después de la ronda de apuestas pre-flop.",
          de: "Der Flop sind die ersten drei Gemeinschaftskarten, die beim Texas Hold'em gleichzeitig offen ausgeteilt werden, gefolgt von einer Wettrunde. Er kommt nach der Pre-Flop-Wettrunde.",
          nl: "De flop is de eerste drie gemeenschapskaarten gelijktijdig open gedeeld bij Texas Hold'em, gevolgd door een inzetronde. Het komt na de pre-flop inzetronde."
        }
      },
      {
        question: {
          en: "In Euchre, what is a 'bower'?",
          es: "En Euchre, ¿qué es un 'bower'?",
          de: "Was ist beim Euchre ein 'Bower'?",
          nl: "Wat is een 'bower' bij Euchre?"
        },
        options: [
          { en: "The trump Jacks (highest cards)", es: "Las Jotas de triunfo (cartas más altas)", de: "Die Trumpf-Buben (höchste Karten)", nl: "De troef Boeren (hoogste kaarten)" },
          { en: "The player who deals", es: "El jugador que reparte", de: "Der Spieler, der gibt", nl: "De speler die deelt" },
          { en: "A meld of three cards", es: "Una combinación de tres cartas", de: "Eine Meldung von drei Karten", nl: "Een meld van drie kaarten" },
          { en: "The discard pile", es: "La pila de descarte", de: "Der Ablagestapel", nl: "De aflegstapel" }
        ],
        correct: 0,
        explanation: {
          en: "Bowers are the two highest cards in Euchre. The 'right bower' is the Jack of trump, and the 'left bower' is the Jack of the same color as trump, which becomes trump too.",
          es: "Los bowers son las dos cartas más altas en Euchre. El 'right bower' es la Jota de triunfo, y el 'left bower' es la Jota del mismo color que el triunfo, que también se convierte en triunfo.",
          de: "Bowers sind die zwei höchsten Karten beim Euchre. Der 'Right Bower' ist der Bube der Trumpffarbe, und der 'Left Bower' ist der Bube derselben Farbe wie Trumpf, der auch zum Trumpf wird.",
          nl: "Bowers zijn de twee hoogste kaarten bij Euchre. De 'right bower' is de Boer van troef, en de 'left bower' is de Boer van dezelfde kleur als troef, die ook troef wordt."
        }
      },
      {
        question: {
          en: "What is 'going gin' in Gin Rummy?",
          es: "¿Qué es 'hacer gin' en Gin Rummy?",
          de: "Was ist 'Gin machen' beim Gin Rummy?",
          nl: "Wat is 'gin gaan' bij Gin Rummy?"
        },
        options: [
          { en: "Forming all cards into melds with no deadwood", es: "Formar todas las cartas en combinaciones sin deadwood", de: "Alle Karten in Meldungen bilden ohne Deadwood", nl: "Alle kaarten in melds vormen zonder deadwood" },
          { en: "Discarding your last card", es: "Descartar tu última carta", de: "Deine letzte Karte abwerfen", nl: "Je laatste kaart weggooien" },
          { en: "Knocking with exactly 10 points", es: "Tocar con exactamente 10 puntos", de: "Klopfen mit genau 10 Punkten", nl: "Kloppen met precies 10 punten" },
          { en: "Winning three hands in a row", es: "Ganar tres manos seguidas", de: "Drei Hände in Folge gewinnen", nl: "Drie handen op rij winnen" }
        ],
        correct: 0,
        explanation: {
          en: "Going gin means melding all 10 cards in your hand with no deadwood. This scores a 25-point bonus plus your opponent's deadwood points, and your opponent cannot lay off cards.",
          es: "Hacer gin significa combinar todas las 10 cartas en tu mano sin deadwood. Esto puntúa un bono de 25 puntos más los puntos de deadwood de tu oponente, y tu oponente no puede descartar cartas.",
          de: "Gin machen bedeutet, alle 10 Karten in deiner Hand ohne Deadwood zu melden. Dies bringt einen 25-Punkte-Bonus plus die Deadwood-Punkte deines Gegners, und dein Gegner kann keine Karten ablegen.",
          nl: "Gin gaan betekent alle 10 kaarten in je hand melden zonder deadwood. Dit scoort een 25-punten bonus plus je tegenstanders deadwood punten, en je tegenstander kan geen kaarten afleggen."
        }
      },
      {
        question: {
          en: "In Poker, what is 'four of a kind'?",
          es: "En Póker, ¿qué es un 'póker'?",
          de: "Was ist beim Poker ein 'Vierling'?",
          nl: "Wat is 'vier van een soort' bij Poker?"
        },
        options: [
          { en: "Four cards of the same rank", es: "Cuatro cartas del mismo rango", de: "Vier Karten des gleichen Ranges", nl: "Vier kaarten van dezelfde rang" },
          { en: "Four consecutive cards", es: "Cuatro cartas consecutivas", de: "Vier aufeinanderfolgende Karten", nl: "Vier opeenvolgende kaarten" },
          { en: "Two pairs", es: "Dos pares", de: "Zwei Paare", nl: "Twee paren" },
          { en: "All face cards", es: "Todas las figuras", de: "Alle Bildkarten", nl: "Alle plaatjes" }
        ],
        correct: 0,
        explanation: {
          en: "Four of a kind (also called quads) is four cards of the same rank, such as four 8s. It ranks above a full house and below a straight flush in poker hand rankings.",
          es: "Un póker (también llamado quads) son cuatro cartas del mismo rango, como cuatro 8s. Se clasifica por encima de un full house y por debajo de una escalera de color en las clasificaciones de manos de póker.",
          de: "Ein Vierling (auch Quads genannt) sind vier Karten des gleichen Ranges, wie vier 8en. Er rangiert über einem Full House und unter einem Straight Flush in der Poker-Handrangliste.",
          nl: "Vier van een soort (ook wel quads genoemd) is vier kaarten van dezelfde rang, zoals vier 8'en. Het rangschikt boven een full house en onder een straight flush in poker handranglijsten."
        }
      },
      {
        question: {
          en: "What is 'the turn' in Texas Hold'em?",
          es: "¿Qué es 'el turn' en Texas Hold'em?",
          de: "Was ist 'der Turn' beim Texas Hold'em?",
          nl: "Wat is 'de turn' bij Texas Hold'em?"
        },
        options: [
          { en: "The first betting round", es: "La primera ronda de apuestas", de: "Die erste Wettrunde", nl: "De eerste inzetronde" },
          { en: "The second betting round", es: "La segunda ronda de apuestas", de: "Die zweite Wettrunde", nl: "De tweede inzetronde" },
          { en: "The fourth community card", es: "La cuarta carta comunitaria", de: "Die vierte Gemeinschaftskarte", nl: "De vierde gemeenschapskaart" },
          { en: "Passing the dealer button", es: "Pasar el botón del repartidor", de: "Den Dealer-Button weitergeben", nl: "De dealer button doorgeven" }
        ],
        correct: 2,
        explanation: {
          en: "The turn (also called fourth street) is the fourth community card dealt in Texas Hold'em and Omaha. It's dealt after the flop and followed by another betting round.",
          es: "El turn (también llamado fourth street) es la cuarta carta comunitaria repartida en Texas Hold'em y Omaha. Se reparte después del flop y es seguida de otra ronda de apuestas.",
          de: "Der Turn (auch Fourth Street genannt) ist die vierte Gemeinschaftskarte, die beim Texas Hold'em und Omaha ausgeteilt wird. Sie wird nach dem Flop ausgeteilt und von einer weiteren Wettrunde gefolgt.",
          nl: "De turn (ook wel fourth street genoemd) is de vierde gemeenschapskaart gedeeld bij Texas Hold'em en Omaha. Het wordt gedeeld na de flop en gevolgd door een andere inzetronde."
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
