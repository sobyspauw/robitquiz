// Quiz Template - Level 6: Board Games - Card Games
(function() {
  const level6 = {
    name: {
      en: "Card Games - Expert I",
      es: "Juegos de Cartas - Experto I",
      de: "Kartenspiele - Experte I",
      nl: "Kaartspellen - Expert I"
    },
    questions: [
      {
        question: {
          en: "In Hearts, what is 'shooting the moon'?",
          es: "En Hearts, ¿qué es 'disparar a la luna'?",
          de: "Was bedeutet 'auf den Mond schießen' beim Hearts?",
          nl: "Wat is 'shooting the moon' bij Hearts?"
        },
        options: [
          { en: "Taking all hearts and the Queen of Spades", es: "Tomar todos los corazones y la Reina de Picas", de: "Alle Herzen und die Pik-Dame nehmen", nl: "Alle harten en de Schoppen Vrouw nemen" },
          { en: "Avoiding all point cards", es: "Evitar todas las cartas de puntos", de: "Alle Punktkarten vermeiden", nl: "Alle puntenkaarten vermijden" },
          { en: "Getting exactly 26 points", es: "Obtener exactamente 26 puntos", de: "Genau 26 Punkte bekommen", nl: "Precies 26 punten krijgen" },
          { en: "Winning the first trick", es: "Ganar la primera baza", de: "Den ersten Stich gewinnen", nl: "De eerste slag winnen" }
        ],
        correct: 0,
        explanation: {
          en: "Shooting the moon means taking all 13 hearts and the Queen of Spades, giving zero points to the shooter and 26 points to each opponent.",
          es: "Disparar a la luna significa tomar los 13 corazones y la Reina de Picas, dando cero puntos al tirador y 26 puntos a cada oponente.",
          de: "Auf den Mond schießen bedeutet alle 13 Herzen und die Pik-Dame zu nehmen, was dem Schützen null Punkte und jedem Gegner 26 Punkte gibt.",
          nl: "Shooting the moon betekent alle 13 harten en de Schoppen Vrouw nemen, wat de schutter nul punten geeft en elke tegenstander 26 punten."
        }
      },
      {
        question: {
          en: "What is a 'Rubens' in Bridge?",
          es: "¿Qué es un 'Rubens' en Bridge?",
          de: "Was ist ein 'Rubens' beim Bridge?",
          nl: "Wat is een 'Rubens' bij Bridge?"
        },
        options: [
          { en: "A penalty double", es: "Un doble de penalización", de: "Ein Straf-Kontra", nl: "Een strafverdubbeling" },
          { en: "An advanced transfer system", es: "Un sistema de transferencia avanzado", de: "Ein fortgeschrittenes Transfersystem", nl: "Een geavanceerd transfersysteem" },
          { en: "Leading the wrong suit", es: "Liderar el palo equivocado", de: "Die falsche Farbe ausspielen", nl: "De verkeerde kleur leiden" },
          { en: "A defensive signal", es: "Una señal defensiva", de: "Ein Verteidigungssignal", nl: "Een verdedigingssignaal" }
        ],
        correct: 1,
        explanation: {
          en: "Rubens is an advanced bidding convention involving transfer bids after notrump openings, allowing the strong hand to become declarer in more situations.",
          es: "Rubens es una convención de puja avanzada que involucra pujas de transferencia después de aperturas sin triunfo.",
          de: "Rubens ist eine fortgeschrittene Bietkonvention mit Transfergeboten nach Ohne-Eröffnungen.",
          nl: "Rubens is een geavanceerde biedconventie met transferbiedingen na zonder-troef openingen."
        }
      },
      {
        question: {
          en: "In Euchre, what is a 'loner'?",
          es: "En Euchre, ¿qué es un 'loner'?",
          de: "Was ist ein 'Loner' beim Euchre?",
          nl: "Wat is een 'loner' bij Euchre?"
        },
        options: [
          { en: "Having no trump cards", es: "No tener cartas de triunfo", de: "Keine Trumpfkarten haben", nl: "Geen troefkaarten hebben" },
          { en: "Being the dealer", es: "Ser el repartidor", de: "Der Geber sein", nl: "De deler zijn" },
          { en: "Playing without your partner", es: "Jugar sin tu compañero", de: "Ohne Partner spielen", nl: "Spelen zonder je partner" },
          { en: "Passing on all rounds", es: "Pasar en todas las rondas", de: "In allen Runden passen", nl: "Alle rondes passen" }
        ],
        correct: 2,
        explanation: {
          en: "A loner is when a player declares trump and chooses to play alone without their partner, attempting to win all five tricks for 4 points instead of 2.",
          es: "Un loner es cuando un jugador declara triunfo y elige jugar solo sin su compañero, intentando ganar las cinco bazas para 4 puntos en lugar de 2.",
          de: "Ein Loner ist wenn ein Spieler Trumpf ansagt und wählt alleine ohne seinen Partner zu spielen.",
          nl: "Een loner is wanneer een speler troef declareert en kiest om alleen te spelen zonder hun partner."
        }
      },
      {
        question: {
          en: "What is 'range merging' in poker?",
          es: "¿Qué es 'fusión de rangos' en el póker?",
          de: "Was ist 'Range Merging' beim Poker?",
          nl: "Wat is 'range merging' bij poker?"
        },
        options: [
          { en: "Joining two tournaments", es: "Unirse a dos torneos", de: "Zwei Turniere verbinden", nl: "Twee toernooien samenvoegen" },
          { en: "Matching opponent's bet exactly", es: "Igualar exactamente la apuesta del oponente", de: "Den Einsatz des Gegners genau angleichen", nl: "De inzet van de tegenstander exact evenaren" },
          { en: "Combining multiple table positions", es: "Combinar múltiples posiciones de mesa", de: "Mehrere Tischpositionen kombinieren", nl: "Meerdere tafelposities combineren" },
          { en: "Betting with both strong and medium hands", es: "Apostar con manos fuertes y medias", de: "Mit starken und mittleren Blättern setzen", nl: "Inzetten met zowel sterke als middelmatige handen" }
        ],
        correct: 3,
        explanation: {
          en: "Range merging is betting with both strong and medium-strength hands together to make your betting range more difficult to exploit.",
          es: "La fusión de rangos es apostar con manos fuertes y de fuerza media juntas para hacer tu rango de apuestas más difícil de explotar.",
          de: "Range Merging ist mit starken und mittelstarken Blättern zusammen setzen um die eigene Setzrange schwerer ausbeutbar zu machen.",
          nl: "Range merging is met zowel sterke als middelmatige handen inzet om je inzetbereik moeilijker exploiteerbaar te maken."
        }
      },
      {
        question: {
          en: "In Spades, what is a 'nil' bid?",
          es: "En Spades, ¿qué es una puja 'nil'?",
          de: "Was ist ein 'Nil'-Gebot beim Spades?",
          nl: "Wat is een 'nil' bod bij Spades?"
        },
        options: [
          { en: "Bidding to take zero tricks", es: "Pujar para no tomar bazas", de: "Bieten keine Stiche zu nehmen", nl: "Bieden om nul slagen te nemen" },
          { en: "Having no spades in hand", es: "No tener picas en la mano", de: "Keine Pik in der Hand haben", nl: "Geen schoppen in de hand hebben" },
          { en: "Refusing to bid", es: "Negarse a pujar", de: "Sich weigern zu bieten", nl: "Weigeren te bieden" },
          { en: "Bidding maximum tricks", es: "Pujar el máximo de bazas", de: "Maximum Stiche bieten", nl: "Maximum slagen bieden" }
        ],
        correct: 0,
        explanation: {
          en: "A nil bid is a declaration that you will take zero tricks. If successful, your team gains 100 points; if you take any trick, you lose 100 points.",
          es: "Una puja nil es una declaración de que no tomarás ninguna baza. Si tienes éxito, tu equipo gana 100 puntos; si tomas alguna baza, pierdes 100 puntos.",
          de: "Ein Nil-Gebot ist eine Erklärung dass man keine Stiche nehmen wird. Bei Erfolg gewinnt das Team 100 Punkte.",
          nl: "Een nil bod is een verklaring dat je nul slagen zult nemen. Als het lukt, wint je team 100 punten."
        }
      },
      {
        question: {
          en: "What is a 'Bath Coup' in Bridge?",
          es: "¿Qué es un 'Bath Coup' en Bridge?",
          de: "Was ist ein 'Bath Coup' beim Bridge?",
          nl: "Wat is een 'Bath Coup' bij Bridge?"
        },
        options: [
          { en: "Bidding aggressively with weak hand", es: "Pujar agresivamente con mano débil", de: "Aggressiv mit schwachem Blatt bieten", nl: "Agressief bieden met zwakke hand" },
          { en: "Ducking with Ace-Jack to trap King", es: "Pasar con As-Jota para atrapar Rey", de: "Mit Ass-Bube ducken um König zu fangen", nl: "Ducken met Aas-Boer om Koning te vangen" },
          { en: "Leading from dummy first", es: "Liderar desde el muerto primero", de: "Zuerst vom Dummy ausspielen", nl: "Eerst van dummy leiden" },
          { en: "Trumping partner's winner", es: "Fallar al ganador del compañero", de: "Gewinner des Partners stechen", nl: "Troeven op winnaar van partner" }
        ],
        correct: 1,
        explanation: {
          en: "The Bath Coup is ducking when the King is led from your right while holding Ace-Jack, forcing the opponent to lead into your tenace later.",
          es: "El Bath Coup es pasar cuando se lidera el Rey desde tu derecha mientras tienes As-Jota.",
          de: "Der Bath Coup ist ducken wenn der König von rechts ausgespielt wird während man Ass-Bube hält.",
          nl: "De Bath Coup is ducken wanneer de Koning vanaf je rechts wordt gespeeld terwijl je Aas-Boer houdt."
        }
      },
      {
        question: {
          en: "In Texas Hold'em, what is the 'cutoff' position?",
          es: "En Texas Hold'em, ¿cuál es la posición 'cutoff'?",
          de: "Was ist die 'Cutoff'-Position beim Texas Hold'em?",
          nl: "Wat is de 'cutoff' positie bij Texas Hold'em?"
        },
        options: [
          { en: "The dealer button position", es: "La posición del botón del repartidor", de: "Die Dealer-Button-Position", nl: "De dealer button positie" },
          { en: "One seat right of dealer button", es: "Un asiento a la derecha del botón del repartidor", de: "Ein Sitz rechts vom Dealer-Button", nl: "Eén stoel rechts van de dealer button" },
          { en: "Immediately left of big blind", es: "Inmediatamente a la izquierda de la ciega grande", de: "Direkt links vom Big Blind", nl: "Direct links van de big blind" },
          { en: "Two seats right of dealer button", es: "Dos asientos a la derecha del botón del repartidor", de: "Zwei Sitze rechts vom Dealer-Button", nl: "Twee stoelen rechts van de dealer button" }
        ],
        correct: 1,
        explanation: {
          en: "The cutoff is one seat to the right of the dealer button. It's called cutoff because it has the opportunity to 'cut off' the button's positional advantage.",
          es: "El cutoff es un asiento a la derecha del botón del repartidor. Se llama cutoff porque tiene la oportunidad de 'cortar' la ventaja posicional del botón.",
          de: "Der Cutoff ist einen Sitz rechts vom Dealer-Button.",
          nl: "De cutoff is één stoel rechts van de dealer button."
        }
      },
      {
        question: {
          en: "What is 'trumping in' in Whist?",
          es: "¿Qué es 'trumping in' en Whist?",
          de: "Was ist 'Einstechen' beim Whist?",
          nl: "Wat is 'trumping in' bij Whist?"
        },
        options: [
          { en: "Declaring the trump suit", es: "Declarar el palo de triunfo", de: "Die Trumpffarbe ansagen", nl: "De troefkleur declareren" },
          { en: "Leading trump on first trick", es: "Liderar triunfo en la primera baza", de: "Trumpf im ersten Stich ausspielen", nl: "Troef leiden bij eerste slag" },
          { en: "Playing trump when you can't follow suit", es: "Jugar triunfo cuando no puedes seguir el palo", de: "Trumpf spielen wenn man Farbe nicht bedienen kann", nl: "Troef spelen als je kleur niet kunt volgen" },
          { en: "Having all trump cards", es: "Tener todas las cartas de triunfo", de: "Alle Trumpfkarten haben", nl: "Alle troefkaarten hebben" }
        ],
        correct: 2,
        explanation: {
          en: "Trumping in (or ruffing) is playing a trump card when you cannot follow suit, which wins the trick unless a higher trump is played.",
          es: "Trumping in (o fallar) es jugar una carta de triunfo cuando no puedes seguir el palo.",
          de: "Einstechen ist eine Trumpfkarte zu spielen wenn man Farbe nicht bedienen kann.",
          nl: "Trumping in is een troefkaart spelen wanneer je de kleur niet kunt volgen."
        }
      },
      {
        question: {
          en: "In Rummy, what is 'going rummy'?",
          es: "En Rummy, ¿qué es 'ir a rummy'?",
          de: "Was bedeutet 'Rummy gehen' beim Rummy?",
          nl: "Wat is 'going rummy' bij Rummy?"
        },
        options: [
          { en: "Drawing from discard pile", es: "Sacar de la pila de descarte", de: "Vom Ablagestapel ziehen", nl: "Trekken van de aflegstapel" },
          { en: "Making three sets", es: "Hacer tres grupos", de: "Drei Sets machen", nl: "Drie sets maken" },
          { en: "Having only one card left", es: "Tener solo una carta restante", de: "Nur noch eine Karte haben", nl: "Nog maar één kaart hebben" },
          { en: "Melding all cards at once without prior melds", es: "Combinar todas las cartas a la vez sin combinaciones previas", de: "Alle Karten auf einmal melden ohne vorherige Meldungen", nl: "Alle kaarten tegelijk melden zonder eerdere meldingen" }
        ],
        correct: 3,
        explanation: {
          en: "Going rummy means laying down all your cards in valid melds in one turn without having made any previous melds, typically earning double points.",
          es: "Ir a rummy significa poner todas tus cartas en combinaciones válidas en un turno sin haber hecho combinaciones previas.",
          de: "Rummy gehen bedeutet alle Karten in gültigen Meldungen in einem Zug abzulegen ohne vorherige Meldungen.",
          nl: "Going rummy betekent al je kaarten in geldige meldingen in één beurt neerleggen zonder eerdere meldingen."
        }
      },
      {
        question: {
          en: "What is a 'continuation bet' (c-bet) in poker?",
          es: "¿Qué es una 'apuesta de continuación' (c-bet) en el póker?",
          de: "Was ist eine 'Continuation Bet' (C-Bet) beim Poker?",
          nl: "Wat is een 'continuation bet' (c-bet) bij poker?"
        },
        options: [
          { en: "Betting on the flop after raising pre-flop", es: "Apostar en el flop después de subir pre-flop", de: "Auf dem Flop setzen nach Erhöhung vor dem Flop", nl: "Inzetten op de flop na verhogen voor de flop" },
          { en: "Calling every street", es: "Igualar en cada calle", de: "Auf jeder Straße callen", nl: "Elke straat callen" },
          { en: "Betting the same amount each hand", es: "Apostar la misma cantidad cada mano", de: "Jeden Hand denselben Betrag setzen", nl: "Elk hand hetzelfde bedrag inzetten" },
          { en: "Following with a raise", es: "Seguir con una subida", de: "Mit einer Erhöhung folgen", nl: "Volgen met een verhoging" }
        ],
        correct: 0,
        explanation: {
          en: "A continuation bet is when the pre-flop aggressor continues their aggression by betting on the flop, regardless of whether the flop improved their hand.",
          es: "Una apuesta de continuación es cuando el agresor pre-flop continúa su agresión apostando en el flop.",
          de: "Eine Continuation Bet ist wenn der Pre-Flop-Aggressor seine Aggression fortsetzt indem er auf dem Flop setzt.",
          nl: "Een continuation bet is wanneer de pre-flop aggressor hun agressie voortzet door in te zetten op de flop."
        }
      },
      {
        question: {
          en: "In Sheepshead, what is the 'picker'?",
          es: "En Sheepshead, ¿qué es el 'picker'?",
          de: "Was ist der 'Picker' beim Sheepshead?",
          nl: "Wat is de 'picker' bij Sheepshead?"
        },
        options: [
          { en: "The first to play", es: "El primero en jugar", de: "Der erste Spieler", nl: "De eerste die speelt" },
          { en: "The player who picks up the blind", es: "El jugador que recoge la ciega", de: "Der Spieler der den Stock aufnimmt", nl: "De speler die de blinde oppakt" },
          { en: "The dealer", es: "El repartidor", de: "Der Geber", nl: "De deler" },
          { en: "The high scorer", es: "El que tiene más puntos", de: "Der Höchstpunkter", nl: "De hoogste scorer" }
        ],
        correct: 1,
        explanation: {
          en: "The picker is the player who chooses to pick up the two-card blind in Sheepshead, playing alone against the other players.",
          es: "El picker es el jugador que elige recoger la ciega de dos cartas en Sheepshead.",
          de: "Der Picker ist der Spieler der wählt den Zweikartenstock beim Sheepshead aufzunehmen.",
          nl: "De picker is de speler die kiest om de twee-kaarten blinde bij Sheepshead op te pakken."
        }
      },
      {
        question: {
          en: "What is 'block betting' in poker?",
          es: "¿Qué es 'bloquear apostando' en el póker?",
          de: "Was ist 'Block Betting' beim Poker?",
          nl: "Wat is 'block betting' bij poker?"
        },
        options: [
          { en: "Refusing to bet", es: "Negarse a apostar", de: "Sich weigern zu setzen", nl: "Weigeren in te zetten" },
          { en: "Betting with mediocre hand to prevent opponent from betting larger", es: "Apostar con mano mediocre para evitar que el oponente apueste más", de: "Mit mittelmäßigem Blatt setzen um größeren Gegnereinsatz zu verhindern", nl: "Inzetten met matige hand om te voorkomen dat tegenstander groter inzet" },
          { en: "Raising all-in", es: "Subir all-in", de: "All-in erhöhen", nl: "All-in verhogen" },
          { en: "Preventing opponent from betting larger", es: "Prevenir que el oponente apueste más", de: "Verhindern dass Gegner größer setzt", nl: "Voorkomen dat tegenstander groter inzet" }
        ],
        correct: 1,
        explanation: {
          en: "Block betting is betting a small amount with a mediocre hand to prevent your opponent from making a larger bet that you'd have difficulty calling.",
          es: "Bloquear apostando es apostar una cantidad pequeña con una mano mediocre para evitar que tu oponente haga una apuesta más grande.",
          de: "Block Betting bedeutet einen kleinen Betrag mit einem mittelmäßigen Blatt zu setzen.",
          nl: "Block betting is een klein bedrag inzetten met een matige hand."
        }
      },
      {
        question: {
          en: "In Pinochle, what is a 'double pinochle'?",
          es: "En Pinochle, ¿qué es un 'doble pinochle'?",
          de: "Was ist ein 'Doppel-Pinochle' beim Pinochle?",
          nl: "Wat is een 'dubbele pinochle' bij Pinochle?"
        },
        options: [
          { en: "Both black Queens", es: "Ambas Reinas negras", de: "Beide schwarzen Damen", nl: "Beide zwarte Vrouwen" },
          { en: "Two marriages in trump", es: "Dos matrimonios en triunfo", de: "Zwei Hochzeiten in Trumpf", nl: "Twee huwelijken in troef" },
          { en: "Two Jacks of Diamonds and two Queens of Spades", es: "Dos Jotas de Diamantes y dos Reinas de Picas", de: "Zwei Karo-Buben und zwei Pik-Damen", nl: "Twee Ruiten Boeren en twee Schoppen Vrouwen" },
          { en: "Four of a kind", es: "Póker", de: "Vierling", nl: "Vier van een soort" }
        ],
        correct: 2,
        explanation: {
          en: "A double pinochle consists of two Jacks of Diamonds and two Queens of Spades (using the double deck), worth 300 points compared to 40 for a single pinochle.",
          es: "Un doble pinochle consiste en dos Jotas de Diamantes y dos Reinas de Picas (usando el mazo doble), vale 300 puntos.",
          de: "Ein Doppel-Pinochle besteht aus zwei Karo-Buben und zwei Pik-Damen, wert 300 Punkte.",
          nl: "Een dubbele pinochle bestaat uit twee Ruiten Boeren en twee Schoppen Vrouwen, waard 300 punten."
        }
      },
      {
        question: {
          en: "What is 'donk betting' in poker?",
          es: "¿Qué es 'donk betting' en el póker?",
          de: "Was ist 'Donk Betting' beim Poker?",
          nl: "Wat is 'donk betting' bij poker?"
        },
        options: [
          { en: "Making minimum bet always", es: "Hacer siempre apuesta mínima", de: "Immer Mindesteinsatz machen", nl: "Altijd minimale inzet doen" },
          { en: "Betting foolishly with any hand", es: "Apostar tontamente con cualquier mano", de: "Töricht mit jedem Blatt setzen", nl: "Dwaas inzetten met elke hand" },
          { en: "Leading into the pre-flop aggressor", es: "Liderar contra el agresor pre-flop", de: "In den Pre-Flop-Aggressor spielen", nl: "Leiden tegen de pre-flop aggressor" },
          { en: "Betting without looking at cards", es: "Apostar sin mirar las cartas", de: "Setzen ohne Karten anzusehen", nl: "Inzetten zonder kaarten te bekijken" }
        ],
        correct: 2,
        explanation: {
          en: "Donk betting is when an out-of-position player bets into the pre-flop aggressor on the flop, taking the initiative away from the expected continuation better.",
          es: "Donk betting es cuando un jugador fuera de posición apuesta contra el agresor pre-flop en el flop.",
          de: "Donk Betting ist wenn ein Spieler außer Position auf dem Flop in den Pre-Flop-Aggressor setzt.",
          nl: "Donk betting is wanneer een out-of-position speler inzet tegen de pre-flop aggressor op de flop."
        }
      },
      {
        question: {
          en: "In Preference (card game), what is the 'widow'?",
          es: "En Preference (juego de cartas), ¿qué es la 'viuda'?",
          de: "Was ist die 'Witwe' beim Preference (Kartenspiel)?",
          nl: "Wat is de 'weduwe' bij Preference (kaartspel)?"
        },
        options: [
          { en: "A player without partner", es: "Un jugador sin compañero", de: "Ein Spieler ohne Partner", nl: "Een speler zonder partner" },
          { en: "The last trick", es: "La última baza", de: "Der letzte Stich", nl: "De laatste slag" },
          { en: "The losing hand", es: "La mano perdedora", de: "Das verlierende Blatt", nl: "De verliezende hand" },
          { en: "Extra cards set aside for declarer", es: "Cartas extra reservadas para el declarante", de: "Extra Karten für den Alleinspieler beiseite gelegt", nl: "Extra kaarten opzij gelegd voor declarer" }
        ],
        correct: 3,
        explanation: {
          en: "The widow (or talon) consists of 2-3 cards dealt face-down that the declarer can exchange with their hand after winning the bidding.",
          es: "La viuda (o talón) consiste en 2-3 cartas repartidas boca abajo que el declarante puede intercambiar con su mano.",
          de: "Die Witwe besteht aus 2-3 verdeckt ausgeteilten Karten die der Alleinspieler tauschen kann.",
          nl: "De weduwe bestaat uit 2-3 kaarten gesloten gedeeld die de declarer kan ruilen."
        }
      },
      {
        question: {
          en: "What is 'balancing' in Bridge bidding?",
          es: "¿Qué es 'balancear' en las pujas de Bridge?",
          de: "Was ist 'Ausbalancieren' beim Bridge-Bieten?",
          nl: "Wat is 'balanceren' bij Bridge bieden?"
        },
        options: [
          { en: "Having exactly 12 points", es: "Tener exactamente 12 puntos", de: "Genau 12 Punkte haben", nl: "Precies 12 punten hebben" },
          { en: "Bidding after two passes to keep auction open", es: "Pujar después de dos pases para mantener abierta la subasta", de: "Nach zwei Pässen bieten um die Auktion offen zu halten", nl: "Bieden na twee passes om de veiling open te houden" },
          { en: "Distributing cards evenly", es: "Distribuir cartas uniformemente", de: "Karten gleichmäßig verteilen", nl: "Kaarten gelijkmatig verdelen" },
          { en: "Equalizing points with partner", es: "Igualar puntos con el compañero", de: "Punkte mit Partner ausgleichen", nl: "Punten gelijkmaken met partner" }
        ],
        correct: 1,
        explanation: {
          en: "Balancing is bidding in fourth seat after two passes to prevent opponents from playing an undisturbed contract, protecting partner who may have values but couldn't bid.",
          es: "Balancear es pujar en cuarto asiento después de dos pases para evitar que los oponentes jueguen un contrato sin disturbar.",
          de: "Ausbalancieren bedeutet in vierter Position nach zwei Pässen zu bieten.",
          nl: "Balanceren is bieden in vierde positie na twee passes."
        }
      },
      {
        question: {
          en: "In Crazy Eights, what happens when you play an eight?",
          es: "En Crazy Eights, ¿qué sucede cuando juegas un ocho?",
          de: "Was passiert beim Crazy Eights wenn man eine Acht spielt?",
          nl: "Wat gebeurt er bij Crazy Eights wanneer je een acht speelt?"
        },
        options: [
          { en: "Next player draws 8 cards", es: "El siguiente jugador saca 8 cartas", de: "Nächster Spieler zieht 8 Karten", nl: "Volgende speler trekt 8 kaarten" },
          { en: "Skip next player", es: "Saltar siguiente jugador", de: "Nächsten Spieler überspringen", nl: "Volgende speler overslaan" },
          { en: "You change the suit", es: "Cambias el palo", de: "Du änderst die Farbe", nl: "Je verandert de kleur" },
          { en: "Reverse direction of play", es: "Revertir dirección de juego", de: "Spielrichtung umkehren", nl: "Richting van spel omkeren" }
        ],
        correct: 2,
        explanation: {
          en: "When you play an eight in Crazy Eights, you can declare any suit as the new suit to be played, giving you control over the next play.",
          es: "Cuando juegas un ocho en Crazy Eights, puedes declarar cualquier palo como el nuevo palo a jugar.",
          de: "Wenn man eine Acht beim Crazy Eights spielt kann man jede Farbe als neue Farbe erklären.",
          nl: "Wanneer je een acht speelt bij Crazy Eights, kun je elke kleur als de nieuwe kleur declareren."
        }
      },
      {
        question: {
          en: "What is 'floating' in poker?",
          es: "¿Qué es 'flotar' en el póker?",
          de: "Was ist 'Floaten' beim Poker?",
          nl: "Wat is 'floaten' bij poker?"
        },
        options: [
          { en: "Playing loosely", es: "Jugar suelto", de: "Locker spielen", nl: "Los spelen" },
          { en: "Not committing chips", es: "No comprometer fichas", de: "Keine Chips einsetzen", nl: "Geen fiches inzetten" },
          { en: "Waiting for premium hands", es: "Esperar manos premium", de: "Auf Premium-Blätter warten", nl: "Wachten op premium handen" },
          { en: "Calling a bet to bluff later streets", es: "Igualar una apuesta para blufear en calles posteriores", de: "Einen Einsatz callen um auf späteren Straßen zu bluffen", nl: "Een inzet callen om op latere straten te bluffen" }
        ],
        correct: 3,
        explanation: {
          en: "Floating is calling a bet (usually a continuation bet) in position with the intention of taking the pot away on a later street when the opponent shows weakness.",
          es: "Flotar es igualar una apuesta (usualmente una apuesta de continuación) en posición con la intención de llevarse el bote en una calle posterior.",
          de: "Floaten bedeutet einen Einsatz in Position zu callen mit der Absicht den Pot später zu nehmen.",
          nl: "Floaten is een inzet in positie callen met de bedoeling de pot later weg te nemen."
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
          { en: "Changing trump suit", es: "Cambiar palo de triunfo", de: "Trumpffarbe ändern", nl: "Troefkleur veranderen" },
          { en: "Playing King and Queen of trump consecutively", es: "Jugar Rey y Reina de triunfo consecutivamente", de: "König und Dame von Trumpf aufeinanderfolgend spielen", nl: "Koning en Vrouw van troef achtereenvolgens spelen" },
          { en: "Winning all tricks", es: "Ganar todas las bazas", de: "Alle Stiche gewinnen", nl: "Alle slagen winnen" },
          { en: "Doubling the bet twice", es: "Doblar la apuesta dos veces", de: "Den Einsatz zweimal verdoppeln", nl: "De inzet twee keer verdubbelen" }
        ],
        correct: 1,
        explanation: {
          en: "Belote-Rebelote is declared when a player holds and plays both the King and Queen of the trump suit, announcing 'Belote' with one and 'Rebelote' with the other for 20 bonus points.",
          es: "Belote-Rebelote se declara cuando un jugador tiene y juega tanto el Rey como la Reina del palo de triunfo.",
          de: "Belote-Rebelote wird erklärt wenn ein Spieler König und Dame der Trumpffarbe hält und spielt.",
          nl: "Belote-Rebelote wordt gedeclareerd wanneer een speler de Koning en Vrouw van troef houdt en speelt."
        }
      },
      {
        question: {
          en: "What is 'equity denial' in poker?",
          es: "¿Qué es 'negación de equidad' en el póker?",
          de: "Was ist 'Equity Denial' beim Poker?",
          nl: "Wat is 'equity denial' bij poker?"
        },
        options: [
          { en: "Not splitting the pot", es: "No dividir el bote", de: "Den Pot nicht teilen", nl: "De pot niet delen" },
          { en: "Betting to prevent opponent from realizing their hand's potential", es: "Apostar para evitar que el oponente realice el potencial de su mano", de: "Setzen um zu verhindern dass Gegner das Potenzial seines Blatts realisiert", nl: "Inzetten om te voorkomen dat tegenstander het potentieel van hun hand realiseert" },
          { en: "Refusing to show cards", es: "Negarse a mostrar cartas", de: "Sich weigern Karten zu zeigen", nl: "Weigeren kaarten te tonen" },
          { en: "Claiming opponent has no chance", es: "Afirmar que el oponente no tiene oportunidad", de: "Behaupten Gegner hat keine Chance", nl: "Beweren dat tegenstander geen kans heeft" }
        ],
        correct: 1,
        explanation: {
          en: "Equity denial is betting aggressively to prevent opponents with drawing hands from seeing additional cards cheaply, denying them the opportunity to realize their equity.",
          es: "La negación de equidad es apostar agresivamente para evitar que los oponentes con manos de ligadura vean cartas adicionales baratas.",
          de: "Equity Denial bedeutet aggressiv zu setzen um Gegner mit Drawing Hands zu hindern.",
          nl: "Equity denial is agressief inzetten om tegenstanders met drawing hands te verhinderen extra kaarten goedkoop te zien."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level6;
  } else if (typeof window !== 'undefined') {
    window.level6 = level6;
  }
})();
