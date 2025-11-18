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
