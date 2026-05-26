// Go - level2
// Total questions: 100

module.exports = {
    questions: [
        {
            "question": {
                "en": "What is a 'liberty' in Go?",
                "es": "¿Qué es una 'libertad' en Go?",
                "de": "Was ist eine 'Freiheit' bei Go?",
                "nl": "Wat is een 'vrijheid' bij Go?"
            },
            "options": [
                {
                    "en": "An empty point next to a stone",
                    "es": "Un punto vacío al lado de una piedra",
                    "de": "Ein leerer Punkt neben einem Stein",
                    "nl": "Een leeg punt naast een steen"
                },
                {
                    "en": "A captured stone",
                    "es": "Una piedra capturada",
                    "de": "Ein gefangener Stein",
                    "nl": "Een gevangen steen"
                },
                {
                    "en": "A special move",
                    "es": "Un movimiento especial",
                    "de": "Ein spezieller Zug",
                    "nl": "Een speciale zet"
                },
                {
                    "en": "A type of territory",
                    "es": "Un tipo de territorio",
                    "de": "Eine Art Gebiet",
                    "nl": "Een soort gebied"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A liberty is an empty intersection directly adjacent to a stone along the grid lines. Stones need liberties to survive.",
                "es": "Una libertad es una intersección vacía directamente adyacente a una piedra. Las piedras necesitan libertades para sobrevivir.",
                "de": "Eine Freiheit ist eine leere Kreuzung direkt neben einem Stein entlang der Gitterlinien. Steine brauchen Freiheiten.",
                "nl": "Een vrijheid is een leeg kruispunt direct naast een steen langs de rasterlijnen. Stenen hebben vrijheden nodig."
            }
        },
        {
            "question": {
                "en": "How many liberties does a stone in the center have?",
                "es": "¿Cuántas libertades tiene una piedra en el centro?",
                "de": "Wie viele Freiheiten hat ein Stein in der Mitte?",
                "nl": "Hoeveel vrijheden heeft een steen in het midden?"
            },
            "options": [
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
                    "en": "2",
                    "es": "2",
                    "de": "2",
                    "nl": "2"
                },
                {
                    "en": "5",
                    "es": "5",
                    "de": "5",
                    "nl": "5"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A stone in the center of the board has 4 liberties, one in each orthogonal direction: up, down, left, and right.",
                "es": "Una piedra en el centro del tablero tiene 4 libertades, una en cada dirección ortogonal: arriba, abajo, izquierda y derecha.",
                "de": "Ein Stein in der Mitte des Bretts hat 4 Freiheiten, eine in jede Richtung: oben, unten, links und rechts.",
                "nl": "Een steen in het midden van het bord heeft 4 vrijheden, één in elke richting: boven, onder, links en rechts."
            }
        },
        {
            "question": {
                "en": "How many liberties does a stone on the edge have?",
                "es": "¿Cuántas libertades tiene una piedra en el borde?",
                "de": "Wie viele Freiheiten hat ein Stein am Rand?",
                "nl": "Hoeveel vrijheden heeft een steen aan de rand?"
            },
            "options": [
                {
                    "en": "3",
                    "es": "3",
                    "de": "3",
                    "nl": "3"
                },
                {
                    "en": "4",
                    "es": "4",
                    "de": "4",
                    "nl": "4"
                },
                {
                    "en": "2",
                    "es": "2",
                    "de": "2",
                    "nl": "2"
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
                "en": "A stone on the edge of the board has 3 liberties because one side faces off the board.",
                "es": "Una piedra en el borde del tablero tiene 3 libertades porque un lado da fuera del tablero.",
                "de": "Ein Stein am Rand des Bretts hat 3 Freiheiten, da eine Seite vom Brett weg zeigt.",
                "nl": "Een steen aan de rand van het bord heeft 3 vrijheden omdat één kant van het bord af wijst."
            }
        },
        {
            "question": {
                "en": "How many liberties does a stone in the corner have?",
                "es": "¿Cuántas libertades tiene una piedra en la esquina?",
                "de": "Wie viele Freiheiten hat ein Stein in der Ecke?",
                "nl": "Hoeveel vrijheden heeft een steen in de hoek?"
            },
            "options": [
                {
                    "en": "2",
                    "es": "2",
                    "de": "2",
                    "nl": "2"
                },
                {
                    "en": "3",
                    "es": "3",
                    "de": "3",
                    "nl": "3"
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
                "en": "A stone in the corner of the board has only 2 liberties because two sides face off the board.",
                "es": "Una piedra en la esquina del tablero solo tiene 2 libertades porque dos lados dan fuera del tablero.",
                "de": "Ein Stein in der Ecke des Bretts hat nur 2 Freiheiten, da zwei Seiten vom Brett weg zeigen.",
                "nl": "Een steen in de hoek van het bord heeft slechts 2 vrijheden omdat twee kanten van het bord af wijzen."
            }
        },
        {
            "question": {
                "en": "What is the 'suicide rule' in Go?",
                "es": "¿Qué es la 'regla de suicidio' en Go?",
                "de": "Was ist die 'Selbstmordregel' bei Go?",
                "nl": "Wat is de 'zelfmoordregel' bij Go?"
            },
            "options": [
                {
                    "en": "You cannot place a stone where it has no liberties",
                    "es": "No puedes colocar una piedra donde no tiene libertades",
                    "de": "Man darf keinen Stein ohne Freiheiten setzen",
                    "nl": "Je mag geen steen plaatsen waar hij geen vrijheden heeft"
                },
                {
                    "en": "You must capture every turn",
                    "es": "Debes capturar cada turno",
                    "de": "Man muss jeden Zug fangen",
                    "nl": "Je moet elke beurt vangen"
                },
                {
                    "en": "You cannot pass your turn",
                    "es": "No puedes pasar tu turno",
                    "de": "Man darf nicht passen",
                    "nl": "Je mag je beurt niet overslaan"
                },
                {
                    "en": "You must always play in the center",
                    "es": "Siempre debes jugar en el centro",
                    "de": "Man muss immer in der Mitte spielen",
                    "nl": "Je moet altijd in het midden spelen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The suicide rule prevents placing a stone where it would immediately have no liberties, unless it captures opponent stones.",
                "es": "La regla de suicidio impide colocar una piedra donde no tendría libertades, a menos que capture piedras del oponente.",
                "de": "Die Selbstmordregel verhindert das Setzen eines Steins ohne Freiheiten, es sei denn er fängt gegnerische Steine.",
                "nl": "De zelfmoordregel voorkomt het plaatsen van een steen zonder vrijheden, tenzij het stenen van de tegenstander vangt."
            }
        },
        {
            "question": {
                "en": "What does 'komi' compensate for in Go?",
                "es": "¿Qué compensa el 'komi' en Go?",
                "de": "Was kompensiert 'Komi' bei Go?",
                "nl": "Waarvoor compenseert 'komi' bij Go?"
            },
            "options": [
                {
                    "en": "The advantage of playing first",
                    "es": "La ventaja de jugar primero",
                    "de": "Den Vorteil des ersten Zuges",
                    "nl": "Het voordeel van als eerste spelen"
                },
                {
                    "en": "Having fewer stones",
                    "es": "Tener menos piedras",
                    "de": "Weniger Steine zu haben",
                    "nl": "Minder stenen hebben"
                },
                {
                    "en": "A weaker board position",
                    "es": "Una posición más débil",
                    "de": "Eine schwächere Position",
                    "nl": "Een zwakkere bordpositie"
                },
                {
                    "en": "Time used during the game",
                    "es": "El tiempo usado durante el juego",
                    "de": "Die im Spiel verwendete Zeit",
                    "nl": "De tijd gebruikt tijdens het spel"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Komi is extra points given to White to compensate for Black's advantage of making the first move.",
                "es": "Komi son puntos extra dados a Blanco para compensar la ventaja de Negro de hacer el primer movimiento.",
                "de": "Komi sind Extrapunkte für Weiß, um den Vorteil von Schwarz durch den ersten Zug auszugleichen.",
                "nl": "Komi zijn extra punten voor Wit om het voordeel van Zwart door de eerste zet te compenseren."
            }
        },
        {
            "question": {
                "en": "What is a common komi value in modern Go?",
                "es": "¿Cuál es un valor de komi común en el Go moderno?",
                "de": "Was ist ein üblicher Komi-Wert im modernen Go?",
                "nl": "Wat is een gebruikelijke komi-waarde in modern Go?"
            },
            "options": [
                {
                    "en": "6.5 points",
                    "es": "6,5 puntos",
                    "de": "6,5 Punkte",
                    "nl": "6,5 punten"
                },
                {
                    "en": "3 points",
                    "es": "3 puntos",
                    "de": "3 Punkte",
                    "nl": "3 punten"
                },
                {
                    "en": "10 points",
                    "es": "10 puntos",
                    "de": "10 Punkte",
                    "nl": "10 punten"
                },
                {
                    "en": "1 point",
                    "es": "1 punto",
                    "de": "1 Punkt",
                    "nl": "1 punt"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "In most modern tournaments, komi is set at 6.5 points. The half point prevents tied games.",
                "es": "En la mayoría de torneos modernos, el komi es de 6,5 puntos. El medio punto evita empates.",
                "de": "In den meisten modernen Turnieren beträgt Komi 6,5 Punkte. Der halbe Punkt verhindert Unentschieden.",
                "nl": "In de meeste moderne toernooien is komi 6,5 punten. Het halve punt voorkomt gelijkspel."
            }
        },
        {
            "question": {
                "en": "What is an 'eye' in Go?",
                "es": "¿Qué es un 'ojo' en Go?",
                "de": "Was ist ein 'Auge' bei Go?",
                "nl": "Wat is een 'oog' bij Go?"
            },
            "options": [
                {
                    "en": "An empty point surrounded by your own stones",
                    "es": "Un punto vacío rodeado por tus propias piedras",
                    "de": "Ein leerer Punkt umgeben von eigenen Steinen",
                    "nl": "Een leeg punt omringd door je eigen stenen"
                },
                {
                    "en": "A captured stone",
                    "es": "Una piedra capturada",
                    "de": "Ein gefangener Stein",
                    "nl": "Een gevangen steen"
                },
                {
                    "en": "A stone on a star point",
                    "es": "Una piedra en un punto estrella",
                    "de": "Ein Stein auf einem Sternpunkt",
                    "nl": "Een steen op een sterpunt"
                },
                {
                    "en": "A large group of stones",
                    "es": "Un grupo grande de piedras",
                    "de": "Eine große Gruppe von Steinen",
                    "nl": "Een grote groep stenen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "An eye is an empty intersection completely surrounded by stones of one color. A group needs two eyes to be permanently alive.",
                "es": "Un ojo es una intersección vacía completamente rodeada por piedras de un color. Un grupo necesita dos ojos para vivir.",
                "de": "Ein Auge ist eine leere Kreuzung vollständig umgeben von Steinen einer Farbe. Eine Gruppe braucht zwei Augen zum Leben.",
                "nl": "Een oog is een leeg kruispunt volledig omringd door stenen van één kleur. Een groep heeft twee ogen nodig om te leven."
            }
        },
        {
            "question": {
                "en": "How many eyes does a group need to live permanently?",
                "es": "¿Cuántos ojos necesita un grupo para vivir permanentemente?",
                "de": "Wie viele Augen braucht eine Gruppe um dauerhaft zu leben?",
                "nl": "Hoeveel ogen heeft een groep nodig om permanent te leven?"
            },
            "options": [
                {
                    "en": "2",
                    "es": "2",
                    "de": "2",
                    "nl": "2"
                },
                {
                    "en": "1",
                    "es": "1",
                    "de": "1",
                    "nl": "1"
                },
                {
                    "en": "3",
                    "es": "3",
                    "de": "3",
                    "nl": "3"
                },
                {
                    "en": "4",
                    "es": "4",
                    "de": "4",
                    "nl": "4"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A group needs at least two true eyes to be unconditionally alive, as the opponent cannot fill both simultaneously.",
                "es": "Un grupo necesita al menos dos ojos verdaderos para estar incondicionalmente vivo, ya que el oponente no puede llenar ambos.",
                "de": "Eine Gruppe braucht mindestens zwei echte Augen um bedingungslos zu leben, da der Gegner nicht beide füllen kann.",
                "nl": "Een groep heeft minstens twee echte ogen nodig om onvoorwaardelijk te leven, omdat de tegenstander niet beide kan vullen."
            }
        },
        {
            "question": {
                "en": "What is a 'false eye' in Go?",
                "es": "¿Qué es un 'ojo falso' en Go?",
                "de": "Was ist ein 'falsches Auge' bei Go?",
                "nl": "Wat is een 'vals oog' bij Go?"
            },
            "options": [
                {
                    "en": "An eye that can be filled by the opponent",
                    "es": "Un ojo que puede ser llenado por el oponente",
                    "de": "Ein Auge das der Gegner füllen kann",
                    "nl": "Een oog dat door de tegenstander gevuld kan worden"
                },
                {
                    "en": "An extra large eye",
                    "es": "Un ojo extra grande",
                    "de": "Ein extra großes Auge",
                    "nl": "Een extra groot oog"
                },
                {
                    "en": "An eye with a stone inside",
                    "es": "Un ojo con una piedra dentro",
                    "de": "Ein Auge mit einem Stein darin",
                    "nl": "Een oog met een steen erin"
                },
                {
                    "en": "Two eyes connected together",
                    "es": "Dos ojos conectados juntos",
                    "de": "Zwei verbundene Augen",
                    "nl": "Twee ogen aan elkaar verbonden"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A false eye looks like an eye but can be destroyed because enemy stones occupy key diagonal points around it.",
                "es": "Un ojo falso parece un ojo pero puede ser destruido porque piedras enemigas ocupan puntos diagonales clave.",
                "de": "Ein falsches Auge sieht wie ein Auge aus, kann aber zerstört werden, da gegnerische Steine wichtige Diagonalen besetzen.",
                "nl": "Een vals oog lijkt op een oog maar kan worden vernietigd omdat vijandelijke stenen belangrijke diagonalen bezetten."
            }
        },
        {
            "question": {
                "en": "What does 'connect' mean in Go?",
                "es": "¿Qué significa 'conectar' en Go?",
                "de": "Was bedeutet 'verbinden' bei Go?",
                "nl": "Wat betekent 'verbinden' bij Go?"
            },
            "options": [
                {
                    "en": "Linking two groups of stones together",
                    "es": "Unir dos grupos de piedras",
                    "de": "Zwei Steingruppen miteinander verbinden",
                    "nl": "Twee groepen stenen aan elkaar koppelen"
                },
                {
                    "en": "Capturing an opponent's stone",
                    "es": "Capturar una piedra del oponente",
                    "de": "Einen gegnerischen Stein fangen",
                    "nl": "Een steen van de tegenstander vangen"
                },
                {
                    "en": "Passing your turn",
                    "es": "Pasar tu turno",
                    "de": "Seinen Zug passen",
                    "nl": "Je beurt overslaan"
                },
                {
                    "en": "Playing on a star point",
                    "es": "Jugar en un punto estrella",
                    "de": "Auf einen Sternpunkt spielen",
                    "nl": "Op een sterpunt spelen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Connecting means placing a stone to join two separate groups of your stones, making them share liberties.",
                "es": "Conectar significa colocar una piedra para unir dos grupos separados de tus piedras, compartiendo libertades.",
                "de": "Verbinden bedeutet einen Stein zu setzen um zwei getrennte Gruppen zu vereinen und Freiheiten zu teilen.",
                "nl": "Verbinden betekent een steen plaatsen om twee aparte groepen samen te voegen en vrijheden te delen."
            }
        },
        {
            "question": {
                "en": "What does 'cut' mean in Go?",
                "es": "¿Qué significa 'cortar' en Go?",
                "de": "Was bedeutet 'schneiden' bei Go?",
                "nl": "Wat betekent 'snijden' bij Go?"
            },
            "options": [
                {
                    "en": "Separating opponent's stones into groups",
                    "es": "Separar las piedras del oponente en grupos",
                    "de": "Die Steine des Gegners in Gruppen trennen",
                    "nl": "De stenen van de tegenstander in groepen scheiden"
                },
                {
                    "en": "Removing a stone from the board",
                    "es": "Quitar una piedra del tablero",
                    "de": "Einen Stein vom Brett nehmen",
                    "nl": "Een steen van het bord halen"
                },
                {
                    "en": "Playing two stones in a row",
                    "es": "Jugar dos piedras seguidas",
                    "de": "Zwei Steine hintereinander spielen",
                    "nl": "Twee stenen achter elkaar spelen"
                },
                {
                    "en": "Ending the game early",
                    "es": "Terminar el juego antes",
                    "de": "Das Spiel vorzeitig beenden",
                    "nl": "Het spel voortijdig beëindigen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Cutting means placing a stone between two opponent groups to separate them, preventing them from connecting.",
                "es": "Cortar significa colocar una piedra entre dos grupos del oponente para separarlos e impedir que se conecten.",
                "de": "Schneiden bedeutet einen Stein zwischen zwei gegnerische Gruppen zu setzen, um sie zu trennen.",
                "nl": "Snijden betekent een steen plaatsen tussen twee groepen van de tegenstander om ze te scheiden."
            }
        },
        {
            "question": {
                "en": "What is a 'ko fight' in Go?",
                "es": "¿Qué es una 'pelea de ko' en Go?",
                "de": "Was ist ein 'Ko-Kampf' bei Go?",
                "nl": "Wat is een 'ko-gevecht' bij Go?"
            },
            "options": [
                {
                    "en": "A repeated capture situation players must break",
                    "es": "Una situación de captura repetida que los jugadores deben romper",
                    "de": "Eine wiederholte Fangsituation die Spieler brechen müssen",
                    "nl": "Een herhaalde vangsituatie die spelers moeten doorbreken"
                },
                {
                    "en": "A fast-paced game mode",
                    "es": "Un modo de juego rápido",
                    "de": "Ein schneller Spielmodus",
                    "nl": "Een snelle spelmodus"
                },
                {
                    "en": "A type of tournament",
                    "es": "Un tipo de torneo",
                    "de": "Eine Art Turnier",
                    "nl": "Een soort toernooi"
                },
                {
                    "en": "A disagreement between players",
                    "es": "Un desacuerdo entre jugadores",
                    "de": "Eine Meinungsverschiedenheit zwischen Spielern",
                    "nl": "Een meningsverschil tussen spelers"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A ko fight occurs when both players can recapture a stone endlessly. The ko rule forces a player to play elsewhere first.",
                "es": "Una pelea de ko ocurre cuando ambos jugadores pueden recapturar una piedra sin fin. La regla de ko obliga a jugar en otro lugar.",
                "de": "Ein Ko-Kampf entsteht wenn beide Spieler endlos einen Stein zurückfangen können. Die Ko-Regel zwingt erst anderswo zu spielen.",
                "nl": "Een ko-gevecht ontstaat wanneer beide spelers eindeloos een steen kunnen terugvangen. De ko-regel dwingt eerst elders te spelen."
            }
        },
        {
            "question": {
                "en": "What is 'capturing' in Go?",
                "es": "¿Qué es 'capturar' en Go?",
                "de": "Was ist 'Fangen' bei Go?",
                "nl": "Wat is 'vangen' bij Go?"
            },
            "options": [
                {
                    "en": "Removing stones that have no liberties",
                    "es": "Retirar piedras que no tienen libertades",
                    "de": "Steine ohne Freiheiten vom Brett entfernen",
                    "nl": "Stenen zonder vrijheden van het bord verwijderen"
                },
                {
                    "en": "Moving a stone to a new position",
                    "es": "Mover una piedra a una nueva posición",
                    "de": "Einen Stein an eine neue Position bewegen",
                    "nl": "Een steen naar een nieuwe positie verplaatsen"
                },
                {
                    "en": "Placing two stones at once",
                    "es": "Colocar dos piedras a la vez",
                    "de": "Zwei Steine gleichzeitig setzen",
                    "nl": "Twee stenen tegelijk plaatsen"
                },
                {
                    "en": "Surrounding the entire board",
                    "es": "Rodear todo el tablero",
                    "de": "Das gesamte Brett umzingeln",
                    "nl": "Het hele bord omringen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Capturing means removing opponent stones from the board after filling all their liberties. Captured stones count as points.",
                "es": "Capturar significa retirar piedras del oponente del tablero al llenar todas sus libertades. Las piedras capturadas cuentan como puntos.",
                "de": "Fangen bedeutet gegnerische Steine vom Brett zu nehmen nachdem alle Freiheiten gefüllt sind. Gefangene Steine zählen als Punkte.",
                "nl": "Vangen betekent stenen van de tegenstander van het bord halen nadat alle vrijheden gevuld zijn. Gevangen stenen tellen als punten."
            }
        },
        {
            "question": {
                "en": "What is a 'net' in Go?",
                "es": "¿Qué es una 'red' en Go?",
                "de": "Was ist ein 'Netz' bei Go?",
                "nl": "Wat is een 'net' bij Go?"
            },
            "options": [
                {
                    "en": "A technique to surround and capture stones",
                    "es": "Una técnica para rodear y capturar piedras",
                    "de": "Eine Technik um Steine zu umzingeln und zu fangen",
                    "nl": "Een techniek om stenen te omsingelen en te vangen"
                },
                {
                    "en": "The grid lines on the board",
                    "es": "Las líneas de la cuadrícula del tablero",
                    "de": "Die Gitterlinien auf dem Brett",
                    "nl": "De rasterlijnen op het bord"
                },
                {
                    "en": "A scoring method",
                    "es": "Un método de puntuación",
                    "de": "Eine Bewertungsmethode",
                    "nl": "Een scoremethode"
                },
                {
                    "en": "A type of opening move",
                    "es": "Un tipo de movimiento de apertura",
                    "de": "Eine Art Eröffnungszug",
                    "nl": "Een soort openingszet"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A net (geta) is a technique where you loosely surround opponent stones so they cannot escape, without directly chasing them.",
                "es": "Una red (geta) es una técnica donde rodeas piedras del oponente sin perseguirlas directamente para que no puedan escapar.",
                "de": "Ein Netz (Geta) ist eine Technik bei der man gegnerische Steine locker umzingelt, sodass sie nicht entkommen können.",
                "nl": "Een net (geta) is een techniek waarbij je stenen van de tegenstander losjes omsingelt zodat ze niet kunnen ontsnappen."
            }
        },
        {
            "question": {
                "en": "What is the 'endgame' phase in Go called?",
                "es": "¿Cómo se llama la fase final en Go?",
                "de": "Wie heißt die Endspielphase bei Go?",
                "nl": "Hoe heet de eindspeelfase bij Go?"
            },
            "options": [
                {
                    "en": "Yose",
                    "es": "Yose",
                    "de": "Yose",
                    "nl": "Yose"
                },
                {
                    "en": "Fuseki",
                    "es": "Fuseki",
                    "de": "Fuseki",
                    "nl": "Fuseki"
                },
                {
                    "en": "Chuban",
                    "es": "Chuban",
                    "de": "Chuban",
                    "nl": "Chuban"
                },
                {
                    "en": "Joseki",
                    "es": "Joseki",
                    "de": "Joseki",
                    "nl": "Joseki"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Yose is the endgame phase where players make small moves to finalize territory boundaries and settle remaining positions.",
                "es": "Yose es la fase final donde los jugadores hacen movimientos pequeños para finalizar los límites del territorio.",
                "de": "Yose ist die Endspielphase in der Spieler kleine Züge machen um Gebietsgrenzen festzulegen.",
                "nl": "Yose is de eindspeelfase waarin spelers kleine zetten doen om gebiedsgrenzen vast te stellen."
            }
        },
        {
            "question": {
                "en": "What is the 'opening' phase in Go called?",
                "es": "¿Cómo se llama la fase de apertura en Go?",
                "de": "Wie heißt die Eröffnungsphase bei Go?",
                "nl": "Hoe heet de openingsfase bij Go?"
            },
            "options": [
                {
                    "en": "Fuseki",
                    "es": "Fuseki",
                    "de": "Fuseki",
                    "nl": "Fuseki"
                },
                {
                    "en": "Yose",
                    "es": "Yose",
                    "de": "Yose",
                    "nl": "Yose"
                },
                {
                    "en": "Joseki",
                    "es": "Joseki",
                    "de": "Joseki",
                    "nl": "Joseki"
                },
                {
                    "en": "Tesuji",
                    "es": "Tesuji",
                    "de": "Tesuji",
                    "nl": "Tesuji"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Fuseki is the opening phase of the game where players place stones to establish influence and claim corners and sides.",
                "es": "Fuseki es la fase de apertura del juego donde los jugadores colocan piedras para establecer influencia y reclamar esquinas.",
                "de": "Fuseki ist die Eröffnungsphase in der Spieler Steine setzen um Einfluss aufzubauen und Ecken zu beanspruchen.",
                "nl": "Fuseki is de openingsfase waarin spelers stenen plaatsen om invloed op te bouwen en hoeken te claimen."
            }
        },
        {
            "question": {
                "en": "What are 'joseki' in Go?",
                "es": "¿Qué son los 'joseki' en Go?",
                "de": "Was sind 'Joseki' bei Go?",
                "nl": "Wat zijn 'joseki' bij Go?"
            },
            "options": [
                {
                    "en": "Established sequences of moves in the corner",
                    "es": "Secuencias establecidas de movimientos en la esquina",
                    "de": "Festgelegte Zugfolgen in der Ecke",
                    "nl": "Vastgestelde zetreeksen in de hoek"
                },
                {
                    "en": "Rules for capturing stones",
                    "es": "Reglas para capturar piedras",
                    "de": "Regeln zum Fangen von Steinen",
                    "nl": "Regels voor het vangen van stenen"
                },
                {
                    "en": "A type of Go board",
                    "es": "Un tipo de tablero de Go",
                    "de": "Eine Art Go-Brett",
                    "nl": "Een soort Go-bord"
                },
                {
                    "en": "Professional player rankings",
                    "es": "Clasificaciones de jugadores profesionales",
                    "de": "Ranglisten professioneller Spieler",
                    "nl": "Ranglijsten van professionele spelers"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Joseki are established sequences of moves in the corner that result in a balanced outcome for both players.",
                "es": "Los joseki son secuencias establecidas de movimientos en la esquina que resultan en un resultado equilibrado para ambos.",
                "de": "Joseki sind festgelegte Zugfolgen in der Ecke, die zu einem ausgewogenen Ergebnis für beide Spieler führen.",
                "nl": "Joseki zijn vastgestelde zetreeksen in de hoek die tot een evenwichtig resultaat voor beide spelers leiden."
            }
        },
        {
            "question": {
                "en": "What is the middle game phase in Go called?",
                "es": "¿Cómo se llama la fase de medio juego en Go?",
                "de": "Wie heißt die Mittelspielphase bei Go?",
                "nl": "Hoe heet de middenspeelfase bij Go?"
            },
            "options": [
                {
                    "en": "Chuban",
                    "es": "Chuban",
                    "de": "Chuban",
                    "nl": "Chuban"
                },
                {
                    "en": "Fuseki",
                    "es": "Fuseki",
                    "de": "Fuseki",
                    "nl": "Fuseki"
                },
                {
                    "en": "Yose",
                    "es": "Yose",
                    "de": "Yose",
                    "nl": "Yose"
                },
                {
                    "en": "Semeai",
                    "es": "Semeai",
                    "de": "Semeai",
                    "nl": "Semeai"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Chuban is the middle game phase where most fighting and strategic battles occur between the opening and endgame.",
                "es": "Chuban es la fase de medio juego donde ocurren la mayoría de batallas estratégicas entre la apertura y el final.",
                "de": "Chuban ist die Mittelspielphase in der die meisten Kämpfe zwischen Eröffnung und Endspiel stattfinden.",
                "nl": "Chuban is de middenspeelfase waarin de meeste gevechten plaatsvinden tussen opening en eindspel."
            }
        },
        {
            "question": {
                "en": "What is 'influence' in Go?",
                "es": "¿Qué es la 'influencia' en Go?",
                "de": "Was ist 'Einfluss' bei Go?",
                "nl": "Wat is 'invloed' bij Go?"
            },
            "options": [
                {
                    "en": "The power of stones over nearby areas",
                    "es": "El poder de las piedras sobre áreas cercanas",
                    "de": "Die Kraft der Steine über nahe Bereiche",
                    "nl": "De kracht van stenen over nabijgelegen gebieden"
                },
                {
                    "en": "The number of stones on the board",
                    "es": "El número de piedras en el tablero",
                    "de": "Die Anzahl der Steine auf dem Brett",
                    "nl": "Het aantal stenen op het bord"
                },
                {
                    "en": "A player's ranking",
                    "es": "La clasificación de un jugador",
                    "de": "Die Ranglistenposition eines Spielers",
                    "nl": "De ranking van een speler"
                },
                {
                    "en": "The size of the board",
                    "es": "El tamaño del tablero",
                    "de": "Die Größe des Bretts",
                    "nl": "De grootte van het bord"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Influence is the strength or control that stones exert over nearby empty areas, potentially becoming territory later.",
                "es": "La influencia es la fuerza que las piedras ejercen sobre áreas vacías cercanas, que pueden convertirse en territorio.",
                "de": "Einfluss ist die Stärke die Steine auf nahe leere Bereiche ausüben, die später Gebiet werden können.",
                "nl": "Invloed is de kracht die stenen uitoefenen op nabijgelegen lege gebieden, die later gebied kunnen worden."
            }
        },
        {
            "question": {
                "en": "What does 'extend' mean in Go?",
                "es": "¿Qué significa 'extender' en Go?",
                "de": "Was bedeutet 'erweitern' bei Go?",
                "nl": "Wat betekent 'uitbreiden' bij Go?"
            },
            "options": [
                {
                    "en": "Playing a stone along the side from your group",
                    "es": "Jugar una piedra a lo largo del lado desde tu grupo",
                    "de": "Einen Stein entlang der Seite von der Gruppe spielen",
                    "nl": "Een steen langs de zijkant vanuit je groep spelen"
                },
                {
                    "en": "Adding more time to the game clock",
                    "es": "Agregar más tiempo al reloj del juego",
                    "de": "Mehr Zeit zur Spieluhr hinzufügen",
                    "nl": "Meer tijd aan de spelklok toevoegen"
                },
                {
                    "en": "Making the board larger",
                    "es": "Hacer el tablero más grande",
                    "de": "Das Brett größer machen",
                    "nl": "Het bord groter maken"
                },
                {
                    "en": "Playing two turns in a row",
                    "es": "Jugar dos turnos seguidos",
                    "de": "Zwei Züge hintereinander spielen",
                    "nl": "Twee beurten achter elkaar spelen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Extending means playing a stone along the side from an existing group to expand territory or strengthen a position.",
                "es": "Extender significa jugar una piedra a lo largo del lado desde un grupo existente para expandir territorio o fortalecer la posición.",
                "de": "Erweitern bedeutet einen Stein entlang der Seite von einer bestehenden Gruppe zu spielen um Gebiet auszudehnen.",
                "nl": "Uitbreiden betekent een steen langs de zijkant vanuit een bestaande groep spelen om gebied uit te breiden."
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
                    "en": "A mutual life situation where neither can capture",
                    "es": "Una situación de vida mutua donde ninguno puede capturar",
                    "de": "Eine gegenseitige Lebenssituation ohne Fangen",
                    "nl": "Een wederzijdse levenssituatie zonder vangen"
                },
                {
                    "en": "A very strong group",
                    "es": "Un grupo muy fuerte",
                    "de": "Eine sehr starke Gruppe",
                    "nl": "Een zeer sterke groep"
                },
                {
                    "en": "A type of handicap stone",
                    "es": "Un tipo de piedra de handicap",
                    "de": "Eine Art Vorgabestein",
                    "nl": "Een soort handicapsteen"
                },
                {
                    "en": "A professional title",
                    "es": "Un título profesional",
                    "de": "Ein professioneller Titel",
                    "nl": "Een professionele titel"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Seki is a situation where two groups share liberties and neither player can capture without losing their own group.",
                "es": "Seki es una situación donde dos grupos comparten libertades y ningún jugador puede capturar sin perder su propio grupo.",
                "de": "Seki ist eine Situation in der zwei Gruppen Freiheiten teilen und keiner fangen kann ohne seine eigene Gruppe zu verlieren.",
                "nl": "Seki is een situatie waarbij twee groepen vrijheden delen en geen speler kan vangen zonder zijn eigen groep te verliezen."
            }
        },
        {
            "question": {
                "en": "What is a 'tesuji' in Go?",
                "es": "¿Qué es un 'tesuji' en Go?",
                "de": "Was ist ein 'Tesuji' bei Go?",
                "nl": "Wat is een 'tesuji' bij Go?"
            },
            "options": [
                {
                    "en": "A clever tactical move",
                    "es": "Un movimiento táctico inteligente",
                    "de": "Ein geschickter taktischer Zug",
                    "nl": "Een slimme tactische zet"
                },
                {
                    "en": "A type of Go board",
                    "es": "Un tipo de tablero de Go",
                    "de": "Eine Art Go-Brett",
                    "nl": "Een soort Go-bord"
                },
                {
                    "en": "A passing move",
                    "es": "Un movimiento de paso",
                    "de": "Ein Passzug",
                    "nl": "Een paszet"
                },
                {
                    "en": "A beginner's mistake",
                    "es": "Un error de principiante",
                    "de": "Ein Anfängerfehler",
                    "nl": "Een beginnersfout"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A tesuji is a clever, often surprising tactical move that achieves a good result in a local position.",
                "es": "Un tesuji es un movimiento táctico inteligente y sorprendente que logra un buen resultado en una posición local.",
                "de": "Ein Tesuji ist ein geschickter, oft überraschender taktischer Zug, der ein gutes Ergebnis in einer lokalen Position erzielt.",
                "nl": "Een tesuji is een slimme, vaak verrassende tactische zet die een goed resultaat bereikt in een lokale positie."
            }
        },
        {
            "question": {
                "en": "What is a 'moyo' in Go?",
                "es": "¿Qué es un 'moyo' en Go?",
                "de": "Was ist ein 'Moyo' bei Go?",
                "nl": "Wat is een 'moyo' bij Go?"
            },
            "options": [
                {
                    "en": "A large potential territory",
                    "es": "Un gran territorio potencial",
                    "de": "Ein großes potenzielles Gebiet",
                    "nl": "Een groot potentieel gebied"
                },
                {
                    "en": "A captured group",
                    "es": "Un grupo capturado",
                    "de": "Eine gefangene Gruppe",
                    "nl": "Een gevangen groep"
                },
                {
                    "en": "A type of ko threat",
                    "es": "Un tipo de amenaza de ko",
                    "de": "Eine Art Ko-Drohung",
                    "nl": "Een soort ko-dreiging"
                },
                {
                    "en": "A professional Go player",
                    "es": "Un jugador profesional de Go",
                    "de": "Ein professioneller Go-Spieler",
                    "nl": "Een professionele Go-speler"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A moyo is a large area of potential territory that is not yet fully enclosed but influenced by your stones.",
                "es": "Un moyo es un área grande de territorio potencial que aún no está completamente cerrada pero influenciada por tus piedras.",
                "de": "Ein Moyo ist ein großer Bereich potenziellen Gebiets, der noch nicht vollständig umschlossen aber beeinflusst ist.",
                "nl": "Een moyo is een groot gebied van potentieel territorium dat nog niet volledig omsloten maar wel beïnvloed is door je stenen."
            }
        },
        {
            "question": {
                "en": "What is 'thickness' in Go?",
                "es": "¿Qué es el 'grosor' en Go?",
                "de": "Was ist 'Dicke' bei Go?",
                "nl": "Wat is 'dikte' bij Go?"
            },
            "options": [
                {
                    "en": "A strong wall of stones with no weaknesses",
                    "es": "Una pared fuerte de piedras sin debilidades",
                    "de": "Eine starke Steinmauer ohne Schwächen",
                    "nl": "Een sterke muur van stenen zonder zwakheden"
                },
                {
                    "en": "The size of the stones used",
                    "es": "El tamaño de las piedras usadas",
                    "de": "Die Größe der verwendeten Steine",
                    "nl": "De grootte van de gebruikte stenen"
                },
                {
                    "en": "Having many stones on the board",
                    "es": "Tener muchas piedras en el tablero",
                    "de": "Viele Steine auf dem Brett haben",
                    "nl": "Veel stenen op het bord hebben"
                },
                {
                    "en": "The depth of the board",
                    "es": "La profundidad del tablero",
                    "de": "Die Tiefe des Bretts",
                    "nl": "De diepte van het bord"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Thickness refers to a strong, solid group of stones that has no weaknesses and projects influence over the board.",
                "es": "El grosor se refiere a un grupo fuerte y sólido de piedras sin debilidades que proyecta influencia sobre el tablero.",
                "de": "Dicke bezieht sich auf eine starke, solide Steingruppe ohne Schwächen, die Einfluss auf das Brett projiziert.",
                "nl": "Dikte verwijst naar een sterke, solide groep stenen zonder zwakheden die invloed uitoefent op het bord."
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
                    "en": "Playing inside the opponent's territory",
                    "es": "Jugar dentro del territorio del oponente",
                    "de": "In das Gebiet des Gegners spielen",
                    "nl": "Spelen in het gebied van de tegenstander"
                },
                {
                    "en": "Capturing many stones at once",
                    "es": "Capturar muchas piedras a la vez",
                    "de": "Viele Steine auf einmal fangen",
                    "nl": "Veel stenen tegelijk vangen"
                },
                {
                    "en": "Starting the game first",
                    "es": "Empezar el juego primero",
                    "de": "Das Spiel als Erster beginnen",
                    "nl": "Het spel als eerste beginnen"
                },
                {
                    "en": "Playing only on the edges",
                    "es": "Jugar solo en los bordes",
                    "de": "Nur am Rand spielen",
                    "nl": "Alleen aan de randen spelen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "An invasion is playing a stone deep inside the opponent's area of influence or territory to reduce their score.",
                "es": "Una invasión es jugar una piedra dentro del área de influencia del oponente para reducir su puntuación.",
                "de": "Eine Invasion ist das Spielen eines Steins tief im Einflussbereich des Gegners, um dessen Punktzahl zu verringern.",
                "nl": "Een invasie is het spelen van een steen diep in het invloedsgebied van de tegenstander om diens score te verminderen."
            }
        },
        {
            "question": {
                "en": "What is a 'ko threat' in Go?",
                "es": "¿Qué es una 'amenaza de ko' en Go?",
                "de": "Was ist eine 'Ko-Drohung' bei Go?",
                "nl": "Wat is een 'ko-dreiging' bij Go?"
            },
            "options": [
                {
                    "en": "A move elsewhere that forces the opponent to respond",
                    "es": "Un movimiento en otro lugar que obliga al oponente a responder",
                    "de": "Ein Zug woanders der den Gegner zur Antwort zwingt",
                    "nl": "Een zet elders die de tegenstander dwingt te reageren"
                },
                {
                    "en": "A warning to the opponent",
                    "es": "Una advertencia al oponente",
                    "de": "Eine Warnung an den Gegner",
                    "nl": "Een waarschuwing aan de tegenstander"
                },
                {
                    "en": "A threat to quit the game",
                    "es": "Una amenaza de abandonar el juego",
                    "de": "Eine Drohung das Spiel aufzugeben",
                    "nl": "Een dreiging om het spel te verlaten"
                },
                {
                    "en": "A move that ends the ko",
                    "es": "Un movimiento que termina el ko",
                    "de": "Ein Zug der das Ko beendet",
                    "nl": "Een zet die de ko beëindigt"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A ko threat is a move played elsewhere that is important enough to force the opponent to respond instead of recapturing the ko.",
                "es": "Una amenaza de ko es un movimiento en otro lugar lo suficientemente importante para forzar al oponente a responder.",
                "de": "Eine Ko-Drohung ist ein Zug woanders, der wichtig genug ist um den Gegner zur Antwort zu zwingen statt das Ko zurückzufangen.",
                "nl": "Een ko-dreiging is een zet elders die belangrijk genoeg is om de tegenstander te dwingen te reageren in plaats van de ko terug te vangen."
            }
        },
        {
            "question": {
                "en": "What is 'area scoring' in Go?",
                "es": "¿Qué es la 'puntuación por área' en Go?",
                "de": "Was ist die 'Gebietswertung' bei Go?",
                "nl": "Wat is 'gebiedstelling' bij Go?"
            },
            "options": [
                {
                    "en": "Counting territory plus stones on the board",
                    "es": "Contar territorio más piedras en el tablero",
                    "de": "Gebiet plus Steine auf dem Brett zählen",
                    "nl": "Gebied plus stenen op het bord tellen"
                },
                {
                    "en": "Counting only captured stones",
                    "es": "Contar solo piedras capturadas",
                    "de": "Nur gefangene Steine zählen",
                    "nl": "Alleen gevangen stenen tellen"
                },
                {
                    "en": "Measuring the board area used",
                    "es": "Medir el área del tablero utilizada",
                    "de": "Die benutzte Brettfläche messen",
                    "nl": "Het gebruikte bordoppervlak meten"
                },
                {
                    "en": "Counting moves made",
                    "es": "Contar movimientos hechos",
                    "de": "Gemachte Züge zählen",
                    "nl": "Gedane zetten tellen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Area scoring counts both the territory and the stones on the board. This method is used in Chinese rules.",
                "es": "La puntuación por área cuenta tanto el territorio como las piedras en el tablero. Este método se usa en las reglas chinas.",
                "de": "Die Gebietswertung zählt sowohl das Gebiet als auch die Steine auf dem Brett. Diese Methode wird bei chinesischen Regeln verwendet.",
                "nl": "Gebiedstelling telt zowel het gebied als de stenen op het bord. Deze methode wordt bij Chinese regels gebruikt."
            }
        },
        {
            "question": {
                "en": "What is 'territory scoring' in Go?",
                "es": "¿Qué es la 'puntuación por territorio' en Go?",
                "de": "Was ist die 'Territorialwertung' bei Go?",
                "nl": "Wat is 'territoriumtelling' bij Go?"
            },
            "options": [
                {
                    "en": "Counting territory plus captured stones",
                    "es": "Contar territorio más piedras capturadas",
                    "de": "Gebiet plus gefangene Steine zählen",
                    "nl": "Gebied plus gevangen stenen tellen"
                },
                {
                    "en": "Counting only the stones on the board",
                    "es": "Contar solo las piedras en el tablero",
                    "de": "Nur die Steine auf dem Brett zählen",
                    "nl": "Alleen de stenen op het bord tellen"
                },
                {
                    "en": "Counting how many moves were made",
                    "es": "Contar cuántos movimientos se hicieron",
                    "de": "Zählen wie viele Züge gemacht wurden",
                    "nl": "Tellen hoeveel zetten er gedaan zijn"
                },
                {
                    "en": "Counting the total board size",
                    "es": "Contar el tamaño total del tablero",
                    "de": "Die Gesamtgröße des Bretts zählen",
                    "nl": "De totale bordgrootte tellen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Territory scoring counts empty intersections you control plus captured opponent stones. This is used in Japanese rules.",
                "es": "La puntuación por territorio cuenta intersecciones vacías que controlas más piedras capturadas. Se usa en las reglas japonesas.",
                "de": "Territorialwertung zählt leere kontrollierte Kreuzungen plus gefangene Steine. Dies wird bei japanischen Regeln verwendet.",
                "nl": "Territoriumtelling telt lege kruispunten die je controleert plus gevangen stenen. Dit wordt bij Japanse regels gebruikt."
            }
        },
        {
            "question": {
                "en": "What is a 'dame' in Go?",
                "es": "¿Qué es un 'dame' en Go?",
                "de": "Was ist ein 'Dame' bei Go?",
                "nl": "Wat is een 'dame' bij Go?"
            },
            "options": [
                {
                    "en": "A neutral point belonging to neither player",
                    "es": "Un punto neutral que no pertenece a ningún jugador",
                    "de": "Ein neutraler Punkt der keinem Spieler gehört",
                    "nl": "Een neutraal punt dat aan geen speler toebehoort"
                },
                {
                    "en": "A very powerful stone",
                    "es": "Una piedra muy poderosa",
                    "de": "Ein sehr mächtiger Stein",
                    "nl": "Een zeer krachtige steen"
                },
                {
                    "en": "The queen piece in Go",
                    "es": "La pieza reina en Go",
                    "de": "Die Damenfigur bei Go",
                    "nl": "Het damestuk bij Go"
                },
                {
                    "en": "A type of eye",
                    "es": "Un tipo de ojo",
                    "de": "Eine Art Auge",
                    "nl": "Een soort oog"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Dame are neutral points on the board that belong to neither player. They are filled during scoring but are worth no points.",
                "es": "Dame son puntos neutrales en el tablero que no pertenecen a ningún jugador. Se llenan durante la puntuación pero no valen puntos.",
                "de": "Dame sind neutrale Punkte auf dem Brett, die keinem Spieler gehören. Sie werden bei der Wertung gefüllt, zählen aber keine Punkte.",
                "nl": "Dame zijn neutrale punten op het bord die aan geen speler toebehoren. Ze worden bij het tellen gevuld maar zijn geen punten waard."
            }
        },
        {
            "question": {
                "en": "What does 'resign' mean in Go?",
                "es": "¿Qué significa 'rendirse' en Go?",
                "de": "Was bedeutet 'aufgeben' bei Go?",
                "nl": "Wat betekent 'opgeven' bij Go?"
            },
            "options": [
                {
                    "en": "Admitting defeat before the game ends",
                    "es": "Admitir la derrota antes de que termine el juego",
                    "de": "Die Niederlage eingestehen bevor das Spiel endet",
                    "nl": "De nederlaag toegeven voordat het spel eindigt"
                },
                {
                    "en": "Taking a break during the game",
                    "es": "Tomar un descanso durante el juego",
                    "de": "Eine Pause während des Spiels machen",
                    "nl": "Een pauze nemen tijdens het spel"
                },
                {
                    "en": "Restarting the game",
                    "es": "Reiniciar el juego",
                    "de": "Das Spiel neu starten",
                    "nl": "Het spel opnieuw starten"
                },
                {
                    "en": "Asking for a rematch",
                    "es": "Pedir una revancha",
                    "de": "Um eine Revanche bitten",
                    "nl": "Om een revanche vragen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Resigning means a player gives up because they believe they cannot win. This is common in professional Go games.",
                "es": "Rendirse significa que un jugador se da por vencido porque cree que no puede ganar. Es común en juegos profesionales.",
                "de": "Aufgeben bedeutet dass ein Spieler aufhört weil er glaubt nicht gewinnen zu können. Das ist im professionellen Go üblich.",
                "nl": "Opgeven betekent dat een speler stopt omdat hij denkt niet te kunnen winnen. Dit is gebruikelijk bij professioneel Go."
            }
        },
        {
            "question": {
                "en": "What is the 'shape' of stones in Go?",
                "es": "¿Qué es la 'forma' de las piedras en Go?",
                "de": "Was ist die 'Form' der Steine bei Go?",
                "nl": "Wat is de 'vorm' van stenen bij Go?"
            },
            "options": [
                {
                    "en": "The pattern formed by a group of stones",
                    "es": "El patrón formado por un grupo de piedras",
                    "de": "Das Muster das eine Steingruppe bildet",
                    "nl": "Het patroon gevormd door een groep stenen"
                },
                {
                    "en": "The physical shape of the stones",
                    "es": "La forma física de las piedras",
                    "de": "Die physische Form der Steine",
                    "nl": "De fysieke vorm van de stenen"
                },
                {
                    "en": "The color of the stones",
                    "es": "El color de las piedras",
                    "de": "Die Farbe der Steine",
                    "nl": "De kleur van de stenen"
                },
                {
                    "en": "The size of the stones",
                    "es": "El tamaño de las piedras",
                    "de": "Die Größe der Steine",
                    "nl": "De grootte van de stenen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Shape refers to the pattern and arrangement of stones on the board. Good shape means efficient, strong positioning.",
                "es": "La forma se refiere al patrón y disposición de las piedras en el tablero. Buena forma significa posicionamiento eficiente.",
                "de": "Form bezieht sich auf das Muster und die Anordnung der Steine auf dem Brett. Gute Form bedeutet effiziente Positionierung.",
                "nl": "Vorm verwijst naar het patroon en de rangschikking van stenen op het bord. Goede vorm betekent efficiënte positionering."
            }
        },
        {
            "question": {
                "en": "What is a 'bamboo joint' in Go?",
                "es": "¿Qué es un 'nudo de bambú' en Go?",
                "de": "Was ist ein 'Bambusgelenk' bei Go?",
                "nl": "Wat is een 'bamboeverbinding' bij Go?"
            },
            "options": [
                {
                    "en": "Two pairs of stones that cannot be cut apart",
                    "es": "Dos pares de piedras que no pueden ser cortados",
                    "de": "Zwei Steinpaare die nicht getrennt werden können",
                    "nl": "Twee paren stenen die niet gescheiden kunnen worden"
                },
                {
                    "en": "A type of Go board material",
                    "es": "Un tipo de material del tablero",
                    "de": "Eine Art Brettmaterial",
                    "nl": "Een soort bordmateriaal"
                },
                {
                    "en": "A weak connection between stones",
                    "es": "Una conexión débil entre piedras",
                    "de": "Eine schwache Verbindung zwischen Steinen",
                    "nl": "Een zwakke verbinding tussen stenen"
                },
                {
                    "en": "A decorative pattern",
                    "es": "Un patrón decorativo",
                    "de": "Ein dekoratives Muster",
                    "nl": "Een decoratief patroon"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A bamboo joint is a shape of four stones in two parallel pairs that creates an unbreakable connection between groups.",
                "es": "Un nudo de bambú es una forma de cuatro piedras en dos pares paralelos que crea una conexión inquebrantable.",
                "de": "Ein Bambusgelenk ist eine Form aus vier Steinen in zwei parallelen Paaren, die eine untrennbare Verbindung bildet.",
                "nl": "Een bamboeverbinding is een vorm van vier stenen in twee parallelle paren die een onbreekbare verbinding vormt."
            }
        },
        {
            "question": {
                "en": "What is an 'approach move' in Go?",
                "es": "¿Qué es un 'movimiento de acercamiento' en Go?",
                "de": "Was ist ein 'Annäherungszug' bei Go?",
                "nl": "Wat is een 'benaderingszet' bij Go?"
            },
            "options": [
                {
                    "en": "A stone played near an opponent's corner stone",
                    "es": "Una piedra jugada cerca de la piedra de esquina del oponente",
                    "de": "Ein Stein nahe beim Eckstein des Gegners gespielt",
                    "nl": "Een steen gespeeld bij de hoeksteen van de tegenstander"
                },
                {
                    "en": "The first move of the game",
                    "es": "El primer movimiento del juego",
                    "de": "Der erste Zug des Spiels",
                    "nl": "De eerste zet van het spel"
                },
                {
                    "en": "Walking up to the board",
                    "es": "Acercarse al tablero",
                    "de": "Zum Brett gehen",
                    "nl": "Naar het bord lopen"
                },
                {
                    "en": "A move in the center",
                    "es": "Un movimiento en el centro",
                    "de": "Ein Zug in der Mitte",
                    "nl": "Een zet in het midden"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "An approach move is played near an opponent's corner stone to challenge their position and start a local fight or joseki.",
                "es": "Un movimiento de acercamiento se juega cerca de la piedra de esquina del oponente para desafiar su posición.",
                "de": "Ein Annäherungszug wird nahe am Eckstein des Gegners gespielt, um dessen Position herauszufordern.",
                "nl": "Een benaderingszet wordt gespeeld bij de hoeksteen van de tegenstander om diens positie uit te dagen."
            }
        },
        {
            "question": {
                "en": "What is a 'live group' in Go?",
                "es": "¿Qué es un 'grupo vivo' en Go?",
                "de": "Was ist eine 'lebende Gruppe' bei Go?",
                "nl": "Wat is een 'levende groep' bij Go?"
            },
            "options": [
                {
                    "en": "A group that cannot be captured",
                    "es": "Un grupo que no puede ser capturado",
                    "de": "Eine Gruppe die nicht gefangen werden kann",
                    "nl": "Een groep die niet gevangen kan worden"
                },
                {
                    "en": "Any group on the board",
                    "es": "Cualquier grupo en el tablero",
                    "de": "Jede Gruppe auf dem Brett",
                    "nl": "Elke groep op het bord"
                },
                {
                    "en": "A group with many stones",
                    "es": "Un grupo con muchas piedras",
                    "de": "Eine Gruppe mit vielen Steinen",
                    "nl": "Een groep met veel stenen"
                },
                {
                    "en": "A group in the center",
                    "es": "Un grupo en el centro",
                    "de": "Eine Gruppe in der Mitte",
                    "nl": "Een groep in het midden"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A live group is one that has enough eyes or liberties that it cannot be captured by the opponent under correct play.",
                "es": "Un grupo vivo es uno que tiene suficientes ojos o libertades que no puede ser capturado por el oponente con juego correcto.",
                "de": "Eine lebende Gruppe hat genug Augen oder Freiheiten, dass sie bei korrektem Spiel nicht gefangen werden kann.",
                "nl": "Een levende groep heeft genoeg ogen of vrijheden dat hij bij correct spel niet gevangen kan worden."
            }
        },
        {
            "question": {
                "en": "What does 'pass' mean in Go?",
                "es": "¿Qué significa 'pasar' en Go?",
                "de": "Was bedeutet 'passen' bei Go?",
                "nl": "Wat betekent 'passen' bij Go?"
            },
            "options": [
                {
                    "en": "Choosing not to place a stone on your turn",
                    "es": "Elegir no colocar una piedra en tu turno",
                    "de": "Wählen keinen Stein in seinem Zug zu setzen",
                    "nl": "Kiezen om geen steen te plaatsen in je beurt"
                },
                {
                    "en": "Giving a stone to your opponent",
                    "es": "Dar una piedra a tu oponente",
                    "de": "Dem Gegner einen Stein geben",
                    "nl": "Een steen aan je tegenstander geven"
                },
                {
                    "en": "Moving a stone to another position",
                    "es": "Mover una piedra a otra posición",
                    "de": "Einen Stein an eine andere Position bewegen",
                    "nl": "Een steen naar een andere positie verplaatsen"
                },
                {
                    "en": "Taking an extra turn",
                    "es": "Tomar un turno extra",
                    "de": "Einen zusätzlichen Zug nehmen",
                    "nl": "Een extra beurt nemen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Passing means a player chooses not to play a stone. When both players pass consecutively, the game ends and scoring begins.",
                "es": "Pasar significa que un jugador elige no jugar una piedra. Cuando ambos pasan consecutivamente, el juego termina.",
                "de": "Passen bedeutet dass ein Spieler keinen Stein setzt. Wenn beide nacheinander passen, endet das Spiel und die Wertung beginnt.",
                "nl": "Passen betekent dat een speler kiest geen steen te spelen. Wanneer beide achtereenvolgens passen, eindigt het spel."
            }
        },
        {
            "question": {
                "en": "What is an 'overplay' in Go?",
                "es": "¿Qué es un 'exceso' en Go?",
                "de": "Was ist ein 'Überspiel' bei Go?",
                "nl": "Wat is een 'overspel' bij Go?"
            },
            "options": [
                {
                    "en": "A move that is too aggressive for the position",
                    "es": "Un movimiento demasiado agresivo para la posición",
                    "de": "Ein Zug der zu aggressiv für die Position ist",
                    "nl": "Een zet die te agressief is voor de positie"
                },
                {
                    "en": "Playing too many games",
                    "es": "Jugar demasiados juegos",
                    "de": "Zu viele Spiele spielen",
                    "nl": "Te veel spellen spelen"
                },
                {
                    "en": "Placing stones on top of each other",
                    "es": "Colocar piedras una encima de otra",
                    "de": "Steine aufeinander stapeln",
                    "nl": "Stenen op elkaar plaatsen"
                },
                {
                    "en": "Taking too long on a turn",
                    "es": "Tardar demasiado en un turno",
                    "de": "Zu lange für einen Zug brauchen",
                    "nl": "Te lang doen over een beurt"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "An overplay is a move that asks for too much and can be punished by the opponent with correct responses.",
                "es": "Un exceso es un movimiento que pide demasiado y puede ser castigado por el oponente con respuestas correctas.",
                "de": "Ein Überspiel ist ein Zug der zu viel verlangt und vom Gegner mit korrekten Antworten bestraft werden kann.",
                "nl": "Een overspel is een zet die te veel vraagt en door de tegenstander bestraft kan worden met correcte antwoorden."
            }
        },
        {
            "question": {
                "en": "What is the 'first line' on a Go board?",
                "es": "¿Qué es la 'primera línea' en un tablero de Go?",
                "de": "Was ist die 'erste Linie' auf einem Go-Brett?",
                "nl": "Wat is de 'eerste lijn' op een Go-bord?"
            },
            "options": [
                {
                    "en": "The outermost row of intersections",
                    "es": "La fila más exterior de intersecciones",
                    "de": "Die äußerste Reihe von Kreuzungen",
                    "nl": "De buitenste rij kruispunten"
                },
                {
                    "en": "The center line of the board",
                    "es": "La línea central del tablero",
                    "de": "Die mittlere Linie des Bretts",
                    "nl": "De middenlijn van het bord"
                },
                {
                    "en": "The first move of the game",
                    "es": "El primer movimiento del juego",
                    "de": "Der erste Zug des Spiels",
                    "nl": "De eerste zet van het spel"
                },
                {
                    "en": "A line drawn between two stones",
                    "es": "Una línea entre dos piedras",
                    "de": "Eine Linie zwischen zwei Steinen",
                    "nl": "Een lijn tussen twee stenen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The first line is the outermost row of intersections along the edge of the board. It is the least valuable for territory.",
                "es": "La primera línea es la fila más exterior de intersecciones en el borde del tablero. Es la menos valiosa para territorio.",
                "de": "Die erste Linie ist die äußerste Reihe am Rand des Bretts. Sie ist am wenigsten wertvoll für Gebiet.",
                "nl": "De eerste lijn is de buitenste rij kruispunten aan de rand van het bord. Het is het minst waardevol voor gebied."
            }
        },
        {
            "question": {
                "en": "What is a 'jump' in Go?",
                "es": "¿Qué es un 'salto' en Go?",
                "de": "Was ist ein 'Sprung' bei Go?",
                "nl": "Wat is een 'sprong' bij Go?"
            },
            "options": [
                {
                    "en": "Playing a stone with a gap from your other stones",
                    "es": "Jugar una piedra con espacio desde tus otras piedras",
                    "de": "Einen Stein mit Abstand von eigenen Steinen spielen",
                    "nl": "Een steen met een gat vanaf je andere stenen spelen"
                },
                {
                    "en": "Skipping your turn",
                    "es": "Saltar tu turno",
                    "de": "Seinen Zug überspringen",
                    "nl": "Je beurt overslaan"
                },
                {
                    "en": "Moving a stone to a new place",
                    "es": "Mover una piedra a un nuevo lugar",
                    "de": "Einen Stein an einen neuen Ort bewegen",
                    "nl": "Een steen naar een nieuwe plek verplaatsen"
                },
                {
                    "en": "Removing opponent's stones",
                    "es": "Quitar piedras del oponente",
                    "de": "Steine des Gegners entfernen",
                    "nl": "Stenen van de tegenstander verwijderen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A jump is playing a stone one or more spaces away from your existing stones along a line, leaving a gap between them.",
                "es": "Un salto es jugar una piedra uno o más espacios de tus piedras existentes a lo largo de una línea, dejando un espacio.",
                "de": "Ein Sprung ist das Spielen eines Steins mit einem oder mehreren Abständen entlang einer Linie von eigenen Steinen.",
                "nl": "Een sprong is een steen spelen met één of meer tussenruimtes langs een lijn vanaf je bestaande stenen."
            }
        },
        {
            "question": {
                "en": "What is a 'diagonal' connection in Go?",
                "es": "¿Qué es una conexión 'diagonal' en Go?",
                "de": "Was ist eine 'diagonale' Verbindung bei Go?",
                "nl": "Wat is een 'diagonale' verbinding bij Go?"
            },
            "options": [
                {
                    "en": "Two stones placed diagonally from each other",
                    "es": "Dos piedras colocadas en diagonal una de otra",
                    "de": "Zwei Steine diagonal voneinander platziert",
                    "nl": "Twee stenen diagonaal van elkaar geplaatst"
                },
                {
                    "en": "A straight line of stones",
                    "es": "Una línea recta de piedras",
                    "de": "Eine gerade Linie von Steinen",
                    "nl": "Een rechte lijn van stenen"
                },
                {
                    "en": "Three stones in a triangle",
                    "es": "Tres piedras en triángulo",
                    "de": "Drei Steine in einem Dreieck",
                    "nl": "Drie stenen in een driehoek"
                },
                {
                    "en": "Stones on opposite sides of the board",
                    "es": "Piedras en lados opuestos del tablero",
                    "de": "Steine auf gegenüberliegenden Seiten",
                    "nl": "Stenen aan tegenovergestelde kanten"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A diagonal connection is when two friendly stones are placed diagonally. It is a loose connection that can sometimes be cut.",
                "es": "Una conexión diagonal es cuando dos piedras amigas se colocan en diagonal. Es una conexión suelta que a veces puede cortarse.",
                "de": "Eine diagonale Verbindung ist wenn zwei eigene Steine diagonal stehen. Es ist eine lose Verbindung die manchmal geschnitten werden kann.",
                "nl": "Een diagonale verbinding is wanneer twee eigen stenen diagonaal staan. Het is een losse verbinding die soms gesneden kan worden."
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
                    "en": "A move that wraps around the opponent's stone",
                    "es": "Un movimiento que rodea la piedra del oponente",
                    "de": "Ein Zug der um den gegnerischen Stein herumgeht",
                    "nl": "Een zet die om de steen van de tegenstander gaat"
                },
                {
                    "en": "A move in the center of the board",
                    "es": "Un movimiento en el centro del tablero",
                    "de": "Ein Zug in der Mitte des Bretts",
                    "nl": "Een zet in het midden van het bord"
                },
                {
                    "en": "A defensive retreat",
                    "es": "Una retirada defensiva",
                    "de": "Ein defensiver Rückzug",
                    "nl": "Een defensieve terugtrekking"
                },
                {
                    "en": "A passing move",
                    "es": "Un movimiento de paso",
                    "de": "Ein Passzug",
                    "nl": "Een paszet"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A hane is a move played at the head of the opponent's stones, wrapping around the end of their group diagonally.",
                "es": "Un hane es un movimiento jugado en la cabeza de las piedras del oponente, rodeando el final de su grupo en diagonal.",
                "de": "Ein Hane ist ein Zug am Kopf der gegnerischen Steine, der diagonal um das Ende ihrer Gruppe herumgeht.",
                "nl": "Een hane is een zet aan het hoofd van de stenen van de tegenstander, diagonaal om het einde van hun groep heen."
            }
        },
        {
            "question": {
                "en": "What is the purpose of 'counting' during a Go game?",
                "es": "¿Cuál es el propósito de 'contar' durante un juego de Go?",
                "de": "Was ist der Zweck des 'Zählens' während eines Go-Spiels?",
                "nl": "Wat is het doel van 'tellen' tijdens een Go-spel?"
            },
            "options": [
                {
                    "en": "To estimate who is winning",
                    "es": "Para estimar quién está ganando",
                    "de": "Um abzuschätzen wer gewinnt",
                    "nl": "Om in te schatten wie wint"
                },
                {
                    "en": "To keep track of moves played",
                    "es": "Para llevar la cuenta de los movimientos",
                    "de": "Um die gespielten Züge zu verfolgen",
                    "nl": "Om de gedane zetten bij te houden"
                },
                {
                    "en": "To time each player's turns",
                    "es": "Para cronometrar los turnos",
                    "de": "Um die Züge zu timen",
                    "nl": "Om de beurten te timen"
                },
                {
                    "en": "To count remaining stones",
                    "es": "Para contar las piedras restantes",
                    "de": "Um die verbleibenden Steine zu zählen",
                    "nl": "Om de resterende stenen te tellen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Counting is done during the game to estimate the score and determine which player is ahead, guiding strategic decisions.",
                "es": "Contar se hace durante el juego para estimar la puntuación y determinar qué jugador va adelante.",
                "de": "Zählen wird während des Spiels gemacht um die Punktzahl abzuschätzen und strategische Entscheidungen zu treffen.",
                "nl": "Tellen wordt tijdens het spel gedaan om de score in te schatten en te bepalen welke speler voorstaat."
            }
        },
        {
            "question": {
                "en": "What size board is commonly used for beginners?",
                "es": "¿Qué tamaño de tablero se usa comúnmente para principiantes?",
                "de": "Welche Brettgröße wird häufig für Anfänger verwendet?",
                "nl": "Welk bordformaat wordt vaak voor beginners gebruikt?"
            },
            "options": [
                {
                    "en": "9x9",
                    "es": "9x9",
                    "de": "9x9",
                    "nl": "9x9"
                },
                {
                    "en": "19x19",
                    "es": "19x19",
                    "de": "19x19",
                    "nl": "19x19"
                },
                {
                    "en": "15x15",
                    "es": "15x15",
                    "de": "15x15",
                    "nl": "15x15"
                },
                {
                    "en": "7x7",
                    "es": "7x7",
                    "de": "7x7",
                    "nl": "7x7"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A 9x9 board is commonly used for beginners because games are shorter and easier to understand than on the standard 19x19.",
                "es": "Un tablero 9x9 se usa comúnmente para principiantes porque los juegos son más cortos y fáciles que en el 19x19 estándar.",
                "de": "Ein 9x9 Brett wird häufig für Anfänger verwendet, da Spiele kürzer und einfacher sind als auf dem Standard 19x19.",
                "nl": "Een 9x9 bord wordt vaak voor beginners gebruikt omdat spellen korter en makkelijker zijn dan op het standaard 19x19."
            }
        },
        {
            "question": {
                "en": "What is a 'push' in Go?",
                "es": "¿Qué es un 'empuje' en Go?",
                "de": "Was ist ein 'Drücken' bei Go?",
                "nl": "Wat is een 'duw' bij Go?"
            },
            "options": [
                {
                    "en": "Playing a stone directly next to opponent's stones",
                    "es": "Jugar una piedra directamente junto a las piedras del oponente",
                    "de": "Einen Stein direkt neben gegnerische Steine spielen",
                    "nl": "Een steen direct naast de stenen van de tegenstander spelen"
                },
                {
                    "en": "Physically moving a stone",
                    "es": "Mover físicamente una piedra",
                    "de": "Einen Stein physisch bewegen",
                    "nl": "Een steen fysiek verplaatsen"
                },
                {
                    "en": "Pressing the clock",
                    "es": "Presionar el reloj",
                    "de": "Die Uhr drücken",
                    "nl": "Op de klok drukken"
                },
                {
                    "en": "Removing a stone from the board",
                    "es": "Quitar una piedra del tablero",
                    "de": "Einen Stein vom Brett entfernen",
                    "nl": "Een steen van het bord halen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A push is a move played directly adjacent to an opponent's stone along a line, often continuing contact play.",
                "es": "Un empuje es un movimiento jugado directamente adyacente a una piedra del oponente a lo largo de una línea.",
                "de": "Ein Drücken ist ein Zug direkt neben einem gegnerischen Stein entlang einer Linie, oft als Kontaktspiel.",
                "nl": "Een duw is een zet direct naast een steen van de tegenstander langs een lijn, vaak als contactspel."
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
                    "en": "A diagonal move next to an opponent's stone",
                    "es": "Un movimiento diagonal junto a la piedra del oponente",
                    "de": "Ein diagonaler Zug neben einem gegnerischen Stein",
                    "nl": "Een diagonale zet naast een steen van de tegenstander"
                },
                {
                    "en": "A physical contact between players",
                    "es": "Un contacto físico entre jugadores",
                    "de": "Ein physischer Kontakt zwischen Spielern",
                    "nl": "Een fysiek contact tussen spelers"
                },
                {
                    "en": "A capture of three stones",
                    "es": "Una captura de tres piedras",
                    "de": "Ein Fangen von drei Steinen",
                    "nl": "Een vangst van drie stenen"
                },
                {
                    "en": "A move on the first line",
                    "es": "Un movimiento en la primera línea",
                    "de": "Ein Zug auf der ersten Linie",
                    "nl": "Een zet op de eerste lijn"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A shoulder hit is a diagonal contact move played next to an opponent's stone to reduce their influence or territory.",
                "es": "Un golpe de hombro es un movimiento de contacto diagonal junto a una piedra del oponente para reducir su influencia.",
                "de": "Ein Schulterschlag ist ein diagonaler Kontaktzug neben einem gegnerischen Stein, um dessen Einfluss zu verringern.",
                "nl": "Een schouderslag is een diagonale contactzet naast een steen van de tegenstander om diens invloed te verminderen."
            }
        },
        {
            "question": {
                "en": "What is the 'third line' in Go strategy?",
                "es": "¿Qué es la 'tercera línea' en la estrategia de Go?",
                "de": "Was ist die 'dritte Linie' in der Go-Strategie?",
                "nl": "Wat is de 'derde lijn' in Go-strategie?"
            },
            "options": [
                {
                    "en": "The line of territory, good for securing land",
                    "es": "La línea de territorio, buena para asegurar tierra",
                    "de": "Die Linie des Gebiets, gut zum Sichern von Land",
                    "nl": "De lijn van gebied, goed om land te beveiligen"
                },
                {
                    "en": "The third move of the game",
                    "es": "El tercer movimiento del juego",
                    "de": "Der dritte Zug des Spiels",
                    "nl": "De derde zet van het spel"
                },
                {
                    "en": "A row of three stones",
                    "es": "Una fila de tres piedras",
                    "de": "Eine Reihe von drei Steinen",
                    "nl": "Een rij van drie stenen"
                },
                {
                    "en": "The line for beginners only",
                    "es": "La línea solo para principiantes",
                    "de": "Die Linie nur für Anfänger",
                    "nl": "De lijn alleen voor beginners"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The third line from the edge is called the line of territory. Stones here are stable and good for securing territory.",
                "es": "La tercera línea desde el borde se llama la línea de territorio. Las piedras aquí son estables y buenas para asegurar territorio.",
                "de": "Die dritte Linie vom Rand wird die Linie des Gebiets genannt. Steine hier sind stabil und gut zum Sichern von Gebiet.",
                "nl": "De derde lijn vanaf de rand heet de lijn van gebied. Stenen hier zijn stabiel en goed om gebied te beveiligen."
            }
        },
        {
            "question": {
                "en": "What is the 'fourth line' in Go strategy?",
                "es": "¿Qué es la 'cuarta línea' en la estrategia de Go?",
                "de": "Was ist die 'vierte Linie' in der Go-Strategie?",
                "nl": "Wat is de 'vierde lijn' in Go-strategie?"
            },
            "options": [
                {
                    "en": "The line of influence, good for building power",
                    "es": "La línea de influencia, buena para construir poder",
                    "de": "Die Linie des Einflusses, gut zum Aufbau von Macht",
                    "nl": "De lijn van invloed, goed om kracht op te bouwen"
                },
                {
                    "en": "The best line for capturing",
                    "es": "La mejor línea para capturar",
                    "de": "Die beste Linie zum Fangen",
                    "nl": "De beste lijn om te vangen"
                },
                {
                    "en": "The fourth move of the game",
                    "es": "El cuarto movimiento del juego",
                    "de": "Der vierte Zug des Spiels",
                    "nl": "De vierde zet van het spel"
                },
                {
                    "en": "The weakest line on the board",
                    "es": "La línea más débil del tablero",
                    "de": "Die schwächste Linie auf dem Brett",
                    "nl": "De zwakste lijn op het bord"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The fourth line from the edge is called the line of influence. Stones here project power toward the center of the board.",
                "es": "La cuarta línea desde el borde se llama la línea de influencia. Las piedras aquí proyectan poder hacia el centro.",
                "de": "Die vierte Linie vom Rand wird die Linie des Einflusses genannt. Steine hier projizieren Kraft zur Mitte des Bretts.",
                "nl": "De vierde lijn vanaf de rand heet de lijn van invloed. Stenen hier projecteren kracht naar het midden van het bord."
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
                    "en": "Three stones forming an open triangle",
                    "es": "Tres piedras formando un triángulo abierto",
                    "de": "Drei Steine die ein offenes Dreieck bilden",
                    "nl": "Drie stenen die een open driehoek vormen"
                },
                {
                    "en": "A circle of stones",
                    "es": "Un círculo de piedras",
                    "de": "Ein Kreis aus Steinen",
                    "nl": "Een cirkel van stenen"
                },
                {
                    "en": "Five stones in a row",
                    "es": "Cinco piedras en fila",
                    "de": "Fünf Steine in einer Reihe",
                    "nl": "Vijf stenen op een rij"
                },
                {
                    "en": "Two stones side by side",
                    "es": "Dos piedras lado a lado",
                    "de": "Zwei Steine nebeneinander",
                    "nl": "Twee stenen naast elkaar"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A tiger's mouth is a three-stone shape forming an open triangle. It provides a strong connection that is hard to cut.",
                "es": "Una boca de tigre es una forma de tres piedras en triángulo abierto. Proporciona una conexión fuerte difícil de cortar.",
                "de": "Ein Tigermaul ist eine Drei-Steine-Form in offenem Dreieck. Es bietet eine starke Verbindung die schwer zu schneiden ist.",
                "nl": "Een tijgermuil is een drie-stenen-vorm in een open driehoek. Het biedt een sterke verbinding die moeilijk te snijden is."
            }
        },
        {
            "question": {
                "en": "What happens when both players pass in a row?",
                "es": "¿Qué pasa cuando ambos jugadores pasan seguidos?",
                "de": "Was passiert wenn beide Spieler nacheinander passen?",
                "nl": "Wat gebeurt er als beide spelers achtereenvolgens passen?"
            },
            "options": [
                {
                    "en": "The game ends and scoring begins",
                    "es": "El juego termina y comienza la puntuación",
                    "de": "Das Spiel endet und die Wertung beginnt",
                    "nl": "Het spel eindigt en het tellen begint"
                },
                {
                    "en": "The game restarts",
                    "es": "El juego se reinicia",
                    "de": "Das Spiel beginnt von vorne",
                    "nl": "Het spel begint opnieuw"
                },
                {
                    "en": "Both players get extra stones",
                    "es": "Ambos jugadores obtienen piedras extra",
                    "de": "Beide Spieler bekommen extra Steine",
                    "nl": "Beide spelers krijgen extra stenen"
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
                "en": "When both players pass consecutively, the game ends. Dead stones are removed and the territory is counted to determine the winner.",
                "es": "Cuando ambos jugadores pasan consecutivamente, el juego termina. Se retiran las piedras muertas y se cuenta el territorio.",
                "de": "Wenn beide Spieler nacheinander passen, endet das Spiel. Tote Steine werden entfernt und das Gebiet wird gezählt.",
                "nl": "Wanneer beide spelers achtereenvolgens passen, eindigt het spel. Dode stenen worden verwijderd en het gebied wordt geteld."
            }
        },
        {
            "question": {
                "en": "What is a 'monkey jump' in Go?",
                "es": "¿Qué es un 'salto de mono' en Go?",
                "de": "Was ist ein 'Affensprung' bei Go?",
                "nl": "Wat is een 'apensprong' bij Go?"
            },
            "options": [
                {
                    "en": "A slide along the first line to steal territory",
                    "es": "Un deslizamiento por la primera línea para robar territorio",
                    "de": "Ein Gleiten entlang der ersten Linie um Gebiet zu stehlen",
                    "nl": "Een glijbeweging langs de eerste lijn om gebied te stelen"
                },
                {
                    "en": "A large jump to the center",
                    "es": "Un gran salto al centro",
                    "de": "Ein großer Sprung zur Mitte",
                    "nl": "Een grote sprong naar het midden"
                },
                {
                    "en": "Jumping over opponent's stones",
                    "es": "Saltar sobre las piedras del oponente",
                    "de": "Über gegnerische Steine springen",
                    "nl": "Over stenen van de tegenstander springen"
                },
                {
                    "en": "A very fast move",
                    "es": "Un movimiento muy rápido",
                    "de": "Ein sehr schneller Zug",
                    "nl": "Een heel snelle zet"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A monkey jump is a specific endgame technique where you slide along the first line under the opponent's position to reduce territory.",
                "es": "Un salto de mono es una técnica de final donde deslizas por la primera línea bajo la posición del oponente para reducir territorio.",
                "de": "Ein Affensprung ist eine Endspieltechnik bei der man entlang der ersten Linie unter der Position des Gegners gleitet.",
                "nl": "Een apensprong is een eindspeeltechniek waarbij je langs de eerste lijn onder de positie van de tegenstander glijdt."
            }
        },
        {
            "question": {
                "en": "What is a 'pincer' in Go?",
                "es": "¿Qué es una 'pinza' en Go?",
                "de": "Was ist eine 'Zange' bei Go?",
                "nl": "Wat is een 'tang' bij Go?"
            },
            "options": [
                {
                    "en": "Attacking an approaching stone from both sides",
                    "es": "Atacar una piedra que se acerca desde ambos lados",
                    "de": "Einen sich nähernden Stein von beiden Seiten angreifen",
                    "nl": "Een naderende steen van beide kanten aanvallen"
                },
                {
                    "en": "Capturing with two stones",
                    "es": "Capturar con dos piedras",
                    "de": "Mit zwei Steinen fangen",
                    "nl": "Met twee stenen vangen"
                },
                {
                    "en": "A tool for placing stones",
                    "es": "Una herramienta para colocar piedras",
                    "de": "Ein Werkzeug zum Setzen von Steinen",
                    "nl": "Een hulpmiddel om stenen te plaatsen"
                },
                {
                    "en": "A type of ko fight",
                    "es": "Un tipo de pelea de ko",
                    "de": "Eine Art Ko-Kampf",
                    "nl": "Een soort ko-gevecht"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A pincer is a move that attacks an opponent's approach stone by playing on the opposite side, squeezing it between two stones.",
                "es": "Una pinza es un movimiento que ataca la piedra de acercamiento del oponente jugando del lado opuesto.",
                "de": "Eine Zange ist ein Zug der den Annäherungsstein des Gegners angreift, indem man auf der gegenüberliegenden Seite spielt.",
                "nl": "Een tang is een zet die de benaderingssteen van de tegenstander aanvalt door aan de andere kant te spelen."
            }
        },
        {
            "question": {
                "en": "What is a 'capturing race' in Go?",
                "es": "¿Qué es una 'carrera de capturas' en Go?",
                "de": "Was ist ein 'Fangwettlauf' bei Go?",
                "nl": "Wat is een 'vangrace' bij Go?"
            },
            "options": [
                {
                    "en": "When two groups race to capture each other first",
                    "es": "Cuando dos grupos compiten por capturarse primero",
                    "de": "Wenn zwei Gruppen darum kämpfen den anderen zuerst zu fangen",
                    "nl": "Wanneer twee groepen racen om elkaar eerst te vangen"
                },
                {
                    "en": "A speed chess-style Go game",
                    "es": "Un juego de Go estilo ajedrez rápido",
                    "de": "Ein Schnellschach-artiges Go-Spiel",
                    "nl": "Een snelschaak-achtig Go-spel"
                },
                {
                    "en": "Running to grab stones first",
                    "es": "Correr para agarrar piedras primero",
                    "de": "Rennen um Steine zuerst zu greifen",
                    "nl": "Rennen om stenen als eerste te pakken"
                },
                {
                    "en": "A race to fill the board first",
                    "es": "Una carrera para llenar el tablero primero",
                    "de": "Ein Rennen um das Brett zuerst zu füllen",
                    "nl": "Een race om het bord als eerste te vullen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A capturing race (semeai) occurs when two adjacent groups both lack eyes and compete to fill each other's liberties first.",
                "es": "Una carrera de capturas (semeai) ocurre cuando dos grupos adyacentes sin ojos compiten por llenar las libertades del otro.",
                "de": "Ein Fangwettlauf (Semeai) entsteht wenn zwei benachbarte Gruppen ohne Augen darum kämpfen, die Freiheiten des anderen zu füllen.",
                "nl": "Een vangrace (semeai) ontstaat wanneer twee aangrenzende groepen zonder ogen strijden om elkaars vrijheden te vullen."
            }
        },
        {
            "question": {
                "en": "What is a 'net' (geta) in Go?",
                "es": "¿Qué es una 'red' (geta) en Go?",
                "de": "Was ist ein 'Netz' (Geta) bei Go?",
                "nl": "Wat is een 'net' (geta) bij Go?"
            },
            "options": [
                {
                    "en": "A shape that traps stones without direct contact",
                    "es": "Una forma que atrapa piedras sin contacto directo",
                    "de": "Eine Form die Steine ohne direkten Kontakt fängt",
                    "nl": "Een vorm die stenen vangt zonder direct contact"
                },
                {
                    "en": "A fishing net used as a game timer",
                    "es": "Una red de pesca usada como temporizador",
                    "de": "Ein Fischernetz als Spieltimer",
                    "nl": "Een visnet als speltimer"
                },
                {
                    "en": "A net bag for storing stones",
                    "es": "Una bolsa de red para guardar piedras",
                    "de": "Ein Netzbeutel zum Aufbewahren von Steinen",
                    "nl": "Een netzak om stenen op te bergen"
                },
                {
                    "en": "A pattern of connected stones",
                    "es": "Un patrón de piedras conectadas",
                    "de": "Ein Muster verbundener Steine",
                    "nl": "Een patroon van verbonden stenen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A net (geta) is a technique where stones form a loose enclosure that prevents the opponent's stones from escaping, even without touching them.",
                "es": "Una red (geta) es una técnica donde piedras forman un cerco suelto que impide escapar a las piedras del oponente.",
                "de": "Ein Netz (Geta) ist eine Technik bei der Steine eine lose Umzäunung bilden, die gegnerische Steine am Entkommen hindert.",
                "nl": "Een net (geta) is een techniek waarbij stenen een losse omheining vormen die de stenen van de tegenstander beletten te ontsnappen."
            }
        },
        {
            "question": {
                "en": "What does 'tenuki' mean in Go?",
                "es": "¿Qué significa 'tenuki' en Go?",
                "de": "Was bedeutet 'Tenuki' bei Go?",
                "nl": "Wat betekent 'tenuki' bij Go?"
            },
            "options": [
                {
                    "en": "Playing elsewhere instead of responding locally",
                    "es": "Jugar en otro lugar en vez de responder localmente",
                    "de": "Anderswo spielen statt lokal zu antworten",
                    "nl": "Ergens anders spelen in plaats van lokaal te antwoorden"
                },
                {
                    "en": "Surrendering the game",
                    "es": "Rendirse en el juego",
                    "de": "Das Spiel aufgeben",
                    "nl": "Het spel opgeven"
                },
                {
                    "en": "Placing two stones at once",
                    "es": "Colocar dos piedras a la vez",
                    "de": "Zwei Steine gleichzeitig setzen",
                    "nl": "Twee stenen tegelijk plaatsen"
                },
                {
                    "en": "Taking back a move",
                    "es": "Retractarse de un movimiento",
                    "de": "Einen Zug zurücknehmen",
                    "nl": "Een zet terugnemen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Tenuki means ignoring the opponent's last move and playing in a different area of the board, prioritizing a bigger opportunity.",
                "es": "Tenuki significa ignorar la última jugada del oponente y jugar en otra zona del tablero, priorizando una oportunidad mayor.",
                "de": "Tenuki bedeutet den letzten Zug des Gegners zu ignorieren und in einem anderen Bereich zu spielen, um eine größere Chance zu nutzen.",
                "nl": "Tenuki betekent de laatste zet van de tegenstander negeren en elders op het bord spelen voor een grotere kans."
            }
        },
        {
            "question": {
                "en": "What is a 'ladder breaker' in Go?",
                "es": "¿Qué es un 'rompe-escalera' en Go?",
                "de": "Was ist ein 'Leiterbrecher' bei Go?",
                "nl": "Wat is een 'ladderbreker' bij Go?"
            },
            "options": [
                {
                    "en": "A stone that stops a ladder sequence from working",
                    "es": "Una piedra que impide que funcione una escalera",
                    "de": "Ein Stein der eine Leitersequenz stoppt",
                    "nl": "Een steen die een laddersequentie stopt"
                },
                {
                    "en": "A tool to break the board",
                    "es": "Una herramienta para romper el tablero",
                    "de": "Ein Werkzeug zum Zerbrechen des Bretts",
                    "nl": "Een hulpmiddel om het bord te breken"
                },
                {
                    "en": "A penalty for illegal moves",
                    "es": "Una penalización por movimientos ilegales",
                    "de": "Eine Strafe für illegale Züge",
                    "nl": "Een straf voor illegale zetten"
                },
                {
                    "en": "The last move of the game",
                    "es": "El último movimiento del juego",
                    "de": "Der letzte Zug des Spiels",
                    "nl": "De laatste zet van het spel"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A ladder breaker is a friendly stone positioned so that a ladder sequence will fail, allowing the chased stones to escape.",
                "es": "Un rompe-escalera es una piedra aliada posicionada para que una secuencia de escalera falle, permitiendo escapar a las piedras perseguidas.",
                "de": "Ein Leiterbrecher ist ein eigener Stein so positioniert, dass eine Leitersequenz scheitert und die verfolgten Steine entkommen.",
                "nl": "Een ladderbreker is een eigen steen zo geplaatst dat een laddersequentie mislukt, zodat de achtervolgde stenen ontsnappen."
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
                    "en": "Playing deep inside the opponent's area",
                    "es": "Jugar dentro del área del oponente",
                    "de": "Tief im Gebiet des Gegners spielen",
                    "nl": "Diep in het gebied van de tegenstander spelen"
                },
                {
                    "en": "Starting a new game",
                    "es": "Empezar un nuevo juego",
                    "de": "Ein neues Spiel beginnen",
                    "nl": "Een nieuw spel beginnen"
                },
                {
                    "en": "Filling all empty spaces",
                    "es": "Llenar todos los espacios vacíos",
                    "de": "Alle leeren Felder füllen",
                    "nl": "Alle lege ruimtes vullen"
                },
                {
                    "en": "Removing all your own stones",
                    "es": "Quitar todas tus piedras",
                    "de": "Alle eigenen Steine entfernen",
                    "nl": "Al je eigen stenen verwijderen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "An invasion is playing a stone deep within the opponent's framework or territory to reduce their potential score.",
                "es": "Una invasión es jugar una piedra dentro del marco o territorio del oponente para reducir su puntuación potencial.",
                "de": "Eine Invasion ist das Spielen eines Steins tief im Rahmen oder Gebiet des Gegners, um dessen Punktzahl zu verringern.",
                "nl": "Een invasie is een steen spelen diep in het raamwerk of gebied van de tegenstander om diens score te verminderen."
            }
        },
        {
            "question": {
                "en": "What is a 'reduction' in Go?",
                "es": "¿Qué es una 'reducción' en Go?",
                "de": "Was ist eine 'Reduktion' bei Go?",
                "nl": "Wat is een 'reductie' bij Go?"
            },
            "options": [
                {
                    "en": "Limiting the opponent's territory from outside",
                    "es": "Limitar el territorio del oponente desde fuera",
                    "de": "Das Gebiet des Gegners von außen begrenzen",
                    "nl": "Het gebied van de tegenstander van buitenaf beperken"
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
                    "de": "Das Brett kleiner machen",
                    "nl": "Het bord kleiner maken"
                },
                {
                    "en": "Reducing the time on the clock",
                    "es": "Reducir el tiempo del reloj",
                    "de": "Die Zeit auf der Uhr reduzieren",
                    "nl": "De tijd op de klok verminderen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A reduction limits the opponent's potential territory by playing moves nearby without fully invading, keeping your stones safer.",
                "es": "Una reducción limita el territorio potencial del oponente jugando movimientos cercanos sin invadir completamente.",
                "de": "Eine Reduktion begrenzt das potenzielle Gebiet des Gegners durch Züge in der Nähe, ohne vollständig einzudringen.",
                "nl": "Een reductie beperkt het potentieel gebied van de tegenstander door zetten in de buurt te spelen zonder volledig in te vallen."
            }
        },
        {
            "question": {
                "en": "What is a 'thickness' in Go?",
                "es": "¿Qué es 'grosor' en Go?",
                "de": "Was ist 'Dicke' bei Go?",
                "nl": "Wat is 'dikte' bij Go?"
            },
            "options": [
                {
                    "en": "A strong wall of stones with outward influence",
                    "es": "Un muro fuerte de piedras con influencia exterior",
                    "de": "Eine starke Steinmauer mit Einfluss nach außen",
                    "nl": "Een sterke muur van stenen met invloed naar buiten"
                },
                {
                    "en": "The width of the stones",
                    "es": "El ancho de las piedras",
                    "de": "Die Breite der Steine",
                    "nl": "De breedte van de stenen"
                },
                {
                    "en": "A type of board material",
                    "es": "Un tipo de material del tablero",
                    "de": "Eine Art Brettmaterial",
                    "nl": "Een soort bordmateriaal"
                },
                {
                    "en": "The number of layers of paint",
                    "es": "El número de capas de pintura",
                    "de": "Die Anzahl der Farbschichten",
                    "nl": "Het aantal verflagen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Thickness refers to a strong, solid group of stones that radiates influence outward. It is used to attack or build territory nearby.",
                "es": "El grosor se refiere a un grupo fuerte y sólido de piedras que irradia influencia hacia afuera, útil para atacar o construir territorio.",
                "de": "Dicke bezeichnet eine starke, solide Steingruppe die Einfluss nach außen ausstrahlt, nützlich zum Angreifen oder Gebietsaufbau.",
                "nl": "Dikte verwijst naar een sterke, solide groep stenen die invloed naar buiten uitstraalt, nuttig om aan te vallen of gebied op te bouwen."
            }
        },
        {
            "question": {
                "en": "What is a 'probe' in Go?",
                "es": "¿Qué es una 'sonda' en Go?",
                "de": "Was ist eine 'Sonde' bei Go?",
                "nl": "Wat is een 'sonde' bij Go?"
            },
            "options": [
                {
                    "en": "A move to test the opponent's intentions",
                    "es": "Un movimiento para probar las intenciones del oponente",
                    "de": "Ein Zug um die Absichten des Gegners zu testen",
                    "nl": "Een zet om de bedoelingen van de tegenstander te testen"
                },
                {
                    "en": "A tool for measuring the board",
                    "es": "Una herramienta para medir el tablero",
                    "de": "Ein Werkzeug zum Messen des Bretts",
                    "nl": "Een hulpmiddel om het bord te meten"
                },
                {
                    "en": "A special type of stone",
                    "es": "Un tipo especial de piedra",
                    "de": "Eine spezielle Art von Stein",
                    "nl": "Een speciaal soort steen"
                },
                {
                    "en": "Checking the time remaining",
                    "es": "Verificar el tiempo restante",
                    "de": "Die verbleibende Zeit prüfen",
                    "nl": "De resterende tijd controleren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A probe is a move played to see how the opponent responds, revealing information about their plans before committing.",
                "es": "Una sonda es un movimiento para ver cómo responde el oponente, revelando información sobre sus planes.",
                "de": "Eine Sonde ist ein Zug um zu sehen wie der Gegner reagiert, um Informationen über dessen Pläne zu erhalten.",
                "nl": "Een sonde is een zet om te zien hoe de tegenstander reageert, om informatie over diens plannen te onthullen."
            }
        },
        {
            "question": {
                "en": "What is an 'approach move' in Go?",
                "es": "¿Qué es un 'movimiento de acercamiento' en Go?",
                "de": "Was ist ein 'Annäherungszug' bei Go?",
                "nl": "Wat is een 'benaderingszet' bij Go?"
            },
            "options": [
                {
                    "en": "A move played near the opponent's corner stone",
                    "es": "Un movimiento cerca de la piedra de esquina del oponente",
                    "de": "Ein Zug nahe dem Eckstein des Gegners",
                    "nl": "Een zet dicht bij de hoeksteen van de tegenstander"
                },
                {
                    "en": "Walking toward the Go board",
                    "es": "Caminar hacia el tablero de Go",
                    "de": "Zum Go-Brett hingehen",
                    "nl": "Naar het Go-bord lopen"
                },
                {
                    "en": "The first move of any game",
                    "es": "El primer movimiento de cualquier juego",
                    "de": "Der erste Zug eines Spiels",
                    "nl": "De eerste zet van elk spel"
                },
                {
                    "en": "Moving stones closer together",
                    "es": "Mover piedras más juntas",
                    "de": "Steine näher zusammen bewegen",
                    "nl": "Stenen dichter bij elkaar brengen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "An approach move is played near an opponent's corner stone to contest the corner or develop your own position nearby.",
                "es": "Un movimiento de acercamiento se juega cerca de la piedra de esquina del oponente para disputar la esquina o desarrollar posición.",
                "de": "Ein Annäherungszug wird nahe dem Eckstein des Gegners gespielt, um die Ecke zu bestreiten oder eigene Position aufzubauen.",
                "nl": "Een benaderingszet wordt dicht bij de hoeksteen van de tegenstander gespeeld om de hoek te betwisten of eigen positie op te bouwen."
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
                    "en": "Threatening to capture two groups at the same time",
                    "es": "Amenazar con capturar dos grupos al mismo tiempo",
                    "de": "Zwei Gruppen gleichzeitig mit Fangen bedrohen",
                    "nl": "Twee groepen tegelijk dreigen te vangen"
                },
                {
                    "en": "Placing two stones at once",
                    "es": "Colocar dos piedras a la vez",
                    "de": "Zwei Steine gleichzeitig setzen",
                    "nl": "Twee stenen tegelijk plaatsen"
                },
                {
                    "en": "Capturing two stones in one move",
                    "es": "Capturar dos piedras en un movimiento",
                    "de": "Zwei Steine in einem Zug fangen",
                    "nl": "Twee stenen in één zet vangen"
                },
                {
                    "en": "Saying 'atari' twice",
                    "es": "Decir 'atari' dos veces",
                    "de": "'Atari' zweimal sagen",
                    "nl": "'Atari' twee keer zeggen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A double atari threatens two separate groups with capture simultaneously. The opponent can only save one, losing the other.",
                "es": "Un doble atari amenaza dos grupos separados con captura simultáneamente. El oponente solo puede salvar uno.",
                "de": "Ein Doppel-Atari bedroht zwei separate Gruppen gleichzeitig mit Fangen. Der Gegner kann nur eine retten.",
                "nl": "Een dubbel atari bedreigt twee aparte groepen tegelijk met vangst. De tegenstander kan er maar één redden."
            }
        },
        {
            "question": {
                "en": "What does 'sente' mean in Go?",
                "es": "¿Qué significa 'sente' en Go?",
                "de": "Was bedeutet 'Sente' bei Go?",
                "nl": "Wat betekent 'sente' bij Go?"
            },
            "options": [
                {
                    "en": "Having the initiative to dictate play",
                    "es": "Tener la iniciativa para dictar el juego",
                    "de": "Die Initiative haben um das Spiel zu bestimmen",
                    "nl": "Het initiatief hebben om het spel te bepalen"
                },
                {
                    "en": "Losing the game",
                    "es": "Perder el juego",
                    "de": "Das Spiel verlieren",
                    "nl": "Het spel verliezen"
                },
                {
                    "en": "A type of stone shape",
                    "es": "Un tipo de forma de piedra",
                    "de": "Eine Art Steinform",
                    "nl": "Een soort steenvorm"
                },
                {
                    "en": "The center of the board",
                    "es": "El centro del tablero",
                    "de": "Die Mitte des Bretts",
                    "nl": "Het midden van het bord"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Sente means having the initiative. A sente move forces the opponent to respond, letting you keep control of the flow of play.",
                "es": "Sente significa tener la iniciativa. Un movimiento sente obliga al oponente a responder, manteniendo el control del juego.",
                "de": "Sente bedeutet die Initiative zu haben. Ein Sente-Zug zwingt den Gegner zu antworten und behält die Kontrolle.",
                "nl": "Sente betekent het initiatief hebben. Een sente-zet dwingt de tegenstander te antwoorden, zodat je de controle houdt."
            }
        },
        {
            "question": {
                "en": "What does 'gote' mean in Go?",
                "es": "¿Qué significa 'gote' en Go?",
                "de": "Was bedeutet 'Gote' bei Go?",
                "nl": "Wat betekent 'gote' bij Go?"
            },
            "options": [
                {
                    "en": "Losing the initiative to the opponent",
                    "es": "Perder la iniciativa ante el oponente",
                    "de": "Die Initiative an den Gegner verlieren",
                    "nl": "Het initiatief aan de tegenstander verliezen"
                },
                {
                    "en": "Winning the game",
                    "es": "Ganar el juego",
                    "de": "Das Spiel gewinnen",
                    "nl": "Het spel winnen"
                },
                {
                    "en": "A type of capture",
                    "es": "Un tipo de captura",
                    "de": "Eine Art Fang",
                    "nl": "Een soort vangst"
                },
                {
                    "en": "A corner position",
                    "es": "Una posición de esquina",
                    "de": "Eine Eckposition",
                    "nl": "Een hoekpositie"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Gote means losing the initiative. After a gote move, the opponent gets to play first elsewhere, controlling the pace of the game.",
                "es": "Gote significa perder la iniciativa. Después de un movimiento gote, el oponente juega primero en otro lugar.",
                "de": "Gote bedeutet die Initiative zu verlieren. Nach einem Gote-Zug kann der Gegner zuerst anderswo spielen.",
                "nl": "Gote betekent het initiatief verliezen. Na een gote-zet mag de tegenstander eerst elders spelen."
            }
        },
        {
            "question": {
                "en": "What is a 'bamboo joint' in Go?",
                "es": "¿Qué es una 'junta de bambú' en Go?",
                "de": "Was ist eine 'Bambusverbindung' bei Go?",
                "nl": "Wat is een 'bamboeverbinding' bij Go?"
            },
            "options": [
                {
                    "en": "Two pairs of stones forming an unbreakable link",
                    "es": "Dos pares de piedras formando un enlace inquebrantable",
                    "de": "Zwei Steinpaare die eine untrennbare Verbindung bilden",
                    "nl": "Twee paren stenen die een onbreekbare verbinding vormen"
                },
                {
                    "en": "A board made from bamboo",
                    "es": "Un tablero hecho de bambú",
                    "de": "Ein Brett aus Bambus",
                    "nl": "Een bord gemaakt van bamboe"
                },
                {
                    "en": "A single stone in the corner",
                    "es": "Una sola piedra en la esquina",
                    "de": "Ein einzelner Stein in der Ecke",
                    "nl": "Een enkele steen in de hoek"
                },
                {
                    "en": "Three stones in a straight line",
                    "es": "Tres piedras en línea recta",
                    "de": "Drei Steine in einer geraden Linie",
                    "nl": "Drie stenen op een rechte lijn"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A bamboo joint is a shape of two pairs of stones arranged so the connection between them cannot be cut by the opponent.",
                "es": "Una junta de bambú es una forma de dos pares de piedras dispuestos para que la conexión no pueda ser cortada.",
                "de": "Eine Bambusverbindung besteht aus zwei Steinpaaren, deren Verbindung vom Gegner nicht getrennt werden kann.",
                "nl": "Een bamboeverbinding is een vorm van twee paren stenen waarvan de verbinding niet door de tegenstander gesneden kan worden."
            }
        },
        {
            "question": {
                "en": "What is 'aji' in Go?",
                "es": "¿Qué es 'aji' en Go?",
                "de": "Was ist 'Aji' bei Go?",
                "nl": "Wat is 'aji' bij Go?"
            },
            "options": [
                {
                    "en": "Hidden potential or latent possibilities in a position",
                    "es": "Potencial oculto o posibilidades latentes en una posición",
                    "de": "Verstecktes Potenzial oder latente Möglichkeiten",
                    "nl": "Verborgen potentieel of latente mogelijkheden"
                },
                {
                    "en": "A seasoning for food",
                    "es": "Un condimento para comida",
                    "de": "Ein Gewürz für Essen",
                    "nl": "Een kruiden voor eten"
                },
                {
                    "en": "A player's ranking",
                    "es": "La clasificación de un jugador",
                    "de": "Die Rangliste eines Spielers",
                    "nl": "De ranglijst van een speler"
                },
                {
                    "en": "The color of the stones",
                    "es": "El color de las piedras",
                    "de": "Die Farbe der Steine",
                    "nl": "De kleur van de stenen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Aji refers to latent threats or potential that remain in a position even after a sequence has been played. Good players leave aji for later use.",
                "es": "Aji se refiere a amenazas latentes o potencial que quedan en una posición. Los buenos jugadores dejan aji para uso futuro.",
                "de": "Aji bezeichnet latente Drohungen oder Potenzial in einer Position. Gute Spieler bewahren Aji für späteren Gebrauch.",
                "nl": "Aji verwijst naar latente dreigingen of potentieel in een positie. Goede spelers bewaren aji voor later gebruik."
            }
        },
        {
            "question": {
                "en": "What is a 'kosumi' in Go?",
                "es": "¿Qué es un 'kosumi' en Go?",
                "de": "Was ist ein 'Kosumi' bei Go?",
                "nl": "Wat is een 'kosumi' bij Go?"
            },
            "options": [
                {
                    "en": "A diagonal move from one of your own stones",
                    "es": "Un movimiento diagonal desde una de tus piedras",
                    "de": "Ein diagonaler Zug von einem eigenen Stein",
                    "nl": "Een diagonale zet vanaf een eigen steen"
                },
                {
                    "en": "A straight line of three stones",
                    "es": "Una línea recta de tres piedras",
                    "de": "Eine gerade Linie von drei Steinen",
                    "nl": "Een rechte lijn van drie stenen"
                },
                {
                    "en": "A move on the star point",
                    "es": "Un movimiento en el punto estrella",
                    "de": "Ein Zug auf dem Sternpunkt",
                    "nl": "Een zet op het sterpunt"
                },
                {
                    "en": "Capturing a single stone",
                    "es": "Capturar una sola piedra",
                    "de": "Einen einzelnen Stein fangen",
                    "nl": "Een enkele steen vangen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A kosumi is a diagonal move played one intersection diagonally from one of your own stones. It is a flexible connecting move.",
                "es": "Un kosumi es un movimiento diagonal jugado a una intersección diagonal de una de tus propias piedras. Es flexible y conecta.",
                "de": "Ein Kosumi ist ein diagonaler Zug eine Kreuzung diagonal von einem eigenen Stein entfernt. Es ist ein flexibler Verbindungszug.",
                "nl": "Een kosumi is een diagonale zet op één kruispunt diagonaal van een eigen steen. Het is een flexibele verbindingszet."
            }
        },
        {
            "question": {
                "en": "What is a 'keima' in Go?",
                "es": "¿Qué es un 'keima' en Go?",
                "de": "Was ist ein 'Keima' bei Go?",
                "nl": "Wat is een 'keima' bij Go?"
            },
            "options": [
                {
                    "en": "A knight's move shape like in chess",
                    "es": "Una forma de movimiento de caballo como en ajedrez",
                    "de": "Eine Springerzug-Form wie im Schach",
                    "nl": "Een paardsprongvorm zoals bij schaken"
                },
                {
                    "en": "A capturing move",
                    "es": "Un movimiento de captura",
                    "de": "Ein Fangzug",
                    "nl": "Een vangzet"
                },
                {
                    "en": "A move on the edge",
                    "es": "Un movimiento en el borde",
                    "de": "Ein Zug am Rand",
                    "nl": "Een zet aan de rand"
                },
                {
                    "en": "A pass",
                    "es": "Un pase",
                    "de": "Ein Pass",
                    "nl": "Een pas"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A keima is a knight's move, going one space in one direction and one diagonally, similar to a chess knight. It is a common connecting move.",
                "es": "Un keima es un movimiento de caballo, un espacio en una dirección y uno diagonal, similar al caballo de ajedrez.",
                "de": "Ein Keima ist ein Springerzug, ein Feld in eine Richtung und eines diagonal, ähnlich dem Schachspringer.",
                "nl": "Een keima is een paardsprong, één veld in één richting en één diagonaal, vergelijkbaar met het schaakpaard."
            }
        },
        {
            "question": {
                "en": "What is 'dame' in Go?",
                "es": "¿Qué es 'dame' en Go?",
                "de": "Was ist 'Dame' bei Go?",
                "nl": "Wat is 'dame' bij Go?"
            },
            "options": [
                {
                    "en": "A neutral point that belongs to neither player",
                    "es": "Un punto neutral que no pertenece a ningún jugador",
                    "de": "Ein neutraler Punkt der keinem Spieler gehört",
                    "nl": "Een neutraal punt dat van geen enkele speler is"
                },
                {
                    "en": "A queen piece like in chess",
                    "es": "Una pieza reina como en ajedrez",
                    "de": "Eine Königin wie im Schach",
                    "nl": "Een koningin zoals bij schaken"
                },
                {
                    "en": "A female Go player",
                    "es": "Una jugadora de Go femenina",
                    "de": "Eine weibliche Go-Spielerin",
                    "nl": "Een vrouwelijke Go-speler"
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
                "en": "Dame are neutral points on the board that do not count as territory for either player. They are filled at the end of the game.",
                "es": "Dame son puntos neutrales en el tablero que no cuentan como territorio para ningún jugador. Se llenan al final del juego.",
                "de": "Dame sind neutrale Punkte auf dem Brett die für keinen Spieler als Gebiet zählen. Sie werden am Ende des Spiels gefüllt.",
                "nl": "Dame zijn neutrale punten op het bord die niet als gebied tellen voor een speler. Ze worden aan het einde van het spel gevuld."
            }
        },
        {
            "question": {
                "en": "What is a 'cross-cut' in Go?",
                "es": "¿Qué es un 'corte cruzado' en Go?",
                "de": "Was ist ein 'Kreuzschnitt' bei Go?",
                "nl": "Wat is een 'kruissnede' bij Go?"
            },
            "options": [
                {
                    "en": "Two opposing stones placed diagonally creating an X",
                    "es": "Dos piedras opuestas colocadas en diagonal creando una X",
                    "de": "Zwei gegnerische Steine diagonal als X platziert",
                    "nl": "Twee tegengestelde stenen diagonaal geplaatst als een X"
                },
                {
                    "en": "Cutting the board in half",
                    "es": "Cortar el tablero por la mitad",
                    "de": "Das Brett in zwei Hälften schneiden",
                    "nl": "Het bord doormidden snijden"
                },
                {
                    "en": "A move across the center line",
                    "es": "Un movimiento a través de la línea central",
                    "de": "Ein Zug über die Mittellinie",
                    "nl": "Een zet over de middenlijn"
                },
                {
                    "en": "Removing four stones at once",
                    "es": "Quitar cuatro piedras a la vez",
                    "de": "Vier Steine auf einmal entfernen",
                    "nl": "Vier stenen tegelijk verwijderen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A cross-cut occurs when both players have adjacent diagonal stones forming an X pattern. It leads to complex fighting situations.",
                "es": "Un corte cruzado ocurre cuando ambos jugadores tienen piedras diagonales adyacentes formando una X. Lleva a situaciones complejas.",
                "de": "Ein Kreuzschnitt entsteht wenn beide Spieler benachbarte diagonale Steine in X-Form haben. Es führt zu komplexem Kampf.",
                "nl": "Een kruissnede ontstaat wanneer beide spelers aangrenzende diagonale stenen in X-vorm hebben. Het leidt tot complex gevecht."
            }
        },
        {
            "question": {
                "en": "What is a 'peep' in Go?",
                "es": "¿Qué es un 'espía' en Go?",
                "de": "Was ist ein 'Peep' bei Go?",
                "nl": "Wat is een 'peep' bij Go?"
            },
            "options": [
                {
                    "en": "A move threatening to cut a connection",
                    "es": "Un movimiento que amenaza cortar una conexión",
                    "de": "Ein Zug der droht eine Verbindung zu schneiden",
                    "nl": "Een zet die dreigt een verbinding te snijden"
                },
                {
                    "en": "Looking at the opponent's stones",
                    "es": "Mirar las piedras del oponente",
                    "de": "Die Steine des Gegners betrachten",
                    "nl": "Naar de stenen van de tegenstander kijken"
                },
                {
                    "en": "A very small move",
                    "es": "Un movimiento muy pequeño",
                    "de": "Ein sehr kleiner Zug",
                    "nl": "Een hele kleine zet"
                },
                {
                    "en": "The sound a stone makes",
                    "es": "El sonido que hace una piedra",
                    "de": "Das Geräusch das ein Stein macht",
                    "nl": "Het geluid dat een steen maakt"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A peep is a move that threatens to cut between two opponent stones that are only diagonally connected, forcing a defensive response.",
                "es": "Un espía es un movimiento que amenaza cortar entre dos piedras del oponente conectadas diagonalmente, forzando una defensa.",
                "de": "Ein Peep ist ein Zug der droht zwischen zwei diagonal verbundene gegnerische Steine zu schneiden und eine Verteidigung erzwingt.",
                "nl": "Een peep is een zet die dreigt te snijden tussen twee diagonaal verbonden stenen van de tegenstander."
            }
        },
        {
            "question": {
                "en": "What is a 'squeeze' in Go?",
                "es": "¿Qué es un 'apretón' en Go?",
                "de": "Was ist ein 'Squeeze' bei Go?",
                "nl": "Wat is een 'squeeze' bij Go?"
            },
            "options": [
                {
                    "en": "A technique to sacrifice stones and gain advantage",
                    "es": "Una técnica de sacrificar piedras para ganar ventaja",
                    "de": "Eine Technik Steine zu opfern um Vorteil zu gewinnen",
                    "nl": "Een techniek om stenen op te offeren voor voordeel"
                },
                {
                    "en": "Pressing stones together physically",
                    "es": "Presionar piedras juntas físicamente",
                    "de": "Steine physisch zusammendrücken",
                    "nl": "Stenen fysiek samendrukken"
                },
                {
                    "en": "Playing very fast",
                    "es": "Jugar muy rápido",
                    "de": "Sehr schnell spielen",
                    "nl": "Heel snel spelen"
                },
                {
                    "en": "Reducing the board size",
                    "es": "Reducir el tamaño del tablero",
                    "de": "Die Brettgröße reduzieren",
                    "nl": "De bordgrootte verkleinen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A squeeze is a technique where you sacrifice stones that the opponent captures, then use the resulting shape to gain a positional advantage.",
                "es": "Un apretón es una técnica donde sacrificas piedras que el oponente captura, luego usas la forma resultante para ganar ventaja.",
                "de": "Ein Squeeze ist eine Technik bei der man Steine opfert die der Gegner fängt, um dann die resultierende Form zum Vorteil zu nutzen.",
                "nl": "Een squeeze is een techniek waarbij je stenen opoffert die de tegenstander vangt, om de resulterende vorm als voordeel te gebruiken."
            }
        },
        {
            "question": {
                "en": "How many handicap stones can be placed in Go?",
                "es": "¿Cuántas piedras de handicap se pueden colocar en Go?",
                "de": "Wie viele Vorgabesteine können bei Go gesetzt werden?",
                "nl": "Hoeveel handicapstenen kunnen bij Go geplaatst worden?"
            },
            "options": [
                {
                    "en": "Up to 9 on a standard 19x19 board",
                    "es": "Hasta 9 en un tablero estándar 19x19",
                    "de": "Bis zu 9 auf einem Standard 19x19 Brett",
                    "nl": "Tot 9 op een standaard 19x19 bord"
                },
                {
                    "en": "Exactly 5",
                    "es": "Exactamente 5",
                    "de": "Genau 5",
                    "nl": "Precies 5"
                },
                {
                    "en": "Only 1",
                    "es": "Solo 1",
                    "de": "Nur 1",
                    "nl": "Slechts 1"
                },
                {
                    "en": "Up to 50",
                    "es": "Hasta 50",
                    "de": "Bis zu 50",
                    "nl": "Tot 50"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "On a standard 19x19 board, up to 9 handicap stones can be placed on the star points to balance the difference between players.",
                "es": "En un tablero 19x19 estándar, se pueden colocar hasta 9 piedras de handicap en los puntos estrella para equilibrar la diferencia.",
                "de": "Auf einem 19x19 Brett können bis zu 9 Vorgabesteine auf den Sternpunkten gesetzt werden um den Unterschied auszugleichen.",
                "nl": "Op een 19x19 bord kunnen tot 9 handicapstenen op de sterpunten geplaatst worden om het verschil te compenseren."
            }
        },
        {
            "question": {
                "en": "What is a 'big point' in Go?",
                "es": "¿Qué es un 'punto grande' en Go?",
                "de": "Was ist ein 'großer Punkt' bei Go?",
                "nl": "Wat is een 'groot punt' bij Go?"
            },
            "options": [
                {
                    "en": "An important open area worth many points",
                    "es": "Un área abierta importante que vale muchos puntos",
                    "de": "Ein wichtiger offener Bereich der viele Punkte wert ist",
                    "nl": "Een belangrijk open gebied dat veel punten waard is"
                },
                {
                    "en": "A large stone",
                    "es": "Una piedra grande",
                    "de": "Ein großer Stein",
                    "nl": "Een grote steen"
                },
                {
                    "en": "The center intersection",
                    "es": "La intersección central",
                    "de": "Die zentrale Kreuzung",
                    "nl": "Het centrale kruispunt"
                },
                {
                    "en": "A high score",
                    "es": "Una puntuación alta",
                    "de": "Eine hohe Punktzahl",
                    "nl": "Een hoge score"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A big point is a strategically important area of the board where playing first can secure a significant amount of territory or influence.",
                "es": "Un punto grande es un área estratégicamente importante donde jugar primero puede asegurar mucho territorio o influencia.",
                "de": "Ein großer Punkt ist ein strategisch wichtiger Bereich wo das erste Spielen viel Gebiet oder Einfluss sichern kann.",
                "nl": "Een groot punt is een strategisch belangrijk gebied waar als eerste spelen veel gebied of invloed kan opleveren."
            }
        },
        {
            "question": {
                "en": "What is a 'false eye' in Go?",
                "es": "¿Qué es un 'ojo falso' en Go?",
                "de": "Was ist ein 'falsches Auge' bei Go?",
                "nl": "Wat is een 'vals oog' bij Go?"
            },
            "options": [
                {
                    "en": "A space that looks like an eye but can be filled",
                    "es": "Un espacio que parece un ojo pero puede llenarse",
                    "de": "Ein Raum der wie ein Auge aussieht aber gefüllt werden kann",
                    "nl": "Een ruimte die op een oog lijkt maar gevuld kan worden"
                },
                {
                    "en": "An eye made with captured stones",
                    "es": "Un ojo hecho con piedras capturadas",
                    "de": "Ein Auge aus gefangenen Steinen",
                    "nl": "Een oog gemaakt met gevangen stenen"
                },
                {
                    "en": "An eye on the edge of the board",
                    "es": "Un ojo en el borde del tablero",
                    "de": "Ein Auge am Rand des Bretts",
                    "nl": "Een oog aan de rand van het bord"
                },
                {
                    "en": "A very large eye",
                    "es": "Un ojo muy grande",
                    "de": "Ein sehr großes Auge",
                    "nl": "Een heel groot oog"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A false eye looks like an eye but has a weakness that allows the opponent to fill it. Groups with only false eyes are not alive.",
                "es": "Un ojo falso parece un ojo pero tiene una debilidad que permite al oponente llenarlo. Los grupos con solo ojos falsos no están vivos.",
                "de": "Ein falsches Auge sieht wie ein Auge aus, hat aber eine Schwäche. Gruppen mit nur falschen Augen sind nicht lebendig.",
                "nl": "Een vals oog lijkt op een oog maar heeft een zwakte waardoor de tegenstander het kan vullen. Groepen met alleen valse ogen leven niet."
            }
        },
        {
            "question": {
                "en": "What is 'miai' in Go?",
                "es": "¿Qué es 'miai' en Go?",
                "de": "Was ist 'Miai' bei Go?",
                "nl": "Wat is 'miai' bij Go?"
            },
            "options": [
                {
                    "en": "Two equally good moves where getting one is enough",
                    "es": "Dos movimientos igualmente buenos donde obtener uno basta",
                    "de": "Zwei gleich gute Züge wobei einer ausreicht",
                    "nl": "Twee even goede zetten waarvan er één genoeg is"
                },
                {
                    "en": "A Japanese greeting before the game",
                    "es": "Un saludo japonés antes del juego",
                    "de": "Eine japanische Begrüßung vor dem Spiel",
                    "nl": "Een Japanse begroeting voor het spel"
                },
                {
                    "en": "A type of stone material",
                    "es": "Un tipo de material de piedra",
                    "de": "Eine Art Steinmaterial",
                    "nl": "Een soort steenmateriaal"
                },
                {
                    "en": "The final score",
                    "es": "La puntuación final",
                    "de": "Die Endpunktzahl",
                    "nl": "De eindscore"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Miai refers to two points of equal value where if one player takes one, the other player takes the other, resulting in an even exchange.",
                "es": "Miai se refiere a dos puntos de igual valor donde si un jugador toma uno, el otro toma el otro, resultando en un intercambio igual.",
                "de": "Miai bezieht sich auf zwei gleichwertige Punkte. Nimmt ein Spieler einen, nimmt der andere den zweiten, was ein ausgeglichener Tausch ist.",
                "nl": "Miai verwijst naar twee even waardevolle punten. Als één speler er één neemt, neemt de ander de andere, wat een gelijke ruil oplevert."
            }
        },
        {
            "question": {
                "en": "What is a 'ko threat' in Go?",
                "es": "¿Qué es una 'amenaza de ko' en Go?",
                "de": "Was ist eine 'Ko-Drohung' bei Go?",
                "nl": "Wat is een 'ko-dreiging' bij Go?"
            },
            "options": [
                {
                    "en": "A move played elsewhere to force a response before retaking ko",
                    "es": "Un movimiento en otro lugar para forzar respuesta antes de retomar el ko",
                    "de": "Ein Zug anderswo um eine Antwort zu erzwingen bevor man Ko zurücknimmt",
                    "nl": "Een zet elders om een antwoord af te dwingen voor het hernemen van ko"
                },
                {
                    "en": "A verbal threat to the opponent",
                    "es": "Una amenaza verbal al oponente",
                    "de": "Eine verbale Drohung an den Gegner",
                    "nl": "Een verbale dreiging aan de tegenstander"
                },
                {
                    "en": "A bluff move",
                    "es": "Un movimiento de engaño",
                    "de": "Ein Bluffzug",
                    "nl": "Een blufzet"
                },
                {
                    "en": "Threatening to quit the game",
                    "es": "Amenazar con dejar el juego",
                    "de": "Drohen das Spiel zu beenden",
                    "nl": "Dreigen het spel te stoppen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A ko threat is a move played elsewhere that the opponent must answer, allowing you to retake the ko on your next turn.",
                "es": "Una amenaza de ko es un movimiento en otro lugar que el oponente debe responder, permitiéndote retomar el ko en tu siguiente turno.",
                "de": "Eine Ko-Drohung ist ein Zug anderswo den der Gegner beantworten muss, sodass man das Ko im nächsten Zug zurücknehmen kann.",
                "nl": "Een ko-dreiging is een zet elders die de tegenstander moet beantwoorden, zodat je de ko in je volgende beurt kunt hernemen."
            }
        },
        {
            "question": {
                "en": "What is a 'trade' in Go?",
                "es": "¿Qué es un 'intercambio' en Go?",
                "de": "Was ist ein 'Tausch' bei Go?",
                "nl": "Wat is een 'ruil' bij Go?"
            },
            "options": [
                {
                    "en": "Exchanging territory in one area for territory elsewhere",
                    "es": "Intercambiar territorio en un área por territorio en otro lugar",
                    "de": "Gebiet in einem Bereich gegen Gebiet anderswo tauschen",
                    "nl": "Gebied in het ene deel ruilen voor gebied elders"
                },
                {
                    "en": "Swapping stones with the opponent",
                    "es": "Intercambiar piedras con el oponente",
                    "de": "Steine mit dem Gegner tauschen",
                    "nl": "Stenen ruilen met de tegenstander"
                },
                {
                    "en": "Trading players mid-game",
                    "es": "Intercambiar jugadores a mitad del juego",
                    "de": "Spieler mitten im Spiel tauschen",
                    "nl": "Spelers halverwege het spel ruilen"
                },
                {
                    "en": "Buying Go equipment",
                    "es": "Comprar equipo de Go",
                    "de": "Go-Ausrüstung kaufen",
                    "nl": "Go-uitrusting kopen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A trade in Go is when both players exchange advantages, such as giving up territory in one area to gain territory or influence in another.",
                "es": "Un intercambio en Go es cuando ambos jugadores intercambian ventajas, como ceder territorio en un área para ganar en otra.",
                "de": "Ein Tausch bei Go ist wenn beide Spieler Vorteile tauschen, etwa Gebiet aufgeben um anderswo Gebiet oder Einfluss zu gewinnen.",
                "nl": "Een ruil bij Go is wanneer beide spelers voordelen uitwisselen, zoals gebied opgeven om elders gebied of invloed te winnen."
            }
        },
        {
            "question": {
                "en": "What is 'shape' in Go?",
                "es": "¿Qué es 'forma' en Go?",
                "de": "Was ist 'Form' bei Go?",
                "nl": "Wat is 'vorm' bij Go?"
            },
            "options": [
                {
                    "en": "The arrangement of stones for efficiency and strength",
                    "es": "La disposición de piedras para eficiencia y fuerza",
                    "de": "Die Anordnung von Steinen für Effizienz und Stärke",
                    "nl": "De opstelling van stenen voor efficiëntie en sterkte"
                },
                {
                    "en": "The physical shape of the stones",
                    "es": "La forma física de las piedras",
                    "de": "Die physische Form der Steine",
                    "nl": "De fysieke vorm van de stenen"
                },
                {
                    "en": "The shape of the board",
                    "es": "La forma del tablero",
                    "de": "Die Form des Bretts",
                    "nl": "De vorm van het bord"
                },
                {
                    "en": "A player's posture",
                    "es": "La postura del jugador",
                    "de": "Die Haltung des Spielers",
                    "nl": "De houding van de speler"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Shape refers to how stones are arranged on the board. Good shape means efficient, strong positions. Bad shape wastes moves.",
                "es": "Forma se refiere a cómo están dispuestas las piedras en el tablero. Buena forma significa posiciones eficientes y fuertes.",
                "de": "Form bezieht sich auf die Anordnung der Steine auf dem Brett. Gute Form bedeutet effiziente, starke Positionen.",
                "nl": "Vorm verwijst naar hoe stenen op het bord zijn opgesteld. Goede vorm betekent efficiënte, sterke posities."
            }
        },
        {
            "question": {
                "en": "What is the 'empty triangle' in Go?",
                "es": "¿Qué es el 'triángulo vacío' en Go?",
                "de": "Was ist das 'leere Dreieck' bei Go?",
                "nl": "Wat is de 'lege driehoek' bij Go?"
            },
            "options": [
                {
                    "en": "A bad shape that wastes a move",
                    "es": "Una mala forma que desperdicia un movimiento",
                    "de": "Eine schlechte Form die einen Zug verschwendet",
                    "nl": "Een slechte vorm die een zet verspilt"
                },
                {
                    "en": "A strong defensive position",
                    "es": "Una posición defensiva fuerte",
                    "de": "Eine starke defensive Position",
                    "nl": "Een sterke verdedigingspositie"
                },
                {
                    "en": "A triangle drawn on the board",
                    "es": "Un triángulo dibujado en el tablero",
                    "de": "Ein auf das Brett gezeichnetes Dreieck",
                    "nl": "Een driehoek getekend op het bord"
                },
                {
                    "en": "Three empty intersections",
                    "es": "Tres intersecciones vacías",
                    "de": "Drei leere Kreuzungen",
                    "nl": "Drie lege kruispunten"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The empty triangle is three stones in an L-shape that is inefficient. It uses three stones where two would suffice and is considered bad shape.",
                "es": "El triángulo vacío son tres piedras en forma de L que es ineficiente. Usa tres piedras donde dos bastarían, considerándose mala forma.",
                "de": "Das leere Dreieck sind drei Steine in L-Form, was ineffizient ist. Es verwendet drei Steine wo zwei genügen würden.",
                "nl": "De lege driehoek zijn drie stenen in L-vorm, wat inefficiënt is. Het gebruikt drie stenen waar twee zouden volstaan."
            }
        },
        {
            "question": {
                "en": "What is a 'throw-in' in Go?",
                "es": "¿Qué es un 'lanzamiento' en Go?",
                "de": "Was ist ein 'Einwurf' bei Go?",
                "nl": "Wat is een 'inworp' bij Go?"
            },
            "options": [
                {
                    "en": "Placing a stone inside the opponent's group to reduce eyes",
                    "es": "Colocar una piedra dentro del grupo del oponente para reducir ojos",
                    "de": "Einen Stein in die Gruppe des Gegners setzen um Augen zu reduzieren",
                    "nl": "Een steen in de groep van de tegenstander plaatsen om ogen te verminderen"
                },
                {
                    "en": "Throwing a stone away",
                    "es": "Tirar una piedra",
                    "de": "Einen Stein wegwerfen",
                    "nl": "Een steen weggooien"
                },
                {
                    "en": "Adding a stone to your own bowl",
                    "es": "Agregar una piedra a tu propio cuenco",
                    "de": "Einen Stein in die eigene Schale legen",
                    "nl": "Een steen aan je eigen kom toevoegen"
                },
                {
                    "en": "Starting the game",
                    "es": "Empezar el juego",
                    "de": "Das Spiel beginnen",
                    "nl": "Het spel beginnen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A throw-in is placing a stone inside the opponent's group that will be captured, but reduces the group's eye space or creates a shortage of liberties.",
                "es": "Un lanzamiento es colocar una piedra dentro del grupo del oponente que será capturada, pero reduce el espacio de ojos.",
                "de": "Ein Einwurf setzt einen Stein in die gegnerische Gruppe der gefangen wird, aber den Augenraum der Gruppe reduziert.",
                "nl": "Een inworp plaatst een steen in de groep van de tegenstander die gevangen wordt, maar de oogruimte verkleint."
            }
        },
        {
            "question": {
                "en": "What is a 'connection' in Go?",
                "es": "¿Qué es una 'conexión' en Go?",
                "de": "Was ist eine 'Verbindung' bei Go?",
                "nl": "Wat is een 'verbinding' bij Go?"
            },
            "options": [
                {
                    "en": "Linking two groups of stones so they work together",
                    "es": "Unir dos grupos de piedras para que trabajen juntos",
                    "de": "Zwei Steingruppen verbinden damit sie zusammenarbeiten",
                    "nl": "Twee groepen stenen verbinden zodat ze samenwerken"
                },
                {
                    "en": "An internet connection for online Go",
                    "es": "Una conexión a internet para Go en línea",
                    "de": "Eine Internetverbindung für Online-Go",
                    "nl": "Een internetverbinding voor online Go"
                },
                {
                    "en": "Touching two stones together",
                    "es": "Tocar dos piedras juntas",
                    "de": "Zwei Steine zusammen berühren",
                    "nl": "Twee stenen bij elkaar brengen"
                },
                {
                    "en": "Drawing a line between stones",
                    "es": "Dibujar una línea entre piedras",
                    "de": "Eine Linie zwischen Steinen zeichnen",
                    "nl": "Een lijn tekenen tussen stenen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A connection links two groups of friendly stones so they share liberties and eyes, making them stronger and harder to capture.",
                "es": "Una conexión une dos grupos de piedras amigas para que compartan libertades y ojos, haciéndolos más fuertes.",
                "de": "Eine Verbindung verknüpft zwei eigene Steingruppen, sodass sie Freiheiten und Augen teilen und stärker werden.",
                "nl": "Een verbinding koppelt twee groepen eigen stenen zodat ze vrijheden en ogen delen en sterker worden."
            }
        },
        {
            "question": {
                "en": "What is the 'Chinese counting' method?",
                "es": "¿Qué es el método de 'conteo chino'?",
                "de": "Was ist die 'chinesische Zählmethode'?",
                "nl": "Wat is de 'Chinese telmethode'?"
            },
            "options": [
                {
                    "en": "Counting territory plus stones on the board",
                    "es": "Contar territorio más piedras en el tablero",
                    "de": "Gebiet plus Steine auf dem Brett zählen",
                    "nl": "Gebied plus stenen op het bord tellen"
                },
                {
                    "en": "Counting only captured stones",
                    "es": "Contar solo las piedras capturadas",
                    "de": "Nur gefangene Steine zählen",
                    "nl": "Alleen gevangen stenen tellen"
                },
                {
                    "en": "Counting moves played",
                    "es": "Contar los movimientos jugados",
                    "de": "Die gespielten Züge zählen",
                    "nl": "De gespeelde zetten tellen"
                },
                {
                    "en": "Using a calculator",
                    "es": "Usar una calculadora",
                    "de": "Einen Taschenrechner verwenden",
                    "nl": "Een rekenmachine gebruiken"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Chinese counting (area scoring) counts both the territory and the stones on the board. The player with the most total area wins.",
                "es": "El conteo chino (puntuación por área) cuenta tanto el territorio como las piedras en el tablero. Gana quien tenga más área total.",
                "de": "Die chinesische Zählung zählt sowohl Gebiet als auch Steine auf dem Brett. Der Spieler mit der größten Gesamtfläche gewinnt.",
                "nl": "Het Chinese tellen telt zowel het gebied als de stenen op het bord. De speler met het meeste totale gebied wint."
            }
        },
        {
            "question": {
                "en": "What is a 'clamp' in Go?",
                "es": "¿Qué es una 'pinza' (clamp) en Go?",
                "de": "Was ist eine 'Klammer' bei Go?",
                "nl": "Wat is een 'klem' bij Go?"
            },
            "options": [
                {
                    "en": "A move played on the opposite side of a single stone",
                    "es": "Un movimiento jugado en el lado opuesto de una piedra",
                    "de": "Ein Zug auf der gegenüberliegenden Seite eines einzelnen Steins",
                    "nl": "Een zet aan de tegenovergestelde kant van een enkele steen"
                },
                {
                    "en": "A tool to hold stones",
                    "es": "Una herramienta para sostener piedras",
                    "de": "Ein Werkzeug zum Halten von Steinen",
                    "nl": "Een hulpmiddel om stenen vast te houden"
                },
                {
                    "en": "A board holder",
                    "es": "Un soporte de tablero",
                    "de": "Ein Bretthalter",
                    "nl": "Een bordhouder"
                },
                {
                    "en": "A time control device",
                    "es": "Un dispositivo de control de tiempo",
                    "de": "Ein Zeitkontrollgerät",
                    "nl": "Een tijdscontrolemiddel"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A clamp is a contact move played on the opposite side of a single opponent stone, often used to reduce the stone's potential.",
                "es": "Una pinza clamp es un movimiento de contacto en el lado opuesto de una piedra del oponente, usado para reducir su potencial.",
                "de": "Eine Klammer ist ein Kontaktzug auf der gegenüberliegenden Seite eines gegnerischen Steins, um dessen Potenzial zu reduzieren.",
                "nl": "Een klem is een contactzet aan de andere kant van een enkele steen van de tegenstander, om diens potentieel te verminderen."
            }
        },
        {
            "question": {
                "en": "What is the 'Japanese counting' method?",
                "es": "¿Qué es el método de 'conteo japonés'?",
                "de": "Was ist die 'japanische Zählmethode'?",
                "nl": "Wat is de 'Japanse telmethode'?"
            },
            "options": [
                {
                    "en": "Counting territory plus captured stones",
                    "es": "Contar territorio más piedras capturadas",
                    "de": "Gebiet plus gefangene Steine zählen",
                    "nl": "Gebied plus gevangen stenen tellen"
                },
                {
                    "en": "Counting only stones on the board",
                    "es": "Contar solo las piedras en el tablero",
                    "de": "Nur Steine auf dem Brett zählen",
                    "nl": "Alleen stenen op het bord tellen"
                },
                {
                    "en": "Counting the number of moves",
                    "es": "Contar el número de movimientos",
                    "de": "Die Anzahl der Züge zählen",
                    "nl": "Het aantal zetten tellen"
                },
                {
                    "en": "Counting only the center area",
                    "es": "Contar solo el área central",
                    "de": "Nur den mittleren Bereich zählen",
                    "nl": "Alleen het middengebied tellen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Japanese counting (territory scoring) adds the empty territory surrounded by a player's stones plus the number of captured opponent stones.",
                "es": "El conteo japonés suma el territorio vacío rodeado por piedras del jugador más las piedras capturadas del oponente.",
                "de": "Die japanische Zählung addiert das leere Gebiet umgeben von eigenen Steinen plus die Anzahl gefangener gegnerischer Steine.",
                "nl": "Het Japanse tellen telt het lege gebied omringd door eigen stenen plus het aantal gevangen stenen van de tegenstander."
            }
        },
        {
            "question": {
                "en": "What is a 'loose ladder' in Go?",
                "es": "¿Qué es una 'escalera suelta' en Go?",
                "de": "Was ist eine 'lose Leiter' bei Go?",
                "nl": "Wat is een 'losse ladder' bij Go?"
            },
            "options": [
                {
                    "en": "A chase pattern with gaps between the pursuing stones",
                    "es": "Un patrón de persecución con espacios entre las piedras perseguidoras",
                    "de": "Ein Verfolgungsmuster mit Lücken zwischen den verfolgenden Steinen",
                    "nl": "Een achtervolingspatroon met gaten tussen de achtervolgende stenen"
                },
                {
                    "en": "A ladder that is not tight on the board",
                    "es": "Una escalera que no está apretada en el tablero",
                    "de": "Eine Leiter die nicht fest auf dem Brett liegt",
                    "nl": "Een ladder die niet stevig op het bord ligt"
                },
                {
                    "en": "A broken ladder on the wall",
                    "es": "Una escalera rota en la pared",
                    "de": "Eine kaputte Leiter an der Wand",
                    "nl": "Een kapotte ladder aan de muur"
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
                "en": "A loose ladder is similar to a regular ladder but with gaps. The chasing stones are not directly adjacent but still control the escape path.",
                "es": "Una escalera suelta es similar a una escalera regular pero con espacios. Las piedras perseguidoras no son directamente adyacentes.",
                "de": "Eine lose Leiter ist ähnlich einer normalen Leiter aber mit Lücken. Die verfolgenden Steine sind nicht direkt benachbart.",
                "nl": "Een losse ladder is vergelijkbaar met een gewone ladder maar met gaten. De achtervolgende stenen zijn niet direct aangrenzend."
            }
        },
        {
            "question": {
                "en": "What is 'influence' in Go?",
                "es": "¿Qué es 'influencia' en Go?",
                "de": "Was ist 'Einfluss' bei Go?",
                "nl": "Wat is 'invloed' bij Go?"
            },
            "options": [
                {
                    "en": "The power stones project over nearby empty areas",
                    "es": "El poder que las piedras proyectan sobre áreas vacías cercanas",
                    "de": "Die Kraft die Steine auf nahe leere Bereiche ausstrahlen",
                    "nl": "De kracht die stenen uitstralen over nabije lege gebieden"
                },
                {
                    "en": "The number of stones on the board",
                    "es": "El número de piedras en el tablero",
                    "de": "Die Anzahl der Steine auf dem Brett",
                    "nl": "Het aantal stenen op het bord"
                },
                {
                    "en": "A player's reputation",
                    "es": "La reputación de un jugador",
                    "de": "Der Ruf eines Spielers",
                    "nl": "De reputatie van een speler"
                },
                {
                    "en": "The weight of the stones",
                    "es": "El peso de las piedras",
                    "de": "Das Gewicht der Steine",
                    "nl": "Het gewicht van de stenen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Influence is the potential power that stones radiate over nearby empty areas of the board. Strong walls create more influence.",
                "es": "La influencia es el poder potencial que las piedras irradian sobre áreas vacías cercanas del tablero. Muros fuertes crean más influencia.",
                "de": "Einfluss ist die potenzielle Kraft die Steine auf nahe leere Bereiche des Bretts ausstrahlen. Starke Mauern erzeugen mehr Einfluss.",
                "nl": "Invloed is de potentiële kracht die stenen uitstralen over nabije lege gebieden op het bord. Sterke muren creëren meer invloed."
            }
        },
        {
            "question": {
                "en": "What is a 'star point' on the Go board?",
                "es": "¿Qué es un 'punto estrella' en el tablero de Go?",
                "de": "Was ist ein 'Sternpunkt' auf dem Go-Brett?",
                "nl": "Wat is een 'sterpunt' op het Go-bord?"
            },
            "options": [
                {
                    "en": "One of the nine marked dots on a 19x19 board",
                    "es": "Uno de los nueve puntos marcados en un tablero 19x19",
                    "de": "Einer der neun markierten Punkte auf einem 19x19 Brett",
                    "nl": "Een van de negen gemarkeerde punten op een 19x19 bord"
                },
                {
                    "en": "A bonus scoring area",
                    "es": "Un área de puntuación extra",
                    "de": "Ein Bonuswertungsbereich",
                    "nl": "Een bonusscoringgebied"
                },
                {
                    "en": "The brightest point on the board",
                    "es": "El punto más brillante del tablero",
                    "de": "Der hellste Punkt auf dem Brett",
                    "nl": "Het helderste punt op het bord"
                },
                {
                    "en": "A point that gives extra moves",
                    "es": "Un punto que da movimientos extra",
                    "de": "Ein Punkt der extra Züge gibt",
                    "nl": "Een punt dat extra zetten geeft"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Star points (hoshi) are the nine small dots marked on a standard 19x19 board. They serve as orientation and as placement spots for handicap stones.",
                "es": "Los puntos estrella (hoshi) son los nueve puntos marcados en un tablero 19x19. Sirven de orientación y para colocar piedras de handicap.",
                "de": "Sternpunkte (Hoshi) sind die neun markierten Punkte auf einem 19x19 Brett. Sie dienen zur Orientierung und als Plätze für Vorgabesteine.",
                "nl": "Sterpunten (hoshi) zijn de negen gemarkeerde punten op een 19x19 bord. Ze dienen als oriëntatie en voor het plaatsen van handicapstenen."
            }
        },
        {
            "question": {
                "en": "What is a 'wedge' in Go?",
                "es": "¿Qué es una 'cuña' en Go?",
                "de": "Was ist ein 'Keil' bei Go?",
                "nl": "Wat is een 'wig' bij Go?"
            },
            "options": [
                {
                    "en": "A stone played between two opponent stones to separate them",
                    "es": "Una piedra jugada entre dos piedras del oponente para separarlas",
                    "de": "Ein Stein zwischen zwei gegnerische Steine gespielt um sie zu trennen",
                    "nl": "Een steen gespeeld tussen twee stenen van de tegenstander om ze te scheiden"
                },
                {
                    "en": "A triangular stone",
                    "es": "Una piedra triangular",
                    "de": "Ein dreieckiger Stein",
                    "nl": "Een driehoekige steen"
                },
                {
                    "en": "A tool for splitting the board",
                    "es": "Una herramienta para dividir el tablero",
                    "de": "Ein Werkzeug zum Spalten des Bretts",
                    "nl": "Een hulpmiddel om het bord te splitsen"
                },
                {
                    "en": "A type of capture",
                    "es": "Un tipo de captura",
                    "de": "Eine Art Fang",
                    "nl": "Een soort vangst"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A wedge is a stone placed between two loosely connected opponent stones to cut them apart and create weaknesses in their position.",
                "es": "Una cuña es una piedra colocada entre dos piedras del oponente conectadas sueltas para cortarlas y crear debilidades.",
                "de": "Ein Keil ist ein Stein zwischen zwei lose verbundenen gegnerischen Steinen, um sie zu trennen und Schwächen zu erzeugen.",
                "nl": "Een wig is een steen geplaatst tussen twee los verbonden stenen van de tegenstander om ze te scheiden en zwaktes te creëren."
            }
        },
        {
            "question": {
                "en": "What is a 'wall' in Go?",
                "es": "¿Qué es un 'muro' en Go?",
                "de": "Was ist eine 'Mauer' bei Go?",
                "nl": "Wat is een 'muur' bij Go?"
            },
            "options": [
                {
                    "en": "A row of connected stones facing outward",
                    "es": "Una fila de piedras conectadas mirando hacia afuera",
                    "de": "Eine Reihe verbundener Steine die nach außen zeigen",
                    "nl": "Een rij verbonden stenen die naar buiten gericht zijn"
                },
                {
                    "en": "A physical barrier around the board",
                    "es": "Una barrera física alrededor del tablero",
                    "de": "Eine physische Barriere um das Brett",
                    "nl": "Een fysieke barrière rond het bord"
                },
                {
                    "en": "The edge of the board",
                    "es": "El borde del tablero",
                    "de": "Der Rand des Bretts",
                    "nl": "De rand van het bord"
                },
                {
                    "en": "A defensive formation around one stone",
                    "es": "Una formación defensiva alrededor de una piedra",
                    "de": "Eine defensive Formation um einen Stein",
                    "nl": "Een verdedigingsformatie rond één steen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A wall is a solid row of connected stones that projects influence outward. Walls are used to build large frameworks or attack nearby groups.",
                "es": "Un muro es una fila sólida de piedras conectadas que proyecta influencia hacia afuera. Se usan para construir marcos o atacar.",
                "de": "Eine Mauer ist eine feste Reihe verbundener Steine die Einfluss nach außen projiziert. Mauern dienen zum Aufbau großer Rahmen.",
                "nl": "Een muur is een solide rij verbonden stenen die invloed naar buiten projecteert. Muren worden gebruikt voor grote kaders of aanvallen."
            }
        },
        {
            "question": {
                "en": "What is 'reading' in Go?",
                "es": "¿Qué es 'lectura' en Go?",
                "de": "Was ist 'Lesen' bei Go?",
                "nl": "Wat is 'lezen' bij Go?"
            },
            "options": [
                {
                    "en": "Mentally calculating future move sequences",
                    "es": "Calcular mentalmente secuencias de movimientos futuros",
                    "de": "Zukünftige Zugfolgen im Kopf berechnen",
                    "nl": "Toekomstige zetreeksen mentaal berekenen"
                },
                {
                    "en": "Reading a Go book during the game",
                    "es": "Leer un libro de Go durante el juego",
                    "de": "Während des Spiels ein Go-Buch lesen",
                    "nl": "Een Go-boek lezen tijdens het spel"
                },
                {
                    "en": "Reading the opponent's face",
                    "es": "Leer la cara del oponente",
                    "de": "Das Gesicht des Gegners lesen",
                    "nl": "Het gezicht van de tegenstander lezen"
                },
                {
                    "en": "Reading the game rules",
                    "es": "Leer las reglas del juego",
                    "de": "Die Spielregeln lesen",
                    "nl": "De spelregels lezen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Reading is the skill of mentally visualizing move sequences and their outcomes without physically placing stones. It is essential for strong play.",
                "es": "La lectura es la habilidad de visualizar mentalmente secuencias de movimientos y sus resultados sin colocar piedras físicamente.",
                "de": "Lesen ist die Fähigkeit Zugfolgen und deren Ergebnisse mental zu visualisieren, ohne Steine physisch zu setzen.",
                "nl": "Lezen is de vaardigheid om zetreeksen en hun uitkomsten mentaal te visualiseren zonder stenen fysiek te plaatsen."
            }
        },
        {
            "question": {
                "en": "What is a 'shimari' in Go?",
                "es": "¿Qué es un 'shimari' en Go?",
                "de": "Was ist ein 'Shimari' bei Go?",
                "nl": "Wat is een 'shimari' bij Go?"
            },
            "options": [
                {
                    "en": "A two-stone corner enclosure",
                    "es": "Un cercado de esquina de dos piedras",
                    "de": "Eine Eck-Einfassung aus zwei Steinen",
                    "nl": "Een hoekopsluiting van twee stenen"
                },
                {
                    "en": "A type of capture",
                    "es": "Un tipo de captura",
                    "de": "Eine Art Fang",
                    "nl": "Een soort vangst"
                },
                {
                    "en": "The closing ceremony",
                    "es": "La ceremonia de cierre",
                    "de": "Die Abschlusszeremonie",
                    "nl": "De sluitingsceremonie"
                },
                {
                    "en": "A defensive wall",
                    "es": "Un muro defensivo",
                    "de": "Eine Verteidigungsmauer",
                    "nl": "Een verdedigingsmuur"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A shimari is a corner enclosure made with two stones that secures territory in the corner. It is a common opening strategy.",
                "es": "Un shimari es un cercado de esquina hecho con dos piedras que asegura territorio en la esquina. Es una estrategia de apertura común.",
                "de": "Ein Shimari ist eine Eckeinfassung aus zwei Steinen die Gebiet in der Ecke sichert. Es ist eine übliche Eröffnungsstrategie.",
                "nl": "Een shimari is een hoekopsluiting van twee stenen die gebied in de hoek veiligstelt. Het is een veelgebruikte openingsstrategie."
            }
        },
        {
            "question": {
                "en": "What does 'kyu' refer to in Go?",
                "es": "¿A qué se refiere 'kyu' en Go?",
                "de": "Was bedeutet 'Kyu' bei Go?",
                "nl": "Wat betekent 'kyu' bij Go?"
            },
            "options": [
                {
                    "en": "A ranking level for amateur players",
                    "es": "Un nivel de clasificación para jugadores amateur",
                    "de": "Ein Rangstufe für Amateurspieler",
                    "nl": "Een rangniveau voor amateurspelers"
                },
                {
                    "en": "A type of stone",
                    "es": "Un tipo de piedra",
                    "de": "Eine Art Stein",
                    "nl": "Een soort steen"
                },
                {
                    "en": "A game timer",
                    "es": "Un cronómetro de juego",
                    "de": "Ein Spieltimer",
                    "nl": "Een speltimer"
                },
                {
                    "en": "A move in the corner",
                    "es": "Un movimiento en la esquina",
                    "de": "Ein Zug in der Ecke",
                    "nl": "Een zet in de hoek"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Kyu ranks are for amateur Go players, counting down from 30 kyu (beginner) to 1 kyu (strongest amateur before dan ranks).",
                "es": "Los rangos kyu son para jugadores amateur de Go, contando desde 30 kyu (principiante) hasta 1 kyu (más fuerte antes de los rangos dan).",
                "de": "Kyu-Ränge sind für Amateur-Go-Spieler, von 30 Kyu (Anfänger) bis 1 Kyu (stärkster Amateur vor den Dan-Rängen).",
                "nl": "Kyu-rangen zijn voor amateur Go-spelers, aflopend van 30 kyu (beginner) tot 1 kyu (sterkste amateur voor de dan-rangen)."
            }
        },
        {
            "question": {
                "en": "What does 'dan' refer to in Go?",
                "es": "¿A qué se refiere 'dan' en Go?",
                "de": "Was bedeutet 'Dan' bei Go?",
                "nl": "Wat betekent 'dan' bij Go?"
            },
            "options": [
                {
                    "en": "A ranking level for advanced players",
                    "es": "Un nivel de clasificación para jugadores avanzados",
                    "de": "Eine Rangstufe für fortgeschrittene Spieler",
                    "nl": "Een rangniveau voor gevorderde spelers"
                },
                {
                    "en": "A player's name",
                    "es": "El nombre de un jugador",
                    "de": "Der Name eines Spielers",
                    "nl": "De naam van een speler"
                },
                {
                    "en": "A type of board",
                    "es": "Un tipo de tablero",
                    "de": "Eine Art Brett",
                    "nl": "Een soort bord"
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
                "en": "Dan ranks are for advanced Go players. Amateur dan ranks go from 1 dan to 7 dan, while professional ranks go from 1 dan to 9 dan.",
                "es": "Los rangos dan son para jugadores avanzados de Go. Los rangos dan amateur van de 1 dan a 7 dan, los profesionales de 1 a 9 dan.",
                "de": "Dan-Ränge sind für fortgeschrittene Go-Spieler. Amateur-Dan-Ränge gehen von 1 bis 7, professionelle von 1 bis 9 Dan.",
                "nl": "Dan-rangen zijn voor gevorderde Go-spelers. Amateur dan-rangen gaan van 1 tot 7, professionele van 1 tot 9 dan."
            }
        },
        {
            "question": {
                "en": "What is 'joseki' in Go?",
                "es": "¿Qué es 'joseki' en Go?",
                "de": "Was ist 'Joseki' bei Go?",
                "nl": "Wat is 'joseki' bij Go?"
            },
            "options": [
                {
                    "en": "Established sequences of moves in the corner",
                    "es": "Secuencias establecidas de movimientos en la esquina",
                    "de": "Festgelegte Zugfolgen in der Ecke",
                    "nl": "Vastgestelde zetreeksen in de hoek"
                },
                {
                    "en": "A type of Japanese food",
                    "es": "Un tipo de comida japonesa",
                    "de": "Eine Art japanisches Essen",
                    "nl": "Een soort Japans eten"
                },
                {
                    "en": "A greeting before the game",
                    "es": "Un saludo antes del juego",
                    "de": "Eine Begrüßung vor dem Spiel",
                    "nl": "Een begroeting voor het spel"
                },
                {
                    "en": "A type of stone material",
                    "es": "Un tipo de material de piedra",
                    "de": "Eine Art Steinmaterial",
                    "nl": "Een soort steenmateriaal"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Joseki are well-studied sequences of moves in the corner that are considered fair for both players. Learning joseki helps improve opening play.",
                "es": "Joseki son secuencias bien estudiadas de movimientos en la esquina consideradas justas para ambos jugadores.",
                "de": "Joseki sind gut untersuchte Zugfolgen in der Ecke, die für beide Spieler als fair gelten. Sie verbessern das Eröffnungsspiel.",
                "nl": "Joseki zijn goed bestudeerde zetreeksen in de hoek die als eerlijk voor beide spelers worden beschouwd."
            }
        },
        {
            "question": {
                "en": "What is 'fuseki' in Go?",
                "es": "¿Qué es 'fuseki' en Go?",
                "de": "Was ist 'Fuseki' bei Go?",
                "nl": "Wat is 'fuseki' bij Go?"
            },
            "options": [
                {
                    "en": "The opening phase of the game",
                    "es": "La fase de apertura del juego",
                    "de": "Die Eröffnungsphase des Spiels",
                    "nl": "De openingsfase van het spel"
                },
                {
                    "en": "The endgame",
                    "es": "El final del juego",
                    "de": "Das Endspiel",
                    "nl": "Het eindspel"
                },
                {
                    "en": "A type of capture",
                    "es": "Un tipo de captura",
                    "de": "Eine Art Fang",
                    "nl": "Een soort vangst"
                },
                {
                    "en": "A special stone",
                    "es": "Una piedra especial",
                    "de": "Ein spezieller Stein",
                    "nl": "Een speciale steen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Fuseki is the opening phase of a Go game where players establish positions across the board, focusing on corners, sides, and overall strategy.",
                "es": "Fuseki es la fase de apertura de un juego de Go donde los jugadores establecen posiciones, enfocándose en esquinas, lados y estrategia.",
                "de": "Fuseki ist die Eröffnungsphase eines Go-Spiels, in der Spieler Positionen aufbauen, mit Fokus auf Ecken, Seiten und Gesamtstrategie.",
                "nl": "Fuseki is de openingsfase van een Go-spel waarin spelers posities opbouwen, gericht op hoeken, zijden en algehele strategie."
            }
        },
        {
            "question": {
                "en": "What is a 'moyo' in Go?",
                "es": "¿Qué es un 'moyo' en Go?",
                "de": "Was ist ein 'Moyo' bei Go?",
                "nl": "Wat is een 'moyo' bij Go?"
            },
            "options": [
                {
                    "en": "A large framework of potential territory",
                    "es": "Un gran marco de territorio potencial",
                    "de": "Ein großer Rahmen potenziellen Gebiets",
                    "nl": "Een groot raamwerk van potentieel gebied"
                },
                {
                    "en": "A captured group",
                    "es": "Un grupo capturado",
                    "de": "Eine gefangene Gruppe",
                    "nl": "Een gevangen groep"
                },
                {
                    "en": "A type of timer",
                    "es": "Un tipo de temporizador",
                    "de": "Eine Art Timer",
                    "nl": "Een soort timer"
                },
                {
                    "en": "A small territory",
                    "es": "Un pequeño territorio",
                    "de": "Ein kleines Gebiet",
                    "nl": "Een klein gebied"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A moyo is a large area loosely outlined by stones that has the potential to become territory. The opponent may try to invade or reduce it.",
                "es": "Un moyo es un área grande delineada vagamente por piedras con potencial de convertirse en territorio. El oponente puede intentar invadirlo.",
                "de": "Ein Moyo ist ein großer Bereich lose von Steinen umrissen, der potenziell Gebiet werden kann. Der Gegner kann versuchen einzudringen.",
                "nl": "Een moyo is een groot gebied losjes omlijnd door stenen dat potentieel gebied kan worden. De tegenstander kan proberen het in te vallen."
            }
        },
        {
            "question": {
                "en": "What is a 'descent' in Go?",
                "es": "¿Qué es un 'descenso' en Go?",
                "de": "Was ist ein 'Abstieg' bei Go?",
                "nl": "Wat is een 'afdaling' bij Go?"
            },
            "options": [
                {
                    "en": "Playing a stone one line closer to the edge",
                    "es": "Jugar una piedra una línea más cerca del borde",
                    "de": "Einen Stein eine Linie näher zum Rand spielen",
                    "nl": "Een steen één lijn dichter bij de rand spelen"
                },
                {
                    "en": "Moving down from the table",
                    "es": "Bajar de la mesa",
                    "de": "Vom Tisch heruntergehen",
                    "nl": "Van de tafel af gaan"
                },
                {
                    "en": "Losing rank points",
                    "es": "Perder puntos de rango",
                    "de": "Rangpunkte verlieren",
                    "nl": "Rangpunten verliezen"
                },
                {
                    "en": "Dropping a stone",
                    "es": "Dejar caer una piedra",
                    "de": "Einen Stein fallen lassen",
                    "nl": "Een steen laten vallen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A descent is a move played one line closer to the edge of the board from one of your own stones, often used to secure territory along the side.",
                "es": "Un descenso es un movimiento una línea más cerca del borde desde una de tus piedras, usado para asegurar territorio en el lado.",
                "de": "Ein Abstieg ist ein Zug eine Linie näher zum Rand von einem eigenen Stein, oft verwendet um Gebiet an der Seite zu sichern.",
                "nl": "Een afdaling is een zet één lijn dichter bij de rand vanaf een eigen steen, vaak gebruikt om gebied aan de zijkant te beveiligen."
            }
        },
        {
            "question": {
                "en": "What is 'byoyomi' in Go?",
                "es": "¿Qué es 'byoyomi' en Go?",
                "de": "Was ist 'Byoyomi' bei Go?",
                "nl": "Wat is 'byoyomi' bij Go?"
            },
            "options": [
                {
                    "en": "Overtime periods where each move has a time limit",
                    "es": "Períodos de tiempo extra donde cada movimiento tiene un límite",
                    "de": "Überzeitperioden wo jeder Zug ein Zeitlimit hat",
                    "nl": "Overtijdperiodes waarbij elke zet een tijdslimiet heeft"
                },
                {
                    "en": "A type of opening move",
                    "es": "Un tipo de movimiento de apertura",
                    "de": "Eine Art Eröffnungszug",
                    "nl": "Een soort openingszet"
                },
                {
                    "en": "A Japanese tea ceremony during the game",
                    "es": "Una ceremonia de té japonesa durante el juego",
                    "de": "Eine japanische Teezeremonie während des Spiels",
                    "nl": "Een Japanse theeceremonie tijdens het spel"
                },
                {
                    "en": "The scoring phase",
                    "es": "La fase de puntuación",
                    "de": "Die Wertungsphase",
                    "nl": "De scorefase"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Byoyomi is a time control system where, after main time expires, players get a set number of periods with a fixed time per move.",
                "es": "Byoyomi es un sistema de control de tiempo donde, tras agotarse el tiempo principal, los jugadores reciben períodos con tiempo fijo por movimiento.",
                "de": "Byoyomi ist ein Zeitkontrollsystem. Nach Ablauf der Hauptzeit erhalten Spieler eine bestimmte Anzahl Perioden mit festem Zeitlimit pro Zug.",
                "nl": "Byoyomi is een tijdcontrolesysteem waarbij spelers na het verstrijken van de hoofdtijd periodes krijgen met een vaste tijd per zet."
            }
        },
        {
            "question": {
                "en": "What is a 'monkey jump' in Go?",
                "es": "¿Qué es un 'salto de mono' en Go?",
                "de": "Was ist ein 'Affensprung' bei Go?",
                "nl": "Wat is een 'apensprong' bij Go?"
            },
            "options": [
                {
                    "en": "A long move along the edge to steal territory",
                    "es": "Un movimiento largo por el borde para robar territorio",
                    "de": "Ein langer Zug am Rand um Gebiet zu stehlen",
                    "nl": "Een lange zet langs de rand om gebied te stelen"
                },
                {
                    "en": "Jumping over an opponent's stone",
                    "es": "Saltar sobre una piedra del oponente",
                    "de": "Über einen gegnerischen Stein springen",
                    "nl": "Over een steen van de tegenstander springen"
                },
                {
                    "en": "A move that imitates animal behavior",
                    "es": "Un movimiento que imita comportamiento animal",
                    "de": "Ein Zug der Tierverhalten nachahmt",
                    "nl": "Een zet die diergedrag nabootst"
                },
                {
                    "en": "A quick capture technique",
                    "es": "Una técnica de captura rápida",
                    "de": "Eine schnelle Fangtechnik",
                    "nl": "Een snelle vangtechniek"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A monkey jump is a large endgame move along the first or second line that slides under the opponent's position to reduce their territory.",
                "es": "Un salto de mono es un gran movimiento de final por la primera o segunda línea que se desliza bajo la posición del oponente.",
                "de": "Ein Affensprung ist ein großer Endspiellzug entlang der ersten oder zweiten Linie, der unter die Position des Gegners gleitet.",
                "nl": "Een apensprong is een grote eindspeelzet langs de eerste of tweede lijn die onder de positie van de tegenstander glijdt."
            }
        },
        {
            "question": {
                "en": "What is a 'bamboo joint' in Go?",
                "es": "¿Qué es una 'unión de bambú' en Go?",
                "de": "Was ist ein 'Bambusgelenk' bei Go?",
                "nl": "Wat is een 'bamboeverbinding' bij Go?"
            },
            "options": [
                {
                    "en": "Two pairs of stones that form an unbreakable connection",
                    "es": "Dos pares de piedras que forman una conexión irrompible",
                    "de": "Zwei Steinpaare die eine unzerbrechliche Verbindung bilden",
                    "nl": "Twee paren stenen die een onbreekbare verbinding vormen"
                },
                {
                    "en": "A flexible bamboo board",
                    "es": "Un tablero de bambú flexible",
                    "de": "Ein flexibles Bambusbrett",
                    "nl": "Een flexibel bamboebord"
                },
                {
                    "en": "A green-colored stone",
                    "es": "Una piedra de color verde",
                    "de": "Ein grüner Stein",
                    "nl": "Een groene steen"
                },
                {
                    "en": "A tall stack of stones",
                    "es": "Una pila alta de piedras",
                    "de": "Ein hoher Stapel Steine",
                    "nl": "Een hoge stapel stenen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A bamboo joint is two pairs of stones placed so that the opponent cannot cut between them, creating a strong and secure connection.",
                "es": "Una unión de bambú son dos pares de piedras colocadas para que el oponente no pueda cortar entre ellas, creando una conexión segura.",
                "de": "Ein Bambusgelenk sind zwei Steinpaare, die so gesetzt sind, dass der Gegner nicht dazwischen schneiden kann.",
                "nl": "Een bamboeverbinding zijn twee paren stenen die zo geplaatst zijn dat de tegenstander er niet tussen kan snijden."
            }
        }
    ]
};
