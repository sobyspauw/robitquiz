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
      },
      {
        question: {
          en: "In Texas Hold'em, what is 'position' and why is it important?",
          es: "En Texas Hold'em, ¿qué es la 'posición' y por qué es importante?",
          de: "Was ist 'Position' beim Texas Hold'em und warum ist sie wichtig?",
          nl: "Wat is 'positie' bij Texas Hold'em en waarom is het belangrijk?"
        },
        options: [
          { en: "Your seat relative to dealer; acts last has advantage", es: "Tu asiento relativo al repartidor; actuar último tiene ventaja", de: "Dein Sitz relativ zum Geber; zuletzt handeln hat Vorteil", nl: "Je zitplaats relatief tot deler; als laatste handelen heeft voordeel" },
          { en: "The rank of your hand", es: "El rango de tu mano", de: "Der Rang deines Blatts", nl: "De rang van je hand" },
          { en: "Where chips are placed on table", es: "Donde se colocan las fichas en la mesa", de: "Wo Chips auf dem Tisch platziert werden", nl: "Waar fiches op de tafel worden geplaatst" },
          { en: "Your standing in tournament", es: "Tu posición en el torneo", de: "Deine Platzierung im Turnier", nl: "Je positie in het toernooi" }
        ],
        correct: 0,
        explanation: {
          en: "Position refers to where you sit relative to the dealer button. Late position (acting last) is advantageous because you see opponents' actions before making your decision.",
          es: "La posición se refiere a dónde te sientas en relación con el botón del repartidor. La posición tardía (actuar último) es ventajosa porque ves las acciones de los oponentes antes de tomar tu decisión.",
          de: "Position bezieht sich darauf wo du relativ zum Dealer-Button sitzt. Späte Position (zuletzt handeln) ist vorteilhaft weil du die Aktionen der Gegner siehst bevor du entscheidest.",
          nl: "Positie verwijst naar waar je zit ten opzichte van de dealer button. Late positie (als laatste handelen) is voordelig omdat je de acties van tegenstanders ziet voordat je beslist."
        }
      },
      {
        question: {
          en: "What is 'squeeze play' in Bridge?",
          es: "¿Qué es 'squeeze play' en Bridge?",
          de: "Was ist 'Squeeze Play' beim Bridge?",
          nl: "Wat is 'squeeze play' bij Bridge?"
        },
        options: [
          { en: "Forcing opponent to discard winner", es: "Forzar al oponente a descartar ganador", de: "Gegner zwingen Gewinner abzulegen", nl: "Tegenstander dwingen winnaar weg te gooien" },
          { en: "Bidding very aggressively", es: "Pujar muy agresivamente", de: "Sehr aggressiv bieten", nl: "Zeer agressief bieden" },
          { en: "Playing cards quickly", es: "Jugar cartas rápidamente", de: "Karten schnell spielen", nl: "Kaarten snel spelen" },
          { en: "Holding only one suit", es: "Tener solo un palo", de: "Nur eine Farbe halten", nl: "Slechts één kleur hebben" }
        ],
        correct: 0,
        explanation: {
          en: "A squeeze play forces an opponent to discard a potential winner because they cannot keep guards in all suits. It's an advanced endgame technique in Bridge.",
          es: "Un squeeze play fuerza a un oponente a descartar un potencial ganador porque no pueden mantener guardias en todos los palos. Es una técnica avanzada de final de juego en Bridge.",
          de: "Ein Squeeze Play zwingt einen Gegner eine potenzielle Gewinnkarte abzulegen weil sie nicht in allen Farben Wächter halten können. Es ist eine fortgeschrittene Endspiel-Technik beim Bridge.",
          nl: "Een squeeze play dwingt een tegenstander een potentiële winnaar weg te gooien omdat ze niet in alle kleuren bewakers kunnen houden. Het is een geavanceerde eindspel techniek bij Bridge."
        }
      },
      {
        question: {
          en: "In Gin Rummy, what is 'going gin'?",
          es: "En Gin Rummy, ¿qué es 'hacer gin'?",
          de: "Was ist 'Gin machen' beim Gin Rummy?",
          nl: "Wat is 'gin gaan' bij Gin Rummy?"
        },
        options: [
          { en: "Melding all cards with zero deadwood", es: "Combinar todas las cartas con cero deadwood", de: "Alle Karten melden mit null Deadwood", nl: "Alle kaarten melden met nul deadwood" },
          { en: "Knocking with 10 points", es: "Tocar con 10 puntos", de: "Mit 10 Punkten klopfen", nl: "Kloppen met 10 punten" },
          { en: "Winning three games in a row", es: "Ganar tres juegos seguidos", de: "Drei Spiele hintereinander gewinnen", nl: "Drie spellen op rij winnen" },
          { en: "Discarding all face cards", es: "Descartar todas las figuras", de: "Alle Bildkarten ablegen", nl: "Alle plaatjeskaarten weggooien" }
        ],
        correct: 0,
        explanation: {
          en: "Going gin means melding all 10 or 11 cards in your hand with zero deadwood remaining. This scores bonus points and your opponent cannot lay off cards.",
          es: "Hacer gin significa combinar todas las 10 u 11 cartas en tu mano sin deadwood restante. Esto otorga puntos de bonificación y tu oponente no puede descartar cartas.",
          de: "Gin machen bedeutet alle 10 oder 11 Karten in deiner Hand zu melden ohne verbleibendes Deadwood. Dies bringt Bonuspunkte und der Gegner kann keine Karten ablegen.",
          nl: "Gin gaan betekent alle 10 of 11 kaarten in je hand melden met nul deadwood over. Dit scoort bonuspunten en je tegenstander kan geen kaarten afleggen."
        }
      },
      {
        question: {
          en: "What is 'pot limit' in poker betting structures?",
          es: "¿Qué es 'límite de bote' en estructuras de apuesta de póker?",
          de: "Was ist 'Pot Limit' bei Poker-Einsatzstrukturen?",
          nl: "Wat is 'pot limit' bij poker inzetstructuren?"
        },
        options: [
          { en: "Maximum bet equals current pot size", es: "Apuesta máxima igual al tamaño actual del bote", de: "Maximaleinsatz entspricht aktueller Pot-Größe", nl: "Maximale inzet gelijk aan huidige potgrootte" },
          { en: "Fixed betting amounts only", es: "Solo montos de apuesta fijos", de: "Nur feste Einsatzbeträge", nl: "Alleen vaste inzetbedragen" },
          { en: "No maximum bet limit", es: "Sin límite máximo de apuesta", de: "Keine maximale Einsatzgrenze", nl: "Geen maximale inzetlimiet" },
          { en: "Minimum bet of 10 chips", es: "Apuesta mínima de 10 fichas", de: "Mindesteinsatz von 10 Chips", nl: "Minimale inzet van 10 fiches" }
        ],
        correct: 0,
        explanation: {
          en: "Pot limit means the maximum bet or raise is equal to the current size of the pot. It's used in games like Pot Limit Omaha (PLO).",
          es: "Límite de bote significa que la apuesta o subida máxima es igual al tamaño actual del bote. Se usa en juegos como Pot Limit Omaha (PLO).",
          de: "Pot Limit bedeutet der maximale Einsatz oder Erhöhung entspricht der aktuellen Pot-Größe. Es wird in Spielen wie Pot Limit Omaha (PLO) verwendet.",
          nl: "Pot limit betekent dat de maximale inzet of verhoging gelijk is aan de huidige potgrootte. Het wordt gebruikt in spellen zoals Pot Limit Omaha (PLO)."
        }
      },
      {
        question: {
          en: "In Skat, what is the 'skat' itself?",
          es: "En Skat, ¿qué es el 'skat' en sí?",
          de: "Was ist der 'Skat' selbst beim Skat?",
          nl: "Wat is de 'skat' zelf bij Skat?"
        },
        options: [
          { en: "Two cards set aside before bidding", es: "Dos cartas apartadas antes de la puja", de: "Zwei Karten vor dem Reizen beiseite gelegt", nl: "Twee kaarten opzij gelegd voor het bieden" },
          { en: "The trump suit", es: "El palo de triunfo", de: "Die Trumpffarbe", nl: "De troefkleur" },
          { en: "The winning player", es: "El jugador ganador", de: "Der gewinnende Spieler", nl: "De winnende speler" },
          { en: "The score sheet", es: "La hoja de puntuación", de: "Das Punkteblatt", nl: "Het scorebord" }
        ],
        correct: 0,
        explanation: {
          en: "The skat consists of two cards dealt face-down that are set aside. The winner of bidding can pick them up and discard two cards before declaring game type.",
          es: "El skat consiste en dos cartas repartidas boca abajo que se apartan. El ganador de la puja puede recogerlas y descartar dos cartas antes de declarar el tipo de juego.",
          de: "Der Skat besteht aus zwei verdeckt ausgeteilten Karten die beiseite gelegt werden. Der Gewinner des Reizens kann sie aufnehmen und zwei Karten ablegen bevor er die Spielart erklärt.",
          nl: "De skat bestaat uit twee gesloten gedeelde kaarten die opzij worden gelegd. De winnaar van het bieden kan ze oppakken en twee kaarten weggooien voordat hij het speltype verklaart."
        }
      },
      {
        question: {
          en: "What is 'slow playing' in poker?",
          es: "¿Qué es 'jugar lento' en el póker?",
          de: "Was ist 'Slow Playing' beim Poker?",
          nl: "Wat is 'slow playing' bij poker?"
        },
        options: [
          { en: "Playing strong hand weakly to trap opponents", es: "Jugar mano fuerte débilmente para atrapar oponentes", de: "Starkes Blatt schwach spielen um Gegner zu fangen", nl: "Sterke hand zwak spelen om tegenstanders te vangen" },
          { en: "Taking too much time to decide", es: "Tomar demasiado tiempo para decidir", de: "Zu viel Zeit zum Entscheiden nehmen", nl: "Te veel tijd nemen om te beslissen" },
          { en: "Playing conservatively all game", es: "Jugar conservadoramente todo el juego", de: "Das ganze Spiel konservativ spielen", nl: "Het hele spel conservatief spelen" },
          { en: "Folding frequently", es: "Retirarse frecuentemente", de: "Häufig folden", nl: "Vaak passen" }
        ],
        correct: 0,
        explanation: {
          en: "Slow playing (or sandbagging) is playing a very strong hand passively to disguise its strength and induce opponents to bet more, setting up a trap.",
          es: "Jugar lento (o sandbagging) es jugar una mano muy fuerte pasivamente para disfrazar su fuerza e inducir a los oponentes a apostar más, estableciendo una trampa.",
          de: "Slow Playing (oder Sandbagging) ist ein sehr starkes Blatt passiv zu spielen um dessen Stärke zu verschleiern und Gegner zu mehr Einsätzen zu verleiten und eine Falle zu stellen.",
          nl: "Slow playing (of sandbagging) is een zeer sterke hand passief spelen om de sterkte te verhullen en tegenstanders te verleiden meer in te zetten, een val opzetten."
        }
      },
      {
        question: {
          en: "In Bridge, what is 'Stayman convention'?",
          es: "En Bridge, ¿qué es la 'convención Stayman'?",
          de: "Was ist die 'Stayman-Konvention' beim Bridge?",
          nl: "Wat is de 'Stayman conventie' bij Bridge?"
        },
        options: [
          { en: "2♣ bid to ask for 4-card major after 1NT", es: "Puja de 2♣ para preguntar por mayor de 4 cartas después de 1NT", de: "2♣-Gebot um nach 4-Karten-Major nach 1NT zu fragen", nl: "2♣ bod om te vragen naar 4-kaart hoog na 1NT" },
          { en: "Leading trump immediately", es: "Liderar triunfo inmediatamente", de: "Sofort Trumpf ausspielen", nl: "Direct troef spelen" },
          { en: "Doubling opponent's bid", es: "Doblar la puja del oponente", de: "Gebot des Gegners verdoppeln", nl: "Bod van tegenstander verdubbelen" },
          { en: "Passing on all bids", es: "Pasar en todas las pujas", de: "Bei allen Geboten passen", nl: "Passen bij alle biedingen" }
        ],
        correct: 0,
        explanation: {
          en: "Stayman is a bidding convention where 2♣ is bid over partner's 1NT opening to ask if they hold a 4-card major suit (hearts or spades).",
          es: "Stayman es una convención de puja donde se puja 2♣ sobre la apertura 1NT del compañero para preguntar si tienen un palo mayor de 4 cartas (corazones o picas).",
          de: "Stayman ist eine Bietkonvention wo 2♣ über die 1NT-Eröffnung des Partners geboten wird um zu fragen ob sie einen 4-Karten-Major (Herz oder Pik) haben.",
          nl: "Stayman is een biedconventie waarbij 2♣ wordt geboden over partners 1NT opening om te vragen of ze een 4-kaart hoog (harten of schoppen) hebben."
        }
      },
      {
        question: {
          en: "What is 'variance' in poker?",
          es: "¿Qué es la 'varianza' en el póker?",
          de: "Was ist 'Varianz' beim Poker?",
          nl: "Wat is 'variantie' bij poker?"
        },
        options: [
          { en: "Statistical fluctuation in results", es: "Fluctuación estadística en resultados", de: "Statistische Schwankung in Ergebnissen", nl: "Statistische fluctuatie in resultaten" },
          { en: "Difference between players' skills", es: "Diferencia entre habilidades de jugadores", de: "Unterschied zwischen Spielerfähigkeiten", nl: "Verschil tussen vaardigheden van spelers" },
          { en: "Number of hands played", es: "Número de manos jugadas", de: "Anzahl gespielter Blätter", nl: "Aantal gespeelde handen" },
          { en: "Types of poker games", es: "Tipos de juegos de póker", de: "Arten von Pokerspielen", nl: "Soorten pokerspellen" }
        ],
        correct: 0,
        explanation: {
          en: "Variance refers to the statistical fluctuation in results due to luck. High variance means results can swing dramatically despite good play.",
          es: "La varianza se refiere a la fluctuación estadística en los resultados debido a la suerte. Alta varianza significa que los resultados pueden oscilar dramáticamente a pesar del buen juego.",
          de: "Varianz bezieht sich auf die statistische Schwankung in Ergebnissen aufgrund von Glück. Hohe Varianz bedeutet dass Ergebnisse trotz gutem Spiel dramatisch schwanken können.",
          nl: "Variantie verwijst naar de statistische fluctuatie in resultaten door geluk. Hoge variantie betekent dat resultaten dramatisch kunnen schommelen ondanks goed spel."
        }
      },
      {
        question: {
          en: "In Tarot card games, what are the 'Fool' (Excuse) card's special properties?",
          es: "En juegos de cartas del Tarot, ¿cuáles son las propiedades especiales de la carta 'Loco' (Excusa)?",
          de: "Was sind die besonderen Eigenschaften der 'Narr' (Entschuldigung) Karte in Tarot-Kartenspielen?",
          nl: "Wat zijn de speciale eigenschappen van de 'Dwaas' (Excuse) kaart in Tarot kaartspellen?"
        },
        options: [
          { en: "Can be played anytime, usually retained by player", es: "Puede jugarse en cualquier momento, generalmente retenida por el jugador", de: "Kann jederzeit gespielt werden, normalerweise vom Spieler behalten", nl: "Kan altijd gespeeld worden, meestal behouden door speler" },
          { en: "Always wins the trick", es: "Siempre gana la baza", de: "Gewinnt immer den Stich", nl: "Wint altijd de slag" },
          { en: "Doubles the point value", es: "Duplica el valor de puntos", de: "Verdoppelt den Punktwert", nl: "Verdubbelt de puntwaarde" },
          { en: "Must be played first", es: "Debe jugarse primero", de: "Muss zuerst gespielt werden", nl: "Moet eerst gespeeld worden" }
        ],
        correct: 0,
        explanation: {
          en: "The Fool (Excuse) can be played at any time regardless of suit and is usually retained by the player who played it, not contributing to winning the trick.",
          es: "El Loco (Excusa) puede jugarse en cualquier momento independientemente del palo y generalmente es retenido por el jugador que lo jugó, sin contribuir a ganar la baza.",
          de: "Der Narr (Entschuldigung) kann jederzeit unabhängig von der Farbe gespielt werden und wird normalerweise vom Spieler der ihn spielte behalten ohne zum Gewinn des Stichs beizutragen.",
          nl: "De Dwaas (Excuse) kan altijd gespeeld worden ongeacht de kleur en wordt meestal behouden door de speler die hem speelde zonder bij te dragen aan het winnen van de slag."
        }
      },
      {
        question: {
          en: "What is 'expected value' (EV) in poker decision-making?",
          es: "¿Qué es el 'valor esperado' (EV) en la toma de decisiones del póker?",
          de: "Was ist der 'Erwartungswert' (EV) bei Poker-Entscheidungen?",
          nl: "Wat is 'verwachte waarde' (EV) bij poker besluitvorming?"
        },
        options: [
          { en: "Average profit/loss of a decision over time", es: "Ganancia/pérdida promedio de una decisión con el tiempo", de: "Durchschnittlicher Gewinn/Verlust einer Entscheidung über Zeit", nl: "Gemiddelde winst/verlies van een beslissing over tijd" },
          { en: "The value of your current hand", es: "El valor de tu mano actual", de: "Der Wert deines aktuellen Blatts", nl: "De waarde van je huidige hand" },
          { en: "How much opponents expect you to bet", es: "Cuánto esperan los oponentes que apuestes", de: "Wie viel Gegner erwarten dass du setzt", nl: "Hoeveel tegenstanders verwachten dat je inzet" },
          { en: "Minimum bet required", es: "Apuesta mínima requerida", de: "Erforderlicher Mindesteinsatz", nl: "Vereiste minimale inzet" }
        ],
        correct: 0,
        explanation: {
          en: "Expected value is the average amount you can expect to win or lose on a particular decision if repeated many times, considering all possible outcomes and probabilities.",
          es: "El valor esperado es la cantidad promedio que puedes esperar ganar o perder en una decisión particular si se repite muchas veces, considerando todos los resultados posibles y probabilidades.",
          de: "Der Erwartungswert ist der durchschnittliche Betrag den du bei einer bestimmten Entscheidung erwarten kannst zu gewinnen oder verlieren wenn sie viele Male wiederholt wird unter Berücksichtigung aller möglichen Ergebnisse und Wahrscheinlichkeiten.",
          nl: "Verwachte waarde is het gemiddelde bedrag dat je kunt verwachten te winnen of verliezen bij een bepaalde beslissing indien vele keren herhaald, alle mogelijke uitkomsten en kansen in overweging nemend."
        }
      },
      {
        question: {
          en: "In Oh Hell (Oh Pshaw), what is unique about bidding?",
          es: "En Oh Hell (Oh Pshaw), ¿qué es único sobre la puja?",
          de: "Was ist einzigartig am Bieten beim Oh Hell (Oh Pshaw)?",
          nl: "Wat is uniek aan het bieden bij Oh Hell (Oh Pshaw)?"
        },
        options: [
          { en: "Total bids cannot equal number of tricks available", es: "Las pujas totales no pueden igualar el número de bazas disponibles", de: "Gesamtgebote können nicht der Anzahl verfügbarer Stiche entsprechen", nl: "Totale biedingen kunnen niet gelijk zijn aan aantal beschikbare slagen" },
          { en: "Everyone must bid the same amount", es: "Todos deben pujar la misma cantidad", de: "Alle müssen den gleichen Betrag bieten", nl: "Iedereen moet hetzelfde bedrag bieden" },
          { en: "Bidding is done with cards", es: "La puja se hace con cartas", de: "Bieten erfolgt mit Karten", nl: "Bieden gebeurt met kaarten" },
          { en: "Only the dealer bids", es: "Solo el repartidor puja", de: "Nur der Geber bietet", nl: "Alleen de deler biedt" }
        ],
        correct: 0,
        explanation: {
          en: "In Oh Hell, the dealer bids last and cannot make a bid that would make the total bids equal the number of tricks, ensuring someone must fail their bid.",
          es: "En Oh Hell, el repartidor puja último y no puede hacer una puja que haría que las pujas totales igualen el número de bazas, asegurando que alguien debe fallar su puja.",
          de: "Beim Oh Hell bietet der Geber zuletzt und darf kein Gebot abgeben das die Gesamtgebote der Anzahl der Stiche entsprechen lassen würde, wodurch sichergestellt wird dass jemand sein Gebot verfehlen muss.",
          nl: "Bij Oh Hell biedt de deler als laatste en mag geen bod doen dat de totale biedingen gelijk zou maken aan het aantal slagen, wat ervoor zorgt dat iemand zijn bod moet missen."
        }
      },
      {
        question: {
          en: "What is 'ICM' in poker tournaments?",
          es: "¿Qué es 'ICM' en torneos de póker?",
          de: "Was ist 'ICM' bei Poker-Turnieren?",
          nl: "Wat is 'ICM' bij poker toernooien?"
        },
        options: [
          { en: "Independent Chip Model for calculating tournament equity", es: "Modelo Independiente de Fichas para calcular equidad del torneo", de: "Unabhängiges Chip-Modell zur Berechnung von Turnier-Equity", nl: "Onafhankelijk Fiche Model voor berekening van toernooi equity" },
          { en: "International Card Masters organization", es: "Organización International Card Masters", de: "International Card Masters Organisation", nl: "International Card Masters organisatie" },
          { en: "Initial chip multiplier", es: "Multiplicador de fichas inicial", de: "Anfänglicher Chip-Multiplikator", nl: "Initiële fiche vermenigvuldiger" },
          { en: "In-the-money cutoff", es: "Corte en el dinero", de: "In-the-Money Grenze", nl: "In-het-geld afsnijpunt" }
        ],
        correct: 0,
        explanation: {
          en: "The Independent Chip Model calculates a player's tournament equity based on their chip stack relative to payout structure, crucial for final table decisions.",
          es: "El Modelo Independiente de Fichas calcula la equidad de torneo de un jugador basándose en su pila de fichas relativa a la estructura de pagos, crucial para decisiones de mesa final.",
          de: "Das Unabhängige Chip-Modell berechnet die Turnier-Equity eines Spielers basierend auf seinem Chip-Stack relativ zur Auszahlungsstruktur, entscheidend für Final-Table-Entscheidungen.",
          nl: "Het Onafhankelijke Fiche Model berekent de toernooi equity van een speler gebaseerd op hun fiche stapel relatief aan de uitbetalingsstructuur, cruciaal voor final table beslissingen."
        }
      },
      {
        question: {
          en: "In Sheepshead, what makes it unique among trick-taking games?",
          es: "En Sheepshead, ¿qué lo hace único entre los juegos de bazas?",
          de: "Was macht Sheepshead einzigartig unter Stichspielen?",
          nl: "Wat maakt Sheepshead uniek onder slagenspellen?"
        },
        options: [
          { en: "All Queens, Jacks, and Diamonds are trump", es: "Todas las Reinas, Jotas y Diamantes son triunfo", de: "Alle Damen, Buben und Karos sind Trumpf", nl: "Alle Vrouwen, Boeren en Ruiten zijn troef" },
          { en: "Trump changes each hand", es: "El triunfo cambia cada mano", de: "Trumpf wechselt jedes Blatt", nl: "Troef verandert elke hand" },
          { en: "No trump cards exist", es: "No existen cartas de triunfo", de: "Es gibt keine Trumpfkarten", nl: "Er bestaan geen troefkaarten" },
          { en: "Only face cards are trump", es: "Solo las figuras son triunfo", de: "Nur Bildkarten sind Trumpf", nl: "Alleen plaatjeskaarten zijn troef" }
        ],
        correct: 0,
        explanation: {
          en: "Sheepshead has a unique permanent trump structure where all Queens, Jacks, and the entire Diamond suit are always trump cards, ranked in a specific order.",
          es: "Sheepshead tiene una estructura de triunfo permanente única donde todas las Reinas, Jotas y todo el palo de Diamantes son siempre cartas de triunfo, clasificadas en un orden específico.",
          de: "Sheepshead hat eine einzigartige permanente Trumpfstruktur wo alle Damen, Buben und die gesamte Karo-Farbe immer Trumpfkarten sind, in einer bestimmten Reihenfolge geordnet.",
          nl: "Sheepshead heeft een unieke permanente troefstructuur waarbij alle Vrouwen, Boeren en de gehele Ruiten kleur altijd troefkaarten zijn, gerangschikt in een specifieke volgorde."
        }
      },
      {
        question: {
          en: "What does 'card counting' refer to in Blackjack?",
          es: "¿A qué se refiere 'contar cartas' en Blackjack?",
          de: "Was bedeutet 'Kartenzählen' beim Blackjack?",
          nl: "Wat betekent 'kaarten tellen' bij Blackjack?"
        },
        options: [
          { en: "Tracking ratio of high to low cards remaining", es: "Rastrear la proporción de cartas altas a bajas restantes", de: "Verhältnis hoher zu niedrigen verbleibenden Karten verfolgen", nl: "Verhouding van hoge tot lage resterende kaarten bijhouden" },
          { en: "Counting how many cards you have", es: "Contar cuántas cartas tienes", de: "Zählen wie viele Karten du hast", nl: "Tellen hoeveel kaarten je hebt" },
          { en: "Memorizing every card played", es: "Memorizar cada carta jugada", de: "Jede gespielte Karte auswendig lernen", nl: "Elke gespeelde kaart onthouden" },
          { en: "Calculating total points", es: "Calcular puntos totales", de: "Gesamtpunkte berechnen", nl: "Totale punten berekenen" }
        ],
        correct: 0,
        explanation: {
          en: "Card counting tracks the ratio of high cards (10s, face cards, Aces) to low cards remaining in the deck to determine when the player has a statistical advantage.",
          es: "Contar cartas rastrea la proporción de cartas altas (10s, figuras, Ases) a cartas bajas restantes en el mazo para determinar cuándo el jugador tiene una ventaja estadística.",
          de: "Kartenzählen verfolgt das Verhältnis hoher Karten (10en, Bildkarten, Asse) zu niedrigen Karten die im Deck verbleiben um festzustellen wann der Spieler einen statistischen Vorteil hat.",
          nl: "Kaarten tellen houdt de verhouding bij van hoge kaarten (10'en, plaatjeskaarten, Azen) tot lage kaarten die in het deck resteren om te bepalen wanneer de speler een statistisch voordeel heeft."
        }
      },
      {
        question: {
          en: "In Doppelkopf, what distinguishes it from Skat?",
          es: "En Doppelkopf, ¿qué lo distingue de Skat?",
          de: "Was unterscheidet Doppelkopf von Skat?",
          nl: "Wat onderscheidt Doppelkopf van Skat?"
        },
        options: [
          { en: "Uses double deck with all cards 9 and above twice", es: "Usa mazo doble con todas las cartas 9 y superiores dos veces", de: "Verwendet Doppeldeck mit allen Karten 9 und höher zweimal", nl: "Gebruikt dubbel deck met alle kaarten 9 en hoger tweemaal" },
          { en: "Played with only 3 players", es: "Se juega solo con 3 jugadores", de: "Nur mit 3 Spielern gespielt", nl: "Gespeeld met slechts 3 spelers" },
          { en: "No trump cards allowed", es: "No se permiten cartas de triunfo", de: "Keine Trumpfkarten erlaubt", nl: "Geen troefkaarten toegestaan" },
          { en: "Uses jokers", es: "Usa comodines", de: "Verwendet Joker", nl: "Gebruikt jokers" }
        ],
        correct: 0,
        explanation: {
          en: "Doppelkopf uses a double deck containing two of each card from 9 through Ace (48 cards total), distinguishing it from Skat's single 32-card deck.",
          es: "Doppelkopf usa un mazo doble que contiene dos de cada carta del 9 al As (48 cartas en total), distinguiéndolo del mazo único de 32 cartas de Skat.",
          de: "Doppelkopf verwendet ein Doppeldeck mit je zwei von jeder Karte von 9 bis Ass (48 Karten insgesamt), was es vom einzelnen 32-Karten-Deck des Skat unterscheidet.",
          nl: "Doppelkopf gebruikt een dubbel deck met twee van elke kaart van 9 tot Aas (48 kaarten totaal), wat het onderscheidt van Skat's enkele 32-kaarten deck."
        }
      },
      {
        question: {
          en: "What is 'table talk' in card games and why is it prohibited?",
          es: "¿Qué es 'charla de mesa' en juegos de cartas y por qué está prohibida?",
          de: "Was ist 'Tischgespräch' bei Kartenspielen und warum ist es verboten?",
          nl: "Wat is 'tafelgesprek' bij kaartspellen en waarom is het verboden?"
        },
        options: [
          { en: "Communicating about cards through speech or gestures", es: "Comunicarse sobre cartas mediante habla o gestos", de: "Über Karten durch Sprache oder Gesten kommunizieren", nl: "Communiceren over kaarten via spraak of gebaren" },
          { en: "Talking during opponent's turn", es: "Hablar durante el turno del oponente", de: "Während des Zugs des Gegners sprechen", nl: "Praten tijdens de beurt van tegenstander" },
          { en: "Discussing strategy before game", es: "Discutir estrategia antes del juego", de: "Strategie vor dem Spiel besprechen", nl: "Strategie bespreken voor het spel" },
          { en: "Chatting about unrelated topics", es: "Charlar sobre temas no relacionados", de: "Über nicht verwandte Themen plaudern", nl: "Kletsen over niet-gerelateerde onderwerpen" }
        ],
        correct: 0,
        explanation: {
          en: "Table talk is verbally or nonverbally communicating information about your cards to partners during play, prohibited because it gives unfair advantage in partnership games.",
          es: "La charla de mesa es comunicar verbal o no verbalmente información sobre tus cartas a compañeros durante el juego, prohibido porque da ventaja injusta en juegos de parejas.",
          de: "Tischgespräch ist die verbale oder nonverbale Kommunikation von Informationen über deine Karten an Partner während des Spiels, verboten weil es unfairen Vorteil in Partnerspielen gibt.",
          nl: "Tafelgesprek is verbaal of non-verbaal informatie over je kaarten communiceren aan partners tijdens het spel, verboden omdat het oneerlijk voordeel geeft in partnerschapsspellen."
        }
      },
      {
        question: {
          en: "In Bourré, what happens if you don't win any tricks?",
          es: "En Bourré, ¿qué pasa si no ganas ninguna baza?",
          de: "Was passiert beim Bourré wenn du keinen Stich gewinnst?",
          nl: "Wat gebeurt er bij Bourré als je geen enkele slag wint?"
        },
        options: [
          { en: "You're 'bourréed' and must match the pot", es: "Eres 'bourréed' y debes igualar el bote", de: "Du bist 'bourréed' und musst den Pot angleichen", nl: "Je bent 'bourréed' en moet de pot evenaren" },
          { en: "You lose 10 points", es: "Pierdes 10 puntos", de: "Du verlierst 10 Punkte", nl: "Je verliest 10 punten" },
          { en: "Nothing happens", es: "No pasa nada", de: "Nichts passiert", nl: "Er gebeurt niets" },
          { en: "You're eliminated from the round", es: "Eres eliminado de la ronda", de: "Du wirst aus der Runde eliminiert", nl: "Je wordt geëlimineerd uit de ronde" }
        ],
        correct: 0,
        explanation: {
          en: "In Bourré, if you play and fail to win any tricks, you're 'bourréed' and must match the entire pot amount as penalty, which can be very costly.",
          es: "En Bourré, si juegas y no ganas ninguna baza, eres 'bourréed' y debes igualar la cantidad completa del bote como penalización, lo cual puede ser muy costoso.",
          de: "Beim Bourré, wenn du spielst und keinen Stich gewinnst, bist du 'bourréed' und musst den gesamten Pot-Betrag als Strafe angleichen, was sehr teuer sein kann.",
          nl: "Bij Bourré, als je speelt en geen slagen wint, ben je 'bourréed' en moet je het gehele potbedrag als straf evenaren, wat zeer kostbaar kan zijn."
        }
      },
      {
        question: {
          en: "What is 'Blackwood convention' in Bridge?",
          es: "¿Qué es la 'convención Blackwood' en Bridge?",
          de: "Was ist die 'Blackwood-Konvention' beim Bridge?",
          nl: "Wat is de 'Blackwood conventie' bij Bridge?"
        },
        options: [
          { en: "4NT bid asking partner how many Aces they hold", es: "Puja de 4NT preguntando al compañero cuántos Ases tiene", de: "4NT-Gebot das Partner fragt wie viele Asse sie halten", nl: "4NT bod waarbij partner wordt gevraagd hoeveel Azen ze hebben" },
          { en: "Playing all black cards first", es: "Jugar todas las cartas negras primero", de: "Zuerst alle schwarzen Karten spielen", nl: "Alle zwarte kaarten eerst spelen" },
          { en: "Bidding only in spades and clubs", es: "Pujar solo en picas y tréboles", de: "Nur in Pik und Kreuz bieten", nl: "Alleen bieden in schoppen en klaveren" },
          { en: "Avoiding trump suits", es: "Evitar palos de triunfo", de: "Trumpffarben vermeiden", nl: "Troefkleuren vermijden" }
        ],
        correct: 0,
        explanation: {
          en: "Blackwood is a bidding convention where 4NT asks partner to show the number of Aces they hold, used to investigate slam potential before bidding it.",
          es: "Blackwood es una convención de puja donde 4NT pide al compañero mostrar el número de Ases que tiene, usado para investigar el potencial de slam antes de pujarlo.",
          de: "Blackwood ist eine Bietkonvention wo 4NT den Partner bittet die Anzahl der Asse zu zeigen die er hält, verwendet um Schlemm-Potential zu untersuchen bevor man es bietet.",
          nl: "Blackwood is een biedconventie waarbij 4NT partner vraagt het aantal Azen te tonen dat ze hebben, gebruikt om slem potentieel te onderzoeken voordat het geboden wordt."
        }
      },
      {
        question: {
          en: "In Contract Rummy, how do the contract requirements change?",
          es: "En Contract Rummy, ¿cómo cambian los requisitos del contrato?",
          de: "Wie ändern sich die Vertragsanforderungen beim Contract Rummy?",
          nl: "Hoe veranderen de contractvereisten bij Contract Rummy?"
        },
        options: [
          { en: "Different meld requirements for each of 7 rounds", es: "Diferentes requisitos de combinación para cada una de las 7 rondas", de: "Unterschiedliche Meldungsanforderungen für jede der 7 Runden", nl: "Verschillende meldvereisten voor elk van de 7 rondes" },
          { en: "Requirements stay the same all game", es: "Los requisitos permanecen iguales todo el juego", de: "Anforderungen bleiben das ganze Spiel gleich", nl: "Vereisten blijven hetzelfde het hele spel" },
          { en: "Dealer chooses requirements each round", es: "El repartidor elige los requisitos cada ronda", de: "Geber wählt Anforderungen jede Runde", nl: "Deler kiest vereisten elke ronde" },
          { en: "Based on player's current score", es: "Basado en la puntuación actual del jugador", de: "Basierend auf aktuellem Punktestand des Spielers", nl: "Gebaseerd op huidige score van speler" }
        ],
        correct: 0,
        explanation: {
          en: "Contract Rummy consists of 7 rounds, each with different specific meld requirements (like 2 sets, or 1 set and 1 run) that must be met to go out.",
          es: "Contract Rummy consiste en 7 rondas, cada una con diferentes requisitos específicos de combinación (como 2 conjuntos, o 1 conjunto y 1 escalera) que deben cumplirse para salir.",
          de: "Contract Rummy besteht aus 7 Runden, jede mit unterschiedlichen spezifischen Meldungsanforderungen (wie 2 Sätze oder 1 Satz und 1 Reihe) die erfüllt werden müssen um auszugehen.",
          nl: "Contract Rummy bestaat uit 7 rondes, elk met verschillende specifieke meldvereisten (zoals 2 sets, of 1 set en 1 reeks) die voldaan moeten worden om uit te gaan."
        }
      },
      {
        question: {
          en: "What is 'GTO' (Game Theory Optimal) strategy in poker?",
          es: "¿Qué es la estrategia 'GTO' (Óptima de Teoría de Juegos) en el póker?",
          de: "Was ist 'GTO' (Game Theory Optimal) Strategie beim Poker?",
          nl: "Wat is 'GTO' (Game Theory Optimal) strategie bij poker?"
        },
        options: [
          { en: "Unexploitable balanced strategy immune to counter-strategies", es: "Estrategia equilibrada inexplotable inmune a contraestrategias", de: "Nicht ausnutzbare ausgewogene Strategie immun gegen Gegenstrategien", nl: "Niet-uitbuitbare gebalanceerde strategie immuun voor tegenstrategieën" },
          { en: "Always playing the strongest hand", es: "Siempre jugar la mano más fuerte", de: "Immer das stärkste Blatt spielen", nl: "Altijd de sterkste hand spelen" },
          { en: "Bluffing every third hand", es: "Hacer bluff cada tercera mano", de: "Jede dritte Hand bluffen", nl: "Elke derde hand bluffen" },
          { en: "Maximizing short-term wins", es: "Maximizar ganancias a corto plazo", de: "Kurzfristige Gewinne maximieren", nl: "Kortetermijnwinsten maximaliseren" }
        ],
        correct: 0,
        explanation: {
          en: "GTO is a balanced, mathematically optimal strategy that cannot be exploited by opponents. It ensures break-even against any counter-strategy, though exploitative play may be more profitable against weak opponents.",
          es: "GTO es una estrategia equilibrada y matemáticamente óptima que no puede ser explotada por oponentes. Garantiza equilibrio contra cualquier contraestrategia, aunque el juego explotador puede ser más rentable contra oponentes débiles.",
          de: "GTO ist eine ausgewogene, mathematisch optimale Strategie die von Gegnern nicht ausgenutzt werden kann. Sie garantiert Break-Even gegen jede Gegenstrategie, obwohl ausbeutendes Spiel gegen schwache Gegner profitabler sein kann.",
          nl: "GTO is een gebalanceerde, mathematisch optimale strategie die niet door tegenstanders uitgebuit kan worden. Het garandeert break-even tegen elke tegenstrategie, hoewel uitbuitend spel winstgevender kan zijn tegen zwakke tegenstanders."
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
