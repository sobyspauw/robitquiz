// Go - level5
// Total questions: 100

module.exports = {
    questions: [
        {
            "question": {
                "en": "What is the main objective in a game of Go?",
                "es": "¿Cuál es el objetivo principal en una partida de Go?",
                "de": "Was ist das Hauptziel in einem Go-Spiel?",
                "nl": "Wat is het hoofddoel in een spel Go?"
            },
            "options": [
                {
                    "en": "Capture all opponent's stones",
                    "es": "Capturar todas las piedras del oponente",
                    "de": "Alle Steine des Gegners schlagen",
                    "nl": "Alle stenen van de tegenstander veroveren"
                },
                {
                    "en": "Control more territory than your opponent",
                    "es": "Controlar más territorio que tu oponente",
                    "de": "Mehr Gebiet kontrollieren als der Gegner",
                    "nl": "Meer gebied controleren dan je tegenstander"
                },
                {
                    "en": "Reach the opponent's side of the board",
                    "es": "Llegar al lado del tablero del oponente",
                    "de": "Die Seite des Gegners erreichen",
                    "nl": "De kant van de tegenstander bereiken"
                },
                {
                    "en": "Form a straight line of five stones",
                    "es": "Formar una línea recta de cinco piedras",
                    "de": "Eine Reihe von fünf Steinen bilden",
                    "nl": "Een rechte lijn van vijf stenen vormen"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "The main objective in Go is to control more territory than your opponent by surrounding empty intersections with your stones.",
                "es": "El objetivo principal en Go es controlar más territorio que tu oponente rodeando intersecciones vacías con tus piedras.",
                "de": "Das Hauptziel in Go ist es, mehr Gebiet als der Gegner zu kontrollieren, indem man leere Kreuzungen mit Steinen umgibt.",
                "nl": "Het hoofddoel in Go is meer gebied te controleren dan je tegenstander door lege kruispunten met je stenen te omringen."
            }
        },
        {
            "question": {
                "en": "What is a 'liberty' in Go?",
                "es": "¿Qué es una 'libertad' en Go?",
                "de": "Was ist eine 'Freiheit' in Go?",
                "nl": "Wat is een 'vrijheid' in Go?"
            },
            "options": [
                {
                    "en": "A captured stone returned to the player",
                    "es": "Una piedra capturada devuelta al jugador",
                    "de": "Ein geschlagener Stein, der zurückgegeben wird",
                    "nl": "Een veroverde steen die terugkomt"
                },
                {
                    "en": "A bonus move given to the weaker player",
                    "es": "Un movimiento extra dado al jugador más débil",
                    "de": "Ein Bonuszug für den schwächeren Spieler",
                    "nl": "Een bonuszet voor de zwakkere speler"
                },
                {
                    "en": "An empty point directly adjacent to a stone",
                    "es": "Un punto vacío directamente adyacente a una piedra",
                    "de": "Ein leerer Punkt direkt neben einem Stein",
                    "nl": "Een leeg punt direct naast een steen"
                },
                {
                    "en": "The edge of the board",
                    "es": "El borde del tablero",
                    "de": "Der Rand des Brettes",
                    "nl": "De rand van het bord"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "A liberty is an empty point directly adjacent to a stone along the grid lines. Stones need at least one liberty to stay on the board.",
                "es": "Una libertad es un punto vacío directamente adyacente a una piedra. Las piedras necesitan al menos una libertad para permanecer en el tablero.",
                "de": "Eine Freiheit ist ein leerer Punkt direkt neben einem Stein. Steine brauchen mindestens eine Freiheit, um auf dem Brett zu bleiben.",
                "nl": "Een vrijheid is een leeg punt direct naast een steen. Stenen hebben minstens één vrijheid nodig om op het bord te blijven."
            }
        },
        {
            "question": {
                "en": "What happens when a stone has zero liberties?",
                "es": "¿Qué ocurre cuando una piedra no tiene libertades?",
                "de": "Was passiert, wenn ein Stein keine Freiheiten hat?",
                "nl": "Wat gebeurt er als een steen geen vrijheden heeft?"
            },
            "options": [
                {
                    "en": "It is captured and removed from the board",
                    "es": "Es capturada y retirada del tablero",
                    "de": "Er wird geschlagen und vom Brett entfernt",
                    "nl": "Het wordt veroverd en van het bord verwijderd"
                },
                {
                    "en": "It becomes a neutral stone",
                    "es": "Se convierte en una piedra neutral",
                    "de": "Er wird ein neutraler Stein",
                    "nl": "Het wordt een neutrale steen"
                },
                {
                    "en": "The opponent must skip a turn",
                    "es": "El oponente debe pasar un turno",
                    "de": "Der Gegner muss eine Runde aussetzen",
                    "nl": "De tegenstander moet een beurt overslaan"
                },
                {
                    "en": "It stays but cannot be moved",
                    "es": "Permanece pero no puede moverse",
                    "de": "Er bleibt, kann aber nicht bewegt werden",
                    "nl": "Het blijft maar kan niet verplaatst worden"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "When a stone or group of stones has zero liberties, it is captured and removed from the board. The captured stones count as points for the opponent.",
                "es": "Cuando una piedra o grupo no tiene libertades, se captura y retira del tablero. Las piedras capturadas cuentan como puntos para el oponente.",
                "de": "Wenn ein Stein oder eine Gruppe keine Freiheiten hat, wird er geschlagen und entfernt. Geschlagene Steine zählen als Punkte für den Gegner.",
                "nl": "Als een steen of groep geen vrijheden heeft, wordt deze veroverd en verwijderd. Veroverde stenen tellen als punten voor de tegenstander."
            }
        },
        {
            "question": {
                "en": "How many lines does a standard Go board have?",
                "es": "¿Cuántas líneas tiene un tablero estándar de Go?",
                "de": "Wie viele Linien hat ein Standard-Go-Brett?",
                "nl": "Hoeveel lijnen heeft een standaard Go-bord?"
            },
            "options": [
                {
                    "en": "15 x 15",
                    "es": "15 x 15",
                    "de": "15 x 15",
                    "nl": "15 x 15"
                },
                {
                    "en": "17 x 17",
                    "es": "17 x 17",
                    "de": "17 x 17",
                    "nl": "17 x 17"
                },
                {
                    "en": "19 x 19",
                    "es": "19 x 19",
                    "de": "19 x 19",
                    "nl": "19 x 19"
                },
                {
                    "en": "21 x 21",
                    "es": "21 x 21",
                    "de": "21 x 21",
                    "nl": "21 x 21"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "A standard Go board has 19 x 19 lines, creating 361 intersections where stones can be placed.",
                "es": "Un tablero estándar de Go tiene 19 x 19 líneas, creando 361 intersecciones donde se colocan las piedras.",
                "de": "Ein Standard-Go-Brett hat 19 x 19 Linien und damit 361 Schnittpunkte, auf die Steine gesetzt werden können.",
                "nl": "Een standaard Go-bord heeft 19 x 19 lijnen, wat 361 kruispunten oplevert waar stenen geplaatst kunnen worden."
            }
        },
        {
            "question": {
                "en": "Which color plays first in Go?",
                "es": "¿Qué color juega primero en Go?",
                "de": "Welche Farbe spielt zuerst in Go?",
                "nl": "Welke kleur speelt als eerste in Go?"
            },
            "options": [
                {
                    "en": "White",
                    "es": "Blanco",
                    "de": "Weiß",
                    "nl": "Wit"
                },
                {
                    "en": "Black",
                    "es": "Negro",
                    "de": "Schwarz",
                    "nl": "Zwart"
                },
                {
                    "en": "The player who won the previous game",
                    "es": "El jugador que ganó la partida anterior",
                    "de": "Der Spieler, der das letzte Spiel gewonnen hat",
                    "nl": "De speler die het vorige spel won"
                },
                {
                    "en": "It is decided by a coin toss",
                    "es": "Se decide con un lanzamiento de moneda",
                    "de": "Es wird per Münzwurf entschieden",
                    "nl": "Het wordt beslist met een muntopgooi"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "In Go, Black always plays first. To compensate for this advantage, White receives extra points called komi.",
                "es": "En Go, Negro siempre juega primero. Para compensar esta ventaja, Blanco recibe puntos extra llamados komi.",
                "de": "In Go spielt Schwarz immer zuerst. Zum Ausgleich dieses Vorteils erhält Weiß Extrapunkte, das sogenannte Komi.",
                "nl": "In Go speelt Zwart altijd als eerste. Om dit voordeel te compenseren krijgt Wit extra punten genaamd komi."
            }
        },
        {
            "question": {
                "en": "What is 'komi' in Go?",
                "es": "¿Qué es el 'komi' en Go?",
                "de": "Was ist 'Komi' in Go?",
                "nl": "Wat is 'komi' in Go?"
            },
            "options": [
                {
                    "en": "A special move to capture stones",
                    "es": "Un movimiento especial para capturar piedras",
                    "de": "Ein spezieller Zug zum Schlagen von Steinen",
                    "nl": "Een speciale zet om stenen te veroveren"
                },
                {
                    "en": "Points given to White to offset Black's advantage",
                    "es": "Puntos dados a Blanco para compensar la ventaja de Negro",
                    "de": "Punkte für Weiß als Ausgleich für Schwarz' Vorteil",
                    "nl": "Punten voor Wit om het voordeel van Zwart te compenseren"
                },
                {
                    "en": "A penalty for losing stones",
                    "es": "Una penalización por perder piedras",
                    "de": "Eine Strafe für verlorene Steine",
                    "nl": "Een straf voor het verliezen van stenen"
                },
                {
                    "en": "The opening ceremony before a game",
                    "es": "La ceremonia de apertura antes del juego",
                    "de": "Die Eröffnungszeremonie vor dem Spiel",
                    "nl": "De openingsceremonie voor het spel"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "Komi is a set number of points given to White to compensate for Black's advantage of playing first. It is typically 6.5 or 7.5 points.",
                "es": "El komi es una cantidad de puntos dados a Blanco para compensar la ventaja de Negro. Normalmente es de 6,5 o 7,5 puntos.",
                "de": "Komi sind Punkte, die Weiß als Ausgleich für den Vorteil von Schwarz erhält. Typisch sind 6,5 oder 7,5 Punkte.",
                "nl": "Komi is een vast aantal punten voor Wit om het voordeel van Zwart te compenseren. Het is meestal 6,5 of 7,5 punten."
            }
        },
        {
            "question": {
                "en": "What is an 'atari' in Go?",
                "es": "¿Qué es un 'atari' en Go?",
                "de": "Was ist ein 'Atari' in Go?",
                "nl": "Wat is een 'atari' in Go?"
            },
            "options": [
                {
                    "en": "A stone placed in the center of the board",
                    "es": "Una piedra colocada en el centro del tablero",
                    "de": "Ein Stein in der Mitte des Brettes",
                    "nl": "Een steen in het midden van het bord"
                },
                {
                    "en": "A group that cannot be captured",
                    "es": "Un grupo que no puede ser capturado",
                    "de": "Eine Gruppe, die nicht geschlagen werden kann",
                    "nl": "Een groep die niet veroverd kan worden"
                },
                {
                    "en": "A stone or group with only one liberty left",
                    "es": "Una piedra o grupo con solo una libertad",
                    "de": "Ein Stein oder Gruppe mit nur einer Freiheit",
                    "nl": "Een steen of groep met nog maar één vrijheid"
                },
                {
                    "en": "The final move of the game",
                    "es": "El último movimiento del juego",
                    "de": "Der letzte Zug des Spiels",
                    "nl": "De laatste zet van het spel"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "Atari means a stone or group has only one liberty remaining. The next move by the opponent could capture it.",
                "es": "Atari significa que una piedra o grupo tiene solo una libertad. El siguiente movimiento del oponente podría capturarla.",
                "de": "Atari bedeutet, dass ein Stein oder eine Gruppe nur noch eine Freiheit hat. Der nächste Zug könnte sie schlagen.",
                "nl": "Atari betekent dat een steen of groep nog maar één vrijheid heeft. De volgende zet van de tegenstander kan deze veroveren."
            }
        },
        {
            "question": {
                "en": "What does the ko rule prevent in Go?",
                "es": "¿Qué impide la regla del ko en Go?",
                "de": "Was verhindert die Ko-Regel in Go?",
                "nl": "Wat voorkomt de ko-regel in Go?"
            },
            "options": [
                {
                    "en": "Placing stones on the edge of the board",
                    "es": "Colocar piedras en el borde del tablero",
                    "de": "Das Setzen von Steinen am Rand des Brettes",
                    "nl": "Het plaatsen van stenen op de rand van het bord"
                },
                {
                    "en": "Infinite repetition of the same board position",
                    "es": "La repetición infinita de la misma posición",
                    "de": "Die endlose Wiederholung derselben Position",
                    "nl": "Oneindige herhaling van dezelfde bordpositie"
                },
                {
                    "en": "Capturing more than three stones at once",
                    "es": "Capturar más de tres piedras a la vez",
                    "de": "Das Schlagen von mehr als drei Steinen gleichzeitig",
                    "nl": "Het veroveren van meer dan drie stenen tegelijk"
                },
                {
                    "en": "Playing on your own territory",
                    "es": "Jugar en tu propio territorio",
                    "de": "Das Spielen im eigenen Gebiet",
                    "nl": "Spelen op je eigen gebied"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "The ko rule prevents infinite repetition by forbidding a player from immediately recapturing a stone that would recreate the previous board position.",
                "es": "La regla del ko impide la repetición infinita al prohibir recapturar inmediatamente una piedra que recrearía la posición anterior.",
                "de": "Die Ko-Regel verhindert endlose Wiederholung, indem sie verbietet, einen Stein sofort zurückzuschlagen, der die vorherige Position wiederherstellen würde.",
                "nl": "De ko-regel voorkomt oneindige herhaling door te verbieden dat een speler direct een steen terugneemt die de vorige positie zou herstellen."
            }
        },
        {
            "question": {
                "en": "What is a 'group' in Go?",
                "es": "¿Qué es un 'grupo' en Go?",
                "de": "Was ist eine 'Gruppe' in Go?",
                "nl": "Wat is een 'groep' in Go?"
            },
            "options": [
                {
                    "en": "Connected stones of the same color",
                    "es": "Piedras conectadas del mismo color",
                    "de": "Verbundene Steine derselben Farbe",
                    "nl": "Verbonden stenen van dezelfde kleur"
                },
                {
                    "en": "Any five stones on the board",
                    "es": "Cualquier cinco piedras en el tablero",
                    "de": "Beliebige fünf Steine auf dem Brett",
                    "nl": "Willekeurige vijf stenen op het bord"
                },
                {
                    "en": "Stones placed in a circle pattern",
                    "es": "Piedras colocadas en un patrón circular",
                    "de": "Steine in einem Kreismuster",
                    "nl": "Stenen geplaatst in een cirkelpatroon"
                },
                {
                    "en": "A team of players in a tournament",
                    "es": "Un equipo de jugadores en un torneo",
                    "de": "Ein Team von Spielern in einem Turnier",
                    "nl": "Een team van spelers in een toernooi"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A group in Go consists of stones of the same color that are connected along the grid lines. They share liberties and are captured together.",
                "es": "Un grupo en Go consiste en piedras del mismo color conectadas por las líneas. Comparten libertades y se capturan juntas.",
                "de": "Eine Gruppe in Go besteht aus Steinen derselben Farbe, die entlang der Linien verbunden sind. Sie teilen Freiheiten und werden zusammen geschlagen.",
                "nl": "Een groep in Go bestaat uit stenen van dezelfde kleur die langs de lijnen verbonden zijn. Ze delen vrijheden en worden samen veroverd."
            }
        },
        {
            "question": {
                "en": "What is an 'eye' in Go?",
                "es": "¿Qué es un 'ojo' en Go?",
                "de": "Was ist ein 'Auge' in Go?",
                "nl": "Wat is een 'oog' in Go?"
            },
            "options": [
                {
                    "en": "A captured stone on the board",
                    "es": "Una piedra capturada en el tablero",
                    "de": "Ein geschlagener Stein auf dem Brett",
                    "nl": "Een veroverde steen op het bord"
                },
                {
                    "en": "An empty space surrounded by one color",
                    "es": "Un espacio vacío rodeado por un color",
                    "de": "Ein leerer Raum umgeben von einer Farbe",
                    "nl": "Een lege ruimte omringd door één kleur"
                },
                {
                    "en": "A stone placed on a star point",
                    "es": "Una piedra en un punto estrella",
                    "de": "Ein Stein auf einem Sternpunkt",
                    "nl": "Een steen op een sterpunt"
                },
                {
                    "en": "The center intersection of the board",
                    "es": "La intersección central del tablero",
                    "de": "Der zentrale Schnittpunkt des Brettes",
                    "nl": "Het centrale kruispunt van het bord"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "An eye is an empty intersection completely surrounded by stones of one color. A group with two eyes cannot be captured.",
                "es": "Un ojo es una intersección vacía completamente rodeada por piedras de un color. Un grupo con dos ojos no puede ser capturado.",
                "de": "Ein Auge ist ein leerer Schnittpunkt, der vollständig von Steinen einer Farbe umgeben ist. Eine Gruppe mit zwei Augen ist unschlagbar.",
                "nl": "Een oog is een leeg kruispunt volledig omringd door stenen van één kleur. Een groep met twee ogen kan niet veroverd worden."
            }
        },
        {
            "question": {
                "en": "Why are two eyes important for a group in Go?",
                "es": "¿Por qué son importantes dos ojos para un grupo en Go?",
                "de": "Warum sind zwei Augen für eine Gruppe in Go wichtig?",
                "nl": "Waarom zijn twee ogen belangrijk voor een groep in Go?"
            },
            "options": [
                {
                    "en": "They allow the group to move across the board",
                    "es": "Permiten que el grupo se mueva por el tablero",
                    "de": "Sie erlauben der Gruppe, sich über das Brett zu bewegen",
                    "nl": "Ze laten de groep over het bord bewegen"
                },
                {
                    "en": "They earn bonus points at the end of the game",
                    "es": "Otorgan puntos extra al final del juego",
                    "de": "Sie bringen Bonuspunkte am Ende des Spiels",
                    "nl": "Ze leveren bonuspunten op aan het einde van het spel"
                },
                {
                    "en": "They make the group unconditionally alive",
                    "es": "Hacen que el grupo esté incondicionalmente vivo",
                    "de": "Sie machen die Gruppe bedingungslos lebendig",
                    "nl": "Ze maken de groep onvoorwaardelijk levend"
                },
                {
                    "en": "They double the value of captured stones",
                    "es": "Duplican el valor de las piedras capturadas",
                    "de": "Sie verdoppeln den Wert geschlagener Steine",
                    "nl": "Ze verdubbelen de waarde van veroverde stenen"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "A group with two true eyes is unconditionally alive because the opponent cannot fill both eyes at the same time without violating the self-capture rule.",
                "es": "Un grupo con dos ojos verdaderos está incondicionalmente vivo porque el oponente no puede llenar ambos ojos al mismo tiempo.",
                "de": "Eine Gruppe mit zwei echten Augen ist bedingungslos lebendig, da der Gegner nicht beide Augen gleichzeitig füllen kann.",
                "nl": "Een groep met twee echte ogen is onvoorwaardelijk levend omdat de tegenstander niet beide ogen tegelijk kan vullen."
            }
        },
        {
            "question": {
                "en": "What is 'seki' in Go?",
                "es": "¿Qué es 'seki' en Go?",
                "de": "Was ist 'Seki' in Go?",
                "nl": "Wat is 'seki' in Go?"
            },
            "options": [
                {
                    "en": "A situation where neither player can capture",
                    "es": "Una situación donde ningún jugador puede capturar",
                    "de": "Eine Situation, in der keiner schlagen kann",
                    "nl": "Een situatie waarin geen speler kan veroveren"
                },
                {
                    "en": "An opening strategy for Black",
                    "es": "Una estrategia de apertura para Negro",
                    "de": "Eine Eröffnungsstrategie für Schwarz",
                    "nl": "Een openingsstrategie voor Zwart"
                },
                {
                    "en": "A type of handicap stone placement",
                    "es": "Un tipo de colocación de piedras de ventaja",
                    "de": "Eine Art Vorgabesteinplatzierung",
                    "nl": "Een soort plaatsing van voorgiftstenen"
                },
                {
                    "en": "The Japanese name for the board",
                    "es": "El nombre japonés del tablero",
                    "de": "Der japanische Name für das Brett",
                    "nl": "De Japanse naam voor het bord"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Seki is a mutual life situation where two groups coexist because neither player can capture the other without losing their own group.",
                "es": "Seki es una situación de vida mutua donde dos grupos coexisten porque ninguno puede capturar al otro sin perder su propio grupo.",
                "de": "Seki ist eine gegenseitige Lebenssituation, bei der zwei Gruppen koexistieren, da keine die andere schlagen kann, ohne die eigene zu verlieren.",
                "nl": "Seki is een wederzijdse levenssituatie waarbij twee groepen naast elkaar bestaan omdat geen van beide kan veroveren zonder de eigen groep te verliezen."
            }
        },
        {
            "question": {
                "en": "Where did the game of Go originate?",
                "es": "¿Dónde se originó el juego de Go?",
                "de": "Wo wurde das Spiel Go erfunden?",
                "nl": "Waar is het spel Go ontstaan?"
            },
            "options": [
                {
                    "en": "Japan",
                    "es": "Japón",
                    "de": "Japan",
                    "nl": "Japan"
                },
                {
                    "en": "Korea",
                    "es": "Corea",
                    "de": "Korea",
                    "nl": "Korea"
                },
                {
                    "en": "China",
                    "es": "China",
                    "de": "China",
                    "nl": "China"
                },
                {
                    "en": "India",
                    "es": "India",
                    "de": "Indien",
                    "nl": "India"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "Go originated in China over 2,500 years ago, making it one of the oldest board games still played today.",
                "es": "El Go se originó en China hace más de 2.500 años, siendo uno de los juegos de mesa más antiguos que aún se juegan.",
                "de": "Go entstand vor über 2.500 Jahren in China und ist damit eines der ältesten noch gespielten Brettspiele.",
                "nl": "Go is meer dan 2.500 jaar geleden in China ontstaan en is daarmee een van de oudste bordspellen die nog gespeeld worden."
            }
        },
        {
            "question": {
                "en": "What is Go called in Chinese?",
                "es": "¿Cómo se llama el Go en chino?",
                "de": "Wie heißt Go auf Chinesisch?",
                "nl": "Hoe heet Go in het Chinees?"
            },
            "options": [
                {
                    "en": "Shogi",
                    "es": "Shogi",
                    "de": "Shogi",
                    "nl": "Shogi"
                },
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
                    "en": "Xiangqi",
                    "es": "Xiangqi",
                    "de": "Xiangqi",
                    "nl": "Xiangqi"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "Go is called Weiqi in Chinese, meaning 'encircling game'. It is known as Baduk in Korean and Igo or Go in Japanese.",
                "es": "El Go se llama Weiqi en chino, que significa 'juego de rodear'. Se conoce como Baduk en coreano e Igo en japonés.",
                "de": "Go heißt auf Chinesisch Weiqi, was 'Umzingelungsspiel' bedeutet. Auf Koreanisch heißt es Baduk und auf Japanisch Igo.",
                "nl": "Go heet Weiqi in het Chinees, wat 'omsingelspel' betekent. In het Koreaans heet het Baduk en in het Japans Igo."
            }
        },
        {
            "question": {
                "en": "What are the small marked dots on a Go board called?",
                "es": "¿Cómo se llaman los puntos marcados en un tablero de Go?",
                "de": "Wie heißen die markierten Punkte auf einem Go-Brett?",
                "nl": "Hoe heten de gemarkeerde punten op een Go-bord?"
            },
            "options": [
                {
                    "en": "Star points (hoshi)",
                    "es": "Puntos estrella (hoshi)",
                    "de": "Sternpunkte (Hoshi)",
                    "nl": "Sterpunten (hoshi)"
                },
                {
                    "en": "Power points",
                    "es": "Puntos de poder",
                    "de": "Machtpunkte",
                    "nl": "Krachtpunten"
                },
                {
                    "en": "Base points",
                    "es": "Puntos base",
                    "de": "Basispunkte",
                    "nl": "Basispunten"
                },
                {
                    "en": "Guard points",
                    "es": "Puntos de guardia",
                    "de": "Wachpunkte",
                    "nl": "Bewakingspunten"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The marked dots on a Go board are called star points or hoshi. On a 19x19 board there are nine star points, including the center point called tengen.",
                "es": "Los puntos marcados se llaman puntos estrella o hoshi. En un tablero 19x19 hay nueve, incluyendo el centro llamado tengen.",
                "de": "Die markierten Punkte heißen Sternpunkte oder Hoshi. Auf einem 19x19-Brett gibt es neun, einschließlich des Mittelpunkts Tengen.",
                "nl": "De gemarkeerde punten heten sterpunten of hoshi. Op een 19x19-bord zijn er negen, inclusief het middenpunt genaamd tengen."
            }
        },
        {
            "question": {
                "en": "What happens when both players pass consecutively?",
                "es": "¿Qué ocurre cuando ambos jugadores pasan seguidos?",
                "de": "Was passiert, wenn beide Spieler nacheinander passen?",
                "nl": "Wat gebeurt er als beide spelers achtereenvolgens passen?"
            },
            "options": [
                {
                    "en": "The game is declared a draw",
                    "es": "El juego se declara empate",
                    "de": "Das Spiel wird als Unentschieden erklärt",
                    "nl": "Het spel wordt een gelijkspel"
                },
                {
                    "en": "The game ends and scoring begins",
                    "es": "El juego termina y comienza el conteo",
                    "de": "Das Spiel endet und die Wertung beginnt",
                    "nl": "Het spel eindigt en de telling begint"
                },
                {
                    "en": "The players switch colors",
                    "es": "Los jugadores cambian de color",
                    "de": "Die Spieler tauschen die Farben",
                    "nl": "De spelers wisselen van kleur"
                },
                {
                    "en": "An extra round of play is added",
                    "es": "Se añade una ronda extra de juego",
                    "de": "Eine zusätzliche Runde wird hinzugefügt",
                    "nl": "Een extra ronde wordt toegevoegd"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "When both players pass consecutively, the game ends and the score is counted. Players pass when they believe no more beneficial moves remain.",
                "es": "Cuando ambos jugadores pasan consecutivamente, el juego termina y se cuenta la puntuación.",
                "de": "Wenn beide Spieler nacheinander passen, endet das Spiel und die Punkte werden gezählt.",
                "nl": "Als beide spelers achtereenvolgens passen, eindigt het spel en wordt de score geteld."
            }
        },
        {
            "question": {
                "en": "What is a 'dead' stone in Go?",
                "es": "¿Qué es una piedra 'muerta' en Go?",
                "de": "Was ist ein 'toter' Stein in Go?",
                "nl": "Wat is een 'dode' steen in Go?"
            },
            "options": [
                {
                    "en": "A stone that has been removed from the board",
                    "es": "Una piedra que ha sido retirada del tablero",
                    "de": "Ein Stein, der vom Brett entfernt wurde",
                    "nl": "Een steen die van het bord is verwijderd"
                },
                {
                    "en": "A stone that cannot avoid capture",
                    "es": "Una piedra que no puede evitar ser capturada",
                    "de": "Ein Stein, der nicht dem Schlagen entgehen kann",
                    "nl": "Een steen die verovering niet kan vermijden"
                },
                {
                    "en": "A stone placed outside the board boundary",
                    "es": "Una piedra colocada fuera del tablero",
                    "de": "Ein Stein außerhalb des Brettes",
                    "nl": "Een steen buiten het bord geplaatst"
                },
                {
                    "en": "A stone worth zero points",
                    "es": "Una piedra que vale cero puntos",
                    "de": "Ein Stein, der null Punkte wert ist",
                    "nl": "Een steen die nul punten waard is"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "A dead stone is one that cannot avoid being captured with correct play. Dead stones are removed during scoring and counted as prisoners.",
                "es": "Una piedra muerta es aquella que no puede evitar ser capturada con juego correcto. Se retiran al contar puntos.",
                "de": "Ein toter Stein kann bei korrektem Spiel nicht dem Schlagen entgehen. Tote Steine werden bei der Wertung entfernt.",
                "nl": "Een dode steen kan bij correct spel niet vermijden veroverd te worden. Dode stenen worden bij de telling verwijderd."
            }
        },
        {
            "question": {
                "en": "What is a handicap in Go?",
                "es": "¿Qué es una ventaja en Go?",
                "de": "Was ist eine Vorgabe in Go?",
                "nl": "Wat is een voorgift in Go?"
            },
            "options": [
                {
                    "en": "A time limit imposed on the stronger player",
                    "es": "Un límite de tiempo para el jugador más fuerte",
                    "de": "Ein Zeitlimit für den stärkeren Spieler",
                    "nl": "Een tijdslimiet voor de sterkere speler"
                },
                {
                    "en": "Extra stones placed by the weaker player",
                    "es": "Piedras extra colocadas por el jugador más débil",
                    "de": "Zusätzliche Steine für den schwächeren Spieler",
                    "nl": "Extra stenen voor de zwakkere speler"
                },
                {
                    "en": "Removing pieces from the stronger player",
                    "es": "Quitar piezas al jugador más fuerte",
                    "de": "Entfernen von Steinen des stärkeren Spielers",
                    "nl": "Stenen van de sterkere speler verwijderen"
                },
                {
                    "en": "A reduced board size for the stronger player",
                    "es": "Un tablero más pequeño para el más fuerte",
                    "de": "Ein kleineres Brett für den stärkeren Spieler",
                    "nl": "Een kleiner bord voor de sterkere speler"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "A handicap allows the weaker player to place extra stones on the board before the game begins, balancing the skill difference.",
                "es": "La ventaja permite al jugador más débil colocar piedras extra en el tablero antes de empezar, equilibrando la diferencia de habilidad.",
                "de": "Eine Vorgabe erlaubt dem schwächeren Spieler, vor Spielbeginn zusätzliche Steine zu setzen, um den Unterschied auszugleichen.",
                "nl": "Een voorgift laat de zwakkere speler extra stenen plaatsen voor het spel begint, om het niveauverschil te compenseren."
            }
        },
        {
            "question": {
                "en": "What smaller board size is popular for beginners?",
                "es": "¿Qué tablero más pequeño es popular para principiantes?",
                "de": "Welche kleinere Brettgröße ist bei Anfängern beliebt?",
                "nl": "Welk kleiner bord is populair voor beginners?"
            },
            "options": [
                {
                    "en": "5 x 5",
                    "es": "5 x 5",
                    "de": "5 x 5",
                    "nl": "5 x 5"
                },
                {
                    "en": "7 x 7",
                    "es": "7 x 7",
                    "de": "7 x 7",
                    "nl": "7 x 7"
                },
                {
                    "en": "9 x 9",
                    "es": "9 x 9",
                    "de": "9 x 9",
                    "nl": "9 x 9"
                },
                {
                    "en": "11 x 11",
                    "es": "11 x 11",
                    "de": "11 x 11",
                    "nl": "11 x 11"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "The 9x9 board is very popular for beginners because games are shorter and simpler while still teaching core Go concepts.",
                "es": "El tablero 9x9 es muy popular para principiantes porque las partidas son más cortas y sencillas.",
                "de": "Das 9x9-Brett ist bei Anfängern sehr beliebt, da Spiele kürzer und einfacher sind und dennoch Go-Grundlagen vermitteln.",
                "nl": "Het 9x9-bord is populair bij beginners omdat de partijen korter en eenvoudiger zijn, maar toch de basis van Go leren."
            }
        },
        {
            "question": {
                "en": "What is 'territory scoring' in Go?",
                "es": "¿Qué es el 'conteo por territorio' en Go?",
                "de": "Was ist 'Gebietswertung' in Go?",
                "nl": "Wat is 'gebiedstelling' in Go?"
            },
            "options": [
                {
                    "en": "Counting empty points surrounded by your stones",
                    "es": "Contar puntos vacíos rodeados por tus piedras",
                    "de": "Leere Punkte zählen, die von eigenen Steinen umgeben sind",
                    "nl": "Lege punten tellen omringd door jouw stenen"
                },
                {
                    "en": "Counting all stones on the board",
                    "es": "Contar todas las piedras en el tablero",
                    "de": "Alle Steine auf dem Brett zählen",
                    "nl": "Alle stenen op het bord tellen"
                },
                {
                    "en": "Counting moves made during the game",
                    "es": "Contar movimientos hechos durante el juego",
                    "de": "Züge während des Spiels zählen",
                    "nl": "Zetten tellen die tijdens het spel zijn gedaan"
                },
                {
                    "en": "Counting stones captured by each player",
                    "es": "Contar piedras capturadas por cada jugador",
                    "de": "Von jedem Spieler geschlagene Steine zählen",
                    "nl": "Stenen tellen die door elke speler veroverd zijn"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Territory scoring counts the empty intersections surrounded by a player's stones, plus captured stones. This is the Japanese scoring method.",
                "es": "El conteo por territorio cuenta las intersecciones vacías rodeadas por piedras de un jugador, más las piedras capturadas. Es el método japonés.",
                "de": "Die Gebietswertung zählt leere Schnittpunkte, die von Steinen eines Spielers umgeben sind, plus geschlagene Steine. Dies ist die japanische Methode.",
                "nl": "Gebiedstelling telt de lege kruispunten omringd door stenen van een speler, plus veroverde stenen. Dit is de Japanse methode."
            }
        },
        {
            "question": {
                "en": "What is the 'self-capture' rule in Go?",
                "es": "¿Qué es la regla de 'autocaptura' en Go?",
                "de": "Was ist die 'Selbstfang'-Regel in Go?",
                "nl": "Wat is de 'zelfverovering'-regel in Go?"
            },
            "options": [
                {
                    "en": "You can capture your own stones for points",
                    "es": "Puedes capturar tus propias piedras por puntos",
                    "de": "Man kann eigene Steine für Punkte schlagen",
                    "nl": "Je kunt je eigen stenen voor punten veroveren"
                },
                {
                    "en": "You cannot place a stone with no liberties",
                    "es": "No puedes colocar una piedra sin libertades",
                    "de": "Man darf keinen Stein ohne Freiheiten setzen",
                    "nl": "Je mag geen steen plaatsen zonder vrijheden"
                },
                {
                    "en": "You must capture a stone each turn",
                    "es": "Debes capturar una piedra cada turno",
                    "de": "Man muss jeden Zug einen Stein schlagen",
                    "nl": "Je moet elke beurt een steen veroveren"
                },
                {
                    "en": "You can remove your own stones voluntarily",
                    "es": "Puedes retirar tus propias piedras voluntariamente",
                    "de": "Man kann eigene Steine freiwillig entfernen",
                    "nl": "Je kunt je eigen stenen vrijwillig verwijderen"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "Under most rulesets, you cannot place a stone where it would have no liberties unless the move captures opponent stones first.",
                "es": "En la mayoría de las reglas, no puedes colocar una piedra sin libertades a menos que el movimiento capture piedras del oponente.",
                "de": "In den meisten Regeln darf man keinen Stein ohne Freiheiten setzen, es sei denn, der Zug schlägt zuerst gegnerische Steine.",
                "nl": "Onder de meeste regels mag je geen steen plaatsen zonder vrijheden, tenzij de zet eerst stenen van de tegenstander verovert."
            }
        },
        {
            "question": {
                "en": "What is a 'ladder' in Go?",
                "es": "¿Qué es una 'escalera' en Go?",
                "de": "Was ist eine 'Leiter' in Go?",
                "nl": "Wat is een 'ladder' in Go?"
            },
            "options": [
                {
                    "en": "A ranking system for players",
                    "es": "Un sistema de clasificación de jugadores",
                    "de": "Ein Ranglistensystem für Spieler",
                    "nl": "Een ranglijstsysteem voor spelers"
                },
                {
                    "en": "A zigzag chase pattern to capture stones",
                    "es": "Un patrón de persecución en zigzag para capturar",
                    "de": "Ein Zickzack-Verfolgungsmuster zum Schlagen",
                    "nl": "Een zigzagpatroon om stenen te veroveren"
                },
                {
                    "en": "A method of counting territory",
                    "es": "Un método de contar territorio",
                    "de": "Eine Methode zum Zählen von Gebiet",
                    "nl": "Een methode om gebied te tellen"
                },
                {
                    "en": "A way to place handicap stones",
                    "es": "Una forma de colocar piedras de ventaja",
                    "de": "Eine Art, Vorgabesteine zu setzen",
                    "nl": "Een manier om voorgiftstenen te plaatsen"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "A ladder is a zigzag chase where stones in atari try to escape but are repeatedly put back in atari, forming a staircase pattern across the board.",
                "es": "Una escalera es una persecución en zigzag donde piedras en atari intentan escapar pero son puestas repetidamente en atari.",
                "de": "Eine Leiter ist eine Zickzack-Verfolgung, bei der Steine im Atari zu entkommen versuchen, aber immer wieder ins Atari gesetzt werden.",
                "nl": "Een ladder is een zigzagachtervolging waarbij stenen in atari proberen te ontsnappen maar steeds weer in atari worden gezet."
            }
        },
        {
            "question": {
                "en": "What is a 'net' (geta) in Go?",
                "es": "¿Qué es una 'red' (geta) en Go?",
                "de": "Was ist ein 'Netz' (Geta) in Go?",
                "nl": "Wat is een 'net' (geta) in Go?"
            },
            "options": [
                {
                    "en": "A technique to trap stones without a ladder",
                    "es": "Una técnica para atrapar piedras sin escalera",
                    "de": "Eine Technik zum Fangen ohne Leiter",
                    "nl": "Een techniek om stenen te vangen zonder ladder"
                },
                {
                    "en": "A type of fishing net used as a game board",
                    "es": "Un tipo de red de pesca usada como tablero",
                    "de": "Ein Fischernetz als Spielbrett",
                    "nl": "Een soort visnet gebruikt als speelbord"
                },
                {
                    "en": "A protective case for Go stones",
                    "es": "Un estuche protector para las piedras",
                    "de": "Eine Schutzhülle für Go-Steine",
                    "nl": "Een beschermhoes voor Go-stenen"
                },
                {
                    "en": "The grid pattern on the board",
                    "es": "El patrón de rejilla en el tablero",
                    "de": "Das Gittermuster auf dem Brett",
                    "nl": "Het rasterpatroon op het bord"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A net or geta is a technique where stones are loosely surrounded so they cannot escape, even though they are not in direct atari.",
                "es": "Una red o geta es una técnica donde las piedras están rodeadas holgadamente y no pueden escapar, aunque no estén en atari directo.",
                "de": "Ein Netz oder Geta ist eine Technik, bei der Steine locker umstellt werden, sodass sie nicht entkommen können, auch ohne direktes Atari.",
                "nl": "Een net of geta is een techniek waarbij stenen los omsingeld worden zodat ze niet kunnen ontsnappen, ook al staan ze niet direct in atari."
            }
        },
        {
            "question": {
                "en": "What is 'influence' in Go strategy?",
                "es": "¿Qué es la 'influencia' en la estrategia de Go?",
                "de": "Was ist 'Einfluss' in der Go-Strategie?",
                "nl": "Wat is 'invloed' in Go-strategie?"
            },
            "options": [
                {
                    "en": "Points earned from captured stones",
                    "es": "Puntos obtenidos de piedras capturadas",
                    "de": "Punkte aus geschlagenen Steinen",
                    "nl": "Punten verdiend door veroverde stenen"
                },
                {
                    "en": "The power of stones to affect distant areas",
                    "es": "El poder de las piedras para afectar áreas distantes",
                    "de": "Die Macht der Steine, entfernte Bereiche zu beeinflussen",
                    "nl": "De kracht van stenen om verre gebieden te beïnvloeden"
                },
                {
                    "en": "The number of stones a player has placed",
                    "es": "El número de piedras que un jugador ha colocado",
                    "de": "Die Anzahl der Steine, die ein Spieler gesetzt hat",
                    "nl": "Het aantal stenen dat een speler heeft geplaatst"
                },
                {
                    "en": "The rank of a player",
                    "es": "El rango de un jugador",
                    "de": "Der Rang eines Spielers",
                    "nl": "De rang van een speler"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "Influence refers to the power that stones project over distant parts of the board, which can potentially become territory later in the game.",
                "es": "La influencia se refiere al poder que las piedras proyectan sobre partes distantes del tablero, que pueden convertirse en territorio.",
                "de": "Einfluss bezeichnet die Macht, die Steine auf entfernte Bereiche des Brettes ausüben und die später Gebiet werden kann.",
                "nl": "Invloed verwijst naar de kracht die stenen uitoefenen op verre delen van het bord, die later gebied kunnen worden."
            }
        },
        {
            "question": {
                "en": "What is Go called in Korean?",
                "es": "¿Cómo se llama el Go en coreano?",
                "de": "Wie heißt Go auf Koreanisch?",
                "nl": "Hoe heet Go in het Koreaans?"
            },
            "options": [
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
                    "en": "Baduk",
                    "es": "Baduk",
                    "de": "Baduk",
                    "nl": "Baduk"
                },
                {
                    "en": "Mahjong",
                    "es": "Mahjong",
                    "de": "Mahjong",
                    "nl": "Mahjong"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "Go is called Baduk in Korean. South Korea has produced many world-champion Go players and has a strong professional Go scene.",
                "es": "El Go se llama Baduk en coreano. Corea del Sur ha producido muchos campeones mundiales de Go.",
                "de": "Go heißt auf Koreanisch Baduk. Südkorea hat viele Go-Weltmeister hervorgebracht.",
                "nl": "Go heet Baduk in het Koreaans. Zuid-Korea heeft veel Go-wereldkampioenen voortgebracht."
            }
        },
        {
            "question": {
                "en": "What is a 'snap-back' in Go?",
                "es": "¿Qué es un 'snap-back' en Go?",
                "de": "Was ist ein 'Snap-Back' in Go?",
                "nl": "Wat is een 'snap-back' in Go?"
            },
            "options": [
                {
                    "en": "Recapturing after allowing a stone to be taken",
                    "es": "Recapturar después de permitir que tomen una piedra",
                    "de": "Zurückschlagen, nachdem ein Stein genommen wurde",
                    "nl": "Terugveroveren nadat een steen genomen is"
                },
                {
                    "en": "Taking back a move already played",
                    "es": "Retirar un movimiento ya hecho",
                    "de": "Einen bereits gemachten Zug zurücknehmen",
                    "nl": "Een al gedane zet terugnemen"
                },
                {
                    "en": "Returning captured stones to the bowl",
                    "es": "Devolver piedras capturadas al cuenco",
                    "de": "Geschlagene Steine in die Schale zurücklegen",
                    "nl": "Veroverde stenen terugleggen in de pot"
                },
                {
                    "en": "Quickly finishing a game",
                    "es": "Terminar rápidamente un juego",
                    "de": "Ein Spiel schnell beenden",
                    "nl": "Een spel snel beëindigen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A snap-back is a tactic where you sacrifice a stone, allowing the opponent to capture it, then immediately recapture a larger group.",
                "es": "Un snap-back es una táctica donde sacrificas una piedra, permitiendo que el oponente la capture, y luego recapturas un grupo mayor.",
                "de": "Ein Snap-Back ist eine Taktik, bei der man einen Stein opfert und dann sofort eine größere Gruppe zurückschlägt.",
                "nl": "Een snap-back is een tactiek waarbij je een steen offert en vervolgens direct een grotere groep terugverovert."
            }
        },
        {
            "question": {
                "en": "What is the center point on a Go board called?",
                "es": "¿Cómo se llama el punto central en un tablero de Go?",
                "de": "Wie heißt der Mittelpunkt auf einem Go-Brett?",
                "nl": "Hoe heet het middenpunt op een Go-bord?"
            },
            "options": [
                {
                    "en": "Hoshi",
                    "es": "Hoshi",
                    "de": "Hoshi",
                    "nl": "Hoshi"
                },
                {
                    "en": "Tengen",
                    "es": "Tengen",
                    "de": "Tengen",
                    "nl": "Tengen"
                },
                {
                    "en": "Joseki",
                    "es": "Joseki",
                    "de": "Joseki",
                    "nl": "Joseki"
                },
                {
                    "en": "Fuseki",
                    "es": "Fuseki",
                    "de": "Fuseki",
                    "nl": "Fuseki"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "The center point on a 19x19 Go board is called tengen. It is located at the intersection of the 10th line in both directions.",
                "es": "El punto central en un tablero de Go 19x19 se llama tengen. Está en la intersección de la línea 10 en ambas direcciones.",
                "de": "Der Mittelpunkt auf einem 19x19-Go-Brett heißt Tengen. Er befindet sich am Schnittpunkt der 10. Linie in beiden Richtungen.",
                "nl": "Het middenpunt op een 19x19 Go-bord heet tengen. Het ligt op het kruispunt van de 10e lijn in beide richtingen."
            }
        },
        {
            "question": {
                "en": "What does 'joseki' mean in Go?",
                "es": "¿Qué significa 'joseki' en Go?",
                "de": "Was bedeutet 'Joseki' in Go?",
                "nl": "Wat betekent 'joseki' in Go?"
            },
            "options": [
                {
                    "en": "The final move of the game",
                    "es": "El último movimiento del juego",
                    "de": "Der letzte Zug des Spiels",
                    "nl": "De laatste zet van het spel"
                },
                {
                    "en": "Established corner sequences considered fair",
                    "es": "Secuencias de esquina establecidas y consideradas justas",
                    "de": "Etablierte Ecksequenzen, die als fair gelten",
                    "nl": "Gevestigde hoeksequenties die als eerlijk gelden"
                },
                {
                    "en": "An illegal move in the game",
                    "es": "Un movimiento ilegal en el juego",
                    "de": "Ein illegaler Zug im Spiel",
                    "nl": "Een illegale zet in het spel"
                },
                {
                    "en": "A Japanese tournament format",
                    "es": "Un formato de torneo japonés",
                    "de": "Ein japanisches Turnierformat",
                    "nl": "Een Japans toernooiformaat"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "Joseki are established sequences of moves, usually in the corners, where both sides get a roughly equal result. They are studied patterns.",
                "es": "Los joseki son secuencias establecidas de movimientos, generalmente en las esquinas, donde ambos lados obtienen un resultado aproximadamente igual.",
                "de": "Joseki sind etablierte Zugfolgen, meist in den Ecken, bei denen beide Seiten ein ungefähr gleiches Ergebnis erzielen.",
                "nl": "Joseki zijn gevestigde zetreeksen, meestal in de hoeken, waarbij beide zijden een ongeveer gelijk resultaat krijgen."
            }
        },
        {
            "question": {
                "en": "What does 'fuseki' refer to in Go?",
                "es": "¿A qué se refiere 'fuseki' en Go?",
                "de": "Was bedeutet 'Fuseki' in Go?",
                "nl": "Waar verwijst 'fuseki' naar in Go?"
            },
            "options": [
                {
                    "en": "The endgame phase",
                    "es": "La fase final del juego",
                    "de": "Die Endspielphase",
                    "nl": "De eindfase van het spel"
                },
                {
                    "en": "The opening phase of the game",
                    "es": "La fase de apertura del juego",
                    "de": "Die Eröffnungsphase des Spiels",
                    "nl": "De openingsfase van het spel"
                },
                {
                    "en": "A type of captured stone",
                    "es": "Un tipo de piedra capturada",
                    "de": "Eine Art geschlagener Stein",
                    "nl": "Een soort veroverde steen"
                },
                {
                    "en": "The scoring method used in Japan",
                    "es": "El método de puntuación usado en Japón",
                    "de": "Die in Japan verwendete Wertungsmethode",
                    "nl": "De scoremethode die in Japan wordt gebruikt"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "Fuseki refers to the opening phase of a Go game, where players stake out areas of the board and establish their positions.",
                "es": "Fuseki se refiere a la fase de apertura de una partida de Go, donde los jugadores marcan áreas del tablero.",
                "de": "Fuseki bezeichnet die Eröffnungsphase eines Go-Spiels, in der die Spieler Bereiche abstecken und ihre Positionen aufbauen.",
                "nl": "Fuseki verwijst naar de openingsfase van een Go-spel, waarin spelers gebieden claimen en hun posities opbouwen."
            }
        },
        {
            "question": {
                "en": "What are the three main phases of a Go game?",
                "es": "¿Cuáles son las tres fases principales de un juego de Go?",
                "de": "Was sind die drei Hauptphasen eines Go-Spiels?",
                "nl": "Wat zijn de drie hoofdfasen van een Go-spel?"
            },
            "options": [
                {
                    "en": "Attack, defend, and capture",
                    "es": "Atacar, defender y capturar",
                    "de": "Angriff, Verteidigung und Schlagen",
                    "nl": "Aanvallen, verdedigen en veroveren"
                },
                {
                    "en": "Opening, middle game, and endgame",
                    "es": "Apertura, medio juego y final",
                    "de": "Eröffnung, Mittelspiel und Endspiel",
                    "nl": "Opening, middenspel en eindspel"
                },
                {
                    "en": "Setup, play, and counting",
                    "es": "Preparación, juego y conteo",
                    "de": "Aufbau, Spiel und Zählen",
                    "nl": "Opzet, spelen en tellen"
                },
                {
                    "en": "Corner, side, and center",
                    "es": "Esquina, lado y centro",
                    "de": "Ecke, Seite und Mitte",
                    "nl": "Hoek, zijkant en midden"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "A Go game has three main phases: the opening (fuseki), where positions are established; the middle game, with fighting; and the endgame (yose).",
                "es": "Un juego de Go tiene tres fases: la apertura (fuseki), el medio juego con combates, y el final (yose).",
                "de": "Ein Go-Spiel hat drei Hauptphasen: die Eröffnung (Fuseki), das Mittelspiel mit Kämpfen und das Endspiel (Yose).",
                "nl": "Een Go-spel heeft drie hoofdfasen: de opening (fuseki), het middenspel met gevechten, en het eindspel (yose)."
            }
        },
        {
            "question": {
                "en": "What are Go stones traditionally made of?",
                "es": "¿De qué están hechas tradicionalmente las piedras de Go?",
                "de": "Woraus bestehen Go-Steine traditionell?",
                "nl": "Waar zijn Go-stenen traditioneel van gemaakt?"
            },
            "options": [
                {
                    "en": "Wood and marble",
                    "es": "Madera y mármol",
                    "de": "Holz und Marmor",
                    "nl": "Hout en marmer"
                },
                {
                    "en": "Slate and clamshell",
                    "es": "Pizarra y concha de almeja",
                    "de": "Schiefer und Muschelschale",
                    "nl": "Leisteen en schelp"
                },
                {
                    "en": "Metal and ceramic",
                    "es": "Metal y cerámica",
                    "de": "Metall und Keramik",
                    "nl": "Metaal en keramiek"
                },
                {
                    "en": "Ivory and jade",
                    "es": "Marfil y jade",
                    "de": "Elfenbein und Jade",
                    "nl": "Ivoor en jade"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "Traditional Japanese Go stones are made from slate (black) and clamshell (white). These high-quality stones are prized for their feel and appearance.",
                "es": "Las piedras tradicionales japonesas de Go son de pizarra (negras) y concha de almeja (blancas), valoradas por su tacto y apariencia.",
                "de": "Traditionelle japanische Go-Steine bestehen aus Schiefer (schwarz) und Muschelschale (weiß) und sind für Gefühl und Aussehen geschätzt.",
                "nl": "Traditionele Japanse Go-stenen zijn gemaakt van leisteen (zwart) en schelp (wit), gewaardeerd om hun gevoel en uiterlijk."
            }
        },
        {
            "question": {
                "en": "What is the endgame phase called in Japanese Go?",
                "es": "¿Cómo se llama la fase final en el Go japonés?",
                "de": "Wie heißt die Endspielphase im japanischen Go?",
                "nl": "Hoe heet de eindfase in het Japanse Go?"
            },
            "options": [
                {
                    "en": "Fuseki",
                    "es": "Fuseki",
                    "de": "Fuseki",
                    "nl": "Fuseki"
                },
                {
                    "en": "Tesuji",
                    "es": "Tesuji",
                    "de": "Tesuji",
                    "nl": "Tesuji"
                },
                {
                    "en": "Yose",
                    "es": "Yose",
                    "de": "Yose",
                    "nl": "Yose"
                },
                {
                    "en": "Sente",
                    "es": "Sente",
                    "de": "Sente",
                    "nl": "Sente"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "The endgame phase in Go is called yose. During yose, players finalize boundaries and compete for the remaining small areas of territory.",
                "es": "La fase final en Go se llama yose. Durante el yose, los jugadores finalizan fronteras y compiten por las áreas restantes.",
                "de": "Die Endspielphase in Go heißt Yose. Dabei finalisieren Spieler Grenzen und kämpfen um die verbleibenden kleinen Gebiete.",
                "nl": "De eindfase in Go heet yose. Tijdens yose finaliseren spelers grenzen en strijden om de resterende kleine gebieden."
            }
        },
        {
            "question": {
                "en": "What does 'sente' mean in Go?",
                "es": "¿Qué significa 'sente' en Go?",
                "de": "Was bedeutet 'Sente' in Go?",
                "nl": "Wat betekent 'sente' in Go?"
            },
            "options": [
                {
                    "en": "Having the initiative or forcing the opponent to respond",
                    "es": "Tener la iniciativa u obligar al oponente a responder",
                    "de": "Die Initiative haben oder den Gegner zur Antwort zwingen",
                    "nl": "Het initiatief hebben of de tegenstander dwingen te reageren"
                },
                {
                    "en": "Losing a group of stones",
                    "es": "Perder un grupo de piedras",
                    "de": "Eine Gruppe von Steinen verlieren",
                    "nl": "Een groep stenen verliezen"
                },
                {
                    "en": "Passing your turn",
                    "es": "Pasar tu turno",
                    "de": "Seinen Zug passen",
                    "nl": "Je beurt overslaan"
                },
                {
                    "en": "Playing on the edge of the board",
                    "es": "Jugar en el borde del tablero",
                    "de": "Am Rand des Brettes spielen",
                    "nl": "Op de rand van het bord spelen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Sente means having the initiative. A sente move forces the opponent to respond, allowing you to maintain control of the game's pace.",
                "es": "Sente significa tener la iniciativa. Un movimiento sente obliga al oponente a responder, permitiendo controlar el ritmo del juego.",
                "de": "Sente bedeutet, die Initiative zu haben. Ein Sente-Zug zwingt den Gegner zur Antwort und erlaubt die Kontrolle über das Spieltempo.",
                "nl": "Sente betekent het initiatief hebben. Een sente-zet dwingt de tegenstander te reageren, zodat je het tempo van het spel bepaalt."
            }
        },
        {
            "question": {
                "en": "What does 'gote' mean in Go?",
                "es": "¿Qué significa 'gote' en Go?",
                "de": "Was bedeutet 'Gote' in Go?",
                "nl": "Wat betekent 'gote' in Go?"
            },
            "options": [
                {
                    "en": "A winning position",
                    "es": "Una posición ganadora",
                    "de": "Eine Gewinnposition",
                    "nl": "Een winnende positie"
                },
                {
                    "en": "Losing the initiative to the opponent",
                    "es": "Perder la iniciativa ante el oponente",
                    "de": "Die Initiative an den Gegner verlieren",
                    "nl": "Het initiatief verliezen aan de tegenstander"
                },
                {
                    "en": "A type of opening move",
                    "es": "Un tipo de movimiento de apertura",
                    "de": "Eine Art Eröffnungszug",
                    "nl": "Een soort openingszet"
                },
                {
                    "en": "An illegal board position",
                    "es": "Una posición ilegal en el tablero",
                    "de": "Eine illegale Brettposition",
                    "nl": "Een illegale bordpositie"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "Gote is the opposite of sente. It means losing the initiative, where the opponent gets to choose where to play next instead of being forced to respond.",
                "es": "Gote es lo opuesto a sente. Significa perder la iniciativa, donde el oponente elige dónde jugar en vez de ser obligado a responder.",
                "de": "Gote ist das Gegenteil von Sente. Es bedeutet, die Initiative zu verlieren, wobei der Gegner frei wählen kann, wo er spielt.",
                "nl": "Gote is het tegenovergestelde van sente. Het betekent het initiatief verliezen, waarbij de tegenstander vrij kan kiezen waar te spelen."
            }
        },
        {
            "question": {
                "en": "What is a 'tesuji' in Go?",
                "es": "¿Qué es un 'tesuji' en Go?",
                "de": "Was ist ein 'Tesuji' in Go?",
                "nl": "Wat is een 'tesuji' in Go?"
            },
            "options": [
                {
                    "en": "A clever tactical move in a local situation",
                    "es": "Un movimiento táctico ingenioso en una situación local",
                    "de": "Ein geschickter taktischer Zug in einer lokalen Situation",
                    "nl": "Een slimme tactische zet in een lokale situatie"
                },
                {
                    "en": "A move that ends the game",
                    "es": "Un movimiento que termina el juego",
                    "de": "Ein Zug, der das Spiel beendet",
                    "nl": "Een zet die het spel beëindigt"
                },
                {
                    "en": "The first move of the game",
                    "es": "El primer movimiento del juego",
                    "de": "Der erste Zug des Spiels",
                    "nl": "De eerste zet van het spel"
                },
                {
                    "en": "A move that captures exactly one stone",
                    "es": "Un movimiento que captura exactamente una piedra",
                    "de": "Ein Zug, der genau einen Stein schlägt",
                    "nl": "Een zet die precies één steen verovert"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A tesuji is a clever, often surprising tactical move that achieves the best result in a local position. Studying tesuji improves reading ability.",
                "es": "Un tesuji es un movimiento táctico ingenioso que logra el mejor resultado en una posición local. Estudiar tesuji mejora la lectura.",
                "de": "Ein Tesuji ist ein geschickter, oft überraschender taktischer Zug, der das beste lokale Ergebnis erzielt. Tesuji-Studium verbessert die Lesefähigkeit.",
                "nl": "Een tesuji is een slimme, vaak verrassende tactische zet die het beste resultaat in een lokale positie bereikt."
            }
        },
        {
            "question": {
                "en": "How many star points are on a standard 19x19 Go board?",
                "es": "¿Cuántos puntos estrella hay en un tablero estándar 19x19?",
                "de": "Wie viele Sternpunkte hat ein 19x19-Go-Brett?",
                "nl": "Hoeveel sterpunten heeft een standaard 19x19 Go-bord?"
            },
            "options": [
                {
                    "en": "5",
                    "es": "5",
                    "de": "5",
                    "nl": "5"
                },
                {
                    "en": "7",
                    "es": "7",
                    "de": "7",
                    "nl": "7"
                },
                {
                    "en": "9",
                    "es": "9",
                    "de": "9",
                    "nl": "9"
                },
                {
                    "en": "12",
                    "es": "12",
                    "de": "12",
                    "nl": "12"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "A standard 19x19 Go board has 9 star points: four in the corners, four on the sides, and one in the center (tengen).",
                "es": "Un tablero estándar 19x19 tiene 9 puntos estrella: cuatro en las esquinas, cuatro en los lados y uno en el centro (tengen).",
                "de": "Ein 19x19-Go-Brett hat 9 Sternpunkte: vier in den Ecken, vier an den Seiten und einen in der Mitte (Tengen).",
                "nl": "Een standaard 19x19 Go-bord heeft 9 sterpunten: vier in de hoeken, vier aan de zijkanten en één in het midden (tengen)."
            }
        },
        {
            "question": {
                "en": "What is 'area scoring' in Go?",
                "es": "¿Qué es el 'conteo por área' en Go?",
                "de": "Was ist 'Flächenwertung' in Go?",
                "nl": "Wat is 'gebiedstelling' in Go?"
            },
            "options": [
                {
                    "en": "Counting territory plus stones on the board",
                    "es": "Contar territorio más piedras en el tablero",
                    "de": "Gebiet plus Steine auf dem Brett zählen",
                    "nl": "Gebied plus stenen op het bord tellen"
                },
                {
                    "en": "Only counting captured stones",
                    "es": "Solo contar piedras capturadas",
                    "de": "Nur geschlagene Steine zählen",
                    "nl": "Alleen veroverde stenen tellen"
                },
                {
                    "en": "Counting moves made during the game",
                    "es": "Contar los movimientos hechos durante el juego",
                    "de": "Züge während des Spiels zählen",
                    "nl": "Zetten tellen die tijdens het spel zijn gedaan"
                },
                {
                    "en": "Measuring the physical area of stone groups",
                    "es": "Medir el área física de los grupos de piedras",
                    "de": "Die physische Fläche der Steingruppen messen",
                    "nl": "Het fysieke oppervlak van steengroepen meten"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Area scoring (Chinese rules) counts both the empty territory and the stones a player has on the board. This differs from territory scoring used in Japanese rules.",
                "es": "El conteo por área (reglas chinas) cuenta el territorio vacío y las piedras en el tablero. Difiere del conteo por territorio de las reglas japonesas.",
                "de": "Die Flächenwertung (chinesische Regeln) zählt sowohl leeres Gebiet als auch die Steine auf dem Brett, anders als die japanische Gebietswertung.",
                "nl": "Gebiedstelling (Chinese regels) telt zowel leeg gebied als stenen op het bord, anders dan de Japanse territoriumtelling."
            }
        },
        {
            "question": {
                "en": "What is a 'ko fight' in Go?",
                "es": "¿Qué es una 'pelea de ko' en Go?",
                "de": "Was ist ein 'Ko-Kampf' in Go?",
                "nl": "Wat is een 'ko-gevecht' in Go?"
            },
            "options": [
                {
                    "en": "A battle over a ko where both players use threats",
                    "es": "Una batalla sobre un ko donde ambos usan amenazas",
                    "de": "Ein Kampf um ein Ko, bei dem beide Drohungen nutzen",
                    "nl": "Een strijd om een ko waarbij beide spelers dreigingen gebruiken"
                },
                {
                    "en": "A physical fight between players",
                    "es": "Una pelea física entre jugadores",
                    "de": "Ein physischer Kampf zwischen Spielern",
                    "nl": "Een fysiek gevecht tussen spelers"
                },
                {
                    "en": "A special opening strategy",
                    "es": "Una estrategia de apertura especial",
                    "de": "Eine besondere Eröffnungsstrategie",
                    "nl": "Een speciale openingsstrategie"
                },
                {
                    "en": "The final scoring round",
                    "es": "La ronda final de puntuación",
                    "de": "Die letzte Wertungsrunde",
                    "nl": "De laatste scoreronde"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A ko fight is a strategic battle where players use ko threats elsewhere on the board to gain the right to recapture the ko position.",
                "es": "Una pelea de ko es una batalla estratégica donde los jugadores usan amenazas de ko en otras partes del tablero para poder recapturar.",
                "de": "Ein Ko-Kampf ist ein strategischer Kampf, bei dem Spieler Ko-Drohungen anderswo nutzen, um das Ko zurückzuschlagen.",
                "nl": "Een ko-gevecht is een strategische strijd waarbij spelers ko-dreigingen elders op het bord gebruiken om het ko terug te veroveren."
            }
        },
        {
            "question": {
                "en": "What are 'ko threats' in Go?",
                "es": "¿Qué son las 'amenazas de ko' en Go?",
                "de": "Was sind 'Ko-Drohungen' in Go?",
                "nl": "Wat zijn 'ko-dreigingen' in Go?"
            },
            "options": [
                {
                    "en": "Moves elsewhere that force a response before replaying ko",
                    "es": "Movimientos que obligan a responder antes de rejugar el ko",
                    "de": "Züge anderswo, die eine Antwort erzwingen, bevor man Ko weiterspielt",
                    "nl": "Zetten elders die een reactie afdwingen voor het ko-hervatten"
                },
                {
                    "en": "Warning signals given to the opponent",
                    "es": "Señales de advertencia dadas al oponente",
                    "de": "Warnsignale an den Gegner",
                    "nl": "Waarschuwingssignalen aan de tegenstander"
                },
                {
                    "en": "Illegal moves that result in penalties",
                    "es": "Movimientos ilegales que resultan en penalizaciones",
                    "de": "Illegale Züge, die zu Strafen führen",
                    "nl": "Illegale zetten die leiden tot straffen"
                },
                {
                    "en": "Stones placed during the opening phase",
                    "es": "Piedras colocadas durante la apertura",
                    "de": "Steine, die in der Eröffnung gesetzt werden",
                    "nl": "Stenen die tijdens de opening worden geplaatst"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Ko threats are moves played elsewhere on the board that the opponent must answer, allowing you to then retake the ko on your next turn.",
                "es": "Las amenazas de ko son movimientos en otras partes del tablero que el oponente debe responder, permitiéndote retomar el ko en tu siguiente turno.",
                "de": "Ko-Drohungen sind Züge anderswo, die der Gegner beantworten muss, sodass man im nächsten Zug das Ko zurücknehmen kann.",
                "nl": "Ko-dreigingen zijn zetten elders op het bord die de tegenstander moet beantwoorden, zodat je daarna het ko kunt hernemen."
            }
        },
        {
            "question": {
                "en": "What is 'dame' in Go?",
                "es": "¿Qué es 'dame' en Go?",
                "de": "Was ist 'Dame' in Go?",
                "nl": "Wat is 'dame' in Go?"
            },
            "options": [
                {
                    "en": "A female Go player",
                    "es": "Una jugadora de Go",
                    "de": "Eine Go-Spielerin",
                    "nl": "Een vrouwelijke Go-speler"
                },
                {
                    "en": "A neutral point that belongs to neither player",
                    "es": "Un punto neutral que no pertenece a ningún jugador",
                    "de": "Ein neutraler Punkt, der keinem Spieler gehört",
                    "nl": "Een neutraal punt dat aan geen speler toebehoort"
                },
                {
                    "en": "A stone placed on the first line",
                    "es": "Una piedra colocada en la primera línea",
                    "de": "Ein Stein auf der ersten Linie",
                    "nl": "Een steen op de eerste lijn geplaatst"
                },
                {
                    "en": "The strongest player in a tournament",
                    "es": "El jugador más fuerte en un torneo",
                    "de": "Der stärkste Spieler in einem Turnier",
                    "nl": "De sterkste speler in een toernooi"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "Dame are neutral points on the board that do not belong to either player's territory. They are filled at the end of the game without affecting the score.",
                "es": "Dame son puntos neutrales en el tablero que no pertenecen al territorio de ningún jugador. Se llenan al final sin afectar la puntuación.",
                "de": "Dame sind neutrale Punkte auf dem Brett, die keinem Spieler gehören. Sie werden am Ende des Spiels gefüllt, ohne die Wertung zu beeinflussen.",
                "nl": "Dame zijn neutrale punten op het bord die aan geen speler toebehoren. Ze worden aan het einde gevuld zonder de score te beïnvloeden."
            }
        },
        {
            "question": {
                "en": "What is a 'cutting' move in Go?",
                "es": "¿Qué es un movimiento de 'corte' en Go?",
                "de": "Was ist ein 'Schnitt'-Zug in Go?",
                "nl": "Wat is een 'snij'-zet in Go?"
            },
            "options": [
                {
                    "en": "Separating the opponent's stones into groups",
                    "es": "Separar las piedras del oponente en grupos",
                    "de": "Die Steine des Gegners in Gruppen trennen",
                    "nl": "De stenen van de tegenstander in groepen scheiden"
                },
                {
                    "en": "Removing a stone from the board",
                    "es": "Quitar una piedra del tablero",
                    "de": "Einen Stein vom Brett entfernen",
                    "nl": "Een steen van het bord verwijderen"
                },
                {
                    "en": "Placing a stone at the edge of the board",
                    "es": "Colocar una piedra en el borde del tablero",
                    "de": "Einen Stein am Rand des Brettes setzen",
                    "nl": "Een steen aan de rand van het bord plaatsen"
                },
                {
                    "en": "Ending a ko fight",
                    "es": "Terminar una pelea de ko",
                    "de": "Einen Ko-Kampf beenden",
                    "nl": "Een ko-gevecht beëindigen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Cutting is a key tactic in Go that separates the opponent's stones into disconnected groups, making each group weaker and easier to attack.",
                "es": "Cortar es una táctica clave en Go que separa las piedras del oponente en grupos desconectados, haciendo cada grupo más débil.",
                "de": "Schneiden ist eine wichtige Taktik in Go, die die Steine des Gegners in getrennte Gruppen teilt und jede Gruppe schwächer macht.",
                "nl": "Snijden is een belangrijke tactiek in Go die de stenen van de tegenstander in losse groepen verdeelt, waardoor elke groep zwakker wordt."
            }
        },
        {
            "question": {
                "en": "What is a 'connection' in Go?",
                "es": "¿Qué es una 'conexión' en Go?",
                "de": "Was ist eine 'Verbindung' in Go?",
                "nl": "Wat is een 'verbinding' in Go?"
            },
            "options": [
                {
                    "en": "Linking your stones so they form one group",
                    "es": "Unir tus piedras para formar un grupo",
                    "de": "Eigene Steine verbinden, damit sie eine Gruppe bilden",
                    "nl": "Je stenen verbinden zodat ze één groep vormen"
                },
                {
                    "en": "An internet link to play Go online",
                    "es": "Un enlace de internet para jugar Go en línea",
                    "de": "Ein Internetlink zum Online-Go-Spielen",
                    "nl": "Een internetlink om online Go te spelen"
                },
                {
                    "en": "Placing a stone next to the opponent's stone",
                    "es": "Colocar una piedra junto a la del oponente",
                    "de": "Einen Stein neben den des Gegners setzen",
                    "nl": "Een steen naast de steen van de tegenstander plaatsen"
                },
                {
                    "en": "Drawing a line between two stones",
                    "es": "Dibujar una línea entre dos piedras",
                    "de": "Eine Linie zwischen zwei Steinen zeichnen",
                    "nl": "Een lijn trekken tussen twee stenen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A connection links your stones into a single group, sharing liberties and making them stronger and harder to capture.",
                "es": "Una conexión une tus piedras en un solo grupo, compartiendo libertades y haciéndolas más fuertes y difíciles de capturar.",
                "de": "Eine Verbindung verbindet Steine zu einer Gruppe, die Freiheiten teilt und stärker und schwerer zu schlagen ist.",
                "nl": "Een verbinding koppelt je stenen tot één groep die vrijheden deelt en sterker en moeilijker te veroveren is."
            }
        },
        {
            "question": {
                "en": "What is a 'false eye' in Go?",
                "es": "¿Qué es un 'ojo falso' en Go?",
                "de": "Was ist ein 'falsches Auge' in Go?",
                "nl": "Wat is een 'vals oog' in Go?"
            },
            "options": [
                {
                    "en": "An eye that can be destroyed by the opponent",
                    "es": "Un ojo que puede ser destruido por el oponente",
                    "de": "Ein Auge, das vom Gegner zerstört werden kann",
                    "nl": "Een oog dat door de tegenstander vernietigd kan worden"
                },
                {
                    "en": "An eye that counts double in scoring",
                    "es": "Un ojo que cuenta doble en la puntuación",
                    "de": "Ein Auge, das doppelt zählt",
                    "nl": "Een oog dat dubbel telt bij de score"
                },
                {
                    "en": "An eye formed by captured stones",
                    "es": "Un ojo formado por piedras capturadas",
                    "de": "Ein Auge aus geschlagenen Steinen",
                    "nl": "Een oog gevormd door veroverde stenen"
                },
                {
                    "en": "An eye created before the game starts",
                    "es": "Un ojo creado antes de comenzar el juego",
                    "de": "Ein Auge, das vor dem Spiel entsteht",
                    "nl": "Een oog dat voor het spel wordt gemaakt"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A false eye looks like an eye but can be filled by the opponent because the surrounding stones are not fully connected or have weaknesses.",
                "es": "Un ojo falso parece un ojo pero puede ser llenado por el oponente porque las piedras que lo rodean no están completamente conectadas.",
                "de": "Ein falsches Auge sieht aus wie ein Auge, kann aber vom Gegner gefüllt werden, weil die umgebenden Steine Schwächen haben.",
                "nl": "Een vals oog lijkt op een oog maar kan door de tegenstander worden gevuld omdat de omringende stenen niet volledig verbonden zijn."
            }
        },
        {
            "question": {
                "en": "What is 'thickness' in Go?",
                "es": "¿Qué es el 'espesor' en Go?",
                "de": "Was ist 'Dicke' in Go?",
                "nl": "Wat is 'dikte' in Go?"
            },
            "options": [
                {
                    "en": "The physical thickness of Go stones",
                    "es": "El grosor físico de las piedras de Go",
                    "de": "Die physische Dicke der Go-Steine",
                    "nl": "De fysieke dikte van Go-stenen"
                },
                {
                    "en": "A strong, solid wall of stones with influence",
                    "es": "Una pared fuerte y sólida de piedras con influencia",
                    "de": "Eine starke, solide Mauer von Steinen mit Einfluss",
                    "nl": "Een sterke, stevige muur van stenen met invloed"
                },
                {
                    "en": "The number of layers on the Go board",
                    "es": "El número de capas en el tablero de Go",
                    "de": "Die Anzahl der Schichten auf dem Go-Brett",
                    "nl": "Het aantal lagen op het Go-bord"
                },
                {
                    "en": "A group surrounded by the opponent",
                    "es": "Un grupo rodeado por el oponente",
                    "de": "Eine vom Gegner umgebene Gruppe",
                    "nl": "Een groep omringd door de tegenstander"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "Thickness refers to a strong, solid group of stones that projects influence over a large area. It is used strategically to build territory or attack.",
                "es": "El espesor se refiere a un grupo fuerte y sólido de piedras que proyecta influencia sobre un área grande. Se usa estratégicamente.",
                "de": "Dicke bezeichnet eine starke, solide Steingruppe, die Einfluss auf ein großes Gebiet ausübt. Sie wird strategisch zum Gebietsaufbau oder Angriff genutzt.",
                "nl": "Dikte verwijst naar een sterke, stevige groep stenen die invloed uitoefent over een groot gebied. Het wordt strategisch gebruikt."
            }
        },
        {
            "question": {
                "en": "What AI program famously beat a top Go professional?",
                "es": "¿Qué programa de IA venció a un profesional de Go?",
                "de": "Welches KI-Programm besiegte einen Top-Go-Profi?",
                "nl": "Welk AI-programma versloeg een top Go-professional?"
            },
            "options": [
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
                    "en": "AlphaGo",
                    "es": "AlphaGo",
                    "de": "AlphaGo",
                    "nl": "AlphaGo"
                },
                {
                    "en": "Stockfish",
                    "es": "Stockfish",
                    "de": "Stockfish",
                    "nl": "Stockfish"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "AlphaGo, developed by DeepMind, defeated world champion Lee Sedol in 2016, marking a milestone in artificial intelligence.",
                "es": "AlphaGo, desarrollado por DeepMind, derrotó al campeón mundial Lee Sedol en 2016, marcando un hito en la inteligencia artificial.",
                "de": "AlphaGo von DeepMind besiegte 2016 den Weltmeister Lee Sedol und markierte einen Meilenstein in der künstlichen Intelligenz.",
                "nl": "AlphaGo, ontwikkeld door DeepMind, versloeg wereldkampioen Lee Sedol in 2016, een mijlpaal in kunstmatige intelligentie."
            }
        },
        {
            "question": {
                "en": "What is an 'invasion' in Go?",
                "es": "¿Qué es una 'invasión' en Go?",
                "de": "Was ist eine 'Invasion' in Go?",
                "nl": "Wat is een 'invasie' in Go?"
            },
            "options": [
                {
                    "en": "Playing inside the opponent's potential territory",
                    "es": "Jugar dentro del territorio potencial del oponente",
                    "de": "Im potenziellen Gebiet des Gegners spielen",
                    "nl": "Spelen in het potentiële gebied van de tegenstander"
                },
                {
                    "en": "Placing all stones on the first line",
                    "es": "Colocar todas las piedras en la primera línea",
                    "de": "Alle Steine auf die erste Linie setzen",
                    "nl": "Alle stenen op de eerste lijn plaatsen"
                },
                {
                    "en": "Surrounding the entire board with your stones",
                    "es": "Rodear todo el tablero con tus piedras",
                    "de": "Das gesamte Brett mit Steinen umgeben",
                    "nl": "Het hele bord met je stenen omringen"
                },
                {
                    "en": "Taking your opponent's seat at the table",
                    "es": "Tomar el asiento de tu oponente en la mesa",
                    "de": "Den Platz des Gegners am Tisch einnehmen",
                    "nl": "De stoel van je tegenstander innemen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "An invasion is placing a stone deep inside the opponent's area to reduce or steal territory. It is risky but can be very rewarding if successful.",
                "es": "Una invasión es colocar una piedra dentro del área del oponente para reducir o robar territorio. Es arriesgado pero muy gratificante si tiene éxito.",
                "de": "Eine Invasion ist das Setzen eines Steins tief im Gebiet des Gegners, um Gebiet zu reduzieren. Es ist riskant, aber lohnend bei Erfolg.",
                "nl": "Een invasie is het plaatsen van een steen diep in het gebied van de tegenstander om gebied te verminderen. Het is riskant maar zeer lonend bij succes."
            }
        },
        {
            "question": {
                "en": "What is a 'reduction' in Go?",
                "es": "¿Qué es una 'reducción' en Go?",
                "de": "Was ist eine 'Reduktion' in Go?",
                "nl": "Wat is een 'reductie' in Go?"
            },
            "options": [
                {
                    "en": "Shrinking the board size during a game",
                    "es": "Reducir el tamaño del tablero durante el juego",
                    "de": "Die Brettgröße während des Spiels verkleinern",
                    "nl": "Het bord kleiner maken tijdens een spel"
                },
                {
                    "en": "Limiting opponent's territory from the outside",
                    "es": "Limitar el territorio del oponente desde afuera",
                    "de": "Das Gebiet des Gegners von außen begrenzen",
                    "nl": "Het gebied van de tegenstander van buitenaf beperken"
                },
                {
                    "en": "Removing stones from your own group",
                    "es": "Quitar piedras de tu propio grupo",
                    "de": "Steine aus der eigenen Gruppe entfernen",
                    "nl": "Stenen uit je eigen groep verwijderen"
                },
                {
                    "en": "Decreasing the time limit",
                    "es": "Disminuir el límite de tiempo",
                    "de": "Das Zeitlimit verkürzen",
                    "nl": "De tijdslimiet verkorten"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "A reduction limits the opponent's territory from the outside, without playing deeply inside. It is safer than an invasion but less aggressive.",
                "es": "Una reducción limita el territorio del oponente desde afuera. Es más segura que una invasión pero menos agresiva.",
                "de": "Eine Reduktion begrenzt das Gebiet des Gegners von außen, ohne tief einzudringen. Sie ist sicherer als eine Invasion, aber weniger aggressiv.",
                "nl": "Een reductie beperkt het gebied van de tegenstander van buitenaf. Het is veiliger dan een invasie maar minder agressief."
            }
        },
        {
            "question": {
                "en": "What is the 13x13 Go board commonly used for?",
                "es": "¿Para qué se usa comúnmente el tablero de Go 13x13?",
                "de": "Wofür wird das 13x13-Go-Brett häufig verwendet?",
                "nl": "Waarvoor wordt het 13x13 Go-bord vaak gebruikt?"
            },
            "options": [
                {
                    "en": "Professional tournaments only",
                    "es": "Solo torneos profesionales",
                    "de": "Nur professionelle Turniere",
                    "nl": "Alleen professionele toernooien"
                },
                {
                    "en": "Medium-length games for improving players",
                    "es": "Partidas de duración media para jugadores que mejoran",
                    "de": "Mittelgroße Spiele für lernende Spieler",
                    "nl": "Middelgrote partijen voor spelers die willen verbeteren"
                },
                {
                    "en": "Speed tournaments with time limits",
                    "es": "Torneos de velocidad con límites de tiempo",
                    "de": "Geschwindigkeitsturniere mit Zeitlimits",
                    "nl": "Sneltoernooien met tijdslimieten"
                },
                {
                    "en": "Teaching advanced joseki patterns",
                    "es": "Enseñar patrones avanzados de joseki",
                    "de": "Fortgeschrittene Joseki-Muster lehren",
                    "nl": "Geavanceerde joseki-patronen leren"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "The 13x13 board is a middle ground between the 9x9 beginner board and the full 19x19 board, ideal for intermediate players who want quicker games.",
                "es": "El tablero 13x13 es un punto medio entre el 9x9 para principiantes y el 19x19 completo, ideal para jugadores intermedios.",
                "de": "Das 13x13-Brett ist ein Mittelweg zwischen dem 9x9-Brett für Anfänger und dem vollen 19x19-Brett, ideal für fortgeschrittene Spieler.",
                "nl": "Het 13x13-bord is een middenweg tussen het 9x9-bord voor beginners en het volledige 19x19-bord, ideaal voor gevorderde spelers."
            }
        },
        {
            "question": {
                "en": "What is a 'living group' in Go?",
                "es": "¿Qué es un 'grupo vivo' en Go?",
                "de": "Was ist eine 'lebende Gruppe' in Go?",
                "nl": "Wat is een 'levende groep' in Go?"
            },
            "options": [
                {
                    "en": "A group that has enough eyes to survive",
                    "es": "Un grupo que tiene suficientes ojos para sobrevivir",
                    "de": "Eine Gruppe mit genug Augen zum Überleben",
                    "nl": "Een groep met genoeg ogen om te overleven"
                },
                {
                    "en": "A group that is currently moving across the board",
                    "es": "Un grupo que se mueve por el tablero",
                    "de": "Eine Gruppe, die sich über das Brett bewegt",
                    "nl": "Een groep die over het bord beweegt"
                },
                {
                    "en": "A group that has captured opponent stones",
                    "es": "Un grupo que ha capturado piedras del oponente",
                    "de": "Eine Gruppe, die gegnerische Steine geschlagen hat",
                    "nl": "Een groep die stenen van de tegenstander heeft veroverd"
                },
                {
                    "en": "A group formed in the first ten moves",
                    "es": "Un grupo formado en los primeros diez movimientos",
                    "de": "Eine Gruppe, die in den ersten zehn Zügen gebildet wurde",
                    "nl": "Een groep gevormd in de eerste tien zetten"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A living group is one that has secured at least two true eyes, making it impossible for the opponent to capture. Living groups are safe on the board.",
                "es": "Un grupo vivo es uno que tiene al menos dos ojos verdaderos, haciéndolo imposible de capturar.",
                "de": "Eine lebende Gruppe hat mindestens zwei echte Augen und kann nicht vom Gegner geschlagen werden.",
                "nl": "Een levende groep heeft minstens twee echte ogen en kan niet door de tegenstander veroverd worden."
            }
        },
        {
            "question": {
                "en": "What is a 'pass' in Go?",
                "es": "¿Qué es 'pasar' en Go?",
                "de": "Was ist ein 'Pass' in Go?",
                "nl": "Wat is 'passen' in Go?"
            },
            "options": [
                {
                    "en": "Moving a stone to a new position",
                    "es": "Mover una piedra a una nueva posición",
                    "de": "Einen Stein auf eine neue Position bewegen",
                    "nl": "Een steen naar een nieuwe positie verplaatsen"
                },
                {
                    "en": "Choosing not to play a stone on your turn",
                    "es": "Elegir no colocar una piedra en tu turno",
                    "de": "Keinen Stein setzen in seinem Zug",
                    "nl": "Ervoor kiezen geen steen te plaatsen in je beurt"
                },
                {
                    "en": "Giving a stone to your opponent",
                    "es": "Dar una piedra a tu oponente",
                    "de": "Einen Stein an den Gegner geben",
                    "nl": "Een steen aan je tegenstander geven"
                },
                {
                    "en": "Trading captured stones with the opponent",
                    "es": "Intercambiar piedras capturadas con el oponente",
                    "de": "Geschlagene Steine mit dem Gegner tauschen",
                    "nl": "Veroverde stenen ruilen met de tegenstander"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "Passing means choosing not to place a stone during your turn. A player passes when they believe no beneficial moves remain. Two consecutive passes end the game.",
                "es": "Pasar significa elegir no colocar una piedra en tu turno. Dos pases consecutivos terminan el juego.",
                "de": "Passen bedeutet, in seinem Zug keinen Stein zu setzen. Zwei aufeinanderfolgende Pässe beenden das Spiel.",
                "nl": "Passen betekent ervoor kiezen geen steen te plaatsen. Twee opeenvolgende keren passen beëindigt het spel."
            }
        },
        {
            "question": {
                "en": "What is the 'monkey jump' in Go?",
                "es": "¿Qué es el 'salto del mono' en Go?",
                "de": "Was ist der 'Affensprung' in Go?",
                "nl": "Wat is de 'apensprong' in Go?"
            },
            "options": [
                {
                    "en": "An endgame technique on the first line",
                    "es": "Una técnica de final de juego en la primera línea",
                    "de": "Eine Endspieltechnik auf der ersten Linie",
                    "nl": "Een eindseltechniek op de eerste lijn"
                },
                {
                    "en": "A jumping move over opponent stones",
                    "es": "Un salto sobre piedras del oponente",
                    "de": "Ein Sprung über gegnerische Steine",
                    "nl": "Een sprong over stenen van de tegenstander"
                },
                {
                    "en": "A fast opening strategy",
                    "es": "Una estrategia de apertura rápida",
                    "de": "Eine schnelle Eröffnungsstrategie",
                    "nl": "Een snelle openingsstrategie"
                },
                {
                    "en": "A way to resign from the game",
                    "es": "Una forma de rendirse en el juego",
                    "de": "Eine Möglichkeit aufzugeben",
                    "nl": "Een manier om op te geven"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The monkey jump is an endgame technique where a stone slides along the first line to reduce the opponent's territory at the edge of the board.",
                "es": "El salto del mono es una técnica de final donde una piedra se desliza por la primera línea para reducir el territorio del oponente.",
                "de": "Der Affensprung ist eine Endspieltechnik, bei der ein Stein entlang der ersten Linie gleitet, um das Gebiet des Gegners zu reduzieren.",
                "nl": "De apensprong is een eindseltechniek waarbij een steen langs de eerste lijn schuift om het gebied van de tegenstander te verkleinen."
            }
        },
        {
            "question": {
                "en": "What is a 'dan' rank in Go?",
                "es": "¿Qué es un rango 'dan' en Go?",
                "de": "Was ist ein 'Dan'-Rang in Go?",
                "nl": "Wat is een 'dan'-rang in Go?"
            },
            "options": [
                {
                    "en": "A beginner level ranking",
                    "es": "Una clasificación de nivel principiante",
                    "de": "Ein Anfänger-Rang",
                    "nl": "Een rangschikking voor beginners"
                },
                {
                    "en": "An advanced level ranking above kyu",
                    "es": "Una clasificación avanzada por encima de kyu",
                    "de": "Ein fortgeschrittener Rang über Kyu",
                    "nl": "Een gevorderde rangschikking boven kyu"
                },
                {
                    "en": "A ranking only used in China",
                    "es": "Una clasificación usada solo en China",
                    "de": "Ein Rang, der nur in China verwendet wird",
                    "nl": "Een rangschikking alleen gebruikt in China"
                },
                {
                    "en": "The name given to tournament winners",
                    "es": "El nombre dado a ganadores de torneos",
                    "de": "Der Name für Turniersieger",
                    "nl": "De naam voor toernooiwinnaars"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "Dan ranks are advanced levels in Go, starting at 1-dan for strong amateurs. Professional ranks go from 1p to 9p, with 9-dan being the highest.",
                "es": "Los rangos dan son niveles avanzados en Go, comenzando en 1-dan para aficionados fuertes. Los profesionales van de 1p a 9p.",
                "de": "Dan-Ränge sind fortgeschrittene Stufen in Go, beginnend bei 1-Dan für starke Amateure. Profis reichen von 1p bis 9p.",
                "nl": "Dan-rangen zijn gevorderde niveaus in Go, beginnend bij 1-dan voor sterke amateurs. Professionele rangen gaan van 1p tot 9p."
            }
        },
        {
            "question": {
                "en": "What is a 'kyu' rank in Go?",
                "es": "¿Qué es un rango 'kyu' en Go?",
                "de": "Was ist ein 'Kyu'-Rang in Go?",
                "nl": "Wat is een 'kyu'-rang in Go?"
            },
            "options": [
                {
                    "en": "A professional player rank",
                    "es": "Un rango de jugador profesional",
                    "de": "Ein Profi-Rang",
                    "nl": "Een professionele rang"
                },
                {
                    "en": "A rank for beginners and intermediate players",
                    "es": "Un rango para principiantes e intermedios",
                    "de": "Ein Rang für Anfänger und Fortgeschrittene",
                    "nl": "Een rang voor beginners en gevorderden"
                },
                {
                    "en": "A special rank for online play only",
                    "es": "Un rango especial solo para juego en línea",
                    "de": "Ein Spezialrang nur für Online-Spiel",
                    "nl": "Een speciale rang alleen voor online spel"
                },
                {
                    "en": "A rank based on number of games played",
                    "es": "Un rango basado en el número de partidas jugadas",
                    "de": "Ein Rang basierend auf der Anzahl gespielter Spiele",
                    "nl": "Een rang gebaseerd op het aantal gespeelde spellen"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "Kyu ranks are for beginners and intermediate Go players. They count down from 30-kyu to 1-kyu, after which a player advances to dan ranks.",
                "es": "Los rangos kyu son para principiantes e intermedios. Van de 30-kyu a 1-kyu, después de lo cual se avanza a rangos dan.",
                "de": "Kyu-Ränge sind für Anfänger und fortgeschrittene Spieler. Sie zählen von 30-Kyu bis 1-Kyu herunter, danach folgen Dan-Ränge.",
                "nl": "Kyu-rangen zijn voor beginners en gevorderde spelers. Ze tellen af van 30-kyu tot 1-kyu, waarna men doorstroomt naar dan-rangen."
            }
        },
        {
            "question": {
                "en": "How many total intersections are on a 19x19 Go board?",
                "es": "¿Cuántas intersecciones hay en un tablero de Go 19x19?",
                "de": "Wie viele Schnittpunkte hat ein 19x19-Go-Brett?",
                "nl": "Hoeveel kruispunten heeft een 19x19 Go-bord?"
            },
            "options": [
                {
                    "en": "289",
                    "es": "289",
                    "de": "289",
                    "nl": "289"
                },
                {
                    "en": "324",
                    "es": "324",
                    "de": "324",
                    "nl": "324"
                },
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
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "A 19x19 Go board has 361 intersections (19 times 19). Each intersection is a potential spot for placing a stone.",
                "es": "Un tablero 19x19 tiene 361 intersecciones (19 por 19). Cada intersección es un lugar potencial para colocar una piedra.",
                "de": "Ein 19x19-Go-Brett hat 361 Schnittpunkte (19 mal 19). Jeder Schnittpunkt ist ein möglicher Platz für einen Stein.",
                "nl": "Een 19x19 Go-bord heeft 361 kruispunten (19 maal 19). Elk kruispunt is een mogelijke plek voor een steen."
            }
        },
        {
            "question": {
                "en": "What are captured stones called in Japanese Go?",
                "es": "¿Cómo se llaman las piedras capturadas en el Go japonés?",
                "de": "Wie heißen geschlagene Steine im japanischen Go?",
                "nl": "Hoe heten veroverde stenen in het Japanse Go?"
            },
            "options": [
                {
                    "en": "Trophies",
                    "es": "Trofeos",
                    "de": "Trophäen",
                    "nl": "Trofeeën"
                },
                {
                    "en": "Prisoners",
                    "es": "Prisioneros",
                    "de": "Gefangene",
                    "nl": "Gevangenen"
                },
                {
                    "en": "Points",
                    "es": "Puntos",
                    "de": "Punkte",
                    "nl": "Punten"
                },
                {
                    "en": "Losses",
                    "es": "Pérdidas",
                    "de": "Verluste",
                    "nl": "Verliezen"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "Captured stones are called prisoners. Under Japanese rules, prisoners are placed in the opponent's territory during scoring to reduce their area.",
                "es": "Las piedras capturadas se llaman prisioneros. Bajo las reglas japonesas, se colocan en el territorio del oponente al puntuar.",
                "de": "Geschlagene Steine heißen Gefangene. Nach japanischen Regeln werden sie bei der Wertung in das Gebiet des Gegners gelegt.",
                "nl": "Veroverde stenen heten gevangenen. Onder Japanse regels worden ze bij de telling in het gebied van de tegenstander geplaatst."
            }
        },
        {
            "question": {
                "en": "What is a 'moyo' in Go?",
                "es": "¿Qué es un 'moyo' en Go?",
                "de": "Was ist ein 'Moyo' in Go?",
                "nl": "Wat is een 'moyo' in Go?"
            },
            "options": [
                {
                    "en": "A large potential territory that is not yet secure",
                    "es": "Un gran territorio potencial que aún no es seguro",
                    "de": "Ein großes potenzielles Gebiet, das noch nicht sicher ist",
                    "nl": "Een groot potentieel gebied dat nog niet zeker is"
                },
                {
                    "en": "A captured group of stones",
                    "es": "Un grupo de piedras capturado",
                    "de": "Eine geschlagene Steingruppe",
                    "nl": "Een veroverde groep stenen"
                },
                {
                    "en": "A type of Go bowl",
                    "es": "Un tipo de recipiente de Go",
                    "de": "Eine Art Go-Schale",
                    "nl": "Een soort Go-pot"
                },
                {
                    "en": "The Japanese name for a Go board",
                    "es": "El nombre japonés de un tablero de Go",
                    "de": "Der japanische Name für ein Go-Brett",
                    "nl": "De Japanse naam voor een Go-bord"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A moyo is a large area of potential territory that is loosely mapped out but not yet fully secured. The opponent can still invade a moyo.",
                "es": "Un moyo es un área grande de territorio potencial que está esbozada pero no asegurada. El oponente aún puede invadir un moyo.",
                "de": "Ein Moyo ist ein großes potenzielles Gebiet, das grob abgesteckt, aber noch nicht gesichert ist. Der Gegner kann noch eindringen.",
                "nl": "Een moyo is een groot potentieel gebied dat ruw is afgebakend maar nog niet beveiligd. De tegenstander kan nog binnenvallen."
            }
        },
        {
            "question": {
                "en": "What is a 'sacrifice' in Go?",
                "es": "¿Qué es un 'sacrificio' en Go?",
                "de": "Was ist ein 'Opfer' in Go?",
                "nl": "Wat is een 'offer' in Go?"
            },
            "options": [
                {
                    "en": "Giving up stones intentionally for a bigger gain",
                    "es": "Entregar piedras intencionalmente para una ganancia mayor",
                    "de": "Steine absichtlich aufgeben für einen größeren Gewinn",
                    "nl": "Opzettelijk stenen opgeven voor een groter voordeel"
                },
                {
                    "en": "Resigning a game you are losing",
                    "es": "Rendirse en un juego que estás perdiendo",
                    "de": "Ein verlorenes Spiel aufgeben",
                    "nl": "Een spel opgeven dat je verliest"
                },
                {
                    "en": "Playing a stone outside the board",
                    "es": "Colocar una piedra fuera del tablero",
                    "de": "Einen Stein außerhalb des Brettes spielen",
                    "nl": "Een steen buiten het bord plaatsen"
                },
                {
                    "en": "Passing your turn twice in a row",
                    "es": "Pasar tu turno dos veces seguidas",
                    "de": "Zweimal hintereinander passen",
                    "nl": "Twee keer achter elkaar passen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A sacrifice means deliberately allowing the opponent to capture some of your stones in order to gain a strategic advantage elsewhere on the board.",
                "es": "Un sacrificio significa permitir deliberadamente que el oponente capture algunas piedras para obtener una ventaja estratégica en otra parte.",
                "de": "Ein Opfer bedeutet, dem Gegner absichtlich einige Steine zum Schlagen zu überlassen, um anderswo einen strategischen Vorteil zu erlangen.",
                "nl": "Een offer betekent opzettelijk toestaan dat de tegenstander enkele stenen verovert om elders een strategisch voordeel te behalen."
            }
        },
        {
            "question": {
                "en": "What is the typical komi value in modern Go?",
                "es": "¿Cuál es el valor típico del komi en el Go moderno?",
                "de": "Was ist der typische Komi-Wert im modernen Go?",
                "nl": "Wat is de typische komi-waarde in modern Go?"
            },
            "options": [
                {
                    "en": "3.5 points",
                    "es": "3,5 puntos",
                    "de": "3,5 Punkte",
                    "nl": "3,5 punten"
                },
                {
                    "en": "5.5 points",
                    "es": "5,5 puntos",
                    "de": "5,5 Punkte",
                    "nl": "5,5 punten"
                },
                {
                    "en": "6.5 or 7.5 points",
                    "es": "6,5 o 7,5 puntos",
                    "de": "6,5 oder 7,5 Punkte",
                    "nl": "6,5 of 7,5 punten"
                },
                {
                    "en": "10 points",
                    "es": "10 puntos",
                    "de": "10 Punkte",
                    "nl": "10 punten"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "Modern Go typically uses 6.5 points komi (Japanese rules) or 7.5 points (Chinese rules). The half point prevents draws.",
                "es": "El Go moderno típicamente usa 6,5 puntos de komi (reglas japonesas) o 7,5 (reglas chinas). El medio punto evita empates.",
                "de": "Modernes Go verwendet typisch 6,5 Punkte Komi (japanische Regeln) oder 7,5 (chinesische Regeln). Der halbe Punkt verhindert Remis.",
                "nl": "Modern Go gebruikt doorgaans 6,5 punten komi (Japanse regels) of 7,5 (Chinese regels). Het halve punt voorkomt gelijkspel."
            }
        },
        {
            "question": {
                "en": "What is a 'bamboo joint' in Go?",
                "es": "¿Qué es un 'bambú' en Go?",
                "de": "Was ist ein 'Bambusgelenk' in Go?",
                "nl": "Wat is een 'bamboeverbinding' in Go?"
            },
            "options": [
                {
                    "en": "Two pairs of stones that cannot be cut apart",
                    "es": "Dos pares de piedras que no pueden separarse",
                    "de": "Zwei Steinpaare, die nicht getrennt werden können",
                    "nl": "Twee paren stenen die niet gescheiden kunnen worden"
                },
                {
                    "en": "A wooden Go board made from bamboo",
                    "es": "Un tablero de Go de bambú",
                    "de": "Ein Go-Brett aus Bambus",
                    "nl": "Een Go-bord van bamboe"
                },
                {
                    "en": "A long chain of connected stones",
                    "es": "Una larga cadena de piedras conectadas",
                    "de": "Eine lange Kette verbundener Steine",
                    "nl": "Een lange keten van verbonden stenen"
                },
                {
                    "en": "A shape that creates two eyes automatically",
                    "es": "Una forma que crea dos ojos automáticamente",
                    "de": "Eine Form, die automatisch zwei Augen erzeugt",
                    "nl": "Een vorm die automatisch twee ogen maakt"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A bamboo joint is a connection pattern of two pairs of stones arranged so the opponent cannot cut between them, making it an unbreakable link.",
                "es": "Un bambú es un patrón de conexión de dos pares de piedras dispuestos de modo que el oponente no puede cortar entre ellos.",
                "de": "Ein Bambusgelenk ist ein Verbindungsmuster aus zwei Steinpaaren, die so angeordnet sind, dass der Gegner nicht dazwischen schneiden kann.",
                "nl": "Een bamboeverbinding is een verbindingspatroon van twee paren stenen die zo staan dat de tegenstander er niet tussen kan snijden."
            }
        },
        {
            "question": {
                "en": "What is a 'tiger's mouth' shape in Go?",
                "es": "¿Qué es la forma de 'boca de tigre' en Go?",
                "de": "Was ist die 'Tigermaul'-Form in Go?",
                "nl": "Wat is de 'tijgerbekform' in Go?"
            },
            "options": [
                {
                    "en": "Three stones forming an L-shape with a key point",
                    "es": "Tres piedras en forma de L con un punto clave",
                    "de": "Drei Steine in L-Form mit einem Schlüsselpunkt",
                    "nl": "Drie stenen in L-vorm met een belangrijk punt"
                },
                {
                    "en": "A circle of stones around empty space",
                    "es": "Un círculo de piedras alrededor de espacio vacío",
                    "de": "Ein Kreis von Steinen um leeren Raum",
                    "nl": "Een cirkel van stenen rond lege ruimte"
                },
                {
                    "en": "A diagonal line of five stones",
                    "es": "Una línea diagonal de cinco piedras",
                    "de": "Eine diagonale Linie von fünf Steinen",
                    "nl": "Een diagonale lijn van vijf stenen"
                },
                {
                    "en": "Two stones placed on star points",
                    "es": "Dos piedras colocadas en puntos estrella",
                    "de": "Zwei Steine auf Sternpunkten",
                    "nl": "Twee stenen op sterpunten"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A tiger's mouth is a shape of three stones that creates a strong connection point. The empty intersection they surround is very hard for the opponent to play.",
                "es": "La boca de tigre es una forma de tres piedras que crea un punto de conexión fuerte. La intersección vacía es muy difícil de jugar para el oponente.",
                "de": "Das Tigermaul ist eine Form aus drei Steinen, die einen starken Verbindungspunkt schafft. Der umgebene leere Punkt ist für den Gegner sehr schwer zu spielen.",
                "nl": "De tijgerbek is een vorm van drie stenen die een sterk verbindingspunt creëert. Het omringde lege punt is moeilijk voor de tegenstander."
            }
        },
        {
            "question": {
                "en": "What material are traditional Go boards made of?",
                "es": "¿De qué material son los tableros de Go tradicionales?",
                "de": "Aus welchem Material bestehen traditionelle Go-Bretter?",
                "nl": "Van welk materiaal zijn traditionele Go-borden gemaakt?"
            },
            "options": [
                {
                    "en": "Oak wood",
                    "es": "Madera de roble",
                    "de": "Eichenholz",
                    "nl": "Eikenhout"
                },
                {
                    "en": "Bamboo",
                    "es": "Bambú",
                    "de": "Bambus",
                    "nl": "Bamboe"
                },
                {
                    "en": "Kaya wood",
                    "es": "Madera de kaya",
                    "de": "Kaya-Holz",
                    "nl": "Kayahout"
                },
                {
                    "en": "Marble",
                    "es": "Mármol",
                    "de": "Marmor",
                    "nl": "Marmer"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "The finest traditional Go boards are made of kaya wood, a type of Japanese torreya tree. These boards can be extremely expensive and are prized by collectors.",
                "es": "Los mejores tableros tradicionales de Go son de madera kaya, un tipo de torreya japonesa. Son extremadamente caros y valorados por coleccionistas.",
                "de": "Die besten traditionellen Go-Bretter bestehen aus Kaya-Holz, einer japanischen Torreya-Art. Diese Bretter können extrem teuer sein.",
                "nl": "De beste traditionele Go-borden zijn gemaakt van kayahout, een Japanse torreya-boom. Deze borden kunnen extreem duur zijn."
            }
        },
        {
            "question": {
                "en": "What is 'nigiri' in Go?",
                "es": "¿Qué es 'nigiri' en Go?",
                "de": "Was ist 'Nigiri' in Go?",
                "nl": "Wat is 'nigiri' in Go?"
            },
            "options": [
                {
                    "en": "A method for deciding who plays Black",
                    "es": "Un método para decidir quién juega con Negro",
                    "de": "Eine Methode zur Bestimmung, wer Schwarz spielt",
                    "nl": "Een methode om te bepalen wie Zwart speelt"
                },
                {
                    "en": "A type of sushi served at Go tournaments",
                    "es": "Un tipo de sushi servido en torneos de Go",
                    "de": "Eine Sushi-Art bei Go-Turnieren",
                    "nl": "Een soort sushi geserveerd bij Go-toernooien"
                },
                {
                    "en": "The Japanese word for capturing a stone",
                    "es": "La palabra japonesa para capturar una piedra",
                    "de": "Das japanische Wort für das Schlagen eines Steins",
                    "nl": "Het Japanse woord voor het veroveren van een steen"
                },
                {
                    "en": "A penalty move in tournament play",
                    "es": "Un movimiento de penalización en torneo",
                    "de": "Ein Strafzug im Turnierspiel",
                    "nl": "Een strafzet in toernooispel"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Nigiri is a method to decide who plays Black. One player grabs a handful of white stones, and the other guesses odd or even to determine color assignment.",
                "es": "Nigiri es un método para decidir quién juega con Negro. Un jugador toma piedras blancas y el otro adivina si es par o impar.",
                "de": "Nigiri ist eine Methode zur Farbwahl. Ein Spieler greift weiße Steine, und der andere rät, ob es gerade oder ungerade sind.",
                "nl": "Nigiri is een methode om te bepalen wie Zwart speelt. Een speler pakt witte stenen en de ander raadt of het even of oneven is."
            }
        },
        {
            "question": {
                "en": "What is a 'double atari' in Go?",
                "es": "¿Qué es un 'doble atari' en Go?",
                "de": "Was ist ein 'Doppel-Atari' in Go?",
                "nl": "Wat is een 'dubbel atari' in Go?"
            },
            "options": [
                {
                    "en": "A move that puts two groups in atari at once",
                    "es": "Un movimiento que pone dos grupos en atari a la vez",
                    "de": "Ein Zug, der zwei Gruppen gleichzeitig ins Atari setzt",
                    "nl": "Een zet die twee groepen tegelijk in atari zet"
                },
                {
                    "en": "Capturing two stones in a single move",
                    "es": "Capturar dos piedras en un solo movimiento",
                    "de": "Zwei Steine in einem Zug schlagen",
                    "nl": "Twee stenen in één zet veroveren"
                },
                {
                    "en": "Playing two stones at once",
                    "es": "Jugar dos piedras a la vez",
                    "de": "Zwei Steine gleichzeitig setzen",
                    "nl": "Twee stenen tegelijk plaatsen"
                },
                {
                    "en": "A stone with exactly two liberties",
                    "es": "Una piedra con exactamente dos libertades",
                    "de": "Ein Stein mit genau zwei Freiheiten",
                    "nl": "Een steen met precies twee vrijheden"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A double atari is a powerful move that threatens to capture two separate groups at the same time. The opponent can only save one group.",
                "es": "Un doble atari es un movimiento poderoso que amenaza capturar dos grupos a la vez. El oponente solo puede salvar uno.",
                "de": "Ein Doppel-Atari ist ein mächtiger Zug, der zwei Gruppen gleichzeitig mit Schlagen bedroht. Der Gegner kann nur eine retten.",
                "nl": "Een dubbel atari is een krachtige zet die twee groepen tegelijk bedreigt. De tegenstander kan er maar één redden."
            }
        },
        {
            "question": {
                "en": "What is the 'Chinese opening' in Go?",
                "es": "¿Qué es la 'apertura china' en Go?",
                "de": "Was ist die 'Chinesische Eröffnung' in Go?",
                "nl": "Wat is de 'Chinese opening' in Go?"
            },
            "options": [
                {
                    "en": "A popular opening strategy focusing on influence",
                    "es": "Una estrategia de apertura popular enfocada en influencia",
                    "de": "Eine beliebte Eröffnungsstrategie mit Fokus auf Einfluss",
                    "nl": "Een populaire openingsstrategie gericht op invloed"
                },
                {
                    "en": "The rules used only in Chinese Go",
                    "es": "Las reglas usadas solo en el Go chino",
                    "de": "Die Regeln, die nur im chinesischen Go gelten",
                    "nl": "De regels die alleen in Chinees Go gelden"
                },
                {
                    "en": "Starting the game by placing stones on all star points",
                    "es": "Comenzar colocando piedras en todos los puntos estrella",
                    "de": "Das Spiel durch Setzen auf alle Sternpunkte beginnen",
                    "nl": "Het spel beginnen door stenen op alle sterpunten te plaatsen"
                },
                {
                    "en": "A special greeting before the game begins",
                    "es": "Un saludo especial antes de que el juego comience",
                    "de": "Eine besondere Begrüßung vor Spielbeginn",
                    "nl": "Een speciale begroeting voor het spel begint"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The Chinese opening is a popular fuseki strategy where stones are placed to build a framework of influence along one side of the board.",
                "es": "La apertura china es una estrategia de fuseki popular donde las piedras se colocan para construir un marco de influencia a lo largo de un lado.",
                "de": "Die Chinesische Eröffnung ist eine beliebte Fuseki-Strategie, bei der Steine entlang einer Seite ein Einflussgerüst aufbauen.",
                "nl": "De Chinese opening is een populaire fuseki-strategie waarbij stenen worden geplaatst om een invloedsraamwerk langs één zijde op te bouwen."
            }
        },
        {
            "question": {
                "en": "What does it mean to 'resign' in Go?",
                "es": "¿Qué significa 'rendirse' en Go?",
                "de": "Was bedeutet 'aufgeben' in Go?",
                "nl": "Wat betekent 'opgeven' in Go?"
            },
            "options": [
                {
                    "en": "To concede defeat before the game ends naturally",
                    "es": "Admitir la derrota antes de que el juego termine",
                    "de": "Die Niederlage eingestehen, bevor das Spiel natürlich endet",
                    "nl": "Nederlaag toegeven voordat het spel natuurlijk eindigt"
                },
                {
                    "en": "To take a break during the game",
                    "es": "Tomar un descanso durante el juego",
                    "de": "Eine Pause während des Spiels machen",
                    "nl": "Een pauze nemen tijdens het spel"
                },
                {
                    "en": "To sign up for another tournament",
                    "es": "Inscribirse en otro torneo",
                    "de": "Sich für ein weiteres Turnier anmelden",
                    "nl": "Inschrijven voor een ander toernooi"
                },
                {
                    "en": "To swap colors with the opponent",
                    "es": "Intercambiar colores con el oponente",
                    "de": "Die Farben mit dem Gegner tauschen",
                    "nl": "Van kleur wisselen met de tegenstander"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Resigning means voluntarily conceding defeat. In professional Go, it is common to resign when a player believes the position is hopeless.",
                "es": "Rendirse significa admitir la derrota voluntariamente. En el Go profesional es común rendirse cuando se cree que la posición es desesperada.",
                "de": "Aufgeben bedeutet, die Niederlage freiwillig einzugestehen. Im professionellen Go ist es üblich, bei aussichtsloser Position aufzugeben.",
                "nl": "Opgeven betekent vrijwillig de nederlaag erkennen. In professioneel Go is het gebruikelijk op te geven als de positie hopeloos is."
            }
        },
        {
            "question": {
                "en": "Which country hosts the most professional Go players?",
                "es": "¿Qué país tiene más jugadores profesionales de Go?",
                "de": "Welches Land hat die meisten professionellen Go-Spieler?",
                "nl": "Welk land heeft de meeste professionele Go-spelers?"
            },
            "options": [
                {
                    "en": "Japan",
                    "es": "Japón",
                    "de": "Japan",
                    "nl": "Japan"
                },
                {
                    "en": "South Korea",
                    "es": "Corea del Sur",
                    "de": "Südkorea",
                    "nl": "Zuid-Korea"
                },
                {
                    "en": "China",
                    "es": "China",
                    "de": "China",
                    "nl": "China"
                },
                {
                    "en": "United States",
                    "es": "Estados Unidos",
                    "de": "Vereinigte Staaten",
                    "nl": "Verenigde Staten"
                }
            ],
            "correct": 2,
            "explanation": {
                "en": "China has the largest number of professional Go players, followed by South Korea and Japan. These three countries dominate world Go competitions.",
                "es": "China tiene el mayor número de jugadores profesionales de Go, seguida de Corea del Sur y Japón.",
                "de": "China hat die meisten professionellen Go-Spieler, gefolgt von Südkorea und Japan. Diese drei Länder dominieren den Go-Weltwettbewerb.",
                "nl": "China heeft het grootste aantal professionele Go-spelers, gevolgd door Zuid-Korea en Japan."
            }
        },
        {
            "question": {
                "en": "What is an 'approach move' in Go?",
                "es": "¿Qué es un 'movimiento de aproximación' en Go?",
                "de": "Was ist ein 'Annäherungszug' in Go?",
                "nl": "Wat is een 'naderingszet' in Go?"
            },
            "options": [
                {
                    "en": "Playing near an opponent's corner stone",
                    "es": "Jugar cerca de la piedra de esquina del oponente",
                    "de": "Nahe dem Eckstein des Gegners spielen",
                    "nl": "Spelen nabij de hoeksteen van de tegenstander"
                },
                {
                    "en": "Moving toward the center of the board",
                    "es": "Moverse hacia el centro del tablero",
                    "de": "Sich zur Mitte des Brettes bewegen",
                    "nl": "Naar het midden van het bord bewegen"
                },
                {
                    "en": "Walking up to the Go table",
                    "es": "Acercarse a la mesa de Go",
                    "de": "Zum Go-Tisch gehen",
                    "nl": "Naar de Go-tafel lopen"
                },
                {
                    "en": "Placing a stone on the edge of the board",
                    "es": "Colocar una piedra en el borde del tablero",
                    "de": "Einen Stein am Rand des Brettes setzen",
                    "nl": "Een steen aan de rand van het bord plaatsen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "An approach move is played near an opponent's corner stone to challenge their control of the corner and start a joseki sequence.",
                "es": "Un movimiento de aproximación se juega cerca de la piedra de esquina del oponente para desafiar su control y comenzar una secuencia joseki.",
                "de": "Ein Annäherungszug wird nahe dem Eckstein des Gegners gespielt, um dessen Kontrolle herauszufordern und eine Joseki-Folge zu starten.",
                "nl": "Een naderingszet wordt gespeeld nabij de hoeksteen van de tegenstander om diens controle aan te vechten en een joseki-reeks te starten."
            }
        },
        {
            "question": {
                "en": "What is 'shape' in Go?",
                "es": "¿Qué es la 'forma' en Go?",
                "de": "Was ist 'Form' in Go?",
                "nl": "Wat is 'vorm' in Go?"
            },
            "options": [
                {
                    "en": "The physical shape of Go stones",
                    "es": "La forma física de las piedras de Go",
                    "de": "Die physische Form der Go-Steine",
                    "nl": "De fysieke vorm van Go-stenen"
                },
                {
                    "en": "How stones are arranged for efficiency and strength",
                    "es": "Cómo se organizan las piedras para eficiencia y fuerza",
                    "de": "Wie Steine für Effizienz und Stärke angeordnet werden",
                    "nl": "Hoe stenen worden gerangschikt voor efficiëntie en sterkte"
                },
                {
                    "en": "The outline of the Go board",
                    "es": "El contorno del tablero de Go",
                    "de": "Die Umrisse des Go-Brettes",
                    "nl": "De omtrek van het Go-bord"
                },
                {
                    "en": "A tournament bracket format",
                    "es": "Un formato de eliminación en torneos",
                    "de": "Ein Turnier-Auslosungsformat",
                    "nl": "Een toernooischemaformaat"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "Shape in Go refers to how stones are arranged relative to each other. Good shape is efficient, flexible, and hard to attack.",
                "es": "La forma en Go se refiere a cómo se organizan las piedras entre sí. Una buena forma es eficiente, flexible y difícil de atacar.",
                "de": "Form in Go bezeichnet die Anordnung der Steine zueinander. Gute Form ist effizient, flexibel und schwer anzugreifen.",
                "nl": "Vorm in Go verwijst naar hoe stenen ten opzichte van elkaar staan. Goede vorm is efficiënt, flexibel en moeilijk aan te vallen."
            }
        },
        {
            "question": {
                "en": "What is an 'empty triangle' in Go?",
                "es": "¿Qué es un 'triángulo vacío' en Go?",
                "de": "Was ist ein 'leeres Dreieck' in Go?",
                "nl": "Wat is een 'lege driehoek' in Go?"
            },
            "options": [
                {
                    "en": "A good defensive shape",
                    "es": "Una buena forma defensiva",
                    "de": "Eine gute Verteidigungsform",
                    "nl": "Een goede verdedigingsvorm"
                },
                {
                    "en": "An inefficient shape to be avoided",
                    "es": "Una forma ineficiente que debe evitarse",
                    "de": "Eine ineffiziente Form, die vermieden werden sollte",
                    "nl": "Een inefficiënte vorm die vermeden moet worden"
                },
                {
                    "en": "A triangle of empty points on the board",
                    "es": "Un triángulo de puntos vacíos en el tablero",
                    "de": "Ein Dreieck leerer Punkte auf dem Brett",
                    "nl": "Een driehoek van lege punten op het bord"
                },
                {
                    "en": "A shape that creates three eyes",
                    "es": "Una forma que crea tres ojos",
                    "de": "Eine Form, die drei Augen erzeugt",
                    "nl": "Een vorm die drie ogen maakt"
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "An empty triangle is three stones in an L-shape, considered inefficient because they use more stones than needed for the same number of liberties.",
                "es": "Un triángulo vacío son tres piedras en forma de L, considerado ineficiente porque usan más piedras de las necesarias para las mismas libertades.",
                "de": "Ein leeres Dreieck sind drei Steine in L-Form, die als ineffizient gelten, weil sie mehr Steine als nötig für die gleiche Anzahl Freiheiten verwenden.",
                "nl": "Een lege driehoek zijn drie stenen in L-vorm, beschouwd als inefficiënt omdat ze meer stenen gebruiken dan nodig voor hetzelfde aantal vrijheden."
            }
        },
        {
            "question": {
                "en": "What is 'aji' in Go?",
                "es": "¿Qué es 'aji' en Go?",
                "de": "Was ist 'Aji' in Go?",
                "nl": "Wat is 'aji' in Go?"
            },
            "options": [
                {
                    "en": "Latent potential or weaknesses left in a position",
                    "es": "Potencial latente o debilidades en una posición",
                    "de": "Verborgenes Potenzial oder Schwächen in einer Position",
                    "nl": "Latent potentieel of zwakheden in een positie"
                },
                {
                    "en": "The taste of Go stones",
                    "es": "El sabor de las piedras de Go",
                    "de": "Der Geschmack von Go-Steinen",
                    "nl": "De smaak van Go-stenen"
                },
                {
                    "en": "A type of Japanese tea served during Go",
                    "es": "Un tipo de té japonés servido durante Go",
                    "de": "Eine japanische Teesorte beim Go",
                    "nl": "Een soort Japanse thee bij Go"
                },
                {
                    "en": "The sound stones make when placed on the board",
                    "es": "El sonido que hacen las piedras al colocarse",
                    "de": "Das Geräusch, das Steine beim Setzen machen",
                    "nl": "Het geluid dat stenen maken als ze geplaatst worden"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Aji literally means 'taste' in Japanese. In Go, it refers to hidden potential or latent threats in a position that can be exploited later.",
                "es": "Aji significa 'sabor' en japonés. En Go se refiere al potencial oculto o amenazas latentes en una posición que pueden explotarse después.",
                "de": "Aji bedeutet auf Japanisch 'Geschmack'. In Go bezeichnet es verborgenes Potenzial oder latente Drohungen in einer Position.",
                "nl": "Aji betekent letterlijk 'smaak' in het Japans. In Go verwijst het naar verborgen potentieel of latente dreigingen in een positie."
            }
        },
        {
            "question": {
                "en": "What is a 'ponnuki' in Go?",
                "es": "¿Qué es un 'ponnuki' en Go?",
                "de": "Was ist ein 'Ponnuki' in Go?",
                "nl": "Wat is een 'ponnuki' in Go?"
            },
            "options": [
                {
                    "en": "A diamond shape after capturing one stone",
                    "es": "Una forma de diamante tras capturar una piedra",
                    "de": "Eine Diamantform nach dem Schlagen eines Steins",
                    "nl": "Een diamantvorm na het veroveren van één steen"
                },
                {
                    "en": "A losing position for Black",
                    "es": "Una posición perdedora para Negro",
                    "de": "Eine Verlustposition für Schwarz",
                    "nl": "Een verliezende positie voor Zwart"
                },
                {
                    "en": "A type of Go tournament in Japan",
                    "es": "Un tipo de torneo de Go en Japón",
                    "de": "Eine Art Go-Turnier in Japan",
                    "nl": "Een soort Go-toernooi in Japan"
                },
                {
                    "en": "The first move of the game",
                    "es": "El primer movimiento del juego",
                    "de": "Der erste Zug des Spiels",
                    "nl": "De eerste zet van het spel"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A ponnuki is a diamond shape formed by four stones after capturing a single enemy stone in the center. It is considered very strong due to its influence.",
                "es": "Un ponnuki es una forma de diamante de cuatro piedras tras capturar una piedra enemiga en el centro. Se considera muy fuerte por su influencia.",
                "de": "Ein Ponnuki ist eine Diamantform aus vier Steinen nach dem Schlagen eines einzelnen gegnerischen Steins. Es gilt wegen seines Einflusses als sehr stark.",
                "nl": "Een ponnuki is een diamantvorm van vier stenen na het veroveren van één vijandelijke steen. Het wordt als zeer sterk beschouwd vanwege de invloed."
            }
        },
        {
            "question": {
                "en": "How is a winner decided if scores are tied in Go?",
                "es": "¿Cómo se decide el ganador si hay empate en Go?",
                "de": "Wie wird der Sieger bei Gleichstand in Go bestimmt?",
                "nl": "Hoe wordt de winnaar bepaald bij gelijke stand in Go?"
            },
            "options": [
                {
                    "en": "Komi includes a half point to prevent ties",
                    "es": "El komi incluye medio punto para evitar empates",
                    "de": "Komi enthält einen halben Punkt, um Gleichstand zu verhindern",
                    "nl": "Komi bevat een half punt om gelijkspel te voorkomen"
                },
                {
                    "en": "The younger player wins",
                    "es": "El jugador más joven gana",
                    "de": "Der jüngere Spieler gewinnt",
                    "nl": "De jongere speler wint"
                },
                {
                    "en": "A sudden death round is played",
                    "es": "Se juega una ronda de muerte súbita",
                    "de": "Eine Sudden-Death-Runde wird gespielt",
                    "nl": "Een sudden death-ronde wordt gespeeld"
                },
                {
                    "en": "Both players share the victory",
                    "es": "Ambos jugadores comparten la victoria",
                    "de": "Beide Spieler teilen den Sieg",
                    "nl": "Beide spelers delen de overwinning"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Modern Go uses a komi with a half-point (like 6.5 or 7.5) specifically to prevent draws, ensuring there is always a winner.",
                "es": "El Go moderno usa un komi con medio punto (como 6,5 o 7,5) específicamente para evitar empates, asegurando siempre un ganador.",
                "de": "Modernes Go verwendet ein Komi mit halbem Punkt (wie 6,5 oder 7,5), um Gleichstand zu verhindern und immer einen Sieger zu haben.",
                "nl": "Modern Go gebruikt een komi met een half punt (zoals 6,5 of 7,5) specifiek om gelijkspel te voorkomen, zodat er altijd een winnaar is."
            }
        },
        {
            "question": {
                "en": "What is a 'peep' in Go?",
                "es": "¿Qué es un 'espionaje' en Go?",
                "de": "Was ist ein 'Peep' in Go?",
                "nl": "Wat is een 'peep' in Go?"
            },
            "options": [
                {
                    "en": "A move threatening to cut the opponent's stones",
                    "es": "Un movimiento que amenaza con cortar las piedras",
                    "de": "Ein Zug, der droht, die Steine des Gegners zu schneiden",
                    "nl": "Een zet die dreigt de stenen van de tegenstander te snijden"
                },
                {
                    "en": "Looking at the opponent's strategy notes",
                    "es": "Mirar las notas estratégicas del oponente",
                    "de": "Die Strategienotizen des Gegners ansehen",
                    "nl": "Naar de strategieaantekeningen van de tegenstander kijken"
                },
                {
                    "en": "A very small group of stones",
                    "es": "Un grupo muy pequeño de piedras",
                    "de": "Eine sehr kleine Steingruppe",
                    "nl": "Een zeer kleine groep stenen"
                },
                {
                    "en": "A pass move to observe the game",
                    "es": "Un movimiento de paso para observar",
                    "de": "Ein Passzug zum Beobachten",
                    "nl": "Een paszet om het spel te observeren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A peep is a move placed next to a gap in the opponent's stones, threatening to cut them apart. It usually forces the opponent to connect.",
                "es": "Un peep es un movimiento junto a un hueco en las piedras del oponente, amenazando con cortarlas. Generalmente obliga al oponente a conectar.",
                "de": "Ein Peep ist ein Zug neben einer Lücke in den Steinen des Gegners, der droht, sie zu trennen. Er zwingt den Gegner meist zum Verbinden.",
                "nl": "Een peep is een zet naast een gat in de stenen van de tegenstander, die dreigt ze te scheiden. Het dwingt de tegenstander meestal om te verbinden."
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
                    "en": "1",
                    "es": "1",
                    "de": "1",
                    "nl": "1"
                },
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
                }
            ],
            "correct": 1,
            "explanation": {
                "en": "A stone placed on a corner intersection has exactly 2 liberties, compared to 3 on the side and 4 in the center of the board.",
                "es": "Una piedra en la esquina tiene exactamente 2 libertades, comparado con 3 en el lado y 4 en el centro del tablero.",
                "de": "Ein Stein in der Ecke hat genau 2 Freiheiten, im Vergleich zu 3 am Rand und 4 in der Mitte des Brettes.",
                "nl": "Een steen op een hoekpunt heeft precies 2 vrijheden, vergeleken met 3 aan de zijkant en 4 in het midden van het bord."
            }
        },
        {
            "question": {
                "en": "What is a 'wall' in Go strategy?",
                "es": "¿Qué es un 'muro' en la estrategia de Go?",
                "de": "Was ist eine 'Mauer' in der Go-Strategie?",
                "nl": "Wat is een 'muur' in Go-strategie?"
            },
            "options": [
                {
                    "en": "A solid line of stones projecting influence",
                    "es": "Una línea sólida de piedras que proyecta influencia",
                    "de": "Eine solide Steinlinie, die Einfluss ausstrahlt",
                    "nl": "Een stevige lijn stenen die invloed uitstraalt"
                },
                {
                    "en": "The edge of the board",
                    "es": "El borde del tablero",
                    "de": "Der Rand des Brettes",
                    "nl": "De rand van het bord"
                },
                {
                    "en": "A barrier preventing the opponent from resigning",
                    "es": "Una barrera que impide al oponente rendirse",
                    "de": "Eine Barriere, die den Gegner am Aufgeben hindert",
                    "nl": "Een barrière die de tegenstander verhindert op te geven"
                },
                {
                    "en": "A group that blocks all of the opponent's moves",
                    "es": "Un grupo que bloquea todos los movimientos del oponente",
                    "de": "Eine Gruppe, die alle Züge des Gegners blockiert",
                    "nl": "Een groep die alle zetten van de tegenstander blokkeert"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A wall is a solid line of connected stones that faces outward and projects influence. Walls are used to build territory or attack weak groups.",
                "es": "Un muro es una línea sólida de piedras que mira hacia afuera y proyecta influencia. Se usa para construir territorio o atacar grupos débiles.",
                "de": "Eine Mauer ist eine solide Linie verbundener Steine, die nach außen zeigt und Einfluss ausstrahlt. Sie dient dem Gebietsaufbau oder Angriff.",
                "nl": "Een muur is een stevige lijn verbonden stenen die naar buiten wijst en invloed uitstraalt. Muren worden gebruikt om gebied te bouwen of zwakke groepen aan te vallen."
            }
        },
        {
            "question": {
                "en": "What is 'miai' in Go?",
                "es": "¿Qué es 'miai' en Go?",
                "de": "Was ist 'Miai' in Go?",
                "nl": "Wat is 'miai' in Go?"
            },
            "options": [
                {
                    "en": "Two points of equal value where getting one guarantees the other is lost",
                    "es": "Dos puntos de igual valor donde obtener uno garantiza perder el otro",
                    "de": "Zwei gleichwertige Punkte, bei denen einer den Verlust des anderen bedeutet",
                    "nl": "Twee punten van gelijke waarde waarbij het ene punt het andere kost"
                },
                {
                    "en": "A Japanese dating tradition before Go matches",
                    "es": "Una tradición japonesa de citas antes de partidas",
                    "de": "Eine japanische Dating-Tradition vor Go-Spielen",
                    "nl": "Een Japanse datingtraditie voor Go-wedstrijden"
                },
                {
                    "en": "The maximum number of moves in a game",
                    "es": "El número máximo de movimientos en un juego",
                    "de": "Die maximale Anzahl von Zügen in einem Spiel",
                    "nl": "Het maximale aantal zetten in een spel"
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
                "en": "Miai describes two equally valuable points where if one player takes one, the other player takes the other. They balance each other out.",
                "es": "Miai describe dos puntos igualmente valiosos donde si un jugador toma uno, el otro toma el segundo. Se equilibran mutuamente.",
                "de": "Miai beschreibt zwei gleichwertige Punkte, bei denen jeder Spieler einen erhält. Sie gleichen sich gegenseitig aus.",
                "nl": "Miai beschrijft twee even waardevolle punten waarbij als de ene speler er één neemt, de andere de tweede neemt. Ze heffen elkaar op."
            }
        },
        {
            "question": {
                "en": "What is the 'first line' in Go?",
                "es": "¿Qué es la 'primera línea' en Go?",
                "de": "Was ist die 'erste Linie' in Go?",
                "nl": "Wat is de 'eerste lijn' in Go?"
            },
            "options": [
                {
                    "en": "The outermost line at the edge of the board",
                    "es": "La línea más exterior en el borde del tablero",
                    "de": "Die äußerste Linie am Rand des Brettes",
                    "nl": "De buitenste lijn aan de rand van het bord"
                },
                {
                    "en": "The central horizontal line",
                    "es": "La línea horizontal central",
                    "de": "Die zentrale horizontale Linie",
                    "nl": "De centrale horizontale lijn"
                },
                {
                    "en": "The first move of the game",
                    "es": "El primer movimiento del juego",
                    "de": "Der erste Zug des Spiels",
                    "nl": "De eerste zet van het spel"
                },
                {
                    "en": "The line connecting all star points",
                    "es": "La línea que conecta todos los puntos estrella",
                    "de": "Die Linie, die alle Sternpunkte verbindet",
                    "nl": "De lijn die alle sterpunten verbindt"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The first line is the outermost line along the edge of the board. Stones on the first line have fewer liberties and are generally weak.",
                "es": "La primera línea es la más exterior del tablero. Las piedras en la primera línea tienen menos libertades y son generalmente débiles.",
                "de": "Die erste Linie ist die äußerste Linie am Rand des Brettes. Steine auf der ersten Linie haben weniger Freiheiten und sind generell schwach.",
                "nl": "De eerste lijn is de buitenste lijn aan de rand van het bord. Stenen op de eerste lijn hebben minder vrijheden en zijn over het algemeen zwak."
            }
        },
        {
            "question": {
                "en": "What is a 'shoulder hit' in Go?",
                "es": "¿Qué es un 'golpe de hombro' en Go?",
                "de": "Was ist ein 'Schulterstoß' in Go?",
                "nl": "Wat is een 'schouderstoot' in Go?"
            },
            "options": [
                {
                    "en": "Playing diagonally next to an opponent's stone",
                    "es": "Jugar diagonalmente junto a una piedra del oponente",
                    "de": "Diagonal neben einen gegnerischen Stein spielen",
                    "nl": "Diagonaal naast een steen van de tegenstander spelen"
                },
                {
                    "en": "Physically bumping the opponent during play",
                    "es": "Empujar físicamente al oponente durante el juego",
                    "de": "Den Gegner während des Spiels anstoßen",
                    "nl": "De tegenstander fysiek aanstoten tijdens het spel"
                },
                {
                    "en": "Placing a stone directly on top of another",
                    "es": "Colocar una piedra directamente encima de otra",
                    "de": "Einen Stein direkt auf einen anderen setzen",
                    "nl": "Een steen direct op een andere plaatsen"
                },
                {
                    "en": "A move that captures a corner stone",
                    "es": "Un movimiento que captura una piedra de esquina",
                    "de": "Ein Zug, der einen Eckstein schlägt",
                    "nl": "Een zet die een hoeksteen verovert"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A shoulder hit is played diagonally adjacent to an opponent's stone, often used to reduce the opponent's territory or limit their expansion.",
                "es": "Un golpe de hombro se juega diagonalmente adyacente a una piedra del oponente, para reducir su territorio o limitar su expansión.",
                "de": "Ein Schulterstoß wird diagonal neben einen gegnerischen Stein gespielt, um dessen Gebiet zu reduzieren oder Expansion zu begrenzen.",
                "nl": "Een schouderstoot wordt diagonaal naast een steen van de tegenstander gespeeld, om diens gebied te verkleinen of uitbreiding te beperken."
            }
        },
        {
            "question": {
                "en": "What is 'life and death' study in Go?",
                "es": "¿Qué es el estudio de 'vida y muerte' en Go?",
                "de": "Was ist das 'Leben-und-Tod'-Studium in Go?",
                "nl": "Wat is het 'leven en dood'-onderzoek in Go?"
            },
            "options": [
                {
                    "en": "Determining whether groups can survive or be captured",
                    "es": "Determinar si los grupos pueden sobrevivir o ser capturados",
                    "de": "Bestimmen, ob Gruppen überleben oder geschlagen werden",
                    "nl": "Bepalen of groepen kunnen overleven of veroverd worden"
                },
                {
                    "en": "A historical study of Go players who have passed away",
                    "es": "Un estudio histórico de jugadores de Go fallecidos",
                    "de": "Eine historische Studie verstorbener Go-Spieler",
                    "nl": "Een historische studie van overleden Go-spelers"
                },
                {
                    "en": "The philosophy behind the game of Go",
                    "es": "La filosofía detrás del juego de Go",
                    "de": "Die Philosophie hinter dem Go-Spiel",
                    "nl": "De filosofie achter het spel Go"
                },
                {
                    "en": "Tournament rules about time controls",
                    "es": "Reglas de torneo sobre controles de tiempo",
                    "de": "Turnierregeln über Zeitkontrollen",
                    "nl": "Toernooiregels over tijdscontroles"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Life and death problems are puzzles where you determine the status of a group: whether it can make two eyes to live or be killed by the opponent.",
                "es": "Los problemas de vida y muerte son puzzles donde determinas si un grupo puede hacer dos ojos para vivir o ser eliminado.",
                "de": "Leben-und-Tod-Probleme sind Aufgaben, bei denen man bestimmt, ob eine Gruppe zwei Augen machen kann oder vom Gegner getötet wird.",
                "nl": "Leven-en-dood-problemen zijn puzzels waarbij je bepaalt of een groep twee ogen kan maken om te leven of door de tegenstander gedood wordt."
            }
        },
        {
            "question": {
                "en": "What is 'byoyomi' in Go?",
                "es": "¿Qué es 'byoyomi' en Go?",
                "de": "Was ist 'Byoyomi' in Go?",
                "nl": "Wat is 'byoyomi' in Go?"
            },
            "options": [
                {
                    "en": "Overtime periods with fixed time per move",
                    "es": "Períodos de tiempo extra con tiempo fijo por movimiento",
                    "de": "Nachspielzeit mit fester Zeit pro Zug",
                    "nl": "Overtijdperiodes met vaste tijd per zet"
                },
                {
                    "en": "A type of Go stone material",
                    "es": "Un tipo de material de piedra de Go",
                    "de": "Eine Art Go-Steinmaterial",
                    "nl": "Een soort Go-steenmateriaal"
                },
                {
                    "en": "The opening ceremony at a tournament",
                    "es": "La ceremonia de apertura de un torneo",
                    "de": "Die Eröffnungszeremonie eines Turniers",
                    "nl": "De openingsceremonie van een toernooi"
                },
                {
                    "en": "A counting method for scoring",
                    "es": "Un método de conteo para puntuar",
                    "de": "Eine Zählmethode zur Wertung",
                    "nl": "Een telmethode voor de score"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Byoyomi is an overtime system used in Go tournaments. After the main time expires, players get a fixed number of seconds per move.",
                "es": "Byoyomi es un sistema de tiempo extra en torneos de Go. Después del tiempo principal, los jugadores tienen segundos fijos por movimiento.",
                "de": "Byoyomi ist ein Nachspielzeitsystem bei Go-Turnieren. Nach Ablauf der Hauptzeit hat man eine feste Anzahl Sekunden pro Zug.",
                "nl": "Byoyomi is een overtijdsysteem bij Go-toernooien. Na de hoofdtijd krijgen spelers een vast aantal seconden per zet."
            }
        },
        {
            "question": {
                "en": "What is a 'throw-in' technique in Go?",
                "es": "¿Qué es la técnica de 'lanzamiento' en Go?",
                "de": "Was ist die 'Einwurf'-Technik in Go?",
                "nl": "Wat is de 'inwerp'-techniek in Go?"
            },
            "options": [
                {
                    "en": "Playing a stone to be captured to reduce eye space",
                    "es": "Jugar una piedra para ser capturada y reducir espacio de ojos",
                    "de": "Einen Stein zum Schlagen spielen, um Augenraum zu reduzieren",
                    "nl": "Een steen spelen die veroverd wordt om oogruimte te verkleinen"
                },
                {
                    "en": "Tossing the stones into the bowl after a game",
                    "es": "Lanzar las piedras al cuenco después de un juego",
                    "de": "Die Steine nach dem Spiel in die Schale werfen",
                    "nl": "De stenen na het spel in de pot gooien"
                },
                {
                    "en": "Starting a new game immediately after one ends",
                    "es": "Comenzar un nuevo juego inmediatamente después de que termina uno",
                    "de": "Sofort nach einem Spiel ein neues beginnen",
                    "nl": "Direct een nieuw spel beginnen nadat er een eindigt"
                },
                {
                    "en": "Placing a stone without thinking",
                    "es": "Colocar una piedra sin pensar",
                    "de": "Einen Stein ohne Nachdenken setzen",
                    "nl": "Een steen plaatsen zonder na te denken"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A throw-in is a tesuji where you play a stone inside the opponent's eye space, forcing them to capture it and reducing the space available for making eyes.",
                "es": "Un lanzamiento es un tesuji donde juegas una piedra dentro del espacio ocular del oponente, forzándolo a capturarla y reduciendo el espacio para ojos.",
                "de": "Ein Einwurf ist ein Tesuji, bei dem man einen Stein in den Augenraum des Gegners spielt und ihn so zum Schlagen zwingt, um den Augenraum zu verkleinern.",
                "nl": "Een inwerp is een tesuji waarbij je een steen in de oogruimte van de tegenstander speelt, waardoor die moet veroveren en de ruimte voor ogen afneemt."
            }
        },
        {
            "question": {
                "en": "What does 'overplay' mean in Go?",
                "es": "¿Qué significa 'sobrepasar' en Go?",
                "de": "Was bedeutet 'Überspiel' in Go?",
                "nl": "Wat betekent 'overspel' in Go?"
            },
            "options": [
                {
                    "en": "Making an overly aggressive move that can be punished",
                    "es": "Hacer un movimiento demasiado agresivo que puede ser castigado",
                    "de": "Einen zu aggressiven Zug machen, der bestraft werden kann",
                    "nl": "Een te agressieve zet doen die bestraft kan worden"
                },
                {
                    "en": "Playing too many games in one day",
                    "es": "Jugar demasiados juegos en un día",
                    "de": "Zu viele Spiele an einem Tag spielen",
                    "nl": "Te veel spellen op één dag spelen"
                },
                {
                    "en": "Placing more stones than allowed",
                    "es": "Colocar más piedras de las permitidas",
                    "de": "Mehr Steine setzen als erlaubt",
                    "nl": "Meer stenen plaatsen dan toegestaan"
                },
                {
                    "en": "Taking too long to make a move",
                    "es": "Tardar demasiado en hacer un movimiento",
                    "de": "Zu lange für einen Zug brauchen",
                    "nl": "Te lang doen over een zet"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "An overplay is a move that is too greedy or aggressive for the position. If the opponent responds correctly, an overplay can backfire and lose points.",
                "es": "Un sobrepasar es un movimiento demasiado codicioso o agresivo para la posición. Si el oponente responde correctamente, puede resultar contraproducente.",
                "de": "Ein Überspiel ist ein zu gieriger oder aggressiver Zug. Bei korrekter Antwort des Gegners kann er nach hinten losgehen.",
                "nl": "Overspel is een te hebzuchtige of agressieve zet. Als de tegenstander correct reageert, kan het averechts werken."
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
                    "en": "Two cutting moves forming a plus shape",
                    "es": "Dos cortes que forman una cruz",
                    "de": "Zwei Schnitte die ein Pluszeichen bilden",
                    "nl": "Twee sneden die een plusteken vormen"
                },
                {
                    "en": "Removing all stones from a line",
                    "es": "Eliminar todas las piedras de una línea",
                    "de": "Alle Steine einer Linie entfernen",
                    "nl": "Alle stenen van een lijn verwijderen"
                },
                {
                    "en": "A diagonal move across the board",
                    "es": "Un movimiento diagonal por el tablero",
                    "de": "Ein diagonaler Zug über das Brett",
                    "nl": "Een diagonale zet over het bord"
                },
                {
                    "en": "Splitting the board into equal halves",
                    "es": "Dividir el tablero en mitades iguales",
                    "de": "Das Brett in gleiche Hälften teilen",
                    "nl": "Het bord in gelijke helften verdelen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A cross-cut occurs when both players cut each other, forming a plus shape with alternating colors. It creates a complex fighting situation.",
                "es": "Un corte cruzado ocurre cuando ambos jugadores se cortan mutuamente formando una cruz con colores alternados. Crea una situación de lucha compleja.",
                "de": "Ein Kreuzschnitt entsteht, wenn beide Spieler sich gegenseitig schneiden und ein Pluszeichen mit wechselnden Farben bilden.",
                "nl": "Een kruissnede ontstaat wanneer beide spelers elkaar snijden en een plusteken vormen met afwisselende kleuren."
            }
        },
        {
            "question": {
                "en": "What is 'tenuki' in Go?",
                "es": "¿Qué es 'tenuki' en Go?",
                "de": "Was ist 'Tenuki' bei Go?",
                "nl": "Wat is 'tenuki' bij Go?"
            },
            "options": [
                {
                    "en": "Playing elsewhere instead of responding locally",
                    "es": "Jugar en otro lugar en vez de responder localmente",
                    "de": "Anderswo spielen statt lokal zu antworten",
                    "nl": "Elders spelen in plaats van lokaal te reageren"
                },
                {
                    "en": "Placing a stone on top of another",
                    "es": "Colocar una piedra encima de otra",
                    "de": "Einen Stein auf einen anderen setzen",
                    "nl": "Een steen bovenop een andere plaatsen"
                },
                {
                    "en": "Surrendering a group of stones",
                    "es": "Rendirse con un grupo de piedras",
                    "de": "Eine Steingruppe aufgeben",
                    "nl": "Een groep stenen opgeven"
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
                "en": "Tenuki means ignoring the opponent's last move and playing elsewhere on the board. It is a strategic choice to prioritize a bigger move.",
                "es": "Tenuki significa ignorar la última jugada del oponente y jugar en otro lugar. Es una elección estratégica para priorizar una jugada mayor.",
                "de": "Tenuki bedeutet, den letzten Zug des Gegners zu ignorieren und anderswo zu spielen. Es ist eine strategische Entscheidung.",
                "nl": "Tenuki betekent de laatste zet van de tegenstander negeren en elders spelen. Het is een strategische keuze voor een grotere zet."
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
                    "de": "Ein Zug der um den gegnerischen Stein greift",
                    "nl": "Een zet die om de steen van de tegenstander gaat"
                },
                {
                    "en": "A pass move",
                    "es": "Un movimiento de paso",
                    "de": "Ein Passzug",
                    "nl": "Een paszet"
                },
                {
                    "en": "A move in the center of the board",
                    "es": "Un movimiento en el centro del tablero",
                    "de": "Ein Zug in der Brettmitte",
                    "nl": "Een zet in het midden van het bord"
                },
                {
                    "en": "A forced capture move",
                    "es": "Un movimiento de captura forzada",
                    "de": "Ein erzwungener Fangzug",
                    "nl": "Een gedwongen vangzet"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A hane is a move that bends around the opponent's stone at the head of a group, typically played diagonally adjacent to the last stone in a line.",
                "es": "Un hane es un movimiento que se curva alrededor de la piedra del oponente, normalmente jugado diagonalmente adyacente a la última piedra en una línea.",
                "de": "Ein Hane ist ein Zug, der um den Stein des Gegners am Kopf einer Gruppe greift, diagonal neben dem letzten Stein einer Linie.",
                "nl": "Een hane is een zet die om de steen van de tegenstander buigt, meestal diagonaal naast de laatste steen in een lijn gespeeld."
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
                    "en": "A knight's move pattern",
                    "es": "Un patrón de movimiento de caballo",
                    "de": "Ein Springerzug-Muster",
                    "nl": "Een paardensprong-patroon"
                },
                {
                    "en": "A straight line of three stones",
                    "es": "Una línea recta de tres piedras",
                    "de": "Eine gerade Linie aus drei Steinen",
                    "nl": "Een rechte lijn van drie stenen"
                },
                {
                    "en": "A diagonal jump of four spaces",
                    "es": "Un salto diagonal de cuatro espacios",
                    "de": "Ein diagonaler Sprung über vier Felder",
                    "nl": "Een diagonale sprong van vier velden"
                },
                {
                    "en": "A circular formation of stones",
                    "es": "Una formación circular de piedras",
                    "de": "Eine kreisförmige Steinformation",
                    "nl": "Een cirkelvormige steenformatie"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A keima is a knight's move, where a stone is placed one space away in one direction and two spaces in another, similar to a chess knight.",
                "es": "Un keima es un movimiento de caballo, donde una piedra se coloca a un espacio en una dirección y dos en otra, similar al caballo de ajedrez.",
                "de": "Ein Keima ist ein Springerzug, bei dem ein Stein in eine Richtung ein und in die andere zwei Felder entfernt gesetzt wird.",
                "nl": "Een keima is een paardensprong, waarbij een steen één veld in één richting en twee velden in een andere wordt geplaatst."
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
                    "nl": "De eindspeelfase"
                },
                {
                    "en": "The opening sequence of moves",
                    "es": "La secuencia de movimientos iniciales",
                    "de": "Die Eröffnungszugfolge",
                    "nl": "De openingsreeks van zetten"
                },
                {
                    "en": "A type of capturing technique",
                    "es": "Un tipo de técnica de captura",
                    "de": "Eine Art Fangtechnik",
                    "nl": "Een type vangtechniek"
                },
                {
                    "en": "A formal greeting before the game",
                    "es": "Un saludo formal antes del juego",
                    "de": "Eine formelle Begrüßung vor dem Spiel",
                    "nl": "Een formele begroeting voor het spel"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Yose is the endgame phase in Go where players finalize borders between territories and claim the remaining neutral points on the board.",
                "es": "Yose es la fase final en Go donde los jugadores finalizan las fronteras entre territorios y reclaman los puntos neutrales restantes.",
                "de": "Yose ist die Endspielphase bei Go, in der Spieler die Grenzen zwischen Gebieten festlegen und restliche neutrale Punkte beanspruchen.",
                "nl": "Yose is de eindspeelfase bij Go waarin spelers de grenzen tussen gebieden bepalen en de resterende neutrale punten claimen."
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
                    "en": "A diagonal move next to your own stone",
                    "es": "Un movimiento diagonal junto a tu propia piedra",
                    "de": "Ein diagonaler Zug neben dem eigenen Stein",
                    "nl": "Een diagonale zet naast je eigen steen"
                },
                {
                    "en": "A straight extension along the edge",
                    "es": "Una extensión recta a lo largo del borde",
                    "de": "Eine gerade Verlängerung entlang der Kante",
                    "nl": "Een rechte uitbreiding langs de rand"
                },
                {
                    "en": "A move that captures two stones",
                    "es": "Un movimiento que captura dos piedras",
                    "de": "Ein Zug der zwei Steine fängt",
                    "nl": "Een zet die twee stenen vangt"
                },
                {
                    "en": "A defensive wall formation",
                    "es": "Una formación de muro defensivo",
                    "de": "Eine defensive Mauerformation",
                    "nl": "Een defensieve muurformatie"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A kosumi is a diagonal placement next to one of your own stones. It is a flexible move often used in the opening and for making shape.",
                "es": "Un kosumi es una colocación diagonal junto a una de tus propias piedras. Es un movimiento flexible usado en la apertura y para crear forma.",
                "de": "Ein Kosumi ist ein diagonaler Zug neben einem eigenen Stein. Er ist flexibel und wird oft in der Eröffnung und zum Formenbilden verwendet.",
                "nl": "Een kosumi is een diagonale plaatsing naast een eigen steen. Het is een flexibele zet die vaak wordt gebruikt in de opening."
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
                    "en": "A solid extension one space in a straight line",
                    "es": "Una extensión sólida de un espacio en línea recta",
                    "de": "Eine solide Verlängerung um ein Feld in gerader Linie",
                    "nl": "Een solide uitbreiding van één veld in een rechte lijn"
                },
                {
                    "en": "A jump of two spaces",
                    "es": "Un salto de dos espacios",
                    "de": "Ein Sprung über zwei Felder",
                    "nl": "Een sprong van twee velden"
                },
                {
                    "en": "A capturing move from behind",
                    "es": "Un movimiento de captura por detrás",
                    "de": "Ein Fangzug von hinten",
                    "nl": "Een vangzet van achteren"
                },
                {
                    "en": "A move that creates two eyes at once",
                    "es": "Un movimiento que crea dos ojos a la vez",
                    "de": "Ein Zug der zwei Augen gleichzeitig bildet",
                    "nl": "Een zet die twee ogen tegelijk maakt"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A nobi is a solid one-space extension along a straight line from an existing stone. It is a basic connecting move that strengthens the group.",
                "es": "Un nobi es una extensión sólida de un espacio en línea recta desde una piedra existente. Es un movimiento de conexión básico que fortalece el grupo.",
                "de": "Ein Nobi ist eine solide Verlängerung um ein Feld in gerader Linie. Es ist ein grundlegender Verbindungszug, der die Gruppe stärkt.",
                "nl": "Een nobi is een solide uitbreiding van één veld in een rechte lijn. Het is een basiszet die de groep versterkt."
            }
        },
        {
            "question": {
                "en": "What is a 'tobi' in Go?",
                "es": "¿Qué es un 'tobi' en Go?",
                "de": "Was ist ein 'Tobi' bei Go?",
                "nl": "Wat is een 'tobi' bij Go?"
            },
            "options": [
                {
                    "en": "A one-space jump along a line",
                    "es": "Un salto de un espacio a lo largo de una línea",
                    "de": "Ein Ein-Feld-Sprung entlang einer Linie",
                    "nl": "Een sprong van één veld langs een lijn"
                },
                {
                    "en": "A move that surrounds the opponent",
                    "es": "Un movimiento que rodea al oponente",
                    "de": "Ein Zug der den Gegner umzingelt",
                    "nl": "Een zet die de tegenstander omsingelt"
                },
                {
                    "en": "A stone placed on the first line",
                    "es": "Una piedra colocada en la primera línea",
                    "de": "Ein Stein auf der ersten Linie",
                    "nl": "Een steen geplaatst op de eerste lijn"
                },
                {
                    "en": "A capturing sequence of three moves",
                    "es": "Una secuencia de captura de tres movimientos",
                    "de": "Eine Fangsequenz von drei Zügen",
                    "nl": "Een vangsequentie van drie zetten"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A tobi is a one-space jump, where a stone is placed with one empty intersection between it and a friendly stone along a straight line.",
                "es": "Un tobi es un salto de un espacio, donde una piedra se coloca con una intersección vacía entre ella y una piedra amiga en línea recta.",
                "de": "Ein Tobi ist ein Ein-Feld-Sprung, bei dem ein Stein mit einer leeren Kreuzung dazwischen in gerader Linie gesetzt wird.",
                "nl": "Een tobi is een sprong van één veld, waarbij een steen met één lege kruising ertussen in een rechte lijn wordt geplaatst."
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
                    "en": "A corner enclosure made with two stones",
                    "es": "Un cierre de esquina hecho con dos piedras",
                    "de": "Eine Eckumschließung mit zwei Steinen",
                    "nl": "Een hoekopsluiting gemaakt met twee stenen"
                },
                {
                    "en": "A wall across the center",
                    "es": "Un muro a través del centro",
                    "de": "Eine Mauer durch die Mitte",
                    "nl": "Een muur door het midden"
                },
                {
                    "en": "A capturing net at the edge",
                    "es": "Una red de captura en el borde",
                    "de": "Ein Fangnetz am Rand",
                    "nl": "Een vangnet aan de rand"
                },
                {
                    "en": "A group with three eyes",
                    "es": "Un grupo con tres ojos",
                    "de": "Eine Gruppe mit drei Augen",
                    "nl": "Een groep met drie ogen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A shimari is a corner enclosure formed by two stones that secure territory in a corner. It is a common opening strategy to claim corners early.",
                "es": "Un shimari es un cierre de esquina formado por dos piedras que aseguran territorio en una esquina. Es una estrategia de apertura común.",
                "de": "Ein Shimari ist eine Eckumschließung aus zwei Steinen, die Gebiet in einer Ecke sichern. Es ist eine häufige Eröffnungsstrategie.",
                "nl": "Een shimari is een hoekopsluiting van twee stenen die gebied in een hoek veiligstellen. Het is een veelgebruikte openingsstrategie."
            }
        },
        {
            "question": {
                "en": "What is a 'kakari' in Go?",
                "es": "¿Qué es un 'kakari' en Go?",
                "de": "Was ist ein 'Kakari' bei Go?",
                "nl": "Wat is een 'kakari' bij Go?"
            },
            "options": [
                {
                    "en": "An approach move toward a corner stone",
                    "es": "Un movimiento de aproximación hacia una piedra de esquina",
                    "de": "Ein Annäherungszug zu einem Eckstein",
                    "nl": "Een benaderingszet naar een hoeksteen"
                },
                {
                    "en": "A defensive move on the side",
                    "es": "Un movimiento defensivo en el lateral",
                    "de": "Ein defensiver Zug an der Seite",
                    "nl": "Een defensieve zet aan de zijkant"
                },
                {
                    "en": "A move that creates a ladder",
                    "es": "Un movimiento que crea una escalera",
                    "de": "Ein Zug der eine Leiter erzeugt",
                    "nl": "Een zet die een ladder maakt"
                },
                {
                    "en": "A pass in tournament play",
                    "es": "Un pase en juego de torneo",
                    "de": "Ein Passen im Turnierspiel",
                    "nl": "Een pas in toernooispel"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A kakari is an approach move played near an opponent's corner stone to prevent them from forming a shimari and to contest the corner territory.",
                "es": "Un kakari es un movimiento de aproximación jugado cerca de una piedra de esquina del oponente para evitar que forme un shimari.",
                "de": "Ein Kakari ist ein Annäherungszug nahe einem gegnerischen Eckstein, um ein Shimari zu verhindern und das Eckgebiet zu bestreiten.",
                "nl": "Een kakari is een benaderingszet bij een hoeksteen van de tegenstander om een shimari te voorkomen en het hoekgebied te betwisten."
            }
        },
        {
            "question": {
                "en": "What is a 'pincer' attack in Go?",
                "es": "¿Qué es un ataque de 'pinza' en Go?",
                "de": "Was ist ein 'Zangenangriff' bei Go?",
                "nl": "Wat is een 'tangaanval' bij Go?"
            },
            "options": [
                {
                    "en": "Attacking a stone from both sides at once",
                    "es": "Atacar una piedra desde ambos lados a la vez",
                    "de": "Einen Stein von beiden Seiten gleichzeitig angreifen",
                    "nl": "Een steen van beide kanten tegelijk aanvallen"
                },
                {
                    "en": "Placing stones in a triangle shape",
                    "es": "Colocar piedras en forma de triángulo",
                    "de": "Steine in Dreiecksform setzen",
                    "nl": "Stenen in driehoeksvorm plaatsen"
                },
                {
                    "en": "Removing a stone from the board",
                    "es": "Retirar una piedra del tablero",
                    "de": "Einen Stein vom Brett nehmen",
                    "nl": "Een steen van het bord verwijderen"
                },
                {
                    "en": "Playing on the star points only",
                    "es": "Jugar solo en los puntos estrella",
                    "de": "Nur auf Sternpunkten spielen",
                    "nl": "Alleen op sterpunten spelen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A pincer is a move that attacks an approaching stone by placing a stone on the opposite side, squeezing it between two friendly stones.",
                "es": "Una pinza es un movimiento que ataca una piedra que se aproxima colocando una piedra en el lado opuesto, apretándola entre dos piedras amigas.",
                "de": "Ein Zangenangriff attackiert einen sich nähernden Stein, indem man auf der gegenüberliegenden Seite spielt und ihn einklemmt.",
                "nl": "Een tangaanval valt een naderende steen aan door een steen aan de andere kant te plaatsen, waardoor deze wordt ingeklemd."
            }
        },
        {
            "question": {
                "en": "What does 'tsumego' mean in Go?",
                "es": "¿Qué significa 'tsumego' en Go?",
                "de": "Was bedeutet 'Tsumego' bei Go?",
                "nl": "Wat betekent 'tsumego' bij Go?"
            },
            "options": [
                {
                    "en": "Life-and-death puzzles for practice",
                    "es": "Puzzles de vida y muerte para practicar",
                    "de": "Leben-und-Tod-Rätsel zum Üben",
                    "nl": "Leven-en-dood-puzzels om te oefenen"
                },
                {
                    "en": "A type of tournament format",
                    "es": "Un tipo de formato de torneo",
                    "de": "Ein Turnierformat",
                    "nl": "Een type toernooiformaat"
                },
                {
                    "en": "The Japanese name for the Go board",
                    "es": "El nombre japonés para el tablero de Go",
                    "de": "Der japanische Name für das Go-Brett",
                    "nl": "De Japanse naam voor het Go-bord"
                },
                {
                    "en": "A special scoring method",
                    "es": "Un método especial de puntuación",
                    "de": "Eine spezielle Wertungsmethode",
                    "nl": "Een speciale scoringsmethode"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Tsumego are life-and-death problems used to practice reading skills. Players must determine whether a group can live or die with correct play.",
                "es": "Tsumego son problemas de vida y muerte usados para practicar la lectura. Los jugadores determinan si un grupo puede vivir o morir con juego correcto.",
                "de": "Tsumego sind Leben-und-Tod-Probleme zum Üben der Lesefähigkeit. Spieler müssen bestimmen, ob eine Gruppe leben oder sterben kann.",
                "nl": "Tsumego zijn leven-en-dood-problemen om leesvaardigheid te oefenen. Spelers bepalen of een groep kan leven of sterven bij correct spel."
            }
        },
        {
            "question": {
                "en": "What is a 'large knight's move' in Go?",
                "es": "¿Qué es un 'gran movimiento de caballo' en Go?",
                "de": "Was ist ein 'großer Springerzug' bei Go?",
                "nl": "Wat is een 'grote paardensprong' bij Go?"
            },
            "options": [
                {
                    "en": "A move two spaces in one direction and one across",
                    "es": "Un movimiento de dos espacios en una dirección y uno cruzado",
                    "de": "Ein Zug zwei Felder in eine und ein Feld quer",
                    "nl": "Een zet twee velden in één richting en één dwars"
                },
                {
                    "en": "A move five spaces away",
                    "es": "Un movimiento a cinco espacios de distancia",
                    "de": "Ein Zug fünf Felder entfernt",
                    "nl": "Een zet vijf velden verderop"
                },
                {
                    "en": "A capturing move in the corner",
                    "es": "Un movimiento de captura en la esquina",
                    "de": "Ein Fangzug in der Ecke",
                    "nl": "Een vangzet in de hoek"
                },
                {
                    "en": "A move that skips the opponent's turn",
                    "es": "Un movimiento que salta el turno del oponente",
                    "de": "Ein Zug der den Gegner überspringt",
                    "nl": "Een zet die de beurt van de tegenstander overslaat"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The large knight's move, or ogeima, extends two spaces in one direction and one space perpendicular, covering more ground than a regular keima.",
                "es": "El gran movimiento de caballo, u ogeima, se extiende dos espacios en una dirección y uno perpendicular, cubriendo más terreno que un keima regular.",
                "de": "Der große Springerzug, oder Ogeima, geht zwei Felder in eine und ein Feld senkrecht dazu, und deckt mehr ab als ein normales Keima.",
                "nl": "De grote paardensprong, of ogeima, gaat twee velden in één richting en één veld loodrecht, en bestrijkt meer dan een gewone keima."
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
                    "en": "Making a flexible, light shape in a difficult area",
                    "es": "Crear una forma flexible y ligera en un área difícil",
                    "de": "Eine flexible, leichte Form in einem schwierigen Bereich bilden",
                    "nl": "Een flexibele, lichte vorm maken in een moeilijk gebied"
                },
                {
                    "en": "Aggressively attacking the opponent's group",
                    "es": "Atacar agresivamente el grupo del oponente",
                    "de": "Die Gruppe des Gegners aggressiv angreifen",
                    "nl": "De groep van de tegenstander agressief aanvallen"
                },
                {
                    "en": "Counting territory during the game",
                    "es": "Contar territorio durante el juego",
                    "de": "Gebiet während des Spiels zählen",
                    "nl": "Gebied tellen tijdens het spel"
                },
                {
                    "en": "Resigning when losing badly",
                    "es": "Rendirse cuando se pierde mucho",
                    "de": "Aufgeben wenn man stark verliert",
                    "nl": "Opgeven wanneer je zwaar verliest"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Sabaki is the art of making a flexible, efficient shape with stones in a difficult or hostile area, often involving sacrificing some stones.",
                "es": "Sabaki es el arte de crear una forma flexible y eficiente con piedras en un área difícil u hostil, a menudo sacrificando algunas piedras.",
                "de": "Sabaki ist die Kunst, eine flexible, effiziente Form in einem schwierigen oder feindlichen Bereich zu bilden, oft unter Opferung einiger Steine.",
                "nl": "Sabaki is de kunst om een flexibele, efficiënte vorm te maken in een moeilijk of vijandig gebied, vaak met het opofferen van stenen."
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
                    "en": "A move to test the opponent's intentions",
                    "es": "Un movimiento para probar las intenciones del oponente",
                    "de": "Ein Zug um die Absichten des Gegners zu testen",
                    "nl": "Een zet om de bedoelingen van de tegenstander te testen"
                },
                {
                    "en": "A move that captures a single stone",
                    "es": "Un movimiento que captura una sola piedra",
                    "de": "Ein Zug der einen einzelnen Stein fängt",
                    "nl": "Een zet die één steen vangt"
                },
                {
                    "en": "A forced sequence of moves",
                    "es": "Una secuencia forzada de movimientos",
                    "de": "Eine erzwungene Zugfolge",
                    "nl": "Een gedwongen reeks zetten"
                },
                {
                    "en": "A stone placed on the edge of the board",
                    "es": "Una piedra colocada en el borde del tablero",
                    "de": "Ein Stein am Brettrand",
                    "nl": "Een steen geplaatst aan de rand van het bord"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A probe is a move designed to force the opponent to reveal their intentions. The response to the probe helps you decide your future strategy.",
                "es": "Un sondeo es un movimiento diseñado para forzar al oponente a revelar sus intenciones. La respuesta ayuda a decidir la estrategia futura.",
                "de": "Ein Sondierungszug soll den Gegner zwingen, seine Absichten zu offenbaren. Die Antwort hilft bei der Strategieplanung.",
                "nl": "Een sondeerzet is ontworpen om de tegenstander te dwingen zijn bedoelingen te onthullen. Het antwoord helpt bij het bepalen van de strategie."
            }
        },
        {
            "question": {
                "en": "What does 'kiai' mean in Go?",
                "es": "¿Qué significa 'kiai' en Go?",
                "de": "Was bedeutet 'Kiai' bei Go?",
                "nl": "Wat betekent 'kiai' bij Go?"
            },
            "options": [
                {
                    "en": "Fighting spirit shown through bold moves",
                    "es": "Espíritu de lucha mostrado con movimientos audaces",
                    "de": "Kampfgeist durch mutige Züge gezeigt",
                    "nl": "Vechtlust getoond door gedurfde zetten"
                },
                {
                    "en": "The sound made when placing a stone",
                    "es": "El sonido al colocar una piedra",
                    "de": "Das Geräusch beim Setzen eines Steins",
                    "nl": "Het geluid bij het plaatsen van een steen"
                },
                {
                    "en": "A type of time control",
                    "es": "Un tipo de control de tiempo",
                    "de": "Eine Art Zeitkontrolle",
                    "nl": "Een type tijdcontrole"
                },
                {
                    "en": "A polite bow to the opponent",
                    "es": "Una reverencia al oponente",
                    "de": "Eine Verbeugung vor dem Gegner",
                    "nl": "Een beleefde buiging naar de tegenstander"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Kiai in Go refers to fighting spirit, where a player demonstrates determination through strong, unexpected, or bold moves rather than passive play.",
                "es": "Kiai en Go se refiere al espíritu de lucha, donde un jugador demuestra determinación a través de movimientos fuertes e inesperados en lugar de juego pasivo.",
                "de": "Kiai bei Go bezeichnet Kampfgeist, bei dem ein Spieler Entschlossenheit durch starke, unerwartete Züge statt passivem Spiel zeigt.",
                "nl": "Kiai bij Go verwijst naar vechtlust, waarbij een speler vastberadenheid toont door sterke, onverwachte zetten in plaats van passief spel."
            }
        },
        {
            "question": {
                "en": "What is 'counting' used for during a Go game?",
                "es": "¿Para qué se usa 'contar' durante un juego de Go?",
                "de": "Wofür wird 'Zählen' während eines Go-Spiels verwendet?",
                "nl": "Waarvoor wordt 'tellen' gebruikt tijdens een Go-spel?"
            },
            "options": [
                {
                    "en": "Estimating the score to guide strategy",
                    "es": "Estimar la puntuación para guiar la estrategia",
                    "de": "Die Punktzahl schätzen um die Strategie zu leiten",
                    "nl": "De score schatten om de strategie te bepalen"
                },
                {
                    "en": "Tracking how many moves have been made",
                    "es": "Registrar cuántos movimientos se han hecho",
                    "de": "Zählen wie viele Züge gemacht wurden",
                    "nl": "Bijhouden hoeveel zetten er zijn gedaan"
                },
                {
                    "en": "Determining who plays next",
                    "es": "Determinar quién juega a continuación",
                    "de": "Bestimmen wer als Nächstes spielt",
                    "nl": "Bepalen wie als volgende speelt"
                },
                {
                    "en": "Measuring the time remaining",
                    "es": "Medir el tiempo restante",
                    "de": "Die verbleibende Zeit messen",
                    "nl": "De resterende tijd meten"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Counting in Go means estimating the score during the game. Strong players count regularly to decide whether to play aggressively or defensively.",
                "es": "Contar en Go significa estimar la puntuación durante el juego. Los jugadores fuertes cuentan regularmente para decidir su estilo de juego.",
                "de": "Zählen bei Go bedeutet, die Punktzahl während des Spiels zu schätzen. Starke Spieler zählen regelmäßig, um ihre Spielweise zu bestimmen.",
                "nl": "Tellen bij Go betekent de score schatten tijdens het spel. Sterke spelers tellen regelmatig om te bepalen of ze aanvallend of verdedigend spelen."
            }
        },
        {
            "question": {
                "en": "What is an 'extension' in Go?",
                "es": "¿Qué es una 'extensión' en Go?",
                "de": "Was ist eine 'Erweiterung' bei Go?",
                "nl": "Wat is een 'uitbreiding' bij Go?"
            },
            "options": [
                {
                    "en": "A move along the side from an existing stone",
                    "es": "Un movimiento a lo largo del lado desde una piedra existente",
                    "de": "Ein Zug entlang der Seite von einem bestehenden Stein",
                    "nl": "Een zet langs de zijkant vanaf een bestaande steen"
                },
                {
                    "en": "Adding extra time to the clock",
                    "es": "Agregar tiempo extra al reloj",
                    "de": "Zusätzliche Zeit zur Uhr hinzufügen",
                    "nl": "Extra tijd toevoegen aan de klok"
                },
                {
                    "en": "Making the board bigger",
                    "es": "Hacer el tablero más grande",
                    "de": "Das Brett vergrößern",
                    "nl": "Het bord groter maken"
                },
                {
                    "en": "Playing an extra turn",
                    "es": "Jugar un turno extra",
                    "de": "Einen zusätzlichen Zug spielen",
                    "nl": "Een extra beurt spelen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "An extension is a move along the side of the board from an existing stone, used to expand territory or create a base for a group along the edge.",
                "es": "Una extensión es un movimiento a lo largo del lado del tablero desde una piedra existente, usado para expandir territorio o crear una base.",
                "de": "Eine Erweiterung ist ein Zug entlang der Seite des Bretts von einem bestehenden Stein, um Gebiet zu erweitern oder eine Basis zu schaffen.",
                "nl": "Een uitbreiding is een zet langs de zijkant van het bord vanaf een bestaande steen, om gebied uit te breiden of een basis te creëren."
            }
        }
    ]
};
