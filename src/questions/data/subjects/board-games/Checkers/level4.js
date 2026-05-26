// Checkers - level4
// Total questions: 100

module.exports = {
    questions: [
        {
            "question": {
                "en": "What is a double jump in checkers?",
                "es": "¿Qué es un salto doble en damas?",
                "de": "Was ist ein Doppelsprung beim Damespiel?",
                "nl": "Wat is een dubbele sprong bij dammen?"
            },
            "options": [
                {
                    "en": "Capturing two pieces in one turn",
                    "es": "Capturar dos piezas en un turno",
                    "de": "Zwei Steine in einem Zug schlagen",
                    "nl": "Twee stukken slaan in één beurt"
                },
                {
                    "en": "Moving two squares forward",
                    "es": "Mover dos casillas hacia adelante",
                    "de": "Zwei Felder vorwärts ziehen",
                    "nl": "Twee velden vooruit bewegen"
                },
                {
                    "en": "Jumping over your own piece",
                    "es": "Saltar sobre tu propia pieza",
                    "de": "Über eigenen Stein springen",
                    "nl": "Over eigen stuk springen"
                },
                {
                    "en": "Placing two pieces on one square",
                    "es": "Colocar dos piezas en una casilla",
                    "de": "Zwei Steine auf ein Feld setzen",
                    "nl": "Twee stukken op één veld plaatsen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A double jump lets you capture two opponent pieces in a single turn by making consecutive jumps.",
                "es": "Un salto doble te permite capturar dos piezas del oponente en un solo turno con saltos consecutivos.",
                "de": "Ein Doppelsprung ermöglicht es, zwei gegnerische Steine in einem Zug durch aufeinanderfolgende Sprünge zu schlagen.",
                "nl": "Een dubbele sprong laat je twee stukken van de tegenstander slaan in één beurt door opeenvolgende sprongen."
            }
        },
        {
            "question": {
                "en": "What happens when a piece reaches the last row?",
                "es": "¿Qué pasa cuando una pieza llega a la última fila?",
                "de": "Was passiert wenn ein Stein die letzte Reihe erreicht?",
                "nl": "Wat gebeurt er als een stuk de laatste rij bereikt?"
            },
            "options": [
                {
                    "en": "It becomes a king",
                    "es": "Se convierte en rey",
                    "de": "Er wird zum König",
                    "nl": "Het wordt een dam"
                },
                {
                    "en": "It is removed from the board",
                    "es": "Se retira del tablero",
                    "de": "Er wird vom Brett entfernt",
                    "nl": "Het wordt van het bord verwijderd"
                },
                {
                    "en": "It stays in place permanently",
                    "es": "Se queda en su lugar permanentemente",
                    "de": "Er bleibt dauerhaft stehen",
                    "nl": "Het blijft permanent op zijn plaats"
                },
                {
                    "en": "The player scores a point",
                    "es": "El jugador anota un punto",
                    "de": "Der Spieler bekommt einen Punkt",
                    "nl": "De speler scoort een punt"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "When a regular piece reaches the opponent's back row, it is promoted to a king and gains extra movement abilities.",
                "es": "Cuando una pieza regular llega a la última fila del oponente, se promueve a rey y gana habilidades de movimiento extra.",
                "de": "Wenn ein normaler Stein die letzte Reihe des Gegners erreicht, wird er zum König befördert und erhält erweiterte Zugmöglichkeiten.",
                "nl": "Wanneer een gewoon stuk de laatste rij van de tegenstander bereikt, wordt het gepromoveerd tot dam en krijgt extra bewegingsmogelijkheden."
            }
        },
        {
            "question": {
                "en": "How does a king move differently from a regular piece?",
                "es": "¿Cómo se mueve un rey diferente de una pieza normal?",
                "de": "Wie bewegt sich ein König anders als ein normaler Stein?",
                "nl": "Hoe beweegt een dam anders dan een gewoon stuk?"
            },
            "options": [
                {
                    "en": "It can move backward and forward",
                    "es": "Puede moverse hacia atrás y adelante",
                    "de": "Er kann vorwärts und rückwärts ziehen",
                    "nl": "Het kan vooruit en achteruit bewegen"
                },
                {
                    "en": "It can jump three squares",
                    "es": "Puede saltar tres casillas",
                    "de": "Er kann drei Felder springen",
                    "nl": "Het kan drie velden springen"
                },
                {
                    "en": "It can move sideways",
                    "es": "Puede moverse de lado",
                    "de": "Er kann seitwärts ziehen",
                    "nl": "Het kan zijwaarts bewegen"
                },
                {
                    "en": "It cannot be captured",
                    "es": "No puede ser capturada",
                    "de": "Er kann nicht geschlagen werden",
                    "nl": "Het kan niet geslagen worden"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A king can move both forward and backward diagonally, while regular pieces can only move forward.",
                "es": "Un rey puede moverse tanto hacia adelante como hacia atrás en diagonal, mientras que las piezas regulares solo avanzan.",
                "de": "Ein König kann sowohl vorwärts als auch rückwärts diagonal ziehen, während normale Steine nur vorwärts ziehen können.",
                "nl": "Een dam kan zowel vooruit als achteruit diagonaal bewegen, terwijl gewone stukken alleen vooruit kunnen."
            }
        },
        {
            "question": {
                "en": "What is the forced capture rule in checkers?",
                "es": "¿Qué es la regla de captura obligatoria en damas?",
                "de": "Was ist die Schlagpflicht beim Damespiel?",
                "nl": "Wat is de slagplicht bij dammen?"
            },
            "options": [
                {
                    "en": "You must capture if you can",
                    "es": "Debes capturar si puedes",
                    "de": "Man muss schlagen wenn man kann",
                    "nl": "Je moet slaan als je kunt"
                },
                {
                    "en": "You can choose to capture or not",
                    "es": "Puedes elegir capturar o no",
                    "de": "Man kann wählen ob man schlägt",
                    "nl": "Je kunt kiezen of je slaat"
                },
                {
                    "en": "Only kings must capture",
                    "es": "Solo los reyes deben capturar",
                    "de": "Nur Könige müssen schlagen",
                    "nl": "Alleen dammen moeten slaan"
                },
                {
                    "en": "Capturing is never forced",
                    "es": "La captura nunca es obligatoria",
                    "de": "Schlagen ist nie Pflicht",
                    "nl": "Slaan is nooit verplicht"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "In most checkers variants, if you can make a capture, you must do so. This is called the forced capture rule.",
                "es": "En la mayoría de variantes de damas, si puedes hacer una captura, debes hacerlo. Esto se llama regla de captura obligatoria.",
                "de": "In den meisten Dame-Varianten muss man schlagen, wenn man kann. Dies wird Schlagpflicht genannt.",
                "nl": "Bij de meeste damvarianten moet je slaan als je kunt. Dit heet de slagplicht."
            }
        },
        {
            "question": {
                "en": "What is a sacrifice in checkers strategy?",
                "es": "¿Qué es un sacrificio en la estrategia de damas?",
                "de": "Was ist ein Opfer in der Damestrategie?",
                "nl": "Wat is een offer in de damstrategie?"
            },
            "options": [
                {
                    "en": "Giving up a piece to gain advantage",
                    "es": "Entregar una pieza para ganar ventaja",
                    "de": "Einen Stein opfern um Vorteil zu erlangen",
                    "nl": "Een stuk opgeven om voordeel te behalen"
                },
                {
                    "en": "Moving a piece backward",
                    "es": "Mover una pieza hacia atrás",
                    "de": "Einen Stein rückwärts ziehen",
                    "nl": "Een stuk achteruit bewegen"
                },
                {
                    "en": "Refusing to capture",
                    "es": "Negarse a capturar",
                    "de": "Sich weigern zu schlagen",
                    "nl": "Weigeren te slaan"
                },
                {
                    "en": "Placing pieces in the center",
                    "es": "Colocar piezas en el centro",
                    "de": "Steine in die Mitte setzen",
                    "nl": "Stukken in het midden plaatsen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A sacrifice means deliberately giving up a piece to set up a better position or a multiple capture opportunity.",
                "es": "Un sacrificio significa entregar deliberadamente una pieza para conseguir mejor posición u oportunidad de captura múltiple.",
                "de": "Ein Opfer bedeutet, absichtlich einen Stein aufzugeben, um eine bessere Position oder Mehrfachschlagmöglichkeit zu erzielen.",
                "nl": "Een offer betekent opzettelijk een stuk opgeven om een betere positie of meervoudige slagkans te creëren."
            }
        },
        {
            "question": {
                "en": "How many squares can a regular piece move at once?",
                "es": "¿Cuántas casillas puede mover una pieza normal a la vez?",
                "de": "Wie viele Felder kann ein normaler Stein auf einmal ziehen?",
                "nl": "Hoeveel velden kan een gewoon stuk tegelijk bewegen?"
            },
            "options": [
                {
                    "en": "One square diagonally",
                    "es": "Una casilla en diagonal",
                    "de": "Ein Feld diagonal",
                    "nl": "Eén veld diagonaal"
                },
                {
                    "en": "Two squares in any direction",
                    "es": "Dos casillas en cualquier dirección",
                    "de": "Zwei Felder in jede Richtung",
                    "nl": "Twee velden in elke richting"
                },
                {
                    "en": "Three squares forward",
                    "es": "Tres casillas hacia adelante",
                    "de": "Drei Felder vorwärts",
                    "nl": "Drie velden vooruit"
                },
                {
                    "en": "As many as desired",
                    "es": "Tantas como se desee",
                    "de": "So viele wie gewünscht",
                    "nl": "Zoveel als gewenst"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A regular piece in checkers moves one square diagonally forward. It can only go further when making capture jumps.",
                "es": "Una pieza regular en damas se mueve una casilla en diagonal hacia adelante. Solo avanza más al hacer saltos de captura.",
                "de": "Ein normaler Stein im Damespiel zieht ein Feld diagonal vorwärts. Er kann nur beim Schlagen weiter ziehen.",
                "nl": "Een gewoon stuk bij dammen beweegt één veld diagonaal vooruit. Het kan alleen verder bij slagsprongen."
            }
        },
        {
            "question": {
                "en": "What is a triple jump in checkers?",
                "es": "¿Qué es un salto triple en damas?",
                "de": "Was ist ein Dreifachsprung beim Damespiel?",
                "nl": "Wat is een driedubbele sprong bij dammen?"
            },
            "options": [
                {
                    "en": "Capturing three pieces in one turn",
                    "es": "Capturar tres piezas en un turno",
                    "de": "Drei Steine in einem Zug schlagen",
                    "nl": "Drie stukken slaan in één beurt"
                },
                {
                    "en": "Moving three squares at once",
                    "es": "Mover tres casillas a la vez",
                    "de": "Drei Felder auf einmal ziehen",
                    "nl": "Drie velden tegelijk bewegen"
                },
                {
                    "en": "Jumping over three empty squares",
                    "es": "Saltar sobre tres casillas vacías",
                    "de": "Über drei leere Felder springen",
                    "nl": "Over drie lege velden springen"
                },
                {
                    "en": "Stacking three pieces together",
                    "es": "Apilar tres piezas juntas",
                    "de": "Drei Steine zusammenstapeln",
                    "nl": "Drie stukken op elkaar stapelen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A triple jump means capturing three opponent pieces in a single turn through three consecutive jumps.",
                "es": "Un salto triple significa capturar tres piezas del oponente en un solo turno mediante tres saltos consecutivos.",
                "de": "Ein Dreifachsprung bedeutet, drei gegnerische Steine in einem Zug durch drei aufeinanderfolgende Sprünge zu schlagen.",
                "nl": "Een driedubbele sprong betekent drie stukken van de tegenstander slaan in één beurt door drie opeenvolgende sprongen."
            }
        },
        {
            "question": {
                "en": "What color squares are used in checkers?",
                "es": "¿De qué color son las casillas usadas en damas?",
                "de": "Welche Farbe haben die benutzten Felder beim Damespiel?",
                "nl": "Welke kleur velden worden gebruikt bij dammen?"
            },
            "options": [
                {
                    "en": "Only dark squares",
                    "es": "Solo casillas oscuras",
                    "de": "Nur dunkle Felder",
                    "nl": "Alleen donkere velden"
                },
                {
                    "en": "Only light squares",
                    "es": "Solo casillas claras",
                    "de": "Nur helle Felder",
                    "nl": "Alleen lichte velden"
                },
                {
                    "en": "Both dark and light squares",
                    "es": "Casillas oscuras y claras",
                    "de": "Dunkle und helle Felder",
                    "nl": "Zowel donkere als lichte velden"
                },
                {
                    "en": "Squares of any color",
                    "es": "Casillas de cualquier color",
                    "de": "Felder jeder Farbe",
                    "nl": "Velden van elke kleur"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Checkers is played exclusively on the dark-colored diagonal squares of the board.",
                "es": "Las damas se juegan exclusivamente en las casillas diagonales de color oscuro del tablero.",
                "de": "Dame wird ausschließlich auf den dunklen diagonalen Feldern des Bretts gespielt.",
                "nl": "Dammen wordt uitsluitend gespeeld op de donkere diagonale velden van het bord."
            }
        },
        {
            "question": {
                "en": "What is the best opening strategy for beginners?",
                "es": "¿Cuál es la mejor estrategia de apertura para principiantes?",
                "de": "Was ist die beste Eröffnungsstrategie für Anfänger?",
                "nl": "Wat is de beste openingsstrategie voor beginners?"
            },
            "options": [
                {
                    "en": "Control the center of the board",
                    "es": "Controlar el centro del tablero",
                    "de": "Die Mitte des Bretts kontrollieren",
                    "nl": "Het midden van het bord controleren"
                },
                {
                    "en": "Move all pieces to one side",
                    "es": "Mover todas las piezas a un lado",
                    "de": "Alle Steine auf eine Seite ziehen",
                    "nl": "Alle stukken naar één kant bewegen"
                },
                {
                    "en": "Keep all pieces on the back row",
                    "es": "Mantener todas las piezas en la última fila",
                    "de": "Alle Steine in der letzten Reihe halten",
                    "nl": "Alle stukken op de achterste rij houden"
                },
                {
                    "en": "Rush pieces to become kings",
                    "es": "Apurar piezas para ser reyes",
                    "de": "Steine schnell zu Königen machen",
                    "nl": "Stukken snel naar dam promoveren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Controlling the center gives you more mobility and strategic options, making it the best approach for beginners.",
                "es": "Controlar el centro te da más movilidad y opciones estratégicas, siendo el mejor enfoque para principiantes.",
                "de": "Die Kontrolle der Mitte bietet mehr Mobilität und strategische Optionen, der beste Ansatz für Anfänger.",
                "nl": "Het midden controleren geeft meer mobiliteit en strategische opties, de beste aanpak voor beginners."
            }
        },
        {
            "question": {
                "en": "What happens if a player cannot make a move?",
                "es": "¿Qué pasa si un jugador no puede hacer un movimiento?",
                "de": "Was passiert wenn ein Spieler keinen Zug machen kann?",
                "nl": "Wat gebeurt er als een speler geen zet kan doen?"
            },
            "options": [
                {
                    "en": "That player loses the game",
                    "es": "Ese jugador pierde el juego",
                    "de": "Dieser Spieler verliert das Spiel",
                    "nl": "Die speler verliest het spel"
                },
                {
                    "en": "The game is a draw",
                    "es": "El juego es un empate",
                    "de": "Das Spiel ist unentschieden",
                    "nl": "Het spel is gelijk"
                },
                {
                    "en": "The player skips a turn",
                    "es": "El jugador salta un turno",
                    "de": "Der Spieler setzt einen Zug aus",
                    "nl": "De speler slaat een beurt over"
                },
                {
                    "en": "The player gets an extra piece",
                    "es": "El jugador recibe una pieza extra",
                    "de": "Der Spieler bekommt einen Extrastein",
                    "nl": "De speler krijgt een extra stuk"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "If a player has no legal moves available, whether blocked or out of pieces, that player loses the game.",
                "es": "Si un jugador no tiene movimientos legales disponibles, ya sea bloqueado o sin piezas, ese jugador pierde.",
                "de": "Wenn ein Spieler keine legalen Züge hat, ob blockiert oder ohne Steine, verliert dieser Spieler.",
                "nl": "Als een speler geen legale zetten heeft, of geblokkeerd of zonder stukken, verliest die speler het spel."
            }
        },
        {
            "question": {
                "en": "What is a bridge formation in checkers?",
                "es": "¿Qué es una formación de puente en damas?",
                "de": "Was ist eine Brückenformation beim Damespiel?",
                "nl": "Wat is een brugformatie bij dammen?"
            },
            "options": [
                {
                    "en": "Two pieces protecting each other diagonally",
                    "es": "Dos piezas protegiéndose mutuamente en diagonal",
                    "de": "Zwei Steine die sich diagonal gegenseitig schützen",
                    "nl": "Twee stukken die elkaar diagonaal beschermen"
                },
                {
                    "en": "A line of pieces across the board",
                    "es": "Una línea de piezas a través del tablero",
                    "de": "Eine Reihe von Steinen quer über das Brett",
                    "nl": "Een rij stukken over het bord"
                },
                {
                    "en": "Pieces stacked on top of each other",
                    "es": "Piezas apiladas una sobre otra",
                    "de": "Aufeinander gestapelte Steine",
                    "nl": "Stukken op elkaar gestapeld"
                },
                {
                    "en": "A gap between two groups of pieces",
                    "es": "Un espacio entre dos grupos de piezas",
                    "de": "Eine Lücke zwischen zwei Steingruppen",
                    "nl": "Een opening tussen twee groepen stukken"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A bridge formation has two pieces positioned so they protect each other from being captured diagonally.",
                "es": "Una formación de puente tiene dos piezas posicionadas para protegerse mutuamente de la captura diagonal.",
                "de": "Eine Brückenformation hat zwei Steine, die sich gegenseitig vor diagonalem Schlagen schützen.",
                "nl": "Een brugformatie heeft twee stukken die zo geplaatst zijn dat ze elkaar beschermen tegen diagonaal slaan."
            }
        },
        {
            "question": {
                "en": "Why is it important to protect the back row?",
                "es": "¿Por qué es importante proteger la última fila?",
                "de": "Warum ist es wichtig die letzte Reihe zu schützen?",
                "nl": "Waarom is het belangrijk de achterste rij te beschermen?"
            },
            "options": [
                {
                    "en": "It prevents opponent from getting kings",
                    "es": "Evita que el oponente obtenga reyes",
                    "de": "Es verhindert dass der Gegner Könige bekommt",
                    "nl": "Het voorkomt dat de tegenstander dammen krijgt"
                },
                {
                    "en": "It gives you more pieces",
                    "es": "Te da más piezas",
                    "de": "Es gibt mehr Steine",
                    "nl": "Het geeft je meer stukken"
                },
                {
                    "en": "It makes your pieces stronger",
                    "es": "Hace tus piezas más fuertes",
                    "de": "Es macht die Steine stärker",
                    "nl": "Het maakt je stukken sterker"
                },
                {
                    "en": "It is required by the rules",
                    "es": "Es requerido por las reglas",
                    "de": "Es ist in den Regeln vorgeschrieben",
                    "nl": "Het is vereist door de regels"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Keeping pieces on your back row prevents the opponent from promoting their pieces to kings by reaching your side.",
                "es": "Mantener piezas en tu última fila evita que el oponente promueva sus piezas a reyes al llegar a tu lado.",
                "de": "Steine in der letzten Reihe zu behalten verhindert, dass der Gegner seine Steine zu Königen befördert.",
                "nl": "Stukken op de achterste rij houden voorkomt dat de tegenstander stukken tot dam promoveert aan jouw kant."
            }
        },
        {
            "question": {
                "en": "What is the standard board size for American checkers?",
                "es": "¿Cuál es el tamaño estándar del tablero de damas americanas?",
                "de": "Was ist die Standardgröße des amerikanischen Damebretts?",
                "nl": "Wat is de standaardgrootte van het Amerikaanse dambord?"
            },
            "options": [
                {
                    "en": "8x8 squares",
                    "es": "8x8 casillas",
                    "de": "8x8 Felder",
                    "nl": "8x8 velden"
                },
                {
                    "en": "10x10 squares",
                    "es": "10x10 casillas",
                    "de": "10x10 Felder",
                    "nl": "10x10 velden"
                },
                {
                    "en": "6x6 squares",
                    "es": "6x6 casillas",
                    "de": "6x6 Felder",
                    "nl": "6x6 velden"
                },
                {
                    "en": "12x12 squares",
                    "es": "12x12 casillas",
                    "de": "12x12 Felder",
                    "nl": "12x12 velden"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Standard American and British checkers uses an 8x8 board, the same size as a chess board.",
                "es": "Las damas estándar americanas y británicas usan un tablero de 8x8, del mismo tamaño que un tablero de ajedrez.",
                "de": "Amerikanisches und britisches Standard-Dame verwendet ein 8x8-Brett, die gleiche Größe wie ein Schachbrett.",
                "nl": "Standaard Amerikaans en Brits dammen gebruikt een 8x8 bord, dezelfde grootte als een schaakbord."
            }
        },
        {
            "question": {
                "en": "How many pieces does each player start with?",
                "es": "¿Con cuántas piezas empieza cada jugador?",
                "de": "Mit wie vielen Steinen beginnt jeder Spieler?",
                "nl": "Met hoeveel stukken begint elke speler?"
            },
            "options": [
                {
                    "en": "12 pieces",
                    "es": "12 piezas",
                    "de": "12 Steine",
                    "nl": "12 stukken"
                },
                {
                    "en": "8 pieces",
                    "es": "8 piezas",
                    "de": "8 Steine",
                    "nl": "8 stukken"
                },
                {
                    "en": "16 pieces",
                    "es": "16 piezas",
                    "de": "16 Steine",
                    "nl": "16 stukken"
                },
                {
                    "en": "10 pieces",
                    "es": "10 piezas",
                    "de": "10 Steine",
                    "nl": "10 stukken"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "In standard 8x8 checkers, each player starts with 12 pieces placed on the dark squares of the first three rows.",
                "es": "En damas estándar 8x8, cada jugador comienza con 12 piezas en las casillas oscuras de las tres primeras filas.",
                "de": "Beim Standard-Dame 8x8 beginnt jeder Spieler mit 12 Steinen auf den dunklen Feldern der ersten drei Reihen.",
                "nl": "Bij standaard 8x8 dammen begint elke speler met 12 stukken op de donkere velden van de eerste drie rijen."
            }
        },
        {
            "question": {
                "en": "What is an exchange in checkers?",
                "es": "¿Qué es un intercambio en damas?",
                "de": "Was ist ein Tausch beim Damespiel?",
                "nl": "Wat is een ruil bij dammen?"
            },
            "options": [
                {
                    "en": "Trading one piece for one opponent piece",
                    "es": "Intercambiar una pieza por una del oponente",
                    "de": "Einen Stein gegen einen gegnerischen tauschen",
                    "nl": "Een stuk ruilen tegen een stuk van de tegenstander"
                },
                {
                    "en": "Swapping positions of two of your pieces",
                    "es": "Intercambiar posiciones de dos de tus piezas",
                    "de": "Positionen zweier eigener Steine tauschen",
                    "nl": "Posities van twee eigen stukken verwisselen"
                },
                {
                    "en": "Giving a piece to the opponent",
                    "es": "Dar una pieza al oponente",
                    "de": "Dem Gegner einen Stein geben",
                    "nl": "Een stuk aan de tegenstander geven"
                },
                {
                    "en": "Replacing a piece with a king",
                    "es": "Reemplazar una pieza con un rey",
                    "de": "Einen Stein durch einen König ersetzen",
                    "nl": "Een stuk vervangen door een dam"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "An exchange occurs when both players lose one piece each through captures, maintaining equal material.",
                "es": "Un intercambio ocurre cuando ambos jugadores pierden una pieza cada uno mediante capturas, manteniendo material igual.",
                "de": "Ein Tausch tritt auf, wenn beide Spieler je einen Stein durch Schlagen verlieren und gleiches Material beibehalten.",
                "nl": "Een ruil vindt plaats wanneer beide spelers elk een stuk verliezen door slaan, waardoor gelijk materiaal behouden blijft."
            }
        },
        {
            "question": {
                "en": "What is a trap in checkers?",
                "es": "¿Qué es una trampa en damas?",
                "de": "Was ist eine Falle beim Damespiel?",
                "nl": "Wat is een val bij dammen?"
            },
            "options": [
                {
                    "en": "A position that forces a bad capture",
                    "es": "Una posición que fuerza una mala captura",
                    "de": "Eine Stellung die einen schlechten Schlag erzwingt",
                    "nl": "Een positie die een slechte slag afdwingt"
                },
                {
                    "en": "A piece that cannot move",
                    "es": "Una pieza que no puede moverse",
                    "de": "Ein Stein der sich nicht bewegen kann",
                    "nl": "Een stuk dat niet kan bewegen"
                },
                {
                    "en": "A square where no piece can land",
                    "es": "Una casilla donde ninguna pieza puede aterrizar",
                    "de": "Ein Feld auf dem kein Stein landen kann",
                    "nl": "Een veld waar geen stuk kan landen"
                },
                {
                    "en": "A king surrounded by enemy pieces",
                    "es": "Un rey rodeado de piezas enemigas",
                    "de": "Ein König umgeben von gegnerischen Steinen",
                    "nl": "Een dam omringd door vijandelijke stukken"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A trap is a tactical setup where the opponent is forced into making a capture that leads to a worse position.",
                "es": "Una trampa es una configuración táctica donde el oponente se ve forzado a una captura que lleva a peor posición.",
                "de": "Eine Falle ist eine taktische Aufstellung, bei der der Gegner zu einem Schlag gezwungen wird, der zu schlechterer Stellung führt.",
                "nl": "Een val is een tactische opstelling waarbij de tegenstander gedwongen wordt tot een slag die tot een slechtere positie leidt."
            }
        },
        {
            "question": {
                "en": "What advantage does having more pieces give you?",
                "es": "¿Qué ventaja te da tener más piezas?",
                "de": "Welchen Vorteil gibt es mehr Steine zu haben?",
                "nl": "Welk voordeel geeft het meer stukken te hebben?"
            },
            "options": [
                {
                    "en": "More options for moves and captures",
                    "es": "Más opciones de movimientos y capturas",
                    "de": "Mehr Optionen für Züge und Schlagen",
                    "nl": "Meer opties voor zetten en slagen"
                },
                {
                    "en": "Pieces become stronger automatically",
                    "es": "Las piezas se vuelven más fuertes automáticamente",
                    "de": "Steine werden automatisch stärker",
                    "nl": "Stukken worden automatisch sterker"
                },
                {
                    "en": "You can skip turns",
                    "es": "Puedes saltarte turnos",
                    "de": "Man kann Züge überspringen",
                    "nl": "Je kunt beurten overslaan"
                },
                {
                    "en": "Your pieces move faster",
                    "es": "Tus piezas se mueven más rápido",
                    "de": "Die Steine ziehen schneller",
                    "nl": "Je stukken bewegen sneller"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Having more pieces gives you more movement options and capture opportunities, creating a material advantage.",
                "es": "Tener más piezas te da más opciones de movimiento y oportunidades de captura, creando ventaja material.",
                "de": "Mehr Steine zu haben bietet mehr Zugmöglichkeiten und Schlagchancen, was einen materiellen Vorteil schafft.",
                "nl": "Meer stukken hebben geeft meer bewegingsopties en slagkansen, wat een materieel voordeel creëert."
            }
        },
        {
            "question": {
                "en": "What is the purpose of advancing pieces together?",
                "es": "¿Cuál es el propósito de avanzar piezas juntas?",
                "de": "Was ist der Zweck Steine zusammen vorzurücken?",
                "nl": "Wat is het doel van samen stukken opschuiven?"
            },
            "options": [
                {
                    "en": "They can protect each other from capture",
                    "es": "Pueden protegerse mutuamente de la captura",
                    "de": "Sie können sich gegenseitig vor Schlagen schützen",
                    "nl": "Ze kunnen elkaar beschermen tegen slaan"
                },
                {
                    "en": "They move faster in groups",
                    "es": "Se mueven más rápido en grupo",
                    "de": "Sie ziehen schneller in Gruppen",
                    "nl": "Ze bewegen sneller in groepen"
                },
                {
                    "en": "They become kings sooner",
                    "es": "Se convierten en reyes antes",
                    "de": "Sie werden schneller zu Königen",
                    "nl": "Ze worden sneller dam"
                },
                {
                    "en": "They can capture multiple pieces",
                    "es": "Pueden capturar múltiples piezas",
                    "de": "Sie können mehrere Steine schlagen",
                    "nl": "Ze kunnen meerdere stukken slaan"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Advancing pieces together creates mutual protection, making it harder for the opponent to capture them safely.",
                "es": "Avanzar piezas juntas crea protección mutua, haciendo más difícil que el oponente las capture de forma segura.",
                "de": "Zusammen vorrückende Steine schaffen gegenseitigen Schutz, was es dem Gegner erschwert, sie sicher zu schlagen.",
                "nl": "Samen stukken opschuiven creëert wederzijdse bescherming, wat het moeilijker maakt om ze veilig te slaan."
            }
        },
        {
            "question": {
                "en": "What does positional advantage mean in checkers?",
                "es": "¿Qué significa ventaja posicional en damas?",
                "de": "Was bedeutet Stellungsvorteil beim Damespiel?",
                "nl": "Wat betekent positioneel voordeel bij dammen?"
            },
            "options": [
                {
                    "en": "Your pieces control key squares on the board",
                    "es": "Tus piezas controlan casillas clave del tablero",
                    "de": "Deine Steine kontrollieren wichtige Felder",
                    "nl": "Je stukken controleren belangrijke velden"
                },
                {
                    "en": "You have more pieces than your opponent",
                    "es": "Tienes más piezas que tu oponente",
                    "de": "Du hast mehr Steine als dein Gegner",
                    "nl": "Je hebt meer stukken dan je tegenstander"
                },
                {
                    "en": "Your pieces are all kings",
                    "es": "Todas tus piezas son reyes",
                    "de": "Alle deine Steine sind Könige",
                    "nl": "Al je stukken zijn dammen"
                },
                {
                    "en": "You moved first in the game",
                    "es": "Moviste primero en el juego",
                    "de": "Du hast im Spiel zuerst gezogen",
                    "nl": "Je hebt als eerste gezet in het spel"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Positional advantage means your pieces occupy strong squares that give you control and limit opponent options.",
                "es": "Ventaja posicional significa que tus piezas ocupan casillas fuertes que te dan control y limitan opciones del oponente.",
                "de": "Stellungsvorteil bedeutet, dass deine Steine starke Felder besetzen, die Kontrolle geben und den Gegner einschränken.",
                "nl": "Positioneel voordeel betekent dat je stukken sterke velden bezetten die controle geven en de tegenstander beperken."
            }
        },
        {
            "question": {
                "en": "What is a shot in checkers terminology?",
                "es": "¿Qué es un tiro en terminología de damas?",
                "de": "Was ist ein Schuss in der Dameterminologie?",
                "nl": "Wat is een schot in dammenterminologie?"
            },
            "options": [
                {
                    "en": "A forced sequence of captures",
                    "es": "Una secuencia forzada de capturas",
                    "de": "Eine erzwungene Schlagsequenz",
                    "nl": "Een gedwongen reeks van slagen"
                },
                {
                    "en": "A quick move to escape",
                    "es": "Un movimiento rápido para escapar",
                    "de": "Ein schneller Zug zum Entkommen",
                    "nl": "Een snelle zet om te ontsnappen"
                },
                {
                    "en": "Removing a piece from play",
                    "es": "Retirar una pieza del juego",
                    "de": "Einen Stein aus dem Spiel nehmen",
                    "nl": "Een stuk uit het spel verwijderen"
                },
                {
                    "en": "Moving to the center square",
                    "es": "Mover a la casilla central",
                    "de": "Zum Mittelfeld ziehen",
                    "nl": "Naar het middenveld bewegen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A shot is a tactical combination involving a sacrifice that forces a sequence of captures, usually gaining material.",
                "es": "Un tiro es una combinación táctica con un sacrificio que fuerza una secuencia de capturas, generalmente ganando material.",
                "de": "Ein Schuss ist eine taktische Kombination mit einem Opfer, das eine Schlagsequenz erzwingt und meist Material gewinnt.",
                "nl": "Een schot is een tactische combinatie met een offer dat een reeks slagen afdwingt, meestal met materiaalwinst."
            }
        },
        {
            "question": {
                "en": "Why should you avoid moving side pieces early?",
                "es": "¿Por qué deberías evitar mover piezas laterales temprano?",
                "de": "Warum sollte man Randsteine früh nicht ziehen?",
                "nl": "Waarom moet je randstukken vroeg niet bewegen?"
            },
            "options": [
                {
                    "en": "Side pieces have fewer movement options",
                    "es": "Las piezas laterales tienen menos opciones de movimiento",
                    "de": "Randsteine haben weniger Zugmöglichkeiten",
                    "nl": "Randstukken hebben minder bewegingsopties"
                },
                {
                    "en": "Side pieces cannot become kings",
                    "es": "Las piezas laterales no pueden ser reyes",
                    "de": "Randsteine können keine Könige werden",
                    "nl": "Randstukken kunnen geen dam worden"
                },
                {
                    "en": "Side pieces are worth less",
                    "es": "Las piezas laterales valen menos",
                    "de": "Randsteine sind weniger wert",
                    "nl": "Randstukken zijn minder waard"
                },
                {
                    "en": "Side pieces cannot capture",
                    "es": "Las piezas laterales no pueden capturar",
                    "de": "Randsteine können nicht schlagen",
                    "nl": "Randstukken kunnen niet slaan"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Pieces on the sides have fewer diagonal movement options, making them less flexible in the opening phase.",
                "es": "Las piezas en los lados tienen menos opciones diagonales, haciéndolas menos flexibles en la fase de apertura.",
                "de": "Steine am Rand haben weniger diagonale Zugmöglichkeiten, was sie in der Eröffnung weniger flexibel macht.",
                "nl": "Stukken aan de zijkant hebben minder diagonale opties, waardoor ze minder flexibel zijn in de openingsfase."
            }
        },
        {
            "question": {
                "en": "What is a two-for-one trade in checkers?",
                "es": "¿Qué es un intercambio de dos por uno en damas?",
                "de": "Was ist ein Zwei-für-Eins-Tausch beim Damespiel?",
                "nl": "Wat is een twee-voor-één ruil bij dammen?"
            },
            "options": [
                {
                    "en": "Sacrificing one piece to capture two",
                    "es": "Sacrificar una pieza para capturar dos",
                    "de": "Einen Stein opfern um zwei zu schlagen",
                    "nl": "Een stuk offeren om er twee te slaan"
                },
                {
                    "en": "Moving two pieces at once",
                    "es": "Mover dos piezas a la vez",
                    "de": "Zwei Steine gleichzeitig ziehen",
                    "nl": "Twee stukken tegelijk bewegen"
                },
                {
                    "en": "Having two kings versus one",
                    "es": "Tener dos reyes contra uno",
                    "de": "Zwei Könige gegen einen haben",
                    "nl": "Twee dammen tegen één hebben"
                },
                {
                    "en": "Capturing on both sides",
                    "es": "Capturar en ambos lados",
                    "de": "Auf beiden Seiten schlagen",
                    "nl": "Aan beide kanten slaan"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A two-for-one trade is a tactical exchange where you sacrifice one piece to capture two opponent pieces.",
                "es": "Un intercambio de dos por uno es un cambio táctico donde sacrificas una pieza para capturar dos del oponente.",
                "de": "Ein Zwei-für-Eins-Tausch ist ein taktischer Abtausch, bei dem man einen Stein opfert, um zwei gegnerische zu schlagen.",
                "nl": "Een twee-voor-één ruil is een tactische uitwisseling waarbij je één stuk offert om twee stukken te slaan."
            }
        },
        {
            "question": {
                "en": "Which player moves first in standard checkers?",
                "es": "¿Qué jugador mueve primero en damas estándar?",
                "de": "Welcher Spieler zieht zuerst beim Standard-Damespiel?",
                "nl": "Welke speler beweegt eerst bij standaard dammen?"
            },
            "options": [
                {
                    "en": "The player with dark pieces",
                    "es": "El jugador con piezas oscuras",
                    "de": "Der Spieler mit dunklen Steinen",
                    "nl": "De speler met donkere stukken"
                },
                {
                    "en": "The player with light pieces",
                    "es": "El jugador con piezas claras",
                    "de": "Der Spieler mit hellen Steinen",
                    "nl": "De speler met lichte stukken"
                },
                {
                    "en": "The youngest player",
                    "es": "El jugador más joven",
                    "de": "Der jüngste Spieler",
                    "nl": "De jongste speler"
                },
                {
                    "en": "It is decided by coin toss",
                    "es": "Se decide con moneda al aire",
                    "de": "Es wird per Münzwurf entschieden",
                    "nl": "Het wordt bepaald door muntopgooien"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "In standard American checkers, the player with the dark-colored pieces traditionally moves first.",
                "es": "En damas estándar americanas, el jugador con piezas de color oscuro tradicionalmente mueve primero.",
                "de": "Beim amerikanischen Standard-Dame zieht traditionell der Spieler mit den dunklen Steinen zuerst.",
                "nl": "Bij standaard Amerikaans dammen beweegt traditioneel de speler met de donkere stukken eerst."
            }
        },
        {
            "question": {
                "en": "What is a draw in checkers?",
                "es": "¿Qué es un empate en damas?",
                "de": "Was ist ein Remis beim Damespiel?",
                "nl": "Wat is een remise bij dammen?"
            },
            "options": [
                {
                    "en": "Neither player can win the game",
                    "es": "Ningún jugador puede ganar el juego",
                    "de": "Keiner der Spieler kann das Spiel gewinnen",
                    "nl": "Geen van beide spelers kan het spel winnen"
                },
                {
                    "en": "Both players lose",
                    "es": "Ambos jugadores pierden",
                    "de": "Beide Spieler verlieren",
                    "nl": "Beide spelers verliezen"
                },
                {
                    "en": "The game must restart",
                    "es": "El juego debe reiniciarse",
                    "de": "Das Spiel muss neu beginnen",
                    "nl": "Het spel moet opnieuw beginnen"
                },
                {
                    "en": "One player gives up",
                    "es": "Un jugador se rinde",
                    "de": "Ein Spieler gibt auf",
                    "nl": "Een speler geeft op"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A draw occurs when neither player can force a win, often when both have kings and no progress can be made.",
                "es": "Un empate ocurre cuando ningún jugador puede forzar la victoria, a menudo con reyes sin poder progresar.",
                "de": "Ein Remis tritt auf, wenn keiner einen Gewinn erzwingen kann, oft wenn beide Könige haben ohne Fortschritt.",
                "nl": "Een remise treedt op wanneer niemand kan winnen, vaak als beiden dammen hebben zonder vooruitgang."
            }
        },
        {
            "question": {
                "en": "What is the value of controlling the center squares?",
                "es": "¿Cuál es el valor de controlar las casillas centrales?",
                "de": "Welchen Wert hat die Kontrolle der Mittelfelder?",
                "nl": "Wat is de waarde van het controleren van de middelste velden?"
            },
            "options": [
                {
                    "en": "More movement options in all directions",
                    "es": "Más opciones de movimiento en todas las direcciones",
                    "de": "Mehr Zugmöglichkeiten in alle Richtungen",
                    "nl": "Meer bewegingsopties in alle richtingen"
                },
                {
                    "en": "Pieces in the center cannot be captured",
                    "es": "Las piezas en el centro no pueden ser capturadas",
                    "de": "Steine in der Mitte können nicht geschlagen werden",
                    "nl": "Stukken in het midden kunnen niet geslagen worden"
                },
                {
                    "en": "Center pieces automatically become kings",
                    "es": "Las piezas centrales se vuelven reyes automáticamente",
                    "de": "Mittelsteine werden automatisch Könige",
                    "nl": "Middelste stukken worden automatisch dam"
                },
                {
                    "en": "Center squares are worth extra points",
                    "es": "Las casillas centrales valen puntos extra",
                    "de": "Mittelfelder geben Extrapunkte",
                    "nl": "Middelste velden zijn extra punten waard"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Center squares offer the most movement options because pieces there can move in multiple diagonal directions.",
                "es": "Las casillas centrales ofrecen más opciones de movimiento porque las piezas pueden moverse en múltiples diagonales.",
                "de": "Mittelfelder bieten die meisten Zugmöglichkeiten, da Steine dort in mehrere diagonale Richtungen ziehen können.",
                "nl": "Middelste velden bieden de meeste opties omdat stukken daar in meerdere diagonale richtingen kunnen bewegen."
            }
        },
        {
            "question": {
                "en": "What is a blocked position in checkers?",
                "es": "¿Qué es una posición bloqueada en damas?",
                "de": "Was ist eine blockierte Stellung beim Damespiel?",
                "nl": "Wat is een geblokkeerde positie bij dammen?"
            },
            "options": [
                {
                    "en": "When a piece cannot move in any direction",
                    "es": "Cuando una pieza no puede moverse en ninguna dirección",
                    "de": "Wenn ein Stein in keine Richtung ziehen kann",
                    "nl": "Wanneer een stuk in geen richting kan bewegen"
                },
                {
                    "en": "When the board is full",
                    "es": "Cuando el tablero está lleno",
                    "de": "Wenn das Brett voll ist",
                    "nl": "Wanneer het bord vol is"
                },
                {
                    "en": "When all pieces are kings",
                    "es": "Cuando todas las piezas son reyes",
                    "de": "Wenn alle Steine Könige sind",
                    "nl": "Wanneer alle stukken dammen zijn"
                },
                {
                    "en": "When no captures are possible",
                    "es": "Cuando no hay capturas posibles",
                    "de": "Wenn kein Schlagen möglich ist",
                    "nl": "Wanneer geen slagen mogelijk zijn"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A blocked position occurs when a piece is surrounded and has no available squares to move to diagonally.",
                "es": "Una posición bloqueada ocurre cuando una pieza está rodeada y no tiene casillas disponibles para moverse.",
                "de": "Eine blockierte Stellung tritt auf, wenn ein Stein umzingelt ist und keine Felder zum Ziehen hat.",
                "nl": "Een geblokkeerde positie treedt op wanneer een stuk omsingeld is en geen velden heeft om naartoe te bewegen."
            }
        },
        {
            "question": {
                "en": "What happens in a two kings versus one king endgame?",
                "es": "¿Qué pasa en un final de dos reyes contra un rey?",
                "de": "Was passiert im Endspiel zwei Könige gegen einen?",
                "nl": "Wat gebeurt er in een eindspel twee dammen tegen één?"
            },
            "options": [
                {
                    "en": "Two kings usually win with correct play",
                    "es": "Dos reyes generalmente ganan con juego correcto",
                    "de": "Zwei Könige gewinnen meist bei korrektem Spiel",
                    "nl": "Twee dammen winnen meestal bij correct spel"
                },
                {
                    "en": "It is always a draw",
                    "es": "Siempre es empate",
                    "de": "Es ist immer Remis",
                    "nl": "Het is altijd remise"
                },
                {
                    "en": "One king has the advantage",
                    "es": "Un rey tiene la ventaja",
                    "de": "Ein König hat den Vorteil",
                    "nl": "Één dam heeft het voordeel"
                },
                {
                    "en": "The game must be restarted",
                    "es": "El juego debe reiniciarse",
                    "de": "Das Spiel muss neu beginnen",
                    "nl": "Het spel moet opnieuw beginnen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "With two kings against one, the side with two kings can usually force a win with accurate play and technique.",
                "es": "Con dos reyes contra uno, el lado con dos reyes generalmente puede forzar la victoria con juego preciso.",
                "de": "Mit zwei Königen gegen einen kann die Seite mit zwei Königen den Gewinn meist mit präzisem Spiel erzwingen.",
                "nl": "Met twee dammen tegen één kan de kant met twee dammen meestal de winst afdwingen met nauwkeurig spel."
            }
        },
        {
            "question": {
                "en": "What is the purpose of a waiting move?",
                "es": "¿Cuál es el propósito de un movimiento de espera?",
                "de": "Was ist der Zweck eines Wartezugs?",
                "nl": "Wat is het doel van een wachtzet?"
            },
            "options": [
                {
                    "en": "To force opponent into an unfavorable move",
                    "es": "Forzar al oponente a un movimiento desfavorable",
                    "de": "Den Gegner zu einem ungünstigen Zug zwingen",
                    "nl": "De tegenstander dwingen tot een ongunstige zet"
                },
                {
                    "en": "To skip your turn",
                    "es": "Para saltar tu turno",
                    "de": "Um den Zug auszusetzen",
                    "nl": "Om je beurt over te slaan"
                },
                {
                    "en": "To reset the game",
                    "es": "Para reiniciar el juego",
                    "de": "Um das Spiel zurückzusetzen",
                    "nl": "Om het spel te resetten"
                },
                {
                    "en": "To gain an extra piece",
                    "es": "Para ganar una pieza extra",
                    "de": "Um einen Extrastein zu bekommen",
                    "nl": "Om een extra stuk te krijgen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A waiting move forces your opponent into a less favorable position by making them move when they prefer not to.",
                "es": "Un movimiento de espera fuerza al oponente a posición menos favorable obligándole a mover cuando preferiría no.",
                "de": "Ein Wartezug zwingt den Gegner in eine ungünstigere Position, indem er ziehen muss, obwohl er nicht möchte.",
                "nl": "Een wachtzet dwingt je tegenstander in een minder gunstige positie door hem te laten bewegen wanneer hij niet wil."
            }
        },
        {
            "question": {
                "en": "What makes a king more valuable than a regular piece?",
                "es": "¿Qué hace a un rey más valioso que una pieza normal?",
                "de": "Was macht einen König wertvoller als einen normalen Stein?",
                "nl": "Wat maakt een dam waardevoller dan een gewoon stuk?"
            },
            "options": [
                {
                    "en": "It can move in four diagonal directions",
                    "es": "Puede moverse en cuatro direcciones diagonales",
                    "de": "Er kann in vier diagonale Richtungen ziehen",
                    "nl": "Het kan in vier diagonale richtingen bewegen"
                },
                {
                    "en": "It can jump over multiple pieces at once",
                    "es": "Puede saltar sobre múltiples piezas a la vez",
                    "de": "Er kann über mehrere Steine gleichzeitig springen",
                    "nl": "Het kan over meerdere stukken tegelijk springen"
                },
                {
                    "en": "It cannot be captured",
                    "es": "No puede ser capturada",
                    "de": "Er kann nicht geschlagen werden",
                    "nl": "Het kan niet geslagen worden"
                },
                {
                    "en": "It is worth three regular pieces",
                    "es": "Vale tres piezas regulares",
                    "de": "Er ist drei normale Steine wert",
                    "nl": "Het is drie gewone stukken waard"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A king can move in all four diagonal directions instead of just two, giving it much greater flexibility.",
                "es": "Un rey puede moverse en las cuatro direcciones diagonales en lugar de solo dos, dándole mayor flexibilidad.",
                "de": "Ein König kann in alle vier diagonalen Richtungen ziehen statt nur zwei, was viel mehr Flexibilität gibt.",
                "nl": "Een dam kan in alle vier diagonale richtingen bewegen in plaats van twee, wat veel meer flexibiliteit geeft."
            }
        },
        {
            "question": {
                "en": "What is the 20-move draw rule in some variants?",
                "es": "¿Qué es la regla de empate de 20 movimientos?",
                "de": "Was ist die 20-Züge-Remisregel bei einigen Varianten?",
                "nl": "Wat is de 20-zetten remiseregel bij sommige varianten?"
            },
            "options": [
                {
                    "en": "Draw if no capture in 20 moves",
                    "es": "Empate si no hay captura en 20 movimientos",
                    "de": "Remis wenn in 20 Zügen kein Schlagen erfolgt",
                    "nl": "Remise als er in 20 zetten niet geslagen wordt"
                },
                {
                    "en": "Game ends after 20 total moves",
                    "es": "El juego termina después de 20 movimientos",
                    "de": "Spiel endet nach 20 Gesamtzügen",
                    "nl": "Spel eindigt na 20 totale zetten"
                },
                {
                    "en": "Each player gets only 20 moves",
                    "es": "Cada jugador solo tiene 20 movimientos",
                    "de": "Jeder Spieler hat nur 20 Züge",
                    "nl": "Elke speler heeft slechts 20 zetten"
                },
                {
                    "en": "After 20 moves the board rotates",
                    "es": "Después de 20 movimientos el tablero rota",
                    "de": "Nach 20 Zügen wird das Brett gedreht",
                    "nl": "Na 20 zetten wordt het bord gedraaid"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The 20-move rule declares a draw if no pieces are captured within 20 consecutive moves, preventing endless games.",
                "es": "La regla de 20 movimientos declara empate si no se capturan piezas en 20 movimientos consecutivos.",
                "de": "Die 20-Züge-Regel erklärt Remis, wenn in 20 Zügen kein Stein geschlagen wird, um endlose Spiele zu verhindern.",
                "nl": "De 20-zettenregel verklaart remise als er in 20 zetten geen stukken geslagen worden, om eindeloze spellen te voorkomen."
            }
        },
        {
            "question": {
                "en": "Why is piece development important in the opening?",
                "es": "¿Por qué es importante el desarrollo en la apertura?",
                "de": "Warum ist Steinentwicklung in der Eröffnung wichtig?",
                "nl": "Waarom is stukkenontwikkeling belangrijk in de opening?"
            },
            "options": [
                {
                    "en": "It gives pieces space to maneuver",
                    "es": "Da espacio a las piezas para maniobrar",
                    "de": "Es gibt den Steinen Raum zum Manövrieren",
                    "nl": "Het geeft stukken ruimte om te manoeuvreren"
                },
                {
                    "en": "It scores bonus points",
                    "es": "Otorga puntos bonus",
                    "de": "Es gibt Bonuspunkte",
                    "nl": "Het geeft bonuspunten"
                },
                {
                    "en": "It prevents opponent from moving",
                    "es": "Impide que el oponente se mueva",
                    "de": "Es verhindert dass der Gegner zieht",
                    "nl": "Het voorkomt dat de tegenstander beweegt"
                },
                {
                    "en": "It makes pieces invincible",
                    "es": "Hace las piezas invencibles",
                    "de": "Es macht Steine unbesiegbar",
                    "nl": "Het maakt stukken onoverwinnelijk"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Developing pieces in the opening gives them room to maneuver, creating tactical opportunities for later in the game.",
                "es": "Desarrollar piezas en la apertura les da espacio para maniobrar, creando oportunidades tácticas para después.",
                "de": "Steinentwicklung in der Eröffnung gibt Raum zum Manövrieren und schafft taktische Chancen für später.",
                "nl": "Stukkenontwikkeling in de opening geeft ruimte om te manoeuvreren en creëert tactische kansen voor later."
            }
        },
        {
            "question": {
                "en": "What does material advantage mean in checkers?",
                "es": "¿Qué significa ventaja material en damas?",
                "de": "Was bedeutet Materialvorteil beim Damespiel?",
                "nl": "Wat betekent materieel voordeel bij dammen?"
            },
            "options": [
                {
                    "en": "Having more pieces than your opponent",
                    "es": "Tener más piezas que tu oponente",
                    "de": "Mehr Steine als der Gegner haben",
                    "nl": "Meer stukken hebben dan je tegenstander"
                },
                {
                    "en": "Having better board position",
                    "es": "Tener mejor posición en el tablero",
                    "de": "Bessere Brettposition haben",
                    "nl": "Betere bordpositie hebben"
                },
                {
                    "en": "Moving first in the game",
                    "es": "Mover primero en el juego",
                    "de": "Als Erster im Spiel ziehen",
                    "nl": "Als eerste bewegen in het spel"
                },
                {
                    "en": "Having all pieces as kings",
                    "es": "Tener todas las piezas como reyes",
                    "de": "Alle Steine als Könige haben",
                    "nl": "Alle stukken als dammen hebben"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Material advantage means having more pieces or kings than your opponent, usually indicating a winning position.",
                "es": "Ventaja material significa tener más piezas o reyes que tu oponente, indicando una posición ganadora.",
                "de": "Materialvorteil bedeutet mehr Steine oder Könige als der Gegner zu haben, was meist auf eine Gewinnstellung hinweist.",
                "nl": "Materieel voordeel betekent meer stukken of dammen dan je tegenstander, wat meestal op een winnende positie wijst."
            }
        },
        {
            "question": {
                "en": "What is a tempo in checkers?",
                "es": "¿Qué es un tempo en damas?",
                "de": "Was ist ein Tempo beim Damespiel?",
                "nl": "Wat is een tempo bij dammen?"
            },
            "options": [
                {
                    "en": "A unit of time measured in moves",
                    "es": "Una unidad de tiempo medida en movimientos",
                    "de": "Eine Zeiteinheit gemessen in Zügen",
                    "nl": "Een tijdseenheid gemeten in zetten"
                },
                {
                    "en": "The speed of piece movement",
                    "es": "La velocidad de movimiento de piezas",
                    "de": "Die Geschwindigkeit der Steinbewegung",
                    "nl": "De snelheid van stukbewegingen"
                },
                {
                    "en": "A special type of capture",
                    "es": "Un tipo especial de captura",
                    "de": "Eine spezielle Art des Schlagens",
                    "nl": "Een speciaal type slag"
                },
                {
                    "en": "The starting signal of a game",
                    "es": "La señal de inicio de un juego",
                    "de": "Das Startsignal eines Spiels",
                    "nl": "Het startsignaal van een spel"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Tempo refers to the timing advantage in moves. Having a tempo advantage means being able to force the opponent to respond.",
                "es": "Tempo se refiere a la ventaja de tiempo en movimientos. Ventaja de tempo significa poder forzar respuesta del oponente.",
                "de": "Tempo bezieht sich auf den Zeitvorteil bei Zügen. Tempovorteil bedeutet, den Gegner zum Reagieren zwingen zu können.",
                "nl": "Tempo verwijst naar het tijdsvoordeel in zetten. Tempovoordeel betekent de tegenstander kunnen dwingen te reageren."
            }
        },
        {
            "question": {
                "en": "How can you prevent the opponent from getting a king?",
                "es": "¿Cómo puedes evitar que el oponente obtenga un rey?",
                "de": "Wie verhindert man dass der Gegner einen König bekommt?",
                "nl": "Hoe voorkom je dat de tegenstander een dam krijgt?"
            },
            "options": [
                {
                    "en": "Block the path to your back row",
                    "es": "Bloquear el camino a tu última fila",
                    "de": "Den Weg zur letzten Reihe blockieren",
                    "nl": "Het pad naar je achterste rij blokkeren"
                },
                {
                    "en": "Capture all opponent pieces immediately",
                    "es": "Capturar todas las piezas del oponente de inmediato",
                    "de": "Alle gegnerischen Steine sofort schlagen",
                    "nl": "Alle stukken van de tegenstander meteen slaan"
                },
                {
                    "en": "Move your back row pieces forward",
                    "es": "Mover las piezas de la última fila hacia adelante",
                    "de": "Die Steine der letzten Reihe vorwärts ziehen",
                    "nl": "De stukken van de achterste rij vooruit bewegen"
                },
                {
                    "en": "Place pieces in the corners",
                    "es": "Colocar piezas en las esquinas",
                    "de": "Steine in die Ecken setzen",
                    "nl": "Stukken in de hoeken plaatsen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Keeping pieces on your back row or blocking diagonal paths prevents opponents from promoting pieces to kings.",
                "es": "Mantener piezas en tu última fila o bloquear caminos diagonales evita que oponentes promuevan piezas a reyes.",
                "de": "Steine in der letzten Reihe halten oder Diagonalwege blockieren verhindert die Beförderung gegnerischer Steine.",
                "nl": "Stukken op je achterste rij houden of diagonale paden blokkeren voorkomt dat tegenstanders tot dam promoveren."
            }
        },
        {
            "question": {
                "en": "When is it beneficial to trade pieces?",
                "es": "¿Cuándo es beneficioso intercambiar piezas?",
                "de": "Wann ist es vorteilhaft Steine zu tauschen?",
                "nl": "Wanneer is het voordelig stukken te ruilen?"
            },
            "options": [
                {
                    "en": "When you have a material advantage",
                    "es": "Cuando tienes ventaja material",
                    "de": "Wenn man Materialvorteil hat",
                    "nl": "Wanneer je materieel voordeel hebt"
                },
                {
                    "en": "At the start of every game",
                    "es": "Al comienzo de cada juego",
                    "de": "Am Anfang jedes Spiels",
                    "nl": "Aan het begin van elk spel"
                },
                {
                    "en": "When you are losing",
                    "es": "Cuando estás perdiendo",
                    "de": "Wenn man verliert",
                    "nl": "Wanneer je aan het verliezen bent"
                },
                {
                    "en": "Never during any game",
                    "es": "Nunca durante ningún juego",
                    "de": "Nie während eines Spiels",
                    "nl": "Nooit tijdens een spel"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Trading pieces when ahead in material increases your relative advantage, making it easier to win the endgame.",
                "es": "Intercambiar piezas con ventaja material aumenta tu ventaja relativa, facilitando ganar el final.",
                "de": "Steine tauschen bei Materialvorteil erhöht den relativen Vorteil und erleichtert das Gewinnen des Endspiels.",
                "nl": "Stukken ruilen bij materieel voordeel vergroot je relatieve voordeel en maakt het eindspel winnen makkelijker."
            }
        },
        {
            "question": {
                "en": "What is a crowning square in checkers?",
                "es": "¿Qué es una casilla de coronación en damas?",
                "de": "Was ist ein Krönungsfeld beim Damespiel?",
                "nl": "Wat is een kroningsveld bij dammen?"
            },
            "options": [
                {
                    "en": "Any square on the opponent's back row",
                    "es": "Cualquier casilla en la última fila del oponente",
                    "de": "Jedes Feld in der letzten Reihe des Gegners",
                    "nl": "Elk veld op de achterste rij van de tegenstander"
                },
                {
                    "en": "The center square of the board",
                    "es": "La casilla central del tablero",
                    "de": "Das Mittelfeld des Bretts",
                    "nl": "Het middenveld van het bord"
                },
                {
                    "en": "A special marked square",
                    "es": "Una casilla especial marcada",
                    "de": "Ein speziell markiertes Feld",
                    "nl": "Een speciaal gemarkeerd veld"
                },
                {
                    "en": "The starting square of each piece",
                    "es": "La casilla inicial de cada pieza",
                    "de": "Das Startfeld jedes Steins",
                    "nl": "Het startveld van elk stuk"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A crowning square is any dark square on the opponent's back row where a regular piece gets promoted to a king.",
                "es": "Una casilla de coronación es cualquier casilla oscura en la última fila del oponente donde se promueve a rey.",
                "de": "Ein Krönungsfeld ist jedes dunkle Feld in der letzten Reihe des Gegners, wo ein Stein zum König wird.",
                "nl": "Een kroningsveld is elk donker veld op de achterste rij van de tegenstander waar een stuk tot dam wordt."
            }
        },
        {
            "question": {
                "en": "What role do diagonal lines play in checkers?",
                "es": "¿Qué papel juegan las líneas diagonales en damas?",
                "de": "Welche Rolle spielen Diagonalen beim Damespiel?",
                "nl": "Welke rol spelen diagonale lijnen bij dammen?"
            },
            "options": [
                {
                    "en": "They are the only paths pieces can travel",
                    "es": "Son los únicos caminos que las piezas pueden recorrer",
                    "de": "Sie sind die einzigen Wege für Steine",
                    "nl": "Het zijn de enige paden waarover stukken bewegen"
                },
                {
                    "en": "They determine piece color",
                    "es": "Determinan el color de la pieza",
                    "de": "Sie bestimmen die Steinfarbe",
                    "nl": "Ze bepalen de kleur van het stuk"
                },
                {
                    "en": "They indicate scoring zones",
                    "es": "Indican zonas de puntuación",
                    "de": "Sie zeigen Wertungszonen an",
                    "nl": "Ze geven scorezones aan"
                },
                {
                    "en": "They separate the two player sides",
                    "es": "Separan los dos lados de los jugadores",
                    "de": "Sie trennen die beiden Spielerseiten",
                    "nl": "Ze scheiden de twee spelerzijden"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Diagonal lines are the movement paths in checkers. All pieces move and capture along diagonals on dark squares.",
                "es": "Las líneas diagonales son los caminos de movimiento. Todas las piezas se mueven y capturan por diagonales oscuras.",
                "de": "Diagonalen sind die Zugwege beim Damespiel. Alle Steine ziehen und schlagen entlang der Diagonalen.",
                "nl": "Diagonale lijnen zijn de bewegingspaden bij dammen. Alle stukken bewegen en slaan langs diagonalen op donkere velden."
            }
        },
        {
            "question": {
                "en": "What is the flying kings rule in international draughts?",
                "es": "¿Qué es la regla de reyes voladores en damas internacionales?",
                "de": "Was ist die Regel der fliegenden Könige?",
                "nl": "Wat is de vliegende dam-regel bij internationaal dammen?"
            },
            "options": [
                {
                    "en": "Kings can move multiple squares diagonally",
                    "es": "Los reyes pueden moverse varias casillas en diagonal",
                    "de": "Könige können mehrere Felder diagonal ziehen",
                    "nl": "Dammen kunnen meerdere velden diagonaal bewegen"
                },
                {
                    "en": "Kings can jump over any piece",
                    "es": "Los reyes pueden saltar sobre cualquier pieza",
                    "de": "Könige können über jeden Stein springen",
                    "nl": "Dammen kunnen over elk stuk springen"
                },
                {
                    "en": "Kings can move to any square",
                    "es": "Los reyes pueden moverse a cualquier casilla",
                    "de": "Könige können auf jedes Feld ziehen",
                    "nl": "Dammen kunnen naar elk veld bewegen"
                },
                {
                    "en": "Kings cannot be captured",
                    "es": "Los reyes no pueden ser capturados",
                    "de": "Könige können nicht geschlagen werden",
                    "nl": "Dammen kunnen niet geslagen worden"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "In international draughts, flying kings can move multiple squares diagonally in one move, unlike in American checkers.",
                "es": "En damas internacionales, los reyes voladores pueden moverse varias casillas en diagonal, a diferencia de damas americanas.",
                "de": "Beim internationalen Damespiel können fliegende Könige mehrere Felder diagonal in einem Zug ziehen.",
                "nl": "Bij internationaal dammen kunnen vliegende dammen meerdere velden diagonaal bewegen in één zet."
            }
        },
        {
            "question": {
                "en": "How many playable squares are on a standard 8x8 board?",
                "es": "¿Cuántas casillas jugables hay en un tablero estándar 8x8?",
                "de": "Wie viele bespielbare Felder hat ein Standard-8x8-Brett?",
                "nl": "Hoeveel speelbare velden zijn er op een standaard 8x8 bord?"
            },
            "options": [
                {
                    "en": "32 dark squares",
                    "es": "32 casillas oscuras",
                    "de": "32 dunkle Felder",
                    "nl": "32 donkere velden"
                },
                {
                    "en": "64 total squares",
                    "es": "64 casillas totales",
                    "de": "64 Felder insgesamt",
                    "nl": "64 totale velden"
                },
                {
                    "en": "24 squares",
                    "es": "24 casillas",
                    "de": "24 Felder",
                    "nl": "24 velden"
                },
                {
                    "en": "48 squares",
                    "es": "48 casillas",
                    "de": "48 Felder",
                    "nl": "48 velden"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A standard 8x8 board has 32 dark squares that are playable. The 32 light squares are not used in checkers.",
                "es": "Un tablero estándar 8x8 tiene 32 casillas oscuras jugables. Las 32 casillas claras no se usan en damas.",
                "de": "Ein Standard 8x8-Brett hat 32 dunkle bespielbare Felder. Die 32 hellen Felder werden nicht benutzt.",
                "nl": "Een standaard 8x8 bord heeft 32 donkere speelbare velden. De 32 lichte velden worden niet gebruikt."
            }
        },
        {
            "question": {
                "en": "What is the difference between a jump and a regular move?",
                "es": "¿Cuál es la diferencia entre un salto y un movimiento normal?",
                "de": "Was ist der Unterschied zwischen Sprung und normalem Zug?",
                "nl": "Wat is het verschil tussen een sprong en een gewone zet?"
            },
            "options": [
                {
                    "en": "A jump captures a piece while a move does not",
                    "es": "Un salto captura una pieza mientras un movimiento no",
                    "de": "Ein Sprung schlägt einen Stein, ein Zug nicht",
                    "nl": "Een sprong slaat een stuk terwijl een zet dat niet doet"
                },
                {
                    "en": "A jump moves two squares, a move one",
                    "es": "Un salto mueve dos casillas, un movimiento una",
                    "de": "Ein Sprung bewegt zwei Felder, ein Zug eins",
                    "nl": "Een sprong beweegt twee velden, een zet één"
                },
                {
                    "en": "There is no difference",
                    "es": "No hay diferencia",
                    "de": "Es gibt keinen Unterschied",
                    "nl": "Er is geen verschil"
                },
                {
                    "en": "A jump can only go backward",
                    "es": "Un salto solo puede ir hacia atrás",
                    "de": "Ein Sprung kann nur rückwärts gehen",
                    "nl": "Een sprong kan alleen achteruit gaan"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A jump captures an opponent's piece by leaping over it. A regular move simply advances one square diagonally.",
                "es": "Un salto captura una pieza del oponente saltándola. Un movimiento regular simplemente avanza una casilla en diagonal.",
                "de": "Ein Sprung schlägt einen gegnerischen Stein durch Überspringen. Ein normaler Zug zieht einfach ein Feld diagonal vor.",
                "nl": "Een sprong slaat een stuk door erover te springen. Een gewone zet gaat simpelweg één veld diagonaal vooruit."
            }
        },
        {
            "question": {
                "en": "What is the best way to use a king in the endgame?",
                "es": "¿Cuál es la mejor forma de usar un rey en el final?",
                "de": "Wie nutzt man einen König im Endspiel am besten?",
                "nl": "Wat is de beste manier om een dam te gebruiken in het eindspel?"
            },
            "options": [
                {
                    "en": "Actively chase and capture opponent pieces",
                    "es": "Perseguir activamente y capturar piezas del oponente",
                    "de": "Gegnerische Steine aktiv jagen und schlagen",
                    "nl": "Actief stukken van de tegenstander najagen en slaan"
                },
                {
                    "en": "Keep it in one corner for safety",
                    "es": "Mantenerlo en una esquina por seguridad",
                    "de": "Ihn in einer Ecke für Sicherheit halten",
                    "nl": "Het in een hoek houden voor veiligheid"
                },
                {
                    "en": "Trade it for a regular piece",
                    "es": "Intercambiarlo por una pieza regular",
                    "de": "Ihn gegen einen normalen Stein tauschen",
                    "nl": "Het ruilen voor een gewoon stuk"
                },
                {
                    "en": "Move it only when threatened",
                    "es": "Moverlo solo cuando está amenazado",
                    "de": "Ihn nur bei Bedrohung bewegen",
                    "nl": "Het alleen bewegen wanneer bedreigd"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "In the endgame, kings should be used actively to chase and capture remaining opponent pieces to secure a win.",
                "es": "En el final, los reyes deben usarse activamente para perseguir y capturar las piezas restantes del oponente.",
                "de": "Im Endspiel sollten Könige aktiv eingesetzt werden, um verbleibende gegnerische Steine zu jagen und zu schlagen.",
                "nl": "In het eindspel moeten dammen actief gebruikt worden om resterende stukken van de tegenstander te slaan."
            }
        },
        {
            "question": {
                "en": "What should you do when behind in material?",
                "es": "¿Qué debes hacer con desventaja material?",
                "de": "Was sollte man bei Materialnachteil tun?",
                "nl": "Wat moet je doen als je materieel achterloopt?"
            },
            "options": [
                {
                    "en": "Try to create complications and traps",
                    "es": "Intentar crear complicaciones y trampas",
                    "de": "Versuchen Komplikationen und Fallen zu schaffen",
                    "nl": "Proberen complicaties en vallen te creëren"
                },
                {
                    "en": "Trade pieces as quickly as possible",
                    "es": "Intercambiar piezas lo más rápido posible",
                    "de": "Steine so schnell wie möglich tauschen",
                    "nl": "Stukken zo snel mogelijk ruilen"
                },
                {
                    "en": "Move all pieces to the back row",
                    "es": "Mover todas las piezas a la última fila",
                    "de": "Alle Steine in die letzte Reihe ziehen",
                    "nl": "Alle stukken naar de achterste rij bewegen"
                },
                {
                    "en": "Give up immediately",
                    "es": "Rendirse inmediatamente",
                    "de": "Sofort aufgeben",
                    "nl": "Onmiddellijk opgeven"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "When behind in material, creating complications gives you the best chance to find tactical opportunities.",
                "es": "Con desventaja material, crear complicaciones da la mejor oportunidad de encontrar tácticas y cambiar el juego.",
                "de": "Bei Materialnachteil bietet das Schaffen von Komplikationen die beste Chance, taktische Möglichkeiten zu finden.",
                "nl": "Als je materieel achterloopt, geeft het creëren van complicaties de beste kans op tactische mogelijkheden."
            }
        },
        {
            "question": {
                "en": "What is the importance of maintaining piece structure?",
                "es": "¿Cuál es la importancia de mantener la estructura?",
                "de": "Wie wichtig ist es die Steinstruktur zu erhalten?",
                "nl": "Wat is het belang van het behouden van stukstructuur?"
            },
            "options": [
                {
                    "en": "Connected pieces are harder to capture",
                    "es": "Piezas conectadas son más difíciles de capturar",
                    "de": "Verbundene Steine sind schwerer zu schlagen",
                    "nl": "Verbonden stukken zijn moeilijker te slaan"
                },
                {
                    "en": "Structure makes pieces move faster",
                    "es": "La estructura hace que las piezas se muevan más rápido",
                    "de": "Struktur lässt Steine schneller ziehen",
                    "nl": "Structuur laat stukken sneller bewegen"
                },
                {
                    "en": "Structure prevents opponent from moving",
                    "es": "La estructura impide al oponente moverse",
                    "de": "Struktur hindert den Gegner am Ziehen",
                    "nl": "Structuur voorkomt dat de tegenstander beweegt"
                },
                {
                    "en": "Structure has no strategic value",
                    "es": "La estructura no tiene valor estratégico",
                    "de": "Struktur hat keinen strategischen Wert",
                    "nl": "Structuur heeft geen strategische waarde"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Maintaining piece structure keeps pieces connected and supporting each other, making them harder to capture.",
                "es": "Mantener la estructura mantiene piezas conectadas y apoyándose, haciéndolas más difíciles de capturar.",
                "de": "Die Steinstruktur zu erhalten hält Steine verbunden und unterstützend, was Schlagen erschwert.",
                "nl": "Het behouden van structuur houdt stukken verbonden en ondersteunend, waardoor ze moeilijker te slaan zijn."
            }
        },
        {
            "question": {
                "en": "What is a combination play in checkers?",
                "es": "¿Qué es una combinación en damas?",
                "de": "Was ist ein Kombinationsspiel beim Damespiel?",
                "nl": "Wat is een combinatiespel bij dammen?"
            },
            "options": [
                {
                    "en": "A series of forced moves leading to material gain",
                    "es": "Una serie de movimientos forzados con ganancia material",
                    "de": "Eine Reihe erzwungener Züge mit Materialgewinn",
                    "nl": "Een reeks gedwongen zetten die leiden tot materiaalwinst"
                },
                {
                    "en": "Playing with two boards simultaneously",
                    "es": "Jugar con dos tableros simultáneamente",
                    "de": "Gleichzeitig auf zwei Brettern spielen",
                    "nl": "Tegelijkertijd op twee borden spelen"
                },
                {
                    "en": "Mixing offensive and defensive pieces",
                    "es": "Mezclar piezas ofensivas y defensivas",
                    "de": "Offensive und defensive Steine mischen",
                    "nl": "Offensieve en defensieve stukken mengen"
                },
                {
                    "en": "A random sequence of moves",
                    "es": "Una secuencia aleatoria de movimientos",
                    "de": "Eine zufällige Zugfolge",
                    "nl": "Een willekeurige reeks zetten"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A combination is a tactical sequence of forced moves, often with sacrifices, resulting in a net gain of material.",
                "es": "Una combinación es una secuencia táctica de movimientos forzados, a menudo con sacrificios, con ganancia neta de material.",
                "de": "Eine Kombination ist eine taktische Folge erzwungener Züge, oft mit Opfern, die zu Nettomaterialgewinn führt.",
                "nl": "Een combinatie is een tactische reeks gedwongen zetten, vaak met offers, die resulteert in nettomateriaalwinst."
            }
        },
        {
            "question": {
                "en": "What is the difference between tactics and strategy?",
                "es": "¿Cuál es la diferencia entre táctica y estrategia?",
                "de": "Was ist der Unterschied zwischen Taktik und Strategie?",
                "nl": "Wat is het verschil tussen tactiek en strategie?"
            },
            "options": [
                {
                    "en": "Tactics are short-term, strategy is long-term",
                    "es": "Tácticas son a corto plazo, estrategia a largo plazo",
                    "de": "Taktik ist kurzfristig, Strategie langfristig",
                    "nl": "Tactiek is korte termijn, strategie lange termijn"
                },
                {
                    "en": "They mean the same thing",
                    "es": "Significan lo mismo",
                    "de": "Sie bedeuten dasselbe",
                    "nl": "Ze betekenen hetzelfde"
                },
                {
                    "en": "Tactics involve kings only",
                    "es": "Las tácticas involucran solo reyes",
                    "de": "Taktik betrifft nur Könige",
                    "nl": "Tactiek betreft alleen dammen"
                },
                {
                    "en": "Strategy is about captures only",
                    "es": "La estrategia es solo sobre capturas",
                    "de": "Strategie betrifft nur Schlagen",
                    "nl": "Strategie gaat alleen over slaan"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Tactics are short-term sequences for immediate advantage, while strategy involves long-term planning and positioning.",
                "es": "Las tácticas son secuencias a corto plazo para ventaja inmediata, la estrategia implica planificación a largo plazo.",
                "de": "Taktik sind kurzfristige Sequenzen für unmittelbaren Vorteil, Strategie umfasst langfristige Planung und Positionierung.",
                "nl": "Tactiek zijn korte-termijn reeksen voor direct voordeel, strategie omvat langetermijnplanning en positionering."
            }
        },
        {
            "question": {
                "en": "Why is diagonal control important in checkers?",
                "es": "¿Por qué es importante el control diagonal en damas?",
                "de": "Warum ist Diagonalkontrolle beim Damespiel wichtig?",
                "nl": "Waarom is diagonale controle belangrijk bij dammen?"
            },
            "options": [
                {
                    "en": "All movement happens on diagonal lines",
                    "es": "Todo movimiento ocurre en líneas diagonales",
                    "de": "Alle Bewegung findet auf Diagonalen statt",
                    "nl": "Alle beweging vindt plaats op diagonale lijnen"
                },
                {
                    "en": "Diagonal pieces score more points",
                    "es": "Las piezas diagonales anotan más puntos",
                    "de": "Diagonale Steine geben mehr Punkte",
                    "nl": "Diagonale stukken scoren meer punten"
                },
                {
                    "en": "Only kings can move diagonally",
                    "es": "Solo los reyes pueden moverse en diagonal",
                    "de": "Nur Könige können diagonal ziehen",
                    "nl": "Alleen dammen kunnen diagonaal bewegen"
                },
                {
                    "en": "Diagonal movement is optional",
                    "es": "El movimiento diagonal es opcional",
                    "de": "Diagonale Bewegung ist optional",
                    "nl": "Diagonale beweging is optioneel"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Since all movement occurs along diagonal lines, controlling key diagonals gives you power over the board.",
                "es": "Como todo movimiento ocurre por líneas diagonales, controlar diagonales clave da poder sobre el tablero.",
                "de": "Da alle Bewegung auf Diagonalen stattfindet, gibt Kontrolle wichtiger Diagonalen Macht über das Brett.",
                "nl": "Omdat alle beweging langs diagonale lijnen plaatsvindt, geeft controle over diagonalen macht over het bord."
            }
        },
        {
            "question": {
                "en": "What is a threat in checkers?",
                "es": "¿Qué es una amenaza en damas?",
                "de": "Was ist eine Drohung beim Damespiel?",
                "nl": "Wat is een dreiging bij dammen?"
            },
            "options": [
                {
                    "en": "A move that could capture on the next turn",
                    "es": "Un movimiento que podría capturar en el siguiente turno",
                    "de": "Ein Zug der im nächsten Zug schlagen könnte",
                    "nl": "Een zet die in de volgende beurt kan slaan"
                },
                {
                    "en": "A loud noise during the game",
                    "es": "Un ruido fuerte durante el juego",
                    "de": "Ein lautes Geräusch während des Spiels",
                    "nl": "Een hard geluid tijdens het spel"
                },
                {
                    "en": "Removing a piece from the board",
                    "es": "Retirar una pieza del tablero",
                    "de": "Einen Stein vom Brett entfernen",
                    "nl": "Een stuk van het bord verwijderen"
                },
                {
                    "en": "Asking opponent to resign",
                    "es": "Pedir al oponente que se rinda",
                    "de": "Den Gegner zum Aufgeben auffordern",
                    "nl": "De tegenstander vragen op te geven"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A threat is a potential capture on the next move, forcing the opponent to respond defensively.",
                "es": "Una amenaza es una captura potencial en el siguiente movimiento, forzando al oponente a responder defensivamente.",
                "de": "Eine Drohung ist ein möglicher Schlag im nächsten Zug, der den Gegner zu einer defensiven Reaktion zwingt.",
                "nl": "Een dreiging is een potentiële slag in de volgende zet, waardoor de tegenstander defensief moet reageren."
            }
        },
        {
            "question": {
                "en": "What is a clearance sacrifice in checkers?",
                "es": "¿Qué es un sacrificio de despeje en damas?",
                "de": "Was ist ein Räumungsopfer beim Damespiel?",
                "nl": "Wat is een ruimingsoffer bij dammen?"
            },
            "options": [
                {
                    "en": "Giving up a piece to open a path for another",
                    "es": "Entregar una pieza para abrir camino a otra",
                    "de": "Einen Stein opfern um Weg für anderen zu öffnen",
                    "nl": "Een stuk opgeven om een pad voor een ander te openen"
                },
                {
                    "en": "Removing all pieces from one side",
                    "es": "Retirar todas las piezas de un lado",
                    "de": "Alle Steine von einer Seite entfernen",
                    "nl": "Alle stukken van één kant verwijderen"
                },
                {
                    "en": "Clearing the board completely",
                    "es": "Limpiar el tablero completamente",
                    "de": "Das Brett komplett räumen",
                    "nl": "Het bord volledig leegmaken"
                },
                {
                    "en": "Sacrificing a king for a regular piece",
                    "es": "Sacrificar un rey por una pieza regular",
                    "de": "Einen König für einen normalen Stein opfern",
                    "nl": "Een dam offeren voor een gewoon stuk"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A clearance sacrifice gives up a piece to open a diagonal path for another piece to advance or capture.",
                "es": "Un sacrificio de despeje entrega una pieza para abrir un camino diagonal para otra pieza avanzar o capturar.",
                "de": "Ein Räumungsopfer gibt einen Stein auf, um einen Diagonalweg für einen anderen Stein zu öffnen.",
                "nl": "Een ruimingsoffer geeft een stuk op om een diagonaal pad te openen voor een ander stuk om op te rukken of te slaan."
            }
        },
        {
            "question": {
                "en": "Why is the center strategically important?",
                "es": "¿Por qué es el centro estratégicamente importante?",
                "de": "Warum ist die Mitte strategisch wichtig?",
                "nl": "Waarom is het midden strategisch belangrijk?"
            },
            "options": [
                {
                    "en": "Center pieces can reach any part of the board faster",
                    "es": "Piezas centrales alcanzan cualquier parte más rápido",
                    "de": "Mittelsteine erreichen jeden Brettteil schneller",
                    "nl": "Middenstukken bereiken elk deel van het bord sneller"
                },
                {
                    "en": "Center pieces cannot be captured",
                    "es": "Las piezas centrales no pueden ser capturadas",
                    "de": "Mittelsteine können nicht geschlagen werden",
                    "nl": "Middenstukken kunnen niet geslagen worden"
                },
                {
                    "en": "Center squares are worth more points",
                    "es": "Las casillas centrales valen más puntos",
                    "de": "Mittelfelder sind mehr Punkte wert",
                    "nl": "Middenvelden zijn meer punten waard"
                },
                {
                    "en": "Center is only important for kings",
                    "es": "El centro solo es importante para reyes",
                    "de": "Die Mitte ist nur für Könige wichtig",
                    "nl": "Het midden is alleen belangrijk voor dammen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Center pieces have more diagonal movement options and can reach any part of the board more quickly than edge pieces.",
                "es": "Las piezas centrales tienen más opciones diagonales y pueden alcanzar cualquier parte del tablero más rápido.",
                "de": "Mittelsteine haben mehr diagonale Zugmöglichkeiten und können jeden Brettteil schneller als Randsteine erreichen.",
                "nl": "Middenstukken hebben meer diagonale opties en bereiken elk deel van het bord sneller dan randstukken."
            }
        },
        {
            "question": {
                "en": "What is the pyramid formation in checkers?",
                "es": "¿Qué es la formación pirámide en damas?",
                "de": "Was ist die Pyramidenformation beim Damespiel?",
                "nl": "Wat is de piramidevormatie bij dammen?"
            },
            "options": [
                {
                    "en": "Pieces arranged in a triangular shape",
                    "es": "Piezas dispuestas en forma triangular",
                    "de": "Steine in Dreiecksform angeordnet",
                    "nl": "Stukken in driehoeksvorm opgesteld"
                },
                {
                    "en": "All pieces stacked on one square",
                    "es": "Todas las piezas apiladas en una casilla",
                    "de": "Alle Steine auf einem Feld gestapelt",
                    "nl": "Alle stukken op één veld gestapeld"
                },
                {
                    "en": "A line of pieces across the board",
                    "es": "Una línea de piezas a través del tablero",
                    "de": "Eine Reihe von Steinen quer über das Brett",
                    "nl": "Een rij stukken over het bord"
                },
                {
                    "en": "Pieces spread to all corners",
                    "es": "Piezas dispersas a todas las esquinas",
                    "de": "Steine in alle Ecken verteilt",
                    "nl": "Stukken verspreid naar alle hoeken"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The pyramid formation arranges pieces in a triangular shape, providing mutual support and strong defense.",
                "es": "La formación pirámide dispone piezas en forma triangular, proporcionando apoyo mutuo y defensa fuerte.",
                "de": "Die Pyramidenformation ordnet Steine in Dreiecksform an und bietet gegenseitige Unterstützung und starke Verteidigung.",
                "nl": "De piramidevormatie stelt stukken op in driehoeksvorm en biedt wederzijdse ondersteuning en sterke verdediging."
            }
        },
        {
            "question": {
                "en": "What is the advantage of the first move in checkers?",
                "es": "¿Cuál es la ventaja del primer movimiento en damas?",
                "de": "Was ist der Vorteil des ersten Zugs beim Damespiel?",
                "nl": "Wat is het voordeel van de eerste zet bij dammen?"
            },
            "options": [
                {
                    "en": "Slight initiative and tempo advantage",
                    "es": "Ligera iniciativa y ventaja de tempo",
                    "de": "Leichte Initiative und Tempovorteil",
                    "nl": "Licht initiatief en tempovoordeel"
                },
                {
                    "en": "Guaranteed win",
                    "es": "Victoria garantizada",
                    "de": "Garantierter Gewinn",
                    "nl": "Gegarandeerde overwinning"
                },
                {
                    "en": "Extra piece on the board",
                    "es": "Pieza extra en el tablero",
                    "de": "Extrastein auf dem Brett",
                    "nl": "Extra stuk op het bord"
                },
                {
                    "en": "No advantage at all",
                    "es": "Ninguna ventaja",
                    "de": "Kein Vorteil",
                    "nl": "Helemaal geen voordeel"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Moving first gives a slight initiative, letting you set the tempo and direction of the opening phase.",
                "es": "Mover primero da una ligera iniciativa, permitiendo establecer el tempo y dirección de la apertura.",
                "de": "Der erste Zug gibt leichte Initiative und ermöglicht, Tempo und Richtung der Eröffnungsphase zu bestimmen.",
                "nl": "Als eerste bewegen geeft een licht initiatief, waardoor je het tempo en de richting van de opening bepaalt."
            }
        },
        {
            "question": {
                "en": "What is a dyke formation in checkers?",
                "es": "¿Qué es la formación de dique en damas?",
                "de": "Was ist die Deichformation beim Damespiel?",
                "nl": "Wat is de dijkformatie bij dammen?"
            },
            "options": [
                {
                    "en": "A diagonal wall of pieces blocking advance",
                    "es": "Un muro diagonal de piezas bloqueando avance",
                    "de": "Eine diagonale Steinmauer die den Vormarsch blockiert",
                    "nl": "Een diagonale muur van stukken die opmars blokkeert"
                },
                {
                    "en": "Pieces scattered across the board",
                    "es": "Piezas dispersas por el tablero",
                    "de": "Steine verstreut über das Brett",
                    "nl": "Stukken verspreid over het bord"
                },
                {
                    "en": "All pieces on one side",
                    "es": "Todas las piezas en un lado",
                    "de": "Alle Steine auf einer Seite",
                    "nl": "Alle stukken aan één kant"
                },
                {
                    "en": "A single strong king",
                    "es": "Un solo rey fuerte",
                    "de": "Ein einzelner starker König",
                    "nl": "Een enkele sterke dam"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The dyke formation creates a diagonal wall of pieces that blocks the opponent's advance and controls key lines.",
                "es": "La formación de dique crea un muro diagonal que bloquea el avance del oponente y controla líneas clave.",
                "de": "Die Deichformation schafft eine diagonale Steinmauer, die den Vormarsch des Gegners blockiert.",
                "nl": "De dijkformatie creëert een diagonale muur die de opmars van de tegenstander blokkeert en belangrijke lijnen controleert."
            }
        },
        {
            "question": {
                "en": "What is the huff rule in older checkers versions?",
                "es": "¿Qué es la regla de soplo en versiones antiguas?",
                "de": "Was ist die Huffregel in älteren Dame-Versionen?",
                "nl": "Wat is de blazregel in oudere versies van dammen?"
            },
            "options": [
                {
                    "en": "Opponent removes your piece if you miss a capture",
                    "es": "El oponente retira tu pieza si no capturas",
                    "de": "Gegner entfernt Stein wenn man Schlag verpasst",
                    "nl": "Tegenstander verwijdert je stuk als je een slag mist"
                },
                {
                    "en": "Extra turn for capturing a king",
                    "es": "Turno extra por capturar un rey",
                    "de": "Extrazug für das Schlagen eines Königs",
                    "nl": "Extra beurt voor het slaan van een dam"
                },
                {
                    "en": "Blowing on the board to move pieces",
                    "es": "Soplar en el tablero para mover piezas",
                    "de": "Auf das Brett blasen um Steine zu bewegen",
                    "nl": "Op het bord blazen om stukken te bewegen"
                },
                {
                    "en": "Penalty for slow play",
                    "es": "Penalización por juego lento",
                    "de": "Strafe für langsames Spiel",
                    "nl": "Straf voor langzaam spelen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The huff rule allowed opponents to remove a piece if a player failed to make a mandatory capture.",
                "es": "La regla de soplo permitía al oponente retirar una pieza si un jugador no hacía una captura obligatoria.",
                "de": "Die Huffregel erlaubte dem Gegner, einen Stein zu entfernen, wenn ein Spieler eine Schlagpflicht verpasste.",
                "nl": "De blazregel stond tegenstanders toe een stuk te verwijderen als een speler een verplichte slag miste."
            }
        },
        {
            "question": {
                "en": "What is the single corner on a checkers board?",
                "es": "¿Qué es la esquina simple en un tablero de damas?",
                "de": "Was ist die einfache Ecke auf dem Damebrett?",
                "nl": "Wat is de enkele hoek op een dambord?"
            },
            "options": [
                {
                    "en": "A corner with one playable square",
                    "es": "Una esquina con una casilla jugable",
                    "de": "Eine Ecke mit einem bespielbaren Feld",
                    "nl": "Een hoek met één speelbaar veld"
                },
                {
                    "en": "A corner with no pieces",
                    "es": "Una esquina sin piezas",
                    "de": "Eine Ecke ohne Steine",
                    "nl": "Een hoek zonder stukken"
                },
                {
                    "en": "A special winning position",
                    "es": "Una posición especial de victoria",
                    "de": "Eine spezielle Gewinnposition",
                    "nl": "Een speciale winnende positie"
                },
                {
                    "en": "A corner where kings are promoted",
                    "es": "Una esquina donde se promueven reyes",
                    "de": "Eine Ecke wo Könige befördert werden",
                    "nl": "Een hoek waar dammen gepromoveerd worden"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A single corner is a corner of the board that has only one playable dark square adjacent to it.",
                "es": "Una esquina simple es una esquina del tablero con solo una casilla oscura jugable adyacente.",
                "de": "Eine einfache Ecke ist eine Brettecke mit nur einem bespielbaren dunklen Feld daneben.",
                "nl": "Een enkele hoek is een hoek van het bord met slechts één speelbaar donker veld ernaast."
            }
        },
        {
            "question": {
                "en": "What is a double corner on a checkers board?",
                "es": "¿Qué es la esquina doble en un tablero de damas?",
                "de": "Was ist die Doppelecke auf dem Damebrett?",
                "nl": "Wat is de dubbele hoek op een dambord?"
            },
            "options": [
                {
                    "en": "A corner with two playable squares",
                    "es": "Una esquina con dos casillas jugables",
                    "de": "Eine Ecke mit zwei bespielbaren Feldern",
                    "nl": "Een hoek met twee speelbare velden"
                },
                {
                    "en": "Two kings in a corner",
                    "es": "Dos reyes en una esquina",
                    "de": "Zwei Könige in einer Ecke",
                    "nl": "Twee dammen in een hoek"
                },
                {
                    "en": "A corner where two pieces stack",
                    "es": "Una esquina donde se apilan dos piezas",
                    "de": "Eine Ecke wo zwei Steine gestapelt werden",
                    "nl": "Een hoek waar twee stukken gestapeld worden"
                },
                {
                    "en": "Two captured pieces in a corner",
                    "es": "Dos piezas capturadas en una esquina",
                    "de": "Zwei geschlagene Steine in einer Ecke",
                    "nl": "Twee geslagen stukken in een hoek"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A double corner has two playable dark squares adjacent to it, making it strategically important for defense.",
                "es": "Una esquina doble tiene dos casillas oscuras jugables adyacentes, haciéndola estratégicamente importante.",
                "de": "Eine Doppelecke hat zwei bespielbare dunkle Felder daneben, was sie strategisch für die Verteidigung wichtig macht.",
                "nl": "Een dubbele hoek heeft twee speelbare donkere velden ernaast, wat het strategisch belangrijk maakt voor verdediging."
            }
        },
        {
            "question": {
                "en": "Why should beginners avoid moving pieces to the edge?",
                "es": "¿Por qué principiantes deben evitar mover al borde?",
                "de": "Warum sollten Anfänger Steine nicht an den Rand ziehen?",
                "nl": "Waarom moeten beginners stukken niet naar de rand bewegen?"
            },
            "options": [
                {
                    "en": "Edge pieces have limited mobility",
                    "es": "Las piezas del borde tienen movilidad limitada",
                    "de": "Randsteine haben eingeschränkte Mobilität",
                    "nl": "Randstukken hebben beperkte mobiliteit"
                },
                {
                    "en": "Edge pieces cannot capture",
                    "es": "Las piezas del borde no pueden capturar",
                    "de": "Randsteine können nicht schlagen",
                    "nl": "Randstukken kunnen niet slaan"
                },
                {
                    "en": "Edge pieces are removed from play",
                    "es": "Las piezas del borde se retiran del juego",
                    "de": "Randsteine werden aus dem Spiel genommen",
                    "nl": "Randstukken worden uit het spel gehaald"
                },
                {
                    "en": "Edge squares are not valid",
                    "es": "Las casillas del borde no son válidas",
                    "de": "Randfelder sind nicht gültig",
                    "nl": "Randvelden zijn niet geldig"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Pieces on the edge can only move in one diagonal direction instead of two, limiting their usefulness.",
                "es": "Las piezas en el borde solo pueden moverse en una dirección diagonal en vez de dos, limitando su utilidad.",
                "de": "Steine am Rand können nur in eine Diagonalrichtung statt zwei ziehen, was ihre Nützlichkeit einschränkt.",
                "nl": "Stukken aan de rand kunnen maar in één diagonale richting bewegen in plaats van twee, wat hun nut beperkt."
            }
        },
        {
            "question": {
                "en": "What is a running king strategy?",
                "es": "¿Qué es la estrategia del rey corredor?",
                "de": "Was ist die Strategie des laufenden Königs?",
                "nl": "Wat is de strategie van de lopende dam?"
            },
            "options": [
                {
                    "en": "Moving a king quickly across the board",
                    "es": "Mover un rey rápidamente por el tablero",
                    "de": "Einen König schnell über das Brett bewegen",
                    "nl": "Een dam snel over het bord bewegen"
                },
                {
                    "en": "Creating multiple kings at once",
                    "es": "Crear múltiples reyes a la vez",
                    "de": "Mehrere Könige gleichzeitig erstellen",
                    "nl": "Meerdere dammen tegelijk maken"
                },
                {
                    "en": "Keeping the king in one corner",
                    "es": "Mantener al rey en una esquina",
                    "de": "Den König in einer Ecke halten",
                    "nl": "De dam in een hoek houden"
                },
                {
                    "en": "Sacrificing a king for advantage",
                    "es": "Sacrificar un rey por ventaja",
                    "de": "Einen König für Vorteil opfern",
                    "nl": "Een dam offeren voor voordeel"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A running king strategy uses a king's mobility to quickly move across the board for captures or better positioning.",
                "es": "La estrategia del rey corredor usa la movilidad del rey para moverse rápidamente por el tablero para capturas.",
                "de": "Die Strategie des laufenden Königs nutzt die Mobilität des Königs für schnelle Bewegung über das Brett.",
                "nl": "De strategie van de lopende dam gebruikt de mobiliteit van de dam om snel over het bord te bewegen voor slagen."
            }
        },
        {
            "question": {
                "en": "When should you promote a piece to king?",
                "es": "¿Cuándo debes promover una pieza a rey?",
                "de": "Wann sollte man einen Stein zum König befördern?",
                "nl": "Wanneer moet je een stuk tot dam promoveren?"
            },
            "options": [
                {
                    "en": "When it can be done safely without losing it",
                    "es": "Cuando se puede hacer de forma segura sin perderla",
                    "de": "Wenn es sicher möglich ist ohne ihn zu verlieren",
                    "nl": "Wanneer het veilig kan zonder het stuk te verliezen"
                },
                {
                    "en": "As early as possible regardless of risk",
                    "es": "Lo más temprano posible sin importar el riesgo",
                    "de": "So früh wie möglich ungeachtet des Risikos",
                    "nl": "Zo vroeg mogelijk ongeacht het risico"
                },
                {
                    "en": "Only in the endgame",
                    "es": "Solo en el final del juego",
                    "de": "Nur im Endspiel",
                    "nl": "Alleen in het eindspel"
                },
                {
                    "en": "Never promote your pieces",
                    "es": "Nunca promover tus piezas",
                    "de": "Steine nie befördern",
                    "nl": "Nooit je stukken promoveren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Promotion should be pursued when it can be done safely, as rushing can lead to losing the piece immediately.",
                "es": "La promoción debe buscarse cuando se puede hacer de forma segura, apresurarse puede llevar a perder la pieza.",
                "de": "Die Beförderung sollte angestrebt werden wenn sie sicher ist, da Eile zum sofortigen Verlust des Steins führen kann.",
                "nl": "Promotie moet nagestreefd worden wanneer het veilig kan, want haasten kan leiden tot verlies van het stuk."
            }
        },
        {
            "question": {
                "en": "What is the opposition concept in endgames?",
                "es": "¿Qué es el concepto de oposición en finales?",
                "de": "Was ist das Oppositionskonzept im Endspiel?",
                "nl": "Wat is het oppositieconcept in eindspelen?"
            },
            "options": [
                {
                    "en": "Facing pieces that restrict opponent movement",
                    "es": "Piezas enfrentadas que restringen movimiento",
                    "de": "Gegenüberstehende Steine die Bewegung einschränken",
                    "nl": "Tegenover elkaar staande stukken die beweging beperken"
                },
                {
                    "en": "Having more pieces than the opponent",
                    "es": "Tener más piezas que el oponente",
                    "de": "Mehr Steine als der Gegner haben",
                    "nl": "Meer stukken hebben dan de tegenstander"
                },
                {
                    "en": "Placing pieces on opposite sides",
                    "es": "Colocar piezas en lados opuestos",
                    "de": "Steine auf gegenüberliegenden Seiten",
                    "nl": "Stukken aan tegenovergestelde kanten plaatsen"
                },
                {
                    "en": "Both players having same pieces",
                    "es": "Ambos jugadores con las mismas piezas",
                    "de": "Beide Spieler mit gleichen Steinen",
                    "nl": "Beide spelers hebben dezelfde stukken"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Opposition in endgames means positioning pieces to face and restrict the opponent's movement options.",
                "es": "La oposición en finales significa posicionar piezas para enfrentar y restringir las opciones del oponente.",
                "de": "Opposition im Endspiel bezieht sich auf Positionierung der Steine, um Zugmöglichkeiten des Gegners einzuschränken.",
                "nl": "Oppositie in eindspelen verwijst naar het positioneren van stukken om de bewegingsopties van de tegenstander te beperken."
            }
        },
        {
            "question": {
                "en": "What is a dog hole position in checkers?",
                "es": "¿Qué es la posición de esquina atrapada en damas?",
                "de": "Was ist eine Hundeloch-Position beim Damespiel?",
                "nl": "Wat is een hondengatpositie bij dammen?"
            },
            "options": [
                {
                    "en": "A corner where a piece can get trapped",
                    "es": "Una esquina donde una pieza puede quedar atrapada",
                    "de": "Eine Ecke wo ein Stein gefangen werden kann",
                    "nl": "Een hoek waar een stuk vast kan komen te zitten"
                },
                {
                    "en": "The starting position of all pieces",
                    "es": "La posición inicial de todas las piezas",
                    "de": "Die Startposition aller Steine",
                    "nl": "De startpositie van alle stukken"
                },
                {
                    "en": "A winning formation",
                    "es": "Una formación ganadora",
                    "de": "Eine Gewinnstellung",
                    "nl": "Een winnende formatie"
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
                "en": "A dog hole is a corner position where a piece has very limited movement and can become trapped easily.",
                "es": "Una posición de esquina atrapada es donde una pieza tiene movimiento muy limitado y puede quedar atrapada fácilmente.",
                "de": "Eine Hundeloch-Position ist eine Eckstellung, wo ein Stein sehr begrenzte Zugmöglichkeiten hat und leicht eingeklemmt wird.",
                "nl": "Een hondengatpositie is een hoekpositie waar een stuk zeer beperkte beweging heeft en makkelijk vast kan zitten."
            }
        },
        {
            "question": {
                "en": "What is the elbow formation in checkers?",
                "es": "¿Qué es la formación de codo en damas?",
                "de": "Was ist die Ellbogenformation beim Damespiel?",
                "nl": "Wat is de elleboogformatie bij dammen?"
            },
            "options": [
                {
                    "en": "An L-shaped arrangement of pieces",
                    "es": "Una disposición en forma de L de las piezas",
                    "de": "Eine L-förmige Anordnung von Steinen",
                    "nl": "Een L-vormige opstelling van stukken"
                },
                {
                    "en": "A straight line of pieces",
                    "es": "Una línea recta de piezas",
                    "de": "Eine gerade Linie von Steinen",
                    "nl": "Een rechte lijn van stukken"
                },
                {
                    "en": "Pieces in a circular pattern",
                    "es": "Piezas en un patrón circular",
                    "de": "Steine in kreisförmigem Muster",
                    "nl": "Stukken in een cirkelvormig patroon"
                },
                {
                    "en": "A single isolated piece",
                    "es": "Una pieza aislada",
                    "de": "Ein einzelner isolierter Stein",
                    "nl": "Een enkel geïsoleerd stuk"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The elbow formation is an L-shaped arrangement that provides both offensive and defensive capabilities.",
                "es": "La formación de codo es una disposición en L que proporciona capacidades tanto ofensivas como defensivas.",
                "de": "Die Ellbogenformation ist eine L-förmige Anordnung, die offensive und defensive Möglichkeiten bietet.",
                "nl": "De elleboogformatie is een L-vormige opstelling die zowel offensieve als defensieve mogelijkheden biedt."
            }
        },
        {
            "question": {
                "en": "What is the purpose of controlling long diagonals?",
                "es": "¿Cuál es el propósito de controlar diagonales largas?",
                "de": "Was ist der Zweck die langen Diagonalen zu kontrollieren?",
                "nl": "Wat is het doel van het controleren van lange diagonalen?"
            },
            "options": [
                {
                    "en": "They provide the most mobility for pieces",
                    "es": "Proporcionan la mayor movilidad para piezas",
                    "de": "Sie bieten die größte Mobilität für Steine",
                    "nl": "Ze bieden de meeste mobiliteit voor stukken"
                },
                {
                    "en": "They are worth bonus points",
                    "es": "Valen puntos bonus",
                    "de": "Sie geben Bonuspunkte",
                    "nl": "Ze zijn bonuspunten waard"
                },
                {
                    "en": "They cannot be captured on",
                    "es": "No se puede capturar en ellas",
                    "de": "Auf ihnen kann nicht geschlagen werden",
                    "nl": "Er kan niet op geslagen worden"
                },
                {
                    "en": "They lead to automatic promotion",
                    "es": "Llevan a promoción automática",
                    "de": "Sie führen zu automatischer Beförderung",
                    "nl": "Ze leiden tot automatische promotie"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Long diagonals span the entire board, giving pieces maximum mobility and control over multiple areas.",
                "es": "Las diagonales largas abarcan todo el tablero, dando a las piezas máxima movilidad y control de múltiples áreas.",
                "de": "Lange Diagonalen erstrecken sich über das gesamte Brett und geben Steinen maximale Mobilität und Kontrolle.",
                "nl": "Lange diagonalen strekken zich over het hele bord en geven stukken maximale mobiliteit en controle over meerdere gebieden."
            }
        },
        {
            "question": {
                "en": "How can you tell if a position is winning or losing?",
                "es": "¿Cómo saber si una posición es ganadora o perdedora?",
                "de": "Wie erkennt man ob eine Stellung gewonnen oder verloren ist?",
                "nl": "Hoe kun je zien of een positie winnend of verliezend is?"
            },
            "options": [
                {
                    "en": "Count material and evaluate piece positions",
                    "es": "Contar material y evaluar posiciones de piezas",
                    "de": "Material zählen und Steinpositionen bewerten",
                    "nl": "Materiaal tellen en stukposities evalueren"
                },
                {
                    "en": "The player who moved last is winning",
                    "es": "El jugador que movió último está ganando",
                    "de": "Der Spieler der zuletzt gezogen hat gewinnt",
                    "nl": "De speler die als laatste bewoog wint"
                },
                {
                    "en": "Check who has more kings",
                    "es": "Verificar quién tiene más reyes",
                    "de": "Prüfen wer mehr Könige hat",
                    "nl": "Controleren wie meer dammen heeft"
                },
                {
                    "en": "It cannot be determined during play",
                    "es": "No se puede determinar durante el juego",
                    "de": "Es kann nicht während des Spiels bestimmt werden",
                    "nl": "Het kan niet bepaald worden tijdens het spel"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Evaluating a position requires counting pieces and kings and assessing how well placed they are on the board.",
                "es": "Evaluar una posición requiere contar piezas y reyes y evaluar qué tan bien colocados están en el tablero.",
                "de": "Die Bewertung einer Stellung erfordert das Zählen von Steinen und Königen und die Beurteilung ihrer Platzierung.",
                "nl": "Het evalueren van een positie vereist het tellen van stukken en dammen en beoordelen hoe goed ze geplaatst zijn."
            }
        },
        {
            "question": {
                "en": "What is a weak square in checkers?",
                "es": "¿Qué es una casilla débil en damas?",
                "de": "Was ist ein schwaches Feld beim Damespiel?",
                "nl": "Wat is een zwak veld bij dammen?"
            },
            "options": [
                {
                    "en": "A square that cannot be defended easily",
                    "es": "Una casilla que no se puede defender fácilmente",
                    "de": "Ein Feld das nicht leicht verteidigt werden kann",
                    "nl": "Een veld dat niet makkelijk verdedigd kan worden"
                },
                {
                    "en": "A square that pieces cannot land on",
                    "es": "Una casilla donde piezas no pueden aterrizar",
                    "de": "Ein Feld auf dem Steine nicht landen können",
                    "nl": "Een veld waar stukken niet op kunnen landen"
                },
                {
                    "en": "A damaged square on the board",
                    "es": "Una casilla dañada en el tablero",
                    "de": "Ein beschädigtes Feld auf dem Brett",
                    "nl": "Een beschadigd veld op het bord"
                },
                {
                    "en": "A light-colored square",
                    "es": "Una casilla de color claro",
                    "de": "Ein helles Feld",
                    "nl": "Een licht gekleurd veld"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A weak square is a position that is difficult to defend and can be exploited by the opponent for an advantage.",
                "es": "Una casilla débil es una posición difícil de defender que puede ser explotada por el oponente para ventaja.",
                "de": "Ein schwaches Feld ist eine Position, die schwer zu verteidigen ist und vom Gegner ausgenutzt werden kann.",
                "nl": "Een zwak veld is een positie die moeilijk te verdedigen is en door de tegenstander benut kan worden voor voordeel."
            }
        },
        {
            "question": {
                "en": "What is a star formation in checkers?",
                "es": "¿Qué es una formación estrella en damas?",
                "de": "Was ist eine Sternformation beim Damespiel?",
                "nl": "Wat is een sterformatie bij dammen?"
            },
            "options": [
                {
                    "en": "Pieces arranged to control multiple diagonals",
                    "es": "Piezas dispuestas para controlar múltiples diagonales",
                    "de": "Steine zur Kontrolle mehrerer Diagonalen",
                    "nl": "Stukken opgesteld om meerdere diagonalen te controleren"
                },
                {
                    "en": "A single piece in the center",
                    "es": "Una sola pieza en el centro",
                    "de": "Ein einzelner Stein in der Mitte",
                    "nl": "Een enkel stuk in het midden"
                },
                {
                    "en": "Five pieces in a circle",
                    "es": "Cinco piezas en un círculo",
                    "de": "Fünf Steine im Kreis",
                    "nl": "Vijf stukken in een cirkel"
                },
                {
                    "en": "Pieces on all four corners",
                    "es": "Piezas en las cuatro esquinas",
                    "de": "Steine in allen vier Ecken",
                    "nl": "Stukken op alle vier hoeken"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A star formation positions pieces to control multiple diagonals, creating strong offensive and defensive coverage.",
                "es": "Una formación estrella posiciona piezas para controlar múltiples diagonales con cobertura ofensiva y defensiva.",
                "de": "Eine Sternformation positioniert Steine zur Kontrolle mehrerer Diagonalen mit starker offensiver und defensiver Abdeckung.",
                "nl": "Een sterformatie plaatst stukken om meerdere diagonalen te controleren met sterke offensieve en defensieve dekking."
            }
        },
        {
            "question": {
                "en": "What is a mill formation in checkers?",
                "es": "¿Qué es la formación de molino en damas?",
                "de": "Was ist die Mühlenformation beim Damespiel?",
                "nl": "Wat is de molenformatie bij dammen?"
            },
            "options": [
                {
                    "en": "A repeating capture pattern back and forth",
                    "es": "Un patrón de captura repetitivo de ida y vuelta",
                    "de": "Ein wiederholendes Schlagmuster hin und her",
                    "nl": "Een herhalend slagpatroon heen en weer"
                },
                {
                    "en": "A circle of pieces on the board",
                    "es": "Un círculo de piezas en el tablero",
                    "de": "Ein Kreis von Steinen auf dem Brett",
                    "nl": "Een cirkel van stukken op het bord"
                },
                {
                    "en": "Three pieces in a row",
                    "es": "Tres piezas en una fila",
                    "de": "Drei Steine in einer Reihe",
                    "nl": "Drie stukken op een rij"
                },
                {
                    "en": "A defensive square formation",
                    "es": "Una formación defensiva cuadrada",
                    "de": "Eine defensive quadratische Formation",
                    "nl": "Een defensieve vierkante formatie"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A mill formation sets up a repeating pattern where captures can be made back and forth on the same diagonal.",
                "es": "Una formación de molino establece un patrón repetitivo donde capturas se hacen de ida y vuelta en la misma diagonal.",
                "de": "Eine Mühlenformation schafft ein Muster, bei dem Schläge hin und her auf derselben Diagonale erfolgen.",
                "nl": "Een molenformatie creëert een herhalend patroon waarbij slagen heen en weer op dezelfde diagonaal plaatsvinden."
            }
        },
        {
            "question": {
                "en": "What is the move order important for?",
                "es": "¿Para qué es importante el orden de movimientos?",
                "de": "Wofür ist die Zugreihenfolge wichtig?",
                "nl": "Waarvoor is de zetvolgorde belangrijk?"
            },
            "options": [
                {
                    "en": "It determines who gets the tempo advantage",
                    "es": "Determina quién obtiene ventaja de tempo",
                    "de": "Sie bestimmt wer den Tempovorteil bekommt",
                    "nl": "Het bepaalt wie het tempovoordeel krijgt"
                },
                {
                    "en": "It changes the board size",
                    "es": "Cambia el tamaño del tablero",
                    "de": "Sie ändert die Brettgröße",
                    "nl": "Het verandert de bordgrootte"
                },
                {
                    "en": "It affects piece color",
                    "es": "Afecta el color de las piezas",
                    "de": "Sie beeinflusst die Steinfarbe",
                    "nl": "Het beïnvloedt de kleur van de stukken"
                },
                {
                    "en": "It has no importance",
                    "es": "No tiene importancia",
                    "de": "Sie hat keine Bedeutung",
                    "nl": "Het heeft geen belang"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Move order determines tempo and can force the opponent into unfavorable positions through careful timing.",
                "es": "El orden de movimientos determina el tempo y puede forzar al oponente a posiciones desfavorables.",
                "de": "Die Zugreihenfolge bestimmt das Tempo und kann den Gegner durch Timing in ungünstige Stellungen zwingen.",
                "nl": "De zetvolgorde bepaalt het tempo en kan de tegenstander door timing in ongunstige posities dwingen."
            }
        },
        {
            "question": {
                "en": "What is a back rank weakness in checkers?",
                "es": "¿Qué es una debilidad de última fila en damas?",
                "de": "Was ist eine Grundreihenschwäche beim Damespiel?",
                "nl": "Wat is een achterste rij-zwakte bij dammen?"
            },
            "options": [
                {
                    "en": "Moving back row pieces creates promotion paths",
                    "es": "Mover piezas de la última fila crea caminos de promoción",
                    "de": "Grundreihensteine ziehen schafft Beförderungswege",
                    "nl": "Achterste rijstukken bewegen creëert promotiepaden"
                },
                {
                    "en": "Back row pieces are worth less",
                    "es": "Las piezas de la última fila valen menos",
                    "de": "Grundreihensteine sind weniger wert",
                    "nl": "Achterste rijstukken zijn minder waard"
                },
                {
                    "en": "Back row pieces cannot be moved",
                    "es": "Las piezas de la última fila no pueden moverse",
                    "de": "Grundreihensteine können nicht bewegt werden",
                    "nl": "Achterste rijstukken kunnen niet bewogen worden"
                },
                {
                    "en": "Back row is not part of the game",
                    "es": "La última fila no es parte del juego",
                    "de": "Die Grundreihe ist nicht Teil des Spiels",
                    "nl": "De achterste rij is geen deel van het spel"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Moving pieces from your back row creates gaps that opponents can use as promotion paths to crown their pieces.",
                "es": "Mover piezas de la última fila crea huecos que oponentes usan como caminos de promoción para coronar piezas.",
                "de": "Steine von der Grundreihe zu ziehen schafft Lücken, die Gegner als Beförderungswege nutzen können.",
                "nl": "Stukken van de achterste rij bewegen creëert openingen die tegenstanders als promotiepaden kunnen gebruiken."
            }
        },
        {
            "question": {
                "en": "What is the goal in a one king versus one king endgame?",
                "es": "¿Cuál es el objetivo con un rey contra un rey?",
                "de": "Was ist das Ziel bei König gegen König?",
                "nl": "Wat is het doel bij één dam tegen één dam?"
            },
            "options": [
                {
                    "en": "Try to trap the opponent king in a corner",
                    "es": "Intentar atrapar al rey oponente en una esquina",
                    "de": "Den gegnerischen König in eine Ecke drängen",
                    "nl": "De dam van de tegenstander in een hoek proberen te drijven"
                },
                {
                    "en": "Move to the center immediately",
                    "es": "Moverse al centro inmediatamente",
                    "de": "Sofort zur Mitte ziehen",
                    "nl": "Onmiddellijk naar het midden bewegen"
                },
                {
                    "en": "Offer a draw right away",
                    "es": "Ofrecer empate de inmediato",
                    "de": "Sofort Remis anbieten",
                    "nl": "Meteen remise aanbieden"
                },
                {
                    "en": "Stay on the back row",
                    "es": "Quedarse en la última fila",
                    "de": "In der letzten Reihe bleiben",
                    "nl": "Op de achterste rij blijven"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "In a one king versus one king endgame, the goal is to outmaneuver and trap the opponent's king in a corner.",
                "es": "En un final de un rey contra uno, el objetivo es maniobrar y atrapar al rey del oponente en una esquina.",
                "de": "Im Endspiel König gegen König ist das Ziel, den gegnerischen König auszumanövrieren und in eine Ecke zu drängen.",
                "nl": "In een eindspel dam tegen dam is het doel de dam van de tegenstander uit te manoeuvreren en in een hoek te drijven."
            }
        },
        {
            "question": {
                "en": "What is an outpost piece in checkers?",
                "es": "¿Qué es una pieza de puesto avanzado en damas?",
                "de": "Was ist ein Vorposten-Stein beim Damespiel?",
                "nl": "Wat is een voorpoststuk bij dammen?"
            },
            "options": [
                {
                    "en": "A piece advanced deep into enemy territory",
                    "es": "Una pieza avanzada en territorio enemigo",
                    "de": "Ein Stein tief im gegnerischen Gebiet",
                    "nl": "Een stuk diep in vijandelijk gebied"
                },
                {
                    "en": "A piece on the back row",
                    "es": "Una pieza en la última fila",
                    "de": "Ein Stein in der letzten Reihe",
                    "nl": "Een stuk op de achterste rij"
                },
                {
                    "en": "A piece on the edge of the board",
                    "es": "Una pieza en el borde del tablero",
                    "de": "Ein Stein am Rand des Bretts",
                    "nl": "Een stuk aan de rand van het bord"
                },
                {
                    "en": "A captured piece returned to play",
                    "es": "Una pieza capturada devuelta al juego",
                    "de": "Ein geschlagener Stein zurück im Spiel",
                    "nl": "Een geslagen stuk dat terugkeert in het spel"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "An outpost is a piece placed deep in the opponent's territory, creating threats and restricting their movement.",
                "es": "Un puesto avanzado es una pieza en el territorio del oponente que crea amenazas y restringe su movimiento.",
                "de": "Ein Vorposten ist ein Stein tief im gegnerischen Gebiet, der Drohungen schafft und Bewegung einschränkt.",
                "nl": "Een voorpost is een stuk diep in het gebied van de tegenstander dat dreigingen creëert en beweging beperkt."
            }
        },
        {
            "question": {
                "en": "What is a 'shot' in checkers terminology?",
                "es": "¿Qué es un 'tiro' en la terminología de damas?",
                "de": "Was ist ein 'Schuss' in der Dame-Terminologie?",
                "nl": "Wat is een 'schot' in damterminologie?"
            },
            "options": [
                {
                    "en": "A forced capture sequence sacrificing a piece",
                    "es": "Una secuencia de captura forzada sacrificando una pieza",
                    "de": "Eine erzwungene Schlagfolge mit Steinopfer",
                    "nl": "Een gedwongen slagreeks met het offeren van een stuk"
                },
                {
                    "en": "The first move of the game",
                    "es": "El primer movimiento del juego",
                    "de": "Der erste Zug des Spiels",
                    "nl": "De eerste zet van het spel"
                },
                {
                    "en": "Removing a piece from the board voluntarily",
                    "es": "Retirar una pieza del tablero voluntariamente",
                    "de": "Einen Stein freiwillig vom Brett nehmen",
                    "nl": "Vrijwillig een stuk van het bord verwijderen"
                },
                {
                    "en": "A king capturing multiple pieces at once",
                    "es": "Un rey capturando múltiples piezas a la vez",
                    "de": "Ein König der mehrere Steine gleichzeitig schlägt",
                    "nl": "Een dam die meerdere stukken tegelijk slaat"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A shot is a tactical move where you sacrifice a piece to set up a forced capture sequence that wins material.",
                "es": "Un tiro es un movimiento táctico donde sacrificas una pieza para crear una secuencia de captura forzada que gana material.",
                "de": "Ein Schuss ist ein taktischer Zug, bei dem man einen Stein opfert, um eine erzwungene Schlagfolge mit Materialgewinn einzuleiten.",
                "nl": "Een schot is een tactische zet waarbij je een stuk offert om een gedwongen slagreeks op te zetten die materiaal wint."
            }
        },
        {
            "question": {
                "en": "How many dark squares are on a standard checkers board?",
                "es": "¿Cuántas casillas oscuras hay en un tablero de damas estándar?",
                "de": "Wie viele dunkle Felder hat ein Standard-Damebrett?",
                "nl": "Hoeveel donkere velden heeft een standaard dambord?"
            },
            "options": [
                {
                    "en": "32",
                    "es": "32",
                    "de": "32",
                    "nl": "32"
                },
                {
                    "en": "64",
                    "es": "64",
                    "de": "64",
                    "nl": "64"
                },
                {
                    "en": "16",
                    "es": "16",
                    "de": "16",
                    "nl": "16"
                },
                {
                    "en": "24",
                    "es": "24",
                    "de": "24",
                    "nl": "24"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A standard 8x8 checkers board has 32 dark squares and 32 light squares. Pieces are only placed on the dark squares.",
                "es": "Un tablero de damas estándar de 8x8 tiene 32 casillas oscuras y 32 claras. Las piezas solo se colocan en las oscuras.",
                "de": "Ein Standard-8x8-Damebrett hat 32 dunkle und 32 helle Felder. Steine werden nur auf dunkle Felder gesetzt.",
                "nl": "Een standaard 8x8 dambord heeft 32 donkere en 32 lichte velden. Stukken worden alleen op donkere velden geplaatst."
            }
        },
        {
            "question": {
                "en": "What is a 'bridge' formation in checkers?",
                "es": "¿Qué es una formación de 'puente' en damas?",
                "de": "Was ist eine 'Brücken'-Formation beim Damespiel?",
                "nl": "Wat is een 'brug'-formatie bij dammen?"
            },
            "options": [
                {
                    "en": "Two pieces supporting each other diagonally",
                    "es": "Dos piezas apoyándose mutuamente en diagonal",
                    "de": "Zwei Steine die sich diagonal gegenseitig stützen",
                    "nl": "Twee stukken die elkaar diagonaal ondersteunen"
                },
                {
                    "en": "A row of pieces across the board",
                    "es": "Una fila de piezas a través del tablero",
                    "de": "Eine Reihe von Steinen über das Brett",
                    "nl": "Een rij stukken over het bord"
                },
                {
                    "en": "A gap between two groups of pieces",
                    "es": "Un hueco entre dos grupos de piezas",
                    "de": "Eine Lücke zwischen zwei Steingruppen",
                    "nl": "Een gat tussen twee groepen stukken"
                },
                {
                    "en": "Connecting the back row to the front",
                    "es": "Conectar la última fila con la primera",
                    "de": "Die hintere Reihe mit der vorderen verbinden",
                    "nl": "De achterste rij verbinden met de voorste"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A bridge is formed when two pieces support each other diagonally, making them harder for the opponent to capture.",
                "es": "Un puente se forma cuando dos piezas se apoyan diagonalmente, dificultando que el oponente las capture.",
                "de": "Eine Brücke entsteht wenn sich zwei Steine diagonal stützen, was es dem Gegner erschwert sie zu schlagen.",
                "nl": "Een brug wordt gevormd wanneer twee stukken elkaar diagonaal steunen, waardoor ze moeilijker te slaan zijn."
            }
        },
        {
            "question": {
                "en": "What does 'trading down' mean in checkers?",
                "es": "¿Qué significa 'intercambio a la baja' en damas?",
                "de": "Was bedeutet 'Abtausch' beim Damespiel?",
                "nl": "Wat betekent 'afruilen' bij dammen?"
            },
            "options": [
                {
                    "en": "Exchanging pieces when you have more material",
                    "es": "Intercambiar piezas cuando tienes más material",
                    "de": "Steine tauschen wenn man mehr Material hat",
                    "nl": "Stukken ruilen wanneer je meer materiaal hebt"
                },
                {
                    "en": "Moving pieces backward",
                    "es": "Mover piezas hacia atrás",
                    "de": "Steine rückwärts bewegen",
                    "nl": "Stukken achterwaarts bewegen"
                },
                {
                    "en": "Giving up a king for a regular piece",
                    "es": "Renunciar a un rey por una pieza normal",
                    "de": "Einen König für einen normalen Stein aufgeben",
                    "nl": "Een dam opgeven voor een gewoon stuk"
                },
                {
                    "en": "Switching sides with your opponent",
                    "es": "Cambiar de lado con tu oponente",
                    "de": "Die Seite mit dem Gegner tauschen",
                    "nl": "Van kant wisselen met je tegenstander"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Trading down means exchanging pieces when you have a material advantage, simplifying the position to make your lead more decisive.",
                "es": "Intercambio a la baja significa cambiar piezas con ventaja material, simplificando la posición para que la ventaja sea más decisiva.",
                "de": "Abtausch bedeutet Steine zu tauschen bei Materialvorteil, um die Stellung zu vereinfachen und den Vorteil entscheidender zu machen.",
                "nl": "Afruilen betekent stukken ruilen bij materiaalvoordeel, waardoor de stelling vereenvoudigt en het voordeel beslissender wordt."
            }
        },
        {
            "question": {
                "en": "Why is controlling the center important in checkers?",
                "es": "¿Por qué es importante controlar el centro en damas?",
                "de": "Warum ist Zentrumskontrolle beim Damespiel wichtig?",
                "nl": "Waarom is centrumcontrole belangrijk bij dammen?"
            },
            "options": [
                {
                    "en": "Center pieces have more movement options",
                    "es": "Las piezas centrales tienen más opciones de movimiento",
                    "de": "Zentrale Steine haben mehr Zugmöglichkeiten",
                    "nl": "Centrale stukken hebben meer bewegingsmogelijkheden"
                },
                {
                    "en": "Center pieces cannot be captured",
                    "es": "Las piezas centrales no pueden ser capturadas",
                    "de": "Zentrale Steine können nicht geschlagen werden",
                    "nl": "Centrale stukken kunnen niet geslagen worden"
                },
                {
                    "en": "Center pieces become kings automatically",
                    "es": "Las piezas centrales se convierten en reyes automáticamente",
                    "de": "Zentrale Steine werden automatisch Könige",
                    "nl": "Centrale stukken worden automatisch dam"
                },
                {
                    "en": "Center pieces are worth double points",
                    "es": "Las piezas centrales valen el doble de puntos",
                    "de": "Zentrale Steine zählen doppelte Punkte",
                    "nl": "Centrale stukken zijn dubbele punten waard"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Center pieces have more diagonal movement options and can influence both sides of the board, giving greater flexibility.",
                "es": "Las piezas centrales tienen más opciones de movimiento diagonal y pueden influir en ambos lados del tablero.",
                "de": "Zentrale Steine haben mehr diagonale Zugmöglichkeiten und können beide Seiten des Bretts beeinflussen.",
                "nl": "Centrale stukken hebben meer diagonale bewegingsmogelijkheden en kunnen beide kanten van het bord beïnvloeden."
            }
        },
        {
            "question": {
                "en": "What is a 'dog hole' in checkers?",
                "es": "¿Qué es un 'agujero de perro' en damas?",
                "de": "Was ist ein 'Hundsloch' beim Damespiel?",
                "nl": "Wat is een 'hondenhol' bij dammen?"
            },
            "options": [
                {
                    "en": "A weak square that is hard to defend",
                    "es": "Una casilla débil difícil de defender",
                    "de": "Ein schwaches Feld das schwer zu verteidigen ist",
                    "nl": "Een zwak veld dat moeilijk te verdedigen is"
                },
                {
                    "en": "A square where kings cannot move",
                    "es": "Una casilla donde los reyes no pueden moverse",
                    "de": "Ein Feld auf dem Könige nicht ziehen können",
                    "nl": "Een veld waar dammen niet kunnen bewegen"
                },
                {
                    "en": "The starting position of pieces",
                    "es": "La posición inicial de las piezas",
                    "de": "Die Startposition der Steine",
                    "nl": "De startpositie van de stukken"
                },
                {
                    "en": "A trap for the opponent's king",
                    "es": "Una trampa para el rey del oponente",
                    "de": "Eine Falle für den gegnerischen König",
                    "nl": "Een val voor de dam van de tegenstander"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A dog hole is a weak, hard-to-defend square in your position that the opponent can exploit to gain an advantage.",
                "es": "Un agujero de perro es una casilla débil y difícil de defender que el oponente puede aprovechar para obtener ventaja.",
                "de": "Ein Hundsloch ist ein schwaches, schwer verteidigbares Feld in der eigenen Stellung, das der Gegner ausnutzen kann.",
                "nl": "Een hondenhol is een zwak, moeilijk te verdedigen veld in je stelling dat de tegenstander kan uitbuiten."
            }
        },
        {
            "question": {
                "en": "What is the purpose of a 'waiting move' in checkers?",
                "es": "¿Cuál es el propósito de una 'jugada de espera' en damas?",
                "de": "Was ist der Zweck eines 'Wartezugs' beim Damespiel?",
                "nl": "Wat is het doel van een 'wachtzet' bij dammen?"
            },
            "options": [
                {
                    "en": "To force the opponent to make a bad move",
                    "es": "Obligar al oponente a hacer una mala jugada",
                    "de": "Den Gegner zu einem schlechten Zug zwingen",
                    "nl": "De tegenstander dwingen een slechte zet te doen"
                },
                {
                    "en": "To skip your turn",
                    "es": "Para saltarse tu turno",
                    "de": "Um den eigenen Zug zu überspringen",
                    "nl": "Om je beurt over te slaan"
                },
                {
                    "en": "To add extra time to the clock",
                    "es": "Para agregar tiempo extra al reloj",
                    "de": "Um dem Uhr zusätzliche Zeit hinzuzufügen",
                    "nl": "Om extra tijd aan de klok toe te voegen"
                },
                {
                    "en": "To rearrange your own pieces",
                    "es": "Para reorganizar tus propias piezas",
                    "de": "Um eigene Steine umzustellen",
                    "nl": "Om je eigen stukken te herschikken"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A waiting move maintains your position while forcing the opponent to move, potentially weakening their position or creating captures.",
                "es": "Una jugada de espera mantiene tu posición mientras obliga al oponente a moverse, debilitando potencialmente su posición.",
                "de": "Ein Wartezug erhält die eigene Stellung und zwingt den Gegner zum Zug, was seine Position schwächen kann.",
                "nl": "Een wachtzet behoudt je positie terwijl de tegenstander gedwongen wordt te zetten, wat hun positie kan verzwakken."
            }
        },
        {
            "question": {
                "en": "What is 'huffing' in traditional checkers rules?",
                "es": "¿Qué es 'soplar' en las reglas tradicionales de damas?",
                "de": "Was ist 'Pusten' in den traditionellen Dameregeln?",
                "nl": "Wat is 'blazen' in de traditionele damregels?"
            },
            "options": [
                {
                    "en": "Removing a piece that failed to make a capture",
                    "es": "Retirar una pieza que no realizó una captura",
                    "de": "Einen Stein entfernen der nicht geschlagen hat",
                    "nl": "Een stuk verwijderen dat niet geslagen heeft"
                },
                {
                    "en": "Blowing on the dice before rolling",
                    "es": "Soplar los dados antes de tirar",
                    "de": "Auf die Würfel pusten vor dem Wurf",
                    "nl": "Op de dobbelstenen blazen voor het gooien"
                },
                {
                    "en": "Making a loud noise to distract the opponent",
                    "es": "Hacer un ruido fuerte para distraer al oponente",
                    "de": "Laut werden um den Gegner abzulenken",
                    "nl": "Hard geluid maken om de tegenstander af te leiden"
                },
                {
                    "en": "Surrendering the game politely",
                    "es": "Rendirse educadamente",
                    "de": "Das Spiel höflich aufgeben",
                    "nl": "Het spel beleefd opgeven"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Huffing was a rule where if a player failed to make a mandatory capture, the opponent could remove the offending piece from the board.",
                "es": "Soplar era una regla donde si un jugador no hacía una captura obligatoria, el oponente podía retirar la pieza del tablero.",
                "de": "Pusten war eine Regel, bei der wenn ein Spieler eine Pflichtschlagnahme verpasste, der Gegner den Stein entfernen durfte.",
                "nl": "Blazen was een regel waarbij als een speler een verplichte slag niet deed, de tegenstander het stuk mocht verwijderen."
            }
        },
        {
            "question": {
                "en": "How many pieces does each player start with in checkers?",
                "es": "¿Con cuántas piezas empieza cada jugador en damas?",
                "de": "Mit wie vielen Steinen beginnt jeder Spieler beim Dame?",
                "nl": "Met hoeveel stukken begint elke speler bij dammen?"
            },
            "options": [
                {
                    "en": "12 pieces",
                    "es": "12 piezas",
                    "de": "12 Steine",
                    "nl": "12 stukken"
                },
                {
                    "en": "16 pieces",
                    "es": "16 piezas",
                    "de": "16 Steine",
                    "nl": "16 stukken"
                },
                {
                    "en": "8 pieces",
                    "es": "8 piezas",
                    "de": "8 Steine",
                    "nl": "8 stukken"
                },
                {
                    "en": "10 pieces",
                    "es": "10 piezas",
                    "de": "10 Steine",
                    "nl": "10 stukken"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Each player starts with 12 pieces in standard checkers, placed on the dark squares of the three rows closest to them.",
                "es": "Cada jugador empieza con 12 piezas en damas estándar, colocadas en las casillas oscuras de las tres filas más cercanas.",
                "de": "Jeder Spieler beginnt mit 12 Steinen im Standard-Dame, platziert auf den dunklen Feldern der drei nächsten Reihen.",
                "nl": "Elke speler begint met 12 stukken bij standaard dammen, geplaatst op de donkere velden van de drie dichtstbijzijnde rijen."
            }
        },
        {
            "question": {
                "en": "What is a 'sacrifice' in checkers?",
                "es": "¿Qué es un 'sacrificio' en damas?",
                "de": "Was ist ein 'Opfer' beim Damespiel?",
                "nl": "Wat is een 'offer' bij dammen?"
            },
            "options": [
                {
                    "en": "Giving up a piece to gain a positional advantage",
                    "es": "Entregar una pieza para obtener ventaja posicional",
                    "de": "Einen Stein aufgeben für positionellen Vorteil",
                    "nl": "Een stuk opgeven om positioneel voordeel te krijgen"
                },
                {
                    "en": "Removing your own piece from the board",
                    "es": "Retirar tu propia pieza del tablero",
                    "de": "Eigenen Stein vom Brett nehmen",
                    "nl": "Je eigen stuk van het bord verwijderen"
                },
                {
                    "en": "Letting the opponent win on purpose",
                    "es": "Dejar ganar al oponente a propósito",
                    "de": "Den Gegner absichtlich gewinnen lassen",
                    "nl": "De tegenstander opzettelijk laten winnen"
                },
                {
                    "en": "Exchanging a king for two regular pieces",
                    "es": "Intercambiar un rey por dos piezas normales",
                    "de": "Einen König gegen zwei normale Steine tauschen",
                    "nl": "Een dam ruilen voor twee gewone stukken"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A sacrifice means deliberately giving up a piece to gain a strategic or tactical advantage elsewhere on the board.",
                "es": "Un sacrificio significa entregar deliberadamente una pieza para obtener una ventaja estratégica o táctica en otro lugar.",
                "de": "Ein Opfer bedeutet absichtlich einen Stein aufzugeben um anderswo strategischen oder taktischen Vorteil zu erlangen.",
                "nl": "Een offer betekent bewust een stuk opgeven om elders op het bord een strategisch of tactisch voordeel te behalen."
            }
        },
        {
            "question": {
                "en": "What is a 'crowned piece' in checkers?",
                "es": "¿Qué es una 'pieza coronada' en damas?",
                "de": "Was ist ein 'gekrönter Stein' beim Damespiel?",
                "nl": "Wat is een 'gekroond stuk' bij dammen?"
            },
            "options": [
                {
                    "en": "A piece promoted to king after reaching the last row",
                    "es": "Una pieza promovida a rey al llegar a la última fila",
                    "de": "Ein zum König beförderter Stein nach Erreichen der letzten Reihe",
                    "nl": "Een stuk gepromoveerd tot dam na het bereiken van de laatste rij"
                },
                {
                    "en": "A special golden piece",
                    "es": "Una pieza dorada especial",
                    "de": "Ein besonderer goldener Stein",
                    "nl": "Een speciaal gouden stuk"
                },
                {
                    "en": "A piece with a crown-shaped top",
                    "es": "Una pieza con forma de corona",
                    "de": "Ein Stein mit kronenförmiger Spitze",
                    "nl": "Een stuk met een kroonvormige bovenkant"
                },
                {
                    "en": "The most expensive piece in the set",
                    "es": "La pieza más cara del juego",
                    "de": "Der teuerste Stein im Set",
                    "nl": "Het duurste stuk in de set"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A crowned piece is a regular piece that has been promoted to king by reaching the opponent's back row, gaining the ability to move backward.",
                "es": "Una pieza coronada es una pieza regular promovida a rey al llegar a la última fila del oponente, pudiendo moverse hacia atrás.",
                "de": "Ein gekrönter Stein ist ein normaler Stein der zum König befördert wurde und sich nun auch rückwärts bewegen kann.",
                "nl": "Een gekroond stuk is een gewoon stuk dat gepromoveerd is tot dam door de achterste rij te bereiken en achterwaarts kan bewegen."
            }
        },
        {
            "question": {
                "en": "What is the 'two-for-one' tactic in checkers?",
                "es": "¿Qué es la táctica de 'dos por uno' en damas?",
                "de": "Was ist die 'Zwei-für-eins'-Taktik beim Damespiel?",
                "nl": "Wat is de 'twee-voor-één'-tactiek bij dammen?"
            },
            "options": [
                {
                    "en": "Sacrificing one piece to capture two opponent pieces",
                    "es": "Sacrificar una pieza para capturar dos del oponente",
                    "de": "Einen Stein opfern um zwei gegnerische zu schlagen",
                    "nl": "Eén stuk offeren om twee stukken van de tegenstander te slaan"
                },
                {
                    "en": "Moving two pieces in one turn",
                    "es": "Mover dos piezas en un turno",
                    "de": "Zwei Steine in einem Zug bewegen",
                    "nl": "Twee stukken in één beurt bewegen"
                },
                {
                    "en": "Having two kings against one",
                    "es": "Tener dos reyes contra uno",
                    "de": "Zwei Könige gegen einen haben",
                    "nl": "Twee dammen tegen één hebben"
                },
                {
                    "en": "Playing with two sets of checkers",
                    "es": "Jugar con dos juegos de damas",
                    "de": "Mit zwei Damesets spielen",
                    "nl": "Met twee damspellen spelen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The two-for-one tactic involves sacrificing one of your pieces to set up a position where you capture two opponent pieces.",
                "es": "La táctica dos por uno implica sacrificar una pieza para crear una posición donde capturas dos piezas del oponente.",
                "de": "Die Zwei-für-eins-Taktik beinhaltet das Opfern eines Steins um eine Position zu schaffen in der man zwei gegnerische schlägt.",
                "nl": "De twee-voor-één-tactiek houdt in dat je één stuk offert om een positie te creëren waarin je twee stukken van de tegenstander slaat."
            }
        },
        {
            "question": {
                "en": "What is the 'single corner' system in checkers?",
                "es": "¿Qué es el sistema de 'esquina simple' en damas?",
                "de": "Was ist das 'Einzelecken'-System beim Damespiel?",
                "nl": "Wat is het 'enkele hoek'-systeem bij dammen?"
            },
            "options": [
                {
                    "en": "A board orientation with one accessible corner",
                    "es": "Una orientación del tablero con una esquina accesible",
                    "de": "Eine Brettausrichtung mit einer zugänglichen Ecke",
                    "nl": "Een bordoriëntatie met één toegankelijke hoek"
                },
                {
                    "en": "Using only one corner of the board",
                    "es": "Usar solo una esquina del tablero",
                    "de": "Nur eine Ecke des Bretts benutzen",
                    "nl": "Slechts één hoek van het bord gebruiken"
                },
                {
                    "en": "A strategy using corner pieces only",
                    "es": "Una estrategia usando solo piezas de esquina",
                    "de": "Eine Strategie nur mit Ecksteinen",
                    "nl": "Een strategie met alleen hoekstukken"
                },
                {
                    "en": "A defensive formation in the corner",
                    "es": "Una formación defensiva en la esquina",
                    "de": "Eine Verteidigungsformation in der Ecke",
                    "nl": "Een verdedigingsformatie in de hoek"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The single corner system refers to a board orientation where only one corner square on each player's side is a playable dark square.",
                "es": "El sistema de esquina simple se refiere a una orientación del tablero donde solo una esquina es una casilla oscura jugable.",
                "de": "Das Einzeleckensystem bezieht sich auf eine Brettausrichtung bei der nur ein Eckfeld pro Seite ein bespielbares dunkles Feld ist.",
                "nl": "Het enkele hoeksysteem verwijst naar een bordoriëntatie waarbij slechts één hoek aan elke kant een bespeelbaar donker veld is."
            }
        },
        {
            "question": {
                "en": "Why should you avoid moving side pieces early?",
                "es": "¿Por qué debes evitar mover piezas laterales pronto?",
                "de": "Warum sollte man Seitensteine nicht früh ziehen?",
                "nl": "Waarom moet je zijstukken niet vroeg bewegen?"
            },
            "options": [
                {
                    "en": "Side pieces protect your edge and limit opponent options",
                    "es": "Las piezas laterales protegen el borde y limitan opciones",
                    "de": "Seitensteine schützen den Rand und begrenzen Optionen",
                    "nl": "Zijstukken beschermen de rand en beperken opties"
                },
                {
                    "en": "Side pieces are worth more points",
                    "es": "Las piezas laterales valen más puntos",
                    "de": "Seitensteine sind mehr Punkte wert",
                    "nl": "Zijstukken zijn meer punten waard"
                },
                {
                    "en": "Side pieces cannot be captured",
                    "es": "Las piezas laterales no pueden ser capturadas",
                    "de": "Seitensteine können nicht geschlagen werden",
                    "nl": "Zijstukken kunnen niet geslagen worden"
                },
                {
                    "en": "Side pieces move faster",
                    "es": "Las piezas laterales se mueven más rápido",
                    "de": "Seitensteine bewegen sich schneller",
                    "nl": "Zijstukken bewegen sneller"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Side pieces help protect your edge squares and restrict the opponent's options. Moving them too early can weaken your flank.",
                "es": "Las piezas laterales protegen las casillas del borde y restringen las opciones del oponente. Moverlas pronto debilita el flanco.",
                "de": "Seitensteine schützen die Randfelder und schränken die Optionen des Gegners ein. Frühes Ziehen schwächt die Flanke.",
                "nl": "Zijstukken beschermen de randvelden en beperken de opties van de tegenstander. Ze te vroeg bewegen verzwakt je flank."
            }
        },
        {
            "question": {
                "en": "What is 'trapping' a piece in checkers?",
                "es": "¿Qué es 'atrapar' una pieza en damas?",
                "de": "Was bedeutet es einen Stein beim Dame zu 'fangen'?",
                "nl": "Wat is een stuk 'vastzetten' bij dammen?"
            },
            "options": [
                {
                    "en": "Surrounding a piece so it cannot move safely",
                    "es": "Rodear una pieza para que no pueda moverse",
                    "de": "Einen Stein umzingeln sodass er nicht sicher ziehen kann",
                    "nl": "Een stuk omsingelen zodat het niet veilig kan bewegen"
                },
                {
                    "en": "Placing a piece on a special trap square",
                    "es": "Colocar una pieza en una casilla trampa especial",
                    "de": "Einen Stein auf ein spezielles Fallenfeld setzen",
                    "nl": "Een stuk op een speciaal valveld plaatsen"
                },
                {
                    "en": "Hiding a piece under another piece",
                    "es": "Esconder una pieza debajo de otra",
                    "de": "Einen Stein unter einem anderen verstecken",
                    "nl": "Een stuk onder een ander stuk verstoppen"
                },
                {
                    "en": "Removing a piece without capturing it",
                    "es": "Retirar una pieza sin capturarla",
                    "de": "Einen Stein entfernen ohne ihn zu schlagen",
                    "nl": "Een stuk verwijderen zonder het te slaan"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Trapping means positioning your pieces so that an opponent's piece has no safe moves and will eventually be captured.",
                "es": "Atrapar significa posicionar tus piezas para que una pieza del oponente no tenga movimientos seguros y sea capturada.",
                "de": "Fangen bedeutet die eigenen Steine so zu positionieren, dass ein gegnerischer Stein keine sicheren Züge hat.",
                "nl": "Vastzetten betekent je stukken zo plaatsen dat een stuk van de tegenstander geen veilige zetten meer heeft."
            }
        },
        {
            "question": {
                "en": "What is a 'back row defender' in checkers strategy?",
                "es": "¿Qué es un 'defensor de última fila' en damas?",
                "de": "Was ist ein 'Hinterreihenverteidiger' beim Dame?",
                "nl": "Wat is een 'achterste rij verdediger' bij dammen?"
            },
            "options": [
                {
                    "en": "A piece kept on the back row to prevent promotions",
                    "es": "Una pieza en la última fila para evitar promociones",
                    "de": "Ein Stein auf der Hinterreihe um Beförderungen zu verhindern",
                    "nl": "Een stuk op de achterste rij om promoties te voorkomen"
                },
                {
                    "en": "A special defensive piece",
                    "es": "Una pieza defensiva especial",
                    "de": "Ein spezieller Verteidigungsstein",
                    "nl": "Een speciaal verdedigingsstuk"
                },
                {
                    "en": "A king that stays in one place",
                    "es": "Un rey que se queda en un lugar",
                    "de": "Ein König der an einem Ort bleibt",
                    "nl": "Een dam die op één plek blijft"
                },
                {
                    "en": "The last piece remaining on the board",
                    "es": "La última pieza que queda en el tablero",
                    "de": "Der letzte Stein auf dem Brett",
                    "nl": "Het laatste stuk op het bord"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A back row defender is a piece strategically left on the back row to prevent the opponent from easily promoting pieces to kings.",
                "es": "Un defensor de última fila es una pieza dejada estratégicamente para evitar que el oponente promueva piezas fácilmente.",
                "de": "Ein Hinterreihenverteidiger ist ein strategisch auf der letzten Reihe gelassener Stein um gegnerische Beförderungen zu verhindern.",
                "nl": "Een achterste rij verdediger is een stuk dat strategisch op de achterste rij blijft om promoties van de tegenstander te voorkomen."
            }
        },
        {
            "question": {
                "en": "What happens if neither player can move in checkers?",
                "es": "¿Qué pasa si ningún jugador puede moverse en damas?",
                "de": "Was passiert wenn kein Spieler ziehen kann beim Dame?",
                "nl": "Wat gebeurt er als geen speler kan zetten bij dammen?"
            },
            "options": [
                {
                    "en": "The game is a draw",
                    "es": "El juego es un empate",
                    "de": "Das Spiel endet unentschieden",
                    "nl": "Het spel is remise"
                },
                {
                    "en": "The last player to move wins",
                    "es": "El último jugador en moverse gana",
                    "de": "Der letzte Spieler der gezogen hat gewinnt",
                    "nl": "De laatste speler die bewoog wint"
                },
                {
                    "en": "Both players lose",
                    "es": "Ambos jugadores pierden",
                    "de": "Beide Spieler verlieren",
                    "nl": "Beide spelers verliezen"
                },
                {
                    "en": "The game restarts from the beginning",
                    "es": "El juego se reinicia desde el principio",
                    "de": "Das Spiel beginnt von vorne",
                    "nl": "Het spel begint opnieuw"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "If a position is reached where neither player can make a legal move, the game is declared a draw.",
                "es": "Si se llega a una posición donde ningún jugador puede hacer un movimiento legal, el juego se declara empate.",
                "de": "Wenn eine Stellung erreicht wird in der kein Spieler einen legalen Zug machen kann, wird das Spiel unentschieden erklärt.",
                "nl": "Als een positie bereikt wordt waarin geen speler een legale zet kan doen, wordt het spel remise verklaard."
            }
        },
        {
            "question": {
                "en": "What is the advantage of having connected pieces?",
                "es": "¿Cuál es la ventaja de tener piezas conectadas?",
                "de": "Was ist der Vorteil von verbundenen Steinen?",
                "nl": "Wat is het voordeel van verbonden stukken?"
            },
            "options": [
                {
                    "en": "They protect each other from being captured",
                    "es": "Se protegen mutuamente de ser capturadas",
                    "de": "Sie schützen sich gegenseitig vor dem Schlagen",
                    "nl": "Ze beschermen elkaar tegen slaan"
                },
                {
                    "en": "They can move together as one unit",
                    "es": "Pueden moverse juntas como una unidad",
                    "de": "Sie können sich als Einheit zusammen bewegen",
                    "nl": "Ze kunnen samen bewegen als één eenheid"
                },
                {
                    "en": "They score bonus points",
                    "es": "Obtienen puntos extra",
                    "de": "Sie erhalten Bonuspunkte",
                    "nl": "Ze scoren bonuspunten"
                },
                {
                    "en": "They become kings automatically",
                    "es": "Se convierten en reyes automáticamente",
                    "de": "Sie werden automatisch Könige",
                    "nl": "Ze worden automatisch dam"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Connected pieces protect each other because an opponent cannot jump one without landing on or near another, making captures risky.",
                "es": "Las piezas conectadas se protegen mutuamente porque el oponente no puede saltar una sin aterrizar cerca de otra.",
                "de": "Verbundene Steine schützen sich gegenseitig weil der Gegner nicht über einen springen kann ohne bei einem anderen zu landen.",
                "nl": "Verbonden stukken beschermen elkaar omdat de tegenstander niet over het ene kan springen zonder bij het andere te landen."
            }
        },
        {
            "question": {
                "en": "What does 'tempo' mean in checkers?",
                "es": "¿Qué significa 'tempo' en damas?",
                "de": "Was bedeutet 'Tempo' beim Damespiel?",
                "nl": "Wat betekent 'tempo' bij dammen?"
            },
            "options": [
                {
                    "en": "The initiative gained by forcing opponent responses",
                    "es": "La iniciativa ganada al forzar respuestas del oponente",
                    "de": "Die Initiative durch Erzwingen gegnerischer Antworten",
                    "nl": "Het initiatief door het afdwingen van reacties"
                },
                {
                    "en": "The speed of moving pieces",
                    "es": "La velocidad de mover piezas",
                    "de": "Die Geschwindigkeit der Steinbewegung",
                    "nl": "De snelheid van het bewegen van stukken"
                },
                {
                    "en": "A time limit for each move",
                    "es": "Un límite de tiempo para cada movimiento",
                    "de": "Ein Zeitlimit für jeden Zug",
                    "nl": "Een tijdslimiet voor elke zet"
                },
                {
                    "en": "The rhythm of the game music",
                    "es": "El ritmo de la música del juego",
                    "de": "Der Rhythmus der Spielmusik",
                    "nl": "Het ritme van de spelmuziek"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Tempo in checkers refers to the initiative or advantage gained by making moves that force the opponent to respond defensively.",
                "es": "El tempo en damas se refiere a la iniciativa o ventaja obtenida al hacer movimientos que fuerzan respuestas defensivas.",
                "de": "Tempo beim Dame bezieht sich auf die Initiative durch Züge die den Gegner zu defensiven Antworten zwingen.",
                "nl": "Tempo bij dammen verwijst naar het initiatief door zetten die de tegenstander dwingen defensief te reageren."
            }
        },
        {
            "question": {
                "en": "What is an 'exchange' in checkers?",
                "es": "¿Qué es un 'intercambio' en damas?",
                "de": "Was ist ein 'Tausch' beim Damespiel?",
                "nl": "Wat is een 'ruil' bij dammen?"
            },
            "options": [
                {
                    "en": "Both players capturing an equal number of pieces",
                    "es": "Ambos jugadores capturando igual número de piezas",
                    "de": "Beide Spieler schlagen gleich viele Steine",
                    "nl": "Beide spelers slaan een gelijk aantal stukken"
                },
                {
                    "en": "Swapping positions of two of your pieces",
                    "es": "Intercambiar posiciones de dos de tus piezas",
                    "de": "Die Positionen zweier eigener Steine tauschen",
                    "nl": "De posities van twee eigen stukken wisselen"
                },
                {
                    "en": "Trading boards with the opponent",
                    "es": "Intercambiar tableros con el oponente",
                    "de": "Bretter mit dem Gegner tauschen",
                    "nl": "Borden wisselen met de tegenstander"
                },
                {
                    "en": "Replacing a captured piece with a new one",
                    "es": "Reemplazar una pieza capturada con una nueva",
                    "de": "Einen geschlagenen Stein durch einen neuen ersetzen",
                    "nl": "Een geslagen stuk vervangen door een nieuw stuk"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "An exchange occurs when both players capture the same number of pieces in a sequence, maintaining the material balance.",
                "es": "Un intercambio ocurre cuando ambos jugadores capturan el mismo número de piezas, manteniendo el equilibrio material.",
                "de": "Ein Tausch findet statt wenn beide Spieler gleich viele Steine schlagen und das materielle Gleichgewicht erhalten bleibt.",
                "nl": "Een ruil vindt plaats wanneer beide spelers evenveel stukken slaan, waardoor de materiaalbalans behouden blijft."
            }
        },
        {
            "question": {
                "en": "What is a 'dyke' formation in checkers?",
                "es": "¿Qué es una formación de 'dique' en damas?",
                "de": "Was ist eine 'Deich'-Formation beim Damespiel?",
                "nl": "Wat is een 'dijk'-formatie bij dammen?"
            },
            "options": [
                {
                    "en": "A diagonal line of pieces forming a barrier",
                    "es": "Una línea diagonal de piezas formando una barrera",
                    "de": "Eine diagonale Steinreihe die eine Barriere bildet",
                    "nl": "Een diagonale lijn stukken die een barrière vormt"
                },
                {
                    "en": "A horizontal row of pieces",
                    "es": "Una fila horizontal de piezas",
                    "de": "Eine horizontale Reihe von Steinen",
                    "nl": "Een horizontale rij stukken"
                },
                {
                    "en": "A circular arrangement of pieces",
                    "es": "Una disposición circular de piezas",
                    "de": "Eine kreisförmige Anordnung von Steinen",
                    "nl": "Een cirkelvormige opstelling van stukken"
                },
                {
                    "en": "Two kings side by side",
                    "es": "Dos reyes uno al lado del otro",
                    "de": "Zwei Könige nebeneinander",
                    "nl": "Twee dammen naast elkaar"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A dyke is a diagonal line of pieces that forms a strong defensive barrier, blocking the opponent's advance along that diagonal.",
                "es": "Un dique es una línea diagonal de piezas que forma una barrera defensiva fuerte, bloqueando el avance del oponente.",
                "de": "Ein Deich ist eine diagonale Steinreihe die eine starke Verteidigungsbarriere bildet und den Vormarsch des Gegners blockiert.",
                "nl": "Een dijk is een diagonale lijn stukken die een sterke verdedigingsbarrière vormt en de opmars van de tegenstander blokkeert."
            }
        },
        {
            "question": {
                "en": "What is the 'elbow' position in checkers?",
                "es": "¿Qué es la posición del 'codo' en damas?",
                "de": "Was ist die 'Ellbogen'-Position beim Damespiel?",
                "nl": "Wat is de 'elleboog'-positie bij dammen?"
            },
            "options": [
                {
                    "en": "Two pieces forming an L-shaped support structure",
                    "es": "Dos piezas formando una estructura de apoyo en L",
                    "de": "Zwei Steine die eine L-förmige Stützstruktur bilden",
                    "nl": "Twee stukken die een L-vormige steunstructuur vormen"
                },
                {
                    "en": "A piece stuck in the corner",
                    "es": "Una pieza atrapada en la esquina",
                    "de": "Ein Stein der in der Ecke festsitzt",
                    "nl": "Een stuk vast in de hoek"
                },
                {
                    "en": "A bent row of three pieces",
                    "es": "Una fila doblada de tres piezas",
                    "de": "Eine gebogene Reihe von drei Steinen",
                    "nl": "Een gebogen rij van drie stukken"
                },
                {
                    "en": "The position of the player's arm",
                    "es": "La posición del brazo del jugador",
                    "de": "Die Position des Spielerarms",
                    "nl": "De positie van de arm van de speler"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The elbow position involves two pieces arranged in an L-shape that support each other and control key squares on the board.",
                "es": "La posición del codo involucra dos piezas en forma de L que se apoyan mutuamente y controlan casillas clave.",
                "de": "Die Ellbogenposition besteht aus zwei Steinen in L-Form die sich gegenseitig stützen und Schlüsselfelder kontrollieren.",
                "nl": "De elleboogpositie bestaat uit twee stukken in een L-vorm die elkaar steunen en belangrijke velden controleren."
            }
        },
        {
            "question": {
                "en": "What is the benefit of keeping a compact formation?",
                "es": "¿Cuál es el beneficio de mantener una formación compacta?",
                "de": "Was ist der Vorteil einer kompakten Formation?",
                "nl": "Wat is het voordeel van een compacte formatie?"
            },
            "options": [
                {
                    "en": "Pieces support each other and reduce capture risks",
                    "es": "Las piezas se apoyan y reducen riesgos de captura",
                    "de": "Steine stützen sich und reduzieren Schlagrisiken",
                    "nl": "Stukken steunen elkaar en verminderen slagrisico's"
                },
                {
                    "en": "Compact formations move faster",
                    "es": "Las formaciones compactas se mueven más rápido",
                    "de": "Kompakte Formationen bewegen sich schneller",
                    "nl": "Compacte formaties bewegen sneller"
                },
                {
                    "en": "Compact formations earn extra points",
                    "es": "Las formaciones compactas ganan puntos extra",
                    "de": "Kompakte Formationen erhalten Extrapunkte",
                    "nl": "Compacte formaties verdienen extra punten"
                },
                {
                    "en": "Compact pieces cannot be jumped",
                    "es": "Las piezas compactas no pueden ser saltadas",
                    "de": "Kompakte Steine können nicht übersprungen werden",
                    "nl": "Compacte stukken kunnen niet gesprongen worden"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A compact formation keeps pieces close together so they protect each other, making it harder for the opponent to find safe captures.",
                "es": "Una formación compacta mantiene las piezas juntas para que se protejan mutuamente, dificultando capturas seguras.",
                "de": "Eine kompakte Formation hält Steine zusammen damit sie sich schützen, was sichere Schlagmöglichkeiten für den Gegner erschwert.",
                "nl": "Een compacte formatie houdt stukken bij elkaar zodat ze elkaar beschermen, waardoor veilige slagen moeilijker worden."
            }
        },
        {
            "question": {
                "en": "What is a 'man down' situation in checkers?",
                "es": "¿Qué es una situación de 'pieza menos' en damas?",
                "de": "Was ist eine 'Stein weniger'-Situation beim Dame?",
                "nl": "Wat is een 'stuk minder'-situatie bij dammen?"
            },
            "options": [
                {
                    "en": "Having fewer pieces than your opponent",
                    "es": "Tener menos piezas que tu oponente",
                    "de": "Weniger Steine als der Gegner haben",
                    "nl": "Minder stukken hebben dan je tegenstander"
                },
                {
                    "en": "Losing a king piece",
                    "es": "Perder una pieza rey",
                    "de": "Einen Königstein verlieren",
                    "nl": "Een damstuk verliezen"
                },
                {
                    "en": "Having a piece removed by the referee",
                    "es": "Que el árbitro retire una pieza",
                    "de": "Einen Stein vom Schiedsrichter entfernt bekommen",
                    "nl": "Een stuk door de scheidsrechter laten verwijderen"
                },
                {
                    "en": "A piece that fell off the board",
                    "es": "Una pieza que cayó del tablero",
                    "de": "Ein Stein der vom Brett gefallen ist",
                    "nl": "Een stuk dat van het bord gevallen is"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Being 'man down' means you have fewer pieces than your opponent, putting you at a material disadvantage in the game.",
                "es": "Estar con una 'pieza menos' significa tener menos piezas que el oponente, poniendo en desventaja material.",
                "de": "Einen 'Stein weniger' zu haben bedeutet weniger Steine als der Gegner, was einen materiellen Nachteil darstellt.",
                "nl": "Een 'stuk minder' hebben betekent dat je minder stukken hebt dan je tegenstander, wat een materieel nadeel is."
            }
        },
        {
            "question": {
                "en": "What is the role of the 'king row' in checkers?",
                "es": "¿Cuál es el papel de la 'fila del rey' en damas?",
                "de": "Welche Rolle spielt die 'Königsreihe' beim Dame?",
                "nl": "Wat is de rol van de 'damrij' bij dammen?"
            },
            "options": [
                {
                    "en": "It is the row where pieces get promoted to kings",
                    "es": "Es la fila donde las piezas se promueven a reyes",
                    "de": "Es ist die Reihe in der Steine zu Königen befördert werden",
                    "nl": "Het is de rij waar stukken gepromoveerd worden tot dam"
                },
                {
                    "en": "It is a special row only kings can use",
                    "es": "Es una fila especial solo para reyes",
                    "de": "Es ist eine spezielle Reihe nur für Könige",
                    "nl": "Het is een speciale rij alleen voor dammen"
                },
                {
                    "en": "It is the middle row of the board",
                    "es": "Es la fila del medio del tablero",
                    "de": "Es ist die mittlere Reihe des Bretts",
                    "nl": "Het is de middelste rij van het bord"
                },
                {
                    "en": "It is where captured pieces are placed",
                    "es": "Es donde se colocan las piezas capturadas",
                    "de": "Dort werden geschlagene Steine abgelegt",
                    "nl": "Daar worden geslagen stukken geplaatst"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "The king row is the opponent's back row. When your piece reaches it, the piece is promoted to a king and can move both forward and backward.",
                "es": "La fila del rey es la última fila del oponente. Cuando tu pieza la alcanza, se promueve a rey y puede moverse en ambas direcciones.",
                "de": "Die Königsreihe ist die hintere Reihe des Gegners. Erreicht ein Stein sie, wird er zum König und kann vor und zurück ziehen.",
                "nl": "De damrij is de achterste rij van de tegenstander. Als je stuk deze bereikt, wordt het dam en kan het voor- en achterwaarts bewegen."
            }
        },
        {
            "question": {
                "en": "What is 'threading' in checkers tactics?",
                "es": "¿Qué es 'enhebrar' en las tácticas de damas?",
                "de": "Was ist 'Einfädeln' in der Dame-Taktik?",
                "nl": "Wat is 'indraaden' in damtactiek?"
            },
            "options": [
                {
                    "en": "Moving a piece through gaps in the opponent's formation",
                    "es": "Mover una pieza por huecos en la formación enemiga",
                    "de": "Einen Stein durch Lücken in der gegnerischen Formation führen",
                    "nl": "Een stuk door gaten in de formatie van de tegenstander bewegen"
                },
                {
                    "en": "Connecting all pieces in a straight line",
                    "es": "Conectar todas las piezas en línea recta",
                    "de": "Alle Steine in einer geraden Linie verbinden",
                    "nl": "Alle stukken in een rechte lijn verbinden"
                },
                {
                    "en": "Weaving pieces back and forth",
                    "es": "Tejer piezas de un lado a otro",
                    "de": "Steine hin und her weben",
                    "nl": "Stukken heen en weer weven"
                },
                {
                    "en": "Tying the game intentionally",
                    "es": "Empatar el juego intencionalmente",
                    "de": "Das Spiel absichtlich unentschieden machen",
                    "nl": "Het spel opzettelijk gelijk maken"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Threading is a tactic where you maneuver a piece through gaps in the opponent's formation to reach a strong position or the king row.",
                "es": "Enhebrar es una táctica donde maniobras una pieza por los huecos en la formación enemiga para alcanzar una posición fuerte.",
                "de": "Einfädeln ist eine Taktik bei der man einen Stein durch Lücken in der gegnerischen Formation zu einer starken Position manövriert.",
                "nl": "Indraaden is een tactiek waarbij je een stuk door gaten in de formatie van de tegenstander manoeuvreert naar een sterke positie."
            }
        },
        {
            "question": {
                "en": "Why is it important to develop pieces evenly in checkers?",
                "es": "¿Por qué es importante desarrollar piezas de manera uniforme?",
                "de": "Warum ist gleichmäßige Steinentwicklung beim Dame wichtig?",
                "nl": "Waarom is gelijkmatige stukkenontwikkeling belangrijk?"
            },
            "options": [
                {
                    "en": "It prevents weak spots that opponents can exploit",
                    "es": "Evita puntos débiles que el oponente puede explotar",
                    "de": "Es verhindert Schwachstellen die der Gegner ausnutzen kann",
                    "nl": "Het voorkomt zwakke plekken die de tegenstander kan uitbuiten"
                },
                {
                    "en": "Uneven development is against the rules",
                    "es": "El desarrollo desigual está contra las reglas",
                    "de": "Ungleichmäßige Entwicklung ist regelwidrig",
                    "nl": "Ongelijkmatige ontwikkeling is tegen de regels"
                },
                {
                    "en": "Even development gives you extra turns",
                    "es": "El desarrollo uniforme te da turnos extra",
                    "de": "Gleichmäßige Entwicklung gibt Extrazüge",
                    "nl": "Gelijkmatige ontwikkeling geeft extra beurten"
                },
                {
                    "en": "Pieces must move in alphabetical order",
                    "es": "Las piezas deben moverse en orden alfabético",
                    "de": "Steine müssen in alphabetischer Reihenfolge ziehen",
                    "nl": "Stukken moeten in alfabetische volgorde bewegen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "Even development ensures all parts of your position are strong, preventing weak spots that skilled opponents can target for attacks.",
                "es": "El desarrollo uniforme asegura que toda la posición sea fuerte, evitando puntos débiles que oponentes hábiles pueden atacar.",
                "de": "Gleichmäßige Entwicklung stellt sicher dass alle Teile der Stellung stark sind und keine angreifbaren Schwachstellen entstehen.",
                "nl": "Gelijkmatige ontwikkeling zorgt ervoor dat alle delen van je stelling sterk zijn en er geen aanvalsbare zwakke plekken ontstaan."
            }
        },
        {
            "question": {
                "en": "What is a 'squeeze play' in checkers?",
                "es": "¿Qué es un 'juego de presión' en damas?",
                "de": "Was ist ein 'Druckspiel' beim Damespiel?",
                "nl": "Wat is een 'klemspel' bij dammen?"
            },
            "options": [
                {
                    "en": "Gradually limiting the opponent's available moves",
                    "es": "Limitar gradualmente los movimientos disponibles del oponente",
                    "de": "Die verfügbaren Züge des Gegners schrittweise einschränken",
                    "nl": "De beschikbare zetten van de tegenstander geleidelijk beperken"
                },
                {
                    "en": "Pressing pieces firmly onto the board",
                    "es": "Presionar las piezas firmemente en el tablero",
                    "de": "Steine fest auf das Brett drücken",
                    "nl": "Stukken stevig op het bord drukken"
                },
                {
                    "en": "Playing with a tight time limit",
                    "es": "Jugar con un límite de tiempo ajustado",
                    "de": "Mit engem Zeitlimit spielen",
                    "nl": "Spelen met een strakke tijdslimiet"
                },
                {
                    "en": "Capturing all pieces in one sequence",
                    "es": "Capturar todas las piezas en una secuencia",
                    "de": "Alle Steine in einer Folge schlagen",
                    "nl": "Alle stukken in één reeks slaan"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A squeeze play gradually restricts the opponent's movement options, forcing them into increasingly disadvantageous positions.",
                "es": "Un juego de presión restringe gradualmente las opciones de movimiento del oponente, forzándolo a posiciones desfavorables.",
                "de": "Ein Druckspiel schränkt die Zugmöglichkeiten des Gegners schrittweise ein und zwingt ihn in nachteilige Stellungen.",
                "nl": "Een klemspel beperkt geleidelijk de zetmogelijkheden van de tegenstander en dwingt hem in nadelige posities."
            }
        },
        {
            "question": {
                "en": "What is a 'pitch' in checkers strategy?",
                "es": "¿Qué es un 'lanzamiento' en la estrategia de damas?",
                "de": "Was ist ein 'Wurf' in der Dame-Strategie?",
                "nl": "Wat is een 'worp' in de damstrategie?"
            },
            "options": [
                {
                    "en": "Offering a piece to disrupt the opponent's structure",
                    "es": "Ofrecer una pieza para desestabilizar la estructura enemiga",
                    "de": "Einen Stein anbieten um die gegnerische Struktur zu stören",
                    "nl": "Een stuk aanbieden om de structuur van de tegenstander te verstoren"
                },
                {
                    "en": "Throwing pieces off the board",
                    "es": "Lanzar piezas fuera del tablero",
                    "de": "Steine vom Brett werfen",
                    "nl": "Stukken van het bord gooien"
                },
                {
                    "en": "A special way to place pieces initially",
                    "es": "Una forma especial de colocar piezas inicialmente",
                    "de": "Eine besondere Art Steine anfangs zu platzieren",
                    "nl": "Een speciale manier om stukken aanvankelijk te plaatsen"
                },
                {
                    "en": "Tilting the board at an angle",
                    "es": "Inclinar el tablero en un ángulo",
                    "de": "Das Brett in einem Winkel neigen",
                    "nl": "Het bord in een hoek kantelen"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A pitch involves deliberately offering a piece to the opponent to disrupt their formation and create tactical opportunities.",
                "es": "Un lanzamiento implica ofrecer deliberadamente una pieza al oponente para desestabilizar su formación y crear oportunidades.",
                "de": "Ein Wurf bedeutet dem Gegner absichtlich einen Stein anzubieten um dessen Formation zu stören und taktische Chancen zu schaffen.",
                "nl": "Een worp houdt in dat je bewust een stuk aan de tegenstander aanbiedt om hun formatie te verstoren en kansen te creëren."
            }
        },
        {
            "question": {
                "en": "What is a 'star' formation used for in checkers?",
                "es": "¿Para qué se usa la formación de 'estrella' en damas?",
                "de": "Wofür wird die 'Stern'-Formation beim Dame verwendet?",
                "nl": "Waarvoor wordt de 'ster'-formatie bij dammen gebruikt?"
            },
            "options": [
                {
                    "en": "Maximum board control from a central position",
                    "es": "Máximo control del tablero desde una posición central",
                    "de": "Maximale Brettkontrolle von einer zentralen Position",
                    "nl": "Maximale bordcontrole vanuit een centrale positie"
                },
                {
                    "en": "Decorating the board with a pattern",
                    "es": "Decorar el tablero con un patrón",
                    "de": "Das Brett mit einem Muster dekorieren",
                    "nl": "Het bord decoreren met een patroon"
                },
                {
                    "en": "Confusing the opponent with random placement",
                    "es": "Confundir al oponente con colocación aleatoria",
                    "de": "Den Gegner mit zufälliger Platzierung verwirren",
                    "nl": "De tegenstander verwarren met willekeurige plaatsing"
                },
                {
                    "en": "Blocking all four corners of the board",
                    "es": "Bloquear las cuatro esquinas del tablero",
                    "de": "Alle vier Ecken des Bretts blockieren",
                    "nl": "Alle vier hoeken van het bord blokkeren"
                }
            ],
            "correct": 0,
            "explanation": {
                "en": "A star formation places pieces to radiate outward from the center, maximizing control over the board and influencing multiple areas.",
                "es": "Una formación estrella coloca piezas irradiando desde el centro, maximizando el control del tablero e influenciando múltiples áreas.",
                "de": "Eine Sternformation platziert Steine strahlenförmig vom Zentrum aus und maximiert die Kontrolle über mehrere Bereiche.",
                "nl": "Een sterformatie plaatst stukken stralend vanuit het centrum, waardoor de controle over meerdere gebieden wordt gemaximaliseerd."
            }
        }
    ]
};
