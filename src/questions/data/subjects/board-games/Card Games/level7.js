// Quiz Template - Level 7: Bord spelletjes - Kaartspellen
(function() {
  const level7 = {
    name: {
      en: "Card Games - Legend",
      es: "Juegos de Cartas - Leyenda",
      de: "Kartenspiele - Legende",
      nl: "Kaartspellen - Legende"
    },
    questions: [
      {
        question: {
          en: "In Bridge, what is a 'grand slam'?",
          es: "En Bridge, ¿qué es un 'gran slam'?",
          de: "Was ist ein 'Großschlemm' beim Bridge?",
          nl: "Wat is een 'grand slam' bij Bridge?"
        },
        options: [
          { en: "Winning all 13 tricks", es: "Ganar las 13 bazas", de: "Alle 13 Stiche gewinnen", nl: "Alle 13 slagen winnen" },
          { en: "Winning 12 out of 13 tricks", es: "Ganar 12 de 13 bazas", de: "12 von 13 Stichen gewinnen", nl: "12 van 13 slagen winnen" },
          { en: "Scoring 100 points", es: "Anotar 100 puntos", de: "100 Punkte erzielen", nl: "100 punten scoren" },
          { en: "Having all four aces", es: "Tener los cuatro ases", de: "Alle vier Asse haben", nl: "Alle vier azen hebben" }
        ],
        correct: 0,
        explanation: {
          en: "A grand slam in Bridge is bidding and winning all 13 tricks in a hand, which awards substantial bonus points.",
          es: "Un gran slam en Bridge es apostar y ganar las 13 bazas en una mano, lo que otorga puntos de bonificación sustanciales.",
          de: "Ein Großschlemm beim Bridge ist das Reizen und Gewinnen aller 13 Stiche in einer Hand, was erhebliche Bonuspunkte bringt.",
          nl: "Een grand slam bij Bridge is bieden en alle 13 slagen in een hand winnen, wat aanzienlijke bonuspunten oplevert."
        }
      },
      {
        question: {
          en: "What card game involves declaring 'Gin' when you have no deadwood?",
          es: "¿Qué juego de cartas implica declarar 'Gin' cuando no tienes cartas muertas?",
          de: "Bei welchem Kartenspiel erklärt man 'Gin', wenn man kein Deadwood hat?",
          nl: "Bij welk kaartspel roep je 'Gin' als je geen deadwood hebt?"
        },
        options: [
          { en: "Gin Rummy", es: "Gin Rummy", de: "Gin Rummy", nl: "Gin Rummy" },
          { en: "Canasta", es: "Canasta", de: "Canasta", nl: "Canasta" },
          { en: "Pinochle", es: "Pinochle", de: "Binokel", nl: "Pinochle" },
          { en: "Euchre", es: "Euchre", de: "Euchre", nl: "Euchre" }
        ],
        correct: 0,
        explanation: {
          en: "In Gin Rummy, you declare 'Gin' when all your cards form melds with no unmatched cards (deadwood), scoring bonus points.",
          es: "En Gin Rummy, declaras 'Gin' cuando todas tus cartas forman combinaciones sin cartas no emparejadas (cartas muertas), anotando puntos de bonificación.",
          de: "Beim Gin Rummy erklärt man 'Gin', wenn alle Karten Meldungen bilden ohne ungepaarte Karten (Deadwood), was Bonuspunkte bringt.",
          nl: "Bij Gin Rummy roep je 'Gin' wanneer al je kaarten melds vormen zonder ongepaarde kaarten (deadwood), wat bonuspunten oplevert."
        }
      },
      {
        question: {
          en: "In Spades, what is the penalty for not making your bid?",
          es: "En Espadas, ¿cuál es la penalización por no cumplir tu apuesta?",
          de: "Was ist die Strafe beim Spades, wenn man sein Gebot nicht erfüllt?",
          nl: "Wat is de straf bij Spades als je je bod niet haalt?"
        },
        options: [
          { en: "Lose 10 times the bid", es: "Pierdes 10 veces la apuesta", de: "Verliere das 10-fache des Gebots", nl: "Verlies 10 keer het bod" },
          { en: "Opponent gains 50 points", es: "El oponente gana 50 puntos", de: "Gegner erhält 50 Punkte", nl: "Tegenstander krijgt 50 punten" },
          { en: "Game ends immediately", es: "El juego termina inmediatamente", de: "Spiel endet sofort", nl: "Spel eindigt onmiddellijk" },
          { en: "Skip next turn", es: "Salta el siguiente turno", de: "Nächsten Zug überspringen", nl: "Volgende beurt overslaan" }
        ],
        correct: 0,
        explanation: {
          en: "In Spades, if you fail to make your bid, you lose 10 times the number of tricks you bid. This is called 'going set' or 'being set'.",
          es: "En Espadas, si no cumples tu apuesta, pierdes 10 veces el número de bazas que apostaste. Esto se llama 'fallar' o 'ser penalizado'.",
          de: "Beim Spades verliert man das 10-fache der Anzahl der gebotenen Stiche, wenn man sein Gebot nicht erfüllt. Dies nennt man 'gesetzt werden'.",
          nl: "Bij Spades verlies je 10 keer het aantal slagen dat je bood als je je bod niet haalt. Dit wordt 'set gaan' genoemd."
        }
      },
      {
        question: {
          en: "What does 'following suit' mean in trick-taking games?",
          es: "¿Qué significa 'seguir el palo' en juegos de bazas?",
          de: "Was bedeutet 'Farbe bedienen' bei Stichspielen?",
          nl: "Wat betekent 'kleur bekennen' bij slagenspellen?"
        },
        options: [
          { en: "Playing the same rank card", es: "Jugar una carta del mismo rango", de: "Eine Karte mit demselben Rang spielen", nl: "Een kaart van dezelfde rang spelen" },
          { en: "Playing a card of the same suit as the lead card", es: "Jugar una carta del mismo palo que la carta inicial", de: "Eine Karte derselben Farbe wie die Ausgangskarte spielen", nl: "Een kaart van dezelfde kleur als de leidende kaart spelen" },
          { en: "Playing after the dealer", es: "Jugar después del repartidor", de: "Nach dem Geber spielen", nl: "Spelen na de deler" },
          { en: "Copying another player's strategy", es: "Copiar la estrategia de otro jugador", de: "Die Strategie eines anderen Spielers kopieren", nl: "De strategie van een andere speler kopiëren" }
        ],
        correct: 1,
        explanation: {
          en: "Following suit means playing a card of the same suit as the card that was led (played first) in a trick. Most trick-taking games require this when possible.",
          es: "Seguir el palo significa jugar una carta del mismo palo que la carta que se jugó primero en una baza. La mayoría de juegos de bazas requieren esto cuando es posible.",
          de: "Farbe bedienen bedeutet, eine Karte derselben Farbe wie die zuerst gespielte Karte in einem Stich zu spielen. Die meisten Stichspiele verlangen dies, wenn möglich.",
          nl: "Kleur bekennen betekent een kaart van dezelfde kleur spelen als de kaart die als eerste werd gespeeld in een slag. De meeste slagenspellen vereisen dit wanneer mogelijk."
        }
      },
      {
        question: {
          en: "In Euchre, how many cards are used from a standard deck?",
          es: "En Euchre, ¿cuántas cartas se usan de una baraja estándar?",
          de: "Wie viele Karten aus einem Standarddeck werden beim Euchre verwendet?",
          nl: "Hoeveel kaarten uit een standaard deck worden gebruikt bij Euchre?"
        },
        options: [
          { en: "24 cards (9 through Ace)", es: "24 cartas (9 hasta As)", de: "24 Karten (9 bis Ass)", nl: "24 kaarten (9 tot Aas)" },
          { en: "32 cards (7 through Ace)", es: "32 cartas (7 hasta As)", de: "32 Karten (7 bis Ass)", nl: "32 kaarten (7 tot Aas)" },
          { en: "40 cards (6 through Ace)", es: "40 cartas (6 hasta As)", de: "40 Karten (6 bis Ass)", nl: "40 kaarten (6 tot Aas)" },
          { en: "52 cards (full deck)", es: "52 cartas (baraja completa)", de: "52 Karten (volles Deck)", nl: "52 kaarten (volledig deck)" }
        ],
        correct: 0,
        explanation: {
          en: "Euchre uses a 24-card deck consisting of 9, 10, Jack, Queen, King, and Ace of all four suits, removing all lower cards.",
          es: "Euchre usa una baraja de 24 cartas que consiste en 9, 10, Sota, Reina, Rey y As de los cuatro palos, eliminando todas las cartas inferiores.",
          de: "Euchre verwendet ein 24-Karten-Deck bestehend aus 9, 10, Bube, Dame, König und Ass in allen vier Farben, wobei alle niedrigeren Karten entfernt werden.",
          nl: "Euchre gebruikt een 24-kaarten deck bestaande uit 9, 10, Boer, Vrouw, Koning en Aas van alle vier kleuren, waarbij alle lagere kaarten worden verwijderd."
        }
      },
      {
        question: {
          en: "What is 'sandbagging' in Spades?",
          es: "¿Qué es 'sandbagging' en Espadas?",
          de: "Was ist 'Sandbagging' beim Spades?",
          nl: "Wat is 'sandbagging' bij Spades?"
        },
        options: [
          { en: "Deliberately underbidding to gain bags", es: "Apostar deliberadamente bajo para obtener bolsas", de: "Absichtlich niedrig bieten, um Säcke zu sammeln", nl: "Opzettelijk laag bieden om bags te verzamelen" },
          { en: "Refusing to bid", es: "Negarse a apostar", de: "Sich weigern zu bieten", nl: "Weigeren te bieden" },
          { en: "Throwing away spade cards", es: "Descartar cartas de espadas", de: "Pik-Karten wegwerfen", nl: "Schoppen kaarten weggooien" },
          { en: "Playing out of turn", es: "Jugar fuera de turno", de: "Außer der Reihe spielen", nl: "Buiten de beurt spelen" }
        ],
        correct: 0,
        explanation: {
          en: "Sandbagging is when you deliberately underbid and collect extra overtricks (bags). Accumulating 10 bags results in a 100-point penalty in most Spades variations.",
          es: "Sandbagging es cuando apuestas deliberadamente bajo y recolectas bazas extra (bolsas). Acumular 10 bolsas resulta en una penalización de 100 puntos en la mayoría de variaciones de Espadas.",
          de: "Sandbagging ist, wenn man absichtlich niedrig bietet und zusätzliche Überstiche (Säcke) sammelt. Das Ansammeln von 10 Säcken führt bei den meisten Spades-Varianten zu einer 100-Punkte-Strafe.",
          nl: "Sandbagging is wanneer je opzettelijk laag biedt en extra overtricks (bags) verzamelt. Het verzamelen van 10 bags resulteert in een straf van 100 punten bij de meeste Spades variaties."
        }
      },
      {
        question: {
          en: "In Canasta, how many cards of the same rank do you need for a natural canasta?",
          es: "En Canasta, ¿cuántas cartas del mismo rango necesitas para una canasta natural?",
          de: "Wie viele Karten desselben Ranges braucht man für eine natürliche Canasta?",
          nl: "Hoeveel kaarten van dezelfde rang heb je nodig voor een natuurlijke canasta?"
        },
        options: [
          { en: "5 cards", es: "5 cartas", de: "5 Karten", nl: "5 kaarten" },
          { en: "6 cards", es: "6 cartas", de: "6 Karten", nl: "6 kaarten" },
          { en: "7 cards with no wild cards", es: "7 cartas sin comodines", de: "7 Karten ohne Joker", nl: "7 kaarten zonder wild cards" },
          { en: "8 cards", es: "8 cartas", de: "8 Karten", nl: "8 kaarten" }
        ],
        correct: 2,
        explanation: {
          en: "A natural canasta consists of 7 cards of the same rank with no wild cards (jokers or deuces) and is worth 500 points.",
          es: "Una canasta natural consiste en 7 cartas del mismo rango sin comodines (jokers o doses) y vale 500 puntos.",
          de: "Eine natürliche Canasta besteht aus 7 Karten desselben Ranges ohne Joker (Joker oder Zweien) und ist 500 Punkte wert.",
          nl: "Een natuurlijke canasta bestaat uit 7 kaarten van dezelfde rang zonder wild cards (jokers of tweeën) en is 500 punten waard."
        }
      },
      {
        question: {
          en: "What is the Jacoby rule in Backgammon gambling games?",
          es: "¿Qué es la regla Jacoby en juegos de Backgammon con apuestas?",
          de: "Was ist die Jacoby-Regel bei Backgammon-Glücksspielen?",
          nl: "Wat is de Jacoby regel bij Backgammon gokspellen?"
        },
        options: [
          { en: "Gammons only count if cube has been turned", es: "Los gammons solo cuentan si se ha girado el cubo", de: "Gammons zählen nur, wenn der Würfel gedreht wurde", nl: "Gammons tellen alleen als de kubus is gedraaid" },
          { en: "Double stakes after every roll", es: "Duplicar las apuestas después de cada tirada", de: "Einsätze nach jedem Wurf verdoppeln", nl: "Dubbele inzetten na elke worp" },
          { en: "First to 7 points wins", es: "El primero en 7 puntos gana", de: "Erster auf 7 Punkte gewinnt", nl: "Eerste tot 7 punten wint" },
          { en: "No doubling cube allowed", es: "No se permite cubo de doblaje", de: "Kein Verdopplungswürfel erlaubt", nl: "Geen verdubbel kubus toegestaan" }
        ],
        correct: 0,
        explanation: {
          en: "The Jacoby rule states that gammons and backgammons only count for extra points if the doubling cube has been turned during the game, speeding up money games.",
          es: "La regla Jacoby establece que los gammons y backgammons solo cuentan para puntos extra si el cubo de doblaje se ha girado durante el juego, acelerando los juegos por dinero.",
          de: "Die Jacoby-Regel besagt, dass Gammons und Backgammons nur für Extrapunkte zählen, wenn der Verdopplungswürfel während des Spiels gedreht wurde, was Geldspiele beschleunigt.",
          nl: "De Jacoby regel stelt dat gammons en backgammons alleen tellen voor extra punten als de verdubbel kubus tijdens het spel is gedraaid, wat geldspellen versnelt."
        }
      },
      {
        question: {
          en: "In Pinochle, what is a 'double pinochle'?",
          es: "En Pinochle, ¿qué es un 'pinochle doble'?",
          de: "Was ist ein 'Doppel-Binokel' beim Pinochle?",
          nl: "Wat is een 'dubbele pinochle' bij Pinochle?"
        },
        options: [
          { en: "Two Jacks of Diamonds and two Queens of Spades", es: "Dos Sotas de Diamantes y dos Reinas de Picas", de: "Zwei Karo-Buben und zwei Pik-Damen", nl: "Twee Ruiten Boeren en twee Schoppen Vrouwen" },
          { en: "Playing two pinochles in one game", es: "Jugar dos pinochles en un juego", de: "Zwei Pinochles in einem Spiel spielen", nl: "Twee pinochles spelen in één spel" },
          { en: "Scoring twice the normal points", es: "Anotar el doble de puntos normales", de: "Doppelte Normalpunkte erzielen", nl: "Dubbele normale punten scoren" },
          { en: "Having both decks in play", es: "Tener ambas barajas en juego", de: "Beide Decks im Spiel haben", nl: "Beide decks in het spel hebben" }
        ],
        correct: 0,
        explanation: {
          en: "A double pinochle consists of both Jacks of Diamonds and both Queens of Spades (since Pinochle uses a double deck) and is worth 300 points.",
          es: "Un pinochle doble consiste en ambas Sotas de Diamantes y ambas Reinas de Picas (ya que Pinochle usa una baraja doble) y vale 300 puntos.",
          de: "Ein Doppel-Binokel besteht aus beiden Karo-Buben und beiden Pik-Damen (da Pinochle ein Doppeldeck verwendet) und ist 300 Punkte wert.",
          nl: "Een dubbele pinochle bestaat uit beide Ruiten Boeren en beide Schoppen Vrouwen (aangezien Pinochle een dubbel deck gebruikt) en is 300 punten waard."
        }
      },
      {
        question: {
          en: "What is 'shooting the moon' in Hearts?",
          es: "¿Qué es 'disparar a la luna' en Corazones?",
          de: "Was ist 'den Mond schießen' beim Herz-Spiel?",
          nl: "Wat is 'shooting the moon' bij Harten?"
        },
        options: [
          { en: "Taking all hearts and Queen of Spades", es: "Tomar todos los corazones y la Reina de Picas", de: "Alle Herzen und Pik-Dame nehmen", nl: "Alle harten en Schoppen Vrouw nemen" },
          { en: "Avoiding all hearts", es: "Evitar todos los corazones", de: "Alle Herzen vermeiden", nl: "Alle harten vermijden" },
          { en: "Getting exactly 13 points", es: "Obtener exactamente 13 puntos", de: "Genau 13 Punkte bekommen", nl: "Precies 13 punten krijgen" },
          { en: "Winning with the Ace of Hearts", es: "Ganar con el As de Corazones", de: "Mit dem Herz-Ass gewinnen", nl: "Winnen met de Harten Aas" }
        ],
        correct: 0,
        explanation: {
          en: "Shooting the moon means taking all 13 hearts and the Queen of Spades in one hand. Instead of getting 26 points, all opponents get 26 points, or you subtract 26 from your score.",
          es: "Disparar a la luna significa tomar los 13 corazones y la Reina de Picas en una mano. En lugar de obtener 26 puntos, todos los oponentes obtienen 26 puntos, o restas 26 de tu puntuación.",
          de: "Den Mond schießen bedeutet, alle 13 Herzen und die Pik-Dame in einer Hand zu nehmen. Anstatt 26 Punkte zu bekommen, erhalten alle Gegner 26 Punkte, oder du ziehst 26 von deiner Punktzahl ab.",
          nl: "Shooting the moon betekent alle 13 harten en de Schoppen Vrouw in één hand nemen. In plaats van 26 punten te krijgen, krijgen alle tegenstanders 26 punten, of je trekt 26 af van je score."
        }
      },
      {
        question: {
          en: "In Texas Hold'em Poker, what are the two cards dealt face-down to each player called?",
          es: "En Texas Hold'em Poker, ¿cómo se llaman las dos cartas repartidas boca abajo a cada jugador?",
          de: "Wie heißen beim Texas Hold'em Poker die zwei verdeckt an jeden Spieler ausgeteilten Karten?",
          nl: "Hoe heten bij Texas Hold'em Poker de twee kaarten die met de voorkant naar beneden aan elke speler worden gedeeld?"
        },
        options: [
          { en: "Pocket cards or hole cards", es: "Cartas de bolsillo o cartas ocultas", de: "Taschenkarten oder Lochkarten", nl: "Pocket cards of hole cards" },
          { en: "Community cards", es: "Cartas comunitarias", de: "Gemeinschaftskarten", nl: "Gemeenschappelijke kaarten" },
          { en: "The flop", es: "El flop", de: "Der Flop", nl: "De flop" },
          { en: "Burn cards", es: "Cartas quemadas", de: "Verbrannte Karten", nl: "Verbrandde kaarten" }
        ],
        correct: 0,
        explanation: {
          en: "The two private cards dealt to each player in Texas Hold'em are called pocket cards or hole cards. These are combined with community cards to make the best hand.",
          es: "Las dos cartas privadas repartidas a cada jugador en Texas Hold'em se llaman cartas de bolsillo o cartas ocultas. Estas se combinan con las cartas comunitarias para hacer la mejor mano.",
          de: "Die zwei privaten Karten, die jedem Spieler beim Texas Hold'em ausgeteilt werden, heißen Taschenkarten oder Lochkarten. Diese werden mit Gemeinschaftskarten kombiniert, um das beste Blatt zu bilden.",
          nl: "De twee privékaarten die aan elke speler bij Texas Hold'em worden gedeeld, heten pocket cards of hole cards. Deze worden gecombineerd met gemeenschappelijke kaarten om de beste hand te maken."
        }
      },
      {
        question: {
          en: "What is a 'stopper' in Bridge?",
          es: "¿Qué es un 'stopper' en Bridge?",
          de: "Was ist ein 'Stopper' beim Bridge?",
          nl: "Wat is een 'stopper' bij Bridge?"
        },
        options: [
          { en: "A card that prevents opponents from running a suit", es: "Una carta que impide que los oponentes corran un palo", de: "Eine Karte, die verhindert, dass Gegner eine Farbe durchlaufen", nl: "Een kaart die voorkomt dat tegenstanders een kleur doorlopen" },
          { en: "The final trick in a hand", es: "La última baza en una mano", de: "Der letzte Stich in einer Hand", nl: "De laatste slag in een hand" },
          { en: "A penalty card", es: "Una carta de penalización", de: "Eine Strafkarte", nl: "Een strafkaart" },
          { en: "The card that ends bidding", es: "La carta que termina la puja", de: "Die Karte, die das Bieten beendet", nl: "De kaart die het bieden beëindigt" }
        ],
        correct: 0,
        explanation: {
          en: "A stopper is a high card (usually an Ace, King, or well-guarded Queen) that can win a trick in a suit, preventing opponents from running all their cards in that suit.",
          es: "Un stopper es una carta alta (generalmente un As, Rey o Reina bien protegida) que puede ganar una baza en un palo, impidiendo que los oponentes corran todas sus cartas en ese palo.",
          de: "Ein Stopper ist eine hohe Karte (normalerweise ein Ass, König oder gut geschützte Dame), die einen Stich in einer Farbe gewinnen kann und verhindert, dass Gegner alle ihre Karten in dieser Farbe durchlaufen.",
          nl: "Een stopper is een hoge kaart (meestal een Aas, Koning of goed beschermde Vrouw) die een slag in een kleur kan winnen, waardoor tegenstanders niet al hun kaarten in die kleur kunnen doorlopen."
        }
      },
      {
        question: {
          en: "In Cribbage, what is 'fifteen-two'?",
          es: "En Cribbage, ¿qué es 'quince-dos'?",
          de: "Was ist 'fünfzehn-zwei' beim Cribbage?",
          nl: "Wat is 'fifteen-two' bij Cribbage?"
        },
        options: [
          { en: "Two cards that sum to 15, worth 2 points", es: "Dos cartas que suman 15, valen 2 puntos", de: "Zwei Karten, die 15 ergeben, wert 2 Punkte", nl: "Twee kaarten die optellen tot 15, waard 2 punten" },
          { en: "The 15th and 2nd positions on the board", es: "Las posiciones 15 y 2 en el tablero", de: "Die 15. und 2. Positionen auf dem Brett", nl: "De 15e en 2e posities op het bord" },
          { en: "A hand worth 15 or 2 points", es: "Una mano que vale 15 o 2 puntos", de: "Ein Blatt wert 15 oder 2 Punkte", nl: "Een hand waard 15 of 2 punten" },
          { en: "Fifteen cards in two rounds", es: "Quince cartas en dos rondas", de: "Fünfzehn Karten in zwei Runden", nl: "Vijftien kaarten in twee rondes" }
        ],
        correct: 0,
        explanation: {
          en: "'Fifteen-two' is a scoring phrase in Cribbage meaning any combination of cards that add up to 15 is worth 2 points. Players count all such combinations in their hand.",
          es: "'Quince-dos' es una frase de puntuación en Cribbage que significa que cualquier combinación de cartas que sumen 15 vale 2 puntos. Los jugadores cuentan todas esas combinaciones en su mano.",
          de: "'Fünfzehn-zwei' ist ein Wertungsausdruck beim Cribbage, der bedeutet, dass jede Kartenkombination, die 15 ergibt, 2 Punkte wert ist. Spieler zählen alle solchen Kombinationen in ihrer Hand.",
          nl: "'Fifteen-two' is een scoreringsfrase bij Cribbage die betekent dat elke combinatie van kaarten die optelt tot 15, 2 punten waard is. Spelers tellen alle dergelijke combinaties in hun hand."
        }
      },
      {
        question: {
          en: "What is a 'squeeze play' in Bridge?",
          es: "¿Qué es un 'squeeze play' en Bridge?",
          de: "Was ist ein 'Squeeze Play' beim Bridge?",
          nl: "Wat is een 'squeeze play' bij Bridge?"
        },
        options: [
          { en: "Forcing opponent to discard a winner", es: "Forzar al oponente a descartar un ganador", de: "Gegner zwingen, einen Gewinner abzuwerfen", nl: "Tegenstander dwingen een winnaar weg te gooien" },
          { en: "Bidding aggressively", es: "Apostar agresivamente", de: "Aggressiv bieten", nl: "Agressief bieden" },
          { en: "Playing cards quickly", es: "Jugar cartas rápidamente", de: "Karten schnell spielen", nl: "Kaarten snel spelen" },
          { en: "Holding tight to high cards", es: "Mantener firmemente las cartas altas", de: "Hohe Karten festhalten", nl: "Hoge kaarten vasthouden" }
        ],
        correct: 0,
        explanation: {
          en: "A squeeze play forces an opponent to discard a card they want to keep, typically by playing winners that put pressure on their hand, causing them to lose a trick they could have won.",
          es: "Un squeeze play fuerza a un oponente a descartar una carta que quiere mantener, típicamente jugando ganadores que ponen presión en su mano, causando que pierdan una baza que podrían haber ganado.",
          de: "Ein Squeeze Play zwingt einen Gegner, eine Karte abzuwerfen, die er behalten möchte, typischerweise durch Spielen von Gewinnern, die Druck auf sein Blatt ausüben und dazu führen, dass er einen Stich verliert, den er hätte gewinnen können.",
          nl: "Een squeeze play dwingt een tegenstander een kaart weg te gooien die hij wil houden, meestal door winnaars te spelen die druk uitoefenen op hun hand, waardoor ze een slag verliezen die ze hadden kunnen winnen."
        }
      },
      {
        question: {
          en: "In Baccarat, which hand total is considered perfect?",
          es: "En Baccarat, ¿qué total de mano se considera perfecto?",
          de: "Welche Handsumme gilt beim Baccarat als perfekt?",
          nl: "Welk handtotaal wordt bij Baccarat als perfect beschouwd?"
        },
        options: [
          { en: "7", es: "7", de: "7", nl: "7" },
          { en: "8", es: "8", de: "8", nl: "8" },
          { en: "9", es: "9", de: "9", nl: "9" },
          { en: "10", es: "10", de: "10", nl: "10" }
        ],
        correct: 2,
        explanation: {
          en: "In Baccarat, a hand total of 9 is considered the perfect or 'natural' hand and automatically wins unless the other hand also has 9, resulting in a tie.",
          es: "En Baccarat, un total de mano de 9 se considera la mano perfecta o 'natural' y gana automáticamente a menos que la otra mano también tenga 9, resultando en un empate.",
          de: "Beim Baccarat gilt eine Handsumme von 9 als perfektes oder 'natürliches' Blatt und gewinnt automatisch, es sei denn, die andere Hand hat auch 9, was zu einem Unentschieden führt.",
          nl: "Bij Baccarat wordt een handtotaal van 9 beschouwd als de perfecte of 'natuurlijke' hand en wint automatisch, tenzij de andere hand ook 9 heeft, wat resulteert in gelijkspel."
        }
      },
      {
        question: {
          en: "What is a 'yarborough' in Bridge?",
          es: "¿Qué es un 'yarborough' en Bridge?",
          de: "Was ist ein 'Yarborough' beim Bridge?",
          nl: "Wat is een 'yarborough' bij Bridge?"
        },
        options: [
          { en: "A hand with no card higher than a 9", es: "Una mano sin carta más alta que un 9", de: "Ein Blatt ohne Karte höher als 9", nl: "Een hand zonder kaart hoger dan een 9" },
          { en: "A perfect hand with all aces", es: "Una mano perfecta con todos los ases", de: "Ein perfektes Blatt mit allen Assen", nl: "Een perfecte hand met alle azen" },
          { en: "Winning all 13 tricks", es: "Ganar las 13 bazas", de: "Alle 13 Stiche gewinnen", nl: "Alle 13 slagen winnen" },
          { en: "A tie in bidding", es: "Un empate en la puja", de: "Ein Unentschieden beim Bieten", nl: "Gelijkspel bij het bieden" }
        ],
        correct: 0,
        explanation: {
          en: "A yarborough is a hand with no card higher than a 9, named after the Earl of Yarborough who reportedly bet 1000 to 1 against such a hand occurring.",
          es: "Un yarborough es una mano sin carta más alta que un 9, nombrada por el Conde de Yarborough quien supuestamente apostó 1000 a 1 contra que ocurriera tal mano.",
          de: "Ein Yarborough ist ein Blatt ohne Karte höher als 9, benannt nach dem Earl of Yarborough, der angeblich 1000 zu 1 gegen das Auftreten eines solchen Blatts wettete.",
          nl: "Een yarborough is een hand zonder kaart hoger dan een 9, genoemd naar de Earl of Yarborough die naar verluidt 1000 tegen 1 wedde tegen het voorkomen van zo'n hand."
        }
      },
      {
        question: {
          en: "In Poker, what is the probability of being dealt a royal flush?",
          es: "En Poker, ¿cuál es la probabilidad de recibir una escalera real?",
          de: "Wie hoch ist beim Poker die Wahrscheinlichkeit, einen Royal Flush zu erhalten?",
          nl: "Wat is bij Poker de kans om een royal flush te krijgen?"
        },
        options: [
          { en: "1 in 30,940", es: "1 en 30,940", de: "1 zu 30.940", nl: "1 op 30.940" },
          { en: "1 in 72,193", es: "1 en 72,193", de: "1 zu 72.193", nl: "1 op 72.193" },
          { en: "1 in 649,740", es: "1 en 649,740", de: "1 zu 649.740", nl: "1 op 649.740" },
          { en: "1 in 1,000,000", es: "1 en 1,000,000", de: "1 zu 1.000.000", nl: "1 op 1.000.000" }
        ],
        correct: 2,
        explanation: {
          en: "The probability of being dealt a royal flush in 5-card poker is approximately 1 in 649,740, making it the rarest possible hand.",
          es: "La probabilidad de recibir una escalera real en póker de 5 cartas es aproximadamente 1 en 649,740, convirtiéndola en la mano más rara posible.",
          de: "Die Wahrscheinlichkeit, beim 5-Karten-Poker einen Royal Flush zu erhalten, beträgt ungefähr 1 zu 649.740, was es zum seltensten möglichen Blatt macht.",
          nl: "De kans om een royal flush te krijgen bij 5-kaarten poker is ongeveer 1 op 649.740, waarmee het de zeldzaamst mogelijke hand is."
        }
      },
      {
        question: {
          en: "What does 'doubling down' mean in Blackjack?",
          es: "¿Qué significa 'doblar la apuesta' en Blackjack?",
          de: "Was bedeutet 'Verdoppeln' beim Blackjack?",
          nl: "Wat betekent 'doubling down' bij Blackjack?"
        },
        options: [
          { en: "Double your bet and take exactly one more card", es: "Duplicar tu apuesta y tomar exactamente una carta más", de: "Deinen Einsatz verdoppeln und genau eine weitere Karte nehmen", nl: "Je inzet verdubbelen en precies één kaart meer nemen" },
          { en: "Betting twice on the same hand", es: "Apostar dos veces en la misma mano", de: "Zweimal auf dasselbe Blatt setzen", nl: "Twee keer inzetten op dezelfde hand" },
          { en: "Splitting pairs twice", es: "Dividir pares dos veces", de: "Paare zweimal teilen", nl: "Paren twee keer splitsen" },
          { en: "Doubling the number of decks", es: "Duplicar el número de barajas", de: "Die Anzahl der Decks verdoppeln", nl: "Het aantal decks verdubbelen" }
        ],
        correct: 0,
        explanation: {
          en: "Doubling down allows you to double your original bet in exchange for committing to stand after receiving exactly one more card, used when you have a strong hand.",
          es: "Doblar la apuesta te permite duplicar tu apuesta original a cambio de comprometerte a plantarte después de recibir exactamente una carta más, usado cuando tienes una mano fuerte.",
          de: "Verdoppeln ermöglicht es dir, deinen ursprünglichen Einsatz zu verdoppeln im Austausch dafür, dass du dich verpflichtest, nach Erhalt genau einer weiteren Karte zu stehen, verwendet bei starkem Blatt.",
          nl: "Doubling down stelt je in staat je oorspronkelijke inzet te verdubbelen in ruil voor de verplichting te passen na het ontvangen van precies één kaart meer, gebruikt bij een sterke hand."
        }
      },
      {
        question: {
          en: "In Contract Bridge, what is a 'Blackwood convention'?",
          es: "En Contract Bridge, ¿qué es una 'convención Blackwood'?",
          de: "Was ist eine 'Blackwood-Konvention' beim Contract Bridge?",
          nl: "Wat is een 'Blackwood conventie' bij Contract Bridge?"
        },
        options: [
          { en: "A bid of 4NT asking partner how many aces they hold", es: "Una puja de 4NT preguntando al compañero cuántos ases tiene", de: "Ein Gebot von 4NT, das den Partner fragt, wie viele Asse er hält", nl: "Een bod van 4NT dat de partner vraagt hoeveel azen hij heeft" },
          { en: "A defensive strategy", es: "Una estrategia defensiva", de: "Eine Verteidigungsstrategie", nl: "Een verdedigingsstrategie" },
          { en: "A type of penalty", es: "Un tipo de penalización", de: "Eine Art Strafe", nl: "Een soort straf" },
          { en: "A opening bid requirement", es: "Un requisito de apertura", de: "Eine Eröffnungsgebots-Anforderung", nl: "Een openingsbod vereiste" }
        ],
        correct: 0,
        explanation: {
          en: "The Blackwood convention is a bid of 4 No Trump that asks partner to reveal how many aces they hold, helping to determine if a slam is possible.",
          es: "La convención Blackwood es una puja de 4 Sin Triunfo que pide al compañero revelar cuántos ases tiene, ayudando a determinar si un slam es posible.",
          de: "Die Blackwood-Konvention ist ein Gebot von 4 Ohne Trumpf, das den Partner auffordert zu offenbaren, wie viele Asse er hält, um festzustellen, ob ein Schlemm möglich ist.",
          nl: "De Blackwood conventie is een bod van 4 Sans Troef dat de partner vraagt te onthullen hoeveel azen hij heeft, om te bepalen of een slam mogelijk is."
        }
      },
      {
        question: {
          en: "What is 'card counting' in casino games?",
          es: "¿Qué es 'contar cartas' en los juegos de casino?",
          de: "Was ist 'Kartenzählen' in Casino-Spielen?",
          nl: "Wat is 'kaarten tellen' bij casinospellen?"
        },
        options: [
          { en: "Tracking ratio of high to low cards remaining", es: "Rastrear la proporción de cartas altas a bajas restantes", de: "Das Verhältnis von hohen zu niedrigen Karten verfolgen", nl: "De verhouding van hoge tot lage overgebleven kaarten volgen" },
          { en: "Counting how many cards are dealt", es: "Contar cuántas cartas se reparten", de: "Zählen, wie viele Karten ausgeteilt werden", nl: "Tellen hoeveel kaarten worden gedeeld" },
          { en: "Memorizing all cards played", es: "Memorizar todas las cartas jugadas", de: "Alle gespielten Karten auswendig lernen", nl: "Alle gespeelde kaarten onthouden" },
          { en: "Adding up card values", es: "Sumar los valores de las cartas", de: "Kartenwerte addieren", nl: "Kaartwaarden optellen" }
        ],
        correct: 0,
        explanation: {
          en: "Card counting is a strategy used primarily in Blackjack to track the ratio of high to low cards remaining in the deck, giving players an advantage when the count is favorable.",
          es: "Contar cartas es una estrategia usada principalmente en Blackjack para rastrear la proporción de cartas altas a bajas que quedan en la baraja, dando a los jugadores una ventaja cuando el conteo es favorable.",
          de: "Kartenzählen ist eine hauptsächlich beim Blackjack verwendete Strategie, um das Verhältnis von hohen zu niedrigen Karten im Deck zu verfolgen und Spielern einen Vorteil zu verschaffen, wenn die Zählung günstig ist.",
          nl: "Kaarten tellen is een strategie die voornamelijk bij Blackjack wordt gebruikt om de verhouding van hoge tot lage kaarten in het deck te volgen, wat spelers een voordeel geeft wanneer de telling gunstig is."
        }
      },
      {
        question: {
          en: "In Bridge, what is a 'Devil's Coup'?",
          es: "En Bridge, ¿qué es un 'Devil's Coup'?",
          de: "Was ist ein 'Teufel's Coup' beim Bridge?",
          nl: "Wat is een 'Devil's Coup' bij Bridge?"
        },
        options: [
          { en: "Ruffing opponent's winner to promote own trump", es: "Cortar ganador del oponente para promover propio triunfo", de: "Gewinner des Gegners stechen um eigenen Trumpf zu fördern", nl: "Winnaar van tegenstander snijden om eigen troef te promoveren" },
          { en: "Bidding 7NT with weak hand", es: "Pujar 7NT con mano débil", de: "7NT mit schwachem Blatt bieten", nl: "7SA bieden met zwakke hand" },
          { en: "Deliberately losing trick", es: "Perder baza deliberadamente", de: "Absichtlich Stich verlieren", nl: "Opzettelijk slag verliezen" },
          { en: "Tricking partner", es: "Engañar al compañero", de: "Partner täuschen", nl: "Partner misleiden" }
        ],
        correct: 0,
        explanation: {
          en: "The Devil's Coup involves ruffing your opponent's winner when you're void in the led suit, promoting a lower trump in your hand to winning status through trump promotion.",
          es: "El Devil's Coup involucra cortar el ganador de tu oponente cuando no tienes el palo liderado, promoviendo un triunfo más bajo en tu mano a estado ganador a través de promoción de triunfo.",
          de: "Der Teufel's Coup beinhaltet den Gewinner des Gegners zu stechen wenn man in der ausgespielten Farbe blank ist, wodurch ein niedrigerer Trumpf in der eigenen Hand durch Trumpfförderung zum Gewinner wird.",
          nl: "De Devil's Coup houdt in de winnaar van je tegenstander te snijden wanneer je blanco bent in de geleide kleur, waardoor een lagere troef in je hand tot winnaar gepromoveerd wordt door troef promotie."
        }
      },
      {
        question: {
          en: "What is 'exploitative play' in poker?",
          es: "¿Qué es 'juego explotador' en el póker?",
          de: "Was ist 'Exploitatives Spiel' beim Poker?",
          nl: "Wat is 'exploitatief spel' bij poker?"
        },
        options: [
          { en: "Deviating from GTO to exploit specific opponent tendencies", es: "Desviarse de GTO para explotar tendencias específicas del oponente", de: "Von GTO abweichen um spezifische Gegnertendenzen auszunutzen", nl: "Afwijken van GTO om specifieke tegenstander tendensen uit te buiten" },
          { en: "Taking advantage of casino promotions", es: "Aprovechar promociones del casino", de: "Casino-Promotionen ausnutzen", nl: "Casinopromoties benutten" },
          { en: "Playing aggressively", es: "Jugar agresivamente", de: "Aggressiv spielen", nl: "Agressief spelen" },
          { en: "Cheating methods", es: "Métodos de trampa", de: "Betrugsmethoden", nl: "Valsspelen methoden" }
        ],
        correct: 0,
        explanation: {
          en: "Exploitative play involves intentionally deviating from game theory optimal strategy to take advantage of specific opponents' mistakes and tendencies, maximizing profit against weak players.",
          es: "El juego explotador involucra desviarse intencionalmente de la estrategia óptima de teoría de juegos para aprovechar errores y tendencias específicas de oponentes, maximizando ganancias contra jugadores débiles.",
          de: "Exploitatives Spiel beinhaltet absichtlich von spieltheoretisch optimaler Strategie abzuweichen um spezifische Fehler und Tendenzen von Gegnern auszunutzen, Profit gegen schwache Spieler zu maximieren.",
          nl: "Exploitatief spel houdt in opzettelijk afwijken van game theory optimale strategie om specifieke fouten en tendensen van tegenstanders uit te buiten, winst te maximaliseren tegen zwakke spelers."
        }
      },
      {
        question: {
          en: "In Barbu (King of Hearts), what is unique about the Barbu contract?",
          es: "En Barbu (Rey de Corazones), ¿qué es único sobre el contrato Barbu?",
          de: "Was ist einzigartig am Barbu-Kontrakt beim Barbu (König der Herzen)?",
          nl: "Wat is uniek aan het Barbu contract bij Barbu (Koning van Harten)?"
        },
        options: [
          { en: "Must avoid taking King of Hearts for -20 points", es: "Debe evitar tomar el Rey de Corazones por -20 puntos", de: "Muss König der Herzen vermeiden für -20 Punkte", nl: "Moet Koning van Harten vermijden voor -20 punten" },
          { en: "Must take all hearts", es: "Debe tomar todos los corazones", de: "Muss alle Herzen nehmen", nl: "Moet alle harten nemen" },
          { en: "No trump allowed", es: "No se permite triunfo", de: "Kein Trumpf erlaubt", nl: "Geen troef toegestaan" },
          { en: "Bidding in reverse", es: "Pujar en reversa", de: "Rückwärts bieten", nl: "Achterwaarts bieden" }
        ],
        correct: 0,
        explanation: {
          en: "In the Barbu contract, the declarer must avoid taking the King of Hearts, which is worth -20 penalty points, while other players try to force them to take it.",
          es: "En el contrato Barbu, el declarante debe evitar tomar el Rey de Corazones, que vale -20 puntos de penalización, mientras otros jugadores intentan forzarlo a tomarlo.",
          de: "Beim Barbu-Kontrakt muss der Alleinspieler vermeiden den König der Herzen zu nehmen, der -20 Strafpunkte wert ist, während andere Spieler versuchen ihn zu zwingen ihn zu nehmen.",
          nl: "Bij het Barbu contract moet de declarer vermijden de Koning van Harten te nemen, die -20 strafpunten waard is, terwijl andere spelers proberen hem te dwingen deze te nemen."
        }
      },
      {
        question: {
          en: "What is 'meta-game' in poker?",
          es: "¿Qué es el 'meta-juego' en el póker?",
          de: "Was ist das 'Meta-Spiel' beim Poker?",
          nl: "Wat is het 'meta-spel' bij poker?"
        },
        options: [
          { en: "Strategic adjustments based on history and table dynamics", es: "Ajustes estratégicos basados en historial y dinámica de mesa", de: "Strategische Anpassungen basierend auf Historie und Tischdynamik", nl: "Strategische aanpassingen gebaseerd op geschiedenis en tafeldynamiek" },
          { en: "Playing multiple tables", es: "Jugar múltiples mesas", de: "Mehrere Tische spielen", nl: "Meerdere tafels spelen" },
          { en: "Tournament strategy", es: "Estrategia de torneo", de: "Turnierstrategie", nl: "Toernooistrategie" },
          { en: "Online poker tools", es: "Herramientas de póker en línea", de: "Online-Poker-Tools", nl: "Online poker tools" }
        ],
        correct: 0,
        explanation: {
          en: "Meta-game refers to strategic adjustments made based on game history, opponent reads, table image, and psychological factors beyond just your current hand strength.",
          es: "El meta-juego se refiere a ajustes estratégicos hechos basándose en el historial del juego, lecturas de oponentes, imagen de mesa y factores psicológicos más allá de solo la fuerza de tu mano actual.",
          de: "Meta-Spiel bezieht sich auf strategische Anpassungen basierend auf Spielhistorie, Gegner-Reads, Tischimage und psychologischen Faktoren jenseits der aktuellen Blattstärke.",
          nl: "Meta-spel verwijst naar strategische aanpassingen gemaakt op basis van spelgeschiedenis, tegenstander reads, tafelimago en psychologische factoren buiten alleen je huidige handsterkte."
        }
      },
      {
        question: {
          en: "In Kaiser, what is the 'Kaiser' card?",
          es: "En Kaiser, ¿qué es la carta 'Kaiser'?",
          de: "Was ist die 'Kaiser'-Karte beim Kaiser?",
          nl: "Wat is de 'Kaiser' kaart bij Kaiser?"
        },
        options: [
          { en: "3 of Spades worth -3 points", es: "3 de Picas vale -3 puntos", de: "Pik-3 wert -3 Punkte", nl: "Schoppen 3 waard -3 punten" },
          { en: "King of Hearts worth bonus", es: "Rey de Corazones vale bonificación", de: "Herz-König wert Bonus", nl: "Harten Koning waard bonus" },
          { en: "Ace of trump", es: "As de triunfo", de: "Trumpf-Ass", nl: "Troef Aas" },
          { en: "Wild card", es: "Comodín", de: "Joker", nl: "Wildcard" }
        ],
        correct: 0,
        explanation: {
          en: "In Kaiser, the 3 of Spades is called the Kaiser and is worth -3 points, making it a card players try to avoid taking in tricks during play.",
          es: "En Kaiser, el 3 de Picas se llama Kaiser y vale -3 puntos, convirtiéndolo en una carta que los jugadores intentan evitar tomar en bazas durante el juego.",
          de: "Beim Kaiser wird die Pik-3 als Kaiser bezeichnet und ist -3 Punkte wert, wodurch sie eine Karte ist die Spieler während des Spiels in Stichen zu vermeiden versuchen.",
          nl: "Bij Kaiser wordt de Schoppen 3 de Kaiser genoemd en is -3 punten waard, waardoor het een kaart is die spelers proberen te vermijden in slagen tijdens het spel."
        }
      },
      {
        question: {
          en: "What is 'information asymmetry' in card games?",
          es: "¿Qué es la 'asimetría de información' en juegos de cartas?",
          de: "Was ist 'Informationsasymmetrie' bei Kartenspielen?",
          nl: "Wat is 'informatie asymmetrie' bij kaartspellen?"
        },
        options: [
          { en: "When players have different amounts of information about game state", es: "Cuando los jugadores tienen diferentes cantidades de información sobre el estado del juego", de: "Wenn Spieler unterschiedliche Informationsmengen über den Spielzustand haben", nl: "Wanneer spelers verschillende hoeveelheden informatie hebben over de spelstatus" },
          { en: "Unequal chip stacks", es: "Pilas de fichas desiguales", de: "Ungleiche Chip-Stacks", nl: "Ongelijke fiche stapels" },
          { en: "Imbalanced deck", es: "Mazo desequilibrado", de: "Unausgewogenes Deck", nl: "Ongebalanceerd deck" },
          { en: "Different skill levels", es: "Diferentes niveles de habilidad", de: "Unterschiedliche Fähigkeitsstufen", nl: "Verschillende vaardigheidsniveaus" }
        ],
        correct: 0,
        explanation: {
          en: "Information asymmetry occurs when different players have access to different amounts or quality of information about the game state, such as hidden cards or betting patterns.",
          es: "La asimetría de información ocurre cuando diferentes jugadores tienen acceso a diferentes cantidades o calidad de información sobre el estado del juego, como cartas ocultas o patrones de apuesta.",
          de: "Informationsasymmetrie tritt auf wenn verschiedene Spieler Zugang zu unterschiedlichen Mengen oder Qualität von Informationen über den Spielzustand haben, wie verdeckte Karten oder Setzmuster.",
          nl: "Informatie asymmetrie treedt op wanneer verschillende spelers toegang hebben tot verschillende hoeveelheden of kwaliteit van informatie over de spelstatus, zoals verborgen kaarten of inzetpatronen."
        }
      },
      {
        question: {
          en: "In Belote, what is 'Belote-Rebelote'?",
          es: "En Belote, ¿qué es 'Belote-Rebelote'?",
          de: "Was ist 'Belote-Rebelote' beim Belote?",
          nl: "Wat is 'Belote-Rebelote' bij Belote?"
        },
        options: [
          { en: "Declaring King and Queen of trump for 20 bonus points", es: "Declarar Rey y Reina de triunfo por 20 puntos de bonificación", de: "König und Dame von Trumpf für 20 Bonuspunkte ansagen", nl: "Koning en Vrouw van troef declareren voor 20 bonuspunten" },
          { en: "Winning consecutive tricks", es: "Ganar bazas consecutivas", de: "Aufeinanderfolgende Stiche gewinnen", nl: "Opeenvolgende slagen winnen" },
          { en: "Playing same suit twice", es: "Jugar el mismo palo dos veces", de: "Gleiche Farbe zweimal spielen", nl: "Dezelfde kleur twee keer spelen" },
          { en: "Exchanging trump cards", es: "Intercambiar cartas de triunfo", de: "Trumpfkarten tauschen", nl: "Troefkaarten ruilen" }
        ],
        correct: 0,
        explanation: {
          en: "Belote-Rebelote is declared when holding and playing both the King and Queen of the trump suit, announcing 'Belote' with the first and 'Rebelote' with the second for 20 bonus points.",
          es: "Belote-Rebelote se declara al tener y jugar tanto el Rey como la Reina del palo de triunfo, anunciando 'Belote' con el primero y 'Rebelote' con el segundo por 20 puntos de bonificación.",
          de: "Belote-Rebelote wird erklärt wenn man König und Dame der Trumpffarbe hält und spielt, wobei 'Belote' mit der ersten und 'Rebelote' mit der zweiten für 20 Bonuspunkte angesagt wird.",
          nl: "Belote-Rebelote wordt gedeclareerd bij het hebben en spelen van zowel Koning als Vrouw van troef, 'Belote' aankondigend met de eerste en 'Rebelote' met de tweede voor 20 bonuspunten."
        }
      },
      {
        question: {
          en: "What is 'hand reading' in poker?",
          es: "¿Qué es la 'lectura de manos' en el póker?",
          de: "Was ist 'Hand Reading' beim Poker?",
          nl: "Wat is 'hand lezen' bij poker?"
        },
        options: [
          { en: "Deducing opponent's likely holdings from their actions", es: "Deducir las posibles tenencias del oponente de sus acciones", de: "Wahrscheinliche Holdings des Gegners aus seinen Aktionen ableiten", nl: "Waarschijnlijke holdings van tegenstander afleiden uit hun acties" },
          { en: "Reading cards from marks", es: "Leer cartas de marcas", de: "Karten von Markierungen ablesen", nl: "Kaarten lezen van markeringen" },
          { en: "Understanding hand rankings", es: "Entender clasificaciones de manos", de: "Hand-Rankings verstehen", nl: "Hand rankings begrijpen" },
          { en: "Analyzing your own hand", es: "Analizar tu propia mano", de: "Eigenes Blatt analysieren", nl: "Je eigen hand analyseren" }
        ],
        correct: 0,
        explanation: {
          en: "Hand reading is the skill of narrowing down opponent's possible hand ranges based on their betting patterns, position, and actions throughout the hand to make optimal decisions.",
          es: "La lectura de manos es la habilidad de reducir los posibles rangos de manos del oponente basándose en sus patrones de apuesta, posición y acciones a lo largo de la mano para tomar decisiones óptimas.",
          de: "Hand Reading ist die Fähigkeit die möglichen Hand-Ranges des Gegners basierend auf seinen Setzmustern, Position und Aktionen während der Hand einzugrenzen um optimale Entscheidungen zu treffen.",
          nl: "Hand lezen is de vaardigheid om mogelijke hand ranges van tegenstander te beperken gebaseerd op hun inzetpatronen, positie en acties gedurende de hand om optimale beslissingen te nemen."
        }
      },
      {
        question: {
          en: "In Bezique, what is a 'double bezique'?",
          es: "En Bezique, ¿qué es un 'bezique doble'?",
          de: "Was ist ein 'Doppel-Bezique' beim Bezique?",
          nl: "Wat is een 'dubbele bezique' bij Bezique?"
        },
        options: [
          { en: "Two Queen of Spades and Jack of Diamonds melds for 500 points", es: "Dos combinaciones de Reina de Picas y Jota de Diamantes por 500 puntos", de: "Zwei Pik-Dame und Karo-Bube Meldungen für 500 Punkte", nl: "Twee Schoppen Vrouw en Ruiten Boer melds voor 500 punten" },
          { en: "Winning two consecutive tricks", es: "Ganar dos bazas consecutivas", de: "Zwei aufeinanderfolgende Stiche gewinnen", nl: "Twee opeenvolgende slagen winnen" },
          { en: "Having two of same rank", es: "Tener dos del mismo rango", de: "Zwei vom gleichen Rang haben", nl: "Twee van dezelfde rang hebben" },
          { en: "Playing twice in one turn", es: "Jugar dos veces en un turno", de: "Zweimal in einem Zug spielen", nl: "Twee keer spelen in één beurt" }
        ],
        correct: 0,
        explanation: {
          en: "A double bezique consists of declaring both Queen of Spades with Jack of Diamonds twice (using both decks), worth 500 points, much more valuable than a single bezique at 40 points.",
          es: "Un bezique doble consiste en declarar tanto Reina de Picas con Jota de Diamantes dos veces (usando ambos mazos), vale 500 puntos, mucho más valioso que un bezique simple de 40 puntos.",
          de: "Ein Doppel-Bezique besteht aus dem zweimaligen Ansagen von Pik-Dame mit Karo-Bube (unter Verwendung beider Decks), wert 500 Punkte, viel wertvoller als ein einfacher Bezique mit 40 Punkten.",
          nl: "Een dubbele bezique bestaat uit het declareren van zowel Schoppen Vrouw met Ruiten Boer tweemaal (beide decks gebruikend), waard 500 punten, veel waardevoller dan een enkele bezique met 40 punten."
        }
      },
      {
        question: {
          en: "What is 'nut advantage' in poker?",
          es: "¿Qué es la 'ventaja de nuts' en el póker?",
          de: "Was ist 'Nut Advantage' beim Poker?",
          nl: "Wat is 'nut voordeel' bij poker?"
        },
        options: [
          { en: "Having more strongest possible hands in range than opponent", es: "Tener más manos más fuertes posibles en rango que el oponente", de: "Mehr stärkste mögliche Blätter in Range haben als Gegner", nl: "Meer sterkste mogelijke handen in range hebben dan tegenstander" },
          { en: "Always having the best hand", es: "Siempre tener la mejor mano", de: "Immer das beste Blatt haben", nl: "Altijd de beste hand hebben" },
          { en: "Position advantage", es: "Ventaja de posición", de: "Positionsvorteil", nl: "Positievoordeel" },
          { en: "Chip lead advantage", es: "Ventaja de liderazgo de fichas", de: "Chip-Lead-Vorteil", nl: "Fiche voorsprong voordeel" }
        ],
        correct: 0,
        explanation: {
          en: "Nut advantage means your range contains more of the strongest possible hands (the nuts) on a given board than your opponent's range, allowing more aggressive betting.",
          es: "La ventaja de nuts significa que tu rango contiene más de las manos más fuertes posibles (los nuts) en un tablero dado que el rango de tu oponente, permitiendo apuestas más agresivas.",
          de: "Nut Advantage bedeutet dass deine Range mehr der stärksten möglichen Blätter (die Nuts) auf einem gegebenen Board enthält als die Range des Gegners, was aggressiveres Setzen erlaubt.",
          nl: "Nut voordeel betekent dat je range meer van de sterkste mogelijke handen (de nuts) op een gegeven board bevat dan de range van je tegenstander, wat agressiever inzetten mogelijk maakt."
        }
      },
      {
        question: {
          en: "In Klaverjas, what is the value of 'Jass' (Jack of trump)?",
          es: "En Klaverjas, ¿cuál es el valor de 'Jass' (Jota de triunfo)?",
          de: "Was ist der Wert von 'Jass' (Trumpf-Bube) beim Klaverjas?",
          nl: "Wat is de waarde van 'Jass' (Boer van troef) bij Klaverjas?"
        },
        options: [
          { en: "20 points, highest trump card", es: "20 puntos, carta de triunfo más alta", de: "20 Punkte, höchste Trumpfkarte", nl: "20 punten, hoogste troefkaart" },
          { en: "10 points like other Jacks", es: "10 puntos como otras Jotas", de: "10 Punkte wie andere Buben", nl: "10 punten zoals andere Boeren" },
          { en: "2 points", es: "2 puntos", de: "2 Punkte", nl: "2 punten" },
          { en: "14 points", es: "14 puntos", de: "14 Punkte", nl: "14 punten" }
        ],
        correct: 0,
        explanation: {
          en: "In Klaverjas (Dutch variant of Jass), the Jack of trump suit (Jass) is worth 20 points and is the highest trump card, followed by the 9 of trump (Nell) at 14 points.",
          es: "En Klaverjas (variante holandesa de Jass), la Jota del palo de triunfo (Jass) vale 20 puntos y es la carta de triunfo más alta, seguida por el 9 de triunfo (Nell) con 14 puntos.",
          de: "Beim Klaverjas (niederländische Variante von Jass) ist der Trumpf-Bube (Jass) 20 Punkte wert und die höchste Trumpfkarte, gefolgt von der Trumpf-9 (Nell) mit 14 Punkten.",
          nl: "Bij Klaverjas (Nederlandse variant van Jass) is de Boer van troef (Jass) 20 punten waard en de hoogste troefkaart, gevolgd door de 9 van troef (Nell) met 14 punten."
        }
      },
      {
        question: {
          en: "What is 'showdown value' in poker?",
          es: "¿Qué es el 'valor de showdown' en el póker?",
          de: "Was ist 'Showdown Value' beim Poker?",
          nl: "Wat is 'showdown waarde' bij poker?"
        },
        options: [
          { en: "Hand's likelihood to win if taken to showdown without improvement", es: "Probabilidad de la mano de ganar si se lleva a showdown sin mejora", de: "Wahrscheinlichkeit des Blatts zu gewinnen wenn zum Showdown gebracht ohne Verbesserung", nl: "Waarschijnlijkheid van hand om te winnen indien naar showdown gebracht zonder verbetering" },
          { en: "Points awarded at showdown", es: "Puntos otorgados en showdown", de: "Punkte beim Showdown vergeben", nl: "Punten toegekend bij showdown" },
          { en: "Amount of pot at showdown", es: "Cantidad de bote en showdown", de: "Pot-Betrag beim Showdown", nl: "Potbedrag bij showdown" },
          { en: "Ranking of final hand", es: "Clasificación de mano final", de: "Ranking des finalen Blatts", nl: "Ranking van finale hand" }
        ],
        correct: 0,
        explanation: {
          en: "Showdown value refers to a hand's probability of winning if checked down to showdown without further betting, influencing whether to bet for value or check for pot control.",
          es: "El valor de showdown se refiere a la probabilidad de una mano de ganar si se pasa hasta showdown sin más apuestas, influyendo si apostar para valor o pasar para control de bote.",
          de: "Showdown Value bezieht sich auf die Wahrscheinlichkeit eines Blatts zu gewinnen wenn zum Showdown gecheckt wird ohne weiteres Setzen, beeinflusst ob man für Value setzen oder für Pot-Kontrolle checken sollte.",
          nl: "Showdown waarde verwijst naar de waarschijnlijkheid van een hand om te winnen indien gecheckt naar showdown zonder verder inzetten, wat beïnvloedt of te inzetten voor value of te checken voor pot controle."
        }
      },
      {
        question: {
          en: "In Zole (Latvian card game), what is the 'Zole' player trying to achieve?",
          es: "En Zole (juego de cartas letón), ¿qué intenta lograr el jugador 'Zole'?",
          de: "Was versucht der 'Zole'-Spieler beim Zole (lettisches Kartenspiel) zu erreichen?",
          nl: "Wat probeert de 'Zole' speler te bereiken bij Zole (Lets kaartspel)?"
        },
        options: [
          { en: "Win at least 61 points playing alone against two opponents", es: "Ganar al menos 61 puntos jugando solo contra dos oponentes", de: "Mindestens 61 Punkte gewinnen allein gegen zwei Gegner spielend", nl: "Minstens 61 punten winnen alleen spelend tegen twee tegenstanders" },
          { en: "Avoid all tricks", es: "Evitar todas las bazas", de: "Alle Stiche vermeiden", nl: "Alle slagen vermijden" },
          { en: "Take exactly half the points", es: "Tomar exactamente la mitad de los puntos", de: "Genau die Hälfte der Punkte nehmen", nl: "Precies de helft van de punten nemen" },
          { en: "Win all tricks", es: "Ganar todas las bazas", de: "Alle Stiche gewinnen", nl: "Alle slagen winnen" }
        ],
        correct: 0,
        explanation: {
          en: "In Zole, the soloist (Zole player) plays alone against two defenders and must win at least 61 of the 120 available points to succeed in the contract.",
          es: "En Zole, el solista (jugador Zole) juega solo contra dos defensores y debe ganar al menos 61 de los 120 puntos disponibles para tener éxito en el contrato.",
          de: "Beim Zole spielt der Solist (Zole-Spieler) allein gegen zwei Verteidiger und muss mindestens 61 der 120 verfügbaren Punkte gewinnen um den Kontrakt zu erfüllen.",
          nl: "Bij Zole speelt de solist (Zole speler) alleen tegen twee verdedigers en moet minstens 61 van de 120 beschikbare punten winnen om het contract te volbrengen."
        }
      },
      {
        question: {
          en: "What is 'range polarization' in poker?",
          es: "¿Qué es la 'polarización de rango' en el póker?",
          de: "Was ist 'Range Polarisierung' beim Poker?",
          nl: "Wat is 'range polarisatie' bij poker?"
        },
        options: [
          { en: "Splitting range into very strong and very weak hands only", es: "Dividir rango en solo manos muy fuertes y muy débiles", de: "Range nur in sehr starke und sehr schwache Blätter aufteilen", nl: "Range splitsen in alleen zeer sterke en zeer zwakke handen" },
          { en: "Dividing players by skill", es: "Dividir jugadores por habilidad", de: "Spieler nach Können aufteilen", nl: "Spelers verdelen op vaardigheid" },
          { en: "Separating cash and tournament play", es: "Separar juego de cash y torneo", de: "Cash- und Turnierspiel trennen", nl: "Cash en toernooispel scheiden" },
          { en: "Playing extremes positions only", es: "Jugar solo posiciones extremas", de: "Nur extreme Positionen spielen", nl: "Alleen extreme posities spelen" }
        ],
        correct: 0,
        explanation: {
          en: "Range polarization means constructing betting ranges that contain only very strong value hands and bluffs, with no medium-strength hands, typically used for large river bets.",
          es: "La polarización de rango significa construir rangos de apuesta que contienen solo manos de valor muy fuertes y faroles, sin manos de fuerza media, típicamente usado para grandes apuestas de river.",
          de: "Range Polarisierung bedeutet Setz-Ranges zu konstruieren die nur sehr starke Value-Blätter und Bluffs enthalten, ohne mittelstarke Blätter, typischerweise für große River-Bets verwendet.",
          nl: "Range polarisatie betekent inzet ranges construeren die alleen zeer sterke value handen en bluffs bevatten, zonder middel sterke handen, typisch gebruikt voor grote river inzetten."
        }
      },
      {
        question: {
          en: "In Tyzicha (1000), what is the minimum bid?",
          es: "En Tyzicha (1000), ¿cuál es la puja mínima?",
          de: "Was ist das Mindestgebot beim Tyzicha (1000)?",
          nl: "Wat is het minimumbod bij Tyzicha (1000)?"
        },
        options: [
          { en: "100 points", es: "100 puntos", de: "100 Punkte", nl: "100 punten" },
          { en: "250 points", es: "250 puntos", de: "250 Punkte", nl: "250 punten" },
          { en: "500 points", es: "500 puntos", de: "500 Punkte", nl: "500 punten" },
          { en: "1000 points", es: "1000 puntos", de: "1000 Punkte", nl: "1000 punten" }
        ],
        correct: 0,
        explanation: {
          en: "In Tyzicha (also called 1000), the minimum bid is 100 points, with bidding increasing in increments of 5 points as players compete to name trump and play the hand.",
          es: "En Tyzicha (también llamado 1000), la puja mínima es 100 puntos, con la puja aumentando en incrementos de 5 puntos mientras los jugadores compiten para nombrar triunfo y jugar la mano.",
          de: "Beim Tyzicha (auch 1000 genannt) ist das Mindestgebot 100 Punkte, wobei die Gebote in Schritten von 5 Punkten steigen während Spieler konkurrieren um Trumpf zu benennen und das Blatt zu spielen.",
          nl: "Bij Tyzicha (ook 1000 genoemd) is het minimumbod 100 punten, waarbij biedingen toenemen in stappen van 5 punten terwijl spelers strijden om troef te benoemen en de hand te spelen."
        }
      },
      {
        question: {
          en: "What is 'board texture' in poker?",
          es: "¿Qué es la 'textura del tablero' en el póker?",
          de: "Was ist 'Board Texture' beim Poker?",
          nl: "Wat is 'board textuur' bij poker?"
        },
        options: [
          { en: "How community cards interact affecting possible hand ranges", es: "Cómo interactúan las cartas comunitarias afectando posibles rangos de manos", de: "Wie Gemeinschaftskarten interagieren und mögliche Hand-Ranges beeinflussen", nl: "Hoe gemeenschapskaarten interacteren en mogelijke hand ranges beïnvloeden" },
          { en: "Quality of poker table felt", es: "Calidad del fieltro de la mesa de póker", de: "Qualität des Pokertisch-Filzes", nl: "Kwaliteit van pokertafel vilt" },
          { en: "Design of playing cards", es: "Diseño de cartas de juego", de: "Design der Spielkarten", nl: "Ontwerp van speelkaarten" },
          { en: "Physical card condition", es: "Condición física de la carta", de: "Physischer Kartenzustand", nl: "Fysieke kaarttoestand" }
        ],
        correct: 0,
        explanation: {
          en: "Board texture describes how the community cards relate to each other - whether they're coordinated (enabling straights/flushes) or disconnected (rainbow, unpaired) - affecting optimal strategy.",
          es: "La textura del tablero describe cómo se relacionan las cartas comunitarias entre sí - si están coordinadas (permitiendo escaleras/colores) o desconectadas (arcoíris, no emparejadas) - afectando la estrategia óptima.",
          de: "Board Texture beschreibt wie die Gemeinschaftskarten zueinander stehen - ob sie koordiniert sind (Straßen/Flushes ermöglichend) oder unverbunden (Rainbow, ungepaired) - was die optimale Strategie beeinflusst.",
          nl: "Board textuur beschrijft hoe de gemeenschapskaarten zich tot elkaar verhouden - of ze gecoördineerd zijn (straten/flushes mogelijk makend) of losgekoppeld (regenboog, ongepaard) - wat optimale strategie beïnvloedt."
        }
      },
      {
        question: {
          en: "In Sueca (Portuguese card game), how many points are needed to win a game?",
          es: "En Sueca (juego de cartas portugués), ¿cuántos puntos se necesitan para ganar un juego?",
          de: "Wie viele Punkte braucht man beim Sueca (portugiesisches Kartenspiel) um ein Spiel zu gewinnen?",
          nl: "Hoeveel punten zijn nodig om een spel te winnen bij Sueca (Portugees kaartspel)?"
        },
        options: [
          { en: "61 points out of 120 total", es: "61 puntos de 120 totales", de: "61 Punkte von 120 insgesamt", nl: "61 punten van 120 totaal" },
          { en: "100 points", es: "100 puntos", de: "100 Punkte", nl: "100 punten" },
          { en: "51 points", es: "51 puntos", de: "51 Punkte", nl: "51 punten" },
          { en: "All 120 points", es: "Todos los 120 puntos", de: "Alle 120 Punkte", nl: "Alle 120 punten" }
        ],
        correct: 0,
        explanation: {
          en: "In Sueca, there are 120 points available per hand (30 per suit), and a team needs to win at least 61 points to score points toward winning the overall game.",
          es: "En Sueca, hay 120 puntos disponibles por mano (30 por palo), y un equipo necesita ganar al menos 61 puntos para anotar puntos hacia ganar el juego general.",
          de: "Beim Sueca gibt es 120 Punkte pro Blatt (30 pro Farbe), und ein Team muss mindestens 61 Punkte gewinnen um Punkte zum Gewinn des Gesamtspiels zu erzielen.",
          nl: "Bij Sueca zijn er 120 punten beschikbaar per hand (30 per kleur), en een team moet minstens 61 punten winnen om punten te scoren richting winnen van het totale spel."
        }
      },
      {
        question: {
          en: "What is 'tournament life' concept in poker?",
          es: "¿Qué es el concepto de 'vida del torneo' en el póker?",
          de: "Was ist das 'Tournament Life' Konzept beim Poker?",
          nl: "Wat is het 'toernooi leven' concept bij poker?"
        },
        options: [
          { en: "Chip preservation awareness as losing all chips eliminates you", es: "Conciencia de preservación de fichas ya que perder todas las fichas te elimina", de: "Chip-Erhaltungsbewusstsein da Verlust aller Chips zur Eliminierung führt", nl: "Fiche behoud bewustzijn aangezien alle fiches verliezen je elimineert" },
          { en: "Duration of tournament", es: "Duración del torneo", de: "Turnierdauer", nl: "Toernooilengte" },
          { en: "Number of entries allowed", es: "Número de entradas permitidas", de: "Anzahl erlaubter Eintragungen", nl: "Aantal toegestane inschrijvingen" },
          { en: "Professional poker career", es: "Carrera profesional de póker", de: "Professionelle Poker-Karriere", nl: "Professionele poker carrière" }
        ],
        correct: 0,
        explanation: {
          en: "Tournament life refers to the value of staying alive in tournaments - unlike cash games, losing all chips means elimination, making chip preservation more important than pure chip EV.",
          es: "La vida del torneo se refiere al valor de permanecer vivo en torneos - a diferencia de los juegos de cash, perder todas las fichas significa eliminación, haciendo la preservación de fichas más importante que el puro EV de fichas.",
          de: "Tournament Life bezieht sich auf den Wert im Turnier zu bleiben - anders als bei Cash Games bedeutet der Verlust aller Chips Eliminierung, was Chip-Erhaltung wichtiger macht als reiner Chip-EV.",
          nl: "Toernooi leven verwijst naar de waarde van in leven blijven in toernooien - anders dan cash games betekent alle fiches verliezen eliminatie, wat fiche behoud belangrijker maakt dan pure fiche EV."
        }
      },
      {
        question: {
          en: "In Ulti (Hungarian tarot game), what is an 'Ulti' contract?",
          es: "En Ulti (juego de tarot húngaro), ¿qué es un contrato 'Ulti'?",
          de: "Was ist ein 'Ulti'-Kontrakt beim Ulti (ungarisches Tarot-Spiel)?",
          nl: "Wat is een 'Ulti' contract bij Ulti (Hongaars tarotspel)?"
        },
        options: [
          { en: "Winning the last trick with the lowest trump (Skíz)", es: "Ganar la última baza con el triunfo más bajo (Skíz)", de: "Den letzten Stich mit dem niedrigsten Trumpf (Skíz) gewinnen", nl: "De laatste slag winnen met de laagste troef (Skíz)" },
          { en: "Taking all 20 tricks", es: "Tomar todas las 20 bazas", de: "Alle 20 Stiche nehmen", nl: "Alle 20 slagen nemen" },
          { en: "Avoiding all point cards", es: "Evitar todas las cartas de puntos", de: "Alle Punktkarten vermeiden", nl: "Alle puntenkaarten vermijden" },
          { en: "Making exactly half the points", es: "Hacer exactamente la mitad de los puntos", de: "Genau die Hälfte der Punkte machen", nl: "Precies de helft van de punten maken" }
        ],
        correct: 0,
        explanation: {
          en: "The Ulti contract requires winning the final (20th) trick specifically with the Skíz (lowest trump), one of the most difficult and high-scoring announcements in the game.",
          es: "El contrato Ulti requiere ganar la baza final (20ª) específicamente con el Skíz (triunfo más bajo), uno de los anuncios más difíciles y de mayor puntuación en el juego.",
          de: "Der Ulti-Kontrakt erfordert den finalen (20.) Stich speziell mit dem Skíz (niedrigster Trumpf) zu gewinnen, eine der schwierigsten und höchstbewerteten Ansagen im Spiel.",
          nl: "Het Ulti contract vereist de finale (20e) slag te winnen specifiek met de Skíz (laagste troef), een van de moeilijkste en hoogst scorende aankondigingen in het spel."
        }
      },
      {
        question: {
          en: "In poker, what is 'reverse tell exploitation'?",
          es: "En el póker, ¿qué es la 'explotación de tell inverso'?",
          de: "Was ist 'umgekehrte Tell-Ausnutzung' beim Poker?",
          nl: "Wat is 'omgekeerde tell-exploitatie' bij poker?"
        },
        options: [
          { en: "Giving false tells to deceive opponents about hand strength", es: "Dar tells falsos para engañar a oponentes sobre fuerza de mano", de: "Falsche Tells geben um Gegner über Blattstärke zu täuschen", nl: "Valse tells geven om tegenstanders te misleiden over handsterkte" },
          { en: "Reading opponents' tells in reverse order", es: "Leer los tells de oponentes en orden inverso", de: "Gegnerische Tells in umgekehrter Reihenfolge lesen", nl: "Tells van tegenstanders in omgekeerde volgorde lezen" },
          { en: "Telling opponents what you have", es: "Decir a oponentes lo que tienes", de: "Gegnern sagen was du hast", nl: "Tegenstanders vertellen wat je hebt" },
          { en: "Hiding all physical movements", es: "Ocultar todos los movimientos físicos", de: "Alle physischen Bewegungen verstecken", nl: "Alle fysieke bewegingen verbergen" }
        ],
        correct: 0,
        explanation: {
          en: "Reverse tell exploitation involves intentionally displaying false tells (betting patterns, timing, body language) to manipulate opponents into making incorrect decisions based on misleading information.",
          es: "La explotación de tell inverso implica mostrar intencionalmente tells falsos (patrones de apuesta, timing, lenguaje corporal) para manipular a oponentes a tomar decisiones incorrectas basadas en información engañosa.",
          de: "Umgekehrte Tell-Ausnutzung bedeutet absichtlich falsche Tells (Wettmuster, Timing, Körpersprache) zu zeigen um Gegner zu Fehlentscheidungen basierend auf irreführenden Informationen zu manipulieren.",
          nl: "Omgekeerde tell-exploitatie houdt in dat je opzettelijk valse tells (weddenschapspatronen, timing, lichaamstaal) toont om tegenstanders te manipuleren tot het nemen van verkeerde beslissingen gebaseerd op misleidende informatie."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level7;
  } else if (typeof window !== 'undefined') {
    window.level7 = level7;
  }
})();
