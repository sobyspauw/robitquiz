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
      },
      {
        question: {
          en: "In Bridge, what is a 'Crocodile Coup'?",
          es: "En Bridge, ¿qué es un 'Crocodile Coup'?",
          de: "Was ist ein 'Krokodil-Coup' beim Bridge?",
          nl: "Wat is een 'Crocodile Coup' bij Bridge?"
        },
        options: [
          { en: "Covering opponent's honor with higher honor to force out an even higher card", es: "Cubrir honor del oponente con honor más alto para forzar una carta aún más alta", de: "Ehrenkarte des Gegners mit höherer Ehrenkarte decken um noch höhere Karte zu erzwingen", nl: "Erenkaart van tegenstander dekken met hogere erenkaart om nog hogere kaart af te dwingen" },
          { en: "Snapping up tricks quickly", es: "Capturar bazas rápidamente", de: "Stiche schnell schnappen", nl: "Slagen snel pakken" },
          { en: "Slow playing a strong hand", es: "Jugar lento una mano fuerte", de: "Starkes Blatt langsam spielen", nl: "Sterke hand langzaam spelen" },
          { en: "Trapping opponent with false signals", es: "Atrapar oponente con señales falsas", de: "Gegner mit falschen Signalen fangen", nl: "Tegenstander vangen met valse signalen" }
        ],
        correct: 0,
        explanation: {
          en: "The Crocodile Coup involves covering an opponent's honor card with a higher honor to force out an even higher card from their partner, like covering a Queen with King to force the Ace.",
          es: "El Crocodile Coup involucra cubrir la carta de honor de un oponente con un honor más alto para forzar una carta aún más alta de su compañero, como cubrir una Reina con Rey para forzar el As.",
          de: "Der Krokodil-Coup beinhaltet eine Ehrenkarte des Gegners mit einer höheren Ehrenkarte zu decken um eine noch höhere Karte von deren Partner zu erzwingen, wie Dame mit König decken um das Ass zu erzwingen.",
          nl: "De Crocodile Coup houdt in een erenkaart van tegenstander dekken met een hogere erenkaart om een nog hogere kaart van hun partner af te dwingen, zoals Vrouw dekken met Koning om de Aas af te dwingen."
        }
      },
      {
        question: {
          en: "What is 'polarization' in poker?",
          es: "¿Qué es 'polarización' en el póker?",
          de: "Was ist 'Polarisierung' beim Poker?",
          nl: "Wat is 'polarisatie' bij poker?"
        },
        options: [
          { en: "Range containing only very strong or very weak hands", es: "Rango que contiene solo manos muy fuertes o muy débiles", de: "Range enthält nur sehr starke oder sehr schwache Blätter", nl: "Range bevat alleen zeer sterke of zeer zwakke handen" },
          { en: "Playing only premium hands", es: "Jugar solo manos premium", de: "Nur Premium-Blätter spielen", nl: "Alleen premium handen spelen" },
          { en: "Switching between tight and loose play", es: "Cambiar entre juego apretado y suelto", de: "Zwischen engem und losem Spiel wechseln", nl: "Wisselen tussen strak en los spel" },
          { en: "Betting opposite of opponents", es: "Apostar opuesto a los oponentes", de: "Entgegengesetzt zu Gegnern setzen", nl: "Tegengesteld aan tegenstanders inzetten" }
        ],
        correct: 0,
        explanation: {
          en: "A polarized range contains only very strong value hands and bluffs, with no medium-strength hands. This strategy is effective for large bets where opponents must make difficult decisions.",
          es: "Un rango polarizado contiene solo manos de valor muy fuertes y farol, sin manos de fuerza media. Esta estrategia es efectiva para apuestas grandes donde los oponentes deben tomar decisiones difíciles.",
          de: "Eine polarisierte Range enthält nur sehr starke Value-Blätter und Bluffs, ohne mittelstarke Blätter. Diese Strategie ist effektiv für große Einsätze wo Gegner schwierige Entscheidungen treffen müssen.",
          nl: "Een gepolariseerde range bevat alleen zeer sterke value handen en bluffs, zonder middel sterke handen. Deze strategie is effectief voor grote inzetten waar tegenstanders moeilijke beslissingen moeten nemen."
        }
      },
      {
        question: {
          en: "In French Tarot, what is the 'Petit sec'?",
          es: "En Tarot francés, ¿qué es el 'Petit sec'?",
          de: "Was ist 'Petit sec' im französischen Tarot?",
          nl: "Wat is de 'Petit sec' in Frans Tarot?"
        },
        options: [
          { en: "Having only the 1 of trump with no other trumps", es: "Tener solo el 1 de triunfo sin otros triunfos", de: "Nur die 1 von Trumpf ohne andere Trümpfe haben", nl: "Alleen de 1 van troef hebben zonder andere troeven" },
          { en: "The smallest point value", es: "El valor de punto más pequeño", de: "Der kleinste Punktwert", nl: "De kleinste puntwaarde" },
          { en: "A dry suit with no honors", es: "Un palo seco sin honores", de: "Eine trockene Farbe ohne Ehrenkarten", nl: "Een droge kleur zonder erenkaarten" },
          { en: "Leading with low cards", es: "Liderar con cartas bajas", de: "Mit niedrigen Karten ausspielen", nl: "Leiden met lage kaarten" }
        ],
        correct: 0,
        explanation: {
          en: "Petit sec means holding the 1 of trumps (the Petit) as your only trump card, which is a dangerous situation requiring special announcements and defensive play.",
          es: "Petit sec significa tener el 1 de triunfos (el Petit) como tu única carta de triunfo, lo cual es una situación peligrosa que requiere anuncios especiales y juego defensivo.",
          de: "Petit sec bedeutet die 1 von Trumpf (das Petit) als einzige Trumpfkarte zu haben, was eine gefährliche Situation ist die spezielle Ankündigungen und defensives Spiel erfordert.",
          nl: "Petit sec betekent de 1 van troef (de Petit) als je enige troefkaart hebben, wat een gevaarlijke situatie is die speciale aankondigingen en defensief spel vereist."
        }
      },
      {
        question: {
          en: "What is 'range merging' in poker?",
          es: "¿Qué es 'fusión de rango' en el póker?",
          de: "Was ist 'Range Merging' beim Poker?",
          nl: "Wat is 'range merging' bij poker?"
        },
        options: [
          { en: "Betting medium-strength hands for value and protection", es: "Apostar manos de fuerza media para valor y protección", de: "Mittelstarke Blätter für Value und Schutz setzen", nl: "Middelsterke handen inzetten voor value en bescherming" },
          { en: "Combining different poker variants", es: "Combinar diferentes variantes de póker", de: "Verschiedene Poker-Varianten kombinieren", nl: "Verschillende pokervarianten combineren" },
          { en: "Playing two tables simultaneously", es: "Jugar dos mesas simultáneamente", de: "Zwei Tische gleichzeitig spielen", nl: "Twee tafels tegelijkertijd spelen" },
          { en: "Bluffing with marginal hands", es: "Hacer bluff con manos marginales", de: "Mit marginalen Blättern bluffen", nl: "Bluffen met marginale handen" }
        ],
        correct: 0,
        explanation: {
          en: "Range merging involves betting medium-strength hands that aren't strong enough for pure value but benefit from denying equity and occasionally getting called by worse hands.",
          es: "La fusión de rango involucra apostar manos de fuerza media que no son lo suficientemente fuertes para puro valor pero se benefician de negar equidad y ocasionalmente ser igualadas por manos peores.",
          de: "Range Merging beinhaltet mittelstarke Blätter zu setzen die nicht stark genug für reinen Value sind aber von Equity Denial profitieren und gelegentlich von schlechteren Blättern gecallt werden.",
          nl: "Range merging houdt in middelsterke handen inzetten die niet sterk genoeg zijn voor pure value maar profiteren van equity denial en af en toe gecalled worden door slechtere handen."
        }
      },
      {
        question: {
          en: "In Schafkopf, what is a 'Wenz'?",
          es: "En Schafkopf, ¿qué es un 'Wenz'?",
          de: "Was ist ein 'Wenz' beim Schafkopf?",
          nl: "Wat is een 'Wenz' bij Schafkopf?"
        },
        options: [
          { en: "Game type where only Jacks are trump", es: "Tipo de juego donde solo las Jotas son triunfo", de: "Spielart bei der nur Buben Trumpf sind", nl: "Speltype waarbij alleen Boeren troef zijn" },
          { en: "Winning all tricks", es: "Ganar todas las bazas", de: "Alle Stiche gewinnen", nl: "Alle slagen winnen" },
          { en: "The starting player", es: "El jugador inicial", de: "Der Startspieler", nl: "De startspeler" },
          { en: "A penalty for missing bid", es: "Una penalización por fallar puja", de: "Eine Strafe für verfehltes Gebot", nl: "Een straf voor gemist bod" }
        ],
        correct: 0,
        explanation: {
          en: "Wenz is a game type in Schafkopf where only the four Jacks are trumps (no other trumps or trump suit), ranked in the order Acorns, Leaves, Hearts, Bells.",
          es: "Wenz es un tipo de juego en Schafkopf donde solo las cuatro Jotas son triunfo (sin otros triunfos o palo de triunfo), clasificadas en el orden Bellotas, Hojas, Corazones, Campanas.",
          de: "Wenz ist eine Spielart beim Schafkopf bei der nur die vier Buben Trumpf sind (keine anderen Trümpfe oder Trumpffarbe), geordnet Eichel, Laub, Herz, Schellen.",
          nl: "Wenz is een speltype bij Schafkopf waarbij alleen de vier Boeren troef zijn (geen andere troeven of troefkleur), gerangschikt Eikels, Bladeren, Harten, Schellen."
        }
      },
      {
        question: {
          en: "What is 'floating' in poker?",
          es: "¿Qué es 'flotar' en el póker?",
          de: "Was ist 'Floating' beim Poker?",
          nl: "Wat is 'floaten' bij poker?"
        },
        options: [
          { en: "Calling with weak hand to bluff later streets", es: "Igualar con mano débil para hacer bluff en calles posteriores", de: "Mit schwachem Blatt callen um später zu bluffen", nl: "Callen met zwakke hand om later te bluffen" },
          { en: "Playing without clear strategy", es: "Jugar sin estrategia clara", de: "Ohne klare Strategie spielen", nl: "Spelen zonder duidelijke strategie" },
          { en: "Maintaining even chip stack", es: "Mantener pila de fichas uniforme", de: "Gleichmäßigen Chip-Stack beibehalten", nl: "Gelijkmatige fiche stapel behouden" },
          { en: "Moving tables frequently", es: "Cambiar de mesa frecuentemente", de: "Häufig Tische wechseln", nl: "Vaak van tafel wisselen" }
        ],
        correct: 0,
        explanation: {
          en: "Floating is calling a bet with a weak or marginal hand in position, intending to take the pot away with a bluff on a later street if opponent shows weakness.",
          es: "Flotar es igualar una apuesta con una mano débil o marginal en posición, con la intención de llevarse el bote con un bluff en una calle posterior si el oponente muestra debilidad.",
          de: "Floating bedeutet einen Einsatz mit einem schwachen oder marginalen Blatt in Position zu callen, mit der Absicht den Pot später mit einem Bluff zu nehmen wenn der Gegner Schwäche zeigt.",
          nl: "Floaten is een inzet callen met een zwakke of marginale hand in positie, met de intentie de pot later weg te nemen met een bluff als tegenstander zwakte toont."
        }
      },
      {
        question: {
          en: "In Cribbage, what is a 'perfect 29 hand'?",
          es: "En Cribbage, ¿qué es una 'mano perfecta de 29'?",
          de: "Was ist eine 'perfekte 29-Hand' beim Cribbage?",
          nl: "Wat is een 'perfecte 29 hand' bij Cribbage?"
        },
        options: [
          { en: "5-5-5-J with starter 5 of same suit as Jack", es: "5-5-5-J con carta inicial 5 del mismo palo que la Jota", de: "5-5-5-B mit Startkarte 5 der gleichen Farbe wie Bube", nl: "5-5-5-B met startkaart 5 van dezelfde kleur als Boer" },
          { en: "Four Aces and a King", es: "Cuatro Ases y un Rey", de: "Vier Asse und einen König", nl: "Vier Azen en een Koning" },
          { en: "Royal flush in crib", es: "Escalera real en crib", de: "Royal Flush im Crib", nl: "Royal flush in crib" },
          { en: "All cards of same suit", es: "Todas las cartas del mismo palo", de: "Alle Karten der gleichen Farbe", nl: "Alle kaarten van dezelfde kleur" }
        },
        correct: 0,
        explanation: {
          en: "The perfect 29 hand contains three 5s and a Jack (his nobs), with the starter card being the fourth 5 of the same suit as the Jack, scoring maximum points possible.",
          es: "La mano perfecta de 29 contiene tres 5s y una Jota (his nobs), con la carta inicial siendo el cuarto 5 del mismo palo que la Jota, anotando el máximo de puntos posible.",
          de: "Die perfekte 29-Hand enthält drei 5en und einen Buben (sein Bube), wobei die Startkarte die vierte 5 der gleichen Farbe wie der Bube ist, was maximale Punkte ergibt.",
          nl: "De perfecte 29 hand bevat drie 5'en en een Boer (zijn boer), waarbij de startkaart de vierde 5 van dezelfde kleur als de Boer is, wat maximale punten scoort."
        }
      },
      {
        question: {
          en: "What is 'balance' in poker strategy?",
          es: "¿Qué es el 'equilibrio' en la estrategia de póker?",
          de: "Was ist 'Balance' in der Poker-Strategie?",
          nl: "Wat is 'balans' in pokerstrategie?"
        },
        options: [
          { en: "Playing value hands and bluffs in same way to be unexploitable", es: "Jugar manos de valor y faroles de la misma manera para ser inexplotable", de: "Value-Blätter und Bluffs gleich spielen um nicht ausnutzbar zu sein", nl: "Value handen en bluffs op dezelfde manier spelen om niet uitbuitbaar te zijn" },
          { en: "Having equal chips to opponents", es: "Tener fichas iguales a los oponentes", de: "Gleich viele Chips wie Gegner haben", nl: "Gelijke fiches hebben als tegenstanders" },
          { en: "Playing same number of hands per hour", es: "Jugar el mismo número de manos por hora", de: "Gleiche Anzahl Hände pro Stunde spielen", nl: "Hetzelfde aantal handen per uur spelen" },
          { en: "Maintaining emotional stability", es: "Mantener estabilidad emocional", de: "Emotionale Stabilität bewahren", nl: "Emotionele stabiliteit behouden" }
        ],
        correct: 0,
        explanation: {
          en: "Balance means constructing ranges so that strong and weak hands take the same actions with appropriate frequencies, making it impossible for opponents to exploit your tendencies.",
          es: "Equilibrio significa construir rangos para que manos fuertes y débiles tomen las mismas acciones con frecuencias apropiadas, haciendo imposible que los oponentes exploten tus tendencias.",
          de: "Balance bedeutet Ranges so zu konstruieren dass starke und schwache Blätter die gleichen Aktionen mit angemessenen Frequenzen machen, wodurch es unmöglich wird dass Gegner deine Tendenzen ausnutzen.",
          nl: "Balans betekent ranges zo construeren dat sterke en zwakke handen dezelfde acties nemen met passende frequenties, waardoor het onmogelijk wordt voor tegenstanders om je tendensen uit te buiten."
        }
      },
      {
        question: {
          en: "In Mus, what is the 'grande' worth?",
          es: "En Mus, ¿cuánto vale la 'grande'?",
          de: "Was ist die 'Grande' beim Mus wert?",
          nl: "Wat is de 'grande' waard bij Mus?"
        },
        options: [
          { en: "1 point for highest hand value", es: "1 punto por el valor de mano más alto", de: "1 Punkt für höchsten Handwert", nl: "1 punt voor hoogste handwaarde" },
          { en: "3 points for four of a kind", es: "3 puntos por póker", de: "3 Punkte für Vierling", nl: "3 punten voor vier gelijke" },
          { en: "The game itself", es: "El juego mismo", de: "Das Spiel selbst", nl: "Het spel zelf" },
          { en: "5 points for winning all rounds", es: "5 puntos por ganar todas las rondas", de: "5 Punkte fürs Gewinnen aller Runden", nl: "5 punten voor winnen van alle rondes" }
        ],
        correct: 0,
        explanation: {
          en: "In Mus, Grande (Big) is worth 1 point and goes to the team with the highest total hand value, calculated by adding card values together.",
          es: "En Mus, Grande vale 1 punto y va al equipo con el valor total de mano más alto, calculado sumando los valores de las cartas.",
          de: "Beim Mus ist Grande 1 Punkt wert und geht an das Team mit dem höchsten Gesamt-Handwert, berechnet durch Addition der Kartenwerte.",
          nl: "Bij Mus is Grande 1 punt waard en gaat naar het team met de hoogste totale handwaarde, berekend door kaartwaarden op te tellen."
        }
      },
      {
        question: {
          en: "What is 'pot geometry' in poker?",
          es: "¿Qué es 'geometría de bote' en el póker?",
          de: "Was ist 'Pot Geometrie' beim Poker?",
          nl: "Wat is 'pot geometrie' bij poker?"
        },
        options: [
          { en: "How pot size relates to stack sizes and future betting", es: "Cómo el tamaño del bote se relaciona con los tamaños de pila y apuestas futuras", de: "Wie Pot-Größe zu Stack-Größen und zukünftigen Einsätzen steht", nl: "Hoe potgrootte zich verhoudt tot stapelgroottes en toekomstige inzetten" },
          { en: "Physical arrangement of chips", es: "Disposición física de fichas", de: "Physische Anordnung der Chips", nl: "Fysieke rangschikking van fiches" },
          { en: "Table shape and positions", es: "Forma de mesa y posiciones", de: "Tischform und Positionen", nl: "Tafelvorm en posities" },
          { en: "Betting pattern graphs", es: "Gráficos de patrones de apuesta", de: "Einsatzmuster-Grafiken", nl: "Inzetpatroon grafieken" }
        ],
        correct: 0,
        explanation: {
          en: "Pot geometry refers to understanding how current pot size, remaining stack sizes, and number of streets left interact to determine optimal bet sizing strategies.",
          es: "La geometría de bote se refiere a entender cómo el tamaño actual del bote, los tamaños de pila restantes y el número de calles restantes interactúan para determinar estrategias óptimas de tamaño de apuesta.",
          de: "Pot Geometrie bezieht sich auf das Verstehen wie aktuelle Pot-Größe, verbleibende Stack-Größen und Anzahl verbleibender Streets interagieren um optimale Bet-Sizing-Strategien zu bestimmen.",
          nl: "Pot geometrie verwijst naar begrijpen hoe huidige potgrootte, resterende stapelgroottes en aantal overgebleven streets interacteren om optimale inzetgrootte strategieën te bepalen."
        }
      },
      {
        question: {
          en: "In Preferans, what is 'whist'?",
          es: "En Preferans, ¿qué es 'whist'?",
          de: "Was ist 'Whist' beim Preferans?",
          nl: "Wat is 'whist' bij Preferans?"
        },
        options: [
          { en: "Opponents playing together to defeat declarer's contract", es: "Oponentes jugando juntos para derrotar el contrato del declarante", de: "Gegner spielen zusammen um Kontrakt des Alleinspielers zu besiegen", nl: "Tegenstanders spelen samen om contract van declarer te verslaan" },
          { en: "Passing without bidding", es: "Pasar sin pujar", de: "Passen ohne zu bieten", nl: "Passen zonder te bieden" },
          { en: "Silent agreement between partners", es: "Acuerdo silencioso entre compañeros", de: "Stille Vereinbarung zwischen Partnern", nl: "Stille overeenkomst tussen partners" },
          { en: "Winning with minimum bid", es: "Ganar con puja mínima", de: "Mit Mindestgebot gewinnen", nl: "Winnen met minimumbod" }
        ],
        correct: 0,
        explanation: {
          en: "In Preferans, whist occurs when the two non-declaring players team up to try to defeat the declarer's contract, each trying to take as many tricks as possible.",
          es: "En Preferans, whist ocurre cuando los dos jugadores no declarantes se unen para intentar derrotar el contrato del declarante, cada uno intentando tomar tantas bazas como sea posible.",
          de: "Beim Preferans tritt Whist auf wenn die zwei nicht-deklarierenden Spieler zusammenarbeiten um den Kontrakt des Alleinspielers zu besiegen, wobei jeder versucht so viele Stiche wie möglich zu nehmen.",
          nl: "Bij Preferans treedt whist op wanneer de twee niet-declarerende spelers samenwerken om het contract van de declarer te verslaan, waarbij elk probeert zoveel mogelijk slagen te nemen."
        }
      },
      {
        question: {
          en: "What is 'c-betting' in poker?",
          es: "¿Qué es 'c-betting' en el póker?",
          de: "Was ist 'C-Betting' beim Poker?",
          nl: "Wat is 'c-betting' bij poker?"
        },
        options: [
          { en: "Continuation betting after raising pre-flop", es: "Apuesta de continuación después de subir pre-flop", de: "Fortsetzungs-Bet nach Pre-Flop-Erhöhung", nl: "Voortzettingsinzet na pre-flop verhogen" },
          { en: "Calling bets consistently", es: "Igualar apuestas consistentemente", de: "Einsätze konsistent callen", nl: "Inzetten consistent callen" },
          { en: "Betting with pocket Aces", es: "Apostar con Ases en mano", de: "Mit Pocket Assen setzen", nl: "Inzetten met pocket Azen" },
          { en: "Check-raising opponents", es: "Check-raise a oponentes", de: "Gegner check-raisen", nl: "Check-raisen tegen tegenstanders" }
        ],
        correct: 0,
        explanation: {
          en: "C-betting (continuation betting) means betting on the flop after being the pre-flop aggressor, representing continued strength regardless of whether the flop helped your hand.",
          es: "C-betting (apuesta de continuación) significa apostar en el flop después de ser el agresor pre-flop, representando fuerza continua independientemente de si el flop ayudó tu mano.",
          de: "C-Betting (Continuation Betting) bedeutet auf dem Flop zu setzen nachdem man der Pre-Flop-Aggressor war, was fortgesetzte Stärke darstellt unabhängig davon ob der Flop der Hand geholfen hat.",
          nl: "C-betting (voortzettingsinzet) betekent inzetten op de flop na pre-flop aggressor te zijn geweest, wat voortdurende sterkte vertegenwoordigt ongeacht of de flop je hand hielp."
        }
      },
      {
        question: {
          en: "In Briscola, what determines which card wins a trick?",
          es: "En Briscola, ¿qué determina qué carta gana una baza?",
          de: "Was bestimmt beim Briscola welche Karte einen Stich gewinnt?",
          nl: "Wat bepaalt bij Briscola welke kaart een slag wint?"
        },
        options: [
          { en: "Highest trump, or if no trump highest card of led suit", es: "Triunfo más alto, o si no hay triunfo carta más alta del palo liderado", de: "Höchster Trumpf, oder ohne Trumpf höchste Karte der ausgespielten Farbe", nl: "Hoogste troef, of zonder troef hoogste kaart van geleide kleur" },
          { en: "Always the highest card played", es: "Siempre la carta más alta jugada", de: "Immer die höchste gespielte Karte", nl: "Altijd de hoogste gespeelde kaart" },
          { en: "Card with highest point value", es: "Carta con mayor valor de puntos", de: "Karte mit höchstem Punktwert", nl: "Kaart met hoogste puntwaarde" },
          { en: "Last card played", es: "Última carta jugada", de: "Zuletzt gespielte Karte", nl: "Laatst gespeelde kaart" }
        },
        correct: 0,
        explanation: {
          en: "In Briscola, the highest trump card wins the trick. If no trump is played, the highest card of the suit led wins. Players are not required to follow suit.",
          es: "En Briscola, la carta de triunfo más alta gana la baza. Si no se juega triunfo, la carta más alta del palo liderado gana. Los jugadores no están obligados a seguir el palo.",
          de: "Beim Briscola gewinnt die höchste Trumpfkarte den Stich. Wenn kein Trumpf gespielt wird, gewinnt die höchste Karte der ausgespielten Farbe. Spieler müssen nicht Farbe bedienen.",
          nl: "Bij Briscola wint de hoogste troefkaart de slag. Als geen troef gespeeld wordt, wint de hoogste kaart van de geleide kleur. Spelers hoeven niet kleur te volgen."
        }
      },
      {
        question: {
          en: "What is 'reverse implied odds' in poker?",
          es: "¿Qué son las 'probabilidades implícitas inversas' en el póker?",
          de: "Was sind 'Reverse Implied Odds' beim Poker?",
          nl: "Wat zijn 'reverse implied odds' bij poker?"
        },
        options: [
          { en: "Money you'll lose on later streets when you hit but are beaten", es: "Dinero que perderás en calles posteriores cuando completas pero eres derrotado", de: "Geld das man auf späteren Streets verliert wenn man trifft aber geschlagen ist", nl: "Geld dat je verliest op latere streets wanneer je raakt maar verslagen bent" },
          { en: "Odds of losing current pot", es: "Probabilidades de perder el bote actual", de: "Chancen den aktuellen Pot zu verlieren", nl: "Kansen om huidige pot te verliezen" },
          { en: "Betting in reverse order", es: "Apostar en orden inverso", de: "In umgekehrter Reihenfolge setzen", nl: "In omgekeerde volgorde inzetten" },
          { en: "Opponent's implied odds", es: "Probabilidades implícitas del oponente", de: "Implied Odds des Gegners", nl: "Implied odds van tegenstander" }
        ],
        correct: 0,
        explanation: {
          en: "Reverse implied odds are the expected money you'll lose on future streets when you make your hand but it's still beaten by a better hand, making drawing hands less profitable.",
          es: "Las probabilidades implícitas inversas son el dinero esperado que perderás en calles futuras cuando completas tu mano pero aún es derrotada por una mano mejor, haciendo las manos de ligadura menos rentables.",
          de: "Reverse Implied Odds ist das erwartete Geld das man auf zukünftigen Streets verliert wenn man seine Hand trifft aber sie trotzdem von einer besseren Hand geschlagen wird, was Drawing Hands weniger profitabel macht.",
          nl: "Reverse implied odds is het verwachte geld dat je verliest op toekomstige streets wanneer je je hand maakt maar deze toch verslagen wordt door een betere hand, wat drawing hands minder winstgevend maakt."
        }
      },
      {
        question: {
          en: "In Jass, what is the 'Stöck-Wyss-Stich' scoring?",
          es: "En Jass, ¿qué es el puntaje 'Stöck-Wyss-Stich'?",
          de: "Was ist die 'Stöck-Wyss-Stich' Wertung beim Jass?",
          nl: "Wat is de 'Stöck-Wyss-Stich' scoring bij Jass?"
        },
        options: [
          { en: "Bonuses for sequences, trump K-Q, and last trick", es: "Bonificaciones por secuencias, K-Q de triunfo y última baza", de: "Boni für Sequenzen, Trumpf K-D und letzten Stich", nl: "Bonussen voor sequenties, troef K-V en laatste slag" },
          { en: "Three-way tie scoring", es: "Puntaje de empate a tres", de: "Dreifach-Unentschieden-Wertung", nl: "Drie-weg gelijkspel scoring" },
          { en: "Penalty for failing bid", es: "Penalización por fallar puja", de: "Strafe für verfehltes Gebot", nl: "Straf voor gemist bod" },
          { en: "Points per trick taken", es: "Puntos por baza tomada", de: "Punkte pro genommenen Stich", nl: "Punten per genomen slag" }
        },
        correct: 0,
        explanation: {
          en: "Stöck-Wyss-Stich refers to three bonus categories: Stöck (King-Queen of trump for 20 points), Wyss (sequences worth varying points), and Stich (5 points for last trick).",
          es: "Stöck-Wyss-Stich se refiere a tres categorías de bonificación: Stöck (Rey-Reina de triunfo por 20 puntos), Wyss (secuencias que valen puntos variables) y Stich (5 puntos por última baza).",
          de: "Stöck-Wyss-Stich bezieht sich auf drei Bonuskategorien: Stöck (König-Dame von Trumpf für 20 Punkte), Wyss (Sequenzen mit variablen Punkten) und Stich (5 Punkte für letzten Stich).",
          nl: "Stöck-Wyss-Stich verwijst naar drie bonuscategorieën: Stöck (Koning-Vrouw van troef voor 20 punten), Wyss (sequenties met variërende punten) en Stich (5 punten voor laatste slag)."
        }
      },
      {
        question: {
          en: "What is 'MDF' (Minimum Defense Frequency) in poker?",
          es: "¿Qué es 'MDF' (Frecuencia Mínima de Defensa) en el póker?",
          de: "Was ist 'MDF' (Minimum Defense Frequency) beim Poker?",
          nl: "Wat is 'MDF' (Minimum Defense Frequency) bij poker?"
        },
        options: [
          { en: "Minimum % you must continue to prevent opponent from auto-profiting with any two cards", es: "% mínimo que debes continuar para evitar que el oponente gane automáticamente con cualesquiera dos cartas", de: "Minimum % das man weitermachen muss um zu verhindern dass Gegner mit beliebigen zwei Karten Auto-Profit macht", nl: "Minimum % dat je moet doorgaan om te voorkomen dat tegenstander auto-winst maakt met twee kaarten" },
          { en: "Mandatory defense protocol", es: "Protocolo de defensa obligatorio", de: "Obligatorisches Verteidigungsprotokoll", nl: "Verplicht verdedigingsprotocol" },
          { en: "Most defensive folds", es: "Retiros más defensivos", de: "Defensivste Folds", nl: "Meest defensieve folds" },
          { en: "Minimum dollar amount to defend", es: "Cantidad mínima en dólares para defender", de: "Minimaler Dollarbetrag zum Verteidigen", nl: "Minimaal dollarbedrag om te verdedigen" }
        ],
        correct: 0,
        explanation: {
          en: "MDF is the minimum percentage of your range you must continue with (call or raise) to prevent your opponent from profitably bluffing with any two cards, calculated from pot odds.",
          es: "MDF es el porcentaje mínimo de tu rango con el que debes continuar (igualar o subir) para evitar que tu oponente pueda hacer bluff rentablemente con cualesquiera dos cartas, calculado desde las pot odds.",
          de: "MDF ist der minimale Prozentsatz deiner Range mit dem du weitermachen musst (callen oder raisen) um zu verhindern dass dein Gegner profitabel mit beliebigen zwei Karten bluffen kann, berechnet aus Pot Odds.",
          nl: "MDF is het minimale percentage van je range waarmee je moet doorgaan (callen of raisen) om te voorkomen dat je tegenstander winstgevend kan bluffen met twee kaarten, berekend uit pot odds."
        }
      },
      {
        question: {
          en: "In Scopone, what is the most valuable capture?",
          es: "En Scopone, ¿cuál es la captura más valiosa?",
          de: "Was ist der wertvollste Fang beim Scopone?",
          nl: "Wat is de meest waardevolle vangst bij Scopone?"
        },
        options: [
          { en: "Scopa (sweeping the table)", es: "Scopa (barrer la mesa)", de: "Scopa (den Tisch fegen)", nl: "Scopa (de tafel vegen)" },
          { en: "Taking the most cards", es: "Tomar la mayoría de cartas", de: "Die meisten Karten nehmen", nl: "De meeste kaarten nemen" },
          { en: "Capturing all diamonds", es: "Capturar todos los diamantes", de: "Alle Karos fangen", nl: "Alle ruiten vangen" },
          { en: "Taking the 7 of diamonds", es: "Tomar el 7 de diamantes", de: "Die Karo-7 nehmen", nl: "De ruiten 7 nemen" }
        ],
        correct: 0,
        explanation: {
          en: "In Scopone, a scopa (sweeping all cards from the table in one capture) is worth 1 point and is one of the most valuable achievements, though other categories also score.",
          es: "En Scopone, una scopa (barrer todas las cartas de la mesa en una captura) vale 1 punto y es uno de los logros más valiosos, aunque otras categorías también puntúan.",
          de: "Beim Scopone ist eine Scopa (alle Karten vom Tisch in einem Fang fegen) 1 Punkt wert und eine der wertvollsten Leistungen, obwohl andere Kategorien auch punkten.",
          nl: "Bij Scopone is een scopa (alle kaarten van de tafel vegen in één vangst) 1 punt waard en een van de meest waardevolle prestaties, hoewel andere categorieën ook scoren."
        }
      },
      {
        question: {
          en: "What is 'thin value betting' in poker?",
          es: "¿Qué es 'apostar valor delgado' en el póker?",
          de: "Was ist 'Thin Value Betting' beim Poker?",
          nl: "Wat is 'thin value betting' bij poker?"
        },
        options: [
          { en: "Betting marginal hands expecting to be called by worse slightly more than 50%", es: "Apostar manos marginales esperando ser igualado por peores ligeramente más del 50%", de: "Marginale Blätter setzen in Erwartung von schlechteren Calls etwas über 50%", nl: "Marginale handen inzetten verwachtend gecalled te worden door slechtere net iets meer dan 50%" },
          { en: "Betting small amounts", es: "Apostar pequeñas cantidades", de: "Kleine Beträge setzen", nl: "Kleine bedragen inzetten" },
          { en: "Value betting with nut hands", es: "Apostar valor con manos nuts", de: "Value Betting mit Nuts-Blättern", nl: "Value betting met nut handen" },
          { en: "Betting only premium hands", es: "Apostar solo manos premium", de: "Nur Premium-Blätter setzen", nl: "Alleen premium handen inzetten" }
        ],
        correct: 0,
        explanation: {
          en: "Thin value betting involves betting marginal hands for value when you expect to be called by worse hands just slightly more than half the time, extracting maximum value from borderline situations.",
          es: "Apostar valor delgado involucra apostar manos marginales para valor cuando esperas ser igualado por manos peores justo un poco más de la mitad del tiempo, extrayendo valor máximo de situaciones límite.",
          de: "Thin Value Betting beinhaltet marginale Blätter für Value zu setzen wenn man erwartet von schlechteren Blättern knapp über die Hälfte der Zeit gecallt zu werden, um maximalen Value aus Grenzsituationen zu extrahieren.",
          nl: "Thin value betting houdt in marginale handen voor value inzetten wanneer je verwacht net iets meer dan de helft van de tijd gecalled te worden door slechtere handen, maximale value extraheren uit grenssituaties."
        }
      },
      {
        question: {
          en: "In Tute, what is a 'cante de 40'?",
          es: "En Tute, ¿qué es un 'cante de 40'?",
          de: "Was ist ein 'Cante de 40' beim Tute?",
          nl: "Wat is een 'cante de 40' bij Tute?"
        },
        options: [
          { en: "Declaring King and Queen of trump suit for 40 points", es: "Declarar Rey y Reina del palo de triunfo por 40 puntos", de: "König und Dame der Trumpffarbe für 40 Punkte ansagen", nl: "Koning en Vrouw van troefkleur declareren voor 40 punten" },
          { en: "Winning 40 points in tricks", es: "Ganar 40 puntos en bazas", de: "40 Punkte in Stichen gewinnen", nl: "40 punten winnen in slagen" },
          { en: "Reaching score of 40", es: "Alcanzar puntuación de 40", de: "Punktzahl von 40 erreichen", nl: "Score van 40 bereiken" },
          { en: "Taking 40% of cards", es: "Tomar 40% de las cartas", de: "40% der Karten nehmen", nl: "40% van de kaarten nemen" }
        ],
        correct: 0,
        explanation: {
          en: "Cante de 40 is declaring (singing) the King and Queen of the trump suit, worth 40 bonus points in Tute, more valuable than the 20 points for non-trump suit pairs.",
          es: "Cante de 40 es declarar (cantar) el Rey y la Reina del palo de triunfo, vale 40 puntos de bonificación en Tute, más valioso que los 20 puntos para pares de palos no triunfo.",
          de: "Cante de 40 ist das Ansagen (Singen) von König und Dame der Trumpffarbe, wert 40 Bonuspunkte beim Tute, wertvoller als die 20 Punkte für Nicht-Trumpf-Paare.",
          nl: "Cante de 40 is het declareren (zingen) van Koning en Vrouw van de troefkleur, waard 40 bonuspunten bij Tute, waardevoller dan de 20 punten voor niet-troef paren."
        }
      },
      {
        question: {
          en: "What is 'range construction' in poker?",
          es: "¿Qué es 'construcción de rango' en el póker?",
          de: "Was ist 'Range Construction' beim Poker?",
          nl: "Wat is 'range constructie' bij poker?"
        },
        options: [
          { en: "Building your range of hands to play in each situation strategically", es: "Construir tu rango de manos para jugar en cada situación estratégicamente", de: "Range von Blättern strategisch aufbauen um in jeder Situation zu spielen", nl: "Je range van handen strategisch opbouwen om in elke situatie te spelen" },
          { en: "Organizing chips by value", es: "Organizar fichas por valor", de: "Chips nach Wert organisieren", nl: "Fiches ordenen op waarde" },
          { en: "Setting table limits", es: "Establecer límites de mesa", de: "Tischlimits festlegen", nl: "Tafellimieten instellen" },
          { en: "Building bankroll gradually", es: "Construir bankroll gradualmente", de: "Bankroll schrittweise aufbauen", nl: "Bankroll geleidelijk opbouwen" }
        ],
        correct: 0,
        explanation: {
          en: "Range construction involves strategically deciding which hands to include in your range for each action (raise, call, fold) in different positions and situations to maintain balance and maximize EV.",
          es: "La construcción de rango involucra decidir estratégicamente qué manos incluir en tu rango para cada acción (subir, igualar, retirarse) en diferentes posiciones y situaciones para mantener equilibrio y maximizar EV.",
          de: "Range Construction beinhaltet strategisch zu entscheiden welche Blätter in die Range für jede Aktion (Raise, Call, Fold) in verschiedenen Positionen und Situationen einzubeziehen sind um Balance zu halten und EV zu maximieren.",
          nl: "Range constructie houdt in strategisch beslissen welke handen op te nemen in je range voor elke actie (raise, call, fold) in verschillende posities en situaties om balans te behouden en EV te maximaliseren."
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
