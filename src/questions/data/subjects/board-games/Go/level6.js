// Go - level6
// Total questions: 100

module.exports = {
    questions: [
        {
            "question": {
                "en": "In Go, what is the purpose of a 'knight's move' extension?",
                "es": "En Go, ¿cuál es el propósito de una extensión de 'caballo'?",
                "de": "Was ist der Zweck einer 'Ritterzug'-Erweiterung in Go?",
                "nl": "Wat is het doel van een 'paardensprong'-uitbreiding in Go?"
            },
            "options": [
                {
                    "en": "To develop quickly along the side of the board",
                    "es": "Desarrollarse rápidamente a lo largo del lado",
                    "de": "Sich schnell entlang der Seite zu entwickeln",
                    "nl": "Snel langs de zijkant te ontwikkelen"
                },
                {
                    "en": "To capture stones in the corner",
                    "es": "Capturar piedras en la esquina",
                    "de": "Steine in der Ecke zu schlagen",
                    "nl": "Stenen in de hoek te veroveren"
                },
                {
                    "en": "To create a ko situation",
                    "es": "Crear una situación de ko",
                    "de": "Eine Ko-Situation zu schaffen",
                    "nl": "Een ko-situatie te creëren"
                },
                {
                    "en": "To resign gracefully",
                    "es": "Rendirse con elegancia",
                    "de": "Elegant aufzugeben",
                    "nl": "Elegant op te geven"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A knight's move extension (keima) is used to develop along the side efficiently. It balances between securing territory and maintaining connection to the original stone.",
                "es": "La extensión de caballo (keima) se usa para desarrollarse eficientemente por el lado, equilibrando territorio y conexión con la piedra original.",
                "de": "Die Ritterzug-Erweiterung (Keima) dient der effizienten Entwicklung an der Seite und balanciert Gebietssicherung mit Verbindung zum Ursprungsstein.",
                "nl": "De paardensprong-uitbreiding (keima) wordt gebruikt om efficiënt langs de zijkant te ontwikkelen, met balans tussen gebied en verbinding met de oorspronkelijke steen."
            }
        },
        {
            "question": {
                "en": "What is a 'large knight's move' (ogeima) used for in Go?",
                "es": "¿Para qué se usa un 'gran movimiento de caballo' (ogeima) en Go?",
                "de": "Wofür wird ein 'großer Ritterzug' (Ogeima) in Go verwendet?",
                "nl": "Waarvoor wordt een 'grote paardensprong' (ogeima) in Go gebruikt?"
            },
            "options": [
                {
                    "en": "For a wider but weaker extension along the side",
                    "es": "Para una extensión más amplia pero más débil",
                    "de": "Für eine breitere, aber schwächere Erweiterung",
                    "nl": "Voor een bredere maar zwakkere uitbreiding"
                },
                {
                    "en": "To capture a large group of stones",
                    "es": "Para capturar un gran grupo de piedras",
                    "de": "Um eine große Gruppe von Steinen zu schlagen",
                    "nl": "Om een grote groep stenen te veroveren"
                },
                {
                    "en": "To create three eyes at once",
                    "es": "Para crear tres ojos a la vez",
                    "de": "Um drei Augen gleichzeitig zu schaffen",
                    "nl": "Om drie ogen tegelijk te maken"
                },
                {
                    "en": "To block an opponent's ladder",
                    "es": "Para bloquear una escalera del oponente",
                    "de": "Um eine Leiter des Gegners zu blockieren",
                    "nl": "Om een ladder van de tegenstander te blokkeren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The large knight's move (ogeima) covers more ground than a regular keima but is more vulnerable to being cut. It is used when speed of development matters more than solidity.",
                "es": "El gran movimiento de caballo (ogeima) cubre más terreno que un keima normal pero es más vulnerable al corte. Se usa cuando la velocidad importa más que la solidez.",
                "de": "Der große Ritterzug (Ogeima) deckt mehr Fläche ab als ein normales Keima, ist aber anfälliger für Schnitte. Er wird genutzt, wenn Tempo wichtiger ist als Solidität.",
                "nl": "De grote paardensprong (ogeima) bestrijkt meer terrein dan een gewone keima maar is kwetsbaarder voor snijden. Het wordt gebruikt als snelheid belangrijker is dan stevigheid."
            }
        },
        {
            "question": {
                "en": "What is a 'one-space jump' (ikken tobi) in Go?",
                "es": "¿Qué es un 'salto de un espacio' (ikken tobi) en Go?",
                "de": "Was ist ein 'Ein-Raum-Sprung' (Ikken Tobi) in Go?",
                "nl": "Wat is een 'eenstapssprong' (ikken tobi) in Go?"
            },
            "options": [
                {
                    "en": "A move one point away in a straight line",
                    "es": "Un movimiento a un punto de distancia en línea recta",
                    "de": "Ein Zug einen Punkt entfernt in gerader Linie",
                    "nl": "Een zet één punt verderop in een rechte lijn"
                },
                {
                    "en": "Jumping over an opponent's stone",
                    "es": "Saltar sobre una piedra del oponente",
                    "de": "Über einen gegnerischen Stein springen",
                    "nl": "Over een steen van de tegenstander springen"
                },
                {
                    "en": "Removing a stone from the board",
                    "es": "Quitar una piedra del tablero",
                    "de": "Einen Stein vom Brett entfernen",
                    "nl": "Een steen van het bord verwijderen"
                },
                {
                    "en": "Passing your turn once",
                    "es": "Pasar tu turno una vez",
                    "de": "Einmal passen",
                    "nl": "Eén keer passen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A one-space jump places a stone one intersection away along a line from a friendly stone. It is a light, flexible way to develop while maintaining a loose connection.",
                "es": "Un salto de un espacio coloca una piedra a una intersección de distancia en línea recta. Es una forma ligera y flexible de desarrollarse manteniendo conexión.",
                "de": "Ein Ein-Raum-Sprung setzt einen Stein einen Schnittpunkt entfernt in gerader Linie. Es ist eine leichte, flexible Entwicklung mit loser Verbindung.",
                "nl": "Een eenstapssprong plaatst een steen één kruispunt verderop in een rechte lijn. Het is een lichte, flexibele manier om te ontwikkelen met een losse verbinding."
            }
        },
        {
            "question": {
                "en": "What is the 'two-space extension' commonly used for in Go?",
                "es": "¿Para qué se usa comúnmente la 'extensión de dos espacios' en Go?",
                "de": "Wofür wird die 'Zwei-Raum-Erweiterung' in Go häufig verwendet?",
                "nl": "Waarvoor wordt de 'tweestapsuitbreiding' in Go vaak gebruikt?"
            },
            "options": [
                {
                    "en": "Building a base along the side of the board",
                    "es": "Construir una base a lo largo del lado del tablero",
                    "de": "Eine Basis entlang der Seite aufbauen",
                    "nl": "Een basis bouwen langs de zijkant van het bord"
                },
                {
                    "en": "Capturing two stones at once",
                    "es": "Capturar dos piedras a la vez",
                    "de": "Zwei Steine gleichzeitig schlagen",
                    "nl": "Twee stenen tegelijk veroveren"
                },
                {
                    "en": "Creating an eye in the center",
                    "es": "Crear un ojo en el centro",
                    "de": "Ein Auge in der Mitte schaffen",
                    "nl": "Een oog in het midden maken"
                },
                {
                    "en": "Blocking a ladder sequence",
                    "es": "Bloquear una secuencia de escalera",
                    "de": "Eine Leitersequenz blockieren",
                    "nl": "Een ladderreeks blokkeren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A two-space extension is commonly used to establish a base along the side of the board, ensuring the group has room to make eyes and survive if attacked.",
                "es": "La extensión de dos espacios se usa para establecer una base a lo largo del lado, asegurando que el grupo tenga espacio para hacer ojos y sobrevivir.",
                "de": "Eine Zwei-Raum-Erweiterung dient dem Aufbau einer Basis an der Seite, damit die Gruppe Platz für Augen hat und bei einem Angriff überleben kann.",
                "nl": "Een tweestapsuitbreiding wordt gebruikt om een basis te vestigen langs de zijkant, zodat de groep ruimte heeft om ogen te maken en te overleven."
            }
        },
        {
            "question": {
                "en": "What is a 'three-space extension' considered in Go strategy?",
                "es": "¿Cómo se considera la 'extensión de tres espacios' en la estrategia de Go?",
                "de": "Was gilt die 'Drei-Raum-Erweiterung' in der Go-Strategie?",
                "nl": "Wat wordt de 'driestapsuitbreiding' beschouwd in Go-strategie?"
            },
            "options": [
                {
                    "en": "Fast but potentially vulnerable to invasion",
                    "es": "Rápida pero potencialmente vulnerable a invasión",
                    "de": "Schnell, aber potenziell anfällig für Invasionen",
                    "nl": "Snel maar mogelijk kwetsbaar voor invasie"
                },
                {
                    "en": "The strongest possible extension",
                    "es": "La extensión más fuerte posible",
                    "de": "Die stärkstmögliche Erweiterung",
                    "nl": "De sterkst mogelijke uitbreiding"
                },
                {
                    "en": "An illegal move in professional play",
                    "es": "Un movimiento ilegal en juego profesional",
                    "de": "Ein illegaler Zug im Profispiel",
                    "nl": "Een illegale zet in professioneel spel"
                },
                {
                    "en": "Only useful in the endgame",
                    "es": "Solo útil en el final del juego",
                    "de": "Nur im Endspiel nützlich",
                    "nl": "Alleen nuttig in het eindspel"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A three-space extension is fast for claiming side territory but leaves a gap that the opponent might invade. It works best when backed by nearby strong stones or influence.",
                "es": "Una extensión de tres espacios es rápida para reclamar territorio lateral pero deja un espacio que el oponente puede invadir.",
                "de": "Eine Drei-Raum-Erweiterung ist schnell beim Beanspruchen von Seitengebiet, lässt aber eine Lücke für gegnerische Invasionen.",
                "nl": "Een driestapsuitbreiding is snel om zijgebied te claimen maar laat een gat dat de tegenstander kan binnenvallen."
            }
        },
        {
            "question": {
                "en": "What is 'aji keshi' in Go and why is it considered bad?",
                "es": "¿Qué es 'aji keshi' en Go y por qué se considera malo?",
                "de": "Was ist 'Aji Keshi' in Go und warum gilt es als schlecht?",
                "nl": "Wat is 'aji keshi' in Go en waarom wordt het als slecht beschouwd?"
            },
            "options": [
                {
                    "en": "Wasting aji by forcing the opponent to fix weaknesses",
                    "es": "Desperdiciar aji forzando al oponente a corregir debilidades",
                    "de": "Aji verschwenden, indem man den Gegner zwingt, Schwächen zu beheben",
                    "nl": "Aji verspillen door de tegenstander te dwingen zwakheden te repareren"
                },
                {
                    "en": "Playing too slowly in the opening",
                    "es": "Jugar demasiado lento en la apertura",
                    "de": "Zu langsam in der Eröffnung spielen",
                    "nl": "Te langzaam spelen in de opening"
                },
                {
                    "en": "Making an empty triangle shape",
                    "es": "Hacer una forma de triángulo vacío",
                    "de": "Eine leere Dreiecksform machen",
                    "nl": "Een lege driehoeksvorm maken"
                },
                {
                    "en": "Capturing stones that are already dead",
                    "es": "Capturar piedras que ya están muertas",
                    "de": "Bereits tote Steine schlagen",
                    "nl": "Stenen veroveren die al dood zijn"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Aji keshi means destroying your own aji (latent potential) by making forcing moves that cause the opponent to strengthen their position, eliminating future threats you could have used.",
                "es": "Aji keshi significa destruir tu propio aji haciendo movimientos forzados que fortalecen al oponente, eliminando amenazas futuras.",
                "de": "Aji Keshi bedeutet, das eigene Aji zu zerstören, indem man den Gegner zu Verstärkungen zwingt und damit zukünftige Drohungen beseitigt.",
                "nl": "Aji keshi betekent je eigen aji vernietigen door dwingende zetten die de tegenstander versterken, waardoor toekomstige dreigingen verdwijnen."
            }
        },
        {
            "question": {
                "en": "What strategic principle does 'play away from thickness' express in Go?",
                "es": "¿Qué principio estratégico expresa 'jugar lejos del espesor' en Go?",
                "de": "Welches Strategieprinzip drückt 'weg von der Dicke spielen' in Go aus?",
                "nl": "Welk strategisch principe drukt 'speel weg van dikte' uit in Go?"
            },
            "options": [
                {
                    "en": "Use thickness to attack, not to make territory nearby",
                    "es": "Usar el espesor para atacar, no para hacer territorio cercano",
                    "de": "Dicke zum Angriff nutzen, nicht für nahes Gebiet",
                    "nl": "Gebruik dikte om aan te vallen, niet om nabij gebied te maken"
                },
                {
                    "en": "Always play in the thinnest area of the board",
                    "es": "Siempre jugar en el área más delgada del tablero",
                    "de": "Immer im dünnsten Bereich spielen",
                    "nl": "Altijd in het dunste gebied van het bord spelen"
                },
                {
                    "en": "Build walls only in the center of the board",
                    "es": "Construir muros solo en el centro del tablero",
                    "de": "Mauern nur in der Mitte des Brettes bauen",
                    "nl": "Muren alleen in het midden van het bord bouwen"
                },
                {
                    "en": "Avoid placing stones near your own groups",
                    "es": "Evitar colocar piedras cerca de tus propios grupos",
                    "de": "Keine Steine in die Nähe eigener Gruppen setzen",
                    "nl": "Vermijd stenen te plaatsen nabij je eigen groepen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Playing away from thickness means using your strong wall to attack opponents who approach it, rather than making small territory near it. The wall's influence works best at a distance.",
                "es": "Jugar lejos del espesor significa usar tu muro fuerte para atacar oponentes que se acercan, en vez de hacer territorio pequeño cerca de él.",
                "de": "Weg von der Dicke spielen bedeutet, die starke Mauer zum Angriff zu nutzen statt nahes Gebiet zu machen. Der Einfluss wirkt am besten aus der Ferne.",
                "nl": "Weg van dikte spelen betekent je sterke muur gebruiken om tegenstanders aan te vallen die erbij komen, in plaats van klein gebied ernaast te maken."
            }
        },
        {
            "question": {
                "en": "What is the '3-3 point invasion' in Go?",
                "es": "¿Qué es la 'invasión al punto 3-3' en Go?",
                "de": "Was ist die '3-3-Punkt-Invasion' in Go?",
                "nl": "Wat is de '3-3 punt invasie' in Go?"
            },
            "options": [
                {
                    "en": "Playing directly under a corner stone to take territory",
                    "es": "Jugar directamente bajo una piedra de esquina para tomar territorio",
                    "de": "Direkt unter einem Eckstein spielen, um Gebiet zu nehmen",
                    "nl": "Direct onder een hoeksteen spelen om gebied te nemen"
                },
                {
                    "en": "A technique to capture exactly three stones",
                    "es": "Una técnica para capturar exactamente tres piedras",
                    "de": "Eine Technik zum Schlagen von genau drei Steinen",
                    "nl": "Een techniek om precies drie stenen te veroveren"
                },
                {
                    "en": "An opening move on the third line",
                    "es": "Un movimiento de apertura en la tercera línea",
                    "de": "Ein Eröffnungszug auf der dritten Linie",
                    "nl": "Een openingszet op de derde lijn"
                },
                {
                    "en": "A scoring technique used in Chinese rules",
                    "es": "Una técnica de puntuación usada en reglas chinas",
                    "de": "Eine Wertungstechnik nach chinesischen Regeln",
                    "nl": "Een scoretechniek uit Chinese regels"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The 3-3 invasion is a move played at the 3-3 point under a corner stone (like 4-4). It aims to live in the corner with territory while giving the opponent outside influence.",
                "es": "La invasión al 3-3 se juega bajo una piedra de esquina (como 4-4). Busca vivir en la esquina con territorio dando influencia exterior al oponente.",
                "de": "Die 3-3-Invasion wird unter einem Eckstein (wie 4-4) gespielt. Ziel ist es, in der Ecke mit Gebiet zu leben, während der Gegner äußeren Einfluss erhält.",
                "nl": "De 3-3 invasie wordt gespeeld onder een hoeksteen (zoals 4-4). Het doel is te leven in de hoek met gebied terwijl de tegenstander buitenste invloed krijgt."
            }
        },
        {
            "question": {
                "en": "What is the concept of 'light' versus 'heavy' stones in Go?",
                "es": "¿Cuál es el concepto de piedras 'ligeras' versus 'pesadas' en Go?",
                "de": "Was ist das Konzept von 'leichten' versus 'schweren' Steinen in Go?",
                "nl": "Wat is het concept van 'lichte' versus 'zware' stenen in Go?"
            },
            "options": [
                {
                    "en": "Light stones can be sacrificed; heavy stones must be saved",
                    "es": "Las piedras ligeras se pueden sacrificar; las pesadas deben salvarse",
                    "de": "Leichte Steine kann man opfern; schwere muss man retten",
                    "nl": "Lichte stenen kunnen geofferd worden; zware moeten gered worden"
                },
                {
                    "en": "Light stones are white; heavy stones are black",
                    "es": "Las piedras ligeras son blancas; las pesadas son negras",
                    "de": "Leichte Steine sind weiß; schwere sind schwarz",
                    "nl": "Lichte stenen zijn wit; zware stenen zijn zwart"
                },
                {
                    "en": "Light stones are placed high; heavy stones are placed low",
                    "es": "Las piedras ligeras se colocan arriba; las pesadas abajo",
                    "de": "Leichte Steine werden hoch gesetzt; schwere tief",
                    "nl": "Lichte stenen worden hoog geplaatst; zware laag"
                },
                {
                    "en": "Light stones are small; heavy stones are large",
                    "es": "Las piedras ligeras son pequeñas; las pesadas son grandes",
                    "de": "Leichte Steine sind klein; schwere sind groß",
                    "nl": "Lichte stenen zijn klein; zware stenen zijn groot"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Light stones are flexible and can be abandoned without much loss. Heavy stones have too many invested moves and must be defended, which can become a burden if they are weak.",
                "es": "Las piedras ligeras son flexibles y se pueden abandonar. Las pesadas tienen muchos movimientos invertidos y deben defenderse, lo cual puede ser una carga.",
                "de": "Leichte Steine sind flexibel und können ohne großen Verlust aufgegeben werden. Schwere Steine haben zu viele investierte Züge und müssen verteidigt werden.",
                "nl": "Lichte stenen zijn flexibel en kunnen worden opgegeven zonder veel verlies. Zware stenen hebben te veel geïnvesteerde zetten en moeten verdedigd worden."
            }
        },
        {
            "question": {
                "en": "What is a 'cross-cut' in Go and what does it typically create?",
                "es": "¿Qué es un 'corte cruzado' en Go y qué crea típicamente?",
                "de": "Was ist ein 'Kreuzschnitt' in Go und was entsteht dadurch?",
                "nl": "Wat is een 'kruissnit' in Go en wat creëert het meestal?"
            },
            "options": [
                {
                    "en": "Four separate stone groups in a complex fight",
                    "es": "Cuatro grupos de piedras separados en una pelea compleja",
                    "de": "Vier getrennte Steingruppen in einem komplexen Kampf",
                    "nl": "Vier afzonderlijke steengroepen in een complex gevecht"
                },
                {
                    "en": "An unbreakable connection between two groups",
                    "es": "Una conexión irrompible entre dos grupos",
                    "de": "Eine unzerbrechliche Verbindung zwischen zwei Gruppen",
                    "nl": "Een onbreekbare verbinding tussen twee groepen"
                },
                {
                    "en": "A shape that automatically creates two eyes",
                    "es": "Una forma que automáticamente crea dos ojos",
                    "de": "Eine Form, die automatisch zwei Augen erzeugt",
                    "nl": "Een vorm die automatisch twee ogen maakt"
                },
                {
                    "en": "A ko situation that must be resolved",
                    "es": "Una situación de ko que debe resolverse",
                    "de": "Eine Ko-Situation, die gelöst werden muss",
                    "nl": "Een ko-situatie die opgelost moet worden"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A cross-cut creates four separate groups of stones (two for each player) that must each fend for themselves. It leads to complex tactical fighting.",
                "es": "Un corte cruzado crea cuatro grupos separados (dos por jugador) que deben valerse por sí mismos. Lleva a combates tácticos complejos.",
                "de": "Ein Kreuzschnitt erzeugt vier getrennte Gruppen (zwei pro Spieler), die sich jeweils selbst behaupten müssen. Es führt zu komplexen Kämpfen.",
                "nl": "Een kruissnit creëert vier afzonderlijke groepen (twee per speler) die elk voor zichzelf moeten zorgen. Het leidt tot complex tactisch gevecht."
            }
        },
        {
            "question": {
                "en": "What does the Go proverb 'the enemy's key point is your key point' mean?",
                "es": "¿Qué significa el proverbio de Go 'el punto clave del enemigo es tu punto clave'?",
                "de": "Was bedeutet das Go-Sprichwort 'der Schlüsselpunkt des Gegners ist dein Schlüsselpunkt'?",
                "nl": "Wat betekent het Go-spreekwoord 'het sleutelpunt van de vijand is jouw sleutelpunt'?"
            },
            "options": [
                {
                    "en": "Good moves for attack are often good for defense too",
                    "es": "Los buenos movimientos de ataque suelen ser buenos para la defensa",
                    "de": "Gute Angriffszüge sind oft auch gute Verteidigungszüge",
                    "nl": "Goede aanvalszetten zijn vaak ook goed voor de verdediging"
                },
                {
                    "en": "Always copy your opponent's moves",
                    "es": "Siempre copiar los movimientos del oponente",
                    "de": "Immer die Züge des Gegners kopieren",
                    "nl": "Kopieer altijd de zetten van je tegenstander"
                },
                {
                    "en": "Every stone should be placed on a star point",
                    "es": "Cada piedra debe colocarse en un punto estrella",
                    "de": "Jeder Stein sollte auf einen Sternpunkt gesetzt werden",
                    "nl": "Elke steen moet op een sterpunt worden geplaatst"
                },
                {
                    "en": "Ignore where your opponent wants to play",
                    "es": "Ignorar dónde quiere jugar tu oponente",
                    "de": "Ignorieren, wo der Gegner spielen möchte",
                    "nl": "Negeer waar je tegenstander wil spelen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "This proverb teaches that the point most vital for your opponent's shape or life is often the same point that would most benefit you. Recognizing key points is crucial.",
                "es": "Este proverbio enseña que el punto más vital para la forma o vida del oponente es a menudo el mismo que más te beneficiaría a ti.",
                "de": "Dieses Sprichwort lehrt, dass der wichtigste Punkt für Form oder Leben des Gegners oft auch der beste Punkt für einen selbst ist.",
                "nl": "Dit spreekwoord leert dat het punt dat het meest vitaal is voor de vorm of het leven van de tegenstander vaak ook het beste punt voor jou is."
            }
        },
        {
            "question": {
                "en": "What is a 'ladder breaker' in Go?",
                "es": "¿Qué es un 'rompe-escalera' en Go?",
                "de": "Was ist ein 'Leiterbrecher' in Go?",
                "nl": "Wat is een 'ladderbreker' in Go?"
            },
            "options": [
                {
                    "en": "A stone placed in the path of a ladder to help the escaping stones",
                    "es": "Una piedra en el camino de una escalera para ayudar a las piedras que escapan",
                    "de": "Ein Stein im Weg einer Leiter, der den fliehenden Steinen hilft",
                    "nl": "Een steen in het pad van een ladder om de ontsnapte stenen te helpen"
                },
                {
                    "en": "A move that prevents any ladder from forming",
                    "es": "Un movimiento que impide que se forme cualquier escalera",
                    "de": "Ein Zug, der jede Leiter verhindert",
                    "nl": "Een zet die elke ladder voorkomt"
                },
                {
                    "en": "A tool used to organize Go stones",
                    "es": "Una herramienta para organizar piedras de Go",
                    "de": "Ein Werkzeug zum Ordnen von Go-Steinen",
                    "nl": "Een hulpmiddel om Go-stenen te organiseren"
                },
                {
                    "en": "A type of ko threat",
                    "es": "Un tipo de amenaza de ko",
                    "de": "Eine Art Ko-Drohung",
                    "nl": "Een soort ko-dreiging"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A ladder breaker is a friendly stone already placed in the path where a ladder sequence would travel. It allows the chased stones to escape by connecting to the breaker.",
                "es": "Un rompe-escalera es una piedra propia ya colocada en el camino de una escalera. Permite que las piedras perseguidas escapen conectándose con ella.",
                "de": "Ein Leiterbrecher ist ein eigener Stein, der bereits im Weg der Leiter steht. Er erlaubt den verfolgten Steinen die Flucht durch Verbindung.",
                "nl": "Een ladderbreker is een eigen steen die al in het pad van de ladder staat. Het laat de achtervolgde stenen ontsnappen door verbinding."
            }
        },
        {
            "question": {
                "en": "In Go, why is corner territory generally easier to secure than center territory?",
                "es": "En Go, ¿por qué es más fácil asegurar territorio en la esquina que en el centro?",
                "de": "Warum ist Eckgebiet in Go generell leichter zu sichern als Zentrumsgebiet?",
                "nl": "Waarom is hoekgebied in Go over het algemeen makkelijker te beveiligen dan centrumgebied?"
            },
            "options": [
                {
                    "en": "The board edges act as natural walls requiring fewer stones",
                    "es": "Los bordes del tablero actúan como muros naturales requiriendo menos piedras",
                    "de": "Die Brettränder wirken als natürliche Wände und brauchen weniger Steine",
                    "nl": "De bordranden werken als natuurlijke muren en vragen minder stenen"
                },
                {
                    "en": "The rules give bonus points for corner stones",
                    "es": "Las reglas dan puntos extra por piedras en las esquinas",
                    "de": "Die Regeln geben Bonuspunkte für Ecksteine",
                    "nl": "De regels geven bonuspunten voor hoekstenen"
                },
                {
                    "en": "Stones in the corner cannot be captured",
                    "es": "Las piedras en la esquina no pueden ser capturadas",
                    "de": "Steine in der Ecke können nicht geschlagen werden",
                    "nl": "Stenen in de hoek kunnen niet veroverd worden"
                },
                {
                    "en": "The center has more star points",
                    "es": "El centro tiene más puntos estrella",
                    "de": "Das Zentrum hat mehr Sternpunkte",
                    "nl": "Het centrum heeft meer sterpunten"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Corner territory is efficient because two edges of the board serve as natural boundaries, meaning fewer stones are needed to enclose the same amount of territory compared to the center.",
                "es": "El territorio de esquina es eficiente porque dos bordes del tablero sirven como fronteras naturales, requiriendo menos piedras para encerrar la misma cantidad de territorio.",
                "de": "Eckgebiet ist effizient, da zwei Brettränder als natürliche Grenzen dienen. So werden weniger Steine benötigt als im Zentrum für gleiches Gebiet.",
                "nl": "Hoekgebied is efficiënt omdat twee randen van het bord als natuurlijke grenzen dienen, waardoor minder stenen nodig zijn dan in het centrum voor hetzelfde gebied."
            }
        },
        {
            "question": {
                "en": "What is a 'pincer' attack in Go?",
                "es": "¿Qué es un ataque de 'pinza' en Go?",
                "de": "Was ist ein 'Zangenangriff' in Go?",
                "nl": "Wat is een 'tanganval' in Go?"
            },
            "options": [
                {
                    "en": "Attacking an approaching stone from the opposite side",
                    "es": "Atacar una piedra que se acerca desde el lado opuesto",
                    "de": "Einen anrückenden Stein von der Gegenseite angreifen",
                    "nl": "Een naderende steen aanvallen vanaf de tegenovergestelde kant"
                },
                {
                    "en": "Capturing a stone between two of your stones",
                    "es": "Capturar una piedra entre dos de tus piedras",
                    "de": "Einen Stein zwischen zwei eigenen Steinen fangen",
                    "nl": "Een steen veroveren tussen twee van je stenen"
                },
                {
                    "en": "Playing two stones on the same turn",
                    "es": "Jugar dos piedras en el mismo turno",
                    "de": "Zwei Steine im selben Zug setzen",
                    "nl": "Twee stenen in dezelfde beurt spelen"
                },
                {
                    "en": "Surrounding the entire board",
                    "es": "Rodear todo el tablero",
                    "de": "Das gesamte Brett umzingeln",
                    "nl": "Het hele bord omsingelen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A pincer is played on the opposite side of an opponent's approaching stone from your corner stone. It denies the opponent a base and puts pressure on them from both directions.",
                "es": "Una pinza se juega en el lado opuesto de una piedra que se acerca. Niega al oponente una base y lo presiona desde ambas direcciones.",
                "de": "Eine Zange wird auf der gegenüberliegenden Seite des anrückenden gegnerischen Steins gespielt. Sie verweigert dem Gegner eine Basis und übt Druck von beiden Seiten aus.",
                "nl": "Een tang wordt gespeeld aan de tegenovergestelde kant van een naderende steen. Het ontzegt de tegenstander een basis en oefent druk uit vanuit beide richtingen."
            }
        },
        {
            "question": {
                "en": "What does 'tenuki' mean in Go?",
                "es": "¿Qué significa 'tenuki' en Go?",
                "de": "Was bedeutet 'Tenuki' in Go?",
                "nl": "Wat betekent 'tenuki' in Go?"
            },
            "options": [
                {
                    "en": "Playing elsewhere instead of responding locally",
                    "es": "Jugar en otro lugar en vez de responder localmente",
                    "de": "Anderswo spielen statt lokal zu antworten",
                    "nl": "Ergens anders spelen in plaats van lokaal te reageren"
                },
                {
                    "en": "Passing your turn to save time",
                    "es": "Pasar tu turno para ahorrar tiempo",
                    "de": "Den Zug passen, um Zeit zu sparen",
                    "nl": "Je beurt overslaan om tijd te besparen"
                },
                {
                    "en": "Placing a stone on a star point",
                    "es": "Colocar una piedra en un punto estrella",
                    "de": "Einen Stein auf einen Sternpunkt setzen",
                    "nl": "Een steen op een sterpunt plaatsen"
                },
                {
                    "en": "Resigning from the game",
                    "es": "Rendirse del juego",
                    "de": "Das Spiel aufgeben",
                    "nl": "Het spel opgeven"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Tenuki means ignoring the opponent's last move and playing elsewhere on the board. It is a strategic decision when you judge another area to be more important or urgent.",
                "es": "Tenuki significa ignorar el último movimiento del oponente y jugar en otra parte. Es una decisión estratégica cuando otra área es más importante.",
                "de": "Tenuki bedeutet, den letzten Zug des Gegners zu ignorieren und anderswo zu spielen. Es ist eine strategische Entscheidung, wenn ein anderer Bereich wichtiger ist.",
                "nl": "Tenuki betekent de laatste zet van de tegenstander negeren en ergens anders spelen. Het is een strategische keuze wanneer een ander gebied belangrijker is."
            }
        },
        {
            "question": {
                "en": "What is a 'probe' move in Go?",
                "es": "¿Qué es un movimiento de 'sondeo' en Go?",
                "de": "Was ist ein 'Sondierungszug' in Go?",
                "nl": "Wat is een 'peileend'-zet in Go?"
            },
            "options": [
                {
                    "en": "A move that tests the opponent's intentions before committing",
                    "es": "Un movimiento que prueba las intenciones del oponente antes de comprometerse",
                    "de": "Ein Zug, der die Absichten des Gegners testet, bevor man sich festlegt",
                    "nl": "Een zet die de bedoelingen van de tegenstander test voor je je vastlegt"
                },
                {
                    "en": "A move played in the center of the board",
                    "es": "Un movimiento jugado en el centro del tablero",
                    "de": "Ein Zug in der Mitte des Brettes",
                    "nl": "Een zet in het midden van het bord"
                },
                {
                    "en": "Capturing an opponent's stone to test its value",
                    "es": "Capturar una piedra del oponente para probar su valor",
                    "de": "Einen gegnerischen Stein schlagen, um seinen Wert zu testen",
                    "nl": "Een steen van de tegenstander veroveren om de waarde te testen"
                },
                {
                    "en": "A move that ends a ko fight",
                    "es": "Un movimiento que termina una pelea de ko",
                    "de": "Ein Zug, der einen Ko-Kampf beendet",
                    "nl": "Een zet die een ko-gevecht beëindigt"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A probe is a move that forces the opponent to reveal how they plan to develop a position. Based on their response, you can decide on the best strategy for the area.",
                "es": "Un sondeo es un movimiento que obliga al oponente a revelar cómo planea desarrollar una posición. Basándote en su respuesta, decides la mejor estrategia.",
                "de": "Ein Sondierungszug zwingt den Gegner, seine Entwicklungspläne zu offenbaren. Basierend auf der Antwort kann man die beste Strategie wählen.",
                "nl": "Een peileend is een zet die de tegenstander dwingt te onthullen hoe die een positie wil ontwikkelen. Op basis van de reactie kies je de beste strategie."
            }
        },
        {
            "question": {
                "en": "What is a 'cap' move in Go?",
                "es": "¿Qué es un movimiento de 'cubierta' en Go?",
                "de": "Was ist ein 'Deckzug' in Go?",
                "nl": "Wat is een 'kap'-zet in Go?"
            },
            "options": [
                {
                    "en": "A move played directly above an opponent's stone to limit expansion",
                    "es": "Un movimiento sobre una piedra del oponente para limitar expansión",
                    "de": "Ein Zug direkt über einem gegnerischen Stein zur Expansionsbegrenzung",
                    "nl": "Een zet direct boven een steen van de tegenstander om uitbreiding te beperken"
                },
                {
                    "en": "The last move of the game",
                    "es": "El último movimiento del juego",
                    "de": "Der letzte Zug des Spiels",
                    "nl": "De laatste zet van het spel"
                },
                {
                    "en": "A move that captures a corner group",
                    "es": "Un movimiento que captura un grupo de esquina",
                    "de": "Ein Zug, der eine Eckgruppe schlägt",
                    "nl": "Een zet die een hoekgroep verovert"
                },
                {
                    "en": "Placing a stone on top of the board physically",
                    "es": "Colocar una piedra encima del tablero físicamente",
                    "de": "Einen Stein physisch auf das Brett legen",
                    "nl": "Een steen fysiek bovenop het bord plaatsen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A cap is played one point above an opponent's stone toward the center. It prevents the opponent from expanding upward and limits their potential for making territory or eyes.",
                "es": "Una cubierta se juega un punto arriba de una piedra del oponente hacia el centro. Impide que el oponente se expanda y limita su potencial de territorio.",
                "de": "Ein Deckzug wird einen Punkt über einem gegnerischen Stein Richtung Mitte gespielt. Er verhindert die Expansion und begrenzt das Gebiets- und Augenpotenzial.",
                "nl": "Een kap wordt één punt boven een steen van de tegenstander richting het centrum gespeeld. Het voorkomt uitbreiding en beperkt het potentieel voor gebied of ogen."
            }
        },
        {
            "question": {
                "en": "What is a 'table shape' in Go?",
                "es": "¿Qué es una 'forma de mesa' en Go?",
                "de": "Was ist eine 'Tischform' in Go?",
                "nl": "Wat is een 'tafelvorm' in Go?"
            },
            "options": [
                {
                    "en": "A strong shape of six stones that usually creates two eyes",
                    "es": "Una forma fuerte de seis piedras que normalmente crea dos ojos",
                    "de": "Eine starke Form aus sechs Steinen, die meist zwei Augen erzeugt",
                    "nl": "Een sterke vorm van zes stenen die meestal twee ogen maakt"
                },
                {
                    "en": "The flat surface of a Go board",
                    "es": "La superficie plana de un tablero de Go",
                    "de": "Die flache Oberfläche eines Go-Brettes",
                    "nl": "Het platte oppervlak van een Go-bord"
                },
                {
                    "en": "A shape that is always dead",
                    "es": "Una forma que siempre está muerta",
                    "de": "Eine Form, die immer tot ist",
                    "nl": "Een vorm die altijd dood is"
                },
                {
                    "en": "A group placed in the center of the board",
                    "es": "Un grupo colocado en el centro del tablero",
                    "de": "Eine Gruppe in der Mitte des Brettes",
                    "nl": "Een groep in het midden van het bord"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A table shape consists of stones arranged to form two adjacent eyes efficiently. It is a strong defensive shape commonly seen in life and death problems.",
                "es": "Una forma de mesa consiste en piedras organizadas para formar dos ojos adyacentes eficientemente. Es una forma defensiva fuerte en problemas de vida y muerte.",
                "de": "Eine Tischform besteht aus Steinen, die effizient zwei benachbarte Augen bilden. Sie ist eine starke Verteidigungsform in Leben-und-Tod-Problemen.",
                "nl": "Een tafelvorm bestaat uit stenen die efficiënt twee aangrenzende ogen vormen. Het is een sterke verdedigingsvorm in leven-en-dood-problemen."
            }
        },
        {
            "question": {
                "en": "What is the Go proverb about corners, sides, and center?",
                "es": "¿Cuál es el proverbio de Go sobre esquinas, lados y centro?",
                "de": "Wie lautet das Go-Sprichwort über Ecken, Seiten und Mitte?",
                "nl": "Wat is het Go-spreekwoord over hoeken, zijkanten en midden?"
            },
            "options": [
                {
                    "en": "Corner first, then sides, then center",
                    "es": "Primero las esquinas, luego los lados, luego el centro",
                    "de": "Erst die Ecken, dann die Seiten, dann die Mitte",
                    "nl": "Eerst de hoeken, dan de zijkanten, dan het midden"
                },
                {
                    "en": "Center first, then sides, then corners",
                    "es": "Primero el centro, luego los lados, luego las esquinas",
                    "de": "Erst die Mitte, dann die Seiten, dann die Ecken",
                    "nl": "Eerst het midden, dan de zijkanten, dan de hoeken"
                },
                {
                    "en": "Sides first, then corners, then center",
                    "es": "Primero los lados, luego las esquinas, luego el centro",
                    "de": "Erst die Seiten, dann die Ecken, dann die Mitte",
                    "nl": "Eerst de zijkanten, dan de hoeken, dan het midden"
                },
                {
                    "en": "Play wherever the opponent is weakest",
                    "es": "Jugar donde el oponente sea más débil",
                    "de": "Dort spielen, wo der Gegner am schwächsten ist",
                    "nl": "Spelen waar de tegenstander het zwakst is"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The proverb teaches that territory is most efficiently claimed in corners first (two natural edges), then sides (one edge), and finally the center (no edges), where it requires the most stones.",
                "es": "El proverbio enseña que el territorio se reclama más eficientemente primero en las esquinas, luego los lados y finalmente el centro.",
                "de": "Das Sprichwort lehrt, dass Gebiet am effizientesten zuerst in den Ecken, dann an den Seiten und zuletzt in der Mitte beansprucht wird.",
                "nl": "Het spreekwoord leert dat gebied het efficiëntst wordt geclaimd in de hoeken eerst, dan de zijkanten, en ten slotte het midden."
            }
        },
        {
            "question": {
                "en": "What is a 'double hane' in Go?",
                "es": "¿Qué es un 'doble hane' en Go?",
                "de": "Was ist ein 'Doppel-Hane' in Go?",
                "nl": "Wat is een 'dubbele hane' in Go?"
            },
            "options": [
                {
                    "en": "Playing two diagonal moves around an opponent's stone",
                    "es": "Jugar dos movimientos diagonales alrededor de una piedra del oponente",
                    "de": "Zwei diagonale Züge um einen gegnerischen Stein spielen",
                    "nl": "Twee diagonale zetten rond een steen van de tegenstander spelen"
                },
                {
                    "en": "Capturing two groups simultaneously",
                    "es": "Capturar dos grupos simultáneamente",
                    "de": "Zwei Gruppen gleichzeitig schlagen",
                    "nl": "Twee groepen tegelijk veroveren"
                },
                {
                    "en": "Placing two handicap stones",
                    "es": "Colocar dos piedras de ventaja",
                    "de": "Zwei Vorgabesteine setzen",
                    "nl": "Twee voorgiftstenen plaatsen"
                },
                {
                    "en": "Passing twice in a row",
                    "es": "Pasar dos veces seguidas",
                    "de": "Zweimal nacheinander passen",
                    "nl": "Twee keer achter elkaar passen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A double hane consists of two consecutive diagonal plays (hane moves) that wrap around the opponent's stones. It is an aggressive technique used in close-contact fighting.",
                "es": "Un doble hane consiste en dos jugadas diagonales consecutivas que envuelven las piedras del oponente. Es una técnica agresiva en combate de contacto cercano.",
                "de": "Ein Doppel-Hane besteht aus zwei aufeinanderfolgenden diagonalen Zügen, die die gegnerischen Steine umwickeln. Es ist eine aggressive Nahkampftechnik.",
                "nl": "Een dubbele hane bestaat uit twee opeenvolgende diagonale zetten die om de stenen van de tegenstander wikkelen. Het is een agressieve techniek in nabij gevecht."
            }
        },
        {
            "question": {
                "en": "What does the Go proverb 'hane at the head of two stones' advise?",
                "es": "¿Qué aconseja el proverbio de Go 'hane en la cabeza de dos piedras'?",
                "de": "Was rät das Go-Sprichwort 'Hane am Kopf von zwei Steinen'?",
                "nl": "Wat adviseert het Go-spreekwoord 'hane aan het hoofd van twee stenen'?"
            },
            "options": [
                {
                    "en": "Play a diagonal move at the end of a two-stone wall",
                    "es": "Jugar un movimiento diagonal al final de un muro de dos piedras",
                    "de": "Einen diagonalen Zug am Ende einer Zweisteinmauer spielen",
                    "nl": "Een diagonale zet spelen aan het einde van een tweestenenmuur"
                },
                {
                    "en": "Always capture groups of exactly two stones",
                    "es": "Siempre capturar grupos de exactamente dos piedras",
                    "de": "Immer Gruppen von genau zwei Steinen schlagen",
                    "nl": "Altijd groepen van precies twee stenen veroveren"
                },
                {
                    "en": "Never play near two connected opponent stones",
                    "es": "Nunca jugar cerca de dos piedras conectadas del oponente",
                    "de": "Nie in der Nähe von zwei verbundenen gegnerischen Steinen spielen",
                    "nl": "Nooit spelen nabij twee verbonden stenen van de tegenstander"
                },
                {
                    "en": "Place two stones on the second line",
                    "es": "Colocar dos piedras en la segunda línea",
                    "de": "Zwei Steine auf die zweite Linie setzen",
                    "nl": "Twee stenen op de tweede lijn plaatsen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "This proverb advises playing a hane (diagonal move) at the head of a two-stone wall because it efficiently limits the opponent's expansion while strengthening your position.",
                "es": "Este proverbio aconseja jugar un hane en la cabeza de un muro de dos piedras porque limita eficientemente la expansión del oponente.",
                "de": "Dieses Sprichwort rät, ein Hane am Kopf einer Zweisteinmauer zu spielen, da es die Expansion des Gegners effizient begrenzt.",
                "nl": "Dit spreekwoord adviseert een hane te spelen aan het hoofd van een tweestenenmuur omdat het de uitbreiding van de tegenstander efficiënt beperkt."
            }
        },
        {
            "question": {
                "en": "What is a 'squeeze' technique in Go?",
                "es": "¿Qué es la técnica de 'apretón' en Go?",
                "de": "Was ist die 'Quetschtechnik' in Go?",
                "nl": "Wat is de 'knijp'-techniek in Go?"
            },
            "options": [
                {
                    "en": "Sacrificing stones to force the opponent into bad shape",
                    "es": "Sacrificar piedras para forzar al oponente a una mala forma",
                    "de": "Steine opfern, um den Gegner in schlechte Form zu zwingen",
                    "nl": "Stenen offeren om de tegenstander in een slechte vorm te dwingen"
                },
                {
                    "en": "Physically pressing down on the Go stones",
                    "es": "Presionar físicamente las piedras de Go",
                    "de": "Die Go-Steine physisch herunterdrücken",
                    "nl": "Fysiek druk uitoefenen op de Go-stenen"
                },
                {
                    "en": "Playing as many moves as possible in one area",
                    "es": "Jugar el mayor número de movimientos posible en un área",
                    "de": "So viele Züge wie möglich in einem Bereich spielen",
                    "nl": "Zoveel mogelijk zetten in één gebied spelen"
                },
                {
                    "en": "Reducing the opponent's time on the clock",
                    "es": "Reducir el tiempo del oponente en el reloj",
                    "de": "Die Zeit des Gegners reduzieren",
                    "nl": "De tijd van de tegenstander op de klok verminderen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A squeeze is a tesuji where you sacrifice stones inside the opponent's position, forcing them to capture in a way that creates bad shape or gives you a strong outer wall.",
                "es": "Un apretón es un tesuji donde sacrificas piedras dentro de la posición del oponente, forzándolo a capturar de forma que crea mala forma o te da un muro exterior fuerte.",
                "de": "Eine Quetsche ist ein Tesuji, bei dem man Steine im gegnerischen Gebiet opfert und so schlechte Form oder eine starke Außenmauer erzwingt.",
                "nl": "Een knijp is een tesuji waarbij je stenen offert in de positie van de tegenstander, zodat die moet veroveren op een manier die slechte vorm of een sterke buitenmuur oplevert."
            }
        },
        {
            "question": {
                "en": "What is the 'descent' (sagari) move used for in Go?",
                "es": "¿Para qué se usa el movimiento de 'descenso' (sagari) en Go?",
                "de": "Wofür wird der 'Abstieg' (Sagari) in Go verwendet?",
                "nl": "Waarvoor wordt de 'afdaling' (sagari) in Go gebruikt?"
            },
            "options": [
                {
                    "en": "Moving toward the edge to secure territory or defend",
                    "es": "Moverse hacia el borde para asegurar territorio o defender",
                    "de": "Zum Rand ziehen, um Gebiet zu sichern oder zu verteidigen",
                    "nl": "Naar de rand bewegen om gebied te beveiligen of te verdedigen"
                },
                {
                    "en": "Playing from the center to a corner",
                    "es": "Jugar desde el centro a una esquina",
                    "de": "Von der Mitte in eine Ecke spielen",
                    "nl": "Van het centrum naar een hoek spelen"
                },
                {
                    "en": "Lowering the rank of a stone",
                    "es": "Bajar el rango de una piedra",
                    "de": "Den Rang eines Steins senken",
                    "nl": "De rang van een steen verlagen"
                },
                {
                    "en": "Removing a stone from the board voluntarily",
                    "es": "Quitar una piedra del tablero voluntariamente",
                    "de": "Einen Stein freiwillig vom Brett entfernen",
                    "nl": "Een steen vrijwillig van het bord verwijderen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A descent (sagari) is a move that goes one line closer to the edge of the board. It is used to solidify territory, secure a base, or strengthen a group's connection to the edge.",
                "es": "Un descenso (sagari) es un movimiento que va una línea más cerca del borde. Se usa para solidificar territorio, asegurar una base o fortalecer la conexión con el borde.",
                "de": "Ein Abstieg (Sagari) ist ein Zug eine Linie näher zum Rand. Er dient zur Gebietssicherung, Basisstärkung oder Verbindung mit dem Rand.",
                "nl": "Een afdaling (sagari) is een zet die één lijn dichter bij de rand gaat. Het wordt gebruikt om gebied te verstevigen, een basis te beveiligen of de verbinding met de rand te versterken."
            }
        },
        {
            "question": {
                "en": "What does the 'push and cut' tactic aim to achieve in Go?",
                "es": "¿Qué busca lograr la táctica de 'empujar y cortar' en Go?",
                "de": "Was soll die 'Schieben-und-Schneiden'-Taktik in Go erreichen?",
                "nl": "Wat beoogt de 'duw en snij'-tactiek in Go?"
            },
            "options": [
                {
                    "en": "Splitting the opponent's stones into weak separate groups",
                    "es": "Dividir las piedras del oponente en grupos débiles separados",
                    "de": "Die gegnerischen Steine in schwache getrennte Gruppen teilen",
                    "nl": "De stenen van de tegenstander splitsen in zwakke aparte groepen"
                },
                {
                    "en": "Moving all your stones forward one space",
                    "es": "Mover todas tus piedras un espacio hacia adelante",
                    "de": "Alle eigenen Steine ein Feld vorrücken",
                    "nl": "Al je stenen één veld naar voren verplaatsen"
                },
                {
                    "en": "Capturing stones on the first line",
                    "es": "Capturar piedras en la primera línea",
                    "de": "Steine auf der ersten Linie schlagen",
                    "nl": "Stenen op de eerste lijn veroveren"
                },
                {
                    "en": "Ending the game by force",
                    "es": "Terminar el juego por la fuerza",
                    "de": "Das Spiel gewaltsam beenden",
                    "nl": "Het spel met kracht beëindigen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The push and cut tactic uses a contact move (push) followed by a cutting move to separate the opponent's stones into disconnected groups that can then be attacked individually.",
                "es": "La táctica de empujar y cortar usa un movimiento de contacto seguido de un corte para separar las piedras del oponente en grupos que se atacan individualmente.",
                "de": "Die Schieben-und-Schneiden-Taktik verwendet einen Kontaktzug gefolgt von einem Schnitt, um die gegnerischen Steine in einzeln angreifbare Gruppen zu trennen.",
                "nl": "De duw-en-snij-tactiek gebruikt een contactzet gevolgd door een snijzet om de stenen van de tegenstander te scheiden in groepen die individueel aangevallen kunnen worden."
            }
        },
        {
            "question": {
                "en": "What is 'sabaki' in Go?",
                "es": "¿Qué es 'sabaki' en Go?",
                "de": "Was ist 'Sabaki' in Go?",
                "nl": "Wat is 'sabaki' in Go?"
            },
            "options": [
                {
                    "en": "A technique for making a flexible, light group in hostile territory",
                    "es": "Una técnica para hacer un grupo flexible y ligero en territorio hostil",
                    "de": "Eine Technik für flexible, leichte Gruppen in feindlichem Gebiet",
                    "nl": "Een techniek om een flexibele, lichte groep te maken in vijandig gebied"
                },
                {
                    "en": "A type of Japanese sword used in Go ceremonies",
                    "es": "Un tipo de espada japonesa usada en ceremonias de Go",
                    "de": "Eine Art japanisches Schwert bei Go-Zeremonien",
                    "nl": "Een soort Japans zwaard gebruikt bij Go-ceremonies"
                },
                {
                    "en": "An ancient rule that is no longer used",
                    "es": "Una regla antigua que ya no se usa",
                    "de": "Eine alte Regel, die nicht mehr verwendet wird",
                    "nl": "Een oude regel die niet meer wordt gebruikt"
                },
                {
                    "en": "A scoring bonus for the losing player",
                    "es": "Un bonus de puntuación para el jugador perdedor",
                    "de": "Ein Wertungsbonus für den Verlierer",
                    "nl": "Een scorebonus voor de verliezende speler"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Sabaki is the art of making a flexible, efficient group inside the opponent's area of influence. The key is to stay light, use sacrifice, and avoid becoming heavy or surrounded.",
                "es": "Sabaki es el arte de hacer un grupo flexible y eficiente dentro del área de influencia del oponente. La clave es mantenerse ligero y usar sacrificios.",
                "de": "Sabaki ist die Kunst, eine flexible, effiziente Gruppe im Einflussbereich des Gegners zu schaffen. Wichtig ist, leicht zu bleiben und Opfer zu nutzen.",
                "nl": "Sabaki is de kunst om een flexibele, efficiënte groep te maken in het invloedsgebied van de tegenstander. De sleutel is licht blijven en offers gebruiken."
            }
        },
        {
            "question": {
                "en": "What is a 'bulky five' shape in Go life and death?",
                "es": "¿Qué es una forma de 'cinco voluminoso' en vida y muerte de Go?",
                "de": "Was ist eine 'plumpe Fünf'-Form bei Leben und Tod in Go?",
                "nl": "Wat is een 'logge vijf'-vorm in Go leven en dood?"
            },
            "options": [
                {
                    "en": "A five-space eye shape that is alive if it is your turn",
                    "es": "Una forma de ojo de cinco espacios que está viva si es tu turno",
                    "de": "Eine Fünf-Felder-Augenform, die am Zug lebend ist",
                    "nl": "Een vijfveldsoogvorm die levend is als jij aan zet bent"
                },
                {
                    "en": "A group of five dead stones",
                    "es": "Un grupo de cinco piedras muertas",
                    "de": "Eine Gruppe von fünf toten Steinen",
                    "nl": "Een groep van vijf dode stenen"
                },
                {
                    "en": "Five stones in a straight line",
                    "es": "Cinco piedras en línea recta",
                    "de": "Fünf Steine in einer Reihe",
                    "nl": "Vijf stenen op een rij"
                },
                {
                    "en": "A group that needs exactly five moves to live",
                    "es": "Un grupo que necesita exactamente cinco movimientos para vivir",
                    "de": "Eine Gruppe, die genau fünf Züge zum Leben braucht",
                    "nl": "Een groep die precies vijf zetten nodig heeft om te leven"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A bulky five is a five-point eye space in a cross-like shape. Its status depends on who plays first: the defender can live by playing the center, or the attacker can kill by playing there.",
                "es": "Un cinco voluminoso es un espacio de ojo de cinco puntos en forma de cruz. Su estado depende de quién juegue primero en el centro.",
                "de": "Eine plumpe Fünf ist ein Fünf-Punkte-Augenraum in Kreuzform. Wer zuerst in der Mitte spielt, bestimmt, ob die Gruppe lebt oder stirbt.",
                "nl": "Een logge vijf is een vijfpuntsoogruimte in kruisvorm. De status hangt af van wie eerst in het midden speelt: de verdediger kan leven, de aanvaller kan doden."
            }
        },
        {
            "question": {
                "en": "What is a 'bent four in the corner' in Go?",
                "es": "¿Qué es un 'cuatro doblado en la esquina' en Go?",
                "de": "Was ist ein 'gebogenes Vier in der Ecke' in Go?",
                "nl": "Wat is een 'gebogen vier in de hoek' in Go?"
            },
            "options": [
                {
                    "en": "A group considered dead under Japanese rules",
                    "es": "Un grupo considerado muerto bajo las reglas japonesas",
                    "de": "Eine Gruppe, die nach japanischen Regeln als tot gilt",
                    "nl": "Een groep die als dood beschouwd wordt onder Japanse regels"
                },
                {
                    "en": "A very strong living group",
                    "es": "Un grupo vivo muy fuerte",
                    "de": "Eine sehr starke lebende Gruppe",
                    "nl": "Een zeer sterke levende groep"
                },
                {
                    "en": "Four stones placed in a square shape",
                    "es": "Cuatro piedras colocadas en forma cuadrada",
                    "de": "Vier Steine in Quadratform",
                    "nl": "Vier stenen in een vierkante vorm"
                },
                {
                    "en": "A scoring bonus in corner territories",
                    "es": "Un bonus de puntuación en territorios de esquina",
                    "de": "Ein Wertungsbonus in Eckgebieten",
                    "nl": "Een scorebonus in hoekgebieden"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Bent four in the corner is a special shape that is considered unconditionally dead under Japanese rules. The attacker can always create a ko that cannot be won by the defender.",
                "es": "El cuatro doblado en la esquina es una forma especial considerada incondicionalmente muerta bajo las reglas japonesas.",
                "de": "Gebogenes Vier in der Ecke ist eine Sonderform, die nach japanischen Regeln als bedingungslos tot gilt, da der Angreifer immer ein ungewinnbares Ko erzwingen kann.",
                "nl": "Gebogen vier in de hoek is een speciale vorm die als onvoorwaardelijk dood wordt beschouwd onder Japanse regels."
            }
        },
        {
            "question": {
                "en": "What is a 'superko' rule in Go?",
                "es": "¿Qué es la regla de 'superko' en Go?",
                "de": "Was ist die 'Superko'-Regel in Go?",
                "nl": "Wat is de 'superko'-regel in Go?"
            },
            "options": [
                {
                    "en": "No board position may be repeated during the entire game",
                    "es": "Ninguna posición del tablero puede repetirse durante todo el juego",
                    "de": "Keine Brettposition darf im gesamten Spiel wiederholt werden",
                    "nl": "Geen bordpositie mag herhaald worden tijdens het hele spel"
                },
                {
                    "en": "Ko fights are not allowed in professional games",
                    "es": "Las peleas de ko no están permitidas en juegos profesionales",
                    "de": "Ko-Kämpfe sind in Profispielen nicht erlaubt",
                    "nl": "Ko-gevechten zijn niet toegestaan in professionele spellen"
                },
                {
                    "en": "A ko worth more than 10 points",
                    "es": "Un ko que vale más de 10 puntos",
                    "de": "Ein Ko, das mehr als 10 Punkte wert ist",
                    "nl": "Een ko die meer dan 10 punten waard is"
                },
                {
                    "en": "A double ko situation",
                    "es": "Una situación de doble ko",
                    "de": "Eine Doppel-Ko-Situation",
                    "nl": "Een dubbele ko-situatie"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The superko rule extends the basic ko rule to prevent any repeated board position during the entire game, not just immediate recapture. It is used in Chinese and some Western rulesets.",
                "es": "La regla de superko extiende la regla básica de ko para evitar cualquier posición repetida durante todo el juego, no solo la recaptura inmediata.",
                "de": "Die Superko-Regel erweitert die Ko-Regel und verhindert jede wiederholte Brettposition im gesamten Spiel, nicht nur die sofortige Rücknahme.",
                "nl": "De superko-regel breidt de basis ko-regel uit om elke herhaalde bordpositie tijdens het hele spel te voorkomen, niet alleen directe herovering."
            }
        },
        {
            "question": {
                "en": "In Go, what does 'counting' refer to during a game?",
                "es": "En Go, ¿a qué se refiere 'contar' durante un juego?",
                "de": "Was bedeutet 'Zählen' während eines Go-Spiels?",
                "nl": "Wat betekent 'tellen' tijdens een Go-spel?"
            },
            "options": [
                {
                    "en": "Estimating the score to guide strategic decisions",
                    "es": "Estimar la puntuación para guiar decisiones estratégicas",
                    "de": "Die Punktzahl schätzen, um strategische Entscheidungen zu treffen",
                    "nl": "De score schatten om strategische beslissingen te sturen"
                },
                {
                    "en": "Counting the number of stones in your bowl",
                    "es": "Contar el número de piedras en tu cuenco",
                    "de": "Die Steine in der Schale zählen",
                    "nl": "Het aantal stenen in je pot tellen"
                },
                {
                    "en": "Counting how many moves have been played",
                    "es": "Contar cuántos movimientos se han jugado",
                    "de": "Zählen, wie viele Züge gespielt wurden",
                    "nl": "Tellen hoeveel zetten er zijn gespeeld"
                },
                {
                    "en": "Counting the number of players in a tournament",
                    "es": "Contar el número de jugadores en un torneo",
                    "de": "Die Anzahl der Spieler in einem Turnier zählen",
                    "nl": "Het aantal spelers in een toernooi tellen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Counting in Go means estimating the current score by evaluating both players' territories and prisoners. Good players count regularly to decide whether to play aggressively or safely.",
                "es": "Contar en Go significa estimar la puntuación evaluando los territorios y prisioneros. Los buenos jugadores cuentan regularmente para decidir si jugar agresiva o seguramente.",
                "de": "Zählen in Go bedeutet, die aktuelle Punktzahl durch Bewertung der Gebiete und Gefangenen zu schätzen. Gute Spieler zählen regelmäßig für ihre Strategieentscheidungen.",
                "nl": "Tellen in Go betekent de huidige score schatten door gebieden en gevangenen te evalueren. Goede spelers tellen regelmatig om te beslissen of ze agressief of veilig moeten spelen."
            }
        },
        {
            "question": {
                "en": "What is the concept of 'direction of play' in Go?",
                "es": "¿Cuál es el concepto de 'dirección de juego' en Go?",
                "de": "Was ist das Konzept der 'Spielrichtung' in Go?",
                "nl": "Wat is het concept van 'speelrichting' in Go?"
            },
            "options": [
                {
                    "en": "Choosing which area to play based on whole-board strategy",
                    "es": "Elegir dónde jugar basándose en la estrategia de todo el tablero",
                    "de": "Die Spielregion basierend auf Gesamtbrettstrategie wählen",
                    "nl": "Kiezen waar te spelen op basis van een strategie voor het hele bord"
                },
                {
                    "en": "The physical direction you face while playing",
                    "es": "La dirección física a la que miras mientras juegas",
                    "de": "Die physische Richtung, in die man beim Spielen schaut",
                    "nl": "De fysieke richting waarin je kijkt tijdens het spelen"
                },
                {
                    "en": "Always playing clockwise around the board",
                    "es": "Jugar siempre en sentido horario por el tablero",
                    "de": "Immer im Uhrzeigersinn um das Brett spielen",
                    "nl": "Altijd met de klok mee rond het bord spelen"
                },
                {
                    "en": "Following the order shown on the star points",
                    "es": "Seguir el orden mostrado en los puntos estrella",
                    "de": "Der Reihenfolge der Sternpunkte folgen",
                    "nl": "De volgorde van de sterpunten volgen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Direction of play is a high-level strategic concept about choosing which side of a stone to play on or which area of the board to develop, based on the overall position.",
                "es": "La dirección de juego es un concepto estratégico de alto nivel sobre elegir qué lado o área desarrollar, basándose en la posición general.",
                "de": "Spielrichtung ist ein hochrangiges strategisches Konzept über die Wahl der Spielseite oder des zu entwickelnden Bereichs, basierend auf der Gesamtposition.",
                "nl": "Speelrichting is een strategisch concept op hoog niveau over het kiezen aan welke kant te spelen of welk gebied te ontwikkelen, op basis van de algehele positie."
            }
        },
        {
            "question": {
                "en": "What is a 'double-digit kyu' player in Go?",
                "es": "¿Qué es un jugador 'kyu de dos dígitos' en Go?",
                "de": "Was ist ein 'zweistelliger Kyu'-Spieler in Go?",
                "nl": "Wat is een 'tweecijferige kyu'-speler in Go?"
            },
            "options": [
                {
                    "en": "A beginner ranked 10-kyu or higher (weaker)",
                    "es": "Un principiante clasificado 10-kyu o superior (más débil)",
                    "de": "Ein Anfänger mit Rang 10-Kyu oder höher (schwächer)",
                    "nl": "Een beginner met rang 10-kyu of hoger (zwakker)"
                },
                {
                    "en": "A player who has won at least 10 games",
                    "es": "Un jugador que ha ganado al menos 10 juegos",
                    "de": "Ein Spieler, der mindestens 10 Spiele gewonnen hat",
                    "nl": "Een speler die minstens 10 spellen heeft gewonnen"
                },
                {
                    "en": "A professional player with two dan ranks",
                    "es": "Un jugador profesional con dos rangos dan",
                    "de": "Ein Profispieler mit zwei Dan-Rängen",
                    "nl": "Een professionele speler met twee dan-rangen"
                },
                {
                    "en": "A player who uses two sets of stones",
                    "es": "Un jugador que usa dos juegos de piedras",
                    "de": "Ein Spieler, der zwei Steinsätze verwendet",
                    "nl": "Een speler die twee sets stenen gebruikt"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A double-digit kyu player is ranked from 10-kyu to 30-kyu, indicating a beginner level. As players improve, they progress from higher numbers toward 1-kyu, then to dan ranks.",
                "es": "Un jugador kyu de dos dígitos tiene rango entre 10-kyu y 30-kyu, indicando nivel principiante. Al mejorar, progresan hacia 1-kyu y luego a rangos dan.",
                "de": "Ein zweistelliger Kyu-Spieler hat einen Rang von 10-Kyu bis 30-Kyu (Anfängerniveau). Mit Verbesserung geht es Richtung 1-Kyu und dann zu Dan-Rängen.",
                "nl": "Een tweecijferige kyu-speler heeft een rang van 10-kyu tot 30-kyu, wat een beginnersniveau aangeeft. Bij verbetering gaat men richting 1-kyu en dan naar dan-rangen."
            }
        },
        {
            "question": {
                "en": "What strategic role does the 'third line' play in Go?",
                "es": "¿Qué papel estratégico juega la 'tercera línea' en Go?",
                "de": "Welche strategische Rolle spielt die 'dritte Linie' in Go?",
                "nl": "Welke strategische rol speelt de 'derde lijn' in Go?"
            },
            "options": [
                {
                    "en": "It is the line of territory, good for securing solid ground",
                    "es": "Es la línea de territorio, buena para asegurar terreno sólido",
                    "de": "Sie ist die Gebietslinie, gut für sichere Grundlagen",
                    "nl": "Het is de gebiedslijn, goed voor het beveiligen van stevig terrein"
                },
                {
                    "en": "It is the weakest line on the board",
                    "es": "Es la línea más débil del tablero",
                    "de": "Sie ist die schwächste Linie auf dem Brett",
                    "nl": "Het is de zwakste lijn op het bord"
                },
                {
                    "en": "Stones cannot be placed on the third line",
                    "es": "No se pueden colocar piedras en la tercera línea",
                    "de": "Steine können nicht auf die dritte Linie gesetzt werden",
                    "nl": "Stenen kunnen niet op de derde lijn worden geplaatst"
                },
                {
                    "en": "It is only used during the endgame",
                    "es": "Solo se usa durante el final del juego",
                    "de": "Sie wird nur im Endspiel verwendet",
                    "nl": "Het wordt alleen tijdens het eindspel gebruikt"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The third line is called the 'line of territory' because stones placed there are efficient at securing side territory. However, they project less influence toward the center.",
                "es": "La tercera línea se llama 'línea de territorio' porque las piedras allí son eficientes para asegurar territorio lateral, aunque proyectan menos influencia al centro.",
                "de": "Die dritte Linie heißt 'Gebietslinie', da Steine dort effizient Seitengebiet sichern, aber weniger Einfluss zur Mitte projizieren.",
                "nl": "De derde lijn heet de 'gebiedslijn' omdat stenen daar efficiënt zijgebied beveiligen, maar minder invloed naar het centrum uitstralen."
            }
        },
        {
            "question": {
                "en": "What strategic role does the 'fourth line' play in Go?",
                "es": "¿Qué papel estratégico juega la 'cuarta línea' en Go?",
                "de": "Welche strategische Rolle spielt die 'vierte Linie' in Go?",
                "nl": "Welke strategische rol speelt de 'vierde lijn' in Go?"
            },
            "options": [
                {
                    "en": "It is the line of influence, projecting power toward the center",
                    "es": "Es la línea de influencia, proyectando poder hacia el centro",
                    "de": "Sie ist die Einflusslinie, die Macht zur Mitte projiziert",
                    "nl": "Het is de invloedslijn, die kracht naar het centrum projecteert"
                },
                {
                    "en": "It marks the boundary where ko is forbidden",
                    "es": "Marca el límite donde el ko está prohibido",
                    "de": "Sie markiert die Grenze, wo Ko verboten ist",
                    "nl": "Het markeert de grens waar ko verboden is"
                },
                {
                    "en": "It is the best line for making eyes",
                    "es": "Es la mejor línea para hacer ojos",
                    "de": "Sie ist die beste Linie zum Bilden von Augen",
                    "nl": "Het is de beste lijn om ogen te maken"
                },
                {
                    "en": "It is only used for handicap stone placement",
                    "es": "Solo se usa para colocar piedras de ventaja",
                    "de": "Sie wird nur für Vorgabesteine verwendet",
                    "nl": "Het wordt alleen gebruikt voor voorgiftstenen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The fourth line is called the 'line of influence' because stones on it project power toward the center. They are good for building frameworks but less secure for immediate territory.",
                "es": "La cuarta línea se llama 'línea de influencia' porque las piedras allí proyectan poder hacia el centro, buenas para marcos pero menos seguras para territorio inmediato.",
                "de": "Die vierte Linie heißt 'Einflusslinie', da Steine dort Macht zur Mitte projizieren. Sie eignen sich für Gerüste, sind aber für sofortiges Gebiet weniger sicher.",
                "nl": "De vierde lijn heet de 'invloedslijn' omdat stenen daar kracht naar het centrum projecteren. Ze zijn goed voor raamwerken maar minder zeker voor direct gebied."
            }
        },
        {
            "question": {
                "en": "What is a 'semeai' in Go?",
                "es": "¿Qué es un 'semeai' en Go?",
                "de": "Was ist ein 'Semeai' in Go?",
                "nl": "Wat is een 'semeai' in Go?"
            },
            "options": [
                {
                    "en": "A capturing race between two groups with shared liberties",
                    "es": "Una carrera de captura entre dos grupos con libertades compartidas",
                    "de": "Ein Schlagwettlauf zwischen zwei Gruppen mit gemeinsamen Freiheiten",
                    "nl": "Een veroveringsrace tussen twee groepen met gedeelde vrijheden"
                },
                {
                    "en": "A type of opening strategy from China",
                    "es": "Un tipo de estrategia de apertura de China",
                    "de": "Eine Art Eröffnungsstrategie aus China",
                    "nl": "Een soort openingsstrategie uit China"
                },
                {
                    "en": "The Japanese word for resignation",
                    "es": "La palabra japonesa para rendirse",
                    "de": "Das japanische Wort für Aufgabe",
                    "nl": "Het Japanse woord voor opgeven"
                },
                {
                    "en": "A tournament format used in Asia",
                    "es": "Un formato de torneo usado en Asia",
                    "de": "Ein Turnierformat aus Asien",
                    "nl": "Een toernooiformaat dat in Azië wordt gebruikt"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A semeai is a capturing race where two adjacent groups fight for survival. The group that fills the other's liberties first wins. Counting liberties and using eye advantages are crucial.",
                "es": "Un semeai es una carrera de captura donde dos grupos adyacentes luchan por sobrevivir. El grupo que llena primero las libertades del otro gana.",
                "de": "Ein Semeai ist ein Schlagwettlauf, bei dem zwei benachbarte Gruppen ums Überleben kämpfen. Die Gruppe, die zuerst die Freiheiten der anderen füllt, gewinnt.",
                "nl": "Een semeai is een veroveringsrace waarbij twee aangrenzende groepen om overleving strijden. De groep die als eerste de vrijheden van de andere vult, wint."
            }
        },
        {
            "question": {
                "en": "Why are 'outside liberties' valuable in a semeai in Go?",
                "es": "¿Por qué son valiosas las 'libertades externas' en un semeai?",
                "de": "Warum sind 'äußere Freiheiten' in einem Semeai wertvoll?",
                "nl": "Waarom zijn 'buitenste vrijheden' waardevol in een semeai in Go?"
            },
            "options": [
                {
                    "en": "They can be filled without risk to your own group",
                    "es": "Pueden llenarse sin riesgo para tu propio grupo",
                    "de": "Sie können ohne Risiko für die eigene Gruppe gefüllt werden",
                    "nl": "Ze kunnen gevuld worden zonder risico voor je eigen groep"
                },
                {
                    "en": "They count as bonus points in scoring",
                    "es": "Cuentan como puntos extra en la puntuación",
                    "de": "Sie zählen als Bonuspunkte bei der Wertung",
                    "nl": "Ze tellen als bonuspunten bij de score"
                },
                {
                    "en": "They prevent ko fights from occurring",
                    "es": "Evitan que ocurran peleas de ko",
                    "de": "Sie verhindern Ko-Kämpfe",
                    "nl": "Ze voorkomen dat ko-gevechten plaatsvinden"
                },
                {
                    "en": "They automatically create eyes for the group",
                    "es": "Crean automáticamente ojos para el grupo",
                    "de": "Sie erzeugen automatisch Augen für die Gruppe",
                    "nl": "Ze maken automatisch ogen voor de groep"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Outside liberties are valuable in a semeai because you can fill the opponent's outside liberties safely. Having more outside liberties gives you extra moves to win the capturing race.",
                "es": "Las libertades externas son valiosas porque puedes llenarlas de forma segura. Tener más libertades externas da movimientos extra para ganar la carrera de captura.",
                "de": "Äußere Freiheiten sind wertvoll, weil man die äußeren Freiheiten des Gegners sicher füllen kann. Mehr äußere Freiheiten geben zusätzliche Züge im Schlagwettlauf.",
                "nl": "Buitenste vrijheden zijn waardevol omdat je de buitenste vrijheden van de tegenstander veilig kunt vullen. Meer buitenste vrijheden geven extra zetten in de veroveringsrace."
            }
        },
        {
            "question": {
                "en": "What is 'korigatachi' in Go and why is it undesirable?",
                "es": "¿Qué es 'korigatachi' en Go y por qué es indeseable?",
                "de": "Was ist 'Korigatachi' in Go und warum ist es unerwünscht?",
                "nl": "Wat is 'korigatachi' in Go en waarom is het ongewenst?"
            },
            "options": [
                {
                    "en": "An over-concentrated shape that wastes stones",
                    "es": "Una forma sobre-concentrada que desperdicia piedras",
                    "de": "Eine überkonzentrierte Form, die Steine verschwendet",
                    "nl": "Een overgeconcentreerde vorm die stenen verspilt"
                },
                {
                    "en": "A shape that creates too many eyes",
                    "es": "Una forma que crea demasiados ojos",
                    "de": "Eine Form, die zu viele Augen erzeugt",
                    "nl": "Een vorm die te veel ogen maakt"
                },
                {
                    "en": "A position with no possible moves",
                    "es": "Una posición sin movimientos posibles",
                    "de": "Eine Position ohne mögliche Züge",
                    "nl": "Een positie zonder mogelijke zetten"
                },
                {
                    "en": "The strongest defensive formation in Go",
                    "es": "La formación defensiva más fuerte en Go",
                    "de": "Die stärkste Verteidigungsformation in Go",
                    "nl": "De sterkste verdedigingsformatie in Go"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Korigatachi means over-concentrated or heavy shape. It uses more stones than necessary in one area, wasting potential moves that could be more productive elsewhere on the board.",
                "es": "Korigatachi significa forma sobre-concentrada o pesada. Usa más piedras de las necesarias en un área, desperdiciando movimientos que podrían ser más productivos en otro lugar.",
                "de": "Korigatachi bedeutet überkonzentrierte oder schwere Form. Es werden mehr Steine als nötig in einem Bereich verwendet, was anderswo produktivere Züge verschwendet.",
                "nl": "Korigatachi betekent overgeconcentreerde of zware vorm. Het gebruikt meer stenen dan nodig in één gebied en verspilt zetten die elders productiever zouden zijn."
            }
        },
        {
            "question": {
                "en": "What is 'dame' play in the endgame of Go?",
                "es": "¿Qué es jugar 'dame' en el final de un juego de Go?",
                "de": "Was ist 'Dame'-Spielen im Endspiel von Go?",
                "nl": "Wat is 'dame' spelen in het eindspel van Go?"
            },
            "options": [
                {
                    "en": "Filling neutral points that do not affect the score",
                    "es": "Llenar puntos neutrales que no afectan la puntuación",
                    "de": "Neutrale Punkte füllen, die die Wertung nicht beeinflussen",
                    "nl": "Neutrale punten vullen die de score niet beïnvloeden"
                },
                {
                    "en": "Making the final capturing moves",
                    "es": "Hacer los últimos movimientos de captura",
                    "de": "Die letzten Schlagzüge machen",
                    "nl": "De laatste veroveringszetten doen"
                },
                {
                    "en": "Playing a game of checkers during a break",
                    "es": "Jugar una partida de damas durante un descanso",
                    "de": "Während einer Pause Dame spielen",
                    "nl": "Een spel dammen spelen tijdens een pauze"
                },
                {
                    "en": "Removing dead stones from the board",
                    "es": "Quitar piedras muertas del tablero",
                    "de": "Tote Steine vom Brett entfernen",
                    "nl": "Dode stenen van het bord verwijderen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Dame play involves filling the neutral points between territories at the end of the game. Under Japanese rules, these points do not affect scoring but must be filled before counting.",
                "es": "Jugar dame implica llenar los puntos neutrales entre territorios al final. Bajo las reglas japonesas, no afectan la puntuación pero deben llenarse antes de contar.",
                "de": "Dame-Spiel bedeutet, die neutralen Punkte zwischen den Gebieten am Ende zu füllen. Nach japanischen Regeln beeinflussen sie die Wertung nicht, müssen aber gefüllt werden.",
                "nl": "Dame spelen betekent de neutrale punten tussen gebieden aan het einde vullen. Onder Japanse regels beïnvloeden ze de score niet maar moeten ze gevuld worden."
            }
        },
        {
            "question": {
                "en": "What does the Go saying 'urgent moves before big moves' mean?",
                "es": "¿Qué significa el dicho de Go 'movimientos urgentes antes que movimientos grandes'?",
                "de": "Was bedeutet das Go-Sprichwort 'dringende Züge vor großen Zügen'?",
                "nl": "Wat betekent het Go-gezegde 'urgente zetten voor grote zetten'?"
            },
            "options": [
                {
                    "en": "Prioritize moves that prevent loss over those that gain points",
                    "es": "Priorizar movimientos que previenen pérdida sobre los que ganan puntos",
                    "de": "Züge, die Verlust verhindern, vor punktegewinnenden priorisieren",
                    "nl": "Prioriteit geven aan zetten die verlies voorkomen boven zetten die punten winnen"
                },
                {
                    "en": "Always play the fastest move possible",
                    "es": "Siempre jugar el movimiento más rápido posible",
                    "de": "Immer den schnellsten möglichen Zug spielen",
                    "nl": "Altijd de snelst mogelijke zet spelen"
                },
                {
                    "en": "Play in small areas before large ones",
                    "es": "Jugar en áreas pequeñas antes que en grandes",
                    "de": "In kleinen Bereichen vor großen spielen",
                    "nl": "In kleine gebieden spelen voor grote"
                },
                {
                    "en": "Rush to capture stones as quickly as possible",
                    "es": "Apresurarse a capturar piedras lo más rápido posible",
                    "de": "Steine so schnell wie möglich schlagen",
                    "nl": "Zo snel mogelijk stenen veroveren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "This proverb means you should deal with critical situations (groups in danger, cutting points) before playing large but non-urgent moves. Saving a group is often worth more than gaining territory.",
                "es": "Este proverbio significa que debes atender situaciones críticas antes de hacer movimientos grandes pero no urgentes. Salvar un grupo suele valer más que ganar territorio.",
                "de": "Dieses Sprichwort bedeutet, kritische Situationen (gefährdete Gruppen, Schnittpunkte) vor großen, aber nicht dringenden Zügen zu behandeln.",
                "nl": "Dit spreekwoord betekent dat je kritieke situaties moet aanpakken (groepen in gevaar, snijpunten) voor grote maar niet-urgente zetten."
            }
        },
        {
            "question": {
                "en": "What is the typical value of a handicap stone in terms of points in Go?",
                "es": "¿Cuál es el valor típico de una piedra de ventaja en puntos de Go?",
                "de": "Was ist der typische Wert eines Vorgabesteins in Punkten?",
                "nl": "Wat is de typische waarde van een voorgiftsteen in punten in Go?"
            },
            "options": [
                {
                    "en": "Approximately 10 to 15 points",
                    "es": "Aproximadamente 10 a 15 puntos",
                    "de": "Ungefähr 10 bis 15 Punkte",
                    "nl": "Ongeveer 10 tot 15 punten"
                },
                {
                    "en": "Exactly 5 points",
                    "es": "Exactamente 5 puntos",
                    "de": "Genau 5 Punkte",
                    "nl": "Precies 5 punten"
                },
                {
                    "en": "Approximately 1 to 2 points",
                    "es": "Aproximadamente 1 a 2 puntos",
                    "de": "Ungefähr 1 bis 2 Punkte",
                    "nl": "Ongeveer 1 tot 2 punten"
                },
                {
                    "en": "No fixed value",
                    "es": "Sin valor fijo",
                    "de": "Kein fester Wert",
                    "nl": "Geen vaste waarde"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Each handicap stone is estimated to be worth roughly 10 to 15 points. This corresponds approximately to one rank difference between players in the kyu and dan system.",
                "es": "Cada piedra de ventaja se estima en unos 10 a 15 puntos, correspondiendo aproximadamente a una diferencia de rango entre jugadores.",
                "de": "Jeder Vorgabestein ist ca. 10 bis 15 Punkte wert, was ungefähr einem Rangunterschied im Kyu-/Dan-System entspricht.",
                "nl": "Elke voorgiftsteen wordt geschat op ongeveer 10 tot 15 punten, wat ongeveer overeenkomt met één rangverschil in het kyu- en dan-systeem."
            }
        },
        {
            "question": {
                "en": "What is a 'geta' tesuji useful for in Go?",
                "es": "¿Para qué es útil un tesuji 'geta' en Go?",
                "de": "Wofür ist ein 'Geta'-Tesuji in Go nützlich?",
                "nl": "Waarvoor is een 'geta'-tesuji nuttig in Go?"
            },
            "options": [
                {
                    "en": "Capturing stones without a direct ladder chase",
                    "es": "Capturar piedras sin una persecución directa de escalera",
                    "de": "Steine ohne direkte Leiterverfolgung schlagen",
                    "nl": "Stenen veroveren zonder een directe ladderachtervolging"
                },
                {
                    "en": "Building a wall of stones quickly",
                    "es": "Construir un muro de piedras rápidamente",
                    "de": "Schnell eine Steinmauer bauen",
                    "nl": "Snel een stenen muur bouwen"
                },
                {
                    "en": "Creating two eyes in a single move",
                    "es": "Crear dos ojos en un solo movimiento",
                    "de": "Zwei Augen in einem Zug schaffen",
                    "nl": "Twee ogen maken in één zet"
                },
                {
                    "en": "Winning a ko fight automatically",
                    "es": "Ganar una pelea de ko automáticamente",
                    "de": "Einen Ko-Kampf automatisch gewinnen",
                    "nl": "Een ko-gevecht automatisch winnen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A geta (net) tesuji traps stones by loosely surrounding them so they cannot escape in any direction, even though they may have multiple liberties. It is an alternative to a ladder.",
                "es": "Un tesuji geta (red) atrapa piedras rodeándolas holgadamente para que no puedan escapar en ninguna dirección, aunque tengan múltiples libertades.",
                "de": "Ein Geta-Tesuji (Netz) fängt Steine durch loses Umstellen, sodass sie in keine Richtung entkommen können, auch wenn sie mehrere Freiheiten haben.",
                "nl": "Een geta (net) tesuji vangt stenen door ze los te omsingelen zodat ze in geen richting kunnen ontsnappen, ook al hebben ze meerdere vrijheden."
            }
        },
        {
            "question": {
                "en": "What is 'amashi' strategy in Go?",
                "es": "¿Qué es la estrategia 'amashi' en Go?",
                "de": "Was ist die 'Amashi'-Strategie in Go?",
                "nl": "Wat is de 'amashi'-strategie in Go?"
            },
            "options": [
                {
                    "en": "Giving the opponent territory while building strong influence",
                    "es": "Dar territorio al oponente mientras construyes influencia fuerte",
                    "de": "Dem Gegner Gebiet geben, während man starken Einfluss aufbaut",
                    "nl": "De tegenstander gebied geven terwijl je sterke invloed opbouwt"
                },
                {
                    "en": "Playing only on the edges of the board",
                    "es": "Jugar solo en los bordes del tablero",
                    "de": "Nur am Rand des Brettes spielen",
                    "nl": "Alleen aan de randen van het bord spelen"
                },
                {
                    "en": "Capturing as many stones as possible",
                    "es": "Capturar tantas piedras como sea posible",
                    "de": "So viele Steine wie möglich schlagen",
                    "nl": "Zoveel mogelijk stenen veroveren"
                },
                {
                    "en": "Copying the opponent's every move",
                    "es": "Copiar cada movimiento del oponente",
                    "de": "Jeden Zug des Gegners kopieren",
                    "nl": "Elke zet van de tegenstander kopiëren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Amashi is a strategy where you allow the opponent to take secure territory in exchange for building powerful influence and thickness, which you later convert into even more territory.",
                "es": "Amashi es una estrategia donde permites que el oponente tome territorio seguro a cambio de construir influencia poderosa que luego conviertes en más territorio.",
                "de": "Amashi ist eine Strategie, bei der man dem Gegner sicheres Gebiet überlässt und dafür mächtigen Einfluss aufbaut, der später in noch mehr Gebiet umgewandelt wird.",
                "nl": "Amashi is een strategie waarbij je de tegenstander veilig gebied laat nemen in ruil voor het opbouwen van krachtige invloed die je later omzet in nog meer gebied."
            }
        },
        {
            "question": {
                "en": "What is a 'moyo erasing' strategy in Go?",
                "es": "¿Qué es la estrategia de 'borrar moyo' en Go?",
                "de": "Was ist eine 'Moyo-Löschstrategie' in Go?",
                "nl": "Wat is een 'moyo-wis'-strategie in Go?"
            },
            "options": [
                {
                    "en": "Reducing the opponent's large framework before it becomes territory",
                    "es": "Reducir el gran marco del oponente antes de que se convierta en territorio",
                    "de": "Das große Gerüst des Gegners reduzieren, bevor es Gebiet wird",
                    "nl": "Het grote raamwerk van de tegenstander verkleinen voordat het gebied wordt"
                },
                {
                    "en": "Removing all your own stones from the board",
                    "es": "Quitar todas tus piedras del tablero",
                    "de": "Alle eigenen Steine vom Brett entfernen",
                    "nl": "Al je eigen stenen van het bord verwijderen"
                },
                {
                    "en": "Clearing the center of the board entirely",
                    "es": "Limpiar el centro del tablero por completo",
                    "de": "Die Mitte des Brettes vollständig räumen",
                    "nl": "Het midden van het bord volledig leegmaken"
                },
                {
                    "en": "Starting a new game after disagreement",
                    "es": "Comenzar un nuevo juego después de un desacuerdo",
                    "de": "Nach einer Meinungsverschiedenheit ein neues Spiel beginnen",
                    "nl": "Een nieuw spel beginnen na een meningsverschil"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Moyo erasing involves playing moves to reduce the opponent's large potential territory framework. This can be done through invasion (deep) or reduction (shallow) depending on the position.",
                "es": "Borrar moyo implica jugar movimientos para reducir el gran marco de territorio potencial del oponente, mediante invasión o reducción según la posición.",
                "de": "Moyo-Löschen bedeutet, Züge zu spielen, die das große Gebietsgerüst des Gegners reduzieren, durch Invasion (tief) oder Reduktion (flach) je nach Position.",
                "nl": "Moyo wissen betekent zetten spelen om het grote potentiële gebiedsraamwerk van de tegenstander te verkleinen, door invasie (diep) of reductie (ondiep) afhankelijk van de positie."
            }
        },
        {
            "question": {
                "en": "What is 'tsumego' in Go study?",
                "es": "¿Qué es 'tsumego' en el estudio de Go?",
                "de": "Was ist 'Tsumego' im Go-Studium?",
                "nl": "Wat is 'tsumego' in Go-studie?"
            },
            "options": [
                {
                    "en": "Life and death puzzle problems for practice",
                    "es": "Problemas de puzzles de vida y muerte para practicar",
                    "de": "Leben-und-Tod-Aufgaben zum Üben",
                    "nl": "Leven-en-dood-puzzelproblemen om te oefenen"
                },
                {
                    "en": "A book about Go history",
                    "es": "Un libro sobre la historia del Go",
                    "de": "Ein Buch über Go-Geschichte",
                    "nl": "Een boek over Go-geschiedenis"
                },
                {
                    "en": "A type of Go tournament format",
                    "es": "Un tipo de formato de torneo de Go",
                    "de": "Ein Go-Turnierformat",
                    "nl": "Een soort Go-toernooiformaat"
                },
                {
                    "en": "The Japanese tea ceremony before a game",
                    "es": "La ceremonia del té japonesa antes de un juego",
                    "de": "Die japanische Teezeremonie vor einem Spiel",
                    "nl": "De Japanse theeceremonie voor een spel"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Tsumego are life and death problems used for Go training. They present local positions where the player must find the correct sequence to kill or save a group of stones.",
                "es": "Los tsumego son problemas de vida y muerte para entrenar en Go. Presentan posiciones locales donde se debe encontrar la secuencia correcta para matar o salvar un grupo.",
                "de": "Tsumego sind Leben-und-Tod-Aufgaben für das Go-Training. Sie zeigen lokale Positionen, bei denen man die richtige Zugfolge zum Töten oder Retten einer Gruppe finden muss.",
                "nl": "Tsumego zijn leven-en-dood-problemen voor Go-training. Ze presenteren lokale posities waar de speler de juiste reeks moet vinden om een groep te doden of te redden."
            }
        },
        {
            "question": {
                "en": "What is a 'crane's nest' tesuji in Go?",
                "es": "¿Qué es un tesuji de 'nido de grulla' en Go?",
                "de": "Was ist ein 'Kranennest'-Tesuji in Go?",
                "nl": "Wat is een 'kraannest'-tesuji in Go?"
            },
            "options": [
                {
                    "en": "A technique to capture stones in a corner enclosure",
                    "es": "Una técnica para capturar piedras en un cierre de esquina",
                    "de": "Eine Technik zum Schlagen von Steinen in einer Eckumfassung",
                    "nl": "Een techniek om stenen te veroveren in een hoekformatie"
                },
                {
                    "en": "A formation used to build territory in the center",
                    "es": "Una formación para construir territorio en el centro",
                    "de": "Eine Formation zum Gebietsaufbau in der Mitte",
                    "nl": "Een formatie om gebied te bouwen in het midden"
                },
                {
                    "en": "An ancient opening strategy from Japan",
                    "es": "Una antigua estrategia de apertura de Japón",
                    "de": "Eine alte Eröffnungsstrategie aus Japan",
                    "nl": "Een oude openingsstrategie uit Japan"
                },
                {
                    "en": "A method to connect two distant groups",
                    "es": "Un método para conectar dos grupos distantes",
                    "de": "Eine Methode zum Verbinden zweier entfernter Gruppen",
                    "nl": "Een methode om twee verre groepen te verbinden"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The crane's nest tesuji is a technique used to capture invading stones in a corner. It involves a specific pattern of moves that creates a net, trapping the opponent's stones.",
                "es": "El tesuji de nido de grulla es una técnica para capturar piedras invasoras en una esquina mediante un patrón específico que crea una red.",
                "de": "Das Kranennest-Tesuji ist eine Technik zum Fangen eindringender Steine in einer Ecke durch ein bestimmtes Zugmuster, das ein Netz bildet.",
                "nl": "Het kraannest-tesuji is een techniek om binnendringende stenen in een hoek te veroveren via een specifiek patroon dat een net vormt."
            }
        },
        {
            "question": {
                "en": "What is 'tewari' analysis in Go?",
                "es": "¿Qué es el análisis 'tewari' en Go?",
                "de": "Was ist die 'Tewari'-Analyse in Go?",
                "nl": "Wat is 'tewari'-analyse in Go?"
            },
            "options": [
                {
                    "en": "Reordering moves to evaluate if a result is efficient",
                    "es": "Reordenar movimientos para evaluar si un resultado es eficiente",
                    "de": "Züge neu ordnen, um zu bewerten, ob ein Ergebnis effizient ist",
                    "nl": "Zetten herschikken om te evalueren of een resultaat efficiënt is"
                },
                {
                    "en": "Counting the total number of stones played",
                    "es": "Contar el número total de piedras jugadas",
                    "de": "Die Gesamtzahl gespielter Steine zählen",
                    "nl": "Het totale aantal gespeelde stenen tellen"
                },
                {
                    "en": "Analyzing the time spent on each move",
                    "es": "Analizar el tiempo dedicado a cada movimiento",
                    "de": "Die für jeden Zug aufgewendete Zeit analysieren",
                    "nl": "De tijd besteed aan elke zet analyseren"
                },
                {
                    "en": "Comparing your game with professional records",
                    "es": "Comparar tu juego con registros profesionales",
                    "de": "Das eigene Spiel mit Profispielen vergleichen",
                    "nl": "Je spel vergelijken met professionele partijen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Tewari analysis involves rearranging the order of moves in a sequence to judge whether the result was efficient. If the reordered moves look illogical, the original play was likely inefficient.",
                "es": "El análisis tewari implica reordenar los movimientos para juzgar si el resultado fue eficiente. Si los movimientos reordenados parecen ilógicos, el juego original fue ineficiente.",
                "de": "Die Tewari-Analyse ordnet Züge um, um zu beurteilen, ob das Ergebnis effizient war. Wenn die umgeordneten Züge unlogisch wirken, war das ursprüngliche Spiel ineffizient.",
                "nl": "Tewari-analyse herschikt de volgorde van zetten om te beoordelen of het resultaat efficiënt was. Als de herschikking onlogisch lijkt, was het oorspronkelijke spel waarschijnlijk inefficiënt."
            }
        },
        {
            "question": {
                "en": "What role does 'reading' play in Go ability?",
                "es": "¿Qué papel juega la 'lectura' en la habilidad de Go?",
                "de": "Welche Rolle spielt 'Lesen' bei der Go-Fähigkeit?",
                "nl": "Welke rol speelt 'lezen' bij Go-vaardigheid?"
            },
            "options": [
                {
                    "en": "Mentally calculating move sequences before playing them",
                    "es": "Calcular mentalmente secuencias de movimientos antes de jugarlos",
                    "de": "Zugfolgen mental berechnen, bevor man sie spielt",
                    "nl": "Mentaal zetreeksen berekenen voordat je ze speelt"
                },
                {
                    "en": "Reading books about Go strategy",
                    "es": "Leer libros sobre estrategia de Go",
                    "de": "Bücher über Go-Strategie lesen",
                    "nl": "Boeken over Go-strategie lezen"
                },
                {
                    "en": "Reading the opponent's facial expressions",
                    "es": "Leer las expresiones faciales del oponente",
                    "de": "Die Gesichtsausdrücke des Gegners lesen",
                    "nl": "De gezichtsuitdrukkingen van de tegenstander lezen"
                },
                {
                    "en": "Checking the game rules before each move",
                    "es": "Revisar las reglas del juego antes de cada movimiento",
                    "de": "Die Spielregeln vor jedem Zug überprüfen",
                    "nl": "De spelregels controleren voor elke zet"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Reading is the ability to mentally calculate possible move sequences and their outcomes without placing stones. It is considered the most fundamental skill in Go improvement.",
                "es": "La lectura es la habilidad de calcular mentalmente secuencias de movimientos posibles y sus resultados. Se considera la habilidad más fundamental para mejorar en Go.",
                "de": "Lesen ist die Fähigkeit, mögliche Zugfolgen und ihre Ergebnisse mental zu berechnen. Es gilt als grundlegendste Fähigkeit zur Go-Verbesserung.",
                "nl": "Lezen is het vermogen om mentaal mogelijke zetreeksen en hun resultaten te berekenen. Het wordt beschouwd als de meest fundamentele vaardigheid in Go-verbetering."
            }
        },
        {
            "question": {
                "en": "What is a 'kosumi' (diagonal move) used for in Go?",
                "es": "¿Para qué se usa un 'kosumi' (movimiento diagonal) en Go?",
                "de": "Wofür wird ein 'Kosumi' (Diagonalzug) in Go verwendet?",
                "nl": "Waarvoor wordt een 'kosumi' (diagonale zet) in Go gebruikt?"
            },
            "options": [
                {
                    "en": "Making a solid connection that resists cutting",
                    "es": "Hacer una conexión sólida que resiste el corte",
                    "de": "Eine solide Verbindung machen, die Schnitten widersteht",
                    "nl": "Een stevige verbinding maken die snijden weerstaat"
                },
                {
                    "en": "Capturing stones on the diagonal",
                    "es": "Capturar piedras en la diagonal",
                    "de": "Steine auf der Diagonalen schlagen",
                    "nl": "Stenen op de diagonaal veroveren"
                },
                {
                    "en": "Moving a stone already on the board",
                    "es": "Mover una piedra que ya está en el tablero",
                    "de": "Einen bereits gesetzten Stein bewegen",
                    "nl": "Een steen verplaatsen die al op het bord staat"
                },
                {
                    "en": "Blocking the opponent's view of the board",
                    "es": "Bloquear la vista del oponente del tablero",
                    "de": "Die Sicht des Gegners auf das Brett blockieren",
                    "nl": "Het zicht van de tegenstander op het bord blokkeren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A kosumi is a diagonal move that creates a solid connection difficult to cut. It is often used in the corner and at the edge to build shape while keeping a strong connection.",
                "es": "Un kosumi es un movimiento diagonal que crea una conexión sólida difícil de cortar. Se usa a menudo en la esquina y el borde para construir forma.",
                "de": "Ein Kosumi ist ein Diagonalzug, der eine solide, schwer zu schneidende Verbindung schafft. Er wird oft in Ecken und am Rand verwendet.",
                "nl": "Een kosumi is een diagonale zet die een stevige verbinding maakt die moeilijk te snijden is. Het wordt vaak gebruikt in de hoek en aan de rand."
            }
        },
        {
            "question": {
                "en": "What is the significance of the 'approach move' direction in Go?",
                "es": "¿Cuál es la importancia de la dirección del 'movimiento de aproximación' en Go?",
                "de": "Was ist die Bedeutung der 'Annäherungszug'-Richtung in Go?",
                "nl": "Wat is het belang van de richting van de 'naderingszet' in Go?"
            },
            "options": [
                {
                    "en": "It determines which side territory or influence develops on",
                    "es": "Determina en qué lado se desarrolla el territorio o la influencia",
                    "de": "Sie bestimmt, auf welcher Seite sich Gebiet oder Einfluss entwickelt",
                    "nl": "Het bepaalt aan welke kant gebied of invloed zich ontwikkelt"
                },
                {
                    "en": "It has no strategic significance",
                    "es": "No tiene significación estratégica",
                    "de": "Sie hat keine strategische Bedeutung",
                    "nl": "Het heeft geen strategische betekenis"
                },
                {
                    "en": "It must always be from the right side",
                    "es": "Siempre debe ser desde el lado derecho",
                    "de": "Er muss immer von der rechten Seite kommen",
                    "nl": "Het moet altijd van de rechterkant komen"
                },
                {
                    "en": "It only matters in handicap games",
                    "es": "Solo importa en juegos con ventaja",
                    "de": "Es ist nur in Vorgabespielen wichtig",
                    "nl": "Het doet er alleen toe in voorgiftspellen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The direction of an approach move shapes the subsequent joseki and determines which side of the corner each player develops toward, affecting the overall board strategy significantly.",
                "es": "La dirección del movimiento de aproximación moldea el joseki subsiguiente y determina hacia qué lado se desarrolla cada jugador, afectando significativamente la estrategia.",
                "de": "Die Richtung des Annäherungszugs formt das folgende Joseki und bestimmt, zu welcher Seite sich jeder Spieler entwickelt, was die Gesamtstrategie stark beeinflusst.",
                "nl": "De richting van de naderingszet vormt het daaropvolgende joseki en bepaalt naar welke kant elke speler zich ontwikkelt, wat de algehele bordstrategie sterk beïnvloedt."
            }
        },
        {
            "question": {
                "en": "What is 'miai counting' used for in Go endgame?",
                "es": "¿Para qué se usa el 'conteo miai' en el final de Go?",
                "de": "Wofür wird 'Miai-Zählen' im Go-Endspiel verwendet?",
                "nl": "Waarvoor wordt 'miai-telling' in het Go-eindspel gebruikt?"
            },
            "options": [
                {
                    "en": "Comparing endgame move values to find the biggest play",
                    "es": "Comparar valores de movimientos finales para encontrar la jugada más grande",
                    "de": "Endspielbewertungen vergleichen, um den größten Zug zu finden",
                    "nl": "Eindspelzetwaarden vergelijken om de grootste zet te vinden"
                },
                {
                    "en": "Counting the total number of eyes on the board",
                    "es": "Contar el número total de ojos en el tablero",
                    "de": "Die Gesamtzahl der Augen auf dem Brett zählen",
                    "nl": "Het totale aantal ogen op het bord tellen"
                },
                {
                    "en": "Determining which player goes first in the next game",
                    "es": "Determinar qué jugador va primero en el siguiente juego",
                    "de": "Bestimmen, wer im nächsten Spiel anfängt",
                    "nl": "Bepalen welke speler als eerste gaat in het volgende spel"
                },
                {
                    "en": "Measuring the physical size of territories",
                    "es": "Medir el tamaño físico de los territorios",
                    "de": "Die physische Größe der Gebiete messen",
                    "nl": "De fysieke grootte van gebieden meten"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Miai counting assigns point values to endgame moves to determine the most valuable play. Each move is evaluated based on how much it swings the score when played by either side.",
                "es": "El conteo miai asigna valores de puntos a movimientos finales para determinar la jugada más valiosa, evaluando cuánto cambia la puntuación.",
                "de": "Miai-Zählen weist Endspielen Punktwerte zu, um den wertvollsten Zug zu finden. Jeder Zug wird danach bewertet, wie sehr er die Punktzahl beeinflusst.",
                "nl": "Miai-telling kent puntwaarden toe aan eindszelzetten om de meest waardevolle zet te bepalen, gebaseerd op hoeveel de score verschuift als beide zijden spelen."
            }
        },
        {
            "question": {
                "en": "Who was Lee Sedol in the context of Go history?",
                "es": "¿Quién fue Lee Sedol en el contexto de la historia del Go?",
                "de": "Wer war Lee Sedol im Kontext der Go-Geschichte?",
                "nl": "Wie was Lee Sedol in de context van Go-geschiedenis?"
            },
            "options": [
                {
                    "en": "A Korean professional who famously lost to AlphaGo",
                    "es": "Un profesional coreano que perdió famosamente contra AlphaGo",
                    "de": "Ein koreanischer Profi, der berühmt gegen AlphaGo verlor",
                    "nl": "Een Koreaanse professional die beroemd verloor van AlphaGo"
                },
                {
                    "en": "The inventor of the game of Go",
                    "es": "El inventor del juego de Go",
                    "de": "Der Erfinder des Go-Spiels",
                    "nl": "De uitvinder van het spel Go"
                },
                {
                    "en": "The creator of the ko rule",
                    "es": "El creador de la regla del ko",
                    "de": "Der Schöpfer der Ko-Regel",
                    "nl": "De schepper van de ko-regel"
                },
                {
                    "en": "A Chinese emperor who banned Go",
                    "es": "Un emperador chino que prohibió el Go",
                    "de": "Ein chinesischer Kaiser, der Go verbot",
                    "nl": "Een Chinese keizer die Go verbood"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Lee Sedol is a Korean 9-dan professional who played a historic match against AlphaGo in 2016. He won one of five games, becoming the only human to beat AlphaGo in an official match.",
                "es": "Lee Sedol es un profesional coreano 9-dan que jugó un histórico partido contra AlphaGo en 2016. Ganó uno de cinco juegos, siendo el único humano en vencer a AlphaGo oficialmente.",
                "de": "Lee Sedol ist ein koreanischer 9-Dan-Profi, der 2016 ein historisches Match gegen AlphaGo spielte. Er gewann eines von fünf Spielen als einziger Mensch offiziell gegen AlphaGo.",
                "nl": "Lee Sedol is een Koreaanse 9-dan professional die in 2016 een historische wedstrijd tegen AlphaGo speelde. Hij won één van vijf spellen als enige mens die AlphaGo officieel versloeg."
            }
        },
        {
            "question": {
                "en": "What is a 'komoku' opening in Go?",
                "es": "¿Qué es una apertura 'komoku' en Go?",
                "de": "Was ist eine 'Komoku'-Eröffnung in Go?",
                "nl": "Wat is een 'komoku'-opening in Go?"
            },
            "options": [
                {
                    "en": "Placing the first stone on the 3-4 point in a corner",
                    "es": "Colocar la primera piedra en el punto 3-4 de una esquina",
                    "de": "Den ersten Stein auf den 3-4-Punkt in einer Ecke setzen",
                    "nl": "De eerste steen plaatsen op het 3-4 punt in een hoek"
                },
                {
                    "en": "Playing in the center of the board first",
                    "es": "Jugar primero en el centro del tablero",
                    "de": "Zuerst in der Mitte des Brettes spielen",
                    "nl": "Eerst in het midden van het bord spelen"
                },
                {
                    "en": "Placing stones on all four star points",
                    "es": "Colocar piedras en los cuatro puntos estrella",
                    "de": "Steine auf alle vier Sternpunkte setzen",
                    "nl": "Stenen plaatsen op alle vier sterpunten"
                },
                {
                    "en": "An opening where both players pass their first turn",
                    "es": "Una apertura donde ambos jugadores pasan su primer turno",
                    "de": "Eine Eröffnung, bei der beide Spieler den ersten Zug passen",
                    "nl": "Een opening waarbij beide spelers hun eerste beurt overslaan"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Komoku is the 3-4 point opening, one of the most popular in Go. It prioritizes territory in the corner while leaving options for development in multiple directions.",
                "es": "Komoku es la apertura del punto 3-4, una de las más populares en Go. Prioriza territorio en la esquina dejando opciones de desarrollo en múltiples direcciones.",
                "de": "Komoku ist die 3-4-Punkt-Eröffnung, eine der beliebtesten in Go. Sie priorisiert Eckgebiet und lässt Entwicklungsoptionen in mehrere Richtungen offen.",
                "nl": "Komoku is de 3-4 punt opening, een van de populairste in Go. Het geeft prioriteit aan hoekgebied en laat opties open voor ontwikkeling in meerdere richtingen."
            }
        },
        {
            "question": {
                "en": "What is a 'hoshi' opening in Go?",
                "es": "¿Qué es una apertura 'hoshi' en Go?",
                "de": "Was ist eine 'Hoshi'-Eröffnung in Go?",
                "nl": "Wat is een 'hoshi'-opening in Go?"
            },
            "options": [
                {
                    "en": "Placing the first stone on the 4-4 star point",
                    "es": "Colocar la primera piedra en el punto estrella 4-4",
                    "de": "Den ersten Stein auf den 4-4-Sternpunkt setzen",
                    "nl": "De eerste steen plaatsen op het 4-4 sterpunt"
                },
                {
                    "en": "Playing on all nine star points immediately",
                    "es": "Jugar en los nueve puntos estrella inmediatamente",
                    "de": "Sofort auf alle neun Sternpunkte spielen",
                    "nl": "Direct op alle negen sterpunten spelen"
                },
                {
                    "en": "A move that creates a star pattern of stones",
                    "es": "Un movimiento que crea un patrón de estrellas de piedras",
                    "de": "Ein Zug, der ein Sternmuster aus Steinen erzeugt",
                    "nl": "Een zet die een sterrenpatroon van stenen maakt"
                },
                {
                    "en": "An opening only used in Japanese tournaments",
                    "es": "Una apertura usada solo en torneos japoneses",
                    "de": "Eine Eröffnung nur für japanische Turniere",
                    "nl": "Een opening alleen gebruikt in Japanse toernooien"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A hoshi opening places the first stone on the 4-4 point (star point). It emphasizes influence and development over immediate corner territory, allowing flexible play.",
                "es": "Una apertura hoshi coloca la primera piedra en el punto 4-4 (punto estrella). Enfatiza la influencia sobre el territorio inmediato de esquina.",
                "de": "Eine Hoshi-Eröffnung setzt den ersten Stein auf den 4-4-Punkt (Sternpunkt). Sie betont Einfluss und Entwicklung gegenüber sofortigem Eckgebiet.",
                "nl": "Een hoshi-opening plaatst de eerste steen op het 4-4 punt (sterpunt). Het benadrukt invloed en ontwikkeling boven direct hoekgebied."
            }
        },
        {
            "question": {
                "en": "What is 'oba' in Go?",
                "es": "¿Qué es 'oba' en Go?",
                "de": "Was ist 'Oba' in Go?",
                "nl": "Wat is 'oba' in Go?"
            },
            "options": [
                {
                    "en": "A large open area on the board worth claiming",
                    "es": "Una gran área abierta en el tablero que vale la pena reclamar",
                    "de": "Ein großer offener Bereich auf dem Brett, der beansprucht werden sollte",
                    "nl": "Een groot open gebied op het bord dat het claimen waard is"
                },
                {
                    "en": "A type of Go stone from Brazil",
                    "es": "Un tipo de piedra de Go de Brasil",
                    "de": "Eine Art Go-Stein aus Brasilien",
                    "nl": "Een soort Go-steen uit Brazilië"
                },
                {
                    "en": "An illegal board position",
                    "es": "Una posición ilegal del tablero",
                    "de": "Eine illegale Brettposition",
                    "nl": "Een illegale bordpositie"
                },
                {
                    "en": "The Go association of Japan",
                    "es": "La asociación de Go de Japón",
                    "de": "Der Go-Verband Japans",
                    "nl": "De Go-associatie van Japan"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Oba refers to a large-scale open area on the board that is strategically important to claim. Playing in oba during the opening is critical for establishing a balanced position.",
                "es": "Oba se refiere a un área abierta a gran escala en el tablero que es estratégicamente importante reclamar, especialmente durante la apertura.",
                "de": "Oba bezeichnet einen großen offenen Bereich auf dem Brett, der strategisch wichtig zu beanspruchen ist, besonders in der Eröffnung.",
                "nl": "Oba verwijst naar een groot open gebied op het bord dat strategisch belangrijk is om te claimen, vooral tijdens de opening."
            }
        },
        {
            "question": {
                "en": "What is a 'shimari' (corner enclosure) in Go?",
                "es": "¿Qué es un 'shimari' (cierre de esquina) en Go?",
                "de": "Was ist ein 'Shimari' (Eckeinschließung) in Go?",
                "nl": "Wat is een 'shimari' (hoeksluiting) in Go?"
            },
            "options": [
                {
                    "en": "Two stones that enclose a corner to secure territory",
                    "es": "Dos piedras que cierran una esquina para asegurar territorio",
                    "de": "Zwei Steine, die eine Ecke umschließen, um Gebiet zu sichern",
                    "nl": "Twee stenen die een hoek omsluiten om gebied te beveiligen"
                },
                {
                    "en": "A stone placed in the very corner of the board",
                    "es": "Una piedra colocada en la esquina exacta del tablero",
                    "de": "Ein Stein genau in der Ecke des Brettes",
                    "nl": "Een steen geplaatst in de exacte hoek van het bord"
                },
                {
                    "en": "An illegal corner formation",
                    "es": "Una formación de esquina ilegal",
                    "de": "Eine illegale Eckformation",
                    "nl": "Een illegale hoekformatie"
                },
                {
                    "en": "A corner that has been completely filled with stones",
                    "es": "Una esquina que ha sido completamente llena de piedras",
                    "de": "Eine Ecke, die vollständig mit Steinen gefüllt ist",
                    "nl": "Een hoek die volledig gevuld is met stenen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A shimari is a two-stone formation that encloses a corner, making it difficult for the opponent to invade. It secures territory efficiently and is a fundamental opening concept.",
                "es": "Un shimari es una formación de dos piedras que cierra una esquina, dificultando la invasión del oponente. Asegura territorio eficientemente.",
                "de": "Ein Shimari ist eine Zwei-Stein-Formation, die eine Ecke umschließt und dem Gegner die Invasion erschwert. Es sichert effizient Gebiet.",
                "nl": "Een shimari is een formatie van twee stenen die een hoek omsluiten, waardoor invasie voor de tegenstander moeilijk wordt. Het beveiligt gebied efficiënt."
            }
        },
        {
            "question": {
                "en": "What is 'yosu miru' in Go?",
                "es": "¿Qué es 'yosu miru' en Go?",
                "de": "Was ist 'Yosu Miru' in Go?",
                "nl": "Wat is 'yosu miru' in Go?"
            },
            "options": [
                {
                    "en": "A probing move to see how the opponent responds",
                    "es": "Un movimiento de sondeo para ver cómo responde el oponente",
                    "de": "Ein Sondierungszug, um die Reaktion des Gegners zu sehen",
                    "nl": "Een peileendzet om te zien hoe de tegenstander reageert"
                },
                {
                    "en": "A greeting at the start of a Go match",
                    "es": "Un saludo al inicio de una partida de Go",
                    "de": "Eine Begrüßung zu Beginn eines Go-Spiels",
                    "nl": "Een begroeting aan het begin van een Go-wedstrijd"
                },
                {
                    "en": "The act of watching another game being played",
                    "es": "El acto de ver otro juego siendo jugado",
                    "de": "Das Beobachten eines anderen Spiels",
                    "nl": "Het bekijken van een ander spel dat gespeeld wordt"
                },
                {
                    "en": "A rule about time management in tournaments",
                    "es": "Una regla sobre gestión del tiempo en torneos",
                    "de": "Eine Regel über Zeitmanagement bei Turnieren",
                    "nl": "Een regel over tijdbeheer bij toernooien"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Yosu miru means 'wait and see' - playing a probing move to observe the opponent's response before committing to a plan. It is a sophisticated strategic technique in Go.",
                "es": "Yosu miru significa 'esperar y ver': jugar un movimiento de sondeo para observar la respuesta del oponente antes de comprometerse con un plan.",
                "de": "Yosu Miru bedeutet 'abwarten und sehen': ein Sondierungszug, um die Reaktion des Gegners zu beobachten, bevor man sich festlegt.",
                "nl": "Yosu miru betekent 'afwachten en zien': een peileendzet spelen om de reactie van de tegenstander te observeren voordat je je vastlegt op een plan."
            }
        },
        {
            "question": {
                "en": "What is a 'kakari' (approach move) in Go?",
                "es": "¿Qué es un 'kakari' (movimiento de aproximación) en Go?",
                "de": "Was ist ein 'Kakari' (Annäherungszug) bei Go?",
                "nl": "Wat is een 'kakari' (naderingszet) bij Go?"
            },
            "options": [
                {
                    "en": "A move that approaches an opponent's corner stone",
                    "es": "Un movimiento que se acerca a una piedra de esquina del oponente",
                    "de": "Ein Zug der sich einem gegnerischen Eckstein nähert",
                    "nl": "Een zet die een hoeksteen van de tegenstander benadert"
                },
                {
                    "en": "A martial arts technique",
                    "es": "Una técnica de artes marciales",
                    "de": "Eine Kampfkunsttechnik",
                    "nl": "Een vechtkunsttechniek"
                },
                {
                    "en": "The first move of the game",
                    "es": "El primer movimiento del juego",
                    "de": "Der erste Zug des Spiels",
                    "nl": "De eerste zet van het spel"
                },
                {
                    "en": "A move in the center of the board",
                    "es": "Un movimiento en el centro del tablero",
                    "de": "Ein Zug in der Mitte des Bretts",
                    "nl": "Een zet in het midden van het bord"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A kakari approaches an opponent's corner stone to prevent them from easily enclosing the corner, challenging their territorial claim.",
                "es": "Un kakari se acerca a una piedra de esquina del oponente para evitar que cierre la esquina fácilmente.",
                "de": "Ein Kakari nähert sich einem gegnerischen Eckstein um das einfache Einschließen der Ecke zu verhindern.",
                "nl": "Een kakari benadert een hoeksteen van de tegenstander om te voorkomen dat die de hoek makkelijk afsluit."
            }
        },
        {
            "question": {
                "en": "What is the 'Chinese opening' (fuseki) in Go?",
                "es": "¿Qué es la 'apertura china' (fuseki) en Go?",
                "de": "Was ist die 'Chinesische Eröffnung' (Fuseki) bei Go?",
                "nl": "Wat is de 'Chinese opening' (fuseki) bij Go?"
            },
            "options": [
                {
                    "en": "A popular opening that combines corner and side influence",
                    "es": "Una apertura popular que combina influencia de esquina y lado",
                    "de": "Eine beliebte Eröffnung die Ecken- und Seiteneinfluss kombiniert",
                    "nl": "Een populaire opening die hoek- en zijinvloed combineert"
                },
                {
                    "en": "An opening invented in China recently",
                    "es": "Una apertura inventada en China recientemente",
                    "de": "Eine kürzlich in China erfundene Eröffnung",
                    "nl": "Een recent in China uitgevonden opening"
                },
                {
                    "en": "Playing only on the fourth line",
                    "es": "Jugar solo en la cuarta línea",
                    "de": "Nur auf der vierten Linie spielen",
                    "nl": "Alleen op de vierde lijn spelen"
                },
                {
                    "en": "A greeting before the game in Chinese",
                    "es": "Un saludo antes del juego en chino",
                    "de": "Ein Gruß vor dem Spiel auf Chinesisch",
                    "nl": "Een begroeting voor het spel in het Chinees"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The Chinese opening typically places stones on the star point and a low approach stone, creating a framework that combines influence along the side.",
                "es": "La apertura china coloca piedras en el punto estrella y una piedra baja, creando un marco que combina influencia lateral.",
                "de": "Die Chinesische Eröffnung setzt Steine auf den Sternpunkt und einen niedrigen Stein und schafft einen Rahmen mit Seiteneinfluss.",
                "nl": "De Chinese opening plaatst stenen op het sterpunt en een lage steen, en creëert een raamwerk met zijinvloed."
            }
        },
        {
            "question": {
                "en": "What is the 'Mini-Chinese' opening in Go?",
                "es": "¿Qué es la apertura 'Mini-China' en Go?",
                "de": "Was ist die 'Mini-Chinesische' Eröffnung bei Go?",
                "nl": "Wat is de 'Mini-Chinese' opening bij Go?"
            },
            "options": [
                {
                    "en": "A compact version of the Chinese opening with closer stone spacing",
                    "es": "Una versión compacta de la apertura china con piedras más cercanas",
                    "de": "Eine kompakte Version der Chinesischen Eröffnung mit engerem Abstand",
                    "nl": "Een compacte versie van de Chinese opening met dichtere steenafstand"
                },
                {
                    "en": "A game played on a small board",
                    "es": "Un juego en un tablero pequeño",
                    "de": "Ein Spiel auf einem kleinen Brett",
                    "nl": "Een spel op een klein bord"
                },
                {
                    "en": "An opening for children",
                    "es": "Una apertura para niños",
                    "de": "Eine Eröffnung für Kinder",
                    "nl": "Een opening voor kinderen"
                },
                {
                    "en": "Playing with smaller stones",
                    "es": "Jugar con piedras más pequeñas",
                    "de": "Mit kleineren Steinen spielen",
                    "nl": "Spelen met kleinere stenen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The Mini-Chinese is a variation where the side stone is placed closer to the corner stone, creating a tighter but more territory-oriented framework.",
                "es": "La Mini-China coloca la piedra lateral más cerca de la esquina, creando un marco más ajustado y orientado al territorio.",
                "de": "Die Mini-Chinesische setzt den Seitenstein näher zum Eckstein und schafft einen engeren, gebietsorientierteren Rahmen.",
                "nl": "De Mini-Chinese plaatst de zijsteen dichter bij de hoeksteen, wat een strakker en meer gebiedsgericht raamwerk creëert."
            }
        },
        {
            "question": {
                "en": "What is the 'Orthodox' opening in Go?",
                "es": "¿Qué es la apertura 'Ortodoxa' en Go?",
                "de": "Was ist die 'Orthodoxe' Eröffnung bei Go?",
                "nl": "Wat is de 'Orthodoxe' opening bij Go?"
            },
            "options": [
                {
                    "en": "A classic opening focusing on balanced corner development",
                    "es": "Una apertura clásica enfocada en desarrollo equilibrado de esquinas",
                    "de": "Eine klassische Eröffnung mit ausgewogener Eckenentwicklung",
                    "nl": "Een klassieke opening gericht op evenwichtige hoek­ontwikkeling"
                },
                {
                    "en": "A religious approach to Go",
                    "es": "Un enfoque religioso del Go",
                    "de": "Ein religiöser Ansatz zum Go",
                    "nl": "Een religieuze benadering van Go"
                },
                {
                    "en": "The only correct way to start a game",
                    "es": "La única forma correcta de empezar",
                    "de": "Die einzig korrekte Art anzufangen",
                    "nl": "De enige correcte manier om te beginnen"
                },
                {
                    "en": "A game in a church",
                    "es": "Un juego en una iglesia",
                    "de": "Ein Spiel in einer Kirche",
                    "nl": "Een spel in een kerk"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The Orthodox opening is a traditional fuseki where both players develop corners and sides in a balanced way before engaging in fighting.",
                "es": "La apertura Ortodoxa es un fuseki tradicional donde ambos jugadores desarrollan esquinas y lados de forma equilibrada.",
                "de": "Die Orthodoxe Eröffnung ist ein traditionelles Fuseki wo beide Spieler Ecken und Seiten ausgewogen entwickeln.",
                "nl": "De Orthodoxe opening is een traditioneel fuseki waarbij beide spelers hoeken en zijkanten evenwichtig ontwikkelen."
            }
        },
        {
            "question": {
                "en": "What is 'san-ren-sei' in Go?",
                "es": "¿Qué es 'san-ren-sei' en Go?",
                "de": "Was ist 'San-ren-sei' bei Go?",
                "nl": "Wat is 'san-ren-sei' bij Go?"
            },
            "options": [
                {
                    "en": "An opening placing three star point stones along one side",
                    "es": "Una apertura colocando tres piedras de punto estrella en un lado",
                    "de": "Eine Eröffnung mit drei Sternpunktsteinen auf einer Seite",
                    "nl": "Een opening die drie sterpuntstenen langs één kant plaatst"
                },
                {
                    "en": "Three professional players",
                    "es": "Tres jugadores profesionales",
                    "de": "Drei professionelle Spieler",
                    "nl": "Drie professionele spelers"
                },
                {
                    "en": "A three-player game variant",
                    "es": "Una variante de juego de tres jugadores",
                    "de": "Eine Drei-Spieler-Variante",
                    "nl": "Een drie-speler-spelvariant"
                },
                {
                    "en": "Three consecutive captures",
                    "es": "Tres capturas consecutivas",
                    "de": "Drei aufeinanderfolgende Fangzüge",
                    "nl": "Drie opeenvolgende vangsten"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "San-ren-sei places three star point stones along one side, creating a massive influence-oriented framework that invites the opponent to invade.",
                "es": "San-ren-sei coloca tres piedras en puntos estrella de un lado, creando un marco masivo orientado a la influencia.",
                "de": "San-ren-sei setzt drei Sternpunktsteine auf eine Seite und schafft einen massiven einflussorientierten Rahmen.",
                "nl": "San-ren-sei plaatst drie sterpuntstenen langs één kant en creëert een massief invloedsgericht raamwerk."
            }
        },
        {
            "question": {
                "en": "What is the significance of 'thickness' versus 'territory' in Go strategy?",
                "es": "¿Cuál es la importancia de 'grosor' versus 'territorio' en la estrategia de Go?",
                "de": "Was ist die Bedeutung von 'Dicke' versus 'Gebiet' in der Go-Strategie?",
                "nl": "Wat is het belang van 'dikte' versus 'gebied' in Go-strategie?"
            },
            "options": [
                {
                    "en": "Thickness provides attacking power while territory gives points directly",
                    "es": "El grosor da poder de ataque mientras el territorio da puntos directamente",
                    "de": "Dicke gibt Angriffskraft während Gebiet direkt Punkte gibt",
                    "nl": "Dikte geeft aanvalskracht terwijl gebied direct punten geeft"
                },
                {
                    "en": "They are the same concept",
                    "es": "Son el mismo concepto",
                    "de": "Es ist dasselbe Konzept",
                    "nl": "Het is hetzelfde concept"
                },
                {
                    "en": "Territory is always better than thickness",
                    "es": "El territorio siempre es mejor que el grosor",
                    "de": "Gebiet ist immer besser als Dicke",
                    "nl": "Gebied is altijd beter dan dikte"
                },
                {
                    "en": "Thickness means having more stones",
                    "es": "Grosor significa tener más piedras",
                    "de": "Dicke bedeutet mehr Steine zu haben",
                    "nl": "Dikte betekent meer stenen hebben"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Thickness is strong stones projecting influence used for attacking, while territory is secured empty points. Balancing both is key to winning.",
                "es": "El grosor son piedras fuertes que proyectan influencia para atacar, el territorio son puntos vacíos asegurados. Equilibrar ambos es clave.",
                "de": "Dicke sind starke Steine die Einfluss zum Angriff ausstrahlen, Gebiet sind gesicherte leere Punkte. Die Balance ist entscheidend.",
                "nl": "Dikte zijn sterke stenen die invloed voor aanval uitstralen, gebied zijn verzekerde lege punten. Balans is de sleutel."
            }
        },
        {
            "question": {
                "en": "What is a 'two-space high pincer' in Go?",
                "es": "¿Qué es una 'pinza alta de dos espacios' en Go?",
                "de": "Was ist eine 'Zwei-Raum-Oberzange' bei Go?",
                "nl": "Wat is een 'twee-ruimte-hoge tang' bij Go?"
            },
            "options": [
                {
                    "en": "A pincer on the fourth line two spaces from the approach stone",
                    "es": "Una pinza en la cuarta línea a dos espacios de la piedra de aproximación",
                    "de": "Eine Zange auf der vierten Linie zwei Felder vom Annäherungsstein",
                    "nl": "Een tang op de vierde lijn twee plaatsen van de naderingssteen"
                },
                {
                    "en": "A tool for picking up stones",
                    "es": "Una herramienta para recoger piedras",
                    "de": "Ein Werkzeug zum Aufheben von Steinen",
                    "nl": "Een gereedschap om stenen op te pakken"
                },
                {
                    "en": "Raising your hand high",
                    "es": "Levantar la mano alto",
                    "de": "Die Hand hoch heben",
                    "nl": "Je hand hoog optillen"
                },
                {
                    "en": "Playing on the tenth line",
                    "es": "Jugar en la décima línea",
                    "de": "Auf der zehnten Linie spielen",
                    "nl": "Op de tiende lijn spelen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A two-space high pincer is played on the fourth line, two intersections from the approach stone, creating influence toward the center while attacking.",
                "es": "Una pinza alta de dos espacios se juega en la cuarta línea, creando influencia hacia el centro mientras ataca.",
                "de": "Eine Zwei-Raum-Oberzange wird auf der vierten Linie gespielt und schafft Einfluss zum Zentrum während sie angreift.",
                "nl": "Een twee-ruimte-hoge tang wordt op de vierde lijn gespeeld, creëert invloed naar het centrum terwijl die aanvalt."
            }
        },
        {
            "question": {
                "en": "Why is it generally bad to 'play close to thickness' in Go?",
                "es": "¿Por qué generalmente es malo 'jugar cerca del grosor' en Go?",
                "de": "Warum ist es generell schlecht 'nahe der Dicke zu spielen' bei Go?",
                "nl": "Waarom is het doorgaans slecht om 'dicht bij dikte te spelen' bij Go?"
            },
            "options": [
                {
                    "en": "Thickness already controls that area, so moves there are redundant",
                    "es": "El grosor ya controla esa área, así que los movimientos allí son redundantes",
                    "de": "Dicke kontrolliert das Gebiet bereits, Züge dort sind überflüssig",
                    "nl": "Dikte beheerst dat gebied al, dus zetten daar zijn overbodig"
                },
                {
                    "en": "Thick stones are fragile",
                    "es": "Las piedras gruesas son frágiles",
                    "de": "Dicke Steine sind zerbrechlich",
                    "nl": "Dikke stenen zijn breekbaar"
                },
                {
                    "en": "It causes the board to break",
                    "es": "Hace que el tablero se rompa",
                    "de": "Es bricht das Brett",
                    "nl": "Het bord breekt ervan"
                },
                {
                    "en": "Thickness blocks your view of the board",
                    "es": "El grosor bloquea tu vista del tablero",
                    "de": "Dicke versperrt die Sicht auf das Brett",
                    "nl": "Dikte blokkeert je zicht op het bord"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Playing near your own thickness wastes moves since that area is already strong. Instead, use thickness to attack from a distance.",
                "es": "Jugar cerca de tu grosor desperdicia movimientos ya que esa área ya es fuerte. Usa el grosor para atacar a distancia.",
                "de": "Nahe der eigenen Dicke zu spielen verschwendet Züge da das Gebiet bereits stark ist. Dicke wird zum Angriff aus der Ferne genutzt.",
                "nl": "Dicht bij eigen dikte spelen verspilt zetten omdat dat gebied al sterk is. Gebruik dikte om vanuit de verte aan te vallen."
            }
        },
        {
            "question": {
                "en": "What is the 'one-two-three principle' for extensions in Go?",
                "es": "¿Qué es el 'principio uno-dos-tres' para extensiones en Go?",
                "de": "Was ist das 'Eins-Zwei-Drei-Prinzip' für Erweiterungen bei Go?",
                "nl": "Wat is het 'één-twee-drie-principe' voor uitbreidingen bij Go?"
            },
            "options": [
                {
                    "en": "Extend N+1 spaces from an N-stone wall",
                    "es": "Extenderse N+1 espacios desde un muro de N piedras",
                    "de": "N+1 Felder von einer N-Steine-Mauer erweitern",
                    "nl": "N+1 ruimtes uitbreiden vanuit een N-stenen-muur"
                },
                {
                    "en": "Play one, two, then three stones in order",
                    "es": "Jugar una, dos, luego tres piedras en orden",
                    "de": "Eins, zwei, dann drei Steine der Reihe nach spielen",
                    "nl": "Eén, twee, dan drie stenen op volgorde spelen"
                },
                {
                    "en": "Count to three before each move",
                    "es": "Contar hasta tres antes de cada movimiento",
                    "de": "Vor jedem Zug bis drei zählen",
                    "nl": "Tot drie tellen voor elke zet"
                },
                {
                    "en": "Make three moves before passing",
                    "es": "Hacer tres movimientos antes de pasar",
                    "de": "Drei Züge machen bevor man passt",
                    "nl": "Drie zetten maken voor je past"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The principle says extend N+1 spaces from an N-stone wall: 2 from a 1-stone wall, 3 from a 2-stone wall, 4 from a 3-stone wall.",
                "es": "El principio dice extender N+1 desde un muro de N piedras: 2 desde 1, 3 desde 2, 4 desde 3.",
                "de": "Das Prinzip besagt N+1 Felder von einer N-Steine-Mauer zu erweitern: 2 von 1, 3 von 2, 4 von 3.",
                "nl": "Het principe zegt N+1 ruimtes uitbreiden vanuit een N-stenen-muur: 2 vanuit 1, 3 vanuit 2, 4 vanuit 3."
            }
        },
        {
            "question": {
                "en": "What is a 'monkey jump' used for in the endgame of Go?",
                "es": "¿Para qué se usa el 'salto de mono' en el final de Go?",
                "de": "Wofür wird der 'Affensprung' im Go-Endspiel verwendet?",
                "nl": "Waarvoor wordt de 'apensprong' in het Go-eindspel gebruikt?"
            },
            "options": [
                {
                    "en": "To slide under the opponent's position and steal territory on the edge",
                    "es": "Para deslizarse bajo la posición del oponente y robar territorio en el borde",
                    "de": "Um unter die Position des Gegners zu gleiten und Randgebiet zu stehlen",
                    "nl": "Om onder de positie van de tegenstander te glijden en randgebied te stelen"
                },
                {
                    "en": "To jump over the opponent's stones",
                    "es": "Para saltar sobre las piedras del oponente",
                    "de": "Um über gegnerische Steine zu springen",
                    "nl": "Om over vijandelijke stenen te springen"
                },
                {
                    "en": "A trick played by beginners",
                    "es": "Un truco jugado por principiantes",
                    "de": "Ein Trick von Anfängern",
                    "nl": "Een truc gespeeld door beginners"
                },
                {
                    "en": "To create confusion on the board",
                    "es": "Para crear confusión en el tablero",
                    "de": "Um Verwirrung auf dem Brett zu schaffen",
                    "nl": "Om verwarring op het bord te creëren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The monkey jump slides along the first line under enemy stones in the endgame, typically worth several points in border reduction.",
                "es": "El salto de mono se desliza por la primera línea bajo piedras enemigas en el final, típicamente valiendo varios puntos.",
                "de": "Der Affensprung gleitet im Endspiel auf der ersten Linie unter feindliche Steine und ist typisch mehrere Punkte wert.",
                "nl": "De apensprong glijdt in het eindspel langs de eerste lijn onder vijandelijke stenen en is typisch meerdere punten waard."
            }
        },
        {
            "question": {
                "en": "What is a 'double sente' move in Go endgame?",
                "es": "¿Qué es un movimiento 'doble sente' en el final de Go?",
                "de": "Was ist ein 'Doppel-Sente'-Zug im Go-Endspiel?",
                "nl": "Wat is een 'dubbel sente'-zet in het Go-eindspel?"
            },
            "options": [
                {
                    "en": "A move that is sente for both players, making it extremely urgent",
                    "es": "Un movimiento que es sente para ambos, haciéndolo extremadamente urgente",
                    "de": "Ein Zug der für beide Spieler Sente ist und extrem dringend macht",
                    "nl": "Een zet die sente is voor beide spelers, waardoor het extreem urgent is"
                },
                {
                    "en": "Playing two moves in a row",
                    "es": "Jugar dos movimientos seguidos",
                    "de": "Zwei Züge hintereinander spielen",
                    "nl": "Twee zetten achter elkaar spelen"
                },
                {
                    "en": "A move worth double points",
                    "es": "Un movimiento que vale doble puntos",
                    "de": "Ein Zug der doppelte Punkte wert ist",
                    "nl": "Een zet die dubbele punten waard is"
                },
                {
                    "en": "Two players moving simultaneously",
                    "es": "Dos jugadores moviéndose simultáneamente",
                    "de": "Zwei Spieler die gleichzeitig ziehen",
                    "nl": "Twee spelers die tegelijk zetten"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A double sente move is sente for both sides. Whoever plays it first gains the initiative, making it the highest priority endgame move.",
                "es": "Un doble sente es sente para ambos lados. Quien lo juegue primero gana la iniciativa, haciéndolo la máxima prioridad.",
                "de": "Ein Doppel-Sente ist Sente für beide Seiten. Wer ihn zuerst spielt gewinnt die Initiative, höchste Priorität im Endspiel.",
                "nl": "Een dubbel sente is sente voor beide kanten. Wie het eerst speelt wint het initiatief, de hoogste prioriteit in het eindspel."
            }
        },
        {
            "question": {
                "en": "What is 'gote sente' in Go endgame evaluation?",
                "es": "¿Qué es 'gote sente' en la evaluación del final de Go?",
                "de": "Was ist 'Gote Sente' in der Go-Endspielbewertung?",
                "nl": "Wat is 'gote sente' in de Go-eindspelevalu­atie?"
            },
            "options": [
                {
                    "en": "A move that is gote for one player but sente for the other",
                    "es": "Un movimiento gote para un jugador pero sente para el otro",
                    "de": "Ein Zug der für einen Spieler Gote aber für den anderen Sente ist",
                    "nl": "Een zet die gote is voor één speler maar sente voor de ander"
                },
                {
                    "en": "Losing the game",
                    "es": "Perder el juego",
                    "de": "Das Spiel verlieren",
                    "nl": "Het spel verliezen"
                },
                {
                    "en": "The final move",
                    "es": "El movimiento final",
                    "de": "Der letzte Zug",
                    "nl": "De laatste zet"
                },
                {
                    "en": "A tie in the game",
                    "es": "Un empate en el juego",
                    "de": "Ein Unentschieden",
                    "nl": "Een gelijkspel"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Gote sente means the move is gote if you play it but sente if your opponent plays it. This affects its priority in endgame sequencing.",
                "es": "Gote sente significa que el movimiento es gote si lo juegas pero sente si tu oponente lo juega, afectando su prioridad.",
                "de": "Gote Sente bedeutet der Zug ist Gote wenn man ihn spielt aber Sente wenn der Gegner ihn spielt, was die Priorität beeinflusst.",
                "nl": "Gote sente betekent dat de zet gote is als jij speelt maar sente als je tegenstander speelt, wat de prioriteit beïnvloedt."
            }
        },
        {
            "question": {
                "en": "What is the 'Kobayashi opening' in Go?",
                "es": "¿Qué es la 'apertura Kobayashi' en Go?",
                "de": "Was ist die 'Kobayashi-Eröffnung' bei Go?",
                "nl": "Wat is de 'Kobayashi-opening' bij Go?"
            },
            "options": [
                {
                    "en": "A low Chinese-style opening focused on territorial play",
                    "es": "Una apertura estilo chino bajo enfocada en juego territorial",
                    "de": "Eine niedrige chinesische Eröffnung mit Gebietsfokus",
                    "nl": "Een lage Chinese opening gericht op territoriaal spel"
                },
                {
                    "en": "An opening created by a robot",
                    "es": "Una apertura creada por un robot",
                    "de": "Eine von einem Roboter erfundene Eröffnung",
                    "nl": "Een door een robot gecreëerde opening"
                },
                {
                    "en": "The fastest possible opening",
                    "es": "La apertura más rápida posible",
                    "de": "Die schnellstmögliche Eröffnung",
                    "nl": "De snelst mogelijke opening"
                },
                {
                    "en": "A defensive opening only",
                    "es": "Una apertura solo defensiva",
                    "de": "Eine nur defensive Eröffnung",
                    "nl": "Een alleen defensieve opening"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The Kobayashi opening uses a low enclosure combined with a side extension, creating a territory-focused framework popularized by Kobayashi Koichi.",
                "es": "La apertura Kobayashi usa un cierre bajo con una extensión lateral, creando un marco territorial popularizado por Kobayashi Koichi.",
                "de": "Die Kobayashi-Eröffnung nutzt einen niedrigen Abschluss mit Seitenerweiterung, popularisiert von Kobayashi Koichi.",
                "nl": "De Kobayashi-opening gebruikt een lage omheining met een zijuitbreiding, gepopulariseerd door Kobayashi Koichi."
            }
        },
        {
            "question": {
                "en": "What is a 'living shape' in Go?",
                "es": "¿Qué es una 'forma viva' en Go?",
                "de": "Was ist eine 'lebende Form' bei Go?",
                "nl": "Wat is een 'levende vorm' bij Go?"
            },
            "options": [
                {
                    "en": "A group that has secured two separate eyes and cannot be captured",
                    "es": "Un grupo que ha asegurado dos ojos separados y no puede ser capturado",
                    "de": "Eine Gruppe mit zwei gesicherten Augen die nicht gefangen werden kann",
                    "nl": "Een groep die twee ogen heeft verzekerd en niet gevangen kan worden"
                },
                {
                    "en": "A stone that moves",
                    "es": "Una piedra que se mueve",
                    "de": "Ein Stein der sich bewegt",
                    "nl": "Een steen die beweegt"
                },
                {
                    "en": "An animated Go game",
                    "es": "Un juego de Go animado",
                    "de": "Ein animiertes Go-Spiel",
                    "nl": "Een geanimeerd Go-spel"
                },
                {
                    "en": "A living organism shaped like stones",
                    "es": "Un organismo vivo con forma de piedras",
                    "de": "Ein Lebewesen in Steinform",
                    "nl": "Een levend organisme in steenvorm"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A living shape has two true eyes, making it permanently safe from capture. Recognizing living shapes is essential for determining group status.",
                "es": "Una forma viva tiene dos ojos verdaderos, haciéndola permanentemente segura. Reconocer formas vivas es esencial.",
                "de": "Eine lebende Form hat zwei echte Augen und ist dauerhaft sicher. Lebende Formen zu erkennen ist essenziell.",
                "nl": "Een levende vorm heeft twee echte ogen en is permanent veilig. Levende vormen herkennen is essentieel."
            }
        },
        {
            "question": {
                "en": "What is 'overconcentration' in Go and why should it be avoided?",
                "es": "¿Qué es la 'sobreconcentración' en Go y por qué debe evitarse?",
                "de": "Was ist 'Überkonzentration' bei Go und warum sollte sie vermieden werden?",
                "nl": "Wat is 'overconcentratie' bij Go en waarom moet het vermeden worden?"
            },
            "options": [
                {
                    "en": "Too many stones in one area, resulting in inefficient territory gains",
                    "es": "Demasiadas piedras en un área, resultando en ganancias territoriales ineficientes",
                    "de": "Zu viele Steine in einem Bereich, was zu ineffizientem Gebietsgewinn führt",
                    "nl": "Te veel stenen in één gebied, wat leidt tot inefficiënte gebiedswinst"
                },
                {
                    "en": "Focusing too hard on the game",
                    "es": "Concentrarse demasiado en el juego",
                    "de": "Sich zu sehr auf das Spiel konzentrieren",
                    "nl": "Te hard op het spel concentreren"
                },
                {
                    "en": "Having too many games going at once",
                    "es": "Tener demasiados juegos a la vez",
                    "de": "Zu viele Spiele gleichzeitig haben",
                    "nl": "Te veel spellen tegelijk hebben"
                },
                {
                    "en": "Placing all stones in one corner",
                    "es": "Colocar todas las piedras en una esquina",
                    "de": "Alle Steine in eine Ecke setzen",
                    "nl": "Alle stenen in één hoek plaatsen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Overconcentration means your stones are too close together. While safe, they control less territory per stone than spread-out formations.",
                "es": "La sobreconcentración significa que tus piedras están muy juntas. Aunque seguras, controlan menos territorio por piedra.",
                "de": "Überkonzentration bedeutet Steine sind zu nah beieinander. Obwohl sicher, kontrollieren sie weniger Gebiet pro Stein.",
                "nl": "Overconcentratie betekent dat je stenen te dicht bij elkaar staan. Hoewel veilig, beheersen ze minder gebied per steen."
            }
        },
        {
            "question": {
                "en": "What is a 'shoulder hit' typically used for in Go strategy?",
                "es": "¿Para qué se usa típicamente un 'golpe de hombro' en la estrategia de Go?",
                "de": "Wofür wird ein 'Schulterschlag' typisch in der Go-Strategie verwendet?",
                "nl": "Waarvoor wordt een 'schouderslag' typisch gebruikt in Go-strategie?"
            },
            "options": [
                {
                    "en": "To reduce the opponent's potential territory without deep invasion",
                    "es": "Para reducir el territorio potencial del oponente sin invasión profunda",
                    "de": "Um das potenzielle Gebiet des Gegners ohne tiefe Invasion zu reduzieren",
                    "nl": "Om het potentiële gebied van de tegenstander te verminderen zonder diepe invasie"
                },
                {
                    "en": "To attack a weak group",
                    "es": "Para atacar un grupo débil",
                    "de": "Um eine schwache Gruppe anzugreifen",
                    "nl": "Om een zwakke groep aan te vallen"
                },
                {
                    "en": "To connect two groups",
                    "es": "Para conectar dos grupos",
                    "de": "Um zwei Gruppen zu verbinden",
                    "nl": "Om twee groepen te verbinden"
                },
                {
                    "en": "To start a ko fight",
                    "es": "Para iniciar una pelea de ko",
                    "de": "Um einen Ko-Kampf zu starten",
                    "nl": "Om een ko-gevecht te starten"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A shoulder hit reduces the opponent's framework from the outside by playing diagonally above their stone, without risking a deep invasion.",
                "es": "Un golpe de hombro reduce el marco del oponente desde afuera jugando diagonalmente sobre su piedra, sin arriesgar una invasión.",
                "de": "Ein Schulterschlag reduziert das Rahmenwerk des Gegners von außen durch diagonales Spiel über dessen Stein.",
                "nl": "Een schouderslag vermindert het raamwerk van de tegenstander van buitenaf door diagonaal boven diens steen te spelen."
            }
        },
        {
            "question": {
                "en": "What is 'suji' in Go?",
                "es": "¿Qué es 'suji' en Go?",
                "de": "Was ist 'Suji' bei Go?",
                "nl": "Wat is 'suji' bij Go?"
            },
            "options": [
                {
                    "en": "Lines of play or tactical patterns that are considered correct technique",
                    "es": "Líneas de juego o patrones tácticos considerados técnica correcta",
                    "de": "Spiellinien oder taktische Muster die als korrekte Technik gelten",
                    "nl": "Spellijnen of tactische patronen die als correcte techniek gelden"
                },
                {
                    "en": "A type of sushi",
                    "es": "Un tipo de sushi",
                    "de": "Eine Art Sushi",
                    "nl": "Een soort sushi"
                },
                {
                    "en": "Mathematical calculations",
                    "es": "Cálculos matemáticos",
                    "de": "Mathematische Berechnungen",
                    "nl": "Wiskundige berekeningen"
                },
                {
                    "en": "A grid pattern",
                    "es": "Un patrón de cuadrícula",
                    "de": "Ein Gittermuster",
                    "nl": "Een rasterpatroon"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Suji are correct tactical sequences or patterns. Having good suji means instinctively finding the right moves in tactical situations.",
                "es": "Suji son secuencias tácticas correctas. Tener buen suji significa encontrar instintivamente los movimientos correctos.",
                "de": "Suji sind korrekte taktische Sequenzen. Gutes Suji bedeutet instinktiv die richtigen Züge in taktischen Situationen zu finden.",
                "nl": "Suji zijn correcte tactische reeksen. Goed suji betekent instinctief de juiste zetten vinden in tactische situaties."
            }
        },
        {
            "question": {
                "en": "What is the strategic concept of 'sealing in' an opponent's group?",
                "es": "¿Cuál es el concepto estratégico de 'encerrar' un grupo del oponente?",
                "de": "Was ist das strategische Konzept des 'Einsperrens' einer gegnerischen Gruppe?",
                "nl": "Wat is het strategische concept van het 'opsluiten' van een groep van de tegenstander?"
            },
            "options": [
                {
                    "en": "Blocking the opponent's group from expanding while building outside walls",
                    "es": "Bloquear la expansión del grupo del oponente mientras construyes muros exteriores",
                    "de": "Die Expansion der gegnerischen Gruppe blockieren und Außenmauern bauen",
                    "nl": "De uitbreiding van de groep van de tegenstander blokkeren terwijl je buitenmuren bouwt"
                },
                {
                    "en": "Putting a seal on the board",
                    "es": "Poner un sello en el tablero",
                    "de": "Ein Siegel auf das Brett setzen",
                    "nl": "Een zegel op het bord zetten"
                },
                {
                    "en": "Closing the stone bowls",
                    "es": "Cerrar los cuencos de piedras",
                    "de": "Die Steinschalen schließen",
                    "nl": "De stenenkom­men sluiten"
                },
                {
                    "en": "Ending the game early",
                    "es": "Terminar el juego temprano",
                    "de": "Das Spiel vorzeitig beenden",
                    "nl": "Het spel vroegtijdig beëindigen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Sealing in confines an opponent's group to a small area while you build strong walls outside, gaining thickness and influence for attacking elsewhere.",
                "es": "Encerrar confina un grupo del oponente a un área pequeña mientras construyes muros fuertes afuera, ganando influencia.",
                "de": "Einsperren begrenzt die gegnerische Gruppe auf ein kleines Gebiet während man außen starke Mauern baut und Einfluss gewinnt.",
                "nl": "Opsluiten beperkt de vijandelijke groep tot een klein gebied terwijl je sterke buitenmuren bouwt en invloed wint."
            }
        },
        {
            "question": {
                "en": "What is the concept of 'atsui' (thick) versus 'usui' (thin) in Go?",
                "es": "¿Cuál es el concepto de 'atsui' (grueso) versus 'usui' (delgado) en Go?",
                "de": "Was ist das Konzept von 'Atsui' (dick) versus 'Usui' (dünn) bei Go?",
                "nl": "Wat is het concept van 'atsui' (dik) versus 'usui' (dun) bij Go?"
            },
            "options": [
                {
                    "en": "Thick play is safe and strong; thin play is risky but flexible",
                    "es": "El juego grueso es seguro y fuerte; el delgado es arriesgado pero flexible",
                    "de": "Dickes Spiel ist sicher und stark; dünnes Spiel ist riskant aber flexibel",
                    "nl": "Dik spel is veilig en sterk; dun spel is riskant maar flexibel"
                },
                {
                    "en": "The physical dimensions of the board",
                    "es": "Las dimensiones físicas del tablero",
                    "de": "Die physischen Maße des Bretts",
                    "nl": "De fysieke afmetingen van het bord"
                },
                {
                    "en": "Types of stone materials",
                    "es": "Tipos de materiales de piedras",
                    "de": "Arten von Steinmaterialien",
                    "nl": "Soorten steenmateriaal"
                },
                {
                    "en": "The thickness of the game rules book",
                    "es": "El grosor del libro de reglas",
                    "de": "Die Dicke des Regelbuchs",
                    "nl": "De dikte van het regelboek"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Thick (atsui) play builds strong, solid positions with no weaknesses. Thin (usui) play spreads out for efficiency but creates cuttable points.",
                "es": "El juego grueso construye posiciones sólidas sin debilidades. El delgado se extiende para eficiencia pero crea puntos cortables.",
                "de": "Dickes Spiel baut starke, solide Positionen. Dünnes Spiel verteilt sich effizient, schafft aber Schnittpunkte.",
                "nl": "Dik spel bouwt sterke, solide posities. Dun spel verspreidt zich efficiënt maar creëert snijpunten."
            }
        },
        {
            "question": {
                "en": "What is a 'kikashi' in Go?",
                "es": "¿Qué es un 'kikashi' en Go?",
                "de": "Was ist ein 'Kikashi' bei Go?",
                "nl": "Wat is een 'kikashi' bij Go?"
            },
            "options": [
                {
                    "en": "A forcing move that gains advantage before playing elsewhere",
                    "es": "Un movimiento forzado que gana ventaja antes de jugar en otro lado",
                    "de": "Ein Zwangszug der Vorteil gewinnt bevor man woanders spielt",
                    "nl": "Een gedwongen zet die voordeel wint voor je elders speelt"
                },
                {
                    "en": "A Japanese kick technique",
                    "es": "Una técnica de patada japonesa",
                    "de": "Eine japanische Tritttechnik",
                    "nl": "Een Japanse schoptechniek"
                },
                {
                    "en": "A listening device",
                    "es": "Un dispositivo de escucha",
                    "de": "Ein Abhörgerät",
                    "nl": "Een luisterapparaat"
                },
                {
                    "en": "A penalty move",
                    "es": "Un movimiento de penalización",
                    "de": "Ein Strafzug",
                    "nl": "Een strafzet"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A kikashi is a forcing move played to gain a small advantage, where the opponent's response strengthens your position before you play elsewhere.",
                "es": "Un kikashi es un movimiento forzado que gana una pequeña ventaja, donde la respuesta del oponente fortalece tu posición.",
                "de": "Ein Kikashi ist ein Zwangszug der einen kleinen Vorteil bringt, wobei die Antwort des Gegners die eigene Position stärkt.",
                "nl": "Een kikashi is een gedwongen zet die een klein voordeel oplevert, waarbij de reactie van de tegenstander je positie versterkt."
            }
        },
        {
            "question": {
                "en": "What is a 'net' versus a 'ladder' in Go tactics?",
                "es": "¿Cuál es la diferencia entre una 'red' y una 'escalera' en tácticas de Go?",
                "de": "Was ist der Unterschied zwischen 'Netz' und 'Leiter' in Go-Taktik?",
                "nl": "Wat is het verschil tussen een 'net' en een 'ladder' in Go-tactiek?"
            },
            "options": [
                {
                    "en": "A net captures loosely while a ladder chases in a zigzag line",
                    "es": "Una red captura holgadamente mientras una escalera persigue en zigzag",
                    "de": "Ein Netz fängt lose während eine Leiter im Zickzack verfolgt",
                    "nl": "Een net vangt los terwijl een ladder in een zigzaglijn achtervolgt"
                },
                {
                    "en": "They are the same technique",
                    "es": "Son la misma técnica",
                    "de": "Es ist dieselbe Technik",
                    "nl": "Het is dezelfde techniek"
                },
                {
                    "en": "A net is for catching fish",
                    "es": "Una red es para pescar",
                    "de": "Ein Netz ist zum Fischen",
                    "nl": "Een net is om te vissen"
                },
                {
                    "en": "A ladder is taller than a net",
                    "es": "Una escalera es más alta que una red",
                    "de": "Eine Leiter ist höher als ein Netz",
                    "nl": "Een ladder is hoger dan een net"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A net surrounds stones loosely making escape impossible, while a ladder chases stones in a diagonal zigzag. Nets work even with ladder breakers.",
                "es": "Una red rodea piedras holgadamente haciendo imposible la fuga, mientras una escalera persigue en zigzag diagonal.",
                "de": "Ein Netz umgibt Steine lose und macht Flucht unmöglich, eine Leiter jagt diagonal im Zickzack. Netze funktionieren auch mit Leiterbrechern.",
                "nl": "Een net omringt stenen los en maakt ontsnapping onmogelijk, een ladder jaagt diagonaal in zigzag. Netten werken ook met ladderbrekers."
            }
        },
        {
            "question": {
                "en": "What is 'positional judgment' in Go?",
                "es": "¿Qué es el 'juicio posicional' en Go?",
                "de": "Was ist 'Positionsbeurteilung' bei Go?",
                "nl": "Wat is 'positioneel oordeel' bij Go?"
            },
            "options": [
                {
                    "en": "The ability to evaluate who is leading and by how much during a game",
                    "es": "La capacidad de evaluar quién lidera y por cuánto durante un juego",
                    "de": "Die Fähigkeit zu bewerten wer während eines Spiels führt und um wie viel",
                    "nl": "Het vermogen om te beoordelen wie leidt en met hoeveel tijdens een spel"
                },
                {
                    "en": "Judging if the board is positioned correctly",
                    "es": "Juzgar si el tablero está posicionado correctamente",
                    "de": "Beurteilen ob das Brett richtig positioniert ist",
                    "nl": "Beoordelen of het bord correct geplaatst is"
                },
                {
                    "en": "A referee's decision",
                    "es": "Una decisión del árbitro",
                    "de": "Eine Entscheidung des Schiedsrichters",
                    "nl": "Een beslissing van de scheidsrechter"
                },
                {
                    "en": "Measuring stone positions with a ruler",
                    "es": "Medir posiciones de piedras con una regla",
                    "de": "Steinpositionen mit einem Lineal messen",
                    "nl": "Steenposities meten met een liniaal"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Positional judgment involves estimating territory, influence, and weaknesses to determine who is ahead and plan appropriate strategy.",
                "es": "El juicio posicional implica estimar territorio, influencia y debilidades para determinar quién va adelante y planificar estrategia.",
                "de": "Positionsbeurteilung umfasst das Schätzen von Gebiet, Einfluss und Schwächen um zu bestimmen wer führt und die Strategie zu planen.",
                "nl": "Positioneel oordeel omvat het inschatten van gebied, invloed en zwaktes om te bepalen wie voorligt en strategie te plannen."
            }
        },
        {
            "question": {
                "en": "What is 'sacrifice' strategy used for in Go?",
                "es": "¿Para qué se usa la estrategia de 'sacrificio' en Go?",
                "de": "Wofür wird die 'Opfer'-Strategie bei Go verwendet?",
                "nl": "Waarvoor wordt de 'offer'-strategie gebruikt bij Go?"
            },
            "options": [
                {
                    "en": "Giving up stones to gain a bigger strategic advantage elsewhere",
                    "es": "Renunciar a piedras para ganar mayor ventaja estratégica en otro lugar",
                    "de": "Steine aufgeben um anderswo einen größeren strategischen Vorteil zu gewinnen",
                    "nl": "Stenen opgeven om elders een groter strategisch voordeel te behalen"
                },
                {
                    "en": "Destroying your own territory",
                    "es": "Destruir tu propio territorio",
                    "de": "Das eigene Gebiet zerstören",
                    "nl": "Je eigen gebied vernietigen"
                },
                {
                    "en": "Surrendering the game",
                    "es": "Rendirse en el juego",
                    "de": "Das Spiel aufgeben",
                    "nl": "Het spel opgeven"
                },
                {
                    "en": "Giving stones to the opponent as a gift",
                    "es": "Dar piedras al oponente como regalo",
                    "de": "Dem Gegner Steine schenken",
                    "nl": "Stenen als cadeau aan de tegenstander geven"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Sacrifice involves deliberately letting some stones be captured to gain thickness, territory, or tactical advantage that outweighs the loss.",
                "es": "El sacrificio implica dejar que algunas piedras sean capturadas para ganar grosor, territorio o ventaja táctica mayor.",
                "de": "Opfer bedeutet absichtlich Steine fangen zu lassen um Dicke, Gebiet oder taktischen Vorteil zu gewinnen der den Verlust überwiegt.",
                "nl": "Opofferen betekent bewust stenen laten vangen om dikte, gebied of tactisch voordeel te winnen dat groter is dan het verlies."
            }
        },
        {
            "question": {
                "en": "What is the concept of 'balance of territory' in Go?",
                "es": "¿Qué es el concepto de 'equilibrio de territorio' en Go?",
                "de": "Was ist das Konzept des 'Gebietsgleichgewichts' bei Go?",
                "nl": "Wat is het concept van 'gebiedsbalans' bij Go?"
            },
            "options": [
                {
                    "en": "Distributing stones across the board rather than concentrating in one area",
                    "es": "Distribuir piedras por el tablero en vez de concentrarse en un área",
                    "de": "Steine über das Brett verteilen statt in einem Bereich zu konzentrieren",
                    "nl": "Stenen over het bord verdelen in plaats van in één gebied te concentreren"
                },
                {
                    "en": "Both players having equal territory",
                    "es": "Ambos jugadores teniendo territorio igual",
                    "de": "Beide Spieler haben gleiches Gebiet",
                    "nl": "Beide spelers hebben gelijk gebied"
                },
                {
                    "en": "Balancing stones on the board edge",
                    "es": "Equilibrar piedras en el borde del tablero",
                    "de": "Steine auf dem Brettrand balancieren",
                    "nl": "Stenen balanceren op de rand van het bord"
                },
                {
                    "en": "A perfectly symmetrical position",
                    "es": "Una posición perfectamente simétrica",
                    "de": "Eine perfekt symmetrische Position",
                    "nl": "Een perfect symmetrische positie"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Balance of territory means spreading your development across the board to avoid overconcentration and maximize overall territorial potential.",
                "es": "El equilibrio de territorio significa distribuir tu desarrollo por el tablero para evitar sobreconcentración y maximizar potencial.",
                "de": "Gebietsgleichgewicht bedeutet die Entwicklung über das Brett zu verteilen um Überkonzentration zu vermeiden.",
                "nl": "Gebiedsbalans betekent je ontwikkeling over het bord verspreiden om overconcentratie te vermijden."
            }
        },
        {
            "question": {
                "en": "What is a 'leaning attack' used for in Go?",
                "es": "¿Para qué se usa un 'ataque inclinado' en Go?",
                "de": "Wofür wird ein 'Lehnungsangriff' bei Go verwendet?",
                "nl": "Waarvoor wordt een 'leunaanval' gebruikt bij Go?"
            },
            "options": [
                {
                    "en": "Attacking one group to build strength for attacking a different target",
                    "es": "Atacar un grupo para construir fuerza para atacar un objetivo diferente",
                    "de": "Eine Gruppe angreifen um Stärke zum Angriff auf ein anderes Ziel aufzubauen",
                    "nl": "Een groep aanvallen om kracht op te bouwen voor het aanvallen van een ander doel"
                },
                {
                    "en": "Leaning on the board while playing",
                    "es": "Apoyarse en el tablero mientras juegas",
                    "de": "Sich beim Spielen auf das Brett lehnen",
                    "nl": "Op het bord leunen tijdens het spelen"
                },
                {
                    "en": "Tilting the board",
                    "es": "Inclinar el tablero",
                    "de": "Das Brett neigen",
                    "nl": "Het bord kantelen"
                },
                {
                    "en": "A move that leans to one side",
                    "es": "Un movimiento que se inclina a un lado",
                    "de": "Ein Zug der sich zu einer Seite neigt",
                    "nl": "Een zet die naar één kant leunt"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A leaning attack pressures one group to build thickness that can then be used to attack a different, more important target group.",
                "es": "Un ataque inclinado presiona un grupo para construir grosor que luego se usa para atacar un objetivo más importante.",
                "de": "Ein Lehnungsangriff setzt eine Gruppe unter Druck um Dicke aufzubauen die dann gegen ein wichtigeres Ziel eingesetzt wird.",
                "nl": "Een leunaanval zet druk op een groep om dikte op te bouwen die dan gebruikt wordt om een belangrijker doel aan te vallen."
            }
        },
        {
            "question": {
                "en": "What is the 'small knight's move enclosure' (kogeima shimari) in Go?",
                "es": "¿Qué es el 'cierre de movimiento de caballo pequeño' en Go?",
                "de": "Was ist der 'kleine Springerabschluss' (Kogeima Shimari) bei Go?",
                "nl": "Wat is de 'kleine paardsprong-omheining' (kogeima shimari) bij Go?"
            },
            "options": [
                {
                    "en": "A corner enclosure using a knight's move diagonal from the corner stone",
                    "es": "Un cierre de esquina usando un movimiento diagonal de caballo desde la piedra de esquina",
                    "de": "Ein Eckabschluss mit einem Springerzug diagonal vom Eckstein",
                    "nl": "Een hoek­omheining met een paard­sprong diagonaal vanuit de hoeksteen"
                },
                {
                    "en": "A small chess knight piece",
                    "es": "Una pieza pequeña de caballo de ajedrez",
                    "de": "Ein kleines Schachspringerstück",
                    "nl": "Een klein schaakpaardstuk"
                },
                {
                    "en": "A miniature Go board",
                    "es": "Un tablero de Go en miniatura",
                    "de": "Ein Miniatur-Go-Brett",
                    "nl": "Een miniatuur Go-bord"
                },
                {
                    "en": "A weak corner formation",
                    "es": "Una formación de esquina débil",
                    "de": "Eine schwache Eckformation",
                    "nl": "Een zwakke hoekformatie"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The kogeima shimari uses a knight's move to enclose the corner, providing a solid claim on corner territory while maintaining some flexibility.",
                "es": "El kogeima shimari usa un movimiento de caballo para cerrar la esquina, con sólida reclamación territorial y flexibilidad.",
                "de": "Der Kogeima Shimari nutzt einen Springerzug zum Eckabschluss und bietet soliden Gebietsanspruch mit Flexibilität.",
                "nl": "De kogeima shimari gebruikt een paardsprong om de hoek af te sluiten, met solide gebiedsclaim en flexibiliteit."
            }
        },
        {
            "question": {
                "en": "What is the concept of 'strategic initiative' versus 'tactical initiative' in Go?",
                "es": "¿Cuál es el concepto de 'iniciativa estratégica' versus 'iniciativa táctica' en Go?",
                "de": "Was ist 'strategische Initiative' versus 'taktische Initiative' bei Go?",
                "nl": "Wat is 'strategisch initiatief' versus 'tactisch initiatief' bij Go?"
            },
            "options": [
                {
                    "en": "Strategic controls overall board flow; tactical controls local sequences",
                    "es": "Estratégica controla el flujo general; táctica controla secuencias locales",
                    "de": "Strategische kontrolliert den gesamten Spielfluss; taktische lokale Sequenzen",
                    "nl": "Strategisch beheerst de algehele bordstroom; tactisch beheerst lokale reeksen"
                },
                {
                    "en": "They are identical concepts",
                    "es": "Son conceptos idénticos",
                    "de": "Es sind identische Konzepte",
                    "nl": "Het zijn identieke concepten"
                },
                {
                    "en": "Strategic is for beginners; tactical is for pros",
                    "es": "Estratégica es para principiantes; táctica para profesionales",
                    "de": "Strategisch ist für Anfänger; taktisch für Profis",
                    "nl": "Strategisch is voor beginners; tactisch voor profs"
                },
                {
                    "en": "Only one matters in Go",
                    "es": "Solo una importa en Go",
                    "de": "Nur eine zählt beim Go",
                    "nl": "Alleen één is belangrijk bij Go"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Strategic initiative determines where the important battles occur across the board, while tactical initiative controls who leads within a specific fight.",
                "es": "La iniciativa estratégica determina dónde ocurren las batallas importantes, mientras la táctica controla quién lidera en una pelea.",
                "de": "Strategische Initiative bestimmt wo die wichtigen Kämpfe stattfinden, taktische Initiative wer in einem bestimmten Kampf führt.",
                "nl": "Strategisch initiatief bepaalt waar de belangrijke gevechten plaatsvinden, tactisch initiatief bepaalt wie leidt in een specifiek gevecht."
            }
        },
        {
            "question": {
                "en": "What is a 'false eye' problem in Go life and death situations?",
                "es": "¿Qué es un problema de 'ojo falso' en situaciones de vida y muerte en Go?",
                "de": "Was ist ein 'falsches Auge'-Problem in Go-Leben-und-Tod-Situationen?",
                "nl": "Wat is een 'vals oog'-probleem in Go-leven-en-dood-situaties?"
            },
            "options": [
                {
                    "en": "A group that appears to have two eyes but one is a false eye",
                    "es": "Un grupo que parece tener dos ojos pero uno es falso",
                    "de": "Eine Gruppe die zwei Augen zu haben scheint aber eines ist falsch",
                    "nl": "Een groep die twee ogen lijkt te hebben maar er één vals is"
                },
                {
                    "en": "An optical illusion on the board",
                    "es": "Una ilusión óptica en el tablero",
                    "de": "Eine optische Täuschung auf dem Brett",
                    "nl": "Een optische illusie op het bord"
                },
                {
                    "en": "A decorative eye on the stone",
                    "es": "Un ojo decorativo en la piedra",
                    "de": "Ein dekoratives Auge auf dem Stein",
                    "nl": "Een decoratief oog op de steen"
                },
                {
                    "en": "A mistake in counting eyes",
                    "es": "Un error al contar ojos",
                    "de": "Ein Fehler beim Zählen der Augen",
                    "nl": "Een fout bij het tellen van ogen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A false eye has a diagonal weakness that the opponent can exploit. Groups relying on a false eye for their second eye are dead.",
                "es": "Un ojo falso tiene una debilidad diagonal explotable. Grupos que dependen de un ojo falso como segundo ojo están muertos.",
                "de": "Ein falsches Auge hat eine diagonale Schwäche die der Gegner ausnutzen kann. Gruppen die darauf angewiesen sind sind tot.",
                "nl": "Een vals oog heeft een diagonale zwakte die de tegenstander kan benutten. Groepen die afhankelijk zijn van een vals oog zijn dood."
            }
        },
        {
            "question": {
                "en": "What does the Go proverb 'don't go fishing while your house is on fire' mean?",
                "es": "¿Qué significa el proverbio de Go 'no pesques mientras tu casa arde'?",
                "de": "Was bedeutet das Go-Sprichwort 'angel nicht während dein Haus brennt'?",
                "nl": "Wat betekent het Go-spreekwoord 'ga niet vissen terwijl je huis brandt'?"
            },
            "options": [
                {
                    "en": "Defend your weak groups before seeking profit elsewhere",
                    "es": "Defiende tus grupos débiles antes de buscar beneficio en otro lado",
                    "de": "Verteidige deine schwachen Gruppen bevor du anderswo Gewinn suchst",
                    "nl": "Verdedig je zwakke groepen voordat je elders winst zoekt"
                },
                {
                    "en": "Never play near water",
                    "es": "Nunca juegues cerca del agua",
                    "de": "Spiele nie in der Nähe von Wasser",
                    "nl": "Speel nooit bij water"
                },
                {
                    "en": "Always attack first",
                    "es": "Siempre ataca primero",
                    "de": "Greife immer zuerst an",
                    "nl": "Val altijd als eerste aan"
                },
                {
                    "en": "Fish-shaped formations are bad",
                    "es": "Las formaciones con forma de pez son malas",
                    "de": "Fischförmige Formationen sind schlecht",
                    "nl": "Visvormige formaties zijn slecht"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "This proverb warns against ignoring your own weaknesses to gain territory. Save your endangered groups before expanding elsewhere.",
                "es": "Este proverbio advierte contra ignorar debilidades propias por ganar territorio. Salva tus grupos en peligro primero.",
                "de": "Dieses Sprichwort warnt davor eigene Schwächen zu ignorieren. Rette gefährdete Gruppen bevor du woanders expandierst.",
                "nl": "Dit spreekwoord waarschuwt tegen het negeren van eigen zwaktes. Red je bedreigde groepen voordat je elders uitbreidt."
            }
        },
        {
            "question": {
                "en": "What is the role of 'kyu' and 'dan' rankings in competitive Go?",
                "es": "¿Cuál es el rol de los rangos 'kyu' y 'dan' en Go competitivo?",
                "de": "Welche Rolle spielen 'Kyu'- und 'Dan'-Ränge im Wettkampf-Go?",
                "nl": "Wat is de rol van 'kyu'- en 'dan'-rangen in competitief Go?"
            },
            "options": [
                {
                    "en": "They measure player strength to enable fair handicap games",
                    "es": "Miden la fuerza del jugador para permitir juegos de handicap justos",
                    "de": "Sie messen die Spielstärke für faire Vorgabespiele",
                    "nl": "Ze meten de spelsterkte voor eerlijke voorgeefpartijen"
                },
                {
                    "en": "They determine who goes first",
                    "es": "Determinan quién va primero",
                    "de": "Sie bestimmen wer anfängt",
                    "nl": "Ze bepalen wie als eerste gaat"
                },
                {
                    "en": "They are only used in Japan",
                    "es": "Solo se usan en Japón",
                    "de": "Sie werden nur in Japan verwendet",
                    "nl": "Ze worden alleen in Japan gebruikt"
                },
                {
                    "en": "They are based on age",
                    "es": "Se basan en la edad",
                    "de": "Sie basieren auf dem Alter",
                    "nl": "Ze zijn gebaseerd op leeftijd"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Kyu and dan rankings indicate playing strength. The difference in ranks determines how many handicap stones the weaker player receives.",
                "es": "Los rangos kyu y dan indican fuerza de juego. La diferencia en rangos determina cuántas piedras de handicap recibe el jugador más débil.",
                "de": "Kyu- und Dan-Ränge zeigen die Spielstärke. Die Rangdifferenz bestimmt die Anzahl der Vorgabesteine für den schwächeren Spieler.",
                "nl": "Kyu- en dan-rangen geven de spelsterkte aan. Het rangverschil bepaalt hoeveel voorgeefstenen de zwakkere speler krijgt."
            }
        },
        {
            "question": {
                "en": "What is the 'AI revolution' in Go and how did it change the game?",
                "es": "¿Qué es la 'revolución de IA' en Go y cómo cambió el juego?",
                "de": "Was ist die 'KI-Revolution' bei Go und wie veränderte sie das Spiel?",
                "nl": "Wat is de 'AI-revolutie' bij Go en hoe veranderde het het spel?"
            },
            "options": [
                {
                    "en": "AI programs like AlphaGo introduced new strategies previously unknown to humans",
                    "es": "Programas de IA como AlphaGo introdujeron estrategias nuevas desconocidas para humanos",
                    "de": "KI-Programme wie AlphaGo führten neue den Menschen unbekannte Strategien ein",
                    "nl": "AI-programma's zoals AlphaGo introduceerden nieuwe strategieën onbekend bij mensen"
                },
                {
                    "en": "Robots now play Go instead of humans",
                    "es": "Los robots ahora juegan Go en lugar de humanos",
                    "de": "Roboter spielen jetzt Go anstelle von Menschen",
                    "nl": "Robots spelen nu Go in plaats van mensen"
                },
                {
                    "en": "AI banned certain moves from being played",
                    "es": "La IA prohibió ciertos movimientos",
                    "de": "KI hat bestimmte Züge verboten",
                    "nl": "AI heeft bepaalde zetten verboden"
                },
                {
                    "en": "The game was simplified for computers",
                    "es": "El juego se simplificó para computadoras",
                    "de": "Das Spiel wurde für Computer vereinfacht",
                    "nl": "Het spel werd vereenvoudigd voor computers"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "AlphaGo's 2016 victory over Lee Sedol showed AI discovering novel strategies like early 3-3 invasions, changing how professionals approach the game.",
                "es": "La victoria de AlphaGo en 2016 sobre Lee Sedol mostró estrategias novedosas como invasiones tempranas al 3-3, cambiando el enfoque profesional.",
                "de": "AlphaGos Sieg 2016 über Lee Sedol zeigte neue Strategien wie frühe 3-3-Invasionen und veränderte das professionelle Spiel.",
                "nl": "AlphaGo's overwinning in 2016 op Lee Sedol toonde nieuwe strategieën zoals vroege 3-3-invasies, wat het professionele spel veranderde."
            }
        },
        {
            "question": {
                "en": "What does the Go proverb 'there is no territory in the center' imply?",
                "es": "¿Qué implica el proverbio de Go 'no hay territorio en el centro'?",
                "de": "Was bedeutet das Go-Sprichwort 'es gibt kein Gebiet in der Mitte'?",
                "nl": "Wat impliceert het Go-spreekwoord 'er is geen gebied in het centrum'?"
            },
            "options": [
                {
                    "en": "Center territory requires too many stones to enclose efficiently",
                    "es": "El territorio central requiere demasiadas piedras para cerrar eficientemente",
                    "de": "Zentralgebiet braucht zu viele Steine um effizient eingeschlossen zu werden",
                    "nl": "Centrumgebied vereist te veel stenen om efficiënt af te sluiten"
                },
                {
                    "en": "The center of the board does not exist",
                    "es": "El centro del tablero no existe",
                    "de": "Die Mitte des Bretts existiert nicht",
                    "nl": "Het midden van het bord bestaat niet"
                },
                {
                    "en": "Never play in the center",
                    "es": "Nunca juegues en el centro",
                    "de": "Spiele nie in der Mitte",
                    "nl": "Speel nooit in het midden"
                },
                {
                    "en": "Center stones are worth zero points",
                    "es": "Las piedras centrales valen cero puntos",
                    "de": "Zentrale Steine sind null Punkte wert",
                    "nl": "Centrale stenen zijn nul punten waard"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Center territory is hard to secure because it has no edges to help enclose it. Corners and sides use the board edge as natural walls.",
                "es": "El territorio central es difícil de asegurar porque no tiene bordes para ayudar a cerrarlo. Las esquinas usan los bordes como muros.",
                "de": "Zentralgebiet ist schwer zu sichern weil keine Ränder beim Einschließen helfen. Ecken und Seiten nutzen den Brettrand als natürliche Wände.",
                "nl": "Centrumgebied is moeilijk te verzekeren omdat er geen randen zijn om te helpen afsluiten. Hoeken gebruiken de bordrand als muren."
            }
        },
        {
            "question": {
                "en": "What is a 'bulky five' shape and why is it important in Go?",
                "es": "¿Qué es la forma 'cinco voluminoso' y por qué es importante en Go?",
                "de": "Was ist die 'klobige Fünf' Form und warum ist sie wichtig bei Go?",
                "nl": "Wat is de 'logge vijf' vorm en waarom is het belangrijk bij Go?"
            },
            "options": [
                {
                    "en": "A five-point eye space that is alive or dead depending on who plays first",
                    "es": "Un espacio de ojo de cinco puntos vivo o muerto según quién juegue primero",
                    "de": "Ein Fünf-Punkte-Augenraum der lebt oder stirbt je nachdem wer zuerst spielt",
                    "nl": "Een vijf-punten-oogruimte die leeft of sterft afhankelijk van wie eerst speelt"
                },
                {
                    "en": "Five heavy stones",
                    "es": "Cinco piedras pesadas",
                    "de": "Fünf schwere Steine",
                    "nl": "Vijf zware stenen"
                },
                {
                    "en": "A type of Go board",
                    "es": "Un tipo de tablero de Go",
                    "de": "Eine Art Go-Brett",
                    "nl": "Een soort Go-bord"
                },
                {
                    "en": "A five-player variant",
                    "es": "Una variante de cinco jugadores",
                    "de": "Eine Fünf-Spieler-Variante",
                    "nl": "Een vijf-speler-variant"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The bulky five is a critical shape in life and death. If the defender plays first on the vital point, it lives; if the attacker does, it dies.",
                "es": "La cinco voluminosa es una forma crítica. Si el defensor juega primero en el punto vital, vive; si el atacante lo hace, muere.",
                "de": "Die klobige Fünf ist eine kritische Form. Spielt der Verteidiger zuerst auf dem vitalen Punkt, lebt sie; der Angreifer, stirbt sie.",
                "nl": "De logge vijf is een kritieke vorm. Als de verdediger eerst speelt op het vitale punt, leeft het; als de aanvaller het doet, sterft het."
            }
        },
        {
            "question": {
                "en": "What is the 'Takemiya' style of Go play?",
                "es": "¿Qué es el estilo de juego 'Takemiya' en Go?",
                "de": "Was ist der 'Takemiya'-Spielstil bei Go?",
                "nl": "Wat is de 'Takemiya'-speelstijl bij Go?"
            },
            "options": [
                {
                    "en": "A cosmic style focusing on vast center-oriented frameworks",
                    "es": "Un estilo cósmico enfocado en vastos marcos orientados al centro",
                    "de": "Ein kosmischer Stil mit Fokus auf riesige zentrumsorientierte Rahmen",
                    "nl": "Een kosmische stijl gericht op grote centrumgerichte raamwerken"
                },
                {
                    "en": "A style of playing very quickly",
                    "es": "Un estilo de jugar muy rápido",
                    "de": "Ein Stil sehr schnell zu spielen",
                    "nl": "Een stijl van heel snel spelen"
                },
                {
                    "en": "Only playing on the edges",
                    "es": "Solo jugar en los bordes",
                    "de": "Nur an den Rändern spielen",
                    "nl": "Alleen aan de randen spelen"
                },
                {
                    "en": "A defensive-only strategy",
                    "es": "Una estrategia solo defensiva",
                    "de": "Eine nur defensive Strategie",
                    "nl": "Een alleen defensieve strategie"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Takemiya Masaki popularized the cosmic style that builds enormous center-focused frameworks (moyo), daring opponents to invade.",
                "es": "Takemiya Masaki popularizó el estilo cósmico que construye enormes marcos centrados en el centro, desafiando a los oponentes a invadir.",
                "de": "Takemiya Masaki popularisierte den kosmischen Stil der riesige Zentrumsrahmen baut und Gegner zur Invasion herausfordert.",
                "nl": "Takemiya Masaki populariseerde de kosmische stijl die enorme centrumgerichte raamwerken bouwt en tegenstanders uitdaagt te invallen."
            }
        },
        {
            "question": {
                "en": "What is a 'wedge' tesuji in Go?",
                "es": "¿Qué es un tesuji de 'cuña' en Go?",
                "de": "Was ist ein 'Keil'-Tesuji bei Go?",
                "nl": "Wat is een 'wig'-tesuji bij Go?"
            },
            "options": [
                {
                    "en": "Playing between two enemy stones to separate them",
                    "es": "Jugar entre dos piedras enemigas para separarlas",
                    "de": "Zwischen zwei feindliche Steine spielen um sie zu trennen",
                    "nl": "Tussen twee vijandelijke stenen spelen om ze te scheiden"
                },
                {
                    "en": "A triangular stone shape",
                    "es": "Una forma triangular de piedras",
                    "de": "Eine dreieckige Steinform",
                    "nl": "Een driehoekige steenvorm"
                },
                {
                    "en": "A door stopper for the board",
                    "es": "Un tope de puerta para el tablero",
                    "de": "Ein Türstopper für das Brett",
                    "nl": "Een deurstopper voor het bord"
                },
                {
                    "en": "A wooden wedge under the table",
                    "es": "Una cuña de madera bajo la mesa",
                    "de": "Ein Holzkeil unter dem Tisch",
                    "nl": "Een houten wig onder de tafel"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A wedge plays directly between two opponent stones that are one space apart, threatening to cut and creating complications.",
                "es": "Una cuña juega directamente entre dos piedras del oponente separadas por un espacio, amenazando con cortar.",
                "de": "Ein Keil spielt direkt zwischen zwei einen Raum entfernte gegnerische Steine und droht mit Schnitt.",
                "nl": "Een wig speelt direct tussen twee vijandelijke stenen die één ruimte uit elkaar staan en dreigt te snijden."
            }
        },
        {
            "question": {
                "en": "What is the difference between 'territory scoring' and 'area scoring' in Go?",
                "es": "¿Cuál es la diferencia entre 'puntuación por territorio' y 'puntuación por área' en Go?",
                "de": "Was ist der Unterschied zwischen 'Gebietswertung' und 'Flächenwertung' bei Go?",
                "nl": "Wat is het verschil tussen 'gebiedstelling' en 'oppervlaktetelling' bij Go?"
            },
            "options": [
                {
                    "en": "Territory counts empty points; area counts empty points plus own stones",
                    "es": "Territorio cuenta puntos vacíos; área cuenta puntos vacíos más piedras propias",
                    "de": "Gebiet zählt leere Punkte; Fläche zählt leere Punkte plus eigene Steine",
                    "nl": "Gebied telt lege punten; oppervlakte telt lege punten plus eigen stenen"
                },
                {
                    "en": "They are exactly the same",
                    "es": "Son exactamente iguales",
                    "de": "Sie sind genau gleich",
                    "nl": "Ze zijn precies hetzelfde"
                },
                {
                    "en": "Territory is Japanese; area is American",
                    "es": "Territorio es japonés; área es americano",
                    "de": "Gebiet ist japanisch; Fläche ist amerikanisch",
                    "nl": "Gebied is Japans; oppervlakte is Amerikaans"
                },
                {
                    "en": "Only one is used in tournaments",
                    "es": "Solo uno se usa en torneos",
                    "de": "Nur eines wird in Turnieren verwendet",
                    "nl": "Alleen één wordt in toernooien gebruikt"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Japanese rules use territory scoring (empty points + prisoners), Chinese rules use area scoring (empty points + living stones). Results are usually similar.",
                "es": "Las reglas japonesas usan puntuación territorial (puntos vacíos + prisioneros), las chinas usan área (puntos + piedras vivas).",
                "de": "Japanische Regeln nutzen Gebietswertung, chinesische Flächenwertung. Die Ergebnisse sind meist ähnlich.",
                "nl": "Japanse regels gebruiken gebiedstelling, Chinese regels oppervlaktetelling. De resultaten zijn meestal vergelijkbaar."
            }
        },
        {
            "question": {
                "en": "What is a 'squeeze' tesuji in Go?",
                "es": "¿Qué es un tesuji de 'exprimir' en Go?",
                "de": "Was ist ein 'Quetsch'-Tesuji bei Go?",
                "nl": "Wat is een 'knijp'-tesuji bij Go?"
            },
            "options": [
                {
                    "en": "Forcing the opponent to capture a stone then using the resulting shape",
                    "es": "Forzar al oponente a capturar una piedra y luego usar la forma resultante",
                    "de": "Den Gegner zwingen einen Stein zu fangen und dann die Form zu nutzen",
                    "nl": "De tegenstander dwingen een steen te vangen en dan de resulterende vorm gebruiken"
                },
                {
                    "en": "Physically squeezing the stones",
                    "es": "Apretar físicamente las piedras",
                    "de": "Die Steine physisch zusammendrücken",
                    "nl": "De stenen fysiek samenknijpen"
                },
                {
                    "en": "Reducing the board size",
                    "es": "Reducir el tamaño del tablero",
                    "de": "Die Brettgröße verkleinern",
                    "nl": "De bordgrootte verkleinen"
                },
                {
                    "en": "Compressing time in the game",
                    "es": "Comprimir tiempo en el juego",
                    "de": "Zeit im Spiel komprimieren",
                    "nl": "Tijd in het spel comprimeren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A squeeze sacrifices a stone to force the opponent into a cramped shape, then exploits the resulting shortage of liberties.",
                "es": "Un squeeze sacrifica una piedra para forzar al oponente a una forma apretada, luego explota la escasez de libertades resultante.",
                "de": "Ein Quetsch-Tesuji opfert einen Stein um den Gegner in eine enge Form zu zwingen und nutzt dann den Freiheitenmangel.",
                "nl": "Een knijp offert een steen op om de tegenstander in een krappe vorm te dwingen en benut dan het gebrek aan vrijheden."
            }
        },
        {
            "question": {
                "en": "What is a 'dead group' agreement in Go?",
                "es": "¿Qué es un acuerdo de 'grupo muerto' en Go?",
                "de": "Was ist eine 'tote Gruppe'-Vereinbarung bei Go?",
                "nl": "Wat is een 'dode groep'-overeenkomst bij Go?"
            },
            "options": [
                {
                    "en": "Players agree which groups are dead during scoring without playing it out",
                    "es": "Los jugadores acuerdan qué grupos están muertos durante el conteo sin jugarlos",
                    "de": "Spieler einigen sich beim Zählen welche Gruppen tot sind ohne auszuspielen",
                    "nl": "Spelers komen overeen welke groepen dood zijn tijdens het tellen zonder uit te spelen"
                },
                {
                    "en": "A contract between Go players",
                    "es": "Un contrato entre jugadores de Go",
                    "de": "Ein Vertrag zwischen Go-Spielern",
                    "nl": "Een contract tussen Go-spelers"
                },
                {
                    "en": "Removing dead players from the tournament",
                    "es": "Eliminar jugadores muertos del torneo",
                    "de": "Tote Spieler aus dem Turnier entfernen",
                    "nl": "Dode spelers uit het toernooi verwijderen"
                },
                {
                    "en": "A funeral for captured stones",
                    "es": "Un funeral para piedras capturadas",
                    "de": "Eine Beerdigung für gefangene Steine",
                    "nl": "Een begrafenis voor gevangen stenen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "At game end, players mutually agree on which groups are dead. If they disagree, the disputed position can be played out to resolve it.",
                "es": "Al final del juego, los jugadores acuerdan mutuamente qué grupos están muertos. Si no están de acuerdo, se juega la posición.",
                "de": "Am Spielende einigen sich die Spieler welche Gruppen tot sind. Bei Uneinigkeit wird die Position ausgespielt.",
                "nl": "Aan het einde van het spel komen spelers overeen welke groepen dood zijn. Bij onenigheid wordt de positie uitgespeeld."
            }
        },
        {
            "question": {
                "en": "What is 'reverse sente' in Go endgame play?",
                "es": "¿Qué es 'sente inverso' en el final de Go?",
                "de": "Was ist 'umgekehrtes Sente' im Go-Endspiel?",
                "nl": "Wat is 'omgekeerd sente' in het Go-eindspel?"
            },
            "options": [
                {
                    "en": "A gote move that prevents the opponent from playing a sente move there",
                    "es": "Un movimiento gote que evita que el oponente juegue un sente allí",
                    "de": "Ein Gote-Zug der den Gegner daran hindert dort einen Sente-Zug zu spielen",
                    "nl": "Een gote-zet die voorkomt dat de tegenstander daar een sente-zet speelt"
                },
                {
                    "en": "Playing sente moves in reverse order",
                    "es": "Jugar movimientos sente en orden inverso",
                    "de": "Sente-Züge in umgekehrter Reihenfolge spielen",
                    "nl": "Sente-zetten in omgekeerde volgorde spelen"
                },
                {
                    "en": "Going backwards on the board",
                    "es": "Ir hacia atrás en el tablero",
                    "de": "Auf dem Brett rückwärts gehen",
                    "nl": "Achteruit gaan op het bord"
                },
                {
                    "en": "Undoing a previous move",
                    "es": "Deshacer un movimiento anterior",
                    "de": "Einen früheren Zug rückgängig machen",
                    "nl": "Een eerdere zet ongedaan maken"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Reverse sente is a gote move that denies the opponent a sente follow-up. It is valued higher than regular gote because of what it prevents.",
                "es": "El sente inverso es un movimiento gote que niega al oponente un seguimiento sente. Vale más que gote regular por lo que previene.",
                "de": "Umgekehrtes Sente ist ein Gote-Zug der dem Gegner einen Sente-Folgezug verwehrt. Es ist wertvoller als normales Gote.",
                "nl": "Omgekeerd sente is een gote-zet die de tegenstander een sente-vervolg ontzegt. Het is waardevoller dan gewone gote."
            }
        },
        {
            "question": {
                "en": "What is 'stone counting' used for during a Go game?",
                "es": "¿Para qué se usa 'contar piedras' durante un juego de Go?",
                "de": "Wofür wird 'Steine zählen' während eines Go-Spiels verwendet?",
                "nl": "Waarvoor wordt 'stenen tellen' gebruikt tijdens een Go-spel?"
            },
            "options": [
                {
                    "en": "Estimating the score to decide whether to play aggressively or safely",
                    "es": "Estimar la puntuación para decidir si jugar agresiva o seguramente",
                    "de": "Die Punktzahl schätzen um zu entscheiden ob aggressiv oder sicher gespielt wird",
                    "nl": "De score inschatten om te beslissen of je agressief of veilig speelt"
                },
                {
                    "en": "Counting how many stones remain in the bowl",
                    "es": "Contar cuántas piedras quedan en el cuenco",
                    "de": "Zählen wie viele Steine in der Schale bleiben",
                    "nl": "Tellen hoeveel stenen er in de kom overblijven"
                },
                {
                    "en": "Verifying the stones are all present",
                    "es": "Verificar que todas las piedras están presentes",
                    "de": "Überprüfen ob alle Steine vorhanden sind",
                    "nl": "Controleren of alle stenen aanwezig zijn"
                },
                {
                    "en": "A meditative practice",
                    "es": "Una práctica meditativa",
                    "de": "Eine meditative Praxis",
                    "nl": "Een meditatieve oefening"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Counting during the game estimates territory and captures to see who is leading. This guides strategy: behind players play aggressively, ahead play safely.",
                "es": "Contar durante el juego estima territorio y capturas. Guía la estrategia: atrás juega agresivo, adelante juega seguro.",
                "de": "Zählen während des Spiels schätzt Gebiet und Gefangene. Es leitet die Strategie: Zurückliegende spielen aggressiv, Führende sicher.",
                "nl": "Tellen tijdens het spel schat gebied en vangsten in. Het stuurt de strategie: achterliggers spelen agressief, voorliggers veilig."
            }
        },
        {
            "question": {
                "en": "What does the Go proverb 'play the urgent move, not the big move' advise?",
                "es": "¿Qué aconseja el proverbio de Go 'juega lo urgente, no lo grande'?",
                "de": "Was rät das Go-Sprichwort 'spiele den dringenden Zug, nicht den großen'?",
                "nl": "Wat adviseert het Go-spreekwoord 'speel de urgente zet, niet de grote'?"
            },
            "options": [
                {
                    "en": "Fix weaknesses and threats before seeking large territorial gains",
                    "es": "Repara debilidades y amenazas antes de buscar grandes ganancias territoriales",
                    "de": "Behebe Schwächen und Bedrohungen bevor du große Gebietsgewinne suchst",
                    "nl": "Herstel zwaktes en dreigingen voordat je grote gebiedswinsten zoekt"
                },
                {
                    "en": "Always play the fastest possible move",
                    "es": "Siempre juega el movimiento más rápido posible",
                    "de": "Spiele immer den schnellstmöglichen Zug",
                    "nl": "Speel altijd de snelst mogelijke zet"
                },
                {
                    "en": "Small moves are better than large ones",
                    "es": "Los movimientos pequeños son mejores que los grandes",
                    "de": "Kleine Züge sind besser als große",
                    "nl": "Kleine zetten zijn beter dan grote"
                },
                {
                    "en": "Never play defensive moves",
                    "es": "Nunca juegues movimientos defensivos",
                    "de": "Spiele nie defensive Züge",
                    "nl": "Speel nooit defensieve zetten"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "This proverb teaches that addressing immediate threats to your groups is more important than playing big but non-urgent territorial moves.",
                "es": "Este proverbio enseña que abordar amenazas inmediatas es más importante que jugar movimientos territoriales grandes pero no urgentes.",
                "de": "Dieses Sprichwort lehrt dass sofortige Bedrohungen zu beheben wichtiger ist als große aber nicht dringende Gebietszüge.",
                "nl": "Dit spreekwoord leert dat het aanpakken van directe dreigingen belangrijker is dan grote maar niet-urgente gebiedszetten."
            }
        },
        {
            "question": {
                "en": "What is a 'carpenter's square' shape in Go life and death?",
                "es": "¿Qué es la forma de 'escuadra de carpintero' en vida y muerte de Go?",
                "de": "Was ist die 'Zimmermannswinkel'-Form bei Go-Leben-und-Tod?",
                "nl": "Wat is de 'winkelhaak'-vorm bij Go-leven-en-dood?"
            },
            "options": [
                {
                    "en": "An L-shaped eye space that creates complex life and death problems",
                    "es": "Un espacio de ojo en forma de L que crea problemas complejos de vida y muerte",
                    "de": "Ein L-förmiger Augenraum der komplexe Leben-und-Tod-Probleme schafft",
                    "nl": "Een L-vormige oogruimte die complexe leven-en-dood-problemen creëert"
                },
                {
                    "en": "A tool used to make the board",
                    "es": "Una herramienta usada para hacer el tablero",
                    "de": "Ein Werkzeug zum Herstellen des Bretts",
                    "nl": "Een gereedschap om het bord te maken"
                },
                {
                    "en": "A right angle on the board",
                    "es": "Un ángulo recto en el tablero",
                    "de": "Ein rechter Winkel auf dem Brett",
                    "nl": "Een rechte hoek op het bord"
                },
                {
                    "en": "A measuring device for Go stones",
                    "es": "Un dispositivo de medición para piedras",
                    "de": "Ein Messgerät für Go-Steine",
                    "nl": "Een meetinstrument voor Go-stenen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The carpenter's square is an L-shaped corner formation where life or death depends on who plays first at the vital point inside the bend.",
                "es": "La escuadra de carpintero es una formación de esquina en L donde la vida o muerte depende de quién juegue primero el punto vital.",
                "de": "Der Zimmermannswinkel ist eine L-förmige Eckformation wo Leben oder Tod davon abhängt wer zuerst am vitalen Punkt spielt.",
                "nl": "De winkelhaak is een L-vormige hoekformatie waar leven of dood afhangt van wie eerst op het vitale punt speelt."
            }
        },
        {
            "question": {
                "en": "What is the significance of playing on the 'tengen' (center point) in Go?",
                "es": "¿Cuál es la importancia de jugar en el 'tengen' (punto central) en Go?",
                "de": "Was ist die Bedeutung des Spielens auf dem 'Tengen' (Mittelpunkt) bei Go?",
                "nl": "Wat is het belang van spelen op het 'tengen' (middelpunt) bij Go?"
            },
            "options": [
                {
                    "en": "It radiates influence equally in all directions but is hard to convert",
                    "es": "Irradia influencia igualmente en todas las direcciones pero es difícil de convertir",
                    "de": "Es strahlt Einfluss gleichmäßig aus ist aber schwer in Gebiet umzuwandeln",
                    "nl": "Het straalt invloed gelijk uit in alle richtingen maar is moeilijk om te zetten"
                },
                {
                    "en": "It automatically wins the game",
                    "es": "Automáticamente gana el juego",
                    "de": "Es gewinnt automatisch das Spiel",
                    "nl": "Het wint automatisch het spel"
                },
                {
                    "en": "It is the strongest point on the board",
                    "es": "Es el punto más fuerte del tablero",
                    "de": "Es ist der stärkste Punkt auf dem Brett",
                    "nl": "Het is het sterkste punt op het bord"
                },
                {
                    "en": "It is never played in professional Go",
                    "es": "Nunca se juega en Go profesional",
                    "de": "Es wird nie im professionellen Go gespielt",
                    "nl": "Het wordt nooit gespeeld in professioneel Go"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Tengen projects influence in all four directions equally. However, it is far from the edges, making it difficult to convert influence into territory.",
                "es": "Tengen proyecta influencia en todas las direcciones por igual. Sin embargo, está lejos de los bordes, dificultando la conversión.",
                "de": "Tengen strahlt Einfluss in alle vier Richtungen gleichmäßig aus. Da es weit von den Rändern ist, ist die Umwandlung schwierig.",
                "nl": "Tengen straalt invloed gelijk uit in alle vier richtingen. Omdat het ver van de randen is, is omzetting moeilijk."
            }
        },
        {
            "question": {
                "en": "What is 'ajitastes' considered bad practice in Go?",
                "es": "¿Por qué se considera mala práctica 'ajitastes' en Go?",
                "de": "Warum wird 'Aji-Verschwendung' als schlecht bei Go angesehen?",
                "nl": "Waarom wordt 'aji-verspilling' als slecht beschouwd bij Go?"
            },
            "options": [
                {
                    "en": "Because it wastes potential future tactical options prematurely",
                    "es": "Porque desperdicia opciones tácticas futuras prematuramente",
                    "de": "Weil es zukünftige taktische Optionen vorzeitig verschwendet",
                    "nl": "Omdat het toekomstige tactische opties voortijdig verspilt"
                },
                {
                    "en": "Because it makes food taste bad",
                    "es": "Porque hace que la comida sepa mal",
                    "de": "Weil es Essen schlecht schmecken lässt",
                    "nl": "Omdat het eten slecht laat smaken"
                },
                {
                    "en": "Because it uses too many stones",
                    "es": "Porque usa demasiadas piedras",
                    "de": "Weil es zu viele Steine verwendet",
                    "nl": "Omdat het te veel stenen gebruikt"
                },
                {
                    "en": "Because it takes too long",
                    "es": "Porque toma demasiado tiempo",
                    "de": "Weil es zu lange dauert",
                    "nl": "Omdat het te lang duurt"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Wasting aji removes latent possibilities that might have been useful later. Good players keep aji alive as long as possible for maximum flexibility.",
                "es": "Desperdiciar aji elimina posibilidades latentes útiles más tarde. Buenos jugadores mantienen el aji vivo para máxima flexibilidad.",
                "de": "Aji zu verschwenden entfernt latente Möglichkeiten die später nützlich sein könnten. Gute Spieler bewahren Aji für maximale Flexibilität.",
                "nl": "Aji verspillen verwijdert latente mogelijkheden die later nuttig kunnen zijn. Goede spelers houden aji in leven voor maximale flexibiliteit."
            }
        },
        {
            "question": {
                "en": "What is a 'cross-cut fight' and how should you approach it in Go?",
                "es": "¿Qué es una 'pelea de corte cruzado' y cómo abordarla en Go?",
                "de": "Was ist ein 'Kreuzschnitt-Kampf' und wie geht man damit bei Go um?",
                "nl": "Wat is een 'kruissnede-gevecht' en hoe benader je het bij Go?"
            },
            "options": [
                {
                    "en": "Extend from the weaker stone to maintain connection and stability",
                    "es": "Extender desde la piedra más débil para mantener conexión y estabilidad",
                    "de": "Vom schwächeren Stein aus erweitern um Verbindung und Stabilität zu erhalten",
                    "nl": "Vanuit de zwakkere steen uitbreiden om verbinding en stabiliteit te behouden"
                },
                {
                    "en": "Always capture both cutting stones",
                    "es": "Siempre capturar ambas piedras de corte",
                    "de": "Immer beide Schnittsteine fangen",
                    "nl": "Altijd beide snijstenen vangen"
                },
                {
                    "en": "Run away from the fight",
                    "es": "Huir de la pelea",
                    "de": "Vor dem Kampf fliehen",
                    "nl": "Vluchten voor het gevecht"
                },
                {
                    "en": "Never cross-cut your opponent",
                    "es": "Nunca cortes cruzado a tu oponente",
                    "de": "Nie den Gegner kreuzschneiden",
                    "nl": "Kruissnijd nooit je tegenstander"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "In a cross-cut, the proverb says 'extend from the weaker stone.' This connects your weaker group while leaving the stronger group to handle itself.",
                "es": "En un corte cruzado, el proverbio dice 'extiende desde la piedra más débil', conectando el grupo más débil.",
                "de": "Beim Kreuzschnitt sagt das Sprichwort 'erweitere vom schwächeren Stein' und verbindet die schwächere Gruppe.",
                "nl": "Bij een kruissnede zegt het spreekwoord 'breid uit vanuit de zwakkere steen', en verbindt je zwakkere groep."
            }
        }
    ]
};
