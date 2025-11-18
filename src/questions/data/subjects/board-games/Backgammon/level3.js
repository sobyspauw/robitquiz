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
