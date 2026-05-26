// Go - level3
// Total questions: 100

module.exports = {
    questions: [
        {
            "question": {
                "en": "What is a 'kakari' in Go?",
                "es": "¿Qué es un 'kakari' en Go?",
                "de": "Was ist ein 'Kakari' bei Go?",
                "nl": "Wat is een 'kakari' bij Go?"
            },
            "options": [
                {
                    "en": "An approach move to a corner stone",
                    "es": "Un movimiento de acercamiento a una piedra de esquina",
                    "de": "Ein Annäherungszug zu einem Eckstein",
                    "nl": "Een benaderingszet naar een hoeksteen"
                },
                {
                    "en": "A defensive move",
                    "es": "Un movimiento defensivo",
                    "de": "Ein defensiver Zug",
                    "nl": "Een verdedigende zet"
                },
                {
                    "en": "A passing move",
                    "es": "Un movimiento de paso",
                    "de": "Ein Passzug",
                    "nl": "Een paszet"
                },
                {
                    "en": "Capturing a group",
                    "es": "Capturar un grupo",
                    "de": "Eine Gruppe fangen",
                    "nl": "Een groep vangen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A kakari is an approach move played near a single opponent stone in the corner, challenging their claim to corner territory.",
                "es": "Un kakari es un movimiento de acercamiento cerca de una piedra sola del oponente en la esquina, desafiando su territorio.",
                "de": "Ein Kakari ist ein Annäherungszug nahe einem einzelnen Eckstein des Gegners, um dessen Gebietsanspruch herauszufordern.",
                "nl": "Een kakari is een benaderingszet bij een enkele hoeksteen van de tegenstander om diens gebiedsclaim uit te dagen."
            }
        },
        {
            "question": {
                "en": "What happens if a stone has zero liberties?",
                "es": "¿Qué pasa si una piedra tiene cero libertades?",
                "de": "Was passiert wenn ein Stein null Freiheiten hat?",
                "nl": "Wat gebeurt er als een steen nul vrijheden heeft?"
            },
            "options": [
                {
                    "en": "It is captured and removed from the board",
                    "es": "Se captura y se retira del tablero",
                    "de": "Er wird gefangen und vom Brett entfernt",
                    "nl": "Hij wordt gevangen en van het bord verwijderd"
                },
                {
                    "en": "It becomes stronger",
                    "es": "Se hace más fuerte",
                    "de": "Er wird stärker",
                    "nl": "Hij wordt sterker"
                },
                {
                    "en": "It moves to another spot",
                    "es": "Se mueve a otro lugar",
                    "de": "Er bewegt sich zu einer anderen Stelle",
                    "nl": "Hij verplaatst naar een andere plek"
                },
                {
                    "en": "Nothing happens",
                    "es": "No pasa nada",
                    "de": "Nichts passiert",
                    "nl": "Er gebeurt niets"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "When a stone or group has all its liberties filled by opponent stones, it is captured and removed from the board.",
                "es": "Cuando una piedra o grupo tiene todas sus libertades llenadas por piedras del oponente, se captura y retira del tablero.",
                "de": "Wenn alle Freiheiten eines Steins oder einer Gruppe vom Gegner besetzt sind, wird er gefangen und vom Brett entfernt.",
                "nl": "Wanneer alle vrijheden van een steen of groep door de tegenstander bezet zijn, wordt hij gevangen en van het bord verwijderd."
            }
        },
        {
            "question": {
                "en": "How many liberties does a corner stone have?",
                "es": "¿Cuántas libertades tiene una piedra en la esquina?",
                "de": "Wie viele Freiheiten hat ein Eckstein?",
                "nl": "Hoeveel vrijheden heeft een hoeksteen?"
            },
            "options": [
                {
                    "en": "2",
                    "es": "2",
                    "de": "2",
                    "nl": "2"
                },
                {
                    "en": "4",
                    "es": "4",
                    "de": "4",
                    "nl": "4"
                },
                {
                    "en": "3",
                    "es": "3",
                    "de": "3",
                    "nl": "3"
                },
                {
                    "en": "1",
                    "es": "1",
                    "de": "1",
                    "nl": "1"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A stone placed on a corner intersection has only 2 liberties, making it the easiest to capture on the board.",
                "es": "Una piedra en una intersección de esquina tiene solo 2 libertades, lo que la hace la más fácil de capturar.",
                "de": "Ein Stein auf einer Eck-Kreuzung hat nur 2 Freiheiten und ist damit am leichtesten zu fangen.",
                "nl": "Een steen op een hoek-kruispunt heeft slechts 2 vrijheden, waardoor hij het makkelijkst te vangen is."
            }
        },
        {
            "question": {
                "en": "How many liberties does a side stone have?",
                "es": "¿Cuántas libertades tiene una piedra en el lado?",
                "de": "Wie viele Freiheiten hat ein Randstein?",
                "nl": "Hoeveel vrijheden heeft een randsteen?"
            },
            "options": [
                {
                    "en": "3",
                    "es": "3",
                    "de": "3",
                    "nl": "3"
                },
                {
                    "en": "2",
                    "es": "2",
                    "de": "2",
                    "nl": "2"
                },
                {
                    "en": "4",
                    "es": "4",
                    "de": "4",
                    "nl": "4"
                },
                {
                    "en": "1",
                    "es": "1",
                    "de": "1",
                    "nl": "1"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A stone placed on the side of the board (not in a corner) has 3 liberties. Center stones have 4 liberties.",
                "es": "Una piedra colocada en el lado del tablero (no en una esquina) tiene 3 libertades. Las piedras del centro tienen 4.",
                "de": "Ein Stein am Rand des Bretts (nicht in der Ecke) hat 3 Freiheiten. Steine in der Mitte haben 4.",
                "nl": "Een steen aan de zijkant van het bord (niet in een hoek) heeft 3 vrijheden. Stenen in het midden hebben er 4."
            }
        },
        {
            "question": {
                "en": "What is the purpose of creating two eyes?",
                "es": "¿Cuál es el propósito de crear dos ojos?",
                "de": "Was ist der Zweck von zwei Augen?",
                "nl": "Wat is het doel van het maken van twee ogen?"
            },
            "options": [
                {
                    "en": "To make a group permanently alive",
                    "es": "Para hacer un grupo permanentemente vivo",
                    "de": "Um eine Gruppe dauerhaft am Leben zu erhalten",
                    "nl": "Om een groep permanent in leven te houden"
                },
                {
                    "en": "To score bonus points",
                    "es": "Para obtener puntos extra",
                    "de": "Um Bonuspunkte zu bekommen",
                    "nl": "Om bonuspunten te krijgen"
                },
                {
                    "en": "To end the game faster",
                    "es": "Para terminar el juego más rápido",
                    "de": "Um das Spiel schneller zu beenden",
                    "nl": "Om het spel sneller te beëindigen"
                },
                {
                    "en": "To capture opponent stones",
                    "es": "Para capturar piedras del oponente",
                    "de": "Um gegnerische Steine zu fangen",
                    "nl": "Om stenen van de tegenstander te vangen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A group with two separate eyes cannot be captured because the opponent cannot fill both eyes simultaneously without violating the rules.",
                "es": "Un grupo con dos ojos separados no puede ser capturado porque el oponente no puede llenar ambos ojos simultáneamente.",
                "de": "Eine Gruppe mit zwei separaten Augen kann nicht gefangen werden, da der Gegner nicht beide gleichzeitig füllen kann.",
                "nl": "Een groep met twee aparte ogen kan niet gevangen worden omdat de tegenstander niet beide ogen tegelijk kan vullen."
            }
        },
        {
            "question": {
                "en": "What is a 'connect' in Go?",
                "es": "¿Qué es 'conectar' en Go?",
                "de": "Was ist 'Verbinden' bei Go?",
                "nl": "Wat is 'verbinden' bij Go?"
            },
            "options": [
                {
                    "en": "Placing a stone to join two groups directly",
                    "es": "Colocar una piedra para unir dos grupos directamente",
                    "de": "Einen Stein setzen um zwei Gruppen direkt zu verbinden",
                    "nl": "Een steen plaatsen om twee groepen direct te verbinden"
                },
                {
                    "en": "Drawing a line between stones",
                    "es": "Dibujar una línea entre piedras",
                    "de": "Eine Linie zwischen Steinen zeichnen",
                    "nl": "Een lijn tekenen tussen stenen"
                },
                {
                    "en": "Removing a stone from the board",
                    "es": "Quitar una piedra del tablero",
                    "de": "Einen Stein vom Brett entfernen",
                    "nl": "Een steen van het bord verwijderen"
                },
                {
                    "en": "Passing your turn",
                    "es": "Pasar tu turno",
                    "de": "Seinen Zug passen",
                    "nl": "Je beurt passen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Connecting means playing a stone that directly links two of your groups so they share liberties and become one stronger group.",
                "es": "Conectar significa jugar una piedra que une directamente dos de tus grupos para que compartan libertades y sean más fuertes.",
                "de": "Verbinden bedeutet einen Stein zu spielen der zwei eigene Gruppen direkt verknüpft, sodass sie Freiheiten teilen.",
                "nl": "Verbinden betekent een steen spelen die twee eigen groepen direct koppelt zodat ze vrijheden delen en sterker worden."
            }
        },
        {
            "question": {
                "en": "What is a 'cut' in Go?",
                "es": "¿Qué es un 'corte' en Go?",
                "de": "Was ist ein 'Schnitt' bei Go?",
                "nl": "Wat is een 'snede' bij Go?"
            },
            "options": [
                {
                    "en": "Separating two opponent groups by playing between them",
                    "es": "Separar dos grupos del oponente jugando entre ellos",
                    "de": "Zwei gegnerische Gruppen trennen indem man dazwischen spielt",
                    "nl": "Twee groepen van de tegenstander scheiden door ertussen te spelen"
                },
                {
                    "en": "Removing a stone from the board",
                    "es": "Quitar una piedra del tablero",
                    "de": "Einen Stein vom Brett entfernen",
                    "nl": "Een steen van het bord verwijderen"
                },
                {
                    "en": "Cutting the board in half",
                    "es": "Cortar el tablero por la mitad",
                    "de": "Das Brett halbieren",
                    "nl": "Het bord doormidden snijden"
                },
                {
                    "en": "Ending the game early",
                    "es": "Terminar el juego temprano",
                    "de": "Das Spiel vorzeitig beenden",
                    "nl": "Het spel vroeg beëindigen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A cut separates two opponent stones or groups by playing in the gap between them, preventing them from connecting.",
                "es": "Un corte separa dos piedras o grupos del oponente jugando en el espacio entre ellos, evitando que se conecten.",
                "de": "Ein Schnitt trennt zwei gegnerische Steine oder Gruppen, indem man in die Lücke dazwischen spielt.",
                "nl": "Een snede scheidt twee stenen of groepen van de tegenstander door in de opening ertussen te spelen."
            }
        },
        {
            "question": {
                "en": "What does 'atari' mean in Go?",
                "es": "¿Qué significa 'atari' en Go?",
                "de": "Was bedeutet 'Atari' bei Go?",
                "nl": "Wat betekent 'atari' bij Go?"
            },
            "options": [
                {
                    "en": "A stone or group has only one liberty left",
                    "es": "Una piedra o grupo tiene solo una libertad",
                    "de": "Ein Stein oder eine Gruppe hat nur noch eine Freiheit",
                    "nl": "Een steen of groep heeft nog maar één vrijheid"
                },
                {
                    "en": "A stone has been captured",
                    "es": "Una piedra ha sido capturada",
                    "de": "Ein Stein wurde gefangen",
                    "nl": "Een steen is gevangen"
                },
                {
                    "en": "A game company name",
                    "es": "Un nombre de empresa de juegos",
                    "de": "Ein Spielefirmenname",
                    "nl": "Een naam van een gamebedrijf"
                },
                {
                    "en": "The game is over",
                    "es": "El juego ha terminado",
                    "de": "Das Spiel ist vorbei",
                    "nl": "Het spel is voorbij"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Atari means a stone or group has only one liberty remaining. One more opponent move will capture it unless it escapes or is defended.",
                "es": "Atari significa que una piedra o grupo tiene solo una libertad restante. Un movimiento más del oponente lo capturará.",
                "de": "Atari bedeutet dass ein Stein oder eine Gruppe nur noch eine Freiheit hat. Ein weiterer gegnerischer Zug fängt ihn.",
                "nl": "Atari betekent dat een steen of groep nog maar één vrijheid heeft. Nog één zet van de tegenstander vangt hem."
            }
        },
        {
            "question": {
                "en": "What is a 'ladder' (shicho) in Go?",
                "es": "¿Qué es una 'escalera' (shicho) en Go?",
                "de": "Was ist eine 'Leiter' (Shicho) bei Go?",
                "nl": "Wat is een 'ladder' (shicho) bij Go?"
            },
            "options": [
                {
                    "en": "A zigzag chase pattern that captures stones",
                    "es": "Un patrón de persecución en zigzag que captura piedras",
                    "de": "Ein Zickzack-Verfolgungsmuster das Steine fängt",
                    "nl": "Een zigzag-achtervolingspatroon dat stenen vangt"
                },
                {
                    "en": "A physical ladder used to see the board",
                    "es": "Una escalera física usada para ver el tablero",
                    "de": "Eine physische Leiter um das Brett zu sehen",
                    "nl": "Een fysieke ladder om het bord te bekijken"
                },
                {
                    "en": "A ranking system",
                    "es": "Un sistema de clasificación",
                    "de": "Ein Rangsystem",
                    "nl": "Een rangsysteem"
                },
                {
                    "en": "A way to score points",
                    "es": "Una forma de conseguir puntos",
                    "de": "Eine Art Punkte zu erzielen",
                    "nl": "Een manier om punten te scoren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A ladder is a pattern where a group is chased in a zigzag across the board, always in atari, until it reaches the edge and is captured.",
                "es": "Una escalera es un patrón donde un grupo es perseguido en zigzag por el tablero, siempre en atari, hasta llegar al borde.",
                "de": "Eine Leiter ist ein Muster bei dem eine Gruppe im Zickzack über das Brett verfolgt wird, immer im Atari, bis sie den Rand erreicht.",
                "nl": "Een ladder is een patroon waarbij een groep in zigzag over het bord wordt achtervolgd, steeds in atari, tot de rand wordt bereikt."
            }
        },
        {
            "question": {
                "en": "Why are corners important in Go?",
                "es": "¿Por qué son importantes las esquinas en Go?",
                "de": "Warum sind Ecken wichtig bei Go?",
                "nl": "Waarom zijn hoeken belangrijk bij Go?"
            },
            "options": [
                {
                    "en": "They require fewer stones to secure territory",
                    "es": "Requieren menos piedras para asegurar territorio",
                    "de": "Sie brauchen weniger Steine um Gebiet zu sichern",
                    "nl": "Ze vereisen minder stenen om gebied te beveiligen"
                },
                {
                    "en": "They give bonus points",
                    "es": "Dan puntos extra",
                    "de": "Sie geben Bonuspunkte",
                    "nl": "Ze geven bonuspunten"
                },
                {
                    "en": "They are the only places to play",
                    "es": "Son los únicos lugares para jugar",
                    "de": "Sie sind die einzigen Spielplätze",
                    "nl": "Ze zijn de enige plekken om te spelen"
                },
                {
                    "en": "They have the most liberties",
                    "es": "Tienen más libertades",
                    "de": "Sie haben die meisten Freiheiten",
                    "nl": "Ze hebben de meeste vrijheden"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Corners need fewer stones to enclose territory because two edges of the board serve as natural walls, making corners the most efficient areas.",
                "es": "Las esquinas necesitan menos piedras para encerrar territorio porque dos bordes del tablero sirven como muros naturales.",
                "de": "Ecken brauchen weniger Steine um Gebiet einzuschließen, da zwei Brettränder als natürliche Mauern dienen.",
                "nl": "Hoeken hebben minder stenen nodig om gebied af te sluiten omdat twee randen van het bord als natuurlijke muren dienen."
            }
        },
        {
            "question": {
                "en": "What is the order of priority in Go openings?",
                "es": "¿Cuál es el orden de prioridad en las aperturas de Go?",
                "de": "Was ist die Prioritätsreihenfolge bei Go-Eröffnungen?",
                "nl": "Wat is de prioriteitsvolgorde bij Go-openingen?"
            },
            "options": [
                {
                    "en": "Corners, then sides, then center",
                    "es": "Esquinas, luego lados, luego centro",
                    "de": "Ecken, dann Seiten, dann Mitte",
                    "nl": "Hoeken, dan zijkanten, dan midden"
                },
                {
                    "en": "Center, then sides, then corners",
                    "es": "Centro, luego lados, luego esquinas",
                    "de": "Mitte, dann Seiten, dann Ecken",
                    "nl": "Midden, dan zijkanten, dan hoeken"
                },
                {
                    "en": "Sides first always",
                    "es": "Siempre los lados primero",
                    "de": "Immer zuerst die Seiten",
                    "nl": "Altijd eerst de zijkanten"
                },
                {
                    "en": "There is no priority",
                    "es": "No hay prioridad",
                    "de": "Es gibt keine Priorität",
                    "nl": "Er is geen prioriteit"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The general opening principle is corners first, then sides, then center, because corners are most efficient for securing territory.",
                "es": "El principio general de apertura es esquinas primero, luego lados, luego centro, porque las esquinas son más eficientes.",
                "de": "Das allgemeine Eröffnungsprinzip ist Ecken zuerst, dann Seiten, dann Mitte, da Ecken am effizientesten für Gebiet sind.",
                "nl": "Het algemene openingsprincipe is hoeken eerst, dan zijkanten, dan midden, omdat hoeken het meest efficiënt zijn."
            }
        },
        {
            "question": {
                "en": "What is 'territory' in Go?",
                "es": "¿Qué es 'territorio' en Go?",
                "de": "Was ist 'Gebiet' bei Go?",
                "nl": "Wat is 'gebied' bij Go?"
            },
            "options": [
                {
                    "en": "Empty intersections surrounded by your stones",
                    "es": "Intersecciones vacías rodeadas por tus piedras",
                    "de": "Leere Kreuzungen umgeben von eigenen Steinen",
                    "nl": "Lege kruispunten omringd door je stenen"
                },
                {
                    "en": "All the stones on the board",
                    "es": "Todas las piedras en el tablero",
                    "de": "Alle Steine auf dem Brett",
                    "nl": "Alle stenen op het bord"
                },
                {
                    "en": "The entire board",
                    "es": "Todo el tablero",
                    "de": "Das gesamte Brett",
                    "nl": "Het hele bord"
                },
                {
                    "en": "Captured opponent stones",
                    "es": "Piedras del oponente capturadas",
                    "de": "Gefangene gegnerische Steine",
                    "nl": "Gevangen stenen van de tegenstander"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Territory consists of empty intersections that are completely surrounded by one player's stones. Each empty point counts as one point.",
                "es": "El territorio consiste en intersecciones vacías completamente rodeadas por piedras de un jugador. Cada punto vacío cuenta como un punto.",
                "de": "Gebiet besteht aus leeren Kreuzungen die vollständig von den Steinen eines Spielers umgeben sind. Jeder leere Punkt zählt einen Punkt.",
                "nl": "Gebied bestaat uit lege kruispunten die volledig omringd zijn door stenen van één speler. Elk leeg punt telt als één punt."
            }
        },
        {
            "question": {
                "en": "What color plays first in Go?",
                "es": "¿Qué color juega primero en Go?",
                "de": "Welche Farbe spielt zuerst bei Go?",
                "nl": "Welke kleur speelt als eerste bij Go?"
            },
            "options": [
                {
                    "en": "Black",
                    "es": "Negro",
                    "de": "Schwarz",
                    "nl": "Zwart"
                },
                {
                    "en": "White",
                    "es": "Blanco",
                    "de": "Weiß",
                    "nl": "Wit"
                },
                {
                    "en": "It depends on the rules",
                    "es": "Depende de las reglas",
                    "de": "Es hängt von den Regeln ab",
                    "nl": "Het hangt af van de regels"
                },
                {
                    "en": "The younger player",
                    "es": "El jugador más joven",
                    "de": "Der jüngere Spieler",
                    "nl": "De jongere speler"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "In Go, black always plays first. To compensate for this advantage, white receives komi (extra points) at the end of the game.",
                "es": "En Go, negro siempre juega primero. Para compensar esta ventaja, blanco recibe komi (puntos extra) al final del juego.",
                "de": "Bei Go spielt Schwarz immer zuerst. Um diesen Vorteil auszugleichen, erhält Weiß am Ende Komi (Extrapunkte).",
                "nl": "Bij Go speelt zwart altijd als eerste. Om dit voordeel te compenseren krijgt wit komi (extra punten) aan het einde."
            }
        },
        {
            "question": {
                "en": "What is 'komi' in Go?",
                "es": "¿Qué es 'komi' en Go?",
                "de": "Was ist 'Komi' bei Go?",
                "nl": "Wat is 'komi' bij Go?"
            },
            "options": [
                {
                    "en": "Extra points given to white to offset black's first move",
                    "es": "Puntos extra dados a blanco para compensar el primer movimiento de negro",
                    "de": "Extrapunkte für Weiß um Schwarz' ersten Zug auszugleichen",
                    "nl": "Extra punten voor wit om de eerste zet van zwart te compenseren"
                },
                {
                    "en": "A type of stone",
                    "es": "Un tipo de piedra",
                    "de": "Eine Art Stein",
                    "nl": "Een soort steen"
                },
                {
                    "en": "Bonus points for captures",
                    "es": "Puntos extra por capturas",
                    "de": "Bonuspunkte für Fänge",
                    "nl": "Bonuspunten voor vangsten"
                },
                {
                    "en": "A penalty for slow play",
                    "es": "Una penalización por juego lento",
                    "de": "Eine Strafe für langsames Spiel",
                    "nl": "Een straf voor langzaam spel"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Komi is compensation points (usually 6.5 or 7.5) given to white to balance the advantage of black playing first.",
                "es": "Komi son puntos de compensación (usualmente 6.5 o 7.5) dados a blanco para equilibrar la ventaja de que negro juega primero.",
                "de": "Komi sind Kompensationspunkte (meist 6,5 oder 7,5) für Weiß, um den Vorteil von Schwarz' erstem Zug auszugleichen.",
                "nl": "Komi zijn compensatiepunten (meestal 6,5 of 7,5) voor wit om het voordeel van zwarts eerste zet te compenseren."
            }
        },
        {
            "question": {
                "en": "Why is komi often a half point?",
                "es": "¿Por qué el komi suele ser medio punto?",
                "de": "Warum ist Komi oft ein halber Punkt?",
                "nl": "Waarom is komi vaak een half punt?"
            },
            "options": [
                {
                    "en": "To prevent draws",
                    "es": "Para evitar empates",
                    "de": "Um Unentschieden zu vermeiden",
                    "nl": "Om gelijkspel te voorkomen"
                },
                {
                    "en": "To make calculation harder",
                    "es": "Para dificultar el cálculo",
                    "de": "Um die Berechnung zu erschweren",
                    "nl": "Om het rekenen moeilijker te maken"
                },
                {
                    "en": "Because of tradition",
                    "es": "Por tradición",
                    "de": "Wegen der Tradition",
                    "nl": "Vanwege traditie"
                },
                {
                    "en": "It is always a whole number",
                    "es": "Siempre es un número entero",
                    "de": "Es ist immer eine ganze Zahl",
                    "nl": "Het is altijd een heel getal"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Komi includes a half point (like 6.5) to ensure there is always a winner and no draws in competitive games.",
                "es": "El komi incluye medio punto (como 6.5) para asegurar que siempre haya un ganador y no haya empates en competencias.",
                "de": "Komi enthält einen halben Punkt (wie 6,5) um sicherzustellen, dass es immer einen Gewinner gibt und keine Unentschieden.",
                "nl": "Komi bevat een half punt (zoals 6,5) om ervoor te zorgen dat er altijd een winnaar is en geen gelijkspel."
            }
        },
        {
            "question": {
                "en": "What is a 'group' in Go?",
                "es": "¿Qué es un 'grupo' en Go?",
                "de": "Was ist eine 'Gruppe' bei Go?",
                "nl": "Wat is een 'groep' bij Go?"
            },
            "options": [
                {
                    "en": "Connected stones of the same color",
                    "es": "Piedras conectadas del mismo color",
                    "de": "Verbundene Steine derselben Farbe",
                    "nl": "Verbonden stenen van dezelfde kleur"
                },
                {
                    "en": "A team of players",
                    "es": "Un equipo de jugadores",
                    "de": "Ein Spielerteam",
                    "nl": "Een team van spelers"
                },
                {
                    "en": "Any stones near each other",
                    "es": "Cualquier piedra cerca de otra",
                    "de": "Alle Steine in der Nähe",
                    "nl": "Alle stenen dicht bij elkaar"
                },
                {
                    "en": "Stones in a perfect line",
                    "es": "Piedras en una línea perfecta",
                    "de": "Steine in einer perfekten Linie",
                    "nl": "Stenen in een perfecte lijn"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A group is a set of stones of the same color that are directly connected along the grid lines. They share liberties and live or die together.",
                "es": "Un grupo es un conjunto de piedras del mismo color directamente conectadas a lo largo de las líneas. Comparten libertades.",
                "de": "Eine Gruppe ist eine Menge gleichfarbiger Steine die direkt entlang der Gitterlinien verbunden sind und Freiheiten teilen.",
                "nl": "Een groep is een verzameling stenen van dezelfde kleur die direct verbonden zijn langs de rasterlijnen en vrijheden delen."
            }
        },
        {
            "question": {
                "en": "What is the 'ko rule' in Go?",
                "es": "¿Qué es la 'regla de ko' en Go?",
                "de": "Was ist die 'Ko-Regel' bei Go?",
                "nl": "Wat is de 'ko-regel' bij Go?"
            },
            "options": [
                {
                    "en": "You cannot immediately recapture a ko stone",
                    "es": "No puedes recapturar inmediatamente una piedra de ko",
                    "de": "Man darf einen Ko-Stein nicht sofort zurückfangen",
                    "nl": "Je mag een ko-steen niet onmiddellijk terugvangen"
                },
                {
                    "en": "You must capture every turn",
                    "es": "Debes capturar cada turno",
                    "de": "Man muss jeden Zug fangen",
                    "nl": "Je moet elke beurt vangen"
                },
                {
                    "en": "You cannot pass twice",
                    "es": "No puedes pasar dos veces",
                    "de": "Man darf nicht zweimal passen",
                    "nl": "Je mag niet twee keer passen"
                },
                {
                    "en": "You must play in the corner first",
                    "es": "Debes jugar en la esquina primero",
                    "de": "Man muss zuerst in der Ecke spielen",
                    "nl": "Je moet eerst in de hoek spelen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The ko rule prevents infinite repetition. After capturing a ko, the opponent must play elsewhere first before recapturing.",
                "es": "La regla de ko previene la repetición infinita. Tras capturar un ko, el oponente debe jugar en otro lugar antes de recapturar.",
                "de": "Die Ko-Regel verhindert endlose Wiederholung. Nach dem Fangen eines Ko muss der Gegner erst anderswo spielen.",
                "nl": "De ko-regel voorkomt eindeloze herhaling. Na het vangen van een ko moet de tegenstander eerst elders spelen."
            }
        },
        {
            "question": {
                "en": "What is a 'two-space extension' in Go?",
                "es": "¿Qué es una 'extensión de dos espacios' en Go?",
                "de": "Was ist eine 'Zwei-Feld-Erweiterung' bei Go?",
                "nl": "Wat is een 'twee-ruimte-uitbreiding' bij Go?"
            },
            "options": [
                {
                    "en": "Playing two intersections away from your stone along the side",
                    "es": "Jugar dos intersecciones lejos de tu piedra a lo largo del lado",
                    "de": "Zwei Kreuzungen vom eigenen Stein entfernt am Rand spielen",
                    "nl": "Twee kruispunten van je steen af spelen langs de zijkant"
                },
                {
                    "en": "Using two boards",
                    "es": "Usar dos tableros",
                    "de": "Zwei Bretter verwenden",
                    "nl": "Twee borden gebruiken"
                },
                {
                    "en": "Playing two stones at once",
                    "es": "Jugar dos piedras a la vez",
                    "de": "Zwei Steine gleichzeitig spielen",
                    "nl": "Twee stenen tegelijk spelen"
                },
                {
                    "en": "Extending the board",
                    "es": "Extender el tablero",
                    "de": "Das Brett erweitern",
                    "nl": "Het bord uitbreiden"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A two-space extension is playing a stone two intersections away from an existing stone along the side, a common way to develop territory.",
                "es": "Una extensión de dos espacios es jugar una piedra a dos intersecciones de una piedra existente a lo largo del lado.",
                "de": "Eine Zwei-Feld-Erweiterung spielt einen Stein zwei Kreuzungen von einem bestehenden Stein entfernt am Rand.",
                "nl": "Een twee-ruimte-uitbreiding speelt een steen twee kruispunten van een bestaande steen langs de zijkant."
            }
        },
        {
            "question": {
                "en": "What is a 'one-point jump' in Go?",
                "es": "¿Qué es un 'salto de un punto' en Go?",
                "de": "Was ist ein 'Ein-Punkt-Sprung' bei Go?",
                "nl": "Wat is een 'één-punt-sprong' bij Go?"
            },
            "options": [
                {
                    "en": "Playing one space away from your stone along a line",
                    "es": "Jugar un espacio lejos de tu piedra a lo largo de una línea",
                    "de": "Ein Feld vom eigenen Stein entfernt entlang einer Linie spielen",
                    "nl": "Eén ruimte van je steen af spelen langs een lijn"
                },
                {
                    "en": "Scoring one point",
                    "es": "Conseguir un punto",
                    "de": "Einen Punkt erzielen",
                    "nl": "Eén punt scoren"
                },
                {
                    "en": "Jumping over a stone",
                    "es": "Saltar sobre una piedra",
                    "de": "Über einen Stein springen",
                    "nl": "Over een steen springen"
                },
                {
                    "en": "The first move",
                    "es": "El primer movimiento",
                    "de": "Der erste Zug",
                    "nl": "De eerste zet"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A one-point jump places a stone one intersection away from an existing friendly stone along a line, leaving one gap between them.",
                "es": "Un salto de un punto coloca una piedra a una intersección de una piedra amiga a lo largo de una línea, dejando un espacio.",
                "de": "Ein Ein-Punkt-Sprung setzt einen Stein eine Kreuzung von einem eigenen Stein entfernt entlang einer Linie.",
                "nl": "Een één-punt-sprong plaatst een steen één kruispunt van een eigen steen langs een lijn, met één gat ertussen."
            }
        },
        {
            "question": {
                "en": "What is the 'second line' on a Go board?",
                "es": "¿Qué es la 'segunda línea' en un tablero de Go?",
                "de": "Was ist die 'zweite Linie' auf einem Go-Brett?",
                "nl": "Wat is de 'tweede lijn' op een Go-bord?"
            },
            "options": [
                {
                    "en": "The second row from the edge of the board",
                    "es": "La segunda fila desde el borde del tablero",
                    "de": "Die zweite Reihe vom Rand des Bretts",
                    "nl": "De tweede rij vanaf de rand van het bord"
                },
                {
                    "en": "The center line",
                    "es": "La línea central",
                    "de": "Die Mittellinie",
                    "nl": "De middenlijn"
                },
                {
                    "en": "A line drawn on the board",
                    "es": "Una línea dibujada en el tablero",
                    "de": "Eine auf das Brett gezeichnete Linie",
                    "nl": "Een lijn getekend op het bord"
                },
                {
                    "en": "The second game played",
                    "es": "El segundo juego jugado",
                    "de": "Das zweite gespielte Spiel",
                    "nl": "Het tweede gespeelde spel"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The second line is the row of intersections one step in from the edge. Playing here is generally bad for territory but can be useful for life.",
                "es": "La segunda línea es la fila de intersecciones un paso dentro del borde. Jugar aquí es generalmente malo para territorio.",
                "de": "Die zweite Linie ist die Reihe einen Schritt vom Rand. Hier zu spielen ist meist schlecht für Gebiet, aber nützlich zum Überleben.",
                "nl": "De tweede lijn is de rij kruispunten één stap van de rand. Hier spelen is meestal slecht voor gebied maar nuttig voor leven."
            }
        },
        {
            "question": {
                "en": "What is a 'snapback' in Go?",
                "es": "¿Qué es un 'snapback' en Go?",
                "de": "Was ist ein 'Snapback' bei Go?",
                "nl": "Wat is een 'snapback' bij Go?"
            },
            "options": [
                {
                    "en": "Sacrificing a stone to recapture a larger group",
                    "es": "Sacrificar una piedra para recapturar un grupo mayor",
                    "de": "Einen Stein opfern um eine größere Gruppe zurückzufangen",
                    "nl": "Een steen opofferen om een grotere groep terug te vangen"
                },
                {
                    "en": "Taking back a move",
                    "es": "Retractarse de un movimiento",
                    "de": "Einen Zug zurücknehmen",
                    "nl": "Een zet terugnemen"
                },
                {
                    "en": "Playing very quickly",
                    "es": "Jugar muy rápido",
                    "de": "Sehr schnell spielen",
                    "nl": "Heel snel spelen"
                },
                {
                    "en": "A snapping sound when placing stones",
                    "es": "Un sonido de chasquido al colocar piedras",
                    "de": "Ein Klickgeräusch beim Setzen von Steinen",
                    "nl": "Een knapgeluid bij het plaatsen van stenen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A snapback is a tactic where you allow the opponent to capture one stone, then immediately recapture their entire group on the next move.",
                "es": "Un snapback es una táctica donde permites que el oponente capture una piedra, luego recapturas su grupo completo en el siguiente turno.",
                "de": "Ein Snapback ist eine Taktik bei der man den Gegner einen Stein fangen lässt und dann sofort dessen ganze Gruppe zurückfängt.",
                "nl": "Een snapback is een tactiek waarbij je de tegenstander een steen laat vangen en dan meteen diens hele groep terugvangt."
            }
        },
        {
            "question": {
                "en": "What is a 'living group' in Go?",
                "es": "¿Qué es un 'grupo vivo' en Go?",
                "de": "Was ist eine 'lebende Gruppe' bei Go?",
                "nl": "Wat is een 'levende groep' bij Go?"
            },
            "options": [
                {
                    "en": "A group with two or more eyes that cannot be captured",
                    "es": "Un grupo con dos o más ojos que no puede ser capturado",
                    "de": "Eine Gruppe mit zwei oder mehr Augen die nicht gefangen werden kann",
                    "nl": "Een groep met twee of meer ogen die niet gevangen kan worden"
                },
                {
                    "en": "Any group on the board",
                    "es": "Cualquier grupo en el tablero",
                    "de": "Jede Gruppe auf dem Brett",
                    "nl": "Elke groep op het bord"
                },
                {
                    "en": "A group that moves around",
                    "es": "Un grupo que se mueve por ahí",
                    "de": "Eine Gruppe die sich bewegt",
                    "nl": "Een groep die rondbeweegt"
                },
                {
                    "en": "A group in the center only",
                    "es": "Un grupo solo en el centro",
                    "de": "Eine Gruppe nur in der Mitte",
                    "nl": "Een groep alleen in het midden"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A living group has at least two separate eyes, meaning the opponent can never fill all its internal liberties, so it is permanently safe.",
                "es": "Un grupo vivo tiene al menos dos ojos separados, lo que significa que el oponente nunca puede llenar todas sus libertades internas.",
                "de": "Eine lebende Gruppe hat mindestens zwei separate Augen, sodass der Gegner nie alle internen Freiheiten füllen kann.",
                "nl": "Een levende groep heeft minstens twee aparte ogen, zodat de tegenstander nooit alle interne vrijheden kan vullen."
            }
        },
        {
            "question": {
                "en": "What is a 'dead group' in Go?",
                "es": "¿Qué es un 'grupo muerto' en Go?",
                "de": "Was ist eine 'tote Gruppe' bei Go?",
                "nl": "Wat is een 'dode groep' bij Go?"
            },
            "options": [
                {
                    "en": "A group that cannot form two eyes and will be captured",
                    "es": "Un grupo que no puede formar dos ojos y será capturado",
                    "de": "Eine Gruppe die keine zwei Augen bilden kann und gefangen wird",
                    "nl": "Een groep die geen twee ogen kan vormen en gevangen zal worden"
                },
                {
                    "en": "A group removed from the board",
                    "es": "Un grupo retirado del tablero",
                    "de": "Eine Gruppe die vom Brett entfernt wurde",
                    "nl": "Een groep die van het bord is verwijderd"
                },
                {
                    "en": "A group that has not moved",
                    "es": "Un grupo que no se ha movido",
                    "de": "Eine Gruppe die sich nicht bewegt hat",
                    "nl": "Een groep die niet bewogen heeft"
                },
                {
                    "en": "Any isolated stone",
                    "es": "Cualquier piedra aislada",
                    "de": "Jeder isolierte Stein",
                    "nl": "Elke geïsoleerde steen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A dead group cannot make two eyes even with optimal play. Both players agree on dead groups at the end of the game, and they are removed.",
                "es": "Un grupo muerto no puede hacer dos ojos ni con juego óptimo. Al final del juego, se acuerdan y retiran los grupos muertos.",
                "de": "Eine tote Gruppe kann auch bei optimalem Spiel keine zwei Augen bilden. Am Spielende werden tote Gruppen entfernt.",
                "nl": "Een dode groep kan zelfs bij optimaal spel geen twee ogen vormen. Aan het einde worden dode groepen verwijderd."
            }
        },
        {
            "question": {
                "en": "What is a 'seki' in Go?",
                "es": "¿Qué es un 'seki' en Go?",
                "de": "Was ist ein 'Seki' bei Go?",
                "nl": "Wat is een 'seki' bij Go?"
            },
            "options": [
                {
                    "en": "A mutual life situation where neither side can capture",
                    "es": "Una situación de vida mutua donde ningún lado puede capturar",
                    "de": "Eine gegenseitige Lebenssituation wo keine Seite fangen kann",
                    "nl": "Een situatie van wederzijds leven waar geen kant kan vangen"
                },
                {
                    "en": "A type of capture",
                    "es": "Un tipo de captura",
                    "de": "Eine Art Fang",
                    "nl": "Een soort vangst"
                },
                {
                    "en": "A draw",
                    "es": "Un empate",
                    "de": "Ein Unentschieden",
                    "nl": "Een gelijkspel"
                },
                {
                    "en": "A forbidden move",
                    "es": "Un movimiento prohibido",
                    "de": "Ein verbotener Zug",
                    "nl": "Een verboden zet"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Seki is a stalemate where two groups coexist because neither player can capture the other without losing their own group. Both live without eyes.",
                "es": "Seki es un punto muerto donde dos grupos coexisten porque ningún jugador puede capturar al otro sin perder su propio grupo.",
                "de": "Seki ist ein Patt bei dem zwei Gruppen koexistieren, da kein Spieler den anderen fangen kann ohne die eigene Gruppe zu verlieren.",
                "nl": "Seki is een patstelling waar twee groepen naast elkaar bestaan omdat geen speler de ander kan vangen zonder eigen groep te verliezen."
            }
        },
        {
            "question": {
                "en": "What is a '3-3 invasion' in Go?",
                "es": "¿Qué es una 'invasión 3-3' en Go?",
                "de": "Was ist eine '3-3 Invasion' bei Go?",
                "nl": "Wat is een '3-3 invasie' bij Go?"
            },
            "options": [
                {
                    "en": "Playing on the 3-3 point under a star point stone",
                    "es": "Jugar en el punto 3-3 bajo una piedra de punto estrella",
                    "de": "Auf dem 3-3 Punkt unter einem Sternpunktstein spielen",
                    "nl": "Spelen op het 3-3 punt onder een sterpuntsteen"
                },
                {
                    "en": "Playing three stones in a row",
                    "es": "Jugar tres piedras en fila",
                    "de": "Drei Steine in einer Reihe spielen",
                    "nl": "Drie stenen op een rij spelen"
                },
                {
                    "en": "Capturing three groups",
                    "es": "Capturar tres grupos",
                    "de": "Drei Gruppen fangen",
                    "nl": "Drie groepen vangen"
                },
                {
                    "en": "A rule about three consecutive passes",
                    "es": "Una regla sobre tres pases consecutivos",
                    "de": "Eine Regel über drei aufeinanderfolgende Pässe",
                    "nl": "Een regel over drie opeenvolgende passen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A 3-3 invasion means playing on the 3-3 point under an opponent's star point stone to take the corner territory, giving the opponent outside influence.",
                "es": "Una invasión 3-3 significa jugar en el punto 3-3 bajo una piedra de estrella del oponente para tomar el territorio de la esquina.",
                "de": "Eine 3-3 Invasion bedeutet auf dem 3-3 Punkt unter einem Sternpunktstein des Gegners zu spielen, um das Eckgebiet zu nehmen.",
                "nl": "Een 3-3 invasie betekent spelen op het 3-3 punt onder een sterpuntsteen van de tegenstander om het hoekgebied in te nemen."
            }
        },
        {
            "question": {
                "en": "What is a 'ponnuki' in Go?",
                "es": "¿Qué es un 'ponnuki' en Go?",
                "de": "Was ist ein 'Ponnuki' bei Go?",
                "nl": "Wat is een 'ponnuki' bij Go?"
            },
            "options": [
                {
                    "en": "A diamond shape formed after capturing one stone",
                    "es": "Una forma de diamante formada al capturar una piedra",
                    "de": "Eine Rautenform die nach dem Fangen eines Steins entsteht",
                    "nl": "Een ruitvorm die ontstaat na het vangen van een steen"
                },
                {
                    "en": "A type of handicap",
                    "es": "Un tipo de handicap",
                    "de": "Eine Art Vorgabe",
                    "nl": "Een soort handicap"
                },
                {
                    "en": "A greeting ritual",
                    "es": "Un ritual de saludo",
                    "de": "Ein Begrüßungsritual",
                    "nl": "Een begroetingsritueel"
                },
                {
                    "en": "A scoring method",
                    "es": "Un método de puntuación",
                    "de": "Eine Wertungsmethode",
                    "nl": "Een scoremethode"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A ponnuki is the diamond shape formed by four stones after capturing one opponent stone in the center. It radiates strong influence in all directions.",
                "es": "Un ponnuki es la forma de diamante formada por cuatro piedras tras capturar una piedra del oponente. Irradia fuerte influencia.",
                "de": "Ein Ponnuki ist die Rautenform aus vier Steinen nach dem Fangen eines gegnerischen Steins. Es strahlt starken Einfluss in alle Richtungen aus.",
                "nl": "Een ponnuki is de ruitvorm van vier stenen na het vangen van een steen van de tegenstander. Het straalt sterke invloed uit."
            }
        },
        {
            "question": {
                "en": "What is the purpose of 'nigiri' in Go?",
                "es": "¿Cuál es el propósito del 'nigiri' en Go?",
                "de": "Was ist der Zweck von 'Nigiri' bei Go?",
                "nl": "Wat is het doel van 'nigiri' bij Go?"
            },
            "options": [
                {
                    "en": "To determine which player plays black",
                    "es": "Para determinar qué jugador juega con negro",
                    "de": "Um festzulegen welcher Spieler Schwarz spielt",
                    "nl": "Om te bepalen welke speler zwart speelt"
                },
                {
                    "en": "To set the handicap",
                    "es": "Para establecer el handicap",
                    "de": "Um die Vorgabe festzulegen",
                    "nl": "Om de handicap in te stellen"
                },
                {
                    "en": "To start the clock",
                    "es": "Para iniciar el reloj",
                    "de": "Um die Uhr zu starten",
                    "nl": "Om de klok te starten"
                },
                {
                    "en": "To count the score",
                    "es": "Para contar la puntuación",
                    "de": "Um die Punktzahl zu zählen",
                    "nl": "Om de score te tellen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Nigiri is a method to decide colors. One player grabs a handful of white stones, the other guesses odd or even to determine who plays black.",
                "es": "Nigiri es un método para decidir colores. Un jugador agarra piedras blancas, el otro adivina par o impar para determinar quién juega negro.",
                "de": "Nigiri bestimmt die Farben. Ein Spieler greift weiße Steine, der andere rät gerade oder ungerade, um festzulegen wer Schwarz spielt.",
                "nl": "Nigiri bepaalt de kleuren. Eén speler pakt witte stenen, de ander raadt even of oneven om te bepalen wie zwart speelt."
            }
        },
        {
            "question": {
                "en": "What material are traditional Go stones made of?",
                "es": "¿De qué material son las piedras de Go tradicionales?",
                "de": "Aus welchem Material sind traditionelle Go-Steine?",
                "nl": "Van welk materiaal zijn traditionele Go-stenen gemaakt?"
            },
            "options": [
                {
                    "en": "Slate and shell",
                    "es": "Pizarra y concha",
                    "de": "Schiefer und Muschel",
                    "nl": "Leisteen en schelp"
                },
                {
                    "en": "Plastic",
                    "es": "Plástico",
                    "de": "Plastik",
                    "nl": "Plastic"
                },
                {
                    "en": "Wood",
                    "es": "Madera",
                    "de": "Holz",
                    "nl": "Hout"
                },
                {
                    "en": "Metal",
                    "es": "Metal",
                    "de": "Metall",
                    "nl": "Metaal"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Traditional Japanese Go stones are made of slate (black) and clamshell (white). These high-quality materials give a satisfying feel and sound.",
                "es": "Las piedras de Go japonesas tradicionales son de pizarra (negro) y concha de almeja (blanco), materiales de alta calidad.",
                "de": "Traditionelle japanische Go-Steine bestehen aus Schiefer (schwarz) und Muschelschale (weiß) für ein hochwertiges Spielgefühl.",
                "nl": "Traditionele Japanse Go-stenen zijn gemaakt van leisteen (zwart) en schelp (wit), hoogwaardige materialen."
            }
        },
        {
            "question": {
                "en": "What wood is used for the best Go boards?",
                "es": "¿Qué madera se usa para los mejores tableros de Go?",
                "de": "Welches Holz wird für die besten Go-Bretter verwendet?",
                "nl": "Welk hout wordt gebruikt voor de beste Go-borden?"
            },
            "options": [
                {
                    "en": "Kaya wood",
                    "es": "Madera de kaya",
                    "de": "Kaya-Holz",
                    "nl": "Kaya-hout"
                },
                {
                    "en": "Oak",
                    "es": "Roble",
                    "de": "Eiche",
                    "nl": "Eiken"
                },
                {
                    "en": "Pine",
                    "es": "Pino",
                    "de": "Kiefer",
                    "nl": "Dennen"
                },
                {
                    "en": "Bamboo",
                    "es": "Bambú",
                    "de": "Bambus",
                    "nl": "Bamboe"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Kaya (Japanese torreya) wood is prized for the finest Go boards due to its beautiful grain, color, and the satisfying sound when stones are placed.",
                "es": "La madera de kaya (torreya japonesa) es apreciada para los mejores tableros de Go por su grano, color y sonido al colocar piedras.",
                "de": "Kaya-Holz (japanische Torreya) ist für die besten Go-Bretter geschätzt wegen Maserung, Farbe und dem Klang beim Setzen.",
                "nl": "Kaya-hout (Japanse torreya) wordt gewaardeerd voor de beste Go-borden vanwege de nerf, kleur en het geluid bij het plaatsen."
            }
        },
        {
            "question": {
                "en": "What is the 'tengen' point on a Go board?",
                "es": "¿Qué es el punto 'tengen' en un tablero de Go?",
                "de": "Was ist der 'Tengen'-Punkt auf einem Go-Brett?",
                "nl": "Wat is het 'tengen'-punt op een Go-bord?"
            },
            "options": [
                {
                    "en": "The center point of the board",
                    "es": "El punto central del tablero",
                    "de": "Der Mittelpunkt des Bretts",
                    "nl": "Het middelpunt van het bord"
                },
                {
                    "en": "A corner point",
                    "es": "Un punto de esquina",
                    "de": "Ein Eckpunkt",
                    "nl": "Een hoekpunt"
                },
                {
                    "en": "The first move location",
                    "es": "La ubicación del primer movimiento",
                    "de": "Der Ort des ersten Zugs",
                    "nl": "De locatie van de eerste zet"
                },
                {
                    "en": "A special bonus point",
                    "es": "Un punto extra especial",
                    "de": "Ein spezieller Bonuspunkt",
                    "nl": "Een speciaal bonuspunt"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Tengen is the center star point of the 19x19 board, at position 10-10. It is rarely played in the opening but has strategic significance.",
                "es": "Tengen es el punto estrella central del tablero 19x19, en la posición 10-10. Raramente se juega en la apertura.",
                "de": "Tengen ist der zentrale Sternpunkt des 19x19 Bretts an Position 10-10. Er wird selten in der Eröffnung gespielt.",
                "nl": "Tengen is het centrale sterpunt van het 19x19 bord op positie 10-10. Het wordt zelden in de opening gespeeld."
            }
        },
        {
            "question": {
                "en": "How is the winner determined in Go?",
                "es": "¿Cómo se determina el ganador en Go?",
                "de": "Wie wird der Gewinner bei Go bestimmt?",
                "nl": "Hoe wordt de winnaar bepaald bij Go?"
            },
            "options": [
                {
                    "en": "The player with the most territory and captures wins",
                    "es": "El jugador con más territorio y capturas gana",
                    "de": "Der Spieler mit dem meisten Gebiet und Fängen gewinnt",
                    "nl": "De speler met het meeste gebied en vangsten wint"
                },
                {
                    "en": "The player who captures the king wins",
                    "es": "El jugador que captura al rey gana",
                    "de": "Der Spieler der den König fängt gewinnt",
                    "nl": "De speler die de koning vangt wint"
                },
                {
                    "en": "The player with more stones on the board wins",
                    "es": "El jugador con más piedras en el tablero gana",
                    "de": "Der Spieler mit mehr Steinen auf dem Brett gewinnt",
                    "nl": "De speler met meer stenen op het bord wint"
                },
                {
                    "en": "The game cannot be won",
                    "es": "El juego no se puede ganar",
                    "de": "Das Spiel kann nicht gewonnen werden",
                    "nl": "Het spel kan niet gewonnen worden"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The winner is the player with the highest total score, which includes territory points and captured stones (plus komi for white).",
                "es": "El ganador es el jugador con la mayor puntuación total, que incluye territorio y piedras capturadas (más komi para blanco).",
                "de": "Gewinner ist der Spieler mit der höchsten Gesamtpunktzahl aus Gebiet und gefangenen Steinen (plus Komi für Weiß).",
                "nl": "De winnaar is de speler met de hoogste totaalscore, inclusief gebied en gevangen stenen (plus komi voor wit)."
            }
        },
        {
            "question": {
                "en": "What is 'resignation' in Go?",
                "es": "¿Qué es la 'resignación' en Go?",
                "de": "Was ist 'Aufgabe' bei Go?",
                "nl": "Wat is 'opgave' bij Go?"
            },
            "options": [
                {
                    "en": "Voluntarily ending the game because you know you lost",
                    "es": "Terminar el juego voluntariamente porque sabes que perdiste",
                    "de": "Das Spiel freiwillig beenden weil man weiß dass man verloren hat",
                    "nl": "Het spel vrijwillig beëindigen omdat je weet dat je verloren hebt"
                },
                {
                    "en": "Taking a break",
                    "es": "Tomar un descanso",
                    "de": "Eine Pause machen",
                    "nl": "Een pauze nemen"
                },
                {
                    "en": "Starting over",
                    "es": "Empezar de nuevo",
                    "de": "Neu anfangen",
                    "nl": "Opnieuw beginnen"
                },
                {
                    "en": "Changing colors",
                    "es": "Cambiar colores",
                    "de": "Farben wechseln",
                    "nl": "Van kleur wisselen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Resignation is when a player concedes the game. In professional Go, most games end by resignation rather than playing to the end.",
                "es": "La resignación es cuando un jugador concede el juego. En Go profesional, la mayoría de juegos terminan por resignación.",
                "de": "Aufgabe ist wenn ein Spieler das Spiel abgibt. Im professionellen Go enden die meisten Spiele durch Aufgabe.",
                "nl": "Opgave is wanneer een speler het spel opgeeft. In professioneel Go eindigen de meeste spellen door opgave."
            }
        },
        {
            "question": {
                "en": "What is a 'boshi' in Go?",
                "es": "¿Qué es un 'boshi' en Go?",
                "de": "Was ist ein 'Boshi' bei Go?",
                "nl": "Wat is een 'boshi' bij Go?"
            },
            "options": [
                {
                    "en": "A capping move played directly above an opponent's stone",
                    "es": "Un movimiento de tapa jugado encima de una piedra del oponente",
                    "de": "Ein Deckungszug direkt über einem gegnerischen Stein",
                    "nl": "Een kapzet direct boven een steen van de tegenstander"
                },
                {
                    "en": "A hat worn by Go players",
                    "es": "Un sombrero usado por jugadores de Go",
                    "de": "Ein Hut den Go-Spieler tragen",
                    "nl": "Een hoed gedragen door Go-spelers"
                },
                {
                    "en": "A bow before the game",
                    "es": "Una reverencia antes del juego",
                    "de": "Eine Verbeugung vor dem Spiel",
                    "nl": "Een buiging voor het spel"
                },
                {
                    "en": "The final stone played",
                    "es": "La última piedra jugada",
                    "de": "Der letzte gespielte Stein",
                    "nl": "De laatste gespeelde steen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A boshi (cap) is a move played directly on top of an opponent's stone position to limit its development. It is a type of reduction move.",
                "es": "Un boshi (tapa) es un movimiento jugado directamente sobre la posición de una piedra del oponente para limitar su desarrollo.",
                "de": "Ein Boshi (Kappe) ist ein Zug direkt über der Position eines gegnerischen Steins, um dessen Entwicklung zu begrenzen.",
                "nl": "Een boshi (kap) is een zet direct boven de positie van een steen van de tegenstander om diens ontwikkeling te beperken."
            }
        },
        {
            "question": {
                "en": "What is a 'tsuke' in Go?",
                "es": "¿Qué es un 'tsuke' en Go?",
                "de": "Was ist ein 'Tsuke' bei Go?",
                "nl": "Wat is een 'tsuke' bij Go?"
            },
            "options": [
                {
                    "en": "A move played directly touching an opponent's stone",
                    "es": "Un movimiento jugado tocando directamente una piedra del oponente",
                    "de": "Ein Zug direkt an einen gegnerischen Stein gespielt",
                    "nl": "Een zet direct tegen een steen van de tegenstander aan"
                },
                {
                    "en": "A distant move",
                    "es": "Un movimiento distante",
                    "de": "Ein entfernter Zug",
                    "nl": "Een verre zet"
                },
                {
                    "en": "A passing move",
                    "es": "Un movimiento de paso",
                    "de": "Ein Passzug",
                    "nl": "Een paszet"
                },
                {
                    "en": "A capturing move",
                    "es": "Un movimiento de captura",
                    "de": "Ein Fangzug",
                    "nl": "Een vangzet"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A tsuke (attachment) is a move played directly adjacent to an opponent's stone. It is a contact move that creates complex tactical situations.",
                "es": "Un tsuke (adjuntar) es un movimiento jugado directamente adyacente a una piedra del oponente. Crea situaciones tácticas complejas.",
                "de": "Ein Tsuke (Anlehnung) ist ein Zug direkt neben einem gegnerischen Stein. Es ist ein Kontaktzug der komplexe taktische Situationen schafft.",
                "nl": "Een tsuke (aanlegging) is een zet direct naast een steen van de tegenstander. Het creëert complexe tactische situaties."
            }
        },
        {
            "question": {
                "en": "What is a 'nobi' in Go?",
                "es": "¿Qué es un 'nobi' en Go?",
                "de": "Was ist ein 'Nobi' bei Go?",
                "nl": "Wat is een 'nobi' bij Go?"
            },
            "options": [
                {
                    "en": "A solid extension directly next to your own stone",
                    "es": "Una extensión sólida directamente junto a tu piedra",
                    "de": "Eine solide Erweiterung direkt neben dem eigenen Stein",
                    "nl": "Een solide uitbreiding direct naast je eigen steen"
                },
                {
                    "en": "A jump over a stone",
                    "es": "Un salto sobre una piedra",
                    "de": "Ein Sprung über einen Stein",
                    "nl": "Een sprong over een steen"
                },
                {
                    "en": "A diagonal move",
                    "es": "Un movimiento diagonal",
                    "de": "Ein diagonaler Zug",
                    "nl": "Een diagonale zet"
                },
                {
                    "en": "A capturing technique",
                    "es": "Una técnica de captura",
                    "de": "Eine Fangtechnik",
                    "nl": "Een vangtechniek"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A nobi is a solid one-space extension played directly adjacent to your own stone. It strengthens your position and adds liberties.",
                "es": "Un nobi es una extensión sólida de un espacio jugada directamente adyacente a tu piedra. Fortalece tu posición.",
                "de": "Ein Nobi ist eine solide Ein-Feld-Erweiterung direkt neben dem eigenen Stein. Es stärkt die Position und fügt Freiheiten hinzu.",
                "nl": "Een nobi is een solide uitbreiding van één veld direct naast je eigen steen. Het versterkt je positie en voegt vrijheden toe."
            }
        },
        {
            "question": {
                "en": "What does 'sabaki' mean in Go?",
                "es": "¿Qué significa 'sabaki' en Go?",
                "de": "Was bedeutet 'Sabaki' bei Go?",
                "nl": "Wat betekent 'sabaki' bij Go?"
            },
            "options": [
                {
                    "en": "Making light, flexible shape in a difficult position",
                    "es": "Hacer forma ligera y flexible en una posición difícil",
                    "de": "Leichte, flexible Form in einer schwierigen Position machen",
                    "nl": "Lichte, flexibele vorm maken in een moeilijke positie"
                },
                {
                    "en": "Capturing a large group",
                    "es": "Capturar un grupo grande",
                    "de": "Eine große Gruppe fangen",
                    "nl": "Een grote groep vangen"
                },
                {
                    "en": "Building a wall",
                    "es": "Construir un muro",
                    "de": "Eine Mauer bauen",
                    "nl": "Een muur bouwen"
                },
                {
                    "en": "Passing your turn",
                    "es": "Pasar tu turno",
                    "de": "Seinen Zug passen",
                    "nl": "Je beurt passen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Sabaki is the skill of making flexible, light shapes to survive in the opponent's area. It often involves sacrificing some stones for a living group.",
                "es": "Sabaki es la habilidad de hacer formas flexibles y ligeras para sobrevivir en el área del oponente, a menudo sacrificando piedras.",
                "de": "Sabaki ist die Kunst leichte, flexible Formen zu bilden, um im Gebiet des Gegners zu überleben, oft durch Steinopfer.",
                "nl": "Sabaki is de vaardigheid om lichte, flexibele vormen te maken om te overleven in het gebied van de tegenstander."
            }
        },
        {
            "question": {
                "en": "What is the 'superko' rule?",
                "es": "¿Qué es la regla 'superko'?",
                "de": "Was ist die 'Superko'-Regel?",
                "nl": "Wat is de 'superko'-regel?"
            },
            "options": [
                {
                    "en": "No board position may be repeated during the game",
                    "es": "Ninguna posición del tablero puede repetirse durante el juego",
                    "de": "Keine Brettposition darf im Spiel wiederholt werden",
                    "nl": "Geen bordpositie mag tijdens het spel herhaald worden"
                },
                {
                    "en": "You can capture unlimited stones",
                    "es": "Puedes capturar piedras ilimitadas",
                    "de": "Man kann unbegrenzt Steine fangen",
                    "nl": "Je kunt onbeperkt stenen vangen"
                },
                {
                    "en": "Ko fights are not allowed",
                    "es": "Las peleas de ko no están permitidas",
                    "de": "Ko-Kämpfe sind nicht erlaubt",
                    "nl": "Ko-gevechten zijn niet toegestaan"
                },
                {
                    "en": "A stronger version of the opening",
                    "es": "Una versión más fuerte de la apertura",
                    "de": "Eine stärkere Version der Eröffnung",
                    "nl": "Een sterkere versie van de opening"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The superko rule prohibits any repetition of a previous board position, extending the basic ko rule to cover all possible repeated positions.",
                "es": "La regla superko prohíbe cualquier repetición de una posición anterior del tablero, extendiendo la regla básica de ko.",
                "de": "Die Superko-Regel verbietet jede Wiederholung einer früheren Brettposition und erweitert die grundlegende Ko-Regel.",
                "nl": "De superko-regel verbiedt elke herhaling van een eerdere bordpositie en breidt de basis ko-regel uit."
            }
        },
        {
            "question": {
                "en": "What is a 'capturing race' (semeai)?",
                "es": "¿Qué es una 'carrera de capturas' (semeai)?",
                "de": "Was ist ein 'Fangwettlauf' (Semeai)?",
                "nl": "Wat is een 'vangrace' (semeai)?"
            },
            "options": [
                {
                    "en": "Two groups competing to fill each other's liberties first",
                    "es": "Dos grupos compitiendo por llenar las libertades del otro primero",
                    "de": "Zwei Gruppen die darum kämpfen die Freiheiten des anderen zuerst zu füllen",
                    "nl": "Twee groepen die strijden om elkaars vrijheden eerst te vullen"
                },
                {
                    "en": "A race to place stones faster",
                    "es": "Una carrera para colocar piedras más rápido",
                    "de": "Ein Rennen um Steine schneller zu setzen",
                    "nl": "Een race om stenen sneller te plaatsen"
                },
                {
                    "en": "Running across the board",
                    "es": "Correr por el tablero",
                    "de": "Über das Brett rennen",
                    "nl": "Over het bord rennen"
                },
                {
                    "en": "A time control",
                    "es": "Un control de tiempo",
                    "de": "Eine Zeitkontrolle",
                    "nl": "Een tijdscontrole"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A semeai is when two adjacent enemy groups both lack eyes and race to capture each other by filling liberties. The group with fewer liberties dies.",
                "es": "Un semeai es cuando dos grupos enemigos adyacentes sin ojos compiten por capturarse llenando libertades. El grupo con menos libertades muere.",
                "de": "Ein Semeai entsteht wenn zwei benachbarte feindliche Gruppen ohne Augen darum kämpfen, die Freiheiten des anderen zu füllen.",
                "nl": "Een semeai ontstaat wanneer twee aangrenzende vijandelijke groepen zonder ogen strijden om elkaars vrijheden te vullen."
            }
        },
        {
            "question": {
                "en": "What AI defeated a top human Go player in 2016?",
                "es": "¿Qué IA derrotó a un jugador de Go top humano en 2016?",
                "de": "Welche KI besiegte 2016 einen Top-Go-Spieler?",
                "nl": "Welke AI versloeg in 2016 een top Go-speler?"
            },
            "options": [
                {
                    "en": "AlphaGo",
                    "es": "AlphaGo",
                    "de": "AlphaGo",
                    "nl": "AlphaGo"
                },
                {
                    "en": "Deep Blue",
                    "es": "Deep Blue",
                    "de": "Deep Blue",
                    "nl": "Deep Blue"
                },
                {
                    "en": "Watson",
                    "es": "Watson",
                    "de": "Watson",
                    "nl": "Watson"
                },
                {
                    "en": "ChatGPT",
                    "es": "ChatGPT",
                    "de": "ChatGPT",
                    "nl": "ChatGPT"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "AlphaGo, developed by DeepMind, defeated world champion Lee Sedol 4-1 in 2016, a historic milestone for artificial intelligence.",
                "es": "AlphaGo, desarrollado por DeepMind, derrotó al campeón mundial Lee Sedol 4-1 en 2016, un hito histórico para la inteligencia artificial.",
                "de": "AlphaGo von DeepMind besiegte 2016 den Weltmeister Lee Sedol 4:1, ein historischer Meilenstein für künstliche Intelligenz.",
                "nl": "AlphaGo, ontwikkeld door DeepMind, versloeg wereldkampioen Lee Sedol met 4-1 in 2016, een historische mijlpaal voor AI."
            }
        },
        {
            "question": {
                "en": "What is the name for Go in Chinese?",
                "es": "¿Cuál es el nombre del Go en chino?",
                "de": "Wie heißt Go auf Chinesisch?",
                "nl": "Wat is de naam voor Go in het Chinees?"
            },
            "options": [
                {
                    "en": "Weiqi",
                    "es": "Weiqi",
                    "de": "Weiqi",
                    "nl": "Weiqi"
                },
                {
                    "en": "Baduk",
                    "es": "Baduk",
                    "de": "Baduk",
                    "nl": "Baduk"
                },
                {
                    "en": "Igo",
                    "es": "Igo",
                    "de": "Igo",
                    "nl": "Igo"
                },
                {
                    "en": "Xiangqi",
                    "es": "Xiangqi",
                    "de": "Xiangqi",
                    "nl": "Xiangqi"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Go is called Weiqi in Chinese, meaning 'encircling game'. In Korean it is called Baduk, and in Japanese it is called Igo or Go.",
                "es": "Go se llama Weiqi en chino, que significa 'juego de cercar'. En coreano es Baduk, y en japonés es Igo o Go.",
                "de": "Go heißt auf Chinesisch Weiqi, was 'Umkreisungsspiel' bedeutet. Auf Koreanisch heißt es Baduk, auf Japanisch Igo oder Go.",
                "nl": "Go heet Weiqi in het Chinees, wat 'omsingelspel' betekent. In het Koreaans is het Baduk, in het Japans Igo of Go."
            }
        },
        {
            "question": {
                "en": "What is the name for Go in Korean?",
                "es": "¿Cuál es el nombre del Go en coreano?",
                "de": "Wie heißt Go auf Koreanisch?",
                "nl": "Wat is de naam voor Go in het Koreaans?"
            },
            "options": [
                {
                    "en": "Baduk",
                    "es": "Baduk",
                    "de": "Baduk",
                    "nl": "Baduk"
                },
                {
                    "en": "Weiqi",
                    "es": "Weiqi",
                    "de": "Weiqi",
                    "nl": "Weiqi"
                },
                {
                    "en": "Shogi",
                    "es": "Shogi",
                    "de": "Shogi",
                    "nl": "Shogi"
                },
                {
                    "en": "Mahjong",
                    "es": "Mahjong",
                    "de": "Mahjong",
                    "nl": "Mahjong"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Go is called Baduk in Korean. South Korea has a strong Go culture with many professional players and popular Go TV channels.",
                "es": "Go se llama Baduk en coreano. Corea del Sur tiene una fuerte cultura de Go con muchos profesionales y canales de TV de Go.",
                "de": "Go heißt auf Koreanisch Baduk. Südkorea hat eine starke Go-Kultur mit vielen Profispielern und beliebten Go-TV-Kanälen.",
                "nl": "Go heet Baduk in het Koreaans. Zuid-Korea heeft een sterke Go-cultuur met veel professionele spelers en Go-tv-kanalen."
            }
        },
        {
            "question": {
                "en": "What is an 'enclosure' in Go?",
                "es": "¿Qué es un 'cercado' en Go?",
                "de": "Was ist eine 'Einfassung' bei Go?",
                "nl": "Wat is een 'opsluiting' bij Go?"
            },
            "options": [
                {
                    "en": "Two stones that secure a corner area",
                    "es": "Dos piedras que aseguran un área de esquina",
                    "de": "Zwei Steine die einen Eckbereich sichern",
                    "nl": "Twee stenen die een hoekgebied beveiligen"
                },
                {
                    "en": "A fence around the board",
                    "es": "Una valla alrededor del tablero",
                    "de": "Ein Zaun um das Brett",
                    "nl": "Een hek rond het bord"
                },
                {
                    "en": "Surrounding all opponent stones",
                    "es": "Rodear todas las piedras del oponente",
                    "de": "Alle gegnerischen Steine umgeben",
                    "nl": "Alle stenen van de tegenstander omringen"
                },
                {
                    "en": "The box the game comes in",
                    "es": "La caja del juego",
                    "de": "Die Spielschachtel",
                    "nl": "De doos van het spel"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "An enclosure uses two stones to stake out corner territory. It makes it harder for the opponent to invade the corner.",
                "es": "Un cercado usa dos piedras para delimitar territorio de esquina. Dificulta la invasión del oponente a la esquina.",
                "de": "Eine Einfassung verwendet zwei Steine um Eckgebiet abzustecken. Sie erschwert dem Gegner das Eindringen in die Ecke.",
                "nl": "Een opsluiting gebruikt twee stenen om hoekgebied af te bakenen. Het maakt het moeilijker voor de tegenstander om de hoek in te vallen."
            }
        },
        {
            "question": {
                "en": "What is a 'forcing move' in Go?",
                "es": "¿Qué es un 'movimiento forzante' en Go?",
                "de": "Was ist ein 'Zwangszug' bei Go?",
                "nl": "Wat is een 'dwingende zet' bij Go?"
            },
            "options": [
                {
                    "en": "A move the opponent must respond to",
                    "es": "Un movimiento al que el oponente debe responder",
                    "de": "Ein Zug auf den der Gegner antworten muss",
                    "nl": "Een zet waarop de tegenstander moet antwoorden"
                },
                {
                    "en": "Forcing the opponent to resign",
                    "es": "Forzar al oponente a rendirse",
                    "de": "Den Gegner zur Aufgabe zwingen",
                    "nl": "De tegenstander dwingen op te geven"
                },
                {
                    "en": "Moving a stone by force",
                    "es": "Mover una piedra por fuerza",
                    "de": "Einen Stein mit Gewalt bewegen",
                    "nl": "Een steen met kracht bewegen"
                },
                {
                    "en": "An illegal move",
                    "es": "Un movimiento ilegal",
                    "de": "Ein illegaler Zug",
                    "nl": "Een illegale zet"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A forcing move is one that demands a response, such as an atari. Playing forcing moves before other moves can improve your position for free.",
                "es": "Un movimiento forzante exige una respuesta, como un atari. Jugar movimientos forzantes antes mejora tu posición gratuitamente.",
                "de": "Ein Zwangszug verlangt eine Antwort, wie ein Atari. Zwangszüge vor anderen Zügen zu spielen verbessert die Position kostenlos.",
                "nl": "Een dwingende zet vereist een antwoord, zoals een atari. Dwingende zetten spelen voor andere zetten verbetert je positie gratis."
            }
        },
        {
            "question": {
                "en": "What is 'thickness vs territory' in Go strategy?",
                "es": "¿Qué es 'grosor vs territorio' en la estrategia de Go?",
                "de": "Was ist 'Dicke gegen Gebiet' in der Go-Strategie?",
                "nl": "Wat is 'dikte vs gebied' in Go-strategie?"
            },
            "options": [
                {
                    "en": "A tradeoff between strong walls and enclosed points",
                    "es": "Un intercambio entre muros fuertes y puntos encerrados",
                    "de": "Ein Kompromiss zwischen starken Mauern und eingeschlossenen Punkten",
                    "nl": "Een afweging tussen sterke muren en ingesloten punten"
                },
                {
                    "en": "Using thick stones vs thin stones",
                    "es": "Usar piedras gruesas vs piedras finas",
                    "de": "Dicke Steine gegen dünne Steine verwenden",
                    "nl": "Dikke stenen vs dunne stenen gebruiken"
                },
                {
                    "en": "Playing on a thick board vs thin board",
                    "es": "Jugar en un tablero grueso vs fino",
                    "de": "Auf einem dicken Brett vs dünnem Brett spielen",
                    "nl": "Spelen op een dik bord vs dun bord"
                },
                {
                    "en": "It is the same thing",
                    "es": "Es lo mismo",
                    "de": "Es ist dasselbe",
                    "nl": "Het is hetzelfde"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "In Go, players balance between building thick walls for influence and securing enclosed territory directly. Both strategies can lead to victory.",
                "es": "En Go, los jugadores equilibran entre construir muros gruesos para influencia y asegurar territorio encerrado directamente.",
                "de": "Bei Go balancieren Spieler zwischen dem Bau dicker Mauern für Einfluss und dem direkten Sichern von eingeschlossenem Gebiet.",
                "nl": "Bij Go balanceren spelers tussen het bouwen van dikke muren voor invloed en het direct beveiligen van ingesloten gebied."
            }
        },
        {
            "question": {
                "en": "How many total intersections are on a 19x19 Go board?",
                "es": "¿Cuántas intersecciones hay en un tablero de Go 19x19?",
                "de": "Wie viele Kreuzungen hat ein 19x19 Go-Brett?",
                "nl": "Hoeveel kruispunten heeft een 19x19 Go-bord?"
            },
            "options": [
                {
                    "en": "361",
                    "es": "361",
                    "de": "361",
                    "nl": "361"
                },
                {
                    "en": "400",
                    "es": "400",
                    "de": "400",
                    "nl": "400"
                },
                {
                    "en": "324",
                    "es": "324",
                    "de": "324",
                    "nl": "324"
                },
                {
                    "en": "256",
                    "es": "256",
                    "de": "256",
                    "nl": "256"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A 19x19 board has 361 intersections (19 times 19). Each intersection is a potential place to play a stone.",
                "es": "Un tablero 19x19 tiene 361 intersecciones (19 por 19). Cada intersección es un lugar potencial para jugar una piedra.",
                "de": "Ein 19x19 Brett hat 361 Kreuzungen (19 mal 19). Jede Kreuzung ist ein möglicher Platz für einen Stein.",
                "nl": "Een 19x19 bord heeft 361 kruispunten (19 maal 19). Elk kruispunt is een mogelijke plek om een steen te spelen."
            }
        },
        {
            "question": {
                "en": "What is a '13x13' board used for?",
                "es": "¿Para qué se usa un tablero '13x13'?",
                "de": "Wofür wird ein '13x13' Brett verwendet?",
                "nl": "Waarvoor wordt een '13x13' bord gebruikt?"
            },
            "options": [
                {
                    "en": "Medium-length games for intermediate players",
                    "es": "Juegos de duración media para jugadores intermedios",
                    "de": "Mittelange Spiele für fortgeschrittene Spieler",
                    "nl": "Middellange spellen voor gevorderde spelers"
                },
                {
                    "en": "Professional tournaments only",
                    "es": "Solo torneos profesionales",
                    "de": "Nur professionelle Turniere",
                    "nl": "Alleen professionele toernooien"
                },
                {
                    "en": "Training animals to play",
                    "es": "Entrenar animales para jugar",
                    "de": "Tiere zum Spielen trainieren",
                    "nl": "Dieren trainen om te spelen"
                },
                {
                    "en": "Decoration only",
                    "es": "Solo decoración",
                    "de": "Nur Dekoration",
                    "nl": "Alleen decoratie"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The 13x13 board offers a medium-length game, bridging the gap between the small 9x9 for beginners and the full 19x19 board.",
                "es": "El tablero 13x13 ofrece un juego de duración media, entre el pequeño 9x9 para principiantes y el 19x19 completo.",
                "de": "Das 13x13 Brett bietet ein mittellanges Spiel, als Brücke zwischen dem kleinen 9x9 für Anfänger und dem vollen 19x19.",
                "nl": "Het 13x13 bord biedt een middellang spel, als brug tussen het kleine 9x9 voor beginners en het volledige 19x19."
            }
        },
        {
            "question": {
                "en": "What is a 'monkey jump' used for?",
                "es": "¿Para qué se usa un 'salto de mono'?",
                "de": "Wofür wird ein 'Affensprung' verwendet?",
                "nl": "Waarvoor wordt een 'apensprong' gebruikt?"
            },
            "options": [
                {
                    "en": "To steal territory along the edge in the endgame",
                    "es": "Para robar territorio a lo largo del borde en el final",
                    "de": "Um Gebiet am Rand im Endspiel zu stehlen",
                    "nl": "Om gebied langs de rand te stelen in het eindspel"
                },
                {
                    "en": "To jump over opponent stones",
                    "es": "Para saltar sobre piedras del oponente",
                    "de": "Um über gegnerische Steine zu springen",
                    "nl": "Om over stenen van de tegenstander te springen"
                },
                {
                    "en": "To start the game",
                    "es": "Para empezar el juego",
                    "de": "Um das Spiel zu beginnen",
                    "nl": "Om het spel te beginnen"
                },
                {
                    "en": "To build a wall",
                    "es": "Para construir un muro",
                    "de": "Um eine Mauer zu bauen",
                    "nl": "Om een muur te bouwen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The monkey jump is an endgame technique that slides along the first line to reduce the opponent's side territory by several points.",
                "es": "El salto de mono es una técnica de final que desliza por la primera línea para reducir el territorio lateral del oponente.",
                "de": "Der Affensprung ist eine Endspieltechnik die entlang der ersten Linie gleitet, um das Seitengebiet des Gegners zu reduzieren.",
                "nl": "De apensprong is een eindspeeltechniek die langs de eerste lijn glijdt om het zijgebied van de tegenstander te verminderen."
            }
        },
        {
            "question": {
                "en": "What is an 'approach' in Go openings?",
                "es": "¿Qué es un 'acercamiento' en las aperturas de Go?",
                "de": "Was ist ein 'Annäherung' in Go-Eröffnungen?",
                "nl": "Wat is een 'benadering' bij Go-openingen?"
            },
            "options": [
                {
                    "en": "Playing near an opponent's corner stone",
                    "es": "Jugar cerca de una piedra de esquina del oponente",
                    "de": "Nahe einem Eckstein des Gegners spielen",
                    "nl": "Spelen bij een hoeksteen van de tegenstander"
                },
                {
                    "en": "Walking toward the table",
                    "es": "Caminar hacia la mesa",
                    "de": "Zum Tisch gehen",
                    "nl": "Naar de tafel lopen"
                },
                {
                    "en": "The first move of the game",
                    "es": "El primer movimiento del juego",
                    "de": "Der erste Zug des Spiels",
                    "nl": "De eerste zet van het spel"
                },
                {
                    "en": "Ending the game",
                    "es": "Terminar el juego",
                    "de": "Das Spiel beenden",
                    "nl": "Het spel beëindigen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "An approach is playing near an opponent's lone corner stone to prevent them from easily securing corner territory with an enclosure.",
                "es": "Un acercamiento es jugar cerca de una piedra sola del oponente en la esquina para evitar que asegure territorio fácilmente.",
                "de": "Eine Annäherung spielt nahe einem einsamen Eckstein des Gegners, um zu verhindern dass er das Eckgebiet einfach sichert.",
                "nl": "Een benadering speelt bij een alleenstaande hoeksteen van de tegenstander om te voorkomen dat die het hoekgebied makkelijk beveiligt."
            }
        },
        {
            "question": {
                "en": "What is the 'Chinese opening' in Go?",
                "es": "¿Qué es la 'apertura china' en Go?",
                "de": "Was ist die 'chinesische Eröffnung' bei Go?",
                "nl": "Wat is de 'Chinese opening' bij Go?"
            },
            "options": [
                {
                    "en": "A popular opening formation using the star point and side",
                    "es": "Una formación de apertura popular usando el punto estrella y el lado",
                    "de": "Eine beliebte Eröffnungsformation mit Sternpunkt und Seite",
                    "nl": "Een populaire openingsformatie met sterpunt en zijkant"
                },
                {
                    "en": "An opening only used in China",
                    "es": "Una apertura usada solo en China",
                    "de": "Eine Eröffnung nur in China verwendet",
                    "nl": "Een opening alleen gebruikt in China"
                },
                {
                    "en": "Playing all moves in the center",
                    "es": "Jugar todos los movimientos en el centro",
                    "de": "Alle Züge in der Mitte spielen",
                    "nl": "Alle zetten in het midden spelen"
                },
                {
                    "en": "Skipping the first three moves",
                    "es": "Saltar los primeros tres movimientos",
                    "de": "Die ersten drei Züge überspringen",
                    "nl": "De eerste drie zetten overslaan"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The Chinese opening is a well-known formation where black plays star points with a side stone, creating a framework for territory and influence.",
                "es": "La apertura china es una formación donde negro juega puntos estrella con una piedra lateral, creando un marco para territorio e influencia.",
                "de": "Die chinesische Eröffnung ist eine bekannte Formation bei der Schwarz Sternpunkte mit einem Seitenstein spielt.",
                "nl": "De Chinese opening is een bekende formatie waarbij zwart sterpunten speelt met een zijsteen, voor een raamwerk van gebied en invloed."
            }
        },
        {
            "question": {
                "en": "What is a 'squeeze' technique used for?",
                "es": "¿Para qué se usa la técnica 'squeeze'?",
                "de": "Wofür wird die 'Squeeze'-Technik verwendet?",
                "nl": "Waarvoor wordt de 'squeeze'-techniek gebruikt?"
            },
            "options": [
                {
                    "en": "Sacrificing stones to gain a positional advantage",
                    "es": "Sacrificar piedras para obtener una ventaja posicional",
                    "de": "Steine opfern um einen positionellen Vorteil zu erhalten",
                    "nl": "Stenen opofferen voor een positioneel voordeel"
                },
                {
                    "en": "Pressing stones flat",
                    "es": "Aplastar piedras",
                    "de": "Steine flach drücken",
                    "nl": "Stenen plat drukken"
                },
                {
                    "en": "Making the board smaller",
                    "es": "Hacer el tablero más pequeño",
                    "de": "Das Brett kleiner machen",
                    "nl": "Het bord kleiner maken"
                },
                {
                    "en": "Ending the game quickly",
                    "es": "Terminar el juego rápidamente",
                    "de": "Das Spiel schnell beenden",
                    "nl": "Het spel snel beëindigen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The squeeze technique sacrifices stones that the opponent captures, then uses the resulting formation to gain outside influence or other advantages.",
                "es": "La técnica squeeze sacrifica piedras que el oponente captura, luego usa la formación resultante para ganar influencia externa.",
                "de": "Die Squeeze-Technik opfert Steine die der Gegner fängt und nutzt die entstehende Formation für äußeren Einfluss oder andere Vorteile.",
                "nl": "De squeeze-techniek offert stenen op die de tegenstander vangt en gebruikt de resulterende formatie voor invloed of andere voordelen."
            }
        },
        {
            "question": {
                "en": "What is 'oba' in Go?",
                "es": "¿Qué es 'oba' en Go?",
                "de": "Was ist 'Oba' bei Go?",
                "nl": "Wat is 'oba' bij Go?"
            },
            "options": [
                {
                    "en": "A large open area worth many points",
                    "es": "Un área abierta grande que vale muchos puntos",
                    "de": "Ein großer offener Bereich der viele Punkte wert ist",
                    "nl": "Een groot open gebied dat veel punten waard is"
                },
                {
                    "en": "A type of stone",
                    "es": "Un tipo de piedra",
                    "de": "Eine Art Stein",
                    "nl": "Een soort steen"
                },
                {
                    "en": "A greeting",
                    "es": "Un saludo",
                    "de": "Eine Begrüßung",
                    "nl": "Een begroeting"
                },
                {
                    "en": "A penalty",
                    "es": "Una penalización",
                    "de": "Eine Strafe",
                    "nl": "Een straf"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Oba means a big point, an area of the board where playing first would gain a large amount of territory or influence for either player.",
                "es": "Oba significa un punto grande, un área del tablero donde jugar primero ganaría mucho territorio o influencia para cualquier jugador.",
                "de": "Oba bedeutet einen großen Punkt, einen Bereich wo das erste Spielen viel Gebiet oder Einfluss für beide Spieler bringen würde.",
                "nl": "Oba betekent een groot punt, een gebied op het bord waar als eerste spelen veel gebied of invloed oplevert voor beide spelers."
            }
        },
        {
            "question": {
                "en": "What is the difference between 'sente' and 'gote'?",
                "es": "¿Cuál es la diferencia entre 'sente' y 'gote'?",
                "de": "Was ist der Unterschied zwischen 'Sente' und 'Gote'?",
                "nl": "Wat is het verschil tussen 'sente' en 'gote'?"
            },
            "options": [
                {
                    "en": "Sente has initiative, gote loses initiative",
                    "es": "Sente tiene la iniciativa, gote pierde la iniciativa",
                    "de": "Sente hat die Initiative, Gote verliert die Initiative",
                    "nl": "Sente heeft het initiatief, gote verliest het initiatief"
                },
                {
                    "en": "They are the same thing",
                    "es": "Son lo mismo",
                    "de": "Sie sind dasselbe",
                    "nl": "Ze zijn hetzelfde"
                },
                {
                    "en": "Sente is black, gote is white",
                    "es": "Sente es negro, gote es blanco",
                    "de": "Sente ist Schwarz, Gote ist Weiß",
                    "nl": "Sente is zwart, gote is wit"
                },
                {
                    "en": "Sente means pass, gote means play",
                    "es": "Sente significa pasar, gote significa jugar",
                    "de": "Sente bedeutet passen, Gote bedeutet spielen",
                    "nl": "Sente betekent passen, gote betekent spelen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Sente means having the initiative where your move forces a response. Gote means losing initiative because the opponent can ignore your move.",
                "es": "Sente significa tener la iniciativa donde tu movimiento fuerza una respuesta. Gote significa perder iniciativa.",
                "de": "Sente bedeutet die Initiative zu haben, wo der eigene Zug eine Antwort erzwingt. Gote bedeutet die Initiative zu verlieren.",
                "nl": "Sente betekent het initiatief hebben waarbij je zet een antwoord afdwingt. Gote betekent het initiatief verliezen."
            }
        },
        {
            "question": {
                "en": "What is a 'bamboo joint' used for?",
                "es": "¿Para qué se usa una 'junta de bambú'?",
                "de": "Wofür wird eine 'Bambusverbindung' verwendet?",
                "nl": "Waarvoor wordt een 'bamboeverbinding' gebruikt?"
            },
            "options": [
                {
                    "en": "Making an unbreakable connection between groups",
                    "es": "Hacer una conexión inquebrantable entre grupos",
                    "de": "Eine untrennbare Verbindung zwischen Gruppen herstellen",
                    "nl": "Een onbreekbare verbinding tussen groepen maken"
                },
                {
                    "en": "Scoring extra points",
                    "es": "Conseguir puntos extra",
                    "de": "Extrapunkte erzielen",
                    "nl": "Extra punten scoren"
                },
                {
                    "en": "Building with bamboo",
                    "es": "Construir con bambú",
                    "de": "Mit Bambus bauen",
                    "nl": "Bouwen met bamboe"
                },
                {
                    "en": "Ending the game",
                    "es": "Terminar el juego",
                    "de": "Das Spiel beenden",
                    "nl": "Het spel beëindigen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A bamboo joint is a shape of two pairs of stones that creates an unbreakable connection. The opponent cannot cut between them no matter what.",
                "es": "Una junta de bambú es una forma de dos pares de piedras que crea una conexión inquebrantable. El oponente no puede cortarla.",
                "de": "Eine Bambusverbindung ist eine Form aus zwei Steinpaaren die eine untrennbare Verbindung schafft. Der Gegner kann sie nicht trennen.",
                "nl": "Een bamboeverbinding is een vorm van twee paren stenen die een onbreekbare verbinding creëert. De tegenstander kan ze niet scheiden."
            }
        },
        {
            "question": {
                "en": "What is 'yose' in Go?",
                "es": "¿Qué es 'yose' en Go?",
                "de": "Was ist 'Yose' bei Go?",
                "nl": "Wat is 'yose' bij Go?"
            },
            "options": [
                {
                    "en": "The endgame phase of play",
                    "es": "La fase final del juego",
                    "de": "Die Endspielphase",
                    "nl": "De eindspielfase"
                },
                {
                    "en": "The opening",
                    "es": "La apertura",
                    "de": "Die Eröffnung",
                    "nl": "De opening"
                },
                {
                    "en": "A type of capture",
                    "es": "Un tipo de captura",
                    "de": "Eine Art Fang",
                    "nl": "Een soort vangst"
                },
                {
                    "en": "A greeting",
                    "es": "Un saludo",
                    "de": "Eine Begrüßung",
                    "nl": "Een begroeting"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Yose is the endgame phase where players make small moves to finalize territorial boundaries. Accurate yose play can decide close games.",
                "es": "Yose es la fase final donde los jugadores hacen movimientos pequeños para finalizar las fronteras territoriales.",
                "de": "Yose ist die Endspielphase in der Spieler kleine Züge machen um die Gebietsgrenzen festzulegen. Genaues Yose entscheidet enge Spiele.",
                "nl": "Yose is de eindspielfase waarin spelers kleine zetten doen om gebiedsgrenzen vast te leggen. Nauwkeurig yose beslist krappe spellen."
            }
        },
        {
            "question": {
                "en": "What is 'chuban' in Go?",
                "es": "¿Qué es 'chuban' en Go?",
                "de": "Was ist 'Chuban' bei Go?",
                "nl": "Wat is 'chuban' bij Go?"
            },
            "options": [
                {
                    "en": "The middle game phase",
                    "es": "La fase del medio juego",
                    "de": "Die Mittelspielphase",
                    "nl": "De middenspielfase"
                },
                {
                    "en": "The opening",
                    "es": "La apertura",
                    "de": "Die Eröffnung",
                    "nl": "De opening"
                },
                {
                    "en": "The endgame",
                    "es": "El final del juego",
                    "de": "Das Endspiel",
                    "nl": "Het eindspel"
                },
                {
                    "en": "A type of board",
                    "es": "Un tipo de tablero",
                    "de": "Eine Art Brett",
                    "nl": "Een soort bord"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Chuban is the middle game phase between the opening (fuseki) and endgame (yose). It features fighting, invasions, and complex tactical play.",
                "es": "Chuban es la fase del medio juego entre la apertura (fuseki) y el final (yose). Incluye luchas, invasiones y tácticas complejas.",
                "de": "Chuban ist die Mittelspielphase zwischen Eröffnung (Fuseki) und Endspiel (Yose). Sie umfasst Kämpfe, Invasionen und komplexe Taktik.",
                "nl": "Chuban is de middenspielfase tussen de opening (fuseki) en het eindspel (yose). Het bevat gevechten, invasies en complexe tactiek."
            }
        },
        {
            "question": {
                "en": "What is a 'double atari' in Go?",
                "es": "¿Qué es un 'doble atari' en Go?",
                "de": "Was ist ein 'Doppel-Atari' bei Go?",
                "nl": "Wat is een 'dubbel atari' bij Go?"
            },
            "options": [
                {
                    "en": "A move that threatens two groups at once",
                    "es": "Un movimiento que amenaza dos grupos a la vez",
                    "de": "Ein Zug der zwei Gruppen gleichzeitig bedroht",
                    "nl": "Een zet die twee groepen tegelijk bedreigt"
                },
                {
                    "en": "Saying atari twice in a row",
                    "es": "Decir atari dos veces seguidas",
                    "de": "Zweimal hintereinander Atari sagen",
                    "nl": "Twee keer achter elkaar atari zeggen"
                },
                {
                    "en": "Capturing two stones simultaneously",
                    "es": "Capturar dos piedras simultáneamente",
                    "de": "Zwei Steine gleichzeitig fangen",
                    "nl": "Twee stenen tegelijk slaan"
                },
                {
                    "en": "A move on the second line",
                    "es": "Un movimiento en la segunda línea",
                    "de": "Ein Zug auf der zweiten Linie",
                    "nl": "Een zet op de tweede lijn"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A double atari threatens to capture two separate groups with one move. The opponent can only save one group, so the other will be captured.",
                "es": "Un doble atari amenaza capturar dos grupos separados con un movimiento. El oponente solo puede salvar uno.",
                "de": "Ein Doppel-Atari droht mit einem Zug zwei Gruppen zu fangen. Der Gegner kann nur eine retten.",
                "nl": "Een dubbel atari dreigt met één zet twee groepen te slaan. De tegenstander kan er maar één redden."
            }
        },
        {
            "question": {
                "en": "What is the 'two-space extension' in Go?",
                "es": "¿Qué es la 'extensión de dos espacios' en Go?",
                "de": "Was ist die 'Zwei-Punkte-Erweiterung' bei Go?",
                "nl": "Wat is de 'twee-puntsuitbreiding' bij Go?"
            },
            "options": [
                {
                    "en": "Placing a stone two intersections from an existing stone",
                    "es": "Colocar una piedra a dos intersecciones de una piedra existente",
                    "de": "Einen Stein zwei Kreuzungen von einem bestehenden Stein setzen",
                    "nl": "Een steen twee kruispunten van een bestaande steen plaatsen"
                },
                {
                    "en": "Moving two stones at the same time",
                    "es": "Mover dos piedras al mismo tiempo",
                    "de": "Zwei Steine gleichzeitig bewegen",
                    "nl": "Twee stenen tegelijk bewegen"
                },
                {
                    "en": "Making the board two spaces larger",
                    "es": "Hacer el tablero dos espacios más grande",
                    "de": "Das Brett um zwei Felder vergrößern",
                    "nl": "Het bord twee vakken groter maken"
                },
                {
                    "en": "Taking two turns in a row",
                    "es": "Tomar dos turnos seguidos",
                    "de": "Zwei Züge hintereinander machen",
                    "nl": "Twee beurten achter elkaar nemen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A two-space extension places a stone two points away from a friendly stone along the side. It balances territory and stability.",
                "es": "Una extensión de dos espacios coloca una piedra a dos puntos de una piedra amiga. Equilibra territorio y estabilidad.",
                "de": "Eine Zwei-Punkte-Erweiterung setzt einen Stein zwei Punkte von einem eigenen Stein entfernt. Sie balanciert Gebiet und Stabilität.",
                "nl": "Een twee-puntsuitbreiding plaatst een steen twee punten van een eigen steen. Het balanceert gebied en stabiliteit."
            }
        },
        {
            "question": {
                "en": "What is a 'cap' move in Go?",
                "es": "¿Qué es un movimiento de 'capa' en Go?",
                "de": "Was ist ein 'Kappen'-Zug bei Go?",
                "nl": "Wat is een 'kap'-zet bij Go?"
            },
            "options": [
                {
                    "en": "A move placed directly above an opponent's stone to limit expansion",
                    "es": "Un movimiento colocado encima de una piedra del oponente para limitar expansión",
                    "de": "Ein Zug direkt über einem gegnerischen Stein um Expansion zu begrenzen",
                    "nl": "Een zet direct boven een steen van de tegenstander om uitbreiding te beperken"
                },
                {
                    "en": "Covering a stone with another stone",
                    "es": "Cubrir una piedra con otra piedra",
                    "de": "Einen Stein mit einem anderen bedecken",
                    "nl": "Een steen bedekken met een andere steen"
                },
                {
                    "en": "The final move of the game",
                    "es": "El movimiento final del juego",
                    "de": "Der letzte Zug des Spiels",
                    "nl": "De laatste zet van het spel"
                },
                {
                    "en": "A move on the top line of the board",
                    "es": "Un movimiento en la línea superior del tablero",
                    "de": "Ein Zug auf der obersten Linie des Bretts",
                    "nl": "Een zet op de bovenste lijn van het bord"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A cap is played one point directly above an opponent's stone, pressing it toward the edge and limiting its potential to expand into the center.",
                "es": "Una capa se juega un punto encima de una piedra del oponente, presionándola hacia el borde y limitando su expansión al centro.",
                "de": "Ein Kappen-Zug wird einen Punkt über einem gegnerischen Stein gespielt und drückt ihn zum Rand, begrenzt seine Expansion.",
                "nl": "Een kap wordt één punt boven een steen van de tegenstander gespeeld, drukt deze naar de rand en beperkt uitbreiding."
            }
        },
        {
            "question": {
                "en": "What does 'thickness' mean in Go strategy?",
                "es": "¿Qué significa 'grosor' en la estrategia de Go?",
                "de": "Was bedeutet 'Dicke' in der Go-Strategie?",
                "nl": "Wat betekent 'dikte' in de Go-strategie?"
            },
            "options": [
                {
                    "en": "Strong stones with no weaknesses that project power",
                    "es": "Piedras fuertes sin debilidades que proyectan poder",
                    "de": "Starke Steine ohne Schwächen die Kraft ausstrahlen",
                    "nl": "Sterke stenen zonder zwakheden die kracht uitstralen"
                },
                {
                    "en": "How thick the physical stones are",
                    "es": "Qué tan gruesas son las piedras físicas",
                    "de": "Wie dick die physischen Steine sind",
                    "nl": "Hoe dik de fysieke stenen zijn"
                },
                {
                    "en": "Having many stones on the board",
                    "es": "Tener muchas piedras en el tablero",
                    "de": "Viele Steine auf dem Brett haben",
                    "nl": "Veel stenen op het bord hebben"
                },
                {
                    "en": "The density of the board material",
                    "es": "La densidad del material del tablero",
                    "de": "Die Dichte des Brettmaterials",
                    "nl": "De dichtheid van het bordmateriaal"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Thickness refers to a strong group of stones that has no weaknesses. It projects influence outward and can be used to attack nearby opponent groups.",
                "es": "El grosor se refiere a un grupo fuerte de piedras sin debilidades. Proyecta influencia y puede usarse para atacar grupos cercanos.",
                "de": "Dicke bezeichnet eine starke Steingruppe ohne Schwächen. Sie strahlt Einfluss aus und kann zum Angriff auf nahe Gruppen genutzt werden.",
                "nl": "Dikte verwijst naar een sterke groep stenen zonder zwakheden. Het straalt invloed uit en kan gebruikt worden om nabije groepen aan te vallen."
            }
        },
        {
            "question": {
                "en": "What is a 'probe' move in Go?",
                "es": "¿Qué es un movimiento de 'sondeo' en Go?",
                "de": "Was ist ein 'Sondierungszug' bei Go?",
                "nl": "Wat is een 'sondeer'-zet bij Go?"
            },
            "options": [
                {
                    "en": "A move to test how the opponent will respond",
                    "es": "Un movimiento para probar cómo responderá el oponente",
                    "de": "Ein Zug um zu testen wie der Gegner reagiert",
                    "nl": "Een zet om te testen hoe de tegenstander reageert"
                },
                {
                    "en": "A deep move into enemy territory",
                    "es": "Un movimiento profundo en territorio enemigo",
                    "de": "Ein tiefer Zug ins feindliche Gebiet",
                    "nl": "Een diepe zet in vijandelijk gebied"
                },
                {
                    "en": "A scientific instrument for Go analysis",
                    "es": "Un instrumento científico para análisis de Go",
                    "de": "Ein wissenschaftliches Instrument für Go-Analyse",
                    "nl": "Een wetenschappelijk instrument voor Go-analyse"
                },
                {
                    "en": "Asking the opponent about their strategy",
                    "es": "Preguntar al oponente sobre su estrategia",
                    "de": "Den Gegner nach seiner Strategie fragen",
                    "nl": "De tegenstander vragen naar zijn strategie"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A probe is a move played to see how the opponent responds, gathering information about their intentions before committing to a plan.",
                "es": "Un sondeo es un movimiento para ver cómo responde el oponente, recopilando información sobre sus intenciones.",
                "de": "Ein Sondierungszug wird gespielt um zu sehen wie der Gegner reagiert und Informationen über seine Absichten zu sammeln.",
                "nl": "Een sondeerzet wordt gespeeld om te zien hoe de tegenstander reageert en informatie over zijn bedoelingen te verzamelen."
            }
        },
        {
            "question": {
                "en": "What is a 'snapback' in Go?",
                "es": "¿Qué es un 'snapback' en Go?",
                "de": "Was ist ein 'Snapback' bei Go?",
                "nl": "Wat is een 'snapback' bij Go?"
            },
            "options": [
                {
                    "en": "Recapturing a stone immediately after the opponent captures",
                    "es": "Recapturar una piedra inmediatamente después de que el oponente captura",
                    "de": "Einen Stein sofort nach der gegnerischen Erfassung zurückfangen",
                    "nl": "Een steen direct herslaan nadat de tegenstander slaat"
                },
                {
                    "en": "Snapping a stone onto the board",
                    "es": "Colocar una piedra de golpe en el tablero",
                    "de": "Einen Stein auf das Brett knallen",
                    "nl": "Een steen op het bord klikken"
                },
                {
                    "en": "Taking back a move",
                    "es": "Retractar un movimiento",
                    "de": "Einen Zug zurücknehmen",
                    "nl": "Een zet terugnemen"
                },
                {
                    "en": "A rubber band around stones",
                    "es": "Una banda elástica alrededor de piedras",
                    "de": "Ein Gummiband um Steine",
                    "nl": "Een elastiek rond stenen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A snapback occurs when a stone captures but then is immediately recaptured because it has no liberties after capturing. It is a common tactical pattern.",
                "es": "Un snapback ocurre cuando una piedra captura pero es inmediatamente recapturada porque no tiene libertades después de capturar.",
                "de": "Ein Snapback tritt auf wenn ein Stein fängt aber sofort zurückgefangen wird, weil er nach dem Fangen keine Freiheiten hat.",
                "nl": "Een snapback ontstaat wanneer een steen slaat maar direct wordt teruggeslagen omdat deze geen vrijheden heeft na het slaan."
            }
        },
        {
            "question": {
                "en": "What is 'yose' in Go?",
                "es": "¿Qué es 'yose' en Go?",
                "de": "Was ist 'Yose' bei Go?",
                "nl": "Wat is 'yose' bij Go?"
            },
            "options": [
                {
                    "en": "The endgame phase of a Go game",
                    "es": "La fase final de un juego de Go",
                    "de": "Die Endspielphase eines Go-Spiels",
                    "nl": "De eindspielfase van een Go-spel"
                },
                {
                    "en": "A type of opening strategy",
                    "es": "Un tipo de estrategia de apertura",
                    "de": "Eine Art Eröffnungsstrategie",
                    "nl": "Een soort openingsstrategie"
                },
                {
                    "en": "A Japanese board game",
                    "es": "Un juego de mesa japonés",
                    "de": "Ein japanisches Brettspiel",
                    "nl": "Een Japans bordspel"
                },
                {
                    "en": "A Go tournament",
                    "es": "Un torneo de Go",
                    "de": "Ein Go-Turnier",
                    "nl": "Een Go-toernooi"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Yose is the endgame phase where players fill in the borders between territories. Accurate yose play can make the difference between winning and losing.",
                "es": "Yose es la fase final donde los jugadores llenan los bordes entre territorios. Un yose preciso puede decidir entre ganar y perder.",
                "de": "Yose ist die Endspielphase in der Spieler die Grenzen zwischen Gebieten ausfüllen. Präzises Yose kann über Sieg und Niederlage entscheiden.",
                "nl": "Yose is de eindspielfase waarin spelers de grenzen tussen gebieden invullen. Nauwkeurig yose kan het verschil maken tussen winnen en verliezen."
            }
        },
        {
            "question": {
                "en": "What is a 'geta' in Go tactics?",
                "es": "¿Qué es un 'geta' en tácticas de Go?",
                "de": "Was ist ein 'Geta' in der Go-Taktik?",
                "nl": "Wat is een 'geta' in Go-tactieken?"
            },
            "options": [
                {
                    "en": "A net-like capturing technique that traps stones",
                    "es": "Una técnica de captura tipo red que atrapa piedras",
                    "de": "Eine netzartige Fangtechnik die Steine einfängt",
                    "nl": "Een netachtige vangtechniek die stenen vasthoudt"
                },
                {
                    "en": "A Japanese wooden sandal",
                    "es": "Una sandalia de madera japonesa",
                    "de": "Eine japanische Holzsandale",
                    "nl": "Een Japanse houten sandaal"
                },
                {
                    "en": "A special Go board",
                    "es": "Un tablero de Go especial",
                    "de": "Ein spezielles Go-Brett",
                    "nl": "Een speciaal Go-bord"
                },
                {
                    "en": "A ranking ceremony",
                    "es": "Una ceremonia de clasificación",
                    "de": "Eine Rangzeremonie",
                    "nl": "Een rangceremonie"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A geta is a net or loose ladder technique where stones are captured by surrounding them so they cannot escape, even though they are not in atari.",
                "es": "Un geta es una técnica de red donde las piedras son capturadas rodeándolas para que no puedan escapar, aunque no estén en atari.",
                "de": "Ein Geta ist eine Netztechnik bei der Steine gefangen werden indem man sie umgibt, auch wenn sie nicht in Atari sind.",
                "nl": "Een geta is een nettechniek waarbij stenen worden gevangen door ze te omsingelen zodat ze niet kunnen ontsnappen, ook al staan ze niet in atari."
            }
        },
        {
            "question": {
                "en": "What is a 'cutting point' in Go?",
                "es": "¿Qué es un 'punto de corte' en Go?",
                "de": "Was ist ein 'Schnittpunkt' bei Go?",
                "nl": "Wat is een 'snijpunt' bij Go?"
            },
            "options": [
                {
                    "en": "An intersection where the opponent can separate your stones",
                    "es": "Una intersección donde el oponente puede separar tus piedras",
                    "de": "Eine Kreuzung wo der Gegner deine Steine trennen kann",
                    "nl": "Een kruispunt waar de tegenstander je stenen kan scheiden"
                },
                {
                    "en": "The point where you cut the board with scissors",
                    "es": "El punto donde cortas el tablero con tijeras",
                    "de": "Der Punkt wo man das Brett mit einer Schere schneidet",
                    "nl": "Het punt waar je het bord met een schaar knipt"
                },
                {
                    "en": "A sharp edge on a stone",
                    "es": "Un borde afilado en una piedra",
                    "de": "Eine scharfe Kante an einem Stein",
                    "nl": "Een scherpe rand aan een steen"
                },
                {
                    "en": "The center point of the board",
                    "es": "El punto central del tablero",
                    "de": "Der Mittelpunkt des Bretts",
                    "nl": "Het middelpunt van het bord"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A cutting point is a weak intersection between two diagonally connected stones where the opponent can play to separate them into two groups.",
                "es": "Un punto de corte es una intersección débil entre dos piedras conectadas diagonalmente donde el oponente puede jugar para separarlas.",
                "de": "Ein Schnittpunkt ist eine schwache Kreuzung zwischen zwei diagonal verbundenen Steinen, wo der Gegner sie trennen kann.",
                "nl": "Een snijpunt is een zwak kruispunt tussen twee diagonaal verbonden stenen waar de tegenstander kan spelen om ze te scheiden."
            }
        },
        {
            "question": {
                "en": "What is an 'approach move' in Go?",
                "es": "¿Qué es un 'movimiento de aproximación' en Go?",
                "de": "Was ist ein 'Annäherungszug' bei Go?",
                "nl": "Wat is een 'benaderingszet' bij Go?"
            },
            "options": [
                {
                    "en": "A stone played near an opponent's corner stone to contest it",
                    "es": "Una piedra jugada cerca de una piedra de esquina del oponente",
                    "de": "Ein Stein nahe einem gegnerischen Eckstein gespielt",
                    "nl": "Een steen gespeeld bij een hoeksteen van de tegenstander"
                },
                {
                    "en": "Walking toward the Go board",
                    "es": "Caminar hacia el tablero de Go",
                    "de": "Zum Go-Brett gehen",
                    "nl": "Naar het Go-bord lopen"
                },
                {
                    "en": "The first move of any game",
                    "es": "El primer movimiento de cualquier juego",
                    "de": "Der erste Zug jedes Spiels",
                    "nl": "De eerste zet van elk spel"
                },
                {
                    "en": "A polite greeting to the opponent",
                    "es": "Un saludo cortés al oponente",
                    "de": "Eine höfliche Begrüßung des Gegners",
                    "nl": "Een beleefde begroeting van de tegenstander"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "An approach move is played near an opponent's corner stone to prevent them from securing the corner alone. It initiates a contest for corner territory.",
                "es": "Un movimiento de aproximación se juega cerca de una piedra de esquina del oponente para evitar que asegure la esquina solo.",
                "de": "Ein Annäherungszug wird nahe einem gegnerischen Eckstein gespielt, um zu verhindern, dass er die Ecke allein sichert.",
                "nl": "Een benaderingszet wordt bij een hoeksteen van de tegenstander gespeeld om te voorkomen dat die de hoek alleen veiligstelt."
            }
        },
        {
            "question": {
                "en": "What is a 'shoulder hit' in Go?",
                "es": "¿Qué es un 'golpe de hombro' en Go?",
                "de": "Was ist ein 'Schulterschlag' bei Go?",
                "nl": "Wat is een 'schouderslag' bij Go?"
            },
            "options": [
                {
                    "en": "A move placed diagonally next to an opponent's stone",
                    "es": "Un movimiento colocado diagonalmente junto a una piedra del oponente",
                    "de": "Ein Zug diagonal neben einem gegnerischen Stein",
                    "nl": "Een zet diagonaal naast een steen van de tegenstander"
                },
                {
                    "en": "Bumping shoulders with the opponent",
                    "es": "Chocar hombros con el oponente",
                    "de": "Den Gegner mit der Schulter stoßen",
                    "nl": "De tegenstander met de schouder stoten"
                },
                {
                    "en": "A move that creates a shoulder-like shape",
                    "es": "Un movimiento que crea una forma como un hombro",
                    "de": "Ein Zug der eine schulterartige Form erzeugt",
                    "nl": "Een zet die een schouderachtige vorm creëert"
                },
                {
                    "en": "Hitting the table in frustration",
                    "es": "Golpear la mesa por frustración",
                    "de": "Vor Frust auf den Tisch schlagen",
                    "nl": "Uit frustratie op tafel slaan"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A shoulder hit is played diagonally next to an opponent's stone to limit its influence. It is a common technique for reducing the opponent's framework.",
                "es": "Un golpe de hombro se juega diagonalmente junto a una piedra del oponente para limitar su influencia. Es común para reducir el marco del oponente.",
                "de": "Ein Schulterschlag wird diagonal neben einem gegnerischen Stein gespielt um dessen Einfluss zu begrenzen. Er reduziert das gegnerische Gerüst.",
                "nl": "Een schouderslag wordt diagonaal naast een steen van de tegenstander gespeeld om diens invloed te beperken."
            }
        },
        {
            "question": {
                "en": "What is a 'pincer' attack in Go?",
                "es": "¿Qué es un ataque de 'pinza' en Go?",
                "de": "Was ist ein 'Zangenangriff' bei Go?",
                "nl": "Wat is een 'tanganval' bij Go?"
            },
            "options": [
                {
                    "en": "Attacking an approach stone from the opposite side of a friendly stone",
                    "es": "Atacar una piedra de aproximación desde el lado opuesto de una piedra amiga",
                    "de": "Einen Annäherungsstein von der Gegenseite eines eigenen Steins angreifen",
                    "nl": "Een benaderingsteen aanvallen vanaf de andere kant van een eigen steen"
                },
                {
                    "en": "Using tweezers to place stones",
                    "es": "Usar pinzas para colocar piedras",
                    "de": "Pinzetten verwenden um Steine zu setzen",
                    "nl": "Een pincet gebruiken om stenen te plaatsen"
                },
                {
                    "en": "Squeezing an opponent's stone between two boards",
                    "es": "Apretar una piedra del oponente entre dos tableros",
                    "de": "Einen gegnerischen Stein zwischen zwei Brettern quetschen",
                    "nl": "Een steen van de tegenstander tussen twee borden knijpen"
                },
                {
                    "en": "A surgical move to remove a stone",
                    "es": "Un movimiento quirúrgico para quitar una piedra",
                    "de": "Ein chirurgischer Zug um einen Stein zu entfernen",
                    "nl": "Een chirurgische zet om een steen te verwijderen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A pincer attacks the opponent's approach stone from the far side, squeezing it between two of your stones and denying it a base along the side.",
                "es": "Una pinza ataca la piedra de aproximación del oponente desde el lado lejano, apretándola entre dos de tus piedras.",
                "de": "Ein Zangenangriff greift den gegnerischen Annäherungsstein von der fernen Seite an und klemmt ihn zwischen zwei eigene Steine.",
                "nl": "Een tanganval valt de benaderingsteen van de tegenstander aan vanaf de verre kant en klemt deze tussen twee eigen stenen."
            }
        },
        {
            "question": {
                "en": "What is 'sabaki' in Go?",
                "es": "¿Qué es 'sabaki' en Go?",
                "de": "Was ist 'Sabaki' bei Go?",
                "nl": "Wat is 'sabaki' bij Go?"
            },
            "options": [
                {
                    "en": "Skillful light play to settle a weak group in enemy territory",
                    "es": "Juego ligero hábil para asentar un grupo débil en territorio enemigo",
                    "de": "Geschicktes leichtes Spiel um eine schwache Gruppe im Feindgebiet zu sichern",
                    "nl": "Vaardig licht spel om een zwakke groep in vijandelijk gebied te vestigen"
                },
                {
                    "en": "A Japanese martial art used in Go",
                    "es": "Un arte marcial japonés usado en Go",
                    "de": "Eine japanische Kampfkunst bei Go",
                    "nl": "Een Japanse vechtkunst bij Go"
                },
                {
                    "en": "The act of cleaning the board",
                    "es": "El acto de limpiar el tablero",
                    "de": "Das Reinigen des Bretts",
                    "nl": "Het schoonmaken van het bord"
                },
                {
                    "en": "A greeting before the game starts",
                    "es": "Un saludo antes de que empiece el juego",
                    "de": "Eine Begrüßung vor dem Spiel",
                    "nl": "Een begroeting voor het spel begint"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Sabaki is the art of making a weak group flexible and alive inside enemy territory using light, efficient moves rather than heavy, solid ones.",
                "es": "Sabaki es el arte de hacer un grupo débil flexible y vivo dentro del territorio enemigo usando movimientos ligeros y eficientes.",
                "de": "Sabaki ist die Kunst, eine schwache Gruppe im Feindgebiet mit leichten, effizienten Zügen flexibel und lebendig zu machen.",
                "nl": "Sabaki is de kunst om een zwakke groep in vijandelijk gebied flexibel en levend te maken met lichte, efficiënte zetten."
            }
        },
        {
            "question": {
                "en": "What is a 'tenuki' in Go?",
                "es": "¿Qué es un 'tenuki' en Go?",
                "de": "Was ist ein 'Tenuki' bei Go?",
                "nl": "Wat is een 'tenuki' bij Go?"
            },
            "options": [
                {
                    "en": "Ignoring the opponent's last move to play elsewhere",
                    "es": "Ignorar el último movimiento del oponente para jugar en otro lugar",
                    "de": "Den letzten Zug des Gegners ignorieren und woanders spielen",
                    "nl": "De laatste zet van de tegenstander negeren en elders spelen"
                },
                {
                    "en": "A type of Japanese fox",
                    "es": "Un tipo de zorro japonés",
                    "de": "Eine Art japanischer Fuchs",
                    "nl": "Een soort Japanse vos"
                },
                {
                    "en": "Surrendering the game",
                    "es": "Rendirse en el juego",
                    "de": "Das Spiel aufgeben",
                    "nl": "Het spel opgeven"
                },
                {
                    "en": "A special type of stone",
                    "es": "Un tipo especial de piedra",
                    "de": "Eine spezielle Art Stein",
                    "nl": "Een speciaal soort steen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A tenuki is when a player ignores the opponent's last move and plays in a different area of the board, choosing a bigger move elsewhere.",
                "es": "Un tenuki es cuando un jugador ignora el último movimiento del oponente y juega en otra zona del tablero.",
                "de": "Ein Tenuki ist wenn ein Spieler den letzten Zug des Gegners ignoriert und in einem anderen Bereich des Bretts spielt.",
                "nl": "Een tenuki is wanneer een speler de laatste zet van de tegenstander negeert en in een ander deel van het bord speelt."
            }
        },
        {
            "question": {
                "en": "What is 'sente' in Go?",
                "es": "¿Qué es 'sente' en Go?",
                "de": "Was ist 'Sente' bei Go?",
                "nl": "Wat is 'sente' bij Go?"
            },
            "options": [
                {
                    "en": "Having the initiative and forcing the opponent to respond",
                    "es": "Tener la iniciativa y forzar al oponente a responder",
                    "de": "Die Initiative haben und den Gegner zur Antwort zwingen",
                    "nl": "Het initiatief hebben en de tegenstander dwingen te antwoorden"
                },
                {
                    "en": "A type of meditation before playing",
                    "es": "Un tipo de meditación antes de jugar",
                    "de": "Eine Art Meditation vor dem Spielen",
                    "nl": "Een soort meditatie voor het spelen"
                },
                {
                    "en": "The center point of the board",
                    "es": "El punto central del tablero",
                    "de": "Der Mittelpunkt des Bretts",
                    "nl": "Het middelpunt van het bord"
                },
                {
                    "en": "A penalty for playing too slowly",
                    "es": "Una penalización por jugar muy lento",
                    "de": "Eine Strafe für zu langsames Spielen",
                    "nl": "Een straf voor te langzaam spelen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Sente means having the initiative. A sente move forces the opponent to respond, allowing you to dictate the flow of the game.",
                "es": "Sente significa tener la iniciativa. Un movimiento sente obliga al oponente a responder, permitiéndote dictar el juego.",
                "de": "Sente bedeutet die Initiative zu haben. Ein Sente-Zug zwingt den Gegner zur Antwort und erlaubt es den Spielverlauf zu bestimmen.",
                "nl": "Sente betekent het initiatief hebben. Een sente-zet dwingt de tegenstander te antwoorden, zodat jij het spel bepaalt."
            }
        },
        {
            "question": {
                "en": "What is 'gote' in Go?",
                "es": "¿Qué es 'gote' en Go?",
                "de": "Was ist 'Gote' bei Go?",
                "nl": "Wat is 'gote' bij Go?"
            },
            "options": [
                {
                    "en": "Losing the initiative so the opponent plays where they want",
                    "es": "Perder la iniciativa para que el oponente juegue donde quiera",
                    "de": "Die Initiative verlieren sodass der Gegner wählen kann",
                    "nl": "Het initiatief verliezen zodat de tegenstander kiest waar te spelen"
                },
                {
                    "en": "A type of mountain goat",
                    "es": "Un tipo de cabra montesa",
                    "de": "Eine Art Bergziege",
                    "nl": "Een soort berggeit"
                },
                {
                    "en": "Winning the game by a large margin",
                    "es": "Ganar el juego por un gran margen",
                    "de": "Das Spiel mit großem Vorsprung gewinnen",
                    "nl": "Het spel met grote marge winnen"
                },
                {
                    "en": "A beginner's first move",
                    "es": "El primer movimiento de un principiante",
                    "de": "Der erste Zug eines Anfängers",
                    "nl": "De eerste zet van een beginner"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Gote is the opposite of sente. A gote move does not force a response, giving the opponent the initiative to play elsewhere on the board.",
                "es": "Gote es lo opuesto a sente. Un movimiento gote no fuerza respuesta, dando al oponente la iniciativa para jugar en otro lugar.",
                "de": "Gote ist das Gegenteil von Sente. Ein Gote-Zug erzwingt keine Antwort und gibt dem Gegner die Initiative.",
                "nl": "Gote is het tegenovergestelde van sente. Een gote-zet dwingt geen antwoord af, waardoor de tegenstander het initiatief krijgt."
            }
        },
        {
            "question": {
                "en": "What is a 'ladder breaker' in Go?",
                "es": "¿Qué es un 'rompedor de escalera' en Go?",
                "de": "Was ist ein 'Leiterbrecher' bei Go?",
                "nl": "Wat is een 'ladderbreker' bij Go?"
            },
            "options": [
                {
                    "en": "A stone already placed in the path of a ladder sequence",
                    "es": "Una piedra ya colocada en el camino de una secuencia de escalera",
                    "de": "Ein Stein der bereits im Weg einer Leitersequenz liegt",
                    "nl": "Een steen die al in het pad van een ladderreeks ligt"
                },
                {
                    "en": "A tool used to break physical ladders",
                    "es": "Una herramienta usada para romper escaleras físicas",
                    "de": "Ein Werkzeug zum Brechen physischer Leitern",
                    "nl": "Een hulpmiddel om fysieke ladders te breken"
                },
                {
                    "en": "A rule that stops ladders from being played",
                    "es": "Una regla que impide que se jueguen escaleras",
                    "de": "Eine Regel die Leitern verhindert",
                    "nl": "Een regel die ladders voorkomt"
                },
                {
                    "en": "A player who specializes in ladder tactics",
                    "es": "Un jugador especializado en tácticas de escalera",
                    "de": "Ein Spieler der auf Leitertaktiken spezialisiert ist",
                    "nl": "Een speler gespecialiseerd in laddertactieken"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A ladder breaker is a friendly stone already in place that the chased stones can connect to, causing the ladder to fail for the chasing player.",
                "es": "Un rompedor de escalera es una piedra amiga ya en su lugar a la que las piedras perseguidas pueden conectarse, haciendo fallar la escalera.",
                "de": "Ein Leiterbrecher ist ein eigener Stein der bereits im Weg steht und an den die verfolgten Steine anschließen können.",
                "nl": "Een ladderbreker is een eigen steen die al op zijn plek staat en waarmee de achtervolgde stenen kunnen verbinden."
            }
        },
        {
            "question": {
                "en": "What is a 'split' in Go?",
                "es": "¿Qué es una 'división' en Go?",
                "de": "Was ist eine 'Teilung' bei Go?",
                "nl": "Wat is een 'splitsing' bij Go?"
            },
            "options": [
                {
                    "en": "Playing between two opponent stones on the side",
                    "es": "Jugar entre dos piedras del oponente en el lado",
                    "de": "Zwischen zwei gegnerische Steine an der Seite spielen",
                    "nl": "Tussen twee stenen van de tegenstander aan de zijkant spelen"
                },
                {
                    "en": "Breaking the board into two pieces",
                    "es": "Romper el tablero en dos piezas",
                    "de": "Das Brett in zwei Teile brechen",
                    "nl": "Het bord in twee stukken breken"
                },
                {
                    "en": "Dividing your stones equally on both sides",
                    "es": "Dividir tus piedras equitativamente en ambos lados",
                    "de": "Die eigenen Steine gleichmäßig auf beide Seiten verteilen",
                    "nl": "Je stenen gelijk verdelen over beide kanten"
                },
                {
                    "en": "Ending a game early by mutual agreement",
                    "es": "Terminar un juego temprano por acuerdo mutuo",
                    "de": "Ein Spiel vorzeitig einvernehmlich beenden",
                    "nl": "Een spel vroeg beëindigen in onderling overleg"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A split is playing a stone between two opponent side stones to prevent them from forming a connected position along the side of the board.",
                "es": "Una división es jugar una piedra entre dos piedras laterales del oponente para evitar que formen una posición conectada en el lado.",
                "de": "Eine Teilung spielt einen Stein zwischen zwei gegnerische Seitensteine, um zu verhindern dass sie eine verbundene Position bilden.",
                "nl": "Een splitsing speelt een steen tussen twee zijstenen van de tegenstander om te voorkomen dat ze een verbonden positie vormen."
            }
        },
        {
            "question": {
                "en": "What is an 'overplay' in Go?",
                "es": "¿Qué es un 'exceso de juego' en Go?",
                "de": "Was ist ein 'Überspiel' bei Go?",
                "nl": "Wat is een 'overspel' bij Go?"
            },
            "options": [
                {
                    "en": "A move that is too aggressive and can be punished",
                    "es": "Un movimiento demasiado agresivo que puede ser castigado",
                    "de": "Ein zu aggressiver Zug der bestraft werden kann",
                    "nl": "Een te agressieve zet die bestraft kan worden"
                },
                {
                    "en": "Playing too many games in one day",
                    "es": "Jugar demasiados juegos en un día",
                    "de": "Zu viele Spiele an einem Tag spielen",
                    "nl": "Te veel spellen op één dag spelen"
                },
                {
                    "en": "Using too many stones on the board",
                    "es": "Usar demasiadas piedras en el tablero",
                    "de": "Zu viele Steine auf dem Brett verwenden",
                    "nl": "Te veel stenen op het bord gebruiken"
                },
                {
                    "en": "A bonus move awarded for good play",
                    "es": "Un movimiento extra otorgado por buen juego",
                    "de": "Ein Bonuszug für gutes Spiel",
                    "nl": "Een bonuszet voor goed spel"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "An overplay is a move that is too greedy or aggressive for the position. If the opponent responds correctly, the overplay will backfire.",
                "es": "Un exceso de juego es un movimiento demasiado codicioso o agresivo para la posición. Si el oponente responde bien, fallará.",
                "de": "Ein Überspiel ist ein zu gieriger oder aggressiver Zug für die Stellung. Bei korrekter Antwort des Gegners geht er nach hinten los.",
                "nl": "Een overspel is een te hebberige of agressieve zet voor de positie. Als de tegenstander correct antwoordt, slaat het terug."
            }
        },
        {
            "question": {
                "en": "What is a 'dead group' in Go?",
                "es": "¿Qué es un 'grupo muerto' en Go?",
                "de": "Was ist eine 'tote Gruppe' bei Go?",
                "nl": "Wat is een 'dode groep' bij Go?"
            },
            "options": [
                {
                    "en": "A group that cannot make two eyes and will be captured",
                    "es": "Un grupo que no puede hacer dos ojos y será capturado",
                    "de": "Eine Gruppe die keine zwei Augen bilden kann und gefangen wird",
                    "nl": "Een groep die geen twee ogen kan maken en geslagen zal worden"
                },
                {
                    "en": "A group of stones removed from the board",
                    "es": "Un grupo de piedras retiradas del tablero",
                    "de": "Eine Gruppe vom Brett entfernter Steine",
                    "nl": "Een groep stenen verwijderd van het bord"
                },
                {
                    "en": "A group that has stopped moving",
                    "es": "Un grupo que ha dejado de moverse",
                    "de": "Eine Gruppe die aufgehört hat sich zu bewegen",
                    "nl": "Een groep die gestopt is met bewegen"
                },
                {
                    "en": "Stones that are cracked or damaged",
                    "es": "Piedras que están agrietadas o dañadas",
                    "de": "Steine die gerissen oder beschädigt sind",
                    "nl": "Stenen die gebarsten of beschadigd zijn"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A dead group is one that cannot form two eyes even with perfect play. At the end of the game, dead groups are removed and counted as captures.",
                "es": "Un grupo muerto es uno que no puede formar dos ojos ni con juego perfecto. Al final, se retiran y cuentan como capturas.",
                "de": "Eine tote Gruppe kann selbst bei perfektem Spiel keine zwei Augen bilden. Am Ende werden tote Gruppen entfernt und als Gefangene gezählt.",
                "nl": "Een dode groep kan zelfs bij perfect spel geen twee ogen vormen. Aan het einde worden dode groepen verwijderd en als gevangenen geteld."
            }
        },
        {
            "question": {
                "en": "What is a 'living group' in Go?",
                "es": "¿Qué es un 'grupo vivo' en Go?",
                "de": "Was ist eine 'lebende Gruppe' bei Go?",
                "nl": "Wat is een 'levende groep' bij Go?"
            },
            "options": [
                {
                    "en": "A group with two or more eyes that cannot be captured",
                    "es": "Un grupo con dos o más ojos que no puede ser capturado",
                    "de": "Eine Gruppe mit zwei oder mehr Augen die nicht gefangen werden kann",
                    "nl": "Een groep met twee of meer ogen die niet geslagen kan worden"
                },
                {
                    "en": "Stones that are still on the board",
                    "es": "Piedras que aún están en el tablero",
                    "de": "Steine die noch auf dem Brett sind",
                    "nl": "Stenen die nog op het bord staan"
                },
                {
                    "en": "A group made of natural stone",
                    "es": "Un grupo hecho de piedra natural",
                    "de": "Eine Gruppe aus Naturstein",
                    "nl": "Een groep van natuursteen"
                },
                {
                    "en": "Stones that glow in the dark",
                    "es": "Piedras que brillan en la oscuridad",
                    "de": "Steine die im Dunkeln leuchten",
                    "nl": "Stenen die in het donker gloeien"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A living group has at least two true eyes, making it permanently safe from capture. Creating two eyes is the fundamental goal of group survival in Go.",
                "es": "Un grupo vivo tiene al menos dos ojos verdaderos, haciéndolo permanentemente seguro. Crear dos ojos es el objetivo fundamental de supervivencia.",
                "de": "Eine lebende Gruppe hat mindestens zwei echte Augen und ist dauerhaft sicher vor dem Fangen. Zwei Augen zu bilden ist das Grundziel.",
                "nl": "Een levende groep heeft minstens twee echte ogen en is permanent veilig. Twee ogen maken is het fundamentele doel van groepsoverleving."
            }
        },
        {
            "question": {
                "en": "What is a 'seki' in Go?",
                "es": "¿Qué es un 'seki' en Go?",
                "de": "Was ist ein 'Seki' bei Go?",
                "nl": "Wat is een 'seki' bij Go?"
            },
            "options": [
                {
                    "en": "A mutual life situation where neither side can capture the other",
                    "es": "Una situación de vida mutua donde ningún lado puede capturar al otro",
                    "de": "Eine gegenseitige Lebenssituation wo keine Seite die andere fangen kann",
                    "nl": "Een wederzijdse levenssituatie waar geen kant de andere kan slaan"
                },
                {
                    "en": "A type of Japanese board",
                    "es": "Un tipo de tablero japonés",
                    "de": "Eine Art japanisches Brett",
                    "nl": "Een soort Japans bord"
                },
                {
                    "en": "A penalty for illegal moves",
                    "es": "Una penalización por movimientos ilegales",
                    "de": "Eine Strafe für illegale Züge",
                    "nl": "Een straf voor illegale zetten"
                },
                {
                    "en": "A tie in the final score",
                    "es": "Un empate en la puntuación final",
                    "de": "Ein Unentschieden in der Endwertung",
                    "nl": "Een gelijkspel in de eindscore"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Seki is a position where two groups share liberties and neither can capture the other without losing their own group. Both groups live but score no territory.",
                "es": "Seki es una posición donde dos grupos comparten libertades y ninguno puede capturar al otro sin perder su propio grupo. Ambos viven sin territorio.",
                "de": "Seki ist eine Position wo zwei Gruppen Freiheiten teilen und keine die andere fangen kann ohne sich selbst zu verlieren. Beide leben ohne Gebiet.",
                "nl": "Seki is een positie waar twee groepen vrijheden delen en geen van beide de ander kan slaan zonder zelf te verliezen. Beide leven zonder gebied."
            }
        },
        {
            "question": {
                "en": "What is the '3-4 point' opening in Go?",
                "es": "¿Qué es la apertura del 'punto 3-4' en Go?",
                "de": "Was ist die '3-4 Punkt'-Eröffnung bei Go?",
                "nl": "Wat is de '3-4 punt'-opening bij Go?"
            },
            "options": [
                {
                    "en": "A common first move on the third and fourth lines in the corner",
                    "es": "Un primer movimiento común en las líneas tercera y cuarta en la esquina",
                    "de": "Ein häufiger erster Zug auf der dritten und vierten Linie in der Ecke",
                    "nl": "Een veelvoorkomende eerste zet op de derde en vierde lijn in de hoek"
                },
                {
                    "en": "Scoring 3 to 4 points per move",
                    "es": "Anotar de 3 a 4 puntos por movimiento",
                    "de": "3 bis 4 Punkte pro Zug erzielen",
                    "nl": "3 tot 4 punten per zet scoren"
                },
                {
                    "en": "Playing the third and fourth moves of the game",
                    "es": "Jugar el tercer y cuarto movimiento del juego",
                    "de": "Den dritten und vierten Zug des Spiels spielen",
                    "nl": "De derde en vierde zet van het spel spelen"
                },
                {
                    "en": "A three against four stones battle",
                    "es": "Una batalla de tres contra cuatro piedras",
                    "de": "Ein Kampf drei gegen vier Steine",
                    "nl": "Een gevecht van drie tegen vier stenen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The 3-4 point (komoku) is one of the most popular opening moves. It claims a corner position that emphasizes either territory or influence.",
                "es": "El punto 3-4 (komoku) es uno de los movimientos de apertura más populares. Reclama una posición de esquina que enfatiza territorio o influencia.",
                "de": "Der 3-4 Punkt (Komoku) ist einer der beliebtesten Eröffnungszüge. Er beansprucht eine Eckposition mit Betonung auf Gebiet oder Einfluss.",
                "nl": "Het 3-4 punt (komoku) is een van de populairste openingszetten. Het claimt een hoekpositie die gebied of invloed benadrukt."
            }
        },
        {
            "question": {
                "en": "What is the '4-4 point' opening in Go?",
                "es": "¿Qué es la apertura del 'punto 4-4' en Go?",
                "de": "Was ist die '4-4 Punkt'-Eröffnung bei Go?",
                "nl": "Wat is de '4-4 punt'-opening bij Go?"
            },
            "options": [
                {
                    "en": "Playing on a star point that emphasizes influence over territory",
                    "es": "Jugar en un punto estrella que enfatiza influencia sobre territorio",
                    "de": "Auf einem Sternpunkt spielen der Einfluss über Gebiet betont",
                    "nl": "Op een sterpunt spelen dat invloed boven gebied benadrukt"
                },
                {
                    "en": "Scoring exactly four points in four moves",
                    "es": "Anotar exactamente cuatro puntos en cuatro movimientos",
                    "de": "Genau vier Punkte in vier Zügen erzielen",
                    "nl": "Precies vier punten in vier zetten scoren"
                },
                {
                    "en": "Playing four stones in a square pattern",
                    "es": "Jugar cuatro piedras en un patrón cuadrado",
                    "de": "Vier Steine in einem Quadratmuster spielen",
                    "nl": "Vier stenen in een vierkant patroon spelen"
                },
                {
                    "en": "A match between four players",
                    "es": "Un partido entre cuatro jugadores",
                    "de": "Ein Spiel zwischen vier Spielern",
                    "nl": "Een wedstrijd tussen vier spelers"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The 4-4 point (hoshi) is on a star point and emphasizes influence over immediate territory. It is a flexible opening that leads to fighting games.",
                "es": "El punto 4-4 (hoshi) está en un punto estrella y enfatiza influencia sobre territorio inmediato. Es una apertura flexible para juegos de lucha.",
                "de": "Der 4-4 Punkt (Hoshi) liegt auf einem Sternpunkt und betont Einfluss über sofortiges Gebiet. Es ist eine flexible Eröffnung für Kampfpartien.",
                "nl": "Het 4-4 punt (hoshi) ligt op een sterpunt en benadrukt invloed boven direct gebied. Het is een flexibele opening voor gevechtspartijen."
            }
        },
        {
            "question": {
                "en": "What is an 'invasion' in Go?",
                "es": "¿Qué es una 'invasión' en Go?",
                "de": "Was ist eine 'Invasion' bei Go?",
                "nl": "Wat is een 'invasie' bij Go?"
            },
            "options": [
                {
                    "en": "Playing deep inside the opponent's framework to reduce territory",
                    "es": "Jugar profundamente dentro del marco del oponente para reducir territorio",
                    "de": "Tief ins gegnerische Gerüst spielen um Gebiet zu reduzieren",
                    "nl": "Diep in het raamwerk van de tegenstander spelen om gebied te verminderen"
                },
                {
                    "en": "Moving all pieces to one side of the board",
                    "es": "Mover todas las piezas a un lado del tablero",
                    "de": "Alle Steine auf eine Seite des Bretts bewegen",
                    "nl": "Alle stenen naar één kant van het bord bewegen"
                },
                {
                    "en": "An army of stones marching across the board",
                    "es": "Un ejército de piedras marchando por el tablero",
                    "de": "Eine Armee von Steinen die über das Brett marschiert",
                    "nl": "Een leger stenen dat over het bord marcheert"
                },
                {
                    "en": "Bringing extra stones from another game",
                    "es": "Traer piedras extra de otro juego",
                    "de": "Zusätzliche Steine aus einem anderen Spiel bringen",
                    "nl": "Extra stenen van een ander spel meebrengen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "An invasion is playing a stone deep inside the opponent's sphere of influence to live inside or destroy their potential territory.",
                "es": "Una invasión es jugar una piedra dentro de la esfera de influencia del oponente para vivir dentro o destruir su territorio potencial.",
                "de": "Eine Invasion spielt einen Stein tief in der Einflusssphäre des Gegners um dort zu leben oder sein potenzielles Gebiet zu zerstören.",
                "nl": "Een invasie speelt een steen diep in de invloedssfeer van de tegenstander om daar te leven of diens potentieel gebied te vernietigen."
            }
        },
        {
            "question": {
                "en": "What is a 'reduction' in Go?",
                "es": "¿Qué es una 'reducción' en Go?",
                "de": "Was ist eine 'Reduzierung' bei Go?",
                "nl": "Wat is een 'reductie' bij Go?"
            },
            "options": [
                {
                    "en": "Playing on the edge of the opponent's framework to shrink it",
                    "es": "Jugar en el borde del marco del oponente para achicarlo",
                    "de": "Am Rand des gegnerischen Gerüsts spielen um es zu verkleinern",
                    "nl": "Aan de rand van het raamwerk van de tegenstander spelen om het te verkleinen"
                },
                {
                    "en": "Removing stones from the board",
                    "es": "Quitar piedras del tablero",
                    "de": "Steine vom Brett entfernen",
                    "nl": "Stenen van het bord verwijderen"
                },
                {
                    "en": "Making the board smaller",
                    "es": "Hacer el tablero más pequeño",
                    "de": "Das Brett verkleinern",
                    "nl": "Het bord kleiner maken"
                },
                {
                    "en": "Reducing the number of players",
                    "es": "Reducir el número de jugadores",
                    "de": "Die Anzahl der Spieler reduzieren",
                    "nl": "Het aantal spelers verminderen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A reduction plays near the edge of the opponent's area to shrink it without going deep inside. It is safer than an invasion but gains less territory.",
                "es": "Una reducción juega cerca del borde del área del oponente para achicarlo sin entrar profundamente. Es más segura que una invasión.",
                "de": "Eine Reduzierung spielt am Rand des gegnerischen Bereichs um ihn zu verkleinern. Sie ist sicherer als eine Invasion, gewinnt aber weniger Gebiet.",
                "nl": "Een reductie speelt nabij de rand van het gebied van de tegenstander om het te verkleinen. Het is veiliger dan een invasie maar wint minder gebied."
            }
        },
        {
            "question": {
                "en": "What is the '3-3 invasion' in Go?",
                "es": "¿Qué es la 'invasión 3-3' en Go?",
                "de": "Was ist die '3-3 Invasion' bei Go?",
                "nl": "Wat is de '3-3 invasie' bij Go?"
            },
            "options": [
                {
                    "en": "Playing on the 3-3 point under a 4-4 stone to take corner territory",
                    "es": "Jugar en el punto 3-3 bajo una piedra 4-4 para tomar la esquina",
                    "de": "Auf den 3-3 Punkt unter einem 4-4 Stein spielen um die Ecke zu nehmen",
                    "nl": "Op het 3-3 punt spelen onder een 4-4 steen om de hoek te nemen"
                },
                {
                    "en": "Three players invading with three stones each",
                    "es": "Tres jugadores invadiendo con tres piedras cada uno",
                    "de": "Drei Spieler die mit je drei Steinen eindringen",
                    "nl": "Drie spelers die elk met drie stenen binnenvallen"
                },
                {
                    "en": "A three-move sequence at the third line",
                    "es": "Una secuencia de tres movimientos en la tercera línea",
                    "de": "Eine Drei-Zug-Sequenz auf der dritten Linie",
                    "nl": "Een drie-zettenreeks op de derde lijn"
                },
                {
                    "en": "Placing three stones in a triangle",
                    "es": "Colocar tres piedras en un triángulo",
                    "de": "Drei Steine in einem Dreieck platzieren",
                    "nl": "Drie stenen in een driehoek plaatsen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The 3-3 invasion plays directly under a 4-4 stone in the corner to take the corner territory, while the 4-4 stone gains outside influence.",
                "es": "La invasión 3-3 juega directamente debajo de una piedra 4-4 en la esquina para tomar el territorio, mientras la piedra 4-4 gana influencia exterior.",
                "de": "Die 3-3 Invasion spielt direkt unter einem 4-4 Stein in der Ecke um das Eckgebiet zu nehmen, während der 4-4 Stein äußeren Einfluss gewinnt.",
                "nl": "De 3-3 invasie speelt direct onder een 4-4 steen in de hoek om het hoekgebied te nemen, terwijl de 4-4 steen buitenste invloed wint."
            }
        },
        {
            "question": {
                "en": "What is 'aji-keshi' in Go?",
                "es": "¿Qué es 'aji-keshi' en Go?",
                "de": "Was ist 'Aji-Keshi' bei Go?",
                "nl": "Wat is 'aji-keshi' bij Go?"
            },
            "options": [
                {
                    "en": "A move that eliminates your own useful potential in a position",
                    "es": "Un movimiento que elimina tu propio potencial útil en una posición",
                    "de": "Ein Zug der eigenes nützliches Potenzial in einer Stellung beseitigt",
                    "nl": "Een zet die je eigen nuttige potentieel in een positie elimineert"
                },
                {
                    "en": "A type of Japanese eraser",
                    "es": "Un tipo de borrador japonés",
                    "de": "Eine Art japanischer Radiergummi",
                    "nl": "Een soort Japanse gum"
                },
                {
                    "en": "Cleaning the board between games",
                    "es": "Limpiar el tablero entre partidas",
                    "de": "Das Brett zwischen Spielen reinigen",
                    "nl": "Het bord tussen spellen schoonmaken"
                },
                {
                    "en": "A special move only for professionals",
                    "es": "Un movimiento especial solo para profesionales",
                    "de": "Ein spezieller Zug nur für Profis",
                    "nl": "Een speciale zet alleen voor professionals"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Aji-keshi is a bad move that removes latent potential (aji) from a position that could have been useful later. It wastes strategic options.",
                "es": "Aji-keshi es un mal movimiento que remueve potencial latente (aji) de una posición que podría haber sido útil después.",
                "de": "Aji-Keshi ist ein schlechter Zug der latentes Potenzial (Aji) aus einer Stellung entfernt, das später nützlich hätte sein können.",
                "nl": "Aji-keshi is een slechte zet die latent potentieel (aji) uit een positie verwijdert dat later nuttig had kunnen zijn."
            }
        },
        {
            "question": {
                "en": "What is a 'hane' in Go?",
                "es": "¿Qué es un 'hane' en Go?",
                "de": "Was ist ein 'Hane' bei Go?",
                "nl": "Wat is een 'hane' bij Go?"
            },
            "options": [
                {
                    "en": "A move that bends around the end of an opponent's stones",
                    "es": "Un movimiento que se curva alrededor del final de las piedras del oponente",
                    "de": "Ein Zug der sich um das Ende der gegnerischen Steine biegt",
                    "nl": "Een zet die om het einde van de stenen van de tegenstander buigt"
                },
                {
                    "en": "A type of flower arrangement",
                    "es": "Un tipo de arreglo floral",
                    "de": "Eine Art Blumenarrangement",
                    "nl": "Een soort bloemarrangement"
                },
                {
                    "en": "A move that jumps over two stones",
                    "es": "Un movimiento que salta sobre dos piedras",
                    "de": "Ein Zug der über zwei Steine springt",
                    "nl": "Een zet die over twee stenen springt"
                },
                {
                    "en": "The sound a stone makes when placed",
                    "es": "El sonido que hace una piedra al colocarse",
                    "de": "Das Geräusch das ein Stein beim Setzen macht",
                    "nl": "Het geluid dat een steen maakt bij het plaatsen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A hane is a move that wraps around the end of an opponent's line of stones diagonally. It is an aggressive move that can gain extra territory.",
                "es": "Un hane es un movimiento que rodea el final de una línea de piedras del oponente diagonalmente. Es un movimiento agresivo para ganar territorio.",
                "de": "Ein Hane ist ein Zug der diagonal um das Ende einer gegnerischen Steinreihe herumbiegt. Er ist aggressiv und kann Gebiet gewinnen.",
                "nl": "Een hane is een zet die diagonaal om het einde van een rij stenen van de tegenstander buigt. Het is agressief en kan extra gebied winnen."
            }
        },
        {
            "question": {
                "en": "What is a 'nobi' in Go?",
                "es": "¿Qué es un 'nobi' en Go?",
                "de": "Was ist ein 'Nobi' bei Go?",
                "nl": "Wat is een 'nobi' bij Go?"
            },
            "options": [
                {
                    "en": "A simple one-space extension connected to your own stone",
                    "es": "Una extensión simple de un espacio conectada a tu propia piedra",
                    "de": "Eine einfache Ein-Punkt-Erweiterung verbunden mit dem eigenen Stein",
                    "nl": "Een eenvoudige uitbreiding van één punt verbonden met je eigen steen"
                },
                {
                    "en": "A noble title for Go masters",
                    "es": "Un título noble para maestros de Go",
                    "de": "Ein Adelstitel für Go-Meister",
                    "nl": "Een adellijke titel voor Go-meesters"
                },
                {
                    "en": "A type of Japanese noodle",
                    "es": "Un tipo de fideo japonés",
                    "de": "Eine Art japanische Nudel",
                    "nl": "Een soort Japanse noedel"
                },
                {
                    "en": "A large capture of five or more stones",
                    "es": "Una gran captura de cinco o más piedras",
                    "de": "Ein großer Fang von fünf oder mehr Steinen",
                    "nl": "Een grote slag van vijf of meer stenen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A nobi is a solid one-space extension directly from one of your stones. It is a strong connecting move that adds a liberty to the group.",
                "es": "Un nobi es una extensión sólida de un espacio directamente desde una de tus piedras. Es un movimiento de conexión fuerte.",
                "de": "Ein Nobi ist eine solide Ein-Punkt-Erweiterung direkt von einem eigenen Stein. Es ist ein starker Verbindungszug der eine Freiheit hinzufügt.",
                "nl": "Een nobi is een solide uitbreiding van één punt direct vanaf een eigen steen. Het is een sterke verbindingszet die een vrijheid toevoegt."
            }
        },
        {
            "question": {
                "en": "What is a 'tiger's mouth' shape in Go?",
                "es": "¿Qué es la forma 'boca de tigre' en Go?",
                "de": "Was ist die 'Tigermaul'-Form bei Go?",
                "nl": "Wat is de 'tijgermuil'-vorm bij Go?"
            },
            "options": [
                {
                    "en": "Three stones forming an open triangle that threatens to connect",
                    "es": "Tres piedras formando un triángulo abierto que amenaza con conectar",
                    "de": "Drei Steine die ein offenes Dreieck bilden das mit Verbindung droht",
                    "nl": "Drie stenen die een open driehoek vormen die dreigt te verbinden"
                },
                {
                    "en": "A dangerous area of the board shaped like a mouth",
                    "es": "Un área peligrosa del tablero con forma de boca",
                    "de": "Ein gefährlicher Bereich des Bretts in Mundform",
                    "nl": "Een gevaarlijk deel van het bord in de vorm van een mond"
                },
                {
                    "en": "An aggressive attack pattern from both sides",
                    "es": "Un patrón de ataque agresivo desde ambos lados",
                    "de": "Ein aggressives Angriffsmuster von beiden Seiten",
                    "nl": "Een agressief aanvalspatroon van beide kanten"
                },
                {
                    "en": "A stone with stripes like a tiger",
                    "es": "Una piedra con rayas como un tigre",
                    "de": "Ein Stein mit Streifen wie ein Tiger",
                    "nl": "Een steen met strepen als een tijger"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A tiger's mouth is three stones forming an open angle. The empty point inside threatens to complete a connection and is very hard for the opponent to exploit.",
                "es": "Una boca de tigre son tres piedras formando un ángulo abierto. El punto vacío dentro amenaza completar la conexión.",
                "de": "Ein Tigermaul sind drei Steine die einen offenen Winkel bilden. Der leere Punkt innen droht die Verbindung zu vollenden.",
                "nl": "Een tijgermuil zijn drie stenen die een open hoek vormen. Het lege punt erin dreigt de verbinding te voltooien."
            }
        },
        {
            "question": {
                "en": "What is a 'ponnuki' shape in Go?",
                "es": "¿Qué es la forma 'ponnuki' en Go?",
                "de": "Was ist die 'Ponnuki'-Form bei Go?",
                "nl": "Wat is de 'ponnuki'-vorm bij Go?"
            },
            "options": [
                {
                    "en": "Four stones forming a diamond after capturing one stone",
                    "es": "Cuatro piedras formando un diamante después de capturar una piedra",
                    "de": "Vier Steine die nach dem Fangen eines Steins eine Raute bilden",
                    "nl": "Vier stenen die een ruit vormen na het slaan van één steen"
                },
                {
                    "en": "A star shape made of five stones",
                    "es": "Una forma de estrella hecha de cinco piedras",
                    "de": "Eine Sternform aus fünf Steinen",
                    "nl": "Een stervorm van vijf stenen"
                },
                {
                    "en": "A circle of stones on the board",
                    "es": "Un círculo de piedras en el tablero",
                    "de": "Ein Kreis von Steinen auf dem Brett",
                    "nl": "Een cirkel van stenen op het bord"
                },
                {
                    "en": "A traditional Japanese pattern",
                    "es": "Un patrón tradicional japonés",
                    "de": "Ein traditionelles japanisches Muster",
                    "nl": "Een traditioneel Japans patroon"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A ponnuki is the diamond shape formed by four stones after capturing an opponent's stone in the center. It is considered very strong, radiating influence in all directions.",
                "es": "Un ponnuki es la forma de diamante formada por cuatro piedras tras capturar una piedra del oponente en el centro. Es muy fuerte.",
                "de": "Ein Ponnuki ist die Rautenform aus vier Steinen nach dem Fangen eines gegnerischen Steins in der Mitte. Es strahlt Einfluss in alle Richtungen aus.",
                "nl": "Een ponnuki is de ruitvorm van vier stenen na het slaan van een steen van de tegenstander in het midden. Het straalt invloed uit in alle richtingen."
            }
        },
        {
            "question": {
                "en": "What is a 'nakade' in Go?",
                "es": "¿Qué es un 'nakade' en Go?",
                "de": "Was ist ein 'Nakade' bei Go?",
                "nl": "Wat is een 'nakade' bij Go?"
            },
            "options": [
                {
                    "en": "Playing inside a group to prevent it from making two eyes",
                    "es": "Jugar dentro de un grupo para evitar que haga dos ojos",
                    "de": "In eine Gruppe spielen um sie daran zu hindern zwei Augen zu bilden",
                    "nl": "Binnen een groep spelen om te voorkomen dat deze twee ogen maakt"
                },
                {
                    "en": "A type of Japanese snack eaten during games",
                    "es": "Un tipo de snack japonés comido durante juegos",
                    "de": "Eine Art japanischer Snack beim Spielen",
                    "nl": "Een soort Japanse snack gegeten tijdens spellen"
                },
                {
                    "en": "Placing stones in the exact center of the board",
                    "es": "Colocar piedras en el centro exacto del tablero",
                    "de": "Steine genau in die Mitte des Bretts setzen",
                    "nl": "Stenen precies in het midden van het bord plaatsen"
                },
                {
                    "en": "A move only used in team games",
                    "es": "Un movimiento solo usado en juegos de equipo",
                    "de": "Ein Zug der nur in Teamspielen verwendet wird",
                    "nl": "Een zet alleen gebruikt in teamspellen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Nakade is a vital point inside an opponent's group. Playing there prevents the group from forming two eyes, killing it. Understanding nakade shapes is key.",
                "es": "Nakade es un punto vital dentro del grupo del oponente. Jugar ahí evita que el grupo forme dos ojos, matándolo.",
                "de": "Nakade ist ein vitaler Punkt in einer gegnerischen Gruppe. Dort zu spielen verhindert zwei Augen und tötet die Gruppe.",
                "nl": "Nakade is een vitaal punt in een groep van de tegenstander. Daar spelen voorkomt twee ogen en doodt de groep."
            }
        },
        {
            "question": {
                "en": "What does 'komi' compensate for in Go?",
                "es": "¿Qué compensa el 'komi' en Go?",
                "de": "Wofür kompensiert 'Komi' bei Go?",
                "nl": "Waarvoor compenseert 'komi' bij Go?"
            },
            "options": [
                {
                    "en": "The advantage of making the first move as Black",
                    "es": "La ventaja de hacer el primer movimiento como Negras",
                    "de": "Den Vorteil des ersten Zugs als Schwarz",
                    "nl": "Het voordeel van de eerste zet als Zwart"
                },
                {
                    "en": "The difference in stone weight",
                    "es": "La diferencia de peso de las piedras",
                    "de": "Den Gewichtsunterschied der Steine",
                    "nl": "Het gewichtsverschil van de stenen"
                },
                {
                    "en": "The cost of the Go set",
                    "es": "El costo del juego de Go",
                    "de": "Die Kosten des Go-Sets",
                    "nl": "De kosten van de Go-set"
                },
                {
                    "en": "The time difference between players",
                    "es": "La diferencia de tiempo entre jugadores",
                    "de": "Den Zeitunterschied zwischen Spielern",
                    "nl": "Het tijdsverschil tussen spelers"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Komi compensates White for Black's advantage of playing first. Typically 6.5 or 7.5 points are added to White's score to balance the game.",
                "es": "El komi compensa a Blancas por la ventaja de Negras de jugar primero. Normalmente se añaden 6.5 o 7.5 puntos a la puntuación de Blancas.",
                "de": "Komi kompensiert Weiß für den Vorteil von Schwarz, zuerst zu spielen. Üblicherweise werden 6,5 oder 7,5 Punkte zu Weiß' Punktzahl addiert.",
                "nl": "Komi compenseert Wit voor het voordeel dat Zwart als eerste speelt. Meestal worden 6,5 of 7,5 punten bij Wits score opgeteld."
            }
        },
        {
            "question": {
                "en": "What is the 'monkey face' shape in Go?",
                "es": "¿Qué es la forma 'cara de mono' en Go?",
                "de": "Was ist die 'Affengesicht'-Form bei Go?",
                "nl": "Wat is de 'apengezicht'-vorm bij Go?"
            },
            "options": [
                {
                    "en": "A specific five-point eye shape that is alive",
                    "es": "Una forma de ojo de cinco puntos específica que está viva",
                    "de": "Eine bestimmte Fünf-Punkt-Augenform die lebt",
                    "nl": "Een specifieke vijfpunts-oogvorm die leeft"
                },
                {
                    "en": "A stone pattern that looks like a face",
                    "es": "Un patrón de piedras que parece una cara",
                    "de": "Ein Steinmuster das wie ein Gesicht aussieht",
                    "nl": "Een steenpatroon dat op een gezicht lijkt"
                },
                {
                    "en": "An insult in Go etiquette",
                    "es": "Un insulto en la etiqueta de Go",
                    "de": "Eine Beleidigung in der Go-Etikette",
                    "nl": "Een belediging in de Go-etiquette"
                },
                {
                    "en": "A face drawn on a stone",
                    "es": "Una cara dibujada en una piedra",
                    "de": "Ein Gesicht auf einem Stein gezeichnet",
                    "nl": "Een gezicht getekend op een steen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The monkey face is a five-point eye shape inside a group. A group with this shape has enough space to make two eyes and live.",
                "es": "La cara de mono es una forma de ojo de cinco puntos dentro de un grupo. Un grupo con esta forma tiene espacio para hacer dos ojos y vivir.",
                "de": "Das Affengesicht ist eine Fünf-Punkt-Augenform in einer Gruppe. Eine Gruppe mit dieser Form hat genug Raum für zwei Augen.",
                "nl": "Het apengezicht is een vijfpunts-oogvorm in een groep. Een groep met deze vorm heeft genoeg ruimte voor twee ogen en leeft."
            }
        },
        {
            "question": {
                "en": "What happens when a stone has zero liberties in Go?",
                "es": "¿Qué pasa cuando una piedra tiene cero libertades en Go?",
                "de": "Was passiert wenn ein Stein null Freiheiten hat bei Go?",
                "nl": "Wat gebeurt er als een steen nul vrijheden heeft bij Go?"
            },
            "options": [
                {
                    "en": "It is removed from the board and becomes a prisoner",
                    "es": "Se retira del tablero y se convierte en prisionera",
                    "de": "Er wird vom Brett entfernt und wird ein Gefangener",
                    "nl": "Deze wordt van het bord verwijderd en wordt een gevangene"
                },
                {
                    "en": "It stays on the board but cannot move",
                    "es": "Se queda en el tablero pero no se puede mover",
                    "de": "Er bleibt auf dem Brett kann sich aber nicht bewegen",
                    "nl": "Deze blijft op het bord maar kan niet bewegen"
                },
                {
                    "en": "The game ends in a draw",
                    "es": "El juego termina en empate",
                    "de": "Das Spiel endet unentschieden",
                    "nl": "Het spel eindigt in een gelijkspel"
                },
                {
                    "en": "The player gets a penalty point",
                    "es": "El jugador recibe un punto de penalización",
                    "de": "Der Spieler bekommt einen Strafpunkt",
                    "nl": "De speler krijgt een strafpunt"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "When a stone or group has zero liberties, it is captured and removed from the board. Captured stones count as prisoners and affect the final score.",
                "es": "Cuando una piedra o grupo tiene cero libertades, es capturada y retirada del tablero. Las piedras capturadas cuentan como prisioneras.",
                "de": "Wenn ein Stein oder eine Gruppe null Freiheiten hat, wird er gefangen und vom Brett entfernt. Gefangene Steine zählen bei der Endwertung.",
                "nl": "Wanneer een steen of groep nul vrijheden heeft, wordt deze gevangen en van het bord verwijderd. Gevangen stenen tellen bij de eindscore."
            }
        },
        {
            "question": {
                "en": "What is the purpose of 'star point' handicap stones?",
                "es": "¿Cuál es el propósito de las piedras de handicap en 'puntos estrella'?",
                "de": "Was ist der Zweck von Vorgabesteinen auf 'Sternpunkten'?",
                "nl": "Wat is het doel van handicapstenen op 'sterpunten'?"
            },
            "options": [
                {
                    "en": "To balance the game when players have different skill levels",
                    "es": "Equilibrar el juego cuando los jugadores tienen diferentes niveles",
                    "de": "Das Spiel auszugleichen wenn Spieler unterschiedlich stark sind",
                    "nl": "Het spel in evenwicht brengen als spelers verschillende niveaus hebben"
                },
                {
                    "en": "To decorate the board before the game",
                    "es": "Decorar el tablero antes del juego",
                    "de": "Das Brett vor dem Spiel zu dekorieren",
                    "nl": "Het bord te versieren voor het spel"
                },
                {
                    "en": "To mark special scoring zones",
                    "es": "Marcar zonas de puntuación especiales",
                    "de": "Besondere Wertungszonen zu markieren",
                    "nl": "Speciale scorezones te markeren"
                },
                {
                    "en": "To make the game faster",
                    "es": "Hacer el juego más rápido",
                    "de": "Das Spiel schneller zu machen",
                    "nl": "Het spel sneller te maken"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Handicap stones are placed on star points to give the weaker player a head start. Each stone represents about one rank difference in skill.",
                "es": "Las piedras de handicap se colocan en puntos estrella para dar al jugador más débil una ventaja inicial. Cada piedra representa un rango de diferencia.",
                "de": "Vorgabesteine werden auf Sternpunkten gesetzt um dem schwächeren Spieler einen Vorsprung zu geben. Jeder Stein entspricht etwa einem Rangunterschied.",
                "nl": "Handicapstenen worden op sterpunten geplaatst om de zwakkere speler een voorsprong te geven. Elke steen vertegenwoordigt ongeveer één rangverschil."
            }
        },
        {
            "question": {
                "en": "What is an 'attachment' move in Go?",
                "es": "¿Qué es un movimiento de 'pegado' en Go?",
                "de": "Was ist ein 'Anlege'-Zug bei Go?",
                "nl": "Wat is een 'aanleg'-zet bij Go?"
            },
            "options": [
                {
                    "en": "Playing a stone directly next to an opponent's stone",
                    "es": "Jugar una piedra directamente al lado de una piedra del oponente",
                    "de": "Einen Stein direkt neben einen gegnerischen Stein spielen",
                    "nl": "Een steen direct naast een steen van de tegenstander spelen"
                },
                {
                    "en": "Gluing stones to the board",
                    "es": "Pegar piedras al tablero",
                    "de": "Steine auf das Brett kleben",
                    "nl": "Stenen op het bord plakken"
                },
                {
                    "en": "Connecting all your stones in one group",
                    "es": "Conectar todas tus piedras en un grupo",
                    "de": "Alle eigenen Steine in einer Gruppe verbinden",
                    "nl": "Al je stenen in één groep verbinden"
                },
                {
                    "en": "A special bonding ceremony in Go",
                    "es": "Una ceremonia especial de unión en Go",
                    "de": "Eine spezielle Bindungszeremonie bei Go",
                    "nl": "Een speciale bindingsceremonie bij Go"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "An attachment plays directly next to an opponent's stone. It is a contact move used to settle groups, create shape, or start complex tactical fights.",
                "es": "Un pegado se juega directamente junto a una piedra del oponente. Es un movimiento de contacto para asentar grupos o crear forma.",
                "de": "Ein Anlege-Zug wird direkt neben einem gegnerischen Stein gespielt. Er ist ein Kontaktzug zum Ansiedeln von Gruppen oder Erzeugen von Form.",
                "nl": "Een aanlegzet wordt direct naast een steen van de tegenstander gespeeld. Het is een contactzet om groepen te vestigen of vorm te creëren."
            }
        },
        {
            "question": {
                "en": "What is a 'crawl' in Go?",
                "es": "¿Qué es 'arrastrarse' en Go?",
                "de": "Was ist 'Kriechen' bei Go?",
                "nl": "Wat is 'kruipen' bij Go?"
            },
            "options": [
                {
                    "en": "Extending along the edge of the board one point at a time",
                    "es": "Extenderse por el borde del tablero un punto a la vez",
                    "de": "Sich am Brettrand einen Punkt nach dem anderen ausdehnen",
                    "nl": "Langs de rand van het bord één punt per keer uitbreiden"
                },
                {
                    "en": "Moving very slowly during the game",
                    "es": "Moverse muy lentamente durante el juego",
                    "de": "Sich sehr langsam während des Spiels bewegen",
                    "nl": "Heel langzaam bewegen tijdens het spel"
                },
                {
                    "en": "Placing stones on the floor",
                    "es": "Colocar piedras en el suelo",
                    "de": "Steine auf den Boden legen",
                    "nl": "Stenen op de grond plaatsen"
                },
                {
                    "en": "A snake-like pattern of stones",
                    "es": "Un patrón de piedras como serpiente",
                    "de": "Ein schlangenartiges Steinmuster",
                    "nl": "Een slangachtig patroon van stenen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A crawl is when stones extend along the edge one point at a time. Usually crawling is bad because it gives the opponent thickness above while gaining little.",
                "es": "Arrastrarse es cuando las piedras se extienden por el borde un punto a la vez. Suele ser malo porque da grosor al oponente arriba.",
                "de": "Kriechen ist wenn Steine sich am Rand einen Punkt nach dem anderen ausdehnen. Es ist meist schlecht weil es dem Gegner oben Dicke gibt.",
                "nl": "Kruipen is wanneer stenen langs de rand één punt per keer uitbreiden. Het is meestal slecht omdat het de tegenstander erboven dikte geeft."
            }
        },
        {
            "question": {
                "en": "What is a 'push' in Go?",
                "es": "¿Qué es un 'empujón' en Go?",
                "de": "Was ist ein 'Schub' bei Go?",
                "nl": "Wat is een 'duw' bij Go?"
            },
            "options": [
                {
                    "en": "Extending along a line of contact with the opponent's stones",
                    "es": "Extenderse a lo largo de una línea de contacto con las piedras del oponente",
                    "de": "Sich entlang einer Kontaktlinie mit den gegnerischen Steinen ausdehnen",
                    "nl": "Uitbreiden langs een contactlijn met de stenen van de tegenstander"
                },
                {
                    "en": "Physically pushing a stone across the board",
                    "es": "Empujar físicamente una piedra por el tablero",
                    "de": "Einen Stein physisch über das Brett schieben",
                    "nl": "Een steen fysiek over het bord duwen"
                },
                {
                    "en": "Forcing the opponent to leave the table",
                    "es": "Forzar al oponente a dejar la mesa",
                    "de": "Den Gegner zwingen den Tisch zu verlassen",
                    "nl": "De tegenstander dwingen de tafel te verlaten"
                },
                {
                    "en": "Pressing down on a stone to secure it",
                    "es": "Presionar una piedra para asegurarla",
                    "de": "Auf einen Stein drücken um ihn zu sichern",
                    "nl": "Op een steen drukken om hem vast te zetten"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A push extends along a line where your stones and opponent's stones are running side by side. It can gain territory but may also strengthen the opponent.",
                "es": "Un empujón se extiende a lo largo de una línea donde tus piedras y las del oponente corren lado a lado. Puede ganar territorio.",
                "de": "Ein Schub dehnt sich entlang einer Linie aus, wo die eigenen und gegnerischen Steine nebeneinander laufen. Er kann Gebiet gewinnen.",
                "nl": "Een duw breidt uit langs een lijn waar je eigen stenen en die van de tegenstander naast elkaar lopen. Het kan gebied winnen."
            }
        },
        {
            "question": {
                "en": "What is the 'second line' often called in Go?",
                "es": "¿Cómo se llama a menudo la 'segunda línea' en Go?",
                "de": "Wie wird die 'zweite Linie' bei Go oft genannt?",
                "nl": "Hoe wordt de 'tweede lijn' vaak genoemd bij Go?"
            },
            "options": [
                {
                    "en": "The line of defeat because it yields little territory",
                    "es": "La línea de la derrota porque da poco territorio",
                    "de": "Die Linie der Niederlage weil sie wenig Gebiet bringt",
                    "nl": "De lijn van de nederlaag omdat het weinig gebied oplevert"
                },
                {
                    "en": "The golden line because it is most valuable",
                    "es": "La línea dorada porque es la más valiosa",
                    "de": "Die goldene Linie weil sie am wertvollsten ist",
                    "nl": "De gouden lijn omdat deze het waardevolst is"
                },
                {
                    "en": "The invisible line because it cannot be seen",
                    "es": "La línea invisible porque no se puede ver",
                    "de": "Die unsichtbare Linie weil man sie nicht sehen kann",
                    "nl": "De onzichtbare lijn omdat deze niet gezien kan worden"
                },
                {
                    "en": "The royal line because kings play there",
                    "es": "La línea real porque los reyes juegan ahí",
                    "de": "Die königliche Linie weil Könige dort spielen",
                    "nl": "De koninklijke lijn omdat koningen daar spelen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The second line is called the line of defeat because playing there secures very little territory. It is usually only played in the endgame when larger moves are gone.",
                "es": "La segunda línea se llama línea de derrota porque jugar ahí asegura muy poco territorio. Suele jugarse solo en el final.",
                "de": "Die zweite Linie wird Linie der Niederlage genannt, weil dort sehr wenig Gebiet gesichert wird. Man spielt dort meist erst im Endspiel.",
                "nl": "De tweede lijn wordt de lijn van de nederlaag genoemd omdat er weinig gebied mee wordt veiliggesteld. Er wordt meestal pas in het eindspel gespeeld."
            }
        },
        {
            "question": {
                "en": "What is the 'third line' known as in Go strategy?",
                "es": "¿Cómo se conoce la 'tercera línea' en la estrategia de Go?",
                "de": "Als was ist die 'dritte Linie' in der Go-Strategie bekannt?",
                "nl": "Waar staat de 'derde lijn' om bekend in de Go-strategie?"
            },
            "options": [
                {
                    "en": "The line of territory because it secures solid ground",
                    "es": "La línea del territorio porque asegura terreno sólido",
                    "de": "Die Linie des Gebiets weil sie festen Boden sichert",
                    "nl": "De lijn van het gebied omdat het stevige grond beveiligt"
                },
                {
                    "en": "The line of attack because all attacks start there",
                    "es": "La línea de ataque porque todos los ataques empiezan ahí",
                    "de": "Die Angriffslinie weil alle Angriffe dort beginnen",
                    "nl": "De aanvalslijn omdat alle aanvallen daar beginnen"
                },
                {
                    "en": "The magic line with special rules",
                    "es": "La línea mágica con reglas especiales",
                    "de": "Die magische Linie mit besonderen Regeln",
                    "nl": "De magische lijn met speciale regels"
                },
                {
                    "en": "The line where beginners should always play",
                    "es": "La línea donde los principiantes siempre deben jugar",
                    "de": "Die Linie wo Anfänger immer spielen sollten",
                    "nl": "De lijn waar beginners altijd moeten spelen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The third line is called the line of territory. Stones on the third line are efficient at securing territory along the sides of the board.",
                "es": "La tercera línea se llama línea del territorio. Las piedras en la tercera línea son eficientes para asegurar territorio en los lados del tablero.",
                "de": "Die dritte Linie wird Linie des Gebiets genannt. Steine auf der dritten Linie sichern effizient Gebiet an den Seiten des Bretts.",
                "nl": "De derde lijn wordt de lijn van het gebied genoemd. Stenen op de derde lijn zijn efficiënt in het veiligstellen van gebied langs de zijkanten."
            }
        },
        {
            "question": {
                "en": "What is the 'fourth line' known as in Go strategy?",
                "es": "¿Cómo se conoce la 'cuarta línea' en la estrategia de Go?",
                "de": "Als was ist die 'vierte Linie' in der Go-Strategie bekannt?",
                "nl": "Waar staat de 'vierde lijn' om bekend in de Go-strategie?"
            },
            "options": [
                {
                    "en": "The line of influence because it projects power outward",
                    "es": "La línea de influencia porque proyecta poder hacia afuera",
                    "de": "Die Linie des Einflusses weil sie Kraft nach außen projiziert",
                    "nl": "De lijn van invloed omdat het kracht naar buiten projecteert"
                },
                {
                    "en": "The line of fortune because it brings luck",
                    "es": "La línea de la fortuna porque trae suerte",
                    "de": "Die Glückslinie weil sie Glück bringt",
                    "nl": "De gelukslijn omdat het geluk brengt"
                },
                {
                    "en": "The forbidden line where stones cannot be placed",
                    "es": "La línea prohibida donde no se pueden colocar piedras",
                    "de": "Die verbotene Linie wo keine Steine gesetzt werden dürfen",
                    "nl": "De verboden lijn waar geen stenen geplaatst mogen worden"
                },
                {
                    "en": "The competition line used only in tournaments",
                    "es": "La línea de competición usada solo en torneos",
                    "de": "Die Wettbewerbslinie nur in Turnieren verwendet",
                    "nl": "De wedstrijdlijn alleen gebruikt in toernooien"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The fourth line is called the line of influence. Stones there project power toward the center and focus on building influence rather than immediate territory.",
                "es": "La cuarta línea se llama línea de influencia. Las piedras proyectan poder hacia el centro y se enfocan en construir influencia en lugar de territorio.",
                "de": "Die vierte Linie wird Linie des Einflusses genannt. Steine dort projizieren Kraft zum Zentrum und bauen Einfluss statt sofortiges Gebiet auf.",
                "nl": "De vierde lijn wordt de lijn van invloed genoemd. Stenen daar projecteren kracht naar het centrum en bouwen invloed op in plaats van direct gebied."
            }
        },
        {
            "question": {
                "en": "How many star points are on a standard 19x19 Go board?",
                "es": "¿Cuántos puntos estrella hay en un tablero estándar de Go 19x19?",
                "de": "Wie viele Sternpunkte hat ein Standard 19x19 Go-Brett?",
                "nl": "Hoeveel sterpunten heeft een standaard 19x19 Go-bord?"
            },
            "options": [
                {
                    "en": "Nine star points",
                    "es": "Nueve puntos estrella",
                    "de": "Neun Sternpunkte",
                    "nl": "Negen sterpunten"
                },
                {
                    "en": "Four star points",
                    "es": "Cuatro puntos estrella",
                    "de": "Vier Sternpunkte",
                    "nl": "Vier sterpunten"
                },
                {
                    "en": "Twelve star points",
                    "es": "Doce puntos estrella",
                    "de": "Zwölf Sternpunkte",
                    "nl": "Twaalf sterpunten"
                },
                {
                    "en": "One star point",
                    "es": "Un punto estrella",
                    "de": "Ein Sternpunkt",
                    "nl": "Eén sterpunt"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A standard 19x19 board has nine star points (hoshi): four corners, four sides, and one center (tengen). They serve as reference points and handicap positions.",
                "es": "Un tablero 19x19 tiene nueve puntos estrella (hoshi): cuatro esquinas, cuatro lados y uno central (tengen).",
                "de": "Ein 19x19 Brett hat neun Sternpunkte (Hoshi): vier Ecken, vier Seiten und einen mittleren (Tengen). Sie dienen als Referenz und Vorgabepositionen.",
                "nl": "Een 19x19 bord heeft negen sterpunten (hoshi): vier hoeken, vier zijden en één midden (tengen). Ze dienen als referentie en handicapposities."
            }
        },
        {
            "question": {
                "en": "What is 'nigiri' used for in Go?",
                "es": "¿Para qué se usa 'nigiri' en Go?",
                "de": "Wofür wird 'Nigiri' bei Go verwendet?",
                "nl": "Waarvoor wordt 'nigiri' gebruikt bij Go?"
            },
            "options": [
                {
                    "en": "Deciding which player plays Black by guessing stones",
                    "es": "Decidir qué jugador juega Negras adivinando piedras",
                    "de": "Entscheiden welcher Spieler Schwarz spielt durch Steinraten",
                    "nl": "Bepalen welke speler Zwart speelt door stenen te raden"
                },
                {
                    "en": "A type of sushi served at Go tournaments",
                    "es": "Un tipo de sushi servido en torneos de Go",
                    "de": "Eine Art Sushi die bei Go-Turnieren serviert wird",
                    "nl": "Een soort sushi geserveerd bij Go-toernooien"
                },
                {
                    "en": "A special way to hold stones",
                    "es": "Una forma especial de sostener piedras",
                    "de": "Eine besondere Art Steine zu halten",
                    "nl": "Een speciale manier om stenen vast te houden"
                },
                {
                    "en": "Counting the score at the end",
                    "es": "Contar la puntuación al final",
                    "de": "Die Punkte am Ende zählen",
                    "nl": "De score aan het einde tellen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Nigiri is a method to determine who plays Black. One player grabs a handful of white stones, and the other guesses odd or even to decide colors.",
                "es": "Nigiri es un método para determinar quién juega Negras. Un jugador agarra piedras blancas y el otro adivina par o impar.",
                "de": "Nigiri bestimmt wer Schwarz spielt. Ein Spieler greift eine Handvoll weißer Steine und der andere rät ob es gerade oder ungerade ist.",
                "nl": "Nigiri bepaalt wie Zwart speelt. Eén speler pakt een handvol witte stenen en de ander raadt of het even of oneven is."
            }
        }
    ]
};
