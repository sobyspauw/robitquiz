// Quiz Template - Level 4: Bord spelletjes - Kaartspellen
(function() {
  const level4 = {
    name: {
      en: "Card Games - Expert",
      es: "Juegos de Cartas - Experto",
      de: "Kartenspiele - Experte",
      nl: "Kaartspellen - Expert"
    },
    questions: [
      {
        question: {
          en: "In Contract Bridge, what does 'finessing' mean?",
          es: "En Contract Bridge, ¿qué significa 'finesse'?",
          de: "Was bedeutet 'Schneiden' beim Contract Bridge?",
          nl: "Wat betekent 'finesse' bij Contract Bridge?"
        },
        options: [
          { en: "Bidding higher than opponents", es: "Pujar más alto que los oponentes", de: "Höher bieten als Gegner", nl: "Hoger bieden dan tegenstanders" },
          { en: "Attempting to win a trick with a lower card", es: "Intentar ganar una baza con una carta más baja", de: "Versuchen, einen Stich mit einer niedrigeren Karte zu gewinnen", nl: "Proberen een slag te winnen met een lagere kaart" },
          { en: "Counting cards already played", es: "Contar cartas ya jugadas", de: "Bereits gespielte Karten zählen", nl: "Al gespeelde kaarten tellen" },
          { en: "Signaling your partner", es: "Señalar a tu pareja", de: "Deinem Partner signalisieren", nl: "Je partner signaleren" }
        ],
        correct: 1,
        explanation: {
          en: "Finessing is playing a lower card in hopes that an opponent's higher card is positioned favorably, allowing you to win the trick without playing your highest card.",
          es: "Finesse es jugar una carta más baja con la esperanza de que una carta más alta del oponente esté posicionada favorablemente, permitiéndote ganar la baza sin jugar tu carta más alta.",
          de: "Schneiden bedeutet eine niedrigere Karte zu spielen in der Hoffnung, dass eine höhere Karte des Gegners günstig positioniert ist, sodass man den Stich gewinnt ohne die höchste Karte zu spielen.",
          nl: "Finesse is een lagere kaart spelen in de hoop dat de hogere kaart van een tegenstander gunstig gepositioneerd is, waardoor je de slag kunt winnen zonder je hoogste kaart te spelen."
        }
      },
      {
        question: {
          en: "In Texas Hold'em poker, what are 'pocket rockets'?",
          es: "En Texas Hold'em poker, ¿qué son 'pocket rockets'?",
          de: "Was sind 'Pocket Rockets' beim Texas Hold'em Poker?",
          nl: "Wat zijn 'pocket rockets' bij Texas Hold'em poker?"
        },
        options: [
          { en: "Two Kings", es: "Dos Reyes", de: "Zwei Könige", nl: "Twee Koningen" },
          { en: "Two Aces", es: "Dos Ases", de: "Zwei Asse", nl: "Twee Azen" },
          { en: "Ace-King suited", es: "As-Rey del mismo palo", de: "Ass-König in gleicher Farbe", nl: "Aas-Koning van dezelfde kleur" },
          { en: "Any pair of face cards", es: "Cualquier par de figuras", de: "Jedes Paar Bildkarten", nl: "Elk paar plaatjeskaarten" }
        ],
        correct: 1,
        explanation: {
          en: "Pocket rockets is a nickname for pocket Aces (two Aces as your hole cards), the strongest starting hand in Texas Hold'em poker.",
          es: "Pocket rockets es un apodo para dos Ases como cartas ocultas, la mano inicial más fuerte en Texas Hold'em poker.",
          de: "Pocket Rockets ist ein Spitzname für zwei Asse als verdeckte Karten, das stärkste Startblatt beim Texas Hold'em Poker.",
          nl: "Pocket rockets is een bijnaam voor twee Azen als je gesloten kaarten, de sterkste starthand bij Texas Hold'em poker."
        }
      },
      {
        question: {
          en: "In Spades, what happens if you don't make your bid?",
          es: "En Spades, ¿qué pasa si no cumples tu puja?",
          de: "Was passiert beim Spades, wenn du dein Gebot nicht erfüllst?",
          nl: "Wat gebeurt er bij Spades als je je bod niet haalt?"
        },
        options: [
          { en: "You lose double the points", es: "Pierdes el doble de puntos", de: "Du verlierst doppelte Punkte", nl: "Je verliest dubbele punten" },
          { en: "You're penalized 10 times your bid", es: "Eres penalizado 10 veces tu puja", de: "Du wirst mit dem 10-fachen deines Gebots bestraft", nl: "Je krijgt een straf van 10 keer je bod" },
          { en: "You score zero that round", es: "Obtienes cero esa ronda", de: "Du bekommst null in dieser Runde", nl: "Je scoort nul die ronde" },
          { en: "Nothing happens", es: "No pasa nada", de: "Nichts passiert", nl: "Er gebeurt niets" }
        ],
        correct: 1,
        explanation: {
          en: "In Spades, if you fail to make your bid, you're penalized 10 points for each trick you bid. This is called 'going set' or 'being set.'",
          es: "En Spades, si no cumples tu puja, eres penalizado con 10 puntos por cada baza que pujaste. Esto se llama 'fallar' o 'ser eliminado.'",
          de: "Beim Spades wirst du mit 10 Punkten für jeden gebotenen Stich bestraft, wenn du dein Gebot nicht erfüllst. Dies nennt man 'gesetzt werden.'",
          nl: "Bij Spades krijg je een straf van 10 punten voor elke slag die je bood als je je bod niet haalt. Dit heet 'gezet worden.'"
        }
      },
      {
        question: {
          en: "What is the 'rule of eleven' in Bridge?",
          es: "¿Cuál es la 'regla de once' en Bridge?",
          de: "Was ist die 'Regel von Elf' beim Bridge?",
          nl: "Wat is de 'regel van elf' bij Bridge?"
        },
        options: [
          { en: "You need 11 high cards to bid", es: "Necesitas 11 cartas altas para pujar", de: "Du brauchst 11 hohe Karten zum Bieten", nl: "Je hebt 11 hoge kaarten nodig om te bieden" },
          { en: "Subtract lead card from 11 to find higher cards", es: "Resta la carta líder de 11 para encontrar cartas más altas", de: "Ziehe die Führkarte von 11 ab, um höhere Karten zu finden", nl: "Trek de leidkaart af van 11 om hogere kaarten te vinden" },
          { en: "Maximum 11 tricks per game", es: "Máximo 11 bazas por juego", de: "Maximal 11 Stiche pro Spiel", nl: "Maximum 11 slagen per spel" },
          { en: "Bidding must reach level 11", es: "La puja debe llegar al nivel 11", de: "Das Gebot muss Stufe 11 erreichen", nl: "Het bieden moet niveau 11 bereiken" }
        ],
        correct: 1,
        explanation: {
          en: "The rule of eleven states that when partner leads fourth-best, subtracting the card's value from 11 tells you how many higher cards are held by the other three hands.",
          es: "La regla de once establece que cuando el compañero lidera cuarta mejor, restar el valor de la carta de 11 te dice cuántas cartas más altas tienen las otras tres manos.",
          de: "Die Regel von Elf besagt, dass wenn der Partner die vierthöchste Karte ausspielt, das Subtrahieren des Kartenwerts von 11 zeigt, wie viele höhere Karten die anderen drei Hände haben.",
          nl: "De regel van elf stelt dat wanneer je partner de vierde beste kaart speelt, het aftrekken van de kaartwaarde van 11 je vertelt hoeveel hogere kaarten de andere drie handen hebben."
        }
      },
      {
        question: {
          en: "In Euchre, what is the 'left bower'?",
          es: "En Euchre, ¿qué es el 'left bower'?",
          de: "Was ist der 'linke Bube' beim Euchre?",
          nl: "Wat is de 'linker boer' bij Euchre?"
        },
        options: [
          { en: "The Jack of trump suit", es: "La Jota del palo de triunfo", de: "Der Bube der Trumpffarbe", nl: "De Boer van de troefkleur" },
          { en: "Jack of same color as trump", es: "Jota del mismo color que el triunfo", de: "Bube der gleichen Farbe wie Trumpf", nl: "Boer van dezelfde kleur als troef" },
          { en: "Lowest trump card", es: "Carta de triunfo más baja", de: "Niedrigste Trumpfkarte", nl: "Laagste troefkaart" },
          { en: "The dealer's partner", es: "El compañero del repartidor", de: "Der Partner des Gebers", nl: "De partner van de deler" }
        ],
        correct: 1,
        explanation: {
          en: "In Euchre, the left bower is the Jack of the same color as the trump suit, and it becomes the second-highest trump card after the right bower (Jack of trump).",
          es: "En Euchre, el left bower es la Jota del mismo color que el palo de triunfo, y se convierte en la segunda carta de triunfo más alta después del right bower (Jota de triunfo).",
          de: "Beim Euchre ist der linke Bube der Bube der gleichen Farbe wie die Trumpffarbe und wird zur zweithöchsten Trumpfkarte nach dem rechten Buben (Trumpf-Bube).",
          nl: "Bij Euchre is de linker boer de Boer van dezelfde kleur als de troefkleur, en wordt de op één na hoogste troefkaart na de rechter boer (Boer van troef)."
        }
      },
      {
        question: {
          en: "What is a 'grand slam' in Bridge?",
          es: "¿Qué es un 'grand slam' en Bridge?",
          de: "Was ist ein 'Grand Slam' beim Bridge?",
          nl: "Wat is een 'grand slam' bij Bridge?"
        },
        options: [
          { en: "Winning 10 tricks", es: "Ganar 10 bazas", de: "10 Stiche gewinnen", nl: "10 slagen winnen" },
          { en: "Winning 12 tricks", es: "Ganar 12 bazas", de: "12 Stiche gewinnen", nl: "12 slagen winnen" },
          { en: "Winning all 13 tricks", es: "Ganar las 13 bazas", de: "Alle 13 Stiche gewinnen", nl: "Alle 13 slagen winnen" },
          { en: "Winning with no trumps", es: "Ganar sin triunfos", de: "Ohne Trumpf gewinnen", nl: "Winnen zonder troef" }
        ],
        correct: 2,
        explanation: {
          en: "A grand slam in Bridge means bidding and winning all 13 tricks. It's the highest possible contract and awards significant bonus points.",
          es: "Un grand slam en Bridge significa pujar y ganar las 13 bazas. Es el contrato más alto posible y otorga puntos de bonificación significativos.",
          de: "Ein Grand Slam beim Bridge bedeutet alle 13 Stiche zu bieten und zu gewinnen. Es ist der höchstmögliche Kontrakt und bringt erhebliche Bonuspunkte.",
          nl: "Een grand slam bij Bridge betekent bieden en alle 13 slagen winnen. Het is het hoogst mogelijke contract en geeft aanzienlijke bonuspunten."
        }
      },
      {
        question: {
          en: "In Pinochle, what is a 'meld'?",
          es: "En Pinochle, ¿qué es un 'meld'?",
          de: "Was ist eine 'Meldung' beim Pinochle?",
          nl: "Wat is een 'meld' bij Pinochle?"
        },
        options: [
          { en: "Scoring combinations shown before trick play", es: "Combinaciones de puntuación mostradas antes del juego de bazas", de: "Punktekombinationen vor dem Stichspiel gezeigt", nl: "Scorecombinaties getoond voor het slagenspel" },
          { en: "The final trick of the round", es: "La baza final de la ronda", de: "Der letzte Stich der Runde", nl: "De laatste slag van de ronde" },
          { en: "A special trump card", es: "Una carta de triunfo especial", de: "Eine spezielle Trumpfkarte", nl: "Een speciale troefkaart" },
          { en: "Trading cards with partner", es: "Intercambiar cartas con el compañero", de: "Karten mit Partner tauschen", nl: "Kaarten ruilen met partner" }
        ],
        correct: 0,
        explanation: {
          en: "In Pinochle, a meld is a combination of cards (like marriages, runs, or sets) that scores points before trick-taking begins. Players display these combinations to claim points.",
          es: "En Pinochle, un meld es una combinación de cartas (como matrimonios, escaleras o conjuntos) que puntúa antes de que comience el juego de bazas. Los jugadores muestran estas combinaciones para reclamar puntos.",
          de: "Beim Pinochle ist eine Meldung eine Kartenkombination (wie Hochzeiten, Reihen oder Sätze), die Punkte bringt bevor das Stichspiel beginnt. Spieler zeigen diese Kombinationen, um Punkte zu erhalten.",
          nl: "Bij Pinochle is een meld een combinatie van kaarten (zoals huwelijken, reeksen of sets) die punten scoort voordat het slagenspel begint. Spelers tonen deze combinaties om punten te claimen."
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
          { en: "Bidding zero tricks", es: "Pujar cero bazas", de: "Null Stiche bieten", nl: "Nul slagen bieden" },
          { en: "Taking more tricks than bid", es: "Tomar más bazas de las pujadas", de: "Mehr Stiche nehmen als geboten", nl: "Meer slagen nemen dan geboden" },
          { en: "Bidding higher than you can make", es: "Pujar más alto de lo que puedes hacer", de: "Höher bieten als man machen kann", nl: "Hoger bieden dan je kunt halen" },
          { en: "Passing during bidding", es: "Pasar durante la puja", de: "Während des Bietens passen", nl: "Passen tijdens het bieden" }
        ],
        correct: 1,
        explanation: {
          en: "Sandbagging is taking more tricks than you bid, accumulating 'bags' or overtricks. In Spades, 10 bags typically results in a 100-point penalty.",
          es: "Sandbagging es tomar más bazas de las que pujaste, acumulando 'bolsas' o bazas extra. En Spades, 10 bolsas típicamente resulta en una penalización de 100 puntos.",
          de: "Sandbagging bedeutet mehr Stiche zu nehmen als geboten, wobei 'Säcke' oder Überstiche angesammelt werden. Beim Spades führen 10 Säcke typischerweise zu 100 Strafpunkten.",
          nl: "Sandbagging is meer slagen nemen dan je bood, waarbij je 'zakken' of overslagen verzamelt. Bij Spades resulteren 10 zakken meestal in een 100-punten straf."
        }
      },
      {
        question: {
          en: "In Canasta, what is a 'natural canasta'?",
          es: "En Canasta, ¿qué es una 'canasta natural'?",
          de: "Was ist eine 'natürliche Canasta' beim Canasta?",
          nl: "Wat is een 'natuurlijke canasta' bij Canasta?"
        },
        options: [
          { en: "7 cards of same rank without wildcards", es: "7 cartas del mismo rango sin comodines", de: "7 Karten gleichen Ranges ohne Joker", nl: "7 kaarten van dezelfde rang zonder wildcards" },
          { en: "Any 7 cards in sequence", es: "Cualquier 7 cartas en secuencia", de: "Beliebige 7 Karten in Folge", nl: "Willekeurige 7 kaarten op volgorde" },
          { en: "7 cards including at least one wildcard", es: "7 cartas incluyendo al menos un comodín", de: "7 Karten mit mindestens einem Joker", nl: "7 kaarten met minstens één wildcard" },
          { en: "The initial hand dealt", es: "La mano inicial repartida", de: "Das ursprünglich ausgeteilte Blatt", nl: "De initiële gedeelde hand" }
        ],
        correct: 0,
        explanation: {
          en: "A natural canasta is a meld of 7 cards of the same rank without any wildcards (2s or jokers), worth 500 points. This scores higher than a mixed canasta.",
          es: "Una canasta natural es una combinación de 7 cartas del mismo rango sin comodines (2s o jokers), vale 500 puntos. Esto puntúa más alto que una canasta mixta.",
          de: "Eine natürliche Canasta ist eine Meldung von 7 Karten gleichen Ranges ohne Joker (2en oder Joker), wert 500 Punkte. Dies punktet höher als eine gemischte Canasta.",
          nl: "Een natuurlijke canasta is een meld van 7 kaarten van dezelfde rang zonder wildcards (2'en of jokers), waard 500 punten. Dit scoort hoger dan een gemengde canasta."
        }
      },
      {
        question: {
          en: "What does 'shooting the moon' mean in Hearts?",
          es: "¿Qué significa 'disparar a la luna' en Hearts?",
          de: "Was bedeutet 'den Mond schießen' beim Hearts?",
          nl: "Wat betekent 'naar de maan schieten' bij Hearts?"
        },
        options: [
          { en: "Avoiding all penalty cards", es: "Evitar todas las cartas de penalización", de: "Alle Strafkarten vermeiden", nl: "Alle strafkaarten vermijden" },
          { en: "Taking all hearts and Queen of Spades", es: "Tomar todos los corazones y la Reina de Picas", de: "Alle Herz und Pik-Dame nehmen", nl: "Alle harten en Schoppen Vrouw nemen" },
          { en: "Winning with exactly 13 points", es: "Ganar con exactamente 13 puntos", de: "Mit genau 13 Punkten gewinnen", nl: "Winnen met precies 13 punten" },
          { en: "Discarding high cards first", es: "Descartar cartas altas primero", de: "Hohe Karten zuerst ablegen", nl: "Hoge kaarten eerst weggooien" }
        ],
        correct: 1,
        explanation: {
          en: "Shooting the moon means taking all 13 hearts and the Queen of Spades in one hand. When successful, all other players receive 26 penalty points instead of you.",
          es: "Disparar a la luna significa tomar todos los 13 corazones y la Reina de Picas en una mano. Cuando tiene éxito, todos los demás jugadores reciben 26 puntos de penalización en lugar de ti.",
          de: "Den Mond schießen bedeutet alle 13 Herz und die Pik-Dame in einer Hand zu nehmen. Bei Erfolg erhalten alle anderen Spieler 26 Strafpunkte statt dir.",
          nl: "Naar de maan schieten betekent alle 13 harten en de Schoppen Vrouw in één hand nemen. Bij succes krijgen alle andere spelers 26 strafpunten in plaats van jij."
        }
      },
      {
        question: {
          en: "In Cribbage, what is 'his nobs'?",
          es: "En Cribbage, ¿qué es 'his nobs'?",
          de: "Was ist 'sein Bube' beim Cribbage?",
          nl: "Wat is 'zijn boer' bij Cribbage?"
        },
        options: [
          { en: "The highest card in play", es: "La carta más alta en juego", de: "Die höchste Karte im Spiel", nl: "De hoogste kaart in het spel" },
          { en: "Jack of same suit as starter card", es: "Jota del mismo palo que la carta inicial", de: "Bube der gleichen Farbe wie die Startkarte", nl: "Boer van dezelfde kleur als de startkaart" },
          { en: "Any four Jacks", es: "Cualquier cuatro Jotas", de: "Beliebige vier Buben", nl: "Willekeurige vier Boeren" },
          { en: "The dealer's hand", es: "La mano del repartidor", de: "Das Blatt des Gebers", nl: "De hand van de deler" }
        ],
        correct: 1,
        explanation: {
          en: "His nobs is holding the Jack of the same suit as the starter card (cut card), worth 1 point in Cribbage. It's also called 'one for his nob.'",
          es: "His nobs es tener la Jota del mismo palo que la carta inicial (carta cortada), vale 1 punto en Cribbage. También se llama 'uno por su nob.'",
          de: "Sein Bube bedeutet den Buben der gleichen Farbe wie die Startkarte (geschnittene Karte) zu haben, wert 1 Punkt beim Cribbage. Es wird auch 'eins für seinen Buben' genannt.",
          nl: "Zijn boer is de Boer van dezelfde kleur als de startkaart (afgesneden kaart) hebben, waard 1 punt bij Cribbage. Het wordt ook 'één voor zijn boer' genoemd."
        }
      },
      {
        question: {
          en: "What is the purpose of the 'kitty' in many card games?",
          es: "¿Cuál es el propósito del 'kitty' en muchos juegos de cartas?",
          de: "Was ist der Zweck des 'Kitty' in vielen Kartenspielen?",
          nl: "Wat is het doel van de 'kitty' in veel kaartspellen?"
        },
        options: [
          { en: "Extra cards set aside for later use", es: "Cartas extra reservadas para uso posterior", de: "Zusätzliche Karten für spätere Verwendung beiseite gelegt", nl: "Extra kaarten opzij gelegd voor later gebruik" },
          { en: "The dealer's bonus cards", es: "Las cartas de bonificación del repartidor", de: "Die Bonuskarten des Gebers", nl: "De bonuskaarten van de deler" },
          { en: "Cards used to determine trump", es: "Cartas usadas para determinar triunfo", de: "Karten zur Bestimmung des Trumpfs", nl: "Kaarten gebruikt om troef te bepalen" },
          { en: "Penalty cards removed from play", es: "Cartas de penalización removidas del juego", de: "Strafkarten aus dem Spiel entfernt", nl: "Strafkaarten verwijderd uit het spel" }
        ],
        correct: 0,
        explanation: {
          en: "The kitty (or widow) is a set of cards dealt face-down and set aside, which may be used by the highest bidder or incorporated into play according to specific game rules.",
          es: "El kitty (o viuda) es un conjunto de cartas repartidas boca abajo y reservadas, que pueden ser utilizadas por el mejor postor o incorporadas al juego según reglas específicas del juego.",
          de: "Der Kitty (oder die Witwe) ist ein Satz Karten, die verdeckt ausgeteilt und beiseite gelegt werden und vom Höchstbietenden verwendet oder nach spezifischen Spielregeln einbezogen werden können.",
          nl: "De kitty (of weduwe) is een set kaarten die gesloten gedeeld en opzij gelegd worden, die gebruikt kunnen worden door de hoogste bieder of volgens specifieke spelregels in het spel opgenomen."
        }
      },
      {
        question: {
          en: "In poker, what is a 'bad beat'?",
          es: "En el póker, ¿qué es un 'bad beat'?",
          de: "Was ist ein 'Bad Beat' beim Poker?",
          nl: "Wat is een 'bad beat' bij poker?"
        },
        options: [
          { en: "Losing with a very strong hand", es: "Perder con una mano muy fuerte", de: "Mit einem sehr starken Blatt verlieren", nl: "Verliezen met een zeer sterke hand" },
          { en: "Missing a flush by one card", es: "Fallar un color por una carta", de: "Einen Flush um eine Karte verfehlen", nl: "Een flush missen met één kaart" },
          { en: "Folding a winning hand", es: "Retirarse con una mano ganadora", de: "Ein Gewinnblatt folden", nl: "Een winnende hand passen" },
          { en: "Going all-in and losing", es: "Ir all-in y perder", de: "All-in gehen und verlieren", nl: "All-in gaan en verliezen" }
        ],
        correct: 0,
        explanation: {
          en: "A bad beat is losing a hand with a very strong hand to an opponent who drew an unlikely winning hand. It's considered unlucky and often triggers special bonuses in casinos.",
          es: "Un bad beat es perder una mano con una mano muy fuerte contra un oponente que sacó una mano ganadora improbable. Se considera mala suerte y a menudo desencadena bonificaciones especiales en casinos.",
          de: "Ein Bad Beat ist das Verlieren mit einem sehr starken Blatt gegen einen Gegner, der ein unwahrscheinliches Gewinnblatt zog. Es gilt als Pech und löst oft Sonderboni in Casinos aus.",
          nl: "Een bad beat is verliezen met een zeer sterke hand tegen een tegenstander die een onwaarschijnlijke winnende hand trok. Het wordt als pech beschouwd en activeert vaak speciale bonussen in casino's."
        }
      },
      {
        question: {
          en: "What is 'rubber bridge'?",
          es: "¿Qué es 'rubber bridge'?",
          de: "Was ist 'Rubber Bridge'?",
          nl: "Wat is 'rubber bridge'?"
        },
        options: [
          { en: "A quick 5-hand game", es: "Un juego rápido de 5 manos", de: "Ein schnelles 5-Blatt-Spiel", nl: "Een snel 5-handen spel" },
          { en: "Best of 3 games to win rubber", es: "Mejor de 3 juegos para ganar el rubber", de: "Best of 3 Spiele um den Rubber zu gewinnen", nl: "Best of 3 spellen om de rubber te winnen" },
          { en: "Playing without trumps", es: "Jugar sin triunfos", de: "Spielen ohne Trumpf", nl: "Spelen zonder troef" },
          { en: "Bridge played with elastic cards", es: "Bridge jugado con cartas elásticas", de: "Bridge mit elastischen Karten gespielt", nl: "Bridge gespeeld met elastische kaarten" }
        ],
        correct: 1,
        explanation: {
          en: "Rubber bridge is the traditional form where partnerships play until one side wins two games, completing the 'rubber.' Points are accumulated across multiple deals.",
          es: "Rubber bridge es la forma tradicional donde las parejas juegan hasta que un lado gana dos juegos, completando el 'rubber.' Los puntos se acumulan a través de múltiples repartos.",
          de: "Rubber Bridge ist die traditionelle Form, bei der Partnerschaften spielen bis eine Seite zwei Spiele gewinnt und den 'Rubber' vervollständigt. Punkte werden über mehrere Austeilungen angesammelt.",
          nl: "Rubber bridge is de traditionele vorm waarbij partnerschappen spelen totdat één kant twee spellen wint en de 'rubber' voltooit. Punten worden verzameld over meerdere delingen."
        }
      },
      {
        question: {
          en: "In Rummy variants, what is 'knocking'?",
          es: "En variantes de Rummy, ¿qué es 'tocar'?",
          de: "Was ist 'Klopfen' bei Rummy-Varianten?",
          nl: "Wat is 'kloppen' bij Rummy-varianten?"
        },
        options: [
          { en: "Discarding your last card", es: "Descartar tu última carta", de: "Deine letzte Karte ablegen", nl: "Je laatste kaart weggooien" },
          { en: "Ending round with low deadwood", es: "Terminar ronda con poco deadwood", de: "Runde mit wenig Deadwood beenden", nl: "Ronde beëindigen met weinig deadwood" },
          { en: "Asking for a new card", es: "Pedir una nueva carta", de: "Nach einer neuen Karte fragen", nl: "Om een nieuwe kaart vragen" },
          { en: "Challenging opponent's meld", es: "Desafiar la combinación del oponente", de: "Die Meldung des Gegners anfechten", nl: "De meld van de tegenstander uitdagen" }
        ],
        correct: 1,
        explanation: {
          en: "Knocking is ending the round when you have a low count of unmelded cards (deadwood), typically 10 or fewer points, by discarding and tapping the table.",
          es: "Tocar es terminar la ronda cuando tienes un recuento bajo de cartas no combinadas (deadwood), típicamente 10 o menos puntos, descartando y golpeando la mesa.",
          de: "Klopfen bedeutet die Runde zu beenden wenn man wenige nicht gemeldete Karten (Deadwood) hat, typischerweise 10 oder weniger Punkte, durch Ablegen und Tippen auf den Tisch.",
          nl: "Kloppen is de ronde beëindigen wanneer je een laag aantal niet-gemelde kaarten (deadwood) hebt, meestal 10 of minder punten, door weg te gooien en op de tafel te tikken."
        }
      },
      {
        question: {
          en: "What is 'mucking' in poker?",
          es: "¿Qué es 'mucking' en el póker?",
          de: "Was ist 'Mucking' beim Poker?",
          nl: "Wat is 'mucking' bij poker?"
        },
        options: [
          { en: "Showing your cards to opponents", es: "Mostrar tus cartas a los oponentes", de: "Deine Karten den Gegnern zeigen", nl: "Je kaarten aan tegenstanders tonen" },
          { en: "Discarding cards face-down without showing", es: "Descartar cartas boca abajo sin mostrar", de: "Karten verdeckt ablegen ohne zu zeigen", nl: "Kaarten gesloten weggooien zonder te tonen" },
          { en: "Mixing the deck poorly", es: "Mezclar el mazo mal", de: "Das Deck schlecht mischen", nl: "Het deck slecht schudden" },
          { en: "Betting all your chips", es: "Apostar todas tus fichas", de: "Alle deine Chips setzen", nl: "Al je fiches inzetten" }
        ],
        correct: 1,
        explanation: {
          en: "Mucking is folding your hand by discarding it face-down into the muck (discard pile) without revealing your cards to other players at the table.",
          es: "Mucking es retirarse descartando tu mano boca abajo en el muck (pila de descarte) sin revelar tus cartas a otros jugadores en la mesa.",
          de: "Mucking bedeutet dein Blatt zu folden indem man es verdeckt in den Muck (Ablagestapel) legt ohne die Karten anderen Spielern zu zeigen.",
          nl: "Mucking is je hand passen door deze gesloten in de muck (aflegstapel) te gooien zonder je kaarten aan andere spelers te tonen."
        }
      },
      {
        question: {
          en: "In Whist, what does 'following suit' mean?",
          es: "En Whist, ¿qué significa 'seguir el palo'?",
          de: "Was bedeutet 'Farbe bedienen' beim Whist?",
          nl: "Wat betekent 'kleur volgen' bij Whist?"
        },
        options: [
          { en: "Playing same rank as previous card", es: "Jugar el mismo rango que la carta anterior", de: "Den gleichen Rang wie die vorherige Karte spielen", nl: "Dezelfde rang spelen als de vorige kaart" },
          { en: "Playing same suit as lead card", es: "Jugar el mismo palo que la carta líder", de: "Die gleiche Farbe wie die Führkarte spielen", nl: "Dezelfde kleur spelen als de leidkaart" },
          { en: "Copying partner's play", es: "Copiar la jugada del compañero", de: "Das Spiel des Partners kopieren", nl: "De speelwijze van je partner kopiëren" },
          { en: "Playing trump when possible", es: "Jugar triunfo cuando sea posible", de: "Trumpf spielen wenn möglich", nl: "Troef spelen wanneer mogelijk" }
        ],
        correct: 1,
        explanation: {
          en: "Following suit means playing a card of the same suit as the card that led the trick. In most trick-taking games, you must follow suit if possible.",
          es: "Seguir el palo significa jugar una carta del mismo palo que la carta que lideró la baza. En la mayoría de juegos de bazas, debes seguir el palo si es posible.",
          de: "Farbe bedienen bedeutet eine Karte der gleichen Farbe zu spielen wie die Karte die den Stich anführte. In den meisten Stichspielen muss man Farbe bedienen wenn möglich.",
          nl: "Kleur volgen betekent een kaart van dezelfde kleur spelen als de kaart die de slag leidde. In de meeste slagenspellen moet je kleur volgen indien mogelijk."
        }
      },
      {
        question: {
          en: "What is the 'Immortal Hand' in poker?",
          es: "¿Qué es la 'Mano Inmortal' en el póker?",
          de: "Was ist die 'Unsterbliche Hand' beim Poker?",
          nl: "Wat is de 'Onsterfelijke Hand' bij poker?"
        },
        options: [
          { en: "Royal Flush", es: "Escalera Real", de: "Royal Flush", nl: "Royal Flush" },
          { en: "Four Aces", es: "Cuatro Ases", de: "Vier Asse", nl: "Vier Azen" },
          { en: "Dead Man's Hand (Aces and Eights)", es: "Mano del Muerto (Ases y Ochos)", de: "Tote Manns Hand (Asse und Achten)", nl: "Dode Mans Hand (Azen en Achten)" },
          { en: "Any unbeatable hand", es: "Cualquier mano imbatible", de: "Jedes unschlagbare Blatt", nl: "Elke onverslaanbare hand" }
        ],
        correct: 2,
        explanation: {
          en: "The Immortal Hand refers to the 'Dead Man's Hand' - two pair of Aces and Eights - allegedly held by Wild Bill Hickok when he was shot in 1876.",
          es: "La Mano Inmortal se refiere a la 'Mano del Muerto' - dos pares de Ases y Ochos - supuestamente sostenida por Wild Bill Hickok cuando le dispararon en 1876.",
          de: "Die Unsterbliche Hand bezieht sich auf die 'Tote Manns Hand' - zwei Paare Asse und Achten - angeblich gehalten von Wild Bill Hickok als er 1876 erschossen wurde.",
          nl: "De Onsterfelijke Hand verwijst naar de 'Dode Mans Hand' - twee paar Azen en Achten - naar verluidt gehouden door Wild Bill Hickok toen hij in 1876 werd neergeschoten."
        }
      },
      {
        question: {
          en: "In 500 (Five Hundred), what is the minimum bid?",
          es: "En 500 (Quinientos), ¿cuál es la puja mínima?",
          de: "Was ist das Mindestgebot beim 500 (Fünfhundert)?",
          nl: "Wat is het minimumbod bij 500 (Vijfhonderd)?"
        },
        options: [
          { en: "5 tricks", es: "5 bazas", de: "5 Stiche", nl: "5 slagen" },
          { en: "6 tricks", es: "6 bazas", de: "6 Stiche", nl: "6 slagen" },
          { en: "7 tricks", es: "7 bazas", de: "7 Stiche", nl: "7 slagen" },
          { en: "10 tricks", es: "10 bazas", de: "10 Stiche", nl: "10 slagen" }
        ],
        correct: 1,
        explanation: {
          en: "In Five Hundred, the minimum bid is 6 tricks (out of 10 total). Bids increase in value based on the number of tricks and the trump suit chosen.",
          es: "En Quinientos, la puja mínima es 6 bazas (de 10 totales). Las pujas aumentan en valor según el número de bazas y el palo de triunfo elegido.",
          de: "Beim Fünfhundert ist das Mindestgebot 6 Stiche (von insgesamt 10). Gebote steigen im Wert basierend auf der Anzahl der Stiche und der gewählten Trumpffarbe.",
          nl: "Bij Vijfhonderd is het minimumbod 6 slagen (van in totaal 10). Biedingen stijgen in waarde op basis van het aantal slagen en de gekozen troefkleur."
        }
      },
      {
        question: {
          en: "What distinguishes 'Chicago' scoring in Bridge?",
          es: "¿Qué distingue la puntuación 'Chicago' en Bridge?",
          de: "Was unterscheidet die 'Chicago'-Wertung beim Bridge?",
          nl: "Wat onderscheidt 'Chicago' scoring bij Bridge?"
        },
        options: [
          { en: "Exactly 4 deals per rubber", es: "Exactamente 4 repartos por rubber", de: "Genau 4 Austeilungen pro Rubber", nl: "Precies 4 delingen per rubber" },
          { en: "Double points for all contracts", es: "Puntos dobles para todos los contratos", de: "Doppelte Punkte für alle Kontrakte", nl: "Dubbele punten voor alle contracten" },
          { en: "No vulnerability rules", es: "Sin reglas de vulnerabilidad", de: "Keine Verwundbarkeitsregeln", nl: "Geen kwetsbaarheidregels" },
          { en: "Only 3 players needed", es: "Solo se necesitan 3 jugadores", de: "Nur 3 Spieler benötigt", nl: "Slechts 3 spelers nodig" }
        ],
        correct: 0,
        explanation: {
          en: "Chicago (or Four-Deal) Bridge consists of exactly 4 deals with pre-determined vulnerability, making games more predictable in length than rubber bridge.",
          es: "Chicago (o Bridge de Cuatro Repartos) consiste en exactamente 4 repartos con vulnerabilidad predeterminada, haciendo que los juegos sean más predecibles en duración que rubber bridge.",
          de: "Chicago (oder Vier-Austeilungs) Bridge besteht aus genau 4 Austeilungen mit vorbestimmter Verwundbarkeit, was Spiele berechenbarer in der Länge macht als Rubber Bridge.",
          nl: "Chicago (of Vier-Delingen) Bridge bestaat uit precies 4 delingen met vooraf bepaalde kwetsbaarheid, waardoor spellen voorspelbaarder in lengte zijn dan rubber bridge."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level4;
  } else if (typeof window !== 'undefined') {
    window.level4 = level4;
  }
})();
