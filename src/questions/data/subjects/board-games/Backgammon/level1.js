// Quiz Template - Level 1: Bord spelletjes - Backgammon
(function() {
  const level1 = {
    name: {
      en: "Backgammon - Beginner",
      es: "Backgammon - Principiante",
      de: "Backgammon - Anfänger",
      nl: "Backgammon - Beginner"
    },
    questions: [
      {
        question: {
          en: "How many points (triangular spaces) are there on a backgammon board?",
          es: "¿Cuántos puntos (espacios triangulares) hay en un tablero de backgammon?",
          de: "Wie viele Punkte (dreieckige Felder) gibt es auf einem Backgammon-Brett?",
          nl: "Hoeveel punten (driehoekige vakjes) zijn er op een backgammon-bord?"
        },
        options: [
          { en: "20", es: "20", de: "20", nl: "20" },
          { en: "22", es: "22", de: "22", nl: "22" },
          { en: "24", es: "24", de: "24", nl: "24" },
          { en: "26", es: "26", de: "26", nl: "26" }
        ],
        correct: 2,
        explanation: {
          en: "A backgammon board has 24 points (triangular spaces), numbered 1-24, arranged in four quadrants of 6 points each.",
          es: "Un tablero de backgammon tiene 24 puntos (espacios triangulares), numerados del 1 al 24, dispuestos en cuatro cuadrantes de 6 puntos cada uno.",
          de: "Ein Backgammon-Brett hat 24 Punkte (dreieckige Felder), nummeriert 1-24, angeordnet in vier Quadranten mit je 6 Punkten.",
          nl: "Een backgammon-bord heeft 24 punten (driehoekige vakjes), genummerd 1-24, gerangschikt in vier kwadranten van elk 6 punten."
        }
      },
      {
        question: {
          en: "How many checkers does each player start with in backgammon?",
          es: "¿Con cuántas fichas comienza cada jugador en el backgammon?",
          de: "Mit wie vielen Steinen beginnt jeder Spieler beim Backgammon?",
          nl: "Met hoeveel stenen begint elke speler bij backgammon?"
        },
        options: [
          { en: "12", es: "12", de: "12", nl: "12" },
          { en: "15", es: "15", de: "15", nl: "15" },
          { en: "18", es: "18", de: "18", nl: "18" },
          { en: "20", es: "20", de: "20", nl: "20" }
        ],
        correct: 1,
        explanation: {
          en: "Each player starts with 15 checkers in backgammon. The goal is to move all 15 checkers to your home board and then bear them off.",
          es: "Cada jugador comienza con 15 fichas en el backgammon. El objetivo es mover las 15 fichas a tu tablero de casa y luego sacarlas.",
          de: "Jeder Spieler beginnt mit 15 Steinen beim Backgammon. Das Ziel ist es, alle 15 Steine ins Heimfeld zu bringen und dann auszuwürfeln.",
          nl: "Elke speler begint met 15 stenen bij backgammon. Het doel is om alle 15 stenen naar je thuisbord te verplaatsen en ze dan uit te spelen."
        }
      },
      {
        question: {
          en: "What happens when you hit an opponent's blot (single checker) in backgammon?",
          es: "¿Qué pasa cuando golpeas un blot (ficha solitaria) del oponente en backgammon?",
          de: "Was passiert, wenn du einen gegnerischen Blot (einzelnen Stein) im Backgammon schlägst?",
          nl: "Wat gebeurt er als je een blot (enkele steen) van de tegenstander raakt bij backgammon?"
        },
        options: [
          { en: "Removed from game", es: "Eliminada del juego", de: "Aus Spiel entfernt", nl: "Uit spel verwijderd" },
          { en: "Goes to bar", es: "Va a la barra", de: "Kommt auf Bar", nl: "Gaat naar bar" },
          { en: "Returns to start", es: "Vuelve al inicio", de: "Kehrt zu Start zurück", nl: "Keert terug naar start" },
          { en: "Nothing happens", es: "No pasa nada", de: "Nichts passiert", nl: "Er gebeurt niets" }
        ],
        correct: 1,
        explanation: {
          en: "When you hit an opponent's blot (single checker), it goes to the bar (middle strip). The opponent must re-enter that checker before making any other moves.",
          es: "Cuando golpeas un blot del oponente (ficha solitaria), va a la barra (franja del medio). El oponente debe reintroducir esa ficha antes de hacer cualquier otro movimiento.",
          de: "Wenn du einen gegnerischen Blot (einzelnen Stein) schlägst, kommt er auf die Bar (Mittelstreifen). Der Gegner muss diesen Stein wieder einsetzen, bevor er andere Züge macht.",
          nl: "Wanneer je een blot van de tegenstander (enkele steen) raakt, gaat deze naar de bar (middenstrook). De tegenstander moet die steen opnieuw inzetten voordat hij andere zetten kan doen."
        }
      },
      {
        question: {
          en: "How many dice are used in a standard game of backgammon?",
          es: "¿Cuántos dados se usan en un juego estándar de backgammon?",
          de: "Wie viele Würfel werden in einem Standard-Backgammon-Spiel verwendet?",
          nl: "Hoeveel dobbelstenen worden gebruikt in een standaard backgammon-spel?"
        },
        options: [
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "1", es: "1", de: "1", nl: "1" },
          { en: "2", es: "2", de: "2", nl: "2" }
        ],
        correct: 3,
        explanation: {
          en: "Backgammon uses 2 dice. Players roll both dice and can move their checkers according to the numbers shown. If doubles are rolled, the player gets 4 moves of that number.",
          es: "El backgammon usa 2 dados. Los jugadores lanzan ambos dados y pueden mover sus fichas según los números mostrados. Si salen dobles, el jugador obtiene 4 movimientos de ese número.",
          de: "Backgammon verwendet 2 Würfel. Spieler würfeln beide Würfel und können ihre Steine entsprechend den gezeigten Zahlen bewegen. Bei einem Pasch erhält der Spieler 4 Züge dieser Zahl.",
          nl: "Backgammon gebruikt 2 dobbelstenen. Spelers gooien beide dobbelstenen en kunnen hun stenen verplaatsen volgens de getoonde nummers. Bij een dubbele worp krijgt de speler 4 zetten van dat getal."
        }
      },
      {
        question: {
          en: "What is the doubling cube used for in backgammon?",
          es: "¿Para qué se usa el cubo de doblaje en el backgammon?",
          de: "Wofür wird der Dopplerwürfel beim Backgammon verwendet?",
          nl: "Waarvoor wordt de verdubbeldobbelsteen gebruikt bij backgammon?"
        },
        options: [
          { en: "Replace lost die", es: "Reemplazar dado perdido", de: "Verlorenen Würfel ersetzen", nl: "Verloren dobbelsteen vervangen" },
          { en: "Increase stakes", es: "Aumentar apuestas", de: "Einsatz erhöhen", nl: "Inzet verhogen" },
          { en: "Determine first player", es: "Determinar primer jugador", de: "Ersten Spieler bestimmen", nl: "Eerste speler bepalen" },
          { en: "Count moves", es: "Contar movimientos", de: "Züge zählen", nl: "Zetten tellen" }
        ],
        correct: 1,
        explanation: {
          en: "The doubling cube is used to increase the stakes during the game. Players can offer to double the current stakes, and the opponent can either accept or resign.",
          es: "El cubo de doblaje se usa para aumentar las apuestas durante el juego. Los jugadores pueden ofrecer doblar las apuestas actuales, y el oponente puede aceptar o rendirse.",
          de: "Der Dopplerwürfel wird verwendet, um den Einsatz während des Spiels zu erhöhen. Spieler können anbieten, den aktuellen Einsatz zu verdoppeln, und der Gegner kann entweder akzeptieren oder aufgeben.",
          nl: "De verdubbeldobbelsteen wordt gebruikt om de inzet tijdens het spel te verhogen. Spelers kunnen aanbieden om de huidige inzet te verdubbelen, en de tegenstander kan accepteren of opgeven."
        }
      },
      {
        question: {
          en: "In which direction do players move their checkers in backgammon?",
          es: "¿En qué dirección mueven los jugadores sus fichas en el backgammon?",
          de: "In welche Richtung bewegen Spieler ihre Steine beim Backgammon?",
          nl: "In welke richting verplaatsen spelers hun stenen bij backgammon?"
        },
        options: [
          { en: "Both clockwise", es: "Ambos sentido horario", de: "Beide im Uhrzeigersinn", nl: "Beide met klok mee" },
          { en: "Both counterclockwise", es: "Ambos sentido antihorario", de: "Beide gegen Uhrzeigersinn", nl: "Beide tegen klok in" },
          { en: "Opposite directions", es: "Direcciones opuestas", de: "Entgegengesetzte Richtungen", nl: "Tegengestelde richtingen" },
          { en: "Changes each turn", es: "Cambia cada turno", de: "Ändert sich jeden Zug", nl: "Verandert elke beurt" }
        ],
        correct: 2,
        explanation: {
          en: "Players move their checkers in opposite directions around the board. This creates the racing and blocking dynamics that make backgammon strategic.",
          es: "Los jugadores mueven sus fichas en direcciones opuestas alrededor del tablero. Esto crea las dinámicas de carrera y bloqueo que hacen que el backgammon sea estratégico.",
          de: "Spieler bewegen ihre Steine in entgegengesetzte Richtungen um das Brett. Dies schafft die Renn- und Blockierungsdynamik, die Backgammon strategisch macht.",
          nl: "Spelers verplaatsen hun stenen in tegengestelde richtingen rond het bord. Dit creëert de race- en blokkeerdynamiek die backgammon strategisch maakt."
        }
      },
      {
        question: {
          en: "What is a 'prime' in backgammon?",
          es: "¿Qué es un 'prime' en el backgammon?",
          de: "Was ist ein 'Prime' beim Backgammon?",
          nl: "Wat is een 'prime' bij backgammon?"
        },
        options: [
          { en: "First move", es: "Primer movimiento", de: "Erster Zug", nl: "Eerste zet" },
          { en: "6 consecutive points", es: "6 puntos consecutivos", de: "6 aufeinanderfolgende Punkte", nl: "6 opeenvolgende punten" },
          { en: "Same # on both dice", es: "Mismo # en ambos dados", de: "Gleiche # auf beiden Würfeln", nl: "Zelfde # op beide dobbelstenen" },
          { en: "Checker to bar", es: "Ficha a barra", de: "Stein zur Bar", nl: "Steen naar bar" }
        ],
        correct: 1,
        explanation: {
          en: "A prime is six consecutive points controlled by one player. This creates an impassable barrier that opponent checkers cannot jump over.",
          es: "Un prime son seis puntos consecutivos controlados por un jugador. Esto crea una barrera impasable que las fichas del oponente no pueden saltar.",
          de: "Ein Prime sind sechs aufeinanderfolgende Punkte, die von einem Spieler kontrolliert werden. Dies schafft eine unpassierbare Barriere, über die gegnerische Steine nicht springen können.",
          nl: "Een prime is zes opeenvolgende punten gecontroleerd door één speler. Dit creëert een onpasseerbare barrière waar tegenstanders niet overheen kunnen springen."
        }
      },
      {
        question: {
          en: "When can you start bearing off checkers in backgammon?",
          es: "¿Cuándo puedes empezar a sacar fichas en el backgammon?",
          de: "Wann kann man beim Backgammon anfangen, Steine auszuwürfeln?",
          nl: "Wanneer kun je beginnen met het uitspelen van stenen bij backgammon?"
        },
        options: [
          { en: "After hitting opponent", es: "Después de golpear una ficha del oponente", de: "Nach dem Schlagen eines gegnerischen Steins", nl: "Na het raken van een steen van de tegenstander" },
          { en: "Anytime", es: "En cualquier momento durante el juego", de: "Jederzeit während des Spiels", nl: "Op elk moment tijdens het spel" },
          { en: "After 10 checkers", es: "Después de mover 10 fichas", de: "Nach dem Bewegen von 10 Steinen", nl: "Na het verplaatsen van 10 stenen" },
          { en: "All checkers in home board", es: "Cuando todas tus fichas están en tu tablero de casa", de: "Wenn alle deine Steine in deinem Heimfeld sind", nl: "Wanneer al je stenen in je thuisbord zijn" }
        ],
        correct: 3,
        explanation: {
          en: "You can only start bearing off when all 15 of your checkers are in your home board (your inner quarter of the board).",
          es: "Solo puedes empezar a sacar fichas cuando las 15 fichas están en tu tablero de casa (tu cuarto interior del tablero).",
          de: "Du kannst nur anfangen auszuwürfeln, wenn alle 15 deiner Steine in deinem Heimfeld (deinem inneren Viertel des Bretts) sind.",
          nl: "Je kunt alleen beginnen met uitspelen wanneer al je 15 stenen in je thuisbord zijn (je binnenste kwart van het bord)."
        }
      },
      {
        question: {
          en: "What is a 'backgammon' in the game scoring?",
          es: "¿Qué es un 'backgammon' en la puntuación del juego?",
          de: "Was ist ein 'Backgammon' in der Spielwertung?",
          nl: "Wat is een 'backgammon' in de spelscoring?"
        },
        options: [
          { en: "Winning by 1 point", es: "Ganar por 1 punto", de: "Mit 1 Punkt gewinnen", nl: "Winnen met 1 punt" },
          { en: "Opponent has checkers on bar or in your home", es: "Ganar mientras el oponente tiene fichas en la barra o en tu tablero de casa", de: "Gewinnen, während der Gegner Steine auf der Bar oder in deinem Heimfeld hat", nl: "Winnen terwijl de tegenstander stenen op de bar of in je thuisbord heeft" },
          { en: "By exactly 15 pts", es: "Ganar por exactamente 15 puntos", de: "Mit genau 15 Punkten gewinnen", nl: "Winnen met precies 15 punten" },
          { en: "Without doubling cube", es: "Ganar sin usar el cubo de doblaje", de: "Gewinnen ohne den Dopplerwürfel zu verwenden", nl: "Winnen zonder de verdubbeldobbelsteen te gebruiken" }
        ],
        correct: 1,
        explanation: {
          en: "A backgammon is worth 3 points and occurs when you bear off all your checkers while your opponent still has checkers on the bar or in your home board.",
          es: "Un backgammon vale 3 puntos y ocurre cuando sacas todas tus fichas mientras tu oponente aún tiene fichas en la barra o en tu tablero de casa.",
          de: "Ein Backgammon ist 3 Punkte wert und tritt auf, wenn du alle deine Steine auswürfelst, während dein Gegner noch Steine auf der Bar oder in deinem Heimfeld hat.",
          nl: "Een backgammon is 3 punten waard en vindt plaats wanneer je al je stenen uitspeelt terwijl je tegenstander nog stenen op de bar of in jouw thuisbord heeft."
        }
      },
      {
        question: {
          en: "What is the opening roll advantage rule in backgammon?",
          es: "¿Cuál es la regla de ventaja del primer lanzamiento en el backgammon?",
          de: "Was ist die Regel des Eröffnungswurf-Vorteils beim Backgammon?",
          nl: "Wat is de openingsworp voordeelregel bij backgammon?"
        },
        options: [
          { en: "Higher roll goes first, uses those dice", es: "El jugador con mayor tirada va primero y usa esos dados", de: "Der Spieler mit dem höheren Wurf geht zuerst und verwendet diese Würfel", nl: "De speler met de hogere worp gaat eerst en gebruikt die dobbelstenen" },
          { en: "Re-roll until different #s appear", es: "Ambos jugadores vuelven a tirar hasta que aparezcan números diferentes", de: "Beide Spieler würfeln erneut, bis verschiedene Zahlen erscheinen", nl: "Beide spelers gooien opnieuw tot er verschillende nummers verschijnen" },
          { en: "Lower roll goes first", es: "El jugador con menor tirada va primero", de: "Der Spieler mit dem niedrigeren Wurf geht zuerst", nl: "De speler met de lagere worp gaat eerst" },
          { en: "Alternate regardless of roll", es: "Los jugadores alternan independientemente de la tirada", de: "Spieler wechseln sich unabhängig vom Wurf ab", nl: "Spelers wisselen af ongeacht de worp" }
        ],
        correct: 0,
        explanation: {
          en: "To determine who goes first, each player rolls one die. The player with the higher number goes first and uses both dice from the opening roll to make their first move.",
          es: "Para determinar quién va primero, cada jugador tira un dado. El jugador con el número más alto va primero y usa ambos dados del lanzamiento de apertura para hacer su primer movimiento.",
          de: "Um zu bestimmen, wer zuerst geht, würfelt jeder Spieler einen Würfel. Der Spieler mit der höheren Zahl geht zuerst und verwendet beide Würfel vom Eröffnungswurf für seinen ersten Zug.",
          nl: "Om te bepalen wie eerst gaat, gooit elke speler één dobbelsteen. De speler met het hogere getal gaat eerst en gebruikt beide dobbelstenen van de openingsworp voor hun eerste zet."
        }
      },
      {
        question: {
          en: "What happens if you roll doubles in backgammon?",
          es: "¿Qué pasa si sacas dobles en el backgammon?",
          de: "Was passiert, wenn du einen Pasch beim Backgammon würfelst?",
          nl: "Wat gebeurt er als je een dubbele worp gooit bij backgammon?"
        },
        options: [
          { en: "Lose turn", es: "Pierdes tu turno", de: "Du verlierst deinen Zug", nl: "Je verliest je beurt" },
          { en: "Move 4x that #", es: "Puedes moverte cuatro veces ese número", de: "Du darfst dich viermal um diese Zahl bewegen", nl: "Je mag vier keer dat getal verplaatsen" },
          { en: "Roll again", es: "Vuelves a tirar", de: "Du würfelst erneut", nl: "Je gooit opnieuw" },
          { en: "Opponent gets extra turn", es: "Tu oponente obtiene un turno extra", de: "Dein Gegner bekommt einen zusätzlichen Zug", nl: "Je tegenstander krijgt een extra beurt" }
        ],
        correct: 1,
        explanation: {
          en: "When you roll doubles (same number on both dice), you get to make four moves of that number instead of just two. This is a significant advantage.",
          es: "Cuando sacas dobles (el mismo número en ambos dados), puedes hacer cuatro movimientos de ese número en lugar de solo dos. Esta es una ventaja significativa.",
          de: "Wenn du einen Pasch würfelst (gleiche Zahl auf beiden Würfeln), darfst du vier Züge dieser Zahl machen anstatt nur zwei. Das ist ein erheblicher Vorteil.",
          nl: "Wanneer je een dubbele worp gooit (hetzelfde getal op beide dobbelstenen), mag je vier zetten van dat getal doen in plaats van slechts twee. Dit is een aanzienlijk voordeel."
        }
      },
      {
        question: {
          en: "What is the goal of backgammon?",
          es: "¿Cuál es el objetivo del backgammon?",
          de: "Was ist das Ziel von Backgammon?",
          nl: "Wat is het doel van backgammon?"
        },
        options: [
          { en: "Capture all opponent checkers", es: "Capturar todas las fichas del oponente", de: "Alle gegnerischen Steine zu erobern", nl: "Alle stenen van de tegenstander veroveren" },
          { en: "First to bear off all checkers", es: "Ser el primero en sacar todas tus fichas", de: "Der erste zu sein, der alle seine Steine auswürfelt", nl: "De eerste zijn die al je stenen uitspeelt" },
          { en: "Block opponent movement", es: "Bloquear el movimiento de tu oponente", de: "Die Bewegung des Gegners zu blockieren", nl: "De beweging van je tegenstander blokkeren" },
          { en: "Control center", es: "Controlar el centro del tablero", de: "Die Mitte des Bretts zu kontrollieren", nl: "Het midden van het bord controleren" }
        ],
        correct: 1,
        explanation: {
          en: "The goal of backgammon is to be the first player to bear off (remove) all 15 of your checkers from the board after moving them to your home board.",
          es: "El objetivo del backgammon es ser el primer jugador en sacar (quitar) las 15 fichas del tablero después de moverlas a tu tablero de casa.",
          de: "Das Ziel von Backgammon ist es, der erste Spieler zu sein, der alle 15 seiner Steine vom Brett auswürfelt, nachdem er sie in sein Heimfeld gebracht hat.",
          nl: "Het doel van backgammon is de eerste speler te zijn die al zijn 15 stenen van het bord uitspeelt nadat je ze naar je thuisbord hebt verplaatst."
        }
      },
      {
        question: {
          en: "How many home boards are there on a backgammon board?",
          es: "¿Cuántos tableros de casa hay en un tablero de backgammon?",
          de: "Wie viele Heimfelder gibt es auf einem Backgammon-Brett?",
          nl: "Hoeveel thuisborden zijn er op een backgammon-bord?"
        },
        options: [
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "1", es: "1", de: "1", nl: "1" }
        ],
        correct: 0,
        explanation: {
          en: "There are 2 home boards on a backgammon board - one for each player. Each home board consists of 6 points where players must bring their checkers before bearing off.",
          es: "Hay 2 tableros de casa en un tablero de backgammon, uno para cada jugador. Cada tablero de casa consta de 6 puntos donde los jugadores deben traer sus fichas antes de sacarlas.",
          de: "Es gibt 2 Heimfelder auf einem Backgammon-Brett - eines für jeden Spieler. Jedes Heimfeld besteht aus 6 Punkten, wohin die Spieler ihre Steine bringen müssen, bevor sie auswürfeln können.",
          nl: "Er zijn 2 thuisborden op een backgammon-bord - één voor elke speler. Elk thuisbord bestaat uit 6 punten waar spelers hun stenen naartoe moeten brengen voordat ze kunnen uitspelen."
        }
      },
      {
        question: {
          en: "What is 'anchoring' in backgammon strategy?",
          es: "¿Qué es 'anclar' en la estrategia del backgammon?",
          de: "Was ist 'Ankern' in der Backgammon-Strategie?",
          nl: "Wat is 'verankeren' in de backgammon-strategie?"
        },
        options: [
          { en: "Checkers backwards", es: "Mover fichas hacia atrás", de: "Steine rückwärts bewegen", nl: "Stenen achterwaarts verplaatsen" },
          { en: "Defensive point in opponent home", es: "Establecer un punto defensivo en el tablero de casa del oponente", de: "Einen Verteidigungspunkt im gegnerischen Heimfeld etablieren", nl: "Een verdedigingspunt in het thuisbord van de tegenstander vestigen" },
          { en: "Block all movement", es: "Bloquear todo movimiento", de: "Alle Bewegungen blockieren", nl: "Alle bewegingen blokkeren" },
          { en: "Double stakes", es: "Doblar las apuestas", de: "Den Einsatz verdoppeln", nl: "De inzet verdubbelen" }
        ],
        correct: 1,
        explanation: {
          en: "Anchoring means establishing a defensive point (with 2+ checkers) in your opponent's home board, providing safety and escape options for checkers that get hit.",
          es: "Anclar significa establecer un punto defensivo (con 2+ fichas) en el tablero de casa de tu oponente, proporcionando seguridad y opciones de escape para las fichas que son golpeadas.",
          de: "Ankern bedeutet, einen Verteidigungspunkt (mit 2+ Steinen) im gegnerischen Heimfeld zu etablieren, der Sicherheit und Fluchtmöglichkeiten für geschlagene Steine bietet.",
          nl: "Verankeren betekent het vestigen van een verdedigingspunt (met 2+ stenen) in het thuisbord van je tegenstander, wat veiligheid en ontsnappingsmogelijkheden biedt voor gerakte stenen."
        }
      },
      {
        question: {
          en: "In backgammon, what is a 'gammon'?",
          es: "En el backgammon, ¿qué es un 'gammon'?",
          de: "Was ist ein 'Gammon' beim Backgammon?",
          nl: "Wat is een 'gammon' bij backgammon?"
        },
        options: [
          { en: "Dice roll type", es: "Un tipo de tirada de dados", de: "Eine Art Würfelwurf", nl: "Een soort dobbelsteenworp" },
          { en: "Opponent hasn't borne off any", es: "Ganar mientras el oponente no ha sacado ninguna ficha", de: "Gewinnen, während der Gegner noch keine Steine ausgewürfelt hat", nl: "Winnen terwijl de tegenstander nog geen stenen heeft uitgespeeld" },
          { en: "Blocking strategy", es: "Una estrategia de bloqueo", de: "Eine Blockierungsstrategie", nl: "Een blokkeerstrategie" },
          { en: "6 spaces at once", es: "Moverse 6 espacios a la vez", de: "6 Felder auf einmal bewegen", nl: "6 vakjes tegelijk verplaatsen" }
        ],
        correct: 1,
        explanation: {
          en: "A gammon is worth 2 points and occurs when you bear off all your checkers while your opponent hasn't borne off any checkers yet.",
          es: "Un gammon vale 2 puntos y ocurre cuando sacas todas tus fichas mientras tu oponente aún no ha sacado ninguna ficha.",
          de: "Ein Gammon ist 2 Punkte wert und tritt auf, wenn du alle deine Steine auswürfelst, während dein Gegner noch keine Steine ausgewürfelt hat.",
          nl: "Een gammon is 2 punten waard en vindt plaats wanneer je al je stenen uitspeelt terwijl je tegenstander nog geen stenen heeft uitgespeeld."
        }
      },
      {
        question: {
          en: "What is the 'racing' phase in backgammon?",
          es: "¿Qué es la fase de 'carrera' en el backgammon?",
          de: "Was ist die 'Renn'-Phase beim Backgammon?",
          nl: "Wat is de 'race'-fase bij backgammon?"
        },
        options: [
          { en: "Opening moves", es: "Los movimientos de apertura del juego", de: "Die Eröffnungszüge des Spiels", nl: "De openingszetten van het spel" },
          { en: "Both rush to bear off, minimal contact", es: "Cuando ambos jugadores se apuran a sacar con contacto mínimo", de: "Wenn beide Spieler sich beeilen auszuwürfeln mit minimalem Kontakt", nl: "Wanneer beide spelers haasten om uit te spelen met minimaal contact" },
          { en: "First roll", es: "La primera tirada de dados", de: "Der erste Würfelwurf", nl: "De eerste dobbelsteenworp" },
          { en: "Move quickly around board", es: "Moverse rápidamente por el tablero", de: "Sich schnell um das Brett bewegen", nl: "Snel rond het bord bewegen" }
        ],
        correct: 1,
        explanation: {
          en: "The racing phase occurs when both players have passed each other's checkers and are simply racing to bear off all their pieces with minimal contact or blocking.",
          es: "La fase de carrera ocurre cuando ambos jugadores han pasado las fichas del otro y simplemente están corriendo para sacar todas sus piezas con contacto o bloqueo mínimos.",
          de: "Die Rennphase tritt auf, wenn beide Spieler aneinander vorbei sind und einfach darum wetteifern, alle ihre Steine mit minimalem Kontakt oder Blockieren auszuwürfeln.",
          nl: "De racefase vindt plaats wanneer beide spelers elkaar zijn gepasseerd en simpelweg racen om al hun stenen uit te spelen met minimaal contact of blokkeren."
        }
      },
      {
        question: {
          en: "How many points does a regular win give you in backgammon scoring?",
          es: "¿Cuántos puntos te da una victoria regular en la puntuación del backgammon?",
          de: "Wie viele Punkte gibt ein normaler Sieg in der Backgammon-Wertung?",
          nl: "Hoeveel punten geeft een gewone overwinning in de backgammon-scoring?"
        },
        options: [
          { en: "1 point", es: "1 punto", de: "1 Punkt", nl: "1 punt" },
          { en: "2 pts", es: "2 puntos", de: "2 Punkte", nl: "2 punten" },
          { en: "3 pts", es: "3 puntos", de: "3 Punkte", nl: "3 punten" },
          { en: "5 pts", es: "5 puntos", de: "5 Punkte", nl: "5 punten" }
        ],
        correct: 0,
        explanation: {
          en: "A regular win (where the opponent has borne off at least one checker) is worth 1 point. Gammons are worth 2 points, and backgammons are worth 3 points.",
          es: "Una victoria regular (donde el oponente ha sacado al menos una ficha) vale 1 punto. Los gammons valen 2 puntos, y los backgammons valen 3 puntos.",
          de: "Ein normaler Sieg (bei dem der Gegner mindestens einen Stein ausgewürfelt hat) ist 1 Punkt wert. Gammons sind 2 Punkte wert, und Backgammons sind 3 Punkte wert.",
          nl: "Een gewone overwinning (waarbij de tegenstander minstens één steen heeft uitgespeeld) is 1 punt waard. Gammons zijn 2 punten waard, en backgammons zijn 3 punten waard."
        }
      },
      {
        question: {
          en: "What is the 'bar' in backgammon?",
          es: "¿Qué es la 'barra' en el backgammon?",
          de: "Was ist die 'Bar' beim Backgammon?",
          nl: "Wat is de 'bar' bij backgammon?"
        },
        options: [
          { en: "Middle strip for hit checkers", es: "La franja del medio donde se colocan las fichas golpeadas", de: "Der Mittelstreifen, wo geschlagene Steine platziert werden", nl: "De middenstrook waar gerakte stenen worden geplaatst" },
          { en: "Edge of board", es: "El borde del tablero", de: "Der Rand des Bretts", nl: "De rand van het bord" },
          { en: "Blocking formation", es: "Una formación de bloqueo", de: "Eine Blockierungsformation", nl: "Een blokkeringsformatie" },
          { en: "Starting position", es: "La posición inicial", de: "Die Startposition", nl: "De startpositie" }
        ],
        correct: 0,
        explanation: {
          en: "The bar is the middle strip of the board where checkers go when they are hit. Checkers on the bar must re-enter the opponent's home board before making any other moves.",
          es: "La barra es la franja del medio del tablero donde van las fichas cuando son golpeadas. Las fichas en la barra deben reentrar al tablero de casa del oponente antes de hacer cualquier otro movimiento.",
          de: "Die Bar ist der Mittelstreifen des Bretts, wo Steine hingehen, wenn sie geschlagen werden. Steine auf der Bar müssen ins gegnerische Heimfeld zurückkehren, bevor andere Züge gemacht werden können.",
          nl: "De bar is de middenstrook van het bord waar stenen naartoe gaan wanneer ze worden geraakt. Stenen op de bar moeten het thuisbord van de tegenstander opnieuw betreden voordat andere zetten kunnen worden gedaan."
        }
      },
      {
        question: {
          en: "What happens if you cannot use both dice numbers in a turn?",
          es: "¿Qué pasa si no puedes usar ambos números de dados en un turno?",
          de: "Was passiert, wenn du beide Würfelzahlen in einem Zug nicht verwenden kannst?",
          nl: "Wat gebeurt er als je beide dobbelsteennummers niet kunt gebruiken in een beurt?"
        },
        options: [
          { en: "Lose turn completely", es: "Pierdes tu turno completamente", de: "Du verlierst deinen Zug komplett", nl: "Je verliest je beurt volledig" },
          { en: "Must use higher # if possible", es: "Debes usar el número más alto si es posible", de: "Du musst die höhere Zahl verwenden, wenn möglich", nl: "Je moet het hogere getal gebruiken indien mogelijk" },
          { en: "Choose which # to use", es: "Eliges qué número usar", de: "Du wählst, welche Zahl du verwendest", nl: "Je kiest welk getal je gebruikt" },
          { en: "Roll again", es: "Vuelves a tirar", de: "Du würfelst erneut", nl: "Je gooit opnieuw" }
        ],
        correct: 1,
        explanation: {
          en: "If you cannot use both dice numbers, you must use the higher number if possible. If you can only use one number, you must use the larger one when given a choice.",
          es: "Si no puedes usar ambos números de dados, debes usar el número más alto si es posible. Si solo puedes usar un número, debes usar el mayor cuando tengas opción.",
          de: "Wenn du beide Würfelzahlen nicht verwenden kannst, musst du die höhere Zahl verwenden, wenn möglich. Wenn du nur eine Zahl verwenden kannst, musst du die größere wählen.",
          nl: "Als je beide dobbelsteennummers niet kunt gebruiken, moet je het hogere getal gebruiken indien mogelijk. Als je slechts één getal kunt gebruiken, moet je het grotere kiezen wanneer je de keuze hebt."
        }
      },
      {
        question: {
          en: "What color are the checkers typically used in backgammon?",
          es: "¿De qué colores son típicamente las fichas utilizadas en backgammon?",
          de: "Welche Farben haben die Steine normalerweise beim Backgammon?",
          nl: "Welke kleuren hebben de stenen meestal bij backgammon?"
        },
        options: [
          { en: "Red and blue", es: "Rojo y azul", de: "Rot und blau", nl: "Rood en blauw" },
          { en: "Black and white", es: "Negro y blanco", de: "Schwarz und weiß", nl: "Zwart en wit" },
          { en: "Green and yellow", es: "Verde y amarillo", de: "Grün und gelb", nl: "Groen en geel" },
          { en: "Brown and tan", es: "Marrón y beige", de: "Braun und beige", nl: "Bruin en beige" }
        ],
        correct: 1,
        explanation: {
          en: "Backgammon checkers are traditionally black and white, though modern sets may use other contrasting color combinations. Each player uses one color for all their 15 checkers.",
          es: "Las fichas de backgammon son tradicionalmente blancas y negras, aunque los juegos modernos pueden usar otras combinaciones de colores contrastantes. Cada jugador usa un color para todas sus 15 fichas.",
          de: "Backgammon-Steine sind traditionell schwarz und weiß, obwohl moderne Sets andere kontrastierende Farbkombinationen verwenden können. Jeder Spieler verwendet eine Farbe für alle seine 15 Steine.",
          nl: "Backgammon-stenen zijn traditioneel zwart en wit, hoewel moderne sets andere contrasterende kleurencombinaties kunnen gebruiken. Elke speler gebruikt één kleur voor al zijn 15 stenen."
        }
      },
      {
        question: {
          en: "Can a single checker occupy a point in backgammon?",
          es: "¿Puede una sola ficha ocupar un punto en backgammon?",
          de: "Kann ein einzelner Stein einen Punkt beim Backgammon besetzen?",
          nl: "Kan een enkele steen een punt bij backgammon bezetten?"
        },
        options: [
          { en: "Yes, called a blot", es: "Sí, se llama blot", de: "Ja, wird Blot genannt", nl: "Ja, wordt een blot genoemd" },
          { en: "No, need 2 minimum", es: "No, se necesitan mínimo 2", de: "Nein, mindestens 2 erforderlich", nl: "Nee, minimaal 2 nodig" },
          { en: "Only in home board", es: "Solo en tablero de casa", de: "Nur im Heimfeld", nl: "Alleen in thuisbord" },
          { en: "Only when bearing off", es: "Solo al sacar fichas", de: "Nur beim Auswürfeln", nl: "Alleen bij uitspelen" }
        ],
        correct: 0,
        explanation: {
          en: "Yes, a single checker on a point is called a blot. Blots are vulnerable and can be hit by an opponent's checker, sending them to the bar.",
          es: "Sí, una sola ficha en un punto se llama blot. Los blots son vulnerables y pueden ser golpeados por la ficha de un oponente, enviándolas a la barra.",
          de: "Ja, ein einzelner Stein auf einem Punkt wird Blot genannt. Blots sind verwundbar und können von einem gegnerischen Stein geschlagen werden, wodurch sie auf die Bar kommen.",
          nl: "Ja, een enkele steen op een punt wordt een blot genoemd. Blots zijn kwetsbaar en kunnen worden geraakt door een steen van de tegenstander, waardoor ze naar de bar gaan."
        }
      },
      {
        question: {
          en: "How many checkers start on each player's 6-point?",
          es: "¿Cuántas fichas comienzan en el punto 6 de cada jugador?",
          de: "Wie viele Steine starten auf dem 6-Punkt jedes Spielers?",
          nl: "Hoeveel stenen beginnen op het 6-punt van elke speler?"
        },
        options: [
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "4", es: "4", de: "4", nl: "4" }
        ],
        correct: 1,
        explanation: {
          en: "In the standard starting position, each player has 5 checkers on their 6-point. This is one of four stacks in the initial setup.",
          es: "En la posición inicial estándar, cada jugador tiene 5 fichas en su punto 6. Esta es una de las cuatro pilas en la configuración inicial.",
          de: "In der Standard-Startposition hat jeder Spieler 5 Steine auf seinem 6-Punkt. Dies ist einer von vier Stapeln im anfänglichen Aufbau.",
          nl: "In de standaard startpositie heeft elke speler 5 stenen op zijn 6-punt. Dit is een van de vier stapels in de initiële opstelling."
        }
      },
      {
        question: {
          en: "Can you move a checker backward in backgammon?",
          es: "¿Puedes mover una ficha hacia atrás en backgammon?",
          de: "Kann man einen Stein beim Backgammon rückwärts bewegen?",
          nl: "Kun je een steen achterwaarts verplaatsen bij backgammon?"
        },
        options: [
          { en: "No, only forward", es: "No, solo hacia adelante", de: "Nein, nur vorwärts", nl: "Nee, alleen voorwaarts" },
          { en: "Yes, anytime", es: "Sí, en cualquier momento", de: "Ja, jederzeit", nl: "Ja, altijd" },
          { en: "Only when on bar", es: "Solo cuando está en la barra", de: "Nur wenn auf Bar", nl: "Alleen wanneer op bar" },
          { en: "Only in home board", es: "Solo en tablero de casa", de: "Nur im Heimfeld", nl: "Alleen in thuisbord" }
        ],
        correct: 0,
        explanation: {
          en: "No, checkers can only move forward (toward your home board and bearing off). You cannot move checkers backward in backgammon.",
          es: "No, las fichas solo pueden moverse hacia adelante (hacia tu tablero de casa y sacar). No puedes mover fichas hacia atrás en backgammon.",
          de: "Nein, Steine können nur vorwärts bewegt werden (Richtung Heimfeld und Auswürfeln). Man kann Steine beim Backgammon nicht rückwärts bewegen.",
          nl: "Nee, stenen kunnen alleen voorwaarts bewegen (naar je thuisbord en uitspelen). Je kunt stenen niet achterwaarts verplaatsen bij backgammon."
        }
      },
      {
        question: {
          en: "What is a 'point' that is controlled by 2 or more checkers called?",
          es: "¿Cómo se llama un 'punto' que es controlado por 2 o más fichas?",
          de: "Wie heißt ein 'Punkt', der von 2 oder mehr Steinen kontrolliert wird?",
          nl: "Hoe heet een 'punt' dat door 2 of meer stenen wordt gecontroleerd?"
        },
        options: [
          { en: "Made point", es: "Punto hecho", de: "Gemachter Punkt", nl: "Gemaakt punt" },
          { en: "Block", es: "Bloque", de: "Block", nl: "Blok" },
          { en: "Wall", es: "Muro", de: "Mauer", nl: "Muur" },
          { en: "Anchor", es: "Ancla", de: "Anker", nl: "Anker" }
        ],
        correct: 0,
        explanation: {
          en: "A point controlled by 2 or more checkers is called a 'made point'. Made points block opponent checkers from landing on that point.",
          es: "Un punto controlado por 2 o más fichas se llama 'punto hecho'. Los puntos hechos bloquean las fichas del oponente de aterrizar en ese punto.",
          de: "Ein Punkt, der von 2 oder mehr Steinen kontrolliert wird, heißt 'gemachter Punkt'. Gemachte Punkte blockieren gegnerische Steine davon, auf diesem Punkt zu landen.",
          nl: "Een punt gecontroleerd door 2 of meer stenen wordt een 'gemaakt punt' genoemd. Gemaakte punten blokkeren tegenstanders om op dat punt te landen."
        }
      },
      {
        question: {
          en: "How do you re-enter a checker from the bar?",
          es: "¿Cómo reingresas una ficha desde la barra?",
          de: "Wie setzt man einen Stein von der Bar wieder ein?",
          nl: "Hoe zet je een steen vanaf de bar opnieuw in?"
        },
        options: [
          { en: "Into opponent's home board", es: "En el tablero de casa del oponente", de: "Ins gegnerische Heimfeld", nl: "In het thuisbord van de tegenstander" },
          { en: "Into your home board", es: "En tu tablero de casa", de: "In dein Heimfeld", nl: "In je thuisbord" },
          { en: "Into center board", es: "En el tablero central", de: "Ins Mittelbrett", nl: "In het middenbord" },
          { en: "Any open point", es: "Cualquier punto abierto", de: "Jeder offene Punkt", nl: "Elk open punt" }
        ],
        correct: 0,
        explanation: {
          en: "Checkers on the bar must re-enter into your opponent's home board (their inner quarter) based on your dice roll before making any other moves.",
          es: "Las fichas en la barra deben reingresar al tablero de casa de tu oponente (su cuarto interior) según tu tirada de dados antes de hacer cualquier otro movimiento.",
          de: "Steine auf der Bar müssen ins gegnerische Heimfeld (deren inneres Viertel) basierend auf deinem Würfelwurf zurückkehren, bevor andere Züge gemacht werden können.",
          nl: "Stenen op de bar moeten het thuisbord van je tegenstander (hun binnenste kwart) opnieuw betreden op basis van je dobbelsteenworp voordat andere zetten kunnen worden gedaan."
        }
      },
      {
        question: {
          en: "Can you have more than 5 checkers on a single point?",
          es: "¿Puedes tener más de 5 fichas en un solo punto?",
          de: "Kann man mehr als 5 Steine auf einem einzelnen Punkt haben?",
          nl: "Kun je meer dan 5 stenen op een enkel punt hebben?"
        },
        options: [
          { en: "No, 5 maximum", es: "No, máximo 5", de: "Nein, maximal 5", nl: "Nee, maximaal 5" },
          { en: "Yes, unlimited", es: "Sí, ilimitado", de: "Ja, unbegrenzt", nl: "Ja, onbeperkt" },
          { en: "Only in home board", es: "Solo en tablero de casa", de: "Nur im Heimfeld", nl: "Alleen in thuisbord" },
          { en: "Yes, maximum 10", es: "Sí, máximo 10", de: "Ja, maximal 10", nl: "Ja, maximaal 10" }
        ],
        correct: 1,
        explanation: {
          en: "Yes, you can have as many checkers as you want on a single point. There is no limit, though it's generally not strategically beneficial to stack too many on one point.",
          es: "Sí, puedes tener tantas fichas como quieras en un solo punto. No hay límite, aunque generalmente no es beneficioso estratégicamente apilar demasiadas en un punto.",
          de: "Ja, man kann beliebig viele Steine auf einem einzelnen Punkt haben. Es gibt kein Limit, obwohl es strategisch meist nicht vorteilhaft ist, zu viele auf einem Punkt zu stapeln.",
          nl: "Ja, je kunt zoveel stenen als je wilt op een enkel punt hebben. Er is geen limiet, hoewel het over het algemeen niet strategisch voordelig is om er te veel op één punt te stapelen."
        }
      },
      {
        question: {
          en: "What happens if both dice show the same number during the opening roll?",
          es: "¿Qué pasa si ambos dados muestran el mismo número durante el lanzamiento de apertura?",
          de: "Was passiert, wenn beide Würfel beim Eröffnungswurf die gleiche Zahl zeigen?",
          nl: "Wat gebeurt er als beide dobbelstenen hetzelfde getal tonen tijdens de openingsworp?"
        },
        options: [
          { en: "Higher roller chooses", es: "El jugador con mayor número elige", de: "Der Spieler mit höherer Zahl wählt", nl: "De speler met het hogere getal kiest" },
          { en: "Roll again", es: "Se vuelve a tirar", de: "Erneut würfeln", nl: "Opnieuw gooien" },
          { en: "Younger player goes first", es: "El jugador más joven va primero", de: "Der jüngere Spieler geht zuerst", nl: "De jongere speler gaat eerst" },
          { en: "Game is void", es: "El juego es nulo", de: "Spiel ist ungültig", nl: "Spel is ongeldig" }
        ],
        correct: 1,
        explanation: {
          en: "If both players roll the same number during the opening roll, they must roll again until different numbers appear. Then the higher number goes first.",
          es: "Si ambos jugadores sacan el mismo número en el lanzamiento de apertura, deben volver a tirar hasta que aparezcan números diferentes. Luego el número más alto va primero.",
          de: "Wenn beide Spieler beim Eröffnungswurf die gleiche Zahl würfeln, müssen sie erneut würfeln, bis verschiedene Zahlen erscheinen. Dann geht die höhere Zahl zuerst.",
          nl: "Als beide spelers hetzelfde getal gooien tijdens de openingsworp, moeten ze opnieuw gooien totdat er verschillende nummers verschijnen. Dan gaat het hogere getal eerst."
        }
      },
      {
        question: {
          en: "What is the maximum number of consecutive points you can control with your checkers?",
          es: "¿Cuál es el número máximo de puntos consecutivos que puedes controlar con tus fichas?",
          de: "Was ist die maximale Anzahl aufeinanderfolgender Punkte, die man mit seinen Steinen kontrollieren kann?",
          nl: "Wat is het maximum aantal opeenvolgende punten dat je kunt controleren met je stenen?"
        },
        options: [
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "8", es: "8", de: "8", nl: "8" },
          { en: "12", es: "12", de: "12", nl: "12" }
        ],
        correct: 1,
        explanation: {
          en: "A prime - six consecutive points - is the maximum barrier because dice can only show 1-6. With six consecutive points controlled, opponent checkers cannot pass.",
          es: "Un prime - seis puntos consecutivos - es la barrera máxima porque los dados solo pueden mostrar 1-6. Con seis puntos consecutivos controlados, las fichas del oponente no pueden pasar.",
          de: "Ein Prime - sechs aufeinanderfolgende Punkte - ist die maximale Barriere, weil Würfel nur 1-6 zeigen können. Mit sechs kontrollierten aufeinanderfolgenden Punkten können gegnerische Steine nicht passieren.",
          nl: "Een prime - zes opeenvolgende punten - is de maximale barrière omdat dobbelstenen alleen 1-6 kunnen tonen. Met zes gecontroleerde opeenvolgende punten kunnen tegenstanders niet passeren."
        }
      },
      {
        question: {
          en: "Which quadrant do checkers enter when coming off the bar?",
          es: "¿A qué cuadrante entran las fichas cuando salen de la barra?",
          de: "In welchen Quadranten kommen Steine, wenn sie von der Bar kommen?",
          nl: "In welk kwadrant komen stenen wanneer ze van de bar komen?"
        },
        options: [
          { en: "Your home board", es: "Tu tablero de casa", de: "Dein Heimfeld", nl: "Je thuisbord" },
          { en: "Opponent's home board", es: "El tablero de casa del oponente", de: "Gegnerisches Heimfeld", nl: "Thuisbord van tegenstander" },
          { en: "Your outer board", es: "Tu tablero exterior", de: "Dein äußeres Feld", nl: "Je buitenbord" },
          { en: "Opponent's outer board", es: "El tablero exterior del oponente", de: "Gegnerisches äußeres Feld", nl: "Buitenbord van tegenstander" }
        ],
        correct: 1,
        explanation: {
          en: "Checkers on the bar must re-enter into the opponent's home board (their points 1-6) based on the dice roll.",
          es: "Las fichas en la barra deben reingresar al tablero de casa del oponente (sus puntos 1-6) según la tirada de dados.",
          de: "Steine auf der Bar müssen ins gegnerische Heimfeld (deren Punkte 1-6) basierend auf dem Würfelwurf zurückkehren.",
          nl: "Stenen op de bar moeten het thuisbord van de tegenstander (hun punten 1-6) opnieuw betreden op basis van de dobbelsteenworp."
        }
      },
      {
        question: {
          en: "Can opponent checkers land on your made point (with 2+ checkers)?",
          es: "¿Pueden las fichas del oponente aterrizar en tu punto hecho (con 2+ fichas)?",
          de: "Können gegnerische Steine auf deinem gemachten Punkt (mit 2+ Steinen) landen?",
          nl: "Kunnen tegenstanders landen op je gemaakte punt (met 2+ stenen)?"
        },
        options: [
          { en: "Yes, always", es: "Sí, siempre", de: "Ja, immer", nl: "Ja, altijd" },
          { en: "No, blocked", es: "No, bloqueado", de: "Nein, blockiert", nl: "Nee, geblokkeerd" },
          { en: "Only with doubles", es: "Solo con dobles", de: "Nur mit Pasch", nl: "Alleen met dubbele worp" },
          { en: "Only in home board", es: "Solo en tablero de casa", de: "Nur im Heimfeld", nl: "Alleen in thuisbord" }
        ],
        correct: 1,
        explanation: {
          en: "No, a point with 2 or more of your checkers is blocked. Opponent checkers cannot land on it. This is a fundamental defensive strategy in backgammon.",
          es: "No, un punto con 2 o más de tus fichas está bloqueado. Las fichas del oponente no pueden aterrizar en él. Esta es una estrategia defensiva fundamental en backgammon.",
          de: "Nein, ein Punkt mit 2 oder mehr deiner Steine ist blockiert. Gegnerische Steine können nicht darauf landen. Dies ist eine grundlegende Verteidigungsstrategie beim Backgammon.",
          nl: "Nee, een punt met 2 of meer van je stenen is geblokkeerd. Tegenstanders kunnen er niet op landen. Dit is een fundamentele defensieve strategie bij backgammon."
        }
      },
      {
        question: {
          en: "How many checkers start on the 24-point in the standard setup?",
          es: "¿Cuántas fichas comienzan en el punto 24 en la configuración estándar?",
          de: "Wie viele Steine starten auf dem 24-Punkt im Standard-Aufbau?",
          nl: "Hoeveel stenen beginnen op het 24-punt in de standaard opstelling?"
        },
        options: [
          { en: "1", es: "1", de: "1", nl: "1" },
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "5", es: "5", de: "5", nl: "5" }
        ],
        correct: 1,
        explanation: {
          en: "In the standard starting position, each player has 2 checkers on their opponent's 24-point (which is the player's 1-point from their perspective).",
          es: "En la posición inicial estándar, cada jugador tiene 2 fichas en el punto 24 de su oponente (que es el punto 1 del jugador desde su perspectiva).",
          de: "In der Standard-Startposition hat jeder Spieler 2 Steine auf dem 24-Punkt des Gegners (was aus Spielersicht der 1-Punkt ist).",
          nl: "In de standaard startpositie heeft elke speler 2 stenen op het 24-punt van hun tegenstander (wat het 1-punt van de speler is vanuit hun perspectief)."
        }
      },
      {
        question: {
          en: "What do you call moving all checkers around the board before bearing off?",
          es: "¿Cómo se llama mover todas las fichas alrededor del tablero antes de sacarlas?",
          de: "Wie nennt man es, alle Steine um das Brett zu bewegen, bevor man auswürfelt?",
          nl: "Hoe noem je het verplaatsen van alle stenen rond het bord voordat je gaat uitspelen?"
        },
        options: [
          { en: "Racing", es: "Carrera", de: "Rennen", nl: "Racen" },
          { en: "Running game", es: "Juego de carrera", de: "Laufspiel", nl: "Loopspel" },
          { en: "The journey", es: "El viaje", de: "Die Reise", nl: "De reis" },
          { en: "Circulation", es: "Circulación", de: "Zirkulation", nl: "Circulatie" }
        ],
        correct: 1,
        explanation: {
          en: "A running game occurs when players have passed each other's checkers and are simply racing to get all checkers home and bear them off with minimal contact.",
          es: "Un juego de carrera ocurre cuando los jugadores han pasado las fichas del otro y simplemente están corriendo para llevar todas las fichas a casa y sacarlas con contacto mínimo.",
          de: "Ein Laufspiel tritt auf, wenn Spieler aneinander vorbei sind und einfach darum wetteifern, alle Steine nach Hause zu bringen und auszuwürfeln mit minimalem Kontakt.",
          nl: "Een loopspel vindt plaats wanneer spelers elkaar zijn gepasseerd en simpelweg racen om alle stenen thuis te krijgen en uit te spelen met minimaal contact."
        }
      },
      {
        question: {
          en: "What is the 'pip count' in backgammon?",
          es: "¿Qué es el 'conteo de pips' en backgammon?",
          de: "Was ist die 'Pip-Zählung' beim Backgammon?",
          nl: "Wat is de 'pip-telling' bij backgammon?"
        },
        options: [
          { en: "Number of dice pips showing", es: "Número de puntos de dados mostrando", de: "Anzahl der Würfelaugen zeigend", nl: "Aantal dobbelsteenpunten tonend" },
          { en: "Total distance all checkers must travel", es: "Distancia total que todas las fichas deben recorrer", de: "Gesamtstrecke, die alle Steine zurücklegen müssen", nl: "Totale afstand die alle stenen moeten afleggen" },
          { en: "Points occupied", es: "Puntos ocupados", de: "Besetzte Punkte", nl: "Bezette punten" },
          { en: "Checkers in home board", es: "Fichas en tablero de casa", de: "Steine im Heimfeld", nl: "Stenen in thuisbord" }
        ],
        correct: 1,
        explanation: {
          en: "The pip count is the total number of points (pips) all your checkers must travel to bear off. It's useful for evaluating your position in a racing game.",
          es: "El conteo de pips es el número total de puntos (pips) que todas tus fichas deben recorrer para sacar. Es útil para evaluar tu posición en un juego de carrera.",
          de: "Die Pip-Zählung ist die Gesamtzahl der Punkte (Pips), die alle deine Steine zurücklegen müssen, um auszuwürfeln. Sie ist nützlich zur Bewertung deiner Position in einem Rennspiel.",
          nl: "De pip-telling is het totale aantal punten (pips) dat al je stenen moeten afleggen om uit te spelen. Het is nuttig voor het evalueren van je positie in een racespel."
        }
      },
      {
        question: {
          en: "Which board quadrant is your home board?",
          es: "¿Qué cuadrante del tablero es tu tablero de casa?",
          de: "Welcher Brett-Quadrant ist dein Heimfeld?",
          nl: "Welk bord-kwadrant is je thuisbord?"
        },
        options: [
          { en: "Farthest from you", es: "El más alejado de ti", de: "Am weitesten von dir entfernt", nl: "Verst van je af" },
          { en: "Closest to you", es: "El más cercano a ti", de: "Am nächsten zu dir", nl: "Dichtst bij je" },
          { en: "Left side only", es: "Solo lado izquierdo", de: "Nur linke Seite", nl: "Alleen linkerkant" },
          { en: "Right side only", es: "Solo lado derecho", de: "Nur rechte Seite", nl: "Alleen rechterkant" }
        ],
        correct: 1,
        explanation: {
          en: "Your home board is the quadrant closest to you, consisting of points 1-6 from your perspective. This is where you must bring all checkers before bearing off.",
          es: "Tu tablero de casa es el cuadrante más cercano a ti, que consta de los puntos 1-6 desde tu perspectiva. Aquí es donde debes traer todas las fichas antes de sacarlas.",
          de: "Dein Heimfeld ist der Quadrant, der dir am nächsten ist, bestehend aus den Punkten 1-6 aus deiner Perspektive. Hierhin musst du alle Steine bringen, bevor du auswürfeln kannst.",
          nl: "Je thuisbord is het kwadrant het dichtst bij je, bestaande uit punten 1-6 vanuit jouw perspectief. Hier moet je alle stenen naartoe brengen voordat je kunt uitspelen."
        }
      },
      {
        question: {
          en: "Can you choose to not use all available moves from your dice roll?",
          es: "¿Puedes elegir no usar todos los movimientos disponibles de tu tirada de dados?",
          de: "Kann man wählen, nicht alle verfügbaren Züge aus dem Würfelwurf zu nutzen?",
          nl: "Kun je ervoor kiezen om niet alle beschikbare zetten van je dobbelsteenworp te gebruiken?"
        },
        options: [
          { en: "Yes, it's optional", es: "Sí, es opcional", de: "Ja, es ist optional", nl: "Ja, het is optioneel" },
          { en: "No, must use all if possible", es: "No, debes usar todos si es posible", de: "Nein, muss alle nutzen wenn möglich", nl: "Nee, moet alle gebruiken indien mogelijk" },
          { en: "Only if behind", es: "Solo si estás atrás", de: "Nur wenn zurück", nl: "Alleen als achter" },
          { en: "Only in home board", es: "Solo en tablero de casa", de: "Nur im Heimfeld", nl: "Alleen in thuisbord" }
        ],
        correct: 1,
        explanation: {
          en: "No, you must use all available moves from your dice if it's legally possible. If you can only use one die, you must use the higher number.",
          es: "No, debes usar todos los movimientos disponibles de tus dados si es legalmente posible. Si solo puedes usar un dado, debes usar el número más alto.",
          de: "Nein, du musst alle verfügbaren Züge aus deinen Würfeln nutzen, wenn es legal möglich ist. Wenn du nur einen Würfel nutzen kannst, musst du die höhere Zahl verwenden.",
          nl: "Nee, je moet alle beschikbare zetten van je dobbelstenen gebruiken als het wettelijk mogelijk is. Als je slechts één dobbelsteen kunt gebruiken, moet je het hogere getal gebruiken."
        }
      },
      {
        question: {
          en: "What is the starting position arrangement called in backgammon?",
          es: "¿Cómo se llama la disposición de posición inicial en backgammon?",
          de: "Wie heißt die Startpositionsanordnung beim Backgammon?",
          nl: "Hoe heet de startpositie-opstelling bij backgammon?"
        },
        options: [
          { en: "Setup or starting position", es: "Configuración o posición inicial", de: "Aufbau oder Startposition", nl: "Opstelling of startpositie" },
          { en: "Beginning formation", es: "Formación inicial", de: "Anfangsformation", nl: "Begin formatie" },
          { en: "Default pattern", es: "Patrón predeterminado", de: "Standardmuster", nl: "Standaard patroon" },
          { en: "Base layout", es: "Disposición base", de: "Basislayout", nl: "Basis indeling" }
        ],
        correct: 0,
        explanation: {
          en: "The initial arrangement of checkers is called the setup or starting position. It's standardized with specific numbers of checkers on points 24, 13, 8, and 6.",
          es: "La disposición inicial de fichas se llama configuración o posición inicial. Es estandarizada con números específicos de fichas en los puntos 24, 13, 8 y 6.",
          de: "Die anfängliche Anordnung der Steine heißt Aufbau oder Startposition. Sie ist standardisiert mit spezifischen Anzahlen von Steinen auf den Punkten 24, 13, 8 und 6.",
          nl: "De initiële opstelling van stenen wordt de opstelling of startpositie genoemd. Het is gestandaardiseerd met specifieke aantallen stenen op punten 24, 13, 8 en 6."
        }
      },
      {
        question: {
          en: "What happens if you have a checker on the bar but cannot enter it?",
          es: "¿Qué pasa si tienes una ficha en la barra pero no puedes ingresarla?",
          de: "Was passiert, wenn du einen Stein auf der Bar hast, aber ihn nicht einsetzen kannst?",
          nl: "Wat gebeurt er als je een steen op de bar hebt maar deze niet kunt inzetten?"
        },
        options: [
          { en: "Lose turn", es: "Pierdes tu turno", de: "Du verlierst deinen Zug", nl: "Je verliest je beurt" },
          { en: "Remove from game", es: "Se elimina del juego", de: "Aus Spiel entfernen", nl: "Uit spel verwijderen" },
          { en: "Place anywhere", es: "Colocar en cualquier lugar", de: "Überall platzieren", nl: "Overal plaatsen" },
          { en: "Stays on bar", es: "Permanece en la barra", de: "Bleibt auf Bar", nl: "Blijft op bar" }
        ],
        correct: 0,
        explanation: {
          en: "If you cannot enter a checker from the bar because all corresponding points are blocked by opponent, you lose your turn entirely.",
          es: "Si no puedes ingresar una ficha desde la barra porque todos los puntos correspondientes están bloqueados por el oponente, pierdes tu turno completamente.",
          de: "Wenn du einen Stein von der Bar nicht einsetzen kannst, weil alle entsprechenden Punkte vom Gegner blockiert sind, verlierst du deinen Zug komplett.",
          nl: "Als je een steen niet vanaf de bar kunt inzetten omdat alle overeenkomstige punten door de tegenstander zijn geblokkeerd, verlies je je beurt volledig."
        }
      },
      {
        question: {
          en: "How many checkers start on the 13-point in standard setup?",
          es: "¿Cuántas fichas comienzan en el punto 13 en la configuración estándar?",
          de: "Wie viele Steine starten auf dem 13-Punkt im Standard-Aufbau?",
          nl: "Hoeveel stenen beginnen op het 13-punt in de standaard opstelling?"
        },
        options: [
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "4", es: "4", de: "4", nl: "4" }
        ],
        correct: 2,
        explanation: {
          en: "In the standard starting position, each player has 5 checkers on the 13-point (which is in the opponent's outer board from your perspective).",
          es: "En la posición inicial estándar, cada jugador tiene 5 fichas en el punto 13 (que está en el tablero exterior del oponente desde tu perspectiva).",
          de: "In der Standard-Startposition hat jeder Spieler 5 Steine auf dem 13-Punkt (der aus deiner Perspektive im äußeren Feld des Gegners liegt).",
          nl: "In de standaard startpositie heeft elke speler 5 stenen op het 13-punt (wat in het buitenbord van de tegenstander ligt vanuit jouw perspectief)."
        }
      },
      {
        question: {
          en: "What happens when you bear off your last checker?",
          es: "¿Qué pasa cuando sacas tu última ficha?",
          de: "Was passiert, wenn du deinen letzten Stein auswürfelst?",
          nl: "Wat gebeurt er wanneer je je laatste steen uitspeelt?"
        },
        options: [
          { en: "Continue playing", es: "Continúas jugando", de: "Spiel geht weiter", nl: "Spel gaat door" },
          { en: "You win the game", es: "Ganas el juego", de: "Du gewinnst das Spiel", nl: "Je wint het spel" },
          { en: "Get extra turn", es: "Obtienes un turno extra", de: "Du bekommst einen zusätzlichen Zug", nl: "Je krijgt een extra beurt" },
          { en: "Opponent gets chance", es: "El oponente tiene una oportunidad", de: "Gegner bekommt eine Chance", nl: "Tegenstander krijgt een kans" }
        ],
        correct: 1,
        explanation: {
          en: "When you bear off your last (15th) checker, you win the game immediately. The type of win (regular, gammon, or backgammon) depends on opponent's position.",
          es: "Cuando sacas tu última (15ª) ficha, ganas el juego inmediatamente. El tipo de victoria (regular, gammon o backgammon) depende de la posición del oponente.",
          de: "Wenn du deinen letzten (15.) Stein auswürfelst, gewinnst du sofort das Spiel. Die Art des Sieges (normal, Gammon oder Backgammon) hängt von der Position des Gegners ab.",
          nl: "Wanneer je je laatste (15e) steen uitspeelt, win je het spel onmiddellijk. Het type overwinning (gewoon, gammon of backgammon) hangt af van de positie van de tegenstander."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  } else if (typeof window !== 'undefined') {
    window.level1 = level1;
  }
})();