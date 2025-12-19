// Quiz Template - Level 2: Bord spelletjes - Backgammon
(function() {
  const level2 = {
    name: {
      en: "Backgammon - Intermediate",
      es: "Backgammon - Intermedio",
      de: "Backgammon - Mittelstufe",
      nl: "Backgammon - Gemiddeld"
    },
    questions: [
      {
        question: {
          en: "What is the optimal opening move for rolling 6-1?",
          es: "¿Cuál es el movimiento de apertura óptimo al sacar 6-1?",
          de: "Was ist der optimale Eröffnungszug bei 6-1?",
          nl: "Wat is de optimale openingszet bij het gooien van 6-1?"
        },
        options: [
          { en: "Make the bar point (13/7, 8/7)", es: "Hacer el punto de barra (13/7, 8/7)", de: "Den Bar-Punkt machen (13/7, 8/7)", nl: "Maak het bar punt (13/7, 8/7)" },
          { en: "Split back checkers (24/18, 13/12)", es: "Dividir fichas traseras (24/18, 13/12)", de: "Hintere Steine teilen (24/18, 13/12)", nl: "Verdeel achterste stenen (24/18, 13/12)" },
          { en: "Move builders (13/7, 13/12)", es: "Mover constructores (13/7, 13/12)", de: "Baumeister bewegen (13/7, 13/12)", nl: "Beweeg bouwers (13/7, 13/12)" },
          { en: "Slot the 5-point (13/7, 6/5)", es: "Ocupar el punto 5 (13/7, 6/5)", de: "Den 5-Punkt besetzen (13/7, 6/5)", nl: "Bezet het 5-punt (13/7, 6/5)" }
        ],
        correct: 0,
        explanation: {
          en: "The opening roll of 6-1 is best played by making your bar point (13/7, 8/7). The bar point is strategically valuable for blocking opponent's back checkers.",
          es: "La tirada de apertura de 6-1 se juega mejor haciendo tu punto de barra (13/7, 8/7). El punto de barra es estratégicamente valioso para bloquear las fichas traseras del oponente.",
          de: "Der Eröffnungswurf 6-1 wird am besten gespielt indem Sie Ihren Bar-Punkt machen (13/7, 8/7). Der Bar-Punkt ist strategisch wertvoll um die hinteren Steine des Gegners zu blockieren.",
          nl: "De openingsworp van 6-1 wordt het best gespeeld door je bar punt te maken (13/7, 8/7). Het bar punt is strategisch waardevol voor het blokkeren van de achterste stenen van de tegenstander."
        }
      },
      {
        question: {
          en: "What is a 'blot' in backgammon?",
          es: "¿Qué es un 'blot' en backgammon?",
          de: "Was ist ein 'Blot' beim Backgammon?",
          nl: "Wat is een 'blot' bij backgammon?"
        },
        options: [
          { en: "Blocked point", es: "Un punto bloqueado", de: "Ein blockierter Punkt", nl: "Een geblokkeerd punt" },
          { en: "Single checker on point", es: "Una sola ficha en un punto", de: "Ein einzelner Stein auf einem Punkt", nl: "Een enkele steen op een punt" },
          { en: "2+ checkers on point", es: "Dos o más fichas en un punto", de: "Zwei oder mehr Steine auf einem Punkt", nl: "Twee of meer stenen op een punt" },
          { en: "Checker on bar", es: "Una ficha en la barra", de: "Ein Stein auf der Bar", nl: "Een steen op de bar" }
        ],
        correct: 1,
        explanation: {
          en: "A blot is a single checker sitting alone on a point. It is vulnerable to being hit by an opponent's checker and sent to the bar.",
          es: "Un blot es una sola ficha que se encuentra sola en un punto. Es vulnerable a ser golpeada por una ficha del oponente y enviada a la barra.",
          de: "Ein Blot ist ein einzelner Stein, der allein auf einem Punkt steht. Er ist anfällig dafür, von einem gegnerischen Stein getroffen und auf die Bar geschickt zu werden.",
          nl: "Een blot is een enkele steen die alleen op een punt staat. Hij is kwetsbaar om geraakt te worden door een steen van de tegenstander en naar de bar gestuurd te worden."
        }
      },
      {
        question: {
          en: "What is the most important point to establish in your home board?",
          es: "¿Cuál es el punto más importante para establecer en tu tablero interior?",
          de: "Was ist der wichtigste Punkt im Home Board?",
          nl: "Wat is het belangrijkste punt om te vestigen in je thuisbord?"
        },
        options: [
          { en: "The 1-point", es: "El punto 1", de: "Der 1-Punkt", nl: "Het 1-punt" },
          { en: "The 6-point", es: "El punto 6", de: "Der 6-Punkt", nl: "Het 6-punt" },
          { en: "The 5-point", es: "El punto 5", de: "Der 5-Punkt", nl: "Het 5-punt" },
          { en: "The 4-point", es: "El punto 4", de: "Der 4-Punkt", nl: "Het 4-punt" }
        ],
        correct: 2,
        explanation: {
          en: "The 5-point is the most valuable point in your home board. It provides the best anchor for your home board prime and is hardest for opponents to escape from.",
          es: "El punto 5 es el punto más valioso en tu tablero interior. Proporciona el mejor ancla para tu prime de tablero interior y es el más difícil para que los oponentes escapen.",
          de: "Der 5-Punkt ist der wertvollste Punkt in Ihrem Home Board. Er bietet den besten Anker für Ihr Home Board Prime und ist am schwersten für Gegner zu entkommen.",
          nl: "Het 5-punt is het meest waardevolle punt in je thuisbord. Het biedt het beste anker voor je thuisbord prime en is het moeilijkst voor tegenstanders om van te ontsnappen."
        }
      },
      {
        question: {
          en: "What is 'slotting' in backgammon strategy?",
          es: "¿Qué es 'slotting' en la estrategia de backgammon?",
          de: "Was ist 'Slotting' in der Backgammon-Strategie?",
          nl: "Wat is 'slotting' in de backgammon-strategie?"
        },
        options: [
          { en: "Moving checkers to bar", es: "Mover fichas a la barra", de: "Steine zur Bar bewegen", nl: "Stenen naar de bar verplaatsen" },
          { en: "Placing a single checker to make a point next turn", es: "Colocar una sola ficha para hacer un punto en el siguiente turno", de: "Einen einzelnen Stein platzieren um im nächsten Zug einen Punkt zu machen", nl: "Een enkele steen plaatsen om het volgende beurt een punt te maken" },
          { en: "Blocking all points", es: "Bloquear todos los puntos", de: "Alle Punkte blockieren", nl: "Alle punten blokkeren" },
          { en: "Bearing off quickly", es: "Sacar fichas rápidamente", de: "Schnell auswürfeln", nl: "Snel uitwerpen" }
        ],
        correct: 1,
        explanation: {
          en: "Slotting means placing a single vulnerable checker on a valuable point, hoping to cover it with a second checker on your next turn to make the point. It's a calculated risk.",
          es: "Slotting significa colocar una sola ficha vulnerable en un punto valioso, esperando cubrirla con una segunda ficha en tu siguiente turno para hacer el punto. Es un riesgo calculado.",
          de: "Slotting bedeutet einen einzelnen verwundbaren Stein auf einen wertvollen Punkt zu platzieren, in der Hoffnung ihn im nächsten Zug mit einem zweiten Stein zu decken um den Punkt zu machen. Es ist ein kalkuliertes Risiko.",
          nl: "Slotting betekent het plaatsen van een enkele kwetsbare steen op een waardevol punt, hopend het te dekken met een tweede steen op je volgende beurt om het punt te maken. Het is een berekend risico."
        }
      },
      {
        question: {
          en: "What is 'bearing off' in backgammon?",
          es: "¿Qué es 'sacar' en backgammon?",
          de: "Was ist 'Auswürfeln' beim Backgammon?",
          nl: "Wat is 'uitbrengen' bij backgammon?"
        },
        options: [
          { en: "Move checkers to bar", es: "Mover fichas a la barra", de: "Steine zur Bar bewegen", nl: "Stenen naar de bar verplaatsen" },
          { en: "Block opponent checkers", es: "Bloquear las fichas del oponente", de: "Gegnerische Steine blockieren", nl: "Stenen van de tegenstander blokkeren" },
          { en: "Start game", es: "Comenzar el juego", de: "Das Spiel beginnen", nl: "Het spel beginnen" },
          { en: "Remove checkers after reaching home", es: "Eliminar fichas del tablero una vez que llegan al tablero interior", de: "Steine vom Brett entfernen, sobald sie das Home-Board erreichen", nl: "Stenen van het bord verwijderen zodra ze het thuisbord bereiken" }
        ],
        correct: 3,
        explanation: {
          en: "Bearing off is the final phase of the game where players remove their checkers from the board after all of them are in the home board. The first player to bear off all checkers wins.",
          es: "Sacar es la fase final del juego donde los jugadores eliminan sus fichas del tablero después de que todas estén en el tablero interior. El primer jugador que saca todas las fichas gana.",
          de: "Auswürfeln ist die Endphase des Spiels, in der Spieler ihre Steine vom Brett entfernen, nachdem alle im Home-Board sind. Der erste Spieler, der alle Steine auswürfelt, gewinnt.",
          nl: "Uitbrengen is de laatste fase van het spel waarbij spelers hun stenen van het bord verwijderen nadat ze allemaal in het thuisbord zijn. De eerste speler die alle stenen uitbrengt wint."
        }
      },
      {
        question: {
          en: "What is 'splitting' in backgammon opening strategy?",
          es: "¿Qué es 'splitting' en la estrategia de apertura de backgammon?",
          de: "Was ist 'Splitting' in der Backgammon-Eröffnungsstrategie?",
          nl: "Wat is 'splitting' in de backgammon openingsstrategie?"
        },
        options: [
          { en: "Dividing checkers between home boards", es: "Dividir fichas entre tableros de casa", de: "Steine zwischen Home Boards aufteilen", nl: "Stenen tussen thuisborden verdelen" },
          { en: "Moving both back checkers apart from starting position", es: "Mover ambas fichas traseras separadas de la posición inicial", de: "Beide hinteren Steine von der Startposition weg bewegen", nl: "Beide achterste stenen uit de startpositie verplaatsen" },
          { en: "Using doubling cube", es: "Usar el cubo de doblaje", de: "Den Dopplungswürfel verwenden", nl: "De verdubbeldob gebruiken" },
          { en: "Bearing off checkers", es: "Sacar fichas", de: "Steine auswürfeln", nl: "Stenen uitwerpen" }
        ],
        correct: 1,
        explanation: {
          en: "Splitting means moving your back checkers (starting on opponent's 1-point) apart, usually to gain better positioning or create anchor opportunities in the opponent's board.",
          es: "Splitting significa mover tus fichas traseras (que comienzan en el punto 1 del oponente) separadas, generalmente para obtener mejor posicionamiento o crear oportunidades de ancla en el tablero del oponente.",
          de: "Splitting bedeutet Ihre hinteren Steine (die auf dem 1-Punkt des Gegners beginnen) auseinander zu bewegen, normalerweise um bessere Positionierung zu erlangen oder Ankermöglichkeiten im Brett des Gegners zu schaffen.",
          nl: "Splitting betekent je achterste stenen (die beginnen op het 1-punt van de tegenstander) uit elkaar bewegen, meestal om betere positionering te krijgen of ankermogelijkheden in het bord van de tegenstander te creëren."
        }
      },
      {
        question: {
          en: "What does 'owning the cube' mean in backgammon?",
          es: "¿Qué significa 'poseer el cubo' en backgammon?",
          de: "Was bedeutet 'den Würfel besitzen' beim Backgammon?",
          nl: "Wat betekent 'de dobbelsteen bezitten' bij backgammon?"
        },
        options: [
          { en: "Having exclusive right to offer the next double", es: "Tener el derecho exclusivo de ofrecer el siguiente doble", de: "Das ausschließliche Recht haben das nächste Doppeln anzubieten", nl: "Het exclusieve recht hebben om de volgende verdubbeling aan te bieden" },
          { en: "Rolling the most doubles", es: "Sacar la mayoría de dobles", de: "Die meisten Paschs würfeln", nl: "De meeste dubbels gooien" },
          { en: "Controlling the center", es: "Controlar el centro", de: "Die Mitte kontrollieren", nl: "Het midden controleren" },
          { en: "Having most checkers", es: "Tener la mayoría de fichas", de: "Die meisten Steine haben", nl: "De meeste stenen hebben" }
        ],
        correct: 0,
        explanation: {
          en: "Owning the cube means you are the player who last accepted a double, giving you the exclusive right to offer the next double. This is a significant strategic advantage.",
          es: "Poseer el cubo significa que eres el jugador que aceptó el último doble, dándote el derecho exclusivo de ofrecer el siguiente doble. Esta es una ventaja estratégica significativa.",
          de: "Den Würfel besitzen bedeutet dass Sie der Spieler sind der zuletzt ein Doppeln akzeptiert hat, was Ihnen das ausschließliche Recht gibt das nächste Doppeln anzubieten. Dies ist ein erheblicher strategischer Vorteil.",
          nl: "De dobbelsteen bezitten betekent dat je de speler bent die het laatste een verdubbeling heeft geaccepteerd, wat je het exclusieve recht geeft om de volgende verdubbeling aan te bieden. Dit is een aanzienlijk strategisch voordeel."
        }
      },
      {
        question: {
          en: "What is a 'builder' in backgammon?",
          es: "¿Qué es un 'constructor' en backgammon?",
          de: "Was ist ein 'Baumeister' beim Backgammon?",
          nl: "Wat is een 'bouwer' bij backgammon?"
        },
        options: [
          { en: "A checker positioned to help make points", es: "Una ficha posicionada para ayudar a hacer puntos", de: "Ein Stein der positioniert ist um Punkte zu machen", nl: "Een steen gepositioneerd om punten te maken" },
          { en: "The player setting up the board", es: "El jugador que configura el tablero", de: "Der Spieler der das Brett aufbaut", nl: "De speler die het bord opzet" },
          { en: "A checker on the bar", es: "Una ficha en la barra", de: "Ein Stein auf der Bar", nl: "Een steen op de bar" },
          { en: "The doubling cube", es: "El cubo de doblaje", de: "Der Dopplungswürfel", nl: "De verdubbeldob" }
        ],
        correct: 0,
        explanation: {
          en: "A builder is a checker placed on a strategic point (often the midpoint or 8-point) that can be used on future rolls to make other valuable points in your board.",
          es: "Un constructor es una ficha colocada en un punto estratégico (a menudo el punto medio o el punto 8) que se puede usar en futuras tiradas para hacer otros puntos valiosos en tu tablero.",
          de: "Ein Baumeister ist ein Stein der auf einem strategischen Punkt platziert ist (oft der Mittelpunkt oder 8-Punkt) und in zukünftigen Würfen verwendet werden kann um andere wertvolle Punkte in Ihrem Brett zu machen.",
          nl: "Een bouwer is een steen geplaatst op een strategisch punt (vaak het middenpunt of 8-punt) die kan worden gebruikt in toekomstige worpen om andere waardevolle punten in je bord te maken."
        }
      },
      {
        question: {
          en: "What is the 'running game' in backgammon?",
          es: "¿Qué es el 'juego de carrera' en backgammon?",
          de: "Was ist das 'Rennspiel' beim Backgammon?",
          nl: "Wat is het 'racespel' bij backgammon?"
        },
        options: [
          { en: "When both players race to bear off with minimal contact", es: "Cuando ambos jugadores corren para sacar con contacto mínimo", de: "Wenn beide Spieler zum Auswürfeln mit minimalem Kontakt rennen", nl: "Wanneer beide spelers racen om uit te werpen met minimaal contact" },
          { en: "The opening phase", es: "La fase de apertura", de: "Die Eröffnungsphase", nl: "De openingsfase" },
          { en: "Playing very quickly", es: "Jugar muy rápido", de: "Sehr schnell spielen", nl: "Heel snel spelen" },
          { en: "Using the doubling cube often", es: "Usar el cubo de doblaje a menudo", de: "Den Dopplungswürfel oft verwenden", nl: "De verdubbeldob vaak gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "A running game occurs when both players have passed each other's checkers and are simply racing to bear off all their pieces with minimal contact or blocking. Pip count becomes crucial.",
          es: "Un juego de carrera ocurre cuando ambos jugadores han pasado las fichas del otro y simplemente están corriendo para sacar todas sus piezas con contacto o bloqueo mínimos. El conteo de pips se vuelve crucial.",
          de: "Ein Rennspiel tritt auf wenn beide Spieler aneinander vorbei sind und einfach darum wetteifern alle ihre Steine mit minimalem Kontakt oder Blockieren auszuwürfeln. Die Pip-Zählung wird entscheidend.",
          nl: "Een racespel vindt plaats wanneer beide spelers elkaars stenen zijn gepasseerd en simpelweg racen om al hun stukken uit te werpen met minimaal contact of blokkeren. Pip count wordt cruciaal."
        }
      },
      {
        question: {
          en: "What is 'making a point' in backgammon?",
          es: "¿Qué es 'hacer un punto' en backgammon?",
          de: "Was bedeutet 'einen Punkt machen' beim Backgammon?",
          nl: "Wat is 'een punt maken' bij backgammon?"
        },
        options: [
          { en: "Scoring in the game", es: "Anotar en el juego", de: "Im Spiel punkten", nl: "Scoren in het spel" },
          { en: "Placing two or more checkers on the same point", es: "Colocar dos o más fichas en el mismo punto", de: "Zwei oder mehr Steine auf denselben Punkt platzieren", nl: "Twee of meer stenen op hetzelfde punt plaatsen" },
          { en: "Hitting an opponent's blot", es: "Golpear un blot del oponente", de: "Einen gegnerischen Blot schlagen", nl: "Een blot van de tegenstander raken" },
          { en: "Bearing off a checker", es: "Sacar una ficha", de: "Einen Stein auswürfeln", nl: "Een steen uitwerpen" }
        ],
        correct: 1,
        explanation: {
          en: "Making a point means placing two or more of your checkers on the same point, which blocks that point from your opponent and creates a safe landing spot for your other checkers.",
          es: "Hacer un punto significa colocar dos o más de tus fichas en el mismo punto, lo que bloquea ese punto para tu oponente y crea un lugar de aterrizaje seguro para tus otras fichas.",
          de: "Einen Punkt machen bedeutet zwei oder mehr Ihrer Steine auf denselben Punkt zu platzieren, was diesen Punkt für Ihren Gegner blockiert und einen sicheren Landeplatz für Ihre anderen Steine schafft.",
          nl: "Een punt maken betekent twee of meer van je stenen op hetzelfde punt plaatsen, wat dat punt blokkeert voor je tegenstander en een veilige landingsplaats creëert voor je andere stenen."
        }
      },
      {
        question: {
          en: "What is an 'advanced anchor' in backgammon?",
          es: "¿Qué es un 'ancla avanzada' en backgammon?",
          de: "Was ist ein 'fortgeschrittener Anker' beim Backgammon?",
          nl: "Wat is een 'geavanceerd anker' bij backgammon?"
        },
        options: [
          { en: "An anchor on opponent's 4-point or 5-point", es: "Un ancla en el punto 4 o 5 del oponente", de: "Ein Anker auf dem 4- oder 5-Punkt des Gegners", nl: "Een anker op het 4-punt of 5-punt van de tegenstander" },
          { en: "Your own 5-point", es: "Tu propio punto 5", de: "Ihr eigener 5-Punkt", nl: "Je eigen 5-punt" },
          { en: "The bar point", es: "El punto de barra", de: "Der Bar-Punkt", nl: "Het bar punt" },
          { en: "Any point with 3+ checkers", es: "Cualquier punto con 3+ fichas", de: "Jeder Punkt mit 3+ Steinen", nl: "Elk punt met 3+ stenen" }
        ],
        correct: 0,
        explanation: {
          en: "An advanced anchor is a point you control in your opponent's home board, typically the 4-point or 5-point. It provides a strong defensive position and hitting opportunities.",
          es: "Un ancla avanzada es un punto que controlas en el tablero interior de tu oponente, típicamente el punto 4 o 5. Proporciona una fuerte posición defensiva y oportunidades de golpeo.",
          de: "Ein fortgeschrittener Anker ist ein Punkt den Sie im Home Board Ihres Gegners kontrollieren, typischerweise der 4- oder 5-Punkt. Er bietet eine starke Verteidigungsposition und Schlagmöglichkeiten.",
          nl: "Een geavanceerd anker is een punt dat je controleert in het thuisbord van je tegenstander, meestal het 4-punt of 5-punt. Het biedt een sterke verdedigingspositie en raakkansen."
        }
      },
      {
        question: {
          en: "Can you bear off checkers if you have checkers on the bar?",
          es: "¿Puedes sacar fichas si tienes fichas en la barra?",
          de: "Kannst du Steine auswürfeln, wenn du Steine auf der Bar hast?",
          nl: "Kun je stenen uitbrengen als je stenen op de bar hebt?"
        },
        options: [
          { en: "Only last turn", es: "Solo en el último turno", de: "Nur im letzten Zug", nl: "Alleen op de laatste beurt" },
          { en: "Yes, always", es: "Sí, siempre", de: "Ja, immer", nl: "Ja, altijd" },
          { en: "No, enter all checkers first", es: "No, primero debes entrar todas las fichas", de: "Nein, du musst zuerst alle Steine eingeben", nl: "Nee, je moet eerst alle stenen binnenbrengen" },
          { en: "Yes, only on doubles", es: "Sí, pero solo si sacas dobles", de: "Ja, aber nur bei einem Pasch", nl: "Ja, maar alleen als je dubbel gooit" }
        ],
        correct: 2,
        explanation: {
          en: "You cannot bear off checkers while you have any checkers on the bar. You must first re-enter all checkers from the bar before you can resume bearing off.",
          es: "No puedes sacar fichas mientras tengas cualquier ficha en la barra. Primero debes volver a entrar todas las fichas de la barra antes de poder reanudar el proceso de sacar.",
          de: "Du kannst keine Steine auswürfeln, solange du Steine auf der Bar hast. Du musst zuerst alle Steine von der Bar wieder eingeben, bevor du mit dem Auswürfeln fortfahren kannst.",
          nl: "Je kunt geen stenen uitbrengen terwijl je stenen op de bar hebt. Je moet eerst alle stenen van de bar opnieuw binnenbrengen voordat je kunt doorgaan met uitbrengen."
        }
      },
      {
        question: {
          en: "What is the 'Crawford rule' in backgammon?",
          es: "¿Qué es la 'regla de Crawford' en backgammon?",
          de: "Was ist die 'Crawford-Regel' beim Backgammon?",
          nl: "Wat is de 'Crawford regel' bij backgammon?"
        },
        options: [
          { en: "Bear off in exact order", es: "Debe sacar en orden exacto", de: "Muss in exakter Reihenfolge auswürfeln", nl: "Moet in exacte volgorde uitbrengen" },
          { en: "Start player alternates", es: "El jugador inicial alterna cada juego", de: "Startspieler wechselt jedes Spiel", nl: "Startspeler wisselt elk spel" },
          { en: "No cube after reaching match point", es: "Sin cubo de doblaje en el siguiente juego después de que un jugador alcance el punto de partido", de: "Kein Dopplungswürfel im nächsten Spiel, nachdem ein Spieler den Matchpunkt erreicht", nl: "Geen verdubbeldob in het volgende spel nadat een speler het matchpunt bereikt" },
          { en: "Doubles count 3x", es: "Los dobles cuentan triple", de: "Pasch zählt dreifach", nl: "Dubbel telt drievoudig" }
        ],
        correct: 2,
        explanation: {
          en: "The Crawford rule states that when a player first reaches a score one point away from winning the match, the doubling cube may not be used in the following game.",
          es: "La regla de Crawford establece que cuando un jugador alcanza por primera vez una puntuación a un punto de ganar el partido, el cubo de doblaje no puede usarse en el siguiente juego.",
          de: "Die Crawford-Regel besagt, dass wenn ein Spieler zum ersten Mal einen Punkt vom Matchgewinn entfernt ist, der Dopplungswürfel im folgenden Spiel nicht verwendet werden darf.",
          nl: "De Crawford regel stelt dat wanneer een speler voor het eerst een score bereikt die één punt verwijderd is van het winnen van de wedstrijd, de verdubbeldob niet mag worden gebruikt in het volgende spel."
        }
      },
      {
        question: {
          en: "What does it mean to 'hit' a checker?",
          es: "¿Qué significa 'golpear' una ficha?",
          de: "Was bedeutet es, einen Stein zu 'schlagen'?",
          nl: "Wat betekent het om een steen te 'raken'?"
        },
        options: [
          { en: "Land on blot, send to bar", es: "Aterrizar en un blot y enviarlo a la barra", de: "Auf einem Blot landen und ihn zur Bar schicken", nl: "Op een blot landen en het naar de bar sturen" },
          { en: "Move past opponent checker", es: "Pasar más allá de una ficha del oponente", de: "An einem gegnerischen Stein vorbeigehen", nl: "Voorbij een steen van de tegenstander gaan" },
          { en: "Block opponent point", es: "Bloquear un punto del oponente", de: "Einen Punkt des Gegners blockieren", nl: "Een punt van de tegenstander blokkeren" },
          { en: "Bear off checker", es: "Sacar una ficha", de: "Einen Stein auswürfeln", nl: "Een steen uitbrengen" }
        ],
        correct: 0,
        explanation: {
          en: "Hitting means landing on a point occupied by a single opponent checker (blot), which sends that checker to the bar. The opponent must then re-enter that checker before making other moves.",
          es: "Golpear significa aterrizar en un punto ocupado por una sola ficha del oponente (blot), lo que envía esa ficha a la barra. El oponente debe entonces volver a entrar esa ficha antes de hacer otros movimientos.",
          de: "Schlagen bedeutet, auf einem Punkt zu landen, der von einem einzelnen gegnerischen Stein (Blot) besetzt ist, was diesen Stein zur Bar schickt. Der Gegner muss dann diesen Stein wieder eingeben, bevor er andere Züge macht.",
          nl: "Raken betekent landen op een punt bezet door een enkele steen van de tegenstander (blot), die die steen naar de bar stuurt. De tegenstander moet die steen dan opnieuw binnenbrengen voordat hij andere zetten doet."
        }
      },
      {
        question: {
          en: "What is 'duplication' in backgammon strategy?",
          es: "¿Qué es 'duplicación' en la estrategia de backgammon?",
          de: "Was ist 'Duplikation' in der Backgammon-Strategie?",
          nl: "Wat is 'duplicatie' in de backgammon-strategie?"
        },
        options: [
          { en: "Making the same point twice", es: "Hacer el mismo punto dos veces", de: "Denselben Punkt zweimal machen", nl: "Hetzelfde punt twee keer maken" },
          { en: "Positioning so opponent needs same number for multiple tasks", es: "Posicionarse para que el oponente necesite el mismo número para múltiples tareas", de: "Sich so positionieren dass der Gegner dieselbe Zahl für mehrere Aufgaben braucht", nl: "Positioneren zodat tegenstander hetzelfde getal nodig heeft voor meerdere taken" },
          { en: "Rolling doubles", es: "Sacar dobles", de: "Pasch würfeln", nl: "Dubbel gooien" },
          { en: "Having two anchors", es: "Tener dos anclas", de: "Zwei Anker haben", nl: "Twee ankers hebben" }
        ],
        correct: 1,
        explanation: {
          en: "Duplication is positioning your checkers so that your opponent needs the same dice number to accomplish multiple different objectives, reducing their effective number of good rolls.",
          es: "Duplicación es posicionar tus fichas de modo que tu oponente necesite el mismo número de dados para lograr múltiples objetivos diferentes, reduciendo su número efectivo de buenas tiradas.",
          de: "Duplikation ist das Positionieren Ihrer Steine so dass Ihr Gegner dieselbe Würfelzahl benötigt um mehrere verschiedene Ziele zu erreichen, was ihre effektive Anzahl guter Würfe reduziert.",
          nl: "Duplicatie is het positioneren van je stenen zodat je tegenstander hetzelfde dobbelsteengetal nodig heeft om meerdere verschillende doelstellingen te bereiken, wat hun effectieve aantal goede worpen vermindert."
        }
      },
      {
        question: {
          en: "How many dice are used in backgammon?",
          es: "¿Cuántos dados se usan en backgammon?",
          de: "Wie viele Würfel werden beim Backgammon verwendet?",
          nl: "Hoeveel dobbelstenen worden gebruikt bij backgammon?"
        },
        options: [
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "1", es: "1", de: "1", nl: "1" }
        ],
        correct: 0,
        explanation: {
          en: "Backgammon is played with two standard six-sided dice. Each player rolls both dice on their turn to determine how far they can move their checkers.",
          es: "El backgammon se juega con dos dados estándar de seis caras. Cada jugador tira ambos dados en su turno para determinar qué tan lejos pueden mover sus fichas.",
          de: "Backgammon wird mit zwei Standard-Sechsseiten-Würfeln gespielt. Jeder Spieler würfelt beide Würfel in seinem Zug, um zu bestimmen, wie weit er seine Steine bewegen kann.",
          nl: "Backgammon wordt gespeeld met twee standaard zeszijdige dobbelstenen. Elke speler gooit beide dobbelstenen op hun beurt om te bepalen hoe ver ze hun stenen kunnen verplaatsen."
        }
      },
      {
        question: {
          en: "What is the 'home board' in backgammon?",
          es: "¿Qué es el 'tablero interior' en backgammon?",
          de: "Was ist das 'Home-Board' beim Backgammon?",
          nl: "Wat is het 'thuisbord' bij backgammon?"
        },
        options: [
          { en: "The starting position", es: "La posición inicial", de: "Die Startposition", nl: "De startpositie" },
          { en: "Last 6 pts to bear off from", es: "Los últimos seis puntos desde donde sacas", de: "Die letzten sechs Punkte, von denen aus man auswürfelt", nl: "De laatste zes punten waar je vanaf uitbrengt" },
          { en: "Middle of board", es: "El medio del tablero", de: "Die Mitte des Bretts", nl: "Het midden van het bord" },
          { en: "Opponent side", es: "El lado del oponente", de: "Die Seite des Gegners", nl: "De kant van de tegenstander" }
        ],
        correct: 1,
        explanation: {
          en: "The home board is the quadrant containing points 1-6 for each player. You must move all your checkers to your home board before you can begin bearing them off.",
          es: "El tablero interior es el cuadrante que contiene los puntos 1-6 para cada jugador. Debes mover todas tus fichas a tu tablero interior antes de poder comenzar a sacarlas.",
          de: "Das Home-Board ist der Quadrant mit den Punkten 1-6 für jeden Spieler. Du musst alle deine Steine in dein Home-Board bewegen, bevor du mit dem Auswürfeln beginnen kannst.",
          nl: "Het thuisbord is het kwadrant met punten 1-6 voor elke speler. Je moet al je stenen naar je thuisbord verplaatsen voordat je ze kunt beginnen uit te brengen."
        }
      },
      {
        question: {
          en: "In which direction do the checkers move around the board?",
          es: "¿En qué dirección se mueven las fichas alrededor del tablero?",
          de: "In welche Richtung bewegen sich die Steine um das Brett?",
          nl: "In welke richting bewegen de stenen rond het bord?"
        },
        options: [
          { en: "Choose direction", es: "Los jugadores pueden elegir su dirección", de: "Spieler können ihre Richtung wählen", nl: "Spelers kunnen hun richting kiezen" },
          { en: "Both same direction", es: "Ambos jugadores se mueven en la misma dirección", de: "Beide Spieler bewegen sich in dieselbe Richtung", nl: "Beide spelers bewegen in dezelfde richting" },
          { en: "Opposite directions", es: "Direcciones opuestas - uno en sentido horario, uno en sentido antihorario", de: "Entgegengesetzte Richtungen - einer im Uhrzeigersinn, einer gegen den Uhrzeigersinn", nl: "Tegengestelde richtingen - één met de klok mee, één tegen de klok in" },
          { en: "Clockwise for both", es: "En sentido horario para ambos jugadores", de: "Im Uhrzeigersinn für beide Spieler", nl: "Met de klok mee voor beide spelers" }
        ],
        correct: 2,
        explanation: {
          en: "In backgammon, the two players move their checkers in opposite directions around the board - one moves clockwise while the other moves counter-clockwise.",
          es: "En backgammon, los dos jugadores mueven sus fichas en direcciones opuestas alrededor del tablero - uno se mueve en sentido horario mientras el otro se mueve en sentido antihorario.",
          de: "Beim Backgammon bewegen die beiden Spieler ihre Steine in entgegengesetzten Richtungen um das Brett - einer bewegt sich im Uhrzeigersinn, während sich der andere gegen den Uhrzeigersinn bewegt.",
          nl: "Bij backgammon bewegen de twee spelers hun stenen in tegengestelde richtingen rond het bord - één beweegt met de klok mee terwijl de ander tegen de klok in beweegt."
        }
      },
      {
        question: {
          en: "What happens if you cannot make a legal move with your dice roll?",
          es: "¿Qué sucede si no puedes hacer un movimiento legal con tu tirada de dados?",
          de: "Was passiert, wenn du mit deinem Würfelwurf keinen legalen Zug machen kannst?",
          nl: "Wat gebeurt er als je geen legale zet kunt doen met je dobbelworpen?"
        },
        options: [
          { en: "Move opponent checkers", es: "Puedes mover las fichas del oponente", de: "Du kannst gegnerische Steine bewegen", nl: "Je kunt stenen van de tegenstander verplaatsen" },
          { en: "Roll again", es: "Debes tirar de nuevo", de: "Du musst erneut würfeln", nl: "Je moet opnieuw gooien" },
          { en: "Turn forfeited", es: "Tu turno se pierde", de: "Dein Zug verfällt", nl: "Je beurt vervalt" },
          { en: "Lose game", es: "Pierdes el juego", de: "Du verlierst das Spiel", nl: "Je verliest het spel" }
        ],
        correct: 2,
        explanation: {
          en: "If you cannot make any legal moves with your dice roll, your turn is forfeited and play passes to your opponent. This can happen if all possible landing points are blocked.",
          es: "Si no puedes hacer ningún movimiento legal con tu tirada de dados, tu turno se pierde y el juego pasa a tu oponente. Esto puede suceder si todos los puntos de aterrizaje posibles están bloqueados.",
          de: "Wenn du mit deinem Würfelwurf keine legalen Züge machen kannst, verfällt dein Zug und das Spiel geht an deinen Gegner über. Dies kann passieren, wenn alle möglichen Landepunkte blockiert sind.",
          nl: "Als je geen legale zetten kunt doen met je dobbelworpen, vervalt je beurt en gaat het spel over naar je tegenstander. Dit kan gebeuren als alle mogelijke landingspunten geblokkeerd zijn."
        }
      },
      {
        question: {
          en: "What is the origin of the name 'backgammon'?",
          es: "¿Cuál es el origen del nombre 'backgammon'?",
          de: "Was ist der Ursprung des Namens 'Backgammon'?",
          nl: "Wat is de oorsprong van de naam 'backgammon'?"
        },
        options: [
          { en: "From manufacturer", es: "Del fabricante del tablero", de: "Vom Bretthersteller", nl: "Van de bordenfabrikant" },
          { en: "After inventor", es: "Nombrado por su inventor", de: "Benannt nach seinem Erfinder", nl: "Genoemd naar zijn uitvinder" },
          { en: "Greek term", es: "Término griego antiguo", de: "Altgriechischer Begriff", nl: "Oud-Griekse term" },
          { en: "Middle English for back game", es: "Inglés medio para 'juego de vuelta'", de: "Mittelenglisch für 'Zurück-Spiel'", nl: "Middelengels voor 'terug spel'" }
        ],
        correct: 3,
        explanation: {
          en: "The name 'backgammon' comes from Middle English 'baec' (back) and 'gamen' (game), likely referring to how pieces can be sent back when hit.",
          es: "El nombre 'backgammon' proviene del inglés medio 'baec' (atrás) y 'gamen' (juego), probablemente refiriéndose a cómo las piezas pueden ser enviadas de vuelta cuando son golpeadas.",
          de: "Der Name 'Backgammon' kommt vom Mittelenglischen 'baec' (zurück) und 'gamen' (Spiel), wahrscheinlich bezogen darauf, wie Steine zurückgeschickt werden können, wenn sie geschlagen werden.",
          nl: "De naam 'backgammon' komt van het Middelengelse 'baec' (terug) en 'gamen' (spel), waarschijnlijk verwijzend naar hoe stukken terug kunnen worden gestuurd wanneer ze worden geraakt."
        }
      },
      {
        question: {
          en: "What is the 'golden point' in backgammon?",
          es: "¿Qué es el 'punto dorado' en backgammon?",
          de: "Was ist der 'goldene Punkt' beim Backgammon?",
          nl: "Wat is het 'gouden punt' bij backgammon?"
        },
        options: [
          { en: "The 5-point", es: "El punto 5", de: "Der 5-Punkt", nl: "Het 5-punt" },
          { en: "The 7-point (bar point)", es: "El punto 7 (punto de barra)", de: "Der 7-Punkt (Bar-Punkt)", nl: "Het 7-punt (bar punt)" },
          { en: "The 1-point", es: "El punto 1", de: "Der 1-Punkt", nl: "Het 1-punt" },
          { en: "The 13-point (midpoint)", es: "El punto 13 (punto medio)", de: "Der 13-Punkt (Mittelpunkt)", nl: "Het 13-punt (middelpunt)" }
        ],
        correct: 0,
        explanation: {
          en: "The 5-point is often called the golden point because it's the most strategically valuable point in your home board. Controlling it provides excellent defensive and offensive positioning.",
          es: "El punto 5 a menudo se llama el punto dorado porque es el punto estratégicamente más valioso en tu tablero interior. Controlarlo proporciona excelente posicionamiento defensivo y ofensivo.",
          de: "Der 5-Punkt wird oft der goldene Punkt genannt, weil er der strategisch wertvollste Punkt in Ihrem Home Board ist. Seine Kontrolle bietet hervorragende defensive und offensive Positionierung.",
          nl: "Het 5-punt wordt vaak het gouden punt genoemd omdat het het strategisch meest waardevolle punt in je thuisbord is. Het controleren ervan biedt uitstekende defensieve en offensieve positionering."
        }
      },
      {
        question: {
          en: "What is a 'back game' strategy?",
          es: "¿Qué es una estrategia de 'juego trasero'?",
          de: "Was ist eine 'Rückspiel'-Strategie?",
          nl: "Wat is een 'achterspel'-strategie?"
        },
        options: [
          { en: "Holding 2+ points in opponent's home board", es: "Mantener 2 o más puntos en el tablero interior del oponente", de: "2 oder mehr Punkte im Home Board des Gegners halten", nl: "2 of meer punten vasthouden in het thuisbord van de tegenstander" },
          { en: "Moving all checkers backward", es: "Mover todas las fichas hacia atrás", de: "Alle Steine rückwärts bewegen", nl: "Alle stenen achterwaarts verplaatsen" },
          { en: "Starting from the back", es: "Comenzar desde atrás", de: "Von hinten beginnen", nl: "Van achteren beginnen" },
          { en: "Defending only", es: "Solo defenderse", de: "Nur verteidigen", nl: "Alleen verdedigen" }
        ],
        correct: 0,
        explanation: {
          en: "A back game is a defensive strategy where you hold two or more points in your opponent's home board, waiting for opportunities to hit their checkers as they try to bear off.",
          es: "Un juego trasero es una estrategia defensiva donde mantienes dos o más puntos en el tablero interior de tu oponente, esperando oportunidades para golpear sus fichas mientras intentan sacar.",
          de: "Ein Rückspiel ist eine defensive Strategie, bei der Sie zwei oder mehr Punkte im Home Board Ihres Gegners halten und auf Gelegenheiten warten, ihre Steine zu schlagen, während sie versuchen auszuwürfeln.",
          nl: "Een achterspel is een defensieve strategie waarbij je twee of meer punten vasthoudt in het thuisbord van je tegenstander, wachtend op kansen om hun stenen te raken terwijl ze proberen uit te brengen."
        }
      },
      {
        question: {
          en: "What does 'escaping' mean in backgammon?",
          es: "¿Qué significa 'escapar' en backgammon?",
          de: "Was bedeutet 'Entkommen' beim Backgammon?",
          nl: "Wat betekent 'ontsnappen' bij backgammon?"
        },
        options: [
          { en: "Moving back checkers out of opponent's home board", es: "Mover las fichas traseras fuera del tablero interior del oponente", de: "Hintere Steine aus dem Home Board des Gegners bewegen", nl: "Achterste stenen uit het thuisbord van de tegenstander verplaatsen" },
          { en: "Bearing off quickly", es: "Sacar rápidamente", de: "Schnell auswürfeln", nl: "Snel uitbrengen" },
          { en: "Avoiding being hit", es: "Evitar ser golpeado", de: "Vermeiden geschlagen zu werden", nl: "Vermijden geraakt te worden" },
          { en: "Leaving the game", es: "Abandonar el juego", de: "Das Spiel verlassen", nl: "Het spel verlaten" }
        ],
        correct: 0,
        explanation: {
          en: "Escaping refers to successfully moving your back checkers (those in or near opponent's home board) past opponent's blockade and toward your own home board.",
          es: "Escapar se refiere a mover exitosamente tus fichas traseras (aquellas en o cerca del tablero interior del oponente) más allá del bloqueo del oponente y hacia tu propio tablero interior.",
          de: "Entkommen bezieht sich auf das erfolgreiche Bewegen Ihrer hinteren Steine (jene im oder nahe dem Home Board des Gegners) über die Blockade des Gegners hinaus in Richtung Ihres eigenen Home Boards.",
          nl: "Ontsnappen verwijst naar het succesvol verplaatsen van je achterste stenen (die in of nabij het thuisbord van de tegenstander) voorbij de blokkade van de tegenstander en richting je eigen thuisbord."
        }
      },
      {
        question: {
          en: "What is a 'blitz' attack in backgammon?",
          es: "¿Qué es un ataque 'blitz' en backgammon?",
          de: "Was ist ein 'Blitz'-Angriff beim Backgammon?",
          nl: "Wat is een 'blitz'-aanval bij backgammon?"
        },
        options: [
          { en: "Aggressive hitting strategy to close out opponent", es: "Estrategia agresiva de golpeo para cerrar al oponente", de: "Aggressive Schlagstrategie um den Gegner auszusperren", nl: "Agressieve raakstrategie om tegenstander buiten te sluiten" },
          { en: "Very fast play", es: "Juego muy rápido", de: "Sehr schnelles Spiel", nl: "Heel snel spel" },
          { en: "Doubling cube strategy", es: "Estrategia del cubo de doblaje", de: "Dopplungswürfel-Strategie", nl: "Verdubbeldob strategie" },
          { en: "Defensive prime building", es: "Construcción de prime defensivo", de: "Defensive Prime-Bildung", nl: "Defensieve prime bouwen" }
        ],
        correct: 0,
        explanation: {
          en: "A blitz is an aggressive attacking strategy where you try to hit opponent's checkers and close points in your home board to prevent them from re-entering, building toward a closeout.",
          es: "Un blitz es una estrategia de ataque agresiva donde intentas golpear las fichas del oponente y cerrar puntos en tu tablero interior para evitar que vuelvan a entrar, construyendo hacia un cierre.",
          de: "Ein Blitz ist eine aggressive Angriffsstrategie, bei der Sie versuchen gegnerische Steine zu schlagen und Punkte in Ihrem Home Board zu schließen, um zu verhindern dass sie wieder eintreten, und auf einen Ausschluss hinarbeiten.",
          nl: "Een blitz is een agressieve aanvalsstrategie waarbij je probeert stenen van de tegenstander te raken en punten in je thuisbord te sluiten om te voorkomen dat ze opnieuw binnentreden, opbouwend naar een uitsluiting."
        }
      },
      {
        question: {
          en: "What is the 'match equity' concept?",
          es: "¿Qué es el concepto de 'equidad de partido'?",
          de: "Was ist das 'Match Equity'-Konzept?",
          nl: "Wat is het 'wedstrijd equity'-concept?"
        },
        options: [
          { en: "Equal number of checkers", es: "Número igual de fichas", de: "Gleiche Anzahl von Steinen", nl: "Gelijk aantal stenen" },
          { en: "Fair starting position", es: "Posición inicial justa", de: "Faire Startposition", nl: "Eerlijke startpositie" },
          { en: "Probability of winning match from current score", es: "Probabilidad de ganar el partido desde la puntuación actual", de: "Wahrscheinlichkeit des Matchgewinns bei aktuellem Punktestand", nl: "Waarschijnlijkheid van wedstrijd winnen vanaf huidige score" },
          { en: "Even pip count", es: "Conteo de pips parejo", de: "Gleiche Pip-Zählung", nl: "Gelijke pip telling" }
        ],
        correct: 2,
        explanation: {
          en: "Match equity refers to your probability of winning an entire match based on the current score. It influences doubling cube decisions in match play differently than in money games.",
          es: "La equidad de partido se refiere a tu probabilidad de ganar un partido completo basándose en la puntuación actual. Influye en las decisiones del cubo de doblaje en el juego de partido de manera diferente que en los juegos de dinero.",
          de: "Match Equity bezieht sich auf Ihre Wahrscheinlichkeit, ein gesamtes Match basierend auf dem aktuellen Punktestand zu gewinnen. Es beeinflusst Dopplungswürfel-Entscheidungen im Match-Spiel anders als in Geldspielen.",
          nl: "Wedstrijd equity verwijst naar je waarschijnlijkheid om een hele wedstrijd te winnen gebaseerd op de huidige score. Het beïnvloedt verdubbeldob beslissingen in wedstrijdspel anders dan in geldspellen."
        }
      },
      {
        question: {
          en: "What is 'recirculation' in bearing off?",
          es: "¿Qué es la 'recirculación' al sacar?",
          de: "Was ist 'Rezirkulation' beim Auswürfeln?",
          nl: "Wat is 'recirculatie' bij uitbrengen?"
        },
        options: [
          { en: "Moving borne-off checkers back", es: "Mover fichas ya sacadas de vuelta", de: "Ausgewürfelte Steine zurückbewegen", nl: "Uitgebrachte stenen terugverplaatsen" },
          { en: "Moving checkers within home board instead of off", es: "Mover fichas dentro del tablero interior en lugar de sacarlas", de: "Steine innerhalb des Home Boards bewegen statt auszuwürfeln", nl: "Stenen binnen thuisbord verplaatsen in plaats van uitbrengen" },
          { en: "Rotating checkers", es: "Rotar fichas", de: "Steine rotieren", nl: "Stenen roteren" },
          { en: "Re-entering from bar", es: "Volver a entrar desde la barra", de: "Von der Bar wieder eintreten", nl: "Opnieuw binnentreden vanaf de bar" }
        ],
        correct: 1,
        explanation: {
          en: "Recirculation occurs when you must move checkers within your home board instead of bearing them off because you don't roll high enough numbers, potentially wasting pips and slowing your bearoff.",
          es: "La recirculación ocurre cuando debes mover fichas dentro de tu tablero interior en lugar de sacarlas porque no sacas números lo suficientemente altos, potencialmente desperdiciando pips y ralentizando tu proceso de sacar.",
          de: "Rezirkulation tritt auf wenn Sie Steine innerhalb Ihres Home Boards bewegen müssen anstatt sie auszuwürfeln, weil Sie keine ausreichend hohen Zahlen würfeln, was möglicherweise Pips verschwendet und Ihr Auswürfeln verlangsamt.",
          nl: "Recirculatie vindt plaats wanneer je stenen binnen je thuisbord moet verplaatsen in plaats van ze uit te brengen omdat je niet hoog genoeg gooit, mogelijk pips verspillend en je uitbrengen vertragend."
        }
      },
      {
        question: {
          en: "What is a 'holding game' strategy?",
          es: "¿Qué es una estrategia de 'juego de retención'?",
          de: "Was ist eine 'Haltespiel'-Strategie?",
          nl: "Wat is een 'vasthoud spel'-strategie?"
        },
        options: [
          { en: "Holding single advanced anchor while opponent develops", es: "Mantener un solo ancla avanzada mientras el oponente desarrolla", de: "Einen einzelnen fortgeschrittenen Anker halten während Gegner entwickelt", nl: "Enkel geavanceerd anker vasthouden terwijl tegenstander ontwikkelt" },
          { en: "Never moving checkers", es: "Nunca mover fichas", de: "Steine nie bewegen", nl: "Stenen nooit verplaatsen" },
          { en: "Holding the doubling cube", es: "Mantener el cubo de doblaje", de: "Den Dopplungswürfel halten", nl: "De verdubbeldob vasthouden" },
          { en: "Making all points", es: "Hacer todos los puntos", de: "Alle Punkte machen", nl: "Alle punten maken" }
        ],
        correct: 0,
        explanation: {
          en: "A holding game involves maintaining a single advanced anchor (often the 4-point or 5-point) in opponent's board while racing with your other checkers, hoping to hit a late shot when opponent bears off.",
          es: "Un juego de retención implica mantener un solo ancla avanzada (a menudo el punto 4 o 5) en el tablero del oponente mientras corres con tus otras fichas, esperando golpear un tiro tardío cuando el oponente saca.",
          de: "Ein Haltespiel beinhaltet das Aufrechterhalten eines einzelnen fortgeschrittenen Ankers (oft der 4- oder 5-Punkt) im Brett des Gegners, während man mit den anderen Steinen rennt, in der Hoffnung einen späten Schlag zu landen wenn der Gegner auswürfelt.",
          nl: "Een vasthoud spel houdt in dat je een enkel geavanceerd anker (vaak het 4-punt of 5-punt) vasthoudt in het bord van de tegenstander terwijl je met je andere stenen racet, hopend een late treffer te maken wanneer tegenstander uitbrengt."
        }
      },
      {
        question: {
          en: "What is 'timing' in backgammon strategy?",
          es: "¿Qué es el 'timing' en la estrategia de backgammon?",
          de: "Was ist 'Timing' in der Backgammon-Strategie?",
          nl: "Wat is 'timing' in de backgammon-strategie?"
        },
        options: [
          { en: "Clock management", es: "Gestión del reloj", de: "Zeitmanagement", nl: "Klok management" },
          { en: "Having checkers available when needed for attack/defense", es: "Tener fichas disponibles cuando se necesitan para ataque/defensa", de: "Steine verfügbar haben wenn sie für Angriff/Verteidigung benötigt werden", nl: "Stenen beschikbaar hebben wanneer nodig voor aanval/verdediging" },
          { en: "Speed of play", es: "Velocidad de juego", de: "Spielgeschwindigkeit", nl: "Speelsnelheid" },
          { en: "When to use cube", es: "Cuándo usar el cubo", de: "Wann man den Würfel verwendet", nl: "Wanneer de dobbelsteen te gebruiken" }
        ],
        correct: 1,
        explanation: {
          en: "Timing refers to having spare checkers positioned so you can maintain your structure while waiting for favorable opportunities, avoiding being forced to break valuable points prematurely.",
          es: "El timing se refiere a tener fichas de repuesto posicionadas para que puedas mantener tu estructura mientras esperas oportunidades favorables, evitando verse obligado a romper puntos valiosos prematuramente.",
          de: "Timing bezieht sich darauf, Ersatzsteine positioniert zu haben, sodass Sie Ihre Struktur aufrechterhalten können während Sie auf günstige Gelegenheiten warten, und vermeiden gezwungen zu werden wertvolle Punkte vorzeitig aufzubrechen.",
          nl: "Timing verwijst naar het hebben van reserve stenen gepositioneerd zodat je je structuur kunt handhaven terwijl je wacht op gunstige kansen, vermijdend gedwongen te worden waardevolle punten voortijdig te breken."
        }
      },
      {
        question: {
          en: "What is a 'closeout' in backgammon?",
          es: "¿Qué es un 'cierre' en backgammon?",
          de: "Was ist ein 'Closeout' beim Backgammon?",
          nl: "Wat is een 'uitsluiting' bij backgammon?"
        },
        options: [
          { en: "Closing all six home board points with opponent on bar", es: "Cerrar los seis puntos del tablero interior con el oponente en la barra", de: "Alle sechs Home Board Punkte schließen mit Gegner auf der Bar", nl: "Alle zes thuisbord punten sluiten met tegenstander op de bar" },
          { en: "Ending the game", es: "Terminar el juego", de: "Das Spiel beenden", nl: "Het spel beëindigen" },
          { en: "Bearing off all checkers", es: "Sacar todas las fichas", de: "Alle Steine auswürfeln", nl: "Alle stenen uitbrengen" },
          { en: "Making a prime", es: "Hacer un prime", de: "Ein Prime machen", nl: "Een prime maken" }
        ],
        correct: 0,
        explanation: {
          en: "A closeout occurs when you control all six points in your home board while your opponent has one or more checkers on the bar, preventing them from re-entering and giving you a winning position.",
          es: "Un cierre ocurre cuando controlas los seis puntos en tu tablero interior mientras tu oponente tiene una o más fichas en la barra, impidiéndoles volver a entrar y dándote una posición ganadora.",
          de: "Ein Closeout tritt auf wenn Sie alle sechs Punkte in Ihrem Home Board kontrollieren, während Ihr Gegner einen oder mehrere Steine auf der Bar hat, was sie daran hindert wieder einzutreten und Ihnen eine gewinnende Position gibt.",
          nl: "Een uitsluiting vindt plaats wanneer je alle zes punten in je thuisbord controleert terwijl je tegenstander een of meer stenen op de bar heeft, hen verhinderend opnieuw binnen te treden en je een winnende positie gevend."
        }
      },
      {
        question: {
          en: "What is 'diversification' in bearing off?",
          es: "¿Qué es la 'diversificación' al sacar?",
          de: "Was ist 'Diversifikation' beim Auswürfeln?",
          nl: "Wat is 'diversificatie' bij uitbrengen?"
        },
        options: [
          { en: "Spreading checkers across all home points", es: "Distribuir fichas en todos los puntos del tablero interior", de: "Steine über alle Home-Punkte verteilen", nl: "Stenen spreiden over alle thuispunten" },
          { en: "Using different strategies", es: "Usar diferentes estrategias", de: "Verschiedene Strategien verwenden", nl: "Verschillende strategieën gebruiken" },
          { en: "Moving checkers in pairs", es: "Mover fichas en pares", de: "Steine paarweise bewegen", nl: "Stenen in paren verplaatsen" },
          { en: "Varying dice rolls", es: "Variando las tiradas de dados", de: "Würfelwürfe variieren", nl: "Dobbelworpen variëren" }
        ],
        correct: 0,
        explanation: {
          en: "Diversification in bearing off means spreading your checkers across different home board points to maximize the number of dice combinations that allow you to bear off, reducing the chance of wastage.",
          es: "La diversificación al sacar significa distribuir tus fichas en diferentes puntos del tablero interior para maximizar el número de combinaciones de dados que te permiten sacar, reduciendo la posibilidad de desperdicio.",
          de: "Diversifikation beim Auswürfeln bedeutet Ihre Steine über verschiedene Home Board Punkte zu verteilen, um die Anzahl der Würfelkombinationen zu maximieren die es Ihnen ermöglichen auszuwürfeln, und die Chance auf Verschwendung zu reduzieren.",
          nl: "Diversificatie bij uitbrengen betekent je stenen spreiden over verschillende thuisbord punten om het aantal dobbelcombinaties te maximaliseren die je toestaan uit te brengen, de kans op verspilling verminderend."
        }
      },
      {
        question: {
          en: "What is an 'ace-point game'?",
          es: "¿Qué es un 'juego de punto-as'?",
          de: "Was ist ein 'Ass-Punkt-Spiel'?",
          nl: "Wat is een 'aas-punt spel'?"
        },
        options: [
          { en: "Holding only opponent's 1-point as back game", es: "Mantener solo el punto 1 del oponente como juego trasero", de: "Nur den 1-Punkt des Gegners als Rückspiel halten", nl: "Alleen het 1-punt van tegenstander vasthouden als achterspel" },
          { en: "Rolling only aces (1s)", es: "Sacar solo ases (1s)", de: "Nur Asse (1en) würfeln", nl: "Alleen azen (1en) gooien" },
          { en: "Making your own 1-point", es: "Hacer tu propio punto 1", de: "Deinen eigenen 1-Punkt machen", nl: "Je eigen 1-punt maken" },
          { en: "First game of match", es: "Primer juego del partido", de: "Erstes Spiel des Matches", nl: "Eerste spel van de wedstrijd" }
        ],
        correct: 0,
        explanation: {
          en: "An ace-point game is a back game position where you hold only your opponent's 1-point (ace-point). This is generally considered the weakest back game anchor due to its proximity to opponent's home board.",
          es: "Un juego de punto-as es una posición de juego trasero donde mantienes solo el punto 1 (punto-as) de tu oponente. Esto generalmente se considera el ancla de juego trasero más débil debido a su proximidad al tablero interior del oponente.",
          de: "Ein Ass-Punkt-Spiel ist eine Rückspiel-Position, bei der Sie nur den 1-Punkt (Ass-Punkt) Ihres Gegners halten. Dies wird allgemein als der schwächste Rückspiel-Anker angesehen aufgrund seiner Nähe zum Home Board des Gegners.",
          nl: "Een aas-punt spel is een achterspel positie waarbij je alleen het 1-punt (aas-punt) van je tegenstander vasthoudt. Dit wordt over het algemeen beschouwd als het zwakste achterspel anker vanwege de nabijheid van het thuisbord van de tegenstander."
        }
      },
      {
        question: {
          en: "What is 'contact position' in backgammon?",
          es: "¿Qué es una 'posición de contacto' en backgammon?",
          de: "Was ist eine 'Kontaktposition' beim Backgammon?",
          nl: "Wat is een 'contact positie' bij backgammon?"
        },
        options: [
          { en: "When checkers can still hit each other", es: "Cuando las fichas todavía pueden golpearse entre sí", de: "Wenn Steine sich noch gegenseitig schlagen können", nl: "Wanneer stenen elkaar nog kunnen raken" },
          { en: "Checkers touching", es: "Fichas tocándose", de: "Steine berühren sich", nl: "Stenen raken elkaar" },
          { en: "On same point", es: "En el mismo punto", de: "Auf demselben Punkt", nl: "Op hetzelfde punt" },
          { en: "Phone contact with opponent", es: "Contacto telefónico con el oponente", de: "Telefonkontakt mit Gegner", nl: "Telefooncontact met tegenstander" }
        ],
        correct: 0,
        explanation: {
          en: "A contact position exists when both players still have checkers that could potentially hit each other, as opposed to a running game where all checkers have passed each other.",
          es: "Una posición de contacto existe cuando ambos jugadores todavía tienen fichas que potencialmente podrían golpearse entre sí, a diferencia de un juego de carrera donde todas las fichas se han pasado entre sí.",
          de: "Eine Kontaktposition besteht, wenn beide Spieler noch Steine haben, die sich potenziell gegenseitig schlagen könnten, im Gegensatz zu einem Rennspiel, bei dem alle Steine aneinander vorbei sind.",
          nl: "Een contact positie bestaat wanneer beide spelers nog stenen hebben die elkaar potentieel kunnen raken, in tegenstelling tot een racespel waarbij alle stenen elkaar zijn gepasseerd."
        }
      },
      {
        question: {
          en: "What is 'market losers' in cube decisions?",
          es: "¿Qué son los 'perdedores de mercado' en decisiones del cubo?",
          de: "Was sind 'Market Losers' bei Würfel-Entscheidungen?",
          nl: "Wat zijn 'markt verliezers' bij dobbelsteen beslissingen?"
        },
        options: [
          { en: "Sequences where position gets too good to double", es: "Secuencias donde la posición se vuelve demasiado buena para doblar", de: "Sequenzen wo Position zu gut zum Doppeln wird", nl: "Sequenties waarbij positie te goed wordt om te verdubbelen" },
          { en: "Losing money in match", es: "Perder dinero en el partido", de: "Geld im Match verlieren", nl: "Geld verliezen in wedstrijd" },
          { en: "Market fluctuations", es: "Fluctuaciones del mercado", de: "Marktschwankungen", nl: "Marktschommelingen" },
          { en: "Bad cube purchases", es: "Malas compras de cubos", de: "Schlechte Würfelkäufe", nl: "Slechte dobbelsteen aankopen" }
        ],
        correct: 0,
        explanation: {
          en: "Market losers are sequences of rolls where your position improves so much that it becomes too good to double (opponent would drop), causing you to lose the market for a double. This can influence early doubling decisions.",
          es: "Los perdedores de mercado son secuencias de tiradas donde tu posición mejora tanto que se vuelve demasiado buena para doblar (el oponente abandonaría), causando que pierdas el mercado para un doble. Esto puede influir en decisiones tempranas de doblaje.",
          de: "Market Losers sind Sequenzen von Würfen, bei denen sich Ihre Position so sehr verbessert, dass sie zu gut zum Doppeln wird (Gegner würde passen), was dazu führt dass Sie den Markt für ein Doppeln verlieren. Dies kann frühe Dopplungsentscheidungen beeinflussen.",
          nl: "Markt verliezers zijn sequenties van worpen waarbij je positie zoveel verbetert dat het te goed wordt om te verdubbelen (tegenstander zou opgeven), waardoor je de markt voor een verdubbeling verliest. Dit kan vroege verdubbel beslissingen beïnvloeden."
        }
      },
      {
        question: {
          en: "What does 'clearing a point' mean?",
          es: "¿Qué significa 'limpiar un punto'?",
          de: "Was bedeutet 'einen Punkt räumen'?",
          nl: "Wat betekent 'een punt opruimen'?"
        },
        options: [
          { en: "Removing all your checkers from a point", es: "Quitar todas tus fichas de un punto", de: "Alle deine Steine von einem Punkt entfernen", nl: "Al je stenen van een punt verwijderen" },
          { en: "Making point visible", es: "Hacer visible el punto", de: "Punkt sichtbar machen", nl: "Punt zichtbaar maken" },
          { en: "Hitting opponent blot", es: "Golpear blot del oponente", de: "Gegnerischen Blot schlagen", nl: "Blot van tegenstander raken" },
          { en: "Winning the point", es: "Ganar el punto", de: "Den Punkt gewinnen", nl: "Het punt winnen" }
        ],
        correct: 0,
        explanation: {
          en: "Clearing a point means moving all of your checkers off a point that you had previously made, which can be risky as it may expose blots or break defensive structure.",
          es: "Limpiar un punto significa mover todas tus fichas de un punto que habías hecho previamente, lo que puede ser arriesgado ya que puede exponer blots o romper la estructura defensiva.",
          de: "Einen Punkt räumen bedeutet alle Ihre Steine von einem Punkt zu bewegen, den Sie zuvor gemacht hatten, was riskant sein kann da es Blots exponieren oder defensive Struktur brechen kann.",
          nl: "Een punt opruimen betekent al je stenen verplaatsen van een punt dat je eerder had gemaakt, wat riskant kan zijn omdat het blots kan blootstellen of defensieve structuur kan breken."
        }
      },
      {
        question: {
          en: "What is a 'joker' in backgammon?",
          es: "¿Qué es un 'joker' en backgammon?",
          de: "Was ist ein 'Joker' beim Backgammon?",
          nl: "Wat is een 'joker' bij backgammon?"
        },
        options: [
          { en: "Wild card die", es: "Dado comodín", de: "Joker-Würfel", nl: "Joker dobbelsteen" },
          { en: "Lucky roll that wins game against odds", es: "Tirada afortunada que gana el juego contra las probabilidades", de: "Glückswurf der gegen die Chancen gewinnt", nl: "Geluksworp die het spel wint tegen de verwachtingen in" },
          { en: "Funny player", es: "Jugador gracioso", de: "Lustiger Spieler", nl: "Grappige speler" },
          { en: "Extra checker", es: "Ficha extra", de: "Extra-Stein", nl: "Extra steen" }
        ],
        correct: 1,
        explanation: {
          en: "A joker is an unexpected fortunate dice roll that dramatically changes the outcome of a game, often allowing the underdog to win against the odds or escape from a difficult position.",
          es: "Un joker es una tirada de dados afortunada inesperada que cambia dramáticamente el resultado de un juego, a menudo permitiendo que el desfavorecido gane contra las probabilidades o escape de una posición difícil.",
          de: "Ein Joker ist ein unerwarteter glücklicher Würfelwurf, der das Ergebnis eines Spiels dramatisch verändert, oft dem Außenseiter ermöglicht gegen die Chancen zu gewinnen oder aus einer schwierigen Position zu entkommen.",
          nl: "Een joker is een onverwachte fortuinlijke dobbelworp die de uitkomst van een spel dramatisch verandert, vaak de underdog toestaat om tegen de verwachtingen in te winnen of te ontsnappen uit een moeilijke positie."
        }
      },
      {
        question: {
          en: "What is 'owning the doubling cube' strategically important?",
          es: "¿Por qué es estratégicamente importante 'poseer el cubo de doblaje'?",
          de: "Warum ist 'den Dopplungswürfel besitzen' strategisch wichtig?",
          nl: "Waarom is 'de verdubbeldob bezitten' strategisch belangrijk?"
        },
        options: [
          { en: "Can redouble at any time without opponent permission", es: "Puedes volver a doblar en cualquier momento sin permiso del oponente", de: "Kann jederzeit ohne Gegnergenehmigung redoppeln", nl: "Kan op elk moment opnieuw verdubbelen zonder toestemming van tegenstander" },
          { en: "Scores more points", es: "Anota más puntos", de: "Erzielt mehr Punkte", nl: "Scoort meer punten" },
          { en: "Controls pace", es: "Controla el ritmo", de: "Kontrolliert das Tempo", nl: "Controleert het tempo" },
          { en: "Automatic win", es: "Victoria automática", de: "Automatischer Sieg", nl: "Automatische overwinning" }
        ],
        correct: 0,
        explanation: {
          en: "Owning the cube gives you exclusive redoubling rights, allowing you to apply maximum pressure on your opponent. You can turn the cube to increase stakes when position improves, while opponent cannot.",
          es: "Poseer el cubo te da derechos exclusivos de redoblaje, permitiéndote aplicar máxima presión sobre tu oponente. Puedes girar el cubo para aumentar las apuestas cuando la posición mejora, mientras que el oponente no puede.",
          de: "Den Würfel zu besitzen gibt Ihnen exklusive Redopplungsrechte, was es Ihnen ermöglicht maximalen Druck auf Ihren Gegner auszuüben. Sie können den Würfel drehen um Einsätze zu erhöhen wenn sich die Position verbessert, während der Gegner dies nicht kann.",
          nl: "De dobbelsteen bezitten geeft je exclusieve herverdubbelingsrechten, waardoor je maximale druk kunt uitoefenen op je tegenstander. Je kunt de dobbelsteen draaien om de inzet te verhogen wanneer de positie verbetert, terwijl tegenstander dit niet kan."
        }
      },
      {
        question: {
          en: "What is 'wastage' in bearing off?",
          es: "¿Qué es el 'desperdicio' al sacar?",
          de: "Was ist 'Verschwendung' beim Auswürfeln?",
          nl: "Wat is 'verspilling' bij uitbrengen?"
        },
        options: [
          { en: "Pips used to move within home board instead of bearing off", es: "Pips usados para moverse dentro del tablero interior en lugar de sacar", de: "Pips verwendet um innerhalb des Home Boards zu bewegen statt auszuwürfeln", nl: "Pips gebruikt om binnen thuisbord te bewegen in plaats van uit te brengen" },
          { en: "Lost checkers", es: "Fichas perdidas", de: "Verlorene Steine", nl: "Verloren stenen" },
          { en: "Bad dice rolls", es: "Malas tiradas de dados", de: "Schlechte Würfelwürfe", nl: "Slechte dobbelworpen" },
          { en: "Illegal moves", es: "Movimientos ilegales", de: "Illegale Züge", nl: "Illegale zetten" }
        ],
        correct: 0,
        explanation: {
          en: "Wastage refers to pips that must be used to move checkers within your home board rather than bearing them off, typically because checkers are stacked inefficiently or you roll higher than needed.",
          es: "El desperdicio se refiere a pips que deben usarse para mover fichas dentro de tu tablero interior en lugar de sacarlas, típicamente porque las fichas están apiladas ineficientemente o sacas más alto de lo necesario.",
          de: "Verschwendung bezieht sich auf Pips die verwendet werden müssen um Steine innerhalb Ihres Home Boards zu bewegen anstatt sie auszuwürfeln, typischerweise weil Steine ineffizient gestapelt sind oder Sie höher würfeln als nötig.",
          nl: "Verspilling verwijst naar pips die moeten worden gebruikt om stenen binnen je thuisbord te verplaatsen in plaats van ze uit te brengen, meestal omdat stenen inefficiënt zijn gestapeld of je hoger gooit dan nodig."
        }
      },
      {
        question: {
          en: "What is a 'pure running game'?",
          es: "¿Qué es un 'juego de carrera puro'?",
          de: "Was ist ein 'reines Rennspiel'?",
          nl: "Wat is een 'puur racespel'?"
        },
        options: [
          { en: "No contact, pure race to bear off", es: "Sin contacto, carrera pura para sacar", de: "Kein Kontakt, reines Rennen zum Auswürfeln", nl: "Geen contact, pure race om uit te brengen" },
          { en: "Running very fast", es: "Correr muy rápido", de: "Sehr schnell rennen", nl: "Heel snel rennen" },
          { en: "Only moving forward", es: "Solo moverse hacia adelante", de: "Nur vorwärts bewegen", nl: "Alleen voorwaarts bewegen" },
          { en: "No doubling allowed", es: "No se permite doblar", de: "Kein Doppeln erlaubt", nl: "Geen verdubbelen toegestaan" }
        ],
        correct: 0,
        explanation: {
          en: "A pure running game has no remaining contact between opponents' checkers—all checkers have passed each other. The winner is determined purely by who can bear off first, making pip count decisive.",
          es: "Un juego de carrera puro no tiene contacto restante entre las fichas de los oponentes—todas las fichas se han pasado entre sí. El ganador se determina puramente por quién puede sacar primero, haciendo que el conteo de pips sea decisivo.",
          de: "Ein reines Rennspiel hat keinen verbleibenden Kontakt zwischen den Steinen der Gegner—alle Steine sind aneinander vorbei. Der Gewinner wird rein dadurch bestimmt, wer zuerst auswürfeln kann, was die Pip-Zählung entscheidend macht.",
          nl: "Een puur racespel heeft geen blijvend contact tussen de stenen van de tegenstanders—alle stenen zijn elkaar gepasseerd. De winnaar wordt puur bepaald door wie het eerst kan uitbrengen, wat pip telling beslissend maakt."
        }
      },
      {
        question: {
          en: "What is the purpose of 'slotting' your 5-point early?",
          es: "¿Cuál es el propósito de 'ocupar' tu punto 5 temprano?",
          de: "Was ist der Zweck des frühen 'Slottings' Ihres 5-Punkts?",
          nl: "Wat is het doel van vroeg je 5-punt 'slotten'?"
        },
        options: [
          { en: "To make the golden point if not hit", es: "Para hacer el punto dorado si no es golpeado", de: "Um den goldenen Punkt zu machen wenn nicht geschlagen", nl: "Om het gouden punt te maken als niet geraakt" },
          { en: "To waste opponent's turn", es: "Para desperdiciar el turno del oponente", de: "Um den Zug des Gegners zu verschwenden", nl: "Om de beurt van tegenstander te verspillen" },
          { en: "To block bar point", es: "Para bloquear el punto de barra", de: "Um den Bar-Punkt zu blockieren", nl: "Om het bar punt te blokkeren" },
          { en: "To force doubling", es: "Para forzar el doblaje", de: "Um Dopplung zu erzwingen", nl: "Om verdubbeling te forceren" }
        ],
        correct: 0,
        explanation: {
          en: "Slotting the 5-point early is a calculated risk—if your blot isn't hit, you can cover it next turn to make the golden point (5-point), which is the most valuable point in your home board.",
          es: "Ocupar el punto 5 temprano es un riesgo calculado—si tu blot no es golpeado, puedes cubrirlo en el siguiente turno para hacer el punto dorado (punto 5), que es el punto más valioso en tu tablero interior.",
          de: "Das frühe Slotten des 5-Punkts ist ein kalkuliertes Risiko—wenn Ihr Blot nicht geschlagen wird, können Sie ihn im nächsten Zug decken um den goldenen Punkt (5-Punkt) zu machen, der wertvollste Punkt in Ihrem Home Board.",
          nl: "Het vroeg slotten van het 5-punt is een berekend risico—als je blot niet wordt geraakt, kun je het de volgende beurt dekken om het gouden punt (5-punt) te maken, het meest waardevolle punt in je thuisbord."
        }
      },
      {
        question: {
          en: "What does 'entering from the bar' require?",
          es: "¿Qué requiere 'entrar desde la barra'?",
          de: "Was erfordert 'von der Bar eintreten'?",
          nl: "Wat vereist 'binnentreden vanaf de bar'?"
        },
        options: [
          { en: "Rolling corresponding number for open point in opponent home", es: "Sacar el número correspondiente para un punto abierto en el tablero interior del oponente", de: "Entsprechende Zahl würfeln für offenen Punkt im gegnerischen Home", nl: "Overeenkomstig getal gooien voor open punt in thuisbord van tegenstander" },
          { en: "Permission from opponent", es: "Permiso del oponente", de: "Erlaubnis vom Gegner", nl: "Toestemming van tegenstander" },
          { en: "Doubles only", es: "Solo dobles", de: "Nur Pasch", nl: "Alleen dubbels" },
          { en: "Paying fee", es: "Pagar una tarifa", de: "Gebühr zahlen", nl: "Betalen van een vergoeding" }
        ],
        correct: 0,
        explanation: {
          en: "To enter from the bar, you must roll a number corresponding to an open point (not controlled by opponent) in your opponent's home board. If all points are blocked, you cannot enter and lose your turn.",
          es: "Para entrar desde la barra, debes sacar un número correspondiente a un punto abierto (no controlado por el oponente) en el tablero interior de tu oponente. Si todos los puntos están bloqueados, no puedes entrar y pierdes tu turno.",
          de: "Um von der Bar einzutreten, müssen Sie eine Zahl würfeln, die einem offenen Punkt (nicht vom Gegner kontrolliert) im Home Board Ihres Gegners entspricht. Wenn alle Punkte blockiert sind, können Sie nicht eintreten und verlieren Ihren Zug.",
          nl: "Om vanaf de bar binnen te treden, moet je een getal gooien dat overeenkomt met een open punt (niet gecontroleerd door tegenstander) in het thuisbord van je tegenstander. Als alle punten geblokkeerd zijn, kun je niet binnentreden en verlies je je beurt."
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
