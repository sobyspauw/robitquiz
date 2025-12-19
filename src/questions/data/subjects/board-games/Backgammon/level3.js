// Backgammon Quiz - Level 3: Advanced
(function() {
  const level3 = {
    name: {
      en: "Backgammon - Advanced",
      es: "Backgammon - Avanzado",
      de: "Backgammon - Fortgeschritten",
      nl: "Backgammon - Gevorderd"
    },
    questions: [
      {
        question: {
          en: "What is a 'prime' in backgammon?",
          es: "¿Qué es un 'prime' en backgammon?",
          de: "Was ist ein 'Prime' im Backgammon?",
          nl: "Wat is een 'prime' in backgammon?"
        },
        options: [
          { en: "Six consecutive blocked points", es: "Seis puntos bloqueados consecutivos", de: "Sechs aufeinanderfolgende blockierte Punkte", nl: "Zes opeenvolgende geblokkeerde punten" },
          { en: "First roll of the game", es: "Primera tirada del juego", de: "Erster Wurf des Spiels", nl: "Eerste worp van het spel" },
          { en: "Best starting position", es: "Mejor posición inicial", de: "Beste Startposition", nl: "Beste startpositie" },
          { en: "Five checkers on one point", es: "Cinco fichas en un punto", de: "Fünf Steine auf einem Punkt", nl: "Vijf stenen op één punt" }
        ],
        correct: 0,
        explanation: {
          en: "A prime is six consecutive blocked points that create an impassable wall. An opponent's checker behind a full 6-point prime cannot escape with any single roll.",
          es: "Un prime es seis puntos bloqueados consecutivos que crean un muro infranqueable. Una ficha del oponente detrás de un prime completo de 6 puntos no puede escapar con ninguna tirada individual.",
          de: "Ein Prime ist sechs aufeinanderfolgende blockierte Punkte die eine unpassierbare Mauer bilden. Ein gegnerischer Stein hinter einem vollen 6-Punkt-Prime kann mit keinem einzelnen Wurf entkommen.",
          nl: "Een prime is zes opeenvolgende geblokkeerde punten die een onpasseerbare muur vormen. Een steen van de tegenstander achter een volledige 6-punts prime kan niet ontsnappen met een enkele worp."
        }
      },
      {
        question: {
          en: "In bearing off, when can you remove a checker from a lower point if you roll a higher number?",
          es: "Al sacar fichas, ¿cuándo puedes quitar una ficha de un punto inferior si sacas un número mayor?",
          de: "Beim Auswürfeln, wann können Sie einen Stein von einem niedrigeren Punkt nehmen wenn Sie eine höhere Zahl würfeln?",
          nl: "Bij uitgooien, wanneer kun je een steen van een lager punt verwijderen als je een hoger getal gooit?"
        },
        options: [
          { en: "When no checkers remain on higher points", es: "Cuando no quedan fichas en puntos más altos", de: "Wenn keine Steine auf höheren Punkten verbleiben", nl: "Wanneer er geen stenen meer zijn op hogere punten" },
          { en: "Anytime during bearing off", es: "En cualquier momento durante sacar fichas", de: "Jederzeit beim Auswürfeln", nl: "Altijd tijdens uitgooien" },
          { en: "Only on the final roll", es: "Solo en la tirada final", de: "Nur beim letzten Wurf", nl: "Alleen bij de laatste worp" },
          { en: "Never allowed", es: "Nunca permitido", de: "Nie erlaubt", nl: "Nooit toegestaan" }
        ],
        correct: 0,
        explanation: {
          en: "When bearing off, if you roll a number higher than any occupied point, you must bear off from the highest occupied point. For example, if your furthest checker is on the 3-point and you roll a 6, you bear off from the 3-point.",
          es: "Al sacar fichas, si sacas un número más alto que cualquier punto ocupado, debes sacar del punto ocupado más alto. Por ejemplo, si tu ficha más lejana está en el punto 3 y sacas un 6, sacas del punto 3.",
          de: "Beim Auswürfeln müssen Sie, wenn Sie eine höhere Zahl würfeln als jeder besetzte Punkt, vom höchsten besetzten Punkt auswürfeln. Zum Beispiel, wenn Ihr weitester Stein auf dem 3-Punkt ist und Sie eine 6 würfeln, würfeln Sie vom 3-Punkt aus.",
          nl: "Bij uitgooien, als je een getal gooit dat hoger is dan elk bezet punt, moet je uitgooien van het hoogste bezette punt. Bijvoorbeeld, als je verste steen op het 3-punt staat en je gooit een 6, gooi je uit van het 3-punt."
        }
      },
      {
        question: {
          en: "What is 'pip count' in backgammon?",
          es: "¿Qué es el 'conteo de pips' en backgammon?",
          de: "Was ist 'Pip-Zählung' im Backgammon?",
          nl: "Wat is 'pip count' in backgammon?"
        },
        options: [
          { en: "Total distance all checkers must travel to bear off", es: "Distancia total que todas las fichas deben recorrer para sacar", de: "Gesamtdistanz die alle Steine zurücklegen müssen um auszuwürfeln", nl: "Totale afstand die alle stenen moeten afleggen om uit te gooien" },
          { en: "Number of checkers on board", es: "Número de fichas en el tablero", de: "Anzahl der Steine auf dem Brett", nl: "Aantal stenen op het bord" },
          { en: "Count of dice pips", es: "Conteo de pips de dados", de: "Zählung der Würfelpunkte", nl: "Telling van dobbelsteenpunten" },
          { en: "Points controlled", es: "Puntos controlados", de: "Kontrollierte Punkte", nl: "Gecontroleerde punten" }
        ],
        correct: 0,
        explanation: {
          en: "Pip count is the total number of points all your checkers must travel to bear off. Each checker's distance from the finish is counted and summed. Lower pip count means you're ahead in the race.",
          es: "El conteo de pips es el número total de puntos que todas tus fichas deben recorrer para sacar. La distancia de cada ficha desde el final se cuenta y se suma. Un conteo de pips más bajo significa que vas adelante en la carrera.",
          de: "Pip-Zählung ist die Gesamtzahl der Punkte die alle Ihre Steine zurücklegen müssen um auszuwürfeln. Die Distanz jedes Steins vom Ziel wird gezählt und summiert. Niedrigere Pip-Zählung bedeutet Sie sind im Rennen vorne.",
          nl: "Pip count is het totale aantal punten dat al je stenen moeten afleggen om uit te gooien. De afstand van elke steen tot de finish wordt geteld en opgeteld. Lagere pip count betekent dat je voorligt in de race."
        }
      },
      {
        question: {
          en: "What does it mean to 'hit and cover' in backgammon?",
          es: "¿Qué significa 'golpear y cubrir' en backgammon?",
          de: "Was bedeutet 'schlagen und decken' im Backgammon?",
          nl: "Wat betekent 'raken en dekken' in backgammon?"
        },
        options: [
          { en: "Hit opponent's blot and make that point in same turn", es: "Golpear blot del oponente y hacer ese punto en el mismo turno", de: "Gegnerischen Blot schlagen und diesen Punkt im selben Zug machen", nl: "Blot van tegenstander raken en dat punt maken in dezelfde beurt" },
          { en: "Protect your checkers", es: "Proteger tus fichas", de: "Ihre Steine schützen", nl: "Je stenen beschermen" },
          { en: "Block opponent's moves", es: "Bloquear movimientos del oponente", de: "Gegnerzüge blockieren", nl: "Zetten van tegenstander blokkeren" },
          { en: "Hide checkers behind prime", es: "Esconder fichas detrás del prime", de: "Steine hinter Prime verstecken", nl: "Stenen achter prime verbergen" }
        ],
        correct: 0,
        explanation: {
          en: "Hit and cover means hitting an opponent's blot and then making that point with a second checker on the same turn, creating a strong position by both attacking and securing territory.",
          es: "Golpear y cubrir significa golpear un blot del oponente y luego hacer ese punto con una segunda ficha en el mismo turno, creando una posición fuerte al atacar y asegurar territorio.",
          de: "Schlagen und decken bedeutet einen gegnerischen Blot zu schlagen und dann diesen Punkt mit einem zweiten Stein im selben Zug zu machen, wodurch eine starke Position durch Angriff und Gebietssicherung geschaffen wird.",
          nl: "Raken en dekken betekent een blot van de tegenstander raken en dan dat punt maken met een tweede steen in dezelfde beurt, waardoor een sterke positie wordt gecreëerd door zowel aan te vallen als gebied te beveiligen."
        }
      },
      {
        question: {
          en: "What is an 'anchor' in backgammon?",
          es: "¿Qué es un 'ancla' en backgammon?",
          de: "Was ist ein 'Anker' im Backgammon?",
          nl: "Wat is een 'anker' in backgammon?"
        },
        options: [
          { en: "Point you control in opponent's home board or outer board", es: "Punto que controlas en el tablero de casa u exterior del oponente", de: "Punkt den Sie im Home Board oder äußeren Brett des Gegners kontrollieren", nl: "Punt dat je controleert in het thuisbord of buitenbord van de tegenstander" },
          { en: "Strongest checker", es: "Ficha más fuerte", de: "Stärkster Stein", nl: "Sterkste steen" },
          { en: "Starting position", es: "Posición inicial", de: "Startposition", nl: "Startpositie" },
          { en: "Final point before bearing off", es: "Punto final antes de sacar", de: "Letzter Punkt vor dem Auswürfeln", nl: "Laatste punt voor uitgooien" }
        ],
        correct: 0,
        explanation: {
          en: "An anchor is a point you've made (two or more checkers) in your opponent's board that provides a defensive position, landing spot for hit checkers, and potential for hitting opponent blots.",
          es: "Un ancla es un punto que has hecho (dos o más fichas) en el tablero de tu oponente que proporciona una posición defensiva, lugar de aterrizaje para fichas golpeadas y potencial para golpear blots del oponente.",
          de: "Ein Anker ist ein Punkt den Sie gemacht haben (zwei oder mehr Steine) im Brett Ihres Gegners der eine defensive Position, Landeplatz für geschlagene Steine und Potenzial zum Schlagen gegnerischer Blots bietet.",
          nl: "Een anker is een punt dat je hebt gemaakt (twee of meer stenen) in het bord van je tegenstander dat een defensieve positie biedt, landingsplaats voor gerakte stenen en potentieel om blots van de tegenstander te raken."
        }
      },
      {
        question: {
          en: "What is the 'bar point' in backgammon?",
          es: "¿Qué es el 'punto de barra' en backgammon?",
          de: "Was ist der 'Bar-Punkt' im Backgammon?",
          nl: "Wat is het 'bar punt' in backgammon?"
        },
        options: [
          { en: "The 7-point, adjacent to the bar", es: "El punto 7, adyacente a la barra", de: "Der 7-Punkt, neben der Bar", nl: "Het 7-punt, naast de bar" },
          { en: "The bar itself", es: "La barra misma", de: "Die Bar selbst", nl: "De bar zelf" },
          { en: "The 13-point", es: "El punto 13", de: "Der 13-Punkt", nl: "Het 13-punt" },
          { en: "Any point next to bar", es: "Cualquier punto junto a la barra", de: "Jeder Punkt neben der Bar", nl: "Elk punt naast de bar" }
        ],
        correct: 0,
        explanation: {
          en: "The bar point is the 7-point, which is the point in your home board directly adjacent to the bar. Making this point is strategically valuable as it blocks the most common entry roll (6) for opponent checkers on the bar.",
          es: "El punto de barra es el punto 7, que es el punto en tu tablero de casa directamente adyacente a la barra. Hacer este punto es estratégicamente valioso ya que bloquea la tirada de entrada más común (6) para las fichas del oponente en la barra.",
          de: "Der Bar-Punkt ist der 7-Punkt, der Punkt in Ihrem Home Board direkt neben der Bar. Diesen Punkt zu machen ist strategisch wertvoll da er den häufigsten Eintrittswurf (6) für gegnerische Steine auf der Bar blockiert.",
          nl: "Het bar punt is het 7-punt, het punt in je thuisbord direct naast de bar. Dit punt maken is strategisch waardevol omdat het de meest voorkomende binnenworp (6) blokkeert voor stenen van de tegenstander op de bar."
        }
      },
      {
        question: {
          en: "What happens if you roll doubles in backgammon?",
          es: "¿Qué pasa si sacas dobles en backgammon?",
          de: "Was passiert wenn Sie einen Pasch im Backgammon würfeln?",
          nl: "Wat gebeurt er als je dubbel gooit in backgammon?"
        },
        options: [
          { en: "You move that number four times instead of twice", es: "Mueves ese número cuatro veces en lugar de dos", de: "Sie bewegen diese Zahl viermal statt zweimal", nl: "Je verplaatst dat getal vier keer in plaats van twee keer" },
          { en: "You move double the distance", es: "Mueves el doble de distancia", de: "Sie bewegen die doppelte Distanz", nl: "Je verplaatst dubbele afstand" },
          { en: "You automatically double the stakes", es: "Doblas automáticamente las apuestas", de: "Sie verdoppeln automatisch die Einsätze", nl: "Je verdubbelt automatisch de inzet" },
          { en: "You roll again", es: "Tiras de nuevo", de: "Sie würfeln erneut", nl: "Je gooit opnieuw" }
        ],
        correct: 0,
        explanation: {
          en: "When you roll doubles (same number on both dice), you get to use that number four times. For example, rolling double 3s means you can make four moves of 3 spaces each.",
          es: "Cuando sacas dobles (mismo número en ambos dados), puedes usar ese número cuatro veces. Por ejemplo, sacar doble 3 significa que puedes hacer cuatro movimientos de 3 espacios cada uno.",
          de: "Wenn Sie einen Pasch würfeln (gleiche Zahl auf beiden Würfeln), können Sie diese Zahl viermal verwenden. Zum Beispiel bedeutet Pasch 3 dass Sie vier Bewegungen von je 3 Feldern machen können.",
          nl: "Wanneer je dubbel gooit (hetzelfde getal op beide dobbelstenen), mag je dat getal vier keer gebruiken. Bijvoorbeeld, dubbel 3 gooien betekent dat je vier bewegingen van elk 3 vakken kunt maken."
        }
      },
      {
        question: {
          en: "What does 'making a point' mean in backgammon?",
          es: "¿Qué significa 'hacer un punto' en backgammon?",
          de: "Was bedeutet 'einen Punkt machen' im Backgammon?",
          nl: "Wat betekent 'een punt maken' in backgammon?"
        },
        options: [
          { en: "Placing two or more checkers on the same point", es: "Colocar dos o más fichas en el mismo punto", de: "Zwei oder mehr Steine auf denselben Punkt setzen", nl: "Twee of meer stenen op hetzelfde punt plaatsen" },
          { en: "Scoring a point", es: "Anotar un punto", de: "Einen Punkt erzielen", nl: "Een punt scoren" },
          { en: "Reaching the endpoint", es: "Llegar al punto final", de: "Den Endpunkt erreichen", nl: "Het eindpunt bereiken" },
          { en: "Marking territory", es: "Marcar territorio", de: "Territorium markieren", nl: "Gebied markeren" }
        ],
        correct: 0,
        explanation: {
          en: "Making a point means placing two or more of your checkers on the same point, which blocks that point from your opponent. They cannot land on or touch down on a point you've made.",
          es: "Hacer un punto significa colocar dos o más de tus fichas en el mismo punto, lo que bloquea ese punto de tu oponente. No pueden aterrizar o tocar un punto que hayas hecho.",
          de: "Einen Punkt machen bedeutet zwei oder mehr Ihrer Steine auf denselben Punkt zu setzen, was diesen Punkt für Ihren Gegner blockiert. Sie können nicht auf einem Punkt den Sie gemacht haben landen oder berühren.",
          nl: "Een punt maken betekent twee of meer van je stenen op hetzelfde punt plaatsen, wat dat punt blokkeert voor je tegenstander. Ze kunnen niet landen op of aanraken een punt dat je hebt gemaakt."
        }
      },
      {
        question: {
          en: "When bearing off, what happens if you roll a number but can't move any checker that exact distance?",
          es: "Al sacar fichas, ¿qué pasa si sacas un número pero no puedes mover ninguna ficha esa distancia exacta?",
          de: "Beim Auswürfeln, was passiert wenn Sie eine Zahl würfeln aber keinen Stein genau diese Distanz bewegen können?",
          nl: "Bij uitgooien, wat gebeurt er als je een getal gooit maar geen steen die exacte afstand kunt verplaatsen?"
        },
        options: [
          { en: "You must make a legal move with a checker if possible, even if not bearing off", es: "Debes hacer un movimiento legal con una ficha si es posible, aunque no sea sacar", de: "Sie müssen einen legalen Zug mit einem Stein machen wenn möglich, auch wenn nicht auswürfeln", nl: "Je moet een legale zet maken met een steen indien mogelijk, ook al is het niet uitgooien" },
          { en: "You lose that die", es: "Pierdes ese dado", de: "Sie verlieren diesen Würfel", nl: "Je verliest die dobbelsteen" },
          { en: "You can bear off from any point", es: "Puedes sacar desde cualquier punto", de: "Sie können von jedem Punkt auswürfeln", nl: "Je kunt vanaf elk punt uitgooien" },
          { en: "You roll again", es: "Tiras de nuevo", de: "Sie würfeln erneut", nl: "Je gooit opnieuw" }
        ],
        correct: 0,
        explanation: {
          en: "During bearing off, you must use your full roll if legally possible. If you can't bear off with a number, you must move a checker within your home board. You can only forfeit a die if there's absolutely no legal move.",
          es: "Durante sacar fichas, debes usar tu tirada completa si es legalmente posible. Si no puedes sacar con un número, debes mover una ficha dentro de tu tablero de casa. Solo puedes perder un dado si no hay absolutamente ningún movimiento legal.",
          de: "Während des Auswürfelns müssen Sie Ihren vollen Wurf verwenden wenn rechtlich möglich. Wenn Sie mit einer Zahl nicht auswürfeln können, müssen Sie einen Stein innerhalb Ihres Home Boards bewegen. Sie können einen Würfel nur verfallen lassen wenn es absolut keinen legalen Zug gibt.",
          nl: "Tijdens uitgooien moet je je volledige worp gebruiken indien wettelijk mogelijk. Als je niet kunt uitgooien met een getal, moet je een steen binnen je thuisbord verplaatsen. Je kunt alleen een dobbelsteen verbeuren als er absoluut geen legale zet is."
        }
      },
      {
        question: {
          en: "What is a 'blitz' strategy in backgammon?",
          es: "¿Qué es una estrategia 'blitz' en backgammon?",
          de: "Was ist eine 'Blitz'-Strategie im Backgammon?",
          nl: "Wat is een 'blitz' strategie in backgammon?"
        },
        options: [
          { en: "Aggressive attack trying to close out opponent by making home board points", es: "Ataque agresivo intentando cerrar al oponente haciendo puntos del tablero de casa", de: "Aggressiver Angriff der versucht den Gegner auszusperren indem Home Board Punkte gemacht werden", nl: "Agressieve aanval die probeert tegenstander uit te sluiten door thuisbordpunten te maken" },
          { en: "Fast-paced game", es: "Juego de ritmo rápido", de: "Schnelles Spiel", nl: "Snel spel" },
          { en: "Lightning round", es: "Ronda relámpago", de: "Blitzrunde", nl: "Bliksemronde" },
          { en: "Defensive strategy", es: "Estrategia defensiva", de: "Defensive Strategie", nl: "Defensieve strategie" }
        ],
        correct: 0,
        explanation: {
          en: "A blitz is an aggressive attacking strategy where you hit opponent checkers and quickly make points in your home board to trap them on the bar or prevent their escape, aiming for a gammon or backgammon win.",
          es: "Un blitz es una estrategia de ataque agresiva donde golpeas fichas del oponente y rápidamente haces puntos en tu tablero de casa para atraparlos en la barra o prevenir su escape, apuntando a una victoria gammon o backgammon.",
          de: "Ein Blitz ist eine aggressive Angriffsstrategie bei der Sie gegnerische Steine schlagen und schnell Punkte in Ihrem Home Board machen um sie auf der Bar einzusperren oder ihre Flucht zu verhindern, mit dem Ziel eines Gammon- oder Backgammon-Siegs.",
          nl: "Een blitz is een agressieve aanvalsstrategie waarbij je stenen van de tegenstander raakt en snel punten maakt in je thuisbord om ze op de bar vast te houden of hun ontsnapping te voorkomen, met als doel een gammon of backgammon overwinning."
        }
      },
      {
        question: {
          en: "What is the 'golden point' in backgammon?",
          es: "¿Qué es el 'punto dorado' en backgammon?",
          de: "Was ist der 'goldene Punkt' im Backgammon?",
          nl: "Wat is het 'gouden punt' in backgammon?"
        },
        options: [
          { en: "The 5-point in your home board", es: "El punto 5 en tu tablero de casa", de: "Der 5-Punkt in Ihrem Home Board", nl: "Het 5-punt in je thuisbord" },
          { en: "The starting point", es: "El punto de inicio", de: "Der Startpunkt", nl: "Het startpunt" },
          { en: "The 24-point", es: "El punto 24", de: "Der 24-Punkt", nl: "Het 24-punt" },
          { en: "The point worth most", es: "El punto que vale más", de: "Der Punkt der am meisten wert ist", nl: "Het punt dat het meest waard is" }
        ],
        correct: 0,
        explanation: {
          en: "The golden point is the 5-point in your home board. It's considered the most valuable point to make early in the game because it's ideally positioned for both defense and attack, and is 5 pips from bearing off.",
          es: "El punto dorado es el punto 5 en tu tablero de casa. Se considera el punto más valioso para hacer temprano en el juego porque está idealmente posicionado tanto para defensa como para ataque, y está a 5 pips de sacar.",
          de: "Der goldene Punkt ist der 5-Punkt in Ihrem Home Board. Er gilt als der wertvollste Punkt um ihn früh im Spiel zu machen, weil er ideal für Verteidigung und Angriff positioniert ist und 5 Pips vom Auswürfeln entfernt ist.",
          nl: "Het gouden punt is het 5-punt in je thuisbord. Het wordt beschouwd als het meest waardevolle punt om vroeg in het spel te maken omdat het ideaal gepositioneerd is voor zowel verdediging als aanval, en 5 pips verwijderd is van uitgooien."
        }
      },
      {
        question: {
          en: "What does it mean to be 'closed out' in backgammon?",
          es: "¿Qué significa estar 'cerrado' en backgammon?",
          de: "Was bedeutet es 'ausgesperrt' zu sein im Backgammon?",
          nl: "Wat betekent het om 'buitengesloten' te zijn in backgammon?"
        },
        options: [
          { en: "Having checkers on the bar with all six opponent home board points made", es: "Tener fichas en la barra con los seis puntos del tablero de casa del oponente hechos", de: "Steine auf der Bar haben wenn alle sechs Home Board Punkte des Gegners gemacht sind", nl: "Stenen op de bar hebben terwijl alle zes thuisbordpunten van tegenstander gemaakt zijn" },
          { en: "Losing the game", es: "Perder el juego", de: "Das Spiel verlieren", nl: "Het spel verliezen" },
          { en: "Being trapped behind prime", es: "Estar atrapado detrás del prime", de: "Hinter einem Prime gefangen sein", nl: "Gevangen zitten achter prime" },
          { en: "Unable to double", es: "Incapaz de doblar", de: "Unfähig zu verdoppeln", nl: "Niet in staat te verdubbelen" }
        ],
        correct: 0,
        explanation: {
          en: "Being closed out means you have one or more checkers on the bar and your opponent has made all six points in their home board, making it impossible for you to enter. You must wait until they open a point.",
          es: "Estar cerrado significa que tienes una o más fichas en la barra y tu oponente ha hecho los seis puntos en su tablero de casa, haciendo imposible que entres. Debes esperar hasta que abran un punto.",
          de: "Ausgesperrt zu sein bedeutet dass Sie einen oder mehrere Steine auf der Bar haben und Ihr Gegner alle sechs Punkte in seinem Home Board gemacht hat, was es unmöglich macht einzutreten. Sie müssen warten bis sie einen Punkt öffnen.",
          nl: "Buitengesloten zijn betekent dat je een of meer stenen op de bar hebt en je tegenstander alle zes punten in hun thuisbord heeft gemaakt, waardoor het onmogelijk is om binnen te komen. Je moet wachten tot ze een punt openen."
        }
      },
      {
        question: {
          en: "What is 'contact' in backgammon?",
          es: "¿Qué es 'contacto' en backgammon?",
          de: "Was ist 'Kontakt' im Backgammon?",
          nl: "Wat is 'contact' in backgammon?"
        },
        options: [
          { en: "When opposing checkers can still potentially hit each other", es: "Cuando las fichas opuestas aún pueden potencialmente golpearse", de: "Wenn gegnerische Steine sich noch potenziell schlagen können", nl: "Wanneer tegengestelde stenen elkaar nog potentieel kunnen raken" },
          { en: "Touching the board", es: "Tocar el tablero", de: "Das Brett berühren", nl: "Het bord aanraken" },
          { en: "Physical dice contact", es: "Contacto físico de dados", de: "Physischer Würfelkontakt", nl: "Fysiek dobbelsteencontact" },
          { en: "Player communication", es: "Comunicación del jugador", de: "Spielerkommunikation", nl: "Speler communicatie" }
        ],
        correct: 0,
        explanation: {
          en: "Contact means the game is still in a tactical phase where checkers from both players can potentially hit each other. The game 'breaks contact' when all checkers have passed each other and it becomes a pure race.",
          es: "Contacto significa que el juego todavía está en una fase táctica donde las fichas de ambos jugadores pueden potencialmente golpearse. El juego 'rompe contacto' cuando todas las fichas se han pasado entre sí y se convierte en una carrera pura.",
          de: "Kontakt bedeutet dass das Spiel noch in einer taktischen Phase ist in der Steine beider Spieler sich potenziell schlagen können. Das Spiel 'bricht Kontakt' wenn alle Steine aneinander vorbeigegangen sind und es zu einem reinen Rennen wird.",
          nl: "Contact betekent dat het spel nog in een tactische fase is waarin stenen van beide spelers elkaar potentieel kunnen raken. Het spel 'verbreekt contact' wanneer alle stenen elkaar zijn gepasseerd en het een pure race wordt."
        }
      },
      {
        question: {
          en: "What is the purpose of the 'Crawford rule' in match play?",
          es: "¿Cuál es el propósito de la 'regla Crawford' en juego de match?",
          de: "Was ist der Zweck der 'Crawford-Regel' im Match-Spiel?",
          nl: "Wat is het doel van de 'Crawford regel' in wedstrijdspel?"
        },
        options: [
          { en: "Prevent doubling in the game when one player is one point from winning", es: "Prevenir doblaje en el juego cuando un jugador está a un punto de ganar", de: "Verdoppeln verhindern im Spiel wenn ein Spieler einen Punkt vom Sieg entfernt ist", nl: "Verdubbelen voorkomen in het spel wanneer een speler één punt verwijderd is van winnen" },
          { en: "Speed up gameplay", es: "Acelerar el juego", de: "Gameplay beschleunigen", nl: "Gameplay versnellen" },
          { en: "Determine who goes first", es: "Determinar quién va primero", de: "Bestimmen wer zuerst geht", nl: "Bepalen wie als eerste gaat" },
          { en: "Handle ties", es: "Manejar empates", de: "Unentschieden handhaben", nl: "Gelijkspel afhandelen" }
        ],
        correct: 0,
        explanation: {
          en: "The Crawford rule states that when one player reaches one point away from winning a match, the doubling cube cannot be used in the next game. This prevents the trailing player from immediately doubling to win the match.",
          es: "La regla Crawford establece que cuando un jugador llega a un punto de ganar un match, el cubo de doblaje no se puede usar en el próximo juego. Esto previene que el jugador que va perdiendo doble inmediatamente para ganar el match.",
          de: "Die Crawford-Regel besagt dass wenn ein Spieler einen Punkt vom Matchsieg entfernt ist, der Dopplungswürfel im nächsten Spiel nicht verwendet werden kann. Dies verhindert dass der zurückliegende Spieler sofort verdoppelt um das Match zu gewinnen.",
          nl: "De Crawford regel stelt dat wanneer een speler één punt verwijderd is van het winnen van een wedstrijd, de verdubbeldob niet kan worden gebruikt in het volgende spel. Dit voorkomt dat de achterliggende speler onmiddellijk verdubbelt om de wedstrijd te winnen."
        }
      },
      {
        question: {
          en: "What does 'opening roll' mean in backgammon?",
          es: "¿Qué significa 'tirada de apertura' en backgammon?",
          de: "Was bedeutet 'Eröffnungswurf' im Backgammon?",
          nl: "Wat betekent 'openingsworp' in backgammon?"
        },
        options: [
          { en: "First move of the game after determining who goes first", es: "Primer movimiento del juego después de determinar quién va primero", de: "Erster Zug des Spiels nachdem bestimmt wurde wer zuerst geht", nl: "Eerste zet van het spel na bepaling wie als eerste gaat" },
          { en: "Rolling to open doors", es: "Tirar para abrir puertas", de: "Würfeln um Türen zu öffnen", nl: "Gooien om deuren te openen" },
          { en: "Starting the tournament", es: "Comenzar el torneo", de: "Das Turnier beginnen", nl: "Het toernooi starten" },
          { en: "Any first roll", es: "Cualquier primera tirada", de: "Jeder erste Wurf", nl: "Elke eerste worp" }
        ],
        correct: 0,
        explanation: {
          en: "The opening roll is the first move of the game. Each player rolls one die; the higher roll moves first using both numbers shown. If tied, both roll again. There are 15 possible non-doubles opening rolls.",
          es: "La tirada de apertura es el primer movimiento del juego. Cada jugador tira un dado; la tirada más alta mueve primero usando ambos números mostrados. Si empatan, ambos tiran de nuevo. Hay 15 posibles tiradas de apertura sin dobles.",
          de: "Der Eröffnungswurf ist der erste Zug des Spiels. Jeder Spieler würfelt einen Würfel; der höhere Wurf bewegt zuerst mit beiden gezeigten Zahlen. Bei Gleichstand würfeln beide erneut. Es gibt 15 mögliche Nicht-Pasch-Eröffnungswürfe.",
          nl: "De openingsworp is de eerste zet van het spel. Elke speler gooit één dobbelsteen; de hoogste worp verplaatst eerst met beide getoonde getallen. Bij gelijkspel gooien beide opnieuw. Er zijn 15 mogelijke niet-dubbele openingsworpen."
        }
      },
      {
        question: {
          en: "What is a 'backgammon' (the triple game)?",
          es: "¿Qué es un 'backgammon' (el triple juego)?",
          de: "Was ist ein 'Backgammon' (das Dreifachspiel)?",
          nl: "Wat is een 'backgammon' (het drievoudige spel)?"
        },
        options: [
          { en: "Winning with opponent having checkers in your home board or on the bar", es: "Ganar con el oponente teniendo fichas en tu tablero de casa o en la barra", de: "Gewinnen wenn Gegner Steine in Ihrem Home Board oder auf der Bar hat", nl: "Winnen terwijl tegenstander stenen in je thuisbord of op de bar heeft" },
          { en: "Playing three games", es: "Jugar tres juegos", de: "Drei Spiele spielen", nl: "Drie spellen spelen" },
          { en: "Triple score", es: "Triple puntuación", de: "Dreifache Punktzahl", nl: "Drievoudige score" },
          { en: "Three players", es: "Tres jugadores", de: "Drei Spieler", nl: "Drie spelers" }
        ],
        correct: 0,
        explanation: {
          en: "A backgammon is the most valuable win, worth 3 times the cube value. It occurs when you bear off all your checkers while your opponent still has at least one checker in your home board or on the bar (not just unborne).",
          es: "Un backgammon es la victoria más valiosa, vale 3 veces el valor del cubo. Ocurre cuando sacas todas tus fichas mientras tu oponente todavía tiene al menos una ficha en tu tablero de casa o en la barra (no solo sin sacar).",
          de: "Ein Backgammon ist der wertvollste Sieg, wert das 3-fache des Würfelwerts. Es tritt auf wenn Sie alle Ihre Steine auswürfeln während Ihr Gegner noch mindestens einen Stein in Ihrem Home Board oder auf der Bar hat (nicht nur unausgewürfelt).",
          nl: "Een backgammon is de meest waardevolle overwinning, waard 3 keer de dobbelsteenwaarde. Het vindt plaats wanneer je al je stenen uitgooit terwijl je tegenstander nog minstens één steen in je thuisbord of op de bar heeft (niet alleen onuitgegooid)."
        }
      },
      {
        question: {
          en: "In tournament backgammon, what is 'match equity'?",
          es: "En backgammon de torneo, ¿qué es 'match equity'?",
          de: "Im Turnier-Backgammon, was ist 'Match-Equity'?",
          nl: "In toernooi backgammon, wat is 'wedstrijd equity'?"
        },
        options: [
          { en: "Your probability of winning the match from the current score", es: "Tu probabilidad de ganar el match desde la puntuación actual", de: "Ihre Wahrscheinlichkeit das Match vom aktuellen Stand zu gewinnen", nl: "Je kans om de wedstrijd te winnen vanaf de huidige score" },
          { en: "Fair play rules", es: "Reglas de juego limpio", de: "Fair-Play-Regeln", nl: "Eerlijk spel regels" },
          { en: "Prize pool distribution", es: "Distribución del premio", de: "Preispool-Verteilung", nl: "Prijzenpot verdeling" },
          { en: "Player ratings", es: "Clasificaciones de jugadores", de: "Spielerbewertungen", nl: "Speler beoordelingen" }
        ],
        correct: 0,
        explanation: {
          en: "Match equity is your winning probability at any given match score. For example, leading 5-3 in a 7-point match gives you higher match equity than your opponent. Cube decisions in tournaments depend heavily on match equity calculations.",
          es: "Match equity es tu probabilidad de ganar en cualquier puntuación de match dada. Por ejemplo, liderar 5-3 en un match a 7 puntos te da mayor match equity que tu oponente. Las decisiones de cubo en torneos dependen en gran medida de cálculos de match equity.",
          de: "Match-Equity ist Ihre Gewinnwahrscheinlichkeit bei jedem gegebenen Match-Stand. Zum Beispiel gibt Ihnen eine Führung von 5-3 in einem 7-Punkte-Match höheres Match-Equity als Ihr Gegner. Würfelentscheidungen in Turnieren hängen stark von Match-Equity-Berechnungen ab.",
          nl: "Wedstrijd equity is je winkans bij elke gegeven wedstrijdscore. Bijvoorbeeld, leiden met 5-3 in een 7-punts wedstrijd geeft je hogere wedstrijd equity dan je tegenstander. Dobbelsteenbeslissingen in toernooien hangen sterk af van wedstrijd equity berekeningen."
        }
      },
      {
        question: {
          en: "What is the 'midpoint' in backgammon?",
          es: "¿Qué es el 'punto medio' en backgammon?",
          de: "Was ist der 'Mittelpunkt' im Backgammon?",
          nl: "Wat is het 'middenpunt' in backgammon?"
        },
        options: [
          { en: "The 13-point where you start with 5 checkers", es: "El punto 13 donde comienzas con 5 fichas", de: "Der 13-Punkt wo Sie mit 5 Steinen beginnen", nl: "Het 13-punt waar je met 5 stenen begint" },
          { en: "Center of the board", es: "Centro del tablero", de: "Mitte des Bretts", nl: "Midden van het bord" },
          { en: "Halfway to bearing off", es: "A mitad de camino para sacar", de: "Auf halbem Weg zum Auswürfeln", nl: "Halverwege uitgooien" },
          { en: "The bar", es: "La barra", de: "Die Bar", nl: "De bar" }
        ],
        correct: 0,
        explanation: {
          en: "The midpoint is the 13-point, the first point in your outer board. You start the game with 5 checkers there. It's an important staging area for moving checkers forward but should generally be cleared as the game progresses.",
          es: "El punto medio es el punto 13, el primer punto en tu tablero exterior. Comienzas el juego con 5 fichas allí. Es un área de preparación importante para mover fichas hacia adelante pero generalmente debe despejarse a medida que avanza el juego.",
          de: "Der Mittelpunkt ist der 13-Punkt, der erste Punkt in Ihrem äußeren Brett. Sie beginnen das Spiel mit 5 Steinen dort. Es ist ein wichtiger Bereitstellungsbereich zum Vorwärtsbewegen von Steinen, sollte aber im Spielverlauf generell geräumt werden.",
          nl: "Het middenpunt is het 13-punt, het eerste punt in je buitenbord. Je begint het spel met 5 stenen daar. Het is een belangrijk verzamelgebied voor het vooruit bewegen van stenen maar moet over het algemeen worden opgeruimd naarmate het spel vordert."
        }
      },
      {
        question: {
          en: "What does 'diversification' mean in backgammon checker placement?",
          es: "¿Qué significa 'diversificación' en la colocación de fichas de backgammon?",
          de: "Was bedeutet 'Diversifikation' bei der Backgammon-Steinplatzierung?",
          nl: "Wat betekent 'diversificatie' in backgammon steenplaatsing?"
        },
        options: [
          { en: "Spreading checkers across multiple points for flexibility", es: "Distribuir fichas en múltiples puntos para flexibilidad", de: "Steine über mehrere Punkte verteilen für Flexibilität", nl: "Stenen over meerdere punten verspreiden voor flexibiliteit" },
          { en: "Using different strategies", es: "Usar diferentes estrategias", de: "Verschiedene Strategien verwenden", nl: "Verschillende strategieën gebruiken" },
          { en: "Playing multiple games", es: "Jugar múltiples juegos", de: "Mehrere Spiele spielen", nl: "Meerdere spellen spelen" },
          { en: "Varying dice rolls", es: "Variar tiradas de dados", de: "Würfelwürfe variieren", nl: "Dobbelsteenworpen variëren" }
        ],
        correct: 0,
        explanation: {
          en: "Diversification means distributing your checkers across multiple points rather than stacking them heavily. This provides more flexibility for different dice rolls and better coverage of the board, though sometimes stacking is necessary for making points.",
          es: "La diversificación significa distribuir tus fichas en múltiples puntos en lugar de apilarlas pesadamente. Esto proporciona más flexibilidad para diferentes tiradas de dados y mejor cobertura del tablero, aunque a veces apilar es necesario para hacer puntos.",
          de: "Diversifikation bedeutet Ihre Steine über mehrere Punkte zu verteilen anstatt sie stark zu stapeln. Dies bietet mehr Flexibilität für verschiedene Würfelwürfe und bessere Brettabdeckung, obwohl Stapeln manchmal notwendig ist um Punkte zu machen.",
          nl: "Diversificatie betekent je stenen verdelen over meerdere punten in plaats van ze zwaar op te stapelen. Dit biedt meer flexibiliteit voor verschillende dobbelsteenworpen en betere bordbedekking, hoewel stapelen soms noodzakelijk is om punten te maken."
        }
      },
      {
        question: {
          en: "What is 'racing' in backgammon?",
          es: "¿Qué es 'correr' en backgammon?",
          de: "Was ist 'Rennen' im Backgammon?",
          nl: "Wat is 'racen' in backgammon?"
        },
        options: [
          { en: "When both players have passed each other and are simply moving checkers home", es: "Cuando ambos jugadores se han pasado y simplemente están moviendo fichas a casa", de: "Wenn beide Spieler aneinander vorbei sind und einfach Steine nach Hause bewegen", nl: "Wanneer beide spelers elkaar zijn gepasseerd en simpelweg stenen naar huis bewegen" },
          { en: "Fast gameplay", es: "Juego rápido", de: "Schnelles Gameplay", nl: "Snel spel" },
          { en: "Speed tournament", es: "Torneo de velocidad", de: "Schnelligkeitsturnier", nl: "Snelheidstoernooi" },
          { en: "Moving quickly", es: "Moverse rápidamente", de: "Sich schnell bewegen", nl: "Snel bewegen" }
        ],
        correct: 0,
        explanation: {
          en: "Racing occurs when contact has been broken - all checkers have passed each other so there's no possibility of hitting. The game becomes a pure race to bear off first, where pip count is the main determining factor of who's ahead.",
          es: "Correr ocurre cuando el contacto se ha roto - todas las fichas se han pasado entre sí por lo que no hay posibilidad de golpear. El juego se convierte en una carrera pura para sacar primero, donde el conteo de pips es el factor principal que determina quién va adelante.",
          de: "Rennen tritt auf wenn Kontakt gebrochen wurde - alle Steine sind aneinander vorbei so dass keine Möglichkeit des Schlagens besteht. Das Spiel wird zu einem reinen Rennen um zuerst auszuwürfeln, wobei die Pip-Zählung der Hauptfaktor ist der bestimmt wer vorne liegt.",
          nl: "Racen vindt plaats wanneer contact is verbroken - alle stenen zijn elkaar gepasseerd dus er is geen mogelijkheid tot raken. Het spel wordt een pure race om eerst uit te gooien, waarbij pip count de belangrijkste bepalende factor is voor wie voorligt."
        }
      },
      {
        question: {
          en: "What is 'redoubling' in backgammon?",
          es: "¿Qué es 'redoblaje' en backgammon?",
          de: "Was ist 'Wiederverdoppeln' im Backgammon?",
          nl: "Wat is 'herverdubbelen' in backgammon?"
        },
        options: [
          { en: "When the player who accepted a double offers the cube back", es: "Cuando el jugador que aceptó un doble ofrece el cubo de vuelta", de: "Wenn der Spieler der eine Verdopplung akzeptiert hat den Würfel zurück anbietet", nl: "Wanneer de speler die een verdubbeling accepteerde de dobbelsteen terug aanbiedt" },
          { en: "Doubling twice in one game", es: "Doblar dos veces en un juego", de: "Zweimal in einem Spiel verdoppeln", nl: "Twee keer verdubbelen in één spel" },
          { en: "Rolling doubles again", es: "Sacar dobles de nuevo", de: "Erneut Pasch würfeln", nl: "Opnieuw dubbel gooien" },
          { en: "Restarting with double stakes", es: "Reiniciar con doble apuesta", de: "Neustart mit doppelten Einsätzen", nl: "Herstarten met dubbele inzet" }
        ],
        correct: 0,
        explanation: {
          en: "After accepting a double, cube ownership transfers to you. As owner, you have the exclusive right to redouble (offer the cube back at twice the current value). This creates a strategic power shift.",
          es: "Después de aceptar un doble, la propiedad del cubo se transfiere a ti. Como propietario, tienes el derecho exclusivo de redoblar (ofrecer el cubo de vuelta al doble del valor actual). Esto crea un cambio de poder estratégico.",
          de: "Nach dem Akzeptieren einer Verdopplung geht der Würfelbesitz auf Sie über. Als Besitzer haben Sie das ausschließliche Recht wiederzuverdoppeln (den Würfel zum doppelten aktuellen Wert zurückzubieten). Dies schafft eine strategische Machtverschiebung.",
          nl: "Na het accepteren van een verdubbeling gaat het dobbelsteenbezit over naar jou. Als eigenaar heb je het exclusieve recht om te herverdubbelen (de dobbelsteen terug aan te bieden tegen tweemaal de huidige waarde). Dit creëert een strategische machtsverschuiving."
        }
      },
      {
        question: {
          en: "What is a 'builder' in backgammon strategy?",
          es: "¿Qué es un 'constructor' en estrategia de backgammon?",
          de: "Was ist ein 'Baustein' in der Backgammon-Strategie?",
          nl: "Wat is een 'bouwer' in backgammon strategie?"
        },
        options: [
          { en: "A spare checker positioned to make new points", es: "Una ficha extra posicionada para hacer nuevos puntos", de: "Ein zusätzlicher Stein positioniert um neue Punkte zu machen", nl: "Een reserve steen gepositioneerd om nieuwe punten te maken" },
          { en: "Player who creates strategy", es: "Jugador que crea estrategia", de: "Spieler der Strategie entwickelt", nl: "Speler die strategie creëert" },
          { en: "First checker on a point", es: "Primera ficha en un punto", de: "Erster Stein auf einem Punkt", nl: "Eerste steen op een punt" },
          { en: "Strongest piece", es: "Pieza más fuerte", de: "Stärkstes Stück", nl: "Sterkste stuk" }
        ],
        correct: 0,
        explanation: {
          en: "A builder is a spare checker positioned strategically (often on the midpoint or in the outer board) that can be used to make points on good rolls. Good builders provide flexibility and point-making potential.",
          es: "Un constructor es una ficha extra posicionada estratégicamente (a menudo en el punto medio o en el tablero exterior) que puede usarse para hacer puntos en buenas tiradas. Buenos constructores proporcionan flexibilidad y potencial para hacer puntos.",
          de: "Ein Baustein ist ein zusätzlicher Stein der strategisch positioniert ist (oft auf dem Mittelpunkt oder im äußeren Brett) und verwendet werden kann um bei guten Würfen Punkte zu machen. Gute Bausteine bieten Flexibilität und Punktemach-Potenzial.",
          nl: "Een bouwer is een reserve steen strategisch gepositioneerd (vaak op het middenpunt of in het buitenbord) die kan worden gebruikt om punten te maken bij goede worpen. Goede bouwers bieden flexibiliteit en punt-maak potentieel."
        }
      },
      {
        question: {
          en: "What is 'timing' in backgammon?",
          es: "¿Qué es 'timing' en backgammon?",
          de: "Was ist 'Timing' im Backgammon?",
          nl: "Wat is 'timing' in backgammon?"
        },
        options: [
          { en: "Having enough spare checkers to wait without breaking key points", es: "Tener suficientes fichas extras para esperar sin romper puntos clave", de: "Genug zusätzliche Steine haben um zu warten ohne Schlüsselpunkte zu brechen", nl: "Genoeg reserve stenen hebben om te wachten zonder sleutelpunten te breken" },
          { en: "Speed of play", es: "Velocidad de juego", de: "Spielgeschwindigkeit", nl: "Spelsnelheid" },
          { en: "Clock management", es: "Gestión del reloj", de: "Uhrverwaltung", nl: "Klokbeheer" },
          { en: "Move order", es: "Orden de movimiento", de: "Zugreihenfolge", nl: "Zetvolgorde" }
        ],
        correct: 0,
        explanation: {
          en: "Timing refers to having enough spare checkers (depth) so you can wait for favorable rolls without being forced to break important points prematurely. Good timing is crucial in holding games and priming games.",
          es: "Timing se refiere a tener suficientes fichas extras (profundidad) para que puedas esperar tiradas favorables sin verte obligado a romper puntos importantes prematuramente. Buen timing es crucial en juegos de retención y juegos de prime.",
          de: "Timing bezieht sich darauf genug zusätzliche Steine (Tiefe) zu haben damit Sie auf günstige Würfe warten können ohne gezwungen zu werden wichtige Punkte vorzeitig zu brechen. Gutes Timing ist entscheidend in Haltespielen und Primingspielen.",
          nl: "Timing verwijst naar het hebben van genoeg reserve stenen (diepte) zodat je kunt wachten op gunstige worpen zonder gedwongen te worden belangrijke punten voortijdig te breken. Goede timing is cruciaal in vasthoudspellen en prime spellen."
        }
      },
      {
        question: {
          en: "What is a 'back game' in backgammon?",
          es: "¿Qué es un 'juego trasero' en backgammon?",
          de: "Was ist ein 'Rückspiel' im Backgammon?",
          nl: "Wat is een 'achterspel' in backgammon?"
        },
        options: [
          { en: "Strategy of holding two or more anchors in opponent's home board", es: "Estrategia de mantener dos o más anclas en el tablero de casa del oponente", de: "Strategie zwei oder mehr Anker im Home Board des Gegners zu halten", nl: "Strategie om twee of meer ankers te houden in het thuisbord van tegenstander" },
          { en: "Playing defensively", es: "Jugar defensivamente", de: "Defensiv spielen", nl: "Defensief spelen" },
          { en: "Reversing direction", es: "Invertir dirección", de: "Richtung umkehren", nl: "Richting omkeren" },
          { en: "Trailing in score", es: "Ir perdiendo en puntuación", de: "Im Punktestand zurückliegen", nl: "Achterliggen in score" }
        ],
        correct: 0,
        explanation: {
          en: "A back game is a strategic position where you deliberately hold two or more anchors (usually low anchors like the 1, 2, or 3-points) in your opponent's home board while waiting for them to leave shots as they bear off.",
          es: "Un juego trasero es una posición estratégica donde deliberadamente mantienes dos o más anclas (usualmente anclas bajas como los puntos 1, 2 o 3) en el tablero de casa de tu oponente mientras esperas que dejen tiros mientras sacan.",
          de: "Ein Rückspiel ist eine strategische Position bei der Sie absichtlich zwei oder mehr Anker (normalerweise niedrige Anker wie die 1-, 2- oder 3-Punkte) im Home Board Ihres Gegners halten während Sie warten dass sie Blots hinterlassen beim Auswürfeln.",
          nl: "Een achterspel is een strategische positie waarbij je opzettelijk twee of meer ankers (meestal lage ankers zoals de 1, 2 of 3-punten) houdt in het thuisbord van je tegenstander terwijl je wacht tot ze shots achterlaten terwijl ze uitgooien."
        }
      },
      {
        question: {
          en: "What does 'owning the cube' mean in backgammon?",
          es: "¿Qué significa 'poseer el cubo' en backgammon?",
          de: "Was bedeutet 'den Würfel besitzen' im Backgammon?",
          nl: "Wat betekent 'de dobbelsteen bezitten' in backgammon?"
        },
        options: [
          { en: "Having exclusive right to offer the next double", es: "Tener el derecho exclusivo de ofrecer el siguiente doble", de: "Das ausschließliche Recht haben die nächste Verdopplung anzubieten", nl: "Het exclusieve recht hebben om de volgende verdubbeling aan te bieden" },
          { en: "Holding the physical cube", es: "Sostener el cubo físico", de: "Den physischen Würfel halten", nl: "De fysieke dobbelsteen vasthouden" },
          { en: "Winning the match", es: "Ganar el match", de: "Das Match gewinnen", nl: "De wedstrijd winnen" },
          { en: "Controlling the board", es: "Controlar el tablero", de: "Das Brett kontrollieren", nl: "Het bord controleren" }
        ],
        correct: 0,
        explanation: {
          en: "Owning the cube means you control the doubling cube and have the exclusive right to offer the next double. Initially, both players can double (centered cube), but once accepted, only the acceptor owns the cube.",
          es: "Poseer el cubo significa que controlas el cubo de doblaje y tienes el derecho exclusivo de ofrecer el siguiente doble. Inicialmente, ambos jugadores pueden doblar (cubo centrado), pero una vez aceptado, solo el aceptor posee el cubo.",
          de: "Den Würfel zu besitzen bedeutet Sie kontrollieren den Dopplungswürfel und haben das ausschließliche Recht die nächste Verdopplung anzubieten. Anfangs können beide Spieler verdoppeln (zentrierter Würfel), aber nach Akzeptierung besitzt nur der Akzeptierende den Würfel.",
          nl: "De dobbelsteen bezitten betekent dat je de verdubbeldob controleert en het exclusieve recht hebt om de volgende verdubbeling aan te bieden. Aanvankelijk kunnen beide spelers verdubbelen (gecentreerde dobbelsteen), maar eenmaal geaccepteerd bezit alleen de accepteerder de dobbelsteen."
        }
      },
      {
        question: {
          en: "What is 'slotting' in backgammon?",
          es: "¿Qué es 'slotting' en backgammon?",
          de: "Was ist 'Slotten' im Backgammon?",
          nl: "Wat is 'slotten' in backgammon?"
        },
        options: [
          { en: "Intentionally placing a single checker on a key point hoping to cover it later", es: "Colocar intencionalmente una sola ficha en un punto clave esperando cubrirla después", de: "Absichtlich einen einzelnen Stein auf einen Schlüsselpunkt setzen in der Hoffnung ihn später zu decken", nl: "Opzettelijk een enkele steen plaatsen op een sleutelpunt in de hoop hem later te dekken" },
          { en: "Fitting checkers together", es: "Encajar fichas juntas", de: "Steine zusammenfügen", nl: "Stenen samenpassen" },
          { en: "Creating empty spaces", es: "Crear espacios vacíos", de: "Leere Räume schaffen", nl: "Lege ruimtes creëren" },
          { en: "Organizing checkers", es: "Organizar fichas", de: "Steine organisieren", nl: "Stenen organiseren" }
        ],
        correct: 0,
        explanation: {
          en: "Slotting is deliberately placing a single blot on a valuable point (especially the 5-point or bar-point) early in the game, accepting the risk of being hit in exchange for the chance to make that point on the next roll.",
          es: "Slotting es colocar deliberadamente un blot individual en un punto valioso (especialmente el punto 5 o punto de barra) temprano en el juego, aceptando el riesgo de ser golpeado a cambio de la oportunidad de hacer ese punto en la siguiente tirada.",
          de: "Slotten ist das absichtliche Setzen eines einzelnen Blots auf einen wertvollen Punkt (besonders der 5-Punkt oder Bar-Punkt) früh im Spiel, wobei das Risiko geschlagen zu werden akzeptiert wird im Austausch für die Chance diesen Punkt beim nächsten Wurf zu machen.",
          nl: "Slotten is opzettelijk een enkele blot plaatsen op een waardevol punt (vooral het 5-punt of bar-punt) vroeg in het spel, waarbij het risico om geraakt te worden wordt geaccepteerd in ruil voor de kans om dat punt bij de volgende worp te maken."
        }
      },
      {
        question: {
          en: "What is a 'gammon' in backgammon?",
          es: "¿Qué es un 'gammon' en backgammon?",
          de: "Was ist ein 'Gammon' im Backgammon?",
          nl: "Wat is een 'gammon' in backgammon?"
        },
        options: [
          { en: "Winning when opponent hasn't borne off any checkers", es: "Ganar cuando el oponente no ha sacado ninguna ficha", de: "Gewinnen wenn Gegner keine Steine ausgewürfelt hat", nl: "Winnen wanneer tegenstander geen stenen heeft uitgegooid" },
          { en: "Type of dice roll", es: "Tipo de tirada de dados", de: "Art von Würfelwurf", nl: "Type dobbelsteenworp" },
          { en: "Defensive position", es: "Posición defensiva", de: "Defensive Position", nl: "Defensieve positie" },
          { en: "Board section", es: "Sección del tablero", de: "Brettabschnitt", nl: "Bordsectie" }
        ],
        correct: 0,
        explanation: {
          en: "A gammon is worth double the cube value. You win a gammon by bearing off all your checkers before your opponent bears off any. It's less valuable than a backgammon but worth twice a normal win.",
          es: "Un gammon vale el doble del valor del cubo. Ganas un gammon sacando todas tus fichas antes de que tu oponente saque alguna. Es menos valioso que un backgammon pero vale el doble de una victoria normal.",
          de: "Ein Gammon ist das Doppelte des Würfelwerts wert. Sie gewinnen ein Gammon indem Sie alle Ihre Steine auswürfeln bevor Ihr Gegner welche auswürfelt. Es ist weniger wertvoll als ein Backgammon aber das Doppelte eines normalen Siegs wert.",
          nl: "Een gammon is dubbel de dobbelsteenwaarde waard. Je wint een gammon door al je stenen uit te gooien voordat je tegenstander er een uitgooit. Het is minder waardevol dan een backgammon maar dubbel een normale overwinning waard."
        }
      },
      {
        question: {
          en: "What is 'match play' versus 'money play' in backgammon?",
          es: "¿Qué es 'juego de match' versus 'juego de dinero' en backgammon?",
          de: "Was ist 'Match-Spiel' versus 'Geld-Spiel' im Backgammon?",
          nl: "Wat is 'wedstrijdspel' versus 'geldspel' in backgammon?"
        },
        options: [
          { en: "Match play is to a set number of points; money play is each game for stakes", es: "Juego de match es a un número fijo de puntos; juego de dinero es cada juego por apuestas", de: "Match-Spiel ist bis zu einer festgelegten Punktzahl; Geld-Spiel ist jedes Spiel um Einsätze", nl: "Wedstrijdspel is tot een vast aantal punten; geldspel is elk spel voor inzet" },
          { en: "Match play is free; money play costs", es: "Juego de match es gratis; juego de dinero cuesta", de: "Match-Spiel ist kostenlos; Geld-Spiel kostet", nl: "Wedstrijdspel is gratis; geldspel kost" },
          { en: "Professional versus amateur", es: "Profesional versus amateur", de: "Professionell versus Amateur", nl: "Professioneel versus amateur" },
          { en: "Tournament versus casual", es: "Torneo versus casual", de: "Turnier versus Gelegenheit", nl: "Toernooi versus informeel" }
        ],
        correct: 0,
        explanation: {
          en: "Match play is to a predetermined number of points (e.g., first to 7 wins). Money play treats each game independently with stakes per point. The strategies differ significantly - match equity matters in match play but not money play.",
          es: "El juego de match es a un número predeterminado de puntos (ej., primero a 7 gana). El juego de dinero trata cada juego independientemente con apuestas por punto. Las estrategias difieren significativamente - match equity importa en juego de match pero no en juego de dinero.",
          de: "Match-Spiel ist bis zu einer vorbestimmten Punktzahl (z.B. erster zu 7 gewinnt). Geld-Spiel behandelt jedes Spiel unabhängig mit Einsätzen pro Punkt. Die Strategien unterscheiden sich erheblich - Match-Equity ist wichtig im Match-Spiel aber nicht im Geld-Spiel.",
          nl: "Wedstrijdspel is tot een vooraf bepaald aantal punten (bijv. eerste tot 7 wint). Geldspel behandelt elk spel onafhankelijk met inzet per punt. De strategieën verschillen aanzienlijk - wedstrijd equity is belangrijk in wedstrijdspel maar niet in geldspel."
        }
      },
      {
        question: {
          en: "What does 'escaping' mean in backgammon?",
          es: "¿Qué significa 'escapar' en backgammon?",
          de: "Was bedeutet 'Entkommen' im Backgammon?",
          nl: "Wat betekent 'ontsnappen' in backgammon?"
        },
        options: [
          { en: "Moving back checkers out of opponent's home board", es: "Mover fichas traseras fuera del tablero de casa del oponente", de: "Hintere Steine aus dem Home Board des Gegners bewegen", nl: "Achterste stenen uit het thuisbord van tegenstander bewegen" },
          { en: "Avoiding being hit", es: "Evitar ser golpeado", de: "Vermeiden geschlagen zu werden", nl: "Vermijden geraakt te worden" },
          { en: "Leaving the game", es: "Salir del juego", de: "Das Spiel verlassen", nl: "Het spel verlaten" },
          { en: "Quick bearing off", es: "Sacar rápido", de: "Schnelles Auswürfeln", nl: "Snel uitgooien" }
        ],
        correct: 0,
        explanation: {
          en: "Escaping means successfully moving your back checkers (those in your opponent's home board or outer board) forward past your opponent's blockade and toward your home board. The race often depends on successful escape.",
          es: "Escapar significa mover exitosamente tus fichas traseras (aquellas en el tablero de casa u exterior de tu oponente) hacia adelante pasando el bloqueo de tu oponente y hacia tu tablero de casa. La carrera a menudo depende de un escape exitoso.",
          de: "Entkommen bedeutet Ihre hinteren Steine (jene im Home Board oder äußeren Brett Ihres Gegners) erfolgreich vorwärts an der Blockade Ihres Gegners vorbei und in Richtung Ihres Home Boards zu bewegen. Das Rennen hängt oft von erfolgreichem Entkommen ab.",
          nl: "Ontsnappen betekent succesvol je achterste stenen (die in het thuisbord of buitenbord van je tegenstander) vooruit bewegen voorbij de blokkade van je tegenstander en richting je thuisbord. De race hangt vaak af van succesvolle ontsnapping."
        }
      },
      {
        question: {
          en: "What is 'splitting' in backgammon?",
          es: "¿Qué es 'dividir' en backgammon?",
          de: "Was ist 'Splitten' im Backgammon?",
          nl: "Wat is 'splitsen' in backgammon?"
        },
        options: [
          { en: "Separating your two back checkers from the opponent's 1-point", es: "Separar tus dos fichas traseras del punto 1 del oponente", de: "Ihre zwei hinteren Steine vom 1-Punkt des Gegners trennen", nl: "Je twee achterste stenen scheiden van het 1-punt van tegenstander" },
          { en: "Dividing stakes", es: "Dividir apuestas", de: "Einsätze teilen", nl: "Inzet verdelen" },
          { en: "Breaking points apart", es: "Romper puntos", de: "Punkte auseinander brechen", nl: "Punten uit elkaar breken" },
          { en: "Two-player strategy", es: "Estrategia de dos jugadores", de: "Zwei-Spieler-Strategie", nl: "Twee-speler strategie" }
        ],
        correct: 0,
        explanation: {
          en: "Splitting is moving one of your two back checkers (usually starting on your opponent's 1-point/your 24-point) forward, often to make an anchor on a better point like the opponent's 4 or 5-point, though it creates temporary blots.",
          es: "Dividir es mover una de tus dos fichas traseras (usualmente comenzando en el punto 1 de tu oponente/tu punto 24) hacia adelante, a menudo para hacer un ancla en un punto mejor como el punto 4 o 5 del oponente, aunque crea blots temporales.",
          de: "Splitten ist das Bewegen eines Ihrer zwei hinteren Steine (normalerweise beginnend auf dem 1-Punkt Ihres Gegners/Ihrem 24-Punkt) vorwärts, oft um einen Anker auf einem besseren Punkt wie dem 4- oder 5-Punkt des Gegners zu machen, obwohl es temporäre Blots schafft.",
          nl: "Splitsen is het bewegen van een van je twee achterste stenen (meestal beginnend op het 1-punt van je tegenstander/je 24-punt) vooruit, vaak om een anker te maken op een beter punt zoals het 4 of 5-punt van de tegenstander, hoewel het tijdelijke blots creëert."
        }
      },
      {
        question: {
          en: "What is 'duplication' in backgammon?",
          es: "¿Qué es 'duplicación' en backgammon?",
          de: "Was ist 'Duplikation' im Backgammon?",
          nl: "Wat is 'duplicatie' in backgammon?"
        },
        options: [
          { en: "Positioning so opponent needs the same number for multiple purposes", es: "Posicionar para que el oponente necesite el mismo número para múltiples propósitos", de: "So positionieren dass Gegner dieselbe Zahl für mehrere Zwecke braucht", nl: "Zo positioneren dat tegenstander hetzelfde getal nodig heeft voor meerdere doeleinden" },
          { en: "Having two of same piece", es: "Tener dos de la misma pieza", de: "Zwei gleiche Steine haben", nl: "Twee dezelfde stukken hebben" },
          { en: "Copying opponent moves", es: "Copiar movimientos del oponente", de: "Gegnerzüge kopieren", nl: "Tegenstander zetten kopiëren" },
          { en: "Doubling the cube", es: "Doblar el cubo", de: "Den Würfel verdoppeln", nl: "De dobbelsteen verdubbelen" }
        ],
        correct: 0,
        explanation: {
          en: "Duplication is positioning your blots so your opponent needs the same dice number to hit both, or needs a number both to hit you and to cover their own blots, reducing their effective good rolls.",
          es: "La duplicación es posicionar tus blots para que tu oponente necesite el mismo número de dados para golpear ambos, o necesite un número tanto para golpearte como para cubrir sus propios blots, reduciendo sus tiradas buenas efectivas.",
          de: "Duplikation ist das Positionieren Ihrer Blots so dass Ihr Gegner dieselbe Würfelzahl braucht um beide zu schlagen, oder eine Zahl sowohl zum Schlagen als auch zum Decken ihrer eigenen Blots braucht, wodurch ihre effektiv guten Würfe reduziert werden.",
          nl: "Duplicatie is het positioneren van je blots zodat je tegenstander hetzelfde dobbelsteengetal nodig heeft om beide te raken, of een getal nodig heeft om zowel jou te raken als hun eigen blots te dekken, waardoor hun effectief goede worpen worden verminderd."
        }
      },
      {
        question: {
          en: "What is the 'Jacoby rule' in backgammon?",
          es: "¿Qué es la 'regla Jacoby' en backgammon?",
          de: "Was ist die 'Jacoby-Regel' im Backgammon?",
          nl: "Wat is de 'Jacoby regel' in backgammon?"
        },
        options: [
          { en: "Gammons and backgammons don't count unless cube has been turned", es: "Gammons y backgammons no cuentan a menos que se haya girado el cubo", de: "Gammons und Backgammons zählen nicht wenn der Würfel nicht gedreht wurde", nl: "Gammons en backgammons tellen niet tenzij dobbelsteen is gedraaid" },
          { en: "Opening move rules", es: "Reglas de movimiento de apertura", de: "Eröffnungszugregeln", nl: "Openingszet regels" },
          { en: "Bearing off restrictions", es: "Restricciones de sacar", de: "Auswürfel-Einschränkungen", nl: "Uitgooi beperkingen" },
          { en: "Tournament seating", es: "Asientos de torneo", de: "Turnier-Sitzordnung", nl: "Toernooi plaatsing" }
        ],
        correct: 0,
        explanation: {
          en: "The Jacoby rule (used in money games, never match play) states that gammons and backgammons only count for their extra value if either player has offered a double during the game. Without a double, all wins count as single games.",
          es: "La regla Jacoby (usada en juegos de dinero, nunca juego de match) establece que gammons y backgammons solo cuentan por su valor extra si algún jugador ha ofrecido un doble durante el juego. Sin un doble, todas las victorias cuentan como juegos simples.",
          de: "Die Jacoby-Regel (verwendet in Geldspielen, nie Match-Spiel) besagt dass Gammons und Backgammons nur für ihren Extrawert zählen wenn ein Spieler während des Spiels verdoppelt hat. Ohne Verdopplung zählen alle Siege als Einzelspiele.",
          nl: "De Jacoby regel (gebruikt in geldspellen, nooit wedstrijdspel) stelt dat gammons en backgammons alleen tellen voor hun extra waarde als een van beide spelers een verdubbeling heeft aangeboden tijdens het spel. Zonder verdubbeling tellen alle overwinningen als enkele spellen."
        }
      },
      {
        question: {
          en: "What is a 'joker' in backgammon?",
          es: "¿Qué es un 'joker' en backgammon?",
          de: "Was ist ein 'Joker' im Backgammon?",
          nl: "Wat is een 'joker' in backgammon?"
        },
        options: [
          { en: "An unexpectedly fortunate roll that changes the game dramatically", es: "Una tirada inesperadamente afortunada que cambia el juego drásticamente", de: "Ein unerwartet glücklicher Wurf der das Spiel dramatisch verändert", nl: "Een onverwacht gelukkige worp die het spel dramatisch verandert" },
          { en: "Wild card piece", es: "Pieza comodín", de: "Joker-Stein", nl: "Joker stuk" },
          { en: "Funny player", es: "Jugador gracioso", de: "Lustiger Spieler", nl: "Grappige speler" },
          { en: "Optional rule", es: "Regla opcional", de: "Optionale Regel", nl: "Optionele regel" }
        ],
        correct: 0,
        explanation: {
          en: "A joker is a lucky roll that dramatically changes a game's outcome against the odds - like hitting a 36-to-1 shot when otherwise losing, or rolling the only number that wins. The term reflects the swing of luck in backgammon.",
          es: "Un joker es una tirada afortunada que cambia dramáticamente el resultado de un juego contra las probabilidades - como golpear un tiro de 36 a 1 cuando de otro modo estás perdiendo, o sacar el único número que gana. El término refleja el cambio de suerte en backgammon.",
          de: "Ein Joker ist ein Glückswurf der das Spielergebnis dramatisch gegen die Chancen verändert - wie das Treffen eines 36-zu-1-Schusses wenn man sonst verliert, oder das Würfeln der einzigen Zahl die gewinnt. Der Begriff spiegelt den Glücksschwung im Backgammon wider.",
          nl: "Een joker is een gelukkige worp die de uitkomst van een spel dramatisch verandert tegen de kansen in - zoals het raken van een 36-op-1 shot terwijl je anders aan het verliezen bent, of het gooien van het enige getal dat wint. De term weerspiegelt de geluksschommeling in backgammon."
        }
      },
      {
        question: {
          en: "What does 'bearing in' mean in backgammon?",
          es: "¿Qué significa 'llevar dentro' en backgammon?",
          de: "Was bedeutet 'Einbringen' im Backgammon?",
          nl: "Wat betekent 'binnenbrengen' in backgammon?"
        },
        options: [
          { en: "Moving all your checkers into your home board before bearing off", es: "Mover todas tus fichas a tu tablero de casa antes de sacar", de: "Alle Ihre Steine in Ihr Home Board bewegen bevor Sie auswürfeln", nl: "Al je stenen naar je thuisbord bewegen voordat je uitgooit" },
          { en: "Entering from the bar", es: "Entrar desde la barra", de: "Von der Bar eintreten", nl: "Binnenkomen van de bar" },
          { en: "Starting the game", es: "Comenzar el juego", de: "Das Spiel beginnen", nl: "Het spel starten" },
          { en: "Collecting checkers", es: "Recoger fichas", de: "Steine sammeln", nl: "Stenen verzamelen" }
        ],
        correct: 0,
        explanation: {
          en: "Bearing in is the phase where you move all 15 checkers into your home board (the six points closest to bearing off). You cannot begin bearing off until all checkers are in your home board.",
          es: "Llevar dentro es la fase donde mueves las 15 fichas a tu tablero de casa (los seis puntos más cercanos a sacar). No puedes comenzar a sacar hasta que todas las fichas estén en tu tablero de casa.",
          de: "Einbringen ist die Phase in der Sie alle 15 Steine in Ihr Home Board bewegen (die sechs Punkte am nächsten zum Auswürfeln). Sie können nicht mit dem Auswürfeln beginnen bis alle Steine in Ihrem Home Board sind.",
          nl: "Binnenbrengen is de fase waarin je alle 15 stenen naar je thuisbord beweegt (de zes punten het dichtst bij uitgooien). Je kunt niet beginnen met uitgooien totdat alle stenen in je thuisbord zijn."
        }
      },
      {
        question: {
          en: "What is 'tempo' in backgammon strategy?",
          es: "¿Qué es 'tempo' en estrategia de backgammon?",
          de: "Was ist 'Tempo' in der Backgammon-Strategie?",
          nl: "Wat is 'tempo' in backgammon strategie?"
        },
        options: [
          { en: "The urgency to move checkers forward versus maintain position", es: "La urgencia de mover fichas hacia adelante versus mantener posición", de: "Die Dringlichkeit Steine vorwärts zu bewegen versus Position zu halten", nl: "De urgentie om stenen vooruit te bewegen versus positie behouden" },
          { en: "Speed of play", es: "Velocidad de juego", de: "Spielgeschwindigkeit", nl: "Spelsnelheid" },
          { en: "Turn order", es: "Orden de turno", de: "Zugreihenfolge", nl: "Beurtvolgorde" },
          { en: "Music rhythm", es: "Ritmo musical", de: "Musikrhythmus", nl: "Muziekritme" }
        ],
        correct: 0,
        explanation: {
          en: "Tempo refers to the pace of the game - whether you need to rush forward aggressively or can afford to wait and maintain your structure. Good timing gives you tempo control, bad timing forces rushed moves.",
          es: "Tempo se refiere al ritmo del juego - si necesitas avanzar agresivamente o puedes permitirte esperar y mantener tu estructura. Buen timing te da control de tempo, mal timing obliga a movimientos apresurados.",
          de: "Tempo bezieht sich auf das Tempo des Spiels - ob Sie aggressiv vorwärts eilen müssen oder es sich leisten können zu warten und Ihre Struktur zu bewahren. Gutes Timing gibt Ihnen Tempokontrolle, schlechtes Timing erzwingt überstürzte Züge.",
          nl: "Tempo verwijst naar het tempo van het spel - of je agressief vooruit moet haasten of het je kunt veroorloven te wachten en je structuur te behouden. Goede timing geeft je tempo controle, slechte timing dwingt gehaaste zetten."
        }
      },
      {
        question: {
          en: "What is a 'reference position' in backgammon?",
          es: "¿Qué es una 'posición de referencia' en backgammon?",
          de: "Was ist eine 'Referenzposition' im Backgammon?",
          nl: "Wat is een 'referentiepositie' in backgammon?"
        },
        options: [
          { en: "A standard position used to evaluate cube decisions and strategy", es: "Una posición estándar usada para evaluar decisiones de cubo y estrategia", de: "Eine Standardposition zur Bewertung von Würfelentscheidungen und Strategie", nl: "Een standaardpositie gebruikt om dobbelsteenbeslissingen en strategie te evalueren" },
          { en: "Starting setup", es: "Configuración inicial", de: "Anfangsaufstellung", nl: "Startopstelling" },
          { en: "Endgame position", es: "Posición de final de juego", de: "Endspielposition", nl: "Eindspelpositie" },
          { en: "Checkpoint in game", es: "Punto de control en juego", de: "Kontrollpunkt im Spiel", nl: "Controlepunt in spel" }
        ],
        correct: 0,
        explanation: {
          en: "A reference position is a well-studied, standard position that serves as a benchmark for cube decisions. Players compare their current position to known reference positions to guide doubling and take/pass decisions.",
          es: "Una posición de referencia es una posición estándar bien estudiada que sirve como punto de referencia para decisiones de cubo. Los jugadores comparan su posición actual con posiciones de referencia conocidas para guiar decisiones de doblar y aceptar/pasar.",
          de: "Eine Referenzposition ist eine gut studierte Standardposition die als Maßstab für Würfelentscheidungen dient. Spieler vergleichen ihre aktuelle Position mit bekannten Referenzpositionen um Verdopplungs- und Nehmen/Passen-Entscheidungen zu leiten.",
          nl: "Een referentiepositie is een goed bestudeerde standaardpositie die dient als benchmark voor dobbelsteenbeslissingen. Spelers vergelijken hun huidige positie met bekende referentieposities om verdubbel- en nemen/passen-beslissingen te leiden."
        }
      },
      {
        question: {
          en: "What is 'recirculation' in backgammon?",
          es: "¿Qué es 'recirculación' en backgammon?",
          de: "Was ist 'Rezirkulation' im Backgammon?",
          nl: "Wat is 'hercirculatie' in backgammon?"
        },
        options: [
          { en: "When hit checkers re-enter and get hit again before escaping", es: "Cuando fichas golpeadas vuelven a entrar y son golpeadas de nuevo antes de escapar", de: "Wenn geschlagene Steine wieder eintreten und erneut geschlagen werden bevor sie entkommen", nl: "Wanneer gerakte stenen opnieuw binnenkomen en opnieuw geraakt worden voordat ze ontsnappen" },
          { en: "Rotating pieces", es: "Rotar piezas", de: "Steine rotieren", nl: "Stukken roteren" },
          { en: "Reusing strategy", es: "Reusar estrategia", de: "Strategie wiederverwenden", nl: "Strategie hergebruiken" },
          { en: "Multiple games", es: "Múltiples juegos", de: "Mehrere Spiele", nl: "Meerdere spellen" }
        ],
        correct: 0,
        explanation: {
          en: "Recirculation occurs in blitz or attacking positions where your opponent's checkers are hit, enter from the bar, but get hit again before they can escape, cycling through the bar multiple times and increasing gammon chances.",
          es: "La recirculación ocurre en posiciones de blitz o ataque donde las fichas de tu oponente son golpeadas, entran desde la barra, pero son golpeadas de nuevo antes de poder escapar, ciclando por la barra múltiples veces y aumentando las posibilidades de gammon.",
          de: "Rezirkulation tritt in Blitz- oder Angriffspositionen auf wo Steine des Gegners geschlagen werden, von der Bar eintreten, aber erneut geschlagen werden bevor sie entkommen können, mehrfach durch die Bar zyklieren und Gammon-Chancen erhöhen.",
          nl: "Hercirculatie vindt plaats in blitz of aanvalposities waar stenen van je tegenstander worden geraakt, binnenkomen van de bar, maar opnieuw geraakt worden voordat ze kunnen ontsnappen, meerdere keren door de bar cycleren en gammon kansen verhogen."
        }
      },
      {
        question: {
          en: "What is 'volatility' in backgammon positions?",
          es: "¿Qué es 'volatilidad' en posiciones de backgammon?",
          de: "Was ist 'Volatilität' in Backgammon-Positionen?",
          nl: "Wat is 'volatiliteit' in backgammon posities?"
        },
        options: [
          { en: "How much the position can change with a single roll", es: "Cuánto puede cambiar la posición con una sola tirada", de: "Wie stark sich die Position mit einem einzelnen Wurf ändern kann", nl: "Hoeveel de positie kan veranderen met een enkele worp" },
          { en: "Player mood swings", es: "Cambios de humor del jugador", de: "Spieler-Stimmungsschwankungen", nl: "Speler stemmingswisselingen" },
          { en: "Unstable board", es: "Tablero inestable", de: "Instabiles Brett", nl: "Instabiel bord" },
          { en: "Cube value changes", es: "Cambios de valor del cubo", de: "Würfelwert-Änderungen", nl: "Dobbelsteenwaarde veranderingen" }
        ],
        correct: 0,
        explanation: {
          en: "Volatility measures how dramatically a position can swing with one roll. High-contact positions with many blots are volatile; pure racing positions are less volatile. Volatility affects cube decisions - more volatile positions favor waiting.",
          es: "La volatilidad mide cuán dramáticamente una posición puede cambiar con una tirada. Posiciones de alto contacto con muchos blots son volátiles; posiciones de carrera pura son menos volátiles. La volatilidad afecta decisiones de cubo - posiciones más volátiles favorecen esperar.",
          de: "Volatilität misst wie dramatisch sich eine Position mit einem Wurf ändern kann. Hochkontakt-Positionen mit vielen Blots sind volatil; reine Rennpositionen sind weniger volatil. Volatilität beeinflusst Würfelentscheidungen - volatilere Positionen begünstigen Warten.",
          nl: "Volatiliteit meet hoe dramatisch een positie kan veranderen met één worp. Hoog-contact posities met veel blots zijn volatiel; pure race posities zijn minder volatiel. Volatiliteit beïnvloedt dobbelsteenbeslissingen - meer volatiele posities geven voorkeur aan wachten."
        }
      },
      {
        question: {
          en: "What is a 'holding game' in backgammon?",
          es: "¿Qué es un 'juego de retención' en backgammon?",
          de: "Was ist ein 'Haltespiel' im Backgammon?",
          nl: "Wat is een 'vasthoudspel' in backgammon?"
        },
        options: [
          { en: "Maintaining a single anchor in opponent's board while racing with other checkers", es: "Mantener un ancla individual en el tablero del oponente mientras corres con otras fichas", de: "Einen einzelnen Anker im Brett des Gegners halten während mit anderen Steinen gerannt wird", nl: "Een enkel anker behouden in het bord van tegenstander terwijl je racet met andere stenen" },
          { en: "Defensive play only", es: "Solo juego defensivo", de: "Nur defensives Spiel", nl: "Alleen defensief spel" },
          { en: "Waiting for doubles", es: "Esperar dobles", de: "Auf Pasch warten", nl: "Wachten op dubbel" },
          { en: "Keeping all points made", es: "Mantener todos los puntos hechos", de: "Alle gemachten Punkte behalten", nl: "Alle gemaakte punten behouden" }
        ],
        correct: 0,
        explanation: {
          en: "A holding game involves keeping one strong anchor (often the 4 or 5-point) in your opponent's board while racing with your other checkers, hoping to get a late shot if your opponent leaves a blot while bearing in or off.",
          es: "Un juego de retención implica mantener un ancla fuerte (a menudo el punto 4 o 5) en el tablero de tu oponente mientras corres con tus otras fichas, esperando obtener un tiro tardío si tu oponente deja un blot mientras lleva o saca.",
          de: "Ein Haltespiel beinhaltet einen starken Anker (oft der 4- oder 5-Punkt) im Brett des Gegners zu behalten während mit Ihren anderen Steinen gerannt wird, in der Hoffnung auf einen späten Schuss wenn Ihr Gegner einen Blot beim Einbringen oder Auswürfeln hinterlässt.",
          nl: "Een vasthoudspel houdt in dat je één sterk anker (vaak het 4 of 5-punt) houdt in het bord van je tegenstander terwijl je racet met je andere stenen, hopend op een late shot als je tegenstander een blot achterlaat tijdens binnenbrengen of uitgooien."
        }
      },
      {
        question: {
          en: "What does 'crunch' mean in backgammon?",
          es: "¿Qué significa 'crunch' en backgammon?",
          de: "Was bedeutet 'Crunch' im Backgammon?",
          nl: "Wat betekent 'crunch' in backgammon?"
        },
        options: [
          { en: "Being forced to break important points due to lack of spare checkers", es: "Verse obligado a romper puntos importantes por falta de fichas extras", de: "Gezwungen sein wichtige Punkte zu brechen wegen fehlender zusätzlicher Steine", nl: "Gedwongen worden belangrijke punten te breken door gebrek aan reserve stenen" },
          { en: "Critical game moment", es: "Momento crítico del juego", de: "Kritischer Spielmoment", nl: "Kritiek spelmoment" },
          { en: "Loud dice roll", es: "Tirada de dados ruidosa", de: "Lauter Würfelwurf", nl: "Luide dobbelsteenworp" },
          { en: "Checker collision", es: "Colisión de fichas", de: "Steinkollision", nl: "Steen botsing" }
        ],
        correct: 0,
        explanation: {
          en: "The crunch is when you run out of timing and must break valuable points (often your anchor or key defensive points) because you have no spare checkers left to move. This usually signals a losing position becoming critical.",
          es: "El crunch es cuando te quedas sin timing y debes romper puntos valiosos (a menudo tu ancla o puntos defensivos clave) porque no te quedan fichas extras para mover. Esto usualmente señala que una posición perdedora se vuelve crítica.",
          de: "Der Crunch ist wenn Ihnen das Timing ausgeht und Sie wertvolle Punkte (oft Ihren Anker oder wichtige Verteidigungspunkte) brechen müssen weil Sie keine zusätzlichen Steine mehr zum Bewegen haben. Dies signalisiert normalerweise dass eine verlierende Position kritisch wird.",
          nl: "De crunch is wanneer je geen timing meer hebt en waardevolle punten moet breken (vaak je anker of belangrijke defensieve punten) omdat je geen reserve stenen meer hebt om te verplaatsen. Dit geeft meestal aan dat een verliezende positie kritiek wordt."
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
