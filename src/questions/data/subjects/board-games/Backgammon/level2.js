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
