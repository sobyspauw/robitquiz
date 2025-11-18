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