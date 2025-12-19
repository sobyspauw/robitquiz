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
      },
      {
        question: {
          en: "In Bridge, what is a 'Bath Coup'?",
          es: "En Bridge, ¿qué es un 'Bath Coup'?",
          de: "Was ist ein 'Bath Coup' beim Bridge?",
          nl: "Wat is een 'Bath Coup' bij Bridge?"
        },
        options: [
          { en: "Holding up Ace with AJx to trap King", es: "Retener As con AJx para atrapar Rey", de: "Ass mit AJx zurückhalten um König zu fangen", nl: "Aas aanhouden met AJx om Koning te vangen" },
          { en: "Leading trump immediately", es: "Liderar triunfo inmediatamente", de: "Sofort Trumpf ausspielen", nl: "Direct troef leiden" },
          { en: "Bidding without honor cards", es: "Pujar sin cartas de honor", de: "Ohne Ehrenkarten bieten", nl: "Bieden zonder eerkaar ten" },
          { en: "Discarding all clubs", es: "Descartar todos los tréboles", de: "Alle Kreuz abwerfen", nl: "Alle klaveren weggooien" }
        ],
        correct: 0,
        explanation: {
          en: "The Bath Coup is a holdup play where declarer with AJx refuses the first lead of the King from the opponent, allowing them to continue leading into the AJ tenace.",
          es: "El Bath Coup es una jugada de retención donde el declarante con AJx rechaza el primer líder del Rey del oponente, permitiéndoles continuar liderando hacia la tenaza AJ.",
          de: "Der Bath Coup ist ein Rückhaltespiel bei dem der Alleinspieler mit AJx die erste Führung des Königs vom Gegner ablehnt und ihnen erlaubt weiter in die AJ-Gabel zu führen.",
          nl: "De Bath Coup is een aanhoudspel waarbij declarer met AJx de eerste leiding van de Koning van de tegenstander weigert, waardoor ze door kunnen gaan met leiden naar de AJ tenace."
        }
      },
      {
        question: {
          en: "What is 'range advantage' in poker?",
          es: "¿Qué es la 'ventaja de rango' en el póker?",
          de: "Was ist 'Range Vorteil' beim Poker?",
          nl: "Wat is 'range voordeel' bij poker?"
        },
        options: [
          { en: "Having more strong hands in your range than opponent", es: "Tener más manos fuertes en tu rango que el oponente", de: "Mehr starke Blätter in seiner Range haben als der Gegner", nl: "Meer sterke handen in je range hebben dan tegenstander" },
          { en: "Playing from late position", es: "Jugar desde posición tardía", de: "Aus später Position spielen", nl: "Spelen vanuit late positie" },
          { en: "Having more chips", es: "Tener más fichas", de: "Mehr Chips haben", nl: "Meer fiches hebben" },
          { en: "Knowing opponent's cards", es: "Conocer las cartas del oponente", de: "Die Karten des Gegners kennen", nl: "De kaarten van tegenstander kennen" }
        ],
        correct: 0,
        explanation: {
          en: "Range advantage means your range of possible hands is stronger overall than your opponent's range in a given situation, allowing you to bet more aggressively.",
          es: "La ventaja de rango significa que tu rango de posibles manos es más fuerte en general que el rango de tu oponente en una situación dada, permitiéndote apostar más agresivamente.",
          de: "Range Vorteil bedeutet dass die Range möglicher Blätter insgesamt stärker ist als die Range des Gegners in einer gegebenen Situation, was aggressiveres Setzen erlaubt.",
          nl: "Range voordeel betekent dat je range van mogelijke handen over het algemeen sterker is dan de range van je tegenstander in een gegeven situatie, waardoor je agressiever kunt inzetten."
        }
      },
      {
        question: {
          en: "In Hearts, what is 'control' of the Queen of Spades?",
          es: "En Hearts, ¿qué es el 'control' de la Reina de Picas?",
          de: "Was ist 'Kontrolle' über die Pik-Dame beim Hearts?",
          nl: "Wat is 'controle' van de Schoppen Vrouw bij Hearts?"
        },
        options: [
          { en: "Holding Ace or King of Spades to avoid taking Queen", es: "Tener As o Rey de Picas para evitar tomar la Reina", de: "Pik-Ass oder König halten um die Dame zu vermeiden", nl: "Schoppen Aas of Koning houden om Vrouw te vermijden" },
          { en: "Always leading spades", es: "Siempre liderar picas", de: "Immer Pik ausspielen", nl: "Altijd schoppen leiden" },
          { en: "Shooting the moon with the Queen", es: "Disparar a la luna con la Reina", de: "Den Mond schießen mit der Dame", nl: "Naar de maan schieten met de Vrouw" },
          { en: "Discarding the Queen early", es: "Descartar la Reina temprano", de: "Die Dame früh abwerfen", nl: "De Vrouw vroeg weggooien" }
        ],
        correct: 0,
        explanation: {
          en: "Having control means holding the Ace or King of Spades, which protects you from being forced to take the Queen of Spades (13 penalty points) in a trick.",
          es: "Tener control significa tener el As o Rey de Picas, lo que te protege de ser obligado a tomar la Reina de Picas (13 puntos de penalización) en una baza.",
          de: "Kontrolle zu haben bedeutet Pik-Ass oder König zu halten, was einen davor schützt gezwungen zu werden die Pik-Dame (13 Strafpunkte) in einem Stich zu nehmen.",
          nl: "Controle hebben betekent de Schoppen Aas of Koning houden, wat je beschermt tegen gedwongen worden de Schoppen Vrouw (13 strafpunten) in een slag te nemen."
        }
      },
      {
        question: {
          en: "What is 'implied odds' in poker?",
          es: "¿Qué son las 'probabilidades implícitas' en el póker?",
          de: "Was sind 'Implied Odds' beim Poker?",
          nl: "Wat zijn 'implied odds' bij poker?"
        },
        options: [
          { en: "Estimated money to win on future betting rounds", es: "Dinero estimado para ganar en rondas de apuestas futuras", de: "Geschätztes Geld das in zukünftigen Setzrunden gewonnen werden kann", nl: "Geschat geld te winnen in toekomstige inzetrondes" },
          { en: "Current pot odds", es: "Probabilidades actuales del bote", de: "Aktuelle Pot Odds", nl: "Huidige pot odds" },
          { en: "Probability of winning hand", es: "Probabilidad de ganar la mano", de: "Wahrscheinlichkeit die Hand zu gewinnen", nl: "Kans om de hand te winnen" },
          { en: "Suggested betting amounts", es: "Cantidades de apuesta sugeridas", de: "Vorgeschlagene Einsatzbeträge", nl: "Voorgestelde inzetbedragen" }
        ],
        correct: 0,
        explanation: {
          en: "Implied odds consider not just the current pot, but the additional money you expect to win on future streets if you hit your hand, making marginal calls more profitable.",
          es: "Las probabilidades implícitas consideran no solo el bote actual, sino el dinero adicional que esperas ganar en calles futuras si completas tu mano, haciendo que las igualaciones marginales sean más rentables.",
          de: "Implied Odds berücksichtigen nicht nur den aktuellen Pot, sondern das zusätzliche Geld das man in zukünftigen Streets zu gewinnen erwartet wenn man seine Hand trifft, was marginale Calls profitabler macht.",
          nl: "Implied odds beschouwen niet alleen de huidige pot, maar het extra geld dat je verwacht te winnen op toekomstige streets als je je hand raakt, waardoor marginale calls winstgevender worden."
        }
      },
      {
        question: {
          en: "In Bridge, what is 'trump promotion'?",
          es: "En Bridge, ¿qué es la 'promoción de triunfo'?",
          de: "Was ist 'Trumpfförderung' beim Bridge?",
          nl: "Wat is 'troef promotie' bij Bridge?"
        },
        options: [
          { en: "Defensive play forcing declarer to ruff, promoting defender's trump", es: "Jugada defensiva forzando al declarante a cortar, promoviendo el triunfo del defensor", de: "Defensivspiel das den Alleinspieler zum Stechen zwingt und Verteidiger-Trumpf fördert", nl: "Verdedigend spel dat declarer dwingt te snijden, waardoor verdediger's troef gepromoveerd wordt" },
          { en: "Bidding more trumps", es: "Pujar más triunfos", de: "Mehr Trümpfe bieten", nl: "Meer troeven bieden" },
          { en: "Leading trump early", es: "Liderar triunfo temprano", de: "Früh Trumpf ausspielen", nl: "Vroeg troef leiden" },
          { en: "Ruffing with high trumps", es: "Cortar con triunfos altos", de: "Mit hohen Trümpfen stechen", nl: "Snijden met hoge troeven" }
        ],
        correct: 0,
        explanation: {
          en: "Trump promotion is a defensive technique where defenders force declarer to ruff with a high trump, promoting a lower trump in a defender's hand to winning status.",
          es: "La promoción de triunfo es una técnica defensiva donde los defensores fuerzan al declarante a cortar con un triunfo alto, promoviendo un triunfo más bajo en la mano de un defensor a estado ganador.",
          de: "Trumpfförderung ist eine Defensivtechnik bei der Verteidiger den Alleinspieler zwingen mit einem hohen Trumpf zu stechen, wodurch ein niedrigerer Trumpf in der Hand eines Verteidigers zum Gewinner wird.",
          nl: "Troef promotie is een verdedigende techniek waarbij verdedigers declarer dwingen te snijden met een hoge troef, waardoor een lagere troef in de hand van een verdediger tot winnaar gepromoveerd wordt."
        }
      },
      {
        question: {
          en: "What is 'leveling' in poker?",
          es: "¿Qué es 'leveling' en el póker?",
          de: "Was ist 'Leveling' beim Poker?",
          nl: "Wat is 'leveling' bij poker?"
        },
        options: [
          { en: "Overthinking what opponent thinks you think they think", es: "Pensar demasiado en qué piensa el oponente que piensas que él piensa", de: "Zu viel darüber nachdenken was der Gegner denkt dass du denkst dass er denkt", nl: "Te veel nadenken over wat tegenstander denkt dat jij denkt dat hij denkt" },
          { en: "Playing at your skill level", es: "Jugar a tu nivel de habilidad", de: "Auf deinem Fähigkeitsniveau spielen", nl: "Spelen op je vaardigheidsniveau" },
          { en: "Gradually increasing bets", es: "Aumentar gradualmente las apuestas", de: "Einsätze schrittweise erhöhen", nl: "Inzetten geleidelijk verhogen" },
          { en: "Maintaining chip stack", es: "Mantener pila de fichas", de: "Chip-Stack beibehalten", nl: "Fiche stapel behouden" }
        ],
        correct: 0,
        explanation: {
          en: "Leveling refers to overthinking the meta-game of 'I think that they think that I think...' which can lead to making suboptimal plays by outthinking yourself.",
          es: "Leveling se refiere a pensar demasiado en el meta-juego de 'pienso que ellos piensan que yo pienso...' lo que puede llevar a hacer jugadas subóptimas al pensar demasiado.",
          de: "Leveling bezieht sich auf das Überdenken des Meta-Spiels von 'ich denke dass sie denken dass ich denke...' was zu suboptimalen Spielzügen führen kann indem man sich selbst überdenkt.",
          nl: "Leveling verwijst naar het te veel nadenken over het meta-spel van 'ik denk dat zij denken dat ik denk...' wat kan leiden tot suboptimale speelzetten door jezelf te slim af te zijn."
        }
      },
      {
        question: {
          en: "In Sheepshead, what is unique about the permanent trump structure?",
          es: "En Sheepshead, ¿qué es único sobre la estructura de triunfo permanente?",
          de: "Was ist einzigartig an der permanenten Trumpfstruktur beim Sheepshead?",
          nl: "Wat is uniek aan de permanente troefstructuur bij Sheepshead?"
        },
        options: [
          { en: "All Queens, Jacks, and Diamonds are always trump", es: "Todas las Reinas, Jotas y Diamantes son siempre triunfo", de: "Alle Damen, Buben und Karos sind immer Trumpf", nl: "Alle Vrouwen, Boeren en Ruiten zijn altijd troef" },
          { en: "Only Aces are trump", es: "Solo los Ases son triunfo", de: "Nur Asse sind Trumpf", nl: "Alleen Azen zijn troef" },
          { en: "Trump changes each hand", es: "El triunfo cambia cada mano", de: "Trumpf wechselt jedes Blatt", nl: "Troef verandert elke hand" },
          { en: "No permanent trump exists", es: "No existe triunfo permanente", de: "Es gibt keinen permanenten Trumpf", nl: "Er bestaat geen permanente troef" }
        },
        correct: 0,
        explanation: {
          en: "Sheepshead has a unique fixed trump structure where all Queens, all Jacks, and all Diamond cards are permanently trump, ranked in a specific order (Q♣, Q♠, Q♥, Q♦, J♣, etc.).",
          es: "Sheepshead tiene una estructura de triunfo fija única donde todas las Reinas, todas las Jotas y todas las cartas de Diamantes son permanentemente triunfo, clasificadas en un orden específico (Q♣, Q♠, Q♥, Q♦, J♣, etc.).",
          de: "Sheepshead hat eine einzigartige feste Trumpfstruktur bei der alle Damen, alle Buben und alle Karo-Karten permanent Trumpf sind, in einer bestimmten Reihenfolge geordnet (D♣, D♠, D♥, D♦, B♣, usw.).",
          nl: "Sheepshead heeft een unieke vaste troefstructuur waarbij alle Vrouwen, alle Boeren en alle Ruiten kaarten permanent troef zijn, gerangschikt in een specifieke volgorde (V♣, V♠, V♥, V♦, B♣, enz.)."
        }
      },
      {
        question: {
          en: "What is a 'double-suited' hand in Omaha?",
          es: "¿Qué es una mano 'doble adecuada' en Omaha?",
          de: "Was ist ein 'Doppel-Suited' Blatt beim Omaha?",
          nl: "Wat is een 'dubbel-geschikte' hand bij Omaha?"
        },
        options: [
          { en: "Four hole cards with two pairs of same suits", es: "Cuatro cartas ocultas con dos pares del mismo palo", de: "Vier verdeckte Karten mit zwei Paaren gleicher Farben", nl: "Vier gesloten kaarten met twee paren van dezelfde kleuren" },
          { en: "Having two pairs", es: "Tener dos pares", de: "Zwei Paare haben", nl: "Twee paren hebben" },
          { en: "All four cards same suit", es: "Las cuatro cartas del mismo palo", de: "Alle vier Karten gleiche Farbe", nl: "Alle vier kaarten dezelfde kleur" },
          { en: "Two suited connectors", es: "Dos conectores del mismo palo", de: "Zwei suited Verbinder", nl: "Twee geschikte connectoren" }
        },
        correct: 0,
        explanation: {
          en: "A double-suited hand has two pairs of cards in the same suit (e.g., A♥K♥Q♠J♠), giving flush potential in two suits and making it a premium starting hand.",
          es: "Una mano doble adecuada tiene dos pares de cartas del mismo palo (ej., A♥K♥Q♠J♠), dando potencial de color en dos palos y convirtiéndola en una mano inicial premium.",
          de: "Ein Doppel-Suited Blatt hat zwei Paare von Karten in der gleichen Farbe (z.B. A♥K♥D♠B♠), was Flush-Potential in zwei Farben gibt und es zu einem Premium-Startblatt macht.",
          nl: "Een dubbel-geschikte hand heeft twee paren kaarten in dezelfde kleur (bijv. A♥K♥V♠B♠), wat flush potentieel geeft in twee kleuren en het een premium starthand maakt."
        }
      },
      {
        question: {
          en: "In Euchre, what is 'going alone'?",
          es: "En Euchre, ¿qué es 'ir solo'?",
          de: "Was ist 'alleine gehen' beim Euchre?",
          nl: "Wat is 'alleen gaan' bij Euchre?"
        },
        options: [
          { en: "Playing without partner for bonus points if winning all tricks", es: "Jugar sin compañero por puntos de bonificación si ganas todas las bazas", de: "Ohne Partner spielen für Bonuspunkte bei Gewinn aller Stiche", nl: "Spelen zonder partner voor bonuspunten bij winnen van alle slagen" },
          { en: "Bidding without trump", es: "Pujar sin triunfo", de: "Ohne Trumpf bieten", nl: "Bieden zonder troef" },
          { en: "Playing solitaire", es: "Jugar solitario", de: "Solitär spielen", nl: "Patience spelen" },
          { en: "Being the only defender", es: "Ser el único defensor", de: "Der einzige Verteidiger sein", nl: "De enige verdediger zijn" }
        ],
        correct: 0,
        explanation: {
          en: "Going alone means the maker plays without their partner (who sits out), attempting to win all 5 tricks for 4 points instead of the usual 1-2 points.",
          es: "Ir solo significa que el hacedor juega sin su compañero (quien se sienta afuera), intentando ganar las 5 bazas por 4 puntos en lugar de los 1-2 puntos habituales.",
          de: "Alleine gehen bedeutet dass der Macher ohne seinen Partner spielt (der aussetzt), versucht alle 5 Stiche zu gewinnen für 4 Punkte statt der üblichen 1-2 Punkte.",
          nl: "Alleen gaan betekent dat de maker speelt zonder hun partner (die er uit zit), probeert alle 5 slagen te winnen voor 4 punten in plaats van de gebruikelijke 1-2 punten."
        }
      },
      {
        question: {
          en: "What is 'blockers' concept in poker?",
          es: "¿Qué es el concepto de 'bloqueadores' en el póker?",
          de: "Was ist das 'Blocker'-Konzept beim Poker?",
          nl: "Wat is het 'blockers' concept bij poker?"
        },
        options: [
          { en: "Holding cards that reduce opponent's possible strong hands", es: "Tener cartas que reducen las posibles manos fuertes del oponente", de: "Karten halten die mögliche starke Blätter des Gegners reduzieren", nl: "Kaarten houden die mogelijke sterke handen van tegenstander verminderen" },
          { en: "Blocking opponent from betting", es: "Bloquear al oponente para que no apueste", de: "Gegner am Setzen hindern", nl: "Tegenstander blokkeren van inzetten" },
          { en: "Playing defensive poker", es: "Jugar póker defensivo", de: "Defensiv Poker spielen", nl: "Defensief poker spelen" },
          { en: "Sitting behind aggressive player", es: "Sentarse detrás de jugador agresivo", de: "Hinter aggressivem Spieler sitzen", nl: "Achter agressieve speler zitten" }
        ],
        correct: 0,
        explanation: {
          en: "Blockers are cards you hold that make it less likely your opponent has certain strong hands. For example, holding an Ace blocks some of their possible Ace-high hands.",
          es: "Los bloqueadores son cartas que tienes que hacen menos probable que tu oponente tenga ciertas manos fuertes. Por ejemplo, tener un As bloquea algunas de sus posibles manos con As alto.",
          de: "Blocker sind Karten die man hält die es weniger wahrscheinlich machen dass der Gegner bestimmte starke Blätter hat. Zum Beispiel blockiert ein Ass einige mögliche Ass-hohe Blätter.",
          nl: "Blockers zijn kaarten die je houdt die het minder waarschijnlijk maken dat je tegenstander bepaalde sterke handen heeft. Bijvoorbeeld, een Aas houden blokkeert enkele van hun mogelijke Aas-hoge handen."
        }
      },
      {
        question: {
          en: "In Doppelkopf, how many total cards are in play?",
          es: "En Doppelkopf, ¿cuántas cartas en total están en juego?",
          de: "Wie viele Karten insgesamt sind beim Doppelkopf im Spiel?",
          nl: "Hoeveel kaarten in totaal zijn er in het spel bij Doppelkopf?"
        },
        options: [
          { en: "32", es: "32", de: "32", nl: "32" },
          { en: "40", es: "40", de: "40", nl: "40" },
          { en: "48", es: "48", de: "48", nl: "48" },
          { en: "52", es: "52", de: "52", nl: "52" }
        ],
        correct: 2,
        explanation: {
          en: "Doppelkopf uses 48 cards - two complete sets of cards from 9 to Ace in each of the four suits, creating a double deck.",
          es: "Doppelkopf usa 48 cartas - dos conjuntos completos de cartas del 9 al As en cada uno de los cuatro palos, creando un mazo doble.",
          de: "Doppelkopf verwendet 48 Karten - zwei vollständige Sätze von Karten von 9 bis Ass in jeder der vier Farben, was ein Doppeldeck ergibt.",
          nl: "Doppelkopf gebruikt 48 kaarten - twee complete sets kaarten van 9 tot Aas in elk van de vier kleuren, wat een dubbel deck creëert."
        }
      },
      {
        question: {
          en: "What is 'equity' in poker?",
          es: "¿Qué es 'equidad' en el póker?",
          de: "Was ist 'Equity' beim Poker?",
          nl: "Wat is 'equity' bij poker?"
        },
        options: [
          { en: "Your share of pot based on win probability", es: "Tu parte del bote basada en probabilidad de ganar", de: "Dein Anteil am Pot basierend auf Gewinnwahrscheinlichkeit", nl: "Je aandeel van de pot gebaseerd op winkans" },
          { en: "Total chips in your stack", es: "Total de fichas en tu pila", de: "Gesamtzahl der Chips in deinem Stack", nl: "Totaal aantal fiches in je stapel" },
          { en: "Fairness of the game", es: "Equidad del juego", de: "Fairness des Spiels", nl: "Eerlijkheid van het spel" },
          { en: "Your position at table", es: "Tu posición en la mesa", de: "Deine Position am Tisch", nl: "Je positie aan de tafel" }
        ],
        correct: 0,
        explanation: {
          en: "Equity is your percentage share of the pot based on your probability of winning. For example, if you have a 60% chance to win a $100 pot, your equity is $60.",
          es: "La equidad es tu porcentaje del bote basado en tu probabilidad de ganar. Por ejemplo, si tienes un 60% de probabilidad de ganar un bote de $100, tu equidad es $60.",
          de: "Equity ist dein prozentualer Anteil am Pot basierend auf deiner Gewinnwahrscheinlichkeit. Zum Beispiel, wenn du eine 60% Chance hast einen $100 Pot zu gewinnen, ist deine Equity $60.",
          nl: "Equity is je percentage aandeel van de pot gebaseerd op je winkans. Bijvoorbeeld, als je een 60% kans hebt om een $100 pot te winnen, is je equity $60."
        }
      },
      {
        question: {
          en: "In Bridge, what is a 'Vienna Coup'?",
          es: "En Bridge, ¿qué es un 'Vienna Coup'?",
          de: "Was ist ein 'Vienna Coup' beim Bridge?",
          nl: "Wat is een 'Vienna Coup' bij Bridge?"
        },
        options: [
          { en: "Deliberately cashing winner to unblock for future squeeze", es: "Cobrar deliberadamente ganador para desbloquear para futuro apretón", de: "Absichtlich Gewinner kassieren um für zukünftigen Squeeze freizumachen", nl: "Opzettelijk winnaar verzilveren om vrij te maken voor toekomstige squeeze" },
          { en: "Bidding aggressively from Vienna", es: "Pujar agresivamente desde Viena", de: "Aggressiv aus Wien bieten", nl: "Agressief bieden vanuit Wenen" },
          { en: "Leading trump twice", es: "Liderar triunfo dos veces", de: "Zweimal Trumpf ausspielen", nl: "Twee keer troef leiden" },
          { en: "Sacrificing to save overtricks", es: "Sacrificar para salvar bazas extra", de: "Opfern um Überstiche zu retten", nl: "Opofferen om overslagen te redden" }
        ],
        correct: 0,
        explanation: {
          en: "The Vienna Coup involves deliberately cashing a winner early to unblock a suit, setting up a squeeze position later in the hand where opponent must discard.",
          es: "El Vienna Coup implica cobrar deliberadamente un ganador temprano para desbloquear un palo, estableciendo una posición de apretón más tarde en la mano donde el oponente debe descartar.",
          de: "Der Vienna Coup beinhaltet absichtlich früh einen Gewinner zu kassieren um eine Farbe freizumachen, wodurch später im Blatt eine Squeeze-Position entsteht wo der Gegner ablegen muss.",
          nl: "De Vienna Coup houdt in opzettelijk vroeg een winnaar verzilveren om een kleur vrij te maken, wat later in de hand een squeeze positie creëert waar tegenstander moet weggooien."
        }
      },
      {
        question: {
          en: "What is 'SPR' in poker?",
          es: "¿Qué es 'SPR' en el póker?",
          de: "Was ist 'SPR' beim Poker?",
          nl: "Wat is 'SPR' bij poker?"
        },
        options: [
          { en: "Stack-to-Pot Ratio", es: "Ratio Pila-a-Bote", de: "Stack-zu-Pot Verhältnis", nl: "Stack-tot-Pot Ratio" },
          { en: "Standard Poker Rules", es: "Reglas Estándar de Póker", de: "Standard Poker Regeln", nl: "Standaard Poker Regels" },
          { en: "Starting Position Rank", es: "Rango de Posición Inicial", de: "Startpositions-Rang", nl: "Start Positie Rang" },
          { en: "Suited Premium Range", es: "Rango Premium Adecuado", de: "Suited Premium Range", nl: "Geschikte Premium Range" }
        ],
        correct: 0,
        explanation: {
          en: "SPR (Stack-to-Pot Ratio) is the ratio of the effective stack size to the pot size, crucial for determining optimal post-flop strategy and commitment decisions.",
          es: "SPR (Ratio Pila-a-Bote) es la proporción del tamaño efectivo de la pila al tamaño del bote, crucial para determinar la estrategia óptima post-flop y decisiones de compromiso.",
          de: "SPR (Stack-zu-Pot Verhältnis) ist das Verhältnis der effektiven Stack-Größe zur Pot-Größe, entscheidend für die optimale Post-Flop-Strategie und Commitment-Entscheidungen.",
          nl: "SPR (Stack-tot-Pot Ratio) is de verhouding van de effectieve stapelgrootte tot de potgrootte, cruciaal voor het bepalen van optimale post-flop strategie en commitment beslissingen."
        }
      },
      {
        question: {
          en: "In 500 (Five Hundred), what is a 'misère' bid?",
          es: "En 500 (Quinientos), ¿qué es una puja 'misère'?",
          de: "Was ist ein 'Misère'-Gebot beim 500 (Fünfhundert)?",
          nl: "Wat is een 'misère' bod bij 500 (Vijfhonderd)?"
        },
        options: [
          { en: "Bidding to lose all tricks playing alone", es: "Pujar para perder todas las bazas jugando solo", de: "Bieten um alle Stiche zu verlieren alleine spielend", nl: "Bieden om alle slagen te verliezen alleen spelend" },
          { en: "Minimum bid allowed", es: "Puja mínima permitida", de: "Minimales erlaubtes Gebot", nl: "Minimum toegestaan bod" },
          { en: "Playing with no trump", es: "Jugar sin triunfo", de: "Ohne Trumpf spielen", nl: "Spelen zonder troef" },
          { en: "Bidding 500 points", es: "Pujar 500 puntos", de: "500 Punkte bieten", nl: "500 punten bieden" }
        ],
        correct: 0,
        explanation: {
          en: "Misère (or Nullo) is a special bid where the player commits to losing every trick while playing alone against both opponents, worth a fixed number of points.",
          es: "Misère (o Nullo) es una puja especial donde el jugador se compromete a perder cada baza mientras juega solo contra ambos oponentes, vale un número fijo de puntos.",
          de: "Misère (oder Nullo) ist ein spezielles Gebot bei dem sich der Spieler verpflichtet jeden Stich zu verlieren während er alleine gegen beide Gegner spielt, wert eine feste Punktzahl.",
          nl: "Misère (of Nullo) is een speciaal bod waarbij de speler zich committeert aan het verliezen van elke slag terwijl hij alleen speelt tegen beide tegenstanders, waard een vast aantal punten."
        }
      },
      {
        question: {
          en: "What is 'running it twice' in poker?",
          es: "¿Qué es 'correrlo dos veces' en el póker?",
          de: "Was ist 'zweimal laufen lassen' beim Poker?",
          nl: "Wat is 'het twee keer laten lopen' bij poker?"
        },
        options: [
          { en: "Dealing remaining cards twice to split variance", es: "Repartir cartas restantes dos veces para dividir varianza", de: "Verbleibende Karten zweimal austeilen um Varianz zu teilen", nl: "Resterende kaarten twee keer delen om variantie te verdelen" },
          { en: "Playing same hand twice", es: "Jugar la misma mano dos veces", de: "Gleiche Hand zweimal spielen", nl: "Dezelfde hand twee keer spelen" },
          { en: "Betting in two rounds", es: "Apostar en dos rondas", de: "In zwei Runden setzen", nl: "In twee rondes inzetten" },
          { en: "Drawing replacement cards twice", es: "Sacar cartas de reemplazo dos veces", de: "Zweimal Ersatzkarten ziehen", nl: "Twee keer vervangingskaarten trekken" }
        ],
        correct: 0,
        explanation: {
          en: "Running it twice means dealing the remaining community cards twice when all-in, with each board awarding half the pot, reducing variance while maintaining expected value.",
          es: "Correrlo dos veces significa repartir las cartas comunitarias restantes dos veces cuando están all-in, con cada tablero otorgando la mitad del bote, reduciendo la varianza mientras se mantiene el valor esperado.",
          de: "Zweimal laufen lassen bedeutet die verbleibenden Gemeinschaftskarten zweimal auszuteilen wenn All-In, wobei jedes Board die Hälfte des Pots vergibt, Varianz reduziert während der Erwartungswert erhalten bleibt.",
          nl: "Het twee keer laten lopen betekent de resterende gemeenschappelijke kaarten twee keer delen wanneer all-in, waarbij elk bord de helft van de pot toekent, variantie vermindert terwijl verwachte waarde behouden blijft."
        }
      },
      {
        question: {
          en: "In Bridge, what is an 'avoidance play'?",
          es: "En Bridge, ¿qué es una 'jugada de evitación'?",
          de: "Was ist ein 'Vermeidungsspiel' beim Bridge?",
          nl: "Wat is een 'vermijdingsspel' bij Bridge?"
        },
        options: [
          { en: "Preventing dangerous opponent from gaining lead", es: "Prevenir que el oponente peligroso obtenga la iniciativa", de: "Verhindern dass gefährlicher Gegner die Führung erhält", nl: "Voorkomen dat gevaarlijke tegenstander de leiding krijgt" },
          { en: "Not bidding risky contracts", es: "No pujar contratos arriesgados", de: "Keine riskanten Kontrakte bieten", nl: "Geen riskante contracten bieden" },
          { en: "Ducking all tricks", es: "Esquivar todas las bazas", de: "Alle Stiche ducken", nl: "Alle slagen ontwijken" },
          { en: "Passing on weak hands", es: "Pasar con manos débiles", de: "Mit schwachen Blättern passen", nl: "Passen met zwakke handen" }
        ],
        correct: 0,
        explanation: {
          en: "Avoidance play means maneuvering to keep a dangerous opponent (who could lead through your weakness) off lead, while allowing the safe opponent to win tricks instead.",
          es: "La jugada de evitación significa maniobrar para mantener a un oponente peligroso (que podría liderar a través de tu debilidad) sin la iniciativa, mientras se permite al oponente seguro ganar bazas en su lugar.",
          de: "Vermeidungsspiel bedeutet zu manövrieren um einen gefährlichen Gegner (der durch deine Schwäche ausspielen könnte) von der Führung fernzuhalten, während man dem sicheren Gegner erlaubt Stiche zu gewinnen.",
          nl: "Vermijdingsspel betekent manoeuvreren om een gevaarlijke tegenstander (die door je zwakte zou kunnen leiden) van de leiding te houden, terwijl de veilige tegenstander slagen mag winnen."
        }
      },
      {
        question: {
          en: "What is 'min-cash' mentality in poker tournaments?",
          es: "¿Qué es la mentalidad 'min-cash' en torneos de póker?",
          de: "Was ist 'Min-Cash' Mentalität bei Poker-Turnieren?",
          nl: "Wat is 'min-cash' mentaliteit bij poker toernooien?"
        },
        options: [
          { en: "Playing overly conservative to barely reach money spots", es: "Jugar demasiado conservador para apenas alcanzar posiciones de dinero", de: "Zu konservativ spielen um gerade Geldplätze zu erreichen", nl: "Te conservatief spelen om net geldplaatsen te bereiken" },
          { en: "Minimizing buy-in costs", es: "Minimizar costos de entrada", de: "Buy-In-Kosten minimieren", nl: "Buy-in kosten minimaliseren" },
          { en: "Going all-in frequently", es: "Ir all-in frecuentemente", de: "Häufig All-In gehen", nl: "Vaak all-in gaan" },
          { en: "Playing minimum stakes", es: "Jugar apuestas mínimas", de: "Mindesteinsätze spielen", nl: "Minimale inzetten spelen" }
        ],
        correct: 0,
        explanation: {
          en: "Min-cash mentality is playing overly tight near the money bubble just to secure a minimum payout, often -EV compared to playing optimally for tournament victory.",
          es: "La mentalidad min-cash es jugar demasiado apretado cerca de la burbuja del dinero solo para asegurar un pago mínimo, a menudo -EV comparado con jugar óptimamente para la victoria del torneo.",
          de: "Min-Cash Mentalität ist zu tight zu spielen nahe der Money Bubble nur um eine Mindestauszahlung zu sichern, oft -EV im Vergleich zu optimal für Turniersieg zu spielen.",
          nl: "Min-cash mentaliteit is te strak spelen nabij de geldbubbel alleen om een minimale uitbetaling veilig te stellen, vaak -EV vergeleken met optimaal spelen voor toernooioverwinning."
        }
      },
      {
        question: {
          en: "In Bourré, what does being 'bourréed' mean?",
          es: "En Bourré, ¿qué significa ser 'bourréed'?",
          de: "Was bedeutet 'bourréed' werden beim Bourré?",
          nl: "Wat betekent 'bourréed' worden bij Bourré?"
        },
        options: [
          { en: "Failing to win any tricks and matching the pot as penalty", es: "Fallar en ganar bazas e igualar el bote como penalización", de: "Keinen Stich gewinnen und den Pot als Strafe angleichen", nl: "Geen slagen winnen en de pot als straf evenaren" },
          { en: "Winning all tricks", es: "Ganar todas las bazas", de: "Alle Stiche gewinnen", nl: "Alle slagen winnen" },
          { en: "Being dealt a perfect hand", es: "Recibir una mano perfecta", de: "Ein perfektes Blatt ausgeteilt bekommen", nl: "Een perfecte hand gedeeld krijgen" },
          { en: "Folding before play", es: "Retirarse antes de jugar", de: "Vor dem Spiel folden", nl: "Passen voor het spel" }
        ],
        correct: 0,
        explanation: {
          en: "Being bourréed means you played a hand but failed to win any tricks, forcing you to match the entire pot as a penalty - a potentially very costly outcome.",
          es: "Ser bourréed significa que jugaste una mano pero fallaste en ganar bazas, forzándote a igualar el bote entero como penalización - un resultado potencialmente muy costoso.",
          de: "Bourréed werden bedeutet dass man eine Hand gespielt hat aber keinen Stich gewonnen hat, was einen zwingt den gesamten Pot als Strafe anzugleichen - ein potenziell sehr teures Ergebnis.",
          nl: "Bourréed worden betekent dat je een hand speelde maar geen slagen won, wat je dwingt de gehele pot als straf te evenaren - een potentieel zeer kostbaar resultaat."
        }
      },
      {
        question: {
          en: "What is 'red line' in poker tracking software?",
          es: "¿Qué es la 'línea roja' en software de seguimiento de póker?",
          de: "Was ist die 'rote Linie' in Poker-Tracking-Software?",
          nl: "Wat is 'rode lijn' in poker tracking software?"
        },
        options: [
          { en: "Winnings excluding showdown (non-showdown winnings)", es: "Ganancias excluyendo showdown (ganancias sin showdown)", de: "Gewinne ohne Showdown (Nicht-Showdown-Gewinne)", nl: "Winsten exclusief showdown (niet-showdown winsten)" },
          { en: "Total losses over time", es: "Pérdidas totales con el tiempo", de: "Gesamtverluste über Zeit", nl: "Totale verliezen over tijd" },
          { en: "Danger zone of bankroll", es: "Zona de peligro del bankroll", de: "Gefahrenzone des Bankrolls", nl: "Gevarenzone van bankroll" },
          { en: "Hands played in the red", es: "Manos jugadas en rojo", de: "In Rot gespielte Hände", nl: "In het rood gespeelde handen" }
        ],
        correct: 0,
        explanation: {
          en: "The red line shows non-showdown winnings - money won by forcing opponents to fold rather than winning at showdown, indicating effectiveness of aggression and bluffing.",
          es: "La línea roja muestra ganancias sin showdown - dinero ganado forzando a los oponentes a retirarse en lugar de ganar en showdown, indicando efectividad de agresión y bluffing.",
          de: "Die rote Linie zeigt Nicht-Showdown-Gewinne - Geld gewonnen indem Gegner zum Folden gezwungen werden anstatt im Showdown zu gewinnen, was Effektivität von Aggression und Bluffen anzeigt.",
          nl: "De rode lijn toont niet-showdown winsten - geld gewonnen door tegenstanders te dwingen te passen in plaats van te winnen bij showdown, wat effectiviteit van agressie en bluffen aangeeft."
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
