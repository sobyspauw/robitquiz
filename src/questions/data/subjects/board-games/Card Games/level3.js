// Quiz Template - Level 3: Bord spelletjes - Card Games
(function() {
  const level3 = {
    name: {
      en: "Card Games - Intermediate",
      es: "Juegos de Cartas - Intermedio",
      de: "Kartenspiele - Fortgeschritten",
      nl: "Kaartspellen - Gemiddeld"
    },
    questions: [
      {
        question: {
          en: "In Poker, what is a 'flush'?",
          es: "En Póker, ¿qué es un 'color'?",
          de: "Was ist ein 'Flush' im Poker?",
          nl: "Wat is een 'flush' in Poker?"
        },
        options: [
          { en: "Five cards of the same suit", es: "Cinco cartas del mismo palo", de: "Fünf Karten derselben Farbe", nl: "Vijf kaarten van hetzelfde pak" },
          { en: "Five sequential cards", es: "Cinco cartas secuenciales", de: "Fünf aufeinanderfolgende Karten", nl: "Vijf opeenvolgende kaarten" },
          { en: "Four of a kind", es: "Cuatro iguales", de: "Vier Gleiche", nl: "Vier dezelfde" },
          { en: "Three pairs", es: "Tres pares", de: "Drei Paare", nl: "Drie paren" }
        ],
        correct: 0,
        explanation: {
          en: "A flush is five cards of the same suit, regardless of their rank.",
          es: "Un color es cinco cartas del mismo palo, independientemente de su rango.",
          de: "Ein Flush besteht aus fünf Karten derselben Farbe, unabhängig von ihrem Rang.",
          nl: "Een flush is vijf kaarten van hetzelfde pak, ongeacht hun rang."
        }
      },
      {
        question: {
          en: "What does 'trump' mean in card games?",
          es: "¿Qué significa 'triunfo' en juegos de cartas?",
          de: "Was bedeutet 'Trumpf' in Kartenspielen?",
          nl: "Wat betekent 'troef' in kaartspellen?"
        },
        options: [
          { en: "A suit that beats all other suits", es: "Un palo que vence a todos los demás palos", de: "Eine Farbe, die alle anderen Farben schlägt", nl: "Een pak dat alle andere pakken verslaat" },
          { en: "The highest card", es: "La carta más alta", de: "Die höchste Karte", nl: "De hoogste kaart" },
          { en: "A wild card", es: "Una carta comodín", de: "Eine Jokerkarte", nl: "Een joker" },
          { en: "The dealer's card", es: "La carta del repartidor", de: "Die Karte des Gebers", nl: "De kaart van de deler" }
        ],
        correct: 0,
        explanation: {
          en: "Trump is a suit that is designated to outrank all other suits for that particular hand or game.",
          es: "El triunfo es un palo que está designado para superar a todos los demás palos para esa mano o juego en particular.",
          de: "Trumpf ist eine Farbe, die dazu bestimmt ist, alle anderen Farben für diese bestimmte Hand oder dieses Spiel zu übertrumpfen.",
          nl: "Troef is een pak dat is aangewezen om alle andere pakken te overtroeven voor die specifieke hand of dat spel."
        }
      },
      {
        question: {
          en: "In Bridge, what are the four suits ranked from highest to lowest?",
          es: "En Bridge, ¿cuáles son los cuatro palos clasificados de mayor a menor?",
          de: "Welche vier Farben sind im Bridge von höchster bis niedrigster Rangfolge?",
          nl: "Wat zijn in Bridge de vier pakken gerangschikt van hoogste naar laagste?"
        },
        options: [
          { en: "Spades, Hearts, Diamonds, Clubs", es: "Picas, Corazones, Diamantes, Tréboles", de: "Pik, Herz, Karo, Kreuz", nl: "Schoppen, Harten, Ruiten, Klaveren" },
          { en: "Hearts, Spades, Diamonds, Clubs", es: "Corazones, Picas, Diamantes, Tréboles", de: "Herz, Pik, Karo, Kreuz", nl: "Harten, Schoppen, Ruiten, Klaveren" },
          { en: "Clubs, Diamonds, Hearts, Spades", es: "Tréboles, Diamantes, Corazones, Picas", de: "Kreuz, Karo, Herz, Pik", nl: "Klaveren, Ruiten, Harten, Schoppen" },
          { en: "All suits are equal", es: "Todos los palos son iguales", de: "Alle Farben sind gleich", nl: "Alle pakken zijn gelijk" }
        ],
        correct: 0,
        explanation: {
          en: "In Bridge, the suits are ranked: Spades (highest), Hearts, Diamonds, Clubs (lowest). This ranking matters during bidding.",
          es: "En Bridge, los palos se clasifican: Picas (más alto), Corazones, Diamantes, Tréboles (más bajo). Esta clasificación importa durante las apuestas.",
          de: "Im Bridge sind die Farben geordnet: Pik (höchste), Herz, Karo, Kreuz (niedrigste). Diese Rangfolge ist wichtig beim Reizen.",
          nl: "In Bridge zijn de pakken gerangschikt: Schoppen (hoogste), Harten, Ruiten, Klaveren (laagste). Deze rangschikking is belangrijk tijdens het bieden."
        }
      },
      { question: { en: "What is a 'straight' in Poker?", es: "¿Qué es una 'escalera' en Póker?", de: "Was ist eine 'Straße' im Poker?", nl: "Wat is een 'straat' in Poker?" }, options: [{ en: "Five sequential cards", es: "Cinco cartas secuenciales", de: "Fünf aufeinanderfolgende Karten", nl: "Vijf opeenvolgende kaarten" }, { en: "Five same suit", es: "Cinco mismo palo", de: "Fünf gleiche Farbe", nl: "Vijf hetzelfde pak" }, { en: "Four of a kind", es: "Cuatro iguales", de: "Vier Gleiche", nl: "Vier dezelfde" }, { en: "Three pairs", es: "Tres pares", de: "Drei Paare", nl: "Drie paren" }], correct: 0, explanation: { en: "A straight is five cards in sequence, regardless of suit.", es: "Una escalera son cinco cartas en secuencia.", de: "Eine Straße sind fünf aufeinanderfolgende Karten.", nl: "Een straat is vijf opeenvolgende kaarten." }},
      { question: { en: "In Blackjack, what value does an Ace have?", es: "En Blackjack, ¿qué valor tiene un As?", de: "Welchen Wert hat ein Ass im Blackjack?", nl: "Welke waarde heeft een Aas in Blackjack?" }, options: [{ en: "1 or 11", es: "1 u 11", de: "1 oder 11", nl: "1 of 11" }, { en: "Always 1", es: "Siempre 1", de: "Immer 1", nl: "Altijd 1" }, { en: "Always 11", es: "Siempre 11", de: "Immer 11", nl: "Altijd 11" }, { en: "10", es: "10", de: "10", nl: "10" }], correct: 0, explanation: { en: "An Ace can count as 1 or 11.", es: "Un As puede contar como 1 u 11.", de: "Ein Ass kann als 1 oder 11 zählen.", nl: "Een Aas kan tellen als 1 of 11." }},
      { question: { en: "What is a 'full house' in Poker?", es: "¿Qué es un 'full' en Póker?", de: "Was ist ein 'Full House' im Poker?", nl: "Wat is een 'full house' in Poker?" }, options: [{ en: "Three of a kind plus a pair", es: "Trío más pareja", de: "Drilling plus Paar", nl: "Drie dezelfde plus een paar" }, { en: "Five of a kind", es: "Cinco iguales", de: "Fünf Gleiche", nl: "Vijf dezelfde" }, { en: "All face cards", es: "Todas figuras", de: "Alle Bildkarten", nl: "Alle plaatjes" }, { en: "Two pairs", es: "Dos parejas", de: "Zwei Paare", nl: "Twee paren" }], correct: 0, explanation: { en: "A full house combines three cards of one rank with two cards of another rank.", es: "Un full combina tres cartas de un rango con dos cartas de otro rango.", de: "Ein Full House kombiniert drei Karten eines Rangs mit zwei Karten eines anderen Rangs.", nl: "Een full house combineert drie kaarten van één rang met twee kaarten van een andere rang." }},
      { question: { en: "In Gin Rummy, what is 'knocking'?", es: "En Gin Rummy, ¿qué es 'tocar'?", de: "Was ist 'Klopfen' im Gin Rummy?", nl: "Wat is 'kloppen' in Gin Rummy?" }, options: [{ en: "Ending the round with low deadwood", es: "Terminar la ronda con poco deadwood", de: "Die Runde mit wenig Deadwood beenden", nl: "De ronde beëindigen met weinig deadwood" }, { en: "Drawing a card", es: "Robar una carta", de: "Eine Karte ziehen", nl: "Een kaart trekken" }, { en: "Discarding", es: "Descartar", de: "Ablegen", nl: "Weggooien" }, { en: "Shuffling", es: "Barajar", de: "Mischen", nl: "Schudden" }], correct: 0, explanation: { en: "Knocking means ending the hand when your unmatched cards total 10 or less points.", es: "Tocar significa terminar la mano cuando tus cartas no emparejadas totalizan 10 o menos puntos.", de: "Klopfen bedeutet, die Hand zu beenden, wenn Ihre nicht passenden Karten 10 oder weniger Punkte ergeben.", nl: "Kloppen betekent de hand beëindigen wanneer je ongekoppelde kaarten 10 of minder punten opleveren." }},
      { question: { en: "What is 'doubling down' in Blackjack?", es: "¿Qué es 'doblar' en Blackjack?", de: "Was ist 'Verdoppeln' im Blackjack?", nl: "Wat is 'verdubbelen' in Blackjack?" }, options: [{ en: "Doubling bet and taking one card", es: "Doblar apuesta y tomar una carta", de: "Einsatz verdoppeln und eine Karte nehmen", nl: "Inzet verdubbelen en één kaart nemen" }, { en: "Splitting pairs", es: "Dividir pares", de: "Paare teilen", nl: "Paren splitsen" }, { en: "Betting twice", es: "Apostar dos veces", de: "Zweimal wetten", nl: "Twee keer inzetten" }, { en: "Taking two cards", es: "Tomar dos cartas", de: "Zwei Karten nehmen", nl: "Twee kaarten nemen" }], correct: 0, explanation: { en: "Doubling down allows you to double your bet in exchange for committing to take exactly one more card.", es: "Doblar te permite duplicar tu apuesta a cambio de comprometerte a tomar exactamente una carta más.", de: "Verdoppeln ermöglicht es Ihnen, Ihren Einsatz zu verdoppeln im Austausch dafür, genau eine weitere Karte zu nehmen.", nl: "Verdubbelen stelt je in staat je inzet te verdubbelen in ruil voor het nemen van precies één extra kaart." }},
      { question: { en: "In Spades, what happens if you don't make your bid?", es: "En Espadas, ¿qué pasa si no cumples tu apuesta?", de: "Was passiert in Spades, wenn Sie Ihr Gebot nicht erfüllen?", de: "Wat gebeurt er in Spades als je je bod niet haalt?" }, options: [{ en: "You lose points", es: "Pierdes puntos", de: "Sie verlieren Punkte", nl: "Je verliest punten" }, { en: "You win bonus points", es: "Ganas puntos bonus", de: "Sie gewinnen Bonuspunkte", nl: "Je wint bonuspunten" }, { en: "Nothing happens", es: "No pasa nada", de: "Nichts passiert", nl: "Er gebeurt niets" }, { en: "You're eliminated", es: "Eres eliminado", de: "Sie werden eliminiert", nl: "Je bent geëlimineerd" }], correct: 0, explanation: { en: "Failing to make your bid in Spades results in losing 10 points per trick bid.", es: "No cumplir tu apuesta en Espadas resulta en perder 10 puntos por baza apostada.", de: "Das Verfehlen Ihres Gebots in Spades führt zum Verlust von 10 Punkten pro gebotenem Stich.", nl: "Je bod niet halen in Spades resulteert in het verliezen van 10 punten per geboden slag." }},
      { question: { en: "What is 'sandbagging' in Spades?", es: "¿Qué es 'sandbagging' en Espadas?", de: "Was ist 'Sandbagging' in Spades?", nl: "Wat is 'sandbagging' in Spades?" }, options: [{ en: "Taking more tricks than bid", es: "Tomar más bazas de las apostadas", de: "Mehr Stiche nehmen als geboten", nl: "Meer slagen nemen dan geboden" }, { en: "Bidding zero", es: "Apostar cero", de: "Null bieten", nl: "Nul bieden" }, { en: "Playing slowly", es: "Jugar lentamente", de: "Langsam spielen", nl: "Langzaam spelen" }, { en: "Cheating", es: "Hacer trampa", de: "Betrügen", nl: "Vals spelen" }], correct: 0, explanation: { en: "Sandbagging means taking overtricks (bags), which accumulate penalties if you get 10.", es: "Sandbagging significa tomar bazas de más (bolsas), que acumulan penalizaciones si llegas a 10.", de: "Sandbagging bedeutet Überstiche (Säcke) zu nehmen, die Strafen anhäufen, wenn Sie 10 erreichen.", nl: "Sandbagging betekent overtricks (zakken) nemen, die penalties opbouwen als je er 10 haalt." }},
      { question: { en: "In Cribbage, what is the 'crib'?", es: "En Cribbage, ¿qué es el 'crib'?", de: "Was ist die 'Krippe' im Cribbage?", nl: "Wat is de 'crib' in Cribbage?" }, options: [{ en: "Extra hand for the dealer", es: "Mano extra para el repartidor", de: "Extrahand für den Geber", nl: "Extra hand voor de deler" }, { en: "The deck", es: "El mazo", de: "Das Deck", nl: "Het deck" }, { en: "Discard pile", es: "Pila de descarte", de: "Ablagestapel", nl: "Aflegstapel" }, { en: "Scoring board", es: "Tablero de puntuación", de: "Wertungstafel", nl: "Scorebord" }], correct: 0, explanation: { en: "The crib is an extra hand formed by discards from all players, which belongs to the dealer.", es: "El crib es una mano extra formada por descartes de todos los jugadores, que pertenece al repartidor.", de: "Die Krippe ist eine Extrahand, die aus Abwürfen aller Spieler gebildet wird und dem Geber gehört.", nl: "De crib is een extra hand gevormd door aflegkaarten van alle spelers, die toebehoort aan de deler." }},
      { question: { en: "What is 'passing' in Hearts?", es: "¿Qué es 'pasar' en Corazones?", de: "Was ist 'Weitergeben' in Hearts?", nl: "Wat is 'doorgeven' in Hearts?" }, options: [{ en: "Exchanging cards before play", es: "Intercambiar cartas antes de jugar", de: "Karten vor dem Spiel austauschen", nl: "Kaarten uitwisselen voor het spel" }, { en: "Skipping a turn", es: "Saltarse un turno", de: "Einen Zug überspringen", nl: "Een beurt overslaan" }, { en: "Playing low cards", es: "Jugar cartas bajas", de: "Niedrige Karten spielen", nl: "Lage kaarten spelen" }, { en: "Folding", es: "Retirarse", de: "Aussteigen", nl: "Passen" }], correct: 0, explanation: { en: "Passing means exchanging three cards with another player before the hand begins.", es: "Pasar significa intercambiar tres cartas con otro jugador antes de que comience la mano.", de: "Weitergeben bedeutet, drei Karten mit einem anderen Spieler auszutauschen, bevor die Hand beginnt.", nl: "Doorgeven betekent drie kaarten uitwisselen met een andere speler voordat de hand begint." }},
      { question: { en: "In Solitaire, what is the 'foundation'?", es: "En Solitario, ¿qué es la 'fundación'?", de: "Was ist die 'Grundlage' im Solitaire?", nl: "Wat is de 'fundering' in Patience?" }, options: [{ en: "Piles built from Ace to King", es: "Pilas construidas de As a Rey", de: "Stapel von Ass bis König", nl: "Stapels gebouwd van Aas tot Heer" }, { en: "The deck", es: "El mazo", de: "Das Deck", nl: "Het deck" }, { en: "Tableau columns", es: "Columnas del tablero", de: "Tableau-Spalten", nl: "Tableau kolommen" }, { en: "Waste pile", es: "Pila de descarte", de: "Abfallstapel", nl: "Afvalstapel" }], correct: 0, explanation: { en: "Foundations are the four piles where you build each suit from Ace up to King.", es: "Las fundaciones son las cuatro pilas donde construyes cada palo desde As hasta Rey.", de: "Grundlagen sind die vier Stapel, wo Sie jede Farbe vom Ass bis zum König aufbauen.", nl: "Funderingen zijn de vier stapels waar je elk pak bouwt van Aas tot Heer." }},
      { question: { en: "What does 'busting' mean in Blackjack?", es: "¿Qué significa 'pasarse' en Blackjack?", de: "Was bedeutet 'Überkaufen' im Blackjack?", nl: "Wat betekent 'busten' in Blackjack?" }, options: [{ en: "Going over 21", es: "Pasar de 21", de: "Über 21 gehen", nl: "Over de 21 gaan" }, { en: "Winning", es: "Ganar", de: "Gewinnen", nl: "Winnen" }, { en: "Tying", es: "Empatar", de: "Unentschieden", nl: "Gelijkspel" }, { en: "Splitting", es: "Dividir", de: "Teilen", nl: "Splitsen" }], correct: 0, explanation: { en: "Busting means your hand total exceeds 21, causing an automatic loss.", es: "Pasarse significa que tu total de mano excede 21, causando una pérdida automática.", de: "Überkaufen bedeutet, dass Ihre Handsumme 21 überschreitet und automatisch zum Verlust führt.", nl: "Busten betekent dat je handtotaal 21 overschrijdt, wat automatisch verlies veroorzaakt." }},
      { question: { en: "In Texas Hold'em, what are 'hole cards'?", es: "En Texas Hold'em, ¿qué son las 'cartas ocultas'?", de: "Was sind 'Hole Cards' im Texas Hold'em?", nl: "Wat zijn 'hole cards' in Texas Hold'em?" }, options: [{ en: "Your two private cards", es: "Tus dos cartas privadas", de: "Ihre zwei privaten Karten", nl: "Je twee privékaarten" }, { en: "Community cards", es: "Cartas comunitarias", de: "Gemeinschaftskarten", nl: "Gemeenschapskaarten" }, { en: "Discarded cards", es: "Cartas descartadas", de: "Abgeworfene Karten", nl: "Afgedankte kaarten" }, { en: "Burned cards", es: "Cartas quemadas", de: "Verbrannte Karten", nl: "Verbrande kaarten" }], correct: 0, explanation: { en: "Hole cards are the two private cards dealt face-down to each player.", es: "Las cartas ocultas son las dos cartas privadas repartidas boca abajo a cada jugador.", de: "Hole Cards sind die zwei privaten Karten, die jedem Spieler verdeckt ausgeteilt werden.", nl: "Hole cards zijn de twee privékaarten die gedekt aan elke speler worden gedeeld." }},
      { question: { en: "What is 'the flop' in Texas Hold'em?", es: "¿Qué es 'el flop' en Texas Hold'em?", de: "Was ist 'der Flop' im Texas Hold'em?", nl: "Wat is 'de flop' in Texas Hold'em?" }, options: [{ en: "First three community cards", es: "Primeras tres cartas comunitarias", de: "Erste drei Gemeinschaftskarten", nl: "Eerste drie gemeenschapskaarten" }, { en: "Last card", es: "Última carta", de: "Letzte Karte", nl: "Laatste kaart" }, { en: "Fourth card", es: "Cuarta carta", de: "Vierte Karte", nl: "Vierde kaart" }, { en: "Hole cards", es: "Cartas ocultas", de: "Hole Cards", nl: "Hole cards" }], correct: 0, explanation: { en: "The flop is the first three community cards dealt face-up simultaneously.", es: "El flop son las tres primeras cartas comunitarias repartidas boca arriba simultáneamente.", de: "Der Flop sind die ersten drei Gemeinschaftskarten, die gleichzeitig offen ausgeteilt werden.", nl: "De flop zijn de eerste drie gemeenschapskaarten die tegelijk open worden gedeeld." }},
      { question: { en: "In Poker, what is 'checking'?", es: "En Póker, ¿qué es 'pasar'?", de: "Was ist 'Checken' im Poker?", nl: "Wat is 'checken' in Poker?" }, options: [{ en: "Passing without betting", es: "Pasar sin apostar", de: "Passen ohne zu setzen", nl: "Passen zonder inzetten" }, { en: "Folding", es: "Retirarse", de: "Aussteigen", nl: "Passen" }, { en: "Betting all chips", es: "Apostar todas las fichas", de: "Alle Chips setzen", nl: "Alle fiches inzetten" }, { en: "Raising", es: "Subir", de: "Erhöhen", nl: "Verhogen" }], correct: 0, explanation: { en: "Checking means declining to bet while reserving the right to call or raise later.", es: "Pasar significa declinar apostar mientras se reserva el derecho a igualar o subir más tarde.", de: "Checken bedeutet, nicht zu setzen, während man sich das Recht vorbehält, später mitzugehen oder zu erhöhen.", nl: "Checken betekent weigeren in te zetten terwijl je het recht behoudt om later mee te gaan of te verhogen." }},
      { question: { en: "What is a 'royal flush' in Poker?", es: "¿Qué es una 'escalera real' en Póker?", de: "Was ist ein 'Royal Flush' im Poker?", nl: "Wat is een 'royal flush' in Poker?" }, options: [{ en: "A-K-Q-J-10 same suit", es: "A-K-Q-J-10 mismo palo", de: "A-K-D-B-10 gleiche Farbe", nl: "A-K-V-B-10 zelfde pak" }, { en: "Five Aces", es: "Cinco Ases", de: "Fünf Asse", nl: "Vijf Azen" }, { en: "All face cards", es: "Todas figuras", de: "Alle Bildkarten", nl: "Alle plaatjes" }, { en: "Four of a kind", es: "Cuatro iguales", de: "Vier Gleiche", nl: "Vier dezelfde" }], correct: 0, explanation: { en: "A royal flush is the highest poker hand: A-K-Q-J-10 all of the same suit.", es: "Una escalera real es la mano más alta en póker: A-K-Q-J-10 todo del mismo palo.", de: "Ein Royal Flush ist die höchste Pokerhand: A-K-D-B-10 alle derselben Farbe.", nl: "Een royal flush is de hoogste pokerhand: A-K-V-B-10 allemaal van hetzelfde pak." }},
      { question: { en: "In Bridge, what is a 'finesse'?", es: "En Bridge, ¿qué es una 'fineza'?", de: "Was ist eine 'Schneidung' im Bridge?", nl: "Wat is een 'finesse' in Bridge?" }, options: [{ en: "Playing low hoping opponent plays lower", es: "Jugar bajo esperando que oponente juegue más bajo", de: "Niedrig spielen in der Hoffnung, dass Gegner niedriger spielt", nl: "Laag spelen hopend dat tegenstander lager speelt" }, { en: "Playing highest card", es: "Jugar carta más alta", de: "Höchste Karte spielen", nl: "Hoogste kaart spelen" }, { en: "Trumping", es: "Triunfar", de: "Trumpfen", nl: "Troeven" }, { en: "Discarding", es: "Descartar", de: "Ablegen", nl: "Afleggen" }], correct: 0, explanation: { en: "A finesse is attempting to win a trick with a lower card by playing before an opponent who holds a higher card.", es: "Una fineza es intentar ganar una baza con una carta más baja jugando antes que un oponente que tiene una carta más alta.", de: "Eine Schneidung ist der Versuch, einen Stich mit einer niedrigeren Karte zu gewinnen, indem man vor einem Gegner spielt, der eine höhere Karte hält.", nl: "Een finesse is proberen een slag te winnen met een lagere kaart door te spelen voor een tegenstander die een hogere kaart heeft." }},
      { question: { en: "What is 'reneging' in card games?", es: "¿Qué es 'renegar' en juegos de cartas?", de: "Was ist 'Verzicht' in Kartenspielen?", nl: "Wat is 'verzaken' in kaartspellen?" }, options: [{ en: "Failing to follow suit when able", es: "No seguir el palo pudiendo", de: "Nicht Farbe bedienen können", nl: "Niet het pak volgen als het kan" }, { en: "Winning a trick", es: "Ganar una baza", de: "Einen Stich gewinnen", nl: "Een slag winnen" }, { en: "Bidding zero", es: "Apostar cero", de: "Null bieten", nl: "Nul bieden" }, { en: "Discarding", es: "Descartar", de: "Ablegen", nl: "Afleggen" }], correct: 0, explanation: { en: "Reneging is the serious error of not following suit when you have cards of the led suit.", es: "Renegar es el error grave de no seguir el palo cuando tienes cartas del palo jugado.", de: "Verzicht ist der schwere Fehler, nicht Farbe zu bedienen, wenn man Karten der ausgespielten Farbe hat.", nl: "Verzaken is de ernstige fout van niet het pak volgen wanneer je kaarten van het gespeelde pak hebt." }},
      { question: { en: "In Uno, what does a 'Draw Two' card do?", es: "En Uno, ¿qué hace una carta 'Roba Dos'?", de: "Was macht eine 'Zieh Zwei' Karte in Uno?", nl: "Wat doet een 'Trek Twee' kaart in Uno?" }, options: [{ en: "Next player draws 2 and loses turn", es: "Siguiente jugador roba 2 y pierde turno", de: "Nächster Spieler zieht 2 und verliert Zug", nl: "Volgende speler trekt 2 en verliest beurt" }, { en: "You draw two cards", es: "Robas dos cartas", de: "Sie ziehen zwei Karten", nl: "Je trekt twee kaarten" }, { en: "Everyone draws two", es: "Todos roban dos", de: "Alle ziehen zwei", nl: "Iedereen trekt twee" }, { en: "Skip two players", es: "Saltar dos jugadores", de: "Zwei Spieler überspringen", nl: "Twee spelers overslaan" }], correct: 0, explanation: { en: "A Draw Two card forces the next player to draw two cards and forfeit their turn.", es: "Una carta Roba Dos obliga al siguiente jugador a robar dos cartas y perder su turno.", de: "Eine Zieh Zwei Karte zwingt den nächsten Spieler, zwei Karten zu ziehen und seinen Zug zu verlieren.", nl: "Een Trek Twee kaart dwingt de volgende speler twee kaarten te trekken en hun beurt te verliezen." }},
      { question: { en: "What is a 'trick' in card games?", es: "¿Qué es una 'baza' en juegos de cartas?", de: "Was ist ein 'Stich' in Kartenspielen?", nl: "Wat is een 'slag' in kaartspellen?" }, options: [{ en: "One round where each player plays a card", es: "Una ronda donde cada jugador juega una carta", de: "Eine Runde, in der jeder Spieler eine Karte spielt", nl: "Een ronde waar elke speler een kaart speelt" }, { en: "A special card", es: "Una carta especial", de: "Eine Spezialkarte", nl: "Een speciale kaart" }, { en: "A cheat", es: "Un engaño", de: "Ein Betrug", nl: "Een truc" }, { en: "A wild card", es: "Una carta comodín", de: "Eine Jokerkarte", nl: "Een joker" }], correct: 0, explanation: { en: "A trick is one complete round where each player plays one card, with one player winning all cards played.", es: "Una baza es una ronda completa donde cada jugador juega una carta, con un jugador ganando todas las cartas jugadas.", de: "Ein Stich ist eine vollständige Runde, in der jeder Spieler eine Karte spielt, wobei ein Spieler alle gespielten Karten gewinnt.", nl: "Een slag is één complete ronde waar elke speler één kaart speelt, waarbij één speler alle gespeelde kaarten wint." }},
      {
        question: {
          en: "In Poker, what is 'the river'?",
          es: "En Póker, ¿qué es 'el río'?",
          de: "Was ist 'der River' im Poker?",
          nl: "Wat is 'de river' in Poker?"
        },
        options: [
          { en: "The fifth and final community card", es: "La quinta y última carta comunitaria", de: "Die fünfte und letzte Gemeinschaftskarte", nl: "De vijfde en laatste gemeenschapskaart" },
          { en: "The first card dealt", es: "La primera carta repartida", de: "Die erste ausgeteilte Karte", nl: "De eerste gedeelde kaart" },
          { en: "A type of hand", es: "Un tipo de mano", de: "Eine Art Hand", nl: "Een soort hand" },
          { en: "The discard pile", es: "La pila de descarte", de: "Der Ablagestapel", nl: "De aflegstapel" }
        ],
        correct: 0,
        explanation: {
          en: "The river is the fifth and final community card dealt in Texas Hold'em and Omaha poker.",
          es: "El río es la quinta y última carta comunitaria repartida en Texas Hold'em y Omaha poker.",
          de: "Der River ist die fünfte und letzte Gemeinschaftskarte, die in Texas Hold'em und Omaha Poker ausgeteilt wird.",
          nl: "De river is de vijfde en laatste gemeenschapskaart die wordt gedeeld in Texas Hold'em en Omaha poker."
        }
      },
      {
        question: {
          en: "What is 'the turn' in Texas Hold'em?",
          es: "¿Qué es 'el turn' en Texas Hold'em?",
          de: "Was ist 'der Turn' im Texas Hold'em?",
          nl: "Wat is 'de turn' in Texas Hold'em?"
        },
        options: [
          { en: "The fourth community card", es: "La cuarta carta comunitaria", de: "Die vierte Gemeinschaftskarte", nl: "De vierde gemeenschapskaart" },
          { en: "Your turn to act", es: "Tu turno de actuar", de: "Ihr Zug zum Handeln", nl: "Jouw beurt om te handelen" },
          { en: "The third card", es: "La tercera carta", de: "Die dritte Karte", nl: "De derde kaart" },
          { en: "The last card", es: "La última carta", de: "Die letzte Karte", nl: "De laatste kaart" }
        ],
        correct: 0,
        explanation: {
          en: "The turn is the fourth community card dealt in Texas Hold'em, also called 'fourth street'.",
          es: "El turn es la cuarta carta comunitaria repartida en Texas Hold'em, también llamada 'cuarta calle'.",
          de: "Der Turn ist die vierte Gemeinschaftskarte im Texas Hold'em, auch 'Fourth Street' genannt.",
          nl: "De turn is de vierde gemeenschapskaart in Texas Hold'em, ook wel 'fourth street' genoemd."
        }
      },
      {
        question: {
          en: "In Bridge, what is a 'singleton'?",
          es: "En Bridge, ¿qué es un 'singleton'?",
          de: "Was ist ein 'Singleton' im Bridge?",
          nl: "Wat is een 'singleton' in Bridge?"
        },
        options: [
          { en: "Holding exactly one card in a suit", es: "Tener exactamente una carta de un palo", de: "Genau eine Karte einer Farbe halten", nl: "Precies één kaart van een pak hebben" },
          { en: "A single point", es: "Un solo punto", de: "Ein einzelner Punkt", nl: "Een enkel punt" },
          { en: "Playing alone", es: "Jugar solo", de: "Alleine spielen", nl: "Alleen spelen" },
          { en: "One trick won", es: "Una baza ganada", de: "Ein gewonnener Stich", nl: "Eén gewonnen slag" }
        ],
        correct: 0,
        explanation: {
          en: "A singleton is when you hold exactly one card in a particular suit, which can be strategically valuable.",
          es: "Un singleton es cuando tienes exactamente una carta de un palo particular, lo que puede ser estratégicamente valioso.",
          de: "Ein Singleton ist, wenn Sie genau eine Karte einer bestimmten Farbe halten, was strategisch wertvoll sein kann.",
          nl: "Een singleton is wanneer je precies één kaart van een bepaald pak hebt, wat strategisch waardevol kan zijn."
        }
      },
      {
        question: {
          en: "What is 'going gin' in Gin Rummy?",
          es: "¿Qué es 'hacer gin' en Gin Rummy?",
          de: "Was ist 'Gin machen' im Gin Rummy?",
          nl: "Wat is 'gin maken' in Gin Rummy?"
        },
        options: [
          { en: "Melding all cards with no deadwood", es: "Combinar todas las cartas sin deadwood", de: "Alle Karten ohne Deadwood auslegen", nl: "Alle kaarten combineren zonder deadwood" },
          { en: "Losing the game", es: "Perder el juego", de: "Das Spiel verlieren", nl: "Het spel verliezen" },
          { en: "Drawing a card", es: "Robar una carta", de: "Eine Karte ziehen", nl: "Een kaart trekken" },
          { en: "Discarding", es: "Descartar", de: "Ablegen", nl: "Weggooien" }
        ],
        correct: 0,
        explanation: {
          en: "Going gin means laying down all your cards in valid melds with zero deadwood points, earning a bonus.",
          es: "Hacer gin significa mostrar todas tus cartas en combinaciones válidas con cero puntos de deadwood, ganando un bono.",
          de: "Gin machen bedeutet, alle Ihre Karten in gültigen Kombinationen ohne Deadwood-Punkte auszulegen und einen Bonus zu erhalten.",
          nl: "Gin maken betekent al je kaarten in geldige combinaties neerleggen met nul deadwood punten, waardoor je een bonus verdient."
        }
      },
      {
        question: {
          en: "In Spades, what is a 'nil bid'?",
          es: "En Espadas, ¿qué es una 'apuesta nil'?",
          de: "Was ist ein 'Null-Gebot' in Spades?",
          nl: "Wat is een 'nil bod' in Spades?"
        },
        options: [
          { en: "Bidding to take zero tricks", es: "Apostar a no tomar bazas", de: "Bieten, keine Stiche zu nehmen", nl: "Bieden om nul slagen te nemen" },
          { en: "Passing your turn", es: "Pasar tu turno", de: "Ihren Zug passen", nl: "Je beurt passen" },
          { en: "Bidding the maximum", es: "Apostar el máximo", de: "Maximal bieten", nl: "Maximaal bieden" },
          { en: "Not bidding", es: "No apostar", de: "Nicht bieten", nl: "Niet bieden" }
        ],
        correct: 0,
        explanation: {
          en: "A nil bid is a risky bet to take zero tricks, which scores high points if successful but heavy penalties if you take even one trick.",
          es: "Una apuesta nil es una apuesta arriesgada de no tomar bazas, que puntúa alto si tiene éxito pero penalizaciones fuertes si tomas aunque sea una baza.",
          de: "Ein Null-Gebot ist eine riskante Wette, keine Stiche zu nehmen, die hohe Punkte bringt, wenn erfolgreich, aber schwere Strafen, wenn Sie auch nur einen Stich nehmen.",
          nl: "Een nil bod is een riskante weddenschap om nul slagen te nemen, die hoog scoort als het lukt maar zware straffen oplevert als je zelfs maar één slag neemt."
        }
      },
      {
        question: {
          en: "What is 'deadwood' in Rummy games?",
          es: "¿Qué es 'deadwood' en juegos de Rummy?",
          de: "Was ist 'Deadwood' in Rummy-Spielen?",
          nl: "Wat is 'deadwood' in Rummy-spellen?"
        },
        options: [
          { en: "Unmatched cards in your hand", es: "Cartas no emparejadas en tu mano", de: "Nicht passende Karten auf der Hand", nl: "Ongekoppelde kaarten in je hand" },
          { en: "Discarded cards", es: "Cartas descartadas", de: "Abgeworfene Karten", nl: "Afgedankte kaarten" },
          { en: "Wild cards", es: "Cartas comodín", de: "Jokerkarten", nl: "Jokers" },
          { en: "Face cards", es: "Figuras", de: "Bildkarten", nl: "Plaatjes" }
        ],
        correct: 0,
        explanation: {
          en: "Deadwood refers to cards that haven't been melded and count as penalty points in games like Gin Rummy.",
          es: "Deadwood se refiere a cartas que no se han combinado y cuentan como puntos de penalización en juegos como Gin Rummy.",
          de: "Deadwood bezieht sich auf Karten, die nicht kombiniert wurden und als Strafpunkte in Spielen wie Gin Rummy zählen.",
          nl: "Deadwood verwijst naar kaarten die niet zijn gecombineerd en tellen als strafpunten in spellen zoals Gin Rummy."
        }
      },
      {
        question: {
          en: "In Cribbage, what is 'fifteen-two'?",
          es: "En Cribbage, ¿qué es 'quince-dos'?",
          de: "Was ist 'Fünfzehn-Zwei' im Cribbage?",
          nl: "Wat is 'vijftien-twee' in Cribbage?"
        },
        options: [
          { en: "Two points for cards totaling 15", es: "Dos puntos por cartas que suman 15", de: "Zwei Punkte für Karten, die 15 ergeben", nl: "Twee punten voor kaarten die 15 opleveren" },
          { en: "A type of hand", es: "Un tipo de mano", de: "Eine Art Hand", nl: "Een soort hand" },
          { en: "The 15th card dealt", es: "La carta 15 repartida", de: "Die 15. ausgeteilte Karte", nl: "De 15e gedeelde kaart" },
          { en: "Bidding 15", es: "Apostar 15", de: "15 bieten", nl: "15 bieden" }
        ],
        correct: 0,
        explanation: {
          en: "In Cribbage, any combination of cards totaling exactly 15 scores two points, announced as 'fifteen-two'.",
          es: "En Cribbage, cualquier combinación de cartas que sumen exactamente 15 puntúa dos puntos, anunciado como 'quince-dos'.",
          de: "Im Cribbage bringt jede Kombination von Karten, die genau 15 ergibt, zwei Punkte, angekündigt als 'Fünfzehn-Zwei'.",
          nl: "In Cribbage levert elke combinatie van kaarten die precies 15 oplevert twee punten op, aangekondigd als 'vijftien-twee'."
        }
      },
      {
        question: {
          en: "What does 'following suit' mean?",
          es: "¿Qué significa 'seguir el palo'?",
          de: "Was bedeutet 'Farbe bedienen'?",
          nl: "Wat betekent 'het pak volgen'?"
        },
        options: [
          { en: "Playing a card of the same suit as the lead card", es: "Jugar una carta del mismo palo que la carta principal", de: "Eine Karte derselben Farbe wie die Führungskarte spielen", nl: "Een kaart van hetzelfde pak spelen als de eerste kaart" },
          { en: "Copying another player", es: "Copiar a otro jugador", de: "Einen anderen Spieler kopieren", nl: "Een andere speler kopiëren" },
          { en: "Playing trump", es: "Jugar triunfo", de: "Trumpf spielen", nl: "Troef spelen" },
          { en: "Matching the bid", es: "Igualar la apuesta", de: "Das Gebot angleichen", nl: "Het bod evenaren" }
        ],
        correct: 0,
        explanation: {
          en: "Following suit is a fundamental rule in most trick-taking games requiring you to play a card of the same suit if you have one.",
          es: "Seguir el palo es una regla fundamental en la mayoría de juegos de bazas que requiere que juegues una carta del mismo palo si tienes una.",
          de: "Farbe bedienen ist eine grundlegende Regel in den meisten Stichspielen, die verlangt, eine Karte derselben Farbe zu spielen, wenn Sie eine haben.",
          nl: "Het pak volgen is een fundamentele regel in de meeste slagspellen die vereist dat je een kaart van hetzelfde pak speelt als je er één hebt."
        }
      },
      {
        question: {
          en: "In Poker, what is 'all-in'?",
          es: "En Póker, ¿qué es 'all-in'?",
          de: "Was ist 'All-In' im Poker?",
          nl: "Wat is 'all-in' in Poker?"
        },
        options: [
          { en: "Betting all your remaining chips", es: "Apostar todas tus fichas restantes", de: "Alle verbleibenden Chips setzen", nl: "Al je resterende fiches inzetten" },
          { en: "Winning the pot", es: "Ganar el bote", de: "Den Pot gewinnen", nl: "De pot winnen" },
          { en: "Folding", es: "Retirarse", de: "Aussteigen", nl: "Passen" },
          { en: "Calling the bet", es: "Igualar la apuesta", de: "Den Einsatz mitgehen", nl: "De inzet volgen" }
        ],
        correct: 0,
        explanation: {
          en: "Going all-in means betting all your remaining chips in a single hand, putting your tournament or cash game life on the line.",
          es: "Ir all-in significa apostar todas tus fichas restantes en una sola mano, poniendo tu vida en el torneo o juego en efectivo en juego.",
          de: "All-In gehen bedeutet, alle verbleibenden Chips in einer einzigen Hand zu setzen und Ihr Turnier- oder Cash-Game-Leben aufs Spiel zu setzen.",
          nl: "All-in gaan betekent al je resterende fiches in één hand inzetten, waarbij je je toernooi- of cashgame-leven op het spel zet."
        }
      },
      {
        question: {
          en: "What is a 'doubleton' in Bridge?",
          es: "¿Qué es un 'doubleton' en Bridge?",
          de: "Was ist ein 'Doubleton' im Bridge?",
          nl: "Wat is een 'doubleton' in Bridge?"
        },
        options: [
          { en: "Holding exactly two cards in a suit", es: "Tener exactamente dos cartas de un palo", de: "Genau zwei Karten einer Farbe halten", nl: "Precies twee kaarten van een pak hebben" },
          { en: "Two pairs", es: "Dos parejas", de: "Zwei Paare", nl: "Twee paren" },
          { en: "Double points", es: "Puntos dobles", de: "Doppelte Punkte", nl: "Dubbele punten" },
          { en: "Two players", es: "Dos jugadores", de: "Zwei Spieler", nl: "Twee spelers" }
        ],
        correct: 0,
        explanation: {
          en: "A doubleton is a holding of exactly two cards in a suit, often strategically significant in bidding and play.",
          es: "Un doubleton es tener exactamente dos cartas de un palo, a menudo estratégicamente significativo en las apuestas y el juego.",
          de: "Ein Doubleton ist das Halten von genau zwei Karten einer Farbe, oft strategisch bedeutsam beim Reizen und Spielen.",
          nl: "Een doubleton is het hebben van precies twee kaarten van een pak, vaak strategisch belangrijk bij het bieden en spelen."
        }
      },
      {
        question: {
          en: "In Blackjack, what is 'insurance'?",
          es: "En Blackjack, ¿qué es el 'seguro'?",
          de: "Was ist 'Versicherung' im Blackjack?",
          nl: "Wat is 'verzekering' in Blackjack?"
        },
        options: [
          { en: "Side bet when dealer shows an Ace", es: "Apuesta lateral cuando el crupier muestra un As", de: "Nebenwette, wenn der Dealer ein Ass zeigt", nl: "Zijinzet wanneer de dealer een Aas toont" },
          { en: "Doubling your bet", es: "Doblar tu apuesta", de: "Ihren Einsatz verdoppeln", nl: "Je inzet verdubbelen" },
          { en: "Splitting pairs", es: "Dividir pares", de: "Paare teilen", nl: "Paren splitsen" },
          { en: "Taking an extra card", es: "Tomar una carta extra", de: "Eine Extra-Karte nehmen", nl: "Een extra kaart nemen" }
        ],
        correct: 0,
        explanation: {
          en: "Insurance is a side bet offered when the dealer's upcard is an Ace, betting that the dealer has blackjack.",
          es: "El seguro es una apuesta lateral ofrecida cuando la carta visible del crupier es un As, apostando a que el crupier tiene blackjack.",
          de: "Versicherung ist eine Nebenwette, die angeboten wird, wenn die offene Karte des Dealers ein Ass ist, und darauf wettet, dass der Dealer Blackjack hat.",
          nl: "Verzekering is een zijinzet die wordt aangeboden wanneer de open kaart van de dealer een Aas is, waarbij je wedt dat de dealer blackjack heeft."
        }
      },
      {
        question: {
          en: "What is 'the pot' in Poker?",
          es: "¿Qué es 'el bote' en Póker?",
          de: "Was ist 'der Pot' im Poker?",
          nl: "Wat is 'de pot' in Poker?"
        },
        options: [
          { en: "Total chips bet in the current hand", es: "Total de fichas apostadas en la mano actual", de: "Gesamte Chips, die in der aktuellen Hand gesetzt wurden", nl: "Totaal aantal fiches ingezet in de huidige hand" },
          { en: "Your chip stack", es: "Tu pila de fichas", de: "Ihr Chip-Stapel", nl: "Je fichesstapel" },
          { en: "The dealer position", es: "La posición del crupier", de: "Die Dealer-Position", nl: "De dealerpositie" },
          { en: "A type of bet", es: "Un tipo de apuesta", de: "Eine Art Wette", nl: "Een soort inzet" }
        ],
        correct: 0,
        explanation: {
          en: "The pot is the total amount of chips or money wagered by all players in the current hand, which the winner takes.",
          es: "El bote es la cantidad total de fichas o dinero apostado por todos los jugadores en la mano actual, que el ganador se lleva.",
          de: "Der Pot ist der Gesamtbetrag an Chips oder Geld, der von allen Spielern in der aktuellen Hand gesetzt wurde, den der Gewinner nimmt.",
          nl: "De pot is het totale bedrag aan fiches of geld ingezet door alle spelers in de huidige hand, die de winnaar krijgt."
        }
      },
      {
        question: {
          en: "In Hearts, how many points is the Queen of Spades worth?",
          es: "En Corazones, ¿cuántos puntos vale la Dama de Picas?",
          de: "Wie viele Punkte ist die Pik-Dame in Hearts wert?",
          nl: "Hoeveel punten is de Schoppen Vrouw waard in Hearts?"
        },
        options: [
          { en: "13 points", es: "13 puntos", de: "13 Punkte", nl: "13 punten" },
          { en: "1 point", es: "1 punto", de: "1 Punkt", nl: "1 punt" },
          { en: "5 points", es: "5 puntos", de: "5 Punkte", nl: "5 punten" },
          { en: "26 points", es: "26 puntos", de: "26 Punkte", nl: "26 punten" }
        ],
        correct: 0,
        explanation: {
          en: "The Queen of Spades is worth 13 penalty points in Hearts, making it a card to avoid unless shooting the moon.",
          es: "La Dama de Picas vale 13 puntos de penalización en Corazones, haciéndola una carta a evitar a menos que estés tirando a la luna.",
          de: "Die Pik-Dame ist 13 Strafpunkte in Hearts wert, was sie zu einer Karte macht, die man vermeiden sollte, es sei denn, man schießt den Mond.",
          nl: "De Schoppen Vrouw is 13 strafpunten waard in Hearts, wat het een kaart maakt om te vermijden tenzij je naar de maan schiet."
        }
      },
      {
        question: {
          en: "What is 'bluffing' in Poker?",
          es: "¿Qué es 'bluffear' en Póker?",
          de: "Was ist 'Bluffen' im Poker?",
          nl: "Wat is 'bluffen' in Poker?"
        },
        options: [
          { en: "Betting with a weak hand to deceive opponents", es: "Apostar con una mano débil para engañar a oponentes", de: "Mit einer schwachen Hand wetten, um Gegner zu täuschen", nl: "Inzetten met een zwakke hand om tegenstanders te misleiden" },
          { en: "Showing your cards", es: "Mostrar tus cartas", de: "Ihre Karten zeigen", nl: "Je kaarten tonen" },
          { en: "Betting with a strong hand", es: "Apostar con una mano fuerte", de: "Mit einer starken Hand wetten", nl: "Inzetten met een sterke hand" },
          { en: "Folding", es: "Retirarse", de: "Aussteigen", nl: "Passen" }
        ],
        correct: 0,
        explanation: {
          en: "Bluffing is betting or raising with a weak hand to make opponents think you have a strong hand and fold.",
          es: "Bluffear es apostar o subir con una mano débil para hacer que los oponentes piensen que tienes una mano fuerte y se retiren.",
          de: "Bluffen bedeutet, mit einer schwachen Hand zu setzen oder zu erhöhen, um Gegner glauben zu lassen, Sie hätten eine starke Hand, und sie zum Aussteigen zu bringen.",
          nl: "Bluffen is inzetten of verhogen met een zwakke hand om tegenstanders te laten denken dat je een sterke hand hebt en ze laten passen."
        }
      },
      {
        question: {
          en: "In Canasta, what is a 'natural canasta'?",
          es: "En Canasta, ¿qué es una 'canasta natural'?",
          de: "Was ist eine 'natürliche Canasta' in Canasta?",
          nl: "Wat is een 'natuurlijke canasta' in Canasta?"
        },
        options: [
          { en: "Seven cards of same rank without wild cards", es: "Siete cartas del mismo rango sin comodines", de: "Sieben Karten desselben Rangs ohne Joker", nl: "Zeven kaarten van dezelfde rang zonder jokers" },
          { en: "Any seven cards", es: "Cualquier siete cartas", de: "Beliebige sieben Karten", nl: "Willekeurige zeven kaarten" },
          { en: "Seven wild cards", es: "Siete comodines", de: "Sieben Joker", nl: "Zeven jokers" },
          { en: "Seven of one suit", es: "Siete de un palo", de: "Sieben einer Farbe", nl: "Zeven van één pak" }
        ],
        correct: 0,
        explanation: {
          en: "A natural canasta is seven cards of the same rank with no wild cards, scoring higher than a mixed canasta.",
          es: "Una canasta natural son siete cartas del mismo rango sin comodines, puntuando más alto que una canasta mixta.",
          de: "Eine natürliche Canasta besteht aus sieben Karten desselben Rangs ohne Joker und punktet höher als eine gemischte Canasta.",
          nl: "Een natuurlijke canasta is zeven kaarten van dezelfde rang zonder jokers, die hoger scoort dan een gemengde canasta."
        }
      },
      {
        question: {
          en: "What is a 'wild card'?",
          es: "¿Qué es una 'carta comodín'?",
          de: "Was ist eine 'Jokerkarte'?",
          nl: "Wat is een 'joker'?"
        },
        options: [
          { en: "A card that can represent any other card", es: "Una carta que puede representar cualquier otra carta", de: "Eine Karte, die jede andere Karte darstellen kann", nl: "Een kaart die elke andere kaart kan voorstellen" },
          { en: "A rare card", es: "Una carta rara", de: "Eine seltene Karte", nl: "Een zeldzame kaart" },
          { en: "The highest card", es: "La carta más alta", de: "Die höchste Karte", nl: "De hoogste kaart" },
          { en: "An extra card", es: "Una carta extra", de: "Eine Extra-Karte", nl: "Een extra kaart" }
        ],
        correct: 0,
        explanation: {
          en: "A wild card can substitute for any other card in the deck, adding flexibility to forming winning combinations.",
          es: "Una carta comodín puede sustituir a cualquier otra carta en el mazo, añadiendo flexibilidad para formar combinaciones ganadoras.",
          de: "Eine Jokerkarte kann jede andere Karte im Deck ersetzen und fügt Flexibilität beim Bilden von Gewinnkombinationen hinzu.",
          nl: "Een joker kan elke andere kaart in het deck vervangen, wat flexibiliteit toevoegt bij het vormen van winnende combinaties."
        }
      },
      {
        question: {
          en: "In Euchre, what is 'going alone'?",
          es: "En Euchre, ¿qué es 'ir solo'?",
          de: "Was ist 'alleine gehen' in Euchre?",
          nl: "Wat is 'alleen gaan' in Euchre?"
        },
        options: [
          { en: "Playing without your partner for extra points", es: "Jugar sin tu pareja por puntos extra", de: "Ohne Partner für Extrapunkte spielen", nl: "Spelen zonder je partner voor extra punten" },
          { en: "Leaving the game", es: "Dejar el juego", de: "Das Spiel verlassen", nl: "Het spel verlaten" },
          { en: "Not bidding", es: "No apostar", de: "Nicht bieten", nl: "Niet bieden" },
          { en: "Playing with one card", es: "Jugar con una carta", de: "Mit einer Karte spielen", nl: "Spelen met één kaart" }
        ],
        correct: 0,
        explanation: {
          en: "Going alone means playing the hand without your partner's help, attempting to win all tricks for bonus points.",
          es: "Ir solo significa jugar la mano sin la ayuda de tu pareja, intentando ganar todas las bazas por puntos bonus.",
          de: "Alleine gehen bedeutet, die Hand ohne die Hilfe Ihres Partners zu spielen und zu versuchen, alle Stiche für Bonuspunkte zu gewinnen.",
          nl: "Alleen gaan betekent de hand spelen zonder de hulp van je partner, waarbij je probeert alle slagen te winnen voor bonuspunten."
        }
      },
      {
        question: {
          en: "What is 'leading' in trick-taking games?",
          es: "¿Qué es 'salir' en juegos de bazas?",
          de: "Was ist 'Ausspielen' in Stichspielen?",
          nl: "Wat is 'uitkomen' in slagspellen?"
        },
        options: [
          { en: "Playing the first card of a trick", es: "Jugar la primera carta de una baza", de: "Die erste Karte eines Stichs spielen", nl: "De eerste kaart van een slag spelen" },
          { en: "Being ahead in points", es: "Estar adelante en puntos", de: "In Punkten führen", nl: "Voor staan in punten" },
          { en: "Winning tricks", es: "Ganar bazas", de: "Stiche gewinnen", nl: "Slagen winnen" },
          { en: "Having the highest card", es: "Tener la carta más alta", de: "Die höchste Karte haben", nl: "De hoogste kaart hebben" }
        ],
        correct: 0,
        explanation: {
          en: "Leading means playing the first card of a trick, which sets the suit that other players must follow if possible.",
          es: "Salir significa jugar la primera carta de una baza, que establece el palo que otros jugadores deben seguir si es posible.",
          de: "Ausspielen bedeutet, die erste Karte eines Stichs zu spielen, die die Farbe festlegt, die andere Spieler bedienen müssen, wenn möglich.",
          nl: "Uitkomen betekent de eerste kaart van een slag spelen, die het pak bepaalt dat andere spelers moeten volgen indien mogelijk."
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
