// Quiz Level 1: Bord spelletjes - Scrabble
(function() {
  const level1 = {
    name: {
      en: "Scrabble - Beginner",
      es: "Scrabble - Principiante",
      de: "Scrabble - Anfänger",
      nl: "Scrabble - Beginner"
    },
    questions: [
      {
        question: {
          en: "How many letter tiles does each player start with in Scrabble?",
          es: "¿Con cuántas fichas de letras comienza cada jugador en Scrabble?",
          de: "Mit wie vielen Buchstabensteinen beginnt jeder Spieler in Scrabble?",
          nl: "Met hoeveel letterstenen begint elke speler in Scrabble?"
        },
        options: [
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "7", es: "7", de: "7", nl: "7" },
          { en: "8", es: "8", de: "8", nl: "8" }
        ],
        correct: 2,
        explanation: {
          en: "Each player starts with exactly 7 letter tiles in their rack. This is the standard number across all official Scrabble rules worldwide.",
          es: "Cada jugador comienza con exactamente 7 fichas de letras en su atril. Este es el número estándar en todas las reglas oficiales de Scrabble en todo el mundo.",
          de: "Jeder Spieler beginnt mit genau 7 Buchstabensteinen auf seinem Ständer. Dies ist die Standardanzahl in allen offiziellen Scrabble-Regeln weltweit.",
          nl: "Elke speler begint met precies 7 letterstenen op zijn rek. Dit is het standaardaantal in alle officiële Scrabble-regels wereldwijd."
        }
      },
      {
        question: {
          en: "What is the point value of the letter 'Q' in Scrabble?",
          es: "¿Cuál es el valor en puntos de la letra 'Q' en Scrabble?",
          de: "Wie viele Punkte ist der Buchstabe 'Q' in Scrabble wert?",
          nl: "Wat is de puntwaarde van de letter 'Q' in Scrabble?"
        },
        options: [
          { en: "8 pts", es: "8 puntos", de: "8 Punkte", nl: "8 punten" },
          { en: "10 pts", es: "10 puntos", de: "10 Punkte", nl: "10 punten" },
          { en: "12 pts", es: "12 puntos", de: "12 Punkte", nl: "12 punten" },
          { en: "15 pts", es: "15 puntos", de: "15 Punkte", nl: "15 punten" }
        ],
        correct: 1,
        explanation: {
          en: "The letter 'Q' is worth 10 points in Scrabble, making it one of the highest-value letters along with 'Z'. Its high value reflects its difficulty in usage.",
          es: "La letra 'Q' vale 10 puntos en Scrabble, convirtiéndola en una de las letras de mayor valor junto con la 'Z'. Su alto valor refleja su dificultad de uso.",
          de: "Der Buchstabe 'Q' ist 10 Punkte in Scrabble wert und gehört damit zusammen mit 'Z' zu den wertvollsten Buchstaben. Sein hoher Wert spiegelt seine Schwierigkeit im Gebrauch wider.",
          nl: "De letter 'Q' is 10 punten waard in Scrabble, waardoor het een van de letters met de hoogste waarde is, samen met 'Z'. De hoge waarde weerspiegelt de moeilijkheid van het gebruik."
        }
      },
      {
        question: {
          en: "What color is the center star square on a Scrabble board?",
          es: "¿De qué color es el cuadrado de estrella central en un tablero de Scrabble?",
          de: "Welche Farbe hat das zentrale Sternfeld auf einem Scrabble-Brett?",
          nl: "Welke kleur heeft het centrale stervierkant op een Scrabble-bord?"
        },
        options: [
          { en: "Red", es: "Rojo", de: "Rot", nl: "Rood" },
          { en: "Blue", es: "Azul", de: "Blau", nl: "Blauw" },
          { en: "Pink", es: "Rosa", de: "Rosa", nl: "Roze" },
          { en: "Gold", es: "Dorado", de: "Gold", nl: "Goud" }
        ],
        correct: 2,
        explanation: {
          en: "The center star square is pink (or sometimes described as magenta). This square doubles the score of the first word played and serves as the starting point.",
          es: "El cuadrado de estrella central es rosa (o a veces descrito como magenta). Este cuadrado duplica la puntuación de la primera palabra jugada y sirve como punto de partida.",
          de: "Das zentrale Sternfeld ist rosa (oder manchmal als magenta beschrieben). Dieses Feld verdoppelt die Punkte des ersten gespielten Wortes und dient als Startpunkt.",
          nl: "Het centrale stervierkant is roze (of soms omschreven als magenta). Dit vierkant verdubbelt de score van het eerste gespeelde woord en dient als startpunt."
        }
      },
      {
        question: {
          en: "How many blank tiles are there in a standard Scrabble set?",
          es: "¿Cuántas fichas en blanco hay en un set estándar de Scrabble?",
          de: "Wie viele Blanko-Steine gibt es in einem Standard-Scrabble-Set?",
          nl: "Hoeveel blanco stenen zijn er in een standaard Scrabble-set?"
        },
        options: [
          { en: "1", es: "1", de: "1", nl: "1" },
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "4", es: "4", de: "4", nl: "4" }
        ],
        correct: 1,
        explanation: {
          en: "There are exactly 2 blank tiles in a standard Scrabble set. These tiles can represent any letter and are worth 0 points, but are extremely valuable for creating words.",
          es: "Hay exactamente 2 fichas en blanco en un set estándar de Scrabble. Estas fichas pueden representar cualquier letra y valen 0 puntos, pero son extremadamente valiosas para crear palabras.",
          de: "Es gibt genau 2 Blanko-Steine in einem Standard-Scrabble-Set. Diese Steine können jeden Buchstaben darstellen und sind 0 Punkte wert, aber extrem wertvoll für die Wortbildung.",
          nl: "Er zijn precies 2 blanco stenen in een standaard Scrabble-set. Deze stenen kunnen elke letter voorstellen en zijn 0 punten waard, maar zijn extreem waardevol voor het maken van woorden."
        }
      },
      {
        question: {
          en: "What bonus do you get for using all 7 tiles in one turn?",
          es: "¿Qué bonificación obtienes por usar las 7 fichas en un turno?",
          de: "Welchen Bonus erhältst du, wenn du alle 7 Steine in einem Zug verwendest?",
          nl: "Welke bonus krijg je voor het gebruiken van alle 7 stenen in één beurt?"
        },
        options: [
          { en: "25 pts", es: "25 puntos", de: "25 Punkte", nl: "25 punten" },
          { en: "35 pts", es: "35 puntos", de: "35 Punkte", nl: "35 punten" },
          { en: "50 pts", es: "50 puntos", de: "50 Punkte", nl: "50 punten" },
          { en: "75 pts", es: "75 puntos", de: "75 Punkte", nl: "75 punten" }
        ],
        correct: 2,
        explanation: {
          en: "Using all 7 tiles in one turn is called a 'bingo' and earns a 50-point bonus on top of the word's regular score. This is a significant strategic advantage.",
          es: "Usar las 7 fichas en un turno se llama 'bingo' y gana una bonificación de 50 puntos además de la puntuación regular de la palabra. Esta es una ventaja estratégica significativa.",
          de: "Alle 7 Steine in einem Zug zu verwenden wird 'Bingo' genannt und bringt 50 Bonuspunkte zusätzlich zur regulären Wortpunktzahl. Das ist ein erheblicher strategischer Vorteil.",
          nl: "Het gebruiken van alle 7 stenen in één beurt wordt een 'bingo' genoemd en levert een bonus van 50 punten op bovenop de reguliere score van het woord. Dit is een significant strategisch voordeel."
        }
      },
      {
        question: {
          en: "Which premium square multiplies the entire word score by 3?",
          es: "¿Qué casilla premium multiplica toda la puntuación de la palabra por 3?",
          de: "Welches Premium-Feld multipliziert die gesamte Wortpunktzahl mit 3?",
          nl: "Welk premium vierkant vermenigvuldigt de hele woordscore met 3?"
        },
        options: [
          { en: "Double Letter Score", es: "Doble Puntuación de Letra", de: "Doppelte Buchstabenwertung", nl: "Dubbele Letter Score" },
          { en: "Triple Letter Score", es: "Triple Puntuación de Letra", de: "Dreifache Buchstabenwertung", nl: "Drievoudige Letter Score" },
          { en: "Double Word Score", es: "Doble Puntuación de Palabra", de: "Doppelte Wortwertung", nl: "Dubbele Woord Score" },
          { en: "Triple Word Score", es: "Triple Puntuación de Palabra", de: "Dreifache Wortwertung", nl: "Drievoudige Woord Score" }
        ],
        correct: 3,
        explanation: {
          en: "The Triple Word Score (TWS) square multiplies the entire word score by 3. These are the dark red squares located at the corners and edges of the board.",
          es: "La casilla Triple Puntuación de Palabra (TWS) multiplica toda la puntuación de la palabra por 3. Estas son las casillas rojas oscuras ubicadas en las esquinas y bordes del tablero.",
          de: "Das Dreifache Wortwertung (TWS) Feld multipliziert die gesamte Wortpunktzahl mit 3. Das sind die dunkelroten Felder an den Ecken und Rändern des Brettes.",
          nl: "Het Drievoudige Woord Score (TWS) vierkant vermenigvuldigt de hele woordscore met 3. Dit zijn de donkerrode vierkanten aan de hoeken en randen van het bord."
        }
      },
      {
        question: {
          en: "What happens if you can't make a word on your turn?",
          es: "¿Qué pasa si no puedes formar una palabra en tu turno?",
          de: "Was passiert, wenn du in deinem Zug kein Wort bilden kannst?",
          nl: "Wat gebeurt er als je geen woord kunt maken in jouw beurt?"
        },
        options: [
          { en: "You lose the game", es: "Pierdes el juego", de: "Du verlierst das Spiel", nl: "Je verliest het spel" },
          { en: "You skip your turn", es: "Te saltas tu turno", de: "Du überspringst deinen Zug", nl: "Je slaat je beurt over" },
          { en: "You exchange tiles", es: "Intercambias fichas", de: "Du tauschst Steine aus", nl: "Je wisselt stenen uit" },
          { en: "You must pass", es: "Debes pasar", de: "Du musst passen", nl: "Je moet passen" }
        ],
        correct: 2,
        explanation: {
          en: "If you can't make a word, you can exchange some or all of your tiles for new ones from the bag, but you forfeit your turn. This is a strategic option when stuck with difficult letters.",
          es: "Si no puedes formar una palabra, puedes intercambiar algunas o todas tus fichas por nuevas de la bolsa, pero pierdes tu turno. Esta es una opción estratégica cuando te quedas con letras difíciles.",
          de: "Wenn du kein Wort bilden kannst, kannst du einige oder alle deine Steine gegen neue aus dem Beutel tauschen, aber du verlierst deinen Zug. Das ist eine strategische Option bei schwierigen Buchstaben.",
          nl: "Als je geen woord kunt maken, kun je enkele of alle stenen inruilen voor nieuwe uit de zak, maar je verliest je beurt. Dit is een strategische optie wanneer je vastzit met moeilijke letters."
        }
      },
      {
        question: {
          en: "How many points is the letter 'E' worth in Scrabble?",
          es: "¿Cuántos puntos vale la letra 'E' en Scrabble?",
          de: "Wie viele Punkte ist der Buchstabe 'E' in Scrabble wert?",
          nl: "Hoeveel punten is de letter 'E' waard in Scrabble?"
        },
        options: [
          { en: "1 point", es: "1 punto", de: "1 Punkt", nl: "1 punt" },
          { en: "2 pts", es: "2 puntos", de: "2 Punkte", nl: "2 punten" },
          { en: "3 pts", es: "3 puntos", de: "3 Punkte", nl: "3 punten" },
          { en: "4 pts", es: "4 puntos", de: "4 Punkte", nl: "4 punten" }
        ],
        correct: 0,
        explanation: {
          en: "The letter 'E' is worth only 1 point because it's the most common letter in English. There are 12 'E' tiles in a standard Scrabble set.",
          es: "La letra 'E' vale solo 1 punto porque es la letra más común en inglés. Hay 12 fichas de 'E' en un set estándar de Scrabble.",
          de: "Der Buchstabe 'E' ist nur 1 Punkt wert, weil er der häufigste Buchstabe im Englischen ist. Es gibt 12 'E'-Steine in einem Standard-Scrabble-Set.",
          nl: "De letter 'E' is slechts 1 punt waard omdat het de meest voorkomende letter in het Engels is. Er zijn 12 'E'-stenen in een standaard Scrabble-set."
        }
      },
      {
        question: {
          en: "What is the standard size of a Scrabble board?",
          es: "¿Cuál es el tamaño estándar de un tablero de Scrabble?",
          de: "Wie groß ist ein Standard-Scrabble-Brett?",
          nl: "Wat is de standaardgrootte van een Scrabble-bord?"
        },
        options: [
          { en: "13x13", es: "13x13", de: "13x13", nl: "13x13" },
          { en: "15x15", es: "15x15", de: "15x15", nl: "15x15" },
          { en: "17x17", es: "17x17", de: "17x17", nl: "17x17" },
          { en: "19x19", es: "19x19", de: "19x19", nl: "19x19" }
        ],
        correct: 1,
        explanation: {
          en: "A standard Scrabble board is 15x15 squares, providing 225 total squares for tile placement. The center square is at position (8,8) counting from 1.",
          es: "Un tablero estándar de Scrabble es de 15x15 casillas, proporcionando 225 casillas totales para la colocación de fichas. La casilla central está en la posición (8,8) contando desde 1.",
          de: "Ein Standard-Scrabble-Brett ist 15x15 Felder groß und bietet 225 Felder insgesamt für die Steinplatzierung. Das zentrale Feld befindet sich an Position (8,8), von 1 an gezählt.",
          nl: "Een standaard Scrabble-bord is 15x15 vierkanten, wat 225 totale vierkanten biedt voor steenplaatsing. Het centrale vierkant bevindt zich op positie (8,8) tellend vanaf 1."
        }
      },
      {
        question: {
          en: "Can you play words diagonally in Scrabble?",
          es: "¿Puedes jugar palabras en diagonal en Scrabble?",
          de: "Kannst du Wörter diagonal in Scrabble spielen?",
          nl: "Kun je woorden diagonaal spelen in Scrabble?"
        },
        options: [
          { en: "Yes, always", es: "Sí, siempre", de: "Ja, immer", nl: "Ja, altijd" },
          { en: "No, never", es: "No, nunca", de: "Nein, niemals", nl: "Nee, nooit" },
          { en: "Only on corners", es: "Solo en esquinas", de: "Nur an Ecken", nl: "Alleen op hoeken" },
          { en: "Only 3-letter words", es: "Solo palabras de 3 letras", de: "Nur 3-Buchstaben-Wörter", nl: "Alleen 3-letterwoorden" }
        ],
        correct: 1,
        explanation: {
          en: "Words can only be played horizontally (left to right) or vertically (top to bottom) in Scrabble. Diagonal placement is not allowed in the official rules.",
          es: "Las palabras solo se pueden jugar horizontalmente (de izquierda a derecha) o verticalmente (de arriba hacia abajo) en Scrabble. La colocación diagonal no está permitida en las reglas oficiales.",
          de: "Wörter können in Scrabble nur horizontal (von links nach rechts) oder vertikal (von oben nach unten) gespielt werden. Diagonale Platzierung ist in den offiziellen Regeln nicht erlaubt.",
          nl: "Woorden kunnen alleen horizontaal (van links naar rechts) of verticaal (van boven naar beneden) gespeeld worden in Scrabble. Diagonale plaatsing is niet toegestaan in de officiële regels."
        }
      },
      {
        question: {
          en: "What must the first word played touch?",
          es: "¿Qué debe tocar la primera palabra jugada?",
          de: "Was muss das erste gespielte Wort berühren?",
          nl: "Wat moet het eerste gespeelde woord raken?"
        },
        options: [
          { en: "Any edge", es: "Cualquier borde", de: "Jeder Rand", nl: "Elke rand" },
          { en: "A corner", es: "Una esquina", de: "Eine Ecke", nl: "Een hoek" },
          { en: "The center star", es: "La estrella central", de: "Den zentralen Stern", nl: "De centrale ster" },
          { en: "Any premium square", es: "Cualquier casilla premium", de: "Jedes Premium-Feld", nl: "Elk premium vierkant" }
        ],
        correct: 2,
        explanation: {
          en: "The first word played must pass through the center star square. This word gets doubled points and establishes the starting point for all subsequent words.",
          es: "La primera palabra jugada debe pasar por la casilla de estrella central. Esta palabra obtiene puntos duplicados y establece el punto de partida para todas las palabras subsiguientes.",
          de: "Das erste gespielte Wort muss durch das zentrale Sternfeld gehen. Dieses Wort erhält doppelte Punkte und etabliert den Startpunkt für alle nachfolgenden Wörter.",
          nl: "Het eerste gespeelde woord moet door het centrale stervierkant gaan. Dit woord krijgt dubbele punten en vestigt het startpunt voor alle volgende woorden."
        }
      },
      {
        question: {
          en: "How many total tiles are in a complete Scrabble set?",
          es: "¿Cuántas fichas en total hay en un set completo de Scrabble?",
          de: "Wie viele Steine insgesamt sind in einem vollständigen Scrabble-Set?",
          nl: "Hoeveel stenen in totaal zijn er in een complete Scrabble-set?"
        },
        options: [
          { en: "98", es: "98", de: "98", nl: "98" },
          { en: "100", es: "100", de: "100", nl: "100" },
          { en: "102", es: "102", de: "102", nl: "102" },
          { en: "104", es: "104", de: "104", nl: "104" }
        ],
        correct: 1,
        explanation: {
          en: "A complete Scrabble set contains exactly 100 letter tiles. This includes 98 letter tiles plus 2 blank tiles that can represent any letter.",
          es: "Un set completo de Scrabble contiene exactamente 100 fichas de letras. Esto incluye 98 fichas de letras más 2 fichas en blanco que pueden representar cualquier letra.",
          de: "Ein vollständiges Scrabble-Set enthält genau 100 Buchstabensteine. Das umfasst 98 Buchstabensteine plus 2 Blanko-Steine, die jeden Buchstaben darstellen können.",
          nl: "Een complete Scrabble-set bevat precies 100 letterstenen. Dit omvat 98 letterstenen plus 2 blanco stenen die elke letter kunnen voorstellen."
        }
      },
      {
        question: {
          en: "Which letters are worth 8 points each in Scrabble?",
          es: "¿Qué letras valen 8 puntos cada una en Scrabble?",
          de: "Welche Buchstaben sind jeweils 8 Punkte in Scrabble wert?",
          nl: "Welke letters zijn elk 8 punten waard in Scrabble?"
        },
        options: [
          { en: "F and H", es: "F y H", de: "F und H", nl: "F en H" },
          { en: "J and X", es: "J y X", de: "J und X", nl: "J en X" },
          { en: "K and W", es: "K y W", de: "K und W", nl: "K en W" },
          { en: "V and Y", es: "V y Y", de: "V und Y", nl: "V en Y" }
        ],
        correct: 1,
        explanation: {
          en: "The letters 'J' and 'X' are each worth 8 points in Scrabble. These are considered high-value letters due to their limited usage in most words.",
          es: "Las letras 'J' y 'X' valen 8 puntos cada una en Scrabble. Estas se consideran letras de alto valor debido a su uso limitado en la mayoría de las palabras.",
          de: "Die Buchstaben 'J' und 'X' sind jeweils 8 Punkte in Scrabble wert. Diese gelten als hochwertige Buchstaben aufgrund ihrer begrenzten Verwendung in den meisten Wörtern.",
          nl: "De letters 'J' en 'X' zijn elk 8 punten waard in Scrabble. Deze worden beschouwd als hoogwaardige letters vanwege hun beperkte gebruik in de meeste woorden."
        }
      },
      {
        question: {
          en: "What happens when the tile bag is empty?",
          es: "¿Qué pasa cuando la bolsa de fichas está vacía?",
          de: "Was passiert, wenn der Steinbeutel leer ist?",
          nl: "Wat gebeurt er wanneer de steenzak leeg is?"
        },
        options: [
          { en: "Game ends immediately", es: "El juego termina inmediatamente", de: "Spiel endet sofort", nl: "Spel eindigt onmiddellijk" },
          { en: "Continue playing", es: "Continuar hasta que se usen todas las fichas", de: "Weitermachen bis alle Steine verwendet sind", nl: "Doorgaan tot alle stenen gebruikt zijn" },
          { en: "Players get new tiles", es: "Los jugadores obtienen nuevas fichas", de: "Spieler erhalten neue Steine", nl: "Spelers krijgen nieuwe stenen" },
          { en: "Restart the game", es: "Reiniciar el juego", de: "Spiel neu starten", nl: "Spel opnieuw starten" }
        ],
        correct: 1,
        explanation: {
          en: "When the tile bag is empty, players continue playing with their remaining tiles until one player uses all their tiles or no more plays are possible.",
          es: "Cuando la bolsa de fichas está vacía, los jugadores continúan jugando con sus fichas restantes hasta que un jugador use todas sus fichas o no sean posibles más jugadas.",
          de: "Wenn der Steinbeutel leer ist, spielen die Spieler mit ihren verbleibenden Steinen weiter, bis ein Spieler alle seine Steine verwendet hat oder keine weiteren Züge möglich sind.",
          nl: "Wanneer de steenzak leeg is, spelen spelers door met hun resterende stenen totdat één speler al zijn stenen gebruikt of er geen verdere zetten mogelijk zijn."
        }
      },
      {
        question: {
          en: "Can you challenge a word in Scrabble?",
          es: "¿Puedes desafiar una palabra en Scrabble?",
          de: "Kannst du ein Wort in Scrabble herausfordern?",
          nl: "Kun je een woord uitdagen in Scrabble?"
        },
        options: [
          { en: "No, never allowed", es: "No, nunca permitido", de: "Nein, niemals erlaubt", nl: "Nee, nooit toegestaan" },
          { en: "Yes, before next turn", es: "Sí, antes del siguiente turno", de: "Ja, vor dem nächsten Zug", nl: "Ja, voor de volgende beurt" },
          { en: "Only by tournament judge", es: "Solo por el juez del torneo", de: "Nur durch Turnierrichter", nl: "Alleen door toernooijudge" },
          { en: "Yes, anytime during game", es: "Sí, en cualquier momento del juego", de: "Ja, jederzeit während des Spiels", nl: "Ja, altijd tijdens het spel" }
        ],
        correct: 1,
        explanation: {
          en: "Players can challenge a word before the next player takes their turn. If the word is invalid, the player removes their tiles and loses their turn.",
          es: "Los jugadores pueden desafiar una palabra antes de que el siguiente jugador tome su turno. Si la palabra es inválida, el jugador quita sus fichas y pierde su turno.",
          de: "Spieler können ein Wort herausfordern, bevor der nächste Spieler an der Reihe ist. Wenn das Wort ungültig ist, entfernt der Spieler seine Steine und verliert seinen Zug.",
          nl: "Spelers kunnen een woord uitdagen voordat de volgende speler aan de beurt is. Als het woord ongeldig is, haalt de speler zijn stenen weg en verliest zijn beurt."
        }
      },
      {
        question: {
          en: "What is the minimum word length in Scrabble?",
          es: "¿Cuál es la longitud mínima de palabra en Scrabble?",
          de: "Wie lang ist die Mindestlänge eines Wortes in Scrabble?",
          nl: "Wat is de minimale woordlengte in Scrabble?"
        },
        options: [
          { en: "1 letter", es: "1 letra", de: "1 Buchstabe", nl: "1 letter" },
          { en: "2 letters", es: "2 letras", de: "2 Buchstaben", nl: "2 letters" },
          { en: "3 letters", es: "3 letras", de: "3 Buchstaben", nl: "3 letters" },
          { en: "4 letters", es: "4 letras", de: "4 Buchstaben", nl: "4 letters" }
        ],
        correct: 1,
        explanation: {
          en: "The minimum word length in Scrabble is 2 letters. Single letters are not considered valid words except 'A' and 'I' in some official dictionaries.",
          es: "La longitud mínima de palabra en Scrabble es de 2 letras. Las letras individuales no se consideran palabras válidas excepto 'A' e 'I' en algunos diccionarios oficiales.",
          de: "Die Mindestlänge eines Wortes in Scrabble beträgt 2 Buchstaben. Einzelne Buchstaben gelten nicht als gültige Wörter, außer 'A' und 'I' in einigen offiziellen Wörterbüchern.",
          nl: "De minimale woordlengte in Scrabble is 2 letters. Enkele letters worden niet beschouwd als geldige woorden behalve 'A' en 'I' in sommige officiële woordenboeken."
        }
      },
      {
        question: {
          en: "How do you determine who goes first in Scrabble?",
          es: "¿Cómo determinas quién va primero en Scrabble?",
          de: "Wie bestimmst du, wer in Scrabble anfängt?",
          nl: "Hoe bepaal je wie als eerste gaat in Scrabble?"
        },
        options: [
          { en: "Oldest player starts", es: "El jugador más viejo comienza", de: "Ältester Spieler beginnt", nl: "Oudste speler begint" },
          { en: "Draw nearest A", es: "Sacar fichas, más cerca de A", de: "Steine ziehen, nächste zu A", nl: "Stenen trekken, dichtst bij A" },
          { en: "Roll dice", es: "Tirar dados", de: "Würfel werfen", nl: "Dobbelstenen gooien" },
          { en: "Flip a coin", es: "Lanzar una moneda", de: "Münze werfen", nl: "Munt opgooien" }
        ],
        correct: 1,
        explanation: {
          en: "Each player draws one tile from the bag. The player whose tile is closest to the beginning of the alphabet (closest to 'A') goes first. Blank tiles go first.",
          es: "Cada jugador saca una ficha de la bolsa. El jugador cuya ficha esté más cerca del inicio del alfabeto (más cerca de 'A') va primero. Las fichas en blanco van primero.",
          de: "Jeder Spieler zieht einen Stein aus dem Beutel. Der Spieler, dessen Stein dem Anfang des Alphabets am nächsten ist (am nächsten zu 'A'), beginnt. Blanko-Steine gehen zuerst.",
          nl: "Elke speler trekt één steen uit de zak. De speler wiens steen het dichtst bij het begin van het alfabet ligt (dichtst bij 'A') gaat als eerste. Blanco stenen gaan eerst."
        }
      },
      {
        question: {
          en: "What happens to unused tiles at the end of the game?",
          es: "¿Qué pasa con las fichas no usadas al final del juego?",
          de: "Was passiert mit nicht verwendeten Steinen am Ende des Spiels?",
          nl: "Wat gebeurt er met ongebruikte stenen aan het einde van het spel?"
        },
        options: [
          { en: "Added to winner's score", es: "Añadidas a la puntuación del ganador", de: "Zu Gewinnerpunktzahl hinzugefügt", nl: "Toegevoegd aan winnaarsscore" },
          { en: "Subtracted from player's score", es: "Restadas de la puntuación del jugador", de: "Von Spielerpunktzahl abgezogen", nl: "Afgetrokken van spelerscore" },
          { en: "Ignored completely", es: "Ignoradas completamente", de: "Völlig ignoriert", nl: "Volledig genegeerd" },
          { en: "Count as bonus pts", es: "Cuentan como puntos de bonificación", de: "Zählen als Bonuspunkte", nl: "Tellen als bonuspunten" }
        ],
        correct: 1,
        explanation: {
          en: "At the end of the game, the point values of all unused tiles remaining in each player's rack are subtracted from that player's score.",
          es: "Al final del juego, los valores de puntos de todas las fichas no usadas que quedan en el atril de cada jugador se restan de la puntuación de ese jugador.",
          de: "Am Ende des Spiels werden die Punktwerte aller nicht verwendeten Steine, die im Ständer jedes Spielers verbleiben, von der Punktzahl dieses Spielers abgezogen.",
          nl: "Aan het einde van het spel worden de puntwaarden van alle ongebruikte stenen die in elke spelers rek overblijven afgetrokken van die spelers score."
        }
      },
      {
        question: {
          en: "Can you add letters to both ends of an existing word?",
          es: "¿Puedes añadir letras a ambos extremos de una palabra existente?",
          de: "Kannst du Buchstaben an beide Enden eines bestehenden Wortes hinzufügen?",
          nl: "Kun je letters aan beide uiteinden van een bestaand woord toevoegen?"
        },
        options: [
          { en: "No, only one end", es: "No, solo un extremo", de: "Nein, nur ein Ende", nl: "Nee, alleen één uiteinde" },
          { en: "Yes, in same turn", es: "Sí, en el mismo turno", de: "Ja, im selben Zug", nl: "Ja, in dezelfde beurt" },
          { en: "Only with premium squares", es: "Solo con casillas premium", de: "Nur mit Premium-Feldern", nl: "Alleen met premium vierkanten" },
          { en: "Yes, but separately", es: "Sí, pero por separado", de: "Ja, aber getrennt", nl: "Ja, maar apart" }
        ],
        correct: 1,
        explanation: {
          en: "Yes, you can add letters to both ends of an existing word in the same turn, as long as all resulting words are valid and connected to existing tiles.",
          es: "Sí, puedes añadir letras a ambos extremos de una palabra existente en el mismo turno, siempre que todas las palabras resultantes sean válidas y estén conectadas a fichas existentes.",
          de: "Ja, du kannst in demselben Zug Buchstaben an beide Enden eines bestehenden Wortes hinzufügen, solange alle resultierenden Wörter gültig und mit bestehenden Steinen verbunden sind.",
          nl: "Ja, je kunt letters aan beide uiteinden van een bestaand woord toevoegen in dezelfde beurt, zolang alle resulterende woorden geldig zijn en verbonden met bestaande stenen."
        }
      },
      {
        question: {
          en: "What is a 'bingo' in Scrabble?",
          es: "¿Qué es un 'bingo' en Scrabble?",
          de: "Was ist ein 'Bingo' in Scrabble?",
          nl: "Wat is een 'bingo' in Scrabble?"
        },
        options: [
          { en: "Using all 7 tiles in one turn", es: "Usar las 7 fichas en un turno", de: "Alle 7 Steine in einem Zug verwenden", nl: "Alle 7 stenen in één beurt gebruiken" },
          { en: "Getting 100 points in one play", es: "Obtener 100 puntos en una jugada", de: "100 Punkte in einem Spielzug erhalten", nl: "100 punten krijgen in één zet" },
          { en: "Spelling a 7-letter word", es: "Deletrear una palabra de 7 letras", de: "Ein 7-Buchstaben-Wort buchstabieren", nl: "Een woord van 7 letters spellen" },
          { en: "Covering all premium squares", es: "Cubrir todas las casillas premium", de: "Alle Premium-Felder abdecken", nl: "Alle premium vierkanten bedekken" }
        ],
        correct: 0,
        explanation: {
          en: "A 'bingo' is achieved when a player uses all 7 tiles from their rack in a single turn, earning a 50-point bonus in addition to the word's regular score.",
          es: "Un 'bingo' se logra cuando un jugador usa las 7 fichas de su atril en un solo turno, ganando una bonificación de 50 puntos además de la puntuación regular de la palabra.",
          de: "Ein 'Bingo' wird erreicht, wenn ein Spieler alle 7 Steine von seinem Ständer in einem einzigen Zug verwendet und zusätzlich zur regulären Punktzahl des Wortes einen 50-Punkte-Bonus erhält.",
          nl: "Een 'bingo' wordt behaald wanneer een speler alle 7 stenen van zijn rek in één beurt gebruikt, waarmee hij een bonus van 50 punten verdient bovenop de gewone score van het woord."
        }
      },
      {
        question: {
          en: "What color are the Triple Letter Score squares?",
          es: "¿De qué color son las casillas Triple Puntuación de Letra?",
          de: "Welche Farbe haben die Dreifache Buchstabenwertung Felder?",
          nl: "Welke kleur hebben de Drievoudige Letter Score vierkanten?"
        },
        options: [
          { en: "Light blue", es: "Azul claro", de: "Hellblau", nl: "Lichtblauw" },
          { en: "Dark blue", es: "Azul oscuro", de: "Dunkelblau", nl: "Donkerblauw" },
          { en: "Green", es: "Verde", de: "Grün", nl: "Groen" },
          { en: "Orange", es: "Naranja", de: "Orange", nl: "Oranje" }
        ],
        correct: 1,
        explanation: {
          en: "Triple Letter Score squares are dark blue. These squares multiply the value of a single letter by 3 when a tile is placed on them.",
          es: "Las casillas Triple Puntuación de Letra son azul oscuro. Estas casillas multiplican el valor de una sola letra por 3 cuando se coloca una ficha en ellas.",
          de: "Dreifache Buchstabenwertung Felder sind dunkelblau. Diese Felder multiplizieren den Wert eines einzelnen Buchstabens mit 3, wenn ein Stein darauf platziert wird.",
          nl: "Drievoudige Letter Score vierkanten zijn donkerblauw. Deze vierkanten vermenigvuldigen de waarde van een enkele letter met 3 wanneer er een steen op wordt geplaatst."
        }
      },
      {
        question: {
          en: "How many points is the letter 'Z' worth?",
          es: "¿Cuántos puntos vale la letra 'Z'?",
          de: "Wie viele Punkte ist der Buchstabe 'Z' wert?",
          nl: "Hoeveel punten is de letter 'Z' waard?"
        },
        options: [
          { en: "8 pts", es: "8 puntos", de: "8 Punkte", nl: "8 punten" },
          { en: "10 pts", es: "10 puntos", de: "10 Punkte", nl: "10 punten" },
          { en: "12 pts", es: "12 puntos", de: "12 Punkte", nl: "12 punten" },
          { en: "15 pts", es: "15 puntos", de: "15 Punkte", nl: "15 punten" }
        ],
        correct: 1,
        explanation: {
          en: "The letter 'Z' is worth 10 points, tied with 'Q' as the highest-value letters in Scrabble. Only one 'Z' tile exists in a standard set.",
          es: "La letra 'Z' vale 10 puntos, empatada con la 'Q' como las letras de mayor valor en Scrabble. Solo existe una ficha de 'Z' en un set estándar.",
          de: "Der Buchstabe 'Z' ist 10 Punkte wert, gleichauf mit 'Q' als die wertvollsten Buchstaben in Scrabble. Nur ein 'Z'-Stein existiert in einem Standard-Set.",
          nl: "De letter 'Z' is 10 punten waard, gelijk met 'Q' als de hoogst gewaardeerde letters in Scrabble. Er bestaat slechts één 'Z'-steen in een standaard set."
        }
      },
      {
        question: {
          en: "What color are Double Word Score squares?",
          es: "¿De qué color son las casillas Doble Puntuación de Palabra?",
          de: "Welche Farbe haben die Doppelte Wortwertung Felder?",
          nl: "Welke kleur hebben de Dubbele Woord Score vierkanten?"
        },
        options: [
          { en: "Pink", es: "Rosa", de: "Rosa", nl: "Roze" },
          { en: "Light red", es: "Rojo claro", de: "Hellrot", nl: "Lichtrood" },
          { en: "Yellow", es: "Amarillo", de: "Gelb", nl: "Geel" },
          { en: "Orange", es: "Naranja", de: "Orange", nl: "Oranje" }
        ],
        correct: 0,
        explanation: {
          en: "Double Word Score squares are pink (sometimes light red). These squares double the entire word score and are located diagonally from the center.",
          es: "Las casillas Doble Puntuación de Palabra son rosas (a veces rojo claro). Estas casillas duplican toda la puntuación de la palabra y están ubicadas diagonalmente desde el centro.",
          de: "Doppelte Wortwertung Felder sind rosa (manchmal hellrot). Diese Felder verdoppeln die gesamte Wortpunktzahl und befinden sich diagonal vom Zentrum.",
          nl: "Dubbele Woord Score vierkanten zijn roze (soms lichtrood). Deze vierkanten verdubbelen de hele woordscore en bevinden zich diagonaal vanaf het midden."
        }
      },
      {
        question: {
          en: "Can you play proper nouns in Scrabble?",
          es: "¿Puedes jugar nombres propios en Scrabble?",
          de: "Kannst du Eigennamen in Scrabble spielen?",
          nl: "Kun je eigennamen spelen in Scrabble?"
        },
        options: [
          { en: "Yes, always", es: "Sí, siempre", de: "Ja, immer", nl: "Ja, altijd" },
          { en: "No, not allowed", es: "No, no permitido", de: "Nein, nicht erlaubt", nl: "Nee, niet toegestaan" },
          { en: "Only place names", es: "Solo nombres de lugares", de: "Nur Ortsnamen", nl: "Alleen plaatsnamen" },
          { en: "Only people's names", es: "Solo nombres de personas", de: "Nur Personennamen", nl: "Alleen namen van mensen" }
        ],
        correct: 1,
        explanation: {
          en: "Proper nouns (names of people, places, brands) are not allowed in Scrabble. Only common nouns, verbs, adjectives, and other standard dictionary words are valid.",
          es: "Los nombres propios (nombres de personas, lugares, marcas) no están permitidos en Scrabble. Solo sustantivos comunes, verbos, adjetivos y otras palabras estándar del diccionario son válidos.",
          de: "Eigennamen (Namen von Personen, Orten, Marken) sind in Scrabble nicht erlaubt. Nur gewöhnliche Substantive, Verben, Adjektive und andere Standard-Wörterbuch-Wörter sind gültig.",
          nl: "Eigennamen (namen van mensen, plaatsen, merken) zijn niet toegestaan in Scrabble. Alleen gewone zelfstandige naamwoorden, werkwoorden, bijvoeglijke naamwoorden en andere standaard woordenboekwoorden zijn geldig."
        }
      },
      {
        question: {
          en: "How many 'E' tiles are in a standard Scrabble set?",
          es: "¿Cuántas fichas de 'E' hay en un set estándar de Scrabble?",
          de: "Wie viele 'E'-Steine gibt es in einem Standard-Scrabble-Set?",
          nl: "Hoeveel 'E'-stenen zijn er in een standaard Scrabble-set?"
        },
        options: [
          { en: "9", es: "9", de: "9", nl: "9" },
          { en: "10", es: "10", de: "10", nl: "10" },
          { en: "11", es: "11", de: "11", nl: "11" },
          { en: "12", es: "12", de: "12", nl: "12" }
        ],
        correct: 3,
        explanation: {
          en: "'E' is the most common letter in Scrabble with 12 tiles, reflecting its high frequency in English. This makes it easier to form words and use vowels.",
          es: "'E' es la letra más común en Scrabble con 12 fichas, reflejando su alta frecuencia en inglés. Esto facilita formar palabras y usar vocales.",
          de: "'E' ist der häufigste Buchstabe in Scrabble mit 12 Steinen, was seine hohe Häufigkeit im Englischen widerspiegelt. Dies erleichtert die Wortbildung und die Verwendung von Vokalen.",
          nl: "'E' is de meest voorkomende letter in Scrabble met 12 stenen, wat de hoge frequentie in het Engels weerspiegelt. Dit maakt het gemakkelijker om woorden te vormen en klinkers te gebruiken."
        }
      },
      {
        question: {
          en: "What happens if you play an invalid word?",
          es: "¿Qué pasa si juegas una palabra inválida?",
          de: "Was passiert, wenn du ein ungültiges Wort spielst?",
          nl: "Wat gebeurt er als je een ongeldig woord speelt?"
        },
        options: [
          { en: "You lose 50 points", es: "Pierdes 50 puntos", de: "Du verlierst 50 Punkte", nl: "Je verliest 50 punten" },
          { en: "You skip next turn", es: "Te saltas el siguiente turno", de: "Du überspringst den nächsten Zug", nl: "Je slaat de volgende beurt over" },
          { en: "Remove tiles, lose turn", es: "Quitar fichas, perder turno", de: "Steine entfernen, Zug verlieren", nl: "Stenen verwijderen, beurt verliezen" },
          { en: "Game ends immediately", es: "El juego termina inmediatamente", de: "Spiel endet sofort", nl: "Spel eindigt onmiddellijk" }
        ],
        correct: 2,
        explanation: {
          en: "If a word is challenged and found invalid, the player must remove their tiles from the board and lose their turn. No points are scored for that turn.",
          es: "Si una palabra es desafiada y resulta inválida, el jugador debe quitar sus fichas del tablero y pierde su turno. No se anotan puntos para ese turno.",
          de: "Wenn ein Wort herausgefordert und für ungültig befunden wird, muss der Spieler seine Steine vom Brett entfernen und verliert seinen Zug. Für diesen Zug werden keine Punkte erzielt.",
          nl: "Als een woord wordt uitgedaagd en ongeldig wordt bevonden, moet de speler zijn stenen van het bord verwijderen en verliest zijn beurt. Er worden geen punten gescoord voor die beurt."
        }
      },
      {
        question: {
          en: "How many points is a blank tile worth?",
          es: "¿Cuántos puntos vale una ficha en blanco?",
          de: "Wie viele Punkte ist ein Blanko-Stein wert?",
          nl: "Hoeveel punten is een blanco steen waard?"
        },
        options: [
          { en: "0 pts", es: "0 puntos", de: "0 Punkte", nl: "0 punten" },
          { en: "1 point", es: "1 punto", de: "1 Punkt", nl: "1 punt" },
          { en: "5 pts", es: "5 puntos", de: "5 Punkte", nl: "5 punten" },
          { en: "10 pts", es: "10 puntos", de: "10 Punkte", nl: "10 punten" }
        ],
        correct: 0,
        explanation: {
          en: "Blank tiles are worth 0 points, but they're extremely valuable because they can represent any letter, making it easier to form high-scoring words or bingos.",
          es: "Las fichas en blanco valen 0 puntos, pero son extremadamente valiosas porque pueden representar cualquier letra, facilitando formar palabras de alta puntuación o bingos.",
          de: "Blanko-Steine sind 0 Punkte wert, aber sie sind äußerst wertvoll, weil sie jeden Buchstaben darstellen können, was es einfacher macht, hochwertige Wörter oder Bingos zu bilden.",
          nl: "Blanco stenen zijn 0 punten waard, maar ze zijn extreem waardevol omdat ze elke letter kunnen voorstellen, waardoor het gemakkelijker wordt om hoogscorende woorden of bingo's te vormen."
        }
      },
      {
        question: {
          en: "What is the official dictionary for Scrabble in North America?",
          es: "¿Cuál es el diccionario oficial para Scrabble en América del Norte?",
          de: "Was ist das offizielle Wörterbuch für Scrabble in Nordamerika?",
          nl: "Wat is het officiële woordenboek voor Scrabble in Noord-Amerika?"
        },
        options: [
          { en: "Webster's Dictionary", es: "Diccionario Webster's", de: "Webster's Wörterbuch", nl: "Webster's Woordenboek" },
          { en: "TWL (Tournament Word List)", es: "TWL (Lista de Palabras de Torneo)", de: "TWL (Turnierwortliste)", nl: "TWL (Toernooi Woordenlijst)" },
          { en: "Oxford English Dictionary", es: "Diccionario Oxford", de: "Oxford English Dictionary", nl: "Oxford English Dictionary" },
          { en: "Collins Dictionary", es: "Diccionario Collins", de: "Collins Wörterbuch", nl: "Collins Woordenboek" }
        ],
        correct: 1,
        explanation: {
          en: "The TWL (Tournament Word List), also known as OWL (Official Word List), is the standard dictionary for Scrabble in North America. It contains all valid playable words.",
          es: "El TWL (Lista de Palabras de Torneo), también conocido como OWL (Lista Oficial de Palabras), es el diccionario estándar para Scrabble en América del Norte. Contiene todas las palabras jugables válidas.",
          de: "Die TWL (Turnierwortliste), auch bekannt als OWL (Offizielle Wortliste), ist das Standardwörterbuch für Scrabble in Nordamerika. Es enthält alle gültigen spielbaren Wörter.",
          nl: "De TWL (Toernooi Woordenlijst), ook bekend als OWL (Officiële Woordenlijst), is het standaard woordenboek voor Scrabble in Noord-Amerika. Het bevat alle geldige speelbare woorden."
        }
      },
      {
        question: {
          en: "How many Double Letter Score squares are on the board?",
          es: "¿Cuántas casillas Doble Puntuación de Letra hay en el tablero?",
          de: "Wie viele Doppelte Buchstabenwertung Felder gibt es auf dem Brett?",
          nl: "Hoeveel Dubbele Letter Score vierkanten zijn er op het bord?"
        },
        options: [
          { en: "12", es: "12", de: "12", nl: "12" },
          { en: "16", es: "16", de: "16", nl: "16" },
          { en: "20", es: "20", de: "20", nl: "20" },
          { en: "24", es: "24", de: "24", nl: "24" }
        ],
        correct: 3,
        explanation: {
          en: "There are 24 Double Letter Score (light blue) squares on a standard Scrabble board. These multiply the value of a single letter by 2.",
          es: "Hay 24 casillas Doble Puntuación de Letra (azul claro) en un tablero estándar de Scrabble. Estas multiplican el valor de una sola letra por 2.",
          de: "Es gibt 24 Doppelte Buchstabenwertung (hellblaue) Felder auf einem Standard-Scrabble-Brett. Diese multiplizieren den Wert eines einzelnen Buchstabens mit 2.",
          nl: "Er zijn 24 Dubbele Letter Score (lichtblauwe) vierkanten op een standaard Scrabble-bord. Deze vermenigvuldigen de waarde van een enkele letter met 2."
        }
      },
      {
        question: {
          en: "Can you use abbreviations in Scrabble?",
          es: "¿Puedes usar abreviaturas en Scrabble?",
          de: "Kannst du Abkürzungen in Scrabble verwenden?",
          nl: "Kun je afkortingen gebruiken in Scrabble?"
        },
        options: [
          { en: "Yes, all abbreviations", es: "Sí, todas las abreviaturas", de: "Ja, alle Abkürzungen", nl: "Ja, alle afkortingen" },
          { en: "No, never allowed", es: "No, nunca permitido", de: "Nein, niemals erlaubt", nl: "Nee, nooit toegestaan" },
          { en: "Only common ones like Dr.", es: "Solo comunes como Dr.", de: "Nur übliche wie Dr.", nl: "Alleen gebruikelijke zoals Dr." },
          { en: "Only in tournaments", es: "Solo en torneos", de: "Nur in Turnieren", nl: "Alleen in toernooien" }
        ],
        correct: 1,
        explanation: {
          en: "Abbreviations are not allowed in Scrabble. Only full words that appear in the official dictionary are valid, not shortened forms like 'Dr.' or 'USA'.",
          es: "Las abreviaturas no están permitidas en Scrabble. Solo palabras completas que aparecen en el diccionario oficial son válidas, no formas abreviadas como 'Dr.' o 'USA'.",
          de: "Abkürzungen sind in Scrabble nicht erlaubt. Nur vollständige Wörter, die im offiziellen Wörterbuch erscheinen, sind gültig, nicht verkürzte Formen wie 'Dr.' oder 'USA'.",
          nl: "Afkortingen zijn niet toegestaan in Scrabble. Alleen volledige woorden die in het officiële woordenboek voorkomen zijn geldig, geen verkorte vormen zoals 'Dr.' of 'USA'."
        }
      },
      {
        question: {
          en: "What happens when a player uses their last tile?",
          es: "¿Qué pasa cuando un jugador usa su última ficha?",
          de: "Was passiert, wenn ein Spieler seinen letzten Stein verwendet?",
          nl: "Wat gebeurt er wanneer een speler zijn laatste steen gebruikt?"
        },
        options: [
          { en: "Game continues", es: "El juego continúa", de: "Spiel geht weiter", nl: "Spel gaat door" },
          { en: "Game ends", es: "El juego termina", de: "Spiel endet", nl: "Spel eindigt" },
          { en: "Player gets bonus", es: "El jugador obtiene bonificación", de: "Spieler erhält Bonus", nl: "Speler krijgt bonus" },
          { en: "All above", es: "Todas las anteriores", de: "Alle oben genannten", nl: "Alle bovenstaande" }
        ],
        correct: 3,
        explanation: {
          en: "When a player uses their last tile, the game ends, and that player gets a bonus equal to the sum of all unplayed tiles remaining on opponents' racks.",
          es: "Cuando un jugador usa su última ficha, el juego termina, y ese jugador obtiene una bonificación igual a la suma de todas las fichas no jugadas que quedan en los atriles de los oponentes.",
          de: "Wenn ein Spieler seinen letzten Stein verwendet, endet das Spiel, und dieser Spieler erhält einen Bonus in Höhe der Summe aller nicht gespielten Steine, die auf den Ständern der Gegner verbleiben.",
          nl: "Wanneer een speler zijn laatste steen gebruikt, eindigt het spel, en die speler krijgt een bonus gelijk aan de som van alle niet-gespeelde stenen die op de rekken van tegenstanders overblijven."
        }
      },
      {
        question: {
          en: "Which letter appears most frequently in a Scrabble set?",
          es: "¿Qué letra aparece con más frecuencia en un set de Scrabble?",
          de: "Welcher Buchstabe kommt am häufigsten in einem Scrabble-Set vor?",
          nl: "Welke letter komt het meest voor in een Scrabble-set?"
        },
        options: [
          { en: "A", es: "A", de: "A", nl: "A" },
          { en: "E", es: "E", de: "E", nl: "E" },
          { en: "I", es: "I", de: "I", nl: "I" },
          { en: "O", es: "O", de: "O", nl: "O" }
        ],
        correct: 1,
        explanation: {
          en: "The letter 'E' appears 12 times in a standard Scrabble set, more than any other letter. This reflects its status as the most common letter in English.",
          es: "La letra 'E' aparece 12 veces en un set estándar de Scrabble, más que cualquier otra letra. Esto refleja su estatus como la letra más común en inglés.",
          de: "Der Buchstabe 'E' kommt 12 Mal in einem Standard-Scrabble-Set vor, häufiger als jeder andere Buchstabe. Dies spiegelt seinen Status als häufigster Buchstabe im Englischen wider.",
          nl: "De letter 'E' komt 12 keer voor in een standaard Scrabble-set, meer dan elke andere letter. Dit weerspiegelt de status als meest voorkomende letter in het Engels."
        }
      },
      {
        question: {
          en: "What is the rack in Scrabble?",
          es: "¿Qué es el atril en Scrabble?",
          de: "Was ist der Ständer in Scrabble?",
          nl: "Wat is het rek in Scrabble?"
        },
        options: [
          { en: "The game board", es: "El tablero de juego", de: "Das Spielbrett", nl: "Het spelbord" },
          { en: "The tile holder", es: "El soporte de fichas", de: "Der Steinhalter", nl: "De steenhouder" },
          { en: "The score sheet", es: "La hoja de puntuación", de: "Das Punkteblatt", nl: "Het scoreblad" },
          { en: "The tile bag", es: "La bolsa de fichas", de: "Der Steinbeutel", nl: "De steenzak" }
        ],
        correct: 1,
        explanation: {
          en: "The rack is the tile holder where each player keeps their 7 letters during play. It keeps tiles hidden from opponents and organized for the player.",
          es: "El atril es el soporte de fichas donde cada jugador mantiene sus 7 letras durante el juego. Mantiene las fichas ocultas de los oponentes y organizadas para el jugador.",
          de: "Der Ständer ist der Steinhalter, wo jeder Spieler seine 7 Buchstaben während des Spiels aufbewahrt. Er hält die Steine vor Gegnern verborgen und organisiert für den Spieler.",
          nl: "Het rek is de steenhouder waar elke speler zijn 7 letters tijdens het spel bewaart. Het houdt stenen verborgen voor tegenstanders en georganiseerd voor de speler."
        }
      },
      {
        question: {
          en: "How many points is the letter 'K' worth?",
          es: "¿Cuántos puntos vale la letra 'K'?",
          de: "Wie viele Punkte ist der Buchstabe 'K' wert?",
          nl: "Hoeveel punten is de letter 'K' waard?"
        },
        options: [
          { en: "3 pts", es: "3 puntos", de: "3 Punkte", nl: "3 punten" },
          { en: "4 pts", es: "4 puntos", de: "4 Punkte", nl: "4 punten" },
          { en: "5 pts", es: "5 puntos", de: "5 Punkte", nl: "5 punten" },
          { en: "6 pts", es: "6 puntos", de: "6 Punkte", nl: "6 punten" }
        ],
        correct: 2,
        explanation: {
          en: "The letter 'K' is worth 5 points in Scrabble. It's a moderately high-value letter due to its less frequent usage in English words.",
          es: "La letra 'K' vale 5 puntos en Scrabble. Es una letra de valor moderadamente alto debido a su uso menos frecuente en palabras en inglés.",
          de: "Der Buchstabe 'K' ist 5 Punkte in Scrabble wert. Er ist ein Buchstabe mit mäßig hohem Wert aufgrund seiner weniger häufigen Verwendung in englischen Wörtern.",
          nl: "De letter 'K' is 5 punten waard in Scrabble. Het is een matig hoogwaardige letter vanwege het minder frequente gebruik in Engelse woorden."
        }
      },
      {
        question: {
          en: "Can you play foreign language words in English Scrabble?",
          es: "¿Puedes jugar palabras en idiomas extranjeros en Scrabble inglés?",
          de: "Kannst du fremdsprachige Wörter im englischen Scrabble spielen?",
          nl: "Kun je woorden in vreemde talen spelen in Engelse Scrabble?"
        },
        options: [
          { en: "Yes, all languages", es: "Sí, todos los idiomas", de: "Ja, alle Sprachen", nl: "Ja, alle talen" },
          { en: "Yes, if in English dictionary", es: "Sí, si están en diccionario inglés", de: "Ja, wenn im englischen Wörterbuch", nl: "Ja, als ze in Engels woordenboek staan" },
          { en: "No, never", es: "No, nunca", de: "Nein, niemals", nl: "Nee, nooit" },
          { en: "Only French words", es: "Solo palabras francesas", de: "Nur französische Wörter", nl: "Alleen Franse woorden" }
        ],
        correct: 1,
        explanation: {
          en: "Foreign words are allowed only if they've been adopted into English and appear in the official Scrabble dictionary (e.g., 'pizza', 'cafe').",
          es: "Las palabras extranjeras están permitidas solo si han sido adoptadas al inglés y aparecen en el diccionario oficial de Scrabble (p. ej., 'pizza', 'cafe').",
          de: "Fremdwörter sind nur erlaubt, wenn sie ins Englische übernommen wurden und im offiziellen Scrabble-Wörterbuch erscheinen (z.B. 'pizza', 'cafe').",
          nl: "Vreemde woorden zijn alleen toegestaan als ze in het Engels zijn overgenomen en in het officiële Scrabble-woordenboek voorkomen (bijv. 'pizza', 'cafe')."
        }
      },
      {
        question: {
          en: "How many Triple Word Score squares are on the board?",
          es: "¿Cuántas casillas Triple Puntuación de Palabra hay en el tablero?",
          de: "Wie viele Dreifache Wortwertung Felder gibt es auf dem Brett?",
          nl: "Hoeveel Drievoudige Woord Score vierkanten zijn er op het bord?"
        },
        options: [
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "8", es: "8", de: "8", nl: "8" },
          { en: "12", es: "12", de: "12", nl: "12" }
        ],
        correct: 2,
        explanation: {
          en: "There are 8 Triple Word Score (dark red) squares on a Scrabble board, located at the four corners and four edge positions.",
          es: "Hay 8 casillas Triple Puntuación de Palabra (rojo oscuro) en un tablero de Scrabble, ubicadas en las cuatro esquinas y cuatro posiciones de borde.",
          de: "Es gibt 8 Dreifache Wortwertung (dunkelrote) Felder auf einem Scrabble-Brett, an den vier Ecken und vier Randpositionen.",
          nl: "Er zijn 8 Drievoudige Woord Score (donkerrode) vierkanten op een Scrabble-bord, gelegen op de vier hoeken en vier randposities."
        }
      },
      {
        question: {
          en: "What is the maximum number of players in standard Scrabble?",
          es: "¿Cuál es el número máximo de jugadores en Scrabble estándar?",
          de: "Was ist die maximale Anzahl von Spielern im Standard-Scrabble?",
          nl: "Wat is het maximale aantal spelers in standaard Scrabble?"
        },
        options: [
          { en: "2 players", es: "2 jugadores", de: "2 Spieler", nl: "2 spelers" },
          { en: "3 players", es: "3 jugadores", de: "3 Spieler", nl: "3 spelers" },
          { en: "4 players", es: "4 jugadores", de: "4 Spieler", nl: "4 spelers" },
          { en: "6 players", es: "6 jugadores", de: "6 Spieler", nl: "6 spelers" }
        ],
        correct: 2,
        explanation: {
          en: "Standard Scrabble is designed for 2-4 players. While technically possible with more, 4 players is the recommended maximum for optimal gameplay.",
          es: "Scrabble estándar está diseñado para 2-4 jugadores. Aunque técnicamente es posible con más, 4 jugadores es el máximo recomendado para un juego óptimo.",
          de: "Standard-Scrabble ist für 2-4 Spieler konzipiert. Obwohl technisch mit mehr möglich, sind 4 Spieler das empfohlene Maximum für optimales Gameplay.",
          nl: "Standaard Scrabble is ontworpen voor 2-4 spelers. Hoewel technisch mogelijk met meer, is 4 spelers het aanbevolen maximum voor optimaal spel."
        }
      },
      {
        question: {
          en: "How many letter 'S' tiles are in a standard set?",
          es: "¿Cuántas fichas de 'S' hay en un set estándar?",
          de: "Wie viele 'S'-Steine gibt es in einem Standard-Set?",
          nl: "Hoeveel 'S'-stenen zijn er in een standaard set?"
        },
        options: [
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "8", es: "8", de: "8", nl: "8" }
        ],
        correct: 1,
        explanation: {
          en: "There are 4 'S' tiles in a standard Scrabble set. The 'S' is valuable for making plurals and extending existing words, worth 1 point each.",
          es: "Hay 4 fichas de 'S' en un set estándar de Scrabble. La 'S' es valiosa para hacer plurales y extender palabras existentes, vale 1 punto cada una.",
          de: "Es gibt 4 'S'-Steine in einem Standard-Scrabble-Set. Das 'S' ist wertvoll für die Bildung von Pluralen und die Erweiterung bestehender Wörter, je 1 Punkt wert.",
          nl: "Er zijn 4 'S'-stenen in een standaard Scrabble-set. De 'S' is waardevol voor het maken van meervouden en het uitbreiden van bestaande woorden, elk 1 punt waard."
        }
      },
      {
        question: {
          en: "What color are Double Letter Score squares?",
          es: "¿De qué color son las casillas Doble Puntuación de Letra?",
          de: "Welche Farbe haben die Doppelte Buchstabenwertung Felder?",
          nl: "Welke kleur hebben de Dubbele Letter Score vierkanten?"
        },
        options: [
          { en: "Light blue", es: "Azul claro", de: "Hellblau", nl: "Lichtblauw" },
          { en: "Dark blue", es: "Azul oscuro", de: "Dunkelblau", nl: "Donkerblauw" },
          { en: "Green", es: "Verde", de: "Grün", nl: "Groen" },
          { en: "Yellow", es: "Amarillo", de: "Gelb", nl: "Geel" }
        ],
        correct: 0,
        explanation: {
          en: "Double Letter Score squares are light blue. These squares double the value of a single letter tile placed on them before calculating the word score.",
          es: "Las casillas Doble Puntuación de Letra son azul claro. Estas casillas duplican el valor de una sola ficha de letra colocada en ellas antes de calcular la puntuación de la palabra.",
          de: "Doppelte Buchstabenwertung Felder sind hellblau. Diese Felder verdoppeln den Wert eines einzelnen Buchstabensteins, der darauf platziert wird, bevor die Wortpunktzahl berechnet wird.",
          nl: "Dubbele Letter Score vierkanten zijn lichtblauw. Deze vierkanten verdubbelen de waarde van een enkele lettersteen die erop wordt geplaatst voordat de woordscore wordt berekend."
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
