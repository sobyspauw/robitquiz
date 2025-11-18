// Quiz Template - Level 5: Bord spelletjes - Kaartspellen
(function() {
  const level5 = {
    name: {
      en: "Card Games - Master",
      es: "Juegos de Cartas - Maestro",
      de: "Kartenspiele - Meister",
      nl: "Kaartspellen - Meester"
    },
    questions: [
      {
        question: {
          en: "In Bridge, what is a 'Yarborough'?",
          es: "En Bridge, ¿qué es un 'Yarborough'?",
          de: "Was ist ein 'Yarborough' beim Bridge?",
          nl: "Wat is een 'Yarborough' bij Bridge?"
        },
        options: [
          { en: "A hand with no card higher than 9", es: "Una mano sin carta más alta que 9", de: "Ein Blatt ohne Karte höher als 9", nl: "Een hand zonder kaart hoger dan 9" },
          { en: "All four aces in one hand", es: "Los cuatro ases en una mano", de: "Alle vier Asse in einer Hand", nl: "Alle vier azen in één hand" },
          { en: "Bidding and making 7 no-trump", es: "Pujar y hacer 7 sin triunfo", de: "7 ohne Trumpf bieten und machen", nl: "7 zonder troef bieden en maken" },
          { en: "A void suit in your hand", es: "Un palo vacío en tu mano", de: "Eine leere Farbe in deiner Hand", nl: "Een lege kleur in je hand" }
        ],
        correct: 0,
        explanation: {
          en: "A Yarborough is a hand containing no card higher than a 9, named after the Earl of Yarborough who reportedly bet against such hands occurring.",
          es: "Un Yarborough es una mano que no contiene ninguna carta más alta que un 9, nombrada en honor al Conde de Yarborough quien supuestamente apostó contra la ocurrencia de tales manos.",
          de: "Ein Yarborough ist ein Blatt ohne Karte höher als eine 9, benannt nach dem Earl of Yarborough, der angeblich gegen das Auftreten solcher Blätter wettete.",
          nl: "Een Yarborough is een hand zonder kaart hoger dan een 9, genoemd naar de Earl of Yarborough die naar verluidt wed tegen het voorkomen van dergelijke handen."
        }
      },
      {
        question: {
          en: "What is the 'Morton's Fork Coup' in Bridge?",
          es: "¿Qué es el 'Morton's Fork Coup' en Bridge?",
          de: "Was ist der 'Morton's Fork Coup' beim Bridge?",
          nl: "Wat is de 'Morton's Fork Coup' bij Bridge?"
        },
        options: [
          { en: "A play forcing opponent to lose either way", es: "Una jugada que obliga al oponente a perder de cualquier manera", de: "Ein Spiel das den Gegner zwingt so oder so zu verlieren", nl: "Een speelwijze die tegenstander dwingt hoe dan ook te verliezen" },
          { en: "Bidding with a weak hand", es: "Pujar con una mano débil", de: "Mit einem schwachen Blatt bieten", nl: "Bieden met een zwakke hand" },
          { en: "Leading trump early", es: "Liderar triunfo temprano", de: "Früh Trumpf ausspielen", nl: "Vroeg troef spelen" },
          { en: "Discarding winners", es: "Descartar ganadores", de: "Gewinner abwerfen", nl: "Winnaars weggooien" }
        ],
        correct: 0,
        explanation: {
          en: "Morton's Fork Coup is an endplay where a defender is forced to choose between two losing options, similar to the historical tax dilemma of Morton's Fork.",
          es: "Morton's Fork Coup es una jugada final donde un defensor se ve obligado a elegir entre dos opciones perdedoras, similar al dilema fiscal histórico de Morton's Fork.",
          de: "Morton's Fork Coup ist ein Endspiel bei dem ein Verteidiger gezwungen wird zwischen zwei verlierenden Optionen zu wählen, ähnlich dem historischen Steuerdilemma von Morton's Fork.",
          nl: "Morton's Fork Coup is een eindspel waarbij een verdediger gedwongen wordt te kiezen tussen twee verliezende opties, vergelijkbaar met het historische belastingdilemma van Morton's Fork."
        }
      },
      {
        question: {
          en: "In poker, what does ICM stand for?",
          es: "En el póker, ¿qué significa ICM?",
          de: "Was bedeutet ICM beim Poker?",
          nl: "Wat betekent ICM bij poker?"
        },
        options: [
          { en: "International Card Model", es: "Modelo de Cartas Internacional", de: "Internationales Kartenmodell", nl: "Internationaal Kaartenmodel" },
          { en: "Independent Chip Model", es: "Modelo de Fichas Independiente", de: "Unabhängiges Chip-Modell", nl: "Onafhankelijk Fiche Model" },
          { en: "Initial Card Method", es: "Método de Carta Inicial", de: "Anfangskartenmethode", nl: "Initiële Kaart Methode" },
          { en: "Implied Card Mathematics", es: "Matemáticas de Cartas Implícitas", de: "Implizierte Kartenmathematik", nl: "Geïmpliceerde Kaart Wiskunde" }
        ],
        correct: 1,
        explanation: {
          en: "ICM (Independent Chip Model) is a mathematical model used in poker tournaments to calculate the monetary value of chip stacks based on payout structures.",
          es: "ICM (Modelo de Fichas Independiente) es un modelo matemático usado en torneos de póker para calcular el valor monetario de las pilas de fichas basado en estructuras de pago.",
          de: "ICM (Unabhängiges Chip-Modell) ist ein mathematisches Modell in Pokerturnieren zur Berechnung des Geldwerts von Chip-Stacks basierend auf Auszahlungsstrukturen.",
          nl: "ICM (Onafhankelijk Fiche Model) is een wiskundig model gebruikt in pokertournooien om de monetaire waarde van fichestapels te berekenen gebaseerd op uitbetalingsstructuren."
        }
      },
      {
        question: {
          en: "What is a 'squeez play' in Bridge?",
          es: "¿Qué es una 'jugada de apretón' en Bridge?",
          de: "Was ist ein 'Squeeze Play' beim Bridge?",
          nl: "Wat is een 'squeeze play' bij Bridge?"
        },
        options: [
          { en: "Forcing opponent to discard a winner", es: "Obligar al oponente a descartar un ganador", de: "Den Gegner zwingen einen Gewinner abzuwerfen", nl: "Tegenstander dwingen een winnaar weg te gooien" },
          { en: "Bidding aggressively", es: "Pujar agresivamente", de: "Aggressiv bieten", nl: "Agressief bieden" },
          { en: "Playing all trumps quickly", es: "Jugar todos los triunfos rápidamente", de: "Alle Trümpfe schnell spielen", nl: "Alle troeven snel spelen" },
          { en: "Doubling opponent's contract", es: "Doblar el contrato del oponente", de: "Den Kontrakt des Gegners verdoppeln", nl: "Het contract van de tegenstander verdubbelen" }
        ],
        correct: 0,
        explanation: {
          en: "A squeeze play forces an opponent to discard cards, ultimately losing control in one or more suits because they cannot keep all their potential winners.",
          es: "Una jugada de apretón obliga a un oponente a descartar cartas, perdiendo finalmente el control en uno o más palos porque no pueden mantener todos sus posibles ganadores.",
          de: "Ein Squeeze Play zwingt einen Gegner Karten abzuwerfen, wodurch er letztendlich die Kontrolle in einer oder mehreren Farben verliert weil er nicht alle potenziellen Gewinner behalten kann.",
          nl: "Een squeeze play dwingt een tegenstander kaarten weg te gooien, waardoor ze uiteindelijk controle verliezen in één of meer kleuren omdat ze niet alle potentiële winnaars kunnen houden."
        }
      },
      {
        question: {
          en: "In Omaha poker, how many hole cards must you use?",
          es: "En Omaha poker, ¿cuántas cartas ocultas debes usar?",
          de: "Wie viele verdeckte Karten muss man beim Omaha Poker verwenden?",
          nl: "Hoeveel gesloten kaarten moet je gebruiken bij Omaha poker?"
        },
        options: [
          { en: "Any number", es: "Cualquier número", de: "Beliebige Anzahl", nl: "Elk aantal" },
          { en: "Exactly 1", es: "Exactamente 1", de: "Genau 1", nl: "Precies 1" },
          { en: "Exactly 2", es: "Exactamente 2", de: "Genau 2", nl: "Precies 2" },
          { en: "At least 2", es: "Al menos 2", de: "Mindestens 2", nl: "Minstens 2" }
        ],
        correct: 2,
        explanation: {
          en: "In Omaha, you must use exactly 2 of your 4 hole cards and exactly 3 of the 5 community cards to make your best five-card hand.",
          es: "En Omaha, debes usar exactamente 2 de tus 4 cartas ocultas y exactamente 3 de las 5 cartas comunitarias para hacer tu mejor mano de cinco cartas.",
          de: "Beim Omaha muss man genau 2 der 4 verdeckten Karten und genau 3 der 5 Gemeinschaftskarten verwenden um das beste Fünf-Karten-Blatt zu bilden.",
          nl: "Bij Omaha moet je precies 2 van je 4 gesloten kaarten en precies 3 van de 5 gemeenschappelijke kaarten gebruiken om je beste vijf-kaarten hand te maken."
        }
      },
      {
        question: {
          en: "What is 'card counting' in Blackjack?",
          es: "¿Qué es 'contar cartas' en Blackjack?",
          de: "Was ist 'Kartenzählen' beim Blackjack?",
          nl: "Wat is 'kaarten tellen' bij Blackjack?"
        },
        options: [
          { en: "Memorizing all cards played", es: "Memorizar todas las cartas jugadas", de: "Alle gespielten Karten auswendig lernen", nl: "Alle gespeelde kaarten onthouden" },
          { en: "Tracking ratio of high to low cards remaining", es: "Rastrear la proporción de cartas altas a bajas restantes", de: "Das Verhältnis verbleibender hoher zu niedrigen Karten verfolgen", nl: "Verhouding van hoge tot lage overgebleven kaarten bijhouden" },
          { en: "Counting to 21", es: "Contar hasta 21", de: "Bis 21 zählen", nl: "Tot 21 tellen" },
          { en: "Calculating probability of busting", es: "Calcular probabilidad de quebrar", de: "Wahrscheinlichkeit des Überkaufens berechnen", nl: "Kans op doodgaan berekenen" }
        ],
        correct: 1,
        explanation: {
          en: "Card counting tracks the ratio of high to low cards remaining in the deck to determine when the player has an advantage, typically using systems like Hi-Lo.",
          es: "Contar cartas rastrea la proporción de cartas altas a bajas restantes en el mazo para determinar cuándo el jugador tiene ventaja, típicamente usando sistemas como Hi-Lo.",
          de: "Kartenzählen verfolgt das Verhältnis von hohen zu niedrigen Karten im verbleibenden Deck um zu bestimmen wann der Spieler einen Vorteil hat, typischerweise mit Systemen wie Hi-Lo.",
          nl: "Kaarten tellen houdt de verhouding van hoge tot lage kaarten bij die in het deck overblijven om te bepalen wanneer de speler voordeel heeft, meestal met systemen zoals Hi-Lo."
        }
      },
      {
        question: {
          en: "In Tarot card games, how many cards are in the trump suit?",
          es: "En los juegos de cartas de Tarot, ¿cuántas cartas hay en el palo de triunfo?",
          de: "Wie viele Karten hat die Trumpffarbe in Tarot-Kartenspielen?",
          nl: "Hoeveel kaarten zitten er in de troefkleur bij Tarotkaartspellen?"
        },
        options: [
          { en: "14", es: "14", de: "14", nl: "14" },
          { en: "21", es: "21", de: "21", nl: "21" },
          { en: "22", es: "22", de: "22", nl: "22" },
          { en: "26", es: "26", de: "26", nl: "26" }
        ],
        correct: 2,
        explanation: {
          en: "In traditional Tarot card games, there are 22 trump cards (the Major Arcana), numbered 0-21, plus the Fool which has special properties.",
          es: "En los juegos de cartas de Tarot tradicionales, hay 22 cartas de triunfo (los Arcanos Mayores), numeradas 0-21, más el Loco que tiene propiedades especiales.",
          de: "In traditionellen Tarot-Kartenspielen gibt es 22 Trumpfkarten (die Großen Arkana), nummeriert 0-21, plus den Narren der besondere Eigenschaften hat.",
          nl: "In traditionele Tarotkaartspellen zijn er 22 troefkaarten (de Grote Arcana), genummerd 0-21, plus de Dwaas die speciale eigenschappen heeft."
        }
      },
      {
        question: {
          en: "What is 'position' in poker terminology?",
          es: "¿Qué es 'posición' en terminología de póker?",
          de: "Was ist 'Position' in Poker-Terminologie?",
          nl: "Wat is 'positie' in pokerjargon?"
        },
        options: [
          { en: "Where you sit at the table", es: "Dónde te sientas en la mesa", de: "Wo man am Tisch sitzt", nl: "Waar je aan de tafel zit" },
          { en: "Your order of acting relative to dealer button", es: "Tu orden de acción relativo al botón del repartidor", de: "Deine Handlungsreihenfolge relativ zum Dealer-Button", nl: "Je volgorde van handelen ten opzichte van de dealer button" },
          { en: "Your chip stack size", es: "El tamaño de tu pila de fichas", de: "Deine Chip-Stack-Größe", nl: "Je fichestapelgrootte" },
          { en: "The strength of your hand", es: "La fuerza de tu mano", de: "Die Stärke deines Blatts", nl: "De sterkte van je hand" }
        ],
        correct: 1,
        explanation: {
          en: "Position refers to your order of acting relative to the dealer button. Late position (acting last) is advantageous as you have more information about opponents' actions.",
          es: "Posición se refiere a tu orden de acción relativo al botón del repartidor. Posición tardía (actuar último) es ventajoso ya que tienes más información sobre las acciones de los oponentes.",
          de: "Position bezieht sich auf deine Handlungsreihenfolge relativ zum Dealer-Button. Späte Position (zuletzt handeln) ist vorteilhaft da man mehr Informationen über Gegnerbewegungen hat.",
          nl: "Positie verwijst naar je volgorde van handelen ten opzichte van de dealer button. Late positie (als laatste handelen) is voordelig omdat je meer informatie hebt over acties van tegenstanders."
        }
      },
      {
        question: {
          en: "In Cribbage, what is a 'double run'?",
          es: "En Cribbage, ¿qué es una 'doble escalera'?",
          de: "Was ist ein 'Doppellauf' beim Cribbage?",
          nl: "Wat is een 'dubbele run' bij Cribbage?"
        },
        options: [
          { en: "Two separate runs in one hand", es: "Dos escaleras separadas en una mano", de: "Zwei getrennte Läufe in einer Hand", nl: "Twee afzonderlijke runs in één hand" },
          { en: "A run with a pair creating two runs", es: "Una escalera con un par creando dos escaleras", de: "Ein Lauf mit einem Paar das zwei Läufe bildet", nl: "Een run met een paar dat twee runs creëert" },
          { en: "Running the board twice", es: "Correr el tablero dos veces", de: "Das Brett zweimal durchlaufen", nl: "Het bord twee keer doorlopen" },
          { en: "Scoring 15 twice", es: "Puntuar 15 dos veces", de: "15 zweimal punkten", nl: "15 twee keer scoren" }
        ],
        correct: 1,
        explanation: {
          en: "A double run in Cribbage is a run of three with one card paired, creating two runs of three. For example, 3-3-4-5 creates runs 3-4-5 and 3-4-5.",
          es: "Una doble escalera en Cribbage es una escalera de tres con una carta emparejada, creando dos escaleras de tres. Por ejemplo, 3-3-4-5 crea escaleras 3-4-5 y 3-4-5.",
          de: "Ein Doppellauf beim Cribbage ist ein Lauf von drei mit einer gepaarten Karte, was zwei Läufe von drei bildet. Zum Beispiel bildet 3-3-4-5 Läufe 3-4-5 und 3-4-5.",
          nl: "Een dubbele run bij Cribbage is een run van drie met één kaart gepaard, wat twee runs van drie creëert. Bijvoorbeeld, 3-3-4-5 creëert runs 3-4-5 en 3-4-5."
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
          { en: "Taking long time to make decisions", es: "Tomar mucho tiempo para tomar decisiones", de: "Lange für Entscheidungen brauchen", nl: "Lang de tijd nemen voor beslissingen" },
          { en: "Playing weak with a strong hand to trap opponents", es: "Jugar débil con una mano fuerte para atrapar oponentes", de: "Schwach spielen mit einem starken Blatt um Gegner zu fangen", nl: "Zwak spelen met een sterke hand om tegenstanders te vangen" },
          { en: "Folding frequently", es: "Retirarse frecuentemente", de: "Häufig folden", nl: "Vaak passen" },
          { en: "Betting minimum amounts", es: "Apostar cantidades mínimas", de: "Mindestbeträge setzen", nl: "Minimumbedragen inzetten" }
        ],
        correct: 1,
        explanation: {
          en: "Slow playing is deceptively playing a strong hand weakly (checking or calling instead of betting/raising) to induce opponents to bet more, building a larger pot.",
          es: "Jugar lento es jugar engañosamente una mano fuerte de manera débil (pasar o igualar en lugar de apostar/subir) para inducir a los oponentes a apostar más, construyendo un bote más grande.",
          de: "Slow Playing bedeutet täuschend ein starkes Blatt schwach zu spielen (checken oder callen statt setzen/erhöhen) um Gegner zu größeren Einsätzen zu verleiten und einen größeren Pot aufzubauen.",
          nl: "Slow playing is bedrieglijk een sterke hand zwak spelen (checken of callen in plaats van inzetten/verhogen) om tegenstanders aan te moedigen meer in te zetten, een grotere pot opbouwend."
        }
      },
      {
        question: {
          en: "In Canasta, what is the minimum count required to go out?",
          es: "En Canasta, ¿cuál es el recuento mínimo requerido para salir?",
          de: "Was ist die Mindestpunktzahl beim Canasta um auszugehen?",
          nl: "Wat is het minimale aantal punten bij Canasta om uit te gaan?"
        },
        options: [
          { en: "No minimum", es: "Sin mínimo", de: "Kein Minimum", nl: "Geen minimum" },
          { en: "At least one canasta", es: "Al menos una canasta", de: "Mindestens eine Canasta", nl: "Minstens één canasta" },
          { en: "50 points", es: "50 puntos", de: "50 Punkte", nl: "50 punten" },
          { en: "100 points", es: "100 puntos", de: "100 Punkte", nl: "100 punten" }
        ],
        correct: 1,
        explanation: {
          en: "In Canasta, you must have at least one canasta (seven cards of the same rank) melded before you can go out by playing all your cards.",
          es: "En Canasta, debes tener al menos una canasta (siete cartas del mismo rango) combinada antes de poder salir jugando todas tus cartas.",
          de: "Beim Canasta muss man mindestens eine Canasta (sieben Karten gleichen Ranges) gemeldet haben bevor man ausgehen kann indem man alle Karten spielt.",
          nl: "Bij Canasta moet je minstens één canasta (zeven kaarten van dezelfde rang) gemeld hebben voordat je kunt uitgaan door al je kaarten te spelen."
        }
      },
      {
        question: {
          en: "What is a 'Stayman' convention in Bridge?",
          es: "¿Qué es una convención 'Stayman' en Bridge?",
          de: "Was ist eine 'Stayman'-Konvention beim Bridge?",
          nl: "Wat is een 'Stayman' conventie bij Bridge?"
        },
        options: [
          { en: "Bidding 2♣ after 1NT to ask for majors", es: "Pujar 2♣ después de 1NT para preguntar por mayores", de: "2♣ nach 1NT bieten um nach Oberfarben zu fragen", nl: "2♣ bieden na 1NT om naar majeurs te vragen" },
          { en: "Always bidding game with 12+ points", es: "Siempre pujar juego con 12+ puntos", de: "Immer Spiel bieten mit 12+ Punkten", nl: "Altijd game bieden met 12+ punten" },
          { en: "Leading fourth-best from longest suit", es: "Liderar cuarta mejor del palo más largo", de: "Vierthöchste aus der längsten Farbe ausspielen", nl: "Vierde beste uit langste kleur spelen" },
          { en: "Doubling for penalties", es: "Doblar por penalizaciones", de: "Für Strafen verdoppeln", nl: "Verdubbelen voor straffen" }
        ],
        correct: 0,
        explanation: {
          en: "Stayman is a bidding convention where 2♣ is bid in response to partner's 1NT opening to ask if they have a four-card major suit (hearts or spades).",
          es: "Stayman es una convención de puja donde se puja 2♣ en respuesta a la apertura 1NT del compañero para preguntar si tiene un palo mayor de cuatro cartas (corazones o picas).",
          de: "Stayman ist eine Bietkonvention bei der 2♣ als Antwort auf die 1NT-Eröffnung des Partners geboten wird um zu fragen ob er eine Vier-Karten-Oberfarbe (Herz oder Pik) hat.",
          nl: "Stayman is een biedconventie waarbij 2♣ geboden wordt als reactie op de 1NT opening van je partner om te vragen of ze een vier-kaarten majeur (harten of schoppen) hebben."
        }
      },
      {
        question: {
          en: "In poker, what is 'pot odds'?",
          es: "En el póker, ¿qué son las 'pot odds'?",
          de: "Was sind 'Pot Odds' beim Poker?",
          nl: "Wat zijn 'pot odds' bij poker?"
        },
        options: [
          { en: "Probability of winning the pot", es: "Probabilidad de ganar el bote", de: "Wahrscheinlichkeit den Pot zu gewinnen", nl: "Kans om de pot te winnen" },
          { en: "Ratio of pot size to bet you must call", es: "Proporción del tamaño del bote a la apuesta que debes igualar", de: "Verhältnis von Pot-Größe zu Einsatz den man callen muss", nl: "Verhouding van potgrootte tot inzet die je moet callen" },
          { en: "Odds of getting best hand", es: "Probabilidades de obtener la mejor mano", de: "Chancen das beste Blatt zu bekommen", nl: "Kansen om de beste hand te krijgen" },
          { en: "Amount you can win", es: "Cantidad que puedes ganar", de: "Betrag den man gewinnen kann", nl: "Bedrag dat je kunt winnen" }
        ],
        correct: 1,
        explanation: {
          en: "Pot odds are the ratio between the current pot size and the cost of a contemplated call, used to determine if calling is mathematically profitable.",
          es: "Las pot odds son la proporción entre el tamaño actual del bote y el costo de una igualación contemplada, usadas para determinar si igualar es matemáticamente rentable.",
          de: "Pot Odds sind das Verhältnis zwischen der aktuellen Pot-Größe und den Kosten eines erwogenen Calls, verwendet um zu bestimmen ob Callen mathematisch profitabel ist.",
          nl: "Pot odds zijn de verhouding tussen de huidige potgrootte en de kosten van een overwogen call, gebruikt om te bepalen of callen wiskundig winstgevend is."
        }
      },
      {
        question: {
          en: "What is 'underleading' in Bridge?",
          es: "¿Qué es 'underlead' en Bridge?",
          de: "Was ist 'Unterführen' beim Bridge?",
          nl: "Wat is 'underleading' bij Bridge?"
        },
        options: [
          { en: "Leading from a weak hand", es: "Liderar desde una mano débil", de: "Aus einem schwachen Blatt ausspielen", nl: "Leiden vanuit een zwakke hand" },
          { en: "Leading low card from suit with honor", es: "Liderar carta baja de palo con honor", de: "Niedrige Karte aus Farbe mit Ehrenkarte ausspielen", nl: "Lage kaart leiden uit kleur met eerkaart" },
          { en: "Not bidding high enough", es: "No pujar lo suficientemente alto", de: "Nicht hoch genug bieten", nl: "Niet hoog genoeg bieden" },
          { en: "Passing when you should bid", es: "Pasar cuando deberías pujar", de: "Passen wenn man bieten sollte", nl: "Passen wanneer je zou moeten bieden" }
        ],
        correct: 1,
        explanation: {
          en: "Underleading means leading a low card from a suit that contains one or more high honors (Ace, King, Queen), typically done to deceive opponents or finesse.",
          es: "Underlead significa liderar una carta baja de un palo que contiene uno o más honores altos (As, Rey, Reina), típicamente hecho para engañar oponentes o hacer finesse.",
          de: "Unterführen bedeutet eine niedrige Karte aus einer Farbe auszuspielen die eine oder mehrere hohe Ehrenkarten (Ass, König, Dame) enthält, typischerweise um Gegner zu täuschen oder zu schneiden.",
          nl: "Underleading betekent een lage kaart leiden uit een kleur die één of meer hoge eerkaar ten (Aas, Koning, Vrouw) bevat, meestal gedaan om tegenstanders te misleiden of te finessen."
        }
      },
      {
        question: {
          en: "In Skat, what is the 'Skat'?",
          es: "En Skat, ¿qué es el 'Skat'?",
          de: "Was ist der 'Skat' beim Skat?",
          nl: "Wat is de 'Skat' bij Skat?"
        },
        options: [
          { en: "The trump suit", es: "El palo de triunfo", de: "Die Trumpffarbe", nl: "De troefkleur" },
          { en: "Two cards set aside after dealing", es: "Dos cartas reservadas después de repartir", de: "Zwei Karten die nach dem Austeilen beiseite gelegt werden", nl: "Twee kaarten opzij gelegd na het delen" },
          { en: "The final trick", es: "La baza final", de: "Der letzte Stich", nl: "De laatste slag" },
          { en: "The dealer position", es: "La posición del repartidor", de: "Die Geberposition", nl: "De delerspositie" }
        ],
        correct: 1,
        explanation: {
          en: "In Skat, the Skat refers to two cards dealt face-down and set aside, which the declarer may pick up and exchange with cards from their hand.",
          es: "En Skat, el Skat se refiere a dos cartas repartidas boca abajo y reservadas, que el declarante puede recoger e intercambiar con cartas de su mano.",
          de: "Beim Skat bezieht sich der Skat auf zwei verdeckt ausgeteilte und beiseite gelegte Karten, die der Alleinspieler aufnehmen und mit Karten aus seiner Hand tauschen kann.",
          nl: "Bij Skat verwijst de Skat naar twee kaarten die gesloten gedeeld en opzij gelegd worden, die de alleenspeler kan oppakken en ruilen met kaarten uit hun hand."
        }
      },
      {
        question: {
          en: "What is 'GTO' strategy in poker?",
          es: "¿Qué es la estrategia 'GTO' en el póker?",
          de: "Was ist 'GTO'-Strategie beim Poker?",
          nl: "Wat is 'GTO' strategie bij poker?"
        },
        options: [
          { en: "Game Theory Optimal", es: "Óptima de Teoría de Juegos", de: "Spieltheoretisch Optimal", nl: "Game Theory Optimaal" },
          { en: "Good Time Odds", es: "Probabilidades de Buen Tiempo", de: "Gute Zeit Chancen", nl: "Goede Tijd Odds" },
          { en: "Great Table Organization", es: "Gran Organización de Mesa", de: "Großartige Tischorganisation", nl: "Geweldige Tafelorganisatie" },
          { en: "Guaranteed Top-up", es: "Recarga Garantizada", de: "Garantierte Aufstockung", nl: "Gegarandeerde Aanvulling" }
        ],
        correct: 0,
        explanation: {
          en: "GTO (Game Theory Optimal) is a poker strategy that makes you unexploitable by balancing your ranges so opponents cannot profit regardless of their strategy.",
          es: "GTO (Óptima de Teoría de Juegos) es una estrategia de póker que te hace inexplotable balanceando tus rangos para que los oponentes no puedan beneficiarse independientemente de su estrategia.",
          de: "GTO (Spieltheoretisch Optimal) ist eine Poker-Strategie die einen nicht ausbeutbar macht indem man seine Ranges ausbalanciert sodass Gegner unabhängig von ihrer Strategie keinen Profit machen können.",
          nl: "GTO (Game Theory Optimaal) is een pokerstrategie die je niet-exploiteerbaar maakt door je ranges te balanceren zodat tegenstanders ongeacht hun strategie geen winst kunnen maken."
        }
      },
      {
        question: {
          en: "In Pinochle, what is a 'marriage'?",
          es: "En Pinochle, ¿qué es un 'matrimonio'?",
          de: "Was ist eine 'Hochzeit' beim Pinochle?",
          nl: "Wat is een 'huwelijk' bij Pinochle?"
        },
        options: [
          { en: "King and Queen of same suit", es: "Rey y Reina del mismo palo", de: "König und Dame der gleichen Farbe", nl: "Koning en Vrouw van dezelfde kleur" },
          { en: "Two pairs", es: "Dos pares", de: "Zwei Paare", nl: "Twee paren" },
          { en: "Partnership winning", es: "Asociación ganadora", de: "Partnerschaft gewinnt", nl: "Partnerschap wint" },
          { en: "Jack and Queen together", es: "Jota y Reina juntas", de: "Bube und Dame zusammen", nl: "Boer en Vrouw samen" }
        ],
        correct: 0,
        explanation: {
          en: "In Pinochle, a marriage is a King and Queen of the same suit melded together, worth 20 points (common marriage) or 40 points (royal marriage in trump).",
          es: "En Pinochle, un matrimonio es un Rey y Reina del mismo palo combinados juntos, vale 20 puntos (matrimonio común) o 40 puntos (matrimonio real en triunfo).",
          de: "Beim Pinochle ist eine Hochzeit ein König und eine Dame der gleichen Farbe zusammen gemeldet, wert 20 Punkte (gewöhnliche Hochzeit) oder 40 Punkte (königliche Hochzeit in Trumpf).",
          nl: "Bij Pinochle is een huwelijk een Koning en Vrouw van dezelfde kleur samen gemeld, waard 20 punten (gewoon huwelijk) of 40 punten (koninklijk huwelijk in troef)."
        }
      },
      {
        question: {
          en: "What is a 'wheel' in poker?",
          es: "¿Qué es una 'rueda' en el póker?",
          de: "Was ist ein 'Wheel' beim Poker?",
          nl: "Wat is een 'wheel' bij poker?"
        },
        options: [
          { en: "A-2-3-4-5 straight", es: "Escalera A-2-3-4-5", de: "A-2-3-4-5 Straße", nl: "A-2-3-4-5 straat" },
          { en: "Four of a kind", es: "Póker", de: "Vierling", nl: "Vier van een soort" },
          { en: "Dealer button rotation", es: "Rotación del botón del repartidor", de: "Dealer-Button-Rotation", nl: "Dealer button rotatie" },
          { en: "Full house with Aces", es: "Full house con Ases", de: "Full House mit Assen", nl: "Full House met Azen" }
        ],
        correct: 0,
        explanation: {
          en: "A wheel is the lowest possible straight: A-2-3-4-5, where the Ace counts as low. It's the best low hand in split-pot games like Omaha Hi-Lo.",
          es: "Una rueda es la escalera más baja posible: A-2-3-4-5, donde el As cuenta como bajo. Es la mejor mano baja en juegos de bote dividido como Omaha Hi-Lo.",
          de: "Ein Wheel ist die niedrigst mögliche Straße: A-2-3-4-5, wobei das Ass niedrig zählt. Es ist die beste Low-Hand in Split-Pot-Spielen wie Omaha Hi-Lo.",
          nl: "Een wheel is de laagst mogelijke straat: A-2-3-4-5, waarbij de Aas als laag telt. Het is de beste lage hand in split-pot spellen zoals Omaha Hi-Lo."
        }
      },
      {
        question: {
          en: "In Bridge, what is a 'Blackwood' convention?",
          es: "En Bridge, ¿qué es una convención 'Blackwood'?",
          de: "Was ist eine 'Blackwood'-Konvention beim Bridge?",
          nl: "Wat is een 'Blackwood' conventie bij Bridge?"
        },
        options: [
          { en: "Bidding 4NT to ask for aces", es: "Pujar 4NT para preguntar por ases", de: "4NT bieten um nach Assen zu fragen", nl: "4NT bieden om naar azen te vragen" },
          { en: "Always doubling opponents", es: "Siempre doblar a los oponentes", de: "Gegner immer verdoppeln", nl: "Tegenstanders altijd verdubbelen" },
          { en: "Leading spades first", es: "Liderar picas primero", de: "Zuerst Pik ausspielen", nl: "Eerst schoppen leiden" },
          { en: "Passing with weak hands", es: "Pasar con manos débiles", de: "Mit schwachen Blättern passen", nl: "Passen met zwakke handen" }
        ],
        correct: 0,
        explanation: {
          en: "Blackwood is a bidding convention where 4NT is bid to ask partner how many aces they hold, helping determine if the partnership can make slam.",
          es: "Blackwood es una convención de puja donde se puja 4NT para preguntar al compañero cuántos ases tiene, ayudando a determinar si la asociación puede hacer slam.",
          de: "Blackwood ist eine Bietkonvention bei der 4NT geboten wird um den Partner zu fragen wie viele Asse er hält, was hilft zu bestimmen ob die Partnerschaft Slam machen kann.",
          nl: "Blackwood is een biedconventie waarbij 4NT geboden wordt om de partner te vragen hoeveel azen ze hebben, wat helpt bepalen of het partnerschap slam kan maken."
        }
      },
      {
        question: {
          en: "What is 'table talk' in card games?",
          es: "¿Qué es 'table talk' en juegos de cartas?",
          de: "Was ist 'Table Talk' in Kartenspielen?",
          nl: "Wat is 'table talk' bij kaartspellen?"
        },
        options: [
          { en: "Casual conversation during play", es: "Conversación casual durante el juego", de: "Gelegentliche Unterhaltung während des Spiels", nl: "Casual gesprek tijdens het spel" },
          { en: "Illegal communication giving information about cards", es: "Comunicación ilegal dando información sobre cartas", de: "Illegale Kommunikation die Informationen über Karten gibt", nl: "Illegale communicatie die informatie geeft over kaarten" },
          { en: "Discussing strategy after the game", es: "Discutir estrategia después del juego", de: "Strategie nach dem Spiel besprechen", nl: "Strategie bespreken na het spel" },
          { en: "Announcing your plays", es: "Anunciar tus jugadas", de: "Deine Spielzüge ankündigen", nl: "Je speelzetten aankondigen" }
        ],
        correct: 1,
        explanation: {
          en: "Table talk refers to illegal or unethical communication during play that conveys information about one's hand or strategy to a partner, violating game rules.",
          es: "Table talk se refiere a comunicación ilegal o poco ética durante el juego que transmite información sobre la mano o estrategia de uno a un compañero, violando reglas del juego.",
          de: "Table Talk bezieht sich auf illegale oder unethische Kommunikation während des Spiels die Informationen über das eigene Blatt oder die Strategie an einen Partner weitergibt und Spielregeln verletzt.",
          nl: "Table talk verwijst naar illegale of onethische communicatie tijdens het spel die informatie over iemands hand of strategie aan een partner doorgeeft, in strijd met spelregels."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level5;
  } else if (typeof window !== 'undefined') {
    window.level5 = level5;
  }
})();
