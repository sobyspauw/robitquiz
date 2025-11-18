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
