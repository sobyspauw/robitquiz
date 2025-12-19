// Quiz Template - Level 2: Bord spelletjes - Scrabble
(function() {
  const level2 = {
  name: {
    en: "Scrabble",
    es: "Scrabble",
    de: "Scrabble",
    nl: "Scrabble"
  },
  questions: [
    {
      question: {
        en: "How many tiles are in a standard Scrabble set?",
        es: "¿Cuántas fichas hay en un juego estándar de Scrabble?",
        de: "Wie viele Steine gibt es in einem Standard-Scrabble-Spiel?",
        nl: "Hoeveel stenen zitten er in een standaard Scrabble-set?"
      },
      options: [
        {
          en: "90",
          es: "90",
          de: "90",
          nl: "90"
        },
        {
          en: "98",
          es: "98",
          de: "98",
          nl: "98"
        },
        {
          en: "100",
          es: "100",
          de: "100",
          nl: "100"
        },
        {
          en: "104",
          es: "104",
          de: "104",
          nl: "104"
        }
      ],
      correct: 2,
      explanation: {
        en: "A standard Scrabble set contains 100 tiles: 98 letter tiles and 2 blank tiles.",
        es: "Un juego estándar de Scrabble contiene 100 fichas: 98 fichas de letras y 2 fichas en blanco.",
        de: "Ein Standard-Scrabble-Spiel enthält 100 Steine: 98 Buchstabensteine und 2 Blanko-Steine.",
        nl: "Een standaard Scrabble-set bevat 100 stenen: 98 letterstenen en 2 blanco stenen."
      }
    },
    {
      question: {
        en: "What is the highest-scoring letter in English Scrabble?",
        es: "¿Cuál es la letra de mayor puntuación en Scrabble en inglés?",
        de: "Welcher Buchstabe hat die höchste Punktzahl im englischen Scrabble?",
        nl: "Wat is de hoogst scorende letter in Engels Scrabble?"
      },
      options: [
        {
          en: "Q and Z (10 pts)",
          es: "Q y Z (10 puntos)",
          de: "Q und Z (10 Punkte)",
          nl: "Q en Z (10 punten)"
        },
        {
          en: "X (8 points)",
          es: "X (8 puntos)",
          de: "X (8 Punkte)",
          nl: "X (8 punten)"
        },
        {
          en: "K (5 points)",
          es: "K (5 puntos)",
          de: "K (5 Punkte)",
          nl: "K (5 punten)"
        },
        {
          en: "J (8 points)",
          es: "J (8 puntos)",
          de: "J (8 Punkte)",
          nl: "J (8 punten)"
        }
      ],
      correct: 0,
      explanation: {
        en: "Q and Z are worth 10 points each, making them the highest-scoring letters in Scrabble.",
        es: "Q y Z valen 10 puntos cada una, lo que las convierte en las letras de mayor puntuación en Scrabble.",
        de: "Q und Z sind jeweils 10 Punkte wert und somit die Buchstaben mit der höchsten Punktzahl im Scrabble.",
        nl: "Q en Z zijn elk 10 punten waard, waardoor ze de hoogst scorende letters in Scrabble zijn."
      }
    },
    {
      question: {
        en: "What is the value of the letter X?",
        es: "¿Cuál es el valor de la letra X?",
        de: "Welchen Wert hat der Buchstabe X?",
        nl: "Wat is de waarde van de letter X?"
      },
      options: [
        {
          en: "5 pts",
          es: "5 puntos",
          de: "5 Punkte",
          nl: "5 punten"
        },
        {
          en: "6 pts",
          es: "6 puntos",
          de: "6 Punkte",
          nl: "6 punten"
        },
        {
          en: "8 pts",
          es: "8 puntos",
          de: "8 Punkte",
          nl: "8 punten"
        },
        {
          en: "10 pts",
          es: "10 puntos",
          de: "10 Punkte",
          nl: "10 punten"
        }
      ],
      correct: 2,
      explanation: {
        en: "The letter X is worth 8 points in Scrabble.",
        es: "La letra X vale 8 puntos en Scrabble.",
        de: "Der Buchstabe X ist im Scrabble 8 Punkte wert.",
        nl: "De letter X is 8 punten waard in Scrabble."
      }
    },
    {
      question: {
        en: "How many letters does each player start with?",
        es: "¿Con cuántas letras comienza cada jugador?",
        de: "Mit wie vielen Buchstaben beginnt jeder Spieler?",
        nl: "Met hoeveel letters begint elke speler?"
      },
      options: [
        {
          en: "5",
          es: "5",
          de: "5",
          nl: "5"
        },
        {
          en: "6",
          es: "6",
          de: "6",
          nl: "6"
        },
        {
          en: "7",
          es: "7",
          de: "7",
          nl: "7"
        },
        {
          en: "8",
          es: "8",
          de: "8",
          nl: "8"
        }
      ],
      correct: 2,
      explanation: {
        en: "Each player begins with 7 tiles and maintains 7 tiles throughout the game (when possible).",
        es: "Cada jugador comienza con 7 fichas y mantiene 7 fichas durante el juego (cuando es posible).",
        de: "Jeder Spieler beginnt mit 7 Steinen und behält während des Spiels 7 Steine (wenn möglich).",
        nl: "Elke speler begint met 7 stenen en houdt gedurende het spel 7 stenen (indien mogelijk)."
      }
    },
    {
      question: {
        en: "How many points is the letter J worth?",
        es: "¿Cuántos puntos vale la letra J?",
        de: "Wie viele Punkte ist der Buchstabe J wert?",
        nl: "Hoeveel punten is de letter J waard?"
      },
      options: [
        {
          en: "5 pts",
          es: "5 puntos",
          de: "5 Punkte",
          nl: "5 punten"
        },
        {
          en: "6 pts",
          es: "6 puntos",
          de: "6 Punkte",
          nl: "6 punten"
        },
        {
          en: "8 pts",
          es: "8 puntos",
          de: "8 Punkte",
          nl: "8 punten"
        },
        {
          en: "10 pts",
          es: "10 puntos",
          de: "10 Punkte",
          nl: "10 punten"
        }
      ],
      correct: 2,
      explanation: {
        en: "The letter J is worth 8 points in Scrabble.",
        es: "La letra J vale 8 puntos en Scrabble.",
        de: "Der Buchstabe J ist im Scrabble 8 Punkte wert.",
        nl: "De letter J is 8 punten waard in Scrabble."
      }
    },
    {
      question: {
        en: "What bonus do you get for using all 7 tiles in one turn?",
        es: "¿Qué bonificación obtienes por usar las 7 fichas en un turno?",
        de: "Welchen Bonus erhalten Sie für die Verwendung aller 7 Steine in einer Runde?",
        nl: "Welke bonus krijg je voor het gebruiken van alle 7 stenen in één beurt?"
      },
      options: [
        {
          en: "25 pts",
          es: "25 puntos",
          de: "25 Punkte",
          nl: "25 punten"
        },
        {
          en: "40 pts",
          es: "40 puntos",
          de: "40 Punkte",
          nl: "40 punten"
        },
        {
          en: "50 pts",
          es: "50 puntos",
          de: "50 Punkte",
          nl: "50 punten"
        },
        {
          en: "75 pts",
          es: "75 puntos",
          de: "75 Punkte",
          nl: "75 punten"
        }
      ],
      correct: 2,
      explanation: {
        en: "Using all 7 tiles in one turn is called a 'bingo' and awards a 50-point bonus.",
        es: "Usar las 7 fichas en un turno se llama 'bingo' y otorga una bonificación de 50 puntos.",
        de: "Die Verwendung aller 7 Steine in einer Runde wird als 'Bingo' bezeichnet und bringt einen Bonus von 50 Punkten.",
        nl: "Het gebruik van alle 7 stenen in één beurt heet een 'bingo' en levert een bonus van 50 punten op."
      }
    },
    {
      question: {
        en: "What is the board size of a standard Scrabble board?",
        es: "¿Cuál es el tamaño del tablero de un tablero estándar de Scrabble?",
        de: "Wie groß ist ein Standard-Scrabble-Brett?",
        nl: "Wat is de bordgrootte van een standaard Scrabble-bord?"
      },
      options: [
        {
          en: "13x13",
          es: "13x13",
          de: "13x13",
          nl: "13x13"
        },
        {
          en: "15x15",
          es: "15x15",
          de: "15x15",
          nl: "15x15"
        },
        {
          en: "17x17",
          es: "17x17",
          de: "17x17",
          nl: "17x17"
        },
        {
          en: "20x20",
          es: "20x20",
          de: "20x20",
          nl: "20x20"
        }
      ],
      correct: 1,
      explanation: {
        en: "A standard Scrabble board is 15x15 squares, totaling 225 squares.",
        es: "Un tablero estándar de Scrabble es de 15x15 cuadrados, con un total de 225 cuadrados.",
        de: "Ein Standard-Scrabble-Brett ist 15x15 Felder groß, insgesamt 225 Felder.",
        nl: "Een standaard Scrabble-bord is 15x15 vakken, in totaal 225 vakken."
      }
    },
    {
      question: {
        en: "What is the center star square on the board?",
        es: "¿Qué es el cuadrado de estrella central en el tablero?",
        de: "Was ist das zentrale Sternfeld auf dem Brett?",
        nl: "Wat is het centrale stervak op het bord?"
      },
      options: [
        {
          en: "Double Letter Score",
          es: "Puntuación de Letra Doble",
          de: "Doppelter Buchstabenwert",
          nl: "Dubbele Letterwaarde"
        },
        {
          en: "Triple Letter Score",
          es: "Puntuación de Letra Triple",
          de: "Dreifacher Buchstabenwert",
          nl: "Driedubbele Letterwaarde"
        },
        {
          en: "Double Word Score",
          es: "Puntuación de Palabra Doble",
          de: "Doppelter Wortwert",
          nl: "Dubbele Woordwaarde"
        },
        {
          en: "Triple Word Score",
          es: "Puntuación de Palabra Triple",
          de: "Dreifacher Wortwert",
          nl: "Driedubbele Woordwaarde"
        }
      ],
      correct: 2,
      explanation: {
        en: "The center star square is a Double Word Score, where the first word of the game must be placed.",
        es: "El cuadrado de estrella central es una Puntuación de Palabra Doble, donde debe colocarse la primera palabra del juego.",
        de: "Das zentrale Sternfeld ist ein Doppelter Wortwert, wo das erste Wort des Spiels platziert werden muss.",
        nl: "Het centrale stervak is een Dubbele Woordwaarde, waar het eerste woord van het spel moet worden geplaatst."
      }
    },
    {
      question: {
        en: "In which direction can words be placed on the board?",
        es: "¿En qué dirección se pueden colocar las palabras en el tablero?",
        de: "In welche Richtung können Wörter auf dem Brett platziert werden?",
        nl: "In welke richting kunnen woorden op het bord worden geplaatst?"
      },
      options: [
        {
          en: "Only horizontal",
          es: "Solo horizontal",
          de: "Nur horizontal",
          nl: "Alleen horizontaal"
        },
        {
          en: "Only vertical",
          es: "Solo vertical",
          de: "Nur vertikal",
          nl: "Alleen verticaal"
        },
        {
          en: "Horizontal or vertical",
          es: "Horizontal o vertical",
          de: "Horizontal oder vertikal",
          nl: "Horizontaal of verticaal"
        },
        {
          en: "Any direction including diagonal",
          es: "Cualquier dirección incluyendo diagonal",
          de: "Jede Richtung einschließlich diagonal",
          nl: "Elke richting inclusief diagonaal"
        }
      ],
      correct: 2,
      explanation: {
        en: "Words can be placed horizontally (left to right) or vertically (top to bottom), but not diagonally.",
        es: "Las palabras se pueden colocar horizontalmente (de izquierda a derecha) o verticalmente (de arriba a abajo), pero no en diagonal.",
        de: "Wörter können horizontal (von links nach rechts) oder vertikal (von oben nach unten) platziert werden, aber nicht diagonal.",
        nl: "Woorden kunnen horizontaal (van links naar rechts) of verticaal (van boven naar beneden) worden geplaatst, maar niet diagonaal."
      }
    },
    {
      question: {
        en: "How many blank tiles are in a Scrabble set?",
        es: "¿Cuántas fichas en blanco hay en un juego de Scrabble?",
        de: "Wie viele Blanko-Steine gibt es in einem Scrabble-Spiel?",
        nl: "Hoeveel blanco stenen zitten er in een Scrabble-set?"
      },
      options: [
        {
          en: "1",
          es: "1",
          de: "1",
          nl: "1"
        },
        {
          en: "2",
          es: "2",
          de: "2",
          nl: "2"
        },
        {
          en: "3",
          es: "3",
          de: "3",
          nl: "3"
        },
        {
          en: "4",
          es: "4",
          de: "4",
          nl: "4"
        }
      ],
      correct: 1,
      explanation: {
        en: "There are 2 blank tiles in Scrabble, which can be used as any letter but are worth 0 points.",
        es: "Hay 2 fichas en blanco en Scrabble, que pueden usarse como cualquier letra pero valen 0 puntos.",
        de: "Es gibt 2 Blanko-Steine im Scrabble, die als beliebiger Buchstabe verwendet werden können, aber 0 Punkte wert sind.",
        nl: "Er zijn 2 blanco stenen in Scrabble, die als elke letter kunnen worden gebruikt maar 0 punten waard zijn."
      }
    },
    {
      question: {
        en: "What is the value of an 'E' tile in Scrabble?",
        es: "¿Cuál es el valor de una ficha 'E' en Scrabble?",
        de: "Welchen Wert hat ein 'E'-Stein im Scrabble?",
        nl: "Wat is de waarde van een 'E'-steen in Scrabble?"
      },
      options: [
        {
          en: "1 point",
          es: "1 punto",
          de: "1 Punkt",
          nl: "1 punt"
        },
        {
          en: "2 pts",
          es: "2 puntos",
          de: "2 Punkte",
          nl: "2 punten"
        },
        {
          en: "3 pts",
          es: "3 puntos",
          de: "3 Punkte",
          nl: "3 punten"
        },
        {
          en: "4 pts",
          es: "4 puntos",
          de: "4 Punkte",
          nl: "4 punten"
        }
      ],
      correct: 0,
      explanation: {
        en: "E is worth 1 point and is the most common letter in Scrabble with 12 tiles.",
        es: "E vale 1 punto y es la letra más común en Scrabble con 12 fichas.",
        de: "E ist 1 Punkt wert und der häufigste Buchstabe im Scrabble mit 12 Steinen.",
        nl: "E is 1 punt waard en is de meest voorkomende letter in Scrabble met 12 stenen."
      }
    },
    {
      question: {
        en: "Can you play words backwards in Scrabble?",
        es: "¿Puedes jugar palabras al revés en Scrabble?",
        de: "Kann man im Scrabble Wörter rückwärts spielen?",
        nl: "Kun je woorden achterstevoren spelen in Scrabble?"
      },
      options: [
        {
          en: "Yes, always",
          es: "Sí, siempre",
          de: "Ja, immer",
          nl: "Ja, altijd"
        },
        {
          en: "No, never",
          es: "No, nunca",
          de: "Nein, niemals",
          nl: "Nee, nooit"
        },
        {
          en: "Only if valid word",
          es: "Solo si forma una palabra válida",
          de: "Nur wenn es ein gültiges Wort bildet",
          nl: "Alleen als het een geldig woord vormt"
        },
        {
          en: "Only on special squares",
          es: "Solo en cuadrados especiales",
          de: "Nur auf speziellen Feldern",
          nl: "Alleen op speciale vakken"
        }
      ],
      correct: 2,
      explanation: {
        en: "You can only play words backwards if the reversed spelling forms a valid dictionary word.",
        es: "Solo puedes jugar palabras al revés si la ortografía invertida forma una palabra válida del diccionario.",
        de: "Sie können Wörter nur rückwärts spielen, wenn die umgekehrte Schreibweise ein gültiges Wörterbuch-Wort bildet.",
        nl: "Je kunt woorden alleen achterstevoren spelen als de omgekeerde spelling een geldig woordenboekwoord vormt."
      }
    },
    {
      question: {
        en: "How many 'A' tiles are in a Scrabble set?",
        es: "¿Cuántas fichas 'A' hay en un juego de Scrabble?",
        de: "Wie viele 'A'-Steine gibt es in einem Scrabble-Spiel?",
        nl: "Hoeveel 'A'-stenen zitten er in een Scrabble-set?"
      },
      options: [
        {
          en: "7",
          es: "7",
          de: "7",
          nl: "7"
        },
        {
          en: "9",
          es: "9",
          de: "9",
          nl: "9"
        },
        {
          en: "11",
          es: "11",
          de: "11",
          nl: "11"
        },
        {
          en: "12",
          es: "12",
          de: "12",
          nl: "12"
        }
      ],
      correct: 1,
      explanation: {
        en: "There are 9 'A' tiles in a standard Scrabble set, each worth 1 point.",
        es: "Hay 9 fichas 'A' en un juego estándar de Scrabble, cada una vale 1 punto.",
        de: "Es gibt 9 'A'-Steine in einem Standard-Scrabble-Spiel, jeder ist 1 Punkt wert.",
        nl: "Er zijn 9 'A'-stenen in een standaard Scrabble-set, elk 1 punt waard."
      }
    },
    {
      question: {
        en: "What is the minimum word length in Scrabble?",
        es: "¿Cuál es la longitud mínima de palabra en Scrabble?",
        de: "Was ist die Mindestlänge eines Wortes im Scrabble?",
        nl: "Wat is de minimale woordlengte in Scrabble?"
      },
      options: [
        {
          en: "1 letter",
          es: "1 letra",
          de: "1 Buchstabe",
          nl: "1 letter"
        },
        {
          en: "2 letters",
          es: "2 letras",
          de: "2 Buchstaben",
          nl: "2 letters"
        },
        {
          en: "3 letters",
          es: "3 letras",
          de: "3 Buchstaben",
          nl: "3 letters"
        },
        {
          en: "4 letters",
          es: "4 letras",
          de: "4 Buchstaben",
          nl: "4 letters"
        }
      ],
      correct: 1,
      explanation: {
        en: "The minimum word length in Scrabble is 2 letters. Single letters are not valid words.",
        es: "La longitud mínima de palabra en Scrabble es de 2 letras. Las letras individuales no son palabras válidas.",
        de: "Die Mindestlänge eines Wortes im Scrabble beträgt 2 Buchstaben. Einzelne Buchstaben sind keine gültigen Wörter.",
        nl: "De minimale woordlengte in Scrabble is 2 letters. Enkele letters zijn geen geldige woorden."
      }
    },
    {
      question: {
        en: "What happens to unplayed tiles at the end of the game?",
        es: "¿Qué sucede con las fichas no jugadas al final del juego?",
        de: "Was passiert mit ungespielten Steinen am Ende des Spiels?",
        nl: "Wat gebeurt er met ongespeel de stenen aan het einde van het spel?"
      },
      options: [
        {
          en: "They add to your score",
          es: "Se suman a tu puntuación",
          de: "Sie werden Ihrer Punktzahl hinzugefügt",
          nl: "Ze worden toegevoegd aan je score"
        },
        {
          en: "They subtract from your score",
          es: "Se restan de tu puntuación",
          de: "Sie werden von Ihrer Punktzahl abgezogen",
          nl: "Ze worden afgetrokken van je score"
        },
        {
          en: "They have no effect",
          es: "No tienen efecto",
          de: "Sie haben keine Auswirkung",
          nl: "Ze hebben geen effect"
        },
        {
          en: "They double your score",
          es: "Duplican tu puntuación",
          de: "Sie verdoppeln Ihre Punktzahl",
          nl: "Ze verdubbelen je score"
        }
      ],
      correct: 1,
      explanation: {
        en: "At the end of the game, the value of unplayed tiles is subtracted from your score (and often added to the player who finished).",
        es: "Al final del juego, el valor de las fichas no jugadas se resta de tu puntuación (y a menudo se suma al jugador que terminó).",
        de: "Am Ende des Spiels wird der Wert ungespielter Steine von Ihrer Punktzahl abgezogen (und oft dem Spieler hinzugefügt, der fertig ist).",
        nl: "Aan het einde van het spel wordt de waarde van ongespeelde stenen afgetrokken van je score (en vaak toegevoegd aan de speler die klaar is)."
      }
    },
    {
      question: {
        en: "Who invented Scrabble?",
        es: "¿Quién inventó Scrabble?",
        de: "Wer hat Scrabble erfunden?",
        nl: "Wie heeft Scrabble uitgevonden?"
      },
      options: [
        {
          en: "Alfred Mosher Butts",
          es: "Alfred Mosher Butts",
          de: "Alfred Mosher Butts",
          nl: "Alfred Mosher Butts"
        },
        {
          en: "Charles Darrow",
          es: "Charles Darrow",
          de: "Charles Darrow",
          nl: "Charles Darrow"
        },
        {
          en: "Milton Bradley",
          es: "Milton Bradley",
          de: "Milton Bradley",
          nl: "Milton Bradley"
        },
        {
          en: "Parker Brothers",
          es: "Parker Brothers",
          de: "Parker Brothers",
          nl: "Parker Brothers"
        }
      ],
      correct: 0,
      explanation: {
        en: "Alfred Mosher Butts invented Scrabble in 1938, originally calling it 'Criss-Crosswords'.",
        es: "Alfred Mosher Butts inventó Scrabble en 1938, originalmente llamándolo 'Criss-Crosswords'.",
        de: "Alfred Mosher Butts erfand Scrabble 1938 und nannte es ursprünglich 'Criss-Crosswords'.",
        nl: "Alfred Mosher Butts vond Scrabble uit in 1938 en noemde het oorspronkelijk 'Criss-Crosswords'."
      }
    },
    {
      question: {
        en: "What happens when the tile bag is empty?",
        es: "¿Qué sucede cuando la bolsa de fichas está vacía?",
        de: "Was passiert, wenn der Steinbeutel leer ist?",
        nl: "Wat gebeurt er als de steenzak leeg is?"
      },
      options: [
        {
          en: "Game ends immediately",
          es: "El juego termina inmediatamente",
          de: "Das Spiel endet sofort",
          nl: "Het spel eindigt onmiddellijk"
        },
        {
          en: "Continue with remaining tiles",
          es: "Los jugadores continúan con sus fichas restantes",
          de: "Spieler spielen mit ihren verbleibenden Steinen weiter",
          nl: "Spelers gaan door met hun resterende stenen"
        },
        {
          en: "New tiles are created",
          es: "Se crean nuevas fichas",
          de: "Neue Steine werden erstellt",
          nl: "Nieuwe stenen worden gemaakt"
        },
        {
          en: "Players must exchange tiles",
          es: "Los jugadores deben intercambiar fichas",
          de: "Spieler müssen Steine tauschen",
          nl: "Spelers moeten stenen ruilen"
        }
      ],
      correct: 1,
      explanation: {
        en: "When the bag is empty, players continue playing with their remaining tiles until one player uses all tiles or no more plays are possible.",
        es: "Cuando la bolsa está vacía, los jugadores continúan jugando con sus fichas restantes hasta que un jugador use todas las fichas o no sean posibles más jugadas.",
        de: "Wenn der Beutel leer ist, spielen die Spieler mit ihren verbleibenden Steinen weiter, bis ein Spieler alle Steine verwendet hat oder keine weiteren Züge möglich sind.",
        nl: "Wanneer de zak leeg is, spelen spelers door met hun resterende stenen totdat één speler alle stenen heeft gebruikt of er geen zetten meer mogelijk zijn."
      }
    },
    {
      question: {
        en: "Can proper nouns be used in Scrabble?",
        es: "¿Se pueden usar nombres propios en Scrabble?",
        de: "Können Eigennamen im Scrabble verwendet werden?",
        nl: "Kunnen eigennamen worden gebruikt in Scrabble?"
      },
      options: [
        {
          en: "Yes, always",
          es: "Sí, siempre",
          de: "Ja, immer",
          nl: "Ja, altijd"
        },
        {
          en: "No, never",
          es: "No, nunca",
          de: "Nein, niemals",
          nl: "Nee, nooit"
        },
        {
          en: "Only in tournament play",
          es: "Solo en juego de torneo",
          de: "Nur im Turnierspiel",
          nl: "Alleen in toernooispel"
        },
        {
          en: "Only if capitalized",
          es: "Solo si están en mayúsculas",
          de: "Nur wenn großgeschrieben",
          nl: "Alleen als hoofdletters"
        }
      ],
      correct: 1,
      explanation: {
        en: "Proper nouns (names of people, places, brands) are not allowed in standard Scrabble rules.",
        es: "Los nombres propios (nombres de personas, lugares, marcas) no están permitidos en las reglas estándar de Scrabble.",
        de: "Eigennamen (Namen von Personen, Orten, Marken) sind nach den Standard-Scrabble-Regeln nicht erlaubt.",
        nl: "Eigennamen (namen van mensen, plaatsen, merken) zijn niet toegestaan volgens de standaard Scrabble-regels."
      }
    },
    {
      question: {
        en: "How many times can a premium square be used?",
        es: "¿Cuántas veces se puede usar un cuadrado premium?",
        de: "Wie oft kann ein Premium-Feld verwendet werden?",
        nl: "Hoe vaak kan een premiumvak worden gebruikt?"
      },
      options: [
        {
          en: "Once per game",
          es: "Una vez por juego",
          de: "Einmal pro Spiel",
          nl: "Eenmaal per spel"
        },
        {
          en: "Once per player",
          es: "Una vez por jugador",
          de: "Einmal pro Spieler",
          nl: "Eenmaal per speler"
        },
        {
          en: "Unlimited times",
          es: "Veces ilimitadas",
          de: "Unbegrenzt oft",
          nl: "Onbeperkt vaak"
        },
        {
          en: "Twice per game",
          es: "Dos veces por juego",
          de: "Zweimal pro Spiel",
          nl: "Twee keer per spel"
        }
      ],
      correct: 0,
      explanation: {
        en: "Premium squares (Double/Triple Letter/Word) can only be used once - when a tile is first placed on them.",
        es: "Los cuadrados premium (Letra/Palabra Doble/Triple) solo se pueden usar una vez: cuando se coloca una ficha por primera vez en ellos.",
        de: "Premium-Felder (Doppelter/Dreifacher Buchstabe/Wort) können nur einmal verwendet werden - wenn ein Stein zum ersten Mal darauf platziert wird.",
        nl: "Premiumvakken (Dubbele/Driedubbele Letter/Woord) kunnen slechts één keer worden gebruikt - wanneer een steen er voor het eerst op wordt geplaatst."
      }
    },
    {
      question: {
        en: "How many Triple Word Score squares are on the board?",
        es: "¿Cuántos cuadrados de Puntuación de Palabra Triple hay en el tablero?",
        de: "Wie viele Dreifacher-Wortwert-Felder gibt es auf dem Brett?",
        nl: "Hoeveel Driedubbele Woordwaarde-vakken zijn er op het bord?"
      },
      options: [
        {
          en: "4",
          es: "4",
          de: "4",
          nl: "4"
        },
        {
          en: "6",
          es: "6",
          de: "6",
          nl: "6"
        },
        {
          en: "8",
          es: "8",
          de: "8",
          nl: "8"
        },
        {
          en: "12",
          es: "12",
          de: "12",
          nl: "12"
        }
      ],
      correct: 2,
      explanation: {
        en: "There are 8 Triple Word Score squares on a standard Scrabble board, located at the corners and edges.",
        es: "Hay 8 cuadrados de Puntuación de Palabra Triple en un tablero estándar de Scrabble, ubicados en las esquinas y bordes.",
        de: "Es gibt 8 Dreifacher-Wortwert-Felder auf einem Standard-Scrabble-Brett, die sich an den Ecken und Rändern befinden.",
        nl: "Er zijn 8 Driedubbele Woordwaarde-vakken op een standaard Scrabble-bord, gelegen op de hoeken en randen."
      }
    },
    {
      question: {
        en: "How many points is the letter 'H' worth in Scrabble?",
        es: "¿Cuántos puntos vale la letra 'H' en Scrabble?",
        de: "Wie viele Punkte ist der Buchstabe 'H' im Scrabble wert?",
        nl: "Hoeveel punten is de letter 'H' waard in Scrabble?"
      },
      options: [
        {
          en: "2 pts",
          es: "2 puntos",
          de: "2 Punkte",
          nl: "2 punten"
        },
        {
          en: "3 pts",
          es: "3 puntos",
          de: "3 Punkte",
          nl: "3 punten"
        },
        {
          en: "4 pts",
          es: "4 puntos",
          de: "4 Punkte",
          nl: "4 punten"
        },
        {
          en: "5 pts",
          es: "5 puntos",
          de: "5 Punkte",
          nl: "5 punten"
        }
      ],
      correct: 2,
      explanation: {
        en: "The letter 'H' is worth 4 points in Scrabble. It's a moderately valuable consonant commonly used in English words.",
        es: "La letra 'H' vale 4 puntos en Scrabble. Es una consonante de valor moderado comúnmente usada en palabras en inglés.",
        de: "Der Buchstabe 'H' ist 4 Punkte im Scrabble wert. Es ist ein mittelwertiger Konsonant, der häufig in englischen Wörtern verwendet wird.",
        nl: "De letter 'H' is 4 punten waard in Scrabble. Het is een matig waardevolle medeklinker die veel wordt gebruikt in Engelse woorden."
      }
    },
    {
      question: {
        en: "What color are Triple Letter Score squares?",
        es: "¿De qué color son los cuadrados de Puntuación de Letra Triple?",
        de: "Welche Farbe haben Dreifacher-Buchstabenwert-Felder?",
        nl: "Welke kleur hebben Driedubbele Letterwaarde-vakken?"
      },
      options: [
        {
          en: "Light blue",
          es: "Azul claro",
          de: "Hellblau",
          nl: "Lichtblauw"
        },
        {
          en: "Dark blue",
          es: "Azul oscuro",
          de: "Dunkelblau",
          nl: "Donkerblauw"
        },
        {
          en: "Red",
          es: "Rojo",
          de: "Rot",
          nl: "Rood"
        },
        {
          en: "Green",
          es: "Verde",
          de: "Grün",
          nl: "Groen"
        }
      ],
      correct: 1,
      explanation: {
        en: "Triple Letter Score squares are dark blue. They multiply the value of a single letter by 3 when a tile is first placed on them.",
        es: "Los cuadrados de Puntuación de Letra Triple son azul oscuro. Multiplican el valor de una sola letra por 3 cuando se coloca una ficha por primera vez.",
        de: "Dreifacher-Buchstabenwert-Felder sind dunkelblau. Sie multiplizieren den Wert eines einzelnen Buchstabens mit 3, wenn ein Stein zum ersten Mal platziert wird.",
        nl: "Driedubbele Letterwaarde-vakken zijn donkerblauw. Ze vermenigvuldigen de waarde van een enkele letter met 3 wanneer een steen voor het eerst wordt geplaatst."
      }
    },
    {
      question: {
        en: "Can you exchange tiles on your turn instead of playing a word?",
        es: "¿Puedes intercambiar fichas en tu turno en lugar de jugar una palabra?",
        de: "Können Sie in Ihrem Zug Steine austauschen, anstatt ein Wort zu spielen?",
        nl: "Kun je stenen ruilen op je beurt in plaats van een woord te spelen?"
      },
      options: [
        {
          en: "Yes, but you lose your turn",
          es: "Sí, pero pierdes tu turno",
          de: "Ja, aber Sie verlieren Ihren Zug",
          nl: "Ja, maar je verliest je beurt"
        },
        {
          en: "No, never allowed",
          es: "No, nunca permitido",
          de: "Nein, niemals erlaubt",
          nl: "Nee, nooit toegestaan"
        },
        {
          en: "Yes, and keep your turn",
          es: "Sí, y conservas tu turno",
          de: "Ja, und Sie behalten Ihren Zug",
          nl: "Ja, en je behoudt je beurt"
        },
        {
          en: "Only in first 3 turns",
          es: "Solo en los primeros 3 turnos",
          de: "Nur in den ersten 3 Zügen",
          nl: "Alleen in de eerste 3 beurten"
        }
      ],
      correct: 0,
      explanation: {
        en: "You can exchange any number of tiles with the bag, but you forfeit that turn. This is useful for getting rid of difficult letters.",
        es: "Puedes intercambiar cualquier número de fichas con la bolsa, pero pierdes ese turno. Esto es útil para deshacerse de letras difíciles.",
        de: "Sie können beliebig viele Steine mit dem Beutel austauschen, aber Sie verlieren diesen Zug. Dies ist nützlich, um schwierige Buchstaben loszuwerden.",
        nl: "Je kunt elk aantal stenen ruilen met de zak, maar je verliest die beurt. Dit is handig om van moeilijke letters af te komen."
      }
    },
    {
      question: {
        en: "How many 'I' tiles are in a standard Scrabble set?",
        es: "¿Cuántas fichas 'I' hay en un juego estándar de Scrabble?",
        de: "Wie viele 'I'-Steine gibt es in einem Standard-Scrabble-Spiel?",
        nl: "Hoeveel 'I'-stenen zitten er in een standaard Scrabble-set?"
      },
      options: [
        {
          en: "6",
          es: "6",
          de: "6",
          nl: "6"
        },
        {
          en: "8",
          es: "8",
          de: "8",
          nl: "8"
        },
        {
          en: "9",
          es: "9",
          de: "9",
          nl: "9"
        },
        {
          en: "12",
          es: "12",
          de: "12",
          nl: "12"
        }
      ],
      correct: 2,
      explanation: {
        en: "There are 9 'I' tiles in a standard Scrabble set, each worth 1 point. It's one of the most common vowels.",
        es: "Hay 9 fichas 'I' en un juego estándar de Scrabble, cada una vale 1 punto. Es una de las vocales más comunes.",
        de: "Es gibt 9 'I'-Steine in einem Standard-Scrabble-Spiel, jeder ist 1 Punkt wert. Es ist einer der häufigsten Vokale.",
        nl: "Er zijn 9 'I'-stenen in een standaard Scrabble-set, elk 1 punt waard. Het is een van de meest voorkomende klinkers."
      }
    },
    {
      question: {
        en: "What is the point value of the letter 'C'?",
        es: "¿Cuál es el valor en puntos de la letra 'C'?",
        de: "Welchen Punktwert hat der Buchstabe 'C'?",
        nl: "Wat is de puntwaarde van de letter 'C'?"
      },
      options: [
        {
          en: "1 point",
          es: "1 punto",
          de: "1 Punkt",
          nl: "1 punt"
        },
        {
          en: "2 pts",
          es: "2 puntos",
          de: "2 Punkte",
          nl: "2 punten"
        },
        {
          en: "3 pts",
          es: "3 puntos",
          de: "3 Punkte",
          nl: "3 punten"
        },
        {
          en: "4 pts",
          es: "4 puntos",
          de: "4 Punkte",
          nl: "4 punten"
        }
      ],
      correct: 2,
      explanation: {
        en: "The letter 'C' is worth 3 points in Scrabble. There are 2 'C' tiles in a standard set.",
        es: "La letra 'C' vale 3 puntos en Scrabble. Hay 2 fichas 'C' en un juego estándar.",
        de: "Der Buchstabe 'C' ist 3 Punkte im Scrabble wert. Es gibt 2 'C'-Steine in einem Standard-Spiel.",
        nl: "De letter 'C' is 3 punten waard in Scrabble. Er zijn 2 'C'-stenen in een standaard set."
      }
    },
    {
      question: {
        en: "How many 'O' tiles are in a Scrabble set?",
        es: "¿Cuántas fichas 'O' hay en un juego de Scrabble?",
        de: "Wie viele 'O'-Steine gibt es in einem Scrabble-Spiel?",
        nl: "Hoeveel 'O'-stenen zitten er in een Scrabble-set?"
      },
      options: [
        {
          en: "6",
          es: "6",
          de: "6",
          nl: "6"
        },
        {
          en: "7",
          es: "7",
          de: "7",
          nl: "7"
        },
        {
          en: "8",
          es: "8",
          de: "8",
          nl: "8"
        },
        {
          en: "9",
          es: "9",
          de: "9",
          nl: "9"
        }
      ],
      correct: 2,
      explanation: {
        en: "There are 8 'O' tiles in a standard Scrabble set. Each 'O' is worth 1 point and it's a common vowel.",
        es: "Hay 8 fichas 'O' en un juego estándar de Scrabble. Cada 'O' vale 1 punto y es una vocal común.",
        de: "Es gibt 8 'O'-Steine in einem Standard-Scrabble-Spiel. Jedes 'O' ist 1 Punkt wert und es ist ein häufiger Vokal.",
        nl: "Er zijn 8 'O'-stenen in een standaard Scrabble-set. Elke 'O' is 1 punt waard en het is een veel voorkomende klinker."
      }
    },
    {
      question: {
        en: "What is the official word for a 7-letter play in Scrabble?",
        es: "¿Cuál es el término oficial para una jugada de 7 letras en Scrabble?",
        de: "Was ist der offizielle Begriff für ein 7-Buchstaben-Spiel im Scrabble?",
        nl: "Wat is de officiële term voor een 7-letter zet in Scrabble?"
      },
      options: [
        {
          en: "Jackpot",
          es: "Jackpot",
          de: "Jackpot",
          nl: "Jackpot"
        },
        {
          en: "Bingo",
          es: "Bingo",
          de: "Bingo",
          nl: "Bingo"
        },
        {
          en: "Strike",
          es: "Strike",
          de: "Strike",
          nl: "Strike"
        },
        {
          en: "Perfect",
          es: "Perfect",
          de: "Perfect",
          nl: "Perfect"
        }
      ],
      correct: 1,
      explanation: {
        en: "A 7-letter play using all tiles in one turn is called a 'bingo' and earns a 50-point bonus. It's a key strategy in competitive play.",
        es: "Una jugada de 7 letras usando todas las fichas en un turno se llama 'bingo' y gana un bono de 50 puntos. Es una estrategia clave en el juego competitivo.",
        de: "Ein 7-Buchstaben-Spiel mit allen Steinen in einem Zug wird 'Bingo' genannt und bringt einen 50-Punkte-Bonus. Es ist eine Schlüsselstrategie im kompetitiven Spiel.",
        nl: "Een 7-letter zet waarbij alle stenen in één beurt worden gebruikt, wordt een 'bingo' genoemd en levert een bonus van 50 punten op. Het is een belangrijke strategie in competitief spel."
      }
    },
    {
      question: {
        en: "How many points is the letter 'M' worth?",
        es: "¿Cuántos puntos vale la letra 'M'?",
        de: "Wie viele Punkte ist der Buchstabe 'M' wert?",
        nl: "Hoeveel punten is de letter 'M' waard?"
      },
      options: [
        {
          en: "1 point",
          es: "1 punto",
          de: "1 Punkt",
          nl: "1 punt"
        },
        {
          en: "2 pts",
          es: "2 puntos",
          de: "2 Punkte",
          nl: "2 punten"
        },
        {
          en: "3 pts",
          es: "3 puntos",
          de: "3 Punkte",
          nl: "3 punten"
        },
        {
          en: "4 pts",
          es: "4 puntos",
          de: "4 Punkte",
          nl: "4 punten"
        }
      ],
      correct: 2,
      explanation: {
        en: "The letter 'M' is worth 3 points in Scrabble. There are 2 'M' tiles in a standard set.",
        es: "La letra 'M' vale 3 puntos en Scrabble. Hay 2 fichas 'M' en un juego estándar.",
        de: "Der Buchstabe 'M' ist 3 Punkte im Scrabble wert. Es gibt 2 'M'-Steine in einem Standard-Spiel.",
        nl: "De letter 'M' is 3 punten waard in Scrabble. Er zijn 2 'M'-stenen in een standaard set."
      }
    },
    {
      question: {
        en: "When was Scrabble first commercially released?",
        es: "¿Cuándo se lanzó comercialmente Scrabble por primera vez?",
        de: "Wann wurde Scrabble erstmals kommerziell veröffentlicht?",
        nl: "Wanneer werd Scrabble voor het eerst commercieel uitgebracht?"
      },
      options: [
        {
          en: "1938",
          es: "1938",
          de: "1938",
          nl: "1938"
        },
        {
          en: "1948",
          es: "1948",
          de: "1948",
          nl: "1948"
        },
        {
          en: "1958",
          es: "1958",
          de: "1958",
          nl: "1958"
        },
        {
          en: "1968",
          es: "1968",
          de: "1968",
          nl: "1968"
        }
      ],
      correct: 1,
      explanation: {
        en: "Scrabble was first commercially released in 1948, though it was invented in 1938 by Alfred Mosher Butts as 'Criss-Crosswords'.",
        es: "Scrabble se lanzó comercialmente por primera vez en 1948, aunque fue inventado en 1938 por Alfred Mosher Butts como 'Criss-Crosswords'.",
        de: "Scrabble wurde erstmals 1948 kommerziell veröffentlicht, obwohl es 1938 von Alfred Mosher Butts als 'Criss-Crosswords' erfunden wurde.",
        nl: "Scrabble werd voor het eerst commercieel uitgebracht in 1948, hoewel het in 1938 werd uitgevonden door Alfred Mosher Butts als 'Criss-Crosswords'."
      }
    },
    {
      question: {
        en: "What happens if both premium squares are covered in one word?",
        es: "¿Qué sucede si se cubren dos cuadrados premium en una palabra?",
        de: "Was passiert, wenn zwei Premium-Felder in einem Wort abgedeckt werden?",
        nl: "Wat gebeurt er als twee premiumvakken in één woord worden bedekt?"
      },
      options: [
        {
          en: "Only first one counts",
          es: "Solo cuenta el primero",
          de: "Nur das erste zählt",
          nl: "Alleen de eerste telt"
        },
        {
          en: "Only highest one counts",
          es: "Solo cuenta el más alto",
          de: "Nur das höchste zählt",
          nl: "Alleen de hoogste telt"
        },
        {
          en: "Both bonuses apply",
          es: "Ambas bonificaciones se aplican",
          de: "Beide Boni gelten",
          nl: "Beide bonussen zijn van toepassing"
        },
        {
          en: "They cancel out",
          es: "Se cancelan mutuamente",
          de: "Sie heben sich auf",
          nl: "Ze heffen elkaar op"
        }
      ],
      correct: 2,
      explanation: {
        en: "If a word covers multiple premium squares, all bonuses apply. For example, two Double Word Scores would quadruple the word score.",
        es: "Si una palabra cubre múltiples cuadrados premium, todas las bonificaciones se aplican. Por ejemplo, dos Puntuaciones de Palabra Doble cuadruplicarían la puntuación de la palabra.",
        de: "Wenn ein Wort mehrere Premium-Felder abdeckt, gelten alle Boni. Zum Beispiel würden zwei Doppelte Wortwerte die Wortpunktzahl vervierfachen.",
        nl: "Als een woord meerdere premiumvakken bedekt, zijn alle bonussen van toepassing. Bijvoorbeeld, twee Dubbele Woordwaarden zouden de woordscore verviervoudigen."
      }
    },
    {
      question: {
        en: "How many 'U' tiles are in a Scrabble set?",
        es: "¿Cuántas fichas 'U' hay en un juego de Scrabble?",
        de: "Wie viele 'U'-Steine gibt es in einem Scrabble-Spiel?",
        nl: "Hoeveel 'U'-stenen zitten er in een Scrabble-set?"
      },
      options: [
        {
          en: "2",
          es: "2",
          de: "2",
          nl: "2"
        },
        {
          en: "4",
          es: "4",
          de: "4",
          nl: "4"
        },
        {
          en: "6",
          es: "6",
          de: "6",
          nl: "6"
        },
        {
          en: "8",
          es: "8",
          de: "8",
          nl: "8"
        }
      ],
      correct: 1,
      explanation: {
        en: "There are 4 'U' tiles in a standard Scrabble set, each worth 1 point. U is the least common vowel in the set.",
        es: "Hay 4 fichas 'U' en un juego estándar de Scrabble, cada una vale 1 punto. U es la vocal menos común en el juego.",
        de: "Es gibt 4 'U'-Steine in einem Standard-Scrabble-Spiel, jeder ist 1 Punkt wert. U ist der seltenste Vokal im Set.",
        nl: "Er zijn 4 'U'-stenen in een standaard Scrabble-set, elk 1 punt waard. U is de minst voorkomende klinker in de set."
      }
    },
    {
      question: {
        en: "What is the point value of the letter 'B'?",
        es: "¿Cuál es el valor en puntos de la letra 'B'?",
        de: "Welchen Punktwert hat der Buchstabe 'B'?",
        nl: "Wat is de puntwaarde van de letter 'B'?"
      },
      options: [
        {
          en: "2 pts",
          es: "2 puntos",
          de: "2 Punkte",
          nl: "2 punten"
        },
        {
          en: "3 pts",
          es: "3 puntos",
          de: "3 Punkte",
          nl: "3 punten"
        },
        {
          en: "4 pts",
          es: "4 puntos",
          de: "4 Punkte",
          nl: "4 punten"
        },
        {
          en: "5 pts",
          es: "5 puntos",
          de: "5 Punkte",
          nl: "5 punten"
        }
      ],
      correct: 1,
      explanation: {
        en: "The letter 'B' is worth 3 points in Scrabble. There are 2 'B' tiles in a standard set.",
        es: "La letra 'B' vale 3 puntos en Scrabble. Hay 2 fichas 'B' en un juego estándar.",
        de: "Der Buchstabe 'B' ist 3 Punkte im Scrabble wert. Es gibt 2 'B'-Steine in einem Standard-Spiel.",
        nl: "De letter 'B' is 3 punten waard in Scrabble. Er zijn 2 'B'-stenen in een standaard set."
      }
    },
    {
      question: {
        en: "Can you add a single letter to form a new word horizontally and vertically?",
        es: "¿Puedes agregar una sola letra para formar una nueva palabra horizontal y verticalmente?",
        de: "Können Sie einen einzelnen Buchstaben hinzufügen, um horizontal und vertikal ein neues Wort zu bilden?",
        nl: "Kun je een enkele letter toevoegen om horizontaal en verticaal een nieuw woord te vormen?"
      },
      options: [
        {
          en: "No, not allowed",
          es: "No, no permitido",
          de: "Nein, nicht erlaubt",
          nl: "Nee, niet toegestaan"
        },
        {
          en: "Yes, both must be valid",
          es: "Sí, ambas deben ser válidas",
          de: "Ja, beide müssen gültig sein",
          nl: "Ja, beide moeten geldig zijn"
        },
        {
          en: "Only in corners",
          es: "Solo en esquinas",
          de: "Nur in Ecken",
          nl: "Alleen in hoeken"
        },
        {
          en: "Only with blanks",
          es: "Solo con blancos",
          de: "Nur mit Blanko-Steinen",
          nl: "Alleen met blanco's"
        }
      ],
      correct: 1,
      explanation: {
        en: "Yes, when you place a tile that forms words in both directions, both words must be valid. You score points for both words created.",
        es: "Sí, cuando colocas una ficha que forma palabras en ambas direcciones, ambas palabras deben ser válidas. Obtienes puntos por ambas palabras creadas.",
        de: "Ja, wenn Sie einen Stein platzieren, der Wörter in beide Richtungen bildet, müssen beide Wörter gültig sein. Sie erzielen Punkte für beide erstellten Wörter.",
        nl: "Ja, wanneer je een steen plaatst die woorden in beide richtingen vormt, moeten beide woorden geldig zijn. Je scoort punten voor beide gevormde woorden."
      }
    },
    {
      question: {
        en: "How many Double Word Score squares are on the board?",
        es: "¿Cuántos cuadrados de Puntuación de Palabra Doble hay en el tablero?",
        de: "Wie viele Doppelter-Wortwert-Felder gibt es auf dem Brett?",
        nl: "Hoeveel Dubbele Woordwaarde-vakken zijn er op het bord?"
      },
      options: [
        {
          en: "12",
          es: "12",
          de: "12",
          nl: "12"
        },
        {
          en: "16",
          es: "16",
          de: "16",
          nl: "16"
        },
        {
          en: "17",
          es: "17",
          de: "17",
          nl: "17"
        },
        {
          en: "20",
          es: "20",
          de: "20",
          nl: "20"
        }
      ],
      correct: 2,
      explanation: {
        en: "There are 17 Double Word Score squares on a standard Scrabble board, including the center star square which acts as one.",
        es: "Hay 17 cuadrados de Puntuación de Palabra Doble en un tablero estándar de Scrabble, incluido el cuadrado de estrella central que actúa como uno.",
        de: "Es gibt 17 Doppelter-Wortwert-Felder auf einem Standard-Scrabble-Brett, einschließlich des zentralen Sternfeldes, das als eines fungiert.",
        nl: "Er zijn 17 Dubbele Woordwaarde-vakken op een standaard Scrabble-bord, inclusief het centrale stervak dat als één fungeert."
      }
    },
    {
      question: {
        en: "What is the point value of the letter 'P'?",
        es: "¿Cuál es el valor en puntos de la letra 'P'?",
        de: "Welchen Punktwert hat der Buchstabe 'P'?",
        nl: "Wat is de puntwaarde van de letter 'P'?"
      },
      options: [
        {
          en: "2 pts",
          es: "2 puntos",
          de: "2 Punkte",
          nl: "2 punten"
        },
        {
          en: "3 pts",
          es: "3 puntos",
          de: "3 Punkte",
          nl: "3 punten"
        },
        {
          en: "4 pts",
          es: "4 puntos",
          de: "4 Punkte",
          nl: "4 punten"
        },
        {
          en: "5 pts",
          es: "5 puntos",
          de: "5 Punkte",
          nl: "5 punten"
        }
      ],
      correct: 1,
      explanation: {
        en: "The letter 'P' is worth 3 points in Scrabble. There are 2 'P' tiles in a standard set.",
        es: "La letra 'P' vale 3 puntos en Scrabble. Hay 2 fichas 'P' en un juego estándar.",
        de: "Der Buchstabe 'P' ist 3 Punkte im Scrabble wert. Es gibt 2 'P'-Steine in einem Standard-Spiel.",
        nl: "De letter 'P' is 3 punten waard in Scrabble. Er zijn 2 'P'-stenen in een standaard set."
      }
    },
    {
      question: {
        en: "What is the international Scrabble dictionary called?",
        es: "¿Cómo se llama el diccionario internacional de Scrabble?",
        de: "Wie heißt das internationale Scrabble-Wörterbuch?",
        nl: "Hoe heet het internationale Scrabble-woordenboek?"
      },
      options: [
        {
          en: "TWL",
          es: "TWL",
          de: "TWL",
          nl: "TWL"
        },
        {
          en: "SOWPODS",
          es: "SOWPODS",
          de: "SOWPODS",
          nl: "SOWPODS"
        },
        {
          en: "OWL",
          es: "OWL",
          de: "OWL",
          nl: "OWL"
        },
        {
          en: "CSW",
          es: "CSW",
          de: "CSW",
          nl: "CSW"
        }
      ],
      correct: 3,
      explanation: {
        en: "The Collins Scrabble Words (CSW) is the international dictionary. It's also known as SOWPODS, combining British and American word lists.",
        es: "Collins Scrabble Words (CSW) es el diccionario internacional. También se conoce como SOWPODS, combinando listas de palabras británicas y americanas.",
        de: "Collins Scrabble Words (CSW) ist das internationale Wörterbuch. Es ist auch als SOWPODS bekannt und kombiniert britische und amerikanische Wortlisten.",
        nl: "Collins Scrabble Words (CSW) is het internationale woordenboek. Het is ook bekend als SOWPODS, een combinatie van Britse en Amerikaanse woordenlijsten."
      }
    },
    {
      question: {
        en: "How many points is the letter 'W' worth?",
        es: "¿Cuántos puntos vale la letra 'W'?",
        de: "Wie viele Punkte ist der Buchstabe 'W' wert?",
        nl: "Hoeveel punten is de letter 'W' waard?"
      },
      options: [
        {
          en: "2 pts",
          es: "2 puntos",
          de: "2 Punkte",
          nl: "2 punten"
        },
        {
          en: "3 pts",
          es: "3 puntos",
          de: "3 Punkte",
          nl: "3 punten"
        },
        {
          en: "4 pts",
          es: "4 puntos",
          de: "4 Punkte",
          nl: "4 punten"
        },
        {
          en: "5 pts",
          es: "5 puntos",
          de: "5 Punkte",
          nl: "5 punten"
        }
      ],
      correct: 2,
      explanation: {
        en: "The letter 'W' is worth 4 points in Scrabble. There are 2 'W' tiles in a standard set.",
        es: "La letra 'W' vale 4 puntos en Scrabble. Hay 2 fichas 'W' en un juego estándar.",
        de: "Der Buchstabe 'W' ist 4 Punkte im Scrabble wert. Es gibt 2 'W'-Steine in einem Standard-Spiel.",
        nl: "De letter 'W' is 4 punten waard in Scrabble. Er zijn 2 'W'-stenen in een standaard set."
      }
    },
    {
      question: {
        en: "Can you challenge a word after the next player has already played?",
        es: "¿Puedes desafiar una palabra después de que el siguiente jugador ya haya jugado?",
        de: "Können Sie ein Wort anfechten, nachdem der nächste Spieler bereits gespielt hat?",
        nl: "Kun je een woord uitdagen nadat de volgende speler al heeft gespeeld?"
      },
      options: [
        {
          en: "Yes, anytime",
          es: "Sí, en cualquier momento",
          de: "Ja, jederzeit",
          nl: "Ja, altijd"
        },
        {
          en: "No, too late",
          es: "No, es demasiado tarde",
          de: "Nein, zu spät",
          nl: "Nee, te laat"
        },
        {
          en: "Only in tournaments",
          es: "Solo en torneos",
          de: "Nur in Turnieren",
          nl: "Alleen in toernooien"
        },
        {
          en: "Yes, within 2 turns",
          es: "Sí, dentro de 2 turnos",
          de: "Ja, innerhalb von 2 Zügen",
          nl: "Ja, binnen 2 beurten"
        }
      ],
      correct: 1,
      explanation: {
        en: "You must challenge a word before the next player takes their turn. Once the next play is made, the previous word is accepted.",
        es: "Debes desafiar una palabra antes de que el siguiente jugador tome su turno. Una vez que se hace la siguiente jugada, la palabra anterior se acepta.",
        de: "Sie müssen ein Wort anfechten, bevor der nächste Spieler seinen Zug macht. Sobald der nächste Spielzug gemacht ist, wird das vorherige Wort akzeptiert.",
        nl: "Je moet een woord uitdagen voordat de volgende speler aan de beurt is. Zodra de volgende zet is gedaan, wordt het vorige woord geaccepteerd."
      }
    },
    {
      question: {
        en: "How many 'N' tiles are in a Scrabble set?",
        es: "¿Cuántas fichas 'N' hay en un juego de Scrabble?",
        de: "Wie viele 'N'-Steine gibt es in einem Scrabble-Spiel?",
        nl: "Hoeveel 'N'-stenen zitten er in een Scrabble-set?"
      },
      options: [
        {
          en: "4",
          es: "4",
          de: "4",
          nl: "4"
        },
        {
          en: "5",
          es: "5",
          de: "5",
          nl: "5"
        },
        {
          en: "6",
          es: "6",
          de: "6",
          nl: "6"
        },
        {
          en: "8",
          es: "8",
          de: "8",
          nl: "8"
        }
      ],
      correct: 2,
      explanation: {
        en: "There are 6 'N' tiles in a standard Scrabble set, each worth 1 point. 'N' is a common consonant in English.",
        es: "Hay 6 fichas 'N' en un juego estándar de Scrabble, cada una vale 1 punto. 'N' es una consonante común en inglés.",
        de: "Es gibt 6 'N'-Steine in einem Standard-Scrabble-Spiel, jeder ist 1 Punkt wert. 'N' ist ein häufiger Konsonant im Englischen.",
        nl: "Er zijn 6 'N'-stenen in een standaard Scrabble-set, elk 1 punt waard. 'N' is een veel voorkomende medeklinker in het Engels."
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
