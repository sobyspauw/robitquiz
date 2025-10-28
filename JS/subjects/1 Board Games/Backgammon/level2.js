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
          en: "What is the 'doubling cube' used for in backgammon?",
          es: "¿Para qué se utiliza el 'cubo de doblaje' en el backgammon?",
          de: "Wofür wird der 'Dopplungswürfel' beim Backgammon verwendet?",
          nl: "Waarvoor wordt de 'verdubbeldob' bij backgammon gebruikt?"
        },
        options: [
          { en: "Multiply game stakes", es: "Para multiplicar las apuestas del juego", de: "Um die Einsätze des Spiels zu multiplizieren", nl: "Om de inzet van het spel te vermenigvuldigen" },
          { en: "Count games played", es: "Para contar el número de juegos jugados", de: "Um die Anzahl der gespielten Spiele zu zählen", nl: "Om het aantal gespeelde spellen te tellen" },
          { en: "Replace missing die", es: "Para reemplazar un dado perdido", de: "Um einen fehlenden Würfel zu ersetzen", nl: "Om een ontbrekende dobbelsteen te vervangen" },
          { en: "Determine first player", es: "Para determinar quién va primero", de: "Um zu bestimmen, wer zuerst geht", nl: "Om te bepalen wie eerst gaat" }
        ],
        correct: 0,
        explanation: {
          en: "The doubling cube is used to raise the stakes during a game. A player may offer to double the stakes before rolling, and the opponent must either accept or forfeit the game.",
          es: "El cubo de doblaje se utiliza para aumentar las apuestas durante un juego. Un jugador puede ofrecer duplicar las apuestas antes de tirar, y el oponente debe aceptar o abandonar el juego.",
          de: "Der Dopplungswürfel wird verwendet, um die Einsätze während eines Spiels zu erhöhen. Ein Spieler kann vor dem Würfeln anbieten, die Einsätze zu verdoppeln, und der Gegner muss entweder akzeptieren oder das Spiel aufgeben.",
          nl: "De verdubbeldob wordt gebruikt om de inzet tijdens een spel te verhogen. Een speler kan aanbieden de inzet te verdubbelen voordat hij gooit, en de tegenstander moet accepteren of het spel verbeuren."
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
          { en: "Single checker on point", es: "Una sola ficha en un punto", de: "Ein einzelner Stein auf einem Punkt", nl: "Een enkele steen op een punt" },
          { en: "2+ checkers on point", es: "Dos o más fichas en un punto", de: "Zwei oder mehr Steine auf einem Punkt", nl: "Twee of meer stenen op een punt" },
          { en: "Blocked point", es: "Un punto bloqueado", de: "Ein blockierter Punkt", nl: "Een geblokkeerd punt" },
          { en: "Checker on bar", es: "Una ficha en la barra", de: "Ein Stein auf der Bar", nl: "Een steen op de bar" }
        ],
        correct: 0,
        explanation: {
          en: "A blot is a single checker sitting alone on a point. It is vulnerable to being hit by an opponent's checker and sent to the bar.",
          es: "Un blot es una sola ficha que se encuentra sola en un punto. Es vulnerable a ser golpeada por una ficha del oponente y enviada a la barra.",
          de: "Ein Blot ist ein einzelner Stein, der allein auf einem Punkt steht. Er ist anfällig dafür, von einem gegnerischen Stein getroffen und auf die Bar geschickt zu werden.",
          nl: "Een blot is een enkele steen die alleen op een punt staat. Hij is kwetsbaar om geraakt te worden door een steen van de tegenstander en naar de bar gestuurd te worden."
        }
      },
      {
        question: {
          en: "What is the 'bar' in backgammon?",
          es: "¿Qué es la 'barra' en backgammon?",
          de: "Was ist die 'Bar' beim Backgammon?",
          nl: "Wat is de 'bar' bij backgammon?"
        },
        options: [
          { en: "Dividing strip in middle", es: "La tira divisoria en el medio del tablero", de: "Der Trennstreifen in der Mitte des Bretts", nl: "De verdelende strip in het midden van het bord" },
          { en: "Starting position", es: "La posición inicial de las fichas", de: "Die Startposition für Steine", nl: "De startpositie voor stenen" },
          { en: "Winning position", es: "La posición ganadora", de: "Die Gewinnposition", nl: "De winnende positie" },
          { en: "Doubling cube position", es: "La posición del cubo de doblaje", de: "Die Position des Dopplungswürfels", nl: "De positie van de verdubbeldob" }
        ],
        correct: 0,
        explanation: {
          en: "The bar is the raised ridge in the middle of the board that divides the inner and outer boards. When a checker is hit, it is placed on the bar and must re-enter the opponent's home board.",
          es: "La barra es la cresta elevada en el medio del tablero que divide los tableros interior y exterior. Cuando una ficha es golpeada, se coloca en la barra y debe volver a entrar en el tablero interior del oponente.",
          de: "Die Bar ist der erhöhte Grat in der Mitte des Bretts, der das innere und äußere Brett trennt. Wenn ein Stein getroffen wird, wird er auf die Bar gelegt und muss in das Home-Board des Gegners zurückkehren.",
          nl: "De bar is de verhoogde rand in het midden van het bord die de binnen- en buitenborden scheidt. Wanneer een steen wordt geraakt, wordt deze op de bar geplaatst en moet hij opnieuw het thuisbord van de tegenstander binnenkomen."
        }
      },
      {
        question: {
          en: "How many checkers does each player start with?",
          es: "¿Con cuántas fichas comienza cada jugador?",
          de: "Mit wie vielen Steinen beginnt jeder Spieler?",
          nl: "Met hoeveel stenen begint elke speler?"
        },
        options: [
          { en: "12", es: "12", de: "12", nl: "12" },
          { en: "15", es: "15", de: "15", nl: "15" },
          { en: "18", es: "18", de: "18", nl: "18" },
          { en: "20", es: "20", de: "20", nl: "20" }
        ],
        correct: 1,
        explanation: {
          en: "Each player starts with 15 checkers in backgammon. These are set up in a specific starting position at the beginning of the game.",
          es: "Cada jugador comienza con 15 fichas en backgammon. Estas se colocan en una posición inicial específica al comienzo del juego.",
          de: "Jeder Spieler beginnt mit 15 Steinen beim Backgammon. Diese werden zu Beginn des Spiels in einer bestimmten Startposition aufgestellt.",
          nl: "Elke speler begint met 15 stenen bij backgammon. Deze worden aan het begin van het spel in een specifieke startpositie geplaatst."
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
          { en: "Remove checkers after reaching home", es: "Eliminar fichas del tablero una vez que llegan al tablero interior", de: "Steine vom Brett entfernen, sobald sie das Home-Board erreichen", nl: "Stenen van het bord verwijderen zodra ze het thuisbord bereiken" },
          { en: "Move checkers to bar", es: "Mover fichas a la barra", de: "Steine zur Bar bewegen", nl: "Stenen naar de bar verplaatsen" },
          { en: "Block opponent checkers", es: "Bloquear las fichas del oponente", de: "Gegnerische Steine blockieren", nl: "Stenen van de tegenstander blokkeren" },
          { en: "Start game", es: "Comenzar el juego", de: "Das Spiel beginnen", nl: "Het spel beginnen" }
        ],
        correct: 0,
        explanation: {
          en: "Bearing off is the final phase of the game where players remove their checkers from the board after all of them are in the home board. The first player to bear off all checkers wins.",
          es: "Sacar es la fase final del juego donde los jugadores eliminan sus fichas del tablero después de que todas estén en el tablero interior. El primer jugador que saca todas las fichas gana.",
          de: "Auswürfeln ist die Endphase des Spiels, in der Spieler ihre Steine vom Brett entfernen, nachdem alle im Home-Board sind. Der erste Spieler, der alle Steine auswürfelt, gewinnt.",
          nl: "Uitbrengen is de laatste fase van het spel waarbij spelers hun stenen van het bord verwijderen nadat ze allemaal in het thuisbord zijn. De eerste speler die alle stenen uitbrengt wint."
        }
      },
      {
        question: {
          en: "What is a 'prime' in backgammon?",
          es: "¿Qué es un 'prime' en backgammon?",
          de: "Was ist ein 'Prime' beim Backgammon?",
          nl: "Wat is een 'prime' bij backgammon?"
        },
        options: [
          { en: "Six consecutive blocked pts", es: "Seis puntos bloqueados consecutivos", de: "Sechs aufeinanderfolgende blockierte Punkte", nl: "Zes opeenvolgende geblokkeerde punten" },
          { en: "First move", es: "El primer movimiento del juego", de: "Der erste Zug des Spiels", nl: "De eerste zet van het spel" },
          { en: "Winning position", es: "Una posición ganadora", de: "Eine Gewinnposition", nl: "Een winnende positie" },
          { en: "Single checker on bar", es: "Una sola ficha en la barra", de: "Ein einzelner Stein auf der Bar", nl: "Een enkele steen op de bar" }
        ],
        correct: 0,
        explanation: {
          en: "A prime is six consecutive points occupied by two or more of a player's checkers, creating an impenetrable blockade that opponent checkers cannot pass.",
          es: "Un prime es seis puntos consecutivos ocupados por dos o más fichas de un jugador, creando un bloqueo impenetrable que las fichas del oponente no pueden pasar.",
          de: "Ein Prime sind sechs aufeinanderfolgende Punkte, die von zwei oder mehr Steinen eines Spielers besetzt sind und eine undurchdringliche Blockade bilden, die gegnerische Steine nicht passieren können.",
          nl: "Een prime is zes opeenvolgende punten bezet door twee of meer stenen van een speler, wat een ondoordringbare blokkade vormt die stenen van de tegenstander niet kunnen passeren."
        }
      },
      {
        question: {
          en: "How many points are on a backgammon board?",
          es: "¿Cuántos puntos hay en un tablero de backgammon?",
          de: "Wie viele Punkte gibt es auf einem Backgammon-Brett?",
          nl: "Hoeveel punten zijn er op een backgammon bord?"
        },
        options: [
          { en: "20", es: "20", de: "20", nl: "20" },
          { en: "22", es: "22", de: "22", nl: "22" },
          { en: "24", es: "24", de: "24", nl: "24" },
          { en: "26", es: "26", de: "26", nl: "26" }
        ],
        correct: 2,
        explanation: {
          en: "A backgammon board has 24 points, numbered 1-24. Each player moves their checkers along these points in opposite directions.",
          es: "Un tablero de backgammon tiene 24 puntos, numerados del 1 al 24. Cada jugador mueve sus fichas a lo largo de estos puntos en direcciones opuestas.",
          de: "Ein Backgammon-Brett hat 24 Punkte, nummeriert von 1-24. Jeder Spieler bewegt seine Steine entlang dieser Punkte in entgegengesetzte Richtungen.",
          nl: "Een backgammon bord heeft 24 punten, genummerd 1-24. Elke speler verplaatst zijn stenen langs deze punten in tegengestelde richtingen."
        }
      },
      {
        question: {
          en: "What happens when you roll doubles in backgammon?",
          es: "¿Qué sucede cuando sacas dobles en backgammon?",
          de: "Was passiert, wenn man beim Backgammon einen Pasch würfelt?",
          nl: "Wat gebeurt er als je dubbel gooit bij backgammon?"
        },
        options: [
          { en: "Move 2x shown #", es: "Mueves el doble del número mostrado", de: "Du bewegst die doppelte angezeigte Anzahl", nl: "Je verplaatst twee keer het getoonde getal" },
          { en: "Play # 4x", es: "Juegas el número cuatro veces", de: "Du spielst die Zahl viermal", nl: "Je speelt het getal vier keer" },
          { en: "Lose turn", es: "Pierdes tu turno", de: "Du verlierst deinen Zug", nl: "Je verliest je beurt" },
          { en: "Roll again", es: "Debes tirar de nuevo", de: "Du musst erneut würfeln", nl: "Je moet opnieuw gooien" }
        ],
        correct: 1,
        explanation: {
          en: "When you roll doubles, you play that number four times instead of twice. For example, rolling double 3s means you can move checkers a total of 12 points (3+3+3+3).",
          es: "Cuando sacas dobles, juegas ese número cuatro veces en lugar de dos. Por ejemplo, sacar dobles 3 significa que puedes mover fichas un total de 12 puntos (3+3+3+3).",
          de: "Wenn man einen Pasch würfelt, spielt man diese Zahl viermal statt zweimal. Zum Beispiel bedeutet ein Pasch 3, dass man Steine insgesamt 12 Punkte bewegen kann (3+3+3+3).",
          nl: "Als je dubbel gooit, speel je dat getal vier keer in plaats van twee keer. Bijvoorbeeld, dubbel 3 gooien betekent dat je stenen in totaal 12 punten kunt verplaatsen (3+3+3+3)."
        }
      },
      {
        question: {
          en: "What is a 'gammon' in backgammon?",
          es: "¿Qué es un 'gammon' en backgammon?",
          de: "Was ist ein 'Gammon' beim Backgammon?",
          nl: "Wat is een 'gammon' bij backgammon?"
        },
        options: [
          { en: "Win before opponent bears off any", es: "Cuando ganas antes de que el oponente saque cualquier ficha", de: "Wenn du gewinnst, bevor der Gegner Steine auswürfelt", nl: "Wanneer je wint voordat de tegenstander stenen uitbrengt" },
          { en: "Tie game", es: "Un juego empatado", de: "Ein Unentschieden", nl: "Een gelijkspel" },
          { en: "Roll double sixes", es: "Sacar dobles seises", de: "Einen Pasch 6 würfeln", nl: "Dubbel zes gooien" },
          { en: "Block all opponent checkers", es: "Bloquear todas las fichas del oponente", de: "Alle gegnerischen Steine blockieren", nl: "Alle stenen van de tegenstander blokkeren" }
        ],
        correct: 0,
        explanation: {
          en: "A gammon is when you win the game before your opponent has borne off any checkers. This doubles the stakes of the game.",
          es: "Un gammon es cuando ganas el juego antes de que tu oponente haya sacado cualquier ficha. Esto duplica las apuestas del juego.",
          de: "Ein Gammon ist, wenn du das Spiel gewinnst, bevor dein Gegner Steine ausgewürfelt hat. Dies verdoppelt die Einsätze des Spiels.",
          nl: "Een gammon is wanneer je het spel wint voordat je tegenstander stenen heeft uitgebracht. Dit verdubbelt de inzet van het spel."
        }
      },
      {
        question: {
          en: "What is a 'backgammon' win?",
          es: "¿Qué es una victoria 'backgammon'?",
          de: "Was ist ein 'Backgammon'-Sieg?",
          nl: "Wat is een 'backgammon' overwinning?"
        },
        options: [
          { en: "Opponent has checkers in your home or on bar", es: "Ganar cuando el oponente tiene fichas en tu tablero interior o en la barra", de: "Gewinnen, wenn der Gegner Steine in deinem Home-Board oder auf der Bar hat", nl: "Winnen wanneer de tegenstander stenen in je thuisbord of op de bar heeft" },
          { en: "Regular win", es: "Cualquier victoria regular", de: "Jeder reguläre Sieg", nl: "Elke reguliere overwinning" },
          { en: "Win by doubling", es: "Ganar doblando", de: "Durch Verdoppeln gewinnen", nl: "Winnen door te verdubbelen" },
          { en: "Win all games in match", es: "Ganar todos los juegos en un partido", de: "Alle Spiele in einem Match gewinnen", nl: "Alle spellen in een wedstrijd winnen" }
        ],
        correct: 0,
        explanation: {
          en: "A backgammon win is the most valuable, occurring when you bear off all your checkers while your opponent still has one or more checkers in your home board or on the bar. This triples the stakes.",
          es: "Una victoria backgammon es la más valiosa, ocurre cuando sacas todas tus fichas mientras tu oponente todavía tiene una o más fichas en tu tablero interior o en la barra. Esto triplica las apuestas.",
          de: "Ein Backgammon-Sieg ist der wertvollste und tritt auf, wenn du alle deine Steine auswürfelst, während dein Gegner noch einen oder mehrere Steine in deinem Home-Board oder auf der Bar hat. Dies verdreifacht die Einsätze.",
          nl: "Een backgammon overwinning is de meest waardevolle, en vindt plaats wanneer je al je stenen uitbrengt terwijl je tegenstander nog een of meer stenen in je thuisbord of op de bar heeft. Dit verdrievoudigt de inzet."
        }
      },
      {
        question: {
          en: "What is an 'anchor' in backgammon?",
          es: "¿Qué es un 'ancla' en backgammon?",
          de: "Was ist ein 'Anker' beim Backgammon?",
          nl: "Wat is een 'anker' bij backgammon?"
        },
        options: [
          { en: "Point in opponent home", es: "Un punto ocupado en el tablero interior del oponente", de: "Ein besetzter Punkt im Home-Board des Gegners", nl: "Een bezet punt in het thuisbord van de tegenstander" },
          { en: "The starting position", es: "La posición inicial", de: "Die Startposition", nl: "De startpositie" },
          { en: "Blocked home point", es: "Un punto bloqueado en casa", de: "Ein blockierter Heimatpunkt", nl: "Een geblokkeerd thuispunt" },
          { en: "Bar position", es: "La posición de la barra", de: "Die Bar-Position", nl: "De bar positie" }
        ],
        correct: 0,
        explanation: {
          en: "An anchor is a point you've made (occupied with two or more checkers) in your opponent's home board. It provides a safe landing point and defensive position.",
          es: "Un ancla es un punto que has hecho (ocupado con dos o más fichas) en el tablero interior de tu oponente. Proporciona un punto de aterrizaje seguro y una posición defensiva.",
          de: "Ein Anker ist ein Punkt, den du gemacht hast (mit zwei oder mehr Steinen besetzt) im Home-Board deines Gegners. Er bietet einen sicheren Landepunkt und eine defensive Position.",
          nl: "Een anker is een punt dat je hebt gemaakt (bezet met twee of meer stenen) in het thuisbord van je tegenstander. Het biedt een veilig landingspunt en een defensieve positie."
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
          { en: "Yes, always", es: "Sí, siempre", de: "Ja, immer", nl: "Ja, altijd" },
          { en: "No, enter all checkers first", es: "No, primero debes entrar todas las fichas", de: "Nein, du musst zuerst alle Steine eingeben", nl: "Nee, je moet eerst alle stenen binnenbrengen" },
          { en: "Yes, only on doubles", es: "Sí, pero solo si sacas dobles", de: "Ja, aber nur bei einem Pasch", nl: "Ja, maar alleen als je dubbel gooit" },
          { en: "Only last turn", es: "Solo en el último turno", de: "Nur im letzten Zug", nl: "Alleen op de laatste beurt" }
        ],
        correct: 1,
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
          { en: "No cube after reaching match point", es: "Sin cubo de doblaje en el siguiente juego después de que un jugador alcance el punto de partido", de: "Kein Dopplungswürfel im nächsten Spiel, nachdem ein Spieler den Matchpunkt erreicht", nl: "Geen verdubbeldob in het volgende spel nadat een speler het matchpunt bereikt" },
          { en: "Doubles count 3x", es: "Los dobles cuentan triple", de: "Pasch zählt dreifach", nl: "Dubbel telt drievoudig" },
          { en: "Bear off in exact order", es: "Debe sacar en orden exacto", de: "Muss in exakter Reihenfolge auswürfeln", nl: "Moet in exacte volgorde uitbrengen" },
          { en: "Start player alternates", es: "El jugador inicial alterna cada juego", de: "Startspieler wechselt jedes Spiel", nl: "Startspeler wisselt elk spel" }
        ],
        correct: 0,
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
          en: "How many dice are used in backgammon?",
          es: "¿Cuántos dados se usan en backgammon?",
          de: "Wie viele Würfel werden beim Backgammon verwendet?",
          nl: "Hoeveel dobbelstenen worden gebruikt bij backgammon?"
        },
        options: [
          { en: "1", es: "1", de: "1", nl: "1" },
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "4", es: "4", de: "4", nl: "4" }
        ],
        correct: 1,
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
          { en: "Last 6 pts to bear off from", es: "Los últimos seis puntos desde donde sacas", de: "Die letzten sechs Punkte, von denen aus man auswürfelt", nl: "De laatste zes punten waar je vanaf uitbrengt" },
          { en: "The starting position", es: "La posición inicial", de: "Die Startposition", nl: "De startpositie" },
          { en: "Middle of board", es: "El medio del tablero", de: "Die Mitte des Bretts", nl: "Het midden van het bord" },
          { en: "Opponent side", es: "El lado del oponente", de: "Die Seite des Gegners", nl: "De kant van de tegenstander" }
        ],
        correct: 0,
        explanation: {
          en: "The home board is the quadrant containing points 1-6 for each player. You must move all your checkers to your home board before you can begin bearing them off.",
          es: "El tablero interior es el cuadrante que contiene los puntos 1-6 para cada jugador. Debes mover todas tus fichas a tu tablero interior antes de poder comenzar a sacarlas.",
          de: "Das Home-Board ist der Quadrant mit den Punkten 1-6 für jeden Spieler. Du musst alle deine Steine in dein Home-Board bewegen, bevor du mit dem Auswürfeln beginnen kannst.",
          nl: "Het thuisbord is het kwadrant met punten 1-6 voor elke speler. Je moet al je stenen naar je thuisbord verplaatsen voordat je ze kunt beginnen uit te brengen."
        }
      },
      {
        question: {
          en: "What is 'pip count' in backgammon?",
          es: "¿Qué es el 'conteo de pip' en backgammon?",
          de: "Was ist der 'Pip Count' beim Backgammon?",
          nl: "Wat is 'pip telling' bij backgammon?"
        },
        options: [
          { en: "Total distance to bear off", es: "Distancia total que todas las fichas deben recorrer para sacar", de: "Gesamte Distanz, die alle Steine zum Auswürfeln zurücklegen müssen", nl: "Totale afstand die alle stenen moeten afleggen om uit te brengen" },
          { en: "# checkers remaining", es: "Número de fichas restantes", de: "Anzahl verbleibender Steine", nl: "Aantal resterende stenen" },
          { en: "# points controlled", es: "Número de puntos controlados", de: "Anzahl kontrollierter Punkte", nl: "Aantal gecontroleerde punten" },
          { en: "Total dice value", es: "Valor total del lanzamiento de dados", de: "Gesamtwert des Würfelwurfs", nl: "Totale dobbelsteenwaarde" }
        ],
        correct: 0,
        explanation: {
          en: "Pip count is the total number of points all of a player's checkers must travel to be borne off. It's calculated by multiplying each checker's position by the distance to point zero.",
          es: "El conteo de pip es el número total de puntos que todas las fichas de un jugador deben recorrer para ser sacadas. Se calcula multiplicando la posición de cada ficha por la distancia al punto cero.",
          de: "Der Pip Count ist die Gesamtzahl der Punkte, die alle Steine eines Spielers zurücklegen müssen, um ausgewürfelt zu werden. Er wird berechnet, indem die Position jedes Steins mit der Entfernung zum Nullpunkt multipliziert wird.",
          nl: "Pip telling is het totale aantal punten dat alle stenen van een speler moeten afleggen om uitgebracht te worden. Het wordt berekend door de positie van elke steen te vermenigvuldigen met de afstand tot punt nul."
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
          { en: "Both same direction", es: "Ambos jugadores se mueven en la misma dirección", de: "Beide Spieler bewegen sich in dieselbe Richtung", nl: "Beide spelers bewegen in dezelfde richting" },
          { en: "Clockwise for both", es: "En sentido horario para ambos jugadores", de: "Im Uhrzeigersinn für beide Spieler", nl: "Met de klok mee voor beide spelers" },
          { en: "Opposite directions", es: "Direcciones opuestas - uno en sentido horario, uno en sentido antihorario", de: "Entgegengesetzte Richtungen - einer im Uhrzeigersinn, einer gegen den Uhrzeigersinn", nl: "Tegengestelde richtingen - één met de klok mee, één tegen de klok in" },
          { en: "Choose direction", es: "Los jugadores pueden elegir su dirección", de: "Spieler können ihre Richtung wählen", nl: "Spelers kunnen hun richting kiezen" }
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
          { en: "Roll again", es: "Debes tirar de nuevo", de: "Du musst erneut würfeln", nl: "Je moet opnieuw gooien" },
          { en: "Lose game", es: "Pierdes el juego", de: "Du verlierst das Spiel", nl: "Je verliest het spel" },
          { en: "Turn forfeited", es: "Tu turno se pierde", de: "Dein Zug verfällt", nl: "Je beurt vervalt" },
          { en: "Move opponent checkers", es: "Puedes mover las fichas del oponente", de: "Du kannst gegnerische Steine bewegen", nl: "Je kunt stenen van de tegenstander verplaatsen" }
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
          { en: "Middle English for back game", es: "Inglés medio para 'juego de vuelta'", de: "Mittelenglisch für 'Zurück-Spiel'", nl: "Middelengels voor 'terug spel'" },
          { en: "After inventor", es: "Nombrado por su inventor", de: "Benannt nach seinem Erfinder", nl: "Genoemd naar zijn uitvinder" },
          { en: "Greek term", es: "Término griego antiguo", de: "Altgriechischer Begriff", nl: "Oud-Griekse term" },
          { en: "From manufacturer", es: "Del fabricante del tablero", de: "Vom Bretthersteller", nl: "Van de bordenfabrikant" }
        ],
        correct: 0,
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
